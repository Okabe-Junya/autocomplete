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
const flag6871: Fig.Option = {
  name: "--location",
  description: "The location (region) of the Anthos Config Controller",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7305: Fig.Option = {
  name: "--location",
  description:
    "The name of the Anthos Config Controller instance location. Currently, only `us-central1`, `us-east1`, `us-east4`, `us-east5`, `us-west2`, `northamerica-northeast1`, `northamerica-northeast2`, `europe-north1`, `europe-west1`, `europe-west3`, `europe-west6`, `australia-southeast1`, `australia-southeast2`, `asia-northeast1`, `asia-northeast2` and `asia-southeast1` are supported.\n+\nTo set the `location` attribute:\n* provide the argument `name` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
  name: "anthos",
  description: "Anthos command Group",
  subcommands: [
    {
      name: "auth",
      description: "Authenticate clusters using the Anthos client",
      subcommands: [
        {
          name: "login",
          description: "Authenticate clusters using the Anthos client",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description:
                "Cluster to authenticate against. If no cluster is specified, the command will print a list of available options",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--dry-run",
              description:
                "Print out the generated kubectl commands but do not execute them",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kubeconfig",
              description:
                "Specifies the destination kubeconfig file where credentials will be stored",
              args: {
                name: "KUBECONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--login-config",
              description:
                "Specifies the configuration yaml file for login. Can be a file path or a URL",
              args: {
                name: "LOGIN_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--login-config-cert",
              description:
                "Specifies the CA certificate file to be added to trusted pool for making HTTPS connections to a `--login-config` URL",
              args: {
                name: "LOGIN_CONFIG_CERT",
                description:
                  "Googlecloudsdk.command_lib.anthos.flags:ExpandLocalDirAndVersion",
                suggestions: [],
              },
            },
            {
              name: "--no-browser",
              description:
                "Option to indicate login completion on a second device with browser.Used with `server` option",
            },
            flag11637,
            flag11946,
            {
              name: "--remote-bootstrap",
              description:
                "Option to complete login that was started using `no-browser` optionon a remote device that does not have a browser",
              args: {
                name: "REMOTE_BOOTSTRAP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--server",
              description:
                "Specifies the URL of API server of the cluster to authenticate against",
              args: { name: "SERVER", description: "String", suggestions: [] },
            },
            {
              name: "--set-preferred-auth",
              description:
                "If set, forces update of preferred authentication for given cluster",
            },
            flag14975,
            {
              name: "--user",
              description:
                "If configuring multiple user accounts in the same kubecconfig file, you can specify a user to differentiate between them",
              args: { name: "USER", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Anthos configuration command group",
      subcommands: [
        {
          name: "controller",
          description: "Manage Anthos Config Controller instances",
          subcommands: [
            {
              name: "create",
              description: "Create Anthos Config Controller instances",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--cluster-ipv4-cidr-block",
                  description:
                    "The IP address range for the cluster pod IPs. Can be specified as a netmask size (e.g. '/14') or as in CIDR notation (e.g. '10.100.0.0/20'). Defaults to '/20' if flag is not provided",
                  args: {
                    name: "CLUSTER_IPV4_CIDR_BLOCK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--cluster-named-range",
                  description:
                    "The name of the existing secondary range in the clusters subnetwork to use for pod IP addresses. Alternatively, `--cluster_cidr_block` can be used to automatically create a GKE-managed one",
                  args: {
                    name: "CLUSTER_NAMED_RANGE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--full-management",
                  description: "Enable full cluster management type",
                },
                flag5453,
                flag5699,
                {
                  name: "--location",
                  description:
                    "The name of the Config Controller instance location. Currently, only ``us-central1'', ``us-east1'', ``us-east4'', ``us-east5'', ``us-west2'', ``northamerica-northeast1'', ``northamerica-northeast2'', ``europe-north1'', ``europe-west1'', ``europe-west3'', ``europe-west6'', ``australia-southeast1'', ``australia-southeast2'', ``asia-northeast1'', ``asia-northeast2'' and ``asia-southeast1'' are supported.\n+\nTo set the `location` attribute:\n* provide the argument `name` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--man-block",
                  description:
                    "(DEPRECATED) Master Authorized Network. Allows access to the Kubernetes control plane from this block. Defaults to `0.0.0.0/0` if flag is not provided.\n+\nThe --man-block option is deprecated; use --man-blocks instead",
                  args: {
                    name: "MAN_BLOCK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--man-blocks",
                  description:
                    "Master Authorized Network. Allows users to specify multiple blocks to access the Kubernetescontrol plane from this block. Defaults to `0.0.0.0/0` if flag is not provided",
                  args: { name: "BLOCK", description: "List", suggestions: [] },
                },
                {
                  name: "--master-ipv4-cidr-block",
                  description:
                    "The /28 network that the control plane will use. Defaults to '172.16.0.128/28' if flag is not provided",
                  args: {
                    name: "MASTER_IPV4_CIDR_BLOCK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--network",
                  description:
                    "Existing VPC Network to put the GKE cluster and nodes in. Defaults to 'default' if flag is not provided. If `--subnet=SUBNET` is also specified, subnet must be a subnetwork of the network specified by this `--network=NETWORK` flag",
                  args: {
                    name: "NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--services-ipv4-cidr-block",
                  description:
                    "The IP address range for the cluster service IPs. Can be specified as a netmask size (e.g. '/14') or as in CIDR notation (e.g. '10.100.0.0/20'). Defaults to '/24' if flag is not provided",
                  args: {
                    name: "SERVICES_IPV4_CIDR_BLOCK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--services-named-range",
                  description:
                    "The name of the existing secondary range in the clusters subnetwork to use for service ClusterIPs. Alternatively, `--services_cidr_block` can be used to automatically create a GKE-managed one",
                  args: {
                    name: "SERVICES_NAMED_RANGE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--subnet",
                  description:
                    "Specifies the subnet that the VM instances are a part of. `--network=NETWORK` must also be specified, subnet must be a subnetwork of the network specified by the `--network=NETWORK` flag",
                  args: {
                    name: "SUBNET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--use-private-endpoint",
                  description:
                    "Only allow access to the master's private endpoint IP",
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAME",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `name` attribute:\n* provide the argument `name` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete Anthos Config Controller instances",
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
                flag7305,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAME",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `name` attribute:\n* provide the argument `name` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe Anthos Config Controller instances",
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
                flag7305,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAME",
                description:
                  "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `name` attribute:\n* provide the argument `name` on the command line",
              },
            },
            {
              name: "get-config-connector-identity",
              description: "Fetch default Config Connector identity",
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
                flag6871,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAME",
                description: "Name of the Anthos Config Controller",
              },
            },
            {
              name: "get-credentials",
              description:
                "Fetch credentials for a running Anthos Config Controller",
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
                flag6871,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAME",
                description: "Name of the Anthos Config Controller",
              },
            },
            {
              name: "list",
              description: "List Anthos Config Controller instances",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--full-name",
                  description: "Print the fully specified name of the instance",
                },
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "ID of the instance-list or fully qualified identifier for the instance-list.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* use global location",
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
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "operations",
          description:
            "Get and list operations for Anthos Config Controller instances",
          subcommands: [
            {
              name: "describe",
              description: "Describe Anthos Config Controller operations",
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
                    "The name of the Anthos Config Controller instance location. Currently, only `us-central1`, `us-east1`, `us-east4`, `us-east5`, `us-west2`, `northamerica-northeast1`, `northamerica-northeast2`, `europe-north1`, `europe-west1`, `europe-west3`, `europe-west6`, `australia-southeast1`, `australia-southeast2`, `asia-northeast1`, `asia-northeast2` and `asia-southeast1` are supported.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
              name: "list",
              description: "List Anthos Config Controller operations",
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
                    "ID of the operation-list or fully qualified identifier for the operation-list.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* use global location",
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
                flag15315,
                flag15424,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "create-login-config",
      description: "Generates a login configuration file",
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
          name: "--kubeconfig",
          description:
            "Specifies the input kubeconfig file to access user cluster for login configuration data",
          args: { name: "KUBECONFIG", description: "String", suggestions: [] },
        },
        flag7356,
        {
          name: "--merge-from",
          description:
            "Specifies the file path of an existing login configuration file to merge with",
          args: { name: "MERGE_FROM", description: "String", suggestions: [] },
        },
        {
          name: "--output",
          description:
            'Destination to write login configuration file. Defaults to "kubectl-anthos-config.yaml"',
          args: {
            name: "OUTPUT",
            description:
              "Googlecloudsdk.command_lib.anthos.flags:ExpandLocalDirAndVersion",
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
  ],
};

export default completionSpec;
