#!/usr/bin/env node
// Regenerates Formula/autocomplete-specs.rb in Okabe-Junya/homebrew-tap and
// pushes it. Env: TAP_TOKEN (push credential), VERSION, SHA256.

import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { generateFormula } from "./generate-formula.mjs";

const { TAP_TOKEN, VERSION, SHA256 } = process.env;

if (!TAP_TOKEN) {
  console.warn(
    "::warning::HOMEBREW_TAP_GITHUB_TOKEN not set; skipping tap bump"
  );
  process.exit(0);
}
if (!VERSION || !SHA256) {
  console.error("VERSION and SHA256 must be set");
  process.exit(1);
}

const git = (dir, ...args) =>
  execFileSync("git", ["-C", dir, ...args], { stdio: "inherit" });

const dir = mkdtempSync(join(tmpdir(), "homebrew-tap-"));
execFileSync(
  "git",
  [
    "clone",
    "--depth",
    "1",
    `https://x-access-token:${TAP_TOKEN}@github.com/Okabe-Junya/homebrew-tap.git`,
    dir,
  ],
  { stdio: "inherit" }
);

writeFileSync(
  join(dir, "Formula", "autocomplete-specs.rb"),
  generateFormula(VERSION, SHA256)
);

git(dir, "config", "user.name", "github-actions[bot]");
git(
  dir,
  "config",
  "user.email",
  "41898282+github-actions[bot]@users.noreply.github.com"
);
git(dir, "add", "Formula/autocomplete-specs.rb");
git(dir, "commit", "-m", `chore: bump autocomplete-specs to ${VERSION}`);
git(dir, "push");
console.log(`Bumped tap formula to ${VERSION}`);
