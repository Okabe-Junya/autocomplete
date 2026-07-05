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
const flag364: Fig.Option = {
  name: "--agent-spec-content",
  description:
    "The content of the Agent spec in the JSON format.\nThis payload is validated against the schema for the specified type.\nThe content size is limited to `10KB`",
  args: {
    name: "AGENT_SPEC_CONTENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
    suggestions: [],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag781: Fig.Option = {
  name: "--auth-provider-binding-continue-uri",
  description:
    "The continue URI of the AuthProvider.\nThe URI is used to reauthenticate the user and finalize the managed OAuth\nflow",
  args: {
    name: "AUTH_PROVIDER_BINDING_CONTINUE_URI",
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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3344: Fig.Option = {
  name: "--description",
  description:
    "User-defined description of a Binding.\nCan have a maximum length of `2048` characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3345: Fig.Option = {
  name: "--description",
  description:
    "User-defined description of an Service.\nCan have a maximum length of `2048` characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3834: Fig.Option = {
  name: "--display-name",
  description:
    "User-defined display name for the Binding.\nCan have a maximum length of `63` characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3835: Fig.Option = {
  name: "--display-name",
  description:
    "User-defined display name for the Service.\nCan have a maximum length of `63` characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4404: Fig.Option = {
  name: "--endpoint-spec-content",
  description: "The content of the endpoint spec.\nReserved for future use",
  args: {
    name: "ENDPOINT_SPEC_CONTENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
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
const flag7231: Fig.Option = {
  name: "--location",
  description:
    "The location id of the binding resource.\n+\nTo set the `location` attribute:\n* provide the argument `binding` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7266: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7274: Fig.Option = {
  name: "--location",
  description:
    "The location id of the service resource.\n+\nTo set the `location` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7719: Fig.Option = {
  name: "--mcp-server-spec-content",
  description:
    "The content of the MCP Server spec.\nThis payload is validated against the schema for the specified type.\nThe content size is limited to `10KB`",
  args: {
    name: "MCP_SERVER_SPEC_CONTENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_ArgJSONType",
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
const flag12844: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
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
const flag14020: Fig.Option = {
  name: "--source-identifier",
  description:
    "The identifier of the source Agent.\nFormat:\n+\n* `urn:agent:{publisher}:{namespace}:{name}`",
  args: { name: "SOURCE_IDENTIFIER", description: "String", suggestions: [] },
};
const flag14690: Fig.Option = {
  name: "--target-identifier",
  description:
    "The identifier of the target Agent, MCP Server, or Endpoint.\nFormat:\n+\n* `urn:agent:{publisher}:{namespace}:{name}`\n* `urn:mcp:{publisher}:{namespace}:{name}`\n* `urn:endpoint:{publisher}:{namespace}:{name}`",
  args: { name: "TARGET_IDENTIFIER", description: "String", suggestions: [] },
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
  name: "agent-registry",
  description: "Manage Agent Registry resources",
  subcommands: [
    {
      name: "agents",
      description: "Manage Agent resources",
      subcommands: [
        {
          name: "describe",
          description: "Get details of an agent",
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
                "The location id of the agent resource.\n+\nTo set the `location` attribute:\n* provide the argument `agent` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "AGENT",
            description:
              "ID of the agent or fully qualified identifier for the agent.\n+\nTo set the `agent` attribute:\n* provide the argument `agent` on the command line",
          },
        },
        {
          name: "list",
          description: "List accessible agents",
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
          name: "search",
          description: "Search for agents matching a query",
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
            {
              name: "--page-size",
              description:
                "The maximum number of agents to return. The service may return fewer\nthan this value. If unspecified, at most 20 agents will be returned.\nThe maximum value is 100; values above 100 will be coerced to 100",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--page-token",
              description:
                "A page token, received from a previous `SearchAgents` call",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--search-string",
              description:
                'Search criteria used to select the Agents to return. If no search criteria\nis specified then all accessible Agents will be returned.\n+\nSearch expressions can be used to restrict results based upon searchable\nfields, where the operators can be used along with the suffix wildcard\nsymbol `*`. See\n[instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools)\nfor more details.\n+\nAllowed operators: `=`, `:`, `NOT`, `AND`, `OR`, and `()`.\n+\nExamples:\n+\n* `agentId="urn:agent:projects-123:projects:123:locations:us-central1:reasoningEngines:1234"`\n  to find the agent with the specified agent ID.\n* `name:important` to find agents whose name contains `important` as a\n  word.\n* `displayName:works*` to find agents whose display name contains words\n  that start with `works`.\n* `skills.tags:test` to find agents whose skills tags contain `test`.\n* `planner OR booking` to find agents whose metadata contains the words\n  `planner` or `booking`',
              args: {
                name: "SEARCH_STRING",
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
      name: "bindings",
      description: "Manage Binding resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new binding",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--auth-provider-binding",
              description:
                "The resource name of the target AuthProvider.\nFormat:\n+\n* `projects/{project}/locations/{location}/authProviders/{auth_provider}`",
              args: {
                name: "AUTH_PROVIDER_BINDING",
                description: "String",
                suggestions: [],
              },
            },
            flag781,
            {
              name: "--auth-provider-binding-scopes",
              description: "The list of OAuth2 scopes of the AuthProvider",
              args: {
                name: "AUTH_PROVIDER_BINDING_SCOPES",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag3344,
            flag3834,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7231,
            flag7356,
            flag11637,
            flag11946,
            flag12847,
            flag14020,
            flag14690,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BINDING",
            description:
              "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `binding` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a binding connection",
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
            flag7231,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BINDING",
            description:
              "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `binding` on the command line",
          },
        },
        {
          name: "describe",
          description: "Retrieve binding details",
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
            flag7231,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BINDING",
            description:
              "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `binding` on the command line",
          },
        },
        {
          name: "fetch-available",
          description: "fetch bindings",
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
            flag14020,
            flag14690,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List bindings",
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
          description: "Modify binding parameters",
          options: [
            flag42,
            flag46,
            {
              name: "--add-auth-provider-binding-scopes",
              description: "Add new value to auth_provider_binding_scopes list",
              args: {
                name: "ADD_AUTH_PROVIDER_BINDING_SCOPES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            {
              name: "--auth-provider-binding",
              description:
                "The resource name of the target AuthProvider.\nFormat:\n+\n* `projects/{project}/locations/{location}/authProviders/{auth_provider}`",
              args: {
                name: "AUTH_PROVIDER_BINDING",
                description: "String",
                suggestions: [],
              },
            },
            flag781,
            {
              name: "--auth-provider-binding-scopes",
              description: "Set auth_provider_binding_scopes to new value",
              args: {
                name: "AUTH_PROVIDER_BINDING_SCOPES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-auth-provider-binding",
              description:
                "Set binding.authProviderBinding back to default value",
            },
            {
              name: "--clear-auth-provider-binding-scopes",
              description:
                "Clear auth_provider_binding_scopes value and set to empty list",
            },
            {
              name: "--clear-source",
              description: "Set binding.source back to default value",
            },
            {
              name: "--clear-target",
              description: "Set binding.target back to default value",
            },
            flag2292,
            flag3344,
            flag3834,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7231,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-auth-provider-binding-scopes",
              description:
                "Remove existing value from auth_provider_binding_scopes list",
              args: {
                name: "REMOVE_AUTH_PROVIDER_BINDING_SCOPES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12847,
            flag14020,
            flag14690,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BINDING",
            description:
              "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `binding` on the command line",
          },
        },
      ],
    },
    {
      name: "endpoints",
      description: "Manage Endpoint resources",
      subcommands: [
        {
          name: "describe",
          description: "Retrieve endpoint details",
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
                "The location id of the endpoint resource.\n+\nTo set the `location` attribute:\n* provide the argument `endpoint` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `endpoint` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "list",
          description: "Enumerate service endpoints",
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
      name: "mcp-servers",
      description: "Manage Mcp Server resources",
      subcommands: [
        {
          name: "describe",
          description: "Get details of an MCP server",
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
                "The location id of the mcpServer resource.\n+\nTo set the `location` attribute:\n* provide the argument `mcp_server` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "MCP_SERVER",
            description:
              "ID of the mcpServer or fully qualified identifier for the mcpServer.\n+\nTo set the `mcp_server` attribute:\n* provide the argument `mcp_server` on the command line",
          },
        },
        {
          name: "list",
          description: "List registered MCP servers",
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
          name: "search",
          description: "Search MCP servers matching criteria",
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
            {
              name: "--page-size",
              description:
                "The maximum number of MCP servers to return. The service may return fewer\nthan this value. If unspecified, at most 20 servers will be returned.\nThe maximum value is 100; values above 100 will be coerced to 100",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--page-token",
              description:
                "A page token, received from a previous `SearchMcpServers` call",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--search-string",
              description:
                'Search criteria used to select the MCP Servers to return. If no search\ncriteria is specified then all accessible MCP Servers will be returned.\n+\nSearch expressions can be used to restrict results based upon searchable\nfields, where the operators can be used along with the suffix wildcard\nsymbol `*`. See\n[instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools)\nfor more details.\n+\nAllowed operators: `=`, `:`, `NOT`, `AND`, `OR`, and `()`.\n+\nExamples:\n+\n* `mcpServerId="urn:mcp:projects-123:projects:123:locations:us-central1:agentregistry:services:service-id"`\n  to find the MCP Server with the specified MCP Server ID.\n* `name:important` to find MCP Servers whose name contains `important` as a\n  word.\n* `displayName:works*` to find MCP Servers whose display name contains\n  words that start with `works`.\n* `planner OR booking` to find MCP Servers whose metadata contains the\n  words `planner` or `booking`.\n* `mcpServerId:service-id AND (displayName:planner OR\n  displayName:booking)` to find MCP Servers whose MCP Server ID contains\n  `service-id` and whose display name contains `planner` or\n  `booking`',
              args: {
                name: "SEARCH_STRING",
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
      name: "services",
      description: "Manage Service resources",
      subcommands: [
        {
          name: "create",
          description: "Register a new service",
          options: [
            flag42,
            flag46,
            flag364,
            {
              name: "--agent-spec-type",
              description:
                "The type of the agent spec content. _AGENT_SPEC_TYPE_ must be one of:\n+\n*a2a-agent-card*::: The content is an A2A Agent Card following the A2A specification.\nThe `interfaces` field must be empty.\n*no-spec*::: There is no spec for the Agent. The `content` field must be empty.\n:::\n+",
              args: {
                name: "AGENT_SPEC_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["a2a-agent-card", "no-spec"],
              },
            },
            flag720,
            flag1201,
            flag2292,
            flag3345,
            flag3835,
            flag4404,
            {
              name: "--endpoint-spec-type",
              description:
                "The type of the endpoint spec content. _ENDPOINT_SPEC_TYPE_ must be (only one value is supported):\n+\n*no-spec*::: There is no spec for the Endpoint. The `content` field must be empty.\n:::\n+",
              args: {
                name: "ENDPOINT_SPEC_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["no-spec", "openapi-spec"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--interfaces",
              description:
                'The connection details for the Service.\n+\n*protocolBinding*:::\nThe protocol binding of the interface.\n+\n*url*:::\nThe destination URL.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--interfaces=protocolBinding=string,url=string --interfaces=protocolBinding=string,url=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--interfaces=\'[{"protocolBinding": "string", "url": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--interfaces=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "INTERFACES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag7274,
            flag7356,
            flag7719,
            {
              name: "--mcp-server-spec-type",
              description:
                "The type of the MCP Server spec content. _MCP_SERVER_SPEC_TYPE_ must be one of:\n+\n*no-spec*::: There is no spec for the MCP Server. The `content` field must be empty.\n*tool-spec*::: The content is a MCP Tool Spec following the One MCP specification.\nThe payload is the same as the `tools/list` response.\n:::\n+",
              args: {
                name: "MCP_SERVER_SPEC_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["no-spec", "tool-spec"],
              },
            },
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "delete",
          description: "Remove a registered service",
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
            flag7274,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a registered service",
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
            flag7274,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "list",
          description: "List registered services",
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
          description: "Modify service parameters",
          options: [
            flag42,
            flag46,
            {
              name: "--add-interfaces",
              description:
                'Add new value to interfaces list. The connection details for the Service.\n+\n*protocolBinding*:::\nThe protocol binding of the interface.\n+\n*url*:::\nThe destination URL.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-interfaces=protocolBinding=string,url=string --add-interfaces=protocolBinding=string,url=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-interfaces=\'[{"protocolBinding": "string", "url": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-interfaces=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_INTERFACES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag364,
            {
              name: "--agent-spec-type",
              description:
                "The type of the agent spec content. _AGENT_SPEC_TYPE_ must be one of:\n+\n*a2a-agent-card*::: The content is an A2A Agent Card following the A2A specification.\nThe `interfaces` field must be empty.\n*no-spec*::: There is no spec for the Agent. The `content` field must be empty.\n:::\n+",
              args: {
                name: "AGENT_SPEC_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["a2a-agent-card", "no-spec"],
              },
            },
            flag720,
            flag1201,
            {
              name: "--clear-agent-spec",
              description: "Set service.agentSpec back to default value",
            },
            {
              name: "--clear-endpoint-spec",
              description: "Set service.endpointSpec back to default value",
            },
            {
              name: "--clear-interfaces",
              description: "Clear interfaces value and set to empty list",
            },
            {
              name: "--clear-mcp-server-spec",
              description: "Set service.mcpServerSpec back to default value",
            },
            flag2292,
            flag3345,
            flag3835,
            flag4404,
            {
              name: "--endpoint-spec-type",
              description:
                "The type of the endpoint spec content. _ENDPOINT_SPEC_TYPE_ must be (only one value is supported):\n+\n*no-spec*::: There is no spec for the Endpoint. The `content` field must be empty.\n:::\n+",
              args: {
                name: "ENDPOINT_SPEC_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["no-spec", "openapi-spec"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--interfaces",
              description:
                'Set interfaces to new value. The connection details for the Service.\n+\n*protocolBinding*:::\nThe protocol binding of the interface.\n+\n*url*:::\nThe destination URL.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--interfaces=protocolBinding=string,url=string --interfaces=protocolBinding=string,url=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--interfaces=\'[{"protocolBinding": "string", "url": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--interfaces=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "INTERFACES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag7274,
            flag7356,
            flag7719,
            {
              name: "--mcp-server-spec-type",
              description:
                "The type of the MCP Server spec content. _MCP_SERVER_SPEC_TYPE_ must be one of:\n+\n*no-spec*::: There is no spec for the MCP Server. The `content` field must be empty.\n*tool-spec*::: The content is a MCP Tool Spec following the One MCP specification.\nThe payload is the same as the `tools/list` response.\n:::\n+",
              args: {
                name: "MCP_SERVER_SPEC_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["no-spec", "tool-spec"],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--remove-interfaces",
              description:
                'Remove existing value from interfaces list. The connection details for the Service.\n+\n*protocolBinding*:::\nThe protocol binding of the interface.\n+\n*url*:::\nThe destination URL.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-interfaces=protocolBinding=string,url=string --remove-interfaces=protocolBinding=string,url=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-interfaces=\'[{"protocolBinding": "string", "url": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-interfaces=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_INTERFACES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
