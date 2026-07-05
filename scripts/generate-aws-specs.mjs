#!/usr/bin/env node
// Deterministically regenerate the AWS CLI Fig completion specs from an
// installed aws-cli's own data.
//
// Two data sources are used, both shipped inside the aws-cli package:
//
//   1. The auto-complete index SQLite DB `<root>/data/ac.index`. This is the
//      authoritative CLI surface: `command_table` gives the service/operation
//      tree, `param_table` gives every CLI argument (already including the
//      synthetic `--cli-input-json` / `--generate-cli-skeleton` / pagination
//      arguments) in the exact order the CLI exposes them.
//   2. The botocore service models `<root>/botocore/data/<service>/<api>/
//      service-2.json` (operation and parameter documentation) and
//      `waiters-2.json` (waiter definitions). Documentation is HTML that is
//      stripped to plain text.
//
// The command tree drives which subcommands/options exist; the models supply
// the human-readable descriptions. Option order mirrors `param_table`
// (i.e. the service model member order), matching the existing hand-checked
// specs — options are NOT re-sorted.
//
// Usage:
//   node scripts/generate-aws-specs.mjs [--awscli-root <path>]
//
// Regenerates every file under `src/aws/` and the service list in
// `src/aws.ts`, EXCEPT the hand-enhanced files (see PRESERVE) and the custom
// non-model CLI commands (see CUSTOM_COMMANDS), which are left untouched.
// Run `biome check --write` afterwards to pretty-print.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// --- configuration ---------------------------------------------------------

const DEFAULT_AWSCLI_ROOT =
  "/opt/homebrew/opt/awscli/libexec/lib/python3.14/site-packages/awscli";

function parseArgs(argv) {
  let root = DEFAULT_AWSCLI_ROOT;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--awscli-root") {
      root = argv[++i];
    } else {
      console.error(`Unknown argument: ${argv[i]}`);
      process.exit(1);
    }
  }
  return { root };
}

const { root: AWSCLI_ROOT } = parseArgs(process.argv.slice(2));
const AC_INDEX = path.join(AWSCLI_ROOT, "data", "ac.index");
const BOTOCORE_DATA = path.join(AWSCLI_ROOT, "botocore", "data");

for (const p of [AC_INDEX, BOTOCORE_DATA]) {
  if (!fs.existsSync(p)) {
    console.error(`Not found: ${p}\nIs --awscli-root correct? (${AWSCLI_ROOT})`);
    process.exit(1);
  }
}

const AWSCLI_VERSION = (() => {
  const init = fs.readFileSync(path.join(AWSCLI_ROOT, "__init__.py"), "utf8");
  const m = init.match(/__version__\s*=\s*['"]([^'"]+)['"]/);
  return m ? m[1] : "unknown";
})();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const srcDir = path.join(repoRoot, "src");
const awsDir = path.join(srcDir, "aws");
const indexFile = path.join(srcDir, "aws.ts");

const HEADER = `// Generated from awscli ${AWSCLI_VERSION} data by scripts/generate-aws-specs.mjs — do not edit by hand`;

// Hand-enhanced specs with dynamic generators — never regenerated.
const PRESERVE = new Set([
  "acm",
  "amplify",
  "cloudformation",
  "cloudwatch",
  "ec2",
  "ecs",
  "eks",
  "elasticbeanstalk",
  "iam",
  "lambda",
  "s3",
  "s3api",
  "secretsmanager",
]);

// CLI commands that are not backed by a botocore service model (custom
// high-level commands). They have no model documentation to regenerate from,
// so any existing spec file / index entry is preserved as-is.
const CUSTOM_COMMANDS = new Set([
  "configure",
  "history",
  "ddb",
  "cli-dev",
  "login",
  "logout",
]);

// Shared helper modules under src/aws that are not service specs (e.g. a
// region list imported by the hand-enhanced files). Never deleted.
const HELPER_FILES = new Set(["regions"]);

// CLI service name -> botocore model directory, for the few renamed services.
const SERVICE_DIR_ALIASES = {
  "agent-toolkit": "agenttoolkit",
  configservice: "config",
  deploy: "codedeploy",
  s3api: "s3",
};

