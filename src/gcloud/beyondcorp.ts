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
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
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
const flag2225: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2228: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2447: Fig.Option = {
  name: "--contextual-headers-output-type",
  description:
    "Default output type for all enabled headers. _CONTEXTUAL_HEADERS_OUTPUT_TYPE_ must be one of:\n+\n*json*::: JSON output type.\n*none*::: Explicitly disable header output.\n*protobuf*::: Protobuf output type.\n:::\n+",
  args: {
    name: "CONTEXTUAL_HEADERS_OUTPUT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["json", "none", "protobuf"],
  },
};
const flag3510: Fig.Option = {
  name: "--device-info-output-type",
  description:
    "The output type details for the delegated device. _DEVICE_INFO_OUTPUT_TYPE_ must be one of:\n+\n*json*::: JSON output type.\n*none*::: Explicitly disable header output.\n*protobuf*::: Protobuf output type.\n:::\n+",
  args: {
    name: "DEVICE_INFO_OUTPUT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["json", "none", "protobuf"],
  },
};
const flag3703: Fig.Option = {
  name: "--display-name",
  description:
    "An arbitrary user-provided name for the SecurityGateway.\nCannot exceed 64 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3704: Fig.Option = {
  name: "--display-name",
  description:
    "An arbitrary user-provided name for the application resource.\nCannot exceed 64 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
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
const flag5390: Fig.Option = {
  name: "--group-info-output-type",
  description:
    "The output type of the delegated group information. _GROUP_INFO_OUTPUT_TYPE_ must be one of:\n+\n*json*::: JSON output type.\n*none*::: Explicitly disable header output.\n*protobuf*::: Protobuf output type.\n:::\n+",
  args: {
    name: "GROUP_INFO_OUTPUT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["json", "none", "protobuf"],
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
const flag6988: Fig.Option = {
  name: "--location",
  description:
    "The location id of the securityGateway resource. We support only global location.\n+\nTo set the `location` attribute:\n* provide the argument `security_gateway` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7001: Fig.Option = {
  name: "--location",
  description:
    "The location id. We support only global location.\n+\nTo set the `location` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7002: Fig.Option = {
  name: "--location",
  description:
    "The location id. We support only global location.\n+\nTo set the `location` attribute:\n* provide the argument `security_gateway` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7225: Fig.Option = {
  name: "--location",
  description:
    "The location id of the application resource. We support only global location.\n+\nTo set the `location` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
const flag11810: Fig.Option = {
  name: "--proxy-protocol-config-gateway-identity",
  description:
    "The security gateway identity configuration. _PROXY_PROTOCOL_CONFIG_GATEWAY_IDENTITY_ must be (only one value is supported):\n+\n*resource-name*::: Resource name for gateway identity, in the format:\nprojects/{project_id}/locations/{location_id}/securityGateways/{security_gateway_id}\n:::\n+",
  args: {
    name: "PROXY_PROTOCOL_CONFIG_GATEWAY_IDENTITY",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["resource-name"],
  },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12841: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and\nthe request timed out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12842: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and\nthe request times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12997: Fig.Option = {
  name: "--resource-override-path",
  description: "Contains the URI path fragment where HTTP request is sent",
  args: {
    name: "RESOURCE_OVERRIDE_PATH",
    description: "String",
    suggestions: [],
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
const flag13333: Fig.Option = {
  name: "--schema",
  description:
    "Type of the external application. _SCHEMA_ must be one of:\n+\n*api-gateway*::: Service Discovery API endpoint when Service Discovery is enabled in\nGateway.\n*proxy-gateway*::: Proxy which routes traffic to actual applications, like Netscaler\nGateway.\n:::\n+",
  args: {
    name: "SCHEMA",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["api-gateway", "proxy-gateway"],
  },
};
const flag13426: Fig.Option = {
  name: "--security-gateway",
  description:
    "The security gateway ID.\n+\nTo set the `security-gateway` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--security-gateway` on the command line",
  args: { name: "SECURITY_GATEWAY", description: "String", suggestions: [] },
};
const flag13427: Fig.Option = {
  name: "--security-gateway",
  description:
    "The securityGateway id of the application resource.\n+\nTo set the `security-gateway` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--security-gateway` on the command line",
  args: { name: "SECURITY_GATEWAY", description: "String", suggestions: [] },
};
const flag13571: Fig.Option = {
  name: "--service-discovery",
  description:
    'Settings related to the Service Discovery.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--service-discovery=apiGateway={resourceOverride={path=string}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--service-discovery=\'{"apiGateway": {"resourceOverride": {"path": "string"}}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--service-discovery=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "SERVICE_DISCOVERY",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
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
const flag15310: Fig.Option = {
  name: "--user-info-output-type",
  description:
    "The delegated user's information. _USER_INFO_OUTPUT_TYPE_ must be one of:\n+\n*json*::: JSON output type.\n*none*::: Explicitly disable header output.\n*protobuf*::: Protobuf output type.\n:::\n+",
  args: {
    name: "USER_INFO_OUTPUT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["json", "none", "protobuf"],
  },
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15373: Fig.Option = {
  name: "--validate-only",
  description:
    "If set, validates request by executing a dry-run which would not\nalter the resource in any way",
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
  name: "beyondcorp",
  description: "Manage Beyondcorp resources",
  subcommands: [
    {
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
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
            {
              name: "--location",
              description:
                "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
      ],
    },
    {
      name: "security-gateways",
      description: "Manage Security Gateway resources",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a security gateway",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7002,
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
            name: "SECURITY_GATEWAY",
            description:
              "ID of the security_gateway or fully qualified identifier for the security_gateway.\n+\nTo set the `security-gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
        {
          name: "applications",
          description: "Manage Application resources",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to a security gateway application",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2225,
                flag2218,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7001,
                flag7356,
                flag7749,
                flag11637,
                flag11946,
                flag13132,
                flag13426,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
            {
              name: "create",
              description: "Create applications",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3704,
                {
                  name: "--endpoint-matchers",
                  description:
                    'An array of conditions to match the application\'s network endpoint.\nEach element in the array is an EndpointMatcher object, which defines a\nspecific combination of a hostname pattern and one or more ports. The\napplication is considered matched if at least one of the EndpointMatcher\nconditions in this array is met (the conditions are combined using OR\nlogic). Each EndpointMatcher must contain a hostname pattern, such as\n"example.com", and one or more port numbers specified as a string, such as\n"443".\n+\nHostname and port number examples:\n"*.example.com", "443"\n"example.com" and "22"\n"example.com" and "22,33".\n+\n*hostname*:::\nHostname of the application.\n+\n*ports*:::\nThe ports of the application.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--endpoint-matchers=hostname=string,ports=[int] --endpoint-matchers=hostname=string,ports=[int]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--endpoint-matchers=\'[{"hostname": "string", "ports": [int]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--endpoint-matchers=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ENDPOINT_MATCHERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7225,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--request-id",
                  description:
                    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nrequest if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request",
                  args: {
                    name: "REQUEST_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13333,
                flag13427,
                flag14975,
                {
                  name: "--upstreams",
                  description:
                    'Which upstream resources to forward traffic to.\n+\n*egressPolicy*:::\nRouting policy information.\n+\n*regions*::::\nList of the regions where the application sends traffic.\n+\n*external*:::\nList of the external endpoints to forward traffic to.\n+\n*endpoints*::::\nList of the endpoints to forward traffic to.\n+\n*hostname*:::::\nHostname of the endpoint.\n+\n*port*:::::\nPort of the endpoint.\n+\n*network*:::\nNetwork to forward traffic to.\n+\n*name*::::\nNetwork name is of the format:\n`projects/{project}/global/networks/{network}.\n+\n*proxyProtocol*:::\nEnables proxy protocol configuration for the upstream.\n+\n*allowedClientHeaders*::::\nList of the allowed client header names.\n+\n*clientIp*::::\nClient IP configuration. The client IP address is included if true.\n+\n*contextualHeaders*::::\nConfiguration for the contextual headers.\n+\n*deviceInfo*:::::\nThe device information configuration.\n+\n*outputType*::::::\nThe output type details for the delegated device.\n+\n*groupInfo*:::::\nGroup details.\n+\n*outputType*::::::\nThe output type of the delegated group information.\n+\n*outputType*:::::\nDefault output type for all enabled headers.\n+\n*userInfo*:::::\nUser details.\n+\n*outputType*::::::\nThe delegated user\'s information.\n+\n*gatewayIdentity*::::\nThe security gateway identity configuration.\n+\n*metadataHeaders*::::\nCustom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::::\nSets `KEY` value.\n+\n*VALUE*:::::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}} --upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--upstreams=\'[{"egressPolicy": {"regions": ["string"]}, "external": {"endpoints": [{"hostname": "string", "port": int}]}, "network": {"name": "string"}, "proxyProtocol": {"allowedClientHeaders": ["string"], "clientIp": boolean, "contextualHeaders": {"deviceInfo": {"outputType": "string"}, "groupInfo": {"outputType": "string"}, "outputType": "string", "userInfo": {"outputType": "string"}}, "gatewayIdentity": "string", "metadataHeaders": {"string": "string"}}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--upstreams=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "UPSTREAMS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete applications",
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
                flag7225,
                flag7356,
                flag11637,
                flag11946,
                flag12842,
                flag13427,
                flag14975,
                flag15315,
                flag15373,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe applications",
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
                flag7225,
                flag7356,
                flag11637,
                flag11946,
                flag13427,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a security gateway application",
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
                flag7225,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13427,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
            {
              name: "list",
              description: "List applications",
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
                    "The location id of the securityGateway resource. We support only global location.\n+\nTo set the `location` attribute:\n* provide the argument `--security-gateway` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                {
                  name: "--security-gateway",
                  description:
                    "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security-gateway` attribute:\n* provide the argument `--security-gateway` on the command line",
                  args: {
                    name: "SECURITY_GATEWAY",
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
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from a security gateway application",
              options: [
                flag42,
                flag46,
                flag407,
                flag1201,
                flag2228,
                flag2218,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7001,
                flag7356,
                flag7753,
                flag11637,
                flag11946,
                flag13133,
                flag13426,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a security gateway application",
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
                flag7225,
                flag7356,
                flag11637,
                flag11946,
                flag13427,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "APPLICATION",
                  description:
                    "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
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
              description: "Update applications",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-endpoint-matchers",
                  description:
                    'Add new value to endpoint_matchers list. An array of conditions to match the application\'s network endpoint.\nEach element in the array is an EndpointMatcher object, which defines a\nspecific combination of a hostname pattern and one or more ports. The\napplication is considered matched if at least one of the EndpointMatcher\nconditions in this array is met (the conditions are combined using OR\nlogic). Each EndpointMatcher must contain a hostname pattern, such as\n"example.com", and one or more port numbers specified as a string, such as\n"443".\n+\nHostname and port number examples:\n"*.example.com", "443"\n"example.com" and "22"\n"example.com" and "22,33".\n+\n*hostname*:::\nHostname of the application.\n+\n*ports*:::\nThe ports of the application.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-endpoint-matchers=hostname=string,ports=[int] --add-endpoint-matchers=hostname=string,ports=[int]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-endpoint-matchers=\'[{"hostname": "string", "ports": [int]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-endpoint-matchers=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_ENDPOINT_MATCHERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-upstreams",
                  description:
                    'Add new value to upstreams list. Which upstream resources to forward traffic to.\n+\n*egressPolicy*:::\nRouting policy information.\n+\n*regions*::::\nList of the regions where the application sends traffic.\n+\n*external*:::\nList of the external endpoints to forward traffic to.\n+\n*endpoints*::::\nList of the endpoints to forward traffic to.\n+\n*hostname*:::::\nHostname of the endpoint.\n+\n*port*:::::\nPort of the endpoint.\n+\n*network*:::\nNetwork to forward traffic to.\n+\n*name*::::\nNetwork name is of the format:\n`projects/{project}/global/networks/{network}.\n+\n*proxyProtocol*:::\nEnables proxy protocol configuration for the upstream.\n+\n*allowedClientHeaders*::::\nList of the allowed client header names.\n+\n*clientIp*::::\nClient IP configuration. The client IP address is included if true.\n+\n*contextualHeaders*::::\nConfiguration for the contextual headers.\n+\n*deviceInfo*:::::\nThe device information configuration.\n+\n*outputType*::::::\nThe output type details for the delegated device.\n+\n*groupInfo*:::::\nGroup details.\n+\n*outputType*::::::\nThe output type of the delegated group information.\n+\n*outputType*:::::\nDefault output type for all enabled headers.\n+\n*userInfo*:::::\nUser details.\n+\n*outputType*::::::\nThe delegated user\'s information.\n+\n*gatewayIdentity*::::\nThe security gateway identity configuration.\n+\n*metadataHeaders*::::\nCustom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::::\nSets `KEY` value.\n+\n*VALUE*:::::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}} --add-upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-upstreams=\'[{"egressPolicy": {"regions": ["string"]}, "external": {"endpoints": [{"hostname": "string", "port": int}]}, "network": {"name": "string"}, "proxyProtocol": {"allowedClientHeaders": ["string"], "clientIp": boolean, "contextualHeaders": {"deviceInfo": {"outputType": "string"}, "groupInfo": {"outputType": "string"}, "outputType": "string", "userInfo": {"outputType": "string"}}, "gatewayIdentity": "string", "metadataHeaders": {"string": "string"}}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-upstreams=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_UPSTREAMS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                {
                  name: "--clear-endpoint-matchers",
                  description:
                    "Clear endpoint_matchers value and set to empty list",
                },
                {
                  name: "--clear-upstreams",
                  description: "Clear upstreams value and set to empty list",
                },
                flag2292,
                flag3704,
                {
                  name: "--endpoint-matchers",
                  description:
                    'Set endpoint_matchers to new value. An array of conditions to match the application\'s network endpoint.\nEach element in the array is an EndpointMatcher object, which defines a\nspecific combination of a hostname pattern and one or more ports. The\napplication is considered matched if at least one of the EndpointMatcher\nconditions in this array is met (the conditions are combined using OR\nlogic). Each EndpointMatcher must contain a hostname pattern, such as\n"example.com", and one or more port numbers specified as a string, such as\n"443".\n+\nHostname and port number examples:\n"*.example.com", "443"\n"example.com" and "22"\n"example.com" and "22,33".\n+\n*hostname*:::\nHostname of the application.\n+\n*ports*:::\nThe ports of the application.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--endpoint-matchers=hostname=string,ports=[int] --endpoint-matchers=hostname=string,ports=[int]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--endpoint-matchers=\'[{"hostname": "string", "ports": [int]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--endpoint-matchers=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ENDPOINT_MATCHERS",
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
                flag7225,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--remove-endpoint-matchers",
                  description:
                    'Remove existing value from endpoint_matchers list. An array of conditions to match the application\'s network endpoint.\nEach element in the array is an EndpointMatcher object, which defines a\nspecific combination of a hostname pattern and one or more ports. The\napplication is considered matched if at least one of the EndpointMatcher\nconditions in this array is met (the conditions are combined using OR\nlogic). Each EndpointMatcher must contain a hostname pattern, such as\n"example.com", and one or more port numbers specified as a string, such as\n"443".\n+\nHostname and port number examples:\n"*.example.com", "443"\n"example.com" and "22"\n"example.com" and "22,33".\n+\n*hostname*:::\nHostname of the application.\n+\n*ports*:::\nThe ports of the application.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-endpoint-matchers=hostname=string,ports=[int] --remove-endpoint-matchers=hostname=string,ports=[int]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-endpoint-matchers=\'[{"hostname": "string", "ports": [int]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-endpoint-matchers=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ENDPOINT_MATCHERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-upstreams",
                  description:
                    'Remove existing value from upstreams list. Which upstream resources to forward traffic to.\n+\n*egressPolicy*:::\nRouting policy information.\n+\n*regions*::::\nList of the regions where the application sends traffic.\n+\n*external*:::\nList of the external endpoints to forward traffic to.\n+\n*endpoints*::::\nList of the endpoints to forward traffic to.\n+\n*hostname*:::::\nHostname of the endpoint.\n+\n*port*:::::\nPort of the endpoint.\n+\n*network*:::\nNetwork to forward traffic to.\n+\n*name*::::\nNetwork name is of the format:\n`projects/{project}/global/networks/{network}.\n+\n*proxyProtocol*:::\nEnables proxy protocol configuration for the upstream.\n+\n*allowedClientHeaders*::::\nList of the allowed client header names.\n+\n*clientIp*::::\nClient IP configuration. The client IP address is included if true.\n+\n*contextualHeaders*::::\nConfiguration for the contextual headers.\n+\n*deviceInfo*:::::\nThe device information configuration.\n+\n*outputType*::::::\nThe output type details for the delegated device.\n+\n*groupInfo*:::::\nGroup details.\n+\n*outputType*::::::\nThe output type of the delegated group information.\n+\n*outputType*:::::\nDefault output type for all enabled headers.\n+\n*userInfo*:::::\nUser details.\n+\n*outputType*::::::\nThe delegated user\'s information.\n+\n*gatewayIdentity*::::\nThe security gateway identity configuration.\n+\n*metadataHeaders*::::\nCustom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::::\nSets `KEY` value.\n+\n*VALUE*:::::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}} --remove-upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-upstreams=\'[{"egressPolicy": {"regions": ["string"]}, "external": {"endpoints": [{"hostname": "string", "port": int}]}, "network": {"name": "string"}, "proxyProtocol": {"allowedClientHeaders": ["string"], "clientIp": boolean, "contextualHeaders": {"deviceInfo": {"outputType": "string"}, "groupInfo": {"outputType": "string"}, "outputType": "string", "userInfo": {"outputType": "string"}}, "gatewayIdentity": "string", "metadataHeaders": {"string": "string"}}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-upstreams=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_UPSTREAMS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag12841,
                flag13333,
                flag13427,
                flag14975,
                {
                  name: "--upstreams",
                  description:
                    'Set upstreams to new value. Which upstream resources to forward traffic to.\n+\n*egressPolicy*:::\nRouting policy information.\n+\n*regions*::::\nList of the regions where the application sends traffic.\n+\n*external*:::\nList of the external endpoints to forward traffic to.\n+\n*endpoints*::::\nList of the endpoints to forward traffic to.\n+\n*hostname*:::::\nHostname of the endpoint.\n+\n*port*:::::\nPort of the endpoint.\n+\n*network*:::\nNetwork to forward traffic to.\n+\n*name*::::\nNetwork name is of the format:\n`projects/{project}/global/networks/{network}.\n+\n*proxyProtocol*:::\nEnables proxy protocol configuration for the upstream.\n+\n*allowedClientHeaders*::::\nList of the allowed client header names.\n+\n*clientIp*::::\nClient IP configuration. The client IP address is included if true.\n+\n*contextualHeaders*::::\nConfiguration for the contextual headers.\n+\n*deviceInfo*:::::\nThe device information configuration.\n+\n*outputType*::::::\nThe output type details for the delegated device.\n+\n*groupInfo*:::::\nGroup details.\n+\n*outputType*::::::\nThe output type of the delegated group information.\n+\n*outputType*:::::\nDefault output type for all enabled headers.\n+\n*userInfo*:::::\nUser details.\n+\n*outputType*::::::\nThe delegated user\'s information.\n+\n*gatewayIdentity*::::\nThe security gateway identity configuration.\n+\n*metadataHeaders*::::\nCustom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::::\nSets `KEY` value.\n+\n*VALUE*:::::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}} --upstreams=egressPolicy={regions=[string]},external={endpoints=[{hostname=string,port=int}]},network={name=string},proxyProtocol={allowedClientHeaders=[string],clientIp=boolean,contextualHeaders={deviceInfo={outputType=string},groupInfo={outputType=string},outputType=string,userInfo={outputType=string}},gatewayIdentity=string,metadataHeaders={string=string}}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--upstreams=\'[{"egressPolicy": {"regions": ["string"]}, "external": {"endpoints": [{"hostname": "string", "port": int}]}, "network": {"name": "string"}, "proxyProtocol": {"allowedClientHeaders": ["string"], "clientIp": boolean, "contextualHeaders": {"deviceInfo": {"outputType": "string"}, "groupInfo": {"outputType": "string"}, "outputType": "string", "userInfo": {"outputType": "string"}}, "gatewayIdentity": "string", "metadataHeaders": {"string": "string"}}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--upstreams=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "UPSTREAMS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create securityGateways",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2447,
            flag3510,
            flag3703,
            flag4900,
            flag4902,
            flag5091,
            flag5390,
            flag5453,
            {
              name: "--hubs",
              description:
                "Map of Hubs that represents regional data path deployment with Google Cloud Platform region\nas a key.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--hubs=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--hubs='{\"string\": {}}'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--hubs=path_to_file.(yaml|json)\n+\n```",
              args: {
                name: "HUBS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag5699,
            flag6988,
            flag7356,
            flag11637,
            {
              name: "--proxy-protocol-config-allowed-client-headers",
              description: "List of the allowed client header names",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--proxy-protocol-config-client-ip",
              description:
                "Client IP configuration. The client IP address is included if true",
            },
            flag11810,
            {
              name: "--proxy-protocol-config-metadata-headers",
              description:
                'Custom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--proxy-protocol-config-metadata-headers=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--proxy-protocol-config-metadata-headers=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--proxy-protocol-config-metadata-headers=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore the\nrequest if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request",
              args: {
                name: "REQUEST_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag12997,
            flag13571,
            flag14975,
            flag15310,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security_gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete securityGateways",
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
            flag6988,
            flag7356,
            flag11637,
            flag11946,
            flag12842,
            flag14975,
            flag15315,
            flag15373,
            flag15424,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security_gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe securityGateways",
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
            flag6988,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security_gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a security gateway",
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
            flag6988,
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
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security_gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
        {
          name: "list",
          description: "List securityGateways",
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
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a security gateway",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7002,
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
            name: "SECURITY_GATEWAY",
            description:
              "ID of the security_gateway or fully qualified identifier for the security_gateway.\n+\nTo set the `security-gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a security gateway",
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
            flag6988,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SECURITY_GATEWAY",
              description:
                "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security_gateway` attribute:\n* provide the argument `security_gateway` on the command line",
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
          description: "Update securityGateways",
          options: [
            flag42,
            flag46,
            {
              name: "--add-proxy-protocol-config-allowed-client-headers",
              description:
                "Add new value to proxy_protocol_config_allowed_client_headers list",
              args: {
                name: "ADD_PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--clear-hubs",
              description: "Clear hubs value and set to empty map",
            },
            {
              name: "--clear-proxy-protocol-config",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.proxyProtocolConfig back to default value",
            },
            {
              name: "--clear-proxy-protocol-config-allowed-client-headers",
              description:
                "Clear proxy_protocol_config_allowed_client_headers value and set to empty list",
            },
            {
              name: "--clear-proxy-protocol-config-metadata-headers",
              description:
                "Clear proxy_protocol_config_metadata_headers value and set to empty map",
            },
            {
              name: "--clear-service-discovery",
              description:
                "Set googleCloudBeyondcorpSecuritygatewaysV1SecurityGateway.serviceDiscovery back to default value",
            },
            flag2292,
            flag2447,
            flag3510,
            flag3703,
            flag4900,
            flag4902,
            flag5091,
            flag5390,
            flag5453,
            {
              name: "--hubs",
              description:
                "Set hubs to new value. Map of Hubs that represents regional data path deployment with Google Cloud Platform region\nas a key.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--hubs=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--hubs='{\"string\": {}}'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--hubs=path_to_file.(yaml|json)\n+\n```",
              args: {
                name: "HUBS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag5699,
            flag6988,
            flag7356,
            flag11637,
            {
              name: "--proxy-protocol-config-allowed-client-headers",
              description:
                "Set proxy_protocol_config_allowed_client_headers to new value",
              args: {
                name: "PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--proxy-protocol-config-client-ip",
              description:
                "Client IP configuration. The client IP address is included if true. Use *--proxy-protocol-config-client-ip* to enable and *--no-proxy-protocol-config-client-ip* to disable",
            },
            flag11810,
            {
              name: "--proxy-protocol-config-metadata-headers",
              description:
                'Set proxy_protocol_config_metadata_headers to new value. Custom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--proxy-protocol-config-metadata-headers=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--proxy-protocol-config-metadata-headers=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--proxy-protocol-config-metadata-headers=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-hubs",
              description:
                'Remove existing value from map hubs. Sets `remove_hubs` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-hubs=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-hubs=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-hubs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_HUBS",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-proxy-protocol-config-allowed-client-headers",
              description:
                "Remove existing value from proxy_protocol_config_allowed_client_headers list",
              args: {
                name: "REMOVE_PROXY_PROTOCOL_CONFIG_ALLOWED_CLIENT_HEADERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-proxy-protocol-config-metadata-headers",
              description:
                'Remove existing value from map proxy_protocol_config_metadata_headers. Sets `remove_proxy_protocol_config_metadata_headers` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-proxy-protocol-config-metadata-headers=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-proxy-protocol-config-metadata-headers=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-proxy-protocol-config-metadata-headers=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag12841,
            flag12997,
            flag13571,
            flag14975,
            {
              name: "--update-hubs",
              description:
                "Update hubs value or add key value pair. Map of Hubs that represents regional data path deployment with Google Cloud Platform region\nas a key.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-hubs=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-hubs='{\"string\": {}}'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-hubs=path_to_file.(yaml|json)\n+\n```",
              args: {
                name: "UPDATE_HUBS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--update-proxy-protocol-config-metadata-headers",
              description:
                'Update proxy_protocol_config_metadata_headers value or add key value pair. Custom resource specific headers along with the values.\nThe names should conform to RFC 9110:\n>Field names can contain alphanumeric characters, hyphens, and periods, can\ncontain only ASCII-printable characters and tabs, and must start with a\nletter.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-proxy-protocol-config-metadata-headers=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-proxy-protocol-config-metadata-headers=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-proxy-protocol-config-metadata-headers=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_PROXY_PROTOCOL_CONFIG_METADATA_HEADERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15310,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SECURITY_GATEWAY",
            description:
              "ID of the securityGateway or fully qualified identifier for the securityGateway.\n+\nTo set the `security_gateway` attribute:\n* provide the argument `security_gateway` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
