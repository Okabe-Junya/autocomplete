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
const flag384: Fig.Option = {
  name: "--all-databases",
  description:
    "Migrate all databases for the migration job. This flag is used only for\nPostgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud\nSQL MySQL migrations",
};
const flag484: Fig.Option = {
  name: "--alloydb-cluster",
  description:
    "If the destination is an AlloyDB cluster, use this field to provide the\nAlloyDB cluster ID",
  args: { name: "ALLOYDB_CLUSTER", description: "String", suggestions: [] },
};
const flag821: Fig.Option = {
  name: "--auto-commit",
  description: "Auto commits the conversion workspace",
};
const flag826: Fig.Option = {
  name: "--auto-conversion",
  description:
    "Whether to enable Gemini auto-conversion. Use *--auto-conversion* to enable and *--no-auto-conversion* to disable",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1328: Fig.Option = {
  name: "--ca-certificate",
  description:
    "x509 PEM-encoded certificate of the CA that signed the database\nserver's certificate. The value for this flag needs to\nbe the content of the certificate file, not the path to the file.\nFor example, on a Linux machine you can use command substitution:\n<code>--ca-certificate=$(</path/to/certificate_file.pem)</code>.\nDatabase Migration Service will use this certificate to verify\nit's connecting to the correct host. Database Migration Service encrypts the\nvalue when storing it",
  args: { name: "CA_CERTIFICATE", description: "String", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag1963: Fig.Option = {
  name: "--client-certificate",
  description:
    "x509 PEM-encoded certificate that will be used by the replica to\nauthenticate against the database server.  The value for this flag needs to\nbe the content of the certificate file, not the path to the file.\nFor example, on a Linux machine you can use command substitution:\n<code>--ca-certificate=$(</path/to/certificate_file.pem)</code>.\nDatabase Migration Service encrypts the value when storing it",
  args: { name: "CLIENT_CERTIFICATE", description: "String", suggestions: [] },
};
const flag2027: Fig.Option = {
  name: "--cloudsql-instance",
  description:
    "If the source or destination is a Cloud SQL database, then use this field\nto provide the respective Cloud SQL instance ID",
  args: { name: "CLOUDSQL_INSTANCE", description: "String", suggestions: [] },
};
const flag2028: Fig.Option = {
  name: "--cloudsql-project-id",
  description:
    "The project id of the Cloud SQL instance. Only needed if the Cloud SQL instance is in a different project than the connection profile. This is only supported for source connection profiles for SQL Server",
  args: { name: "CLOUDSQL_PROJECT_ID", description: "String", suggestions: [] },
};
const flag2101: Fig.Option = {
  name: "--cmek-key",
  description:
    "ID of the cmek-key or fully qualified identifier for the cmek-key.\n+\nTo set the `cmek-key` attribute:\n* provide the argument `--cmek-key` on the command line",
  args: { name: "CMEK_KEY", description: "String", suggestions: [] },
};
const flag2102: Fig.Option = {
  name: "--cmek-keyring",
  description:
    "The CMEK keyring id of the cmek-key.\n+\nTo set the `cmek-keyring` attribute:\n* provide the argument `--cmek-key` on the command line with a fully specified name;\n* provide the argument `--cmek-keyring` on the command line",
  args: { name: "CMEK_KEYRING", description: "String", suggestions: [] },
};
const flag2104: Fig.Option = {
  name: "--cmek-project",
  description:
    "The Cloud project id for the cmek-key.\n+\nTo set the `cmek-project` attribute:\n* provide the argument `--cmek-key` on the command line with a fully specified name;\n* provide the argument `--cmek-project` on the command line",
  args: { name: "CMEK_PROJECT", description: "String", suggestions: [] },
};
const flag2161: Fig.Option = {
  name: "--commit-id",
  description:
    "Commit id for the conversion workspace to use for creating the migration job. If not specified, the latest commit id will be used by default",
  args: { name: "COMMIT_ID", description: "String", suggestions: [] },
};
const flag2162: Fig.Option = {
  name: "--commit-id",
  description:
    "Request a specific commit id.\nIf not specified, the entities from the latest commit are returned",
  args: { name: "COMMIT_ID", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2489: Fig.Option = {
  name: "--conversion-assistance",
  description:
    "Whether to enable Gemini conversion assistance. Use *--conversion-assistance* to enable and *--no-conversion-assistance* to disable",
};
const flag2490: Fig.Option = {
  name: "--conversion-workspace",
  description:
    "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `--conversion-workspace` on the command line",
  args: {
    name: "CONVERSION_WORKSPACE",
    description: "String",
    suggestions: [],
  },
};
const flag2800: Fig.Option = {
  name: "--database",
  description: "The name of the specific database within the host",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2804: Fig.Option = {
  name: "--databases-filter",
  description:
    "A list of databases to be migrated to the destination instance.\nProvide databases as a comma separated list. This flag is used only for\nPostgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud\nSQL MySQL migrations",
  args: { name: "databaseName", description: "List", suggestions: [] },
};
const flag2805: Fig.Option = {
  name: "--databases-filter",
  description:
    "A list of databases to be migrated to the destination instance.\nProvide databases as a comma separated list. This flag is used only for\nSQL Server to Cloud SQL SQL Server migrations",
  args: { name: "databaseName", description: "List", suggestions: [] },
};
const flag3376: Fig.Option = {
  name: "--destination-connection-profile",
  description:
    "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--destination-connection-profile` on the command line",
  args: {
    name: "DESTINATION_CONNECTION_PROFILE",
    description: "String",
    suggestions: [],
  },
};
const flag3477: Fig.Option = {
  name: "--destination",
  description:
    "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--destination` on the command line",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
};
const flag3698: Fig.Option = {
  name: "--display-name",
  description:
    "A user-friendly name for the connection profile. The display name can\ninclude letters, numbers, spaces, and hyphens, and must start with a letter",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3699: Fig.Option = {
  name: "--display-name",
  description:
    "A user-friendly name for the conversion workspace. The display name can\ninclude letters, numbers, spaces, and hyphens, and must start with a letter.\nThe maximum length allowed is 60 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3700: Fig.Option = {
  name: "--display-name",
  description:
    "A user-friendly name for the migration job. The display name can include\nletters, numbers, spaces, and hyphens, and must start with a letter",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3947: Fig.Option = {
  name: "--dump-flags",
  description:
    'A list of dump flags. An object containing a list of "key": "value" pairs',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag3948: Fig.Option = {
  name: "--dump-parallel-level",
  description:
    "Parallelization level during initial dump of the migration job. If not specified, will be defaulted to OPTIMAL. _DUMP_PARALLEL_LEVEL_ must be one of: *MIN*, *OPTIMAL*, *MAX*",
  args: {
    name: "DUMP_PARALLEL_LEVEL",
    description: "String",
    suggestions: ["MIN", "OPTIMAL", "MAX"],
  },
};
const flag3949: Fig.Option = {
  name: "--dump-path",
  description:
    "Path to the dump file in Google Cloud Storage, in the format:\n`gs://[BUCKET_NAME]/[OBJECT_NAME]`",
  args: { name: "DUMP_PATH", description: "String", suggestions: [] },
};
const flag3950: Fig.Option = {
  name: "--dump-type",
  description:
    "The type of the data dump. Currently applicable for MySQL to MySQL migrations only. _DUMP_TYPE_ must be one of: *LOGICAL*, *PHYSICAL*",
  args: {
    name: "DUMP_TYPE",
    description: "String",
    suggestions: ["LOGICAL", "PHYSICAL"],
  },
};
const flag4149: Fig.Option = {
  name: "--enable-iam-authentication",
  description:
    "Use IAM database authentication to connect to the database. The username will be overridden by the DMS service agent principal. This flag is only supported for PostgreSQL Destinations",
};
const flag4401: Fig.Option = {
  name: "--endpoint-mode",
  description:
    "Specifies endpoint mode for a given command. Regional endpoints\nprovide enhanced data residency and reliability by ensuring your\nrequest is handled entirely within the specified Google Cloud region.\nThis differs from global endpoints, which may process parts of the\nrequest outside the target region. Overrides the default *regional/endpoint_mode* property value for this command invocation. _ENDPOINT_MODE_ must be one of:\n+\n*global*::: (Default) Use global rather than regional endpoints.\n*regional*::: Only use regional endpoints. An error will be raised if a regional endpoint is not available for a given command.\n*regional-preferred*::: Use regional endpoints when available, otherwise use global endpoints. Recommended for most users.\n:::\n+",
  args: {
    name: "ENDPOINT_MODE",
    description: "String",
    suggestions: ["global", "regional", "regional-preferred"],
  },
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4859: Fig.Option = {
  name: "--filter",
  description:
    'Filter the entities based on [AIP-160](https://google.aip.dev/160) standard.\nExample:\n  to filter all tables whose name start with "Employee" and are present\n  under schema "Company", use filter as\n    "Company.Employee```*``` AND type=TABLE"',
  args: { name: "FILTER", description: "String", suggestions: [] },
};
const flag4860: Fig.Option = {
  name: "--filter",
  description:
    'Filter the entities based on [AIP-160](https://google.aip.dev/160) standard. Example: to filter all tables whose name start with "Employee" and are present under schema "Company", use filter as "Company.Employee```*``` AND type=TABLE"',
  args: { name: "FILTER", description: "String", suggestions: [] },
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
const flag5093: Fig.Option = {
  name: "--forward-ssh-hostname",
  description: "Hostname for the SSH tunnel",
  args: {
    name: "FORWARD_SSH_HOSTNAME",
    description: "String",
    suggestions: [],
  },
};
const flag5094: Fig.Option = {
  name: "--forward-ssh-password",
  description: "SSH password",
  args: {
    name: "FORWARD_SSH_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag5095: Fig.Option = {
  name: "--forward-ssh-port",
  description: "Port for the SSH tunnel, default value is 22",
  args: { name: "FORWARD_SSH_PORT", description: "Int", suggestions: [] },
};
const flag5096: Fig.Option = {
  name: "--forward-ssh-private-key",
  description: "SSH private key.",
  args: {
    name: "FORWARD_SSH_PRIVATE_KEY",
    description: "String",
    suggestions: [],
  },
};
const flag5098: Fig.Option = {
  name: "--forward-ssh-username",
  description: "Username for the SSH tunnel",
  args: {
    name: "FORWARD_SSH_USERNAME",
    description: "String",
    suggestions: [],
  },
};
const flag5157: Fig.Option = {
  name: "--gcs-bucket",
  description:
    "Cloud Storage bucket for the source SQL Server connection profile where the backups are stored. This flag is used only for SQL Server to Cloud SQL migrations",
  args: { name: "GCS_BUCKET", description: "String", suggestions: [] },
};
const flag5177: Fig.Option = {
  name: "--gcs-prefix",
  description:
    "Cloud Storage prefix path within the bucket for the source SQL Server connection profile where the backups are stored. This flag is used only for SQL Server to Cloud SQL migrations",
  args: { name: "GCS_PREFIX", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5482: Fig.Option = {
  name: "--host",
  description:
    "IP or hostname of the database.\n+\n    For PostgreSQL destination profiles with Cloud SQL or AlloyDB, this flag is\n    optional if the instance or cluster is provided.\n+\n\n    When `--psc-service-attachment` is also specified, this field value\n    should be:\n+\n    1. For Cloud SQL PSC enabled instance - the dns_name field\n       (e.g <uid>.<region>.sql.goog.).\n    2. For Cloud SQL PSA instance (vpc peering) - the private ip of the\n       instance.\n+\n    3. For AlloyDB PSC enabled cluster - the dns_name field of the primary\n       instance (e.g <uid>.<region>.alloydb-psc.goog.).\n+\n    4. For AlloyDB PSA cluster - the private ip of the primary instance",
  args: { name: "HOST", description: "String", suggestions: [] },
};
const flag5483: Fig.Option = {
  name: "--host",
  description:
    "IP or hostname of the database.\n+\n    When `--psc-service-attachment` is also specified, this field value\n    should be:\n+\n    1. For Cloud SQL PSC enabled instance - the dns_name field\n       (e.g <uid>.<region>.sql.goog.).\n    2. For Cloud SQL PSA instance (vpc peering) - the private ip of the\n       instance",
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
const flag7614: Fig.Option = {
  name: "--max-concurrent-cdc-connections",
  description:
    "Maximum number of connections Database Migration Service will open to\nthe source for CDC phase",
  args: {
    name: "MAX_CONCURRENT_CDC_CONNECTIONS",
    description: "Int",
    suggestions: [],
  },
};
const flag7615: Fig.Option = {
  name: "--max-concurrent-destination-connections",
  description:
    "Maximum number of concurrent connections Database Migration Service will\nopen to the destination for data migration",
  args: {
    name: "MAX_CONCURRENT_DESTINATION_CONNECTIONS",
    description: "Int",
    suggestions: [],
  },
};
const flag7617: Fig.Option = {
  name: "--max-concurrent-full-dump-connections",
  description:
    "Maximum number of connections Database Migration Service will open to\nthe source for full dump phase",
  args: {
    name: "MAX_CONCURRENT_FULL_DUMP_CONNECTIONS",
    description: "Int",
    suggestions: [],
  },
};
const flag7870: Fig.Option = {
  name: "--migration-job",
  description:
    "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `--migration-job` on the command line",
  args: { name: "MIGRATION_JOB", description: "String", suggestions: [] },
};
const flag8442: Fig.Option = {
  name: "--no-async",
  description:
    "Waits for the operation in progress to complete before returning",
};
const flag11054: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *100*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
  args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
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
const flag11167: Fig.Option = {
  name: "--password",
  description:
    "Password for the user that Database Migration Service uses to\nconnect to the database. Database Migration Service encrypts\nthe value when storing it, and the field is not returned on request",
  args: { name: "PASSWORD", description: "String", suggestions: [] },
};
const flag11188: Fig.Option = {
  name: "--pattern-matching",
  description:
    "Whether to enable Gemini pattern matching. Use *--pattern-matching* to enable and *--no-pattern-matching* to disable",
};
const flag11231: Fig.Option = {
  name: "--peer-vpc",
  description:
    "Name of the VPC network to peer with the Cloud SQL private network",
  args: { name: "PEER_VPC", description: "String", suggestions: [] },
};
const flag11406: Fig.Option = {
  name: "--port",
  description:
    "Network port of the database.\n+\n    For PostgreSQL destination profiles with Cloud SQL or AlloyDB, this flag is\n    optional if the instance or cluster is provided",
  args: { name: "PORT", description: "Int", suggestions: [] },
};
const flag11407: Fig.Option = {
  name: "--port",
  description: "Network port of the database",
  args: { name: "PORT", description: "Int", suggestions: [] },
};
const flag11436: Fig.Option = {
  name: "--postgres-max-additional-subscriptions",
  description:
    "Maximum number of additional subscriptions to use for the PostgreSQL migration job",
  args: {
    name: "POSTGRES_MAX_ADDITIONAL_SUBSCRIPTIONS",
    description: "Int",
    suggestions: [],
  },
};
const flag11584: Fig.Option = {
  name: "--private-connection",
  description:
    "ID of the private_connection or fully qualified identifier for the private_connection.\n+\nTo set the `private_connection` attribute:\n* provide the argument `--private-connection` on the command line",
  args: { name: "PRIVATE_CONNECTION", description: "String", suggestions: [] },
};
const flag11606: Fig.Option = {
  name: "--private-key",
  description:
    "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with\nthe Client Certificate.  The value for this flag needs to\nbe the content of the certificate file, not the path to the file.\nFor example, on a Linux machine you can use command substitution:\n<code>--ca-certificate=$(</path/to/certificate_file.pem)</code>.\nDatabase Migration Service encrypts the value when storing it",
  args: { name: "PRIVATE_KEY", description: "String", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11644: Fig.Option = {
  name: "--prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};
const flag11772: Fig.Option = {
  name: "--provider",
  description:
    "Database provider, for managed databases. _PROVIDER_ must be one of: *RDS*, *CLOUDSQL*",
  args: {
    name: "PROVIDER",
    description: "String",
    suggestions: ["RDS", "CLOUDSQL"],
  },
};
const flag11834: Fig.Option = {
  name: "--psc-service-attachment",
  description:
    "ID of the service_attachment or fully qualified identifier for the service_attachment.\n+\nTo set the `service_attachment` attribute:\n* provide the argument `--psc-service-attachment` on the command line",
  args: {
    name: "PSC_SERVICE_ATTACHMENT",
    description: "String",
    suggestions: [],
  },
};
const flag11918: Fig.Option = {
  name: "--quality-assessment",
  description:
    "Whether to enable Gemini quality assessment. Use *--quality-assessment* to enable and *--no-quality-assessment* to disable",
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12312: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12428: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the connection_profile.\n+\nTo set the `region` attribute:\n* provide the argument `connection_profile` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12429: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the conversion_workspace.\n+\nTo set the `region` attribute:\n* provide the argument `conversion_workspace` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12434: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the migration_job.\n+\nTo set the `region` attribute:\n* provide the argument `--migration-job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12435: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the migration_job.\n+\nTo set the `region` attribute:\n* provide the argument `migration_job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12436: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the private_connection.\n+\nTo set the `region` attribute:\n* provide the argument `private_connection` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12458: Fig.Option = {
  name: "--region",
  description:
    "The name of the region.\n+\nTo set the `region` attribute:\n* provide the argument `connection_profile` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12459: Fig.Option = {
  name: "--region",
  description:
    "The name of the region.\n+\nTo set the `region` attribute:\n* provide the argument `conversion_workspace` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12460: Fig.Option = {
  name: "--region",
  description:
    "The name of the region.\n+\nTo set the `region` attribute:\n* provide the argument `migration_job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12461: Fig.Option = {
  name: "--region",
  description:
    "The name of the region.\n+\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag13130: Fig.Option = {
  name: "--role",
  description:
    "The role of the connection profile. _ROLE_ must be one of: *SOURCE*, *DESTINATION*",
  args: {
    name: "ROLE",
    description: "String",
    suggestions: ["SOURCE", "DESTINATION"],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag13981: Fig.Option = {
  name: "--source-database-name-override",
  description:
    "The database name to use when seeding from a connection profile. If not\nspecified, the database name from the connection profile is used.\nCurrently only supported for SQL Server source seeding",
  args: {
    name: "SOURCE_DATABASE_NAME_OVERRIDE",
    description: "String",
    suggestions: [],
  },
};
const flag14164: Fig.Option = {
  name: "--source",
  description:
    "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--source` on the command line",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14259: Fig.Option = {
  name: "--sqlserver-diff-backup",
  description:
    "Enable differential backups. If not specified, differential backups\nare disabled by default. Use --sqlserver-diff-backup to enable and\n--no-sqlserver-diff-backup to disable. This flag is used only for\nhomogeneous SQL Server to Cloud SQL for SQL Server migrations",
};
const flag14260: Fig.Option = {
  name: "--sqlserver-encrypted-databases",
  description:
    'A JSON/YAML file describing the encryption settings per database for all encrytped databases.\nNote:\nPath to the Certificate (.cer) and Private Key (.pvk) in Cloud Storage,\nshould be in the form of `gs://bucketName/fileName`. The instance must\nhave write permissions to the bucket and read access to the file.\nAn example of a JSON request:\n    [{\n        "database": "db1",\n        "encryptionOptions": {\n            "certPath": "Path to certificate 1",\n            "pvkPath": "Path to certificate private key 1",\n            "pvkPassword": "Private key password 1"\n        }\n    },\n    {\n        "database": "db2",\n        "encryptionOptions": {\n            "certPath": "Path to certificate 2",\n            "pvkPath": "Path to certificate private key 2",\n            "pvkPassword": "Private key password 2"\n        }\n    }]\n+\n  This flag accepts "-" for stdin. This flag is used only for SQL Server to Cloud SQL migrations',
  args: {
    name: "SQLSERVER_ENCRYPTED_DATABASES",
    description: "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
    suggestions: [],
  },
};
const flag14267: Fig.Option = {
  name: "--sqlserver-promote-when-ready",
  description:
    "Promote the database when it is ready. Use --sqlserver-promote-when-ready\nto enable and --no-sqlserver-promote-when-ready to disable. This flag is\nused only for homogeneous SQL Server to Cloud SQL for SQL Server\nmigrations",
};
const flag14320: Fig.Option = {
  name: "--ssl-type",
  description:
    "The type of SSL configuration. _SSL_TYPE_ must be one of: *SERVER_ONLY*, *SERVER_CLIENT*, *REQUIRED*, *NONE*",
  args: {
    name: "SSL_TYPE",
    description: "String",
    suggestions: ["SERVER_ONLY", "SERVER_CLIENT", "REQUIRED", "NONE"],
  },
};
const flag14420: Fig.Option = {
  name: "--static-ip-connectivity",
  description: "use static ip connectivity",
};
const flag14421: Fig.Option = {
  name: "--static-ip",
  description:
    "Use the default IP allowlist method. This method creates a public IP that will be used with the destination Cloud SQL database. The method works by configuring the source database server to accept connections from the outgoing IP of the Cloud SQL instance",
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14983: Fig.Option = {
  name: "--transaction-timeout",
  description: "Timeout for data migration transactions",
  args: {
    name: "TRANSACTION_TIMEOUT",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15100: Fig.Option = {
  name: "--uncommitted",
  description:
    "Whether to retrieve the latest committed version of the entities or the\nlatest version.\nThis field is ignored if a specific commit_id is specified",
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
const flag15347: Fig.Option = {
  name: "--username",
  description:
    "Username that Database Migration Service uses to connect to\nthe database. Database Migration Service encrypts the value when storing\nit",
  args: { name: "USERNAME", description: "String", suggestions: [] },
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
const flag15493: Fig.Option = {
  name: "--vm",
  description: "Name of VM that will host the SSH tunnel bastion",
  args: { name: "VM", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "database-migration",
  description: "Manage Database Migration Service resources",
  subcommands: [
    {
      name: "connection-profiles",
      description: "Manage Database Migration Service connection profiles",
      subcommands: [
        {
          name: "create",
          description: "Create Database Migration Service connection profiles",
          subcommands: [
            {
              name: "alloydb",
              description:
                "Create a Database Migration Service connection profile for AlloyDB",
              options: [
                flag42,
                flag46,
                {
                  name: "--authorized-network-cidr-ranges",
                  description:
                    "Comma-separated list of CIDR ranges that can connect to the AlloyDB instance",
                  args: {
                    name: "NETWORK",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag1201,
                {
                  name: "--cluster-labels",
                  description:
                    'The resource labels for an AlloyDB cluster. An object containing a list\nof "key": "value" pairs',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--cpu-count",
                  description:
                    "Whole number value indicating how many vCPUs the machine should\ncontain. Each vCPU count corresponds to a N2 high-mem machine:\n(https://cloud.google.com/compute/docs/general-purpose-machines#n2_machines). _CPU_COUNT_ must be one of: *2*, *4*, *8*, *16*, *32*, *64*",
                  args: {
                    name: "CPU_COUNT",
                    description: "Int",
                    suggestions: ["2", "4", "8", "16", "32", "64"],
                  },
                },
                {
                  name: "--database-flags",
                  description:
                    "Comma-separated list of database flags to set on the AlloyDB primary\ninstance. Use an equals sign to separate the flag name and value. Flags\nwithout values, like skip_grant_tables, can be written out without a value,\ne.g., `skip_grant_tables=`. Use on/off values for booleans. View AlloyDB's\ndocumentation for allowed flags (e.g., `--database-flags\nmax_allowed_packet=55555,skip_grant_tables=,log_output=1`)",
                  args: {
                    name: "FLAG=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--database-version",
                  description:
                    "Database engine major version. _DATABASE_VERSION_ must be one of: *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*, *POSTGRES_17*",
                  args: {
                    name: "DATABASE_VERSION",
                    description: "String",
                    suggestions: [
                      "POSTGRES_14",
                      "POSTGRES_15",
                      "POSTGRES_16",
                      "POSTGRES_17",
                    ],
                  },
                },
                flag3698,
                {
                  name: "--enable-outbound-public-ip",
                  description:
                    "If true, Enables an outbound public IP address to support a database\nserver sending requests out into the internet",
                },
                {
                  name: "--enable-public-ip",
                  description:
                    "If true, the AlloyDB instance will be accessible via public IP",
                },
                flag4401,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--kms-key",
                  description:
                    "ID of the kms-key or fully qualified identifier for the kms-key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
                  args: {
                    name: "KMS_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kms-keyring",
                  description:
                    "The CMEK keyring id of the kms-key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
                  args: {
                    name: "KMS_KEYRING",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kms-project",
                  description:
                    "The Cloud project id for the kms-key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line",
                  args: {
                    name: "KMS_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6413,
                flag7356,
                {
                  name: "--network",
                  description:
                    "The VPC network from which the AlloyDB instance is accessible via private\nIP. For example, projects/myProject/global/networks/default. This setting\ncannot be updated after it is set",
                  args: {
                    name: "NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag8442,
                {
                  name: "--password",
                  description: "Initial password for the 'postgres' user",
                  args: {
                    name: "PASSWORD",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--primary-id",
                  description:
                    "The ID of the primary instance for this AlloyDB cluster",
                  args: {
                    name: "PRIMARY_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--primary-labels",
                  description:
                    'The resource labels for an AlloyDB primary instance. An object containing a\nlist of "key": "value" pairs',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag12428,
                flag13130,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
              },
            },
            {
              name: "cloudsql",
              description:
                "Create a Database Migration Service connection profile for Cloud SQL",
              options: [
                flag42,
                flag46,
                {
                  name: "--activation-policy",
                  description:
                    "Activation policy specifies when the instance is activated; it is\napplicable only when the instance state is 'RUNNABLE'. Valid values:\n+\nALWAYS: The instance is on, and remains so even in the absence of\nconnection requests.\n+\nNEVER: The instance is off; it is not activated, even if a connection\nrequest arrives.\n+\n_ACTIVATION_POLICY_ must be one of: *ALWAYS*, *NEVER*",
                  args: {
                    name: "ACTIVATION_POLICY",
                    description: "String",
                    suggestions: ["ALWAYS", "NEVER"],
                  },
                },
                {
                  name: "--allocated-ip-range",
                  description:
                    "The name of the allocated IP range for the private IP Cloud SQL instance.\nThis name refers to an already allocated IP range.\nIf set, the instance IP will be created in the allocated range",
                  args: {
                    name: "ALLOCATED_IP_RANGE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--authorized-networks",
                  description:
                    "List of external networks that are allowed to connect to the instance.\nSpecify values in CIDR notation, also known as 'slash' notation\n(e.g.192.168.100.0/24)",
                  args: {
                    name: "NETWORK",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--auto-storage-increase",
                  description:
                    "If you enable this setting, Cloud SQL checks your available storage every\n30 seconds. If the available storage falls below a threshold size, Cloud\nSQL automatically adds additional storage capacity. If the available\nstorage repeatedly falls below the threshold size, Cloud SQL continues to\nadd storage until it reaches the maximum of 64 TB. Default: ON. Enabled by default, use *--no-auto-storage-increase* to disable",
                },
                {
                  name: "--availability-type",
                  description:
                    "Cloud SQL availability type. _AVAILABILITY_TYPE_ must be one of: *REGIONAL*, *ZONAL*",
                  args: {
                    name: "AVAILABILITY_TYPE",
                    description: "String",
                    suggestions: ["REGIONAL", "ZONAL"],
                  },
                },
                flag1201,
                flag2101,
                flag2102,
                flag2104,
                flag2292,
                {
                  name: "--data-disk-size",
                  description:
                    "Storage capacity available to the database, in GB. The minimum (and\ndefault) size is 10GB",
                  args: {
                    name: "DATA_DISK_SIZE",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--data-disk-type",
                  description:
                    "Type of storage. _DATA_DISK_TYPE_ must be one of: *PD_SSD*, *PD_HDD*",
                  args: {
                    name: "DATA_DISK_TYPE",
                    description: "String",
                    suggestions: ["PD_SSD", "PD_HDD"],
                  },
                },
                {
                  name: "--database-flags",
                  description:
                    "Comma-separated list of database flags to set on the instance. Use an equals\nsign to separate the flag name and value. Flags without values, like\nskip_grant_tables, can be written out without a value, e.g.,\n`skip_grant_tables=`. Use on/off values for booleans. View the Instance\nResource API for allowed flags. (e.g., `--database-flags max_allowed_packet=55555\nskip_grant_tables=,log_output=1`)",
                  args: {
                    name: "FLAG=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--database-version",
                  description:
                    "Database engine type and version. _DATABASE_VERSION_ must be one of: *MYSQL_5_7*, *MYSQL_5_6*, *MYSQL_8_0*, *MYSQL_8_0_18*, *MYSQL_8_0_26*, *MYSQL_8_0_27*, *MYSQL_8_0_28*, *MYSQL_8_0_30*, *MYSQL_8_0_31*, *MYSQL_8_0_32*, *MYSQL_8_0_33*, *MYSQL_8_0_34*, *MYSQL_8_0_35*, *MYSQL_8_0_36*, *MYSQL_8_0_37*, *MYSQL_8_4*, *POSTGRES_9_6*, *POSTGRES_10*, *POSTGRES_11*, *POSTGRES_12*, *POSTGRES_13*, *POSTGRES_14*, *POSTGRES_15*, *POSTGRES_16*",
                  args: {
                    name: "DATABASE_VERSION",
                    description: "String",
                    suggestions: [
                      "MYSQL_5_7",
                      "MYSQL_5_6",
                      "MYSQL_8_0",
                      "MYSQL_8_0_18",
                      "MYSQL_8_0_26",
                      "MYSQL_8_0_27",
                      "MYSQL_8_0_28",
                      "MYSQL_8_0_30",
                      "MYSQL_8_0_31",
                      "MYSQL_8_0_32",
                      "MYSQL_8_0_33",
                      "MYSQL_8_0_34",
                      "MYSQL_8_0_35",
                      "MYSQL_8_0_36",
                      "MYSQL_8_0_37",
                      "MYSQL_8_4",
                      "POSTGRES_9_6",
                      "POSTGRES_10",
                      "POSTGRES_11",
                      "POSTGRES_12",
                      "POSTGRES_13",
                      "POSTGRES_14",
                      "POSTGRES_15",
                      "POSTGRES_16",
                    ],
                  },
                },
                {
                  name: "--database-version-name",
                  description: "Database version name (e.g. POSTGRES_15)",
                  args: {
                    name: "DATABASE_VERSION_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3698,
                {
                  name: "--edition",
                  description:
                    "Specifies edition. _EDITION_ must be one of:\n+\n*enterprise*::: Enterprise is the standard option for smaller instances.\n*enterprise-plus*::: Enterprise plus option recommended for cpu-intensive workloads. Offers access to premium features and capabilities.\n:::\n+",
                  args: {
                    name: "EDITION",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["enterprise", "enterprise-plus"],
                  },
                },
                {
                  name: "--enable-ip-v4",
                  description:
                    "Whether the instance should be assigned an IPv4 address or not. Enabled by default, use *--no-enable-ip-v4* to disable",
                },
                flag4401,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag8442,
                {
                  name: "--private-network",
                  description:
                    "Resource link for the VPC network from which the Cloud SQL instance is\naccessible for private IP. For example,\n/projects/myProject/global/networks/default. This setting can be updated,\nbut it cannot be removed after it is set",
                  args: {
                    name: "PRIVATE_NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11772,
                flag11946,
                flag12428,
                {
                  name: "--require-ssl",
                  description:
                    "Whether SSL connections over IP should be enforced or not",
                },
                flag13130,
                {
                  name: "--root-password",
                  description: "Root Cloud SQL user's password",
                  args: {
                    name: "ROOT_PASSWORD",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--secondary-zone",
                  description:
                    "Google Cloud Platform zone where the failover Cloud SQL database\ninstance is located. Used when the Cloud SQL database availability type\nis REGIONAL (i.e. multiple zones / highly available)",
                  args: {
                    name: "SECONDARY_ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--source-id` on the command line",
                  args: {
                    name: "SOURCE_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--storage-auto-resize-limit",
                  description:
                    "Maximum size to which storage capacity can be automatically increased. The\ndefault value is 0, which specifies that there is no limit",
                  args: {
                    name: "STORAGE_AUTO_RESIZE_LIMIT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--tier",
                  description:
                    "Tier (or machine type) for this instance, for example: ``db-n1-standard-1''\n(MySQL instances) or ``db-custom-1-3840'' (PostgreSQL instances). For more\ninformation, see\n[Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings)",
                  args: {
                    name: "TIER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--user-labels",
                  description:
                    'The resource labels for a Cloud SQL instance to use to annotate any related\nunderlying resources such as Compute Engine VMs. An object containing a list\nof "key": "value" pairs',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                {
                  name: "--zone",
                  description:
                    "Google Cloud Platform zone where your Cloud SQL database instance is\nlocated",
                  args: {
                    name: "ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
              },
            },
            {
              name: "mysql",
              description:
                "Create a Database Migration Service connection profile for MySQL",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1328,
                flag1963,
                flag2027,
                flag2292,
                flag3698,
                flag4401,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5483,
                flag5699,
                flag6413,
                flag7356,
                flag8442,
                flag11167,
                flag11407,
                flag11606,
                flag11637,
                flag11644,
                flag11772,
                flag11946,
                flag12428,
                flag13130,
                flag14320,
                flag14975,
                flag15315,
                flag15347,
                flag15424,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
              },
            },
            {
              name: "oracle",
              description:
                "Create a Database Migration Service connection profile for Oracle",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--ca-certificate",
                  description:
                    "x509 PEM-encoded certificate of the CA that signed the database\nserver's certificate. The value for this flag needs to\nbe the content of the certificate file, not the path to the file.\nFor example, on a Linux machine you can use command substitution:\n<code>--ca-certificate=$(</path/to/certificate_file.pem)</code>.\nDatabase Migration Service will use this certificate to verify\nit's connecting to the correct host. Database Migration Service encrypts the\nvalue when storing it",
                  args: {
                    name: "CA_CERTIFICATE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--database-service",
                  description:
                    "database service for the oracle connection profile",
                  args: {
                    name: "DATABASE_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3698,
                flag4401,
                flag4900,
                flag4902,
                flag5091,
                flag5093,
                flag5094,
                flag5095,
                flag5096,
                flag5098,
                flag5453,
                flag5483,
                flag5699,
                flag6413,
                flag7356,
                flag8442,
                flag11167,
                flag11407,
                flag11584,
                flag11637,
                flag11644,
                flag11946,
                flag12428,
                flag13130,
                flag14420,
                flag14975,
                flag15315,
                flag15347,
                flag15424,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
              },
            },
            {
              name: "postgresql",
              description:
                "Create a Database Migration Service connection profile for PostgreSQL",
              options: [
                flag42,
                flag46,
                flag484,
                flag1201,
                flag1328,
                flag1963,
                flag2027,
                flag2292,
                {
                  name: "--database",
                  description:
                    "The name of the specific database within the host. For Native Logical Postgres migrations, one of the replicating databases must be specified",
                  args: {
                    name: "DATABASE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3698,
                flag4149,
                flag4401,
                flag4900,
                flag4902,
                flag5091,
                flag5093,
                flag5094,
                flag5095,
                flag5096,
                flag5098,
                flag5453,
                flag5482,
                flag5699,
                flag6413,
                flag7356,
                flag8442,
                flag11167,
                flag11406,
                flag11584,
                flag11606,
                flag11637,
                flag11644,
                flag11834,
                flag11946,
                flag12428,
                flag13130,
                flag14320,
                flag14420,
                flag14975,
                flag15315,
                flag15347,
                flag15424,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
              },
            },
            {
              name: "sqlserver",
              description:
                "Create a Database Migration Service connection profile for SQL Server",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1328,
                flag2027,
                flag2028,
                flag2292,
                flag2800,
                flag3698,
                flag4401,
                flag4900,
                flag4902,
                flag5091,
                flag5093,
                flag5094,
                flag5095,
                flag5096,
                flag5098,
                flag5157,
                flag5177,
                flag5453,
                flag5483,
                flag5699,
                flag6413,
                flag7356,
                flag8442,
                flag11167,
                flag11407,
                flag11584,
                flag11637,
                flag11644,
                {
                  name: "--provider",
                  description:
                    "Database provider, for managed databases. _PROVIDER_ must be one of: *CLOUDSQL*, *RDS*",
                  args: {
                    name: "PROVIDER",
                    description: "String",
                    suggestions: ["CLOUDSQL", "RDS"],
                  },
                },
                flag11834,
                flag11946,
                flag12428,
                flag13130,
                {
                  name: "--ssl-flags",
                  description:
                    "Comma-separated list of SSL flags used for establishing SSL connection to\nthe database. Use an equals sign to separate the flag name and value.\nExample:\n`--ssl-flags ssl_mode=enable,server_certificate_hostname=server.com`",
                  args: {
                    name: "FLAG=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--ssl-type",
                  description:
                    "The type of SSL configuration. _SSL_TYPE_ must be one of: *SERVER_ONLY*, *REQUIRED*, *NONE*",
                  args: {
                    name: "SSL_TYPE",
                    description: "String",
                    suggestions: ["SERVER_ONLY", "REQUIRED", "NONE"],
                  },
                },
                flag14420,
                flag14975,
                flag15315,
                {
                  name: "--username",
                  description:
                    "Username that Database Migration Service uses to connect to the\ndatabase for metrics and observability. We highly recommend that you\nuse the sqlserver user for this. Database Migration Service encrypts\nthe value when storing it",
                  args: {
                    name: "USERNAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
              args: {
                name: "CONNECTION_PROFILE",
                description:
                  "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Database Migration Service connection profile",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "Cloud SQL replica database is also deleted (only for Cloud SQL connection profiles)",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12458,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a Database Migration Service connection profile",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12458,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
          },
        },
        {
          name: "fetch-static-ips",
          description: "List IPs used for static IP connectivity method",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
          description: "List Database Migration Service connection profiles",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
                "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line",
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
          name: "test",
          description: "Test a Database Migration Service connection profile",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12428,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Database Migration Service connection profile",
          options: [
            flag42,
            flag46,
            flag484,
            flag1201,
            flag1328,
            flag1723,
            flag1963,
            flag2027,
            flag2028,
            flag2292,
            flag2800,
            {
              name: "--database-service",
              description: "database service for the oracle connection profile",
              args: {
                name: "DATABASE_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disable-iam-authentication",
              description:
                "Use IAM database authentication to connect to the database. The username will be overridden by the DMS service agent principal. This flag is only supported for PostgreSQL Destinations",
            },
            flag3698,
            flag4149,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5157,
            flag5177,
            flag5453,
            flag5482,
            flag5699,
            flag7356,
            flag11167,
            flag11406,
            flag11606,
            flag11637,
            flag11644,
            flag11946,
            flag12428,
            flag12637,
            flag14320,
            flag14975,
            flag15167,
            flag15315,
            {
              name: "--username",
              description:
                "Username that Database Migration Service uses to connect to\nthe database. Database Migration Service encrypts the value when storing\nit",
              args: {
                name: "USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "CONNECTION_PROFILE",
            description:
              "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `connection_profile` on the command line",
          },
        },
      ],
    },
    {
      name: "conversion-workspaces",
      description: "Manage Database Migration Service conversion workspaces",
      subcommands: [
        {
          name: "apply",
          description:
            "Apply a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3376,
            {
              name: "--dry-run",
              description:
                "Only validates the apply process, but doesn't change the destination\ndatabase. Only works for PostgreSQL destination connection profile",
            },
            flag4401,
            flag4859,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12429,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "commit",
          description:
            "Commit a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--commit-name",
              description:
                "A user-friendly name for the conversion workspace commit. The commit name\ncan include letters, numbers, spaces, and hyphens, and must start with a\nletter",
              args: {
                name: "COMMIT_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12429,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "convert",
          description:
            "Convert a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag821,
            flag1201,
            flag2292,
            flag4401,
            flag4859,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12429,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "create",
          description:
            "Create a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag826,
            flag1201,
            flag2292,
            flag2489,
            {
              name: "--destination-database-engine",
              description:
                "Destination database engine type. _DESTINATION_DATABASE_ENGINE_ must be (only one value is supported): *POSTGRESQL*",
              args: {
                name: "DESTINATION_DATABASE_ENGINE",
                description:
                  "Googlecloudsdk.command_lib.database_migration.conversion_workspaces.enums:DestinationDatabaseEngine",
                suggestions: ["POSTGRESQL"],
              },
            },
            {
              name: "--destination-database-provider",
              description:
                "Destination database provider. _DESTINATION_DATABASE_PROVIDER_ must be one of: *ALLOYDB*, *CLOUDSQL*",
              args: {
                name: "DESTINATION_DATABASE_PROVIDER",
                description:
                  "Googlecloudsdk.command_lib.database_migration.conversion_workspaces.enums:DestinationDatabaseProvider",
                suggestions: ["ALLOYDB", "CLOUDSQL"],
              },
            },
            {
              name: "--destination-database-version",
              description:
                "Version number for the database engine.\nThe version number must contain numbers and letters only.\nExample for PostgreSQL 17.0, version number will be 17.0",
              args: {
                name: "DESTINATION_DATABASE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag3699,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--global-settings",
              description:
                'A generic list of settings for the workspace. The settings are database pair\ndependant and can indicate default behavior for the mapping rules engine or\nturn on or off specific features. An object containing a list of\n"key": "value" pairs',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11188,
            flag11637,
            flag11918,
            flag11946,
            flag12429,
            {
              name: "--source-database-engine",
              description:
                "Source database engine type. _SOURCE_DATABASE_ENGINE_ must be one of: *ORACLE*, *SQL_SERVER*",
              args: {
                name: "SOURCE_DATABASE_ENGINE",
                description:
                  "Googlecloudsdk.command_lib.database_migration.conversion_workspaces.enums:SourceDatabaseEngine",
                suggestions: ["ORACLE", "SQL_SERVER"],
              },
            },
            {
              name: "--source-database-provider",
              description:
                "Source database provider. _SOURCE_DATABASE_PROVIDER_ must be one of: *AMAZON_RDS*, *AZURE_MANAGED_INSTANCE*, *AZURE_SQL_DATABASE*, *CLOUDSQL*, *UNSPECIFIED*",
              args: {
                name: "SOURCE_DATABASE_PROVIDER",
                description:
                  "Googlecloudsdk.command_lib.database_migration.conversion_workspaces.enums:SourceDatabaseProvider",
                suggestions: [
                  "AMAZON_RDS",
                  "AZURE_MANAGED_INSTANCE",
                  "AZURE_SQL_DATABASE",
                  "CLOUDSQL",
                  "UNSPECIFIED",
                ],
              },
            },
            {
              name: "--source-database-version",
              description:
                "Version number for the database engine.\nThe version number must contain numbers and letters only.\nExample for Oracle 21c, version number will be 21c",
              args: {
                name: "SOURCE_DATABASE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Database Migration conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12429,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a database migration conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12459,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "describe-ddls",
          description:
            "Describe DDLs in a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2162,
            flag2292,
            flag4401,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11054,
            flag11637,
            flag11946,
            flag12429,
            flag13948,
            flag14975,
            {
              name: "--tree-type",
              description:
                "Tree type for database entities. _TREE_TYPE_ must be one of: *SOURCE*, *DRAFT*",
              args: {
                name: "TREE_TYPE",
                description: "String",
                suggestions: ["SOURCE", "DRAFT"],
              },
            },
            flag15100,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "describe-entities",
          description:
            "Describe database entities in a Database Migration conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2162,
            flag2292,
            flag4401,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11054,
            flag11637,
            flag11946,
            flag12429,
            flag13948,
            flag14975,
            {
              name: "--tree-type",
              description:
                "Tree type for database entities. _TREE_TYPE_ must be one of: *SOURCE*, *DRAFT*",
              args: {
                name: "TREE_TYPE",
                description: "String",
                suggestions: ["SOURCE", "DRAFT"],
              },
            },
            flag15100,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "describe-issues",
          description:
            "Describe issues in a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2162,
            flag2292,
            flag4401,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11054,
            flag11637,
            flag11946,
            flag12429,
            flag13948,
            flag14975,
            flag15100,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "import-rules",
          description:
            "Import mapping rules in a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag821,
            flag1201,
            {
              name: "--config-files",
              description:
                "A list of files to import rules from. Either provide a single file path or if\nmultiple files are to be provided, each file should correspond to one schema.\nProvide file paths as a comma separated list",
              args: {
                name: "CONFIG_FILE",
                description: "List",
                suggestions: [],
              },
            },
            flag2292,
            flag4401,
            {
              name: "--file-format",
              description:
                "File format type to import rules from. _FILE_FORMAT_ must be (only one value is supported): *ORA2PG*",
              args: {
                name: "FILE_FORMAT",
                description: "String",
                suggestions: ["ORA2PG"],
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
            flag12429,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "list",
          description: "List conversion workspaces",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
          name: "list-background-jobs",
          description: "List background jobs in the conversion workspaces",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--max-size",
              description:
                "The maximum number of jobs to return. The service may return fewer than this value. If\nunspecified, at most 100 jobs will be returned. The maximum value is 100; values above 100\nwill be coerced to 100",
              args: { name: "MAX_SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--most-recent-per-job-type",
              description: "Returns only the most recent job per job type",
            },
            flag11637,
            flag11946,
            flag12459,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "mapping-rules",
          description:
            "Manage Database Migration Service Conversion Workspace mapping rules",
          subcommands: [
            {
              name: "list",
              description: "List Mapping Rules",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2490,
                flag4401,
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
                    "The name of the region.\n+\nTo set the `region` attribute:\n* provide the argument `--conversion-workspace` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
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
          name: "rollback",
          description:
            "Rollback a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12429,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "seed",
          description: "Seed a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag821,
            flag1201,
            flag2292,
            flag3376,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-path",
              description:
                "The Cloud Storage path containing the schema report files. Must be in the format gs://bucket/prefix",
              args: {
                name: "GCS_PATH",
                description:
                  "Googlecloudsdk.api_lib.storage.storage_util:FromArgument",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12429,
            {
              name: "--source-connection-profile",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--source-connection-profile` on the command line",
              args: {
                name: "SOURCE_CONNECTION_PROFILE",
                description: "String",
                suggestions: [],
              },
            },
            flag13981,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
        {
          name: "update",
          description:
            "Update a Database Migration Service conversion workspace",
          options: [
            flag42,
            flag46,
            flag826,
            flag1201,
            flag2292,
            flag2489,
            flag3699,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--global-filter",
              description:
                "Filter the source entities based on [AIP-160](https://google.aip.dev/160) standard.\nThis filter will be applied to all subsequent operations on the source entities,\nsuch as convert and describe-entities",
              args: {
                name: "GLOBAL_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11188,
            flag11637,
            flag11918,
            flag11946,
            flag12429,
            flag13981,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONVERSION_WORKSPACE",
            description:
              "ID of the conversion_workspace or fully qualified identifier for the conversion_workspace.\n+\nTo set the `conversion_workspace` attribute:\n* provide the argument `conversion_workspace` on the command line",
          },
        },
      ],
    },
    {
      name: "migration-jobs",
      description: "Manage Database Migration Service migration jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag384,
            flag1201,
            flag2101,
            flag2102,
            flag2104,
            flag2161,
            flag2292,
            flag2490,
            flag2804,
            flag3477,
            flag3700,
            flag3947,
            flag3948,
            flag3949,
            flag3950,
            flag4401,
            flag4860,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag7614,
            flag7615,
            flag7617,
            flag8442,
            {
              name: "--oracle-cdc-start-position",
              description:
                "Oracle schema change number (SCN) to start CDC data migration from",
              args: {
                name: "ORACLE_CDC_START_POSITION",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--original-migration-name",
              description:
                "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `--original-migration-name` on the command line",
              args: {
                name: "ORIGINAL_MIGRATION_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11231,
            flag11436,
            flag11637,
            flag11946,
            flag12435,
            {
              name: "--skip-full-dump",
              description: "Whether to skip full dump or not",
            },
            flag14164,
            {
              name: "--sqlserver-cdc-start-position",
              description:
                "Sqlserver log squence number (LSN) to start CDC data migration from",
              args: {
                name: "SQLSERVER_CDC_START_POSITION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sqlserver-databases",
              description:
                "A list of databases to be migrated to the destination Cloud SQL instance.\nProvide databases as a comma separated list. This list should contain all\nencrypted and non-encrypted database names. This flag is used only for\nSQL Server to Cloud SQL migrations",
              args: {
                name: "databaseName",
                description: "List",
                suggestions: [],
              },
            },
            flag14259,
            flag14260,
            flag14267,
            flag14421,
            flag14975,
            flag14983,
            {
              name: "--type",
              description:
                "Type of the migration job. _TYPE_ must be one of: *ONE_TIME*, *CONTINUOUS*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["ONE_TIME", "CONTINUOUS"],
              },
            },
            {
              name: "--use-postgres-native",
              description:
                "Use native logical replication for PostgreSQL migration",
            },
            flag15315,
            flag15424,
            flag15493,
            {
              name: "--vm-ip",
              description: "Bastion Virtual Machine IP",
              args: { name: "VM_IP", description: "String", suggestions: [] },
            },
            {
              name: "--vm-port",
              description: "Forwarding port for the SSH tunnel",
              args: { name: "VM_PORT", description: "Int", suggestions: [] },
            },
            {
              name: "--vpc",
              description: "Name of the VPC network where the VM is hosted",
              args: { name: "VPC", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "The destination Cloud SQL connection profile is always deleted with the\nmigration job. In case of force delete, the destination Cloud SQL replica\ndatabase is also deleted",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "demote-destination",
          description:
            "Demote a destination of a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "fetch-source-objects",
          description:
            "Fetch objects for a Database Migration Service migration job by connection to the source",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12435,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "generate-ssh-script",
          description:
            "Generate a SSH script for a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            {
              name: "--subnet",
              description: "Subnet to create the VM instance in",
              args: { name: "SUBNET", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--vm",
              description:
                "Bastion Compute Engine VM instance name to use or to create",
              args: { name: "VM", description: "String", suggestions: [] },
            },
            {
              name: "--vm-machine-type",
              description:
                "Machine type for a new VM instance.\nTo get a list of available machine types, run 'gcloud compute machine-types list'",
              args: {
                name: "VM_MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--vm-port",
              description: "Port that will be open on the bastion host",
              args: { name: "VM_PORT", description: "Int", suggestions: [] },
            },
            {
              name: "--vm-zone",
              description:
                "Zone the existing bastion VM instance is located in",
              args: { name: "VM_ZONE", description: "String", suggestions: [] },
            },
            {
              name: "--vm-zone-create",
              description: "Zone to create the VM instance in",
              args: {
                name: "VM_ZONE_CREATE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "list",
          description: "List Database Migration Service migration jobs",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
          name: "promote",
          description: "Promote a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2805,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12435,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "restart",
          description: "Restart a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2805,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12435,
            {
              name: "--restart-failed-objects",
              description:
                "Restart the failed objects in the migration job. This flag is used only for\nPostgres to AlloyDB, and Postgres to Cloud SQL Postgres and MySQL to Cloud\nSQL MySQL migrations",
            },
            {
              name: "--skip-validation",
              description:
                "Restart the migration job without running prior configuration verification",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "resume",
          description: "Resume a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            {
              name: "--skip-validation",
              description:
                "Resume the migration job without running prior configuration verification",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "start",
          description: "Start a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            {
              name: "--skip-validation",
              description:
                "Start the migration job without running prior configuration verification",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "stop",
          description: "Stop a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag384,
            flag1201,
            flag1723,
            flag2161,
            flag2292,
            flag2804,
            flag3477,
            flag3700,
            flag3947,
            flag3948,
            flag3949,
            flag3950,
            flag4401,
            flag4860,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7614,
            flag7615,
            flag7617,
            flag8442,
            flag11231,
            flag11436,
            flag11637,
            flag11946,
            flag12435,
            flag12637,
            flag14164,
            {
              name: "--sqlserver-databases",
              description:
                "A list of databases to be migrated to the destination Cloud SQL instance.\nProvide databases as a comma separated list. This list should contain all\nencrypted and non-encrypted database names. This flag is used only for\nSQL Server to Cloud SQL migrations",
              args: {
                name: "databaseName",
                description: "List",
                suggestions: [],
              },
            },
            flag14259,
            flag14260,
            flag14267,
            flag14421,
            flag14975,
            flag14983,
            {
              name: "--type",
              description:
                "Type of the migration job. _TYPE_ must be one of: *ONE_TIME*, *CONTINUOUS*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["ONE_TIME", "CONTINUOUS"],
              },
            },
            flag15167,
            flag15315,
            flag15424,
            flag15493,
            {
              name: "--vm-ip",
              description: "Bastion Virtual Machine IP",
              args: { name: "VM_IP", description: "String", suggestions: [] },
            },
            {
              name: "--vm-port",
              description: "Forwarding port for the SSH tunnel",
              args: { name: "VM_PORT", description: "Int", suggestions: [] },
            },
            {
              name: "--vpc",
              description: "Name of the VPC network where the VM is hosted",
              args: { name: "VPC", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
        {
          name: "verify",
          description: "Verify a Database Migration Service migration job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12460,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MIGRATION_JOB",
            description:
              "ID of the migration_job or fully qualified identifier for the migration_job.\n+\nTo set the `migration_job` attribute:\n* provide the argument `migration_job` on the command line",
          },
        },
      ],
    },
    {
      name: "objects",
      description: "Manage Database Migration Service migration job objects",
      subcommands: [
        {
          name: "list",
          description: "List a DMS migration job objects",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag7870,
            flag11059,
            flag11637,
            flag11946,
            flag12434,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "lookup",
          description: "Lookup a DMS migration job object",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--database",
              description: "The name of the database to lookup",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7870,
            flag11637,
            flag11946,
            flag12434,
            {
              name: "--schema",
              description: "The name of the schema to lookup",
              args: { name: "SCHEMA", description: "String", suggestions: [] },
            },
            {
              name: "--table",
              description: "The name of the table to lookup",
              args: { name: "TABLE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--type",
              description:
                "The type of the object to lookup. If not provided, the default is DATABASE. _TYPE_ must be one of: *DATABASE*, *SCHEMA*, *TABLE*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["DATABASE", "SCHEMA", "TABLE"],
              },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Database Migration Service operations",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Database Migration Service operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12461,
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
          description: "Show details about a operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12461,
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
          description: "List operations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
      name: "private-connections",
      description: "Manage Database Migration Service private connections",
      subcommands: [
        {
          name: "create",
          description: "Create a Database Migration private connection",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description:
                "A user-friendly name for the private connection. The display name can include letters, numbers, spaces, and hyphens, and must start with a letter. The maximum length allowed is 60 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--network-attachment",
              description:
                "Full URI of the network attachment that datastream will connect to.For example, this would be of the form:`network-attachment=projects/test-project/regions/us-central1/networkAttachments/my-na`",
              args: {
                name: "NETWORK_ATTACHMENT",
                description: "String",
                suggestions: [],
              },
            },
            flag8442,
            flag11637,
            flag11946,
            flag12436,
            {
              name: "--skip-validation",
              description:
                "Creates the private connection without running prior verifications",
            },
            {
              name: "--subnet",
              description: "A free subnet for peering. (CIDR of /29)",
              args: { name: "SUBNET", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            {
              name: "--validate-only",
              description:
                "If set, the request will retrieve the project id to allow in the  network attachment Datastream will connect to",
            },
            flag15424,
            {
              name: "--vpc",
              description:
                "ID of the vpc or fully qualified identifier for the vpc.\n+\nTo set the `vpc` attribute:\n* provide the argument `--vpc` on the command line",
              args: { name: "VPC", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the private_connection or fully qualified identifier for the private_connection.\n+\nTo set the `private_connection` attribute:\n* provide the argument `private_connection` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Database Migration private connection",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8442,
            flag11637,
            flag11946,
            flag12436,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the private_connection or fully qualified identifier for the private_connection.\n+\nTo set the `private_connection` attribute:\n* provide the argument `private_connection` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details about a database migration private connection",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
                "The name of the region.\n+\nTo set the `region` attribute:\n* provide the argument `private_connection` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRIVATE_CONNECTION",
            description:
              "ID of the private_connection or fully qualified identifier for the private_connection.\n+\nTo set the `private_connection` attribute:\n* provide the argument `private_connection` on the command line",
          },
        },
        {
          name: "list",
          description: "List private connections",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4401,
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
  ],
};

export default completionSpec;