// Synthetic CLI arguments (added by the CLI, not model parameters). Their
// descriptions are fixed strings, taken verbatim from the CLI. `cli-input-yaml`
// is intentionally dropped to match the existing specs.
const CLI_INPUT_JSON_DESC =
  "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally";
const GENERATE_CLI_SKELETON_DESC =
  "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command";
const STARTING_TOKEN_DESC =
  "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide";
const PAGE_SIZE_DESC =
  "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide";
const MAX_ITEMS_DESC =
  "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide";

const SYNTHETIC_DESCS = {
  "cli-input-json": CLI_INPUT_JSON_DESC,
  "generate-cli-skeleton": GENERATE_CLI_SKELETON_DESC,
  "starting-token": STARTING_TOKEN_DESC,
  "page-size": PAGE_SIZE_DESC,
  "max-items": MAX_ITEMS_DESC,
};
const DROP_ARGS = new Set(["cli-input-yaml"]);

const WAIT_DESCRIPTION =
  "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met";

// awscli renames some model parameters on the command line (from
// awscli.customizations.argrename.ARGUMENT_RENAMES plus a few per-service
// customizations in rds.py / sessendemail.py). The key is
// `<service>.<operation>.<original-arg>`, where `*` wildcards a service or
// operation; the value is the renamed CLI arg. ac.index already exposes the
// renamed names, so this table lets us map a renamed arg back to its model
// member to recover the documentation.
const ARGUMENT_RENAMES = {
  "ec2.create-image.no-no-reboot": "reboot",
  "ec2.*.no-egress": "ingress",
  "ec2.*.no-disable-api-termination": "enable-api-termination",
  "swf.register-activity-type.version": "activity-version",
  "swf.register-workflow-type.version": "workflow-version",
  "datapipeline.*.query": "objects-query",
  "datapipeline.get-pipeline-definition.version": "pipeline-version",
  "emr.*.job-flow-ids": "cluster-ids",
  "emr.*.job-flow-id": "cluster-id",
  "cloudsearchdomain.search.query": "search-query",
  "cloudsearchdomain.suggest.query": "suggest-query",
  "sns.subscribe.endpoint": "notification-endpoint",
  "deploy.*.s-3-location": "s3-location",
  "deploy.*.ec-2-tag-filters": "ec2-tag-filters",
  "codepipeline.get-pipeline.version": "pipeline-version",
  "codepipeline.create-custom-action-type.version": "action-version",
  "codepipeline.delete-custom-action-type.version": "action-version",
  "kinesisanalytics.add-application-output.output": "application-output",
  "kinesisanalyticsv2.add-application-output.output": "application-output",
  "route53.delete-traffic-policy.version": "traffic-policy-version",
  "route53.get-traffic-policy.version": "traffic-policy-version",
  "route53.update-traffic-policy-comment.version": "traffic-policy-version",
  "gamelift.create-build.version": "build-version",
  "gamelift.update-build.version": "build-version",
  "gamelift.create-script.version": "script-version",
  "gamelift.update-script.version": "script-version",
  "route53domains.view-billing.start": "start-time",
  "route53domains.view-billing.end": "end-time",
  "apigateway.create-rest-api.version": "api-version",
  "apigatewayv2.create-api.version": "api-version",
  "apigatewayv2.update-api.version": "api-version",
  "pinpoint.get-campaign-version.version": "campaign-version",
  "pinpoint.get-segment-version.version": "segment-version",
  "pinpoint.delete-email-template.version": "template-version",
  "pinpoint.delete-in-app-template.version": "template-version",
  "pinpoint.delete-push-template.version": "template-version",
  "pinpoint.delete-sms-template.version": "template-version",
  "pinpoint.delete-voice-template.version": "template-version",
  "pinpoint.get-email-template.version": "template-version",
  "pinpoint.get-in-app-template.version": "template-version",
  "pinpoint.get-push-template.version": "template-version",
  "pinpoint.get-sms-template.version": "template-version",
  "pinpoint.get-voice-template.version": "template-version",
  "pinpoint.update-email-template.version": "template-version",
  "pinpoint.update-in-app-template.version": "template-version",
  "pinpoint.update-push-template.version": "template-version",
  "pinpoint.update-sms-template.version": "template-version",
  "pinpoint.update-voice-template.version": "template-version",
  "stepfunctions.send-task-success.output": "task-output",
  "clouddirectory.publish-schema.version": "schema-version",
  "mturk.list-qualification-types.query": "types-query",
  "workdocs.create-notification-subscription.endpoint": "notification-endpoint",
  "workdocs.describe-users.query": "user-query",
  "lex-models.delete-bot.version": "bot-version",
  "lex-models.delete-intent.version": "intent-version",
  "lex-models.delete-slot-type.version": "slot-type-version",
  "lex-models.get-intent.version": "intent-version",
  "lex-models.get-slot-type.version": "slot-type-version",
  "lex-models.delete-bot-version.version": "bot-version",
  "lex-models.delete-intent-version.version": "intent-version",
  "lex-models.delete-slot-type-version.version": "slot-type-version",
  "lex-models.get-export.version": "resource-version",
  "license-manager.get-grant.version": "grant-version",
  "license-manager.delete-grant.version": "grant-version",
  "license-manager.get-license.version": "license-version",
  "rekognition.create-stream-processor.output": "stream-processor-output",
  "eks.create-cluster.version": "kubernetes-version",
  "eks.update-cluster-version.version": "kubernetes-version",
  "eks.create-nodegroup.version": "kubernetes-version",
  "eks.update-nodegroup-version.version": "kubernetes-version",
  "eks.update-cluster-components-version.version": "kubernetes-version",
  "schemas.*.version": "schema-version",
  "sagemaker.delete-image-version.version": "version-number",
  "sagemaker.describe-image-version.version": "version-number",
  "sagemaker.list-aliases.version": "version-number",
  "sagemaker.update-image-version.version": "version-number",
  "iotwireless.*.lo-ra-wan": "lorawan",
  "codepipeline.get-action-type.version": "action-version",
  "ecs.*.no-enable-execute-command": "disable-execute-command",
  "ecs.execute-command.no-interactive": "non-interactive",
  "controltower.create-landing-zone.version": "landing-zone-version",
  "controltower.update-landing-zone.version": "landing-zone-version",
  "glue.get-unfiltered-partition-metadata.region": "resource-region",
  "glue.get-unfiltered-partitions-metadata.region": "resource-region",
  "glue.get-unfiltered-table-metadata.region": "resource-region",
  "agent-toolkit.*.name": "skill-name",
  "agent-toolkit.search-skills.query": "search-query",
  "rds.add-option-to-option-group.options-to-include": "options",
  "rds.remove-option-from-option-group.options-to-remove": "options",
  "ses.send-email.source": "from",
};

