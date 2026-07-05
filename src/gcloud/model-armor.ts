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
const flag352: Fig.Option = {
  name: "--advanced-config-deidentify-template",
  description:
    "Optional Sensitive Data Protection Deidentify template resource name.\n+\nIf provided then DeidentifyContent action is performed during Sanitization\nusing this template and inspect template. The De-identified data will\nbe returned in SdpDeidentifyResult.\nNote that all info-types present in the deidentify template must be present\nin inspect template.\n+\ne.g.\n`organizations/{organization}/deidentifyTemplates/{deidentify_template}`,\n`projects/{project}/deidentifyTemplates/{deidentify_template}`\n`organizations/{organization}/locations/{location}/deidentifyTemplates/{deidentify_template}`\n`projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}`",
  args: {
    name: "ADVANCED_CONFIG_DEIDENTIFY_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag354: Fig.Option = {
  name: "--advanced-config-inspect-template",
  description:
    "Sensitive Data Protection inspect template resource name\n+\nIf only inspect template is provided (de-identify template not provided),\nthen Sensitive Data Protection InspectContent action is performed during\nSanitization. All Sensitive Data Protection findings identified during\ninspection will be returned as SdpFinding in SdpInsepctionResult e.g.\n`organizations/{organization}/inspectTemplates/{inspect_template}`,\n`projects/{project}/inspectTemplates/{inspect_template}`\n`organizations/{organization}/locations/{location}/inspectTemplates/{inspect_template}`\n`projects/{project}/locations/{location}/inspectTemplates/{inspect_template}`",
  args: {
    name: "ADVANCED_CONFIG_INSPECT_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag1100: Fig.Option = {
  name: "--basic-config-filter-enforcement",
  description:
    "Tells whether the Sensitive Data Protection basic config is enabled or\ndisabled. _BASIC_CONFIG_FILTER_ENFORCEMENT_ must be one of:\n+\n*disabled*::: Disabled\n*enabled*::: Enabled\n:::\n+",
  args: {
    name: "BASIC_CONFIG_FILTER_ENFORCEMENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "enabled"],
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
const flag7277: Fig.Option = {
  name: "--location",
  description:
    "The location id of the template resource.\n+\nTo set the `location` attribute:\n* provide the argument `template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7528: Fig.Option = {
  name: "--malicious-uri-filter-settings-enforcement",
  description:
    "Tells whether the Malicious URI filter is enabled or disabled. _MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT_ must be one of:\n+\n*disabled*::: Disabled\n*enabled*::: Enabled\n:::\n+",
  args: {
    name: "MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "enabled"],
  },
};
const flag11297: Fig.Option = {
  name: "--pi-and-jailbreak-filter-settings-confidence-level",
  description:
    "Confidence level for this filter.\nConfidence level is used to determine the threshold for the filter. If\ndetection confidence is equal to or greater than the specified level, a\npositive match is reported. Confidence level will only be used if the\nfilter is enabled. _PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL_ must be one of:\n+\n*high*::: Low chance of false positives.\n*low-and-above*::: Highest chance of a false positive.\n*medium-and-above*::: Some chance of false positives.\n:::\n+",
  args: {
    name: "PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["high", "low-and-above", "medium-and-above"],
  },
};
const flag11299: Fig.Option = {
  name: "--pi-and-jailbreak-filter-settings-enforcement",
  description:
    "Tells whether Prompt injection and Jailbreak filter is enabled or\ndisabled. _PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT_ must be one of:\n+\n*disabled*::: Enabled\n*enabled*::: Enabled\n:::\n+",
  args: {
    name: "PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "enabled"],
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
const flag12840: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server stores the request\nID for 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag14809: Fig.Option = {
  name: "--template-metadata-custom-llm-response-safety-error-code",
  description:
    "Indicates the custom error code set by the user to be returned to the end\nuser if the LLM response trips Model Armor filters",
  args: {
    name: "TEMPLATE_METADATA_CUSTOM_LLM_RESPONSE_SAFETY_ERROR_CODE",
    description: "Int",
    suggestions: [],
  },
};
const flag14810: Fig.Option = {
  name: "--template-metadata-custom-llm-response-safety-error-message",
  description:
    "Indicates the custom error message set by the user to be returned to the\nend user if the LLM response trips Model Armor filters",
  args: {
    name: "TEMPLATE_METADATA_CUSTOM_LLM_RESPONSE_SAFETY_ERROR_MESSAGE",
    description: "String",
    suggestions: [],
  },
};
const flag14811: Fig.Option = {
  name: "--template-metadata-custom-prompt-safety-error-code",
  description:
    "Indicates the custom error code set by the user to be returned to the end\nuser by the service extension if the prompt trips Model Armor filters",
  args: {
    name: "TEMPLATE_METADATA_CUSTOM_PROMPT_SAFETY_ERROR_CODE",
    description: "Int",
    suggestions: [],
  },
};
const flag14812: Fig.Option = {
  name: "--template-metadata-custom-prompt-safety-error-message",
  description:
    "Indicates the custom error message set by the user to be returned to the\nend user if the prompt trips Model Armor filters",
  args: {
    name: "TEMPLATE_METADATA_CUSTOM_PROMPT_SAFETY_ERROR_MESSAGE",
    description: "String",
    suggestions: [],
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
  name: "model-armor",
  description:
    "Model Armor is a service offering LLM-agnostic security and AI safety measures to mitigate risks associated with large language models (LLMs)",
  subcommands: [
    {
      name: "floorsettings",
      description: "Manage FloorSettings resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe the FloorSetting resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--full-uri",
              description: "Full uri of the floor setting",
              args: {
                name: "FULL_URI",
                description: "String",
                suggestions: [],
              },
            },
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
        {
          name: "update",
          description: "Update a Model Armor floor setting",
          options: [
            flag42,
            flag46,
            {
              name: "--add-google-mcp-server-apis",
              description:
                "Appends the given APIs to the list of Google MCP server APIs",
              args: { name: "API", description: "List", suggestions: [] },
            },
            {
              name: "--add-integrated-services",
              description:
                "Set the list of integrated services for the floor setting. This can be used to enable project-wide Model Armor sanitization for the respective services. This flag can be repeated to specify multiple services, or a comma-separated list can be provided",
              args: {
                name: "INTEGRATED_SERVICE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-rai-settings-filters",
              description:
                'Add rai filter settings. Sets `add_rai_settings_filters` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-rai-settings-filters=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-rai-settings-filters=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "confidenceLevel=CONFIDENCELEVEL],[filterType=FILTERTYPE]",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--advanced-config-deidentify-template",
              description:
                "The sdp filter settings enforcement. The value has to be a valid template name. e.g. `projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}`",
              args: {
                name: "ADVANCED_CONFIG_DEIDENTIFY_TEMPLATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--advanced-config-inspect-template",
              description:
                "The sdp filter settings enforcement. The value has to be a valid template name. e.g. `projects/{project}/locations/{location}/inspectTemplates/{inspect_template}`",
              args: {
                name: "ADVANCED_CONFIG_INSPECT_TEMPLATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--basic-config-filter-enforcement",
              description:
                "The sdp filter settings enforcement. The value can be either `ENABLED` or `DISABLED`",
              args: {
                name: "BASIC_CONFIG_FILTER_ENFORCEMENT",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-google-mcp-server-apis",
              description:
                "Removes all APIs from the list of Google MCP server APIs. Empty list indicates that the floor setting is applicable to all Google MCP servers",
            },
            {
              name: "--clear-integrated-services",
              description:
                "Clear all integrated services from the floor setting",
            },
            {
              name: "--clear-rai-settings-filters",
              description: "Clear all rai filter settings",
            },
            flag2292,
            {
              name: "--enable-floor-setting-enforcement",
              description:
                'Enable or disable the floor setting enforcement. Set the value to "TRUE" to enable the floor setting enforcement, "FALSE" to disable it',
              args: {
                name: "ENABLE_FLOOR_SETTING_ENFORCEMENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-google-mcp-server-cloud-logging",
              description:
                "Enable Cloud Logging for Google MCP server sanitization to log Model Armor sanitization results. Use *--enable-google-mcp-server-cloud-logging* to enable and *--no-enable-google-mcp-server-cloud-logging* to disable",
            },
            {
              name: "--enable-multi-language-detection",
              description:
                "Enable multi-language detection for floor setting, allowing Model Armor to process content in multiple languages. Use *--enable-multi-language-detection* to enable and *--no-enable-multi-language-detection* to disable",
            },
            {
              name: "--enable-vertex-ai-cloud-logging",
              description:
                "Enable Cloud Logging for Vertex AI sanitization to log Model Armor sanitization results. Use *--enable-vertex-ai-cloud-logging* to enable and *--no-enable-vertex-ai-cloud-logging* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--full-uri",
              description: "Full uri of the floor setting",
              args: {
                name: "FULL_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--google-mcp-server-apis",
              description:
                "Replaces the current list of Google MCP server APIs with the provided list",
              args: { name: "API", description: "List", suggestions: [] },
            },
            {
              name: "--google-mcp-server-enforcement-type",
              description:
                'Specifies the enforcement mode for Google MCP server sanitization, such as "INSPECT_ONLY" or "INSPECT_AND_BLOCK". Default is "INSPECT_ONLY"',
              args: {
                name: "GOOGLE_MCP_SERVER_ENFORCEMENT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--malicious-uri-filter-settings-enforcement",
              description: "Malicious URI filter settings",
              args: {
                name: "MALICIOUS_URI_FILTER_SETTINGS_ENFORCEMENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--pi-and-jailbreak-filter-settings-confidence-level",
              description:
                'The pi and jailbreak filter settings confidence level. The value can be either "high", "medium-and-above" or "low-and-above"',
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_CONFIDENCE_LEVEL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--pi-and-jailbreak-filter-settings-enforcement",
              description:
                'The pi and jailbreak filter settings enforcement. The value can be either "enable" or "disable"',
              args: {
                name: "PI_AND_JAILBREAK_FILTER_SETTINGS_ENFORCEMENT",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--rai-settings-filters",
              description:
                'Set rai_settings_filters to new value. List of Responsible AI filters enabled for floor setting. Sets `rai_settings_filters` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rai-settings-filters=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rai-settings-filters=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "confidenceLevel=CONFIDENCELEVEL],[filterType=FILTERTYPE]",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-google-mcp-server-apis",
              description:
                "Removes the given APIs from the list of Google MCP server APIs",
              args: { name: "API", description: "List", suggestions: [] },
            },
            {
              name: "--remove-integrated-services",
              description:
                "Remove specified service(s) from the list of integrated services. This flag can be repeated to specify multiple services, or a comma-separated list can be provided",
              args: {
                name: "INTEGRATED_SERVICE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-rai-settings-filters",
              description:
                'Remove rai filter settings. Sets `remove_rai_settings_filters` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-rai-settings-filters=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-rai-settings-filters=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "confidenceLevel=CONFIDENCELEVEL],[filterType=FILTERTYPE]",
                description: "Dict",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--vertex-ai-enforcement-type",
              description:
                'Specifies the enforcement mode for Vertex AI sanitization, such as "INSPECT_ONLY" or "INSPECT_AND_BLOCK". Default is "INSPECT_ONLY"',
              args: {
                name: "VERTEX_AI_ENFORCEMENT_TYPE",
                description: "String",
                suggestions: [],
              },
            },
          ],
        },
      ],
    },
    {
      name: "templates",
      description: "Manage Template resources",
      subcommands: [
        {
          name: "create",
          description: "Create Model Armor Template",
          options: [
            flag42,
            flag46,
            flag352,
            flag354,
            flag1100,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
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
            flag7277,
            flag7356,
            flag7528,
            flag11297,
            flag11299,
            flag11637,
            flag11946,
            {
              name: "--rai-settings-filters",
              description:
                'Required, List of Responsible AI filters enabled for template.\n+\n*confidenceLevel*:::\nConfidence level for this RAI filter.\nDuring data sanitization, if data is classified under this filter with a\nconfidence level equal to or greater than the specified level, a positive\nmatch is reported. If the confidence level is unspecified (i.e., 0), the\nsystem will use a reasonable default level based on the `filter_type`.\n+\n*filterType*:::\nType of responsible AI filter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rai-settings-filters=confidenceLevel=string,filterType=string --rai-settings-filters=confidenceLevel=string,filterType=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rai-settings-filters=\'[{"confidenceLevel": "string", "filterType": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "RAI_SETTINGS_FILTERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag12840,
            flag14809,
            flag14810,
            flag14811,
            flag14812,
            {
              name: "--template-metadata-ignore-partial-invocation-failures",
              description:
                "If true, partial detector failures should be ignored",
            },
            {
              name: "--template-metadata-log-operations",
              description: "If true, log template crud operations",
            },
            {
              name: "--template-metadata-log-sanitize-operations",
              description: "If true, log sanitize operations",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete Model Armor Template",
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
            flag7277,
            flag7356,
            flag11637,
            flag11946,
            flag12840,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get Model Armor Template",
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
            flag7277,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "list",
          description: "List Model Armor Templates",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
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
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
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
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: {
                name: "PAGE_SIZE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: { name: "FIELD", description: "List", suggestions: [] },
            },
            flag14975,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "sanitize-model-response",
          description: "Sanitize Model Response",
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
            flag7277,
            flag7356,
            {
              name: "--model-response-data-byte-item-from-file",
              description:
                "Bytes Data. Use a full or relative path to a local file containing the value of model_response_data_byte_item",
              args: {
                name: "MODEL_RESPONSE_DATA_BYTE_ITEM_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--model-response-data-byte-item-type",
              description:
                "The type of byte data. _MODEL_RESPONSE_DATA_BYTE_ITEM_TYPE_ must be one of:\n+\n*pdf*::: PDF\n*plaintext-utf8*::: plain text\n:::\n+",
              args: {
                name: "MODEL_RESPONSE_DATA_BYTE_ITEM_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["pdf", "plaintext-utf8"],
              },
            },
            {
              name: "--model-response-data-text",
              description: "Plaintext string data for sanitization",
              args: {
                name: "MODEL_RESPONSE_DATA_TEXT",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            {
              name: "--user-prompt",
              description: "User Prompt associated with Model response",
              args: {
                name: "USER_PROMPT",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "sanitize-user-prompt",
          description: "Sanitize User Prompt",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--byte-item-data-from-file",
              description:
                "Bytes Data. Use a full or relative path to a local file containing the value of byte_item_data",
              args: {
                name: "BYTE_ITEM_DATA_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--byte-item-data-type",
              description:
                "The type of byte data. _BYTE_ITEM_DATA_TYPE_ must be one of:\n+\n*pdf*::: PDF\n*plaintext-utf8*::: plain text\n:::\n+",
              args: {
                name: "BYTE_ITEM_DATA_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["pdf", "plaintext-utf8"],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7277,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            {
              name: "--user-prompt-data-text",
              description: "Plaintext string data for sanitization",
              args: {
                name: "USER_PROMPT_DATA_TEXT",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "update",
          description: "Update Model Armor Template",
          options: [
            flag42,
            flag46,
            {
              name: "--add-rai-settings-filters",
              description:
                'Add new value to rai_settings_filters list. List of Responsible AI filters enabled for template.\n+\n*confidenceLevel*:::\nConfidence level for this RAI filter.\nDuring data sanitization, if data is classified under this filter with a\nconfidence level equal to or greater than the specified level, a positive\nmatch is reported. If the confidence level is unspecified (i.e., 0), the\nsystem will use a reasonable default level based on the `filter_type`.\n+\n*filterType*:::\nType of responsible AI filter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-rai-settings-filters=confidenceLevel=string,filterType=string --add-rai-settings-filters=confidenceLevel=string,filterType=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-rai-settings-filters=\'[{"confidenceLevel": "string", "filterType": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_RAI_SETTINGS_FILTERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag352,
            flag354,
            flag1100,
            flag1201,
            {
              name: "--clear-filter-config",
              description: "Set template.filterConfig back to default value",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-rai-settings-filters",
              description:
                "Clear rai_settings_filters value and set to empty list",
            },
            {
              name: "--clear-template-metadata",
              description:
                "Set template.templateMetadata back to default value",
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
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
            flag7277,
            flag7356,
            flag7528,
            flag11297,
            flag11299,
            flag11637,
            flag11946,
            {
              name: "--rai-settings-filters",
              description:
                'Set rai_settings_filters to new value. List of Responsible AI filters enabled for template.\n+\n*confidenceLevel*:::\nConfidence level for this RAI filter.\nDuring data sanitization, if data is classified under this filter with a\nconfidence level equal to or greater than the specified level, a positive\nmatch is reported. If the confidence level is unspecified (i.e., 0), the\nsystem will use a reasonable default level based on the `filter_type`.\n+\n*filterType*:::\nType of responsible AI filter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rai-settings-filters=confidenceLevel=string,filterType=string --rai-settings-filters=confidenceLevel=string,filterType=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rai-settings-filters=\'[{"confidenceLevel": "string", "filterType": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "RAI_SETTINGS_FILTERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
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
            {
              name: "--remove-rai-settings-filters",
              description:
                'Remove existing value from rai_settings_filters list. List of Responsible AI filters enabled for template.\n+\n*confidenceLevel*:::\nConfidence level for this RAI filter.\nDuring data sanitization, if data is classified under this filter with a\nconfidence level equal to or greater than the specified level, a positive\nmatch is reported. If the confidence level is unspecified (i.e., 0), the\nsystem will use a reasonable default level based on the `filter_type`.\n+\n*filterType*:::\nType of responsible AI filter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-rai-settings-filters=confidenceLevel=string,filterType=string --remove-rai-settings-filters=confidenceLevel=string,filterType=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-rai-settings-filters=\'[{"confidenceLevel": "string", "filterType": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-rai-settings-filters=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_RAI_SETTINGS_FILTERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12840,
            flag14809,
            flag14810,
            flag14811,
            flag14812,
            {
              name: "--template-metadata-ignore-partial-invocation-failures",
              description:
                "If true, partial detector failures should be ignored. Use *--template-metadata-ignore-partial-invocation-failures* to enable and *--no-template-metadata-ignore-partial-invocation-failures* to disable",
            },
            {
              name: "--template-metadata-log-operations",
              description:
                "If true, log template crud operations. Use *--template-metadata-log-operations* to enable and *--no-template-metadata-log-operations* to disable",
            },
            {
              name: "--template-metadata-log-sanitize-operations",
              description:
                "If true, log sanitize operations. Use *--template-metadata-log-sanitize-operations* to enable and *--no-template-metadata-log-sanitize-operations* to disable",
            },
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
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
