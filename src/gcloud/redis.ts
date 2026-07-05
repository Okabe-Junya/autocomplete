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
const flag63: Fig.Option = {
  name: "--acl-policy",
  description: "The ACL policy to use for the cluster",
  args: { name: "ACL_POLICY", description: "String", suggestions: [] },
};
const flag543: Fig.Option = {
  name: "--aof-append-fsync",
  description:
    "Fsync configuration. _AOF_APPEND_FSYNC_ must be one of:\n+\n*always*::: Redis explicitly calls fsync for every write command.\n+\n*everysec*::: (default) Redis explicitly calls fsync every second.\n+\n*no*::: Redis will not explicitly call fsync.\n+\n:::\n+",
  args: {
    name: "AOF_APPEND_FSYNC",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["always", "everysec", "no"],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag876: Fig.Option = {
  name: "--automated-backup-mode",
  description:
    "Automated backup mode. _AUTOMATED_BACKUP_MODE_ must be one of:\n+\n*disabled*::: (default) Automated backup is disabled.\n+\n*enabled*::: Automated backup is enabled.\n+\n:::\n+",
  args: {
    name: "AUTOMATED_BACKUP_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "enabled"],
  },
};
const flag881: Fig.Option = {
  name: "--automated-backup-start-time",
  description:
    "One-hour window when you want automated-backup operations to start. Specify the time in the format HH:00 on a 24-hour cycle in UTC time",
  args: {
    name: "AUTOMATED_BACKUP_START_TIME",
    description: "String",
    suggestions: [],
  },
};
const flag884: Fig.Option = {
  name: "--automated-backup-ttl",
  description:
    'Time to live for automated backups. A backup will be deleted automatically after the TTL\nis reached. It ranges from 1 day to 365 days. For example, "10d" for 10 days. If not specified, the default value is 35 days',
  args: {
    name: "AUTOMATED_BACKUP_TTL",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag1018: Fig.Option = {
  name: "--backup-collection",
  description:
    "The name of the Redis cluster backup collection.\n+\nTo set the `backup-collection` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--backup-collection` on the command line",
  args: { name: "BACKUP_COLLECTION", description: "String", suggestions: [] },
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
const flag2964: Fig.Option = {
  name: "--deletion-protection",
  description:
    "Enable deletion protection for the Redis Cluster. Use\n`--deletion-protection`/`--no-deletion-protection` to enable/disable it",
};
const flag3691: Fig.Option = {
  name: "--display-name",
  description: "A human-readable name for the instance",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7477: Fig.Option = {
  name: "--maintenance-window-any",
  description: "Removes the user-specified maintenance window",
};
const flag7481: Fig.Option = {
  name: "--maintenance-window-day",
  description:
    "Day of week for maintenance window, in UTC time zone.\nMAINTENANCE_WINDOW_DAY must be one of: SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY. _MAINTENANCE_WINDOW_DAY_ must be one of: *day-of-week-unspecified*, *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
  args: {
    name: "MAINTENANCE_WINDOW_DAY",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "day-of-week-unspecified",
      "friday",
      "monday",
      "saturday",
      "sunday",
      "thursday",
      "tuesday",
      "wednesday",
    ],
  },
};
const flag7496: Fig.Option = {
  name: "--maintenance-window-hour",
  description: "Hour of day (0 to 23) for maintenance window, in UTC time zone",
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
    description: "Int",
    suggestions: [],
  },
};
const flag7497: Fig.Option = {
  name: "--maintenance-window-hour",
  description:
    "Hour of day (`0` to `23`) for the start of maintenance window, in UTC time zone",
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
    description: "Int",
    suggestions: [],
  },
};
const flag10540: Fig.Option = {
  name: "--node-type",
  description:
    "Node Type of the redis cluster Node. _NODE_TYPE_ must be one of: *redis-highcpu-medium*, *redis-highmem-2xlarge*, *redis-highmem-medium*, *redis-highmem-xlarge*, *redis-shared-core-nano*, *redis-standard-large*, *redis-standard-small*",
  args: {
    name: "NODE_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "redis-highcpu-medium",
      "redis-highmem-2xlarge",
      "redis-highmem-medium",
      "redis-highmem-xlarge",
      "redis-shared-core-nano",
      "redis-standard-large",
      "redis-standard-small",
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
const flag11279: Fig.Option = {
  name: "--persistence-mode",
  description:
    "Operation mode for persistence. _PERSISTENCE_MODE_ must be one of:\n+\n*aof*::: AOF-based persistence\n*disabled*::: Persistence mode is disabled\n*rdb*::: RDB-based persistence\n:::\n+",
  args: {
    name: "PERSISTENCE_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["aof", "disabled", "rdb"],
  },
};
const flag11280: Fig.Option = {
  name: "--persistence-mode",
  description:
    "Operation mode for automated persistence. _PERSISTENCE_MODE_ must be one of:\n+\n*disabled*::: RDB mode is disabled\n*rdb*::: Automatic RDB persistence\n:::\n+",
  args: {
    name: "PERSISTENCE_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "rdb"],
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
const flag11981: Fig.Option = {
  name: "--rdb-snapshot-period",
  description:
    "Attempted period between RDB snapshots. _RDB_SNAPSHOT_PERIOD_ must be one of:\n+\n*12h*::: 12 hours\n*1h*::: 1 hour\n*24h*::: (default) 24 hours\n*6h*::: 6 hours\n:::\n+",
  args: {
    name: "RDB_SNAPSHOT_PERIOD",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["12h", "1h", "24h", "6h"],
  },
};
const flag11984: Fig.Option = {
  name: "--rdb-snapshot-start-time",
  description:
    "Date and time of the first snapshot in the ISO 1801 format, and alignment time for future snapshots. For example, 2022-11-02T03:00:00Z",
  args: {
    name: "RDB_SNAPSHOT_START_TIME",
    description: "String",
    suggestions: [],
  },
};
const flag11985: Fig.Option = {
  name: "--rdb-snapshot-start-time",
  description:
    "Date and time of the first snapshot in the ISO 1801 format, and alignment time for future snapshots. For example, 2024-01-01T01:00:00Z.\nIf not specified, the current time will be used",
  args: {
    name: "RDB_SNAPSHOT_START_TIME",
    description: "String",
    suggestions: [],
  },
};
const flag12401: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12450: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the acl policy. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `acl_policy` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12453: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the backup. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12454: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the cluster. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12455: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the instance. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12456: Fig.Option = {
  name: "--region",
  description:
    "The name of the Redis region of the operation. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12772: Fig.Option = {
  name: "--replica-count",
  description: "The replica count of each shard",
  args: { name: "REPLICA_COUNT", description: "Int", suggestions: [] },
};
const flag12852: Fig.Option = {
  name: "--request-id",
  description: "Idempotent request UUID",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag13308: Fig.Option = {
  name: "--schedule-time",
  description: "Time in RFC3339 format, for example: 2012-11-15T16:19:00.094Z",
  args: { name: "SCHEDULE_TIME", description: "String", suggestions: [] },
};
const flag13722: Fig.Option = {
  name: "--shard-count",
  description: "The shard count of the cluster",
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

const completionSpec: Fig.Spec = {
  name: "redis",
  description: "Manage Cloud Memorystore Redis resources",
  subcommands: [
    {
      name: "acl-policies",
      description:
        "Manage ACL policies of Memorystore for Redis Cluster instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Redis ACL Policy",
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
            flag12450,
            flag12852,
            {
              name: "--rules",
              description:
                'Required, The ACL rules within the ACL policy. Specify this flag multiple times for multiple rules.\nEach rule consists of \'username\' and \'rule\'.\n+\n*rule*:::\nThe Redis ACL rule string.\n+\n*username*:::\nThe username for the ACL rule.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rules=rule=string,username=string --rules=rule=string,username=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rules=\'[{"rule": "string", "username": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rules=path_to_file.(yaml|json)\n+\n```',
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
              "ID of the acl policy or fully qualified identifier for the acl policy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Redis ACL Policy",
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
            flag12450,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the acl policy or fully qualified identifier for the acl policy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show metadata for a Memorystore for Redis Cluster ACL policy",
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
            flag12450,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL_POLICY",
            description:
              "ID of the acl policy or fully qualified identifier for the acl policy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List Redis ACL Policies",
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
            flag12401,
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
            flag7356,
            flag11637,
            flag11946,
            flag12450,
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
              "ID of the acl policy or fully qualified identifier for the acl policy.\n+\nTo set the `acl_policy` attribute:\n* provide the argument `acl_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "clusters",
      description: "Manage Memorystore for Redis Cluster instances",
      subcommands: [
        {
          name: "add-cluster-endpoints",
          description: "Add more cluster endpoints",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cluster-endpoint",
              description:
                'Required, Resource details of a redis cluster endpoint.\n+\n*psc-connection*:::\nSets `psc-connection` value.\n+\n*address*::::\nSets `address` value.\n+\n*forwarding-rule*::::\nSets `forwarding-rule` value.\n+\n*network*::::\nSets `network` value.\n+\n*psc-connection-id*::::\nSets `psc-connection-id` value.\n+\n*service-attachment*::::\nSets `service-attachment` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--cluster-endpoint=psc-connection=[{address=string,forwarding-rule=string,network=string,psc-connection-id=string,service-attachment=string}] --cluster-endpoint=psc-connection=[{address=string,forwarding-rule=string,network=string,psc-connection-id=string,service-attachment=string}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--cluster-endpoint=\'[{"psc-connection": [{"address": "string", "forwarding-rule": "string", "network": "string", "psc-connection-id": "string", "service-attachment": "string"}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--cluster-endpoint=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CLUSTER_ENDPOINT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "backup-collections",
          description:
            "Manage backup collections of Memorystore for Redis Cluster instances",
          subcommands: [
            {
              name: "describe",
              description: "Show metadata for a backup collection",
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
                {
                  name: "--region",
                  description:
                    "The name of the Redis region of the backup collection. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `backup_collection` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP_COLLECTION",
                description:
                  "ID of the backup collection or fully qualified identifier for the backup collection.\n+\nTo set the `backup_collection` attribute:\n* provide the argument `backup_collection` on the command line",
              },
            },
            {
              name: "list",
              description: "List backup collections in a region",
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
                flag12401,
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
          name: "backups",
          description:
            "Manage backups of Memorystore for Redis Cluster instances",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Memorystore for Redis Cluster backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1018,
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
                flag12453,
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
              description:
                "Show metadata for a Memorystore for Redis Cluster backup",
              options: [
                flag42,
                flag46,
                flag1018,
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
                flag12453,
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
              description:
                "Export a Redis cluster backup to a Google Cloud Storage bucket",
              options: [
                flag42,
                flag46,
                flag720,
                flag1018,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-bucket",
                  description:
                    "The name of the Google Cloud Storage bucket to export the backup to",
                  args: {
                    name: "GCS_BUCKET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag12453,
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
              description: "List backups under a backup collection in a region",
              options: [
                flag42,
                flag46,
                {
                  name: "--backup-collection",
                  description:
                    "ID of the backup collection or fully qualified identifier for the backup collection.\n+\nTo set the `backup-collection` attribute:\n* provide the argument `--backup-collection` on the command line",
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
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                {
                  name: "--region",
                  description:
                    "The name of the Redis region of the backup collection. Overrides the default\nredis/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `--backup-collection` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `redis/region`",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
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
          name: "create",
          description: "Create a new Memorystore for Redis Cluster instance",
          options: [
            flag42,
            flag46,
            flag63,
            flag543,
            flag720,
            {
              name: "--auth-mode",
              description:
                "Available authorization mode of a Redis cluster. _AUTH_MODE_ must be one of:\n+\n*disabled*::: Authorization is disabled for the cluster.\n+\n*iam-auth*::: IAM basic authorization is enabled for the cluster.\n+\n:::\n+",
              args: {
                name: "AUTH_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["disabled", "iam-auth"],
              },
            },
            flag876,
            flag881,
            flag884,
            flag1201,
            flag2292,
            {
              name: "--cross-cluster-replication-role",
              description:
                "The role of the cluster in cross cluster replication. _CROSS_CLUSTER_REPLICATION_ROLE_ must be (only one value is supported):\n+\n*secondary*::: Create a secondary cluster.\n+\n:::\n+",
              args: {
                name: "CROSS_CLUSTER_REPLICATION_ROLE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["secondary"],
              },
            },
            flag2964,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--import-gcs-object-uris",
              description:
                "URIs of Google Cloud Storage objects to import from. For example, `gs://bucket/folder/file1.rdb,gs://bucket/folder/file2.rdb`",
              args: {
                name: "IMPORT_GCS_OBJECT_URIS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-managed-backup",
              description:
                "Managed backup to import from. For example, `projects/PROJECT_ID/locations/REGION/backupCollections/BACKUP_COLLECTION_ID/backups/BACKUP_ID`",
              args: {
                name: "IMPORT_MANAGED_BACKUP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-key",
              description:
                "The resource name of the customer-managed encryption key (CMEK) to use for the cluster.\nIt must use this format:\nprojects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/CRYPTO_KEY.\nThe key must be in the same region as the cluster. Otherwise, the create operation fails",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            flag6413,
            flag7356,
            {
              name: "--maintenance-window-day",
              description:
                "Day of week when the window starts, e.g. `sunday`. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            flag7497,
            {
              name: "--network",
              description:
                "The network used to create your instance. It must use the format:\nprojects/NETWORK_PROJECT_ID/global/networks/NETWORK_ID.\nThe network ID used here must match the network ID used by the service connection policy.\nOtherwise, the create operation fails",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag10540,
            flag11279,
            {
              name: "--primary-cluster",
              description:
                "The primary cluster that the secondary cluster will replicate from. It must use the format:\nprojects/PROJECT_ID/locations/REGION/clusters/CLUSTER_ID. It must refer to an existing cluster. Otherwise, the create operation fails",
              args: {
                name: "PRIMARY_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag11981,
            flag11985,
            {
              name: "--redis-config",
              description:
                "A list of Redis config KEY=VALUE pairs to set on the Redis Cluster according to\nhttp://redis.io/topics/config. Currently the supported Redis configs are:\n+\n  maxmemory-clients, maxmemory, maxmemory-policy, notify-keyspace-events,\n  slowlog-log-slower-than, maxclients",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag12454,
            flag12772,
            {
              name: "--server-ca-mode",
              description:
                "Server CA mode for the cluster. This field is immutable. _SERVER_CA_MODE_ must be one of:\n+\n*customer-managed-cas-ca*::: The cluster uses a customer-managed CA from Google Cloud Certificate Authority Service (CAS).\n+\n*google-managed-per-instance-ca*::: Each cluster has its unique Google-managed CA infrastructure.\n+\n*google-managed-shared-ca*::: The cluster uses the Google-managed shared CA infrastructure for the region.\n+\n:::\n+",
              args: {
                name: "SERVER_CA_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "customer-managed-cas-ca",
                  "google-managed-per-instance-ca",
                  "google-managed-shared-ca",
                ],
              },
            },
            {
              name: "--server-ca-pool",
              description:
                "The customer-managed Certificate Authority Service CA Pool resource name to use for issuing server certificates. Format: projects/{project}/locations/{region}/caPools/{ca_pool}. This is applicable only if --server-ca-mode is set to customer-managed-cas-ca. This field is immutable",
              args: {
                name: "SERVER_CA_POOL",
                description: "String",
                suggestions: [],
              },
            },
            flag13722,
            flag14975,
            {
              name: "--transit-encryption-mode",
              description:
                "Transit encryption mode used for the Redis cluster.\nIf not provided, encryption is disabled for the cluster. _TRANSIT_ENCRYPTION_MODE_ must be one of:\n+\n*disabled*::: In-transit encryption is disabled for the cluster.\n+\n*server-authentication*::: The cluster uses server managed encryption for in-transit encryption.\n+\n:::\n+",
              args: {
                name: "TRANSIT_ENCRYPTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["disabled", "server-authentication"],
              },
            },
            flag15315,
            flag15424,
            {
              name: "--zone",
              description:
                "The zone used to allocate the cluster nodes. Applicable only if the zone-distribution-mode\nis set to single-zone",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
            {
              name: "--zone-distribution-mode",
              description:
                "Determines how the cluster nodes are distributed across zones. _ZONE_DISTRIBUTION_MODE_ must be one of:\n+\n*multi-zone*::: Allocate cluster nodes across multiple zones.\n+\n*single-zone*::: Allocate cluster nodes in a single zone.\n+\n:::\n+",
              args: {
                name: "ZONE_DISTRIBUTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["multi-zone", "single-zone"],
              },
            },
            {
              name: "--zones",
              description:
                "Specify the zones of a multi-zone cluster where Memorystore for Redis Cluster allocates\nresources. This flag isn't applicable for single-zone clusters",
              args: { name: "ZONES", description: "List", suggestions: [] },
            },
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "create-backup",
          description: "Create a backup of a Redis cluster",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup-id",
              description: "The ID of the backup",
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
            flag7356,
            flag11637,
            flag11946,
            flag12454,
            flag14975,
            {
              name: "--ttl",
              description:
                'The time to live for the backup. The backup will be deleted automatically after the TTL\nis reached. For example, "10d" for 10 days. The minimum value is 1 day. If not specified, the\ndefault value is 100 years',
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
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Memorystore for Redis Cluster instance",
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
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show metadata for a Memorystore for Redis Cluster instance",
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
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "detach",
          description: "Detach a secondary cluster",
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
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "detach-secondaries",
          description:
            "Detach one or more secondary clusters from the primary cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clusters-to-detach",
              description:
                "Comma separated list of secondary clusters to detach from the primary cluster.\n+\nEach element in the list should be in the format: `projects/PROJECT_ID/locations/REGION/clusters/CLUSTER_ID`",
              args: {
                name: "CLUSTERS_TO_DETACH",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "get-cluster-certificate-authority",
          description:
            "Get the certificate authority information for a Memorystore for Redis Cluster instance",
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
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "get-shared-regional-certificate-authority",
          description:
            "Get the shared regional certificate authority certificates for Memorystore for Redis Cluster",
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
            flag12401,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List Memorystore for Redis Cluster instances",
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
            flag12401,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-cluster-endpoints",
          description: "Remove existing Memorystore cluster endpoints",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cluster-endpoint",
              description:
                'Required, Resource details of a redis cluster endpoint.\n+\n*psc-connection*:::\nSets `psc-connection` value.\n+\n*psc-connection-id*::::\nSets `psc-connection-id` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--cluster-endpoint=psc-connection=[{psc-connection-id=string}] --cluster-endpoint=psc-connection=[{psc-connection-id=string}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--cluster-endpoint=\'[{"psc-connection": [{"psc-connection-id": "string"}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--cluster-endpoint=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CLUSTER_ENDPOINT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "reschedule-maintenance",
          description:
            "Reschedule maintenance window for a Memorystore for     Redis Cluster instance",
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
            flag12454,
            {
              name: "--reschedule-type",
              description:
                "Reschedule type to use for the reschedule maintenance window. _RESCHEDULE_TYPE_ must be one of:\n+\n*immediate*::: Reschedule the maintenance to perform now.\n*specific-time*::: Reschedule the maintenance to a specific time.\n:::\n+",
              args: {
                name: "RESCHEDULE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["immediate", "specific-time"],
              },
            },
            flag13308,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "switchover",
          description: "Switchover to a secondary cluster",
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
            flag12454,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "update",
          description: "Update Memorystore Cluster for Redis instance",
          options: [
            flag42,
            flag46,
            flag63,
            flag543,
            flag720,
            flag876,
            flag881,
            flag884,
            flag1201,
            flag1723,
            flag2292,
            flag2964,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--maintenance-version",
              description: "The maintenance version of the cluster",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag7477,
            {
              name: "--maintenance-window-day",
              description:
                "The day of week when the window starts, e.g. `sunday`. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            flag7497,
            flag10540,
            flag11279,
            flag11637,
            flag11946,
            flag11981,
            flag11985,
            flag12454,
            flag12637,
            {
              name: "--remove-redis-config",
              description:
                "A list of Redis Cluster config parameters to remove. Removing a non-existent\nconfig parameter is silently ignored",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag12772,
            {
              name: "--rotate-server-certificate",
              description:
                "Rotate the server certificates for the cluster. This is allowed only for clusters using a customer-managed CA",
            },
            flag13722,
            {
              name: "--simulate-maintenance-event",
              description: "Trigger a simulation for maintenance event",
            },
            flag14975,
            flag15167,
            {
              name: "--update-redis-config",
              description:
                "A list of Redis Cluster config KEY=VALUE pairs to update. If a\nconfig parameter is already set, its value is modified; otherwise a\nnew Redis config parameter is added",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.redis.cluster_util:ClusterRedisConfigArgType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
      ],
    },
    {
      name: "instances",
      description: "Manage Cloud Memorystore Redis instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Memorystore Redis instance",
          options: [
            flag42,
            flag46,
            {
              name: "--alternative-zone",
              description:
                "A secondary zone for the Redis instance. Only applicable to\nthe standard tier. This protects the instance against zonal failures\nby provisioning it across two zones. If provided, alternative zone\nmust be a different zone from the one provided through `--zone`",
              args: {
                name: "ALTERNATIVE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag2292,
            {
              name: "--connect-mode",
              description:
                "Network connection mode used by instances. _CONNECT_MODE_ must be one of: *connect-mode-unspecified*, *direct-peering*, *private-service-access*",
              args: {
                name: "CONNECT_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "connect-mode-unspecified",
                  "direct-peering",
                  "private-service-access",
                ],
              },
            },
            {
              name: "--customer-managed-key",
              description:
                "The KMS key reference that you want to use to encrypt the data at rest for this Redis\ninstance. If this is provided, CMEK is enabled",
              args: {
                name: "CUSTOMER_MANAGED_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag3691,
            {
              name: "--enable-auth",
              description:
                "Enables Redis AUTH for the instance. If omitted AUTH is disabled",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag7481,
            flag7496,
            {
              name: "--network",
              description:
                "The name of the Google Compute Engine network to which the instance\nwill be connected. If left unspecified, the default network will be\nused",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11280,
            flag11637,
            flag11946,
            {
              name: "--rdb-snapshot-period",
              description:
                "Attempted period between RDB snapshots. _RDB_SNAPSHOT_PERIOD_ must be one of:\n+\n*12h*::: 12 hours\n*1h*::: 1 hour\n*24h*::: 24 hours\n*6h*::: 6 hours\n:::\n+",
              args: {
                name: "RDB_SNAPSHOT_PERIOD",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["12h", "1h", "24h", "6h"],
              },
            },
            flag11984,
            {
              name: "--read-replicas-mode",
              description:
                "Read replicas mode used by the instance. Only works against standard tier instances with 5GB\nand above provisioned capacity. _READ_REPLICAS_MODE_ must be one of:\n+\n*read-replicas-disabled*::: Read replica is disabled for the instance. Read endpoint will not\nbe provided and the instance cannot scale up or down the number of\nreplicas.\n+\n*read-replicas-enabled*::: Read replica is enabled for the instance. Read endpoint will be\nprovided and the instance can scale up and down the number of\nreplicas.\n+\n:::\n+",
              args: {
                name: "READ_REPLICAS_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "read-replicas-disabled",
                  "read-replicas-enabled",
                ],
              },
            },
            {
              name: "--redis-config",
              description:
                "A list of Redis config KEY=VALUE pairs to set on the instance\naccording to http://redis.io/topics/config. Currently, the only\nsupported parameters are:\n+\nRedis version 3.2 and newer: maxmemory-policy, notify-keyspace-events, timeout, databases.\n+\nRedis version 4.0 and newer: activedefrag, lfu-decay-time, lfu-log-factor, maxmemory-gb.\n+\nRedis version 5.0 and newer: stream-node-max-bytes, stream-node-max-entries",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            {
              name: "--redis-version",
              description:
                "The version of Redis software. _VERSION_ must be one of:\n+\n*redis_3_2*::: Redis 3.2 compatibility\n*redis_4_0*::: Redis 4.0 compatibility\n*redis_5_0*::: Redis 5.0 compatibility\n*redis_6_x*::: Redis 6.x compatibility\n*redis_7_0*::: Redis 7.0 compatibility\n*redis_7_2*::: Redis 7.2 compatibility\n:::\n+",
              args: {
                name: "VERSION",
                description: "String",
                suggestions: [
                  "redis_3_2",
                  "redis_4_0",
                  "redis_5_0",
                  "redis_6_x",
                  "redis_7_0",
                  "redis_7_2",
                ],
              },
            },
            flag12455,
            {
              name: "--replica-count",
              description: "The replica count of the instance",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--reserved-ip-range",
              description:
                "For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this\ninstance. Range must be unique and non-overlapping with existing subnets in an authorized\nnetwork. For PRIVATE_SERVICE_ACCESS mode, the name of an IP address range allocated for the\nprivate service access connection. If not provided, the service will choose an unused /29\nblock, for example, 10.0.0.0/29 or 192.168.0.0/29. If READ_REPLICAS_ENABLED is used for the\n--read-replicas-mode flag, then the block size required for this flag is /28",
              args: {
                name: "RESERVED_IP_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--size",
              description:
                "The memory size of the instance in GiB. If not provided, size of 1 GiB\nwill be used",
              args: { name: "SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--tier",
              description:
                "The service tier of the instance. _TIER_ must be one of:\n+\n*basic*::: Basic Redis instance with no replication\n*standard*::: Standard high-availability Redis instance with replication\n:::\n+",
              args: {
                name: "TIER",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "standard"],
              },
            },
            flag14975,
            {
              name: "--transit-encryption-mode",
              description:
                "Transit encryption mode used by the instance. _TRANSIT_ENCRYPTION_MODE_ must be one of:\n+\n*disabled*::: Transit encryption is disabled for the instance.\n*server-authentication*::: Client to Server traffic encryption enabled with server authentication.\n:::\n+",
              args: {
                name: "TRANSIT_ENCRYPTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["disabled", "server-authentication"],
              },
            },
            flag15315,
            flag15424,
            {
              name: "--zone",
              description:
                "The zone of the Redis instance. If not provided the service\nwill pick a random zone in the region. For the standard tier, instances\nwill be created across two zones for protection against zonal\nfailures. So if --alternative-zone is also provided, it must be\ndifferent from --zone",
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
          name: "delete",
          description: "Delete a Redis instance",
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
            flag12455,
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
          description: "Show metadata for a Memorystore Redis instance",
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
            flag12455,
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
          name: "export",
          description:
            "Export data from a Memorystore Redis instance to Google Cloud Storage",
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
            flag12455,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DESTINATION",
              description:
                "The Cloud Storage object path to export the instance to. Must have\nthe redis DB file extension *.rdb*",
            },
            {
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
            },
          ],
        },
        {
          name: "failover",
          description:
            "Failover a standard tier Cloud Memorystore for Redis instance from the master node to its replica",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--data-protection-mode",
              description:
                "Data protection mode to use for the failover. If not specified, defaults to\n'limited-data-loss'. _DATA_PROTECTION_MODE_ must be one of:\n+\n*force-data-loss*::: Failover without data loss protection. Can cause significant data loss.\n*limited-data-loss*::: Failover with data loss protection that ensures loss is within system thresholds.\n:::\n+",
              args: {
                name: "DATA_PROTECTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["force-data-loss", "limited-data-loss"],
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
            flag12455,
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
          name: "get-auth-string",
          description: "Show AUTH string for a Memorystore Redis instance",
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
            flag12455,
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
          name: "import",
          description:
            "Import data to a Memorystore Redis instance from Google Cloud Storage",
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
            flag12455,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SOURCE",
              description:
                "The Cloud Storage object path to import the instance from. Must have\nthe redis DB file extension *.rdb*",
            },
            {
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
            },
          ],
        },
        {
          name: "list",
          description: "List Memorystore Redis instances",
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
            flag12401,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "reschedule-maintenance",
          description: "Reschedule maintenance window for a Redis instance",
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
            flag12455,
            {
              name: "--reschedule-type",
              description:
                "Reschedule type to use for the reschedule maintenance window.\nReschedule Type must be one of:IMMEDIATE, NEXT-AVAILABLE-WINDOW, or SPECIFIC-TIME. _RESCHEDULE_TYPE_ must be one of:\n+\n*immediate*::: Reschedule the maintenance window to perform now.\n*next-available-window*::: Reschedule the maintenance window to the next available window.\n*specific-time*::: Reschedule the maintenance window to a specific time.\n:::\n+",
              args: {
                name: "RESCHEDULE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "immediate",
                  "next-available-window",
                  "specific-time",
                ],
              },
            },
            flag13308,
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
          description: "Update Memorystore Redis instances",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3691,
            {
              name: "--enable-auth",
              description: "Enables Redis AUTH for the instance",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--maintenance-version",
              description:
                "Specifies which maintenance version to apply to your instance during self-service maintenance.\nTo view the available maintenance versions for your instance, run `gcloud redis\ninstances describe [INSTANCE_ID]`. Acceptable values for this flag are either `current_default` or\none of the specific versions listed by the describe command. If you pass the value\n`current_default`, the Memorystore updates to the most recent available maintenance version during self service maintenance",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag7477,
            flag7481,
            flag7496,
            flag11280,
            flag11637,
            flag11946,
            {
              name: "--rdb-snapshot-period",
              description:
                "The attempted period between RDB snapshots. _RDB_SNAPSHOT_PERIOD_ must be one of:\n+\n*12h*::: 12 hours\n*1h*::: 1 hour\n*24h*::: 24 hours\n*6h*::: 6 hours\n:::\n+",
              args: {
                name: "RDB_SNAPSHOT_PERIOD",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["12h", "1h", "24h", "6h"],
              },
            },
            flag11984,
            {
              name: "--read-replicas-mode",
              description:
                "Read replicas mode used by the instance. Only works against standard tier instances with\n5GB and above provisioned capacity and Redis version 5.0 and above.\nThis is an irreversible update i.e. Read replicas can not be disabled for the instance\nonce it is enabled. Also this update is exclusive and cannot be clubbed with other update\noperations. _READ_REPLICAS_MODE_ must be one of:\n+\n*read-replicas-disabled*::: If read replica is not enabled on the instance, no changes are done. If read replica is\nenabled for the instance, update operation fails\n+\n*read-replicas-enabled*::: Read replica is enabled for the instance if not already enabled. Read endpoint will be\nprovided and the instance can scale up and down the number of replicas.\n+\n:::\n+",
              args: {
                name: "READ_REPLICAS_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "read-replicas-disabled",
                  "read-replicas-enabled",
                ],
              },
            },
            flag12455,
            flag12637,
            {
              name: "--remove-redis-config",
              description:
                "A list of Redis config parameters to remove. Removing a non-existent\nconfig parameter is silently ignored",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            {
              name: "--replica-count",
              description:
                "The replica count of the instance. Valid from 0 to 5",
              args: {
                name: "REPLICA_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--secondary-ip-range",
              description:
                "Required only when read-replicas-mode is enabled on the instance. The CIDR range of\ninternal addresses that are reserved for this instance. For example, 10.0.0.0/28 or\n192.168.0.0/28. Range must be unique and non-overlapping with existing ranges in the\nnetwork. If value 'auto' passed, the service will automatically pick an available range",
              args: {
                name: "SECONDARY_IP_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--size",
              description: "The memory size of the instance in GiB",
              args: { name: "SIZE", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15167,
            {
              name: "--update-redis-config",
              description:
                "A list of Redis config KEY=VALUE pairs to update according to\nhttp://cloud.google.com/memorystore/docs/reference/redis-configs. If a config parameter is already set,\nits value is modified; otherwise a new Redis config parameter is added.\nCurrently, the only supported parameters are:\n+\nRedis version 3.2 and newer: maxmemory-policy, notify-keyspace-events, timeout.\n+\nRedis version 4.0 and newer: activedefrag, lfu-decay-time, lfu-log-factor, maxmemory-gb.\n+\nRedis version 5.0 and newer: stream-node-max-bytes, stream-node-max-entries.\n+\nRedis version 7.0 and newer: maxmemory-clients, lazyfree-lazy-eviction, lazyfree-lazy-expire, lazyfree-lazy-user-del, lazyfree-lazy-user-flush",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.redis.util:InstanceRedisConfigArgType",
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
          name: "upgrade",
          description:
            "Upgrade a Memorystore for Redis instance to a specified Redis version",
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
            {
              name: "--redis-version",
              description:
                "Target version of Redis software. _VERSION_ must be one of:\n+\n*redis_4_0*::: Redis 4.0 compatibility\n*redis_5_0*::: Redis 5.0 compatibility\n*redis_6_x*::: Redis 6.x compatibility\n*redis_7_0*::: Redis 7.0 compatibility\n*redis_7_2*::: Redis 7.2 compatibility\n:::\n+",
              args: {
                name: "VERSION",
                description: "String",
                suggestions: [
                  "redis_4_0",
                  "redis_5_0",
                  "redis_6_x",
                  "redis_7_0",
                  "redis_7_2",
                ],
              },
            },
            flag12455,
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
      name: "operations",
      description: "Manage Cloud Memorystore Redis operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Memorystore Redis import or export operation",
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
            flag12456,
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
          description: "Show metadata for a Memorystore Redis operation",
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
            flag12456,
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
          description: "List Memorystore Redis operations",
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
            flag12401,
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
      name: "regions",
      description: "Manage Cloud Memorystore Redis regions",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Memorystore Redis region",
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
            name: "REGION",
            description:
              "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `region` on the command line",
          },
        },
        {
          name: "list",
          description: "List Memorystore Redis regions",
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
      description: "Manage Cloud Memorystore Redis zones",
      subcommands: [
        {
          name: "list",
          description: "List Memorystore Redis zones",
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
                'If provided, returns only resources from the given region. Use region\nID only, not the full URI of the region. This flag is the equivalent\nof: `--filter="region:REGION"`. Run `gcloud topic filters` for more\ninformation',
              args: { name: "REGION", description: "String", suggestions: [] },
            },
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
