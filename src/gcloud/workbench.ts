// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag2: Fig.Option = {
  name: "--accelerator-core-count",
  description: "Count of cores of this accelerator",
  args: { name: "ACCELERATOR_CORE_COUNT", description: "Int", suggestions: [] },
};
const flag6: Fig.Option = {
  name: "--accelerator-count",
  description: "The number of accelerators used by the runtime",
  args: { name: "ACCELERATOR_COUNT", description: "Int", suggestions: [] },
};
const flag12: Fig.Option = {
  name: "--accelerator-type",
  description:
    "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_A100*, *NVIDIA_A100_80GB*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *NVIDIA_L4*, *NVIDIA_H100_80GB*, *NVIDIA_H100_MEGA_80GB*, *NVIDIA_H200_141GB*, *NVIDIA_B200*, *NVIDIA_RTX6000*",
  args: {
    name: "ACCELERATOR_TYPE",
    description: "String",
    suggestions: [
      "NVIDIA_TESLA_K80",
      "NVIDIA_TESLA_P100",
      "NVIDIA_TESLA_V100",
      "NVIDIA_TESLA_P4",
      "NVIDIA_TESLA_T4",
      "NVIDIA_TESLA_A100",
      "NVIDIA_A100_80GB",
      "NVIDIA_TESLA_T4_VWS",
      "NVIDIA_TESLA_P100_VWS",
      "NVIDIA_TESLA_P4_VWS",
      "NVIDIA_L4",
      "NVIDIA_H100_80GB",
      "NVIDIA_H100_MEGA_80GB",
      "NVIDIA_H200_141GB",
      "NVIDIA_B200",
      "NVIDIA_RTX6000",
    ],
  },
};
const flag13: Fig.Option = {
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
};
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
const flag2402: Fig.Option = {
  name: "--container-repository",
  description:
    "The path to the container image repository. For example: gcr.io/`{project_id}`/`{image_name}`",
  args: {
    name: "CONTAINER_REPOSITORY",
    description: "String",
    suggestions: [],
  },
};
const flag2413: Fig.Option = {
  name: "--container-tag",
  description:
    "The tag of the container image. If not specified, this defaults to the latest tag",
  args: { name: "CONTAINER_TAG", description: "String", suggestions: [] },
};
const flag2692: Fig.Option = {
  name: "--data-disk-resource-policies",
  description:
    "Resource policies to apply to the data disk. Format: `projects/{project}/regions/{region}/resourcePolicies/{policy}`",
  args: { name: "RESOURCE_POLICIES", description: "List", suggestions: [] },
};
const flag3664: Fig.Option = {
  name: "--disk-size-gb",
  description:
    "The disk size of the runtime in GB. If specified, the --disk-type must also be specified. The minimum size is 10GB and the maximum is 65536GB",
  args: { name: "DISK_SIZE_GB", description: "Int", suggestions: [] },
};
const flag3670: Fig.Option = {
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
};
const flag4162: Fig.Option = {
  name: "--enable-internet-access",
  description:
    "Enable public internet access for the runtime. Enabled by default, use *--no-enable-internet-access* to disable",
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
const flag6218: Fig.Option = {
  name: "--kernel-name",
  description: "The kernel name to use for the execution",
  args: { name: "KERNEL_NAME", description: "String", suggestions: [] },
};
const flag6310: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6329: Fig.Option = {
  name: "--kms-keyring",
  description:
    "KMS keyring id of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6339: Fig.Option = {
  name: "--kms-location",
  description:
    "Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6346: Fig.Option = {
  name: "--kms-project",
  description:
    "Cloud project id for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line",
  args: { name: "KMS_PROJECT", description: "String", suggestions: [] },
};
const flag6404: Fig.Option = {
  name: "--labels",
  description:
    "Labels to apply to this instance. These can be later modified by the setLabels method",
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
const flag7122: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7303: Fig.Option = {
  name: "--location",
  description:
    "The location of the workbench instance.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7327: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7424: Fig.Option = {
  name: "--machine-type",
  description:
    "The [Compute Engine machine type](https://cloud.google.com/sdk/gcloud/reference/compute/machine-types) of this instance",
  args: { name: "MACHINE_TYPE", description: "String", suggestions: [] },
};
const flag7435: Fig.Option = {
  name: "--machine-type",
  description: "The Compute Engine machine type selected for the runtime",
  args: { name: "MACHINE_TYPE", description: "String", suggestions: [] },
};
const flag7687: Fig.Option = {
  name: "--max-runs",
  description: "The max runs for the schedule",
  args: { name: "MAX_RUNS", description: "Int", suggestions: [] },
};
const flag7821: Fig.Option = {
  name: "--metadata",
  description: "Custom metadata to apply to this instance",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag8299: Fig.Option = {
  name: "--network",
  description:
    "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `--network` on the command line",
  args: { name: "NETWORK", description: "String", suggestions: [] },
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
const flag12290: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the notebook execution job.\n+\nTo set the `region` attribute:\n* provide the argument `execution` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12294: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the schedule.\n+\nTo set the `region` attribute:\n* provide the argument `schedule` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `colab/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12312: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag13543: Fig.Option = {
  name: "--service-account",
  description: "The service account to run the execution as",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13749: Fig.Option = {
  name: "--shielded-integrity-monitoring",
  description:
    "Boolean. Enable monitoring of the boot integrity of the instance. Supported values: `true`, `false`",
  args: {
    name: "SHIELDED_INTEGRITY_MONITORING",
    description: "String",
    suggestions: [],
  },
};
const flag13758: Fig.Option = {
  name: "--shielded-secure-boot",
  description:
    "Boolean. Boot instance with secure boot enabled. Supported values: `true`, `false`",
  args: {
    name: "SHIELDED_SECURE_BOOT",
    description: "String",
    suggestions: [],
  },
};
const flag13764: Fig.Option = {
  name: "--shielded-vtpm",
  description:
    "Boolean. Boot instance with TPM (Trusted Platform Module) enabled. Supported values: `true`, `false`",
  args: { name: "SHIELDED_VTPM", description: "String", suggestions: [] },
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
const flag14533: Fig.Option = {
  name: "--subnetwork-region",
  description:
    "Google Cloud region of this subnetwork https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `subnetwork-region` attribute:\n* provide the argument `--subnetwork` on the command line with a fully specified name;\n* provide the argument `--subnetwork-region` on the command line",
  args: { name: "SUBNETWORK_REGION", description: "String", suggestions: [] },
};
const flag14547: Fig.Option = {
  name: "--subnetwork",
  description:
    "ID of the subnetwork or fully qualified identifier for the subnetwork.\n+\nTo set the `subnetwork` attribute:\n* provide the argument `--subnetwork` on the command line",
  args: { name: "SUBNETWORK", description: "String", suggestions: [] },
};
const flag14655: Fig.Option = {
  name: "--tags",
  description: "Tags to apply to this instance",
  args: { name: "TAGS", description: "List", suggestions: [] },
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

const completionSpec: Fig.Spec = {
  name: "workbench",
  description: "Workbench Command Group",
  subcommands: [
    {
      name: "executions",
      description: "Workbench executions command group",
      subcommands: [
        {
          name: "create",
          description: "Create a Workbench execution",
          options: [
            flag6,
            flag13,
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
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
            flag3664,
            flag3670,
            {
              name: "--display-name",
              description: "The display name of the execution",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4162,
            flag4634,
            flag4900,
            flag4902,
            flag5091,
            flag5172,
            flag5174,
            flag5214,
            flag5453,
            flag5699,
            flag6218,
            flag6310,
            flag6329,
            flag6339,
            flag6346,
            flag7356,
            flag7435,
            flag8299,
            flag11637,
            flag11946,
            flag12312,
            flag13543,
            flag14547,
            flag14533,
            flag14975,
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
            flag12290,
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
            flag12290,
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
          description: "List your notebook execution jobs",
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
            flag12312,
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
      name: "instances",
      description: "Workbench Instances command group",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Adds IAM policy binding for a workbench instance",
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
            flag7303,
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "check-instance-upgradability",
          description: "Checks if a workbench instance is upgradeable",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "create",
          description: "Creates a workbench instance",
          options: [
            flag2,
            flag12,
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--boot-disk-encryption",
              description:
                "Disk encryption method used on the boot disk, defaults to GMEK. _BOOT_DISK_ENCRYPTION_ must be one of: *GMEK*, *CMEK*",
              args: {
                name: "BOOT_DISK_ENCRYPTION",
                description: "String",
                suggestions: ["GMEK", "CMEK"],
              },
            },
            {
              name: "--boot-disk-encryption-key-keyring",
              description:
                "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--boot-disk-kms-key` on the command line with a fully specified name;\n* provide the argument `--boot-disk-encryption-key-keyring` on the command line",
              args: {
                name: "BOOT_DISK_ENCRYPTION_KEY_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--boot-disk-encryption-key-location",
              description:
                "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--boot-disk-kms-key` on the command line with a fully specified name;\n* provide the argument `--boot-disk-encryption-key-location` on the command line",
              args: {
                name: "BOOT_DISK_ENCRYPTION_KEY_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--boot-disk-encryption-key-project",
              description:
                "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--boot-disk-kms-key` on the command line with a fully specified name;\n* provide the argument `--boot-disk-encryption-key-project` on the command line;\n* set the property `core/project`",
              args: {
                name: "BOOT_DISK_ENCRYPTION_KEY_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--boot-disk-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--boot-disk-kms-key` on the command line",
              args: {
                name: "BOOT_DISK_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--boot-disk-size",
              description:
                "Size of boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--boot-disk-type",
              description:
                "Type of boot disk attached to this instance. Defaults to standard persistent disk (`PD_STANDARD`) on machine types that support Persistent Disk, and to `HYPERDISK_BALANCED` on Hyperdisk-only machine series (e.g. N4, C4, C4A, M4). _BOOT_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*, *HYPERDISK_BALANCED*, *HYPERDISK_BALANCED_HIGH_AVAILABILITY*, *HYPERDISK_ML*",
              args: {
                name: "BOOT_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                  "HYPERDISK_BALANCED",
                  "HYPERDISK_BALANCED_HIGH_AVAILABILITY",
                  "HYPERDISK_ML",
                ],
              },
            },
            {
              name: "--confidential-compute-type",
              description:
                "String. VM instance with CC (Confidential Compute) of type. Supported values: `SEV`",
              args: {
                name: "CONFIDENTIAL_COMPUTE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag2402,
            flag2413,
            {
              name: "--custom-gpu-driver-path",
              description:
                "Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers",
              args: {
                name: "CUSTOM_GPU_DRIVER_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--data-disk-encryption",
              description:
                "Disk encryption method used on the data disk, defaults to GMEK. _DATA_DISK_ENCRYPTION_ must be one of: *GMEK*, *CMEK*",
              args: {
                name: "DATA_DISK_ENCRYPTION",
                description: "String",
                suggestions: ["GMEK", "CMEK"],
              },
            },
            {
              name: "--data-disk-encryption-key-keyring",
              description:
                "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--data-disk-kms-key` on the command line with a fully specified name;\n* provide the argument `--data-disk-encryption-key-keyring` on the command line",
              args: {
                name: "DATA_DISK_ENCRYPTION_KEY_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--data-disk-encryption-key-location",
              description:
                "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--data-disk-kms-key` on the command line with a fully specified name;\n* provide the argument `--data-disk-encryption-key-location` on the command line",
              args: {
                name: "DATA_DISK_ENCRYPTION_KEY_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--data-disk-encryption-key-project",
              description:
                "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--data-disk-kms-key` on the command line with a fully specified name;\n* provide the argument `--data-disk-encryption-key-project` on the command line;\n* set the property `core/project`",
              args: {
                name: "DATA_DISK_ENCRYPTION_KEY_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--data-disk-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--data-disk-kms-key` on the command line",
              args: {
                name: "DATA_DISK_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag2692,
            {
              name: "--data-disk-size",
              description:
                "Size of data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100",
              args: {
                name: "DATA_DISK_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--data-disk-type",
              description:
                "Type of data disk attached to this instance. Defaults to standard persistent disk (`PD_STANDARD`) on machine types that support Persistent Disk, and to `HYPERDISK_BALANCED` on Hyperdisk-only machine series (e.g. N4, C4, C4A, M4). _DATA_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*, *HYPERDISK_BALANCED*, *HYPERDISK_BALANCED_HIGH_AVAILABILITY*, *HYPERDISK_ML*, *HYPERDISK_EXTREME*, *HYPERDISK_THROUGHPUT*",
              args: {
                name: "DATA_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                  "HYPERDISK_BALANCED",
                  "HYPERDISK_BALANCED_HIGH_AVAILABILITY",
                  "HYPERDISK_ML",
                  "HYPERDISK_EXTREME",
                  "HYPERDISK_THROUGHPUT",
                ],
              },
            },
            {
              name: "--disable-proxy-access",
              description:
                "If true, the notebook instance will not register with the proxy",
            },
            {
              name: "--disable-public-ip",
              description:
                "If specified, no public IP will be assigned to this instance",
            },
            {
              name: "--enable-ip-forwarding",
              description:
                "If specified, IP forwarding will be enabled for this instance",
            },
            {
              name: "--enable-managed-euc",
              description:
                "If true, the notebook instance will be created with managed end  user credentials enabled",
            },
            {
              name: "--enable-third-party-identity",
              description:
                "If true, the notebook instance provide a proxy endpoint which allows for third party identity",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--install-gpu-driver",
              description:
                "Whether the end user authorizes Google Cloud to install a GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs",
            },
            {
              name: "--instance-owners",
              description:
                "The owners of this instance after creation. Format: `alias@example.com`. Currently supports one owner only. If not specified, all of the service account users of the VM instance's service account can use the instance",
              args: {
                name: "INSTANCE_OWNERS",
                description: "String",
                suggestions: [],
              },
            },
            flag6404,
            flag7122,
            flag7356,
            flag7424,
            flag7821,
            {
              name: "--min-cpu-platform",
              description:
                "The minimum CPU platform to use for this instance. The list of valid values can be found in https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones",
              args: {
                name: "MIN_CPU_PLATFORM",
                description: "String",
                suggestions: [],
              },
            },
            flag8299,
            {
              name: "--nic-type",
              description:
                "Type of the network interface card. _NIC_TYPE_ must be one of: *VIRTIGO_NET*, *GVNIC*",
              args: {
                name: "NIC_TYPE",
                description: "String",
                suggestions: ["VIRTIGO_NET", "GVNIC"],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--reservation-key",
              description:
                "The label key of a reservation resource. To target a specific reservation by name, use compute.googleapis.com/reservation-name as the key and specify the name of your reservation as its value",
              args: {
                name: "RESERVATION_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--reservation-type",
              description:
                "Type of the reservation. _RESERVATION_TYPE_ must be one of: *none*, *any*, *specific*",
              args: {
                name: "RESERVATION_TYPE",
                description: "String",
                suggestions: ["none", "any", "specific"],
              },
            },
            {
              name: "--reservation-values",
              description:
                "The label value of a reservation resource. To target a specific reservation by name, use compute.googleapis.com/reservation-name as the key and specify the name of your reservation as its value",
              args: { name: "VALUES", description: "List", suggestions: [] },
            },
            {
              name: "--service-account-email",
              description:
                "The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must grant the service account user permission to use the instance. If not specified, the [Compute Engine default service account](/compute/docs/access/service-accounts#default_service_account) is used",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            flag13749,
            flag13758,
            flag13764,
            {
              name: "--subnet",
              description:
                "ID of the subnetwork or fully qualified identifier for the subnetwork.\n+\nTo set the `subnet` attribute:\n* provide the argument `--subnet` on the command line",
              args: { name: "SUBNET", description: "String", suggestions: [] },
            },
            {
              name: "--subnet-region",
              description:
                "Google Cloud region of this subnetwork https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `subnet-region` attribute:\n* provide the argument `--subnet` on the command line with a fully specified name;\n* provide the argument `--subnet-region` on the command line",
              args: {
                name: "SUBNET_REGION",
                description: "String",
                suggestions: [],
              },
            },
            flag14655,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--vm-image-family",
              description:
                "Use this VM image family to find the image; the newest image in this family will be used",
              args: {
                name: "VM_IMAGE_FAMILY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--vm-image-name",
              description: "Use this VM image name to find the image",
              args: {
                name: "VM_IMAGE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--vm-image-project",
              description:
                "The ID of the Google Cloud project that this VM image belongs to. Format: projects/`{project_id}`",
              args: {
                name: "VM_IMAGE_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a workbench instance",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describes a workbench instance",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "diagnose",
          description: "Diagnoses a workbench instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--enable-copy-home-files",
              description:
                "Enables flag to copy all `/home/jupyter` folder contents",
            },
            {
              name: "--enable-packet-capture",
              description:
                "Enables flag to capture packets from the instance for 30 seconds",
            },
            {
              name: "--enable-repair",
              description: "Enables flag to repair service for instance",
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-bucket",
              description:
                "The Cloud Storage bucket where the log files generated from the diagnose command will be stored. storage.buckets.writer permissions must be given to project's service account or user credential. Format: gs://`{gcs_bucket}`",
              args: {
                name: "GCS_BUCKET",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--relative-path",
              description:
                "Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written. Default path will be the root directory of the Cloud Storage bucketFormat of full path: gs://`{gcs_bucket}`/`{relative_path}`/",
              args: {
                name: "RELATIVE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "get-config",
          description:
            "Describes the valid configurations for workbench instances",
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
            flag7327,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "get-iam-policy",
          description: "Gets IAM policy for a workbench instance",
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
            flag7303,
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists workbench instances",
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
            flag7327,
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
          name: "remove-iam-policy-binding",
          description: "Removes IAM policy binding for a workbench instance",
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
            flag7303,
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "reset",
          description: "Resets a workbench instance",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "resize-disk",
          description: "Resizes the workbench instance's disk",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--boot-disk-size",
              description:
                "Size of boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB)",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--data-disk-size",
              description:
                "Size of data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB)",
              args: {
                name: "DATA_DISK_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "restore",
          description: "Restores the workbench instance to a snapshot state",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--snapshot",
              description: "The snapshot name to be restored from",
              args: {
                name: "SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snapshot-project",
              description: "The project id of the snapshot to be restored from",
              args: {
                name: "SNAPSHOT_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "rollback",
          description: "Rolls back a workbench instance",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--target-snapshot",
              description: "The saved snapshot to rollback to",
              args: {
                name: "TARGET_SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Sets the IAM policy for a workbench instance",
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
            flag7303,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "start",
          description: "Starts a workbench instance",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "stop",
          description: "Stops a workbench instance",
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
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "update",
          description: "Updates a workbench instance",
          options: [
            flag2,
            flag12,
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2402,
            flag2413,
            {
              name: "--custom-gpu-driver-path",
              description: "custom gpu driver path",
              args: {
                name: "CUSTOM_GPU_DRIVER_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag2692,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            { name: "--install-gpu-driver", description: "Install gpu driver" },
            flag6404,
            flag7122,
            flag7356,
            flag7424,
            flag7821,
            flag11637,
            flag11946,
            flag13749,
            flag13758,
            flag13764,
            flag14655,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "upgrade",
          description: "Upgrades a workbench instance",
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
            {
              name: "--image-family",
              description:
                "The full Compute Engine image family resource name to upgrade to. Format: `projects/{project_id}/global/images/family/{image_family}`. If specified, the instance will be upgraded to the latest image in the specified image family, allowing upgrades across image families. If not specified, the instance will be upgraded to the latest image in its current image family",
              args: {
                name: "IMAGE_FAMILY",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
      ],
    },
    {
      name: "schedules",
      description: "Workbench schedules command group",
      subcommands: [
        {
          name: "create",
          description: "Create a schedule",
          options: [
            flag6,
            flag13,
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
            flag3664,
            flag3670,
            {
              name: "--display-name",
              description: "The display name of the schedule",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4162,
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
            flag6218,
            flag6310,
            flag6329,
            flag6339,
            flag6346,
            flag7356,
            flag7435,
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
            flag8299,
            flag11637,
            flag11946,
            flag12312,
            flag13543,
            flag14375,
            flag14547,
            flag14533,
            flag14975,
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
          description: "List your Workbench notebook execution schedules",
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
            flag12312,
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
