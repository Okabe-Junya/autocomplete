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
const flag320: Fig.Option = {
  name: "--address",
  description:
    "IPv4 or IPv6 address of the endpoint. The default is\nempty string",
  args: { name: "ADDRESS", description: "String", suggestions: [] },
};
const flag516: Fig.Option = {
  name: "--annotations",
  description:
    "Annotations for the endpoint.\n+\nAnnotations take the form of key/value string pairs. Keys are\ncomposed of an optional prefix and a name segment, separated by a\nslash(/). Prefixes and names must be composed of alphanumeric\ncharacters, dashes, and dots. Names may also use underscores. There\nare no character restrictions on what may go into the value of an\nannotation. The entire dictionary is limited to 512 characters, spread\nacross all key-value pairs",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag518: Fig.Option = {
  name: "--annotations",
  description:
    "Annotations for the service.\n+\nAnnotations take the form of key/value string pairs. Keys are\ncomposed of an optional prefix and a name segment, separated by a\nslash(/). Prefixes and names must be composed of alphanumeric\ncharacters, dashes, and dots. Names may also use underscores. There\nare no character restrictions on what may go into the value of an\nannotation. The entire dictionary is limited to 2000 characters, spread\nacross all key-value pairs",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag6424: Fig.Option = {
  name: "--labels",
  description: "Resource labels associated with the namespace",
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
const flag7082: Fig.Option = {
  name: "--location",
  description:
    "The name of the region for the endpoint.\n+\nTo set the `location` attribute:\n* provide the argument `endpoint` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7084: Fig.Option = {
  name: "--location",
  description:
    "The name of the region for the namespace.\n+\nTo set the `location` attribute:\n* provide the argument `namespace` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7086: Fig.Option = {
  name: "--location",
  description:
    "The name of the region for the service.\n+\nTo set the `location` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
const flag8124: Fig.Option = {
  name: "--namespace",
  description:
    "The name of the namespace for the endpoint.\n+\nTo set the `namespace` attribute:\n* provide the argument `endpoint` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line",
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8126: Fig.Option = {
  name: "--namespace",
  description:
    "The name of the namespace for the service.\n+\nTo set the `namespace` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line",
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
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
const flag11413: Fig.Option = {
  name: "--port",
  description:
    "Port that the endpoint is running on, must be in the range of\n[0, 65535]. The default is 0",
  args: { name: "PORT", description: "Int", suggestions: [] },
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
const flag13614: Fig.Option = {
  name: "--service",
  description:
    "The name of the service for the endpoint.\n+\nTo set the `service` attribute:\n* provide the argument `endpoint` on the command line with a fully specified name;\n* provide the argument `--service` on the command line",
  args: { name: "SERVICE", description: "String", suggestions: [] },
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
  name: "service-directory",
  description: "Command groups for Service Directory",
  subcommands: [
    {
      name: "endpoints",
      description: "Manage Service Directory endpoints",
      subcommands: [
        {
          name: "create",
          description: "Creates an endpoint",
          options: [
            flag42,
            flag46,
            flag320,
            flag516,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7082,
            flag7356,
            flag8124,
            {
              name: "--network",
              description:
                "Specifies the Google Compute Engine Network (VPC) of the Endpoint.\nNetwork and Project existence is not checked.\nExample: `projects/<PROJECT_NUM>/locations/global/networks/<NETWORK_NAME>`\nThe default is empty string",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11413,
            flag11637,
            flag11946,
            flag13614,
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
          name: "delete",
          description: "Deletes an endpoint",
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
            flag7082,
            flag7356,
            flag8124,
            flag11637,
            flag11946,
            flag13614,
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
          name: "describe",
          description: "Describes an endpoint",
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
            flag7082,
            flag7356,
            flag8124,
            flag11637,
            flag11946,
            flag13614,
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
          description: "Lists endpoints",
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
              name: "--location",
              description:
                "The name of the region for the service.\n+\nTo set the `location` attribute:\n* provide the argument `--service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--namespace",
              description:
                "The name of the namespace for the service.\n+\nTo set the `namespace` attribute:\n* provide the argument `--service` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line",
              args: {
                name: "NAMESPACE",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--service",
              description:
                "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `--service` on the command line",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Updates an endpoint",
          options: [
            flag42,
            flag46,
            flag320,
            flag516,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7082,
            flag7356,
            flag8124,
            flag11413,
            flag11637,
            flag11946,
            flag13614,
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
      ],
    },
    {
      name: "locations",
      description: "Manage Service Directory locations",
      subcommands: [
        {
          name: "describe",
          description: "Describes a location",
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
            name: "LOCATION",
            description:
              "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists locations",
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
        },
      ],
    },
    {
      name: "namespaces",
      description: "Manage Service Directory namespaces",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Adds IAM policy binding to a namespace",
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
            flag7084,
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
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
        {
          name: "create",
          description: "Creates a namespace",
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
            flag6424,
            flag7084,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a namespace",
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
            flag7084,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describes a namespace",
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
            flag7084,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Gets IAM policy for a namespace",
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
            flag7084,
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
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists namespaces",
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
              name: "--location",
              description:
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Removes IAM policy binding from a namespace",
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
            flag7084,
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
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Sets IAM policy for a namespace",
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
            flag7084,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "NAMESPACE",
              description:
                "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
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
          description: "Updates a namespace",
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
            flag6424,
            flag7084,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAMESPACE",
            description:
              "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
          },
        },
      ],
    },
    {
      name: "services",
      description: "Manage Service Directory services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Adds IAM policy binding to a service",
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
            flag7086,
            flag7356,
            flag7749,
            flag8126,
            flag11637,
            flag11946,
            flag13132,
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
          name: "create",
          description: "Creates a service",
          options: [
            flag42,
            flag46,
            flag518,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7086,
            flag7356,
            flag8126,
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
          name: "delete",
          description: "Deletes a service",
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
            flag7086,
            flag7356,
            flag8126,
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
          name: "describe",
          description: "Describes a service",
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
            flag7086,
            flag7356,
            flag8126,
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
          name: "get-iam-policy",
          description: "Gets IAM policy for a service",
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
            flag7086,
            flag7356,
            flag8126,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
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
          description: "Lists services",
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
              name: "--location",
              description:
                "The name of the region for the namespace.\n+\nTo set the `location` attribute:\n* provide the argument `--namespace` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--namespace",
              description:
                "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `--namespace` on the command line",
              args: {
                name: "NAMESPACE",
                description: "String",
                suggestions: [],
              },
            },
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
          description: "Removes IAM policy binding from a service",
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
            flag7086,
            flag7356,
            flag7753,
            flag8126,
            flag11637,
            flag11946,
            flag13133,
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
          name: "resolve",
          description: "Resolves a service",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--endpoint-filter",
              description:
                "Apply a Boolean filter EXPRESSION to each endpoint in the service.\nIf the expression evaluates True, then that endpoint is listed",
              args: {
                name: "ENDPOINT_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7086,
            flag7356,
            {
              name: "--max-endpoints",
              description: "Maximum number of endpoints to return",
              args: {
                name: "MAX_ENDPOINTS",
                description: "Int",
                suggestions: [],
              },
            },
            flag8126,
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
          name: "set-iam-policy",
          description: "Sets IAM policy for a service",
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
            flag7086,
            flag7356,
            flag8126,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SERVICE",
              description:
                "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
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
          description: "Updates a service",
          options: [
            flag42,
            flag46,
            flag518,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7086,
            flag7356,
            flag8126,
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
      ],
    },
  ],
};

export default completionSpec;
