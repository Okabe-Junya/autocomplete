#!/usr/bin/env node
// Deterministically generate Fig completion specs for `gcloud` from its
// CLI-tree JSON.
//
// Produce the input JSON from an installed Google Cloud SDK with:
//
//   gcloud meta cli-trees update --commands=gcloud --directory=<dir> --skip-completions
//
// which writes `<dir>/gcloud.json`.
//
// Usage:
//   node scripts/generate-gcloud-specs.mjs <path-to-gcloud.json>
//
// This deletes and regenerates every file under `src/gcloud/` plus the
// `src/gcloud.ts` index. Output is deterministic (stable sort orders); run
// `biome check --write` afterwards to pretty-print.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error(
    "Usage: node scripts/generate-gcloud-specs.mjs <path-to-gcloud.json>"
  );
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const srcDir = path.join(repoRoot, "src");
const gcloudDir = path.join(srcDir, "gcloud");

const root = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const FLAGS = root.SERIALIZED_FLAG_LIST;
const CLI_VERSION = root.CLI_VERSION;

const HEADER = `// Generated from the gcloud CLI tree (SDK ${CLI_VERSION}) by scripts/generate-gcloud-specs.mjs — do not edit by hand`;

// --- helpers ---------------------------------------------------------------

// Trailing whitespace + a single trailing period are stripped, matching the
// convention of the hand-maintained specs.
function cleanDesc(s) {
  if (!s) return "";
  let t = String(s).replace(/\s+$/, "");
  if (t.endsWith(".")) t = t.slice(0, -1);
  return t;
}

function capitalize(s) {
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
}

