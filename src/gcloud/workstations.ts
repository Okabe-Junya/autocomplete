// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag4: Fig.Option = {
  name: "--accelerator-count",
  description: "The number of accelerator cards exposed to the instance",
  args: { name: "ACCELERATOR_COUNT", description: "Int", suggestions: [] },
};
const flag17: Fig.Option = {
  name: "--accelerator-type",
  description:
    'The type of accelerator resource to attach to the instance, for example,\n"nvidia-tesla-p100"',
  args: { name: "ACCELERATOR_TYPE", description: "String", suggestions: [] },
};
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
const flag471: Fig.Option = {
  name: "--allowed-ports",
  description:
    'A Single or Range of ports externally accessible in the workstation.\nIf not specified defaults to ports 22, 80 and ports 1024-65535.\n+\nTo specify a single port, both first and last should be same.\n+\nExample:\n+\n  $ {command} --allowed-ports=first=9000,last=9090\n  $ {command} --allowed-ports=first=80,last=80\n+\nSets `allowed_ports` value.\n+\n*first*:::\nRequired, sets `first` value.\n+\n*last*:::\nRequired, sets `last` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--allowed-ports=first=int,last=int\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--allowed-ports=\'{"first": int, "last": int}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--allowed-ports=path_to_file.(yaml|json)\n+\n```',
  args: { name: "ALLOWED_PORTS", description: "Dict", suggestions: [] },
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
const flag2082: Fig.Option = {
  name: "--cluster",
  description:
    "The cluster for the workstation.\n+\nTo set the `cluster` attribute:\n* provide the argument `workstation` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2087: Fig.Option = {
  name: "--cluster",
  description:
    "The name of the cluster containing the config.\n+\n\nTo set the `cluster` attribute:\n* provide the argument `config` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2088: Fig.Option = {
  name: "--cluster",
  description:
    "The name of the cluster containing the workstation.\n+\n\nTo set the `cluster` attribute:\n* provide the argument `workstation` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2098: Fig.Option = {
  name: "--cluster",
  description:
    "The cluster for the config.\n+\nTo set the `cluster` attribute:\n* provide the argument `config` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2279: Fig.Option = {
  name: "--config",
  description:
    "The config for the workstation.\n+\nTo set the `config` attribute:\n* provide the argument `workstation` on the command line with a fully specified name;\n* provide the argument `--config` on the command line;\n* set the property `workstations/config`",
  args: { name: "CONFIG", description: "String", suggestions: [] },
};
const flag2281: Fig.Option = {
  name: "--config",
  description:
    "The name of the config containing the workstation.\n+\n\nTo set the `config` attribute:\n* provide the argument `workstation` on the command line with a fully specified name;\n* provide the argument `--config` on the command line;\n* set the property `workstations/config`",
  args: { name: "CONFIG", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2356: Fig.Option = {
  name: "--container-args",
  description:
    "Arguments passed to the entrypoint.\n+\nExample:\n+\n  $ {command} --container-args=arg_1,arg_2",
  args: { name: "CONTAINER_ARGS", description: "List", suggestions: [] },
};
const flag2359: Fig.Option = {
  name: "--container-command",
  description:
    "If set, overrides the default ENTRYPOINT specified by the image.\n+\nExample:\n+\n  $ {command} --container-command=executable,parameter_1,parameter_2",
  args: { name: "CONTAINER_COMMAND", description: "List", suggestions: [] },
};
const flag2363: Fig.Option = {
  name: "--container-custom-image",
  description:
    "A docker image for the workstation. This image must be accessible by the\nservice account configured in this configuration (--service-account). If no\nservice account is defined, this image must be public",
  args: {
    name: "CONTAINER_CUSTOM_IMAGE",
    description: "String",
    suggestions: [],
  },
};
const flag2372: Fig.Option = {
  name: "--container-env",
  description:
    "Environment variables passed to the container.\n+\nExample:\n+\n  $ {command} --container-env=key1=value1,key2=value2",
  args: { name: "CONTAINER_ENV", description: "Dict", suggestions: [] },
};
const flag2405: Fig.Option = {
  name: "--container-run-as-user",
  description:
    "If set, overrides the USER specified in the image with the given\nuid",
  args: { name: "CONTAINER_RUN_AS_USER", description: "Int", suggestions: [] },
};
const flag2416: Fig.Option = {
  name: "--container-working-dir",
  description: "If set, overrides the default DIR specified by the image",
  args: {
    name: "CONTAINER_WORKING_DIR",
    description: "String",
    suggestions: [],
  },
};
const flag3593: Fig.Option = {
  name: "--disable-public-ip-addresses",
  description:
    "Default value is false.\nIf set, instances will have no public IP address",
};
const flag3653: Fig.Option = {
  name: "--disk-archive-timeout",
  description:
    "Number of seconds to wait after initially creating or subsequently\nshutting down the workstation before converting its disk into a\nsnapshot to save costs. A value of 0 indicates that the disk will never be\narchived",
  args: { name: "DISK_ARCHIVE_TIMEOUT", description: "Int", suggestions: [] },
};
const flag3665: Fig.Option = {
  name: "--disk-size",
  description:
    "Size of the persistent directory in GB. _DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
  args: {
    name: "DISK_SIZE",
    description: "Int",
    suggestions: ["10", "50", "100", "200", "500", "1000"],
  },
};
const flag3669: Fig.Option = {
  name: "--disk-source-snapshot",
  description: "Name of the snapshot to use as the source for the home disk",
  args: {
    name: "DISK_SOURCE_SNAPSHOT",
    description: "String",
    suggestions: [],
  },
};
const flag3671: Fig.Option = {
  name: "--disk-type",
  description:
    "Type of the persistent directory. _DISK_TYPE_ must be one of: *pd-standard*, *pd-balanced*, *pd-ssd*, *hyperdisk-balanced-ha*",
  args: {
    name: "DISK_TYPE",
    description: "String",
    suggestions: [
      "pd-standard",
      "pd-balanced",
      "pd-ssd",
      "hyperdisk-balanced-ha",
    ],
  },
};
const flag4020: Fig.Option = {
  name: "--enable-audit-agent",
  description:
    "Whether to enable Linux `auditd` logging on the workstation. When enabled,\na service account must also be specified that has `logging.buckets.write`\npermission on the project",
};
const flag4073: Fig.Option = {
  name: "--enable-confidential-compute",
  description:
    "Default value is false.\nIf set, instances will have confidential compute enabled",
};
const flag4228: Fig.Option = {
  name: "--enable-nested-virtualization",
  description:
    "Default value is false.\nIf set, instances will have nested virtualization enabled",
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
const flag5377: Fig.Option = {
  name: "--grant-workstation-admin-role-on-create",
  description:
    "Default value is false.\nIf set, creator of a workstation will get `roles/workstations.policyAdmin`\nrole along with `roles/workstations.user` role on the workstation created by\nthem",
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
const flag5856: Fig.Option = {
  name: "--instance-metadata",
  description:
    "Custom metadata to apply to Compute Engine instances.\n+\nExample:\n+\n$ {command} --instance-metadata=key1=value1,key2=value2",
  args: { name: "INSTANCE_METADATA", description: "Dict", suggestions: [] },
};
const flag6395: Fig.Option = {
  name: "--labels",
  description:
    "Labels that are applied to the configuration and propagated to the underlying\nCompute Engine resources.\n+\nExample:\n+\n  $ {command} --labels=label1=value1,label2=value2",
  args: { name: "LABELS", description: "Dict", suggestions: [] },
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
const flag6558: Fig.Option = {
  name: "--local-host-port",
  description:
    "`LOCAL_HOST:LOCAL_PORT` on which gcloud should bind and listen for connections\nthat should be tunneled.\n+\n`LOCAL_PORT` may be omitted, in which case it is treated as 0 and an arbitrary\nunused local port is chosen. The colon also may be omitted in that case.\n+\nIf `LOCAL_PORT` is 0, an arbitrary unused local port is chosen",
  args: {
    name: "LOCAL_HOST_PORT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7706: Fig.Option = {
  name: "--max-usable-workstations-count",
  description:
    "Maximum number of workstations under this configuration a user can have\n`workstations.workstation.use` permission on.\n+\nIf not specified, defaults to `0`, which indicates a user can have unlimited\nnumber of workstations under this configuration",
  args: {
    name: "MAX_USABLE_WORKSTATIONS_COUNT",
    description: "Int",
    suggestions: [],
  },
};
const flag8216: Fig.Option = {
  name: "--network-tags",
  description:
    "Network tags to add to the Google Compute Engine machines backing the\nWorkstations.\n+\nExample:\n+\n  $ {command} --network-tags=tag_1,tag_2",
  args: { name: "NETWORK_TAGS", description: "List", suggestions: [] },
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
const flag11197: Fig.Option = {
  name: "--pd-disk-type",
  description:
    "Type of the persistent directory. _PD_DISK_TYPE_ must be one of: *pd-standard*, *pd-balanced*, *pd-ssd*",
  args: {
    name: "PD_DISK_TYPE",
    description: "String",
    suggestions: ["pd-standard", "pd-balanced", "pd-ssd"],
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
const flag12363: Fig.Option = {
  name: "--region",
  description:
    "The name of the region of the cluster.\n+\n\nTo set the `region` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12365: Fig.Option = {
  name: "--region",
  description:
    "The name of the region of the config.\n+\n\nTo set the `region` attribute:\n* provide the argument `config` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12366: Fig.Option = {
  name: "--region",
  description:
    "The name of the region of the workstation.\n+\n\nTo set the `region` attribute:\n* provide the argument `workstation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12369: Fig.Option = {
  name: "--region",
  description:
    "The region for the config.\n+\nTo set the `region` attribute:\n* provide the argument `config` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12370: Fig.Option = {
  name: "--region",
  description:
    "The region for the workstation.\n+\nTo set the `region` attribute:\n* provide the argument `workstation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag13501: Fig.Option = {
  name: "--service-account-scopes",
  description:
    "Scopes to grant to the service_account. Various scopes are\nautomatically added based on feature usage. When specified, users of\nworkstations under this configuration must have\niam.serviceAccounts.actAs` on the service account",
  args: {
    name: "SERVICE_ACCOUNT_SCOPES",
    description: "List",
    suggestions: [],
  },
};
const flag13512: Fig.Option = {
  name: "--service-account",
  description:
    "Email address of the service account that will be used on VM instances used to\nsupport this config. This service account must have permission to pull the\nspecified container image. If not set, VMs will run without a service account,\nin which case the image must be publicly accessible",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13742: Fig.Option = {
  name: "--shielded-integrity-monitoring",
  description:
    "Default value is false.\nIf set, instances will have integrity monitoring enabled",
};
const flag13752: Fig.Option = {
  name: "--shielded-secure-boot",
  description:
    "Default value is false.\nIf set, instances will have Secure Boot enabled",
};
const flag13760: Fig.Option = {
  name: "--shielded-vtpm",
  description:
    "Default value is false.\nIf set, instances will have vTPM enabled",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14379: Fig.Option = {
  name: "--start-workstation",
  description:
    "If set, automatically starts the workstation if it is currently stopped",
};
const flag14386: Fig.Option = {
  name: "--startup-script-uri",
  description:
    "Link to the startup script stored in Cloud Storage. The script is executed\non the workstation VM after it is booted.\n+\nExample:\n+\n  $ {command} --startup-script-uri=gs://{bucket-name}/{object-name}",
  args: { name: "STARTUP_SCRIPT_URI", description: "String", suggestions: [] },
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
const flag15489: Fig.Option = {
  name: "--vm-tags",
  description:
    "Resource manager tags to be bound to the instance.\nTag keys and values have the same definition as\nhttps://cloud.google.com/resource-manager/docs/tags/tags-overview\n+\nExample:\n+\n  $ {command} --vm-tags=tagKeys/key1=tagValues/value1,tagKeys/key2=tagValues/value2",
  args: { name: "VM_TAGS", description: "Dict", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "workstations",
  description: "Manage Cloud Workstations resources",
  subcommands: [
    {
      name: "clusters",
      description: "Manage Cloud Workstations cluster resources",
      subcommands: [
        {
          name: "create",
          description: "Create a workstation cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--domain",
              description: "Domain used by Workstations for HTTP ingress",
              args: { name: "DOMAIN", description: "String", suggestions: [] },
            },
            {
              name: "--enable-http2",
              description:
                "Whether HTTP/2 is enabled for the workstation cluster",
            },
            {
              name: "--enable-private-endpoint",
              description:
                "Default is false.\nIf specified, the cluster will be assigned an internal IP address to the Cluster Gateway.\nThis isolates the cluster's workstations from public networks, but requires additional\nconfiguration. Learn more: https://cloud.google.com/workstations/docs",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                "Labels that are applied to the cluster and propagated to the underlying Compute Engine\nresources",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            {
              name: "--network",
              description:
                "Fully specified network path for instances created in this cluster",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12363,
            {
              name: "--subnetwork",
              description:
                "Fully specified subnetwork path for instances created in this cluster",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--tags",
              description:
                'Resource manager tags to be bound to this cluster.\nFor example:\n "123/environment=production"\n "123/costCenter=marketing"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--workstation-authorization-url",
              description:
                "The redirect URL for unauthorized requests. Redirects to this endpoint\nsend a base64 encoded 'state' query param with the workstation name and\noriginal request hostname",
              args: {
                name: "WORKSTATION_AUTHORIZATION_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--workstation-launch-url",
              description:
                "The launch URL for workstations. Requests sent to unstarted workstations\nwill be redirected to this URL with 'workstation' and 'project' query params",
              args: {
                name: "WORKSTATION_LAUNCH_URL",
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
          description: "Delete a workstation cluster",
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
            flag12363,
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
          description: "Describe a cluster",
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
            flag12363,
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
          description: "List workstation clusters",
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
            {
              name: "--region",
              description:
                "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`;\n* default is all regions\n",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a workstation cluster",
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
            flag2292,
            {
              name: "--display-name",
              description: "Human-readable name for this workstation cluster",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-http2",
              description:
                "Enable or disable HTTP/2 for the workstation cluster",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12363,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag14975,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15424,
            {
              name: "--workstation-authorization-url",
              description: "The redirect URL for unauthorized requests",
              args: {
                name: "WORKSTATION_AUTHORIZATION_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--workstation-launch-url",
              description: "The launch URL for workstations",
              args: {
                name: "WORKSTATION_LAUNCH_URL",
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
      ],
    },
    {
      name: "configs",
      description: "Manage Cloud Workstations configuration resources",
      subcommands: [
        {
          name: "create",
          description: "Create a workstation configuration",
          options: [
            flag4,
            flag17,
            flag42,
            flag46,
            flag471,
            flag720,
            flag1201,
            {
              name: "--boot-disk-size",
              description: "Size of the boot disk in GB",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            flag2098,
            flag2292,
            flag2356,
            flag2359,
            flag2363,
            flag2372,
            {
              name: "--container-predefined-image",
              description:
                "Code editor on base images. _CONTAINER_PREDEFINED_IMAGE_ must be one of:\n+\n*base-image*::: Base image - no IDE\n*clion*::: CLion\n*codeoss*::: Code OSS\n*codeoss-cuda*::: Code OSS + CUDA toolkit\n*goland*::: GoLand\n*intellij*::: IntelliJ IDEA Ultimate\n*phpstorm*::: PhpStorm\n*pycharm*::: PyCharm Professional\n*rider*::: Rider\n*rubymine*::: RubyMine\n*webstorm*::: WebStorm\n:::\n+",
              args: {
                name: "CONTAINER_PREDEFINED_IMAGE",
                description: "String",
                suggestions: [
                  "base-image",
                  "clion",
                  "codeoss",
                  "codeoss-cuda",
                  "goland",
                  "intellij",
                  "phpstorm",
                  "pycharm",
                  "rider",
                  "rubymine",
                  "webstorm",
                ],
              },
            },
            flag2405,
            flag2416,
            flag3593,
            {
              name: "--disable-ssh-to-vm",
              description:
                "(DEPRECATED)   Default value is False.\n  If set, workstations disable SSH connections to the root VM.\n+\nThe --disable-ssh-to-vm option is deprecated; use --enable-ssh-to-vm instead",
            },
            {
              name: "--disable-tcp-connections",
              description:
                "Default value is false.\nIf set, workstations don't allow plain TCP connections",
            },
            flag3653,
            {
              name: "--disk-reclaim-policy",
              description:
                "What should happen to the disk after the Workstation is deleted. _DISK_RECLAIM_POLICY_ must be one of:\n+\n*delete*::: The persistent disk will be deleted with the Workstation.\n*retain*::: The persistent disk will be remain after the workstation is deleted and the administrator must manually delete the disk.\n:::\n+",
              args: {
                name: "DISK_RECLAIM_POLICY",
                description: "String",
                suggestions: ["delete", "retain"],
              },
            },
            flag3665,
            flag3669,
            flag3671,
            flag4020,
            flag4073,
            flag4228,
            {
              name: "--enable-ssh-to-vm",
              description:
                "Default value is False.\nIf set, workstations enable SSH connections to the root VM",
            },
            {
              name: "--ephemeral-directory",
              description:
                'Ephemeral directory which won\'t persist across workstation sessions. An ephemeral directory is backed by a Compute Engine persistent disk whose mount-path, source-snapshot, source-image, and read-only are configurable.\n+\n*mount-path*::: Location of this directory in the running workstation.\n+\n*source-snapshot:: Name of the snapshot to use as the source for the disk. Must be empty if [source_image][] is set. Must be empty if [read_only][] is false. Updating [source_snapshot][] will update content in the ephemeral directory after the workstation is restarted.\n+\n*source-image::: Name of the disk image to use as the source for the disk. Must be empty if [source_snapshot][] is set. Updating [source_image][] will update content in the ephemeral directory after the workstation is restarted.\n+\n*read-only::: Whether the disk is read only. If true, the disk may be shared by multiple VMs and [source_snapshot][] must be set. Set to false when not specified and true when specified.\n+\nExample:\n+\n  $ {command} --ephemeral-directory="mount-path=/home2,disk-type=pd-balanced,source-snapshot=projects/my-project/global/snapshots/snapshot,read-only=true"',
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5377,
            flag5453,
            {
              name: "--idle-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping an instance that\nhasn't received any user traffic. A value of 0 indicates that this instance\nshould never time out due to idleness",
              args: {
                name: "IDLE_TIMEOUT",
                description: "Int",
                suggestions: [],
              },
            },
            flag5699,
            flag5856,
            {
              name: "--kms-key",
              description:
                "The customer-managed encryption key to use for this config. If not specified,\na Google-managed encryption key is used",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            {
              name: "--kms-key-service-account",
              description:
                "The service account associated with the provided customer-managed encryption\nkey",
              args: {
                name: "KMS_KEY_SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag6395,
            flag7356,
            {
              name: "--machine-type",
              description:
                "Machine type determines the specifications of the Compute Engine machines\nthat the workstations created under this configuration will run on",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag7706,
            flag8216,
            {
              name: "--no-persistent-storage",
              description:
                "If set, workstations under this configuration will not have a persistent directory",
            },
            {
              name: "--pd-disk-size",
              description:
                "Size of the persistent directory in GB. _PD_DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
              args: {
                name: "PD_DISK_SIZE",
                description: "Int",
                suggestions: ["10", "50", "100", "200", "500", "1000"],
              },
            },
            flag11197,
            {
              name: "--pd-reclaim-policy",
              description:
                "What should happen to the disk after the Workstation is deleted. _PD_RECLAIM_POLICY_ must be one of:\n+\n*delete*::: The persistent disk will be deleted with the Workstation.\n*retain*::: The persistent disk will be remain after the workstation is deleted and the administrator must manually delete the disk.\n:::\n+",
              args: {
                name: "PD_RECLAIM_POLICY",
                description: "String",
                suggestions: ["delete", "retain"],
              },
            },
            {
              name: "--pd-source-snapshot",
              description:
                "Name of the snapshot to use as the source for the home disk",
              args: {
                name: "PD_SOURCE_SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--pool-size",
              description:
                "Number of instances to pool for faster Workstation startup",
              args: { name: "POOL_SIZE", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12369,
            {
              name: "--replica-zones",
              description:
                "Specifies the zones the VM and disk resources will be\nreplicated within the region. If set, exactly two zones within the\nworkstation cluster's region must be specified.\n+\nExample:\n+\n  $ {command} --replica-zones=us-central1-a,us-central1-f",
              args: {
                name: "REPLICA_ZONES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--running-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping a workstation\nafter it started. A value of 0 indicates that workstations using this config\nshould never time out",
              args: {
                name: "RUNNING_TIMEOUT",
                description: "Int",
                suggestions: [],
              },
            },
            flag13512,
            flag13501,
            flag13742,
            flag13752,
            flag13760,
            flag14386,
            flag14975,
            flag15315,
            flag15424,
            flag15489,
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a workstation configuration",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2087,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12365,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a config",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2087,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12365,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `config` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a configuration.",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2087,
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
            flag12365,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `config` on the command line",
          },
        },
        {
          name: "list",
          description: "List workstation configurations",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description:
                "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`;\n* default is all clusters\n",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
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
            {
              name: "--region",
              description:
                "The name of the region of the cluster.\n+\n\nTo set the `region` attribute:\n* provide the argument `--cluster` on the command line with a fully specified name;\n* set the property `workstations/cluster` with a fully specified name;\n* default is all clusters\n with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`;\n* default is all regions\n",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2087,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12365,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "CONFIG",
              description:
                "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `config` on the command line",
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
          description: "Updates a workstation configuration",
          options: [
            flag4,
            flag17,
            flag42,
            flag46,
            flag471,
            flag720,
            flag1201,
            {
              name: "--boot-disk-size",
              description: "Size of the boot disk in GB",
              args: {
                name: "BOOT_DISK_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            flag2098,
            flag2292,
            flag2356,
            flag2359,
            flag2363,
            flag2372,
            {
              name: "--container-predefined-image",
              description:
                "Code editor on base images. _CONTAINER_PREDEFINED_IMAGE_ must be one of:\n+\n*base-image*::: Base image - no IDE\n*clion*::: CLion\n*codeoss*::: Code OSS\n*codeoss-cuda*::: Code OSS + CUDA toolkit\n*goland*::: GoLand\n*intellij*::: IntelliJ IDEA Ultimate\n*phpstorm*::: PhpStorm\n*pycharm*::: PyCharm Professional\n*rider*::: Rider\n*rubymine*::: RubyMine\n*webstorm*::: WebStorm\n:::\n+",
              args: {
                name: "CONTAINER_PREDEFINED_IMAGE",
                description: "String",
                suggestions: [
                  "base-image",
                  "clion",
                  "codeoss",
                  "codeoss-cuda",
                  "goland",
                  "intellij",
                  "phpstorm",
                  "pycharm",
                  "rider",
                  "rubymine",
                  "webstorm",
                ],
              },
            },
            flag2405,
            flag2416,
            flag3593,
            {
              name: "--disable-ssh-to-vm",
              description:
                "If set, workstations disable SSH connections to the root VM",
            },
            {
              name: "--disable-tcp-connections",
              description:
                "If set, workstations don't allow plain TCP connections",
            },
            flag3653,
            flag3665,
            flag3669,
            flag3671,
            flag4020,
            flag4073,
            flag4228,
            {
              name: "--enable-ssh-to-vm",
              description:
                "If set, workstations enable SSH connections to the root VM",
            },
            {
              name: "--enable-tcp-connections",
              description: "If set, workstations allow plain TCP connections",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5377,
            flag5453,
            {
              name: "--idle-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping an instance that\nhasn't received any user traffic. A value of 0 indicates that this instance\nshould never time out due to idleness",
              args: {
                name: "IDLE_TIMEOUT",
                description: "Int",
                suggestions: [],
              },
            },
            flag5699,
            flag5856,
            flag6395,
            flag7356,
            {
              name: "--machine-type",
              description:
                "Machine type determines the specifications of the Compute Engine machines\nthat the workstations created under this configuration will run on",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag7706,
            flag8216,
            {
              name: "--pd-disk-size",
              description:
                "Size of the persistent directory in GB. _PD_DISK_SIZE_ must be one of: *10*, *50*, *100*, *200*, *500*, *1000*",
              args: {
                name: "PD_DISK_SIZE",
                description: "Int",
                suggestions: ["10", "50", "100", "200", "500", "1000"],
              },
            },
            flag11197,
            {
              name: "--pd-source-snapshot",
              description:
                "Name of the snapshot to use as the source for the persistent directory",
              args: {
                name: "PD_SOURCE_SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--pool-size",
              description:
                "Number of instances to pool for faster Workstation startup",
              args: { name: "POOL_SIZE", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12369,
            {
              name: "--running-timeout",
              description:
                "How long (in seconds) to wait before automatically stopping a workstation\nafter it started. A value of 0 indicates that workstations using this config\nshould never time out",
              args: {
                name: "RUNNING_TIMEOUT",
                description: "Int",
                suggestions: [],
              },
            },
            flag13512,
            flag13501,
            flag13742,
            flag13752,
            flag13760,
            flag14386,
            flag14975,
            flag15315,
            flag15424,
            flag15489,
          ],
          args: {
            name: "CONFIG",
            description:
              "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `config` on the command line",
          },
        },
      ],
    },
    {
      name: "create",
      description: "Create a workstation",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2088,
        flag2281,
        flag2292,
        {
          name: "--env",
          description: "Environment variables passed to the Workstation",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        {
          name: "--labels",
          description:
            "Labels that are applied to the workstation and propagated to the underlying Compute Engine\nresources",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag7356,
        flag11637,
        flag11946,
        flag12366,
        {
          name: "--source-workstation",
          description:
            "Source workstation from which this workstations persistent directories are cloned on\ncreation. When specified, the workstations service agent must have\n`compute.disks.createSnapshot` and `compute.snapshots.useReadOnly` permissions on the source\nworkstation's host project",
          args: {
            name: "SOURCE_WORKSTATION",
            description: "String",
            suggestions: [],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
    {
      name: "delete",
      description: "Delete a workstation",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2088,
        flag2281,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12366,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
    {
      name: "describe",
      description: "Describe a workstation",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2088,
        flag2281,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12366,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
    {
      name: "get-iam-policy",
      description: "Get the IAM policy for a workstation",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2088,
        flag2281,
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
        flag12366,
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
    {
      name: "list",
      description: "List workstations",
      options: [
        flag42,
        flag46,
        flag1201,
        {
          name: "--cluster",
          description:
            "The name of the cluster containing the config.\n+\n\nTo set the `cluster` attribute:\n* provide the argument `--config` on the command line with a fully specified name;\n* set the property `workstations/config` with a fully specified name;\n* default is all configs\n with a fully specified name;\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`;\n* default is all clusters\n",
          args: { name: "CLUSTER", description: "String", suggestions: [] },
        },
        {
          name: "--config",
          description:
            "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `--config` on the command line;\n* set the property `workstations/config`;\n* default is all configs\n",
          args: { name: "CONFIG", description: "String", suggestions: [] },
        },
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
        {
          name: "--region",
          description:
            "The name of the region of the config.\n+\n\nTo set the `region` attribute:\n* provide the argument `--config` on the command line with a fully specified name;\n* set the property `workstations/config` with a fully specified name;\n* default is all configs\n with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`;\n* default is all regions\n",
          args: { name: "REGION", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "list-usable",
      description: "List usable workstations",
      options: [
        flag42,
        flag46,
        flag1201,
        {
          name: "--cluster",
          description:
            "The cluster for the config.\n+\nTo set the `cluster` attribute:\n* provide the argument `--config` on the command line with a fully specified name;\n* default is all configs with a fully specified name;\n* provide the argument `--cluster` on the command line;\n* set the property `workstations/cluster`;\n* default is all clusters",
          args: { name: "CLUSTER", description: "String", suggestions: [] },
        },
        {
          name: "--config",
          description:
            "ID of the config or fully qualified identifier for the config.\n+\nTo set the `config` attribute:\n* provide the argument `--config` on the command line;\n* default is all configs",
          args: { name: "CONFIG", description: "String", suggestions: [] },
        },
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
        {
          name: "--region",
          description:
            "The region for the config.\n+\nTo set the `region` attribute:\n* provide the argument `--config` on the command line with a fully specified name;\n* default is all configs with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `workstations/region`;\n* default is all regions",
          args: { name: "REGION", description: "String", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "set-iam-policy",
      description: "Set the IAM policy for a workstation",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2088,
        flag2281,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12366,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "WORKSTATION",
          description:
            "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
        },
        {
          name: "POLICY_FILE",
          description:
            "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
        },
      ],
    },
    {
      name: "ssh",
      description: "SSH into a running workstation",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2082,
        {
          name: "--command",
          description:
            "A command to run on the workstation.\n+\nRuns the command on the target workstation and then exits",
          args: { name: "COMMAND", description: "String", suggestions: [] },
        },
        flag2279,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag6558,
        flag7356,
        {
          name: "--port",
          description:
            "The port on the workstation to which traffic should be sent",
          args: { name: "PORT", description: "Int", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12370,
        {
          name: "--ssh-flag",
          description:
            'Additional flags to be passed to *ssh(1)*. It is recommended that flags\nbe passed using an assignment operator and quotes. Example:\n+\n  $ {command} --ssh-flag="-vvv" --ssh-flag="-L 80:localhost:80"',
          args: { name: "SSH_FLAG", description: "String", suggestions: [] },
        },
        flag14379,
        flag14975,
        {
          name: "--user",
          description: "The username with which to SSH",
          args: { name: "USER", description: "String", suggestions: [] },
        },
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "WORKSTATION",
          description:
            "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
        },
        {
          name: "SSH_ARGS",
          description:
            "Flags and positionals passed to the underlying ssh implementation.\n+\nThe '--' argument must be specified between gcloud specific args on the left and SSH_ARGS on the right",
        },
      ],
    },
    {
      name: "start",
      description: "Start a workstation",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2082,
        flag2279,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12370,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
    {
      name: "start-tcp-tunnel",
      description:
        "Start a tunnel through which a local process can forward TCP traffic to the workstation",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2082,
        flag2279,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag6558,
        flag7356,
        flag11637,
        flag11946,
        flag12370,
        flag14379,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "WORKSTATION",
          description:
            "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
        },
        {
          name: "WORKSTATION_PORT",
          description:
            "The port on the workstation to which traffic should be sent",
        },
      ],
    },
    {
      name: "stop",
      description: "Stop a workstation",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2082,
        flag2279,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12370,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
    {
      name: "update",
      description: "Update a workstation",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2082,
        flag2279,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        {
          name: "--pd-disk-size",
          description:
            "Specifies the desired size in GB of the persistent directory mounted at /home",
          args: { name: "PD_DISK_SIZE", description: "Int", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12370,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "WORKSTATION",
        description:
          "ID of the workstation or fully qualified identifier for the workstation.\n+\nTo set the `workstation` attribute:\n* provide the argument `workstation` on the command line",
      },
    },
  ],
};

export default completionSpec;
