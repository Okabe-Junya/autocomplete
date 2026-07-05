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
const flag6654: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the job.\n+\nTo set the `location` attribute:\n* provide the argument `JOB` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `batch/location`",
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
  name: "batch",
  description: "Manage Batch resources",
  subcommands: [
    {
      name: "jobs",
      description: "Manage Batch job resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a job",
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
            flag6654,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `JOB` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a job",
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
            flag6654,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `JOB` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details of a job",
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
            flag6654,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `JOB` on the command line",
          },
        },
        {
          name: "list",
          description: "List jobs for a specified Batch project/location",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `batch/location`",
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
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "submit",
          description: "Submit a Batch job",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--config",
              description:
                "The file path of the job config file in either JSON or YAML format.\n        It also supports direct input from stdin with '-' or HereDoc\n        (in shells with HereDoc support like Bash) with '- <<DELIMITER'.\n+\nUse a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--container-commands-file",
              description:
                "Overrides the `CMD` specified in the container. If there is an\n      ENTRYPOINT (either in the container image or with the entrypoint field\n      below) then commands are appended as arguments to the ENTRYPOINT",
              args: {
                name: "CONTAINER_COMMANDS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--container-entrypoint",
              description:
                "Overrides the `ENTRYPOINT` specified in the container",
              args: {
                name: "CONTAINER_ENTRYPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--container-image-uri",
              description: "The URI to pull the container image from",
              args: {
                name: "CONTAINER_IMAGE_URI",
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
              name: "--job-prefix",
              description:
                "Specify the job prefix. A job ID in the format of\n      job prefix + %Y%m%d-%H%M%S will be generated. Note that job prefix\n      cannot be specified while JOB ID positional argument is\n      specified",
              args: {
                name: "JOB_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Google Cloud location for the job.\n+\nTo set the `location` attribute:\n* provide the argument `JOB` on the command line with a fully specified name;\n* job ID is optional and will be generated if not specified with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `batch/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--machine-type",
              description:
                "Specify the Compute Engine machine type, for\n      example, e2-standard-4. Currently only one machine type is supported",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "The URL for the network resource.\n        Must specify subnetwork as well if network is specified",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--no-external-ip-address",
              description:
                "Required if no external public IP address\n        is attached to the VM. If no external public IP address,\n        additional configuration is required to allow the VM\n        to access Google Services",
            },
            {
              name: "--priority",
              description: "Job priority [0-99] 0 is the lowest priority",
              args: {
                name: "PRIORITY",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--provisioning-model",
              description:
                "Specify the allowed provisioning model for the compute instances. _PROVISIONING_MODEL_ must be one of:\n+\n*SPOT*::: The SPOT VM provisioning model. Ideal for fault-tolerant\n            workloads that can withstand preemption.\n*STANDARD*::: The STANDARD VM provisioning model\n:::\n+",
              args: {
                name: "PROVISIONING_MODEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["SPOT", "STANDARD"],
              },
            },
            flag11946,
            {
              name: "--script-file-path",
              description:
                "Path to script file to run as first runnable in task spec.\n        File path should be a valid path on the instance volume",
              args: {
                name: "SCRIPT_FILE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--script-text",
              description: "Text to run as first runnable in task spec",
              args: {
                name: "SCRIPT_TEXT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork",
              description:
                "The URL for the subnetwork resource.\n        Must specify network as well if subnetwork is specified",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `JOB` on the command line;\n* job ID is optional and will be generated if not specified",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "tasks",
      description: "Manage Batch task resources",
      subcommands: [
        {
          name: "describe",
          description: "Show details of a task",
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
              name: "--job",
              description:
                "The job ID for the task.\n+\nTo set the `job` attribute:\n* provide the argument `TASK` on the command line with a fully specified name;\n* provide the argument `--job` on the command line",
              args: { name: "JOB", description: "String", suggestions: [] },
            },
            {
              name: "--location",
              description:
                "Google Cloud location for the task.\n+\nTo set the `location` attribute:\n* provide the argument `TASK` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `batch/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: ["--task-group", "--task_group"],
              description:
                "The task_group ID for the task.\n+\nTo set the `task_group` attribute:\n* provide the argument `TASK` on the command line with a fully specified name;\n* provide the argument `--task_group` on the command line",
              args: {
                name: "TASK_GROUP",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `TASK` on the command line",
          },
        },
        {
          name: "list",
          description: "List tasks for a specified Batch job",
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
              name: "--job",
              description:
                "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `--job` on the command line",
              args: { name: "JOB", description: "String", suggestions: [] },
            },
            flag6515,
            {
              name: "--location",
              description:
                "Google Cloud location for the job.\n+\nTo set the `location` attribute:\n* provide the argument `--job` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `batch/location`",
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
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