// Pre-index renames as [service, operation, renamedArg] -> originalArg.
const RENAME_INDEX = [];
for (const [key, renamed] of Object.entries(ARGUMENT_RENAMES)) {
  const dot1 = key.indexOf(".");
  const dot2 = key.indexOf(".", dot1 + 1);
  RENAME_INDEX.push({
    svc: key.slice(0, dot1),
    op: key.slice(dot1 + 1, dot2),
    orig: key.slice(dot2 + 1),
    renamed,
  });
}

// Given a renamed CLI arg, return the original model arg name (or the input
// unchanged when there is no matching rename).
function unrenameArg(service, command, argname) {
  for (const r of RENAME_INDEX) {
    if (
      (r.svc === service || r.svc === "*") &&
      (r.op === command || r.op === "*") &&
      r.renamed === argname
    ) {
      return r.orig;
    }
  }
  return argname;
}

// Hand-written top of src/aws.ts, preserved verbatim.
const AWS_TS_PREFIX = `export const awsProfileGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheByDirectory: true,
  },
  script: ["aws", "configure", "list-profiles"],
  postProcess: (out) => {
    if (out.trim() == "") {
      return [];
    }
    return out.split("\\n").map((line) => ({
      name: line,
      icon: "👤",
    }));
  },
};
const completionSpec: Fig.Spec = {
  name: "aws",
  options: [
    {
      name: "--profile",
      description: "Use a specific profile from your credential file",
      args: {
        generators: awsProfileGenerator,
        filterStrategy: "fuzzy",
      },
    },
  ],
  subcommands: [
`;
const AWS_TS_SUFFIX = `  ],
};
export default completionSpec;
`;

