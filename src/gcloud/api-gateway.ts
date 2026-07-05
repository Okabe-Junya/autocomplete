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
const flag545: Fig.Option = {
  name: "--api-config",
  description:
    "ID of the api-config or fully qualified identifier for the api-config.\n+\nTo set the `api-config` attribute:\n* provide the argument `--api-config` on the command line",
  args: { name: "API_CONFIG", description: "String", suggestions: [] },
};
const flag591: Fig.Option = {
  name: "--api",
  description:
    "API ID.\n+\nTo set the `api` attribute:\n* provide the argument `--api-config` on the command line with a fully specified name;\n* provide the argument `--api` on the command line",
  args: { name: "API", description: "String", suggestions: [] },
};
const flag592: Fig.Option = {
  name: "--api",
  description:
    "API ID.\n+\nTo set the `api` attribute:\n* provide the argument `api_config` on the command line with a fully specified name;\n* provide the argument `--api` on the command line",
  args: { name: "API", description: "String", suggestions: [] },
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
const flag3765: Fig.Option = {
  name: "--display-name",
  description: "Human readable name which can optionally be supplied",
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
const flag6595: Fig.Option = {
  name: "--location",
  description:
    "Cloud location for gateway.\n+\nTo set the `location` attribute:\n* provide the argument `gateway` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6596: Fig.Option = {
  name: "--location",
  description:
    "Cloud location for operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6696: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* Location for API and API Configs. Defaults to a wildcard",
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
const flag13134: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13135: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  args: { name: "ROLE", description: "String", suggestions: [] },
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
const flag15167: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
  name: "api-gateway",
  description: "Manage Cloud API Gateway resources",
  subcommands: [
    {
      name: "api-configs",
      description: "Manage Cloud API Gateway API Configs",
      subcommands: [
        {
          name: "create",
          description: "Add a new config to an API",
          options: [
            flag42,
            flag46,
            flag592,
            flag720,
            {
              name: "--backend-auth-service-account",
              description:
                "Service account which will be used to sign tokens for backends with       authentication configured",
              args: {
                name: "BACKEND_AUTH_SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag3765,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--grpc-files",
              description:
                "Files describing the GRPC service. Google Service Configuration files in JSON or YAML formats as well as Proto descriptors should be listed",
              args: { name: "FILE", description: "List", suggestions: [] },
            },
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--openapi-spec",
              description:
                "The OpenAPI specifications containing service configuration information, and API specification for the gateway",
              args: { name: "FILE", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API_CONFIG",
            description:
              "ID of the api-config or fully qualified identifier for the api-config.\n+\nTo set the `api-config` attribute:\n* provide the argument `api_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a config from an API",
          options: [
            flag42,
            flag46,
            flag592,
            flag720,
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
            name: "API_CONFIG",
            description:
              "ID of the api-config or fully qualified identifier for the api-config.\n+\nTo set the `api-config` attribute:\n* provide the argument `api_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a specific API config",
          options: [
            flag42,
            flag46,
            flag592,
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
            {
              name: "--view",
              description:
                "The API Configuration view to return. If       'FULL' is specified, the base64 encoded API Configuration's source file       conent will be included in the response. _VIEW_ must be one of: *BASIC*, *FULL*",
              args: {
                name: "VIEW",
                description: "String",
                suggestions: ["BASIC", "FULL"],
              },
            },
          ],
          args: {
            name: "API_CONFIG",
            description:
              "ID of the api-config or fully qualified identifier for the api-config.\n+\nTo set the `api-config` attribute:\n* provide the argument `api_config` on the command line",
          },
        },
        {
          name: "list",
          description: "List configs for an API",
          options: [
            flag42,
            flag46,
            {
              name: "--api",
              description:
                "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `--api` on the command line;\n* Defaults to wildcard for all APIs",
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
          description: "Update an API Gateway API config",
          options: [
            flag42,
            flag46,
            flag592,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3765,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API_CONFIG",
            description:
              "ID of the api-config or fully qualified identifier for the api-config.\n+\nTo set the `api-config` attribute:\n* provide the argument `api_config` on the command line",
          },
        },
      ],
    },
    {
      name: "apis",
      description: "Manage Cloud API Gateway APIs",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a gateway",
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
            flag7749,
            flag11637,
            flag11946,
            flag13134,
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
          name: "create",
          description: "Create a new API",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3765,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--managed-service",
              description: "The name of a pre-existing Google Managed Service",
              args: {
                name: "MANAGED_SERVICE",
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
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `api` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes an API",
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
          description: "Show details about a specific API",
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
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `api` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for an API",
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
            flag11059,
            flag11637,
            flag11946,
            flag13948,
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
          description: "List APIs",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding to a gateway",
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
            flag7753,
            flag11637,
            flag11946,
            flag13135,
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
          name: "update",
          description: "Update an API Gateway API",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3765,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "API",
            description:
              "ID of the api or fully qualified identifier for the api.\n+\nTo set the `api` attribute:\n* provide the argument `api` on the command line",
          },
        },
      ],
    },
    {
      name: "gateways",
      description: "Manage Cloud API Gateway Gateways",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a gateway",
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
            flag6595,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13134,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new gateway",
          options: [
            flag42,
            flag46,
            flag591,
            flag545,
            flag720,
            flag1201,
            flag2292,
            flag3765,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6595,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an API Gateway",
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
            flag6595,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a specific gateway",
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
            flag6595,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a gateway",
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
            flag6595,
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
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
        {
          name: "list",
          description: "List API Gateways",
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
            flag6696,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a gateway",
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
            flag6595,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13135,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an API Gateway",
          options: [
            flag42,
            flag46,
            flag591,
            flag545,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3765,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6595,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GATEWAY",
            description:
              "ID of the gateway or fully qualified identifier for the gateway.\n+\nTo set the `gateway` attribute:\n* provide the argument `gateway` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage operations for Cloud API Gateways",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Cloud API Gateway operation",
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
            flag6596,
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
          description: "Show details about the Cloud API Gateway operation",
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
            flag6596,
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
          description: "List API Gateway operations",
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
            flag6696,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "wait",
          description: "Wait for a Cloud API Gateway operation to complete",
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
            flag6596,
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
