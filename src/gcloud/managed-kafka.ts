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
const flag60: Fig.Option = {
  name: "--acl-entries-from-file",
  description:
    "Path to a JSON or YAML file containing the acl entries to use in the acl. Use a full or relative path to a local file containing the value of acl_entries",
  args: {
    name: "ACL_ENTRIES_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag61: Fig.Option = {
  name: "--acl-entry",
  description:
    'An acl entry that configures access for a principal, for a specific operation on the acl\'s\nresource pattern. This flag can be repeated.\n+\n``PRINCIPAL\'\' is the principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix\n"User:". For example: "User:admin@project.iam.gserviceaccount.com".\nCan be the wildcard "User:```*```" to refer to all users.\n+\n``OPERATION\'\' is the operation type. Allowed values are: ALL, READ, WRITE,\nCREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS,\nIDEMPOTENT_WRITE.\n+\n``PERMISSION-TYPE\'\' is the permission type. Allowed values are: ALLOW, DENY.\n+\n``HOST\'\' is the host. Must be set to "```*```" for Managed Service for Apache Kafka.\n+\nExample acl-entry:\n  "principal=User:admin@project.iam.gserviceaccount.com,operation=ALL,permission-type=ALLOW,host=```*```"',
  args: {
    name: "ACL_ENTRY",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
};
const flag309: Fig.Option = {
  name: "--additional-subnet",
  description:
    "(DEPRECATED) Additional subnet to make available to the Kafka Connect cluster. Structured\nlike: projects/{project}/regions/{region}/subnetworks/{subnet_id}.\n+\nThe --additional-subnet flag is deprecated and will be removed in a future version. Managed Kafka Connect clusters can now reach any endpoint accessible from the primary subnet without the need to define additional subnets. Please see https://cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/create-connect-cluster#worker-subnet for more information",
  args: { name: "ADDITIONAL_SUBNET", description: "String", suggestions: [] },
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
const flag1561: Fig.Option = {
  name: "--clear-configs",
  description: "Remove all the configurations for the topic",
};
const flag2083: Fig.Option = {
  name: "--cluster",
  description:
    "The cluster name.\n+\n\nTo set the `cluster` attribute:\n* provide the argument `acl` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2084: Fig.Option = {
  name: "--cluster",
  description:
    "The cluster name.\n+\n\nTo set the `cluster` attribute:\n* provide the argument `consumer_group` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2085: Fig.Option = {
  name: "--cluster",
  description:
    "The cluster name.\n+\n\nTo set the `cluster` attribute:\n* provide the argument `topic` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2252: Fig.Option = {
  name: "--config-file",
  description:
    "The path to the JSON or YAML file containing the configuration that are overridden\nfrom the cluster or connector defaults. This also supports inline JSON or YAML. Sets `config_file` value.\n+\n:::\n*Input Example:*\n+\n```\n+\n--config-file=string\n+\n```\n+\n*File Example:*\n+\n```\n+\n--config-file=path_to_file.(yaml|json)\n+\n```",
  args: { name: "JSON|YAML|FILE", description: "Dict", suggestions: [] },
};
const flag2253: Fig.Option = {
  name: "--config-file",
  description:
    "The path to the JSON or YAML file containing the configuration that are overridden\nfrom the connector defaults. This also supports inline JSON or YAML. Sets `config_file` value.\n+\n:::\n*Input Example:*\n+\n```\n+\n--config-file=string\n+\n```\n+\n*File Example:*\n+\n```\n+\n--config-file=path_to_file.(yaml|json)\n+\n```",
  args: { name: "JSON|YAML|FILE", description: "Dict", suggestions: [] },
};
const flag2289: Fig.Option = {
  name: "--configs",
  description:
    "Configuration for the connect cluster that are overridden from the cluster defaults.\nThe key of the map is a Kafka topic property name, for example:\n`cleanup.policy=compact`,`compression.type=producer`",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2290: Fig.Option = {
  name: "--configs",
  description:
    "Configuration for the connector that are overridden from the connector defaults.\nThe key of the map is a Kafka topic property name, for example:\n`cleanup.policy=compact`,`compression.type=producer`",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2291: Fig.Option = {
  name: "--configs",
  description:
    "Configuration for the topic that are overridden from the cluster defaults.\nThe key of the map is a Kafka topic property name, for example:\n`cleanup.policy=compact`,`compression.type=producer`. If you provide a map with a key that\nalready exists, only that configuration is updated. If the map contains a key that does not\nexist, the entry is appended to the topic configuration",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2300: Fig.Option = {
  name: "--connect-cluster",
  description:
    "The connect cluster name.\n+\n\nTo set the `connect-cluster` attribute:\n* provide the argument `connector` on the command line with a fully specified name;\n* provide the argument `--connect-cluster` on the command line",
  args: { name: "CONNECT_CLUSTER", description: "String", suggestions: [] },
};
const flag2516: Fig.Option = {
  name: "--cpu",
  description:
    "The number of vCPUs to provision for the cluster. The minimum is 3",
  args: { name: "CPU", description: "Int", suggestions: [] },
};
const flag2517: Fig.Option = {
  name: "--cpu",
  description:
    "The number of vCPUs to provision for the cluster. The minimum is 3",
  args: { name: "CPU", description: "Int", suggestions: [] },
};
const flag3848: Fig.Option = {
  name: "--dns-name",
  description:
    "DNS domain name from the subnet's network to be made visible to the Connect Cluster",
  args: { name: "DNS_NAME", description: "String", suggestions: [] },
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
const flag5480: Fig.Option = {
  name: "--host",
  description:
    'The host. Must be set to "```*```" for Managed Service for Apache Kafka',
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
const flag6415: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\nKeys must start with a lowercase character and contain only hyphens (`-`),\nunderscores (```_```), lowercase characters, and numbers. Values must contain only\nhyphens (`-`), underscores (```_```), lowercase characters, and numbers",
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
const flag6679: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `acl` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6680: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6681: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `connect_cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6682: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `connector` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6683: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `consumer_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6685: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `topic` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7770: Fig.Option = {
  name: "--memory",
  description:
    "The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB\nper vCPU.\nEx. 1024Mi, 4Gi",
  args: {
    name: "MEMORY",
    description: "Googlecloudsdk.core.util.scaled_integer:ParseInteger",
    suggestions: [],
  },
};
const flag7771: Fig.Option = {
  name: "--memory",
  description:
    "The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB\nper vCPU.\nEx. 1024Mi, 4Gi",
  args: {
    name: "MEMORY",
    description: "Googlecloudsdk.core.util.scaled_integer:ParseInteger",
    suggestions: [],
  },
};
const flag8024: Fig.Option = {
  name: "--mtls-ca-pools",
  description:
    "A comma-separated list of CA pools from the Google Cloud Certificate Authority Service.\nThe root certificates of these CA pools will be installed in the truststore of each broker\nin the cluster for use with mTLS. A maximum of 10 CA pools can be specified.\nCA pools can be in a different project and region than the cluster.\nThis command overwrites the entire set of pools currently configured on the cluster.\nIf you want to add a new pool to an existing configuration, you must provide the full list of\nboth the old and new CA pools in the command.\nEach CA pool must be in the format\nprojects/``PROJECT_ID''/locations/``LOCATION''/caPools/``CA_POOL''. Clear the CA pools\nusing the `--clear-mtls-ca-pools` flag",
  args: { name: "MTLS_CA_POOLS", description: "List", suggestions: [] },
};
const flag10711: Fig.Option = {
  name: "--operation",
  description:
    "The operation type. Allowed values are: ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE,\nCLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, IDEMPOTENT_WRITE.\n+\nSee https://kafka.apache.org/documentation/#operations_resources_and_protocols\nfor the mapping of operations to Kafka protocols",
  args: { name: "OPERATION", description: "String", suggestions: [] },
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
const flag11269: Fig.Option = {
  name: "--permission-type",
  description: "The permission type. Allowed values are: ALLOW, DENY",
  args: { name: "PERMISSION_TYPE", description: "String", suggestions: [] },
};
const flag11547: Fig.Option = {
  name: "--primary-subnet",
  description:
    "VPC subnet to make available to the Kafka Connect cluster. Structured\nlike: projects/{project}/regions/{region}/subnetworks/{subnet_id}.\nThe primary subnet is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers.\nIt must be located in the same region as the Connect cluster",
  args: { name: "PRIMARY_SUBNET", description: "String", suggestions: [] },
};
const flag11552: Fig.Option = {
  name: "--principal",
  description:
    'The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix\n"User:". For example: "User:admin@project.iam.gserviceaccount.com".\nCan be the wildcard "User:```*```" to refer to all users',
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
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
const flag13416: Fig.Option = {
  name: "--secret",
  description:
    "Secrets to load into workers. Exact SecretVersions from Secret Manager must\nbe provided -- aliases are not supported. Up to 32 secrets may be loaded\ninto one cluster.\nFormat: projects/<project-id>/secrets/<secret-name>/versions/<version-id>",
  args: { name: "SECRET", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14318: Fig.Option = {
  name: "--ssl-principal-mapping-rules",
  description:
    'The rules for mapping mTLS certificate Distinguished Names (DNs) to shortened principal names\nfor Kafka ACLs. This flag corresponds exactly to the `ssl.principal.mapping.rules` broker config\nand matches the format and syntax defined in the Apache Kafka documentation.\nSetting or modifying this field will trigger a rolling restart of the Kafka brokers\nto apply the change. An empty string means that the default Kafka behavior is used.\nExample: "RULE:^CN=(.*?),OU=ServiceUsers.*$/$1@example.com/,DEFAULT"',
  args: {
    name: "SSL_PRINCIPAL_MAPPING_RULES",
    description: "String",
    suggestions: [],
  },
};
const flag14776: Fig.Option = {
  name: "--task-restart-max-backoff",
  description:
    "The maximum amount of time to wait before retrying a failed task in seconds.\nThis sets an upper bound for the backoff delay. The default value is 1800s (30 minutes).\nSee $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "TASK_RESTART_MAX_BACKOFF",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag14777: Fig.Option = {
  name: "--task-restart-min-backoff",
  description:
    "The minimum amount of time to wait before retrying a failed task in seconds.\nThis sets a lower bound for the backoff delay. The default value is 60s.\nSee $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "TASK_RESTART_MIN_BACKOFF",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag14778: Fig.Option = {
  name: "--task-retry-disabled",
  description: "Disable default task retry policy",
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
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
  name: "managed-kafka",
  description:
    "Administer Managed Service for Apache Kafka clusters, topics, and consumer groups",
  subcommands: [
    {
      name: "acls",
      description: "Administer Managed Service for Apache Kafka acls",
      subcommands: [
        {
          name: "add-acl-entry",
          description:
            "Add an acl entry to a Managed Service for Apache Kafka acl",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2083,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5480,
            flag5699,
            flag6679,
            flag7356,
            flag10711,
            flag11269,
            flag11552,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl.\n+\nTo set the `acl` attribute:\n* provide the argument `acl` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka acl",
          options: [
            flag42,
            flag46,
            flag60,
            flag61,
            flag1201,
            flag2083,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6679,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl.\n+\nTo set the `acl` attribute:\n* provide the argument `acl` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka ACL",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2083,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6679,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl.\n+\nTo set the `acl` attribute:\n* provide the argument `acl` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka acl",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2083,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6679,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl.\n+\nTo set the `acl` attribute:\n* provide the argument `acl` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka acls in a given cluster",
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
            flag6680,
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
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "remove-acl-entry",
          description:
            "Remove an acl entry from a Managed Service for Apache Kafka acl",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2083,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5480,
            flag5699,
            flag6679,
            flag7356,
            flag10711,
            flag11269,
            flag11552,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl.\n+\nTo set the `acl` attribute:\n* provide the argument `acl` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka acl",
          options: [
            flag42,
            flag46,
            flag60,
            flag61,
            flag1201,
            flag2083,
            flag2292,
            {
              name: "--etag",
              description:
                "etag returned in the response to a previous create or describe\ncommand. The etag is used for concurrency control, to ensure that the\nclient and server agree on the current set of acl entries in the Kafka\ncluster, before full replacement in the update command",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6679,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACL",
            description:
              "ID of the acl or fully qualified identifier for the acl.\n+\nTo set the `acl` attribute:\n* provide the argument `acl` on the command line",
          },
        },
      ],
    },
    {
      name: "clusters",
      description: "Administer Managed Service for Apache Kafka clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka cluster",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--auto-rebalance",
              description:
                "Whether the automatic rebalancing is enabled. If automatic rebalancing\nis enabled, topic partitions are rebalanced among brokers when the number of\nCPUs in the cluster changes. Automatic rebalancing is enabled by default.\nUse --no-auto-rebalance to disable this flag. Enabled by default, use *--no-auto-rebalance* to disable",
            },
            flag1201,
            flag2292,
            flag2517,
            {
              name: "--encryption-key",
              description:
                "The relative resource path of the Cloud KMS key to use for encryption in the form:\nprojects/``PROJECT_ID''/locations/``LOCATION''/keyRings/``KEY_RING''/cryptoKeys/``KEY''.\nThe key must be located in the same region as the cluster. The key cannot be changed once set",
              args: {
                name: "ENCRYPTION_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6415,
            flag6680,
            flag7356,
            flag7771,
            flag8024,
            flag11637,
            flag11946,
            flag14318,
            {
              name: "--subnets",
              description:
                "A comma-separated list of VPC subnets from which the cluster is accessible. Both broker and bootstrap server\nIP addresses and DNS entries are automatically created in each subnet. Only one subnet per\nnetwork is allowed, and the subnet must be located in the same region as the cluster.\nThe project may differ. A minimum of 1 subnet is required. A maximum of 10 subnets can be\nspecified. Use commas to separate multiple subnets. The name of the subnet must be in the format\nprojects/``PROJECT_ID''/regions/``REGION''/subnetworks/``SUBNET''",
              args: { name: "SUBNETS", description: "List", suggestions: [] },
            },
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
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka cluster",
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
            flag6680,
            flag7356,
            flag11637,
            flag11946,
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
          description: "Describe a Managed Service for Apache Kafka cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--full",
              description:
                "Show detailed information about individual brokers, such as broker id and zone, as well as the\nKafka version running on the cluster",
            },
            flag5453,
            flag5699,
            flag6680,
            flag7356,
            flag11637,
            flag11946,
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
          name: "list",
          description:
            "List all Managed Service for Apache Kafka clusters in a given location",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka cluster",
          options: [
            flag42,
            flag46,
            {
              name: "--allow-broker-downscale-on-cluster-upscale",
              description:
                "If enabled, this setting allows an update operation that could significantly decrease the\nper-broker vCPU and/or memory allocation, which can lead to reduced performance and\navailability. By default, an update operation will fail if it results in a reduction of 10% or\nmore to the brokers' vCPU or memory allocation",
            },
            flag720,
            {
              name: "--auto-rebalance",
              description:
                "Whether the automatic rebalancing is enabled. If automatic rebalancing\nis enabled, topic partitions are rebalanced among brokers when the number of\nCPUs in the cluster changes. Automatic rebalancing is enabled by default.\nUse --no-auto-rebalance to disable this flag",
            },
            flag1201,
            {
              name: "--clear-mtls-ca-pools",
              description:
                "Remove all the CA pools from the cluster. This will remove all root certificates\nfrom the truststore of each broker in the cluster",
            },
            flag2292,
            flag2516,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6415,
            flag6680,
            flag7356,
            flag7770,
            flag8024,
            flag11637,
            flag11946,
            flag14318,
            {
              name: "--subnets",
              description:
                "A comma-separated list of VPC subnets from which the cluster is accessible. Both broker and bootstrap server\nIP addresses and DNS entries are automatically created in each subnet. Only one subnet per\nnetwork is allowed, and the subnet must be located in the same region as the cluster.\nThe project may differ. A minimum of 1 subnet is required. A maximum of 10 subnets can be\nspecified. Use commas to separate multiple subnets. The name of the subnet must be in the format\nprojects/``PROJECT_ID''/regions/``REGION''/subnetworks/``SUBNET''",
              args: { name: "SUBNETS", description: "List", suggestions: [] },
            },
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
      ],
    },
    {
      name: "connect-clusters",
      description:
        "Administer Managed Service for Apache Kafka connect-clusters",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Managed Service for Apache Kafka connect cluster",
          options: [
            flag42,
            flag46,
            flag309,
            flag720,
            flag1201,
            flag2252,
            flag2289,
            flag2292,
            flag2517,
            flag3848,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kafka-cluster",
              description:
                "The resource path of the Kafka cluster to connect to, or the name of the Kafka cluster to\nconnect to if the cluster is in the same project as the Connect cluster",
              args: {
                name: "KAFKA_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            flag6415,
            flag6681,
            flag7356,
            flag7771,
            flag11547,
            flag11637,
            flag11946,
            flag13416,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster.\n+\nTo set the `connect_cluster` attribute:\n* provide the argument `connect_cluster` on the command line",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Managed Service for Apache Kafka connect cluster",
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
            flag6681,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster.\n+\nTo set the `connect_cluster` attribute:\n* provide the argument `connect_cluster` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Managed Service for Apache Kafka connect cluster",
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
            flag6681,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster.\n+\nTo set the `connect_cluster` attribute:\n* provide the argument `connect_cluster` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka connect clusters in a given location",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description:
            "Update a Managed Service for Apache Kafka for BigQuery connect cluster",
          options: [
            flag42,
            flag46,
            flag309,
            flag720,
            flag1201,
            flag1561,
            {
              name: "--clear-dns-names",
              description:
                "Remove all the DNS domain names for the connect cluster",
            },
            {
              name: "--clear-labels",
              description: "Remove all the labels from the connect cluster",
            },
            {
              name: "--clear-secrets",
              description: "Remove all the secrets from the connect cluster",
            },
            flag2252,
            flag2289,
            flag2292,
            flag2516,
            flag3848,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6415,
            flag6681,
            flag7356,
            flag7770,
            flag11547,
            flag11637,
            flag11946,
            flag13416,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster.\n+\nTo set the `connect_cluster` attribute:\n* provide the argument `connect_cluster` on the command line",
          },
        },
      ],
    },
    {
      name: "connectors",
      description: "Administer Managed Service for Apache Kafka connectors",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2253,
            flag2290,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14776,
            flag14777,
            flag14778,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka connectors for a given connect cluster",
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
            flag6681,
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
            name: "CONNECT_CLUSTER",
            description:
              "ID of the connect_cluster or fully qualified identifier for the connect_cluster.\n+\nTo set the `connect_cluster` attribute:\n* provide the argument `connect_cluster` on the command line",
          },
        },
        {
          name: "pause",
          description:
            "Pauses operation of a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "restart",
          description: "Restarts a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "resume",
          description:
            "Resumes operation of a stopped Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "stop",
          description:
            "Stops operation of a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka connector",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2253,
            flag2290,
            flag2292,
            flag2300,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6682,
            flag7356,
            flag11637,
            flag11946,
            flag14776,
            flag14777,
            flag14778,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTOR",
            description:
              "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `connector` on the command line",
          },
        },
      ],
    },
    {
      name: "consumer-groups",
      description:
        "Administer Managed Service for Apache Kafka consumer groups",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a Managed Service for Apache Kafka consumer group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2084,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6683,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSUMER_GROUP",
            description:
              "ID of the consumer_group or fully qualified identifier for the consumer_group.\n+\nTo set the `consumer_group` attribute:\n* provide the argument `consumer_group` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Managed Service for Apache Kafka consumer group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2084,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6683,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSUMER_GROUP",
            description:
              "ID of the consumer_group or fully qualified identifier for the consumer_group.\n+\nTo set the `consumer_group` attribute:\n* provide the argument `consumer_group` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka consumer groups in a given cluster and location",
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
            flag6680,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--view",
              description:
                "The level of detail to return for consumer groups. _VIEW_ must be one of:\n+\n*basic*::: Include only the names of consumer groups.\n*full*::: Include all available fields (topics, partitions).\n:::\n+",
              args: {
                name: "VIEW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: {
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "update",
          description:
            "Update a Managed Service for Apache Kafka consumer group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2084,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6683,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--topics-file",
              description:
                "The path to the JSON or YAML file containing the configuration of the topics to be updated for\nthe consumer group. This also supports inline JSON or YAML. Required, sets `topics_file` value.\n+\n:::\n*Input Example:*\n+\n```\n+\n--topics-file=string\n+\n```\n+\n*File Example:*\n+\n```\n+\n--topics-file=path_to_file.(yaml|json)\n+\n```",
              args: {
                name: "JSON|YAML|FILE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSUMER_GROUP",
            description:
              "ID of the consumer_group or fully qualified identifier for the consumer_group.\n+\nTo set the `consumer_group` attribute:\n* provide the argument `consumer_group` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "View Managed Service for Apache Kafka operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka operation",
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
                "ID of the location of the Managed Service for Apache Kafka resource. See\nhttps://cloud.google.com/managed-service-for-apache-kafka/docs/locations for a list of supported\nlocations.\n+\n\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka operations in a given location",
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
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "topics",
      description: "Administer Managed Service for Apache Kafka topics",
      subcommands: [
        {
          name: "create",
          description: "Create a Managed Service for Apache Kafka topic",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2085,
            flag2291,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6685,
            flag7356,
            {
              name: "--partitions",
              description:
                "The number of partitions in a topic. You can increase the partition count for a topic, but you\ncannot decrease it. Increasing partitions for a topic that uses a key might change how messages\nare distributed",
              args: { name: "PARTITIONS", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--replication-factor",
              description:
                "The number of replicas of each partition. A replication factor of 3 is\nrecommended for high availability",
              args: {
                name: "REPLICATION_FACTOR",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Managed Service for Apache Kafka topic",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2085,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6685,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Service for Apache Kafka topic",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2085,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6685,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Service for Apache Kafka topics in a given cluster",
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
            flag6680,
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
            name: "CLUSTER",
            description:
              "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Managed Service for Apache Kafka topic",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1561,
            flag2085,
            flag2291,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6685,
            flag7356,
            {
              name: "--partitions",
              description:
                "The number of partitions in a topic. You can increase the partition count for a topic, but you\ncannot decrease it. Increasing partitions for a topic that uses a key might change how messages\nare distributed",
              args: { name: "PARTITIONS", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