// --- botocore xform_name (name -> CLI token) -------------------------------

// Ported from botocore.__init__.xform_name, including its explicit cache of
// irregular acronym transforms.
const XFORM_CACHE = {
  CreateCachediSCSIVolume: "create-cached-iscsi-volume",
  DescribeCachediSCSIVolumes: "describe-cached-iscsi-volumes",
  DescribeStorediSCSIVolumes: "describe-stored-iscsi-volumes",
  CreateStorediSCSIVolume: "create-stored-iscsi-volume",
  ListHITsForQualificationType: "list-hits-for-qualification-type",
  ExecutePartiQLStatement: "execute-partiql-statement",
  ExecutePartiQLTransaction: "execute-partiql-transaction",
  ExecutePartiQLBatch: "execute-partiql-batch",
  AssociateWhatsAppBusinessAccount: "associate-whatsapp-business-account",
  CreateWhatsAppFlow: "create-whatsapp-flow",
  CreateWhatsAppMessageTemplate: "create-whatsapp-message-template",
  CreateWhatsAppMessageTemplateFromLibrary:
    "create-whatsapp-message-template-from-library",
  CreateWhatsAppMessageTemplateMedia: "create-whatsapp-message-template-media",
  DeleteWhatsAppFlow: "delete-whatsapp-flow",
  DeleteWhatsAppMessageMedia: "delete-whatsapp-message-media",
  DeleteWhatsAppMessageTemplate: "delete-whatsapp-message-template",
  DeprecateWhatsAppFlow: "deprecate-whatsapp-flow",
  DisassociateWhatsAppBusinessAccount: "disassociate-whatsapp-business-account",
  GetLinkedWhatsAppBusinessAccount: "get-linked-whatsapp-business-account",
  GetLinkedWhatsAppBusinessAccountPhoneNumber:
    "get-linked-whatsapp-business-account-phone-number",
  GetWhatsAppFlow: "get-whatsapp-flow",
  GetWhatsAppFlowPreview: "get-whatsapp-flow-preview",
  GetWhatsAppMessageMedia: "get-whatsapp-message-media",
  GetWhatsAppMessageTemplate: "get-whatsapp-message-template",
  ListLinkedWhatsAppBusinessAccounts: "list-linked-whatsapp-business-accounts",
  ListWhatsAppFlowAssets: "list-whatsapp-flow-assets",
  ListWhatsAppFlows: "list-whatsapp-flows",
  ListWhatsAppMessageTemplates: "list-whatsapp-message-templates",
  ListWhatsAppTemplateLibrary: "list-whatsapp-template-library",
  PostWhatsAppMessageMedia: "post-whatsapp-message-media",
  PublishWhatsAppFlow: "publish-whatsapp-flow",
  PutWhatsAppBusinessAccountEventDestinations:
    "put-whatsapp-business-account-event-destinations",
  SendWhatsAppMessage: "send-whatsapp-message",
  UpdateWhatsAppFlow: "update-whatsapp-flow",
  UpdateWhatsAppFlowAssets: "update-whatsapp-flow-assets",
  UpdateWhatsAppMessageTemplate: "update-whatsapp-message-template",
};

const FIRST_CAP = /(.)([A-Z][a-z]+)/g;
const END_CAP = /([a-z0-9])([A-Z])/g;
const SPECIAL_CASE = /[A-Z]{2,}s$/;

function xformName(name, sep = "-") {
  if (name.includes(sep)) return name;
  if (sep === "-" && XFORM_CACHE[name]) return XFORM_CACHE[name];
  let n = name;
  const special = n.match(SPECIAL_CASE);
  if (special) {
    const matched = special[0];
    n = n.slice(0, -matched.length) + sep + matched.toLowerCase();
  }
  const s1 = n.replace(FIRST_CAP, `$1${sep}$2`);
  return s1.replace(END_CAP, `$1${sep}$2`).toLowerCase();
}

