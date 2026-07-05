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
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag2128: Fig.Option = {
  name: "--collection",
  description:
    "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `--collection` on the command line",
  args: { name: "COLLECTION", description: "String", suggestions: [] },
};
const flag2129: Fig.Option = {
  name: "--collection",
  description:
    "The collection id of the dataObject resource.\n+\nTo set the `collection` attribute:\n* provide the argument `data_object` on the command line with a fully specified name;\n* provide the argument `--collection` on the command line",
  args: { name: "COLLECTION", description: "String", suggestions: [] },
};
const flag2130: Fig.Option = {
  name: "--collection",
  description:
    "The collection id of the index resource.\n+\nTo set the `collection` attribute:\n* provide the argument `index` on the command line with a fully specified name;\n* provide the argument `--collection` on the command line",
  args: { name: "COLLECTION", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2710: Fig.Option = {
  name: "--data-schema",
  description:
    "JSON Schema for data.\nField names must contain only alphanumeric characters,\nunderscores, and hyphens.\nThe schema must be compliant with\n[JSON Schema Draft 7](https://json-schema.org/draft-07/schema)",
  args: {
    name: "DATA_SCHEMA",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
    suggestions: [],
  },
};
const flag2731: Fig.Option = {
  name: "--data",
  description: "The data of the dataObject",
  args: {
    name: "DATA",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
    suggestions: [],
  },
};
const flag3351: Fig.Option = {
  name: "--description",
  description: "User-specified description of the collection",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3836: Fig.Option = {
  name: "--display-name",
  description: "User-specified display name of the collection",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4541: Fig.Option = {
  name: "--etag",
  description: "The etag of the dataObject",
  args: { name: "ETAG", description: "String", suggestions: [] },
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
const flag6389: Fig.Option = {
  name: "--labels",
  description:
    'Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
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
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6776: Fig.Option = {
  name: "--location",
  description: "Location of the collection",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7234: Fig.Option = {
  name: "--location",
  description:
    "The location id of the collection resource.\n+\nTo set the `location` attribute:\n* provide the argument `--collection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7235: Fig.Option = {
  name: "--location",
  description:
    "The location id of the collection resource.\n+\nTo set the `location` attribute:\n* provide the argument `collection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7238: Fig.Option = {
  name: "--location",
  description:
    "The location id of the dataObject resource.\n+\nTo set the `location` attribute:\n* provide the argument `data_object` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7255: Fig.Option = {
  name: "--location",
  description:
    "The location id of the index resource.\n+\nTo set the `location` attribute:\n* provide the argument `index` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
const flag10986: Fig.Option = {
  name: "--output-data-fields",
  description:
    "List of data fields to include in the output. Use `*` to include all data fields",
  args: { name: "DATA_OUTPUT_FIELD", description: "List", suggestions: [] },
};
const flag11005: Fig.Option = {
  name: "--output-metadata-fields",
  description:
    "List of metadata fields to include in the output. Use `*` to include all metadata fields",
  args: { name: "METADATA_OUTPUT_FIELD", description: "List", suggestions: [] },
};
const flag11015: Fig.Option = {
  name: "--output-vector-fields",
  description:
    "List of vector fields to include in the output. Use `*` to include all vector fields",
  args: { name: "VECTOR_OUTPUT_FIELD", description: "List", suggestions: [] },
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
  name: "vector-search",
  description: "Manage Vector Search data objects",
  subcommands: [
    {
      name: "collections",
      description: "Manage Collection resources",
      subcommands: [
        {
          name: "create",
          description: "Create a collection",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2710,
            flag3351,
            flag3836,
            {
              name: "--encryption-spec-crypto-key-name",
              description:
                "Resource name of the Cloud KMS key used to protect the resource.\n+\nThe Cloud KMS key must be in the same region as the resource. It must have\nthe format\n`projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`",
              args: {
                name: "ENCRYPTION_SPEC_CRYPTO_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6389,
            flag7235,
            flag7356,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            {
              name: "--vector-schema",
              description:
                'Schema for vector fields. Only vector fields in this schema will be\nsearchable.\nField names must contain only alphanumeric characters,\nunderscores, and hyphens.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*denseVector*::::\nDense vector field.\n+\n*dimensions*:::::\nDimensionality of the vector field.\n+\n*vertexEmbeddingConfig*:::::\nConfiguration for generating embeddings for the vector field. If not\nspecified, the embedding field must be populated in the DataObject.\n+\n*modelId*::::::\nRequired: ID of the embedding model to use. See\nhttps://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models\nfor the list of supported models.\n+\n*taskType*::::::\nRequired: Task type for the embeddings.\n+\n*textTemplate*::::::\nRequired: Text template for the input to the model. The template must\ncontain one or more references to fields in the DataObject, e.g.:\n"Movie Title: {title} ---- Movie Plot: {plot}".\n+\n*sparseVector*::::\nSparse vector field.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--vector-schema=string={denseVector={dimensions=int,vertexEmbeddingConfig={modelId=string,taskType=string,textTemplate=string}},sparseVector}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--vector-schema=\'{"string": {"denseVector": {"dimensions": int, "vertexEmbeddingConfig": {"modelId": "string", "taskType": "string", "textTemplate": "string"}}, "sparseVector": {}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--vector-schema=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "VECTOR_SCHEMA",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `collection` on the command line",
          },
        },
        {
          name: "data-objects",
          description: "Manage Vector Search data objects",
          subcommands: [
            {
              name: "aggregate",
              description: "Aggregate data objects",
              options: [
                flag42,
                flag46,
                {
                  name: "--aggregation-method",
                  description:
                    "The aggregation method to apply to the query. _AGGREGATION_METHOD_ must be (only one value is supported):\n+\n*count*::: Count the number of data objects that match the filter.\n:::\n+",
                  args: {
                    name: "AGGREGATION_METHOD",
                    description: "String",
                    suggestions: ["count"],
                  },
                },
                flag1201,
                {
                  name: "--collection",
                  description: "The collection to aggregate data objects from",
                  args: {
                    name: "COLLECTION",
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
                {
                  name: "--json-filter",
                  description:
                    'A filter expression in JSON format to apply to the aggregate, e.g. ```\'{"genre": {"$eq": "sci-fi"}}\'```',
                  args: {
                    name: "JSON_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6776,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "batch-create",
              description: "Create a batch of data objects",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2128,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7234,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--requests",
                  description:
                    'Required, The request message specifying the resources to create.\nA maximum of 1000 DataObjects can be created in a batch.\n+\n*dataObject*:::\nThe DataObject to create.\n+\n*data*::::\nThe data of the dataObject.\n+\n*etag*::::\nThe etag of the dataObject.\n+\n*name*::::\nIdentifier. The fully qualified resource name of the dataObject.\n+\nFormat:\n`projects/{project}/locations/{location}/collections/{collection}/dataObjects/{data_object_id}`\nThe data_object_id must be 1-63 characters\nlong, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).\n+\n*vectors*::::\nThe vectors of the dataObject.\n+\n*KEY*:::::\nSets `KEY` value.\n+\n*VALUE*:::::\nSets `VALUE` value.\n+\n*dense*::::::\nA dense vector.\n+\n*values*:::::::\nThe values of the vector.\n+\n*sparse*::::::\nA sparse vector.\n+\n*indices*:::::::\nThe corresponding indices for the values.\n+\n*values*:::::::\nThe values of the vector.\n+\n*dataObjectId*:::\nThe id of the dataObject to create.\nThe id must be 1-63 characters long, and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).\nSpecifically, it must be 1-63 characters long and match the regular\nexpression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?`.\n+\n*parent*:::\nThe resource name of the Collection to create the DataObject in.\nFormat: `projects/{project}/locations/{location}/collections/{collection}`.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--requests=dataObject={data={...},etag=string,name=string,vectors={string={dense={values=[float]},sparse={indices=[int],values=[float]}}}},dataObjectId=string,parent=string --requests=dataObject={data={...},etag=string,name=string,vectors={string={dense={values=[float]},sparse={indices=[int],values=[float]}}}},dataObjectId=string,parent=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--requests=\'[{"dataObject": {"data": {...}, "etag": "string", "name": "string", "vectors": {"string": {"dense": {"values": [float]}, "sparse": {"indices": [int], "values": [float]}}}}, "dataObjectId": "string", "parent": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--requests=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REQUESTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "batch-delete",
              description: "Delete a batch of data objects",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2128,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7234,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--requests",
                  description:
                    'Required, The request message specifying the resources to delete.\nA maximum of 1000 DataObjects can be deleted in a batch.\n+\n*etag*:::\nThe current etag of the DataObject.\nIf an etag is provided and does not match the current etag of the\nDataObject, deletion will be blocked and an ABORTED error will be returned.\n+\n*name*:::\nThe name of the DataObject resource to be deleted.\nFormat:\n`projects/{project}/locations/{location}/collections/{collection}/dataObjects/{dataObject}`.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--requests=etag=string,name=string --requests=etag=string,name=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--requests=\'[{"etag": "string", "name": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--requests=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REQUESTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "batch-search",
              description:
                "Batch search data objects from a Vector Search collection",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--collection",
                  description:
                    "The collection to batch search data objects from",
                  args: {
                    name: "COLLECTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--combine-output-data-fields",
                  description:
                    "List of data fields to include in combined output",
                  args: {
                    name: "DATA_OUTPUT_FIELD",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--combine-output-metadata-fields",
                  description:
                    "List of metadata fields to include in combined output",
                  args: {
                    name: "METADATA_OUTPUT_FIELD",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--combine-output-vector-fields",
                  description:
                    "List of vector fields to include in combined output",
                  args: {
                    name: "VECTOR_OUTPUT_FIELD",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--combine-top-k",
                  description: "Top K results to return when combining results",
                  args: {
                    name: "COMBINE_TOP_K",
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
                flag6776,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--rrf-weights",
                  description: "RRF weights for combining results",
                  args: {
                    name: "WEIGHT",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--searches-from-file",
                  description:
                    'Path to a JSON file containing a list of searches.\nEach element in list should be a JSON object representing a Search message,\ne.g., `{"semanticSearch": {"searchText": "...", "searchField": "..."}}`.\nKeys must be camelCase as in API definition.\nExample file content:\n+\n```\n[\n  {\n    "vectorSearch": {\n      "vector": {\n        "values": [\n          1,\n          2,\n          3,\n          4\n        ]\n      },\n      "searchField": "genre_embedding",\n      "topK": 10,\n      "outputFields": {\n        "dataFields": [\n          "director",\n          "genre",\n          "title",\n          "year"\n        ]\n      }\n    }\n  },\n  {\n    "semanticSearch": {\n      "searchText": "sci-fi movie",\n      "searchField": "plot_embedding",\n      "taskType": "SEMANTIC_SIMILARITY",\n      "topK": 10\n    }\n  },\n  {\n    "textSearch": {\n      "searchText": "movie 1",\n      "dataFieldNames": ["title"],\n      "topK": 10\n    }\n  }\n]\n```',
                  args: {
                    name: "SEARCHES_FROM_FILE",
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
              name: "batch-update",
              description: "Update a batch of data objects",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2128,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7234,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--requests",
                  description:
                    'Required, The request message specifying the resources to update.\nA maximum of 1000 DataObjects can be updated in a batch.\n+\n*dataObject*:::\nThe DataObject which replaces the resource on the server.\n+\n*data*::::\nThe data of the dataObject.\n+\n*etag*::::\nThe etag of the dataObject.\n+\n*name*::::\nIdentifier. The fully qualified resource name of the dataObject.\n+\nFormat:\n`projects/{project}/locations/{location}/collections/{collection}/dataObjects/{data_object_id}`\nThe data_object_id must be 1-63 characters\nlong, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).\n+\n*vectors*::::\nThe vectors of the dataObject.\n+\n*KEY*:::::\nSets `KEY` value.\n+\n*VALUE*:::::\nSets `VALUE` value.\n+\n*dense*::::::\nA dense vector.\n+\n*values*:::::::\nThe values of the vector.\n+\n*sparse*::::::\nA sparse vector.\n+\n*indices*:::::::\nThe corresponding indices for the values.\n+\n*values*:::::::\nThe values of the vector.\n+\n*updateMask*:::\nThe update mask applies to the resource. See [google.protobuf.FieldMask][google.protobuf.FieldMask].\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--requests=dataObject={data={...},etag=string,name=string,vectors={string={dense={values=[float]},sparse={indices=[int],values=[float]}}}},updateMask=string --requests=dataObject={data={...},etag=string,name=string,vectors={string={dense={values=[float]},sparse={indices=[int],values=[float]}}}},updateMask=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--requests=\'[{"dataObject": {"data": {...}, "etag": "string", "name": "string", "vectors": {"string": {"dense": {"values": [float]}, "sparse": {"indices": [int], "values": [float]}}}}, "updateMask": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--requests=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REQUESTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
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
              description: "Create a data object",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2129,
                flag2292,
                flag2731,
                flag4541,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7238,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                {
                  name: "--vectors",
                  description:
                    'The vectors of the dataObject.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*dense*::::\nA dense vector.\n+\n*values*:::::\nThe values of the vector.\n+\n*sparse*::::\nA sparse vector.\n+\n*indices*:::::\nThe corresponding indices for the values.\n+\n*values*:::::\nThe values of the vector.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--vectors=string={dense={values=[float]},sparse={indices=[int],values=[float]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--vectors=\'{"string": {"dense": {"values": [float]}, "sparse": {"indices": [int], "values": [float]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--vectors=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "VECTORS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject.\n+\nTo set the `data_object` attribute:\n* provide the argument `data_object` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a data object",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2129,
                flag2292,
                {
                  name: "--etag",
                  description:
                    "The current etag of the DataObject.\nIf an etag is provided and does not match the current etag of the\nDataObject, deletion will be blocked and an ABORTED error will be returned",
                  args: {
                    name: "ETAG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7238,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject.\n+\nTo set the `data_object` attribute:\n* provide the argument `data_object` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a data object",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2129,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7238,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject.\n+\nTo set the `data_object` attribute:\n* provide the argument `data_object` on the command line",
              },
            },
            {
              name: "query",
              description: "Query data objects from a Vector Search collection",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--collection",
                  description: "The collection to query data objects from",
                  args: {
                    name: "COLLECTION",
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
                {
                  name: "--json-filter",
                  description:
                    'A filter expression in JSON format to apply to the query, e.g. ```\'{"genre": {"$eq": "sci-fi"}}\'```',
                  args: {
                    name: "JSON_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6515,
                flag6776,
                flag7356,
                flag10986,
                flag11005,
                flag11015,
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
              name: "search",
              description:
                "Search data objects from a Vector Search collection",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--collection",
                  description: "The collection to search data objects from",
                  args: {
                    name: "COLLECTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--distance-metric",
                  description:
                    "The distance metric to use for the KNN search. If not specified, dot-product will be used as the default. _DISTANCE_METRIC_ must be one of:\n+\n*cosine-distance*::: Cosine distance metric.\n*dot-product*::: Dot product distance metric.\n:::\n+",
                  args: {
                    name: "DISTANCE_METRIC",
                    description: "String",
                    suggestions: ["cosine-distance", "dot-product"],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--json-filter",
                  description:
                    'A filter expression in JSON format to apply to the search, e.g. ```\'{"genre": {"$eq": "sci-fi"}}\'```',
                  args: {
                    name: "JSON_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6776,
                flag7356,
                flag10986,
                flag11005,
                flag11015,
                flag11637,
                flag11946,
                {
                  name: "--semantic-search-field",
                  description: "The vector field to search",
                  args: {
                    name: "SEMANTIC_SEARCH_FIELD",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--semantic-search-text",
                  description: "The query text for semantic search",
                  args: {
                    name: "SEMANTIC_SEARCH_TEXT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--semantic-task-type",
                  description:
                    "The task type of the query embedding for semantic search. _SEMANTIC_TASK_TYPE_ must be one of:\n+\n*classification*::: Specifies that the given text will be classified.\n*clustering*::: Specifies that the embeddings will be used for clustering.\n*code-retrieval-query*::: Specifies that the embeddings will be used for code retrieval.\n*fact-verification*::: Specifies that the embeddings will be used for fact verification.\n*question-answering*::: Specifies that the embeddings will be used for question answering.\n*retrieval-document*::: Specifies the given text is a document from the corpus being searched.\n*retrieval-query*::: Specifies the given text is a query in a search/retrieval setting.\n*semantic-similarity*::: Specifies the given text will be used for STS.\n:::\n+",
                  args: {
                    name: "SEMANTIC_TASK_TYPE",
                    description: "String",
                    suggestions: [
                      "classification",
                      "clustering",
                      "code-retrieval-query",
                      "fact-verification",
                      "question-answering",
                      "retrieval-document",
                      "retrieval-query",
                      "semantic-similarity",
                    ],
                  },
                },
                {
                  name: "--text-search-data-fields",
                  description: "The data field names to search",
                  args: {
                    name: "DATA_FIELD_NAME",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--text-search-text",
                  description: "The query text for text search",
                  args: {
                    name: "TEXT_SEARCH_TEXT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--top-k",
                  description:
                    "The number of nearest neighbors to return. Default is 10",
                  args: { name: "TOP_K", description: "Int", suggestions: [] },
                },
                flag14975,
                {
                  name: "--use-index",
                  description:
                    "Full resource name or ID of the index to use for the search.\nThis flag is compatible only with Semantic Search and Vector Search",
                  args: {
                    name: "INDEX",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--use-knn",
                  description:
                    "If set to true, the search will use the system's default K-Nearest\nNeighbor (KNN) index engine.\nThis flag is compatible only with Semantic Search and Vector Search",
                },
                flag15315,
                {
                  name: "--vector-from-file",
                  description:
                    'Path to a JSON file containing dense or sparse vector to search with.\n+\n* Example file content for dense vector:\n+\n```\n{\n  "dense": {\n    "values": [\n      0.7,\n      0.6,\n      0.5,\n      0.4\n    ]\n  }\n}\n```\n+\n* Example file content for sparse vector:\n+\n```\n{\n  "sparse": {\n    "indices": [1, 5, 10],\n    "values": [0.1, 0.5, 0.21]\n  }\n}\n```',
                  args: {
                    name: "VECTOR_FROM_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vector-search-field",
                  description: "The vector field to search",
                  args: {
                    name: "VECTOR_SEARCH_FIELD",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
            },
            {
              name: "update",
              description: "Update a data object",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--clear-vectors",
                  description: "Clear vectors value and set to empty map",
                },
                flag2129,
                flag2292,
                flag2731,
                flag4541,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7238,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--remove-vectors",
                  description:
                    'Remove existing value from map vectors. Sets `remove_vectors` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-vectors=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-vectors=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-vectors=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_VECTORS",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--update-vectors",
                  description:
                    'Update vectors value or add key value pair. The vectors of the dataObject.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*dense*::::\nA dense vector.\n+\n*values*:::::\nThe values of the vector.\n+\n*sparse*::::\nA sparse vector.\n+\n*indices*:::::\nThe corresponding indices for the values.\n+\n*values*:::::\nThe values of the vector.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-vectors=string={dense={values=[float]},sparse={indices=[int],values=[float]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-vectors=\'{"string": {"dense": {"values": [float]}, "sparse": {"indices": [int], "values": [float]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-vectors=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "UPDATE_VECTORS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag15315,
                {
                  name: "--vectors",
                  description:
                    'Set vectors to new value. The vectors of the dataObject.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*dense*::::\nA dense vector.\n+\n*values*:::::\nThe values of the vector.\n+\n*sparse*::::\nA sparse vector.\n+\n*indices*:::::\nThe corresponding indices for the values.\n+\n*values*:::::\nThe values of the vector.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--vectors=string={dense={values=[float]},sparse={indices=[int],values=[float]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--vectors=\'{"string": {"dense": {"values": [float]}, "sparse": {"indices": [int], "values": [float]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--vectors=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "VECTORS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
              args: {
                name: "DATA_OBJECT",
                description:
                  "ID of the dataObject or fully qualified identifier for the dataObject.\n+\nTo set the `data_object` attribute:\n* provide the argument `data_object` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a collection",
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
            flag7235,
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
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `collection` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a collection",
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
            flag7235,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `collection` on the command line",
          },
        },
        {
          name: "export-data-objects",
          description: "Export data objects from a collection",
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
              name: "--gcs-destination-export-uri",
              description:
                "URI prefix of the Cloud Storage where to export Data Objects.\nThe bucket is required to be in the same region as the collection",
              args: {
                name: "GCS_DESTINATION_EXPORT_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gcs-destination-format",
              description:
                "The format of the exported Data Objects. _GCS_DESTINATION_FORMAT_ must be (only one value is supported):\n+\n*jsonl*::: Exports Data Objects in `JSONL` format.\n:::\n+",
              args: {
                name: "GCS_DESTINATION_FORMAT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["jsonl"],
              },
            },
            flag5453,
            flag5699,
            flag7235,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `collection` on the command line",
          },
        },
        {
          name: "import-data-objects",
          description: "Import data objects into a collection",
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
              name: "--gcs-import-contents-uri",
              description:
                "URI prefix of the Cloud Storage DataObjects to import",
              args: {
                name: "GCS_IMPORT_CONTENTS_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gcs-import-error-uri",
              description:
                "URI prefix of the Cloud Storage location to write any errors encountered\nduring the import",
              args: {
                name: "GCS_IMPORT_ERROR_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gcs-import-output-uri",
              description:
                "URI prefix of the Cloud Storage location to write DataObject `IDs` and\n`etags` of DataObjects that were successfully imported. The service will\nwrite the successfully imported DataObjects to sharded files under this\nprefix. If this field is empty, no output will be written",
              args: {
                name: "GCS_IMPORT_OUTPUT_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7235,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `collection` on the command line",
          },
        },
        {
          name: "indexes",
          description: "Manage Index resources",
          subcommands: [
            {
              name: "create",
              description: "Create an index",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2130,
                flag2292,
                {
                  name: "--dedicated-infrastructure-autoscaling-spec-max-replica-count",
                  description:
                    "The maximum number of replicas.  Must be >=\n`min_replica_count` and <= `1000`.\nFor the v1beta version, if not set or set to `0`, defaults to\nthe greater of `min_replica_count` and `5`.\nFor all other versions, if not set or set to `0`, defaults to\nthe greater of `min_replica_count` and `2`",
                  args: {
                    name: "DEDICATED_INFRASTRUCTURE_AUTOSCALING_SPEC_MAX_REPLICA_COUNT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--dedicated-infrastructure-autoscaling-spec-min-replica-count",
                  description:
                    "The minimum number of replicas. If not set or set to `0`, defaults to\n`2`. Must be >= `1` and <= `1000`",
                  args: {
                    name: "DEDICATED_INFRASTRUCTURE_AUTOSCALING_SPEC_MIN_REPLICA_COUNT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--dedicated-infrastructure-mode",
                  description:
                    "Mode of the dedicated infrastructure. _DEDICATED_INFRASTRUCTURE_MODE_ must be one of:\n+\n*performance-optimized*::: This is Performance optimized on E2 or equivalent family.\n*storage-optimized*::: This is storage optimized variation.\n:::\n+",
                  args: {
                    name: "DEDICATED_INFRASTRUCTURE_MODE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["performance-optimized", "storage-optimized"],
                  },
                },
                {
                  name: "--dense-scann-feature-norm-type",
                  description:
                    "Feature norm type. _DENSE_SCANN_FEATURE_NORM_TYPE_ must be one of:\n+\n*none*::: No norm applied.\n*unit-l2-norm*::: Unit L2 norm.\n:::\n+",
                  args: {
                    name: "DENSE_SCANN_FEATURE_NORM_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["none", "unit-l2-norm"],
                  },
                },
                {
                  name: "--description",
                  description: "User-specified description of the index",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--display-name",
                  description: "User-specified display name of the index",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--distance-metric",
                  description:
                    "Distance metric used for indexing. If not specified, will default to\nDOT_PRODUCT. _DISTANCE_METRIC_ must be one of:\n+\n*cosine-distance*::: Cosine distance metric.\n*dot-product*::: Dot product distance metric.\n:::\n+",
                  args: {
                    name: "DISTANCE_METRIC",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["cosine-distance", "dot-product"],
                  },
                },
                {
                  name: "--filter-fields",
                  description:
                    "The fields to push into the index to enable fast ANN inline filtering",
                  args: {
                    name: "FILTER_FIELDS",
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
                  name: "--index-field",
                  description: "The collection schema field to index",
                  args: {
                    name: "INDEX_FIELD",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6389,
                flag7255,
                flag7356,
                flag11637,
                flag11946,
                flag12847,
                {
                  name: "--store-fields",
                  description:
                    "The fields to push into the index to enable inline data retrieval",
                  args: {
                    name: "STORE_FIELDS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "INDEX",
                description:
                  "ID of the index or fully qualified identifier for the index.\n+\nTo set the `index` attribute:\n* provide the argument `index` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an index",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2130,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7255,
                flag7356,
                flag11637,
                flag11946,
                flag12847,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "INDEX",
                description:
                  "ID of the index or fully qualified identifier for the index.\n+\nTo set the `index` attribute:\n* provide the argument `index` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an index",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2130,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7255,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "INDEX",
                description:
                  "ID of the index or fully qualified identifier for the index.\n+\nTo set the `index` attribute:\n* provide the argument `index` on the command line",
              },
            },
            {
              name: "list",
              description: "List indexes",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2128,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7234,
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
          description: "List collections",
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
          name: "update",
          description: "Update a collection",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-vector-schema",
              description: "Clear vector_schema value and set to empty map",
            },
            flag2292,
            flag2710,
            flag3351,
            flag3836,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'Set labels to new value. Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag7235,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-labels",
              description:
                'Remove existing value from map labels. Sets `remove_labels` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-labels=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-labels=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-vector-schema",
              description:
                'Remove existing value from map vector_schema. Sets `remove_vector_schema` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-vector-schema=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-vector-schema=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-vector-schema=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_VECTOR_SCHEMA",
                description: "Dict",
                suggestions: [],
              },
            },
            flag12847,
            flag14975,
            {
              name: "--update-labels",
              description:
                'Update labels value or add key value pair. Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--update-vector-schema",
              description:
                'Update vector_schema value or add key value pair. Schema for vector fields. Only vector fields in this schema will be\nsearchable.\nField names must contain only alphanumeric characters,\nunderscores, and hyphens.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*denseVector*::::\nDense vector field.\n+\n*dimensions*:::::\nDimensionality of the vector field.\n+\n*vertexEmbeddingConfig*:::::\nConfiguration for generating embeddings for the vector field. If not\nspecified, the embedding field must be populated in the DataObject.\n+\n*modelId*::::::\nRequired: ID of the embedding model to use. See\nhttps://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models\nfor the list of supported models.\n+\n*taskType*::::::\nRequired: Task type for the embeddings.\n+\n*textTemplate*::::::\nRequired: Text template for the input to the model. The template must\ncontain one or more references to fields in the DataObject, e.g.:\n"Movie Title: {title} ---- Movie Plot: {plot}".\n+\n*sparseVector*::::\nSparse vector field.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-vector-schema=string={denseVector={dimensions=int,vertexEmbeddingConfig={modelId=string,taskType=string,textTemplate=string}},sparseVector}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-vector-schema=\'{"string": {"denseVector": {"dimensions": int, "vertexEmbeddingConfig": {"modelId": "string", "taskType": "string", "textTemplate": "string"}}, "sparseVector": {}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-vector-schema=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_VECTOR_SCHEMA",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            {
              name: "--vector-schema",
              description:
                'Set vector_schema to new value. Schema for vector fields. Only vector fields in this schema will be\nsearchable.\nField names must contain only alphanumeric characters,\nunderscores, and hyphens.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*denseVector*::::\nDense vector field.\n+\n*dimensions*:::::\nDimensionality of the vector field.\n+\n*vertexEmbeddingConfig*:::::\nConfiguration for generating embeddings for the vector field. If not\nspecified, the embedding field must be populated in the DataObject.\n+\n*modelId*::::::\nRequired: ID of the embedding model to use. See\nhttps://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models\nfor the list of supported models.\n+\n*taskType*::::::\nRequired: Task type for the embeddings.\n+\n*textTemplate*::::::\nRequired: Text template for the input to the model. The template must\ncontain one or more references to fields in the DataObject, e.g.:\n"Movie Title: {title} ---- Movie Plot: {plot}".\n+\n*sparseVector*::::\nSparse vector field.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--vector-schema=string={denseVector={dimensions=int,vertexEmbeddingConfig={modelId=string,taskType=string,textTemplate=string}},sparseVector}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--vector-schema=\'{"string": {"denseVector": {"dimensions": int, "vertexEmbeddingConfig": {"modelId": "string", "taskType": "string", "textTemplate": "string"}}, "sparseVector": {}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--vector-schema=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "VECTOR_SCHEMA",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "COLLECTION",
            description:
              "ID of the collection or fully qualified identifier for the collection.\n+\nTo set the `collection` attribute:\n* provide the argument `collection` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an operation",
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
          description: "Delete an operation",
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
          description: "Describe an operation",
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
          description: "Wait for an operation to complete",
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
  ],
};

export default completionSpec;
