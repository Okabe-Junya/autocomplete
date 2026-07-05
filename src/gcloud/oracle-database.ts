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
const flag1033: Fig.Option = {
  name: "--backup-odb-subnet",
  description:
    "ID of the odbSubnet or fully qualified identifier for the odbSubnet.\n+\nTo set the `odb-subnet` attribute:\n* provide the argument `--backup-odb-subnet` on the command line",
  args: { name: "BACKUP_ODB_SUBNET", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1721: Fig.Option = {
  name: "--clear-labels",
  description: "Clear labels value and set to empty map",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2684: Fig.Option = {
  name: "--data-collection-options-is-diagnostics-events-enabled",
  description: "Indicates whether to enable data collection for diagnostics",
};
const flag2686: Fig.Option = {
  name: "--data-collection-options-is-incident-logs-enabled",
  description: "Indicates whether to enable incident logs and trace collection",
};
const flag3833: Fig.Option = {
  name: "--display-name",
  description: "User friendly name for this resource",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4366: Fig.Option = {
  name: "--encryption-key-kms",
  description:
    "ID of the cryptoKey or fully qualified identifier for the cryptoKey.\n+\nTo set the `crypto-key` attribute:\n* provide the argument `--encryption-key-kms` on the command line",
  args: { name: "ENCRYPTION_KEY_KMS", description: "String", suggestions: [] },
};
const flag4367: Fig.Option = {
  name: "--encryption-key-provider",
  description:
    "The provider of the encryption key. _ENCRYPTION_KEY_PROVIDER_ must be one of:\n+\n*google-managed*::: Google Managed KMS key, if selected, please provide the KMS key name.\n*oracle-managed*::: Oracle Managed.\n:::\n+",
  args: {
    name: "ENCRYPTION_KEY_PROVIDER",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["google-managed", "oracle-managed"],
  },
};
const flag4579: Fig.Option = {
  name: "--exadata-infrastructure",
  description:
    "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure.\n+\nTo set the `cloud-exadata-infrastructure` attribute:\n* provide the argument `--exadata-infrastructure` on the command line",
  args: {
    name: "EXADATA_INFRASTRUCTURE",
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
const flag6393: Fig.Option = {
  name: "--labels",
  description:
    'Labels or tags associated with the resource.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "LABELS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
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
const flag6614: Fig.Option = {
  name: "--location",
  description:
    "For resources [autonomous_database, peer-autonomous-database], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6947: Fig.Option = {
  name: "--location",
  description:
    "The location id of the cloudExadataInfrastructure resource.\n+\nTo set the `location` attribute:\n* provide the argument `cloud_exadata_infrastructure` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6976: Fig.Option = {
  name: "--location",
  description:
    "The location id of the odbNetwork resource.\n+\nTo set the `location` attribute:\n* provide the argument `odb_network` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7227: Fig.Option = {
  name: "--location",
  description:
    "The location id of the autonomousDatabase resource.\n+\nTo set the `location` attribute:\n* provide the argument `autonomous_database` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7233: Fig.Option = {
  name: "--location",
  description:
    "The location id of the cloudVmCluster resource.\n+\nTo set the `location` attribute:\n* provide the argument `cloud_vm_cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7240: Fig.Option = {
  name: "--location",
  description:
    "The location id of the dbSystem resource.\n+\nTo set the `location` attribute:\n* provide the argument `db_system` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7247: Fig.Option = {
  name: "--location",
  description:
    "The location id of the exadbVmCluster resource.\n+\nTo set the `location` attribute:\n* provide the argument `exadb_vm_cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7248: Fig.Option = {
  name: "--location",
  description:
    "The location id of the exascaleDbStorageVault resource.\n+\nTo set the `location` attribute:\n* provide the argument `exascale_db_storage_vault` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7251: Fig.Option = {
  name: "--location",
  description:
    "The location id of the goldengateConnection resource.\n+\nTo set the `location` attribute:\n* provide the argument `goldengate_connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7252: Fig.Option = {
  name: "--location",
  description:
    "The location id of the goldengateConnectionAssignment resource.\n+\nTo set the `location` attribute:\n* provide the argument `goldengate_connection_assignment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7253: Fig.Option = {
  name: "--location",
  description:
    "The location id of the goldengateDeployment resource.\n+\nTo set the `location` attribute:\n* provide the argument `goldengate_deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7265: Fig.Option = {
  name: "--location",
  description:
    "The location id of the odbSubnet resource.\n+\nTo set the `location` attribute:\n* provide the argument `odb_subnet` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7266: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8238: Fig.Option = {
  name: "--network",
  description:
    "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `--network` on the command line",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag10660: Fig.Option = {
  name: "--odb-network",
  description:
    "For resources [backup-odb-subnet, odb-network, odb-subnet], provides fallback value for resource odb-network attribute. When the resource's full URI path is not provided, odb-network will fallback to this flag value",
  args: { name: "ODB_NETWORK", description: "String", suggestions: [] },
};
const flag10661: Fig.Option = {
  name: "--odb-network",
  description:
    "For resources [odb-network, odb-subnet], provides fallback value for resource odb-network attribute. When the resource's full URI path is not provided, odb-network will fallback to this flag value",
  args: { name: "ODB_NETWORK", description: "String", suggestions: [] },
};
const flag10663: Fig.Option = {
  name: "--odb-network",
  description:
    "The odbNetwork id of the odbSubnet resource.\n+\nTo set the `odb-network` attribute:\n* provide the argument `odb_subnet` on the command line with a fully specified name;\n* provide the argument `--odb-network` on the command line",
  args: { name: "ODB_NETWORK", description: "String", suggestions: [] },
};
const flag10664: Fig.Option = {
  name: "--odb-subnet",
  description:
    "ID of the odbSubnet or fully qualified identifier for the odbSubnet.\n+\nTo set the `odb-subnet` attribute:\n* provide the argument `--odb-subnet` on the command line",
  args: { name: "ODB_SUBNET", description: "String", suggestions: [] },
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
const flag11205: Fig.Option = {
  name: "--peer-autonomous-database",
  description:
    "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous-database` attribute:\n* provide the argument `--peer-autonomous-database` on the command line",
  args: {
    name: "PEER_AUTONOMOUS_DATABASE",
    description: "String",
    suggestions: [],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11664: Fig.Option = {
  name: "--properties-customer-contacts",
  description:
    'The list of customer contacts.\n+\n*email*:::\nThe email address used by Oracle to send notifications regarding databases\nand infrastructure.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--properties-customer-contacts=email=string --properties-customer-contacts=email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--properties-customer-contacts=\'[{"email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--properties-customer-contacts=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "PROPERTIES_CUSTOMER_CONTACTS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
};
const flag11703: Fig.Option = {
  name: "--properties-local-adg-auto-failover-max-data-loss-limit-duration",
  description:
    "This field indicates the maximum data loss limit for an Autonomous\nDatabase, in seconds",
  args: {
    name: "PROPERTIES_LOCAL_ADG_AUTO_FAILOVER_MAX_DATA_LOSS_LIMIT_DURATION",
    description: "Int",
    suggestions: [],
  },
};
const flag11723: Fig.Option = {
  name: "--properties-scan-listener-port-tcp",
  description: "SCAN listener port - TCP",
  args: {
    name: "PROPERTIES_SCAN_LISTENER_PORT_TCP",
    description: "Int",
    suggestions: [],
  },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12641: Fig.Option = {
  name: "--remove-labels",
  description:
    'Remove existing value from map labels. Sets `remove_labels` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-labels=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-labels=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-labels=path_to_file.(yaml|json)\n+\n```',
  args: { name: "REMOVE_LABELS", description: "Dict", suggestions: [] },
};
const flag12835: Fig.Option = {
  name: "--request-id",
  description:
    "An optional ID to identify the request. This value is used to identify\nduplicate requests. If you make a request with the same request ID\nand the original request is still in progress or completed, the server\nignores the second request. This prevents clients from\naccidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12847: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14881: Fig.Option = {
  name: "--time-zone-id",
  description:
    'IANA Time Zone Database time zone. For example "America/New_York"',
  args: { name: "TIME_ZONE_ID", description: "String", suggestions: [] },
};
const flag14882: Fig.Option = {
  name: "--time-zone-version",
  description: 'IANA Time Zone Database version number. For example "2019a"',
  args: { name: "TIME_ZONE_VERSION", description: "String", suggestions: [] },
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
  name: "oracle-database",
  description: "Manage Oracle Database resources",
  subcommands: [
    {
      name: "autonomous-database-backups",
      description: "Manage Autonomous Database Backup resources",
      subcommands: [
        {
          name: "list",
          description: "List autonomous database backups",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--filter",
              description:
                "Apply a ADB filter in the format :\n--filter='autonomous_database_id=\"my-instance\"'",
              args: {
                name: "EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
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
      name: "autonomous-database-character-sets",
      description: "Manage Autonomous Database Character Set resources",
      subcommands: [
        {
          name: "list",
          description: "List all AutonomousDatabaseCharacterSets",
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
      name: "autonomous-databases",
      description: "Manage Autonomous Database resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new AutonomousDatabase",
          options: [
            flag42,
            flag46,
            {
              name: "--admin-password",
              description:
                "The password for the default ADMIN user.\nNote: Only one of `admin_password_secret_version` or `admin_password` can\nbe populated",
              args: {
                name: "ADMIN_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--admin-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--admin-password-secret-version` on the command line",
              args: {
                name: "ADMIN_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--cidr",
              description: "The subnet CIDR range for the Autonomous Database",
              args: { name: "CIDR", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--database",
              description:
                "The name of the Autonomous Database. The database name must be unique in\nthe project. The name must begin with a letter and can\ncontain a maximum of 30 alphanumeric characters",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "The display name for the Autonomous Database. The name does not have to\nbe unique within your project",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4366,
            flag4367,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--key-ring",
              description:
                "The keyRing id of the cryptoKey resource.\n+\nTo set the `key-ring` attribute:\n* provide the argument `--encryption-key-kms` on the command line with a fully specified name;\n* provide the argument `--key-ring` on the command line",
              args: {
                name: "KEY_RING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--labels",
              description:
                'The labels or tags associated with the Autonomous Database.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [autonomous_database, encryption-key-kms, odb-network, odb-subnet, source-config-autonomous-database], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag8238,
            flag10661,
            flag10664,
            flag11637,
            {
              name: "--properties-allowlisted-ips",
              description:
                "The list of allowlisted IP addresses for the Autonomous Database",
              args: {
                name: "PROPERTIES_ALLOWLISTED_IPS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--properties-backup-retention-period-days",
              description:
                "The retention period for the Autonomous Database. This field is specified\nin days, can range from 1 day to 60 days, and has a default value of\n60 days",
              args: {
                name: "PROPERTIES_BACKUP_RETENTION_PERIOD_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-character-set",
              description:
                "The character set for the Autonomous Database. The default is AL32UTF8",
              args: {
                name: "PROPERTIES_CHARACTER_SET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-compute-count",
              description:
                "The number of compute servers for the Autonomous Database",
              args: {
                name: "PROPERTIES_COMPUTE_COUNT",
                description: "Float",
                suggestions: [],
              },
            },
            {
              name: "--properties-cpu-core-count",
              description:
                "The number of CPU cores to be made available to the database",
              args: {
                name: "PROPERTIES_CPU_CORE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11664,
            {
              name: "--properties-data-storage-size-gb",
              description:
                "The size of the data stored in the database, in gigabytes",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-data-storage-size-tb",
              description:
                "The size of the data stored in the database, in terabytes",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_TB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-db-edition",
              description:
                "The edition of the Autonomous Databases. _PROPERTIES_DB_EDITION_ must be one of:\n+\n*enterprise-edition*::: Enterprise Database Edition\n*standard-edition*::: Standard Database Edition\n:::\n+",
              args: {
                name: "PROPERTIES_DB_EDITION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["enterprise-edition", "standard-edition"],
              },
            },
            {
              name: "--properties-db-version",
              description:
                "The Oracle Database version for the Autonomous Database",
              args: {
                name: "PROPERTIES_DB_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-db-workload",
              description:
                "The workload type of the Autonomous Database. _PROPERTIES_DB_WORKLOAD_ must be one of:\n+\n*ajd*::: Autonomous JSON Database.\n*apex*::: Autonomous Database with the Oracle APEX Application Development workload\ntype.\n*dw*::: Autonomous Data Warehouse database.\n*oltp*::: Autonomous Transaction Processing database.\n:::\n+",
              args: {
                name: "PROPERTIES_DB_WORKLOAD",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["ajd", "apex", "dw", "oltp"],
              },
            },
            {
              name: "--properties-is-auto-scaling-enabled",
              description:
                "This field indicates if auto scaling is enabled for the Autonomous Database\nCPU core count",
            },
            {
              name: "--properties-is-storage-auto-scaling-enabled",
              description:
                "This field indicates if auto scaling is enabled for the Autonomous Database\nstorage",
            },
            {
              name: "--properties-license-type",
              description:
                "The license type used for the Autonomous Database. _PROPERTIES_LICENSE_TYPE_ must be one of:\n+\n*bring-your-own-license*::: Bring your own license\n*license-included*::: License included part of offer\n:::\n+",
              args: {
                name: "PROPERTIES_LICENSE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            flag11703,
            {
              name: "--properties-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous Database has a local (in-region) standby\ndatabase. Not applicable to cross-region Data Guard or dedicated Exadata\ninfrastructure",
            },
            {
              name: "--properties-maintenance-schedule-type",
              description:
                "The maintenance schedule of the Autonomous Database. _PROPERTIES_MAINTENANCE_SCHEDULE_TYPE_ must be one of:\n+\n*early*::: An EARLY maintenance schedule patches the database before\nthe regular scheduled maintenance.\n*regular*::: A REGULAR maintenance schedule follows the normal maintenance cycle.\n:::\n+",
              args: {
                name: "PROPERTIES_MAINTENANCE_SCHEDULE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["early", "regular"],
              },
            },
            {
              name: "--properties-mtls-connection-required",
              description:
                "This field specifies if the Autonomous Database requires mTLS connections",
            },
            {
              name: "--properties-n-character-set",
              description:
                "The national character set for the Autonomous Database. The default is\nAL16UTF16",
              args: {
                name: "PROPERTIES_N_CHARACTER_SET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-private-endpoint-ip",
              description:
                "The private endpoint IP address for the Autonomous Database",
              args: {
                name: "PROPERTIES_PRIVATE_ENDPOINT_IP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-private-endpoint-label",
              description:
                "The private endpoint label for the Autonomous Database",
              args: {
                name: "PROPERTIES_PRIVATE_ENDPOINT_LABEL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-secret-id",
              description:
                "The ID of the Oracle Cloud Infrastructure vault secret",
              args: {
                name: "PROPERTIES_SECRET_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-vault-id",
              description: "The ID of the Oracle Cloud Infrastructure vault",
              args: {
                name: "PROPERTIES_VAULT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag12835,
            {
              name: "--secret",
              description:
                "The secret id of the secretVersion resource.\n+\nTo set the `secret` attribute:\n* provide the argument `--admin-password-secret-version` on the command line with a fully specified name;\n* provide the argument `--secret` on the command line",
              args: { name: "SECRET", description: "String", suggestions: [] },
            },
            {
              name: "--source-config-automatic-backups-replication-enabled",
              description:
                "This field specifies if the replication of automatic backups is enabled\nwhen creating a Data Guard",
            },
            {
              name: "--source-config-autonomous-database",
              description:
                "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous-database` attribute:\n* provide the argument `--source-config-autonomous-database` on the command line",
              args: {
                name: "SOURCE_CONFIG_AUTONOMOUS_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an AutonomousDatabase",
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
            flag7227,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of an AutonomousDatabase",
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
            flag7227,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "failover",
          description:
            "Failovers a standby AutonomousDatabase to a new primary",
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
            flag6614,
            flag7356,
            flag11205,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "generate-wallet",
          description: "Generate wallet for an AutonomousDatabase",
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
              name: "--is-regional",
              description:
                "True when requesting regional connection strings in PDB connect info,\napplicable to cross-region Data Guard only",
            },
            flag7227,
            flag7356,
            {
              name: "--password",
              description:
                "The password used to encrypt the keys inside the wallet. The password\nmust be a minimum of 8 characters",
              args: {
                name: "PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--type",
              description:
                "The type of wallet generation for the Autonomous Database. The default\nvalue is SINGLE. _TYPE_ must be one of:\n+\n*all*::: Used to generate wallet for all databases in the region.\n*single*::: Used to generate wallet for a single database.\n:::\n+",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["all", "single"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "list",
          description: "List all AutonomousDatabases",
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
          name: "restart",
          description: "Restarts an AutonomousDatabase",
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
            flag7227,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "restore",
          description: "Restore an AutonomousDatabase",
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
            flag7227,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--restore-time",
              description: "The time and date to restore the database to",
              args: {
                name: "RESTORE_TIME",
                description: "Googlecloudsdk.core.util.times:ParseDateTime",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "start",
          description: "Starts an AutonomousDatabase",
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
            flag7227,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "stop",
          description: "Stops an AutonomousDatabase",
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
            flag7227,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "switchover",
          description: "Switchovers an AutonomousDatabase to a new primary",
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
            flag6614,
            flag7356,
            flag11205,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an AutonomousDatabase",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-encryption-key-kms",
              description: "Clear encryption_key_kms value and set to null",
            },
            flag1721,
            {
              name: "--clear-properties",
              description:
                "Set autonomousDatabase.properties back to default value",
            },
            flag2292,
            flag4366,
            flag4367,
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
            {
              name: "--labels",
              description:
                'Set labels to new value. The labels or tags associated with the Autonomous Database.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [autonomous_database, encryption-key-kms], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11703,
            {
              name: "--properties-local-data-guard-enabled",
              description:
                "Indicates whether the Autonomous Database has a local (in-region) standby\ndatabase. Not applicable to cross-region Data Guard or dedicated Exadata\ninfrastructure. Use *--properties-local-data-guard-enabled* to enable and *--no-properties-local-data-guard-enabled* to disable",
            },
            flag11946,
            flag12641,
            flag12835,
            flag14975,
            {
              name: "--update-labels",
              description:
                'Update labels value or add key value pair. The labels or tags associated with the Autonomous Database.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
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
            name: "AUTONOMOUS_DATABASE",
            description:
              "ID of the autonomousDatabase or fully qualified identifier for the autonomousDatabase.\n+\nTo set the `autonomous_database` attribute:\n* provide the argument `autonomous_database` on the command line",
          },
        },
      ],
    },
    {
      name: "autonomous-db-versions",
      description: "Manage Autonomous Db Version resources",
      subcommands: [
        {
          name: "list",
          description: "List all AutonomousDbVersions",
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
      name: "cloud-exadata-infrastructures",
      description: "Manage Cloud Exadata Infrastructure resources",
      subcommands: [
        {
          name: "configure-exascale",
          description:
            "Configure Exascale Storage for a Cloud Exadata Infrastructure",
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
            flag6947,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--request-id",
              description: "An optional ID to identify the request",
              args: {
                name: "REQUEST_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--total-storage-size-gb",
              description:
                "The total storage to be allocated to Exascale in GBs",
              args: {
                name: "TOTAL_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure.\n+\nTo set the `cloud_exadata_infrastructure` attribute:\n* provide the argument `cloud_exadata_infrastructure` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new ExadataInfrastructure",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3833,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle Exadata Infrastructure is hosted.\nExample: us-east4-b-r2.\nIf not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag6393,
            flag6947,
            flag7356,
            {
              name: "--maintenance-window-custom-action-timeout-mins",
              description:
                "Determines the amount of time the system will wait before the start of each\ndatabase server patching operation. Custom action timeout is in minutes and\nvalid value is between 15 to 120 (inclusive)",
              args: {
                name: "MAINTENANCE_WINDOW_CUSTOM_ACTION_TIMEOUT_MINS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-days-of-week",
              description:
                "Days during the week when maintenance should be performed. _MAINTENANCE_WINDOW_DAYS_OF_WEEK_ must be one of:\n+\n*friday*::: Friday\n*monday*::: Monday\n*saturday*::: Saturday\n*sunday*::: Sunday\n*thursday*::: Thursday\n*tuesday*::: Tuesday\n*wednesday*::: Wednesday\n:::\n+",
              args: {
                name: "MAINTENANCE_WINDOW_DAYS_OF_WEEK",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-hours-of-day",
              description:
                "The window of hours during the day when maintenance should be performed.\nThe window is a 4 hour slot. Valid values are:\n  0 - represents time slot 0:00 - 3:59 UTC\n  4 - represents time slot 4:00 - 7:59 UTC\n  8 - represents time slot 8:00 - 11:59 UTC\n  12 - represents time slot 12:00 - 15:59 UTC\n  16 - represents time slot 16:00 - 19:59 UTC\n  20 - represents time slot 20:00 - 23:59 UTC",
              args: {
                name: "MAINTENANCE_WINDOW_HOURS_OF_DAY",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-is-custom-action-timeout-enabled",
              description:
                "If true, enables the configuration of a custom action timeout (waiting\nperiod) between database server patching operations",
            },
            {
              name: "--maintenance-window-lead-time-week",
              description:
                "Lead time window allows user to set a lead time to prepare for a down time.\nThe lead time is in weeks and valid value is between 1 to 4",
              args: {
                name: "MAINTENANCE_WINDOW_LEAD_TIME_WEEK",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-months",
              description:
                "Months during the year when maintenance should be performed. _MAINTENANCE_WINDOW_MONTHS_ must be one of:\n+\n*april*::: The month of April.\n*august*::: The month of August.\n*december*::: The month of December.\n*february*::: The month of February.\n*january*::: The month of January.\n*july*::: The month of July.\n*june*::: The month of June.\n*march*::: The month of March.\n*may*::: The month of May.\n*november*::: The month of November.\n*october*::: The month of October.\n*september*::: The month of September.\n:::\n+",
              args: {
                name: "MAINTENANCE_WINDOW_MONTHS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-patching-mode",
              description:
                'Cloud CloudExadataInfrastructure node patching method, either "ROLLING"\nor "NONROLLING". Default value is ROLLING. _MAINTENANCE_WINDOW_PATCHING_MODE_ must be one of:\n+\n*non-rolling*::: The non-rolling maintenance method first updates your storage servers at\nthe same time, then your database servers at the same time.\n*rolling*::: Updates the Cloud Exadata database server hosts in a rolling fashion.\n:::\n+',
              args: {
                name: "MAINTENANCE_WINDOW_PATCHING_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["non-rolling", "rolling"],
              },
            },
            {
              name: "--maintenance-window-preference",
              description:
                "The maintenance window scheduling preference. _MAINTENANCE_WINDOW_PREFERENCE_ must be one of:\n+\n*custom-preference*::: Custom preference.\n*no-preference*::: No preference.\n:::\n+",
              args: {
                name: "MAINTENANCE_WINDOW_PREFERENCE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["custom-preference", "no-preference"],
              },
            },
            {
              name: "--maintenance-window-weeks-of-month",
              description:
                "Weeks during the month when maintenance should be performed. Weeks start on\nthe 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7\ndays. Weeks start and end based on calendar dates, not days of the week",
              args: {
                name: "MAINTENANCE_WINDOW_WEEKS_OF_MONTH",
                description: "List",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--properties-compute-count",
              description:
                "The number of compute servers for the Exadata Infrastructure",
              args: {
                name: "PROPERTIES_COMPUTE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11664,
            {
              name: "--properties-shape",
              description:
                "The shape of the Exadata Infrastructure. The shape determines the\namount of CPU, storage, and memory resources allocated to the instance",
              args: {
                name: "PROPERTIES_SHAPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-storage-count",
              description:
                "The number of Cloud Exadata storage servers for the Exadata Infrastructure",
              args: {
                name: "PROPERTIES_STORAGE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-total-storage-size-gb",
              description:
                "The total storage allocated to the Exadata Infrastructure\nresource, in gigabytes (GB)",
              args: {
                name: "PROPERTIES_TOTAL_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure.\n+\nTo set the `cloud_exadata_infrastructure` attribute:\n* provide the argument `cloud_exadata_infrastructure` on the command line",
          },
        },
        {
          name: "db-servers",
          description: "Manage Db Server resources",
          subcommands: [
            {
              name: "list",
              description: "List all DbServers",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--cloud-exadata-infrastructure",
                  description:
                    "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure.\n+\nTo set the `cloud-exadata-infrastructure` attribute:\n* provide the argument `--cloud-exadata-infrastructure` on the command line",
                  args: {
                    name: "CLOUD_EXADATA_INFRASTRUCTURE",
                    description: "String",
                    suggestions: [],
                  },
                },
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
                    "The location id of the cloudExadataInfrastructure resource.\n+\nTo set the `location` attribute:\n* provide the argument `--cloud-exadata-infrastructure` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          name: "delete",
          description: "Delete an ExadataInfrastructure",
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
                "If set to true, all VM clusters for this Exadata Infrastructure will be\ndeleted. An Exadata Infrastructure can only be deleted once all its VM\nclusters have been deleted",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6947,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure.\n+\nTo set the `cloud_exadata_infrastructure` attribute:\n* provide the argument `cloud_exadata_infrastructure` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a ExadataInfrastructure",
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
            flag6947,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_EXADATA_INFRASTRUCTURE",
            description:
              "ID of the cloudExadataInfrastructure or fully qualified identifier for the cloudExadataInfrastructure.\n+\nTo set the `cloud_exadata_infrastructure` attribute:\n* provide the argument `cloud_exadata_infrastructure` on the command line",
          },
        },
        {
          name: "list",
          description: "List all ExadataInfrastructures",
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
      name: "cloud-vm-clusters",
      description: "Manage Cloud Vm Cluster resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new CloudVmCluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1033,
            {
              name: "--backup-subnet-cidr",
              description: "CIDR range of the backup subnet",
              args: {
                name: "BACKUP_SUBNET_CIDR",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--cidr",
              description:
                "Network settings. CIDR to use for cluster IP allocation",
              args: { name: "CIDR", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--diagnostics-data-collection-options-events-enabled",
              description:
                "Indicates whether diagnostic collection is enabled for the VM cluster",
            },
            {
              name: "--diagnostics-data-collection-options-health-monitoring-enabled",
              description:
                "Indicates whether health monitoring is enabled for the VM cluster",
            },
            {
              name: "--diagnostics-data-collection-options-incident-logs-enabled",
              description:
                "Indicates whether incident logs and trace collection are enabled for the VM\ncluster",
            },
            flag3833,
            flag4579,
            {
              name: "--exascale-db-storage-vault",
              description:
                "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault.\n+\nTo set the `exascale-db-storage-vault` attribute:\n* provide the argument `--exascale-db-storage-vault` on the command line",
              args: {
                name: "EXASCALE_DB_STORAGE_VAULT",
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
              name: "--labels",
              description:
                'Labels or tags associated with the VM Cluster.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [backup-odb-subnet, cloud_vm_cluster, exadata-infrastructure, exascale-db-storage-vault, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag8238,
            flag10660,
            flag10664,
            flag11637,
            {
              name: "--properties-cluster-name",
              description: "OCI Cluster name",
              args: {
                name: "PROPERTIES_CLUSTER_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-cpu-core-count",
              description: "Number of enabled CPU cores",
              args: {
                name: "PROPERTIES_CPU_CORE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-data-storage-size-tb",
              description: "The data disk group size to be allocated in TBs",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_TB",
                description: "Float",
                suggestions: [],
              },
            },
            {
              name: "--properties-db-node-storage-size-gb",
              description: "Local storage per VM",
              args: {
                name: "PROPERTIES_DB_NODE_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-db-server-ocids",
              description: "OCID of database servers",
              args: {
                name: "PROPERTIES_DB_SERVER_OCIDS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--properties-disk-redundancy",
              description:
                "The type of redundancy. _PROPERTIES_DISK_REDUNDANCY_ must be one of:\n+\n*high*::: High -  3 way mirror.\n*normal*::: Normal - 2 way mirror.\n:::\n+",
              args: {
                name: "PROPERTIES_DISK_REDUNDANCY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["high", "normal"],
              },
            },
            {
              name: "--properties-gi-version",
              description: "Grid Infrastructure Version",
              args: {
                name: "PROPERTIES_GI_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-hostname-prefix",
              description: "Prefix for VM cluster host names",
              args: {
                name: "PROPERTIES_HOSTNAME_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-license-type",
              description:
                "License type of VM Cluster. _PROPERTIES_LICENSE_TYPE_ must be one of:\n+\n*bring-your-own-license*::: Bring your own license\n*license-included*::: License included part of offer\n:::\n+",
              args: {
                name: "PROPERTIES_LICENSE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-local-backup-enabled",
              description: "Use local backup",
            },
            {
              name: "--properties-memory-size-gb",
              description: "Memory allocated in GBs",
              args: {
                name: "PROPERTIES_MEMORY_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-node-count",
              description: "Number of database servers",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-ocpu-count",
              description: "OCPU count per VM. Minimum is 0.1",
              args: {
                name: "PROPERTIES_OCPU_COUNT",
                description: "Float",
                suggestions: [],
              },
            },
            flag11723,
            {
              name: "--properties-scan-listener-port-tcp-ssl",
              description: "SCAN listener port - TLS",
              args: {
                name: "PROPERTIES_SCAN_LISTENER_PORT_TCP_SSL",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-sparse-diskgroup-enabled",
              description: "Use exadata sparse snapshots",
            },
            {
              name: "--properties-ssh-public-keys",
              description: "SSH public keys to be stored with cluster",
              args: {
                name: "PROPERTIES_SSH_PUBLIC_KEYS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--properties-system-version",
              description: "Operating system version of the image",
              args: {
                name: "PROPERTIES_SYSTEM_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag12835,
            flag14881,
            flag14882,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_VM_CLUSTER",
            description:
              "ID of the cloudVmCluster or fully qualified identifier for the cloudVmCluster.\n+\nTo set the `cloud_vm_cluster` attribute:\n* provide the argument `cloud_vm_cluster` on the command line",
          },
        },
        {
          name: "db-nodes",
          description: "Manage Db Node resources",
          subcommands: [
            {
              name: "list",
              description: "List all DbNodes",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--cloud-vm-cluster",
                  description:
                    "ID of the cloudVmClusterOrExadbVmCluster or fully qualified identifier for the cloudVmClusterOrExadbVmCluster.\n+\nTo set the `cloud_vm_cluster` attribute:\n* provide the argument `--cloud-vm-cluster` on the command line. Must be specified for resource of type [cloudVmCluster]",
                  args: {
                    name: "CLOUD_VM_CLUSTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--exadb-vm-cluster",
                  description:
                    "ID of the cloudVmClusterOrExadbVmCluster or fully qualified identifier for the cloudVmClusterOrExadbVmCluster.\n+\nTo set the `exadb_vm_cluster` attribute:\n* provide the argument `--exadb-vm-cluster` on the command line. Must be specified for resource of type [exadbVmCluster]",
                  args: {
                    name: "EXADB_VM_CLUSTER",
                    description: "String",
                    suggestions: [],
                  },
                },
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
                    "The location id of the cloudVmClusterOrExadbVmCluster resource.\n+\nTo set the `location` attribute:\n* provide the argument `--exadb-vm-cluster` on the command line with a fully specified name;\n* provide the argument `--cloud-vm-cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          name: "delete",
          description: "Delete a CloudVmCluster",
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
                "If set to true, all child resources for the VM Cluster will be deleted.\nA VM Cluster can only be deleted once all its child resources have been\ndeleted",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7233,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_VM_CLUSTER",
            description:
              "ID of the cloudVmCluster or fully qualified identifier for the cloudVmCluster.\n+\nTo set the `cloud_vm_cluster` attribute:\n* provide the argument `cloud_vm_cluster` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe cloudVmClusters",
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
            flag7233,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_VM_CLUSTER",
            description:
              "ID of the cloudVmCluster or fully qualified identifier for the cloudVmCluster.\n+\nTo set the `cloud_vm_cluster` attribute:\n* provide the argument `cloud_vm_cluster` on the command line",
          },
        },
        {
          name: "list",
          description: "List all CloudVmClusters",
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
      name: "database-character-sets",
      description: "Manage Database Character Set resources",
      subcommands: [
        {
          name: "list",
          description: "List all DatabaseCharacterSets",
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
      name: "databases",
      description: "Manage Database resources",
      subcommands: [
        {
          name: "describe",
          description: "Get details of a Database",
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
                "The location id of the database resource.\n+\nTo set the `location` attribute:\n* provide the argument `database` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "list",
          description: "List databases",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--filter",
              description:
                "Apply a filter in the format :\n--filter='dbSystem=\"projects/my-project/locations/us-east4/dbSystems/my-db-system\"'",
              args: {
                name: "EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
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
      name: "db-system-initial-storage-sizes",
      description: "Manage Db System Initial Storage Size resources",
      subcommands: [
        {
          name: "list",
          description: "List all DbSystemInitialStorageSizes",
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
      name: "db-system-shapes",
      description: "Manage Db System Shape resources",
      subcommands: [
        {
          name: "list",
          description: "List all DbSystemShapes",
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
      name: "db-systems",
      description: "Manage Db System resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new DbSystem",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2684,
            flag2686,
            {
              name: "--database-admin-password",
              description:
                "The password for the default ADMIN user.\nNote: Only one of `admin_password_secret_version` or `admin_password` can\nbe populated",
              args: {
                name: "DATABASE_ADMIN_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-admin-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--database-admin-password-secret-version` on the command line",
              args: {
                name: "DATABASE_ADMIN_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-character-set",
              description:
                "The character set for the database. The default is AL32UTF8",
              args: {
                name: "DATABASE_CHARACTER_SET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-db-home-name",
              description:
                "The name of the DbHome resource associated with the Database",
              args: {
                name: "DATABASE_DB_HOME_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-db-name",
              description:
                "The database name. The name must begin with an alphabetic character and can\ncontain a maximum of eight alphanumeric characters. Special characters are\nnot permitted",
              args: {
                name: "DATABASE_DB_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-db-unique-name",
              description:
                "The DB_UNIQUE_NAME of the Oracle Database being backed up",
              args: {
                name: "DATABASE_DB_UNIQUE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-id",
              description: "The database ID of the Database",
              args: {
                name: "DATABASE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-name",
              description:
                "Identifier. The name of the Database resource in the following format:\nprojects/{project}/locations/{region}/databases/{database}",
              args: {
                name: "DATABASE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-ncharacter-set",
              description:
                "The national character set for the database. The default is AL16UTF16",
              args: {
                name: "DATABASE_NCHARACTER_SET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-pluggable-id",
              description:
                "The ID of the pluggable database associated with the Database. The ID must\nbe unique within the project and location",
              args: {
                name: "DATABASE_PLUGGABLE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-pluggable-name",
              description:
                "The pluggable database associated with the Database. The name must begin\nwith an alphabetic character and can contain a maximum of thirty\nalphanumeric characters",
              args: {
                name: "DATABASE_PLUGGABLE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-tde-wallet-password",
              description:
                "The TDE wallet password for the database.\nNote: Only one of `tde_wallet_password_secret_version` or\n`tde_wallet_password` can be populated",
              args: {
                name: "DATABASE_TDE_WALLET_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--database-tde-wallet-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--database-tde-wallet-password-secret-version` on the command line",
              args: {
                name: "DATABASE_TDE_WALLET_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db-backup-config-auto-enabled",
              description:
                "If set to true, enables automatic backups on the database",
            },
            {
              name: "--db-backup-config-auto-full-day",
              description:
                "The day of the week on which the full backup should be performed on the\ndatabase. If no value is provided, it will default to Sunday. _DB_BACKUP_CONFIG_AUTO_FULL_DAY_ must be one of:\n+\n*friday*::: Friday\n*monday*::: Monday\n*saturday*::: Saturday\n*sunday*::: Sunday\n*thursday*::: Thursday\n*tuesday*::: Tuesday\n*wednesday*::: Wednesday\n:::\n+",
              args: {
                name: "DB_BACKUP_CONFIG_AUTO_FULL_DAY",
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
            {
              name: "--db-backup-config-auto-full-window",
              description:
                "The window in which the full backup should be performed on the database.\nIf no value is provided, the default is anytime. _DB_BACKUP_CONFIG_AUTO_FULL_WINDOW_ must be one of:\n+\n*slot-eight*::: 2:00 PM - 4:00 PM\n*slot-eleven*::: 8:00 PM - 10:00 PM\n*slot-five*::: 8:00 AM - 10:00 AM\n*slot-four*::: 6:00 AM - 8:00 AM\n*slot-nine*::: 4:00 PM - 6:00 PM\n*slot-one*::: 12:00 AM - 2:00 AM\n*slot-seven*::: 12:00 PM - 2:00 PM\n*slot-six*::: 10:00 AM - 12:00 PM\n*slot-ten*::: 6:00 PM - 8:00 PM\n*slot-three*::: 4:00 AM - 6:00 AM\n*slot-twelve*::: 10:00 PM - 12:00 AM\n*slot-two*::: 2:00 AM - 4:00 AM\n:::\n+",
              args: {
                name: "DB_BACKUP_CONFIG_AUTO_FULL_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "slot-eight",
                  "slot-eleven",
                  "slot-five",
                  "slot-four",
                  "slot-nine",
                  "slot-one",
                  "slot-seven",
                  "slot-six",
                  "slot-ten",
                  "slot-three",
                  "slot-twelve",
                  "slot-two",
                ],
              },
            },
            {
              name: "--db-backup-config-auto-incremental-window",
              description:
                "The window in which the incremental backup should be performed on the\ndatabase. If no value is provided, the default is anytime except the auto\nfull backup day. _DB_BACKUP_CONFIG_AUTO_INCREMENTAL_WINDOW_ must be one of:\n+\n*slot-eight*::: 2:00 PM - 4:00 PM\n*slot-eleven*::: 8:00 PM - 10:00 PM\n*slot-five*::: 8:00 AM - 10:00 AM\n*slot-four*::: 6:00 AM - 8:00 AM\n*slot-nine*::: 4:00 PM - 6:00 PM\n*slot-one*::: 12:00 AM - 2:00 AM\n*slot-seven*::: 12:00 PM - 2:00 PM\n*slot-six*::: 10:00 AM - 12:00 PM\n*slot-ten*::: 6:00 PM - 8:00 PM\n*slot-three*::: 4:00 AM - 6:00 AM\n*slot-twelve*::: 10:00 PM - 12:00 AM\n*slot-two*::: 2:00 AM - 4:00 AM\n:::\n+",
              args: {
                name: "DB_BACKUP_CONFIG_AUTO_INCREMENTAL_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "slot-eight",
                  "slot-eleven",
                  "slot-five",
                  "slot-four",
                  "slot-nine",
                  "slot-one",
                  "slot-seven",
                  "slot-six",
                  "slot-ten",
                  "slot-three",
                  "slot-twelve",
                  "slot-two",
                ],
              },
            },
            {
              name: "--db-backup-config-deletion-policy",
              description:
                "This defines when the backups will be deleted after Database termination. _DB_BACKUP_CONFIG_DELETION_POLICY_ must be one of:\n+\n*delete-after-retention-period*::: Keeps the backups as per the policy defined\nfor database backups.\n*delete-immediately*::: Keeps the backup for predefined time\ni.e. 72 hours and then delete permanently.\n:::\n+",
              args: {
                name: "DB_BACKUP_CONFIG_DELETION_POLICY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "delete-after-retention-period",
                  "delete-immediately",
                ],
              },
            },
            {
              name: "--db-backup-config-destination-details",
              description:
                'Details of the database backup destinations.\n+\n*type*:::\nThe type of the database backup destination.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--db-backup-config-destination-details=type=string --db-backup-config-destination-details=type=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--db-backup-config-destination-details=\'[{"type": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--db-backup-config-destination-details=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "DB_BACKUP_CONFIG_DESTINATION_DETAILS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--db-backup-config-retention-period-days",
              description:
                "The number of days an automatic backup is retained before being\nautomatically deleted. This value determines the earliest point in time to\nwhich a database can be restored. Min: 1, Max: 60",
              args: {
                name: "DB_BACKUP_CONFIG_RETENTION_PERIOD_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--db-home-display-name",
              description:
                "The display name for the Database Home. The name does not have to\nbe unique within your project",
              args: {
                name: "DB_HOME_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db-home-is-unified-auditing-enabled",
              description:
                "Whether unified auditing is enabled for the Database Home",
            },
            {
              name: "--db-home-version",
              description:
                "A valid Oracle Database version. For a list of supported versions, use the\nListDbVersions operation",
              args: {
                name: "DB_HOME_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db-system-options-storage-management",
              description:
                "The storage option used in DB system. _DB_SYSTEM_OPTIONS_STORAGE_MANAGEMENT_ must be one of:\n+\n*asm*::: Automatic storage management. This option is not supported. Only LVM is\nsupported.\n*lvm*::: Logical Volume management.\n:::\n+",
              args: {
                name: "DB_SYSTEM_OPTIONS_STORAGE_MANAGEMENT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["asm", "lvm"],
              },
            },
            {
              name: "--display-name",
              description:
                "The display name for the System db. The name does not have to\nbe unique within your project",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle DbSystem is hosted.\nExample: us-east4-b-r2.\nIf not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'The labels or tags associated with the DbSystem.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [db_system, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10661,
            flag10664,
            flag11637,
            {
              name: "--properties-compute-count",
              description: "The number of CPU cores to enable for the DbSystem",
              args: {
                name: "PROPERTIES_COMPUTE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-compute-model",
              description:
                "The compute model of the DbSystem. _PROPERTIES_COMPUTE_MODEL_ must be one of:\n+\n*ecpu*::: The compute model is virtual.\n*ocpu*::: The compute model is physical.\n:::\n+",
              args: {
                name: "PROPERTIES_COMPUTE_MODEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["ecpu", "ocpu"],
              },
            },
            {
              name: "--properties-data-storage-size-gb",
              description:
                "The data storage size in GB that is currently available to DbSystems",
              args: {
                name: "PROPERTIES_DATA_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-database-edition",
              description:
                "The database edition of the DbSystem. _PROPERTIES_DATABASE_EDITION_ must be one of:\n+\n*enterprise-edition*::: The database edition is Enterprise.\n*enterprise-edition-high-performance*::: The database edition is Enterprise Edition.\n*standard-edition*::: The database edition is Standard.\n:::\n+",
              args: {
                name: "PROPERTIES_DATABASE_EDITION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "enterprise-edition",
                  "enterprise-edition-high-performance",
                  "standard-edition",
                ],
              },
            },
            {
              name: "--properties-db-version",
              description: "The Oracle Database version",
              args: {
                name: "PROPERTIES_DB_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-domain",
              description: "The host domain name of the DbSystem",
              args: {
                name: "PROPERTIES_DOMAIN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-hostname-prefix",
              description: "Prefix for DB System host names",
              args: {
                name: "PROPERTIES_HOSTNAME_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-initial-data-storage-size-gb",
              description: "The initial data storage size in GB",
              args: {
                name: "PROPERTIES_INITIAL_DATA_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-license-model",
              description:
                "The license model of the DbSystem. _PROPERTIES_LICENSE_MODEL_ must be one of:\n+\n*bring-your-own-license*::: The license model is bring your own license.\n*license-included*::: The license model is included.\n:::\n+",
              args: {
                name: "PROPERTIES_LICENSE_MODEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-memory-size-gb",
              description: "The memory size in GB",
              args: {
                name: "PROPERTIES_MEMORY_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-node-count",
              description: "The number of nodes in the DbSystem",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-private-ip",
              description: "The private IP address of the DbSystem",
              args: {
                name: "PROPERTIES_PRIVATE_IP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-reco-storage-size-gb",
              description: "The reco/redo storage size in GB",
              args: {
                name: "PROPERTIES_RECO_STORAGE_SIZE_GB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-shape",
              description: "Shape of DB System",
              args: {
                name: "PROPERTIES_SHAPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-ssh-public-keys",
              description: "SSH public keys to be stored with the DbSystem",
              args: {
                name: "PROPERTIES_SSH_PUBLIC_KEYS",
                description: "List",
                suggestions: [],
              },
            },
            flag11946,
            flag12847,
            {
              name: "--secret",
              description:
                "For resources [database-admin-password-secret-version, database-tde-wallet-password-secret-version], provides fallback value for resource secret attribute. When the resource's full URI path is not provided, secret will fallback to this flag value",
              args: { name: "SECRET", description: "String", suggestions: [] },
            },
            flag14881,
            flag14882,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DB_SYSTEM",
            description:
              "ID of the dbSystem or fully qualified identifier for the dbSystem.\n+\nTo set the `db_system` attribute:\n* provide the argument `db_system` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a DbSystem",
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
            flag7240,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DB_SYSTEM",
            description:
              "ID of the dbSystem or fully qualified identifier for the dbSystem.\n+\nTo set the `db_system` attribute:\n* provide the argument `db_system` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a DbSystem",
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
            flag7240,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DB_SYSTEM",
            description:
              "ID of the dbSystem or fully qualified identifier for the dbSystem.\n+\nTo set the `db_system` attribute:\n* provide the argument `db_system` on the command line",
          },
        },
        {
          name: "list",
          description: "List all DbSystems",
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
      name: "db-versions",
      description: "Manage Db Version resources",
      subcommands: [
        {
          name: "list",
          description: "List all DbVersions",
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
      name: "entitlements",
      description: "Manage Entitlement resources",
      subcommands: [
        {
          name: "list",
          description: "List all Entitlements",
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
      name: "exadb-vm-clusters",
      description: "Manage Exadb Vm Cluster resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new ExadbVmCluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1033,
            flag1201,
            flag2292,
            flag2684,
            {
              name: "--data-collection-options-is-health-monitoring-enabled",
              description: "Indicates whether to enable health monitoring",
            },
            flag2686,
            {
              name: "--display-name",
              description:
                "The display name for the ExadbVmCluster. The name does not have to\nbe unique within your project. The name must be 1-255 characters long and\ncan only contain alphanumeric characters",
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
            {
              name: "--labels",
              description:
                'The labels or tags associated with the ExadbVmCluster.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [backup-odb-subnet, exadb_vm_cluster, odb-network, odb-subnet, properties-exascale-db-storage-vault], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10660,
            flag10664,
            flag11637,
            {
              name: "--properties-additional-ecpu-count-per-node",
              description:
                "The number of additional ECPUs per node for an Exadata VM cluster on\nexascale infrastructure",
              args: {
                name: "PROPERTIES_ADDITIONAL_ECPU_COUNT_PER_NODE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-cluster-name",
              description:
                "The cluster name for Exascale vm cluster. The cluster name must begin with\nan alphabetic character and may contain hyphens(-) but can not contain\nunderscores(_). It should be not more than 11 characters and is not case\nsensitive.\nOCI Cluster name",
              args: {
                name: "PROPERTIES_CLUSTER_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-enabled-ecpu-count-per-node",
              description:
                "The number of ECPUs enabled per node for an exadata vm cluster on\nexascale infrastructure",
              args: {
                name: "PROPERTIES_ENABLED_ECPU_COUNT_PER_NODE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-exascale-db-storage-vault",
              description:
                "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault.\n+\nTo set the `exascale-db-storage-vault` attribute:\n* provide the argument `--properties-exascale-db-storage-vault` on the command line",
              args: {
                name: "PROPERTIES_EXASCALE_DB_STORAGE_VAULT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-grid-image-id",
              description: "Grid Infrastructure Version",
              args: {
                name: "PROPERTIES_GRID_IMAGE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-hostname-prefix",
              description: "Prefix for VM cluster host names",
              args: {
                name: "PROPERTIES_HOSTNAME_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-license-model",
              description:
                "The license type of the ExadbVmCluster. _PROPERTIES_LICENSE_MODEL_ must be one of:\n+\n*bring-your-own-license*::: Bring your own license.\n*license-included*::: Default is license included.\n:::\n+",
              args: {
                name: "PROPERTIES_LICENSE_MODEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            {
              name: "--properties-node-count",
              description: "The number of nodes/VMs in the ExadbVmCluster",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11723,
            {
              name: "--properties-shape-attribute",
              description:
                "The shape attribute of the VM cluster. The type of Exascale storage used\nfor Exadata VM cluster. The default is SMART_STORAGE which supports Oracle\nDatabase 23ai and later. _PROPERTIES_SHAPE_ATTRIBUTE_ must be one of:\n+\n*block-storage*::: Indicates that the resource is in block storage.\n*smart-storage*::: Indicates that the resource is in smart storage.\n:::\n+",
              args: {
                name: "PROPERTIES_SHAPE_ATTRIBUTE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["block-storage", "smart-storage"],
              },
            },
            {
              name: "--properties-ssh-public-keys",
              description: "The SSH public keys for the ExadbVmCluster",
              args: {
                name: "PROPERTIES_SSH_PUBLIC_KEYS",
                description: "List",
                suggestions: [],
              },
            },
            flag11946,
            flag12847,
            flag14881,
            flag14882,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--vm-file-system-storage-size-in-gbs-per-node",
              description:
                "The storage allocation for the exadbvmcluster per node, in gigabytes (GB).\nThis field is used to calculate the total storage allocation for the\nexadbvmcluster",
              args: {
                name: "VM_FILE_SYSTEM_STORAGE_SIZE_IN_GBS_PER_NODE",
                description: "Int",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster.\n+\nTo set the `exadb_vm_cluster` attribute:\n* provide the argument `exadb_vm_cluster` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an ExadbVmCluster",
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
            flag7247,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster.\n+\nTo set the `exadb_vm_cluster` attribute:\n* provide the argument `exadb_vm_cluster` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a ExadbVmCluster",
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
            flag7247,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster.\n+\nTo set the `exadb_vm_cluster` attribute:\n* provide the argument `exadb_vm_cluster` on the command line",
          },
        },
        {
          name: "list",
          description: "List all ExadbVmClusters",
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
          name: "remove-virtual-machine",
          description: "Remove virtual machines from an ExadbVmCluster",
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
              name: "--hostnames",
              description:
                "The list of host names of db nodes to be removed from the ExadbVmCluster",
              args: { name: "HOSTNAMES", description: "List", suggestions: [] },
            },
            flag5699,
            flag7247,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster.\n+\nTo set the `exadb_vm_cluster` attribute:\n* provide the argument `exadb_vm_cluster` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an ExadbVmCluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1721,
            {
              name: "--clear-properties",
              description:
                "Set exadbVmCluster.properties back to default value",
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'Set labels to new value. The labels or tags associated with the ExadbVmCluster.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag7247,
            flag7356,
            flag11637,
            {
              name: "--properties-node-count",
              description: "The number of nodes/VMs in the ExadbVmCluster",
              args: {
                name: "PROPERTIES_NODE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11946,
            flag12641,
            flag12835,
            flag14975,
            {
              name: "--update-labels",
              description:
                'Update labels value or add key value pair. The labels or tags associated with the ExadbVmCluster.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
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
            name: "EXADB_VM_CLUSTER",
            description:
              "ID of the exadbVmCluster or fully qualified identifier for the exadbVmCluster.\n+\nTo set the `exadb_vm_cluster` attribute:\n* provide the argument `exadb_vm_cluster` on the command line",
          },
        },
      ],
    },
    {
      name: "exascale-db-storage-vaults",
      description: "Manage Exascale Db Storage Vault resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new ExascaleDbStorageVault",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description:
                "The display name for the ExascaleDbStorageVault. The name does not have to\nbe unique within your project. The name must be 1-255 characters long and\ncan only contain alphanumeric characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4579,
            {
              name: "--exascale-db-storage-details-total-size-gbs",
              description:
                "The total storage allocation for the ExascaleDbStorageVault, in gigabytes\n(GB)",
              args: {
                name: "EXASCALE_DB_STORAGE_DETAILS_TOTAL_SIZE_GBS",
                description: "Int",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.\nExample: us-east4-b-r2.\nIf not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'The labels or tags associated with the ExascaleDbStorageVault.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [exadata-infrastructure, exascale_db_storage_vault], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            {
              name: "--properties-additional-flash-cache-percent",
              description:
                "The size of additional flash cache in percentage of high capacity\ndatabase storage",
              args: {
                name: "PROPERTIES_ADDITIONAL_FLASH_CACHE_PERCENT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-description",
              description: "The description of the ExascaleDbStorageVault",
              args: {
                name: "PROPERTIES_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXASCALE_DB_STORAGE_VAULT",
            description:
              "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault.\n+\nTo set the `exascale_db_storage_vault` attribute:\n* provide the argument `exascale_db_storage_vault` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an ExascaleDbStorageVault",
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
            flag7248,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXASCALE_DB_STORAGE_VAULT",
            description:
              "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault.\n+\nTo set the `exascale_db_storage_vault` attribute:\n* provide the argument `exascale_db_storage_vault` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a ExascaleDbStorageVault",
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
            flag7248,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXASCALE_DB_STORAGE_VAULT",
            description:
              "ID of the exascaleDbStorageVault or fully qualified identifier for the exascaleDbStorageVault.\n+\nTo set the `exascale_db_storage_vault` attribute:\n* provide the argument `exascale_db_storage_vault` on the command line",
          },
        },
        {
          name: "list",
          description: "List all ExascaleDbStorageVaults",
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
      name: "gi-versions",
      description: "Manage Gi Version resources",
      subcommands: [
        {
          name: "list",
          description: "List Grid Infrastructure versions",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--filter",
              description:
                "Apply a filter in the format :\n--filter='gi_version=\"19.0.0.0\"'",
              args: {
                name: "EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "minor-versions",
          description: "Manage Minor Version resources",
          subcommands: [
            {
              name: "list",
              description: "List minor versions",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--filter",
                  description:
                    "Apply a filter in the format:\n--filter='shape_family=\"EXADATA.X9M\"'",
                  args: {
                    name: "EXPRESSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gi-version",
                  description:
                    "ID of the gi-version or fully qualified identifier for the gi-version.\n+\nTo set the `gi-version` attribute:\n* provide the argument `--gi-version` on the command line",
                  args: {
                    name: "GI_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The Cloud location for the gi-version.\n+\nTo set the `location` attribute:\n* provide the argument `--gi-version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
      ],
    },
    {
      name: "goldengate-connection-assignments",
      description: "Manage Goldengate Connection Assignment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new GoldengateConnectionAssignment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description:
                "The display name for the GoldengateConnectionAssignment",
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
            {
              name: "--labels",
              description:
                'The labels or tags associated with the GoldengateConnectionAssignment.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [goldengate_connection_assignment, properties-goldengate-connection, properties-goldengate-deployment], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            {
              name: "--properties-goldengate-connection",
              description:
                "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection.\n+\nTo set the `goldengate-connection` attribute:\n* provide the argument `--properties-goldengate-connection` on the command line",
              args: {
                name: "PROPERTIES_GOLDENGATE_CONNECTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-goldengate-deployment",
              description:
                "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate-deployment` attribute:\n* provide the argument `--properties-goldengate-deployment` on the command line",
              args: {
                name: "PROPERTIES_GOLDENGATE_DEPLOYMENT",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment.\n+\nTo set the `goldengate_connection_assignment` attribute:\n* provide the argument `goldengate_connection_assignment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a GoldengateConnectionAssignment",
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
            flag7252,
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
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment.\n+\nTo set the `goldengate_connection_assignment` attribute:\n* provide the argument `goldengate_connection_assignment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a GoldengateConnectionAssignment",
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
            flag7252,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment.\n+\nTo set the `goldengate_connection_assignment` attribute:\n* provide the argument `goldengate_connection_assignment` on the command line",
          },
        },
        {
          name: "list",
          description: "List all GoldengateConnectionAssignments",
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
          name: "test",
          description: "Test a GoldengateConnectionAssignment",
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
            flag7252,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--type",
              description:
                "The type of the test of the assigned connection.\nThe only type actually supported is DEFAULT. _TYPE_ must be (only one value is supported):\n+\n*default*::: The default connection test.\n:::\n+",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["default"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION_ASSIGNMENT",
            description:
              "ID of the goldengateConnectionAssignment or fully qualified identifier for the goldengateConnectionAssignment.\n+\nTo set the `goldengate_connection_assignment` attribute:\n* provide the argument `goldengate_connection_assignment` on the command line",
          },
        },
      ],
    },
    {
      name: "goldengate-connection-types",
      description: "Manage Goldengate Connection Type resources",
      subcommands: [
        {
          name: "list",
          description: "List all Goldengate connection types",
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
      name: "goldengate-connections",
      description: "Manage Goldengate Connection resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new GoldengateConnection",
          options: [
            flag42,
            flag46,
            {
              name: "--amazon-kinesis-connection-properties-access-key-id",
              description: "Access key ID to access the Amazon Kinesis",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_ACCESS_KEY_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-aws-region",
              description:
                "The name of the AWS region.\nIf not provided, Goldengate will default to 'us-west-1'",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_AWS_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-endpoint",
              description:
                "The endpoint URL of the Amazon Kinesis service.\ne.g.: 'https://kinesis.us-east-1.amazonaws.com'\nIf not provided, Goldengate will default to\n'https://kinesis.<region>.amazonaws.com'",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-secret-access-key",
              description: "Secret access key to access the Amazon Kinesis",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_SECRET_ACCESS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-kinesis-connection-properties-technology-type",
              description: "The technology type of AmazonKinesisConnection",
              args: {
                name: "AMAZON_KINESIS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-redshift-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Amazon Redshift connection\nin plain text",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-redshift-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--amazon-redshift-connection-properties-password-secret-version` on the command line",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-redshift-connection-properties-technology-type",
              description: "The technology type of AmazonRedshiftConnection",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-redshift-connection-properties-url",
              description:
                "Connection URL.\ne.g.:\n'jdbc:redshift://aws-redshift-instance.aaaaaaaaaaaa.us-east-2.redshift.amazonaws.com:5439/mydb'",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-redshift-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "AMAZON_REDSHIFT_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-s3-connection-properties-access-key-id",
              description: "Access key ID to access the Amazon S3 bucket",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_ACCESS_KEY_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-s3-connection-properties-endpoint",
              description: "The Amazon Endpoint for S3",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-s3-connection-properties-region",
              description:
                "The name of the AWS region where the bucket is created",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-s3-connection-properties-secret-access-key",
              description: "Secret access key to access the Amazon S3 bucket",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_SECRET_ACCESS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--amazon-s3-connection-properties-technology-type",
              description: "The technology type of AmazonS3Connection",
              args: {
                name: "AMAZON_S3_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag720,
            {
              name: "--azure-data-lake-storage-connection-properties-account",
              description: "Sets the Azure storage account name",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-account-key-secret",
              description:
                "Azure storage account key. This property is required when\n'authentication_type' is set to 'SHARED_KEY'",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_ACCOUNT_KEY_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-authentication-type",
              description:
                "Authentication mechanism to access Azure Data Lake Storage. _AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*azure-active-directory*::: Azure active directory authentication.\n*shared-access-signature*::: Shared access signature authentication.\n*shared-key*::: Shared key authentication.\n:::\n+",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "azure-active-directory",
                  "shared-access-signature",
                  "shared-key",
                ],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-authority-host",
              description:
                "The endpoint used for authentication with Microsoft Entra ID (formerly\nAzure Active Directory). Default value:\nhttps://login.microsoftonline.com",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_AUTHORITY_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-client-id",
              description:
                "Azure client ID of the application. This property is required when\n'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-client-secret",
              description:
                "Azure client secret (aka application password) for authentication",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-endpoint",
              description:
                "Azure Storage service endpoint.\ne.g: https://test.blob.core.windows.net",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-sas-token-secret",
              description:
                "Credential that uses a shared access signature (SAS) to authenticate to\nan Azure Service",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_SAS_TOKEN_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-technology-type",
              description:
                "The technology type of AzureDataLakeStorageConnection",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-data-lake-storage-connection-properties-tenant-id",
              description:
                "Azure tenant ID of the application. This property is required when\n'authentication_type' is set to 'AZURE_ACTIVE_DIRECTORY'",
              args: {
                name: "AZURE_DATA_LAKE_STORAGE_CONNECTION_PROPERTIES_TENANT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Azure Synapse Analytics\nconnection in plain text",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--azure-synapse-analytics-connection-properties-password-secret-version` on the command line",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-string",
              description:
                "JDBC connection string.\ne.g.:\n'jdbc:sqlserver://<synapse-workspace>.sql.azuresynapse.net:1433;database=<db-name>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.sql.azuresynapse.net;loginTimeout=300;'",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_STRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-technology-type",
              description:
                "The technology type of AzureSynapseAnalyticsConnection",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--azure-synapse-analytics-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "AZURE_SYNAPSE_ANALYTICS_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--databricks-connection-properties-authentication-type",
              description:
                "Authentication type for Databricks. _DATABRICKS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*oauth-m2m*::: OAuth M2M authentication.\n*personal-access-token*::: Personal access token authentication.\n:::\n+",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["oauth-m2m", "personal-access-token"],
              },
            },
            {
              name: "--databricks-connection-properties-client-id",
              description:
                "OAuth client id, only applicable for authentication_type == OAUTH_M2M",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--databricks-connection-properties-client-secret",
              description:
                "OAuth client secret, only applicable for authentication_type == OAUTH_M2M",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--databricks-connection-properties-password",
              description:
                "The password used to connect to Databricks in plain text",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--databricks-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--databricks-connection-properties-password-secret-version` on the command line",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--databricks-connection-properties-storage-credential",
              description:
                "External storage credential name to access files on object\nstorage such as ADLS Gen2, S3 or Cloud Storage",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_STORAGE_CREDENTIAL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--databricks-connection-properties-technology-type",
              description: "The technology type of DatabricksConnection",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--databricks-connection-properties-url",
              description:
                "Connection URL.\ne.g.:\n'jdbc:databricks://adb-33934.4.azuredatabricks.net:443/default;transportMode=http;ssl=1;httpPath=sql/protocolv1/o/3393########44/0##3-7-hlrb'",
              args: {
                name: "DATABRICKS_CONNECTION_PROPERTIES_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-additional-attributes",
              description:
                'An array of name-value pair attribute entries.\nUsed as additional parameters in connection string.\n+\n*key*:::\nThe name of the property entry.\n+\n*value*:::\nThe value of the property entry.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--db2-connection-properties-additional-attributes=key=string,value=string --db2-connection-properties-additional-attributes=key=string,value=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--db2-connection-properties-additional-attributes=\'[{"key": "string", "value": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--db2-connection-properties-additional-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "DB2_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Db2 connection in plain text",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--db2-connection-properties-password-secret-version` on the command line",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-security-protocol",
              description:
                "Security protocol for the DB2 database. _DB2_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["plain", "tls"],
              },
            },
            {
              name: "--db2-connection-properties-ssl-client-keystash-file",
              description:
                "The keystash file which contains the encrypted password to\nthe key database file. Not supported for IBM Db2 for i",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SSL_CLIENT_KEYSTASH_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-ssl-client-keystoredb-file",
              description:
                "The keystore file created at the client containing the\nserver certificate / CA root certificate. Not supported for IBM Db2 for i",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SSL_CLIENT_KEYSTOREDB_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-ssl-server-certificate-file",
              description:
                "The file which contains the self-signed server certificate\n/ Certificate Authority (CA) certificate",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_SSL_SERVER_CERTIFICATE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-technology-type",
              description: "The technology type of Db2Connection",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--db2-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the DB2 database",
              args: {
                name: "DB2_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--elasticsearch-connection-properties-authentication-type",
              description:
                "Authentication type for Elasticsearch. _ELASTICSEARCH_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*basic*::: Basic authentication.\n*none*::: No authentication.\n:::\n+",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "none"],
              },
            },
            {
              name: "--elasticsearch-connection-properties-fingerprint",
              description:
                "Fingerprint required by TLS security protocol.\nEg.: '6152b2dfbff200f973c5074a5b91d06ab3b472c07c09a1ea57bb7fd406cdce9c'",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_FINGERPRINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--elasticsearch-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Elastic Search connection\nin plain text",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--elasticsearch-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--elasticsearch-connection-properties-password-secret-version` on the command line",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--elasticsearch-connection-properties-security-protocol",
              description:
                "Security protocol for Elasticsearch. _ELASTICSEARCH_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["plain", "tls"],
              },
            },
            {
              name: "--elasticsearch-connection-properties-servers",
              description:
                'Comma separated list of Elasticsearch server addresses, specified as\nhost:port entries, where :port is optional. If port is not specified, it\ndefaults to 9200. Example:\n"server1.example.com:4000,server2.example.com:4000"',
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_SERVERS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--elasticsearch-connection-properties-technology-type",
              description: "The technology type of ElasticsearchConnection",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--elasticsearch-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "ELASTICSEARCH_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle GoldengateConnection is hosted.\nExample: us-east4-b-r2.\nIf not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--generic-connection-properties-host",
              description: "The host of the GenericConnection",
              args: {
                name: "GENERIC_CONNECTION_PROPERTIES_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--generic-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GENERIC_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-deployment-id",
              description:
                "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate-deployment` attribute:\n* provide the argument `--goldengate-connection-properties-deployment-id` on the command line",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_DEPLOYMENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-host",
              description: "The host of the GoldengateConnection",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-password",
              description:
                "The password used to connect to the Oracle Goldengate in plain text",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--goldengate-connection-properties-password-secret-version` on the command line",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-port",
              description: "The port of the GoldengateConnection",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--goldengate-connection-properties-username",
              description: "The username credential",
              args: {
                name: "GOLDENGATE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-big-query-connection-properties-service-account-key-file",
              description:
                "The base64 encoded content of the service account key file containing the\ncredentials required to use Google BigQuery",
              args: {
                name: "GOOGLE_BIG_QUERY_CONNECTION_PROPERTIES_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-big-query-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GOOGLE_BIG_QUERY_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-cloud-storage-connection-properties-service-account-key-file",
              description:
                "The base64 encoded content of the service account key file containing the\ncredentials required to use Google Cloud Storage",
              args: {
                name: "GOOGLE_CLOUD_STORAGE_CONNECTION_PROPERTIES_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-cloud-storage-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "GOOGLE_CLOUD_STORAGE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-pubsub-connection-properties-service-account-key-file",
              description:
                "The base64 encoded content of the service account key file containing the\ncredentials required to use Google Pub/Sub",
              args: {
                name: "GOOGLE_PUBSUB_CONNECTION_PROPERTIES_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-pubsub-connection-properties-technology-type",
              description: "The technology type of GooglePubsubConnection",
              args: {
                name: "GOOGLE_PUBSUB_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--hdfs-connection-properties-core-site-xml",
              description:
                "The content of the Hadoop Distributed File System\nconfiguration file (core-site.xml)",
              args: {
                name: "HDFS_CONNECTION_PROPERTIES_CORE_SITE_XML",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--hdfs-connection-properties-technology-type",
              description: "The technology type of HdfsConnection",
              args: {
                name: "HDFS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-access-key-id",
              description: "The access key ID of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_ACCESS_KEY_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-bucket",
              description: "The bucket of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_BUCKET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-endpoint",
              description: "The endpoint of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-region",
              description: "The region of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-scheme-type",
              description:
                "The scheme type of Amazon S3. _ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_SCHEME_TYPE_ must be one of:\n+\n*s3*::: S3 scheme.\n*s3a*::: S3A scheme.\n:::\n+",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_SCHEME_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["s3", "s3a"],
              },
            },
            {
              name: "--iceberg-connection-properties-amazon-s3-storage-secret-access-key",
              description: "The secret access key of Amazon S3",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AMAZON_S3_STORAGE_SECRET_ACCESS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-account",
              description: "The account of Azure Data Lake Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-account-key-secret",
              description: "The account key of Azure Data Lake Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_ACCOUNT_KEY_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-container",
              description: "The container of Azure Data Lake Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_CONTAINER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-azure-data-lake-storage-endpoint",
              description: "The endpoint of Azure Data Lake Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_AZURE_DATA_LAKE_STORAGE_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-catalog-type",
              description:
                "The type of Iceberg catalog. _ICEBERG_CONNECTION_PROPERTIES_CATALOG_TYPE_ must be one of:\n+\n*glue*::: Glue catalog.\n*hadoop*::: Hadoop catalog.\n*nessie*::: Nessie catalog.\n*polaris*::: Polaris catalog.\n*rest*::: REST catalog.\n:::\n+",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_CATALOG_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["glue", "hadoop", "nessie", "polaris", "rest"],
              },
            },
            {
              name: "--iceberg-connection-properties-glue-catalog-id",
              description: "The catalog ID of Glue",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GLUE_CATALOG_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-google-cloud-storage-bucket",
              description: "The bucket of Google Cloud Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GOOGLE_CLOUD_STORAGE_BUCKET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-google-cloud-storage-project-id",
              description: "The project ID of Google Cloud Storage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GOOGLE_CLOUD_STORAGE_PROJECT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-google-cloud-storage-service-account-key-file",
              description:
                "The base64 encoded content of the service account key file of Google Cloud\nStorage",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_GOOGLE_CLOUD_STORAGE_SERVICE_ACCOUNT_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-nessie-catalog-branch",
              description: "The Nessie branch",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_NESSIE_CATALOG_BRANCH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-nessie-catalog-uri",
              description: "The Nessie uri",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_NESSIE_CATALOG_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog",
              description: "The catalog name within Polaris",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-client-id",
              description: "The Polaris client ID",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-client-secret",
              description: "The Polaris client secret",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-principal-role",
              description: "The Polaris principal role",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_PRINCIPAL_ROLE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-polaris-catalog-uri",
              description: "The Polaris uri",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_POLARIS_CATALOG_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-rest-catalog",
              description:
                "The base64 encoded content of the configuration file containing additional\nproperties for the REST catalog",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_REST_CATALOG",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-rest-catalog-uri",
              description: "The REST uri",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_REST_CATALOG_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--iceberg-connection-properties-storage-type",
              description:
                "The type of Iceberg storage. _ICEBERG_CONNECTION_PROPERTIES_STORAGE_TYPE_ must be one of:\n+\n*amazon-s3*::: Amazon S3 storage.\n*azure-data-lake-storage*::: Azure Data Lake Storage storage.\n*google-cloud-storage*::: Google Cloud Storage storage.\n:::\n+",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_STORAGE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "amazon-s3",
                  "azure-data-lake-storage",
                  "google-cloud-storage",
                ],
              },
            },
            {
              name: "--iceberg-connection-properties-technology-type",
              description: "The technology type of Iceberg connection",
              args: {
                name: "ICEBERG_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--java-message-service-connection-properties-authentication-type",
              description:
                "Authentication type for Java Message Service. _JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*basic*::: Basic authentication.\n*none*::: No authentication.\n:::\n+",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "none"],
              },
            },
            {
              name: "--java-message-service-connection-properties-factory",
              description:
                "The Java class implementing javax.jms.ConnectionFactory interface supplied\nby the JMS provider",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_FACTORY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-factory",
              description:
                "The Connection Factory can be looked up using this name.\ne.g.: 'ConnectionFactory'",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_FACTORY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-initial-context-factory",
              description:
                "The implementation of javax.naming.spi.InitialContextFactory interface\nused to obtain initial naming context",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_INITIAL_CONTEXT_FACTORY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-provider-url",
              description:
                "The URL that Java Message Service will use to contact the JNDI provider.\ne.g.: 'tcp://myjms.host.domain:61616?jms.prefetchPolicy.all=1000'",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_PROVIDER_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-security-credentials-secret",
              description: "The password associated to the principal",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_SECURITY_CREDENTIALS_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-jndi-security-principal",
              description:
                "Specifies the identity of the principal (user) to be authenticated",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_JNDI_SECURITY_PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-key-store-file",
              description: "The base64 encoded content of the KeyStore file",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-key-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--java-message-service-connection-properties-key-store-password-secret-version` on the command line",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect the Java Message Service\nin plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--java-message-service-connection-properties-password-secret-version` on the command line",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-security-protocol",
              description:
                "Security protocol for Java Message Service. _JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*mtls*::: Mutual Transport Layer Security.\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--java-message-service-connection-properties-ssl-key-password",
              description:
                "The password for the cert inside of the KeyStore in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-ssl-key-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--java-message-service-connection-properties-ssl-key-password-secret-version` on the command line",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-technology-type",
              description:
                "The technology type of JavaMessageServiceConnection",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-trust-store-file",
              description: "The base64 encoded content of the TrustStore file",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-trust-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--java-message-service-connection-properties-trust-store-password-secret-version` on the command line",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-url",
              description:
                "Connection URL of the Java Message Service, specifying the protocol, host,\nand port. e.g.: 'mq://myjms.host.domain:7676'",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--java-message-service-connection-properties-use-jndi",
              description:
                "If set to true, Java Naming and Directory Interface (JNDI) properties\nshould be provided",
            },
            {
              name: "--java-message-service-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the Java Message\nService",
              args: {
                name: "JAVA_MESSAGE_SERVICE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-bootstrap-servers",
              description:
                'Kafka bootstrap. Equivalent of bootstrap.servers configuration property\nin Kafka: list of KafkaBootstrapServer objects specified by host/port.\nUsed for establishing the initial connection to the Kafka cluster.\nExample: "server1.example.com:9092,server2.example.com:9092".\n+\n*host*:::\nThe name or address of a host.\n+\n*port*:::\nThe port of an endpoint usually specified for a connection.\n+\n*privateIpAddress*:::\nThe private IP address of the connection\'s endpoint in the customer\'s VCN,\ntypically a database endpoint or a big data endpoint (e.g. Kafka bootstrap\nserver). In case the privateIp is provided, the subnetId must also be\nprovided. In case the privateIp (and the subnetId) is not provided it is\nassumed the datasource is publicly accessible. In case the connection is\naccessible only privately, the lack of privateIp will result in not being\nable to access the connection.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--kafka-connection-properties-bootstrap-servers=host=string,port=int,privateIpAddress=string --kafka-connection-properties-bootstrap-servers=host=string,port=int,privateIpAddress=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--kafka-connection-properties-bootstrap-servers=\'[{"host": "string", "port": int, "privateIpAddress": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--kafka-connection-properties-bootstrap-servers=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_BOOTSTRAP_SERVERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-cluster-id",
              description:
                "The OCID of the Kafka cluster being referenced from OCI Streaming with\nApache Kafka",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_CLUSTER_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-consumer-file",
              description:
                "The base64 encoded content of the consumer.properties file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_CONSUMER_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-key-store-file",
              description: "The base64 encoded content of the KeyStore file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-key-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-connection-properties-key-store-password-secret-version` on the command line",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-password",
              description:
                "The password for Kafka basic/SASL auth in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-connection-properties-password-secret-version` on the command line",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-producer-file",
              description:
                "The base64 encoded content of the producer.properties file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_PRODUCER_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-security-protocol",
              description:
                "Security Type for Kafka. _KAFKA_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*plaintext*::: Plaintext security protocol.\n*sasl-plaintext*::: SASL Plaintext security protocol.\n*sasl-ssl*::: SASL SSL security protocol.\n*ssl*::: SSL security protocol.\n:::\n+",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["plaintext", "sasl-plaintext", "sasl-ssl", "ssl"],
              },
            },
            {
              name: "--kafka-connection-properties-ssl-key-password",
              description:
                "The password for the cert inside of the KeyStore in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-ssl-key-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-connection-properties-ssl-key-password-secret-version` on the command line",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-stream-pool-id",
              description: "The OCID of the stream pool being referenced",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_STREAM_POOL_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-technology-type",
              description: "The technology type of KafkaConnection",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-trust-store-file",
              description: "The base64 encoded content of the TrustStore file",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-trust-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-connection-properties-trust-store-password-secret-version` on the command line",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a\nresource principal. Applicable only for OCI Streaming connections",
            },
            {
              name: "--kafka-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "KAFKA_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-authentication-type",
              description:
                "Used authentication mechanism to access Schema Registry. _KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*basic*::: Basic authentication.\n*mutual*::: Mutual authentication.\n*none*::: No authentication.\n:::\n+",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "mutual", "none"],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-key-store-file",
              description: "The base64 encoded content of the KeyStore file",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-key-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-schema-registry-connection-properties-key-store-password-secret-version` on the command line",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-password",
              description:
                "The password to access Schema Registry in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-schema-registry-connection-properties-password-secret-version` on the command line",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-ssl-key-password",
              description:
                "The password for the cert inside the KeyStore in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-ssl-key-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-schema-registry-connection-properties-ssl-key-password-secret-version` on the command line",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_SSL_KEY_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-technology-type",
              description:
                "The technology type of KafkaSchemaRegistryConnection",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-trust-store-file",
              description: "The base64 encoded content of the TrustStore file",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-trust-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--kafka-schema-registry-connection-properties-trust-store-password-secret-version` on the command line",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-url",
              description:
                "Kafka Schema Registry URL.\ne.g.: 'https://server1.us.oracle.com:8081'",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kafka-schema-registry-connection-properties-username",
              description:
                "The username to access Schema Registry using basic authentication.\nThis value is injected into\n'schema.registry.basic.auth.user.info=user:password' configuration\nproperty",
              args: {
                name: "KAFKA_SCHEMA_REGISTRY_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--labels",
              description:
                'The labels or tags associated with the GoldengateConnection.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [goldengate-connection-properties-deployment-id, goldengate_connection, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--microsoft-fabric-connection-properties-client-id",
              description: "Azure client ID of the application",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-client-secret",
              description: "Client secret associated with the client id",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-endpoint",
              description:
                "Optional Microsoft Fabric service endpoint.\nDefault value: https://onelake.dfs.fabric.microsoft.com",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-technology-type",
              description: "The technology type of MicrosoftFabricConnection",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-fabric-connection-properties-tenant-id",
              description: "Azure tenant ID of the application",
              args: {
                name: "MICROSOFT_FABRIC_CONNECTION_PROPERTIES_TENANT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-additional-attributes",
              description:
                'An array of name-value pair attribute entries.\nUsed as additional parameters in connection string.\n+\n*key*:::\nThe name of the property entry.\n+\n*value*:::\nThe value of the property entry.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--microsoft-sqlserver-connection-properties-additional-attributes=key=string,value=string --microsoft-sqlserver-connection-properties-additional-attributes=key=string,value=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--microsoft-sqlserver-connection-properties-additional-attributes=\'[{"key": "string", "value": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--microsoft-sqlserver-connection-properties-additional-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Microsoft SQL Server connection\nin plain text",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--microsoft-sqlserver-connection-properties-password-secret-version` on the command line",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-security-protocol",
              description:
                "Security Type for Microsoft SQL Server. _MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["plain", "tls"],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-server-certificate-validation-required",
              description:
                "If set to true, the driver validates the certificate that is sent by the\ndatabase server",
            },
            {
              name: "--microsoft-sqlserver-connection-properties-ssl-ca-file",
              description:
                "Database Certificate - The base64 encoded content of a .pem or .crt file\ncontaining the server public key (for 1-way SSL)",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_SSL_CA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-technology-type",
              description:
                "The technology type of MicrosoftSqlserverConnection",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--microsoft-sqlserver-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the Microsoft SQL\nServer",
              args: {
                name: "MICROSOFT_SQLSERVER_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-database-id",
              description: "The OCID of the Oracle Autonomous Json Database",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_DATABASE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect the Mongodb connection in\nplain text",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--mongodb-connection-properties-password-secret-version` on the command line",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-security-protocol",
              description:
                "Security Type for MongoDB. _MONGODB_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*mtls*::: Mutual Transport Layer Security.\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--mongodb-connection-properties-string",
              description:
                "MongoDB connection string.\ne.g.: 'mongodb://mongodb0.example.com:27017/recordsrecords'",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_STRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-technology-type",
              description: "The technology type of MongodbConnection",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-tls-ca-file",
              description:
                "Database Certificate - The base64 encoded content of a .pem file,\ncontaining the server public key (for 1 and 2-way SSL)",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-tls-certificate-key-file",
              description:
                "Client Certificate - The base64 encoded content of a .pem file, containing\nthe client public key (for 2-way SSL)",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CERTIFICATE_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-tls-certificate-key-file-password",
              description:
                "The Client Certificate key file password in plain text",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CERTIFICATE_KEY_FILE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-tls-certificate-key-file-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--mongodb-connection-properties-tls-certificate-key-file-password-secret-version` on the command line",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_TLS_CERTIFICATE_KEY_FILE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mongodb-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to the database",
              args: {
                name: "MONGODB_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-additional-attributes",
              description:
                'An array of name-value pair attribute entries.\nUsed as additional parameters in connection string.\n+\n*key*:::\nThe name of the property entry.\n+\n*value*:::\nThe value of the property entry.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--mysql-connection-properties-additional-attributes=key=string,value=string --mysql-connection-properties-additional-attributes=key=string,value=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--mysql-connection-properties-additional-attributes=\'[{"key": "string", "value": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--mysql-connection-properties-additional-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-db-system-id",
              description: "The OCID of the database system being referenced",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_DB_SYSTEM_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect to MySQL in plain text",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--mysql-connection-properties-password-secret-version` on the command line",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-security-protocol",
              description:
                "Security Type for MySQL. _MYSQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*mtls*::: Mutual Transport Layer Security.\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--mysql-connection-properties-ssl-ca-file",
              description:
                "Database Certificate - The base64 encoded content of a .pem or .crt file\ncontaining the server public key (for 1 and 2-way SSL)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_CA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-ssl-cert-file",
              description:
                "Client Certificate - The base64 encoded content of a .pem or .crt file\ncontaining the client public key (for 2-way SSL)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_CERT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-ssl-crl-file",
              description:
                "The base64 encoded list of certificates revoked by the trusted\ncertificate authorities (Trusted CA)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_CRL_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-ssl-key-file",
              description:
                "Client Key - The base64 encoded content of a .pem or .crt file containing\nthe client private key (for 2-way SSL)",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-ssl-mode",
              description:
                "SSL modes for MySQL. _MYSQL_CONNECTION_PROPERTIES_SSL_MODE_ must be one of:\n+\n*disabled*::: SSL is disabled.\n*preferred*::: SSL is preferred.\n*required*::: SSL is required.\n*verify-ca*::: SSL is required and certificate is verified.\n*verify-identity*::: SSL is required and certificate and hostname are verified.\n:::\n+",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_SSL_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "disabled",
                  "preferred",
                  "required",
                  "verify-ca",
                  "verify-identity",
                ],
              },
            },
            {
              name: "--mysql-connection-properties-technology-type",
              description: "The technology type of MysqlConnection",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "MYSQL_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-private-key-file",
              description:
                "The content of the private key file (PEM file)\ncorresponding to the API key of the fingerprint",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-private-key-passphrase-secret",
              description: "The passphrase of the private key",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-public-key-fingerprint",
              description:
                "The fingerprint of the API Key of the user specified by the userId",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_PUBLIC_KEY_FINGERPRINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-region",
              description:
                "The name of the region of OCI Object Storage. e.g.: us-ashburn-1\nIf the region is not provided, backend will default to the default region",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-technology-type",
              description: "The technology type of OciObjectStorageConnection",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-tenancy-id",
              description: "The OCID of the related OCI tenancy",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_TENANCY_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oci-object-storage-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a\nresource principal",
            },
            {
              name: "--oci-object-storage-connection-properties-user-id",
              description:
                "The OCID of the OCI user who will access the Object Storage.\nThe user must have write access to the bucket they want to connect to",
              args: {
                name: "OCI_OBJECT_STORAGE_CONNECTION_PROPERTIES_USER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag10661,
            flag10664,
            {
              name: "--oracle-ai-data-platform-connection-properties-private-key-file",
              description:
                "The content of the private key file (PEM file)\ncorresponding to the API key of the fingerprint",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-private-key-passphrase-secret",
              description: "The passphrase of the private key",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-public-key-fingerprint",
              description:
                "The fingerprint of the API Key of the user specified by the user_id",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_PUBLIC_KEY_FINGERPRINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-region",
              description: "The name of the region. e.g.: us-ashburn-1",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-technology-type",
              description:
                "The technology type of OracleAiDataPlatformConnection",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-tenancy-id",
              description: "The OCID of the related OCI tenancy",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_TENANCY_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-url",
              description: "Connection URL. It must start with 'jdbc:spark://'",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a\nresource principal",
            },
            {
              name: "--oracle-ai-data-platform-connection-properties-user-id",
              description: "The OCID of the OCI user who will access",
              args: {
                name: "ORACLE_AI_DATA_PLATFORM_CONNECTION_PROPERTIES_USER_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-authentication-mode",
              description:
                "Authentication mode. _ORACLE_CONNECTION_PROPERTIES_AUTHENTICATION_MODE_ must be one of:\n+\n*mtls*::: MTLS authentication mode.\n*tls*::: TLS authentication mode.\n:::\n+",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_AUTHENTICATION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mtls", "tls"],
              },
            },
            {
              name: "--oracle-connection-properties-gcp-database-id",
              description:
                "Autonomous AI Database instance id of database in Oracle Database @ Google\nCloud. If gcp_oracle_database_id is provided, connection_string must be\nempty. Format:\nprojects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_GCP_DATABASE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-password",
              description: "The password Oracle Goldengate uses in plain text",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--oracle-connection-properties-password-secret-version` on the command line",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-session-mode",
              description:
                "The mode of the database connection session to be established by the data\nclient. _ORACLE_CONNECTION_PROPERTIES_SESSION_MODE_ must be one of:\n+\n*direct*::: Indicates that the resource is using direct session mode.\n*redirect*::: Indicates that the resource is using redirect session mode.\n:::\n+",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_SESSION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["direct", "redirect"],
              },
            },
            {
              name: "--oracle-connection-properties-string",
              description:
                "Connect descriptor or Easy Connect Naming method used to connect to a\ndatabase",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_STRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-technology-type",
              description: "The technology type",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-username",
              description: "The username Oracle Goldengate uses to connect",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-connection-properties-wallet-file",
              description:
                "The wallet contents Oracle Goldengate uses to make connections to a\ndatabase. This attribute is expected to be base64 encoded",
              args: {
                name: "ORACLE_CONNECTION_PROPERTIES_WALLET_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-private-key-file",
              description:
                "The content of the private key file (PEM file)\ncorresponding to the API key of the fingerprint",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-private-key-passphrase-secret",
              description: "The passphrase of the private key",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-public-key-fingerprint",
              description:
                "The fingerprint of the API Key of the user specified by the userId",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_PUBLIC_KEY_FINGERPRINT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-region",
              description: "The name of the region. e.g.: us-ashburn-1",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-technology-type",
              description: "The technology type of OracleNosqlConnection",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-tenancy-id",
              description: "The OCID of the OCI tenancy",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_TENANCY_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-nosql-connection-properties-use-resource-principal",
              description:
                "Specifies that the user intends to authenticate to the instance using a\nresource principal",
            },
            {
              name: "--oracle-nosql-connection-properties-user-id",
              description:
                "The OCID of the OCI user who will access the Oracle NoSQL database",
              args: {
                name: "ORACLE_NOSQL_CONNECTION_PROPERTIES_USER_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-additional-attributes",
              description:
                'An array of name-value pair attribute entries.\nUsed as additional parameters in connection string.\n+\n*key*:::\nThe name of the property entry.\n+\n*value*:::\nThe value of the property entry.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--postgresql-connection-properties-additional-attributes=key=string,value=string --postgresql-connection-properties-additional-attributes=key=string,value=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--postgresql-connection-properties-additional-attributes=\'[{"key": "string", "value": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--postgresql-connection-properties-additional-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_ADDITIONAL_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-database",
              description: "The name of the database",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-db-system-id",
              description: "The OCID of the database system being referenced",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_DB_SYSTEM_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-host",
              description: "The name or address of a host",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_HOST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for PostgreSQL connection in plain\ntext",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--postgresql-connection-properties-password-secret-version` on the command line",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-port",
              description:
                "The port of an endpoint usually specified for a connection",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-security-protocol",
              description:
                "Security protocol for PostgreSQL. _POSTGRESQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*mtls*::: Mutual Transport Layer Security.\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-ca-file",
              description:
                "The base64 encoded certificate of the trusted certificate authorities\n(Trusted CA) for PostgreSQL",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_CA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-cert-file",
              description:
                "The base64 encoded certificate of the PostgreSQL server",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_CERT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-crl-file",
              description:
                "The base64 encoded list of certificates revoked by the trusted\ncertificate authorities (Trusted CA)",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_CRL_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-key-file",
              description:
                "The base64 encoded private key of the PostgreSQL server",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-ssl-mode",
              description:
                "SSL modes for PostgreSQL. _POSTGRESQL_CONNECTION_PROPERTIES_SSL_MODE_ must be one of:\n+\n*prefer*::: Prefer SSL.\n*require*::: Require SSL.\n*verify-ca*::: Verify Certificate Authority.\n*verify-full*::: Verify Full.\n:::\n+",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_SSL_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["prefer", "require", "verify-ca", "verify-full"],
              },
            },
            {
              name: "--postgresql-connection-properties-technology-type",
              description: "The technology type of PostgresqlConnection",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "POSTGRESQL_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--properties-connection-type",
              description:
                "The connection type. _PROPERTIES_CONNECTION_TYPE_ must be one of:\n+\n*amazon-kinesis*::: Amazon Kinesis connection type.\n*amazon-redshift*::: Amazon Redshift connection type.\n*amazon-s3*::: Amazon S3 connection type.\n*azure-data-lake-storage*::: Azure data lake storage connection type.\n*azure-synapse-analytics*::: Azure synapse analytics connection type.\n*databricks*::: Databricks connection type.\n*db2*::: DB2 connection type.\n*elasticsearch*::: Elasticsearch connection type.\n*generic*::: Generic connection type.\n*goldengate*::: Goldengate connection type.\n*google-bigquery*::: Google BigQuery connection type.\n*google-cloud-storage*::: Google Cloud Storage connection type.\n*google-pubsub*::: Google Pub/Sub connection type.\n*hdfs*::: HDFS connection type.\n*iceberg*::: Iceberg connection type.\n*java-message-service*::: Java message service connection type.\n*kafka*::: Kafka connection type.\n*kafka-schema-registry*::: Kafka schema registry connection type.\n*microsoft-fabric*::: Microsoft Fabric connection type.\n*microsoft-sqlserver*::: Microsoft SQL Server connection type.\n*mongodb*::: MongoDB connection type.\n*mysql*::: MySQL connection type.\n*oci-object-storage*::: OCI object storage connection type.\n*oracle*::: Oracle connection type.\n*oracle-ai-data-platform*::: Oracle AI data platform connection type.\n*oracle-nosql*::: Oracle NoSQL connection type.\n*postgresql*::: PostgreSQL connection type.\n*redis*::: Redis connection type.\n*snowflake*::: Snowflake connection type.\n:::\n+",
              args: {
                name: "PROPERTIES_CONNECTION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "amazon-kinesis",
                  "amazon-redshift",
                  "amazon-s3",
                  "azure-data-lake-storage",
                  "azure-synapse-analytics",
                  "databricks",
                  "db2",
                  "elasticsearch",
                  "generic",
                  "goldengate",
                  "google-bigquery",
                  "google-cloud-storage",
                  "google-pubsub",
                  "hdfs",
                  "iceberg",
                  "java-message-service",
                  "kafka",
                  "kafka-schema-registry",
                  "microsoft-fabric",
                  "microsoft-sqlserver",
                  "mongodb",
                  "mysql",
                  "oci-object-storage",
                  "oracle",
                  "oracle-ai-data-platform",
                  "oracle-nosql",
                  "postgresql",
                  "redis",
                  "snowflake",
                ],
              },
            },
            {
              name: "--properties-description",
              description: "Metadata about this specific object",
              args: {
                name: "PROPERTIES_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-display-name",
              description: "An object's Display Name",
              args: {
                name: "PROPERTIES_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-routing-method",
              description:
                "The routing method for the GoldengateConnection. _PROPERTIES_ROUTING_METHOD_ must be one of:\n+\n*dedicated-endpoint*::: A dedicated private endpoint is created in the target VCN subnet for\nthe connection.\n*shared-deployment-endpoint*::: Network traffic flows from the assigned deployment's private endpoint\nthrough the deployment's subnet.\n:::\n+",
              args: {
                name: "PROPERTIES_ROUTING_METHOD",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "dedicated-endpoint",
                  "shared-deployment-endpoint",
                ],
              },
            },
            flag11946,
            {
              name: "--redis-connection-properties-authentication-type",
              description:
                "Authentication type for Redis. _REDIS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*basic*::: Basic authentication.\n*none*::: No authentication.\n:::\n+",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "none"],
              },
            },
            {
              name: "--redis-connection-properties-cluster-id",
              description: "The OCID of the Redis cluster",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_CLUSTER_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-key-store-file",
              description: "The base64 encoded content of the KeyStore file",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_KEY_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-key-store-password",
              description: "The KeyStore password in plain text",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-key-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--redis-connection-properties-key-store-password-secret-version` on the command line",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_KEY_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-password",
              description:
                "The password Oracle Goldengate uses for Redis connection in plain text",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--redis-connection-properties-password-secret-version` on the command line",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-security-protocol",
              description:
                "Security protocol for Redis. _REDIS_CONNECTION_PROPERTIES_SECURITY_PROTOCOL_ must be one of:\n+\n*mtls*::: Mutual Transport Layer Security.\n*plain*::: Plain text communication.\n*tls*::: Transport Layer Security.\n:::\n+",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_SECURITY_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mtls", "plain", "tls"],
              },
            },
            {
              name: "--redis-connection-properties-servers",
              description:
                'Comma separated list of Redis server addresses, specified as host:port\nentries, where :port is optional. If port is not specified, it defaults\nto 6379. Example: "server1.example.com:6379,server2.example.com:6379"',
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_SERVERS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-technology-type",
              description: "The technology type of RedisConnection",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-trust-store-file",
              description: "The base64 encoded content of the TrustStore file",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TRUST_STORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-trust-store-password",
              description: "The TrustStore password in plain text",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-trust-store-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--redis-connection-properties-trust-store-password-secret-version` on the command line",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_TRUST_STORE_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--redis-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect the associated system of\nthe given technology",
              args: {
                name: "REDIS_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag12847,
            {
              name: "--secret",
              description:
                "For resources [amazon-redshift-connection-properties-password-secret-version, azure-synapse-analytics-connection-properties-password-secret-version, databricks-connection-properties-password-secret-version, db2-connection-properties-password-secret-version, elasticsearch-connection-properties-password-secret-version, goldengate-connection-properties-password-secret-version, java-message-service-connection-properties-key-store-password-secret-version, java-message-service-connection-properties-password-secret-version, java-message-service-connection-properties-ssl-key-password-secret-version, java-message-service-connection-properties-trust-store-password-secret-version, kafka-connection-properties-key-store-password-secret-version, kafka-connection-properties-password-secret-version, kafka-connection-properties-ssl-key-password-secret-version, kafka-connection-properties-trust-store-password-secret-version, kafka-schema-registry-connection-properties-key-store-password-secret-version, kafka-schema-registry-connection-properties-password-secret-version, kafka-schema-registry-connection-properties-ssl-key-password-secret-version, kafka-schema-registry-connection-properties-trust-store-password-secret-version, microsoft-sqlserver-connection-properties-password-secret-version, mongodb-connection-properties-password-secret-version, mongodb-connection-properties-tls-certificate-key-file-password-secret-version, mysql-connection-properties-password-secret-version, oracle-connection-properties-password-secret-version, postgresql-connection-properties-password-secret-version, redis-connection-properties-key-store-password-secret-version, redis-connection-properties-password-secret-version, redis-connection-properties-trust-store-password-secret-version, snowflake-connection-properties-password-secret-version], provides fallback value for resource secret attribute. When the resource's full URI path is not provided, secret will fallback to this flag value",
              args: { name: "SECRET", description: "String", suggestions: [] },
            },
            {
              name: "--snowflake-connection-properties-authentication-type",
              description:
                "Used authentication mechanism to access Snowflake. _SNOWFLAKE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE_ must be one of:\n+\n*basic*::: Basic authentication.\n*key-pair*::: Key pair authentication.\n:::\n+",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_AUTHENTICATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "key-pair"],
              },
            },
            {
              name: "--snowflake-connection-properties-password",
              description:
                "The password Oracle Goldengate uses to connect to Snowflake platform\nin plain text",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snowflake-connection-properties-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--snowflake-connection-properties-password-secret-version` on the command line",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snowflake-connection-properties-private-key-file",
              description: "The content of private key file in PEM format",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PRIVATE_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snowflake-connection-properties-private-key-passphrase-secret",
              description: "Password if the private key file is encrypted",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_PRIVATE_KEY_PASSPHRASE_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snowflake-connection-properties-technology-type",
              description: "The technology type of SnowflakeConnection",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_TECHNOLOGY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snowflake-connection-properties-url",
              description:
                "JDBC connection URL.\ne.g.:\n'jdbc:snowflake://<account_name>.snowflakecomputing.com/?warehouse=<warehouse-name>&db=<db-name>'",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snowflake-connection-properties-username",
              description:
                "The username Oracle Goldengate uses to connect to Snowflake",
              args: {
                name: "SNOWFLAKE_CONNECTION_PROPERTIES_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION",
            description:
              "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection.\n+\nTo set the `goldengate_connection` attribute:\n* provide the argument `goldengate_connection` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a GoldengateConnection",
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
            flag7251,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION",
            description:
              "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection.\n+\nTo set the `goldengate_connection` attribute:\n* provide the argument `goldengate_connection` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a GoldengateConnection",
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
            flag7251,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_CONNECTION",
            description:
              "ID of the goldengateConnection or fully qualified identifier for the goldengateConnection.\n+\nTo set the `goldengate_connection` attribute:\n* provide the argument `goldengate_connection` on the command line",
          },
        },
        {
          name: "list",
          description: "List all GoldengateConnections",
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
      name: "goldengate-deployment-environments",
      description: "Manage Goldengate Deployment Environment resources",
      subcommands: [
        {
          name: "list",
          description: "List all Goldengate deployment environments",
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
      name: "goldengate-deployment-types",
      description: "Manage Goldengate Deployment Type resources",
      subcommands: [
        {
          name: "list",
          description: "List all Goldengate deployment types",
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
      name: "goldengate-deployment-versions",
      description: "Manage Goldengate Deployment Version resources",
      subcommands: [
        {
          name: "list",
          description: "List all Goldengate deployment versions",
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
      name: "goldengate-deployments",
      description: "Manage Goldengate Deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new GoldengateDeployment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "The display name for the GoldengateDeployment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where Oracle GoldengateDeployment is hosted.\nExample: us-east4-b-r2.\nIf not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'The labels or tags associated with the GoldengateDeployment.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
                "For resources [goldengate_deployment, odb-network, odb-subnet], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--maintenance-config-bundle-release-upgrade-period-days",
              description:
                "Defines auto upgrade period for bundle releases. Manually configured period\ncannot be longer than service defined period for bundle releases. This\nperiod must be shorter or equal to major release upgrade period. Not\npassing this field during create will equate to using the service default",
              args: {
                name: "MAINTENANCE_CONFIG_BUNDLE_RELEASE_UPGRADE_PERIOD_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-config-interim-release-upgrade-period-days",
              description:
                "Defines auto upgrade period for interim releases. This period must be\nshorter or equal to bundle release upgrade period",
              args: {
                name: "MAINTENANCE_CONFIG_INTERIM_RELEASE_UPGRADE_PERIOD_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-config-is-interim-release-auto-upgrade-enabled",
              description:
                "By default auto upgrade for interim releases are not enabled. If\nauto-upgrade is enabled for interim release,  you have to specify\ninterim_release_upgrade_period_days too",
            },
            {
              name: "--maintenance-config-major-release-upgrade-period-days",
              description:
                "Defines auto upgrade period for major releases. Manually configured period\ncannot be longer than service defined period for major releases. Not\npassing this field during create will equate to using the service default",
              args: {
                name: "MAINTENANCE_CONFIG_MAJOR_RELEASE_UPGRADE_PERIOD_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-config-security-patch-upgrade-period-days",
              description:
                "Defines auto upgrade period for releases with security fix. Manually\nconfigured period cannot be longer than service defined period for security\nreleases. Not passing this field during create will equate to using the\nservice default",
              args: {
                name: "MAINTENANCE_CONFIG_SECURITY_PATCH_UPGRADE_PERIOD_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-day",
              description:
                "Days of the week. _MAINTENANCE_WINDOW_DAY_ must be one of:\n+\n*friday*::: Friday\n*monday*::: Monday\n*saturday*::: Saturday\n*sunday*::: Sunday\n*thursday*::: Thursday\n*tuesday*::: Tuesday\n*wednesday*::: Wednesday\n:::\n+",
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
            {
              name: "--maintenance-window-start-hour",
              description: "Start hour for maintenance period. Hour is in UTC",
              args: {
                name: "MAINTENANCE_WINDOW_START_HOUR",
                description: "Int",
                suggestions: [],
              },
            },
            flag10661,
            flag10664,
            {
              name: "--ogg-data-admin-password",
              description:
                "The Goldengate deployment console password in plain text",
              args: {
                name: "OGG_DATA_ADMIN_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--ogg-data-admin-password-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret-version` attribute:\n* provide the argument `--ogg-data-admin-password-secret-version` on the command line",
              args: {
                name: "OGG_DATA_ADMIN_PASSWORD_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--ogg-data-admin-username",
              description: "The Goldengate deployment console username",
              args: {
                name: "OGG_DATA_ADMIN_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--ogg-data-deployment",
              description:
                "The name given to the Goldengate service deployment. The name must be 1 to\n32 characters long, must contain only alphanumeric characters and must\nstart with a letter",
              args: {
                name: "OGG_DATA_DEPLOYMENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--ogg-data-version",
              description: "Version of OGG",
              args: {
                name: "OGG_DATA_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--properties-cpu-core-count",
              description:
                "The Minimum number of OCPUs to be made available for this Deployment",
              args: {
                name: "PROPERTIES_CPU_CORE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--properties-deployment-type",
              description:
                "A valid Goldengate Deployment type. For a list of supported types, use\nthe `ListGoldengateDeploymentTypes` operation",
              args: {
                name: "PROPERTIES_DEPLOYMENT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-description",
              description: "The description of the GoldengateDeployment",
              args: {
                name: "PROPERTIES_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-environment-type",
              description: "The environment type of the GoldengateDeployment",
              args: {
                name: "PROPERTIES_ENVIRONMENT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--properties-is-auto-scaling-enabled",
              description:
                "Indicates if auto scaling is enabled for the Deployment's CPU core count",
            },
            {
              name: "--properties-license-model",
              description:
                "The Oracle license model that applies to a Deployment. _PROPERTIES_LICENSE_MODEL_ must be one of:\n+\n*bring-your-own-license*::: The license model is bring your own license.\n*license-included*::: The license model is included.\n:::\n+",
              args: {
                name: "PROPERTIES_LICENSE_MODEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["bring-your-own-license", "license-included"],
              },
            },
            flag11946,
            flag12847,
            {
              name: "--secret",
              description:
                "The secret id of the secretVersion resource.\n+\nTo set the `secret` attribute:\n* provide the argument `--ogg-data-admin-password-secret-version` on the command line with a fully specified name;\n* provide the argument `--secret` on the command line",
              args: { name: "SECRET", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate_deployment` attribute:\n* provide the argument `goldengate_deployment` on the command line",
          },
        },
        {
          name: "delete",
          description:
            "Delete a GoldengateDeployment. This also deletes any associated Assignments",
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
            flag7253,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate_deployment` attribute:\n* provide the argument `goldengate_deployment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a GoldengateDeployment",
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
            flag7253,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate_deployment` attribute:\n* provide the argument `goldengate_deployment` on the command line",
          },
        },
        {
          name: "list",
          description: "List all GoldengateDeployments",
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
          name: "start",
          description: "Start a GoldengateDeployment",
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
            flag7253,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate_deployment` attribute:\n* provide the argument `goldengate_deployment` on the command line",
          },
        },
        {
          name: "stop",
          description: "Stop a GoldengateDeployment",
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
            flag7253,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOLDENGATE_DEPLOYMENT",
            description:
              "ID of the goldengateDeployment or fully qualified identifier for the goldengateDeployment.\n+\nTo set the `goldengate_deployment` attribute:\n* provide the argument `goldengate_deployment` on the command line",
          },
        },
      ],
    },
    {
      name: "odb-networks",
      description: "Manage Odb Network resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new OdbNetwork",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-oracle-zone",
              description:
                "The GCP Oracle zone where OdbNetwork is hosted.\nExample: us-east4-b-r2.\nIf not specified, the system will pick a zone based on availability",
              args: {
                name: "GCP_ORACLE_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag6393,
            flag6976,
            flag7356,
            flag8238,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ODB_NETWORK",
            description:
              "ID of the odbNetwork or fully qualified identifier for the odbNetwork.\n+\nTo set the `odb_network` attribute:\n* provide the argument `odb_network` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an OdbNetwork",
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
            flag6976,
            flag7356,
            flag11637,
            flag11946,
            flag12835,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ODB_NETWORK",
            description:
              "ID of the odbNetwork or fully qualified identifier for the odbNetwork.\n+\nTo set the `odb_network` attribute:\n* provide the argument `odb_network` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of an OdbNetwork",
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
            flag6976,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ODB_NETWORK",
            description:
              "ID of the odbNetwork or fully qualified identifier for the odbNetwork.\n+\nTo set the `odb_network` attribute:\n* provide the argument `odb_network` on the command line",
          },
        },
        {
          name: "list",
          description: "List all OdbNetworks",
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
          name: "odb-subnets",
          description: "Manage Odb Subnet resources",
          subcommands: [
            {
              name: "create",
              description: "Create a new OdbSubnet",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--cidr-range",
                  description: "The CIDR range of the subnet",
                  args: {
                    name: "CIDR_RANGE",
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
                flag6393,
                flag7265,
                flag7356,
                flag10663,
                flag11637,
                {
                  name: "--purpose",
                  description:
                    "Purpose of the subnet. _PURPOSE_ must be one of:\n+\n*backup-subnet*::: Subnet to be used for backup.\n*client-subnet*::: Subnet to be used for client connections.\n:::\n+",
                  args: {
                    name: "PURPOSE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["backup-subnet", "client-subnet"],
                  },
                },
                flag11946,
                flag12835,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ODB_SUBNET",
                description:
                  "ID of the odbSubnet or fully qualified identifier for the odbSubnet.\n+\nTo set the `odb_subnet` attribute:\n* provide the argument `odb_subnet` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an OdbSubnet",
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
                flag7265,
                flag7356,
                flag10663,
                flag11637,
                flag11946,
                flag12835,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ODB_SUBNET",
                description:
                  "ID of the odbSubnet or fully qualified identifier for the odbSubnet.\n+\nTo set the `odb_subnet` attribute:\n* provide the argument `odb_subnet` on the command line",
              },
            },
            {
              name: "describe",
              description: "Get details of an OdbSubnet",
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
                flag7265,
                flag7356,
                flag10663,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ODB_SUBNET",
                description:
                  "ID of the odbSubnet or fully qualified identifier for the odbSubnet.\n+\nTo set the `odb_subnet` attribute:\n* provide the argument `odb_subnet` on the command line",
              },
            },
            {
              name: "list",
              description: "List all OdbSubnets",
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
                    "The location id of the odbNetwork resource.\n+\nTo set the `location` attribute:\n* provide the argument `--odb-network` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--odb-network",
                  description:
                    "ID of the odbNetwork or fully qualified identifier for the odbNetwork.\n+\nTo set the `odb-network` attribute:\n* provide the argument `--odb-network` on the command line",
                  args: {
                    name: "ODB_NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
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
    },
    {
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel operations",
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
            flag7266,
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
          description: "Delete operations",
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
            flag7266,
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
          description: "Describe operations",
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
            flag7266,
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
          description: "List operations",
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
          name: "wait",
          description: "Wait operations",
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
            flag7266,
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
      ],
    },
    {
      name: "pluggable-databases",
      description: "Manage Pluggable Database resources",
      subcommands: [
        {
          name: "describe",
          description: "Get details of a PluggableDatabase",
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
                "The location id of the pluggableDatabase resource.\n+\nTo set the `location` attribute:\n* provide the argument `pluggable_database` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "PLUGGABLE_DATABASE",
            description:
              "ID of the pluggableDatabase or fully qualified identifier for the pluggableDatabase.\n+\nTo set the `pluggable_database` attribute:\n* provide the argument `pluggable_database` on the command line",
          },
        },
        {
          name: "list",
          description: "List pluggable databases",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--filter",
              description:
                "Apply a filter in the format:\n--filter='database=\"projects/my-project/locations/us-east4/databases/my-instance\"'",
              args: {
                name: "EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
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
  ],
};

export default completionSpec;
