// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag40: Fig.Option = {
  name: "--access-time",
  description: "The hypothetical access timestamp to evaluate IAM conditions",
  args: {
    name: "ACCESS_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
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
const flag509: Fig.Option = {
  name: "--analyze-service-account-impersonation",
  description:
    "If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AnalyzeIamPolicyLongrunning rpc instead. Default is false",
};
const flag701: Fig.Option = {
  name: "--asset-types",
  description:
    'A list of asset types (i.e., "compute.googleapis.com/Disk") to take a snapshot. If specified and non-empty, only assets matching the specified types will be returned. See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types',
  args: { name: "ASSET_TYPES", description: "List", suggestions: [] },
};
const flag1137: Fig.Option = {
  name: "--bigquery-dataset",
  description:
    "The id of the BigQuery dataset.\n+\nTo set the `bigquery-dataset` attribute:\n* provide the argument `--bigquery-table` on the command line with a fully specified name;\n* provide the argument `--bigquery-dataset` on the command line",
  args: { name: "BIGQUERY_DATASET", description: "String", suggestions: [] },
};
const flag1151: Fig.Option = {
  name: "--bigquery-table",
  description:
    "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `--bigquery-table` on the command line",
  args: { name: "BIGQUERY_TABLE", description: "String", suggestions: [] },
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
const flag2340: Fig.Option = {
  name: "--constraint",
  description:
    "The name of the constraint to analyze organization policies for. The\nresponse only contains analyzed organization policies for the provided\nconstraint.\n+\nExample:\n+\n* organizations/{ORGANIZATION_NUMBER}/customConstraints/{CUSTOM_CONSTRAINT_NAME}\n  for a user-defined custom constraint",
  args: { name: "CONSTRAINT", description: "String", suggestions: [] },
};
const flag3084: Fig.Option = {
  name: "--description",
  description: "A string describing the query",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag4388: Fig.Option = {
  name: "--end-time",
  description:
    "End time of the time window (exclusive) for the asset history. Defaults to current time if not specified. See $ gcloud topic datetimes for information on time formats",
  args: {
    name: "END_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag4643: Fig.Option = {
  name: "--expand-groups",
  description:
    "If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. Default is false",
};
const flag4644: Fig.Option = {
  name: "--expand-resources",
  description:
    "If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. Default is false",
};
const flag4645: Fig.Option = {
  name: "--expand-roles",
  description:
    "If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. Default is false",
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
const flag4924: Fig.Option = {
  name: "--folder",
  description:
    "Folder ID on which to perform the analysis. Only policies defined at or below this folder will be  targeted in the analysis",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
};
const flag4948: Fig.Option = {
  name: "--folder",
  description: "Folder of the feed",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
};
const flag4973: Fig.Option = {
  name: "--folder",
  description: "Folder of the saved query",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
};
const flag5005: Fig.Option = {
  name: "--folder",
  description: "The ID of the folder which is the root asset",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
};
const flag5091: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. If both `core/format` and\n`--format` are specified, `--format` takes precedence. `--format`\nand `core/format` both take precedence over `core/default_format`. The\nsupported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud\ntopic formats. Run `$ gcloud config set --help` to see more information\nabout `core/format`",
  args: { name: "FORMAT", description: "String", suggestions: [] },
};
const flag5117: Fig.Option = {
  name: "--full-resource-name",
  description: "The full resource name",
  args: { name: "FULL_RESOURCE_NAME", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5612: Fig.Option = {
  name: "--identity",
  description:
    "The identity appearing in the form of principals in the IAM policy binding",
  args: { name: "IDENTITY", description: "String", suggestions: [] },
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
const flag10809: Fig.Option = {
  name: "--organization",
  description:
    "Organization ID on which to perform the analysis. Only policies defined at or below this organization  will be targeted in the analysis",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag10840: Fig.Option = {
  name: "--organization",
  description: "Organization of the feed",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag10848: Fig.Option = {
  name: "--organization",
  description: "Organization of the saved query",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag10865: Fig.Option = {
  name: "--organization",
  description: "The ID of the organization which is the root asset",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag11002: Fig.Option = {
  name: "--output-group-edges",
  description:
    "If true, the result will output the relevant membership relationships between groups. Default is false",
};
const flag11010: Fig.Option = {
  name: "--output-resource-edges",
  description:
    "If true, the result will output the relevant parent/child relationships between resources. Default is false",
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
const flag11275: Fig.Option = {
  name: "--permissions",
  description: "The permissions to appear in the result",
  args: { name: "PERMISSIONS", description: "List", suggestions: [] },
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
const flag12479: Fig.Option = {
  name: "--relationship-types",
  description:
    'A list of relationship types (i.e., "INSTANCE_TO_INSTANCEGROUP") to take a snapshot. This argument will only be honoured if content_type=RELATIONSHIP. If specified and non-empty, only relationships matching the specified types will be returned. See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported relationship types',
  args: { name: "RELATIONSHIP_TYPES", description: "List", suggestions: [] },
};
const flag13141: Fig.Option = {
  name: "--roles",
  description: "The roles to appear in the result",
  args: { name: "ROLES", description: "List", suggestions: [] },
};
const flag13924: Fig.Option = {
  name: "--snapshot-time",
  description:
    "Timestamp to take a snapshot on assets. This can only be a current or past time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query at different times may return different results. See $ gcloud topic datetimes for information on time formats",
  args: {
    name: "SNAPSHOT_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14371: Fig.Option = {
  name: "--start-time",
  description:
    "Start time of the time window (inclusive) for the asset history. Must be after the current time minus 35 days. See $ gcloud topic datetimes for information on time formats",
  args: {
    name: "START_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
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
  name: "asset",
  description: "Manage the Cloud Asset Inventory",
  subcommands: [
    {
      name: "analyze-iam-policy",
      description: "Analyzes IAM policies that match a request",
      options: [
        flag40,
        flag42,
        flag46,
        flag509,
        flag1201,
        flag2292,
        {
          name: "--execution-timeout",
          description:
            "The amount of time the executable has to complete. See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json). Deafult is empty",
          args: {
            name: "EXECUTION_TIMEOUT",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
            suggestions: [],
          },
        },
        flag4643,
        flag4644,
        flag4645,
        flag4900,
        flag4902,
        flag4924,
        flag5091,
        flag5117,
        flag5453,
        flag5612,
        flag5699,
        flag7356,
        flag10809,
        flag11002,
        flag11010,
        flag11275,
        flag11946,
        flag13141,
        {
          name: "--saved-analysis-query",
          description:
            "The name of a saved query. \nWhen a `saved_analysis_query` is provided, its query content will be used as the base query. Other flags' values will override the base query to compose the final query to run. IDs might be in one of the following formats:\n* projects/project_number/savedQueries/saved_query_id* folders/folder_number/savedQueries/saved_query_id* organizations/organization_number/savedQueries/saved_query_id",
          args: {
            name: "SAVED_ANALYSIS_QUERY",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--show-response",
          description:
            "If true, the response will be showed as-is in the command output",
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "analyze-iam-policy-longrunning",
      description:
        "Analyzes IAM policies that match a request asynchronously and writes the results to Google Cloud Storage or BigQuery destination",
      options: [
        flag40,
        flag42,
        flag46,
        flag509,
        {
          name: "--bigquery-dataset",
          description:
            'BigQuery dataset where the results will be written. Must be a dataset relative name starting with "projects/". For example, "projects/project_id/datasets/dataset_id"',
          args: {
            name: "BIGQUERY_DATASET",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--bigquery-partition-key",
          description:
            "This enum determines the partition key column for the bigquery tables. Partitioning can improve query performance and reduce query cost by filtering partitions. Refer to https://cloud.google.com/bigquery/docs/partitioned-tables for details. _BIGQUERY_PARTITION_KEY_ must be one of: *PARTITION_KEY_UNSPECIFIED*, *REQUEST_TIME*",
          args: {
            name: "BIGQUERY_PARTITION_KEY",
            description: "String",
            suggestions: ["PARTITION_KEY_UNSPECIFIED", "REQUEST_TIME"],
          },
        },
        {
          name: "--bigquery-table-prefix",
          description:
            'The prefix of the BigQuery tables to which the analysis results will be written. A table name consists of letters, numbers and underscores"',
          args: {
            name: "BIGQUERY_TABLE_PREFIX",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--bigquery-write-disposition",
          description:
            "Specifies the action that occurs if the destination table or partition already exists. The following values are supported: WRITE_TRUNCATE, WRITE_APPEND and WRITE_EMPTY. The default value is WRITE_APPEND",
          args: {
            name: "BIGQUERY_WRITE_DISPOSITION",
            description: "String",
            suggestions: [],
          },
        },
        flag1201,
        flag2292,
        flag4643,
        flag4644,
        flag4645,
        flag4900,
        flag4902,
        flag4924,
        flag5091,
        flag5117,
        {
          name: "--gcs-output-path",
          description:
            'Google Cloud Storage URI where the results will be written. URI must start with "gs://". For example, "gs://bucket_name/object_name"',
          args: {
            name: "GCS_OUTPUT_PATH",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag5453,
        flag5612,
        flag5699,
        flag7356,
        flag10809,
        flag11002,
        flag11010,
        flag11275,
        flag11946,
        flag13141,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "analyze-move",
      description: "Analyzes resource move",
      options: [
        flag42,
        flag46,
        flag1201,
        {
          name: "--blockers-only",
          description:
            "Determines whether to perform analysis against blockers only. Leaving it empty means the full analysis will be performed including warnings and blockers for the specified resource move",
          args: { name: "BLOCKERS_ONLY", description: "Int", suggestions: [] },
        },
        flag2292,
        {
          name: "--destination-folder",
          description: "The destination folder ID to perform the analysis",
          args: { name: "FOLDER_ID", description: "String", suggestions: [] },
        },
        {
          name: "--destination-organization",
          description:
            "The destination organization ID to perform the analysis",
          args: {
            name: "ORGANIZATION_ID",
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
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "analyze-org-policies",
      description: "Analyze organization policies under a scope",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag2340,
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
          name: "--scope",
          description:
            "Scope can only be an organization. The analysis is\nlimited to the Cloud organization policies within this scope. The caller must be\ngranted the `cloudasset.assets.searchAllResources` permission on\nthe desired scope.\n+\nThe allowed values are:\n+\n  * ```organizations/{ORGANIZATION_NUMBER}``` (e.g. ``organizations/123456'')",
          args: { name: "SCOPE", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "analyze-org-policy-governed-assets",
      description:
        "Analyze organization policies governed assets under a scope",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        {
          name: "--constraint",
          description:
            "The name of the constraint to analyze organization policies for. The\nresponse only contains analyzed organization policies for the provided\nconstraint.\n+\nExamples:\n+\n* organizations/{ORGANIZATION_NUMBER}/customConstraints/{CUSTOM_CONSTRAINT_NAME}\n  for a user-defined custom constraint.\n* organizations/{ORGANIZATION_NUMBER}/constraints/{CANNED_CONSTRAINT_NAME}\n  for a gcp-service-defined canned constraint",
          args: { name: "CONSTRAINT", description: "String", suggestions: [] },
        },
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
          name: "--scope",
          description:
            "Scope can only be an organization. The analysis is\nlimited to the Cloud organization policies and assets within this scope. The caller must be\ngranted the `cloudasset.assets.searchAllResources` and `cloudasset.assets.searchAllIamPolicies` permission on\nthe desired scope.\n+\nThe allowed values are:\n+\n  * ```organizations/{ORGANIZATION_NUMBER}``` (e.g. ``organizations/123456'')",
          args: { name: "SCOPE", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "analyze-org-policy-governed-containers",
      description:
        "Analyze organization policies governed containers under a scope",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag2340,
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
          name: "--scope",
          description:
            "Scope can only be an organization. The analysis is\nlimited to the Cloud organization policies and containers within this scope. The caller must be\ngranted the `cloudasset.assets.searchAllResources` permission on\nthe desired scope.\n+\nThe allowed values are:\n+\n  * ```organizations/{ORGANIZATION_NUMBER}``` (e.g. ``organizations/123456'')",
          args: { name: "SCOPE", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "export",
      description: "Export the cloud assets to Google Cloud Storage/BigQuery",
      options: [
        flag42,
        flag46,
        flag701,
        flag1137,
        flag1151,
        flag1201,
        flag2292,
        {
          name: "--content-type",
          description:
            "Asset content type. If specified, only content matching the specified type will be returned. Otherwise, no content but the asset name will be returned. Specifying `resource` will export resource metadata, specifying `iam-policy` will export the IAM policy for each child asset, specifying `org-policy` will export the Org Policy set on child assets, specifying `access-policy` will export the Access Policy set on child assets, specifying `os-inventory` will export the OS inventory of VM instances, and specifying `relationship` will export relationships of the assets. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
          args: {
            name: "CONTENT_TYPE",
            description: "String",
            suggestions: [
              "resource",
              "iam-policy",
              "org-policy",
              "access-policy",
              "os-inventory",
              "relationship",
            ],
          },
        },
        flag4900,
        flag4902,
        flag5005,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag10865,
        {
          name: "--output-bigquery-force",
          description:
            "If the destination table already exists and this flag is specified, the table will be overwritten by the contents of assets snapshot. If the flag is not specified and the destination table already exists, the export call returns an error",
        },
        {
          name: "--output-path",
          description:
            'Google Cloud Storage URI where the results will go. URI must start with "gs://". For example, "gs://bucket_name/object_name"',
          args: {
            name: "OUTPUT_PATH",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--output-path-prefix",
          description:
            'Google Cloud Storage URI where the results will go. URI must start with "gs://". For example, "gs://bucket_name/object_name_prefix", in which case each exported object uri is in format: "gs://bucket_name/object_name_prefix/<asset type>/<shard number>" and it only contains assets for that type',
          args: {
            name: "OUTPUT_PATH_PREFIX",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--partition-key",
          description:
            "If specified. the snapshot results will be written to partitioned table(s) with two additional timestamp columns, readTime and requestTime, one of which will be the partition key. _PARTITION_KEY_ must be one of: *read-time*, *request-time*",
          args: {
            name: "PARTITION_KEY",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["read-time", "request-time"],
          },
        },
        {
          name: "--per-asset-type",
          description:
            "If the flag is specified, the snapshot results will be written to one or more tables, each of which contains results of one asset type",
        },
        flag11946,
        flag12479,
        flag13924,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "feeds",
      description: "Manage Cloud Asset Inventory feeds",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Asset Inventory Feed",
          options: [
            flag42,
            flag46,
            {
              name: "--asset-names",
              description:
                "A comma-separated list of the full names of the assets to receive updates. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. For more information, see: https://cloud.google.com/apis/design/resource_names#full_resource_name",
              args: {
                name: "ASSET_NAMES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--asset-types",
              description:
                "A comma-separated list of types of the assets types to receive updates. For example: `compute.googleapis.com/Disk,compute.googleapis.com/Network`. Regular expressions (https://github.com/google/re2/wiki/Syntax) are also supported. For more information, see: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview",
              args: {
                name: "ASSET_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--condition-description",
              description:
                "Description of the feed condition. For reference only",
              args: {
                name: "CONDITION_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--condition-expression",
              description:
                "Feed condition expression. If not specified, no condition will be applied to feed. For more information, see: https://cloud.google.com/asset-inventory/docs/monitoring-asset-changes#feed_with_condition",
              args: {
                name: "CONDITION_EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--condition-title",
              description: "Title of the feed condition. For reference only",
              args: {
                name: "CONDITION_TITLE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--content-type",
              description:
                "Asset content type. If not specified, no content but the asset name and type will be returned in the feed. For more information, see https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview#asset_content_type. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
              args: {
                name: "CONTENT_TYPE",
                description: "String",
                suggestions: [
                  "resource",
                  "iam-policy",
                  "org-policy",
                  "access-policy",
                  "os-inventory",
                  "relationship",
                ],
              },
            },
            flag4900,
            flag4902,
            flag4948,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10840,
            {
              name: "--pubsub-topic",
              description:
                'Name of the Cloud Pub/Sub topic to publish to, of the form `projects/PROJECT_ID/topics/TOPIC_ID`. You can list existing topics with `gcloud pubsub topics list --format="text(name)"`',
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--relationship-types",
              description:
                'A comma-separated list of the relationship types (i.e., "INSTANCE_TO_INSTANCEGROUP") to receive updates. This argument will only be honoured if content_type=RELATIONSHIP.See http://cloud.google.com/asset-inventory/docs/supported-asset-types for supported relationship types',
              args: {
                name: "RELATIONSHIP_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEED_ID",
            description:
              "Asset feed identifier being created, it must be unique under the specified parent resource project/folder/organization",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Asset Inventory Feed",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4948,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10840,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEED_ID",
            description: "Asset feed identifier to delete",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Asset Inventory Feed",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4948,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10840,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEED_ID",
            description: "Asset feed identifier to describe",
          },
        },
        {
          name: "list",
          description: "List Cloud Asset Inventory Feeds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4948,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10840,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update an existing Cloud Asset Inventory Feed",
          options: [
            flag42,
            flag46,
            {
              name: "--add-asset-names",
              description: "Append the given values to the current assetNames",
              args: {
                name: "ASSET-NAMES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-asset-types",
              description: "Append the given values to the current assetTypes",
              args: {
                name: "ASSET-TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-relationship-types",
              description:
                "Append the given values to the current relationshipTypes",
              args: {
                name: "RELATIONSHIP-TYPES",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-asset-names",
              description: "Empty the current assetNames",
            },
            {
              name: "--clear-asset-types",
              description: "Empty the current assetTypes",
            },
            {
              name: "--clear-condition-description",
              description:
                "Clear any existing condition description setting on the feed. Condition description will be empty",
            },
            {
              name: "--clear-condition-expression",
              description:
                "Clear any existing condition expression setting on the feed. No condition will be applied to feed",
            },
            {
              name: "--clear-condition-title",
              description:
                "Clear any existing condition title setting on the feed. Condition title will be empty",
            },
            {
              name: "--clear-content-type",
              description:
                "Clear any existing content type setting on the feed. Content type will be unspecified, no content but the asset name and type will be returned in the feed",
            },
            {
              name: "--clear-relationship-types",
              description: "Empty the current relationshipTypes",
            },
            {
              name: "--condition-description",
              description:
                "Condition description to overwrite the existing one",
              args: {
                name: "CONDITION_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--condition-expression",
              description:
                "Condition expression to overwrite the existing one. For more information, see: https://cloud.google.com/asset-inventory/docs/monitoring-asset-changes#feed_with_condition",
              args: {
                name: "CONDITION_EXPRESSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--condition-title",
              description: "Condition title to overwrite the existing one",
              args: {
                name: "CONDITION_TITLE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--content-type",
              description:
                "Asset content type to overwrite the existing one. For more information, see: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview#asset_content_type. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
              args: {
                name: "CONTENT_TYPE",
                description: "String",
                suggestions: [
                  "resource",
                  "iam-policy",
                  "org-policy",
                  "access-policy",
                  "os-inventory",
                  "relationship",
                ],
              },
            },
            flag4900,
            flag4902,
            flag4948,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10840,
            {
              name: "--pubsub-topic",
              description:
                'Name of the Cloud Pub/Sub topic to publish to, of the form `projects/PROJECT_ID/topics/TOPIC_ID`. You can list existing topics with `gcloud pubsub topics list --format="text(name)"`',
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-asset-names",
              description:
                "Remove the given values from the current assetNames",
              args: {
                name: "ASSET-NAMES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-asset-types",
              description:
                "Remove the given values from the current assetTypes",
              args: {
                name: "ASSET-TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-relationship-types",
              description:
                "Remove the given values from the current relationshipTypes",
              args: {
                name: "RELATIONSHIP-TYPES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEED_ID",
            description:
              "Identifier of the asset feed to update, which must be unique in its parent resource. Parent resource can be a project, folder, or an organization",
          },
        },
      ],
    },
    {
      name: "get-effective-iam-policy",
      description:
        "Get effective IAM policies for a specified list of resources within accessible scope, such as a project, folder or organization",
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
        {
          name: "--names",
          description:
            "Names refer to a list of\n[full resource names](https://cloud.google.com/asset-inventory/docs/resource-name-format)\nof [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types).\nFor each batch call, total number of names provided is between 1 and 20.\n+\nThe example value is:\n+\n  * ```//cloudsql.googleapis.com/projects/{PROJECT_ID}/instances/{INSTANCE}```\n  (e.g. ``//cloudsql.googleapis.com/projects/probe-per-rt-project/instances/instance1'')",
          args: { name: "NAMES", description: "List", suggestions: [] },
        },
        flag11637,
        flag11946,
        {
          name: "--scope",
          description:
            "Scope can be a project, a folder, or an organization. The search is\nlimited to the IAM policies within this scope. The caller must be\ngranted the ``cloudasset.assets.analyzeIamPolicy'',\n``cloudasset.assets.searchAllResources'',\n``cloudasset.assets.searchAllIamPolicies'' permissions\non the desired scope.\n+\nThe allowed values are:\n+\n  * ```projects/{PROJECT_ID}``` (e.g. ``projects/foo-bar'')\n  * ```projects/{PROJECT_NUMBER}``` (e.g. ``projects/12345678'')\n  * ```folders/{FOLDER_NUMBER}``` (e.g. ``folders/1234567'')\n  * ```organizations/{ORGANIZATION_NUMBER}``` (e.g. ``organizations/123456'')",
          args: { name: "SCOPE", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "get-history",
      description:
        "Get the update history of assets that overlaps a time window",
      options: [
        flag42,
        flag46,
        {
          name: "--asset-names",
          description:
            "A list of full names of the assets to get the history for. For more information, see: https://cloud.google.com/apis/design/resource_names#full_resource_name",
          args: { name: "ASSET_NAMES", description: "List", suggestions: [] },
        },
        flag1201,
        flag2292,
        {
          name: "--content-type",
          description:
            "Asset content type. Specifying `resource` will export resource metadata, specifying `iam-policy` will export the IAM policy for each child asset, specifying `org-policy` will export the Org Policy set on child assets, specifying `access-policy` will export the Access Policy set on child assets, specifying `os-inventory` will export the OS inventory of VM instances, and specifying `relationship` will export relationships of the assets. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
          args: {
            name: "CONTENT_TYPE",
            description: "String",
            suggestions: [
              "resource",
              "iam-policy",
              "org-policy",
              "access-policy",
              "os-inventory",
              "relationship",
            ],
          },
        },
        flag4388,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag10865,
        flag11946,
        flag12479,
        flag14371,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "list",
      description: "List the Cloud assets",
      options: [
        flag42,
        flag46,
        flag701,
        flag1201,
        flag2292,
        {
          name: "--content-type",
          description:
            "Asset content type. If not specified, no content but the asset name and type will be returned in the feed. For more information, see https://cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds#ContentType. _CONTENT_TYPE_ must be one of: *resource*, *iam-policy*, *org-policy*, *access-policy*, *os-inventory*, *relationship*",
          args: {
            name: "CONTENT_TYPE",
            description: "String",
            suggestions: [
              "resource",
              "iam-policy",
              "org-policy",
              "access-policy",
              "os-inventory",
              "relationship",
            ],
          },
        },
        flag4849,
        flag4900,
        flag4902,
        flag5005,
        flag5091,
        flag5453,
        flag5699,
        flag6515,
        flag7356,
        flag10865,
        flag11059,
        flag11946,
        flag12479,
        flag13924,
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Asset Inventory operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud Asset Inventory operation",
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
            name: "OPERATION_NAME",
            description: "Name of the operation to describe",
          },
        },
      ],
    },
    {
      name: "query",
      description: "Query the Cloud assets",
      options: [
        flag42,
        flag46,
        flag1137,
        flag1151,
        flag1201,
        flag2292,
        flag4388,
        flag4900,
        flag4902,
        flag5005,
        flag5091,
        flag5453,
        flag5699,
        {
          name: "--job-reference",
          description:
            "Reference to the query job, which is from the previous call",
          args: {
            name: "JOB_REFERENCE",
            description: "String",
            suggestions: [],
          },
        },
        flag7356,
        flag10865,
        {
          name: "--page-size",
          description:
            "The maximum number of rows to return in the results. One page is also limited to 10 MB",
          args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
        },
        {
          name: "--page-token",
          description: "A page token received from previous call",
          args: { name: "PAGE_TOKEN", description: "String", suggestions: [] },
        },
        flag11946,
        flag13924,
        flag14371,
        {
          name: "--statement",
          description:
            "A BigQuery Standard SQL compatible statement. If the query execution finishes within timeout and there is no pagination, the full query results will be returned. Otherwise, pass job_reference from previous call as `--job-reference` to obtain the full results",
          args: { name: "STATEMENT", description: "String", suggestions: [] },
        },
        {
          name: "--timeout",
          description:
            "Maximum amount of time that the client will wait for the query to complete",
          args: {
            name: "TIMEOUT",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
            suggestions: [],
          },
        },
        flag14975,
        flag15315,
        flag15424,
        {
          name: "--write-disposition",
          description:
            "Specifies the action that occurs if the destination table or partition already exists. _WRITE_DISPOSITION_ must be one of:\n+\n*write-append*::: If the table or partition already exists, BigQuery appends the\n              data to the table or the latest partition.\n*write-empty*::: If the table already exists and contains data, an error is\n              returned.\n*write-truncate*::: If the table or partition already exists, BigQuery overwrites\n              the entire table or all the partition's data.\n:::\n+",
          args: {
            name: "WRITE_DISPOSITION",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["write-append", "write-empty", "write-truncate"],
          },
        },
      ],
    },
    {
      name: "saved-queries",
      description: "Manage Cloud Asset Inventory saved queries",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Asset Inventory saved query",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3084,
            flag4900,
            flag4902,
            flag4973,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            flag10848,
            {
              name: "--query-file-path",
              description: "Path to JSON or YAML file that contains the query",
              args: {
                name: "QUERY_FILE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Saved query identifier being created. It must be unique under the specified parent resource project/folder/organization",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Asset Inventory saved query",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4973,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10848,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Asset saved query identifier to be deleted. It must be unique under the specified parent resource project/folder/organization",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Asset Inventory saved query",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4973,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10848,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "QUERY_ID",
            description:
              "Asset Saved Query identifier being described. It must be unique under the specified parent resource: project/folder/organization",
          },
        },
        {
          name: "list",
          description: "List Cloud Asset Inventory saved query",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4973,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10848,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update an existing Cloud Asset Inventory saved query",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            flag2292,
            flag3084,
            flag4900,
            flag4902,
            flag4973,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10848,
            {
              name: "--query-file-path",
              description: "Path to JSON or YAML file that contains the query",
              args: {
                name: "QUERY_FILE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
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
          args: {
            name: "QUERY_ID",
            description:
              "Saved query identifier being updated. It must be unique under the specified parent resource project/folder/organization",
          },
        },
      ],
    },
    {
      name: "search-all-iam-policies",
      description:
        "Searches all IAM policies within the specified accessible scope, such as a project, folder or organization",
      options: [
        flag42,
        flag46,
        {
          name: "--asset-types",
          description:
            "List of asset types that the IAM policies are attached to. If empty, it\nwill search the IAM policies that are attached to all the [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types).\n+\nRegular expressions are also supported. For example:\n+\n  * ``compute.googleapis.com.*'' snapshots IAM policies attached to\n    asset type starts with ``compute.googleapis.com''.\n  * ``.*Instance'' snapshots IAM policies attached to asset type ends\n    with ``Instance''.\n  * ``.*Instance.*'' snapshots IAM policies attached to asset type\n    contains ``Instance''.\n+\nSee [RE2](https://github.com/google/re2/wiki/Syntax) for all supported\nregular expression syntax. If the regular expression does not match any\nsupported asset type, an ``INVALID_ARGUMENT'' error will be returned",
          args: { name: "ASSET_TYPES", description: "List", suggestions: [] },
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
        {
          name: "--order-by",
          description:
            "Comma-separated list of fields specifying the sorting order of the\nresults. The default order is ascending. Add `` DESC'' after the field\nname to indicate descending order. Redundant space characters are\nignored. Example: ``assetType DESC, resource''. Only singular primitive\nfields in the response are sortable:\n+\n  * `resource`\n  * `assetType`\n  * `project`\n+\nAll the other fields such as repeated fields (e.g., `folders`) and\nnon-primitive fields (e.g., `policy`) are not supported.\n+\nBoth ```--order-by``` and ```--sort-by``` flags can be used to sort the\noutput, with the following differences:\n+\n* The ```--order-by``` flag performs server-side sorting (better\n  performance), while the ```--sort-by``` flag performs client-side\n  sorting.\n* The ```--sort-by``` flag supports all the fields in the output, while\n  the ```--order-by``` flag only supports limited fields as shown above",
          args: { name: "ORDER_BY", description: "String", suggestions: [] },
        },
        flag11059,
        flag11637,
        {
          name: "--query",
          description:
            "Query statement. See [how to construct a\nquery](https://cloud.google.com/asset-inventory/docs/searching-iam-policies#how_to_construct_a_query)\nfor more information. If not specified or empty, it will search all the\nIAM policies within the specified ```scope```. Note that the query\nstring is compared against each Cloud IAM policy binding, including its\nprincipals, roles, and Cloud IAM conditions. The returned Cloud IAM\npolicies will only contain the bindings that match your query. To learn\nmore about the IAM policy structure, see the [IAM policy documentation](https://cloud.google.com/iam/help/allow-policies/structure).\n+\nExamples:\n+\n* ```policy:amy@gmail.com``` to find IAM policy bindings that specify\n  user ``amy@gmail.com''.\n* ```policy:roles/compute.admin``` to find IAM policy bindings that\n  specify the Compute Admin role.\n* ```policy:comp*``` to find IAM policy bindings that contain ``comp''\n  as a prefix of any word in the binding.\n* ```policy.role.permissions:storage.buckets.update``` to find IAM\n  policy bindings that specify a role containing the\n  ``storage.buckets.update'' permission. Note that if callers haven't\n  been granted the ``iam.roles.get'' permission for a role's included\n  permissions, policy bindings that specify this role will be dropped\n  from the search results.\n* ```policy.role.permissions:upd*``` to find IAM policy bindings that\n  specify a role containing ``upd'' as a prefix of any word in the role\n  permission. Note that if callers haven't been granted the\n  ``iam.roles.get'' permission for a role's included permissions, policy\n  bindings that specify this role will be dropped from the search\n  results.\n* ```resource:organizations/123456``` to find IAM policy bindings that\n  are set on ``organizations/123456''.\n* ```resource=//cloudresourcemanager.googleapis.com/projects/myproject```\n  to find IAM policy bindings that are set on the project named\n  ``myproject''.\n* ```Important``` to find IAM policy bindings that contain ``Important''\n  as a word in any of the searchable fields (except for the included\n  permissions).\n* ```resource:(instance1 OR instance2) policy:amy``` to find IAM policy\n  bindings that are set on resources ``instance1'' or ``instance2'' and\n  also specify user ``amy''.\n* ```roles:roles/compute.admin``` to find IAM policy bindings that\n  specify the Compute Admin role.\n* ```memberTypes:user``` to find IAM policy bindings that contain the\n  ``user'' principal type",
          args: { name: "QUERY", description: "String", suggestions: [] },
        },
        flag11946,
        {
          name: "--scope",
          description:
            "Scope can be a project, a folder, or an organization. The search is\nlimited to the IAM policies within this scope. The caller must be\ngranted the ``cloudasset.assets.searchAllIamPolicies'' permission\non the desired scope. If not specified, the [configured project property](https://cloud.google.com//sdk/docs/configurations#setting_configuration_properties)\nwill be used. To find the configured project, run:\n```gcloud config get project```. To change the setting, run:\n```gcloud config set project PROJECT_ID```.\n+\nThe allowed values are:\n+\n  * ```projects/{PROJECT_ID}``` (e.g. ``projects/foo-bar'')\n  * ```projects/{PROJECT_NUMBER}``` (e.g. ``projects/12345678'')\n  * ```folders/{FOLDER_NUMBER}``` (e.g. ``folders/1234567'')\n  * ```organizations/{ORGANIZATION_NUMBER}``` (e.g. ``organizations/123456'')",
          args: { name: "SCOPE", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "search-all-resources",
      description:
        "Searches all Cloud resources within the specified accessible scope, such as a project, folder or organization",
      options: [
        flag42,
        flag46,
        {
          name: "--asset-types",
          description:
            "A list of asset types that this request searches for. If empty, it will\nsearch all the [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types).\n+\nRegular expressions are also supported. For example:\n+\n  * ``compute.googleapis.com.*'' snapshots resources whose asset type\n    starts with ``compute.googleapis.com''.\n  * ``.*Instance'' snapshots resources whose asset type ends with\n    ``Instance''.\n  * ``.*Instance.*'' snapshots resources whose asset type contains\n    ``Instance''.\n+\nSee [RE2](https://github.com/google/re2/wiki/Syntax) for all supported\nregular expression syntax. If the regular expression does not match any\nsupported asset type, an ``INVALID_ARGUMENT'' error will be returned",
          args: { name: "ASSET_TYPES", description: "List", suggestions: [] },
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
        {
          name: "--order-by",
          description:
            "A comma-separated list of fields specifying the sorting order of the\nresults. The default order is ascending. Add `` DESC'' after the field\nname to indicate descending order. Redundant space characters are\nignored. Example: ``location DESC, name''. Only singular primitive\nfields in the response are sortable:\n+\n  * `name`\n  * `assetType`\n  * `project`\n  * `displayName`\n  * `description`\n  * `location`\n  * `createTime`\n  * `updateTime`\n  * `state`\n  * `parentFullResourceName`\n  * `parentAssetType`\n+\nAll the other fields such as repeated fields (e.g., `networkTags`,\n`kmsKeys`), map fields (e.g., `labels`) and struct fields (e.g.,\n`additionalAttributes`) are not supported.\n+\nBoth ```--order-by``` and ```--sort-by``` flags can be used to sort the\noutput, with the following differences:\n+\n* The ```--order-by``` flag performs server-side sorting (better\n  performance), while the ```--sort-by``` flag performs client-side\n  sorting.\n* The ```--sort-by``` flag supports all the fields in the output, while\n  the ```--order-by``` flag only supports limited fields as shown above",
          args: { name: "ORDER_BY", description: "String", suggestions: [] },
        },
        flag11059,
        flag11637,
        {
          name: "--query",
          description:
            "The query statement. See [how to construct a\nquery](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query)\nfor more details. If not specified or empty, it will search all the\nresources within the specified ```scope```.\n+\nExamples:\n+\n* ```name:Important``` to find Cloud resources whose name contains\n  ``Important'' as a word.\n* ```name=Important``` to find the Cloud resource whose name is exactly\n  ``Important''.\n* ```displayName:Impor*``` to find Cloud resources whose display name\n  contains ``Impor'' as a prefix of any word.\n* ```location:us-west*``` to find Cloud resources whose location\n  contains both ``us'' and ``west'' as prefixes.\n* ```labels:prod``` to find Cloud resources whose labels contain\n  ``prod'' as a key or value.\n* ```labels.env:prod``` to find Cloud resources that have a label\n  ``env'' and its value is ``prod''.\n* ```labels.env:*``` to find Cloud resources that have a label\n  ``env''.\n* ```tagKeys:env``` to find Cloud resources that are directly attached\nto tags where the\n  [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey)\n  contains `env`.\n* ```tagValues:prod*``` to find Cloud resources that are directly\n  attached to tags where the\n  [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue)\n  contains a word prefixed by `prod`.\n* ```tagValueIds=tagValues/123``` to find Cloud resources that are\n  directly attached to tags where the\n  [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue)\n  is exactly `tagValues/123`.\n* ```effectiveTagKeys:env``` to find Cloud resources that are directly\n  attached to or inherited tags where the\n  [`TagKey.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey)\n  contains `env`.\n* ```effectiveTagValues:prod*``` to find Cloud resources that are\n  directly attached to or inherited tags where the\n  [`TagValue.namespacedName`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue)\n  contains a word prefixed by `prod`.\n* ```effectiveTagValueIds=tagValues/123``` to find Cloud resources that\n  are directly attached to or inherited tags where the\n  [`TagValue.name`](https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue)\n  is exactly `tagValues/123`.\n* ```kmsKey:key``` to find Cloud resources encrypted with a\n  customer-managed encryption key whose name contains ``key'' as a word.\n  This field is deprecated. Please use the `kmsKeys` field to retrieve\n  KMS key information.\n* ```kmsKeys:key``` to find Cloud resources encrypted with\n  customer-managed encryption keys whose name contains the word ``key''.\n* ```relationships:instance-group-1``` to find Cloud resources that have\n  relationships with ``instance-group-1'' in the related resource name.\n* ```relationships:INSTANCE_TO_INSTANCEGROUP``` to find Compute\n   instances that have relationships of type\n   ``INSTANCE_TO_INSTANCEGROUP''.\n* ```relationships.INSTANCE_TO_INSTANCEGROUP:instance-group-1``` to find\n  Compute instances that have relationships with ``instance-group-1'' in\n  the Compute instance group resource name, for relationship type\n  ``INSTANCE_TO_INSTANCEGROUP''.\n* ```sccSecurityMarks.key=value``` to find Cloud resources that are\n  attached with security marks whose key is ``key'' and value is\n  ``value''.\n* ```sccSecurityMarks.key:*``` to find Cloud resources that are attached\n  with security marks whose key is ``key''.\n* ```state:ACTIVE``` to find Cloud resources whose state contains\n  ``ACTIVE'' as a word.\n* ```NOT state:ACTIVE``` to find Cloud resources whose state doesn't\n  contain ``ACTIVE'' as a word.\n* ```createTime<1609459200``` or ```createTime<2021-01-01``` or\n  ```createTime<\"2021-01-01T00:00:00\"``` to find Cloud resources that\n  were created before ``2021-01-01 00:00:00 UTC''. 1609459200 is the\n  epoch timestamp of ``2021-01-01 00:00:00 UTC'' in seconds.\n* ```updateTime>1609459200``` or ```updateTime>2021-01-01``` or\n  ```updateTime>\"2021-01-01T00:00:00\"``` to find Cloud resources that\n  were updated after ``2021-01-01 00:00:00 UTC''. 1609459200 is the\n  epoch timestamp of ``2021-01-01 00:00:00 UTC'' in seconds.\n* ```Important``` to find Cloud resources that contain ``Important''\n  as a word in any of the searchable fields.\n* ```Impor*``` to find Cloud resources that contain ``Impor'' as a\n  prefix of any word in any of the searchable fields.\n* ```Important location:(us-west1 OR global)``` to find\n  Cloud resources that contain ``Important'' as a word in any of the\n  searchable fields and are also located in the ``us-west1'' region or\n  the ``global'' location",
          args: { name: "QUERY", description: "String", suggestions: [] },
        },
        flag11946,
        {
          name: "--read-mask",
          description:
            'A comma-separated list of fields specifying which fields to be returned\nin the results. Only `"*"` or combination of top level fields can be\nspecified. Examples: `"*"`, `"name,location"`, `"name,versionedResources"`.\n+\nThe read_mask paths must be valid field paths listed but not limited to\nthe following (both snake_case and camelCase are supported):\n  * `name`\n  * `asset_type` or `assetType`\n  * `project`\n  * `display_name` or `displayName`\n  * `description`\n  * `location`\n  * `labels`\n  * `tags`\n  * `effective_tags` or `effectiveTags`\n  * `network_tags` or `networkTags`\n  * `kms_keys` or `kmsKeys`\n  * `create_time` or `createTime`\n  * `update_time` or `updateTime`\n  * `state`\n  * `additional_attributes` or `additionalAttributes`\n  * `versioned_resources` or `versionedResources`\n+\nIf read_mask is not specified, all fields except versionedResources\nwill be returned.\n+\nIf only `"*"` is specified, all fields including versionedResources will\nbe returned',
          args: { name: "READ_MASK", description: "String", suggestions: [] },
        },
        {
          name: "--scope",
          description:
            "A scope can be a project, a folder, or an organization. The search is\nlimited to the Cloud resources within this scope. The caller must be\ngranted the ``cloudasset.assets.searchAllResources'' permission on\nthe desired scope. If not specified, the [configured project property](https://cloud.google.com//sdk/docs/configurations#setting_configuration_properties)\nwill be used. To find the configured project, run:\n```gcloud config get project```. To change the setting, run:\n```gcloud config set project PROJECT_ID```.\n+\nThe allowed values are:\n+\n  * ```projects/{PROJECT_ID}``` (e.g., ``projects/foo-bar'')\n  * ```projects/{PROJECT_NUMBER}``` (e.g., ``projects/12345678'')\n  * ```folders/{FOLDER_NUMBER}``` (e.g., ``folders/1234567'')\n  * ```organizations/{ORGANIZATION_NUMBER}``` (e.g. ``organizations/123456'')",
          args: { name: "SCOPE", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
  ],
};

export default completionSpec;
