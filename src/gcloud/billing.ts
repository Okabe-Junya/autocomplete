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
const flag1195: Fig.Option = {
  name: "--billing-account",
  description:
    "ID of the billing-account or fully qualified identifier for the billing-account.\n+\nTo set the `billing-account` attribute:\n* provide the argument `--billing-account` on the command line",
  args: { name: "BILLING_ACCOUNT", description: "String", suggestions: [] },
};
const flag1199: Fig.Option = {
  name: "--billing-account",
  description:
    "The billing account.\n+\n\nTo set the `billing-account` attribute:\n* provide the argument `budget` on the command line with a fully specified name;\n* provide the argument `--billing-account` on the command line",
  args: { name: "BILLING_ACCOUNT", description: "String", suggestions: [] },
};
const flag1200: Fig.Option = {
  name: "--billing-account",
  description:
    "Specify a billing account ID. Billing account IDs are of the form `0X0X0X-0X0X0X-0X0X0X`. To see available IDs, run `$ gcloud billing accounts list`",
  args: { name: "ACCOUNT_ID", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1352: Fig.Option = {
  name: "--calendar-period",
  description:
    "Specified to track usage over recurring calendar period. If you're creating a budget with a custom time period, omit this flag. _CALENDAR_PERIOD_ must be one of: *calendar-period-unspecified*, *month*, *quarter*, *year*",
  args: {
    name: "CALENDAR_PERIOD",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["calendar-period-unspecified", "month", "quarter", "year"],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2558: Fig.Option = {
  name: "--credit-types-treatment",
  description:
    "Whether to include all credit types when calculating the actual spend against the budget. If\nthis is not specified, then all credit types are used in the calculation. If this is set to\ninclude-specified-credits, then --filter-credit-types must be specified with a nonempty list\nof credits. _CREDIT_TYPES_TREATMENT_ must be one of: *credit-types-treatment-unspecified*, *exclude-all-credits*, *include-all-credits*, *include-specified-credits*",
  args: {
    name: "CREDIT_TYPES_TREATMENT",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "credit-types-treatment-unspecified",
      "exclude-all-credits",
      "include-all-credits",
      "include-specified-credits",
    ],
  },
};
const flag3563: Fig.Option = {
  name: "--disable-default-iam-recipients",
  description:
    "When set to true, disables default notifications sent when a threshold is exceeded. Default\nnotifications are sent to those with Billing Account Administrator and Billing Account User\nIAM roles for the target account",
};
const flag4384: Fig.Option = {
  name: "--end-date",
  description:
    "Specified to track usage before any end date. This time period is static, it does not\nrecur. If specified, --start-date must also be specified",
  args: { name: "END_DATE", description: "String", suggestions: [] },
};
const flag4834: Fig.Option = {
  name: "--filter-credit-types",
  description:
    "Set of credit types, specifying that usage from only this set of credits should be included\nin the budget. If a nonempty list is specified, then --credit-types-treatment must be\ninclude-specified-credits",
  args: { name: "FILTER_CREDIT_TYPES", description: "List", suggestions: [] },
};
const flag4838: Fig.Option = {
  name: "--filter-labels",
  description:
    "Single label and value pair specifying that usage from only this set of labeled resources\nshould be included in the budget. Currently, multiple entries or multiple values per entry\nare not allowed. If omitted, the report will include all labeled and unlabeled usage",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
    suggestions: [],
  },
};
const flag4841: Fig.Option = {
  name: "--filter-projects",
  description:
    "Set of projects in the form `projects/{project_id}`, specifying that usage from only this\nset of projects should be included in the budget. If omitted, all projects will be included",
  args: { name: "FILTER_PROJECTS", description: "List", suggestions: [] },
};
const flag4843: Fig.Option = {
  name: "--filter-resource-ancestors",
  description:
    "A set of folder and organization names of the form `folders/{folderId}` or\n`organizations/{organizationId}`, specifying that usage from only this set of folders and\norganizations should be included in the budget. If omitted, the budget includes all usage\nthat the billing account pays for. If the folder or organization contains projects that are\npaid for by a different Cloud Billing account, the budget doesn't apply to those projects",
  args: {
    name: "FILTER_RESOURCE_ANCESTORS",
    description: "List",
    suggestions: [],
  },
};
const flag4844: Fig.Option = {
  name: "--filter-services",
  description:
    "Set of services of the form `services/{service_id}`, specifying that usage from only this\nset of services should be included in the budget. If omitted, the report will include usage\nfor all services. The service names are available through the Catalog API:\nhttps://cloud.google.com/billing/v1/how-tos/catalog-api",
  args: { name: "FILTER_SERVICES", description: "List", suggestions: [] },
};
const flag4845: Fig.Option = {
  name: "--filter-subaccounts",
  description:
    "Set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from\nonly this set of subaccounts should be included in the budget. If a subaccount is set to the\nname of the parent account, usage from the parent account will be included. If omitted, the\nreport will include usage from the parent account and all subaccounts, if they exist",
  args: { name: "FILTER_SUBACCOUNTS", description: "List", suggestions: [] },
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
const flag6469: Fig.Option = {
  name: "--last-period-amount",
  description: "Use the amount of last period's budget",
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
const flag10584: Fig.Option = {
  name: "--notifications-rule-pubsub-topic",
  description:
    "Name of the Cloud Pub/Sub topic where budget related messages will be published, in\nthe form `projects/{project_id}/topics/{topic_id}`",
  args: {
    name: "NOTIFICATIONS_RULE_PUBSUB_TOPIC",
    description: "String",
    suggestions: [],
  },
};
const flag11034: Fig.Option = {
  name: "--ownership-scope",
  description:
    "Sets the ownership scope of the budget. The ownership scope and users' IAM permissions\ndetermine who has full access to the budget's data.\n+\nMust be one of: 'ALL_USERS' or 'BILLING_ACCOUNT'. Use 'ALL_USERS' to allow billing account-\nlevel users and project-level users to have full access to the budget (if the users have\nthe required IAM permissions). Use 'BILLING_ACCOUNT' to allow only billing account-level\nusers to have full access to the budget. Project-level users will have read-only access,\neven if they have the required IAM permissions.\n+\n_OWNERSHIP_SCOPE_ must be one of: *all-users*, *billing-account*, *ownership-scope-unspecified*",
  args: {
    name: "OWNERSHIP_SCOPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "all-users",
      "billing-account",
      "ownership-scope-unspecified",
    ],
  },
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
const flag14361: Fig.Option = {
  name: "--start-date",
  description:
    "Specified to track usage after any start date. This time period is static, it does not\nrecur",
  args: { name: "START_DATE", description: "String", suggestions: [] },
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
  name: "billing",
  description: "Manage billing accounts and associate them with projects",
  subcommands: [
    {
      name: "accounts",
      description: "Manage billing accounts",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Billing account",
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
            name: "ACCOUNT",
            description:
              "ID of the account or fully qualified identifier for the account.\n+\nTo set the `account` attribute:\n* provide the argument `account` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a billing account",
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
            name: "ACCOUNT_ID",
            description:
              "Specify a billing account ID. Billing account IDs are of the form `0X0X0X-0X0X0X-0X0X0X`. To see available IDs, run `$ gcloud billing accounts list`",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Billing account",
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
            name: "ACCOUNT",
            description:
              "ID of the account or fully qualified identifier for the account.\n+\nTo set the `account` attribute:\n* provide the argument `account` on the command line",
          },
        },
        {
          name: "list",
          description: "List all active billing accounts",
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Billing account",
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
            name: "ACCOUNT",
            description:
              "ID of the account or fully qualified identifier for the account.\n+\nTo set the `account` attribute:\n* provide the argument `account` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Billing account",
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
          args: [
            {
              name: "ACCOUNT",
              description:
                "ID of the account or fully qualified identifier for the account.\n+\nTo set the `account` attribute:\n* provide the argument `account` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
    {
      name: "budgets",
      description: "Manage the budgets of your billing accounts",
      subcommands: [
        {
          name: "create",
          description: "Create a budget",
          options: [
            flag42,
            flag46,
            flag1195,
            flag1201,
            {
              name: "--budget-amount",
              description:
                "Specify the amount of the budget. If a currency type is included, it must be the\ncurrency associated with the billing account. If excluded, the currency used will be the\ncurrency associated with the billing account",
              args: {
                name: "BUDGET_AMOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag1352,
            flag2292,
            flag2558,
            flag3563,
            {
              name: "--display-name",
              description:
                "User data for display name in UI. Must be less than or equal to 60 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4384,
            flag4834,
            flag4838,
            flag4841,
            flag4843,
            flag4844,
            flag4845,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6469,
            flag7356,
            {
              name: "--notifications-rule-monitoring-notification-channels",
              description:
                "Targets to send notifications to when a threshold is exceeded. This is in addition to\ndefault recipients who have billing account IAM roles. The value is the full REST resource\nname of a monitoring notification channel in the form\n`projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels is\nallowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients\nfor more details",
              args: {
                name: "NOTIFICATIONS_RULE_MONITORING_NOTIFICATION_CHANNELS",
                description: "List",
                suggestions: [],
              },
            },
            flag10584,
            flag11034,
            flag11637,
            flag11946,
            flag14361,
            {
              name: "--threshold-rule",
              description:
                "Rule that triggers alerts (notifications of thresholds being crossed) when spend\nexceeds the specified percentages of the budget. This flag can be repeated to provide\nmultiple thresholds above which an alert is sent.\n+\n*percent*::: Number between 0.0 and 1.0. This is a 1.0-based percentage; for example 0.5\nequals 50 percent. An alert is sent for anything above the value set.\n+\n*basis*::: Type of basis used to determine if spend has passed the threshold. Must be\none of: 'current-spend' or 'forecasted-spend'. Behavior defaults to 'current-spend' if not\nset",
              args: {
                name: "THRESHOLD_RULE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a budget",
          options: [
            flag42,
            flag46,
            flag1199,
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
            name: "BUDGET",
            description:
              "ID of the budget or fully qualified identifier for the budget.\n+\nTo set the `budget` attribute:\n* provide the argument `budget` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a budget",
          options: [
            flag42,
            flag46,
            flag1199,
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
            name: "BUDGET",
            description:
              "ID of the budget or fully qualified identifier for the budget.\n+\nTo set the `budget` attribute:\n* provide the argument `budget` on the command line",
          },
        },
        {
          name: "list",
          description: "List budgets",
          options: [
            flag42,
            flag46,
            flag1195,
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
        {
          name: "update",
          description: "Update a budget",
          options: [
            flag42,
            flag46,
            {
              name: "--add-threshold-rule",
              description:
                "Rule that triggers alerts (notifications of thresholds being crossed) when spend\nexceeds the specified percentages of the budget. This flag can be repeated to\nprovide multiple thresholds above which an alert is sent.\n+\n*percent*::: Integer between 0 and 100 above which an alert is sent.\n+\n*basis*::: Type of basis used to determine if spend has passed the threshold. Must\nbe one of: 'current-spend' or 'forecasted-spend'. Behavior defaults to\n'current-spend' if not set",
              args: {
                name: "ADD_THRESHOLD_RULE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag1199,
            flag1201,
            {
              name: "--budget-amount",
              description:
                "Specify the amount of the budget. If a currency type is included, it must be the\nexisting currency associated with the budget",
              args: {
                name: "BUDGET_AMOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag1352,
            {
              name: "--clear-threshold-rules",
              description: "Removes all threshold rules from the budget",
            },
            flag2292,
            flag2558,
            flag3563,
            {
              name: "--display-name",
              description:
                "User data for display name in UI. Must be less than or equal to 60 characters",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4384,
            flag4834,
            flag4838,
            flag4841,
            flag4843,
            flag4844,
            flag4845,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6469,
            flag7356,
            {
              name: "--notifications-rule-monitoring-notification-channels",
              description:
                "Targets to send notifications to when a threshold is exceeded. This is in addition to\ndefault recipients who have billing account roles. The value is the full REST resource name\nof a monitoring notification channel in the form\n`projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels is\nallowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients\nfor more details",
              args: {
                name: "NOTIFICATIONS_RULE_MONITORING_NOTIFICATION_CHANNELS",
                description: "List",
                suggestions: [],
              },
            },
            flag10584,
            flag11034,
            flag11637,
            flag11946,
            flag14361,
            {
              name: "--threshold-rules-from-file",
              description:
                "Import a file with the updated threshold rules. The threshold rules in the file will\nreplace the rules in the budget. This can be used to add or remove specific\nthreshold rules. Use a full or relative path to a local file containing the value of threshold_rules",
              args: {
                name: "THRESHOLD_RULES_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BUDGET",
            description:
              "ID of the budget or fully qualified identifier for the budget.\n+\nTo set the `budget` attribute:\n* provide the argument `budget` on the command line",
          },
        },
      ],
    },
    {
      name: "projects",
      description: "Manage the billing account configuration of your projects",
      subcommands: [
        {
          name: "describe",
          description: "Show detailed billing information for a project",
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
          args: { name: "PROJECT_ID", description: "Specify a project id" },
        },
        {
          name: "link",
          description: "Link a project with a billing account",
          options: [
            flag42,
            flag46,
            flag1200,
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
          args: { name: "PROJECT_ID", description: "Specify a project id" },
        },
        {
          name: "list",
          description:
            "List all active projects associated with the specified billing account",
          options: [
            flag42,
            flag46,
            flag1200,
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
        {
          name: "unlink",
          description: "Unlink the account (if any) linked with a project",
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
          args: { name: "PROJECT_ID", description: "Specify a project id" },
        },
      ],
    },
  ],
};

export default completionSpec;
