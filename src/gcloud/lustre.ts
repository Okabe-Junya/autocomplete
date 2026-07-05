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
const flag2919: Fig.Option = {
  name: "--default-squash-gid",
  description:
    "The user squash GID for the default access rule.\nThis user squash GID applies to all root users connecting from clients\nthat are not matched by any of the access rules. If not set, the default\nis 0 (no GID squash)",
  args: { name: "DEFAULT_SQUASH_GID", description: "Int", suggestions: [] },
};
const flag2922: Fig.Option = {
  name: "--default-squash-uid",
  description:
    "The user squash UID for the default access rule.\nThis user squash UID applies to all root users connecting from clients\nthat are not matched by any of the access rules. If not set, the default\nis 0 (no UID squash)",
  args: { name: "DEFAULT_SQUASH_UID", description: "Int", suggestions: [] },
};
const flag3107: Fig.Option = {
  name: "--description",
  description: "A user-readable description of the instance",
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
const flag5175: Fig.Option = {
  name: "--gcs-path-uri",
  description:
    "The URI to a Cloud Storage bucket, or a path within a bucket, using the\nformat `gs://<bucket_name>/<optional_path_inside_bucket>/`. If a path\ninside the bucket is specified, it must end with a forward slash (`/`)",
  args: { name: "GCS_PATH_URI", description: "String", suggestions: [] },
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
const flag7256: Fig.Option = {
  name: "--location",
  description:
    "The location id of the instance resource.\n+\nTo set the `location` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7266: Fig.Option = {
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
const flag7408: Fig.Option = {
  name: "--lustre-path",
  description:
    "The root directory path to the Managed Lustre file system. Must start with\n`/`. Default is `/`. If you're importing data into Managed Lustre, any\npath other than the default must already exist on the file system",
  args: { name: "LUSTRE_PATH", description: "String", suggestions: [] },
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
const flag11246: Fig.Option = {
  name: "--per-unit-storage-throughput",
  description:
    "The throughput of the instance in MBps per TiB. Valid values are 125, 250,\n500, 1000.\nSee [Performance tiers and maximum storage\ncapacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)\nfor more information.\n+\nIf the instance is using the Dynamic tier, this field must not be set or\nmust be set to zero",
  args: {
    name: "PER_UNIT_STORAGE_THROUGHPUT",
    description: "Int",
    suggestions: [],
  },
};
const flag11306: Fig.Option = {
  name: "--placement-policy",
  description:
    "The placement policy name for the instance in the format of\nprojects/{project}/locations/{location}/resourcePolicies/{resource_policy}",
  args: { name: "PLACEMENT_POLICY", description: "String", suggestions: [] },
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
const flag12847: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12853: Fig.Option = {
  name: "--request-id",
  description: "UUID to identify requests",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag13517: Fig.Option = {
  name: "--service-account",
  description:
    "ID of the serviceAccount or fully qualified identifier for the serviceAccount.\n+\nTo set the `service-account` attribute:\n* provide the argument `--service-account` on the command line",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
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
  name: "lustre",
  description: "Manage Lustre resources",
  subcommands: [
    {
      name: "instances",
      description: "Manage Instance resources",
      subcommands: [
        {
          name: "create",
          description: "Creates a Managed Lustre instance",
          options: [
            {
              name: "--access-rules",
              description:
                'The access rules for the instance.\n+\n*ipAddressRanges*:::\nThe IP address ranges to which to apply this access rule. Accepts\nnon-overlapping CIDR ranges (e.g., `192.168.1.0/24`) and IP addresses\n(e.g., `192.168.1.0`).\n+\n*name*:::\nThe name of the access rule policy group.\nMust be 16 characters or less and include only alphanumeric characters\nor \'_\'.\n+\n*squashMode*:::\nSquash mode for the access rule.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--access-rules=ipAddressRanges=[string],name=string,squashMode=string --access-rules=ipAddressRanges=[string],name=string,squashMode=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--access-rules=\'[{"ipAddressRanges": ["string"], "name": "string", "squashMode": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--access-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ACCESS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--capacity-gib",
              description:
                "The storage capacity of the instance in gibibytes (GiB). Allowed values\nare from `9000` to `7632000`, depending on the `perUnitStorageThroughput`.\nSee [Performance tiers and maximum storage\ncapacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)\nfor specific minimums, maximums, and step sizes for each performance tier",
              args: {
                name: "CAPACITY_GIB",
                description: "Int",
                suggestions: [],
              },
            },
            flag2292,
            flag2919,
            {
              name: "--default-squash-mode",
              description:
                "The squash mode for the default access rule. _DEFAULT_SQUASH_MODE_ must be one of:\n+\n*no-squash*::: Squash is disabled.\n+\nIf set inside an [AccessRule][google.cloud.lustre.v1.AccessRulesOptions.AccessRule], root users matching the\n[ip_ranges][AccessRule.ip_ranges] are not squashed.\n+\nIf set as the [default_squash_mode][google.cloud.lustre.v1.AccessRulesOptions.default_squash_mode], root squash is\ndisabled for this instance.\n+\nIf the default squash mode is `NO_SQUASH`, do not set the\n[default_squash_uid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_uid] or\n[default_squash_gid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_gid], or an `invalid argument` error\nis returned.\n*root-squash*::: Root user squash is enabled.\n+\nNot supported inside an [AccessRule][google.cloud.lustre.v1.AccessRulesOptions.AccessRule].\n+\nIf set as the [default_squash_mode][google.cloud.lustre.v1.AccessRulesOptions.default_squash_mode],\nroot users not matching any of the [access_rules][google.cloud.lustre.v1.AccessRulesOptions.access_rules] are\nsquashed to the [default_squash_uid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_uid] and\n[default_squash_gid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_gid].\n:::\n+",
              args: {
                name: "DEFAULT_SQUASH_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["no-squash", "root-squash"],
              },
            },
            flag2922,
            flag3107,
            {
              name: "--dynamic-tier-options-mode",
              description:
                "The dynamic tier mode of the instance. _DYNAMIC_TIER_OPTIONS_MODE_ must be one of:\n+\n*default-cache*::: The dynamic tier is enabled.\n*disabled*::: The dynamic tier is explicitly disabled.\n:::\n+",
              args: {
                name: "DYNAMIC_TIER_OPTIONS_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["default-cache", "disabled"],
              },
            },
            {
              name: "--filesystem",
              description:
                "The filesystem name for this instance. This name is used by client-side\ntools, including when mounting the instance. Must be eight characters or\nless and can only contain letters and numbers",
              args: {
                name: "FILESYSTEM",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gke-support-enabled",
              description:
                "Indicates whether you want to enable support for GKE clients. By default,\nGKE clients are not supported.\nDeprecated. No longer required for GKE instance creation",
            },
            flag5453,
            flag5699,
            {
              name: "--kms-key",
              description:
                "The Cloud KMS key name to use for data encryption.\nIf not set, the instance will use Google-managed encryption keys.\nIf set, the instance will use customer-managed encryption keys.\nThe key must be in the same region as the instance.\nThe key format is:\nprojects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
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
            flag7256,
            flag7356,
            {
              name: "--maintenance-policy-exclusion-window",
              description:
                'The exclusion windows for the instance. Currently limited to 1 window.\n+\n*endDate*:::\nEnd date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*startDate*:::\nStart date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*time*:::\nTime in UTC when the exclusion window starts on start_date and ends on\nend_date. This can be:\n* Full time OR\n* All zeros for 00:00:00 UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int} --maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maintenance-policy-exclusion-window=\'[{"endDate": {"day": int, "month": int, "year": int}, "startDate": {"day": int, "month": int, "year": int}, "time": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maintenance-policy-exclusion-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MAINTENANCE_POLICY_EXCLUSION_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-policy-weekly-windows",
              description:
                'Required, The weekly maintenance windows for the instance. Currently limited to 1\nwindow.\n+\n*dayOfWeek*:::\nDay of the week for the maintenance window.\n+\n*startTime*:::\nStart time of the maintenance window in UTC time zone.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maintenance-policy-weekly-windows=\'[{"dayOfWeek": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maintenance-policy-weekly-windows=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOWS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `--network` on the command line",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11246,
            flag11306,
            flag11637,
            flag11946,
            flag12847,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a Managed Lustre instance",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--request-id",
              description:
                "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
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
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "describe",
          description: "Gets details of a single Managed Lustre instance",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "export-data",
          description:
            "Exports data from Managed Lustre instance to Cloud Storage",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5175,
            flag5453,
            flag5699,
            flag7256,
            flag7356,
            flag7408,
            flag11637,
            flag11946,
            flag12853,
            flag13517,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "import-data",
          description:
            "Imports data from Cloud Storage to Managed Lustre instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5175,
            flag5453,
            flag5699,
            flag7256,
            flag7356,
            flag7408,
            flag11637,
            flag11946,
            flag12853,
            flag13517,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "list",
          description: "List Lustre instances",
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
          name: "reschedule-maintenance",
          description: "reschedule instances",
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
            flag7256,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--request-id",
              description:
                "A unique identifier for this request. A random UUID is recommended.\nThis request is only idempotent if a `request_id` is provided",
              args: {
                name: "REQUEST_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--reschedule-schedule-time",
              description:
                "Required if reschedule_type is BY_TIME. Timestamp when the\nmaintenance shall be rescheduled to. This time must be within\n28 days of the original scheduled maintenance start time",
              args: {
                name: "RESCHEDULE_SCHEDULE_TIME",
                description: "Googlecloudsdk.core.util.times:ParseDateTime",
                suggestions: [],
              },
            },
            {
              name: "--reschedule-type",
              description:
                "The type of rescheduling. _RESCHEDULE_TYPE_ must be one of:\n+\n*by-time*::: Reschedule to a specific time.\n*immediate*::: Apply update immediately\n*next-available-window*::: Reschedule to the next available window.\n:::\n+",
              args: {
                name: "RESCHEDULE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["by-time", "immediate", "next-available-window"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "update",
          description:
            "Updates the parameters of a single Managed Lustre instance",
          options: [
            {
              name: "--access-rules",
              description:
                'Set access_rules to new value. The access rules for the instance.\n+\n*ipAddressRanges*:::\nThe IP address ranges to which to apply this access rule. Accepts\nnon-overlapping CIDR ranges (e.g., `192.168.1.0/24`) and IP addresses\n(e.g., `192.168.1.0`).\n+\n*name*:::\nThe name of the access rule policy group.\nMust be 16 characters or less and include only alphanumeric characters\nor \'_\'.\n+\n*squashMode*:::\nSquash mode for the access rule.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--access-rules=ipAddressRanges=[string],name=string,squashMode=string --access-rules=ipAddressRanges=[string],name=string,squashMode=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--access-rules=\'[{"ipAddressRanges": ["string"], "name": "string", "squashMode": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--access-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ACCESS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag42,
            flag46,
            {
              name: "--add-access-rules",
              description:
                'Add new value to access_rules list. The access rules for the instance.\n+\n*ipAddressRanges*:::\nThe IP address ranges to which to apply this access rule. Accepts\nnon-overlapping CIDR ranges (e.g., `192.168.1.0/24`) and IP addresses\n(e.g., `192.168.1.0`).\n+\n*name*:::\nThe name of the access rule policy group.\nMust be 16 characters or less and include only alphanumeric characters\nor \'_\'.\n+\n*squashMode*:::\nSquash mode for the access rule.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-access-rules=ipAddressRanges=[string],name=string,squashMode=string --add-access-rules=ipAddressRanges=[string],name=string,squashMode=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-access-rules=\'[{"ipAddressRanges": ["string"], "name": "string", "squashMode": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-access-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_ACCESS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-maintenance-policy-exclusion-window",
              description:
                'Add new value to maintenance_policy_exclusion_window list. The exclusion windows for the instance. Currently limited to 1 window.\n+\n*endDate*:::\nEnd date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*startDate*:::\nStart date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*time*:::\nTime in UTC when the exclusion window starts on start_date and ends on\nend_date. This can be:\n* Full time OR\n* All zeros for 00:00:00 UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int} --add-maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-maintenance-policy-exclusion-window=\'[{"endDate": {"day": int, "month": int, "year": int}, "startDate": {"day": int, "month": int, "year": int}, "time": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-maintenance-policy-exclusion-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_MAINTENANCE_POLICY_EXCLUSION_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--add-maintenance-policy-weekly-windows",
              description:
                'Add new value to maintenance_policy_weekly_windows list. The weekly maintenance windows for the instance. Currently limited to 1\nwindow.\n+\n*dayOfWeek*:::\nDay of the week for the maintenance window.\n+\n*startTime*:::\nStart time of the maintenance window in UTC time zone.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --add-maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-maintenance-policy-weekly-windows=\'[{"dayOfWeek": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-maintenance-policy-weekly-windows=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_MAINTENANCE_POLICY_WEEKLY_WINDOWS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--capacity-gib",
              description:
                "The storage capacity of the instance in gibibytes (GiB). Allowed values\nare from `9000` to `7632000`, depending on the `perUnitStorageThroughput`.\nSee [Performance tiers and maximum storage\ncapacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)\nfor specific minimums, maximums, and step sizes for each performance tier",
              args: {
                name: "CAPACITY_GIB",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--clear-",
              description:
                "Set instance.accessRulesOptions back to default value",
            },
            {
              name: "--clear-access-rules",
              description: "Clear access_rules value and set to empty list",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-maintenance-policy",
              description:
                "Set instance.maintenancePolicy back to default value",
            },
            {
              name: "--clear-maintenance-policy-exclusion-window",
              description:
                "Clear maintenance_policy_exclusion_window value and set to empty list",
            },
            {
              name: "--clear-maintenance-policy-weekly-windows",
              description:
                "Clear maintenance_policy_weekly_windows value and set to empty list",
            },
            flag2292,
            flag2919,
            {
              name: "--default-squash-mode",
              description:
                "The squash mode for the default access rule. _DEFAULT_SQUASH_MODE_ must be one of:\n+\n*no-squash*::: Squash is disabled.\n+\nIf set inside an [AccessRule][google.cloud.lustre.v1.AccessRulesOptions.AccessRule], root users matching the\n[ip_ranges][AccessRule.ip_ranges] are not squashed.\n+\nIf set as the [default_squash_mode][google.cloud.lustre.v1.AccessRulesOptions.default_squash_mode], root squash is\ndisabled for this instance.\n+\nIf the default squash mode is `NO_SQUASH`, do not set the\n[default_squash_uid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_uid] or\n[default_squash_gid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_gid], or an `invalid argument` error\nis returned.\n*root-squash*::: Root user squash is enabled.\n+\nNot supported inside an [AccessRule][google.cloud.lustre.v1.AccessRulesOptions.AccessRule].\n+\nIf set as the [default_squash_mode][google.cloud.lustre.v1.AccessRulesOptions.default_squash_mode],\nroot users not matching any of the [access_rules][google.cloud.lustre.v1.AccessRulesOptions.access_rules] are\nsquashed to the [default_squash_uid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_uid] and\n[default_squash_gid][google.cloud.lustre.v1.AccessRulesOptions.default_squash_gid].\n:::\n+",
              args: {
                name: "DEFAULT_SQUASH_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["no-squash", "root-squash"],
              },
            },
            flag2922,
            flag3107,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gke-support-enabled",
              description:
                "Indicates whether you want to enable support for GKE clients. By default,\nGKE clients are not supported.\nDeprecated. No longer required for GKE instance creation. Use *--gke-support-enabled* to enable and *--no-gke-support-enabled* to disable",
            },
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
            flag7256,
            flag7356,
            {
              name: "--maintenance-policy-exclusion-window",
              description:
                'Set maintenance_policy_exclusion_window to new value. The exclusion windows for the instance. Currently limited to 1 window.\n+\n*endDate*:::\nEnd date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*startDate*:::\nStart date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*time*:::\nTime in UTC when the exclusion window starts on start_date and ends on\nend_date. This can be:\n* Full time OR\n* All zeros for 00:00:00 UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int} --maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maintenance-policy-exclusion-window=\'[{"endDate": {"day": int, "month": int, "year": int}, "startDate": {"day": int, "month": int, "year": int}, "time": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maintenance-policy-exclusion-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MAINTENANCE_POLICY_EXCLUSION_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-policy-weekly-windows",
              description:
                'Set maintenance_policy_weekly_windows to new value. The weekly maintenance windows for the instance. Currently limited to 1\nwindow.\n+\n*dayOfWeek*:::\nDay of the week for the maintenance window.\n+\n*startTime*:::\nStart time of the maintenance window in UTC time zone.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--maintenance-policy-weekly-windows=\'[{"dayOfWeek": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--maintenance-policy-weekly-windows=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "MAINTENANCE_POLICY_WEEKLY_WINDOWS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag11246,
            flag11306,
            flag11637,
            flag11946,
            {
              name: "--remove-access-rules",
              description:
                'Remove existing value from access_rules list. The access rules for the instance.\n+\n*ipAddressRanges*:::\nThe IP address ranges to which to apply this access rule. Accepts\nnon-overlapping CIDR ranges (e.g., `192.168.1.0/24`) and IP addresses\n(e.g., `192.168.1.0`).\n+\n*name*:::\nThe name of the access rule policy group.\nMust be 16 characters or less and include only alphanumeric characters\nor \'_\'.\n+\n*squashMode*:::\nSquash mode for the access rule.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-access-rules=ipAddressRanges=[string],name=string,squashMode=string --remove-access-rules=ipAddressRanges=[string],name=string,squashMode=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-access-rules=\'[{"ipAddressRanges": ["string"], "name": "string", "squashMode": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-access-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ACCESS_RULES",
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
              name: "--remove-maintenance-policy-exclusion-window",
              description:
                'Remove existing value from maintenance_policy_exclusion_window list. The exclusion windows for the instance. Currently limited to 1 window.\n+\n*endDate*:::\nEnd date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*startDate*:::\nStart date of the exclusion period in UTC time zone. This date is\ninclusive.\n+\n*day*::::\nDay of a month. Must be from 1 to 31 and valid for the year and month, or 0\nto specify a year by itself or a year and month where the day isn\'t\nsignificant.\n+\n*month*::::\nMonth of a year. Must be from 1 to 12, or 0 to specify a year without a\nmonth and day.\n+\n*year*::::\nYear of the date. Must be from 1 to 9999, or 0 to specify a date without\na year.\n+\n*time*:::\nTime in UTC when the exclusion window starts on start_date and ends on\nend_date. This can be:\n* Full time OR\n* All zeros for 00:00:00 UTC.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int} --remove-maintenance-policy-exclusion-window=endDate={day=int,month=int,year=int},startDate={day=int,month=int,year=int},time={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-maintenance-policy-exclusion-window=\'[{"endDate": {"day": int, "month": int, "year": int}, "startDate": {"day": int, "month": int, "year": int}, "time": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-maintenance-policy-exclusion-window=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_MAINTENANCE_POLICY_EXCLUSION_WINDOW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--remove-maintenance-policy-weekly-windows",
              description:
                'Remove existing value from maintenance_policy_weekly_windows list. The weekly maintenance windows for the instance. Currently limited to 1\nwindow.\n+\n*dayOfWeek*:::\nDay of the week for the maintenance window.\n+\n*startTime*:::\nStart time of the maintenance window in UTC time zone.\n+\n*hours*::::\nHours of a day in 24 hour format. Must be greater than or equal to 0 and\ntypically must be less than or equal to 23. An API may choose to allow the\nvalue "24:00:00" for scenarios like business closing time.\n+\n*minutes*::::\nMinutes of an hour. Must be greater than or equal to 0 and less than or\nequal to 59.\n+\n*nanos*::::\nFractions of seconds, in nanoseconds. Must be greater than or equal to 0\nand less than or equal to 999,999,999.\n+\n*seconds*::::\nSeconds of a minute. Must be greater than or equal to 0 and typically must\nbe less than or equal to 59. An API may allow the value 60 if it allows\nleap-seconds.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int} --remove-maintenance-policy-weekly-windows=dayOfWeek=string,startTime={hours=int,minutes=int,nanos=int,seconds=int}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-maintenance-policy-weekly-windows=\'[{"dayOfWeek": "string", "startTime": {"hours": int, "minutes": int, "nanos": int, "seconds": int}}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-maintenance-policy-weekly-windows=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_MAINTENANCE_POLICY_WEEKLY_WINDOWS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag12847,
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
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
  ],
};

export default completionSpec;