// --- documentation stripping ----------------------------------------------

const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(s) {
  return s.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (m, e) => {
    if (e[0] === "#") {
      const code =
        e[1] === "x" || e[1] === "X"
          ? parseInt(e.slice(2), 16)
          : parseInt(e.slice(1), 10);
      return Number.isNaN(code) ? m : String.fromCodePoint(code);
    }
    return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, e)
      ? NAMED_ENTITIES[e]
      : m;
  });
}

// Strip HTML tags and decode entities, trim, and drop a single trailing period
// — matching the convention of the existing specs. Internal whitespace is left
// as produced by tag removal (adjacent block tags yield the double spaces seen
// in the existing files).
function cleanDoc(html) {
  if (!html) return "";
  let t = decodeEntities(String(html).replace(/<[^>]+>/g, ""));
  t = t.replace(/^\s+|\s+$/g, "");
  if (t.endsWith(".")) t = t.slice(0, -1);
  return t;
}

const J = JSON.stringify;

// Emit an object literal with each property on its own line, forcing biome to
// keep it expanded (matching the existing multiline spec style, which keeps
// diffs minimal). Arrays and inline objects are passed through as-is.
function obj(pairs) {
  return `{\n${pairs.join(",\n")}\n}`;
}

// --- sqlite access ---------------------------------------------------------

function sqlite(query) {
  const out = execFileSync(
    "sqlite3",
    ["-noheader", "-newline", "\n", "-separator", "\t", AC_INDEX, query],
    { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 }
  );
  if (out === "") return [];
  return out
    .split("\n")
    .filter((l) => l.length > 0)
    .map((l) => l.split("\t"));
}

// --- model loading ---------------------------------------------------------

const modelCache = new Map();

function resolveModelDir(service) {
  const dir = SERVICE_DIR_ALIASES[service] || service;
  const full = path.join(BOTOCORE_DATA, dir);
  if (!fs.existsSync(full) || !fs.statSync(full).isDirectory()) return null;
  return full;
}

// Pick the latest api-version subdirectory (lexicographically last = newest,
// since versions are date-stamped).
function latestApiDir(serviceDir) {
  const versions = fs
    .readdirSync(serviceDir)
    .filter((d) => fs.statSync(path.join(serviceDir, d)).isDirectory())
    .sort();
  return versions.length ? path.join(serviceDir, versions.at(-1)) : null;
}

function loadModel(service) {
  if (modelCache.has(service)) return modelCache.get(service);
  const serviceDir = resolveModelDir(service);
  let model = null;
  if (serviceDir) {
    const apiDir = latestApiDir(serviceDir);
    if (apiDir) {
      const svcFile = path.join(apiDir, "service-2.json");
      if (fs.existsSync(svcFile)) {
        const raw = JSON.parse(fs.readFileSync(svcFile, "utf8"));
        const waiterFile = path.join(apiDir, "waiters-2.json");
        const waiters = fs.existsSync(waiterFile)
          ? JSON.parse(fs.readFileSync(waiterFile, "utf8")).waiters || {}
          : {};
        model = buildModelIndex(raw, waiters);
      }
    }
  }
  modelCache.set(service, model);
  return model;
}

function buildModelIndex(raw, waiters) {
  const shapes = raw.shapes || {};
  const operations = raw.operations || {};
  // command token -> operation name
  const opByCommand = {};
  for (const opName of Object.keys(operations)) {
    opByCommand[xformName(opName, "-")] = opName;
  }
  return {
    serviceDoc: raw.documentation || "",
    shapes,
    operations,
    opByCommand,
    waiters,
  };
}

// Map a CLI arg token -> member documentation for a given operation.
function argDocsForOperation(model, opName) {
  const op = model.operations[opName];
  const docs = {};
  if (!op || !op.input) return docs;
  const inputShape = model.shapes[op.input.shape];
  if (!inputShape || !inputShape.members) return docs;
  for (const [memberName, ref] of Object.entries(inputShape.members)) {
    let doc = ref.documentation;
    if (!doc) {
      const target = model.shapes[ref.shape];
      doc = target && target.documentation;
    }
    docs[xformName(memberName, "-")] = doc || "";
  }
  return docs;
}

