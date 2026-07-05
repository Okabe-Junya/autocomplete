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
const flag373: Fig.Option = {
  name: "--aggregation",
  description:
    "Specifies an Aggregation message as a JSON/YAML value to be applied to the condition. For more information about the format: https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies",
  args: { name: "AGGREGATION", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1234: Fig.Option = {
  name: "--body",
  description:
    "The request body associated with the HTTP POST request.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "BODY", description: "String", suggestions: [] },
};
const flag1950: Fig.Option = {
  name: "--clear-user-labels",
  description:
    "Remove all labels. If `--update-user-labels` is also specified then\n`--clear-user-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-user-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-user-labels --update-user-labels foo=bar,baz=qux",
};
const flag2144: Fig.Option = {
  name: "--combiner",
  description:
    "The combiner for the Alert Policy. _COMBINER_ must be one of:\n+\n*AND*::: An incident is created only if all conditions are met simultaneously. This combiner is satisfied if all conditions are met, even if they are met on completely different resources.\n*AND_WITH_MATCHING_RESOURCE*::: Combine conditions using logical AND operator, but unlike the regular AND option, an incident is created only if all conditions are met simultaneously on at least one resource.\n*COMBINE_UNSPECIFIED*::: An unspecified combiner\n*OR*::: An incident is created if any of the listed conditions is met.\n:::\n+",
  args: {
    name: "COMBINER",
    description: "String",
    suggestions: [
      "AND",
      "AND_WITH_MATCHING_RESOURCE",
      "COMBINE_UNSPECIFIED",
      "OR",
    ],
  },
};
const flag2213: Fig.Option = {
  name: "--condition-display-name",
  description: "The display name for the condition",
  args: {
    name: "CONDITION_DISPLAY_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag2217: Fig.Option = {
  name: "--condition-filter",
  description:
    'Specifies the "filter" in a metric absence or metric threshold condition',
  args: { name: "CONDITION_FILTER", description: "String", suggestions: [] },
};
const flag2260: Fig.Option = {
  name: "--config-from-file",
  description:
    "Path to a JSON or YAML file containing the dashboard configuration. Use a full or relative path to a local file containing the value of config",
  args: {
    name: "CONFIG_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2268: Fig.Option = {
  name: "--config",
  description:
    "Dashboard configuration, in either JSON or YAML format, as a string",
  args: { name: "CONFIG", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2435: Fig.Option = {
  name: "--content-type",
  description:
    "The content type header to use for the check, defaults to `unspecified`.\n        Can only be set if `--protocol` is `http` or `https`.\n+\n_CONTENT_TYPE_ must be one of:\n+\n*unspecified*::: Not specified\n*url-encoded*::: URL encoded\n*user-provided*::: User provided\n:::\n+",
  args: {
    name: "CONTENT_TYPE",
    description: "String",
    suggestions: ["unspecified", "url-encoded", "user-provided"],
  },
};
const flag2617: Fig.Option = {
  name: "--custom-content-type",
  description:
    "A user-provided content type header to use for the check.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "CUSTOM_CONTENT_TYPE", description: "String", suggestions: [] },
};
const flag3788: Fig.Option = {
  name: "--display-name",
  description: "The display name for the Alert Policy",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3795: Fig.Option = {
  name: "--display-name",
  description: "The display name for the Snooze",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3883: Fig.Option = {
  name: "--documentation-from-file",
  description:
    "The path to a file containing the documentation to be included with the policy. Use a full or relative path to a local file containing the value of documentation",
  args: {
    name: "DOCUMENTATION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag3884: Fig.Option = {
  name: "--documentation",
  description: "The documentation to be included with the policy",
  args: { name: "DOCUMENTATION", description: "String", suggestions: [] },
};
const flag3959: Fig.Option = {
  name: "--duration",
  description:
    'The duration (e.g. "60s", "2min", etc.) that the condition must hold in order to trigger as true',
  args: {
    name: "DURATION",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag4391: Fig.Option = {
  name: "--end-time",
  description: "The end time for the Snooze",
  args: {
    name: "END_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
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
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5629: Fig.Option = {
  name: "--if",
  description:
    'One of "absent", "< THRESHOLD", "> THRESHOLD" where "THRESHOLD" is an integer or float',
  args: {
    name: "IF",
    description:
      "Googlecloudsdk.command_lib.monitoring.flags:ComparisonValidator",
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
const flag6145: Fig.Option = {
  name: "--json-path-matcher-type",
  description:
    "The type of JSONPath match that is applied to the JSON output, defaults to\n            `exact-match`.\n            Only used if `--matcher-type` is `matches-json-path` or `not-matches-json-path`.\n+\n_JSON_PATH_MATCHER_TYPE_ must be one of:\n+\n*exact-match*::: Response matches exact string at JSONPath\n*regex-match*::: Response matches regex at JSONPath\n:::\n+",
  args: {
    name: "JSON_PATH_MATCHER_TYPE",
    description: "String",
    suggestions: ["exact-match", "regex-match"],
  },
};
const flag6146: Fig.Option = {
  name: "--json-path",
  description:
    "JSONPath within the response output pointing to the expected content to match.\n            Only used if `--matcher-type` is `matches-json-path` or `not-matches-json-path`",
  args: { name: "JSON_PATH", description: "String", suggestions: [] },
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
const flag7558: Fig.Option = {
  name: "--mask-headers",
  description:
    "Whether to encrypt the header information, defaults to `false`.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "MASK_HEADERS", description: "String", suggestions: [] },
};
const flag7594: Fig.Option = {
  name: "--matcher-content",
  description: "String, regex or JSON content to match",
  args: { name: "MATCHER_CONTENT", description: "String", suggestions: [] },
};
const flag7595: Fig.Option = {
  name: "--matcher-type",
  description:
    "The type of content matcher that is applied to the server output, defaults to\n        `contains-string`.\n+\n_MATCHER_TYPE_ must be one of:\n+\n*contains-string*::: Response contains string\n*matches-json-path*::: Response matches at JSONPath\n*matches-regex*::: Response matches regex\n*not-contains-string*::: Response does not contain string\n*not-matches-json-path*::: Response does not match at JSONPath\n*not-matches-regex*::: Response does not match regex\n:::\n+",
  args: {
    name: "MATCHER_TYPE",
    description: "String",
    suggestions: [
      "contains-string",
      "matches-json-path",
      "matches-regex",
      "not-contains-string",
      "not-matches-json-path",
      "not-matches-regex",
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
const flag11172: Fig.Option = {
  name: "--password",
  description:
    "The password to use when authenticating with the HTTP server.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "PASSWORD", description: "String", suggestions: [] },
};
const flag11184: Fig.Option = {
  name: "--path",
  description:
    "The path to the page against which to run the check, defaults to `/`.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "PATH", description: "String", suggestions: [] },
};
const flag11265: Fig.Option = {
  name: "--period",
  description:
    "The time between uptime check or synthetic monitor executions in\n              minutes, defaults to `1`. Can be set for synthetic monitors.\n+\n_PERIOD_ must be one of:\n+\n*1*::: One minute\n*10*::: Ten minutes\n*15*::: Fifteen minutes\n*5*::: Five minutes\n:::\n+",
  args: {
    name: "PERIOD",
    description: "String",
    suggestions: ["1", "10", "15", "5"],
  },
};
const flag11300: Fig.Option = {
  name: "--pings-count",
  description: "Number of ICMP pings to send alongside the request",
  args: {
    name: "PINGS_COUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11344: Fig.Option = {
  name: "--policy-from-file",
  description:
    "The path to a JSON or YAML file containing the policy. Use a full or relative path to a local file containing the value of policy",
  args: {
    name: "POLICY_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag11365: Fig.Option = {
  name: "--policy",
  description:
    "Name of the alerting policy.\n+\nTo set the `policy` attribute:\n* provide the argument `condition` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line",
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag11377: Fig.Option = {
  name: "--policy",
  description: "The policy as a string. In either JSON or YAML format",
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag11417: Fig.Option = {
  name: "--port",
  description:
    "The port on the server against which to run the check.\n        Defaults to `80` when `--protocol` is `http`.\n        Defaults to `443` when `--protocol` is `https`.\n        Required if `--protocol` is `tcp`",
  args: {
    name: "PORT",
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
const flag12751: Fig.Option = {
  name: "--remove-user-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-user-labels` is also specified then\n`--update-user-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12854: Fig.Option = {
  name: "--request-method",
  description:
    "The HTTP request method to use, defaults to `get`.\n        Can only be set if `--protocol` is `http` or `https`.\n+\n_REQUEST_METHOD_ must be one of:\n+\n*get*::: HTTP GET method\n*post*::: HTTP POST method\n:::\n+",
  args: {
    name: "REQUEST_METHOD",
    description: "String",
    suggestions: ["get", "post"],
  },
};
const flag13553: Fig.Option = {
  name: "--service-agent-auth",
  description:
    "The type of authentication to use for the HTTP request.\n        Can only be set if `--protocol` is `https`.\n+\n_SERVICE_AGENT_AUTH_ must be (only one value is supported):\n+\n*oidc-token*::: OIDC Token authentication\n:::\n+",
  args: {
    name: "SERVICE_AGENT_AUTH",
    description: "String",
    suggestions: ["oidc-token"],
  },
};
const flag13934: Fig.Option = {
  name: "--snooze-from-file",
  description:
    "The path to a JSON or YAML file containing the snooze. Use a full or relative path to a local file containing the value of snooze",
  args: {
    name: "SNOOZE_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14374: Fig.Option = {
  name: "--start-time",
  description: "The start time for the Snooze",
  args: {
    name: "START_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14917: Fig.Option = {
  name: "--timeout",
  description:
    "The maximum amount of time in seconds to wait for the request to complete, defaults to `60`. Can be set for synthetic monitors",
  args: {
    name: "TIMEOUT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14998: Fig.Option = {
  name: "--trigger-count",
  description:
    "The absolute number of time series that must fail the predicate for the condition to be triggered",
  args: { name: "TRIGGER_COUNT", description: "Int", suggestions: [] },
};
const flag15006: Fig.Option = {
  name: "--trigger-percent",
  description:
    "The percentage of time series that must fail the predicate for the condition to be triggered",
  args: { name: "TRIGGER_PERCENT", description: "Float", suggestions: [] },
};
const flag15229: Fig.Option = {
  name: "--update-user-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag15344: Fig.Option = {
  name: "--username",
  description:
    "The username to use when authenticating with the HTTP server.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "USERNAME", description: "String", suggestions: [] },
};
const flag15397: Fig.Option = {
  name: "--validate-ssl",
  description:
    "Whether to include SSL certificate validation as a part of the uptime check,\n        defaults to `false`.\n        Can only be set if `--protocol` is `http` or `https`",
  args: { name: "VALIDATE_SSL", description: "String", suggestions: [] },
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
  name: "monitoring",
  description: "Manage Cloud Monitoring dashboards",
  subcommands: [
    {
      name: "dashboards",
      description: "Manage Cloud Monitoring dashboards",
      subcommands: [
        {
          name: "create",
          description: "Create a new Cloud Monitoring dashboard",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2268,
            flag2260,
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
            {
              name: "--validate-only",
              description:
                "When set, validate the dashboard but do not save it",
            },
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Monitoring dashboard",
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
            name: "DASHBOARD",
            description:
              "ID of the dashboard or fully qualified identifier for the dashboard.\n+\nTo set the `dashboard` attribute:\n* provide the argument `dashboard` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Monitoring dashboard",
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
            name: "DASHBOARD",
            description:
              "ID of the dashboard or fully qualified identifier for the dashboard.\n+\nTo set the `dashboard` attribute:\n* provide the argument `dashboard` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Monitoring dashboards",
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
        {
          name: "update",
          description: "Update a Cloud Monitoring dashboard",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2268,
            flag2260,
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
            name: "DASHBOARD",
            description:
              "ID of the dashboard or fully qualified identifier for the dashboard.\n+\nTo set the `dashboard` attribute:\n* provide the argument `dashboard` on the command line",
          },
        },
      ],
    },
    {
      name: "policies",
      description: "Manage Cloud Monitoring alerting policies",
      subcommands: [
        {
          name: "conditions",
          description: "Manage Cloud Monitoring alerting policy conditions",
          subcommands: [
            {
              name: "create",
              description: "Create a condition in an alerting policy",
              options: [
                flag42,
                flag46,
                flag373,
                flag1201,
                {
                  name: "--condition",
                  description:
                    "The condition as a string. In either JSON or YAML format",
                  args: {
                    name: "CONDITION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2213,
                flag2217,
                {
                  name: "--condition-from-file",
                  description:
                    "The path to a JSON or YAML file containing the condition. Use a full or relative path to a local file containing the value of condition",
                  args: {
                    name: "CONDITION_FROM_FILE",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:FileContents",
                    suggestions: [],
                  },
                },
                flag2292,
                flag3959,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5629,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag14998,
                flag15006,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ALERT_POLICY",
                description:
                  "ID of the Alert Policy or fully qualified identifier for the Alert Policy.\n+\nTo set the `policy` attribute:\n* provide the argument `alert_policy` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a condition in an alerting policy",
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
                flag11365,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONDITION",
                description:
                  "ID of the condition or fully qualified identifier for the condition.\n+\nTo set the `condition` attribute:\n* provide the argument `condition` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Describe a condition in a Cloud Monitoring alerting policy",
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
                flag11365,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONDITION",
                description:
                  "ID of the condition or fully qualified identifier for the condition.\n+\nTo set the `condition` attribute:\n* provide the argument `condition` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a condition in an alerting policy",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--display-name",
                  description: "The display name for the Condition",
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
                flag5629,
                flag5699,
                flag7356,
                flag11365,
                flag11637,
                flag11946,
                flag14975,
                flag14998,
                flag15006,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONDITION",
                description:
                  "ID of the condition or fully qualified identifier for the condition.\n+\nTo set the `condition` attribute:\n* provide the argument `condition` on the command line",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new alerting policy",
          options: [
            flag42,
            flag46,
            flag373,
            flag1201,
            flag2144,
            flag2213,
            flag2217,
            flag2292,
            flag3788,
            flag3884,
            {
              name: "--documentation-format",
              description:
                'The MIME type that should be used with `--documentation` or `--documentation-from-file`. Currently, only "text/markdown" is supported',
              args: {
                name: "DOCUMENTATION_FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            flag3883,
            flag3959,
            {
              name: "--enabled",
              description:
                "If the policy is enabled. Enabled by default, use *--no-enabled* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5629,
            flag5699,
            flag7356,
            {
              name: "--notification-channels",
              description:
                "IDs of the Notification Channels or fully qualified identifiers for the Notification Channels.\n+\nTo set the `notification_channels` attribute:\n* provide the argument `--notification-channels` on the command line",
              args: {
                name: "NOTIFICATION_CHANNELS",
                description: "List",
                suggestions: [],
              },
            },
            flag11377,
            flag11344,
            flag11637,
            flag11946,
            flag14975,
            flag14998,
            flag15006,
            {
              name: "--user-labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\nIf the policy was given as a JSON/YAML object from a string or file, this flag will replace the labels value in the given policy",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Monitoring alerting policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an  alerting policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List alerting policies",
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
        {
          name: "migrate",
          description:
            "Migrate a Prometheus configuration file to Cloud Monitoring",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--channels-from-prometheus-alertmanager-yaml",
              description:
                "Prometheus alert manager YAML file to be converted to Cloud Monitoring notification channels. Specifying this flag with the --policies-from-prometheus-alert-rules-yaml flag puts the newly created notification channels into the translated Alert Policies' definition. Use a full or relative path to a local file containing the value of channels_from_prometheus_alertmanager_yaml",
              args: {
                name: "PROMETHEUS_ALERT_MANAGER_FILE_PATH",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--policies-from-prometheus-alert-rules-yaml",
              description:
                "One or more Prometheus alert rule YAML files (separated by commas if multiple) to be converted to Cloud Alerting Policies. Example: --policies-from-prometheus-alert-rules-yaml=rules_1.yaml,rules_2.yaml",
              args: {
                name: "PROMETHEUS_ALERT_RULE_FILE_PATHS",
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
        },
        {
          name: "update",
          description: "Updates an alerting policy",
          options: [
            flag42,
            flag46,
            {
              name: "--add-notification-channels",
              description:
                "Append the given values to the current Notification Channels",
              args: {
                name: "NOTIFICATION-CHANNELS",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clear-notification-channels",
              description: "Empty the current Notification Channels",
            },
            flag1950,
            flag2144,
            flag2292,
            flag3788,
            flag3884,
            {
              name: "--documentation-format",
              description:
                'The MIME type that should be used with `--documentation` or `--documentation-from-file`. Currently, only "text/markdown" is supported',
              args: {
                name: "DOCUMENTATION_FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            flag3883,
            {
              name: "--enabled",
              description:
                "If the policy is enabled. Use *--enabled* to enable and *--no-enabled* to disable",
            },
            {
              name: "--fields",
              description:
                "The list of fields to update. Must specify `--policy` or `--policy-from-file` if using this flag. _field_ must be one of: *disabled*, *notificationChannels*",
              args: { name: "field", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11377,
            flag11344,
            flag11637,
            flag11946,
            {
              name: "--remove-notification-channels",
              description:
                "Remove the given values from the current Notification Channels",
              args: {
                name: "NOTIFICATION-CHANNELS",
                description: "List",
                suggestions: [],
              },
            },
            flag12751,
            {
              name: "--set-notification-channels",
              description:
                "Completely replace the current Notification Channels with the given values",
              args: {
                name: "NOTIFICATION-CHANNELS",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15229,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ALERT_POLICY",
            description:
              "ID of the Alert Policy or fully qualified identifier for the Alert Policy.\n+\nTo set the `policy` attribute:\n* provide the argument `alert_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "snoozes",
      description: "Manage Cloud Monitoring snoozes",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a snooze",
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
            name: "SNOOZE",
            description:
              "ID of the Snooze or fully qualified identifier for the Snooze.\n+\nTo set the `snooze` attribute:\n* provide the argument `snooze` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new snooze",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--criteria-filter",
              description:
                'Optional. When you define a Snooze, you can also define a filter for that snooze. The filter is a string containing one or more key-value pairs. The string uses the standard https://google.aip.dev/160 filter syntax. If you define a filter for a snooze, then the snooze can only apply to one alert policy. When the snooze is active, incidents won\'t be created when the incident would have key-value pairs (labels) that match those specified by the filter in the snooze. Snooze filters support resource, metric, and metadata labels. If multiple labels are used, then they must be connected with an AND operator. For example: resource.labels.instance_id="1234567890" AND resource.labels.zone="us-central1-a" AND metric.labels.instance_name="test_group" AND metadata.user_labels.foo="bar" AND metadata.system_labels.region="us-central1"',
              args: {
                name: "CRITERIA_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--criteria-policies",
              description:
                "The policies that the Snooze applies to. Exactly 1 alert policy is required if `criteria-filter` is specified at the same time",
              args: {
                name: "CRITERIA_POLICIES",
                description: "List",
                suggestions: [],
              },
            },
            flag3795,
            flag4391,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag13934,
            flag14374,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "describe",
          description: "Describe a snooze",
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
            name: "SNOOZE",
            description:
              "ID of the Snooze or fully qualified identifier for the Snooze.\n+\nTo set the `snooze` attribute:\n* provide the argument `snooze` on the command line",
          },
        },
        {
          name: "list",
          description: "List snoozes",
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
        {
          name: "update",
          description: "Updates a snooze",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3795,
            flag4391,
            {
              name: "--fields",
              description:
                "The list of fields to update. Must specify `--snooze-from-file` if using this flag",
              args: { name: "field", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag13934,
            flag14374,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SNOOZE",
            description:
              "ID of the Snooze or fully qualified identifier for the Snooze.\n+\nTo set the `snooze` attribute:\n* provide the argument `snooze` on the command line",
          },
        },
      ],
    },
    {
      name: "uptime",
      description:
        "Manage Cloud Monitoring uptime checks and synthetic monitors",
      subcommands: [
        {
          name: "create",
          description: "Create a new uptime check or synthetic monitor",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1234,
            flag2292,
            flag2435,
            flag2617,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--group-id",
              description: "The group of resources being monitored",
              args: {
                name: "GROUP_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--group-type",
              description:
                "The resource type of the group members, defaults to `gce-instance`. _GROUP_TYPE_ must be one of:\n+\n*aws-elb-load-balancer*::: Uptime check against a group of Amazon ELB load balancers.\n*gce-instance*::: Uptime check against a group of instances from Google Cloud or Amazon Web Services.\n:::\n+",
              args: {
                name: "GROUP_TYPE",
                description: "String",
                suggestions: ["aws-elb-load-balancer", "gce-instance"],
              },
            },
            {
              name: "--headers",
              description:
                "The list of headers to send as part of the uptime check\n              request. Can only be set if `--protocol` is `http` or `https`",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag5453,
            flag5699,
            flag6146,
            flag6145,
            flag7356,
            flag7558,
            flag7594,
            flag7595,
            flag11172,
            flag11184,
            flag11265,
            flag11300,
            flag11417,
            flag11637,
            {
              name: "--protocol",
              description:
                "The protocol of the request, defaults to `http`. _PROTOCOL_ must be one of:\n+\n*http*::: An HTTP check.\n*https*::: An HTTPS check.\n*tcp*::: A TCP check.\n:::\n+",
              args: {
                name: "PROTOCOL",
                description: "String",
                suggestions: ["http", "https", "tcp"],
              },
            },
            flag11946,
            {
              name: "--regions",
              description:
                "The list of regions from which the check is run. At least 3 regions must be selected.\n            Defaults to all available regions.\n+\n_field_ must be one of:\n+\n*asia-pacific*::: asia-southeast1\n*europe*::: europe-west1\n*south-america*::: southamerica-east1\n*usa-iowa*::: us-central1\n*usa-oregon*::: us-west1\n*usa-virginia*::: us-east4\n:::\n+",
              args: { name: "field", description: "List", suggestions: [] },
            },
            flag12854,
            {
              name: "--resource-labels",
              description:
                "Values for all of the labels listed in the associated monitored resource descriptor.\n            See https://cloud.google.com/monitoring/api/resources for more information and allowed\n            keys",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--resource-type",
              description:
                "Type of monitored resource, defaults to `uptime-url`. _RESOURCE_TYPE_ must be one of:\n+\n*aws-ec2-instance*::: Uptime check against an AWS EC2 instance.\n*aws-elb-load-balancer*::: Uptime check against an ElasticLoadBalancer.\n*cloud-run-revision*::: Uptime check against a Cloud Run revision.\n*gae-app*::: Uptime check against an App Engine module.\n*gce-instance*::: Uptime check against a Compute Engine instance.\n*servicedirectory-service*::: Uptime check against a Service Directory service.\n*uptime-url*::: Uptime check against a URL.\n:::\n+",
              args: {
                name: "RESOURCE_TYPE",
                description: "String",
                suggestions: [
                  "aws-ec2-instance",
                  "aws-elb-load-balancer",
                  "cloud-run-revision",
                  "gae-app",
                  "gce-instance",
                  "servicedirectory-service",
                  "uptime-url",
                ],
              },
            },
            flag13553,
            {
              name: "--status-classes",
              description:
                "List of HTTP status classes. The uptime check only passes when the response\n              code is contained in this list. Defaults to `2xx`.\n              Can only be set if `--protocol` is `http` or `https`.\n+\n_status-class_ must be one of:\n+\n*1xx*::: Any response code from 100-199 inclusive\n*2xx*::: Any response code from 200-299 inclusive\n*3xx*::: Any response code from 300-399 inclusive\n*4xx*::: Any response code from 400-499 inclusive\n*5xx*::: Any response code from 500-599 inclusive\n*any*::: Any response code\n:::\n+",
              args: {
                name: "status-class",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--status-codes",
              description:
                "List of HTTP Status Codes. The uptime check will only pass if the response code\n              is present in this list.\n              Can only be set if `--protocol` is `http` or `https`",
              args: {
                name: "status-code",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--synthetic-target",
              description:
                "The target of the Synthetic Monitor.\n        This is the fully qualified GCFv2 resource name",
              args: {
                name: "SYNTHETIC_TARGET",
                description: "String",
                suggestions: [],
              },
            },
            flag14917,
            flag14975,
            {
              name: "--user-labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15344,
            flag15397,
            flag15424,
          ],
          args: {
            name: "DISPLAY_NAME",
            description:
              "Display name for the uptime check or synthetic monitor",
          },
        },
        {
          name: "delete",
          description: "Delete an uptime check or synthetic monitor",
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
            name: "CHECK_ID",
            description:
              "ID of the uptime check or synthetic monitor or fully qualified identifier for the uptime check or synthetic monitor.\n+\nTo set the `check_id` attribute:\n* provide the argument `check_id` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an uptime check or synthetic monitor",
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
            name: "CHECK_ID",
            description:
              "ID of the uptime check or synthetic monitor or fully qualified identifier for the uptime check or synthetic monitor.\n+\nTo set the `check_id` attribute:\n* provide the argument `check_id` on the command line",
          },
        },
        {
          name: "list-configs",
          description: "List uptime checks and synthetic monitors",
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
        {
          name: "list-ips",
          description: "List uptime check server ips",
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
        {
          name: "update",
          description: "Update an existing uptime check or synthetic monitor",
          options: [
            flag42,
            flag46,
            {
              name: "--add-regions",
              description:
                "The list of regions to add to the uptime check. _region_ must be one of:\n+\n*asia-pacific*::: asia-southeast1\n*europe*::: europe-west1\n*south-america*::: southamerica-east1\n*usa-iowa*::: us-central1\n*usa-oregon*::: us-west1\n*usa-virginia*::: us-east4\n:::\n+",
              args: { name: "region", description: "List", suggestions: [] },
            },
            {
              name: "--add-status-classes",
              description:
                "The list of HTTP status classes to add to the uptime check. _status-class_ must be one of:\n+\n*1xx*::: Any response code from 100-199 inclusive\n*2xx*::: Any response code from 200-299 inclusive\n*3xx*::: Any response code from 300-399 inclusive\n*4xx*::: Any response code from 400-499 inclusive\n*5xx*::: Any response code from 500-599 inclusive\n*any*::: Any response code\n:::\n+",
              args: {
                name: "status-class",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-status-codes",
              description:
                "The list of HTTP status codes to add to the uptime check",
              args: {
                name: "status-code",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag1234,
            {
              name: "--clear-headers",
              description: "Clear all headers on the uptime check",
              args: {
                name: "CLEAR_HEADERS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--clear-regions",
              description:
                "Clear all regions on the uptime check. This setting acts the same as if all available\n            regions were selected",
              args: {
                name: "CLEAR_REGIONS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--clear-status-classes",
              description:
                "Clear all HTTP status classes on the uptime check. Setting this\n            flag is the same as selecting only the `2xx` status class",
              args: {
                name: "CLEAR_STATUS_CLASSES",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--clear-status-codes",
              description:
                "Clear all HTTP status codes on the uptime check. Setting this\n            flag is the same as selecting only the `2xx` status class",
              args: {
                name: "CLEAR_STATUS_CODES",
                description: "String",
                suggestions: [],
              },
            },
            flag1950,
            flag2292,
            flag2435,
            flag2617,
            {
              name: "--display-name",
              description:
                "The display name for the uptime check or synthetic monitor",
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
            flag6146,
            flag6145,
            flag7356,
            flag7558,
            flag7594,
            flag7595,
            flag11172,
            flag11184,
            flag11265,
            flag11300,
            flag11417,
            flag11637,
            flag11946,
            {
              name: "--remove-headers",
              description:
                "The list of header keys to remove from the uptime check",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            {
              name: "--remove-regions",
              description:
                "The list of regions to remove from the uptime check. _region_ must be one of:\n+\n*asia-pacific*::: asia-southeast1\n*europe*::: europe-west1\n*south-america*::: southamerica-east1\n*usa-iowa*::: us-central1\n*usa-oregon*::: us-west1\n*usa-virginia*::: us-east4\n:::\n+",
              args: { name: "region", description: "List", suggestions: [] },
            },
            {
              name: "--remove-status-classes",
              description:
                "The list of HTTP status classes to remove from the uptime check. _status-class_ must be one of:\n+\n*1xx*::: Any response code from 100-199 inclusive\n*2xx*::: Any response code from 200-299 inclusive\n*3xx*::: Any response code from 300-399 inclusive\n*4xx*::: Any response code from 400-499 inclusive\n*5xx*::: Any response code from 500-599 inclusive\n*any*::: Any response code\n:::\n+",
              args: {
                name: "status-class",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-status-codes",
              description:
                "The list of HTTP status codes to remove from the uptime check",
              args: {
                name: "status-code",
                description: "List",
                suggestions: [],
              },
            },
            flag12751,
            flag12854,
            flag13553,
            {
              name: "--set-regions",
              description:
                "The list of regions from which the check is run. At least 3 regions must be\n            selected.\n+\n_region_ must be one of:\n+\n*asia-pacific*::: asia-southeast1\n*europe*::: europe-west1\n*south-america*::: southamerica-east1\n*usa-iowa*::: us-central1\n*usa-oregon*::: us-west1\n*usa-virginia*::: us-east4\n:::\n+",
              args: { name: "region", description: "List", suggestions: [] },
            },
            {
              name: "--set-status-classes",
              description:
                "List of HTTP status classes. The uptime check will only pass if the response\n                code is contained in this list.\n+\n_status-class_ must be one of:\n+\n*1xx*::: Any response code from 100-199 inclusive\n*2xx*::: Any response code from 200-299 inclusive\n*3xx*::: Any response code from 300-399 inclusive\n*4xx*::: Any response code from 400-499 inclusive\n*5xx*::: Any response code from 500-599 inclusive\n*any*::: Any response code\n:::\n+",
              args: {
                name: "status-class",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--set-status-codes",
              description:
                "List of HTTP status codes. The uptime check will only pass if the response\n                code is present in this list",
              args: {
                name: "status-code",
                description: "List",
                suggestions: [],
              },
            },
            flag14917,
            flag14975,
            {
              name: "--update-headers",
              description:
                'The list of headers to add to the uptime check. Any existing\n              headers with matching "key" are overridden by the provided\n              values',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15229,
            flag15315,
            flag15344,
            flag15397,
            flag15424,
          ],
          args: {
            name: "CHECK_ID",
            description:
              "ID of the uptime check or synthetic monitor or fully qualified identifier for the uptime check or synthetic monitor.\n+\nTo set the `check_id` attribute:\n* provide the argument `check_id` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
