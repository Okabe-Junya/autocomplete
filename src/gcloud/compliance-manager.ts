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
const flag6944: Fig.Option = {
  name: "--location",
  description:
    "The location id of the cloudControl resource.\n+\nTo set the `location` attribute:\n* provide the argument `cloud_control` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6962: Fig.Option = {
  name: "--location",
  description:
    "The location id of the framework resource.\n+\nTo set the `location` attribute:\n* provide the argument `framework` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6963: Fig.Option = {
  name: "--location",
  description:
    "The location id of the frameworkDeployment resource.\n+\nTo set the `location` attribute:\n* provide the argument `framework_deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6977: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10878: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the cloudControl resource.\n+\nTo set the `organization` attribute:\n* provide the argument `cloud_control` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [cloudsecuritycompliance.organizations.locations.cloudControls]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10880: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the framework resource.\n+\nTo set the `organization` attribute:\n* provide the argument `framework` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [cloudsecuritycompliance.organizations.locations.frameworks]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10881: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the frameworkDeployment resource.\n+\nTo set the `organization` attribute:\n* provide the argument `framework_deployment` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [cloudsecuritycompliance.organizations.locations.frameworkDeployments]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10882: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the location resource.\n+\nTo set the `organization` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [cloudsecuritycompliance.organizations.locations]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10888: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the operation resource.\n+\nTo set the `organization` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [cloudsecuritycompliance.organizations.locations.operations]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
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
  name: "compliance-manager",
  description: "Manage Compliance Manager resources",
  subcommands: [
    {
      name: "cloud-control-deployments",
      description: "Manage Cloud Control Deployment resources",
      subcommands: [
        {
          name: "describe",
          description: "Get a cloud control deployment",
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
                "The location id of the cloudControlDeployment resource.\n+\nTo set the `location` attribute:\n* provide the argument `cloud_control_deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                "The organization id of the cloudControlDeployment resource.\n+\nTo set the `organization` attribute:\n* provide the argument `cloud_control_deployment` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [cloudsecuritycompliance.organizations.locations.cloudControlDeployments]",
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
            name: "CLOUD_CONTROL_DEPLOYMENT",
            description:
              "ID of the cloudControlDeployment or fully qualified identifier for the cloudControlDeployment.\n+\nTo set the `cloud_control_deployment` attribute:\n* provide the argument `cloud_control_deployment` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Control Deployments",
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
            flag10882,
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
      name: "cloud-controls",
      description: "Manage Cloud Control resources",
      subcommands: [
        {
          name: "create",
          description: "Create a cloud control",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--categories",
              description:
                "The categories for the cloud control. _CATEGORIES_ must be one of:\n+\n*cc-category-admin-access*::: The admin access category.\n*cc-category-artificial-intelligence*::: The artificial intelligence category.\n*cc-category-bcdr*::: The business continuity and disaster recovery (BCDR) category.\n*cc-category-data-residency*::: DRZ (Data Residency).\n*cc-category-data-security*::: The data security category.\n*cc-category-encryption*::: The encryption category.\n*cc-category-hr-admin-and-processes*::: The HR, admin, and processes category.\n*cc-category-identity-and-access-management*::: The identity and access management category.\n*cc-category-incident-management*::: The incident management category.\n*cc-category-infrastructure*::: The infrastructure security category.\n*cc-category-legal-and-disclosures*::: The legal and disclosures category.\n*cc-category-logs-management-and-infrastructure*::: The logs management and infrastructure category.\n*cc-category-network-security*::: The network security category.\n*cc-category-physical-security*::: The physical security category.\n*cc-category-privacy*::: The privacy category.\n*cc-category-resource-usage-restriction*::: RUR (Resource Usage Restriction).\n*cc-category-service-specific*::: SERVICE SPECIFIC\n*cc-category-third-party-and-sub-processor-management*::: The third-party and sub-processor management category.\n*cc-category-vulnerability-management*::: The vulnerability management category.\n:::\n+",
              args: {
                name: "CATEGORIES",
                description: "List",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description:
                "A description of the cloud control. The maximum length is 2000 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "The friendly name of the cloud control. The maximum length is 200\ncharacters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--finding-category",
              description:
                "The finding category for the cloud control findings. The maximum\nlength is 255 characters",
              args: {
                name: "FINDING_CATEGORY",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6944,
            flag7356,
            flag10878,
            {
              name: "--parameter-spec",
              description:
                'The parameter specifications for the cloud control.\n+\n*defaultValue*:::\nThe default value of the parameter.\n+\n*boolValue*::::\nA boolean value.\n+\n*numberValue*::::\nA double value.\n+\n*stringListValue*::::\nA repeated string.\n+\n*values*:::::\nThe strings in the list.\n+\n*stringValue*::::\nA string value.\n+\n*description*:::\nThe description of the parameter. The maximum length is 2000 characters.\n+\n*displayName*:::\nThe friendly name of the parameter. The maximum length is 200 characters.\n+\n*isRequired*:::\nWhether the parameter is required.\n+\n*name*:::\nThe name of the parameter.\n+\n*substitutionRules*:::\nThe list of parameter substitutions.\n+\n*attributeSubstitutionRule*::::\nThe attribute substitution rule.\n+\n*attribute*:::::\nThe fully qualified proto attribute path, in dot notation.\nFor example: `rules[0].cel_expression.resource_types_values`.\n+\n*placeholderSubstitutionRule*::::\nThe placeholder substitution rule.\n+\n*attribute*:::::\nThe fully qualified proto attribute path, in dot notation.\n+\n*validation*:::\nThe permitted set of values for the parameter.\n+\n*allowedValues*::::\nThe permitted set of values for the parameter.\n+\n*values*:::::\nThe list of allowed values for the parameter.\n+\n*boolValue*::::::\nA boolean value.\n+\n*numberValue*::::::\nA double value.\n+\n*stringListValue*::::::\nA repeated string.\n+\n*values*:::::::\nThe strings in the list.\n+\n*stringValue*::::::\nA string value.\n+\n*intRange*::::\nThe permitted range for numeric parameters.\n+\n*max*:::::\nThe maximum permitted value for the numeric parameter (inclusive).\n+\n*min*:::::\nThe minimum permitted value for the numeric parameter (inclusive).\n+\n*regexpPattern*::::\nThe regular expression for string parameters.\n+\n*pattern*:::::\nThe regex pattern to match the values of the parameter with.\n+\n*valueType*:::\nThe parameter value type.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--parameter-spec=defaultValue={boolValue=boolean,numberValue=float,stringListValue={values=[string]},stringValue=string},description=string,displayName=string,isRequired=boolean,name=string,substitutionRules=[{attributeSubstitutionRule={attribute=string},placeholderSubstitutionRule={attribute=string}}],validation={allowedValues={values=[{boolValue=boolean,numberValue=float,stringListValue={values=[string]},stringValue=string}]},intRange={max=int,min=int},regexpPattern={pattern=string}},valueType=string --parameter-spec=defaultValue={boolValue=boolean,numberValue=float,stringListValue={values=[string]},stringValue=string},description=string,displayName=string,isRequired=boolean,name=string,substitutionRules=[{attributeSubstitutionRule={attribute=string},placeholderSubstitutionRule={attribute=string}}],validation={allowedValues={values=[{boolValue=boolean,numberValue=float,stringListValue={values=[string]},stringValue=string}]},intRange={max=int,min=int},regexpPattern={pattern=string}},valueType=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--parameter-spec=\'[{"defaultValue": {"boolValue": boolean, "numberValue": float, "stringListValue": {"values": ["string"]}, "stringValue": "string"}, "description": "string", "displayName": "string", "isRequired": boolean, "name": "string", "substitutionRules": [{"attributeSubstitutionRule": {"attribute": "string"}, "placeholderSubstitutionRule": {"attribute": "string"}}], "validation": {"allowedValues": {"values": [{"boolValue": boolean, "numberValue": float, "stringListValue": {"values": ["string"]}, "stringValue": "string"}]}, "intRange": {"max": int, "min": int}, "regexpPattern": {"pattern": "string"}}, "valueType": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--parameter-spec=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "PARAMETER_SPEC",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--remediation-steps",
              description:
                "The remediation steps for the cloud control findings. The\nmaximum length is 400 characters",
              args: {
                name: "REMEDIATION_STEPS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--rules",
              description:
                'The rules that you can enforce to meet your security or compliance intent.\n+\n*celExpression*:::\nThe rule\'s logic expression in Common Expression Language (CEL).\n+\n*expression*::::\nThe logical expression in CEL. The maximum length of the condition\nis 1000 characters. For more information, see\n[CEL\nexpression](https://cloud.google.com/security-command-center/docs/compliance-manager-write-cel-expressions).\n+\n*resourceTypesValues*::::\nThe resource instance types on which this expression is defined.\nThe format is `<SERVICE_NAME>/<type>`.\nFor example: `compute.googleapis.com/Instance`.\n+\n*values*:::::\nThe strings in the list.\n+\n*description*:::\nThe rule description. The maximum length is 2000 characters.\n+\n*ruleActionTypes*:::\nThe functionality that\'s enabled by the rule.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--rules=celExpression={expression=string,resourceTypesValues={values=[string]}},description=string,ruleActionTypes=[string] --rules=celExpression={expression=string,resourceTypesValues={values=[string]}},description=string,ruleActionTypes=[string]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--rules=\'[{"celExpression": {"expression": "string", "resourceTypesValues": {"values": ["string"]}}, "description": "string", "ruleActionTypes": ["string"]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--severity",
              description:
                "The severity of the findings that are generated by the cloud control. _SEVERITY_ must be one of:\n+\n*critical*::: A critical vulnerability is easily discoverable by an external actor,\nexploitable, and results in the direct ability to execute arbitrary code,\nexfiltrate data, and otherwise gain additional access and privileges to\ncloud resources and workloads. Examples include publicly accessible\nunprotected user data and public SSH access with weak or no\npasswords.\n+\nA critical threat is a threat that can access, modify, or delete data or\nexecute unauthorized code within existing resources.\n*high*::: A high-risk vulnerability can be easily discovered and exploited in\ncombination with other vulnerabilities to gain direct access and\nthe ability to execute arbitrary code, exfiltrate data, and otherwise\ngain additional access and privileges to cloud resources and workloads.\nAn example is a database with weak or no passwords that is only\naccessible internally. This database could easily be compromised by an\nactor that had access to the internal network.\n+\nA high-risk threat is a threat that can create new computational\nresources in an environment but can't access data or execute code in\nexisting resources.\n*low*::: A low-risk vulnerability hampers a security organization's ability to\ndetect vulnerabilities or active threats in their deployment, or prevents\nthe root cause investigation of security issues. An example is monitoring\nand logs being disabled for resource configurations and access.\n+\nA low-risk threat is a threat that has obtained minimal access to an\nenvironment but can't access data, execute code, or create resources.\n*medium*::: A medium-risk vulnerability can be used by an actor to gain access to\nresources or privileges that enable them to eventually (through multiple\nsteps or a complex exploit) gain access and the ability to execute\narbitrary code or exfiltrate data. An example is a service account with\naccess to more projects than it should have. If an actor gains access to\nthe service account, they could potentially use that access to manipulate\na project the service account was not intended to.\n+\nA medium-risk threat can cause operational impact but might not\naccess data or execute unauthorized code.\n:::\n+",
              args: {
                name: "SEVERITY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["critical", "high", "low", "medium"],
              },
            },
            {
              name: "--supported-cloud-providers",
              description:
                "The supported cloud providers. _SUPPORTED_CLOUD_PROVIDERS_ must be one of:\n+\n*aws*::: Amazon Web Services (AWS).\n*azure*::: Microsoft Azure.\n*gcp*::: Google Cloud.\n:::\n+",
              args: {
                name: "SUPPORTED_CLOUD_PROVIDERS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--supported-target-resource-types",
              description:
                "The target resource types that are supported by the cloud control. _SUPPORTED_TARGET_RESOURCE_TYPES_ must be one of:\n+\n*target-resource-crm-type-folder*::: The target resource is a folder.\n*target-resource-crm-type-org*::: The target resource is a Google Cloud organization.\n*target-resource-crm-type-project*::: The target resource is a project.\n*target-resource-type-application*::: The target resource is an application in App Hub.\n:::\n+",
              args: {
                name: "SUPPORTED_TARGET_RESOURCE_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl.\n+\nTo set the `cloud_control` attribute:\n* provide the argument `cloud_control` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a cloud control",
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
            flag6944,
            flag7356,
            flag10878,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl.\n+\nTo set the `cloud_control` attribute:\n* provide the argument `cloud_control` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get a cloud control",
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
            flag6944,
            flag7356,
            {
              name: "--major-revision-id",
              description:
                "The major version of the cloud control to retrieve. If not specified,\nthe most recently updated `revision_id` is retrieved",
              args: {
                name: "MAJOR_REVISION_ID",
                description: "Int",
                suggestions: [],
              },
            },
            flag10878,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CLOUD_CONTROL",
            description:
              "ID of the cloudControl or fully qualified identifier for the cloudControl.\n+\nTo set the `cloud_control` attribute:\n* provide the argument `cloud_control` on the command line",
          },
        },
        {
          name: "list",
          description: "List cloud controls",
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
            flag10882,
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
      name: "framework-deployments",
      description: "Manage Framework Deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create a framework deployment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cloud-control-metadata",
              description:
                'Required, The deployment mode and parameters for each of the cloud controls in\nthe framework. Every cloud control in the framework includes\nmetadata.\n+\n*cloudControlDetails*:::\nThe cloud control name and parameters.\n+\n*majorRevisionId*::::\nThe major version of the cloud control.\n+\n*name*::::\nThe name of the cloud control, in one of the following formats:\n`organizations/{organization}/locations/{location}/cloudControls/{cloud_control}`\nor\n`projects/{project}/locations/{location}/cloudControls/{cloud_control}`.\n+\nThe only supported location is `global`.\n+\n*parameters*::::\nParameters are key-value pairs that let you provide your custom location\nrequirements, environment requirements, or other settings that are\nrelevant to the cloud control. An example parameter is\n`{"name": "location","value": "us-west-1"}`.\n+\n*name*:::::\nThe name or key of the parameter.\n+\n*enforcementMode*:::\nThe enforcement mode of the cloud control.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--cloud-control-metadata=cloudControlDetails={majorRevisionId=int,name=string,parameters=[{name=string}]},enforcementMode=string --cloud-control-metadata=cloudControlDetails={majorRevisionId=int,name=string,parameters=[{name=string}]},enforcementMode=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--cloud-control-metadata=\'[{"cloudControlDetails": {"majorRevisionId": int, "name": "string", "parameters": [{"name": "string"}]}, "enforcementMode": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--cloud-control-metadata=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CLOUD_CONTROL_METADATA",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description:
                "A user-provided description of the framework deployment",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--etag",
              description:
                "To prevent concurrent updates from overwriting each other, always provide\nthe `etag` when you update a framework deployment. You can also\nprovide the `etag` when you delete a framework deployment, to help\nensure that you're deleting the intended version of the\nframework deployment",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--framework",
              description:
                "ID of the framework or fully qualified identifier for the framework.\n+\nTo set the `framework` attribute:\n* provide the argument `--framework` on the command line",
              args: {
                name: "FRAMEWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--framework-major-revision-id",
              description:
                "The major version of the framework. If not specified, the version\ncorresponds to the latest version of the framework",
              args: {
                name: "FRAMEWORK_MAJOR_REVISION_ID",
                description: "Int",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "For resources [framework, framework_deployment], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
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
                "For resources [framework, framework_deployment], provides fallback value for resource organization attribute. When the resource's full URI path is not provided, organization will fallback to this flag value",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--target-resource-config-existing",
              description:
                "The resource hierarchy node, in one of the following formats:\n+\n- `organizations/{organizationID}`\n- `folders/{folderID}`\n- `projects/{projectID}`",
              args: {
                name: "TARGET_RESOURCE_CONFIG_EXISTING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-resource-creation-config-folder-display-name",
              description: "The display name of the folder",
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_FOLDER_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-resource-creation-config-folder-parent",
              description:
                "The parent of the folder, in the format\n`organizations/{organizationID}` or `folders/{folderID}`",
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_FOLDER_PARENT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-resource-creation-config-project-billing-account-id",
              description: "The billing account ID for the project",
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_PROJECT_BILLING_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-resource-creation-config-project-display-name",
              description: "The display name of the project",
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_PROJECT_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-resource-creation-config-project-parent",
              description:
                "The parent of the project, in the format\n`organizations/{organizationID}` or `folders/{folderID}`",
              args: {
                name: "TARGET_RESOURCE_CREATION_CONFIG_PROJECT_PARENT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FRAMEWORK_DEPLOYMENT",
            description:
              "ID of the frameworkDeployment or fully qualified identifier for the frameworkDeployment.\n+\nTo set the `framework_deployment` attribute:\n* provide the argument `framework_deployment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a framework deployment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "An opaque identifier for the current version of the resource.\n+\nIf you provide this value, then it must match the existing value. If the\nvalues don't match, then the request fails with an\n[`ABORTED`][google.rpc.Code.ABORTED] error.\n+\nIf you omit this value, then the resource is deleted regardless of its\ncurrent `etag` value",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6963,
            flag7356,
            flag10881,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FRAMEWORK_DEPLOYMENT",
            description:
              "ID of the frameworkDeployment or fully qualified identifier for the frameworkDeployment.\n+\nTo set the `framework_deployment` attribute:\n* provide the argument `framework_deployment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get a framework deployment",
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
            flag6963,
            flag7356,
            flag10881,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FRAMEWORK_DEPLOYMENT",
            description:
              "ID of the frameworkDeployment or fully qualified identifier for the frameworkDeployment.\n+\nTo set the `framework_deployment` attribute:\n* provide the argument `framework_deployment` on the command line",
          },
        },
        {
          name: "list",
          description: "List framework deployments",
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
            flag10882,
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
      name: "frameworks",
      description: "Manage Framework resources",
      subcommands: [
        {
          name: "create",
          description: "Create a framework",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--category",
              description:
                "The category of the framework. _CATEGORY_ must be one of:\n+\n*assured-workloads*::: An Assured Workloads framework.\n*custom-framework*::: A user-created framework.\n*data-security*::: A data security posture framework.\n*google-best-practices*::: A Google's best practices framework.\n*industry-defined-standard*::: An industry-defined framework.\n:::\n+",
              args: { name: "CATEGORY", description: "List", suggestions: [] },
            },
            {
              name: "--cloud-control-details",
              description:
                'The cloud control details that are directly added without any\ngrouping in the framework.\n+\n*majorRevisionId*:::\nThe major version of the cloud control.\n+\n*name*:::\nThe name of the cloud control, in one of the following formats:\n`organizations/{organization}/locations/{location}/cloudControls/{cloud_control}`\nor\n`projects/{project}/locations/{location}/cloudControls/{cloud_control}`.\n+\nThe only supported location is `global`.\n+\n*parameters*:::\nParameters are key-value pairs that let you provide your custom location\nrequirements, environment requirements, or other settings that are\nrelevant to the cloud control. An example parameter is\n`{"name": "location","value": "us-west-1"}`.\n+\n*name*::::\nThe name or key of the parameter.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--cloud-control-details=majorRevisionId=int,name=string,parameters=[{name=string}] --cloud-control-details=majorRevisionId=int,name=string,parameters=[{name=string}]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--cloud-control-details=\'[{"majorRevisionId": int, "name": "string", "parameters": [{"name": "string"}]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--cloud-control-details=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "CLOUD_CONTROL_DETAILS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--description",
              description:
                "The description of the framework. The maximum length is 2000 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "The friendly name of the framework. The maximum length is 200 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6962,
            flag7356,
            flag10880,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework.\n+\nTo set the `framework` attribute:\n* provide the argument `framework` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a framework",
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
            flag6962,
            flag7356,
            flag10880,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework.\n+\nTo set the `framework` attribute:\n* provide the argument `framework` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get a framework",
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
            flag6962,
            flag7356,
            {
              name: "--major-revision-id",
              description:
                "The framework major version to retrieve. If not specified, the most\nrecently updated `revision_id` is retrieved",
              args: {
                name: "MAJOR_REVISION_ID",
                description: "Int",
                suggestions: [],
              },
            },
            flag10880,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FRAMEWORK",
            description:
              "ID of the framework or fully qualified identifier for the framework.\n+\nTo set the `framework` attribute:\n* provide the argument `framework` on the command line",
          },
        },
        {
          name: "list",
          description: "List frameworks",
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
            flag10882,
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
            flag6977,
            flag7356,
            flag10888,
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
            flag10888,
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
            flag10888,
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
            flag10882,
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
            flag10888,
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
