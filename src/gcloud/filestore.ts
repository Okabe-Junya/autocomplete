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
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2963: Fig.Option = {
  name: "--deletion-protection-reason",
  description: "The reason for enabling deletion protection for the instance",
  args: {
    name: "DELETION_PROTECTION_REASON",
    description: "String",
    suggestions: [],
  },
};
const flag3053: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud Filestore instance",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
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
const flag5854: Fig.Option = {
  name: "--instance-location",
  description: "Location of the Filestore instance",
  args: { name: "INSTANCE_LOCATION", description: "String", suggestions: [] },
};
const flag5862: Fig.Option = {
  name: "--instance-region",
  description: "Region of the Filestore instance",
  args: { name: "INSTANCE_REGION", description: "String", suggestions: [] },
};
const flag5887: Fig.Option = {
  name: "--instance",
  description: "Name of the Filestore instance the snapshot belongs to",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag6417: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
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
const flag6753: Fig.Option = {
  name: "--location",
  description: "Location of the Cloud Filestore instance/operation",
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
const flag11252: Fig.Option = {
  name: "--performance",
  description:
    "Performance configuration for the instance. This flag is used\nto configure the read IOPS provisioned for the instance. The\ninstance's write IOPS and read/write throughputs will be derived from the\nconfigured read IOPS. For more information about the derived performance\nlimits and default performance see: https://cloud.google.com/filestore/docs/performance.\nMust be one of:\n+\n  max-iops\n    The number of IOPS to provision for the instance.\n    MAX-IOPS must be in multiple of 1000 and in the supported IOPS\n    range for the current capacity of the instance.\n    For more details, see: https://cloud.google.com/filestore/docs/performance.\n+\n  max-iops-per-tb\n    Is used for setting the max IOPS of the instance by\n    specifying the IOPS per TB. When this parameter is used, the\n    max IOPS are derived from the instance capacity:\n    The instance max IOPS will be calculated by multiplying the\n    capacity of the instance (TB) by MAX-IOPS-PER-TB, and rounding\n    to the nearest 1000. The max IOPS will be changed\n    dynamically based on the instance capacity.\n    MAX-IOPS-PER-TB must be in the supported range of the instance.\n    For more details, see: https://cloud.google.com/filestore/docs/performance.\n+\n\nExamples:\n+\nConfigure an instance with `max-iops` performance:\n+\n  $ {command} example-cluster --performance=max-iops=17000\n+\nConfigure an instance with `max-iops-per-tb` performance:\n+\n  $ {command} example-cluster --performance=max-iops-per-tb=17000",
  args: { name: "PERFORMANCE", description: "Dict", suggestions: [] },
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
const flag12298: Fig.Option = {
  name: "--region",
  description: "Compute region (e.g. us-central1) for the backup",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12321: Fig.Option = {
  name: "--region",
  description: "Region (e.g. us-central1) for the backup",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12331: Fig.Option = {
  name: "--region",
  description: "Region of the Cloud Filestore instance",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
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
const flag15167: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag15792: Fig.Option = {
  name: "--zone",
  description:
    "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `--zone` on the command line;\n* uses all locations by default.;\n* provide the argument `region` on the command line;\n* provide the argument `location` on the command line;\n* set the property `filestore/zone`;\n* set the property `filestore/region`;\n* set the property `filestore/location`",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15812: Fig.Option = {
  name: "--zone",
  description:
    "The zone of the instance.\n+\nTo set the `zone` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line;\n* provide the argument `region` on the command line;\n* provide the argument `location` on the command line;\n* set the property `filestore/zone`;\n* set the property `filestore/region`;\n* set the property `filestore/location`",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15813: Fig.Option = {
  name: "--zone",
  description:
    "The zone of the operation.\n+\nTo set the `zone` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line;\n* provide the argument `region` on the command line;\n* provide the argument `location` on the command line;\n* set the property `filestore/zone`;\n* set the property `filestore/region`;\n* set the property `filestore/location`",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15843: Fig.Option = {
  name: "--zone",
  description:
    "The zone of the Filestore instance.\n+\n\nTo set the `zone` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line;\n* provide the argument `--location` on the command line;\n* set the property `filestore/zone`",
  args: { name: "ZONE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "filestore",
  description: "Create and manipulate Filestore resources",
  subcommands: [
    {
      name: "backups",
      description: "Create and manage Filestore backups",
      subcommands: [
        {
          name: "create",
          description: "Create a Filestore backup",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description for the backup. Limit: 2048 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--file-share",
              description:
                "File share name on the Filestore instance to backup",
              args: {
                name: "FILE_SHARE",
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
              name: "--instance",
              description:
                "Share name of the Filestore instance you want to backup",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--instance-location",
              description: "Region of the Filestore instance",
              args: {
                name: "INSTANCE_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--instance-zone",
              description: "Zone of the Filestore instance",
              args: {
                name: "INSTANCE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-key",
              description:
                "CMEK for backup in the form of `projects/{project}/locations/{location}/keyRings/{key-ring}/cryptoKeys/{crypto-key}`",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            flag6417,
            flag7356,
            flag11637,
            flag11946,
            flag12321,
            {
              name: "--tags",
              description: "List of tag KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to\ncreate",
          },
        },
        {
          name: "delete",
          description: "Delete a Filestore backup",
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
            flag12298,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to\ndelete",
          },
        },
        {
          name: "describe",
          description: "Describe a Filestore backup",
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
            flag12321,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to\ncreate",
          },
        },
        {
          name: "list",
          description: "List Filestore backups",
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
            {
              name: "--region",
              description:
                "The region of the Backups to display. If unspecified, all backups will be listed",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a Filestore backup",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--description",
              description: "Description of the backup",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12298,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP",
            description:
              "Arguments and flags that specify the Filestore backup you want to\nupdate",
          },
        },
      ],
    },
    {
      name: "instances",
      description: "Create and manage Filestore instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Filestore instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--deletion-protection",
              description: "Enables deletion protection for the instance",
            },
            flag2963,
            flag3053,
            {
              name: "--file-share",
              description:
                "File share configuration for an instance.  Specifying both `name` and `capacity`\nis required.\n+\n*capacity*::: The desired capacity of the volume in GB or TB units. If no capacity\nunit is specified, GB is assumed. Acceptable instance capacities for each tier are as follows:\n* BASIC_HDD: 1TB-63.9TB in 1GB increments or its multiples.\n* BASIC_SSD: 2.5TB-63.9TB in 1GB increments or its multiples.\n* HIGH_SCALE_SSD: 10TB-100TB in 2.5TB increments or its multiples.\n* ZONAL: 1TB-100TB:\n  - 1TB-9.75TB in 256GB increments or its multiples.\n  - 10TB-100TB in 2.5TB increments or its multiples.\n* ENTERPRISE: 1TB-10TB in 256GB increments or its multiples.\n* REGIONAL: 1TB-100TB:\n  - 1TB-9.75TB in 256GB increments or its multiples.\n  - 10TB-100TB in 2.5TB increments or its multiples.\n+\n*name*::: The desired logical name of the volume.\n+\n*nfs-export-options*::: The NfsExportOptions for the Cloud Filestore instance file share.\nConfiguring NfsExportOptions is optional and can only be set using flags-file. Use the `--flags-file`\nflag to specify the path to a JSON or YAML configuration file that contains the required NfsExportOptions flags.\n+\n*ip-ranges*::: A list of IPv4 addresses or CIDR ranges that are allowed to mount the file share.\nIPv4 addresses format: {octet 1}.{octet 2}.{octet 3}.{octet 4}.\nCIDR range format: {octet 1}.{octet 2}.{octet 3}.{octet 4}/{mask size}.\nOverlapping IP ranges are allowed for all tiers other than BASIC_HDD and\nBASIC_SSD. The limit of IP ranges/addresses for each FileShareConfig among all\nNfsExportOptions is 64 per instance.\n+\n*access-mode*::: The type of access allowed for the specified IP-addresses or CIDR ranges.\nREAD_ONLY: Allows only read requests on the exported file share.\nREAD_WRITE: Allows both read and write requests on the exported file share.\nThe default setting is READ_WRITE.\n+\n*squash-mode*::: Enables or disables root squash for the specified\nIP addresses or CIDR ranges.\nNO_ROOT_SQUASH: Disables root squash to allow root access on the exported file share.\nROOT_SQUASH. Enables root squash to remove root access on the exported file share.\nThe default setting is NO_ROOT_SQUASH.\n+\n*anon_uid*::: An integer that represents the user ID of anonymous users.\nAnon_uid may only be set when squash_mode is set to ROOT_SQUASH.\nIf NO_ROOT_SQUASH is specified, an error will be returned.\nThe default value is 65534.\n+\n*anon_gid*::: An integer that represents the group ID of anonymous groups.\nAnon_gid may only be set when squash_mode is set to ROOT_SQUASH.\nIf NO_ROOT_SQUASH is specified, an error will be returned.\nThe default value is 65534.\n+\n*source-backup*::: The name of the backup to restore from.\n+\n*source-backup-region*::: The region of the source backup.\n+\n*source-backup-project*::: The project of the source backup,  If\nunspecified, it is assumed that the backup is in the same project where the\ninstance is to be created.\n+\n*source-backupdr-backup*::: (Optional) The resource name of the backup, in the\nformat projects/{project_id}/locations/{location_id}/backupVaults/{backupvault_id}/dataSources/{datasource_id}/backups/{backup_id},\nthat this file share has been restored from",
              args: {
                name: "FILE_SHARE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
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
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6753,
            flag7356,
            {
              name: "--network",
              description:
                "Network configuration for a Cloud Filestore instance. Specifying\n`reserved-ip-range`, `address-mode` and `connect-mode` is optional.\n*name*::: The name of the Google Compute Engine\n[VPC network](/compute/docs/networks-and-firewalls#networks) to which\nthe instance is connected.\n*reserved-ip-range*::: The `reserved-ip-range` can have one of the\nfollowing two types of values: a CIDR range value when using\nDIRECT_PEERING connect mode or an allocated IP address range\n(https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address)\nwhen using PRIVATE_SERVICE_ACCESS connect mode. When the name of an\nallocated IP address range is specified, it must be one of the ranges\nassociated with the private service access connection. When specified as\na direct CIDR value, it must be a /29 CIDR block for Basic tier or a /24\nCIDR block for High Scale, Zonal, Enterprise or Regional tier in one of the internal IP\naddress ranges (https://www.arin.net/knowledge/address_filters.html)\nthat identifies the range of IP addresses reserved for this instance.\nFor example, 10.0.0.0/29 or 192.168.0.0/24. The range you specify can't\noverlap with either existing subnets or assigned IP address ranges for\nother Cloud Filestore instances in the selected VPC network.\n*connect-mode*::: Network connection mode used by instances.\nCONNECT_MODE must be one of: DIRECT_PEERING, PRIVATE_SERVICE_ACCESS or\nPRIVATE_SERVICE_CONNECT.\n*address-mode*::: Internet protocol version for which the instance has IP address assigned.\n*psc-endpoint-project*::: Consumer service project in which the psc\nendpoint would be set up. This is optional, and only relevant in case\nthe network is a shared VPC. If this is not specified, the psc endpoint\nwould be setup in the VPC host project",
              args: { name: "NETWORK", description: "Dict", suggestions: [] },
            },
            flag11252,
            flag11637,
            {
              name: "--protocol",
              description:
                "The service protocol for the Cloud Filestore instance. _PROTOCOL_ must be one of:\n+\n*nfs-v3*::: NFSv3 protocol.\n*nfs-v4-1*::: NFSv4.1 protocol.\n:::\n+",
              args: {
                name: "PROTOCOL",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["nfs-v3", "nfs-v4-1"],
              },
            },
            flag11946,
            flag12331,
            {
              name: "--source-instance",
              description:
                "The replication source instance of the Cloud Filestore instance",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind.\nEach item must be expressed as\n`<tag-key-namespaced-name>=<tag-value-short-name>`.\n+\nExample: `123/environment=production,123/costCenter=marketing`",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--tier",
              description:
                "The service tier for the Cloud Filestore instance.\n       For more details, see:\n       https://cloud.google.com/filestore/docs/instance-tiers\n+\n_TIER_ must be one of:\n+\n*basic-hdd*::: Performant NFS storage system using HDD.\n*basic-ssd*::: Performant NFS storage system using SSD.\n*enterprise*::: Enterprise instance.\n            Use REGIONAL instead whenever possible.\n*high-scale-ssd*::: High Scale SSD instance, an alias for ZONAL.\n            Use ZONAL instead whenever possible.\n*premium*::: Premium Filestore instance, An alias for BASIC_SSD.\n                  Use BASIC_SSD instead whenever possible.\n*regional*::: Regional instances offer the features          and availability needed for mission-critical workloads.\n*standard*::: Standard Filestore instance, An alias for BASIC_HDD.\n            Use BASIC_HDD instead whenever possible.\n*zonal*::: Zonal instances offer NFS storage            system suitable for high performance computing application            requirements. It offers fast performance that scales            with capacity and allows you to grow and shrink            capacity.\n:::\n+",
              args: {
                name: "TIER",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "basic-hdd",
                  "basic-ssd",
                  "enterprise",
                  "high-scale-ssd",
                  "premium",
                  "regional",
                  "standard",
                  "zonal",
                ],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15812,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Filestore instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "Forces the deletion of an instance and its child resources,\n  such as snapshots",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6753,
            flag7356,
            flag11637,
            flag11946,
            flag12331,
            flag14975,
            flag15315,
            flag15424,
            flag15812,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Filestore instance",
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
            flag6753,
            flag7356,
            flag11637,
            flag11946,
            flag12331,
            flag14975,
            flag15315,
            flag15424,
            flag15812,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "list",
          description: "List Filestore instances",
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
            flag6753,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12331,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
            flag15792,
          ],
        },
        {
          name: "pause-replica",
          description: "Pause a Filestore replica instance",
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
            {
              name: "--location",
              description: "Location of the Filestore instance to pause",
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
            flag15843,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "promote-replica",
          description: "Promote a Filestore standby replication instance",
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
            {
              name: "--location",
              description: "Location of the Filestore instance to promote",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--peer-instance",
              description: "The name of the standby peer instance to promote",
              args: {
                name: "PEER_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15843,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "restore",
          description: "Restore a Filestore instance from a backup",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--file-share",
              description: "File share to restore from the backup",
              args: {
                name: "FILE_SHARE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source-backup",
              description: "Name of the Filestore backup to restore from",
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-backup-region",
              description: "Region of the Filestore backup to restore from",
              args: {
                name: "SOURCE_BACKUP_REGION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--zone",
              description:
                "The zone of the Filestore instance.\n+\n\nTo set the `zone` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line;\n* set the property `filestore/zone`",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "resume-replica",
          description: "Resume a Filestore replica instance",
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
            {
              name: "--location",
              description: "Location of the Filestore instance to resume",
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
            flag15843,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "revert",
          description: "Revert a Filestore instance",
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
            {
              name: "--location",
              description:
                "The location of the Filestore instance.\n+\n\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `filestore/location`",
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
              name: "--target-snapshot",
              description: "Name of the Filestore snapshot to revert to",
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
          name: "snapshots",
          description: "Create and manage Filestore snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a Filestore snapshot",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description:
                    "Description of the snapshot. Limit: 2048 characters",
                  args: {
                    name: "DESCRIPTION",
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
                  name: "--instance",
                  description:
                    "Name of the Filestore instance that you want to create a snapshot of",
                  args: {
                    name: "INSTANCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5854,
                flag5862,
                flag6417,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SNAPSHOT",
                description: "Name of the Filestore snapshot to be created",
              },
            },
            {
              name: "delete",
              description: "Delete a Filestore snapshot",
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
                flag5887,
                flag5854,
                flag5862,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SNAPSHOT",
                description: "Name of the Filestore snapshot to be deleted",
              },
            },
            {
              name: "describe",
              description: "Display information about a Filestore snapshot",
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
                flag5887,
                flag5854,
                flag5862,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "Name of the Filestore snapshot to display information about",
              },
            },
            {
              name: "list",
              description: "List Filestore snapshots",
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
                flag5887,
                flag5854,
                flag5862,
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
            {
              name: "update",
              description:
                "Update the description or labels of a Filestore snapshot",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                {
                  name: "--description",
                  description: "Description of the snapshot",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5887,
                flag5854,
                flag5862,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SNAPSHOT",
                description: "Name of the Filestore snapshot to be updated",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Filestore instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            {
              name: "--clear-nfs-export-options",
              description:
                "Clears the NfsExportOptions. Must specify `--file-share`\n  flag if --clear-nfs-export-options is specified",
            },
            flag2292,
            {
              name: "--deletion-protection",
              description:
                "Enables deletion protection for the instance. Use *--deletion-protection* to enable and *--no-deletion-protection* to disable",
            },
            flag2963,
            flag3053,
            {
              name: "--file-share",
              description:
                "File share configuration for an instance.  Specifying both `name` and `capacity`\nis required.\n+\n*capacity*::: The desired capacity of the volume in GB or TB units. If no capacity\nunit is specified, GB is assumed. Acceptable instance capacities for each tier are as follows:\n* BASIC_HDD: 1TB-63.9TB in 1GB increments or its multiples.\n* BASIC_SSD: 2.5TB-63.9TB in 1GB increments or its multiples.\n* HIGH_SCALE_SSD: 10TB-100TB in 2.5TB increments or its multiples.\n* ZONAL: 1TB-100TB:\n  - 1TB-9.75TB in 256GB increments or its multiples.\n  - 10TB-100TB in 2.5TB increments or its multiples.\n* ENTERPRISE: 1TB-10TB in 256GB increments or its multiples.\n* REGIONAL: 1TB-100TB:\n  - 1TB-9.75TB in 256GB increments or its multiples.\n  - 10TB-100TB in 2.5TB increments or its multiples.\n+\n*name*::: The desired logical name of the volume.\n+\n*nfs-export-options*::: The NfsExportOptions for the Cloud Filestore instance file share.\nConfiguring NfsExportOptions is optional and can only be set using flags-file. Use the `--flags-file`\nflag to specify the path to a JSON or YAML configuration file that contains the required NfsExportOptions flags.\n+\n*ip-ranges*::: A list of IPv4 addresses or CIDR ranges that are allowed to mount the file share.\nIPv4 addresses format: {octet 1}.{octet 2}.{octet 3}.{octet 4}.\nCIDR range format: {octet 1}.{octet 2}.{octet 3}.{octet 4}/{mask size}.\nOverlapping IP ranges are allowed for all tiers other than BASIC_HDD and\nBASIC_SSD. The limit of IP ranges/addresses for each FileShareConfig among all\nNfsExportOptions is 64 per instance.\n+\n*access-mode*::: The type of access allowed for the specified IP-addresses or CIDR ranges.\nREAD_ONLY: Allows only read requests on the exported file share.\nREAD_WRITE: Allows both read and write requests on the exported file share.\nThe default setting is READ_WRITE.\n+\n*squash-mode*::: Enables or disables root squash for the specified\nIP addresses or CIDR ranges.\nNO_ROOT_SQUASH: Disables root squash to allow root access on the exported file share.\nROOT_SQUASH. Enables root squash to remove root access on the exported file share.\nThe default setting is NO_ROOT_SQUASH.\n+\n*anon_uid*::: An integer that represents the user ID of anonymous users.\nAnon_uid may only be set when squash_mode is set to ROOT_SQUASH.\nIf NO_ROOT_SQUASH is specified, an error will be returned.\nThe default value is 65534.\n+\n*anon_gid*::: An integer that represents the group ID of anonymous groups.\nAnon_gid may only be set when squash_mode is set to ROOT_SQUASH.\nIf NO_ROOT_SQUASH is specified, an error will be returned.\nThe default value is 65534",
              args: {
                name: "FILE_SHARE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6753,
            flag7356,
            flag11252,
            flag11637,
            flag11946,
            flag12331,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
            flag15812,
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
      description: "List locations where Filestore is available",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Filestore location",
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "list",
          description: "List all Filestore locations",
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
      name: "operations",
      description: "Read and manipulate Filestore operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Filestore operation",
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
            flag6753,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15813,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Filestore operation",
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
            flag6753,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15813,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
        {
          name: "list",
          description: "List all Filestore operations",
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
            flag6753,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
            flag15792,
          ],
        },
      ],
    },
    {
      name: "regions",
      description: "List regions where Filestore is available",
      subcommands: [
        {
          name: "list",
          description: "List all Filestore regions",
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
      name: "zones",
      description: "List zones where Filestore is available",
      subcommands: [
        {
          name: "list",
          description: "List all Filestore zones",
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
  ],
};

export default completionSpec;
