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
const flag704: Fig.Option = {
  name: "--asset",
  description:
    "Cloud SCC specific asset. It's derived from the the asset's relative resource name.\nSee: https://cloud.google.com/apis/design/resource_names#relative_resource_name.\nFor Example, for the given asset name: \"organizations/123/assets/456\", 456 represents\nasset id",
  args: { name: "ASSET", description: "String", suggestions: [] },
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
const flag2167: Fig.Option = {
  name: "--compare-duration",
  description:
    "(DEPRECATED) \n      When compare_duration is set, the result's \"state_change\" attribute is\n      updated to indicate whether the finding had its state changed, the\n      finding's state remained unchanged, or if the finding was added during\n      the compare_duration period of time that precedes the read_time. This\n      is the time between (read_time - compare_duration) and read_time. The\n      state_change value is derived based on the presence and state of the\n      finding at the two points in time. Intermediate state changes between\n      the two times don't affect the result. For example, the results aren't\n      affected if the finding is made inactive and then active again.\n      Possible \"state_change\" values when compare_duration is specified:\n+\n      * 'CHANGED': indicates that the finding was present at the start of\n        compare_duration, but changed its state at read_time.\n+\n      * 'UNCHANGED': indicates that the finding was present at the start of\n        compare_duration and did not change state at read_time.\n+\n      * 'ADDED': indicates that the finding was not present at the start of\n        compare_duration, but was present at read_time.\n+\n      * 'REMOVED': indicates that the finding was present at the start of\n        compare_duration, but was not present at read_time.\n+\n      If compare_duration is not specified, then the only possible\n      state_change is 'UNUSED', which will be the state_change set for all\n      findings present at read_time. If this field is set then 'state_change'\n      must be a specified field in 'group_by'. See $ gcloud topic datetimes\n      for information on supported duration formats.\n+\nThe --compare-duration option is deprecated.\nFor more information, [see the deprecation notice](https://cloud.google.com/security-command-center/docs/release-notes#April_15_2024)\non the SCC release notes page",
  args: { name: "COMPARE_DURATION", description: "String", suggestions: [] },
};
const flag2168: Fig.Option = {
  name: "--compare-duration",
  description:
    'The result\'s "state_change" attribute is updated to indicate whether the asset was added, removed,\nor remained present during the compare_duration period of time that precedes the read_time. See\n`$ gcloud topic datetimes` for information on supported duration formats',
  args: {
    name: "COMPARE_DURATION",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2610: Fig.Option = {
  name: "--custom-config-file",
  description:
    "Path to a JSON custom configuration file of the ETD custom module. Use a full or relative path to a local file containing the value of custom_config_file",
  args: {
    name: "CUSTOM_CONFIG",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2613: Fig.Option = {
  name: "--custom-config-from-file",
  description:
    "Path to a YAML custom configuration file. Use a full or relative path to a local file containing the value of custom_config",
  args: {
    name: "CUSTOM_CONFIG",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2615: Fig.Option = {
  name: "--custom-config-from-file",
  description:
    "Path to a YAML file that contains the configuration for the Security Health Analytics custom module. Use a full or relative path to a local file containing the value of custom_config",
  args: {
    name: "CUSTOM_CONFIG_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag3334: Fig.Option = {
  name: "--description",
  description: "The text that will be used to describe a BigQuery export",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3335: Fig.Option = {
  name: "--description",
  description: "The text that will be used to describe a mute configuration",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3336: Fig.Option = {
  name: "--description",
  description:
    "The text that will be used to describe a notification configuration",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3807: Fig.Option = {
  name: "--display-name",
  description: "The display name of the custom module",
  args: { name: "DISPLAY-NAME", description: "String", suggestions: [] },
};
const flag4514: Fig.Option = {
  name: "--etag",
  description:
    "Etag is an optional flag. If the provided Etag doesn't match the server generated Etag, the delete operation won't proceed",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4665: Fig.Option = {
  name: "--expiry-time",
  description:
    "The expiry of the mute config. Only applicable for dynamic\n      configs. If the expiry is set, when the config expires, it is removed from\n      all findings. See `$ gcloud topic datetimes` for information on\n      supported time formats",
  args: { name: "EXPIRY_TIME", description: "String", suggestions: [] },
};
const flag4728: Fig.Option = {
  name: "--external-uri",
  description:
    "URI that, if available, points to a web page outside of Cloud SCC (Security Command Center)\n    where additional information about the finding can be found. This field is guaranteed to be\n    either empty or a well formed URL",
  args: { name: "EXTERNAL_URI", description: "String", suggestions: [] },
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4863: Fig.Option = {
  name: "--filter",
  description:
    "The filter string which will applied to findings muted by a BigQuery export",
  args: { name: "FILTER", description: "String", suggestions: [] },
};
const flag4864: Fig.Option = {
  name: "--filter",
  description:
    "The filter string which will applied to findings muted by a mute configuration",
  args: { name: "FILTER", description: "String", suggestions: [] },
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
const flag4931: Fig.Option = {
  name: "--folder",
  description: "Folder associated with the custom module",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
};
const flag4935: Fig.Option = {
  name: "--folder",
  description:
    "Folder from which to get the custom module details. Formatted as `folders/456`\nor just `456`",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag4992: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the BigQuery export resides. Formatted as folders/456 or\njust 456",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag4993: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the Security Health Analytics custom module resides. Formatted as `folders/456` or just `456`",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag4996: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the mute config resides. Formatted as ``folders/456'' or just ``456''",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag4997: Fig.Option = {
  name: "--folder",
  description:
    "Folder where the notification config resides. Formatted as\n``folders/456'' or just ``456''",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5006: Fig.Option = {
  name: "--folder",
  description: "The folder ID (e.g., 456) that contains the finding",
  args: { name: "FOLDER", description: "String", suggestions: [] },
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
const flag6731: Fig.Option = {
  name: "--location",
  description:
    "ID of the location where the resource exists (for example, global).\n+\n\nTo set the `location` attribute:\n* provide the argument `posture_deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6733: Fig.Option = {
  name: "--location",
  description:
    "ID of the location where the resource exists (for example, global).\n+\n\nTo set the `location` attribute:\n* provide the argument `posture` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7093: Fig.Option = {
  name: "--location",
  description:
    "When data residency controls are enabled, this attribute specifies the location in which the resource is located and applicable",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7106: Fig.Option = {
  name: "--location",
  description:
    "When data residency controls are enabled, this attribute specifies the location in which\nthe resource is located and applicable. The `location` attribute can be\nprovided as part of the fully specified resource name or with the `--location`\nargument on the command line. The default location is `global`.\n+\nNOTE: If you override the endpoint to a [regional endpoint](https://cloud.google.com/security-command-center/docs/reference/rest/index.html?rep_location=global#regional-service-endpoint)\nyou must specify the correct [data location](https://cloud.google.com/security-command-center/docs/data-residency-support#locations) using this flag.\nThe default location on this command is unrelated to the default location\nthat is specified when data residency controls are enabled\nfor Security Command Center.\n+\nNOTE: If no location is specified, the default location is `global` AND\nthe request will be routed to the SCC V1 API. To use the SCC V2 API - please explicitly specify the flag",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7978: Fig.Option = {
  name: "--module-type",
  description:
    "Type of the custom module. For a list of valid module types please visit https://cloud.google.com/security-command-center/docs/custom-modules-etd-overview#custom_modules_and_templates",
  args: { name: "MODULE_TYPE", description: "String", suggestions: [] },
};
const flag10778: Fig.Option = {
  name: "--organization",
  description:
    "(Optional) If the full resource name isn't provided e.g. organizations/123, then provide the\norganization id which is the suffix of the organization. Example: organizations/123, the id is\n123.\n+\n\nTo set the `organization` attribute:\n* provide the argument `asset` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* Set the organization property in configuration using `gcloud config set scc/organization` if it is not specified in command line.",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10799: Fig.Option = {
  name: "--organization",
  description:
    "ID of the organization which is the parent of the resource.\n+\n\nTo set the `organization` attribute:\n* provide the argument `posture_deployment` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10801: Fig.Option = {
  name: "--organization",
  description:
    "ID of the organization which is the parent of the resource.\n+\n\nTo set the `organization` attribute:\n* provide the argument `posture` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10819: Fig.Option = {
  name: "--organization",
  description:
    "Organization from which to get the custom module details. Formatted as\n`organizations/123` or just `123`",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10850: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the BigQuery export resides. Formatted as\norganizations/123 or just 123",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10851: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the Security Health Analytics custom module resides. Formatted as `organizations/123` or just `123`",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10854: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the mute config resides. Formatted as ``organizations/123'' or just ``123''",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10855: Fig.Option = {
  name: "--organization",
  description:
    "Organization where the notification config resides. Formatted as\n``organizations/123'' or just ``123''",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10873: Fig.Option = {
  name: "--organization",
  description: "The organization ID (e.g., 123) that contains the finding",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10874: Fig.Option = {
  name: "--organization",
  description: "The organization ID (e.g., 123) that contains the resource",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10911: Fig.Option = {
  name: "--organization",
  description: "Organization associated with the custom module",
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
const flag11077: Fig.Option = {
  name: "--page-token",
  description:
    "Response objects will return a non-null value for page-token to\nindicate that there is at least one additional page of data. User can\neither directly request that page by specifying the page-token\nexplicitly or let gcloud fetch one-page-at-a-time",
  args: { name: "PAGE_TOKEN", description: "String", suggestions: [] },
};
const flag11128: Fig.Option = {
  name: "--parent",
  description:
    "Parent associated with the custom module. Can be one of\n              organizations/<id>, projects/<id or name>, folders/<id>",
  args: { name: "PARENT", description: "String", suggestions: [] },
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
const flag12000: Fig.Option = {
  name: "--read-time",
  description:
    "(DEPRECATED) \n      Time used as a reference point when filtering. Absence of this field\n      will default to the API's version of NOW. See $ gcloud topic datetimes\n      for information on supported time formats.\n+\nThe --read-time option is deprecated.\nFor more information, [see the deprecation notice](https://cloud.google.com/security-command-center/docs/release-notes#April_15_2024)\non the SCC release notes page",
  args: { name: "READ_TIME", description: "String", suggestions: [] },
};
const flag12001: Fig.Option = {
  name: "--read-time",
  description:
    "Time used as a reference point when filtering. Absence of this field will default to the API's\nversion of NOW. See `$ gcloud topic datetimes` for information on supported time formats",
  args: {
    name: "READ_TIME",
    description: "Googlecloudsdk.core.util.times:ParseDateTime",
    suggestions: [],
  },
};
const flag12988: Fig.Option = {
  name: "--resource-name",
  description:
    'Asset\'s resource name. Full resource name of the Google Cloud Platform resource\nthis asset represents. This field is immutable after create time. See:\nhttps://cloud.google.com/apis/design/resource_names#full_resource_name.\nFor Example: "//cloudresourcemanager.googleapis.com/projects/1234567890123" could be the\nresource-name for a project',
  args: { name: "RESOURCE_NAME", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14077: Fig.Option = {
  name: "--source-properties",
  description:
    'Source specific properties. These properties are managed by the\n      source that writes the finding. The key names in the source_properties map\n      must be between 1 and 255 characters, and must start with a letter and\n      contain alphanumeric characters or underscores only. For example\n      "key1=val1,key2=val2"',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag14123: Fig.Option = {
  name: "--source",
  description: "Source id. Defaults to all sources",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14395: Fig.Option = {
  name: "--state",
  description:
    "State is one of: [ACTIVE, INACTIVE]. _STATE_ must be one of: *active*, *inactive*, *state-unspecified*",
  args: {
    name: "STATE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["active", "inactive", "state-unspecified"],
  },
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
const flag15364: Fig.Option = {
  name: "--validate-only",
  description:
    "If present, the request is validated (including IAM checks) but no action is taken",
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
  name: "scc",
  description: "Manage Cloud SCC resources",
  subcommands: [
    {
      name: "assets",
      description: "Manage Cloud SCC (Security Command Center) assets",
      subcommands: [
        {
          name: "describe",
          description:
            "*(DEPRECATED)*  Describe an asset given its resource name or asset id",
          options: [
            flag42,
            flag46,
            flag704,
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
            flag12988,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "get-parent",
          description:
            "*(DEPRECATED)*  Get the Parent for an asset given its resource name or asset id",
          options: [
            flag42,
            flag46,
            flag704,
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
            flag12988,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORGANIZATION",
            description:
              "ID of the organization or fully qualified identifier for the organization.\n+\nTo set the `organization` attribute:\n* provide the argument `organization` on the command line;\n* Set the organization property in configuration using `gcloud config set scc/organization` if it is not specified in command line.",
            isOptional: true,
          },
        },
        {
          name: "get-project",
          description:
            "*(DEPRECATED)*  Get the Project for an asset given its resource name or asset id",
          options: [
            flag42,
            flag46,
            flag704,
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
            flag12988,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORGANIZATION",
            description:
              "ID of the organization or fully qualified identifier for the organization.\n+\nTo set the `organization` attribute:\n* provide the argument `organization` on the command line;\n* Set the organization property in configuration using `gcloud config set scc/organization` if it is not specified in command line.",
            isOptional: true,
          },
        },
        {
          name: "group",
          description:
            "*(DEPRECATED)*  Filter an organization's assets and groups them by their specified properties",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2168,
            flag2292,
            {
              name: "--filter",
              description:
                "Expression is a list of one or more restrictions combined via logical operators\n'AND' and 'OR'. Parentheses are not supported, and 'OR' has higher precedence than\n'AND'. For example, 'update_time > 100 AND\nsecurity_center_properties.resource_type=\\\"google.cloud.resourcemanager.Organization\\\"'\nis a valid filter string",
              args: { name: "FILTER", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--group-by",
              description:
                "Expression that defines what asset fields to use for grouping (including 'state').\nString value should follow SQL syntax: comma separated list of fields.\nFor example: \"parent,resource_name\". The following fields are supported:\n* security_center_properties.resource_project\n* security_center_properties.resource_type\n* security_center_properties.resource_parent\n* state_change",
              args: {
                name: "GROUP_BY",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--page-size",
              description:
                "The maximum number of results to return in a single response. Default is\n10, minimum is 1, maximum is 1000",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--page-token",
              description:
                "Value returned by the last 'GroupAssetsResponse'; indicates\nthat this is a continuation of a prior 'GroupAssets' call, and that the\nsystem should return the next page of data",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12001,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)*  List Cloud Security Command Center assets",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2168,
            flag2292,
            {
              name: "--field-mask",
              description:
                'Field mask to specify the Asset fields to be listed in the response. An empty field mask will list all fields.\nExample field mask: "asset.security_center_properties.resource_type,asset.security_center_properties.resource_parent"',
              args: {
                name: "FIELD_MASK",
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
            flag7356,
            {
              name: "--order-by",
              description:
                'Expression that defines what fields and order to use for sorting.\nExample order by: "resource_properties.sort_prop ASC"',
              args: {
                name: "ORDER_BY",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            {
              name: "--page-token",
              description:
                "The value returned by the last 'ListAssetsResponse'; indicates\nthat this is a continuation of a prior 'ListAssets' call, and that the\nsystem should return the next page of data",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12001,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "list-marks",
          description: "*(DEPRECATED)*  List an assets's security marks",
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
            flag10778,
            flag11059,
            {
              name: "--page-token",
              description:
                "Response objects will return a non-null value for page-token to indicate that there is at least\none additional page of data. User can either directly request that page by specifying the\npage-token explicitly or let gcloud fetch one-page-at-a-time",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12001,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
        {
          name: "run-discovery",
          description:
            "*(DEPRECATED)*  Scan an organization for new/modified/deleted assets",
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
            name: "ORGANIZATION",
            description:
              "ID of the organization or fully qualified identifier for the organization.\n+\nTo set the `organization` attribute:\n* provide the argument `organization` on the command line;\n* Set the organization property in configuration using `gcloud config set scc/organization` if it is not specified in command line.",
            isOptional: true,
          },
        },
        {
          name: "update-marks",
          description:
            "Update Cloud Security Command Center asset's security marks",
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
            flag10778,
            flag11637,
            flag11946,
            {
              name: "--security-marks",
              description:
                'SecurityMarks resource to be passed as the request body. It\'s a key=value pair separated\nby comma (,). For example: --security-marks="key1=val1,key2=val2"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--start-time",
              description:
                "Time at which the updated SecurityMarks take effect. See `$ gcloud topic datetimes` for\ninformation on supported time formats",
              args: {
                name: "START_TIME",
                description: "Googlecloudsdk.core.util.times:ParseDateTime",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-mask",
              description:
                "Use update-mask if you want to selectively update marks represented by --security-marks\nflag. For example: --update-mask=\"marks.key1,marks.key2\". If you want to override all the\nmarks for the given asset either skip the update-mask flag or provide an empty value\n(--update-mask '') for it",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "ASSET",
            description:
              "ID of the asset or fully qualified identifier for the asset.\n+\nTo set the `asset` attribute:\n* provide the argument `asset` on the command line",
          },
        },
      ],
    },
    {
      name: "bqexports",
      description:
        "Manage Cloud SCC (Security Command Center) BigQuery exports",
      subcommands: [
        {
          name: "create",
          description: "Create a Security Command Center BigQuery export",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dataset",
              description: "The dataset to write findings updates to",
              args: { name: "DATASET", description: "String", suggestions: [] },
            },
            flag3334,
            flag4863,
            flag4900,
            flag4902,
            flag4992,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10850,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full\nresource name of the BigQuery export e.g.\n`organizations/123/bigQueryExports/my-bq-export`",
          },
        },
        {
          name: "delete",
          description: "Delete a Security Command Center BigQuery export",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4992,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10850,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full\nresource name of the BigQuery export e.g.\n`organizations/123/bigQueryExports/my-bq-export`",
          },
        },
        {
          name: "get",
          description: "Get a Security Command Center BigQuery export",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4992,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10850,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full\nresource name of the BigQuery export e.g.\n`organizations/123/bigQueryExports/my-bq-export`",
          },
        },
        {
          name: "list",
          description: "List Security Command Center BigQuery exports",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag4992,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7106,
            flag7356,
            flag10850,
            flag11059,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a Security Command Center BigQuery export",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dataset",
              description: "The dataset to write findings updates to",
              args: { name: "DATASET", description: "String", suggestions: [] },
            },
            flag3334,
            flag4863,
            flag4900,
            flag4902,
            flag4992,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10850,
            flag11946,
            flag14975,
            {
              name: "--update-mask",
              description:
                "Optional: If left unspecified (default), an update-mask is\nautomatically created using the flags specified in the command and only\nthose values are updated",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "BIG_QUERY_EXPORT",
            description:
              "ID of the BigQuery export e.g. `my-bq-export` or the full\nresource name of the BigQuery export e.g.\n`organizations/123/bigQueryExports/my-bq-export`",
          },
        },
      ],
    },
    {
      name: "custom-modules",
      description: "Manage Cloud SCC (Security Command Center) custom modules",
      subcommands: [
        {
          name: "sha",
          description: "Manage Security Health Analytics custom modules",
          subcommands: [
            {
              name: "create",
              description: "Create a Security Health Analytics custom module",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2615,
                {
                  name: "--display-name",
                  description:
                    "Sets the display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only",
                  args: {
                    name: "DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--enablement-state",
                  description:
                    "Sets the enablement state of the Security Health Analytics custom module. From the following list of possible enablement states, specify either enabled or disabled only. _ENABLEMENT_STATE_ must be one of: *disabled*, *enabled*, *enablement-state-unspecified*, *inherited*",
                  args: {
                    name: "ENABLEMENT_STATE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "disabled",
                      "enabled",
                      "enablement-state-unspecified",
                      "inherited",
                    ],
                  },
                },
                flag4900,
                flag4902,
                flag4993,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10851,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description: "Delete a Security Health Analytics custom module",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4993,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10851,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
            {
              name: "get",
              description:
                "Get the details of a Security Health Analytics custom module",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4935,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10819,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
            {
              name: "get-effective",
              description:
                "Get the details of a Security Health Analytics custom module with effective enablement state",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4935,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10819,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the effective Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
            {
              name: "list",
              description:
                "List the details of Security Health Analytics custom modules",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                {
                  name: "--folder",
                  description:
                    "Folder for listing the Security Health Analytics custom modules created at the current\nfolder level and inherited modules from CRM ancestors. Formatted as `folders/456` or\njust `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                {
                  name: "--organization",
                  description:
                    "Organization for listing the Security Health Analytics custom modules created at the\norganization level. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "list-descendant",
              description:
                "List the details of the resident and descendant Security Health Analytics custom modules",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                {
                  name: "--folder",
                  description:
                    "Folder for listing the Security Health Analytics custom modules created at the current\nfolder level and its child resources. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                {
                  name: "--organization",
                  description:
                    "Organization for listing the Security Health Analytics custom modules created at\nthe organization level and its child resources. Formatted as `organizations/123`\nor just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "list-effective",
              description:
                "List the details of Security Health Analytics custom modules with effective enablement states",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                {
                  name: "--folder",
                  description:
                    "Folder for listing the effective Security Health Analytics custom modules created at the\ncurrent folder level and inherited modules from CRM ancestors. Formatted as `folders/456`\nor just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                {
                  name: "--organization",
                  description:
                    "Organization for listing the effective Security Health Analytics custom modules created\nat the organization level. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "simulate",
              description:
                "Validates a Security Health Analytics custom module",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2615,
                flag4900,
                flag4902,
                {
                  name: "--folder",
                  description:
                    "Folder that will own the Security Health Analytics custom module. Formatted as `folders/456` or just `456`",
                  args: {
                    name: "FOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--organization",
                  description:
                    "Organization that will own the Security Health Analytics custom module. Formatted as `organizations/123` or just `123`",
                  args: {
                    name: "ORGANIZATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                {
                  name: "--resource-from-file",
                  description:
                    "Path to a YAML file that contains the resource data to validate the Security Health Analytics custom module against. Use a full or relative path to a local file containing the value of resource",
                  args: {
                    name: "RESOURCE_FROM_FILE",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:FileContents",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description: "Update a Security Health Analytics custom module",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--custom-config-from-file",
                  description:
                    "Path to a YAML file that contains the configuration for the Security Health Analytics custom module. Use a full or relative path to a local file containing the value of custom_config",
                  args: {
                    name: "CUSTOM_CONFIG_FROM_FILE",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:FileContents",
                    suggestions: [],
                  },
                },
                {
                  name: "--enablement-state",
                  description:
                    "Sets the enablement state of the Security Health Analytics custom module. From the following list of possible enablement states, specify either enabled, disabled or inherited only. _ENABLEMENT_STATE_ must be one of: *disabled*, *enabled*, *enablement-state-unspecified*, *inherited*",
                  args: {
                    name: "ENABLEMENT_STATE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "disabled",
                      "enabled",
                      "enablement-state-unspecified",
                      "inherited",
                    ],
                  },
                },
                flag4900,
                flag4902,
                flag4993,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10851,
                flag11946,
                flag14975,
                {
                  name: "--update-mask",
                  description:
                    "Optional: If left unspecified (default), an update-mask is automatically created using the\nflags specified in the command and only those values are updated",
                  args: {
                    name: "UPDATE_MASK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "CUSTOM_MODULE",
                description:
                  "ID or the full resource name of the Security Health Analytics custom module. If you specify the full resource name, you do not need to specify the --organization, --folder, or --project flags",
              },
            },
          ],
        },
      ],
    },
    {
      name: "findings",
      description: "Manage Cloud SCC (Security Command Center) findings",
      subcommands: [
        {
          name: "bulk-mute",
          description:
            "Bulk mute Security Command Center findings based on a filter",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--filter",
              description:
                "Expression that identifies findings that should be muted",
              args: { name: "FILTER", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            {
              name: "--folder",
              description:
                "Folder where the findings reside. Formatted as ``folders/456'' or just\n``456''",
              args: { name: "FOLDER", description: "String", suggestions: [] },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            {
              name: "--mute-state",
              description:
                "Desired mute state of the finding. _MUTE_STATE_ must be one of: *muted*, *undefined*",
              args: {
                name: "MUTE_STATE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["muted", "undefined"],
              },
            },
            {
              name: "--organization",
              description:
                "Organization where the findings reside. Formatted as\n``organizations/123'' or just ``123''",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "create",
          description: "Create a Security Command Center finding",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--category",
              description:
                "Taxonomy group within findings from a given source. Example:\nXSS_SCRIPTING",
              args: {
                name: "CATEGORY",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--event-time",
              description:
                "Time at which the event took place. For example, if the finding\n  represents an open firewall it would capture the time the open firewall\n  was detected. If event-time is not provided, it will default to UTC\n  version of NOW. See `$ gcloud topic datetimes` for information on\n  supported time formats",
              args: {
                name: "EVENT_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag4728,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            {
              name: "--organization",
              description:
                "(Optional) If the full resource name isn't provided e.g. organizations/123, then provide the\n              organization id which is the suffix of the organization. Example: organizations/123, the id is\n              123.\n+\nTo set the `organization` attribute:\n* provide the argument `finding` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* Set the organization property in configuration using `gcloud config set scc/organization`\n                  if it is not specified in command line.",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--resource-name",
              description:
                "Full resource name of the Google Cloud Platform resource this finding is\nfor",
              args: {
                name: "RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source",
              description:
                "(Optional) If the full resource name isn't provided e.g. organizations/123/sources/456, then\n              provide the source id which is the suffix of the source.\n              Example: organizations/123/sources/456, the id is 456.\n+\nTo set the `source` attribute:\n* provide the argument `finding` on the command line with a fully specified name;\n* provide the argument `--source` on the command line",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14077,
            flag14395,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding.\n+\nTo set the `finding` attribute:\n* provide the argument `finding` on the command line",
          },
        },
        {
          name: "export-to-bigquery",
          description: "Export Security Command Center findings to bigquery",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dataset",
              description: "BigQuery dataset to export findings to",
              args: { name: "DATASET", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag11637,
            flag11946,
            flag14123,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud\n              config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "group",
          description:
            "Filter an organization or source's findings and groups them by their specified properties",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2167,
            flag2292,
            {
              name: "--filter",
              description:
                "Expression that defines the filter to apply across findings. The\nexpression is a list of one or more restrictions combined via logical\noperators 'AND' and 'OR'. Parentheses are supported, and 'OR' has higher\nprecedence than 'AND'. Restrictions have the form\n'<field> <operator> <value>' and may have a '-' character in front of\nthem to indicate negation. Examples include: name,\nsource_properties.a_property, security_marks.marks.marka.\nThe supported operators are:\n*  '=' for all value types.\n*  '>', '<', '>=', '<=' for integer values.\n*  ':', meaning substring matching, for strings.\n+\nThe supported value types are:string literals in quotes, integer\nliterals without quotes, boolean literals 'true' and 'false' without\nquotes. Some example filters: 'source_properties.size = 100',\n'category=\\\"XSS\\\" AND event_time > 10' etc",
              args: { name: "FILTER", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--group-by",
              description:
                "Expression that defines what findings fields to use for grouping\n(including 'state'). String value should follow SQL syntax: comma\nseparated list  of fields. For example: \"parent,resource_name\".\nThe following fields are supported:\n* resource_name\n* category\n* state\n* parent",
              args: {
                name: "GROUP_BY",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            {
              name: "--page-size",
              description:
                "Maximum number of results to return in a single response. Default is 10,\nminimum is 1, maximum is 1000",
              args: {
                name: "PAGE_SIZE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11077,
            flag11637,
            flag11946,
            flag12000,
            flag14123,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud\n              config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List an organization or source's findings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2167,
            flag2292,
            {
              name: "--field-mask",
              description:
                'Field mask to specify the finding fields listed in the response. An\nempty field mask will list all fields. For example:\n--field-mask="finding.category,finding.resource_name" will only output\ncategory and resource_name for the findings in addition to default\nattributes. Notice the difference between hyphens (-) used with flags\nv/s camel case used in field masks. An empty or missing field mask will\nlist all fields',
              args: {
                name: "FIELD_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag4849,
            flag4900,
            flag4902,
            flag5006,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7106,
            flag7356,
            {
              name: "--order-by",
              description:
                'Expression that defines what fields and order to use for sorting.\nString value should follow SQL syntax: comma separated list of fields.\nFor example: "name,resource_properties.a_property". The default sorting\norder is ascending. To specify descending order for a field, a suffix "\ndesc" should be appended to the field name. For example:\n--order-by="name desc,source_properties.a_property" will order by name\nin descending order while source_properties.a_property in ascending\norder',
              args: {
                name: "ORDER_BY",
                description: "String",
                suggestions: [],
              },
            },
            flag10873,
            flag11059,
            flag11077,
            flag11946,
            flag12000,
            flag13948,
            flag14123,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud\n              config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "list-marks",
          description: "List a finding's security marks",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5006,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7106,
            flag7356,
            flag10873,
            flag11059,
            flag11077,
            flag11946,
            flag12000,
            flag13948,
            flag14123,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
          },
        },
        {
          name: "set-mute",
          description: "Update a Security Command Center finding's mute state",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description:
                "Folder where the finding resides. Formatted as ``folders/456''\n        or just ``456''",
              args: { name: "FOLDER", description: "String", suggestions: [] },
            },
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            {
              name: "--mute",
              description:
                "Desired mute state of the finding. _MUTE_ must be one of: *muted*, *unmuted*, *undefined*",
              args: {
                name: "MUTE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["muted", "unmuted", "undefined"],
              },
            },
            {
              name: "--organization",
              description:
                "Organization where the finding resides. Formatted as\n        ``organizations/123'' or just ``123''",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--source",
              description: "ID of the source",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or the full resource name of the finding",
          },
        },
        {
          name: "update",
          description: "Update a Security Command Center finding",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--event-time",
              description:
                "Time at which the event took place. For example, if the finding\n  represents an open firewall it would capture the time the open firewall\n  was detected. If event-time is not provided, it will default to UTC\n  version of NOW. See `$ gcloud topic datetimes` for information on\n  supported time formats",
              args: {
                name: "EVENT_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag4728,
            flag4900,
            flag4902,
            flag5006,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10873,
            flag11946,
            flag14123,
            flag14077,
            flag14395,
            flag14975,
            {
              name: "--update-mask",
              description:
                "Optional: If left unspecified (default), an update-mask is automatically\ncreated using the flags specified in the command and only those values\nare updated. For example: --external-uri='<some-uri>'\n--event-time='<some-time>' would automatically generate\n--update-mask='external_uri,event_time'. Note that as a result, only\nexternal-uri and event-time are updated for the given finding and\neverything else remains untouched. If you want to delete\nattributes/properties (that are not being changed in the update command)\nuse an empty update-mask (''). That will delete all the mutable\nproperties/attributes that aren't specified as flags in the update\ncommand. In the above example it would delete source-properties.\nState can be toggled from ACTIVE to INACTIVE and vice-versa but it\ncannot be deleted",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
          },
        },
        {
          name: "update-marks",
          description:
            "Update Security Command Center finding's security marks",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5006,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10873,
            flag11946,
            {
              name: "--security-marks",
              description:
                'SecurityMarks resource to be passed as the request body. It\'s a\nkey=value pair separated by comma (,). For example:\n--security-marks="key1=val1,key2=val2"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag14123,
            {
              name: "--start-time",
              description:
                "Time at which the updated SecurityMarks take effect. See `$ gcloud topic\ndatetimes` for information on supported time formats",
              args: {
                name: "START_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-mask",
              description:
                "Use update-mask if you want to selectively update marks represented by\n--security-marks flag. For example:\n--update-mask=\"marks.key1,marks.key2\". If you want to override all the\nmarks for the given finding either skip the update-mask flag or provide\nan empty value (--update-mask '') for it",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "FINDING",
            description:
              "ID of the finding or fully qualified identifier for the finding",
          },
        },
      ],
    },
    {
      name: "iac-validation-reports",
      description:
        "Manage Cloud SCC (Security Command Center) iac-validation-reports",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Cloud Security Command Center (SCC) IaC Validation Report",
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
            {
              name: "--tf-plan-file",
              description:
                "Path to a JSON file containing the IaC plan to be validated. Use a full or relative path to a local file containing the value of tf_plan_file",
              args: {
                name: "TF_PLAN_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "Name of the organization where IaC Validation Report is to be created. Format:\norganizations/<organizationID>/locations/<location>",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) IaC Validation Report",
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
                "ID of the location where the resource exists (for example, global).\n+\n\nTo set the `location` attribute:\n* provide the argument `report` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "ID of the organization which is the parent of the resource.\n+\n\nTo set the `organization` attribute:\n* provide the argument `report` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
              args: {
                name: "ORGANIZATION",
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
            name: "REPORT",
            description:
              "ID of the report or fully qualified identifier for the report.\n+\nTo set the `report` attribute:\n* provide the argument `report` on the command line",
          },
        },
        {
          name: "list",
          description:
            "Lists all the Cloud Security Command Center (SCC) IaC validation reports for an organization",
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
            flag7093,
            flag7356,
            flag10874,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent of the IaC validation reports or fully qualified identifier for the IaC validation reports",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "manage",
      description: "Manage Cloud SCC (Security Command Center) settings",
      subcommands: [
        {
          name: "custom-modules",
          description:
            "Manage Cloud SCC (Security Command Center) custom modules",
          subcommands: [
            {
              name: "etd",
              description: "Manage custom modules",
              subcommands: [
                {
                  name: "create",
                  description: "Create an Event Threat Detection custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag2610,
                    flag3807,
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Event Threat Detection custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag7978,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15364,
                    flag15424,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an Event Threat Detection custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15364,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/eventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Get the details of a Event Threat Detection custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/eventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "describe-effective",
                  description:
                    "Get the effective details of a Event Threat Detection effective custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/effectiveEventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "list",
                  description:
                    "List details of resident and inherited Event Threat Detection Custom Modules",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    flag10911,
                    flag11059,
                    flag11128,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "list-descendant",
                  description:
                    "List the details of the resident and descendant Event Threat Detection custom modules",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    flag10911,
                    flag11059,
                    flag11128,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "list-effective",
                  description:
                    "List the details of an Event Threat Detection effective custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    flag10911,
                    flag11059,
                    flag11128,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description: "Update an Event Threat Detection custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--custom-config-file",
                      description:
                        "Path to a JSON file that contains the custom config to set for the module. Use a full or relative path to a local file containing the value of custom_config_file",
                      args: {
                        name: "CUSTOM_CONFIG_FILE",
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:FileContents",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Event Threat Detection custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15364,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/eventThreatDetectionCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "validate",
                  description: "Command to validate an ETD custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag2610,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag7978,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
              ],
            },
            {
              name: "sha",
              description: "Manage Security Health Analytics custom modules",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an Security Health Analytics custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag2613,
                    flag3807,
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Security Health Analytics custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15364,
                    flag15424,
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a Security Health Analytics custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15364,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/securityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Get the details of a Security Health Analytics custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/securityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "describe-effective",
                  description:
                    "Get effective the details of a Security Health Analytics effective custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/effectiveSecurityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
                {
                  name: "list",
                  description:
                    "List the details of Security Health Analyics custom modules",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    flag10911,
                    flag11059,
                    flag11128,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "list-descendant",
                  description:
                    "List the details of the resident and descendant Security Health Analytics custom modules",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    flag10911,
                    flag11059,
                    flag11128,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "list-effective",
                  description:
                    "List the details of an Security Health Analytics effective custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    flag10911,
                    flag11059,
                    flag11128,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "simulate",
                  description: "Command to simulate a SHA custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag2613,
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    {
                      name: "--resource-from-file",
                      description:
                        "Path to a YAML file that contains the resource data to validate the Security Health Analytics custom module against. Use a full or relative path to a local file containing the value of resource",
                      args: {
                        name: "TEST_DATA",
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:FileContents",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update a Security Health Analytics custom module",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--custom-config-file",
                      description:
                        "Path to a YAML file that contains the custom config to set for the module. Use a full or relative path to a local file containing the value of custom_config_file",
                      args: {
                        name: "CUSTOM_CONFIG_FILE",
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:FileContents",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--enablement-state",
                      description:
                        "Sets the enablement state of the Security Health Analytics custom module. Valid options are ENABLED, DISABLED, OR INHERITED",
                      args: {
                        name: "ENABLEMENT_STATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4900,
                    flag4902,
                    flag4931,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag10911,
                    flag11128,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15364,
                    flag15424,
                  ],
                  args: {
                    name: "MODULE_ID_OR_NAME",
                    description:
                      "The custom module ID or name. The expected format is {parent}/[locations/global]/securityHealthAnalyticsCustomModules/{module_id} or just {module_id}. Where module_id is a numeric identifier 1-20 characters\n      in length. Parent is of the form organizations/{id}, projects/{id or name},\n      folders/{id}",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "services",
          description: "Manage Cloud SCC (Security Command Center) services",
          subcommands: [
            {
              name: "describe",
              description:
                "Get the details of a Security Command Center service",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--filter-modules",
                  description:
                    "If provided, only prints module information for modules specified\n      in the list. Provided as a comma separated list of module names in\n      SCREAMING_SNAKE_CASE format (e.g. WEB_UI_ENABLED, API_KEY_NOT_ROTATED).\n      A single module name is also valid",
                  args: {
                    name: "FILTER_MODULES",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag4931,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10911,
                flag11128,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SERVICE_NAME",
                description:
                  "The service name, provided either in lowercase hyphenated form (e.g. security-health-analytics), or in abbreviated form (e.g. sha) if applicable.\n+\nThe list of supported services is:\n+\n* security-health-analytics (can be abbreviated as sha)\n+\n* event-threat-detection (can be abbreviated as etd)\n+\n* container-threat-detection (can be abbreviated as ctd)\n+\n* vm-threat-detection (can be abbreviated as vmtd)\n+\n* web-security-scanner (can be abbreviated as wss)\n+\n* vm-threat-detection-aws (can be abbreviated as vmtd-aws)\n+\n* cloud-run-threat-detection (can be abbreviated as crtd)\n+\n* external-exposure (can be abbreviated as ee)\n+\n* vm-manager (can be abbreviated as vmm)\n+\n* ec2-vulnerability-assessment (can be abbreviated as ec2-va)\n+\n* gce-vulnerability-assessment (can be abbreviated as gce-va)\n+\n* azure-vulnerability-assessment (can be abbreviated as azure-va)\n+\n* notebook-security-scanner (can be abbreviated as nss)\n+\n* agent-engine-threat-detection (can be abbreviated as aetd)",
              },
            },
            {
              name: "list",
              description:
                "List the details of Security Command Center services",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                {
                  name: "--folder",
                  description:
                    "Folder associated with the Security Center service",
                  args: {
                    name: "FOLDER_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                {
                  name: "--organization",
                  description:
                    "Organization associated with the Security Center service",
                  args: {
                    name: "ORGANIZATION_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                {
                  name: "--parent",
                  description:
                    "Parent associated with the Security Center service. Can be one of\n              organizations/<id>, projects/<id or name>, folders/<id>",
                  args: {
                    name: "PARENT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description: "Update a Security Command Center service",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--enablement-state",
                  description:
                    "Sets the enablement state of the Security Center service.\nValid options are ENABLED, DISABLED, OR INHERITED. The INHERITED\nstate is only valid when setting the enablement state at the project or\nfolder level",
                  args: {
                    name: "ENABLEMENT_STATE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag4931,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--module-config-file",
                  description:
                    'Path to a JSON or YAML file that contains the module config to\nset for the given module and service.\n+\nThe file should contain a map where keys are module names (e.g., "DISK_CMEK_DISABLED")\nand values are objects with an "intended_enablement_state" field.\nValid states are "ENABLED", "DISABLED", or "INHERITED".\n+\nTo find the available module names for a specific service and resource,\nuse the `gcloud scc manage services describe <SERVICE_NAME> --parent=<RESOURCE>`\ncommand and look for the keys in the "modules" section of the output.\n+\nExample YAML format:\n+\n```yaml\nDISK_CMEK_DISABLED:\n  intended_enablement_state: DISABLED\nSQL_WEAK_ROOT_PASSWORD:\n  intended_enablement_state: ENABLED\n```\n+\nExample JSON format:\n+\n```json\n{\n  "DISK_CMEK_DISABLED": {\n    "intended_enablement_state": "DISABLED"\n  },\n  "SQL_WEAK_ROOT_PASSWORD": {\n    "intended_enablement_state": "ENABLED"\n  }\n}\n```\n.\n+\nUse a full or relative path to a local file containing the value of module_config_file',
                  args: {
                    name: "MODULE_CONFIG_FILE",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:FileContents",
                    suggestions: [],
                  },
                },
                flag10911,
                flag11128,
                flag11946,
                flag14975,
                flag15315,
                flag15364,
                flag15424,
              ],
              args: {
                name: "SERVICE_NAME",
                description:
                  "The service name, provided either in lowercase hyphenated form (e.g. security-health-analytics), or in abbreviated form (e.g. sha) if applicable.\n+\nThe list of supported services is:\n+\n* security-health-analytics (can be abbreviated as sha)\n+\n* event-threat-detection (can be abbreviated as etd)\n+\n* container-threat-detection (can be abbreviated as ctd)\n+\n* vm-threat-detection (can be abbreviated as vmtd)\n+\n* web-security-scanner (can be abbreviated as wss)\n+\n* vm-threat-detection-aws (can be abbreviated as vmtd-aws)\n+\n* cloud-run-threat-detection (can be abbreviated as crtd)\n+\n* external-exposure (can be abbreviated as ee)\n+\n* vm-manager (can be abbreviated as vmm)\n+\n* ec2-vulnerability-assessment (can be abbreviated as ec2-va)\n+\n* gce-vulnerability-assessment (can be abbreviated as gce-va)\n+\n* azure-vulnerability-assessment (can be abbreviated as azure-va)\n+\n* notebook-security-scanner (can be abbreviated as nss)\n+\n* agent-engine-threat-detection (can be abbreviated as aetd)",
              },
            },
          ],
        },
      ],
    },
    {
      name: "muteconfigs",
      description: "Manage Cloud SCC (Security Command Center) mute configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Security Command Center mute config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3335,
            flag4665,
            flag4864,
            flag4900,
            flag4902,
            flag4996,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10854,
            flag11946,
            flag14975,
            {
              name: "--type",
              description:
                "The mute configuration type. Immutable after creation. _TYPE_ must be one of: *static*, *dynamic*",
              args: {
                name: "TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["static", "dynamic"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
        {
          name: "delete",
          description: "Delete a Security Command Center mute config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4996,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10854,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
        {
          name: "get",
          description: "Get a Security Command Center mute config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4996,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10854,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
        {
          name: "list",
          description: "ListSecurity Command Center mute configs",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag4996,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7106,
            flag7356,
            flag10854,
            flag11059,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a Security Command Center mute config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3335,
            flag4665,
            flag4864,
            flag4900,
            flag4902,
            flag4996,
            flag5091,
            flag5453,
            flag5699,
            flag7106,
            flag7356,
            flag10854,
            flag11946,
            flag14975,
            {
              name: "--update-mask",
              description:
                "Optional: If left unspecified (default), an update-mask is automatically\ncreated using the flags specified in the command and only those values\nare updated",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "MUTE_CONFIG",
            description:
              "ID of the mute config or the full resource name of the mute config",
          },
        },
      ],
    },
    {
      name: "notifications",
      description: "Manage Cloud SCC (Security Command Center) notifications",
      subcommands: [
        {
          name: "create",
          description: "Create a Security Command Center notification config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3336,
            {
              name: "--filter",
              description: "Filter to be used for notification config",
              args: { name: "FILTER", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag4997,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "If data residency is enabled, specify the Security Command Center location\nin which to create the notification. The resulting `notificationConfig`\nresource is stored only in this location. Only findings that are issued\nin this location are sent to Pub/Sub.\n+\nIf data residency is not enabled, specifying the `--location` flag creates\nthe notification by using Security Command Center API v2, and the only\nvalid value for the flag is `global`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10855,
            {
              name: "--pubsub-topic",
              description:
                'The Pub/Sub topic which will receive notifications. Its format is\n"projects/[project_id]/topics/[topic]"',
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as\n"organizations/123/notificationConfigs/456" or just "456"',
          },
        },
        {
          name: "delete",
          description: "Delete a Security Command Center notification config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4997,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig`\nwas created by using the API v2.\n+\nIf data residency is enabled, specify the Security Command Center location\nin which the notification is stored.\n+\nIf data residency is not enabled, include `/locations/```LOCATION'' in the\nfull name or specify the `--location flag` only if the\n`notificationConfig` was created by using the Security Command Center API\nv2, in which case, the only valid location is `global`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10855,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as\n"organizations/123/notificationConfigs/456" or just "456"',
          },
        },
        {
          name: "describe",
          description: "Describe a Security Command Center notification config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4997,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig`\nresources were created by using the API v2.\n+\nIf data residency is enabled, specify the Security Command Center location\nin which the notifications are stored.\n+\nIf data residency is not enabled, include `/locations/```LOCATION'' only\nif the `notificationConfig` resource was created by using the Security\nCommand Center API v2, in which case, the only valid location is `global`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10855,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as\n"organizations/123/notificationConfigs/456" or just "456"',
          },
        },
        {
          name: "list",
          description: "List Security Command Center notification configs",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag4997,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig`\nresources were created by using the API v2.\n+\nIf data residency is enabled, specify the Security Command Center location\nin which the notifications are stored.\n+\nIf data residency is not enabled, including `/locations/```LOCATION'' in\nthe name or the `--location` flag in the command lists only the\n`notificationConfig` resources that were created by using the Security\nCommand Center API v2 and the only valid location is `global`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10855,
            flag11059,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud\n              config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update a Security Command Center notification config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3336,
            {
              name: "--filter",
              description:
                "The filter string which will applied to events of findings of a\nnotification configuration",
              args: { name: "FILTER", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag4997,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Required if either data residency is enabled or the `notificationConfig`\nwas created by using the API v2.\n+\nIf data residency is enabled, specify the Security Command Center location\nin which the notification is stored.\n+\nIf data residency is not enabled, include `/locations/```LOCATION'' in the\nfull name or specify the `--location` flag only if the\n`notificationConfig` resource was created by using the Security Command\nCenter API v2, in which case, the only valid location is `global`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag10855,
            {
              name: "--pubsub-topic",
              description:
                'The Pub/Sub topic which will receive notifications. Its format is\n"projects/[project_id]/topics/[topic]"',
              args: {
                name: "PUBSUB_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NOTIFICATION_CONFIG_ID",
            description:
              'The ID of the notification config. Formatted as\n"organizations/123/notificationConfigs/456" or just "456"',
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud SCC (Security Command Center) operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud SCC's long running scan operation",
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
            {
              name: "--organization",
              description:
                "(Optional) If the full resource name isn't provided e.g. organizations/123, then provide the\norganization id which is the suffix of the organization. Example: organizations/123, the id is\n123.\n+\n\nTo set the `organization` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* Set the organization property in configuration using `gcloud config set scc/organization` if it is not specified in command line.",
              args: {
                name: "ORGANIZATION",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
      ],
    },
    {
      name: "posture-deployments",
      description:
        "Manage Cloud Security Command Center (SCC) posture deployments",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Cloud Security Command Center (SCC) posture deployment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description:
                "User-provided description of the posture deployment",
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
            flag6731,
            flag7356,
            flag10799,
            {
              name: "--posture-name",
              description:
                "Posture that needs to be deployed. Format:\norganizations/<organizationID>/locations/<location>/postures/<postureID>",
              args: {
                name: "POSTURE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--posture-revision-id",
              description: "Posture revision that needs to be deployed",
              args: {
                name: "POSTURE_REVISION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--target-resource",
              description:
                "Name of the workload on which posture deployment is to be created. It could be an organization, folder or a project.\nPossible formats: |\n  organizations/<organizationID> |\n  folders/<folderID> |\n  projects/<projectID>\nThe above mentioned IDs need to have numeric format",
              args: {
                name: "TARGET_RESOURCE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment.\n+\nTo set the `posture_deployment` attribute:\n* provide the argument `posture_deployment` on the command line",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Cloud Security Command Center (SCC) posture deployment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4514,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6731,
            flag7356,
            flag10799,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment.\n+\nTo set the `posture_deployment` attribute:\n* provide the argument `posture_deployment` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) posture deployment",
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
            flag6731,
            flag7356,
            flag10799,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment.\n+\nTo set the `posture_deployment` attribute:\n* provide the argument `posture_deployment` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the details of the Cloud Security Command Center (SCC) posture deployments",
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
            flag7093,
            flag7356,
            flag10874,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent of Cloud Security Command Center posture deployments. Formatted as organizations/<organizationID>/locations/<location>",
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update the given Cloud Security Command Center (SCC) posture deployment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Updated description of posture deployment",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--etag",
              description:
                "Etag is an optional flag. If the provided Etag doesn't match the server generated Etag, the update operation won't proceed",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6731,
            flag7356,
            flag10799,
            {
              name: "--posture-id",
              description:
                "Relative name of the posture to be updated, like `organizations/<organizationID>/locations/<location>/postures/<postureID>`",
              args: {
                name: "POSTURE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--posture-revision-id",
              description: "Revision ID of the posture to be updated",
              args: {
                name: "POSTURE_REVISION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--update-mask",
              description:
                "Comma-separated string containing list of fields to be updated",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE_DEPLOYMENT",
            description:
              "ID of the posture_deployment or fully qualified identifier for the posture_deployment.\n+\nTo set the `posture_deployment` attribute:\n* provide the argument `posture_deployment` on the command line",
          },
        },
      ],
    },
    {
      name: "posture-operations",
      description:
        "Manage Cloud Security Command Center (SCC) posture operations",
      subcommands: [
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) posture long running operation",
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
            name: "OPERATION_NAME",
            description:
              "Relative resource name of the operation, of the format: organizations/<organizationID>/locations/<location>/operations/<operationID>",
          },
        },
      ],
    },
    {
      name: "posture-templates",
      description:
        "Manage Cloud Security Command Center (SCC) posture templates",
      subcommands: [
        {
          name: "describe",
          description:
            "Describe a Cloud Security Command Center (SCC) posture template",
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
                "ID of the location where the resource exists (for example, global).\n+\n\nTo set the `location` attribute:\n* provide the argument `posture_template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "ID of the organization which is the parent of the resource.\n+\n\nTo set the `organization` attribute:\n* provide the argument `posture_template` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--revision-id",
              description:
                "ID of the specific posture template revision to be described. If not specified, latest revision is described",
              args: {
                name: "REVISION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE_TEMPLATE",
            description:
              "ID of the posture_template or fully qualified identifier for the posture_template.\n+\nTo set the `posture_template` attribute:\n* provide the argument `posture_template` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the details of the Cloud Security Command Center (SCC) posture templates",
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
            flag7093,
            flag7356,
            flag10874,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent of Cloud Security Command Center posture templates. Formatted as organizations/<organizationID>/locations/<location>",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "postures",
      description: "Manage Cloud Security Command Center (SCC) postures",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Security Command Center (SCC) posture",
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
            flag6733,
            flag7356,
            flag10801,
            {
              name: "--posture-from-file",
              description:
                "YAML file containing the body of the posture to be created. Use a full or relative path to a local file containing the value of posture",
              args: {
                name: "POSTURE_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
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
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture.\n+\nTo set the `posture` attribute:\n* provide the argument `posture` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Security Command Center (SCC) posture",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4514,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6733,
            flag7356,
            flag10801,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture.\n+\nTo set the `posture` attribute:\n* provide the argument `posture` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Security Command Center (SCC) posture",
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
            flag6733,
            flag7356,
            flag10801,
            flag11637,
            flag11946,
            {
              name: "--revision-id",
              description:
                "ID of the specific posture revision to described. If not specified, latest revision is described",
              args: {
                name: "REVISION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture.\n+\nTo set the `posture` attribute:\n* provide the argument `posture` on the command line",
          },
        },
        {
          name: "extract",
          description:
            "Extract a Cloud Security Command Center (SCC) posture from a workload",
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
            flag6733,
            flag7356,
            flag10801,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--workload",
              description:
                "Workload from where policies has to be extracted into a posture. It can be in one\nof the following formats: `projects/projectNumber`, `folders/folderNumber`, `organizations/organizationNumber`",
              args: {
                name: "WORKLOAD",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture.\n+\nTo set the `posture` attribute:\n* provide the argument `posture` on the command line",
          },
        },
        {
          name: "list",
          description:
            "Lists all the Cloud Security Command Center postures for an organization",
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
            flag7093,
            flag7356,
            flag10874,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "Parent the Cloud Security Command Center postures belongs to. Formatted as organizations/<organizationID>/locations/<location>",
            isOptional: true,
          },
        },
        {
          name: "list-revisions",
          description:
            "List the revisions of a Cloud Security Command Center (SCC) posture",
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
            flag6733,
            flag7356,
            flag10801,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture.\n+\nTo set the `posture` attribute:\n* provide the argument `posture` on the command line",
          },
        },
        {
          name: "update",
          description:
            "Update the given Cloud Security Command Center (SCC) posture",
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
            flag6733,
            flag7356,
            flag10801,
            {
              name: "--posture-from-file",
              description:
                "Path of the file containing the details of the field to be updated. Contents include the name of the\nposture to be updated and value of the fields to be updated. Use a full or relative path to a local file containing the value of posture",
              args: {
                name: "POSTURE_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--revision-id",
              description:
                "Revision ID of the posture to be updated. The same revision ID will be updated in case the posture\nrevision is not deployed on any workload. A new revision will be created for a deployed\nposture",
              args: {
                name: "REVISION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-mask",
              description:
                "Comma separated string containing list of fields to be updated",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "POSTURE",
            description:
              "ID of the posture or fully qualified identifier for the posture.\n+\nTo set the `posture` attribute:\n* provide the argument `posture` on the command line",
          },
        },
      ],
    },
    {
      name: "sources",
      description: "Manage Cloud SCC (Security Command Center) finding sources",
      subcommands: [
        {
          name: "describe",
          description: "Describe a source given its display name or source id",
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
            {
              name: "--source",
              description:
                "Cloud SCC specific source. It's derived from the the source's relative resource name.\nSee: https://cloud.google.com/apis/design/resource_names#relative_resource_name.\nFor Example: For the given source name: \"organizations/123/sources/456\", 456 represents\nsource id",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            {
              name: "--source-display-name",
              description:
                "Source's display name must be unique amongst its siblings, for example, two sources\nwith the same parent can't share the same display name.\nDisplay name must start and end with a letter or digit, may contain letters, digits,\nspaces, hyphens, and underscores, and can be no longer than 32 characters. This is\ncaptured by the regular expression: [\\p{L}\\p{N}]({\\p{L}\\p{N}_- ]{0,30}[\\p{L}\\p{N}])?.\nFor example: 'Cloud Security Scanner' is the source display name",
              args: {
                name: "SOURCE_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Cloud Security Command Center sources",
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
            name: "PARENT",
            description:
              "ID of the parent or fully qualified identifier for the parent.\n+\nTo set the `parent` attribute:\n* provide the argument `parent` on the command line;\n* Set the parent property in configuration using `gcloud config set scc/parent` if it is not specified in command line",
            isOptional: true,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
