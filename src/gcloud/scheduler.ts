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
const flag731: Fig.Option = {
  name: "--attempt-deadline",
  description:
    "The deadline for job attempts. If the request handler doesn't respond by this dealine,\nthe request is cancelled and the attempt is marked as failed. For example, 20s",
  args: {
    name: "ATTEMPT_DEADLINE",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1680: Fig.Option = {
  name: "--clear-headers",
  description: "Clear the list of HTTP headers",
};
const flag1758: Fig.Option = {
  name: "--clear-max-backoff",
  description: "Clear the field corresponding to `--max-backoff`",
};
const flag1761: Fig.Option = {
  name: "--clear-max-doublings",
  description: "Clear the field corresponding to `--max-doublings`",
};
const flag1764: Fig.Option = {
  name: "--clear-max-retry-attempts",
  description: "Clear the field corresponding to `--max-retry-attempts`",
};
const flag1766: Fig.Option = {
  name: "--clear-max-retry-duration",
  description: "Clear the field corresponding to `--max-retry-duration`",
};
const flag1771: Fig.Option = {
  name: "--clear-message-body",
  description:
    "Clear the field corresponding to `--message-body` or `--message-body-from-file`",
};
const flag1776: Fig.Option = {
  name: "--clear-min-backoff",
  description: "Clear the field corresponding to `--min-backoff`",
};
const flag1944: Fig.Option = {
  name: "--clear-time-zone",
  description: "Clear the field corresponding to `--time-zone`",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3251: Fig.Option = {
  name: "--description",
  description: "Human-readable description of the job",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
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
const flag5432: Fig.Option = {
  name: "--headers",
  description:
    "KEY=VALUE pairs of HTTP headers to include in the request.\n*Cannot be repeated*. For example:\n`--headers Accept-Language=en-us,Accept=text/plain`",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
    suggestions: [],
  },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5531: Fig.Option = {
  name: "--http-method",
  description:
    "HTTP method to use for the request. _HTTP_METHOD_ must be one of: *delete*, *get*, *head*, *post*, *put*",
  args: {
    name: "HTTP_METHOD",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["delete", "get", "head", "post", "put"],
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
const flag7052: Fig.Option = {
  name: "--location",
  description:
    "The location of the job. By default, uses the location of the current project's App Engine app\nif there is an associated app.\n+\n\nTo set the `location` attribute:\n* provide the argument `job` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* defaults to App Engine's app location if not provided & an app exists",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7610: Fig.Option = {
  name: "--max-backoff",
  description:
    "Maximum amount of time to wait before retrying a job after it\nfails. For example, `60s`. Default is `3600s` (1 hour)",
  args: {
    name: "MAX_BACKOFF",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag7630: Fig.Option = {
  name: "--max-doublings",
  description:
    "Maximum number of times that the interval between failed job\nretries will be doubled before the increase becomes constant",
  args: { name: "MAX_DOUBLINGS", description: "Int", suggestions: [] },
};
const flag7678: Fig.Option = {
  name: "--max-retry-attempts",
  description:
    "Number of times to retry the request if it fails or times out. Must\nbe in range 0-5 inclusive. Default is 0",
  args: { name: "MAX_RETRY_ATTEMPTS", description: "Int", suggestions: [] },
};
const flag7684: Fig.Option = {
  name: "--max-retry-duration",
  description:
    "Time limit for retrying a failed job, measured from when the job was\nfirst run. If specified with `--max-retry-attempts` greater than 0, the\njob will be retried until both limits are reached. Default is 0 seconds\n(which means unlimited); however, if `--max-retry-attempts` is also 0, a\njob attempt won't be retried if it fails",
  args: {
    name: "MAX_RETRY_DURATION",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag7777: Fig.Option = {
  name: "--message-body-from-file",
  description:
    "Path to a file containing the body of the message. Use a full or relative path to a local file containing the value of message_body",
  args: {
    name: "MESSAGE_BODY_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag7778: Fig.Option = {
  name: "--message-body-from-file",
  description:
    "Path to file containing the data payload to be included as the\nbody of the HTTP request. May only be given with compatible HTTP\nmethods (PUT or POST). Use a full or relative path to a local file containing the value of message_body",
  args: {
    name: "MESSAGE_BODY_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag7779: Fig.Option = {
  name: "--message-body",
  description: "Body of the message",
  args: { name: "MESSAGE_BODY", description: "String", suggestions: [] },
};
const flag7780: Fig.Option = {
  name: "--message-body",
  description:
    "Data payload to be included as the body of the HTTP\nrequest. May only be given with compatible HTTP methods (PUT\nor POST)",
  args: {
    name: "MESSAGE_BODY",
    description: "Googlecloudsdk.core.util.http_encoding:Encode",
    suggestions: [],
  },
};
const flag7875: Fig.Option = {
  name: "--min-backoff",
  description:
    "Minimum amount of time to wait before retrying a job after it\nfails. For example, `10s`. Default is `5s`",
  args: {
    name: "MIN_BACKOFF",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag10621: Fig.Option = {
  name: "--oauth-service-account-email",
  description:
    "The service account email to be used for generating an OAuth2\naccess token to be included in the request sent to the target\nwhen executing the job. The service account must be within the\nsame project as the job. The caller must have\niam.serviceAccounts.actAs permission for the service account. The\ntoken must be OAuth if the target is a Google APIs service\nwith URL `*.googleapis.com`",
  args: {
    name: "OAUTH_SERVICE_ACCOUNT_EMAIL",
    description: "String",
    suggestions: [],
  },
};
const flag10623: Fig.Option = {
  name: "--oauth-token-scope",
  description:
    'The scope to be used when generating an OAuth2 access token to\nbe included in the request sent to the target when executing the\njob. If not specified,\n"https://www.googleapis.com/auth/cloud-platform" will be used',
  args: { name: "OAUTH_TOKEN_SCOPE", description: "String", suggestions: [] },
};
const flag10677: Fig.Option = {
  name: "--oidc-service-account-email",
  description:
    "The service account email to be used for generating an OpenId\nConnect token to be included in the request sent to the target\nwhen executing the job. The service account must be within the\nsame project as the job. The caller must have\niam.serviceAccounts.actAs permission for the service account. The\nOIDC token is generally used *except* for Google APIs hosted on\n`*.googleapis.com`: these APIs expect an OAuth token",
  args: {
    name: "OIDC_SERVICE_ACCOUNT_EMAIL",
    description: "String",
    suggestions: [],
  },
};
const flag10679: Fig.Option = {
  name: "--oidc-token-audience",
  description:
    "The audience to be used when generating an OpenId Connect token\nto be included in the request sent to the target when executing\nthe job. If not specified, the URI specified in target will be\nused",
  args: { name: "OIDC_TOKEN_AUDIENCE", description: "String", suggestions: [] },
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
const flag12483: Fig.Option = {
  name: "--relative-url",
  description: 'Relative URL to use for the request (beginning with "/")',
  args: {
    name: "RELATIVE_URL",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag12624: Fig.Option = {
  name: "--remove-headers",
  description:
    "KEY1,KEY2 list of HTTP headers to remove from the request.\n`--remove-headers Accept-Language,Accept`",
  args: { name: "REMOVE_HEADERS", description: "List", suggestions: [] },
};
const flag13313: Fig.Option = {
  name: "--schedule",
  description:
    "Schedule on which the job will be executed.\n+\nAs a general rule, execution `n + 1` of a job will not begin until\nexecution `n` has finished. Cloud Scheduler will never allow two\nsimultaneously outstanding executions. For example, this implies that if\nthe `n+1` execution is scheduled to run at `16:00` but the `n`\nexecution takes until `16:15`, the `n+1` execution will not start\nuntil `16:15`. A scheduled start time will be delayed if the previous\nexecution has not ended when its scheduled time occurs. Learn more about the\n[cron job format](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules).\n+\nIf `--retry-count` > 0 and a job attempt fails, the job will be tried a\ntotal of `--retry-count` times, with exponential backoff, until the job\nsucceeds or the number of retries is exhausted. Note that the next\nscheduled execution time might be skipped if the retries continue\nthrough that time. For more information, see\n[Retry jobs](https://cloud.google.com/scheduler/docs/configuring/retry-jobs)",
  args: { name: "SCHEDULE", description: "String", suggestions: [] },
};
const flag13314: Fig.Option = {
  name: "--schedule",
  description:
    "Schedule on which the job will be executed.\n+\nAs a general rule, execution `n + 1` of a job will not begin until\nexecution `n` has finished. Cloud Scheduler will never allow two\nsimultaneously outstanding executions. For example, this implies that if\nthe `n+1` execution is scheduled to run at `16:00` but the `n`\nexecution takes until `16:15`, the `n+1` execution will not start\nuntil `16:15`. A scheduled start time will be delayed if the previous\nexecution has not ended when its scheduled time occurs. Learn more about the\n[cron job format](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules).\n+\nIf `--retry-count` > 0 and a job attempt fails, the job will be tried a\ntotal of `--retry-count` times, with exponential backoff, until the job\nsucceeds or the number of retries is exhausted. Note that the next\nscheduled execution time might be skipped if the retries continue\nthrough that time. For more information, see\n[Retry jobs](https://cloud.google.com/scheduler/docs/configuring/retry-jobs)",
  args: { name: "SCHEDULE", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14883: Fig.Option = {
  name: "--time-zone",
  description:
    'Specifies the time zone to be used in interpreting --schedule. The value\nof this field must be a time zone name from the tz database\n(https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).\n+\nNote that some time zones include a provision for\ndaylight savings time. The rules for daylight saving time are\ndetermined by the chosen time zone.\n+\nFor UTC use the string "utc". Default is "utc"',
  args: { name: "TIME_ZONE", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15155: Fig.Option = {
  name: "--update-headers",
  description:
    "KEY=VALUE pairs of HTTP headers to include in the request.\n*Cannot be repeated*. For example:\n`--update-headers Accept-Language=en-us,Accept=text/plain`",
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
  name: "scheduler",
  description: "Manage Cloud Scheduler jobs and schedules",
  subcommands: [
    {
      name: "cmek-config",
      description: "Manage CMEK configuration for Cloud Scheduler",
      subcommands: [
        {
          name: "describe",
          description:
            "Get CMEK configuration for Cloud Scheduler in the specified location",
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
              description: "Google Cloud location for the KMS key",
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
        },
        {
          name: "update",
          description:
            "Update CMEK configuration for Cloud Scheduler in the specified location",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-kms-key",
              description:
                "Disables CMEK for Cloud Scheduler in the specified location by clearing the Cloud KMS cryptokey from the Cloud Scheduler project and CMEK configuration",
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kms-key-name",
              description:
                "Fully qualified identifier for the key or just the key ID. The latter requires that the --kms-keyring and --kms-project flags be provided too",
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-keyring",
              description: "KMS keyring of the KMS key",
              args: {
                name: "KMS_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-project",
              description: "Google Cloud project for the KMS key",
              args: {
                name: "KMS_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description: "Google Cloud location for the KMS key",
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
        },
      ],
    },
    {
      name: "jobs",
      description: "Manage Cloud Scheduler jobs",
      subcommands: [
        {
          name: "create",
          description:
            "Create Cloud Scheduler jobs for various types of targets",
          subcommands: [
            {
              name: "app-engine",
              description:
                "Create a Cloud Scheduler job with an App Engine target",
              options: [
                flag42,
                flag46,
                flag731,
                flag1201,
                flag2292,
                flag3251,
                flag4900,
                flag4902,
                flag5091,
                flag5432,
                flag5453,
                flag5531,
                flag5699,
                flag7052,
                flag7356,
                flag7610,
                flag7630,
                flag7678,
                flag7684,
                flag7780,
                flag7778,
                flag7875,
                flag11637,
                flag11946,
                flag12483,
                flag13314,
                {
                  name: "--service",
                  description:
                    "ID of the App Engine service to send the request to",
                  args: {
                    name: "SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14883,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "http",
              description:
                "Create a Cloud Scheduler job that triggers an action via HTTP",
              options: [
                flag42,
                flag46,
                flag731,
                flag1201,
                flag2292,
                flag3251,
                flag4900,
                flag4902,
                flag5091,
                flag5432,
                flag5453,
                flag5531,
                flag5699,
                flag7052,
                flag7356,
                flag7610,
                flag7630,
                flag7678,
                flag7684,
                flag7780,
                flag7778,
                flag7875,
                flag10621,
                flag10623,
                flag10677,
                flag10679,
                flag11637,
                flag11946,
                flag13314,
                flag14883,
                flag14975,
                {
                  name: "--uri",
                  description:
                    'The full URI path that the request will be sent to. This string must\nbegin with either "http://" or "https://". For example,\n`http://acme.com` or `https://acme.com/sales:8080`. Cloud Scheduler will\nencode some characters for safety and compatibility. The maximum allowed\nURL length is 2083 characters after encoding',
                  args: {
                    name: "URI",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "pubsub",
              description: "Create a Cloud Scheduler job with a Pub/Sub target",
              options: [
                flag42,
                flag46,
                {
                  name: "--attributes",
                  description:
                    'Comma-separated list of attributes. Each attribute has the form\n"NAME=VALUE". You can specify up to 100 attributes',
                  args: {
                    name: "ATTRIBUTES",
                    description:
                      "Googlecloudsdk.command_lib.scheduler.util:ParseAttributes",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag3251,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7052,
                flag7356,
                flag7610,
                flag7630,
                flag7678,
                flag7684,
                flag7779,
                flag7777,
                flag7875,
                flag11637,
                flag11946,
                flag13314,
                flag14883,
                {
                  name: "--topic",
                  description:
                    "Name of the Google Cloud Pub/Sub topic to publish to when the job runs",
                  args: {
                    name: "TOPIC",
                    description:
                      "Googlecloudsdk.command_lib.util.hooks.types:Parse",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a job",
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
            flag7052,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a job",
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
            flag7052,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
          },
        },
        {
          name: "list",
          description: "List jobs",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* defaults to App Engine's app location if not provided & an app exists",
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
          name: "pause",
          description: "Pause the execution of a job",
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
            flag7052,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
          },
        },
        {
          name: "resume",
          description: "Resume execution of a paused job",
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
            flag7052,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
          },
        },
        {
          name: "run",
          description: "Trigger an on-demand execution of a job",
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
            flag7052,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
          },
        },
        {
          name: "update",
          description:
            "Update Cloud Scheduler jobs for various types of targets",
          subcommands: [
            {
              name: "app-engine",
              description:
                "Update a Cloud Scheduler job with an App Engine target",
              options: [
                flag42,
                flag46,
                flag731,
                flag1201,
                flag1680,
                flag1758,
                flag1761,
                flag1764,
                flag1766,
                flag1771,
                flag1776,
                {
                  name: "--clear-relative-url",
                  description:
                    "Clear the field corresponding to `--relative-url`",
                },
                {
                  name: "--clear-service",
                  description: "Clear the field corresponding to `--service`",
                },
                flag1944,
                flag2292,
                flag3251,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5531,
                flag5699,
                flag7052,
                flag7356,
                flag7610,
                flag7630,
                flag7678,
                flag7684,
                flag7780,
                flag7778,
                flag7875,
                flag11637,
                flag11946,
                flag12483,
                flag12624,
                flag13313,
                {
                  name: "--service",
                  description:
                    "ID of the App Engine service to send the request to",
                  args: {
                    name: "SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14883,
                flag14975,
                flag15155,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "http",
              description:
                "Update a Cloud Scheduler job that triggers an action via HTTP",
              options: [
                flag42,
                flag46,
                flag731,
                flag1201,
                {
                  name: "--clear-auth-token",
                  description:
                    "Clear the auth token fields: `--oidc-service-account-email`,\n`--oidc-token-audience`, `--oauth-service-account-email`,\nand `--oauth-token-scope`",
                },
                flag1680,
                flag1758,
                flag1761,
                flag1764,
                flag1766,
                flag1771,
                flag1776,
                flag1944,
                flag2292,
                flag3251,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5531,
                flag5699,
                flag7052,
                flag7356,
                flag7610,
                flag7630,
                flag7678,
                flag7684,
                flag7780,
                flag7778,
                flag7875,
                flag10621,
                flag10623,
                flag10677,
                flag10679,
                flag11637,
                flag11946,
                flag12624,
                flag13313,
                flag14883,
                flag14975,
                flag15155,
                {
                  name: "--uri",
                  description:
                    'The full URI path that the request will be sent to. This string must\nbegin with either "http://" or "https://". For example,\n`http://acme.com` or `https://acme.com/sales:8080`. Cloud Scheduler will\nencode some characters for safety and compatibility. The maximum allowed\nURL length is 2083 characters after encoding',
                  args: {
                    name: "URI",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
            {
              name: "pubsub",
              description: "Update a Cloud Scheduler job with a Pub/Sub target",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--clear-attributes",
                  description:
                    "Clear the field corresponding to `--attributes`",
                },
                flag1758,
                flag1761,
                flag1764,
                flag1766,
                flag1776,
                flag1944,
                flag2292,
                flag3251,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7052,
                flag7356,
                flag7610,
                flag7630,
                flag7678,
                flag7684,
                flag7779,
                flag7777,
                flag7875,
                flag11637,
                flag11946,
                {
                  name: "--remove-attributes",
                  description:
                    'Comma-separated list of attribute keys to remove with the form\n"KEY1,KEY2"',
                  args: {
                    name: "REMOVE_ATTRIBUTES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag13313,
                flag14883,
                {
                  name: "--topic",
                  description:
                    "Name of the Google Cloud Pub/Sub topic to publish to when the job runs",
                  args: {
                    name: "TOPIC",
                    description:
                      "Googlecloudsdk.command_lib.util.hooks.types:Parse",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--update-attributes",
                  description:
                    'Comma-separated list of attributes. Each attribute has the form\n"NAME=VALUE". You can specify up to 100 attributes',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description:
                  "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "locations",
      description: "Get information about Cloud Scheduler locations",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a location",
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
            description: "The Cloud location to describe",
          },
        },
        {
          name: "list",
          description: "Lists the locations where Cloud Scheduler is available",
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
      description: "Get information about Cloud Scheduler operations",
      subcommands: [
        {
          name: "describe",
          description: "Show the latest status of an operation",
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
              name: "--name",
              description:
                "The full name of the Cloud Scheduler operation to describe. Format: projects/{project}/locations/{location}/operations/{operation}",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
