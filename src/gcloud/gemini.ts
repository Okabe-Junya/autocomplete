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
const flag1721: Fig.Option = {
  name: "--clear-labels",
  description: "Clear labels value and set to empty map",
};
const flag2106: Fig.Option = {
  name: "--code-repository-index",
  description:
    "ID of the code repository index resource.\n+\n\nTo set the `code-repository-index` attribute:\n* provide the argument `repository_group` on the command line with a fully specified name;\n* provide the argument `--code-repository-index` on the command line",
  args: {
    name: "CODE_REPOSITORY_INDEX",
    description: "String",
    suggestions: [],
  },
};
const flag2107: Fig.Option = {
  name: "--code-repository-index",
  description:
    "The codeRepositoryIndex id of the repositoryGroup resource.\n+\nTo set the `code-repository-index` attribute:\n* provide the argument `repository_group` on the command line with a fully specified name;\n* provide the argument `--code-repository-index` on the command line",
  args: {
    name: "CODE_REPOSITORY_INDEX",
    description: "String",
    suggestions: [],
  },
};
const flag2109: Fig.Option = {
  name: "--code-tools-setting",
  description:
    "The codeToolsSetting id of the settingBinding resource.\n+\nTo set the `code-tools-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--code-tools-setting` on the command line",
  args: { name: "CODE_TOOLS_SETTING", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2481: Fig.Option = {
  name: "--conversational-analytics-setting-feedback-enabled",
  description:
    "Whether to enable feedback. Use *--conversational-analytics-setting-feedback-enabled* to enable and *--no-conversational-analytics-setting-feedback-enabled* to disable",
};
const flag2482: Fig.Option = {
  name: "--conversational-analytics-setting-feedback-enabled",
  description: "Whether to enable feedback",
};
const flag2483: Fig.Option = {
  name: "--conversational-analytics-setting-logging-enabled",
  description:
    "Whether to enable logging. Use *--conversational-analytics-setting-logging-enabled* to enable and *--no-conversational-analytics-setting-logging-enabled* to disable",
};
const flag2484: Fig.Option = {
  name: "--conversational-analytics-setting-logging-enabled",
  description: "Whether to enable logging",
};
const flag2485: Fig.Option = {
  name: "--conversational-analytics-setting-metrics-enabled",
  description:
    "Whether to enable metrics. Use *--conversational-analytics-setting-metrics-enabled* to enable and *--no-conversational-analytics-setting-metrics-enabled* to disable",
};
const flag2486: Fig.Option = {
  name: "--conversational-analytics-setting-metrics-enabled",
  description: "Whether to enable metrics",
};
const flag2487: Fig.Option = {
  name: "--conversational-analytics-setting-traces-enabled",
  description:
    "Whether to enable traces. Use *--conversational-analytics-setting-traces-enabled* to enable and *--no-conversational-analytics-setting-traces-enabled* to disable",
};
const flag2488: Fig.Option = {
  name: "--conversational-analytics-setting-traces-enabled",
  description: "Whether to enable traces",
};
const flag2631: Fig.Option = {
  name: "--custom-instructions",
  description: "Contains custom instructions to be applied to the GCA agent",
  args: { name: "CUSTOM_INSTRUCTIONS", description: "String", suggestions: [] },
};
const flag2712: Fig.Option = {
  name: "--data-sharing-with-google-setting",
  description:
    "The dataSharingWithGoogleSetting id of the settingBinding resource.\n+\nTo set the `data-sharing-with-google-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--data-sharing-with-google-setting` on the command line",
  args: {
    name: "DATA_SHARING_WITH_GOOGLE_SETTING",
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
const flag5200: Fig.Option = {
  name: "--gda-observability-setting",
  description:
    "The gdaObservabilitySetting id of the settingBinding resource.\n+\nTo set the `gda-observability-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--gda-observability-setting` on the command line",
  args: {
    name: "GDA_OBSERVABILITY_SETTING",
    description: "String",
    suggestions: [],
  },
};
const flag5202: Fig.Option = {
  name: "--gemini-enterprise-project",
  description:
    "The Gemini enterprise project for this setting.\nFormat: projects/{project}\nThe `{project}` segment can be the project ID or project number",
  args: {
    name: "GEMINI_ENTERPRISE_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag5204: Fig.Option = {
  name: "--gemini-gcp-enablement-setting",
  description:
    "The geminiGcpEnablementSetting id of the settingBinding resource.\n+\nTo set the `gemini-gcp-enablement-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--gemini-gcp-enablement-setting` on the command line",
  args: {
    name: "GEMINI_GCP_ENABLEMENT_SETTING",
    description: "String",
    suggestions: [],
  },
};
const flag5221: Fig.Option = {
  name: "--gibq-observability-setting",
  description:
    "The gibqObservabilitySetting id of the settingBinding resource.\n+\nTo set the `gibq-observability-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--gibq-observability-setting` on the command line",
  args: {
    name: "GIBQ_OBSERVABILITY_SETTING",
    description: "String",
    suggestions: [],
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
const flag6430: Fig.Option = {
  name: "--labels",
  description:
    'Set labels to new value. Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "LABELS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
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
const flag6760: Fig.Option = {
  name: "--location",
  description:
    "Location of the Gemini resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `repository_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6951: Fig.Option = {
  name: "--location",
  description:
    "The location id of the codeRepositoryIndex resource.\n+\nTo set the `location` attribute:\n* provide the argument `code_repository_index` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6953: Fig.Option = {
  name: "--location",
  description:
    "The location id of the codeToolsSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `code_tools_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6959: Fig.Option = {
  name: "--location",
  description:
    "The location id of the dataSharingWithGoogleSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `data_sharing_with_google_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6965: Fig.Option = {
  name: "--location",
  description:
    "The location id of the gdaObservabilitySetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `gda_observability_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6967: Fig.Option = {
  name: "--location",
  description:
    "The location id of the geminiGcpEnablementSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `gemini_gcp_enablement_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6969: Fig.Option = {
  name: "--location",
  description:
    "The location id of the gibqObservabilitySetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `gibq_observability_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6972: Fig.Option = {
  name: "--location",
  description:
    "The location id of the loggingSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `logging_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6977: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6984: Fig.Option = {
  name: "--location",
  description:
    "The location id of the releaseChannelSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `release_channel_setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6985: Fig.Option = {
  name: "--location",
  description:
    "The location id of the repositoryGroup resource.\n+\nTo set the `location` attribute:\n* provide the argument `repository_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6989: Fig.Option = {
  name: "--location",
  description:
    "The location id of the settingBinding resource.\n+\nTo set the `location` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7386: Fig.Option = {
  name: "--logging-setting",
  description:
    "The loggingSetting id of the settingBinding resource.\n+\nTo set the `logging-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--logging-setting` on the command line",
  args: { name: "LOGGING_SETTING", description: "String", suggestions: [] },
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
const flag11623: Fig.Option = {
  name: "--product",
  description:
    "Product type of the setting binding. _PRODUCT_ must be one of:\n+\n*gemini-cloud-assist*::: Gemini Cloud Assist.\n*gemini-code-assist*::: Gemini Code Assist.\n*gemini-in-bigquery*::: Gemini in BigQuery.\n*gemini-in-looker*::: Gemini in Looker.\n:::\n+",
  args: {
    name: "PRODUCT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "gemini-cloud-assist",
      "gemini-code-assist",
      "gemini-in-bigquery",
      "gemini-in-looker",
    ],
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
const flag12485: Fig.Option = {
  name: "--release-channel-setting",
  description:
    "The releaseChannelSetting id of the settingBinding resource.\n+\nTo set the `release-channel-setting` attribute:\n* provide the argument `setting_binding` on the command line with a fully specified name;\n* provide the argument `--release-channel-setting` on the command line",
  args: {
    name: "RELEASE_CHANNEL_SETTING",
    description: "String",
    suggestions: [],
  },
};
const flag12490: Fig.Option = {
  name: "--release-channel",
  description:
    "Release channel to be used. _RELEASE_CHANNEL_ must be one of:\n+\n*experimental*::: Experimental release channel.\n*stable*::: Stable channel.\n:::\n+",
  args: {
    name: "RELEASE_CHANNEL",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["experimental", "stable"],
  },
};
const flag12491: Fig.Option = {
  name: "--release-channel",
  description:
    "Specifies the release channel for Gemini features. The release channel\ndetermines which set of features are available to the user. _RELEASE_CHANNEL_ must be one of:\n+\n*experimental*::: Experimental release channel.\n*stable*::: Stable channel.\n:::\n+",
  args: {
    name: "RELEASE_CHANNEL",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["experimental", "stable"],
  },
};
const flag12641: Fig.Option = {
  name: "--remove-labels",
  description:
    'Remove existing value from map labels. Sets `remove_labels` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-labels=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-labels=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-labels=path_to_file.(yaml|json)\n+\n```',
  args: { name: "REMOVE_LABELS", description: "Dict", suggestions: [] },
};
const flag12844: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12845: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12847: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12848: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14769: Fig.Option = {
  name: "--target",
  description: "Target of the binding",
  args: { name: "TARGET", description: "String", suggestions: [] },
};
const flag14770: Fig.Option = {
  name: "--target",
  description: "Target of the binding",
  args: { name: "TARGET", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15173: Fig.Option = {
  name: "--update-labels",
  description:
    'Update labels value or add key value pair. Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "UPDATE_LABELS",
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
const flag15540: Fig.Option = {
  name: "--web-grounding-type",
  description:
    "Web grounding type. _WEB_GROUNDING_TYPE_ must be one of:\n+\n*grounding-with-google-search*::: Grounding with Google Search.\n*web-grounding-for-enterprise*::: Grounding with Google Search for Enterprise.\n:::\n+",
  args: {
    name: "WEB_GROUNDING_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "grounding-with-google-search",
      "web-grounding-for-enterprise",
    ],
  },
};

const completionSpec: Fig.Spec = {
  name: "gemini",
  description:
    "Manage resources associated with Gemini Code Assist and Gemini Cloud Assist",
  subcommands: [
    {
      name: "code-repository-indexes",
      description: "Manage Code Repository Index resources",
      subcommands: [
        {
          name: "create",
          description: "Create a code repository index instance",
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
            {
              name: "--kms-key",
              description:
                "Customer-managed encryption key name, in the format\nprojects/*/locations/*/keyRings/*/cryptoKeys/*",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            flag6389,
            flag6951,
            flag7356,
            flag11637,
            flag11946,
            flag12848,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex.\n+\nTo set the `code_repository_index` attribute:\n* provide the argument `code_repository_index` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a code repository index instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If set to true, any RepositoryGroups from this CodeRepositoryIndex will\nalso be deleted. (Otherwise, the request will only work if the\nCodeRepositoryIndex has no RepositoryGroups.)",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6951,
            flag7356,
            flag11637,
            flag11946,
            flag12845,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex.\n+\nTo set the `code_repository_index` attribute:\n* provide the argument `code_repository_index` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a code repository index instance",
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
            flag6951,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex.\n+\nTo set the `code_repository_index` attribute:\n* provide the argument `code_repository_index` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all code repository index instances in a specified project and location",
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
          name: "repository-groups",
          description: "Manage Repository Group resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create a repository group for a given code repository index instance",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2107,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6389,
                flag6985,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--repositories",
                  description:
                    'List of repositories to group.\n+\n*branchPattern*:::\nThe Git branch pattern used for indexing in RE2 syntax.\nSee https://github.com/google/re2/wiki/syntax for syntax.\n+\n*resource*:::\nThe DeveloperConnect repository full resource name, relative resource name\nor resource URL to be indexed.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--repositories=branchPattern=string,resource=string --repositories=branchPattern=string,resource=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--repositories=\'[{"branchPattern": "string", "resource": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--repositories=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REPOSITORIES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag12848,
                {
                  name: "--resources",
                  description:
                    'List of third party connection resources.\n+\n*authConfig*:::\nThe authentication configuration for the resource.\n+\n*apiToken*::::\nAPI Token based authentication.\n+\n*tokenSecretResource*:::::\nThe secret key for the API token. Example:\nprojects/<project>/secrets/<secret>/versions/<version>.\n+\n*username*:::::\nThe username for the API token.\n+\n*connection*:::\nThe DeveloperConnect connection full resource name, relative resource name\nor resource URL to be indexed.\n+\n*sourceConfig*:::\nThe source configuration for the resource.\n+\n*confluenceConfig*::::\nConfluence source configuration.\n+\n*pageId*:::::\nThe optional page ID of the Confluence page.\n+\n*spaceKey*:::::\nThe space key of the Confluence space.\n+\n*uri*:::::\nThe host address of the Confluence instance.\n+\n*type*:::\nThe type of the 3p resource.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string --resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--resources=\'[{"authConfig": {"apiToken": {"tokenSecretResource": "string", "username": "string"}}, "connection": "string", "sourceConfig": {"confluenceConfig": {"pageId": "string", "spaceKey": "string", "uri": "string"}}, "type": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--resources=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "RESOURCES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup.\n+\nTo set the `repository_group` attribute:\n* provide the argument `repository_group` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "Delete a repository group from a given code repository index instance",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2107,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6985,
                flag7356,
                flag11637,
                flag11946,
                flag12845,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup.\n+\nTo set the `repository_group` attribute:\n* provide the argument `repository_group` on the command line",
              },
            },
            {
              name: "describe",
              description: "Get details of a code repository index instance",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2107,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6985,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup.\n+\nTo set the `repository_group` attribute:\n* provide the argument `repository_group` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a code repository index repository group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2106,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag6760,
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
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repository_group or fully qualified identifier for the repository_group.\n+\nTo set the `repository_group` attribute:\n* provide the argument `repository_group` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List all repository group for a given code repository index instance",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--code-repository-index",
                  description:
                    "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex.\n+\nTo set the `code-repository-index` attribute:\n* provide the argument `--code-repository-index` on the command line",
                  args: {
                    name: "CODE_REPOSITORY_INDEX",
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
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location id of the codeRepositoryIndex resource.\n+\nTo set the `location` attribute:\n* provide the argument `--code-repository-index` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              name: "set-iam-policy",
              description:
                "Get the IAM policy for a code repository index repository group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2106,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6760,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "REPOSITORY_GROUP",
                  description:
                    "ID of the repository_group or fully qualified identifier for the repository_group.\n+\nTo set the `repository_group` attribute:\n* provide the argument `repository_group` on the command line",
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
              description: "Update the configuration of a repository group",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-repositories",
                  description:
                    'Add new value to repositories list. List of repositories to group.\n+\n*branchPattern*:::\nThe Git branch pattern used for indexing in RE2 syntax.\nSee https://github.com/google/re2/wiki/syntax for syntax.\n+\n*resource*:::\nThe DeveloperConnect repository full resource name, relative resource name\nor resource URL to be indexed.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-repositories=branchPattern=string,resource=string --add-repositories=branchPattern=string,resource=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-repositories=\'[{"branchPattern": "string", "resource": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-repositories=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_REPOSITORIES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-resources",
                  description:
                    'Add new value to resources list. List of third party connection resources.\n+\n*authConfig*:::\nThe authentication configuration for the resource.\n+\n*apiToken*::::\nAPI Token based authentication.\n+\n*tokenSecretResource*:::::\nThe secret key for the API token. Example:\nprojects/<project>/secrets/<secret>/versions/<version>.\n+\n*username*:::::\nThe username for the API token.\n+\n*connection*:::\nThe DeveloperConnect connection full resource name, relative resource name\nor resource URL to be indexed.\n+\n*sourceConfig*:::\nThe source configuration for the resource.\n+\n*confluenceConfig*::::\nConfluence source configuration.\n+\n*pageId*:::::\nThe optional page ID of the Confluence page.\n+\n*spaceKey*:::::\nThe space key of the Confluence space.\n+\n*uri*:::::\nThe host address of the Confluence instance.\n+\n*type*:::\nThe type of the 3p resource.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string --add-resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-resources=\'[{"authConfig": {"apiToken": {"tokenSecretResource": "string", "username": "string"}}, "connection": "string", "sourceConfig": {"confluenceConfig": {"pageId": "string", "spaceKey": "string", "uri": "string"}}, "type": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-resources=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_RESOURCES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                flag1721,
                {
                  name: "--clear-repositories",
                  description: "Clear repositories value and set to empty list",
                },
                {
                  name: "--clear-resources",
                  description: "Clear resources value and set to empty list",
                },
                flag2107,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6430,
                flag6985,
                flag7356,
                flag11637,
                flag11946,
                flag12641,
                {
                  name: "--remove-repositories",
                  description:
                    'Remove existing value from repositories list. List of repositories to group.\n+\n*branchPattern*:::\nThe Git branch pattern used for indexing in RE2 syntax.\nSee https://github.com/google/re2/wiki/syntax for syntax.\n+\n*resource*:::\nThe DeveloperConnect repository full resource name, relative resource name\nor resource URL to be indexed.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-repositories=branchPattern=string,resource=string --remove-repositories=branchPattern=string,resource=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-repositories=\'[{"branchPattern": "string", "resource": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-repositories=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_REPOSITORIES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-resources",
                  description:
                    'Remove existing value from resources list. List of third party connection resources.\n+\n*authConfig*:::\nThe authentication configuration for the resource.\n+\n*apiToken*::::\nAPI Token based authentication.\n+\n*tokenSecretResource*:::::\nThe secret key for the API token. Example:\nprojects/<project>/secrets/<secret>/versions/<version>.\n+\n*username*:::::\nThe username for the API token.\n+\n*connection*:::\nThe DeveloperConnect connection full resource name, relative resource name\nor resource URL to be indexed.\n+\n*sourceConfig*:::\nThe source configuration for the resource.\n+\n*confluenceConfig*::::\nConfluence source configuration.\n+\n*pageId*:::::\nThe optional page ID of the Confluence page.\n+\n*spaceKey*:::::\nThe space key of the Confluence space.\n+\n*uri*:::::\nThe host address of the Confluence instance.\n+\n*type*:::\nThe type of the 3p resource.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string --remove-resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-resources=\'[{"authConfig": {"apiToken": {"tokenSecretResource": "string", "username": "string"}}, "connection": "string", "sourceConfig": {"confluenceConfig": {"pageId": "string", "spaceKey": "string", "uri": "string"}}, "type": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-resources=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_RESOURCES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--repositories",
                  description:
                    'Set repositories to new value. List of repositories to group.\n+\n*branchPattern*:::\nThe Git branch pattern used for indexing in RE2 syntax.\nSee https://github.com/google/re2/wiki/syntax for syntax.\n+\n*resource*:::\nThe DeveloperConnect repository full resource name, relative resource name\nor resource URL to be indexed.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--repositories=branchPattern=string,resource=string --repositories=branchPattern=string,resource=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--repositories=\'[{"branchPattern": "string", "resource": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--repositories=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REPOSITORIES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag12848,
                {
                  name: "--resources",
                  description:
                    'Set resources to new value. List of third party connection resources.\n+\n*authConfig*:::\nThe authentication configuration for the resource.\n+\n*apiToken*::::\nAPI Token based authentication.\n+\n*tokenSecretResource*:::::\nThe secret key for the API token. Example:\nprojects/<project>/secrets/<secret>/versions/<version>.\n+\n*username*:::::\nThe username for the API token.\n+\n*connection*:::\nThe DeveloperConnect connection full resource name, relative resource name\nor resource URL to be indexed.\n+\n*sourceConfig*:::\nThe source configuration for the resource.\n+\n*confluenceConfig*::::\nConfluence source configuration.\n+\n*pageId*:::::\nThe optional page ID of the Confluence page.\n+\n*spaceKey*:::::\nThe space key of the Confluence space.\n+\n*uri*:::::\nThe host address of the Confluence instance.\n+\n*type*:::\nThe type of the 3p resource.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string --resources=authConfig={apiToken={tokenSecretResource=string,username=string}},connection=string,sourceConfig={confluenceConfig={pageId=string,spaceKey=string,uri=string}},type=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--resources=\'[{"authConfig": {"apiToken": {"tokenSecretResource": "string", "username": "string"}}, "connection": "string", "sourceConfig": {"confluenceConfig": {"pageId": "string", "spaceKey": "string", "uri": "string"}}, "type": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--resources=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "RESOURCES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPOSITORY_GROUP",
                description:
                  "ID of the repositoryGroup or fully qualified identifier for the repositoryGroup.\n+\nTo set the `repository_group` attribute:\n* provide the argument `repository_group` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the configuration of a code repository index instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1721,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6430,
            flag6951,
            flag7356,
            flag11637,
            flag11946,
            flag12641,
            flag12848,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_REPOSITORY_INDEX",
            description:
              "ID of the codeRepositoryIndex or fully qualified identifier for the codeRepositoryIndex.\n+\nTo set the `code_repository_index` attribute:\n* provide the argument `code_repository_index` on the command line",
          },
        },
      ],
    },
    {
      name: "code-tools-settings",
      description: "Manage Code Tools Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create codeToolsSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--enabled-tool",
              description:
                'Required, Represents the full set of enabled tools.\n+\n*accountConnector*:::\nLink to the Dev Connect Account Connector that holds the user credentials.\nprojects/{project}/locations/{location}/accountConnectors/{account_connector_id}.\n+\n*config*:::\nConfiguration parameters for the tool.\n+\n*key*::::\nKey of the configuration item.\n+\n*value*::::\nValue of the configuration item.\n+\n*handle*:::\nHandle used to invoke the tool.\n+\n*tool*:::\nLink to the Tool.\n+\n*uriOverride*:::\nOverridden URI, if allowed by Tool.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string --enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--enabled-tool=\'[{"accountConnector": "string", "config": [{"key": "string", "value": "string"}], "handle": "string", "tool": "string", "uriOverride": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--enabled-tool=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENABLED_TOOL",
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
            flag6389,
            flag6953,
            flag7356,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting.\n+\nTo set the `code_tools_setting` attribute:\n* provide the argument `code_tools_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete codeToolsSettings",
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
                "If set to true, any code tools settings from this publisher will\nalso be deleted.\n(Otherwise, the request will only work if the publisher has no books.)",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6953,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting.\n+\nTo set the `code_tools_setting` attribute:\n* provide the argument `code_tools_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe codeToolsSettings",
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
            flag6953,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting.\n+\nTo set the `code_tools_setting` attribute:\n* provide the argument `code_tools_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List codeToolsSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2109,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6389,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2109,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2109,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--code-tools-setting",
                  description:
                    "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting.\n+\nTo set the `code-tools-setting` attribute:\n* provide the argument `--code-tools-setting` on the command line",
                  args: {
                    name: "CODE_TOOLS_SETTING",
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
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location id of the codeToolsSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--code-tools-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2109,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update codeToolsSettings",
          options: [
            flag42,
            flag46,
            {
              name: "--add-enabled-tool",
              description:
                'Add new value to enabled_tool list. Represents the full set of enabled tools.\n+\n*accountConnector*:::\nLink to the Dev Connect Account Connector that holds the user credentials.\nprojects/{project}/locations/{location}/accountConnectors/{account_connector_id}.\n+\n*config*:::\nConfiguration parameters for the tool.\n+\n*key*::::\nKey of the configuration item.\n+\n*value*::::\nValue of the configuration item.\n+\n*handle*:::\nHandle used to invoke the tool.\n+\n*tool*:::\nLink to the Tool.\n+\n*uriOverride*:::\nOverridden URI, if allowed by Tool.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string --add-enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-enabled-tool=\'[{"accountConnector": "string", "config": [{"key": "string", "value": "string"}], "handle": "string", "tool": "string", "uriOverride": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-enabled-tool=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_ENABLED_TOOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-enabled-tool",
              description: "Clear enabled_tool value and set to empty list",
            },
            flag1721,
            flag2292,
            {
              name: "--enabled-tool",
              description:
                'Set enabled_tool to new value. Represents the full set of enabled tools.\n+\n*accountConnector*:::\nLink to the Dev Connect Account Connector that holds the user credentials.\nprojects/{project}/locations/{location}/accountConnectors/{account_connector_id}.\n+\n*config*:::\nConfiguration parameters for the tool.\n+\n*key*::::\nKey of the configuration item.\n+\n*value*::::\nValue of the configuration item.\n+\n*handle*:::\nHandle used to invoke the tool.\n+\n*tool*:::\nLink to the Tool.\n+\n*uriOverride*:::\nOverridden URI, if allowed by Tool.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string --enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--enabled-tool=\'[{"accountConnector": "string", "config": [{"key": "string", "value": "string"}], "handle": "string", "tool": "string", "uriOverride": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--enabled-tool=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ENABLED_TOOL",
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
            flag6430,
            flag6953,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-enabled-tool",
              description:
                'Remove existing value from enabled_tool list. Represents the full set of enabled tools.\n+\n*accountConnector*:::\nLink to the Dev Connect Account Connector that holds the user credentials.\nprojects/{project}/locations/{location}/accountConnectors/{account_connector_id}.\n+\n*config*:::\nConfiguration parameters for the tool.\n+\n*key*::::\nKey of the configuration item.\n+\n*value*::::\nValue of the configuration item.\n+\n*handle*:::\nHandle used to invoke the tool.\n+\n*tool*:::\nLink to the Tool.\n+\n*uriOverride*:::\nOverridden URI, if allowed by Tool.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string --remove-enabled-tool=accountConnector=string,config=[{key=string,value=string}],handle=string,tool=string,uriOverride=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-enabled-tool=\'[{"accountConnector": "string", "config": [{"key": "string", "value": "string"}], "handle": "string", "tool": "string", "uriOverride": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-enabled-tool=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ENABLED_TOOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CODE_TOOLS_SETTING",
            description:
              "ID of the codeToolsSetting or fully qualified identifier for the codeToolsSetting.\n+\nTo set the `code_tools_setting` attribute:\n* provide the argument `code_tools_setting` on the command line",
          },
        },
      ],
    },
    {
      name: "data-sharing-with-google-settings",
      description: "Manage Data Sharing With Google Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create dataSharingWithGoogleSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--enable-data-sharing",
              description:
                "Whether data sharing should be enabled in GA products",
            },
            {
              name: "--enable-preview-data-sharing",
              description:
                "Whether data sharing should be enabled in Preview products",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6389,
            flag6959,
            flag7356,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting.\n+\nTo set the `data_sharing_with_google_setting` attribute:\n* provide the argument `data_sharing_with_google_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete dataSharingWithGoogleSettings",
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
            flag6959,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting.\n+\nTo set the `data_sharing_with_google_setting` attribute:\n* provide the argument `data_sharing_with_google_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe dataSharingWithGoogleSettings",
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
            flag6959,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting.\n+\nTo set the `data_sharing_with_google_setting` attribute:\n* provide the argument `data_sharing_with_google_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List dataSharingWithGoogleSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2712,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6389,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2712,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2712,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--data-sharing-with-google-setting",
                  description:
                    "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting.\n+\nTo set the `data-sharing-with-google-setting` attribute:\n* provide the argument `--data-sharing-with-google-setting` on the command line",
                  args: {
                    name: "DATA_SHARING_WITH_GOOGLE_SETTING",
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
                    "The location id of the dataSharingWithGoogleSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--data-sharing-with-google-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2292,
                flag2712,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update dataSharingWithGoogleSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1721,
            flag2292,
            {
              name: "--enable-data-sharing",
              description:
                "Whether data sharing should be enabled in GA products. Use *--enable-data-sharing* to enable and *--no-enable-data-sharing* to disable",
            },
            {
              name: "--enable-preview-data-sharing",
              description:
                "Whether data sharing should be enabled in Preview products. Use *--enable-preview-data-sharing* to enable and *--no-enable-preview-data-sharing* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6430,
            flag6959,
            flag7356,
            flag11637,
            flag11946,
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATA_SHARING_WITH_GOOGLE_SETTING",
            description:
              "ID of the dataSharingWithGoogleSetting or fully qualified identifier for the dataSharingWithGoogleSetting.\n+\nTo set the `data_sharing_with_google_setting` attribute:\n* provide the argument `data_sharing_with_google_setting` on the command line",
          },
        },
      ],
    },
    {
      name: "gda-observability-settings",
      description: "Manage Gda Observability Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create gdaObservabilitySettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2482,
            flag2484,
            flag2486,
            flag2488,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6389,
            flag6965,
            flag7356,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting.\n+\nTo set the `gda_observability_setting` attribute:\n* provide the argument `gda_observability_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete gdaObservabilitySettings",
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
            flag6965,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting.\n+\nTo set the `gda_observability_setting` attribute:\n* provide the argument `gda_observability_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe gdaObservabilitySettings",
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
            flag6965,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting.\n+\nTo set the `gda_observability_setting` attribute:\n* provide the argument `gda_observability_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List gdaObservabilitySettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5200,
                flag5453,
                flag5699,
                flag6389,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5200,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5200,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gda-observability-setting",
                  description:
                    "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting.\n+\nTo set the `gda-observability-setting` attribute:\n* provide the argument `--gda-observability-setting` on the command line",
                  args: {
                    name: "GDA_OBSERVABILITY_SETTING",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location id of the gdaObservabilitySetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--gda-observability-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5200,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update gdaObservabilitySettings",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-conversational-analytics-setting",
              description:
                "Set gdaObservabilitySetting.conversationalAnalyticsSetting back to default value",
            },
            flag1721,
            flag2292,
            flag2481,
            flag2483,
            flag2485,
            flag2487,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6430,
            flag6965,
            flag7356,
            flag11637,
            flag11946,
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GDA_OBSERVABILITY_SETTING",
            description:
              "ID of the gdaObservabilitySetting or fully qualified identifier for the gdaObservabilitySetting.\n+\nTo set the `gda_observability_setting` attribute:\n* provide the argument `gda_observability_setting` on the command line",
          },
        },
      ],
    },
    {
      name: "gemini-gcp-enablement-settings",
      description: "Manage Gemini Gcp Enablement Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create geminiGcpEnablementSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2631,
            {
              name: "--disable-web-grounding",
              description:
                "Whether web grounding should be disabled.\nDEPRECATED: Use web_grounding_type instead",
            },
            {
              name: "--enable-customer-data-sharing",
              description: "Not implemented",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5202,
            flag5453,
            flag5699,
            flag6389,
            flag6967,
            flag7356,
            {
              name: "--mutations-enabled",
              description:
                "Indicates whether resource mutations are enabled.\nIf not set, resource mutations are disabled",
            },
            {
              name: "--proactive-agents-enabled",
              description:
                "Indicates whether proactive agents are enabled.\nIf not set, proactive agents are disabled",
            },
            flag11637,
            flag11946,
            flag12491,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
            flag15540,
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting.\n+\nTo set the `gemini_gcp_enablement_setting` attribute:\n* provide the argument `gemini_gcp_enablement_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete geminiGcpEnablementSettings",
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
            flag6967,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting.\n+\nTo set the `gemini_gcp_enablement_setting` attribute:\n* provide the argument `gemini_gcp_enablement_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe geminiGcpEnablementSettings",
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
            flag6967,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting.\n+\nTo set the `gemini_gcp_enablement_setting` attribute:\n* provide the argument `gemini_gcp_enablement_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List geminiGcpEnablementSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5204,
                flag5453,
                flag5699,
                flag6389,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5204,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5204,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gemini-gcp-enablement-setting",
                  description:
                    "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting.\n+\nTo set the `gemini-gcp-enablement-setting` attribute:\n* provide the argument `--gemini-gcp-enablement-setting` on the command line",
                  args: {
                    name: "GEMINI_GCP_ENABLEMENT_SETTING",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location id of the geminiGcpEnablementSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--gemini-gcp-enablement-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5204,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update geminiGcpEnablementSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1721,
            flag2292,
            flag2631,
            {
              name: "--disable-web-grounding",
              description:
                "Whether web grounding should be disabled.\nDEPRECATED: Use web_grounding_type instead. Use *--disable-web-grounding* to enable and *--no-disable-web-grounding* to disable",
            },
            {
              name: "--enable-customer-data-sharing",
              description:
                "Not implemented. Use *--enable-customer-data-sharing* to enable and *--no-enable-customer-data-sharing* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5202,
            flag5453,
            flag5699,
            flag6430,
            flag6967,
            flag7356,
            {
              name: "--mutations-enabled",
              description:
                "Indicates whether resource mutations are enabled.\nIf not set, resource mutations are disabled. Use *--mutations-enabled* to enable and *--no-mutations-enabled* to disable",
            },
            {
              name: "--proactive-agents-enabled",
              description:
                "Indicates whether proactive agents are enabled.\nIf not set, proactive agents are disabled. Use *--proactive-agents-enabled* to enable and *--no-proactive-agents-enabled* to disable",
            },
            flag11637,
            flag11946,
            flag12491,
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
            flag15540,
          ],
          args: {
            name: "GEMINI_GCP_ENABLEMENT_SETTING",
            description:
              "ID of the geminiGcpEnablementSetting or fully qualified identifier for the geminiGcpEnablementSetting.\n+\nTo set the `gemini_gcp_enablement_setting` attribute:\n* provide the argument `gemini_gcp_enablement_setting` on the command line",
          },
        },
      ],
    },
    {
      name: "gibq-observability-settings",
      description: "Manage Gibq Observability Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create gibqObservabilitySettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2482,
            flag2484,
            flag2486,
            flag2488,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6389,
            flag6969,
            flag7356,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting.\n+\nTo set the `gibq_observability_setting` attribute:\n* provide the argument `gibq_observability_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete gibqObservabilitySettings",
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
            flag6969,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting.\n+\nTo set the `gibq_observability_setting` attribute:\n* provide the argument `gibq_observability_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe gibqObservabilitySettings",
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
            flag6969,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting.\n+\nTo set the `gibq_observability_setting` attribute:\n* provide the argument `gibq_observability_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List gibqObservabilitySettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5221,
                flag5453,
                flag5699,
                flag6389,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5221,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5221,
                flag5453,
                flag5699,
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gibq-observability-setting",
                  description:
                    "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting.\n+\nTo set the `gibq-observability-setting` attribute:\n* provide the argument `--gibq-observability-setting` on the command line",
                  args: {
                    name: "GIBQ_OBSERVABILITY_SETTING",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location id of the gibqObservabilitySetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--gibq-observability-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5221,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update gibqObservabilitySettings",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-conversational-analytics-setting",
              description:
                "Set gibqObservabilitySetting.conversationalAnalyticsSetting back to default value",
            },
            flag1721,
            flag2292,
            flag2481,
            flag2483,
            flag2485,
            flag2487,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6430,
            flag6969,
            flag7356,
            flag11637,
            flag11946,
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GIBQ_OBSERVABILITY_SETTING",
            description:
              "ID of the gibqObservabilitySetting or fully qualified identifier for the gibqObservabilitySetting.\n+\nTo set the `gibq_observability_setting` attribute:\n* provide the argument `gibq_observability_setting` on the command line",
          },
        },
      ],
    },
    {
      name: "logging-settings",
      description: "Manage Logging Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create loggingSettings",
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
            flag6389,
            flag6972,
            flag7356,
            { name: "--log-metadata", description: "Whether to log metadata" },
            {
              name: "--log-prompts-and-responses",
              description: "Whether to log prompts and responses",
            },
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting.\n+\nTo set the `logging_setting` attribute:\n* provide the argument `logging_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete loggingSettings",
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
            flag6972,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting.\n+\nTo set the `logging_setting` attribute:\n* provide the argument `logging_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe loggingSettings",
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
            flag6972,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting.\n+\nTo set the `logging_setting` attribute:\n* provide the argument `logging_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List loggingSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
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
                flag6389,
                flag6989,
                flag7356,
                flag7386,
                flag11623,
                flag11637,
                flag11946,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
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
                flag6989,
                flag7356,
                flag7386,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
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
                flag6989,
                flag7356,
                flag7386,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                    "The location id of the loggingSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--logging-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--logging-setting",
                  description:
                    "ID of the loggingSetting or fully qualified identifier for the loggingSetting.\n+\nTo set the `logging-setting` attribute:\n* provide the argument `--logging-setting` on the command line",
                  args: {
                    name: "LOGGING_SETTING",
                    description: "String",
                    suggestions: [],
                  },
                },
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
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag7386,
                flag11623,
                flag11637,
                flag11946,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update loggingSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1721,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6430,
            flag6972,
            flag7356,
            {
              name: "--log-metadata",
              description:
                "Whether to log metadata. Use *--log-metadata* to enable and *--no-log-metadata* to disable",
            },
            {
              name: "--log-prompts-and-responses",
              description:
                "Whether to log prompts and responses. Use *--log-prompts-and-responses* to enable and *--no-log-prompts-and-responses* to disable",
            },
            flag11637,
            flag11946,
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGGING_SETTING",
            description:
              "ID of the loggingSetting or fully qualified identifier for the loggingSetting.\n+\nTo set the `logging_setting` attribute:\n* provide the argument `logging_setting` on the command line",
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
            flag6977,
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
            flag6977,
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
            flag6977,
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
            flag6977,
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
      name: "release-channel-settings",
      description: "Manage Release Channel Setting resources",
      subcommands: [
        {
          name: "create",
          description: "Create releaseChannelSettings",
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
            flag6389,
            flag6984,
            flag7356,
            flag11637,
            flag11946,
            flag12490,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting.\n+\nTo set the `release_channel_setting` attribute:\n* provide the argument `release_channel_setting` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete releaseChannelSettings",
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
            flag6984,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting.\n+\nTo set the `release_channel_setting` attribute:\n* provide the argument `release_channel_setting` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe releaseChannelSettings",
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
            flag6984,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting.\n+\nTo set the `release_channel_setting` attribute:\n* provide the argument `release_channel_setting` on the command line",
          },
        },
        {
          name: "list",
          description: "List releaseChannelSettings",
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
          name: "setting-bindings",
          description: "Manage Setting Binding resources",
          subcommands: [
            {
              name: "create",
              description: "Create settingBindings",
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
                flag6389,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12485,
                flag12847,
                flag14770,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete settingBindings",
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
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12485,
                flag12844,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe settingBindings",
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
                flag6989,
                flag7356,
                flag11637,
                flag11946,
                flag12485,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
            {
              name: "list",
              description: "List settingBindings",
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
                    "The location id of the releaseChannelSetting resource.\n+\nTo set the `location` attribute:\n* provide the argument `--release-channel-setting` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                  name: "--release-channel-setting",
                  description:
                    "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting.\n+\nTo set the `release-channel-setting` attribute:\n* provide the argument `--release-channel-setting` on the command line",
                  args: {
                    name: "RELEASE_CHANNEL_SETTING",
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
              name: "update",
              description: "Update settingBindings",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1721,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6430,
                flag6989,
                flag7356,
                flag11623,
                flag11637,
                flag11946,
                flag12485,
                flag12641,
                flag12847,
                flag14769,
                flag14975,
                flag15173,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SETTING_BINDING",
                description:
                  "ID of the settingBinding or fully qualified identifier for the settingBinding.\n+\nTo set the `setting_binding` attribute:\n* provide the argument `setting_binding` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update releaseChannelSettings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1721,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6430,
            flag6984,
            flag7356,
            flag11637,
            flag11946,
            flag12490,
            flag12641,
            flag12847,
            flag14975,
            flag15173,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE_CHANNEL_SETTING",
            description:
              "ID of the releaseChannelSetting or fully qualified identifier for the releaseChannelSetting.\n+\nTo set the `release_channel_setting` attribute:\n* provide the argument `release_channel_setting` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
