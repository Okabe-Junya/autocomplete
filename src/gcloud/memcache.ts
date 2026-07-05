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
const flag3702: Fig.Option = {
  name: "--display-name",
  description: "An arbitrary and optional user provided name for the instance",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
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
const flag6417: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7490: Fig.Option = {
  name: "--maintenance-window-duration",
  description:
    "Duration in integer hours (`3` to `8`) of the maintenance window",
  args: {
    name: "MAINTENANCE_WINDOW_DURATION",
    description: "Int",
    suggestions: [],
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
const flag11112: Fig.Option = {
  name: "--parameters",
  description:
    'User defined parameters to apply to the memcached process on each node. Possible attributes include:\n+\n*listen-backlog*::: The backlog queue limit for the instance.\n+\n*disable-flush-all*::: If enabled, flush_all command will be disabled. Applicable to\n1.4.24 and higher.\n+\n*max-item-size*::: Max bytes of the instance. Must at least be equal to slab_chunk_max\n(which defaults to 524288 bytes) and less than 134217728 bytes. Additionally it must\nbe a multiple of slab_chunk_max.\n+\n*slab-min-size*::: This is an integer in the range [1, 1024].\n+\n*slab-growth-factor*::: This is a float in the range [1.01, 100].\n+\n*protocol*::: This is an enum with acceptable values of ["ascii", "auto"].\n+\n*disable-cas*::: This is a boolean value.\n+\n*disable-evictions*::: This is a boolean value.\n+\n*max-reqs-per-event*::: This is an integer in the range [1, 1000].\n+\n*track-sizes*::: This is a boolean value.\n+\n*worker-logbuf-size*::: This is an integer in the range [48, 524288].\n+\n*watcher-logbuf-size*::: This is an integer in the range [0, 2097151].\n+\n*lru-crawler*::: This is a boolean value.\n+\n*idle-timeout*::: This is an integer in the range [1,86400].\n+\n*lru-maintainer*::: This is a boolean value.\n+\n*maxconns-fast*::: This is a boolean value.\n+\n*hash-algorithm*::: This is an enum with accepted values of ["jenkins", "murmur3"]',
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.memcache.instances_util:Parameters",
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
const flag12400: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `memcache/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12448: Fig.Option = {
  name: "--region",
  description:
    "The name of the Memcached region of the instance. Overrides the default\nmemcache/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `memcache/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12449: Fig.Option = {
  name: "--region",
  description:
    "The name of the Memcached region of the operation. Overrides the default\nmemcache/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `memcache/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
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
  name: "memcache",
  description: "Manage Cloud Memorystore Memcached resources",
  subcommands: [
    {
      name: "instances",
      description: "Manage Cloud Memorystore Memcached instances",
      subcommands: [
        {
          name: "apply-parameters",
          description:
            "Apply parameter update to nodes in a Memorystore Memcached instance",
          options: [
            flag42,
            flag46,
            {
              name: "--apply-all",
              description: "Apply the parameter update onto all nodes",
            },
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--node-ids",
              description: "Nodes on which to apply the parameter update",
              args: { name: "NODE_IDS", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12448,
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
          name: "create",
          description: "Create a Memorystore Memcached instance",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--authorized-network",
              description:
                "Full name of the Google Compute Engine network to which the instance\nis connected. If unspecified, the default network will be used",
              args: {
                name: "AUTHORIZED_NETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag3702,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6417,
            flag7356,
            {
              name: "--maintenance-window-day",
              description:
                "The day of week when the window starts, e.g. `sunday`. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            flag7490,
            {
              name: "--maintenance-window-start-time",
              description:
                "Hour of day (`0` to `23`) for the start of maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_START_TIME",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--memcached-version",
              description:
                'Optional major version of Memcached software to use with the instance.\nIf not provided, default of "1.5" will be used. _MEMCACHED_VERSION_ must be one of:\n+\n*1.5*::: Memcached major version 1.5\n*1.6.15*::: Memcached version 1.6.15\n:::\n+',
              args: {
                name: "MEMCACHED_VERSION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["1.5", "1.6.15"],
              },
            },
            {
              name: "--node-count",
              description:
                "Number of memcache nodes in this instance. Valid values range from 1 to 20",
              args: { name: "NODE_COUNT", description: "Int", suggestions: [] },
            },
            {
              name: "--node-cpu",
              description:
                "Number of cpus per node in this instance. Valid values are 1 or even\nnumber between 2-32. Value of 1 is not supported in all regions",
              args: { name: "NODE_CPU", description: "Int", suggestions: [] },
            },
            {
              name: "--node-memory",
              description:
                "Amount of memory allocated per node in this instance. The value must be a whole number\nfollowed by a size unit of 'MB' for megabyte, or 'GB' for gigabyte, ie '3072MB' or '9GB'.\nThe value must be between 1024MB and 307200MB",
              args: {
                name: "NODE_MEMORY",
                description:
                  "Googlecloudsdk.command_lib.memcache.instances_util:NodeMemory",
                suggestions: [],
              },
            },
            flag11112,
            flag11637,
            flag11946,
            flag12448,
            {
              name: "--reserved-ip-range-id",
              description:
                'Contains the name of allocated IP address ranges associated with\nthe private service access connection for example, "test-default"\nassociated with IP range 10.0.0.0/29',
              args: {
                name: "RESERVED_IP_RANGE_ID",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--zones",
              description:
                "List of zones for the memcache nodes. The nodes will be divided\nequally across the given zones up to --node-count value. If not\nprovided, the service will by default create nodes in all zones in the\nregion specified by --region flag",
              args: { name: "ZONES", description: "List", suggestions: [] },
            },
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Memorystore Memcached instance",
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
            flag7356,
            flag11637,
            flag11946,
            flag12448,
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
          description: "Display metadata for a Memorystore Memcached instance",
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
            flag12448,
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
          description: "List Memorystore Memcached instances",
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
            flag12400,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "reschedule-maintenance",
          description: "Reschedule maintenance window for a Memcache instance",
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
            flag7356,
            flag11637,
            flag11946,
            flag12448,
            {
              name: "--reschedule-type",
              description:
                "Reschedule type to use for the reschedule maintenance window. _RESCHEDULE_TYPE_ must be one of:\n+\n*immediate*::: Reschedule the maintenance to perform now.\n*next-available-window*::: Reschedule the maintenance to the next available window.\n*specific-time*::: Reschedule the maintenance to a specific time.\n:::\n+",
              args: {
                name: "RESCHEDULE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "immediate",
                  "next-available-window",
                  "specific-time",
                ],
              },
            },
            {
              name: "--schedule-time",
              description:
                "Time in RFC3339 format, for example: 2012-11-15T16:19:00.094Z",
              args: {
                name: "SCHEDULE_TIME",
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
          name: "update",
          description: "Update a Memorystore Memcached instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3702,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6417,
            flag7356,
            {
              name: "--maintenance-version",
              description: "The maintenance version to update to",
              args: {
                name: "MAINTENANCE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--maintenance-window-any",
              description: "Removes the user-specified maintenance window",
            },
            {
              name: "--maintenance-window-day",
              description:
                "The day of week when the window starts, e.g. 'sunday'. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            flag7490,
            {
              name: "--maintenance-window-start-time",
              description:
                "Hour of day (0 to 23) for the start of maintenance window, in UTC time zone",
              args: {
                name: "MAINTENANCE_WINDOW_START_TIME",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--node-count",
              description:
                "Number of memcache nodes in this instance. Valid values range from 1 to 20",
              args: { name: "NODE_COUNT", description: "Int", suggestions: [] },
            },
            flag11112,
            flag11637,
            flag11946,
            flag12448,
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
          name: "upgrade",
          description: "Upgrade memcache instance to a newer memcached version",
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
            flag7356,
            {
              name: "--memcached-version",
              description:
                "Memcached engine version to which instance should be upgraded to. _MEMCACHED_VERSION_ must be (only one value is supported):\n+\n*1.6.15*::: Memcached engine version 1.6.15\n:::\n+",
              args: {
                name: "MEMCACHED_VERSION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["1.6.15"],
              },
            },
            flag11637,
            flag11946,
            flag12448,
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
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Memorystore Memcached operations",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Memorystore Memcached operation",
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
            flag12449,
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
          description: "Display metadata for a Memorystore Memcached operation",
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
            flag12449,
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
          description: "List Memorystore Memcached operations",
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
            flag12400,
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
      name: "regions",
      description: "Manage Cloud Memorystore Memcached regions",
      subcommands: [
        {
          name: "describe",
          description: "Display metadata for a Memorystore Memcached region",
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
            name: "REGION",
            description:
              "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `region` on the command line;\n* set the property `memcache/region`",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Memorystore Memcached regions",
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
  ],
};

export default completionSpec;
