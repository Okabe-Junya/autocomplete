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
const flag101: Fig.Option = {
  name: "--activation-policy",
  description:
    "Activation policy for this instance. This specifies when the instance should be activated and is applicable only when the instance state is `RUNNABLE`. The default is `always`. More information on activation policies can be found here: https://cloud.google.com/sql/docs/mysql/start-stop-restart-instance#activation_policy. _ACTIVATION_POLICY_ must be one of: *always*, *never*",
  args: {
    name: "ACTIVATION_POLICY",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["always", "never"],
  },
};
const flag104: Fig.Option = {
  name: "--active-directory-dns-servers",
  description:
    "A comma-separated list of the DNS servers to be used for Active Directory. Only available for SQL Server instances. E.g: 10.0.0.1,10.0.0.2",
  args: { name: "DNS_SERVER_IP_ADDRESS", description: "List", suggestions: [] },
};
const flag105: Fig.Option = {
  name: "--active-directory-domain",
  description:
    "Managed Service for Microsoft Active Directory domain this instance is joined to. Only available for SQL Server instances",
  args: {
    name: "ACTIVE_DIRECTORY_DOMAIN",
    description: "String",
    suggestions: [],
  },
};
const flag106: Fig.Option = {
  name: "--active-directory-mode",
  description:
    "Defines the Active Directory mode. Only available for SQL Server instances. _ACTIVE_DIRECTORY_MODE_ must be one of: *MANAGED_ACTIVE_DIRECTORY*, *CUSTOMER_MANAGED_ACTIVE_DIRECTORY*",
  args: {
    name: "ACTIVE_DIRECTORY_MODE",
    description: "String",
    suggestions: [
      "MANAGED_ACTIVE_DIRECTORY",
      "CUSTOMER_MANAGED_ACTIVE_DIRECTORY",
    ],
  },
};
const flag107: Fig.Option = {
  name: "--active-directory-organizational-unit",
  description:
    "Defines the organizational unit to be used for Active Directory. Only available for SQL Server instances. E.g: OU=Cloud,DC=ad,DC=example,DC=com",
  args: {
    name: "ACTIVE_DIRECTORY_ORGANIZATIONAL_UNIT",
    description: "String",
    suggestions: [],
  },
};
const flag108: Fig.Option = {
  name: "--active-directory-secret-manager-key",
  description:
    "The secret manager key storing administrator credentials. Only available for SQL Server instances",
  args: {
    name: "ACTIVE_DIRECTORY_SECRET_MANAGER_KEY",
    description: "String",
    suggestions: [],
  },
};
const flag472: Fig.Option = {
  name: "--allowed-psc-projects",
  description:
    "A comma-separated list of projects. Each project in this list might be represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be established from specified consumer projects",
  args: { name: "PROJECT", description: "List", suggestions: [] },
};
const flag707: Fig.Option = {
  name: "--assign-ip",
  description:
    "Assign a public IP address to the instance. This is a public, externally available IPv4 address that you can use to connect to your instance when properly authorized. Use *--assign-ip* to enable and *--no-assign-ip* to disable",
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag773: Fig.Option = {
  name: "--audit-bucket-path",
  description:
    "The location, as a Cloud Storage bucket, to which audit files are uploaded. The URI is in the form gs://bucketName/folderName. Only available for SQL Server instances",
  args: { name: "AUDIT_BUCKET_PATH", description: "String", suggestions: [] },
};
const flag775: Fig.Option = {
  name: "--audit-retention-interval",
  description:
    "The number of days for audit log retention on disk, for example, 3dfor 3 days. Only available for SQL Server instances",
  args: {
    name: "AUDIT_RETENTION_INTERVAL",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag776: Fig.Option = {
  name: "--audit-upload-interval",
  description:
    "How often to upload audit logs (audit files), for example, 30mfor 30 minutes. Only available for SQL Server instances",
  args: {
    name: "AUDIT_UPLOAD_INTERVAL",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag806: Fig.Option = {
  name: "--authorized-networks",
  description:
    "The list of external networks that are allowed to connect to the instance. Specified in CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24)",
  args: { name: "NETWORK", description: "List", suggestions: [] },
};
const flag849: Fig.Option = {
  name: "--auto-scale-disable-scale-in",
  description:
    "Disables automatic read pool scale-in. When disabled, read pool auto scaling only supports increasing the read pool node count. By default, both automatic read pool scale-in and scale-out are enabled. Use *--auto-scale-disable-scale-in* to enable and *--no-auto-scale-disable-scale-in* to disable",
};
const flag851: Fig.Option = {
  name: "--auto-scale-enabled",
  description:
    "Enables read pool auto scaling. Supports automatically increasing and decreasing the read pool's node count based on need. Use *--auto-scale-enabled* to enable and *--no-auto-scale-enabled* to disable",
};
const flag853: Fig.Option = {
  name: "--auto-scale-in-cooldown-seconds",
  description:
    "The cooldown period for automatic read pool scale-in. Minimum time between scale-in events. Must be an integer value. For example, if the value is 60, then a scale-in event will not be triggered within 60 seconds of the last scale-in event",
  args: {
    name: "AUTO_SCALE_IN_COOLDOWN_SECONDS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag855: Fig.Option = {
  name: "--auto-scale-max-node-count",
  description: "Maximum number of read pool nodes to be maintained",
  args: {
    name: "AUTO_SCALE_MAX_NODE_COUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag857: Fig.Option = {
  name: "--auto-scale-min-node-count",
  description: "Minimum number of read pool nodes to be maintained",
  args: {
    name: "AUTO_SCALE_MIN_NODE_COUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag859: Fig.Option = {
  name: "--auto-scale-out-cooldown-seconds",
  description:
    "The cooldown period for automatic read pool scale-out. Minimum time between scale-out events. Must be an integer value. For example, if the value is 60, then a scale-out event will not be triggered within 60 seconds of the last scale-out event",
  args: {
    name: "AUTO_SCALE_OUT_COOLDOWN_SECONDS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag861: Fig.Option = {
  name: "--auto-scale-target-metrics",
  description:
    "Target metrics for read pool auto scaling. Options are: AVERAGE_CPU_UTILIZATION and AVERAGE_DB_CONNECTIONS. Example: --auto-scale-target-metrics=AVERAGE_CPU_UTILIZATION=0.8",
  args: { name: "METRIC=VALUE", description: "Dict", suggestions: [] },
};
const flag956: Fig.Option = {
  name: "--availability-type",
  description:
    "Specifies level of availability. _AVAILABILITY_TYPE_ must be one of:\n+\n*regional*::: Provides high availability and is recommended for production instances; instance automatically fails over to another zone within your selected region.\n*zonal*::: Provides no failover capability. This is the default.\n:::\n+",
  args: {
    name: "AVAILABILITY_TYPE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["regional", "zonal"],
  },
};
const flag1029: Fig.Option = {
  name: "--backup-location",
  description:
    "Choose where to store your backups. Backups are stored in the closest multi-region location to you by default. Only customize if needed",
  args: { name: "BACKUP_LOCATION", description: "String", suggestions: [] },
};
const flag1048: Fig.Option = {
  name: "--backup-start-time",
  description:
    "Start time of daily backups, specified in the HH:MM format, in the UTC timezone",
  args: { name: "BACKUP_START_TIME", description: "String", suggestions: [] },
};
const flag1061: Fig.Option = {
  name: "--backup",
  description:
    "Enables daily backup. Enabled by default, use *--no-backup* to disable",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1412: Fig.Option = {
  name: "--cert-path",
  description:
    "Path to the encryption certificate file in Google Cloud Storage. The URI is in the form `gs://bucketName/fileName`",
  args: { name: "CERT_PATH", description: "String", suggestions: [] },
};
const flag1423: Fig.Option = {
  name: "--certificate",
  description: "Name of the encryption certificate",
  args: { name: "CERTIFICATE", description: "String", suggestions: [] },
};
const flag1435: Fig.Option = {
  name: "--charset",
  description:
    "Cloud SQL database charset setting, which specifies the set of symbols and encodings used to store the data in your database. Each database version may support a different set of charsets",
  args: { name: "CHARSET", description: "String", suggestions: [] },
};
const flag1470: Fig.Option = {
  name: "--clear-active-directory-dns-servers",
  description:
    "Removes the list of DNS Servers from the Active Directory Config",
};
const flag1471: Fig.Option = {
  name: "--clear-active-directory",
  description: "Clears the Active Directory configuration",
};
const flag1618: Fig.Option = {
  name: "--clear-disk-encryption",
  description: "Disables CMEK in the restored instance",
  args: {
    name: "CLEAR_DISK_ENCRYPTION",
    description: "String",
    suggestions: [],
  },
};
const flag1795: Fig.Option = {
  name: "--clear-network",
  description:
    "Clears the network setting. This is useful to restore a backup to a different project or region where the original network configuration isn't available",
};
const flag1814: Fig.Option = {
  name: "--clear-password-policy",
  description:
    "Clear the existing password policy. This flag is only available for Postgres",
};
const flag2113: Fig.Option = {
  name: "--collation",
  description:
    "Cloud SQL server-level collation setting, which specifies the set of rules for comparing characters in a character set",
  args: { name: "COLLATION", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2308: Fig.Option = {
  name: "--connection-pool-flags",
  description:
    "Comma-separated list of connection pool flags to set on the instance connection pool. Use an equals sign to separate flag name and value. More information on available flags can be found here: https://cloud.google.com/sql/docs/mysql/managed-connection-pooling#configuration-options for MySQL and https://cloud.google.com/sql/docs/postgres/managed-connection-pooling#configuration-options for PostgreSQL. (e.g., `--connection-pool-flags max_pool_size=1000,max_client_connections=20`)",
  args: { name: "FLAG=VALUE", description: "Dict", suggestions: [] },
};
const flag2335: Fig.Option = {
  name: "--connector-enforcement",
  description:
    "Cloud SQL Connector enforcement mode. It determines how Cloud SQL Connectors are used in the connection. See the list of modes [here](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#connectorenforcement). _CONNECTOR_ENFORCEMENT_ must be one of:\n+\n*CONNECTOR_ENFORCEMENT_UNSPECIFIED*::: The requirement for Cloud SQL connectors is unknown.\n*NOT_REQUIRED*::: Does not require Cloud SQL connectors.\n*REQUIRED*::: Requires all connections to use Cloud SQL connectors, including the Cloud SQL Auth Proxy and Cloud SQL Java, Python, and Go connectors. Note: This disables all existing authorized networks.\n:::\n+",
  args: {
    name: "CONNECTOR_ENFORCEMENT",
    description: "String",
    suggestions: [
      "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
      "NOT_REQUIRED",
      "REQUIRED",
    ],
  },
};
const flag2518: Fig.Option = {
  name: "--cpu",
  description:
    "Whole number value indicating how many cores are desired in the machine. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted.--cpu and --memory flags are not compatible with the Enterprise Plus edition. These flags should not be used when creating an Enterprise Plus edition, as the machine configuration is determined by the --tier flag instead",
  args: { name: "CPU", description: "Int", suggestions: [] },
};
const flag2657: Fig.Option = {
  name: "--custom-subject-alternative-names",
  description:
    "A comma-separated list of DNS names to add to the instance's SSL certificate. A custom SAN is a structured way to add additional DNS names (host names) that are not managed by Cloud SQL to an instance. It allows for hostname verification during establishment of a database connection using the DNS name over SSL/TLS. When you create and/or update an instance, you can add a comma-separated list of up to three DNS names to the server certificate of your instance",
  args: { name: "DNS", description: "List", suggestions: [] },
};
const flag2676: Fig.Option = {
  name: "--data-api-access",
  description:
    "Controls connectivity to the instance using ExecuteSql API. _DATA_API_ACCESS_ must be one of:\n+\n*ALLOW_DATA_API*::: Allow using ExecuteSql API to connect to the instance. For Private IP instances, this will allow authorized users to access the instance from the public internet using ExecuteSql API.\n*DATA_API_ACCESS_UNSPECIFIED*::: Unspecified mode, effectively the same as `DISALLOW_DATA_API`.\n*DISALLOW_DATA_API*::: Disallow using ExecuteSql API to connect to the instance.\n:::\n+",
  args: {
    name: "DATA_API_ACCESS",
    description: "String",
    suggestions: [
      "ALLOW_DATA_API",
      "DATA_API_ACCESS_UNSPECIFIED",
      "DISALLOW_DATA_API",
    ],
  },
};
const flag2745: Fig.Option = {
  name: "--database-flags",
  description:
    "Comma-separated list of database flags to set on the instance. Use an equals sign to separate flag name and value. Flags without values, like skip_grant_tables, can be written out without a value after, e.g., `skip_grant_tables=`. Use on/off for booleans. View the Instance Resource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
  args: { name: "FLAG=VALUE", description: "Dict", suggestions: [] },
};
const flag2756: Fig.Option = {
  name: "--database-roles",
  description:
    "A comma-separated list of database roles to be assigned to the user.\nThis option is only available for MySQL and PostgreSQL instances. You\ncan include predefined Cloud SQL roles, like cloudsqlsuperuser, or your\nown custom roles. Custom roles must be created in the database before\nyou can assign them. You can create roles using the CREATE ROLE\nstatement for both MySQL and PostgreSQL",
  args: { name: "ROLE", description: "List", suggestions: [] },
};
const flag2765: Fig.Option = {
  name: "--database-version",
  description:
    "The database engine type and versions. If left unspecified, MYSQL_8_0 is used. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Apart from listed major versions, DATABASE_VERSION also accepts supported minor versions. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *MYSQL_8_4*, *MYSQL_9_7*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2019_EXPRESS*, *SQLSERVER_2019_WEB*, *SQLSERVER_2019_STANDARD*, *SQLSERVER_2019_ENTERPRISE*, *SQLSERVER_2022_EXPRESS*, *SQLSERVER_2022_WEB*, *SQLSERVER_2022_STANDARD*, *SQLSERVER_2022_ENTERPRISE*, *SQLSERVER_2025_EXPRESS*, *SQLSERVER_2025_STANDARD*, *SQLSERVER_2025_ENTERPRISE*",
  args: {
    name: "DATABASE_VERSION",
    description: "String",
    suggestions: [
      "MYSQL_5_6",
      "MYSQL_5_7",
      "MYSQL_8_0",
      "MYSQL_8_4",
      "MYSQL_9_7",
      "POSTGRES_9_6",
      "POSTGRES_10",
      "POSTGRES_11",
      "POSTGRES_12",
      "POSTGRES_13",
      "POSTGRES_14",
      "POSTGRES_15",
      "POSTGRES_16",
      "POSTGRES_17",
      "POSTGRES_18",
      "SQLSERVER_2017_EXPRESS",
      "SQLSERVER_2017_WEB",
      "SQLSERVER_2017_STANDARD",
      "SQLSERVER_2017_ENTERPRISE",
      "SQLSERVER_2019_EXPRESS",
      "SQLSERVER_2019_WEB",
      "SQLSERVER_2019_STANDARD",
      "SQLSERVER_2019_ENTERPRISE",
      "SQLSERVER_2022_EXPRESS",
      "SQLSERVER_2022_WEB",
      "SQLSERVER_2022_STANDARD",
      "SQLSERVER_2022_ENTERPRISE",
      "SQLSERVER_2025_EXPRESS",
      "SQLSERVER_2025_STANDARD",
      "SQLSERVER_2025_ENTERPRISE",
    ],
  },
};
const flag2770: Fig.Option = {
  name: "--database-version",
  description:
    "The database engine type and versions. If left unspecified, no changes occur. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Note for restore to new instance major version upgrades are not supported. Only minor version upgrades are allowed",
  args: { name: "DATABASE_VERSION", description: "String", suggestions: [] },
};
const flag2774: Fig.Option = {
  name: ["--database", "-d"],
  description:
    "Database to which the import is made. The database needs to be created before importing. If not set, it is assumed that the database is specified in the file to be imported. If your SQL dump file includes a database statement, it will override the database set in this flag",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2775: Fig.Option = {
  name: ["--database", "-d"],
  description:
    "Database(s) from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/mysql/admin-api/v1beta4/instances/export#exportContext.databases",
  args: { name: "DATABASE", description: "List", suggestions: [] },
};
const flag2965: Fig.Option = {
  name: "--deletion-protection",
  description:
    "Enable deletion protection on a Cloud SQL instance. Use *--deletion-protection* to enable and *--no-deletion-protection* to disable",
};
const flag2998: Fig.Option = {
  name: "--deny-maintenance-period-end-date",
  description:
    "Date when the deny maintenance period ends, that is ``2021-01-10''",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_END_DATE",
    description: "String",
    suggestions: [],
  },
};
const flag3001: Fig.Option = {
  name: "--deny-maintenance-period-start-date",
  description:
    "Date when the deny maintenance period begins, that is ``2020-11-01''",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_START_DATE",
    description: "String",
    suggestions: [],
  },
};
const flag3005: Fig.Option = {
  name: "--deny-maintenance-period-time",
  description:
    "Time when the deny maintenance period starts or ends, that is ``05:00:00''",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_TIME",
    description: "String",
    suggestions: [],
  },
};
const flag3654: Fig.Option = {
  name: "--disk-encryption-key-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--disk-encryption-key` on the command line with a fully specified name;\n* provide the argument `--disk-encryption-key-keyring` on the command line",
  args: {
    name: "DISK_ENCRYPTION_KEY_KEYRING",
    description: "String",
    suggestions: [],
  },
};
const flag3655: Fig.Option = {
  name: "--disk-encryption-key-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--disk-encryption-key` on the command line with a fully specified name;\n* provide the argument `--disk-encryption-key-location` on the command line",
  args: {
    name: "DISK_ENCRYPTION_KEY_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag3656: Fig.Option = {
  name: "--disk-encryption-key-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--disk-encryption-key` on the command line with a fully specified name;\n* provide the argument `--disk-encryption-key-project` on the command line;\n* set the property `core/project`",
  args: {
    name: "DISK_ENCRYPTION_KEY_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag3657: Fig.Option = {
  name: "--disk-encryption-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--disk-encryption-key` on the command line",
  args: { name: "DISK_ENCRYPTION_KEY", description: "String", suggestions: [] },
};
const flag3980: Fig.Option = {
  name: "--edition",
  description:
    "Specifies the edition of Cloud SQL instance. _EDITION_ must be one of: *enterprise*, *enterprise-plus*",
  args: {
    name: "EDITION",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["enterprise", "enterprise-plus"],
  },
};
const flag4028: Fig.Option = {
  name: "--enable-auto-upgrade-minor-version",
  description:
    "Enables auto-upgrade for MySQL 8.0 minor versions. The MySQL version must be 8.0.35 or higher",
};
const flag4056: Fig.Option = {
  name: "--enable-bin-log",
  description:
    "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
};
const flag4080: Fig.Option = {
  name: "--enable-connection-pooling",
  description:
    "Enable connection pooling for the instance. Use *--enable-connection-pooling* to enable and *--no-enable-connection-pooling* to disable",
};
const flag4092: Fig.Option = {
  name: "--enable-data-cache",
  description:
    "Enable use of data cache for accelerated read performance. This flag is only available for Enterprise_Plus edition instances. Use *--enable-data-cache* to enable and *--no-enable-data-cache* to disable",
};
const flag4102: Fig.Option = {
  name: "--enable-dataplex-integration",
  description:
    "Enable Dataplex integration for Google Cloud SQL. Use *--enable-dataplex-integration* to enable and *--no-enable-dataplex-integration* to disable",
};
const flag4138: Fig.Option = {
  name: "--enable-google-ml-integration",
  description:
    "Enable Vertex AI integration for Google Cloud SQL. You can integrate Vertex AI with Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances only. Use *--enable-google-ml-integration* to enable and *--no-enable-google-ml-integration* to disable",
};
const flag4141: Fig.Option = {
  name: "--enable-google-private-path",
  description:
    "Enable a private path for Google Cloud services. This flag specifies whether the instance is accessible to internal Google Cloud services such as BigQuery. This is only applicable to MySQL and PostgreSQL instances that don't use public IP. Currently, SQL Server isn't supported",
};
const flag4241: Fig.Option = {
  name: "--enable-password-policy",
  description:
    "Enable the password policy, which enforces user password management with\nthe policies configured for the instance. This flag is only available for Postgres",
};
const flag4251: Fig.Option = {
  name: "--enable-point-in-time-recovery",
  description:
    "Allows for data recovery from a specific point in time, down to a fraction of a second, using write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs",
};
const flag4269: Fig.Option = {
  name: "--enable-private-service-connect",
  description:
    "Enable connecting to the Cloud SQL instance with Private Service Connect",
};
const flag4274: Fig.Option = {
  name: "--enable-psc-auto-connection-policy",
  description:
    "If set, service connection policy will be created by Cloud SQL when missing for PSC enabled instance. Use *--enable-psc-auto-connection-policy* to enable and *--no-enable-psc-auto-connection-policy* to disable",
};
const flag4422: Fig.Option = {
  name: "--enforce-new-sql-network-architecture",
  description: "Force the instance to use the new network architecture",
};
const flag4438: Fig.Option = {
  name: "--entra-id-application-id",
  description: "Set the Entraid application ID",
  args: {
    name: "ENTRA_ID_APPLICATION_ID",
    description: "String",
    suggestions: [],
  },
};
const flag4439: Fig.Option = {
  name: "--entra-id-tenant-id",
  description: "Set the Entraid tenant ID",
  args: { name: "ENTRA_ID_TENANT_ID", description: "String", suggestions: [] },
};
const flag4503: Fig.Option = {
  name: "--escape",
  description:
    'Specifies the character that should appear before a data character that needs to be escaped. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. This flag is only available for MySQL and Postgres. If this flag is not provided, double quotes character will be used as the default value',
  args: { name: "ESCAPE", description: "String", suggestions: [] },
};
const flag4781: Fig.Option = {
  name: "--fields-terminated-by",
  description:
    'Specifies the character that splits column values. The value of this argument has to be a character in Hex ASCII Code. For example, "2C" represents a comma. This flag is only available for MySQL and Postgres. If this flag is not provided, a comma character will be used as the default value',
  args: {
    name: "FIELDS_TERMINATED_BY",
    description: "String",
    suggestions: [],
  },
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4867: Fig.Option = {
  name: "--final-backup-retention-days",
  description:
    "Specifies number of days to retain final backup. The valid range is between 1 and 365. For instances managed by BackupDR, the valid range is between 1 day and 10 years (3653 days). Default value is 30 days",
  args: {
    name: "FINAL_BACKUP_RETENTION_DAYS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag4868: Fig.Option = {
  name: "--final-backup",
  description:
    "Enables the final backup to be taken at the time of instance deletion. Use *--final-backup* to enable and *--no-final-backup* to disable",
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
const flag5144: Fig.Option = {
  name: "--gce-zone",
  description:
    "(DEPRECATED) Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.).\n+\nFlag `--gce-zone` is deprecated and will be removed by release 255.0.0. Use `--zone` instead",
  args: { name: "GCE_ZONE", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5481: Fig.Option = {
  name: "--host",
  description:
    "Cloud SQL user's hostname expressed as a specific IP address or address range. `%` denotes an unrestricted hostname. Applicable flag for MySQL instances; ignored for all other engines. Note, if you connect to your instance using IP addresses, you must add your client IP address as an authorized address, even if your hostname is unrestricted. For more information, see [Configure IP](https://cloud.google.com/sql/docs/mysql/configure-ip)",
  args: { name: "HOST", description: "String", suggestions: [] },
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
const flag5816: Fig.Option = {
  name: "--insights-config-enhanced-query-insights-enabled",
  description:
    "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query\n        analytics.\n+\nUse *--insights-config-enhanced-query-insights-enabled* to enable and *--no-insights-config-enhanced-query-insights-enabled* to disable",
};
const flag5817: Fig.Option = {
  name: "--insights-config-enhanced-query-insights-enabled",
  description:
    "Enable enhanced query insights for Enterprise Plus edition to provide more detailed query\n        analytics",
};
const flag5818: Fig.Option = {
  name: "--insights-config-query-insights-enabled",
  description:
    "Enable query insights feature to provide query and query plan\n        analytics.\n+\nUse *--insights-config-query-insights-enabled* to enable and *--no-insights-config-query-insights-enabled* to disable",
};
const flag5819: Fig.Option = {
  name: "--insights-config-query-insights-enabled",
  description:
    "Enable query insights feature to provide query and query plan\n        analytics",
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
const flag5822: Fig.Option = {
  name: "--insights-config-query-string-length",
  description:
    "Sets the default query length limit. For Cloud SQL Enterprise edition,\n      the range is from 256 to 4500 (in bytes) and the default query length is 1024\n      bytes. For Cloud SQL Enterprise Plus edition, the range is from 1024 to 100,000\n      (in bytes) and the default query length is 10,000 bytes",
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
const flag5824: Fig.Option = {
  name: "--insights-config-record-application-tags",
  description:
    "Allow application tags to be recorded by the query insights\n        feature",
};
const flag5825: Fig.Option = {
  name: "--insights-config-record-client-address",
  description:
    "Allow the client address to be recorded by the query insights\n        feature.\n+\nUse *--insights-config-record-client-address* to enable and *--no-insights-config-record-client-address* to disable",
};
const flag5826: Fig.Option = {
  name: "--insights-config-record-client-address",
  description:
    "Allow the client address to be recorded by the query insights\n        feature",
};
const flag5868: Fig.Option = {
  name: "--instance-type",
  description:
    "The type of the instance. _INSTANCE_TYPE_ must be one of:\n+\n*CLOUD_SQL_INSTANCE*::: A primary instance.\n*READ_POOL_INSTANCE*::: A read pool instance.\n*READ_REPLICA_INSTANCE*::: A read replica instance.\n:::\n+",
  args: {
    name: "INSTANCE_TYPE",
    description: "String",
    suggestions: [
      "CLOUD_SQL_INSTANCE",
      "READ_POOL_INSTANCE",
      "READ_REPLICA_INSTANCE",
    ],
  },
};
const flag5880: Fig.Option = {
  name: ["--instance", "-i"],
  description: "Cloud SQL instance ID",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5881: Fig.Option = {
  name: ["--instance", "-i"],
  description: "Cloud SQL instance ID",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
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
const flag6524: Fig.Option = {
  name: "--lines-terminated-by",
  description:
    'Specifies the character that split line records. The value of this argument has to be a character in Hex ASCII Code. For example, "0A" represents a new line. This flag is only available for MySQL. If this flag is not provided, a new line character will be used as the default value',
  args: { name: "LINES_TERMINATED_BY", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7469: Fig.Option = {
  name: "--maintenance-release-channel",
  description:
    "Which channel's updates to apply during the maintenance window. If not specified, Cloud SQL chooses the timing of updates to your instance. _MAINTENANCE_RELEASE_CHANNEL_ must be one of:\n+\n*preview*::: Preview updates release prior to production updates. You may wish to use the preview channel for dev/test applications so that you can preview their compatibility with your application prior to the production release.\n*production*::: Production updates are stable and recommended for applications in production.\n*week5*::: week5 updates release after the production updates. Use the week5 channel to receive a 5 week advance notification about the upcoming maintenance, so you can prepare your application for the release.\n:::\n+",
  args: {
    name: "MAINTENANCE_RELEASE_CHANNEL",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["preview", "production", "week5"],
  },
};
const flag7480: Fig.Option = {
  name: "--maintenance-window-day",
  description:
    "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *SUN*, *MON*, *TUE*, *WED*, *THU*, *FRI*, *SAT*",
  args: {
    name: "MAINTENANCE_WINDOW_DAY",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  },
};
const flag7498: Fig.Option = {
  name: "--maintenance-window-hour",
  description: "Hour of day for maintenance window, in UTC time zone",
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7772: Fig.Option = {
  name: "--memory",
  description:
    "Whole number value indicating how much memory is desired in the machine. A size unit should be provided (eg. 3072MiB or 9GiB) - if no units are specified, GiB is assumed. Both --cpu and --memory must be specified if a custom machine type is desired, and the --tier flag must be omitted. --cpu and --memory flags are not compatible with the Enterprise Plus edition. These flags should not be used when creating an Enterprise Plus edition, as the machine configuration is determined by the --tier flag instead",
  args: {
    name: "MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag8250: Fig.Option = {
  name: "--network",
  description:
    "Network in the current project that the instance will be part of. To specify using a network with a shared VPC, use the full URL of the network. For an example host project, 'testproject', and shared network, 'testsharednetwork', this would use the form: `--network`=`projects/testproject/global/networks/testsharednetwork`",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag10491: Fig.Option = {
  name: "--node-count",
  description:
    "The number of nodes in the pool. This option is only available for read pools",
  args: {
    name: "NODE_COUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag10668: Fig.Option = {
  name: "--offload",
  description:
    "Offload an export to a temporary instance. Doing so reduces strain on source instances and allows other operations to be performed while the export is in progress",
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
const flag11153: Fig.Option = {
  name: "--password-policy-allowed-failed-attempts",
  description:
    "Number of failed login attempts allowed before a user is locked out",
  args: {
    name: "PASSWORD_POLICY_ALLOWED_FAILED_ATTEMPTS",
    description: "Int",
    suggestions: [],
  },
};
const flag11154: Fig.Option = {
  name: "--password-policy-complexity",
  description:
    "The complexity of the password. This flag is available only for PostgreSQL. _PASSWORD_POLICY_COMPLEXITY_ must be one of:\n+\n*COMPLEXITY_DEFAULT*::: A combination of lowercase, uppercase, numeric, and non-alphanumeric characters.\n*COMPLEXITY_UNSPECIFIED*::: The default value if COMPLEXITY_DEFAULT is not specified. It implies that complexity check is not enabled.\n:::\n+",
  args: {
    name: "PASSWORD_POLICY_COMPLEXITY",
    description: "String",
    suggestions: ["COMPLEXITY_DEFAULT", "COMPLEXITY_UNSPECIFIED"],
  },
};
const flag11155: Fig.Option = {
  name: "--password-policy-disallow-username-substring",
  description:
    "Disallow username as a part of the password. Use *--password-policy-disallow-username-substring* to enable and *--no-password-policy-disallow-username-substring* to disable",
};
const flag11156: Fig.Option = {
  name: "--password-policy-enable-failed-attempts-check",
  description:
    "Enables the failed login attempts check if set to true. Use *--password-policy-enable-failed-attempts-check* to enable and *--no-password-policy-enable-failed-attempts-check* to disable",
};
const flag11157: Fig.Option = {
  name: "--password-policy-enable-password-verification",
  description:
    "The current password must be specified when altering the password. Use *--password-policy-enable-password-verification* to enable and *--no-password-policy-enable-password-verification* to disable",
};
const flag11158: Fig.Option = {
  name: "--password-policy-min-length",
  description: "Minimum number of characters allowed in the password",
  args: {
    name: "PASSWORD_POLICY_MIN_LENGTH",
    description: "Int",
    suggestions: [],
  },
};
const flag11159: Fig.Option = {
  name: "--password-policy-password-change-interval",
  description:
    'Minimum interval after which the password can be changed, for example,\n2m for 2 minutes. See <a href="/sdk/gcloud/reference/topic/datetimes">\n$ gcloud topic datetimes</a> for information on duration formats.\nThis flag is available only for PostgreSQL',
  args: {
    name: "PASSWORD_POLICY_PASSWORD_CHANGE_INTERVAL",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag11160: Fig.Option = {
  name: "--password-policy-password-expiration-duration",
  description:
    "Expiration duration after a password is updated, for example,\n2d for 2 days. See `gcloud topic datetimes` for information on\nduration formats",
  args: {
    name: "PASSWORD_POLICY_PASSWORD_EXPIRATION_DURATION",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag11161: Fig.Option = {
  name: "--password-policy-reuse-interval",
  description:
    "Number of previous passwords that cannot be reused. The valid range is 0 to 100",
  args: {
    name: "PASSWORD_POLICY_REUSE_INTERVAL",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11163: Fig.Option = {
  name: "--password",
  description: "Cloud SQL user's password",
  args: { name: "PASSWORD", description: "String", suggestions: [] },
};
const flag11247: Fig.Option = {
  name: "--performance-capture-config",
  description:
    "A comma-separated list of performance capture settings to add to the MySQL instance. The input should be in a format of key=value. Available case-sensitive keys are: enabled (boolean), probing-interval-seconds (integer), probe-threshold (integer), running-threads-threshold (integer), seconds-behind-source-threshold (integer), transaction-duration-threshold (integer), cpu-utilization-threshold-percent (integer), memory-usage-threshold-percent (integer), transaction-lock-wait-threshold-count (integer), semaphore-wait-threshold-count (integer), history-list-length-threshold-count (integer), transaction-kill-threshold-seconds (integer), transaction-kill-type (string), transaction-kill-excluded-user-hosts (string, semicolon-separated list) Example: --performance-capture-config enabled=true,probe-threshold=5, cpu-utilization-threshold-percent=80, transaction-kill-excluded-user-hosts=user1@host1;user2@%, transaction-kill-type=READ_ONLY_TRANSACTIONS",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11646: Fig.Option = {
  name: "--prompt-for-pvk-password",
  description:
    "Prompt for the private key password associated with the certificate file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
};
const flag11825: Fig.Option = {
  name: "--psc-auto-connections",
  description:
    'A comma-separated list of networks or network-project pairs. Each project is represented by a project number (numeric) or by a project ID (alphanumeric). This allows Private Service Connect connections to be created automatically for the specified networks. For example, this connection uses "the form `psc-auto-connections`=`network=projects/testproject1/global/networks/testnetwork1`" or "the form `psc-auto-connections`=`project=testproject1,network=projects/testproject1/global/networks/testnetwork1`". Sets `psc_auto_connections` value.\n+\n*network*:::\nRequired, sets `network` value.\n+\n*project*:::\nSets `project` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--psc-auto-connections=network=string,project=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--psc-auto-connections=\'{"network": "string", "project": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--psc-auto-connections=path_to_file.(yaml|json)\n+\n```',
  args: { name: "PSC_AUTO_CONNECTIONS", description: "Dict", suggestions: [] },
};
const flag11900: Fig.Option = {
  name: "--pvk-password",
  description: "The private key password associated with the certificate file",
  args: { name: "PVK_PASSWORD", description: "String", suggestions: [] },
};
const flag11902: Fig.Option = {
  name: "--pvk-path",
  description:
    "Path to the encryption private key file in Google Cloud Storage. The URI is in the form `gs://bucketName/fileName`",
  args: { name: "PVK_PATH", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag11957: Fig.Option = {
  name: "--quote",
  description:
    'Specifies the character that encloses values from columns that have string data type. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. This flag is only available for MySQL and Postgres. If this flag is not provided, double quotes character will be used as the default value',
  args: { name: "QUOTE", description: "String", suggestions: [] },
};
const flag12033: Fig.Option = {
  name: "--recreate-replicas-on-primary-crash",
  description:
    "Allow/Disallow replica recreation when a primary MySQL instance operating in reduced durability mode crashes. Not recreating the replicas might lead to data inconsistencies between the primary and its replicas. This setting is only applicable for MySQL instances and is enabled by default. Use *--recreate-replicas-on-primary-crash* to enable and *--no-recreate-replicas-on-primary-crash* to disable",
};
const flag12336: Fig.Option = {
  name: "--region",
  description:
    "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12791: Fig.Option = {
  name: "--replication",
  description:
    "Type of replication this instance uses. The default is synchronous. _REPLICATION_ must be one of: *synchronous*, *asynchronous*",
  args: {
    name: "REPLICATION",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["synchronous", "asynchronous"],
  },
};
const flag12889: Fig.Option = {
  name: "--require-ssl",
  description: "Specified if users connecting over IP must use SSL",
};
const flag13079: Fig.Option = {
  name: "--retain-backups-on-delete",
  description:
    "Retain automated/ondemand backups of the instance after the instance is deleted. Use *--retain-backups-on-delete* to enable and *--no-retain-backups-on-delete* to disable",
};
const flag13084: Fig.Option = {
  name: "--retained-backups-count",
  description:
    "How many backups to keep. The valid range is between 1 and 365. Default value is 7 for Enterprise edition instances. For Enterprise_Plus, default value is 15. Applicable only if --no-backups is not specified",
  args: {
    name: "RETAINED_BACKUPS_COUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13085: Fig.Option = {
  name: "--retained-transaction-log-days",
  description:
    "How many days of transaction logs to keep. The valid range is between 1 and 35. Only use this option when point-in-time recovery is enabled. If logs are stored on disk, storage size for transaction logs could increase when the number of days for log retention increases. For Enterprise, default and max retention values are 7 and 7 respectively. For Enterprise_Plus, default and max retention values are 14 and 35",
  args: {
    name: "RETAINED_TRANSACTION_LOG_DAYS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13408: Fig.Option = {
  name: "--secondary-zone",
  description:
    "Preferred secondary Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.)",
  args: { name: "SECONDARY_ZONE", description: "String", suggestions: [] },
};
const flag13478: Fig.Option = {
  name: "--server-ca-mode",
  description:
    "Set the server CA mode of the instance. _SERVER_CA_MODE_ must be one of:\n+\n*CUSTOMER_MANAGED_CAS_CA*::: Customer-managed CA hosted on Google Cloud's Certificate Authority Service (CAS).\n*GOOGLE_MANAGED_CAS_CA*::: Google-managed regional CA part of root CA hierarchy hosted on Google Cloud's Certificate Authority Service (CAS).\n*GOOGLE_MANAGED_INTERNAL_CA*::: Google-managed self-signed internal CA.\n:::\n+",
  args: {
    name: "SERVER_CA_MODE",
    description: "String",
    suggestions: [
      "CUSTOMER_MANAGED_CAS_CA",
      "GOOGLE_MANAGED_CAS_CA",
      "GOOGLE_MANAGED_INTERNAL_CA",
    ],
  },
};
const flag13483: Fig.Option = {
  name: "--server-ca-pool",
  description: "Set the server CA pool of the instance",
  args: { name: "SERVER_CA_POOL", description: "String", suggestions: [] },
};
const flag13485: Fig.Option = {
  name: "--server-certificate-rotation-mode",
  description:
    "Set the server certificate rotation mode of the instance. _SERVER_CERTIFICATE_ROTATION_MODE_ must be one of:\n+\n*AUTOMATIC_ROTATION_DURING_MAINTENANCE*::: Automatic server certificate rotation during Cloud SQL scheduled maintenance or self-service maintenance updates. Requires `server_ca_mode` to be `GOOGLE_MANAGED_CAS_CA` or `CUSTOMER_MANAGED_CAS_CA`.\n*NO_AUTOMATIC_ROTATION*::: No automatic server certificate rotation. Server certificates must be rotated manually.\n:::\n+",
  args: {
    name: "SERVER_CERTIFICATE_ROTATION_MODE",
    description: "String",
    suggestions: [
      "AUTOMATIC_ROTATION_DURING_MAINTENANCE",
      "NO_AUTOMATIC_ROTATION",
    ],
  },
};
const flag13783: Fig.Option = {
  name: "--show-edition",
  description: "Show the edition field",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14309: Fig.Option = {
  name: "--ssl-mode",
  description:
    "Set the SSL mode of the instance. _SSL_MODE_ must be one of:\n+\n*ALLOW_UNENCRYPTED_AND_ENCRYPTED*::: Allow non-SSL and SSL connections. For SSL connections, client certificate will not be verified.\n*ENCRYPTED_ONLY*::: Only allow connections encrypted with SSL/TLS.\n*TRUSTED_CLIENT_CERTIFICATE_REQUIRED*::: Only allow connections encrypted with SSL/TLS and with valid client certificates.\n:::\n+",
  args: {
    name: "SSL_MODE",
    description: "String",
    suggestions: [
      "ALLOW_UNENCRYPTED_AND_ENCRYPTED",
      "ENCRYPTED_ONLY",
      "TRUSTED_CLIENT_CERTIFICATE_REQUIRED",
    ],
  },
};
const flag14438: Fig.Option = {
  name: "--storage-auto-increase",
  description:
    "Storage size can be increased, but it cannot be decreased; storage increases are permanent for the life of the instance. With this setting enabled, a spike in storage requirements can result in permanently increased storage costs for your instance. However, if an instance runs out of available space, it can result in the instance going offline, dropping existing connections. This setting is enabled by default. Use *--storage-auto-increase* to enable and *--no-storage-auto-increase* to disable",
};
const flag14460: Fig.Option = {
  name: "--storage-provisioned-iops",
  description:
    "Indicates how many IOPS to provision for the data disk. This sets the number of I/O operations per second that the disk can handle",
  args: {
    name: "STORAGE_PROVISIONED_IOPS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14461: Fig.Option = {
  name: "--storage-provisioned-throughput",
  description:
    "Indicates how much throughput to provision for the data disk. This sets the throughput in MB per second that the disk can handle",
  args: {
    name: "STORAGE_PROVISIONED_THROUGHPUT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14462: Fig.Option = {
  name: "--storage-size",
  description:
    "Amount of storage allocated to the instance. Must be an integer number of GB. The default is 10GB. Information on storage limits can be found here: https://cloud.google.com/sql/docs/quotas#storage_limits",
  args: {
    name: "STORAGE_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag14465: Fig.Option = {
  name: "--storage-type",
  description:
    "The storage type for the instance, determined by the selected machine type. _STORAGE_TYPE_ must be one of: *SSD*, *HDD*, *HYPERDISK_BALANCED*",
  args: {
    name: "STORAGE_TYPE",
    description: "String",
    suggestions: ["SSD", "HDD", "HYPERDISK_BALANCED"],
  },
};
const flag14853: Fig.Option = {
  name: "--threads-per-core",
  description:
    "The number of threads per core. The value of this flag can be 1 or 2.\nTo disable SMT, set this flag to 1. Only available in Cloud SQL for SQL Server instances",
  args: { name: "THREADS_PER_CORE", description: "Int", suggestions: [] },
};
const flag14872: Fig.Option = {
  name: ["--tier", "-t"],
  description:
    "Specifies the machine type for the instance. The usage of this flag depends on the selected `--edition`.\n+\nEnterprise Edition: Use `--tier` for shared-core instances (e.g., `db-f1-micro`, `db-g1-small`). For dedicated-core instances, do not use `--tier`; instead, customize your instance by specifying its CPU and memory with the `--cpu` and `--memory` flags.\n+\nEnterprise Plus Edition: `--tier` is required to specify the predefined machine type. The `--cpu` and `--memory` flags are not supported for Enterprise Plus. Examples include `db-perf-optimized-N-2` (N2 series) or `db-c4a-highmem-2` (C4A series).\n+\nFor a detailed list of available machine types and series, refer to the documentation for your database engine:\n+\n*   MySQL: https://cloud.google.com/sql/docs/mysql/machine-series-overview\n*   PostgreSQL: https://cloud.google.com/sql/docs/postgres/machine-series-overview\n*   SQL Server: https://cloud.google.com/sql/docs/sqlserver/machine-series-overview\n+\nLearn more about how machine types, CPU, and memory affect pricing: https://cloud.google.com/sql/pricing",
  args: { name: "TIER", description: "String", suggestions: [] },
};
const flag14885: Fig.Option = {
  name: "--time-zone",
  description:
    "Set a non-default time zone. Only available for SQL Server instances",
  args: { name: "TIME_ZONE", description: "String", suggestions: [] },
};
const flag14905: Fig.Option = {
  name: "--timeout",
  description:
    "Time to synchronously wait for the operation to complete, after which the operation continues asynchronously. Ignored if --async flag is specified. By default, set to 3600s. To wait indefinitely, set to *unlimited*",
  args: { name: "TIMEOUT", description: "Int", suggestions: [] },
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
const flag15331: Fig.Option = {
  name: "--user",
  description: "PostgreSQL user for this import operation",
  args: { name: "USER", description: "String", suggestions: [] },
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
const flag15795: Fig.Option = {
  name: "--zone",
  description:
    "Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.)",
  args: { name: "ZONE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "sql",
  description: "Create and manage Google Cloud SQL databases",
  subcommands: [
    {
      name: "backups",
      description:
        "Provide commands for working with backups of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a backup of a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A friendly description of the backup",
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
            flag5881,
            {
              name: "--location",
              description:
                "Choose where to store your backup. Backups are stored in the closest multi-region location to you by default. Only customize if needed",
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
        },
        {
          name: "delete",
          description: "Delete a backup of a Cloud SQL instance",
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
            flag5880,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ID",
            description:
              "The ID of the backup run. To find the ID, run the following command: $ gcloud sql backups list -i {instance}.Or, the NAME of the backup. To find the NAME, run the following command:  $ gcloud sql backups list --filter=instance:{instance}",
          },
        },
        {
          name: "describe",
          description: "Retrieves information about a backup",
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
            flag5880,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ID",
            description:
              "The ID of the backup run. To find the ID, run the following command: $ gcloud sql backups list -i {instance}.Or, the NAME of the backup. To find the NAME, run the following command:  $ gcloud sql backups list --filter=instance:{instance}",
          },
        },
        {
          name: "list",
          description:
            "Lists all backups associated with the project or a given instance",
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
              name: ["--instance", "-i"],
              description: 'Cloud SQL instance ID or "-" for all instances',
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "patch",
          description: "Update the Final backup of a Cloud SQL project",
          options: [
            flag42,
            flag46,
            {
              name: "--backup-description",
              description:
                "Provides description for the backup going to be taken",
              args: {
                name: "BACKUP_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--expiry-time",
              description:
                "Specifies when the final backup expires. The Maximum time allowed is 365 days from now. Format: YYYY-MM-DDTHH:MM:SS. Provide either ttl-days or expiry-time",
              args: {
                name: "EXPIRY_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
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
            flag14975,
            {
              name: "--ttl-days",
              description:
                "Specifies the number of days to retain the final backup. The valid range is between 1 and 365. The Default value is 30 days. Provide either ttl-days or expiry-time",
              args: {
                name: "TTL_DAYS",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description:
              "The NAME of the backup. To find the NAME, run the following command: $ gcloud sql backups list  --filter=type:FINAL instance:{instance}",
          },
        },
        {
          name: "restore",
          description: "Restores a backup of a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag101,
            flag104,
            flag105,
            flag106,
            flag107,
            flag108,
            flag472,
            flag707,
            flag720,
            flag773,
            flag775,
            flag776,
            flag806,
            flag956,
            flag1061,
            {
              name: "--backup-instance",
              description:
                "The ID of the instance that the backup was taken from. This argument must be specified when the backup instance is different from the restore instance. If it is not specified, the backup instance is considered the same as the restore instance. This flag is not supported when restore happens from backup name, only supported when restore happens from backup ID in timestamp format",
              args: {
                name: "BACKUP_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            flag1029,
            {
              name: "--backup-project",
              description:
                "The project of the instance to which the backup belongs. If it isn't specified, backup and restore instances are in the same project. This flag is not supported when restore happens from backup name, only supported when restore happens from backup ID in timestamp format",
              args: {
                name: "BACKUP_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag1048,
            flag1201,
            flag1471,
            flag1470,
            flag1618,
            flag1795,
            flag2113,
            flag2292,
            flag2335,
            flag2518,
            flag2770,
            flag2965,
            flag2998,
            flag3001,
            flag3005,
            flag3657,
            flag3654,
            flag3655,
            flag3656,
            flag3980,
            flag4056,
            flag4141,
            flag4251,
            flag4269,
            flag4868,
            flag4867,
            flag4900,
            flag4902,
            flag5091,
            flag5144,
            flag5453,
            flag5699,
            flag5817,
            flag5819,
            flag5820,
            flag5822,
            flag5824,
            flag5826,
            flag7356,
            flag7469,
            flag7480,
            flag7498,
            flag7772,
            flag8250,
            flag11637,
            flag11946,
            flag12336,
            flag12889,
            {
              name: "--restore-instance",
              description:
                "The ID of the target Cloud SQL instance that the backup is restored to",
              args: {
                name: "RESTORE_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            flag13084,
            flag13085,
            flag13408,
            flag14309,
            flag14438,
            flag14460,
            flag14461,
            flag14462,
            flag14465,
            flag14872,
            flag14885,
            flag14905,
            flag14975,
            flag15315,
            flag15424,
            flag15795,
          ],
          args: {
            name: "ID",
            description:
              "The ID of the backup run to restore from or the backup NAME for restore to existing/new instance. To find the NAME, run the following command: $ gcloud sql backups list --filter=instance:{instance}",
          },
        },
      ],
    },
    {
      name: "connect",
      description: "Connects to a Cloud SQL instance",
      options: [
        flag42,
        flag46,
        {
          name: "--auto-iam-authn",
          description:
            "Enables IAM database authentication for connections to MySQL and Postgres instances",
        },
        {
          name: "--auto-ip",
          description:
            "Connect to the Cloud SQL instance with auto IP detection",
        },
        flag1201,
        flag2292,
        {
          name: ["--database", "-d"],
          description: "The PostgreSQL or SQL Server database to connect to",
          args: { name: "DATABASE", description: "String", suggestions: [] },
        },
        {
          name: "--debug-logs",
          description: "Enable verbose debug logs for Cloud SQL Proxy",
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        {
          name: "--port",
          description:
            "Port number that gcloud will use to connect to the Cloud SQL Proxy through localhost",
          args: { name: "PORT", description: "Int", suggestions: [] },
        },
        {
          name: "--private-ip",
          description: "Connect to the Cloud SQL instance using private IP",
        },
        flag11637,
        {
          name: "--psc",
          description:
            "Connect to the Cloud SQL instance using Private Service Connect",
        },
        flag11946,
        {
          name: "--run-connection-test",
          description: "Run connection test for Cloud SQL Proxy",
        },
        {
          name: "--skip-ssl",
          description: "Skip SSL certificate verification for MySQL instances",
        },
        flag14975,
        {
          name: ["--user", "-u"],
          description: "Cloud SQL instance user to connect as",
          args: { name: "USER", description: "String", suggestions: [] },
        },
        flag15315,
        flag15424,
      ],
      args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
    },
    {
      name: "databases",
      description:
        "Provide commands for managing databases of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description: "Creates a database for a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1435,
            {
              name: "--collation",
              description:
                "Cloud SQL database collation setting, which specifies the set of rules for comparing characters in a character set. Each database version may support a different set of collations. For PostgreSQL database versions, this may only be set to the collation of the template database",
              args: {
                name: "COLLATION",
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
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "DATABASE", description: "Cloud SQL database name" },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL database",
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
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "DATABASE", description: "Cloud SQL database name" },
        },
        {
          name: "describe",
          description:
            "Displays configuration and metadata about a Cloud SQL database",
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
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "DATABASE", description: "Cloud SQL database name" },
        },
        {
          name: "list",
          description: "Lists databases for a Cloud SQL instance",
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
            flag5881,
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
          name: "patch",
          description: "Patches the settings of a Cloud SQL database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1435,
            {
              name: "--collation",
              description:
                "Cloud SQL database collation setting, which specifies the set of rules for comparing characters in a character set. Each database version may support a different set of collations. This flag can't be used with PostgreSQL instances",
              args: {
                name: "COLLATION",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--diff",
              description: "Show what changed as a result of the patch",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "DATABASE", description: "Cloud SQL database name" },
        },
      ],
    },
    {
      name: "export",
      description: "Provide commands to export Cloud SQL instances",
      subcommands: [
        {
          name: "bak",
          description: "Export data from a Cloud SQL instance to a BAK file",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--bak-type",
              description:
                "Type of bak file that will be exported, FULL or DIFF. SQL Server only. _BAK_TYPE_ must be one of: *FULL*, *DIFF*, *TLOG*",
              args: {
                name: "BAK_TYPE",
                description: "String",
                suggestions: ["FULL", "DIFF", "TLOG"],
              },
            },
            flag1201,
            flag2292,
            {
              name: ["--database", "-d"],
              description:
                "Database from which the export is made. Information on requirements can be found here: https://cloud.google.com/sql/docs/sqlserver/admin-api/v1beta4/instances/export#exportContext.databases",
              args: { name: "DATABASE", description: "List", suggestions: [] },
            },
            {
              name: "--differential-base",
              description:
                "Whether the bak file export can be used as differential base for future differential backup. SQL Server only",
            },
            {
              name: "--export-log-end-time",
              description:
                "Optional flag. The end time of the transaction log files that are included in the export file. Use this flag to export transaction logs for Cloud SQL for SQL Server only. Format: YYYY-MM-DDTHH:MM:SSZ, UTC timezone only",
              args: {
                name: "EXPORT_LOG_END_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--export-log-start-time",
              description:
                "Optional flag. The start time of the transaction log files that are included in the export file. Use this flag to export transaction logs for Cloud SQL for SQL Server only. Format: YYYY-MM-DDTHH:MM:SSZ, UTC timezone only",
              args: {
                name: "EXPORT_LOG_START_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
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
              name: ["--stripe-count", "--stripe_count"],
              description:
                "Specifies the number of stripes to use for SQL Server exports",
              args: {
                name: "STRIPE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--striped",
              description:
                "Whether SQL Server export should be striped. Use *--striped* to enable and *--no-striped* to disable",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails",
            },
          ],
        },
        {
          name: "csv",
          description: "Exports data from a Cloud SQL instance to a CSV file",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2775,
            flag4503,
            flag4781,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6524,
            flag7356,
            flag10668,
            flag11637,
            {
              name: "--query",
              description:
                "A SQL SELECT query (e.g., SELECT * FROM table) that specifies the data to export. WARNING: While in-transit, the query might be processed in intermediate locations other than the location of the target instance",
              args: { name: "QUERY", description: "String", suggestions: [] },
            },
            flag11946,
            flag11957,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "sql",
          description: "Exports data from a Cloud SQL instance to a SQL file",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clean",
              description:
                "Include SQL statements (DROP <object>) required to drop database objects prior to import; corresponds to the clean flag for pg_dump. Only applies to PostgreSQL non-parallel exports",
            },
            flag2292,
            flag2775,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--if-exists",
              description:
                "Include an SQL statement (IF EXISTS) with each drop statement produced by the clean flag; corresponds to the if-exists flag for pg_dump. Only applies to PostgreSQL non-parallel exports",
            },
            flag5699,
            flag7356,
            flag10668,
            {
              name: "--parallel",
              description:
                "Perform a parallel export. This flag is only applicable to MySQL and Postgres. When this flag is used, the URI specifies a folder in the Cloud Storage bucket. After the parallel export completes, you will have multiple files in that folder",
            },
            flag11637,
            flag11946,
            {
              name: ["--table", "-t"],
              description:
                "Tables to export from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, only one table can be exported at a time",
              args: { name: "TABLE", description: "List", suggestions: [] },
            },
            {
              name: "--threads",
              description:
                "Specifies the number of threads to use for the parallel export. If `--parallel` is specified and this flag is not provided, Cloud SQL uses a default thread count to optimize performance",
              args: {
                name: "THREADS",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "tde",
          description:
            "Export a TDE certificate from a Cloud SQL for SQL Server instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1412,
            flag1423,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11646,
            flag11900,
            flag11902,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
      ],
    },
    {
      name: "flags",
      description: "Provide a command to list flags",
      subcommands: [
        {
          name: "list",
          description: "List customizable flags for Google Cloud SQL instances",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2765,
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
      name: "generate-login-token",
      description: "Generate an IAM login token for Cloud SQL",
      options: [
        flag42,
        flag46,
        {
          name: "--application-default-credential",
          description:
            "Use application default credentials to generate the login token",
        },
        flag1201,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag5880,
        flag7356,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "import",
      description: "Provides commands to import Cloud SQL instances",
      subcommands: [
        {
          name: "bak",
          description: "Import data into a Cloud SQL instance from a BAK file",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--bak-type",
              description:
                "Type of bak file that will be imported. Applicable to SQL Server only. _BAK_TYPE_ must be one of: *FULL*, *DIFF*, *TLOG*",
              args: {
                name: "BAK_TYPE",
                description: "String",
                suggestions: ["FULL", "DIFF", "TLOG"],
              },
            },
            flag1201,
            {
              name: "--cert-path",
              description:
                "Path to the encryption certificate file in Google Cloud Storage associated with the BAK file. The URI is in the form `gs://bucketName/fileName`",
              args: {
                name: "CERT_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: ["--database", "-d"],
              description: "A new database into which the import is made",
              args: {
                name: "DATABASE",
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
              name: "--keep-encrypted",
              description:
                "Whether or not to decrypt the imported encrypted BAK file",
            },
            flag7356,
            {
              name: "--no-recovery",
              description:
                "Whether or not the SQL Server import is executed with NORECOVERY keyword",
            },
            flag11637,
            {
              name: "--prompt-for-pvk-password",
              description:
                "Prompt for the private key password associated with the BAK file with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            {
              name: "--pvk-password",
              description:
                "The private key password associated with the BAK file",
              args: {
                name: "PVK_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--pvk-path",
              description:
                "Path to the encryption private key file in Google Cloud Storage associated with the BAK file. The URI is in the form `gs://bucketName/fileName`",
              args: {
                name: "PVK_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--recovery-only",
              description:
                "Whether or not the SQL Server import skip download and bring database online",
            },
            {
              name: "--stop-at",
              description:
                "Equivalent to SQL Server STOPAT keyword. Used in transaction log import only. Transaction log import stop at this timestamp. Format: YYYY-MM-DDTHH:MM:SS",
              args: {
                name: "STOP_AT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--stop-at-mark",
              description:
                "Equivalent to SQL Server STOPATMARK keyword. Used in transaction log import only. Transaction log import stop at the given mark. To stop at given LSN, use --stop-at-mark=lsn:xxx",
              args: {
                name: "STOP_AT_MARK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--striped",
              description:
                "Whether SQL Server import should be striped. Use *--striped* to enable and *--no-striped* to disable",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "Path to the BAK file file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`",
              isOptional: true,
            },
          ],
        },
        {
          name: "csv",
          description: "Imports data into a Cloud SQL instance from a CSV file",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--columns",
              description:
                "The columns to import from csv file. These correspond to actual database columns to import. If not set, all columns from csv file are imported to corresponding database columns",
              args: { name: "COLUMNS", description: "List", suggestions: [] },
            },
            flag2292,
            {
              name: ["--database", "-d"],
              description:
                "The database (for example, guestbook) to which the import is made",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag4503,
            flag4781,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6524,
            flag7356,
            flag11637,
            flag11946,
            flag11957,
            {
              name: "--table",
              description: "The database table to import csv file into",
              args: { name: "TABLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15331,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "Path to the CSV file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "sql",
          description:
            "Imports data into a Cloud SQL instance from a SQL dump file",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clean",
              description:
                "Option to clean (DROP) database objects before recreating them. corresponds to the clean flag for pg_restore. Only applies if --parallel is set. PostgreSQL only",
            },
            flag2292,
            flag2774,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--if-exists",
              description:
                "Include an SQL statement (IF EXISTS) with each DROP statement produced by --clean; corresponds to the if-exists flag for pg_restore. Only applies if --parallel is set. PostgreSQL only",
            },
            flag5699,
            flag7356,
            {
              name: "--parallel",
              description:
                "Perform a parallel import. This flag is only applicable to MySQL and Postgres. When this flag is used, the URI specifies a folder in the Cloud Storage bucket where the multiple files to be imported are located",
            },
            flag11637,
            flag11946,
            {
              name: "--threads",
              description:
                "Specifies the number of threads to use for the parallel import. If `--parallel` is specified and this flag is not provided, Cloud SQL uses a default thread count to optimize performance",
              args: {
                name: "THREADS",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15331,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "Path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "tde",
          description:
            "Import TDE certificate into a Cloud SQL for SQL Server instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1412,
            flag1423,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11646,
            flag11900,
            flag11902,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
      ],
    },
    {
      name: "instances",
      description: "Provide commands for managing Cloud SQL instances",
      subcommands: [
        {
          name: "acquire-ssrs-lease",
          description:
            "Acquires a SQL Server Reporting Services lease on a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--duration",
              description:
                "Time duration, in hours, that the lease will be active to allow SSRS setup. Default lease duration is 5 hours if this flag is not specified",
              args: {
                name: "DURATION",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
              name: "--report-database",
              description:
                "Existing or new report database name in the Cloud SQL for SQL Server instance that is used for SSRS setup",
              args: {
                name: "REPORT_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--service-login",
              description:
                "Existing login in the Cloud SQL for SQL Server instance that is used as the service login for SSRS setup",
              args: {
                name: "SERVICE_LOGIN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--setup-login",
              description:
                "Existing login in the Cloud SQL for SQL Server instance that is used as the setup login for SSRS setup",
              args: {
                name: "SETUP_LOGIN",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "clone",
          description: "Clones a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--bin-log-file-name",
              description:
                "The name of the binary log file. Enable point-in-time recovery on the\nsource instance to create a binary log file. If specified with\n<--bin-log-position> to form a valid binary log coordinate, it defines an\nearlier point in time to clone a source instance from.\nFor example, mysql-bin.000001",
              args: {
                name: "BIN_LOG_FILE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--bin-log-position",
              description:
                "Represents the state of an instance at any given point in time inside a\nbinary log file. If specified along with <--bin-log-file-name> to form a\nvalid binary log coordinate, it defines an earlier point in time to clone\na source instance from.\nFor example, 123 (a numeric value)",
              args: {
                name: "BIN_LOG_POSITION",
                description: "Int",
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
            {
              name: "--point-in-time",
              description:
                "Represents the state of an instance at any given point in time inside\na transaction log file. For MySQL, the binary log file is used for\ntransaction logs. For PostgreSQL, the write-ahead log file is used for\ntransaction logs. For SQL Server, the log backup file is used for\nsuch purpose. To create a transaction log, enable point-in-time recovery\non the source instance. Instance should have transaction logs accumulated\nup to the point in time they want to restore up to. Uses RFC 3339 format\nin UTC timezone. If specified, defines a past state of the instance to\nclone. For example, '2012-11-15T16:19:00.094Z'",
              args: {
                name: "POINT_IN_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--preferred-secondary-zone",
              description:
                "The preferred secondary zone for the cloned regional instance. If you\nspecify a value for this flag, then the destination instance uses the\nvalue as the secondary zone. The secondary zone can't be the same as the\nprimary zone",
              args: {
                name: "PREFERRED_SECONDARY_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--preferred-zone",
              description:
                "The preferred zone for the cloned instance. If you specify a value for\nthis flag, then the destination instance uses the value as the primary\nzone",
              args: {
                name: "PREFERRED_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--restore-database-name",
              description:
                "The name of the database to be restored for a point-in-time restore. If\nset, the destination instance will only restore the specified database",
              args: {
                name: "RESTORE_DATABASE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-instance-deletion-time",
              description:
                "The time the source instance was deleted. This is required if cloning\nfrom a deleted instance",
              args: {
                name: "SOURCE_INSTANCE_DELETION_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SOURCE",
              description: "Cloud SQL instance ID of the source",
            },
            {
              name: "DESTINATION",
              description: "Cloud SQL instance ID of the clone",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag101,
            flag104,
            flag105,
            flag106,
            flag107,
            flag108,
            flag472,
            flag707,
            flag720,
            flag773,
            flag775,
            flag776,
            flag806,
            flag849,
            flag851,
            flag853,
            flag855,
            flag857,
            flag859,
            flag861,
            flag956,
            flag1061,
            flag1029,
            flag1048,
            flag1201,
            {
              name: "--cascadable-replica",
              description:
                "Specifies whether a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross-region replica that supports replica(s) under it. This flag only takes effect when the `--master-instance-name` flag is set, and the replica under creation is in a different region than the primary instance",
            },
            flag1470,
            flag2113,
            flag2292,
            flag2308,
            flag2335,
            flag2518,
            flag2657,
            flag2676,
            flag2745,
            flag2765,
            flag2965,
            flag2998,
            flag3001,
            flag3005,
            flag3657,
            flag3654,
            flag3655,
            flag3656,
            flag3980,
            flag4028,
            flag4056,
            flag4080,
            flag4092,
            flag4102,
            flag4138,
            flag4141,
            flag4241,
            flag4251,
            flag4269,
            flag4274,
            flag4422,
            flag4438,
            flag4439,
            {
              name: "--failover-replica-name",
              description:
                "Also create a failover replica with the specified name",
              args: {
                name: "FAILOVER_REPLICA_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4868,
            flag4867,
            flag4900,
            flag4902,
            flag5091,
            flag5144,
            flag5453,
            flag5699,
            flag5816,
            flag5818,
            flag5820,
            flag5822,
            flag5823,
            flag5825,
            flag5868,
            flag7356,
            flag7469,
            flag7480,
            flag7498,
            {
              name: "--master-instance-name",
              description:
                "Name of the instance which will act as master in the replication setup. The newly created instance will be a read replica of the specified master instance",
              args: {
                name: "MASTER_INSTANCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag7772,
            flag8250,
            flag10491,
            flag11154,
            flag11155,
            flag11158,
            flag11159,
            flag11161,
            flag11247,
            flag11637,
            flag11825,
            flag11946,
            flag12033,
            {
              name: "--region",
              description:
                "Regional location (e.g. asia-east1, us-east1). See the full list of regions at https://cloud.google.com/sql/docs/instance-locations",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--replica-type",
              description:
                "The type of replica to create. _REPLICA_TYPE_ must be one of: *READ*, *FAILOVER*",
              args: {
                name: "REPLICA_TYPE",
                description: "String",
                suggestions: ["READ", "FAILOVER"],
              },
            },
            flag12791,
            flag12889,
            flag13079,
            flag13084,
            flag13085,
            {
              name: "--root-password",
              description: "Root Cloud SQL user's password",
              args: {
                name: "ROOT_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            flag13408,
            flag13478,
            flag13483,
            flag13485,
            flag14309,
            flag14438,
            flag14460,
            flag14461,
            flag14462,
            flag14465,
            {
              name: "--tags",
              description:
                "Comma-separated list of tags to set on the instance. Use an equals signto separate tag name and value.(e.g., `--tags tag1:value1,tag2=value2`)",
              args: { name: "TAG=VALUE", description: "Dict", suggestions: [] },
            },
            flag14853,
            flag14872,
            flag14885,
            flag14905,
            flag14975,
            flag15315,
            flag15424,
            flag15795,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--enable-final-backup",
              description:
                "Enables the final backup to be taken at the time of instance deletion",
            },
            {
              name: "--final-backup-description",
              description:
                "Provides description for the final backup going to be taken",
              args: {
                name: "FINAL_BACKUP_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--final-backup-expiry-time",
              description:
                "Specifies the time at which the final backup will expire. Maximum time allowed is 365 days. For instances managed by BackupDR, the maximum time allowed is 10 years (3653 days). Format: YYYY-MM-DDTHH:MM:SS",
              args: {
                name: "FINAL_BACKUP_EXPIRY_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag4867,
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
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "describe",
          description:
            "Displays configuration and metadata about a Cloud SQL instance",
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
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "execute-sql",
          description: "Executes a statement on a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: ["--database", "-d"],
              description: "Database on which the statement is executed",
              args: {
                name: "DATABASE",
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
            {
              name: ["--partial-result-mode", "--partial_result_mode"],
              description:
                "Controls how the API responds when the SQL execution result is incomplete due to size limit or other reasons. The default mode is to return an error instead of returning a partial result. _PARTIAL_RESULT_MODE_ must be one of:\n+\n*ALLOW_PARTIAL_RESULT*::: If the complete result is unavailable, returns a partial result, marks the field <code>partial_result</code> to <code>true</code>, and doesn't throw an error.\n*FAIL_PARTIAL_RESULT*::: If the complete result is unavailable, returns an error and doesn't return the partial result.\n*PARTIAL_RESULT_MODE_UNSPECIFIED*::: Unspecified mode, effectively the same as <code>FAIL_PARTIAL_RESULT</code>.\n:::\n+",
              args: {
                name: "PARTIAL_RESULT_MODE",
                description: "String",
                suggestions: [
                  "ALLOW_PARTIAL_RESULT",
                  "FAIL_PARTIAL_RESULT",
                  "PARTIAL_RESULT_MODE_UNSPECIFIED",
                ],
              },
            },
            {
              name: "--password-secret-version",
              description:
                "The resource name of the Secret Manager secret holding the password for the database user. The secret should be created using the regional endpoint and stored in the same region as the Cloud SQL instance. The expected resource name format is <code>projects/{project}/locations/{location}/secrets/{secret}/versions/{secret_version}</code>. Used together with <code>--user</code>",
              args: {
                name: "PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: ["--row-limit", "--row_limit"],
              description:
                "Maximum number of rows to return. The default is unlimited",
              args: { name: "ROW_LIMIT", description: "Int", suggestions: [] },
            },
            {
              name: "--sql",
              description:
                "SQL statement(s) to execute. It supports multiple statements as well. When it starts with the character '@', the rest should be a filepath to read the SQL statement(s) from. For example, --sql=@my_script.sql",
              args: { name: "SQL", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--user",
              description:
                "The database user to authenticate as. Used together with <code>--password-secret-version</code>",
              args: { name: "USER", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "export",
          description: "*(DEPRECATED)*  Exports data from a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2775,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: ["--table", "-t"],
              description:
                "Tables to export from the specified database. If you specify tables, specify one and only one database. For Postgres instances, only one table can be exported at a time",
              args: { name: "TABLE", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already exists, the operation fails. If the filename ends with .gz, the contents are compressed",
            },
          ],
        },
        {
          name: "failover",
          description:
            "Causes a high-availability Cloud SQL instance to failover",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "get-latest-recovery-time",
          description:
            "Displays the latest recovery time to which a Cloud SQL instance can be restored to",
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
              name: "--source-instance-deletion-time",
              description:
                "The deletion time of the source instance. This is used to identify the instance if it has been deleted",
              args: {
                name: "SOURCE_INSTANCE_DELETION_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "get-storage-shrink-config",
          description:
            "Displays the minimum storage size to which a Cloud SQL instance can be decreased",
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
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "import",
          description:
            "*(DEPRECATED)*  Imports data into a Cloud SQL instance from Google Cloud Storage",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2774,
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
            { name: "INSTANCE", description: "Cloud SQL instance ID" },
            {
              name: "URI",
              description:
                "Path to the MySQL dump file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported",
            },
          ],
        },
        {
          name: "list",
          description: "Lists Cloud SQL instances in a given project",
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
            flag13783,
            {
              name: "--show-sql-network-architecture",
              description:
                "Show the instance's current SqlNetworkArchitecture backend in addition\n        to the default output list. An instance could use either the old or new\n        network architecture. The new network architecture offers better\n        isolation, reliability, and faster new feature adoption",
            },
            {
              name: "--show-transactional-log-storage-state",
              description:
                "Show the storage location of the transactional logs used for point-in-time recovery (PITR) by the instance",
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "patch",
          description: "Updates the settings of a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag101,
            flag104,
            flag105,
            flag106,
            flag107,
            flag108,
            flag472,
            flag707,
            flag720,
            flag773,
            flag775,
            flag776,
            {
              name: "--authorized-gae-apps",
              description:
                "First Generation instances only. List of project IDs for App Engine applications running in the Standard environment that can access this instance.\n+\nThe value given for this argument *replaces* the existing list",
              args: { name: "APP", description: "List", suggestions: [] },
            },
            {
              name: "--authorized-networks",
              description:
                "The list of external networks that are allowed to connect to the instance. Specified in CIDR notation, also known as 'slash' notation (e.g. 192.168.100.0/24).\n+\nThe value given for this argument *replaces* the existing list",
              args: { name: "NETWORK", description: "List", suggestions: [] },
            },
            flag849,
            flag851,
            flag853,
            flag855,
            flag857,
            flag859,
            flag861,
            flag956,
            {
              name: "--backup-location",
              description:
                "Choose where to store your backups. Backups are stored in the closest multi-region location to you by default. Only customize if needed. Specify empty string to revert to default",
              args: {
                name: "BACKUP_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag1048,
            flag1201,
            flag1471,
            flag1470,
            {
              name: "--clear-allowed-psc-projects",
              description:
                "This will clear the project allowlist of Private Service Connect, disallowing all projects from creating new Private Service Connect bindings to the instance",
            },
            {
              name: "--clear-authorized-networks",
              description:
                "Clear the list of external networks that are allowed to connect to the instance",
            },
            {
              name: "--clear-connection-pool-flags",
              description:
                "This will clear the connection pool flags set on the instance",
            },
            {
              name: "--clear-custom-subject-alternative-names",
              description: "This clears the customer specified DNS names",
            },
            {
              name: "--clear-database-flags",
              description:
                "Clear the database flags set on the instance. WARNING: Instance will be restarted",
            },
            {
              name: "--clear-entra-id-config",
              description:
                "Clears the Entra ID config for the SQL Server instance",
            },
            {
              name: "--clear-failover-dr-replica-name",
              description:
                "Clear the DR replica setting for the primary instance. Flag is only available for MySQL and PostgreSQL database instances",
            },
            {
              name: "--clear-gae-apps",
              description:
                "Specified to clear the list of App Engine apps that can access this instance",
            },
            flag1814,
            {
              name: "--clear-psc-auto-connections",
              description:
                "This removes all automatically created connections. Cloud SQL uses these connections to connect to an instance using Private Service Connect",
            },
            {
              name: "--clear-psc-network-attachment-uri",
              description:
                "Disable outbound connectivity from a Cloud SQL instance which uses Private Service Connect (PSC)",
            },
            flag2292,
            flag2308,
            flag2335,
            flag2518,
            flag2657,
            flag2676,
            flag2745,
            {
              name: "--database-version",
              description:
                "The database engine type and versions. If left unspecified, no changes occur. See the list of database versions at https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/SqlDatabaseVersion. Apart from listed major versions, DATABASE_VERSION also accepts supported minor versions. _DATABASE_VERSION_ must be one of: *MYSQL_5_6*, *MYSQL_5_7*, *MYSQL_8_0*, *MYSQL_8_4*, *MYSQL_9_7*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*, *POSTGRES_18*, *SQLSERVER_2017_EXPRESS*, *SQLSERVER_2017_WEB*, *SQLSERVER_2017_STANDARD*, *SQLSERVER_2017_ENTERPRISE*, *SQLSERVER_2019_EXPRESS*, *SQLSERVER_2019_WEB*, *SQLSERVER_2019_STANDARD*, *SQLSERVER_2019_ENTERPRISE*, *SQLSERVER_2022_EXPRESS*, *SQLSERVER_2022_WEB*, *SQLSERVER_2022_STANDARD*, *SQLSERVER_2022_ENTERPRISE*, *SQLSERVER_2025_EXPRESS*, *SQLSERVER_2025_STANDARD*, *SQLSERVER_2025_ENTERPRISE*",
              args: {
                name: "DATABASE_VERSION",
                description: "String",
                suggestions: [
                  "MYSQL_5_6",
                  "MYSQL_5_7",
                  "MYSQL_8_0",
                  "MYSQL_8_4",
                  "MYSQL_9_7",
                  "POSTGRES_9_6",
                  "POSTGRES_10",
                  "POSTGRES_11",
                  "POSTGRES_12",
                  "POSTGRES_13",
                  "POSTGRES_14",
                  "POSTGRES_15",
                  "POSTGRES_16",
                  "POSTGRES_17",
                  "POSTGRES_18",
                  "SQLSERVER_2017_EXPRESS",
                  "SQLSERVER_2017_WEB",
                  "SQLSERVER_2017_STANDARD",
                  "SQLSERVER_2017_ENTERPRISE",
                  "SQLSERVER_2019_EXPRESS",
                  "SQLSERVER_2019_WEB",
                  "SQLSERVER_2019_STANDARD",
                  "SQLSERVER_2019_ENTERPRISE",
                  "SQLSERVER_2022_EXPRESS",
                  "SQLSERVER_2022_WEB",
                  "SQLSERVER_2022_STANDARD",
                  "SQLSERVER_2022_ENTERPRISE",
                  "SQLSERVER_2025_EXPRESS",
                  "SQLSERVER_2025_STANDARD",
                  "SQLSERVER_2025_ENTERPRISE",
                ],
              },
            },
            flag2965,
            flag2998,
            flag3001,
            flag3005,
            {
              name: "--diff",
              description: "Show what changed as a result of the update",
            },
            flag3980,
            flag4028,
            {
              name: "--enable-bin-log",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs. Use *--enable-bin-log* to enable and *--no-enable-bin-log* to disable",
            },
            flag4080,
            flag4092,
            {
              name: "--enable-database-replication",
              description:
                "Enable database replication. Applicable only for read replica instance(s). WARNING: Instance will be restarted. Use *--enable-database-replication* to enable and *--no-enable-database-replication* to disable",
            },
            flag4102,
            flag4138,
            {
              name: "--enable-google-private-path",
              description:
                "Enable a private path for Google Cloud services. This flag specifies whether the instance is accessible to internal Google Cloud services such as BigQuery. This is only applicable to MySQL and PostgreSQL instances that don't use public IP. Currently, SQL Server isn't supported. Use *--enable-google-private-path* to enable and *--no-enable-google-private-path* to disable",
            },
            flag4241,
            {
              name: "--enable-point-in-time-recovery",
              description:
                "Allows for data recovery from a specific point in time, down to a fraction of a second, using write-ahead logs. Must have automatic backups enabled to use. Make sure storage can support at least 7 days of logs. Use *--enable-point-in-time-recovery* to enable and *--no-enable-point-in-time-recovery* to disable",
            },
            {
              name: "--enable-private-service-connect",
              description:
                "Enable connecting to the Cloud SQL instance with Private Service Connect. Use *--enable-private-service-connect* to enable and *--no-enable-private-service-connect* to disable",
            },
            flag4274,
            flag4422,
            flag4438,
            flag4439,
            {
              name: "--failover-dr-replica-name",
              description:
                "Set a Disaster Recovery (DR) replica with the specified name for the primary instance. This must be one of the existing cross region replicas of the primary instance. Flag is only available for MySQL and PostgreSQL database instances",
              args: {
                name: "FAILOVER_DR_REPLICA_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4868,
            flag4867,
            flag4900,
            flag4902,
            {
              name: "--follow-gae-app",
              description:
                "First Generation instances only. The App Engine app this instance should follow. It must be in the same region as the instance. WARNING: Instance may be restarted",
              args: {
                name: "FOLLOW_GAE_APP",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            {
              name: "--gce-zone",
              description:
                "(DEPRECATED) Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.). WARNING: Instance may be restarted.\n+\nFlag `--gce-zone` is deprecated and will be removed by release 255.0.0. Use `--zone` instead",
              args: {
                name: "GCE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--include-replicas-for-major-version-upgrade",
              description:
                "Enable the major version upgrade of replicas when the in-place major version upgrade of a primary instance is initated with `--database-version`. Use `--include-replicas-for-major-version-upgrade`  to enable and `--no-include-replicas-for-major--version-upgrade` to disable. Use *--include-replicas-for-major-version-upgrade* to enable and *--no-include-replicas-for-major-version-upgrade* to disable",
            },
            flag5816,
            flag5818,
            flag5820,
            flag5822,
            flag5823,
            flag5825,
            flag5868,
            flag7356,
            flag7469,
            {
              name: "--maintenance-version",
              description: "The desired maintenance version of the instance",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Removes the user-specified maintenance window",
            },
            flag7480,
            flag7498,
            flag7772,
            flag8250,
            {
              name: "--no-backup",
              description: "Specified if daily backup should be disabled",
            },
            flag10491,
            flag11154,
            flag11155,
            flag11158,
            flag11159,
            flag11161,
            flag11247,
            {
              name: ["--pricing-plan", "-p"],
              description:
                "First Generation instances only. The pricing plan for this instance. _PRICING_PLAN_ must be one of: *PER_USE*, *PACKAGE*",
              args: {
                name: "PRICING_PLAN",
                description: "String",
                suggestions: ["PER_USE", "PACKAGE"],
              },
            },
            flag11637,
            flag11825,
            {
              name: "--psc-network-attachment-uri",
              description:
                "Full URI of the network attachment that is configured to support outbound connectivity from a Cloud SQL instance which uses Private Service Connect (PSC). For example, this would be of the form:`--psc-network-attachment-uri=projects/test-project/regions/us-central1/networkAttachments/my-na`",
              args: {
                name: "PSC_NETWORK_ATTACHMENT_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--reconcile-psa-networking",
              description:
                "Reconciles the instance's PSA networking configuration. If the instance is already on a PSA network, the DNS zone and records associated with the PSA write endpoint are either added if missing or updated if incorrect",
            },
            flag12033,
            {
              name: "--remove-deny-maintenance-period",
              description: "Removes the user-specified deny maintenance period",
            },
            flag12791,
            {
              name: "--require-ssl",
              description:
                "mysqld should default to 'REQUIRE X509' for users connecting over IP. Use *--require-ssl* to enable and *--no-require-ssl* to disable",
            },
            flag13079,
            flag13084,
            flag13085,
            flag13408,
            flag13478,
            flag13483,
            flag13485,
            {
              name: "--simulate-maintenance-event",
              description:
                "Simulate a maintenance event without changing the version. Only applicable to instances that support near-zero downtime planned maintenance",
            },
            flag14309,
            flag14438,
            flag14460,
            flag14461,
            flag14462,
            flag14465,
            {
              name: "--switch-transaction-logs-to-cloud-storage",
              description:
                "Switches the location of the transaction logs used for PITR from disk to Cloud Storage",
            },
            flag14853,
            {
              name: ["--tier", "-t"],
              description:
                "Specifies the machine type for the instance. The usage of this flag depends on the selected `--edition`.\n+\nEnterprise Edition: Use `--tier` for shared-core instances (e.g., `db-f1-micro`, `db-g1-small`). For dedicated-core instances, do not use `--tier`; instead, customize your instance by specifying its CPU and memory with the `--cpu` and `--memory` flags.\n+\nEnterprise Plus Edition: `--tier` is required to specify the predefined machine type. The `--cpu` and `--memory` flags are not supported for Enterprise Plus. Examples include `db-perf-optimized-N-2` (N2 series) or `db-c4a-highmem-2` (C4A series).\n+\nFor a detailed list of available machine types and series, refer to the documentation for your database engine:\n+\n*   MySQL: https://cloud.google.com/sql/docs/mysql/machine-series-overview\n*   PostgreSQL: https://cloud.google.com/sql/docs/postgres/machine-series-overview\n*   SQL Server: https://cloud.google.com/sql/docs/sqlserver/machine-series-overview\n+\nLearn more about how machine types, CPU, and memory affect pricing: https://cloud.google.com/sql/pricing WARNING: Instance will be restarted",
              args: { name: "TIER", description: "String", suggestions: [] },
            },
            flag14885,
            flag14975,
            {
              name: "--upgrade-sql-network-architecture",
              description:
                "Upgrade from old network architecture to new network architecture. The\n       new network architecture offers better isolation, reliability, and faster\n       new feature adoption",
            },
            flag15315,
            flag15424,
            {
              name: "--zone",
              description:
                "Preferred Compute Engine zone (e.g. us-central1-a, us-central1-b, etc.). WARNING: Instance may be restarted",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "perform-storage-shrink",
          description:
            "Performs a storage size decrease of a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete. The default is *True*. Enabled by default, use *--no-async* to disable",
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
            {
              name: "--storage-size",
              description:
                "The target storage size must be an integer that represents the number of GB.  For example, --storage-size=10GB. Only supported for primary or standalone instances. You can't set a target storage size for a replica instance",
              args: {
                name: "STORAGE_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "point-in-time-restore",
          description:
            "Performs a point in time restore for a Cloud SQL instance managed by Google Cloud Backup and Disaster Recovery (DR) Service",
          options: [
            flag42,
            flag46,
            flag101,
            flag104,
            flag105,
            flag106,
            flag107,
            flag108,
            {
              name: "--allocated-ip-range-name",
              description:
                "The name of the IP range allocated for the target instance with\nprivate network connectivity. For example:\n'google-managed-services-default'. If set, the target instance\nIP is created in the allocated range represented by this name.\nReserved for future use",
              args: {
                name: "ALLOCATED_IP_RANGE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag472,
            flag707,
            flag720,
            flag773,
            flag775,
            flag776,
            flag806,
            flag956,
            flag1061,
            flag1029,
            flag1048,
            flag1201,
            flag1471,
            flag1470,
            flag1618,
            flag1795,
            flag2113,
            flag2292,
            flag2335,
            flag2518,
            flag2770,
            flag2965,
            flag2998,
            flag3001,
            flag3005,
            flag3657,
            flag3654,
            flag3655,
            flag3656,
            flag3980,
            flag4056,
            flag4141,
            flag4251,
            flag4269,
            flag4868,
            flag4867,
            flag4900,
            flag4902,
            flag5091,
            flag5144,
            flag5453,
            flag5699,
            flag5817,
            flag5819,
            flag5820,
            flag5822,
            flag5824,
            flag5826,
            flag7356,
            flag7469,
            flag7480,
            flag7498,
            flag7772,
            flag8250,
            {
              name: "--preferred-secondary-zone",
              description:
                "The preferred secondary zone for the cloned regional instance. If you\nspecify a value for this flag, then the target instance uses the value\nas the secondary zone. The secondary zone can't be the same as the\nprimary zone",
              args: {
                name: "PREFERRED_SECONDARY_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--preferred-zone",
              description:
                "The preferred zone for the target instance. If you specify a value for\nthis flag, then the target instance uses the value as the primary\nzone",
              args: {
                name: "PREFERRED_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--private-network",
              description:
                "The resource link for the VPC network from which the Cloud SQL instance is\naccessible for private IP. For example,\n'/projects/myProject/global/networks/default'",
              args: {
                name: "PRIVATE_NETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12336,
            flag12889,
            {
              name: "--restore-database-names",
              description:
                "The name of the databases to be restored for a point-in-time restore. If\nset, the destination instance will only restore the specified databases",
              args: {
                name: "RESTORE_DATABASE_NAMES",
                description: "String",
                suggestions: [],
              },
            },
            flag13084,
            flag13085,
            flag13408,
            flag14309,
            flag14438,
            flag14460,
            flag14461,
            flag14462,
            flag14465,
            flag14872,
            flag14885,
            flag14905,
            flag14975,
            flag15315,
            flag15424,
            flag15795,
          ],
          args: [
            {
              name: "DATASOURCE",
              description:
                "The Google Cloud Backup and Disaster Recovery (DR) Service Datasource URI,\nof the form projects/{project}/locations/{region}/backupVaults/\n{backupvault}/dataSources/{datasource}",
            },
            {
              name: "TARGET",
              description: "Cloud SQL instance ID of the target instance",
            },
            {
              name: "POINT_IN_TIME",
              description:
                "The point in time in which to restore the instance to. Uses  RFC 3339\nformat in UTC timezone. For example, '2012-11-15T16:19:00.094Z'",
            },
          ],
        },
        {
          name: "pre-check-major-version-upgrade",
          description:
            "Performs pre-checks for a major version upgrade of a Cloud SQL instance",
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
              name: "--target-database-version",
              description: "Target database version for the upgrade",
              args: {
                name: "TARGET_DATABASE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "promote-replica",
          description:
            "Promotes Cloud SQL read replica to a stand-alone instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--failover",
              description:
                "Whether the promote operation is a failover. Use *--failover* to enable and *--no-failover* to disable",
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
          args: { name: "REPLICA", description: "Cloud SQL read replica ID" },
        },
        {
          name: "reencrypt",
          description: "Reencrypts a Cloud SQL CMEK instance",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "release-ssrs-lease",
          description:
            "Releases a SQL Server Reporting Services lease on a Cloud SQL instance",
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
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "reset-ssl-config",
          description: "Reset SSL materials according to the reset SSL mode",
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
            {
              name: "--mode",
              description:
                "Selectively refresh the SSL materials. _MODE_ must be one of:\n+\n*ALL*::: Refresh all TLS configs. This is the default behaviour.\n*SYNC_FROM_PRIMARY*::: Refreshes the replication-related TLS configuration settings provided by the primary instance. Not applicable to on-premises replication instances.\n:::\n+",
              args: {
                name: "MODE",
                description: "String",
                suggestions: ["ALL", "SYNC_FROM_PRIMARY"],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "restart",
          description: "Restarts a Cloud SQL instance",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
        },
        {
          name: "restore-backup",
          description: "Restores a backup of a Cloud SQL instance",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup-id",
              description: "The ID of the backup run to restore from",
              args: { name: "BACKUP_ID", description: "Int", suggestions: [] },
            },
            {
              name: "--backup-instance",
              description:
                "The ID of the instance that the backup was taken from",
              args: {
                name: "BACKUP_INSTANCE",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description: "Cloud SQL instance ID that will be restored",
          },
        },
        {
          name: "switchover",
          description:
            "Switches over a Cloud SQL instance to one of its replicas",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--db-timeout",
              description:
                "(MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is the sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24h",
              args: {
                name: "DB_TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "REPLICA", description: "Cloud SQL replica ID" },
        },
      ],
    },
    {
      name: "operations",
      description:
        "Provide commands for working with Cloud SQL instance operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a Cloud SQL instance operation",
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
            name: "OPERATION",
            description: "Name that uniquely identifies the operation",
          },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud SQL instance operation",
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
            name: "OPERATION",
            description: "Name that uniquely identifies the operation",
          },
        },
        {
          name: "list",
          description:
            "Lists all instance operations for the given Cloud SQL instance",
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
            flag5881,
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
          name: "wait",
          description: "Waits for one or more operations to complete",
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
              name: "--timeout",
              description:
                "Maximum number of seconds to wait for an operation to complete. By default, wait for 300s. Set to *unlimited* to wait indefinitely",
              args: { name: "TIMEOUT", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OPERATION",
            description: "An identifier that uniquely identifies the operation",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "reschedule-maintenance",
      description: "Reschedule a Cloud SQL instance's maintenance",
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
          name: "--reschedule-type",
          description:
            "The type of reschedule operation to perform. _RESCHEDULE_TYPE_ must be one of: *IMMEDIATE*, *NEXT_AVAILABLE_WINDOW*, *SPECIFIC_TIME*",
          args: {
            name: "RESCHEDULE_TYPE",
            description: "String",
            suggestions: [
              "IMMEDIATE",
              "NEXT_AVAILABLE_WINDOW",
              "SPECIFIC_TIME",
            ],
          },
        },
        {
          name: "--schedule-time",
          description:
            "When specifying SPECIFIC_TIME, the date and time at which to schedule the maintenance in ISO 8601 format",
          args: {
            name: "SCHEDULE_TIME",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: { name: "INSTANCE", description: "Cloud SQL instance ID" },
    },
    {
      name: "ssl",
      description:
        "Provide commands for managing SSL certificates of Cloud SQL instances",
      subcommands: [
        {
          name: "client-certs",
          description:
            "Provide commands for managing client certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create a client certificate for a Cloud SQL instance",
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
                flag5881,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "COMMON_NAME",
                  description:
                    "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
                },
                {
                  name: "CERT_FILE",
                  description:
                    "Location of file which the private key of the created ssl-cert will be written to",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a client certificate for a Cloud SQL instance",
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
                flag5881,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "COMMON_NAME",
                description:
                  "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
              },
            },
            {
              name: "describe",
              description:
                "Retrieve information about a client cert for a Cloud SQL instance",
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
                flag5881,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "COMMON_NAME",
                description:
                  "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
              },
            },
            {
              name: "list",
              description: "List all client certs for a Cloud SQL instance",
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
                flag5881,
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
          name: "entraid-certs",
          description:
            "Provide commands for managing Entra ID certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Entra ID certificate for a Cloud SQL instance",
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
                flag5881,
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
                "List all Entra ID certificates for a Cloud SQL instance",
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
                flag5881,
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
              name: "rollback",
              description:
                "Roll back to the previous Entra ID certificate for a Cloud SQL instance",
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
                flag5881,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate in the upcoming Entra ID certificate for a Cloud SQL instance",
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
                flag5881,
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
          name: "server-ca-certs",
          description:
            "Provide commands for managing server CA certs of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description: "Create a server CA cert for a Cloud SQL instance",
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
                flag5881,
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
              description: "List all server CA certs for a Cloud SQL instance",
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
                flag5881,
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
              name: "rollback",
              description:
                "Roll back to the previous server CA cert for a Cloud SQL instance",
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
                flag5881,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate in the upcoming server CA cert for a Cloud SQL instance",
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
                flag5881,
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
          name: "server-certs",
          description:
            "Provide commands for managing server certificates of Cloud SQL instances",
          subcommands: [
            {
              name: "create",
              description:
                "Create a server certificate for a Cloud SQL instance",
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
                flag5881,
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
                "List all server certificates for a Cloud SQL instance",
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
                flag5881,
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
              name: "rollback",
              description:
                "Roll back to the previous server certificate for a Cloud SQL instance",
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
                flag5881,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "rotate",
              description:
                "Rotate in the upcoming server certificate for a Cloud SQL instance",
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
                flag5881,
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
      ],
    },
    {
      name: "ssl-certs",
      description:
        "*(DEPRECATED)*  Provide commands for managing SSL certificates of Cloud SQL instances",
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)*  Creates an SSL certificate for a Cloud SQL instance",
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
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "COMMON_NAME",
              description:
                "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
            },
            {
              name: "CERT_FILE",
              description:
                "Location of file which the private key of the created ssl-cert will be written to",
            },
          ],
        },
        {
          name: "delete",
          description:
            "*(DEPRECATED)*  Deletes an SSL certificate for a Cloud SQL instance",
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
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "COMMON_NAME",
            description:
              "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
          },
        },
        {
          name: "describe",
          description:
            "*(DEPRECATED)*  Retrieves information about an SSL cert for a Cloud SQL instance",
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
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "COMMON_NAME",
            description:
              "User supplied name. Constrained to ```[a-zA-Z.-_ ]+```",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)*  Lists all SSL certs for a Cloud SQL instance",
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
            flag5881,
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
      name: "tiers",
      description: "Provide a command to list tiers",
      subcommands: [
        {
          name: "list",
          description: "Lists all available service tiers for Google Cloud SQL",
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
            flag13783,
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
      description: "Provide commands for managing Cloud SQL users",
      subcommands: [
        {
          name: "assign-roles",
          description: "Updates a user's database roles in a given instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2756,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5481,
            flag5699,
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--revoke-existing-roles",
              description:
                "A boolean flag for revoking existing database roles from the user.\nThis option is only available for MySQL and PostgreSQL instances",
            },
            flag14975,
            {
              name: "--type",
              description:
                "Cloud SQL user's type. It determines the method to authenticate the user during login. See the list of user types at https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/SqlUserType",
              args: { name: "TYPE", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "Cloud SQL username" },
        },
        {
          name: "create",
          description: "Creates a user in a given instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2756,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5481,
            flag5699,
            flag5881,
            flag7356,
            flag11163,
            flag11153,
            flag11156,
            flag11157,
            flag11160,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--type",
              description:
                "Cloud SQL user's type. It determines the method to authenticate the user during login. See the list of user types at https://cloud.google.com/sql/docs/postgres/admin-api/rest/v1beta4/SqlUserType",
              args: { name: "TYPE", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "Cloud SQL username" },
        },
        {
          name: "delete",
          description: "Deletes a Cloud SQL user in a given instance",
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
            flag5481,
            flag5699,
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "Cloud SQL username" },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud SQL user in a given instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5481,
            flag5699,
            flag5881,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "Cloud SQL username" },
        },
        {
          name: "list",
          description: "Lists Cloud SQL users in a given instance",
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
            flag5881,
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
          name: "set-password",
          description: "Changes a user's password in a given instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--discard-dual-password",
              description:
                "Discard the user's secondary password. Cannot set password and set this flag. This flag is only available for MySQL 8.0",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5481,
            flag5699,
            flag5881,
            flag7356,
            flag11163,
            flag11637,
            {
              name: "--prompt-for-password",
              description:
                "Prompt for the Cloud SQL user's password with character echo disabled. The password is all typed characters up to but not including the RETURN or ENTER key",
            },
            flag11946,
            {
              name: "--retain-password",
              description:
                "Retain the old password when changing to the new password. Must set password with this flag. This flag is only available for MySQL 8.0",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "Cloud SQL username" },
        },
        {
          name: "set-password-policy",
          description: "Replaces a user's password policy in a given instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1814,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5481,
            flag5699,
            flag5881,
            flag7356,
            flag11153,
            flag11156,
            flag11157,
            flag11160,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "USERNAME", description: "Cloud SQL username" },
        },
      ],
    },
  ],
};

export default completionSpec;
