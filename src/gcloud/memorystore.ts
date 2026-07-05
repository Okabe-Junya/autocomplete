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
const flag64: Fig.Option = {
  name: "--acl-policy",
  description:
    "ID of the aclPolicy or fully qualified identifier for the aclPolicy.\n+\nTo set the `acl-policy` attribute:\n* provide the argument `--acl-policy` on the command line",
  args: { name: "ACL_POLICY", description: "String", suggestions: [] },
};
const flag544: Fig.Option = {
  name: "--aof-config-append-fsync",
  description:
    "The fsync mode. _AOF_CONFIG_APPEND_FSYNC_ must be one of:\n+\n*always*::: Fsync every time new write commands are appended to the AOF. The best\ndata loss protection at the cost of performance.\n*every-sec*::: Fsync every second. You may lose 1 second of data if there is a\ndisaster.\n*never*::: Never fsync. Normally Linux will flush data every 30 seconds with this\nconfiguration, but it's up to the kernel's exact tuning.\n:::\n+",
  args: {
    name: "AOF_CONFIG_APPEND_FSYNC",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["always", "every-sec", "never"],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag866: Fig.Option = {
  name: "--automated-backup-config-mode",
  description:
    "The automated backup mode. If the mode is disabled, the other fields will\nbe ignored. _AUTOMATED_BACKUP_CONFIG_MODE_ must be one of:\n+\n*disabled*::: Automated backup config disabled.\n*enabled*::: Automated backup config enabled.\n:::\n+",
  args: {
    name: "AUTOMATED_BACKUP_CONFIG_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "enabled"],
  },
};
const flag867: Fig.Option = {
  name: "--automated-backup-config-retention",
  description:
    "How long to keep automated backups before the backups are deleted. The\nvalue should be between 1 day and 365 days. If not specified, the default\nvalue is 35 days",
  args: {
    name: "AUTOMATED_BACKUP_CONFIG_RETENTION",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag1017: Fig.Option = {
  name: "--backup-collection",
  description:
    "The backupCollection id of the backup resource.\n+\nTo set the `backup-collection` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--backup-collection` on the command line",
  args: { name: "BACKUP_COLLECTION", description: "String", suggestions: [] },
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
const flag4429: Fig.Option = {
  name: "--engine-version",
  description: "Engine version of the instance",
  args: { name: "ENGINE_VERSION", description: "String", suggestions: [] },
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4895: Fig.Option = {
  name: "--fixed-frequency-schedule-start-time-hours",
  description:
    'Hours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time',
  args: {
    name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_HOURS",
    description: "Int",
    suggestions: [],
  },
};
const flag4896: Fig.Option = {
  name: "--fixed-frequency-schedule-start-time-minutes",
  description:
    "Minutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59",
  args: {
    name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_MINUTES",
    description: "Int",
    suggestions: [],
  },
};
const flag4897: Fig.Option = {
  name: "--fixed-frequency-schedule-start-time-nanos",
  description:
    "Fractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999",
  args: {
    name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_NANOS",
    description: "Int",
    suggestions: [],
  },
};
const flag4898: Fig.Option = {
  name: "--fixed-frequency-schedule-start-time-seconds",
  description:
    "Seconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds",
  args: {
    name: "FIXED_FREQUENCY_SCHEDULE_START_TIME_SECONDS",
    description: "Int",
    suggestions: [],
  },
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
const flag6309: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the cryptoKey or fully qualified identifier for the cryptoKey.\n+\nTo set the `crypto-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
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
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7124: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7217: Fig.Option = {
  name: "--location",
  description:
    "The location ID of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7218: Fig.Option = {
  name: "--location",
  description:
    "The location id of the aclPolicy resource.\n+\nTo set the `location` attribute:\n* provide the argument `acl_policy` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7228: Fig.Option = {
  name: "--location",
  description:
    "The location id of the backup resource.\n+\nTo set the `location` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7256: Fig.Option = {
  name: "--location",
  description:
    "The location id of the instance resource.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7941: Fig.Option = {
  name: "--mode",
  description:
    "The mode config for the instance. _MODE_ must be one of:\n+\n*cluster*::: Instance is in cluster mode.\n*cluster-disabled*::: Cluster mode is disabled for the instance.\n*standalone*::: Deprecated: Use CLUSTER_DISABLED instead.\n:::\n+",
  args: {
    name: "MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["cluster", "cluster-disabled", "standalone"],
  },
};
const flag10539: Fig.Option = {
  name: "--node-type",
  description:
    "Machine type for individual nodes of the instance. _NODE_TYPE_ must be one of:\n+\n*custom-micro*::: Custom micro.\n*custom-mini*::: Custom mini.\n*custom-pico*::: Custom pico.\n*highcpu-medium*::: High cpu medium.\n*highmem-2xlarge*::: High memory 2xlarge.\n*highmem-medium*::: High memory medium.\n*highmem-xlarge*::: High memory extra large.\n*shared-core-nano*::: Shared core nano.\n*standard-large*::: Standard large.\n*standard-small*::: Standard small.\n:::\n+",
  args: {
    name: "NODE_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "custom-micro",
      "custom-mini",
      "custom-pico",
      "highcpu-medium",
      "highmem-2xlarge",
      "highmem-medium",
      "highmem-xlarge",
      "shared-core-nano",
      "standard-large",
      "standard-small",
    ],
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
const flag11278: Fig.Option = {
  name: "--persistence-config-mode",
  description:
    "Current persistence mode. _PERSISTENCE_CONFIG_MODE_ must be one of:\n+\n*aof*::: AOF based persistence is enabled.\n*disabled*::: Persistence is disabled, and any snapshot data is deleted.\n*rdb*::: RDB based persistence is enabled.\n:::\n+",
  args: {
    name: "PERSISTENCE_CONFIG_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["aof", "disabled", "rdb"],
  },
};
const flag11542: Fig.Option = {
  name: "--primary-instance",
  description:
    "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--primary-instance` on the command line",
  args: { name: "PRIMARY_INSTANCE", description: "String", suggestions: [] },
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
const flag11979: Fig.Option = {
  name: "--rdb-config-snapshot-period",
  description:
    "Period between RDB snapshots. _RDB_CONFIG_SNAPSHOT_PERIOD_ must be one of:\n+\n*one-hour*::: One hour.\n*six-hours*::: Six hours.\n*twelve-hours*::: Twelve hours.\n*twenty-four-hours*::: Twenty four hours.\n:::\n+",
  args: {
    name: "RDB_CONFIG_SNAPSHOT_PERIOD",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["one-hour", "six-hours", "twelve-hours", "twenty-four-hours"],
  },
};
const flag11980: Fig.Option = {
  name: "--rdb-config-snapshot-start-time",
  description:
    "Time that the first snapshot was/will be attempted, and to which future\nsnapshots will be aligned. If not provided, the current time will be\nused",
  args: {
    name: "RDB_CONFIG_SNAPSHOT_START_TIME",
    description: "Googlecloudsdk.core.util.times:ParseDateTime",
    suggestions: [],
  },
};
const flag12771: Fig.Option = {
  name: "--replica-count",
  description:
    "Number of replica nodes per shard. If omitted the default is 0 replicas",
  args: { name: "REPLICA_COUNT", description: "Int", suggestions: [] },
};
const flag12847: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12852: Fig.Option = {
  name: "--request-id",
  description: "Idempotent request UUID",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag13721: Fig.Option = {
  name: "--shard-count",
  description: "Number of shards for the instance",
  args: { name: "SHARD_COUNT", description: "Int", suggestions: [] },
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

const completionSpec: Fig.Spec = {
  name: "memorystore",
  description: "Manage Memorystore resources",
  subcommands: [
    {
      name: "acl-policies",
      description: "Manage Acl Policy resources",
      subcommands: [
        {
          name: "create",
          description: "Create aclPolicies",
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
            flag7218,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--request-id",
              description: "Idempotent request UUID.\n",
              args: {
                name: "REQUEST_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--rules",
              description:
                'Required, The ACL rules within the ACL policy.\n+\n*rule*:::\nThe rule to be applied to the username. Ex: "on >password123 ~* +@all"\nThe format of the rule is defined by Redis OSS:\nhttps://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/.\n+\n*username*:::\nSpecifies the IAM user or service account to be added to the ACL policy.\nThis username will be directly set on the Redis OSS.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rules=rule=string,username=string --rules=rule=string,username=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rules=\'[{"rule": "string", "username": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete aclPolicies",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "Etag of the ACL policy. If this is different from the server's etag, the\nrequest will fail with an ABORTED error",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7218,
            flag7356,
            flag11637,
            flag11946,
            flag12852,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe aclPolicies",
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
            flag7218,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List aclPolicies",
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
            flag6692,
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
          description: "Update aclPolicies",
          options: [
            flag42,
            flag46,
            {
              name: "--add-rules",
              description:
                'Add new value to rules list. The ACL rules within the ACL policy.\n+\n*rule*:::\nThe rule to be applied to the username. Ex: "on >password123 ~* +@all"\nThe format of the rule is defined by Redis OSS:\nhttps://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/.\n+\n*username*:::\nSpecifies the IAM user or service account to be added to the ACL policy.\nThis username will be directly set on the Redis OSS.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-rules=rule=string,username=string --add-rules=rule=string,username=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-rules=\'[{"rule": "string", "username": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--clear-rules",
              description: "Clear rules value and set to empty list",
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7218,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-rules",
              description:
                'Remove existing value from rules list. The ACL rules within the ACL policy.\n+\n*rule*:::\nThe rule to be applied to the username. Ex: "on >password123 ~* +@all"\nThe format of the rule is defined by Redis OSS:\nhttps://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/.\n+\n*username*:::\nSpecifies the IAM user or service account to be added to the ACL policy.\nThis username will be directly set on the Redis OSS.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-rules=rule=string,username=string --remove-rules=rule=string,username=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-rules=\'[{"rule": "string", "username": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12852,
            {
              name: "--rules",
              description:
                'Set rules to new value. The ACL rules within the ACL policy.\n+\n*rule*:::\nThe rule to be applied to the username. Ex: "on >password123 ~* +@all"\nThe format of the rule is defined by Redis OSS:\nhttps://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/.\n+\n*username*:::\nSpecifies the IAM user or service account to be added to the ACL policy.\nThis username will be directly set on the Redis OSS.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rules=rule=string,username=string --rules=rule=string,username=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rules=\'[{"rule": "string", "username": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the aclPolicy or fully qualified identifier for the aclPolicy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "backup-collections",
      description: "Manage Backup Collection resources",
      subcommands: [
        {
          name: "backups",
          description: "Manage Backup resources",
          subcommands: [
            {
              name: "delete",
              description: "Delete backups",
              options: [
                flag42,
                flag46,
                flag720,
                flag1017,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7228,
                flag7356,
                flag11637,
                flag11946,
                flag12852,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe backups",
              options: [
                flag42,
                flag46,
                flag1017,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7228,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "export",
              description: "export backups",
              options: [
                flag42,
                flag46,
                flag720,
                flag1017,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-bucket",
                  description: 'Google Cloud Storage bucket, like "my-bucket"',
                  args: {
                    name: "GCS_BUCKET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7228,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "list",
              description: "List backups",
              options: [
                flag42,
                flag46,
                {
                  name: "--backup-collection",
                  description:
                    "ID of the backupCollection or fully qualified identifier for the backupCollection.\n+\nTo set the `backup-collection` attribute:\n* provide the argument `--backup-collection` on the command line",
                  args: {
                    name: "BACKUP_COLLECTION",
                    description: "String",
                    suggestions: [],
                  },
                },
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
                    "The location id of the backupCollection resource.\n+\nTo set the `location` attribute:\n* provide the argument `--backup-collection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          name: "describe",
          description: "Describe backupCollections",
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
                "The location id of the backupCollection resource.\n+\nTo set the `location` attribute:\n* provide the argument `backup_collection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "BACKUP_COLLECTION",
            description:
              "ID of the backupCollection or fully qualified identifier for the backupCollection.\n+\nTo set the `backup_collection` attribute:\n* provide the argument `backup_collection` on the command line",
          },
        },
        {
          name: "list",
          description: "List backupCollections",
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
            flag6692,
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
      description: "Manage Instance resources",
      subcommands: [
        {
          name: "backup",
          description: "backup instances",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup-id",
              description:
                "The id of the backup to be created. If not specified, the\ndefault value ([YYYYMMDDHHMMSS]_[Shortened Instance UID] is used",
              args: {
                name: "BACKUP_ID",
                description: "String",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--ttl",
              description:
                "TTL for the backup to expire. Value range is 1 day to 100 years. If not\nspecified, the default value is 100 years",
              args: {
                name: "TTL",
                description: "Googlecloudsdk.core.util.times:ParseDuration",
                suggestions: [],
              },
            },
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
          description: "Create a Memorystore instance",
          options: [
            flag42,
            flag46,
            flag64,
            flag544,
            flag720,
            {
              name: "--async-instance-endpoints-deletion-enabled",
              description:
                "If true, instance endpoints that are created and registered by customers\ncan be deleted asynchronously. That is, such an instance endpoint can be\nde-registered before the forwarding rules in the instance endpoint are\ndeleted",
            },
            {
              name: "--authorization-mode",
              description:
                "Authorization mode of the instance. _AUTHORIZATION_MODE_ must be one of:\n+\n*auth-disabled*::: Authorization disabled.\n*iam-auth*::: IAM basic authorization.\n:::\n+",
              args: {
                name: "AUTHORIZATION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["auth-disabled", "iam-auth"],
              },
            },
            flag866,
            flag867,
            flag1201,
            flag2292,
            {
              name: "--cross-instance-replication-config-role",
              description:
                "The role of the instance in cross instance replication. _CROSS_INSTANCE_REPLICATION_CONFIG_ROLE_ must be one of:\n+\n*none*::: This instance does not participate in cross instance replication. It is\nan independent instance and does not replicate to or from any other\ninstances.\n*primary*::: A instance that allows both reads and writes. Any data written to this\ninstance is also replicated to the attached secondary instances.\n*secondary*::: A instance that allows only reads and replicates data from a primary\ninstance.\n:::\n+",
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_ROLE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "primary", "secondary"],
              },
            },
            {
              name: "--cross-instance-replication-config-secondary-instances",
              description:
                'List of secondary instances that are replicating from this primary\ninstance.\n+\nThis field is only set for a primary instance.\n+\n*instance*:::\nThe full resource path of the remote instance in\nthe format: projects/<project>/locations/<region>/instances/<instance-id>.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--cross-instance-replication-config-secondary-instances=instance=string --cross-instance-replication-config-secondary-instances=instance=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--cross-instance-replication-config-secondary-instances=\'[{"instance": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--cross-instance-replication-config-secondary-instances=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--deletion-protection-enabled",
              description: "If set to true deletion of the instance will fail",
            },
            {
              name: "--endpoints",
              description:
                'Endpoints for the instance.\n+\n*connections*:::\nA group of PSC connections. They are created in the same VPC network, one\nfor each service attachment in the cluster.\n+\n*pscAutoConnection*::::\nDetailed information of a PSC connection that is created through\nservice connectivity automation.\n+\n*network*:::::\nThe network where the PSC endpoints are created, in the form of\nprojects/{project_id}/global/networks/{network_id}.\n+\n*port*:::::\nport will only be set for Primary/Reader or Discovery endpoint.\n+\n*projectId*:::::\nThe consumer project_id where PSC connections are established.\nThis should be the same project_id that the instance is being created in.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--endpoints=connections=[{pscAutoConnection={network=string,port=int,projectId=string}}] --endpoints=connections=[{pscAutoConnection={network=string,port=int,projectId=string}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--endpoints=\'[{"connections": [{"pscAutoConnection": {"network": "string", "port": int, "projectId": "string"}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--endpoints=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--engine-configs",
              description:
                'User-provided engine configurations for the instance.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--engine-configs=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--engine-configs=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--engine-configs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENGINE_CONFIGS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag4429,
            flag4895,
            flag4896,
            flag4897,
            flag4898,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-source-uris",
              description:
                "Example: gs://bucket1/object1, gs://bucket2/folder2/object2",
              args: {
                name: "GCS_SOURCE_URIS",
                description: "List",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--key-ring",
              description:
                "The keyRing id of the cryptoKey resource.\n+\nTo set the `key-ring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--key-ring` on the command line",
              args: {
                name: "KEY_RING",
                description: "String",
                suggestions: [],
              },
            },
            flag6309,
            {
              name: "--labels",
              description:
                'Labels to represent user-provided metadata.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "For resources [instance, acl-policy, kms-key, primary-instance, server-ca-pool], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--maintenance-policy-weekly-window",
              description:
                'Maintenance window that is applied to resources covered by this\npolicy. Minimum 1. For the current version, the maximum number of\nweekly_window is expected to be one.\n+\n*day*:::\nAllows to define schedule that runs specified day of the week.\n+\n*startTime*:::\nStart time of the window in UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maintenance-policy-weekly-window=\'[{"day": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maintenance-policy-weekly-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--managed-backup-source",
              description:
                "Example:\n//memorystore.googleapis.com/projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}\nA shorter version (without the prefix) of the backup name is also\nsupported, like\nprojects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup_id}\nIn this case, it assumes the backup is under memorystore.googleapis.com",
              args: {
                name: "MANAGED_BACKUP_SOURCE",
                description: "String",
                suggestions: [],
              },
            },
            flag7941,
            flag10539,
            {
              name: "--ondemand-maintenance",
              description: "Ondemand maintenance for the instance",
            },
            flag11278,
            flag11542,
            flag11637,
            {
              name: "--psc-auto-connections",
              description:
                'Deprecated: Use the endpoints.connections.psc_auto_connection value\ninstead.\n+\n*network*:::\nThe network where the PSC endpoints are created, in the form of\nprojects/{project_id}/global/networks/{network_id}.\n+\n*port*:::\nport will only be set for Primary/Reader or Discovery endpoint.\n+\n*projectId*:::\nThe consumer project_id where PSC connections are established.\nThis should be the same project_id that the instance is being created in.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--psc-auto-connections=network=string,port=int,projectId=string --psc-auto-connections=network=string,port=int,projectId=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--psc-auto-connections=\'[{"network": "string", "port": int, "projectId": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--psc-auto-connections=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "PSC_AUTO_CONNECTIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag11946,
            flag11979,
            flag11980,
            flag12771,
            flag12847,
            {
              name: "--rotate-server-certificate",
              description: "Rotate the server certificates",
            },
            {
              name: "--server-ca-mode",
              description:
                "The Server CA mode for the instance. _SERVER_CA_MODE_ must be one of:\n+\n*customer-managed-cas-ca*::: The instance uses a customer-managed CA from CAS.\n*google-managed-per-instance-ca*::: Each instance has its own Google-managed CA.\n*google-managed-shared-ca*::: The instance uses a Google-managed shared CA for the instance's region.\n*server-ca-mode-customer-managed-cas-ca*::: Deprecated: Use CUSTOMER_MANAGED_CAS_CA instead.\n*server-ca-mode-google-managed-per-instance-ca*::: Deprecated: Use GOOGLE_MANAGED_PER_INSTANCE_CA instead.\n*server-ca-mode-google-managed-shared-ca*::: Deprecated: Use GOOGLE_MANAGED_SHARED_CA instead.\n:::\n+",
              args: {
                name: "SERVER_CA_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "customer-managed-cas-ca",
                  "google-managed-per-instance-ca",
                  "google-managed-shared-ca",
                  "server-ca-mode-customer-managed-cas-ca",
                  "server-ca-mode-google-managed-per-instance-ca",
                  "server-ca-mode-google-managed-shared-ca",
                ],
              },
            },
            {
              name: "--server-ca-pool",
              description:
                "ID of the caPool or fully qualified identifier for the caPool.\n+\nTo set the `ca-pool` attribute:\n* provide the argument `--server-ca-pool` on the command line",
              args: {
                name: "SERVER_CA_POOL",
                description: "String",
                suggestions: [],
              },
            },
            flag13721,
            {
              name: "--simulate-maintenance-event",
              description: "Simulate a maintenance event",
            },
            flag14975,
            {
              name: "--transit-encryption-mode",
              description:
                "In-transit encryption mode of the instance. _TRANSIT_ENCRYPTION_MODE_ must be one of:\n+\n*server-authentication*::: Server-managed encryption is used for in-transit encryption.\n*transit-encryption-disabled*::: In-transit encryption is disabled.\n:::\n+",
              args: {
                name: "TRANSIT_ENCRYPTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "server-authentication",
                  "transit-encryption-disabled",
                ],
              },
            },
            flag15315,
            flag15424,
            {
              name: "--zone-distribution-config",
              description:
                "Defines zone where all resources will be allocated with SINGLE_ZONE mode.\nIgnored for MULTI_ZONE mode",
              args: {
                name: "ZONE_DISTRIBUTION_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--zone-distribution-config-mode",
              description:
                "Current zone distribution mode. Defaults to MULTI_ZONE. _ZONE_DISTRIBUTION_CONFIG_MODE_ must be one of:\n+\n*multi-zone*::: Distribute resources across 3 zones picked at random within the\nregion.\n*single-zone*::: Provision resources in a single zone. Zone field must be specified.\n:::\n+",
              args: {
                name: "ZONE_DISTRIBUTION_CONFIG_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["multi-zone", "single-zone"],
              },
            },
            {
              name: "--zone-distribution-config-zones",
              description:
                "Specify the zones of a multi-zone instance where Memorystore instance\nallocates resources. This flag isn't applicable for single-zone\ninstances",
              args: {
                name: "ZONE_DISTRIBUTION_CONFIG_ZONES",
                description: "List",
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
          description: "Delete a Memorystore instance",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
              args: {
                name: "REQUEST_ID",
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
          name: "describe",
          description: "Get details of a Memorystore instance",
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
            flag7256,
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
          name: "finish-migration",
          description: "Finish migration for a Memorystore instance",
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
                "By default, the `FinishMigration` operation ensures the target\nreplication offset to catch up to the source offset as of the time of the\ncall. Set this field to `true` to bypass this offset verification check",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7256,
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
          name: "get-certificate-authority",
          description:
            "Get certificate authority details of a Memorystore instance",
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
                "The location ID of the instance resource.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "get-shared-regional-certificate-authority",
          description:
            "Get the shared regional CA certificate bundle for Memorystore",
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
            flag7124,
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
          description:
            "List all Memorystore instances in a specified project and location",
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
            flag6692,
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
          name: "reschedule-maintenance",
          description: "Reschedule maintenance window for an instance",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--reschedule-type",
              description:
                "If reschedule type is SPECIFIC_TIME, schedule_time must be set. _RESCHEDULE_TYPE_ must be one of:\n+\n*immediate*::: If the user wants to schedule the maintenance to happen now.\n*specific-time*::: If the user wants to reschedule the maintenance to a specific time.\n:::\n+",
              args: {
                name: "RESCHEDULE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["immediate", "specific-time"],
              },
            },
            {
              name: "--schedule-time",
              description:
                "Timestamp when the maintenance shall be rescheduled to if\nreschedule_type=SPECIFIC_TIME, in RFC 3339 format.\nExample: `2012-11-15T16:19:00.094Z`",
              args: {
                name: "SCHEDULE_TIME",
                description: "Googlecloudsdk.core.util.times:ParseDateTime",
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
          name: "start-migration",
          description: "Start migration for a Memorystore instance",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--self-managed-source-ip-address",
              description:
                "The IP address of the source instance.\nThis IP address should be a stable IP address that can be accessed by the\nMemorystore instance throughout the migration process",
              args: {
                name: "SELF_MANAGED_SOURCE_IP_ADDRESS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--self-managed-source-network-attachment",
              description:
                "The resource name of the Private Service Connect Network Attachment used to\nestablish connectivity to the source instance.\nThis network attachment has the following requirements:\n1. It must be in the same project as the Memorystore instance.\n2. It must be in the same region as the Memorystore instance.\n3. The subnet attached to the network attachment must be in the same VPC\nnetwork as the source instance nodes.\n+\nFormat:\nprojects/{project}/regions/{region}/networkAttachments/{network_attachment}",
              args: {
                name: "SELF_MANAGED_SOURCE_NETWORK_ATTACHMENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--self-managed-source-port",
              description:
                "The port of the source instance.\nThis port should be a stable port that can be accessed by the Memorystore\ninstance throughout the migration process",
              args: {
                name: "SELF_MANAGED_SOURCE_PORT",
                description: "Int",
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
          name: "update",
          description: "Update the configuration of a Memorystore instance",
          options: [
            flag42,
            flag46,
            flag64,
            {
              name: "--add-cross-instance-replication-config-secondary-instances",
              description:
                'Add new value to cross_instance_replication_config_secondary_instances list. List of secondary instances that are replicating from this primary\ninstance.\n+\nThis field is only set for a primary instance.\n+\n*instance*:::\nThe full resource path of the remote instance in\nthe format: projects/<project>/locations/<region>/instances/<instance-id>.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-cross-instance-replication-config-secondary-instances=instance=string --add-cross-instance-replication-config-secondary-instances=instance=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-cross-instance-replication-config-secondary-instances=\'[{"instance": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-cross-instance-replication-config-secondary-instances=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-endpoints",
              description:
                'Add new value to endpoints list. Endpoints for the instance.\n+\n*connections*:::\nA group of PSC connections. They are created in the same VPC network, one\nfor each service attachment in the cluster.\n+\n*pscConnection*::::\nDetailed information of a PSC connection that is created by the user.\n+\n*forwardingRule*:::::\nThe URI of the consumer side forwarding rule.\nFormat:\nprojects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.\n+\n*ipAddress*:::::\nThe IP allocated on the consumer network for the PSC forwarding rule.\n+\n*network*:::::\nThe consumer network where the IP address resides, in the form of\nprojects/{project_id}/global/networks/{network_id}.\n+\n*port*:::::\nport will only be set for Primary/Reader or Discovery endpoint.\n+\n*pscConnectionId*:::::\nThe PSC connection id of the forwarding rule connected to the\nservice attachment.\n+\n*serviceAttachment*:::::\nThe service attachment which is the target of the PSC connection,\nin the form of\nprojects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-endpoints=connections=[{pscConnection={forwardingRule=string,ipAddress=string,network=string,port=int,pscConnectionId=string,serviceAttachment=string}}] --add-endpoints=connections=[{pscConnection={forwardingRule=string,ipAddress=string,network=string,port=int,pscConnectionId=string,serviceAttachment=string}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-endpoints=\'[{"connections": [{"pscConnection": {"forwardingRule": "string", "ipAddress": "string", "network": "string", "port": int, "pscConnectionId": "string", "serviceAttachment": "string"}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-endpoints=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-maintenance-policy-weekly-window",
              description:
                'Add new value to maintenance_policy_weekly_window list. Maintenance window that is applied to resources covered by this\npolicy. Minimum 1. For the current version, the maximum number of\nweekly_window is expected to be one.\n+\n*day*:::\nAllows to define schedule that runs specified day of the week.\n+\n*startTime*:::\nStart time of the window in UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --add-maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-maintenance-policy-weekly-window=\'[{"day": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-maintenance-policy-weekly-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_MAINTENANCE_POLICY_WEEKLY_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag544,
            flag720,
            {
              name: "--async-instance-endpoints-deletion-enabled",
              description:
                "If true, instance endpoints that are created and registered by customers\ncan be deleted asynchronously. That is, such an instance endpoint can be\nde-registered before the forwarding rules in the instance endpoint are\ndeleted. Use *--async-instance-endpoints-deletion-enabled* to enable and *--no-async-instance-endpoints-deletion-enabled* to disable",
            },
            flag866,
            flag867,
            flag1201,
            {
              name: "--clear-acl-policy",
              description: "Clear acl_policy value and set to null",
            },
            {
              name: "--clear-automated-backup-config",
              description:
                "Set instance.automatedBackupConfig back to default value",
            },
            {
              name: "--clear-cross-instance-replication-config",
              description:
                "Set instance.crossInstanceReplicationConfig back to default value",
            },
            {
              name: "--clear-cross-instance-replication-config-secondary-instances",
              description:
                "Clear cross_instance_replication_config_secondary_instances value and set to empty list",
            },
            {
              name: "--clear-endpoints",
              description: "Clear endpoints value and set to empty list",
            },
            {
              name: "--clear-engine-configs",
              description: "Clear engine_configs value and set to empty map",
            },
            {
              name: "--clear-kms-key",
              description: "Clear kms_key value and set to null",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-maintenance-policy",
              description:
                "Set instance.maintenancePolicy back to default value",
            },
            {
              name: "--clear-maintenance-policy-weekly-window",
              description:
                "Clear maintenance_policy_weekly_window value and set to empty list",
            },
            {
              name: "--clear-persistence-config",
              description:
                "Set instance.persistenceConfig back to default value",
            },
            {
              name: "--clear-primary-instance",
              description: "Clear primary_instance value and set to null",
            },
            flag2292,
            {
              name: "--cross-instance-replication-config-role",
              description:
                "The role of the instance in cross instance replication. _CROSS_INSTANCE_REPLICATION_CONFIG_ROLE_ must be one of:\n+\n*none*::: This instance does not participate in cross instance replication. It is\nan independent instance and does not replicate to or from any other\ninstances.\n*primary*::: A instance that allows both reads and writes. Any data written to this\ninstance is also replicated to the attached secondary instances.\n*secondary*::: A instance that allows only reads and replicates data from a primary\ninstance.\n:::\n+",
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_ROLE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["none", "primary", "secondary"],
              },
            },
            {
              name: "--cross-instance-replication-config-secondary-instances",
              description:
                'Set cross_instance_replication_config_secondary_instances to new value. List of secondary instances that are replicating from this primary\ninstance.\n+\nThis field is only set for a primary instance.\n+\n*instance*:::\nThe full resource path of the remote instance in\nthe format: projects/<project>/locations/<region>/instances/<instance-id>.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--cross-instance-replication-config-secondary-instances=instance=string --cross-instance-replication-config-secondary-instances=instance=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--cross-instance-replication-config-secondary-instances=\'[{"instance": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--cross-instance-replication-config-secondary-instances=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--deletion-protection-enabled",
              description:
                "If set to true deletion of the instance will fail. Use *--deletion-protection-enabled* to enable and *--no-deletion-protection-enabled* to disable",
            },
            {
              name: "--endpoints",
              description:
                'Set endpoints to new value. Endpoints for the instance.\n+\n*connections*:::\nA group of PSC connections. They are created in the same VPC network, one\nfor each service attachment in the cluster.\n+\n*pscConnection*::::\nDetailed information of a PSC connection that is created by the user.\n+\n*forwardingRule*:::::\nThe URI of the consumer side forwarding rule.\nFormat:\nprojects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.\n+\n*ipAddress*:::::\nThe IP allocated on the consumer network for the PSC forwarding rule.\n+\n*network*:::::\nThe consumer network where the IP address resides, in the form of\nprojects/{project_id}/global/networks/{network_id}.\n+\n*port*:::::\nport will only be set for Primary/Reader or Discovery endpoint.\n+\n*pscConnectionId*:::::\nThe PSC connection id of the forwarding rule connected to the\nservice attachment.\n+\n*serviceAttachment*:::::\nThe service attachment which is the target of the PSC connection,\nin the form of\nprojects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--endpoints=connections=[{pscConnection={forwardingRule=string,ipAddress=string,network=string,port=int,pscConnectionId=string,serviceAttachment=string}}] --endpoints=connections=[{pscConnection={forwardingRule=string,ipAddress=string,network=string,port=int,pscConnectionId=string,serviceAttachment=string}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--endpoints=\'[{"connections": [{"pscConnection": {"forwardingRule": "string", "ipAddress": "string", "network": "string", "port": int, "pscConnectionId": "string", "serviceAttachment": "string"}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--endpoints=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--engine-configs",
              description:
                'Set engine_configs to new value. User-provided engine configurations for the instance.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--engine-configs=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--engine-configs=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--engine-configs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENGINE_CONFIGS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag4429,
            flag4895,
            flag4896,
            flag4897,
            flag4898,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--key-ring",
              description:
                "The keyRing id of the cryptoKey resource.\n+\nTo set the `key-ring` attribute:\n* provide the argument `--current` on the command line with a fully specified name;\n* provide the argument `--key-ring` on the command line",
              args: {
                name: "KEY_RING",
                description: "String",
                suggestions: [],
              },
            },
            flag6309,
            {
              name: "--labels",
              description:
                'Set labels to new value. Labels to represent user-provided metadata.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "For resources [instance, acl-policy, kms-key, primary-instance], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--maintenance-policy-weekly-window",
              description:
                'Set maintenance_policy_weekly_window to new value. Maintenance window that is applied to resources covered by this\npolicy. Minimum 1. For the current version, the maximum number of\nweekly_window is expected to be one.\n+\n*day*:::\nAllows to define schedule that runs specified day of the week.\n+\n*startTime*:::\nStart time of the window in UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maintenance-policy-weekly-window=\'[{"day": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maintenance-policy-weekly-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-version",
              description:
                "This field can be used to trigger self service update to indicate the\ndesired maintenance version. The input to this field can be determined by\nthe available_maintenance_versions field",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag7941,
            flag10539,
            {
              name: "--ondemand-maintenance",
              description:
                "Ondemand maintenance for the instance. Use *--ondemand-maintenance* to enable and *--no-ondemand-maintenance* to disable",
            },
            flag11278,
            flag11542,
            flag11637,
            flag11946,
            flag11979,
            flag11980,
            {
              name: "--remove-cross-instance-replication-config-secondary-instances",
              description:
                'Remove existing value from cross_instance_replication_config_secondary_instances list. List of secondary instances that are replicating from this primary\ninstance.\n+\nThis field is only set for a primary instance.\n+\n*instance*:::\nThe full resource path of the remote instance in\nthe format: projects/<project>/locations/<region>/instances/<instance-id>.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-cross-instance-replication-config-secondary-instances=instance=string --remove-cross-instance-replication-config-secondary-instances=instance=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-cross-instance-replication-config-secondary-instances=\'[{"instance": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-cross-instance-replication-config-secondary-instances=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_CROSS_INSTANCE_REPLICATION_CONFIG_SECONDARY_INSTANCES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-endpoints",
              description:
                'Remove existing value from endpoints list. Endpoints for the instance.\n+\n*connections*:::\nA group of PSC connections. They are created in the same VPC network, one\nfor each service attachment in the cluster.\n+\n*pscConnection*::::\nDetailed information of a PSC connection that is created by the user.\n+\n*forwardingRule*:::::\nThe URI of the consumer side forwarding rule.\nFormat:\nprojects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.\n+\n*ipAddress*:::::\nThe IP allocated on the consumer network for the PSC forwarding rule.\n+\n*network*:::::\nThe consumer network where the IP address resides, in the form of\nprojects/{project_id}/global/networks/{network_id}.\n+\n*port*:::::\nport will only be set for Primary/Reader or Discovery endpoint.\n+\n*pscConnectionId*:::::\nThe PSC connection id of the forwarding rule connected to the\nservice attachment.\n+\n*serviceAttachment*:::::\nThe service attachment which is the target of the PSC connection,\nin the form of\nprojects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-endpoints=connections=[{pscConnection={forwardingRule=string,ipAddress=string,network=string,port=int,pscConnectionId=string,serviceAttachment=string}}] --remove-endpoints=connections=[{pscConnection={forwardingRule=string,ipAddress=string,network=string,port=int,pscConnectionId=string,serviceAttachment=string}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-endpoints=\'[{"connections": [{"pscConnection": {"forwardingRule": "string", "ipAddress": "string", "network": "string", "port": int, "pscConnectionId": "string", "serviceAttachment": "string"}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-endpoints=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-engine-configs",
              description:
                'Remove existing value from map engine_configs. Sets `remove_engine_configs` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-engine-configs=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-engine-configs=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-engine-configs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ENGINE_CONFIGS",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-labels",
              description:
                'Remove existing value from map labels. Sets `remove_labels` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-labels=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-labels=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-maintenance-policy-weekly-window",
              description:
                'Remove existing value from maintenance_policy_weekly_window list. Maintenance window that is applied to resources covered by this\npolicy. Minimum 1. For the current version, the maximum number of\nweekly_window is expected to be one.\n+\n*day*:::\nAllows to define schedule that runs specified day of the week.\n+\n*startTime*:::\nStart time of the window in UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --remove-maintenance-policy-weekly-window=day=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-maintenance-policy-weekly-window=\'[{"day": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-maintenance-policy-weekly-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_MAINTENANCE_POLICY_WEEKLY_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12771,
            flag12847,
            {
              name: "--rotate-server-certificate",
              description:
                "Rotate the server certificates. Use *--rotate-server-certificate* to enable and *--no-rotate-server-certificate* to disable",
            },
            flag13721,
            {
              name: "--simulate-maintenance-event",
              description:
                "Simulate a maintenance event. Use *--simulate-maintenance-event* to enable and *--no-simulate-maintenance-event* to disable",
            },
            flag14975,
            {
              name: "--update-engine-configs",
              description:
                'Update engine_configs value or add key value pair. User-provided engine configurations for the instance.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-engine-configs=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-engine-configs=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-engine-configs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ENGINE_CONFIGS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--update-labels",
              description:
                'Update labels value or add key value pair. Labels to represent user-provided metadata.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
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
      description: "Manage Memorystore for Valkey locations",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Memorystore for Valkey location",
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
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line",
          },
        },
        {
          name: "list",
          description: "List Memorystore for Valkey locations",
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
      description: "Manage Memorystore operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Memorystore operation",
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
            flag7217,
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
          name: "delete",
          description: "Delete a Memorystore operation",
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
            flag7217,
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
          name: "describe",
          description: "Describe a Memorystore operation",
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
            flag7217,
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
          description: "List Memorystore operations",
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
            flag7124,
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
