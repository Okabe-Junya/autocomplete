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
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1232: Fig.Option = {
  name: "--body-content",
  description: "HTTP Body data sent to the task worker processing the task",
  args: { name: "BODY_CONTENT", description: "String", suggestions: [] },
};
const flag1233: Fig.Option = {
  name: "--body-file",
  description:
    "File containing HTTP body data sent to the task worker processing\nthe task",
  args: { name: "BODY_FILE", description: "String", suggestions: [] },
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
const flag5431: Fig.Option = {
  name: "--header",
  description:
    "An HTTP request header. Header values can contain commas. This flag\ncan be repeated. Repeated header fields will have their values\noverridden",
  args: {
    name: "HEADER_FIELD: HEADER_VALUE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5522: Fig.Option = {
  name: "--http-header-override",
  description:
    "If provided, the specified HTTP headers override the existing\nheaders for all tasks in the queue.\nIf a task has a header with the same Key as a queue-level header\noverride, then the value of the task header will be overriden with\nthe value of the queue-level header. Otherwise, the queue-level\nheader will be added to the task headers.\nHeader values can contain commas. This flag can be repeated.\nRepeated header fields will have their values overridden",
  args: {
    name: "HEADER_FIELD: HEADER_VALUE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag5530: Fig.Option = {
  name: "--http-method-override",
  description:
    "If provided, the specified HTTP method type override is used for\nall tasks in the queue, no matter what is set at the task-level",
  args: {
    name: "HTTP_METHOD_OVERRIDE",
    description: "String",
    suggestions: [],
  },
};
const flag5534: Fig.Option = {
  name: "--http-oauth-token-scope-override",
  description:
    "The scope to be used when generating an OAuth2 access token to be\nincluded in the request sent to the target when executing the task.\nIf not specified, 'https://www.googleapis.com/auth/cloud-platform'\nwill be used",
  args: {
    name: "HTTP_OAUTH_TOKEN_SCOPE_OVERRIDE",
    description: "String",
    suggestions: [],
  },
};
const flag5537: Fig.Option = {
  name: "--http-oidc-token-audience-override",
  description:
    "The audience to be used when generating an OpenID Connect token to\nbe included in the request sent to the target when executing the\ntask. If not specified, the URI specified in the target will be\nused",
  args: {
    name: "HTTP_OIDC_TOKEN_AUDIENCE_OVERRIDE",
    description: "String",
    suggestions: [],
  },
};
const flag5542: Fig.Option = {
  name: "--http-uri-override",
  description:
    "If provided, the specified HTTP target URI override is used for all\ntasks in the queue depending on what is set as the mode.\nAllowed values for mode are: ALWAYS, IF_NOT_EXISTS. If not set, mode\ndefaults to ALWAYS.\n+\nKEY must be at least one of: [scheme, host, port, path, query, mode]. Any missing keys will use the\ndefault",
  args: { name: "KEY:VALUE", description: "Dict", suggestions: [] },
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
const flag7017: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `queue` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7081: Fig.Option = {
  name: "--location",
  description:
    "The location where we want to manage the queue or task. If not specified, uses the location of the current project's App Engine app if there is an associated app",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7365: Fig.Option = {
  name: "--log-sampling-ratio",
  description:
    "Specifies the fraction of operations to write to Cloud Logging.\nThis field may contain any value between 0.0 and 1.0, inclusive. 0.0 is\nthe default and means that no operations are logged",
  args: { name: "LOG_SAMPLING_RATIO", description: "Float", suggestions: [] },
};
const flag7609: Fig.Option = {
  name: "--max-attempts",
  description: "The maximum number of attempts per task in the queue",
  args: {
    name: "MAX_ATTEMPTS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7611: Fig.Option = {
  name: "--max-backoff",
  description:
    "The maximum amount of time to wait before retrying a task after it\nfails. Must be a string that ends in 's', such as \"5s\"",
  args: { name: "MAX_BACKOFF", description: "String", suggestions: [] },
};
const flag7616: Fig.Option = {
  name: "--max-concurrent-dispatches",
  description:
    "The maximum number of concurrent tasks that Cloud Tasks allows to\nbe dispatched for this queue. After this threshold has been reached,\nCloud Tasks stops dispatching tasks until the number of outstanding\nrequests decreases",
  args: {
    name: "MAX_CONCURRENT_DISPATCHES",
    description: "Int",
    suggestions: [],
  },
};
const flag7629: Fig.Option = {
  name: "--max-dispatches-per-second",
  description: "The maximum rate at which tasks are dispatched from this queue",
  args: {
    name: "MAX_DISPATCHES_PER_SECOND",
    description: "Float",
    suggestions: [],
  },
};
const flag7631: Fig.Option = {
  name: "--max-doublings",
  description:
    "The time between retries will double maxDoublings times.\n+\nA tasks retry interval starts at minBackoff, then doubles maxDoublings\ntimes, then increases linearly, and finally retries retries at\nintervals of maxBackoff up to maxAttempts times.\n+\nFor example, if minBackoff is 10s, maxBackoff is 300s, and\nmaxDoublings is 3, then the a task will first be retried in 10s. The\nretry interval will double three times, and then increase linearly by\n2^3 * 10s. Finally, the task will retry at intervals of maxBackoff\nuntil the task has been attempted maxAttempts times. Thus, the\nrequests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s",
  args: { name: "MAX_DOUBLINGS", description: "Int", suggestions: [] },
};
const flag7683: Fig.Option = {
  name: "--max-retry-duration",
  description:
    "The time limit for retrying a failed task, measured from when the task\nwas first run. Once the `--max-retry-duration` time has passed and the\ntask has been attempted --max-attempts times, no further attempts will\nbe made and the task will be deleted.\n+\nMust be a string that ends in 's', such as \"5s\"",
  args: { name: "MAX_RETRY_DURATION", description: "String", suggestions: [] },
};
const flag7847: Fig.Option = {
  name: "--method",
  description:
    'The HTTP method to use for the request. If not specified, "POST" will\nbe used',
  args: { name: "METHOD", description: "String", suggestions: [] },
};
const flag7876: Fig.Option = {
  name: "--min-backoff",
  description:
    "The minimum amount of time to wait before retrying a task after it\nfails. Must be a string that ends in 's', such as \"5s\"",
  args: { name: "MIN_BACKOFF", description: "String", suggestions: [] },
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
const flag11938: Fig.Option = {
  name: "--queue",
  description: "The queue the task belongs to",
  args: { name: "QUEUE", description: "String", suggestions: [] },
};
const flag11939: Fig.Option = {
  name: "--queue",
  description: "The queue the task belongs to",
  args: { name: "QUEUE", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag13194: Fig.Option = {
  name: "--routing-override",
  description:
    "If provided, the specified App Engine route is used for all tasks\nin the queue, no matter what is set is at the task-level.\n+\nKEY must be at least one of: [service, version, instance]. Any missing keys will use the\ndefault",
  args: { name: "KEY:VALUE", description: "Dict", suggestions: [] },
};
const flag13307: Fig.Option = {
  name: "--schedule-time",
  description:
    'The time when the task is scheduled to be first attempted. Defaults to\n"now" if not specified',
  args: { name: "SCHEDULE_TIME", description: "String", suggestions: [] },
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
  name: "tasks",
  description: "Manage Cloud Tasks queues and tasks",
  subcommands: [
    {
      name: "buffer",
      description: "Buffers a task into a queue",
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
          description: "The location where the queue exists",
          args: { name: "LOCATION", description: "String", suggestions: [] },
        },
        flag7356,
        flag11637,
        flag11939,
        flag11946,
        {
          name: "--task-id",
          description: "The task ID for the task being created",
          args: { name: "TASK_ID", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "cmek-config",
      description: "Get or change CMEK configuration for Cloud Tasks",
      subcommands: [
        {
          name: "describe",
          description:
            "Get CMEK configuration for Cloud Tasks in the specified location",
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
            "Enable, disable, or edit CMEK configuration for Cloud Tasks in the specified location",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-kms-key",
              description:
                "Disables CMEK for Cloud Tasks in the specified location by clearing the Cloud KMS cryptokey from the Cloud Tasks project and CMEK configuration",
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
      name: "create-app-engine-task",
      description: "Create and add a task that targets App Engine",
      options: [
        flag42,
        flag46,
        flag1201,
        flag1232,
        flag1233,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5431,
        flag5453,
        flag5699,
        flag7081,
        flag7356,
        flag7847,
        flag11637,
        flag11939,
        flag11946,
        {
          name: "--relative-uri",
          description:
            'The relative URI of the request. Must begin with "/" and must be a\nvalid HTTP relative URI. It can contain a path and query string\narguments. If not specified, then the root path "/" will be used',
          args: {
            name: "RELATIVE_URI",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--routing",
          description:
            "The route to be used for this task. KEY must be at least one of:\n[service, version, instance]. Any missing keys will use the default.\n+\nRouting can be overridden by the queue-level `--routing-override`\nflag",
          args: { name: "KEY:VALUE", description: "Dict", suggestions: [] },
        },
        flag13307,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "TASK_ID",
        description:
          "The task to create.\n+\nIf not specified then the system will generate a random unique task\nID. Explicitly specifying a task ID enables task de-duplication. If a\ntask's ID is identical to that of an existing task or a task that was\ndeleted or completed recently then the call will fail.\n+\nBecause there is an extra lookup cost to identify duplicate task\nnames, tasks created with IDs have significantly increased latency.\nUsing hashed strings for the task ID or for the prefix of the task ID\nis recommended",
        isOptional: true,
      },
    },
    {
      name: "create-http-task",
      description: "Create and add a task that targets a HTTP endpoint",
      options: [
        flag42,
        flag46,
        flag1201,
        flag1232,
        flag1233,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5431,
        flag5453,
        flag5699,
        flag7081,
        flag7356,
        flag7847,
        {
          name: "--oauth-service-account-email",
          description:
            "The service account email to be used for generating an OAuth2 access\ntoken to be included in the request sent to the target when\nexecuting the task. The service account must be within the same\nproject as the queue. The caller must have\n'iam.serviceAccounts.actAs' permission for the service account",
          args: {
            name: "OAUTH_SERVICE_ACCOUNT_EMAIL",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--oauth-token-scope",
          description:
            "The scope to be used when generating an OAuth2 access token to be\nincluded in the request sent to the target when executing the task.\nIf not specified, 'https://www.googleapis.com/auth/cloud-platform'\nwill be used",
          args: {
            name: "OAUTH_TOKEN_SCOPE",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--oidc-service-account-email",
          description:
            "The service account email to be used for generating an OpenID\nConnect token to be included in the request sent to the target when\nexecuting the task. The service account must be within the same\nproject as the queue. The caller must have\n'iam.serviceAccounts.actAs' permission for the service account",
          args: {
            name: "OIDC_SERVICE_ACCOUNT_EMAIL",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--oidc-token-audience",
          description:
            "The audience to be used when generating an OpenID Connect token to\nbe included in the request sent to the target when executing the\ntask. If not specified, the URI specified in the target will be\nused",
          args: {
            name: "OIDC_TOKEN_AUDIENCE",
            description: "String",
            suggestions: [],
          },
        },
        flag11637,
        flag11939,
        flag11946,
        flag13307,
        flag14975,
        {
          name: "--url",
          description:
            'The full URL path that the request will be sent to. This string must\nbegin with either "http://" or "https://"',
          args: { name: "URL", description: "String", suggestions: [] },
        },
        flag15315,
        flag15424,
      ],
      args: {
        name: "TASK_ID",
        description:
          "The task to create.\n+\nIf not specified then the system will generate a random unique task\nID. Explicitly specifying a task ID enables task de-duplication. If a\ntask's ID is identical to that of an existing task or a task that was\ndeleted or completed recently then the call will fail.\n+\nBecause there is an extra lookup cost to identify duplicate task\nnames, tasks created with IDs have significantly increased latency.\nUsing hashed strings for the task ID or for the prefix of the task ID\nis recommended",
        isOptional: true,
      },
    },
    {
      name: "delete",
      description: "Delete a task from a queue",
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
        flag7081,
        flag7356,
        flag11637,
        flag11938,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: { name: "TASK", description: "The task to delete" },
    },
    {
      name: "describe",
      description: "Show details about a task",
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
        flag7081,
        flag7356,
        flag11637,
        flag11938,
        flag11946,
        {
          name: "--response-view",
          description:
            "Task response view. _RESPONSE_VIEW_ must be one of: *basic*, *full*, *view-unspecified*",
          args: {
            name: "RESPONSE_VIEW",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["basic", "full", "view-unspecified"],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: { name: "TASK", description: "The task to describe" },
    },
    {
      name: "list",
      description: "List tasks",
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
        flag7081,
        flag7356,
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *25*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
          args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
        },
        flag11637,
        {
          name: "--queue",
          description: "The queue the tasks belong to",
          args: { name: "QUEUE", description: "String", suggestions: [] },
        },
        flag11946,
        flag13948,
        flag14975,
        flag15249,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "locations",
      description: "Get information about Cloud Tasks locations",
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
          description: "Lists the locations where Cloud Tasks is available",
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
      name: "queues",
      description: "Manage Cloud Tasks queues",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a tasks queue",
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
            flag7017,
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
            name: "QUEUE",
            description:
              "ID of the queue or fully qualified identifier for the queue.\n+\nTo set the `queue` attribute:\n* provide the argument `queue` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Tasks queue",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5522,
            flag5530,
            {
              name: "--http-oauth-service-account-email-override",
              description:
                "The service account email to be used for generating an OAuth2 access\ntoken to be included in the request sent to the target when\nexecuting the task. The service account must be within the same\nproject as the queue. The caller must have\n'iam.serviceAccounts.actAs' permission for the service account",
              args: {
                name: "HTTP_OAUTH_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
                suggestions: [],
              },
            },
            flag5534,
            {
              name: "--http-oidc-service-account-email-override",
              description:
                "The service account email to be used for generating an OpenID\nConnect token to be included in the request sent to the target when\nexecuting the task. The service account must be within the same\nproject as the queue. The caller must have\n'iam.serviceAccounts.actAs' permission for the service account",
              args: {
                name: "HTTP_OIDC_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
                suggestions: [],
              },
            },
            flag5537,
            flag5542,
            flag5699,
            flag7081,
            flag7356,
            flag7365,
            flag7609,
            flag7611,
            flag7616,
            flag7629,
            flag7631,
            flag7683,
            flag7876,
            flag11637,
            flag11946,
            flag13194,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to create" },
        },
        {
          name: "delete",
          description: "Delete a queue",
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
            flag7081,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to delete" },
        },
        {
          name: "describe",
          description: "Show details about a queue",
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
            flag7081,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to describe" },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a queue",
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
            flag7017,
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
            name: "QUEUE",
            description:
              "ID of the queue or fully qualified identifier for the queue.\n+\nTo set the `queue` attribute:\n* provide the argument `queue` on the command line",
          },
        },
        {
          name: "list",
          description: "List all queues",
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
            flag7081,
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
          description: "Pause a queue",
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
            flag7081,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to pause" },
        },
        {
          name: "purge",
          description: "Purge a queue by deleting all of its tasks",
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
            flag7081,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to purge" },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of tasks queue",
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
            flag7017,
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
            name: "QUEUE",
            description:
              "ID of the queue or fully qualified identifier for the queue.\n+\nTo set the `queue` attribute:\n* provide the argument `queue` on the command line",
          },
        },
        {
          name: "resume",
          description: "Request to resume a paused or disabled queue",
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
            flag7081,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to resume" },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a queue",
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
            flag7017,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "QUEUE",
              description:
                "ID of the queue or fully qualified identifier for the queue.\n+\nTo set the `queue` attribute:\n* provide the argument `queue` on the command line",
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
          description: "Update a Cloud Tasks queue",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-http-header-override",
              description:
                "Clear the field corresponding to `--http-header-override`",
            },
            {
              name: "--clear-http-method-override",
              description:
                "Clear the field corresponding to `--http-method-override`",
            },
            {
              name: "--clear-http-oauth-service-account-email-override",
              description:
                "Clear the field corresponding to `--http-oauth-service-account-email-override`",
            },
            {
              name: "--clear-http-oauth-token-scope-override",
              description:
                "Clear the field corresponding to `--http-oauth-token-scope-override`",
            },
            {
              name: "--clear-http-oidc-service-account-email-override",
              description:
                "Clear the field corresponding to `--http-oidc-service-account-email-override`",
            },
            {
              name: "--clear-http-oidc-token-audience-override",
              description:
                "Clear the field corresponding to `--http-oidc-token-audience-override`",
            },
            {
              name: "--clear-http-uri-override",
              description:
                "Clear the field corresponding to `--http-uri-override`",
            },
            {
              name: "--clear-log-sampling-ratio",
              description:
                "Clear the field corresponding to `--log-sampling-ratio`",
            },
            {
              name: "--clear-max-attempts",
              description: "Clear the field corresponding to `--max-attempts`",
            },
            {
              name: "--clear-max-backoff",
              description: "Clear the field corresponding to `--max-backoff`",
            },
            {
              name: "--clear-max-concurrent-dispatches",
              description:
                "Clear the field corresponding to `--max-concurrent-dispatches`",
            },
            {
              name: "--clear-max-dispatches-per-second",
              description:
                "Clear the field corresponding to `--max-dispatches-per-second`",
            },
            {
              name: "--clear-max-doublings",
              description: "Clear the field corresponding to `--max-doublings`",
            },
            {
              name: "--clear-max-retry-duration",
              description:
                "Clear the field corresponding to `--max-retry-duration`",
            },
            {
              name: "--clear-min-backoff",
              description: "Clear the field corresponding to `--min-backoff`",
            },
            {
              name: "--clear-routing-override",
              description:
                "Clear the field corresponding to `--routing-override`",
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5522,
            flag5530,
            {
              name: "--http-oauth-service-account-email-override",
              description:
                "The service account email to be used for generating an OAuth2 access\ntoken to be included in the request sent to the target when\nexecuting the task. The service account must be within the same\nproject as the queue. The caller must have\n'iam.serviceAccounts.actAs' permission for the service account",
              args: {
                name: "HTTP_OAUTH_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
                suggestions: [],
              },
            },
            flag5534,
            {
              name: "--http-oidc-service-account-email-override",
              description:
                "The service account email to be used for generating an OpenID\nConnect token to be included in the request sent to the target when\nexecuting the task. The service account must be within the same\nproject as the queue. The caller must have\n'iam.serviceAccounts.actAs' permission for the service account",
              args: {
                name: "HTTP_OIDC_SERVICE_ACCOUNT_EMAIL_OVERRIDE",
                description: "String",
                suggestions: [],
              },
            },
            flag5537,
            flag5542,
            flag5699,
            flag7081,
            flag7356,
            flag7365,
            flag7609,
            flag7611,
            flag7616,
            flag7629,
            flag7631,
            flag7683,
            flag7876,
            flag11637,
            flag11946,
            flag13194,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "QUEUE", description: "The queue to update" },
        },
      ],
    },
    {
      name: "run",
      description: "Force a task to run now",
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
        flag7081,
        flag7356,
        flag11637,
        flag11938,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: { name: "TASK", description: "The task to run" },
    },
  ],
};

export default completionSpec;