function byName(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

const J = JSON.stringify;

// Unique, visible flag indices for a leaf command (dedupe by index so a flag
// exposed under multiple dict keys is emitted once).
function visibleFlagIndices(node) {
  const seen = new Set();
  for (const idx of Object.values(node.flags || {})) {
    const f = FLAGS[idx];
    if (!f || f.is_hidden) continue;
    seen.add(idx);
  }
  return [...seen];
}

function flagPrimaryName(idx) {
  return FLAGS[idx].name;
}

function visibleChildren(node) {
  return Object.values(node.commands || {})
    .filter((c) => !c.is_hidden)
    .sort((a, b) => byName(a.name, b.name));
}

// --- emitters (produce raw TS object-literal text; biome pretty-prints) -----

function optionText(idx) {
  const f = FLAGS[idx];
  const names = [f.name, ...(f.alternative_names || [])].filter(
    (n, i, arr) => n && arr.indexOf(n) === i
  );
  const nameField = names.length > 1 ? J(names) : J(names[0]);
  const parts = [`name: ${nameField}`];
  const d = cleanDesc(f.description);
  if (d) parts.push(`description: ${J(d)}`);
  if (f.type !== "bool") {
    const argParts = [
      `name: ${J(f.value || "")}`,
      `description: ${J(capitalize(f.type))}`,
      `suggestions: ${J((f.choices || []).map(String))}`,
    ];
    parts.push(`args: { ${argParts.join(", ")} }`);
  }
  return `{ ${parts.join(", ")} }`;
}

function positionalText(p) {
  const parts = [`name: ${J(p.value || p.name)}`];
  const d = cleanDesc(p.description);
  if (d) parts.push(`description: ${J(d)}`);
  if (p.nargs === "?" || p.nargs === "*") parts.push("isOptional: true");
  if (p.nargs === "*" || p.nargs === "+") parts.push("isVariadic: true");
  return `{ ${parts.join(", ")} }`;
}

function positionalsField(node) {
  const pos = (node.positionals || []).filter((p) => !p.is_hidden);
  if (!pos.length) return "";
  const items = pos.map(positionalText);
  return items.length === 1
    ? `args: ${items[0]}`
    : `args: [${items.join(", ")}]`;
}

function leafText(node, hoistSet) {
  const idxs = visibleFlagIndices(node).sort((a, b) =>
    byName(flagPrimaryName(a), flagPrimaryName(b))
  );
  const optItems = idxs.map((i) =>
    hoistSet.has(i) ? `flag${i}` : optionText(i)
  );
  const parts = [`name: ${J(node.name)}`];
  const d = cleanDesc(node.capsule);
  if (d) parts.push(`description: ${J(d)}`);
  if (optItems.length) parts.push(`options: [${optItems.join(", ")}]`);
  const argsField = positionalsField(node);
  if (argsField) parts.push(argsField);
  return `{ ${parts.join(", ")} }`;
}

function nodeText(node, hoistSet) {
  if (!node.is_group) return leafText(node, hoistSet);
  const subs = visibleChildren(node).map((c) => nodeText(c, hoistSet));
  const parts = [`name: ${J(node.name)}`];
  const d = cleanDesc(node.capsule);
  if (d) parts.push(`description: ${J(d)}`);
  parts.push(`subcommands: [${subs.join(", ")}]`);
  return `{ ${parts.join(", ")} }`;
}

// Count flag-index usage across every leaf command in a subtree, so flags used
// by more than one command in the file can be hoisted to a module-level const.
function collectFlagUsage(node, counts) {
  if (node.is_group) {
    for (const child of visibleChildren(node)) collectFlagUsage(child, counts);
  } else {
    for (const idx of visibleFlagIndices(node)) {
      counts.set(idx, (counts.get(idx) || 0) + 1);
    }
  }
}

// --- generation ------------------------------------------------------------

// Wipe existing generated group files.
if (fs.existsSync(gcloudDir)) {
  for (const f of fs.readdirSync(gcloudDir)) {
    if (f.endsWith(".ts")) fs.rmSync(path.join(gcloudDir, f));
  }
} else {
  fs.mkdirSync(gcloudDir, { recursive: true });
}

const tops = visibleChildren(root);
let commandCount = 0;

function countCommands(node) {
  commandCount += 1;
  if (node.is_group) {
    for (const c of visibleChildren(node)) countCommands(c);
  }
}

for (const top of tops) {
  const counts = new Map();
  collectFlagUsage(top, counts);
  const hoistSet = new Set();
  for (const [idx, n] of counts) if (n >= 2) hoistSet.add(idx);

  const specText = nodeText(top, hoistSet);
  const constDecls = [...hoistSet]
    .sort((a, b) => a - b)
    .map((i) => `const flag${i}: Fig.Option = ${optionText(i)};`)
    .join("\n");

  const body = [
    HEADER,
    "",
    constDecls,
    constDecls ? "" : null,
    `const completionSpec: Fig.Spec = ${specText};`,
    "",
    "export default completionSpec;",
    "",
  ]
    .filter((l) => l !== null)
    .join("\n");

  fs.writeFileSync(path.join(gcloudDir, `${top.name}.ts`), body);
  countCommands(top);
}

// Index file.
const subItems = tops
  .map(
    (t) =>
      `{ name: ${J(t.name)}, description: ${J(
        cleanDesc(t.capsule)
      )}, loadSpec: ${J(`gcloud/${t.name}`)} }`
  )
  .join(", ");

const indexBody = [
  HEADER,
  "",
  `const completionSpec: Fig.Spec = { name: "gcloud", description: ${J(
    cleanDesc(root.capsule)
  )}, subcommands: [${subItems}] };`,
  "",
  "export default completionSpec;",
  "",
].join("\n");

fs.writeFileSync(path.join(srcDir, "gcloud.ts"), indexBody);

// --- sanity checks ---------------------------------------------------------

const emitted = new Set(
  fs.readdirSync(gcloudDir).filter((f) => f.endsWith(".ts"))
);
for (const t of tops) {
  const file = `${t.name}.ts`;
  if (!emitted.has(file)) {
    throw new Error(`Missing emitted file for loadSpec gcloud/${t.name}`);
  }
  const size = fs.statSync(path.join(gcloudDir, file)).size;
  if (size === 0) throw new Error(`Emitted empty file: ${file}`);
}

console.log(`SDK ${CLI_VERSION}`);
console.log(`Top-level groups/commands: ${tops.length}`);
console.log(`Total commands (recursive): ${commandCount}`);
console.log(`Wrote ${emitted.size} group files + src/gcloud.ts index`);