// --- emit options ----------------------------------------------------------

const stats = {
  operations: 0,
  waiters: 0,
  missingOpDoc: 0,
  missingArgDoc: 0,
};

// Emit one option object literal (raw TS text; biome pretty-prints later).
function optionText(service, command, argname, typeName, argDocs) {
  const synthetic = SYNTHETIC_DESCS[argname];
  const parts = [`name: ${J(`--${argname}`)}`];

  if (synthetic !== undefined) {
    parts.push(`description: ${J(synthetic)}`);
    if (argname === "generate-cli-skeleton") {
      parts.push(
        `args: ${obj([`name: ${J(typeName)}`, `suggestions: ["input", "output"]`])}`
      );
    } else {
      parts.push(`args: ${obj([`name: ${J(typeName)}`])}`);
    }
    return obj(parts);
  }

  // Real model parameter. Look up its documentation by the model member name
  // (`--no-x` boolean pairs share the `x` member doc). Try the CLI name
  // directly first, then fall back to the pre-rename model name — some members
  // already match the renamed CLI name, so un-renaming must not clobber them.
  const stripNo = (a) => (a.startsWith("no-") ? a.slice(3) : a);
  let doc = argDocs[stripNo(argname)] ?? argDocs[argname];
  if (doc === undefined) {
    const original = unrenameArg(service, command, argname);
    doc = argDocs[stripNo(original)] ?? argDocs[original];
  }
  const desc = cleanDoc(doc ?? "");
  if (desc) parts.push(`description: ${J(desc)}`);
  else stats.missingArgDoc++;

  if (typeName !== "boolean") {
    parts.push(`args: ${obj([`name: ${J(typeName)}`])}`);
  }
  return obj(parts);
}

function optionsText(service, command, params, argDocs) {
  const items = [];
  for (const [argname, typeName] of params) {
    if (DROP_ARGS.has(argname)) continue;
    items.push(optionText(service, command, argname, typeName, argDocs));
  }
  return items;
}

// --- emit subcommands ------------------------------------------------------

function operationSubcommand(model, service, command, params) {
  const parts = [`name: ${J(command)}`];
  let argDocs = {};
  const opName = model && model.opByCommand[command];
  if (opName) {
    const doc = cleanDoc(model.operations[opName].documentation);
    if (doc) parts.push(`description: ${J(doc)}`);
    argDocs = argDocsForOperation(model, opName);
  } else {
    stats.missingOpDoc++;
  }
  const opts = optionsText(service, command, params, argDocs);
  if (opts.length) parts.push(`options: [\n${opts.join(",\n")}\n]`);
  stats.operations++;
  return obj(parts);
}

function waiterPollingDescription(delay, maxAttempts) {
  return ` It will poll every ${delay} seconds until a successful state has been reached. This will exit with a return code of 255 after ${maxAttempts} failed checks.`;
}

// Fallback heuristic for waiters without a description (mirrors
// awscli.customizations.waiters.WaiterStateDocBuilder).
const SUCCESS_DESCRIPTIONS = {
  error: "%s is thrown ",
  path: "%s ",
  pathAll: "%s for all elements ",
  pathAny: "%s for any element ",
  status: "%s response is received ",
};

function heuristicWaiterDescription(waiter) {
  let description = "Wait until ";
  for (const acceptor of waiter.acceptors || []) {
    if (acceptor.state === "success") {
      const matcher = acceptor.matcher;
      let tmpl = SUCCESS_DESCRIPTIONS[matcher] || "%s ";
      if (["path", "pathAny", "pathAll"].includes(matcher)) {
        tmpl = `JMESPath query ${acceptor.argument} returns ${tmpl}`;
      }
      description += tmpl.replace("%s", String(acceptor.expected));
      break;
    }
  }
  const opToken = xformName(waiter.operation, "-");
  description += `when polling with \`\`${opToken}\`\`.`;
  return description;
}

