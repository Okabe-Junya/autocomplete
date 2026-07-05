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
const flag596: Fig.Option = {
  name: "--api",
  description:
    "For resources [api, selected-version], provides fallback value for resource api attribute. When the resource's full URI path is not provided, api will fallback to this flag value",
  args: { name: "API", description: "String", suggestions: [] },
};
const flag600: Fig.Option = {
  name: "--api",
  description:
    "The api id of the version resource.\n+\nTo set the `api` attribute:\n* provide the argument `--version` on the command line with a fully specified name;\n* provide the argument `--api` on the command line",
  args: { name: "API", description: "String", suggestions: [] },
};
const flag601: Fig.Option = {
  name: "--api",
  description:
    "The api id of the version resource.\n+\nTo set the `api` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--api` on the command line",
  args: { name: "API", description: "String", suggestions: [] },
};
const flag606: Fig.Option = {
  name: "--api",
  description:
    "The api id of the operation resource.\n+\nTo set the `api` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--api` on the command line",
  args: { name: "API", description: "String", suggestions: [] },
};
const flag607: Fig.Option = {
  name: "--api",
  description:
    "The api id of the spec resource.\n+\nTo set the `api` attribute:\n* provide the argument `spec` on the command line with a fully specified name;\n* provide the argument `--api` on the command line",
  args: { name: "API", description: "String", suggestions: [] },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag759: Fig.Option = {
  name: "--attributes",
  description:
    'Set attributes to new value. The list of user defined attributes associated with the Version resource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag765: Fig.Option = {
  name: "--attributes",
  description:
    'The list of user defined attributes associated with the Version resource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
    suggestions: [],
  },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1386: Fig.Option = {
  name: "--cardinality",
  description:
    "The maximum number of values that the attribute can have when associated\nwith an API Hub resource.\nCardinality 1 would represent a single-valued attribute. It must not be\nless than 1 or greater than 20. If not specified, the cardinality would be\nset to 1 by default and represent a single-valued attribute",
  args: { name: "CARDINALITY", description: "Int", suggestions: [] },
};
const flag1509: Fig.Option = {
  name: "--clear-attributes",
  description: "Clear attributes value and set to empty map",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3040: Fig.Option = {
  name: "--deployments",
  description:
    "IDs of the deployments or fully qualified identifiers for the deployments.\n+\nTo set the `deployment` attribute:\n* provide the argument `--deployments` on the command line",
  args: { name: "DEPLOYMENTS", description: "List", suggestions: [] },
};
const flag3213: Fig.Option = {
  name: "--description",
  description:
    "Description of the external API. Max length is 2000 characters (Unicode\nCode Points)",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3250: Fig.Option = {
  name: "--description",
  description: "Human readable description corresponding of the dependency",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3312: Fig.Option = {
  name: "--description",
  description: "The description of the API resource",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3313: Fig.Option = {
  name: "--description",
  description: "The description of the attribute",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3315: Fig.Option = {
  name: "--description",
  description: "The description of the curation",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3316: Fig.Option = {
  name: "--description",
  description: "The description of the deployment",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3323: Fig.Option = {
  name: "--description",
  description: "The description of the version",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3486: Fig.Option = {
  name: "--details-description",
  description:
    "Description of the operation behavior.\nFor OpenAPI spec, this will map to `operation.description` in the\nspec, in case description is empty, `operation.summary` will be used",
  args: { name: "DETAILS_DESCRIPTION", description: "String", suggestions: [] },
};
const flag3880: Fig.Option = {
  name: "--documentation-external-uri",
  description: "The uri of the externally hosted documentation",
  args: {
    name: "DOCUMENTATION_EXTERNAL_URI",
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
const flag4875: Fig.Option = {
  name: "--fingerprint",
  description:
    "Fingerprint of the API resource. This must be unique for each API resource.\nIt can neither be unset nor be updated to an existing fingerprint of\nanother API resource",
  args: { name: "FINGERPRINT", description: "String", suggestions: [] },
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
const flag5538: Fig.Option = {
  name: "--http-operation-method",
  description:
    "Operation method\nNote: Even though this field is optional, it is required for\n[CreateApiOperation][google.cloud.apihub.v1.ApiHub.CreateApiOperation]\nAPI and we will fail the request if not provided. _HTTP_OPERATION_METHOD_ must be one of:\n+\n*delete*::: Delete Operation type.\n*get*::: Get Operation type.\n*head*::: Head Operation type.\n*options*::: Options Operation type.\n*patch*::: Patch Operation type.\n*post*::: Post Operation type.\n*put*::: Put Operation type.\n*trace*::: Trace Operation type.\n:::\n+",
  args: {
    name: "HTTP_OPERATION_METHOD",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "delete",
      "get",
      "head",
      "options",
      "patch",
      "post",
      "put",
      "trace",
    ],
  },
};
const flag5539: Fig.Option = {
  name: "--http-operation-path-description",
  description: "A short description for the path applicable to all operations",
  args: {
    name: "HTTP_OPERATION_PATH_DESCRIPTION",
    description: "String",
    suggestions: [],
  },
};
const flag5540: Fig.Option = {
  name: "--http-operation-path",
  description:
    "Complete path relative to server endpoint.\nNote: Even though this field is optional, it is required for\n[CreateApiOperation][google.cloud.apihub.v1.ApiHub.CreateApiOperation]\nAPI and we will fail the request if not provided",
  args: { name: "HTTP_OPERATION_PATH", description: "String", suggestions: [] },
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
const flag6608: Fig.Option = {
  name: "--location",
  description:
    "For resources [api, selected-version], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6634: Fig.Option = {
  name: "--location",
  description:
    "For resources [version, deployments, selected-deployment], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6997: Fig.Option = {
  name: "--location",
  description:
    "The location id of the version resource.\n+\nTo set the `location` attribute:\n* provide the argument `--version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6998: Fig.Option = {
  name: "--location",
  description:
    "The location id of the version resource.\n+\nTo set the `location` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7219: Fig.Option = {
  name: "--location",
  description:
    "The location id of the addon resource.\n+\nTo set the `location` attribute:\n* provide the argument `addon` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7222: Fig.Option = {
  name: "--location",
  description:
    "The location id of the api resource.\n+\nTo set the `location` attribute:\n* provide the argument `api` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7223: Fig.Option = {
  name: "--location",
  description:
    "The location id of the apiHubInstance resource.\n+\nTo set the `location` attribute:\n* provide the argument `api_hub_instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7226: Fig.Option = {
  name: "--location",
  description:
    "The location id of the attribute resource.\n+\nTo set the `location` attribute:\n* provide the argument `attribute` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7237: Fig.Option = {
  name: "--location",
  description:
    "The location id of the curation resource.\n+\nTo set the `location` attribute:\n* provide the argument `curation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7241: Fig.Option = {
  name: "--location",
  description:
    "The location id of the dependency resource.\n+\nTo set the `location` attribute:\n* provide the argument `dependency` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7242: Fig.Option = {
  name: "--location",
  description:
    "The location id of the deployment resource.\n+\nTo set the `location` attribute:\n* provide the argument `deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7249: Fig.Option = {
  name: "--location",
  description:
    "The location id of the externalApi resource.\n+\nTo set the `location` attribute:\n* provide the argument `external_api` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7254: Fig.Option = {
  name: "--location",
  description:
    "The location id of the hostProjectRegistration resource.\n+\nTo set the `location` attribute:\n* provide the argument `host_project_registration` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7256: Fig.Option = {
  name: "--location",
  description:
    "The location id of the instance resource.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7266: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7269: Fig.Option = {
  name: "--location",
  description:
    "The location id of the plugin resource.\n+\nTo set the `location` attribute:\n* provide the argument `plugin` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7272: Fig.Option = {
  name: "--location",
  description:
    "The location id of the runtimeProjectAttachment resource.\n+\nTo set the `location` attribute:\n* provide the argument `runtime_project_attachment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7276: Fig.Option = {
  name: "--location",
  description:
    "The location id of the spec resource.\n+\nTo set the `location` attribute:\n* provide the argument `spec` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7732: Fig.Option = {
  name: "--mcp-tool-annotations-title",
  description:
    "A human-readable title for the tool (if different from Tool.title)",
  args: {
    name: "MCP_TOOL_ANNOTATIONS_TITLE",
    description: "String",
    suggestions: [],
  },
};
const flag7733: Fig.Option = {
  name: "--mcp-tool-description",
  description: "Description of what the tool does",
  args: {
    name: "MCP_TOOL_DESCRIPTION",
    description: "String",
    suggestions: [],
  },
};
const flag7734: Fig.Option = {
  name: "--mcp-tool-input-schema-json",
  description:
    "The JSON schema. Only valid JSON is accepted but semantic validation of\nschema is not supported right now",
  args: {
    name: "MCP_TOOL_INPUT_SCHEMA_JSON",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
    suggestions: [],
  },
};
const flag7737: Fig.Option = {
  name: "--mcp-tool-output-schema-json",
  description:
    "The JSON schema. Only valid JSON is accepted but semantic validation of\nschema is not supported right now",
  args: {
    name: "MCP_TOOL_OUTPUT_SCHEMA_JSON",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
    suggestions: [],
  },
};
const flag7738: Fig.Option = {
  name: "--mcp-tool-title",
  description: "Optional title for the tool",
  args: { name: "MCP_TOOL_TITLE", description: "String", suggestions: [] },
};
const flag11031: Fig.Option = {
  name: "--owner-display-name",
  description: "The name of the owner",
  args: { name: "OWNER_DISPLAY_NAME", description: "String", suggestions: [] },
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
const flag11133: Fig.Option = {
  name: "--parsing-mode",
  description:
    "Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing. _PARSING_MODE_ must be one of:\n+\n*relaxed*::: Parsing of the Spec on create and update is relaxed, meaning that\nparsing errors the spec contents will not fail the API call.\n*strict*::: Parsing of the Spec on create and update is strict, meaning that\nparsing errors in the spec contents will fail the API call.\n:::\n+",
  args: {
    name: "PARSING_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["relaxed", "strict"],
  },
};
const flag11330: Fig.Option = {
  name: "--plugin",
  description:
    "The plugin id of the instance resource.\n+\nTo set the `plugin` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--plugin` on the command line",
  args: { name: "PLUGIN", description: "String", suggestions: [] },
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
const flag12564: Fig.Option = {
  name: "--remove-attributes",
  description:
    'Remove existing value from map attributes. Sets `remove_attributes` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-attributes=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-attributes=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-attributes=path_to_file.(yaml|json)\n+\n```',
  args: { name: "REMOVE_ATTRIBUTES", description: "Dict", suggestions: [] },
};
const flag13461: Fig.Option = {
  name: "--selected-deployment",
  description:
    "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `--selected-deployment` on the command line",
  args: { name: "SELECTED_DEPLOYMENT", description: "String", suggestions: [] },
};
const flag13462: Fig.Option = {
  name: "--selected-version",
  description:
    "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `--selected-version` on the command line",
  args: { name: "SELECTED_VERSION", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14004: Fig.Option = {
  name: "--source-environment",
  description:
    "The environment at source for the deployment.\nFor example: prod, dev, staging, etc",
  args: { name: "SOURCE_ENVIRONMENT", description: "String", suggestions: [] },
};
const flag14070: Fig.Option = {
  name: "--source-project-id",
  description:
    "The source project id of the plugin instance. This will be the id of\nruntime project in case of Google Cloud based plugins and org id in case of\nnon-Google Cloud based plugins. This field will be a required field for\nGoogle provided on-ramp plugins",
  args: { name: "SOURCE_PROJECT_ID", description: "String", suggestions: [] },
};
const flag14073: Fig.Option = {
  name: "--source-project",
  description:
    "The project to which the deployment belongs.\nFor Google Cloud gateways, this will refer to the project identifier.\nFor others like Edge/OPDK, this will refer to the org identifier",
  args: { name: "SOURCE_PROJECT", description: "String", suggestions: [] },
};
const flag14119: Fig.Option = {
  name: "--source-uri",
  description:
    "The URI of the spec source in case file is uploaded\nfrom an external version control system",
  args: { name: "SOURCE_URI", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15136: Fig.Option = {
  name: "--update-attributes",
  description:
    'Update attributes value or add key value pair. The list of user defined attributes associated with the Version resource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-attributes=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "UPDATE_ATTRIBUTES",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
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
  name: "apihub",
  description: "Manage Apihub resources",
  subcommands: [
    {
      name: "addons",
      description: "Manage Addon resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Addon",
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
            flag7219,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ADDON",
            description:
              "ID of the addon or fully qualified identifier for the addon.\n+\nTo set the `addon` attribute:\n* provide the argument `addon` on the command line",
          },
        },
        {
          name: "list",
          description: "List Addons",
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
          name: "manage-config",
          description: "Manage the Config of an Addon",
          options: [
            flag42,
            flag46,
            {
              name: "--all-data-addon-config-enabled",
              description:
                "If true, the addon is enabled for all data in the API hub. Use *--all-data-addon-config-enabled* to enable and *--no-all-data-addon-config-enabled* to disable",
            },
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gateway-plugin-addon-config-configs",
              description:
                'Required, The list of gateway plugin configs for which the addon is enabled.\nEach gateway plugin config should have a unique plugin instance.\n+\n*apigeeEdgeConfig*:::\nConfiguration for Apigee Edge gateways.\n+\n*environmentFilter*::::\nThe filter to apply on the resources managed by the gateway plugin\ninstance. If provided this filter applies environment specific filtering.\n+\n*allEnvironments*:::::\nIndicates if this filter should match all environments or only\na subset of environments.\nIf set to true, all environments are matched.\n+\n*environments*:::::\nIf provided, only environments in this list are matched. This field is\nignored if `all_environments` is true.\n+\n*apigeeOpdkConfig*:::\nConfiguration for Apigee OPDK gateways.\n+\n*environmentFilter*::::\nThe filter to apply on the resources managed by the gateway plugin\ninstance. If provided this filter applies environment specific filtering.\n+\n*allEnvironments*:::::\nIndicates if this filter should match all environments or only\na subset of environments.\nIf set to true, all environments are matched.\n+\n*environments*:::::\nIf provided, only environments in this list are matched. This field is\nignored if `all_environments` is true.\n+\n*apigeeXHybridConfig*:::\nConfiguration for Apigee X and Apigee Hybrid gateways.\n+\n*environmentFilter*::::\nThe filter to apply on the resources managed by the gateway plugin\ninstance. If provided this filter applies environment specific filtering.\n+\n*allEnvironments*:::::\nIndicates if this filter should match all environments or only\na subset of environments.\nIf set to true, all environments are matched.\n+\n*environments*:::::\nIf provided, only environments in this list are matched. This field is\nignored if `all_environments` is true.\n+\n*pluginInstance*:::\nThe name of the gateway plugin instance for which the config is to be\nspecified.\nFormat:\nprojects/{project}/locations/{location}/plugins/{plugin}/pluginInstances/{plugin_instance}.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--gateway-plugin-addon-config-configs=apigeeEdgeConfig={environmentFilter={allEnvironments=boolean,environments=[string]}},apigeeOpdkConfig={environmentFilter={allEnvironments=boolean,environments=[string]}},apigeeXHybridConfig={environmentFilter={allEnvironments=boolean,environments=[string]}},pluginInstance=string --gateway-plugin-addon-config-configs=apigeeEdgeConfig={environmentFilter={allEnvironments=boolean,environments=[string]}},apigeeOpdkConfig={environmentFilter={allEnvironments=boolean,environments=[string]}},apigeeXHybridConfig={environmentFilter={allEnvironments=boolean,environments=[string]}},pluginInstance=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--gateway-plugin-addon-config-configs=\'[{"apigeeEdgeConfig": {"environmentFilter": {"allEnvironments": boolean, "environments": ["string"]}}, "apigeeOpdkConfig": {"environmentFilter": {"allEnvironments": boolean, "environments": ["string"]}}, "apigeeXHybridConfig": {"environmentFilter": {"allEnvironments": boolean, "environments": ["string"]}}, "pluginInstance": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--gateway-plugin-addon-config-configs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "GATEWAY_PLUGIN_ADDON_CONFIG_CONFIGS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7219,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ADDON",
            description:
              "ID of the addon or fully qualified identifier for the addon.\n+\nTo set the `addon` attribute:\n* provide the argument `addon` on the command line",
          },
        },
      ],
    },
    {
      name: "api-hub-instances",
      description: "Manage Api Hub Instance resources",
      subcommands: [
        {
          name: "create",
          description: "Create an Api Hub Instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--config-cmek-key-name",
              description:
                "The Customer Managed Encryption Key (CMEK) used for data encryption.\nThe CMEK name should follow the format of\n`projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`,\nwhere the location must match the instance location.\nIf the CMEK is not provided, a GMEK will be created for the instance",
              args: {
                name: "CONFIG_CMEK_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--config-disable-search",
              description:
                "If true, the search will be disabled for the instance. The default value\nis false",
            },
            {
              name: "--config-encryption-type",
              description:
                "Encryption type for the region. If the encryption type is CMEK, the\ncmek_key_name must be provided. If no encryption type is provided,\nGMEK will be used. _CONFIG_ENCRYPTION_TYPE_ must be one of:\n+\n*cmek*::: Encryption using customer managed encryption key.\n*gmek*::: Default encryption using Google managed encryption key.\n:::\n+",
              args: {
                name: "CONFIG_ENCRYPTION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["cmek", "gmek"],
              },
            },
            {
              name: "--config-vertex-location",
              description:
                "The name of the Vertex AI location where the data store is stored",
              args: {
                name: "CONFIG_VERTEX_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description: "Description of the ApiHub instance",
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
              name: "--labels",
              description:
                'Instance labels to represent user-provided metadata.\nRefer to cloud documentation on labels for more details.\nhttps://cloud.google.com/compute/docs/labeling-resources.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag7223,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API_HUB_INSTANCE",
            description:
              "ID of the apiHubInstance or fully qualified identifier for the apiHubInstance.\n+\nTo set the `api_hub_instance` attribute:\n* provide the argument `api_hub_instance` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Api Hub Instance",
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
            flag7223,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API_HUB_INSTANCE",
            description:
              "ID of the apiHubInstance or fully qualified identifier for the apiHubInstance.\n+\nTo set the `api_hub_instance` attribute:\n* provide the argument `api_hub_instance` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Api Hub Instance",
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
            flag7223,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API_HUB_INSTANCE",
            description:
              "ID of the apiHubInstance or fully qualified identifier for the apiHubInstance.\n+\nTo set the `api_hub_instance` attribute:\n* provide the argument `api_hub_instance` on the command line",
          },
        },
        {
          name: "lookup",
          description: "lookup apiHubInstances",
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
            flag6692,
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
      name: "apis",
      description: "Manage Api resources",
      subcommands: [
        {
          name: "create",
          description: "Create apis",
          options: [
            flag42,
            flag46,
            flag596,
            {
              name: "--api-functional-requirements-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-functional-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-functional-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--api-functional-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-functional-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-functional-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-style-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-style-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-style-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_STYLE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--api-style-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-style-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-style-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-technical-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-technical-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--attributes",
              description:
                'The list of user defined attributes associated with the API resource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--business-unit-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean --business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--business-unit-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--business-unit-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "BUSINESS_UNIT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--business-unit-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--business-unit-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--business-unit-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag2292,
            flag3312,
            {
              name: "--display-name",
              description: "The display name of the API resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            flag4875,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6608,
            flag7356,
            {
              name: "--maturity-level-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean --maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maturity-level-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maturity-level-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MATURITY_LEVEL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--maturity-level-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maturity-level-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maturity-level-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag11031,
            {
              name: "--owner-email",
              description: "The email of the owner",
              args: {
                name: "OWNER_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag13462,
            {
              name: "--target-user-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean --target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--target-user-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--target-user-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "TARGET_USER_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--target-user-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--target-user-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--target-user-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--team-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--team-enum-values=description=string,displayName=string,id=string,immutable=boolean --team-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--team-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--team-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "TEAM_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--team-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--team-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--team-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_URI_VALUES",
                description: "List",
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
          description: "Delete an Api",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If set to true, any versions from this API will also be deleted.\nOtherwise, the request will only work if the API has no versions",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7222,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `api` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Api",
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
            flag7222,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `api` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apis",
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
          description: "Update apis",
          options: [
            flag42,
            flag46,
            {
              name: "--add-api-functional-requirements-enum-values",
              description:
                'Add new value to api_functional_requirements_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-api-functional-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-api-functional-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-api-requirements-enum-values",
              description:
                'Add new value to api_requirements_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-api-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-api-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_API_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-api-style-enum-values",
              description:
                'Add new value to api_style_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-api-style-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-api-style-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_API_STYLE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-api-technical-requirements-enum-values",
              description:
                'Add new value to api_technical_requirements_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-api-technical-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-api-technical-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-business-unit-enum-values",
              description:
                'Add new value to business_unit_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-business-unit-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-business-unit-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_BUSINESS_UNIT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-maturity-level-enum-values",
              description:
                'Add new value to maturity_level_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-maturity-level-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-maturity-level-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_MATURITY_LEVEL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-target-user-enum-values",
              description:
                'Add new value to target_user_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-target-user-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-target-user-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_TARGET_USER_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-team-enum-values",
              description:
                'Add new value to team_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-team-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-team-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-team-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-team-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_TEAM_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag596,
            {
              name: "--api-functional-requirements-enum-values",
              description:
                'Set api_functional_requirements_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-functional-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-functional-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--api-functional-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-functional-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-functional-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_FUNCTIONAL_REQUIREMENTS_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-enum-values",
              description:
                'Set api_requirements_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_REQUIREMENTS_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-style-enum-values",
              description:
                'Set api_style_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-style-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-style-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_STYLE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--api-style-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-style-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-style-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_STYLE_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-enum-values",
              description:
                'Set api_technical_requirements_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--api-technical-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--api-technical-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--api-technical-requirements-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "API_TECHNICAL_REQUIREMENTS_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--attributes",
              description:
                'Set attributes to new value. The list of user defined attributes associated with the API resource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--business-unit-enum-values",
              description:
                'Set business_unit_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean --business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--business-unit-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--business-unit-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "BUSINESS_UNIT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--business-unit-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--business-unit-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--business-unit-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "BUSINESS_UNIT_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--clear-api-functional-requirements",
              description:
                "Set googleCloudApihubV1Api.apiFunctionalRequirements back to default value",
            },
            {
              name: "--clear-api-functional-requirements-enum-values",
              description:
                "Clear api_functional_requirements_enum_values value and set to empty list",
            },
            {
              name: "--clear-api-requirements",
              description:
                "Set googleCloudApihubV1Api.apiRequirements back to default value",
            },
            {
              name: "--clear-api-requirements-enum-values",
              description:
                "Clear api_requirements_enum_values value and set to empty list",
            },
            {
              name: "--clear-api-style",
              description:
                "Set googleCloudApihubV1Api.apiStyle back to default value",
            },
            {
              name: "--clear-api-style-enum-values",
              description:
                "Clear api_style_enum_values value and set to empty list",
            },
            {
              name: "--clear-api-technical-requirements",
              description:
                "Set googleCloudApihubV1Api.apiTechnicalRequirements back to default value",
            },
            {
              name: "--clear-api-technical-requirements-enum-values",
              description:
                "Clear api_technical_requirements_enum_values value and set to empty list",
            },
            flag1509,
            {
              name: "--clear-business-unit",
              description:
                "Set googleCloudApihubV1Api.businessUnit back to default value",
            },
            {
              name: "--clear-business-unit-enum-values",
              description:
                "Clear business_unit_enum_values value and set to empty list",
            },
            {
              name: "--clear-documentation",
              description:
                "Set googleCloudApihubV1Api.documentation back to default value",
            },
            {
              name: "--clear-maturity-level",
              description:
                "Set googleCloudApihubV1Api.maturityLevel back to default value",
            },
            {
              name: "--clear-maturity-level-enum-values",
              description:
                "Clear maturity_level_enum_values value and set to empty list",
            },
            {
              name: "--clear-owner",
              description:
                "Set googleCloudApihubV1Api.owner back to default value",
            },
            {
              name: "--clear-selected-version",
              description: "Clear selected_version value and set to null",
            },
            {
              name: "--clear-target-user",
              description:
                "Set googleCloudApihubV1Api.targetUser back to default value",
            },
            {
              name: "--clear-target-user-enum-values",
              description:
                "Clear target_user_enum_values value and set to empty list",
            },
            {
              name: "--clear-team",
              description:
                "Set googleCloudApihubV1Api.team back to default value",
            },
            {
              name: "--clear-team-enum-values",
              description: "Clear team_enum_values value and set to empty list",
            },
            flag2292,
            flag3312,
            {
              name: "--display-name",
              description: "The display name of the API resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            flag4875,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6608,
            flag7356,
            {
              name: "--maturity-level-enum-values",
              description:
                'Set maturity_level_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean --maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maturity-level-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maturity-level-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MATURITY_LEVEL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--maturity-level-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maturity-level-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--maturity-level-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MATURITY_LEVEL_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag11031,
            {
              name: "--owner-email",
              description: "The email of the owner",
              args: {
                name: "OWNER_EMAIL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--remove-api-functional-requirements-enum-values",
              description:
                'Remove existing value from api_functional_requirements_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-api-functional-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-api-functional-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-api-functional-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_API_FUNCTIONAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-api-requirements-enum-values",
              description:
                'Remove existing value from api_requirements_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-api-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-api-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-api-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_API_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-api-style-enum-values",
              description:
                'Remove existing value from api_style_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-api-style-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-api-style-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-api-style-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_API_STYLE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-api-technical-requirements-enum-values",
              description:
                'Remove existing value from api_technical_requirements_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-api-technical-requirements-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-api-technical-requirements-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-api-technical-requirements-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_API_TECHNICAL_REQUIREMENTS_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12564,
            {
              name: "--remove-business-unit-enum-values",
              description:
                'Remove existing value from business_unit_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-business-unit-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-business-unit-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-business-unit-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_BUSINESS_UNIT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-maturity-level-enum-values",
              description:
                'Remove existing value from maturity_level_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-maturity-level-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-maturity-level-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-maturity-level-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_MATURITY_LEVEL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-target-user-enum-values",
              description:
                'Remove existing value from target_user_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-target-user-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-target-user-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_TARGET_USER_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-team-enum-values",
              description:
                'Remove existing value from team_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-team-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-team-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-team-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-team-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_TEAM_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag13462,
            {
              name: "--target-user-enum-values",
              description:
                'Set target_user_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean --target-user-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--target-user-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--target-user-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "TARGET_USER_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--target-user-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--target-user-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--target-user-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TARGET_USER_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--team-enum-values",
              description:
                'Set team_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--team-enum-values=description=string,displayName=string,id=string,immutable=boolean --team-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--team-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--team-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "TEAM_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--team-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--team-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--team-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "TEAM_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-attributes",
              description:
                'Update attributes value or add key value pair. The list of user defined attributes associated with the API resource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "versions",
          description: "Manage Version resources",
          subcommands: [
            {
              name: "create",
              description: "Create a Version",
              options: [
                flag42,
                flag46,
                {
                  name: "--accreditation-enum-values",
                  description:
                    'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean --accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--accreditation-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--accreditation-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ACCREDITATION_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--accreditation-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_JSON_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--accreditation-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_STRING_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--accreditation-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_URI_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag601,
                flag765,
                flag1201,
                {
                  name: "--compliance-enum-values",
                  description:
                    'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean --compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--compliance-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--compliance-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "COMPLIANCE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--compliance-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_JSON_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--compliance-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_STRING_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--compliance-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_URI_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag2292,
                flag3040,
                flag3323,
                {
                  name: "--display-name",
                  description: "The display name of the version",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3880,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--lifecycle-enum-values",
                  description:
                    'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean --lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--lifecycle-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--lifecycle-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "LIFECYCLE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--lifecycle-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_JSON_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--lifecycle-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_STRING_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--lifecycle-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_URI_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag6634,
                flag7356,
                flag11637,
                flag11946,
                flag13461,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Version",
              options: [
                flag42,
                flag46,
                flag601,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                {
                  name: "--force",
                  description:
                    "If set to true, any specs from this version will also be deleted.\nOtherwise, the request will only work if the version has no specs",
                },
                flag5091,
                flag5453,
                flag5699,
                flag6998,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Version",
              options: [
                flag42,
                flag46,
                flag601,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6998,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
              },
            },
            {
              name: "list",
              description: "List Versions",
              options: [
                flag42,
                flag46,
                {
                  name: "--api",
                  description:
                    "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `--api` on the command line",
                  args: { name: "API", description: "String", suggestions: [] },
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
                {
                  name: "--location",
                  description:
                    "The location id of the api resource.\n+\nTo set the `location` attribute:\n* provide the argument `--api` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              name: "operations",
              description: "Manage Api Operation resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create apiOperations",
                  options: [
                    flag42,
                    flag46,
                    flag606,
                    {
                      name: "--attributes",
                      description:
                        'The list of user defined attributes associated with the API operation\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ATTRIBUTES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                        suggestions: [],
                      },
                    },
                    flag1201,
                    flag2292,
                    {
                      name: "--details-deprecated",
                      description:
                        "For OpenAPI spec, this will be set if `operation.deprecated`is marked as\n`true` in the spec",
                    },
                    flag3486,
                    flag3880,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5538,
                    flag5540,
                    flag5539,
                    flag5699,
                    flag7266,
                    flag7356,
                    {
                      name: "--mcp-tool-annotations-additional-hints",
                      description:
                        'Additional hints which may help tools and not covered in defaults.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--mcp-tool-annotations-additional-hints=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--mcp-tool-annotations-additional-hints=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--mcp-tool-annotations-additional-hints=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--mcp-tool-annotations-destructive-hint",
                      description:
                        "Hint indicating if the tool may have destructive side effects",
                    },
                    {
                      name: "--mcp-tool-annotations-idempotent-hint",
                      description: "Hint indicating if the tool is idempotent",
                    },
                    {
                      name: "--mcp-tool-annotations-open-world-hint",
                      description:
                        "Hint indicating if the tool interacts with the open world (e.g., internet)",
                    },
                    {
                      name: "--mcp-tool-annotations-read-only-hint",
                      description: "Hint indicating if the tool is read-only",
                    },
                    flag7732,
                    flag7733,
                    flag7734,
                    {
                      name: "--mcp-tool-name",
                      description:
                        "The name of the tool, unique within its parent scope (version)",
                      args: {
                        name: "MCP_TOOL_NAME",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7737,
                    flag7738,
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
                  description: "Delete apiOperations",
                  options: [
                    flag42,
                    flag46,
                    flag606,
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
                  description: "Describe apiOperations",
                  options: [
                    flag42,
                    flag46,
                    flag606,
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
                  description: "List apiOperations",
                  options: [
                    flag42,
                    flag46,
                    flag600,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6997,
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
                  description: "Update apiOperations",
                  options: [
                    flag42,
                    flag46,
                    flag606,
                    {
                      name: "--attributes",
                      description:
                        'Set attributes to new value. The list of user defined attributes associated with the API operation\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ATTRIBUTES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag1201,
                    flag1509,
                    {
                      name: "--clear-details",
                      description:
                        "Set googleCloudApihubV1ApiOperation.details back to default value",
                    },
                    {
                      name: "--clear-mcp-tool-annotations-additional-hints",
                      description:
                        "Clear mcp_tool_annotations_additional_hints value and set to empty map",
                    },
                    flag2292,
                    {
                      name: "--details-deprecated",
                      description:
                        "For OpenAPI spec, this will be set if `operation.deprecated`is marked as\n`true` in the spec. Use *--details-deprecated* to enable and *--no-details-deprecated* to disable",
                    },
                    flag3486,
                    flag3880,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5538,
                    flag5540,
                    flag5539,
                    flag5699,
                    flag7266,
                    flag7356,
                    {
                      name: "--mcp-tool-annotations-additional-hints",
                      description:
                        'Set mcp_tool_annotations_additional_hints to new value. Additional hints which may help tools and not covered in defaults.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--mcp-tool-annotations-additional-hints=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--mcp-tool-annotations-additional-hints=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--mcp-tool-annotations-additional-hints=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--mcp-tool-annotations-destructive-hint",
                      description:
                        "Hint indicating if the tool may have destructive side effects. Use *--mcp-tool-annotations-destructive-hint* to enable and *--no-mcp-tool-annotations-destructive-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-idempotent-hint",
                      description:
                        "Hint indicating if the tool is idempotent. Use *--mcp-tool-annotations-idempotent-hint* to enable and *--no-mcp-tool-annotations-idempotent-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-open-world-hint",
                      description:
                        "Hint indicating if the tool interacts with the open world (e.g., internet). Use *--mcp-tool-annotations-open-world-hint* to enable and *--no-mcp-tool-annotations-open-world-hint* to disable",
                    },
                    {
                      name: "--mcp-tool-annotations-read-only-hint",
                      description:
                        "Hint indicating if the tool is read-only. Use *--mcp-tool-annotations-read-only-hint* to enable and *--no-mcp-tool-annotations-read-only-hint* to disable",
                    },
                    flag7732,
                    flag7733,
                    flag7734,
                    {
                      name: "--mcp-tool-name",
                      description:
                        "The name of the tool, unique within its parent scope (version)",
                      args: {
                        name: "MCP_TOOL_NAME",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7737,
                    flag7738,
                    flag11637,
                    flag11946,
                    flag12564,
                    {
                      name: "--remove-mcp-tool-annotations-additional-hints",
                      description:
                        'Remove existing value from map mcp_tool_annotations_additional_hints. Sets `remove_mcp_tool_annotations_additional_hints` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-mcp-tool-annotations-additional-hints=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-mcp-tool-annotations-additional-hints=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-mcp-tool-annotations-additional-hints=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "REMOVE_MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    {
                      name: "--update-attributes",
                      description:
                        'Update attributes value or add key value pair. The list of user defined attributes associated with the API operation\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-attributes=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "UPDATE_ATTRIBUTES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--update-mcp-tool-annotations-additional-hints",
                      description:
                        'Update mcp_tool_annotations_additional_hints value or add key value pair. Additional hints which may help tools and not covered in defaults.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-mcp-tool-annotations-additional-hints=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-mcp-tool-annotations-additional-hints=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-mcp-tool-annotations-additional-hints=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "UPDATE_MCP_TOOL_ANNOTATIONS_ADDITIONAL_HINTS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
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
              name: "specs",
              description: "Manage Spec resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a Spec",
                  options: [
                    flag42,
                    flag46,
                    flag607,
                    {
                      name: "--attributes",
                      description:
                        'The list of user defined attributes associated with the spec.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ATTRIBUTES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                        suggestions: [],
                      },
                    },
                    flag1201,
                    flag2292,
                    {
                      name: "--contents",
                      description: "The contents of the spec",
                      args: {
                        name: "CONTENTS",
                        description:
                          "Googlecloudsdk.core.util.http_encoding:Encode",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--contents-mime-type",
                      description:
                        "The mime type of the content for example application/json,\napplication/yaml, application/wsdl etc",
                      args: {
                        name: "CONTENTS_MIME_TYPE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--display-name",
                      description:
                        "The display name of the spec.\nThis can contain the file name of the spec",
                      args: {
                        name: "DISPLAY_NAME",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag3880,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    {
                      name: "--lint-response-create-time",
                      description:
                        "Timestamp when the linting response was generated",
                      args: {
                        name: "LINT_RESPONSE_CREATE_TIME",
                        description:
                          "Googlecloudsdk.core.util.times:ParseDateTime",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--lint-response-issues",
                      description:
                        'Array of issues found in the analyzed document.\n+\n*code*:::\nRule code unique to each rule defined in linter.\n+\n*message*:::\nHuman-readable message describing the issue found by the linter.\n+\n*path*:::\nAn array of strings indicating the location in the analyzed document where\nthe rule was triggered.\n+\n*range*:::\nObject describing where in the file the issue was found.\n+\n*end*::::\nEnd of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*start*::::\nStart of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*severity*:::\nSeverity level of the rule violation.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string --lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--lint-response-issues=\'[{"code": "string", "message": "string", "path": ["string"], "range": {"end": {"character": int, "line": int}, "start": {"character": int, "line": int}}, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--lint-response-issues=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "LINT_RESPONSE_ISSUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--lint-response-linter",
                      description:
                        "Name of the linter used. _LINT_RESPONSE_LINTER_ must be one of:\n+\n*other*::: Linter type other.\n*spectral*::: Linter type spectral.\n:::\n+",
                      args: {
                        name: "LINT_RESPONSE_LINTER",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: ["other", "spectral"],
                      },
                    },
                    {
                      name: "--lint-response-source",
                      description: "Name of the linting application",
                      args: {
                        name: "LINT_RESPONSE_SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--lint-response-state",
                      description:
                        "Lint state represents success or failure for linting. _LINT_RESPONSE_STATE_ must be one of:\n+\n*lint-state-error*::: Linting encountered errors.\n*lint-state-success*::: Linting was completed successfully.\n:::\n+",
                      args: {
                        name: "LINT_RESPONSE_STATE",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: ["lint-state-error", "lint-state-success"],
                      },
                    },
                    {
                      name: "--lint-response-summary",
                      description:
                        'Summary of all issue types and counts for each severity level.\n+\n*count*:::\nCount of issues with the given severity.\n+\n*severity*:::\nSeverity of the issue.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--lint-response-summary=count=int,severity=string --lint-response-summary=count=int,severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--lint-response-summary=\'[{"count": int, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--lint-response-summary=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "LINT_RESPONSE_SUMMARY",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                        suggestions: [],
                      },
                    },
                    flag7276,
                    flag7356,
                    flag11133,
                    flag11637,
                    flag11946,
                    flag14119,
                    {
                      name: "--spec-type-enum-values",
                      description:
                        'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--spec-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--spec-type-enum-values=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "SPEC_TYPE_ENUM_VALUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--spec-type-json-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_JSON_VALUES",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--spec-type-string-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_STRING_VALUES",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--spec-type-uri-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_URI_VALUES",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec.\n+\nTo set the `spec` attribute:\n* provide the argument `spec` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a Spec",
                  options: [
                    flag42,
                    flag46,
                    flag607,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7276,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec.\n+\nTo set the `spec` attribute:\n* provide the argument `spec` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a Spec",
                  options: [
                    flag42,
                    flag46,
                    flag607,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7276,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec.\n+\nTo set the `spec` attribute:\n* provide the argument `spec` on the command line",
                  },
                },
                {
                  name: "get-contents",
                  description: "Get the contents of a spec",
                  options: [
                    flag42,
                    flag46,
                    {
                      name: "--api",
                      description: "The API ID",
                      args: {
                        name: "API",
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
                    {
                      name: "--location",
                      description: "The location ID",
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
                  args: { name: "SPEC", description: "The spec ID" },
                },
                {
                  name: "lint",
                  description: "Lint a Spec",
                  options: [
                    flag42,
                    flag46,
                    flag607,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7276,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec.\n+\nTo set the `spec` attribute:\n* provide the argument `spec` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List Specs",
                  options: [
                    flag42,
                    flag46,
                    flag600,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6997,
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
                  description: "Update specs",
                  options: [
                    flag42,
                    flag46,
                    {
                      name: "--add-lint-response-issues",
                      description:
                        'Add new value to lint_response_issues list. Array of issues found in the analyzed document.\n+\n*code*:::\nRule code unique to each rule defined in linter.\n+\n*message*:::\nHuman-readable message describing the issue found by the linter.\n+\n*path*:::\nAn array of strings indicating the location in the analyzed document where\nthe rule was triggered.\n+\n*range*:::\nObject describing where in the file the issue was found.\n+\n*end*::::\nEnd of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*start*::::\nStart of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*severity*:::\nSeverity level of the rule violation.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string --add-lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-lint-response-issues=\'[{"code": "string", "message": "string", "path": ["string"], "range": {"end": {"character": int, "line": int}, "start": {"character": int, "line": int}}, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-lint-response-issues=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ADD_LINT_RESPONSE_ISSUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--add-lint-response-summary",
                      description:
                        'Add new value to lint_response_summary list. Summary of all issue types and counts for each severity level.\n+\n*count*:::\nCount of issues with the given severity.\n+\n*severity*:::\nSeverity of the issue.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-lint-response-summary=count=int,severity=string --add-lint-response-summary=count=int,severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-lint-response-summary=\'[{"count": int, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-lint-response-summary=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ADD_LINT_RESPONSE_SUMMARY",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--add-spec-type-enum-values",
                      description:
                        'Add new value to spec_type_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-spec-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-spec-type-enum-values=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ADD_SPEC_TYPE_ENUM_VALUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag607,
                    {
                      name: "--attributes",
                      description:
                        'Set attributes to new value. The list of user defined attributes associated with the spec.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ATTRIBUTES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag1201,
                    flag1509,
                    {
                      name: "--clear-contents",
                      description:
                        "Set googleCloudApihubV1Spec.contents back to default value",
                    },
                    {
                      name: "--clear-documentation",
                      description:
                        "Set googleCloudApihubV1Spec.documentation back to default value",
                    },
                    {
                      name: "--clear-lint-response",
                      description:
                        "Set googleCloudApihubV1Spec.lintResponse back to default value",
                    },
                    {
                      name: "--clear-lint-response-issues",
                      description:
                        "Clear lint_response_issues value and set to empty list",
                    },
                    {
                      name: "--clear-lint-response-summary",
                      description:
                        "Clear lint_response_summary value and set to empty list",
                    },
                    {
                      name: "--clear-spec-type",
                      description:
                        "Set googleCloudApihubV1Spec.specType back to default value",
                    },
                    {
                      name: "--clear-spec-type-enum-values",
                      description:
                        "Clear spec_type_enum_values value and set to empty list",
                    },
                    flag2292,
                    {
                      name: "--contents",
                      description: "The contents of the spec",
                      args: {
                        name: "CONTENTS",
                        description:
                          "Googlecloudsdk.core.util.http_encoding:Encode",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--contents-mime-type",
                      description:
                        "The mime type of the content for example application/json,\napplication/yaml, application/wsdl etc",
                      args: {
                        name: "CONTENTS_MIME_TYPE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--display-name",
                      description:
                        "The display name of the spec.\nThis can contain the file name of the spec",
                      args: {
                        name: "DISPLAY_NAME",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag3880,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    {
                      name: "--lint-response-create-time",
                      description:
                        "Timestamp when the linting response was generated",
                      args: {
                        name: "LINT_RESPONSE_CREATE_TIME",
                        description:
                          "Googlecloudsdk.core.util.times:ParseDateTime",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--lint-response-issues",
                      description:
                        'Set lint_response_issues to new value. Array of issues found in the analyzed document.\n+\n*code*:::\nRule code unique to each rule defined in linter.\n+\n*message*:::\nHuman-readable message describing the issue found by the linter.\n+\n*path*:::\nAn array of strings indicating the location in the analyzed document where\nthe rule was triggered.\n+\n*range*:::\nObject describing where in the file the issue was found.\n+\n*end*::::\nEnd of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*start*::::\nStart of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*severity*:::\nSeverity level of the rule violation.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string --lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--lint-response-issues=\'[{"code": "string", "message": "string", "path": ["string"], "range": {"end": {"character": int, "line": int}, "start": {"character": int, "line": int}}, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--lint-response-issues=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "LINT_RESPONSE_ISSUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--lint-response-linter",
                      description:
                        "Name of the linter used. _LINT_RESPONSE_LINTER_ must be one of:\n+\n*other*::: Linter type other.\n*spectral*::: Linter type spectral.\n:::\n+",
                      args: {
                        name: "LINT_RESPONSE_LINTER",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: ["other", "spectral"],
                      },
                    },
                    {
                      name: "--lint-response-source",
                      description: "Name of the linting application",
                      args: {
                        name: "LINT_RESPONSE_SOURCE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--lint-response-state",
                      description:
                        "Lint state represents success or failure for linting. _LINT_RESPONSE_STATE_ must be one of:\n+\n*lint-state-error*::: Linting encountered errors.\n*lint-state-success*::: Linting was completed successfully.\n:::\n+",
                      args: {
                        name: "LINT_RESPONSE_STATE",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: ["lint-state-error", "lint-state-success"],
                      },
                    },
                    {
                      name: "--lint-response-summary",
                      description:
                        'Set lint_response_summary to new value. Summary of all issue types and counts for each severity level.\n+\n*count*:::\nCount of issues with the given severity.\n+\n*severity*:::\nSeverity of the issue.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--lint-response-summary=count=int,severity=string --lint-response-summary=count=int,severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--lint-response-summary=\'[{"count": int, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--lint-response-summary=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "LINT_RESPONSE_SUMMARY",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag7276,
                    flag7356,
                    flag11133,
                    flag11637,
                    flag11946,
                    flag12564,
                    {
                      name: "--remove-lint-response-issues",
                      description:
                        'Remove existing value from lint_response_issues list. Array of issues found in the analyzed document.\n+\n*code*:::\nRule code unique to each rule defined in linter.\n+\n*message*:::\nHuman-readable message describing the issue found by the linter.\n+\n*path*:::\nAn array of strings indicating the location in the analyzed document where\nthe rule was triggered.\n+\n*range*:::\nObject describing where in the file the issue was found.\n+\n*end*::::\nEnd of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*start*::::\nStart of the issue.\n+\n*character*:::::\nCharacter position within the line (zero-indexed).\n+\n*line*:::::\nLine number (zero-indexed).\n+\n*severity*:::\nSeverity level of the rule violation.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string --remove-lint-response-issues=code=string,message=string,path=[string],range={end={character=int,line=int},start={character=int,line=int}},severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-lint-response-issues=\'[{"code": "string", "message": "string", "path": ["string"], "range": {"end": {"character": int, "line": int}, "start": {"character": int, "line": int}}, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-lint-response-issues=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "REMOVE_LINT_RESPONSE_ISSUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--remove-lint-response-summary",
                      description:
                        'Remove existing value from lint_response_summary list. Summary of all issue types and counts for each severity level.\n+\n*count*:::\nCount of issues with the given severity.\n+\n*severity*:::\nSeverity of the issue.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-lint-response-summary=count=int,severity=string --remove-lint-response-summary=count=int,severity=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-lint-response-summary=\'[{"count": int, "severity": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-lint-response-summary=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "REMOVE_LINT_RESPONSE_SUMMARY",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--remove-spec-type-enum-values",
                      description:
                        'Remove existing value from spec_type_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-spec-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-spec-type-enum-values=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "REMOVE_SPEC_TYPE_ENUM_VALUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag14119,
                    {
                      name: "--spec-type-enum-values",
                      description:
                        'Set spec_type_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --spec-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--spec-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--spec-type-enum-values=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "SPEC_TYPE_ENUM_VALUES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--spec-type-json-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_JSON_VALUES",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--spec-type-string-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_STRING_VALUES",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--spec-type-uri-values",
                      description:
                        "The attribute values in case attribute data type is string or JSON",
                      args: {
                        name: "SPEC_TYPE_URI_VALUES",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    {
                      name: "--update-attributes",
                      description:
                        'Update attributes value or add key value pair. The list of user defined attributes associated with the spec.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-attributes=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "UPDATE_ATTRIBUTES",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SPEC",
                    description:
                      "ID of the spec or fully qualified identifier for the spec.\n+\nTo set the `spec` attribute:\n* provide the argument `spec` on the command line",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update versions",
              options: [
                flag42,
                flag46,
                {
                  name: "--accreditation-enum-values",
                  description:
                    'Set accreditation_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean --accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--accreditation-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--accreditation-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ACCREDITATION_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--accreditation-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_JSON_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--accreditation-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_STRING_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--accreditation-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "ACCREDITATION_URI_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-accreditation-enum-values",
                  description:
                    'Add new value to accreditation_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-accreditation-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-accreditation-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_ACCREDITATION_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-compliance-enum-values",
                  description:
                    'Add new value to compliance_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-compliance-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-compliance-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_COMPLIANCE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-deployments",
                  description:
                    "IDs of the deployments or fully qualified identifiers for the deployments.\n+\nTo set the `deployment` attribute:\n* provide the argument `--add-deployments` on the command line",
                  args: {
                    name: "ADD_DEPLOYMENTS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-lifecycle-enum-values",
                  description:
                    'Add new value to lifecycle_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-lifecycle-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-lifecycle-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_LIFECYCLE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag601,
                flag759,
                flag1201,
                {
                  name: "--clear-accreditation",
                  description:
                    "Set googleCloudApihubV1Version.accreditation back to default value",
                },
                {
                  name: "--clear-accreditation-enum-values",
                  description:
                    "Clear accreditation_enum_values value and set to empty list",
                },
                flag1509,
                {
                  name: "--clear-compliance",
                  description:
                    "Set googleCloudApihubV1Version.compliance back to default value",
                },
                {
                  name: "--clear-compliance-enum-values",
                  description:
                    "Clear compliance_enum_values value and set to empty list",
                },
                {
                  name: "--clear-deployments",
                  description: "Clear deployments value and set to empty list",
                },
                {
                  name: "--clear-documentation",
                  description:
                    "Set googleCloudApihubV1Version.documentation back to default value",
                },
                {
                  name: "--clear-lifecycle",
                  description:
                    "Set googleCloudApihubV1Version.lifecycle back to default value",
                },
                {
                  name: "--clear-lifecycle-enum-values",
                  description:
                    "Clear lifecycle_enum_values value and set to empty list",
                },
                {
                  name: "--clear-selected-deployment",
                  description:
                    "Clear selected_deployment value and set to null",
                },
                {
                  name: "--compliance-enum-values",
                  description:
                    'Set compliance_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean --compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--compliance-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--compliance-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "COMPLIANCE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--compliance-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_JSON_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--compliance-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_STRING_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--compliance-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "COMPLIANCE_URI_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag2292,
                flag3040,
                flag3323,
                {
                  name: "--display-name",
                  description: "The display name of the version",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3880,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--lifecycle-enum-values",
                  description:
                    'Set lifecycle_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean --lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--lifecycle-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--lifecycle-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "LIFECYCLE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--lifecycle-json-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_JSON_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--lifecycle-string-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_STRING_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--lifecycle-uri-values",
                  description:
                    "The attribute values in case attribute data type is string or JSON",
                  args: {
                    name: "LIFECYCLE_URI_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag6634,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--remove-accreditation-enum-values",
                  description:
                    'Remove existing value from accreditation_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-accreditation-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-accreditation-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-accreditation-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ACCREDITATION_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag12564,
                {
                  name: "--remove-compliance-enum-values",
                  description:
                    'Remove existing value from compliance_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-compliance-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-compliance-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-compliance-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_COMPLIANCE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-deployments",
                  description:
                    "IDs of the deployments or fully qualified identifiers for the deployments.\n+\nTo set the `deployment` attribute:\n* provide the argument `--remove-deployments` on the command line",
                  args: {
                    name: "REMOVE_DEPLOYMENTS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-lifecycle-enum-values",
                  description:
                    'Remove existing value from lifecycle_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-lifecycle-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-lifecycle-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-lifecycle-enum-values=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_LIFECYCLE_ENUM_VALUES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag13461,
                flag14975,
                flag15136,
                flag15315,
                flag15424,
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "attributes",
      description: "Manage Attribute resources",
      subcommands: [
        {
          name: "create",
          description: "Create an Attribute",
          options: [
            flag42,
            flag46,
            {
              name: "--allowed-values",
              description:
                'The list of allowed values when the attribute value is of type enum.\nThis is required when the data_type of the attribute is ENUM.\nThe maximum number of allowed values of an attribute will be 1000.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--allowed-values=description=string,displayName=string,id=string,immutable=boolean --allowed-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--allowed-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--allowed-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ALLOWED_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag1201,
            flag1386,
            flag2292,
            {
              name: "--data-type",
              description:
                "The type of the data of the attribute. _DATA_TYPE_ must be one of:\n+\n*enum*::: Attribute's value is of type enum.\n*json*::: Attribute's value is of type json.\n*string*::: Attribute's value is of type string.\n*uri*::: Attribute's value is of type uri.\n:::\n+",
              args: {
                name: "DATA_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["enum", "json", "string", "uri"],
              },
            },
            flag3313,
            {
              name: "--display-name",
              description: "The display name of the attribute",
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
            flag7226,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--scope",
              description:
                "The scope of the attribute. It represents the resource in the API Hub to\nwhich the attribute can be linked. _SCOPE_ must be one of:\n+\n*api*::: Attribute can be linked to an API.\n*api-operation*::: Attribute can be linked to an API Operation.\n*definition*::: Attribute can be linked to a definition.\n*dependency*::: Attribute can be linked to a Dependency.\n*deployment*::: Attribute can be linked to a Deployment.\n*external-api*::: Attribute can be linked to a ExternalAPI.\n*plugin*::: Attribute can be linked to a Plugin.\n*spec*::: Attribute can be linked to a Spec.\n*version*::: Attribute can be linked to an API version.\n:::\n+",
              args: {
                name: "SCOPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "api",
                  "api-operation",
                  "definition",
                  "dependency",
                  "deployment",
                  "external-api",
                  "plugin",
                  "spec",
                  "version",
                ],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute.\n+\nTo set the `attribute` attribute:\n* provide the argument `attribute` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Attribute",
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
            flag7226,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute.\n+\nTo set the `attribute` attribute:\n* provide the argument `attribute` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Attribute",
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
            flag7226,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute.\n+\nTo set the `attribute` attribute:\n* provide the argument `attribute` on the command line",
          },
        },
        {
          name: "list",
          description: "List Attributes",
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
          description: "Update an Attribute",
          options: [
            flag42,
            flag46,
            {
              name: "--add-allowed-values",
              description:
                'Add new value to allowed_values list. The list of allowed values when the attribute value is of type enum.\nThis is required when the data_type of the attribute is ENUM.\nThe maximum number of allowed values of an attribute will be 1000.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-allowed-values=description=string,displayName=string,id=string,immutable=boolean --add-allowed-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-allowed-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-allowed-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_ALLOWED_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--allowed-values",
              description:
                'Set allowed_values to new value. The list of allowed values when the attribute value is of type enum.\nThis is required when the data_type of the attribute is ENUM.\nThe maximum number of allowed values of an attribute will be 1000.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--allowed-values=description=string,displayName=string,id=string,immutable=boolean --allowed-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--allowed-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--allowed-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ALLOWED_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag1201,
            flag1386,
            {
              name: "--clear-allowed-values",
              description: "Clear allowed_values value and set to empty list",
            },
            flag2292,
            {
              name: "--data-type",
              description:
                "The type of the data of the attribute. _DATA_TYPE_ must be one of:\n+\n*enum*::: Attribute's value is of type enum.\n*json*::: Attribute's value is of type json.\n*string*::: Attribute's value is of type string.\n*uri*::: Attribute's value is of type uri.\n:::\n+",
              args: {
                name: "DATA_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["enum", "json", "string", "uri"],
              },
            },
            flag3313,
            {
              name: "--display-name",
              description: "The display name of the attribute",
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
            flag7226,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-allowed-values",
              description:
                'Remove existing value from allowed_values list. The list of allowed values when the attribute value is of type enum.\nThis is required when the data_type of the attribute is ENUM.\nThe maximum number of allowed values of an attribute will be 1000.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-allowed-values=description=string,displayName=string,id=string,immutable=boolean --remove-allowed-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-allowed-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-allowed-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ALLOWED_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--scope",
              description:
                "The scope of the attribute. It represents the resource in the API Hub to\nwhich the attribute can be linked. _SCOPE_ must be one of:\n+\n*api*::: Attribute can be linked to an API.\n*api-operation*::: Attribute can be linked to an API Operation.\n*definition*::: Attribute can be linked to a definition.\n*dependency*::: Attribute can be linked to a Dependency.\n*deployment*::: Attribute can be linked to a Deployment.\n*external-api*::: Attribute can be linked to a ExternalAPI.\n*plugin*::: Attribute can be linked to a Plugin.\n*spec*::: Attribute can be linked to a Spec.\n*version*::: Attribute can be linked to an API version.\n:::\n+",
              args: {
                name: "SCOPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "api",
                  "api-operation",
                  "definition",
                  "dependency",
                  "deployment",
                  "external-api",
                  "plugin",
                  "spec",
                  "version",
                ],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ATTRIBUTE",
            description:
              "ID of the attribute or fully qualified identifier for the attribute.\n+\nTo set the `attribute` attribute:\n* provide the argument `attribute` on the command line",
          },
        },
      ],
    },
    {
      name: "curations",
      description: "Manage Curation resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Curation",
          options: [
            flag42,
            flag46,
            {
              name: "--application-integration-endpoint-details-trigger-id",
              description:
                "The API trigger ID of the Application Integration workflow",
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_TRIGGER_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--application-integration-endpoint-details-uri",
              description:
                "The endpoint URI should be a valid REST URI for triggering an Application\nIntegration.\nFormat:\n`https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`\nor\n`https://{location}-integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`",
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag3315,
            {
              name: "--display-name",
              description: "The display name of the curation",
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
            flag7237,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation.\n+\nTo set the `curation` attribute:\n* provide the argument `curation` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Curation",
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
            flag7237,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation.\n+\nTo set the `curation` attribute:\n* provide the argument `curation` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Curation",
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
            flag7237,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation.\n+\nTo set the `curation` attribute:\n* provide the argument `curation` on the command line",
          },
        },
        {
          name: "list",
          description: "List Curations",
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
          description: "Update a Curation",
          options: [
            flag42,
            flag46,
            {
              name: "--application-integration-endpoint-details-trigger-id",
              description:
                "The API trigger ID of the Application Integration workflow",
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_TRIGGER_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--application-integration-endpoint-details-uri",
              description:
                "The endpoint URI should be a valid REST URI for triggering an Application\nIntegration.\nFormat:\n`https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`\nor\n`https://{location}-integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`",
              args: {
                name: "APPLICATION_INTEGRATION_ENDPOINT_DETAILS_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-endpoint",
              description:
                "Set googleCloudApihubV1Curation.endpoint back to default value",
            },
            flag2292,
            flag3315,
            {
              name: "--display-name",
              description: "The display name of the curation",
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
            flag7237,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CURATION",
            description:
              "ID of the curation or fully qualified identifier for the curation.\n+\nTo set the `curation` attribute:\n* provide the argument `curation` on the command line",
          },
        },
      ],
    },
    {
      name: "dependencies",
      description: "Manage Dependency resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Dependency",
          options: [
            flag42,
            flag46,
            {
              name: "--attributes",
              description:
                'The list of user defined attributes associated with the dependency\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--consumer-external-api-resource-name",
              description:
                "The resource name of an external API in the API Hub.\n+\nFormat:\n`projects/{project}/locations/{location}/externalApis/{external_api}`",
              args: {
                name: "CONSUMER_EXTERNAL_API_RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--consumer-operation-resource-name",
              description:
                "The resource name of an operation in the API Hub.\n+\nFormat:\n`projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`",
              args: {
                name: "CONSUMER_OPERATION_RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3250,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7241,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--supplier-external-api-resource-name",
              description:
                "The resource name of an external API in the API Hub.\n+\nFormat:\n`projects/{project}/locations/{location}/externalApis/{external_api}`",
              args: {
                name: "SUPPLIER_EXTERNAL_API_RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--supplier-operation-resource-name",
              description:
                "The resource name of an operation in the API Hub.\n+\nFormat:\n`projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`",
              args: {
                name: "SUPPLIER_OPERATION_RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency.\n+\nTo set the `dependency` attribute:\n* provide the argument `dependency` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Dependency",
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
            flag7241,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency.\n+\nTo set the `dependency` attribute:\n* provide the argument `dependency` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Dependency",
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
            flag7241,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency.\n+\nTo set the `dependency` attribute:\n* provide the argument `dependency` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dependencies",
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
          description: "Update a Dependency",
          options: [
            flag42,
            flag46,
            {
              name: "--attributes",
              description:
                'Set attributes to new value. The list of user defined attributes associated with the dependency\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag1201,
            flag1509,
            flag2292,
            flag3250,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7241,
            flag7356,
            flag11637,
            flag11946,
            flag12564,
            flag14975,
            {
              name: "--update-attributes",
              description:
                'Update attributes value or add key value pair. The list of user defined attributes associated with the dependency\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPENDENCY",
            description:
              "ID of the dependency or fully qualified identifier for the dependency.\n+\nTo set the `dependency` attribute:\n* provide the argument `dependency` on the command line",
          },
        },
      ],
    },
    {
      name: "deployments",
      description: "Manage Deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Deployment",
          options: [
            flag42,
            flag46,
            {
              name: "--attributes",
              description:
                'The list of user defined attributes associated with the deployment\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--deployment-type-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--deployment-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--deployment-type-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "DEPLOYMENT_TYPE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--deployment-type-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--deployment-type-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--deployment-type-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag3316,
            {
              name: "--display-name",
              description: "The display name of the deployment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            {
              name: "--endpoints",
              description:
                "The endpoints at which this deployment resource is listening for API\nrequests. This could be a list of complete URIs, hostnames or an IP\naddresses",
              args: { name: "ENDPOINTS", description: "List", suggestions: [] },
            },
            {
              name: "--environment-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--environment-enum-values=description=string,displayName=string,id=string,immutable=boolean --environment-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--environment-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--environment-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENVIRONMENT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--environment-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--environment-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--environment-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7242,
            flag7356,
            {
              name: "--management-url-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean --management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--management-url-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--management-url-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MANAGEMENT_URL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--management-url-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--management-url-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--management-url-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--resource-uri",
              description:
                "The resource URI identifies the deployment within its gateway. For\nApigee gateways, its recommended to use the format:\norganizations/{org}/environments/{env}/apis/{api}.\nFor ex: if a proxy with name `orders` is deployed in `staging`\nenvironment of `cymbal` organization, the resource URI would be:\n`organizations/cymbal/environments/staging/apis/orders`",
              args: {
                name: "RESOURCE_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--slo-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--slo-enum-values=description=string,displayName=string,id=string,immutable=boolean --slo-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--slo-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--slo-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "SLO_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--slo-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--slo-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--slo-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag14004,
            flag14073,
            {
              name: "--source-uri-enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean --source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--source-uri-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--source-uri-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "SOURCE_URI_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--source-uri-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--source-uri-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--source-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `deployment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Deployment",
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
            flag7242,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `deployment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Deployment",
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
            flag7242,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `deployment` on the command line",
          },
        },
        {
          name: "list",
          description: "List Deployments",
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
          description: "Update deployments",
          options: [
            flag42,
            flag46,
            {
              name: "--add-deployment-type-enum-values",
              description:
                'Add new value to deployment_type_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-deployment-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-deployment-type-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_DEPLOYMENT_TYPE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-environment-enum-values",
              description:
                'Add new value to environment_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-environment-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-environment-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-environment-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-environment-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_ENVIRONMENT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-management-url-enum-values",
              description:
                'Add new value to management_url_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-management-url-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-management-url-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_MANAGEMENT_URL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-slo-enum-values",
              description:
                'Add new value to slo_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-slo-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-slo-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-slo-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-slo-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_SLO_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-source-uri-enum-values",
              description:
                'Add new value to source_uri_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean --add-source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-source-uri-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-source-uri-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_SOURCE_URI_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--attributes",
              description:
                'Set attributes to new value. The list of user defined attributes associated with the deployment\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag1201,
            flag1509,
            {
              name: "--clear-deployment-type",
              description:
                "Set googleCloudApihubV1Deployment.deploymentType back to default value",
            },
            {
              name: "--clear-deployment-type-enum-values",
              description:
                "Clear deployment_type_enum_values value and set to empty list",
            },
            {
              name: "--clear-documentation",
              description:
                "Set googleCloudApihubV1Deployment.documentation back to default value",
            },
            {
              name: "--clear-environment",
              description:
                "Set googleCloudApihubV1Deployment.environment back to default value",
            },
            {
              name: "--clear-environment-enum-values",
              description:
                "Clear environment_enum_values value and set to empty list",
            },
            {
              name: "--clear-management-url",
              description:
                "Set googleCloudApihubV1Deployment.managementUrl back to default value",
            },
            {
              name: "--clear-management-url-enum-values",
              description:
                "Clear management_url_enum_values value and set to empty list",
            },
            {
              name: "--clear-slo",
              description:
                "Set googleCloudApihubV1Deployment.slo back to default value",
            },
            {
              name: "--clear-slo-enum-values",
              description: "Clear slo_enum_values value and set to empty list",
            },
            {
              name: "--clear-source-uri",
              description:
                "Set googleCloudApihubV1Deployment.sourceUri back to default value",
            },
            {
              name: "--clear-source-uri-enum-values",
              description:
                "Clear source_uri_enum_values value and set to empty list",
            },
            flag2292,
            {
              name: "--deployment-type-enum-values",
              description:
                'Set deployment_type_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--deployment-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--deployment-type-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "DEPLOYMENT_TYPE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--deployment-type-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--deployment-type-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--deployment-type-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "DEPLOYMENT_TYPE_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag3316,
            {
              name: "--display-name",
              description: "The display name of the deployment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            {
              name: "--endpoints",
              description:
                "The endpoints at which this deployment resource is listening for API\nrequests. This could be a list of complete URIs, hostnames or an IP\naddresses",
              args: { name: "ENDPOINTS", description: "List", suggestions: [] },
            },
            {
              name: "--environment-enum-values",
              description:
                'Set environment_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--environment-enum-values=description=string,displayName=string,id=string,immutable=boolean --environment-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--environment-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--environment-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENVIRONMENT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--environment-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--environment-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--environment-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "ENVIRONMENT_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7242,
            flag7356,
            {
              name: "--management-url-enum-values",
              description:
                'Set management_url_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean --management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--management-url-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--management-url-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MANAGEMENT_URL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--management-url-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--management-url-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--management-url-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "MANAGEMENT_URL_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12564,
            {
              name: "--remove-deployment-type-enum-values",
              description:
                'Remove existing value from deployment_type_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-deployment-type-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-deployment-type-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-deployment-type-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_DEPLOYMENT_TYPE_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-environment-enum-values",
              description:
                'Remove existing value from environment_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-environment-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-environment-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-environment-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-environment-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ENVIRONMENT_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-management-url-enum-values",
              description:
                'Remove existing value from management_url_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-management-url-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-management-url-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-management-url-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_MANAGEMENT_URL_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-slo-enum-values",
              description:
                'Remove existing value from slo_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-slo-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-slo-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-slo-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-slo-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_SLO_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-source-uri-enum-values",
              description:
                'Remove existing value from source_uri_enum_values list. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean --remove-source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-source-uri-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-source-uri-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_SOURCE_URI_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--resource-uri",
              description:
                "The resource URI identifies the deployment within its gateway. For\nApigee gateways, its recommended to use the format:\norganizations/{org}/environments/{env}/apis/{api}.\nFor ex: if a proxy with name `orders` is deployed in `staging`\nenvironment of `cymbal` organization, the resource URI would be:\n`organizations/cymbal/environments/staging/apis/orders`",
              args: {
                name: "RESOURCE_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--slo-enum-values",
              description:
                'Set slo_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--slo-enum-values=description=string,displayName=string,id=string,immutable=boolean --slo-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--slo-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--slo-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "SLO_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--slo-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--slo-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--slo-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SLO_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag14004,
            flag14073,
            {
              name: "--source-uri-enum-values",
              description:
                'Set source_uri_enum_values to new value. The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean --source-uri-enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--source-uri-enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--source-uri-enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "SOURCE_URI_ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--source-uri-json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--source-uri-string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--source-uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "SOURCE_URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-attributes",
              description:
                'Update attributes value or add key value pair. The list of user defined attributes associated with the deployment\nresource.\nThe key is the attribute name. It will be of the format:\n`projects/{project}/locations/{location}/attributes/{attribute}`.\nThe value is the attribute values associated with the resource.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*enumValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is enum.\n+\n*values*:::::\nThe attribute values in case attribute data type is enum.\n+\n*description*::::::\nThe detailed description of the allowed value.\n+\n*displayName*::::::\nThe display name of the allowed value.\n+\n*id*::::::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*::::::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n*jsonValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is JSON.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*stringValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is string.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n*uriValues*::::\nThe attribute values associated with a resource in case attribute data\ntype is URL, URI or IP, like gs://bucket-name/object-name.\n+\n*values*:::::\nThe attribute values in case attribute data type is string or JSON.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-attributes=string={enumValues={values=[{description=string,displayName=string,id=string,immutable=boolean}]},jsonValues={values=[string]},stringValues={values=[string]},uriValues={values=[string]}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-attributes=\'{"string": {"enumValues": {"values": [{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]}, "jsonValues": {"values": ["string"]}, "stringValues": {"values": ["string"]}, "uriValues": {"values": ["string"]}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-attributes=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ATTRIBUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `deployment` on the command line",
          },
        },
      ],
    },
    {
      name: "discovered-api-observations",
      description: "Manage Discovered Api Observation resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Discovered Api Observation",
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
                "The location id of the discoveredApiObservation resource.\n+\nTo set the `location` attribute:\n* provide the argument `discovered_api_observation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "DISCOVERED_API_OBSERVATION",
            description:
              "ID of the discoveredApiObservation or fully qualified identifier for the discoveredApiObservation.\n+\nTo set the `discovered_api_observation` attribute:\n* provide the argument `discovered_api_observation` on the command line",
          },
        },
        {
          name: "discovered-api-operations",
          description: "Manage Discovered Api Operation resources",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Discovered Api Operation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--discovered-api-observation",
                  description:
                    "The discoveredApiObservation id of the discoveredApiOperation resource.\n+\nTo set the `discovered-api-observation` attribute:\n* provide the argument `discovered_api_operation` on the command line with a fully specified name;\n* provide the argument `--discovered-api-observation` on the command line",
                  args: {
                    name: "DISCOVERED_API_OBSERVATION",
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
                  name: "--location",
                  description:
                    "The location id of the discoveredApiOperation resource.\n+\nTo set the `location` attribute:\n* provide the argument `discovered_api_operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                name: "DISCOVERED_API_OPERATION",
                description:
                  "ID of the discoveredApiOperation or fully qualified identifier for the discoveredApiOperation.\n+\nTo set the `discovered_api_operation` attribute:\n* provide the argument `discovered_api_operation` on the command line",
              },
            },
            {
              name: "list",
              description: "List Discovered Api Operations",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--discovered-api-observation",
                  description:
                    "ID of the discoveredApiObservation or fully qualified identifier for the discoveredApiObservation.\n+\nTo set the `discovered-api-observation` attribute:\n* provide the argument `--discovered-api-observation` on the command line",
                  args: {
                    name: "DISCOVERED_API_OBSERVATION",
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
                    "The location id of the discoveredApiObservation resource.\n+\nTo set the `location` attribute:\n* provide the argument `--discovered-api-observation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          description: "List Discovered Api Observations",
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
      name: "external-apis",
      description: "Manage External Api resources",
      subcommands: [
        {
          name: "create",
          description: "Create an External Api",
          options: [
            flag42,
            flag46,
            flag765,
            flag1201,
            flag2292,
            flag3213,
            {
              name: "--display-name",
              description:
                "Display name of the external API. Max length is 63 characters (Unicode Code\nPoints)",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            {
              name: "--endpoints",
              description: "List of endpoints on which this API is accessible",
              args: { name: "ENDPOINTS", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7249,
            flag7356,
            {
              name: "--paths",
              description: "List of paths served by this API",
              args: { name: "PATHS", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi.\n+\nTo set the `external_api` attribute:\n* provide the argument `external_api` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an External Api",
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
            flag7249,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi.\n+\nTo set the `external_api` attribute:\n* provide the argument `external_api` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an External Api",
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
            flag7249,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi.\n+\nTo set the `external_api` attribute:\n* provide the argument `external_api` on the command line",
          },
        },
        {
          name: "list",
          description: "List External Apis",
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
          description: "Update an External Api",
          options: [
            flag42,
            flag46,
            {
              name: "--add-endpoints",
              description: "Add new value to endpoints list",
              args: {
                name: "ADD_ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-paths",
              description: "Add new value to paths list",
              args: {
                name: "ADD_PATHS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag759,
            flag1201,
            flag1509,
            {
              name: "--clear-documentation",
              description:
                "Set googleCloudApihubV1ExternalApi.documentation back to default value",
            },
            {
              name: "--clear-endpoints",
              description: "Clear endpoints value and set to empty list",
            },
            {
              name: "--clear-paths",
              description: "Clear paths value and set to empty list",
            },
            flag2292,
            flag3213,
            {
              name: "--display-name",
              description:
                "Display name of the external API. Max length is 63 characters (Unicode Code\nPoints)",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            {
              name: "--endpoints",
              description: "Set endpoints to new value",
              args: {
                name: "ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7249,
            flag7356,
            {
              name: "--paths",
              description: "Set paths to new value",
              args: {
                name: "PATHS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12564,
            {
              name: "--remove-endpoints",
              description: "Remove existing value from endpoints list",
              args: {
                name: "REMOVE_ENDPOINTS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-paths",
              description: "Remove existing value from paths list",
              args: {
                name: "REMOVE_PATHS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag14975,
            flag15136,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EXTERNAL_API",
            description:
              "ID of the externalApi or fully qualified identifier for the externalApi.\n+\nTo set the `external_api` attribute:\n* provide the argument `external_api` on the command line",
          },
        },
      ],
    },
    {
      name: "host-project-registrations",
      description: "Manage Host Project Registration resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Host Project Registration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-project",
              description:
                'Google cloud project name in the format: "projects/abc" or "projects/123".\nAs input, project name with either project id or number are accepted.\nAs output, this field will contain project number',
              args: {
                name: "GCP_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7254,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HOST_PROJECT_REGISTRATION",
            description:
              "ID of the hostProjectRegistration or fully qualified identifier for the hostProjectRegistration.\n+\nTo set the `host_project_registration` attribute:\n* provide the argument `host_project_registration` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Host Project Registration",
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
            flag7254,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HOST_PROJECT_REGISTRATION",
            description:
              "ID of the hostProjectRegistration or fully qualified identifier for the hostProjectRegistration.\n+\nTo set the `host_project_registration` attribute:\n* provide the argument `host_project_registration` on the command line",
          },
        },
        {
          name: "list",
          description: "List Host Project Registrations",
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
      name: "plugins",
      description: "Manage Plugin resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Plugin",
          options: [
            flag42,
            flag46,
            {
              name: "--actions-config",
              description:
                'The configuration of actions supported by the plugin.\n**REQUIRED**: This field must be provided when creating or updating a\nPlugin. The server will reject requests if this field is missing.\n+\n*description*:::\nThe description of the operation performed by the action.\n+\n*displayName*:::\nThe display name of the action.\n+\n*id*:::\nThe id of the action.\n+\n*triggerMode*:::\nThe trigger mode supported by the action.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--actions-config=description=string,displayName=string,id=string,triggerMode=string --actions-config=description=string,displayName=string,id=string,triggerMode=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--actions-config=\'[{"description": "string", "displayName": "string", "id": "string", "triggerMode": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--actions-config=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ACTIONS_CONFIG",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--auth-config-template-supported-types",
              description:
                "The list of authentication types supported by the plugin. _AUTH_CONFIG_TEMPLATE_SUPPORTED_TYPES_ must be one of:\n+\n*api-key*::: API Key authentication.\n*google-service-account*::: Google service account authentication.\n*no-auth*::: No authentication.\n*oauth2-client-credentials*::: Oauth 2.0 client credentials grant authentication.\n*user-password*::: Username and password authentication.\n:::\n+",
              args: {
                name: "AUTH_CONFIG_TEMPLATE_SUPPORTED_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--config-template-additional",
              description:
                'The list of additional configuration variables for the plugin\'s\nconfiguration.\n+\n*description*:::\nDescription.\n+\n*enumOptions*:::\nEnum options. To be populated if `ValueType` is `ENUM`.\n+\n*description*::::\nDescription of the option.\n+\n*displayName*::::\nDisplay name of the option.\n+\n*id*::::\nId of the option.\n+\n*id*:::\nID of the config variable. Must be unique within the configuration.\n+\n*multiSelectOptions*:::\nMulti select options. To be populated if `ValueType` is `MULTI_SELECT`.\n+\n*description*::::\nDescription of the option.\n+\n*displayName*::::\nDisplay name of the option.\n+\n*id*::::\nId of the option.\n+\n*required*:::\nFlag represents that this `ConfigVariable` must be provided for a\nPluginInstance.\n+\n*validationRegex*:::\nRegular expression in RE2 syntax used for validating the `value` of a\n`ConfigVariable`.\n+\n*valueType*:::\nType of the parameter: string, int, bool etc.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--config-template-additional=description=string,enumOptions=[{description=string,displayName=string,id=string}],id=string,multiSelectOptions=[{description=string,displayName=string,id=string}],required=boolean,validationRegex=string,valueType=string --config-template-additional=description=string,enumOptions=[{description=string,displayName=string,id=string}],id=string,multiSelectOptions=[{description=string,displayName=string,id=string}],required=boolean,validationRegex=string,valueType=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--config-template-additional=\'[{"description": "string", "enumOptions": [{"description": "string", "displayName": "string", "id": "string"}], "id": "string", "multiSelectOptions": [{"description": "string", "displayName": "string", "id": "string"}], "required": boolean, "validationRegex": "string", "valueType": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--config-template-additional=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CONFIG_TEMPLATE_ADDITIONAL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description:
                "The plugin description. Max length is 2000 characters (Unicode code\npoints)",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "The display name of the plugin. Max length is 50 characters (Unicode code\npoints)",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3880,
            {
              name: "--enum-values",
              description:
                'Required, The attribute values in case attribute data type is enum.\n+\n*description*:::\nThe detailed description of the allowed value.\n+\n*displayName*:::\nThe display name of the allowed value.\n+\n*id*:::\nThe ID of the allowed value.\n* If provided, the same will be used. The service will throw an error if\nthe specified id is already used by another allowed value in the same\nattribute resource.\n* If not provided, a system generated id derived from the display name\nwill be used. In this case, the service will handle conflict resolution\nby adding a system generated suffix in case of duplicates.\n+\nThis value should be 4-63 characters, and valid characters\nare /[a-z][0-9]-/.\n+\n*immutable*:::\nWhen set to true, the allowed value cannot be updated or deleted by the\nuser. It can only be true for System defined attributes.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--enum-values=description=string,displayName=string,id=string,immutable=boolean --enum-values=description=string,displayName=string,id=string,immutable=boolean\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--enum-values=\'[{"description": "string", "displayName": "string", "id": "string", "immutable": boolean}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--enum-values=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENUM_VALUES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gateway-type",
              description:
                "The type of the gateway. _GATEWAY_TYPE_ must be one of:\n+\n*api-discovery*::: The gateway type is API Discovery.\n*apigee-edge-private-cloud*::: The gateway type is Apigee Edge Private Cloud.\n*apigee-edge-public-cloud*::: The gateway type is Apigee Edge Public Cloud.\n*apigee-x-and-hybrid*::: The gateway type is Apigee X and Hybrid.\n*cloud-api-gateway*::: The gateway type is Cloud API Gateway.\n*cloud-endpoints*::: The gateway type is Cloud Endpoints.\n*others*::: The gateway type for any other types of gateways.\n:::\n+",
              args: {
                name: "GATEWAY_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "api-discovery",
                  "apigee-edge-private-cloud",
                  "apigee-edge-public-cloud",
                  "apigee-x-and-hybrid",
                  "cloud-api-gateway",
                  "cloud-endpoints",
                  "others",
                ],
              },
            },
            flag5453,
            {
              name: "--hosting-service-uri",
              description:
                "The URI of the service implemented by the plugin developer, used to\ninvoke the plugin's functionality. This information is only required for\nuser defined plugins",
              args: {
                name: "HOSTING_SERVICE_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--json-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "JSON_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag7269,
            flag7356,
            {
              name: "--plugin-category",
              description:
                "The category of the plugin, identifying its primary category or purpose.\nThis field is required for all plugins. _PLUGIN_CATEGORY_ must be one of:\n+\n*api-gateway*::: API_GATEWAY plugins represent plugins built for API Gateways like Apigee.\n*api-producer*::: API_PRODUCER plugins represent plugins built for API Producers like\nCloud Run, Application Integration etc.\n:::\n+",
              args: {
                name: "PLUGIN_CATEGORY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["api-gateway", "api-producer"],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--string-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "STRING_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--uri-values",
              description:
                "The attribute values in case attribute data type is string or JSON",
              args: {
                name: "URI_VALUES",
                description: "List",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin.\n+\nTo set the `plugin` attribute:\n* provide the argument `plugin` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Plugin",
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
            flag7269,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin.\n+\nTo set the `plugin` attribute:\n* provide the argument `plugin` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Plugin",
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
            flag7269,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin.\n+\nTo set the `plugin` attribute:\n* provide the argument `plugin` on the command line",
          },
        },
        {
          name: "disable",
          description: "Disable a Plugin",
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
            flag7269,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin.\n+\nTo set the `plugin` attribute:\n* provide the argument `plugin` on the command line",
          },
        },
        {
          name: "enable",
          description: "Enable a Plugin",
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
            flag7269,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PLUGIN",
            description:
              "ID of the plugin or fully qualified identifier for the plugin.\n+\nTo set the `plugin` attribute:\n* provide the argument `plugin` on the command line",
          },
        },
        {
          name: "instances",
          description: "Manage Plugin Instance resources",
          subcommands: [
            {
              name: "create",
              description: "Create a Plugin Instance",
              options: [
                flag42,
                flag46,
                {
                  name: "--actions",
                  description:
                    'Required, The action status for the plugin instance.\n+\n*actionId*:::\nThis should map to one of the [action id][google.cloud.apihub.v1.PluginActionConfig.id] specified\nin [actions_config][google.cloud.apihub.v1.Plugin.actions_config] in the plugin.\n+\n*curationConfig*:::\nThis configuration should be provided if the plugin action is publishing\ndata to API hub curate layer.\n+\n*curationType*::::\nThe curation type for this plugin instance.\n+\n*customCuration*::::\nCustom curation information for this plugin instance.\n+\n*curation*:::::\nThe unique name of the curation resource. This will be the name of the\ncuration resource in the format:\n`projects/{project}/locations/{location}/curations/{curation}`.\n+\n*scheduleCronExpression*:::\nThe schedule for this plugin instance action. This can only be set if the\nplugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.\n+\n*scheduleTimeZone*:::\nThe time zone for the schedule cron expression. If not provided, UTC will\nbe used.\n+\n*serviceAccount*:::\nThe service account used to publish data. Note, the service account will\nonly be accepted for non-Google Cloud plugins like OPDK.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string --actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--actions=\'[{"actionId": "string", "curationConfig": {"curationType": "string", "customCuration": {"curation": "string"}}, "scheduleCronExpression": "string", "scheduleTimeZone": "string", "serviceAccount": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--actions=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ACTIONS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--additional-config",
                  description:
                    'The additional information for this plugin instance corresponding to the\nadditional config template of the plugin. This information will be sent to\nplugin hosting service on each call to plugin hosted service.\nThe key will be the config_variable_template.display_name to uniquely\nidentify the config variable.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*boolValue*::::\nThe config variable value in case of config variable of type boolean.\n+\n*enumValue*::::\nThe config variable value in case of config variable of type enum.\n+\n*description*:::::\nDescription of the option.\n+\n*displayName*:::::\nDisplay name of the option.\n+\n*id*:::::\nId of the option.\n+\n*intValue*::::\nThe config variable value in case of config variable of type integer.\n+\n*multiIntValues*::::\nThe config variable value in case of config variable of type multi\ninteger.\n+\n*values*:::::\nThe config variable value of data type multi int.\n+\n*multiSelectValues*::::\nThe config variable value in case of config variable of type multi\nselect.\n+\n*values*:::::\nThe config variable value of data type multi select.\n+\n*description*::::::\nDescription of the option.\n+\n*displayName*::::::\nDisplay name of the option.\n+\n*id*::::::\nId of the option.\n+\n*multiStringValues*::::\nThe config variable value in case of config variable of type multi\nstring.\n+\n*values*:::::\nThe config variable value of data type multi string.\n+\n*secretValue*::::\nThe config variable value in case of config variable of type secret.\n+\n*secretVersion*:::::\nThe resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`.\n+\n*stringValue*::::\nThe config variable value in case of config variable of type string.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--additional-config=string={boolValue=boolean,enumValue={description=string,displayName=string,id=string},intValue=int,multiIntValues={values=[int]},multiSelectValues={values=[{description=string,displayName=string,id=string}]},multiStringValues={values=[string]},secretValue={secretVersion=string},stringValue=string}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--additional-config=\'{"string": {"boolValue": boolean, "enumValue": {"description": "string", "displayName": "string", "id": "string"}, "intValue": int, "multiIntValues": {"values": [int]}, "multiSelectValues": {"values": [{"description": "string", "displayName": "string", "id": "string"}]}, "multiStringValues": {"values": ["string"]}, "secretValue": {"secretVersion": "string"}, "stringValue": "string"}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--additional-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADDITIONAL_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--api-key-config-http-element-location",
                  description:
                    "The location of the API key.\nThe default value is QUERY. _API_KEY_CONFIG_HTTP_ELEMENT_LOCATION_ must be one of:\n+\n*body*::: Element is in the HTTP request body.\n*cookie*::: Element is in the HTTP request cookie.\n*header*::: Element is in the HTTP request header.\n*path*::: Element is in the HTTP request path.\n*query*::: Element is in the HTTP request query.\n:::\n+",
                  args: {
                    name: "API_KEY_CONFIG_HTTP_ELEMENT_LOCATION",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["body", "cookie", "header", "path", "query"],
                  },
                },
                {
                  name: "--api-key-config-name",
                  description:
                    'The parameter name of the API key.\nE.g. If the API request is "https://example.com/act?api_key=<API KEY>",\n"api_key" would be the parameter name',
                  args: {
                    name: "API_KEY_CONFIG_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--api-key-config-secret-version",
                  description:
                    "The resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "API_KEY_CONFIG_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag720,
                {
                  name: "--auth-config-type",
                  description:
                    "The authentication type. _AUTH_CONFIG_TYPE_ must be one of:\n+\n*api-key*::: API Key authentication.\n*google-service-account*::: Google service account authentication.\n*no-auth*::: No authentication.\n*oauth2-client-credentials*::: Oauth 2.0 client credentials grant authentication.\n*user-password*::: Username and password authentication.\n:::\n+",
                  args: {
                    name: "AUTH_CONFIG_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "api-key",
                      "google-service-account",
                      "no-auth",
                      "oauth2-client-credentials",
                      "user-password",
                    ],
                  },
                },
                flag1201,
                flag2292,
                {
                  name: "--display-name",
                  description:
                    "The display name for this plugin instance. Max length is 255 characters",
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
                flag7256,
                flag7356,
                {
                  name: "--oauth2-client-credentials-config-id",
                  description: "The client identifier",
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--oauth2-client-credentials-config-secret-version",
                  description:
                    "The resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11330,
                flag11637,
                flag11946,
                {
                  name: "--source-environments-config",
                  description:
                    'The source environment\'s config present in the gateway instance linked to\nthe plugin instance.\nThe key is the `source_environment` name from the SourceEnvironment\nmessage.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*createTime*::::\nThe time at which the environment was created at the source.\n+\n*sourceEnvironment*::::\nThe name of the environment at the source. This should map to\n[Deployment][google.cloud.apihub.v1.SourceEnvironment.source_environment].\n+\n*sourceEnvironmentUri*::::\nThe location where additional information about source environments can be\nfound. The location should be relative path of the environment manifest\nwith respect to a plugin instance.\n+\n*updateTime*::::\nThe time at which the environment was last updated at the source.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--source-environments-config=string={createTime=string,sourceEnvironment=string,sourceEnvironmentUri=string,updateTime=string}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--source-environments-config=\'{"string": {"createTime": "string", "sourceEnvironment": "string", "sourceEnvironmentUri": "string", "updateTime": "string"}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--source-environments-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "SOURCE_ENVIRONMENTS_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                    suggestions: [],
                  },
                },
                flag14070,
                flag14975,
                flag15315,
                {
                  name: "--user-password-config-secret-version",
                  description:
                    "The resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "USER_PASSWORD_CONFIG_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--user-password-config-username",
                  description: "Username",
                  args: {
                    name: "USER_PASSWORD_CONFIG_USERNAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Plugin Instance",
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
                flag7256,
                flag7356,
                flag11330,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Plugin Instance",
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
                flag7256,
                flag7356,
                flag11330,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
              },
            },
            {
              name: "list",
              description: "List Plugin Instances",
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
                    "The location id of the plugin resource.\n+\nTo set the `location` attribute:\n* provide the argument `--plugin` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11059,
                {
                  name: "--plugin",
                  description:
                    "ID of the plugin or fully qualified identifier for the plugin.\n+\nTo set the `plugin` attribute:\n* provide the argument `--plugin` on the command line",
                  args: {
                    name: "PLUGIN",
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
            {
              name: "manage-source-data",
              description: "manage pluginInstances",
              options: [
                flag42,
                flag46,
                {
                  name: "--action",
                  description:
                    "Action to be performed. _ACTION_ must be one of:\n+\n*delete*::: Delete data.\n*upload*::: Upload or upsert data.\n:::\n+",
                  args: {
                    name: "ACTION",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["delete", "upload"],
                  },
                },
                flag1201,
                flag2292,
                {
                  name: "--data",
                  description: "Data to be managed",
                  args: {
                    name: "DATA",
                    description:
                      "Googlecloudsdk.core.util.http_encoding:Encode",
                    suggestions: [],
                  },
                },
                {
                  name: "--data-type",
                  description:
                    "Type of data to be managed. _DATA_TYPE_ must be one of:\n+\n*environment-manifest*::: Environment manifest.\n*proxy-bundle*::: Proxy bundle.\n*proxy-deployment-manifest*::: Proxy deployment manifest.\n*shared-flow-bundle*::: Shared flow bundle.\n:::\n+",
                  args: {
                    name: "DATA_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "environment-manifest",
                      "proxy-bundle",
                      "proxy-deployment-manifest",
                      "shared-flow-bundle",
                    ],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7256,
                flag7356,
                flag11330,
                flag11637,
                flag11946,
                {
                  name: "--relative-path",
                  description:
                    "Relative path of data being managed for a given plugin instance",
                  args: {
                    name: "RELATIVE_PATH",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a Plugin Instance",
              options: [
                flag42,
                flag46,
                {
                  name: "--actions",
                  description:
                    'Set actions to new value. The action status for the plugin instance.\n+\n*actionId*:::\nThis should map to one of the [action id][google.cloud.apihub.v1.PluginActionConfig.id] specified\nin [actions_config][google.cloud.apihub.v1.Plugin.actions_config] in the plugin.\n+\n*curationConfig*:::\nThis configuration should be provided if the plugin action is publishing\ndata to API hub curate layer.\n+\n*curationType*::::\nThe curation type for this plugin instance.\n+\n*customCuration*::::\nCustom curation information for this plugin instance.\n+\n*curation*:::::\nThe unique name of the curation resource. This will be the name of the\ncuration resource in the format:\n`projects/{project}/locations/{location}/curations/{curation}`.\n+\n*scheduleCronExpression*:::\nThe schedule for this plugin instance action. This can only be set if the\nplugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.\n+\n*scheduleTimeZone*:::\nThe time zone for the schedule cron expression. If not provided, UTC will\nbe used.\n+\n*serviceAccount*:::\nThe service account used to publish data. Note, the service account will\nonly be accepted for non-Google Cloud plugins like OPDK.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string --actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--actions=\'[{"actionId": "string", "curationConfig": {"curationType": "string", "customCuration": {"curation": "string"}}, "scheduleCronExpression": "string", "scheduleTimeZone": "string", "serviceAccount": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--actions=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ACTIONS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-actions",
                  description:
                    'Add new value to actions list. The action status for the plugin instance.\n+\n*actionId*:::\nThis should map to one of the [action id][google.cloud.apihub.v1.PluginActionConfig.id] specified\nin [actions_config][google.cloud.apihub.v1.Plugin.actions_config] in the plugin.\n+\n*curationConfig*:::\nThis configuration should be provided if the plugin action is publishing\ndata to API hub curate layer.\n+\n*curationType*::::\nThe curation type for this plugin instance.\n+\n*customCuration*::::\nCustom curation information for this plugin instance.\n+\n*curation*:::::\nThe unique name of the curation resource. This will be the name of the\ncuration resource in the format:\n`projects/{project}/locations/{location}/curations/{curation}`.\n+\n*scheduleCronExpression*:::\nThe schedule for this plugin instance action. This can only be set if the\nplugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.\n+\n*scheduleTimeZone*:::\nThe time zone for the schedule cron expression. If not provided, UTC will\nbe used.\n+\n*serviceAccount*:::\nThe service account used to publish data. Note, the service account will\nonly be accepted for non-Google Cloud plugins like OPDK.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string --add-actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-actions=\'[{"actionId": "string", "curationConfig": {"curationType": "string", "customCuration": {"curation": "string"}}, "scheduleCronExpression": "string", "scheduleTimeZone": "string", "serviceAccount": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-actions=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_ACTIONS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--additional-config",
                  description:
                    'Set additional_config to new value. The additional information for this plugin instance corresponding to the\nadditional config template of the plugin. This information will be sent to\nplugin hosting service on each call to plugin hosted service.\nThe key will be the config_variable_template.display_name to uniquely\nidentify the config variable.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*boolValue*::::\nThe config variable value in case of config variable of type boolean.\n+\n*enumValue*::::\nThe config variable value in case of config variable of type enum.\n+\n*description*:::::\nDescription of the option.\n+\n*displayName*:::::\nDisplay name of the option.\n+\n*id*:::::\nId of the option.\n+\n*intValue*::::\nThe config variable value in case of config variable of type integer.\n+\n*multiIntValues*::::\nThe config variable value in case of config variable of type multi\ninteger.\n+\n*values*:::::\nThe config variable value of data type multi int.\n+\n*multiSelectValues*::::\nThe config variable value in case of config variable of type multi\nselect.\n+\n*values*:::::\nThe config variable value of data type multi select.\n+\n*description*::::::\nDescription of the option.\n+\n*displayName*::::::\nDisplay name of the option.\n+\n*id*::::::\nId of the option.\n+\n*multiStringValues*::::\nThe config variable value in case of config variable of type multi\nstring.\n+\n*values*:::::\nThe config variable value of data type multi string.\n+\n*secretValue*::::\nThe config variable value in case of config variable of type secret.\n+\n*secretVersion*:::::\nThe resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`.\n+\n*stringValue*::::\nThe config variable value in case of config variable of type string.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--additional-config=string={boolValue=boolean,enumValue={description=string,displayName=string,id=string},intValue=int,multiIntValues={values=[int]},multiSelectValues={values=[{description=string,displayName=string,id=string}]},multiStringValues={values=[string]},secretValue={secretVersion=string},stringValue=string}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--additional-config=\'{"string": {"boolValue": boolean, "enumValue": {"description": "string", "displayName": "string", "id": "string"}, "intValue": int, "multiIntValues": {"values": [int]}, "multiSelectValues": {"values": [{"description": "string", "displayName": "string", "id": "string"}]}, "multiStringValues": {"values": ["string"]}, "secretValue": {"secretVersion": "string"}, "stringValue": "string"}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--additional-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADDITIONAL_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--api-key-config-http-element-location",
                  description:
                    "The location of the API key.\nThe default value is QUERY. _API_KEY_CONFIG_HTTP_ELEMENT_LOCATION_ must be one of:\n+\n*body*::: Element is in the HTTP request body.\n*cookie*::: Element is in the HTTP request cookie.\n*header*::: Element is in the HTTP request header.\n*path*::: Element is in the HTTP request path.\n*query*::: Element is in the HTTP request query.\n:::\n+",
                  args: {
                    name: "API_KEY_CONFIG_HTTP_ELEMENT_LOCATION",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["body", "cookie", "header", "path", "query"],
                  },
                },
                {
                  name: "--api-key-config-name",
                  description:
                    'The parameter name of the API key.\nE.g. If the API request is "https://example.com/act?api_key=<API KEY>",\n"api_key" would be the parameter name',
                  args: {
                    name: "API_KEY_CONFIG_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--api-key-config-secret-version",
                  description:
                    "The resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "API_KEY_CONFIG_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--auth-config-type",
                  description:
                    "The authentication type. _AUTH_CONFIG_TYPE_ must be one of:\n+\n*api-key*::: API Key authentication.\n*google-service-account*::: Google service account authentication.\n*no-auth*::: No authentication.\n*oauth2-client-credentials*::: Oauth 2.0 client credentials grant authentication.\n*user-password*::: Username and password authentication.\n:::\n+",
                  args: {
                    name: "AUTH_CONFIG_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "api-key",
                      "google-service-account",
                      "no-auth",
                      "oauth2-client-credentials",
                      "user-password",
                    ],
                  },
                },
                flag1201,
                {
                  name: "--clear-actions",
                  description: "Clear actions value and set to empty list",
                },
                {
                  name: "--clear-additional-config",
                  description:
                    "Clear additional_config value and set to empty map",
                },
                {
                  name: "--clear-auth-config",
                  description:
                    "Set googleCloudApihubV1PluginInstance.authConfig back to default value",
                },
                {
                  name: "--clear-source-environments-config",
                  description:
                    "Clear source_environments_config value and set to empty map",
                },
                flag2292,
                {
                  name: "--display-name",
                  description:
                    "The display name for this plugin instance. Max length is 255 characters",
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
                flag7256,
                flag7356,
                {
                  name: "--oauth2-client-credentials-config-id",
                  description: "The client identifier",
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--oauth2-client-credentials-config-secret-version",
                  description:
                    "The resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "OAUTH2_CLIENT_CREDENTIALS_CONFIG_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11330,
                flag11637,
                flag11946,
                {
                  name: "--remove-actions",
                  description:
                    'Remove existing value from actions list. The action status for the plugin instance.\n+\n*actionId*:::\nThis should map to one of the [action id][google.cloud.apihub.v1.PluginActionConfig.id] specified\nin [actions_config][google.cloud.apihub.v1.Plugin.actions_config] in the plugin.\n+\n*curationConfig*:::\nThis configuration should be provided if the plugin action is publishing\ndata to API hub curate layer.\n+\n*curationType*::::\nThe curation type for this plugin instance.\n+\n*customCuration*::::\nCustom curation information for this plugin instance.\n+\n*curation*:::::\nThe unique name of the curation resource. This will be the name of the\ncuration resource in the format:\n`projects/{project}/locations/{location}/curations/{curation}`.\n+\n*scheduleCronExpression*:::\nThe schedule for this plugin instance action. This can only be set if the\nplugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.\n+\n*scheduleTimeZone*:::\nThe time zone for the schedule cron expression. If not provided, UTC will\nbe used.\n+\n*serviceAccount*:::\nThe service account used to publish data. Note, the service account will\nonly be accepted for non-Google Cloud plugins like OPDK.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string --remove-actions=actionId=string,curationConfig={curationType=string,customCuration={curation=string}},scheduleCronExpression=string,scheduleTimeZone=string,serviceAccount=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-actions=\'[{"actionId": "string", "curationConfig": {"curationType": "string", "customCuration": {"curation": "string"}}, "scheduleCronExpression": "string", "scheduleTimeZone": "string", "serviceAccount": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-actions=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ACTIONS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-additional-config",
                  description:
                    'Remove existing value from map additional_config. Sets `remove_additional_config` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-additional-config=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-additional-config=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-additional-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ADDITIONAL_CONFIG",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-source-environments-config",
                  description:
                    'Remove existing value from map source_environments_config. Sets `remove_source_environments_config` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-source-environments-config=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-source-environments-config=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-source-environments-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_SOURCE_ENVIRONMENTS_CONFIG",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--source-environments-config",
                  description:
                    'Set source_environments_config to new value. The source environment\'s config present in the gateway instance linked to\nthe plugin instance.\nThe key is the `source_environment` name from the SourceEnvironment\nmessage.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*createTime*::::\nThe time at which the environment was created at the source.\n+\n*sourceEnvironment*::::\nThe name of the environment at the source. This should map to\n[Deployment][google.cloud.apihub.v1.SourceEnvironment.source_environment].\n+\n*sourceEnvironmentUri*::::\nThe location where additional information about source environments can be\nfound. The location should be relative path of the environment manifest\nwith respect to a plugin instance.\n+\n*updateTime*::::\nThe time at which the environment was last updated at the source.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--source-environments-config=string={createTime=string,sourceEnvironment=string,sourceEnvironmentUri=string,updateTime=string}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--source-environments-config=\'{"string": {"createTime": "string", "sourceEnvironment": "string", "sourceEnvironmentUri": "string", "updateTime": "string"}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--source-environments-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "SOURCE_ENVIRONMENTS_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag14070,
                flag14975,
                {
                  name: "--update-additional-config",
                  description:
                    'Update additional_config value or add key value pair. The additional information for this plugin instance corresponding to the\nadditional config template of the plugin. This information will be sent to\nplugin hosting service on each call to plugin hosted service.\nThe key will be the config_variable_template.display_name to uniquely\nidentify the config variable.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*boolValue*::::\nThe config variable value in case of config variable of type boolean.\n+\n*enumValue*::::\nThe config variable value in case of config variable of type enum.\n+\n*description*:::::\nDescription of the option.\n+\n*displayName*:::::\nDisplay name of the option.\n+\n*id*:::::\nId of the option.\n+\n*intValue*::::\nThe config variable value in case of config variable of type integer.\n+\n*multiIntValues*::::\nThe config variable value in case of config variable of type multi\ninteger.\n+\n*values*:::::\nThe config variable value of data type multi int.\n+\n*multiSelectValues*::::\nThe config variable value in case of config variable of type multi\nselect.\n+\n*values*:::::\nThe config variable value of data type multi select.\n+\n*description*::::::\nDescription of the option.\n+\n*displayName*::::::\nDisplay name of the option.\n+\n*id*::::::\nId of the option.\n+\n*multiStringValues*::::\nThe config variable value in case of config variable of type multi\nstring.\n+\n*values*:::::\nThe config variable value of data type multi string.\n+\n*secretValue*::::\nThe config variable value in case of config variable of type secret.\n+\n*secretVersion*:::::\nThe resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`.\n+\n*stringValue*::::\nThe config variable value in case of config variable of type string.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-additional-config=string={boolValue=boolean,enumValue={description=string,displayName=string,id=string},intValue=int,multiIntValues={values=[int]},multiSelectValues={values=[{description=string,displayName=string,id=string}]},multiStringValues={values=[string]},secretValue={secretVersion=string},stringValue=string}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-additional-config=\'{"string": {"boolValue": boolean, "enumValue": {"description": "string", "displayName": "string", "id": "string"}, "intValue": int, "multiIntValues": {"values": [int]}, "multiSelectValues": {"values": [{"description": "string", "displayName": "string", "id": "string"}]}, "multiStringValues": {"values": ["string"]}, "secretValue": {"secretVersion": "string"}, "stringValue": "string"}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-additional-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "UPDATE_ADDITIONAL_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--update-source-environments-config",
                  description:
                    'Update source_environments_config value or add key value pair. The source environment\'s config present in the gateway instance linked to\nthe plugin instance.\nThe key is the `source_environment` name from the SourceEnvironment\nmessage.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*createTime*::::\nThe time at which the environment was created at the source.\n+\n*sourceEnvironment*::::\nThe name of the environment at the source. This should map to\n[Deployment][google.cloud.apihub.v1.SourceEnvironment.source_environment].\n+\n*sourceEnvironmentUri*::::\nThe location where additional information about source environments can be\nfound. The location should be relative path of the environment manifest\nwith respect to a plugin instance.\n+\n*updateTime*::::\nThe time at which the environment was last updated at the source.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-source-environments-config=string={createTime=string,sourceEnvironment=string,sourceEnvironmentUri=string,updateTime=string}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-source-environments-config=\'{"string": {"createTime": "string", "sourceEnvironment": "string", "sourceEnvironmentUri": "string", "updateTime": "string"}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-source-environments-config=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "UPDATE_SOURCE_ENVIRONMENTS_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag15315,
                {
                  name: "--user-password-config-secret-version",
                  description:
                    "The resource name of the secret version in the format,\nformat as: `projects/*/secrets/*/versions/*`",
                  args: {
                    name: "USER_PASSWORD_CONFIG_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--user-password-config-username",
                  description: "Username",
                  args: {
                    name: "USER_PASSWORD_CONFIG_USERNAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
              args: {
                name: "INSTANCE",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List Plugins",
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
      name: "runtime-project-attachments",
      description: "Manage Runtime Project Attachment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a Runtime Project Attachment",
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
            flag7272,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--runtime-project",
              description:
                'Google cloud project name in the format: "projects/abc" or "projects/123".\nAs input, project name with either project id or number are accepted.\nAs output, this field will contain project number',
              args: {
                name: "RUNTIME_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME_PROJECT_ATTACHMENT",
            description:
              "ID of the runtimeProjectAttachment or fully qualified identifier for the runtimeProjectAttachment.\n+\nTo set the `runtime_project_attachment` attribute:\n* provide the argument `runtime_project_attachment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Runtime Project Attachment",
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
            flag7272,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME_PROJECT_ATTACHMENT",
            description:
              "ID of the runtimeProjectAttachment or fully qualified identifier for the runtimeProjectAttachment.\n+\nTo set the `runtime_project_attachment` attribute:\n* provide the argument `runtime_project_attachment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Runtime Project Attachment",
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
            flag7272,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RUNTIME_PROJECT_ATTACHMENT",
            description:
              "ID of the runtimeProjectAttachment or fully qualified identifier for the runtimeProjectAttachment.\n+\nTo set the `runtime_project_attachment` attribute:\n* provide the argument `runtime_project_attachment` on the command line",
          },
        },
        {
          name: "list",
          description: "List Runtime Project Attachments",
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
          name: "lookup",
          description: "Lookup a runtime project attachment",
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
              description: "The location of the runtime project attachment",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--service-project",
              description: "The service project ID to lookup attachment for",
              args: {
                name: "SERVICE_PROJECT",
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
  ],
};

export default completionSpec;
