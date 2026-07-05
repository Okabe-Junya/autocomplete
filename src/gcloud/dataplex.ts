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
const flag694: Fig.Option = {
  name: "--aspect-types",
  description:
    'Limits the aspects returned to the provided aspect types.\nOnly works if the `--view=custom` is selected.\n+\nFor example, if two aspect types are specified:\n"projects/projectA/locations/us-central1/my-aspect-type,projects/projectB/locations/us/my-aspect-type2"\nthen only aspects matching these aspect types will be returned.\n+\nCan be further constrained by the `--paths` argument',
  args: { name: "ASPECT_TYPES", description: "List", suggestions: [] },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag1103: Fig.Option = {
  name: "--batch-executors-count",
  description: "Total number of job executors",
  args: { name: "BATCH_EXECUTORS_COUNT", description: "Int", suggestions: [] },
};
const flag1104: Fig.Option = {
  name: "--batch-max-executors-count",
  description:
    "Max configurable executors.\nIf max_executors_count > executors_count, then auto-scaling is enabled",
  args: {
    name: "BATCH_MAX_EXECUTORS_COUNT",
    description: "Int",
    suggestions: [],
  },
};
const flag1143: Fig.Option = {
  name: "--bigquery-publishing-dataset-location",
  description:
    "The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the dataset location will be set to the location of the data source resource. Refer to https://cloud.google.com/bigquery/docs/locations#supportedLocations for supported locations",
  args: {
    name: "BIGQUERY_PUBLISHING_DATASET_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag1144: Fig.Option = {
  name: "--bigquery-publishing-dataset-project",
  description:
    'The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the cloud resource bucket project will be used to create the dataset. The format is "projects/{project_id_or_number}',
  args: {
    name: "BIGQUERY_PUBLISHING_DATASET_PROJECT",
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
const flag1641: Fig.Option = {
  name: "--clear-entry-source-create-time",
  description: "Clear the value for the create_time field in the Entry Source",
};
const flag1642: Fig.Option = {
  name: "--clear-entry-source-description",
  description: "Clear the value for the description field in the Entry Source",
};
const flag1643: Fig.Option = {
  name: "--clear-entry-source-display-name",
  description: "Clear the value for the display_name field in the Entry Source",
};
const flag1644: Fig.Option = {
  name: "--clear-entry-source-labels",
  description: "Clear the labels for the Entry Source",
};
const flag1645: Fig.Option = {
  name: "--clear-entry-source-platform",
  description: "Clear the value for the platform field in the Entry Source",
};
const flag1646: Fig.Option = {
  name: "--clear-entry-source-resource",
  description: "Clear the value for the resource field in the Entry Source",
};
const flag1647: Fig.Option = {
  name: "--clear-entry-source-system",
  description: "Clear the value for the system field in the Entry Source",
};
const flag1670: Fig.Option = {
  name: "--clear-fully-qualified-name",
  description: "Clear the FQN for the Entry",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2380: Fig.Option = {
  name: "--container-image-java-jars",
  description:
    "A list of Java JARS to add to the classpath.\nValid input includes Cloud Storage URIs to Jar binaries.\nFor example, gs://bucket-name/my/path/to/file.jar",
  args: {
    name: "CONTAINER_IMAGE_JAVA_JARS",
    description: "List",
    suggestions: [],
  },
};
const flag2383: Fig.Option = {
  name: "--container-image-python-packages",
  description:
    "A list of python packages to be installed.\nValid formats include Cloud Storage URI to a PIP installable library.\nFor example, gs://bucket-name/my/path/to/lib.tar.gz",
  args: {
    name: "CONTAINER_IMAGE_PYTHON_PACKAGES",
    description: "List",
    suggestions: [],
  },
};
const flag2388: Fig.Option = {
  name: "--container-image",
  description: "Optional custom container image for the job",
  args: { name: "CONTAINER_IMAGE", description: "String", suggestions: [] },
};
const flag2592: Fig.Option = {
  name: "--csv-delimiter",
  description:
    'Delimiter used to separate values in the CSV file. If not specified, the delimiter will be set to comma (",")',
  args: { name: "CSV_DELIMITER", description: "String", suggestions: [] },
};
const flag2594: Fig.Option = {
  name: "--csv-delimiter",
  description:
    "The delimiter being used to separate values. This defaults to ','",
  args: { name: "CSV_DELIMITER", description: "String", suggestions: [] },
};
const flag2595: Fig.Option = {
  name: "--csv-disable-type-inference",
  description:
    "Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. Use *--csv-disable-type-inference* to enable and *--no-csv-disable-type-inference* to disable",
};
const flag2596: Fig.Option = {
  name: "--csv-disable-type-inference",
  description:
    "Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings",
  args: {
    name: "CSV_DISABLE_TYPE_INFERENCE",
    description: "String",
    suggestions: [],
  },
};
const flag2597: Fig.Option = {
  name: "--csv-encoding",
  description:
    "Character encoding of the CSV file. If not specified, the encoding will be set to UTF-8",
  args: { name: "CSV_ENCODING", description: "String", suggestions: [] },
};
const flag2598: Fig.Option = {
  name: "--csv-encoding",
  description: "The character encoding of the data. The default is UTF-8",
  args: { name: "CSV_ENCODING", description: "String", suggestions: [] },
};
const flag2599: Fig.Option = {
  name: "--csv-header-row-count",
  description:
    "The number of rows to interpret as header rows that should be skipped when reading data rows. The default value is 1",
  args: {
    name: "CSV_HEADER_ROW_COUNT",
    description: "String",
    suggestions: [],
  },
};
const flag2600: Fig.Option = {
  name: "--csv-header-rows",
  description:
    "The number of rows to interpret as header rows that should be skipped when reading data rows",
  args: { name: "CSV_HEADER_ROWS", description: "Int", suggestions: [] },
};
const flag2602: Fig.Option = {
  name: "--csv-quote-character",
  description:
    'The character used to quote column values. Accepts " (double quotation mark) or \' (single quotation mark). If unspecified, defaults to " (double quotation mark)',
  args: { name: "CSV_QUOTE_CHARACTER", description: "String", suggestions: [] },
};
const flag2706: Fig.Option = {
  name: "--data-profile-spec-file",
  description:
    "path to the JSON/YAML file containing the spec for the data profile scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataProfileSpec",
  args: {
    name: "DATA_PROFILE_SPEC_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag3184: Fig.Option = {
  name: "--description",
  description: "Description of the Aspect Type",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3186: Fig.Option = {
  name: "--description",
  description: "Description of the Entry Group",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3187: Fig.Option = {
  name: "--description",
  description: "Description of the Entry Type",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3188: Fig.Option = {
  name: "--description",
  description: "Description of the Glossary",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3196: Fig.Option = {
  name: "--description",
  description: "Description of the asset",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3202: Fig.Option = {
  name: "--description",
  description: "Description of the data documentation scan",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3214: Fig.Option = {
  name: "--description",
  description: "Description of the glossary category",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3215: Fig.Option = {
  name: "--description",
  description: "Description of the glossary term",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3649: Fig.Option = {
  name: "--discovery-enabled",
  description:
    "Whether discovery is enabled. Use *--discovery-enabled* to enable and *--no-discovery-enabled* to disable",
};
const flag3650: Fig.Option = {
  name: "--discovery-exclude-patterns",
  description:
    "The list of patterns to apply for selecting data to exclude\n        during discovery. For Cloud Storage bucket assets, these are interpreted\n        as glob patterns used to match object names. For BigQuery dataset\n        assets, these are interpreted as patterns to match table names",
  args: { name: "EXCLUDE_PATTERNS", description: "List", suggestions: [] },
};
const flag3651: Fig.Option = {
  name: "--discovery-include-patterns",
  description:
    "The list of patterns to apply for selecting data to include\n        during discovery if only a subset of the data should considered. For\n        Cloud Storage bucket assets, these are interpreted as glob patterns\n        used to match object names. For BigQuery dataset assets, these are\n        interpreted as patterns to match table names",
  args: { name: "INCLUDE_PATTERNS", description: "List", suggestions: [] },
};
const flag3652: Fig.Option = {
  name: "--discovery-schedule",
  description:
    "[Cron schedule](https://en.wikipedia.org/wiki/Cron) for running\n                discovery jobs periodically. Discovery jobs must be scheduled at\n                least 30 minutes apart",
  args: { name: "DISCOVERY_SCHEDULE", description: "String", suggestions: [] },
};
const flag3706: Fig.Option = {
  name: "--display-name",
  description: "Display Name of the Glossary",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3708: Fig.Option = {
  name: "--display-name",
  description: "Display Name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3713: Fig.Option = {
  name: "--display-name",
  description: "Display name of the Aspect Type",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3715: Fig.Option = {
  name: "--display-name",
  description: "Display name of the Entry Group",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3716: Fig.Option = {
  name: "--display-name",
  description: "Display name of the Entry Type",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3723: Fig.Option = {
  name: "--display-name",
  description: "Display name of the data documentation scan",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3736: Fig.Option = {
  name: "--display-name",
  description: "Display name of the glossary term",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4059: Fig.Option = {
  name: "--enable-catalog-publishing",
  description: "Publish data profile results to Dataplex catalog",
};
const flag4444: Fig.Option = {
  name: "--entry-group",
  description:
    "Entry group containing Dataplex Entries.\n+\n\nTo set the `entry-group` attribute:\n* provide the argument `entry` on the command line with a fully specified name;\n* provide the argument `--entry-group` on the command line",
  args: { name: "ENTRY_GROUP", description: "String", suggestions: [] },
};
const flag4448: Fig.Option = {
  name: "--entry-source-create-time",
  description:
    "The creation date and time of the resource in the source system",
  args: {
    name: "DATE_TIME",
    description: "Googlecloudsdk.command_lib.dataplex.parsers:IsoDateTime",
    suggestions: [],
  },
};
const flag4449: Fig.Option = {
  name: "--entry-source-description",
  description: "Description of the Entry",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag4450: Fig.Option = {
  name: "--entry-source-display-name",
  description: "User friendly display name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4451: Fig.Option = {
  name: "--entry-source-labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag4452: Fig.Option = {
  name: "--entry-source-platform",
  description: "The platform containing the source system",
  args: { name: "PLATFORM_NAME", description: "String", suggestions: [] },
};
const flag4453: Fig.Option = {
  name: "--entry-source-resource",
  description: "The name of the resource in the source system",
  args: { name: "RESOURCE", description: "String", suggestions: [] },
};
const flag4454: Fig.Option = {
  name: "--entry-source-system",
  description: "The name of the source system",
  args: { name: "SYSTEM_NAME", description: "String", suggestions: [] },
};
const flag4456: Fig.Option = {
  name: "--entry-source-update-time",
  description: "The update date and time of the resource in the source system",
  args: {
    name: "DATE_TIME",
    description: "Googlecloudsdk.command_lib.dataplex.parsers:IsoDateTime",
    suggestions: [],
  },
};
const flag4557: Fig.Option = {
  name: "--etag",
  description: "etag value for particular Glossary",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4595: Fig.Option = {
  name: "--exclude-field-names",
  description:
    "Names of the fields to exclude from data profile. If specified, the respective fields will be excluded from data profile, regardless of the fields specified in the `--include-field-names` flag",
  args: { name: "EXCLUDE_FIELD_NAMES", description: "String", suggestions: [] },
};
const flag4631: Fig.Option = {
  name: "--execution-project",
  description:
    "The project in which jobs are run.\nBy default, the project containing the Lake is used.\nIf a project is provided, the --execution-service-account must belong to this same\nproject",
  args: { name: "EXECUTION_PROJECT", description: "String", suggestions: [] },
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
const flag5127: Fig.Option = {
  name: "--fully-qualified-name",
  description:
    "FQN, a name for the entry that can reference it in an external system",
  args: {
    name: "FULLY_QUALIFIED_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag5340: Fig.Option = {
  name: "--glossary",
  description:
    "The name of glossary category to use.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary_category` on the command line with a fully specified name;\n* provide the argument `--glossary` on the command line",
  args: { name: "GLOSSARY", description: "String", suggestions: [] },
};
const flag5341: Fig.Option = {
  name: "--glossary",
  description:
    "The name of glossary term to use.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary_term` on the command line with a fully specified name;\n* provide the argument `--glossary` on the command line",
  args: { name: "GLOSSARY", description: "String", suggestions: [] },
};
const flag5342: Fig.Option = {
  name: "--glossary",
  description:
    "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `--glossary` on the command line",
  args: { name: "GLOSSARY", description: "String", suggestions: [] },
};
const flag5343: Fig.Option = {
  name: "--glossary",
  description:
    "Identifier of the Dataplex Glossary resource.\n+\n\nTo set the `glossary` attribute:\n* provide the argument `glossary_category` on the command line with a fully specified name;\n* provide the argument `--glossary` on the command line",
  args: { name: "GLOSSARY", description: "String", suggestions: [] },
};
const flag5344: Fig.Option = {
  name: "--glossary",
  description:
    "Identifier of the Dataplex Glossary resource.\n+\n\nTo set the `glossary` attribute:\n* provide the argument `glossary_term` on the command line with a fully specified name;\n* provide the argument `--glossary` on the command line",
  args: { name: "GLOSSARY", description: "String", suggestions: [] },
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
const flag5739: Fig.Option = {
  name: "--include-field-names",
  description:
    "Names of the fields to include in data profile. If not specified, all fields at the time of profile scan job execution are included. The fields listed in the `--exclude-field-names` flag are excluded",
  args: { name: "INCLUDE_FIELD_NAMES", description: "String", suggestions: [] },
};
const flag5769: Fig.Option = {
  name: "--incremental-field",
  description:
    "Field that contains values that monotonically increase over time (e.g. timestamp)",
  args: { name: "INCREMENTAL_FIELD", description: "String", suggestions: [] },
};
const flag6132: Fig.Option = {
  name: "--json-disable-type-inference",
  description:
    "Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). Use *--json-disable-type-inference* to enable and *--no-json-disable-type-inference* to disable",
};
const flag6133: Fig.Option = {
  name: "--json-disable-type-inference",
  description:
    "Whether to disable the inference of data types for JSON data. If true, all columns are registered as strings",
  args: {
    name: "JSON_DISABLE_TYPE_INFERENCE",
    description: "String",
    suggestions: [],
  },
};
const flag6134: Fig.Option = {
  name: "--json-encoding",
  description:
    "Character encoding of the JSON file. If not specified, the encoding will be set to UTF-8",
  args: { name: "JSON_ENCODING", description: "String", suggestions: [] },
};
const flag6135: Fig.Option = {
  name: "--json-encoding",
  description: "The character encoding of the data. The default is UTF-8",
  args: { name: "JSON_ENCODING", description: "String", suggestions: [] },
};
const flag6321: Fig.Option = {
  name: "--kms-key",
  description:
    "The Cloud KMS key to use for encryption, of the form:\nprojects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6413: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6450: Fig.Option = {
  name: "--lake",
  description:
    "The identifier of the Dataplex lake resource.\n+\nTo set the `lake` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6451: Fig.Option = {
  name: "--lake",
  description:
    "The identifier of the Dataplex lake resource.\n+\nTo set the `lake` attribute:\n* provide the argument `task` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6452: Fig.Option = {
  name: "--lake",
  description:
    "The identifier of the Dataplex lake resource.\n+\nTo set the `lake` attribute:\n* provide the argument `zone` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6453: Fig.Option = {
  name: "--lake",
  description:
    "ID of the lake or fully qualified identifier for the lake.\n+\nTo set the `lake` attribute:\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6456: Fig.Option = {
  name: "--lake",
  description:
    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `--zone` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6457: Fig.Option = {
  name: "--lake",
  description:
    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6458: Fig.Option = {
  name: "--lake",
  description:
    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `job` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6459: Fig.Option = {
  name: "--lake",
  description:
    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `task` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
};
const flag6460: Fig.Option = {
  name: "--lake",
  description:
    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `zone` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
  args: { name: "LAKE", description: "String", suggestions: [] },
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
const flag7026: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `aspect_type` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7027: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7028: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `datascan` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7029: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `encryption_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7030: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `entry_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7031: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `entry_type` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7032: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `glossary_category` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7033: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `glossary_term` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7034: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `glossary` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7035: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `lake` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7037: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `task` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7038: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `zone` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7130: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7146: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--glossary` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7147: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--lake` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7149: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--zone` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7150: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `aspect_type` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7151: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7152: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `datascan` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7153: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `entry_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7154: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `entry_type` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7155: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `entry` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7156: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `glossary_category` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7157: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `glossary_term` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7158: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `glossary` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7159: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `job` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7160: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `lake` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7161: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `metadata_job` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7162: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `task` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7163: Fig.Option = {
  name: "--location",
  description:
    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `zone` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7647: Fig.Option = {
  name: "--max-job-execution-lifetime",
  description: "The maximum duration before the job execution expires",
  args: {
    name: "MAX_JOB_EXECUTION_LIFETIME",
    description: "String",
    suggestions: [],
  },
};
const flag7749: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
};
const flag7753: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
};
const flag7844: Fig.Option = {
  name: "--metastore-service",
  description:
    "A relative reference to the Dataproc Metastore\n       (https://cloud.google.com/dataproc-metastore/docs) service instance into\n       which metadata will be published. This is of the form:\n       `projects/{project_number}/locations/{location_id}/services/{service_id}`\n       where the location matches the location of the lake",
  args: { name: "METASTORE_SERVICE", description: "String", suggestions: [] },
};
const flag10554: Fig.Option = {
  name: "--notebook-archive-uris",
  description:
    "Google Cloud Storage URIs of archives to be extracted into the working directory of\neach executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and\n.zip",
  args: { name: "NOTEBOOK_ARCHIVE_URIS", description: "List", suggestions: [] },
};
const flag10555: Fig.Option = {
  name: "--notebook-batch-executors-count",
  description: "Total number of job executors",
  args: {
    name: "NOTEBOOK_BATCH_EXECUTORS_COUNT",
    description: "Int",
    suggestions: [],
  },
};
const flag10556: Fig.Option = {
  name: "--notebook-batch-max-executors-count",
  description:
    "Max configurable executors.\nIf max_executors_count > executors_count, then auto-scaling is enabled",
  args: {
    name: "NOTEBOOK_BATCH_MAX_EXECUTORS_COUNT",
    description: "Int",
    suggestions: [],
  },
};
const flag10557: Fig.Option = {
  name: "--notebook-container-image-java-jars",
  description:
    "A list of Java JARS to add to the classpath.\nValid input includes Cloud Storage URIs to Jar binaries.\nFor example, gs://bucket-name/my/path/to/file.jar",
  args: {
    name: "NOTEBOOK_CONTAINER_IMAGE_JAVA_JARS",
    description: "List",
    suggestions: [],
  },
};
const flag10560: Fig.Option = {
  name: "--notebook-container-image",
  description: "Optional custom container image for the job",
  args: {
    name: "NOTEBOOK_CONTAINER_IMAGE",
    description: "String",
    suggestions: [],
  },
};
const flag10561: Fig.Option = {
  name: "--notebook-file-uris",
  description:
    "Google Cloud Storage URIs of files to be placed in the working directory of each\nexecutor",
  args: { name: "NOTEBOOK_FILE_URIS", description: "List", suggestions: [] },
};
const flag10563: Fig.Option = {
  name: "--notebook-vpc-network-name",
  description:
    "The Cloud VPC network in which the job is run. By default, the Cloud\nVPC network named Default within the project is used",
  args: {
    name: "NOTEBOOK_VPC_NETWORK_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag10564: Fig.Option = {
  name: "--notebook-vpc-network-tags",
  description: "List of network tags to apply to the job",
  args: {
    name: "NOTEBOOK_VPC_NETWORK_TAGS",
    description: "List",
    suggestions: [],
  },
};
const flag10565: Fig.Option = {
  name: "--notebook-vpc-sub-network-name",
  description: "The Cloud VPC sub-network in which the job is run",
  args: {
    name: "NOTEBOOK_VPC_SUB_NETWORK_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag10683: Fig.Option = {
  name: "--on-demand",
  description:
    "If set, the scan runs one-time shortly after data documentation scan creation",
  args: { name: "ON_DEMAND", description: "String", suggestions: [] },
};
const flag10867: Fig.Option = {
  name: "--organization",
  description:
    "The name of encryption config to use.\n+\nTo set the `organization` attribute:\n* provide the argument `encryption_config` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
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
const flag11185: Fig.Option = {
  name: "--paths",
  description:
    'Limits the aspects returned to those associated with the provided paths within the Entry.\nOnly works if the `--view=custom` is selected.\n+\nFor example, if two paths are specified:\n"--paths=property1,property2"\nthen only aspects on these paths will be returned.\n+\nTo return aspects without any path, the empty (root) path can be specified. For this "." can be\nused. For example, when "--paths=.,property1" are specified, then only aspects on the path\n"property1" and on the entry itself will be returned.\n+\nCan be further constrained by `--aspect-types` argument',
  args: { name: "PATHS", description: "List", suggestions: [] },
};
const flag11321: Fig.Option = {
  name: "--platform",
  description: "The platform that Entries of this type belongs to",
  args: { name: "PLATFORM", description: "String", suggestions: [] },
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
const flag12556: Fig.Option = {
  name: "--remove-aspects",
  description:
    "List of Aspect keys, identifying Aspects to remove from the entry.\n+\nKeys are in the format ``ASPECT_TYPE@PATH'', or just ``ASPECT_TYPE'', if\nthe Aspect is attached to an entry itself rather than to a specific\ncolumn defined in the schema.\n+\n``ASPECT_TYPE'' is expected to be in a format\n``PROJECT_ID.LOCATION.ASPECT_TYPE_ID'' or a wildcard `*`, which targets\nall aspect types.\n+\n``PATH'' can be either empty (which means a 'root' path, such that\nAspect is attached to the entry itself), point to a specific column\ndefined in the schema (for example: `Schema.some_column`) or a wildcard\n`*` (target all paths).\n+\n``ASPECT_TYPE'' and ``PATH'' cannot be both specified as wildcards `*`.\n+\nIf both `--update-aspects` and `--remove-aspects` flags\nare specified, and the same aspect key is used in both flags, then\n`--update-aspects` takes precedence, and such an aspect will be\nupdated and not removed",
  args: { name: "ASPECT_TYPE@PATH", description: "List", suggestions: [] },
};
const flag12894: Fig.Option = {
  name: "--required-aspects",
  description: "Required aspect type for the entry type",
  args: { name: "REQUIRED_ASPECTS", description: "Dict", suggestions: [] },
};
const flag13011: Fig.Option = {
  name: "--resource-read-access-mode",
  description:
    "Read access mode. _RESOURCE_READ_ACCESS_MODE_ must be one of:\n+\n*DIRECT*::: Data is accessed directly using storage APIs\n*MANAGED*::: Data is accessed through a managed interface using BigQuery APIs.\n:::\n+",
  args: {
    name: "RESOURCE_READ_ACCESS_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
    suggestions: ["DIRECT", "MANAGED"],
  },
};
const flag13132: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13133: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13204: Fig.Option = {
  name: "--row-filter",
  description: "A filter applied to all rows in a single data profile scan job",
  args: { name: "ROW_FILTER", description: "String", suggestions: [] },
};
const flag13277: Fig.Option = {
  name: "--sampling-percent",
  description:
    "The percentage of the records to be selected from the dataset for data profile scan",
  args: { name: "SAMPLING_PERCENT", description: "String", suggestions: [] },
};
const flag13312: Fig.Option = {
  name: "--schedule",
  description:
    'Cron schedule (https://en.wikipedia.org/wiki/Cron) for running scans periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, `CRON_TZ=America/New_York 1 * * * *` or `TZ=America/New_York 1 * * * *`. This field is required for RECURRING scans',
  args: { name: "SCHEDULE", description: "String", suggestions: [] },
};
const flag13390: Fig.Option = {
  name: "--secondary-project",
  description:
    "The identifier of the project where the BigQuery dataset is located",
  args: { name: "SECONDARY_PROJECT", description: "String", suggestions: [] },
};
const flag13519: Fig.Option = {
  name: "--service-account",
  description: "Service account email to run the scan as",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14197: Fig.Option = {
  name: "--spark-archive-uris",
  description:
    "Google Cloud Storage URIs of archives to be extracted into the working directory of\neach executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and\n.zip",
  args: { name: "SPARK_ARCHIVE_URIS", description: "List", suggestions: [] },
};
const flag14199: Fig.Option = {
  name: "--spark-file-uris",
  description:
    "Google Cloud Storage URIs of files to be placed in the working directory of each\nexecutor",
  args: { name: "SPARK_FILE_URIS", description: "List", suggestions: [] },
};
const flag14202: Fig.Option = {
  name: "--spark-main-jar-file-uri",
  description:
    "The Google Cloud Storage URI of the jar file that contains the main class.\nThe execution args are passed in as a sequence of named process\narguments (`--key=value`)",
  args: {
    name: "SPARK_MAIN_JAR_FILE_URI",
    description: "String",
    suggestions: [],
  },
};
const flag14203: Fig.Option = {
  name: "--spark-python-script-file",
  description:
    "The Google Cloud Storage URI of the main Python file to use as the driver. Must\nbe a .py file",
  args: {
    name: "SPARK_PYTHON_SCRIPT_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag14204: Fig.Option = {
  name: "--spark-sql-script-file",
  description:
    "A reference to a query file. This can be the Google Cloud Storage URI of the query file\nor it can the path to a SqlScript Content",
  args: {
    name: "SPARK_SQL_SCRIPT_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag14205: Fig.Option = {
  name: "--spark-sql-script",
  description: "The SQL query text",
  args: { name: "SPARK_SQL_SCRIPT", description: "String", suggestions: [] },
};
const flag14445: Fig.Option = {
  name: "--storage-exclude-patterns",
  description:
    "List of patterns that identify the data to exclude during discovery. These patterns are interpreted as glob patterns used to match object names in the Cloud Storage bucket. Exclude patterns will be applied before include patterns",
  args: { name: "PATTERN", description: "List", suggestions: [] },
};
const flag14446: Fig.Option = {
  name: "--storage-include-patterns",
  description:
    "List of patterns that identify the data to include during discovery when only a subset of the data should be considered. These patterns are interpreted as glob patterns used to match object names in the Cloud Storage bucket",
  args: { name: "PATTERN", description: "List", suggestions: [] },
};
const flag14590: Fig.Option = {
  name: "--system",
  description: "The system that Entries of this type belongs to",
  args: { name: "SYSTEM", description: "String", suggestions: [] },
};
const flag14782: Fig.Option = {
  name: "--task",
  description:
    "Identifier of the Dataplex task resource.\n+\n\nTo set the `task` attribute:\n* provide the argument `job` on the command line with a fully specified name;\n* provide the argument `--task` on the command line",
  args: { name: "TASK", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14999: Fig.Option = {
  name: "--trigger-disabled",
  description:
    "Prevent the task from executing.\nThis does not cancel already running tasks. It is intended to temporarily\ndisable RECURRING tasks",
};
const flag15005: Fig.Option = {
  name: "--trigger-max-retires",
  description:
    "Number of retry attempts before aborting.\nSet to zero to never attempt to retry a failed task",
  args: { name: "TRIGGER_MAX_RETIRES", description: "Int", suggestions: [] },
};
const flag15008: Fig.Option = {
  name: "--trigger-schedule",
  description:
    "Cron schedule (https://en.wikipedia.org/wiki/Cron) for running\ntasks periodically",
  args: { name: "TRIGGER_SCHEDULE", description: "String", suggestions: [] },
};
const flag15022: Fig.Option = {
  name: "--ttl-after-scan-completion",
  description:
    'The time to live for one-time scans. Default value is 24 hours, minimum value is 0 seconds, and maximum value is 365 days. The time is calculated from the data scan job completion time. If value is set as 0 seconds, the scan will be immediately deleted upon job completion, regardless of whether the job succeeded or failed. The value should be a number followed by a unit suffix "s". Example: "100s" for 100 seconds. The argument is only valid when --one-time is set',
  args: {
    name: "TTL_AFTER_SCAN_COMPLETION",
    description: "String",
    suggestions: [],
  },
};
const flag15023: Fig.Option = {
  name: "--ttl-after-scan-completion",
  description:
    'The time to live for one-time scans. Default value is 24 hours, minimum value is 0 seconds, and maximum value is 365 days. The time is calculated from the data scan job completion time. If value is set as 0 seconds, the scan will be immediately deleted upon job completion, regardless of whether the job succeeded or failed. The value should be a number followed by a unit suffix "s". Example: "100s" for 100 seconds.The argument is only valid when --one-time is set',
  args: {
    name: "TTL_AFTER_SCAN_COMPLETION",
    description: "String",
    suggestions: [],
  },
};
const flag15044: Fig.Option = {
  name: "--type-aliases",
  description: "Indicates the class this Entry Type belongs to",
  args: { name: "TYPE_ALIASES", description: "List", suggestions: [] },
};
const flag15132: Fig.Option = {
  name: "--update-aspects",
  description:
    'Path to a YAML or JSON file containing Aspects to add or update.\n+\nWhen this flag is specified, only Aspects referenced in the file are\ngoing to be added or updated. Specifying this flag does not remove any\nAspects from the entry. In other words, specifying this flag will not\nlead to a full replacement of Aspects with a contents of the provided\nfile.\n+\nContent of the file contains a map, where keys are in the format\n``ASPECT_TYPE@PATH\'\', or just ``ASPECT_TYPE\'\', if the Aspect is attached\nto an entry itself rather than to a specific column defined in the\nschema.\n+\nValues in the map represent Aspect\'s content, which must conform to a\ntemplate defined for a given ``ASPECT_TYPE\'\'. Each Aspect will be replaced\nfully by the provided content. That means data in the Aspect will be\nreplaced and not merged with existing contents of that Aspect in the Entry.\n+\n``ASPECT_TYPE\'\' is expected to be in a format\n``PROJECT_ID.LOCATION.ASPECT_TYPE_ID\'\'.\n+\n``PATH\'\' can be either empty (which means a \'root\' path, such that Aspect\nis attached to the entry itself) or point to a specific column defined\nin the schema. For example: `Schema.some_column`.\n+\nExample YAML format:\n+\n```\n  project-id1.us-central1.my-aspect-type1:\n    data:\n      aspectField1: someValue\n      aspectField2: someOtherValue\n  project-id2.us-central1.my-aspect-type2@Schema.column1:\n    data:\n      aspectField3: someValue3\n```\n+\nExample JSON format:\n+\n```\n  {\n    "project-id1.us-central1.my-aspect-type1": {\n      "data": {\n        "aspectField1": "someValue",\n        "aspectField2": "someOtherValue"\n      }\n    },\n    "project-id2.us-central1.my-aspect-type2@Schema.column1": {\n      "data": {\n        "aspectField3": "someValue3"\n      }\n    }\n  }\n```\n+\n\nIf both `--update-aspects` and `--remove-aspects` flags\nare specified, and the same aspect key is used in both flags, then\n`--update-aspects` takes precedence, and such an aspect will be\nupdated and not removed',
  args: {
    name: "YAML_OR_JSON_FILE",
    description: "Googlecloudsdk.command_lib.dataplex.parsers:ParseAspects",
    suggestions: [],
  },
};
const flag15249: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
};
const flag15303: Fig.Option = {
  name: "--use-user-credential",
  description: "If set, the scan runs with the caller's credential",
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15385: Fig.Option = {
  name: "--validate-only",
  description: "Validate the create action, but don't actually perform it",
};
const flag15393: Fig.Option = {
  name: "--validate-only",
  description: "Validate the update action, but don't actually perform it",
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
const flag15443: Fig.Option = {
  name: "--view",
  description:
    "Controls which parts of an entry are to be returned. _VIEW_ must be one of:\n+\n*all*::: Returns all aspects.\nIf the number of aspects would exceed 100, the first 100 will be returned.\n+\n*basic*::: Returns entry only, without aspects.\n*custom*::: Returns aspects filtered based on `--aspect-types` AND `--paths` arguments specified.\nWhen used, at least one of `--aspect-types` and `--paths` arguments must be specified.\nIf the number of aspects would exceed 100, the first 100 will be returned.\n+\n*full*::: Default value. Returns all required aspects, as well as the keys of all non-required aspects.\n+\n:::\n+",
  args: {
    name: "VIEW",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["all", "basic", "custom", "full"],
  },
};
const flag15515: Fig.Option = {
  name: "--vpc-network-name",
  description:
    "The Cloud VPC network in which the job is run. By default, the Cloud\nVPC network named Default within the project is used",
  args: { name: "VPC_NETWORK_NAME", description: "String", suggestions: [] },
};
const flag15516: Fig.Option = {
  name: "--vpc-network-tags",
  description: "List of network tags to apply to the job",
  args: { name: "VPC_NETWORK_TAGS", description: "List", suggestions: [] },
};
const flag15521: Fig.Option = {
  name: "--vpc-sub-network-name",
  description: "The Cloud VPC sub-network in which the job is run",
  args: {
    name: "VPC_SUB_NETWORK_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag15801: Fig.Option = {
  name: "--zone",
  description:
    "The identifier of the Dataplex zone resource.\n+\nTo set the `zone` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15835: Fig.Option = {
  name: "--zone",
  description:
    "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15837: Fig.Option = {
  name: "--zone",
  description:
    "Identifier of the Dataplex zone resource.\n+\n\nTo set the `zone` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "dataplex",
  description: "Manage Dataplex resources",
  subcommands: [
    {
      name: "aspect-types",
      description: "Manage Dataplex Aspect Types",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Aspect Type",
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
            flag7026,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Aspect Type",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--data-classification",
              description:
                "Data classification of the Aspect Type. _DATA_CLASSIFICATION_ must be (only one value is supported): *METADATA_AND_DATA*",
              args: {
                name: "DATA_CLASSIFICATION",
                description: "String",
                suggestions: ["METADATA_AND_DATA"],
              },
            },
            flag3184,
            flag3713,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7026,
            flag7356,
            {
              name: "--metadata-template-file-name",
              description:
                "The name of the JSON or YAML file to define Metadata Template",
              args: {
                name: "METADATA_TEMPLATE_FILE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Aspect Type",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description: "etag for the Aspect Type you want to delete",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7150,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex Aspect Type",
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
            flag7150,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Aspect Type IAM policy",
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
            flag7150,
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
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex Aspect Types",
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
            flag7130,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a Dataplex Aspect Type",
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
            flag7026,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Aspect Type as defined in a JSON or YAML file",
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
            flag7026,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ASPECT_TYPE",
              description:
                "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex Aspect Type",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3184,
            flag3713,
            {
              name: "--etag",
              description: "etag value for particular Aspect Type",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7026,
            flag7356,
            {
              name: "--metadata-template-file-name",
              description:
                "The name of the JSON or YAML file to define Metadata Template",
              args: {
                name: "METADATA_TEMPLATE_FILE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15393,
            flag15424,
          ],
          args: {
            name: "ASPECT_TYPE",
            description:
              "ID of the aspect type or fully qualified identifier for the aspect type.\n+\nTo set the `aspect_type` attribute:\n* provide the argument `aspect_type` on the command line",
          },
        },
      ],
    },
    {
      name: "assets",
      description: "Manage Dataplex Asset resources",
      subcommands: [
        {
          name: "actions",
          description: "Manage Dataplex asset resource actions",
          subcommands: [
            {
              name: "list",
              description: "List Dataplex asset actions",
              options: [
                flag42,
                flag46,
                {
                  name: "--asset",
                  description:
                    "ID of the asset or fully qualified identifier for the asset.\n+\nTo set the `asset` attribute:\n* provide the argument `--asset` on the command line",
                  args: {
                    name: "ASSET",
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
                {
                  name: "--lake",
                  description:
                    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `--asset` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
                  args: {
                    name: "LAKE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6515,
                {
                  name: "--location",
                  description:
                    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--asset` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
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
                {
                  name: "--zone",
                  description:
                    "Identifier of the Dataplex zone resource.\n+\n\nTo set the `zone` attribute:\n* provide the argument `--asset` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
                  args: {
                    name: "ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "add-iam-policy-binding",
          description: "Adds IAM policy binding to a Dataplex asset resource",
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
            flag6450,
            flag7027,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
            flag15801,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex asset resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2594,
            flag2595,
            flag2598,
            flag2600,
            flag3196,
            flag3649,
            flag3650,
            flag3651,
            flag3652,
            {
              name: "--display-name",
              description: "Display name of the asset",
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
            flag6132,
            flag6135,
            flag6413,
            flag6450,
            flag7027,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--resource-name",
              description:
                '"Relative name of the cloud resource that contains the data that\n                 is being managed within a lake. For example:\n                 `projects/{project_number}/buckets/{bucket_id}` or  `projects/{project_number}/datasets/{dataset_id}`',
              args: {
                name: "RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag13011,
            {
              name: "--resource-type",
              description:
                "Type. _RESOURCE_TYPE_ must be one of:\n+\n*BIGQUERY_DATASET*::: BigQuery Dataset\n*STORAGE_BUCKET*::: Cloud Storage Bucket\n:::\n+",
              args: {
                name: "RESOURCE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["BIGQUERY_DATASET", "STORAGE_BUCKET"],
              },
            },
            flag14975,
            flag15315,
            flag15385,
            flag15424,
            flag15801,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex asset resource",
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
            flag6457,
            flag7151,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15837,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex asset resource",
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
            flag6457,
            flag7151,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15837,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex asset resource",
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
            flag6457,
            flag6515,
            flag7151,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
            flag15837,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex asset resources",
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
            flag6456,
            flag6515,
            flag7149,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
            flag15835,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex asset resource",
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
            flag6450,
            flag7027,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
            flag15801,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex asset as defined in a JSON or YAML file",
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
            flag6450,
            flag7027,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15801,
          ],
          args: [
            {
              name: "ASSET",
              description:
                "ID of the assets or fully qualified identifier for the assets.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex asset resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2594,
            flag2595,
            flag2598,
            flag2600,
            flag3196,
            flag3649,
            flag3650,
            flag3651,
            flag3652,
            flag3708,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6132,
            flag6135,
            flag6413,
            flag6450,
            flag7027,
            flag7356,
            flag11637,
            flag11946,
            flag13011,
            flag14975,
            flag15315,
            flag15393,
            flag15424,
            flag15801,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the assets or fully qualified identifier for the assets.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
      ],
    },
    {
      name: "context",
      description: "Manage Dataplex Context",
      subcommands: [
        {
          name: "lookup",
          description:
            "Looks up metadata that can be used as context by agents",
          options: [
            flag42,
            flag46,
            {
              name: "--all-schema-fields",
              description: "Includes all schema fields in the context",
            },
            flag1201,
            flag2292,
            {
              name: "--context-format",
              description:
                "The output format of the command. _CONTEXT_FORMAT_ must be one of: *json*, *xml*, *yaml*",
              args: {
                name: "CONTEXT_FORMAT",
                description: "String",
                suggestions: ["json", "xml", "yaml"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7130,
            flag7356,
            {
              name: "--options",
              description:
                'Additional options for the command. This can be provided as a JSON string.\nExample: --options=\'{"key": "value"}\'',
              args: { name: "OPTIONS", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--resources",
              description:
                "The identifier describing the resource, for example:\n`projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}`",
              args: { name: "RESOURCES", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "datascans",
      description: "Manage Dataplex Datascan",
      subcommands: [
        {
          name: "create",
          description: "Manage Dataplex Datascans creation",
          subcommands: [
            {
              name: "data-discovery",
              description: "Create a Dataplex data discovery scan job",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--bigquery-publishing-connection",
                  description:
                    "BigQuery connection to use for auto discovering cloud resource bucket to BigLake tables in format `projects/{project_id}/locations/{location_id}/connections/{connection_id}`. Connection is required for `BIGLAKE` BigQuery publishing table type",
                  args: {
                    name: "BIGQUERY_PUBLISHING_CONNECTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1143,
                flag1144,
                {
                  name: "--bigquery-publishing-table-type",
                  description:
                    "BigQuery table type to discover the cloud resource bucket. Can be either `EXTERNAL` or `BIGLAKE`. If not specified, the table type will be set to `EXTERNAL`. _BIGQUERY_PUBLISHING_TABLE_TYPE_ must be one of:\n+\n*BIGLAKE*::: Cloud Storage bucket is discovered to BigQuery BigLake tables.\n*EXTERNAL*::: Default value. Cloud Storage bucket is discovered to BigQuery External tables.\n:::\n+",
                  args: {
                    name: "BIGQUERY_PUBLISHING_TABLE_TYPE",
                    description: "String",
                    suggestions: ["BIGLAKE", "EXTERNAL"],
                  },
                },
                flag1201,
                flag2292,
                flag2592,
                flag2596,
                flag2597,
                flag2599,
                flag2602,
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource bucket that contains the data for the data discovery scan, of the form: `//storage.googleapis.com/projects/{project_id_or_number}/buckets/{bucket_id}`",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data discovery scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data discovery scan",
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
                flag6133,
                flag6134,
                flag6413,
                flag7028,
                flag7356,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data discovery scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data discovery scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                flag11637,
                flag11946,
                flag13312,
                flag14445,
                flag14446,
                flag14975,
                flag15023,
                flag15315,
                flag15385,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
            {
              name: "data-documentation",
              description: "Create a Dataplex data documentation scan job",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--data-source-entity",
                  description:
                    "The Dataplex entity that contains the data for the data documentation scan, of the form: projects/{project_id_or_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. Currently only BigQuery table is supported",
                  args: {
                    name: "DATA_SOURCE_ENTITY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource that contains the data for the data documentation scan, of the form: //bigquery.{universe_domain}/projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3202,
                flag3723,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7028,
                flag7356,
                flag10683,
                {
                  name: "--one-time",
                  description:
                    "If set, the data documentation scan runs once, and is auto-deleted once the ttl_after_scan_completion expires",
                },
                flag11637,
                flag11946,
                {
                  name: "--schedule",
                  description:
                    'Cron schedule (https://en.wikipedia.org/wiki/Cron) for running scans periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, `CRON_TZ=America/New_York 1 * * * *` or `TZ=America/New_York 1 * * * *`. This field is required for RECURRING scans. The argument is only valid when --on-demand is not set',
                  args: {
                    name: "SCHEDULE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15022,
                flag15315,
                flag15385,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
            {
              name: "data-profile",
              description: "Create a Dataplex data profile scan job",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2706,
                {
                  name: "--data-source-entity",
                  description:
                    "Dataplex entity that contains the data for the data profile scan, of the form: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`",
                  args: {
                    name: "DATA_SOURCE_ENTITY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource that contains the data for the data profile scan, of the form: `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data profile scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data profile scan",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4059,
                flag4595,
                {
                  name: "--export-results-table",
                  description:
                    "path to the resource table to export data profile scan results, of the form: `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`. The table will be created if not present",
                  args: {
                    name: "EXPORT_RESULTS_TABLE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5739,
                flag5769,
                flag6413,
                flag7028,
                flag7356,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data profile scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data profile scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                flag11637,
                flag11946,
                flag13204,
                flag13277,
                flag13312,
                flag13519,
                flag14975,
                flag15023,
                flag15303,
                flag15315,
                flag15385,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
            {
              name: "data-quality",
              description: "Create a Dataplex data quality scan job",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--data-quality-spec-file",
                  description:
                    "Path to the JSON/YAML file containing the spec for the data quality scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataQualitySpec The YAML representation reference: https://cloud.google.com/dataplex/docs/use-auto-data-quality#create-scan-using-gcloud",
                  args: {
                    name: "DATA_QUALITY_SPEC_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--data-source-entity",
                  description:
                    "Dataplex entity that contains the data for the data quality scan, of the form: `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`",
                  args: {
                    name: "DATA_SOURCE_ENTITY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--data-source-resource",
                  description:
                    "Fully-qualified service resource name of the cloud resource that contains the data for the data quality scan, of the form: `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`",
                  args: {
                    name: "DATA_SOURCE_RESOURCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data quality scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data quality scan",
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
                flag5769,
                flag6413,
                flag7028,
                flag7356,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data quality scan creation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--one-time",
                  description:
                    "If set, the data quality scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                flag11637,
                flag11946,
                flag13312,
                flag13519,
                flag14975,
                flag15023,
                flag15303,
                flag15315,
                flag15385,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Dataplex Datascan resource",
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
            flag7152,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `datascan` attribute:\n* provide the argument `datascan` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex datascan resource",
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
            flag7152,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--view",
              description:
                "Displays spec data based on the argument value. The default view is 'basic'. _VIEW_ must be one of:\n+\n*basic*::: Does not include spec data in response.\n+\n*full*::: Includes spec data in response.\n+\n:::\n+",
              args: {
                name: "VIEW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "full"],
              },
            },
          ],
          args: {
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `datascan` attribute:\n* provide the argument `datascan` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex datascan resource",
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
            flag7152,
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
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `datascan` attribute:\n* provide the argument `datascan` on the command line",
          },
        },
        {
          name: "jobs",
          description: "Manage Dataplex Datascan Jobs service",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Dataplex datascan job",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--datascan",
                  description:
                    "Datascan ID of the Dataplex datascan resource.\n+\n\nTo set the `datascan` attribute:\n* provide the argument `job` on the command line with a fully specified name;\n* provide the argument `--datascan` on the command line",
                  args: {
                    name: "DATASCAN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7159,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--view",
                  description:
                    "Displays spec and result data based on the argument value. The default view is 'basic'. _VIEW_ must be one of:\n+\n*basic*::: Does not include spec and result data in response.\n+\n*full*::: Includes spec and result data in response.\n+\n:::\n+",
                  args: {
                    name: "VIEW",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["basic", "full"],
                  },
                },
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "list",
              description: "List job runs of a Dataplex datascan resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--datascan",
                  description:
                    "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `datascan` attribute:\n* provide the argument `--datascan` on the command line",
                  args: {
                    name: "DATASCAN",
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
                    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--datascan` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
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
          name: "list",
          description: "List Dataplex Datascan resources under a project",
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
            flag7130,
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
          name: "run",
          description: "Run a Dataplex DataScan resource",
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
            flag7152,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASCAN",
            description:
              "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `datascan` attribute:\n* provide the argument `datascan` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex datascan as defined in a JSON or YAML file",
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
            flag7028,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DATASCAN",
              description:
                "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Manage Dataplex Datascans updation",
          subcommands: [
            {
              name: "data-discovery",
              description: "Update a Dataplex data discovery scan job",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--bigquery-publishing-connection",
                  description:
                    "BigQuery connection to use for auto discovering cloud resource bucket to BigLake tables. Connection is required for `BIGLAKE`BigQuery publishing table type",
                  args: {
                    name: "BIGQUERY_PUBLISHING_CONNECTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1143,
                flag1144,
                {
                  name: "--bigquery-publishing-table-type",
                  description:
                    "BigQuery table type to discover the cloud resource bucket. Can be either `EXTERNAL` or `BIGLAKE`. If not specified, the table type will be set to `EXTERNAL`",
                  args: {
                    name: "BIGQUERY_PUBLISHING_TABLE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag2592,
                flag2596,
                flag2597,
                flag2599,
                flag2602,
                {
                  name: "--description",
                  description: "Description of the data discovery scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data discovery scan",
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
                flag6133,
                flag6134,
                flag6413,
                flag7028,
                flag7356,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data discovery scan updation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13312,
                flag14445,
                flag14446,
                flag14975,
                flag15315,
                flag15393,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
            {
              name: "data-documentation",
              description: "Update a Dataplex data documentation scan job",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3202,
                flag3723,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7028,
                flag7356,
                flag10683,
                {
                  name: "--one-time",
                  description:
                    "If set, the data documentation scan runs once, and auto deleted once the ttl_after_scan_completion expires",
                },
                flag11637,
                flag11946,
                flag13312,
                flag14975,
                flag15022,
                flag15315,
                flag15393,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
            {
              name: "data-profile",
              description: "Update a Dataplex data profile scan job",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2706,
                {
                  name: "--description",
                  description: "Description of the data profile scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data profile scan",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4059,
                flag4595,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5739,
                flag6413,
                flag7028,
                flag7356,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data profile scan updation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13204,
                flag13277,
                flag13312,
                flag14975,
                flag15315,
                flag15393,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
            {
              name: "data-quality",
              description: "Update a Dataplex data quality scan job",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--data-quality-spec-file",
                  description:
                    "Path to the JSON/YAML file containing the spec for the data quality scan. The JSON representation reference: https://cloud.google.com/dataplex/docs/reference/rest/v1/DataQualitySpec The YAML representation reference: https://cloud.google.com/dataplex/docs/use-auto-data-quality#create-scan-using-gcloud",
                  args: {
                    name: "DATA_QUALITY_SPEC_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--description",
                  description: "Description of the data quality scan",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name of the data quality scan",
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
                flag6413,
                flag7028,
                flag7356,
                {
                  name: "--on-demand",
                  description:
                    "If set, the scan runs one-time shortly after data quality scan updation",
                  args: {
                    name: "ON_DEMAND",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13312,
                flag14975,
                flag15315,
                flag15393,
                flag15424,
              ],
              args: {
                name: "DATASCAN",
                description:
                  "ID of the datascan or fully qualified identifier for the datascan.\n+\nTo set the `dataScans` attribute:\n* provide the argument `datascan` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "encryption-config",
      description: "Manage Dataplex encryption configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Dataplex encryption config resource",
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
              name: "--key",
              description: "The KMS key to use for encryption",
              args: { name: "KEY", description: "String", suggestions: [] },
            },
            flag7029,
            flag7356,
            flag10867,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENCRYPTION_CONFIG",
            description:
              "ID of the encryption config or fully qualified identifier for the encryption config.\n+\nTo set the `encryption_config` attribute:\n* provide the argument `encryption_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an EncryptionConfig",
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
                "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `encryption_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "Name of the Cloud organization to use.\n+\n\nTo set the `organization` attribute:\n* provide the argument `encryption_config` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
              args: {
                name: "ORGANIZATION",
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
            name: "ENCRYPTION_CONFIG",
            description:
              "ID of the encryption config or fully qualified identifier for the encryption config.\n+\nTo set the `encryption_config` attribute:\n* provide the argument `encryption_config` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an Encryption Config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--enable-metastore-encryption",
              description:
                "Helps user to explicitly enable cmek encryption for dataplex metadata storage",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7029,
            flag7356,
            flag10867,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENCRYPTION_CONFIG",
            description:
              "ID of the encryption config or fully qualified identifier for the encryption config.\n+\nTo set the `encryption_config` attribute:\n* provide the argument `encryption_config` on the command line",
          },
        },
      ],
    },
    {
      name: "entries",
      description: "Manage Dataplex Catalog Entries resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Dataplex Entry resource",
          options: [
            flag42,
            flag46,
            {
              name: "--aspects",
              description:
                'Path to a YAML or JSON file containing Aspects to add or update.\n+\nWhen this flag is specified, only Aspects referenced in the file are\ngoing to be added or updated. Specifying this flag does not remove any\nAspects from the entry. In other words, specifying this flag will not\nlead to a full replacement of Aspects with a contents of the provided\nfile.\n+\nContent of the file contains a map, where keys are in the format\n``ASPECT_TYPE@PATH\'\', or just ``ASPECT_TYPE\'\', if the Aspect is attached\nto an entry itself rather than to a specific column defined in the\nschema.\n+\nValues in the map represent Aspect\'s content, which must conform to a\ntemplate defined for a given ``ASPECT_TYPE\'\'. Each Aspect will be replaced\nfully by the provided content. That means data in the Aspect will be\nreplaced and not merged with existing contents of that Aspect in the Entry.\n+\n``ASPECT_TYPE\'\' is expected to be in a format\n``PROJECT_ID.LOCATION.ASPECT_TYPE_ID\'\'.\n+\n``PATH\'\' can be either empty (which means a \'root\' path, such that Aspect\nis attached to the entry itself) or point to a specific column defined\nin the schema. For example: `Schema.some_column`.\n+\nExample YAML format:\n+\n```\n  project-id1.us-central1.my-aspect-type1:\n    data:\n      aspectField1: someValue\n      aspectField2: someOtherValue\n  project-id2.us-central1.my-aspect-type2@Schema.column1:\n    data:\n      aspectField3: someValue3\n```\n+\nExample JSON format:\n+\n```\n  {\n    "project-id1.us-central1.my-aspect-type1": {\n      "data": {\n        "aspectField1": "someValue",\n        "aspectField2": "someOtherValue"\n      }\n    },\n    "project-id2.us-central1.my-aspect-type2@Schema.column1": {\n      "data": {\n        "aspectField3": "someValue3"\n      }\n    }\n  }\n```',
              args: {
                name: "YAML_OR_JSON_FILE",
                description:
                  "Googlecloudsdk.command_lib.dataplex.parsers:ParseAspects",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4444,
            {
              name: "--entry-source-ancestors",
              description:
                "Information about individual items in the hierarchy of an Entry",
              args: { name: "ANCESTORS", description: "List", suggestions: [] },
            },
            flag4448,
            flag4449,
            flag4450,
            flag4451,
            flag4452,
            flag4453,
            flag4454,
            {
              name: "--entry-source-update-time",
              description:
                "The update date and time of the resource in the source system",
              args: {
                name: "DATE_TIME",
                description:
                  "Googlecloudsdk.command_lib.dataplex.parsers:IsoDateTime",
                suggestions: [],
              },
            },
            {
              name: "--entry-type",
              description:
                "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `--entry-type` on the command line",
              args: {
                name: "ENTRY_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--entry-type-location",
              description:
                "The location of the EntryType resource.\n+\nTo set the `entry-type-location` attribute:\n* provide the argument `--entry-type` on the command line with a fully specified name;\n* provide the argument `--entry-type-location` on the command line",
              args: {
                name: "ENTRY_TYPE_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--entry-type-project",
              description:
                "The project of the EntryType resource.\n+\nTo set the `entry-type-project` attribute:\n* provide the argument `--entry-type` on the command line with a fully specified name;\n* provide the argument `--entry-type-project` on the command line",
              args: {
                name: "ENTRY_TYPE_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--fully-qualified-name",
              description:
                "A name for the entry that can reference it in an external system. The maximum size of the field is 4000 characters",
              args: {
                name: "FULLY_QUALIFIED_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            {
              name: "--parent-entry",
              description:
                "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `--parent-entry` on the command line",
              args: {
                name: "PARENT_ENTRY",
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
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4444,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex entry",
          options: [
            flag42,
            flag46,
            flag694,
            flag1201,
            flag2292,
            flag4444,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            flag11185,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15443,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex entries",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--entry-group",
              description:
                "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `--entry-group` on the command line",
              args: {
                name: "ENTRY_GROUP",
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
                "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--entry-group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
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
          name: "lookup",
          description: "Lookup a Dataplex entry",
          options: [
            flag42,
            flag46,
            flag694,
            flag1201,
            flag2292,
            flag4444,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            flag11185,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15443,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "modify",
          description: "Modify a Dataplex Entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1641,
            flag1642,
            flag1643,
            flag1644,
            flag1645,
            flag1646,
            flag1647,
            flag1670,
            flag2292,
            flag4444,
            flag4448,
            flag4449,
            flag4450,
            flag4451,
            flag4452,
            flag4453,
            flag4454,
            flag4456,
            flag4900,
            flag4902,
            flag5091,
            flag5127,
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            flag11637,
            flag11946,
            flag12556,
            flag14975,
            flag15132,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "remove-aspects",
          description: "Remove aspects from a Dataplex Entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4444,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--keys",
              description:
                "List of Aspect keys, identifying Aspects to remove from the entry.\n+\nKeys are in the format ``ASPECT_TYPE@PATH'', or just ``ASPECT_TYPE'', if\nthe Aspect is attached to an entry itself rather than to a specific\ncolumn defined in the schema.\n+\n``ASPECT_TYPE'' is expected to be in a format\n``PROJECT_ID.LOCATION.ASPECT_TYPE_ID'' or a wildcard `*`, which targets\nall aspect types.\n+\n``PATH'' can be either empty (which means a 'root' path, such that\nAspect is attached to the entry itself), point to a specific column\ndefined in the schema (for example: `Schema.some_column`) or a wildcard\n`*` (target all paths).\n+\n``ASPECT_TYPE'' and ``PATH'' cannot be both specified as wildcards `*`",
              args: {
                name: "ASPECT_TYPE@PATH",
                description: "List",
                suggestions: [],
              },
            },
            flag7155,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "search",
          description: "Searches for Dataplex entries",
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
              name: "--limit",
              description: "Maximum number of resources",
              args: { name: "LIMIT", description: "Int", suggestions: [] },
            },
            flag7356,
            {
              name: "--order-by",
              description:
                "Specifies the ordering of results, currently supported case-sensitive\nchoices are:\n+\n* `title [asc|desc]`, defaults to ascending if not specified",
              args: {
                name: "ORDER_BY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--page-size",
              description:
                "Maximum number of resources per page. No more than 500",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            flag11946,
            {
              name: "--scope",
              description:
                "The scope under which the search should be operating. Should either be organizations/<org_id> or projects/<project_ref>. If left unspecified, it will default to the organization where the project is located",
              args: { name: "SCOPE", description: "String", suggestions: [] },
            },
            {
              name: "--semantic-search",
              description:
                "Specifies whether the search should understand the meaning and intent behind the query, rather than just matching keywords",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "QUERY",
            description:
              "The query against which entries in scope should be matched",
          },
        },
        {
          name: "update",
          description: "Update a Dataplex Entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1641,
            flag1642,
            flag1643,
            flag1644,
            flag1645,
            flag1646,
            flag1647,
            flag1670,
            flag2292,
            flag4444,
            flag4448,
            flag4449,
            flag4450,
            flag4451,
            flag4452,
            flag4453,
            flag4454,
            flag4456,
            flag4900,
            flag4902,
            flag5091,
            flag5127,
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            flag11637,
            flag11946,
            flag12556,
            flag14975,
            flag15132,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "update-aspects",
          description: "Add or update aspects for a Dataplex Entry",
          options: [
            flag42,
            flag46,
            {
              name: "--aspects",
              description:
                'Path to a YAML or JSON file containing Aspects to add or update.\n+\nWhen this flag is specified, only Aspects referenced in the file are\ngoing to be added or updated. Specifying this flag does not remove any\nAspects from the entry. In other words, specifying this flag will not\nlead to a full replacement of Aspects with a contents of the provided\nfile.\n+\nContent of the file contains a map, where keys are in the format\n``ASPECT_TYPE@PATH\'\', or just ``ASPECT_TYPE\'\', if the Aspect is attached\nto an entry itself rather than to a specific column defined in the\nschema.\n+\nValues in the map represent Aspect\'s content, which must conform to a\ntemplate defined for a given ``ASPECT_TYPE\'\'. Each Aspect will be replaced\nfully by the provided content. That means data in the Aspect will be\nreplaced and not merged with existing contents of that Aspect in the Entry.\n+\n``ASPECT_TYPE\'\' is expected to be in a format\n``PROJECT_ID.LOCATION.ASPECT_TYPE_ID\'\'.\n+\n``PATH\'\' can be either empty (which means a \'root\' path, such that Aspect\nis attached to the entry itself) or point to a specific column defined\nin the schema. For example: `Schema.some_column`.\n+\nExample YAML format:\n+\n```\n  project-id1.us-central1.my-aspect-type1:\n    data:\n      aspectField1: someValue\n      aspectField2: someOtherValue\n  project-id2.us-central1.my-aspect-type2@Schema.column1:\n    data:\n      aspectField3: someValue3\n```\n+\nExample JSON format:\n+\n```\n  {\n    "project-id1.us-central1.my-aspect-type1": {\n      "data": {\n        "aspectField1": "someValue",\n        "aspectField2": "someOtherValue"\n      }\n    },\n    "project-id2.us-central1.my-aspect-type2@Schema.column1": {\n      "data": {\n        "aspectField3": "someValue3"\n      }\n    }\n  }\n```',
              args: {
                name: "YAML_OR_JSON_FILE",
                description:
                  "Googlecloudsdk.command_lib.dataplex.parsers:ParseAspects",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4444,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7155,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
      ],
    },
    {
      name: "entry-groups",
      description: "Manage Dataplex Entry Groups",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Entry Group",
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
            flag7030,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Entry Group",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3186,
            flag3715,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7030,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Entry Group",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description: "etag for the Entry Group you want to delete",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7153,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex Entry Group",
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
            flag7153,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Entry Group IAM policy",
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
            flag7153,
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex Entry Groups",
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
            flag7130,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a Dataplex Entry Group",
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
            flag7030,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Entry Group as defined in a JSON or YAML file",
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
            flag7030,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ENTRY_GROUP",
              description:
                "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `entry_group` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex Entry Group",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3186,
            flag3715,
            {
              name: "--etag",
              description: "etag value for particular Entry Group",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7030,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15393,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
      ],
    },
    {
      name: "entry-types",
      description: "Manage Dataplex Entry Types",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Entry Type",
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
            flag7031,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Entry Type",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3187,
            flag3716,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7031,
            flag7356,
            flag11321,
            flag11637,
            flag11946,
            flag12894,
            flag14590,
            flag14975,
            flag15044,
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Entry Type",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description: "etag for the Entry Type you want to delete",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7154,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex Entry Type",
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
            flag7154,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Entry Type IAM policy",
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
            flag7154,
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
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex Entry Types",
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
            flag7130,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a Dataplex Entry Type",
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
            flag7031,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Entry Type as defined in a JSON or YAML file",
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
            flag7031,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ENTRY_TYPE",
              description:
                "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex Entry Type",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3187,
            flag3716,
            {
              name: "--etag",
              description: "etag value for particular Entry Type",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7031,
            flag7356,
            flag11321,
            flag11637,
            flag11946,
            flag12894,
            flag14590,
            flag14975,
            flag15044,
            flag15315,
            flag15393,
            flag15424,
          ],
          args: {
            name: "ENTRY_TYPE",
            description:
              "ID of the entry type or fully qualified identifier for the entry type.\n+\nTo set the `entry_type` attribute:\n* provide the argument `entry_type` on the command line",
          },
        },
      ],
    },
    {
      name: "glossaries",
      description: "Manage Dataplex glossaries",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex Glossary",
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
            flag7034,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
        {
          name: "categories",
          description: "Manage Dataplex glossary categories",
          subcommands: [
            {
              name: "create",
              description: "Creates a glossary category",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3214,
                {
                  name: "--display-name",
                  description: "Display name of the glossary category",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5340,
                flag5453,
                flag5699,
                flag6413,
                flag7032,
                flag7356,
                {
                  name: "--parent",
                  description:
                    "Immediate parent of the created glossary category",
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category.\n+\nTo set the `glossary_category` attribute:\n* provide the argument `glossary_category` on the command line",
              },
            },
            {
              name: "delete",
              description: "Deletes a glossary category",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5343,
                flag5453,
                flag5699,
                flag7156,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category.\n+\nTo set the `glossary_category` attribute:\n* provide the argument `glossary_category` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describes a glossary category",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5343,
                flag5453,
                flag5699,
                flag7156,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category.\n+\nTo set the `glossary_category` attribute:\n* provide the argument `glossary_category` on the command line",
              },
            },
            {
              name: "list",
              description: "List glossary categories",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5342,
                flag5453,
                flag5699,
                flag6515,
                flag7146,
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
              description: "Updates a glossary category",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3214,
                {
                  name: "--display-name",
                  description: "Display Name of the glossary category",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5340,
                flag5453,
                flag5699,
                flag6413,
                flag7032,
                flag7356,
                {
                  name: "--parent",
                  description:
                    "Immediate parent of the created glossary category",
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_CATEGORY",
                description:
                  "ID of the glossary category or fully qualified identifier for the glossary category.\n+\nTo set the `glossary_category` attribute:\n* provide the argument `glossary_category` on the command line",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a Dataplex Glossary resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3188,
            flag3706,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7034,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex Glossary",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4557,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7158,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Glossary",
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
            flag7158,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Retrieve a Dataplex Glossary IAM policy",
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
            flag7158,
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
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
        {
          name: "list",
          description: "List Glossaries",
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
            flag7130,
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
          name: "remove-iam-policy-binding",
          description: "Removes IAM policy binding from a Dataplex Glossary",
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
            flag7034,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set an IAM policy binding for a Dataplex Glossary as defined in a JSON or YAML file",
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
            flag7034,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "GLOSSARY",
              description:
                "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "terms",
          description: "Manage Dataplex glossary terms",
          subcommands: [
            {
              name: "create",
              description: "Creates a glossary term",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3215,
                flag3736,
                flag4900,
                flag4902,
                flag5091,
                flag5341,
                flag5453,
                flag5699,
                flag6413,
                flag7033,
                flag7356,
                {
                  name: "--parent",
                  description: "Immediate parent of the created glossary term",
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term.\n+\nTo set the `glossary_term` attribute:\n* provide the argument `glossary_term` on the command line",
              },
            },
            {
              name: "delete",
              description: "Deletes a glossary term",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5344,
                flag5453,
                flag5699,
                flag7157,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term.\n+\nTo set the `glossary_term` attribute:\n* provide the argument `glossary_term` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describes a glossary term",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5344,
                flag5453,
                flag5699,
                flag7157,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term.\n+\nTo set the `glossary_term` attribute:\n* provide the argument `glossary_term` on the command line",
              },
            },
            {
              name: "list",
              description: "List glossary terms",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5342,
                flag5453,
                flag5699,
                flag6515,
                flag7146,
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
              description: "Updates a glossary term",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3215,
                flag3736,
                flag4900,
                flag4902,
                flag5091,
                flag5341,
                flag5453,
                flag5699,
                flag6413,
                flag7033,
                flag7356,
                {
                  name: "--parent",
                  description: "Immediate parent of the created glossary term",
                  args: {
                    name: "PARENT",
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
                name: "GLOSSARY_TERM",
                description:
                  "ID of the glossary term or fully qualified identifier for the glossary term.\n+\nTo set the `glossary_term` attribute:\n* provide the argument `glossary_term` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Updates a Dataplex Glossary",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3188,
            flag3706,
            flag4557,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7034,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15393,
            flag15424,
          ],
          args: {
            name: "GLOSSARY",
            description:
              "ID of the glossary or fully qualified identifier for the glossary.\n+\nTo set the `glossary` attribute:\n* provide the argument `glossary` on the command line",
          },
        },
      ],
    },
    {
      name: "lakes",
      description: "Manage Dataplex Lake resources",
      subcommands: [
        {
          name: "actions",
          description: "Manage Dataplex lake resource actions",
          subcommands: [
            {
              name: "list",
              description: "List Dataplex lake actions",
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
                flag6453,
                flag6515,
                flag7147,
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
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex lake resource",
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
            flag7035,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
        {
          name: "authorize",
          description: "Authorize a service agent to manage resources",
          options: [
            flag42,
            flag46,
            {
              name: "--bigquery-dataset-resource",
              description:
                "The identifier of the BigQuery dataset that the service agent will manage",
              args: {
                name: "BIGQUERY_DATASET_RESOURCE",
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
            {
              name: "--project-resource",
              description:
                "The identifier of the project whose resources the service agent will manage",
              args: {
                name: "PROJECT_RESOURCE",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag13390,
            {
              name: "--storage-bucket-resource",
              description:
                "The identifier of the Cloud Storage bucket that the service agent will manage",
              args: {
                name: "STORAGE_BUCKET_RESOURCE",
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
          name: "create",
          description: "Create a Dataplex lake resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the lake",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Display name of the lake",
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
            flag6413,
            flag7035,
            flag7356,
            flag7844,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
        {
          name: "deauthorize",
          description: "Deauthorize a service agent from managing resources",
          options: [
            flag42,
            flag46,
            {
              name: "--bigquery-dataset-resource",
              description:
                "The identifier of the BigQuery dataset that the service agent will no longer manage",
              args: {
                name: "BIGQUERY_DATASET_RESOURCE",
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
            {
              name: "--project-resource",
              description:
                "The identifier of the project whose resources the service agent will no longer manage",
              args: {
                name: "PROJECT_RESOURCE",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag13390,
            {
              name: "--storage-bucket-resource",
              description:
                "The identifier of the Cloud Storage bucket that the service agent will no longer manage",
              args: {
                name: "STORAGE_BUCKET_RESOURCE",
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
          name: "delete",
          description: "Delete a Dataplex lake resource",
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
            flag7160,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lake or fully qualified identifier for the lake.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex lake resource",
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
            flag7160,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lake or fully qualified identifier for the lake.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex lake resource",
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
            flag7160,
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
            name: "LAKE",
            description:
              "ID of the lake or fully qualified identifier for the lake.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex lake resources under a project",
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
            flag7130,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex lake resource",
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
            flag7035,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex lake as defined in a JSON or YAML file",
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
            flag7035,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "LAKE",
              description:
                "ID of the lakes or fully qualified identifier for the lakes.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex lake resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the lake",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag3708,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7035,
            flag7356,
            flag7844,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15393,
            flag15424,
          ],
          args: {
            name: "LAKE",
            description:
              "ID of the lakes or fully qualified identifier for the lakes.\n+\nTo set the `lake` attribute:\n* provide the argument `lake` on the command line",
          },
        },
      ],
    },
    {
      name: "metadata-jobs",
      description: "Manage Dataplex metadata jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Metadata Job run",
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
            flag7161,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "METADATA_JOB",
            description:
              "ID of the metadata job or fully qualified identifier for the metadata job.\n+\nTo set the `metadata_job` attribute:\n* provide the argument `metadata_job` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex Metadata Job",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--export-aspect-types",
              description: "The list of aspect types to export metadata from",
              args: {
                name: "EXPORT_ASPECT_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--export-entry-groups",
              description: "The list of entry groups to export metadata from",
              args: {
                name: "EXPORT_ENTRY_GROUPS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--export-entry-types",
              description: "The list of entry types to export metadata from",
              args: {
                name: "EXPORT_ENTRY_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--export-organization-level",
              description:
                "Whether to export metadata at the organization level",
              args: {
                name: "EXPORT_ORGANIZATION_LEVEL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--export-output-path",
              description: "The Cloud Storage location to export metadata to",
              args: {
                name: "EXPORT_OUTPUT_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--export-projects",
              description: "The list of projects to export metadata from",
              args: {
                name: "EXPORT_PROJECTS",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--import-aspect-sync-mode",
              description:
                "Type. _IMPORT_ASPECT_SYNC_MODE_ must be one of:\n+\n*FULL*::: All resources in the job's scope are modified. If a\n                       resource exists in Dataplex but isn't included in the\n                       metadata import file, the resource is deleted when you\n                       run the metadata job. Use this mode to perform a full\n                       sync of the set of entries in the job scope.\n*INCREMENTAL*::: Only the entries and aspects that are explicitly\n                           included in the metadata import file are modified.\n                           Use this mode to modify a subset of resources while\n                           leaving unreferenced resources unchanged. \n:::\n+",
              args: {
                name: "IMPORT_ASPECT_SYNC_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["FULL", "INCREMENTAL"],
              },
            },
            {
              name: "--import-aspect-types",
              description:
                "The list of aspect types to import metadata jobs into",
              args: {
                name: "IMPORT_ASPECT_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-entry-groups",
              description:
                "The list of entry groups to import metadata jobs into",
              args: {
                name: "IMPORT_ENTRY_GROUPS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-entry-link-types",
              description:
                "The list of entry link types to import metadata jobs into",
              args: {
                name: "IMPORT_ENTRY_LINK_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-entry-sync-mode",
              description:
                "Type. _IMPORT_ENTRY_SYNC_MODE_ must be one of:\n+\n*FULL*::: All resources in the job's scope are modified. If a\n                       resource exists in Dataplex but isn't included in the\n                       metadata import file, the resource is deleted when you\n                       run the metadata job. Use this mode to perform a full\n                       sync of the set of entries in the job scope.\n*INCREMENTAL*::: Only the entries and aspects that are explicitly\n                           included in the metadata import file are modified.\n                           Use this mode to modify a subset of resources while\n                           leaving unreferenced resources unchanged. \n:::\n+",
              args: {
                name: "IMPORT_ENTRY_SYNC_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["FULL", "INCREMENTAL"],
              },
            },
            {
              name: "--import-entry-types",
              description:
                "The list of entry types to import metadata jobs into",
              args: {
                name: "IMPORT_ENTRY_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-glossaries",
              description:
                "The list of glossaries to import metadata jobs into",
              args: {
                name: "IMPORT_GLOSSARIES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-log-level",
              description:
                "Type. _IMPORT_LOG_LEVEL_ must be one of:\n+\n*DEBUG*::: Debug-level logging. Captures detailed logs for each import\n                item. Use debug-level logging to troubleshoot issues with\n                specific import items. For example, use debug-level logging to\n                identify resources that are missing from the job scope, entries\n                or aspects that don't conform to the associated entry type or\n                aspect type, or other misconfigurations with the metadata import file..\n*INFO*::: Info-level logging. Captures logs at the overall job\n                   level. Includes aggregate logs about import items, but\n                   doesn't specify which import item has an error..\n:::\n+",
              args: {
                name: "IMPORT_LOG_LEVEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["DEBUG", "INFO"],
              },
            },
            {
              name: "--import-referenced-entry-scopes",
              description:
                "The list of referenced entry scopes to import metadata jobs into",
              args: {
                name: "IMPORT_REFERENCED_ENTRY_SCOPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--import-source-create-time",
              description:
                "Time at which the event took place. See `$ gcloud topic datetimes`\n        for information on supported time formats",
              args: {
                name: "IMPORT_SOURCE_CREATE_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--import-source-storage-uri",
              description:
                "The Dataplex source storage URI to import metadata from",
              args: {
                name: "IMPORT_SOURCE_STORAGE_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag6413,
            {
              name: "--location",
              description:
                "The location of the Dataplex resource.\n+\nTo set the `location` attribute:\n* provide the argument `metadata_job` on the command line with a fully specified name;\n* job ID is optional and will be generated if not specified with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
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
            {
              name: "--type",
              description:
                "Type. _TYPE_ must be one of:\n+\n*EXPORT*::: A Metadata Export Job will export entries and aspects from\n                   the declared Dataplex scope to the specified Cloud\n                   Storage location.\n*IMPORT*::: A Metadata Import Job will ingest, update, or delete entries\n                   and aspects into the declared Dataplex entry group.\n:::\n+",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["EXPORT", "IMPORT"],
              },
            },
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "METADATA_JOB",
            description:
              "ID of the metadata job or fully qualified identifier for the metadata job.\n+\nTo set the `metadata_job` attribute:\n* provide the argument `metadata_job` on the command line;\n* job ID is optional and will be generated if not specified",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Describe a Metadata Job",
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
            flag7161,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "METADATA_JOB",
            description:
              "ID of the metadata job or fully qualified identifier for the metadata job.\n+\nTo set the `metadata_job` attribute:\n* provide the argument `metadata_job` on the command line",
          },
        },
        {
          name: "list",
          description: "List Metadata Job resources under a project",
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
            flag7130,
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
      name: "tasks",
      description: "Manage Dataplex Task services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex task resource",
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
            flag6451,
            flag7037,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the tasks or fully qualified identifier for the tasks.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataplex task resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1103,
            flag1104,
            flag1201,
            flag2292,
            flag2388,
            flag2380,
            {
              name: "--container-image-properties",
              description:
                "The properties to set on daemon config files. Property keys are\nspecified in prefix:property format, for example core:hadoop.tmp.dir.\nFor more information, see Cluster properties\n(https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag2383,
            {
              name: "--description",
              description: "Description of the Dataplex task",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Display name of the Dataplex task",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--execution-args",
              description:
                "The arguments to pass to the task.\nThe args can use placeholders of the format ${placeholder} as\npart of key/value string. These will be interpolated before passing the\nargs to the driver. Currently supported placeholders:\n- ${task_id}\n- ${job_time}\nTo pass positional args, set the key as TASK_ARGS. The value should be a\ncomma-separated string of all the positional arguments.\nSee https://cloud.google.com/sdk/gcloud/reference/topic/escaping for details on\nusing a delimiter other than a comma. In case of\nother keys being present in the args, then TASK_ARGS will be passed as\nthe last argument",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag4631,
            {
              name: "--execution-service-account",
              description: "Service account to use to execute a task",
              args: {
                name: "EXECUTION_SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6321,
            flag6413,
            flag6459,
            flag7162,
            flag7356,
            flag7647,
            {
              name: "--notebook",
              description:
                "Path to input notebook. This can be the Google Cloud Storage URI of the notebook file\nor the path to a Notebook Content.\nThe execution args are accessible as environment variables\n(`TASK_key=value`)",
              args: {
                name: "NOTEBOOK",
                description: "String",
                suggestions: [],
              },
            },
            flag10554,
            flag10555,
            flag10556,
            flag10560,
            flag10557,
            {
              name: "--notebook-container-image-properties",
              description:
                "The properties to set on daemon config files. Property keys are\nspecified in prefix:property format, for example core:hadoop.tmp.dir.\nFor more information, see Cluster properties\n(https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag10561,
            flag10563,
            flag10564,
            flag10565,
            flag11637,
            flag11946,
            flag14197,
            flag14199,
            {
              name: "--spark-main-class",
              description:
                "The name of the driver's main class. The jar file that contains the\nclass must be in the default CLASSPATH or specified in `jar_file_uris`.\nThe execution args are passed in as a sequence of named process\narguments (`--key=value`)",
              args: {
                name: "SPARK_MAIN_CLASS",
                description: "String",
                suggestions: [],
              },
            },
            flag14202,
            flag14203,
            flag14205,
            flag14204,
            flag14975,
            flag14999,
            flag15005,
            flag15008,
            {
              name: "--trigger-start-time",
              description:
                "The first run of the task begins after this time. If not specified, an ON_DEMAND\ntask runs when it is submitted and a RECURRING task runs based on the trigger\nschedule",
              args: {
                name: "TRIGGER_START_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--trigger-type",
              description:
                "Trigger type of the user-specified Dataplex Task. _TRIGGER_TYPE_ must be one of:\n+\n*on-demand*::: The `ON_DEMAND` trigger type runs the Dataplex task one time shortly after task creation.\n+\n*recurring*::: The `RECURRING` trigger type makes the task scheduled to run periodically.\n+\n:::\n+",
              args: {
                name: "TRIGGER_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["on-demand", "recurring"],
              },
            },
            flag15315,
            flag15424,
            flag15515,
            flag15516,
            flag15521,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex task resource",
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
            flag6459,
            flag7162,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dataplex task resource",
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
            flag6459,
            flag7162,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex task resource",
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
            flag6459,
            flag6515,
            flag7162,
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
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
        {
          name: "jobs",
          description: "Manage Dataplex Jobs services",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a Dataplex Job running a particular task",
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
                flag6458,
                flag7159,
                flag7356,
                flag11637,
                flag11946,
                flag14782,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Dataplex job running a particular task",
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
                flag6458,
                flag7159,
                flag7356,
                flag11637,
                flag11946,
                flag14782,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "list",
              description: "List job runs of a Dataplex task resource",
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
                  name: "--lake",
                  description:
                    "Identifier of the Dataplex lake resource.\n+\n\nTo set the `lake` attribute:\n* provide the argument `--task` on the command line with a fully specified name;\n* provide the argument `--lake` on the command line",
                  args: {
                    name: "LAKE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6515,
                {
                  name: "--location",
                  description:
                    "Location of the Dataplex resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `--task` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `dataplex/location`",
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
                {
                  name: "--task",
                  description:
                    "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `--task` on the command line",
                  args: {
                    name: "TASK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "list",
          description: "List Dataplex task resources under a lake",
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
            flag6453,
            flag6515,
            flag7147,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex task resource",
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
            flag6451,
            flag7037,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the tasks or fully qualified identifier for the tasks.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
        {
          name: "run",
          description: "Trigger one-time run of a Dataplex task",
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
            flag6413,
            flag6451,
            flag7037,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TASK",
              description:
                "ID of the tasks or fully qualified identifier for the tasks.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
            },
            {
              name: "execution-spec-args",
              description:
                "Execution spec arguments to pass to the driver. Follows the format argKey=argValue.\n+\nThe '--' argument must be specified between gcloud specific args on the left and execution-spec-args on the right",
            },
          ],
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex task as defined in a JSON or YAML file",
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
            flag6451,
            flag7037,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TASK",
              description:
                "ID of the tasks or fully qualified identifier for the tasks.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex task resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1103,
            flag1104,
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            flag2292,
            flag2388,
            flag2380,
            {
              name: "--container-image-properties",
              description:
                "Override to common configuration of open source components installed on\nthe Dataproc cluster.\nThe properties to set on daemon config files.\nProperty keys are specified in `prefix:property` format, for example\n`core:hadoop.tmp.dir`.\nFor more information, see [Cluster\nproperties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag2383,
            {
              name: "--description",
              description: "Description of the task",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Display name of the task",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--execution-args",
              description:
                "The arguments to pass to the task.\nThe args can use placeholders of the format ${placeholder} as\npart of key/value string. These will be interpolated before passing the\nargs to the driver. Currently supported placeholders:\n- ${task_id}\n- ${job_time}\nTo pass positional args, set the key as TASK_ARGS. The value should be a\ncomma-separated string of all the positional arguments. To use a\ndelimiter other than comma, refer to\nhttps://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of\nother keys being present in the args, then TASK_ARGS will be passed as\nthe last argument",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag4631,
            {
              name: "--execution-service-account",
              description:
                "Service account to use to execute a task.\nIf not provided, the default Compute service account for the project is used",
              args: {
                name: "EXECUTION_SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6321,
            flag6459,
            flag7162,
            flag7356,
            flag7647,
            {
              name: "--notebook",
              description:
                "Google Cloud Storage URIs of the notebook file or the path to a Notebook Content.\nPath to input notebook",
              args: {
                name: "NOTEBOOK",
                description: "String",
                suggestions: [],
              },
            },
            flag10554,
            flag10555,
            flag10556,
            flag10560,
            flag10557,
            {
              name: "--notebook-container-image-properties",
              description:
                "Override to common configuration of open source components installed on\nthe Dataproc cluster.\nThe properties to set on daemon config files.\nProperty keys are specified in `prefix:property` format, for example\n`core:hadoop.tmp.dir`.\nFor more information, see [Cluster\nproperties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag10561,
            flag10563,
            flag10564,
            flag10565,
            flag11637,
            flag11946,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag14197,
            flag14199,
            {
              name: "--spark-main-class",
              description:
                "The name of the driver's main class. The jar file that contains the\nclass must be in the default CLASSPATH or specified in",
              args: {
                name: "SPARK_MAIN_CLASS",
                description: "String",
                suggestions: [],
              },
            },
            flag14202,
            flag14203,
            flag14205,
            flag14204,
            flag14975,
            flag14999,
            flag15005,
            flag15008,
            {
              name: "--trigger-start-time",
              description:
                "The first run of the task will be after this time.\nIf not specified, the task will run shortly after being submitted if\nON_DEMAND and based on the schedule if RECURRING",
              args: {
                name: "TRIGGER_START_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15424,
            flag15515,
            flag15516,
            flag15521,
          ],
          args: {
            name: "TASK",
            description:
              "ID of the task or fully qualified identifier for the task.\n+\nTo set the `task` attribute:\n* provide the argument `task` on the command line",
          },
        },
      ],
    },
    {
      name: "zones",
      description: "Manage Dataplex Zone resources",
      subcommands: [
        {
          name: "actions",
          description: "Manage Dataplex zone resource actions",
          subcommands: [
            {
              name: "list",
              description: "List Dataplex zone actions",
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
                flag6456,
                flag6515,
                flag7149,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15835,
              ],
            },
          ],
        },
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Dataplex zone resource",
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
            flag6452,
            flag7038,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13132,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a zone",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2594,
            flag2595,
            flag2598,
            flag2600,
            {
              name: "--description",
              description: "Description of the zone",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag3649,
            flag3650,
            flag3651,
            flag3652,
            {
              name: "--display-name",
              description: "Display name of the zone",
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
            flag6132,
            flag6135,
            flag6413,
            flag6452,
            flag7038,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--resource-location-type",
              description:
                "Location type of the resources attached to a zone. _RESOURCE_LOCATION_TYPE_ must be one of:\n+\n*MULTI_REGION*::: Resources that are associated with a multi-region location.\n*SINGLE_REGION*::: Resources that are associated with a single region.\n:::\n+",
              args: {
                name: "RESOURCE_LOCATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["MULTI_REGION", "SINGLE_REGION"],
              },
            },
            flag14975,
            {
              name: "--type",
              description:
                "Type. _TYPE_ must be one of:\n+\n*CURATED*::: A zone that contains data that is considered to be ready for\n                   broader consumption and analytics workloads. Curated\n                   structured data stored in Cloud Storage must conform to\n                   certain file formats (Parquet, Avro, and Orc) and organized\n                   in a hive-compatible directory layout.\n*RAW*::: A zone that contains data that needs further processing\n                   before it is considered generally ready for consumption and\n                   analytics workloads.\n:::\n+",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["CURATED", "RAW"],
              },
            },
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dataplex zone resource",
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
            flag6460,
            flag7163,
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
          name: "describe",
          description: "Describe a Dataplex zone resource",
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
            flag6460,
            flag7163,
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
          name: "get-iam-policy",
          description: "Get the IAM policy for a Dataplex zone resource",
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
            flag6460,
            flag6515,
            flag7163,
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataplex zone resources under a lake",
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
            flag6453,
            flag6515,
            flag7147,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a Dataplex zone resource",
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
            flag6452,
            flag7038,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13133,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy to a Dataplex zone as defined in a JSON or YAML file",
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
            flag6452,
            flag7038,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ZONE",
              description:
                "ID of the zones or fully qualified identifier for the zones.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update a Dataplex zone resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2594,
            flag2595,
            flag2598,
            flag2600,
            {
              name: "--description",
              description: "Description of the zone",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag3649,
            flag3650,
            flag3651,
            flag3652,
            flag3708,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6132,
            flag6135,
            flag6413,
            flag6452,
            flag7038,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15385,
            flag15424,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zones or fully qualified identifier for the zones.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
