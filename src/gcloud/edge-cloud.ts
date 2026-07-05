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
const flag2071: Fig.Option = {
  name: "--cluster",
  description:
    "Cluster of the node pool.\n+\nTo set the `cluster` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2094: Fig.Option = {
  name: "--cluster",
  description:
    "Kubernetes cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
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
const flag6556: Fig.Option = {
  name: "--local-disk-kms-key",
  description:
    "Google Cloud KMS key that will be used to secure local disks on nodes\nin this node pool. The Edge Container service account for this project\nmust have `roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key.\n+\nIf not provided, a Google-managed key will be used instead",
  args: { name: "LOCAL_DISK_KMS_KEY", description: "String", suggestions: [] },
};
const flag6644: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6655: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the node pool.\n+\nTo set the `location` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7131: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7191: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the router.\n+\nTo set the `location` attribute:\n* provide the argument `router` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7204: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `--zone` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7205: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7206: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `interconnect_attachment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7209: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `network` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7210: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7211: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7212: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7213: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `router` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7214: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `subnet` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7215: Fig.Option = {
  name: "--location",
  description:
    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `vpn_connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7407: Fig.Option = {
  name: "--lro-timeout",
  description: "Overwrite the default LRO maximum timeout",
  args: { name: "LRO_TIMEOUT", description: "String", suggestions: [] },
};
const flag7414: Fig.Option = {
  name: "--machine-filter",
  description:
    'Only machines matching this filter will be allowed to join the node\npool. The filtering language accepts strings like "name=<name>", and is\ndocumented in more detail at https://google.aip.dev/160',
  args: { name: "MACHINE_FILTER", description: "String", suggestions: [] },
};
const flag8284: Fig.Option = {
  name: "--network",
  description: "The network that this subnetwork belongs to",
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
const flag15835: Fig.Option = {
  name: "--zone",
  description:
    "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15838: Fig.Option = {
  name: "--zone",
  description:
    "The name of the Google Distributed Cloud Edge zone.\n+\nTo set the `zone` attribute:\n* provide the argument `interconnect_attachment` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15840: Fig.Option = {
  name: "--zone",
  description:
    "The name of the Google Distributed Cloud Edge zone.\n+\nTo set the `zone` attribute:\n* provide the argument `network` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15841: Fig.Option = {
  name: "--zone",
  description:
    "The name of the Google Distributed Cloud Edge zone.\n+\nTo set the `zone` attribute:\n* provide the argument `router` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15842: Fig.Option = {
  name: "--zone",
  description:
    "The name of the Google Distributed Cloud Edge zone.\n+\nTo set the `zone` attribute:\n* provide the argument `subnet` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15847: Fig.Option = {
  name: "--zone",
  description:
    "The zone of the router.\n+\nTo set the `zone` attribute:\n* provide the argument `router` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
  args: { name: "ZONE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "edge-cloud",
  description: "Manage edge-cloud resources",
  subcommands: [
    {
      name: "container",
      description: "Manage Edge Container resources",
      subcommands: [
        {
          name: "clusters",
          description: "Manage Kubernetes Edge clusters",
          subcommands: [
            {
              name: "create",
              description: "Create an Edge Container cluster",
              options: [
                flag42,
                flag46,
                {
                  name: "--admin-users",
                  description:
                    "Username (Google email address) of the user who should be granted\ncluster-admin initially. This currently supports exactly one admin. If\nnot set, the account issuing the creation request will be used by\ndefault",
                  args: {
                    name: "ADMIN_USERS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                {
                  name: "--cluster-ipv4-cidr",
                  description:
                    "All pods in the cluster are assigned an RFC1918 IPv4 address from this\nblock. This field cannot be changed after creation",
                  args: {
                    name: "CLUSTER_IPV4_CIDR",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--container-default-runtime-class",
                  description:
                    "Name of the default runtime class for containers. It supports two values\nRUNC and GVISOR",
                  args: {
                    name: "CONTAINER_DEFAULT_RUNTIME_CLASS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-kms-key",
                  description:
                    "Google Cloud KMS key that will be used to secure persistent disks of the\ncontrol plane VMs of a remote control plane cluster. The Edge Container\nservice account for this project must have\n`roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key.\n+\nIf not provided, a Google-managed key will be used by default",
                  args: {
                    name: "CONTROL_PLANE_KMS_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-machine-filter",
                  description:
                    'Only machines matching this filter will be allowed to host\nlocal control plane nodes.\nThe filtering language accepts strings like "name=<name>",\nand is documented here: [AIP-160](https://google.aip.dev/160)',
                  args: {
                    name: "CONTROL_PLANE_MACHINE_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-node-count",
                  description:
                    "The number of local control plane nodes in a cluster. Use one to create\na single-node control plane or use three to create a high availability\ncontrol plane.\nAny other numbers of nodes will not be accepted",
                  args: {
                    name: "CONTROL_PLANE_NODE_COUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-node-location",
                  description:
                    "Google Edge Cloud zone where the local control plane nodes\nwill be created",
                  args: {
                    name: "CONTROL_PLANE_NODE_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-node-storage-schema",
                  description:
                    "Name for the storage schema of control plane nodes",
                  args: {
                    name: "CONTROL_PLANE_NODE_STORAGE_SCHEMA",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-shared-deployment-policy",
                  description:
                    "Policy configuration about how user application is deployed for\nlocal control plane cluster. It supports two values, ALLOWED and\nDISALLOWED. ALLOWED means that user application can be deployed on\ncontrol plane nodes. DISALLOWED means that user application can not be\ndeployed on control plane nodes. Instead, it can only be deployed on\nworker nodes. By default, this value is DISALLOWED. The input is case\ninsensitive",
                  args: {
                    name: "CONTROL_PLANE_SHARED_DEPLOYMENT_POLICY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--default-max-pods-per-node",
                  description: "The default maximum number of pods per node",
                  args: {
                    name: "DEFAULT_MAX_PODS_PER_NODE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--enable-google-group-authentication",
                  description:
                    "If set, the cluster will be configured to use Google Group authentication",
                },
                {
                  name: "--external-lb-ipv4-address-pools",
                  description:
                    'IPv4 address pools that are used for data plane load balancing of\nlocal control plane clusters. Existing pools cannot be updated\nafter cluster creation; only adding new pools is allowed.\nEach address pool must be specified as one of the following\ntwo types of values:\n  1. A IPv4 address range, for example, "10.0.0.1-10.0.0.10". A range that contains a single IP (e.g. "10.0.0.1-10.0.0.1") is allowed.\n  2. A IPv4 CIDR block, for example, "10.0.0.1/24"\nUse comma when specifying multiple address pools, for example:\n  --external-lb-ipv4-address-pools 10.0.0.1-10.0.0.10,10.0.0.1/24',
                  args: {
                    name: "EXTERNAL_LB_IPV4_ADDRESS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                {
                  name: "--fleet-project",
                  description:
                    "Name of the Fleet host project where the cluster is registered",
                  args: {
                    name: "FLEET_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--labels",
                  description:
                    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens\n(-), underscores (```_```), lowercase characters, and numbers. Values must\ncontain only hyphens (-), underscores (```_```), lowercase characters, and\nnumbers",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag6644,
                flag7356,
                flag7407,
                {
                  name: "--maintenance-window-end",
                  description:
                    'End time of the recurring cluster maintenance window in the RFC 3339\n(https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g.\n"2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_END",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--maintenance-window-recurrence",
                  description:
                    "An RFC 5545 (https://tools.ietf.org/html/rfc5545#section-3.8.5.3)\n  recurrence rule for how the cluster maintenance window recurs. They go\n  on for the span of time between the start and the end time. E.g.\n  FREQ=WEEKLY;BYDAY=SU",
                  args: {
                    name: "MAINTENANCE_WINDOW_RECURRENCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--maintenance-window-start",
                  description:
                    'Start time of the recurring cluster maintenance window in the RFC 3339\n(https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g.\n"2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_START",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--offline-reboot-ttl",
                  description:
                    'Specifies the maximum duration a node can reboot offline (without\nconnection to Google) and then rejoin its cluster to resume its\ndesignated workloads. This duration is relative to the machine\'s most\nrecent connection to Google. The maximum allowed duration is 7 days.\nTo disallow offline reboot, set the duration to "PT0S". The parameter\nshould be an ISO 8601 duration string, for example, "P1DT1H2M3S"',
                  args: {
                    name: "OFFLINE_REBOOT_TTL",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--release-channel",
                  description:
                    "Release channel a cluster is subscribed to. It supports two values,\nNONE and REGULAR. NONE is used to opt out of any release channel. Clusters\nsubscribed to the REGULAR channel will be automatically upgraded to\nversions that are considered GA quality, and cannot be manually upgraded.\nAdditionally, if the REGULAR channel is used, a specific target version\ncannot be set with the 'version' flag. If left unspecified, the release\nchannel will default to REGULAR",
                  args: {
                    name: "RELEASE_CHANNEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--services-ipv4-cidr",
                  description:
                    "All services in the cluster are assigned an RFC1918 IPv4 address from\nthis block. This field cannot be changed after creation",
                  args: {
                    name: "SERVICES_IPV4_CIDR",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--system-addons-config",
                  description:
                    'If specified as a YAML/JSON file, customized configuration in this file\nwill be applied to the system add-ons.\n+\nFor example,\n+\n{\n  "systemAddonsConfig": {\n    "ingress": {\n      "disabled": true,\n      "ipv4_vip": "10.0.0.1"\n    }\n  }\n}',
                  args: {
                    name: "SYSTEM_ADDONS_CONFIG",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--zone-storage-kms-key",
                  description:
                    "Google Cloud KMS key that will be used to encrypt and decrypt the root key\nfor zone storage encryption. The zone storage KMS key is only\napplicable to the storage infra cluster. The Edge Container service\naccount for this project must have\n`roles/cloudkms.cryptoKeyEncrypterDecrypter` on the key.\n+\nIf not provided, a Google-managed key will be used by default",
                  args: {
                    name: "ZONE_STORAGE_KMS_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an Edge Container cluster",
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
                flag7205,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "describe",
              description: "Show details about the cluster",
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
                flag7205,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "get-credentials",
              description: "Get credentials of an edge-container cluster",
              options: [
                flag42,
                flag46,
                {
                  name: "--auth-provider-cmd-path",
                  description:
                    "Path to the gcloud executable for the auth provider field in kubeconfig",
                  args: {
                    name: "AUTH_PROVIDER_CMD_PATH",
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
                flag6644,
                flag7356,
                {
                  name: "--offline-credential",
                  description:
                    "Once specified, an offline credential will be generated for the cluster",
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "list",
              description: "List Edge Container clusters",
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
                flag7131,
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
              name: "node-pools",
              description: "Manage Kubernetes Edge node pools",
              subcommands: [
                {
                  name: "create",
                  description: "Create an Edge Container node pool",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2071,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6413,
                    flag6556,
                    flag6655,
                    flag7356,
                    flag7407,
                    flag7414,
                    {
                      name: "--node-count",
                      description: "Default nodeCount used by this node pool",
                      args: {
                        name: "NODE_COUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--node-labels",
                      description:
                        "Comma-delimited list of key-value pairs that comprise labels for the\nindividual nodes in the node pool. This flag sets the Kubernetes\nlabels, unlike `--labels` which sets the cloud resource labels",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--node-location",
                      description:
                        "Google Edge Cloud zone where nodes in this node pool will be created",
                      args: {
                        name: "NODE_LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--node-storage-schema",
                      description:
                        "Name for the storage schema of worker nodes",
                      args: {
                        name: "NODE_STORAGE_SCHEMA",
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
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool.\n+\nTo set the `nodePool` attribute:\n* provide the argument `node_pool` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete an Edge Container nodePool",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2094,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7210,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show details about the nodePool",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2094,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7210,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List Edge Container nodePools",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    {
                      name: "--cluster",
                      description:
                        "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `--cluster` on the command line;\n* provide the argument --cluster on the command line",
                      args: {
                        name: "CLUSTER",
                        description: "String",
                        suggestions: [],
                      },
                    },
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
                        "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `--cluster` on the command line with a fully specified name;\n* provide the argument --cluster on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
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
                  name: "update",
                  description: "Updates an Edge Container node pool",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    {
                      name: "--clear-labels",
                      description:
                        "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
                    },
                    flag2071,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6556,
                    flag6655,
                    flag7356,
                    flag7407,
                    flag7414,
                    {
                      name: "--node-count",
                      description: "Default nodeCount used by this node pool",
                      args: {
                        name: "NODE_COUNT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--node-labels",
                      description:
                        "Comma-delimited list of key-value pairs that comprise labels for the\nindividual nodes in the node pool. This flag updates the Kubernetes\nlabels, unlike `--update-labels`, `--remove-labels`, and `--clear-labels`\nwhich update the cloud resource labels",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    flag11946,
                    {
                      name: "--remove-labels",
                      description:
                        "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
                      args: {
                        name: "KEY",
                        description: "List",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    {
                      name: "--update-labels",
                      description:
                        "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--use-google-managed-key",
                      description:
                        "Once specified, a Google-managed key will be used for the control plane\ndisk encryption",
                    },
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NODE_POOL",
                    description:
                      "ID of the node pool or fully qualified identifier for the node pool.\n+\nTo set the `nodePool` attribute:\n* provide the argument `node_pool` on the command line",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update an Edge Container cluster",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-maintenance-exclusion-end",
                  description:
                    'End time of the maintenance exclusion window in the RFC 3339\n(https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g.\n"2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "ADD_MAINTENANCE_EXCLUSION_END",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-maintenance-exclusion-name",
                  description:
                    "Unique name (per cluster) of the maintenance exclusion window that can be used to remove it",
                  args: {
                    name: "ADD_MAINTENANCE_EXCLUSION_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-maintenance-exclusion-start",
                  description:
                    'Start time of the maintenance exclusion window (can occur in the past) in the RFC 3339\n(https://www.rfc-editor.org/rfc/rfc3339.txt) format. E.g.\n"2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "ADD_MAINTENANCE_EXCLUSION_START",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                {
                  name: "--clear-maintenance-window",
                  description:
                    "If set, removes the maintenance window setting from the cluster. If any exclusion windows exist, they must be removed beforehand as a maintenance policy cannot exist without a maintenance window",
                },
                flag2292,
                {
                  name: "--container-default-runtime-class",
                  description:
                    "If set, use the specified default container runtime class for the cluster",
                  args: {
                    name: "CONTAINER_DEFAULT_RUNTIME_CLASS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-kms-key",
                  description:
                    "If set, use the specified KMS key for the cluster control plane nodes encryption",
                  args: {
                    name: "CONTROL_PLANE_KMS_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7205,
                flag7356,
                {
                  name: "--maintenance-window-end",
                  description:
                    'End time of the recurring cluster maintenance window in the [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339.txt)\nformat. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_END",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--maintenance-window-recurrence",
                  description:
                    "An [RFC 5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3)\nrecurrence rule for how the cluster maintenance window recurs. They go\non for the span of time between the start and the end time. E.g. FREQ=WEEKLY;BYDAY=SU",
                  args: {
                    name: "MAINTENANCE_WINDOW_RECURRENCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--maintenance-window-start",
                  description:
                    'Start time of the recurring cluster maintenance window in the [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339.txt)\nformat. E.g. "2021-01-01T00:00:00Z" or "2021-01-01T00:00:00-05:00"',
                  args: {
                    name: "MAINTENANCE_WINDOW_START",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--offline-reboot-ttl",
                  description:
                    'Specifies the maximum duration a node can reboot offline (without connection to Google) and\nthen rejoin its cluster to resume its designated workloads. This duration is relative to the\nmachine\'s most recent connection to Google. The maximum allowed duration is 7 days. If left\nunspecified, the default 0 means not allowed. The parameter should be an ISO 8601 duration\nstring, for example, "P1DT1H2M3S"',
                  args: {
                    name: "OFFLINE_REBOOT_TTL",
                    description: "Googlecloudsdk.core.util.times:ParseDuration",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--release-channel",
                  description:
                    "Release channel a cluster is subscribed to. It supports two values, NONE and REGULAR. NONE\nis used to opt out of any release channel. Clusters subscribed to the REGULAR channel will\nbe automatically upgraded to versions that are considered GA quality, and cannot be manually\nupgraded. _RELEASE_CHANNEL_ must be one of: *none*, *regular*, *release-channel-unspecified*",
                  args: {
                    name: "RELEASE_CHANNEL",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "none",
                      "regular",
                      "release-channel-unspecified",
                    ],
                  },
                },
                {
                  name: "--remove-maintenance-exclusion-window",
                  description: "Name of the maintenance exclusion to remove",
                  args: {
                    name: "REMOVE_MAINTENANCE_EXCLUSION_WINDOW",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--use-google-managed-key",
                  description:
                    "If set, use Google managed key for the cluster control plane nodes encryption",
                },
                {
                  name: "--use-google-managed-zone-key",
                  description:
                    "If set, use Google managed key for zone storage encryption",
                },
                flag15315,
                flag15424,
                {
                  name: "--zone-storage-kms-key",
                  description:
                    "If set, use the specified KMS key for zone storage encryption",
                  args: {
                    name: "ZONE_STORAGE_KMS_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "upgrade",
              description: "Upgrade an Edge Container cluster",
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
                flag6644,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--schedule",
                  description:
                    "Schedule to upgrade a cluster after the request is acknowledged by Google.\nSupport values: IMMEDIATELY",
                  args: {
                    name: "SCHEDULE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
          ],
        },
        {
          name: "get-server-config",
          description: "Get server config",
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
            flag7131,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "machines",
          description: "Manage Kubernetes Edge machines",
          subcommands: [
            {
              name: "describe",
              description: "Show details about the machine",
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
                    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `machine` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `edge_container/location`",
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
                name: "MACHINE",
                description:
                  "ID of the machine or fully qualified identifier for the machine.\n+\nTo set the `machine` attribute:\n* provide the argument `machine` on the command line",
              },
            },
            {
              name: "list",
              description: "List Edge Container machines",
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
                flag7131,
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
          description:
            "Command group for working with Kubernetes Edge operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running edge container operation",
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
                flag7212,
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
              name: "wait",
              description:
                "Poll long-running edge container operation until it completes",
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
                flag7212,
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
          name: "regions",
          description: "Manages Edge Container regions",
          subcommands: [
            {
              name: "describe",
              description: "Describe an Edge Container region (location)",
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
                  "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line;\n* set the property `edge_container/location`",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List Edge Container regions",
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
          name: "vpn-connections",
          description:
            "Manage Edge VPN connections between an Edge Container cluster and a VPC network",
          subcommands: [
            {
              name: "create",
              description:
                "Create a VPN connection between an Edge Container cluster and a VPC network",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--cluster",
                  description:
                    "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `--cluster` on the command line",
                  args: {
                    name: "CLUSTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--high-availability",
                  description:
                    "Enables high availability on cluster side. This creates an additional VPN endpoint in\ncluster. Multiple Nodes/NodePools are required to enable this feature",
                },
                flag5699,
                flag6413,
                {
                  name: "--location",
                  description:
                    "For resources [cluster, vpn_connection], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--nat-gateway-ip",
                  description:
                    "The NAT gateway IP for the gateway floating IPs. Required if cluster sits behind NAT",
                  args: {
                    name: "NAT_GATEWAY_IP",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--router",
                  description:
                    "Name of the Cloud Router to use when creating the VPN connection. This Cloud Router must be\nin the same region as the cluster and connected to the provided VPC network. If not\nprovided, a service-managed Cloud Router will either be created or reused to create the VPN\nconnection",
                  args: {
                    name: "ROUTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--vpc-network",
                  description:
                    "The name of the VPC network to be connected. By default it is assumed to be under the same\nproject as cluster. If this VPC network is under a different project, `vpc-project` is\nrequired",
                  args: {
                    name: "VPC_NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vpc-project",
                  description:
                    "The project of the VPC network. Required if the project of VPC network differs from the\nproject of the cluster",
                  args: {
                    name: "VPC_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "VPN_CONNECTION",
                description:
                  "ID of the vpn connection or fully qualified identifier for the vpn connection.\n+\nTo set the `vpn_connection` attribute:\n* provide the argument `vpn_connection` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "Delete a VPN connection between an Edge Container cluster and a VPC network",
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
                flag7215,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "VPN_CONNECTION",
                description:
                  "ID of the vpn connection or fully qualified identifier for the vpn connection.\n+\nTo set the `vpn_connection` attribute:\n* provide the argument `vpn_connection` on the command line",
              },
            },
            {
              name: "describe",
              description: "Show details about a VPN connection",
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
                flag7215,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "VPN_CONNECTION",
                description:
                  "ID of the vpn connection or fully qualified identifier for the vpn connection.\n+\nTo set the `vpn_connection` attribute:\n* provide the argument `vpn_connection` on the command line",
              },
            },
            {
              name: "list",
              description: "List VPN connections",
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
                flag7131,
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
          name: "zones",
          description: "Inspect Edge Container zones",
          subcommands: [
            {
              name: "describe",
              description: "Describe an Edge Container zone",
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
                name: "ZONE",
                description:
                  "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
              },
            },
            {
              name: "list",
              description: "List Edge Container zones",
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
      ],
    },
    {
      name: "networking",
      description: "Manage Distributed Cloud Edge Network resources",
      subcommands: [
        {
          name: "interconnects",
          description: "Manage Distributed Cloud Edge Network interconnects",
          subcommands: [
            {
              name: "attachments",
              description:
                "Manage Distributed Cloud Edge Network interconnect attachments",
              subcommands: [
                {
                  name: "dedicated",
                  description:
                    "Manage Distributed Cloud Edge Network dedicated interconnect attachments",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a Distributed Cloud Edge Network interconnect attachment",
                      options: [
                        flag42,
                        flag46,
                        flag720,
                        flag1201,
                        flag2292,
                        {
                          name: "--description",
                          description:
                            "An optional, textual description for the interconnect attachment",
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
                        {
                          name: "--interconnect",
                          description:
                            "The underlying interconnect object that this attachment's traffic will traverse through",
                          args: {
                            name: "INTERCONNECT",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag6413,
                        flag7206,
                        flag7356,
                        {
                          name: "--mtu",
                          description:
                            "Maximum transmission unit (MTU) is the size of the largest\nIP packet that can be transmitted on this attachment. Default\nvalue is 1500 bytes, and the valid values are 1500 and 9000",
                          args: {
                            name: "MTU",
                            description: "Int",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--network",
                          description: "The network to use for dynamic routing",
                          args: {
                            name: "NETWORK",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                        {
                          name: "--vlan-id",
                          description:
                            "The ID of the vlan to tag the subnetwork. Default value is 0",
                          args: {
                            name: "VLAN_ID",
                            description: "Int",
                            suggestions: [],
                          },
                        },
                        flag15838,
                      ],
                      args: {
                        name: "INTERCONNECT_ATTACHMENT",
                        description:
                          "ID of the interconnect attachment or fully qualified identifier for the interconnect attachment.\n+\nTo set the `interconnect_attachment` attribute:\n* provide the argument `interconnect_attachment` on the command line",
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a Distributed Cloud Edge Network interconnect attachment",
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
                    flag7206,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15838,
                  ],
                  args: {
                    name: "INTERCONNECT_ATTACHMENT",
                    description:
                      "ID of the interconnect attachment or fully qualified identifier for the interconnect attachment.\n+\nTo set the `interconnect_attachment` attribute:\n* provide the argument `interconnect_attachment` on the command line",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Show details about a Distributed Cloud Edge Network interconnect attachment",
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
                    flag7206,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15838,
                  ],
                  args: {
                    name: "INTERCONNECT_ATTACHMENT",
                    description:
                      "ID of the interconnect attachment or fully qualified identifier for the interconnect attachment.\n+\nTo set the `interconnect_attachment` attribute:\n* provide the argument `interconnect_attachment` on the command line",
                  },
                },
                {
                  name: "list",
                  description:
                    "List Distributed Cloud Edge Network interconnect attachments",
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
                    flag7204,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11946,
                    flag13948,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                    flag15835,
                  ],
                },
              ],
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network interconnect",
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
                    "The global location name.\n+\nTo set the `location` attribute:\n* provide the argument `interconnect` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                {
                  name: "--zone",
                  description:
                    "The name of the Google Distributed Cloud Edge zone.\n+\nTo set the `zone` attribute:\n* provide the argument `interconnect` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
                  args: {
                    name: "ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "INTERCONNECT",
                description:
                  "ID of the interconnect or fully qualified identifier for the interconnect.\n+\nTo set the `interconnect` attribute:\n* provide the argument `interconnect` on the command line",
              },
            },
            {
              name: "get-diagnostics",
              description:
                "Get the diagnostics of a specified Distributed Cloud Edge Network interconnect",
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
                    "The Cloud location for the interconnect.\n+\nTo set the `location` attribute:\n* provide the argument `interconnect` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                {
                  name: "--zone",
                  description:
                    "The zone of the interconnect.\n+\nTo set the `zone` attribute:\n* provide the argument `interconnect` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
                  args: {
                    name: "ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "INTERCONNECT",
                description:
                  "ID of the interconnect or fully qualified identifier for the interconnect.\n+\nTo set the `interconnect` attribute:\n* provide the argument `interconnect` on the command line",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network interconnects",
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
                flag7204,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15835,
              ],
            },
          ],
        },
        {
          name: "networks",
          description: "Manage Distributed Cloud Edge Network networks",
          subcommands: [
            {
              name: "create",
              description: "Create a Distributed Cloud Edge Network network",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description:
                    "An optional, textual description for the network",
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
                flag6413,
                flag7209,
                flag7356,
                {
                  name: "--mtu",
                  description:
                    "Maximum transmission unit (MTU) is the size of the largest\nIP packet that can be transmitted on this network. Default value\nis 1500 bytes, and the valid values are 1500 and 9000",
                  args: { name: "MTU", description: "Int", suggestions: [] },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15840,
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Distributed Cloud Edge Network network",
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
                flag7209,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15840,
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network network",
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
                flag7209,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15840,
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
              },
            },
            {
              name: "get-status",
              description:
                "Get the status of a specified Distributed Cloud Edge Network network",
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
                    "The Cloud location for the network.\n+\nTo set the `location` attribute:\n* provide the argument `network` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                {
                  name: "--zone",
                  description:
                    "The zone of the network.\n+\nTo set the `zone` attribute:\n* provide the argument `network` on the command line with a fully specified name;\n* provide the argument `--zone` on the command line",
                  args: {
                    name: "ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "NETWORK",
                description:
                  "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network networks",
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
                flag7204,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15835,
              ],
            },
          ],
        },
        {
          name: "operations",
          description:
            "Command group for working with Distributed Cloud Edge Network operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running edge network operation",
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
                flag7211,
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
              name: "wait",
              description:
                "Poll long-running edge network operation until it completes",
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
                flag7211,
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
          name: "routers",
          description: "Manage Distributed Cloud Edge Network routers",
          subcommands: [
            {
              name: "add-bgp-peer",
              description:
                "Add a BGP peer to a Distributed Cloud Edge Network router",
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
                  name: "--interface",
                  description: "The name of the interface for this BGP peer",
                  args: {
                    name: "INTERFACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7191,
                flag7356,
                {
                  name: "--peer-asn",
                  description:
                    "The BGP autonomous system number (ASN) for this BGP peer. Must be a 16-bit or 32-bit private ASN as defined in https://tools.ietf.org/html/rfc6996, for example `--asn=64512`",
                  args: {
                    name: "PEER_ASN",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--peer-ipv4-range",
                  description:
                    "The IPv4 link-local address range of the peer router",
                  args: {
                    name: "PEER_IPV4_RANGE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--peer-name",
                  description: "The name of the new BGP peer being added",
                  args: {
                    name: "PEER_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15847,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "add-interface",
              description:
                "Add an interface to a Distributed Cloud Edge Network router",
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
                  name: "--interconnect-attachment",
                  description:
                    "Interconnect attachment of the interface being added",
                  args: {
                    name: "INTERCONNECT_ATTACHMENT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--interface-name",
                  description: "The name of the interface being added",
                  args: {
                    name: "INTERFACE_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--ip-address",
                  description:
                    "Link-local address of the router for this interface",
                  args: {
                    name: "IP_ADDRESS",
                    description:
                      "Googlecloudsdk.api_lib.edge_cloud.networking.utils:IPArgument",
                    suggestions: [],
                  },
                },
                {
                  name: "--ip-mask-length",
                  description:
                    "Subnet mask for the link-local IP range of the interface. The interface IP address and BGP peer IP address must be selected from the subnet defined by this link-local range",
                  args: {
                    name: "IP_MASK_LENGTH",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag7191,
                flag7356,
                {
                  name: "--loopback-ip-addresses",
                  description:
                    "The list of ip ranges for the loopback interface",
                  args: {
                    name: "LOOPBACK_IP_ADDRESSES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--subnetwork",
                  description: "Subnetwork of the interface being added",
                  args: {
                    name: "SUBNETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                flag15847,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "create",
              description: "Create a Distributed Cloud Edge Network router",
              options: [
                flag42,
                flag46,
                {
                  name: "--asn",
                  description: "The locally assigned BGP ASN",
                  args: { name: "ASN", description: "Int", suggestions: [] },
                },
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description:
                    "An optional, textual description for the router",
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
                flag6413,
                flag7213,
                flag7356,
                flag8284,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15841,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Distributed Cloud Edge Network router",
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
                flag7213,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15841,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network router",
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
                flag7213,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15841,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "get-status",
              description:
                "Get the status of a specified Distributed Cloud Edge Network router",
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
                flag7191,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15847,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network routers",
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
                flag7204,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15835,
              ],
            },
            {
              name: "remove-bgp-peer",
              description:
                "Remove a BGP peer from a Distributed Cloud Edge Network router",
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
                flag7191,
                flag7356,
                {
                  name: "--peer-name",
                  description: "The name of the BGP peer being removed",
                  args: {
                    name: "PEER_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--peer-names",
                  description:
                    "The list of names for peers being removed.\n        Only single value allowed currently",
                  args: {
                    name: "PEER_NAME",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15847,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
            {
              name: "remove-interface",
              description:
                "remove an interface on a Distributed Cloud Edge Network router",
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
                  name: "--interface-name",
                  description: "The name of the interface being removed",
                  args: {
                    name: "INTERFACE_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--interface-names",
                  description: "The list of names for interfaces being removed",
                  args: {
                    name: "INTERFACE_NAME",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag7191,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15847,
              ],
              args: {
                name: "ROUTER",
                description:
                  "ID of the router or fully qualified identifier for the router.\n+\nTo set the `router` attribute:\n* provide the argument `router` on the command line",
              },
            },
          ],
        },
        {
          name: "subnets",
          description: "Manage Distributed Cloud Edge Network subnets",
          subcommands: [
            {
              name: "create",
              description: "Create a Distributed Cloud Edge Network subnet",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description:
                    "An optional, textual description for the subnet",
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
                {
                  name: "--ipv4-range",
                  description:
                    "The ranges of ipv4 addresses that are owned by this subnetwork in CIDR format",
                  args: {
                    name: "IPV4_RANGE",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--ipv6-range",
                  description:
                    "The ranges of ipv6 addresses that are owned by this subnetwork in CIDR format",
                  args: {
                    name: "IPV6_RANGE",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag6413,
                flag7214,
                flag7356,
                flag8284,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--vlan-id",
                  description:
                    "The ID of the VLAN to tag the subnetwork. If not specified we assign one automatically",
                  args: {
                    name: "VLAN_ID",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag15842,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet.\n+\nTo set the `subnet` attribute:\n* provide the argument `subnet` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Distributed Cloud Edge Network subnet",
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
                flag7214,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15842,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet.\n+\nTo set the `subnet` attribute:\n* provide the argument `subnet` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Show details about the Distributed Cloud Edge Network subnet",
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
                flag7214,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15842,
              ],
              args: {
                name: "SUBNET",
                description:
                  "ID of the subnet or fully qualified identifier for the subnet.\n+\nTo set the `subnet` attribute:\n* provide the argument `subnet` on the command line",
              },
            },
            {
              name: "list",
              description: "List Distributed Cloud Edge Network subnets",
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
                flag7204,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15835,
              ],
            },
          ],
        },
        {
          name: "zones",
          description: "Manage Distributed Cloud Edge Network zones",
          subcommands: [
            {
              name: "init",
              description:
                "Initialize a specified Distributed Cloud Edge Network zone",
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
                    "The Cloud location for the zone.\n+\nTo set the `location` attribute:\n* provide the argument `zone` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                name: "ZONE",
                description:
                  "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
