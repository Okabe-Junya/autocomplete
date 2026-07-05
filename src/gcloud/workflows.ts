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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2728: Fig.Option = {
  name: "--data",
  description:
    "JSON string with data that will be passed to the workflow as an argument",
  args: { name: "DATA", description: "String", suggestions: [] },
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
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
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
const flag6413: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag6598: Fig.Option = {
  name: "--location",
  description:
    "Cloud location for the workflow.  Alternatively, set the property [workflows/location].\n+\nTo set the `location` attribute:\n* provide the argument `workflow` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `workflows/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6856: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the execution. Alternatively, set the property [workflows/location].\n+\n\nTo set the `location` attribute:\n* provide the argument `execution` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `workflows/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6867: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the workflow. Alternatively, set the property [workflows/location].\n+\n\nTo set the `location` attribute:\n* provide the argument `workflow` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `workflows/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15249: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
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
const flag15616: Fig.Option = {
  name: "--workflow",
  description:
    "The Cloud Workflow for the execution.\n+\n\nTo set the `workflow` attribute:\n* provide the argument `execution` on the command line with a fully specified name;\n* provide the argument `--workflow` on the command line",
  args: { name: "WORKFLOW", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "workflows",
  description: "Manage your Cloud Workflows resources",
  subcommands: [
    {
      name: "delete",
      description: "Delete a workflow",
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
        flag6867,
        flag7356,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow.\n+\nTo set the `workflow` attribute:\n* provide the argument `workflow` on the command line",
      },
    },
    {
      name: "deploy",
      description: "Create or update a workflow",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        {
          name: "--call-log-level",
          description:
            "Level of call logging to apply by default for the workflow. _CALL_LOG_LEVEL_ must be one of:\n+\n*log-all-calls*::: Log all calls to subworkflows or library functions and their results.\n*log-errors-only*::: Log when a call is stopped due to an exception.\n*log-none*::: Perform no call logging.\n*none*::: No logging level specified.\n:::\n+",
          args: {
            name: "CALL_LOG_LEVEL",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: [
              "log-all-calls",
              "log-errors-only",
              "log-none",
              "none",
            ],
          },
        },
        {
          name: "--clear-env-vars",
          description:
            "Clears all user-defined environment variables previously set for the\nworkflow.\n+\nExample:\ngcloud workflows deploy ${workflow_name} --clear-env-vars",
        },
        flag2292,
        {
          name: "--description",
          description: "The description of the workflow to deploy",
          args: { name: "DESCRIPTION", description: "String", suggestions: [] },
        },
        {
          name: "--env-vars-file",
          description:
            'Sets environment variables for the workflow to those stored in a local\nYAML file at the given path. All existing environment variables are\nremoved before the new environment variables are added.\n+\nExample:\ngcloud workflows deploy ${workflow_name} --env-vars-file=/path/to/env_vars.yaml\n+\nInside env_vars.yaml:\n+\npolicy: global\n+\nretry_count: 5 # Service converts this to string "5"',
          args: {
            name: "FILE_PATH",
            description:
              "Googlecloudsdk.command_lib.util.args.map_util:ArgDictFile",
            suggestions: [],
          },
        },
        {
          name: "--execution-history-level",
          description:
            "Level of execution history to apply for the workflow. _EXECUTION_HISTORY_LEVEL_ must be one of:\n+\n*execution-history-basic*::: Enable basic execution history.\n*execution-history-detailed*::: Enable detailed execution history, including expected iterations and in-scope variable values.\n*none*::: No execution history level specified.\n:::\n+",
          args: {
            name: "EXECUTION_HISTORY_LEVEL",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: [
              "execution-history-basic",
              "execution-history-detailed",
              "none",
            ],
          },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag6413,
        flag6598,
        flag7356,
        flag11637,
        flag11946,
        {
          name: "--remove-env-vars",
          description:
            "Removes user-defined environment variables from a workflow based\non a list of environment variable keys to be removed.\n+\nExample:\ngcloud workflows deploy ${workflow_name} --remove-env-vars policy,retry_count..",
          args: { name: "KEY", description: "List", suggestions: [] },
        },
        {
          name: "--service-account",
          description:
            'The service account that should be used as the workflow identity. "projects/PROJECT_ID/serviceAccounts/" prefix may be skipped from the full resource name, in that case "projects/-/serviceAccounts/" is prepended to the service account ID',
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--set-env-vars",
          description:
            "Sets environment variables for the workflow based on a comma-separated\nlist of key-value pairs. Will overwrite a workflow's existing\nenvironment variables.\n+\nExample:\ngcloud workflows deploy ${workflow_name} --set-env-vars policy=global,retry_count=5",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--source",
          description:
            "Location of a workflow source code to deploy. Required on first deployment. Location needs to be defined as a path to a local file with the source code",
          args: { name: "SOURCE", description: "String", suggestions: [] },
        },
        {
          name: "--tags",
          description:
            'List of tags KEY=VALUE pairs to bind.\nEach item must be expressed as\n"<tag-key-namespaced-name>=<tag-value-short-name>".\n+\nExample: 123/environment=production,123/costCenter=marketing',
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag14975,
        {
          name: "--update-env-vars",
          description:
            "Updates existing or adds new user-defined environment variables based\non a comma-separated list of key-value pairs.\n+\nExample:\ngcloud workflows deploy ${workflow_name} --update-env-vars policy=regional,retry_count=2",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow.\n+\nTo set the `workflow` attribute:\n* provide the argument `workflow` on the command line",
      },
    },
    {
      name: "describe",
      description: "Show metadata for a workflow",
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
        flag6867,
        flag7356,
        flag11637,
        flag11946,
        {
          name: "--revision-id",
          description: "The revision ID of the workflow to describe",
          args: { name: "REVISION_ID", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow.\n+\nTo set the `workflow` attribute:\n* provide the argument `workflow` on the command line",
      },
    },
    {
      name: "execute",
      description: "Execute a workflow",
      options: [
        flag42,
        flag46,
        flag1201,
        {
          name: "--call-log-level",
          description:
            "Level of call logging to apply during execution. _CALL_LOG_LEVEL_ must be one of:\n+\n*log-all-calls*::: Log all calls to subworkflows or library functions and their results.\n+\n*log-errors-only*::: Log when a call is stopped due to an exception.\n+\n*log-none*::: Perform no call logging.\n+\n*none*::: No call logging level specified.\n+\n:::\n+",
          args: {
            name: "CALL_LOG_LEVEL",
            description:
              "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
            suggestions: [
              "log-all-calls",
              "log-errors-only",
              "log-none",
              "none",
            ],
          },
        },
        flag2292,
        flag2728,
        {
          name: "--disable-concurrency-quota-overflow-buffering",
          description:
            "If set, the execution will not be backlogged when the concurrency quota is exhausted.\nBacklogged executions start when the concurrency quota becomes available",
        },
        {
          name: "--execution-history-level",
          description:
            "Level of execution history to apply during execution. _EXECUTION_HISTORY_LEVEL_ must be one of:\n+\n*execution-history-basic*::: Enable basic execution history.\n+\n*execution-history-detailed*::: Enable detailed execution history, including expected iterations and in-scope variable values.\n+\n*none*::: No execution history level specified.\n+\n:::\n+",
          args: {
            name: "EXECUTION_HISTORY_LEVEL",
            description:
              "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
            suggestions: [
              "execution-history-basic",
              "execution-history-detailed",
              "none",
            ],
          },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        {
          name: "--labels",
          description:
            "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens, underscores,\nlowercase characters, and numbers. Values must contain only hyphens, underscores,\nlowercase characters, and numbers",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag6867,
        flag7356,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow.\n+\nTo set the `workflow` attribute:\n* provide the argument `workflow` on the command line",
      },
    },
    {
      name: "executions",
      description: "Manage your Cloud Workflow execution resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a workflow execution",
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
            flag6856,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15616,
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the execution or fully qualified identifier for the execution.\n+\nTo set the `execution` attribute:\n* provide the argument `execution` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a workflow execution",
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
            flag6856,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15616,
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the execution or fully qualified identifier for the execution.\n+\nTo set the `execution` attribute:\n* provide the argument `execution` on the command line",
          },
        },
        {
          name: "describe-last",
          description: "Show metadata for the last cached workflow execution",
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
          name: "list",
          description: "List workflow executions",
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
            flag6867,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFLOW",
            description:
              "ID of the workflow or fully qualified identifier for the workflow.\n+\nTo set the `workflow` attribute:\n* provide the argument `workflow` on the command line",
          },
        },
        {
          name: "wait",
          description: "Wait for an execution to complete",
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
                "Cloud location for the execution.  Alternatively, set the property [workflows/location].\n+\nTo set the `location` attribute:\n* provide the argument `execution` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `workflows/location`",
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
            {
              name: "--workflow",
              description:
                "Workflow for the execution.\n+\nTo set the `workflow` attribute:\n* provide the argument `execution` on the command line with a fully specified name;\n* provide the argument `--workflow` on the command line",
              args: {
                name: "WORKFLOW",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the execution or fully qualified identifier for the execution.\n+\nTo set the `execution` attribute:\n* provide the argument `execution` on the command line",
          },
        },
        {
          name: "wait-last",
          description:
            "Wait for the last cached workflow execution to complete",
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
      ],
    },
    {
      name: "list",
      description: "List workflows",
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
        {
          name: "--location",
          description:
            "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `workflows/location`",
          args: { name: "LOCATION", description: "String", suggestions: [] },
        },
        flag7356,
        flag11059,
        flag11637,
        flag11946,
        flag13948,
        flag14975,
        flag15249,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "run",
      description: "Execute a workflow and wait for the execution to complete",
      options: [
        flag42,
        flag46,
        flag1201,
        {
          name: "--call-log-level",
          description:
            "Level of call logging to apply during execution. _CALL_LOG_LEVEL_ must be one of:\n+\n*log-all-calls*::: Log all calls to subworkflows or library functions and their results.\n*log-errors-only*::: Log when a call is stopped due to an exception.\n*log-none*::: Perform no call logging.\n*none*::: No logging level specified.\n:::\n+",
          args: {
            name: "CALL_LOG_LEVEL",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: [
              "log-all-calls",
              "log-errors-only",
              "log-none",
              "none",
            ],
          },
        },
        flag2292,
        flag2728,
        {
          name: "--disable-concurrency-quota-overflow-buffering",
          description:
            "If set, the execution will not be backlogged when the concurrency quota is exhausted. Backlogged executions start when the concurrency quota becomes available",
        },
        {
          name: "--execution-history-level",
          description:
            "Level of execution history to apply during execution. _EXECUTION_HISTORY_LEVEL_ must be one of:\n+\n*execution-history-basic*::: Enable execution history basic feature.\n*execution-history-detailed*::: Enable execution history detailed feature.\n*none*::: No execution history level specified.\n:::\n+",
          args: {
            name: "EXECUTION_HISTORY_LEVEL",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: [
              "execution-history-basic",
              "execution-history-detailed",
              "none",
            ],
          },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag6413,
        flag6598,
        flag7356,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKFLOW",
        description:
          "ID of the workflow or fully qualified identifier for the workflow.\n+\nTo set the `workflow` attribute:\n* provide the argument `workflow` on the command line",
      },
    },
  ],
};

export default completionSpec;