function waitSubcommand(model, service, waitParamsByCommand) {
  // Iterate waiters in model order (waiters-2.json key order) so the output is
  // deterministic and matches the CLI.
  const subs = [];
  for (const [waiterName, waiter] of Object.entries(model.waiters)) {
    const command = xformName(waiterName, "-");
    const params = waitParamsByCommand.get(command) || [];
    const base = waiter.description || heuristicWaiterDescription(waiter);
    const desc = cleanDoc(
      base + waiterPollingDescription(waiter.delay, waiter.maxAttempts)
    );
    const argDocs = argDocsForOperation(model, waiter.operation);
    const parts = [`name: ${J(command)}`];
    if (desc) parts.push(`description: ${J(desc)}`);
    const opts = optionsText(service, command, params, argDocs);
    if (opts.length) parts.push(`options: [\n${opts.join(",\n")}\n]`);
    subs.push(obj(parts));
    stats.waiters++;
  }
  return obj([
    `name: "wait"`,
    `description: ${J(WAIT_DESCRIPTION)}`,
    `subcommands: [\n${subs.join(",\n")}\n]`,
  ]);
}

// --- build a service spec file ---------------------------------------------

function buildServiceFile(service, model, opsForService, paramsByKey) {
  const subs = [];
  const waitParamsByCommand = new Map();
  const hasWait = opsForService.includes("wait");
  if (hasWait) {
    const waitParent = `aws.${service}.wait`;
    for (const [key, params] of paramsByKey) {
      if (key.startsWith(`${waitParent}\t`)) {
        waitParamsByCommand.set(key.slice(waitParent.length + 1), params);
      }
    }
  }

  for (const command of opsForService) {
    if (command === "wait") continue;
    const params = paramsByKey.get(`aws.${service}\t${command}`) || [];
    subs.push(operationSubcommand(model, service, command, params));
  }
  if (hasWait && model && Object.keys(model.waiters).length) {
    subs.push(waitSubcommand(model, service, waitParamsByCommand));
  }

  const desc = cleanDoc(model.serviceDoc);
  const specParts = [`name: ${J(service)}`];
  if (desc) specParts.push(`description: ${J(desc)}`);
  specParts.push(`subcommands: [\n${subs.join(",\n")}\n]`);

  return `${HEADER}
const completionSpec: Fig.Spec = ${obj(specParts)};
export default completionSpec;
`;
}

// --- parse existing index for preserved entries ----------------------------

// Extract name -> raw entry object text ("{ ... }") from the current aws.ts so
// preserved services keep their exact index entry.
function parseExistingIndexEntries() {
  const text = fs.readFileSync(indexFile, "utf8");
  const start = text.indexOf("subcommands: [");
  const body = text.slice(start);
  const entries = new Map();
  // Match { name: "x", ... loadSpec: "aws/y" } blocks.
  const re =
    /\{\s*name:\s*"([^"]+)",[\s\S]*?loadSpec:\s*"aws\/([^"]+)",?\s*\}/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    entries.set(m[1], m[0]);
  }
  return entries;
}

// --- main ------------------------------------------------------------------

