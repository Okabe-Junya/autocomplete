// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag20: Fig.Option = {
  name: "--accelerator",
  description:
    "Attaches accelerators (e.g. GPUs) to all nodes.\n+\n*type*::: (Required) The specific type (e.g. nvidia-tesla-t4 for NVIDIA T4)\nof accelerator to attach to the instances. Use ```gcloud compute\naccelerator-types list``` to learn about all available accelerator types.\n+\n*count*::: (Optional) The number of accelerators to attach to the\ninstances. The default value is 1.\n+\n*gpu-driver-version*::: (Optional) The NVIDIA driver version to install. GPU_DRIVER_VERSION must be one of:\n+\n  `default`: Install the default driver version for this GKE version. For GKE version 1.30.1-gke.1156000 and later, this is the default option.\n+\n  `latest`: Install the latest driver version available for this GKE version.\n  Can only be used for nodes that use Container-Optimized OS.\n+\n  `disabled`: Skip automatic driver installation. You must manually install a\n  driver after you create the cluster. For GKE version 1.30.1-gke.1156000 and earlier, this is the default option.\n  To manually install the GPU driver, refer to https://cloud.google.com/kubernetes-engine/docs/how-to/gpus#installing_drivers.\n+\n*gpu-partition-size*::: (Optional) The GPU partition size used when running multi-instance GPUs.\nFor information about multi-instance GPUs,\nrefer to: https://cloud.google.com/kubernetes-engine/docs/how-to/gpus-multi\n+\n*gpu-sharing-strategy*::: (Optional) The GPU sharing strategy (e.g. time-sharing) to use.\nFor information about GPU sharing,\nrefer to: https://cloud.google.com/kubernetes-engine/docs/concepts/timesharing-gpus\n+\n*max-shared-clients-per-gpu*::: (Optional) The max number of containers allowed\nto share each GPU on the node. This field is used together with `gpu-sharing-strategy`",
  args: {
    name: "type=TYPE,[count=COUNT,gpu-driver-version=GPU_DRIVER_VERSION,gpu-partition-size=GPU_PARTITION_SIZE,gpu-sharing-strategy=GPU_SHARING_STRATEGY,max-shared-clients-per-gpu=MAX_SHARED_CLIENTS_PER_GPU]",
    description: "Dict",
    suggestions: [],
  },
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
const flag127: Fig.Option = {
  name: "--add-allowed-custom-role",
  description: "Add a single custom role to the allowed custom roles list",
  args: {
    name: "ADD_ALLOWED_CUSTOM_ROLE",
    description: "String",
    suggestions: [],
  },
};
const flag130: Fig.Option = {
  name: "--add-annotations",
  description:
    "Add the given key-value pairs to the current annotations, or update its value if the key already exists",
  args: {
    name: "KEY1=VALUE1,KEY2=VALUE2",
    description: "Dict",
    suggestions: [],
  },
};
const flag202: Fig.Option = {
  name: "--add-maintenance-exclusion-until-end-of-support",
  description: "Add node pool maintenance exclusion until the end of support",
};
const flag282: Fig.Option = {
  name: "--add-upgrade-soaking-override",
  description:
    "Overrides the soaking time for a particular upgrade name and version\npropagating through the current fleet. Set soaking to 0 days to bypass\nsoaking and fast-forward the upgrade to the downstream fleet.\n+\nSee `$ gcloud topic datetimes` for information on duration formats",
  args: {
    name: "ADD_UPGRADE_SOAKING_OVERRIDE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag283: Fig.Option = {
  name: "--add-upgrade-soaking-override",
  description:
    "Overrides the soaking time for a particular upgrade name and version propagating through the\ncurrent scope. Set soaking to 0 days to bypass soaking and fast-forward the upgrade to the\ndownstream scope.\n+\nSee `$ gcloud topic datetimes` for information on duration formats",
  args: {
    name: "ADD_UPGRADE_SOAKING_OVERRIDE",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag313: Fig.Option = {
  name: "--additive-vpc-scope-dns-domain",
  description:
    "The domain used in Additive VPC scope. Only works with Cluster Scope",
  args: {
    name: "ADDITIVE_VPC_SCOPE_DNS_DOMAIN",
    description: "String",
    suggestions: [],
  },
};
const flag325: Fig.Option = {
  name: "--admin-cluster-membership-location",
  description:
    "Google Cloud location for the admin_cluster_membership.\n+\nTo set the `location` attribute:\n* provide the argument `--admin-cluster-membership` on the command line with a fully specified name;\n* provide the argument `--admin-cluster-membership-location` on the command line",
  args: {
    name: "ADMIN_CLUSTER_MEMBERSHIP_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag326: Fig.Option = {
  name: "--admin-cluster-membership-location",
  description:
    "Google Cloud location for the admin_cluster_membership.\n+\nTo set the `location` attribute:\n* provide the argument `--admin-cluster-membership` on the command line with a fully specified name;\n* provide the argument `--admin-cluster-membership-location` on the command line",
  args: {
    name: "ADMIN_CLUSTER_MEMBERSHIP_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag327: Fig.Option = {
  name: "--admin-cluster-membership-project",
  description:
    "Google Cloud project for the admin_cluster_membership.\n+\nTo set the `project` attribute:\n* provide the argument `--admin-cluster-membership` on the command line with a fully specified name;\n* provide the argument `--admin-cluster-membership-project` on the command line",
  args: {
    name: "ADMIN_CLUSTER_MEMBERSHIP_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag328: Fig.Option = {
  name: "--admin-cluster-membership-project",
  description:
    "Project ID of the Google Cloud project for the admin_cluster_membership.\n+\nTo set the `project` attribute:\n* provide the argument `--admin-cluster-membership` on the command line with a fully specified name;\n* provide the argument `--admin-cluster-membership-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: {
    name: "ADMIN_CLUSTER_MEMBERSHIP_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag329: Fig.Option = {
  name: "--admin-cluster-membership",
  description:
    "ID of the admin_cluster_membership or fully qualified identifier for the admin_cluster_membership.\n+\nTo set the `admin_cluster_membership` attribute:\n* provide the argument `--admin-cluster-membership` on the command line",
  args: {
    name: "ADMIN_CLUSTER_MEMBERSHIP",
    description: "String",
    suggestions: [],
  },
};
const flag336: Fig.Option = {
  name: "--admin-groups",
  description:
    "Groups of users that can perform operations as a cluster administrator",
  args: { name: "GROUP", description: "List", suggestions: [] },
};
const flag342: Fig.Option = {
  name: "--admin-users",
  description:
    "Users that can perform operations as a cluster administrator. If not specified, the value of property core/account is used",
  args: { name: "USER", description: "List", suggestions: [] },
};
const flag343: Fig.Option = {
  name: "--admin-users",
  description: "Users that can perform operations as a cluster administrator",
  args: { name: "USER", description: "List", suggestions: [] },
};
const flag344: Fig.Option = {
  name: "--admin-users",
  description:
    "Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster.\n+\nTo add multiple users, specify one in each flag. When updating, the update command overwrites the whole grant list. Specify all existing and new users that you want to be cluster administrators.\n+\nExamples:\n+\n  $ {command}\n      --admin-users alice@example.com\n      --admin-users bob@example.com",
  args: { name: "ADMIN_USERS", description: "String", suggestions: [] },
};
const flag370: Fig.Option = {
  name: "--aggregation-ca",
  description:
    "The Certificate Authority Service caPool that will back the aggregation CA",
  args: { name: "CA_POOL_PATH", description: "String", suggestions: [] },
};
const flag389: Fig.Option = {
  name: "--all-memberships",
  description: "All memberships in the fleet",
};
const flag390: Fig.Option = {
  name: "--all-memberships",
  description:
    "If supplied, apply to all Policy Controllers memberships in the fleet",
};
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag433: Fig.Option = {
  name: "--allow-missing",
  description:
    "Allow idempotent deletion of cluster.\n  The request will still succeed in case the cluster does not exist",
};
const flag434: Fig.Option = {
  name: "--allow-missing",
  description:
    "Allow idempotent deletion of node pool.\n  The request will still succeed in case the node pool does not exist",
};
const flag441: Fig.Option = {
  name: "--allow-missing",
  description:
    "If set, and the Anthos cluster on bare metal is not found, the update request will try to create a new cluster with the provided configuration",
};
const flag443: Fig.Option = {
  name: "--allow-missing",
  description:
    "If set, and the Bare Metal cluster is not found, the request will succeed but no action will be taken",
};
const flag464: Fig.Option = {
  name: "--allowed-custom-roles",
  description:
    "The list of allowed custom roles that can be used in scope\nRBACRoleBindings",
  args: { name: "ROLES", description: "List", suggestions: [] },
};
const flag515: Fig.Option = {
  name: "--annotations",
  description: "Annotations for the cluster",
  args: { name: "ANNOTATION", description: "Dict", suggestions: [] },
};
const flag517: Fig.Option = {
  name: "--annotations",
  description: "Annotations for the node pool",
  args: { name: "ANNOTATION", description: "Dict", suggestions: [] },
};
const flag519: Fig.Option = {
  name: "--annotations",
  description: "Annotations on the Anthos on bare metal resource",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag521: Fig.Option = {
  name: "--annotations",
  description: "Annotations on the node pool",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag540: Fig.Option = {
  name: "--anonymous-authentication-config",
  description:
    "Enable or restrict anonymous access to the cluster. When enabled,\n      anonymous users will be authenticated as system:anonymous with the group\n      system:unauthenticated. Limiting access restricts anonymous access to only\n      the health check endpoints /readyz, /livez, and /healthz.\n+\n_ANONYMOUS_AUTHENTICATION_CONFIG_ must be one of:\n+\n*ENABLED*::: 'ENABLED' enables anonymous calls.\n*LIMITED*::: 'LIMITED' restricts anonymous access to the cluster. Only calls to\nthe health check endpoints are allowed anonymously, all other calls\nwill be rejected.\n:::\n+",
  args: {
    name: "ANONYMOUS_AUTHENTICATION_CONFIG",
    description: "String",
    suggestions: ["ENABLED", "LIMITED"],
  },
};
const flag541: Fig.Option = {
  name: "--anthos-support",
  description:
    "If specified, this command will generate RBAC policy\nfile for anthos support",
};
const flag570: Fig.Option = {
  name: "--api-server-args",
  description: "API Server argument configuration",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag664: Fig.Option = {
  name: "--apply",
  description:
    "If specified, this command will generate RBAC policy and apply to the\nspecified cluster",
};
const flag689: Fig.Option = {
  name: "--artifact-url",
  description:
    "Container URL. May be in the `gcr.io/repository/image` format, or may optionally contain the `http` or `https` scheme",
  args: { name: "ARTIFACT_URL", description: "String", suggestions: [] },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag721: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to complete",
};
const flag735: Fig.Option = {
  name: "--attestor-project",
  description:
    "Project ID of the Google Cloud project for the attestor.\n+\nTo set the `project` attribute:\n* provide the argument `--attestor` on the command line with a fully specified name;\n* provide the argument `--attestor-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: { name: "ATTESTOR_PROJECT", description: "String", suggestions: [] },
};
const flag736: Fig.Option = {
  name: "--attestor",
  description:
    "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `name` attribute:\n* provide the argument `--attestor` on the command line",
  args: { name: "ATTESTOR", description: "String", suggestions: [] },
};
const flag774: Fig.Option = {
  name: "--audit-interval",
  description: "How often Policy Controller will audit resources, in seconds",
  args: { name: "AUDIT_INTERVAL", description: "Int", suggestions: [] },
};
const flag843: Fig.Option = {
  name: "--auto-monitoring-scope",
  description:
    "Enables Auto-Monitoring for a specific scope within the cluster.\nALL: Enables Auto-Monitoring for all supported workloads within the cluster.\nNONE: Disables Auto-Monitoring. _AUTO_MONITORING_SCOPE_ must be one of: *ALL*, *NONE*",
  args: {
    name: "AUTO_MONITORING_SCOPE",
    description: "String",
    suggestions: ["ALL", "NONE"],
  },
};
const flag891: Fig.Option = {
  name: "--autopilot-general-profile",
  description:
    "Sets the Autopilot general profile for the cluster; possible values are `none` and `no-performance`.\nIf `none` is used, the cluster will use the Autopilot default configuration. _AUTOPILOT_GENERAL_PROFILE_ must be one of: *none*, *no-performance*",
  args: {
    name: "AUTOPILOT_GENERAL_PROFILE",
    description: "String",
    suggestions: ["none", "no-performance"],
  },
};
const flag892: Fig.Option = {
  name: "--autopilot-privileged-admission",
  description:
    'Specifies which privileged workload allowlist paths can be referenced and\ninstalled by AllowlistSynchronizers in Autopilot modes.\n+\nThe value is a comma-separated list of paths in the format:\n+\n  - `gke://<partner_name>/<app_name>/<allowlist_path>` for Autopilot partner\n    allowlists\n  - `gs://<bucket_name>/<allowlist_path>` for user allowlists\n+\nBy default, all GKE-managed allowlists (`gke://*`) are authorized. See\nhttps://cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners\nfor all supported Autopilot partner allowlists. When setting this flag, be\ncareful to explicitly specify `gke://*` in addition to other entries if you\nrely on this default behavior.\n+\nWildcards (`*`) are supported. For example, if `gke://*` is authorized, then\nAllowlistSynchronizers can be used to install `gke://partner1/allowlist1.yaml`\nand `gke://partner2/allowlist2.yaml`.\n+\nNote: Use of user allowlists (`gs://`) requires special permissions and is\nonly available to a subset of high tier customers. Please contact your account\nteam for more information.\n+\nExamples:\n+\nAllow all GKE-managed allowlists (default behavior):\n+\n  $ {command} --autopilot-privileged-admission=gke://*\n+\nAuthorize only allowlists from a GKE Autopilot partner:\n+\n  $ {command} --autopilot-privileged-admission=gke://my-partner/*\n+\nAuthorize only a singular user-owned allowlist\n+\n  $ {command} --autopilot-privileged-admission=gs://my-bucket/allowlists/my-allowlist.yaml\n+\nAuthorize all user-owned allowlists under a given path:\n+\n  $ {command} --autopilot-privileged-admission=gs://my-bucket/*\n+\nAuthorize all GKE-managed allowlists and a specific user-owned allowlist:\n+\n  $ {command} --autopilot-privileged-admission=gke://*,gs://my-bucket/allowlists/my-allowlist.yaml\n+\nDisable allowlist installation entirely:\n+\n  $ {command} --autopilot-privileged-admission=""\n+\nExercise caution when using this flag on an existing cluster. Upon updates,\nexisting AllowlistSynchronizers will uninstall allowlists that are no longer\nauthorized.\n+\nFor instructions on installing allowlists in the cluster after authorization,\nplease refer to:\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/run-autopilot-partner-workloads',
  args: { name: "ALLOWLIST_PATHS", description: "List", suggestions: [] },
};
const flag893: Fig.Option = {
  name: "--autopilot-workload-policies",
  description:
    "Add Autopilot workload policies to the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --autopilot-workload-policies=allow-net-admin\n+\nThe only supported workload policy is 'allow-net-admin'",
  args: {
    name: "AUTOPILOT_WORKLOAD_POLICIES",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag895: Fig.Option = {
  name: "--autoprovisioning-config-file",
  description:
    "Path of the JSON/YAML file which contains information about the\ncluster's node autoprovisioning configuration. Currently it contains\na list of resource limits, identity defaults for autoprovisioning, node upgrade\nsettings, node management settings, minimum cpu platform, image type, node locations for\nautoprovisioning, disk type and size configuration, Shielded instance settings,\nand customer-managed encryption keys settings.\n+\nResource limits are specified in the field 'resourceLimits'.\nEach resource limits definition contains three fields:\nresourceType, maximum and minimum.\nResource type can be \"cpu\", \"memory\" or an accelerator (e.g.\n\"nvidia-tesla-t4\" for NVIDIA T4). Use gcloud compute accelerator-types\nlist to learn about available accelerator types.\nMaximum is the maximum allowed amount with the unit of the resource.\nMinimum is the minimum allowed amount with the unit of the resource.\n+\nIdentity default contains at most one of the below fields:\nserviceAccount: The Google Cloud Platform Service Account to be used by node VMs in\nautoprovisioned node pools. If not specified, the project's default service account\nis used.\nscopes: A list of scopes to be used by node instances in autoprovisioned node pools.\nMultiple scopes can be specified, separated by commas. For information on defaults,\nlook at:\nhttps://cloud.google.com/sdk/gcloud/reference/container/clusters/create#--scopes\n+\nNode Upgrade settings are specified under the field\n'upgradeSettings', which has the following fields:\nmaxSurgeUpgrade: Number of extra (surge) nodes to be created on\neach upgrade of an autoprovisioned node pool.\nmaxUnavailableUpgrade: Number of nodes that can be unavailable at the\nsame time on each upgrade of an autoprovisioned node pool.\n+\nNode Management settings are specified under the field\n'management', which has the following fields:\nautoUpgrade: A boolean field that indicates if node\nautoupgrade is enabled for autoprovisioned node pools.\nautoRepair: A boolean field that indicates if node\nautorepair is enabled for autoprovisioned node pools.\n+\nminCpuPlatform (deprecated): If specified, new autoprovisioned nodes will be\nscheduled on host with specified CPU architecture or a newer one.\nNote: Min CPU platform can only be specified in Beta and Alpha.\n+\nAutoprovisioned node image is specified under the 'imageType' field. If not specified\nthe default value will be applied.\n+\nAutoprovisioning locations is a set of zones where new node pools\ncan be created by Autoprovisioning. Autoprovisioning locations are\nspecified in the field 'autoprovisioningLocations'. All zones must\nbe in the same region as the cluster's master(s).\n+\nDisk type and size are specified under the 'diskType' and 'diskSizeGb' fields,\nrespectively. If specified, new autoprovisioned nodes will be created with\ncustom boot disks configured by these settings.\n+\nShielded instance settings are specified under the 'shieldedInstanceConfig'\nfield, which has the following fields:\nenableSecureBoot: A boolean field that indicates if secure boot is enabled for\nautoprovisioned nodes.\nenableIntegrityMonitoring: A boolean field that indicates if integrity\nmonitoring is enabled for autoprovisioned nodes.\n+\nCustomer Managed Encryption Keys (CMEK) used by new auto-provisioned node pools\ncan be specified in the 'bootDiskKmsKey' field.\n+\nUse a full or relative path to a local file containing the value of autoprovisioning_config_file",
  args: {
    name: "AUTOPROVISIONING_CONFIG_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag896: Fig.Option = {
  name: "--autoprovisioning-enable-insecure-kubelet-readonly-port",
  description:
    "Enables the Kubelet's insecure read only port for Autoprovisioned\nNode Pools.\n+\nIf not set, the value from nodePoolDefaults.nodeConfigDefaults will be used.\n+\nTo disable the readonly port\n`--no-autoprovisioning-enable-insecure-kubelet-readonly-port`",
};
const flag897: Fig.Option = {
  name: "--autoprovisioning-image-type",
  description:
    "Node Autoprovisioning will create new nodes with the specified image type",
  args: {
    name: "AUTOPROVISIONING_IMAGE_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag898: Fig.Option = {
  name: "--autoprovisioning-locations",
  description:
    "Set of zones where new node pools can be created by autoprovisioning.\nAll zones must be in the same region as the cluster's master(s).\nMultiple locations can be specified, separated by commas",
  args: { name: "ZONE", description: "List", suggestions: [] },
};
const flag899: Fig.Option = {
  name: "--autoprovisioning-max-surge-upgrade",
  description:
    "Number of extra (surge) nodes to be created on each upgrade of an\nautoprovisioned node pool",
  args: {
    name: "AUTOPROVISIONING_MAX_SURGE_UPGRADE",
    description: "Int",
    suggestions: [],
  },
};
const flag900: Fig.Option = {
  name: "--autoprovisioning-max-unavailable-upgrade",
  description:
    "Number of nodes that can be unavailable at the same time on each\nupgrade of an autoprovisioned node pool",
  args: {
    name: "AUTOPROVISIONING_MAX_UNAVAILABLE_UPGRADE",
    description: "Int",
    suggestions: [],
  },
};
const flag901: Fig.Option = {
  name: "--autoprovisioning-min-cpu-platform",
  description:
    "(DEPRECATED) If specified, new autoprovisioned nodes will be scheduled on host with\nspecified CPU architecture or a newer one.\n+\nThe `--autoprovisioning-min-cpu-platform` flag is deprecated and will be removed in an upcoming release. More info: https://cloud.google.com/kubernetes-engine/docs/release-notes#March_08_2022",
  args: { name: "PLATFORM", description: "String", suggestions: [] },
};
const flag902: Fig.Option = {
  name: "--autoprovisioning-network-tags",
  description:
    "Applies the given Compute Engine tags (comma separated) on all nodes in the auto-provisioned node pools of the new Standard cluster or the new Autopilot cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --autoprovisioning-network-tags=tag1,tag2\n+\nNew nodes in auto-provisioned node pools, including ones created by resize or recreate, will have these tags\non the Compute Engine API instance object and can be used in firewall rules.\nSee https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/create\nfor examples",
  args: { name: "TAGS", description: "List", suggestions: [] },
};
const flag904: Fig.Option = {
  name: "--autoprovisioning-node-pool-soak-duration",
  description:
    "Time in seconds to be spent waiting during blue-green upgrade before\ndeleting the blue pool and completing the update.\nThis argument should be used in conjunction with\n`--enable-autoprovisioning-blue-green-upgrade` to take effect",
  args: {
    name: "AUTOPROVISIONING_NODE_POOL_SOAK_DURATION",
    description: "String",
    suggestions: [],
  },
};
const flag905: Fig.Option = {
  name: "--autoprovisioning-resource-manager-tags",
  description:
    "Applies the specified comma-separated resource manager tags that has the\nGCE_FIREWALL purpose to all nodes in the new Autopilot cluster or\nall auto-provisioned nodes in the new Standard cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=tagKeys/1234=tagValues/2345\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=my-project/key1=value1\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=12345/key1=value1,23456/key2=value2\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=\n+\nAll nodes in an Autopilot cluster or all auto-provisioned nodes in a Standard\ncluster, including nodes that are resized or re-created, will have the specified\ntags on the corresponding Instance object in the Compute Engine API. You can\nreference these tags in network firewall policy rules. For instructions, see\nhttps://cloud.google.com/firewall/docs/use-tags-for-firewalls",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag907: Fig.Option = {
  name: "--autoprovisioning-scopes",
  description:
    "The scopes to be used by node instances in autoprovisioned node pools.\nMultiple scopes can be specified, separated by commas. For information\non defaults, look at:\nhttps://cloud.google.com/sdk/gcloud/reference/container/clusters/create#--scopes",
  args: { name: "SCOPE", description: "List", suggestions: [] },
};
const flag908: Fig.Option = {
  name: "--autoprovisioning-service-account",
  description:
    "The Google Cloud Platform Service Account to be used by node VMs in\nautoprovisioned node pools. If not specified, the project default\nservice account is used",
  args: {
    name: "AUTOPROVISIONING_SERVICE_ACCOUNT",
    description: "String",
    suggestions: [],
  },
};
const flag909: Fig.Option = {
  name: "--autoprovisioning-standard-rollout-policy",
  description:
    "Standard rollout policy options for blue-green upgrade.\nThis argument should be used in conjunction with\n`--enable-autoprovisioning-blue-green-upgrade` to take effect.\n+\nBatch sizes are specified by one of, batch-node-count or batch-percent.\nThe duration between batches is specified by batch-soak-duration.\n+\nExample:\n`--standard-rollout-policy=batch-node-count=3,batch-soak-duration=60s`\n`--standard-rollout-policy=batch-percent=0.05,batch-soak-duration=180s`",
  args: {
    name: "batch-node-count=BATCH_NODE_COUNT,batch-percent=BATCH_NODE_PERCENTAGE,batch-soak-duration=BATCH_SOAK_DURATION",
    description: "Dict",
    suggestions: [],
  },
};
const flag910: Fig.Option = {
  name: "--autoscaled-rollout-policy",
  description:
    'Autoscaled rollout policy options for blue-green upgrade.\n+\n*wait-for-drain-duration*::: (Optional) Time in seconds to wait after cordoning\nthe blue pool before draining the nodes.\n+\nExamples:\n+\n$ {command} node-pool-1 --cluster=example-cluster  --enable-blue-green-upgrade  --autoscaled-rollout-policy=""\n+\n$ {command} node-pool-1 --cluster=example-cluster  --enable-blue-green-upgrade  --autoscaled-rollout-policy=wait-for-drain-duration=7200s',
  args: {
    name: "AUTOSCALED_ROLLOUT_POLICY",
    description: "Dict",
    suggestions: [],
  },
};
const flag930: Fig.Option = {
  name: "--autoscaling-metrics",
  description:
    "Autoscaling metrics to enable. For a list of valid metrics, refer to https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If granularity is specified but not any metrics, all metrics are enabled",
  args: { name: "AUTOSCALING_METRIC", description: "List", suggestions: [] },
};
const flag941: Fig.Option = {
  name: "--autoscaling-profile",
  description:
    "Set autoscaling behaviour, choices are 'optimize-utilization' and 'balanced'.\nDefault is 'balanced'",
  args: { name: "AUTOSCALING_PROFILE", description: "String", suggestions: [] },
};
const flag1125: Fig.Option = {
  name: "--bgp-load-balancer-node-labels",
  description: "Labels assigned to nodes of a BGP node pool",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag1126: Fig.Option = {
  name: "--bgp-load-balancer-node-taints",
  description: "Node taint applied to every Kubernetes node in a node pool",
  args: { name: "KEY=VALUE:EFFECT", description: "Dict", suggestions: [] },
};
const flag1127: Fig.Option = {
  name: "--bgp-load-balancer-registry-burst",
  description:
    "Maximum size of bursty pulls, temporarily allow pulls to burst to this number, while still not exceeding registry_pull_qps",
  args: {
    name: "BGP_LOAD_BALANCER_REGISTRY_BURST",
    description: "Int",
    suggestions: [],
  },
};
const flag1128: Fig.Option = {
  name: "--bgp-load-balancer-registry-pull-qps",
  description: "Limit of registry pulls per second",
  args: {
    name: "BGP_LOAD_BALANCER_REGISTRY_PULL_QPS",
    description: "Int",
    suggestions: [],
  },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1206: Fig.Option = {
  name: "--binauthz-evaluation-mode",
  description:
    "Set Binary Authorization evaluation mode for this cluster. _BINAUTHZ_EVALUATION_MODE_ must be one of: *DISABLED*, *PROJECT_SINGLETON_POLICY_ENFORCE*",
  args: {
    name: "BINAUTHZ_EVALUATION_MODE",
    description: "String",
    suggestions: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"],
  },
};
const flag1207: Fig.Option = {
  name: "--binauthz-evaluation-mode",
  description:
    "Configure binary authorization mode for clusters to onboard the fleet,\n+\n  $ {command} --binauthz-evaluation-mode=policy-bindings\n+\n_BINAUTHZ_EVALUATION_MODE_ must be one of: *disabled*, *policy-bindings*",
  args: {
    name: "BINAUTHZ_EVALUATION_MODE",
    description: "Googlecloudsdk.command_lib.container.fleet.flags:<lambda>",
    suggestions: ["disabled", "policy-bindings"],
  },
};
const flag1208: Fig.Option = {
  name: "--binauthz-evaluation-mode",
  description:
    "Enable Binary Authorization for this cluster. _BINAUTHZ_EVALUATION_MODE_ must be one of: *disabled*, *project-singleton-policy-enforce*",
  args: {
    name: "BINAUTHZ_EVALUATION_MODE",
    description:
      "Googlecloudsdk.api_lib.container.api_adapter:NormalizeBinauthzMode",
    suggestions: ["disabled", "project-singleton-policy-enforce"],
  },
};
const flag1209: Fig.Option = {
  name: "--binauthz-policy-bindings",
  description:
    "The relative resource name of the Binary Authorization policy to audit\nand/or enforce. GKE policies have the following format:\n`projects/{project_number}/platforms/gke/policies/{policy_id}`",
  args: { name: "name=BINAUTHZ_POLICY", description: "Dict", suggestions: [] },
};
const flag1244: Fig.Option = {
  name: "--boot-disk-kms-key",
  description:
    "The Customer Managed Encryption Key used to encrypt the boot disk attached\nto each node in the node pool. This should be of the form\nprojects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME].\nFor more information about protecting resources with Cloud KMS Keys please\nsee:\nhttps://cloud.google.com/compute/docs/disks/customer-managed-encryption",
  args: { name: "BOOT_DISK_KMS_KEY", description: "String", suggestions: [] },
};
const flag1249: Fig.Option = {
  name: "--boot-disk-provisioned-iops",
  description:
    "Configure the Provisioned IOPS for the node pool boot disks. Only valid for hyperdisk-balanced boot disks",
  args: {
    name: "BOOT_DISK_PROVISIONED_IOPS",
    description: "Int",
    suggestions: [],
  },
};
const flag1251: Fig.Option = {
  name: "--boot-disk-provisioned-throughput",
  description:
    "Configure the Provisioned Throughput for the node pool boot disks. Only valid for hyperdisk-balanced boot disks",
  args: {
    name: "BOOT_DISK_PROVISIONED_THROUGHPUT",
    description: "Int",
    suggestions: [],
  },
};
const flag1254: Fig.Option = {
  name: "--boot-disk-size",
  description: "Size of VMware disk to be used during creation in GB",
  args: {
    name: "BOOT_DISK_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag1485: Fig.Option = {
  name: "--clear-annotations",
  description: "Clear the annotations for the cluster",
};
const flag1486: Fig.Option = {
  name: "--clear-annotations",
  description: "Clear the annotations for the node pool",
};
const flag1597: Fig.Option = {
  name: "--clear-description",
  description: "Clear the description for the cluster",
};
const flag1657: Fig.Option = {
  name: "--clear-exemptable-namespaces",
  description:
    "Removes any namespace exemptions, enabling Policy Controller on all namespaces. Setting this flag will overwrite currently exempted namespaces, not append",
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag1785: Fig.Option = {
  name: "--clear-namespace-labels",
  description:
    "Remove all namespace-level labels from the cluster namespace. If `--update-namespace-labels` is also specified then\n`--clear-namespace-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} namespace_name --clear-namespace-labels\n+\nTo remove all existing namespace-level labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} namespace_name --clear-namespace-labels --update-namespace-labels foo=bar,baz=qux",
};
const flag1786: Fig.Option = {
  name: "--clear-namespace-labels",
  description:
    "Remove all scope-level labels from the cluster namespace. If `--update-namespace-labels` is also specified then\n`--clear-namespace-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} scope_name --clear-namespace-labels\n+\nTo remove all existing scope-level labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} scope_name --clear-namespace-labels --update-namespace-labels foo=bar,baz=qux",
};
const flag1981: Fig.Option = {
  name: "--client",
  description:
    "ID of the client or fully qualified identifier for the client.\n+\nTo set the `client` attribute:\n* provide the argument `--client` on the command line",
  args: { name: "CLIENT", description: "String", suggestions: [] },
};
const flag1998: Fig.Option = {
  name: "--cloud-run-config",
  description:
    "Configurations for Cloud Run addon, requires `--addons=CloudRun` for create\nand `--update-addons=CloudRun=ENABLED` for update.\n+\n*load-balancer-type*::: (Optional) Type of load-balancer-type EXTERNAL or\nINTERNAL.\n+\nExamples:\n+\n  $ {command} example-cluster --cloud-run-config=load-balancer-type=INTERNAL",
  args: {
    name: "load-balancer-type=EXTERNAL",
    description: "Dict",
    suggestions: [],
  },
};
const flag2029: Fig.Option = {
  name: "--cluster-ca",
  description:
    "The Certificate Authority Service caPool that will back the cluster CA",
  args: { name: "CA_POOL_PATH", description: "String", suggestions: [] },
};
const flag2032: Fig.Option = {
  name: "--cluster-dns-domain",
  description:
    "DNS domain for this cluster.\nThe default value is `cluster.local`.\nThis is configurable when `--cluster-dns=clouddns` and\n `--cluster-dns-scope=vpc` are set.\nThe value must be a valid DNS subdomain as defined in RFC 1123",
  args: { name: "CLUSTER_DNS_DOMAIN", description: "String", suggestions: [] },
};
const flag2033: Fig.Option = {
  name: "--cluster-dns-scope",
  description:
    "DNS scope for the Cloud DNS zone created - valid only with\n `--cluster-dns=clouddns`. Defaults to cluster.\n+\n_CLUSTER_DNS_SCOPE_ must be one of:\n+\n*cluster*::: Configures the Cloud DNS zone to be private to the cluster.\n*vpc*::: Configures the Cloud DNS zone to be private to the VPC Network.\n:::\n+",
  args: {
    name: "CLUSTER_DNS_SCOPE",
    description: "String",
    suggestions: ["cluster", "vpc"],
  },
};
const flag2034: Fig.Option = {
  name: "--cluster-dns",
  description:
    "DNS provider to use for this cluster. _CLUSTER_DNS_ must be one of:\n+\n*clouddns*::: Selects Cloud DNS as the DNS provider for the cluster.\n*default*::: Selects the default DNS provider (kube-dns) for the cluster.\n*kubedns*::: Selects Kube DNS as the DNS provider for the cluster.\n:::\n+",
  args: {
    name: "CLUSTER_DNS",
    description: "String",
    suggestions: ["clouddns", "default", "kubedns"],
  },
};
const flag2040: Fig.Option = {
  name: "--cluster-ipv4-cidr",
  description:
    "The IP address range for the pods in this cluster in CIDR notation (e.g.\n10.0.0.0/14). Prior to Kubernetes version 1.7.0 this must be a subset of\n10.0.0.0/8; however, starting with version 1.7.0 can be any RFC 1918 IP range.\n+\nIf you omit this option, a range is chosen automatically.  The automatically\nchosen range is randomly selected from 10.0.0.0/8 and will not include IP\naddress ranges allocated to VMs, existing routes, or ranges allocated to other\nclusters. The automatically chosen range might conflict with reserved IP\naddresses, dynamic routes, or routes within VPCs that peer with this cluster.\nYou should specify `--cluster-ipv4-cidr` to prevent conflicts.\n+\nThis field is not applicable in a Shared VPC setup where the IP address range\nfor the pods must be specified with `--cluster-secondary-range-name`",
  args: { name: "CLUSTER_IPV4_CIDR", description: "String", suggestions: [] },
};
const flag2056: Fig.Option = {
  name: "--cluster-version",
  description: "Kubernetes version to use for the cluster",
  args: { name: "CLUSTER_VERSION", description: "String", suggestions: [] },
};
const flag2057: Fig.Option = {
  name: "--cluster-version",
  description: "Kubernetes version to use for the cluster",
  args: { name: "CLUSTER_VERSION", description: "String", suggestions: [] },
};
const flag2060: Fig.Option = {
  name: "--cluster-version",
  description:
    "The Kubernetes version to use for the master and nodes. Defaults to\nserver-specified.\n+\nThe default Kubernetes version is available using the following command.\n+\n  $ gcloud container get-server-config",
  args: { name: "CLUSTER_VERSION", description: "String", suggestions: [] },
};
const flag2067: Fig.Option = {
  name: "--cluster",
  description:
    "The name of the cluster. Overrides the default *container/cluster* property value for this command invocation",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2074: Fig.Option = {
  name: "--cluster",
  description:
    "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2089: Fig.Option = {
  name: "--cluster",
  description:
    "cluster of the node_pool.\n+\nTo set the `cluster` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2090: Fig.Option = {
  name: "--cluster",
  description:
    "cluster of the nodepool.\n+\nTo set the `cluster` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2160: Fig.Option = {
  name: "--comment",
  description: "The comment describing the public key",
  args: { name: "COMMENT", description: "String", suggestions: [] },
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
const flag2240: Fig.Option = {
  name: "--confidential-node-type",
  description:
    "Enable confidential nodes for the cluster. Enabling Confidential Nodes\nwill create nodes using Confidential VM\nhttps://docs.cloud.google.com/compute/docs/about-confidential-vm. _CONFIDENTIAL_NODE_TYPE_ must be one of: *sev*, *sev_snp*, *tdx*",
  args: {
    name: "CONFIDENTIAL_NODE_TYPE",
    description: "String",
    suggestions: ["sev", "sev_snp", "tdx"],
  },
};
const flag2241: Fig.Option = {
  name: "--config-api",
  description:
    "The API to use for mesh configuration. _CONFIG_API_ must be one of: *istio*, *gateway*",
  args: {
    name: "CONFIG_API",
    description: "String",
    suggestions: ["istio", "gateway"],
  },
};
const flag2244: Fig.Option = {
  name: "--config-encryption-key-id",
  description:
    "URL the of the Azure Key Vault key (with its version) to use to encrypt / decrypt config data",
  args: {
    name: "CONFIG_ENCRYPTION_KEY_ID",
    description: "String",
    suggestions: [],
  },
};
const flag2245: Fig.Option = {
  name: "--config-encryption-kms-key-arn",
  description:
    "Amazon Resource Name (ARN) of the AWS KMS key to encrypt the user data",
  args: {
    name: "CONFIG_ENCRYPTION_KMS_KEY_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag2246: Fig.Option = {
  name: "--config-encryption-kms-key-arn",
  description:
    "Amazon Resource Name (ARN) of the AWS KMS key to encrypt the user data",
  args: {
    name: "CONFIG_ENCRYPTION_KMS_KEY_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag2247: Fig.Option = {
  name: "--config-encryption-public-key",
  description:
    "RSA key of the Azure Key Vault public key to use for encrypting config data",
  args: {
    name: "CONFIG_ENCRYPTION_PUBLIC_KEY",
    description: "String",
    suggestions: [],
  },
};
const flag2263: Fig.Option = {
  name: "--config-membership",
  description:
    "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `--config-membership` on the command line",
  args: { name: "CONFIG_MEMBERSHIP", description: "String", suggestions: [] },
};
const flag2282: Fig.Option = {
  name: "--config",
  description: "The path to CloudRun custom resource config file",
  args: { name: "CONFIG", description: "String", suggestions: [] },
};
const flag2283: Fig.Option = {
  name: "--config",
  description: "The path to an identity-service.yaml configuration file",
  args: { name: "CONFIG", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2338: Fig.Option = {
  name: "--consolidation-delay",
  description:
    "Set the duration after which the Cluster Autoscaler can scale down\nunderutilized nodes.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --consolidation-delay=3600s",
  args: { name: "CONSOLIDATION_DELAY", description: "String", suggestions: [] },
};
const flag2339: Fig.Option = {
  name: "--constraint-violation-limit",
  description:
    "The number of violations stored on the constraint resource. Must be greater than 0",
  args: {
    name: "CONSTRAINT_VIOLATION_LIMIT",
    description: "Int",
    suggestions: [],
  },
};
const flag2421: Fig.Option = {
  name: "--containerd-config-from-file",
  description:
    "Path of the YAML file that contains containerd configuration entries like configuring access to private image registries.\n+\nFor detailed information on the configuration usage, please refer to https://cloud.google.com/kubernetes-engine/docs/how-to/customize-containerd-configuration.\n+\nNote: Updating the containerd configuration of an existing cluster or node pool requires recreation of the existing nodes, which might cause disruptions in running workloads.\n+\nUse a full or relative path to a local file containing the value of containerd_config",
  args: {
    name: "CONTAINERD_CONFIG_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2443: Fig.Option = {
  name: "--context",
  description: "Context to use in the kubeconfig",
  args: { name: "CONTEXT", description: "String", suggestions: [] },
};
const flag2444: Fig.Option = {
  name: "--context",
  description:
    "The cluster context as it appears in the kubeconfig file. You can get\nthis value from the command line by running command:\n`kubectl config current-context`",
  args: { name: "CONTEXT", description: "String", suggestions: [] },
};
const flag2445: Fig.Option = {
  name: "--context",
  description:
    "The cluster context as it appears in the kubeconfig file. You can get\nthis value from the command line by running command:\n`kubectl config current-context`",
  args: { name: "CONTEXT", description: "String", suggestions: [] },
};
const flag2459: Fig.Option = {
  name: "--control-plane-disk-encryption-key",
  description:
    "The Cloud KMS symmetric encryption cryptoKey that will be used to encrypt the control plane disks",
  args: { name: "KEY", description: "String", suggestions: [] },
};
const flag2460: Fig.Option = {
  name: "--control-plane-egress",
  description:
    "Configures the egress policy for the GKE control plane to control outbound\ntraffic from the kube-apiserver. _CONTROL_PLANE_EGRESS_ must be one of:\n+\n*NONE*::: (Recommended) Provides maximum security. This mode removes the control\nplane's public IP address and blocks all outbound traffic from the\nkube-apiserver by default, preventing unexpected data exfiltration. Webhooks\nthat use `clientConfig.url` will be disabled. Essential GKE-managed services\nare still permitted to function via an internal allowlist.\n*VIA_CONTROL_PLANE*::: (Default) Maintains backward compatibility. The control\nplane retains its public IP address and allows egress traffic from the\nkube-apiserver.\n:::\n+",
  args: {
    name: "CONTROL_PLANE_EGRESS",
    description: "String",
    suggestions: ["NONE", "VIA_CONTROL_PLANE"],
  },
};
const flag2464: Fig.Option = {
  name: "--control-plane-load-balancer-port",
  description: "Control plane load balancer port configuration",
  args: {
    name: "CONTROL_PLANE_LOAD_BALANCER_PORT",
    description: "Int",
    suggestions: [],
  },
};
const flag2467: Fig.Option = {
  name: "--control-plane-node-configs",
  description: "Control plane node configuration",
  args: {
    name: "CONTROL_PLANE_NODE_CONFIGS",
    description: "Dict",
    suggestions: [],
  },
};
const flag2469: Fig.Option = {
  name: "--control-plane-node-labels",
  description: "Labels assigned to nodes of a node pool",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2473: Fig.Option = {
  name: "--control-plane-node-taints",
  description: "Node taint applied to every Kubernetes node in a node pool",
  args: { name: "KEY=VALUE:EFFECT", description: "Dict", suggestions: [] },
};
const flag2474: Fig.Option = {
  name: "--control-plane-registry-burst",
  description:
    "Maximum size of bursty pulls, temporarily allow pulls to burst to this number, while still not exceeding registry_pull_qps",
  args: {
    name: "CONTROL_PLANE_REGISTRY_BURST",
    description: "Int",
    suggestions: [],
  },
};
const flag2475: Fig.Option = {
  name: "--control-plane-registry-pull-qps",
  description: "Limit of registry pulls per second",
  args: {
    name: "CONTROL_PLANE_REGISTRY_PULL_QPS",
    description: "Int",
    suggestions: [],
  },
};
const flag2478: Fig.Option = {
  name: "--control-plane-version",
  description: "The GKE cluster version to upgrade the control plane to",
  args: {
    name: "CONTROL_PLANE_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag2479: Fig.Option = {
  name: "--control-plane-vip",
  description: "VIP for the Kubernetes API of this cluster",
  args: { name: "CONTROL_PLANE_VIP", description: "String", suggestions: [] },
};
const flag2480: Fig.Option = {
  name: "--control-plane",
  description:
    "(DEPRECATED) Control plane management to update to.\n+\nThe --control-plane flag is now deprecated. Please use `--management` instead. See https://cloud.google.com/service-mesh/docs/managed/provision-managed-anthos-service-mesh. _CONTROL_PLANE_ must be one of: *automatic*, *manual*, *unspecified*",
  args: {
    name: "CONTROL_PLANE",
    description: "String",
    suggestions: ["automatic", "manual", "unspecified"],
  },
};
const flag2519: Fig.Option = {
  name: "--cpus",
  description:
    "Number of CPUs for each admin cluster node that serve as control planes for this VMware user cluster. (default: 4 CPUs)",
  args: { name: "CPUS", description: "Int", suggestions: [] },
};
const flag2520: Fig.Option = {
  name: "--cpus",
  description: "Number of CPUs for each node in the node pool",
  args: { name: "CPUS", description: "Int", suggestions: [] },
};
const flag2654: Fig.Option = {
  name: "--custom-role",
  description: "Custom role to assign to principal",
  args: { name: "CUSTOM_ROLE", description: "String", suggestions: [] },
};
const flag2741: Fig.Option = {
  name: "--database-encryption-key",
  description:
    "Enable Database Encryption.\n+\nEnable database encryption that will be used to encrypt Kubernetes Secrets at\nthe application layer. The key provided should be the resource ID in the format of\n`projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]`.\nFor more information, see\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets",
  args: {
    name: "DATABASE_ENCRYPTION_KEY",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag2820: Fig.Option = {
  name: "--dataplane-v2-observability-mode",
  description:
    "(REMOVED) \nSelect Advanced Datapath Observability mode for the cluster. Defaults to `DISABLED`.\n+\nAdvanced Datapath Observability allows for a real-time view into pod-to-pod traffic within your cluster.\n+\nExamples:\n+\n  $ {command} --dataplane-v2-observability-mode=DISABLED\n+\n  $ {command} --dataplane-v2-observability-mode=INTERNAL_VPC_LB\n+\n  $ {command} --dataplane-v2-observability-mode=EXTERNAL_LB\n+\nFlag --dataplane-v2-observability-mode has been removed.\n+\n_DATAPLANE_V2_OBSERVABILITY_MODE_ must be one of:\n+\n*DISABLED*::: Disables Advanced Datapath Observability.\n*EXTERNAL_LB*::: Makes Advanced Datapath Observability available to the external network.\n*INTERNAL_VPC_LB*::: Makes Advanced Datapath Observability available from the VPC network.\n:::\n+",
  args: {
    name: "DATAPLANE_V2_OBSERVABILITY_MODE",
    description: "String",
    suggestions: ["DISABLED", "EXTERNAL_LB", "INTERNAL_VPC_LB"],
  },
};
const flag2926: Fig.Option = {
  name: "--default-upgrade-soaking",
  description:
    'Configures the default soaking duration for each upgrade propagating through the current scope\nto become "COMPLETE". Soaking begins after all clusters in the scope are on the target version,\nor after 30 days if all cluster upgrades are not complete. Once an upgrade state becomes\n"COMPLETE", it will automatically be propagated to the downstream scope. Max is 30 days.\n+\nSee `$ gcloud topic datetimes` for information on duration formats.\n+\nTo configure Rollout Sequencing for a given scope, ``SCOPE_NAME\'\', this attribute must be set.\nTo do this while specifying a default soaking duration of 7 days, run:\n+\n  $ {command} SCOPE_NAME default-upgrade-soaking=7d',
  args: {
    name: "DEFAULT_UPGRADE_SOAKING",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag2927: Fig.Option = {
  name: "--default-upgrade-soaking",
  description:
    'Note: This flag only applies to Rollout Sequencing v1, not Rollout\nSequencing v2 (which uses custom stages). If using Rollout\nSequencing v1 and this flag is not provided, a default value of 7\ndays will be used.\n+\nConfigures the default soaking duration for each upgrade propagating\nthrough the current fleet to become "COMPLETE". Soaking begins after\nall clusters in the fleet are on the target version, or after 30 days\nif all cluster upgrades are not complete. Once an upgrade state becomes\n"COMPLETE", it will automatically be propagated to the downstream\nfleet. Max is 30 days.\n+\nTo configure Rollout Sequencing for a fleet, this attribute must be\nset. To do this while specifying a default soaking duration of 7 days,\nrun:\n+\n  $ {command} --default-upgrade-soaking=7d',
  args: {
    name: "DEFAULT_UPGRADE_SOAKING",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag3175: Fig.Option = {
  name: "--description",
  description: "Description for the cluster",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3177: Fig.Option = {
  name: "--description",
  description: "Description for the resource",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3273: Fig.Option = {
  name: "--description",
  description: "Resource description",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3539: Fig.Option = {
  name: "--disable-aag-config",
  description:
    "If set, spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default",
};
const flag3540: Fig.Option = {
  name: "--disable-additive-vpc-scope",
  description: "Disables Additive VPC Scope",
};
const flag3550: Fig.Option = {
  name: "--disable-bgp-load-balancer-serialize-image-pulls",
  description:
    "If set, prevent the Kubelet from pulling multiple images at a time",
};
const flag3557: Fig.Option = {
  name: "--disable-control-plane-serialize-image-pulls",
  description:
    "If set, prevent the Kubelet from pulling multiple images at a time",
};
const flag3560: Fig.Option = {
  name: "--disable-dataplane-v2-flow-observability",
  description: "Disables Advanced Datapath Observability",
};
const flag3561: Fig.Option = {
  name: "--disable-dataplane-v2-metrics",
  description: "Stops exposing advanced datapath flow metrics on node port",
};
const flag3573: Fig.Option = {
  name: "--disable-l4-lb-firewall-reconciliation",
  description:
    "Disable reconciliation on the cluster for L4 Load Balancer VPC\nfirewalls targeting ingress traffic",
};
const flag3577: Fig.Option = {
  name: "--disable-managed-prometheus",
  description: "Disable managed collection for Managed Service for Prometheus",
};
const flag3579: Fig.Option = {
  name: "--disable-metal-lb-load-balancer-serialize-image-pulls",
  description:
    "If set, prevent the Kubelet from pulling multiple images at a time",
};
const flag3580: Fig.Option = {
  name: "--disable-multi-nic-lustre",
  description:
    "Disable the Lustre CSI driver to automatically detect\nand configure all suitable network interfaces on a node for Lustre IO",
};
const flag3581: Fig.Option = {
  name: "--disable-per-node-pool-sg-rules",
  description:
    "Disable the default per node pool subnet security group rules on the control plane security group. When disabled, at least one security group that allows node pools to send traffic to the control plane on ports TCP/443 and TCP/8132 must be provided",
};
const flag3586: Fig.Option = {
  name: "--disable-pod-snapshots",
  description: "Disable the Pod Snapshot feature on the cluster",
};
const flag3607: Fig.Option = {
  name: "--disable-serialize-image-pulls",
  description:
    "If set, prevent the Kubelet from pulling multiple images at a time",
};
const flag3616: Fig.Option = {
  name: "--disable-vsphere-csi",
  description:
    "If set, vSphere CSI components are not deployed in the VMware User Cluster. Enabled by default",
};
const flag3667: Fig.Option = {
  name: "--disk-size",
  description: "Size for node VM boot disks in GB. Defaults to 100GB",
  args: {
    name: "DISK_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag3672: Fig.Option = {
  name: "--disk-type",
  description:
    "Type of the node VM boot disk. For version 1.24 and later, defaults to pd-balanced. For versions earlier than 1.24, defaults to pd-standard. _DISK_TYPE_ must be one of: *pd-standard*, *pd-ssd*, *pd-balanced*, *hyperdisk-balanced*, *hyperdisk-extreme*, *hyperdisk-throughput*",
  args: {
    name: "DISK_TYPE",
    description: "String",
    suggestions: [
      "pd-standard",
      "pd-ssd",
      "pd-balanced",
      "hyperdisk-balanced",
      "hyperdisk-extreme",
      "hyperdisk-throughput",
    ],
  },
};
const flag3709: Fig.Option = {
  name: "--display-name",
  description: "Display name for the resource",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3734: Fig.Option = {
  name: "--display-name",
  description:
    "Display name of the fleet to be created (optional). 4-30 characters, alphanumeric and [ '\"!-] only",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3750: Fig.Option = {
  name: "--display-name",
  description: "Display name of the rollout sequence",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3845: Fig.Option = {
  name: "--distribution",
  description:
    "Set the base platform type of the cluster to attach.\n+\nExamples:\n+\n  $ {command} --distribution=aks\n  $ {command} --distribution=eks\n  $ {command} --distribution=generic",
  args: { name: "DISTRIBUTION", description: "String", suggestions: [] },
};
const flag3983: Fig.Option = {
  name: "--effect",
  description:
    'Applies only to "toleration" property. To be removed, tolerations must match exactly, including the effect setting. _EFFECT_ must be one of: *NoSchedule*, *PreferNoSchedule*, *NoExecute*',
  args: {
    name: "EFFECT",
    description: "String",
    suggestions: ["NoSchedule", "PreferNoSchedule", "NoExecute"],
  },
};
const flag3984: Fig.Option = {
  name: "--effect",
  description:
    'Applies only to "toleration" property. _EFFECT_ must be one of: *NoSchedule*, *PreferNoSchedule*, *NoExecute*',
  args: {
    name: "EFFECT",
    description: "String",
    suggestions: ["NoSchedule", "PreferNoSchedule", "NoExecute"],
  },
};
const flag4017: Fig.Option = {
  name: "--enable-agent-sandbox",
  description:
    "Enable the Agent Sandbox feature on the cluster.\nUse `--no-enable-agent-sandbox` to disable",
};
const flag4019: Fig.Option = {
  name: "--enable-application-logs",
  description:
    "Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics)",
};
const flag4024: Fig.Option = {
  name: "--enable-authorized-networks-on-private-endpoint",
  description:
    "Enable enforcement of --master-authorized-networks CIDR ranges for\ntraffic reaching cluster's control plane via private IP",
};
const flag4025: Fig.Option = {
  name: "--enable-auto-ipam",
  description:
    "Enable the Auto IP Address Management (Auto IPAM) feature for the cluster",
};
const flag4026: Fig.Option = {
  name: "--enable-auto-repair",
  description: "If set, deploy the cluster-health-controller",
};
const flag4027: Fig.Option = {
  name: "--enable-auto-resize",
  description: "Enable controle plane node auto resize",
};
const flag4035: Fig.Option = {
  name: "--enable-autoprovisioning-autorepair",
  description:
    "Enable node autorepair for autoprovisioned node pools.\nUse --no-enable-autoprovisioning-autorepair to disable",
};
const flag4036: Fig.Option = {
  name: "--enable-autoprovisioning-autoupgrade",
  description:
    "Enable node autoupgrade for autoprovisioned node pools.\nUse --no-enable-autoprovisioning-autoupgrade to disable",
};
const flag4037: Fig.Option = {
  name: "--enable-autoprovisioning-blue-green-upgrade",
  description:
    "Whether to use blue-green upgrade for the autoprovisioned node pool",
};
const flag4038: Fig.Option = {
  name: "--enable-autoprovisioning-surge-upgrade",
  description: "Whether to use surge upgrade for the autoprovisioned node pool",
};
const flag4039: Fig.Option = {
  name: "--enable-autoprovisioning",
  description:
    "Enables  node autoprovisioning for a cluster.\n+\nCluster Autoscaler will be able to create new node pools. Requires maximum CPU\nand memory limits to be specified",
};
const flag4040: Fig.Option = {
  name: "--enable-autoprovisioning",
  description:
    "Enables Cluster Autoscaler to treat the node pool as if it was autoprovisioned.\n+\nCluster Autoscaler will be able to delete the node pool if it's unneeded",
};
const flag4044: Fig.Option = {
  name: "--enable-autorepair",
  description:
    "Enable node autorepair feature for a node pool. Use --no-enable-autorepair to disable.\n+\n  $ {command} --enable-autorepair\n+\nNode autorepair is disabled by default",
};
const flag4045: Fig.Option = {
  name: "--enable-autorepair",
  description:
    "Enable node autorepair feature for a node pool. Use --no-enable-autorepair to disable.\n+\n  $ {command} --enable-autorepair",
};
const flag4046: Fig.Option = {
  name: "--enable-autoscaling",
  description:
    "Enables autoscaling for a node pool.\n+\nEnables autoscaling in the node pool specified by --node-pool or\nthe default node pool if --node-pool is not provided. If not already,\n--max-nodes or --total-max-nodes must also be set",
};
const flag4052: Fig.Option = {
  name: "--enable-basic-auth",
  description:
    'Enable basic (username/password) auth for the cluster.  `--enable-basic-auth` is\nan alias for `--username=admin`; `--no-enable-basic-auth` is an alias for\n`--username=""`. Use `--password` to specify a password; if not, the server will\nrandomly generate one. For cluster versions before 1.12, if neither\n`--enable-basic-auth` nor `--username` is specified, `--enable-basic-auth` will\ndefault to `true`. After 1.12, `--enable-basic-auth` will default to `false`',
};
const flag4057: Fig.Option = {
  name: "--enable-binauthz",
  description:
    "(DEPRECATED) Enable Binary Authorization for this cluster.\n+\nThe `--enable-binauthz` flag is deprecated. Please use `--binauthz-evaluation-mode` instead",
};
const flag4058: Fig.Option = {
  name: "--enable-blue-green-upgrade",
  description: "Changes node pool upgrade strategy to blue-green upgrade",
};
const flag4063: Fig.Option = {
  name: "--enable-cilium-clusterwide-network-policy",
  description:
    "Enable Cilium Clusterwide Network Policies on the cluster. Disabled by default",
};
const flag4074: Fig.Option = {
  name: "--enable-confidential-nodes",
  description:
    "Enable confidential nodes for the cluster. Enabling Confidential Nodes\nwill create nodes using Confidential VM\nhttps://docs.cloud.google.com/compute/docs/about-confidential-vm",
};
const flag4097: Fig.Option = {
  name: "--enable-dataplane-v2-flow-observability",
  description:
    "Enables Advanced Datapath Observability which allows for a real-time view into pod-to-pod traffic within your cluster",
};
const flag4098: Fig.Option = {
  name: "--enable-dataplane-v2-metrics",
  description: "Exposes advanced datapath flow metrics on node port",
};
const flag4105: Fig.Option = {
  name: "--enable-default-compute-class",
  description:
    "Enable the default compute class to use for the cluster.\n+\nTo disable Default Compute Class in an existing cluster, explicitly set flag\n`--no-enable-default-compute-class`",
};
const flag4110: Fig.Option = {
  name: "--enable-dns-access",
  description:
    "Enable access to the cluster's control plane over DNS-based endpoint.\n+\nDNS-based control plane access is recommended",
};
const flag4125: Fig.Option = {
  name: "--enable-fleet",
  description:
    "Set cluster project as the fleet host project. This will register the cluster to the same project.\nTo register the cluster to a fleet in a different project, please use `--fleet-project=FLEET_HOST_PROJECT`.\nExample:\n$ {command} --enable-fleet",
};
const flag4129: Fig.Option = {
  name: "--enable-fqdn-network-policy",
  description:
    "Enable FQDN Network Policies on the cluster. FQDN Network Policies are disabled by default",
};
const flag4135: Fig.Option = {
  name: "--enable-google-cloud-access",
  description:
    "When you enable Google Cloud Access, any public IP addresses owned by Google\nCloud can reach the public control plane endpoint of your cluster",
};
const flag4142: Fig.Option = {
  name: "--enable-gvnic",
  description:
    "Enable the use of GVNIC for this cluster. Requires re-creation of nodes using\neither a node-pool upgrade or node-pool creation",
};
const flag4150: Fig.Option = {
  name: "--enable-identity-service",
  description:
    "Enable Identity Service component on the cluster.\n+\nWhen enabled, users can authenticate to Kubernetes cluster with external\nidentity providers.\n+\nIdentity Service is by default disabled when creating a new cluster.\nTo disable Identity Service in an existing cluster, explicitly set flag\n`--no-enable-identity-service`",
};
const flag4151: Fig.Option = {
  name: "--enable-image-streaming",
  description:
    "Enable Image Streaming for the cluster, allowing nodes to stream container\nimage data from Artifact Registry on demand to reduce container start times.\nThis flag sets the default for new node pools. It is enabled by default on\nAutopilot clusters.\n+\nSee [Image Streaming documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming)\nfor full requirements (including version, API enablement and Artifact Registry usage).\nTo disable Image Streaming for the cluster, use `--no-enable-image-streaming`",
};
const flag4152: Fig.Option = {
  name: "--enable-image-streaming",
  description:
    "Enable Image Streaming for the node pool, allowing nodes to stream container\nimage data from Artifact Registry on demand to reduce container start times.\nThis setting overrides the cluster-level Image Streaming default for this\nspecific node pool.\n+\nSee [Image Streaming documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/image-streaming)\nfor full requirements (including version, API enablement and Artifact Registry usage).\nTo disable Image Streaming for the node pool, use `--no-enable-image-streaming`",
};
const flag4158: Fig.Option = {
  name: "--enable-insecure-binding-system-authenticated",
  description:
    "Allow using `system:authenticated` as a subject in ClusterRoleBindings and RoleBindings.\nAllowing bindings that reference `system:authenticated` is a security risk and is not recommended.\n+\nTo disallow binding `system:authenticated` in a cluster, explicitly set the\n`--no-enable-insecure-binding-system-authenticated` flag instead",
};
const flag4159: Fig.Option = {
  name: "--enable-insecure-binding-system-unauthenticated",
  description:
    "Allow using `system:unauthenticated` and `system:anonymous` as subjects in ClusterRoleBindings and RoleBindings.\nAllowing bindings that reference `system:unauthenticated` and `system:anonymous` are a security risk and is not recommended.\n+\nTo disallow binding `system:authenticated` in a cluster, explicitly set the\n`--no-enable-insecure-binding-system-unauthenticated` flag instead",
};
const flag4160: Fig.Option = {
  name: "--enable-insecure-kubelet-readonly-port",
  description:
    "Enables the Kubelet's insecure read only port.\n+\nTo disable the readonly port on a cluster or node-pool set the flag to\n`--no-enable-insecure-kubelet-readonly-port`",
};
const flag4163: Fig.Option = {
  name: "--enable-intra-node-visibility",
  description:
    "Enable Intra-node visibility for this cluster.\n+\nEnabling intra-node visibility makes your intra-node pod-to-pod traffic\nvisible to the networking fabric. With this feature, you can use VPC flow\nlogging or other VPC features for intra-node traffic.\n+\nEnabling it on an existing cluster causes the cluster\nmaster and the cluster nodes to restart, which might cause a disruption",
};
const flag4164: Fig.Option = {
  name: "--enable-ip-access",
  description:
    "Enable access to the cluster's control plane over private IP and\npublic IP if --enable-private-endpoint is not enabled",
};
const flag4175: Fig.Option = {
  name: "--enable-k8s-certs-via-dns",
  description:
    "Enable K8s client certificates Authentication to the cluster's control plane over DNS-based endpoint",
};
const flag4176: Fig.Option = {
  name: "--enable-k8s-tokens-via-dns",
  description:
    "Enable K8s Service Account tokens Authentication to the cluster's control plane over DNS-based endpoint",
};
const flag4179: Fig.Option = {
  name: "--enable-kernel-module-signature-enforcement",
  description:
    "Enforces that kernel modules are signed on all new nodes in the cluster unless\nexplicitly overridden with `--no-enable-kernel-module-signature-enforcement`\nwhen creating the nodepool.\nUse `--no-enable-kernel-module-signature-enforcement` to disable.\n+\nExamples:\n+\n  $ {command} example-cluster --enable-kernel-module-signature-enforcement",
};
const flag4180: Fig.Option = {
  name: "--enable-kernel-module-signature-enforcement",
  description:
    "Enforces that kernel modules are signed on all nodes in the node pool. This\nsetting overrides the cluster-level setting. For example, if the cluster\ndisables enforcement, you can enable enforcement only for a specific node pool.\nWhen the policy is modified on an existing node pool, nodes will be immediately\nrecreated to use the new policy.\nUse `--no-enable-kernel-module-signature-enforcement` to disable.\n+\nExamples:\n+\n  $ {command} node-pool-1 --enable-kernel-module-signature-enforcement",
};
const flag4182: Fig.Option = {
  name: "--enable-kubernetes-unstable-apis",
  description:
    "Enable Kubernetes beta API features on this cluster.\nBeta APIs are not expected to be production ready and\nshould be avoided in production-grade environments",
  args: { name: "API", description: "List", suggestions: [] },
};
const flag4185: Fig.Option = {
  name: "--enable-l4-ilb-subsetting",
  description: "Enable Subsetting for L4 ILB services created on this cluster",
};
const flag4190: Fig.Option = {
  name: "--enable-legacy-authorization",
  description:
    "Enables the legacy ABAC authentication for the cluster.\nUser rights are granted through the use of policies which combine attributes\ntogether. For a detailed look at these properties and related formats, see\nhttps://kubernetes.io/docs/admin/authorization/abac/. To use RBAC permissions\ninstead, create or update your cluster with the option\n`--no-enable-legacy-authorization`",
};
const flag4191: Fig.Option = {
  name: "--enable-legacy-lustre-port",
  description:
    "Allow the Lustre CSI driver to initialize LNet (the virtual network layer for Lustre kernel module) using port 6988.\nThis flag is required to workaround a port conflict with the gke-metadata-server on GKE nodes",
};
const flag4193: Fig.Option = {
  name: "--enable-load-balancer",
  description:
    "If set, enable the use of load balancer on the node pool instances",
};
const flag4210: Fig.Option = {
  name: "--enable-managed-prometheus",
  description: "Enable managed collection for Managed Service for Prometheus",
};
const flag4211: Fig.Option = {
  name: "--enable-managed-prometheus",
  description:
    "Enables managed collection for Managed Service for Prometheus in the cluster.\n+\nSee https://cloud.google.com/stackdriver/docs/managed-prometheus/setup-managed#enable-mgdcoll-gke\nfor more info.\n+\nEnabled by default for cluster versions 1.27 or greater,\nuse --no-enable-managed-prometheus to disable",
};
const flag4212: Fig.Option = {
  name: "--enable-managed-prometheus",
  description:
    "Enables managed collection for Managed Service for Prometheus in the cluster.\n+\nSee https://cloud.google.com/stackdriver/docs/managed-prometheus/setup-managed#enable-mgdcoll-gke\nfor more info.\n+\nManaged Prometheus is enabled by default for cluster versions 1.27 or greater,\nuse --no-enable-managed-prometheus to disable",
};
const flag4213: Fig.Option = {
  name: "--enable-manual-lb",
  description: "ManualLB typed load balancers configuration",
};
const flag4214: Fig.Option = {
  name: "--enable-master-authorized-networks",
  description:
    "Allow only specified set of CIDR blocks (specified by the\n`--master-authorized-networks` flag) to connect to Kubernetes master through\nHTTPS. Besides these blocks, the following have access as well:\n+\n  1) The private network the cluster connects to if\n  `--enable-private-nodes` is specified.\n  2) Google Compute Engine Public IPs if `--enable-private-nodes` is not\n  specified.\n+\nUse `--no-enable-master-authorized-networks` to disable. When disabled, public\ninternet (0.0.0.0/0) is allowed to connect to Kubernetes master through HTTPS",
};
const flag4216: Fig.Option = {
  name: "--enable-master-global-access",
  description:
    "Use with private clusters to allow access to the master's private endpoint from any Google Cloud region or on-premises environment regardless of the\nprivate cluster's region",
};
const flag4225: Fig.Option = {
  name: "--enable-multi-networking",
  description:
    "Enables multi-networking on the cluster.\nMulti-networking is disabled by default",
};
const flag4232: Fig.Option = {
  name: "--enable-network-egress-metering",
  description:
    "Enable network egress metering on this cluster.\n+\nWhen enabled, a DaemonSet is deployed into the cluster. Each DaemonSet pod\nmeters network egress traffic by collecting data from the conntrack table, and\nexports the metered metrics to the specified destination.\n+\nNetwork egress metering is disabled if this flag is omitted, or when\n`--no-enable-network-egress-metering` is set",
};
const flag4233: Fig.Option = {
  name: "--enable-network-policy",
  description:
    "Enable network policy enforcement for this cluster. If you are enabling network policy on an existing cluster the network policy addon must first be enabled on the master by using --update-addons=NetworkPolicy=ENABLED flag",
};
const flag4249: Fig.Option = {
  name: "--enable-pod-snapshots",
  description: "Enable the Pod Snapshot feature on the cluster",
};
const flag4256: Fig.Option = {
  name: "--enable-private-endpoint",
  description:
    "Cluster is managed using the private IP address of the master API endpoint",
};
const flag4264: Fig.Option = {
  name: "--enable-private-nodes",
  description:
    "Cluster is created with no public IP addresses on the cluster nodes",
};
const flag4265: Fig.Option = {
  name: "--enable-private-nodes",
  description:
    "Enables provisioning nodes with private IP addresses only.\n+\nThe control plane still communicates with all nodes through\nprivate IP addresses only, regardless of whether private\nnodes are enabled or disabled",
};
const flag4277: Fig.Option = {
  name: "--enable-queued-provisioning",
  description:
    "Mark the nodepool as Queued only. This means that all new nodes can\nbe obtained only through queuing via ProvisioningRequest API.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --enable-queued-provisioning\n  ... and other required parameters, for more details see:\n  https://cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest",
};
const flag4280: Fig.Option = {
  name: "--enable-ray-cluster-logging",
  description: "Enable automatic log processing sidecar for Ray clusters",
};
const flag4282: Fig.Option = {
  name: "--enable-ray-cluster-monitoring",
  description: "Enable automatic metrics collection for Ray clusters",
};
const flag4294: Fig.Option = {
  name: "--enable-secret-manager-rotation",
  description:
    "Enables the rotation of secrets in the Secret Manager CSI driver\nprovider component",
};
const flag4296: Fig.Option = {
  name: "--enable-secret-manager",
  description:
    "Enables the Secret Manager CSI driver provider component. See\nhttps://secrets-store-csi-driver.sigs.k8s.io/introduction\nhttps://github.com/GoogleCloudPlatform/secrets-store-csi-driver-provider-gcp",
};
const flag4298: Fig.Option = {
  name: "--enable-secret-sync-rotation",
  description: "Enables the rotation of secrets in the Secret Sync component",
};
const flag4300: Fig.Option = {
  name: "--enable-secret-sync",
  description:
    "Enables the Secret Sync component. For details, see [Synchronize secrets to Kubernetes Secrets](https://docs.cloud.google.com/secret-manager/docs/sync-k8-secrets)",
};
const flag4304: Fig.Option = {
  name: "--enable-service-externalips",
  description: "Enables use of services with externalIPs field",
};
const flag4305: Fig.Option = {
  name: "--enable-shielded-nodes",
  description:
    "Enable Shielded Nodes for this cluster. Enabling Shielded Nodes will enable a\nmore secure Node credential bootstrapping implementation. Starting with version\n1.18, clusters will have Shielded GKE nodes by default",
};
const flag4309: Fig.Option = {
  name: "--enable-sr-iov-config",
  description: "If set, install the SR-IOV operator",
};
const flag4313: Fig.Option = {
  name: "--enable-stackdriver-kubernetes",
  description:
    "(DEPRECATED) Enable Cloud Operations for GKE.\n+\nThe `--enable-stackdriver-kubernetes` flag is deprecated and will be removed in an upcoming release. Please use `--logging` and `--monitoring` instead. For more information, please read: https://cloud.google.com/kubernetes-engine/docs/concepts/about-logs and https://cloud.google.com/kubernetes-engine/docs/how-to/configure-metrics",
};
const flag4318: Fig.Option = {
  name: "--enable-surge-upgrade",
  description: "Changes node pool upgrade strategy to surge upgrade",
};
const flag4329: Fig.Option = {
  name: "--enable-vertical-pod-autoscaling",
  description: "Enable vertical pod autoscaling for a cluster",
};
const flag4340: Fig.Option = {
  name: "--enable-workload-identity",
  description:
    "Enable Workload Identity when registering the cluster with a fleet.\nEnsure that GKE Workload Identity is enabled on your GKE cluster, it\nis a requirement for using Workload Identity with memberships. Refer\nto the `Enable GKE Workload Identity` section in\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#enable\n--service_account_key_file flag should not be set if this is set",
};
const flag4558: Fig.Option = {
  name: "--etcd-api-ca",
  description:
    "The Certificate Authority Service caPool that will back the etcd API CA",
  args: { name: "CA_POOL_PATH", description: "String", suggestions: [] },
};
const flag4559: Fig.Option = {
  name: "--etcd-peer-ca",
  description:
    "The Certificate Authority Service caPool that will back the etcd peer CA",
  args: { name: "CA_POOL_PATH", description: "String", suggestions: [] },
};
const flag4638: Fig.Option = {
  name: "--exemptable-namespaces",
  description:
    "Namespaces that Policy Controller should ignore, separated by commas if multiple are supplied",
  args: {
    name: "EXEMPTABLE_NAMESPACES",
    description: "String",
    suggestions: [],
  },
};
const flag4639: Fig.Option = {
  name: "--exempted-namespaces",
  description:
    "Exempted namespaces are ignored by Policy Controller when applying constraints added by this bundle",
  args: { name: "EXEMPTED_NAMESPACES", description: "String", suggestions: [] },
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
const flag4903: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "Disable the [fleet-default membership configuration](https://docs.cloud.google.com/kubernetes-engine/fleet-management/docs/manage-features). Does not change existing membership configurations. Does nothing if the feature is disabled",
};
const flag4904: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "If specified, deletes the default membership\n        configuration present in your fleet.\n+\n        To delete the default membership configuration present in your\n        fleet, run:\n+\n          $ {command} --fleet-default-member-config",
};
const flag4905: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "If specified, deletes the default membership\n        configuration present in your fleet.\n+\n        To delete the fleet-level default Membership configuration present in\n        your fleet, run:\n+\n          $ {command} --fleet-default-member-config",
};
const flag4906: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "Removes the fleet default configuration for policy controller.\n      Memberships configured with the fleet default will maintain their current\n      configuration.\n+\n          $ {command} --fleet-default-member-config",
};
const flag4907: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "The path to a policy-controller.yaml configuration\n        file. If specified, this configuration will become the default Policy\n        Controller configuration for all memberships in your fleet. It can be\n        overridden with a membership-specific configuration by using the\n        the `Update` command.\n+\n        To enable the Policy Controller Feature with a fleet-level default\n        membership configuration, run:\n+\n          $ {command} --fleet-default-member-config=/path/to/policy-controller.yaml",
  args: {
    name: "FLEET_DEFAULT_MEMBER_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag4908: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "The path to a service-mesh.yaml configuration file.\n+\n        To enable the Service Mesh Feature with a fleet-level default\n        membership configuration, run:\n+\n          $ {command} --fleet-default-member-config=/path/to/service-mesh.yaml",
  args: {
    name: "FLEET_DEFAULT_MEMBER_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag4909: Fig.Option = {
  name: "--fleet-default-member-config",
  description: "The path to an identity-service.yaml configuration file",
  args: {
    name: "FLEET_DEFAULT_MEMBER_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag4910: Fig.Option = {
  name: "--fleet-default-member-config",
  description:
    "The path to an identity-service.yaml identity configuration\n        file. If specified, this configuration would be the default Identity\n        Service configuration for all memberships in your fleet. It could be\n        overridden with a membership-specific configuration by using the\n        the `Apply` command with the `--config` argument.\n+\n        To enable the Identity Service Feature with a fleet-level default\n        membership configuration, run:\n+\n          $ {command} --fleet-default-member-config=/path/to/identity-service.yaml",
  args: {
    name: "FLEET_DEFAULT_MEMBER_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag4913: Fig.Option = {
  name: "--fleet-package",
  description:
    "Fleet Package name.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--fleet-package` on the command line",
  args: { name: "FLEET_PACKAGE", description: "String", suggestions: [] },
};
const flag4914: Fig.Option = {
  name: "--fleet-package",
  description: "Parent Fleet Package of the Rollout",
  args: { name: "FLEET_PACKAGE", description: "String", suggestions: [] },
};
const flag4915: Fig.Option = {
  name: "--fleet-project",
  description:
    "ID or number of the Fleet host project where the cluster is registered",
  args: {
    name: "FLEET_PROJECT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag4917: Fig.Option = {
  name: "--fleet-project",
  description:
    "Sets fleet host project for the cluster. If specified, the current cluster will be registered as a fleet membership under the fleet host project.\n+\nExample:\n$ {command} --fleet-project=my-project",
  args: {
    name: "PROJECT_ID_OR_NUMBER",
    description: "String",
    suggestions: [],
  },
};
const flag4920: Fig.Option = {
  name: "--flex-start",
  description:
    "Start the node pool with Flex Start provisioning model.\n+\n $ {command} node-pool-1 --cluster=example-cluster --flex-start\n and other required parameters, for more details see:\n https://cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest",
};
const flag5041: Fig.Option = {
  name: "--force",
  description:
    "Disable this feature, even if it is currently in use. Force disablement may result in unexpected behavior",
};
const flag5044: Fig.Option = {
  name: "--force",
  description:
    "Force disablement. Bypasses any prompts for confirmation. When disabling the entire feature, proceeds even if the feature is in use. Might result in unexpected behavior",
};
const flag5046: Fig.Option = {
  name: "--force",
  description:
    "Force rollout creation even if an active rollout exists on the first stage of the sequence",
};
const flag5075: Fig.Option = {
  name: "--force",
  description:
    "If true, force deletion of any child resources. Otherwise, attempting to delete a Fleet Package with children will fail",
};
const flag5076: Fig.Option = {
  name: "--force",
  description:
    "If true, force deletion of any child resources. Otherwise, attempting to delete a Release with children will fail",
};
const flag5077: Fig.Option = {
  name: "--force",
  description:
    "If true, force deletion of any child resources. Otherwise, attempting to delete a Resource Bundle with children will fail",
};
const flag5091: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. If both `core/format` and\n`--format` are specified, `--format` takes precedence. `--format`\nand `core/format` both take precedence over `core/default_format`. The\nsupported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud\ntopic formats. Run `$ gcloud config set --help` to see more information\nabout `core/format`",
  args: { name: "FORMAT", description: "String", suggestions: [] },
};
const flag5131: Fig.Option = {
  name: "--gateway-api",
  description:
    "Enables GKE Gateway controller in this cluster. The value of the flag specifies\nwhich Open Source Gateway API release channel will be used to define Gateway\nresources. _GATEWAY_API_ must be one of:\n+\n*disabled*::: Gateway controller will be disabled in the cluster.\n+\n*standard*::: Gateway controller will be enabled in the cluster.\nResource definitions from the `standard` OSS Gateway API release\nchannel will be installed. \n:::\n+",
  args: {
    name: "GATEWAY_API",
    description: "String",
    suggestions: ["disabled", "standard"],
  },
};
const flag5267: Fig.Option = {
  name: "--gke-cluster",
  description:
    "The location/name of the GKE cluster. The location can be a zone or\na region for e.g `us-central1-a/my-cluster`",
  args: {
    name: "LOCATION/CLUSTER_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag5278: Fig.Option = {
  name: "--gke-uri",
  description:
    "The URI of a GKE cluster that you want to register to Hub; for example,\n'https://container.googleapis.com/v1/projects/my-project/locations/us-central1-a/clusters/my-cluster'.\nTo obtain the URI, you can run 'gcloud container clusters list --uri'.\nNote that this should only be provided if the cluster being registered\nis a GKE cluster. The service will validate the provided URI to\nconfirm that it maps to a valid GKE cluster.\"",
  args: { name: "GKE_URI", description: "String", suggestions: [] },
};
const flag5281: Fig.Option = {
  name: "--gkeops-etcd-backup-encryption-key",
  description:
    "The Cloud KMS symmetric encryption cryptoKey that will be used to encrypt the disaster recovery etcd backups for the cluster",
  args: { name: "KEY", description: "String", suggestions: [] },
};
const flag5394: Fig.Option = {
  name: "--group",
  description: "Group for the RBACRoleBinding to update to",
  args: { name: "GROUP", description: "String", suggestions: [] },
};
const flag5395: Fig.Option = {
  name: "--group",
  description: "Group for the RoleBinding",
  args: { name: "GROUP", description: "String", suggestions: [] },
};
const flag5399: Fig.Option = {
  name: "--groups",
  description: "Group email address or third-party IAM group principal",
  args: { name: "GROUPS", description: "String", suggestions: [] },
};
const flag5425: Fig.Option = {
  name: "--has-private-issuer",
  description:
    "Set to true for clusters where no publicly-routable OIDC discovery\nendpoint for the Kubernetes service account token issuer exists.\n+\nWhen set to true, the gcloud command-line tool will read the\nprivate issuer URL and JSON Web Key Set (JWKS) (public keys) for\nvalidating service account tokens from the cluster's API server\nand upload both when creating the Membership. Google Cloud Platform\nwill then use the JWKS, instead of a public OIDC endpoint,\nto validate service account tokens issued by this cluster.\nNote the JWKS establishes the uniqueness of issuers in this\nconfiguration, but issuer claims in tokens are still compared to the\nissuer URL associated with the Membership when validating tokens.\n+\nNote the cluster's OIDC discovery endpoints\n(https://[KUBE-API-ADDRESS]/.well-known/openid-configuration and\nhttps://[KUBE-API-ADDRESS]/openid/v1/jwks) must still be\nnetwork-accessible to the gcloud client running this command",
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5512: Fig.Option = {
  name: "--hpa-profile",
  description:
    "Set Horizontal Pod Autoscaler behavior. Accepted values are: none, performance.\nFor more information, see https://cloud.google.com/kubernetes-engine/docs/how-to/horizontal-pod-autoscaling#hpa-profile",
  args: { name: "HPA_PROFILE", description: "String", suggestions: [] },
};
const flag5671: Fig.Option = {
  name: "--image-project",
  description:
    "The Google Cloud project storing the Operating System image for the node pool. This is a private feature, please contact your Google account team for allowlisting this feature",
  args: { name: "IMAGE_PROJECT", description: "String", suggestions: [] },
};
const flag5677: Fig.Option = {
  name: "--image-type",
  description:
    "The image type to use for the cluster. Defaults to server-specified.\n+\nImage Type specifies the base OS that the nodes in the cluster will run on.\nIf an image type is specified, that will be assigned to the cluster and all\nfuture upgrades will use the specified image type. If it is not specified the\nserver will pick the default image type.\n+\nThe default image type and the list of valid image types are available\nusing the following command.\n+\n  $ gcloud container get-server-config",
  args: { name: "IMAGE_TYPE", description: "String", suggestions: [] },
};
const flag5688: Fig.Option = {
  name: "--image",
  description: "OS image name in vCenter",
  args: { name: "IMAGE", description: "String", suggestions: [] },
};
const flag5691: Fig.Option = {
  name: "--image",
  description:
    "The Operating System image for the node pool. This is a private feature, please contact your Google account team for allowlisting this feature",
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
const flag5726: Fig.Option = {
  name: "--in-transit-encryption",
  description:
    "Enable Dataplane V2 in-transit encryption. Dataplane v2 in-transit encryption is disabled by default. _IN_TRANSIT_ENCRYPTION_ must be one of: *inter-node-transparent*, *none*",
  args: {
    name: "IN_TRANSIT_ENCRYPTION",
    description: "String",
    suggestions: ["inter-node-transparent", "none"],
  },
};
const flag5783: Fig.Option = {
  name: "--ingress-vip",
  description: "VIP for ingress traffic into this cluster",
  args: { name: "INGRESS_VIP", description: "String", suggestions: [] },
};
const flag5828: Fig.Option = {
  name: "--install-connect-agent",
  description:
    "If set to True for a GKE cluster, Connect agent will be installed in\nthe cluster. No-op for Non-GKE clusters, where Connect agent will\nalways be installed",
};
const flag5871: Fig.Option = {
  name: "--instance-type",
  description: "AWS EC2 instance type for the control plane's nodes",
  args: { name: "INSTANCE_TYPE", description: "String", suggestions: [] },
};
const flag5872: Fig.Option = {
  name: "--instance-type",
  description: "AWS EC2 instance type for the node pool's nodes",
  args: { name: "INSTANCE_TYPE", description: "String", suggestions: [] },
};
const flag5985: Fig.Option = {
  name: "--internal-ip",
  description: "Whether to use the internal IP address of the cluster endpoint",
};
const flag6048: Fig.Option = {
  name: "--island-mode-pod-address-cidr-blocks",
  description: "IPv4 address range for all pods in the cluster",
  args: { name: "POD_ADDRESS", description: "List", suggestions: [] },
};
const flag6049: Fig.Option = {
  name: "--island-mode-service-address-cidr-blocks",
  description: "IPv4 address range for all services in the cluster",
  args: { name: "SERVICE_ADDRESS", description: "List", suggestions: [] },
};
const flag6050: Fig.Option = {
  name: "--island-mode-service-address-cidr-blocks",
  description: "IPv4 address range for all services in the cluster",
  args: { name: "SERVICE_ADDRESS", description: "List", suggestions: [] },
};
const flag6361: Fig.Option = {
  name: "--kubeconfig",
  description:
    "Path to the kubeconfig file.\n+\nIf not provided, the default at ~/.kube/config will be used",
  args: { name: "KUBECONFIG", description: "String", suggestions: [] },
};
const flag6365: Fig.Option = {
  name: "--kubeconfig",
  description:
    "The kubeconfig file containing an entry for the cluster. Defaults to\n$KUBECONFIG if it is set in the environment, otherwise defaults to\n$HOME/.kube/config",
  args: { name: "KUBECONFIG", description: "String", suggestions: [] },
};
const flag6391: Fig.Option = {
  name: "--labels",
  description: "Labels for the rollout sequence",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6397: Fig.Option = {
  name: "--labels",
  description:
    "Labels to apply to the Google Cloud resources in use by the Kubernetes Engine\ncluster. These are unrelated to Kubernetes labels.\n+\nExamples:\n+\n  $ {command} example-cluster --labels=label_a=value1,label_b=,label_c=value3",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6398: Fig.Option = {
  name: "--labels",
  description:
    "Labels to apply to the Google Cloud resources of node pools in the\nKubernetes Engine cluster. These are unrelated to Kubernetes labels.\nWarning: Updating this label will causes the node(s) to be recreated.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --labels=label1=value1,label2=value2",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6413: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6483: Fig.Option = {
  name: "--less",
  description: "Show less verbose output",
};
const flag6504: Fig.Option = {
  name: "--lifecycle",
  description: "Lifecycle of the Release",
  args: { name: "LIFECYCLE", description: "String", suggestions: [] },
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
const flag6566: Fig.Option = {
  name: "--local-ssd-count",
  description:
    "The number of local SSD disks to provision on each node, formatted and mounted\nin the filesystem.\n+\nLocal SSDs have a fixed 375 GB capacity per device. The number of disks that\ncan be attached to an instance is limited by the maximum number of disks\navailable on a machine, which differs by compute zone. See\nhttps://cloud.google.com/compute/docs/disks/local-ssd for more information",
  args: { name: "LOCAL_SSD_COUNT", description: "Int", suggestions: [] },
};
const flag6579: Fig.Option = {
  name: "--location-policy",
  description:
    "Location policy specifies the algorithm used when scaling-up the node pool.\n+\n* `BALANCED` - Is a best effort policy that aims to balance the sizes of available\n  zones.\n* `ANY` - Instructs the cluster autoscaler to prioritize utilization of unused\n  reservations, and reduces preemption risk for Spot VMs.\n+\n_LOCATION_POLICY_ must be one of: *BALANCED*, *ANY*",
  args: {
    name: "LOCATION_POLICY",
    description: "String",
    suggestions: ["BALANCED", "ANY"],
  },
};
const flag6586: Fig.Option = {
  name: "--location",
  description: "The location name",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6607: Fig.Option = {
  name: "--location",
  description:
    "Compute zone or region (e.g. us-central1-a or us-central1) for the cluster. Overrides the default compute/region or compute/zone value for this command invocation. Prefer using this flag over the --region or --zone flags",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6637: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the admin_cluster.\n+\nTo set the `location` attribute:\n* provide the argument `admin_cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_bare_metal/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6638: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the admin_cluster.\n+\nTo set the `location` attribute:\n* provide the argument `admin_cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_vmware/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6639: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the client.\n+\nTo set the `location` attribute:\n* provide the argument `client` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_azure/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6645: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_attached/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6646: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_aws/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6647: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_azure/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6648: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_bare_metal/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6649: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_vmware/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6656: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the node_pool.\n+\nTo set the `location` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_aws/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6657: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the node_pool.\n+\nTo set the `location` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_bare_metal/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6658: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the node_pool.\n+\nTo set the `location` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_vmware/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6659: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the nodepool.\n+\nTo set the `location` attribute:\n* provide the argument `node_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_azure/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6660: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation_id` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_attached/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6661: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation_id` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_aws/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6662: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation_id` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_azure/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6663: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation_id` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_bare_metal/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6664: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation_id` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_vmware/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6675: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud zone or region for the fleet-package.\n+\nTo set the `location` attribute:\n* provide the argument `fleet_package` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `config_delivery/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6676: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud zone or region for the rollout.\n+\nTo set the `location` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `config_delivery/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6677: Fig.Option = {
  name: "--location",
  description: "Google Cloud zone or region",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6694: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* By default, all the locations are listed",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6709: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* global is the only supported location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6717: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `container_attached/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6718: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `container_aws/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6719: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `container_azure/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6720: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `container_bare_metal/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6721: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `container_vmware/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6742: Fig.Option = {
  name: "--location",
  description:
    "Location for the binding.\n+\nTo set the `location` attribute:\n* provide the argument `BINDING` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6743: Fig.Option = {
  name: "--location",
  description:
    "Location for the membership.\n+\nTo set the `location` attribute:\n* provide the argument `--config-membership` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6744: Fig.Option = {
  name: "--location",
  description:
    "Location for the membership.\n+\nTo set the `location` attribute:\n* provide the argument `--membership` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6745: Fig.Option = {
  name: "--location",
  description:
    "Location for the memberships.\n+\nTo set the `location` attribute:\n* provide the argument `--memberships` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6746: Fig.Option = {
  name: "--location",
  description:
    "Location for the rbacrolebinding.\n+\nTo set the `location` attribute:\n* provide the argument `NAME` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6925: Fig.Option = {
  name: "--location",
  description:
    "The location for the membership resource, e.g. `us-central1`.\nIf not specified, defaults to `global`. Not supported for GKE clusters,\nwhose membership location will be the location of the cluster.\n+\n\nTo set the `location` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7011: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `membership` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* global is the only supported location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7018: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `scope` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* global is the only supported location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7054: Fig.Option = {
  name: "--location",
  description:
    "The location of the membership resource, e.g. `us-central1`.\nIf not specified, attempts to automatically choose the correct region.\n+\n\nTo set the `location` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7055: Fig.Option = {
  name: "--location",
  description:
    "The location of the membership resource, e.g. `us-central1`.\nIf not specified, defaults to `global`.\n+\n\nTo set the `location` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `gkehub/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7095: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7099: Fig.Option = {
  name: "--location",
  description: "Name of the Membership location to list Bindings from",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7341: Fig.Option = {
  name: "--log-denies",
  description:
    "If set, log all denies and dry run failures. (To disable, use --no-log-denies)",
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7373: Fig.Option = {
  name: "--logging-config",
  description:
    'Path of the YAML(or JSON) file that contains the logging configurations.\n+\nThe JSON file is formatted as follows, with camelCase field naming:\n+\n```\n{\n    "loggingConfig": {\n        "defaultConfig": {\n            "mode": "COPY"\n        },\n        "fleetScopeLogsConfig": {\n            "mode": "MOVE"\n        }\n    }\n}\n```\n+\nThe YAML file is formatted as follows, with camelCase field naming:\n+\n```\n---\nloggingConfig:\n  defaultConfig:\n    mode: COPY\n  fleetScopeLogsConfig:\n    mode: MOVE\n```',
  args: {
    name: "LOGGING_CONFIG",
    description: "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
    suggestions: [],
  },
};
const flag7387: Fig.Option = {
  name: "--logging-variant",
  description:
    "Specifies the logging variant that will be deployed on all the nodes\nin the cluster. Valid logging variants are `MAX_THROUGHPUT`, `DEFAULT`.\nIf no value is specified, DEFAULT is used. _LOGGING_VARIANT_ must be one of:\n+\n*DEFAULT*::: 'DEFAULT' variant requests minimal resources but may not\nguarantee high throughput. \n*MAX_THROUGHPUT*::: 'MAX_THROUGHPUT' variant requests more node resources and is\nable to achieve logging throughput up to 10MB per sec. \n:::\n+",
  args: {
    name: "LOGGING_VARIANT",
    description: "String",
    suggestions: ["DEFAULT", "MAX_THROUGHPUT"],
  },
};
const flag7388: Fig.Option = {
  name: "--logging-variant",
  description:
    "Specifies the logging variant that will be deployed on all the nodes\nin the node pool. If the node pool doesn't specify a logging variant,\nthen the logging variant specified for the cluster will be deployed on\nall the nodes in the node pool. Valid logging variants are\n`MAX_THROUGHPUT`, `DEFAULT`. _LOGGING_VARIANT_ must be one of:\n+\n*DEFAULT*::: 'DEFAULT' variant requests minimal resources but may not\nguarantee high throughput. \n*MAX_THROUGHPUT*::: 'MAX_THROUGHPUT' variant requests more node resources and is\nable to achieve logging throughput up to 10MB per sec. \n:::\n+",
  args: {
    name: "LOGGING_VARIANT",
    description: "String",
    suggestions: ["DEFAULT", "MAX_THROUGHPUT"],
  },
};
const flag7390: Fig.Option = {
  name: "--logging",
  description:
    "Set the components that have logging enabled.\n+\nExamples:\n+\n  $ {command} --logging=SYSTEM\n  $ {command} --logging=SYSTEM,WORKLOAD\n  $ {command} --logging=NONE\n+\n_COMPONENT_ must be one of: *NONE*, *SYSTEM*, *WORKLOAD*",
  args: { name: "COMPONENT", description: "List", suggestions: [] },
};
const flag7391: Fig.Option = {
  name: "--logging",
  description:
    "Set the components that have logging enabled.\n+\nExamples:\n+\n  $ {command} --logging=SYSTEM\n  $ {command} --logging=SYSTEM,WORKLOAD\n+\n_COMPONENT_ must be one of: *SYSTEM*, *WORKLOAD*",
  args: { name: "COMPONENT", description: "List", suggestions: [] },
};
const flag7393: Fig.Option = {
  name: "--logging",
  description:
    "Set the components that have logging enabled. Valid component values are:\n`SYSTEM`, `WORKLOAD`, `API_SERVER`, `CONTROLLER_MANAGER`, `SCHEDULER`, `KCP_HPA`, `NONE`\n+\nFor more information, see\nhttps://cloud.google.com/kubernetes-engine/docs/concepts/about-logs#available-logs\n+\nExamples:\n+\n  $ {command} --logging=SYSTEM\n  $ {command} --logging=SYSTEM,API_SERVER,WORKLOAD\n  $ {command} --logging=NONE",
  args: { name: "COMPONENT", description: "List", suggestions: [] },
};
const flag7398: Fig.Option = {
  name: "--login-user",
  description: "User name used to access node machines",
  args: { name: "LOGIN_USER", description: "String", suggestions: [] },
};
const flag7410: Fig.Option = {
  name: "--lvp-node-mounts-config-path",
  description: "Path for the LVP node mounts class",
  args: {
    name: "LVP_NODE_MOUNTS_CONFIG_PATH",
    description: "String",
    suggestions: [],
  },
};
const flag7411: Fig.Option = {
  name: "--lvp-node-mounts-config-storage-class",
  description: "Storage class for LVP node mounts",
  args: {
    name: "LVP_NODE_MOUNTS_CONFIG_STORAGE_CLASS",
    description: "String",
    suggestions: [],
  },
};
const flag7412: Fig.Option = {
  name: "--lvp-share-path",
  description: "Path for the LVP share class",
  args: { name: "LVP_SHARE_PATH", description: "String", suggestions: [] },
};
const flag7413: Fig.Option = {
  name: "--lvp-share-storage-class",
  description: "Storage class for LVP share",
  args: {
    name: "LVP_SHARE_STORAGE_CLASS",
    description: "String",
    suggestions: [],
  },
};
const flag7416: Fig.Option = {
  name: ["--machine-type", "-m"],
  description:
    'The type of machine to use for nodes. Defaults to e2-medium.\nThe list of predefined machine types is available using the following command:\n+\n  $ gcloud compute machine-types list\n+\nYou can also specify custom machine types by providing a string with the format "custom-CPUS-RAM"\nwhere "CPUS" is the number of virtual CPUs and "RAM" is the amount of RAM in\nMiB.\n+\nFor example, to create a node pool using custom machines with 2 vCPUs and 12 GB\nof RAM:\n+\n  $ {command} high-mem-pool --machine-type=custom-2-12288',
  args: { name: "MACHINE_TYPE", description: "String", suggestions: [] },
};
const flag7446: Fig.Option = {
  name: "--main-volume-size",
  description:
    "Size of the main volume. The value must be a whole number followed by a size unit of `GB` for gigabyte, or `TB` for terabyte. If no size unit is specified, GB is assumed",
  args: {
    name: "MAIN_VOLUME_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag7449: Fig.Option = {
  name: "--maintenance-address-cidr-blocks",
  description: "IPv4 addresses to be placed into maintenance mode",
  args: {
    name: "MAINTENANCE_ADDRESS_CIDR_BLOCKS",
    description: "List",
    suggestions: [],
  },
};
const flag7450: Fig.Option = {
  name: "--maintenance-address-cidr-blocks",
  description: "IPv4 addresses to be placed into maintenance mode",
  args: {
    name: "MAINTENANCE_ADDRESS_CIDR_BLOCKS",
    description: "List",
    suggestions: [],
  },
};
const flag7457: Fig.Option = {
  name: "--maintenance-minor-version-disruption-interval",
  description:
    "Set the minimum interval of time between minor version cluster upgrades",
  args: {
    name: "MAINTENANCE_MINOR_VERSION_DISRUPTION_INTERVAL",
    description: "String",
    suggestions: [],
  },
};
const flag7458: Fig.Option = {
  name: "--maintenance-patch-version-disruption-interval",
  description:
    "Set the minimum interval of time between patch version cluster upgrades",
  args: {
    name: "MAINTENANCE_PATCH_VERSION_DISRUPTION_INTERVAL",
    description: "String",
    suggestions: [],
  },
};
const flag7491: Fig.Option = {
  name: "--maintenance-window-duration",
  description:
    "The duration of maintenance windows, expressed as an [ISO 8601\nduration](https://en.wikipedia.org/wiki/ISO_8601#Durations) in hours,\nminutes, and seconds. You must set a maintenance window to at least 4 hours (`4H`).\nUse this flag or the `--maintenance-window-end` flag for the duration of the maintenance window",
  args: {
    name: "PT1H23M45S",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag7495: Fig.Option = {
  name: "--maintenance-window-end",
  description:
    "The end time for calculating the duration of the maintenance window,\nas expressed by the amount of time after the START_TIME, in the\nsame format. The value for END_TIME must be in the future, relative\nto START_TIME. This only calculates the duration of the window,\nand doesn't set when the maintenance window stops recurring.\nMaintenance windows only stop recurring when they're removed. See\n$ gcloud topic datetimes for information on time formats.\n+\nThis flag argument must be specified if any of the other arguments\nin this group are specified",
  args: {
    name: "TIME_STAMP",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7509: Fig.Option = {
  name: "--maintenance-window-recurrence",
  description:
    "An RFC 5545 RRULE, specifying how the window will recur. Note that minimum\nrequirements for maintenance periods will be enforced. Note that FREQ=SECONDLY,\nMINUTELY, and HOURLY are not supported",
  args: { name: "RRULE", description: "String", suggestions: [] },
};
const flag7515: Fig.Option = {
  name: "--maintenance-window-start",
  description:
    "Start time of the first window (can occur in the past). The start time\ninfluences when the window will start for recurrences. See $ gcloud topic\ndatetimes for information on time formats",
  args: {
    name: "TIME_STAMP",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7547: Fig.Option = {
  name: "--management",
  description:
    "The management mode to update to. _MANAGEMENT_ must be one of: *automatic*, *manual*",
  args: {
    name: "MANAGEMENT",
    description: "String",
    suggestions: ["automatic", "manual"],
  },
};
const flag7550: Fig.Option = {
  name: "--manifest-output-file",
  description:
    "The full path of the file into which the Connect agent installation\nmanifest should be stored. If this option is provided, then the\nmanifest will be written to this file and will not be deployed into\nthe cluster by gcloud, and it will need to be deployed manually",
  args: {
    name: "MANIFEST_OUTPUT_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag7565: Fig.Option = {
  name: "--master-authorized-networks",
  description:
    "The list of CIDR blocks (up to 100 for private cluster, 50 for public cluster) that are allowed to connect to Kubernetes master through HTTPS. Specified in CIDR notation (e.g. 1.2.3.4/30). Cannot be specified unless `--enable-master-authorized-networks` is also specified",
  args: { name: "NETWORK", description: "List", suggestions: [] },
};
const flag7577: Fig.Option = {
  name: "--master-ipv4-cidr",
  description:
    "IPv4 CIDR range to use for the master network.  This should have a netmask of size /28 and should be used in conjunction with the --enable-private-nodes flag",
  args: { name: "MASTER_IPV4_CIDR", description: "String", suggestions: [] },
};
const flag7604: Fig.Option = {
  name: "--max-accelerator",
  description:
    "Sets maximum limit for a single type of accelerators (e.g. GPUs) in cluster.\n+\n*type*::: (Required) The specific type (e.g. nvidia-tesla-t4 for NVIDIA T4)\nof accelerator for which the limit is set. Use ```gcloud compute\naccelerator-types list``` to learn about all available accelerator types.\n+\n*count*::: (Required) The maximum number of accelerators\nto which the cluster can be scaled",
  args: { name: "type=TYPE,count=COUNT", description: "Dict", suggestions: [] },
};
const flag7626: Fig.Option = {
  name: "--max-cpu",
  description:
    "Maximum number of cores in the cluster.\n+\nMaximum number of cores to which the cluster can scale.\nRequired to be set when --enable-autoprovisioning is used",
  args: { name: "MAX_CPU", description: "Int", suggestions: [] },
};
const flag7648: Fig.Option = {
  name: "--max-memory",
  description:
    "Maximum memory in the cluster.\n+\nMaximum number of gigabytes of memory to which the cluster can scale.\nRequired to be set when --enable-autoprovisioning is used",
  args: { name: "MAX_MEMORY", description: "Int", suggestions: [] },
};
const flag7651: Fig.Option = {
  name: "--max-nodes",
  description: "Maximum number of nodes in the node pool",
  args: { name: "MAX_NODES", description: "Int", suggestions: [] },
};
const flag7652: Fig.Option = {
  name: "--max-nodes",
  description: "Maximum number of nodes in the node pool",
  args: { name: "MAX_NODES", description: "Int", suggestions: [] },
};
const flag7653: Fig.Option = {
  name: "--max-nodes",
  description:
    "Maximum number of nodes per zone in the node pool.\n+\nMaximum number of nodes per zone to which the node pool specified by --node-pool\n(or default node pool if unspecified) can scale. Ignored unless\n--enable-autoscaling is also specified",
  args: { name: "MAX_NODES", description: "Int", suggestions: [] },
};
const flag7661: Fig.Option = {
  name: "--max-pods-per-node",
  description: "Maximum number of pods a node can run",
  args: { name: "MAX_PODS_PER_NODE", description: "Int", suggestions: [] },
};
const flag7662: Fig.Option = {
  name: "--max-pods-per-node",
  description: "Maximum number of pods per node",
  args: { name: "MAX_PODS_PER_NODE", description: "Int", suggestions: [] },
};
const flag7663: Fig.Option = {
  name: "--max-pods-per-node",
  description:
    "The max number of pods per node for this node pool.\n+\nThis flag sets the maximum number of pods that can be run at the same time on a\nnode. This will override the value given with --default-max-pods-per-node flag\nset at the cluster level.\n+\nMust be used in conjunction with '--enable-ip-alias'",
  args: { name: "MAX_PODS_PER_NODE", description: "Int", suggestions: [] },
};
const flag7685: Fig.Option = {
  name: "--max-run-duration",
  description:
    "Limit the runtime of each node in the node pool to the specified\nduration.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --max-run-duration=3600s",
  args: { name: "MAX_RUN_DURATION", description: "String", suggestions: [] },
};
const flag7690: Fig.Option = {
  name: "--max-surge-update",
  description:
    "Maximum number of extra (surge) nodes to be created beyond the current size of\nthe node pool during its update process. Use --max-unavailable-update as well,\nif needed, to control the overall surge settings.\n+\nTo create an extra node each time the node pool is rolling updated, run:\n+\n  $ {command} --max-surge-update=1 --max-unavailable-update=0",
  args: { name: "MAX_SURGE_UPDATE", description: "Int", suggestions: [] },
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
const flag7755: Fig.Option = {
  name: "--membership-location",
  description:
    "The location of the membership resource, e.g. `us-central1`.\nIf not specified, defaults to `global`",
  args: { name: "MEMBERSHIP_LOCATION", description: "String", suggestions: [] },
};
const flag7756: Fig.Option = {
  name: "--membership-type",
  description:
    "Specify a membership type for the cluster's fleet membership.\nExample:\n$ {command} --membership-type=LIGHTWEIGHT. _MEMBERSHIP_TYPE_ must be (only one value is supported):\n+\n*LIGHTWEIGHT*::: Fleet membership representing this cluster will be lightweight.\n+\n:::\n+",
  args: {
    name: "MEMBERSHIP_TYPE",
    description: "String",
    suggestions: ["LIGHTWEIGHT"],
  },
};
const flag7757: Fig.Option = {
  name: "--membership",
  description:
    "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `--membership` on the command line",
  args: { name: "MEMBERSHIP", description: "String", suggestions: [] },
};
const flag7758: Fig.Option = {
  name: "--membership",
  description:
    "Membership ID to get credentials from. If not provided, a\nprompt will offer a list of memberships in the fleet",
  args: { name: "MEMBERSHIP", description: "String", suggestions: [] },
};
const flag7759: Fig.Option = {
  name: "--membership",
  description: "Membership name to assign RBAC policy with",
  args: { name: "MEMBERSHIP", description: "String", suggestions: [] },
};
const flag7760: Fig.Option = {
  name: "--membership",
  description: "Name of the Membership to list Bindings from",
  args: { name: "MEMBERSHIP", description: "String", suggestions: [] },
};
const flag7761: Fig.Option = {
  name: "--membership",
  description:
    "Name of the binding.\n+\nTo set the `membership` attribute:\n* provide the argument `BINDING` on the command line with a fully specified name;\n* provide the argument `--membership` on the command line",
  args: { name: "MEMBERSHIP", description: "String", suggestions: [] },
};
const flag7762: Fig.Option = {
  name: "--memberships",
  description:
    "IDs of the memberships or fully qualified identifiers for the memberships.\n+\nTo set the `memberships` attribute:\n* provide the argument `--memberships` on the command line",
  args: { name: "MEMBERSHIPS", description: "List", suggestions: [] },
};
const flag7767: Fig.Option = {
  name: "--memory",
  description:
    "Megabytes of memory for each admin cluster node that serves as a control plane for this VMware User Cluster (default: 8192 MB memory)",
  args: {
    name: "MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag7769: Fig.Option = {
  name: "--memory",
  description: "Size of memory for each node in the node pool in MB",
  args: {
    name: "MEMORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag7812: Fig.Option = {
  name: "--metadata-from-file",
  description:
    "Same as ``--metadata'' except that the value for the entry will\nbe read from a local file",
  args: { name: "KEY=LOCAL_FILE_PATH", description: "Dict", suggestions: [] },
};
const flag7827: Fig.Option = {
  name: "--metadata",
  description:
    "Compute Engine metadata to be made available to the guest operating system\nrunning on nodes within the node pool.\n+\nEach metadata entry is a key/value pair separated by an equals sign.\nMetadata keys must be unique and less than 128 bytes in length. Values\nmust be less than or equal to 32,768 bytes in length. The total size of\nall keys and values must be less than 512 KB. Multiple arguments can be\npassed to this flag. For example:\n+\n``--metadata key-1=value-1,key-2=value-2,key-3=value-3''\n+\nAdditionally, the following keys are reserved for use by Kubernetes\nEngine:\n+\n* ``cluster-location''\n* ``cluster-name''\n* ``cluster-uid''\n* ``configure-sh''\n* ``enable-os-login''\n* ``gci-update-strategy''\n* ``gci-ensure-gke-docker''\n* ``instance-template''\n* ``kube-env''\n* ``startup-script''\n* ``user-data''\n+\nGoogle Kubernetes Engine sets the following keys by default:\n+\n* ``serial-port-logging-enable''\n+\nSee also Compute Engine's\nlink:https://cloud.google.com/compute/docs/storing-retrieving-metadata[documentation]\non storing and retrieving instance metadata",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag7834: Fig.Option = {
  name: "--metal-lb-address-pools",
  description:
    "MetalLB load balancer configurations.\n+\nExamples:\n+\nTo specify MetalLB load balancer configurations for two address pools `pool1` and `pool2`,\n+\n```\n$ {command} example_cluster\n      --metal-lb-address-pools 'pool=pool1,avoid-buggy-ips=True,manual-assign=True,addresses=192.168.1.1/32;192.168.1.2-192.168.1.3'\n      --metal-lb-address-pools 'pool=pool2,avoid-buggy-ips=False,manual-assign=False,addresses=192.168.2.1/32;192.168.2.2-192.168.2.3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
  args: {
    name: "METAL_LB_ADDRESS_POOLS",
    description: "Dict",
    suggestions: [],
  },
};
const flag7835: Fig.Option = {
  name: "--metal-lb-config-address-pools",
  description:
    "MetalLB load balancer configurations.\n+\nExamples:\n+\nTo specify MetalLB load balancer configurations for two address pools `pool1` and `pool2`,\n+\n```\n$ gcloud {command}\n    --metal-lb-config-address-pools 'pool=pool1,avoid-buggy-ips=True,manual-assign=True,addresses=192.168.1.1/32;192.168.1.2-192.168.1.3'\n    --metal-lb-config-address-pools 'pool=pool2,avoid-buggy-ips=False,manual-assign=False,addresses=192.168.2.1/32;192.168.2.2-192.168.2.3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
  args: {
    name: "METAL_LB_CONFIG_ADDRESS_POOLS",
    description: "Dict",
    suggestions: [],
  },
};
const flag7838: Fig.Option = {
  name: "--metal-lb-load-balancer-node-configs",
  description: "MetalLB load balancer node configuration",
  args: {
    name: "METAL_LB_LOAD_BALANCER_NODE_CONFIGS",
    description: "Dict",
    suggestions: [],
  },
};
const flag7839: Fig.Option = {
  name: "--metal-lb-load-balancer-node-labels",
  description: "Labels assigned to nodes of a MetalLB node pool",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag7840: Fig.Option = {
  name: "--metal-lb-load-balancer-node-taints",
  description: "Node taint applied to every node in a MetalLB node pool",
  args: { name: "KEY=VALUE:EFFECT", description: "Dict", suggestions: [] },
};
const flag7841: Fig.Option = {
  name: "--metal-lb-load-balancer-registry-burst",
  description:
    "Maximum size of bursty pulls, temporarily allow pulls to burst to this number, while still not exceeding registry_pull_qps",
  args: {
    name: "METAL_LB_LOAD_BALANCER_REGISTRY_BURST",
    description: "Int",
    suggestions: [],
  },
};
const flag7842: Fig.Option = {
  name: "--metal-lb-load-balancer-registry-pull-qps",
  description: "Limit of registry pulls per second",
  args: {
    name: "METAL_LB_LOAD_BALANCER_REGISTRY_PULL_QPS",
    description: "Int",
    suggestions: [],
  },
};
const flag7874: Fig.Option = {
  name: "--min-accelerator",
  description:
    "Sets minimum limit for a single type of accelerators (e.g. GPUs) in cluster. Defaults\nto 0 for all accelerator types if it isn't set.\n+\n*type*::: (Required) The specific type (e.g. nvidia-tesla-t4 for NVIDIA T4)\nof accelerator for which the limit is set. Use ```gcloud compute\naccelerator-types list``` to learn about all available accelerator types.\n+\n*count*::: (Required) The minimum number of accelerators\nto which the cluster can be scaled",
  args: { name: "type=TYPE,count=COUNT", description: "Dict", suggestions: [] },
};
const flag7883: Fig.Option = {
  name: "--min-cpu",
  description:
    "Minimum number of cores in the cluster.\n+\nMinimum number of cores to which the cluster can scale",
  args: { name: "MIN_CPU", description: "Int", suggestions: [] },
};
const flag7893: Fig.Option = {
  name: "--min-memory",
  description:
    "Minimum memory in the cluster.\n+\nMinimum number of gigabytes of memory to which the cluster can scale",
  args: { name: "MIN_MEMORY", description: "Int", suggestions: [] },
};
const flag7896: Fig.Option = {
  name: "--min-nodes",
  description: "Minimum number of nodes in the node pool",
  args: { name: "MIN_NODES", description: "Int", suggestions: [] },
};
const flag7897: Fig.Option = {
  name: "--min-nodes",
  description: "Minimum number of nodes in the node pool",
  args: { name: "MIN_NODES", description: "Int", suggestions: [] },
};
const flag7898: Fig.Option = {
  name: "--min-nodes",
  description:
    "Minimum number of nodes per zone in the node pool.\n+\nMinimum number of nodes per zone to which the node pool specified by --node-pool\n(or default node pool if unspecified) can scale. Ignored unless\n--enable-autoscaling is also specified",
  args: { name: "MIN_NODES", description: "Int", suggestions: [] },
};
const flag7956: Fig.Option = {
  name: "--model-server-version",
  description:
    "The model server version. If omitted, the most recently benchmarked version is used. Other options include the model server version of a profile, or 'all' to return all versions",
  args: {
    name: "MODEL_SERVER_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag7962: Fig.Option = {
  name: "--model-server",
  description: "The model server",
  args: { name: "MODEL_SERVER", description: "String", suggestions: [] },
};
const flag7972: Fig.Option = {
  name: "--model",
  description: "The model",
  args: { name: "MODEL", description: "String", suggestions: [] },
};
const flag8015: Fig.Option = {
  name: "--monitoring",
  description:
    "Monitoring backend options Policy Controller should export metrics to, separated by commas if multiple are supplied.  Setting this flag will overwrite currently enabled backends, not append. Options: prometheus, cloudmonitoring",
  args: { name: "MONITORING", description: "String", suggestions: [] },
};
const flag8016: Fig.Option = {
  name: "--monitoring",
  description:
    "Set the components that have monitoring enabled. Valid component values are:\n`SYSTEM`, `WORKLOAD` (Deprecated), `NONE`, `API_SERVER`, `CONTROLLER_MANAGER`,\n`SCHEDULER`, `DAEMONSET`, `DEPLOYMENT`, `HPA`, `POD`, `STATEFULSET`, `STORAGE`,\n`CADVISOR`, `KUBELET`, `DCGM`, `JOBSET`\n+\nNote: `DAEMONSET`, `DEPLOYMENT`, `HPA`, `POD`, `STATEFULSET`, `STORAGE`,\n`CADVISOR`, `KUBELET`, `DCGM`, and `JOBSET` require Google Managed Prometheus\nto be enabled.\n+\nFor more information, see\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/configure-metrics#available-metrics\n+\nExamples:\n+\n  $ {command} --monitoring=SYSTEM,API_SERVER,POD\n  $ {command} --monitoring=NONE",
  args: { name: "COMPONENT", description: "List", suggestions: [] },
};
const flag8041: Fig.Option = {
  name: "--mutation",
  description:
    "If set, enable support for mutation. (To disable, use --no-mutation)",
};
const flag8110: Fig.Option = {
  name: "--namespace-labels",
  description: "List of namespace-level label KEY=VALUE pairs to add",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag8111: Fig.Option = {
  name: "--namespace-labels",
  description: "List of scope-level label KEY=VALUE pairs to add",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag8197: Fig.Option = {
  name: "--network-performance-configs",
  description:
    "Configures network performance settings for the cluster.\nNode pools can override with their own settings.\n+\n*total-egress-bandwidth-tier*::: Total egress bandwidth is the available\noutbound bandwidth from a VM, regardless of whether the traffic\nis going to internal IP or external IP destinations.\nThe following tier values are allowed: [TIER_UNSPECIFIED,TIER_1].\n+\nSee https://cloud.google.com/compute/docs/networking/configure-vm-with-high-bandwidth-configuration for more information",
  args: { name: "PROPERTY1=VALUE1", description: "Dict", suggestions: [] },
};
const flag8199: Fig.Option = {
  name: "--network-performance-configs",
  description:
    "Configures network performance settings for the node pool.\nIf this flag is not specified, the pool will be created\nwith its default network performance configuration.\n+\n*total-egress-bandwidth-tier*::: Total egress bandwidth is the available\noutbound bandwidth from a VM, regardless of whether the traffic\nis going to internal IP or external IP destinations.\nThe following tier values are allowed: [TIER_UNSPECIFIED,TIER_1]",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag8262: Fig.Option = {
  name: "--network",
  description:
    "The Compute Engine Network that the cluster will connect to. Google Kubernetes Engine will use this network when creating routes and firewalls for the clusters. Defaults to the 'default' network",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag9051: Fig.Option = {
  name: "--no-content",
  description:
    "If set, Policy content, including the template library and policy bundles, will not be installed",
};
const flag9101: Fig.Option = {
  name: "--no-default-bundles",
  description:
    "If set, skip installing the default bundle of policy-essentials",
};
const flag9580: Fig.Option = {
  name: "--no-exempted-namespaces",
  description: "Removes all exempted namespaces from the specified bundle",
};
const flag9614: Fig.Option = {
  name: "--no-fleet-default-member-config",
  description:
    "Removes the fleet default configuration for policy controller.\n      Memberships configured with the fleet default will maintain their current\n      configuration.\n+\n          $ {command} --no-fleet-default-member-config",
};
const flag9896: Fig.Option = {
  name: "--no-log-denies",
  description: "If set, disable all log denies",
};
const flag9933: Fig.Option = {
  name: "--no-monitoring",
  description:
    "Include this flag to disable the monitoring configuration of Policy Controller",
};
const flag9936: Fig.Option = {
  name: "--no-mutation",
  description: "Disables mutation support",
};
const flag10031: Fig.Option = {
  name: "--no-proxy",
  description: "List of IPs, hostnames, and domains that should skip the proxy",
  args: { name: "NO_PROXY", description: "List", suggestions: [] },
};
const flag10075: Fig.Option = {
  name: "--no-referential-rules",
  description: "Disables referential rules support",
};
const flag10484: Fig.Option = {
  name: "--node-configs",
  description: "Bare Metal Node Pool node configuration",
  args: { name: "NODE_CONFIGS", description: "Dict", suggestions: [] },
};
const flag10494: Fig.Option = {
  name: "--node-creation-mode",
  description:
    "Configures node creation mode for the cluster, either via kubelet or via control plane. _NODE_CREATION_MODE_ must be one of:\n+\n*CONTROL_PLANE*::: registers nodes via control plane; kubelet registration will be\nrejected. This selection will not take effect if you turn off\nShielded Nodes.\n*KUBELET*::: registers nodes via kubelet.\n:::\n+",
  args: {
    name: "NODE_CREATION_MODE",
    description: "String",
    suggestions: ["CONTROL_PLANE", "KUBELET"],
  },
};
const flag10495: Fig.Option = {
  name: "--node-drain-grace-period-seconds",
  description:
    "The grace period in seconds for nodes to drain before being forcefully removed",
  args: {
    name: "NODE_DRAIN_GRACE_PERIOD_SECONDS",
    description: "String",
    suggestions: [],
  },
};
const flag10496: Fig.Option = {
  name: "--node-drain-pdb-timeout-seconds",
  description: "The timeout in seconds for the node pool to be drained",
  args: {
    name: "NODE_DRAIN_PDB_TIMEOUT_SECONDS",
    description: "String",
    suggestions: [],
  },
};
const flag10508: Fig.Option = {
  name: "--node-labels",
  description: "Kubernetes labels (key/value pairs) to be applied to each node",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag10509: Fig.Option = {
  name: "--node-labels",
  description: "Labels assigned to nodes of a node pool",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag10510: Fig.Option = {
  name: "--node-labels",
  description: "Labels assigned to the node pool's nodes",
  args: { name: "NODE_LABEL", description: "Dict", suggestions: [] },
};
const flag10515: Fig.Option = {
  name: "--node-locations",
  description:
    "The set of zones in which the specified node footprint should be replicated.\nAll zones must be in the same region as the cluster's master(s), specified by\nthe `-location`, `--zone`, or `--region` flag. Additionally, for zonal clusters,\n`--node-locations` must contain the cluster's primary zone. If not specified,\nall nodes will be in the cluster's primary zone (for zonal clusters) or spread\nacross three randomly chosen zones within the cluster's region (for regional\nclusters).\n+\nNote that `NUM_NODES` nodes will be created in each zone, such that if you\nspecify `--num-nodes=4` and choose two locations, 8 nodes will be created.\n+\nMultiple locations can be specified, separated by commas. For example:\n+\n  $ {command} example-cluster --location us-central1-a --node-locations us-central1-a,us-central1-b",
  args: { name: "ZONE", description: "List", suggestions: [] },
};
const flag10530: Fig.Option = {
  name: "--node-taints",
  description:
    "Applies the given kubernetes taints on all nodes in the new node pool, which can\nbe used with tolerations for pod scheduling.\n+\nTaint effect must be one of the following: `NoSchedule`, `PreferNoSchedule`, or `NoExecute`.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-taints=key1=val1:NoSchedule,key2=val2:PreferNoSchedule",
  args: { name: "KEY=VALUE:EFFECT", description: "Dict", suggestions: [] },
};
const flag10531: Fig.Option = {
  name: "--node-taints",
  description: "Node taint applied to every Kubernetes node in a node pool",
  args: { name: "KEY=VALUE:EFFECT", description: "Dict", suggestions: [] },
};
const flag10533: Fig.Option = {
  name: "--node-taints",
  description:
    "Taints assigned to nodes of the node pool. Node taint is of format key=value:effect. Effect must be one of: NoExecute, NoSchedule, PreferNoSchedule",
  args: { name: "NODE_TAINT", description: "Dict", suggestions: [] },
};
const flag10541: Fig.Option = {
  name: "--node-version",
  description: "Kubernetes version to use for the node pool",
  args: { name: "NODE_VERSION", description: "String", suggestions: [] },
};
const flag10542: Fig.Option = {
  name: "--node-version",
  description: "Kubernetes version to use for the node pool",
  args: { name: "NODE_VERSION", description: "String", suggestions: [] },
};
const flag10543: Fig.Option = {
  name: "--node-version",
  description: "The GKE version to upgrade the nodes to",
  args: { name: "NODE_VERSION", description: "String", suggestions: [] },
};
const flag10544: Fig.Option = {
  name: "--node-version",
  description:
    "The Kubernetes version to use for nodes. Defaults to server-specified.\n+\nThe default Kubernetes version is available using the following command.\n+\n  $ gcloud container get-server-config",
  args: { name: "NODE_VERSION", description: "String", suggestions: [] },
};
const flag10576: Fig.Option = {
  name: "--notification-config",
  description:
    'The notification configuration of the cluster. GKE supports publishing\ncluster upgrade notifications to any Pub/Sub topic you created in the same\nproject. Create a subscription for the topic specified to receive notification\nmessages. See https://cloud.google.com/pubsub/docs/admin on how to manage\nPub/Sub topics and subscriptions. You can also use the filter option to\nspecify which event types you\'d like to receive from the following options:\nSecurityBulletinEvent, UpgradeEvent, UpgradeInfoEvent, UpgradeAvailableEvent.\n+\nExamples:\n+\n  $ {command} example-cluster --notification-config=pubsub=ENABLED,pubsub-topic=projects/{project}/topics/{topic-name}\n  $ {command} example-cluster --notification-config=pubsub=ENABLED,pubsub-topic=projects/{project}/topics/{topic-name},filter="SecurityBulletinEvent|UpgradeEvent"\n+\nThe project of the Pub/Sub topic must be the same one as the cluster. It can\nbe either the project ID or the project number',
  args: {
    name: "pubsub=ENABLED|DISABLED,pubsub-topic=TOPIC",
    description: "Dict",
    suggestions: [],
  },
};
const flag10776: Fig.Option = {
  name: "--organization",
  description:
    "ID (number) for the organization to list fleets from. If neither --organization nor --project are provided, defaults to the organization of the active project",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag10965: Fig.Option = {
  name: "--origin",
  description:
    "If --origin=FLEET will set the configuration of the membership to\n      the fleet default.\n+\n_ORIGIN_ must be (only one value is supported): *FLEET*",
  args: { name: "ORIGIN", description: "String", suggestions: ["FLEET"] },
};
const flag10969: Fig.Option = {
  name: "--origin",
  description:
    "Applies the fleet-level default membership configuration to a membership. _ORIGIN_ must be (only one value is supported): *fleet*",
  args: { name: "ORIGIN", description: "String", suggestions: ["fleet"] },
};
const flag10970: Fig.Option = {
  name: "--origin",
  description:
    "Changing the origin of the membership. _ORIGIN_ must be (only one value is supported): *fleet*",
  args: { name: "ORIGIN", description: "String", suggestions: ["fleet"] },
};
const flag11009: Fig.Option = {
  name: "--output-path",
  description:
    "The path to save the output to. If not specified, output to the terminal",
  args: { name: "OUTPUT_PATH", description: "String", suggestions: [] },
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
const flag11171: Fig.Option = {
  name: "--password",
  description:
    "The password to use for cluster auth. Defaults to a server-specified randomly-generated string",
  args: { name: "PASSWORD", description: "String", suggestions: [] },
};
const flag11175: Fig.Option = {
  name: "--patch-update",
  description:
    "The patch update to use for the cluster.\n+\nSetting to 'accelerated' automatically upgrades the cluster to the latest patch available within the cluster's current minor version and release channel.\nSetting to 'default' automatically upgrades the cluster to the default patch upgrade targetversion available within the cluster's current minor version and release channel.\n+\n_PATCH_UPDATE_ must be one of: *accelerated*, *default*",
  args: { name: "PATCH_UPDATE", description: "List", suggestions: [] },
};
const flag11249: Fig.Option = {
  name: "--performance-monitoring-unit",
  description:
    "Sets the Performance Monitoring Unit level.\nValid values are `architectural`, `standard` and `enhanced`. _PERFORMANCE_MONITORING_UNIT_ must be one of:\n+\n*architectural*::: Enables architectural PMU events tied to non last level cache (LLC) events.\n*enhanced*::: Enables most documented core/L2 and LLC PMU events.\n*standard*::: Enables most documented core/L2 PMU events.\n:::\n+",
  args: {
    name: "PERFORMANCE_MONITORING_UNIT",
    description: "String",
    suggestions: ["architectural", "enhanced", "standard"],
  },
};
const flag11305: Fig.Option = {
  name: "--placement-policy",
  description:
    "Indicates the desired resource policy to use.\n+\n$ {command} node-pool-1 --cluster=example-cluster --placement-policy my-placement",
  args: { name: "PLACEMENT_POLICY", description: "String", suggestions: [] },
};
const flag11319: Fig.Option = {
  name: "--platform-version",
  description:
    "Platform version to use for the cluster.\n+\nTo retrieve a list of valid versions, run:\n+\n  $ gcloud alpha container attached get-server-config --location=LOCATION\n+\nReplace ``LOCATION'' with the target Google Cloud location for the cluster",
  args: { name: "PLATFORM_VERSION", description: "String", suggestions: [] },
};
const flag11331: Fig.Option = {
  name: "--pod-address-cidr-blocks",
  description:
    "IP address range for the pods in this cluster in CIDR notation (e.g. 10.0.0.0/8)",
  args: {
    name: "POD_ADDRESS_CIDR_BLOCKS",
    description: "String",
    suggestions: [],
  },
};
const flag11586: Fig.Option = {
  name: "--private-endpoint-subnetwork",
  description:
    "Sets the subnetwork GKE uses to provision the control plane's\nprivate endpoint",
  args: { name: "NAME", description: "String", suggestions: [] },
};
const flag11587: Fig.Option = {
  name: "--private-endpoint",
  description: "If set, use private VPC for authentication",
};
const flag11592: Fig.Option = {
  name: "--private-ipv6-google-access-type",
  description:
    "Sets the type of private access to Google services over IPv6.\n+\nPRIVATE_IPV6_GOOGLE_ACCESS_TYPE must be one of:\n+\n  bidirectional\n    Allows Google services to initiate connections to GKE pods in this\n    cluster. This is not intended for common use, and requires previous\n    integration with Google services.\n+\n  disabled\n    Default value. Disables private access to Google services over IPv6.\n+\n  outbound-only\n    Allows GKE pods to make fast, secure requests to Google services\n    over IPv6. This is the most common use of private IPv6 access.\n+\n  $ gcloud alpha container clusters create       --private-ipv6-google-access-type=disabled\n  $ gcloud alpha container clusters create       --private-ipv6-google-access-type=outbound-only\n  $ gcloud alpha container clusters create       --private-ipv6-google-access-type=bidirectional\n+\n_PRIVATE_IPV6_GOOGLE_ACCESS_TYPE_ must be one of: *bidirectional*, *disabled*, *outbound-only*",
  args: {
    name: "PRIVATE_IPV6_GOOGLE_ACCESS_TYPE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["bidirectional", "disabled", "outbound-only"],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11813: Fig.Option = {
  name: "--proxy-resource-group-id",
  description: "The ARM ID the of the resource group containing proxy keyvault",
  args: {
    name: "PROXY_RESOURCE_GROUP_ID",
    description: "String",
    suggestions: [],
  },
};
const flag11814: Fig.Option = {
  name: "--proxy-secret-arn",
  description:
    "ARN of the AWS Secrets Manager secret that contains a proxy configuration",
  args: { name: "PROXY_SECRET_ARN", description: "String", suggestions: [] },
};
const flag11815: Fig.Option = {
  name: "--proxy-secret-arn",
  description:
    "ARN of the AWS Secrets Manager secret that contains a proxy configuration",
  args: { name: "PROXY_SECRET_ARN", description: "String", suggestions: [] },
};
const flag11816: Fig.Option = {
  name: "--proxy-secret-id",
  description: "The URL the of the proxy setting secret with its version",
  args: { name: "PROXY_SECRET_ID", description: "String", suggestions: [] },
};
const flag11817: Fig.Option = {
  name: "--proxy-secret-name",
  description:
    "Name of the Kubernetes secret that contains the HTTP/HTTPS\nproxy configuration",
  args: { name: "PROXY_SECRET_NAME", description: "String", suggestions: [] },
};
const flag11818: Fig.Option = {
  name: "--proxy-secret-namespace",
  description:
    "Namespace of the Kubernetes secret that contains the HTTP/HTTPS\nproxy configuration",
  args: {
    name: "PROXY_SECRET_NAMESPACE",
    description: "String",
    suggestions: [],
  },
};
const flag11819: Fig.Option = {
  name: "--proxy-secret-version-id",
  description:
    "Version ID string of the AWS Secrets Manager secret that contains a proxy configuration",
  args: {
    name: "PROXY_SECRET_VERSION_ID",
    description: "String",
    suggestions: [],
  },
};
const flag11820: Fig.Option = {
  name: "--proxy-secret-version-id",
  description:
    "Version ID string of the AWS Secrets Manager secret that contains a proxy configuration",
  args: {
    name: "PROXY_SECRET_VERSION_ID",
    description: "String",
    suggestions: [],
  },
};
const flag11822: Fig.Option = {
  name: "--proxy",
  description:
    "The proxy address in the format of http[s]://{hostname}. The proxy\nmust support the HTTP CONNECT method in order for this connection to\nsucceed",
  args: { name: "PROXY", description: "String", suggestions: [] },
};
const flag11853: Fig.Option = {
  name: "--public-issuer-url",
  description:
    "Skip auto-discovery and register the cluster with this issuer URL.\nUse this option when the OpenID Provider Configuration and associated\nJSON Web Key Set for validating the cluster's service account JWTs\nare served at a public endpoint different from the cluster API server.\nRequires --enable-workload-identity",
  args: { name: "PUBLIC_ISSUER_URL", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag11977: Fig.Option = {
  name: "--rbac-output-file",
  description:
    "If specified, the generated RBAC policy will be written to the\ndesignated local file",
  args: { name: "RBAC_OUTPUT_FILE", description: "String", suggestions: [] },
};
const flag11978: Fig.Option = {
  name: "--rbac-output-file",
  description:
    "If specified, this command will execute in dry run mode and write to\nthe file specified with this flag: the generated RBAC policy will not\nbe applied to Kubernetes clusters,instead it will be written to the\ndesignated local file",
  args: { name: "RBAC_OUTPUT_FILE", description: "String", suggestions: [] },
};
const flag12008: Fig.Option = {
  name: "--reason",
  description: "Reason for aborting rollout",
  args: { name: "REASON", description: "String", suggestions: [] },
};
const flag12011: Fig.Option = {
  name: "--reason",
  description: "Reason for resuming rollout",
  args: { name: "REASON", description: "String", suggestions: [] },
};
const flag12013: Fig.Option = {
  name: "--reason",
  description: "Reason for suspending rollout",
  args: { name: "REASON", description: "String", suggestions: [] },
};
const flag12066: Fig.Option = {
  name: "--referential-rules",
  description:
    "If set, enable support for referential constraints. (To disable, use --no-referential-rules)",
};
const flag12297: Fig.Option = {
  name: "--region",
  description:
    "Compute region (e.g. us-central1) for a regional cluster. Overrides the default compute/region property value for this command invocation",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12476: Fig.Option = {
  name: "--registry-burst",
  description:
    "Maximum size of bursty pulls, temporarily allow pulls to burst to this number, while still not exceeding registry_pull_qps",
  args: { name: "REGISTRY_BURST", description: "Int", suggestions: [] },
};
const flag12477: Fig.Option = {
  name: "--registry-pull-qps",
  description: "Limit of registry pulls per second",
  args: { name: "REGISTRY_PULL_QPS", description: "Int", suggestions: [] },
};
const flag12542: Fig.Option = {
  name: "--remove-allowed-custom-role",
  description: "Remove a single custom role from the allowed custom roles list",
  args: {
    name: "REMOVE_ALLOWED_CUSTOM_ROLE",
    description: "String",
    suggestions: [],
  },
};
const flag12546: Fig.Option = {
  name: "--remove-annotations",
  description: "Remove annotations of the given keys",
  args: { name: "KEY1,KEY2", description: "List", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12666: Fig.Option = {
  name: "--remove-namespace-labels",
  description:
    "List of namespace-level label keys to remove in the cluster namespace. If a label does not exist it is\nsilently ignored. If `--update-namespace-labels` is also specified then\n`--update-namespace-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12667: Fig.Option = {
  name: "--remove-namespace-labels",
  description:
    "List of scope-level label keys to remove in the cluster namespace. If a label does not exist it is\nsilently ignored. If `--update-namespace-labels` is also specified then\n`--update-namespace-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12748: Fig.Option = {
  name: "--remove-upgrade-soaking-overrides",
  description:
    "Removes soaking time overrides for all upgrades propagating through the\ncurrent fleet. Consequently, all upgrades will follow the soak time\nconfigured by `--default-upgrade-soaking` until new overrides are\nconfigured with `--add_upgrade_soaking_override` and\n`--upgrade_selector`.\n+\nTo remove all configured soaking time overrides, run:\n+\n  $ {command} --remove-upgrade-soaking-overrides",
};
const flag12749: Fig.Option = {
  name: "--remove-upgrade-soaking-overrides",
  description:
    "Removes soaking time overrides for all upgrades propagating through the current\nscope. Consequently, all upgrades will follow the soak time configured by\n`--default-upgrade-soaking` until new overrides are configured with\n`--add_upgrade_soaking_override` and `--upgrade_selector`.\n+\nTo remove all soaking time overrides configured for ``SCOPE_NAME'', run:\n+\n  $ {command} SCOPE_NAME --remove-upgrade-soaking-overrides",
};
const flag12782: Fig.Option = {
  name: "--replicas",
  description: "Number of replicas to use on node pool instances",
  args: { name: "REPLICAS", description: "Int", suggestions: [] },
};
const flag12929: Fig.Option = {
  name: "--reservation",
  description:
    "The name of the reservation, required when `--reservation-affinity=specific`",
  args: { name: "RESERVATION", description: "String", suggestions: [] },
};
const flag12943: Fig.Option = {
  name: "--reset-upstream-fleet",
  description:
    "Clears the relationship between the current fleet and its upstream\nfleet in the rollout sequence.\n+\nTo remove the link between the current fleet and its upstream fleet,\nrun:\n+\n  $ {command} --reset-upstream-fleet",
};
const flag12944: Fig.Option = {
  name: "--reset-upstream-scope",
  description:
    "Clears the relationship between the current scope and its upstream scope in the\nrollout sequence.\n+\nTo remove the link between ``SCOPE_NAME'' and its upstream scope, run:\n+\n  $ {command} SCOPE_NAME --reset-upstream-scope",
};
const flag12954: Fig.Option = {
  name: "--resource-bundle",
  description: "Resource Bundle name",
  args: { name: "RESOURCE_BUNDLE", description: "String", suggestions: [] },
};
const flag13031: Fig.Option = {
  name: "--resource-usage-bigquery-dataset",
  description:
    "The name of the BigQuery dataset to which the cluster's usage of cloud\nresources is exported. A table will be created in the specified dataset to\nstore cluster resource usage. The resulting table can be joined with BigQuery\nBilling Export to produce a fine-grained cost breakdown.\n+\nExamples:\n+\n  $ {command} example-cluster --resource-usage-bigquery-dataset=example_bigquery_dataset_name",
  args: {
    name: "RESOURCE_USAGE_BIGQUERY_DATASET",
    description: "String",
    suggestions: [],
  },
};
const flag13043: Fig.Option = {
  name: "--respect-pdb-during-node-pool-deletion",
  description: "Whether to respect PDBs when deleting nodes in the node pool",
};
const flag13121: Fig.Option = {
  name: "--revoke",
  description:
    "If specified, this command will revoke the RBAC policy for the\nspecified users",
};
const flag13127: Fig.Option = {
  name: "--role-session-name",
  description: "Identifier for the assumed role session",
  args: { name: "ROLE_SESSION_NAME", description: "String", suggestions: [] },
};
const flag13131: Fig.Option = {
  name: "--role",
  description: "Namespace scoped role or cluster role",
  args: { name: "ROLE", description: "String", suggestions: [] },
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
const flag13139: Fig.Option = {
  name: "--role",
  description:
    "Predefined role to assign to principal (admin, edit, view). _ROLE_ must be one of: *admin*, *edit*, *view*",
  args: {
    name: "ROLE",
    description: "String",
    suggestions: ["admin", "edit", "view"],
  },
};
const flag13161: Fig.Option = {
  name: "--root-volume-iops",
  description:
    "Number of I/O operations per second (IOPS) to provision for the root volume",
  args: { name: "ROOT_VOLUME_IOPS", description: "Int", suggestions: [] },
};
const flag13162: Fig.Option = {
  name: "--root-volume-kms-key-arn",
  description:
    "Amazon Resource Name (ARN) of the AWS KMS key to encrypt the root volume",
  args: {
    name: "ROOT_VOLUME_KMS_KEY_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag13163: Fig.Option = {
  name: "--root-volume-size",
  description:
    "Size of the root volume. The value must be a whole number followed by a size unit of `GB` for gigabyte, or `TB` for terabyte. If no size unit is specified, GB is assumed",
  args: {
    name: "ROOT_VOLUME_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag13164: Fig.Option = {
  name: "--root-volume-throughput",
  description:
    "Throughput to provision for the root volume, in MiB/s. Only valid if the volume type is GP3. If volume type is GP3 and throughput is not provided, it defaults to 125",
  args: { name: "ROOT_VOLUME_THROUGHPUT", description: "Int", suggestions: [] },
};
const flag13165: Fig.Option = {
  name: "--root-volume-type",
  description:
    "Type of the root volume. _ROOT_VOLUME_TYPE_ must be one of: *gp2*, *gp3*",
  args: {
    name: "ROOT_VOLUME_TYPE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["gp2", "gp3"],
  },
};
const flag13296: Fig.Option = {
  name: "--schedule-offset",
  description:
    "Offset to shift the schedule by when resuming a paused rollout, e.g. `8h`, `7d12h`.\n+\nSee $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "SCHEDULE_OFFSET",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag13341: Fig.Option = {
  name: "--scope",
  description:
    "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `--scope` on the command line",
  args: { name: "SCOPE", description: "String", suggestions: [] },
};
const flag13342: Fig.Option = {
  name: "--scope",
  description: "Name of the fleet scope to list RBAC RoleBindings from",
  args: { name: "SCOPE", description: "String", suggestions: [] },
};
const flag13343: Fig.Option = {
  name: "--scope",
  description:
    "Name of the rbacrolebinding.\n+\nTo set the `scope` attribute:\n* provide the argument `NAME` on the command line with a fully specified name;\n* provide the argument `--scope` on the command line",
  args: { name: "SCOPE", description: "String", suggestions: [] },
};
const flag13353: Fig.Option = {
  name: "--scope",
  description:
    "the\n+\nTo set the `scope` attribute:\n* provide the argument `NAMESPACE` on the command line with a fully specified name;\n* provide the argument `--scope` on the command line",
  args: { name: "SCOPE", description: "String", suggestions: [] },
};
const flag13372: Fig.Option = {
  name: "--scopes",
  description:
    "Specifies scopes for the node instances.\n+\nExamples:\n+\n  $ {command} example-cluster --scopes=https://www.googleapis.com/auth/devstorage.read_only\n+\n  $ {command} example-cluster --scopes=bigquery,storage-rw,compute-ro\n+\nMultiple scopes can be specified, separated by commas. Various scopes are\nautomatically added based on feature usage. Such scopes are not added if an\nequivalent scope already exists.\n+\n- `monitoring-write`: always added to ensure metrics can be written\n- `logging-write`: added if Cloud Logging is enabled\n  (`--enable-cloud-logging`/`--logging`)\n- `monitoring`: added if Cloud Monitoring is enabled\n  (`--enable-cloud-monitoring`/`--monitoring`)\n- `gke-default`: added for Autopilot clusters that use the default service\n  account\n- `cloud-platform`: added for Autopilot clusters that use any other service\n  account\n+\nSCOPE can be either the full URI of the scope or an alias. *Default* scopes are\nassigned to all instances. Available aliases are:\n+\nAlias | URI\n--- | ---\nbigquery | https://www.googleapis.com/auth/bigquery\ncloud-platform | https://www.googleapis.com/auth/cloud-platform\ncloud-source-repos | https://www.googleapis.com/auth/source.full_control\ncloud-source-repos-ro | https://www.googleapis.com/auth/source.read_only\ncompute-ro | https://www.googleapis.com/auth/compute.readonly\ncompute-rw | https://www.googleapis.com/auth/compute\ndatastore | https://www.googleapis.com/auth/datastore\ndefault | https://www.googleapis.com/auth/devstorage.read_only\n| https://www.googleapis.com/auth/logging.write\n| https://www.googleapis.com/auth/monitoring.write\n| https://www.googleapis.com/auth/pubsub\n| https://www.googleapis.com/auth/service.management.readonly\n| https://www.googleapis.com/auth/servicecontrol\n| https://www.googleapis.com/auth/trace.append\ngke-default | https://www.googleapis.com/auth/devstorage.read_only\n| https://www.googleapis.com/auth/logging.write\n| https://www.googleapis.com/auth/monitoring\n| https://www.googleapis.com/auth/service.management.readonly\n| https://www.googleapis.com/auth/servicecontrol\n| https://www.googleapis.com/auth/trace.append\nlogging-write | https://www.googleapis.com/auth/logging.write\nmonitoring | https://www.googleapis.com/auth/monitoring\nmonitoring-read | https://www.googleapis.com/auth/monitoring.read\nmonitoring-write | https://www.googleapis.com/auth/monitoring.write\npubsub | https://www.googleapis.com/auth/pubsub\nservice-control | https://www.googleapis.com/auth/servicecontrol\nservice-management | https://www.googleapis.com/auth/service.management.readonly\nsql (deprecated) | https://www.googleapis.com/auth/sqlservice\nsql-admin | https://www.googleapis.com/auth/sqlservice.admin\nstorage-full | https://www.googleapis.com/auth/devstorage.full_control\nstorage-ro | https://www.googleapis.com/auth/devstorage.read_only\nstorage-rw | https://www.googleapis.com/auth/devstorage.read_write\ntaskqueue | https://www.googleapis.com/auth/taskqueue\ntrace | https://www.googleapis.com/auth/trace.append\nuserinfo-email | https://www.googleapis.com/auth/userinfo.email\n+\nDEPRECATION WARNING: https://www.googleapis.com/auth/sqlservice account scope\nand `sql` alias do not provide SQL instance management capabilities and have\nbeen deprecated. Please, use https://www.googleapis.com/auth/sqlservice.admin\nor `sql-admin` to manage your Google SQL Service instances",
  args: { name: "SCOPE", description: "List", suggestions: [] },
};
const flag13410: Fig.Option = {
  name: "--secret-manager-rotation-interval",
  description:
    "Set the rotation period for secrets in the Secret Manager CSI driver\nprovider component. If you don't specify a time interval for the rotation, it will default to a rotation period of two minutes",
  args: {
    name: "SECRET_MANAGER_ROTATION_INTERVAL",
    description: "String",
    suggestions: [],
  },
};
const flag13411: Fig.Option = {
  name: "--secret-sync-rotation-interval",
  description:
    "Set the rotation period for secrets in the Secret Sync component",
  args: {
    name: "SECRET_SYNC_ROTATION_INTERVAL",
    description: "String",
    suggestions: [],
  },
};
const flag13428: Fig.Option = {
  name: "--security-group-ids",
  description:
    "IDs of additional security groups to add to the control plane's nodes",
  args: { name: "SECURITY_GROUP_ID", description: "List", suggestions: [] },
};
const flag13429: Fig.Option = {
  name: "--security-group-ids",
  description:
    "IDs of additional security groups to add to the node pool's nodes",
  args: { name: "SECURITY_GROUP_ID", description: "List", suggestions: [] },
};
const flag13430: Fig.Option = {
  name: "--security-group",
  description:
    "The name of the RBAC security group for use with Google security groups\nin Kubernetes RBAC\n(https://kubernetes.io/docs/reference/access-authn-authz/rbac/).\n+\nTo include group membership as part of the claims issued by Google\nduring authentication, a group must be designated as a security group by\nincluding it as a direct member of this group.\n+\nIf unspecified, no groups will be returned for use with RBAC",
  args: { name: "SECURITY_GROUP", description: "String", suggestions: [] },
};
const flag13448: Fig.Option = {
  name: "--security-posture",
  description:
    "Sets the mode of the Kubernetes security posture API's off-cluster features.\n+\nTo enable advanced mode explicitly set the flag to\n`--security-posture=enterprise`.\n+\nTo enable in standard mode explicitly set the flag to\n`--security-posture=standard`\n+\nTo disable in an existing cluster, explicitly set the flag to\n`--security-posture=disabled`.\n+\nFor more information on enablement, see https://cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard#feature-enablement.\n+\n_SECURITY_POSTURE_ must be one of: *disabled*, *standard*, *enterprise*",
  args: {
    name: "SECURITY_POSTURE",
    description: "String",
    suggestions: ["disabled", "standard", "enterprise"],
  },
};
const flag13449: Fig.Option = {
  name: "--security-posture",
  description:
    "To apply standard security posture to clusters in the fleet,\n+\n  $ {command} --security-posture=standard\n+\n_SECURITY_POSTURE_ must be one of: *disabled*, *standard*, *enterprise*",
  args: {
    name: "SECURITY_POSTURE",
    description: "String",
    suggestions: ["disabled", "standard", "enterprise"],
  },
};
const flag13499: Fig.Option = {
  name: "--service-account-key-file",
  description:
    "The JSON file of a Google Cloud service account private key. This\nservice account key is stored as a secret named ``creds-gcp'' in\ngke-connect namespace. To update the ``creds-gcp'' secret in\ngke-connect namespace with a new service account key file, run the\nfollowing command:\n+\nkubectl delete secret creds-gcp -n gke-connect\n+\nkubectl create secret generic creds-gcp -n gke-connect --from-file=creds-gcp.json=/path/to/file",
  args: {
    name: "SERVICE_ACCOUNT_KEY_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag13502: Fig.Option = {
  name: "--service-account-signing-keys",
  description:
    "A Cloud KMS asymmetric signing cryptoKeyVersion that will be used to sign service account tokens",
  args: { name: "KEY_VERSION", description: "List", suggestions: [] },
};
const flag13505: Fig.Option = {
  name: "--service-account-verification-keys",
  description:
    "A Cloud KMS asymmetric signing cryptoKeyVersion that will be used to verify service account tokens.  Maybe specified multiple times",
  args: { name: "KEY_VERSION", description: "List", suggestions: [] },
};
const flag13522: Fig.Option = {
  name: "--service-account",
  description:
    "The Google Cloud Platform Service Account to be used by the node VMs. If a service account is specified, the cloud-platform and userinfo.email scopes are used. If no Service Account is specified, the project default service account is used",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13551: Fig.Option = {
  name: "--service-address-cidr-blocks",
  description:
    "IP address range for the services IPs in CIDR notation (e.g. 10.0.0.0/8)",
  args: {
    name: "SERVICE_ADDRESS_CIDR_BLOCKS",
    description: "String",
    suggestions: [],
  },
};
const flag13653: Fig.Option = {
  name: "--serving-stack-version",
  description:
    "The serving stack version. If omitted, the most recently benchmarked version is used. Other options include the serving stack version of a profile, or 'all' to return all versions",
  args: {
    name: "SERVING_STACK_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag13694: Fig.Option = {
  name: "--set-namespace-in-config",
  description:
    "If true, the default namespace for the context in the generated\nkubeconfig will be set to the Fleet namespace\n(i.e. the name given as the positional argument in this command).\n+\nOtherwise, no default namespace will be set, functioning the same as\n`gcloud container fleet memberships get-credentials`",
  args: {
    name: "SET_NAMESPACE_IN_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag13733: Fig.Option = {
  name: "--shared-path-pv-count",
  description: "Number of subdirectories to create under path",
  args: {
    name: "SHARED_PATH_PV_COUNT",
    description: "String",
    suggestions: [],
  },
};
const flag13748: Fig.Option = {
  name: "--shielded-integrity-monitoring",
  description:
    "Enables monitoring and attestation of the boot integrity of the\ninstance. The attestation is performed against the integrity policy\nbaseline. This baseline is initially derived from the implicitly\ntrusted boot image when the instance is created",
};
const flag13757: Fig.Option = {
  name: "--shielded-secure-boot",
  description: "The instance will boot with secure boot enabled",
};
const flag13769: Fig.Option = {
  name: "--show-cluster-status",
  description: "Show more information about the Fleet Package",
};
const flag13787: Fig.Option = {
  name: "--show-linked-cluster-upgrade",
  description:
    "Shows the cluster upgrade feature information for the current fleet as\nwell as information for all other fleets linked in the same rollout\nsequence (provided that the caller has permission to view the upstream\nand downstream fleets). This displays cluster upgrade information for\nfleets in the current fleet's rollout sequence in order of furthest\nupstream to downstream.\n+\nTo view the cluster upgrade feature information for the rollout\nsequence containing the current fleet, run:\n+\n  $ {command} --show-linked-cluster-upgrade",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14152: Fig.Option = {
  name: "--source",
  description: "Source file containing Fleet Package configuration",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14153: Fig.Option = {
  name: "--source",
  description:
    "Source file or directory to create the Release from.\n          e.g. ``--source=manifest.yaml'', ``--source=/manifests-dir/'',\n          ``--source=/manifests-dir/*.yaml''",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14290: Fig.Option = {
  name: "--ssh-ec2-key-pair",
  description:
    "Name of the EC2 key pair authorized to login to the control plane's nodes",
  args: { name: "SSH_EC2_KEY_PAIR", description: "String", suggestions: [] },
};
const flag14291: Fig.Option = {
  name: "--ssh-ec2-key-pair",
  description:
    "Name of the EC2 key pair authorized to login to the node pool's nodes",
  args: { name: "SSH_EC2_KEY_PAIR", description: "String", suggestions: [] },
};
const flag14301: Fig.Option = {
  name: "--ssh-public-key",
  description: "SSH public key to use for authentication",
  args: { name: "SSH_PUBLIC_KEY", description: "String", suggestions: [] },
};
const flag14302: Fig.Option = {
  name: "--ssh-public-key",
  description: "SSH public key to use for authentication",
  args: { name: "SSH_PUBLIC_KEY", description: "String", suggestions: [] },
};
const flag14331: Fig.Option = {
  name: "--stack-type",
  description:
    "IP stack type of the cluster nodes. _STACK_TYPE_ must be one of: *ipv4*, *ipv4-ipv6*",
  args: {
    name: "STACK_TYPE",
    description: "String",
    suggestions: ["ipv4", "ipv4-ipv6"],
  },
};
const flag14340: Fig.Option = {
  name: "--stage-config",
  description:
    "Path to the YAML file containing the stage configurations. The YAML\nfile should contain a list of stages. Fleet projects and soak_duration are required.\nIf label_selector is not specified, there is no filtering.\nA fleet project is the project where the fleet is hosted.\nExample:\n+\n```yaml\n- stage:\n  fleet-projects:\n  # Expected format: projects/{project}\n  - projects/my-dev-project\n  soak-duration: 7d # Or 168h or 604800s\n- stage:\n  fleet-projects:\n  - projects/my-prod-project\n  soak-duration: 3600s\n  label-selector: resource.labels.canary=='true'\n- stage:\n  fleet-projects:\n  # Expected format: projects/{project}\n  - projects/my-prod-project\n  soak-duration: 30m\n  ```\n+\nUse a full or relative path to a local file containing the value of stage_config",
  args: {
    name: "STAGE_CONFIG",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag14341: Fig.Option = {
  name: "--stage-config",
  description:
    "Path to the YAML file containing the stage configurations. The YAML\nfile should contain a list of stages. Fleet projects and soak_duration are required.\nIf label_selector is not specified, there is no filtering.\nA fleet project is the project where the fleet is hosted.\nExample:\n+\n```yaml\n- stage:\n  fleet-projects:\n  # Expected format: projects/{project}\n  - projects/my-dev-project\n  soak-duration: 7d # Or 168h or 604800s\n- stage:\n  fleet-projects:\n  - projects/my-prod-project\n  soak-duration: 3600s\n  label-selector: resource.labels.canary=='true'\n- stage:\n  fleet-projects:\n  # Expected format: projects/{project}\n  - projects/my-prod-project\n  soak-duration: 30m\n  ```\n+\nUse a full or relative path to a local file containing the value of stage_config",
  args: {
    name: "STAGE_CONFIG",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag14342: Fig.Option = {
  name: "--stage",
  description:
    "The number of the rollout stage to force-complete. The stage must\nbe the current active stage of the rollout",
  args: { name: "STAGE", description: "Int", suggestions: [] },
};
const flag14419: Fig.Option = {
  name: "--static-ip-config-ip-blocks",
  description:
    "Static IP configurations.\n+\nExpect an individual IP address, an individual IP address with an optional hostname, or a CIDR block.\n+\nExample:\n+\nTo specify two Static IP blocks,\n+\n```\n$ gcloud {command}\n    --static-ip-config-ip-blocks 'gateway=192.168.0.1,netmask=255.255.255.0,ips=192.168.1.1;0.0.0.0 localhost;192.168.1.2/16'\n    --static-ip-config-ip-blocks 'gateway=192.168.1.1,netmask=255.255.0.0,ips=8.8.8.8;4.4.4.4'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
  args: {
    name: "STATIC_IP_CONFIG_IP_BLOCKS",
    description: "Dict",
    suggestions: [],
  },
};
const flag14493: Fig.Option = {
  name: "--subnet-id",
  description: "Subnet ID of an existing VNET to use for the node pool",
  args: { name: "SUBNET_ID", description: "String", suggestions: [] },
};
const flag14542: Fig.Option = {
  name: "--subnetwork",
  description:
    'The Google Compute Engine subnetwork\n(https://cloud.google.com/compute/docs/subnetworks) to which the cluster is\nconnected. The subnetwork must belong to the network specified by --network.\n+\nCannot be used with the "--create-subnetwork" option',
  args: { name: "SUBNETWORK", description: "String", suggestions: [] },
};
const flag14588: Fig.Option = {
  name: "--system-config-from-file",
  description:
    "Path of the YAML/JSON file that contains the node configuration, including\nLinux kernel parameters (sysctls) and kubelet configs. For more information\nabout the configuration options, such as supported machine series and limits,\nsee [Customize node system config](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/node-system-config#kubelet-options).\n+\nExamples:\n+\n    kubeletConfig:\n      cpuManagerPolicy: static\n      memoryManager:\n        policy: Static\n      topologyManager:\n        policy: BestEffort\n        scope: pod\n      crashLoopBackOff:\n        maxContainerRestartPeriod: '300s'\n    linuxConfig:\n      accurateTimeConfig:\n        enablePtpKvmTimeSync: true\n      sysctl:\n        net.core.somaxconn: '2048'\n        net.ipv4.tcp_rmem: '4096 87380 6291456'\n      hugepageConfig:\n        hugepage_size2m: '1024'\n        hugepage_size1g: '2'\n      swapConfig:\n        enabled: true\n        bootDiskProfile:\n          swapSizeGib: 8\n      cgroupMode: 'CGROUP_MODE_V2'\n      nodeKernelModuleLoading:\n        policy: 'ENFORCE_SIGNED_MODULES'\n+\nList of supported kubelet configs in 'kubeletConfig'.\n+\nKEY                                    | VALUE\n-------------------------------------- | ------------------------------------------------------------------------------------------\ncpuManagerPolicy                       | either 'static' or 'none'\ncpuCFSQuota                            | true or false (enabled by default)\ncpuCFSQuotaPeriod                      | interval (e.g., '100ms'. The value must be between 1ms and 1 second, inclusive.)\nmemoryManager                          | specify memory manager policy\ntopologyManager                        | specify topology manager policy and scope\npodPidsLimit                           | integer (The value must be greater than or equal to 1024 and less than 4194304.)\ncontainerLogMaxSize                    | positive number plus unit suffix (e.g., '100Mi', '0.2Gi'. The value must be between 10Mi and 500Mi, inclusive.)\ncontainerLogMaxFiles                   | integer (The value must be between [2, 10].)\nimageGcLowThresholdPercent             | integer (The value must be between [10, 85], and lower than imageGcHighThresholdPercent.)\nimageGcHighThresholdPercent            | integer (The value must be between [10, 85], and greater than imageGcLowThresholdPercent.)\nimageMinimumGcAge                      | interval (e.g., '100s', '1m'. The value must be less than '2m'.)\nimageMaximumGcAge                      | interval (e.g., '100s', '1m'. The value must be greater than imageMinimumGcAge.)\nevictionSoft                           | specify eviction soft thresholds\nevictionSoftGracePeriod                | specify eviction soft grace period\nevictionMinimumReclaim                 | specify eviction minimum reclaim thresholds\nevictionMaxPodGracePeriodSeconds       | integer (Max grace period for pod termination during eviction, in seconds. The value must be between [0, 300].)\nshutdownGracePeriodSeconds             | integer (Grace period for pods terminating on node shutdown, in seconds. Allowed values: 0, 30, 120.)\nshutdownGracePeriodCriticalPodsSeconds | integer (Grace period for critical pods terminating on node shutdown, in seconds. The value must be between [0, 120] and less than shutdownGracePeriodSeconds.)\nallowedUnsafeSysctls                   | list of sysctls (Allowlisted groups: 'kernel.shm*', 'kernel.msg*', 'kernel.sem', 'fs.mqueue.*', and 'net.*', and sysctls under the groups.)\nsingleProcessOomKill                   | true or false\nmaxParallelImagePulls                  | integer (The value must be between [2, 5].)\ncrashLoopBackOff                       | specify crashloopbackoff thresholds\n+\n\nList of supported keys in memoryManager in 'kubeletConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\npolicy                                     | either 'Static' or 'None'\n+\nList of supported keys in topologyManager in 'kubeletConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\npolicy                                     | either 'none' or 'best-effort' or 'single-numa-node' or 'restricted'\nscope                                      | either 'pod' or 'container'\n+\nList of supported keys in evictionSoft in 'kubeletConfig'.\n+\nKEY                       | VALUE\n------------------------- | ---------------------------------------------------------------------------------------------\nmemoryAvailable           | quantity (e.g., '100Mi', '1Gi'. Represents the amount of memory available before soft eviction. The value must be at least 100Mi and less than 50% of the node's memory.)\nnodefsAvailable           | percentage (e.g., '20%'. Represents the nodefs available before soft eviction. The value must be between 10% and 50%, inclusive.)\nnodefsInodesFree          | percentage (e.g., '20%'. Represents the nodefs inodes free before soft eviction. The value must be between 5% and 50%, inclusive.)\nimagefsAvailable          | percentage (e.g., '20%'. Represents the imagefs available before soft eviction. The value must be between 15% and 50%, inclusive.)\nimagefsInodesFree         | percentage (e.g., '20%'. Represents the imagefs inodes free before soft eviction. The value must be between 5% and 50%, inclusive.)\npidAvailable              | percentage (e.g., '20%'. Represents the pid available before soft eviction. The value must be between 10% and 50%, inclusive.)\n+\nList of supported keys in evictionSoftGracePeriod in 'kubeletConfig'.\n+\nKEY                       | VALUE\n------------------------- | ---------------------------------------------------------------------------------------------\nmemoryAvailable           | duration (e.g., '30s', '1m'. The grace period for soft eviction for this resource. The value must be positive and no more than '5m'.)\nnodefsAvailable           | duration (e.g., '30s', '1m'. The grace period for soft eviction for this resource. The value must be positive and no more than '5m'.)\nnodefsInodesFree          | duration (e.g., '30s', '1m'. The grace period for soft eviction for this resource. The value must be positive and no more than '5m'.)\nimagefsAvailable          | duration (e.g., '30s', '1m'. The grace period for soft eviction for this resource. The value must be positive and no more than '5m'.)\nimagefsInodesFree         | duration (e.g., '30s', '1m'. The grace period for soft eviction for this resource. The value must be positive and no more than '5m'.)\npidAvailable              | duration (e.g., '30s', '1m'. The grace period for soft eviction for this resource. The value must be positive and no more than '5m'.)\n+\nList of supported keys in evictionMinimumReclaim in 'kubeletConfig'.\n+\nKEY                       | VALUE\n------------------------- | ---------------------------------------------------------------------------------------------\nmemoryAvailable           | percentage (e.g., '5%'. Represents the minimum reclaim threshold for memory available. The value must be positive and no more than 10%.)\nnodefsAvailable           | percentage (e.g., '5%'. Represents the minimum reclaim threshold for nodefs available. The value must be positive and no more than 10%.)\nnodefsInodesFree          | percentage (e.g., '5%'. Represents the minimum reclaim threshold for nodefs inodes free. The value must be positive and no more than 10%.)\nimagefsAvailable          | percentage (e.g., '5%'. Represents the minimum reclaim threshold for imagefs available. The value must be positive and no more than 10%.)\nimagefsInodesFree         | percentage (e.g., '5%'. Represents the minimum reclaim threshold for imagefs inodes free. The value must be positive and no more than 10%.)\npidAvailable              | percentage (e.g., '5%'. Represents the minimum reclaim threshold for pid available. The value must be positive and no more than 10%.)\n+\nList of supported keys in crashLoopBackOff in 'kubeletConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\nmaxContainerRestartPeriod                  | duration (e.g., '30s', '1m'. The maximum duration the backoff delay can accrue to for container restarts. The value must be between [1s, 300s].)\n+\nList of supported sysctls in 'linuxConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\nnet.core.netdev_max_backlog                        | Any positive integer, less than 2147483647\nnet.core.rmem_default                              | Must be between [2304, 2147483647]\nnet.core.rmem_max                                  | Must be between [2304, 2147483647]\nnet.core.wmem_default                              | Must be between [4608, 2147483647]\nnet.core.wmem_max                                  | Must be between [4608, 2147483647]\nnet.core.optmem_max                                | Any positive integer, less than 2147483647\nnet.core.somaxconn                                 | Must be between [128, 2147483647]\nnet.ipv4.tcp_rmem                                  | Any positive integer tuple\nnet.ipv4.tcp_wmem                                  | Any positive integer tuple\nnet.ipv4.tcp_tw_reuse                              | Must be {0, 1, 2}\nnet.ipv4.tcp_mtu_probing                           | Must be {0, 1, 2}\nnet.ipv4.tcp_max_orphans                           | Must be between [16384, 262144]\nnet.ipv4.tcp_max_tw_buckets                        | Must be between [4096, 2147483647]\nnet.ipv4.tcp_syn_retries                           | Must be between [1, 127]\nnet.ipv4.tcp_ecn                                   | Must be {0, 1, 2}\nnet.ipv4.tcp_congestion_control                    | Supported values for COS: 'reno', 'cubic', 'bbr', 'lp', 'htcp'. Supported values for Ubuntu: 'reno', 'cubic', 'bbr', 'lp', 'htcp', 'vegas', 'dctcp', 'bic', 'cdg', 'highspeed', 'hybla', 'illinois', 'nv', 'scalable', 'veno', 'westwood', 'yeah'.\nnet.ipv4.neigh.default.gc_thresh1                  | Must be between [0, 262144]\nnet.ipv4.neigh.default.gc_thresh2                  | Must be between [512, 524288]\nnet.ipv4.neigh.default.gc_thresh3                  | Must be between [1024, 1048576]\nnet.netfilter.nf_conntrack_max                     | Must be between [65536, 4194304]\nnet.netfilter.nf_conntrack_buckets                 | Must be between [65536, 524288]. Recommend setting: nf_conntrack_max = nf_conntrack_buckets * 4\nnet.netfilter.nf_conntrack_tcp_timeout_close_wait  | Must be between [60, 3600]\nnet.netfilter.nf_conntrack_tcp_timeout_time_wait   | Must be between [1, 600]\nnet.netfilter.nf_conntrack_tcp_timeout_established | Must be between [600, 86400]\nnet.netfilter.nf_conntrack_acct                    | Must be {0, 1}\nkernel.keys.maxkeys                                | Must be between [200, 1048576]\nkernel.keys.maxbytes                               | Must be between [20000, 2097152]\nkernel.shmmni                                      | Must be between [4096, 32768]\nkernel.shmmax                                      | Must be between [0, 18446744073692774399]\nkernel.shmall                                      | Must be between [0, 18446744073692774399]\nkernel.perf_event_paranoid                         | Must be {-1, 0, 1, 2, 3}\nkernel.sched_rt_runtime_us                         | Must be [-1, 1000000]\nkernel.softlockup_panic                            | Must be {0, 1}\nkernel.yama.ptrace_scope                           | Must be {0, 1, 2, 3}\nkernel.kptr_restrict                               | Must be {0, 1, 2}\nkernel.dmesg_restrict                              | Must be {0, 1}\nkernel.sysrq                                       | Must be [0, 511]\nfs.aio-max-nr                                      | Must be between [65536, 4194304]\nfs.file-max                                        | Must be between [104857, 67108864]\nfs.inotify.max_user_instances                      | Must be between [8192, 1048576]\nfs.inotify.max_user_watches                        | Must be between [8192, 1048576]\nfs.nr_open                                         | Must be between [1048576, 2147483584]\nvm.dirty_background_ratio                          | Must be between [1, 100]\nvm.dirty_background_bytes                          | Must be between [0, 68719476736]\nvm.dirty_expire_centisecs                          | Must be between [0, 6000]\nvm.dirty_ratio                                     | Must be between [1, 100]\nvm.dirty_bytes                                     | Must be between [0, 68719476736]\nvm.dirty_writeback_centisecs                       | Must be between [0, 1000]\nvm.max_map_count                                   | Must be between [65536, 2147483647]\nvm.overcommit_memory                               | Must be one of {0, 1, 2}. Not supported on machines with less than 15 GB memory.\nvm.overcommit_ratio                                | Must be between [0, 100]\nvm.vfs_cache_pressure                              | Must be between [0, 100]\nvm.swappiness                                      | Must be between [0, 200]\nvm.watermark_scale_factor                          | Must be between [10, 3000]\nvm.min_free_kbytes                                 | Must be between [67584, 1048576]\n+\nList of supported keys in 'accurateTimeConfig' under 'linuxConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\nenablePtpKvmTimeSync                       | boolean\n+\nList of supported hugepage size in 'hugepageConfig'.\n+\nKEY             | VALUE\n----------------| ---------------------------------------------\nhugepage_size2m | Number of 2M huge pages, any positive integer\nhugepage_size1g | Number of 1G huge pages, any positive integer\n+\nList of supported keys in 'swapConfig' under 'linuxConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\nenabled                                    | boolean\nencryptionConfig                           | specify encryption settings for the swap space\nbootDiskProfile                            | specify swap on the node's boot disk\nephemeralLocalSsdProfile                   | specify swap on the local SSD shared with pod ephemeral storage\ndedicatedLocalSsdProfile                   | specify swap on a new, separate local NVMe SSD exclusively for swap\n+\nList of supported keys in 'encryptionConfig' under 'swapConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\ndisabled                                   | boolean\n+\nList of supported keys in 'bootDiskProfile' under 'swapConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\nswapSizeGib                                | integer\nswapSizePercent                            | integer\n+\nList of supported keys in 'ephemeralLocalSsdProfile' under 'swapConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\nswapSizeGib                                | integer\nswapSizePercent                            | integer\n+\nList of supported keys in 'dedicatedLocalSsdProfile' under 'swapConfig'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\ndiskCount                                  | integer\n+\nList of supported keys in 'nodeKernelModuleLoading'.\n+\nKEY                                        | VALUE\n------------------------------------------ | ------------------------------------------\npolicy                                     | ENFORCE_SIGNED_MODULES, DO_NOT_ENFORCE_SIGNED_MODULES, POLICY_UNSPECIFIED\n+\n\nThe upper limit for total allocated hugepage size differs based upon machine size.\n+\n* On machines with less than 30 GB memory: 60% of the total memory. For example, on e2-standard-2 machine with 8 GB of memory, you can't allocate more than 4.8 GB for hugepages.\n* On machines with more than 30 GB memory: 80% of the total memory. For example, on c4a-standard-8 machines with 32 GB of memory, hugepages cannot exceed 25.6 GB.\n+\n1G hugepages are only available in following machine familes:\nc3, m2, c2d, c3d, h3, m3, a2, a3, g2.\n+\nSupported values for 'cgroupMode' under 'linuxConfig'.\n+\n* `CGROUP_MODE_V1`: Use cgroupv1 on the node pool.\n* `CGROUP_MODE_V2`: Use cgroupv2 on the node pool.\n* `CGROUP_MODE_UNSPECIFIED`: Use the default GKE cgroup configuration.\n+\nSupported values for 'transparentHugepageEnabled' under 'linuxConfig' which controls transparent hugepage support for anonymous memory.\n+\n* `TRANSPARENT_HUGEPAGE_ENABLED_ALWAYS`: Transparent hugepage is enabled system wide.\n* `TRANSPARENT_HUGEPAGE_ENABLED_MADVISE`: Transparent hugepage is enabled inside MADV_HUGEPAGE regions. This is the default kernel configuration.\n* `TRANSPARENT_HUGEPAGE_ENABLED_NEVER`: Transparent hugepage is disabled.\n* `TRANSPARENT_HUGEPAGE_ENABLED_UNSPECIFIED`: Default value. GKE will not modify the kernel configuration.\n+\nSupported values for 'transparentHugepageDefrag' under 'linuxConfig' which defines the transparent hugepage defrag configuration on the node.\n+\n* `TRANSPARENT_HUGEPAGE_DEFRAG_ALWAYS`: It means that an application requesting THP will stall on allocation failure and directly reclaim pages and compact memory in an effort to allocate a THP immediately.\n* `TRANSPARENT_HUGEPAGE_DEFRAG_DEFER`: It means that an application will wake kswapd in the background to reclaim pages and wake kcompactd to compact memory so that THP is available in the near future. It is the responsibility of khugepaged to then install the THP pages later.\n* `TRANSPARENT_HUGEPAGE_DEFRAG_DEFER_WITH_MADVISE`: It means that an application will enter direct reclaim and compaction like always, but only for regions that have used madvise(MADV_HUGEPAGE); all other regions will wake kswapd in the background to reclaim pages and wake kcompactd to compact memory so that THP is available in the near future.\n* `TRANSPARENT_HUGEPAGE_DEFRAG_MADVISE`: It means that an application will enter direct reclaim and compaction like always, but only for regions that have used madvise(MADV_HUGEPAGE); all other regions will wake kswapd in the background to reclaim pages and wake kcompactd to compact memory so that THP is available in the near future.\n* `TRANSPARENT_HUGEPAGE_DEFRAG_NEVER`: It means that an application will never enter direct reclaim or compaction.\n* `TRANSPARENT_HUGEPAGE_DEFRAG_UNSPECIFIED`: Default value. GKE will not modify the kernel configuration.\n+\nSupported values for 'policy' under 'nodeKernelModuleLoading'.\n+\n* `POLICY_UNSPECIFIED`: Default behavior. GKE selects the image based on node type. For CPU and TPU nodes, the image will not allow loading external kernel modules. For GPU nodes, the image will allow loading any module, whether it is signed or not.\n* `ENFORCE_SIGNED_MODULES`: Enforced signature verification: Node pools will use a Container-Optimized OS image configured to allow loading of *Google-signed* external kernel modules. Loadpin is enabled but configured to exclude modules, and kernel module signature checking is enforced.\n* `DO_NOT_ENFORCE_SIGNED_MODULES`: Do not enforce kernel module signature enforcement. Mirrors existing DEFAULT behavior.\n+\nNote, updating the system configuration of an existing node pool requires recreation of the nodes which which might cause a disruption.\n+\nUse a full or relative path to a local file containing the value of system_config",
  args: {
    name: "SYSTEM_CONFIG_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag14630: Fig.Option = {
  name: "--tags",
  description:
    "Applies the given tags (comma separated) on the cluster. Example:\n+\n  $ {command} EXAMPLE_CLUSTER --tags=tag1=one,tag2=two",
  args: { name: "TAG", description: "Dict", suggestions: [] },
};
const flag14632: Fig.Option = {
  name: "--tags",
  description:
    "Applies the given tags (comma separated) on the node pool. Example:\n+\n  $ {command} EXAMPLE_NODE_POOL --tags=tag1=one,tag2=two",
  args: { name: "TAG", description: "Dict", suggestions: [] },
};
const flag14854: Fig.Option = {
  name: "--threads-per-core",
  description:
    "The number of visible threads per physical core for each node. To disable\nsimultaneous multithreading (SMT) set this to 1",
  args: {
    name: "THREADS_PER_CORE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14879: Fig.Option = {
  name: "--tier",
  description:
    "(DEPRECATED) Set the desired tier for the cluster.\n+\nThe `--tier` flag is deprecated. More info: https://cloud.google.com/kubernetes-engine/docs/release-notes#September_02_2025. _TIER_ must be one of: *standard*, *enterprise*",
  args: {
    name: "TIER",
    description: "String",
    suggestions: ["standard", "enterprise"],
  },
};
const flag14966: Fig.Option = {
  name: "--total-max-nodes",
  description:
    "Maximum number of all nodes in the node pool.\n+\nMaximum number of all nodes to which the node pool specified by --node-pool\n(or default node pool if unspecified) can scale. Ignored unless\n--enable-autoscaling is also specified",
  args: { name: "TOTAL_MAX_NODES", description: "Int", suggestions: [] },
};
const flag14967: Fig.Option = {
  name: "--total-min-nodes",
  description:
    "Minimum number of all nodes in the node pool.\n+\nMinimum number of all nodes to which the node pool specified by --node-pool\n(or default node pool if unspecified) can scale. Ignored unless\n--enable-autoscaling is also specified",
  args: { name: "TOTAL_MIN_NODES", description: "Int", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15107: Fig.Option = {
  name: "--uninstall-connect-agent",
  description:
    "If set to True for a GKE cluster, Connect agent will be uninstalled\nfrom the cluster. No-op for third-party clusters, where Connect agent\nwill always be uninstalled",
};
const flag15109: Fig.Option = {
  name: "--uninstall",
  description:
    "Uninstall any previously-installed and managed Config Sync on the specified\nmemberships by setting the `enabled`\n[field](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)\nto false. Clears all other configuration for each membership. Does not wait for\nthe uninstallation to complete. To bypass the confirmation prompt, use\n`--force`. Requires the feature to be enabled.\n+\nTo uninstall Config Sync on select memberships, run:\n+\n  $ {command} --uninstall --memberships=example-membership-1,example-membership-2",
};
const flag15167: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15197: Fig.Option = {
  name: "--update-namespace-labels",
  description:
    "List of namespace-level label KEY=VALUE pairs to update in the cluster namespace. If a\nlabel exists, its value is modified. Otherwise, a new label is'\ncreated",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15198: Fig.Option = {
  name: "--update-namespace-labels",
  description:
    "List of scope-level label KEY=VALUE pairs to update in the cluster namespace. If a\nlabel exists, its value is modified. Otherwise, a new label is'\ncreated",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15237: Fig.Option = {
  name: "--upgrade-policy",
  description:
    "If not specified, control-plane-only is set to False. In the next upgrade operation, all worker node pools will be upgraded together with the control plane.\n+\nExample:\n+\n  To upgrade the control plane only and keep worker node pools version unchanged, first specify the policy:\n+\n    ```shell\n    $ {command} CLUSTER --upgrade-policy control-plane-only=True\n    ```\n+\n  Then to start the upgrade operation using the specified policy, run:\n+\n    ```shell\n    $ {parent_command} upgrade CLUSTER --version=VERSION\n    ```\n+\n  After upgrading only the cluster control plane, to upgrade an individual node pool, run:\n+\n    ```shell\n    $ {grandparent_command} node-pools update NODE_POOL --version=VERSION\n    ```\n+\nExample:\n+\n  Alternatively, to upgrade both the control plane and all worker node pools, first specify the policy:\n+\n    ```shell\n    $ {command} CLUSTER --upgrade-policy control-plane-only=False\n    ```\n+\n  Then to start the upgrade operation using the specified policy, run:\n+\n    ```shell\n    $ {parent_command} upgrade CLUSTER --version=VERSION\n    ```",
  args: { name: "UPGRADE_POLICY", description: "Dict", suggestions: [] },
};
const flag15238: Fig.Option = {
  name: "--upgrade-selector",
  description:
    "Name and version of the upgrade to be overridden where version is a\nfull GKE version. Currently, name can be either `k8s_control_plane` or\n`k8s_node`",
  args: { name: "UPGRADE_SELECTOR", description: "Dict", suggestions: [] },
};
const flag15239: Fig.Option = {
  name: "--upgrade-selector",
  description:
    "Name and version of the upgrade to be overridden where version is a full GKE version. Currently,\nname can be either `k8s_control_plane` or `k8s_node`",
  args: { name: "UPGRADE_SELECTOR", description: "Dict", suggestions: [] },
};
const flag15242: Fig.Option = {
  name: "--upstream-fleet",
  description:
    "The upstream fleet. GKE will finish upgrades on the upstream fleet\nbefore applying the same upgrades to the current fleet.\n+\nTo configure the upstream fleet, run:\n+\n$ {command}             --upstream-fleet={upstream_fleet}",
  args: { name: "UPSTREAM_FLEET", description: "String", suggestions: [] },
};
const flag15244: Fig.Option = {
  name: "--upstream-scope",
  description:
    "Full resource name of the upstream scope in the format of\nprojects/{project}/locations/{location}/scopes/{scope}. GKE will finish upgrades on the upstream\nscope before applying the same upgrades to the current scope.\n+\nTo configure the upstream scope for ``SCOPE_NAME'', run:\n+\n  $ {command} SCOPE_NAME \\\n    --upstream-scope=projects/{upstream_project}/locations/global/scopes/{upstream_scope}",
  args: { name: "UPSTREAM_SCOPE", description: "String", suggestions: [] },
};
const flag15249: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
};
const flag15251: Fig.Option = {
  name: "--uri",
  description: "Address of the proxy server",
  args: { name: "URI", description: "String", suggestions: [] },
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15336: Fig.Option = {
  name: "--user",
  description: "User for the RBACRoleBinding to update to",
  args: { name: "USER", description: "String", suggestions: [] },
};
const flag15337: Fig.Option = {
  name: "--user",
  description: "User for the RoleBinding",
  args: { name: "USER", description: "String", suggestions: [] },
};
const flag15341: Fig.Option = {
  name: ["--username", "-u"],
  description:
    "The user name to use for basic auth for the cluster. Use `--password` to specify\na password; if not, the server will randomly generate one",
  args: { name: "USERNAME", description: "String", suggestions: [] },
};
const flag15349: Fig.Option = {
  name: "--users",
  description:
    "User's email address, service account email address, or third-party IAM subject principal",
  args: { name: "USERS", description: "String", suggestions: [] },
};
const flag15362: Fig.Option = {
  name: "--validate-only",
  description: "Generate a new schedule without actually resuming the rollout",
};
const flag15366: Fig.Option = {
  name: "--validate-only",
  description:
    "If set, only validate the request, but do not actually perform the operation",
};
const flag15382: Fig.Option = {
  name: "--validate-only",
  description: "Validate the cluster to create, but don't actually perform it",
};
const flag15383: Fig.Option = {
  name: "--validate-only",
  description: "Validate the cluster to delete, but don't actually perform it",
};
const flag15394: Fig.Option = {
  name: "--validate-only",
  description:
    "Validate the update of the cluster, but don't actually perform it",
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
const flag15486: Fig.Option = {
  name: "--vm-size",
  description: "Azure Virtual Machine Size (e.g. Standard_DS1_v)",
  args: { name: "VM_SIZE", description: "String", suggestions: [] },
};
const flag15570: Fig.Option = {
  name: "--windows-os-version",
  description:
    'Specifies the Windows Server Image to use when creating a Windows node pool.\nValid variants can be "ltsc2019", "ltsc2022". It means using LTSC2019 server\nimage or LTSC2022 server image. If the node pool doesn\'t specify a Windows\nServer Image Os version, then Ltsc2019 will be the default one to use. _WINDOWS_OS_VERSION_ must be one of: *ltsc2019*, *ltsc2022*',
  args: {
    name: "WINDOWS_OS_VERSION",
    description: "String",
    suggestions: ["ltsc2019", "ltsc2022"],
  },
};
const flag15639: Fig.Option = {
  name: "--workload-metadata",
  description:
    "Type of metadata server available to pods running in the node pool. _WORKLOAD_METADATA_ must be one of:\n+\n*GCE_METADATA*::: Pods running in this node pool have access to the node's underlying Compute Engine Metadata Server.\n*GKE_METADATA*::: Run the Kubernetes Engine Metadata Server on this node. The Kubernetes Engine Metadata Server exposes a metadata API to workloads that is compatible with the V1 Compute Metadata APIs exposed by the Compute Engine and App Engine Metadata Servers. This feature can only be enabled if Workload Identity is enabled at the cluster level.\n:::\n+",
  args: {
    name: "WORKLOAD_METADATA",
    description: "Googlecloudsdk.command_lib.container.flags:<lambda>",
    suggestions: ["GCE_METADATA", "GKE_METADATA"],
  },
};
const flag15640: Fig.Option = {
  name: "--workload-policies",
  description:
    "Add Autopilot workload policies to the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --workload-policies=allow-net-admin\n+\nThe only supported workload policy is 'allow-net-admin'",
  args: {
    name: "WORKLOAD_POLICIES",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag15642: Fig.Option = {
  name: "--workload-pool",
  description:
    "Enable Workload Identity on the cluster.\n+\nWhen enabled, Kubernetes service accounts will be able to act as Cloud IAM\nService Accounts, through the provided workload pool.\n+\nCurrently, the only accepted workload pool is the workload pool of\nthe Cloud project containing the cluster, `PROJECT_ID.svc.id.goog`.\n+\nFor more information on Workload Identity, see\n+\n            https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
  args: { name: "WORKLOAD_POOL", description: "String", suggestions: [] },
};
const flag15649: Fig.Option = {
  name: "--workload-vulnerability-scanning",
  description:
    "Sets the mode of the Kubernetes security posture API's workload\nvulnerability scanning.\n+\nTo enable Advanced vulnerability insights mode explicitly set the flag to\n`--workload-vulnerability-scanning=enterprise`.\n+\nTo enable in standard mode explicitly set the flag to\n`--workload-vulnerability-scanning=standard`.\n+\nTo disable in an existing cluster, explicitly set the flag to\n`--workload-vulnerability-scanning=disabled`.\n+\nFor more information on enablement, see https://cloud.google.com/kubernetes-engine/docs/concepts/about-security-posture-dashboard#feature-enablement.\n+\n_WORKLOAD_VULNERABILITY_SCANNING_ must be one of: *disabled*, *standard*, *enterprise*",
  args: {
    name: "WORKLOAD_VULNERABILITY_SCANNING",
    description: "String",
    suggestions: ["disabled", "standard", "enterprise"],
  },
};
const flag15650: Fig.Option = {
  name: "--workload-vulnerability-scanning",
  description:
    "To apply standard vulnerability scanning to clusters in the fleet,\n+\n  $ {command} --workload-vulnerability-scanning=standard\n+\n_WORKLOAD_VULNERABILITY_SCANNING_ must be one of: *disabled*, *standard*, *enterprise*",
  args: {
    name: "WORKLOAD_VULNERABILITY_SCANNING",
    description: "String",
    suggestions: ["disabled", "standard", "enterprise"],
  },
};
const flag15698: Fig.Option = {
  name: "--zone",
  description:
    "Compute zone (e.g. us-central1-a) for a zonal cluster. Overrides the default compute/zone property value for this command invocation",
  args: { name: "ZONE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "container",
  description: "Deploy and manage clusters of machines for running containers",
  subcommands: [
    {
      name: "ai",
      description: "Manage AI related workloads for GKE",
      subcommands: [
        {
          name: "profiles",
          description: "Quickstart engine for GKE AI workloads",
          subcommands: [
            {
              name: "benchmarks",
              description: "Manage benchmarks for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List benchmarks for a given model and model server",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5453,
                    flag5699,
                    {
                      name: "--instance-type",
                      description:
                        "The instance type. If not specified, this defaults to any instance type",
                      args: {
                        name: "INSTANCE_TYPE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag6515,
                    flag7356,
                    flag7972,
                    flag7962,
                    flag7956,
                    flag11059,
                    {
                      name: "--pricing-model",
                      description:
                        "The pricing model to use to calculate token cost. Currently, this supports on-demand, spot, 3-years-cud, 1-year-cud",
                      args: {
                        name: "PRICING_MODEL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    flag11946,
                    {
                      name: "--serving-stack",
                      description:
                        "The serving stack to filter benchmarking data by. If not provided, benchmarking data for all serving stacks that support the given model and model server will be returned",
                      args: {
                        name: "SERVING_STACK",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag13653,
                    flag13948,
                    flag14975,
                    flag15249,
                    {
                      name: "--use-case",
                      description:
                        "If specified, results will only show profiles that match the provided use case. Options are: Advanced Customer Support, Code Completion, Text Summarization, Chatbot (ShareGPT), Code Generation, Deep Research. If omitted, defaults to Chatbot (ShareGPT)",
                      args: {
                        name: "USE_CASE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag15315,
                    flag15424,
                  ],
                },
              ],
            },
            {
              name: "list",
              description: "List compatible accelerator profiles",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                {
                  name: "--model",
                  description: "The model",
                  args: {
                    name: "MODEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--model-server",
                  description: "The model server",
                  args: {
                    name: "MODEL_SERVER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7956,
                flag11059,
                {
                  name: "--pricing-model",
                  description:
                    "The pricing model to use to calculate token cost. Currently, this supports on-demand, spot, 3-years-cud, 1-year-cud",
                  args: {
                    name: "PRICING_MODEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--serving-stack",
                  description:
                    "The serving stack to filter profiles by. If not provided, profiles for all serving stacks that support the given model and model server will be returned",
                  args: {
                    name: "SERVING_STACK",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13653,
                flag13948,
                {
                  name: "--target-cost-per-million-input-tokens",
                  description:
                    "The target cost per million input tokens to filter profiles by, unit is 1 USD up to 5 decimal places",
                  args: {
                    name: "TARGET_COST_PER_MILLION_INPUT_TOKENS",
                    description: "Float",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-cost-per-million-output-tokens",
                  description:
                    "The target cost per million output tokens to filter profiles by, unit is 1 USD up to 5 decimal places",
                  args: {
                    name: "TARGET_COST_PER_MILLION_OUTPUT_TOKENS",
                    description: "Float",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-input-length",
                  description:
                    "If specified, results will only show profiles that have an input length within 20% of the specified one. Only works alongside output length",
                  args: {
                    name: "TARGET_INPUT_LENGTH",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-itl-milliseconds",
                  description:
                    "If specified, results will only show profiles with instance types that can meet the latency target and will show their throughput performances at the target inter-token latency (ITL)",
                  args: {
                    name: "TARGET_ITL_MILLISECONDS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-ntpot-milliseconds",
                  description:
                    "The target normalized time per output token (NTPOT) in milliseconds. NTPOT is measured as the request_latency / output_tokens. If this field is set, the command will only return accelerators that can meet the target ntpot milliseconds and display their throughput performance at the target latency. Otherwise, the command will return all accelerators and display their highest throughput performance",
                  args: {
                    name: "TARGET_NTPOT_MILLISECONDS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-output-length",
                  description:
                    "If specified, results will only show profiles that have an output length within 20% of the specified one. Only works alongside input length",
                  args: {
                    name: "TARGET_OUTPUT_LENGTH",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-ttft-milliseconds",
                  description:
                    "The target time to first token (TTFT) in milliseconds. TTFT is measured as the request_latency / output_tokens. If this field is set, the command will only return profiles that can meet the target ttft milliseconds and display their throughput performance at the target latency. Otherwise, the command will return all profiles and display their highest throughput performance",
                  args: {
                    name: "TARGET_TTFT_MILLISECONDS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15249,
                {
                  name: "--use-case",
                  description:
                    "If specified, results will only show profiles that match the provided use case. Options are: Advanced Customer Support, Code Completion, Text Summarization, Chatbot (ShareGPT), Text Generation, Deep Research",
                  args: {
                    name: "USE_CASE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
            },
            {
              name: "manifests",
              description: "Generate optimized Kubernetes manifests",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Generate ready-to-deploy Kubernetes manifests with compute, load balancing, and autoscaling capabilities",
                  options: [
                    {
                      name: "--accelerator-type",
                      description: "The accelerator type",
                      args: {
                        name: "ACCELERATOR_TYPE",
                        description: "String",
                        suggestions: [],
                      },
                    },
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
                    flag7972,
                    {
                      name: "--model-bucket-uri",
                      description:
                        "The Google Cloud Storage bucket URI to load the model from. This URI must point to the directory containing the model's config file (config.json) and model weights. If unspecified, defaults to loading the model from Hugging Face",
                      args: {
                        name: "MODEL_BUCKET_URI",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7962,
                    {
                      name: "--model-server-version",
                      description:
                        "The model server version. If omitted, the most recently benchmarked version is used",
                      args: {
                        name: "MODEL_SERVER_VERSION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--namespace",
                      description:
                        "The namespace to deploy the manifests in. Default namespace is 'default'",
                      args: {
                        name: "NAMESPACE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--output",
                      description:
                        "The output to display. Default is all. _OUTPUT_ must be one of: *manifest*, *comments*, *all*",
                      args: {
                        name: "OUTPUT",
                        description: "String",
                        suggestions: ["manifest", "comments", "all"],
                      },
                    },
                    flag11009,
                    flag11637,
                    flag11946,
                    {
                      name: "--serving-stack",
                      description:
                        "The serving stack to filter manifests by. If not provided, will default to none",
                      args: {
                        name: "SERVING_STACK",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--serving-stack-version",
                      description:
                        "The serving stack version. If omitted, the most recently benchmarked version is used",
                      args: {
                        name: "SERVING_STACK_VERSION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--target-itl-milliseconds",
                      description:
                        "The target inter-token latency (ITL) in milliseconds. If this is set, the manifest will include Horizontal Pod Autoscaler (HPA) resources which automatically adjust the model server replica count in response to changes in model server load to keep p50 ITL below the specified threshold. If the provided target-itl-milliseconds is too low to achieve, the HPA manifest will not be generated",
                      args: {
                        name: "TARGET_ITL_MILLISECONDS",
                        description: "Int",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--target-ntpot-milliseconds",
                      description:
                        "The maximum normalized time per output token (NTPOT) in milliseconds. NTPOT is measured as the request_latency / output_tokens. If this is set, the manifests will include Horizontal Pod Autoscaler (HPA) resources which automatically adjust the model server replica count in response to changes in model server load to keep p50 NTPOT below the specified threshold. If the provided target-ntpot-milliseconds is too low to achieve, the HPA manifest will not be generated",
                      args: {
                        name: "TARGET_NTPOT_MILLISECONDS",
                        description: "Int",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--target-ttft-milliseconds",
                      description:
                        "If specified, results will only show accelerators that can meet the latency target and will show their throughput performances at the target ttft target to achieve, the HPA manifest will not be generated",
                      args: {
                        name: "TARGET_TTFT_MILLISECONDS",
                        description: "Int",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    {
                      name: "--use-case",
                      description:
                        "The manifest will be optimized for this use case. Options are: Advanced Customer Support, Code Completion, Text Summarization, Chatbot (ShareGPT), Code Generation, Deep Research. If omitted, defaults to Chatbot (ShareGPT)",
                      args: {
                        name: "USE_CASE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag15315,
                    flag15424,
                  ],
                },
              ],
            },
            {
              name: "model-server-versions",
              description:
                "Manage supported model server versions for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description: "List supported model server versions",
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
                    flag7972,
                    {
                      name: "--model-server",
                      description:
                        "The model server. If not specified, this defaults to any model server",
                      args: {
                        name: "MODEL_SERVER",
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
              ],
            },
            {
              name: "model-servers",
              description:
                "Manage supported model servers for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description: "List supported model servers for a given model",
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
                    flag7972,
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
              name: "models",
              description:
                "Manage supported models for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description: "List supported models",
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
              name: "serving-stack-versions",
              description:
                "List supported serving stack versions for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List supported serving stack versions that were used to generate the inference profiles",
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
                    {
                      name: "--model",
                      description:
                        "The model to filter serving stack versions by",
                      args: {
                        name: "MODEL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--model-server",
                      description:
                        "The model server to filter serving stack versions by",
                      args: {
                        name: "MODEL_SERVER",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag11059,
                    flag11637,
                    flag11946,
                    {
                      name: "--serving-stack",
                      description:
                        "The serving stack to filter serving stack versions by",
                      args: {
                        name: "SERVING_STACK",
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
              ],
            },
            {
              name: "serving-stacks",
              description:
                "List supported serving stacks for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List supported serving stacks that were used to generate the inference profiles",
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
                    {
                      name: "--model",
                      description: "The model to filter serving stacks by",
                      args: {
                        name: "MODEL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--model-server",
                      description:
                        "The model server to filter serving stacks by",
                      args: {
                        name: "MODEL_SERVER",
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
              ],
            },
            {
              name: "use-case",
              description:
                "List supported use cases for GKE Inference Quickstart",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List supported use cases that were used to generate the inference profiles",
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
        },
      ],
    },
    {
      name: "attached",
      description: "Manage Attached clusters for running containers",
      subcommands: [
        {
          name: "clusters",
          description: "Create and manage Attached clusters",
          subcommands: [
            {
              name: "delete",
              description: "Delete a registered AttachedCluster resource",
              options: [
                flag42,
                flag46,
                flag433,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "Force delete an Attached cluster.\n  Deletion of the Attached cluster will succeed even if errors occur\n  during deleting in-cluster resources. Using this parameter may\n  result in orphaned resources in the cluster",
                },
                flag5699,
                flag6645,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15383,
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
              description: "Describe an Attached cluster",
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
                flag6645,
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
              name: "generate-install-manifest",
              description: "Generate Install Manifest for an Attached cluster",
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
                flag6645,
                flag7356,
                {
                  name: "--output-file",
                  description: "Path to the output file to store manifest",
                  args: {
                    name: "OUTPUT_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11319,
                flag11637,
                flag11817,
                flag11818,
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
              description:
                "*(DEPRECATED)*  Get credentials of an Attached cluster",
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
                flag6645,
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
              name: "import",
              description: "Import fleet membership for an Attached cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2443,
                flag3845,
                flag4900,
                flag4902,
                {
                  name: "--fleet-membership",
                  description:
                    "ID of the fleet_membership or fully qualified identifier for the fleet_membership.\n+\nTo set the `fleet_membership` attribute:\n* provide the argument `--fleet-membership` on the command line",
                  args: {
                    name: "FLEET_MEMBERSHIP",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--fleet-membership-location",
                  description:
                    "Google Cloud location for the fleet_membership.\n+\nTo set the `location` attribute:\n* provide the argument `--fleet-membership` on the command line with a fully specified name;\n* provide the argument `--fleet-membership-location` on the command line;\n* set the property `container_attached/location`",
                  args: {
                    name: "FLEET_MEMBERSHIP_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5091,
                flag5453,
                flag5699,
                flag6361,
                flag6717,
                flag7356,
                flag11319,
                flag11637,
                flag11817,
                flag11818,
                flag11946,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the cluster to import, but don't actually perform it",
                },
                flag15424,
              ],
            },
            {
              name: "list",
              description: "List Attached clusters",
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
                flag6717,
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
              name: "register",
              description: "Register an Attached cluster",
              options: [
                flag42,
                flag46,
                flag336,
                flag343,
                flag515,
                flag1201,
                flag1206,
                flag2292,
                flag2443,
                flag3175,
                {
                  name: "--disable-cloud-monitoring",
                  description:
                    "Disables managed collection for Cloud Monitoring in the cluster.\n+\nCloud Monitoring is enabled by default for all clusters. Beginning with\ncluster version 1.31, use --disable-cloud-monitoring to disable",
                },
                flag3845,
                {
                  name: "--enable-cloud-monitoring",
                  description:
                    "Enables managed collection for Cloud Monitoring in the cluster.\n+\nCloud Monitoring is enabled by default for all clusters. Beginning with\ncluster version 1.31, use --disable-cloud-monitoring to disable",
                },
                flag4212,
                flag4900,
                flag4902,
                flag4915,
                flag5091,
                {
                  name: "--has-private-issuer",
                  description:
                    "Indicates no publicly routable OIDC discovery endpoint exists\nfor the Kubernetes service account token issuer.\n+\nIf this flag is set, gcloud will read the issuer URL and JWKs from the cluster's\napi server",
                },
                flag5453,
                flag5699,
                {
                  name: "--issuer-url",
                  description: "Issuer url of the cluster to attach",
                  args: {
                    name: "ISSUER_URL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6361,
                flag6645,
                flag7356,
                flag7390,
                flag11319,
                flag11637,
                flag11817,
                flag11818,
                flag11946,
                {
                  name: "--system-component-labels",
                  description:
                    "Kubernetes labels to be applied to system component pods",
                  args: { name: "LABEL", description: "Dict", suggestions: [] },
                },
                {
                  name: "--system-component-tolerations",
                  description:
                    "Kubernetes tolerations to be applied to system component pods",
                  args: {
                    name: "TOLERATION",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--tags",
                  description:
                    "Tag keys/values directly bound to this resource.\n+\nThe short name of a tag key or value can have a maximum length of 256\ncharacters. The permitted character set for the short name includes UTF-8\nencoded Unicode characters except single quotes, double quotes,\nbackslashes, and forward slashes",
                  args: { name: "TAG", description: "Dict", suggestions: [] },
                },
                flag14975,
                flag15315,
                flag15382,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "update",
              description: "Update an Attached cluster",
              options: [
                flag42,
                flag46,
                flag336,
                flag343,
                flag515,
                flag720,
                flag1201,
                flag1206,
                {
                  name: "--clear-admin-groups",
                  description:
                    "Clear the admin groups associated with the cluster",
                },
                {
                  name: "--clear-admin-users",
                  description:
                    "Clear the admin users associated with the cluster",
                },
                flag1597,
                flag2292,
                flag3175,
                {
                  name: "--disable-cloud-monitoring",
                  description:
                    "Disable managed collection for Cloud Monitoring",
                },
                flag3577,
                {
                  name: "--enable-cloud-monitoring",
                  description: "Enable managed collection for Cloud Monitoring",
                },
                flag4210,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6645,
                flag7356,
                flag7390,
                {
                  name: "--platform-version",
                  description:
                    "Platform version to use for the cluster.\n+\nTo retrieve a list of valid versions, run:\n+\n  $ gcloud alpha container attached get-server-config --location=LOCATION\n+\nReplace ``LOCATION'' with the target Google Cloud location for the cluster",
                  args: {
                    name: "PLATFORM_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11817,
                flag11818,
                flag11946,
                flag14975,
                flag15315,
                flag15394,
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
          description:
            "Get Anthos Multi-Cloud server configuration for Attached clusters",
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
            flag6717,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "operations",
          description:
            "Manage Anthos Multi-Cloud long running operations for Attached clusters",
          subcommands: [
            {
              name: "describe",
              description: "Describe an operation",
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
                flag6660,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
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
                flag6717,
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
              description: "Wait for an operation to complete",
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
                flag6660,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "aws",
      description:
        "*(DEPRECATED)*  Deploy and manage clusters of machines on AWS for running containers",
      subcommands: [
        {
          name: "clusters",
          description:
            "*(DEPRECATED)*  Create and manage Anthos clusters on AWS",
          subcommands: [
            {
              name: "create",
              description: "*(DEPRECATED)*  Create an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag336,
                flag342,
                flag515,
                flag720,
                {
                  name: "--aws-region",
                  description: "AWS region to deploy the cluster",
                  args: {
                    name: "AWS_REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag1206,
                flag2057,
                flag2246,
                flag2292,
                {
                  name: "--database-encryption-kms-key-arn",
                  description:
                    "Amazon Resource Name (ARN) of the AWS KMS key to encrypt the cluster secrets",
                  args: {
                    name: "DATABASE_ENCRYPTION_KMS_KEY_ARN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3175,
                flag3581,
                flag4212,
                flag4900,
                flag4902,
                flag4915,
                flag5091,
                flag5453,
                {
                  name: "--iam-instance-profile",
                  description:
                    "Name or ARN of the IAM instance profile associated with the cluster",
                  args: {
                    name: "IAM_INSTANCE_PROFILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag5871,
                flag6646,
                flag7356,
                flag7391,
                {
                  name: "--main-volume-iops",
                  description:
                    "Number of I/O operations per second (IOPS) to provision for the main volume",
                  args: {
                    name: "MAIN_VOLUME_IOPS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--main-volume-kms-key-arn",
                  description:
                    "Amazon Resource Name (ARN) of the AWS KMS key to encrypt the main volume",
                  args: {
                    name: "MAIN_VOLUME_KMS_KEY_ARN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7446,
                {
                  name: "--main-volume-throughput",
                  description:
                    "Throughput to provision for the main volume, in MiB/s. Only valid if the volume type is GP3. If volume type is GP3 and throughput is not provided, it defaults to 125",
                  args: {
                    name: "MAIN_VOLUME_THROUGHPUT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--main-volume-type",
                  description:
                    "Type of the main volume. _MAIN_VOLUME_TYPE_ must be one of: *gp2*, *gp3*",
                  args: {
                    name: "MAIN_VOLUME_TYPE",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["gp2", "gp3"],
                  },
                },
                flag11331,
                flag11637,
                flag11815,
                flag11820,
                flag11946,
                {
                  name: "--role-arn",
                  description:
                    "Amazon Resource Name (ARN) of the IAM role to assume when managing AWS resources",
                  args: {
                    name: "ROLE_ARN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13127,
                flag13161,
                flag13162,
                flag13163,
                flag13164,
                flag13165,
                flag13428,
                flag13551,
                flag14290,
                {
                  name: "--subnet-ids",
                  description:
                    "Subnet ID of an existing VNET to use for the cluster control plane",
                  args: {
                    name: "SUBNET_ID",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14630,
                flag14975,
                flag15315,
                flag15382,
                flag15424,
                {
                  name: "--vpc-id",
                  description: "VPC associated with the cluster",
                  args: {
                    name: "VPC_ID",
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
              description: "*(DEPRECATED)*  Delete an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag433,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "Force delete an AWS cluster.\n  Deletion of the AWS cluster will succeed even if errors occur\n  during deleting in-cluster resources. Using this parameter may\n  result in orphaned resources in the cluster",
                },
                flag5699,
                flag6646,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15383,
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
              description: "*(DEPRECATED)*  Describe an Anthos cluster on AWS",
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
                flag6646,
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
              description:
                "*(DEPRECATED)*  Get credentials of an Anthos cluster on AWS",
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
                flag6646,
                flag7356,
                flag11587,
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
              description: "*(DEPRECATED)*  List Anthos clusters on AWS",
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
                flag6718,
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
              description: "*(DEPRECATED)*  Update an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag336,
                flag343,
                flag515,
                flag720,
                flag1201,
                flag1206,
                flag1485,
                flag1597,
                {
                  name: "--clear-proxy-config",
                  description:
                    "Clear the proxy configuration associated with the control plane",
                },
                {
                  name: "--clear-security-group-ids",
                  description:
                    "Clear any additional security groups associated with the control plane's nodes. This does not remove the default security groups",
                },
                {
                  name: "--clear-ssh-ec2-key-pair",
                  description:
                    "Clear the EC2 key pair authorized to login to the control plane's nodes",
                },
                {
                  name: "--clear-tags",
                  description:
                    "Clear any tags associated with the control plane's nodes",
                },
                flag2056,
                flag2245,
                flag2292,
                flag3175,
                flag3577,
                flag3581,
                flag4210,
                {
                  name: "--enable-per-node-pool-sg-rules",
                  description:
                    "Enable the default per node pool subnet security group rules on the control plane security group",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-instance-profile",
                  description:
                    "Name or ARN of the IAM instance profile associated with the cluster",
                  args: {
                    name: "IAM_INSTANCE_PROFILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag5871,
                flag6646,
                flag7356,
                flag7391,
                flag11637,
                flag11814,
                flag11819,
                flag11946,
                {
                  name: "--role-arn",
                  description:
                    "Amazon Resource Name (ARN) of the IAM role to assume when managing AWS resources",
                  args: {
                    name: "ROLE_ARN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13127,
                flag13161,
                flag13162,
                flag13163,
                flag13164,
                flag13165,
                flag13428,
                flag14290,
                {
                  name: "--tags",
                  description:
                    "Applies the given tags (comma separated) on the control plane. Example:\n+\n  $ {command} EXAMPLE_CONTROL_PLANE --tags=tag1=one,tag2=two",
                  args: { name: "TAG", description: "Dict", suggestions: [] },
                },
                flag14975,
                flag15315,
                flag15394,
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
          description:
            "*(DEPRECATED)*  Get Anthos Multi-Cloud server configuration for AWS",
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
            flag6718,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "node-pools",
          description:
            "*(DEPRECATED)*  Create and manage node pools in an Anthos cluster on AWS",
          subcommands: [
            {
              name: "create",
              description:
                "*(DEPRECATED)*  Create a node pool in an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag517,
                flag720,
                flag930,
                {
                  name: "--autoscaling-metrics-granularity",
                  description:
                    'Frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute"',
                  args: {
                    name: "AUTOSCALING_METRICS_GRANULARITY",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2089,
                flag2246,
                flag2292,
                flag4044,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-instance-profile",
                  description:
                    "Name or ARN of the IAM instance profile associated with the node pool",
                  args: {
                    name: "IAM_INSTANCE_PROFILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag5872,
                {
                  name: "--kubelet-config-cpu-cfs-quota",
                  description: "Enforce a Kubelet CPU CFS quota",
                  args: {
                    name: "KUBELET_CONFIG_CPU_CFS_QUOTA",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kubelet-config-cpu-cfs-quota-period",
                  description:
                    'Kubelet CPU CFS quota period, within the range "1ms" to "1s"',
                  args: {
                    name: "KUBELET_CONFIG_CPU_CFS_QUOTA_PERIOD",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kubelet-config-cpu-manager-policy",
                  description:
                    "Kubelet CPU manager policy. _KUBELET_CONFIG_CPU_MANAGER_POLICY_ must be one of: *none*, *static*",
                  args: {
                    name: "KUBELET_CONFIG_CPU_MANAGER_POLICY",
                    description: "String",
                    suggestions: ["none", "static"],
                  },
                },
                {
                  name: "--kubelet-config-pod-pids-limit",
                  description:
                    "Kubelet maximum number of PIDS in any pod, within the range 1024 to 4194304",
                  args: {
                    name: "KUBELET_CONFIG_POD_PIDS_LIMIT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag6656,
                flag7356,
                flag7652,
                flag7662,
                flag7690,
                {
                  name: "--max-unavailable-update",
                  description:
                    "Maximum number of nodes that can be simultaneously unavailable during this node\npool's update process. Use --max-surge-update as well, if needed, to control the\noverall surge settings.\n+\nTo update 3 nodes in parallel (1 + 2), but keep at least 4 nodes (6 - 2)\navailable each time the node pool is rolling updated, run:\n+\n  $ {command} --min-nodes=6 --max-surge-update=1 --max-unavailable-update=2",
                  args: {
                    name: "MAX_UNAVAILABLE_UPDATE",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag7897,
                flag10510,
                flag10533,
                flag10542,
                flag11637,
                flag11815,
                flag11820,
                flag11946,
                flag13161,
                flag13162,
                flag13163,
                flag13164,
                flag13165,
                flag13429,
                {
                  name: "--spot-instance-types",
                  description:
                    "List of AWS EC2 instance types for creating a spot node pool's nodes. The specified instance types must have the same CPU architecture, the same number of CPUs and memory. You can use the Amazon EC2 Instance Selector tool (https://github.com/aws/amazon-ec2-instance-selector) to choose instance types with matching CPU and memory configurations",
                  args: {
                    name: "INSTANCE_TYPE",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14291,
                flag14493,
                flag14632,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the node pool to create, but don't actually perform it",
                },
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "*(DEPRECATED)*  Delete a node pool in an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag434,
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "Force delete an AWS node pool.\n  Deletion of the AWS node pool will succeed even if errors occur\n  during deleting in-node pool resources. Using this parameter may\n  result in orphaned resources in the node pool",
                },
                flag5699,
                flag6656,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the node pool to delete, but don't actually perform it",
                },
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "*(DEPRECATED)*  Describe a node pool in an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6656,
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
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "list",
              description:
                "*(DEPRECATED)*  List node pools in an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2074,
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
                    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `--cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_aws/location`",
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
              name: "rollback",
              description:
                "*(DEPRECATED)*  Rollback a node pool in an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6656,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--respect-pdb",
                  description:
                    "Indicates whether the node pool rollback should respect pod disruption budget",
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "update",
              description:
                "*(DEPRECATED)*  Update a node pool in an Anthos cluster on AWS",
              options: [
                flag42,
                flag46,
                flag517,
                flag720,
                flag930,
                {
                  name: "--autoscaling-metrics-granularity",
                  description:
                    'Frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute"',
                  args: {
                    name: "AUTOSCALING_METRICS_GRANULARITY",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag1486,
                {
                  name: "--clear-autoscaling-metrics",
                  description:
                    "Clear the cloudwatch autoscaling metrics collection associated with the nodepool",
                },
                {
                  name: "--clear-node-labels",
                  description:
                    "Clear the labels assigned to the node pool's nodes",
                },
                {
                  name: "--clear-proxy-config",
                  description:
                    "Clear the proxy configuration associated with the node pool",
                },
                {
                  name: "--clear-security-group-ids",
                  description:
                    "Clear any additional security groups associated with the node pool's nodes. This does not remove the default security groups",
                },
                {
                  name: "--clear-ssh-ec2-key-pair",
                  description:
                    "Clear the EC2 key pair authorized to login to the node pool's nodes",
                },
                {
                  name: "--clear-tags",
                  description:
                    "Clear any tags associated with the node pool's nodes",
                },
                flag2089,
                flag2245,
                flag2292,
                flag4045,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-instance-profile",
                  description:
                    "Name or ARN of the IAM instance profile associated with the node pool",
                  args: {
                    name: "IAM_INSTANCE_PROFILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag5872,
                flag6656,
                flag7356,
                flag7651,
                flag7690,
                {
                  name: "--max-unavailable-update",
                  description:
                    "Maximum number of nodes that can be simultaneously unavailable during this node\npool's update process. Use --max-surge-update as well, if needed, to control the\noverall surge settings.\n+\nTo modify a node pool with 6 nodes such that, 3 nodes are updated in parallel\n(1 + 2), but keep at least 4 nodes (6 - 2) available each time this\nnode pool is rolling updated, run:\n+\n  $ {command} --max-surge-update=1 --max-unavailable-update=2",
                  args: {
                    name: "MAX_UNAVAILABLE_UPDATE",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag7896,
                flag10510,
                flag10541,
                flag11637,
                flag11814,
                flag11819,
                flag11946,
                flag13161,
                flag13162,
                flag13163,
                flag13164,
                flag13165,
                flag13429,
                flag14291,
                flag14632,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the node pool to update, but don't actually perform it",
                },
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
          ],
        },
        {
          name: "operations",
          description:
            "*(DEPRECATED)*  Manage Anthos Multi-Cloud long running operations for AWS",
          subcommands: [
            {
              name: "cancel",
              description: "*(DEPRECATED)*  Cancel an operation",
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
                flag6661,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
            {
              name: "describe",
              description: "*(DEPRECATED)*  Describe an operation",
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
                flag6661,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
            {
              name: "list",
              description: "*(DEPRECATED)*  List operations",
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
                flag6718,
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
              description: "*(DEPRECATED)*  Wait for an operation to complete",
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
                flag6661,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "azure",
      description:
        "*(DEPRECATED)*  Deploy and manage clusters of machines on Azure for running containers",
      subcommands: [
        {
          name: "clients",
          description: "*(DEPRECATED)*  Create and manage Azure clients",
          subcommands: [
            {
              name: "create",
              description: "*(DEPRECATED)*  Create an Azure client",
              options: [
                flag42,
                flag46,
                {
                  name: "--application-id",
                  description:
                    "Azure Active Directory (AAD) Application/Client ID (GUID)",
                  args: {
                    name: "APPLICATION_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6639,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--tenant-id",
                  description:
                    "Azure Active Directory (AAD) tenant ID (GUID) to associate with the client",
                  args: {
                    name: "TENANT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the creation of the client, but don't actually perform it",
                },
                flag15424,
              ],
              args: {
                name: "CLIENT",
                description:
                  "ID of the client or fully qualified identifier for the client.\n+\nTo set the `client` attribute:\n* provide the argument `client` on the command line",
              },
            },
            {
              name: "delete",
              description: "*(DEPRECATED)*  Delete an Azure client",
              options: [
                flag42,
                flag46,
                {
                  name: "--allow-missing",
                  description:
                    "Allow idempotent deletion of client.\n  The request will still succeed in case the client does not exist",
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6639,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CLIENT",
                description:
                  "ID of the client or fully qualified identifier for the client.\n+\nTo set the `client` attribute:\n* provide the argument `client` on the command line",
              },
            },
            {
              name: "describe",
              description: "*(DEPRECATED)*  Describe an Azure client",
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
                flag6639,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CLIENT",
                description:
                  "ID of the client or fully qualified identifier for the client.\n+\nTo set the `client` attribute:\n* provide the argument `client` on the command line",
              },
            },
            {
              name: "get-public-cert",
              description:
                "*(DEPRECATED)*  Get the public certificate of an Azure client",
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
                flag6639,
                flag7356,
                {
                  name: "--output-file",
                  description: "Path to the output file to store PEM",
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
              args: {
                name: "CLIENT",
                description:
                  "ID of the client or fully qualified identifier for the client.\n+\nTo set the `client` attribute:\n* provide the argument `client` on the command line",
              },
            },
            {
              name: "list",
              description: "*(DEPRECATED)*  List Azure clients",
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
                flag6719,
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
          name: "clusters",
          description:
            "*(DEPRECATED)*  Create and manage Anthos clusters on Azure",
          subcommands: [
            {
              name: "create",
              description: "*(DEPRECATED)*  Create an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag336,
                flag342,
                flag515,
                flag720,
                {
                  name: "--azure-application-id",
                  description:
                    "ID of the Azure Application to manage Azure resources",
                  args: {
                    name: "AZURE_APPLICATION_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--azure-region",
                  description:
                    "Azure location to deploy the cluster. Refer to your Azure subscription for available locations",
                  args: {
                    name: "AZURE_REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--azure-tenant-id",
                  description:
                    "ID of the Azure Tenant to manage Azure resources",
                  args: {
                    name: "AZURE_TENANT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag1981,
                flag2057,
                flag2244,
                flag2247,
                flag2292,
                {
                  name: "--database-encryption-key-id",
                  description:
                    "URL the of the Azure Key Vault key (with its version) to use to encrypt / decrypt cluster secrets",
                  args: {
                    name: "DATABASE_ENCRYPTION_KEY_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3175,
                flag4212,
                {
                  name: "--endpoint-subnet-id",
                  description:
                    "ARM ID of the subnet where the control plane load balancer is deployed. When unspecified, it defaults to the control plane subnet ID",
                  args: {
                    name: "ENDPOINT_SUBNET_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag4915,
                flag5091,
                flag5453,
                flag5699,
                flag6647,
                flag7356,
                flag7391,
                flag7446,
                flag11331,
                flag11637,
                flag11813,
                flag11816,
                flag11946,
                {
                  name: "--replica-placements",
                  description:
                    "Placement info for the control plane replicas. Replica placement is of format subnetid:zone, for example subnetid12345:1",
                  args: {
                    name: "REPLICA_PLACEMENT",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--resource-group-id",
                  description:
                    "ID of the Azure Resource Group to associate the cluster with",
                  args: {
                    name: "RESOURCE_GROUP_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13163,
                flag13551,
                {
                  name: "--service-load-balancer-subnet-id",
                  description:
                    "ARM ID of the subnet where Kubernetes private service type load balancers are deployed, when the Service lacks a subnet annotation",
                  args: {
                    name: "SERVICE_LOAD_BALANCER_SUBNET_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14302,
                {
                  name: "--subnet-id",
                  description:
                    "Subnet ID of an existing VNET to use for the cluster control plane",
                  args: {
                    name: "SUBNET_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14630,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the creation of the cluster, but don't actually perform it",
                },
                flag15424,
                flag15486,
                {
                  name: "--vnet-id",
                  description:
                    "ID of the Azure Virtual Network to associate with the cluster",
                  args: {
                    name: "VNET_ID",
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
              description: "*(DEPRECATED)*  Delete an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag433,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "Force delete an Azure cluster.\n  Deletion of the Azure cluster will succeed even if errors occur\n  during deleting in-cluster resources. Using this parameter may\n  result in orphaned resources in the cluster",
                },
                flag5699,
                flag6647,
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
              description:
                "*(DEPRECATED)*  Describe an Anthos cluster on Azure",
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
                flag6647,
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
              description:
                "*(DEPRECATED)*  Get credentials of an Anthos cluster on Azure",
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
                flag6647,
                flag7356,
                flag11587,
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
              description: "*(DEPRECATED)*  List Anthos clusters on Azure",
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
                flag6719,
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
              description: "*(DEPRECATED)*  Update an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag336,
                flag343,
                flag515,
                flag720,
                {
                  name: "--azure-application-id",
                  description:
                    "ID of the Azure Application to manage Azure resources",
                  args: {
                    name: "AZURE_APPLICATION_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--azure-tenant-id",
                  description:
                    "ID of the Azure Tenant to manage Azure resources",
                  args: {
                    name: "AZURE_TENANT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag1485,
                {
                  name: "--clear-client",
                  description:
                    "Clear the Azure client. This flag is required when updating to use Azure workload identity federation from Azure client to manage  Azure resources",
                },
                flag1597,
                flag1981,
                flag2056,
                flag2292,
                flag3175,
                flag3577,
                flag4210,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6647,
                flag7356,
                flag7391,
                flag11637,
                flag11946,
                flag14301,
                flag14975,
                flag15315,
                flag15394,
                flag15424,
                flag15486,
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
          description:
            "*(DEPRECATED)*  Get Anthos Multi-Cloud server configuration for Azure",
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
            flag6719,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "node-pools",
          description:
            "*(DEPRECATED)*  Create and manage node pools in an Anthos cluster on Azure",
          subcommands: [
            {
              name: "create",
              description:
                "*(DEPRECATED)*  Create a node pool in an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag517,
                flag720,
                {
                  name: "--azure-availability-zone",
                  description:
                    "Azure availability zone where the node pool will be created",
                  args: {
                    name: "AZURE_AVAILABILITY_ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2090,
                flag2244,
                flag2247,
                flag2292,
                flag4044,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6659,
                flag7356,
                flag7652,
                flag7662,
                flag7897,
                flag10510,
                flag10533,
                flag10542,
                flag11637,
                flag11813,
                flag11816,
                flag11946,
                flag13163,
                flag14302,
                flag14493,
                flag14632,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the creation of the node pool, but don't actually perform it",
                },
                flag15424,
                flag15486,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the nodepool or fully qualified identifier for the nodepool.\n+\nTo set the `nodepool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "*(DEPRECATED)*  Delete a node pool in an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag434,
                flag720,
                flag1201,
                flag2090,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "Force delete an Azure node pool.\n  Deletion of the Azure node pool will succeed even if errors occur\n  during deleting in-node pool resources. Using this parameter may\n  result in orphaned resources in the node pool",
                },
                flag5699,
                flag6659,
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
                  "ID of the nodepool or fully qualified identifier for the nodepool.\n+\nTo set the `nodepool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "*(DEPRECATED)*  Describe a node pool in an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2090,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6659,
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
                  "ID of the nodepool or fully qualified identifier for the nodepool.\n+\nTo set the `nodepool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "list",
              description:
                "*(DEPRECATED)*  List node pools in an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2074,
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
                    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `--cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_azure/location`",
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
              description:
                "*(DEPRECATED)*  Update a node pool in an Anthos cluster on Azure",
              options: [
                flag42,
                flag46,
                flag517,
                flag720,
                flag1201,
                flag1486,
                flag2090,
                flag2292,
                flag4045,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6659,
                flag7356,
                flag7651,
                flag7896,
                flag10541,
                flag11637,
                flag11946,
                flag14301,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Validate the update of the node pool, but don't actually perform it",
                },
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the nodepool or fully qualified identifier for the nodepool.\n+\nTo set the `nodepool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
          ],
        },
        {
          name: "operations",
          description:
            "*(DEPRECATED)*  Manage Anthos Multi-Cloud long running operations for Azure",
          subcommands: [
            {
              name: "cancel",
              description: "*(DEPRECATED)*  Cancel an operation",
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
                flag6662,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
            {
              name: "describe",
              description: "*(DEPRECATED)*  Describe an operation",
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
                flag6662,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
            {
              name: "list",
              description: "*(DEPRECATED)*  List operations",
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
                flag6719,
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
              description: "*(DEPRECATED)*  Wait for an operation to complete",
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
                flag6662,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "bare-metal",
      description:
        "Deploy and manage Anthos clusters on bare metal for running containers",
      subcommands: [
        {
          name: "admin-clusters",
          description:
            "Create and manage admin clusters in Anthos on bare metal",
          subcommands: [
            {
              name: "create",
              description: "Create an Anthos on bare metal admin cluster",
              options: [
                flag42,
                flag46,
                {
                  name: "--admin-users",
                  description:
                    "Users that will be granted the view role on the admin cluster, providing view only access to the cluster",
                  args: {
                    name: "ADMIN_USERS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag519,
                flag570,
                flag720,
                flag1201,
                flag1206,
                flag2292,
                flag2464,
                flag2467,
                flag2469,
                flag2473,
                flag2479,
                flag3177,
                flag4019,
                flag4213,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6048,
                flag6050,
                flag6637,
                flag7356,
                flag7398,
                flag7410,
                flag7411,
                flag7412,
                flag7413,
                flag7450,
                flag7661,
                flag10031,
                flag11637,
                flag11946,
                flag13733,
                flag14975,
                flag15251,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an Anthos on bare metal admin cluster",
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
                flag6637,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "enroll",
              description: "Enroll an Anthos on bare metal admin cluster",
              options: [
                flag42,
                flag46,
                flag329,
                flag326,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6637,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "list",
              description: "List Anthos on bare metal admin clusters",
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
                flag6720,
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
              name: "query-version-config",
              description:
                "Query versions for creating or upgrading an Anthos on bare metal admin cluster",
              options: [
                flag42,
                flag46,
                {
                  name: "--admin-cluster",
                  description:
                    "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `--admin-cluster` on the command line",
                  args: {
                    name: "ADMIN_CLUSTER",
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
                flag6720,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "unenroll",
              description:
                "Unenroll an Anthos on bare metal admin cluster so that it is no longer managed by the Anthos On-Prem API",
              options: [
                flag42,
                flag46,
                flag443,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "If set, the unenrollment of a bare metal admin cluster resource will succeed even if errors occur during unenrollment",
                },
                flag5699,
                flag6637,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "update",
              description: "Update an Anthos on bare metal admin cluster",
              options: [
                flag42,
                flag46,
                flag570,
                flag720,
                flag1201,
                flag1206,
                flag2292,
                flag2467,
                flag2469,
                flag2473,
                flag3177,
                flag4019,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6049,
                flag6637,
                flag7356,
                flag7398,
                flag7449,
                flag7661,
                flag10031,
                flag11637,
                flag11946,
                flag14975,
                {
                  name: "--uri",
                  description: "Address of the proxy server",
                  args: { name: "URI", description: "String", suggestions: [] },
                },
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
          ],
        },
        {
          name: "clusters",
          description: "Create and manage Anthos clusters on bare metal",
          subcommands: [
            {
              name: "create",
              description: "Create an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag329,
                flag325,
                flag327,
                {
                  name: "--admin-users",
                  description:
                    "Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster",
                  args: {
                    name: "ADMIN_USERS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag519,
                flag570,
                flag720,
                {
                  name: "--bgp-address-pools",
                  description:
                    "BGP load balancer address pools configurations.\n+\nExamples:\n+\nTo specify configurations for two address pools `pool1` and `pool2`,\n+\n```\n$ {command} example_cluster\n      --bgp-address-pools 'pool=pool1,avoid-buggy-ips=True,manual-assign=True,addresses=192.168.1.1/32;192.168.1.2-192.168.1.3'\n      --bgp-address-pools 'pool=pool2,avoid-buggy-ips=False,manual-assign=False,addresses=192.168.2.1/32;192.168.2.2-192.168.2.3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
                  args: {
                    name: "BGP_ADDRESS_POOLS",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--bgp-asn",
                  description:
                    "BGP autonomous system number (ASN) of the cluster",
                  args: {
                    name: "BGP_ASN",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--bgp-load-balancer-node-configs",
                  description:
                    "BGP load balancer data plane node configurations.\n+\nExamples:\n+\nTo specify configurations for two nodes of IP `192.168.0.1` and `192.168.1.1`,\n+\n```\n$ {command} example_cluster\n      --bgp-load-balancer-node-configs 'node-ip=192.168.0.1,labels=KEY1=VALUE1;KEY2=VALUE2'\n      --bgp-load-balancer-node-configs 'node-ip=192.168.1.1,labels=KEY3=VALUE3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
                  args: {
                    name: "node-ip=IP,labels=KEY1=VALUE1;KEY2=VALUE2",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag1125,
                flag1126,
                flag1127,
                flag1128,
                {
                  name: "--bgp-peer-configs",
                  description:
                    "List of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node.\n+\nExamples:\n+\nTo specify configurations for two peers of BGP autonomous system number (ASN) 10000 and 20000,\n+\n```\n$ {command} example_cluster\n      --bgp-peer-configs 'asn=10000,ip=192.168.1.1,control-plane-nodes=192.168.1.2;192.168.1.3'\n      --bgp-peer-configs 'asn=20000,ip=192.168.2.1,control-plane-nodes=192.168.2.2;192.168.2.3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
                  args: {
                    name: "asn=ASN,ip=IP,control-plane-nodes=NODE_IP_1;NODE_IP_2",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag1201,
                flag1206,
                flag2292,
                {
                  name: "--container-runtime",
                  description:
                    "Container runtime which will be used in the bare metal user cluster",
                  args: {
                    name: "CONTAINER_RUNTIME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2464,
                flag2467,
                flag2469,
                flag2473,
                flag2474,
                flag2475,
                flag2479,
                flag3177,
                flag3550,
                flag3557,
                flag3579,
                {
                  name: "--enable-advanced-networking",
                  description:
                    "Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway",
                },
                flag4019,
                flag4213,
                {
                  name: "--enable-multi-nic-config",
                  description:
                    "If set, enable multiple network interfaces for your pods",
                },
                flag4309,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5783,
                flag6048,
                flag6050,
                flag6648,
                flag7356,
                flag7398,
                flag7410,
                flag7411,
                flag7412,
                flag7413,
                flag7450,
                flag7661,
                flag7834,
                flag7838,
                flag7839,
                flag7840,
                flag7841,
                flag7842,
                flag10031,
                flag11637,
                flag11946,
                flag13733,
                flag14975,
                flag15251,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag443,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                {
                  name: "--force",
                  description:
                    "If set, the operation will also apply to the child node pools. This flag is required if the cluster has any associated node pools",
                },
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "If set, the deletion of a bare metal user cluster resource will succeed even if errors occur during deletion",
                },
                flag5699,
                flag6648,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
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
              description: "Describe an Anthos cluster on bare metal",
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
                flag6648,
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
              name: "enroll",
              description: "Enroll an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag329,
                flag325,
                flag327,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6648,
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
              name: "list",
              description: "List Anthos clusters on bare metal",
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
                flag6720,
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
              name: "query-version-config",
              description:
                "Query versions for creating or upgrading an Anthos on bare metal user cluster",
              options: [
                flag42,
                flag46,
                flag329,
                flag326,
                flag328,
                flag1201,
                flag2074,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6720,
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
              description: "Update an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag130,
                {
                  name: "--admin-users",
                  description:
                    "Users that will be granted the cluster-admin role on the cluster, providing full access to the cluster",
                  args: {
                    name: "ADMIN_USERS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag441,
                flag570,
                flag720,
                {
                  name: "--bgp-address-pools",
                  description:
                    "BGP load balancer address pools configurations.\n+\nExamples:\n+\nTo specify configurations for two address pools `pool1` and `pool2`,\n+\n```\n$ {command} example_cluster\n      --bgp-address-pools 'pool=pool1,avoid-buggy-ips=True,manual-assign=True,addresses=192.168.1.1/32;192.168.1.2-192.168.1.3'\n      --bgp-address-pools 'pool=pool2,avoid-buggy-ips=False,manual-assign=False,addresses=192.168.2.1/32;192.168.2.2-192.168.2.3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
                  args: {
                    name: "BGP_ADDRESS_POOLS",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--bgp-asn",
                  description:
                    "BGP autonomous system number (ASN) of the cluster",
                  args: {
                    name: "BGP_ASN",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--bgp-load-balancer-node-configs",
                  description:
                    "BGP load balancer data plane node configurations.\n+\nExamples:\n+\nTo specify configurations for two nodes of IP `192.168.0.1` and `192.168.1.1`,\n+\n```\n$ {command} example_cluster\n      --bgp-load-balancer-node-configs 'node-ip=192.168.0.1,labels=KEY1=VALUE1;KEY2=VALUE2'\n      --bgp-load-balancer-node-configs 'node-ip=192.168.1.1,labels=KEY3=VALUE3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
                  args: {
                    name: "node-ip=IP,labels=KEY1=VALUE1;KEY2=VALUE2",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag1125,
                flag1126,
                flag1127,
                flag1128,
                {
                  name: "--bgp-peer-configs",
                  description:
                    "List of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node.\n+\nExamples:\n+\nTo specify configurations for two peers of BGP autonomous system number (ASN) 10000 and 20000,\n+\n```\n$ {command} example_cluster\n      --bgp-peer-configs 'asn=10000,ip=192.168.1.1,control-plane-nodes=192.168.1.2;192.168.1.3'\n      --bgp-peer-configs 'asn=20000,ip=192.168.2.1,control-plane-nodes=192.168.2.2;192.168.2.3'\n```\n+\nUse quote around the flag value to escape semicolon in the terminal",
                  args: {
                    name: "asn=ASN,ip=IP,control-plane-nodes=NODE_IP_1;NODE_IP_2",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag1201,
                flag1206,
                flag2292,
                flag2467,
                flag2469,
                flag2473,
                flag2474,
                flag2475,
                flag3177,
                flag3550,
                flag3557,
                flag3579,
                {
                  name: "--disable-sr-iov-config",
                  description: "If set, the SR-IOV operator won't be installed",
                },
                flag4019,
                {
                  name: "--enable-bgp-load-balancer-serialize-image-pulls",
                  description:
                    "If set, enable the Kubelet to pull multiple images at a time",
                },
                {
                  name: "--enable-control-plane-serialize-image-pulls",
                  description:
                    "If set, enable the Kubelet to pull multiple images at a time",
                },
                {
                  name: "--enable-metal-lb-load-balancer-serialize-image-pulls",
                  description:
                    "If set, enable the Kubelet to pull multiple images at a time",
                },
                flag4309,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6049,
                flag6648,
                flag7356,
                flag7398,
                flag7449,
                flag7834,
                flag7838,
                flag7839,
                flag7840,
                flag7841,
                flag7842,
                flag11637,
                flag11946,
                flag12546,
                flag14975,
                flag15315,
                flag15366,
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
          name: "node-pools",
          description:
            "Create and manage node pools in an Anthos cluster on bare metal",
          subcommands: [
            {
              name: "create",
              description:
                "Create a node pool in an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag521,
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag3607,
                flag3709,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6657,
                flag7356,
                flag10484,
                flag10509,
                flag10531,
                flag11637,
                flag11946,
                flag12476,
                flag12477,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "Delete a node pool in an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                {
                  name: "--allow-missing",
                  description:
                    "If set, and the Bare Metal Node Pool is not found, the request will succeed but no action will be taken",
                },
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "If set, the deletion of a Bare Metal Node Pool resource will succeed even if errors occur during deletion",
                },
                flag5699,
                flag6657,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Describe a node pool in an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6657,
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
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "enroll",
              description:
                "Enroll a node pool of a user cluster in Anthos on bare metal",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6657,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "list",
              description: "List node pools in an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2074,
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
                    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `--cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_bare_metal/location`",
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
              description:
                "Update a node pool in an Anthos cluster on bare metal",
              options: [
                flag42,
                flag46,
                flag441,
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag3607,
                flag3709,
                {
                  name: "--enable-serialize-image-pulls",
                  description:
                    "If set, enable the Kubelet to pull multiple images at a time",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6657,
                flag7356,
                flag10484,
                flag10509,
                flag10531,
                flag11637,
                flag11946,
                flag12476,
                flag12477,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
          ],
        },
        {
          name: "operations",
          description: "Manage Anthos on bare metal long running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe an operation",
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
                flag6663,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
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
                flag6720,
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
              description: "Poll an operation for completion",
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
                flag6663,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "binauthz",
      description:
        "Manage attestations for Binary Authorization on Google Cloud Platform",
      subcommands: [
        {
          name: "attestations",
          description:
            "Create and manage Google Binary Authorization attestations",
          subcommands: [
            {
              name: "create",
              description: "Create a Binary Authorization attestation",
              options: [
                flag42,
                flag46,
                flag689,
                flag736,
                flag735,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--note",
                  description:
                    "ID of the note or fully qualified identifier for the note.\n+\nTo set the `note` attribute:\n* provide the argument `--note` on the command line",
                  args: {
                    name: "NOTE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--note-project",
                  description:
                    "The Container Analysis project for the note.\n+\nTo set the `project` attribute:\n* provide the argument `--note` on the command line with a fully specified name;\n* provide the argument `--note-project` on the command line",
                  args: {
                    name: "NOTE_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--payload-file",
                  description:
                    "Path to file containing the payload over which the signature was\ncalculated.\n+\nThis defaults to the output of the standard payload command:\n+\n    $ {grandparent_command} create-signature-payload\n+\nNOTE: If you sign a payload with e.g. different whitespace or\nformatting, you must explicitly provide the payload content via this\nflag",
                  args: {
                    name: "PAYLOAD_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                {
                  name: "--public-key-id",
                  description:
                    "The ID of the public key that will be used to verify the signature\nof the created Attestation. This ID must match the one found on the\nAttestor resource(s) which will verify this Attestation.\n+\nFor PGP keys, this must be the version 4, full 160-bit fingerprint,\nexpressed as a 40 character hexadecimal string. See\nhttps://tools.ietf.org/html/rfc4880#section-12.2 for details",
                  args: {
                    name: "PUBLIC_KEY_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                {
                  name: "--signature-file",
                  description:
                    "Path to file containing the signature to store, or `-` to read\nsignature from stdin",
                  args: {
                    name: "SIGNATURE_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                {
                  name: "--validate",
                  description:
                    "Whether to validate that the Attestation can be verified by the\nprovided Attestor",
                },
                flag15424,
              ],
            },
            {
              name: "list",
              description: "List Binary Authorization attestations",
              options: [
                flag42,
                flag46,
                {
                  name: "--artifact-url",
                  description:
                    "Container URL. May be in the `gcr.io/repository/image` format, or may optionally contain the `http` or `https` scheme",
                  args: {
                    name: "ARTIFACT_URL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag736,
                flag735,
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
          name: "attestors",
          description:
            "Create and manage Google Binary Authorization Attestors",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add IAM policy binding to a Binary Authorization attestor",
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
                flag13137,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `attestor` attribute:\n* provide the argument `attestor` on the command line",
              },
            },
            {
              name: "create",
              description: "Create an Attestor",
              options: [
                flag42,
                flag46,
                {
                  name: "--attestation-authority-note",
                  description:
                    "ID of the note or fully qualified identifier for the note.\n+\nTo set the `note` attribute:\n* provide the argument `--attestation-authority-note` on the command line",
                  args: {
                    name: "ATTESTATION_AUTHORITY_NOTE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--attestation-authority-note-project",
                  description:
                    "The Container Analysis project for the note.\n+\nTo set the `project` attribute:\n* provide the argument `--attestation-authority-note` on the command line with a fully specified name;\n* provide the argument `--attestation-authority-note-project` on the command line",
                  args: {
                    name: "ATTESTATION_AUTHORITY_NOTE_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description: "A description for the attestor",
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
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `name` attribute:\n* provide the argument `ATTESTOR` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an Attestor",
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
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `name` attribute:\n* provide the argument `ATTESTOR` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an Attestor",
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
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `name` attribute:\n* provide the argument `ATTESTOR` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for an attestor",
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
              args: {
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `name` attribute:\n* provide the argument `ATTESTOR` on the command line",
              },
            },
            {
              name: "list",
              description: "List Attestors associated with the current project",
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
            {
              name: "public-keys",
              description:
                "Create and manage public keys associated with Attestation Authorities",
              subcommands: [
                {
                  name: "add",
                  description: "Add a public key to an Attestor",
                  options: [
                    flag42,
                    flag46,
                    flag736,
                    flag1201,
                    flag2160,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    {
                      name: "--keyversion",
                      description:
                        "ID of the CryptoKeyVersion or fully qualified identifier for the CryptoKeyVersion.\n+\nTo set the `version` attribute:\n* provide the argument `--keyversion` on the command line",
                      args: {
                        name: "KEYVERSION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--keyversion-key",
                      description:
                        "The key of the CryptoKeyVersion.\n+\nTo set the `key` attribute:\n* provide the argument `--keyversion` on the command line with a fully specified name;\n* provide the argument `--keyversion-key` on the command line",
                      args: {
                        name: "KEYVERSION_KEY",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--keyversion-keyring",
                      description:
                        "The keyring of the CryptoKeyVersion.\n+\nTo set the `keyring` attribute:\n* provide the argument `--keyversion` on the command line with a fully specified name;\n* provide the argument `--keyversion-keyring` on the command line",
                      args: {
                        name: "KEYVERSION_KEYRING",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--keyversion-location",
                      description:
                        "The location of the CryptoKeyVersion.\n+\nTo set the `location` attribute:\n* provide the argument `--keyversion` on the command line with a fully specified name;\n* provide the argument `--keyversion-location` on the command line",
                      args: {
                        name: "KEYVERSION_LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--keyversion-project",
                      description:
                        "Project ID of the Google Cloud project for the CryptoKeyVersion.\n+\nTo set the `project` attribute:\n* provide the argument `--keyversion` on the command line with a fully specified name;\n* provide the argument `--keyversion-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
                      args: {
                        name: "KEYVERSION_PROJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    {
                      name: "--pgp-public-key-file",
                      description:
                        "The path to the file containing the ASCII-armored PGP public key to add. Use a full or relative path to a local file containing the value of pgp_public_key_file",
                      args: {
                        name: "PGP_PUBLIC_KEY_FILE",
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:FileContents",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--pkix-public-key-algorithm",
                      description:
                        "The signing algorithm of the associated key. This will be used to\nverify the signatures associated with this key. _PKIX_PUBLIC_KEY_ALGORITHM_ must be one of: *ec-sign-p256-sha256*, *ec-sign-p384-sha384*, *ec-sign-p521-sha512*, *ecdsa-p256-sha256*, *ecdsa-p384-sha384*, *ecdsa-p521-sha512*, *ml-dsa-65*, *rsa-pss-2048-sha256*, *rsa-pss-3072-sha256*, *rsa-pss-4096-sha256*, *rsa-pss-4096-sha512*, *rsa-sign-pkcs1-2048-sha256*, *rsa-sign-pkcs1-3072-sha256*, *rsa-sign-pkcs1-4096-sha256*, *rsa-sign-pkcs1-4096-sha512*, *rsa-sign-pss-2048-sha256*, *rsa-sign-pss-3072-sha256*, *rsa-sign-pss-4096-sha256*, *rsa-sign-pss-4096-sha512*",
                      args: {
                        name: "PKIX_PUBLIC_KEY_ALGORITHM",
                        description: "String",
                        suggestions: [
                          "ec-sign-p256-sha256",
                          "ec-sign-p384-sha384",
                          "ec-sign-p521-sha512",
                          "ecdsa-p256-sha256",
                          "ecdsa-p384-sha384",
                          "ecdsa-p521-sha512",
                          "ml-dsa-65",
                          "rsa-pss-2048-sha256",
                          "rsa-pss-3072-sha256",
                          "rsa-pss-4096-sha256",
                          "rsa-pss-4096-sha512",
                          "rsa-sign-pkcs1-2048-sha256",
                          "rsa-sign-pkcs1-3072-sha256",
                          "rsa-sign-pkcs1-4096-sha256",
                          "rsa-sign-pkcs1-4096-sha512",
                          "rsa-sign-pss-2048-sha256",
                          "rsa-sign-pss-3072-sha256",
                          "rsa-sign-pss-4096-sha256",
                          "rsa-sign-pss-4096-sha512",
                        ],
                      },
                    },
                    {
                      name: "--pkix-public-key-file",
                      description:
                        "The path to the file containing the PKIX public key to add. Use a full or relative path to a local file containing the value of pkix_public_key_file",
                      args: {
                        name: "PKIX_PUBLIC_KEY_FILE",
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:FileContents",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    {
                      name: "--public-key-id-override",
                      description:
                        "If provided, the ID to replace the default API-generated one. All IDs\nmust be valid URIs as defined by RFC 3986\n(https://tools.ietf.org/html/rfc3986).\n+\nWhen creating Attestations to be verified by this key, one must always\nprovide this custom ID as the public key ID",
                      args: {
                        name: "PUBLIC_KEY_ID_OVERRIDE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "remove",
                  description: "Remove a public key from an Attestor",
                  options: [
                    flag42,
                    flag46,
                    flag736,
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
                    name: "PUBLIC_KEY_ID",
                    description: "The ID of the public key to remove",
                  },
                },
                {
                  name: "update",
                  description: "Update a public key on an Attestor",
                  options: [
                    flag42,
                    flag46,
                    flag736,
                    flag1201,
                    flag2160,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    {
                      name: "--pgp-public-key-file",
                      description:
                        "The path to a file containing the updated ASCII-armored PGP public key. Use a full or relative path to a local file containing the value of pgp_public_key_file",
                      args: {
                        name: "PGP_PUBLIC_KEY_FILE",
                        description:
                          "Googlecloudsdk.calliope.arg_parsers:FileContents",
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
                    name: "PUBLIC_KEY_ID",
                    description: "The ID of the public key to update",
                  },
                },
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove IAM policy binding of a Binary Authorization attestor",
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
                flag13138,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `attestor` attribute:\n* provide the argument `attestor` on the command line",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy for an attestor",
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
              args: [
                {
                  name: "ATTESTOR_NAME",
                  description:
                    "The name of the attestor whose IAM policy will be updated",
                },
                {
                  name: "POLICY_FILE",
                  description:
                    "The JSON or YAML file containing the IAM policy",
                },
              ],
            },
            {
              name: "update",
              description: "Update an existing Attestor",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--description",
                  description: "The new description for the attestor",
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
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ATTESTOR",
                description:
                  "ID of the attestor or fully qualified identifier for the attestor.\n+\nTo set the `name` attribute:\n* provide the argument `ATTESTOR` on the command line",
              },
            },
          ],
        },
        {
          name: "create-signature-payload",
          description: "Create a JSON container image signature object",
          options: [
            flag42,
            flag46,
            flag689,
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
        },
        {
          name: "policy",
          description: "Create and manage Google Binary Authorization policies",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add IAM policy binding to a Binary Authorization policy",
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
                flag13137,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "export",
              description:
                "Export the Binary Authorization policy for the current project",
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
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a Binary Authorization policy",
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
            {
              name: "import",
              description:
                "Import a Binary Authorization policy to the current project",
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
                {
                  name: "--strict-validation",
                  description:
                    "Whether to perform additional checks on the validity of policy contents",
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "POLICY_FILE",
                description:
                  "The file containing the YAML-formatted policy description",
              },
            },
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove IAM policy binding of a Binary Authorization policy",
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
                flag13138,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a Binary Authorization policy",
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
                name: "POLICY_FILE",
                description: "The JSON or YAML file containing the IAM policy",
              },
            },
          ],
        },
      ],
    },
    {
      name: "clusters",
      description: "Deploy and teardown Google Kubernetes Engine clusters",
      subcommands: [
        {
          name: "check-autopilot-compatibility",
          description: "Check autopilot compatibility of a running cluster",
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
            flag6607,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12297,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: { name: "NAME", description: "The name of this cluster" },
        },
        {
          name: "create",
          description: "Create a cluster for running containers",
          options: [
            flag20,
            flag42,
            flag46,
            {
              name: "--additional-zones",
              description:
                "(DEPRECATED) The set of additional zones in which the specified node footprint should be\nreplicated. All zones must be in the same region as the cluster's primary zone.\nIf additional-zones is not specified, all nodes will be in the cluster's primary\nzone.\n+\nNote that `NUM_NODES` nodes will be created in each zone, such that if you\nspecify `--num-nodes=4` and choose one additional zone, 8 nodes will be created.\n+\nMultiple locations can be specified, separated by commas. For example:\n+\n  $ {command} example-cluster --zone us-central1-a --additional-zones us-central1-b,us-central1-c\n+\nThis flag is deprecated. Use --node-locations=PRIMARY_ZONE,[ZONE,...] instead",
              args: { name: "ZONE", description: "List", suggestions: [] },
            },
            flag313,
            {
              name: "--addons",
              description:
                "Addons\n(https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.AddonsConfig)\nare additional Kubernetes cluster components. Addons specified by this flag will\nbe enabled. The others will be disabled. Default addons: HttpLoadBalancing, HorizontalPodAutoscaling.\nThe Istio addon is deprecated and removed.\nFor more information and migration, see https://cloud.google.com/istio/docs/istio-on-gke/migrate-to-anthos-service-mesh.\nADDON must be one of: HttpLoadBalancing, HorizontalPodAutoscaling, KubernetesDashboard, NetworkPolicy, NodeLocalDNS, ConfigConnector, GcePersistentDiskCsiDriver, GcpFilestoreCsiDriver, BackupRestore, GcsFuseCsiDriver, ParallelstoreCsiDriver, HighScaleCheckpointing, LustreCsiDriver, RayOperator, SlurmOperator, NodeReadinessController, CloudRun",
              args: {
                name: "ADDON[=ENABLED|DISABLED]",
                description: "Dict",
                suggestions: [],
              },
            },
            flag370,
            {
              name: "--alpha-cluster-feature-gates",
              description:
                "Selectively enable or disable Kubernetes alpha and beta kubernetesfeature gates on alpha GKE cluster.\nAlpha clusters are not covered by the Kubernetes Engine SLA and should not be used for production workloads",
              args: {
                name: "FEATURE=true|false",
                description: "List",
                suggestions: [],
              },
            },
            flag540,
            flag720,
            flag843,
            flag891,
            flag892,
            flag893,
            flag895,
            flag896,
            flag897,
            flag898,
            flag899,
            flag900,
            flag901,
            flag902,
            flag904,
            flag905,
            flag907,
            flag908,
            flag909,
            flag941,
            flag1201,
            flag1208,
            flag1244,
            flag1249,
            flag1251,
            flag1998,
            flag2029,
            flag2034,
            flag2032,
            flag2033,
            flag2040,
            {
              name: "--cluster-secondary-range-name",
              description:
                "Set the secondary range to be used as the source for pod IPs. Alias\nranges will be allocated from this secondary range.  NAME must be the\nname of an existing secondary range in the cluster subnetwork.\n+\n\nCannot be specified unless '--enable-ip-alias' option is also specified.\nCannot be used with '--create-subnetwork' option",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            flag2060,
            flag2240,
            flag2292,
            flag2421,
            flag2459,
            flag2460,
            {
              name: "--create-subnetwork",
              description:
                "Create a new subnetwork for the cluster. The name and range of the\nsubnetwork can be customized via optional 'name' and 'range' key-value\npairs.\n+\n'name' specifies the name of the subnetwork to be created.\n+\n'range' specifies the IP range for the new subnetwork. This can either\nbe a netmask size (e.g. '/20') or a CIDR range (e.g. '10.0.0.0/20').\nIf a netmask size is specified, the IP is automatically taken from the\nfree space in the cluster's network.\n+\nExamples:\n+\nCreate a new subnetwork with a default name and size.\n+\n  $ {command} --create-subnetwork \"\"\n+\nCreate a new subnetwork named \"my-subnet\" with netmask of size 21.\n+\n  $ {command} --create-subnetwork name=my-subnet,range=/21\n+\nCreate a new subnetwork with a default name with the primary range of\n10.100.0.0/16.\n+\n  $ {command} --create-subnetwork range=10.100.0.0/16\n+\nCreate a new subnetwork with the name \"my-subnet\" with a default range.\n+\n  $ {command} --create-subnetwork name=my-subnet\n+\n\nCannot be specified unless '--enable-ip-alias' option is also specified.\nCannot be used in conjunction with '--subnetwork' option",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--data-cache-count",
              description:
                "Specifies the number of local SSDs to be utilized for GKE Data Cache in the cluster",
              args: {
                name: "DATA_CACHE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag2741,
            {
              name: "--dataplane-optimization-mode",
              description:
                "Select scalability mode for dataplane v2. _DATAPLANE_OPTIMIZATION_MODE_ must be one of:\n+\n*DISABLED*::: Selects standard mode for the dataplane v2.\n*SCALE_OPTIMIZED*::: Selects scaled optimized mode for the dataplane v2.\n:::\n+",
              args: {
                name: "DATAPLANE_OPTIMIZATION_MODE",
                description: "String",
                suggestions: ["DISABLED", "SCALE_OPTIMIZED"],
              },
            },
            flag2820,
            {
              name: "--default-max-pods-per-node",
              description:
                "The default max number of pods per node for node pools in the cluster.\n+\nThis flag sets the default max-pods-per-node for node pools in the cluster. If\n--max-pods-per-node is not specified explicitly for a node pool, this flag\nvalue will be used.\n+\nMust be used in conjunction with '--enable-ip-alias'",
              args: {
                name: "DEFAULT_MAX_PODS_PER_NODE",
                description: "Int",
                suggestions: [],
              },
            },
            flag3540,
            flag3560,
            flag3561,
            {
              name: "--disable-default-snat",
              description:
                "Disable default source NAT rules applied in cluster nodes.\n+\nBy default, cluster nodes perform source network address translation (SNAT)\nfor packets sent from Pod IP address sources to destination IP addresses\nthat are not in the non-masquerade CIDRs list.\nFor more details about SNAT and IP masquerading, see:\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works\nSNAT changes the packet's source IP address to the node's internal IP address.\n+\nWhen this flag is set, GKE does not perform SNAT for packets sent to any destination.\nYou must set this flag if the cluster uses privately reused public IPs.\n+\nThe --disable-default-snat flag is only applicable to private GKE clusters, which are\ninherently VPC-native. Thus, --disable-default-snat requires that you also set\n--enable-ip-alias and --enable-private-nodes",
            },
            flag3573,
            flag3580,
            flag3586,
            flag3667,
            flag3672,
            flag4017,
            flag4024,
            flag4025,
            flag4039,
            flag4035,
            flag4036,
            flag4037,
            flag4038,
            {
              name: "--enable-autorepair",
              description:
                "Enable node autorepair feature for a cluster's default node pool(s).\n+\n  $ {command} example-cluster --enable-autorepair\n+\nNode autorepair is enabled by default for clusters using COS, COS_CONTAINERD, UBUNTU or UBUNTU_CONTAINERD\nas a base image, use --no-enable-autorepair to disable.\n+\nSee https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair for more info",
            },
            flag4046,
            {
              name: "--enable-autoupgrade",
              description:
                "Sets autoupgrade feature for a cluster's default node pool(s).\n+\n  $ {command} example-cluster --enable-autoupgrade\n+\nSee https://cloud.google.com/kubernetes-engine/docs/node-auto-upgrades for more info.\n+\nEnabled by default, use *--no-enable-autoupgrade* to disable",
            },
            flag4052,
            flag4057,
            flag4063,
            {
              name: "--enable-cloud-logging",
              description:
                "(DEPRECATED) Automatically send logs from the cluster to the Google Cloud Logging API.\n+\nLegacy Logging and Monitoring is deprecated. Thus, flag `--enable-cloud-logging` is also deprecated and will be removed in an upcoming release. Please use `--logging` (optionally with `--monitoring`). For more details, please read: https://cloud.google.com/kubernetes-engine/docs/concepts/about-logs and https://cloud.google.com/kubernetes-engine/docs/how-to/configure-metrics",
            },
            {
              name: "--enable-cloud-monitoring",
              description:
                "(DEPRECATED) Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting.\n+\nLegacy Logging and Monitoring is deprecated. Thus, flag `--enable-cloud-monitoring` is also deprecated. Please use `--monitoring` (optionally with `--logging`). For more details, please read: https://cloud.google.com/kubernetes-engine/docs/how-to/configure-metrics and https://cloud.google.com/kubernetes-engine/docs/concepts/about-logs",
            },
            {
              name: "--enable-cloud-run-alpha",
              description:
                "Enable Cloud Run alpha features on this cluster. Selecting this\noption will result in the cluster having all Cloud Run alpha API groups and\nfeatures turned on.\n+\nCloud Run alpha clusters are not covered by the Cloud Run SLA and should not be\nused for production workloads",
            },
            flag4074,
            {
              name: "--enable-confidential-storage",
              description:
                "Enable confidential storage for the cluster. Enabling Confidential Storage will\ncreate boot disk with confidential mode",
            },
            {
              name: "--enable-cost-allocation",
              description:
                "Enable the cost management feature.\n+\nWhen enabled, you can get informational GKE cost breakdowns by cluster,\nnamespace and label in your billing data exported to BigQuery\n(https://cloud.google.com/billing/docs/how-to/export-data-bigquery)",
            },
            {
              name: "--enable-dataplane-v2",
              description:
                "Enables the new eBPF dataplane for GKE clusters that is required for\nnetwork security, scalability and visibility features",
            },
            flag4097,
            flag4098,
            flag4105,
            flag4110,
            flag4125,
            flag4129,
            flag4135,
            flag4142,
            flag4150,
            flag4151,
            flag4158,
            flag4159,
            flag4160,
            flag4163,
            flag4164,
            {
              name: "--enable-ip-alias",
              description:
                "--enable-ip-alias creates a VPC-native cluster. If you set this option, you\ncan optionally specify the IP address ranges to use for Pods and Services.\nFor instructions, see\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips.\n+\n--no-enable-ip-alias creates a routes-based cluster. This type of cluster\nroutes traffic between Pods using Google Cloud Routes. This option is not\nrecommended; use the default VPC-native cluster type instead. For instructions,\nsee\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/routes-based-cluster\n+\nNote: For IPv6-only clusters, these flags are a no-op as IP Aliases do not\napply, and any specified IP address ranges for Pods and Services will be\nignored.\n+\nYou can't specify both --enable-ip-alias and --no-enable-ip-alias.\nIf you omit both --enable-ip-alias and --no-enable-ip-alias,\nthe default is a VPC-native cluster",
            },
            flag4175,
            flag4176,
            flag4179,
            {
              name: "--enable-kubernetes-alpha",
              description:
                "Enable Kubernetes alpha features on this cluster. Selecting this\noption will result in the cluster having all Kubernetes alpha API groups and\nfeatures turned on. Cluster upgrades (both manual and automatic) will be\ndisabled and the cluster will be automatically deleted after 30 days.\n+\nAlpha clusters are not covered by the Kubernetes Engine SLA and should not be\nused for production workloads",
            },
            flag4182,
            flag4185,
            flag4190,
            flag4191,
            flag4211,
            flag4214,
            flag4216,
            flag4225,
            {
              name: "--enable-nested-virtualization",
              description:
                "Enables the use of nested virtualization on the default initial node pool.\nDefaults to `false`. Can only be enabled on UBUNTU_CONTAINERD base image\nor COS_CONTAINERD base image with version 1.28.4-gke.1083000 and above",
            },
            flag4232,
            flag4233,
            flag4249,
            flag4256,
            flag4264,
            flag4280,
            flag4282,
            {
              name: "--enable-resource-consumption-metering",
              description:
                "Enable resource consumption metering on this cluster.\n+\nWhen enabled, a table will be created in the specified BigQuery dataset to store\nresource consumption data. The resulting table can be joined with the resource\nusage table or with BigQuery billing export.\n+\nResource consumption metering is enabled unless `--no-enable-resource-\nconsumption-metering` is set",
            },
            flag4296,
            flag4294,
            flag4300,
            flag4298,
            flag4304,
            flag4305,
            flag4313,
            flag4329,
            {
              name: "--ephemeral-storage-local-ssd",
              description:
                "Parameters for the ephemeral storage filesystem.\nIf unspecified, ephemeral storage is backed by the boot disk.\n+\nExamples:\n+\n  $ {command} example_cluster --ephemeral-storage-local-ssd count=2\n+\n'count' specifies the number of local SSDs to use to back ephemeral\nstorage. Local SDDs use NVMe interfaces. For first- and second-generation\nmachine types, a nonzero count field is required for local ssd to be configured.\nFor third-generation machine types, the count field is optional because the count\nis inferred from the machine type.\n+\nSee https://cloud.google.com/compute/docs/disks/local-ssd for more information",
              args: {
                name: "EPHEMERAL_STORAGE_LOCAL_SSD",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4558,
            flag4559,
            flag4900,
            flag4902,
            flag4917,
            flag5091,
            flag5131,
            flag5281,
            flag5453,
            flag5512,
            flag5691,
            flag5671,
            flag5677,
            flag5699,
            flag5726,
            {
              name: "--ipv6-access-type",
              description:
                "IPv6 access type of the subnetwork. Defaults to 'external'. _IPV6_ACCESS_TYPE_ must be one of: *external*, *internal*",
              args: {
                name: "IPV6_ACCESS_TYPE",
                description: "String",
                suggestions: ["external", "internal"],
              },
            },
            {
              name: "--issue-client-certificate",
              description:
                "Issue a TLS client certificate with admin permissions.\n+\nWhen enabled, the certificate and private key pair will be present in\nMasterAuth field of the Cluster object. For cluster versions before 1.12, a\nclient certificate will be issued by default. As of 1.12, client certificates\nare disabled by default",
            },
            flag6397,
            {
              name: "--local-nvme-ssd-block",
              description:
                "Adds the requested local SSDs on all nodes in default node pool(s) in the new cluster.\n+\nExamples:\n+\n  $ {command} example_cluster --local-nvme-ssd-block count=2\n+\n'count' must be between 1-8\n+\n\nNew nodes, including ones created by resize or recreate, will have these local SSDs.\n+\nFor first- and second-generation machine types, a nonzero count field is\nrequired for local ssd to be configured. For third-generation machine types, the\ncount field is optional because the count is inferred from the machine type.\n+\nSee https://cloud.google.com/compute/docs/disks/local-ssd for more information",
              args: {
                name: "LOCAL_NVME_SSD_BLOCK",
                description: "Dict",
                suggestions: [],
              },
            },
            flag6566,
            flag6607,
            flag6579,
            flag7356,
            flag7393,
            flag7387,
            flag7416,
            flag7457,
            flag7458,
            {
              name: "--maintenance-window",
              description:
                "Set a time of day when you prefer maintenance to start on this cluster. For example:\n+\n  $ {command} example-cluster --maintenance-window=12:43\n+\nThe time corresponds to the UTC time zone, and must be in HH:MM format.\n+\nNon-emergency maintenance will occur in the 4 hour block starting at the\nspecified time.\n+\nThis is mutually exclusive with the recurring maintenance windows\nand will overwrite any existing window. Compatible with maintenance\nexclusions",
              args: {
                name: "START_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7491,
            flag7495,
            flag7509,
            flag7515,
            flag7565,
            flag7577,
            flag7604,
            flag7626,
            flag7648,
            flag7653,
            {
              name: "--max-nodes-per-pool",
              description:
                "The maximum number of nodes to allocate per default initial node pool. Kubernetes Engine will automatically create enough nodes pools such that each node pool contains less than `--max-nodes-per-pool` nodes. Defaults to 1000 nodes, but can be set as low as 100 nodes per pool on initial create",
              args: {
                name: "MAX_NODES_PER_POOL",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7663,
            {
              name: "--max-surge-upgrade",
              description:
                "Number of extra (surge) nodes to be created on each upgrade of a node pool.\n+\nSpecifies the number of extra (surge) nodes to be created during this node\npool's upgrades. For example, running the following command will result in\ncreating an extra node each time the node pool is upgraded:\n+\n  $ {command} example-cluster --max-surge-upgrade=1 --max-unavailable-upgrade=0\n+\nMust be used in conjunction with '--max-unavailable-upgrade'",
              args: {
                name: "MAX_SURGE_UPGRADE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--max-unavailable-upgrade",
              description:
                "Number of nodes that can be unavailable at the same time on each upgrade of a\nnode pool.\n+\nSpecifies the number of nodes that can be unavailable at the same time while\nthis node pool is being upgraded. For example, running the following command\nwill result in having 3 nodes being upgraded in parallel (1 + 2), but keeping\nalways at least 3 (5 - 2) available each time the node pool is upgraded:\n+\n   $ {command} example-cluster --num-nodes=5 --max-surge-upgrade=1      --max-unavailable-upgrade=2\n+\nMust be used in conjunction with '--max-surge-upgrade'",
              args: {
                name: "MAX_UNAVAILABLE_UPGRADE",
                description: "Int",
                suggestions: [],
              },
            },
            flag7756,
            flag7827,
            flag7812,
            flag7874,
            flag7883,
            {
              name: "--min-cpu-platform",
              description:
                'When specified, the nodes for the new cluster\'s default node pool will be\nscheduled on host with specified CPU architecture or a newer one.\n+\nExamples:\n+\n  $ {command} example-cluster --min-cpu-platform=PLATFORM\n+\nTo list available CPU platforms in given zone, run:\n+\n  $ gcloud beta compute zones describe ZONE --format="value(availableCpuPlatforms)"\n+\nCPU platform selection is available only in selected zones',
              args: {
                name: "PLATFORM",
                description: "String",
                suggestions: [],
              },
            },
            flag7893,
            flag7898,
            flag8016,
            flag8262,
            flag8197,
            {
              name: "--node-architecture-taint-behavior",
              description:
                "Control how architecture taint should be applied to nodes in default node pool(s) in new\ncluster.\n+\n  Supported values:\n    * unspecified: Default behavior, currently the same as `arm`.\n    * arm: kubernetes.io/arch=arm:NoSchedule taint will be added for ARM nodes.\n    * none: No architecture taint will be applied.\n+\n\nExamples:\n+\n  $ {command} example-cluster --node-architecture-taint-behavior=none\n+\nTo read more about node-taints, see https://cloud.google.com/kubernetes-engine/docs/node-taints.\n+\n_NODE_ARCHITECTURE_TAINT_BEHAVIOR_ must be one of: *unspecified*, *arm*, *none*",
              args: {
                name: "NODE_ARCHITECTURE_TAINT_BEHAVIOR",
                description: "String",
                suggestions: ["unspecified", "arm", "none"],
              },
            },
            flag10494,
            {
              name: "--node-labels",
              description:
                "Applies the given Kubernetes labels on all nodes in the new node pool.\n+\nExamples:\n+\n  $ {command} example-cluster --node-labels=label-a=value1,label-2=value2\n+\nUpdating the node pool's --node-labels flag applies the labels to the Kubernetes Node objects for existing nodes in-place; it does not re-create or replace nodes. New nodes, including ones created by resizing or re-creating nodes, will have these labels on the Kubernetes API Node object. The labels can be used in the `nodeSelector` field. See [](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for examples.\n+\nNote that Kubernetes labels, intended to associate cluster components\nand resources with one another and manage resource lifecycles, are different\nfrom Google Kubernetes Engine labels that are used for the purpose of tracking\nbilling and usage information",
              args: {
                name: "NODE_LABEL",
                description: "Dict",
                suggestions: [],
              },
            },
            flag10515,
            {
              name: "--node-taints",
              description:
                "Applies the given kubernetes taints on all nodes in default node pool(s) in new\ncluster, which can be used with tolerations for pod scheduling.\n+\nExamples:\n+\n  $ {command} example-cluster --node-taints=key1=val1:NoSchedule,key2=val2:PreferNoSchedule\n+\nTo read more about node-taints, see https://cloud.google.com/kubernetes-engine/docs/node-taints",
              args: {
                name: "NODE_TAINT",
                description: "Dict",
                suggestions: [],
              },
            },
            flag10544,
            flag10576,
            {
              name: "--num-nodes",
              description:
                "The number of nodes to be created in each of the cluster's zones",
              args: { name: "NUM_NODES", description: "Int", suggestions: [] },
            },
            flag11171,
            flag11175,
            flag11249,
            flag11305,
            {
              name: "--placement-type",
              description:
                "Placement type allows to define the type of node placement within the default\nnode pool of this cluster.\n+\n`UNSPECIFIED` - No requirements on the placement of nodes. This is the\ndefault option.\n+\n`COMPACT` - GKE will attempt to place the nodes in a close proximity to each\nother. This helps to reduce the communication latency between the nodes, but\nimposes additional limitations on the node pool size.\n+\n  $ {command} example-cluster --placement-type=COMPACT\n+\n_PLACEMENT_TYPE_ must be one of: *UNSPECIFIED*, *COMPACT*",
              args: {
                name: "PLACEMENT_TYPE",
                description: "String",
                suggestions: ["UNSPECIFIED", "COMPACT"],
              },
            },
            {
              name: "--preemptible",
              description:
                "Create nodes using preemptible VM instances in the new cluster.\n+\n  $ {command} example-cluster --preemptible\n+\nNew nodes, including ones created by resize or recreate, will use preemptible\nVM instances. See https://cloud.google.com/kubernetes-engine/docs/preemptible-vm\nfor more information on how to use Preemptible VMs with Kubernetes Engine",
            },
            flag11586,
            flag11592,
            flag11637,
            flag11946,
            flag12297,
            {
              name: "--release-channel",
              description:
                "Release channel a cluster is subscribed to.\n+\nIf left unspecified and a version is specified, the cluster is enrolled in the\nmost mature release channel where the version is available (first checking\nSTABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel and\nno version is specified, the cluster is enrolled in the REGULAR channel with\nits default version.\nWhen a cluster is subscribed to a release channel, Google maintains both the\nmaster version and the node version. Node auto-upgrade is enabled by default\nfor release channel clusters and can be controlled via [upgrade-scope\nexclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#scope_of_maintenance_to_exclude).\n+\n_CHANNEL_ must be one of:\n+\n*None*::: Use 'None' to opt-out of any release channel.\n+\n*extended*::: Clusters subscribed to 'extended' can remain on a minor version for 24 months\nfrom when the minor version is made available in the Regular channel.\n+\n*rapid*::: 'rapid' channel is offered on an early access basis for customers\nwho want to test new releases.\n+\nWARNING: Versions available in the 'rapid' channel may be subject\nto unresolved issues with no known workaround and are not subject\nto any SLAs.\n+\n*regular*::: Clusters subscribed to 'regular' receive versions that are\nconsidered GA quality. 'regular' is intended for production users\nwho want to take advantage of new features.\n+\n*stable*::: Clusters subscribed to 'stable' receive versions that are known to\nbe stable and reliable in production.\n+\n:::\n+",
              args: {
                name: "CHANNEL",
                description: "String",
                suggestions: ["None", "extended", "rapid", "regular", "stable"],
              },
            },
            flag12929,
            {
              name: "--reservation-affinity",
              description:
                "The type of the reservation for the default initial node pool. _RESERVATION_AFFINITY_ must be one of: *any*, *none*, *specific*, *any-reservation-then-fail*",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "String",
                suggestions: [
                  "any",
                  "none",
                  "specific",
                  "any-reservation-then-fail",
                ],
              },
            },
            {
              name: "--resource-manager-tags",
              description:
                "Applies the specified comma-separated resource manager tags that has the\nGCE_FIREWALL purpose to all nodes in the new default node pool(s) of a new cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --resource-manager-tags=tagKeys/1234=tagValues/2345\n  $ {command} example-cluster --resource-manager-tags=my-project/key1=value1\n  $ {command} example-cluster --resource-manager-tags=12345/key1=value1,23456/key2=value2\n  $ {command} example-cluster --resource-manager-tags=\n+\nAll nodes, including nodes that are resized or re-created, will have the\nspecified tags on the corresponding Instance object in the Compute Engine API.\nYou can reference these tags in network firewall policy rules. For instructions,\nsee https://cloud.google.com/firewall/docs/use-tags-for-firewalls",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag13031,
            flag13372,
            flag13410,
            flag13411,
            flag13430,
            flag13448,
            flag13522,
            flag13502,
            flag13505,
            {
              name: "--services-ipv4-cidr",
              description:
                "Set the IP range for the services IPs.\n+\nCan be specified as a netmask size (e.g. '/20') or as in CIDR notion\n(e.g. '10.100.0.0/20'). If given as a netmask size, the IP range will\nbe chosen automatically from the available space in the network.\n+\nIf unspecified, the services CIDR range will be chosen with a default\nmask size.\n+\nCannot be specified unless '--enable-ip-alias' option is also specified",
              args: { name: "CIDR", description: "String", suggestions: [] },
            },
            {
              name: "--services-secondary-range-name",
              description:
                "Set the secondary range to be used for services (e.g. ClusterIPs).\nNAME must be the name of an existing secondary range in the cluster\nsubnetwork.\n+\n\nCannot be specified unless '--enable-ip-alias' option is also specified.\nCannot be used with '--create-subnetwork' option",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            flag13748,
            flag13757,
            {
              name: "--spot",
              description:
                "Create nodes using spot VM instances in the new cluster.\n+\n  $ {command} example-cluster --spot\n+\nNew nodes, including ones created by resize or recreate, will use spot\nVM instances",
            },
            flag14331,
            {
              name: "--storage-pools",
              description:
                "A list of storage pools where the cluster's boot disks will be provisioned.\n+\nSTORAGE_POOL must be in the format\nprojects/project/zones/zone/storagePools/storagePool",
              args: {
                name: "STORAGE_POOL",
                description: "List",
                suggestions: [],
              },
            },
            flag14542,
            flag14588,
            {
              name: "--tags",
              description:
                "Applies the given Compute Engine tags (comma separated) on all nodes in the new\nnode-pool.\n+\nExamples:\n+\n  $ {command} example-cluster --tags=tag1,tag2\n+\nNew nodes, including ones created by resize or recreate, will have these tags\non the Compute Engine API instance object and can be used in firewall rules.\nSee https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/create\nfor examples",
              args: { name: "TAG", description: "List", suggestions: [] },
            },
            flag14854,
            flag14879,
            flag14966,
            flag14967,
            flag14975,
            flag15315,
            flag15341,
            flag15424,
            flag15639,
            flag15642,
            flag15649,
            flag15698,
          ],
          args: {
            name: "NAME",
            description:
              "The name of the cluster to create.\n+\nThe name may contain only lowercase alphanumerics and '-', must start with a\nletter and end with an alphanumeric, and must be no longer than 40\ncharacters",
          },
        },
        {
          name: "create-auto",
          description: "Create an Autopilot cluster for running containers",
          options: [
            flag42,
            flag46,
            flag313,
            flag370,
            flag540,
            flag720,
            flag843,
            flag891,
            flag892,
            flag896,
            flag902,
            flag905,
            flag1201,
            flag1208,
            flag1244,
            flag2029,
            flag2040,
            {
              name: "--cluster-secondary-range-name",
              description:
                "Set the secondary range to be used as the source for pod IPs. Alias\nranges will be allocated from this secondary range.  NAME must be the\nname of an existing secondary range in the cluster subnetwork.\n+\nCannot be used with '--create-subnetwork' option",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            flag2060,
            flag2240,
            flag2292,
            flag2421,
            flag2459,
            flag2460,
            {
              name: "--create-subnetwork",
              description:
                "Create a new subnetwork for the cluster. The name and range of the\nsubnetwork can be customized via optional 'name' and 'range' key-value\npairs.\n+\n'name' specifies the name of the subnetwork to be created.\n+\n'range' specifies the IP range for the new subnetwork. This can either\nbe a netmask size (e.g. '/20') or a CIDR range (e.g. '10.0.0.0/20').\nIf a netmask size is specified, the IP is automatically taken from the\nfree space in the cluster's network.\n+\nExamples:\n+\nCreate a new subnetwork with a default name and size.\n+\n  $ {command} --create-subnetwork \"\"\n+\nCreate a new subnetwork named \"my-subnet\" with netmask of size 21.\n+\n  $ {command} --create-subnetwork name=my-subnet,range=/21\n+\nCreate a new subnetwork with a default name with the primary range of\n10.100.0.0/16.\n+\n  $ {command} --create-subnetwork range=10.100.0.0/16\n+\nCreate a new subnetwork with the name \"my-subnet\" with a default range.\n+\n  $ {command} --create-subnetwork name=my-subnet\n+\nCannot be used in conjunction with '--subnetwork' option",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2741,
            flag2820,
            flag3540,
            flag3560,
            flag3573,
            flag3580,
            flag3586,
            flag4017,
            flag4024,
            flag4025,
            {
              name: "--enable-backup-restore",
              description:
                "Enable the Backup for GKE add-on. This add-on is disabled by default. To\nlearn more, see the Backup for GKE overview: https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke",
            },
            flag4063,
            flag4074,
            flag4097,
            flag4105,
            flag4110,
            flag4125,
            flag4135,
            flag4158,
            flag4159,
            flag4164,
            flag4175,
            flag4176,
            flag4179,
            flag4182,
            flag4191,
            {
              name: "--enable-lustre-csi-driver",
              description:
                "Enable the Lustre CSI Driver GKE add-on. This add-on is disabled by default",
            },
            flag4214,
            flag4216,
            flag4225,
            flag4249,
            flag4256,
            flag4264,
            flag4280,
            flag4282,
            {
              name: "--enable-ray-operator",
              description:
                "Enable the Ray Operator GKE add-on. This add-on is disabled by default",
            },
            flag4296,
            flag4294,
            flag4300,
            flag4298,
            flag4558,
            flag4559,
            flag4900,
            flag4902,
            flag4917,
            flag5091,
            flag5281,
            flag5453,
            flag5512,
            flag5691,
            flag5671,
            flag5677,
            flag5699,
            flag6397,
            flag6607,
            flag7356,
            {
              name: "--logging",
              description:
                "Set the components that have logging enabled. Valid component values are:\n`SYSTEM`, `WORKLOAD`, `API_SERVER`, `CONTROLLER_MANAGER`, `SCHEDULER`, `KCP_HPA`\n+\nThe default is `SYSTEM,WORKLOAD`. If this flag is set, then `SYSTEM` must be\nincluded.\n+\nFor more information, see\nhttps://cloud.google.com/kubernetes-engine/docs/concepts/about-logs#available-logs\n+\nExamples:\n+\n  $ {command} --logging=SYSTEM\n  $ {command} --logging=SYSTEM,WORKLOAD\n  $ {command} --logging=SYSTEM,WORKLOAD,API_SERVER,CONTROLLER_MANAGER,SCHEDULER,KCP_HPA",
              args: { name: "COMPONENT", description: "List", suggestions: [] },
            },
            flag7457,
            flag7458,
            flag7565,
            flag7577,
            flag7756,
            {
              name: "--monitoring",
              description:
                "Set the components that have monitoring enabled. Valid component values are:\n`SYSTEM`, `WORKLOAD` (Deprecated), `NONE`, `API_SERVER`, `CONTROLLER_MANAGER`,\n`SCHEDULER`, `DAEMONSET`, `DEPLOYMENT`, `HPA`, `POD`, `STATEFULSET`, `STORAGE`,\n`CADVISOR`, `KUBELET`, `DCGM`, `JOBSET`\n+\nNote: `DAEMONSET`, `DEPLOYMENT`, `HPA`, `POD`, `STATEFULSET`, `STORAGE`,\n`CADVISOR`, `KUBELET`, `DCGM`, and `JOBSET` require Google Managed Prometheus\nto be enabled.\n+\nFor more information, see\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/configure-metrics#available-metrics\n+\nExamples:\n+\n  $ {command} --monitoring=SYSTEM,API_SERVER,POD,DCGM\n  $ {command} --monitoring=SYSTEM",
              args: { name: "COMPONENT", description: "List", suggestions: [] },
            },
            flag8262,
            flag10494,
            flag11586,
            flag11637,
            flag11946,
            flag12297,
            {
              name: "--release-channel",
              description:
                "Release channel a cluster is subscribed to.\n+\nIf left unspecified and a version is specified, the cluster is enrolled in the\nmost mature release channel where the version is available (first checking\nSTABLE, then REGULAR, and finally RAPID). Otherwise, if no release channel and\nno version is specified, the cluster is enrolled in the REGULAR channel with\nits default version.\nWhen a cluster is subscribed to a release channel, Google maintains both the\nmaster version and the node version. Node auto-upgrade is enabled by default\nfor release channel clusters and can be controlled via [upgrade-scope\nexclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#scope_of_maintenance_to_exclude).\n+\n_CHANNEL_ must be one of:\n+\n*extended*::: Clusters subscribed to 'extended' can remain on a minor version for 24 months\nfrom when the minor version is made available in the Regular channel.\n+\n*rapid*::: 'rapid' channel is offered on an early access basis for customers\nwho want to test new releases.\n+\nWARNING: Versions available in the 'rapid' channel may be subject\nto unresolved issues with no known workaround and are not subject\nto any SLAs.\n+\n*regular*::: Clusters subscribed to 'regular' receive versions that are\nconsidered GA quality. 'regular' is intended for production users\nwho want to take advantage of new features.\n+\n*stable*::: Clusters subscribed to 'stable' receive versions that are known to\nbe stable and reliable in production.\n+\n:::\n+",
              args: {
                name: "CHANNEL",
                description: "String",
                suggestions: ["extended", "rapid", "regular", "stable"],
              },
            },
            flag13372,
            flag13410,
            flag13411,
            flag13430,
            flag13448,
            flag13522,
            flag13502,
            flag13505,
            {
              name: "--services-ipv4-cidr",
              description:
                "Set the IP range for the services IPs.\n+\nCan be specified as a netmask size (e.g. '/20') or as in CIDR notion\n(e.g. '10.100.0.0/20'). If given as a netmask size, the IP range will\nbe chosen automatically from the available space in the network.\n+\nIf unspecified, the services CIDR range will be chosen with a default\nmask size",
              args: { name: "CIDR", description: "String", suggestions: [] },
            },
            {
              name: "--services-secondary-range-name",
              description:
                "Set the secondary range to be used for services (e.g. ClusterIPs).\nNAME must be the name of an existing secondary range in the cluster\nsubnetwork.\n+\nCannot be used with '--create-subnetwork' option",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            flag14542,
            flag14879,
            flag14975,
            flag15315,
            flag15424,
            flag15640,
            flag15649,
            flag15698,
          ],
          args: {
            name: "NAME",
            description:
              "The name of the cluster to create.\n+\nThe name may contain only lowercase alphanumerics and '-', must start with a\nletter and end with an alphanumeric, and must be no longer than 40\ncharacters",
          },
        },
        {
          name: "delete",
          description: "Delete an existing cluster for running containers",
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
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The names of the clusters to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe an existing cluster for running containers",
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
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: { name: "NAME", description: "The name of this cluster" },
        },
        {
          name: "get-credentials",
          description: "Fetch credentials for a running cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dns-endpoint",
              description:
                "Whether to use the DNS-based endpoint for the cluster address",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5985,
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description:
              "Name of the cluster to get credentials for. Overrides the default *container/cluster* property value for this command invocation",
          },
        },
        {
          name: "get-upgrade-info",
          description:
            "Get information about upgrades for existing clusters including auto upgrade status, upgrade history, upgrade targets, and end of support timelines",
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
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The name of your existing cluster",
          },
        },
        {
          name: "list",
          description: "List existing clusters for running containers",
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
            flag6607,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12297,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
            flag15698,
          ],
        },
        {
          name: "resize",
          description: "Resizes an existing cluster for running containers",
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
            flag6607,
            flag7356,
            {
              name: "--node-pool",
              description: "The node pool to resize",
              args: {
                name: "NODE_POOL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--num-nodes",
              description: "Target number of nodes in the cluster",
              args: { name: "NUM_NODES", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12297,
            {
              name: "--size",
              description:
                "(DEPRECATED) Target number of nodes in the cluster.\n+\nThe --size flag is now deprecated. Please use `--num-nodes` instead",
              args: { name: "SIZE", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: { name: "NAME", description: "The name of this cluster" },
        },
        {
          name: "update",
          description:
            "Update cluster settings for an existing container cluster",
          options: [
            flag42,
            flag46,
            {
              name: "--add-maintenance-exclusion-end",
              description:
                "End time of the exclusion window. Must take place after the start time. See\n$ gcloud topic datetimes for information on time formats",
              args: {
                name: "TIME_STAMP",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--add-maintenance-exclusion-name",
              description:
                "A descriptor for the exclusion that can be used to remove it. If not specified,\nit will be autogenerated",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            {
              name: "--add-maintenance-exclusion-scope",
              description:
                "Scope of the exclusion window to specify the type of upgrades that the exclusion\nwill apply to. Must be in one of no_upgrades, no_minor_upgrades or no_minor_or_node_upgrades.\nIf not specified in an exclusion, defaults to no_upgrades",
              args: {
                name: "SCOPE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--add-maintenance-exclusion-start",
              description:
                "Start time of the exclusion window (can occur in the past). If not specified,\nthe current time will be used. See $ gcloud topic datetimes for information on\ntime formats",
              args: {
                name: "TIME_STAMP",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--add-maintenance-exclusion-until-end-of-support",
              description:
                "End time of the exclusion window is the end of the cluster's support",
            },
            {
              name: "--additional-ip-ranges",
              description:
                'Add additional subnetworks named "my-subnet" with pod ipv4 range named "my-range" to the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --additional-ip-ranges=subnetwork=my-subnet,pod-ipv4-range=my-range',
              args: {
                name: "subnetwork=NAME,pod-ipv4-range=NAME",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--additional-pod-ipv4-ranges",
              description:
                "Additional IP address ranges(by name) for pods that need to be added to the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --additional-pod-ipv4-ranges=range1,range2",
              args: { name: "NAME", description: "List", suggestions: [] },
            },
            flag313,
            flag540,
            flag720,
            flag843,
            flag891,
            flag892,
            flag893,
            {
              name: "--autoprovisioning-cgroup-mode",
              description:
                'Sets the cgroup mode for auto-provisioned nodes.\n+\nUpdating this flag triggers an update using surge upgrades of all existing\nauto-provisioned nodes to apply the new value of cgroup mode.\n+\nFor an Autopilot cluster, the specified cgroup mode will be set on all existing and new nodes in the cluster.\nFor a Standard cluster, the specified cgroup mode will be set on all existing and new auto-provisioned node pools in the cluster.\n+\nIf not set, GKE uses cgroupv2 for new nodes when the cluster was created running 1.26 or later,\nand cgroupv1 for clusters created running 1.25 or earlier. To check your initial cluster version, run\n`gcloud container clusters describe [NAME] --format="value(initialClusterVersion)"`\n+\nFor clusters created running version 1.26 or later, you can\'t set the cgroup mode to v1.\n+\nTo learn more, see: https://cloud.google.com/kubernetes-engine/docs/how-to/migrate-cgroupv2.\n+\n_AUTOPROVISIONING_CGROUP_MODE_ must be one of: *default*, *v1*, *v2*',
              args: {
                name: "AUTOPROVISIONING_CGROUP_MODE",
                description: "String",
                suggestions: ["default", "v1", "v2"],
              },
            },
            flag895,
            flag896,
            flag897,
            flag898,
            flag899,
            flag900,
            flag901,
            {
              name: "--autoprovisioning-network-tags",
              description:
                "Replaces the user specified Compute Engine tags on all nodes in all the existing\nauto-provisioned node pools in the Standard cluster or the Autopilot with the given tags (comma separated).\n+\nExamples:\n+\n  $ {command} example-cluster --autoprovisioning-network-tags=tag1,tag2\n+\nNew nodes in auto-provisioned node pools, including ones created by resize or recreate, will have these tags\non the Compute Engine API instance object and these tags can be used in\nfirewall rules.\nSee https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/create\nfor examples",
              args: { name: "TAGS", description: "List", suggestions: [] },
            },
            flag904,
            {
              name: "--autoprovisioning-resource-manager-tags",
              description:
                "For an Autopilot cluster, the specified comma-separated resource manager tags\nthat has the GCP_FIREWALL purpose replace the existing tags on all nodes in\nthe cluster.\n+\nFor a Standard cluster, the specified comma-separated resource manager tags\nthat has the GCE_FIREWALL purpose are applied to all nodes in the new\nnewly created auto-provisioned node pools. Existing auto-provisioned node pools\nretain the tags that they had before the update. To update tags on an existing\nauto-provisioned node pool, use the node pool level flag\n'--resource-manager-tags'.\n+\nExamples:\n+\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=tagKeys/1234=tagValues/2345\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=my-project/key1=value1\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=12345/key1=value1,23456/key2=value2\n  $ {command} example-cluster --autoprovisioning-resource-manager-tags=\n+\nAll nodes in an Autopilot cluster or all newly created auto-provisioned nodes\nin a Standard cluster, including nodes that are resized or re-created, will have\nthe specified tags on the corresponding Instance object in the Compute Engine API.\nYou can reference these tags in network firewall policy rules. For instructions,\nsee https://cloud.google.com/firewall/docs/use-tags-for-firewalls",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag907,
            flag908,
            flag909,
            flag941,
            flag1201,
            flag1208,
            {
              name: "--clear-fleet-project",
              description:
                "Remove the cluster from current fleet host project.\nExample:\n$ {command} --clear-fleet-project",
            },
            {
              name: "--clear-maintenance-minor-version-disruption-interval",
              description:
                "Restore the default values for the minimum interval of time between minor version cluster upgrades",
            },
            {
              name: "--clear-maintenance-patch-version-disruption-interval",
              description:
                "Restore the default values for the minimum interval of time between patch version cluster upgrades",
            },
            {
              name: "--clear-maintenance-window",
              description:
                "If set, remove the maintenance window that was set with --maintenance-window\nfamily of flags",
            },
            {
              name: "--clear-resource-usage-bigquery-dataset",
              description:
                "Disables exporting cluster resource usage to BigQuery",
            },
            flag1998,
            flag2034,
            flag2032,
            flag2033,
            {
              name: "--complete-credential-rotation",
              description:
                "Complete the IP and credential rotation for this cluster. For example:\n+\n  $ {command} example-cluster --complete-credential-rotation\n+\nThis causes the cluster to stop serving its old IP, return to a single IP, and invalidate old credentials. See documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/credential-rotation",
            },
            {
              name: "--complete-ip-rotation",
              description:
                "Complete the IP rotation for this cluster. For example:\n+\n  $ {command} example-cluster --complete-ip-rotation\n+\nThis causes the cluster to stop serving its old IP, and return to a single IP state. See documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-rotation",
            },
            flag2292,
            flag2421,
            flag2460,
            flag2741,
            flag2820,
            flag3540,
            {
              name: "--disable-auto-ipam",
              description:
                "Disable the Auto IP Address Management (Auto IPAM) feature for the cluster",
            },
            {
              name: "--disable-database-encryption",
              description:
                "Disable database encryption.\n+\nDisable Database Encryption which encrypt Kubernetes Secrets at\nthe application layer. For more information, see\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/encrypting-secrets",
            },
            flag3560,
            flag3561,
            {
              name: "--disable-default-snat",
              description:
                "Disable default source NAT rules applied in cluster nodes.\n+\nBy default, cluster nodes perform source network address translation (SNAT)\nfor packets sent from Pod IP address sources to destination IP addresses\nthat are not in the non-masquerade CIDRs list.\nFor more details about SNAT and IP masquerading, see:\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works\nSNAT changes the packet's source IP address to the node's internal IP address.\n+\nWhen this flag is set, GKE does not perform SNAT for packets sent to any destination.\nYou must set this flag if the cluster uses privately reused public IPs.\n+\nThe --disable-default-snat flag is only applicable to private GKE clusters, which are\ninherently VPC-native. Thus, --disable-default-snat requires that the cluster was created\nwith both --enable-ip-alias and --enable-private-nodes",
            },
            flag3573,
            {
              name: "--disable-managed-prometheus",
              description:
                "Disable managed collection for Managed Service for\n  Prometheus",
            },
            flag3580,
            flag3586,
            {
              name: "--disable-workload-identity",
              description:
                "Disable Workload Identity on the cluster.\n+\nFor more information on Workload Identity, see\n+\n            https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
            },
            flag4017,
            flag4024,
            flag4025,
            {
              name: "--enable-autopilot-compatibility-auditing",
              description:
                "Lets you run the\n[gcloud container clusters check-autopilot-compatibility](https://cloud.google.com/sdk/gcloud/reference/container/clusters/check-autopilot-compatibility)\ncommand to check whether your workloads are compatible with Autopilot\nmode. This flag is only applicable to clusters that run version\n1.31.6-gke.1027000 or later.\n+\nNote: This flag causes a control plane restart.\n+\nUse *--enable-autopilot-compatibility-auditing* to enable and *--no-enable-autopilot-compatibility-auditing* to disable",
            },
            flag4039,
            flag4035,
            flag4036,
            flag4037,
            flag4038,
            flag4046,
            flag4052,
            flag4057,
            {
              name: "--enable-cilium-clusterwide-network-policy",
              description:
                "Enable Cilium Clusterwide Network Policies on the cluster. Use *--enable-cilium-clusterwide-network-policy* to enable and *--no-enable-cilium-clusterwide-network-policy* to disable",
            },
            {
              name: "--enable-cost-allocation",
              description:
                "Enable the cost management feature.\n+\nWhen enabled, you can get informational GKE cost breakdowns by cluster,\nnamespace and label in your billing data exported to BigQuery\n(https://cloud.google.com/billing/docs/how-to/export-data-bigquery).\n+\nUse --no-enable-cost-allocation to disable this feature",
            },
            flag4097,
            flag4098,
            flag4105,
            flag4110,
            flag4125,
            flag4129,
            flag4135,
            flag4150,
            flag4151,
            flag4158,
            flag4159,
            flag4160,
            flag4163,
            flag4164,
            flag4175,
            flag4176,
            flag4179,
            flag4182,
            flag4185,
            {
              name: "--enable-l4-lb-firewall-reconciliation",
              description:
                "Enable reconciliation on the cluster for L4 Load Balancer VPC\nfirewalls targeting ingress traffic. L4 LB VPC firewall\nreconciliation is enabled by default",
            },
            flag4190,
            flag4191,
            flag4211,
            flag4214,
            flag4216,
            flag4225,
            flag4232,
            flag4233,
            flag4249,
            {
              name: "--enable-private-endpoint",
              description:
                "Enables cluster's control plane to be accessible using private IP\naddress only",
            },
            {
              name: "--enable-private-nodes",
              description:
                "Standard cluster:\n  Enable private nodes as a default behavior for all newly created node pools,\n  if `--enable-private-nodes` is not provided at node pool creation time.\n+\n  Modifications to this flag do not affect `--enable-private-nodes` state of the\n  existing node pools.\n+\nAutopilot cluster:\n  Force new and existing workloads, without explicit\n  `cloud.google.com/private-node=true` node selector, to run on nodes with no\n  public IP address.\n+\n  Modifications to this flag trigger a re-schedule operation on all existng\n  workloads to run on different node VMs",
            },
            {
              name: "--enable-ray-cluster-logging",
              description:
                "Enable automatic log processing sidecar for Ray clusters. Use *--enable-ray-cluster-logging* to enable and *--no-enable-ray-cluster-logging* to disable",
            },
            {
              name: "--enable-ray-cluster-monitoring",
              description:
                "Enable automatic metrics collection for Ray clusters. Use *--enable-ray-cluster-monitoring* to enable and *--no-enable-ray-cluster-monitoring* to disable",
            },
            {
              name: "--enable-resource-consumption-metering",
              description:
                "Enable resource consumption metering on this cluster.\n+\nWhen enabled, a table will be created in the specified BigQuery dataset to store\nresource consumption data. The resulting table can be joined with the resource\nusage table or with BigQuery billing export.\n+\nTo disable resource consumption metering, set `--no-enable-resource-consumption-\nmetering`. If this flag is omitted, then resource consumption metering will\nremain enabled or disabled depending on what is already configured for this\ncluster",
            },
            {
              name: "--enable-secret-manager",
              description:
                "Enables the Secret Manager CSI driver provider component. See\nhttps://secrets-store-csi-driver.sigs.k8s.io/introduction\nhttps://github.com/GoogleCloudPlatform/secrets-store-csi-driver-provider-gcp. Use *--enable-secret-manager* to enable and *--no-enable-secret-manager* to disable",
            },
            {
              name: "--enable-secret-manager-rotation",
              description:
                "Enables the rotation of secrets in the Secret Manager CSI driver\nprovider component. Use *--enable-secret-manager-rotation* to enable and *--no-enable-secret-manager-rotation* to disable",
            },
            {
              name: "--enable-secret-sync",
              description:
                "Enables the Secret Sync component. For details, see [Synchronize secrets to Kubernetes Secrets](https://docs.cloud.google.com/secret-manager/docs/sync-k8-secrets). Use *--enable-secret-sync* to enable and *--no-enable-secret-sync* to disable",
            },
            {
              name: "--enable-secret-sync-rotation",
              description:
                "Enables the rotation of secrets in the Secret Sync component. Use *--enable-secret-sync-rotation* to enable and *--no-enable-secret-sync-rotation* to disable",
            },
            flag4304,
            flag4305,
            flag4313,
            flag4329,
            flag4900,
            flag4902,
            flag4917,
            flag5091,
            flag5131,
            {
              name: "--generate-password",
              description:
                "Ask the server to generate a secure password and use that as the basic auth password, keeping the existing username",
            },
            flag5453,
            flag5512,
            flag5699,
            flag5726,
            flag6607,
            flag6579,
            flag7356,
            flag7393,
            {
              name: "--logging-service",
              description:
                '(DEPRECATED) Logging service to use for the cluster. Options are:\n"logging.googleapis.com/kubernetes" (the Google Cloud Logging\nservice with Kubernetes-native resource model enabled),\n"logging.googleapis.com" (the Google Cloud Logging service),\n"none" (logs will not be exported from the cluster)\n+\nThe `--logging-service` flag is deprecated and will be removed in an upcoming release. Please use `--logging` instead. For more information, please read: https://cloud.google.com/kubernetes-engine/docs/concepts/about-logs',
              args: {
                name: "LOGGING_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            flag7387,
            flag7457,
            flag7458,
            {
              name: "--maintenance-window",
              description:
                "Set a time of day when you prefer maintenance to start on this cluster. For example:\n+\n  $ {command} example-cluster --maintenance-window=12:43\n+\nThe time corresponds to the UTC time zone, and must be in HH:MM format.\n+\nNon-emergency maintenance will occur in the 4 hour block starting at the\nspecified time.\n+\nThis is mutually exclusive with the recurring maintenance windows\nand will overwrite any existing window. Compatible with maintenance\nexclusions.\n+\nTo remove an existing maintenance window from the cluster, use\n'--clear-maintenance-window'",
              args: {
                name: "START_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag7491,
            flag7495,
            flag7509,
            flag7515,
            flag7565,
            flag7604,
            flag7626,
            flag7648,
            flag7653,
            flag7756,
            flag7874,
            flag7883,
            flag7893,
            flag7898,
            flag8016,
            {
              name: "--monitoring-service",
              description:
                '(DEPRECATED) Monitoring service to use for the cluster. Options are:\n"monitoring.googleapis.com/kubernetes" (the Google Cloud\nMonitoring service with Kubernetes-native resource model enabled),\n"monitoring.googleapis.com" (the Google Cloud Monitoring service),\n"none" (no metrics will be exported from the cluster)\n+\nThe `--monitoring-service` flag is deprecated and will be removed in an upcoming release. Please use `--monitoring` instead. For more information, please read: https://cloud.google.com/kubernetes-engine/docs/how-to/configure-metrics',
              args: {
                name: "MONITORING_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            flag8197,
            flag10494,
            flag10515,
            {
              name: "--node-pool",
              description: "Node pool to be updated",
              args: {
                name: "NODE_POOL",
                description: "String",
                suggestions: [],
              },
            },
            flag10576,
            flag11171,
            flag11175,
            flag11592,
            flag11637,
            flag11946,
            flag12297,
            {
              name: "--release-channel",
              description:
                "Subscribe or unsubscribe this cluster to a release channel.\n+\nWhen a cluster is subscribed to a release channel, Google maintains both the\nmaster version and the node version. Node auto-upgrade is enabled by default\nfor release channel clusters and can be controlled via [upgrade-scope\nexclusions](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#scope_of_maintenance_to_exclude).\n+\n_CHANNEL_ must be one of:\n+\n*None*::: Use 'None' to opt-out of any release channel.\n+\n*extended*::: Clusters subscribed to 'extended' can remain on a minor version for 24 months\nfrom when the minor version is made available in the Regular channel.\n+\n*rapid*::: 'rapid' channel is offered on an early access basis for customers\nwho want to test new releases.\n+\nWARNING: Versions available in the 'rapid' channel may be subject\nto unresolved issues with no known workaround and are not subject\nto any SLAs.\n+\n*regular*::: Clusters subscribed to 'regular' receive versions that are\nconsidered GA quality. 'regular' is intended for production users\nwho want to take advantage of new features.\n+\n*stable*::: Clusters subscribed to 'stable' receive versions that are known to\nbe stable and reliable in production.\n+\n:::\n+",
              args: {
                name: "CHANNEL",
                description: "String",
                suggestions: ["None", "extended", "rapid", "regular", "stable"],
              },
            },
            {
              name: "--remove-additional-ip-ranges",
              description:
                'Additional subnetworks to be removed from the cluster.\n+\nExamples:\n+\nRemove pod range named "my-range" under additional subnetwork named "my-subnet" from the cluster.\n+\n  $ {command} example-cluster --remove-additional-ip-ranges=subnetwork=my-subnet,pod-ipv4-range=my-range\n+\nRemove additional subnetwork named "my-subnet", including all the pod ipv4 ranges under the subnetwork.\n+\n  $ {command} example-cluster --remove-additional-ip-ranges=subnetwork=my-subnet',
              args: {
                name: "subnetwork=NAME,pod-ipv4-range=NAME",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-additional-pod-ipv4-ranges",
              description:
                "Previously added additional pod ranges(by name) for pods that are to be removed from the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --remove-additional-pod-ipv4-ranges=range1,range2",
              args: { name: "NAME", description: "List", suggestions: [] },
            },
            {
              name: "--remove-autopilot-workload-policies",
              description:
                "Remove Autopilot workload policies from the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --remove-autopilot-workload-policies=allow-net-admin\n+\nThe only supported workload policy is 'allow-net-admin'",
              args: {
                name: "REMOVE_AUTOPILOT_WORKLOAD_POLICIES",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--remove-labels",
              description:
                "Labels to remove from the Google Cloud resources in use by the Kubernetes Engine\ncluster. These are unrelated to Kubernetes labels.\n+\nExamples:\n+\n  $ {command} example-cluster --remove-labels=label_a,label_b",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            {
              name: "--remove-maintenance-exclusion",
              description:
                "Name of a maintenance exclusion to remove. If you hadn't specified a name, one\nwas auto-generated. Get it with $ gcloud container clusters describe",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            {
              name: "--remove-workload-policies",
              description:
                "Remove Autopilot workload policies from the cluster.\n+\nExamples:\n+\n  $ {command} example-cluster --remove-workload-policies=allow-net-admin\n+\nThe only supported workload policy is 'allow-net-admin'",
              args: {
                name: "REMOVE_WORKLOAD_POLICIES",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag13031,
            flag13410,
            flag13411,
            flag13430,
            flag13448,
            {
              name: "--set-password",
              description:
                "Set the basic auth password to the specified value, keeping the existing username",
            },
            flag14331,
            {
              name: "--start-credential-rotation",
              description:
                "Start the rotation of IP and credentials for this cluster. For example:\n+\n  $ {command} example-cluster --start-credential-rotation\n+\nThis causes the cluster to serve on two IPs, and will initiate a node upgrade to point to the new IP. See documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/credential-rotation",
            },
            {
              name: "--start-ip-rotation",
              description:
                "Start the rotation of this cluster to a new IP. For example:\n+\n  $ {command} example-cluster --start-ip-rotation\n+\nThis causes the cluster to serve on two IPs, and will initiate a node upgrade to point to the new IP. See documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-rotation",
            },
            flag14879,
            flag14966,
            flag14967,
            flag14975,
            {
              name: "--unset-membership-type",
              description:
                "Set the membership type for the cluster's fleet membership to empty.\nExample:\n$ {command} --unset-membership-type",
            },
            {
              name: "--update-addons",
              description:
                "Cluster addons to enable or disable. Options are\nHorizontalPodAutoscaling=ENABLED|DISABLED\nHttpLoadBalancing=ENABLED|DISABLED\nKubernetesDashboard=ENABLED|DISABLED\nNetworkPolicy=ENABLED|DISABLED\nBackupRestore=ENABLED|DISABLED\nCloudRun=ENABLED|DISABLED\nConfigConnector=ENABLED|DISABLED\nNodeLocalDNS=ENABLED|DISABLED\nGcePersistentDiskCsiDriver=ENABLED|DISABLED\nGcpFilestoreCsiDriver=ENABLED|DISABLED\nGcsFuseCsiDriver=ENABLED|DISABLED\nNodeReadinessController=ENABLED|DISABLED",
              args: {
                name: "ADDON=ENABLED|DISABLED",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--update-labels",
              description:
                "Labels to apply to the Google Cloud resources in use by the Kubernetes Engine\ncluster. These are unrelated to Kubernetes labels.\n+\nExamples:\n+\n  $ {command} example-cluster --update-labels=label_a=value1,label_b=value2",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15341,
            flag15424,
            flag15640,
            flag15642,
            flag15649,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The name of the cluster to update",
          },
        },
        {
          name: "upgrade",
          description:
            "Upgrade the Kubernetes version of an existing container cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cluster-version",
              description:
                "The GKE release version to which to upgrade the cluster's node pools or master.\n+\nIf desired cluster version is omitted, *node pool* upgrades default to the current\n*master* version and *master* upgrades default to the default cluster version,\nwhich can be found in the server config.\n+\nYou can find the list of allowed versions for upgrades by running:\n+\n  $ gcloud container get-server-config",
              args: {
                name: "CLUSTER_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5691,
            flag5671,
            {
              name: "--image-type",
              description:
                "The image type to use for the cluster/node pool. Defaults to server-specified.\n+\nImage Type specifies the base OS that the nodes in the cluster/node pool will run on.\nIf an image type is specified, that will be assigned to the cluster/node pool and all\nfuture upgrades will use the specified image type. If it is not specified the\nserver will pick the default image type.\n+\nThe default image type and the list of valid image types are available\nusing the following command.\n+\n  $ gcloud container get-server-config",
              args: {
                name: "IMAGE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag6607,
            flag7356,
            {
              name: "--master",
              description:
                "Upgrade the cluster's master. Node pools cannot be upgraded at the  same time as the master",
            },
            {
              name: "--node-pool",
              description: "The node pool to upgrade",
              args: {
                name: "NODE_POOL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The name of the cluster to upgrade",
          },
        },
      ],
    },
    {
      name: "fleet",
      description:
        "Centrally manage features and services on all your Kubernetes clusters with fleet",
      subcommands: [
        {
          name: "cloudrun",
          description: "Manage the CloudRun feature",
          subcommands: [
            {
              name: "apply",
              description: "Deploy or update the CloudRun feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2282,
                flag2292,
                flag2445,
                flag4900,
                flag4902,
                flag5091,
                flag5267,
                flag5278,
                flag5453,
                flag5699,
                flag6365,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "describe",
              description: "Describe the status of the CloudRun feature",
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
            },
            {
              name: "disable",
              description: "Disable the CloudRun feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable the CloudRun feature",
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
            },
          ],
        },
        {
          name: "clusterupgrade",
          description: "Configure the Fleet clusterupgrade feature",
          subcommands: [
            {
              name: "create",
              description:
                "Create the clusterupgrade feature for a fleet within a given project",
              options: [
                flag42,
                flag46,
                flag282,
                flag1201,
                flag2292,
                flag2927,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15238,
                flag15242,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "describe",
              description:
                "Describe the clusterupgrade feature for a fleet within a given project",
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
                flag13787,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description:
                "Update the clusterupgrade feature for a fleet within a given project",
              options: [
                flag42,
                flag46,
                flag282,
                flag1201,
                flag2292,
                flag2927,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag12748,
                flag12943,
                flag14975,
                flag15238,
                flag15242,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "config-management",
          description: "Use the Config Management feature",
          subcommands: [
            {
              name: "describe",
              description: "Describe the Config Management feature",
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
            },
            {
              name: "disable",
              description: "Disable the Config Management feature",
              options: [
                flag42,
                flag46,
                flag389,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4903,
                flag5044,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15109,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "create",
          description: "Create a fleet",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1207,
            flag1209,
            flag2292,
            flag3734,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag11637,
            flag11946,
            flag13449,
            flag14975,
            flag15315,
            flag15424,
            flag15650,
          ],
        },
        {
          name: "dataplane-v2-encryption",
          description: "Manage Dataplane V2 Encryption Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describes the status of the Dataplane V2 Encryption Feature resource",
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
            },
            {
              name: "disable",
              description: "Disables the Dataplane V2 Encryption Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enables the Dataplane V2 Encryption Feature",
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
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a fleet",
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
        },
        {
          name: "describe",
          description: "Show fleet info",
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
        },
        {
          name: "features",
          description: "Manage Hub Feature resources",
          subcommands: [
            {
              name: "list",
              description: "List enabled features",
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
                flag6709,
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
          name: "fleetobservability",
          description: "Manage Fleet Observability Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describes the status of the Fleet Observability Feature resource",
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
            },
            {
              name: "disable",
              description: "Disables the Fleet Observability Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enables the Fleet Observability Feature",
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
            },
            {
              name: "update",
              description: "Updates the Fleet Observability Feature resource",
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
                flag7373,
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
          name: "identity-service",
          description: "Manage Identity Service Feature",
          subcommands: [
            {
              name: "apply",
              description: "Update the Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2283,
                flag2292,
                flag4900,
                flag4902,
                flag4909,
                flag5091,
                flag5453,
                flag5699,
                flag6744,
                flag7356,
                flag7757,
                flag10969,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description:
                "Delete a resource from the Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4904,
                flag5091,
                flag5453,
                flag5699,
                flag6744,
                flag7356,
                flag7757,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "describe",
              description:
                "Prints the status of all clusters with Identity Service installed",
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
            {
              name: "disable",
              description: "Disable Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable the Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4910,
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
            },
          ],
        },
        {
          name: "ingress",
          description: "Manage Multi-cluster Ingress Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of Multi-cluster Ingress Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable Multi-cluster Ingress Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable Multi-cluster Ingress Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2263,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6743,
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
              description: "Update Multi-cluster Ingress Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2263,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6743,
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
          name: "list",
          description: "List fleets visible to the user in an organization",
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
            flag10776,
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
          name: "memberships",
          description:
            "Manage memberships of all your GKE and other Kubernetes clusters with fleets",
          subcommands: [
            {
              name: "bindings",
              description: "Membership Bindings for permissions",
              subcommands: [
                {
                  name: "create",
                  description: "Create a Membership Binding",
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
                    flag6413,
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag13341,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a Membership Binding",
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
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show Membership-Binding info",
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
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List Bindings in a Membership",
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
                    flag7099,
                    flag7356,
                    flag7760,
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
                  description: "Update the Binding in a Membership",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1723,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag12637,
                    flag13341,
                    flag14975,
                    flag15167,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a membership",
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
                flag7011,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `membership` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a membership",
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
                flag7011,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `membership` on the command line",
              },
            },
            {
              name: "generate-gateway-rbac",
              description:
                "Generate RBAC policy files for connected clusters by the user",
              options: [
                flag42,
                flag46,
                flag541,
                flag664,
                flag1201,
                flag2292,
                flag2444,
                flag4900,
                flag4902,
                flag5091,
                flag5399,
                flag5453,
                flag5699,
                flag6365,
                flag7356,
                flag7759,
                flag11637,
                flag11946,
                flag11978,
                flag13121,
                flag13131,
                flag14975,
                flag15315,
                flag15349,
                flag15424,
              ],
            },
            {
              name: "get-credentials",
              description:
                "Fetch credentials for a fleet-registered cluster to be used in Connect Gateway",
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
                flag7054,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP_NAME",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
              },
            },
            {
              name: "list",
              description: "List memberships",
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
                flag6694,
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
              name: "register",
              description: "Register a cluster with a fleet",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2445,
                flag4340,
                flag4900,
                flag4902,
                flag5091,
                flag5267,
                flag5278,
                flag5425,
                flag5453,
                flag5699,
                flag5828,
                flag5985,
                flag6365,
                flag6925,
                flag7356,
                flag7550,
                flag11637,
                flag11822,
                flag11853,
                flag11946,
                flag13499,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP_NAME",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
              },
            },
            {
              name: "support-access",
              description: "Membership used for support access",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe support access for the specified membership",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
                {
                  name: "disable",
                  description:
                    "Disable support access for the specified membership",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
                {
                  name: "enable",
                  description:
                    "Enable support access for the specified membership",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
                {
                  name: "get-yaml",
                  description:
                    "Generates YAML for anthos support RBAC policies",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag11977,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
              ],
            },
            {
              name: "unregister",
              description: "Unregister a cluster from a fleet",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2445,
                flag4900,
                flag4902,
                flag5091,
                flag5267,
                flag5278,
                flag5453,
                flag5699,
                flag6365,
                flag7055,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15107,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP_NAME",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a membership",
              options: [
                flag42,
                flag46,
                flag721,
                flag1201,
                flag1723,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7011,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `membership` on the command line",
              },
            },
          ],
        },
        {
          name: "mesh",
          description: "Manage Service Mesh Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of Service Mesh Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable Service Mesh Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4905,
                flag5041,
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
            },
            {
              name: "enable",
              description: "Enable Service Mesh Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4908,
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
            },
            {
              name: "update",
              description:
                "Update the configuration of the Service Mesh Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2241,
                flag2292,
                flag2480,
                flag4900,
                flag4902,
                flag4908,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7547,
                flag7762,
                flag10970,
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
          name: "multi-cluster-services",
          description: "Manage Multi-cluster Services Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of the Multi-cluster Services Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable the Multi-cluster Services Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable the Multi-cluster Services Feature",
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
            },
          ],
        },
        {
          name: "operations",
          description: "Manage Anthos fleet long-running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe a long-running operation",
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
                flag7095,
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
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation` on the command line",
              },
            },
            {
              name: "list",
              description: "List long-running operations",
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
                flag6586,
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
              description: "Poll a long-running operation for completion",
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
                flag7095,
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
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
        {
          name: "packages",
          description: "Manage Fleet Packages resources",
          subcommands: [
            {
              name: "create",
              description: "Create Package Rollouts Fleet Package",
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
                flag6677,
                flag7356,
                flag11637,
                flag11946,
                flag14152,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: { name: "NAME", description: "Resource name" },
            },
            {
              name: "delete",
              description: "Delete Package Rollouts Fleet Package",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5075,
                flag5091,
                flag5453,
                flag5699,
                flag6675,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FLEET_PACKAGE",
                description:
                  "ID of the fleet-package or fully qualified identifier for the fleet-package.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `fleet_package` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe Package Rollouts Fleet Package",
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
                flag6675,
                flag7356,
                flag11637,
                flag11946,
                flag13769,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FLEET_PACKAGE",
                description:
                  "ID of the fleet-package or fully qualified identifier for the fleet-package.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `fleet_package` on the command line",
              },
            },
            {
              name: "list",
              description: "List Package Rollouts Fleet Packages",
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
                flag6677,
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
              name: "resource-bundles",
              description:
                "Commands for managing Package Rollouts Resource Bundles",
              subcommands: [
                {
                  name: "create",
                  description: "Create Package Rollouts Resource Bundle",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3273,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "delete",
                  description: "Delete Package Rollouts Resource Bundle",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5077,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "describe",
                  description: "Describe Package Rollouts Resource Bundle",
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
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "list",
                  description: "List Package Rollouts Resource Bundles",
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
                    flag6677,
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
                  name: "releases",
                  description:
                    "Commands for managing Package Rollouts Releases",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create Package Rollouts Release",
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
                        flag6504,
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14153,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete Package Rollouts Release",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5076,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "RELEASE",
                        description:
                          "Release identifier, either a version or tag",
                      },
                    },
                    {
                      name: "describe",
                      description: "Describe Package Rollouts Release",
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
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "RELEASE",
                        description:
                          "Release identifier, either a version or tag",
                      },
                    },
                    {
                      name: "list",
                      description: "List Releases of a Resource Bundle",
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
                        flag6677,
                        flag7356,
                        flag11059,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag13948,
                        flag14975,
                        flag15249,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update Package Rollouts Release",
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
                        flag6504,
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "RELEASE",
                        description:
                          "Release identifier, either a version or tag",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update Package Rollouts Resource Bundle",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3273,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
              ],
            },
            {
              name: "rollouts",
              description: "Commands for managing Rollouts",
              subcommands: [
                {
                  name: "abort",
                  description: "Abort Rollout resource",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4913,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6676,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12008,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROLLOUT",
                    description:
                      "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe Rollout resource",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4914,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6483,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "list",
                  description: "List Rollouts of a Fleet Package",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4914,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6483,
                    flag6515,
                    flag6677,
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
                  name: "resume",
                  description: "Resume suspended Rollout",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4913,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6676,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12011,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROLLOUT",
                    description:
                      "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
                  },
                },
                {
                  name: "suspend",
                  description: "Suspend in-progress Rollout",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4913,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6676,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12013,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROLLOUT",
                    description:
                      "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update Package Rollouts Fleet Package",
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
                flag6675,
                flag7356,
                flag11637,
                flag11946,
                flag14152,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FLEET_PACKAGE",
                description:
                  "ID of the fleet-package or fully qualified identifier for the fleet-package.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `fleet_package` on the command line",
              },
            },
          ],
        },
        {
          name: "policycontroller",
          description: "Manage Policy Controller Feature",
          subcommands: [
            {
              name: "content",
              description: "Manage Policy Controller content",
              subcommands: [
                {
                  name: "bundles",
                  description: "Manage Policy Controller content bundles",
                  subcommands: [
                    {
                      name: "remove",
                      description:
                        "Removes a bundle installation for Policy Controller content",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "BUNDLE_NAME",
                        description:
                          "The constraint bundle to remove from Policy Controller",
                      },
                    },
                    {
                      name: "set",
                      description:
                        "Sets bundle installation for Policy Controller content",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4639,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
                        flag9580,
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "BUNDLE_NAME",
                        description:
                          "The constraint bundle to install in Policy Controller",
                      },
                    },
                  ],
                },
                {
                  name: "templates",
                  description: "Manage Policy Controller content templates",
                  subcommands: [
                    {
                      name: "disable",
                      description:
                        "Disable template installation for Policy Controller content",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "enable",
                      description:
                        "Installs the template library for Policy Controller",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
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
              name: "deployment",
              description: "Configure Policy Controller component deployments",
              subcommands: [
                {
                  name: "remove",
                  description:
                    "Removes configuration properties from Policy Controller components",
                  options: [
                    flag42,
                    flag46,
                    flag390,
                    flag1201,
                    flag2292,
                    flag3983,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6745,
                    flag7356,
                    flag7762,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: [
                    {
                      name: "DEPLOYMENT",
                      description:
                        'The PolicyController deployment component (i.e, "admission",  "audit" or "mutation" from which to remove configuration',
                    },
                    { name: "PROPERTY", description: "Property to be removed" },
                    {
                      name: "VALUE",
                      description:
                        "This is only required to remove a toleration. It should not be included for any other property",
                      isOptional: true,
                    },
                  ],
                },
                {
                  name: "set",
                  description:
                    "Sets configuration of the Policy Controller components",
                  options: [
                    flag42,
                    flag46,
                    flag390,
                    flag1201,
                    flag2292,
                    flag3984,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6745,
                    flag7356,
                    flag7762,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: [
                    {
                      name: "DEPLOYMENT",
                      description:
                        'The PolicyController deployment component (e.g. "admission",  "audit" or "mutation") upon which to set configuration',
                    },
                    { name: "PROPERTY", description: "Property to be set" },
                    {
                      name: "VALUE",
                      description:
                        "The value to set the property to. Valid input varies based on the property being set",
                    },
                  ],
                },
              ],
            },
            {
              name: "describe",
              description: "Describe Policy Controller feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "detach",
              description: "Detach Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "disable",
              description: "Disable (Uninstall) Policy Controller",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4906,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "enable",
              description: "Enable Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag774,
                flag1201,
                flag1657,
                flag2292,
                flag2339,
                flag4638,
                flag4900,
                flag4902,
                flag4907,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7341,
                flag7356,
                flag7762,
                flag8015,
                flag8041,
                flag9051,
                flag9101,
                flag9614,
                flag9896,
                flag9933,
                flag9936,
                flag10075,
                flag11637,
                flag11946,
                flag12066,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "suspend",
              description: "Suspend Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
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
                "Updates the configuration of Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag774,
                flag1201,
                flag1657,
                flag2292,
                flag2339,
                flag4638,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7341,
                flag7356,
                flag7762,
                flag8015,
                flag8041,
                flag9896,
                flag9933,
                flag9936,
                flag10075,
                flag10965,
                flag11637,
                flag11946,
                flag12066,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "rbacrolebindingactuation",
          description: "Manage RbacRoleBinding Actuation",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of the RbacRoleBinding Actuation Feature in a fleet",
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
            },
            {
              name: "update",
              description: "Update RbacRoleBinding Actuation Feature",
              options: [
                flag42,
                flag46,
                flag127,
                flag464,
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
                flag12542,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "rollouts",
          description: "Manage rollouts",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a rollout",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a rollout resource",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a fleet rollout",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "force-complete-stage",
              description: "Force-complete a rollout stage",
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
                flag14342,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "list",
              description: "List all fleet rollouts",
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
            {
              name: "pause",
              description: "Pause a rollout resource",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "resume",
              description: "Resume a rollout resource",
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
                flag13296,
                flag14975,
                flag15315,
                flag15362,
                flag15424,
              ],
              args: {
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
          ],
        },
        {
          name: "rolloutsequences",
          description: "Create and manage rollout sequences",
          subcommands: [
            {
              name: "create",
              description: "Create a rollout sequence resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3750,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6391,
                flag7356,
                flag11637,
                flag11946,
                flag14341,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a rollout sequence resource",
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
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a rollout sequence",
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
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "list",
              description: "List all rollout sequences",
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
            {
              name: "update",
              description: "Update a rollout sequence resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3750,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6391,
                flag7356,
                flag11637,
                flag11946,
                flag14340,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "upgrade",
              description:
                "Upgrade the clusters in a rollout sequence resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2478,
                flag4900,
                flag4902,
                flag5046,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10543,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
          ],
        },
        {
          name: "scopes",
          description: "Manage scopes of all your GKE fleets",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description: "Add IAM policy binding to a Fleet Scope",
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
                flag13137,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "create",
              description: "Create a new fleet scope",
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
                flag6413,
                flag7356,
                flag8111,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a fleet scope",
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
                flag7018,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a fleet scope",
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
                flag7018,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for a Fleet Scope",
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
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List fleet scopes in a project permitted to be viewed by the caller",
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
            {
              name: "list-memberships",
              description: "List memberships bound to a fleet scope",
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
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `SCOPE` on the command line",
              },
            },
            {
              name: "namespaces",
              description:
                "Fleet namespaces are the fleet equivalent of k8s cluster namespaces",
              subcommands: [
                {
                  name: "create",
                  description: "Create a fleet namespace",
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
                    flag6413,
                    flag7356,
                    flag8110,
                    flag11637,
                    flag11946,
                    flag13353,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a fleet namespace",
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
                    flag13353,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show fleet namespace info",
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
                    flag13353,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
                {
                  name: "get-credentials",
                  description:
                    "Fetch credentials for a membership with a particular namespace",
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
                    flag7758,
                    flag7755,
                    flag11637,
                    flag11946,
                    flag13694,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "Name of the namespace for which to get access to memberships",
                  },
                },
                {
                  name: "list",
                  description: "List fleet namespaces in a project",
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
                    flag13341,
                    flag13948,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description: "Update a fleet namespace",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1723,
                    flag1785,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12637,
                    flag12666,
                    flag13353,
                    flag14975,
                    flag15167,
                    flag15197,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
              ],
            },
            {
              name: "rbacrolebindings",
              description: "Fleet scope RBAC RoleBindings for permissions",
              subcommands: [
                {
                  name: "create",
                  description: "Create an RBAC RoleBinding",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag2654,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5395,
                    flag5453,
                    flag5699,
                    flag6413,
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag13139,
                    flag13343,
                    flag14975,
                    flag15337,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a fleet scope RBAC RoleBinding",
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
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag13343,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show fleet scope RBAC RoleBinding information",
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
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag13343,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List RBAC RoleBindings in a fleet scope",
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
                    flag13342,
                    flag13948,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description: "Update a fleet scope RBAC RoleBinding",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1723,
                    flag2292,
                    flag2654,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5394,
                    flag5453,
                    flag5699,
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12637,
                    flag13139,
                    flag13343,
                    flag14975,
                    flag15167,
                    flag15336,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description: "Remove IAM policy binding of a Fleet Scope",
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
                flag13138,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a scope",
              options: [
                flag42,
                flag46,
                flag283,
                flag1201,
                flag1723,
                flag1786,
                flag2292,
                flag2926,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7018,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag12667,
                flag12749,
                flag12944,
                flag14975,
                flag15167,
                flag15198,
                flag15239,
                flag15244,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a fleet",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1207,
            flag1209,
            flag1723,
            flag2292,
            flag3734,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag13449,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
            flag15650,
          ],
        },
        {
          name: "workload-identity",
          description: "Manage Workload Identity Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of Workload Identity Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable Workload Identity Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable Workload Identity Feature",
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
            },
            {
              name: "scope-tenancy-pool",
              description:
                "Manage Workload Identity Feature scope tenancy pool",
              subcommands: [
                {
                  name: "set",
                  description: "Set Scope Tenancy Pool",
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
                    name: "WORKLOAD_IDENTITY_POOL",
                    description:
                      "ID of the workloadidentitypool or fully qualified identifier for the workloadidentitypool.\n+\nTo set the `workloadidentitypool` attribute:\n* provide the argument `WORKLOAD_IDENTITY_POOL` on the command line",
                  },
                },
                {
                  name: "unset",
                  description: "Unset Scope Tenancy Pool",
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
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "get-server-config",
      description: "Get Kubernetes Engine server config",
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
        flag6607,
        flag7356,
        flag11637,
        flag11946,
        flag12297,
        flag13948,
        flag14975,
        flag15315,
        flag15424,
        {
          name: ["--zone", "-z"],
          description:
            "Compute zone (e.g. us-central1-a) for a zonal cluster. Overrides the default compute/zone property value for this command invocation",
          args: { name: "ZONE", description: "String", suggestions: [] },
        },
      ],
    },
    {
      name: "hub",
      description:
        "Centrally manage features and services on all your Kubernetes clusters with fleet",
      subcommands: [
        {
          name: "cloudrun",
          description: "Manage the CloudRun feature",
          subcommands: [
            {
              name: "apply",
              description: "Deploy or update the CloudRun feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2282,
                flag2292,
                flag2445,
                flag4900,
                flag4902,
                flag5091,
                flag5267,
                flag5278,
                flag5453,
                flag5699,
                flag6365,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "describe",
              description: "Describe the status of the CloudRun feature",
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
            },
            {
              name: "disable",
              description: "Disable the CloudRun feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable the CloudRun feature",
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
            },
          ],
        },
        {
          name: "clusterupgrade",
          description: "Configure the Fleet clusterupgrade feature",
          subcommands: [
            {
              name: "create",
              description:
                "Create the clusterupgrade feature for a fleet within a given project",
              options: [
                flag42,
                flag46,
                flag282,
                flag1201,
                flag2292,
                flag2927,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15238,
                flag15242,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "describe",
              description:
                "Describe the clusterupgrade feature for a fleet within a given project",
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
                flag13787,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description:
                "Update the clusterupgrade feature for a fleet within a given project",
              options: [
                flag42,
                flag46,
                flag282,
                flag1201,
                flag2292,
                flag2927,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag12748,
                flag12943,
                flag14975,
                flag15238,
                flag15242,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "config-management",
          description: "Use the Config Management feature",
          subcommands: [
            {
              name: "describe",
              description: "Describe the Config Management feature",
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
            },
            {
              name: "disable",
              description: "Disable the Config Management feature",
              options: [
                flag42,
                flag46,
                flag389,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4903,
                flag5044,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15109,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "create",
          description: "Create a fleet",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1207,
            flag1209,
            flag2292,
            flag3734,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag11637,
            flag11946,
            flag13449,
            flag14975,
            flag15315,
            flag15424,
            flag15650,
          ],
        },
        {
          name: "dataplane-v2-encryption",
          description: "Manage Dataplane V2 Encryption Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describes the status of the Dataplane V2 Encryption Feature resource",
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
            },
            {
              name: "disable",
              description: "Disables the Dataplane V2 Encryption Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enables the Dataplane V2 Encryption Feature",
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
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a fleet",
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
        },
        {
          name: "describe",
          description: "Show fleet info",
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
        },
        {
          name: "features",
          description: "Manage Hub Feature resources",
          subcommands: [
            {
              name: "list",
              description: "List enabled features",
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
                flag6709,
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
          name: "fleetobservability",
          description: "Manage Fleet Observability Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describes the status of the Fleet Observability Feature resource",
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
            },
            {
              name: "disable",
              description: "Disables the Fleet Observability Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enables the Fleet Observability Feature",
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
            },
            {
              name: "update",
              description: "Updates the Fleet Observability Feature resource",
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
                flag7373,
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
          name: "identity-service",
          description: "Manage Identity Service Feature",
          subcommands: [
            {
              name: "apply",
              description: "Update the Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2283,
                flag2292,
                flag4900,
                flag4902,
                flag4909,
                flag5091,
                flag5453,
                flag5699,
                flag6744,
                flag7356,
                flag7757,
                flag10969,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description:
                "Delete a resource from the Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4904,
                flag5091,
                flag5453,
                flag5699,
                flag6744,
                flag7356,
                flag7757,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "describe",
              description:
                "Prints the status of all clusters with Identity Service installed",
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
            {
              name: "disable",
              description: "Disable Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable the Identity Service Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4910,
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
            },
          ],
        },
        {
          name: "ingress",
          description: "Manage Multi-cluster Ingress Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of Multi-cluster Ingress Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable Multi-cluster Ingress Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable Multi-cluster Ingress Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2263,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6743,
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
              description: "Update Multi-cluster Ingress Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2263,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6743,
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
          name: "list",
          description: "List fleets visible to the user in an organization",
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
            flag10776,
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
          name: "memberships",
          description:
            "Manage memberships of all your GKE and other Kubernetes clusters with fleets",
          subcommands: [
            {
              name: "bindings",
              description: "Membership Bindings for permissions",
              subcommands: [
                {
                  name: "create",
                  description: "Create a Membership Binding",
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
                    flag6413,
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag13341,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a Membership Binding",
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
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show Membership-Binding info",
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
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List Bindings in a Membership",
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
                    flag7099,
                    flag7356,
                    flag7760,
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
                  description: "Update the Binding in a Membership",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1723,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6742,
                    flag7356,
                    flag7761,
                    flag11637,
                    flag11946,
                    flag12637,
                    flag13341,
                    flag14975,
                    flag15167,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "BINDING",
                    description:
                      "ID of the binding or fully qualified identifier for the binding.\n+\nTo set the `binding` attribute:\n* provide the argument `BINDING` on the command line",
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a membership",
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
                flag7011,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `membership` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a membership",
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
                flag7011,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `membership` on the command line",
              },
            },
            {
              name: "generate-gateway-rbac",
              description:
                "Generate RBAC policy files for connected clusters by the user",
              options: [
                flag42,
                flag46,
                flag541,
                flag664,
                flag1201,
                flag2292,
                flag2444,
                flag4900,
                flag4902,
                flag5091,
                flag5399,
                flag5453,
                flag5699,
                flag6365,
                flag7356,
                flag7759,
                flag11637,
                flag11946,
                flag11978,
                flag13121,
                flag13131,
                flag14975,
                flag15315,
                flag15349,
                flag15424,
              ],
            },
            {
              name: "get-credentials",
              description:
                "Fetch credentials for a fleet-registered cluster to be used in Connect Gateway",
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
                flag7054,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP_NAME",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
              },
            },
            {
              name: "list",
              description: "List memberships",
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
                flag6694,
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
              name: "register",
              description: "Register a cluster with a fleet",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2445,
                flag4340,
                flag4900,
                flag4902,
                flag5091,
                flag5267,
                flag5278,
                flag5425,
                flag5453,
                flag5699,
                flag5828,
                flag5985,
                flag6365,
                flag6925,
                flag7356,
                flag7550,
                flag11637,
                flag11822,
                flag11853,
                flag11946,
                flag13499,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP_NAME",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
              },
            },
            {
              name: "support-access",
              description: "Membership used for support access",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe support access for the specified membership",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
                {
                  name: "disable",
                  description:
                    "Disable support access for the specified membership",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
                {
                  name: "enable",
                  description:
                    "Enable support access for the specified membership",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
                {
                  name: "get-yaml",
                  description:
                    "Generates YAML for anthos support RBAC policies",
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
                    flag7055,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag11977,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "MEMBERSHIP_NAME",
                    description:
                      "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
                  },
                },
              ],
            },
            {
              name: "unregister",
              description: "Unregister a cluster from a fleet",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2445,
                flag4900,
                flag4902,
                flag5091,
                flag5267,
                flag5278,
                flag5453,
                flag5699,
                flag6365,
                flag7055,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15107,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP_NAME",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `MEMBERSHIP_NAME` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a membership",
              options: [
                flag42,
                flag46,
                flag721,
                flag1201,
                flag1723,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7011,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "MEMBERSHIP",
                description:
                  "ID of the membership or fully qualified identifier for the membership.\n+\nTo set the `membership` attribute:\n* provide the argument `membership` on the command line",
              },
            },
          ],
        },
        {
          name: "mesh",
          description: "Manage Service Mesh Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of Service Mesh Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable Service Mesh Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4905,
                flag5041,
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
            },
            {
              name: "enable",
              description: "Enable Service Mesh Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4908,
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
            },
            {
              name: "update",
              description:
                "Update the configuration of the Service Mesh Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2241,
                flag2292,
                flag2480,
                flag4900,
                flag4902,
                flag4908,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7547,
                flag7762,
                flag10970,
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
          name: "multi-cluster-services",
          description: "Manage Multi-cluster Services Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of the Multi-cluster Services Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable the Multi-cluster Services Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable the Multi-cluster Services Feature",
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
            },
          ],
        },
        {
          name: "operations",
          description: "Manage Anthos fleet long-running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe a long-running operation",
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
                flag7095,
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
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation` on the command line",
              },
            },
            {
              name: "list",
              description: "List long-running operations",
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
                flag6586,
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
              description: "Poll a long-running operation for completion",
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
                flag7095,
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
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
        {
          name: "packages",
          description: "Manage Fleet Packages resources",
          subcommands: [
            {
              name: "create",
              description: "Create Package Rollouts Fleet Package",
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
                flag6677,
                flag7356,
                flag11637,
                flag11946,
                flag14152,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: { name: "NAME", description: "Resource name" },
            },
            {
              name: "delete",
              description: "Delete Package Rollouts Fleet Package",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5075,
                flag5091,
                flag5453,
                flag5699,
                flag6675,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FLEET_PACKAGE",
                description:
                  "ID of the fleet-package or fully qualified identifier for the fleet-package.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `fleet_package` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe Package Rollouts Fleet Package",
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
                flag6675,
                flag7356,
                flag11637,
                flag11946,
                flag13769,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FLEET_PACKAGE",
                description:
                  "ID of the fleet-package or fully qualified identifier for the fleet-package.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `fleet_package` on the command line",
              },
            },
            {
              name: "list",
              description: "List Package Rollouts Fleet Packages",
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
                flag6677,
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
              name: "resource-bundles",
              description:
                "Commands for managing Package Rollouts Resource Bundles",
              subcommands: [
                {
                  name: "create",
                  description: "Create Package Rollouts Resource Bundle",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3273,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "delete",
                  description: "Delete Package Rollouts Resource Bundle",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5077,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "describe",
                  description: "Describe Package Rollouts Resource Bundle",
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
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "list",
                  description: "List Package Rollouts Resource Bundles",
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
                    flag6677,
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
                  name: "releases",
                  description:
                    "Commands for managing Package Rollouts Releases",
                  subcommands: [
                    {
                      name: "create",
                      description: "Create Package Rollouts Release",
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
                        flag6504,
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14153,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "delete",
                      description: "Delete Package Rollouts Release",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5076,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "RELEASE",
                        description:
                          "Release identifier, either a version or tag",
                      },
                    },
                    {
                      name: "describe",
                      description: "Describe Package Rollouts Release",
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
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "RELEASE",
                        description:
                          "Release identifier, either a version or tag",
                      },
                    },
                    {
                      name: "list",
                      description: "List Releases of a Resource Bundle",
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
                        flag6677,
                        flag7356,
                        flag11059,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag13948,
                        flag14975,
                        flag15249,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "update",
                      description: "Update Package Rollouts Release",
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
                        flag6504,
                        flag6677,
                        flag7356,
                        flag11637,
                        flag11946,
                        flag12954,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "RELEASE",
                        description:
                          "Release identifier, either a version or tag",
                      },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update Package Rollouts Resource Bundle",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag3273,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
              ],
            },
            {
              name: "rollouts",
              description: "Commands for managing Rollouts",
              subcommands: [
                {
                  name: "abort",
                  description: "Abort Rollout resource",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4913,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6676,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12008,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROLLOUT",
                    description:
                      "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe Rollout resource",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4914,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6483,
                    flag6677,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: { name: "NAME", description: "Resource name" },
                },
                {
                  name: "list",
                  description: "List Rollouts of a Fleet Package",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag4914,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6483,
                    flag6515,
                    flag6677,
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
                  name: "resume",
                  description: "Resume suspended Rollout",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4913,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6676,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12011,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROLLOUT",
                    description:
                      "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
                  },
                },
                {
                  name: "suspend",
                  description: "Suspend in-progress Rollout",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag4913,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6676,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12013,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROLLOUT",
                    description:
                      "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
                  },
                },
              ],
            },
            {
              name: "update",
              description: "Update Package Rollouts Fleet Package",
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
                flag6675,
                flag7356,
                flag11637,
                flag11946,
                flag14152,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FLEET_PACKAGE",
                description:
                  "ID of the fleet-package or fully qualified identifier for the fleet-package.\n+\nTo set the `fleet-package` attribute:\n* provide the argument `fleet_package` on the command line",
              },
            },
          ],
        },
        {
          name: "policycontroller",
          description: "Manage Policy Controller Feature",
          subcommands: [
            {
              name: "content",
              description: "Manage Policy Controller content",
              subcommands: [
                {
                  name: "bundles",
                  description: "Manage Policy Controller content bundles",
                  subcommands: [
                    {
                      name: "remove",
                      description:
                        "Removes a bundle installation for Policy Controller content",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "BUNDLE_NAME",
                        description:
                          "The constraint bundle to remove from Policy Controller",
                      },
                    },
                    {
                      name: "set",
                      description:
                        "Sets bundle installation for Policy Controller content",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4639,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
                        flag9580,
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                      args: {
                        name: "BUNDLE_NAME",
                        description:
                          "The constraint bundle to install in Policy Controller",
                      },
                    },
                  ],
                },
                {
                  name: "templates",
                  description: "Manage Policy Controller content templates",
                  subcommands: [
                    {
                      name: "disable",
                      description:
                        "Disable template installation for Policy Controller content",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
                        flag11637,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                      ],
                    },
                    {
                      name: "enable",
                      description:
                        "Installs the template library for Policy Controller",
                      options: [
                        flag42,
                        flag46,
                        flag390,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6745,
                        flag7356,
                        flag7762,
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
              name: "deployment",
              description: "Configure Policy Controller component deployments",
              subcommands: [
                {
                  name: "remove",
                  description:
                    "Removes configuration properties from Policy Controller components",
                  options: [
                    flag42,
                    flag46,
                    flag390,
                    flag1201,
                    flag2292,
                    flag3983,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6745,
                    flag7356,
                    flag7762,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: [
                    {
                      name: "DEPLOYMENT",
                      description:
                        'The PolicyController deployment component (i.e, "admission",  "audit" or "mutation" from which to remove configuration',
                    },
                    { name: "PROPERTY", description: "Property to be removed" },
                    {
                      name: "VALUE",
                      description:
                        "This is only required to remove a toleration. It should not be included for any other property",
                      isOptional: true,
                    },
                  ],
                },
                {
                  name: "set",
                  description:
                    "Sets configuration of the Policy Controller components",
                  options: [
                    flag42,
                    flag46,
                    flag390,
                    flag1201,
                    flag2292,
                    flag3984,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6745,
                    flag7356,
                    flag7762,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: [
                    {
                      name: "DEPLOYMENT",
                      description:
                        'The PolicyController deployment component (e.g. "admission",  "audit" or "mutation") upon which to set configuration',
                    },
                    { name: "PROPERTY", description: "Property to be set" },
                    {
                      name: "VALUE",
                      description:
                        "The value to set the property to. Valid input varies based on the property being set",
                    },
                  ],
                },
              ],
            },
            {
              name: "describe",
              description: "Describe Policy Controller feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "detach",
              description: "Detach Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "disable",
              description: "Disable (Uninstall) Policy Controller",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag4906,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "enable",
              description: "Enable Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag774,
                flag1201,
                flag1657,
                flag2292,
                flag2339,
                flag4638,
                flag4900,
                flag4902,
                flag4907,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7341,
                flag7356,
                flag7762,
                flag8015,
                flag8041,
                flag9051,
                flag9101,
                flag9614,
                flag9896,
                flag9933,
                flag9936,
                flag10075,
                flag11637,
                flag11946,
                flag12066,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "suspend",
              description: "Suspend Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7356,
                flag7762,
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
                "Updates the configuration of Policy Controller Feature",
              options: [
                flag42,
                flag46,
                flag390,
                flag774,
                flag1201,
                flag1657,
                flag2292,
                flag2339,
                flag4638,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6745,
                flag7341,
                flag7356,
                flag7762,
                flag8015,
                flag8041,
                flag9896,
                flag9933,
                flag9936,
                flag10075,
                flag10965,
                flag11637,
                flag11946,
                flag12066,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "rbacrolebindingactuation",
          description: "Manage RbacRoleBinding Actuation",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of the RbacRoleBinding Actuation Feature in a fleet",
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
            },
            {
              name: "update",
              description: "Update RbacRoleBinding Actuation Feature",
              options: [
                flag42,
                flag46,
                flag127,
                flag464,
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
                flag12542,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "rollouts",
          description: "Manage rollouts",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a rollout",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a rollout resource",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a fleet rollout",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "force-complete-stage",
              description: "Force-complete a rollout stage",
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
                flag14342,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "list",
              description: "List all fleet rollouts",
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
            {
              name: "pause",
              description: "Pause a rollout resource",
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
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
            {
              name: "resume",
              description: "Resume a rollout resource",
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
                flag13296,
                flag14975,
                flag15315,
                flag15362,
                flag15424,
              ],
              args: {
                name: "ROLLOUT",
                description:
                  "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
              },
            },
          ],
        },
        {
          name: "rolloutsequences",
          description: "Create and manage rollout sequences",
          subcommands: [
            {
              name: "create",
              description: "Create a rollout sequence resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3750,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6391,
                flag7356,
                flag11637,
                flag11946,
                flag14341,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a rollout sequence resource",
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
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a rollout sequence",
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
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "list",
              description: "List all rollout sequences",
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
            {
              name: "update",
              description: "Update a rollout sequence resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3750,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6391,
                flag7356,
                flag11637,
                flag11946,
                flag14340,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
            {
              name: "upgrade",
              description:
                "Upgrade the clusters in a rollout sequence resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2478,
                flag4900,
                flag4902,
                flag5046,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag10543,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROLLOUTSEQUENCE",
                description:
                  "ID of the rolloutSequence or fully qualified identifier for the rolloutSequence.\n+\nTo set the `rollout_sequence` attribute:\n* provide the argument `rolloutSequence` on the command line",
              },
            },
          ],
        },
        {
          name: "scopes",
          description: "Manage scopes of all your GKE fleets",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description: "Add IAM policy binding to a Fleet Scope",
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
                flag13137,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "create",
              description: "Create a new fleet scope",
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
                flag6413,
                flag7356,
                flag8111,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a fleet scope",
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
                flag7018,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a fleet scope",
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
                flag7018,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for a Fleet Scope",
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
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List fleet scopes in a project permitted to be viewed by the caller",
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
            {
              name: "list-memberships",
              description: "List memberships bound to a fleet scope",
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
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `SCOPE` on the command line",
              },
            },
            {
              name: "namespaces",
              description:
                "Fleet namespaces are the fleet equivalent of k8s cluster namespaces",
              subcommands: [
                {
                  name: "create",
                  description: "Create a fleet namespace",
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
                    flag6413,
                    flag7356,
                    flag8110,
                    flag11637,
                    flag11946,
                    flag13353,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a fleet namespace",
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
                    flag13353,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show fleet namespace info",
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
                    flag13353,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
                {
                  name: "get-credentials",
                  description:
                    "Fetch credentials for a membership with a particular namespace",
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
                    flag7758,
                    flag7755,
                    flag11637,
                    flag11946,
                    flag13694,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "Name of the namespace for which to get access to memberships",
                  },
                },
                {
                  name: "list",
                  description: "List fleet namespaces in a project",
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
                    flag13341,
                    flag13948,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description: "Update a fleet namespace",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1723,
                    flag1785,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12637,
                    flag12666,
                    flag13353,
                    flag14975,
                    flag15167,
                    flag15197,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAMESPACE",
                    description:
                      "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `NAMESPACE` on the command line",
                  },
                },
              ],
            },
            {
              name: "rbacrolebindings",
              description: "Fleet scope RBAC RoleBindings for permissions",
              subcommands: [
                {
                  name: "create",
                  description: "Create an RBAC RoleBinding",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag2654,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5395,
                    flag5453,
                    flag5699,
                    flag6413,
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag13139,
                    flag13343,
                    flag14975,
                    flag15337,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a fleet scope RBAC RoleBinding",
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
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag13343,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Show fleet scope RBAC RoleBinding information",
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
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag13343,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List RBAC RoleBindings in a fleet scope",
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
                    flag13342,
                    flag13948,
                    flag14975,
                    flag15249,
                    flag15315,
                    flag15424,
                  ],
                },
                {
                  name: "update",
                  description: "Update a fleet scope RBAC RoleBinding",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag1723,
                    flag2292,
                    flag2654,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5394,
                    flag5453,
                    flag5699,
                    flag6746,
                    flag7356,
                    flag11637,
                    flag11946,
                    flag12637,
                    flag13139,
                    flag13343,
                    flag14975,
                    flag15167,
                    flag15336,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "NAME",
                    description:
                      "ID of the rbacrolebinding or fully qualified identifier for the rbacrolebinding.\n+\nTo set the `rbacrolebinding` attribute:\n* provide the argument `NAME` on the command line",
                  },
                },
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description: "Remove IAM policy binding of a Fleet Scope",
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
                flag13138,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a scope",
              options: [
                flag42,
                flag46,
                flag283,
                flag1201,
                flag1723,
                flag1786,
                flag2292,
                flag2926,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7018,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag12667,
                flag12749,
                flag12944,
                flag14975,
                flag15167,
                flag15198,
                flag15239,
                flag15244,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SCOPE",
                description:
                  "ID of the scope or fully qualified identifier for the scope.\n+\nTo set the `scope` attribute:\n* provide the argument `scope` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a fleet",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1207,
            flag1209,
            flag1723,
            flag2292,
            flag3734,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag13449,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
            flag15650,
          ],
        },
        {
          name: "workload-identity",
          description: "Manage Workload Identity Feature",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the status of Workload Identity Feature resource",
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
            },
            {
              name: "disable",
              description: "Disable Workload Identity Feature",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5044,
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
            },
            {
              name: "enable",
              description: "Enable Workload Identity Feature",
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
            },
            {
              name: "scope-tenancy-pool",
              description:
                "Manage Workload Identity Feature scope tenancy pool",
              subcommands: [
                {
                  name: "set",
                  description: "Set Scope Tenancy Pool",
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
                    name: "WORKLOAD_IDENTITY_POOL",
                    description:
                      "ID of the workloadidentitypool or fully qualified identifier for the workloadidentitypool.\n+\nTo set the `workloadidentitypool` attribute:\n* provide the argument `WORKLOAD_IDENTITY_POOL` on the command line",
                  },
                },
                {
                  name: "unset",
                  description: "Unset Scope Tenancy Pool",
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
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "images",
      description: "List and manipulate Google Container Registry images",
      subcommands: [
        {
          name: "add-tag",
          description: "Adds tags to existing image",
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
          args: [
            {
              name: "SRC_IMAGE",
              description:
                "The fully qualified name(s) of image(s) to add tags for. The name(s) should be formatted as *.gcr.io/PROJECT_ID/IMAGE_PATH@sha256:DIGEST or *.gcr.io/PROJECT_ID/IMAGE_PATH:TAG",
            },
            {
              name: "DEST_IMAGE",
              description:
                "The fully qualified name(s) of image(s) to be the new tags. The name(s) should be formatted as  *.gcr.io/PROJECT_ID/IMAGE_PATH:TAG",
              isVariadic: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete existing images",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force-delete-tags",
              description:
                "If there are tags pointing to an image to be deleted then they must all be specified explicitly, or this flag must be specified, for the command to succeed",
            },
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
            name: "IMAGE_NAME",
            description:
              "The fully qualified name(s) of image(s) to delete. The name(s) should be formatted as *.gcr.io/PROJECT_ID/IMAGE_PATH@sha256:DIGEST or *.gcr.io/PROJECT_ID/IMAGE_PATH:TAG",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Lists information about the specified image",
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
            name: "IMAGE_NAME",
            description:
              "The fully qualified name(s) of image(s) to describe. The name(s) should be formatted as *.gcr.io/PROJECT_ID/IMAGE_PATH@sha256:DIGEST or *.gcr.io/PROJECT_ID/IMAGE_PATH:TAG",
          },
        },
        {
          name: "list",
          description: "List existing images",
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
              name: "--repository",
              description:
                "The name of the repository. Format: *.gcr.io/repository. Defaults to gcr.io/<project>, for the active project",
              args: {
                name: "REPOSITORY",
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
          name: "list-gcr-usage",
          description: "List Container Registry usage",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "Folder ID",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            {
              name: "--organization",
              description: "Organization ID",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-tags",
          description: "List tags and digests for the specified image",
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
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.\n The default is *~timestamp*",
              args: { name: "FIELD", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_NAME",
            description:
              "The name of the image to list tags for. The name format should be *.gcr.io/PROJECT_ID/IMAGE_PATH",
          },
        },
        {
          name: "untag",
          description: "Remove existing image tags",
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
            name: "IMAGE_NAME",
            description:
              "The fully qualified name(s) of image(s) to untag. The name(s) should be formatted as  *.gcr.io/PROJECT_ID/IMAGE_PATH:TAG",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "node-pools",
      description:
        "Create and delete operations for Google Kubernetes Engine node pools",
      subcommands: [
        {
          name: "complete-upgrade",
          description: "Complete a node pool upgrade",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description:
                "Cluster to which the node pool belongs. Overrides the default *container/cluster* property value for this command invocation",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description:
              "Name of the node pool for which the upgrade is to be completed",
          },
        },
        {
          name: "create",
          description: "Create a node pool in a running cluster",
          options: [
            flag20,
            {
              name: "--accelerator-network-profile",
              description:
                "Accelerator Network Profile that will be used by the node pool.\n+\nCurrently only the `auto` value is supported. A compatible Accelerator machine type needs to be specified with the `--machine-type` flag.\nAn Accelerator Network Profile will be created if it does not exist",
              args: {
                name: "ACCELERATOR_NETWORK_PROFILE",
                description: "String",
                suggestions: [],
              },
            },
            flag42,
            flag46,
            flag202,
            {
              name: "--additional-node-network",
              description:
                "Attach an additional network interface to each node in the pool.\nThis parameter can be specified up to 7 times.\n+\nE.g., to configure the additional interface with 'dataplane' network, 'subnet-dp' subnetwork and dual-stack, run:\n  --additional-node-network network=dataplane,subnetwork=subnet-dp,stack-type=ipv4-ipv6\n+\n*network*::: (Required) The network to attach the new interface to.\n+\n*subnetwork*::: (Required) The subnetwork to attach the new interface to.\n+\n*stack-type*::: (Optional) The stack-type to be set on the new interface.\nSTACK_TYPE must be one of: ipv4, ipv4-ipv6, ipv6",
              args: {
                name: "network=NETWORK_NAME,subnetwork=SUBNETWORK_NAME[,stack-type=STACK_TYPE]",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--additional-pod-network",
              description:
                'Specify the details of a secondary range to be used for an additional pod network.\nNot needed if you use "host" typed NIC from this network.\nThis parameter can be specified up to 35 times.\n+\ne.g. --additional-pod-network subnetwork=subnet-dp,pod-ipv4-range=sec-range-blue,max-pods-per-node=8.\n+\n*subnetwork*::: (Optional) The name of the subnetwork to link the pod network to.\nIf not specified, the pod network defaults to the subnet connected to the default network interface.\n+\n*pod-ipv4-range*::: (Required) The name of the secondary range in the subnetwork.\nThe range must hold at least (2 * MAX_PODS_PER_NODE * MAX_NODES_IN_RANGE) IPs.\n+\n*max-pods-per-node*::: (Optional) Maximum amount of pods per node that can utilize this ipv4-range.\nDefaults to NodePool (if specified) or Cluster value',
              args: {
                name: "subnetwork=SUBNETWORK_NAME,pod-ipv4-range=SECONDARY_RANGE_NAME,[max-pods-per-node=NUM_PODS]",
                description: "Dict",
                suggestions: [],
              },
            },
            flag720,
            flag910,
            flag1201,
            flag1244,
            flag1249,
            flag1251,
            {
              name: "--cluster",
              description:
                "The cluster to add the node pool to. Overrides the default *container/cluster* property value for this command invocation",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            {
              name: "--confidential-node-type",
              description:
                "Enable confidential nodes for the node pool. Enabling Confidential Nodes\nwill create nodes using Confidential VM\nhttps://docs.cloud.google.com/compute/docs/about-confidential-vm. _CONFIDENTIAL_NODE_TYPE_ must be one of: *sev*, *sev_snp*, *tdx*, *disabled*",
              args: {
                name: "CONFIDENTIAL_NODE_TYPE",
                description: "String",
                suggestions: ["sev", "sev_snp", "tdx", "disabled"],
              },
            },
            flag2292,
            flag2338,
            flag2421,
            {
              name: "--create-pod-ipv4-range",
              description:
                "Create a new pod range for the node pool. The name and range of the\npod range can be customized via optional ``name'' and ``range'' keys.\n+\n``name'' specifies the name of the secondary range to be created.\n+\n``range'' specifies the IP range for the new secondary range. This can either\nbe a netmask size (e.g. \"/20\") or a CIDR range (e.g. \"10.0.0.0/20\").\nIf a netmask size is specified, the IP is automatically taken from the\nfree space in the cluster's network.\n+\nMust be used in VPC native clusters. Can not be used in conjunction with the\n`--pod-ipv4-range` option.\n+\nExamples:\n+\nCreate a new pod range with a default name and size.\n+\n  $ {command} --create-pod-ipv4-range \"\"\n+\nCreate a new pod range named ``my-range'' with netmask of size ``21''.\n+\n  $ {command} --create-pod-ipv4-range name=my-range,range=/21\n+\nCreate a new pod range with a default name with the primary range of\n``10.100.0.0/16''.\n+\n  $ {command} --create-pod-ipv4-range range=10.100.0.0/16\n+\nCreate a new pod range with the name ``my-range'' with a default range.\n+\n  $ {command} --create-pod-ipv4-range name=my-range\n+\nMust be used in VPC native clusters. Can not be used in conjunction with the\n`--pod-ipv4-range` option",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--data-cache-count",
              description:
                "Specifies the number of local SSDs to be utilized for GKE Data Cache in the node pool",
              args: {
                name: "DATA_CACHE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag3667,
            flag3672,
            flag4040,
            {
              name: "--enable-autorepair",
              description:
                "Enable node autorepair feature for a node pool.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --enable-autorepair\n+\nNode autorepair is enabled by default for node pools using COS, COS_CONTAINERD, UBUNTU or UBUNTU_CONTAINERD\nas a base image, use --no-enable-autorepair to disable.\n+\nSee https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair for more info",
            },
            flag4046,
            {
              name: "--enable-autoupgrade",
              description:
                "Sets autoupgrade feature for a node pool.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --enable-autoupgrade\n+\nSee https://cloud.google.com/kubernetes-engine/docs/node-auto-upgrades for more info.\n+\nEnabled by default, use *--no-enable-autoupgrade* to disable",
            },
            {
              name: "--enable-best-effort-provision",
              description: "Enable best effort provision for nodes",
            },
            flag4058,
            {
              name: "--enable-confidential-nodes",
              description:
                "Enable confidential nodes for the node pool. Enabling Confidential Nodes\nwill create nodes using Confidential VM\nhttps://docs.cloud.google.com/compute/docs/about-confidential-vm",
            },
            {
              name: "--enable-confidential-storage",
              description:
                "Enable confidential storage for the node pool. Enabling Confidential Storage will\ncreate boot disk with confidential mode",
            },
            flag4142,
            flag4152,
            flag4160,
            flag4180,
            {
              name: "--enable-nested-virtualization",
              description:
                "Enables the use of nested virtualization on the node pool.\nDefaults to `false`. Can only be enabled on UBUNTU_CONTAINERD base image\nor COS_CONTAINERD base image with version 1.28.4-gke.1083000 and above",
            },
            flag4265,
            flag4277,
            flag4318,
            {
              name: "--ephemeral-storage-local-ssd",
              description:
                "Parameters for the ephemeral storage filesystem.\nIf unspecified, ephemeral storage is backed by the boot disk.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example cluster --ephemeral-storage-local-ssd count=2\n+\n'count' specifies the number of local SSDs to use to back ephemeral\nstorage. Local SDDs use NVMe interfaces. For first- and second-generation\nmachine types, a nonzero count field is required for local ssd to be configured.\nFor third-generation machine types, the count field is optional because the count\nis inferred from the machine type.\n+\nSee https://cloud.google.com/compute/docs/disks/local-ssd for more information",
              args: {
                name: "EPHEMERAL_STORAGE_LOCAL_SSD",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag4920,
            flag5091,
            flag5453,
            flag5691,
            flag5671,
            {
              name: "--image-type",
              description:
                "The image type to use for the node pool. Defaults to server-specified.\n+\nImage Type specifies the base OS that the nodes in the node pool will run on.\nIf an image type is specified, that will be assigned to the node pool and all\nfuture upgrades will use the specified image type. If it is not specified the\nserver will pick the default image type.\n+\nThe default image type and the list of valid image types are available\nusing the following command.\n+\n  $ gcloud container get-server-config",
              args: {
                name: "IMAGE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag6398,
            {
              name: "--local-nvme-ssd-block",
              description:
                "Adds the requested local SSDs on all nodes in default node pool(s) in the new cluster.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example cluster --local-nvme-ssd-block count=2\n+\n'count' must be between 1-8\n+\n\nNew nodes, including ones created by resize or recreate, will have these local SSDs.\n+\nFor first- and second-generation machine types, a nonzero count field is\nrequired for local ssd to be configured. For third-generation machine types, the\ncount field is optional because the count is inferred from the machine type.\n+\nSee https://cloud.google.com/compute/docs/disks/local-ssd for more information",
              args: {
                name: "LOCAL_NVME_SSD_BLOCK",
                description: "Dict",
                suggestions: [],
              },
            },
            flag6566,
            flag6607,
            flag6579,
            flag7356,
            flag7388,
            flag7416,
            flag7653,
            flag7663,
            flag7685,
            {
              name: "--max-surge-upgrade",
              description:
                "Number of extra (surge) nodes to be created on each upgrade of the node pool.\n+\nSpecifies the number of extra (surge) nodes to be created during this node\npool's upgrades. For example, running the following command will result in\ncreating an extra node each time the node pool is upgraded:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --max-surge-upgrade=1   --max-unavailable-upgrade=0\n+\nMust be used in conjunction with '--max-unavailable-upgrade'",
              args: {
                name: "MAX_SURGE_UPGRADE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--max-unavailable-upgrade",
              description:
                "Number of nodes that can be unavailable at the same time on each upgrade of the\nnode pool.\n+\nSpecifies the number of nodes that can be unavailable at the same time during\nthis node pool's upgrades. For example, running the following command will\nresult in having 3 nodes being upgraded in parallel (1 + 2), but keeping always\nat least 3 (5 - 2) available each time the node pool is upgraded:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --num-nodes=5   --max-surge-upgrade=1 --max-unavailable-upgrade=2\n+\nMust be used in conjunction with '--max-surge-upgrade'",
              args: {
                name: "MAX_UNAVAILABLE_UPGRADE",
                description: "Int",
                suggestions: [],
              },
            },
            flag7827,
            flag7812,
            {
              name: "--min-cpu-platform",
              description:
                'When specified, the nodes for the new node pool will be scheduled on host with\nspecified CPU architecture or a newer one.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --min-cpu-platform=PLATFORM\n+\nTo list available CPU platforms in given zone, run:\n+\n  $ gcloud beta compute zones describe ZONE --format="value(availableCpuPlatforms)"\n+\nCPU platform selection is available only in selected zones',
              args: {
                name: "PLATFORM",
                description: "String",
                suggestions: [],
              },
            },
            flag7898,
            {
              name: "--min-provision-nodes",
              description:
                "Specifies the minimum number of nodes to be provisioned during creation",
              args: {
                name: "MIN_PROVISION_NODES",
                description: "Int",
                suggestions: [],
              },
            },
            flag8199,
            {
              name: "--node-architecture-taint-behavior",
              description:
                "Control how architecture taint should be applied to nodes in a new node pool.\n+\n  Supported values:\n    * unspecified: Default behavior, currently the same as `arm`.\n    * arm: kubernetes.io/arch=arm:NoSchedule taint will be added for ARM nodes.\n    * none: No architecture taint will be applied.\n+\n\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-architecture-taint-behavior=none\n+\nTo read more about node-taints, see https://cloud.google.com/kubernetes-engine/docs/node-taints.\n+\n_NODE_ARCHITECTURE_TAINT_BEHAVIOR_ must be one of: *unspecified*, *arm*, *none*",
              args: {
                name: "NODE_ARCHITECTURE_TAINT_BEHAVIOR",
                description: "String",
                suggestions: ["unspecified", "arm", "none"],
              },
            },
            flag10495,
            flag10496,
            {
              name: "--node-group",
              description:
                "Assign instances of this pool to run on the specified Google Compute Engine\nnode group. This is useful for running workloads on sole tenant nodes.\n+\nTo see available sole tenant node-groups, run:\n+\n  $ gcloud compute sole-tenancy node-groups list\n+\nTo create a sole tenant node group, run:\n+\n  $ gcloud compute sole-tenancy node-groups create [GROUP_NAME]     --location [ZONE] --node-template [TEMPLATE_NAME]     --target-size [TARGET_SIZE]\n+\nSee https://cloud.google.com/compute/docs/nodes for more\ninformation on sole tenancy and node groups",
              args: {
                name: "NODE_GROUP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--node-labels",
              description:
                "Applies the given Kubernetes labels on all nodes in the new node pool.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-labels=label1=value1,label2=value2\n+\nUpdating the node pool's --node-labels flag applies the labels to the Kubernetes Node objects for existing nodes in-place; it does not re-create or replace nodes. New nodes, including ones created by resizing or re-creating nodes, will have these labels on the Kubernetes API Node object. The labels can be used in the `nodeSelector` field. See [](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for examples.\n+\nNote that Kubernetes labels, intended to associate cluster components\nand resources with one another and manage resource lifecycles, are different\nfrom Google Kubernetes Engine labels that are used for the purpose of tracking\nbilling and usage information",
              args: {
                name: "NODE_LABEL",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--node-locations",
              description:
                "The set of zones in which the node pool's nodes should be located.\n+\nMultiple locations can be specified, separated by commas. For example:\n+\n  $ {command} node-pool-1 --cluster=sample-cluster --node-locations=us-central1-a,us-central1-b",
              args: { name: "ZONE", description: "List", suggestions: [] },
            },
            {
              name: "--node-pool-soak-duration",
              description:
                "Time in seconds to be spent waiting during blue-green upgrade before\ndeleting the blue pool and completing the upgrade.\n+\n  $ {command} example-cluster  --node-pool-soak-duration=600s",
              args: {
                name: "NODE_POOL_SOAK_DURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--node-taints",
              description:
                "Applies the given kubernetes taints on all nodes in the new node pool, which can\nbe used with tolerations for pod scheduling.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-taints=key1=val1:NoSchedule,key2=val2:PreferNoSchedule\n+\nTo read more about node-taints, see https://cloud.google.com/kubernetes-engine/docs/node-taints",
              args: {
                name: "NODE_TAINT",
                description: "Dict",
                suggestions: [],
              },
            },
            flag10544,
            {
              name: "--num-nodes",
              description:
                "The number of nodes in the node pool in each of the cluster's zones. Defaults to\n3.\n+\nException: when `--tpu-topology` is specified for multi-host TPU machine types\nthe number of nodes will be defaulted to `(product of topology)/(# of chips per\nVM)`",
              args: { name: "NUM_NODES", description: "Int", suggestions: [] },
            },
            {
              name: "--opportunistic-maintenance",
              description:
                "Opportunistic maintenance options.\n+\nnode-idle-time: Time to be spent waiting for node to be idle\nbefore starting maintenance, ending with 's'. Example: \"3.5s\"\n+\nwindow: The window of time that opportunistic maintenance can run, ending with 's'.\n  Example: A setting of 14 days (1209600s) implies that opportunistic maintenance can only be\n    ran in the 2 weeks leading up to the scheduled maintenance date.\n    Setting 28 days(2419200s) allows opportunistic maintenance to run at any time in the scheduled\n    maintenance window.\n+\nmin-nodes: Minimum number of nodes in the node pool to be available during the opportunistic\n    triggered maintenance.\n+\n  $ {command} example-cluster  --opportunistic-maintenance=node-idle-time=600s,window=600s,min-nodes=2",
              args: {
                name: "node-idle-time=NODE_IDLE_TIME,window=WINDOW,min-nodes=MIN_NODES",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11249,
            flag11305,
            {
              name: "--placement-type",
              description:
                "Placement type allows to define the type of node placement within this node\npool.\n+\n`UNSPECIFIED` - No requirements on the placement of nodes. This is the\ndefault option.\n+\n`COMPACT` - GKE will attempt to place the nodes in a close proximity to each\nother. This helps to reduce the communication latency between the nodes, but\nimposes additional limitations on the node pool size.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --placement-type=COMPACT\n+\n_PLACEMENT_TYPE_ must be one of: *UNSPECIFIED*, *COMPACT*",
              args: {
                name: "PLACEMENT_TYPE",
                description: "String",
                suggestions: ["UNSPECIFIED", "COMPACT"],
              },
            },
            {
              name: "--pod-ipv4-range",
              description:
                "Set the pod range to be used as the source for pod IPs for the pods in this node\npool. NAME must be the name of an existing subnetwork secondary range in the\nsubnetwork for this cluster.\n+\nMust be used in VPC native clusters. Cannot be used with\n`--create-ipv4-pod-range`.\n+\nExamples:\n+\nSpecify a pod range called ``other-range''\n+\n  $ {command} --pod-ipv4-range other-range",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            {
              name: "--preemptible",
              description:
                "Create nodes using preemptible VM instances in the new node pool.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --preemptible\n+\nNew nodes, including ones created by resize or recreate, will use preemptible\nVM instances. See https://cloud.google.com/kubernetes-engine/docs/preemptible-vm\nfor more information on how to use Preemptible VMs with Kubernetes Engine",
            },
            flag11637,
            flag11946,
            flag12297,
            flag12929,
            {
              name: "--reservation-affinity",
              description:
                "The type of the reservation for the node pool. _RESERVATION_AFFINITY_ must be one of: *any*, *none*, *specific*, *any-reservation-then-fail*",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "String",
                suggestions: [
                  "any",
                  "none",
                  "specific",
                  "any-reservation-then-fail",
                ],
              },
            },
            {
              name: "--resource-manager-tags",
              description:
                "Applies the specified comma-separated resource manager tags that has the\nGCE_FIREWALL purpose to all nodes in the new node pool.\n+\nExamples:\n+\n  $ {command} example-node-pool --resource-manager-tags=tagKeys/1234=tagValues/2345\n  $ {command} example-node-pool --resource-manager-tags=my-project/key1=value1\n  $ {command} example-node-pool --resource-manager-tags=12345/key1=value1,23456/key2=value2\n  $ {command} example-node-pool --resource-manager-tags=\n+\nAll nodes, including nodes that are resized or re-created, will have the\nspecified tags on the corresponding Instance object in the Compute Engine API.\nYou can reference these tags in network firewall policy rules. For instructions,\nsee https://cloud.google.com/firewall/docs/use-tags-for-firewalls",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag13043,
            {
              name: "--sandbox",
              description:
                "Enables the requested sandbox on all nodes in the node pool.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --sandbox=\"type=gvisor\"\n+\nThe only supported type is 'gvisor'",
              args: { name: "type=TYPE", description: "Dict", suggestions: [] },
            },
            {
              name: "--scopes",
              description:
                "Specifies scopes for the node instances.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --scopes=https://www.googleapis.com/auth/devstorage.read_only\n+\n  $ {command} node-pool-1 --cluster=example-cluster --scopes=bigquery,storage-rw,compute-ro\n+\nMultiple scopes can be specified, separated by commas. Various scopes are\nautomatically added based on feature usage. Such scopes are not added if an\nequivalent scope already exists.\n+\n- `monitoring-write`: always added to ensure metrics can be written\n- `logging-write`: added if Cloud Logging is enabled\n  (`--enable-cloud-logging`/`--logging`)\n- `monitoring`: added if Cloud Monitoring is enabled\n  (`--enable-cloud-monitoring`/`--monitoring`)\n- `gke-default`: added for Autopilot clusters that use the default service\n  account\n- `cloud-platform`: added for Autopilot clusters that use any other service\n  account\n+\nSCOPE can be either the full URI of the scope or an alias. *Default* scopes are\nassigned to all instances. Available aliases are:\n+\nAlias | URI\n--- | ---\nbigquery | https://www.googleapis.com/auth/bigquery\ncloud-platform | https://www.googleapis.com/auth/cloud-platform\ncloud-source-repos | https://www.googleapis.com/auth/source.full_control\ncloud-source-repos-ro | https://www.googleapis.com/auth/source.read_only\ncompute-ro | https://www.googleapis.com/auth/compute.readonly\ncompute-rw | https://www.googleapis.com/auth/compute\ndatastore | https://www.googleapis.com/auth/datastore\ndefault | https://www.googleapis.com/auth/devstorage.read_only\n| https://www.googleapis.com/auth/logging.write\n| https://www.googleapis.com/auth/monitoring.write\n| https://www.googleapis.com/auth/pubsub\n| https://www.googleapis.com/auth/service.management.readonly\n| https://www.googleapis.com/auth/servicecontrol\n| https://www.googleapis.com/auth/trace.append\ngke-default | https://www.googleapis.com/auth/devstorage.read_only\n| https://www.googleapis.com/auth/logging.write\n| https://www.googleapis.com/auth/monitoring\n| https://www.googleapis.com/auth/service.management.readonly\n| https://www.googleapis.com/auth/servicecontrol\n| https://www.googleapis.com/auth/trace.append\nlogging-write | https://www.googleapis.com/auth/logging.write\nmonitoring | https://www.googleapis.com/auth/monitoring\nmonitoring-read | https://www.googleapis.com/auth/monitoring.read\nmonitoring-write | https://www.googleapis.com/auth/monitoring.write\npubsub | https://www.googleapis.com/auth/pubsub\nservice-control | https://www.googleapis.com/auth/servicecontrol\nservice-management | https://www.googleapis.com/auth/service.management.readonly\nsql (deprecated) | https://www.googleapis.com/auth/sqlservice\nsql-admin | https://www.googleapis.com/auth/sqlservice.admin\nstorage-full | https://www.googleapis.com/auth/devstorage.full_control\nstorage-ro | https://www.googleapis.com/auth/devstorage.read_only\nstorage-rw | https://www.googleapis.com/auth/devstorage.read_write\ntaskqueue | https://www.googleapis.com/auth/taskqueue\ntrace | https://www.googleapis.com/auth/trace.append\nuserinfo-email | https://www.googleapis.com/auth/userinfo.email\n+\nDEPRECATION WARNING: https://www.googleapis.com/auth/sqlservice account scope\nand `sql` alias do not provide SQL instance management capabilities and have\nbeen deprecated. Please, use https://www.googleapis.com/auth/sqlservice.admin\nor `sql-admin` to manage your Google SQL Service instances",
              args: { name: "SCOPE", description: "List", suggestions: [] },
            },
            {
              name: "--secondary-boot-disk",
              description:
                "Attaches secondary boot disks to all nodes in the node pool. Secondary Boot\nDisks (SBD) can accelerate container startup times by preloading container\nimages or data onto disks attached to the nodes. Learn more about\n[Using Secondary Boot Disks](https://cloud.google.com/kubernetes-engine/docs/how-to/data-container-image-preloading)\nfor full requirements (including version, API enablement and source disk images).\n+\nThe value for this flag is a list of key=value pairs. Available keys are:\n+\n*disk-image*::: (Required) The full resource path to the source disk image to\ncreate the secondary boot disks from\n(e.g., `projects/my-project/global/images/my-disk-image`).\n+\n*mode*::: (Optional) The mode of the secondary boot disk. Supported values are:\n  * `CONTAINER_IMAGE_CACHE`: The disk is used to cache container images.\n    This is the default if not specified.\n  * `DATA`: The disk is used to preload arbitrary data, accessible via\n    `hostPath` volume mounts",
              args: {
                name: "disk-image=DISK_IMAGE,[mode=MODE]",
                description: "Dict",
                suggestions: [],
              },
            },
            flag13522,
            flag13748,
            flag13757,
            {
              name: "--sole-tenant-min-node-cpus",
              description:
                "A integer value that specifies the minimum number of vCPUs that each sole\ntenant node must have to use CPU overcommit. If not specified, the CPU\novercommit feature is disabled",
              args: {
                name: "SOLE_TENANT_MIN_NODE_CPUS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--sole-tenant-node-affinity-file",
              description:
                "JSON/YAML file containing the configuration of desired sole tenant\nnodes onto which this node pool could be backed by. These rules filter the\nnodes according to their node affinity labels. A node's affinity labels\ncome from the node template of the group the node is in.\n+\nThe file should contain a list of a JSON/YAML objects. For an example,\nsee https://cloud.google.com/compute/docs/nodes/provisioning-sole-tenant-vms#configure_node_affinity_labels.\nThe following list describes the fields:\n+\n*key*::: Corresponds to the node affinity label keys of\nthe Node resource.\n*operator*::: Specifies the node selection type. Must be one of:\n  `IN`: Requires Compute Engine to seek for matched nodes.\n  `NOT_IN`: Requires Compute Engine to avoid certain nodes.\n*values*::: Optional. A list of values which correspond to the node\naffinity label values of the Node resource",
              args: {
                name: "SOLE_TENANT_NODE_AFFINITY_FILE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                suggestions: [],
              },
            },
            {
              name: "--spot",
              description:
                "Create nodes using spot VM instances in the new node pool.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --spot\n+\nNew nodes, including ones created by resize or recreate, will use spot\nVM instances",
            },
            {
              name: "--standard-rollout-policy",
              description:
                "Standard rollout policy options for blue-green upgrade.\n+\nBatch sizes are specified by one of, batch-node-count or batch-percent.\nThe duration between batches is specified by batch-soak-duration.\n+\n  $ {command} example-cluster  --standard-rollout-policy=batch-node-count=3,batch-soak-duration=60s\n+\n  $ {command} example-cluster  --standard-rollout-policy=batch-percent=0.3,batch-soak-duration=60s",
              args: {
                name: "batch-node-count=BATCH_NODE_COUNT,batch-percent=BATCH_NODE_PERCENTAGE,batch-soak-duration=BATCH_SOAK_DURATION",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--storage-pools",
              description:
                "A list of storage pools where the node pool's boot disks will be provisioned.\n+\nSTORAGE_POOL must be in the format\nprojects/project/zones/zone/storagePools/storagePool",
              args: {
                name: "STORAGE_POOL",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork",
              description:
                "The subnetwork to use for nodes. This subnetwork must exist in the cluster's\nlist of additional subnetworks.\n+\nIf not specified, the node pool's node IP addresses are allocated from the\nleast utilized subnet and its secondary range. See details at\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/multi-subnet-clusters#create-node-pool",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag14588,
            {
              name: "--tags",
              description:
                "Applies the given Compute Engine tags (comma separated) on all nodes in the new\nnode-pool. Example:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --tags=tag1,tag2\n+\nNew nodes, including ones created by resize or recreate, will have these tags\non the Compute Engine API instance object and can be used in firewall rules.\nSee https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/create\nfor examples",
              args: { name: "TAG", description: "List", suggestions: [] },
            },
            flag14854,
            flag14966,
            flag14967,
            {
              name: "--tpu-topology",
              description:
                "The desired physical topology for the PodSlice.\n+\n$ {command} node-pool-1 --cluster=example-cluster --tpu-topology",
              args: {
                name: "TPU_TOPOLOGY",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15570,
            flag15639,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The name of the node pool to create",
          },
        },
        {
          name: "delete",
          description: "Delete an existing node pool in a running cluster",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cluster",
              description:
                "The cluster from which to delete the node pool. Overrides the default *container/cluster* property value for this command invocation",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The name of the node pool to delete",
          },
        },
        {
          name: "describe",
          description: "Describe an existing node pool for a cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2067,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: { name: "NAME", description: "The name of the node pool" },
        },
        {
          name: "get-upgrade-info",
          description:
            "Get upgrade information for an existing node pool for a cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2067,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: { name: "NAME", description: "The name of the node pool" },
        },
        {
          name: "list",
          description: "List existing node pools for a cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2067,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6607,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12297,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
            flag15698,
          ],
        },
        {
          name: "rollback",
          description: "Rollback a node-pool upgrade",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cluster",
              description:
                "The cluster from which to rollback the node pool. Overrides the default *container/cluster* property value for this command invocation",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            {
              name: "--respect-pdb",
              description:
                "Indicates whether node pool rollbacks should respect pod disruption budgets",
              args: {
                name: "RESPECT_PDB",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "NAME",
            description: "The name of the node pool to rollback",
          },
        },
        {
          name: "update",
          description: "Updates a node pool in a running cluster",
          options: [
            flag20,
            flag42,
            flag46,
            flag202,
            flag720,
            flag910,
            flag1201,
            flag1249,
            flag1251,
            flag2067,
            {
              name: "--confidential-node-type",
              description:
                "Recreate all the nodes in the node pool to be confidential VM\nhttps://docs.cloud.google.com/compute/docs/about-confidential-vm. _CONFIDENTIAL_NODE_TYPE_ must be one of: *sev*, *sev_snp*, *tdx*, *disabled*",
              args: {
                name: "CONFIDENTIAL_NODE_TYPE",
                description: "String",
                suggestions: ["sev", "sev_snp", "tdx", "disabled"],
              },
            },
            flag2292,
            flag2338,
            flag2421,
            flag3667,
            flag3672,
            flag4040,
            {
              name: "--enable-autorepair",
              description:
                "Enable node autorepair feature for a node pool.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --enable-autorepair\n+\nSee https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair for more info",
            },
            flag4046,
            {
              name: "--enable-autoupgrade",
              description:
                "Sets autoupgrade feature for a node pool.\n+\n  $ {command} node-pool-1 --cluster=example-cluster --enable-autoupgrade\n+\nSee https://cloud.google.com/kubernetes-engine/docs/node-auto-upgrades for more info",
            },
            flag4058,
            {
              name: "--enable-confidential-nodes",
              description:
                "Recreate all the nodes in the node pool to be confidential VM\nhttps://docs.cloud.google.com/compute/docs/about-confidential-vm",
            },
            flag4142,
            flag4152,
            flag4160,
            flag4180,
            flag4265,
            flag4277,
            flag4318,
            flag4900,
            flag4902,
            flag4920,
            flag5091,
            flag5453,
            flag5699,
            flag6398,
            flag6607,
            flag6579,
            flag7356,
            flag7388,
            {
              name: "--machine-type",
              description:
                'The type of machine to use for nodes. Defaults to e2-medium.\nThe list of predefined machine types is available using the following command:\n+\n  $ gcloud compute machine-types list\n+\nYou can also specify custom machine types by providing a string with the format "custom-CPUS-RAM"\nwhere "CPUS" is the number of virtual CPUs and "RAM" is the amount of RAM in\nMiB.\n+\nFor example, to create a node pool using custom machines with 2 vCPUs and 12 GB\nof RAM:\n+\n  $ {command} high-mem-pool --machine-type=custom-2-12288',
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag7653,
            flag7685,
            {
              name: "--max-surge-upgrade",
              description:
                "Number of extra (surge) nodes to be created on each upgrade of the node pool.\n+\nSpecifies the number of extra (surge) nodes to be created during this node\npool's upgrades. For example, running the following command will result in\ncreating an extra node each time the node pool is upgraded:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --max-surge-upgrade=1   --max-unavailable-upgrade=0\n+\nMust be used in conjunction with '--max-unavailable-upgrade'",
              args: {
                name: "MAX_SURGE_UPGRADE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--max-unavailable-upgrade",
              description:
                "Number of nodes that can be unavailable at the same time on each upgrade of the\nnode pool.\n+\nSpecifies the number of nodes that can be unavailable at the same time during\nthis node pool's upgrades. For example, assume the node pool has 5 nodes,\nrunning the following command will result in having 3 nodes being upgraded in\nparallel (1 + 2), but keeping always at least 3 (5 - 2) available each time the\nnode pool is upgraded:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --max-surge-upgrade=1   --max-unavailable-upgrade=2\n+\nMust be used in conjunction with '--max-surge-upgrade'",
              args: {
                name: "MAX_UNAVAILABLE_UPGRADE",
                description: "Int",
                suggestions: [],
              },
            },
            flag7898,
            flag8199,
            {
              name: "--node-architecture-taint-behavior",
              description:
                "Control how architecture taint should be applied to nodes in an existing node pool.\n+\n  Supported values:\n    * unspecified: Default behavior, currently the same as `arm`.\n    * arm: kubernetes.io/arch=arm:NoSchedule taint will be added for ARM nodes.\n    * none: No architecture taint will be applied.\n+\n\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-architecture-taint-behavior=none\n+\nTo read more about node-taints, see https://cloud.google.com/kubernetes-engine/docs/node-taints.\n+\n_NODE_ARCHITECTURE_TAINT_BEHAVIOR_ must be one of: *unspecified*, *arm*, *none*",
              args: {
                name: "NODE_ARCHITECTURE_TAINT_BEHAVIOR",
                description: "String",
                suggestions: ["unspecified", "arm", "none"],
              },
            },
            flag10495,
            flag10496,
            {
              name: "--node-labels",
              description:
                "Replaces all the user specified Kubernetes labels on all nodes in an existing\nnode pool with the given labels.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-labels=label1=value1,label2=value2\n+\nUpdating the node pool's --node-labels flag applies the labels to the Kubernetes Node objects for existing nodes in-place; it does not re-create or replace nodes. New nodes, including ones created by resizing or re-creating nodes, will have these labels on the Kubernetes API Node object. The labels can be used in the `nodeSelector` field. See [](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for examples.\n+\nNote that Kubernetes labels, intended to associate cluster components\nand resources with one another and manage resource lifecycles, are different\nfrom Google Kubernetes Engine labels that are used for the purpose of tracking\nbilling and usage information",
              args: {
                name: "NODE_LABEL",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--node-locations",
              description:
                "Set of zones in which the node pool's nodes should be located.\nChanging the locations for a node pool will result in nodes being either created or removed\nfrom the node pool, depending on whether locations are being added or removed.\n+\nMultiple locations can be specified, separated by commas. For example:\n+\n  $ {command} node-pool-1 --cluster=sample-cluster --node-locations=us-central1-a,us-central1-b",
              args: { name: "ZONE", description: "List", suggestions: [] },
            },
            {
              name: "--node-pool-soak-duration",
              description:
                "Time in seconds to be spent waiting during blue-green upgrade before\ndeleting the blue pool and completing the upgrade.\n+\n  $ {command} node-pool-1 --cluster=example-cluster  --node-pool-soak-duration=600s",
              args: {
                name: "NODE_POOL_SOAK_DURATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--node-taints",
              description:
                "Replaces all the user specified Kubernetes taints on all nodes in an existing\nnode pool, which can be used with tolerations for pod scheduling.\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --node-taints=key1=val1:NoSchedule,key2=val2:PreferNoSchedule\n+\nTo read more about node-taints, see https://cloud.google.com/kubernetes-engine/docs/node-taints",
              args: {
                name: "NODE_TAINT",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12297,
            {
              name: "--remove-maintenance-exclusion-until-end-of-support",
              description:
                "Remove node pool maintenance exclusion until the end of support",
            },
            {
              name: "--resource-manager-tags",
              description:
                "Replaces all the user specified resource manager tags on all nodes in an\nexisting node pool in a Standard cluster with the given comma-separated\nresource manager tags that has the GCE_FIREWALL purpose.\n+\nExamples:\n+\n  $ {command} example-node-pool --resource-manager-tags=tagKeys/1234=tagValues/2345\n  $ {command} example-node-pool --resource-manager-tags=my-project/key1=value1\n  $ {command} example-node-pool --resource-manager-tags=12345/key1=value1,23456/key2=value2\n  $ {command} example-node-pool --resource-manager-tags=\n+\nAll nodes, including nodes that are resized or re-created, will have the\nspecified tags on the corresponding Instance object in the Compute Engine API.\nYou can reference these tags in network firewall policy rules. For instructions,\nsee https://cloud.google.com/firewall/docs/use-tags-for-firewalls",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag13043,
            {
              name: "--standard-rollout-policy",
              description:
                "Standard rollout policy options for blue-green upgrade.\n+\nBatch sizes are specified by one of, batch-node-count or batch-percent.\nThe duration between batches is specified by batch-soak-duration.\n+\n  $ {command} node-pool-1 --cluster=example-cluster  --standard-rollout-policy=batch-node-count=3,batch-soak-duration=60s\n+\n  $ {command} node-pool-1 --cluster=example-cluster  --standard-rollout-policy=batch-percent=0.3,batch-soak-duration=60s",
              args: {
                name: "batch-node-count=BATCH_NODE_COUNT,batch-percent=BATCH_NODE_PERCENTAGE,batch-soak-duration=BATCH_SOAK_DURATION",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--storage-pools",
              description:
                "A list of storage pools where the node pool's boot disks will be provisioned. Replaces\nall the current storage pools of an existing node pool, with the specified storage\npools.\n+\nSTORAGE_POOL must be in the format\nprojects/project/zones/zone/storagePools/storagePool",
              args: {
                name: "STORAGE_POOL",
                description: "List",
                suggestions: [],
              },
            },
            flag14588,
            {
              name: "--tags",
              description:
                "Replaces all the user specified Compute Engine tags on all nodes in an existing\nnode pool with the given tags (comma separated).\n+\nExamples:\n+\n  $ {command} node-pool-1 --cluster=example-cluster --tags=tag1,tag2\n+\nNew nodes, including ones created by resize or recreate, will have these tags\non the Compute Engine API instance object and these tags can be used in\nfirewall rules.\nSee https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/create\nfor examples",
              args: { name: "TAG", description: "List", suggestions: [] },
            },
            flag14966,
            flag14967,
            flag14975,
            flag15315,
            flag15424,
            flag15570,
            flag15639,
            flag15698,
          ],
          args: { name: "NAME", description: "The name of the node pool" },
        },
      ],
    },
    {
      name: "operations",
      description:
        "Get and list operations for Google Kubernetes Engine clusters",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running operation",
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
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "OPERATION_ID",
            description: "The operation id to cancel",
          },
        },
        {
          name: "describe",
          description: "Describe an operation",
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
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "OPERATION_ID",
            description: "The operation id to look up",
          },
        },
        {
          name: "list",
          description: "List operations for container clusters",
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
            flag6607,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12297,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
        },
        {
          name: "wait",
          description: "Poll an operation for completion",
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
            flag6607,
            flag7356,
            flag11637,
            flag11946,
            flag12297,
            flag14975,
            flag15315,
            flag15424,
            flag15698,
          ],
          args: {
            name: "OPERATION_ID",
            description: "The operation id to poll",
          },
        },
      ],
    },
    {
      name: "subnets",
      description:
        "Manage subnets to be used by Google Kubernetes Engine clusters",
      subcommands: [
        {
          name: "list-usable",
          description:
            "List subnets usable for cluster creation in a specific project",
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
            {
              name: "--network-project",
              description:
                "The project owning the subnetworks returned. This field is translated\ninto the expression `networkProjectId=[PROJECT_ID]` and ANDed to\nthe `--filter` flag value.\n+\nDefaults to the *--project* value",
              args: {
                name: "NETWORK_PROJECT",
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
      ],
    },
    {
      name: "vmware",
      description:
        "Deploy and manage Anthos clusters on VMware for running containers",
      subcommands: [
        {
          name: "admin-clusters",
          description: "Create and manage admin clusters in Anthos on VMware",
          subcommands: [
            {
              name: "describe",
              description: "Describe an Anthos on VMware admin cluster",
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
                flag6638,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "enroll",
              description: "Enroll an Anthos on VMware admin cluster",
              options: [
                flag42,
                flag46,
                flag329,
                flag326,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6638,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "list",
              description: "List Anthos on VMware admin clusters",
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
                flag6721,
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
              name: "unenroll",
              description: "Unenroll an Anthos on VMware admin cluster",
              options: [
                flag42,
                flag46,
                {
                  name: "--allow-missing",
                  description:
                    "If set, and the VMware Cluster is not found, the request will succeed but no action will be taken on the server and return a completed LRO",
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "If set, the unenrollment of a VMware admin cluster resource will succeed even if errors occur during deletion",
                },
                flag5699,
                flag6638,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
            {
              name: "update",
              description: "Update an Anthos on VMware admin cluster",
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
                flag6638,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--required-platform-version",
                  description:
                    "Platform version required for upgrading an admin cluster or a user cluster. If the current platform version is lower than the required version, the platform version will be updated to the required version. If it is not installed in the platform, download the required version bundle",
                  args: {
                    name: "REQUIRED_PLATFORM_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ADMIN_CLUSTER",
                description:
                  "ID of the admin_cluster or fully qualified identifier for the admin_cluster.\n+\nTo set the `admin_cluster` attribute:\n* provide the argument `admin_cluster` on the command line",
              },
            },
          ],
        },
        {
          name: "clusters",
          description: "Create and manage Anthos clusters on VMware",
          subcommands: [
            {
              name: "create",
              description: "Create an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag329,
                flag325,
                flag327,
                flag344,
                {
                  name: "--annotations",
                  description: "Annotations on the VMware user cluster",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--control-plane-ip-block",
                  description:
                    "Static IP addresses for the control plane nodes. The number of IP addresses should match the number of replicas for the control plane nodes, specified by `--replicas`.\n+\nTo specify the control plane IP block,\n+\n```\n$ gcloud {command}\n    --control-plane-ip-block 'gateway=192.168.0.1,netmask=255.255.255.0,ips=192.168.1.1;0.0.0.0 localhost;'\n```",
                  args: {
                    name: "CONTROL_PLANE_IP_BLOCK",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--control-plane-node-port",
                  description: "NodePort for control plane service",
                  args: {
                    name: "CONTROL_PLANE_NODE_PORT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag2479,
                flag2519,
                flag3177,
                flag3539,
                {
                  name: "--disable-control-plane-v2",
                  description: "If set, disable control plane v2",
                },
                flag3616,
                {
                  name: "--dns-search-domains",
                  description: "DNS search domains",
                  args: {
                    name: "DNS_SEARCH_DOMAINS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--dns-servers",
                  description: "DNS server IP address",
                  args: {
                    name: "DNS_SERVERS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--enable-advanced-networking",
                  description:
                    "If set, enable advanced networking. Requires dataplane_v2_enabled to be set true",
                },
                flag4026,
                flag4027,
                {
                  name: "--enable-control-plane-v2",
                  description: "If set, enable control plane v2",
                },
                {
                  name: "--enable-dataplane-v2",
                  description: "If set, enables Dataplane V2",
                },
                {
                  name: "--enable-dhcp",
                  description:
                    "Enable DHCP IP allocation for VMware user clusters.\n+\nWhile using DHCP, manual load balancing mode is not supported. For more details, see https://cloud.google.com/anthos/clusters/docs/on-prem/latest/how-to/manual-load-balance#setting_aside_node_ip_addresses",
                },
                {
                  name: "--enable-vm-tracking",
                  description: "If set, enable VM tracking",
                },
                {
                  name: "--f5-config-address",
                  description: "F5 Big IP load balancer address",
                  args: {
                    name: "F5_CONFIG_ADDRESS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--f5-config-partition",
                  description: "F5 Big IP load balancer partition",
                  args: {
                    name: "F5_CONFIG_PARTITION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--f5-config-snat-pool",
                  description:
                    "F5 Big IP load balancer pool name if using SNAT",
                  args: {
                    name: "F5_CONFIG_SNAT_POOL",
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
                  name: "--ingress-http-node-port",
                  description: "NodePort for ingress service's http",
                  args: {
                    name: "INGRESS_HTTP_NODE_PORT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--ingress-https-node-port",
                  description: "NodePort for ingress service's https",
                  args: {
                    name: "INGRESS_HTTPS_NODE_PORT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag5783,
                {
                  name: "--konnectivity-server-node-port",
                  description:
                    "NodePort for konnectivity service running as a sidecar in each kube-apiserver pod",
                  args: {
                    name: "KONNECTIVITY_SERVER_NODE_PORT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag6649,
                flag7356,
                flag7767,
                flag7835,
                {
                  name: "--ntp-servers",
                  description: "NTP server IP address",
                  args: {
                    name: "NTP_SERVERS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--pod-address-cidr-blocks",
                  description: "IPv4 address range for all pods in the cluster",
                  args: {
                    name: "POD_ADDRESS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--replicas",
                  description:
                    "Number of control plane nodes for this VMware user cluster. (default: 1 replica)",
                  args: {
                    name: "REPLICAS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--service-address-cidr-blocks",
                  description:
                    "IPv4 address range for all services in the cluster",
                  args: {
                    name: "SERVICE_ADDRESS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14419,
                flag14975,
                flag15237,
                flag15315,
                flag15366,
                {
                  name: "--vcenter-ca-cert-data",
                  description:
                    "Name of the vCenter CA certificate public key for SSL verification",
                  args: {
                    name: "VCENTER_CA_CERT_DATA",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vcenter-cluster",
                  description:
                    "Name of the vCenter cluster for the user cluster",
                  args: {
                    name: "VCENTER_CLUSTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vcenter-datacenter",
                  description:
                    "Name of the vCenter datacenter for the user cluster",
                  args: {
                    name: "VCENTER_DATACENTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vcenter-datastore",
                  description:
                    "Name of the vCenter datastore for the user cluster",
                  args: {
                    name: "VCENTER_DATASTORE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vcenter-folder",
                  description:
                    "Name of the vCenter folder for the user cluster",
                  args: {
                    name: "VCENTER_FOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vcenter-resource-pool",
                  description:
                    "Name of the vCenter resource pool for the user cluster",
                  args: {
                    name: "VCENTER_RESOURCE_POOL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--vcenter-storage-policy-name",
                  description:
                    "Name of the vCenter storage policy for the user cluster",
                  args: {
                    name: "VCENTER_STORAGE_POLICY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                {
                  name: "--allow-missing",
                  description:
                    "If set, and the Anthos cluster on VMware is not found, the request will succeed but no action will be taken",
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                {
                  name: "--force",
                  description:
                    "If set, any node pools from the cluster will also be deleted. This flag is required if the cluster has any associated node pools",
                },
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "If set, the deletion of a VMware user cluster resource will succeed even if errors occur during deletion",
                },
                flag5699,
                flag6649,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
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
              description: "Describe an Anthos cluster on VMware",
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
                flag6649,
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
              name: "enroll",
              description: "Enroll an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag329,
                flag325,
                flag327,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--local-name",
                  description:
                    "The object name of the VMware OnPremUserCluster custom resource on the\nassociated admin cluster. This field is used to support conflicting\nresource names when enrolling existing clusters to the API. When not\nprovided, this field will resolve to the vmware_cluster_id. Otherwise, it\nmust match the object name of the VMware OnPremUserCluster custom resource.\nIt is not modifiable outside / beyond the  enrollment operation",
                  args: {
                    name: "LOCAL_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6649,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
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
              description: "List Anthos clusters on VMware",
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
                flag6721,
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
              name: "query-version-config",
              description:
                "Query versions for creating or upgrading an Anthos on VMware user cluster",
              options: [
                flag42,
                flag46,
                flag329,
                flag326,
                flag328,
                flag1201,
                flag2074,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6721,
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
              description: "Update an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag130,
                flag344,
                flag720,
                flag1201,
                flag2292,
                flag2519,
                flag3177,
                flag3539,
                {
                  name: "--disable-auto-repair",
                  description: "If set, disables auto repair",
                },
                {
                  name: "--disable-auto-resize",
                  description: "Disable controle plane node auto resize",
                },
                flag3616,
                {
                  name: "--enable-aag-config",
                  description: "If set, enable anti-affinity group config",
                },
                flag4026,
                flag4027,
                {
                  name: "--enable-vsphere-csi",
                  description:
                    "If set, vSphere CSI components are deployed in the VMware User Cluster",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6649,
                flag7356,
                flag7767,
                flag7835,
                flag11637,
                flag11946,
                flag12546,
                flag14419,
                flag14975,
                flag15237,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "CLUSTER",
                description:
                  "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
              },
            },
            {
              name: "upgrade",
              description: "Centrally upgrade an Anthos cluster on VMware",
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
                flag6649,
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
          ],
        },
        {
          name: "node-pools",
          description:
            "Create and manage node pools in an Anthos cluster on VMware",
          subcommands: [
            {
              name: "create",
              description: "Create a node pool in an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag521,
                flag720,
                flag1201,
                flag1254,
                flag2089,
                flag2292,
                flag2520,
                flag3709,
                flag4193,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5688,
                {
                  name: "--image-type",
                  description: "OS image type to use on node pool instances",
                  args: {
                    name: "IMAGE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag6658,
                flag7356,
                {
                  name: "--max-replicas",
                  description: "Maximum number of replicas in the node pool",
                  args: {
                    name: "MAX_REPLICAS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag7769,
                {
                  name: "--min-replicas",
                  description: "Minimum number of replicas in the node pool",
                  args: {
                    name: "MIN_REPLICAS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag10508,
                flag10530,
                flag11637,
                flag11946,
                flag12782,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a node pool in an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                {
                  name: "--allow-missing",
                  description:
                    "If set, and the Vmware Node Pool is not found, the request will succeed but no action will be taken",
                },
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--ignore-errors",
                  description:
                    "If set, the deletion of a VMware node pool resource will succeed even if errors occur during deletion",
                },
                flag5699,
                flag6658,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Describe a node pool in an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6658,
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
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "enroll",
              description: "Enroll a node pool in an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2089,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6658,
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
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
            {
              name: "list",
              description: "List node pools in an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2074,
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
                    "Google Cloud location for the cluster.\n+\nTo set the `location` attribute:\n* provide the argument `--cluster` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `container_vmware/location`",
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
              description: "Update a node pool in an Anthos cluster on VMware",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1254,
                flag2089,
                flag2292,
                flag2520,
                {
                  name: "--disable-load-balancer",
                  description:
                    "If set, disable the use of load balancer on the node pool instances",
                },
                flag3709,
                flag4193,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5688,
                {
                  name: "--image-type",
                  description: "OS image type to use on node pool instances",
                  args: {
                    name: "IMAGE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag6658,
                flag7356,
                {
                  name: "--max-replicas",
                  description: "Maximum number of replicas in the node pool",
                  args: {
                    name: "MAX_REPLICAS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag7769,
                {
                  name: "--min-replicas",
                  description: "Minimum number of replicas in the node pool",
                  args: {
                    name: "MIN_REPLICAS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag10508,
                flag10530,
                flag11637,
                flag11946,
                flag12782,
                flag14975,
                flag15315,
                flag15366,
                flag15424,
              ],
              args: {
                name: "NODE_POOL",
                description:
                  "ID of the node_pool or fully qualified identifier for the node_pool.\n+\nTo set the `node_pool` attribute:\n* provide the argument `node_pool` on the command line",
              },
            },
          ],
        },
        {
          name: "operations",
          description: "Manage Anthos on VMware long running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe an operation",
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
                flag6664,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
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
                flag6721,
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
              description: "Poll an operation for completion",
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
                flag6664,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION_ID",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation_id` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "workload",
      description: "Manage Workload Optimizer related workloads for GKE",
      subcommands: [
        {
          name: "profiles",
          description: "Quickstart engine for GKE workload optimization",
          subcommands: [
            {
              name: "manifests",
              description: "Generate optimized Kubernetes manifests",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Generate optimized Kubernetes manifests for a given workload profile",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    {
                      name: "--cluster-version",
                      description:
                        "The GKE version to generate the manifest for",
                      args: {
                        name: "CLUSTER_VERSION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7356,
                    {
                      name: "--options",
                      description:
                        "Additional key-value pair options for generating the manifest. For example, to specify allowed machine types: --options=machineType=type1,type2",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    {
                      name: "--output",
                      description:
                        "The output to display. Default is all. _OUTPUT_ must be one of: *manifest*, *all*",
                      args: {
                        name: "OUTPUT",
                        description: "String",
                        suggestions: ["manifest", "all"],
                      },
                    },
                    flag11009,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    {
                      name: "--workload",
                      description:
                        'The name of the optimization set to generate the manifest for.\nThis specifies the workload, workload version, and workload\ncharacterization to optimize for (e.g., "redis-7-caching")',
                      args: {
                        name: "WORKLOAD",
                        description: "String",
                        suggestions: [],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
