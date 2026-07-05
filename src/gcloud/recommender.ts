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
const flag1196: Fig.Option = {
  name: "--billing-account",
  description:
    "The Google Cloud Platform billing account ID to use for this invocation",
  args: { name: "BILLING_ACCOUNT", description: "String", suggestions: [] },
};
const flag1197: Fig.Option = {
  name: "--billing-account",
  description: "The Google Cloud billing account ID to use for this invocation",
  args: { name: "BILLING_ACCOUNT", description: "String", suggestions: [] },
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
const flag4518: Fig.Option = {
  name: "--etag",
  description: "Etag of a recommendation",
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
const flag5004: Fig.Option = {
  name: "--folder",
  description: "The Google Cloud Platform folder ID to use for this invocation",
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
const flag6829: Fig.Option = {
  name: "--location",
  description: "Location to use for this invocation",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6836: Fig.Option = {
  name: "--location",
  description: "Location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10863: Fig.Option = {
  name: "--organization",
  description:
    "The Google Cloud Platform organization ID to use for this invocation",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag10864: Fig.Option = {
  name: "--organization",
  description: "The Google Cloud organization ID to use for this invocation",
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
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12022: Fig.Option = {
  name: "--recommender",
  description: "Recommender of recommendation",
  args: { name: "RECOMMENDER", description: "String", suggestions: [] },
};
const flag12023: Fig.Option = {
  name: "--recommender",
  description: "Recommender of the recommendations",
  args: { name: "RECOMMENDER", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14390: Fig.Option = {
  name: "--state-metadata",
  description:
    "State metadata for recommendation, in format of --state-metadata=key1=value1,key2=value2",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag15378: Fig.Option = {
  name: "--validate-only",
  description:
    "If true, validate the request and preview the change, but do not actually update it",
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
  name: "recommender",
  description: "Manage Cloud recommendations and recommendation rules",
  subcommands: [
    {
      name: "insight-type-config",
      description: "Manage Cloud resource insight type configuration",
      subcommands: [
        {
          name: "describe",
          description: "Describe an insight type configuration",
          options: [
            flag42,
            flag46,
            flag1197,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6829,
            flag7356,
            flag10864,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSIGHT_TYPE",
            description: "Insight type to use for this invocation",
          },
        },
        {
          name: "update",
          description: "Update an insight type configuration",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                "Store small amounts of arbitrary data on the insight type configuration",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag1197,
            flag1201,
            {
              name: "--config-file",
              description:
                "Generation configuration file for the insight type configuration",
              args: {
                name: "CONFIG_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description: "Display name of the insight type configuration",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--etag",
              description: "Etag of the insight type configuration",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6829,
            flag7356,
            flag10864,
            flag11946,
            flag14975,
            flag15315,
            flag15378,
            flag15424,
          ],
          args: {
            name: "INSIGHT_TYPE",
            description: "Insight type to use for this invocation",
          },
        },
      ],
    },
    {
      name: "insights",
      description: "Manage Cloud resource insights",
      subcommands: [
        {
          name: "describe",
          description: "Describe an insight",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--insight-type",
              description: "Insight type to describe insights",
              args: {
                name: "INSIGHT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag6836,
            flag7356,
            flag10863,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSIGHT", description: "insight to describe" },
        },
        {
          name: "list",
          description: "List insights for a Google Cloud entity",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--insight-type",
              description:
                "Insight type to list insights for. Supported insight-types can be found here: https://cloud.google.com/recommender/docs/insights/insight-types",
              args: {
                name: "INSIGHT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag6515,
            {
              name: "--location",
              description: "Location to list insights for",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10863,
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
          name: "mark-accepted",
          description: "Mark an insight's state as ACCEPTED",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description: "Etag of a insight",
              args: { name: "etag", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--insight-type",
              description: "Insight Type of the insights",
              args: {
                name: "INSIGHT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag6836,
            flag7356,
            flag10863,
            flag11946,
            flag14390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSIGHT",
            description: "Insight id which will be marked as accepted",
          },
        },
      ],
    },
    {
      name: "recommendations",
      description: "Manage Cloud resource recommendations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a recommendation for a Cloud project",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            flag6836,
            flag7356,
            flag10863,
            flag11946,
            flag12023,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation to describe",
          },
        },
        {
          name: "list",
          description: "List operations for a recommendation",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description: "Location to list recommendations for",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10863,
            flag11059,
            flag11946,
            {
              name: "--recommender",
              description:
                "Recommender to list recommendations for. Supported recommenders can be found here: https://cloud.google.com/recommender/docs/recommenders",
              args: {
                name: "RECOMMENDER",
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
          name: "mark-claimed",
          description: "Mark a recommendation's state as CLAIMED",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4518,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            flag6836,
            flag7356,
            flag10863,
            flag11946,
            flag12022,
            flag14390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation id which will be marked as claimed",
          },
        },
        {
          name: "mark-dismissed",
          description: "Mark recommendation's state as DISMISSED",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4518,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            flag6836,
            flag7356,
            flag10863,
            flag11946,
            flag12023,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation ID which will be marked as dismissed",
          },
        },
        {
          name: "mark-failed",
          description: "Mark a recommendation's state as FAILED",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description: "Etag of a recommendation",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description: "Location",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10863,
            flag11946,
            {
              name: "--recommender",
              description: "Recommender of recommendation",
              args: {
                name: "RECOMMENDER",
                description: "String",
                suggestions: [],
              },
            },
            flag14390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation id which will be marked as FAILED",
          },
        },
        {
          name: "mark-succeeded",
          description: "Mark a recommendation's state as SUCCEEDED",
          options: [
            flag42,
            flag46,
            flag1196,
            flag1201,
            flag2292,
            flag4518,
            flag4900,
            flag4902,
            flag5004,
            flag5091,
            flag5453,
            flag5699,
            flag6836,
            flag7356,
            flag10863,
            flag11946,
            flag12022,
            flag14390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RECOMMENDATION",
            description: "Recommendation id which will be marked as succeeded",
          },
        },
      ],
    },
    {
      name: "recommender-config",
      description: "Manage Cloud resource recommender configuration",
      subcommands: [
        {
          name: "describe",
          description: "Describe a recommender configuration",
          options: [
            flag42,
            flag46,
            flag1197,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6829,
            flag7356,
            flag10864,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RECOMMENDER",
            description: "Recommender to use for this invocation",
          },
        },
        {
          name: "update",
          description: "Update a recommender configuration",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                "Store small amounts of arbitrary data on the recommender configuration",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag1197,
            flag1201,
            {
              name: "--config-file",
              description:
                "Generation configuration file for the recommender configuration",
              args: {
                name: "CONFIG_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description: "Display name of the recommender configuration",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--etag",
              description: "Etag of the recommender configuration",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6829,
            flag7356,
            flag10864,
            flag11946,
            flag14975,
            flag15315,
            flag15378,
            flag15424,
          ],
          args: {
            name: "RECOMMENDER",
            description: "Recommender to use for this invocation",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
