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
const flag1013: Fig.Option = {
  name: "--backfill-all",
  description:
    "Automatically backfill objects included in the stream source\n      configuration. Specific objects can be excluded. This flag is equivalent\n      to selecting the Automatic backfill type in the Google Cloud console",
};
const flag1014: Fig.Option = {
  name: "--backfill-none",
  description:
    "Do not automatically backfill any objects. This flag is equivalent\n      to selecting the Manual backfill type in the Google Cloud console",
};
const flag1138: Fig.Option = {
  name: "--bigquery-destination-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for Google BigQuery Destination Config.\n+\nThe YAML (or JSON) file should be formatted as follows:\n+\nBigQuery configuration with source hierarchy datasets and merge mode (merge mode is by default):\n+\n```\n{\n  "sourceHierarchyDatasets": {\n    "datasetTemplate": {\n      "location": "us-central1",\n      "datasetIdPrefix": "my_prefix",\n      "kmsKeyName": "projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}"\n    }\n  },\n  "merge": {}\n  "dataFreshness": "3600s"\n}\n```\n+\nBigQuery configuration with source hierarchy datasets and append only mode:\n```\n{\n  "sourceHierarchyDatasets": {\n    "datasetTemplate": {\n      "location": "us-central1",\n      "datasetIdPrefix": "my_prefix",\n      "kmsKeyName": "projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}"\n    }\n  },\n  "appendOnly": {}\n}\n```\n+\nBigQuery configuration with single target dataset and merge mode:\n+\n```\n{\n  "singleTargetDataset": {\n    "datasetId": "projectId:my_dataset"\n  },\n  "merge": {}\n  "dataFreshness": "3600s"\n}\n```\n+\nBigQuery configuration with Big Lake table configuration:\n```\n{\n  "singleTargetDataset": {\n    "datasetId": "projectId:datasetId"\n  },\n  "appendOnly": {},\n  "blmtConfig": {\n    "bucket": "bucketName",\n    "tableFormat": "ICEBERG",\n    "fileFormat": "PARQUET",\n    "connectionName": "projectId.region.connectionName",\n    "rootPath": "/root"\n  }\n}\n```',
  args: {
    name: "BIGQUERY_DESTINATION_CONFIG",
    description: "String",
    suggestions: [],
  },
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
const flag2845: Fig.Option = {
  name: "--dataverse-oauth-client-secret",
  description: "OAuth 2.0 Client secret used to connect to Dataverse",
  args: {
    name: "DATAVERSE_OAUTH_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag2846: Fig.Option = {
  name: "--dataverse-prompt-for-oauth-client-secret",
  description:
    "Prompt for the OAuth 2.0 Client secret used to connect to Dataverse",
};
const flag2847: Fig.Option = {
  name: "--dataverse-secret-manager-stored-oauth-client-secret",
  description:
    "Path to secret manager, storing the OAuth 2.0 Client secret used to connect to Dataverse",
  args: {
    name: "DATAVERSE_SECRET_MANAGER_STORED_OAUTH_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag2848: Fig.Option = {
  name: "--dataverse-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for Dataverse Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "pollingInterval": "300s",\n    "includeObjects": {},\n    "excludeObjects": {\n      "objects": [\n        {\n          "objectName": "Account",\n          "properties": [\n            {\n              "propertyName": "name",\n            }\n          ]\n        }\n      ]\n    }\n  }\n```',
  args: {
    name: "DATAVERSE_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag3458: Fig.Option = {
  name: "--destination",
  description:
    "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--destination` on the command line",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
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
const flag5161: Fig.Option = {
  name: "--gcs-destination-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for Google Cloud Storage Destination Config.\n+\nThe JSON file is formatted as follows:\n+\n```\n {\n "path": "some/path",\n "fileRotationMb":5,\n "fileRotationInterval":"15s",\n "avroFileFormat": {}\n }\n```',
  args: {
    name: "GCS_DESTINATION_CONFIG",
    description: "String",
    suggestions: [],
  },
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
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6853: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the connection_profile.\n+\nTo set the `location` attribute:\n* provide the argument `connection_profile` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6865: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the stream.\n+\nTo set the `location` attribute:\n* provide the argument `--stream` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6866: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the stream.\n+\nTo set the `location` attribute:\n* provide the argument `stream` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7297: Fig.Option = {
  name: "--location",
  description:
    "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `connection_profile` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7298: Fig.Option = {
  name: "--location",
  description:
    "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `object` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7299: Fig.Option = {
  name: "--location",
  description:
    "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7300: Fig.Option = {
  name: "--location",
  description:
    "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `private_connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7301: Fig.Option = {
  name: "--location",
  description:
    "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `route` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7302: Fig.Option = {
  name: "--location",
  description:
    "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `stream` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7980: Fig.Option = {
  name: "--mongodb-additional-options",
  description: "Specifies additional options for the MongoDB connection",
  args: {
    name: "MONGODB_PROFILE_ADDITIONAL_OPTIONS",
    description: "Dict",
    suggestions: [],
  },
};
const flag7981: Fig.Option = {
  name: "--mongodb-ca-certificate",
  description:
    "x509 PEM-encoded certificate of the CA that signed the source database\nserver's certificate. The replica will use this certificate to verify\nit's connecting to the right host",
  args: {
    name: "MONGODB_CA_CERTIFICATE",
    description: "String",
    suggestions: [],
  },
};
const flag7993: Fig.Option = {
  name: "--mongodb-direct-connection",
  description:
    "Connect to the mongodb hosts directly and do not try to resolve\n      any of the replicas from the replica set",
};
const flag7994: Fig.Option = {
  name: "--mongodb-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the MongoDB data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "databases": [\n      {\n        "database":"sample_database",\n        "collections": [\n          {\n            "collection": "sample_collection",\n            "fields": [\n              {\n                "field": "sample_field",\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n```',
  args: {
    name: "MONGODB_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag7997: Fig.Option = {
  name: "--mongodb-password",
  description:
    "Password for the user that Datastream will be using to\nconnect to the database.\nThis field is not returned on request, and the value is encrypted\nwhen stored in Datastream",
  args: { name: "MONGODB_PASSWORD", description: "String", suggestions: [] },
};
const flag7998: Fig.Option = {
  name: "--mongodb-prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};
const flag7999: Fig.Option = {
  name: "--mongodb-replica-set",
  description: "Replica set of the MongoDB source database",
  args: { name: "MONGODB_REPLICA_SET", description: "String", suggestions: [] },
};
const flag8000: Fig.Option = {
  name: "--mongodb-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password for the user used to connect to the database",
  args: {
    name: "MONGODB_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag8001: Fig.Option = {
  name: "--mongodb-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for MongoDB Source Config.\n+\nThe JSON file is formatted as follows, with snake_case field naming:\n+\n```\n  {\n    "includeObjects": {},\n    "excludeObjects": {\n      "databases": [\n        {\n          "database": "sampleDb",\n          "collections": [\n            {\n              "collection": "sampleCollection",\n              "fields": [\n                {\n                  "field": "SAMPLE_FIELD",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n```',
  args: {
    name: "MONGODB_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag8002: Fig.Option = {
  name: "--mongodb-srv-connection-format",
  description: "SRV Connection format for the MongoDB source database",
};
const flag8003: Fig.Option = {
  name: "--mongodb-standard-connection-format",
  description: "Standard connection format for the MongoDB source database",
};
const flag8004: Fig.Option = {
  name: "--mongodb-tls",
  description: "Enable Transport Layer Security for the monogodb connection",
};
const flag8062: Fig.Option = {
  name: "--mysql-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the MySQL data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "mysqlDatabases": [\n      {\n        "database":"sample_database",\n        "mysqlTables": [\n          {\n            "table": "sample_table",\n            "mysqlColumns": [\n              {\n                "column": "sample_column",\n              }\n              ]\n          }\n        ]\n      }\n    ]\n  }\n```',
  args: {
    name: "MYSQL_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag8065: Fig.Option = {
  name: "--mysql-password",
  description:
    "Password for the user that Datastream will be using to\nconnect to the database.\nThis field is not returned on request, and the value is encrypted\nwhen stored in Datastream",
  args: { name: "MYSQL_PASSWORD", description: "String", suggestions: [] },
};
const flag8068: Fig.Option = {
  name: "--mysql-prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};
const flag8070: Fig.Option = {
  name: "--mysql-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password for the user used to connect to the database",
  args: {
    name: "MYSQL_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag8071: Fig.Option = {
  name: "--mysql-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for MySQL Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "includeObjects": {},\n    "excludeObjects":  {\n      "mysqlDatabases": [\n          {\n            "database":"sample_database",\n            "mysqlTables": [\n              {\n                "table": "sample_table",\n                "mysqlColumns": [\n                  {\n                    "column": "sample_column",\n                  }\n                 ]\n              }\n            ]\n          }\n        ]\n      }\n  }\n```',
  args: { name: "MYSQL_SOURCE_CONFIG", description: "String", suggestions: [] },
};
const flag10731: Fig.Option = {
  name: "--oracle-ca-certificate",
  description:
    "PEM-encoded certificate of the CA that signed the source database\nserver's certificate",
  args: {
    name: "ORACLE_CA_CERTIFICATE",
    description: "String",
    suggestions: [],
  },
};
const flag10742: Fig.Option = {
  name: "--oracle-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the Oracle data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "oracleSchemas": [\n      {\n        "schema": "SAMPLE",\n        "oracleTables": [\n          {\n            "table": "SAMPLE_TABLE",\n            "oracleColumns": [\n              {\n                "column": "COL",\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n```',
  args: {
    name: "ORACLE_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag10753: Fig.Option = {
  name: "--oracle-password",
  description:
    "Password for the user that Datastream will be using to\nconnect to the database.\nThis field is not returned on request, and the value is encrypted\nwhen stored in Datastream",
  args: { name: "ORACLE_PASSWORD", description: "String", suggestions: [] },
};
const flag10756: Fig.Option = {
  name: "--oracle-prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};
const flag10759: Fig.Option = {
  name: "--oracle-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password for the user used to connect to the database",
  args: {
    name: "ORACLE_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag10760: Fig.Option = {
  name: "--oracle-server-certificate-distinguished-name",
  description:
    "The distinguished name (DN) mentioned in the server\ncertificate. This corresponds to the SSL_SERVER_CERT_DN sqlnet parameter.\nIf this field is not provided, the DN matching is not enforced",
  args: {
    name: "ORACLE_SERVER_CERTIFICATE_DISTINGUISHED_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag10761: Fig.Option = {
  name: "--oracle-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for Oracle Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "includeObjects": {},\n    "excludeObjects": {\n      "oracleSchemas": [\n        {\n          "schema": "SAMPLE",\n          "oracleTables": [\n            {\n              "table": "SAMPLE_TABLE",\n              "oracleColumns": [\n                {\n                  "column": "COL",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n```',
  args: {
    name: "ORACLE_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
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
const flag11460: Fig.Option = {
  name: "--postgresql-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the PostgreSQL data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "postgresqlSchemas": [\n      {\n        "schema": "SAMPLE",\n        "postgresqlTables": [\n          {\n            "table": "SAMPLE_TABLE",\n            "postgresqlColumns": [\n              {\n                "column": "COL",\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n```',
  args: {
    name: "POSTGRESQL_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag11463: Fig.Option = {
  name: "--postgresql-password",
  description:
    "Password for the user that Datastream will be using to\nconnect to the database.\nThis field is not returned on request, and the value is encrypted\nwhen stored in Datastream",
  args: { name: "POSTGRESQL_PASSWORD", description: "String", suggestions: [] },
};
const flag11466: Fig.Option = {
  name: "--postgresql-prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};
const flag11469: Fig.Option = {
  name: "--postgresql-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password for the user used to connect to the database",
  args: {
    name: "POSTGRESQL_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag11470: Fig.Option = {
  name: "--postgresql-server-certificate-hostname",
  description:
    "The hostname mentioned in the Subject or SAN extension of the server\ncertificate. If this field is not provided, the hostname in the\nserver certificate is not validated",
  args: {
    name: "POSTGRESQL_SERVER_CERTIFICATE_HOSTNAME",
    description: "String",
    suggestions: [],
  },
};
const flag11471: Fig.Option = {
  name: "--postgresql-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for PostgreSQL Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "includeObjects": {},\n    "excludeObjects": {\n      "postgresqlSchemas": [\n        {\n          "schema": "SAMPLE",\n          "postgresqlTables": [\n            {\n              "table": "SAMPLE_TABLE",\n              "postgresqlColumns": [\n                {\n                  "column": "COL",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    "replicationSlot": "SAMPLE_REPLICATION_SLOT",\n    "publication": "SAMPLE_PUBLICATION"\n  }\n```',
  args: {
    name: "POSTGRESQL_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag11580: Fig.Option = {
  name: "--private-connection",
  description:
    "ID of the private_connection or fully qualified identifier for the private_connection.\n+\nTo set the `private_connection` attribute:\n* provide the argument `--private-connection` on the command line",
  args: { name: "PRIVATE_CONNECTION", description: "String", suggestions: [] },
};
const flag11585: Fig.Option = {
  name: "--private-connection",
  description:
    "The private connection name.\n+\nTo set the `private-connection` attribute:\n* provide the argument `route` on the command line with a fully specified name;\n* provide the argument `--private-connection` on the command line",
  args: { name: "PRIVATE_CONNECTION", description: "String", suggestions: [] },
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
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag13160: Fig.Option = {
  name: "--root-path",
  description: "The root path inside the Cloud Storage bucket",
  args: { name: "ROOT_PATH", description: "String", suggestions: [] },
};
const flag13213: Fig.Option = {
  name: "--rule-sets",
  description:
    'Path to a JSON file containing a list of rule sets\n  to be applied to the stream.\n+\n  The JSON file is formatted as follows, with camelCase field naming:\n+\n  ```\n  [\n    {\n      "objectFilter": {\n        "sourceObjectIdentifier": {\n          "oracleIdentifier": {\n            "schema": "schema1",\n            "table": "table1"\n          }\n        }\n      },\n      "customizationRules": [\n        {\n          "bigqueryClustering": {\n            "columns": ["COL_A"]\n          }\n        }\n      ]\n    },\n    {\n      "objectFilter": {\n        "sourceObjectIdentifier": {\n          "oracleIdentifier": {\n            "schema": "schema2",\n            "table": "table2"\n          }\n        }\n      },\n      "customizationRules": [\n        {\n          "bigqueryPartitioning": {\n            "timeUnitPartition": {\n              "column": "TIME_COL",\n              "partitioningTimeGranularity": "PARTITIONING_TIME_GRANULARITY_DAY"\n            }\n          }\n        }\n      ]\n    }\n  ]\n  ```',
  args: { name: "RULE_SETS", description: "String", suggestions: [] },
};
const flag13246: Fig.Option = {
  name: "--saas-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the SaaS data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "objects": [\n      {\n        "objectName": "Account",\n      }\n    ]\n  }\n```',
  args: {
    name: "SAAS_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag13251: Fig.Option = {
  name: "--salesforce-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the Salesforce data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "objects": [\n      {\n        "objectName": "SAMPLE",\n      },\n      {\n        "objectName": "SAMPLE2",\n      }\n    ]\n  }\n```',
  args: {
    name: "SALESFORCE_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag13254: Fig.Option = {
  name: "--salesforce-marketing-cloud-oauth-client-secret",
  description:
    "OAuth 2.0 Client secret used to connect to Salesforce Marketing Cloud",
  args: {
    name: "SALESFORCE_MARKETING_CLOUD_OAUTH_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag13255: Fig.Option = {
  name: "--salesforce-marketing-cloud-prompt-for-oauth-client-secret",
  description:
    "Prompt for the OAuth 2.0 Client secret used to connect to Salesforce Marketing Cloud",
};
const flag13256: Fig.Option = {
  name: "--salesforce-marketing-cloud-secret-manager-stored-oauth-client-secret",
  description:
    "Path to secret manager, storing the OAuth 2.0 Client secret used to connect to Salesforce Marketing Cloud",
  args: {
    name: "SALESFORCE_MARKETING_CLOUD_SECRET_MANAGER_STORED_OAUTH_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag13257: Fig.Option = {
  name: "--salesforce-marketing-cloud-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for Salesforce Marketing Cloud Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "pollingInterval": "300s",\n    "fullRefreshPollingInterval": "86400s",\n    "includeObjects": {},\n    "excludeObjects": {\n      "objects": [\n        {\n          "objectName": "Subscriber",\n          "properties": [\n            {\n              "propertyName": "EmailAddress",\n            }\n          ]\n        }\n      ]\n    }\n  }\n```',
  args: {
    name: "SALESFORCE_MARKETING_CLOUD_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag13262: Fig.Option = {
  name: "--salesforce-oauth2-client-secret",
  description: "OAuth 2.0 Client secret used to connect to Salesforce",
  args: {
    name: "SALESFORCE_OAUTH2_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag13264: Fig.Option = {
  name: "--salesforce-password",
  description:
    "Password for the user that Datastream will be using to\nconnect to Salesforce.\nThis field is not returned on request, and the value is encrypted\nwhen stored in Datastream",
  args: { name: "SALESFORCE_PASSWORD", description: "String", suggestions: [] },
};
const flag13265: Fig.Option = {
  name: "--salesforce-prompt-for-oauth2-client-secret",
  description:
    "Prompt for the OAuth 2.0 Client secret used to connect to Salesforce",
};
const flag13266: Fig.Option = {
  name: "--salesforce-prompt-for-password",
  description: "Prompt for the password used to connect to Salesforce",
};
const flag13267: Fig.Option = {
  name: "--salesforce-prompt-for-security-token",
  description: "Prompt for the security token used to connect to Salesforce",
};
const flag13268: Fig.Option = {
  name: "--salesforce-secret-manager-stored-oauth2-client-secret",
  description:
    "Path to secret manager, storing the OAuth 2.0 Client secret used to connect to Salesforce",
  args: {
    name: "SALESFORCE_SECRET_MANAGER_STORED_OAUTH2_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag13269: Fig.Option = {
  name: "--salesforce-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password for the user used to connect to Salesforce",
  args: {
    name: "SALESFORCE_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag13270: Fig.Option = {
  name: "--salesforce-secret-manager-stored-security-token",
  description:
    "Path to secret manager, storing the security token used to connect to Salesforce",
  args: {
    name: "SALESFORCE_SECRET_MANAGER_STORED_SECURITY_TOKEN",
    description: "String",
    suggestions: [],
  },
};
const flag13271: Fig.Option = {
  name: "--salesforce-security-token",
  description:
    "Security token for the user that Datastream will be using to\nconnect to Salesforce",
  args: {
    name: "SALESFORCE_SECURITY_TOKEN",
    description: "String",
    suggestions: [],
  },
};
const flag13272: Fig.Option = {
  name: "--salesforce-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for Salesforce Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "pollingInterval": "3000s",\n    "includeObjects": {},\n    "excludeObjects": {\n      "objects": [\n        {\n          "objectName": "SAMPLE",\n          "fields": [\n            {\n              "fieldName": "SAMPLE_FIELD",\n            }\n          ]\n        }\n      ]\n    }\n  }\n```',
  args: {
    name: "SALESFORCE_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag13630: Fig.Option = {
  name: "--servicenow-oauth-client-secret",
  description: "OAuth 2.0 Client secret used to connect to ServiceNow",
  args: {
    name: "SERVICENOW_OAUTH_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag13631: Fig.Option = {
  name: "--servicenow-password",
  description: "Password used to connect to ServiceNow",
  args: { name: "SERVICENOW_PASSWORD", description: "String", suggestions: [] },
};
const flag13632: Fig.Option = {
  name: "--servicenow-prompt-for-oauth-client-secret",
  description:
    "Prompt for the OAuth 2.0 Client secret used to connect to ServiceNow",
};
const flag13633: Fig.Option = {
  name: "--servicenow-prompt-for-password",
  description: "Prompt for the password used to connect to ServiceNow",
};
const flag13634: Fig.Option = {
  name: "--servicenow-secret-manager-stored-oauth-client-secret",
  description:
    "Path to secret manager, storing the OAuth 2.0 Client secret used to connect to ServiceNow",
  args: {
    name: "SERVICENOW_SECRET_MANAGER_STORED_OAUTH_CLIENT_SECRET",
    description: "String",
    suggestions: [],
  },
};
const flag13635: Fig.Option = {
  name: "--servicenow-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password used to connect to ServiceNow",
  args: {
    name: "SERVICENOW_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag13636: Fig.Option = {
  name: "--servicenow-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for ServiceNow Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "pollingInterval": "300s",\n    "includeObjects": {},\n    "excludeObjects": {\n      "objects": [\n        {\n          "objectName": "incident",\n          "properties": [\n            {\n              "propertyName": "short_description",\n            }\n          ]\n        }\n      ]\n    }\n  }\n```',
  args: {
    name: "SERVICENOW_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14134: Fig.Option = {
  name: "--source",
  description:
    "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--source` on the command line",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14191: Fig.Option = {
  name: "--spanner-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the Spanner data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "schemas": [\n      {\n        "schema": "SAMPLE_SCHEMA",\n        "tables": [\n          {\n            "table": "SAMPLE_TABLE",\n            "columns": [\n              {\n                "column": "SAMPLE_COLUMN",\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n```',
  args: {
    name: "SPANNER_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag14192: Fig.Option = {
  name: "--spanner-host",
  description:
    "The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com",
  args: { name: "SPANNER_HOST", description: "String", suggestions: [] },
};
const flag14261: Fig.Option = {
  name: "--sqlserver-excluded-objects",
  description:
    'Path to a YAML (or JSON) file containing the SQL Server data sources to avoid backfilling.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "schemas": [\n      {\n        "schema": "SAMPLE",\n        "tables": [\n          {\n            "table": "SAMPLE_TABLE",\n            "columns": [\n              {\n                "column": "COL",\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n```',
  args: {
    name: "SQLSERVER_EXCLUDED_OBJECTS",
    description: "String",
    suggestions: [],
  },
};
const flag14264: Fig.Option = {
  name: "--sqlserver-password",
  description:
    "Password for the user that Datastream will be using to\nconnect to the database.\nThis field is not returned on request, and the value is encrypted\nwhen stored in Datastream",
  args: { name: "SQLSERVER_PASSWORD", description: "String", suggestions: [] },
};
const flag14268: Fig.Option = {
  name: "--sqlserver-prompt-for-password",
  description: "Prompt for the password used to connect to the database",
};
const flag14271: Fig.Option = {
  name: "--sqlserver-secret-manager-stored-password",
  description:
    "Path to secret manager, storing the password for the user used to connect to the database",
  args: {
    name: "SQLSERVER_SECRET_MANAGER_STORED_PASSWORD",
    description: "String",
    suggestions: [],
  },
};
const flag14272: Fig.Option = {
  name: "--sqlserver-source-config",
  description:
    'Path to a YAML (or JSON) file containing the configuration for SQL Server Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "includeObjects": {},\n    "excludeObjects": {\n      "schemas": [\n        {\n          "schema": "SAMPLE",\n          "tables": [\n            {\n              "table": "SAMPLE_TABLE",\n              "columns": [\n                {\n                  "column": "COL",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    "maxConcurrentCdcTasks": 2,\n    "maxConcurrentBackfillTasks": 10,\n    "transactionLogs": {}  # Or changeTables\n  }\n```',
  args: {
    name: "SQLSERVER_SOURCE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag14420: Fig.Option = {
  name: "--static-ip-connectivity",
  description: "use static ip connectivity",
};
const flag14472: Fig.Option = {
  name: "--stream",
  description:
    "ID of the stream or fully qualified identifier for the stream.\n+\nTo set the `stream` attribute:\n* provide the argument `--stream` on the command line",
  args: { name: "STREAM", description: "String", suggestions: [] },
};
const flag14473: Fig.Option = {
  name: "--stream",
  description:
    "The stream name.\n+\nTo set the `stream` attribute:\n* provide the argument `object` on the command line with a fully specified name;\n* provide the argument `--stream` on the command line",
  args: { name: "STREAM", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15070: Fig.Option = {
  name: "--type",
  description:
    "Type can be MYSQL, ORACLE, POSTGRESQL, SQLSERVER, SALESFORCE, GOOGLE-CLOUD-STORAGE, BIGQUERY, DATAVERSE, SALESFORCE-MARKETING-CLOUD or SERVICENOW",
  args: { name: "TYPE", description: "String", suggestions: [] },
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
  name: "datastream",
  description: "Manage Cloud Datastream resources",
  subcommands: [
    {
      name: "connection-profiles",
      description: "Manage Datastream connection profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream connection profile",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--bucket",
              description:
                "The full project and resource path for Cloud Storage\n      bucket including the name",
              args: { name: "BUCKET", description: "String", suggestions: [] },
            },
            {
              name: "--ca-certificate",
              description:
                "x509 PEM-encoded certificate of the CA that signed the source database\nserver's certificate. The replica will use this certificate to verify\nit's connecting to the right host",
              args: {
                name: "CA_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--client-certificate",
              description:
                "x509 PEM-encoded certificate that will be used by the replica to\nauthenticate against the source database server",
              args: {
                name: "CLIENT_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with\nthe Client Certificate",
              args: {
                name: "CLIENT_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--database-service",
              description: "Database service for the Oracle connection",
              args: {
                name: "DATABASE_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dataverse-environment-url",
              description:
                "Environment URL of the Microsoft Dataverse instance. Example: 'myenv.crm.dynamics.com'",
              args: {
                name: "DATAVERSE_ENVIRONMENT_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dataverse-oauth-client-id",
              description: "OAuth 2.0 Client ID used to connect to Dataverse",
              args: {
                name: "DATAVERSE_OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag2845,
            flag2846,
            flag2847,
            {
              name: "--dataverse-tenant-id",
              description: "Tenant ID of the Microsoft Dataverse instance",
              args: {
                name: "DATAVERSE_TENANT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Friendly name for the connection profile",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "Create the connection profile without validating it",
            },
            flag5091,
            {
              name: "--forward-ssh-hostname",
              description: "Hostname for the SSH tunnel",
              args: {
                name: "FORWARD_SSH_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5094,
            flag5095,
            flag5096,
            {
              name: "--forward-ssh-username",
              description: "Username for the SSH tunnel",
              args: {
                name: "FORWARD_SSH_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag6413,
            flag6853,
            flag7356,
            flag7980,
            flag7981,
            flag7993,
            {
              name: "--mongodb-host-addresses",
              description:
                "IP or hostname and port of the MongoDB source database",
              args: {
                name: "IPv4_ADDRESS_OR_HOSTNAME:PORT",
                description: "List",
                suggestions: [],
              },
            },
            flag7997,
            flag7998,
            flag7999,
            flag8000,
            flag8002,
            flag8003,
            flag8004,
            {
              name: "--mongodb-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "MONGODB_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-hostname",
              description: "IP or hostname of the MySQL source database",
              args: {
                name: "MYSQL_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag8065,
            {
              name: "--mysql-port",
              description: "Network port of the MySQL source database",
              args: { name: "MYSQL_PORT", description: "Int", suggestions: [] },
            },
            flag8068,
            flag8070,
            {
              name: "--mysql-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "MYSQL_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag10731,
            {
              name: "--oracle-hostname",
              description: "IP or hostname of the oracle source database",
              args: {
                name: "ORACLE_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag10753,
            {
              name: "--oracle-port",
              description: "Network port of the oracle source database",
              args: {
                name: "ORACLE_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            flag10756,
            flag10759,
            flag10760,
            {
              name: "--oracle-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "ORACLE_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-ca-certificate",
              description:
                "x509 PEM-encoded certificate of the CA that signed the source database\nserver's certificate. The replica will use this certificate to verify\nit's connecting to the right host",
              args: {
                name: "POSTGRESQL_CA_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-client-certificate",
              description:
                "x509 PEM-encoded certificate that will be used by the replica to\nauthenticate against the source database server",
              args: {
                name: "POSTGRESQL_CLIENT_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with\nthe Client Certificate",
              args: {
                name: "POSTGRESQL_CLIENT_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-database",
              description: "Database service for the PostgreSQL connection",
              args: {
                name: "POSTGRESQL_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-hostname",
              description: "IP or hostname of the PostgreSQL source database",
              args: {
                name: "POSTGRESQL_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11463,
            {
              name: "--postgresql-port",
              description: "Network port of the PostgreSQL source database",
              args: {
                name: "POSTGRESQL_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11466,
            flag11469,
            flag11470,
            {
              name: "--postgresql-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "POSTGRESQL_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11580,
            flag11637,
            flag11946,
            flag13160,
            {
              name: "--salesforce-domain",
              description:
                "Domain of the Salesforce organization. For example, 'myorg.my.salesforce.com'",
              args: {
                name: "SALESFORCE_DOMAIN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--salesforce-marketing-cloud-oauth-client-id",
              description:
                "OAuth 2.0 Client ID used to connect to Salesforce Marketing Cloud",
              args: {
                name: "SALESFORCE_MARKETING_CLOUD_OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag13254,
            flag13255,
            flag13256,
            {
              name: "--salesforce-marketing-cloud-subdomain",
              description:
                "Subdomain for the Salesforce Marketing Cloud connection",
              args: {
                name: "SALESFORCE_MARKETING_CLOUD_SUBDOMAIN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--salesforce-oauth2-client-id",
              description: "OAuth 2.0 Client ID used to connect to Salesforce",
              args: {
                name: "SALESFORCE_OAUTH2_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag13262,
            flag13264,
            flag13265,
            flag13266,
            flag13267,
            flag13268,
            flag13269,
            flag13270,
            flag13271,
            {
              name: "--salesforce-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "SALESFORCE_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--servicenow-instance",
              description: "The instance of the ServiceNow account",
              args: {
                name: "SERVICENOW_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--servicenow-oauth-client-id",
              description: "OAuth 2.0 Client ID used to connect to ServiceNow",
              args: {
                name: "SERVICENOW_OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag13630,
            flag13631,
            flag13632,
            flag13633,
            flag13634,
            flag13635,
            {
              name: "--servicenow-username",
              description: "Username used to connect to ServiceNow",
              args: {
                name: "SERVICENOW_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--spanner-database",
              description:
                "The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}",
              args: {
                name: "SPANNER_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag14192,
            {
              name: "--sqlserver-database",
              description: "Database service for the SQL Server connection",
              args: {
                name: "SQLSERVER_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sqlserver-hostname",
              description: "IP or hostname of the SQL Server source database",
              args: {
                name: "SQLSERVER_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14264,
            {
              name: "--sqlserver-port",
              description: "Network port of the SQL Server source database",
              args: {
                name: "SQLSERVER_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            flag14268,
            flag14271,
            {
              name: "--sqlserver-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "SQLSERVER_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14420,
            flag14975,
            flag15070,
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
          name: "delete",
          description: "Delete a Datastream connection profile",
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
            flag7297,
            flag7356,
            flag11637,
            flag11946,
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
          description: "Show details about a Datastream connection profile",
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
            flag7297,
            flag7356,
            flag11637,
            flag11946,
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
          name: "discover",
          description: "Discover a Datastream connection profile",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--connection-profile-name",
              description:
                "ID of the connection_profile or fully qualified identifier for the connection_profile.\n+\nTo set the `connection_profile` attribute:\n* provide the argument `--connection-profile-name` on the command line",
              args: {
                name: "CONNECTION_PROFILE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--connection-profile-object-file",
              description:
                "Path to a YAML (or JSON) file containing the configuration\n      for a connection profile object. If you pass - as the value of the\n      flag the file content will be read from stdin",
              args: {
                name: "CONNECTION_PROFILE_OBJECT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--full-hierarchy",
              description:
                "Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE)",
            },
            flag5453,
            {
              name: "--hierarchy-depth",
              description:
                "The number of hierarchy levels below the current level to be retrieved",
              args: {
                name: "HIERARCHY_DEPTH",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag6692,
            flag7356,
            {
              name: "--mysql-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the MySQL RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "MYSQL_RDBMS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the Oracle RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "ORACLE_RDBMS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the PostgreSQL RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "POSTGRESQL_RDBMS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--recursive",
              description:
                "(DEPRECATED) Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).\n+\nThe --recursive option is deprecated; use `--full-hierarchy` instead",
            },
            {
              name: "--recursive-depth",
              description:
                "(DEPRECATED) The number of hierarchy levels below the current level to be retrieved.\n+\nThe --recursive-depth option is deprecated; use `--hierarchy-depth` instead",
              args: {
                name: "RECURSIVE_DEPTH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sqlserver-rdbms-file",
              description:
                "Path to a YAML (or JSON) file containing the SQL Server RDBMS to enrich with child data objects and metadata. If you pass - as the value of the flag the file content will be read from stdin",
              args: {
                name: "SQLSERVER_RDBMS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List Datastream connection profiles",
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
          description: "Update a Datastream connection profile",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--bucket",
              description:
                "The full project and resource path for Cloud Storage\n      bucket including the name",
              args: { name: "BUCKET", description: "String", suggestions: [] },
            },
            {
              name: "--ca-certificate",
              description:
                "x509 PEM-encoded certificate of the CA that signed the source database\nserver's certificate. The replica will use this certificate to verify\nit's connecting to the right host",
              args: {
                name: "CA_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            flag1723,
            {
              name: "--client-certificate",
              description:
                "x509 PEM-encoded certificate that will be used by the replica to\nauthenticate against the source database server",
              args: {
                name: "CLIENT_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with\nthe Client Certificate",
              args: {
                name: "CLIENT_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--database-service",
              description: "Database service for the Oracle connection",
              args: {
                name: "DATABASE_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dataverse-environment-url",
              description:
                "Environment URL of the Microsoft Dataverse instance. Example: 'myenv.crm.dynamics.com'",
              args: {
                name: "DATAVERSE_ENVIRONMENT_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dataverse-oauth-client-id",
              description: "OAuth 2.0 Client ID used to connect to Dataverse",
              args: {
                name: "DATAVERSE_OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag2845,
            flag2846,
            flag2847,
            {
              name: "--dataverse-tenant-id",
              description: "Tenant ID of the Microsoft Dataverse instance",
              args: {
                name: "DATAVERSE_TENANT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Friendly name for the connection profile",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "Update the connection profile without validating it",
            },
            flag5091,
            {
              name: "--forward-ssh-hostname",
              description: "Hostname for the SSH tunnel",
              args: {
                name: "FORWARD_SSH_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5094,
            flag5095,
            flag5096,
            {
              name: "--forward-ssh-username",
              description: "Username for the SSH tunnel",
              args: {
                name: "FORWARD_SSH_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag6853,
            flag7356,
            flag7980,
            flag7981,
            flag7993,
            {
              name: "--mongodb-host-addresses",
              description:
                "IP or hostname and port of the MongoDB source database",
              args: {
                name: "IPv4_ADDRESS_OR_HOSTNAME:PORT",
                description: "List",
                suggestions: [],
              },
            },
            flag7997,
            flag7998,
            flag7999,
            flag8000,
            flag8002,
            flag8003,
            flag8004,
            {
              name: "--mongodb-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "MONGODB_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-hostname",
              description: "IP or hostname of the MySQL source database",
              args: {
                name: "MYSQL_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag8065,
            {
              name: "--mysql-port",
              description: "Network port of the MySQL source database",
              args: { name: "MYSQL_PORT", description: "Int", suggestions: [] },
            },
            flag8068,
            flag8070,
            {
              name: "--mysql-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "MYSQL_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag10731,
            {
              name: "--oracle-hostname",
              description: "IP or hostname of the oracle source database",
              args: {
                name: "ORACLE_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag10753,
            {
              name: "--oracle-port",
              description: "Network port of the oracle source database",
              args: {
                name: "ORACLE_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            flag10756,
            flag10759,
            flag10760,
            {
              name: "--oracle-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "ORACLE_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-ca-certificate",
              description:
                "x509 PEM-encoded certificate of the CA that signed the source database\nserver's certificate. The replica will use this certificate to verify\nit's connecting to the right host",
              args: {
                name: "POSTGRESQL_CA_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-client-certificate",
              description:
                "x509 PEM-encoded certificate that will be used by the replica to\nauthenticate against the source database server",
              args: {
                name: "POSTGRESQL_CLIENT_CERTIFICATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-client-key",
              description:
                "Unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with\nthe Client Certificate",
              args: {
                name: "POSTGRESQL_CLIENT_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-database",
              description: "Database service for the PostgreSQL connection",
              args: {
                name: "POSTGRESQL_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-hostname",
              description: "IP or hostname of the PostgreSQL source database",
              args: {
                name: "POSTGRESQL_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11463,
            {
              name: "--postgresql-port",
              description: "Network port of the PostgreSQL source database",
              args: {
                name: "POSTGRESQL_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11466,
            flag11469,
            flag11470,
            {
              name: "--postgresql-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "POSTGRESQL_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11580,
            flag11637,
            flag11946,
            flag12637,
            flag13160,
            {
              name: "--salesforce-domain",
              description:
                "Domain of the Salesforce organization. For example, 'myorg.my.salesforce.com'",
              args: {
                name: "SALESFORCE_DOMAIN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--salesforce-marketing-cloud-oauth-client-id",
              description:
                "OAuth 2.0 Client ID used to connect to Salesforce Marketing Cloud",
              args: {
                name: "SALESFORCE_MARKETING_CLOUD_OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag13254,
            flag13255,
            flag13256,
            {
              name: "--salesforce-marketing-cloud-subdomain",
              description:
                "Subdomain for the Salesforce Marketing Cloud connection",
              args: {
                name: "SALESFORCE_MARKETING_CLOUD_SUBDOMAIN",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--salesforce-oauth2-client-id",
              description: "OAuth 2.0 Client ID used to connect to Salesforce",
              args: {
                name: "SALESFORCE_OAUTH2_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag13262,
            flag13264,
            flag13265,
            flag13266,
            flag13267,
            flag13268,
            flag13269,
            flag13270,
            flag13271,
            {
              name: "--salesforce-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "SALESFORCE_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--servicenow-instance",
              description: "The instance of the ServiceNow account",
              args: {
                name: "SERVICENOW_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--servicenow-oauth-client-id",
              description: "OAuth 2.0 Client ID used to connect to ServiceNow",
              args: {
                name: "SERVICENOW_OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag13630,
            flag13631,
            flag13632,
            flag13633,
            flag13634,
            flag13635,
            {
              name: "--servicenow-username",
              description: "Username used to connect to ServiceNow",
              args: {
                name: "SERVICENOW_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14192,
            {
              name: "--sqlserver-database",
              description: "Database service for the SQL Server connection",
              args: {
                name: "SQLSERVER_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sqlserver-hostname",
              description: "IP or hostname of the SQL Server source database",
              args: {
                name: "SQLSERVER_HOSTNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14264,
            {
              name: "--sqlserver-port",
              description: "Network port of the SQL Server source database",
              args: {
                name: "SQLSERVER_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            flag14268,
            flag14271,
            {
              name: "--sqlserver-username",
              description:
                "Username Datastream will use to connect to the database",
              args: {
                name: "SQLSERVER_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14420,
            flag14975,
            flag15070,
            flag15167,
            flag15315,
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
      name: "locations",
      description: "Manage Datastream location resources",
      subcommands: [
        {
          name: "describe",
          description: "Show details about the location",
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
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line",
          },
        },
        {
          name: "fetch-static-ips",
          description: "List Datastream static ips per location",
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
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line",
          },
        },
        {
          name: "list",
          description: "List Datastream locations",
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
      name: "objects",
      description: "Manage Datastream stream objects",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a Stream object",
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
            flag7298,
            flag7356,
            flag11637,
            flag11946,
            flag14473,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OBJECT",
            description:
              "ID of the stream_object or fully qualified identifier for the stream_object.\n+\nTo set the `object` attribute:\n* provide the argument `object` on the command line",
          },
        },
        {
          name: "list",
          description: "List a Datastream stream objects",
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
            flag6865,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14472,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "lookup",
          description: "Lookup a Datastream stream object",
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
            flag6865,
            flag7356,
            {
              name: "--mysql-database",
              description: "Mysql database for the object",
              args: {
                name: "MYSQL_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--mysql-table",
              description: "Mysql table for the object",
              args: {
                name: "MYSQL_TABLE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-schema",
              description: "Oracle schema for the object",
              args: {
                name: "ORACLE_SCHEMA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oracle-table",
              description: "Oracle table for the object",
              args: {
                name: "ORACLE_TABLE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-schema",
              description: "PostgreSQL schema for the object",
              args: {
                name: "POSTGRESQL_SCHEMA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--postgresql-table",
              description: "PostgreSQL table for the object",
              args: {
                name: "POSTGRESQL_TABLE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--salesforce-object-name",
              description: "Salesforce object name",
              args: {
                name: "SALESFORCE_OBJECT_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--spanner-schema",
              description: "Spanner schema name",
              args: {
                name: "SPANNER_SCHEMA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--spanner-table",
              description: "Spanner table name",
              args: {
                name: "SPANNER_TABLE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sqlserver-schema",
              description: "SQL Server schema for the object",
              args: {
                name: "SQLSERVER_SCHEMA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sqlserver-table",
              description: "SQL Server table for the object",
              args: {
                name: "SQLSERVER_TABLE",
                description: "String",
                suggestions: [],
              },
            },
            flag14472,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "start-backfill",
          description: "Start a backfill job for a Stream object",
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
            flag7298,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--sql-where-clause",
              description:
                "A SQL-query WHERE clause selecting which data should be included,\nnot including the \"WHERE\" keyword itself.\ne.g., `t.key1 = 'value1' AND t.key2 = 'value2'`.\nOnly supported for SQL sources",
              args: {
                name: "SQL_WHERE_CLAUSE",
                description: "String",
                suggestions: [],
              },
            },
            flag14473,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OBJECT",
            description:
              "ID of the stream_object or fully qualified identifier for the stream_object.\n+\nTo set the `object` attribute:\n* provide the argument `object` on the command line",
          },
        },
        {
          name: "stop-backfill",
          description: "Stop a backfill job for a Stream object",
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
            flag7298,
            flag7356,
            flag11637,
            flag11946,
            flag14473,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OBJECT",
            description:
              "ID of the stream_object or fully qualified identifier for the stream_object.\n+\nTo set the `object` attribute:\n* provide the argument `object` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Datastream operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Datastream operation",
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
            flag7299,
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
          description: "Delete a Datastream operation",
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
            flag7299,
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
            flag7299,
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
            flag4401,
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
      name: "private-connections",
      description: "Manage Datastream private connections",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream private connection",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "Friendly name for the private connection",
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
            {
              name: "--location",
              description:
                "The Cloud location for the private_connection.\n+\nTo set the `location` attribute:\n* provide the argument `private_connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
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
            flag11637,
            flag11946,
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
          description: "Delete a Datastream private connection",
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
                "You must set the force to ensure that the private\nconnectivity configuration is deleted properly",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7300,
            flag7356,
            flag11637,
            flag11946,
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
          description: "Show details about a Datastream private connection",
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
            flag7300,
            flag7356,
            flag11637,
            flag11946,
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
      name: "routes",
      description: "Manage Datastream routes",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream private connection route",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination-address",
              description: "Destination address for connection",
              args: {
                name: "DESTINATION_ADDRESS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-port",
              description: "Destination port for connection",
              args: {
                name: "DESTINATION_PORT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Friendly name for the route",
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
            {
              name: "--location",
              description:
                "The Cloud location for the route.\n+\nTo set the `location` attribute:\n* provide the argument `route` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--private-connection",
              description:
                "The private connection of the route.\n+\nTo set the `private-connection` attribute:\n* provide the argument `route` on the command line with a fully specified name;\n* provide the argument `--private-connection` on the command line",
              args: {
                name: "PRIVATE_CONNECTION",
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
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route.\n+\nTo set the `route` attribute:\n* provide the argument `route` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Datastream private connection route",
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
            flag7301,
            flag7356,
            flag11585,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route.\n+\nTo set the `route` attribute:\n* provide the argument `route` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about the route",
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
            flag7301,
            flag7356,
            flag11585,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROUTE",
            description:
              "ID of the route or fully qualified identifier for the route.\n+\nTo set the `route` attribute:\n* provide the argument `route` on the command line",
          },
        },
        {
          name: "list",
          description: "List Datastream routes",
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
            {
              name: "--location",
              description:
                "The location of the resources.\n+\nTo set the `location` attribute:\n* provide the argument `--private-connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11059,
            {
              name: "--private-connection",
              description:
                "ID of the private_connection or fully qualified identifier for the private_connection.\n+\nTo set the `private-connection` attribute:\n* provide the argument `--private-connection` on the command line",
              args: {
                name: "PRIVATE_CONNECTION",
                description: "String",
                suggestions: [],
              },
            },
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
      name: "streams",
      description: "Manage Datastream stream resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Datastream stream",
          options: [
            flag42,
            flag46,
            flag1013,
            flag1014,
            flag1138,
            flag1201,
            flag2292,
            flag2848,
            flag3458,
            {
              name: "--display-name",
              description: "Friendly name for the stream",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            {
              name: "--force",
              description: "Create the stream without validating it",
            },
            flag5091,
            flag5161,
            flag5453,
            flag5699,
            flag6413,
            flag6866,
            flag7356,
            flag7994,
            flag8001,
            flag8062,
            flag8071,
            flag10742,
            flag10761,
            flag11460,
            flag11471,
            flag11637,
            flag11946,
            flag13213,
            flag13246,
            flag13251,
            flag13257,
            flag13272,
            flag13636,
            flag14134,
            flag14191,
            {
              name: "--spanner-source-config",
              description:
                'Path to a YAML (or JSON) file containing the configuration for Spanner Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  "changeStreamName": "SAMPLE_CHANGE_STREAM_NAME",\n  {\n    "includeObjects": {},\n    "excludeObjects": {\n      "schemas": [\n        {\n          "schema": "SAMPLE",\n          "tables": [\n            {\n              "table": "SAMPLE_TABLE",\n              "columns": [\n                {\n                  "column": "COL",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    "maxConcurrentCdcTasks": 1000,\n    "maxConcurrentBackfillTasks": 10,\n    "backfillDataBoostEnabled": false,\n    "fgacRole": "SAMPLE_FGAC_ROLE",\n    "spannerRpcPriority": "MEDIUM"\n  }\n```',
              args: {
                name: "SPANNER_SOURCE_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag14261,
            flag14272,
            flag14975,
            flag15315,
            {
              name: "--validate-only",
              description:
                "Only validate the stream, but do not create any resources.\n      The default is false",
            },
            flag15424,
          ],
          args: {
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream.\n+\nTo set the `stream` attribute:\n* provide the argument `stream` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Datastream stream",
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
            flag7302,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream.\n+\nTo set the `stream` attribute:\n* provide the argument `stream` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a Datastream stream resource",
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
            flag7302,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream.\n+\nTo set the `stream` attribute:\n* provide the argument `stream` on the command line",
          },
        },
        {
          name: "list",
          description: "List Datastream stream resources",
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
          description: "Updates a Datastream stream",
          options: [
            flag42,
            flag46,
            flag1013,
            flag1014,
            flag1138,
            flag1201,
            flag1723,
            flag2292,
            flag2848,
            flag3458,
            {
              name: "--display-name",
              description: "Friendly name for the stream",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4401,
            flag4900,
            flag4902,
            {
              name: "--force",
              description: "Update the stream without validating it",
            },
            flag5091,
            flag5161,
            flag5453,
            flag5699,
            flag6866,
            flag7356,
            flag7994,
            flag8001,
            flag8062,
            flag8071,
            flag10742,
            flag10761,
            flag11460,
            flag11471,
            flag11637,
            flag11946,
            flag12637,
            flag13213,
            flag13246,
            flag13251,
            flag13257,
            flag13272,
            flag13636,
            flag14134,
            flag14191,
            {
              name: "--spanner-source-config",
              description:
                'Path to a YAML (or JSON) file containing the configuration for Spanner Source Config.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n  {\n    "includeObjects": {},\n    "excludeObjects": {\n      "schemas": [\n        {\n          "schema": "SAMPLE",\n          "tables": [\n            {\n              "table": "SAMPLE_TABLE",\n              "columns": [\n                {\n                  "column": "COL",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    "maxConcurrentCdcTasks": 1000,\n    "maxConcurrentBackfillTasks": 10,\n    "backfillDataBoostEnabled": false,\n    "fgacRole": "SAMPLE_FGAC_ROLE",\n    "spannerRpcPriority": "MEDIUM"\n  }\n```',
              args: {
                name: "SPANNER_SOURCE_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag14261,
            flag14272,
            {
              name: "--state",
              description: 'Stream state, can be set to: "RUNNING" or "PAUSED"',
              args: { name: "STATE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15167,
            {
              name: "--update-mask",
              description:
                'Used to specify the fields to be overwritten in the stream resource by the update.\n  If the update mask is used, then a field will be overwritten only if it is in the mask. If the user does not provide a mask then all fields will be overwritten.\n  This is a comma-separated list of fully qualified names of fields, written as snake_case or camelCase. Example: "display_name, source_config.oracle_source_config"',
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            {
              name: "--validate-only",
              description:
                "Only validate the stream, but do not update any resources.\n      The default is false",
            },
            flag15424,
          ],
          args: {
            name: "STREAM",
            description:
              "ID of the stream or fully qualified identifier for the stream.\n+\nTo set the `stream` attribute:\n* provide the argument `stream` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