function main() {
  console.error(`awscli root: ${AWSCLI_ROOT} (version ${AWSCLI_VERSION})`);

  // Load the full command tree and parameter table in bulk.
  const services = sqlite(
    "SELECT command FROM command_table WHERE parent='aws' ORDER BY command;"
  ).map((r) => r[0]);

  const opsRows = sqlite(
    "SELECT parent, command FROM command_table WHERE parent LIKE 'aws.%';"
  );
  const opsByService = new Map(); // service -> [command] (direct children)
  for (const [parent, command] of opsRows) {
    if (parent.indexOf(".", 4) !== -1) continue; // only aws.<service>
    const service = parent.slice(4);
    if (!opsByService.has(service)) opsByService.set(service, []);
    opsByService.get(service).push(command);
  }
  for (const list of opsByService.values()) list.sort();

  const paramRows = sqlite(
    "SELECT parent, command, argname, type_name FROM param_table WHERE parent LIKE 'aws.%' ORDER BY parent, command, param_id;"
  );
  const paramsByKey = new Map(); // "parent\tcommand" -> [[argname,type],...]
  for (const [parent, command, argname, typeName] of paramRows) {
    const key = `${parent}\t${command}`;
    if (!paramsByKey.has(key)) paramsByKey.set(key, []);
    paramsByKey.get(key).push([argname, typeName]);
  }

  const existingEntries = parseExistingIndexEntries();
  const existingFiles = new Set(
    fs.readdirSync(awsDir).filter((f) => f.endsWith(".ts")).map((f) => f.slice(0, -3))
  );

  const generated = new Set();
  const indexEntries = new Map(); // name -> entry text

  for (const service of services) {
    if (CUSTOM_COMMANDS.has(service)) {
      // Non-model command: keep existing file & index entry untouched.
      if (existingEntries.has(service)) {
        indexEntries.set(service, existingEntries.get(service));
      }
      continue;
    }
    if (PRESERVE.has(service)) {
      // Hand-enhanced: keep file & existing index entry untouched.
      if (existingEntries.has(service)) {
        indexEntries.set(service, existingEntries.get(service));
      } else {
        console.error(`WARN: preserved service ${service} missing index entry`);
      }
      continue;
    }

    const model = loadModel(service);
    if (!model) {
      // Not a model-backed service and not a known custom command; skip.
      console.error(`WARN: no model for CLI service '${service}', skipping`);
      continue;
    }

    const ops = opsByService.get(service) || [];
    const content = buildServiceFile(service, model, ops, paramsByKey);
    fs.writeFileSync(path.join(awsDir, `${service}.ts`), content);
    generated.add(service);

    const desc = cleanDoc(model.serviceDoc);
    const entryParts = [`name: ${J(service)}`];
    if (desc) entryParts.push(`description: ${J(desc)}`);
    entryParts.push(`loadSpec: ${J(`aws/${service}`)}`);
    indexEntries.set(service, obj(entryParts));
  }

  // Delete stale files (not generated, not preserved, not custom, not helper).
  const keep = new Set([
    ...generated,
    ...PRESERVE,
    ...CUSTOM_COMMANDS,
    ...HELPER_FILES,
  ]);
  const removed = [];
  for (const name of existingFiles) {
    if (!keep.has(name)) {
      fs.rmSync(path.join(awsDir, `${name}.ts`));
      removed.push(name);
    }
  }

  // Write the index (service list sorted alphabetically by name).
  const sortedNames = [...indexEntries.keys()].sort();
  const entriesText = sortedNames
    .map((n) => `${indexEntries.get(n)},`)
    .join("\n");
  const indexContent = `${AWS_TS_PREFIX}${entriesText}\n${AWS_TS_SUFFIX}`;
  fs.writeFileSync(indexFile, indexContent);

  // Self-check: every index loadSpec has a corresponding file.
  const finalFiles = new Set(
    fs.readdirSync(awsDir).filter((f) => f.endsWith(".ts")).map((f) => f.slice(0, -3))
  );
  const dangling = [];
  for (const name of sortedNames) {
    const entry = indexEntries.get(name);
    const m = entry.match(/loadSpec:\s*"aws\/([^"]+)"/);
    const target = m ? m[1] : name;
    if (!finalFiles.has(target)) dangling.push(target);
  }

  // Report.
  const added = [...generated].filter((s) => !existingFiles.has(s)).sort();
  console.error("");
  console.error(`services in index:     ${sortedNames.length}`);
  console.error(`service files written: ${generated.size}`);
  console.error(`files removed:         ${removed.length}${removed.length ? ` (${removed.sort().join(", ")})` : ""}`);
  console.error(`services added:        ${added.length}${added.length ? ` (${added.join(", ")})` : ""}`);
  console.error(`operations emitted:    ${stats.operations}`);
  console.error(`waiter states emitted: ${stats.waiters}`);
  console.error(`ops without model doc: ${stats.missingOpDoc}`);
  console.error(`args without doc:      ${stats.missingArgDoc}`);
  if (dangling.length) {
    console.error(`ERROR: dangling loadSpec targets: ${dangling.join(", ")}`);
    process.exit(1);
  }
  console.error("self-check: every index loadSpec has a file — OK");
}

main();
