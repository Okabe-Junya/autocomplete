// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag42: Fig.Option = {
  name: "--access-token-file",
  description:
    "A file path to read the access token. Use this flag to\nauthenticate `gcloud` with an access token. The credentials of\nthe active account (if exists) will be ignored. The file should\nonly contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
  args: { name: "ACCESS_TOKEN_FILE", description: "String", suggestions: [] },
};
const flag46: Fig.Option = {
  name: "--account",
  description:
    "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
  args: { name: "ACCOUNT", description: "String", suggestions: [] },
};
const flag456: Fig.Option = {
  name: "--allow-vulnerability-scanning",
  description: "Allow vulnerability scanning on the repository",
};
const flag527: Fig.Option = {
  name: "--annotations",
  description:
    'List of annotations in the format of KEY=VALUE pairs to add, update, or remove.\nDuplicate keys will be overwritten. For more details on annotations,\nsee https://google.aip.dev/148#annotations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ANNOTATIONS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
    suggestions: [],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1443: Fig.Option = {
  name: "--chunk-size",
  description:
    "If specified, the chunk size (bytes) to use for downloading the package",
  args: { name: "CHUNK_SIZE", description: "String", suggestions: [] },
};
const flag1819: Fig.Option = {
  name: "--clear-platform-logs",
  description:
    "Clear platform logging settings for the repository to fall back to project settings",
};
const flag2218: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2226: Fig.Option = {
  name: "--condition",
  description: "The CEL expression for the rule",
  args: { name: "CONDITION", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3176: Fig.Option = {
  name: "--description",
  description: "Description for the repository",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3584: Fig.Option = {
  name: "--disable-platform-logs",
  description: "Disable platform logging for the repository",
};
const flag3601: Fig.Option = {
  name: "--disable-remote-validation",
  description:
    "Do not make an HTTP request to validate the remote upstream. Not recommended when setting a custom remote upstream unless you are absolutely sure your upstream URI and any auth is valid",
};
const flag3617: Fig.Option = {
  name: "--disable-vulnerability-scanning",
  description: "Disable vulnerability scanning on the repository",
};
const flag4248: Fig.Option = {
  name: "--enable-platform-logs",
  description: "Enable platform logging for the repository",
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4900: Fig.Option = {
  name: "--flags-file",
  description:
    "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
  args: { name: "YAML_FILE", description: "String", suggestions: [] },
};
const flag4902: Fig.Option = {
  name: "--flatten",
  description:
    "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This allows us to\nspecify what `resource-key` the `filter` will operate on. This flag\ninteracts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag5091: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. If both `core/format` and\n`--format` are specified, `--format` takes precedence. `--format`\nand `core/format` both take precedence over `core/default_format`. The\nsupported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud\ntopic formats. Run `$ gcloud config set --help` to see more information\nabout `core/format`",
  args: { name: "FORMAT", description: "String", suggestions: [] },
};
const flag5164: Fig.Option = {
  name: "--gcs-destination",
  description: "Google Cloud Storage path to export the artifact to",
  args: { name: "GCS_DESTINATION", description: "String", suggestions: [] },
};
const flag5182: Fig.Option = {
  name: "--gcs-source",
  description:
    "The Google Cloud Storage location of a package to import.\nTo import multiple packages, use wildcards at the end of the path",
  args: { name: "GCS_SOURCE", description: "List", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5697: Fig.Option = {
  name: "--immutable-tags",
  description:
    "(Docker only) Prevent changes to tagged images in the repository. Tags cannot be deleted or moved to a different image digest, and tagged images cannot be deleted",
};
const flag5699: Fig.Option = {
  name: "--impersonate-service-account",
  description:
    "For this `gcloud` invocation, all API requests will be\nmade as the given service account or target service account in an\nimpersonation delegation chain instead of the currently selected\naccount. You can specify either a single service account as the\nimpersonator, or a comma-separated list of service accounts to\ncreate an impersonation delegation chain. The impersonation is done\nwithout needing to create, download, and activate a key for the\nservice account or accounts.\n+\nIn order to make API requests as a service account, your\ncurrently selected account must have an IAM role that includes\nthe `iam.serviceAccounts.getAccessToken` permission for the\nservice account or accounts.\n+\nThe `roles/iam.serviceAccountTokenCreator` role has\nthe `iam.serviceAccounts.getAccessToken permission`. You can\nalso create a custom role.\n+\nYou can specify a list of service accounts, separated with\ncommas. This creates an impersonation delegation chain in which\neach service account delegates its permissions to the next\nservice account in the chain. Each service account in the list\nmust have the `roles/iam.serviceAccountTokenCreator` role on the\nnext service account in the list. For example, when\n`--impersonate-service-account=`\n``SERVICE_ACCOUNT_1'',``SERVICE_ACCOUNT_2'',\nthe active account must have the\n`roles/iam.serviceAccountTokenCreator` role on\n``SERVICE_ACCOUNT_1'', which must have the\n`roles/iam.serviceAccountTokenCreator` role on\n``SERVICE_ACCOUNT_2''.\n``SERVICE_ACCOUNT_1'' is the impersonated service\naccount and ``SERVICE_ACCOUNT_2'' is the delegate.\n+\nOverrides the default *auth/impersonate_service_account* property value for this command invocation",
  args: {
    name: "SERVICE_ACCOUNT_EMAILS",
    description: "String",
    suggestions: [],
  },
};
const flag6140: Fig.Option = {
  name: "--json-key",
  description:
    "Path to service account JSON key. If not specified, current active service account credentials or a placeholder for gcloud credentials is used",
  args: { name: "JSON_KEY", description: "String", suggestions: [] },
};
const flag6515: Fig.Option = {
  name: "--limit",
  description:
    "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag6714: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6737: Fig.Option = {
  name: "--location",
  description:
    "If specified, all requests to Artifact Analysis for occurrences will go to location specified",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6766: Fig.Option = {
  name: "--location",
  description:
    "Location of the attachment.\n+\nTo set the `location` attribute:\n* provide the argument `attachment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6767: Fig.Option = {
  name: "--location",
  description:
    "Location of the attachment. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `attachment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6784: Fig.Option = {
  name: "--location",
  description:
    "Location of the file. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `file` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6802: Fig.Option = {
  name: "--location",
  description:
    "Location of the package.\n+\nTo set the `location` attribute:\n* provide the argument `--package` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6803: Fig.Option = {
  name: "--location",
  description:
    "Location of the package. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `package` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6806: Fig.Option = {
  name: "--location",
  description:
    "Location of the repository.\n+\nTo set the `location` attribute:\n* provide the argument `--repository` on the command line with a fully specified name;\n* set the property `artifacts/repository` with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6807: Fig.Option = {
  name: "--location",
  description:
    "Location of the repository.\n+\nTo set the `location` attribute:\n* provide the argument `repository` on the command line with a fully specified name;\n* set the property `artifacts/repository` with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6808: Fig.Option = {
  name: "--location",
  description:
    "Location of the repository. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `--repository` on the command line with a fully specified name;\n* set the property `artifacts/repository` with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6809: Fig.Option = {
  name: "--location",
  description:
    "Location of the repository. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `repository` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6810: Fig.Option = {
  name: "--location",
  description:
    "Location of the rule. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `rule` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6821: Fig.Option = {
  name: "--location",
  description:
    "Location of the tag. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6825: Fig.Option = {
  name: "--location",
  description:
    "Location of the version. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag11041: Fig.Option = {
  name: "--package",
  description:
    "ID of the package or fully qualified identifier for the package.\n+\nTo set the `name` attribute:\n* provide the argument `--package` on the command line",
  args: { name: "PACKAGE", description: "String", suggestions: [] },
};
const flag11048: Fig.Option = {
  name: "--package",
  description:
    "The package associated with the tag.\n+\n\nTo set the `package` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--package` on the command line",
  args: { name: "PACKAGE", description: "String", suggestions: [] },
};
const flag11049: Fig.Option = {
  name: "--package",
  description:
    "The package associated with the version.\n+\n\nTo set the `package` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--package` on the command line",
  args: { name: "PACKAGE", description: "String", suggestions: [] },
};
const flag11059: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
  args: {
    name: "PAGE_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11094: Fig.Option = {
  name: "--parallelism",
  description:
    "Specifies the number of threads to use for downloading the file in parallel",
  args: { name: "PARALLELISM", description: "String", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12522: Fig.Option = {
  name: "--remote-username",
  description: "Remote Repository upstream registry username",
  args: { name: "REMOTE_USERNAME", description: "String", suggestions: [] },
};
const flag12808: Fig.Option = {
  name: "--repository",
  description:
    "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12809: Fig.Option = {
  name: "--repository",
  description:
    "Repository of the attachment.\n+\nTo set the `repository` attribute:\n* provide the argument `attachment` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12811: Fig.Option = {
  name: "--repository",
  description:
    "Repository of the package.\n+\nTo set the `repository` attribute:\n* provide the argument `--package` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12817: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the attachment. Overrides the default artifacts/repository property value\nfor this command invocation. To configure the default repository, use the command:\ngcloud config set artifacts/repository.\n+\n\nTo set the `repository` attribute:\n* provide the argument `attachment` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12818: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the file. Overrides the default artifacts/repository property value\nfor this command invocation. To configure the default repository, use the command:\ngcloud config set artifacts/repository.\n+\n\nTo set the `repository` attribute:\n* provide the argument `file` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12819: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the package. Overrides the default artifacts/repository property value\nfor this command invocation. To configure the default repository, use the command:\ngcloud config set artifacts/repository.\n+\n\nTo set the `repository` attribute:\n* provide the argument `package` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12820: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the rule. Overrides the default artifacts/repository property value\nfor this command invocation. To configure the default repository, use the command:\ngcloud config set artifacts/repository.\n+\n\nTo set the `repository` attribute:\n* provide the argument `rule` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12821: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the tag. Overrides the default artifacts/repository property value\nfor this command invocation. To configure the default repository, use the command:\ngcloud config set artifacts/repository.\n+\n\nTo set the `repository` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12822: Fig.Option = {
  name: "--repository",
  description:
    "The repository associated with the version. Overrides the default artifacts/repository property value\nfor this command invocation. To configure the default repository, use the command:\ngcloud config set artifacts/repository.\n+\n\nTo set the `repository` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag13719: Fig.Option = {
  name: "--severity",
  description:
    "The minimum severity level of logs to generate. This flag is only applicable when using --enable-platform-logs. _SEVERITY_ must be one of:\n+\n*error*::: Log events with severity ERROR or higher.\n*info*::: Log events with severity INFO or higher.\n:::\n+",
  args: {
    name: "SEVERITY",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["error", "info"],
  },
};
const flag13792: Fig.Option = {
  name: "--show-package-vulnerability",
  description: "Include vulnerability metadata in the output",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14156: Fig.Option = {
  name: "--source",
  description: "The path of a package to upload",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14469: Fig.Option = {
  name: "--stream-location",
  description: "The target Cloud Region where the artifact should be prewarmed",
  args: { name: "STREAM_LOCATION", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15243: Fig.Option = {
  name: "--upstream-policy-file",
  description:
    '(Virtual Repositories only) is the upstreams for the Virtual Repository.\nExample of the file contents:\n[\n  {\n    "id": "test1",\n    "repository": "projects/p1/locations/us-central1/repositories/repo1",\n    "priority": 1\n  },\n  {\n    "id": "test2",\n    "repository": "projects/p2/locations/us-west2/repositories/repo2",\n    "priority": 2\n  }\n]',
  args: { name: "FILE", description: "String", suggestions: [] },
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15424: Fig.Option = {
  name: "--verbosity",
  description:
    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
  args: {
    name: "VERBOSITY",
    description: "String",
    suggestions: ["debug", "info", "warning", "error", "critical", "none"],
  },
};

const completionSpec: Fig.Spec = {
  name: "artifacts",
  description: "Manage Artifact Registry resources",
  subcommands: [
    {
      name: "apt",
      description: "Manage Artifact Registry Debian packages",
      subcommands: [
        {
          name: "import",
          description:
            "Import one or more Debian packages into an artifact repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5182,
            flag5453,
            flag5699,
            flag6807,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line;\n* set the property `artifacts/repository`",
            isOptional: true,
          },
        },
        {
          name: "upload",
          description: "Upload a Debian package to an artifact repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6807,
            flag7356,
            flag11637,
            flag11946,
            flag14156,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line;\n* set the property `artifacts/repository`",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "attachments",
      description: "Manage Artifact Registry attachments",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an Artifact Registry attachment in a repository",
          options: [
            flag42,
            flag46,
            {
              name: "--attachment-namespace",
              description: "Namespace of the attachment",
              args: {
                name: "ATTACHMENT_NAMESPACE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--attachment-type",
              description: "Type of the attachment",
              args: {
                name: "ATTACHMENT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--files",
              description:
                "Comma-seperated list of files that are part of this attachment",
              args: { name: "FILES", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6766,
            flag7356,
            flag11637,
            flag11946,
            flag12809,
            {
              name: "--target",
              description:
                "Target of the attachment, should be fully qualified version name",
              args: { name: "TARGET", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment.\n+\nTo set the `name` attribute:\n* provide the argument `attachment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry attachment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6767,
            flag7356,
            flag11637,
            flag11946,
            flag12817,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment.\n+\nTo set the `attachment` attribute:\n* provide the argument `attachment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry attachment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6767,
            flag7356,
            flag11637,
            flag11946,
            flag12817,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment.\n+\nTo set the `attachment` attribute:\n* provide the argument `attachment` on the command line",
          },
        },
        {
          name: "download",
          description:
            "Download an Artifact Registry attachment from a repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1443,
            flag2292,
            {
              name: "--destination",
              description:
                "Path where you want to save the downloaded attachment files",
              args: {
                name: "DESTINATION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6766,
            flag7356,
            {
              name: "--oci-version-name",
              description:
                "For Docker-format repositories only. The version name of the OCI artifact to download",
              args: {
                name: "OCI_VERSION_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--parallelism",
              description:
                "Specifies the number of threads to use for downloading the attachment files in parallel",
              args: {
                name: "PARALLELISM",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12809,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTACHMENT",
            description:
              "ID of the attachment or fully qualified identifier for the attachment.\n+\nTo set the `name` attribute:\n* provide the argument `attachment` on the command line",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry attachments",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6808,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag13948,
            {
              name: "--target",
              description: "Target for the list of attachments",
              args: { name: "TARGET", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "docker",
      description: "Manage Artifact Registry container images and tags",
      subcommands: [
        {
          name: "images",
          description: "Manage Artifact Registry container images",
          subcommands: [
            {
              name: "delete",
              description: "Delete an Artifact Registry container image",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--delete-tags",
                  description:
                    "If specified, all tags associated with the image are deleted",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE",
                description:
                  "A container image.\n+\nA valid container image has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE\n+\nA valid container image that can be referenced by tag or digest, has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE:tag\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE@sha256:digest",
              },
            },
            {
              name: "describe",
              description: "Describe an Artifact Registry container image",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--metadata-filter",
                  description:
                    "Additional filter to fetch metadata for a given qualified image reference",
                  args: {
                    name: "METADATA_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--show-all-metadata",
                  description:
                    "Include all metadata in the output. Metadata will be grouped by Grafeas kind, with an additional section for intoto provenance metadata",
                },
                {
                  name: "--show-build-details",
                  description: "Include build metadata in the output",
                },
                {
                  name: "--show-deployment",
                  description: "Include deployment metadata in the output",
                },
                {
                  name: "--show-image-basis",
                  description: "Include base image metadata in the output",
                },
                flag13792,
                {
                  name: "--show-provenance",
                  description:
                    "Include intoto provenance metadata in the output, in the provenance_summary section. To see all build metadata in the output, use --show-all-metadata or --show-build-details",
                },
                {
                  name: "--show-sbom-references",
                  description: "Include SBOM metadata in the output",
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE",
                description:
                  "A container image.\n+\nA valid container image has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE\n+\nA valid container image that can be referenced by tag or digest, has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE:tag\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE@sha256:digest",
              },
            },
            {
              name: "get-operation",
              description: "Get an On-Demand Scanning operation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--location",
                  description:
                    "Cloud multi-region.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
            {
              name: "list",
              description: "List Artifact Registry container images",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--include-tags",
                  description:
                    "If specified, tags associated with each image digest are displayed up to a maximum of 100 tags per version",
                },
                flag6515,
                flag7356,
                {
                  name: "--occurrence-filter",
                  description:
                    "A filter for the occurrences which will be summarized",
                  args: {
                    name: "OCCURRENCE_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11637,
                flag11946,
                {
                  name: "--show-occurrences",
                  description: "Show summaries of the various occurrence types",
                },
                {
                  name: "--show-occurrences-from",
                  description:
                    "The number of the most recent images for which to summarize occurrences",
                  args: {
                    name: "SHOW_OCCURRENCES_FROM",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_PATH",
                description:
                  "An Artifact Registry repository or a container image.\nIf not specified, default config values are used.\n+\nA valid docker repository has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID\n+\nA valid image has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE_PATH",
                isOptional: true,
              },
            },
            {
              name: "list-vulnerabilities",
              description: "List On-Demand Scanning vulnerabilities",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "Cloud multi-region.\n+\nTo set the `location` attribute:\n* provide the argument `scan` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCAN",
                description:
                  "ID of the scan or fully qualified identifier for the scan.\n+\nTo set the `scan` attribute:\n* provide the argument `scan` on the command line",
              },
            },
            {
              name: "scan",
              description: "Perform a vulnerability scan on a container image",
              options: [
                flag42,
                flag46,
                {
                  name: "--additional-package-types",
                  description:
                    "(DEPRECATED) A comma-separated list of package types to scan in addition to OS packages.\n+\nThis flag is deprecated as scanning for all package types is now the default. To skip scanning for specific package types, use --skip-package-types. _ADDITIONAL_PACKAGE_TYPES_ must be one of:\n+\n*COMPOSER*::: PHP Composer package.\n*GO*::: Go standard library and third party packages.\n*MAVEN*::: Maven package.\n*NPM*::: NPM package.\n*NUGET*::: NuGet package.\n*PYTHON*::: Python package.\n*RUBYGEMS*::: RubyGems package.\n*RUST*::: Rust package.\n:::\n+",
                  args: {
                    name: "ADDITIONAL_PACKAGE_TYPES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--location",
                  description:
                    "The API location in which to perform package analysis. Consider choosing a location closest to where you are located. Proximity to the container image does not affect response time. _LOCATION_ must be one of:\n+\n*asia*::: Perform analysis in Asia\n*europe*::: Perform analysis in Europe\n*us*::: Perform analysis in the US\n:::\n+",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: ["asia", "europe", "us"],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--remote",
                  description:
                    "Whether the container image is located remotely or on your local machine",
                },
                {
                  name: "--skip-package-types",
                  description:
                    "A comma-separated list of package types to skip when scanning. _SKIP_PACKAGE_TYPES_ must be one of:\n+\n*COMPOSER*::: PHP Composer package.\n*GO*::: Go standard library and third party packages.\n*MAVEN*::: Maven package.\n*NPM*::: NPM package.\n*NUGET*::: NuGet package.\n*PYTHON*::: Python package.\n*RUBYGEMS*::: RubyGems package.\n*RUST*::: Rust package.\n:::\n+",
                  args: {
                    name: "SKIP_PACKAGE_TYPES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_URI",
                description:
                  "A container image in a Google Cloud registry (Artifact Registry or Container Registry), or a local container image",
              },
            },
          ],
        },
        {
          name: "tags",
          description: "Manage Artifact Registry container image tags",
          subcommands: [
            {
              name: "add",
              description:
                "Add a tag to a container image in Artifact Registry",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "DOCKER_IMAGE",
                  description:
                    "Docker image - The container image that you want to tag.\n+\nA valid container image can be referenced by tag or digest, has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE:tag\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE@sha256:digest",
                },
                {
                  name: "DOCKER_TAG",
                  description:
                    "Image tag - The container image tag.\n+\nA valid Docker tag has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE:tag",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a tag from a container image in Artifact Registry",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DOCKER_TAG",
                description:
                  "Image tag - The container image tag.\n+\nA valid Docker tag has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE:tag",
              },
            },
            {
              name: "list",
              description:
                "List all tags associated with a container image in Artifact Registry",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_PATH",
                description:
                  "An Artifact Registry repository or a container image.\nIf not specified, default config values are used.\n+\nA valid docker repository has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID\n+\nA valid image has the format of\n  LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY-ID/IMAGE_PATH",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Commands to support Container Registry to Artifact Registry upgrade",
          subcommands: [
            {
              name: "migrate",
              description:
                "Migrate projects from Container Registry to Artifact Registry",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--canary-reads",
                  description:
                    "Send only a percent of reads to Artifact Registry. The rest of reads and all writes are sent to Container Registry",
                  args: {
                    name: "PERCENT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--copy-only",
                  description: "Only perform image copying",
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--from-gcr",
                  description:
                    "Container Registry host + project to copy from. This flag is only used when migrating to pkg.dev repos. Example: gcr.io/my-project",
                  args: {
                    name: "GCR_HOST/PROJECT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                {
                  name: "--input-iam-policy-dir",
                  description:
                    "During the IAM update step, the tool applies all iam policies in the given directory",
                  args: {
                    name: "DIRECTORY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--last-uploaded-versions",
                  description:
                    "Only copy the N most recently uploaded versions of each image. More than N images may be copied if new images are uploaded during migration",
                  args: { name: "N", description: "Int", suggestions: [] },
                },
                flag7356,
                {
                  name: "--max-threads",
                  description:
                    "Max number of images to copy simultaneously. Consider quota usage when increasing this",
                  args: {
                    name: "MAX_THREADS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--output-iam-policy-dir",
                  description:
                    "Outputs Artifact Registry-equivalent bindings to this directory during IAM update step and then exits the tool. After any neccesary modifications are made, the tool can be rerun with --input-iam-policy-dir to continue migration with the generated bindings",
                  args: {
                    name: "DIRECTORY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--pkg-dev-location",
                  description:
                    "The location of the pkg-dev repository you are migrating to. If not specified, migration is always done to the same multi-region as GCR. Setting this flag can cause cross-regional copying and lead to billing charges",
                  args: {
                    name: "PKG_DEV_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                {
                  name: "--projects",
                  description:
                    "Comma seperated list of Container Registry projects to migrate to Artifact Registry gcr.io repositories",
                  args: {
                    name: "PROJECTS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                {
                  name: "--recent-images",
                  description:
                    "Only copy images pulled or pushed in the last NUM_DAYS days. NUM_DAYS must be between 30 and 90 inclusive",
                  args: {
                    name: "NUM_DAYS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--skip-iam-update",
                  description:
                    "Migrate without changing iam-policy. Users without Artifact Registry permissions will not have access to migrated images",
                },
                {
                  name: "--skip-pre-copy",
                  description:
                    "Skip the initial copy of recent images before enabling redirection",
                },
                {
                  name: "--to-pkg-dev",
                  description:
                    "Artifact Registry pkg.dev project ID and repository ID to copy to. Example: my-project/my-repo",
                  args: {
                    name: "PROJECT_ID/REPOSITORY_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--use-analyze-iam",
                  description:
                    "Use analyzeIAMPolicy to get IAM bindings. If false, tooling iterates through IAM bindings itself, which is slower, but doesn't require anlayzeIAMPolicy quota. Enabled by default, use *--no-use-analyze-iam* to disable",
                },
                flag15315,
                flag15424,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "files",
      description: "Manage Artifact Registry files",
      subcommands: [
        {
          name: "delete",
          description: "Delete an Artifact Registry file",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6784,
            flag7356,
            flag11637,
            flag11946,
            flag12818,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file.\n+\nTo set the `file` attribute:\n* provide the argument `file` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6784,
            flag7356,
            flag11637,
            flag11946,
            flag12818,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file.\n+\nTo set the `file` attribute:\n* provide the argument `file` on the command line",
          },
        },
        {
          name: "download",
          description: "Download an Artifact Registry file",
          options: [
            flag42,
            flag46,
            {
              name: "--allow-overwrite",
              description:
                "If specified, the command overwrites an existing file",
            },
            flag1201,
            flag2292,
            {
              name: "--destination",
              description: "The path where you want to download the file",
              args: {
                name: "DESTINATION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--local-filename",
              description:
                "If specified, the name of the downloaded file on the local system is set to the value you use for LOCAL_FILENAME. Otherwise the name of the downloaded file is based on the file name in the registry",
              args: {
                name: "LOCAL_FILENAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Location of the file.\n+\nTo set the `location` attribute:\n* provide the argument `file` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11094,
            flag11637,
            flag11946,
            {
              name: "--repository",
              description:
                "Repository of the file.\n+\nTo set the `repository` attribute:\n* provide the argument `file` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
              args: {
                name: "REPOSITORY",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file.\n+\nTo set the `name` attribute:\n* provide the argument `file` on the command line",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry files",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6806,
            flag7356,
            {
              name: "--package",
              description:
                "List all files in a specified artifact, such as a container image or a language package. If you do not use --tag or --version in the command, the command lists files in all versions of the artifact",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag13948,
            {
              name: "--tag",
              description:
                "List all files in the artifact version with the specified tag. This flag only works with formats that use tags, such as container images. Use the --package flag to specify the artifact",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update annotations on an Artifact Registry file",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'List of annotations in the format of KEY=VALUE pairs to add, update, or remove.\nDuplicate keys will be overwritten. For more details on annotations,\nsee https://google.aip.dev/148#annotations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6784,
            flag7356,
            flag11637,
            flag11946,
            flag12818,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "ID of the file or fully qualified identifier for the file.\n+\nTo set the `file` attribute:\n* provide the argument `file` on the command line",
          },
        },
      ],
    },
    {
      name: "generic",
      description: "Manage Artifact Registry generic artifacts",
      subcommands: [
        {
          name: "download",
          description:
            "Download a generic artifact from a generic artifact repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1443,
            flag2292,
            {
              name: "--destination",
              description:
                "The path where you want to save the downloaded file",
              args: {
                name: "DESTINATION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6806,
            flag7356,
            {
              name: "--name",
              description:
                "If specified, the file name within the artifact to download",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            {
              name: "--package",
              description: "The artifact to download",
              args: {
                name: "ARTIFACT",
                description: "String",
                suggestions: [],
              },
            },
            flag11094,
            flag11637,
            flag11946,
            flag12808,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "upload",
          description: "Uploads an artifact to a generic repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--destination-path",
              description:
                "Use to specify the path to upload a generic artifact to within a folder structure",
              args: {
                name: "DESTINATION_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6806,
            flag7356,
            {
              name: "--package",
              description: "The package to upload",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12808,
            {
              name: "--skip-existing",
              description:
                "If specified, skip uploading files that already exist in the repository, and continue to upload the remaining files",
            },
            {
              name: "--source",
              description: "The path to the file you are uploading",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            {
              name: "--source-directory",
              description: "The directory you are uploading",
              args: {
                name: "SOURCE_DIRECTORY",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "go",
      description: "Manage Artifact Registry Go modules",
      subcommands: [
        {
          name: "auth",
          description:
            "Print authentication commands for the GOAUTH environment variable",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--json-key",
              description:
                "The path to the JSON key file to use for authentication. If not specified, the authentication commands printed will use the token from the logged in user",
              args: {
                name: "JSON_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "The location of the repository to print commands for",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "A URL generated by Go to set up authentication",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "upload",
          description: "Upload a Go module to an artifact repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6806,
            flag7356,
            {
              name: "--module-path",
              description: "The module path of the Go module",
              args: {
                name: "MODULE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12808,
            {
              name: "--source",
              description:
                "The root directory of the go module source code, defaults to the current directory",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "image-streaming-cache",
      description: "Manage Artifact Registry image streaming caches",
      subcommands: [
        {
          name: "create",
          description:
            "Initiates the prewarming of a specified artifact version or tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If set, evicts older items from the cache if the quota is reached",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6802,
            flag7356,
            flag11041,
            flag11637,
            flag11946,
            flag12811,
            {
              name: "--retention-days",
              description:
                "Number of days to retain the artifact in the cache (e.g., 1-7)",
              args: {
                name: "RETENTION_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            flag14469,
            {
              name: "--tag",
              description: "The tag name to prewarm (e.g., 'latest')",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ARTIFACT",
            description:
              "The full resource name of the version or tag to prewarm",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description:
            "Removes the prewarmed state of a specific artifact from a specific stream location",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6802,
            flag7356,
            flag11041,
            flag11637,
            flag11946,
            flag12811,
            flag14469,
            {
              name: "--tag",
              description: "The tag to remove (e.g., 'latest')",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ARTIFACT",
            description:
              "The full resource name of the version or tag to remove",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description:
            "Checks and describes the prewarmed status of an artifact",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6802,
            flag7356,
            flag11041,
            flag11637,
            flag11946,
            flag12811,
            flag14469,
            {
              name: "--tag",
              description: "The tag to check (e.g., 'latest')",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ARTIFACT",
            description:
              "The full resource name of the version or tag to check",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "Lists artifacts that are prewarmed within a given repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6806,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "locations",
      description: "Manage Artifact Registry resource locations",
      subcommands: [
        {
          name: "list",
          description: "List all Artifact Registry supported locations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Artifact Registry long-running operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Artifact Registry operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Location of the operation. Overrides the default artifacts/location property value\nfor this command invocation. To configure the default location, use the command:\ngcloud config set artifacts/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
      ],
    },
    {
      name: "packages",
      description: "Manage Artifact Registry packages",
      subcommands: [
        {
          name: "delete",
          description: "Delete an Artifact Registry package",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6803,
            flag7356,
            flag11637,
            flag11946,
            flag12819,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PACKAGE",
            description:
              "ID of the package or fully qualified identifier for the package.\n+\nTo set the `package` attribute:\n* provide the argument `package` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry package",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6803,
            flag7356,
            flag11637,
            flag11946,
            flag12819,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PACKAGE",
            description:
              "ID of the package or fully qualified identifier for the package.\n+\nTo set the `package` attribute:\n* provide the argument `package` on the command line",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry packages",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6806,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update annotations on an Artifact Registry package",
          options: [
            flag42,
            flag46,
            flag527,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6803,
            flag7356,
            flag11637,
            flag11946,
            flag12819,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PACKAGE",
            description:
              "ID of the package or fully qualified identifier for the package.\n+\nTo set the `package` attribute:\n* provide the argument `package` on the command line",
          },
        },
      ],
    },
    {
      name: "print-settings",
      description: "Print snippets to add to native tools settings files",
      subcommands: [
        {
          name: "gradle",
          description:
            "Print a snippet to add a repository to the Gradle build.gradle file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6140,
            flag6806,
            flag7356,
            flag11637,
            flag11946,
            flag12808,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "mvn",
          description:
            "Print a snippet to add a Maven repository to the pom.xml file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6140,
            flag6806,
            flag7356,
            flag11637,
            flag11946,
            flag12808,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "npm",
          description: "Print credential settings to add to the .npmrc file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6140,
            flag6806,
            flag7356,
            flag11637,
            flag11946,
            flag12808,
            {
              name: "--scope",
              description:
                "The scope to associate with the Artifact Registry registry. If not specified, Artifact Registry is set as the default registry",
              args: { name: "SCOPE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "python",
          description:
            "Print credential settings to add to the .pypirc and pip.conf files",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--json-key",
              description:
                "Path to service account JSON key. If not specified, output returns either credentials for an active service account or a placeholder for the current user account",
              args: {
                name: "JSON_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag6806,
            flag7356,
            flag11637,
            flag11946,
            flag12808,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "projects",
      description:
        "Manage Artifact Registry project-level configurations for a specific location",
      subcommands: [
        {
          name: "describe",
          description: "Describe project configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6714,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update project configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-platform-logs",
              description:
                "Clear platform logging settings for the project in this location to fall back to\norganization settings or AR defaults",
            },
            flag2292,
            {
              name: "--disable-platform-logs",
              description:
                "Disable platform logging for the project in this location",
            },
            {
              name: "--enable-platform-logs",
              description:
                "Enable platform logging for the project in this location",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6714,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--severity",
              description:
                "The minimum severity level of logs to generate. This flag is only applicable when using\n--enable-platform-logs. _SEVERITY_ must be one of:\n+\n*error*::: Log events with severity ERROR or higher.\n*info*::: Log events with severity INFO or higher.\n:::\n+",
              args: {
                name: "SEVERITY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["error", "info"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "repositories",
      description: "Manage Artifact Registry repositories",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to the IAM policy of an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "create",
          description: "Create an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            {
              name: "--allow-snapshot-overwrites",
              description:
                "(Maven only) Allow repository users to publish a snapshot that overwrites the same snapshot version in the repository",
            },
            flag456,
            flag720,
            flag1201,
            flag1819,
            flag2292,
            flag3176,
            flag3584,
            flag3601,
            flag3617,
            flag4248,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5697,
            flag5699,
            {
              name: "--kms-key",
              description:
                "Name of the encryption key that's used for encrypting the contents of the repository",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6809,
            flag7356,
            {
              name: "--mode",
              description:
                "Mode is the type of the repository - Standard, Virtual or Remote. _MODE_ must be one of:\n+\n*none*::: Repository mode not specified.\n*remote-repository*::: Remote repository mode - fetches data from upstream and caches it.\n*standard-repository*::: Standard repository mode - should be possible to write/read data to this repo.\n*virtual-repository*::: Virtual repository mode - aggregates data from several upstreams.\n:::\n+",
              args: {
                name: "MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "connector-repository",
                  "none",
                  "remote-repository",
                  "standard-repository",
                  "virtual-repository",
                ],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--remote-apt-repo",
              description:
                "(Apt only) Repository base for apt remote repository.\nREMOTE_APT_REPO must be one of: [debian, debian-snapshot, ubuntu]",
              args: {
                name: "REMOTE_APT_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-apt-repo-path",
              description:
                "(Apt only) Remaining URL path to apt remote repository",
              args: {
                name: "REMOTE_APT_REPO_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-docker-repo",
              description:
                "(Docker only) Repo upstream for docker remote repository.\nREMOTE_DOCKER_REPO can be either:\n  - one of the following enums: [docker-hub].\n  - an http/https custom registry uri (ex: https://my.docker.registry)",
              args: {
                name: "REMOTE_DOCKER_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-go-repo",
              description:
                '(Go only) Repo upstream for Go remote repository. "https://proxy.golang.org/" is the only valid value',
              args: {
                name: "REMOTE_GO_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-mvn-repo",
              description:
                "(Maven only) Repo upstream for maven remote repository.\nREMOTE_MVN_REPO can be either:\n  - one of the following enums: [maven-central].\n  - an http/https custom registry uri (ex: https://my.maven.registry)",
              args: {
                name: "REMOTE_MVN_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-npm-repo",
              description:
                "(Npm only) Repo upstream for npm remote repository.\nREMOTE_NPM_REPO can be either:\n  - one of the following enums: [npmjs].\n  - an http/https custom registry uri (ex: https://my.npm.registry)",
              args: {
                name: "REMOTE_NPM_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-password-secret-version",
              description:
                "Secret Manager secret version that contains password for the\nremote repository upstream",
              args: {
                name: "REMOTE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-python-repo",
              description:
                "(Python only) Repo upstream for python remote repository.\nREMOTE_PYTHON_REPO can be either:\n  - one of the following enums: [pypi].\n  - an http/https custom registry uri (ex: https://my.python.registry)",
              args: {
                name: "REMOTE_PYTHON_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-repo-config-desc",
              description: "The description for the remote repository config",
              args: {
                name: "REMOTE_REPO_CONFIG_DESC",
                description: "String",
                suggestions: [],
              },
            },
            flag12522,
            {
              name: "--remote-yum-repo",
              description:
                "(Yum only) Repository base for yum remote repository.\nREMOTE_YUM_REPO must be one of: [centos, centos-debug, centos-stream, centos-vault, epel, rocky]",
              args: {
                name: "REMOTE_YUM_REPO",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-yum-repo-path",
              description:
                "(Yum only) Remaining URL path to yum remote repository",
              args: {
                name: "REMOTE_YUM_REPO_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--repository-format",
              description:
                "Format of the repository. REPOSITORY_FORMAT must be one of:\n+\n apt\n    APT package format.\n docker\n    Docker image format.\n go\n    Go module format.\n kfp\n    KFP package format.\n maven\n    Maven package format.\n npm\n    NPM package format.\n python\n    Python package format.\n yum\n    YUM package format",
              args: {
                name: "REPOSITORY_FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            flag13719,
            flag14975,
            flag15243,
            flag15315,
            flag15424,
            {
              name: "--version-policy",
              description:
                "(Maven only) The package versions that the repository will store. _VERSION_POLICY_ must be one of:\n+\n*none*::: (Maven only) The repository doesn't validate the version type.\n*release*::: (Maven only) The repository accepts release versions only.\n*snapshot*::: (Maven only) The repository accepts snapshot versions only.\n:::\n+",
              args: {
                name: "VERSION_POLICY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "release", "snapshot"],
              },
            },
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "delete-cleanup-policies",
          description:
            "Delete cleanup policies from an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            {
              name: "--policynames",
              description:
                "Comma-separated list of cleanup policy names to delete",
              args: {
                name: "POLICYNAMES",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6809,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "list",
          description: "List repositories in the specified project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6714,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-cleanup-policies",
          description:
            "List cleanup policies of an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from the IAM policy of an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any\nconditions",
            },
            flag1201,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--role",
              description: "The role to remove the principal from",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "set-cleanup-policies",
          description:
            "Set or update cleanup policies for an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dry-run",
              description:
                "Disable deleting images according to cleanup policies",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            {
              name: "--policy",
              description:
                "Path to a local JSON formatted file containing valid cleanup policies",
              args: {
                name: "POLICY",
                description:
                  "Googlecloudsdk.command_lib.artifacts.cleanup_policy_util:ParseCleanupPolicy",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6809,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "REPOSITORY",
              description:
                "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update an Artifact Registry repository",
          options: [
            flag42,
            flag46,
            flag456,
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            flag1819,
            flag2292,
            flag3176,
            flag3584,
            flag3601,
            flag3617,
            flag4248,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5697,
            flag5699,
            flag6809,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remote-password-secret-version",
              description:
                "Secret Manager secret version that contains password for the remote repository upstream",
              args: {
                name: "REMOTE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag12522,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag13719,
            flag14975,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15243,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
      ],
    },
    {
      name: "rules",
      description: "Manage Artifact Registry rules",
      subcommands: [
        {
          name: "create",
          description: "Create an Artifact Registry rule",
          options: [
            flag42,
            flag46,
            {
              name: "--action",
              description:
                "The action the rule would make, can only be DENY or ALLOW. _ACTION_ must be one of: *allow*, *deny*",
              args: {
                name: "ACTION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["allow", "deny"],
              },
            },
            flag1201,
            flag2226,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6810,
            flag7356,
            {
              name: "--operation",
              description:
                "The operation the rule applies to. _OPERATION_ must be (only one value is supported): *download*",
              args: {
                name: "OPERATION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["download"],
              },
            },
            {
              name: "--package",
              description:
                "The package the rule applies to. Empty means the rule is set for the entire repository",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12820,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule.\n+\nTo set the `rule` attribute:\n* provide the argument `rule` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry rule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6810,
            flag7356,
            flag11637,
            flag11946,
            flag12820,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule.\n+\nTo set the `rule` attribute:\n* provide the argument `rule` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry rule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6810,
            flag7356,
            flag11637,
            flag11946,
            flag12820,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule.\n+\nTo set the `rule` attribute:\n* provide the argument `rule` on the command line",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry rules",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6808,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update an Artifact Registry rule",
          options: [
            flag42,
            flag46,
            {
              name: "--action",
              description:
                "The action the rule would make, can only be DENY or ALLOW. _ACTION_ must be one of: *allow*, *deny*",
              args: {
                name: "ACTION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["allow", "deny"],
              },
            },
            flag1201,
            flag2226,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6810,
            flag7356,
            {
              name: "--operation",
              description:
                "The operation the rule applies to. _OPERATION_ must be (only one value is supported): *download*",
              args: {
                name: "OPERATION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["download"],
              },
            },
            {
              name: "--package",
              description: "The package the rule applies to",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12820,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RULE",
            description:
              "ID of the rule or fully qualified identifier for the rule.\n+\nTo set the `rule` attribute:\n* provide the argument `rule` on the command line",
          },
        },
      ],
    },
    {
      name: "sbom",
      description: "Manage Artifact SBOMs",
      subcommands: [
        {
          name: "export",
          description: "Export SBOM files to Google Cloud Storage",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6737,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--uri",
              description:
                "The URI of the Artifact Registry image the SBOM is exported for. A 'gcr.io' image can also be used if redirection is enabled in Artifact Registry. Make sure 'artifactregistry.projectsettings.get' permission is granted to the current gcloud user to verify the redirection status",
              args: { name: "URI", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List SBOM file references",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dependency",
              description:
                "List SBOM file references generated when the images were pushed to Artifact Registry and related to the installed package dependency. See https://cloud.google.com/container-analysis/docs/scanning-types for supported packages",
              args: {
                name: "DEPENDENCY",
                description: "String",
                suggestions: [],
              },
            },
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6737,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--resource",
              description:
                "List SBOM file references related to the image resource uri",
              args: {
                name: "RESOURCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--resource-prefix",
              description:
                "List SBOM file references related to the resource uri with the resource path prefix",
              args: {
                name: "RESOURCE_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.\n The default is *occ.create_time*",
              args: { name: "FIELD", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "load",
          description: "Upload an SBOM file and create a reference occurrence",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination",
              description:
                "The storage path will be used to store the SBOM file.\nCurrently only supports Cloud Storage paths start with 'gs://'",
              args: {
                name: "DESTINATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kms-key-version",
              description:
                "Cloud KMS key version to sign the SBOM reference.\nThe key version provided should be the resource ID in the format of\n`projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]/cryptoKeyVersions/[KEY_VERSION]`",
              args: {
                name: "KMS_KEY_VERSION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag6737,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source",
              description: "The SBOM file for uploading",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--uri",
              description:
                "The URI of the artifact the SBOM is generated from.\nThe URI can be a Docker image from any Docker registries. A URI provided with a tag (e.g. `[IMAGE]:[TAG]`) will be resolved into a URI with a digest (`[IMAGE]@sha256:[DIGEST]`).\nWhen passing an image which is not from Artifact Registry or Container Registry with a tag, only public images can be resolved.\nAlso, when passing an image which is not from Artifact Registry or Container Registry, the `--destination` flag is required",
              args: {
                name: "ARTIFACT_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "settings",
      description: "Manage Artifact Registry project settings",
      subcommands: [
        {
          name: "describe",
          description: "List all Artifact Registry project settings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "disable-upgrade-redirection",
          description:
            "Disables redirection from Container Registry to Artifact Registry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "enable-upgrade-redirection",
          description:
            "Enables redirection from Container Registry to Artifact Registry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dry-run",
              description:
                "Validate the project setup, but do not enable redirection",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "tags",
      description: "Manage Artifact Registry tags",
      subcommands: [
        {
          name: "create",
          description: "Create an Artifact Registry tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6821,
            flag7356,
            flag11048,
            flag11637,
            flag11946,
            flag12821,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag.\n+\nTo set the `tag` attribute:\n* provide the argument `tag` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Artifact Registry tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6821,
            flag7356,
            flag11048,
            flag11637,
            flag11946,
            flag12821,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag.\n+\nTo set the `tag` attribute:\n* provide the argument `tag` on the command line",
          },
        },
        {
          name: "export",
          description: "Export an Artifact Registry package version by tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5164,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Location of the tag.\n+\nTo set the `location` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--package",
              description:
                "Package of the tag.\n+\nTo set the `package` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--package` on the command line",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--repository",
              description:
                "Repository of the tag.\n+\nTo set the `repository` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
              args: {
                name: "REPOSITORY",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag.\n+\nTo set the `tag` attribute:\n* provide the argument `tag` on the command line",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry tags",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6806,
            flag7356,
            {
              name: "--package",
              description:
                "List all tags in a specified artifact, such as a container\n        image or a language package",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update an Artifact Registry tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6821,
            flag7356,
            flag11048,
            flag11637,
            flag11946,
            flag12821,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag.\n+\nTo set the `tag` attribute:\n* provide the argument `tag` on the command line",
          },
        },
      ],
    },
    {
      name: "versions",
      description: "Manage Artifact Registry package versions",
      subcommands: [
        {
          name: "delete",
          description: "Delete an Artifact Registry package version",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--delete-tags",
              description:
                "If specified, all tags associated with the version are deleted",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6825,
            flag7356,
            flag11049,
            flag11637,
            flag11946,
            flag12822,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Artifact Registry package version",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6825,
            flag7356,
            flag11049,
            flag11637,
            flag11946,
            flag12822,
            flag13792,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
          },
        },
        {
          name: "export",
          description: "Export an Artifact Registry package version",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5164,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Location of the version.\n+\nTo set the `location` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `artifacts/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--package",
              description:
                "Package of the version.\n+\nTo set the `package` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--package` on the command line",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--repository",
              description:
                "Repository of the version.\n+\nTo set the `repository` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--repository` on the command line;\n* set the property `artifacts/repository`",
              args: {
                name: "REPOSITORY",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
          },
        },
        {
          name: "list",
          description: "List Artifact Registry package versions",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6806,
            flag7356,
            {
              name: "--package",
              description:
                "List all versions in a specified artifact, such as a container\n        image or a language package",
              args: { name: "PACKAGE", description: "String", suggestions: [] },
            },
            flag11059,
            flag11637,
            flag11946,
            flag12808,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description:
            "Update annotations on an Artifact Registry package version",
          options: [
            flag42,
            flag46,
            flag527,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6825,
            flag7356,
            flag11049,
            flag11637,
            flag11946,
            flag12822,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
          },
        },
      ],
    },
    {
      name: "vpcsc-config",
      description:
        "Manage Artifact Registry VPC Service Controls configuration for remote repositories",
      subcommands: [
        {
          name: "allow",
          description:
            "Allow Artifact Registry remote repositories inside a service perimeter to retrieve data from their upstream sources outside of the perimeter",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6714,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "deny",
          description:
            "Deny access to upstream sources outside the service perimeter for Artifact Registry remote repositories inside the perimeter",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6714,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "describe",
          description:
            "Describe the current Artifact Registry configuration for VPC Service Controls",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6714,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "vulnerabilities",
      description: "Manage Artifact Vulnerabilities",
      subcommands: [
        {
          name: "list",
          description:
            "Command for listing vulnerabilities. To see all fields, use --format=json",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6737,
            flag7356,
            {
              name: "--occurrence-filter",
              description:
                "A filter for the occurrences which will be summarized. See link for officially supported filters: https://cloud.google.com/container-analysis/docs/os-scanning-automatically#filtering",
              args: {
                name: "OCCURRENCE_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "URI",
            description:
              "An URI identifying a container image or package in Artifact Registry or Google Cloud Registry",
          },
        },
        {
          name: "load-vex",
          description: "Load VEX data from a CSAF file into Artifact Analysis",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6737,
            flag7356,
            flag11946,
            {
              name: "--source",
              description: "The path of the VEX file",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--uri",
              description:
                "The path of the artifact in Artifact Registry. A 'gcr.io' image can also be used if redirection is enabled in Artifact Registry. Make sure 'artifactregistry.projectsettings.get' permission is granted to the current gcloud user to verify the redirection status",
              args: { name: "URI", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "yum",
      description: "Manage Artifact Registry RPM packages",
      subcommands: [
        {
          name: "import",
          description:
            "Import one or more RPM packages into an artifact repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5182,
            flag5453,
            flag5699,
            flag6807,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line;\n* set the property `artifacts/repository`",
            isOptional: true,
          },
        },
        {
          name: "upload",
          description: "Upload an RPM package to an artifact repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6807,
            flag7356,
            flag11637,
            flag11946,
            flag14156,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line;\n* set the property `artifacts/repository`",
            isOptional: true,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
