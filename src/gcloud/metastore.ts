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
const flag917: Fig.Option = {
  name: "--autoscaling-enabled",
  description:
    "A boolean flag to determine whether Dataproc Metastore autoscaling should be enabled,\nfalse if unspecified.\n+\nThe default minimum and maximum scaling factors are 0.1 and 6.0, respectively.\n+\nThe minimum and maximum scaling factors can be specified using --min-scaling-factor and\n--max-scaling-factor",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag4291: Fig.Option = {
  name: "--enable-scheduled-backup",
  description: "Enable or disable scheduled backups for the Metastore service",
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
const flag5865: Fig.Option = {
  name: "--instance-size",
  description:
    "The instance size of the service. _INSTANCE_SIZE_ must be one of:\n+\n*extra-large*::: Extra large instance size, maps to a scaling factor of 6.0.\n+\n*extra-small*::: Extra small instance size, maps to a scaling factor of 0.1.\n+\n*large*::: Large instance size, maps to a scaling factor of 3.0.\n+\n*medium*::: Medium instance size, maps to a scaling factor of 1.0.\n+\n*small*::: Small instance size, maps to a scaling factor of 0.5.\n+\n:::\n+",
  args: {
    name: "INSTANCE_SIZE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["extra-large", "extra-small", "large", "medium", "small"],
  },
};
const flag6413: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag7040: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataproc Metastore service.\n+\nIf not specified, will use `default` metastore/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7041: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataproc Metastore service.\n+\nIf not specified, will use `default` metastore/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `federation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7042: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataproc Metastore service.\n+\nIf not specified, will use `default` metastore/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7043: Fig.Option = {
  name: "--location",
  description:
    "The location of the Dataproc Metastore service.\n+\nIf not specified, will use `default` metastore/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7133: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7482: Fig.Option = {
  name: "--maintenance-window-day",
  description:
    "The day of week when the window starts, e.g., `sun`. _MAINTENANCE_WINDOW_DAY_ must be one of: *fri*, *mon*, *sat*, *sun*, *thu*, *tue*, *wed*",
  args: {
    name: "MAINTENANCE_WINDOW_DAY",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["fri", "mon", "sat", "sun", "thu", "tue", "wed"],
  },
};
const flag7500: Fig.Option = {
  name: "--maintenance-window-hour",
  description: "The hour of day (0-23) when the window starts",
  args: {
    name: "MAINTENANCE_WINDOW_HOUR",
    description: "Int",
    suggestions: [],
  },
};
const flag7688: Fig.Option = {
  name: "--max-scaling-factor",
  description:
    "The maximum scaling factor allowed by the autoscaler.\nCan be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].\nThe default value is 6.0",
  args: { name: "MAX_SCALING_FACTOR", description: "Float", suggestions: [] },
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
const flag7912: Fig.Option = {
  name: "--min-scaling-factor",
  description:
    "The minimum scaling factor allowed by the autoscaler.\nCan be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].\nThe default value is 0.1",
  args: { name: "MIN_SCALING_FACTOR", description: "Float", suggestions: [] },
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
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag13137: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13138: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13287: Fig.Option = {
  name: "--scaling-factor",
  description:
    "The scaling factor of the service.\nCan be one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]",
  args: { name: "SCALING_FACTOR", description: "Float", suggestions: [] },
};
const flag13316: Fig.Option = {
  name: "--scheduled-backup-configs-from-file",
  description:
    'Path to a JSON file containing a mapping of scheduled backup configurations key-value pairs to apply to the scheduled backup.\n+\nFor example:\n+\n  backup_configs.json\n      {\n        "enabled": true,\n        "cron_schedule": "0 * * * *",\n        "backup_location": "gs://example-bucket",\n        "time_zone": "UTC"\n      }\n+\nUse a full or relative path to a local file containing the value of scheduled_backup_configs',
  args: {
    name: "SCHEDULED_BACKUP_CONFIGS_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag13317: Fig.Option = {
  name: "--scheduled-backup-cron",
  description:
    "Specify the frequency of a scheduled backup of the metastore service",
  args: {
    name: "SCHEDULED_BACKUP_CRON",
    description: "String",
    suggestions: [],
  },
};
const flag13318: Fig.Option = {
  name: "--scheduled-backup-location",
  description:
    "Set the Cloud Storage URI to store the scheduled backups of the metastore service",
  args: {
    name: "SCHEDULED_BACKUP_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag13612: Fig.Option = {
  name: "--service",
  description:
    "The identifier of the Dataproc Metastore service\n+\nTo set the `service` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--service` on the command line",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14637: Fig.Option = {
  name: "--tags",
  description: "List of tag KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
    suggestions: [],
  },
};
const flag14876: Fig.Option = {
  name: "--tier",
  description:
    "The tier of the service. _TIER_ must be one of:\n+\n*developer*::: The developer tier provides limited scalability and no fault tolerance.\nGood for low-cost proof-of-concept.\n+\n*enterprise*::: The enterprise tier provides multi-zone high availability, and sufficient\nscalability for enterprise-level Dataproc Metastore workloads.\n+\n:::\n+",
  args: {
    name: "TIER",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["developer", "enterprise"],
  },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15167: Fig.Option = {
  name: "--update-labels",
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
  name: "metastore",
  description: "Manage Dataproc Metastore resources",
  subcommands: [
    {
      name: "federations",
      description: "Manage Dataproc Metastore federations",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a federation",
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
            flag7041,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Dataproc Metastore federation",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backends",
              description:
                "Backends from which the federation service serves metadata at query time. The backends are specified as a comma-separated\nlist of `RANK=BACKEND` pairs.\nFor example: `1=dpms:dpms1,2=dpms:projects/my-project/locations/us-central1/services/dpms2`.\n`RANK` represents the rank of the backend metastore and is used to resolve database name collisions.\n`BACKEND` is specified as `METASTORE_TYPE:METASTORE_NAME` where `METASTORE_TYPE` is the type of backend metastore and\n`METASTORE_NAME` is the relative resource name of the metastore. If only the name of the metastore is specified (e.g. `dpms1`),\nproject and location will be inferred from the project and location used to create the federation",
              args: {
                name: "RANK=BACKEND",
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
            {
              name: "--hive-metastore-version",
              description:
                "Hive metastore schema version of the Metastore federation. _HIVE_METASTORE_VERSION_ must be one of: *2.3.6*, *3.1.2*",
              args: {
                name: "HIVE_METASTORE_VERSION",
                description: "String",
                suggestions: ["2.3.6", "3.1.2"],
              },
            },
            flag5699,
            flag6413,
            flag7041,
            flag7356,
            flag11637,
            flag11946,
            flag14637,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete one or more Dataproc Metastore federations",
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
            {
              name: "--location",
              description:
                "Location to which the federations belongs.\n+\nTo set the `location` attribute:\n* provide the argument `federations` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
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
            name: "FEDERATIONS",
            description:
              "IDs of the federations or fully qualified identifiers for the federations.\n+\nTo set the `federation` attribute:\n* provide the argument `federations` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe a Dataproc Metastore federation",
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
            flag7041,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for the federation",
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
            flag7041,
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
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
          },
        },
        {
          name: "list",
          description: "List Dataproc Metastore federations",
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
            flag7133,
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
          description: "Remove an IAM policy binding from a federation",
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
            flag7041,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for the federation",
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
            flag7041,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "FEDERATION",
              description:
                "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
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
          description: "Update a Dataproc Metastore federation",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-backends",
              description:
                "Clear existing metastore backends. `--clear-backends` must be used with `--update-backends`",
            },
            flag1723,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7041,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-backends",
              description:
                "Comma-separated list of metastore backend keys to remove with the form `RANK1,RANK2`. The Key represents the rank of the backend metastore and is used to resolve database name collisions.\nIf a `RANK` does not exist then it is sliently ignored. If `--update-backends` is also specified, then `--remove-backends` is applied first",
              args: { name: "RANK", description: "String", suggestions: [] },
            },
            flag12637,
            flag14975,
            {
              name: "--update-backends",
              description:
                "Comma-separated list of metastore backends specified as a list of `RANK=BACKEND` pairs. For example: `1=dpms:dpms1,2=dpms:projects/my-project/locations/us-central1/services/dpms2`.\n`RANK` represents the rank of the backend metastore and is used to resolve database name collisions.\n`BACKEND` is specified as `METASTORE_TYPE:METASTORE_NAME` where `METASTORE_TYPE` is the type of backend metastore and\n`METASTORE_NAME` is the relative resource name of the metastore. If only the name of the metastore is specified (e.g. `dpms1`),\n project and location will be inferred from the project and location used to create the federation",
              args: {
                name: "RANK=BACKEND",
                description: "String",
                suggestions: [],
              },
            },
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FEDERATION",
            description:
              "ID of the federation or fully qualified identifier for the federation.\n+\nTo set the `federation` attribute:\n* provide the argument `federation` on the command line",
          },
        },
      ],
    },
    {
      name: "locations",
      description: "Get information about Dataproc Metastore locations",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Dataproc Metastore location",
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
              "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line;\n* set the property `metastore/location`",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Dataproc Metastore locations",
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
      description: "Manage Dataproc Metastore operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Dataproc Metastore operation",
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
                "Location to which the operation belongs.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
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
          name: "delete",
          description:
            "Delete one or more completed Dataproc Metastore operations",
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
                "Location to which the operations belongs.\n+\nTo set the `location` attribute:\n* provide the argument `operations` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
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
            name: "OPERATIONS",
            description:
              "IDs of the operations or fully qualified identifiers for the operations.\n+\nTo set the `operation` attribute:\n* provide the argument `operations` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Dataproc Metastore operation",
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
            flag7042,
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
          description: "List Dataproc Metastore operations",
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
            flag7133,
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
          description:
            "Poll a long-running Dataproc Metastore operation until it completes",
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
            flag7042,
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
      name: "services",
      description: "Manage Dataproc Metastore services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a service",
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
            flag7043,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13137,
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
          name: "alter-metadata-resource-location",
          description: "Alter metadata resource location",
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
            flag7043,
            {
              name: ["--location-uri", "--location_uri"],
              description: "The new location URI for the metadata resource",
              args: {
                name: "LOCATION_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: ["--resource-name", "--resource_name"],
              description:
                "The relative metadata resource name in the following format.\n `databases/{database_id}`\n or\n `databases/{database_id}/tables/{table_id}`\n or\n `databases/{database_id}/tables/{table_id}/partitions/{partition_id}`",
              args: {
                name: "RESOURCE_NAME",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "alter-table-properties",
          description: "Alter metadata table properties",
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
            flag7043,
            flag7356,
            flag11637,
            {
              name: "--properties",
              description:
                "A string where field names are separated by a comma. Describes the desired values to mutate.\nIf update-mask is empty, the properties will not update. Otherwise, the properties only\nalter the values whose associated paths exist in the update mask.\n+\nFor example, the desired key-value pairs.\n+\na=2,b=3,c=4",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--table-name",
              description:
                "The name of the table containing the properties you're altering in the\nfollowing format.\n+\n`databases/{database_id}/tables/{table_id}`",
              args: {
                name: "TABLE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-mask",
              description:
                "A string where field names are separated by a comma. Specifies the metadata table properties\n fields that are overwritten by the update. Fields specified in the `update-mask` are\n  relative to the resource (not to the full request). A field is overwritten if it is in\n  the mask.\n+\nFor example, given the target properties:\n+\n    properties {\n      a: 1\n      b: 2\n    }\n+\nAnd an update properties:\n+\n    properties {\n      a: 2\n      b: 3\n      c: 4\n    }\n+\nthen if the field mask is:\n+\n`properties.b,properties.c`\n+\nthen the updated result will be:\n+\n    properties {\n      a: 1\n      b: 3\n      c: 4\n    }",
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "backups",
          description: "Manage backups under Dataproc Metastore services",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description: "Add an IAM policy binding to a backup",
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
                flag7040,
                flag7356,
                flag7749,
                flag11637,
                flag11946,
                flag13137,
                flag13612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "create",
              description: "Backup a service",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description: "The description of this backup",
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
                flag7040,
                flag7356,
                flag11637,
                flag11946,
                flag13612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a service backup",
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
                flag7040,
                flag7356,
                flag11637,
                flag11946,
                flag13612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a backup",
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
                flag7040,
                flag7356,
                flag11637,
                flag11946,
                flag13612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for the backup",
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
                flag7040,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13612,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "list",
              description: "List backups under a Dataproc Metastore service",
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
                    "The location of the Dataproc Metastore service.\n+\nIf not specified, will use `default` metastore/location.\n+\n\nTo set the `location` attribute:\n* provide the argument `--service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
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
                {
                  name: "--service",
                  description:
                    "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `--service` on the command line",
                  args: {
                    name: "SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description: "Remove an IAM policy binding from a backup",
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
                flag7040,
                flag7356,
                flag7753,
                flag11637,
                flag11946,
                flag13138,
                flag13612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy for a backup",
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
                flag7040,
                flag7356,
                flag11637,
                flag11946,
                flag13612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "BACKUP",
                  description:
                    "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
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
          name: "create",
          description: "Create a Dataproc Metastore service",
          options: [
            flag42,
            flag46,
            flag720,
            flag917,
            {
              name: "--auxiliary-versions",
              description:
                "Comma-separated list of auxiliary Hive metastore versions to deploy. Auxiliary Hive\nmetastore versions must be less than the primary Hive metastore service's version",
              args: {
                name: "AUXILIARY_VERSIONS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--auxiliary-versions-from-file",
              description:
                "Path to a YAML file containing the auxiliary versions configuration for\nDataproc Metastore instance. The file should contain a unique auxiliary service name and\nauxiliary version that is lower than the primary service version. The primary version's\nHive metastore configs are applied to the auxiliary version. Additional Hive metastore\nconfigs can be specified for the auxiliary version using \"config_overrides\". If a\nspecified config property has already been overridden in the primary Hive metastore\nversion's configs, the auxiliary version's override takes precedence.\nThe contents of the file should be structured as follows:\n+\nYAML:\n+\n```\n  - name: aux-service1\n    version: x.y.z\n    config_overrides:\n      key1: value1\n      key2: value2\n    ...\n  - name: aux-service2\n    version: x.y.z\n    config_overrides:\n      key1: value1\n      key2: value2\n    ...\n  ...\n```",
              args: {
                name: "AUXILIARY_VERSIONS_FROM_FILE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--consumer-subnetworks",
              description:
                "The list of subnetworks from which the service can be accessed.\nThis can be the subnetwork's ID, fully-qualified URL, or relative name in\nthe form `projects/{project_id}/regions/{region_id}/subnetworks/{subnetwork}`",
              args: {
                name: "CONSUMER_SUBNETWORKS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--data-catalog-sync",
              description:
                "A boolean flag to determine whether Dataproc Metastore metadata sync\nto Data Catalog should be enabled, false if unspecified.\nMutually exclusive with flag `--encryption-kms-key`",
            },
            {
              name: "--database-type",
              description:
                "The type of database the Dataproc Metastore service will store data in. _DATABASE_TYPE_ must be one of:\n+\n*mysql*::: `MYSQL` database type is a Dataproc Metastore service backed by MySQL CloudSQL.\n+\n*spanner*::: `SPANNER` database type is a Dataproc Metastore service backed by Cloud Spanner.\n+\n:::\n+",
              args: {
                name: "DATABASE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["mysql", "spanner"],
              },
            },
            {
              name: "--deletion-protection",
              description:
                "Flag that enables delete protection on Dataproc Metastore instance to prevent\naccidental deletions of the instance.\nUse --deletion-protection to enable",
            },
            flag4291,
            {
              name: "--encryption-kms-key",
              description:
                "The name of the Cloud KMS key to use for customer data encryption.\nCannot be changed once the service is created.\nMutually exclusive with flag `--data-catalog-sync`.\nThis can be provided as a fully-qualified URL, or a relative name in\nthe form `projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}`",
              args: {
                name: "ENCRYPTION_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--endpoint-protocol",
              description:
                "The protocol to use for the metastore service endpoint.\nIf unspecified, defaults to `THRIFT`. _ENDPOINT_PROTOCOL_ must be one of:\n+\n*grpc*::: The modernized `GRPC` protocol.\n+\n*thrift*::: The legacy Apache `THRIFT` protocol.\n+\n:::\n+",
              args: {
                name: "ENDPOINT_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["grpc", "thrift"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--hive-metastore-configs",
              description:
                "A mapping of Hive metastore configuration key-value pairs to\napply to the Hive metastore",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            {
              name: "--hive-metastore-configs-from-file",
              description:
                "Path to a XML file containing a mapping of Hive metastore configuration key-value\npairs to apply to the Hive metastore.\n+\nFor example:\n+\n  hive-site.xml\n      <configuration>\n        <property>\n          <name>hive.metastore.warehouse.dir</name>\n          <value>${test.warehouse.dir}</value>\n          <description></description>\n        </property>\n      </configuration>\n+\nUse a full or relative path to a local file containing the value of hive_metastore_configs",
              args: {
                name: "HIVE_METASTORE_CONFIGS_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--hive-metastore-version",
              description:
                "The Hive metastore schema version. The supported versions of a location are listed via:\n+\n  {top_command} metastore locations describe\n+\nIf unspecified, the default version chosen by the server will be used",
              args: {
                name: "HIVE_METASTORE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag5865,
            {
              name: "--kerberos-principal",
              description:
                'A Kerberos principal that exists in the KDC to authenticate as. A typical principal\nis of the form "primary/instance@REALM", but there is no exact format',
              args: {
                name: "KERBEROS_PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--keytab",
              description:
                "A Kerberos keytab file that can be used to authenticate a service principal\nwith a Kerberos Key Distribution Center. This is a Secret Manager secret version,\nand can be fully-qualified URL, or relative name in the form\n`projects/{project_id}/secrets/{secret_id}/versions/{version_id}`",
              args: { name: "KEYTAB", description: "String", suggestions: [] },
            },
            {
              name: "--krb5-config",
              description:
                "A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form\ngs://{bucket_name}/path/krb5.conf, although the file does not need to be named\nkrb5.conf explicitly",
              args: {
                name: "KRB5_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag6413,
            flag7043,
            flag7356,
            flag7482,
            flag7500,
            flag7688,
            flag7912,
            {
              name: "--network",
              description:
                'The name of the network on which the service can be accessed.\nThis can be the network\'s ID, fully-qualified URL, or relative name in\nthe form `projects/{project_id}/global/networks/{network}`.\nIf "network", "consumer-subnetworks" and "network-config" are unspecified,\nthe "default" network will be used',
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--network-config-from-file",
              description:
                "Path to a YAML file containing the network configuration for Dataproc Metastore instance.\nThe contents of the file should be structured as follows:\n+\nYAML:\nconsumers:\n- subnetwork: projects/{project_id}/regions/{region_id}/subnetworks/{subnetwork_id}\n- subnetwork: projects/{project_id}/regions/{region_id}/subnetworks/{subnetwork_id}\n..",
              args: {
                name: "NETWORK_CONFIG_FROM_FILE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                suggestions: [],
              },
            },
            {
              name: "--port",
              description:
                "The TCP port on which the Metastore service will listen.\nIf unspecified, the default port 9083 will be used",
              args: { name: "PORT", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--release-channel",
              description:
                "The release channel of the service. _RELEASE_CHANNEL_ must be one of:\n+\n*canary*::: The `CANARY` release channel contains the newest features, which may be\nunstable and subject to unresolved issues with no known workarounds.\nServices using the `CANARY` release channel are not subject to any SLAs.\n+\n*stable*::: The `STABLE` release channel contains features that are considered stable\nand have been validated for production use.\n+\n:::\n+",
              args: {
                name: "RELEASE_CHANNEL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["canary", "stable"],
              },
            },
            flag13287,
            flag13316,
            flag13317,
            flag13318,
            flag14637,
            flag14876,
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
          name: "delete",
          description: "Delete one or more Dataproc Metastore services",
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
            {
              name: "--location",
              description:
                "Location to which the services belongs.\n+\nTo set the `location` attribute:\n* provide the argument `services` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
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
            name: "SERVICES",
            description:
              "IDs of the services or fully qualified identifiers for the services.\n+\nTo set the `service` attribute:\n* provide the argument `services` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe a Dataproc Metastore service",
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
            flag7043,
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
          name: "export",
          description: "Export metadata from a Dataproc Metastore service",
          subcommands: [
            {
              name: "gcs",
              description:
                "Export metadata from a Dataproc Metastore service to Google Cloud Storage",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--destination-folder",
                  description:
                    "A Cloud Storage URI of a folder that metadata is exported to, in the format\n`gs://<bucket_name>/<path_inside_bukcet>`. A sub-folder containing\nexported files will be created below it",
                  args: {
                    name: "DESTINATION_FOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--dump-type",
                  description:
                    "The type of the database dump. If unspecified, defaults to `mysql`. _DUMP_TYPE_ must be one of:\n+\n*avro*::: Database dump contains AVRO files.\n+\n*mysql*::: Database dump is a MYSQL dump file.\n+\n:::\n+",
                  args: {
                    name: "DUMP_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["avro", "mysql"],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7043,
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
          ],
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for the service",
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
            flag7043,
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
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "import",
          description: "Import metadata into a Dataproc Metastore service",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import metadata into a Dataproc Metastore service from Google Cloud Storage",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--database-dump",
                  description:
                    "A Cloud Storage object URI that specifies a database dump from which to import metadata.\nIt must begin with `gs://`",
                  args: {
                    name: "DATABASE_DUMP",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--description",
                  description: "The description of this metadata import",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--dump-type",
                  description:
                    "The type of the database dump;. If unspecified, defaults to `mysql`. _DUMP_TYPE_ must be one of:\n+\n*avro*::: Database dump contains AVRO files.\n+\n*mysql*::: Database dump is a MYSQL dump file.\n+\n:::\n+",
                  args: {
                    name: "DUMP_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["avro", "mysql"],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--import-id",
                  description: "The ID of this metadata import",
                  args: {
                    name: "IMPORT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7043,
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
          ],
        },
        {
          name: "list",
          description: "List Dataproc Metastore services",
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
            flag7133,
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
          name: "move-table-to-database",
          description: "Move table to another database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: ["--destination-db-name", "--destination_db_name"],
              description:
                "The name of the database where the table should be moved",
              args: {
                name: "DESTINATION_DB_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7043,
            flag7356,
            flag11637,
            flag11946,
            {
              name: ["--source-db-name", "--source_db_name"],
              description: "The name of the database where the table resides",
              args: {
                name: "SOURCE_DB_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: ["--table-name", "--table_name"],
              description: "The name of the table to be moved",
              args: {
                name: "TABLE_NAME",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "query-metadata",
          description:
            "Execute a SQL query against a Dataproc Metastore Service's metadata",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Location to which the service belongs.\n+\nTo set the `location` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `metastore/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            {
              name: "--query",
              description:
                'Use Google Standard SQL query for Cloud Spanner and MySQL query\nsyntax for Cloud SQL. Cloud Spanner SQL is described at\nhttps://cloud.google.com/spanner/docs/query-syntax)"',
              args: { name: "QUERY", description: "String", suggestions: [] },
            },
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
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a service",
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
            flag7043,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13138,
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
          name: "restore",
          description: "Restore a Dataproc Metastore service",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup",
              description:
                "The backup resource to restore from.\nThis can be the backup's ID, fully-qualified URL, or relative name in the form\n`projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}`",
              args: { name: "BACKUP", description: "String", suggestions: [] },
            },
            {
              name: "--backup-location",
              description:
                'The location of the backup artifacts to restore from.\nThis should be a Cloud Storage URI, contains backup avro files under "avro/",\nbackup_metastore.json and service.json, in the form `gs://<path_to_backup>`',
              args: {
                name: "BACKUP_LOCATION",
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
            flag7043,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--restore-type",
              description:
                "The type of restore to perform. _RESTORE_TYPE_ must be one of:\n+\n*full*::: The service's metadata and configuration are restored.\n+\n*metadata-only*::: Only the service's metadata is restored.\n+\n:::\n+",
              args: {
                name: "RESTORE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["full", "metadata-only"],
              },
            },
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
          name: "set-iam-policy",
          description: "Set the IAM policy for the service",
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
            flag7043,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SERVICE",
              description:
                "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
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
          description: "Update a Dataproc Metastore service",
          options: [
            flag42,
            flag46,
            {
              name: "--add-auxiliary-versions",
              description:
                "Comma-separated list of auxiliary Hive metastore versions to deploy.\nAuxiliary Hive metastore versions must be less than the primary Hive metastore\nservice's version",
              args: {
                name: "ADD_AUXILIARY_VERSIONS",
                description: "List",
                suggestions: [],
              },
            },
            flag720,
            flag917,
            flag1201,
            {
              name: "--clear-auxiliary-versions",
              description:
                "Clears the existing auxiliary services attached to the primary Hive metastore\nservices. If --add-auxiliary-versions is also specified, --clear-auxiliary-versions\nis applied first",
            },
            {
              name: "--clear-hive-metastore-configs",
              description:
                "clear existing Hive metastore configurations. If --update-hive-metastore-configs\nis also specified, then --clear-hive-metastore-configs is applied first",
            },
            flag1723,
            flag2292,
            {
              name: "--data-catalog-sync",
              description:
                "Boolean flag to determine whether or not Dataproc Metastore metadata sync to Data Catalog\nis enabled, false if unspecified.\nMutually exclusive with flag `--encryption-kms-key`.\nCannot be updated if the service uses customer-managed encryption keys",
            },
            {
              name: "--deletion-protection",
              description:
                "Flag that enables delete protection on Dataproc Metastore instance to prevent\naccidental deletions of the instance.\nUse --deletion-protection to enable and --no-deletion-protection to disable",
            },
            flag4291,
            {
              name: "--endpoint-protocol",
              description:
                "The protocol to use for the metastore service endpoint. _ENDPOINT_PROTOCOL_ must be one of:\n+\n*grpc*::: The modernized `GRPC` protocol.\n+\n*thrift*::: The legacy Apache `THRIFT` protocol.\n+\n:::\n+",
              args: {
                name: "ENDPOINT_PROTOCOL",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["grpc", "thrift"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5865,
            {
              name: "--kerberos-principal",
              description:
                'A Kerberos principal that exists in the KDC to authenticate as. A typical principal\nis of the form "primary/instance@REALM", but there is no exact format',
              args: {
                name: "KERBEROS_PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--keytab",
              description:
                "A Kerberos keytab file that can be used to authenticate a service principal\nwith a Kerberos Key Distribution Center. This is a Secret Manager secret version,\nand can be fully-qualified URL, or relative name in the form\n`projects/{project_id}/secrets/{secret_id}/versions/{version_id}`",
              args: { name: "KEYTAB", description: "String", suggestions: [] },
            },
            {
              name: "--krb5-config",
              description:
                "A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form\ngs://{bucket_name}/path/krb5.conf, although the file does not need to be named\nkrb5.conf explicitly",
              args: {
                name: "KRB5_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag7043,
            flag7356,
            flag7482,
            flag7500,
            flag7688,
            flag7912,
            {
              name: "--port",
              description:
                "The TCP port on which the Metastore service will listen",
              args: { name: "PORT", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--remove-hive-metastore-configs",
              description:
                'Comma-separated list of configuration keys to remove with the form\n"KEY1, KEY2". If a label does not exist it is silently ignored. If\n--update-hive-metastore-configs is also specified, then\n--remove-hive-metastore-configs is applied first',
              args: {
                name: "REMOVE_HIVE_METASTORE_CONFIGS",
                description: "List",
                suggestions: [],
              },
            },
            flag12637,
            flag13287,
            flag13316,
            flag13317,
            flag13318,
            flag14876,
            flag14975,
            {
              name: "--update-auxiliary-versions-from-file",
              description:
                "Path to a YAML file containing the auxiliary versions configuration for\nDataproc Metastore instance. The file should contain a unique auxiliary service name and\nauxiliary version that is lower than the primary service version. The primary version's\nHive metastore configs are applied to the auxiliary version. Additional Hive metastore\nconfigs can be specified for the auxiliary version using \"config_overrides\". If a\nspecified config property has already been overridden in the primary Hive metastore\nversion's configs, the auxiliary version's override takes precedence.\nThe contents of the file should be structured as follows:\n+\nYAML:\n+\n```\n  - name: aux-service1\n    version: x.y.z\n    config_overrides:\n      key1: value1\n      key2: value2\n    ...\n  - name: aux-service2\n    version: x.y.z\n    config_overrides:\n      key1: value1\n      key2: value2\n    ...\n  ...\n```",
              args: {
                name: "UPDATE_AUXILIARY_VERSIONS_FROM_FILE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                suggestions: [],
              },
            },
            {
              name: "--update-hive-metastore-configs",
              description:
                'Comma-separated list of Hive metastore configurations. Each configuration has\nthe form "NAME=VALUE"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--update-hive-metastore-configs-from-file",
              description:
                "Path to a XML file containing a mapping of Hive metastore configuration key-value\npairs to apply to the Hive metastore.\n+\nFor example:\n+\n  hive-site.xml\n      <configuration>\n        <property>\n          <name>hive.metastore.warehouse.dir</name>\n          <value>${test.warehouse.dir}</value>\n          <description></description>\n        </property>\n      </configuration>\n+\nUse a full or relative path to a local file containing the value of update_hive_metastore_configs",
              args: {
                name: "UPDATE_HIVE_METASTORE_CONFIGS_FROM_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag15167,
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
  ],
};

export default completionSpec;
