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
const flag375: Fig.Option = {
  name: "--airflow-database-retention-days",
  description:
    "The number of days for the Airflow database retention period.\n  If set to 0, the Airflow database retention mechanism will be disabled",
  args: {
    name: "AIRFLOW_DATABASE_RETENTION_DAYS",
    description: "Int",
    suggestions: [],
  },
};
const flag376: Fig.Option = {
  name: "--airflow-version",
  description:
    "Upgrade the environment to a later Apache Airflow version in-place.\n+\nMust be of the form `X[.Y[.Z]]`, where `[]` denotes optional fragments.\nExamples: `2`, `2.3`, `2.3.4`.\n+\nThe Apache Airflow version is a semantic version or an alias in the form of\nmajor or major.minor version numbers, resolved to the latest matching Apache\nAirflow version supported in the current Cloud Composer version. The\nresolved version is stored in the upgraded environment",
  args: {
    name: "AIRFLOW_VERSION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
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
const flag2005: Fig.Option = {
  name: "--cloud-sql-machine-type",
  description:
    "Cloud SQL machine type used by the Airflow database. The list of available\nmachine types is available here: https://cloud.google.com/composer/pricing#db-machine-types",
  args: {
    name: "CLOUD_SQL_MACHINE_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag2262: Fig.Option = {
  name: "--config-map-file-path",
  description:
    "Path to a local file with a single Kubernetes ConfigMap in YAML format",
  args: {
    name: "CONFIG_MAP_FILE_PATH",
    description: "String",
    suggestions: [],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2667: Fig.Option = {
  name: "--dag-processor-count",
  description:
    "Number of dag processors, supported in Composer 3 environments or greater",
  args: { name: "DAG_PROCESSOR_COUNT", description: "Int", suggestions: [] },
};
const flag2668: Fig.Option = {
  name: "--dag-processor-cpu",
  description:
    "CPU allocated to Airflow dag processor, supported in Composer 3\nenvironments or greater",
  args: { name: "DAG_PROCESSOR_CPU", description: "Float", suggestions: [] },
};
const flag2669: Fig.Option = {
  name: "--dag-processor-memory",
  description:
    "Memory allocated to Airflow dag processor, ex. 1GB, 3GB, 2. If units are not provided,\ndefaults to GB, supported in Composer 3 environments or greater",
  args: {
    name: "DAG_PROCESSOR_MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag2670: Fig.Option = {
  name: "--dag-processor-storage",
  description:
    "Storage allocated to Airflow dag processor, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB, supported in Composer 3 environments or greater",
  args: {
    name: "DAG_PROCESSOR_STORAGE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag3473: Fig.Option = {
  name: "--destination",
  description:
    "The path to an existing local directory or a Cloud Storage\nbucket/directory into which to export files",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
};
const flag3551: Fig.Option = {
  name: "--disable-cloud-data-lineage-integration",
  description:
    "Disable Cloud Data Lineage integration, supported for Composer 2 Environments",
};
const flag3575: Fig.Option = {
  name: "--disable-logs-in-cloud-logging-only",
  description:
    "Disable logs in cloud logging only, supported for Composer 2 Environments",
};
const flag3587: Fig.Option = {
  name: "--disable-private-builds-only",
  description:
    "Builds performed during operations that install Python\npackages have an access to the internet, supported in Composer 3 or greater",
};
const flag4066: Fig.Option = {
  name: "--enable-cloud-data-lineage-integration",
  description:
    "Enable Cloud Data Lineage integration, supported for Composer 2 Environments",
};
const flag4145: Fig.Option = {
  name: "--enable-high-resilience",
  description: "Enable high resilience, supported for Composer 2 Environments",
};
const flag4205: Fig.Option = {
  name: "--enable-logs-in-cloud-logging-only",
  description:
    "Enable logs in cloud logging only, supported for Composer 2 Environments",
};
const flag4215: Fig.Option = {
  name: "--enable-master-authorized-networks",
  description:
    "Enable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature]\n in the Composer Environment's GKE cluster",
};
const flag4255: Fig.Option = {
  name: "--enable-private-builds-only",
  description:
    "Builds performed during operations that install Python\npackages have only private connectivity to Google services,\nsupported in Composer 3 or greater",
};
const flag4292: Fig.Option = {
  name: "--enable-scheduled-snapshot-creation",
  description:
    "When specified, snapshots of the environment will be created according to a schedule.\nCan be specified for Composer 2.0.32 or greater",
};
const flag4323: Fig.Option = {
  name: "--enable-triggerer",
  description:
    "(DEPRECATED)     Enable use of a triggerer, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater.\n+\nThis flag is deprecated. Use --triggerer-count instead",
};
const flag4475: Fig.Option = {
  name: "--environment-size",
  description:
    "Size of the environment. Unspecified means that the default option will be chosen. _ENVIRONMENT_SIZE_ must be one of: *extra-large*, *large*, *medium*, *small*, *unspecified*",
  args: {
    name: "ENVIRONMENT_SIZE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["extra-large", "large", "medium", "small", "unspecified"],
  },
};
const flag4491: Fig.Option = {
  name: "--environment",
  description:
    "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `--environment` on the command line",
  args: { name: "ENVIRONMENT", description: "String", suggestions: [] },
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
const flag5682: Fig.Option = {
  name: "--image-version",
  description:
    "Upgrade the environment to a later version in-place.\n+\nThe image version encapsulates the versions of both Cloud Composer and\nApache Airflow. Must be of the form\n`composer-A[.B.C[-D.E]]-airflow-X[.Y[.Z]]`, where `[]` denotes optional\nfragments.\n+\nExamples: `composer-2-airflow-2`, `composer-2-airflow-2.2`,\n`composer-2.1.2-airflow-2.3.4`.\n+\nThe Cloud Composer portion of the image version is a semantic version or\nan alias in the form of major version number or `latest`, resolved to the\ncurrent Cloud Composer version. The Apache Airflow portion of the image\nversion is a semantic version or an alias in the form of major or\nmajor.minor version numbers, resolved to the latest matching Apache Airflow\nversion supported in the given Cloud Composer version. The resolved versions\nare stored in the upgraded environment",
  args: {
    name: "IMAGE_VERSION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
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
const flag6605: Fig.Option = {
  name: "--location",
  description:
    "Compute Engine region in which to create the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `composer/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6843: Fig.Option = {
  name: "--location",
  description:
    "Region where Composer environment runs or in which to create the environment.\n+\nTo set the `location` attribute:\n* provide the argument `--environment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `composer/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6844: Fig.Option = {
  name: "--location",
  description:
    "Region where Composer environment runs or in which to create the environment.\n+\nTo set the `location` attribute:\n* provide the argument `environment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `composer/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7330: Fig.Option = {
  name: "--locations",
  description:
    "IDs of the locations or fully qualified identifiers for the locations.\n+\nTo set the `location` attribute:\n* provide the argument `--locations` on the command line",
  args: { name: "LOCATIONS", description: "List", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7492: Fig.Option = {
  name: "--maintenance-window-end",
  description:
    "End time of the mantenance window in the form of the full date. Only the\ntime of the day is used as a reference for an ending time of the window\nwith a provided recurrence. Specified date must take place after the one\nspecified as a start date, the difference between will be used as a length\nof a single maintenance window.\nSee $ gcloud topic datetimes for information on time formats",
  args: {
    name: "MAINTENANCE_WINDOW_END",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7508: Fig.Option = {
  name: "--maintenance-window-recurrence",
  description:
    "An RFC 5545 RRULE, specifying how the maintenance window will recur. The\nminimum requirement for the length of the maintenance window is 12 hours a\nweek. Only FREQ=DAILY and FREQ=WEEKLY rules are supported",
  args: {
    name: "MAINTENANCE_WINDOW_RECURRENCE",
    description: "String",
    suggestions: [],
  },
};
const flag7516: Fig.Option = {
  name: "--maintenance-window-start",
  description:
    "Start time of the mantenance window in the form of the full date. Only the\ntime of the day is used as a reference for a starting time of the window\nwith a provided recurrence.\nSee $ gcloud topic datetimes for information on time formats",
  args: {
    name: "MAINTENANCE_WINDOW_START",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7564: Fig.Option = {
  name: "--master-authorized-networks",
  description:
    "Comma separated Master Authorized Networks specified in CIDR notation.\n+\nCannot be specified unless `--enable-master-authorized-networks` is also specified",
  args: { name: "NETWORK", description: "List", suggestions: [] },
};
const flag7714: Fig.Option = {
  name: "--max-workers",
  description: "Maximum number of workers in the Environment",
  args: { name: "MAX_WORKERS", description: "Int", suggestions: [] },
};
const flag7919: Fig.Option = {
  name: "--min-workers",
  description: "Minimum number of workers in the Environment",
  args: { name: "MIN_WORKERS", description: "Int", suggestions: [] },
};
const flag8158: Fig.Option = {
  name: "--network-attachment",
  description:
    "Cloud Composer Network Attachment, which provides connectivity with a user's VPC network,\nsupported in Composer 3 environments or greater",
  args: { name: "NETWORK_ATTACHMENT", description: "String", suggestions: [] },
};
const flag8263: Fig.Option = {
  name: "--network",
  description:
    "The Compute Engine Network to which the environment will be connected. If a 'Custom Subnet Network' is provided, `--subnetwork` must be specified as well",
  args: { name: "NETWORK", description: "String", suggestions: [] },
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
const flag13319: Fig.Option = {
  name: "--scheduler-count",
  description:
    "Number of schedulers, supported in the Environments with Airflow 2.0.1 and later",
  args: { name: "SCHEDULER_COUNT", description: "Int", suggestions: [] },
};
const flag13320: Fig.Option = {
  name: "--scheduler-cpu",
  description: "CPU allocated to Airflow scheduler",
  args: { name: "SCHEDULER_CPU", description: "Float", suggestions: [] },
};
const flag13321: Fig.Option = {
  name: "--scheduler-memory",
  description:
    "Memory allocated to Airflow scheduler, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB",
  args: {
    name: "SCHEDULER_MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag13322: Fig.Option = {
  name: "--scheduler-storage",
  description:
    "Storage allocated to Airflow scheduler, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB",
  args: {
    name: "SCHEDULER_STORAGE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag13409: Fig.Option = {
  name: "--secret-file-path",
  description:
    "Path to a local file with a single Kubernetes Secret in YAML format",
  args: { name: "SECRET_FILE_PATH", description: "String", suggestions: [] },
};
const flag13907: Fig.Option = {
  name: "--snapshot-creation-schedule",
  description:
    "Cron expression specifying when snapshots of the environment should be created.\nCan be specified for Composer 2.0.32 or greater",
  args: {
    name: "SNAPSHOT_CREATION_SCHEDULE",
    description: "String",
    suggestions: [],
  },
};
const flag13912: Fig.Option = {
  name: "--snapshot-location",
  description:
    "The Cloud Storage location for storing automatically created snapshots.\nCan be specified for Composer 2.0.32 or greater",
  args: { name: "SNAPSHOT_LOCATION", description: "String", suggestions: [] },
};
const flag13920: Fig.Option = {
  name: "--snapshot-schedule-timezone",
  description:
    "Timezone that sets the context to interpret snapshot_creation_schedule.\nCan be specified for Composer 2.0.32 or greater",
  args: {
    name: "SNAPSHOT_SCHEDULE_TIMEZONE",
    description: "String",
    suggestions: [],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14544: Fig.Option = {
  name: "--subnetwork",
  description:
    "The link:https://cloud.google.com/compute/docs/subnetworks[Compute Engine Subnetwork]\nto which the environment will be connected",
  args: { name: "SUBNETWORK", description: "String", suggestions: [] },
};
const flag14573: Fig.Option = {
  name: "--support-web-server-plugins",
  description:
    "Enable the support for web server plugins, supported in Composer 3\nor greater",
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15014: Fig.Option = {
  name: "--triggerer-count",
  description:
    "Number of triggerers, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
  args: { name: "TRIGGERER_COUNT", description: "Int", suggestions: [] },
};
const flag15015: Fig.Option = {
  name: "--triggerer-cpu",
  description:
    "CPU allocated to Airflow triggerer. Supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
  args: { name: "TRIGGERER_CPU", description: "Float", suggestions: [] },
};
const flag15016: Fig.Option = {
  name: "--triggerer-memory",
  description:
    "Memory allocated to Airflow triggerer, ex. 512MB, 3GB, 2. If units are not provided,\ndefaults to GB. Supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater",
  args: {
    name: "TRIGGERER_MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
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
const flag15542: Fig.Option = {
  name: "--web-server-allow-all",
  description: "Allows all IP addresses to access the Airflow web server",
};
const flag15544: Fig.Option = {
  name: "--web-server-cpu",
  description: "CPU allocated to each Airflow web server",
  args: { name: "WEB_SERVER_CPU", description: "Float", suggestions: [] },
};
const flag15545: Fig.Option = {
  name: "--web-server-deny-all",
  description: "Denies all incoming traffic to the Airflow web server",
};
const flag15547: Fig.Option = {
  name: "--web-server-machine-type",
  description:
    "machine type used by the Airflow web server. The list of available machine\ntypes is available here: https://cloud.google.com/composer/pricing",
  args: {
    name: "WEB_SERVER_MACHINE_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag15548: Fig.Option = {
  name: "--web-server-memory",
  description:
    "Memory allocated to Airflow web server, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB",
  args: {
    name: "WEB_SERVER_MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15549: Fig.Option = {
  name: "--web-server-storage",
  description:
    "Storage allocated to Airflow web server, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB",
  args: {
    name: "WEB_SERVER_STORAGE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15586: Fig.Option = {
  name: "--worker-cpu",
  description: "CPU allocated to each Airflow worker",
  args: { name: "WORKER_CPU", description: "Float", suggestions: [] },
};
const flag15597: Fig.Option = {
  name: "--worker-memory",
  description:
    "Memory allocated to Airflow worker, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB",
  args: {
    name: "WORKER_MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15608: Fig.Option = {
  name: "--worker-storage",
  description:
    "Storage allocated to Airflow worker, ex. 600MB, 3GB, 2. If units are not provided,\ndefaults to GB",
  args: {
    name: "WORKER_STORAGE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};

const completionSpec: Fig.Spec = {
  name: "composer",
  description: "Create and manage Cloud Composer Environments",
  subcommands: [
    {
      name: "environments",
      description: "Create and manage Cloud Composer environments",
      subcommands: [
        {
          name: "check-upgrade",
          description:
            "Check that upgrading a Cloud Composer environment does not result in PyPI module conflicts",
          options: [
            flag42,
            flag46,
            flag376,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5682,
            flag5699,
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "create",
          description: "Create and initialize a Cloud Composer environment",
          options: [
            flag42,
            flag46,
            {
              name: "--airflow-configs",
              description:
                "A list of Airflow software configuration override KEY=VALUE pairs to set. For\ninformation on how to structure KEYs and VALUEs, run\n`$ {top_command} help composer environments update`",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag375,
            {
              name: "--airflow-version",
              description:
                "Version of Apache Airflow to run in the environment.\n+\n      Must be of the form `X[.Y[.Z]]`, where `[]` denotes optional fragments.\n      Examples: `2`, `2.3`, `2.3.4`.\n+\n      The current Cloud Composer version will be used within the created\n      environment. The Apache Airflow version is a semantic version or an alias\n      in the form of major or major.minor version numbers, resolved to the\n      latest matching Apache Airflow version supported in the current Cloud\n      Composer version. The resolved version is stored in the created\n      environment",
              args: {
                name: "AIRFLOW_VERSION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--cloud-sql-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Cloud SQL network. This should have a size\nof the netmask not greater than 24.\n+\nCannot be specified unless `--enable-private-environment` is also\nspecified",
              args: {
                name: "CLOUD_SQL_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2005,
            {
              name: "--cloud-sql-preferred-zone",
              description:
                "Select cloud sql preferred zone, supported for Composer 2 Environments",
              args: {
                name: "CLOUD_SQL_PREFERRED_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--cluster-ipv4-cidr",
              description:
                "IP address range for the pods in this cluster in CIDR notation\n(e.g. 10.0.0.0/14).\n+\nWhen used with Composer 1.x, cannot be specified unless `--enable-ip-alias`\nis also specified",
              args: {
                name: "CLUSTER_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--cluster-secondary-range-name",
              description:
                "Secondary range to be used as the source for pod IPs. Alias ranges will be\nallocated from this secondary range. NAME must be the name of an existing\nsecondary range in the cluster subnetwork.\n+\nWhen used with Composer 1.x, cannot be specified unless `--enable-ip-alias`\nis also specified",
              args: {
                name: "CLUSTER_SECONDARY_RANGE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--composer-internal-ipv4-cidr-block",
              description:
                "The IP range in CIDR notation to use internally by Cloud Composer.\nThis should have a netmask length of 20.\nCan be specified for Composer 3 or greater",
              args: {
                name: "COMPOSER_INTERNAL_IPV4_CIDR_BLOCK",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--composer-network-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Composer network. This must have\na size of the netmask between 24 and 29.\n+\nCan be specified for Composer 2.X or greater. Cannot be specified\nunless `--enable-private-environment` is also specified",
              args: {
                name: "COMPOSER_NETWORK_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--connection-subnetwork",
              description:
                "Subnetwork from which an IP address for internal communications will be\nreserved. Needs to belong to the Compute network to which the environment is\nconnected. Can be the same subnetwork as the one to which the environment is\nconnected.\n+\nCan be specified for Composer 2.X or greater. Cannot be specified\nunless `--enable-private-environment` is also specified",
              args: {
                name: "CONNECTION_SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--connection-type",
              description:
                "Mode of internal communication within the Composer environment. Must be one\nof `VPC_PEERING` or `PRIVATE_SERVICE_CONNECT`.\n+\nCan be specified for Composer 2.X or greater. Cannot be specified\nunless `--enable-private-environment` is also specified. Cannot be set to\n`VPC_PEERING` if `--connection-subnetwork` is also specified.\n+\n_CONNECTION_TYPE_ must be one of: *connection-type-unspecified*, *private-service-connect*, *vpc-peering*",
              args: {
                name: "CONNECTION_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "connection-type-unspecified",
                  "private-service-connect",
                  "vpc-peering",
                ],
              },
            },
            flag2667,
            flag2668,
            flag2669,
            flag2670,
            flag3551,
            flag3575,
            flag3587,
            {
              name: "--disable-private-environment",
              description:
                "Enables internet connection for Composer components.\n+\nWhen used with Composer 2, this means the environment cluster is\ncreated with public IP addresses on the cluster nodes",
            },
            {
              name: "--disk-size",
              description:
                "The disk size for each VM node in the environment. The minimum size is 20GB, and the maximum is 64TB. Specified value must be an integer multiple of gigabytes. Cannot be updated after the environment has been created. If units are not provided, defaults to GB",
              args: {
                name: "DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag4066,
            flag4145,
            {
              name: "--enable-ip-alias",
              description:
                "Enable use of link:https://cloud.google.com/compute/docs/alias-ip[alias IPs]\nfor Pod IPs. This will require at least two secondary ranges in the\nsubnetwork, one for the pod IPs and another to reserve space for the\nservices range",
            },
            {
              name: "--enable-ip-masq-agent",
              description:
                "When enabled, the\n link:https://cloud.google.com/composer/docs/enable-ip-masquerade-agent[IP Masquerade Agent]\nis deployed to your environment's cluster.\nIt performs many-to-one IP address translations to hide a pod's IP address\nbehind the cluster node's IP address. This is done when sending traffic to\ndestinations outside the cluster's pod CIDR range.\n+\nWhen used with Composer 1.x, cannot be specified unless `--enable-ip-alias`\nis also specified",
            },
            flag4205,
            flag4215,
            flag4255,
            {
              name: "--enable-private-endpoint",
              description:
                "Environment cluster is managed using the private IP address of the master\nAPI endpoint. Therefore access to the master endpoint must be from\ninternal IP addresses.\n+\nIf not specified, the master API endpoint will be accessible by its public\nIP address.\n+\nCannot be specified unless `--enable-private-environment` is also\nspecified",
            },
            {
              name: "--enable-private-environment",
              description:
                "Disables internet connection from any Composer component.\n+\nWhen used with Composer 2, the environment cluster is created with\nno public IP addresses on the cluster nodes. If not specified,\ncluster nodes will be assigned public IP addresses.\n+\nWhen used with Composer 1.x, cannot be specified unless `--enable-ip-alias`\nis also specified",
            },
            {
              name: "--enable-privately-used-public-ips",
              description:
                "When enabled GKE pods and services may use public(non-RFC1918) IP ranges\nprivately. The ranges are specified by '--cluster-ipv4-cidr' and\n`--services-ipv4-cidr` flags.\n+\nCannot be specified unless `--enable-private-environment` is also\nspecified",
            },
            flag4292,
            flag4323,
            {
              name: "--env-variables",
              description:
                "A comma-delimited list of environment variable `NAME=VALUE` pairs to provide to the Airflow scheduler, worker, and webserver processes. NAME may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. To include commas as part of a `VALUE`, see `{top_command} topic escaping` for information about overriding the delimiter",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4475,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--image-version",
              description:
                "Version of the image to run in the environment.\n+\n      The image version encapsulates the versions of both Cloud Composer\n      and Apache Airflow. Must be of the form\n      `composer-A[.B.C[-D.E]]-airflow-X[.Y[.Z]]`, where `[]` denotes optional\n      fragments.\n+\n      Examples: `composer-2-airflow-2`, `composer-2-airflow-2.2`,\n      `composer-2.1.2-airflow-2.3.4`.\n+\n      The Cloud Composer portion of the image version is a semantic version or\n      an alias in the form of major version number or `latest`, resolved to the\n      current Cloud Composer version. The Apache Airflow portion of the image\n      version is a semantic version or an alias in the form of major or\n      major.minor version numbers, resolved to the latest matching Apache\n      Airflow version supported in the given Cloud Composer version. The\n      resolved versions are stored in the created environment",
              args: {
                name: "IMAGE_VERSION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            {
              name: "--kms-keyring",
              description:
                "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
              args: {
                name: "KMS_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-location",
              description:
                "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
              args: {
                name: "KMS_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-project",
              description:
                "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
              args: {
                name: "KMS_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6844,
            flag7356,
            {
              name: "--machine-type",
              description:
                "The Compute Engine\nlink:https://cloud.google.com/compute/docs/machine-types[machine type]\nto use for nodes.\nFor example `--machine-type=n1-standard-1`",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag7492,
            flag7508,
            flag7516,
            flag7564,
            {
              name: "--master-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the cluster master network. This should have a\nsize of the netmask between 23 and 28.\n+\nCannot be specified unless `--enable-private-environment` is also\nspecified",
              args: {
                name: "MASTER_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7714,
            flag7919,
            flag8263,
            flag8158,
            {
              name: "--node-count",
              description:
                "The number of nodes to create to run the environment",
              args: { name: "NODE_COUNT", description: "Int", suggestions: [] },
            },
            {
              name: "--oauth-scopes",
              description:
                "The set of Google API scopes to be made available on all of the node VMs. Defaults to ['https://www.googleapis.com/auth/cloud-platform']. Cannot be updated",
              args: { name: "SCOPE", description: "List", suggestions: [] },
            },
            flag11637,
            {
              name: "--python-version",
              description:
                "The Python version to be used within the created environment. Supplied value should represent the desired major Python version. Cannot be updated. _PYTHON_VERSION_ must be one of:\n+\n*2*::: Created environment will use Python 2\n*3*::: Created environment will use Python 3\n:::\n+",
              args: {
                name: "PYTHON_VERSION",
                description: "String",
                suggestions: ["2", "3"],
              },
            },
            flag11946,
            flag13319,
            flag13320,
            flag13321,
            flag13322,
            {
              name: "--service-account",
              description:
                "The Google Cloud Platform service account to be used by the node VMs. You must explicitly specify a service account. Cannot be updated",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--services-ipv4-cidr",
              description:
                "IP range for the services IPs.\n+\nCan be specified as a netmask size (e.g. '/20') or as in CIDR notion\n(e.g. '10.100.0.0/20'). If given as a netmask size, the IP range will\nbe chosen automatically from the available space in the network.\n+\nIf unspecified, the services CIDR range will be chosen with a default\nmask size.\n+\nWhen used with Composer 1.x, cannot be specified unless `--enable-ip-alias`\nis also specified",
              args: {
                name: "SERVICES_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--services-secondary-range-name",
              description:
                "Secondary range to be used for services (e.g. ClusterIPs). NAME must be the\nname of an existing secondary range in the cluster subnetwork.\n+\nWhen used with Composer 1.x, cannot be specified unless `--enable-ip-alias`\nis also specified",
              args: {
                name: "SERVICES_SECONDARY_RANGE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag13907,
            flag13912,
            flag13920,
            {
              name: "--storage-bucket",
              description:
                "Name of an exisiting Cloud Storage bucket to be used by the environment.\nSupported only for Composer 2.4.X and above",
              args: {
                name: "STORAGE_BUCKET",
                description: "String",
                suggestions: [],
              },
            },
            flag14544,
            flag14573,
            {
              name: "--tags",
              description:
                "The set of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC 1035. Cannot be updated",
              args: { name: "TAG", description: "List", suggestions: [] },
            },
            flag14975,
            flag15014,
            flag15015,
            flag15016,
            flag15315,
            flag15424,
            flag15542,
            {
              name: "--web-server-allow-ip",
              description:
                'Specifies a list of IPv4 or IPv6 ranges that will be allowed to access the\nAirflow web server. By default, all IPs are allowed to access the web\nserver.\n+\nThis is a repeated argument that can be specified multiple times to specify\nmultiple IP ranges.\n(e.g. `--web-server-allow-ip=ip_range=130.211.160.0/28,description="office network"`\n`--web-server-allow-ip=ip_range=130.211.114.0/28,description="legacy network"`)\n+\n*ip_range*::: IPv4 or IPv6 range of addresses allowed to access the Airflow\nweb server.\n+\n*description*::: An optional description of the IP range',
              args: {
                name: "WEB_SERVER_ALLOW_IP",
                description: "Dict",
                suggestions: [],
              },
            },
            flag15544,
            flag15545,
            {
              name: "--web-server-ipv4-cidr",
              description:
                "IPv4 CIDR range to use for the Airflow web server network. This should have\na size of the netmask between 24 and 29.\n+\nCannot be specified unless `--enable-private-environment` is also\nspecified",
              args: {
                name: "WEB_SERVER_IPV4_CIDR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag15547,
            flag15548,
            flag15549,
            flag15586,
            flag15597,
            flag15608,
            {
              name: "--zone",
              description:
                "The Compute Engine zone in which the environment will be created. For example `--zone=us-central1-a`",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "database-failover",
          description: "Run a database failover operation",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete one or more Cloud Composer environments",
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
                "Region where Composer environment runs or in which to create the environment.\n+\nTo set the `location` attribute:\n* provide the argument `environments` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `composer/location`",
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
            name: "ENVIRONMENTS",
            description:
              "IDs of the environments or fully qualified identifiers for the environments.\n+\nTo set the `environment` attribute:\n* provide the argument `environments` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Get details about a Cloud Composer environment",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "fetch-database-properties",
          description: "Fetch database properties",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the Cloud Composer environments under a project and location",
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
            flag7330,
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
          name: "list-packages",
          description: "List all PyPI modules installed in an Airflow worker",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--tree",
              description:
                'List PyPI packages, their versions and a dependency tree, as displayed by the "python -m pipdeptree --warn" command',
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "list-upgrades",
          description:
            "List the Cloud Composer image version upgrades for a specific environment",
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
            flag6844,
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
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "list-workloads",
          description:
            "List Composer workloads, supported in Composer 3 environments or greater",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "restart-web-server",
          description: "Restart web server for a Cloud Composer environment",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "run",
          description:
            "Run an Airflow sub-command remotely in a Cloud Composer environment",
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
            flag6844,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ENVIRONMENT",
              description:
                "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
            },
            {
              name: "SUBCOMMAND",
              description:
                "The Airflow CLI subcommand to run. Available subcommands include (listed with Airflow versions that support): backfill [**, 2.0.0), clear [**, 2.0.0), connections [**, 3.2.0), dag_state [**, 2.0.0), dags [1.10.14, 3.2.0), db [2.3.0, 3.0.0), delete_dag [1.10.1, 2.0.0), kerberos [**, 3.2.0), kubernetes [2.1.4, 3.2.0), list-import-errors [**, 3.0.0), list_dag_runs [1.10.2, 2.0.0), list_dags [**, 2.0.0), list_tasks [**, 2.0.0), next_execution [1.10.2, 2.0.0), pause [**, 2.0.0), pool [**, 2.0.0), pools [1.10.14, 3.2.0), render [**, 2.0.0), roles [2.0.0, 3.2.0), run [**, 2.0.0), sync-perm [1.10.14, 3.2.0), sync_perm [1.10.2, 2.0.0), task_failed_deps [**, 2.0.0), task_state [**, 2.0.0), tasks [1.10.14, 3.2.0), test [**, 2.0.0), trigger_dag [**, 2.0.0), unpause [**, 2.0.0), upgrade_check [1.10.15, 2.0.0), users [1.10.14, 3.2.0), variables [**, 3.2.0), version [**, 3.2.0) (see https://airflow.apache.org/docs/apache-airflow/stable/cli-and-env-variables-ref.html for more info)",
            },
            {
              name: "SUBCOMMAND_NESTED",
              description:
                "Additional subcommand in case it is nested. The following is a list of allowed nested subcommands:\n- db: check, trim\n- all other subcommands: all nested subcommands are allowed",
              isOptional: true,
            },
            {
              name: "CMD_ARGS",
              description:
                "Command line arguments to the subcommand.\n+\nThe '--' argument must be specified between gcloud specific args on the left and CMD_ARGS on the right. Example:\n+\n{command} myenv trigger_dag -- some_dag --run_id=foo",
            },
          ],
        },
        {
          name: "snapshots",
          description: "Save and load snapshots of environment",
          subcommands: [
            {
              name: "load",
              description: "Load a snapshot into the environment",
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
                flag6844,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--skip-airflow-overrides-setting",
                  description:
                    "When specified, skips setting Airflow overrides from the snapshot",
                },
                {
                  name: "--skip-environment-variables-setting",
                  description:
                    "When specified, skips setting environment variables from the snapshot",
                },
                {
                  name: "--skip-gcs-data-copying",
                  description:
                    "When specified, skips copying dags, plugins and data folders from\nthe snapshot",
                },
                {
                  name: "--skip-pypi-packages-installation",
                  description:
                    "When specified, skips the installation of custom PyPI packages from\nthe snapshot",
                },
                {
                  name: "--snapshot-path",
                  description:
                    "The Cloud Storage path to load the snapshot from. It must start with prefix gs:// and one needs to specify a single snapshot that should be loaded",
                  args: {
                    name: "SNAPSHOT_PATH",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ENVIRONMENT",
                description:
                  "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
              },
            },
            {
              name: "save",
              description: "Save a snapshot of the environment",
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
                flag6844,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--snapshot-location",
                  description:
                    "The Cloud Storage location where to save the snapshot. It must start with the prefix gs://. Default value is /snapshots directory in the Cloud Storage bucket of the environment",
                  args: {
                    name: "SNAPSHOT_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ENVIRONMENT",
                description:
                  "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
              },
            },
          ],
        },
        {
          name: "storage",
          description:
            "Manage Cloud Storage objects stored as part of Cloud Composer environments",
          subcommands: [
            {
              name: "dags",
              description: "Manage DAGs for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete DAG files from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the\ndags Cloud Storage subdirectory. If not specified, the entire contents\nof the dags subdirectory will be deleted",
                    isOptional: true,
                  },
                },
                {
                  name: "export",
                  description:
                    "Export DAGs from an environment into local storage or Cloud Storage",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3473,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the\ndags/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
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
                  name: "import",
                  description:
                    "Import DAGs from local storage or Cloud Storage into an environment",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the dags/ directory in the environment's\nCloud Storage bucket into which to import files. May contain forward\nslashes to delimit multiple levels of subdirectory nesting, but should not\ncontain leading or trailing slashes. If the DESTINATION does not exist, it\nwill be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be\nimported into the dags/ subdirectory in the environment's Cloud Storage\nbucket. Cloud Storage paths must begin with 'gs://'",
                      args: {
                        name: "SOURCE",
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
                  name: "list",
                  description:
                    "List the DAG files for a Cloud Composer environment",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
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
              name: "data",
              description: "Manage data for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete data from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the\ndata Cloud Storage subdirectory. If not specified, the entire contents\nof the data subdirectory will be deleted",
                    isOptional: true,
                  },
                },
                {
                  name: "export",
                  description:
                    "Export data from an environment into local storage or Cloud Storage",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3473,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the\ndata/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
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
                  name: "import",
                  description:
                    "Import data from local storage or Cloud Storage into an environment",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the data/ directory in the environment's\nCloud Storage bucket into which to import files. May contain forward\nslashes to delimit multiple levels of subdirectory nesting, but should not\ncontain leading or trailing slashes. If the DESTINATION does not exist, it\nwill be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be\nimported into the data/ subdirectory in the environment's Cloud Storage\nbucket. Cloud Storage paths must begin with 'gs://'",
                      args: {
                        name: "SOURCE",
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
                  name: "list",
                  description: "List the data for a Cloud Composer environment",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
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
              name: "plugins",
              description: "Manage plugins for Cloud Composer environments",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete plugins from an Cloud Composer environment's Cloud Storage bucket",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "TARGET",
                    description:
                      "A relative path to a file or subdirectory to delete within the\nplugins Cloud Storage subdirectory. If not specified, the entire contents\nof the plugins subdirectory will be deleted",
                    isOptional: true,
                  },
                },
                {
                  name: "export",
                  description:
                    "Export plugins from an environment into local storage or Cloud Storage",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3473,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--source",
                      description:
                        "An optional relative path to a file or directory to be exported from the\nplugins/ subdirectory in the environment's Cloud Storage bucket",
                      args: {
                        name: "SOURCE",
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
                  name: "import",
                  description:
                    "Import plugins from local storage or Cloud Storage into an environment",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--destination",
                      description:
                        "An optional subdirectory under the plugins/ directory in the environment's\nCloud Storage bucket into which to import files. May contain forward\nslashes to delimit multiple levels of subdirectory nesting, but should not\ncontain leading or trailing slashes. If the DESTINATION does not exist, it\nwill be created",
                      args: {
                        name: "DESTINATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--source",
                      description:
                        "Path to a local directory/file or Cloud Storage bucket/object to be\nimported into the plugins/ subdirectory in the environment's Cloud Storage\nbucket. Cloud Storage paths must begin with 'gs://'",
                      args: {
                        name: "SOURCE",
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
                  name: "list",
                  description:
                    "List the plugins for a Cloud Composer environment",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4491,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6843,
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
          ],
        },
        {
          name: "update",
          description: "Update properties of a Cloud Composer environment",
          options: [
            flag42,
            flag46,
            flag375,
            flag376,
            flag720,
            flag1201,
            {
              name: "--clear-airflow-configs",
              description:
                "Removes all Airflow config overrides from the environment",
            },
            {
              name: "--clear-env-variables",
              description:
                "Removes all environment variables from the environment.\n+\nEnvironment variables that have system-provided defaults cannot be unset\nwith the `--remove-env-variables` or `--clear-env-variables` flags; only\nthe user-supplied overrides will be removed",
            },
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            {
              name: "--clear-maintenance-window",
              description:
                "Clears the maintenance window settings.\nCan be specified for Composer 3 or greater",
            },
            {
              name: "--clear-pypi-packages",
              description:
                "Removes all PyPI packages from the environment.\n+\nPyPI packages that are required by the environment's core software\ncannot be uninstalled with the `--remove-pypi-packages` or\n`--clear-pypi-packages` flags",
            },
            flag2005,
            flag2292,
            flag2667,
            flag2668,
            flag2669,
            flag2670,
            flag3551,
            {
              name: "--disable-high-resilience",
              description:
                "Disable high resilience, supported for Composer 2 Environments",
            },
            flag3575,
            {
              name: "--disable-master-authorized-networks",
              description:
                "Disable link:https://cloud.google.com/kubernetes-engine/docs/how-to/authorized-networks[Master Authorized Networks feature]\nin the Composer Environment's GKE cluster",
            },
            flag3587,
            {
              name: "--disable-private-environment",
              description:
                "Enable internet connection from any Composer component,\nsupported in Composer 3 environments or greater",
            },
            {
              name: "--disable-scheduled-snapshot-creation",
              description:
                "Disables automated snapshots creation.\nCan be specified for Composer 2.0.32 or greater",
            },
            {
              name: "--disable-triggerer",
              description:
                "(DEPRECATED)     Disable a triggerer, supported in the Environments with Composer 2.0.31 and Airflow 2.2.5 and greater.\n+\nThis flag is deprecated. Use --triggerer-count 0 instead",
            },
            {
              name: "--disable-vpc-connectivity",
              description:
                "Disable connectivity with a user's VPC network,\nsupported in Composer 3 environments or greater",
            },
            flag4066,
            flag4145,
            flag4205,
            flag4215,
            flag4255,
            {
              name: "--enable-private-environment",
              description:
                "Disable internet connection from any Composer component,\nsupported in Composer 3 environments or greater",
            },
            flag4292,
            flag4323,
            flag4475,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5682,
            flag5699,
            flag6844,
            flag7356,
            flag7492,
            flag7508,
            flag7516,
            flag7564,
            flag7714,
            flag7919,
            flag8263,
            flag8158,
            {
              name: "--node-count",
              description:
                "The new number of nodes running the environment. Must be >= 3",
              args: {
                name: "NODE_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--remove-airflow-configs",
              description: "A list of Airflow config override keys to remove",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            {
              name: "--remove-env-variables",
              description:
                "A list of environment variables to remove.\n+\nEnvironment variables that have system-provided defaults cannot be unset\nwith the `--remove-env-variables` or `--clear-env-variables` flags; only\nthe user-supplied overrides will be removed",
              args: { name: "NAME", description: "List", suggestions: [] },
            },
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            {
              name: "--remove-pypi-packages",
              description:
                "A list of PyPI package names to remove.\n+\nPyPI packages that are required by the environment's core software\ncannot be uninstalled with the `--remove-pypi-packages` or\n`--clear-pypi-packages` flags",
              args: { name: "PACKAGE", description: "List", suggestions: [] },
            },
            flag13319,
            flag13320,
            flag13321,
            flag13322,
            flag13907,
            flag13912,
            flag13920,
            flag14544,
            flag14573,
            flag14975,
            flag15014,
            flag15015,
            flag15016,
            {
              name: "--update-airflow-configs",
              description:
                "A list of Airflow config override KEY=VALUE pairs to set. If a config\noverride exists, its value is updated; otherwise, a new config override\nis created.\n+\nKEYs should specify the configuration section and property name,\nseparated by a hyphen, for example `core-print_stats_interval`. The\nsection may not contain a closing square brace or period. The property\nname must be non-empty and may not contain an equals sign, semicolon,\nor period. By convention, property names are spelled with\n`snake_case.` VALUEs may contain any character",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--update-env-variables",
              description:
                "A list of environment variable NAME=VALUE pairs to set and provide to the\nAirflow scheduler, worker, and webserver processes. If an environment\nvariable exists, its value is updated; otherwise, a new environment\nvariable is created.\n+\nNAMEs are the environment variable names and may contain upper and\nlowercase letters, digits, and underscores; they must not begin with a\ndigit.\n+\nUser-specified environment variables should not be used to set Airflow\nconfiguration properties. Instead use the `--update-airflow-configs` flag",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--update-pypi-package",
              description:
                "A PyPI package to add to the environment. If a package exists, its\nvalue is updated; otherwise, a new package is installed.\n+\nThe value takes the form of: `PACKAGE[EXTRAS_LIST]VERSION_SPECIFIER`,\nas one would specify in a pip requirements file.\n+\nPACKAGE is specified as a package name, such as `numpy.` EXTRAS_LIST is\na comma-delimited list of PEP 508 distribution extras that may be\nempty, in which case the enclosing square brackets may be omitted.\nVERSION_SPECIFIER is an optional PEP 440 version specifier. If both\nEXTRAS_LIST and VERSION_SPECIFIER are omitted, the `=` and\neverything to the right may be left empty.\n+\nThis is a repeated argument that can be specified multiple times to\nupdate multiple packages. If PACKAGE appears more than once, the last\nvalue will be used",
              args: {
                name: "PACKAGE[EXTRAS_LIST]VERSION_SPECIFIER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--update-pypi-packages-from-file",
              description:
                "The path to a file containing a list of PyPI packages to install in\nthe environment. Each line in the file should contain a package\nspecification in the format of the update-pypi-package argument\ndefined above. The path can be a local file path or a Google Cloud Storage\nfile path (Cloud Storage file path starts with 'gs://')",
              args: {
                name: "UPDATE_PYPI_PACKAGES_FROM_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--update-web-server-allow-ip",
              description:
                "Specifies a list of IPv4 or IPv6 ranges that will be allowed to access the\nAirflow web server. By default, all IPs are allowed to access the web\nserver.\n+\n*ip_range*::: IPv4 or IPv6 range of addresses allowed to access the Airflow\nweb server.\n+\n*description*::: An optional description of the IP range",
              args: {
                name: "UPDATE_WEB_SERVER_ALLOW_IP",
                description: "Dict",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
            flag15542,
            flag15544,
            flag15545,
            flag15547,
            flag15548,
            flag15549,
            flag15586,
            flag15597,
            flag15608,
          ],
          args: {
            name: "ENVIRONMENT",
            description:
              "ID of the environment or fully qualified identifier for the environment.\n+\nTo set the `environment` attribute:\n* provide the argument `environment` on the command line",
          },
        },
        {
          name: "user-workloads-config-maps",
          description:
            "Create and manage user workloads ConfigMaps of environment",
          subcommands: [
            {
              name: "create",
              description: "Create a user workloads ConfigMap",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2262,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description: "Delete a user workloads ConfigMap",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONFIG_MAP_NAME",
                description: "Name of the ConfigMap",
                isOptional: true,
              },
            },
            {
              name: "describe",
              description: "Get details about a user workloads ConfigMap",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONFIG_MAP_NAME",
                description: "Name of the ConfigMap",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List user workloads ConfigMaps",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
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
              description: "Update a user workloads ConfigMap",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2262,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
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
          name: "user-workloads-secrets",
          description:
            "Create and manage user workloads Secrets of environment",
          subcommands: [
            {
              name: "create",
              description: "Create a user workloads Secret",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag13409,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description: "Delete a user workloads Secret",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SECRET_NAME",
                description: "Name of the Secret",
                isOptional: true,
              },
            },
            {
              name: "describe",
              description: "Get details about a user workloads Secret",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SECRET_NAME",
                description: "Name of the Secret",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List user workloads Secrets",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
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
              description: "Update a user workloads Secret",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4491,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6843,
                flag7356,
                flag11637,
                flag11946,
                flag13409,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Composer operations",
      subcommands: [
        {
          name: "delete",
          description: "Delete one or more completed Cloud Composer operations",
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
                "Compute Engine region in which to create the operations.\n+\nTo set the `location` attribute:\n* provide the argument `operations` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `composer/location`",
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
          description: "Get details about an asynchronous operation",
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
            flag6605,
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
          description: "Lists environment operations",
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
            flag7330,
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
          description: "Wait for asynchronous operation to complete",
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
            flag6605,
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
