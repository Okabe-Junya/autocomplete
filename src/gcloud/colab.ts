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
const flag2164: Fig.Option = {
  name: "--commit-sha",
  description:
    "The commit SHA to read from the Dataform repository. If unset, the file will be read from HEAD",
  args: { name: "COMMIT_SHA", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2817: Fig.Option = {
  name: "--dataform-repository-name",
  description:
    "ID of the dataform repository or fully qualified identifier for the dataform repository.\n+\nTo set the `name` attribute:\n* provide the argument `--dataform-repository-name` on the command line",
  args: {
    name: "DATAFORM_REPOSITORY_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag4278: Fig.Option = {
  name: "--enable-queueing",
  description:
    "Enables new scheduled runs to be queued when max_concurrent_runs limit is reached. If set to true, new runs will be queued instead of skipped",
};
const flag4393: Fig.Option = {
  name: "--end-time",
  description:
    'Timestamp after which no new runs can be scheduled. If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. If neither end time nor max_run_count is specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Must be in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2026-01-01T00:00:00Z" or "2026-01-01T00:00:00-05:00"',
  args: {
    name: "END_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseUtcTime",
    suggestions: [],
  },
};
const flag4634: Fig.Option = {
  name: "--execution-timeout",
  description:
    "The max running time of the execution job, as a duration. See '$ gcloud topic datetimes' for details on formatting the input duration",
  args: {
    name: "EXECUTION_TIMEOUT",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
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
const flag5172: Fig.Option = {
  name: "--gcs-notebook-uri",
  description:
    "The Cloud Storage uri pointing to the notebook. Format: gs://bucket/notebook_file.ipynb",
  args: { name: "GCS_NOTEBOOK_URI", description: "String", suggestions: [] },
};
const flag5174: Fig.Option = {
  name: "--gcs-output-uri",
  description:
    "The Cloud Storage location to upload notebook execution results to. Format: gs://bucket-name",
  args: { name: "GCS_OUTPUT_URI", description: "String", suggestions: [] },
};
const flag5214: Fig.Option = {
  name: "--generation",
  description:
    "The version of the Cloud Storage object to read. If unset, the current version of the object will be used",
  args: { name: "GENERATION", description: "String", suggestions: [] },
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
const flag6382: Fig.Option = {
  name: "--labels",
  description: "Add labels to identify and group the runtime template",
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7687: Fig.Option = {
  name: "--max-runs",
  description: "The max runs for the schedule",
  args: { name: "MAX_RUNS", description: "Int", suggestions: [] },
};
const flag10562: Fig.Option = {
  name: "--notebook-runtime-template",
  description:
    "ID of the notebook runtime template or fully qualified identifier for the notebook runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `--notebook-runtime-template` on the command line",
  args: {
    name: "NOTEBOOK_RUNTIME_TEMPLATE",
    description: "String",
    suggestions: [],
  },
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
const flag12291: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the notebook execution job.\n+\nTo set the `region` attribute:\n* provide the argument `execution` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `colab/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12292: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the runtime template.\n+\nTo set the `region` attribute:\n* provide the argument `runtime_template` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `colab/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12293: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the runtime.\n+\nTo set the `region` attribute:\n* provide the argument `runtime` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `colab/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12294: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the schedule.\n+\nTo set the `region` attribute:\n* provide the argument `schedule` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `colab/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12314: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `colab/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag13542: Fig.Option = {
  name: "--service-account",
  description: "The service account to run the execution as",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14375: Fig.Option = {
  name: "--start-time",
  description:
    'The timestamp after which the first run can be scheduled. Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g. "2026-01-01T00:00:00Z" or "2026-01-01T00:00:00-05:00"',
  args: {
    name: "START_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseUtcTime",
    suggestions: [],
  },
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
const flag15308: Fig.Option = {
  name: "--user-email",
  description:
    "The user email to run the execution as. This requires the provided runtime template to have end user credentials enabled",
  args: { name: "USER_EMAIL", description: "String", suggestions: [] },
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
  name: "colab",
  description: "Manage Colab Enterprise resources",
  subcommands: [
    {
      name: "executions",
      description: "Manage Colab Enterprise notebook execution jobs",
      subcommands: [
        {
          name: "create",
          description: "Create an execution",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2164,
            flag2292,
            flag2817,
            {
              name: "--direct-content",
              description:
                "The direct notebook content as IPYNB. This can be a local filepath to an .ipynb file or can be set to `-` to read content from stdin",
              args: {
                name: "DIRECT_CONTENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "The display name of the execution",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4634,
            flag4900,
            flag4902,
            flag5091,
            flag5172,
            flag5174,
            flag5214,
            flag5453,
            flag5699,
            flag7356,
            flag10562,
            flag11637,
            flag11946,
            flag12314,
            flag13542,
            flag14975,
            flag15308,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an execution",
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
            flag7356,
            flag11637,
            flag11946,
            flag12291,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the notebook execution job or fully qualified identifier for the notebook execution job.\n+\nTo set the `name` attribute:\n* provide the argument `execution` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an execution",
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
            flag12291,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXECUTION",
            description:
              "ID of the notebook execution job or fully qualified identifier for the notebook execution job.\n+\nTo set the `name` attribute:\n* provide the argument `execution` on the command line",
          },
        },
        {
          name: "list",
          description: "List your Colab Enterprise notebook execution jobs",
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
            flag12314,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "runtime-templates",
      description: "Manage Colab Enterprise runtime templates",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Colab Enterprise runtime template",
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
            flag12292,
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
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `runtime_template` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a runtime template",
          options: [
            {
              name: "--accelerator-count",
              description: "The number of accelerators used by the runtime",
              args: {
                name: "ACCELERATOR_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--accelerator-type",
              description:
                "The type of hardware accelerator used by the runtime. If specified, --accelerator-count must also be specified. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_A100*, *NVIDIA_A100_80GB*, *NVIDIA_L4*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_A100_80GB",
                  "NVIDIA_L4",
                ],
              },
            },
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "The description of the runtime template",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disk-size-gb",
              description:
                "The disk size of the runtime in GB. If specified, the --disk-type must also be specified. The minimum size is 10GB and the maximum is 65536GB",
              args: {
                name: "DISK_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--disk-type",
              description:
                "The type of the disk. _DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*, *HYPERDISK_BALANCED*",
              args: {
                name: "DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                  "HYPERDISK_BALANCED",
                ],
              },
            },
            {
              name: "--display-name",
              description: "The display name of the runtime template",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-euc",
              description:
                "Enable end user credential access for the runtime. Enabled by default, use *--no-enable-euc* to disable",
            },
            {
              name: "--enable-internet-access",
              description:
                "Enable public internet access for the runtime. Enabled by default, use *--no-enable-internet-access* to disable",
            },
            {
              name: "--enable-secure-boot",
              description:
                "Enables secure boot for the runtime. Disabled by default",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--idle-shutdown-timeout",
              description:
                "The duration after which the runtime is automatically shut down. An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h]. See '$ gcloud topic datetimes' for details on formatting the input duration",
              args: {
                name: "IDLE_SHUTDOWN_TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            {
              name: "--kms-keyring",
              description:
                "KMS keyring id of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
              args: {
                name: "KMS_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-location",
              description:
                "Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
              args: {
                name: "KMS_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-project",
              description:
                "Cloud project id for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line",
              args: {
                name: "KMS_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag6382,
            flag7356,
            {
              name: "--machine-type",
              description:
                "The Compute Engine machine type selected for the runtime",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `--network` on the command line",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--network-tags",
              description:
                "Applies the given Compute Engine tags to the runtime",
              args: { name: "TAGS", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12314,
            {
              name: "--runtime-template-id",
              description:
                "The id of the runtime template. If not specified, a random id will be generated",
              args: {
                name: "RUNTIME_TEMPLATE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork",
              description:
                "ID of the subnetwork or fully qualified identifier for the subnetwork.\n+\nTo set the `subnetwork` attribute:\n* provide the argument `--subnetwork` on the command line",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork-region",
              description:
                "Google Cloud region of this subnetwork https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `subnetwork-region` attribute:\n* provide the argument `--subnetwork` on the command line with a fully specified name;\n* provide the argument `--subnetwork-region` on the command line",
              args: {
                name: "SUBNETWORK_REGION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a runtime template",
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
            flag7356,
            flag11637,
            flag11946,
            flag12292,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `runtime_template` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a runtime template",
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
            flag12292,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `runtime_template` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a Colab Enterprise runtime template",
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
            flag12292,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `runtime_template` on the command line",
          },
        },
        {
          name: "list",
          description: "List your runtime templates",
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
            flag12314,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Colab Enterprise runtime template",
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
            flag12292,
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
            name: "RUNTIME_TEMPLATE",
            description:
              "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `runtime_template` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set IAM policy for a Colab Enterprise runtime template as defined in a JSON or YAML file",
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
            flag12292,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "RUNTIME_TEMPLATE",
              description:
                "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `runtime_template` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
    {
      name: "runtimes",
      description: "Manage Colab Enterprise runtimes",
      subcommands: [
        {
          name: "create",
          description: "Create a notebook runtime",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "The description",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "The display name of the runtime to create",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6382,
            flag7356,
            flag11637,
            flag11946,
            flag12314,
            {
              name: "--runtime-id",
              description:
                "The id of the runtime to create. If not specified, a random id will be generated",
              args: {
                name: "RUNTIME_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--runtime-template",
              description:
                "ID of the runtime template or fully qualified identifier for the runtime template.\n+\nTo set the `name` attribute:\n* provide the argument `--runtime-template` on the command line",
              args: {
                name: "RUNTIME_TEMPLATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--runtime-user",
              description:
                "User email for the runtime owner. Runtimes can only be used by the owner. If a user is not provided, the gcloud user will be assumed to be the owner. The user cannot be a service account",
              args: {
                name: "RUNTIME_USER",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a runtime",
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
            flag7356,
            flag11637,
            flag11946,
            flag12293,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `name` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a runtime",
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
            flag12293,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `name` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "list",
          description: "List your project's runtimes",
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
            flag12314,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "start",
          description: "Start a stopped runtime",
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
            flag7356,
            flag11637,
            flag11946,
            flag12293,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `name` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "stop",
          description: "Stop a runtime",
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
            flag7356,
            flag11637,
            flag11946,
            flag12293,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `name` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "upgrade",
          description: "Upgrade a runtime",
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
            flag7356,
            flag11637,
            flag11946,
            flag12293,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `name` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
      ],
    },
    {
      name: "schedules",
      description: "Manage Colab Enterprise notebook execution schedules",
      subcommands: [
        {
          name: "create",
          description: "Create a schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2164,
            flag2292,
            {
              name: "--cron-schedule",
              description:
                'Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *"',
              args: {
                name: "CRON_SCHEDULE",
                description: "String",
                suggestions: [],
              },
            },
            flag2817,
            {
              name: "--display-name",
              description: "The display name of the schedule",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4278,
            flag4393,
            {
              name: "--execution-display-name",
              description: "The display name of the execution",
              args: {
                name: "EXECUTION_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4634,
            flag4900,
            flag4902,
            flag5091,
            flag5172,
            flag5174,
            flag5214,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--max-concurrent-runs",
              description:
                "Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests",
              args: {
                name: "MAX_CONCURRENT_RUNS",
                description: "Int",
                suggestions: [],
              },
            },
            flag7687,
            flag10562,
            flag11637,
            flag11946,
            flag12314,
            flag13542,
            flag14375,
            flag14975,
            flag15308,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a schedule",
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
            flag7356,
            flag11637,
            flag11946,
            flag12294,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule.\n+\nTo set the `name` attribute:\n* provide the argument `schedule` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a schedule",
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
            flag12294,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule.\n+\nTo set the `name` attribute:\n* provide the argument `schedule` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List your Colab Enterprise notebook execution schedules",
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
            flag12314,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "pause",
          description: "Pause a schedule",
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
            flag12294,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule.\n+\nTo set the `name` attribute:\n* provide the argument `schedule` on the command line",
          },
        },
        {
          name: "resume",
          description: "Resume a schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--enable-catch-up",
              description:
                "Enables backfilling missed runs when the schedule is resumed from PAUSED state. If enabled, all missed runs will be scheduled and new runs will be scheduled after the backfill is complete",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12294,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule.\n+\nTo set the `name` attribute:\n* provide the argument `schedule` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--cron-schedule",
              description:
                'Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *"',
              args: {
                name: "CRON_SCHEDULE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "The display name of the schedule",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4278,
            flag4393,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--max-concurrent-runs",
              description:
                "Maximum number of runs that can be started concurrently for this Schedule. This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests",
              args: {
                name: "MAX_CONCURRENT_RUNS",
                description: "Int",
                suggestions: [],
              },
            },
            flag7687,
            flag11637,
            flag11946,
            flag12294,
            flag14375,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEDULE",
            description:
              "ID of the schedule or fully qualified identifier for the schedule.\n+\nTo set the `name` attribute:\n* provide the argument `schedule` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
