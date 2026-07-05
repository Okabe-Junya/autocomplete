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
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1270: Fig.Option = {
  name: "--brand",
  description:
    "The name of the OAuth brand.\n+\nTo set the `brand` attribute:\n* provide the argument `name` on the command line with a fully specified name;\n* provide the argument `--brand` on the command line",
  args: { name: "BRAND", description: "String", suggestions: [] },
};
const flag2218: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2225: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2228: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3357: Fig.Option = {
  name: "--dest-group",
  description: "Name of the Destination Group",
  args: { name: "DEST_GROUP", description: "String", suggestions: [] },
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
const flag4925: Fig.Option = {
  name: "--folder",
  description: "Folder ID",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5091: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. If both `core/format` and\n`--format` are specified, `--format` takes precedence. `--format`\nand `core/format` both take precedence over `core/default_format`. The\nsupported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud\ntopic formats. Run `$ gcloud config set --help` to see more information\nabout `core/format`",
  args: { name: "FORMAT", description: "String", suggestions: [] },
};
const flag5103: Fig.Option = {
  name: "--fqdn-list",
  description: "List of FQDNs in the Destination Group",
  args: { name: "FQDN_LIST", description: "String", suggestions: [] },
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
const flag6024: Fig.Option = {
  name: "--ip-range-list",
  description: "List of ip-ranges in the Destination Group",
  args: { name: "IP_RANGE_LIST", description: "String", suggestions: [] },
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
const flag10812: Fig.Option = {
  name: "--organization",
  description: "Organization ID",
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
const flag12328: Fig.Option = {
  name: "--region",
  description:
    "Region name. Not applicable for ``app-engine''. Optional when ``resource-type'' is ``compute''",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12329: Fig.Option = {
  name: "--region",
  description:
    "Region name. Not applicable for `app-engine`. Required when `resource-type=compute` and regional scoped. Not applicable for global scoped compute. Required when `resource-type=cloud-run`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12330: Fig.Option = {
  name: "--region",
  description:
    "Region name. Not applicable for `resource-type=app-engine`. Required when `resource-type=backend-services` and regional scoped. Not applicable for global backend-services. Required when `resource-type=cloud-run`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12332: Fig.Option = {
  name: "--region",
  description: "Region of the Destination Group",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag13024: Fig.Option = {
  name: "--resource-type",
  description:
    "Resource type of the IAP resource. _RESOURCE_TYPE_ must be one of: *app-engine*, *backend-services*, *forwarding-rule*, *cloud-run*",
  args: {
    name: "RESOURCE_TYPE",
    description: "String",
    suggestions: [
      "app-engine",
      "backend-services",
      "forwarding-rule",
      "cloud-run",
    ],
  },
};
const flag13025: Fig.Option = {
  name: "--resource-type",
  description:
    "Resource type of the IAP resource. _RESOURCE_TYPE_ must be one of: *app-engine*, *backend-services*",
  args: {
    name: "RESOURCE_TYPE",
    description: "String",
    suggestions: ["app-engine", "backend-services"],
  },
};
const flag13026: Fig.Option = {
  name: "--resource-type",
  description:
    "Resource type of the IAP resource. For Backend Services, you can use both `compute` and `backend-services` as resource type. _RESOURCE_TYPE_ must be one of: *app-engine*, *iap_web*, *compute*, *organization*, *folder*, *backend-services*, *forwarding-rule*, *cloud-run*",
  args: {
    name: "RESOURCE_TYPE",
    description: "String",
    suggestions: [
      "app-engine",
      "iap_web",
      "compute",
      "organization",
      "folder",
      "backend-services",
      "forwarding-rule",
      "cloud-run",
    ],
  },
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
const flag13609: Fig.Option = {
  name: "--service",
  description:
    "Service name. Optional when `resource-type` is `compute` or `app-engine`",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13610: Fig.Option = {
  name: "--service",
  description: "Service name. Required with `--resource-type=backend-services`",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13611: Fig.Option = {
  name: "--service",
  description: "Service name",
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
  name: "iap",
  description: "Manage IAP policies",
  subcommands: [
    {
      name: "oauth-brands",
      description: "*(DEPRECATED)*  Manage IAP OAuth brands",
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)*  Create a Cloud OAuth brand for the project",
          options: [
            flag42,
            flag46,
            {
              name: ["--application-title", "--application_title"],
              description:
                "Application name displayed on the OAuth consent screen",
              args: {
                name: "APPLICATION_TITLE",
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
            flag7356,
            flag11637,
            flag11946,
            {
              name: ["--support-email", "--support_email"],
              description:
                "Support email displayed on the OAuth consent screen",
              args: {
                name: "SUPPORT_EMAIL",
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
          name: "describe",
          description: "*(DEPRECATED)*  Describe a Cloud OAuth brand",
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
            name: "NAME",
            description:
              "ID of the brand or fully qualified identifier for the brand.\n+\nTo set the `brand` attribute:\n* provide the argument `name` on the command line",
          },
        },
        {
          name: "list",
          description: "*(DEPRECATED)*  List Cloud OAuth brands in the project",
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
        },
      ],
    },
    {
      name: "oauth-clients",
      description: "*(DEPRECATED)*  Manage IAP OAuth clients",
      subcommands: [
        {
          name: "create",
          description:
            "*(DEPRECATED)*  Create a Cloud IAP OAuth client in the project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: ["--display-name", "--display_name"],
              description: "User friendly name for the Cloud IAP OAuth client",
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
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BRAND",
            description:
              "ID of the brand or fully qualified identifier for the brand.\n+\nTo set the `brand` attribute:\n* provide the argument `brand` on the command line",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)*  Delete a Cloud IAP OAuth client",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1270,
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
            name: "NAME",
            description:
              "ID of the proxy client or fully qualified identifier for the proxy client.\n+\nTo set the `identity_aware_proxy_clients` attribute:\n* provide the argument `name` on the command line",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)*  Describe a Cloud IAP OAuth client",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1270,
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
            name: "NAME",
            description:
              "ID of the proxy client or fully qualified identifier for the proxy client.\n+\nTo set the `identity_aware_proxy_clients` attribute:\n* provide the argument `name` on the command line",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)*  List Cloud IAP OAuth clients in the Cloud OAuth brand",
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
            name: "NAME",
            description:
              "ID of the brand or fully qualified identifier for the brand.\n+\nTo set the `brand` attribute:\n* provide the argument `name` on the command line",
          },
        },
        {
          name: "reset-secret",
          description: "*(DEPRECATED)*  Reset a Cloud IAP OAuth client secret",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1270,
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
            name: "NAME",
            description:
              "ID of the proxy client or fully qualified identifier for the proxy client.\n+\nTo set the `identity_aware_proxy_clients` attribute:\n* provide the argument `name` on the command line",
          },
        },
      ],
    },
    {
      name: "settings",
      description: "Manage IAP settings",
      subcommands: [
        {
          name: "get",
          description: "Get the setting for an IAP resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4925,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10812,
            flag11946,
            flag12329,
            flag13026,
            flag13609,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set",
          description: "Set the setting for an IAP resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4925,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10812,
            flag11946,
            flag12329,
            flag13026,
            flag13609,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SETTING_FILE",
            description:
              'JSON or YAML file containing the IAP resource settings.\n+\nJSON example:\n+\n```\n{\n  "access_settings": {\n    "oauth_settings": {\n      "login_hint": {\n        "value": "test_hint"\n      }\n    },\n    "gcip_settings": {\n      "tenant_ids": [\n        "tenant1-p9puj",\n        "tenant2-y8rxc"\n      ],\n      "login_page_uri": {\n        "value": "https://test.com/?apiKey=abcd_efgh"\n      }\n    },\n    "cors_settings": {\n      "allow_http_options": {\n        "value": true\n      }\n    }\n  },\n  "application_settings": {\n    "csm_settings": {\n      "rctoken_aud": {\n        "value": "test_aud"\n      }\n    }\n  }\n}\n```\n+\nYAML example:\n+\n```\naccessSettings :\n  oauthSettings:\n    loginHint: test_hint\n  gcipSettings:\n    tenantIds:\n    - tenant1-p9puj\n    - tenant2-y8rxc\n    loginPageUri: https://test.com/?apiKey=abcd_efgh\n  corsSettings:\n    allowHttpOptions: true\napplicationSettings:\n  csmSettings:\n    rctokenAud: test_aud\n```',
          },
        },
      ],
    },
    {
      name: "tcp",
      description: "Manage IAP TCP resources",
      subcommands: [
        {
          name: "dest-groups",
          description: "Manage IAP TCP Destination Group resources",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add IAM policy binding to an IAP TCP Tunnel Destination Group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2225,
                flag2218,
                flag2292,
                flag3357,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag7749,
                flag11637,
                flag11946,
                flag12332,
                flag13132,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "create",
              description: "Create the IAP TCP Destination Group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5103,
                flag5453,
                flag5699,
                flag6024,
                flag7356,
                flag11637,
                flag11946,
                flag12332,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
            {
              name: "delete",
              description: "Delete the IAP TCP Destination Group resource",
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
                flag12332,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
            {
              name: "describe",
              description: "Describe the IAP TCP Destination Group resource",
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
                flag12332,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get IAM policy for an IAP TCP Destination Group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3357,
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
                flag12332,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "list",
              description: "Lists the IAP TCP Destination Group resource",
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
                {
                  name: "--region",
                  description:
                    "Region of the Destination Group, will list all regions by default",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove IAM policy binding from an IAP TCP Destination Group resource",
              options: [
                flag42,
                flag46,
                flag407,
                flag1201,
                flag2228,
                flag2218,
                flag2292,
                flag3357,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag7753,
                flag11637,
                flag11946,
                flag12332,
                flag13133,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for an IAP TCP Destination Group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3357,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag12332,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "POLICY_FILE",
                description: "JSON or YAML file containing the IAM policy",
              },
            },
            {
              name: "update",
              description: "Update the IAP TCP Destination Group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5103,
                flag5453,
                flag5699,
                flag6024,
                flag7356,
                flag11637,
                flag11946,
                flag12332,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GROUP_NAME",
                description: "Name of the Destination Group",
              },
            },
          ],
        },
      ],
    },
    {
      name: "web",
      description: "Manage IAP web policies",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to an IAP IAM resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12330,
            flag13024,
            flag13132,
            flag13611,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "disable",
          description:
            "Disable Cloud Identity-Aware Proxy (Cloud IAP) on an IAP resource",
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
            flag12328,
            flag13025,
            flag13610,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "enable",
          description:
            "Enable Cloud Identity-Aware Proxy (Cloud IAP) on an IAP resource",
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
              name: "--oauth2-client-id",
              description: "OAuth 2.0 client ID to use",
              args: {
                name: "OAUTH2_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oauth2-client-secret",
              description: "OAuth 2.0 client secret to use",
              args: {
                name: "OAUTH2_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12328,
            flag13025,
            flag13610,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for an IAP IAM resource",
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
            flag12330,
            flag13024,
            flag13611,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from an IAP IAM resource",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12330,
            flag13024,
            flag13133,
            flag13611,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for an IAP IAM resource",
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
            flag12330,
            flag13024,
            flag13611,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_FILE",
            description: "JSON or YAML file containing the IAM policy",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
