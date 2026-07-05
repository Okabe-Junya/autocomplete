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
const flag142: Fig.Option = {
  name: "--add-attributes-business-owners",
  description:
    'Add new value to attributes_business_owners list. Business team that ensures user needs are met and value is delivered.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-attributes-business-owners=channel={uri=string},displayName=string,email=string --add-attributes-business-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-attributes-business-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-attributes-business-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ADD_ATTRIBUTES_BUSINESS_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag143: Fig.Option = {
  name: "--add-attributes-developer-owners",
  description:
    'Add new value to attributes_developer_owners list. Developer team that owns development and coding.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-attributes-developer-owners=channel={uri=string},displayName=string,email=string --add-attributes-developer-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-attributes-developer-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-attributes-developer-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ADD_ATTRIBUTES_DEVELOPER_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag144: Fig.Option = {
  name: "--add-attributes-operator-owners",
  description:
    'Add new value to attributes_operator_owners list. Operator team that ensures runtime and operations.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-attributes-operator-owners=channel={uri=string},displayName=string,email=string --add-attributes-operator-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-attributes-operator-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-attributes-operator-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ADD_ATTRIBUTES_OPERATOR_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag449: Fig.Option = {
  name: "--allow-partial-import",
  description:
    "If set, partially import valid IaC changes and ignore invalid ones",
};
const flag635: Fig.Option = {
  name: "--application-info-deployment-region",
  description:
    "Deployment region for the component. If the scope is set to REGIONAL,\nthen the apphub application is created in this region, e.g.\n`us-central1`",
  args: {
    name: "APPLICATION_INFO_DEPLOYMENT_REGION",
    description: "String",
    suggestions: [],
  },
};
const flag636: Fig.Option = {
  name: "--application-info-display-name",
  description:
    "Display name for the application. The number of characters should be less\nthan 64 characters",
  args: {
    name: "APPLICATION_INFO_DISPLAY_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag646: Fig.Option = {
  name: "--application-template",
  description:
    "For resources [connection, destination-component-uri], provides fallback value for resource application-template attribute. When the resource's full URI path is not provided, application-template will fallback to this flag value",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag647: Fig.Option = {
  name: "--application-template",
  description:
    "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application-template` attribute:\n* provide the argument `--application-template` on the command line",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag649: Fig.Option = {
  name: "--application-template",
  description:
    "The applicationTemplate id of the component resource.\n+\nTo set the `application-template` attribute:\n* provide the argument `component` on the command line with a fully specified name;\n* provide the argument `--application-template` on the command line",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag650: Fig.Option = {
  name: "--application-template",
  description:
    "The applicationTemplate id of the connection resource.\n+\nTo set the `application-template` attribute:\n* provide the argument `connection` on the command line with a fully specified name;\n* provide the argument `--application-template` on the command line",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag652: Fig.Option = {
  name: "--application-template",
  description:
    "The applicationTemplate id of the revision resource.\n+\nTo set the `application-template` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--application-template` on the command line",
  args: {
    name: "APPLICATION_TEMPLATE",
    description: "String",
    suggestions: [],
  },
};
const flag685: Fig.Option = {
  name: "--artifact-location-gcs-uri",
  description: "The Cloud Storage URI for storing the generated IaC",
  args: {
    name: "ARTIFACT_LOCATION_GCS_URI",
    description: "String",
    suggestions: [],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag747: Fig.Option = {
  name: "--attributes-business-owners",
  description:
    'Business team that ensures user needs are met and value is delivered.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes-business-owners=channel={uri=string},displayName=string,email=string --attributes-business-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes-business-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes-business-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES_BUSINESS_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
};
const flag748: Fig.Option = {
  name: "--attributes-business-owners",
  description:
    'Set attributes_business_owners to new value. Business team that ensures user needs are met and value is delivered.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes-business-owners=channel={uri=string},displayName=string,email=string --attributes-business-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes-business-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes-business-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES_BUSINESS_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag749: Fig.Option = {
  name: "--attributes-developer-owners",
  description:
    'Developer team that owns development and coding.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes-developer-owners=channel={uri=string},displayName=string,email=string --attributes-developer-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes-developer-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes-developer-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES_DEVELOPER_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
};
const flag750: Fig.Option = {
  name: "--attributes-developer-owners",
  description:
    'Set attributes_developer_owners to new value. Developer team that owns development and coding.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes-developer-owners=channel={uri=string},displayName=string,email=string --attributes-developer-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes-developer-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes-developer-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES_DEVELOPER_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag751: Fig.Option = {
  name: "--attributes-operator-owners",
  description:
    'Operator team that ensures runtime and operations.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes-operator-owners=channel={uri=string},displayName=string,email=string --attributes-operator-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes-operator-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes-operator-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES_OPERATOR_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
};
const flag752: Fig.Option = {
  name: "--attributes-operator-owners",
  description:
    'Set attributes_operator_owners to new value. Operator team that ensures runtime and operations.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--attributes-operator-owners=channel={uri=string},displayName=string,email=string --attributes-operator-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--attributes-operator-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--attributes-operator-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ATTRIBUTES_OPERATOR_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1392: Fig.Option = {
  name: "--catalog",
  description:
    "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1400: Fig.Option = {
  name: "--catalog",
  description:
    "The catalog id of the template resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `template` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1401: Fig.Option = {
  name: "--catalog",
  description:
    "The catalog id of the revision resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1402: Fig.Option = {
  name: "--catalog",
  description:
    "The catalog id of the share resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `share` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1506: Fig.Option = {
  name: "--clear-attributes-business-owners",
  description: "Clear attributes_business_owners value and set to empty list",
};
const flag1507: Fig.Option = {
  name: "--clear-attributes-developer-owners",
  description: "Clear attributes_developer_owners value and set to empty list",
};
const flag1508: Fig.Option = {
  name: "--clear-attributes-operator-owners",
  description: "Clear attributes_operator_owners value and set to empty list",
};
const flag2192: Fig.Option = {
  name: "--component",
  description:
    "The component id of the connection resource.\n+\nTo set the `component` attribute:\n* provide the argument `connection` on the command line with a fully specified name;\n* provide the argument `--component` on the command line",
  args: { name: "COMPONENT", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2329: Fig.Option = {
  name: "--connection",
  description:
    "The connection id of the gitRepositoryLink resource.\n+\nTo set the `connection` attribute:\n* provide the argument `--developer-connect-export-config-repo-uri` on the command line with a fully specified name;\n* provide the argument `--connection` on the command line",
  args: { name: "CONNECTION", description: "String", suggestions: [] },
};
const flag2563: Fig.Option = {
  name: "--criticality-level",
  description:
    "Criticality level.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead",
  args: { name: "CRITICALITY_LEVEL", description: "String", suggestions: [] },
};
const flag2564: Fig.Option = {
  name: "--criticality-mission-critical",
  description:
    "Indicates mission-critical Application, Service, or Workload.\nDeprecated: Please refer to type instead. Use *--criticality-mission-critical* to enable and *--no-criticality-mission-critical* to disable",
};
const flag2565: Fig.Option = {
  name: "--criticality-mission-critical",
  description:
    "Indicates mission-critical Application, Service, or Workload.\nDeprecated: Please refer to type instead",
};
const flag2569: Fig.Option = {
  name: "--criticality-type",
  description:
    "Criticality Type. _CRITICALITY_TYPE_ must be one of:\n+\n*high*::: High impact.\n*low*::: Low impact.\n*medium*::: Medium impact.\n*mission-critical*::: Mission critical service, application or workload.\n:::\n+",
  args: {
    name: "CRITICALITY_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["high", "low", "medium", "mission-critical"],
  },
};
const flag2570: Fig.Option = {
  name: "--criticality-type",
  description:
    "Criticality Type. _CRITICALITY_TYPE_ must be one of:\n+\n*high*::: High impact.\n*low*::: Low impact.\n*medium*::: Medium impact.\n*mission-critical*::: Mission critical service, application or workload.\n:::\n+",
  args: {
    name: "CRITICALITY_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["high", "low", "medium", "mission-critical"],
  },
};
const flag3018: Fig.Option = {
  name: "--deployment-project",
  description: "Deployment project of the application",
  args: { name: "DEPLOYMENT_PROJECT", description: "String", suggestions: [] },
};
const flag3019: Fig.Option = {
  name: "--deployment-region",
  description: "The region where the application is deployed",
  args: { name: "DEPLOYMENT_REGION", description: "String", suggestions: [] },
};
const flag3167: Fig.Option = {
  name: "--description",
  description: "Application template description",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3178: Fig.Option = {
  name: "--description",
  description: "Description for the space",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3195: Fig.Option = {
  name: "--description",
  description: "Description of the application",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3298: Fig.Option = {
  name: "--description",
  description: "The catalog description",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3299: Fig.Option = {
  name: "--description",
  description: "The catalog template description",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3375: Fig.Option = {
  name: "--destination-component-uri",
  description:
    "ID of the component or fully qualified identifier for the component.\n+\nTo set the `component` attribute:\n* provide the argument `--destination-component-uri` on the command line",
  args: {
    name: "DESTINATION_COMPONENT_URI",
    description: "String",
    suggestions: [],
  },
};
const flag3499: Fig.Option = {
  name: "--developer-connect-export-config-branch",
  description:
    "The branch in repo to which the content such as Infrastructure as Code\n(IaC) should be written to. If empty, Application Design Center will create\na branch and push the changes",
  args: {
    name: "DEVELOPER_CONNECT_EXPORT_CONFIG_BRANCH",
    description: "String",
    suggestions: [],
  },
};
const flag3500: Fig.Option = {
  name: "--developer-connect-export-config-dir",
  description:
    "Directory, relative to the source repo, where content such as\nInfrastructure as Code (IaC) will be stored.\nThis must be a relative path.To specify the root directory, use '/'.\nIf the path or any subdirectories do not exist, they will be created",
  args: {
    name: "DEVELOPER_CONNECT_EXPORT_CONFIG_DIR",
    description: "String",
    suggestions: [],
  },
};
const flag3501: Fig.Option = {
  name: "--developer-connect-export-config-repo-uri",
  description:
    "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink.\n+\nTo set the `git-repository-link` attribute:\n* provide the argument `--developer-connect-export-config-repo-uri` on the command line",
  args: {
    name: "DEVELOPER_CONNECT_EXPORT_CONFIG_REPO_URI",
    description: "String",
    suggestions: [],
  },
};
const flag3705: Fig.Option = {
  name: "--display-name",
  description: "Application template display name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3711: Fig.Option = {
  name: "--display-name",
  description: "Display name for the space",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3718: Fig.Option = {
  name: "--display-name",
  description: "Display name of the application",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3783: Fig.Option = {
  name: "--display-name",
  description: "The catalog display name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3784: Fig.Option = {
  name: "--display-name",
  description: "The component display name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3800: Fig.Option = {
  name: "--display-name",
  description: "The display name of a catalog template",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4481: Fig.Option = {
  name: "--environment-type",
  description:
    "Environment Type. _ENVIRONMENT_TYPE_ must be one of:\n+\n*development*::: Development environment.\n*production*::: Production environment.\n*staging*::: Staging environment.\n*test*::: Test environment.\n:::\n+",
  args: {
    name: "ENVIRONMENT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["development", "production", "staging", "test"],
  },
};
const flag4482: Fig.Option = {
  name: "--environment-type",
  description:
    "Environment Type. _ENVIRONMENT_TYPE_ must be one of:\n+\n*development*::: Development environment.\n*production*::: Production environment.\n*staging*::: Staging environment.\n*test*::: Test environment.\n:::\n+",
  args: {
    name: "ENVIRONMENT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["development", "production", "staging", "test"],
  },
};
const flag4490: Fig.Option = {
  name: "--environment",
  description:
    "Environment name.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead",
  args: { name: "ENVIRONMENT", description: "String", suggestions: [] },
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
const flag5156: Fig.Option = {
  name: "--gcs-bucket",
  description:
    "An existing Google Cloud Storage bucket that you want to use instead of\ncreating a new bucket during Application Design Center setup.\nIf not provided, a default bucket is created during setup.\nThe bucket must exist in the same project as the space.\nIf the bucket name does not exist in the same project as the space, the\nrequest fails with an INVALID_ARGUMENT error.\nIf you do not have access to the bucket, the request fails with a\nPERMISSION_DENIED error.\nFormat: {$bucket_name}\nFor example, if the Cloud Storage bucket URI is gs:\\/\\/{$bucket_name}, the\nformat is {$bucket_name}",
  args: { name: "GCS_BUCKET", description: "String", suggestions: [] },
};
const flag5193: Fig.Option = {
  name: "--gcs-uri",
  description:
    "The Cloud Storage URI of the Terraform code (e.g., gs://my-bucket/iac)",
  args: { name: "GCS_URI", description: "String", suggestions: [] },
};
const flag5194: Fig.Option = {
  name: "--gcs-uri",
  description:
    "The Cloud Storage URI to write the generated IaC to.\n+\nDEPRECATED: Use the 'artifact_location' field instead",
  args: { name: "GCS_URI", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5559: Fig.Option = {
  name: "--iac-format",
  description:
    "The IaC format to generate. _IAC_FORMAT_ must be one of:\n+\n*helm*::: IaC format is HELM.\n*terraform*::: IaC format is Terraform.\n:::\n+",
  args: {
    name: "IAC_FORMAT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["helm", "terraform"],
  },
};
const flag5560: Fig.Option = {
  name: "--iac-module-from-file",
  description:
    "Path to a local YAML or JSON file containing the IaC module definition. Use a full or relative path to a local file containing the value of iac_module",
  args: {
    name: "IAC_MODULE_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
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
const flag6620: Fig.Option = {
  name: "--location",
  description:
    "For resources [connection, destination-component-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6850: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the application.\n+\nTo set the `location` attribute:\n* provide the argument `APPLICATION` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6864: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the space.\n+\nTo set the `location` attribute:\n* provide the argument `space` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6940: Fig.Option = {
  name: "--location",
  description:
    "The location id of the applicationTemplate resource.\n+\nTo set the `location` attribute:\n* provide the argument `--application-template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6941: Fig.Option = {
  name: "--location",
  description:
    "The location id of the applicationTemplate resource.\n+\nTo set the `location` attribute:\n* provide the argument `application_template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6942: Fig.Option = {
  name: "--location",
  description:
    "The location id of the catalog resource.\n+\nTo set the `location` attribute:\n* provide the argument `--catalog` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6943: Fig.Option = {
  name: "--location",
  description:
    "The location id of the catalog resource.\n+\nTo set the `location` attribute:\n* provide the argument `catalog` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6955: Fig.Option = {
  name: "--location",
  description:
    "The location id of the component resource.\n+\nTo set the `location` attribute:\n* provide the argument `component` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6992: Fig.Option = {
  name: "--location",
  description:
    "The location id of the space resource.\n+\nTo set the `location` attribute:\n* provide the argument `--space` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6993: Fig.Option = {
  name: "--location",
  description:
    "The location id of the space resource.\n+\nTo set the `location` attribute:\n* provide the argument `space` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6996: Fig.Option = {
  name: "--location",
  description:
    "The location id of the template resource.\n+\nTo set the `location` attribute:\n* provide the argument `template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7224: Fig.Option = {
  name: "--location",
  description:
    "The location id of the application resource.\n+\nTo set the `location` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7236: Fig.Option = {
  name: "--location",
  description:
    "The location id of the connection resource.\n+\nTo set the `location` attribute:\n* provide the argument `connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7266: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7271: Fig.Option = {
  name: "--location",
  description:
    "The location id of the revision resource.\n+\nTo set the `location` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7275: Fig.Option = {
  name: "--location",
  description:
    "The location id of the share resource.\n+\nTo set the `location` attribute:\n* provide the argument `share` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
const flag11113: Fig.Option = {
  name: "--params-update-strategy",
  description:
    "Specifies the strategy to use when updating the application parameters\nwhile updating the application template revision. _PARAMS_UPDATE_STRATEGY_ must be (only one value is supported):\n+\n*replace*::: Replaces the existing field values with the provided ones.\n:::\n+",
  args: {
    name: "PARAMS_UPDATE_STRATEGY",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["replace"],
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
const flag12560: Fig.Option = {
  name: "--remove-attributes-business-owners",
  description:
    'Remove existing value from attributes_business_owners list. Business team that ensures user needs are met and value is delivered.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-attributes-business-owners=channel={uri=string},displayName=string,email=string --remove-attributes-business-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-attributes-business-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-attributes-business-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "REMOVE_ATTRIBUTES_BUSINESS_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag12561: Fig.Option = {
  name: "--remove-attributes-developer-owners",
  description:
    'Remove existing value from attributes_developer_owners list. Developer team that owns development and coding.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-attributes-developer-owners=channel={uri=string},displayName=string,email=string --remove-attributes-developer-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-attributes-developer-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-attributes-developer-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "REMOVE_ATTRIBUTES_DEVELOPER_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag12562: Fig.Option = {
  name: "--remove-attributes-operator-owners",
  description:
    'Remove existing value from attributes_operator_owners list. Operator team that ensures runtime and operations.\n+\n*channel*:::\nCommunication channel of the contacts.\n+\n*uri*::::\nURI of the channel.\n+\n*displayName*:::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*:::\nEmail address of the contacts.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-attributes-operator-owners=channel={uri=string},displayName=string,email=string --remove-attributes-operator-owners=channel={uri=string},displayName=string,email=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-attributes-operator-owners=\'[{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-attributes-operator-owners=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "REMOVE_ATTRIBUTES_OPERATOR_OWNERS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag13338: Fig.Option = {
  name: "--scope-type",
  description:
    "Scope Type. _SCOPE_TYPE_ must be one of:\n+\n*global*::: Global type.\n*regional*::: Regional type.\n:::\n+",
  args: {
    name: "SCOPE_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["global", "regional"],
  },
};
const flag13339: Fig.Option = {
  name: "--scope-type",
  description:
    "Scope Type. _SCOPE_TYPE_ must be one of:\n+\n*global*::: Global type.\n*regional*::: Regional type.\n:::\n+",
  args: {
    name: "SCOPE_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["global", "regional"],
  },
};
const flag13549: Fig.Option = {
  name: "--service-account",
  description: "Your own service account that you use to deploy an application",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag13956: Fig.Option = {
  name: "--source-application-template-revision",
  description: "Application template revision URI",
  args: {
    name: "SOURCE_APPLICATION_TEMPLATE_REVISION",
    description: "String",
    suggestions: [],
  },
};
const flag14091: Fig.Option = {
  name: "--source-shared-template-revision-uri",
  description: "Shared template revision URI",
  args: {
    name: "SOURCE_SHARED_TEMPLATE_REVISION_URI",
    description: "String",
    suggestions: [],
  },
};
const flag14168: Fig.Option = {
  name: "--space",
  description:
    "For resources [connection, destination-component-uri], provides fallback value for resource space attribute. When the resource's full URI path is not provided, space will fallback to this flag value",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14169: Fig.Option = {
  name: "--space",
  description:
    "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14172: Fig.Option = {
  name: "--space",
  description:
    "The ID of the space.\n+\nTo set the `space` attribute:\n* provide the argument `APPLICATION` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14174: Fig.Option = {
  name: "--space",
  description:
    "The space id of the applicationTemplate resource.\n+\nTo set the `space` attribute:\n* provide the argument `--application-template` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14175: Fig.Option = {
  name: "--space",
  description:
    "The space id of the applicationTemplate resource.\n+\nTo set the `space` attribute:\n* provide the argument `application_template` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14176: Fig.Option = {
  name: "--space",
  description:
    "The space id of the catalog resource.\n+\nTo set the `space` attribute:\n* provide the argument `--catalog` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14177: Fig.Option = {
  name: "--space",
  description:
    "The space id of the catalog resource.\n+\nTo set the `space` attribute:\n* provide the argument `catalog` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14179: Fig.Option = {
  name: "--space",
  description:
    "The space id of the component resource.\n+\nTo set the `space` attribute:\n* provide the argument `component` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14184: Fig.Option = {
  name: "--space",
  description:
    "The space id of the template resource.\n+\nTo set the `space` attribute:\n* provide the argument `template` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14185: Fig.Option = {
  name: "--space",
  description:
    "The space id of the application resource.\n+\nTo set the `space` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14186: Fig.Option = {
  name: "--space",
  description:
    "The space id of the connection resource.\n+\nTo set the `space` attribute:\n* provide the argument `connection` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14188: Fig.Option = {
  name: "--space",
  description:
    "The space id of the revision resource.\n+\nTo set the `space` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14189: Fig.Option = {
  name: "--space",
  description:
    "The space id of the share resource.\n+\nTo set the `space` attribute:\n* provide the argument `share` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
  args: { name: "SPACE", description: "String", suggestions: [] },
};
const flag14825: Fig.Option = {
  name: "--template",
  description:
    "The template id of the revision resource.\n+\nTo set the `template` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--template` on the command line",
  args: { name: "TEMPLATE", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15078: Fig.Option = {
  name: "--type",
  description:
    "The Application Design Center application template type. _TYPE_ must be one of:\n+\n*application*::: An application template is a composition of workload/service/asset\ntemplates.\n*asset*::: An asset template can be used to provision resources that are not services\nor workloads.\n*composite-application-template*::: A composite application template.\n*helm-application*::: A helm chart based template.\n*helm-chart*::: A helm chart based template.\n*jss-solution*::: A Jumpstart Solution template.\n*service*::: A service template is an App Hub service.\n*service-data-source*::: A service data source template.\n*standard-application-template*::: A standard application template.\n*workload*::: A workload template is an App Hub workload.\n:::\n+",
  args: {
    name: "TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "application",
      "asset",
      "composite-application-template",
      "helm-application",
      "helm-chart",
      "jss-solution",
      "service",
      "service-data-source",
      "standard-application-template",
      "workload",
    ],
  },
};
const flag15090: Fig.Option = {
  name: "--type",
  description:
    "The type of the application. _TYPE_ must be one of:\n+\n*helm-app*::: Application type is helm application.\n*terraform-app*::: Application type is terraform application.\n:::\n+",
  args: {
    name: "TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["helm-app", "terraform-app"],
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
const flag15356: Fig.Option = {
  name: "--validate-iac",
  description: "Validate the IaC without performing the import",
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
const flag15602: Fig.Option = {
  name: "--worker-pool",
  description:
    "The user-specified Worker Pool resource in which the Cloud Build job\nwill execute. Format:\nprojects/{project}/locations/{location}/workerPools/{workerPoolId}\nIf this flag is omitted, the worker pool already defined on the\napplication will be used. If no worker pool is defined on the\napplication, the default Cloud Build worker pool is used. The\nworker pool must exist in the same region as the application",
  args: {
    name: "WORKER_POOL",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};

const completionSpec: Fig.Spec = {
  name: "design-center",
  description: "Manage Application Design Center resources",
  subcommands: [
    {
      name: "locations",
      description: "Manage Design Center Locations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Design Center location",
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
          description: "List Design Center locations",
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
            flag15249,
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
          description: "Wait for an operation to complete",
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
      name: "spaces",
      description: "Manage space resources",
      subcommands: [
        {
          name: "application-templates",
          description: "Manage application template resources",
          subcommands: [
            {
              name: "commit",
              description: "Commit an application template",
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
                flag6941,
                flag7356,
                flag11637,
                flag11946,
                flag14175,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application_template` attribute:\n* provide the argument `application_template` on the command line",
              },
            },
            {
              name: "components",
              description: "Manage component resources",
              subcommands: [
                {
                  name: "connections",
                  description: "Manage connection resources",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create a connection",
                      options: [
                        flag42,
                        flag46,
                        flag646,
                        flag1201,
                        flag2192,
                        flag2292,
                        {
                          name: "--destination-component-parameters",
                          description:
                            'The parameters of the connection associated with the destination component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--destination-component-parameters=key=string,value={...} --destination-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--destination-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--destination-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "DESTINATION_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                            suggestions: [],
                          },
                        },
                        flag3375,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6620,
                        flag7356,
                        flag11637,
                        flag11946,
                        {
                          name: "--source-component-parameters",
                          description:
                            'The parameters of the connection associated with the source component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--source-component-parameters=key=string,value={...} --source-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--source-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--source-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "SOURCE_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                            suggestions: [],
                          },
                        },
                        flag14168,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
                      },
                    },
                    {
                      name: "delete",
                      description: "Delete a connection",
                      options: [
                        flag42,
                        flag46,
                        flag650,
                        flag1201,
                        flag2192,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag7236,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag14186,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
                      },
                    },
                    {
                      name: "describe",
                      description: "Describe a connection",
                      options: [
                        flag42,
                        flag46,
                        flag650,
                        flag1201,
                        flag2192,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag7236,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag14186,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
                      },
                    },
                    {
                      name: "list",
                      description: "List connections",
                      options: [
                        flag42,
                        flag46,
                        {
                          name: "--application-template",
                          description:
                            "The applicationTemplate id of the component resource.\n+\nTo set the `application-template` attribute:\n* provide the argument `--component` on the command line with a fully specified name;\n* provide the argument `--application-template` on the command line",
                          args: {
                            name: "APPLICATION_TEMPLATE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag1201,
                        {
                          name: "--component",
                          description:
                            "ID of the component or fully qualified identifier for the component.\n+\nTo set the `component` attribute:\n* provide the argument `--component` on the command line",
                          args: {
                            name: "COMPONENT",
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
                            "The location id of the component resource.\n+\nTo set the `location` attribute:\n* provide the argument `--component` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                        {
                          name: "--space",
                          description:
                            "The space id of the component resource.\n+\nTo set the `space` attribute:\n* provide the argument `--component` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
                          args: {
                            name: "SPACE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag14975,
                        flag15249,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update a connection",
                      options: [
                        flag42,
                        flag46,
                        {
                          name: "--add-destination-component-parameters",
                          description:
                            'Add new value to destination_component_parameters list. The parameters of the connection associated with the destination component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-destination-component-parameters=key=string,value={...} --add-destination-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-destination-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-destination-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "ADD_DESTINATION_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--add-source-component-parameters",
                          description:
                            'Add new value to source_component_parameters list. The parameters of the connection associated with the source component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-source-component-parameters=key=string,value={...} --add-source-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-source-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-source-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "ADD_SOURCE_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                            suggestions: [],
                          },
                        },
                        flag646,
                        flag1201,
                        {
                          name: "--clear-destination-component-parameters",
                          description:
                            "Clear destination_component_parameters value and set to empty list",
                        },
                        {
                          name: "--clear-source-component-parameters",
                          description:
                            "Clear source_component_parameters value and set to empty list",
                        },
                        flag2192,
                        flag2292,
                        {
                          name: "--destination-component-parameters",
                          description:
                            'Set destination_component_parameters to new value. The parameters of the connection associated with the destination component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--destination-component-parameters=key=string,value={...} --destination-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--destination-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--destination-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "DESTINATION_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                            suggestions: [],
                          },
                        },
                        flag3375,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6620,
                        flag7356,
                        flag11637,
                        flag11946,
                        {
                          name: "--remove-destination-component-parameters",
                          description:
                            'Remove existing value from destination_component_parameters list. The parameters of the connection associated with the destination component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-destination-component-parameters=key=string,value={...} --remove-destination-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-destination-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-destination-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "REMOVE_DESTINATION_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--remove-source-component-parameters",
                          description:
                            'Remove existing value from source_component_parameters list. The parameters of the connection associated with the source component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-source-component-parameters=key=string,value={...} --remove-source-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-source-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-source-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "REMOVE_SOURCE_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--source-component-parameters",
                          description:
                            'Set source_component_parameters to new value. The parameters of the connection associated with the source component.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--source-component-parameters=key=string,value={...} --source-component-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--source-component-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--source-component-parameters=path_to_file.(yaml|json)\n+\n```',
                          args: {
                            name: "SOURCE_COMPONENT_PARAMETERS",
                            description:
                              "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                            suggestions: [],
                          },
                        },
                        flag14168,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "CONNECTION",
                        description:
                          "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
                      },
                    },
                  ],
                },
                {
                  name: "create",
                  description: "Create a component",
                  options: [
                    flag42,
                    flag46,
                    {
                      name: "--application-info-apphub-id",
                      description:
                        "The application ID of the apphub application. The ID must be 1-63\ncharacters long and should match the regular expression\n`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`",
                      args: {
                        name: "APPLICATION_INFO_APPHUB_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag635,
                    flag636,
                    flag649,
                    flag747,
                    flag749,
                    flag751,
                    flag1201,
                    flag2292,
                    flag2563,
                    flag2565,
                    flag2570,
                    flag3784,
                    flag4490,
                    flag4482,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6955,
                    flag7356,
                    {
                      name: "--parameters",
                      description:
                        'The component parameters.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--parameters=key=string,value={...} --parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--parameters=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "PARAMETERS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    flag11946,
                    flag13339,
                    {
                      name: "--shared-template-revision-uri",
                      description:
                        "The shared template used to generate the component",
                      args: {
                        name: "SHARED_TEMPLATE_REVISION_URI",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14179,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component.\n+\nTo set the `component` attribute:\n* provide the argument `component` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a component",
                  options: [
                    flag42,
                    flag46,
                    flag649,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    {
                      name: "--force",
                      description:
                        "If set to true, the component's children are also deleted. If false, the\ncomponent is only deleted if it has no children",
                    },
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6955,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14179,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component.\n+\nTo set the `component` attribute:\n* provide the argument `component` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a component",
                  options: [
                    flag42,
                    flag46,
                    flag649,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6955,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14179,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component.\n+\nTo set the `component` attribute:\n* provide the argument `component` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List components",
                  options: [
                    flag42,
                    flag46,
                    flag647,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6940,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11946,
                    flag13948,
                    flag14174,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description: "Update a component",
                  options: [
                    flag42,
                    flag46,
                    flag142,
                    flag143,
                    flag144,
                    {
                      name: "--add-parameters",
                      description:
                        'Add new value to parameters list. The component parameters.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-parameters=key=string,value={...} --add-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-parameters=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "ADD_PARAMETERS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--application-info-apphub-id",
                      description:
                        "The application ID of the apphub application. The ID must be 1-63\ncharacters long and should match the regular expression\n`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`",
                      args: {
                        name: "APPLICATION_INFO_APPHUB_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag635,
                    flag636,
                    flag649,
                    flag748,
                    flag750,
                    flag752,
                    flag1201,
                    {
                      name: "--clear-application-info",
                      description:
                        "Set component.applicationInfo back to default value",
                    },
                    flag1506,
                    flag1507,
                    flag1508,
                    {
                      name: "--clear-parameters",
                      description:
                        "Clear parameters value and set to empty list",
                    },
                    flag2292,
                    flag2563,
                    flag2564,
                    flag2569,
                    flag3784,
                    flag4490,
                    flag4481,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6955,
                    flag7356,
                    {
                      name: "--parameters",
                      description:
                        'Set parameters to new value. The component parameters.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--parameters=key=string,value={...} --parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--parameters=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "PARAMETERS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    flag11946,
                    flag12560,
                    flag12561,
                    flag12562,
                    {
                      name: "--remove-parameters",
                      description:
                        'Remove existing value from parameters list. The component parameters.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-parameters=key=string,value={...} --remove-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-parameters=path_to_file.(yaml|json)\n+\n```',
                      args: {
                        name: "REMOVE_PARAMETERS",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                        suggestions: [],
                      },
                    },
                    flag13338,
                    flag14179,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "COMPONENT",
                    description:
                      "ID of the component or fully qualified identifier for the component.\n+\nTo set the `component` attribute:\n* provide the argument `component` on the command line",
                  },
                },
              ],
            },
            {
              name: "create",
              description: "Create an application template",
              options: [
                flag42,
                flag46,
                {
                  name: "--application-parameters",
                  description:
                    'Parameters to apply to all components in an application. You can specify\nprojectID and region.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--application-parameters=key=string,value={...} --application-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--application-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--application-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "APPLICATION_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag1201,
                {
                  name: "--composition-type",
                  description:
                    "The composition type of the applicationTemplate: STANDARD OR COMPOSITE.\nThis is a create time only param. _COMPOSITION_TYPE_ must be one of:\n+\n*composite*::: ApplicationCompositionType is COMPOSITE. The template is composed of\nSTANDARD applicationTemplate(s) and might be having multiple root modules\nin terraform code.\n*standard*::: ApplicationCompositionType is STANDARD. The applicationTemplate or\napplication is composed of components only of type service/workload/asset\nand has a single root module in terraform code.\n:::\n+",
                  args: {
                    name: "COMPOSITION_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["composite", "standard"],
                  },
                },
                flag2292,
                flag3167,
                flag3705,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6941,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--root-input-variables",
                  description:
                    'Root level input variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--root-input-variables=componentUri=string,variable=string --root-input-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--root-input-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--root-input-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ROOT_INPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--root-output-variables",
                  description:
                    'Root level output variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--root-output-variables=componentUri=string,variable=string --root-output-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--root-output-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--root-output-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ROOT_OUTPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--saas-runtime-context-names",
                  description:
                    "The SaaS names. Format for each SaaS:\nprojects/{project}/locations/{location}/saas/{saas}",
                  args: {
                    name: "SAAS_RUNTIME_CONTEXT_NAMES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14175,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application_template` attribute:\n* provide the argument `application_template` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an application template",
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
                    "If set to true, the application template's children are also deleted. If\nfalse, the application template is only deleted if it has no children",
                },
                flag5091,
                flag5453,
                flag5699,
                flag6941,
                flag7356,
                flag11637,
                flag11946,
                flag14175,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application_template` attribute:\n* provide the argument `application_template` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an application template",
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
                flag6941,
                flag7356,
                flag11637,
                flag11946,
                flag14175,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application_template` attribute:\n* provide the argument `application_template` on the command line",
              },
            },
            {
              name: "generate",
              description: "Generate IaC for an application template",
              options: [
                flag42,
                flag46,
                flag685,
                flag1201,
                flag2292,
                flag2329,
                flag3499,
                flag3500,
                flag3501,
                flag4900,
                flag4902,
                flag5091,
                flag5194,
                flag5453,
                flag5559,
                flag5699,
                {
                  name: "--location",
                  description:
                    "For resources [application_template, developer-connect-export-config-repo-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                flag14175,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application_template` attribute:\n* provide the argument `application_template` on the command line",
              },
            },
            {
              name: "import",
              description: "Import to an application template",
              options: [
                flag42,
                flag46,
                {
                  name: "--application-template",
                  description:
                    "For resources [application-template-revision-uri, application_template], provides fallback value for resource application-template attribute. When the resource's full URI path is not provided, application-template will fallback to this flag value",
                  args: {
                    name: "APPLICATION_TEMPLATE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--application-template-revision-uri",
                  description:
                    "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `--application-template-revision-uri` on the command line",
                  args: {
                    name: "APPLICATION_TEMPLATE_REVISION_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
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
                    "For resources [application-template-revision-uri, application_template, shared-template-revision-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--shared-template",
                  description:
                    "The sharedTemplate id of the revision resource.\n+\nTo set the `shared-template` attribute:\n* provide the argument `--shared-template-revision-uri` on the command line with a fully specified name;\n* provide the argument `--shared-template` on the command line",
                  args: {
                    name: "SHARED_TEMPLATE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--shared-template-revision-uri",
                  description:
                    "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `--shared-template-revision-uri` on the command line",
                  args: {
                    name: "SHARED_TEMPLATE_REVISION_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--space",
                  description:
                    "For resources [application-template-revision-uri, application_template, shared-template-revision-uri], provides fallback value for resource space attribute. When the resource's full URI path is not provided, space will fallback to this flag value",
                  args: {
                    name: "SPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "import-iac",
              description:
                "Import Infrastructure as Code (IaC) for an Application Template",
              options: [
                flag42,
                flag46,
                flag449,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5193,
                flag5453,
                flag5560,
                flag5699,
                {
                  name: "--location",
                  description:
                    "The Cloud location for the application_template.\n+\nTo set the `location` attribute:\n* provide the argument `APPLICATION_TEMPLATE` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--space",
                  description:
                    "The ID of the space.\n+\nTo set the `space` attribute:\n* provide the argument `APPLICATION_TEMPLATE` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
                  args: {
                    name: "SPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15356,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the application_template or fully qualified identifier for the application_template.\n+\nTo set the `application_template_id` attribute:\n* provide the argument `APPLICATION_TEMPLATE` on the command line",
              },
            },
            {
              name: "list",
              description: "List application templates",
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
                flag6992,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14169,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "revisions",
              description: "Manage application template revision resources",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete an application template revision",
                  options: [
                    flag42,
                    flag46,
                    flag652,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7271,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14188,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe an application template revision",
                  options: [
                    flag42,
                    flag46,
                    flag652,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7271,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14188,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
                  },
                },
                {
                  name: "generate",
                  description:
                    "Generate IaC for an application template revision",
                  options: [
                    flag42,
                    flag46,
                    flag652,
                    flag685,
                    flag1201,
                    flag2292,
                    flag2329,
                    flag3499,
                    flag3500,
                    flag3501,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5559,
                    flag5699,
                    {
                      name: "--location",
                      description:
                        "For resources [revision, developer-connect-export-config-repo-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14188,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List application template revisions",
                  options: [
                    flag42,
                    flag46,
                    flag647,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6940,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11946,
                    flag13948,
                    flag14174,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
              ],
            },
            {
              name: "update",
              description: "Update an application template",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-application-parameters",
                  description:
                    'Add new value to application_parameters list. Parameters to apply to all components in an application. You can specify\nprojectID and region.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-application-parameters=key=string,value={...} --add-application-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-application-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-application-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_APPLICATION_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-root-input-variables",
                  description:
                    'Add new value to root_input_variables list. Root level input variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-root-input-variables=componentUri=string,variable=string --add-root-input-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-root-input-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-root-input-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_ROOT_INPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-root-output-variables",
                  description:
                    'Add new value to root_output_variables list. Root level output variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-root-output-variables=componentUri=string,variable=string --add-root-output-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-root-output-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-root-output-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_ROOT_OUTPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-saas-runtime-context-names",
                  description:
                    "Add new value to saas_runtime_context_names list",
                  args: {
                    name: "ADD_SAAS_RUNTIME_CONTEXT_NAMES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--application-parameters",
                  description:
                    'Set application_parameters to new value. Parameters to apply to all components in an application. You can specify\nprojectID and region.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--application-parameters=key=string,value={...} --application-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--application-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--application-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "APPLICATION_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag1201,
                {
                  name: "--clear-application-parameters",
                  description:
                    "Clear application_parameters value and set to empty list",
                },
                {
                  name: "--clear-root-input-variables",
                  description:
                    "Clear root_input_variables value and set to empty list",
                },
                {
                  name: "--clear-root-output-variables",
                  description:
                    "Clear root_output_variables value and set to empty list",
                },
                {
                  name: "--clear-saas-runtime-context",
                  description:
                    "Set applicationTemplate.saasRuntimeContext back to default value",
                },
                {
                  name: "--clear-saas-runtime-context-names",
                  description:
                    "Clear saas_runtime_context_names value and set to empty list",
                },
                flag2292,
                flag3167,
                flag3705,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6941,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--remove-application-parameters",
                  description:
                    'Remove existing value from application_parameters list. Parameters to apply to all components in an application. You can specify\nprojectID and region.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-application-parameters=key=string,value={...} --remove-application-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-application-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-application-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_APPLICATION_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-root-input-variables",
                  description:
                    'Remove existing value from root_input_variables list. Root level input variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-root-input-variables=componentUri=string,variable=string --remove-root-input-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-root-input-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-root-input-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ROOT_INPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-root-output-variables",
                  description:
                    'Remove existing value from root_output_variables list. Root level output variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-root-output-variables=componentUri=string,variable=string --remove-root-output-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-root-output-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-root-output-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ROOT_OUTPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-saas-runtime-context-names",
                  description:
                    "Remove existing value from saas_runtime_context_names list",
                  args: {
                    name: "REMOVE_SAAS_RUNTIME_CONTEXT_NAMES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--root-input-variables",
                  description:
                    'Set root_input_variables to new value. Root level input variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--root-input-variables=componentUri=string,variable=string --root-input-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--root-input-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--root-input-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ROOT_INPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--root-output-variables",
                  description:
                    'Set root_output_variables to new value. Root level output variables of the application template.\n+\n*componentUri*:::\nComponent to which this variable belongs.\n+\n*variable*:::\nName of the variable.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--root-output-variables=componentUri=string,variable=string --root-output-variables=componentUri=string,variable=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--root-output-variables=\'[{"componentUri": "string", "variable": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--root-output-variables=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ROOT_OUTPUT_VARIABLES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--saas-runtime-context-names",
                  description: "Set saas_runtime_context_names to new value",
                  args: {
                    name: "SAAS_RUNTIME_CONTEXT_NAMES",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag14175,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "APPLICATION_TEMPLATE",
                description:
                  "ID of the applicationTemplate or fully qualified identifier for the applicationTemplate.\n+\nTo set the `application_template` attribute:\n* provide the argument `application_template` on the command line",
              },
            },
          ],
        },
        {
          name: "applications",
          description: "Manage application resources",
          subcommands: [
            {
              name: "create",
              description: "Create an application",
              options: [
                flag42,
                flag46,
                {
                  name: "--app-parameters",
                  description:
                    'A list of parameters to attach to the deployment source object, which is a\ncatalog entry or application template snapshot.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--app-parameters=key=string,value={...} --app-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--app-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--app-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "APP_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag747,
                flag749,
                flag751,
                flag1201,
                {
                  name: "--component-parameters",
                  description:
                    'A list of component parameters to associate with the application.\n+\n*applicationInfo*:::\nThe application associated with the component.\n+\n*apphubApplicationId*::::\nThe application ID of the apphub application. The ID must be 1-63\ncharacters long and should match the regular expression\n`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.\n+\n*attributes*::::\nAttributes of apphub application.\n+\n*businessOwners*:::::\nBusiness team that ensures user needs are met and value is delivered.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*criticality*:::::\nUser-defined criticality information.\n+\n*level*::::::\nCriticality level.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*missionCritical*::::::\nIndicates mission-critical Application, Service, or Workload.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nCriticality Type.\n+\n*developerOwners*:::::\nDeveloper team that owns development and coding.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*environment*:::::\nUser-defined environment information.\n+\n*environment*::::::\nEnvironment name.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nEnvironment Type.\n+\n*operatorOwners*:::::\nOperator team that ensures runtime and operations.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*deploymentRegion*::::\nDeployment region for the component. If the scope is set to REGIONAL,\nthen the apphub application is created in this region, e.g.\n`us-central1`.\n+\n*displayName*::::\nDisplay name for the application. The number of characters should be less\nthan 64 characters.\n+\n*scope*::::\nScope of apphub application.\n+\n*type*:::::\nScope Type.\n+\n*component*:::\nThe name of the component parameter.\n+\n*parameters*:::\nA list of parameters associated with the component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}] --component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--component-parameters=\'[{"applicationInfo": {"apphubApplicationId": "string", "attributes": {"businessOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "criticality": {"level": "string", "missionCritical": boolean, "type": "string"}, "developerOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "environment": {"environment": "string", "type": "string"}, "operatorOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]}, "deploymentRegion": "string", "displayName": "string", "scope": {"type": "string"}}, "component": "string", "parameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--component-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "COMPONENT_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                {
                  name: "--composite-application-parameters-service-account-map",
                  description:
                    'A map from a component\'s URI to the deployment service account for\ncomposite application. key format:\nprojects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}\nvalue format:\nprojects/{project}/serviceAccounts/{email_address}.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--composite-application-parameters-service-account-map=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--composite-application-parameters-service-account-map=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--composite-application-parameters-service-account-map=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--connection-configs",
                  description:
                    'Connection configuration for the application.\n+\n*connectionUri*:::\nThe connection URI.\n+\n*destinationComponentParameters*:::\nThe parameters of the connection associated with the destination component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n*sourceComponentParameters*:::\nThe parameters of the connection associated with the source component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}] --connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--connection-configs=\'[{"connectionUri": "string", "destinationComponentParameters": [{"key": "string", "value": {...}}], "sourceComponentParameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--connection-configs=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "CONNECTION_CONFIGS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag2563,
                flag2565,
                flag2570,
                flag3018,
                flag3019,
                flag3195,
                flag3718,
                flag4490,
                flag4482,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gke-deployment-target-cluster-self-link",
                  description:
                    "The self link of the cluster where GKE based application is deployed",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_CLUSTER_SELF_LINK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account",
                  description:
                    "The kubernetes service account that is created within the namespace\nprovided above.\nExample: default or node-sa",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_KUBERNETES_SERVICE_ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account-creation",
                  description:
                    "Whether to create the provided KSA.\nIf true, the KSA will be created in the namespace provided above.\nIf false, the KSA is expected to already exist in the namespace provided\nabove",
                },
                {
                  name: "--gke-deployment-target-namespace",
                  description:
                    "The namespace where the application is deployed",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_NAMESPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                {
                  name: "--import-existing-resources",
                  description: "Import existing resources into the application",
                },
                flag7224,
                flag7356,
                flag11113,
                flag11637,
                flag11946,
                flag13339,
                flag13549,
                flag13956,
                flag14091,
                flag14185,
                flag14975,
                flag15090,
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
              description: "Delete an application",
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
                    "If set to true, the application's children are also deleted. If false, the\napplication is only deleted if it has no children",
                },
                flag5091,
                flag5453,
                flag5699,
                flag7224,
                flag7356,
                flag11637,
                flag11946,
                flag14185,
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
              name: "deploy",
              description: "Deploy an application",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--create-sa",
                  description:
                    "Create a new service account for the deployment",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6850,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--replace",
                  description:
                    "Flag to update the existing deployment. If not set or false, deploy will fail if application state is in the DEPLOYED state",
                },
                {
                  name: "--service-account",
                  description:
                    'The service account to use for this deployment.\n+\n* If provided, this service account will be used to execute the\n  deployment process, taking precedence over any service_account\n  specified on the Application resource.\n* The caller must have the "iam.serviceAccounts.actAs" permission on\n  this service account.\n* If this field is omitted, the system will use the "service_account"\n  defined within the Application resource.\n* If this field is omitted with --create-sa flag, the system will create a new and unique service_account\n  and use it for the deployment.\n* We recommend that you provide a service account here or on the\n  Application resource. If you don\'t provide a service account, the\n  deployment will fail.\n* If the `--create-sa` flag is also provided, this value is the ID of\n  a new service account to be created (e.g., `my-new-sa`).\n+\nFormat: `projects/{PROJECT}/serviceAccounts/{EMAIL_ADDRESS}` (when not\nusing `--create-sa`)',
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14172,
                flag14975,
                flag15315,
                flag15424,
                flag15602,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `APPLICATION` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an application",
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
                flag7224,
                flag7356,
                flag11637,
                flag11946,
                flag14185,
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
              name: "generate",
              description: "Generate IaC for an application",
              options: [
                flag42,
                flag46,
                flag685,
                flag1201,
                flag2292,
                flag2329,
                flag3499,
                flag3500,
                flag3501,
                flag4900,
                flag4902,
                flag5091,
                flag5194,
                flag5453,
                flag5559,
                flag5699,
                {
                  name: "--location",
                  description:
                    "For resources [application, developer-connect-export-config-repo-uri], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                flag14185,
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
              name: "import-iac",
              description:
                "Import Infrastructure as Code (IaC) for an Application",
              options: [
                flag42,
                flag46,
                flag449,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5193,
                flag5453,
                flag5560,
                flag5699,
                flag6850,
                flag7356,
                flag11637,
                flag11946,
                flag14172,
                flag14975,
                flag15315,
                flag15356,
                flag15424,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `APPLICATION` on the command line",
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
                flag6992,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14169,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "preview",
              description: "Preview a Design Center application",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--create-sa",
                  description: "Create a new service account for the preview",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6850,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--service-account",
                  description:
                    'The service account to use for this preview.\n+\n* If provided, this service account will be used to execute the\n  preview process, taking precedence over any service_account\n  specified on the Application resource.\n* The caller must have the "iam.serviceAccounts.actAs" permission on\n  this service account.\n* If this field is omitted, the system will use the "service_account"\n  defined within the Application resource.\n* If this field is omitted with --create-sa flag, the system will create a new and unique service_account\n  and use it for the preview.\n* We recommend that you provide a service account here or on the\n  Application resource. If you don\'t provide a service account, the\n  preview will fail.\n* If the `--create-sa` flag is also provided, this value is the ID of\n  a new service account to be created (e.g., `my-new-sa`).\n+\nFormat: `projects/{PROJECT}/serviceAccounts/{EMAIL_ADDRESS}` (when not\nusing `--create-sa`)',
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14172,
                flag14975,
                flag15315,
                flag15424,
                flag15602,
              ],
              args: {
                name: "APPLICATION",
                description:
                  "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `APPLICATION` on the command line",
              },
            },
            {
              name: "update",
              description: "Update an application",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-app-parameters",
                  description:
                    'Add new value to app_parameters list. A list of parameters to attach to the deployment source object, which is a\ncatalog entry or application template snapshot.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-app-parameters=key=string,value={...} --add-app-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-app-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-app-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_APP_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag142,
                flag143,
                flag144,
                {
                  name: "--add-component-parameters",
                  description:
                    'Add new value to component_parameters list. A list of component parameters to associate with the application.\n+\n*applicationInfo*:::\nThe application associated with the component.\n+\n*apphubApplicationId*::::\nThe application ID of the apphub application. The ID must be 1-63\ncharacters long and should match the regular expression\n`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.\n+\n*attributes*::::\nAttributes of apphub application.\n+\n*businessOwners*:::::\nBusiness team that ensures user needs are met and value is delivered.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*criticality*:::::\nUser-defined criticality information.\n+\n*level*::::::\nCriticality level.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*missionCritical*::::::\nIndicates mission-critical Application, Service, or Workload.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nCriticality Type.\n+\n*developerOwners*:::::\nDeveloper team that owns development and coding.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*environment*:::::\nUser-defined environment information.\n+\n*environment*::::::\nEnvironment name.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nEnvironment Type.\n+\n*operatorOwners*:::::\nOperator team that ensures runtime and operations.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*deploymentRegion*::::\nDeployment region for the component. If the scope is set to REGIONAL,\nthen the apphub application is created in this region, e.g.\n`us-central1`.\n+\n*displayName*::::\nDisplay name for the application. The number of characters should be less\nthan 64 characters.\n+\n*scope*::::\nScope of apphub application.\n+\n*type*:::::\nScope Type.\n+\n*component*:::\nThe name of the component parameter.\n+\n*parameters*:::\nA list of parameters associated with the component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}] --add-component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-component-parameters=\'[{"applicationInfo": {"apphubApplicationId": "string", "attributes": {"businessOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "criticality": {"level": "string", "missionCritical": boolean, "type": "string"}, "developerOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "environment": {"environment": "string", "type": "string"}, "operatorOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]}, "deploymentRegion": "string", "displayName": "string", "scope": {"type": "string"}}, "component": "string", "parameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-component-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_COMPONENT_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-connection-configs",
                  description:
                    'Add new value to connection_configs list. Connection configuration for the application.\n+\n*connectionUri*:::\nThe connection URI.\n+\n*destinationComponentParameters*:::\nThe parameters of the connection associated with the destination component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n*sourceComponentParameters*:::\nThe parameters of the connection associated with the source component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}] --add-connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-connection-configs=\'[{"connectionUri": "string", "destinationComponentParameters": [{"key": "string", "value": {...}}], "sourceComponentParameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-connection-configs=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_CONNECTION_CONFIGS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--app-parameters",
                  description:
                    'Set app_parameters to new value. A list of parameters to attach to the deployment source object, which is a\ncatalog entry or application template snapshot.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--app-parameters=key=string,value={...} --app-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--app-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--app-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "APP_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag748,
                flag750,
                flag752,
                flag1201,
                {
                  name: "--clear-app-parameters",
                  description:
                    "Clear app_parameters value and set to empty list",
                },
                {
                  name: "--clear-attributes",
                  description:
                    "Set application.attributes back to default value",
                },
                flag1506,
                flag1507,
                flag1508,
                {
                  name: "--clear-component-parameters",
                  description:
                    "Clear component_parameters value and set to empty list",
                },
                {
                  name: "--clear-composite-application-parameters",
                  description:
                    "Set application.compositeApplicationParameters back to default value",
                },
                {
                  name: "--clear-composite-application-parameters-service-account-map",
                  description:
                    "Clear composite_application_parameters_service_account_map value and set to empty map",
                },
                {
                  name: "--clear-connection-configs",
                  description:
                    "Clear connection_configs value and set to empty list",
                },
                {
                  name: "--clear-deployment-target",
                  description:
                    "Set application.deploymentTarget back to default value",
                },
                {
                  name: "--clear-scope",
                  description: "Set application.scope back to default value",
                },
                {
                  name: "--clear-source",
                  description: "Set application.source back to default value",
                },
                {
                  name: "--component-parameters",
                  description:
                    'Set component_parameters to new value. A list of component parameters to associate with the application.\n+\n*applicationInfo*:::\nThe application associated with the component.\n+\n*apphubApplicationId*::::\nThe application ID of the apphub application. The ID must be 1-63\ncharacters long and should match the regular expression\n`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.\n+\n*attributes*::::\nAttributes of apphub application.\n+\n*businessOwners*:::::\nBusiness team that ensures user needs are met and value is delivered.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*criticality*:::::\nUser-defined criticality information.\n+\n*level*::::::\nCriticality level.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*missionCritical*::::::\nIndicates mission-critical Application, Service, or Workload.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nCriticality Type.\n+\n*developerOwners*:::::\nDeveloper team that owns development and coding.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*environment*:::::\nUser-defined environment information.\n+\n*environment*::::::\nEnvironment name.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nEnvironment Type.\n+\n*operatorOwners*:::::\nOperator team that ensures runtime and operations.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*deploymentRegion*::::\nDeployment region for the component. If the scope is set to REGIONAL,\nthen the apphub application is created in this region, e.g.\n`us-central1`.\n+\n*displayName*::::\nDisplay name for the application. The number of characters should be less\nthan 64 characters.\n+\n*scope*::::\nScope of apphub application.\n+\n*type*:::::\nScope Type.\n+\n*component*:::\nThe name of the component parameter.\n+\n*parameters*:::\nA list of parameters associated with the component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}] --component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--component-parameters=\'[{"applicationInfo": {"apphubApplicationId": "string", "attributes": {"businessOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "criticality": {"level": "string", "missionCritical": boolean, "type": "string"}, "developerOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "environment": {"environment": "string", "type": "string"}, "operatorOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]}, "deploymentRegion": "string", "displayName": "string", "scope": {"type": "string"}}, "component": "string", "parameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--component-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "COMPONENT_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--composite-application-parameters-service-account-map",
                  description:
                    'Set composite_application_parameters_service_account_map to new value. A map from a component\'s URI to the deployment service account for\ncomposite application. key format:\nprojects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}\nvalue format:\nprojects/{project}/serviceAccounts/{email_address}.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--composite-application-parameters-service-account-map=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--composite-application-parameters-service-account-map=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--composite-application-parameters-service-account-map=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--connection-configs",
                  description:
                    'Set connection_configs to new value. Connection configuration for the application.\n+\n*connectionUri*:::\nThe connection URI.\n+\n*destinationComponentParameters*:::\nThe parameters of the connection associated with the destination component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n*sourceComponentParameters*:::\nThe parameters of the connection associated with the source component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}] --connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--connection-configs=\'[{"connectionUri": "string", "destinationComponentParameters": [{"key": "string", "value": {...}}], "sourceComponentParameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--connection-configs=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "CONNECTION_CONFIGS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag2563,
                flag2564,
                flag2569,
                flag3018,
                flag3019,
                flag3195,
                flag3718,
                flag4490,
                flag4481,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gke-deployment-target-cluster-self-link",
                  description:
                    "The self link of the cluster where GKE based application is deployed",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_CLUSTER_SELF_LINK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account",
                  description:
                    "The kubernetes service account that is created within the namespace\nprovided above.\nExample: default or node-sa",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_KUBERNETES_SERVICE_ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--gke-deployment-target-kubernetes-service-account-creation",
                  description:
                    "Whether to create the provided KSA.\nIf true, the KSA will be created in the namespace provided above.\nIf false, the KSA is expected to already exist in the namespace provided\nabove. Use *--gke-deployment-target-kubernetes-service-account-creation* to enable and *--no-gke-deployment-target-kubernetes-service-account-creation* to disable",
                },
                {
                  name: "--gke-deployment-target-namespace",
                  description:
                    "The namespace where the application is deployed",
                  args: {
                    name: "GKE_DEPLOYMENT_TARGET_NAMESPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                {
                  name: "--import-existing-resources",
                  description:
                    "Import existing resources into the application. Use *--import-existing-resources* to enable and *--no-import-existing-resources* to disable",
                },
                flag7224,
                flag7356,
                flag11113,
                flag11637,
                flag11946,
                {
                  name: "--remove-app-parameters",
                  description:
                    'Remove existing value from app_parameters list. A list of parameters to attach to the deployment source object, which is a\ncatalog entry or application template snapshot.\n+\n*key*:::\nThe key of the parameter.\n+\n*value*:::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-app-parameters=key=string,value={...} --remove-app-parameters=key=string,value={...}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-app-parameters=\'[{"key": "string", "value": {...}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-app-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_APP_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag12560,
                flag12561,
                flag12562,
                {
                  name: "--remove-component-parameters",
                  description:
                    'Remove existing value from component_parameters list. A list of component parameters to associate with the application.\n+\n*applicationInfo*:::\nThe application associated with the component.\n+\n*apphubApplicationId*::::\nThe application ID of the apphub application. The ID must be 1-63\ncharacters long and should match the regular expression\n`^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.\n+\n*attributes*::::\nAttributes of apphub application.\n+\n*businessOwners*:::::\nBusiness team that ensures user needs are met and value is delivered.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*criticality*:::::\nUser-defined criticality information.\n+\n*level*::::::\nCriticality level.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*missionCritical*::::::\nIndicates mission-critical Application, Service, or Workload.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nCriticality Type.\n+\n*developerOwners*:::::\nDeveloper team that owns development and coding.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*environment*:::::\nUser-defined environment information.\n+\n*environment*::::::\nEnvironment name.\nCan contain only lowercase letters, numeric characters,\nunderscores, and dashes. Can have a maximum length of 63 characters.\nDeprecated: Please refer to type instead.\n+\n*type*::::::\nEnvironment Type.\n+\n*operatorOwners*:::::\nOperator team that ensures runtime and operations.\n+\n*channel*::::::\nCommunication channel of the contacts.\n+\n*uri*:::::::\nURI of the channel.\n+\n*displayName*::::::\nContact\'s name.\nCan have a maximum length of 63 characters.\n+\n*email*::::::\nEmail address of the contacts.\n+\n*deploymentRegion*::::\nDeployment region for the component. If the scope is set to REGIONAL,\nthen the apphub application is created in this region, e.g.\n`us-central1`.\n+\n*displayName*::::\nDisplay name for the application. The number of characters should be less\nthan 64 characters.\n+\n*scope*::::\nScope of apphub application.\n+\n*type*:::::\nScope Type.\n+\n*component*:::\nThe name of the component parameter.\n+\n*parameters*:::\nA list of parameters associated with the component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}] --remove-component-parameters=applicationInfo={apphubApplicationId=string,attributes={businessOwners=[{channel={uri=string},displayName=string,email=string}],criticality={level=string,missionCritical=boolean,type=string},developerOwners=[{channel={uri=string},displayName=string,email=string}],environment={environment=string,type=string},operatorOwners=[{channel={uri=string},displayName=string,email=string}]},deploymentRegion=string,displayName=string,scope={type=string}},component=string,parameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-component-parameters=\'[{"applicationInfo": {"apphubApplicationId": "string", "attributes": {"businessOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "criticality": {"level": "string", "missionCritical": boolean, "type": "string"}, "developerOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}], "environment": {"environment": "string", "type": "string"}, "operatorOwners": [{"channel": {"uri": "string"}, "displayName": "string", "email": "string"}]}, "deploymentRegion": "string", "displayName": "string", "scope": {"type": "string"}}, "component": "string", "parameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-component-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_COMPONENT_PARAMETERS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-composite-application-parameters-service-account-map",
                  description:
                    'Remove existing value from map composite_application_parameters_service_account_map. Sets `remove_composite_application_parameters_service_account_map` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-composite-application-parameters-service-account-map=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-composite-application-parameters-service-account-map=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-composite-application-parameters-service-account-map=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-connection-configs",
                  description:
                    'Remove existing value from connection_configs list. Connection configuration for the application.\n+\n*connectionUri*:::\nThe connection URI.\n+\n*destinationComponentParameters*:::\nThe parameters of the connection associated with the destination component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n*sourceComponentParameters*:::\nThe parameters of the connection associated with the source component.\n+\n*key*::::\nThe key of the parameter.\n+\n*value*::::\nThe value of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}] --remove-connection-configs=connectionUri=string,destinationComponentParameters=[{key=string,value={...}}],sourceComponentParameters=[{key=string,value={...}}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-connection-configs=\'[{"connectionUri": "string", "destinationComponentParameters": [{"key": "string", "value": {...}}], "sourceComponentParameters": [{"key": "string", "value": {...}}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-connection-configs=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_CONNECTION_CONFIGS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag13338,
                flag13549,
                flag13956,
                flag14091,
                flag14185,
                flag14975,
                flag15090,
                {
                  name: "--update-composite-application-parameters-service-account-map",
                  description:
                    'Update composite_application_parameters_service_account_map value or add key value pair. A map from a component\'s URI to the deployment service account for\ncomposite application. key format:\nprojects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}\nvalue format:\nprojects/{project}/serviceAccounts/{email_address}.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-composite-application-parameters-service-account-map=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-composite-application-parameters-service-account-map=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-composite-application-parameters-service-account-map=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "UPDATE_COMPOSITE_APPLICATION_PARAMETERS_SERVICE_ACCOUNT_MAP",
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
          name: "catalogs",
          description: "Manage catalog resources",
          subcommands: [
            {
              name: "create",
              description: "Create a catalog",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3298,
                flag3783,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6943,
                flag7356,
                flag11637,
                flag11946,
                flag14177,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a catalog",
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
                    "If set to true, the catalog's children are also deleted. If false, the\ncatalog is only deleted if it has no children",
                },
                flag5091,
                flag5453,
                flag5699,
                flag6943,
                flag7356,
                flag11637,
                flag11946,
                flag14177,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a catalog",
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
                flag6943,
                flag7356,
                flag11637,
                flag11946,
                flag14177,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "list",
              description: "List catalogs",
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
                flag6992,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14169,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "shares",
              description: "Manage share resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a share",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag1402,
                    flag2292,
                    {
                      name: "--destination-space",
                      description:
                        "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `--destination-space` on the command line",
                      args: {
                        name: "DESTINATION_SPACE",
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
                      name: "--location",
                      description:
                        "For resources [share, destination-space], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14189,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share.\n+\nTo set the `share` attribute:\n* provide the argument `share` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a share",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag1402,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7275,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14189,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share.\n+\nTo set the `share` attribute:\n* provide the argument `share` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a share",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1402,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7275,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14189,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share.\n+\nTo set the `share` attribute:\n* provide the argument `share` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List shares",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1392,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6942,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11946,
                    flag13948,
                    flag14176,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "sync",
                  description: "Sync a share",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag1402,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7275,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14189,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "SHARE",
                    description:
                      "ID of the share or fully qualified identifier for the share.\n+\nTo set the `share` attribute:\n* provide the argument `share` on the command line",
                  },
                },
              ],
            },
            {
              name: "templates",
              description: "Manage catalog template resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a catalog template",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1400,
                    flag2292,
                    flag3299,
                    flag3800,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6996,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14184,
                    {
                      name: "--template-category",
                      description:
                        "The category of the Application Design Center application template. _TEMPLATE_CATEGORY_ must be one of:\n+\n*application-template*::: Application template.\n*component-template*::: Component template.\n*composite-solution-template*::: Imported as a single, complex unit without disassembling into components.\n*instance-template*::: Instance template.\n:::\n+",
                      args: {
                        name: "TEMPLATE_CATEGORY",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: [
                          "application-template",
                          "component-template",
                          "composite-solution-template",
                          "instance-template",
                        ],
                      },
                    },
                    flag14975,
                    flag15078,
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
                  description: "Delete a catalog template",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag1400,
                    flag2292,
                    flag4900,
                    flag4902,
                    {
                      name: "--force",
                      description:
                        "If set to true, the catalog template's children are also deleted. If false,\nthe catalog template is only deleted if it has no children",
                    },
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6996,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14184,
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
                  description: "Describe a catalog template",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1400,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6996,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14184,
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
                  description: "List catalog templates",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1392,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6942,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11946,
                    flag13948,
                    flag14176,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "revisions",
                  description: "Manage catalog template revision resources",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create a new catalog template revision",
                      options: [
                        flag42,
                        flag46,
                        {
                          name: "--application-template-revision-source",
                          description:
                            "Application template revision to use as source. Example: `projects/my-project/locations/us-central1/spaces/my-space/catalogs/my-catalog/templates/my-template/revisions/r1`",
                          args: {
                            name: "APPLICATION_TEMPLATE_REVISION_SOURCE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag720,
                        flag1201,
                        {
                          name: "--catalog",
                          description:
                            "The ID of the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
                          args: {
                            name: "CATALOG",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag2292,
                        {
                          name: "--description",
                          description: "A description for the revision",
                          args: {
                            name: "DESCRIPTION",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--developer-connect-repo",
                          description:
                            "The Developer Connect repository to use as a source. Example: `projects/my-project/locations/us-central1/connections/my-connection/gitRepositoryLinks/my-repo`",
                          args: {
                            name: "DEVELOPER_CONNECT_REPO",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--developer-connect-repo-dir",
                          description:
                            'The directory within the repository to use. Example: `"modules/my-product"`',
                          args: {
                            name: "DEVELOPER_CONNECT_REPO_DIR",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--developer-connect-repo-ref",
                          description:
                            'The Git ref (branch or tag) within the repository to use. Example: `"refs/tags/v1.0.0"` or `"refs/heads/main"` or `"refs/commits/269b518b99d06b31ff938a2d182e75f5e41941c7"`',
                          args: {
                            name: "DEVELOPER_CONNECT_REPO_REF",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag4900,
                        flag4902,
                        flag5091,
                        {
                          name: "--gcs-source-uri",
                          description:
                            "Google Cloud Storage URI for source. Example: `gs://my-bucket/my-template`",
                          args: {
                            name: "GCS_SOURCE_URI",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--git-source-dir",
                          description:
                            'Git directory for Git source. Example: `"modules/my-product"`. This field is optional',
                          args: {
                            name: "GIT_SOURCE_DIR",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--git-source-ref-tag",
                          description:
                            'Git reference tag for Git source. Example: `"v1.0.0"`',
                          args: {
                            name: "GIT_SOURCE_REF_TAG",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--git-source-repo",
                          description:
                            "Git repository for Git source. Example: `GoogleCloudPlatform/terraform-google-cloud-run`",
                          args: {
                            name: "GIT_SOURCE_REPO",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag5453,
                        flag5699,
                        {
                          name: "--location",
                          description:
                            "The Cloud location for the revision.\n+\nTo set the `location` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                          args: {
                            name: "LOCATION",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag7356,
                        {
                          name: "--metadata",
                          description:
                            'Path to a local YAML file containing the template metadata. Example: `"path/to/metadata.yaml"`',
                          args: {
                            name: "METADATA",
                            description:
                              "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--oci-repo-uri",
                          description:
                            "OCI Repo URI for OCI Repo source. Example: `oci://us-west1-docker.pkg.dev/my-project/my-repo/my-chart`",
                          args: {
                            name: "OCI_REPO_URI",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--oci-repo-version",
                          description:
                            'OCI Repo version for OCI Repo source. Example: `"1.0.0"`. This field is optional',
                          args: {
                            name: "OCI_REPO_VERSION",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag11637,
                        flag11946,
                        {
                          name: "--space",
                          description:
                            "The ID of the space.\n+\nTo set the `space` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
                          args: {
                            name: "SPACE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--template",
                          description:
                            "The ID of the template.\n+\nTo set the `template` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--template` on the command line",
                          args: {
                            name: "TEMPLATE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "REVISION",
                        description:
                          "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
                      },
                    },
                    {
                      name: "delete",
                      description: "Delete a catalog template revision",
                      options: [
                        flag42,
                        flag46,
                        flag720,
                        flag1201,
                        flag1401,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag7271,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag14188,
                        flag14825,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "REVISION",
                        description:
                          "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
                      },
                    },
                    {
                      name: "describe",
                      description: "Describe a catalog template revision",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag1401,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag7271,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag14188,
                        flag14825,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "REVISION",
                        description:
                          "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
                      },
                    },
                    {
                      name: "list",
                      description: "List catalog template revisions",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        {
                          name: "--catalog",
                          description:
                            "The catalog id of the template resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `--template` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
                          args: {
                            name: "CATALOG",
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
                            "The location id of the template resource.\n+\nTo set the `location` attribute:\n* provide the argument `--template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                        {
                          name: "--space",
                          description:
                            "The space id of the template resource.\n+\nTo set the `space` attribute:\n* provide the argument `--template` on the command line with a fully specified name;\n* provide the argument `--space` on the command line",
                          args: {
                            name: "SPACE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--template",
                          description:
                            "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `--template` on the command line",
                          args: {
                            name: "TEMPLATE",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag14975,
                        flag15249,
                        flag15315,
                        flag15424,
                      ],
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a catalog template",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1400,
                    flag2292,
                    flag3299,
                    flag3800,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6996,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14184,
                    {
                      name: "--template-category",
                      description:
                        "The category of the Application Design Center application template. _TEMPLATE_CATEGORY_ must be one of:\n+\n*application-template*::: Application template.\n*component-template*::: Component template.\n*composite-solution-template*::: Imported as a single, complex unit without disassembling into components.\n*instance-template*::: Instance template.\n:::\n+",
                      args: {
                        name: "TEMPLATE_CATEGORY",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: [
                          "application-template",
                          "component-template",
                          "composite-solution-template",
                          "instance-template",
                        ],
                      },
                    },
                    flag14975,
                    flag15078,
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
            {
              name: "update",
              description: "Update a catalog",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3298,
                flag3783,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6943,
                flag7356,
                flag11637,
                flag11946,
                flag14177,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a space",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3178,
            flag3711,
            {
              name: "--enable-gcp-shared-templates",
              description: "Flag to enable Google opinionated shared templates",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5156,
            flag5453,
            flag5699,
            flag6993,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--tags",
              description:
                'Tags are key/values bound to space resource.\nExample: `"123/environment": "production"\n  "123/costCenter": "marketing"`. For more information on tag creation and management, see\nhttps://cloud.google.com/resource-manager/docs/tags/tags-overview.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--tags=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--tags=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--tags=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "TAGS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a space",
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
                "If set to true, the space's children are also deleted. If false, the\nspace is only deleted if it has no children",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6993,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a space",
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
            flag6993,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Design Center space",
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
            flag6864,
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
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
          },
        },
        {
          name: "list",
          description: "List spaces",
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
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Design Center space as defined in a JSON/YAML file",
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
            flag6864,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SPACE",
              description:
                "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "shared-templates",
          description: "Manage shared template resources",
          subcommands: [
            {
              name: "describe",
              description: "Describe a shared template",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--google-catalog",
                  description:
                    'If provided, describes a shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                },
                flag5453,
                flag5699,
                {
                  name: "--location",
                  description:
                    "The location id of the sharedTemplate resource.\n+\nTo set the location attribute:\n  * provide the argument `shared_template` on the command line with a fully specified name;\n  * provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11946,
                {
                  name: "--space",
                  description:
                    "The space id of the sharedTemplate resource.\n+\nTo set the space attribute:\n  * provide the argument `shared_template` on the command line with a fully specified name;\n  * provide the argument `--space` on the command line",
                  args: {
                    name: "SPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SHARED_TEMPLATE",
                description:
                  "ID of the sharedTemplate or fully qualified identifier for the sharedTemplate. Format: projects/$project/locations/$location/spaces/$space/sharedTemplates/$sharedTemplate\n To set the shared_template attribute:\n  * provide the fully qualified identifier `shared_template` on the command line;\n  * provide the argument `shared_template` which represents the shared template id and the other arguments `--location`, `--project`, `--space` or `--google-catalog` on the command line",
              },
            },
            {
              name: "list",
              description: "List shared templates",
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
                  name: "--google-catalog",
                  description:
                    'If provided, lists all shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                },
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location id of the space resource.\n+\nTo set the location attribute:\n  * provide the argument `--space` on the command line with a fully specified name;\n  * provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11059,
                flag11946,
                flag13948,
                {
                  name: "--space",
                  description:
                    "ID of the space or fully qualified identifier for the space.\n+\nTo set the space attribute:\n  * provide the argument `--space` on the command line",
                  args: {
                    name: "SPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "revisions",
              description: "Manage shared template revision resources",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a shared template revision",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    {
                      name: "--google-catalog",
                      description:
                        'If provided, describes a shared template revision from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                    },
                    flag5453,
                    flag5699,
                    {
                      name: "--location",
                      description:
                        "The location id of the revision resource.\n+\nTo set the location attribute:\n  * provide the argument `revision` on the command line with a fully specified name;\n  * provide the argument `--location` on the command line",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    flag11946,
                    {
                      name: "--shared-template",
                      description:
                        "The sharedTemplate id of the revision resource.\n+\nTo set the shared-template attribute:\n  * provide the argument `revision` on the command line with a fully specified name;\n  * provide the argument `--shared-template` on the command line",
                      args: {
                        name: "SHARED_TEMPLATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--space",
                      description:
                        "The space id of the revision resource.\n+\nTo set the space attribute:\n  * provide the argument `revision` on the command line with a fully specified name;\n  * provide the argument `--space` on the command line",
                      args: {
                        name: "SPACE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "REVISION",
                    description:
                      "ID of the revision or fully qualified identifier for the sharedTemplateRevision. Format: projects/$project/locations/$location/spaces/$space/sharedTemplates/$sharedTemplate/revisions/$revision\n To set the revision attribute:\n  * provide the fully qualified identifier `revision` on the command line;\n  * provide the argument `revision` which represents the revision id and the other arguments `--shared-template`, `--location`, `--project`, `--space` or `--google-catalog` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List shared template revisions",
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
                      name: "--google-catalog",
                      description:
                        'If provided, lists revisions for a shared template from the Google Catalog. This sets the project to "gcpdesigncenter" and space to "googlespace"',
                    },
                    flag5453,
                    flag5699,
                    flag6515,
                    {
                      name: "--location",
                      description:
                        "The location id of the sharedTemplate resource.\n+\nTo set the location attribute:\n  * provide the argument `--shared-template` on the command line with a fully specified name;\n  * provide the argument `--location` on the command line",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    flag11059,
                    flag11946,
                    {
                      name: "--shared-template",
                      description:
                        "ID of the sharedTemplate or fully qualified identifier for the sharedTemplate.\n+\nTo set the shared-template attribute:\n  * provide the argument `--shared-template` on the command line",
                      args: {
                        name: "SHARED_TEMPLATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag13948,
                    {
                      name: "--space",
                      description:
                        "The space id of the sharedTemplate resource.\n+\nTo set the space attribute:\n  * provide the argument `--shared-template` on the command line with a fully specified name;\n  * provide the argument `--space` on the command line",
                      args: {
                        name: "SPACE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "test-iam-permissions",
          description: "Test IAM permissions for a Design Center space",
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
            flag6864,
            flag7356,
            {
              name: "--permissions",
              description: "The set of permissions to check for the resource",
              args: {
                name: "PERMISSION",
                description: "List",
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
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a space",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3178,
            flag3711,
            {
              name: "--enable-gcp-shared-templates",
              description:
                "Flag to enable Google opinionated shared templates. Use *--enable-gcp-shared-templates* to enable and *--no-enable-gcp-shared-templates* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5156,
            flag5453,
            flag5699,
            flag6993,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SPACE",
            description:
              "ID of the space or fully qualified identifier for the space.\n+\nTo set the `space` attribute:\n* provide the argument `space` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
