// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag2: Fig.Option = {
  name: "--accelerator-core-count",
  description: "Count of cores of this accelerator",
  args: { name: "ACCELERATOR_CORE_COUNT", description: "Int", suggestions: [] },
};
const flag10: Fig.Option = {
  name: "--accelerator-type",
  description:
    "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_A100*, *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *TPU_V2*, *TPU_V3*, *NVIDIA_L4*, *NVIDIA_H100_80GB*, *NVIDIA_H100_MEGA_80GB*",
  args: {
    name: "ACCELERATOR_TYPE",
    description: "String",
    suggestions: [
      "NVIDIA_TESLA_A100",
      "NVIDIA_TESLA_K80",
      "NVIDIA_TESLA_P100",
      "NVIDIA_TESLA_V100",
      "NVIDIA_TESLA_P4",
      "NVIDIA_TESLA_T4",
      "NVIDIA_TESLA_T4_VWS",
      "NVIDIA_TESLA_P100_VWS",
      "NVIDIA_TESLA_P4_VWS",
      "TPU_V2",
      "TPU_V3",
      "NVIDIA_L4",
      "NVIDIA_H100_80GB",
      "NVIDIA_H100_MEGA_80GB",
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
const flag4084: Fig.Option = {
  name: "--enable-copy-home-files",
  description: "Enables flag to copy all `/home/jupyter` folder contents",
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
const flag5159: Fig.Option = {
  name: "--gcs-bucket",
  description:
    "The Cloud Storage bucket where the log files generated from the diagnose command will be stored. storage.buckets.writer permissions must be given to project's service account or user credential. Format: gs://`{gcs_bucket}`",
  args: { name: "GCS_BUCKET", description: "String", suggestions: [] },
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
const flag7111: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `location` attribute:\n* provide the argument `environment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7122: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7123: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location of this runtime https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `location` attribute:\n* provide the argument `runtime` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7295: Fig.Option = {
  name: "--location",
  description:
    "The location of the notebook instance.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
const flag12480: Fig.Option = {
  name: "--relative-path",
  description:
    "Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written. Default path will be the root directory of the Cloud Storage bucketFormat of full path: gs://`{gcs_bucket}`/`{relative_path}`/",
  args: { name: "RELATIVE_PATH", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14501: Fig.Option = {
  name: "--subnet-region",
  description:
    "Google Cloud region of this subnetwork https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `subnet-region` attribute:\n* provide the argument `--subnet` on the command line with a fully specified name;\n* provide the argument `--subnet-region` on the command line",
  args: { name: "SUBNET_REGION", description: "String", suggestions: [] },
};
const flag14525: Fig.Option = {
  name: "--subnet",
  description:
    "ID of the subnetwork or fully qualified identifier for the subnetwork.\n+\nTo set the `subnet` attribute:\n* provide the argument `--subnet` on the command line",
  args: { name: "SUBNET", description: "String", suggestions: [] },
};
const flag14888: Fig.Option = {
  name: "--timeout-minutes",
  description:
    "Maximum amount of time in minutes before the operation times out",
  args: { name: "TIMEOUT_MINUTES", description: "String", suggestions: [] },
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
const flag15475: Fig.Option = {
  name: "--vm-image-family",
  description:
    "Use this VM image family to find the image; the newest image in this family will be used",
  args: { name: "VM_IMAGE_FAMILY", description: "String", suggestions: [] },
};
const flag15476: Fig.Option = {
  name: "--vm-image-name",
  description: "Use this VM image name to find the image",
  args: { name: "VM_IMAGE_NAME", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "notebooks",
  description: "Notebooks Command Group",
  subcommands: [
    {
      name: "environments",
      description: "Notebooks Environments Command Group",
      subcommands: [
        {
          name: "create",
          description: "Request for creating environments",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2402,
            flag2413,
            {
              name: "--description",
              description: "A brief description of this environment",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Name to display on the UI",
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
            flag7111,
            flag7356,
            {
              name: "--post-startup-script",
              description:
                "Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path(gs://`path-to-file/`file-name`)",
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15475,
            flag15476,
            {
              name: "--vm-image-project",
              description:
                "The ID of the Google Cloud project that this VM image belongs to.Format: projects/`{project_id}`",
              args: {
                name: "VM_IMAGE_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Request for deleting environments",
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
            flag7111,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Request for describing environments",
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
            flag7111,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "list",
          description: "Request for listing environments",
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
                "Google Cloud location of this environment: https://cloud.google.com/compute/docs/regions-zones/#locations",
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
            flag15249,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "instances",
      description: "Notebooks Instances command group",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for an instance",
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
            flag7295,
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
          name: "create",
          description: "Request for creating an instance",
          options: [
            flag2,
            flag10,
            flag42,
            flag46,
            flag720,
            flag1201,
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
                "Type of boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). _BOOT_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*",
              args: {
                name: "BOOT_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                ],
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
                "Type of data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`). _DATA_DISK_TYPE_ must be one of: *PD_STANDARD*, *PD_SSD*, *PD_BALANCED*, *PD_EXTREME*",
              args: {
                name: "DATA_DISK_TYPE",
                description: "String",
                suggestions: [
                  "PD_STANDARD",
                  "PD_SSD",
                  "PD_BALANCED",
                  "PD_EXTREME",
                ],
              },
            },
            {
              name: "--disk-encryption",
              description:
                "Disk encryption method used on the boot disk, defaults to GMEK. _DISK_ENCRYPTION_ must be one of: *GMEK*, *CMEK*",
              args: {
                name: "DISK_ENCRYPTION",
                description: "String",
                suggestions: ["GMEK", "CMEK"],
              },
            },
            {
              name: "--environment",
              description:
                "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `--environment` on the command line",
              args: {
                name: "ENVIRONMENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--environment-location",
              description:
                "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations.\n+\nTo set the `environment-location` attribute:\n* provide the argument `--environment` on the command line with a fully specified name;\n* provide the argument `--environment-location` on the command line;\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
              args: {
                name: "ENVIRONMENT_LOCATION",
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
              name: "--install-gpu-driver",
              description:
                "Whether the end user authorizes Google Cloud to install a GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs",
            },
            {
              name: "--instance-owners",
              description:
                "The owners of this instance after creation. Format:`alias@example.com`. Currently supports one owner only.If not specified, all of the service account users of the VM instance's service account can use the instance",
              args: {
                name: "INSTANCE_OWNERS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            {
              name: "--kms-keyring",
              description:
                "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
              args: {
                name: "KMS_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-location",
              description:
                "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
              args: {
                name: "KMS_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-project",
              description:
                "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
              args: {
                name: "KMS_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag6404,
            flag7122,
            flag7356,
            {
              name: "--machine-type",
              description:
                "The [Compute Engine machine type](https://cloud.google.com/sdk/gcloud/reference/compute/machine-types) of this instance",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--metadata",
              description:
                "Custom metadata to apply to this instance.\n+\nFor example, to specify a Cloud Storage bucket for automatic backup,\nyou can use the `gcs-data-bucket` metadata tag. Format:\n`\"--metadata=gcs-data-bucket=``BUCKET''\"`",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag8299,
            {
              name: "--no-proxy-access",
              description:
                "If true, the notebook instance will not register with the proxy",
            },
            {
              name: "--no-public-ip",
              description:
                "If specified, no public IP will be assigned to this instance",
            },
            {
              name: "--no-remove-data-disk",
              description:
                "If true, the data disk will not be auto deleted when deleting the instance",
            },
            {
              name: "--post-startup-script",
              description:
                "Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (gs://`path-to-file`/`file-name`)",
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--reservation",
              description:
                "The name of the reservation, required when `--reservation-affinity=SPECIFIC_RESERVATION`",
              args: {
                name: "RESERVATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--reservation-affinity",
              description:
                "The type of reservation for the instance. _RESERVATION_AFFINITY_ must be one of: *TYPE_UNSPECIFIED*, *NO_RESERVATION*, *ANY_RESERVATION*, *SPECIFIC_RESERVATION*",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "String",
                suggestions: [
                  "TYPE_UNSPECIFIED",
                  "NO_RESERVATION",
                  "ANY_RESERVATION",
                  "SPECIFIC_RESERVATION",
                ],
              },
            },
            {
              name: "--service-account",
              description:
                "The service account on this instance, giving access to other Google Cloud services. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](/compute/docs/access/service-accounts#default_service_account) is used",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--shielded-integrity-monitoring",
              description:
                "Enable monitoring of the boot integrity of the instance. Enabled by default, use *--no-shielded-integrity-monitoring* to disable",
            },
            {
              name: "--shielded-secure-boot",
              description:
                "Boot instance with secure boot enabled. Disabled by default",
            },
            {
              name: "--shielded-vtpm",
              description:
                "Boot instance with TPM (Trusted Platform Module) enabled. Enabled by default, use *--no-shielded-vtpm* to disable",
            },
            flag14525,
            flag14501,
            {
              name: "--tags",
              description: "Tags to apply to this instance",
              args: { name: "TAGS", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15475,
            flag15476,
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
          description: "Request for deleting instances",
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
          description: "Request for describing instances",
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
          description: "Request for diagnose instances",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4084,
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
            flag5159,
            flag5453,
            flag5699,
            flag7122,
            flag7356,
            flag11637,
            flag11946,
            flag12480,
            flag14888,
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
          name: "get-health",
          description: "Request for checking if a notebook instance is healthy",
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
          name: "get-iam-policy",
          description: "Get IAM policy for an instance",
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
            flag7295,
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
          name: "is-upgradeable",
          description:
            "Request for checking if a notebook instance is upgradeable",
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
          name: "list",
          description: "Request for listing instances",
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
                "Google Cloud location of this environment https://cloud.google.com/compute/docs/regions-zones/#locations",
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
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "migrate",
          description: "Request for migrating instances",
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
            {
              name: "--post-startup-script-option",
              description:
                "// Specifies the behavior of post startup script during migration. _POST_STARTUP_SCRIPT_OPTION_ must be one of: *POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED*, *POST_STARTUP_SCRIPT_OPTION_SKIP*, *POST_STARTUP_SCRIPT_OPTION_RERUN*",
              args: {
                name: "POST_STARTUP_SCRIPT_OPTION",
                description: "String",
                suggestions: [
                  "POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED",
                  "POST_STARTUP_SCRIPT_OPTION_SKIP",
                  "POST_STARTUP_SCRIPT_OPTION_RERUN",
                ],
              },
            },
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
          name: "register",
          description: "Request for registering instances",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for an instance",
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
            flag7295,
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
          description: "Request for resetting instances",
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
          name: "rollback",
          description: "Request for rolling back instances",
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
          description: "Set the IAM policy for an Instance",
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
            flag7295,
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
          description: "Request for starting instances",
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
          description: "Request for stopping instances",
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
          description: "Request for updating instances",
          options: [
            flag2,
            flag10,
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
            flag6404,
            flag7122,
            flag7356,
            {
              name: "--machine-type",
              description:
                "The [Compute Engine machine type](/compute/docs/machine-types)",
              args: {
                name: "MACHINE_TYPE",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "upgrade",
          description: "Request for upgrading instances",
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
      ],
    },
    {
      name: "locations",
      description: "View locations available for a project",
      subcommands: [
        {
          name: "list",
          description: "Request for listing locations",
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
            flag15249,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "runtimes",
      description: "Notebooks Runtimes command group",
      subcommands: [
        {
          name: "create",
          description: "Request for creating an runtime",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--custom-gpu-driver-path",
              description: "custom gpu driver path",
              args: {
                name: "CUSTOM_GPU_DRIVER_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--idle-shutdown-timeout",
              description: "idle shutdown timeout",
              args: {
                name: "IDLE_SHUTDOWN_TIMEOUT",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--install-gpu-driver",
              description: "install gpu driver",
              args: {
                name: "INSTALL_GPU_DRIVER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--interface",
              description: "runtime interface",
              args: {
                name: "INTERFACE",
                description: "String",
                suggestions: [],
              },
            },
            flag7123,
            flag7356,
            {
              name: "--machine-type",
              description: "machine type",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mode",
              description: "runtime mode",
              args: { name: "MODE", description: "String", suggestions: [] },
            },
            {
              name: "--post-startup-script",
              description: "post startup script",
              args: {
                name: "POST_STARTUP_SCRIPT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--post-startup-script-behavior",
              description: "post startup script behavior",
              args: {
                name: "POST_STARTUP_SCRIPT_BEHAVIOR",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--runtime-access-type",
              description: "access type",
              args: {
                name: "RUNTIME_ACCESS_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--runtime-owner",
              description: "runtime owner",
              args: {
                name: "RUNTIME_OWNER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--runtime-type",
              description: "runtime type",
              args: {
                name: "RUNTIME_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source",
              description: "runtime source",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--type",
              description: "runtime type",
              args: { name: "TYPE", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "delete",
          description: "Request for deleting runtimes",
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
            flag7123,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "describe",
          description: "Request for describing runtimes",
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
            flag7123,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "diagnose",
          description: "Request for diagnose runtimes",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4084,
            {
              name: "--enable-packet-capture",
              description:
                "Enables flag to capture packets from the runtime for 30 seconds",
            },
            {
              name: "--enable-repair",
              description: "Enables flag to repair service for runtime",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5159,
            flag5453,
            flag5699,
            flag7123,
            flag7356,
            flag11637,
            flag11946,
            flag12480,
            flag14888,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "list",
          description: "Request for listing runtimes",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `notebooks/location`",
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
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "migrate",
          description: "Request for migrating runtimes",
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
            flag7123,
            flag7356,
            flag8299,
            {
              name: "--post-startup-script-option",
              description:
                "Specifies the behavior of post startup script during migration. _POST_STARTUP_SCRIPT_OPTION_ must be one of: *POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED*, *POST_STARTUP_SCRIPT_OPTION_SKIP*, *POST_STARTUP_SCRIPT_OPTION_RERUN*",
              args: {
                name: "POST_STARTUP_SCRIPT_OPTION",
                description: "String",
                suggestions: [
                  "POST_STARTUP_SCRIPT_OPTION_UNSPECIFIED",
                  "POST_STARTUP_SCRIPT_OPTION_SKIP",
                  "POST_STARTUP_SCRIPT_OPTION_RERUN",
                ],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--service-account",
              description:
                "The service account to be included in the Compute Engine instance of the new Workbench Instance when the Runtime uses single user only mode for permission. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. When the Runtime uses service account mode for permission, it will reuse the same service account, and this field must be empty",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag14525,
            flag14501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "reset",
          description: "Request for resetting runtimes",
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
            flag7123,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "start",
          description: "Request for starting runtimes",
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
            flag7123,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "stop",
          description: "Request for stopping runtimes",
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
            flag7123,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
        {
          name: "switch",
          description: "Request for switching runtimes",
          options: [
            flag2,
            {
              name: "--accelerator-type",
              description:
                "Type of this accelerator. _ACCELERATOR_TYPE_ must be one of: *NVIDIA_TESLA_A100*, *NVIDIA_TESLA_K80*, *NVIDIA_TESLA_P100*, *NVIDIA_TESLA_V100*, *NVIDIA_TESLA_P4*, *NVIDIA_TESLA_T4*, *NVIDIA_TESLA_T4_VWS*, *NVIDIA_TESLA_P100_VWS*, *NVIDIA_TESLA_P4_VWS*, *TPU_V2*, *TPU_V3*",
              args: {
                name: "ACCELERATOR_TYPE",
                description: "String",
                suggestions: [
                  "NVIDIA_TESLA_A100",
                  "NVIDIA_TESLA_K80",
                  "NVIDIA_TESLA_P100",
                  "NVIDIA_TESLA_V100",
                  "NVIDIA_TESLA_P4",
                  "NVIDIA_TESLA_T4",
                  "NVIDIA_TESLA_T4_VWS",
                  "NVIDIA_TESLA_P100_VWS",
                  "NVIDIA_TESLA_P4_VWS",
                  "TPU_V2",
                  "TPU_V3",
                ],
              },
            },
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
            flag7123,
            flag7356,
            {
              name: "--machine-type",
              description: "machine type",
              args: {
                name: "MACHINE_TYPE",
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
            name: "RUNTIME",
            description:
              "ID of the runtime or fully qualified identifier for the runtime.\n+\nTo set the `runtime` attribute:\n* provide the argument `runtime` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
