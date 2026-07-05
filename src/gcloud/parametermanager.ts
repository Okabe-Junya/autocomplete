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
const flag6309: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the cryptoKey or fully qualified identifier for the cryptoKey.\n+\nTo set the `crypto-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
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
const flag6631: Fig.Option = {
  name: "--location",
  description:
    "For resources [parameter, kms-key], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6979: Fig.Option = {
  name: "--location",
  description:
    "The location id of the parameter resource.\n+\nTo set the `location` attribute:\n* provide the argument `parameter` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7283: Fig.Option = {
  name: "--location",
  description:
    "The location id of the version resource.\n+\nTo set the `location` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
const flag11095: Fig.Option = {
  name: "--parameter-format",
  description:
    "Specifies the format of a Parameter. _PARAMETER_FORMAT_ must be one of:\n+\n*json*::: JSON format.\n*unformatted*::: Unformatted.\n*yaml*::: YAML format.\n:::\n+",
  args: {
    name: "PARAMETER_FORMAT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["json", "unformatted", "yaml"],
  },
};
const flag11105: Fig.Option = {
  name: "--parameter",
  description:
    "The parameter id of the version resource.\n+\nTo set the `parameter` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--parameter` on the command line",
  args: { name: "PARAMETER", description: "String", suggestions: [] },
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
  name: "parametermanager",
  description:
    "Parameter Manager is a single source of truth to store, access and manage the lifecycle of your application parameters",
  subcommands: [
    {
      name: "parameters",
      description: "Manage Parameter Manager parameter resources",
      subcommands: [
        {
          name: "create",
          description: "Creates a Parameter Manager parameter",
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
              name: "--key-ring",
              description:
                "The keyRing id of the cryptoKey resource.\n+\nTo set the `key-ring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--key-ring` on the command line",
              args: {
                name: "KEY_RING",
                description: "String",
                suggestions: [],
              },
            },
            flag6309,
            {
              name: "--labels",
              description:
                'Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag6631,
            flag7356,
            flag11095,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARAMETER",
            description:
              "ID of the parameter or fully qualified identifier for the parameter.\n+\nTo set the `parameter` attribute:\n* provide the argument `parameter` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a single Parameter Manager parameter resource",
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
            flag6979,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARAMETER",
            description:
              "ID of the parameter or fully qualified identifier for the parameter.\n+\nTo set the `parameter` attribute:\n* provide the argument `parameter` on the command line",
          },
        },
        {
          name: "describe",
          description: "Gets a single Parameter Manager parameter",
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
            flag6979,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARAMETER",
            description:
              "ID of the parameter or fully qualified identifier for the parameter.\n+\nTo set the `parameter` attribute:\n* provide the argument `parameter` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists Parameter Manager parameters",
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
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description:
            "Updates the metadata of an Parameter Manager parameter resource",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-kms-key",
              description: "Clear kms_key value and set to null",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--key-ring",
              description:
                "The keyRing id of the cryptoKey resource.\n+\nTo set the `key-ring` attribute:\n* provide the argument `--current` on the command line with a fully specified name;\n* provide the argument `--key-ring` on the command line",
              args: {
                name: "KEY_RING",
                description: "String",
                suggestions: [],
              },
            },
            flag6309,
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
            flag6631,
            flag7356,
            flag11095,
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
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARAMETER",
            description:
              "ID of the parameter or fully qualified identifier for the parameter.\n+\nTo set the `parameter` attribute:\n* provide the argument `parameter` on the command line",
          },
        },
        {
          name: "versions",
          description: "Manage Parameter Manager parameter version resources",
          subcommands: [
            {
              name: "create",
              description: "Creates an Parameter Manager parameter version",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--disabled",
                  description:
                    "Disabled boolean to determine if a ParameterVersion acts as a metadata only\nresource (payload is never returned if disabled is true). If true any calls\nwill always default to BASIC view even if the user explicitly passes FULL\nview as part of the request. A render call on a disabled resource fails\nwith an error. Default value is False",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7283,
                flag7356,
                flag11105,
                {
                  name: "--payload-data",
                  description: "bytes data for storing payload",
                  args: {
                    name: "PAYLOAD_DATA",
                    description:
                      "Googlecloudsdk.core.util.http_encoding:Encode",
                    suggestions: [],
                  },
                },
                {
                  name: "--payload-data-from-file",
                  description:
                    "bytes data for storing payload. Use a full or relative path to a local file containing the value of payload_data",
                  args: {
                    name: "PAYLOAD_DATA_FROM_FILE",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:FileContents",
                    suggestions: [],
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
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "Deletes a single Parameter Manager parameter version",
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
                flag7283,
                flag7356,
                flag11105,
                flag11637,
                flag11946,
                flag12844,
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
              description: "Gets a single Parameter Manager parameter version",
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
                flag7283,
                flag7356,
                flag11105,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--view",
                  description:
                    "View of the ParameterVersion.\nIn the default FULL view, all metadata & payload associated with the\nParameterVersion will be returned. _VIEW_ must be one of:\n+\n*basic*::: Include only the metadata for the resource.\n*full*::: Include metadata & other relevant payload data as well.\nThis is the default view.\n:::\n+",
                  args: {
                    name: "VIEW",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["basic", "full"],
                  },
                },
              ],
              args: {
                name: "VERSION",
                description:
                  "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
              },
            },
            {
              name: "list",
              description: "List Parameter Manager parameter versions",
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
                    "The location id of the parameter resource.\n+\nTo set the `location` attribute:\n* provide the argument `--parameter` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11059,
                {
                  name: "--parameter",
                  description:
                    "ID of the parameter or fully qualified identifier for the parameter.\n+\nTo set the `parameter` attribute:\n* provide the argument `--parameter` on the command line",
                  args: {
                    name: "PARAMETER",
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
              name: "render",
              description:
                "Gets a single Parameter Manager parameter version render",
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
                flag7283,
                flag7356,
                flag11105,
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
              name: "update",
              description:
                "Updates the properties of a single Parameter Manager parameter version",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--disabled",
                  description:
                    "Disabled boolean to determine if a ParameterVersion acts as a metadata only\nresource (payload is never returned if disabled is true). If true any calls\nwill always default to BASIC view even if the user explicitly passes FULL\nview as part of the request. A render call on a disabled resource fails\nwith an error. Default value is False. Use *--disabled* to enable and *--no-disabled* to disable",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7283,
                flag7356,
                flag11105,
                flag11637,
                flag11946,
                flag12847,
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
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
