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
const flag371: Fig.Option = {
  name: "--aggregation-interval",
  description:
    "The aggregation interval for the logs. Default value is INTERVAL_5_SEC. _AGGREGATION_INTERVAL_ must be one of:\n+\n*interval-1-min*::: Aggregate logs in 1m intervals.\n*interval-10-min*::: Aggregate logs in 10m intervals.\n*interval-15-min*::: Aggregate logs in 15m intervals.\n*interval-30-sec*::: Aggregate logs in 30s intervals.\n*interval-5-min*::: Aggregate logs in 5m intervals.\n*interval-5-sec*::: Aggregate logs in 5s intervals.\n:::\n+",
  args: {
    name: "AGGREGATION_INTERVAL",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "interval-1-min",
      "interval-10-min",
      "interval-15-min",
      "interval-30-sec",
      "interval-5-min",
      "interval-5-sec",
    ],
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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2581: Fig.Option = {
  name: "--cross-project-metadata",
  description:
    "Determines whether to include cross project annotations in the logs.\nThis field is available only for organization configurations. If not\nspecified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED. _CROSS_PROJECT_METADATA_ must be one of:\n+\n*cross-project-metadata-disabled*::: When CROSS_PROJECT_METADATA_DISABLED, metadata from other projects will\nnot be included in the logs.\n*cross-project-metadata-enabled*::: When CROSS_PROJECT_METADATA_ENABLED, metadata from other projects will be\nincluded in the logs.\n:::\n+",
  args: {
    name: "CROSS_PROJECT_METADATA",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "cross-project-metadata-disabled",
      "cross-project-metadata-enabled",
    ],
  },
};
const flag3314: Fig.Option = {
  name: "--description",
  description: "The description of the connectivity test",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3337: Fig.Option = {
  name: "--description",
  description:
    "The user-supplied description of the VPC Flow Logs configuration.\nMaximum of 512 characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3371: Fig.Option = {
  name: "--destination-cloud-sql-instance",
  description: "A Cloud SQL instance URI as the destination endpoint",
  args: {
    name: "DESTINATION_CLOUD_SQL_INSTANCE",
    description: "String",
    suggestions: [],
  },
};
const flag3389: Fig.Option = {
  name: "--destination-forwarding-rule",
  description: "A forwarding rule URI as the destination endpoint",
  args: {
    name: "DESTINATION_FORWARDING_RULE",
    description: "String",
    suggestions: [],
  },
};
const flag3390: Fig.Option = {
  name: "--destination-fqdn",
  description:
    "A hostname as the destination endpoint. Only applicable for Google Kubernetes Engine",
  args: { name: "DESTINATION_FQDN", description: "String", suggestions: [] },
};
const flag3397: Fig.Option = {
  name: "--destination-gke-master-cluster",
  description:
    "A cluster URI for Google Kubernetes Engine master as the destination endpoint",
  args: {
    name: "DESTINATION_GKE_MASTER_CLUSTER",
    description: "String",
    suggestions: [],
  },
};
const flag3400: Fig.Option = {
  name: "--destination-gke-pod",
  description: "A GKE Pod URI as the destination endpoint",
  args: { name: "DESTINATION_GKE_POD", description: "String", suggestions: [] },
};
const flag3404: Fig.Option = {
  name: "--destination-instance",
  description: "A Compute Engine instance URI as the destination endpoint",
  args: {
    name: "DESTINATION_INSTANCE",
    description: "String",
    suggestions: [],
  },
};
const flag3409: Fig.Option = {
  name: "--destination-ip-address",
  description:
    "The IP address of the destination which can be an external or internal IP",
  args: {
    name: "DESTINATION_IP_ADDRESS",
    description: "String",
    suggestions: [],
  },
};
const flag3415: Fig.Option = {
  name: "--destination-network",
  description:
    "A VPC network URI for the destination endpoint. Used only when the source is an external\nIP address endpoint, and the destination is an internal IP address endpoint",
  args: { name: "DESTINATION_NETWORK", description: "String", suggestions: [] },
};
const flag3424: Fig.Option = {
  name: "--destination-port",
  description:
    "The IP protocol port of the destination. Only applicable when protocol is\nTCP or UDP",
  args: { name: "DESTINATION_PORT", description: "Int", suggestions: [] },
};
const flag3427: Fig.Option = {
  name: "--destination-project",
  description: "Project ID of the destination endpoint",
  args: { name: "DESTINATION_PROJECT", description: "String", suggestions: [] },
};
const flag3437: Fig.Option = {
  name: "--destination-redis-cluster",
  description: "A Redis cluster URI as the destination endpoint",
  args: {
    name: "DESTINATION_REDIS_CLUSTER",
    description: "String",
    suggestions: [],
  },
};
const flag3438: Fig.Option = {
  name: "--destination-redis-instance",
  description: "A Redis instance URI as the destination endpoint",
  args: {
    name: "DESTINATION_REDIS_INSTANCE",
    description: "String",
    suggestions: [],
  },
};
const flag4836: Fig.Option = {
  name: "--filter-expr",
  description:
    "Export filter used to define which VPC Flow Logs should be logged",
  args: { name: "FILTER_EXPR", description: "String", suggestions: [] },
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
const flag4923: Fig.Option = {
  name: "--flow-sampling",
  description:
    "The value of the field must be in (0, 1]. The sampling rate of VPC Flow\nLogs where 1.0 means all collected logs are reported.\nSetting the sampling rate to 0.0 is not allowed. If you want to disable VPC\nFlow Logs, use the state field instead.\nDefault value is 1.0",
  args: { name: "FLOW_SAMPLING", description: "Float", suggestions: [] },
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
const flag5954: Fig.Option = {
  name: "--interconnect-attachment",
  description:
    "Traffic will be logged from the Interconnect Attachment.\nFormat:\nprojects/{project_id}/regions/{region}/interconnectAttachments/{name}",
  args: {
    name: "INTERCONNECT_ATTACHMENT",
    description: "String",
    suggestions: [],
  },
};
const flag6418: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
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
const flag6973: Fig.Option = {
  name: "--location",
  description:
    "The location id of the networkMonitoringProvider resource.\n+\nTo set the `location` attribute:\n* provide the argument `--network-monitoring-provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6974: Fig.Option = {
  name: "--location",
  description:
    "The location id of the networkMonitoringProvider resource.\n+\nTo set the `location` attribute:\n* provide the argument `network_monitoring_provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6999: Fig.Option = {
  name: "--location",
  description:
    "The location id of the vpcFlowLogsConfig resource.\n+\nTo set the `location` attribute:\n* provide the argument `vpc_flow_logs_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7044: Fig.Option = {
  name: "--location",
  description:
    "The location of the Network Monitoring Provider (example: `global`)",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7832: Fig.Option = {
  name: "--metadata",
  description:
    "Configures whether all, none or a subset of metadata fields should be\nadded to the reported VPC flow logs.\nDefault value is INCLUDE_ALL_METADATA. _METADATA_ must be one of:\n+\n*custom-metadata*::: Include only custom fields (specified in metadata_fields).\n*exclude-all-metadata*::: Exclude all metadata fields.\n*include-all-metadata*::: Include all metadata fields.\n:::\n+",
  args: {
    name: "METADATA",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "custom-metadata",
      "exclude-all-metadata",
      "include-all-metadata",
    ],
  },
};
const flag8191: Fig.Option = {
  name: "--network-monitoring-provider",
  description:
    "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider.\n+\nTo set the `network-monitoring-provider` attribute:\n* provide the argument `--network-monitoring-provider` on the command line",
  args: {
    name: "NETWORK_MONITORING_PROVIDER",
    description: "String",
    suggestions: [],
  },
};
const flag8192: Fig.Option = {
  name: "--network-monitoring-provider",
  description: "The ID of the Network Monitoring Provider",
  args: {
    name: "NETWORK_MONITORING_PROVIDER",
    description: "String",
    suggestions: [],
  },
};
const flag8290: Fig.Option = {
  name: "--network",
  description:
    "Traffic will be logged from VMs, VPN tunnels and Interconnect Attachments\nwithin the network.\nFormat: projects/{project_id}/global/networks/{name}",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag10895: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the vpcFlowLogsConfig resource.\n+\nTo set the `organization` attribute:\n* provide the argument `vpc_flow_logs_config` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [networkmanagement.organizations.locations.vpcFlowLogsConfigs]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10982: Fig.Option = {
  name: "--other-projects",
  description:
    "IDs of other projects involved in the connectivity test, besides\nthe source and destination project",
  args: { name: "OTHER_PROJECTS", description: "List", suggestions: [] },
};
const flag10998: Fig.Option = {
  name: "--output-file",
  description: "The path to save the downloaded install script",
  args: { name: "OUTPUT_FILE", description: "String", suggestions: [] },
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
const flag11763: Fig.Option = {
  name: "--protocol",
  description:
    'Type of protocol for the test. When not provided, "TCP" is assumed',
  args: { name: "PROTOCOL", description: "String", suggestions: [] },
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
const flag13955: Fig.Option = {
  name: "--source-app-engine-version",
  description: "App Engine version URI as the source endpoint",
  args: {
    name: "SOURCE_APP_ENGINE_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag13963: Fig.Option = {
  name: "--source-cloud-function",
  description: "A Cloud function URI as the source endpoint",
  args: {
    name: "SOURCE_CLOUD_FUNCTION",
    description: "String",
    suggestions: [],
  },
};
const flag13965: Fig.Option = {
  name: "--source-cloud-run-job",
  description: "Cloud Run job URI as the source endpoint",
  args: {
    name: "SOURCE_CLOUD_RUN_JOB",
    description: "String",
    suggestions: [],
  },
};
const flag13966: Fig.Option = {
  name: "--source-cloud-run-revision",
  description: "Cloud Run revision URI as the source endpoint",
  args: {
    name: "SOURCE_CLOUD_RUN_REVISION",
    description: "String",
    suggestions: [],
  },
};
const flag13967: Fig.Option = {
  name: "--source-cloud-sql-instance",
  description: "A Cloud SQL instance URI as the source endpoint",
  args: {
    name: "SOURCE_CLOUD_SQL_INSTANCE",
    description: "String",
    suggestions: [],
  },
};
const flag14017: Fig.Option = {
  name: "--source-gke-master-cluster",
  description:
    "A cluster URI for Google Kubernetes Engine master as the source endpoint",
  args: {
    name: "SOURCE_GKE_MASTER_CLUSTER",
    description: "String",
    suggestions: [],
  },
};
const flag14018: Fig.Option = {
  name: "--source-gke-pod",
  description: "A GKE Pod URI as the source endpoint",
  args: { name: "SOURCE_GKE_POD", description: "String", suggestions: [] },
};
const flag14034: Fig.Option = {
  name: "--source-instance",
  description: "A Compute Engine instance URI as the source endpoint",
  args: { name: "SOURCE_INSTANCE", description: "String", suggestions: [] },
};
const flag14049: Fig.Option = {
  name: "--source-ip-address",
  description:
    "The IP address of the source which can be an external or internal IP",
  args: { name: "SOURCE_IP_ADDRESS", description: "String", suggestions: [] },
};
const flag14065: Fig.Option = {
  name: "--source-network-type",
  description:
    "Type of the network where the source is located. _SOURCE_NETWORK_TYPE_ must be one of:\n+\n*gcp-network*::: A VPC network. Should be used for internal IP addresses in VPC networks. The `source-network` field should be set to the URI of this network. Only endpoints within this network will be considered.\n*internet*::: Internet. Should be used for internet-routable external IP addresses or IP addresses for global Google APIs and services.\n*non-gcp-network*::: A network outside of Google Cloud (for example, an on-premises network or another cloud provider network). Should be used for internal IP addresses outside of Google Cloud. The `source-network`  field should be set to the URI of the VPC network containing a corresponding Cloud VPN tunnel, Cloud Interconnect VLAN attachment, or a router appliance instance. Only endpoints reachable from the provided VPC network via the routes to networks outside of Google Cloud will be considered.\n*unspecified*::: Unspecified. The test will analyze all possible IP address locations. This might take longer and produce inaccurate or ambiguous results, so prefer specifying an explicit network type. The `source-project` field should be set to the project where the Google Cloud endpoint is located, or where the endpoint outside of Google Cloud should be reachable from (via routes to networks outside of Google Cloud). The project might also be inferred from the Connectivity Test project or other projects referenced in the request.\n:::\n+",
  args: {
    name: "SOURCE_NETWORK_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["gcp-network", "internet", "non-gcp-network", "unspecified"],
  },
};
const flag14066: Fig.Option = {
  name: "--source-network",
  description:
    "A VPC network URI for the source endpoint. Used according to the `source-network-type`\nflag",
  args: { name: "SOURCE_NETWORK", description: "String", suggestions: [] },
};
const flag14071: Fig.Option = {
  name: "--source-project",
  description: "Project ID of the source endpoint",
  args: { name: "SOURCE_PROJECT", description: "String", suggestions: [] },
};
const flag14398: Fig.Option = {
  name: "--state",
  description:
    "The state of the VPC Flow Log configuration. Default value is ENABLED.\nWhen creating a new configuration, it must be enabled.\nSetting state=DISABLED will pause the log generation for this config. _STATE_ must be one of:\n+\n*disabled*::: When DISABLED, this configuration will not generate logs.\n*enabled*::: When ENABLED, this configuration will generate logs.\n:::\n+",
  args: {
    name: "STATE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["disabled", "enabled"],
  },
};
const flag14523: Fig.Option = {
  name: "--subnet",
  description:
    "Traffic will be logged from VMs within the subnetwork.\nFormat: projects/{project_id}/regions/{region}/subnetworks/{name}",
  args: { name: "SUBNET", description: "String", suggestions: [] },
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
const flag15528: Fig.Option = {
  name: "--vpn-tunnel",
  description:
    "Traffic will be logged from the VPN Tunnel.\nFormat: projects/{project_id}/regions/{region}/vpnTunnels/{name}",
  args: { name: "VPN_TUNNEL", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "network-management",
  description: "Manage Network Management resources",
  subcommands: [
    {
      name: "connectivity-tests",
      description: "Manage Network Management ConnectivityTests",
      subcommands: [
        {
          name: "create",
          description: "Create a new connectivity test",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--bypass-firewall-checks",
              description:
                "This boolean controls whether to skip firewall checking",
            },
            flag2292,
            flag3314,
            flag3371,
            flag3389,
            flag3390,
            flag3397,
            flag3400,
            flag3404,
            flag3409,
            flag3415,
            flag3424,
            flag3427,
            flag3437,
            flag3438,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6418,
            flag7356,
            flag10982,
            flag11637,
            flag11763,
            flag11946,
            {
              name: "--round-trip",
              description:
                "This boolean controls whether return traces (from the destination to the\nsource) will be additionally calculated if packet successfully reaches\nthe destination from the source",
            },
            flag13955,
            flag13963,
            flag13965,
            flag13966,
            flag13967,
            flag14017,
            flag14018,
            flag14034,
            flag14049,
            flag14066,
            flag14065,
            flag14071,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test.\n+\nTo set the `connectivity_test` attribute:\n* provide the argument `connectivity_test` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a connectivity test",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test.\n+\nTo set the `connectivity_test` attribute:\n* provide the argument `connectivity_test` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a connectivity test",
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
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test.\n+\nTo set the `connectivity_test` attribute:\n* provide the argument `connectivity_test` on the command line",
          },
        },
        {
          name: "list",
          description: "List connectivity tests",
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
        {
          name: "rerun",
          description: "Rerun a connectivity test",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test.\n+\nTo set the `connectivity_test` attribute:\n* provide the argument `connectivity_test` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an existing connectivity test",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--bypass-firewall-checks",
              description:
                "This boolean controls whether to skip firewall checking. Use\n--no-bypass-firewall-checks to disable",
            },
            {
              name: "--clear-destination-cloud-sql-instance",
              description: "Clear existing destination Cloud SQL instance",
            },
            {
              name: "--clear-destination-forwarding-rule",
              description: "Clear existing destination forwarding rule",
            },
            {
              name: "--clear-destination-gke-master-cluster",
              description:
                "Clear existing destination cluster for Google Kubernetes Engine master",
            },
            {
              name: "--clear-destination-gke-pod",
              description: "Clear existing destination GKE Pod",
            },
            {
              name: "--clear-destination-instance",
              description: "Clear existing destination instance",
            },
            {
              name: "--clear-destination-ip-address",
              description: "Clear existing destination IP address",
            },
            {
              name: "--clear-destination-redis-cluster",
              description: "Clear existing destination Redis Cluster",
            },
            {
              name: "--clear-destination-redis-instance",
              description: "Clear existing destination Redis Instance",
            },
            {
              name: "--clear-source-app-engine-version",
              description: "Clear existing source App Engine version",
            },
            {
              name: "--clear-source-cloud-function",
              description: "Clear existing source Cloud function",
            },
            {
              name: "--clear-source-cloud-run-job",
              description: "Clear existing source Cloud Run job",
            },
            {
              name: "--clear-source-cloud-run-revision",
              description: "Clear existing source Cloud Run revision",
            },
            {
              name: "--clear-source-cloud-sql-instance",
              description: "Clear existing source Cloud SQL instance",
            },
            {
              name: "--clear-source-gke-master-cluster",
              description:
                "Clear existing source cluster for Google Kubernetes Engine master",
            },
            {
              name: "--clear-source-gke-pod",
              description: "Clear existing source GKE Pod",
            },
            {
              name: "--clear-source-instance",
              description: "Clear existing source instance",
            },
            {
              name: "--clear-source-ip-address",
              description: "Clear existing source IP address",
            },
            flag2292,
            flag3314,
            flag3371,
            flag3389,
            flag3390,
            flag3397,
            flag3400,
            flag3404,
            flag3409,
            flag3415,
            flag3424,
            flag3427,
            flag3437,
            flag3438,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6418,
            flag7356,
            flag10982,
            flag11637,
            flag11763,
            flag11946,
            {
              name: "--round-trip",
              description:
                "This boolean controls whether return traces (from the destination to the\nsource) will be additionally calculated if packet successfully reaches\nthe destination from the source. Use --no-round-trip to disable",
            },
            flag13955,
            flag13963,
            flag13965,
            flag13966,
            flag13967,
            flag14017,
            flag14018,
            flag14034,
            flag14049,
            flag14066,
            flag14065,
            flag14071,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTIVITY_TEST",
            description:
              "ID of the connectivity test or fully qualified identifier for the connectivity test.\n+\nTo set the `connectivity_test` attribute:\n* provide the argument `connectivity_test` on the command line",
          },
        },
      ],
    },
    {
      name: "network-monitoring-providers",
      description:
        "A Network Monitoring Provider manages the enablement state of the Network Insights service",
      subcommands: [
        {
          name: "create",
          description: "Create a Network Monitoring Provider",
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
            flag6974,
            flag7356,
            flag11637,
            {
              name: "--provider-type",
              description:
                "Type of the NetworkMonitoringProvider. _PROVIDER_TYPE_ must be (only one value is supported):\n+\n*external*::: External provider.\n:::\n+",
              args: {
                name: "PROVIDER_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["external"],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider.\n+\nTo set the `network_monitoring_provider` attribute:\n* provide the argument `network_monitoring_provider` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Network Monitoring Provider",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If set to true, any nested [MonitoringPoints][google.cloud.networkmanagement.v1.MonitoringPoint],\n[NetworkPaths][google.cloud.networkmanagement.v1.NetworkPath] and [WebPaths][google.cloud.networkmanagement.v1.WebPath] resources from this\n[NetworkMonitoringProvider][google.cloud.networkmanagement.v1.NetworkMonitoringProvider] will also be deleted.\nOtherwise, the request will only work if there are no nested resources",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6974,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider.\n+\nTo set the `network_monitoring_provider` attribute:\n* provide the argument `network_monitoring_provider` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Network Monitoring Provider",
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
            flag6974,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider.\n+\nTo set the `network_monitoring_provider` attribute:\n* provide the argument `network_monitoring_provider` on the command line",
          },
        },
        {
          name: "generate-monitoring-point-config",
          description: "Generate a monitoring point config",
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
            flag6974,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider.\n+\nTo set the `network_monitoring_provider` attribute:\n* provide the argument `network_monitoring_provider` on the command line",
          },
        },
        {
          name: "generate-provider-access-token",
          description: "Generate a provider access token",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcp-access-token",
              description: "Google Cloud access token",
              args: {
                name: "GCP_ACCESS_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag6974,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK_MONITORING_PROVIDER",
            description:
              "ID of the networkMonitoringProvider or fully qualified identifier for the networkMonitoringProvider.\n+\nTo set the `network_monitoring_provider` attribute:\n* provide the argument `network_monitoring_provider` on the command line",
          },
        },
        {
          name: "list",
          description: "List Network Monitoring Providers",
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
          name: "monitoring-points",
          description:
            "A Monitoring Point is an agent within your network or application infrastructure that sends probes and reports the results to AppNeta",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Monitoring Point",
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
                    "The location id of the monitoringPoint resource.\n+\nTo set the `location` attribute:\n* provide the argument `monitoring_point` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--network-monitoring-provider",
                  description:
                    "The networkMonitoringProvider id of the monitoringPoint resource.\n+\nTo set the `network-monitoring-provider` attribute:\n* provide the argument `monitoring_point` on the command line with a fully specified name;\n* provide the argument `--network-monitoring-provider` on the command line",
                  args: {
                    name: "NETWORK_MONITORING_PROVIDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MONITORING_POINT",
                description:
                  "ID of the monitoringPoint or fully qualified identifier for the monitoringPoint.\n+\nTo set the `monitoring_point` attribute:\n* provide the argument `monitoring_point` on the command line",
              },
            },
            {
              name: "download-install-script",
              description:
                "Download an installation script for a Monitoring Point",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--dns-server-address",
                  description:
                    "Primary DNS server address. Required if `--static-ip-address` is specified",
                  args: {
                    name: "DNS_SERVER_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--dns-server-secondary-address",
                  description:
                    "Secondary DNS server address. Used with `--static-ip-address`",
                  args: {
                    name: "DNS_SERVER_SECONDARY_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--domain",
                  description:
                    "Domain name of the Monitoring Point. Used with `--static-ip-address`",
                  args: {
                    name: "DOMAIN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gateway-address",
                  description:
                    "Gateway IP address. Required if `--static-ip-address` is specified",
                  args: {
                    name: "GATEWAY_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                {
                  name: "--hostname",
                  description:
                    "The hostname of the Monitoring Point (example: `test-vm`)",
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                {
                  name: "--location",
                  description:
                    "The location of the Network Monitoring Provider (example:, `global`)",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--monitoring-point-type",
                  description:
                    "The type of the Monitoring Point. _MONITORING_POINT_TYPE_ must be one of: *container*, *gce-vm*, *helm*, *kvm*, *vmware*",
                  args: {
                    name: "MONITORING_POINT_TYPE",
                    description: "String",
                    suggestions: [
                      "container",
                      "gce-vm",
                      "helm",
                      "kvm",
                      "vmware",
                    ],
                  },
                },
                {
                  name: "--netmask",
                  description:
                    'Network mask (example: "255.255.255.0"). Used with `--static-ip-address`',
                  args: {
                    name: "NETMASK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag8192,
                {
                  name: "--ntp-server-address",
                  description:
                    "Primary NTP server address (IP address or FQDN). Allowed for types KVM and VMWARE only",
                  args: {
                    name: "NTP_SERVER_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--ntp-server-secondary-address",
                  description:
                    "Secondary NTP server address (IP address or FQDN). Allowed for types KVM and VMWARE only",
                  args: {
                    name: "NTP_SERVER_SECONDARY_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag10998,
                {
                  name: "--password",
                  description:
                    "Password for logging into the Monitoring Point. Required for types KVM and VMWARE, not allowed for CONTAINER",
                  args: {
                    name: "PASSWORD",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--static-ip-address",
                  description:
                    "Static IP address of the Monitoring Point. If specified, `--gateway-address` and `--dns-server-address` are required",
                  args: {
                    name: "STATIC_IP_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--time-zone",
                  description:
                    "Time zone ID for the Monitoring Point (example:  `America/Los_Angeles`). Required for types KVM and VMWARE, not allowed for CONTAINER",
                  args: {
                    name: "TIME_ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--use-dhcp",
                  description:
                    "Whether to use DHCP for IP address configuration. Allowed for types KVM and VMWARE only",
                },
                flag15315,
                flag15424,
              ],
            },
            {
              name: "download-recreate-install-script",
              description:
                "Download an installation script for recreating a Monitoring Point",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--hostname",
                  description:
                    'The hostname of the Monitoring Point, e.g. "test-vm"',
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7044,
                flag7356,
                {
                  name: "--monitoring-point",
                  description: "The ID of the Monitoring Point",
                  args: {
                    name: "MONITORING_POINT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag8192,
                flag10998,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "download-server-connect-config",
              description: "Download the server connect configuration",
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
                flag7044,
                flag7356,
                flag8192,
                {
                  name: "--output-file",
                  description:
                    "The path to save the downloaded server connect configuration",
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
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
              name: "list",
              description: "List Monitoring Points",
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
                flag6973,
                flag7356,
                flag8191,
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
          name: "network-paths",
          description:
            "A Network Path represents the hop-by-hop route and active network delivery quality between a Monitoring Point (source) and a target destination",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Network Path",
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
                    "The location id of the networkPath resource.\n+\nTo set the `location` attribute:\n* provide the argument `network_path` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--network-monitoring-provider",
                  description:
                    "The networkMonitoringProvider id of the networkPath resource.\n+\nTo set the `network-monitoring-provider` attribute:\n* provide the argument `network_path` on the command line with a fully specified name;\n* provide the argument `--network-monitoring-provider` on the command line",
                  args: {
                    name: "NETWORK_MONITORING_PROVIDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NETWORK_PATH",
                description:
                  "ID of the networkPath or fully qualified identifier for the networkPath.\n+\nTo set the `network_path` attribute:\n* provide the argument `network_path` on the command line",
              },
            },
            {
              name: "list",
              description: "List Network Paths",
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
                flag6973,
                flag7356,
                flag8191,
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
          name: "web-paths",
          description:
            "A Web Path represents a monitored web application or URL, assessed from a monitoring point to measure performance and availability",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Web Path",
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
                    "The location id of the webPath resource.\n+\nTo set the `location` attribute:\n* provide the argument `web_path` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--network-monitoring-provider",
                  description:
                    "The networkMonitoringProvider id of the webPath resource.\n+\nTo set the `network-monitoring-provider` attribute:\n* provide the argument `web_path` on the command line with a fully specified name;\n* provide the argument `--network-monitoring-provider` on the command line",
                  args: {
                    name: "NETWORK_MONITORING_PROVIDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WEB_PATH",
                description:
                  "ID of the webPath or fully qualified identifier for the webPath.\n+\nTo set the `web_path` attribute:\n* provide the argument `web_path` on the command line",
              },
            },
            {
              name: "list",
              description: "List Web Paths",
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
                flag6973,
                flag7356,
                flag8191,
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
    },
    {
      name: "operations",
      description: "Manage Network Management operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Network Management operation",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
        {
          name: "list",
          description: "List Network Management operations",
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
      name: "vpc-flow-logs-configs",
      description: "Manage the VPC Flow Logs configurations",
      subcommands: [
        {
          name: "create",
          description: "Creates a new VPC Flow Logs configuration",
          options: [
            flag42,
            flag46,
            flag371,
            flag720,
            flag1201,
            flag2292,
            flag2581,
            flag3337,
            flag4836,
            flag4900,
            flag4902,
            flag4923,
            flag5091,
            flag5453,
            flag5699,
            flag5954,
            {
              name: "--labels",
              description:
                'Resource labels to represent user-provided metadata.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag6999,
            flag7356,
            flag7832,
            {
              name: "--metadata-fields",
              description:
                'Custom metadata fields to include in the reported VPC flow logs.\nCan only be specified if "metadata" was set to CUSTOM_METADATA',
              args: {
                name: "METADATA_FIELDS",
                description: "List",
                suggestions: [],
              },
            },
            flag8290,
            flag10895,
            flag11637,
            flag11946,
            flag14398,
            flag14523,
            flag14975,
            flag15315,
            flag15424,
            flag15528,
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig.\n+\nTo set the `vpc_flow_logs_config` attribute:\n* provide the argument `vpc_flow_logs_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes the specified VPC Flow Logs configuration",
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
            flag6999,
            flag7356,
            flag10895,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig.\n+\nTo set the `vpc_flow_logs_config` attribute:\n* provide the argument `vpc_flow_logs_config` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Describe the details of a specific VPC Flow Logs configuration",
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
            flag6999,
            flag7356,
            flag10895,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig.\n+\nTo set the `vpc_flow_logs_config` attribute:\n* provide the argument `vpc_flow_logs_config` on the command line",
          },
        },
        {
          name: "list",
          description: "List all VPC Flow Logs configurations",
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
            {
              name: "--organization",
              description:
                "The organization id of the location resource.\n+\nTo set the `organization` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [networkmanagement.organizations.locations]",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "query-org-vpc-flow-logs-configs",
          description:
            "Fetch all organization-level VPC Flow Logs configurations associated with the project",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "show-effective-flow-logs-configs",
          description:
            "Show all effective VPC Flow Logs configurations for a resource",
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
            {
              name: "--resource",
              description:
                "The resource to get the effective VPC Flow Logs configuration for.\nThe resource must belong to the same project as the parent.\nThe resource must be a network, subnetwork, interconnect attachment,\nVPN tunnel, or a project",
              args: {
                name: "RESOURCE",
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
          name: "update",
          description:
            "Updates one or more fields in an existing VPC Flow Logs configuration",
          options: [
            flag42,
            flag46,
            {
              name: "--add-metadata-fields",
              description: "Add new value to metadata_fields list",
              args: {
                name: "ADD_METADATA_FIELDS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag371,
            flag720,
            flag1201,
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            {
              name: "--clear-metadata-fields",
              description: "Clear metadata_fields value and set to empty list",
            },
            flag2292,
            flag2581,
            flag3337,
            flag4836,
            flag4900,
            flag4902,
            flag4923,
            flag5091,
            flag5453,
            flag5699,
            flag5954,
            {
              name: "--labels",
              description:
                'Set labels to new value. Resource labels to represent user-provided metadata.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag6999,
            flag7356,
            flag7832,
            {
              name: "--metadata-fields",
              description: "Set metadata_fields to new value",
              args: {
                name: "METADATA_FIELDS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag8290,
            flag10895,
            flag11637,
            flag11946,
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
              name: "--remove-metadata-fields",
              description: "Remove existing value from metadata_fields list",
              args: {
                name: "REMOVE_METADATA_FIELDS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag14398,
            flag14523,
            flag14975,
            {
              name: "--update-labels",
              description:
                'Update labels value or add key value pair. Resource labels to represent user-provided metadata.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
            flag15528,
          ],
          args: {
            name: "VPC_FLOW_LOGS_CONFIG",
            description:
              "ID of the vpcFlowLogsConfig or fully qualified identifier for the vpcFlowLogsConfig.\n+\nTo set the `vpc_flow_logs_config` attribute:\n* provide the argument `vpc_flow_logs_config` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
