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
const flag654: Fig.Option = {
  name: "--application",
  description:
    "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `--application` on the command line",
  args: { name: "APPLICATION", description: "String", suggestions: [] },
};
const flag657: Fig.Option = {
  name: "--application",
  description:
    "Name for the application\n+\nTo set the `application` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--application` on the command line",
  args: { name: "APPLICATION", description: "String", suggestions: [] },
};
const flag658: Fig.Option = {
  name: "--application",
  description:
    "Name for the application\n+\nTo set the `application` attribute:\n* provide the argument `workload` on the command line with a fully specified name;\n* provide the argument `--application` on the command line",
  args: { name: "APPLICATION", description: "String", suggestions: [] },
};
const flag721: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1311: Fig.Option = {
  name: "--business-owners",
  description: "Business owners of the application",
  args: { name: "BUSINESS_OWNERS", description: "Dict", suggestions: [] },
};
const flag1312: Fig.Option = {
  name: "--business-owners",
  description: "Business owners of the service",
  args: { name: "BUSINESS_OWNERS", description: "Dict", suggestions: [] },
};
const flag1313: Fig.Option = {
  name: "--business-owners",
  description: "Business owners of the workload",
  args: { name: "BUSINESS_OWNERS", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2566: Fig.Option = {
  name: "--criticality-type",
  description:
    "Criticality Type of the application. _CRITICALITY_TYPE_ must be one of:\n+\n*HIGH*::: High impact\n*LOW*::: Low impact\n*MEDIUM*::: Medium impact\n*MISSION_CRITICAL*::: Mission critical service, application or workload\n*TYPE_UNSPECIFIED*::: Unspecified criticality type\n:::\n+",
  args: {
    name: "CRITICALITY_TYPE",
    description: "String",
    suggestions: [
      "HIGH",
      "LOW",
      "MEDIUM",
      "MISSION_CRITICAL",
      "TYPE_UNSPECIFIED",
    ],
  },
};
const flag2567: Fig.Option = {
  name: "--criticality-type",
  description:
    "Criticality Type of the service. _CRITICALITY_TYPE_ must be one of:\n+\n*HIGH*::: High impact\n*LOW*::: Low impact\n*MEDIUM*::: Medium impact\n*MISSION_CRITICAL*::: Mission critical service, application or workload\n*TYPE_UNSPECIFIED*::: Unspecified criticality type\n:::\n+",
  args: {
    name: "CRITICALITY_TYPE",
    description: "String",
    suggestions: [
      "HIGH",
      "LOW",
      "MEDIUM",
      "MISSION_CRITICAL",
      "TYPE_UNSPECIFIED",
    ],
  },
};
const flag2568: Fig.Option = {
  name: "--criticality-type",
  description:
    "Criticality Type of the workload. _CRITICALITY_TYPE_ must be one of:\n+\n*HIGH*::: High impact\n*LOW*::: Low impact\n*MEDIUM*::: Medium impact\n*MISSION_CRITICAL*::: Mission critical service, application or workload\n*TYPE_UNSPECIFIED*::: Unspecified criticality type\n:::\n+",
  args: {
    name: "CRITICALITY_TYPE",
    description: "String",
    suggestions: [
      "HIGH",
      "LOW",
      "MEDIUM",
      "MISSION_CRITICAL",
      "TYPE_UNSPECIFIED",
    ],
  },
};
const flag3183: Fig.Option = {
  name: "--description",
  description: "Description of the Application",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3192: Fig.Option = {
  name: "--description",
  description: "Description of the Workload",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3233: Fig.Option = {
  name: "--description",
  description: "Description of the service",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3505: Fig.Option = {
  name: "--developer-owners",
  description: "Developer owners of the application",
  args: { name: "DEVELOPER_OWNERS", description: "Dict", suggestions: [] },
};
const flag3506: Fig.Option = {
  name: "--developer-owners",
  description: "Developer owners of the service",
  args: { name: "DEVELOPER_OWNERS", description: "Dict", suggestions: [] },
};
const flag3507: Fig.Option = {
  name: "--developer-owners",
  description: "Developer owners of the workload",
  args: { name: "DEVELOPER_OWNERS", description: "Dict", suggestions: [] },
};
const flag3766: Fig.Option = {
  name: "--display-name",
  description: "Human-friendly display name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4478: Fig.Option = {
  name: "--environment-type",
  description:
    "Environment Type of the application. _ENVIRONMENT_TYPE_ must be one of:\n+\n*DEVELOPMENT*::: Development environment\n*PRODUCTION*::: Production environment\n*STAGING*::: Staging environment\n*TEST*::: Test environment\n*TYPE_UNSPECIFIED*::: Unspecified environment type\n:::\n+",
  args: {
    name: "ENVIRONMENT_TYPE",
    description: "String",
    suggestions: [
      "DEVELOPMENT",
      "PRODUCTION",
      "STAGING",
      "TEST",
      "TYPE_UNSPECIFIED",
    ],
  },
};
const flag4479: Fig.Option = {
  name: "--environment-type",
  description:
    "Environment Type of the service. _ENVIRONMENT_TYPE_ must be one of:\n+\n*DEVELOPMENT*::: Development environment\n*PRODUCTION*::: Production environment\n*STAGING*::: Staging environment\n*TEST*::: Test environment\n*TYPE_UNSPECIFIED*::: Unspecified environment type\n:::\n+",
  args: {
    name: "ENVIRONMENT_TYPE",
    description: "String",
    suggestions: [
      "DEVELOPMENT",
      "PRODUCTION",
      "STAGING",
      "TEST",
      "TYPE_UNSPECIFIED",
    ],
  },
};
const flag4480: Fig.Option = {
  name: "--environment-type",
  description:
    "Environment Type of the workload. _ENVIRONMENT_TYPE_ must be one of:\n+\n*DEVELOPMENT*::: Development environment\n*PRODUCTION*::: Production environment\n*STAGING*::: Staging environment\n*TEST*::: Test environment\n*TYPE_UNSPECIFIED*::: Unspecified environment type\n:::\n+",
  args: {
    name: "ENVIRONMENT_TYPE",
    description: "String",
    suggestions: [
      "DEVELOPMENT",
      "PRODUCTION",
      "STAGING",
      "TEST",
      "TYPE_UNSPECIFIED",
    ],
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
const flag6693: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* Boundaries only support global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6765: Fig.Option = {
  name: "--location",
  description:
    "Location of the ServiceProjectAttachment.\n+\nTo set the `location` attribute:\n* provide the argument `service_project` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* Service project attachments only support global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6849: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the application.\n+\nTo set the `location` attribute:\n* provide the argument `--application` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6851: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the application.\n+\nTo set the `location` attribute:\n* provide the argument `application` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6863: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the service.\n+\nTo set the `location` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6869: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the workload.\n+\nTo set the `location` attribute:\n* provide the argument `workload` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10714: Fig.Option = {
  name: "--operator-owners",
  description: "Operator owners of the application",
  args: { name: "OPERATOR_OWNERS", description: "Dict", suggestions: [] },
};
const flag10715: Fig.Option = {
  name: "--operator-owners",
  description: "Operator owners of the service",
  args: { name: "OPERATOR_OWNERS", description: "Dict", suggestions: [] },
};
const flag10716: Fig.Option = {
  name: "--operator-owners",
  description: "Operator owners of the workload",
  args: { name: "OPERATOR_OWNERS", description: "Dict", suggestions: [] },
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
  name: "apphub",
  description: "Manage App Hub resources",
  subcommands: [
    {
      name: "applications",
      description: "Manage App Hub Applications",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to an Apphub application",
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
            flag6851,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
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
          name: "create",
          description: "Create an Apphub application",
          options: [
            flag42,
            flag46,
            flag721,
            flag1201,
            flag1311,
            flag2292,
            flag2566,
            flag3183,
            flag3505,
            flag3766,
            flag4478,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6851,
            flag7356,
            flag10714,
            flag11637,
            flag11946,
            {
              name: "--scope-type",
              description:
                "Scope of the Application. _SCOPE_TYPE_ must be one of:\n+\n*GLOBAL*::: Represents a global application\n*REGIONAL*::: Represents a regional application\n:::\n+",
              args: {
                name: "SCOPE_TYPE",
                description: "String",
                suggestions: ["GLOBAL", "REGIONAL"],
              },
            },
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
          name: "delete",
          description: "Delete an Apphub application",
          options: [
            flag42,
            flag46,
            flag721,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6851,
            flag7356,
            flag11637,
            flag11946,
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
          name: "describe",
          description: "Describe an Apphub application",
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
            flag6851,
            flag7356,
            flag11637,
            flag11946,
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
          name: "get-iam-policy",
          description: "Get the IAM policy for an Apphub application",
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
            flag6851,
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
            name: "APPLICATION",
            description:
              "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apphub applications",
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from an Apphub application",
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
            flag6851,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--role",
              description: "The role to remove the principal from",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
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
          name: "services",
          description: "Manage App Hub Application Services",
          subcommands: [
            {
              name: "create",
              description: "Create an Apphub application service",
              options: [
                flag42,
                flag46,
                {
                  name: "--application",
                  description:
                    "Name for the application\n+\nTo set the `application` attribute:\n* provide the argument `SERVICE` on the command line with a fully specified name;\n* provide the argument `--application` on the command line",
                  args: {
                    name: "APPLICATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag721,
                flag1201,
                flag1312,
                flag2292,
                flag2567,
                flag3233,
                flag3506,
                {
                  name: "--discovered-service",
                  description:
                    "ID of the discoveredService or fully qualified identifier for the discoveredService.\n+\nTo set the `discovered_service` attribute:\n* provide the argument `--discovered-service` on the command line",
                  args: {
                    name: "DISCOVERED_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3766,
                flag4479,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--location",
                  description:
                    "The Cloud location for the service.\n+\nTo set the `location` attribute:\n* provide the argument `SERVICE` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag10715,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SERVICE",
                description:
                  "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an Apphub application service",
              options: [
                flag42,
                flag46,
                flag657,
                flag721,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6863,
                flag7356,
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
              description: "Describe an Apphub application service",
              options: [
                flag42,
                flag46,
                flag657,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6863,
                flag7356,
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
              name: "list",
              description: "List Apphub application services",
              options: [
                flag42,
                flag46,
                flag654,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag6849,
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
              description: "Update an Apphub application service",
              options: [
                flag42,
                flag46,
                flag657,
                flag721,
                flag1201,
                flag1312,
                flag2292,
                flag2567,
                flag3233,
                flag3506,
                flag3766,
                flag4479,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6863,
                flag7356,
                flag10715,
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
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for an Apphub application as defined in a JSON/YAML file",
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
            flag6851,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "APPLICATION",
              description:
                "ID of the application or fully qualified identifier for the application.\n+\nTo set the `application` attribute:\n* provide the argument `application` on the command line",
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
          description: "Update an Apphub application",
          options: [
            flag42,
            flag46,
            flag721,
            flag1201,
            flag1311,
            flag2292,
            flag2566,
            flag3183,
            flag3505,
            flag3766,
            flag4478,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6851,
            flag7356,
            flag10714,
            flag11637,
            flag11946,
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
          name: "workloads",
          description: "Manage App Hub Application Workloads",
          subcommands: [
            {
              name: "create",
              description: "Create an Apphub application workload",
              options: [
                flag42,
                flag46,
                {
                  name: "--application",
                  description:
                    "Name for the application\n+\nTo set the `application` attribute:\n* provide the argument `WORKLOAD` on the command line with a fully specified name;\n* provide the argument `--application` on the command line",
                  args: {
                    name: "APPLICATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag721,
                flag1201,
                flag1313,
                flag2292,
                flag2568,
                flag3192,
                flag3507,
                {
                  name: "--discovered-workload",
                  description:
                    "ID of the discoveredWorkload or fully qualified identifier for the discoveredWorkload.\n+\nTo set the `discovered_workload` attribute:\n* provide the argument `--discovered-workload` on the command line",
                  args: {
                    name: "DISCOVERED_WORKLOAD",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3766,
                flag4480,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--location",
                  description:
                    "The Cloud location for the workload.\n+\nTo set the `location` attribute:\n* provide the argument `WORKLOAD` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag10716,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `WORKLOAD` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an Apphub application workload",
              options: [
                flag42,
                flag46,
                flag658,
                flag721,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6869,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an Apphub application workload",
              options: [
                flag42,
                flag46,
                flag658,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6869,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
              },
            },
            {
              name: "list",
              description: "List Apphub application workloads",
              options: [
                flag42,
                flag46,
                flag654,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag6849,
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
              description: "Update an Apphub application workload",
              options: [
                flag42,
                flag46,
                flag658,
                flag721,
                flag1201,
                flag1313,
                flag2292,
                flag2568,
                flag3192,
                flag3507,
                flag3766,
                flag4480,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6869,
                flag7356,
                flag10716,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKLOAD",
                description:
                  "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "boundary",
      description: "Manage App Hub boundaries",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for an App Hub boundary",
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
            flag6693,
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
          description: "Update an App Hub boundary",
          options: [
            flag42,
            flag46,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            flag1201,
            flag2292,
            {
              name: "--crm-node",
              description: "The CRM node to associate with the boundary",
              args: {
                name: "CRM_NODE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6693,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--request-id",
              description: "An optional request ID to identify requests",
              args: {
                name: "REQUEST_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "discovered-services",
      description: "Manage App Hub Discovered Services",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub discovered service",
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
                "The Cloud location for the discoveredService.\n+\nTo set the `location` attribute:\n* provide the argument `discovered_service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DISCOVERED_SERVICE",
            description:
              "ID of the discoveredService or fully qualified identifier for the discoveredService.\n+\nTo set the `discovered_service` attribute:\n* provide the argument `discovered_service` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apphub discovered services",
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
          name: "lookup",
          description: "Lookup an Apphub discovered service with URI",
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
            flag6692,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--uri",
              description:
                "Google Cloud Platform resource URI to look up service for",
              args: { name: "URI", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "discovered-workloads",
      description: "Manage App Hub Discovered Workloads",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub discovered workload",
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
                "The Cloud location for the discoveredWorkload.\n+\nTo set the `location` attribute:\n* provide the argument `discovered_workload` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DISCOVERED_WORKLOAD",
            description:
              "ID of the discoveredWorkload or fully qualified identifier for the discoveredWorkload.\n+\nTo set the `discovered_workload` attribute:\n* provide the argument `discovered_workload` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List Apphub discovered workloads that could be added to an application",
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
          name: "lookup",
          description: "Lookup an Apphub discovered workload with URI",
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
            flag6692,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--uri",
              description:
                "Google Cloud Platform resource URI to look up workload for",
              args: { name: "URI", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "locations",
      description: "Manage App Hub Locations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub location",
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
          description: "List Apphub locations",
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
      description: "Manage App Hub Operations (long-running operations)",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apphub operation (long-running operation)",
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
                "The Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
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
          description: "List Apphub operations (long-running operations)",
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
      name: "service-projects",
      description: "Manage App Hub Service Projects",
      subcommands: [
        {
          name: "add",
          description: "Add an Apphub service project",
          options: [
            flag42,
            flag46,
            flag721,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6765,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_PROJECT",
            description:
              "ID of the ServiceProjectAttachment or fully qualified identifier for the ServiceProjectAttachment.\n+\nTo set the `service_project` attribute:\n* provide the argument `service_project` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Apphub service project",
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
            flag6765,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_PROJECT",
            description:
              "ID of the ServiceProjectAttachment or fully qualified identifier for the ServiceProjectAttachment.\n+\nTo set the `service_project` attribute:\n* provide the argument `service_project` on the command line",
          },
        },
        {
          name: "detach",
          description: "Detach an Apphub service project",
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
        {
          name: "list",
          description: "List Apphub service projects",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* Service project attachments only support global location",
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
          name: "lookup",
          description: "Lookup an Apphub service project",
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
        {
          name: "remove",
          description: "Remove an Apphub service project",
          options: [
            flag42,
            flag46,
            flag721,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6765,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_PROJECT",
            description:
              "ID of the ServiceProjectAttachment or fully qualified identifier for the ServiceProjectAttachment.\n+\nTo set the `service_project` attribute:\n* provide the argument `service_project` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
