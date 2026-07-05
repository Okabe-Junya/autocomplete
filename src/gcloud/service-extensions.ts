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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3080: Fig.Option = {
  name: "--description",
  description: "A human-readable description of the resource",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
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
const flag5694: Fig.Option = {
  name: "--image",
  description:
    "URI of the container image containing the plugin's Wasm module,\nstored in the Artifact Registry",
  args: { name: "IMAGE", description: "String", suggestions: [] },
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
const flag6601: Fig.Option = {
  name: "--location",
  description:
    "Cloud region in which the resource is located.\n+\n\nTo set the `location` attribute:\n* provide the argument `authz_extension` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6602: Fig.Option = {
  name: "--location",
  description:
    "Cloud region in which the resource is located.\n+\n\nTo set the `location` attribute:\n* provide the argument `lb_edge_extension` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6603: Fig.Option = {
  name: "--location",
  description:
    "Cloud region in which the resource is located.\n+\n\nTo set the `location` attribute:\n* provide the argument `lb_route_extension` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6604: Fig.Option = {
  name: "--location",
  description:
    "Cloud region in which the resource is located.\n+\n\nTo set the `location` attribute:\n* provide the argument `lb_traffic_extension` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6873: Fig.Option = {
  name: "--location",
  description:
    "The location ID.\n+\n\nTo set the `location` attribute:\n* provide the argument `wasm_plugin_version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* use global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6874: Fig.Option = {
  name: "--location",
  description:
    "The location ID.\n+\n\nTo set the `location` attribute:\n* provide the argument `wasm_plugin` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* use global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7340: Fig.Option = {
  name: "--log-config",
  description:
    "Logging options for the activity performed by this plugin.\nThe following options can be set:\n* `enable`: whether to enable logging. If `log-config` flag is set,\n  `enable` option is required.\n+\n* `sample-rate`: configures the sampling rate of activity logs, where\n  `1.0` means all logged activity is reported and `0.0` means no\n  activity is reported. The default value is `1.0`, and the value of\n  the field must be in range `0` to `1` (inclusive).\n+\n* `min-log-level`: specifies the lowest level of the logs that\n  should be exported to Cloud Logging. The default value is `INFO`.\n+\nExample usage:\n`--log-config=enable=True,sample-rate=0.5,min-log-level=INFO\n--log_config=enable=False`",
  args: { name: "LOG_CONFIG", description: "Dict", suggestions: [] },
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
const flag11324: Fig.Option = {
  name: "--plugin-config-file",
  description:
    "Path to a local file containing the plugin runtime\n              configuration.\n+\nUse a full or relative path to a local file containing the value of plugin_config_file",
  args: {
    name: "PLUGIN_CONFIG_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag11325: Fig.Option = {
  name: "--plugin-config-uri",
  description:
    "URI of the container image containing the plugin's runtime\n              configuration, stored in the Artifact Registry",
  args: { name: "PLUGIN_CONFIG_URI", description: "String", suggestions: [] },
};
const flag11328: Fig.Option = {
  name: "--plugin-config",
  description: "Plugin runtime configuration in the textual format",
  args: { name: "PLUGIN_CONFIG", description: "String", suggestions: [] },
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
const flag14147: Fig.Option = {
  name: "--source",
  description:
    "Path to a YAML file containing the configuration export data. The\nYAML file must not contain any output-only fields. Alternatively, you\nmay omit this flag to read from standard input. For a schema\ndescribing the export/import format, see:\n$CLOUDSDKROOT/lib/googlecloudsdk/schemas/...\n+\n$CLOUDSDKROOT is can be obtained with the following command:\n+\n  $ gcloud info --format='value(installation.sdk_root)'",
  args: { name: "SOURCE", description: "String", suggestions: [] },
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
const flag15537: Fig.Option = {
  name: "--wasm-plugin",
  description:
    "The ID of the `WasmPlugin`.\n+\nTo set the `wasm-plugin` attribute:\n* provide the argument `wasm_plugin_version` on the command line with a fully specified name;\n* provide the argument `--wasm-plugin` on the command line",
  args: { name: "WASM_PLUGIN", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "service-extensions",
  description: "Manage Service Extensions resources",
  subcommands: [
    {
      name: "authz-extensions",
      description: "Manage Service Extensions `AuthzExtension` resources",
      subcommands: [
        {
          name: "delete",
          description: "Delete an `AuthzExtension` resource",
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
            flag6601,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHZ_EXTENSION",
            description:
              "ID of the AuthzExtension or fully qualified identifier for the AuthzExtension.\n+\nTo set the `authz_extension` attribute:\n* provide the argument `authz_extension` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an `AuthzExtension` resource",
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
            flag6601,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHZ_EXTENSION",
            description:
              "ID of the AuthzExtension or fully qualified identifier for the AuthzExtension.\n+\nTo set the `authz_extension` attribute:\n* provide the argument `authz_extension` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an `AuthzExtension` resource",
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
            flag6601,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHZ_EXTENSION",
            description:
              "ID of the AuthzExtension or fully qualified identifier for the AuthzExtension.\n+\nTo set the `authz_extension` attribute:\n* provide the argument `authz_extension` on the command line",
          },
        },
        {
          name: "list",
          description: "List `AuthzExtension` resources",
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
      name: "lb-edge-extensions",
      description: "Manage Service Extensions `LbEdgeExtension` resources",
      subcommands: [
        {
          name: "delete",
          description: "Delete an `LbEdgeExtension` resource",
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
            flag6602,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_EDGE_EXTENSION",
            description:
              "ID of the LbEdgeExtension or fully qualified identifier for the LbEdgeExtension.\n+\nTo set the `lb_edge_extension` attribute:\n* provide the argument `lb_edge_extension` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an `LbEdgeExtension` resource",
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
            flag6602,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_EDGE_EXTENSION",
            description:
              "ID of the LbEdgeExtension or fully qualified identifier for the LbEdgeExtension.\n+\nTo set the `lb_edge_extension` attribute:\n* provide the argument `lb_edge_extension` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an `LbEdgeExtension` resource",
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
            flag6602,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_EDGE_EXTENSION",
            description:
              "ID of the LbEdgeExtension or fully qualified identifier for the LbEdgeExtension.\n+\nTo set the `lb_edge_extension` attribute:\n* provide the argument `lb_edge_extension` on the command line",
          },
        },
        {
          name: "list",
          description: "List `LbEdgeExtension` resources",
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
      name: "lb-route-extensions",
      description: "Manage Service Extensions `LbRouteExtension` resources",
      subcommands: [
        {
          name: "delete",
          description: "Delete an `LbRouteExtension` resource",
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
            flag6603,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_ROUTE_EXTENSION",
            description:
              "ID of the LbRouteExtension or fully qualified identifier for the LbRouteExtension.\n+\nTo set the `lb_route_extension` attribute:\n* provide the argument `lb_route_extension` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an `LbRouteExtension` resource",
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
            flag6603,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_ROUTE_EXTENSION",
            description:
              "ID of the LbRouteExtension or fully qualified identifier for the LbRouteExtension.\n+\nTo set the `lb_route_extension` attribute:\n* provide the argument `lb_route_extension` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an `LbRouteExtension` resource",
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
            flag6603,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_ROUTE_EXTENSION",
            description:
              "ID of the LbRouteExtension or fully qualified identifier for the LbRouteExtension.\n+\nTo set the `lb_route_extension` attribute:\n* provide the argument `lb_route_extension` on the command line",
          },
        },
        {
          name: "list",
          description: "List `LbRouteExtension` resources",
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
      name: "lb-traffic-extensions",
      description: "Manage Service Extensions `LbTrafficExtension` resources",
      subcommands: [
        {
          name: "delete",
          description: "Delete an `LbTrafficExtension` resource",
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
            flag6604,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_TRAFFIC_EXTENSION",
            description:
              "ID of the LbTrafficExtension or fully qualified identifier for the LbTrafficExtension.\n+\nTo set the `lb_traffic_extension` attribute:\n* provide the argument `lb_traffic_extension` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an `LbTrafficExtension` resource",
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
            flag6604,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_TRAFFIC_EXTENSION",
            description:
              "ID of the LbTrafficExtension or fully qualified identifier for the LbTrafficExtension.\n+\nTo set the `lb_traffic_extension` attribute:\n* provide the argument `lb_traffic_extension` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an `LbTrafficExtension` resource",
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
            flag6604,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LB_TRAFFIC_EXTENSION",
            description:
              "ID of the LbTrafficExtension or fully qualified identifier for the LbTrafficExtension.\n+\nTo set the `lb_traffic_extension` attribute:\n* provide the argument `lb_traffic_extension` on the command line",
          },
        },
        {
          name: "list",
          description: "List `LbTrafficExtension` resources",
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
      name: "wasm-plugin-versions",
      description:
        "Interact with and manage Service Extensions `WasmPluginVersions`",
      subcommands: [
        {
          name: "create",
          description: "Create a `WasmPluginVersion` resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3080,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--image",
              description:
                "URI of the image containing the plugin's Wasm module, stored in the\nArtifact Registry",
              args: { name: "IMAGE", description: "String", suggestions: [] },
            },
            flag5699,
            {
              name: "--labels",
              description:
                "List of KEY=VALUE labels to attach to this resource",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6873,
            flag7356,
            {
              name: "--plugin-config",
              description: "Plugin configuration in the textual format",
              args: {
                name: "PLUGIN_CONFIG",
                description: "Googlecloudsdk.core.util.http_encoding:Encode",
                suggestions: [],
              },
            },
            {
              name: "--plugin-config-file",
              description:
                "Path to a file containing the plugin configuration. Use a full or relative path to a local file containing the value of plugin_config_file",
              args: {
                name: "PLUGIN_CONFIG_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--plugin-config-uri",
              description:
                "URI of the image containing the plugin's configuration, stored in the\nArtifact Registry",
              args: {
                name: "PLUGIN_CONFIG_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15537,
          ],
          args: {
            name: "WASM_PLUGIN_VERSION",
            description:
              "ID of the WasmPluginVersion or fully qualified identifier for the WasmPluginVersion.\n+\nTo set the `wasm_plugin_version` attribute:\n* provide the argument `wasm_plugin_version` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a `WasmPluginVersion` resource",
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
            flag6873,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15537,
          ],
          args: {
            name: "WASM_PLUGIN_VERSION",
            description:
              "ID of the WasmPluginVersion or fully qualified identifier for the WasmPluginVersion.\n+\nTo set the `wasm_plugin_version` attribute:\n* provide the argument `wasm_plugin_version` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a `WasmPluginVersion` resource",
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
            flag6873,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15537,
          ],
          args: {
            name: "WASM_PLUGIN_VERSION",
            description:
              "ID of the WasmPluginVersion or fully qualified identifier for the WasmPluginVersion.\n+\nTo set the `wasm_plugin_version` attribute:\n* provide the argument `wasm_plugin_version` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all `WasmPluginVersion` resources for a `WasmPlugin`",
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
                "The location ID.\n+\n\nTo set the `location` attribute:\n* provide the argument `--wasm-plugin` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* use global location",
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
              name: "--wasm-plugin",
              description:
                "ID of the WasmPlugin or fully qualified identifier for the WasmPlugin.\n+\nTo set the `wasm-plugin` attribute:\n* provide the argument `--wasm-plugin` on the command line",
              args: {
                name: "WASM_PLUGIN",
                description: "String",
                suggestions: [],
              },
            },
          ],
        },
      ],
    },
    {
      name: "wasm-plugins",
      description: "Interact with and manage Service Extensions `WasmPlugins`",
      subcommands: [
        {
          name: "create",
          description: "Create a `WasmPlugin` resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3080,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5694,
            flag5699,
            flag6413,
            flag6874,
            flag7340,
            flag7356,
            {
              name: "--main-version",
              description:
                "ID of the `WasmPluginVersion` resource that will be created for that `WasmPlugin` and that will be set as the current main version",
              args: {
                name: "MAIN_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag11328,
            flag11324,
            flag11325,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WASM_PLUGIN",
            description:
              "ID of the WasmPlugin or fully qualified identifier for the WasmPlugin.\n+\nTo set the `wasm_plugin` attribute:\n* provide the argument `wasm_plugin` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a `WasmPlugin` resource",
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
            flag6874,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WASM_PLUGIN",
            description:
              "ID of the WasmPlugin or fully qualified identifier for the WasmPlugin.\n+\nTo set the `wasm_plugin` attribute:\n* provide the argument `wasm_plugin` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a `WasmPlugin` resource",
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
            flag6874,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WASM_PLUGIN",
            description:
              "ID of the WasmPlugin or fully qualified identifier for the WasmPlugin.\n+\nTo set the `wasm_plugin` attribute:\n* provide the argument `wasm_plugin` on the command line",
          },
        },
        {
          name: "list",
          description: "List all `WasmPlugin` resources",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* use global location",
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
          description: "Update a `WasmPlugin` resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3080,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5694,
            flag5699,
            flag6413,
            flag6874,
            flag7340,
            flag7356,
            {
              name: "--main-version",
              description:
                "The ID of the `WasmPluginVersion` that should be the currently\nserving one. The version referred to must be a child of this\n`WasmPlugin`.\n+\nIf the `--image` flag was also provided, the `WasmPluginVersion`\nwill be created for that `WasmPlugin` and will be set as the\ncurrent main version",
              args: {
                name: "MAIN_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag11328,
            flag11324,
            flag11325,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WASM_PLUGIN",
            description:
              "ID of the WasmPlugin or fully qualified identifier for the WasmPlugin.\n+\nTo set the `wasm_plugin` attribute:\n* provide the argument `wasm_plugin` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
