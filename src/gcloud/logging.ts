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
const flag1187: Fig.Option = {
  name: "--billing-account",
  description: "Billing account of the view that contains the IAM policy",
  args: { name: "BILLING_ACCOUNT_ID", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1277: Fig.Option = {
  name: "--bucket-name",
  description: "The Log Bucket name which owns the log-based metric",
  args: { name: "BUCKET_NAME", description: "String", suggestions: [] },
};
const flag1279: Fig.Option = {
  name: "--bucket",
  description: "ID of bucket",
  args: {
    name: "BUCKET",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag1280: Fig.Option = {
  name: "--bucket",
  description: "ID of the bucket that contains the view",
  args: {
    name: "BUCKET",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag2103: Fig.Option = {
  name: "--cmek-kms-key-name",
  description: "A valid `kms_key_name` will enable CMEK for the bucket",
  args: { name: "CMEK_KMS_KEY_NAME", description: "String", suggestions: [] },
};
const flag2218: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2661: Fig.Option = {
  name: "--custom-writer-identity",
  description:
    "Writer identity for the sink. This flag can only be used if the destination is a log bucket in a different project. The writer identity is automatically generated when it is not provided for a sink",
  args: {
    name: "SERVICE_ACCOUNT_EMAIL",
    description: "String",
    suggestions: [],
  },
};
const flag3234: Fig.Option = {
  name: "--description",
  description: "Description of the sink",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag4018: Fig.Option = {
  name: "--enable-analytics",
  description:
    "Whether to opt the bucket into Log Analytics. Once opted in, the bucket cannot be opted out of Log Analytics",
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
const flag4980: Fig.Option = {
  name: "--folder",
  description: "Folder of the view that contains the IAM policy",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
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
const flag5733: Fig.Option = {
  name: "--include-children",
  description:
    "Whether to export logs from all child projects and folders. Only applies to sinks for organizations and folders",
};
const flag5942: Fig.Option = {
  name: "--intercept-children",
  description:
    "Whether to intercept logs from all child projects and folders. Only applies to sinks for organizations and folders",
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
const flag6768: Fig.Option = {
  name: "--location",
  description: "Location of the bucket that contains the view",
  args: {
    name: "LOCATION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag6772: Fig.Option = {
  name: "--location",
  description: "Location of the bucket",
  args: {
    name: "LOCATION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag6791: Fig.Option = {
  name: "--location",
  description: "Location of the log bucket",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6800: Fig.Option = {
  name: "--location",
  description: "Location of the operation",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6816: Fig.Option = {
  name: "--location",
  description: "Location of the specified bucket",
  args: {
    name: "LOCATION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10948: Fig.Option = {
  name: "--organization",
  description: "Organization of the view that contains the IAM policy",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
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
const flag15294: Fig.Option = {
  name: "--use-partitioned-tables",
  description:
    "If specified, use BigQuery's partitioned tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. 'syslog_20170523'. Partitioned tables remove the suffix and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) must be used",
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
  name: "logging",
  description: "Manage Cloud Logging",
  subcommands: [
    {
      name: "buckets",
      description: "Manage Cloud Logging buckets",
      subcommands: [
        {
          name: "create",
          description: "Create a bucket",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2103,
            flag2292,
            {
              name: "--description",
              description: "A textual description for the bucket",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4018,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--index",
              description:
                "Specify an index to be added to the log bucket. This flag can be repeated. The ``fieldPath'' and ``type'' attributes are required. For example:  --index=fieldPath=jsonPayload.foo,type=INDEX_TYPE_STRING. The following keys are accepted:\n+\n*fieldPath*::: The LogEntry field path to index. For example: jsonPayload.request.status. Paths are limited to 800 characters and can include only letters, digits, underscores, hyphens, and periods.\n+\n*type*::: The type of data in this index. For example: INDEX_TYPE_STRING Supported types are INDEX_TYPE_STRING and INDEX_TYPE_INTEGER",
              args: {
                name: "KEY=VALUE, ...",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "Location in which to create the bucket. Once the bucket is created, the location cannot be changed",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--restricted-fields",
              description:
                "Comma-separated list of field paths that require permission checks in this bucket. The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation",
              args: {
                name: "RESTRICTED_FIELD",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--retention-days",
              description:
                "The period logs will be retained, after which logs will automatically be deleted. The default is 30 days",
              args: {
                name: "RETENTION_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BUCKET_ID",
            description: "ID of the bucket to create",
          },
        },
        {
          name: "delete",
          description: "Delete a bucket",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the bucket to delete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the bucket to delete",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "BUCKET_ID",
            description: "ID of the bucket to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a bucket",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the bucket to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the bucket to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "BUCKET_ID",
            description: "The id of the bucket to describe",
          },
        },
        {
          name: "list",
          description: "List the defined buckets",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the buckets to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the buckets to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description:
                "Location from which to list buckets. By default, buckets in all locations will be listed",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the buckets to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "undelete",
          description: "Undelete a bucket",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to undelete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the bucket to undelete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the bucket to undelete",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "BUCKET_ID",
            description: "ID of the bucket to undelete",
          },
        },
        {
          name: "update",
          description: "Update a bucket",
          options: [
            flag42,
            flag46,
            {
              name: "--add-index",
              description:
                "Add an index to be added to the log bucket. This flag can be repeated. The ``fieldPath'' and ``type'' attributes are required. For example:  --index=fieldPath=jsonPayload.foo,type=INDEX_TYPE_STRING. The following keys are accepted:\n+\n*fieldPath*::: The LogEntry field path to index. For example: jsonPayload.request.status. Paths are limited to 800 characters and can include only letters, digits, underscores, hyphens, and periods.\n+\n*type*::: The type of data in this index. For example: INDEX_TYPE_STRING Supported types are strings and integers",
              args: {
                name: "KEY=VALUE, ...",
                description: "Dict",
                suggestions: [],
              },
            },
            flag720,
            {
              name: "--billing-account",
              description: "Billing account of the bucket to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-indexes",
              description: "Remove all logging indexes from the bucket",
            },
            flag2103,
            flag2292,
            {
              name: "--description",
              description: "A new description for the bucket",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4018,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the bucket to update",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            {
              name: "--locked",
              description:
                "Lock the bucket and prevent it from being modified or deleted (unless it is empty)",
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the bucket to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-indexes",
              description:
                "Specify the field path of the logging index(es) to delete",
              args: {
                name: "FIELD PATH",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--restricted-fields",
              description: "A new set of restricted fields for the bucket",
              args: {
                name: "RESTRICTED_FIELD",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--retention-days",
              description: "A new retention period for the bucket",
              args: {
                name: "RETENTION_DAYS",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-index",
              description:
                "Update an index to be added to the log bucket. This will update the type of the index, and also update its createTime to the new update time. This flag can be repeated. The ``fieldPath'' and ``type'' attributes are required. For example:  --index=fieldPath=jsonPayload.foo,type=INDEX_TYPE_STRING. The following keys are accepted:\n+\n*fieldPath*::: The LogEntry field path to index. For example: jsonPayload.request.status. Paths are limited to 800 characters and can include only letters, digits, underscores, hyphens, and periods.\n+\n*type*::: The type of data in this index. For example: INDEX_TYPE_STRING Supported types are strings and integers",
              args: {
                name: "KEY=VALUE, ...",
                description: "Dict",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "BUCKET_ID",
            description: "The id of the bucket to update",
          },
        },
      ],
    },
    {
      name: "copy",
      description: "Copy log entries",
      options: [
        flag42,
        flag46,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to copy",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
            suggestions: [],
          },
        },
        flag1201,
        flag2292,
        flag4900,
        flag4902,
        {
          name: "--folder",
          description: "Folder of the log entries to copy",
          args: { name: "FOLDER_ID", description: "String", suggestions: [] },
        },
        flag5091,
        flag5453,
        flag5699,
        flag6791,
        {
          name: "--log-filter",
          description:
            "A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries",
          args: { name: "LOG_FILTER", description: "String", suggestions: [] },
        },
        flag7356,
        {
          name: "--organization",
          description: "Organization of the log entries to copy",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
            suggestions: [],
          },
        },
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "BUCKET_ID",
          description:
            "Id of the log bucket to copy logs from. Example: my-bucket",
        },
        {
          name: "DESTINATION",
          description:
            "Destination to copy logs to. Example: Cloud Storage bucket: storage.googleapis.com/my-cloud-storage-bucket",
        },
      ],
    },
    {
      name: "links",
      description: "Manage linked datasets",
      subcommands: [
        {
          name: "create",
          description: "Create a linked dataset on an analytics log bucket",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--billing-account",
              description: "Billing account of the linked dataset to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--bucket",
              description: "ID of the bucket that will hold the linked dataset",
              args: {
                name: "BUCKET",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description: "A textual description for the linked dataset",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the linked dataset to create",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Location of the bucket that will hold the linked datasert",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the linked dataset to create",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "LINK_ID",
            description: "ID of the linked dataset to create",
          },
        },
        {
          name: "delete",
          description: "Delete a linked dataset",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--billing-account",
              description: "Billing account of the linked dataset to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1279,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the linked dataset to delete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the linked dataset to delete",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "LINK_ID",
            description: "ID of the linked dataset to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a linked dataset",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the linked dataset to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1279,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the linked dataset to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the linked dataset to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "LINK_ID",
            description: "Id of the linked dataset to describe",
          },
        },
        {
          name: "list",
          description: "List created linked datasets on the specified bucket",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the linked datasets to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1279,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the linked datasets to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6816,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the linked datasets to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
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
      name: "locations",
      description: "Query Cloud Logging locations",
      subcommands: [
        {
          name: "describe",
          description: "Display information about a location",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the location to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the location to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the location to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "LOCATION_ID",
            description: "Id of the location to describe",
          },
        },
        {
          name: "list",
          description: "List the availables location",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the locations to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the locations to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the locations to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
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
      name: "logs",
      description: "Manages your project's logs",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete all entries from a log in the global ```_Default``` log bucket",
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
          args: { name: "LOG_NAME", description: "Log name" },
        },
        {
          name: "list",
          description: "List your project's logs",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--bucket",
              description: "Id of the log bucket",
              args: { name: "BUCKET", description: "String", suggestions: [] },
            },
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6791,
            flag7356,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--view",
              description: "Id of the view",
              args: { name: "VIEW", description: "String", suggestions: [] },
            },
          ],
        },
      ],
    },
    {
      name: "metrics",
      description: "Manages logs-based metrics",
      subcommands: [
        {
          name: "create",
          description: "Create a logs-based metric",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1277,
            {
              name: "--config-from-file",
              description:
                "A path to a YAML or JSON file specifying the logs-based metric to create. Use a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description: "The metric's description",
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
            {
              name: "--log-filter",
              description: "The metric's filter expression",
              args: {
                name: "LOG_FILTER",
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
            name: "METRIC_NAME",
            description: "The name of the new metric",
          },
        },
        {
          name: "delete",
          description: "Delete a logs-based metric",
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
            name: "METRIC_NAME",
            description: "The name of the metric to delete",
          },
        },
        {
          name: "describe",
          description: "Display the definition of a logs-based metric",
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
          args: { name: "METRIC_NAME", description: "The name of the metric" },
        },
        {
          name: "list",
          description: "Display all logs-based metrics",
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
          description: "Update the definition of a logs-based metric",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1277,
            {
              name: "--config-from-file",
              description:
                "A path to a YAML file specifying the updates to be made to the logs-based metric. Use a full or relative path to a local file containing the value of config",
              args: {
                name: "CONFIG_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description:
                "A new description for the metric. If omitted, the description is not changed",
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
            {
              name: "--log-filter",
              description:
                "A new filter string for the metric. If omitted, the filter is not changed",
              args: {
                name: "LOG_FILTER",
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
            name: "METRIC_NAME",
            description: "The name of the log-based metric to update",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage long running operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a long running operation",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the operation to cancel",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the operation to cancel",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6800,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the operation to cancel",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "OPERATION_ID",
            description: "The Id of the operation",
          },
        },
        {
          name: "describe",
          description: "Display the information about a long running operation",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the operation to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the operation to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6800,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the operation to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "OPERATION_ID",
            description: "The Id of the operation",
          },
        },
        {
          name: "list",
          description: "List long running operations",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the operations to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the operations to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description: "Location of the operations",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--operation-filter",
              description:
                "Filter expression that specifies the operations to return",
              args: {
                name: "OPERATION_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--organization",
              description: "Organization of the operations to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            {
              name: "--page-token",
              description:
                "The next_page_token value returned from a previous List request, if any",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
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
      name: "read",
      description: "Read log entries",
      options: [
        flag42,
        flag46,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to read",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
            suggestions: [],
          },
        },
        flag1201,
        {
          name: "--bucket",
          description:
            "Id of the log bucket. If this argument is provided then `--location` and `--view` must also be specified",
          args: { name: "BUCKET", description: "String", suggestions: [] },
        },
        flag2292,
        flag4900,
        flag4902,
        {
          name: "--folder",
          description: "Folder of the log entries to read",
          args: { name: "FOLDER_ID", description: "String", suggestions: [] },
        },
        flag5091,
        {
          name: "--freshness",
          description:
            "Return entries that are not older than this value. Works only with DESC ordering and filters without a timestamp. See $ gcloud topic datetimes for information on duration formats",
          args: {
            name: "FRESHNESS",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
            suggestions: [],
          },
        },
        flag5453,
        flag5699,
        flag6515,
        {
          name: "--location",
          description:
            "Location of the log bucket. If this argument is provided then `--bucket` and `--view` must also be specified",
          args: { name: "LOCATION", description: "String", suggestions: [] },
        },
        flag7356,
        {
          name: "--order",
          description:
            "Ordering of returned log entries based on timestamp field. _ORDER_ must be one of: *desc*, *asc*",
          args: {
            name: "ORDER",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["desc", "asc"],
          },
        },
        {
          name: "--organization",
          description: "Organization of the log entries to read",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
            suggestions: [],
          },
        },
        flag11946,
        {
          name: "--resource-names",
          description:
            'Resource name(s) to read logs from. A resource can either be an top-level resource (e.g., "projects/my-project") or a full log view resource path (e.g., "projects/my-project/locations/my-location/buckets/my-bucket/views/my-view"). Multiple resources can be specified, separated by a comma',
          args: { name: "RESOURCE", description: "List", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
        {
          name: "--view",
          description:
            "Id of the view. If this argument is provided then `--location` and `--bucket` must also be specified",
          args: { name: "VIEW", description: "String", suggestions: [] },
        },
      ],
      args: {
        name: "LOG_FILTER",
        description:
          "Filter expression that specifies the log entries to return. Detailed information about filters can be found at: https://cloud.google.com/logging/docs/view/logging-query-language",
        isOptional: true,
      },
    },
    {
      name: "recent-queries",
      description: "Manage Cloud Logging recent queries",
      subcommands: [
        {
          name: "list",
          description: "List Logging recent queries",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description:
                "Billing account of the parent resource for recent queries to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description:
                "Folder of the parent resource for recent queries to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description: "Location of the recent queries to list",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "Organization of the parent resource for recent queries to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
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
      name: "resource-descriptors",
      description: "Get information about resource descriptors",
      subcommands: [
        {
          name: "list",
          description: "List all available resource descriptors",
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
      name: "saved-queries",
      description: "Manage Cloud Logging saved queries",
      subcommands: [
        {
          name: "create",
          description: "Create a Logging saved query",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the saved query to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A textual description for the saved query",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Display name for the saved query",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the saved query to create",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            {
              name: "--id",
              description: "ID of the saved query to create",
              args: { name: "ID", description: "String", suggestions: [] },
            },
            flag5699,
            {
              name: "--location",
              description: "Location to create the saved query in",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--log-filter",
              description: "Filter expression for the log-based query",
              args: {
                name: "LOG_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the saved query to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--sql-query-text",
              description: "SQL query text",
              args: {
                name: "SQL_QUERY_TEXT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--summary-field-end",
              description:
                "Setting for number of characters to display for each summary field: characters will be counted from the end of the string. Requires the --summary-fields flag to be specified as well",
              args: {
                name: "SUMMARY_FIELD_END",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--summary-field-start",
              description:
                "Setting for number of characters to display for each summary field: characters will be counted from the start of the string. Requires the --summary-fields flag to be specified as well",
              args: {
                name: "SUMMARY_FIELD_START",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--summary-fields",
              description:
                "Comma-separated list of fields to include in the summary. This flag must be specified if --summary-field-start or --summary-field-end are provided",
              args: {
                name: "SUMMARY_FIELDS",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--visibility",
              description:
                "Visibility of the saved query. _VISIBILITY_ must be one of: *private*, *shared*",
              args: {
                name: "VISIBILITY",
                description: "String",
                suggestions: ["private", "shared"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Logging saved query",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the saved query to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the saved query to delete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description: "Location of the saved query to delete",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the saved query to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "ID", description: "ID of the saved query to delete" },
        },
        {
          name: "describe",
          description: "A command that describes a Logging saved query",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the saved query to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the saved query to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description: "Location of the saved query to describe",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the saved query to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "ID",
            description: "ID of the saved query to describe",
          },
        },
        {
          name: "list",
          description: "List Logging saved queries",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description:
                "Billing account of the parent resource for saved queries to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description:
                "Folder of the parent resource for saved queries to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description: "Location of the saved queries to list",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "Organization of the parent resource for saved queries to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
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
          description: "Update Logging saved queries",
          options: [
            flag42,
            flag46,
            {
              name: "--add-summary-field",
              description: "Add a summary field",
              args: {
                name: "ADD_SUMMARY_FIELD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--billing-account",
              description: "Billing account of the saved query to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-summary-fields",
              description: "Clear all summary fields",
            },
            flag2292,
            {
              name: "--description",
              description: "The description of the saved query",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "The display name of the saved query",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the saved query to update",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description: "Location of the saved query",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--log-filter",
              description:
                "The logging filter. If this argument is specified, --sql-query-text may not be specified",
              args: {
                name: "LOG_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--name",
              description: "The resource name of the saved query",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            {
              name: "--organization",
              description: "Organization of the saved query to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-summary-field",
              description: "Remove a summary field",
              args: {
                name: "REMOVE_SUMMARY_FIELD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sql-query-text",
              description:
                "The SQL query text. If this argument is specified, no LoggingQuery arguments (--log-filter, --add-summary-field, etc.) may be specified",
              args: {
                name: "SQL_QUERY_TEXT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--summary-field-end",
              description: "Summary field end",
              args: {
                name: "SUMMARY_FIELD_END",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--summary-field-start",
              description: "Summary field start",
              args: {
                name: "SUMMARY_FIELD_START",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--visibility",
              description: "The visibility of the saved query",
              args: {
                name: "VISIBILITY",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "SAVED_QUERY_ID",
            description: "ID of the saved query to update",
          },
        },
      ],
    },
    {
      name: "scopes",
      description: "Manages Cloud Logging log scopes",
      subcommands: [
        {
          name: "create",
          description: "Create a log scope",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A textual description for the log scope",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the log scope to create",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the log scope to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--resource-names",
              description:
                "Comma-separated list of resource names in this log scope. It could be one or more parent resources or one or more views.  A log scope can include a maximum of 50 projects and a maximum of 100 resources in total. For example, projects/[PROJECT_ID], projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]`",
              args: {
                name: "RESOURCE_NAMES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOG_SCOPE_ID",
            description: "ID of the log scope to create",
          },
        },
        {
          name: "delete",
          description: "Delete a log scope",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the log scope to delete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the log scope to delete",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "LOG_SCOPE_ID",
            description: "ID of the log scope to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a log scope",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the log scope to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the log scope to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "LOG_SCOPE_ID",
            description: "The ID of the log scope to describe",
          },
        },
        {
          name: "list",
          description: "List the defined log scopes",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the log scopes to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the log scopes to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
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
          description: "Update a log scope",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A new description for the log scope",
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
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--resource-names",
              description: "A new set of resource names for the log scope",
              args: {
                name: "RESOURCE_NAMES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOG_SCOPE_ID",
            description: "The ID of the log scope to update",
          },
        },
      ],
    },
    {
      name: "settings",
      description: "Manages the org settings for the Cloud Logging Logs Router",
      subcommands: [
        {
          name: "describe",
          description: "Display the settings for the Cloud Logging Logs Router",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the settings to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the settings to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the settings to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update the settings for the Cloud Logging Logs Router",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-kms-key",
              description:
                "Disable CMEK for the Logs Router by clearing out Cloud KMS cryptokey in the organization's CMEK settings",
            },
            flag2292,
            {
              name: "--disable-default-sink",
              description:
                "Enable or disable ```_Default``` sink for the ```_Default``` bucket. Specify --no-disable-default-sink to enable a disabled ```_Default``` sink. Note: It only applies to the newly created projects and will not affect the projects created before",
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder to update Logs Router settings for",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kms-key-name",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key-name` on the command line",
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-keyring",
              description:
                "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key-name` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
              args: {
                name: "KMS_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-location",
              description:
                "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key-name` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
              args: {
                name: "KMS_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-project",
              description:
                "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key-name` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
              args: {
                name: "KMS_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization to update Logs Router settings for",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--storage-location",
              description:
                "Update the storage location for ```_Default``` bucket and ```_Required``` bucket. Note: It only applies to the newly created projects and will not affect the projects created before",
              args: {
                name: "STORAGE_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "sinks",
      description:
        "Manages sinks used to route logs to storage or export destinations",
      subcommands: [
        {
          name: "create",
          description: "Create a log sink",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the sink to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag2661,
            flag3234,
            {
              name: "--disabled",
              description:
                "Sink will be disabled. Disabled sinks do not export logs",
            },
            {
              name: "--exclusion",
              description:
                "Specify an exclusion filter for a log entry that is not to be exported. This flag can be repeated.\n+\nThe ``name'' and ``filter'' attributes are required. The following keys are accepted:\n+\n*name*::: An identifier, such as ``load-balancer-exclusion''. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.\n+\n*description*::: A description of this exclusion.\n+\n*filter*::: An advanced log filter that matches the log entries to be excluded.\n+\n*disabled*::: If this exclusion should be disabled and not exclude the log entries",
              args: { name: "EXCLUSION", description: "Dict", suggestions: [] },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the sink to create",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag5733,
            flag5942,
            {
              name: "--log-filter",
              description:
                "A filter expression for the sink. If present, the filter specifies which log entries to export",
              args: {
                name: "LOG_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the sink to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15294,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "SINK_NAME", description: "The name for the sink" },
            {
              name: "DESTINATION",
              description: "The destination for the sink",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a sink",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the sink to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the sink to delete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the sink to delete",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "SINK_NAME",
            description: "The name of the sink to delete",
          },
        },
        {
          name: "describe",
          description: "Display information about a sink",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the sink to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the sink to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the sink to describe",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "SINK_NAME",
            description: "The name of the sink to describe",
          },
        },
        {
          name: "list",
          description: "List the defined sinks",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the sinks to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the sinks to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the sinks to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--sink-filter",
              description:
                "A filter expression passed to the Logging API to constrain the sinks returned. For information on accepted values, see https://cloud.google.com/logging/docs/reference/v2/rpc/google.logging.v2#listsinksrequest",
              args: {
                name: "SINK_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a sink",
          options: [
            flag42,
            flag46,
            {
              name: "--add-exclusion",
              description:
                "Add an exclusion filter for log entries that are not to be routed to the sink' destination. This flag can be repeated.\n+\nThe ``name'' and ``filter'' attributes are required. The following keys are accepted:\n+\n*name*::: Required. An identifier, such as ``load-balancer-exclusion''. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.\n+\n*description*::: Optional. A description of this exclusion.\n+\n*filter*::: Required. Entries that match this advanced log filter will be excluded. Filter cannot be empty.\n+\n*disabled*::: Optional. By default, an exclusion is not disabled. To disable an exclusion, include this key and specify any value",
              args: {
                name: "ADD_EXCLUSION",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--billing-account",
              description: "Billing account of the sink to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-exclusions",
              description: "Remove all logging exclusions from the sink",
            },
            flag2292,
            flag2661,
            flag3234,
            {
              name: "--disabled",
              description:
                "Disable the sink. Disabled sinks do not route logs to the sink destination. Specify --no-disabled to enable a disabled sink. If this flag is not specified, the value will not be updated",
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the sink to update",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag5733,
            flag5942,
            {
              name: "--log-filter",
              description:
                "A new filter expression for the sink. If omitted, the sink's existing filter (if any) is unchanged",
              args: {
                name: "LOG_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the sink to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-exclusions",
              description:
                "Specify the name of the Logging exclusion(s) to delete",
              args: {
                name: "EXCLUSION ID",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-exclusion",
              description:
                "Update an exclusion filter for a log entry that is not to be exported. This flag can be repeated.\n+\nThe ``name'' attribute is required. The following keys are accepted:\n+\n*name*::: Required. An identifier, such as ``load-balancer-exclusion''. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.\n+\n*description*::: Optional. A description of this exclusion.\n+\n*filter*::: Optional. Entries that match this advanced log filter will be excluded. Filter cannot be empty.\n+\n*disabled*::: Optional. To disable an exclusion, include this key and specify any value. To enable a disabled exclusion, include this key, but do not specify any value. Do not include this key unless you want to change its value",
              args: {
                name: "UPDATE_EXCLUSION",
                description: "Dict",
                suggestions: [],
              },
            },
            flag15294,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SINK_NAME",
              description: "The name of the sink to update",
            },
            {
              name: "DESTINATION",
              description:
                "A new destination for the sink. If omitted, the sink's existing destination is unchanged",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "views",
      description: "Manage log views",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a log view",
          options: [
            flag42,
            flag46,
            flag1187,
            flag1201,
            flag1280,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag4980,
            flag5091,
            flag5453,
            flag5699,
            flag6768,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag10948,
            flag11946,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VIEW_ID",
            description: "ID of the view that contains the IAM policy",
          },
        },
        {
          name: "create",
          description: "Create a log view on a log bucket",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the view to create",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--bucket",
              description: "ID of the bucket that will hold the view",
              args: {
                name: "BUCKET",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description: "A textual description for the view",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the view to create",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description: "Location of the bucket that will hold the view",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--log-filter",
              description: "A filter for the view",
              args: {
                name: "LOG_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the view to create",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VIEW_ID", description: "ID of the view to create" },
        },
        {
          name: "delete",
          description: "Delete a view",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the view to delete",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1279,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the view to delete",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the view to delete",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VIEW_ID", description: "ID of the view to delete" },
        },
        {
          name: "describe",
          description: "Display information about a view",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the view to describe",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1279,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the view to describe",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6772,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the view to describe",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VIEW_ID", description: "Id of the view to describe" },
        },
        {
          name: "get-iam-policy",
          description: "Display the IAM policy for a view",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the view to fetch IAM policy",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--bucket",
              description: "ID of the bucket that holds the view",
              args: {
                name: "BUCKET",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the view to fetch IAM policy",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description: "Location of the bucket that contains the view",
              args: {
                name: "LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the view to fetch IAM policy",
              args: {
                name: "ORGANIZATION_ID",
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
            name: "VIEW_ID",
            description: "ID of the view to fetch IAM policy",
          },
        },
        {
          name: "list",
          description: "List the defined views",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the views to list",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1279,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the views to list",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6816,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the views to list",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
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
          description: "Remove IAM policy binding to a log view",
          options: [
            flag42,
            flag46,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any\nconditions",
            },
            flag1187,
            flag1201,
            flag1280,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag4980,
            flag5091,
            flag5453,
            flag5699,
            flag6768,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag10948,
            flag11946,
            {
              name: "--role",
              description: "The role to remove the principal from",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VIEW_ID",
            description: "ID of the view that contains the IAM policy",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a view",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the view to set IAM policy",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag1280,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the view to set IAM policy",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6768,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the view to set IAM policy",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "VIEW_ID",
              description: "ID of the view to set IAM policy",
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
          description: "Update a view",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description: "Billing account of the view to update",
              args: {
                name: "BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--bucket",
              description: "ID of the bucket that holds the view",
              args: {
                name: "BUCKET",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description: "New description for the view",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder of the view to update",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6768,
            {
              name: "--log-filter",
              description: "New filter for the view",
              args: {
                name: "LOG_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description: "Organization of the view to update",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VIEW_ID", description: "Id of the view to update" },
        },
      ],
    },
    {
      name: "write",
      description: "Write a log entry",
      options: [
        flag42,
        flag46,
        {
          name: "--billing-account",
          description: "Billing account of the log entries to write",
          args: {
            name: "BILLING_ACCOUNT_ID",
            description: "String",
            suggestions: [],
          },
        },
        flag1201,
        flag2292,
        flag4900,
        flag4902,
        {
          name: "--folder",
          description: "Folder of the log entries to write",
          args: { name: "FOLDER_ID", description: "String", suggestions: [] },
        },
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        {
          name: "--monitored-resource-labels",
          description: "Monitored Resource labels to add to the payload",
          args: {
            name: "KEY=VALUE, ...",
            description: "Dict",
            suggestions: [],
          },
        },
        {
          name: "--monitored-resource-type",
          description: "Monitored Resource type to add to the payload",
          args: {
            name: "MONITORED_RESOURCE_TYPE",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--organization",
          description: "Organization of the log entries to write",
          args: {
            name: "ORGANIZATION_ID",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--payload-type",
          description:
            "Type of the log entry payload. _PAYLOAD_TYPE_ must be one of: *text*, *json*",
          args: {
            name: "PAYLOAD_TYPE",
            description: "String",
            suggestions: ["text", "json"],
          },
        },
        flag11946,
        {
          name: "--severity",
          description:
            "Severity level of the log entry. _SEVERITY_ must be one of: *DEFAULT*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
          args: {
            name: "SEVERITY",
            description: "String",
            suggestions: [
              "DEFAULT",
              "DEBUG",
              "INFO",
              "NOTICE",
              "WARNING",
              "ERROR",
              "CRITICAL",
              "ALERT",
              "EMERGENCY",
            ],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "LOG_NAME",
          description: "Name of the log where the log entry will be written",
        },
        {
          name: "MESSAGE",
          description:
            "Message to put in the log entry. It can be JSON if you include `--payload-type=json`",
        },
      ],
    },
  ],
};

export default completionSpec;
