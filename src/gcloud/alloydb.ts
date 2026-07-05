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
const flag415: Fig.Option = {
  name: "--allocated-ip-range-name",
  description:
    'Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`',
  args: {
    name: "ALLOCATED_IP_RANGE_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag417: Fig.Option = {
  name: "--allocated-ip-range-override",
  description:
    'Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default". If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`',
  args: {
    name: "ALLOCATED_IP_RANGE_OVERRIDE",
    description: "String",
    suggestions: [],
  },
};
const flag473: Fig.Option = {
  name: "--allowed-psc-projects",
  description:
    "Comma-separated list of allowed consumer projects to create endpoints for Private Service Connect (PSC) connectivity for the instance. Only instances in PSC-enabled clusters are allowed to set this field.(e.g., `--allowed-psc-projects=project1,12345678,project2)",
  args: { name: "ALLOWED_PSC_PROJECTS", description: "List", suggestions: [] },
};
const flag706: Fig.Option = {
  name: "--assign-inbound-public-ip",
  description:
    "Specify to enable or disable public IP on an instance.\n          ASSIGN_INBOUND_PUBLIC_IP must be one of:\n          * *NO_PUBLIC_IP*\n          ** This disables public IP on the instance. Updating an instance to\n          disable public IP will clear the list of authorized networks.\n          * *ASSIGN_IPV4*\n          ** Assign an inbound public IPv4 address for the instance.\n          Public IP is enabled",
  args: {
    name: "ASSIGN_INBOUND_PUBLIC_IP",
    description: "String",
    suggestions: [],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag798: Fig.Option = {
  name: "--authorized-external-networks",
  description:
    "Comma-separated list of authorized external networks to set on the instance. Authorized networks should use CIDR notation (e.g. 1.2.3.4/30). This flag is only allowed to be set for instances with public IP enabled",
  args: { name: "AUTHORIZED_NETWORK", description: "List", suggestions: [] },
};
const flag868: Fig.Option = {
  name: "--automated-backup-days-of-week",
  description:
    "Comma-separated list of days of the week to perform a backup. At least one day of the week must be provided. (e.g., --automated-backup-days-of-week=MONDAY,WEDNESDAY,SUNDAY). _DAYS_OF_WEEK_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
  args: { name: "DAYS_OF_WEEK", description: "List", suggestions: [] },
};
const flag869: Fig.Option = {
  name: "--automated-backup-days-of-week",
  description:
    "Comma-separated list of days of the week to perform a backup. At least one day of the week must be provided. (e.g., --automated-backup-days-of-week=MONDAY,WEDNESDAY,SUNDAY). _DAYS_OF_WEEK_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
  args: { name: "DAYS_OF_WEEK", description: "List", suggestions: [] },
};
const flag870: Fig.Option = {
  name: "--automated-backup-encryption-key-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--automated-backup-encryption-key` on the command line with a fully specified name;\n* provide the argument `--automated-backup-encryption-key-keyring` on the command line",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY_KEYRING",
    description: "String",
    suggestions: [],
  },
};
const flag871: Fig.Option = {
  name: "--automated-backup-encryption-key-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--automated-backup-encryption-key` on the command line with a fully specified name;\n* provide the argument `--automated-backup-encryption-key-location` on the command line",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag872: Fig.Option = {
  name: "--automated-backup-encryption-key-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--automated-backup-encryption-key` on the command line with a fully specified name;\n* provide the argument `--automated-backup-encryption-key-project` on the command line;\n* set the property `core/project`",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag873: Fig.Option = {
  name: "--automated-backup-encryption-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--automated-backup-encryption-key` on the command line",
  args: {
    name: "AUTOMATED_BACKUP_ENCRYPTION_KEY",
    description: "String",
    suggestions: [],
  },
};
const flag877: Fig.Option = {
  name: "--automated-backup-retention-count",
  description: "Number of most recent successful backups retained",
  args: { name: "RETENTION_COUNT", description: "Int", suggestions: [] },
};
const flag878: Fig.Option = {
  name: "--automated-backup-retention-period",
  description:
    "Retention period of the backup relative to creation time.  See `$ gcloud topic datetimes` for information on duration formats",
  args: {
    name: "RETENTION_PERIOD",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag882: Fig.Option = {
  name: "--automated-backup-start-times",
  description:
    "Comma-separated list of times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and required to be an exact hour in the format HH:00. (e.g., `--automated-backup-start-times=01:00,13:00`)",
  args: { name: "START_TIMES", description: "List", suggestions: [] },
};
const flag883: Fig.Option = {
  name: "--automated-backup-start-times",
  description:
    "Comma-separated list of times during the day to start a backup. At least one start time must be provided. The start times are assumed to be in UTC and required to be an exact hour in the format HH:00. (e.g., `--automated-backup-start-times=01:00,13:00`)",
  args: { name: "START_TIMES", description: "List", suggestions: [] },
};
const flag885: Fig.Option = {
  name: "--automated-backup-window",
  description:
    "Length of the time window beginning at start time during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour",
  args: {
    name: "TIMEOUT_PERIOD",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag955: Fig.Option = {
  name: "--availability-type",
  description:
    "Specifies level of availability. _AVAILABILITY_TYPE_ must be one of:\n+\n*REGIONAL*::: Provide high availability instances. Recommended for production instances; instances automatically fail over to another zone within your selected region.\n*ZONAL*::: Provide zonal availability instances. Not recommended for production instances; instance does not automatically fail over to another zone.\n:::\n+",
  args: {
    name: "AVAILABILITY_TYPE",
    description: "String",
    suggestions: ["REGIONAL", "ZONAL"],
  },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag2070: Fig.Option = {
  name: "--cluster",
  description: "AlloyDB cluster ID",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2309: Fig.Option = {
  name: "--connection-pooling-client-connection-idle-timeout",
  description:
    "The maximum number of seconds a client is allowed to be idle before it is disconnected",
  args: {
    name: "CONNECTION_POOLING_CLIENT_CONNECTION_IDLE_TIMEOUT",
    description: "String",
    suggestions: [],
  },
};
const flag2310: Fig.Option = {
  name: "--connection-pooling-ignore-startup-parameters",
  description:
    "Comma-separated list of startup parameters that should be ignored by the connection pool",
  args: { name: "STARTUP_PARAMETERS", description: "List", suggestions: [] },
};
const flag2311: Fig.Option = {
  name: "--connection-pooling-max-client-connections",
  description: "The max client connections for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_MAX_CLIENT_CONNECTIONS",
    description: "String",
    suggestions: [],
  },
};
const flag2312: Fig.Option = {
  name: "--connection-pooling-max-pool-size",
  description: "The max pool size for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_MAX_POOL_SIZE",
    description: "String",
    suggestions: [],
  },
};
const flag2313: Fig.Option = {
  name: "--connection-pooling-max-prepared-statements",
  description: "The maximum number of prepared statements allowed",
  args: {
    name: "CONNECTION_POOLING_MAX_PREPARED_STATEMENTS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag2314: Fig.Option = {
  name: "--connection-pooling-min-pool-size",
  description: "The min pool size for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_MIN_POOL_SIZE",
    description: "String",
    suggestions: [],
  },
};
const flag2315: Fig.Option = {
  name: "--connection-pooling-pool-mode",
  description:
    "The pool mode for managed connection pooling. _CONNECTION_POOLING_POOL_MODE_ must be one of:\n+\n*SESSION*::: Session mode for managed connection pooling.\n*TRANSACTION*::: Transaction mode for managed connection pooling.\n:::\n+",
  args: {
    name: "CONNECTION_POOLING_POOL_MODE",
    description: "String",
    suggestions: ["SESSION", "TRANSACTION"],
  },
};
const flag2316: Fig.Option = {
  name: "--connection-pooling-query-wait-timeout",
  description: "The query wait timeout for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_QUERY_WAIT_TIMEOUT",
    description: "String",
    suggestions: [],
  },
};
const flag2317: Fig.Option = {
  name: "--connection-pooling-server-idle-timeout",
  description: "The server idle timeout for managed connection pooling",
  args: {
    name: "CONNECTION_POOLING_SERVER_IDLE_TIMEOUT",
    description: "String",
    suggestions: [],
  },
};
const flag2318: Fig.Option = {
  name: "--connection-pooling-server-lifetime",
  description:
    "The lifetime of a server connection in seconds. The pooler will close an unused (not currently linked to any client connection) server connection that has been connected longer than this. Setting  it to 0 means the connection is to be used only once, then closed",
  args: {
    name: "CONNECTION_POOLING_SERVER_LIFETIME",
    description: "String",
    suggestions: [],
  },
};
const flag2319: Fig.Option = {
  name: "--connection-pooling-stats-users",
  description:
    "Comma-separated list of database users to access connection pooling stats",
  args: { name: "STATS_USERS", description: "List", suggestions: [] },
};
const flag2453: Fig.Option = {
  name: "--continuous-backup-encryption-key-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--continuous-backup-encryption-key` on the command line with a fully specified name;\n* provide the argument `--continuous-backup-encryption-key-keyring` on the command line",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY_KEYRING",
    description: "String",
    suggestions: [],
  },
};
const flag2454: Fig.Option = {
  name: "--continuous-backup-encryption-key-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--continuous-backup-encryption-key` on the command line with a fully specified name;\n* provide the argument `--continuous-backup-encryption-key-location` on the command line",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag2455: Fig.Option = {
  name: "--continuous-backup-encryption-key-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--continuous-backup-encryption-key` on the command line with a fully specified name;\n* provide the argument `--continuous-backup-encryption-key-project` on the command line;\n* set the property `core/project`",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag2456: Fig.Option = {
  name: "--continuous-backup-encryption-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--continuous-backup-encryption-key` on the command line",
  args: {
    name: "CONTINUOUS_BACKUP_ENCRYPTION_KEY",
    description: "String",
    suggestions: [],
  },
};
const flag2457: Fig.Option = {
  name: "--continuous-backup-recovery-window-days",
  description:
    "Recovery window of the log files and backups saved to support Continuous Backups",
  args: { name: "RECOVERY_PERIOD", description: "Int", suggestions: [] },
};
const flag2509: Fig.Option = {
  name: "--cpu-count",
  description:
    "Whole number value indicating how many vCPUs the machine should contain. If the instance does not have a machine-type, the vCPU count will be used to determine the machine type where each vCPU corresponds to an N2  high-mem machine:  (https://cloud.google.com/compute/docs/general-purpose-machines#n2_machine_types). where CPU_COUNT can be one of: 2, 4, 8, 16, 32, 64, 96, 128. If the instance has a machine-type, cpu-count must have the same value as the vCPU count in the machine-type. Eg: if machine-type is c4a-highmem-4-lssd, cpu-count must be 4. _CPU_COUNT_ must be one of: *1*, *2*, *4*, *8*, *14*, *16*, *22*, *32*, *44*, *48*, *64*, *72*, *88*, *96*, *128*, *144*, *192*, *288*",
  args: {
    name: "CPU_COUNT",
    description: "Int",
    suggestions: [
      "1",
      "2",
      "4",
      "8",
      "14",
      "16",
      "22",
      "32",
      "44",
      "48",
      "64",
      "72",
      "88",
      "96",
      "128",
      "144",
      "192",
      "288",
    ],
  },
};
const flag2745: Fig.Option = {
  name: "--database-flags",
  description:
    "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
  args: { name: "FLAG=VALUE", description: "Dict", suggestions: [] },
};
const flag2768: Fig.Option = {
  name: "--database-version",
  description:
    "Database version of the cluster. _DATABASE_VERSION_ must be one of: *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*",
  args: {
    name: "DATABASE_VERSION",
    description:
      "Googlecloudsdk.generated_clients.apis.alloydb.v1.alloydb_v1_messages:DatabaseVersionValueValuesEnum",
    suggestions: [
      "POSTGRES_14",
      "POSTGRES_15",
      "POSTGRES_16",
      "POSTGRES_17",
      "POSTGRES_18",
    ],
  },
};
const flag2997: Fig.Option = {
  name: "--deny-maintenance-period-end-date",
  description:
    "Date when the deny maintenance period ends, that is 2020-11-01 or 11-01 for recurring",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_END_DATE",
    description: "Googlecloudsdk.command_lib.alloydb.flags:Parse",
    suggestions: [],
  },
};
const flag3000: Fig.Option = {
  name: "--deny-maintenance-period-start-date",
  description:
    "Date when the deny maintenance period begins, that is 2020-11-01 or 11-01 for recurring",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_START_DATE",
    description: "Googlecloudsdk.command_lib.alloydb.flags:Parse",
    suggestions: [],
  },
};
const flag3004: Fig.Option = {
  name: "--deny-maintenance-period-time",
  description:
    "Time when the deny maintenance period starts and ends, for example 05:00, in UTC time zone",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_TIME",
    description: "Googlecloudsdk.command_lib.alloydb.flags:Parse",
    suggestions: [],
  },
};
const flag3545: Fig.Option = {
  name: "--disable-automated-backup",
  description: "Disables automated backups on the cluster",
};
const flag4080: Fig.Option = {
  name: "--enable-connection-pooling",
  description:
    "Enable connection pooling for the instance. Use *--enable-connection-pooling* to enable and *--no-enable-connection-pooling* to disable",
};
const flag4081: Fig.Option = {
  name: "--enable-continuous-backup",
  description: "Enables Continuous Backups on the cluster",
};
const flag4104: Fig.Option = {
  name: "--enable-dataplex-integration",
  description:
    "Enable or disable Dataplex integration for this cluster (Enabled by default). Use *--enable-dataplex-integration* to enable and *--no-enable-dataplex-integration* to disable",
};
const flag4267: Fig.Option = {
  name: "--enable-private-service-connect",
  description:
    "Enable Private Service Connect (PSC) connectivity for the cluster",
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
const flag5820: Fig.Option = {
  name: "--insights-config-query-plans-per-minute",
  description:
    "Number of query plans to sample every minute.\n        Default value is 5. Allowed range: 0 to 20",
  args: {
    name: "INSIGHTS_CONFIG_QUERY_PLANS_PER_MINUTE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag5821: Fig.Option = {
  name: "--insights-config-query-string-length",
  description:
    "Query string length in bytes to be stored by the query insights\n        feature. Default length is 1024 bytes. Allowed range: 256 to 4500\n        bytes",
  args: {
    name: "INSIGHTS_CONFIG_QUERY_STRING_LENGTH",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag5823: Fig.Option = {
  name: "--insights-config-record-application-tags",
  description:
    "Allow application tags to be recorded by the query insights\n        feature.\n+\nUse *--insights-config-record-application-tags* to enable and *--no-insights-config-record-application-tags* to disable",
};
const flag5825: Fig.Option = {
  name: "--insights-config-record-client-address",
  description:
    "Allow the client address to be recorded by the query insights\n        feature.\n+\nUse *--insights-config-record-client-address* to enable and *--no-insights-config-record-client-address* to disable",
};
const flag6203: Fig.Option = {
  name: "--keep-extra-roles",
  description: "If the user already exists and has extra roles, keep them",
  args: { name: "KEEP_EXTRA_ROLES", description: "Int", suggestions: [] },
};
const flag6327: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6336: Fig.Option = {
  name: "--kms-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6344: Fig.Option = {
  name: "--kms-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6353: Fig.Option = {
  name: "--kms-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
  args: { name: "KMS_PROJECT", description: "String", suggestions: [] },
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
const flag7440: Fig.Option = {
  name: "--machine-type",
  description:
    "Specifies machine type for the instance. _MACHINE_TYPE_ must be one of: *n2-highmem-2*, *n2-highmem-4*, *n2-highmem-8*, *n2-highmem-16*, *n2-highmem-32*, *n2-highmem-64*, *n2-highmem-96*, *n2-highmem-128*, *c4a-highmem-1*, *c4a-highmem-2-lssd*, *c4a-highmem-4-lssd*, *c4a-highmem-8-lssd*, *c4a-highmem-16-lssd*, *c4a-highmem-32-lssd*, *c4a-highmem-48-lssd*, *c4a-highmem-64-lssd*, *c4a-highmem-72-lssd*, *c4-highmem-4-lssd*, *c4-highmem-8-lssd*, *c4-highmem-16-lssd*, *c4-highmem-24-lssd*, *c4-highmem-32-lssd*, *c4-highmem-48-lssd*, *c4-highmem-96-lssd*, *c4-highmem-144-lssd*, *c4-highmem-192-lssd*, *c4-highmem-288-lssd*, *z3-highmem-14-standardlssd*, *z3-highmem-22-standardlssd*, *z3-highmem-44-standardlssd*, *z3-highmem-88-standardlssd*, *z3-highmem-8-highlssd*, *z3-highmem-16-highlssd*, *z3-highmem-22-highlssd*, *z3-highmem-32-highlssd*, *z3-highmem-44-highlssd*",
  args: {
    name: "MACHINE_TYPE",
    description: "String",
    suggestions: [
      "n2-highmem-2",
      "n2-highmem-4",
      "n2-highmem-8",
      "n2-highmem-16",
      "n2-highmem-32",
      "n2-highmem-64",
      "n2-highmem-96",
      "n2-highmem-128",
      "c4a-highmem-1",
      "c4a-highmem-2-lssd",
      "c4a-highmem-4-lssd",
      "c4a-highmem-8-lssd",
      "c4a-highmem-16-lssd",
      "c4a-highmem-32-lssd",
      "c4a-highmem-48-lssd",
      "c4a-highmem-64-lssd",
      "c4a-highmem-72-lssd",
      "c4-highmem-4-lssd",
      "c4-highmem-8-lssd",
      "c4-highmem-16-lssd",
      "c4-highmem-24-lssd",
      "c4-highmem-32-lssd",
      "c4-highmem-48-lssd",
      "c4-highmem-96-lssd",
      "c4-highmem-144-lssd",
      "c4-highmem-192-lssd",
      "c4-highmem-288-lssd",
      "z3-highmem-14-standardlssd",
      "z3-highmem-22-standardlssd",
      "z3-highmem-44-standardlssd",
      "z3-highmem-88-standardlssd",
      "z3-highmem-8-highlssd",
      "z3-highmem-16-highlssd",
      "z3-highmem-22-highlssd",
      "z3-highmem-32-highlssd",
      "z3-highmem-44-highlssd",
    ],
  },
};
const flag7479: Fig.Option = {
  name: "--maintenance-window-day",
  description:
    "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *MONDAY*, *TUESDAY*, *WEDNESDAY*, *THURSDAY*, *FRIDAY*, *SATURDAY*, *SUNDAY*",
  args: {
    name: "MAINTENANCE_WINDOW_DAY",
    description:
      "Googlecloudsdk.generated_clients.apis.alloydb.v1.alloydb_v1_messages:DayValueValuesEnum",
    suggestions: [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ],
  },
};
const flag7499: Fig.Option = {
  name: "--maintenance-window-hour",
  description: "Hour of day for maintenance window, in UTC time zone",
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag8251: Fig.Option = {
  name: "--network",
  description:
    "Network in the current project that the instance will be part of. To specify using a network with a shared VPC, use the full URL of the network. For an example host project, `testproject`, and shared network, `testsharednetwork`, this would be of the form:`--network=projects/testproject/global/networks/testsharednetwork`",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag10638: Fig.Option = {
  name: "--observability-config-enabled",
  description:
    "Enable enhanced query insights feature. Use *--observability-config-enabled* to enable and *--no-observability-config-enabled* to disable",
};
const flag10639: Fig.Option = {
  name: "--observability-config-max-query-string-length",
  description:
    "Query string length in bytes to be stored by the enhanced query\n        insights feature. Default length is 10k bytes",
  args: {
    name: "OBSERVABILITY_CONFIG_MAX_QUERY_STRING_LENGTH",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag10640: Fig.Option = {
  name: "--observability-config-preserve-comments",
  description:
    "Allow preservation of comments in query string recorded by the\n        enhanced query insights feature.\n+\nUse *--observability-config-preserve-comments* to enable and *--no-observability-config-preserve-comments* to disable",
};
const flag10641: Fig.Option = {
  name: "--observability-config-query-plans-per-minute",
  description:
    "Number of query plans to sample every minute.\n        Default value is 20. Allowed range: 0 to 200",
  args: {
    name: "OBSERVABILITY_CONFIG_QUERY_PLANS_PER_MINUTE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag10642: Fig.Option = {
  name: "--observability-config-record-application-tags",
  description:
    "Allow application tags to be recorded by the enhanced query\n        insights feature.\n+\nUse *--observability-config-record-application-tags* to enable and *--no-observability-config-record-application-tags* to disable",
};
const flag10643: Fig.Option = {
  name: "--observability-config-track-active-queries",
  description:
    "Track actively running queries. Use *--observability-config-track-active-queries* to enable and *--no-observability-config-track-active-queries* to disable",
};
const flag10644: Fig.Option = {
  name: "--observability-config-track-wait-events",
  description: "Track wait events during query execution",
};
const flag10984: Fig.Option = {
  name: "--outbound-public-ip",
  description:
    "Add outbound Public IP connectivity to an AlloyDB instance. Use *--outbound-public-ip* to enable and *--no-outbound-public-ip* to disable",
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
const flag11165: Fig.Option = {
  name: "--password",
  description:
    "Initial postgres user password to set up during cluster creation",
  args: { name: "PASSWORD", description: "String", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11827: Fig.Option = {
  name: "--psc-auto-connections",
  description:
    'Comma-separated list of consumer project and consumer network pairs to create endpoints for Private Service Connect (PSC) connectivity for the instance. Only instances in PSC-enabled clusters are allowed to set this field. Both project and network must be specified. (e.g., `--psc-auto-connections=project=project1,network=projects/vpc-host-project1/global/networks/network1` `--psc-auto-connections=project=project2,network=projects/vpc-host-project2/global/networks/network2`). Sets `psc_auto_connections` value.\n+\n*network*:::\nRequired, sets `network` value.\n+\n*project*:::\nRequired, sets `project` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--psc-auto-connections=network=string,project=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--psc-auto-connections=\'{"network": "string", "project": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--psc-auto-connections=path_to_file.(yaml|json)\n+\n```',
  args: { name: "PSC_AUTO_CONNECTIONS", description: "Dict", suggestions: [] },
};
const flag11833: Fig.Option = {
  name: "--psc-network-attachment-uri",
  description:
    "Full URI of the network attachment that is configured to support outbound connectivity from an AlloyDB instance which uses Private Service Connect (PSC). For example, this would be of the form:`psc-network-attachment-uri=projects/test-project/regions/us-central1/networkAttachments/my-na`",
  args: {
    name: "PSC_NETWORK_ATTACHMENT_URI",
    description: "String",
    suggestions: [],
  },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag11997: Fig.Option = {
  name: "--read-pool-node-count",
  description: "Read capacity, i.e. number of nodes in a read pool instance",
  args: { name: "READ_POOL_NODE_COUNT", description: "Int", suggestions: [] },
};
const flag12282: Fig.Option = {
  name: "--region",
  description:
    "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list clusters in all regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12335: Fig.Option = {
  name: "--region",
  description:
    "Regional location (e.g. `asia-east1`, `us-east1`). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12880: Fig.Option = {
  name: "--require-connectors",
  description:
    "Enable or disable enforcing connectors only (ex: AuthProxy) connections to the database. Use *--require-connectors* to enable and *--no-require-connectors* to disable",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14551: Fig.Option = {
  name: "--subscription-type",
  description:
    "Subscription type of the cluster. _SUBSCRIPTION_TYPE_ must be one of: *STANDARD*, *TRIAL*",
  args: {
    name: "SUBSCRIPTION_TYPE",
    description:
      "Googlecloudsdk.generated_clients.apis.alloydb.v1.alloydb_v1_messages:SubscriptionTypeValueValuesEnum",
    suggestions: ["STANDARD", "TRIAL"],
  },
};
const flag14641: Fig.Option = {
  name: "--tags",
  description:
    "List of tags KEY=VALUE pairs to bind.\nEach item must be expressed as\n`<tag-key-namespaced-name>=<tag-value-short-name>`.\n+\nExample: `123/environment=production,123/costCenter=marketing`",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
  name: "alloydb",
  description: "Create and manage AlloyDB databases",
  subcommands: [
    {
      name: "backups",
      description: "Provide commands for managing AlloyDB backups",
      subcommands: [
        {
          name: "create",
          description: "Creates a new AlloyDB backup within a given project",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--region",
              description: "The region of the cluster to backup",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14641,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP",
            description:
              "The AlloyDB backup to create. This must either be the backup ID (myBackup) or the full backup path (projects/myProject/locations/us-central1/backups/myBackup). In the first case, the project and location are assumed to be the same as the cluster being backed up. The second form can be used to create cross-region and cross-project backups",
          },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB backup within a given project",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "BACKUP", description: "AlloyDB backup ID" },
        },
        {
          name: "describe",
          description:
            "Describes an AlloyDB backup in a given project and region",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "BACKUP", description: "AlloyDB backup ID" },
        },
        {
          name: "list",
          description: "Lists AlloyDB backups in a given project",
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
            flag12282,
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
      name: "clusters",
      description: "Provide commands for managing AlloyDB clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a new AlloyDB cluster within a given project",
          options: [
            flag42,
            flag46,
            flag415,
            flag720,
            flag869,
            flag873,
            flag870,
            flag871,
            flag872,
            flag877,
            flag878,
            flag883,
            flag885,
            {
              name: "--backupdr-backup-plan",
              description:
                "The resource name of the BackupDR backup plan to associate with the cluster. The format should be projects/{project}/locations/{location}/backupPlans/{backupPlanId}. This flag cannot be used with the --async flag",
              args: {
                name: "BACKUPDR_BACKUP_PLAN",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag2456,
            flag2453,
            flag2454,
            flag2455,
            flag2457,
            flag2768,
            flag2997,
            flag3000,
            flag3004,
            flag3545,
            flag4081,
            flag4104,
            flag4267,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag7356,
            flag7479,
            flag7499,
            flag8251,
            flag11165,
            flag11637,
            flag11946,
            flag12335,
            flag14551,
            flag14641,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "create-secondary",
          description:
            "Create a new AlloyDB SECONDARY cluster within a given project",
          options: [
            flag42,
            flag46,
            flag415,
            flag720,
            flag868,
            flag873,
            flag870,
            flag871,
            flag872,
            flag877,
            flag878,
            flag882,
            {
              name: "--automated-backup-window",
              description:
                "The length of the time window beginning at start time during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour",
              args: {
                name: "TIMEOUT_PERIOD",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag2456,
            flag2453,
            flag2454,
            flag2455,
            flag2457,
            {
              name: "--enable-automated-backup",
              description: "Enables Automated Backups on the cluster",
            },
            flag4081,
            flag4104,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag7356,
            {
              name: "--primary-cluster",
              description: "AlloyDB primary cluster ID",
              args: {
                name: "PRIMARY_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12335,
            flag14641,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "delete",
          description: "Delete an AlloyDB cluster in a given region",
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
                "Default value is false.\n+\nIf flag is specified, deletes instances (if any) within this cluster, before deleting the cluster.\n+\nIf flag is not specified, cluster delete will fail if there are instances present in the cluster",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "describe",
          description:
            "Describe an AlloyDB cluster in a given project and region",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "export",
          description:
            "Export data from an AlloyDB cluster to Google Cloud Storage",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clean-target-objects",
              description:
                "If true, output commands to DROP all the dumped database objects prior to outputting the commands for creating them",
            },
            flag2292,
            { name: "--csv", description: "Specifies destination file type" },
            {
              name: "--database",
              description: "Database name",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--escape-character",
              description: "Escape character to be used for export",
              args: {
                name: "ESCAPE_CHARACTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--field-delimiter",
              description: "Field delimiter to be used for export",
              args: {
                name: "FIELD_DELIMITER",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-uri",
              description:
                "Path to the Google Cloud Storage file to which export has to be done",
              args: { name: "GCS_URI", description: "String", suggestions: [] },
            },
            flag5453,
            {
              name: "--if-exist-target-objects",
              description:
                "If true, use DROP ... IF EXISTS commands to check for the object's existence before dropping it in clean_target_objects mode",
            },
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--quote-character",
              description: "Quote character to be used for export",
              args: {
                name: "QUOTE_CHARACTER",
                description: "String",
                suggestions: [],
              },
            },
            flag12335,
            {
              name: "--schema-only",
              description: "Export only schema of the database",
            },
            {
              name: "--select-query",
              description: "Select query to be used for export",
              args: {
                name: "SELECT_QUERY",
                description: "String",
                suggestions: [],
              },
            },
            { name: "--sql", description: "Specifies destination file type" },
            {
              name: "--tables",
              description:
                "Comma-separated list of table names which need to be exported",
              args: { name: "TABLES", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "import",
          description:
            "Import data into an AlloyDB cluster from Google Cloud Storage",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--columns",
              description:
                "Comma-separated list of column names to be used for import",
              args: { name: "COLUMNS", description: "String", suggestions: [] },
            },
            flag2292,
            { name: "--csv", description: "Specify source file type" },
            {
              name: "--database",
              description: "Database name",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--escape-character",
              description: "Escape character in the source file",
              args: {
                name: "ESCAPE_CHARACTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--field-delimiter",
              description: "Field delimiter in the source file",
              args: {
                name: "FIELD_DELIMITER",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-uri",
              description:
                "Path to the Google Cloud Storage file from which import has to be done",
              args: { name: "GCS_URI", description: "String", suggestions: [] },
            },
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--quote-character",
              description: "Quote character in the source file",
              args: {
                name: "QUOTE_CHARACTER",
                description: "String",
                suggestions: [],
              },
            },
            flag12335,
            { name: "--sql", description: "Specify source file type" },
            {
              name: "--table",
              description: "Table name to which the data has to be imported",
              args: { name: "TABLE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--user",
              description: "Database user for the import",
              args: { name: "USER", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "list",
          description: "List AlloyDB clusters in a given project and region",
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
            flag12282,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "migrate-cloud-sql",
          description:
            "Migrate Cloud SQL instance to an AlloyDB cluster using an existing Cloud SQL backup",
          options: [
            flag42,
            flag46,
            flag415,
            flag720,
            flag869,
            flag873,
            flag870,
            flag871,
            flag872,
            flag877,
            flag878,
            flag883,
            flag885,
            flag1201,
            {
              name: "--cloud-sql-backup-id",
              description:
                "CloudSQL backup ID to migrate from. This must be the backup ID (myBackup)",
              args: {
                name: "CLOUD_SQL_BACKUP_ID",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--cloud-sql-instance-id",
              description:
                "CloudSQL instance ID to migrate from. This must be the instance ID (myInstance)",
              args: {
                name: "CLOUD_SQL_INSTANCE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--cloud-sql-project-id",
              description:
                "CloudSQL project to migrate from. This must be the project ID (myProject)",
              args: {
                name: "CLOUD_SQL_PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag2456,
            flag2453,
            flag2454,
            flag2455,
            flag2457,
            flag2768,
            flag2997,
            flag3000,
            flag3004,
            flag3545,
            flag4081,
            flag4104,
            flag4267,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag7356,
            flag7479,
            flag7499,
            flag8251,
            flag11165,
            flag11637,
            flag11946,
            flag12335,
            flag14551,
            flag14641,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "promote",
          description:
            "Promote an AlloyDB SECONDARY cluster in a given project and region",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "restore",
          description:
            "Restore an AlloyDB cluster from a given backup or a source cluster and a timestamp",
          options: [
            flag42,
            flag46,
            flag415,
            flag720,
            {
              name: "--backup",
              description:
                "AlloyDB backup to restore from. This must either be the full backup name (projects/myProject/locations/us-central1/backups/myBackup) or the backup ID (myBackup). In the second case, the project and location are assumed to be the same as the restored cluster that is being created",
              args: { name: "BACKUP", description: "String", suggestions: [] },
            },
            flag1201,
            flag2292,
            flag4104,
            flag4267,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag7356,
            flag8251,
            {
              name: "--point-in-time",
              description:
                "Point in time to restore to, in RFC 3339 format. For example, 2012-11-15T16:19:00.094Z",
              args: {
                name: "POINT_IN_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12335,
            {
              name: "--source-cluster",
              description:
                "AlloyDB source cluster to restore from. This must either be the full cluster name (projects/myProject/locations/us-central1/backups/myCluster) or the cluster ID (myCluster). In the second case, the project and location are assumed to be the same as the restored cluster that is being created",
              args: {
                name: "SOURCE_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            flag14641,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "switchover",
          description:
            "Switchover an AlloyDB SECONDARY cluster in a given project and region",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "update",
          description:
            "Update an AlloyDB cluster within a given project and region",
          options: [
            flag42,
            flag46,
            flag720,
            flag868,
            flag873,
            flag870,
            flag871,
            flag872,
            flag877,
            flag878,
            flag882,
            flag885,
            flag1201,
            {
              name: "--clear-automated-backup",
              description:
                "Clears the automated backup policy on the cluster. The default automated backup policy will be used",
            },
            {
              name: "--clear-continuous-backup-encryption-key",
              description:
                "Clears the encryption configuration for Continuous Backups. Google default encryption will be used for future Continuous Backups",
            },
            flag2292,
            flag2456,
            flag2453,
            flag2454,
            flag2455,
            flag2457,
            flag2997,
            flag3000,
            flag3004,
            flag3545,
            flag4081,
            flag4104,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--maintenance-version",
              description:
                "Maintenance version to update the cluster to. Use `latest` to apply the latest available maintenance version",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Remove the user-specified maintenance window",
            },
            flag7479,
            flag7499,
            flag11637,
            flag11946,
            flag12335,
            {
              name: "--remove-deny-maintenance-period",
              description: "Remove the deny maintenance period",
            },
            flag14551,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
        {
          name: "upgrade",
          description:
            "Upgrade an AlloyDB cluster within a given project and region",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "CLUSTER", description: "AlloyDB cluster ID" },
        },
      ],
    },
    {
      name: "instances",
      description: "Provide commands for managing AlloyDB instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a new AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag417,
            flag473,
            flag706,
            flag720,
            flag798,
            flag955,
            flag1201,
            flag2070,
            flag2292,
            flag2309,
            flag2310,
            flag2311,
            flag2312,
            flag2313,
            flag2314,
            flag2315,
            flag2316,
            flag2317,
            flag2318,
            flag2319,
            flag2509,
            flag2745,
            flag4080,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5820,
            flag5821,
            flag5823,
            flag5825,
            {
              name: "--instance-type",
              description:
                "Specifies instance type. _INSTANCE_TYPE_ must be one of:\n+\n*PRIMARY*::: PRIMARY instances support read and write operations.\n*READ_POOL*::: READ_POOL instances support read operations only. Each read pool instance consists of one or more homogeneous nodes.   * Read pool of size 1 can only have zonal availability.   * Read pools with node count of 2 or more can have      regional availability (nodes are present in 2 or      more zones in a region).\n:::\n+",
              args: {
                name: "INSTANCE_TYPE",
                description: "String",
                suggestions: ["PRIMARY", "READ_POOL"],
              },
            },
            flag6413,
            flag7356,
            flag7440,
            flag10638,
            flag10639,
            flag10640,
            flag10641,
            flag10642,
            flag10643,
            flag10644,
            flag10984,
            flag11637,
            flag11827,
            flag11833,
            flag11946,
            flag11997,
            flag12335,
            flag12880,
            {
              name: "--ssl-mode",
              description:
                "Specify the SSL mode to use when the instance connects to the database. Default SSL mode is ENCRYPTED_ONLY. _SSL_MODE_ must be one of:\n+\n*ALLOW_UNENCRYPTED_AND_ENCRYPTED*::: SSL connections are optional. CA verification is not enforced.\n*ENCRYPTED_ONLY*::: SSL connections are required. CA verification is not enforced.\n:::\n+",
              args: {
                name: "SSL_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
                  "ENCRYPTED_ONLY",
                ],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "create-secondary",
          description:
            "Creates a new AlloyDB SECONDARY instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag417,
            flag473,
            flag706,
            flag720,
            flag798,
            flag955,
            flag1201,
            flag2070,
            flag2292,
            flag2309,
            flag2310,
            flag2311,
            flag2312,
            flag2313,
            flag2314,
            flag2315,
            flag2316,
            flag2317,
            flag2318,
            flag2319,
            flag2745,
            flag4080,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag10984,
            flag11637,
            flag11827,
            flag11833,
            flag11946,
            flag12335,
            flag12880,
            {
              name: "--ssl-mode",
              description:
                "Specify the SSL mode to use when the instance connects to the database. Default SSL mode will match what is set on the primary instance. _SSL_MODE_ must be one of:\n+\n*ALLOW_UNENCRYPTED_AND_ENCRYPTED*::: SSL connections are optional. CA verification is not enforced.\n*ENCRYPTED_ONLY*::: SSL connections are required. CA verification is not enforced.\n:::\n+",
              args: {
                name: "SSL_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
                  "ENCRYPTED_ONLY",
                ],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "describe",
          description: "Describes an AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--view",
              description:
                "View of the instance to return. _VIEW_ must be one of: *basic*, *full*",
              args: {
                name: "VIEW",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "failover",
          description: "Failover an AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "inject-fault",
          description:
            "Inject fault on an AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2070,
            flag2292,
            {
              name: "--fault-type",
              description:
                "Specifies fault type. _FAULT_TYPE_ must be (only one value is supported):\n+\n*stop-vm*::: stop-vm fault type supports stopping the VM.\n:::\n+",
              args: {
                name: "FAULT_TYPE",
                description: "String",
                suggestions: ["stop-vm"],
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "list",
          description: "Lists AlloyDB instances in a given cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description: "AlloyDB cluster ID",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
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
                "Regional location (e.g. asia-east1, us-east1) of CLUSTER. See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list clusters in all regions",
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
          name: "restart",
          description: "Restarts an AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--node-ids",
              description:
                "Comma-separated list of node IDs. Only supported for read pool instances. (e.g., `--node-ids=node-1,node-2,node-3`)",
              args: { name: "NODE_IDS", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
        {
          name: "update",
          description: "Updates an AlloyDB instance within a given cluster",
          options: [
            flag42,
            flag46,
            {
              name: "--activation-policy",
              description:
                "Activation Policy for the instance. Required to START or STOP an instance. ALWAYS - The instance is up and running. NEVER - The instance is stopped. _ACTIVATION_POLICY_ must be one of: *ALWAYS*, *NEVER*",
              args: {
                name: "ACTIVATION_POLICY",
                description:
                  "Googlecloudsdk.generated_clients.apis.alloydb.v1.alloydb_v1_messages:ActivationPolicyValueValuesEnum",
                suggestions: ["ALWAYS", "NEVER"],
              },
            },
            flag473,
            flag706,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete. The default is *True*. Enabled by default, use *--no-async* to disable",
            },
            flag798,
            flag955,
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            {
              name: "--clear-psc-auto-connections",
              description:
                "Remove all PSC auto connections for an AlloyDB instance",
            },
            {
              name: "--clear-psc-network-attachment-uri",
              description:
                "Disable outbound connectivity from an AlloyDB instance which uses Private Service Connect (PSC)",
            },
            flag2070,
            flag2292,
            flag2309,
            flag2310,
            flag2311,
            flag2312,
            flag2313,
            flag2314,
            flag2315,
            flag2316,
            flag2317,
            flag2318,
            flag2319,
            flag2509,
            flag2745,
            flag4080,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5820,
            flag5821,
            flag5823,
            flag5825,
            flag7356,
            flag7440,
            flag10638,
            flag10639,
            flag10640,
            flag10641,
            flag10642,
            flag10643,
            flag10644,
            flag10984,
            flag11637,
            flag11827,
            flag11833,
            flag11946,
            flag11997,
            flag12335,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag12880,
            {
              name: "--ssl-mode",
              description:
                "Specify the SSL mode to use when the instance connects to the database. _SSL_MODE_ must be one of:\n+\n*ALLOW_UNENCRYPTED_AND_ENCRYPTED*::: SSL connections are optional. CA verification is not enforced.\n*ENCRYPTED_ONLY*::: SSL connections are required. CA verification is not enforced.\n:::\n+",
              args: {
                name: "SSL_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
                  "ENCRYPTED_ONLY",
                ],
              },
            },
            flag14975,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "AlloyDB instance ID" },
        },
      ],
    },
    {
      name: "operations",
      description: "Provide commands for managing AlloyDB operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels an AlloyDB operation",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION", description: "AlloyDB operation ID" },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB operation",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION", description: "AlloyDB operation ID" },
        },
        {
          name: "describe",
          description: "Describes an AlloyDB operation",
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
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION", description: "AlloyDB operation ID" },
        },
        {
          name: "list",
          description: "Lists AlloyDB operations",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description: "AlloyDB cluster ID",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
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
                "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations. Default: list operations in all regions",
              args: { name: "REGION", description: "String", suggestions: [] },
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
      name: "users",
      description: "Provide commands for managing AlloyDB users",
      subcommands: [
        {
          name: "create",
          description: "Creates a user in a given cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
            flag2292,
            {
              name: "--db-roles",
              description:
                "Comma separated list of database roles this new user will be granted upon creation",
              args: { name: "ROLE", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6203,
            flag7356,
            {
              name: "--password",
              description: "Password for this database user",
              args: {
                name: "PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12335,
            {
              name: "--superuser",
              description:
                "If true, new user will have AlloyDB superuser privileges. Default value is false",
              args: { name: "SUPERUSER", description: "Int", suggestions: [] },
            },
            flag14975,
            {
              name: "--type",
              description:
                "Type corresponds to the user type. _TYPE_ must be one of:\n+\n*BUILT_IN*::: This database user can authenticate via password-based authentication\n*IAM_BASED*::: This database user can authenticate via IAM-based authentication\n*IAM_GROUP*::: This database user represents an IAM group whose members can authenticate via IAM group-based authentication\n:::\n+",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["BUILT_IN", "IAM_BASED", "IAM_GROUP"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "AlloyDB username" },
        },
        {
          name: "delete",
          description: "Deletes an AlloyDB user in a given cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "AlloyDB username" },
        },
        {
          name: "list",
          description: "Lists AlloyDB users in a given cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
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
            flag12335,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-password",
          description:
            "Update an AlloyDB user's password within a given cluster and region",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--password",
              description: "Password for this database user",
              args: {
                name: "PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "AlloyDB username" },
        },
        {
          name: "set-roles",
          description:
            "Update an AlloyDB user's database roles within a given cluster and region",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
            flag2292,
            {
              name: "--db-roles",
              description:
                "Comma separated list of database roles this new user will be granted upon creation",
              args: { name: "ROLE", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6203,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "AlloyDB username" },
        },
        {
          name: "set-superuser",
          description:
            "Update an AlloyDB user's superuser role within a given cluster and region",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2070,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12335,
            {
              name: "--superuser",
              description:
                "If true, user will have AlloyDB superuser privileges",
              args: { name: "SUPERUSER", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "AlloyDB username" },
        },
      ],
    },
  ],
};

export default completionSpec;
