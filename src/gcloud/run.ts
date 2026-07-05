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
const flag154: Fig.Option = {
  name: "--add-cloudsql-instances",
  description: "Append the given values to the current Cloud SQL instances",
  args: { name: "CLOUDSQL-INSTANCES", description: "List", suggestions: [] },
};
const flag160: Fig.Option = {
  name: "--add-custom-audiences",
  description: "Append the given values to the current custom audiences",
  args: { name: "CUSTOM-AUDIENCES", description: "List", suggestions: [] },
};
const flag287: Fig.Option = {
  name: "--add-volume-mount",
  description:
    "Adds a mount to the current container. Must contain the keys `volume=NAME` and `mount-path=/PATH` where NAME is the name of a volume on this resource and PATH is the path within the container's filesystem to mount this volume",
  args: {
    name: "volume=NAME,mount-path=MOUNT_PATH",
    description: "Dict",
    suggestions: [],
  },
};
const flag288: Fig.Option = {
  name: "--add-volume",
  description:
    'Adds a volume to the Cloud Run resource. To add more than one volume, specify this flag multiple times. Volumes must have a `type` key. Volumes must have a `name` key if `mount-path` is not specified. A `name` key is optional if `mount-path` is specified.Only certain values are supported for `type`. Depending on the provided type, other keys will be required. The following types are supported with the specified additional keys:\n+\n*cloud-storage*: A volume representing a Cloud Storage bucket. This volume type is mounted using Cloud Storage FUSE. See https://cloud.google.com/storage/docs/gcs-fuse for the details and limitations of this filesystem.\n  Additional keys:  \n* bucket: (required) the name of the bucket to use as the source of this volume    \n* readonly: (optional) A boolean. If true, this volume will be read-only from all mounts.  \n* mount-options: (optional) A list of flags to pass to GCSFuse. Flags should be specified without leading dashes and separated by semicolons.  \n* mount-path: (optional) The path at which the volume should be mounted. The `mount-path` parameter is only supported for single container services which do not make use of the --container flag. For multi-container services, specify the `mount-path` parameter under the --add-volume-mount flag.      \n+\n*in-memory*: An ephemeral volume that stores data in the instance\'s memory. With this type of volume, data is not shared between instances and all data will be lost when the instance it is on is terminated.\n  Additional keys:  \n* mount-path: (optional) The path at which the volume should be mounted. The `mount-path` parameter is only supported for single container services which do not make use of the --container flag. For multi-container services, specify the `mount-path` parameter under the --add-volume-mount flag.  \n* size-limit: (optional) A quantity representing the maximum amount of memory allocated to this volume, such as "512Mi" or "3G". Data stored in an in-memory volume consumes the memory allocation of the container that wrote the data. If size-limit is not specified, the maximum size will be half the total memory limit of all containers.      \n+\n*nfs*: Represents a volume backed by an NFS server.\n  Additional keys:  \n* location: (required) The location of the NFS Server, in the form SERVER:/PATH    \n* mount-path: (optional) The path at which the volume should be mounted. The `mount-path` parameter is only supported for single container services which do not make use of the --container flag. For multi-container services, specify the `mount-path` parameter under the --add-volume-mount flag.  \n* readonly: (optional) A boolean. If true, this volume will be read-only from all mounts',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag454: Fig.Option = {
  name: "--allow-unauthenticated",
  description:
    "Whether to enable allowing unauthenticated access to the service. This may take a few moments to take effect. Use *--allow-unauthenticated* to enable and *--no-allow-unauthenticated* to disable",
};
const flag681: Fig.Option = {
  name: "--args",
  description:
    "Comma-separated arguments passed to the command run by the container image. If not specified and no '--command' is provided, the container image's default Cmd is used. Otherwise, if not specified, no arguments are passed. To reset this field to its default, pass an empty string",
  args: { name: "ARG", description: "List", suggestions: [] },
};
const flag718: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete. Defaults to --no-async. Use *--async* to enable and *--no-async* to disable",
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
const flag1204: Fig.Option = {
  name: "--binary-authorization",
  description:
    'Binary Authorization policy to check against. This must be set to "default"',
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag1271: Fig.Option = {
  name: "--breakglass",
  description:
    "Justification to bypass Binary Authorization policy constraints and allow the operation. See https://cloud.google.com/binary-authorization/docs/using-breakglass for more information. Next update or deploy command will automatically clear existing breakglass justification",
  args: { name: "JUSTIFICATION", description: "String", suggestions: [] },
};
const flag1530: Fig.Option = {
  name: "--clear-binary-authorization",
  description: "Remove any previously set Binary Authorization policy",
};
const flag1550: Fig.Option = {
  name: "--clear-cloudsql-instances",
  description: "Empty the current Cloud SQL instances",
};
const flag1581: Fig.Option = {
  name: "--clear-custom-audiences",
  description: "Empty the current custom audiences",
};
const flag1631: Fig.Option = {
  name: "--clear-encryption-key-shutdown-hours",
  description: "Remove any previously set CMEK key shutdown hours setting",
};
const flag1650: Fig.Option = {
  name: "--clear-env-vars",
  description: "Remove all environment variables",
};
const flag1711: Fig.Option = {
  name: "--clear-key",
  description: "Remove any previously set CMEK key reference",
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag1792: Fig.Option = {
  name: "--clear-network-tags",
  description: "Clears all existing network tags from the Cloud Run job",
};
const flag1793: Fig.Option = {
  name: "--clear-network-tags",
  description: "Clears all existing network tags from the Cloud Run service",
};
const flag1794: Fig.Option = {
  name: "--clear-network-tags",
  description: "Clears all existing network tags from the Cloud Run worker",
};
const flag1797: Fig.Option = {
  name: "--clear-network",
  description:
    "Disconnect this Cloud Run job from the VPC network it is connected to",
};
const flag1798: Fig.Option = {
  name: "--clear-network",
  description:
    "Disconnect this Cloud Run service from the VPC network it is connected to",
};
const flag1799: Fig.Option = {
  name: "--clear-network",
  description:
    "Disconnect this Cloud Run worker from the VPC network it is connected to",
};
const flag1820: Fig.Option = {
  name: "--clear-post-key-revocation-action-type",
  description: "Remove any previously set post CMEK key revocation action type",
};
const flag1873: Fig.Option = {
  name: "--clear-secrets",
  description: "Remove all secrets",
};
const flag1954: Fig.Option = {
  name: "--clear-volume-mounts",
  description: "Remove all existing mounts from the current container",
};
const flag1955: Fig.Option = {
  name: "--clear-volumes",
  description:
    "Remove all existing volumes from the Cloud Run resource, including volumes mounted as secrets",
};
const flag1959: Fig.Option = {
  name: "--clear-vpc-connector",
  description: "Remove the VPC connector for this resource",
};
const flag2152: Fig.Option = {
  name: "--command",
  description:
    "Entrypoint for the container image. If not specified, the container image's default Entrypoint is run. To reset this field to its default, pass an empty string",
  args: { name: "COMMAND", description: "List", suggestions: [] },
};
const flag2208: Fig.Option = {
  name: "--concurrency",
  description:
    "Set the maximum number of concurrent requests allowed per container instance. Leave concurrency unspecified or provide the special value 'default' to receive the server default value",
  args: {
    name: "CONCURRENCY",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag2218: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2225: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2228: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2418: Fig.Option = {
  name: "--container",
  description:
    "Specifies a container by name. Flags following --container will apply to the specified container.\n+\nFlags that are not container-specific must be specified before --container",
  args: { name: "CONTAINER", description: "String", suggestions: [] },
};
const flag2508: Fig.Option = {
  name: "--cpu-boost",
  description:
    "Whether to allocate extra CPU to containers on startup to reduce the perceived latency of a cold start request. Enabled by default when unspecified on new services. Use *--cpu-boost* to enable and *--no-cpu-boost* to disable",
};
const flag2512: Fig.Option = {
  name: "--cpu-throttling",
  description:
    "Whether to throttle the CPU when the container is not actively serving requests. Use *--cpu-throttling* to enable and *--no-cpu-throttling* to disable",
};
const flag2514: Fig.Option = {
  name: "--cpu",
  description:
    "Set a CPU limit in Kubernetes cpu units.\n+\nCloud Run supports values fractional values below 1, 1, 2, 4, and 8.  Some CPU values requires a minimum Memory `--memory` value",
  args: { name: "CPU", description: "String", suggestions: [] },
};
const flag2928: Fig.Option = {
  name: "--default-url",
  description:
    "Toggles the default url for a run service. This is enabled by default if not specified. Use *--default-url* to enable and *--no-default-url* to disable",
};
const flag3008: Fig.Option = {
  name: "--depends-on",
  description: "List of container dependencies to add to the current container",
  args: { name: "CONTAINER", description: "List", suggestions: [] },
};
const flag3009: Fig.Option = {
  name: "--deploy-health-check",
  description:
    "Schedules a single instance of the Revision and waits for it to pass its startup probe for the deployment to succeed. If disabled, the startup probe runs only when the revision is first started via invocation or by setting min-instances. This check is enabled by default when unspecified. Use *--deploy-health-check* to enable and *--no-deploy-health-check* to disable",
};
const flag3271: Fig.Option = {
  name: "--description",
  description:
    "Provides an optional, human-readable description of the service",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3893: Fig.Option = {
  name: "--domain",
  description:
    "ID of the DomainMapping or fully qualified identifier for the DomainMapping.\n+\nTo set the `domain` attribute:\n* provide the argument `--domain` on the command line",
  args: { name: "DOMAIN", description: "String", suggestions: [] },
};
const flag3937: Fig.Option = {
  name: "--dry-run",
  description:
    "If set to true, only validates the configuration. The configuration is not applied",
};
const flag4368: Fig.Option = {
  name: "--encryption-key-shutdown-hours",
  description:
    "The number of hours to wait before an automatic shutdown server after CMEK key revocation is detected",
  args: {
    name: "ENCRYPTION_KEY_SHUTDOWN_HOURS",
    description: "String",
    suggestions: [],
  },
};
const flag4466: Fig.Option = {
  name: "--env-vars-file",
  description:
    'Path to a local YAML or ENV file with definitions for all environment\nvariables. All existing environment variables will be removed before\nthe new environment variables are added. Example YAML content:\n+\n  ```\n  KEY_1: "value1"\n  KEY_2: "value 2"\n  ```\n+\nExample ENV content:\n+\n  ```\n  KEY_1="value1"\n  KEY_2="value 2"\n  ```',
  args: {
    name: "FILE_PATH",
    description:
      "Googlecloudsdk.command_lib.util.args.map_util:ArgDictWithYAMLOrEnv",
    suggestions: [],
  },
};
const flag4614: Fig.Option = {
  name: "--execute-now",
  description:
    "Execute the job immediately after the creation or update  completes. gcloud exits once the job has started unless the `--wait` flag is set",
};
const flag4624: Fig.Option = {
  name: "--execution-environment",
  description:
    "Selects the execution environment where the application will run. _EXECUTION_ENVIRONMENT_ must be one of:\n+\n*gen1*::: Run the application in a first generation execution environment.\n*gen2*::: Run the application in a second generation execution environment.\n:::\n+",
  args: {
    name: "EXECUTION_ENVIRONMENT",
    description: "String",
    suggestions: ["gen1", "gen2"],
  },
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
const flag5107: Fig.Option = {
  name: "--freshness",
  description:
    "Return entries that are not older than this value. Works only with DESC ordering and filters without a timestamp. See $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "FRESHNESS",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag5370: Fig.Option = {
  name: "--gpu-type",
  description: "The GPU type to use",
  args: { name: "GPU_TYPE", description: "String", suggestions: [] },
};
const flag5371: Fig.Option = {
  name: "--gpu-zonal-redundancy",
  description:
    "Set GPU zonal redundancy. Use *--gpu-zonal-redundancy* to enable and *--no-gpu-zonal-redundancy* to disable",
};
const flag5373: Fig.Option = {
  name: "--gpu",
  description:
    "Cloud Run supports values 0 or 1.  1 gpu also requires a minimum 4 `--cpu` value and  a minimum 16Gi `--memory` value",
  args: { name: "GPU", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5574: Fig.Option = {
  name: "--iap",
  description:
    "Whether to enable IAP for the Service. Use *--iap* to enable and *--no-iap* to disable",
};
const flag5686: Fig.Option = {
  name: "--image",
  description:
    "Name of the container image to deploy (e.g. `us-docker.pkg.dev/cloudrun/container/hello:latest`)",
  args: { name: "IMAGE", description: "String", suggestions: [] },
};
const flag5687: Fig.Option = {
  name: "--image",
  description:
    "Name of the container image to deploy (e.g. `us-docker.pkg.dev/cloudrun/container/job:latest`)",
  args: { name: "IMAGE", description: "String", suggestions: [] },
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
const flag5784: Fig.Option = {
  name: "--ingress",
  description:
    "Set the ingress traffic sources allowed to call the service. For Cloud Run the `--[no-]allow-unauthenticated` flag separately controls the identities allowed to call the service. _INGRESS_ must be one of:\n+\n*all*::: Inbound requests from all sources are allowed.\n*internal*::: For Cloud Run, only inbound requests from VPC networks\nin the same project or VPC Service Controls perimeter, as well as\nPub/Sub subscriptions and Eventarc events in the same project or VPC\nService Controls perimeter are allowed. All other requests are rejected.\nSee https://cloud.google.com/run/docs/securing/ingress for full details\non the definition of internal traffic for Cloud Run.\n+\n*internal-and-cloud-load-balancing*::: Only inbound requests from Google Cloud Load Balancing or a traffic\nsource allowed by the internal option are allowed.\n+\n:::\n+",
  args: {
    name: "INGRESS",
    description: "String",
    suggestions: ["all", "internal", "internal-and-cloud-load-balancing"],
  },
};
const flag5930: Fig.Option = {
  name: "--instances",
  description:
    "The number of instances to run for this WorkerPool. Flag value should be a positive integer to configure manual scaling with the given integer as a fixed instance count",
  args: {
    name: "INSTANCES",
    description: "Googlecloudsdk.command_lib.run.flags:InstanceValue",
    suggestions: [],
  },
};
const flag6002: Fig.Option = {
  name: "--invoker-iam-check",
  description:
    "Optionally disable invoker IAM checks. More info at https://cloud.google.com/run/docs/securing/managing-access#invoker_check. Use *--invoker-iam-check* to enable and *--no-invoker-iam-check* to disable",
};
const flag6252: Fig.Option = {
  name: "--key",
  description: "CMEK key reference to encrypt the container with",
  args: { name: "KEY", description: "String", suggestions: [] },
};
const flag6411: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nAn alias to --update-labels",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6416: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
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
const flag6546: Fig.Option = {
  name: "--liveness-probe",
  description:
    'Comma separated settings for liveness probe in the form KEY=VALUE.\nEach key stands for a field of the probe described in\nhttps://cloud.google.com/run/docs/reference/rest/v1/Container#Probe.\nCurrently supported keys are: initialDelaySeconds, timeoutSeconds, periodSeconds, failureThreshold, httpGet.port, httpGet.path, grpc.port, grpc.service.\n+\nFor example, to set a probe with 10s timeout and HTTP probe requests\nsent to 8080 port of the container:\n+\n    $ --liveness-probe=timeoutSeconds=10,httpGet.port=8080\n+\nTo remove existing probe:\n+\n    $ --liveness-probe=""',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag7352: Fig.Option = {
  name: "--log-filter",
  description:
    "Filter expression that specifies the log entries to return. Detailed information about filters can be found at: https://cloud.google.com/logging/docs/view/logging-query-language",
  args: { name: "LOG_FILTER", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7646: Fig.Option = {
  name: "--max-instances",
  description:
    "The maximum number of container instances for this Revision to run or 'default' to remove. This setting is immutably set on each new Revision and modifying its value will deploy another Revision",
  args: {
    name: "MAX_INSTANCES",
    description: "Googlecloudsdk.command_lib.run.flags:ScaleValue",
    suggestions: [],
  },
};
const flag7677: Fig.Option = {
  name: "--max-retries",
  description:
    "Number of times a task is allowed to restart in case of failure before being failed permanently. This applies per-task, not per-job. If set to 0, tasks will only run once and never be retried on failure",
  args: {
    name: "MAX_RETRIES",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7717: Fig.Option = {
  name: "--max",
  description:
    "The maximum number of container instances to run for this Service. This instance limit will be divided among all Revisions receiving a percentage of traffic and can be modified without deploying a new Revision",
  args: {
    name: "MAX",
    description: "Googlecloudsdk.command_lib.run.flags:ScaleValue",
    suggestions: [],
  },
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
const flag7768: Fig.Option = {
  name: "--memory",
  description: "Set a memory limit. Ex: 1024Mi, 4Gi",
  args: { name: "MEMORY", description: "String", suggestions: [] },
};
const flag7891: Fig.Option = {
  name: "--min-instances",
  description:
    "The minimum number of container instances to run for this Revision  or 'default' to remove. This setting is immutably set on each new  Revision and modifying its value will deploy a another Revision. Consider using --min to set the minimum number of instances across all revisions of the Service which may be modified dynamically",
  args: {
    name: "MIN_INSTANCES",
    description: "Googlecloudsdk.command_lib.run.flags:ScaleValue",
    suggestions: [],
  },
};
const flag7920: Fig.Option = {
  name: "--min",
  description:
    "The minimum number of container instances to run for this Service or 'default' to remove. These instances will be divided among all Revisions receiving a percentage of traffic and can be modified without deploying a new Revision",
  args: {
    name: "MIN",
    description: "Googlecloudsdk.command_lib.run.flags:ScaleValue",
    suggestions: [],
  },
};
const flag8115: Fig.Option = {
  name: "--namespace",
  description:
    'Specific to Cloud Run for Anthos: Kubernetes namespace for the DomainMapping.\n+\nTo set the `namespace` attribute:\n* provide the argument `--domain` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line;\n* set the property `run/namespace`;\n* For Cloud Run on Kubernetes Engine, defaults to "default". Otherwise, defaults to project ID.;\n* provide the argument `project` on the command line;\n* set the property `core/project`',
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8117: Fig.Option = {
  name: "--namespace",
  description:
    'Specific to Cloud Run for Anthos: Kubernetes namespace for the revision.\n+\nTo set the `namespace` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line;\n* set the property `run/namespace`;\n* For Cloud Run on Kubernetes Engine, defaults to "default". Otherwise, defaults to project ID.;\n* provide the argument `project` on the command line;\n* set the property `core/project`',
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8119: Fig.Option = {
  name: "--namespace",
  description:
    'Specific to Cloud Run for Anthos: Kubernetes namespace for the service.\n+\nTo set the `namespace` attribute:\n* provide the argument `SERVICE` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line;\n* set the property `run/namespace`;\n* For Cloud Run on Kubernetes Engine, defaults to "default". Otherwise, defaults to project ID.;\n* provide the argument `project` on the command line;\n* set the property `core/project`',
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8120: Fig.Option = {
  name: "--namespace",
  description:
    'Specific to Cloud Run for Anthos: Kubernetes namespace for the service.\n+\nTo set the `namespace` attribute:\n* provide the argument `SERVICE` on the command line with a fully specified name;\n* specify the service name from an interactive prompt with a fully specified name;\n* provide the argument `--namespace` on the command line;\n* set the property `run/namespace`;\n* For Cloud Run on Kubernetes Engine, defaults to "default". Otherwise, defaults to project ID.;\n* provide the argument `project` on the command line;\n* set the property `core/project`',
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8213: Fig.Option = {
  name: "--network-tags",
  description:
    "Applies the given network tags (comma separated) to the Cloud Run job. To clear existing tags, use --clear-network-tags",
  args: { name: "TAG", description: "List", suggestions: [] },
};
const flag8214: Fig.Option = {
  name: "--network-tags",
  description:
    "Applies the given network tags (comma separated) to the Cloud Run service. To clear existing tags, use --clear-network-tags",
  args: { name: "TAG", description: "List", suggestions: [] },
};
const flag8215: Fig.Option = {
  name: "--network-tags",
  description:
    "Applies the given network tags (comma separated) to the Cloud Run worker. To clear existing tags, use --clear-network-tags",
  args: { name: "TAG", description: "List", suggestions: [] },
};
const flag8271: Fig.Option = {
  name: "--network",
  description:
    "The VPC network that the Cloud Run job will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag8272: Fig.Option = {
  name: "--network",
  description:
    "The VPC network that the Cloud Run service will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag8273: Fig.Option = {
  name: "--network",
  description:
    "The VPC network that the Cloud Run worker will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag10013: Fig.Option = {
  name: "--no-promote",
  description:
    "True to avoid assign instances to the worker revision being deployed. Setting this flag assigns any instances assigned to the LATEST revision to the specific revision bound to LATEST before the deployment. The effect is that the revision being deployed will not receive instance split.\n+\nAfter a deployment with this flag the LATEST revision will not receive instances on future deployments. To restore assigning instances to the LATEST revision by default, run the `{parent_command} update-instance-split` command with `--to-latest`",
};
const flag10350: Fig.Option = {
  name: "--no-traffic",
  description:
    "True to avoid sending traffic to the revision being deployed. Setting this flag assigns any traffic assigned to the LATEST revision to the specific revision bound to LATEST before the deployment. The effect is that the revision being deployed will not receive traffic.\n+\nAfter a deployment with this flag the LATEST revision will not receive traffic on future deployments. To restore sending traffic to the LATEST revision by default, run the `gcloud run services update-traffic` command with `--to-latest`",
};
const flag10771: Fig.Option = {
  name: "--order",
  description:
    "Ordering of returned log entries based on timestamp field. _ORDER_ must be one of: *desc*, *asc*",
  args: {
    name: "ORDER",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["desc", "asc"],
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
const flag11092: Fig.Option = {
  name: "--parallelism",
  description:
    "Number of tasks that may run concurrently. Must be less than or equal to the number of tasks. Set to 0 to unset",
  args: {
    name: "PARALLELISM",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11403: Fig.Option = {
  name: "--port",
  description:
    'Container port to receive requests at. Also sets\nthe $PORT environment variable. Must be a number between 1 and 65535, inclusive.\nTo unset this field, pass the special value "default".\nIf updating an existing service with a TCP startup probe pointing to the\nprevious container port, this will also update the probe port',
  args: {
    name: "PORT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11421: Fig.Option = {
  name: "--post-key-revocation-action-type",
  description:
    "Action type after CMEK key revocation. _POST_KEY_REVOCATION_ACTION_TYPE_ must be one of:\n+\n*prevent-new*::: No new instances will be started after CMEK key revocation.\n*shut-down*::: No new instances will be started and the existing instances will be shut\ndown after CMEK key revocation.\n+\n:::\n+",
  args: {
    name: "POST_KEY_REVOCATION_ACTION_TYPE",
    description: "String",
    suggestions: ["prevent-new", "shut-down"],
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
const flag12005: Fig.Option = {
  name: "--readiness-probe",
  description:
    'Comma separated settings for readiness probe in the form KEY=VALUE.\nEach key stands for a field of the probe described in\nhttps://cloud.google.com/run/docs/reference/rest/v1/Container#Probe.\nCurrently supported keys are: timeoutSeconds, periodSeconds, failureThreshold, successThreshold, httpGet.port, httpGet.path, grpc.port, grpc.service.\n+\nFor example, to set a probe with 10s timeout and HTTP probe requests\nsent to 8080 port of the container:\n+\n    $ --readiness-probe=timeoutSeconds=10,httpGet.port=8080\n+\nTo remove existing probe:\n+\n    $ --readiness-probe=""',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag12326: Fig.Option = {
  name: "--region",
  description:
    "Region in which the resource can be found. Alternatively, set the property [run/region]",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12337: Fig.Option = {
  name: "--region",
  description:
    "The Cloud Run region.\n+\nTo set the `region` attribute:\n* provide the argument `workerpool` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `run/region`;\n* specify from a list of available regions in a prompt",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12340: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the WorkerPool. Overrides the default `run/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `WORKER_POOL` on the command line with a fully specified name;\n* specify the workerpool name from an interactive prompt with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `run/region`;\n* specify the region from an interactive prompt",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12469: Fig.Option = {
  name: "--regions",
  description:
    "Comma-separated list of regions in which the multi-region Service can be found",
  args: { name: "REGIONS", description: "String", suggestions: [] },
};
const flag12578: Fig.Option = {
  name: "--remove-cloudsql-instances",
  description: "Remove the given values from the current Cloud SQL instances",
  args: { name: "CLOUDSQL-INSTANCES", description: "List", suggestions: [] },
};
const flag12588: Fig.Option = {
  name: "--remove-containers",
  description: "List of containers to remove",
  args: { name: "CONTAINER", description: "List", suggestions: [] },
};
const flag12590: Fig.Option = {
  name: "--remove-custom-audiences",
  description: "Remove the given values from the current custom audiences",
  args: { name: "CUSTOM-AUDIENCES", description: "List", suggestions: [] },
};
const flag12611: Fig.Option = {
  name: "--remove-env-vars",
  description: "List of environment variables to be removed",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12713: Fig.Option = {
  name: "--remove-secrets",
  description: "List of secrets to be removed",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12757: Fig.Option = {
  name: "--remove-volume-mount",
  description:
    "Removes the volume mounted at the specified path from the current container",
  args: { name: "MOUNT_PATH", description: "List", suggestions: [] },
};
const flag12758: Fig.Option = {
  name: "--remove-volume",
  description: "Removes volumes from the Cloud Run resource",
  args: { name: "VOLUME", description: "List", suggestions: [] },
};
const flag13115: Fig.Option = {
  name: "--revision-suffix",
  description:
    "Specify the suffix of the revision name. Revision names always start with the service name automatically. For example, specifying [--revision-suffix=v1] for a service named 'helloworld', would lead to a revision named 'helloworld-v1'. Set empty string to clear the suffix and resume server-assigned naming",
  args: { name: "REVISION_SUFFIX", description: "String", suggestions: [] },
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
const flag13288: Fig.Option = {
  name: "--scaling",
  description:
    'The scaling mode to use for this service. Flag value could be either "auto" for automatic scaling, or a positive integer to configure manual scaling with the given integer as a fixed instance count',
  args: {
    name: "SCALING",
    description: "Googlecloudsdk.command_lib.run.flags:ScalingValue",
    suggestions: [],
  },
};
const flag13550: Fig.Option = {
  name: "--service-account",
  description:
    "the email address of an IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13661: Fig.Option = {
  name: "--session-affinity",
  description:
    "Whether to enable session affinity for connections to the service. Use *--session-affinity* to enable and *--no-session-affinity* to disable",
};
const flag13678: Fig.Option = {
  name: "--set-cloudsql-instances",
  description:
    "Completely replace the current Cloud SQL instances with the given values",
  args: { name: "CLOUDSQL-INSTANCES", description: "List", suggestions: [] },
};
const flag13679: Fig.Option = {
  name: "--set-cloudsql-instances",
  description:
    "You can specify a name of a Cloud SQL instance if it's in the same\n      project and region as your Cloud Run resource; otherwise specify\n      <project>:<region>:<instance> for the instance",
  args: { name: "CLOUDSQL-INSTANCES", description: "List", suggestions: [] },
};
const flag13681: Fig.Option = {
  name: "--set-custom-audiences",
  description:
    "Completely replace the current custom audiences with the given values",
  args: { name: "CUSTOM-AUDIENCES", description: "List", suggestions: [] },
};
const flag13684: Fig.Option = {
  name: "--set-env-vars",
  description:
    "List of key-value pairs to set as environment variables. All existing environment variables will be removed first",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag13706: Fig.Option = {
  name: "--set-secrets",
  description:
    "List of key-value pairs to set as secrets. All existing secrets will be removed first",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14155: Fig.Option = {
  name: "--source",
  description:
    "The location of the source to build. If a Dockerfile is present in the source code directory, it will be built using that Dockerfile, otherwise it will use Google Cloud buildpacks. See https://cloud.google.com/run/docs/deploying-source-code for more details. The location can be a directory on a local disk or a gzipped archive file (.tar.gz) in Google Cloud Storage. If the source is a local directory, this command skips the files specified in the `--ignore-file`. If `--ignore-file` is not specified, use `.gcloudignore` file. If a `.gcloudignore` file is absent and a `.gitignore` file is present in the local source directory, gcloud will use a generated Git-compatible `.gcloudignore` file that respects your .gitignored files. The global `.gitignore` is not respected. For more information on `.gcloudignore`, see `gcloud topic gcloudignore`",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14385: Fig.Option = {
  name: "--startup-probe",
  description:
    'Comma separated settings for startup probe in the form KEY=VALUE.\nEach key stands for a field of the probe described in\nhttps://cloud.google.com/run/docs/reference/rest/v1/Container#Probe.\nCurrently supported keys are: initialDelaySeconds, timeoutSeconds, periodSeconds, failureThreshold, httpGet.port, httpGet.path, grpc.port, grpc.service, tcpSocket.port.\n+\nFor example, to set a probe with 10s timeout and HTTP probe requests\nsent to 8080 port of the container:\n+\n    $ --startup-probe=timeoutSeconds=10,httpGet.port=8080\n+\nTo remove existing probe:\n+\n    $ --startup-probe=""',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag14520: Fig.Option = {
  name: "--subnet",
  description:
    "The VPC subnetwork that the Cloud Run job will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
  args: { name: "SUBNET", description: "String", suggestions: [] },
};
const flag14521: Fig.Option = {
  name: "--subnet",
  description:
    "The VPC subnetwork that the Cloud Run service will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
  args: { name: "SUBNET", description: "String", suggestions: [] },
};
const flag14522: Fig.Option = {
  name: "--subnet",
  description:
    "The VPC subnetwork that the Cloud Run worker will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
  args: { name: "SUBNET", description: "String", suggestions: [] },
};
const flag14624: Fig.Option = {
  name: "--tag",
  description: "Traffic tag to assign to the newly\ncreated revision",
  args: { name: "TAG", description: "String", suggestions: [] },
};
const flag14779: Fig.Option = {
  name: "--task-timeout",
  description:
    'Set the maximum time (deadline) a job task attempt can run for. In the case of retries, this deadline applies to each attempt of a task. If the task attempt does not complete within this time, it will be killed. It is specified as a duration; for example, "10m5s" is ten minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds',
  args: {
    name: "TASK_TIMEOUT",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag14783: Fig.Option = {
  name: "--tasks",
  description:
    "Number of tasks that must run to completion for the execution to be considered done",
  args: { name: "TASKS", description: "Int", suggestions: [] },
};
const flag14915: Fig.Option = {
  name: "--timeout",
  description:
    'Set the maximum request execution time (timeout). It is specified as a duration; for example, "10m5s" is ten minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds',
  args: {
    name: "TIMEOUT",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15152: Fig.Option = {
  name: "--update-env-vars",
  description: "List of key-value pairs to set as environment variables",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15168: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15217: Fig.Option = {
  name: "--update-secrets",
  description: "List of key-value pairs to set as secrets",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15249: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
};
const flag15289: Fig.Option = {
  name: "--use-http2",
  description:
    "Whether to use HTTP/2 for connections to the service. Use *--use-http2* to enable and *--no-use-http2* to disable",
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
const flag15511: Fig.Option = {
  name: "--vpc-connector",
  description: "Set a VPC connector for this resource",
  args: { name: "VPC_CONNECTOR", description: "String", suggestions: [] },
};
const flag15513: Fig.Option = {
  name: "--vpc-egress",
  description:
    "Specify which of the outbound traffic to send through Direct VPC egress or the VPC connector for this resource. This resource must have Direct VPC egress enabled or a VPC connector to set this flag. _VPC_EGRESS_ must be one of:\n+\n*all*::: (DEPRECATED) Sends all outbound traffic through Direct VPC egress or the VPC connector. Provides the same functionality as 'all-traffic'. Prefer to use 'all-traffic' instead.\n*all-traffic*::: Sends all outbound traffic through Direct VPC egress or the VPC connector.\n*private-ranges-only*::: Default option. Sends outbound traffic to private IP addresses (RFC 1918 and Private Google Access IPs) through Direct VPC egress or the VPC connector.\n+\nTraffic to other Cloud Run services might require additional configuration. See https://cloud.google.com/run/docs/securing/private-networking#send_requests_to_other_services_and_services for more information.\n:::\n+",
  args: {
    name: "VPC_EGRESS",
    description: "String",
    suggestions: ["all", "all-traffic", "private-ranges-only"],
  },
};
const flag15534: Fig.Option = {
  name: "--wait",
  description:
    "Wait until the execution has completed running before exiting. If not set, gcloud exits successfully when the execution has started.  Implies --execute-now",
};
const flag15574: Fig.Option = {
  name: "--workdir",
  description:
    "Working directory of the container process. If not specified, the container image's default working directory is used. To reset this field to its default, pass an empty string",
  args: { name: "WORKDIR", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "run",
  description: "Manage your Cloud Run applications",
  subcommands: [
    {
      name: "compose",
      description: "Support Docker Compose workflows on Cloud Run",
      subcommands: [
        {
          name: "up",
          description: "Deploy to Cloud Run from compose specification",
          options: [
            flag42,
            flag46,
            flag454,
            flag1201,
            { name: "--build", description: "Force build of images" },
            flag2292,
            flag3937,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--no-build",
              description: "Skip building from source if applicable",
            },
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "COMPOSE_FILE",
            description:
              "The compose yaml file to deploy from a Compose directory to Cloud Run",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "deploy",
      description: "Create or update a Cloud Run service",
      options: [
        flag42,
        flag46,
        flag154,
        flag160,
        flag288,
        flag287,
        flag454,
        flag681,
        flag720,
        {
          name: "--automatic-updates",
          description:
            "Indicates whether automatic base image updates should be enabled for an image built from source. Use *--automatic-updates* to enable and *--no-automatic-updates* to disable",
        },
        {
          name: "--base-image",
          description:
            "Specifies the base image to be used for automatic base image updates. When deploying from source using the Google Cloud buildpacks, this flag will also override the base image used for the application image. See https://cloud.google.com/run/docs/configuring/services/automatic-base-image-updates for more details",
          args: { name: "BASE_IMAGE", description: "String", suggestions: [] },
        },
        flag1201,
        flag1204,
        flag1271,
        {
          name: "--build-env-vars-file",
          description:
            'Path to a local YAML file with definitions for all build\n            environment variables. All existing build environment variables will\n            be removed before the new build environment variables are added.\n            Example YAML content:\n+\n              ```\n              KEY_1: "value1"\n              KEY_2: "value 2"\n              ```',
          args: {
            name: "FILE_PATH",
            description:
              "Googlecloudsdk.command_lib.util.args.map_util:ArgDictFile",
            suggestions: [],
          },
        },
        {
          name: "--build-service-account",
          description:
            "Specifies the service account to use to execute the build. Applies only\nto source deploy builds using the Build API",
          args: {
            name: "BUILD_SERVICE_ACCOUNT",
            description: "Googlecloudsdk.command_lib.run.flags:ServiceAccount",
            suggestions: [],
          },
        },
        {
          name: "--build-worker-pool",
          description:
            "Name of the Cloud Build Custom Worker Pool that should be used to build\nthe function. The format of this field is\n`projects/${PROJECT}/locations/${LOCATION}/workerPools/${WORKERPOOL}`\nwhere ${PROJECT} is the project id and ${LOCATION} is the location where\nthe worker pool is defined and ${WORKERPOOL} is the short name of the\nworker pool",
          args: {
            name: "BUILD_WORKER_POOL",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--clear-base-image",
          description: "Opts out of automatic base image updates",
        },
        flag1530,
        {
          name: "--clear-build-env-vars",
          description: "Remove all build environment variables",
        },
        {
          name: "--clear-build-service-account",
          description: "Clears the Cloud Build service account field",
        },
        {
          name: "--clear-build-worker-pool",
          description: "Clears the Cloud Build Custom Worker Pool field",
        },
        flag1550,
        flag1581,
        flag1631,
        flag1650,
        flag1711,
        flag1723,
        flag1798,
        flag1793,
        flag1820,
        flag1873,
        flag1954,
        flag1955,
        flag1959,
        flag2152,
        flag2208,
        flag2292,
        flag2418,
        flag2514,
        flag2508,
        flag2512,
        flag2928,
        flag3008,
        flag3009,
        flag3271,
        flag4368,
        flag4466,
        flag4624,
        flag4900,
        flag4902,
        flag5091,
        {
          name: "--function",
          description:
            "Specifies that the deployed object is a function. If a value is provided, that value is used as the entrypoint",
          args: { name: "FUNCTION", description: "String", suggestions: [] },
        },
        flag5373,
        flag5370,
        flag5371,
        flag5453,
        flag5574,
        {
          name: "--image",
          description:
            'Name of the container image to deploy (e.g. `us-docker.pkg.dev/cloudrun/container/hello:latest`). When used with --source, the image must be the URI of an Artifact Registry Docker repository in the Docker format ($REGION-docker.pkg.dev/$PROJECT/$REPOSITORY") or ($REGION-docker.pkg.dev/$PROJECT/$REPOSITORY/$IMAGE_NAME"). The image name must be the same as the name of the service',
          args: { name: "IMAGE", description: "String", suggestions: [] },
        },
        flag5699,
        flag5784,
        flag6002,
        flag6252,
        flag6411,
        flag6546,
        flag7356,
        flag7717,
        flag7646,
        flag7768,
        flag7920,
        flag7891,
        {
          name: "--namespace",
          description:
            'Specific to Cloud Run for Anthos: Kubernetes namespace for the service.\n+\nTo set the `namespace` attribute:\n* provide the argument `SERVICE` on the command line with a fully specified name;\n* specify the service name from an interactive prompt with a fully specified name;\n* provide the argument `--namespace` on the command line;\n* set the property `run/namespace`;\n* For Cloud Run on Kubernetes Engine, defaults to "default". Otherwise, defaults to project ID.;\n* provide the argument `project` on the command line;\n* set the property `core/project`;\n* specify the project ID from an interactive prompt',
          args: { name: "NAMESPACE", description: "String", suggestions: [] },
        },
        flag8272,
        flag8214,
        flag10350,
        flag11403,
        flag11421,
        flag11637,
        flag11946,
        flag12005,
        flag12326,
        flag12469,
        {
          name: "--remove-build-env-vars",
          description: "List of build environment variables to be removed",
          args: { name: "KEY", description: "List", suggestions: [] },
        },
        flag12578,
        flag12588,
        flag12590,
        flag12611,
        flag12637,
        flag12713,
        flag12758,
        flag12757,
        flag13115,
        flag13288,
        flag13550,
        flag13661,
        {
          name: "--set-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables. All existing build environment variables will be removed first",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag13678,
        flag13681,
        flag13684,
        flag13706,
        flag14155,
        flag14385,
        flag14521,
        flag14624,
        flag14915,
        flag14975,
        {
          name: "--update-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag15152,
        flag15168,
        flag15217,
        flag15289,
        flag15315,
        flag15424,
        flag15511,
        flag15513,
        flag15574,
      ],
      args: {
        name: "SERVICE",
        description:
          "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line;\n* specify the service name from an interactive prompt",
        isOptional: true,
      },
    },
    {
      name: "domain-mappings",
      description: "View and manage your Cloud Run for Anthos domain mappings",
      subcommands: [
        {
          name: "create",
          description: "Create domain mappings for Cloud Run for Anthos",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3893,
            flag4900,
            flag4902,
            {
              name: "--force-override",
              description:
                "Map this domain even if it is already mapped to another service",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8115,
            flag11637,
            flag11946,
            {
              name: "--service",
              description: "Create domain mapping for the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete domain mappings for Cloud Run for Anthos",
          options: [
            flag42,
            flag46,
            flag718,
            flag1201,
            flag2292,
            flag3893,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8115,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "describe",
          description: "Describe domain mappings for Cloud Run for Anthos",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3893,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8115,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "Lists domain mappings for Cloud Run for Anthos",
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
      name: "jobs",
      description: "View and manage your Cloud Run jobs",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Run job",
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
            flag7749,
            flag11637,
            flag11946,
            flag12326,
            flag13137,
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
          name: "create",
          description: "Create a Cloud Run job",
          options: [
            flag42,
            flag46,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1650,
            flag1873,
            flag1954,
            flag1955,
            flag2152,
            flag2292,
            flag2418,
            flag2514,
            flag3008,
            flag4466,
            flag4614,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5687,
            flag5699,
            flag6252,
            flag6416,
            flag7356,
            flag7677,
            flag7768,
            flag8271,
            flag8213,
            flag11092,
            flag11637,
            flag11946,
            flag12326,
            flag12611,
            flag12713,
            flag12758,
            flag12757,
            flag13550,
            flag13679,
            flag13684,
            flag13706,
            flag14385,
            flag14520,
            flag14779,
            flag14783,
            flag14975,
            flag15152,
            flag15217,
            flag15315,
            flag15424,
            flag15511,
            flag15513,
            flag15534,
            flag15574,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `JOB` on the command line;\n* specify the job name from an interactive prompt",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a job",
          options: [
            flag42,
            flag46,
            flag718,
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
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `JOB` on the command line",
          },
        },
        {
          name: "deploy",
          description: "Create or update a Cloud Run job",
          options: [
            flag42,
            flag46,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1650,
            flag1797,
            flag1792,
            flag1873,
            flag1954,
            flag1955,
            flag2152,
            flag2292,
            flag2418,
            flag2514,
            flag3008,
            flag4466,
            flag4614,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5687,
            flag5699,
            flag6252,
            flag6416,
            flag7356,
            flag7677,
            flag7768,
            flag8271,
            flag8213,
            flag11092,
            flag11637,
            flag11946,
            flag12326,
            flag12588,
            flag12611,
            flag12713,
            flag12758,
            flag12757,
            flag13550,
            flag13679,
            flag13684,
            flag13706,
            flag14155,
            flag14385,
            flag14520,
            flag14779,
            flag14783,
            flag14975,
            flag15152,
            flag15217,
            flag15315,
            flag15424,
            flag15511,
            flag15513,
            flag15534,
            flag15574,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `JOB` on the command line;\n* specify the job name from an interactive prompt",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Obtain details about jobs",
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
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `JOB` on the command line",
          },
        },
        {
          name: "execute",
          description: "Execute a job",
          options: [
            flag42,
            flag46,
            {
              name: "--args",
              description:
                "Comma-separated arguments passed to the command run by the container image. If provided, an execution will be created with the input values. Otherwise, the existing arguments of the job are used",
              args: { name: "ARG", description: "List", suggestions: [] },
            },
            flag720,
            flag1201,
            flag2292,
            flag2418,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12326,
            {
              name: "--task-timeout",
              description:
                'The existing maximum time (deadline) a job task attempt can run for. If provided, an execution will be created with this value. Otherwise existing maximum time of the job is used. In the case of retries, this deadline applies to each attempt of a task. If the task attempt does not complete within this time, it will be killed. It is specified as a duration; for example, "10m5s" is ten minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds',
              args: {
                name: "TASK_TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--tasks",
              description:
                "Number of tasks that must run to completion for the execution to be considered done. If provided, an execution will be created with this value. Otherwise the existing task count of the job is used",
              args: {
                name: "TASKS",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-env-vars",
              description:
                "List of key-value pairs to set as environment variables overrides for an execution of a job. If provided, an execution will be created with the merge result of the input values and the existing environment variables. New value overrides existing value if they have the same key. If not provided, existing environment variables are used",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15424,
            {
              name: "--wait",
              description:
                "Wait until the execution has completed running before exiting. If not set, gcloud exits successfully when the execution has started",
            },
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `JOB` on the command line;\n* specify the job name from an interactive prompt",
            isOptional: true,
          },
        },
        {
          name: "executions",
          description: "View and manage your Cloud Run jobs executions",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel an execution",
              options: [
                flag42,
                flag46,
                flag718,
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
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "EXECUTION",
                description:
                  "ID of the Execution or fully qualified identifier for the Execution.\n+\nTo set the `executions` attribute:\n* provide the argument `EXECUTION` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an execution",
              options: [
                flag42,
                flag46,
                flag718,
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
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "EXECUTION",
                description:
                  "ID of the Execution or fully qualified identifier for the Execution.\n+\nTo set the `executions` attribute:\n* provide the argument `EXECUTION` on the command line",
              },
            },
            {
              name: "describe",
              description: "Obtain details about executions",
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
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "EXECUTION",
                description:
                  "ID of the Execution or fully qualified identifier for the Execution.\n+\nTo set the `executions` attribute:\n* provide the argument `EXECUTION` on the command line",
              },
            },
            {
              name: "describe-latest",
              description: "Obtain details about the latest execution of a job",
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
                  name: "--job",
                  description:
                    "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `--job` on the command line",
                  args: { name: "JOB", description: "String", suggestions: [] },
                },
                flag7356,
                flag11637,
                flag11946,
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "list",
              description: "List executions",
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
                {
                  name: "--job",
                  description: "Limit matched resources to the given job",
                  args: { name: "JOB", description: "String", suggestions: [] },
                },
                flag6515,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag12326,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "tasks",
              description: "View and manage your Cloud Run jobs tasks",
              subcommands: [
                {
                  name: "describe",
                  description: "Obtain details about tasks",
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
                    flag12326,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "TASK",
                    description:
                      "ID of the Task or fully qualified identifier for the Task.\n+\nTo set the `tasks` attribute:\n* provide the argument `TASK` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List tasks",
                  options: [
                    {
                      name: "--abandoned",
                      description: "Include abandoned tasks",
                    },
                    flag42,
                    flag46,
                    flag1201,
                    {
                      name: "--cancelled",
                      description: "Include cancelled tasks",
                    },
                    {
                      name: "--completed",
                      description:
                        "Include succeeded, failed, and cancelled tasks",
                    },
                    flag2292,
                    {
                      name: "--execution",
                      description:
                        "ID of the Execution or fully qualified identifier for the Execution.\n+\nTo set the `executions` attribute:\n* provide the argument `--execution` on the command line",
                      args: {
                        name: "EXECUTION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    { name: "--failed", description: "Include failed tasks" },
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag7356,
                    {
                      name: "--no-completed",
                      description: "Include running and pending tasks",
                    },
                    {
                      name: "--no-started",
                      description: "Include pending and abandoned tasks",
                    },
                    flag11059,
                    { name: "--pending", description: "Include pending tasks" },
                    flag11637,
                    flag11946,
                    flag12326,
                    { name: "--running", description: "Include running tasks" },
                    flag13948,
                    {
                      name: "--started",
                      description:
                        "Include running, succeeded, failed, and cancelled tasks",
                    },
                    {
                      name: "--succeeded",
                      description: "Include succeeded tasks",
                    },
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
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Run job",
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
            flag12326,
            flag13948,
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
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12326,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "logs",
          description: "Read logs for Cloud Run jobs",
          subcommands: [
            {
              name: "read",
              description: "Read logs for Cloud Run jobs",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5107,
                flag5453,
                flag5699,
                flag6515,
                flag7352,
                flag7356,
                flag10771,
                flag11637,
                flag11946,
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: { name: "JOB", description: "Name for a Cloud Run job" },
            },
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Run job",
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
            flag7753,
            flag11637,
            flag11946,
            flag12326,
            flag13138,
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
          name: "replace",
          description: "Create or replace a job from a YAML job specification",
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
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Cloud Run job definition for the job to update or create. Defaults to `job.yaml` if not specified",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a job",
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
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "JOB",
              description:
                "ID of the job or fully qualified identifier for the job.\n+\nTo set the `job` attribute:\n* provide the argument `job` on the command line",
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
          description: "Update a Cloud Run Job",
          options: [
            flag42,
            flag46,
            flag154,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1530,
            flag1550,
            flag1650,
            flag1723,
            flag1797,
            flag1792,
            flag1873,
            flag1954,
            flag1955,
            flag1959,
            flag2152,
            flag2292,
            flag2418,
            flag2514,
            flag3008,
            flag4466,
            flag4614,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5687,
            flag5699,
            flag6252,
            flag6411,
            flag7356,
            flag7677,
            flag7768,
            flag8271,
            flag8213,
            flag11092,
            flag11637,
            flag11946,
            flag12326,
            flag12578,
            flag12588,
            flag12611,
            flag12637,
            flag12713,
            flag12758,
            flag12757,
            flag13550,
            flag13678,
            flag13684,
            flag13706,
            flag14385,
            flag14520,
            flag14779,
            flag14783,
            flag14975,
            flag15152,
            flag15168,
            flag15217,
            flag15315,
            flag15424,
            flag15511,
            flag15513,
            flag15534,
            flag15574,
          ],
          args: {
            name: "JOB",
            description:
              "ID of the Job or fully qualified identifier for the Job.\n+\nTo set the `jobs` attribute:\n* provide the argument `JOB` on the command line;\n* specify the job name from an interactive prompt",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "multi-region-services",
      description: "Manage your Cloud Run multi-region services",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a multi-region service",
          options: [
            flag42,
            flag46,
            flag718,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8119,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line",
          },
        },
        {
          name: "describe",
          description: "Command to describe a multi-region service",
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
            flag8119,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line",
          },
        },
        {
          name: "list",
          description: "List available multi-region services",
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
            flag12326,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "replace",
          description: "Create or Update multi-region service from YAML",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3937,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12326,
            flag12469,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Knative service definition for the service to update or deploy. Defaults to `service.yaml` if not specified",
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update environment variables, add/remove regions, and other configuration settings in Multi-Region Services",
          options: [
            flag42,
            flag46,
            flag154,
            flag160,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1530,
            flag1550,
            flag1581,
            flag1631,
            flag1650,
            flag1711,
            flag1723,
            flag1798,
            flag1793,
            flag1820,
            flag1873,
            flag1954,
            flag1955,
            flag1959,
            flag2152,
            flag2208,
            flag2292,
            flag2418,
            flag2514,
            flag2508,
            flag2512,
            flag2928,
            flag3008,
            flag3009,
            flag4368,
            flag4466,
            flag4624,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5574,
            flag5686,
            flag5699,
            flag5784,
            flag6002,
            flag6252,
            flag6411,
            flag6546,
            flag7356,
            flag7717,
            flag7646,
            flag7768,
            flag7920,
            flag7891,
            flag8120,
            flag8272,
            flag8214,
            flag10350,
            flag11403,
            flag11421,
            flag11637,
            flag11946,
            flag12005,
            flag12326,
            flag12578,
            flag12588,
            flag12590,
            flag12611,
            flag12637,
            flag12713,
            flag12758,
            flag12757,
            flag13115,
            flag13288,
            flag13550,
            flag13661,
            flag13678,
            flag13681,
            flag13684,
            flag13706,
            flag14385,
            flag14521,
            flag14624,
            flag14915,
            flag14975,
            flag15152,
            flag15168,
            flag15217,
            flag15289,
            flag15315,
            flag15424,
            flag15511,
            flag15513,
            flag15574,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line;\n* specify the service name from an interactive prompt",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "regions",
      description: "View available Cloud Run (fully managed) regions",
      subcommands: [
        {
          name: "list",
          description: "List available Cloud Run (fully managed) regions",
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
      name: "revisions",
      description: "View and manage your Cloud Run revisions",
      subcommands: [
        {
          name: "delete",
          description: "Delete a revision",
          options: [
            flag42,
            flag46,
            flag718,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8117,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `REVISION` on the command line",
          },
        },
        {
          name: "describe",
          description: "Obtain details about revisions",
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
            flag8117,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `REVISION` on the command line",
          },
        },
        {
          name: "list",
          description: "List available revisions",
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
            flag12326,
            {
              name: "--service",
              description: "Limit matched revisions to the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
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
      name: "services",
      description: "View and manage your Cloud Run services",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Run service",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12326,
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
          name: "delete",
          description: "Delete a service",
          options: [
            flag42,
            flag46,
            flag718,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8119,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line",
          },
        },
        {
          name: "describe",
          description: "Obtain details about a given service",
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
            flag8119,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Run service",
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
            flag12326,
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
          name: "list",
          description: "List available services",
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
            flag12326,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "logs",
          description: "Read logs for Cloud Run services",
          subcommands: [
            {
              name: "read",
              description: "Read logs for a Cloud Run service",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5107,
                flag5453,
                flag5699,
                flag6515,
                flag7352,
                flag7356,
                flag10771,
                flag11637,
                flag11946,
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SERVICE",
                description: "Name for a Cloud Run service",
              },
            },
          ],
        },
        {
          name: "proxy",
          description:
            "Proxy a service to localhost authenticating as the active account or with the specified token",
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
            flag8119,
            {
              name: "--port",
              description:
                "Local port number to expose the proxied service. If not specified, it will be set to 8080",
              args: {
                name: "PORT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12326,
            {
              name: "--tag",
              description:
                "Traffic tag of the service to expose via the proxy. If not specified, the default service URL will be proxied which may serve different revisions based on traffic-splits. Custom tags can be used to proxy specific revisions. Please see https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration#tags",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            {
              name: "--token",
              description:
                "The specific identity token to add to all requests of the proxied service. If not specified, the identity token of the currently active authenticated account will be used (e.g. gcloud auth print-identity-token)",
              args: { name: "TOKEN", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Run service",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12326,
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
          name: "replace",
          description:
            "Create or replace a service from a YAML service specification",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3937,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Knative service definition for the service to update or deploy. Defaults to `service.yaml` if not specified",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a service",
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
            flag12326,
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
          description:
            "Update Cloud Run environment variables and other configuration settings",
          options: [
            flag42,
            flag46,
            flag154,
            flag160,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1530,
            flag1550,
            flag1581,
            flag1631,
            flag1650,
            flag1711,
            flag1723,
            flag1798,
            flag1793,
            flag1820,
            flag1873,
            flag1954,
            flag1955,
            flag1959,
            flag2152,
            flag2208,
            flag2292,
            flag2418,
            flag2514,
            flag2508,
            flag2512,
            flag2928,
            flag3008,
            flag3009,
            flag4368,
            flag4466,
            flag4624,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5574,
            flag5686,
            flag5699,
            flag5784,
            flag6002,
            flag6252,
            flag6411,
            flag6546,
            flag7356,
            flag7717,
            flag7646,
            flag7768,
            flag7920,
            flag7891,
            flag8120,
            flag8272,
            flag8214,
            flag10350,
            flag11403,
            flag11421,
            flag11637,
            flag11946,
            flag12005,
            flag12326,
            flag12578,
            flag12588,
            flag12590,
            flag12611,
            flag12637,
            flag12713,
            flag12758,
            flag12757,
            flag13115,
            flag13288,
            flag13550,
            flag13661,
            flag13678,
            flag13681,
            flag13684,
            flag13706,
            flag14385,
            flag14521,
            flag14624,
            flag14915,
            flag14975,
            flag15152,
            flag15168,
            flag15217,
            flag15289,
            flag15315,
            flag15424,
            flag15511,
            flag15513,
            flag15574,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line;\n* specify the service name from an interactive prompt",
            isOptional: true,
          },
        },
        {
          name: "update-traffic",
          description: "Adjust the traffic assignments for a Cloud Run service",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            { name: "--clear-tags", description: "Remove all tags" },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8120,
            flag11637,
            flag11946,
            flag12326,
            {
              name: "--remove-tags",
              description: "List of tags to be removed",
              args: { name: "TAG", description: "List", suggestions: [] },
            },
            {
              name: "--set-tags",
              description:
                "List of key-value pairs to set as tags. All existing tags will be removed first",
              args: {
                name: "TAG=REVISION",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--to-latest",
              description:
                "True to assign 100 percent of traffic to the 'latest' revision of this service. Note that when a new revision is created, it will become the 'latest' and traffic will be directed to it. Defaults to False. Synonymous with '--to-revisions=LATEST=100'",
            },
            {
              name: "--to-revisions",
              description:
                "Comma separated list of traffic assignments in the form REVISION-NAME=PERCENTAGE. REVISION-NAME must be the name for a revision for the service as returned by 'gcloud beta run list revisions'. PERCENTAGE must be an integer percentage between 0 and 100 inclusive.  Ex service-nw9hs=10,service-nw9hs=20 Up to 100 percent of traffic may be assigned. If 100 percent of traffic is assigned,  the Service traffic is updated as specified. If under 100 percent of traffic is assigned, the Service traffic is updated as specified for revisions with assignments and traffic is scaled up or down down proportionally as needed for revision that are currently serving traffic but that do not have new assignments. For example assume revision-1 is serving 40 percent of traffic and revision-2 is serving 60 percent. If revision-1 is assigned 45 percent of traffic and no assignment is made for revision-2, the service is updated with revsion-1 assigned 45 percent of traffic and revision-2 scaled down to 55 percent. You can use \"LATEST\" as a special revision name to always put the given percentage of traffic on the latest ready revision",
              args: {
                name: "REVISION-NAME=PERCENTAGE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--to-tags",
              description:
                "Comma separated list of traffic assignments in the form TAG=PERCENTAGE. TAG must match a traffic tag on a revision of the service. It may match a previously-set tag, or one assigned using the `--set-tags` or `--update-tags` flags on this command. PERCENTAGE must be an integer percentage between 0 and 100 inclusive. Up to 100 percent of traffic may be assigned. If 100 percent of traffic is assigned, the service traffic is updated as specified. If under 100 percent of traffic is assigned, the service traffic is updated as specified to the given tags, and other traffic is scaled up or down proportionally. For example, assume the revision tagged `next` is serving 40 percent of traffic and the revision tagged `current` is serving 60 percent. If `next` is assigned 45 percent of traffic and no assignment is made for `current`, the service is updated with `next` assigned 45 percent of traffic and `current` scaled down to 55 percent",
              args: {
                name: "TAG=PERCENTAGE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-tags",
              description: "List of key-value pairs to set as tags",
              args: {
                name: "TAG=REVISION",
                description: "Dict",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `SERVICE` on the command line;\n* specify the service name from an interactive prompt",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "worker-pools",
      description: "View and manage your Cloud Run worker pools",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Run worker pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12337,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKERPOOL",
            description:
              "ID of the workerpool or fully qualified identifier for the workerpool.\n+\nTo set the `workerpool` attribute:\n* provide the argument `workerpool` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a worker-pool",
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
            {
              name: "--region",
              description:
                "The Cloud region for the WorkerPool. Overrides the default `run/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `WORKER_POOL` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `run/region`;\n* specify the region from an interactive prompt",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool.\n+\nTo set the `worker-pool` attribute:\n* provide the argument `WORKER_POOL` on the command line",
          },
        },
        {
          name: "deploy",
          description: "Create or update a Cloud Run worker-pool",
          options: [
            flag42,
            flag46,
            flag154,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1530,
            flag1550,
            flag1631,
            flag1650,
            flag1711,
            flag1723,
            flag1799,
            flag1794,
            flag1820,
            flag1873,
            flag1954,
            flag1955,
            flag2152,
            flag2292,
            flag2418,
            flag2514,
            flag3008,
            flag3271,
            flag4368,
            flag4466,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5686,
            flag5699,
            flag5930,
            flag6252,
            flag6411,
            flag7356,
            flag7768,
            flag8273,
            flag8215,
            flag10013,
            flag11421,
            flag11637,
            flag11946,
            flag12340,
            flag12578,
            flag12588,
            flag12611,
            flag12637,
            flag12713,
            flag12758,
            flag12757,
            flag13115,
            flag13550,
            flag13678,
            flag13684,
            flag13706,
            flag14155,
            flag14522,
            flag14975,
            flag15152,
            flag15168,
            flag15217,
            flag15315,
            flag15424,
            flag15513,
            flag15574,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool.\n+\nTo set the `worker-pool` attribute:\n* provide the argument `WORKER_POOL` on the command line;\n* specify the workerpool name from an interactive prompt",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Obtain details about a given worker-pool",
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
            flag12326,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool.\n+\nTo set the `worker-pool` attribute:\n* provide the argument `WORKER_POOL` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Run worker pool",
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
            flag12337,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKERPOOL",
            description:
              "ID of the workerpool or fully qualified identifier for the workerpool.\n+\nTo set the `workerpool` attribute:\n* provide the argument `workerpool` on the command line",
          },
        },
        {
          name: "list",
          description: "List available worker-pools",
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
            flag11946,
            flag12326,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "logs",
          description: "Read logs for Cloud Run worker pools",
          subcommands: [
            {
              name: "read",
              description: "Read logs for a Cloud Run worker pool",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5107,
                flag5453,
                flag5699,
                flag6515,
                flag7352,
                flag7356,
                flag10771,
                flag11637,
                flag11946,
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKER_POOL",
                description: "Name for a Cloud Run worker pool",
              },
            },
            {
              name: "tail",
              description: "Tail logs for a Cloud Run worker pool",
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
                flag7352,
                flag7356,
                flag11637,
                flag11946,
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKER_POOL",
                description: "Name for a Cloud Run worker pool",
              },
            },
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Run worker pool",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12337,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKERPOOL",
            description:
              "ID of the workerpool or fully qualified identifier for the workerpool.\n+\nTo set the `workerpool` attribute:\n* provide the argument `workerpool` on the command line",
          },
        },
        {
          name: "replace",
          description:
            "Create or replace a worker-pool from a YAML worker-pool specification",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3937,
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
            name: "FILE",
            description:
              "The absolute path to the YAML file with a Cloud Run worker-pool definition for the worker-pool to update or create. Defaults to `worker-pool.yaml` if not specified",
            isOptional: true,
          },
        },
        {
          name: "revisions",
          description: "View and manage your Cloud Run WorkerPools revisions",
          subcommands: [
            {
              name: "delete",
              description: "Delete a worker pool revision",
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
                {
                  name: "--region",
                  description:
                    "The Cloud region for the WorkerPoolRevision. Overrides the default `run/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `WORKER_POOL_REVISION` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `run/region`;\n* specify the region from an interactive prompt",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--worker-pool",
                  description:
                    "WorkerPool for the WorkerPoolRevision.\n+\nTo set the `worker-pool` attribute:\n* provide the argument `WORKER_POOL_REVISION` on the command line with a fully specified name;\n* provide the argument `--worker-pool` on the command line;\n* specify the workerpool name from an interactive prompt",
                  args: {
                    name: "WORKER_POOL",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "WORKER_POOL_REVISION",
                description:
                  "ID of the WorkerPoolRevision or fully qualified identifier for the WorkerPoolRevision.\n+\nTo set the `revision` attribute:\n* provide the argument `WORKER_POOL_REVISION` on the command line",
              },
            },
            {
              name: "describe",
              description: "Obtain details about a given worker pool revision",
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
                flag12326,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "WORKER_POOL_REVISION",
                description:
                  "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `WORKER_POOL_REVISION` on the command line",
              },
            },
            {
              name: "list",
              description: "List available worker pool revisions",
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
                flag12326,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                {
                  name: "--worker-pool",
                  description: "Limit matched revisions to the given worker",
                  args: {
                    name: "WORKER_POOL",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a worker pool",
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
            flag12337,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "WORKERPOOL",
              description:
                "ID of the workerpool or fully qualified identifier for the workerpool.\n+\nTo set the `workerpool` attribute:\n* provide the argument `workerpool` on the command line",
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
          description:
            "Update Cloud Run environment variables and other configuration settings",
          options: [
            flag42,
            flag46,
            flag154,
            flag288,
            flag287,
            flag681,
            flag720,
            flag1201,
            flag1204,
            flag1271,
            flag1530,
            flag1550,
            flag1631,
            flag1650,
            flag1711,
            flag1723,
            flag1799,
            flag1794,
            flag1820,
            flag1873,
            flag1954,
            flag1955,
            flag2152,
            flag2292,
            flag2418,
            flag2514,
            flag3008,
            flag3271,
            flag4368,
            flag4466,
            flag4900,
            flag4902,
            flag5091,
            flag5373,
            flag5370,
            flag5371,
            flag5453,
            flag5686,
            flag5699,
            flag5930,
            flag6252,
            flag6411,
            flag7356,
            flag7768,
            flag8273,
            flag8215,
            flag10013,
            flag11421,
            flag11637,
            flag11946,
            flag12340,
            flag12578,
            flag12588,
            flag12611,
            flag12637,
            flag12713,
            flag12758,
            flag12757,
            flag13115,
            flag13550,
            flag13678,
            flag13684,
            flag13706,
            flag14522,
            flag14975,
            flag15152,
            flag15168,
            flag15217,
            flag15315,
            flag15424,
            flag15513,
            flag15574,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool.\n+\nTo set the `worker-pool` attribute:\n* provide the argument `WORKER_POOL` on the command line;\n* specify the workerpool name from an interactive prompt",
            isOptional: true,
          },
        },
        {
          name: "update-instance-split",
          description:
            "Adjust the instance assignments for a Cloud Run worker-pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1271,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12340,
            {
              name: "--to-latest",
              description:
                "True to assign 100 percent of instances to the 'latest' revision of this service. Note that when a new revision is created, it will become the 'latest' and instances will be fully assigned to it unless configured otherwise using `--[no-]promote` flag. Defaults to False. Synonymous with '--to-revisions=LATEST=100'",
            },
            {
              name: "--to-revisions",
              description:
                "Comma separated list of instance assignments in the form REVISION-NAME=PERCENTAGE. REVISION-NAME must be the name for a revision for the worker as returned by 'gcloud run workers revisions list --worker=WORKER' . PERCENTAGE must be an integer percentage between 0 and 100 inclusive.  Ex worker-nw9hs=10,worker-nw9hs=20 Up to 100 percent of instances may be assigned. If the total of 100 percent of instances is assigned, the Worker instance split is updated as specified. If under 100 percent of instance split is assigned, the Worker instance split is updated as specified for revisions with assignments and instance split is scaled up or down proportionally as needed for revision that are currently serving workload but that do not have new assignments. For example assume revision-1 is serving 40 percent of workload and revision-2 is serving 60 percent. If revision-1 is assigned 45 percent of instances and no assignment is made for revision-2, the worker is updated with revsion-1 assigned 45 percent of instances and revision-2 scaled down to 55 percent. You can use \"LATEST\" as a special revision name to always put the given percentage of instance split on the latest ready revision",
              args: {
                name: "REVISION-NAME=PERCENTAGE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "ID of the WorkerPool or fully qualified identifier for the WorkerPool.\n+\nTo set the `worker-pool` attribute:\n* provide the argument `WORKER_POOL` on the command line;\n* specify the workerpool name from an interactive prompt",
            isOptional: true,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
