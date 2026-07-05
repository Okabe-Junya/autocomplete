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
const flag674: Fig.Option = {
  name: "--archives",
  description:
    "Archives to be extracted into the working directory. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip",
  args: { name: "ARCHIVE", description: "List", suggestions: [] },
};
const flag675: Fig.Option = {
  name: "--archives",
  description:
    "Comma separated list of archives to be extracted into the working directory of each executor. Must be one of the following file formats: .zip, .tar, .tar.gz, or .tgz",
  args: { name: "ARCHIVE", description: "List", suggestions: [] },
};
const flag676: Fig.Option = {
  name: "--archives",
  description:
    "Comma separated list of archives to be provided to the job. must be one of the following file formats: .zip, .tar, .tar.gz, or .tgz",
  args: { name: "ARCHIVE", description: "List", suggestions: [] },
};
const flag715: Fig.Option = {
  name: "--async",
  description:
    "Return immediately without waiting for the operation in progress to complete",
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag864: Fig.Option = {
  name: "--auto-zone-exclude-zones",
  description:
    "A comma-separated list of compute zones (such as `us-central1-a`)\nto exclude when [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone)\npicks the zone for the cluster",
  args: { name: "ZONE", description: "List", suggestions: [] },
};
const flag939: Fig.Option = {
  name: "--autoscaling-policy",
  description:
    "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `--autoscaling-policy` on the command line",
  args: { name: "AUTOSCALING_POLICY", description: "String", suggestions: [] },
};
const flag1109: Fig.Option = {
  name: "--batch",
  description:
    "The ID of the batch job to submit. The ID must contain only lowercase letters (a-z), numbers (0-9) and hyphens (-). The length of the name must be between 4 and 63 characters. If this argument is not provided, a random generated UUID will be used",
  args: {
    name: "BATCH",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1288: Fig.Option = {
  name: "--bucket",
  description:
    "The Cloud Storage bucket to stage files in. Defaults to the cluster's configured bucket",
  args: { name: "BUCKET", description: "String", suggestions: [] },
};
const flag1289: Fig.Option = {
  name: "--bucket",
  description:
    "The Google Cloud Storage bucket to use by default to stage job\ndependencies, miscellaneous config files, and job driver console output\nwhen using this cluster",
  args: { name: "BUCKET", description: "String", suggestions: [] },
};
const flag1456: Fig.Option = {
  name: "--class",
  description:
    "The class containing the main method of the driver. Must be in a provided jar or jar that is already on the classpath",
  args: { name: "CLASS", description: "String", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag1976: Fig.Option = {
  name: "--client-tags",
  description: "A list of Presto client tags to attach to this query",
  args: { name: "CLIENT_TAG", description: "List", suggestions: [] },
};
const flag1977: Fig.Option = {
  name: "--client-tags",
  description: "A list of Trino client tags to attach to this query",
  args: { name: "CLIENT_TAG", description: "List", suggestions: [] },
};
const flag2042: Fig.Option = {
  name: "--cluster-labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\nLabels of Dataproc cluster on which to place the job",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2055: Fig.Option = {
  name: "--cluster-type",
  description:
    "The type of cluster. _TYPE_ must be one of: *standard*, *single-node*, *zero-scale*",
  args: {
    name: "TYPE",
    description: "String",
    suggestions: ["standard", "single-node", "zero-scale"],
  },
};
const flag2079: Fig.Option = {
  name: "--cluster",
  description:
    "The Cluster name.\n+\nTo set the `cluster` attribute:\n* provide the argument `node_group` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2080: Fig.Option = {
  name: "--cluster",
  description: "The Dataproc cluster to submit the job to",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2230: Fig.Option = {
  name: "--confidential-compute-type",
  description:
    "Enables Confidential VM. See https://cloud.google.com/confidential-computing/confidential-vm/docs/ for more information.\nThis flag specifies the type of Confidential Compute technology. See\nhttps://cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations#machine-type-cpu-zone\nfor each machine type supported by Confidential Compute technology. _CONFIDENTIAL_COMPUTE_TYPE_ must be one of: *SEV*, *SEV_SNP*, *TDX*",
  args: {
    name: "CONFIDENTIAL_COMPUTE_TYPE",
    description: "String",
    suggestions: ["SEV", "SEV_SNP", "TDX"],
  },
};
const flag2233: Fig.Option = {
  name: "--confidential-compute",
  description:
    "(DEPRECATED)         Enables Confidential VM. See https://cloud.google.com/confidential-computing/confidential-vm/docs/ for more information.\n        This flag uses AMD SEV confidential compute technology, which is only\n        supported on N2D, C2D, C3D, and C4D machine types\n        (https://cloud.google.com/compute/docs/machine-types).\n+\nThe `--confidential-compute` flag is deprecated. Please use `--confidential-compute-type=SEV` instead",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2389: Fig.Option = {
  name: "--container-image",
  description:
    "Optional custom container image to use for the batch/session runtime environment. If not specified, a default container image will be used. The value should follow the container image naming format: {registry}/{repository}/{name}:{tag}, for example, gcr.io/my-project/my-image:1.2.3",
  args: { name: "CONTAINER_IMAGE", description: "String", suggestions: [] },
};
const flag2450: Fig.Option = {
  name: "--continue-on-failure",
  description: "Whether to continue if a query fails",
};
const flag2451: Fig.Option = {
  name: "--continue-on-failure",
  description: "Whether to continue if a single query fails",
};
const flag2824: Fig.Option = {
  name: "--dataproc-metastore",
  description:
    'Specify the name of a Dataproc Metastore service to be used as an\nexternal metastore in the format:\n"projects/{project-id}/locations/{region}/services/{service-name}"',
  args: { name: "DATAPROC_METASTORE", description: "String", suggestions: [] },
};
const flag3043: Fig.Option = {
  name: "--deps-bucket",
  description: "A Cloud Storage bucket to upload workload dependencies",
  args: { name: "DEPS_BUCKET", description: "String", suggestions: [] },
};
const flag3466: Fig.Option = {
  name: "--destination",
  description:
    "Path to a YAML file where the configuration will be exported.\n          Alternatively, you may omit this flag to write to standard output",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
};
const flag3908: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "A list of package to log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
  args: { name: "PACKAGE=LEVEL", description: "Dict", suggestions: [] },
};
const flag3909: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "A list of package-to-log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
  args: { name: "PACKAGE=LEVEL", description: "Dict", suggestions: [] },
};
const flag3910: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "List of key value pairs to configure driver logging, where key is a package and value is the log4j log level. For example: root=FATAL,com.example=INFO",
  args: { name: "PACKAGE=LEVEL", description: "Dict", suggestions: [] },
};
const flag3913: Fig.Option = {
  name: "--driver-log-levels",
  description:
    "List of package to log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
  args: { name: "PACKAGE=LEVEL", description: "Dict", suggestions: [] },
};
const flag3922: Fig.Option = {
  name: "--driver-required-memory-mb",
  description:
    "The memory allocation requested by the job driver in megabytes (MB) for execution on the driver node group (it is used only by clusters with a driver node group)",
  args: {
    name: "DRIVER_REQUIRED_MEMORY_MB",
    description: "Int",
    suggestions: [],
  },
};
const flag3923: Fig.Option = {
  name: "--driver-required-vcores",
  description:
    "The vCPU allocation requested by the job driver for execution on the driver node group (it is used only by clusters with a driver node group)",
  args: { name: "DRIVER_REQUIRED_VCORES", description: "Int", suggestions: [] },
};
const flag4072: Fig.Option = {
  name: "--enable-component-gateway",
  description:
    "Enable access to the web UIs of selected components on the cluster through the component gateway",
};
const flag4177: Fig.Option = {
  name: "--enable-kerberos",
  description: "Enable Kerberos on the cluster",
};
const flag4312: Fig.Option = {
  name: "--enable-ssh",
  description:
    "Enable SSH access for the cluster. This is supported for Dataproc image\nversion 2.3.30 and later. SSH is enabled by default for image versions\nearlier than 3.1, and will be disabled by default starting from image\nversion 3.1. Use *--enable-ssh* to enable and *--no-enable-ssh* to disable",
};
const flag4431: Fig.Option = {
  name: "--engine",
  description:
    "Cluster engine. _ENGINE_ must be one of: *default*, *lightning*",
  args: {
    name: "ENGINE",
    description: "String",
    suggestions: ["default", "lightning"],
  },
};
const flag4615: Fig.Option = {
  name: ["--execute", "-e"],
  description: "A Hive query to execute as part of the job",
  args: { name: "QUERY", description: "String", suggestions: [] },
};
const flag4616: Fig.Option = {
  name: ["--execute", "-e"],
  description: "A Pig query to execute as part of the job",
  args: { name: "QUERY", description: "String", suggestions: [] },
};
const flag4617: Fig.Option = {
  name: ["--execute", "-e"],
  description: "A Presto query to execute",
  args: { name: "QUERY", description: "String", suggestions: [] },
};
const flag4618: Fig.Option = {
  name: ["--execute", "-e"],
  description: "A Spark SQL query to execute as part of the job",
  args: { name: "QUERY", description: "String", suggestions: [] },
};
const flag4619: Fig.Option = {
  name: ["--execute", "-e"],
  description: "A Trino query to execute",
  args: { name: "QUERY", description: "String", suggestions: [] },
};
const flag4804: Fig.Option = {
  name: ["--file", "-f"],
  description: "HCFS URI of file containing Hive script to execute as the job",
  args: { name: "FILE", description: "String", suggestions: [] },
};
const flag4805: Fig.Option = {
  name: ["--file", "-f"],
  description: "HCFS URI of file containing Pig script to execute as the job",
  args: { name: "FILE", description: "String", suggestions: [] },
};
const flag4806: Fig.Option = {
  name: ["--file", "-f"],
  description:
    "HCFS URI of file containing Spark SQL script to execute as the job",
  args: { name: "FILE", description: "String", suggestions: [] },
};
const flag4807: Fig.Option = {
  name: ["--file", "-f"],
  description: "HCFS URI of file containing the Presto script to execute",
  args: { name: "FILE", description: "String", suggestions: [] },
};
const flag4808: Fig.Option = {
  name: ["--file", "-f"],
  description: "HCFS URI of file containing the Trino script to execute",
  args: { name: "FILE", description: "String", suggestions: [] },
};
const flag4826: Fig.Option = {
  name: "--files",
  description:
    "Comma separated list of file paths to be provided to the job. A file path can either be a path to a local file or a path to a file already in a Cloud Storage bucket",
  args: { name: "FILE", description: "List", suggestions: [] },
};
const flag4827: Fig.Option = {
  name: "--files",
  description:
    "Comma separated list of files to be placed in the working directory of both the app driver and executors",
  args: { name: "FILE", description: "List", suggestions: [] },
};
const flag4828: Fig.Option = {
  name: "--files",
  description: "Files to be placed in the working directory",
  args: { name: "FILE", description: "List", suggestions: [] },
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
const flag5464: Fig.Option = {
  name: "--history-server-cluster",
  description:
    'Spark History Server configuration for the batch/session job. Resource name of an existing Dataproc cluster to act as a Spark History Server for the workload in the format: "projects/{project_id}/regions/{region}/clusters/{cluster_name}"',
  args: {
    name: "HISTORY_SERVER_CLUSTER",
    description: "String",
    suggestions: [],
  },
};
const flag5609: Fig.Option = {
  name: "--identity-config-file",
  description:
    "Path to a YAML (or JSON) file containing the configuration for Secure Multi-Tenancy\non the cluster. The path can be a Cloud Storage URL (Example: 'gs://path/to/file')\nor a local file system path. If you pass \"-\" as the value of the flag the file content\nwill be read from stdin.\n+\nThe YAML file is formatted as follows:\n+\n```\n  # Required. The mapping from user accounts to service accounts.\n  user_service_account_mapping:\n    bob@company.com: service-account-bob@project.iam.gserviceaccount.com\n    alice@company.com: service-account-alice@project.iam.gserviceaccount.com\n```",
  args: {
    name: "IDENTITY_CONFIG_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag5681: Fig.Option = {
  name: "--image-version",
  description:
    "The image version to use for the cluster. Defaults to the latest version",
  args: { name: "VERSION", description: "String", suggestions: [] },
};
const flag5692: Fig.Option = {
  name: "--image",
  description:
    "The custom image used to create the cluster. It can be the image name, the image URI, or the image family URI, which selects the latest image from the family",
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
const flag5793: Fig.Option = {
  name: "--initialization-action-timeout",
  description:
    "The maximum duration of each initialization action. See $ gcloud topic datetimes for information on duration formats",
  args: {
    name: "TIMEOUT",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag5794: Fig.Option = {
  name: "--initialization-actions",
  description:
    "A list of Google Cloud Storage URIs of executables to run on each node in the cluster",
  args: { name: "CLOUD_STORAGE_URI", description: "List", suggestions: [] },
};
const flag6078: Fig.Option = {
  name: "--jar",
  description: "The HCFS URI of jar file containing the driver jar",
  args: { name: "JAR", description: "String", suggestions: [] },
};
const flag6081: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to Pig and MR. May contain UDFs",
  args: { name: "JAR", description: "List", suggestions: [] },
};
const flag6082: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to the Hive and MR. May contain UDFs",
  args: { name: "JAR", description: "List", suggestions: [] },
};
const flag6083: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to the MR and driver classpaths",
  args: { name: "JAR", description: "List", suggestions: [] },
};
const flag6084: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to the executor and driver classpaths. May contain UDFs",
  args: { name: "JAR", description: "List", suggestions: [] },
};
const flag6085: Fig.Option = {
  name: "--jars",
  description:
    "Comma separated list of jar files to be provided to the executor and driver classpaths",
  args: { name: "JAR", description: "List", suggestions: [] },
};
const flag6086: Fig.Option = {
  name: "--jars",
  description:
    "Comma-separated list of jar files to be provided to the classpaths",
  args: { name: "JAR", description: "List", suggestions: [] },
};
const flag6207: Fig.Option = {
  name: "--kerberos-config-file",
  description:
    "Path to a YAML (or JSON) file containing the configuration for Kerberos on the\ncluster. If you pass `-` as the value of the flag the file content will be read\nfrom stdin.\n+\nThe YAML file is formatted as follows:\n+\n```\n  # Optional. Flag to indicate whether to Kerberize the cluster.\n  # The default value is true.\n  enable_kerberos: true\n+\n  # Optional. The Google Cloud Storage URI of a KMS encrypted file\n  # containing the root principal password.\n  root_principal_password_uri: gs://bucket/password.encrypted\n+\n  # Optional. The URI of the Cloud KMS key used to encrypt\n  # sensitive files.\n  kms_key_uri:\n    projects/myproject/locations/global/keyRings/mykeyring/cryptoKeys/my-key\n+\n  # Configuration of SSL encryption. If specified, all sub-fields\n  # are required. Otherwise, Dataproc will provide a self-signed\n  # certificate and generate the passwords.\n  ssl:\n    # Optional. The Google Cloud Storage URI of the keystore file.\n    keystore_uri: gs://bucket/keystore.jks\n+\n    # Optional. The Google Cloud Storage URI of a KMS encrypted\n    # file containing the password to the keystore.\n    keystore_password_uri: gs://bucket/keystore_password.encrypted\n+\n    # Optional. The Google Cloud Storage URI of a KMS encrypted\n    # file containing the password to the user provided key.\n    key_password_uri: gs://bucket/key_password.encrypted\n+\n    # Optional. The Google Cloud Storage URI of the truststore\n    # file.\n    truststore_uri: gs://bucket/truststore.jks\n+\n    # Optional. The Google Cloud Storage URI of a KMS encrypted\n    # file containing the password to the user provided\n    # truststore.\n    truststore_password_uri:\n      gs://bucket/truststore_password.encrypted\n+\n  # Configuration of cross realm trust.\n  cross_realm_trust:\n    # Optional. The remote realm the Dataproc on-cluster KDC will\n    # trust, should the user enable cross realm trust.\n    realm: REMOTE.REALM\n+\n    # Optional. The KDC (IP or hostname) for the remote trusted\n    # realm in a cross realm trust relationship.\n    kdc: kdc.remote.realm\n+\n    # Optional. The admin server (IP or hostname) for the remote\n    # trusted realm in a cross realm trust relationship.\n    admin_server: admin-server.remote.realm\n+\n    # Optional. The Google Cloud Storage URI of a KMS encrypted\n    # file containing the shared password between the on-cluster\n    # Kerberos realm and the remote trusted realm, in a cross\n    # realm trust relationship.\n    shared_password_uri:\n      gs://bucket/cross-realm.password.encrypted\n+\n  # Optional. The Google Cloud Storage URI of a KMS encrypted file\n  # containing the master key of the KDC database.\n  kdc_db_key_uri: gs://bucket/kdc_db_key.encrypted\n+\n  # Optional. The lifetime of the ticket granting ticket, in\n  # hours. If not specified, or user specifies 0, then default\n  # value 10 will be used.\n  tgt_lifetime_hours: 1\n+\n  # Optional. The name of the Kerberos realm. If not specified,\n  # the uppercased domain name of the cluster will be used.\n  realm: REALM.NAME\n```",
  args: {
    name: "KERBEROS_CONFIG_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag6209: Fig.Option = {
  name: "--kerberos-kms-key-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kerberos-kms-key` on the command line with a fully specified name;\n* provide the argument `--kerberos-kms-key-keyring` on the command line",
  args: {
    name: "KERBEROS_KMS_KEY_KEYRING",
    description: "String",
    suggestions: [],
  },
};
const flag6210: Fig.Option = {
  name: "--kerberos-kms-key-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kerberos-kms-key` on the command line with a fully specified name;\n* provide the argument `--kerberos-kms-key-location` on the command line",
  args: {
    name: "KERBEROS_KMS_KEY_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag6211: Fig.Option = {
  name: "--kerberos-kms-key-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kerberos-kms-key` on the command line with a fully specified name;\n* provide the argument `--kerberos-kms-key-project` on the command line;\n* set the property `core/project`",
  args: {
    name: "KERBEROS_KMS_KEY_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag6212: Fig.Option = {
  name: "--kerberos-kms-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kerberos-kms-key` on the command line",
  args: { name: "KERBEROS_KMS_KEY", description: "String", suggestions: [] },
};
const flag6215: Fig.Option = {
  name: "--kerberos-root-principal-password-uri",
  description:
    "Google Cloud Storage URI of a KMS encrypted file containing the root\nprincipal password. Must be a Cloud Storage URL beginning with 'gs://'",
  args: {
    name: "KERBEROS_ROOT_PRINCIPAL_PASSWORD_URI",
    description: "String",
    suggestions: [],
  },
};
const flag6305: Fig.Option = {
  name: "--kms-key",
  description: "Cloud KMS key to use for encryption",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6327: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6336: Fig.Option = {
  name: "--kms-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6344: Fig.Option = {
  name: "--kms-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6353: Fig.Option = {
  name: "--kms-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
  args: { name: "KMS_PROJECT", description: "String", suggestions: [] },
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7561: Fig.Option = {
  name: "--master-accelerator",
  description:
    "Attaches accelerators, such as GPUs, to the master\ninstance(s).\n+\n*type*::: The specific type of accelerator to attach to the instances,\nsuch as `nvidia-tesla-t4` for NVIDIA T4. Use `gcloud compute\naccelerator-types list` to display available accelerator types.\n+\n*count*::: The number of accelerators to attach to each instance. The default value is 1",
  args: {
    name: "type=TYPE,[count=COUNT]",
    description: "Dict",
    suggestions: [],
  },
};
const flag7563: Fig.Option = {
  name: "--master-attached-disks",
  description:
    "A list of disk configurations to attach to each instance in this group.\nDisk configurations are separated by semicolons. Each disk configuration\nis a comma-separated list of the following parameters.\n+\n   type - required\n      The type of disk to attach to the instances\n      (https://cloud.google.com/compute/docs/disks/hyperdisks).\n      Allowed disk types are: hyperdisk-balanced, hyperdisk-extreme,\n      hyperdisk-ml, hyperdisk-throughput.\n+\n   size - optional\n      The size of the disk. The value must be a whole number followed by\n      a size unit GB for gigabyte, or TB for terabyte. For example,\n      10GB produces a 10 gigabyte disk.\n+\n   iops - optional\n      Indicates the IOPS\n      (https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to\n      provision for the attached hyperdisk. This parameter sets the limit\n      for disk I/O operations per second.\n+\n   throughput - optional\n      Indicates the throughput\n      (https://cloud.google.com/compute/docs/disks/hyperdisks#throughput)\n      to provision for the attached hyperdisk. This parameter sets the\n      limit for throughput in MiB per second.\n+\n  Example:\n    type='hyperdisk-balanced,iops=5000,throughput=200,size=100G;type=hyperdisk-throughput,size=9000G'\n+\n    Attaches two disks to the instances. The first disk is a\n    hyperdisk-balanced disk with 5000 IOPS, 200 MiB/s throughput, and 100\n    GiB size. The second disk is a hyperdisk-throughput disk with 9000\n    GiB size",
  args: {
    name: "MASTER_ATTACHED_DISKS",
    description:
      "Googlecloudsdk.command_lib.dataproc.clusters:DiskConfigParser",
    suggestions: [],
  },
};
const flag7566: Fig.Option = {
  name: "--master-boot-disk-provisioned-iops",
  description:
    "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops)\nto provision for the disk. This sets the limit for disk I/O operations per\nsecond. This is only supported if the bootdisk type is\n[hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
  args: {
    name: "MASTER_BOOT_DISK_PROVISIONED_IOPS",
    description: "Int",
    suggestions: [],
  },
};
const flag7567: Fig.Option = {
  name: "--master-boot-disk-provisioned-throughput",
  description:
    "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput)\nto provision for the disk. This sets the limit for throughput in MiB per\nsecond. This is only supported if the bootdisk type is\n[hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
  args: {
    name: "MASTER_BOOT_DISK_PROVISIONED_THROUGHPUT",
    description: "Int",
    suggestions: [],
  },
};
const flag7571: Fig.Option = {
  name: "--master-boot-disk-type",
  description:
    "The type of the boot disk. The value must be `pd-balanced`,\n`pd-ssd`, or `pd-standard`",
  args: {
    name: "MASTER_BOOT_DISK_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag7578: Fig.Option = {
  name: "--master-local-ssd-interface",
  description:
    "Interface to use to attach local SSDs to master node(s) in a cluster",
  args: {
    name: "MASTER_LOCAL_SSD_INTERFACE",
    description: "String",
    suggestions: [],
  },
};
const flag7580: Fig.Option = {
  name: "--master-machine-type",
  description:
    "The type of machine to use for the master. Defaults to server-specified",
  args: { name: "MASTER_MACHINE_TYPE", description: "String", suggestions: [] },
};
const flag7581: Fig.Option = {
  name: "--master-machine-types",
  description:
    'Types of machines with optional rank for master nodes to use. Defaults to server-specified.eg. --master-machine-types="type=e2-standard-8,type=t2d-standard-8,rank=0"',
  args: {
    name: "type=MACHINE_TYPE[,type=MACHINE_TYPE...][,rank=RANK]",
    description:
      "Googlecloudsdk.command_lib.dataproc.clusters:ArgMultiValueDict",
    suggestions: [],
  },
};
const flag7582: Fig.Option = {
  name: "--master-min-cpu-platform",
  description:
    "When specified, the VM is scheduled on the host with a specified CPU\narchitecture or a more recent CPU platform that's available in that\nzone. To list available CPU platforms in a zone, run:\n+\n    $ gcloud compute zones describe ZONE\n+\nCPU platform selection may not be available in a zone. Zones\nthat support CPU platform selection provide an `availableCpuPlatforms`\nfield, which contains the list of available CPU platforms in the zone\n(see [Availability of CPU platforms](/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor more information)",
  args: { name: "PLATFORM", description: "String", suggestions: [] },
};
const flag7633: Fig.Option = {
  name: "--max-failures-per-hour",
  description:
    "Specifies the maximum number of times a job can be restarted per hour in event of failure. Default is 0 (no retries after job failure)",
  args: { name: "MAX_FAILURES_PER_HOUR", description: "Int", suggestions: [] },
};
const flag7634: Fig.Option = {
  name: "--max-failures-total",
  description:
    "Specifies the maximum total number of times a job can be restarted after the job fails. Default is 0 (no retries after job failure)",
  args: { name: "MAX_FAILURES_TOTAL", description: "Int", suggestions: [] },
};
const flag7823: Fig.Option = {
  name: "--metadata",
  description:
    "Metadata to be made available to the guest operating system running on the instances",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag7846: Fig.Option = {
  name: "--metastore-service",
  description:
    'Name of a Dataproc Metastore service to be used as an external metastore in the format: "projects/{project-id}/locations/{region}/services/{service-name}"',
  args: { name: "METASTORE_SERVICE", description: "String", suggestions: [] },
};
const flag7848: Fig.Option = {
  name: "--metric-overrides-file",
  description:
    "Path to a file containing list of Metrics that override the default metrics enabled for the metric sources.\nThe path can be a Cloud Storage URL (example: `gs://path/to/file`) or a local file system path",
  args: {
    name: "METRIC_OVERRIDES_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag7849: Fig.Option = {
  name: "--metric-overrides",
  description:
    "List of metrics that override the default metrics enabled for the metric\nsources. Any of the\n[available OSS metrics](https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics)\nand all Spark metrics, can be listed for collection as a metric override.\nOverride metric values are case sensitive, and must be provided, if\nappropriate, in CamelCase format, for example:\n+\n*sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed*\n*hiveserver2:JVM:Memory:NonHeapMemoryUsage.used*\n+\nOnly the specified overridden metrics will be collected from a given metric\nsource. For example, if one or more *spark:executive* metrics are listed as\nmetric overrides, other *SPARK* metrics will not be collected. The collection\nof default OSS metrics from other metric sources is unaffected. For example,\nif both *SPARK* and *YARN* metric sources are enabled, and overrides are\nprovided for Spark metrics only, all default YARN metrics will be collected.\n+\nThe source of the specified metric override must be enabled. For example,\nif one or more *spark:driver* metrics are provided as metric overrides,\nthe spark metric source must be enabled (*--metric-sources=spark*)",
  args: {
    name: "METRIC_SOURCE:INSTANCE:GROUP:METRIC",
    description: "List",
    suggestions: [],
  },
};
const flag7850: Fig.Option = {
  name: "--metric-sources",
  description:
    "Specifies a list of cluster [Metric Sources](https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect custom metrics. _METRIC_SOURCE_ must be one of: *FLINK*, *HDFS*, *HIVEMETASTORE*, *HIVESERVER2*, *MONITORING_AGENT_DEFAULTS*, *SPARK*, *SPARK_HISTORY_SERVER*, *YARN*",
  args: { name: "METRIC_SOURCE", description: "List", suggestions: [] },
};
const flag7903: Fig.Option = {
  name: "--min-num-workers",
  description:
    "Minimum number of primary worker nodes to provision for cluster creation to succeed",
  args: { name: "MIN_NUM_WORKERS", description: "Int", suggestions: [] },
};
const flag7914: Fig.Option = {
  name: "--min-secondary-worker-fraction",
  description:
    "Minimum fraction of secondary worker nodes required to create the cluster. If it is not met, cluster creation will fail. Must be a decimal value between 0 and 1. The number of required secondary workers is calculated by ceil(min-secondary-worker-fraction * num_secondary_workers). Defaults to 0.0001",
  args: {
    name: "MIN_SECONDARY_WORKER_FRACTION",
    description: "Float",
    suggestions: [],
  },
};
const flag8245: Fig.Option = {
  name: "--network",
  description: "Network URI to connect network to",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag8265: Fig.Option = {
  name: "--network",
  description:
    'The Compute Engine network that the VM instances of the cluster will be\npart of. This is mutually exclusive with --subnet. If neither is\nspecified, this defaults to the "default" network',
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag8346: Fig.Option = {
  name: "--no-address",
  description:
    "If provided, the instances in the cluster will not be assigned external\nIP addresses.\n+\nIf omitted, then the Dataproc service will apply a default policy to determine if each instance in the cluster gets an external IP address or not.\n+\nNote: Dataproc VMs need access to the Dataproc API. This can be achieved\nwithout external IP addresses using Private Google Access\n(https://cloud.google.com/compute/docs/private-google-access)",
};
const flag10499: Fig.Option = {
  name: "--node-group",
  description:
    'The name of the sole-tenant node group to create the cluster on. Can be\na short name ("node-group-name") or in the format\n"projects/{project-id}/zones/{zone}/nodeGroups/{node-group-name}"',
  args: { name: "NODE_GROUP", description: "String", suggestions: [] },
};
const flag10593: Fig.Option = {
  name: "--num-master-local-ssds",
  description: "The number of local SSDs to attach to the master in a cluster",
  args: { name: "NUM_MASTER_LOCAL_SSDS", description: "Int", suggestions: [] },
};
const flag10594: Fig.Option = {
  name: "--num-masters",
  description:
    "The number of master nodes in the cluster.\n+\nNumber of Masters | Cluster Mode\n--- | ---\n1 | Standard\n3 | High Availability",
  args: {
    name: "NUM_MASTERS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag10604: Fig.Option = {
  name: "--num-secondary-worker-local-ssds",
  description:
    "The number of local SSDs to attach to each preemptible worker in\na cluster",
  args: {
    name: "NUM_SECONDARY_WORKER_LOCAL_SSDS",
    description: "Int",
    suggestions: [],
  },
};
const flag10606: Fig.Option = {
  name: "--num-secondary-workers",
  description: "The number of secondary worker nodes in the cluster",
  args: { name: "NUM_SECONDARY_WORKERS", description: "Int", suggestions: [] },
};
const flag10607: Fig.Option = {
  name: "--num-worker-local-ssds",
  description: "The number of local SSDs to attach to each worker in a cluster",
  args: { name: "NUM_WORKER_LOCAL_SSDS", description: "Int", suggestions: [] },
};
const flag10612: Fig.Option = {
  name: "--num-workers",
  description:
    "The number of worker nodes in the cluster. Defaults to server-specified",
  args: { name: "NUM_WORKERS", description: "Int", suggestions: [] },
};
const flag10719: Fig.Option = {
  name: "--optional-components",
  description:
    "List of optional components to be installed on cluster machines.\n+\nThe following page documents the optional components that can be\ninstalled:\nhttps://cloud.google.com/dataproc/docs/concepts/configuring-clusters/optional-components",
  args: { name: "COMPONENT", description: "List", suggestions: [] },
};
const flag11054: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *100*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
  args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
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
const flag11114: Fig.Option = {
  name: "--params",
  description: "A list of key value pairs to set variables in the Hive queries",
  args: { name: "PARAM=VALUE", description: "Dict", suggestions: [] },
};
const flag11115: Fig.Option = {
  name: "--params",
  description: "A list of key value pairs to set variables in the Pig queries",
  args: { name: "PARAM=VALUE", description: "Dict", suggestions: [] },
};
const flag11595: Fig.Option = {
  name: "--private-ipv6-google-access-type",
  description:
    "The private IPv6 Google access type for the cluster. _PRIVATE_IPV6_GOOGLE_ACCESS_TYPE_ must be one of: *inherit-subnetwork*, *outbound*, *bidirectional*",
  args: {
    name: "PRIVATE_IPV6_GOOGLE_ACCESS_TYPE",
    description: "String",
    suggestions: ["inherit-subnetwork", "outbound", "bidirectional"],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11686: Fig.Option = {
  name: "--properties-file",
  description:
    "Path to a local file or a file in a Cloud Storage bucket containing\nconfiguration properties for the job. The client machine running this command\nmust have read permission to the file.\n+\nSpecify properties in the form of property=value in the text file. For example:\n+\n```\n  # Properties to set for the job:\n  key1=value1\n  key2=value2\n  # Comment out properties not used.\n  # key3=value3\n```\n+\nIf a property is set in both `--properties` and `--properties-file`, the\nvalue defined in `--properties` takes precedence",
  args: { name: "PROPERTIES_FILE", description: "String", suggestions: [] },
};
const flag11737: Fig.Option = {
  name: "--properties",
  description: "A list of key value pairs to configure Hadoop",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11738: Fig.Option = {
  name: "--properties",
  description: "A list of key value pairs to configure Hive",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11739: Fig.Option = {
  name: "--properties",
  description: "A list of key value pairs to configure Pig",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11740: Fig.Option = {
  name: "--properties",
  description: "A list of key value pairs to set Presto session properties",
  args: { name: "PARAM=VALUE", description: "Dict", suggestions: [] },
};
const flag11741: Fig.Option = {
  name: "--properties",
  description: "A list of key value pairs to set Trino session properties",
  args: { name: "PARAM=VALUE", description: "Dict", suggestions: [] },
};
const flag11743: Fig.Option = {
  name: "--properties",
  description:
    "List of key value pairs to configure PySpark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11744: Fig.Option = {
  name: "--properties",
  description:
    "List of key value pairs to configure Spark. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11745: Fig.Option = {
  name: "--properties",
  description:
    "List of key value pairs to configure SparkR. For a list of available properties, see: https://spark.apache.org/docs/latest/configuration.html#available-properties",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11749: Fig.Option = {
  name: "--properties",
  description:
    "Specifies configuration properties for the workload. See\n[Dataproc Serverless for Spark documentation](https://cloud.google.com/dataproc-serverless/docs/concepts/properties)\nfor the list of supported properties",
  args: { name: "PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11751: Fig.Option = {
  name: "--properties",
  description:
    'Specifies configuration properties for installed packages, such as Hadoop\nand Spark.\n+\nProperties are mapped to configuration files by specifying a prefix, such as\n"core:io.serializations". The following are supported prefixes and their\nmappings:\n+\nPrefix | File | Purpose of file\n--- | --- | ---\ncapacity-scheduler | capacity-scheduler.xml | Hadoop YARN Capacity Scheduler configuration\ncore | core-site.xml | Hadoop general configuration\ndistcp | distcp-default.xml | Hadoop Distributed Copy configuration\nhadoop-env | hadoop-env.sh | Hadoop specific environment variables\nhdfs | hdfs-site.xml | Hadoop HDFS configuration\nhive | hive-site.xml | Hive configuration\nmapred | mapred-site.xml | Hadoop MapReduce configuration\nmapred-env | mapred-env.sh | Hadoop MapReduce specific environment variables\npig | pig.properties | Pig configuration\nspark | spark-defaults.conf | Spark configuration\nspark-env | spark-env.sh | Spark specific environment variables\nyarn | yarn-site.xml | Hadoop YARN configuration\nyarn-env | yarn-env.sh | Hadoop YARN specific environment variables\n+\nSee https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/cluster-properties\nfor more information',
  args: { name: "PREFIX:PROPERTY=VALUE", description: "Dict", suggestions: [] },
};
const flag11850: Fig.Option = {
  name: "--public-ip-address",
  description:
    "If provided, cluster instances are assigned external IP addresses.\n+\nIf omitted, the Dataproc service applies a default policy to determine\nwhether or not each instance in the cluster gets an external IP address.\n+\nNote: Dataproc VMs need access to the Dataproc API. This can be achieved\nwithout external IP addresses using Private Google Access\n(https://cloud.google.com/compute/docs/private-google-access)",
};
const flag11904: Fig.Option = {
  name: "--py-files",
  description:
    'Comma separated list of Python files to be provided to the job. Must be one of the following file formats ".py, .zip, or .egg"',
  args: { name: "PY_FILE", description: "List", suggestions: [] },
};
const flag11924: Fig.Option = {
  name: "--query-output-format",
  description:
    "The query output display format. See the Presto documentation for supported output formats",
  args: { name: "QUERY_OUTPUT_FORMAT", description: "String", suggestions: [] },
};
const flag11925: Fig.Option = {
  name: "--query-output-format",
  description:
    "The query output display format. See the Trino documentation for supported output formats",
  args: { name: "QUERY_OUTPUT_FORMAT", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12277: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region to use. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default *dataproc/region* property value for this command invocation",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12300: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the autoscaling policy. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `autoscaling_policy` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12301: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the batch. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `batch` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12302: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the cluster. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12303: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the job. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12304: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the node_group. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `node_group` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12305: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the operation. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12306: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the template. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `--workflow-template` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12307: Fig.Option = {
  name: "--region",
  description:
    "Dataproc region for the template. Each Dataproc region constitutes an independent resource namespace constrained to deploying instances into Compute Engine zones inside the region. Overrides the default `dataproc/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `template` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12315: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12833: Fig.Option = {
  name: "--request-id",
  description:
    "A unique ID that identifies the request. If the service receives two batch create requests with the same request_id, the second request is ignored and the operation that corresponds to the first batch created and stored in the backend is returned. Recommendation:  Always set this value to a UUID. The value must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters",
  args: {
    name: "REQUEST_ID",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag12915: Fig.Option = {
  name: "--reservation-affinity",
  description:
    "The type of reservation for the instance. _RESERVATION_AFFINITY_ must be one of: *any*, *none*, *specific*",
  args: {
    name: "RESERVATION_AFFINITY",
    description: "String",
    suggestions: ["any", "none", "specific"],
  },
};
const flag12929: Fig.Option = {
  name: "--reservation",
  description:
    "The name of the reservation, required when `--reservation-affinity=specific`",
  args: { name: "RESERVATION", description: "String", suggestions: [] },
};
const flag12960: Fig.Option = {
  name: "--resource-manager-tag",
  description:
    "Resource Manager Tags to be associated with the compute resources created for the workload. Only one key-value pair can be specified per flag. Repeat the flag to specify multiple tags",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag12984: Fig.Option = {
  name: "--resource-manager-tags",
  description:
    "Specifies a list of resource manager tags to apply to each cluster node (master and worker nodes)",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag13367: Fig.Option = {
  name: "--scopes",
  description:
    "Specifies scopes for the node instances. Multiple SCOPEs can be specified,\nseparated by commas.\nExamples:\n+\n  $ {command} example-cluster --scopes https://www.googleapis.com/auth/bigtable.admin\n+\n  $ {command} example-cluster --scopes sqlservice,bigquery\n+\nThe following *minimum scopes* are necessary for the cluster to function\nproperly and are always added, even if not explicitly specified:\n+\n  https://www.googleapis.com/auth/devstorage.read_write\n  https://www.googleapis.com/auth/logging.write\n+\nIf the `--scopes` flag is not specified, the following *default scopes*\nare also included:\n+\n  https://www.googleapis.com/auth/bigquery\n  https://www.googleapis.com/auth/bigtable.admin.table\n  https://www.googleapis.com/auth/bigtable.data\n  https://www.googleapis.com/auth/devstorage.full_control\n+\nIf you want to enable all scopes use the 'cloud-platform' scope.\n+\nSCOPE can be either the full URI of the scope or an alias. *Default* scopes are\nassigned to all instances. Available aliases are:\n+\nAlias | URI\n--- | ---\nbigquery | https://www.googleapis.com/auth/bigquery\ncloud-platform | https://www.googleapis.com/auth/cloud-platform\ncloud-source-repos | https://www.googleapis.com/auth/source.full_control\ncloud-source-repos-ro | https://www.googleapis.com/auth/source.read_only\ncompute-ro | https://www.googleapis.com/auth/compute.readonly\ncompute-rw | https://www.googleapis.com/auth/compute\ndatastore | https://www.googleapis.com/auth/datastore\ndefault | https://www.googleapis.com/auth/devstorage.read_only\n| https://www.googleapis.com/auth/logging.write\n| https://www.googleapis.com/auth/monitoring.write\n| https://www.googleapis.com/auth/pubsub\n| https://www.googleapis.com/auth/service.management.readonly\n| https://www.googleapis.com/auth/servicecontrol\n| https://www.googleapis.com/auth/trace.append\ngke-default | https://www.googleapis.com/auth/devstorage.read_only\n| https://www.googleapis.com/auth/logging.write\n| https://www.googleapis.com/auth/monitoring\n| https://www.googleapis.com/auth/service.management.readonly\n| https://www.googleapis.com/auth/servicecontrol\n| https://www.googleapis.com/auth/trace.append\nlogging-write | https://www.googleapis.com/auth/logging.write\nmonitoring | https://www.googleapis.com/auth/monitoring\nmonitoring-read | https://www.googleapis.com/auth/monitoring.read\nmonitoring-write | https://www.googleapis.com/auth/monitoring.write\npubsub | https://www.googleapis.com/auth/pubsub\nservice-control | https://www.googleapis.com/auth/servicecontrol\nservice-management | https://www.googleapis.com/auth/service.management.readonly\nsql (deprecated) | https://www.googleapis.com/auth/sqlservice\nsql-admin | https://www.googleapis.com/auth/sqlservice.admin\nstorage-full | https://www.googleapis.com/auth/devstorage.full_control\nstorage-ro | https://www.googleapis.com/auth/devstorage.read_only\nstorage-rw | https://www.googleapis.com/auth/devstorage.read_write\ntaskqueue | https://www.googleapis.com/auth/taskqueue\ntrace | https://www.googleapis.com/auth/trace.append\nuserinfo-email | https://www.googleapis.com/auth/userinfo.email\n+\nDEPRECATION WARNING: https://www.googleapis.com/auth/sqlservice account scope\nand `sql` alias do not provide SQL instance management capabilities and have\nbeen deprecated. Please, use https://www.googleapis.com/auth/sqlservice.admin\nor `sql-admin` to manage your Google SQL Service instances",
  args: { name: "SCOPE", description: "List", suggestions: [] },
};
const flag13394: Fig.Option = {
  name: "--secondary-worker-accelerator",
  description:
    "Attaches accelerators, such as GPUs, to the secondary-worker\ninstance(s).\n+\n*type*::: The specific type of accelerator to attach to the instances,\nsuch as `nvidia-tesla-t4` for NVIDIA T4. Use `gcloud compute\naccelerator-types list` to display available accelerator types.\n+\n*count*::: The number of accelerators to attach to each instance. The default value is 1",
  args: {
    name: "type=TYPE,[count=COUNT]",
    description: "Dict",
    suggestions: [],
  },
};
const flag13395: Fig.Option = {
  name: "--secondary-worker-attached-disks",
  description:
    "A list of disk configurations to attach to each instance in this group.\nDisk configurations are separated by semicolons. Each disk configuration\nis a comma-separated list of the following parameters.\n+\n   type - required\n      The type of disk to attach to the instances\n      (https://cloud.google.com/compute/docs/disks/hyperdisks).\n      Allowed disk types are: hyperdisk-balanced, hyperdisk-extreme,\n      hyperdisk-ml, hyperdisk-throughput.\n+\n   size - optional\n      The size of the disk. The value must be a whole number followed by\n      a size unit GB for gigabyte, or TB for terabyte. For example,\n      10GB produces a 10 gigabyte disk.\n+\n   iops - optional\n      Indicates the IOPS\n      (https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to\n      provision for the attached hyperdisk. This parameter sets the limit\n      for disk I/O operations per second.\n+\n   throughput - optional\n      Indicates the throughput\n      (https://cloud.google.com/compute/docs/disks/hyperdisks#throughput)\n      to provision for the attached hyperdisk. This parameter sets the\n      limit for throughput in MiB per second.\n+\n  Example:\n    type='hyperdisk-balanced,iops=5000,throughput=200,size=100G;type=hyperdisk-throughput,size=9000G'\n+\n    Attaches two disks to the instances. The first disk is a\n    hyperdisk-balanced disk with 5000 IOPS, 200 MiB/s throughput, and 100\n    GiB size. The second disk is a hyperdisk-throughput disk with 9000\n    GiB size",
  args: {
    name: "SECONDARY_WORKER_ATTACHED_DISKS",
    description:
      "Googlecloudsdk.command_lib.dataproc.clusters:DiskConfigParser",
    suggestions: [],
  },
};
const flag13400: Fig.Option = {
  name: "--secondary-worker-boot-disk-type",
  description:
    "The type of the boot disk. The value must be `pd-balanced`,\n`pd-ssd`, or `pd-standard`",
  args: {
    name: "SECONDARY_WORKER_BOOT_DISK_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag13401: Fig.Option = {
  name: "--secondary-worker-local-ssd-interface",
  description:
    "Interface to use to attach local SSDs to each secondary worker\nin a cluster",
  args: {
    name: "SECONDARY_WORKER_LOCAL_SSD_INTERFACE",
    description: "String",
    suggestions: [],
  },
};
const flag13402: Fig.Option = {
  name: "--secondary-worker-machine-types",
  description:
    'Types of machines with optional rank for secondary workers to use. Defaults to server-specified.eg. --secondary-worker-machine-types="type=e2-standard-8,type=t2d-standard-8,rank=0"',
  args: {
    name: "type=MACHINE_TYPE[,type=MACHINE_TYPE...][,rank=RANK]",
    description:
      "Googlecloudsdk.command_lib.dataproc.clusters:ArgMultiValueDict",
    suggestions: [],
  },
};
const flag13403: Fig.Option = {
  name: "--secondary-worker-standard-capacity-base",
  description:
    "This flag sets the base number of Standard VMs to use for [secondary workers](https://cloud.google.com/dataproc/docs/concepts/compute/secondary-vms#preemptible_and_non-preemptible_secondary_workers). Dataproc will create only standard VMs until it reaches this number, then it will mix Spot and Standard VMs according to ``SECONDARY_WORKER_STANDARD_CAPACITY_PERCENT_ABOVE_BASE''",
  args: {
    name: "SECONDARY_WORKER_STANDARD_CAPACITY_BASE",
    description: "Int",
    suggestions: [],
  },
};
const flag13404: Fig.Option = {
  name: "--secondary-worker-standard-capacity-percent-above-base",
  description:
    "When combining Standard and Spot VMs for [secondary-workers](https://cloud.google.com/dataproc/docs/concepts/compute/secondary-vms#preemptible_and_non-preemptible_secondary_workers) once the number of Standard VMs specified by ``SECONDARY_WORKER_STANDARD_CAPACITY_BASE'' has been used, this flag specifies the percentage of the total number of additional Standard VMs secondary workers will use. Spot VMs will be used for the remaining percentage",
  args: {
    name: "SECONDARY_WORKER_STANDARD_CAPACITY_PERCENT_ABOVE_BASE",
    description: "Int",
    suggestions: [],
  },
};
const flag13405: Fig.Option = {
  name: "--secondary-worker-type",
  description:
    "The type of the secondary worker group. _TYPE_ must be one of: *preemptible*, *non-preemptible*, *spot*",
  args: {
    name: "TYPE",
    description: "String",
    suggestions: ["preemptible", "non-preemptible", "spot"],
  },
};
const flag13423: Fig.Option = {
  name: "--secure-multi-tenancy-user-mapping",
  description:
    'A string of user-to-service-account mappings. Mappings are separated\nby commas, and each mapping takes the form of\n"user-account:service-account". Example:\n"bob@company.com:service-account-bob@project.iam.gserviceaccount.com,alice@company.com:service-account-alice@project.iam.gserviceaccount.com"',
  args: {
    name: "SECURE_MULTI_TENANCY_USER_MAPPING",
    description: "String",
    suggestions: [],
  },
};
const flag13521: Fig.Option = {
  name: "--service-account",
  description: "The Google Cloud IAM service account to be authenticated as",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13525: Fig.Option = {
  name: "--service-account",
  description: "The IAM service account to be used for a batch/session job",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13743: Fig.Option = {
  name: "--shielded-integrity-monitoring",
  description:
    "Enables monitoring and attestation of the boot integrity of the\ncluster's VMs. vTPM (virtual Trusted Platform Module) must also be\nenabled. A TPM is a hardware module that can be used for different\nsecurity operations, such as remote attestation, encryption, and sealing\nof keys",
};
const flag13754: Fig.Option = {
  name: "--shielded-secure-boot",
  description: "The cluster's VMs will boot with secure boot enabled",
};
const flag13761: Fig.Option = {
  name: "--shielded-vtpm",
  description:
    "The cluster's VMs will boot with the TPM (Trusted Platform Module) enabled.\nA TPM is a hardware module that can be used for different security\noperations, such as remote attestation, encryption, and sealing of keys",
};
const flag13821: Fig.Option = {
  name: "--single-node",
  description:
    "Create a single node cluster.\n+\nA single node cluster has all master and worker components.\nIt cannot have any separate worker nodes. If this flag is not\nspecified, a cluster with separate workers is created",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14145: Fig.Option = {
  name: "--source",
  description:
    "Path to a YAML file containing configuration export data.\n          Alternatively, you may omit this flag to read from standard input",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14348: Fig.Option = {
  name: "--staging-bucket",
  description:
    "The Cloud Storage bucket to use to store job dependencies, config files,\nand job driver console output. If not specified, the default [staging bucket]\n(https://cloud.google.com/dataproc-serverless/docs/concepts/buckets) is used",
  args: { name: "STAGING_BUCKET", description: "String", suggestions: [] },
};
const flag14359: Fig.Option = {
  name: "--start-after",
  description: "(Optional) List of step IDs to start this job after",
  args: { name: "STEP_ID", description: "List", suggestions: [] },
};
const flag14428: Fig.Option = {
  name: "--step-id",
  description: "The step ID of the job in the workflow template",
  args: { name: "STEP_ID", description: "String", suggestions: [] },
};
const flag14434: Fig.Option = {
  name: "--stop-max-age",
  description:
    'The lifespan of the cluster, with auto-stop upon completion,\nsuch as "2h" or "1d".\nSee $ gcloud topic datetimes for information on duration formats',
  args: {
    name: "STOP_MAX_AGE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag14435: Fig.Option = {
  name: "--stop-max-idle",
  description:
    'The duration after the last job completes to auto-stop the cluster,\nsuch as "2h" or "1d".\nSee $ gcloud topic datetimes for information on duration formats',
  args: {
    name: "STOP_MAX_IDLE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag14514: Fig.Option = {
  name: "--subnet",
  description:
    "Specifies the subnet that the cluster will be part of. This is mutally\nexclusive with --network",
  args: { name: "SUBNET", description: "String", suggestions: [] },
};
const flag14518: Fig.Option = {
  name: "--subnet",
  description:
    "Subnetwork URI to connect network to. Subnet must have Private Google Access enabled",
  args: { name: "SUBNET", description: "String", suggestions: [] },
};
const flag14648: Fig.Option = {
  name: "--tags",
  description:
    "Specifies a list of tags to apply to the instance. These tags allow\nnetwork firewall rules and routes to be applied to specified VM instances.\nSee gcloud_compute_firewall-rules_create(1) for more details.\n+\nTo read more about configuring network tags, read this guide:\nhttps://cloud.google.com/vpc/docs/add-remove-network-tags\n+\nTo list instances with their respective status and tags, run:\n+\n  $ gcloud compute instances list --format='table(name,status,tags.list())'\n+\nTo list instances tagged with a specific tag, `tag1`, run:\n+\n  $ gcloud compute instances list --filter='tags:tag1'",
  args: { name: "TAG", description: "List", suggestions: [] },
};
const flag14660: Fig.Option = {
  name: "--tags",
  description: "Network tags for traffic control",
  args: { name: "TAGS", description: "List", suggestions: [] },
};
const flag14800: Fig.Option = {
  name: "--temp-bucket",
  description:
    "The Google Cloud Storage bucket to use by default to store\nephemeral cluster and jobs data, such as Spark and MapReduce history files",
  args: { name: "TEMP_BUCKET", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15033: Fig.Option = {
  name: "--ttl",
  description:
    "The duration after the workload will be unconditionally terminated,\nfor example, '20m' or '1h'. Run\n[gcloud topic datetimes](https://cloud.google.com/sdk/gcloud/reference/topic/datetimes)\nfor information on duration formats",
  args: {
    name: "TTL",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15167: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15327: Fig.Option = {
  name: "--user-workload-authentication-type",
  description:
    "Whether to use END_USER_CREDENTIALS or SERVICE_ACCOUNT to run the workload",
  args: {
    name: "USER_WORKLOAD_AUTHENTICATION_TYPE",
    description: "String",
    suggestions: [],
  },
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
const flag15434: Fig.Option = {
  name: "--version",
  description:
    "Optional runtime version.  If not specified, a default version will be used",
  args: { name: "VERSION", description: "String", suggestions: [] },
};
const flag15575: Fig.Option = {
  name: "--worker-accelerator",
  description:
    "Attaches accelerators, such as GPUs, to the worker\ninstance(s).\n+\n*type*::: The specific type of accelerator to attach to the instances,\nsuch as `nvidia-tesla-t4` for NVIDIA T4. Use `gcloud compute\naccelerator-types list` to display available accelerator types.\n+\n*count*::: The number of accelerators to attach to each instance. The default value is 1",
  args: {
    name: "type=TYPE,[count=COUNT]",
    description: "Dict",
    suggestions: [],
  },
};
const flag15577: Fig.Option = {
  name: "--worker-attached-disks",
  description:
    "A list of disk configurations to attach to each instance in this group.\nDisk configurations are separated by semicolons. Each disk configuration\nis a comma-separated list of the following parameters.\n+\n   type - required\n      The type of disk to attach to the instances\n      (https://cloud.google.com/compute/docs/disks/hyperdisks).\n      Allowed disk types are: hyperdisk-balanced, hyperdisk-extreme,\n      hyperdisk-ml, hyperdisk-throughput.\n+\n   size - optional\n      The size of the disk. The value must be a whole number followed by\n      a size unit GB for gigabyte, or TB for terabyte. For example,\n      10GB produces a 10 gigabyte disk.\n+\n   iops - optional\n      Indicates the IOPS\n      (https://cloud.google.com/compute/docs/disks/hyperdisks#iops) to\n      provision for the attached hyperdisk. This parameter sets the limit\n      for disk I/O operations per second.\n+\n   throughput - optional\n      Indicates the throughput\n      (https://cloud.google.com/compute/docs/disks/hyperdisks#throughput)\n      to provision for the attached hyperdisk. This parameter sets the\n      limit for throughput in MiB per second.\n+\n  Example:\n    type='hyperdisk-balanced,iops=5000,throughput=200,size=100G;type=hyperdisk-throughput,size=9000G'\n+\n    Attaches two disks to the instances. The first disk is a\n    hyperdisk-balanced disk with 5000 IOPS, 200 MiB/s throughput, and 100\n    GiB size. The second disk is a hyperdisk-throughput disk with 9000\n    GiB size",
  args: {
    name: "WORKER_ATTACHED_DISKS",
    description:
      "Googlecloudsdk.command_lib.dataproc.clusters:DiskConfigParser",
    suggestions: [],
  },
};
const flag15578: Fig.Option = {
  name: "--worker-boot-disk-provisioned-iops",
  description:
    "Indicates the [IOPS](https://cloud.google.com/compute/docs/disks/hyperdisks#iops)\nto provision for the disk. This sets the limit for disk I/O operations per\nsecond. This is only supported if the bootdisk type is\n[hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
  args: {
    name: "WORKER_BOOT_DISK_PROVISIONED_IOPS",
    description: "Int",
    suggestions: [],
  },
};
const flag15579: Fig.Option = {
  name: "--worker-boot-disk-provisioned-throughput",
  description:
    "Indicates the [throughput](https://cloud.google.com/compute/docs/disks/hyperdisks#throughput)\nto provision for the disk. This sets the limit for throughput in MiB per\nsecond. This is only supported if the bootdisk type is\n[hyperdisk-balanced](https://cloud.google.com/compute/docs/disks/hyperdisks)",
  args: {
    name: "WORKER_BOOT_DISK_PROVISIONED_THROUGHPUT",
    description: "Int",
    suggestions: [],
  },
};
const flag15583: Fig.Option = {
  name: "--worker-boot-disk-type",
  description:
    "The type of the boot disk. The value must be `pd-balanced`,\n`pd-ssd`, or `pd-standard`",
  args: {
    name: "WORKER_BOOT_DISK_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag15589: Fig.Option = {
  name: "--worker-local-ssd-interface",
  description:
    "Interface to use to attach local SSDs to each worker in a cluster",
  args: {
    name: "WORKER_LOCAL_SSD_INTERFACE",
    description: "String",
    suggestions: [],
  },
};
const flag15592: Fig.Option = {
  name: "--worker-machine-type",
  description:
    "The type of machine to use for primary workers. Defaults to server-specified",
  args: { name: "WORKER_MACHINE_TYPE", description: "String", suggestions: [] },
};
const flag15596: Fig.Option = {
  name: "--worker-machine-types",
  description:
    '[Machine types](https://cloud.google.com/dataproc/docs/concepts/compute/supported-machine-types) for primary worker nodes to use with optional rank. A lower rank number is given higher preference. Based on availablilty, Dataproc tries to create primary worker VMs using the worker machine type with the lowest rank, and then tries to use machine types with higher ranks as necessary. Machine types with the same rank are given the same preference. Example use: --worker-machine-types="type=e2-standard-8,type=n2-standard-8,rank=0". For more information, see [Dataproc Flexible VMs](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/flexible-vms)',
  args: {
    name: "type=MACHINE_TYPE[,type=MACHINE_TYPE...][,rank=RANK]",
    description:
      "Googlecloudsdk.command_lib.dataproc.clusters:ArgMultiValueDict",
    suggestions: [],
  },
};
const flag15598: Fig.Option = {
  name: "--worker-min-cpu-platform",
  description:
    "When specified, the VM is scheduled on the host with a specified CPU\narchitecture or a more recent CPU platform that's available in that\nzone. To list available CPU platforms in a zone, run:\n+\n    $ gcloud compute zones describe ZONE\n+\nCPU platform selection may not be available in a zone. Zones\nthat support CPU platform selection provide an `availableCpuPlatforms`\nfield, which contains the list of available CPU platforms in the zone\n(see [Availability of CPU platforms](/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor more information)",
  args: { name: "PLATFORM", description: "String", suggestions: [] },
};
const flag15615: Fig.Option = {
  name: "--workflow-template",
  description:
    "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `--workflow-template` on the command line",
  args: { name: "WORKFLOW_TEMPLATE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "dataproc",
  description: "Create and manage Google Cloud Dataproc clusters and jobs",
  subcommands: [
    {
      name: "autoscaling-policies",
      description: "Create and manage Dataproc autoscaling policies",
      subcommands: [
        {
          name: "delete",
          description: "Delete an autoscaling policy",
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
            flag12300,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `autoscaling_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an autoscaling policy",
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
            flag12300,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `autoscaling_policy` on the command line",
          },
        },
        {
          name: "export",
          description: "Export an autoscaling policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12300,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `autoscaling_policy` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for an autoscaling policy",
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
            flag12300,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `autoscaling_policy` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an autoscaling policy",
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
            flag12300,
            flag14145,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOSCALING_POLICY",
            description:
              "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `autoscaling_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List autoscaling policies",
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
            flag11054,
            flag11637,
            flag11946,
            flag12277,
            flag13948,
            flag14975,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for an autoscaling policy",
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
            flag12300,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "AUTOSCALING_POLICY",
              description:
                "ID of the autoscaling policy or fully qualified identifier for the autoscaling policy.\n+\nTo set the `autoscaling_policy` attribute:\n* provide the argument `autoscaling_policy` on the command line",
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
      name: "batches",
      description: "Submit Dataproc batch jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a batch job without removing batch resources",
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
            flag12301,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch.\n+\nTo set the `batch` attribute:\n* provide the argument `batch` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a batch job",
          options: [
            flag42,
            flag46,
            flag715,
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
            flag12301,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch.\n+\nTo set the `batch` attribute:\n* provide the argument `batch` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a batch job",
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
            flag12301,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch.\n+\nTo set the `batch` attribute:\n* provide the argument `batch` on the command line",
          },
        },
        {
          name: "list",
          description: "List batch jobs in a project",
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
            flag6515,
            flag7356,
            flag11054,
            flag11637,
            flag11946,
            flag12277,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "submit",
          description: "Submit a Dataproc batch job",
          subcommands: [
            {
              name: "pyspark",
              description: "Submit a PySpark batch job",
              options: [
                flag42,
                flag46,
                flag674,
                flag715,
                flag1109,
                flag1201,
                flag2292,
                flag2389,
                flag3043,
                flag4828,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5464,
                flag5699,
                flag6086,
                flag6305,
                flag6413,
                flag7356,
                flag7846,
                flag8245,
                flag11637,
                flag11749,
                {
                  name: "--py-files",
                  description:
                    "Comma-separated list of Python scripts to be passed to the PySpark framework. Supported file types: ``.py'', ``.egg'' and ``.zip.''",
                  args: { name: "PY", description: "List", suggestions: [] },
                },
                flag11946,
                flag12315,
                flag12833,
                flag12960,
                flag13525,
                flag14348,
                flag14518,
                flag14660,
                flag14975,
                flag15033,
                flag15315,
                flag15327,
                flag15424,
                flag15434,
              ],
              args: [
                {
                  name: "MAIN_PYTHON_FILE",
                  description:
                    "URI of the main Python file to use as the Spark driver. Must be a ``.py'' file",
                },
                {
                  name: "JOB_ARG",
                  description:
                    "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARG on the right",
                },
              ],
            },
            {
              name: "spark",
              description: "Submit a Spark batch job",
              options: [
                flag42,
                flag46,
                flag674,
                flag715,
                flag1109,
                flag1201,
                {
                  name: "--class",
                  description:
                    "Class contains the main method of the job. The jar file that contains the class must be in the classpath or specified in `jar_files`",
                  args: {
                    name: "CLASS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag2389,
                flag3043,
                flag4828,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5464,
                flag5699,
                {
                  name: "--jar",
                  description: "URI of the main jar file",
                  args: { name: "JAR", description: "String", suggestions: [] },
                },
                flag6086,
                flag6305,
                flag6413,
                flag7356,
                flag7846,
                flag8245,
                flag11637,
                flag11749,
                flag11946,
                flag12315,
                flag12833,
                flag12960,
                flag13525,
                flag14348,
                flag14518,
                flag14660,
                flag14975,
                flag15033,
                flag15315,
                flag15327,
                flag15424,
                flag15434,
              ],
              args: {
                name: "JOB_ARG",
                description:
                  "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARG on the right",
              },
            },
            {
              name: "spark-r",
              description: "Submit a Spark R batch job",
              options: [
                flag42,
                flag46,
                flag674,
                flag715,
                flag1109,
                flag1201,
                flag2292,
                flag2389,
                flag3043,
                flag4828,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5464,
                flag5699,
                flag6305,
                flag6413,
                flag7356,
                flag7846,
                flag8245,
                flag11637,
                flag11749,
                flag11946,
                flag12315,
                flag12833,
                flag12960,
                flag13525,
                flag14348,
                flag14518,
                flag14660,
                flag14975,
                flag15033,
                flag15315,
                flag15327,
                flag15424,
                flag15434,
              ],
              args: [
                {
                  name: "MAIN_R_FILE",
                  description:
                    "URI of the main R file to use as the driver. Must be a ``.R'' or ``.r'' file",
                },
                {
                  name: "JOB_ARG",
                  description:
                    "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARG on the right",
                },
              ],
            },
            {
              name: "spark-sql",
              description: "Submit a Spark SQL batch job",
              options: [
                flag42,
                flag46,
                flag715,
                flag1109,
                flag1201,
                flag2292,
                flag2389,
                flag3043,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5464,
                flag5699,
                flag6086,
                flag6305,
                flag6413,
                flag7356,
                flag7846,
                flag8245,
                flag11637,
                flag11749,
                flag11946,
                flag12315,
                flag12833,
                flag12960,
                flag13525,
                flag14348,
                flag14518,
                flag14660,
                flag14975,
                flag15033,
                flag15315,
                flag15327,
                {
                  name: "--vars",
                  description:
                    'Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";)',
                  args: {
                    name: "NAME=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag15424,
                flag15434,
              ],
              args: {
                name: "SQL_SCRIPT",
                description:
                  "URI of the script that contains Spark SQL queries to execute",
              },
            },
          ],
        },
        {
          name: "wait",
          description:
            "View the output of a batch as it runs or after it completes",
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
            flag12301,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BATCH",
            description:
              "ID of the batch or fully qualified identifier for the batch.\n+\nTo set the `batch` attribute:\n* provide the argument `batch` on the command line",
          },
        },
      ],
    },
    {
      name: "clusters",
      description: "Create and manage Dataproc clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a cluster",
          options: [
            flag42,
            flag46,
            {
              name: "--action-on-failed-primary-workers",
              description:
                "Failure action to take when primary workers fail during cluster creation. _ACTION_ON_FAILED_PRIMARY_WORKERS_ must be one of:\n+\n*DELETE*::: delete the failed primary workers\n*FAILURE_ACTION_UNSPECIFIED*::: failure action is not specified\n*NO_ACTION*::: take no action\n:::\n+",
              args: {
                name: "ACTION_ON_FAILED_PRIMARY_WORKERS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: [
                  "DELETE",
                  "FAILURE_ACTION_UNSPECIFIED",
                  "NO_ACTION",
                ],
              },
            },
            flag720,
            flag864,
            flag939,
            flag1201,
            flag1289,
            flag2055,
            flag2233,
            flag2230,
            flag2292,
            flag2824,
            {
              name: "--delete-expiration-time",
              description:
                'The time when the cluster will be auto-deleted, such as\n"2017-08-29T18:52:51.142Z."\nSee $ gcloud topic datetimes for information on time formats',
              args: {
                name: "DELETE_EXPIRATION_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--delete-max-age",
              description:
                'The lifespan of the cluster, with auto-deletion upon completion,\nsuch as "2h" or "1d".\nSee $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_AGE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--delete-max-idle",
              description:
                'The duration after the last job completes to auto-delete the\ncluster, such as "2h" or "1d".\nSee $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_IDLE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-accelerator",
              description:
                "Attaches accelerators, such as GPUs, to the driver-pool\ninstance(s).\n+\n*type*::: The specific type of accelerator to attach to the instances,\nsuch as `nvidia-tesla-t4` for NVIDIA T4. Use `gcloud compute\naccelerator-types list` to display available accelerator types.\n+\n*count*::: The number of accelerators to attach to each instance. The default value is 1",
              args: {
                name: "type=TYPE,[count=COUNT]",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk\ncan have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "DRIVER_POOL_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-boot-disk-type",
              description:
                "The type of the boot disk. The value must be `pd-balanced`,\n`pd-ssd`, or `pd-standard`",
              args: {
                name: "DRIVER_POOL_BOOT_DISK_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-id",
              description:
                "Custom identifier for the DRIVER Node Group being created. If not\nprovided, a random string is generated",
              args: {
                name: "DRIVER_POOL_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-local-ssd-interface",
              description:
                "Interface to use to attach local SSDs to cluster driver pool node(s)",
              args: {
                name: "DRIVER_POOL_LOCAL_SSD_INTERFACE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-machine-type",
              description:
                "The type of machine to use for the cluster driver pool nodes. Defaults to server-specified",
              args: {
                name: "DRIVER_POOL_MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-min-cpu-platform",
              description:
                "When specified, the VM is scheduled on the host with a specified CPU\narchitecture or a more recent CPU platform that's available in that\nzone. To list available CPU platforms in a zone, run:\n+\n    $ gcloud compute zones describe ZONE\n+\nCPU platform selection may not be available in a zone. Zones\nthat support CPU platform selection provide an `availableCpuPlatforms`\nfield, which contains the list of available CPU platforms in the zone\n(see [Availability of CPU platforms](/compute/docs/instances/specify-min-cpu-platform#availablezones)\nfor more information)",
              args: {
                name: "PLATFORM",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--driver-pool-size",
              description: "The size of the cluster driver pool",
              args: {
                name: "DRIVER_POOL_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            flag4072,
            flag4177,
            flag4312,
            flag4431,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gce-pd-kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--gce-pd-kms-key` on the command line",
              args: {
                name: "GCE_PD_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gce-pd-kms-key-keyring",
              description:
                "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--gce-pd-kms-key` on the command line with a fully specified name;\n* provide the argument `--gce-pd-kms-key-keyring` on the command line",
              args: {
                name: "GCE_PD_KMS_KEY_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gce-pd-kms-key-location",
              description:
                "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--gce-pd-kms-key` on the command line with a fully specified name;\n* provide the argument `--gce-pd-kms-key-location` on the command line",
              args: {
                name: "GCE_PD_KMS_KEY_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gce-pd-kms-key-project",
              description:
                "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--gce-pd-kms-key` on the command line with a fully specified name;\n* provide the argument `--gce-pd-kms-key-project` on the command line;\n* set the property `core/project`",
              args: {
                name: "GCE_PD_KMS_KEY_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5609,
            flag5692,
            flag5681,
            flag5699,
            flag5793,
            flag5794,
            flag6207,
            flag6212,
            flag6209,
            flag6210,
            flag6211,
            flag6215,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            flag7561,
            flag7563,
            flag7566,
            flag7567,
            {
              name: "--master-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk\ncan have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "MASTER_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag7571,
            flag7578,
            flag7580,
            flag7581,
            flag7582,
            flag7823,
            flag7849,
            flag7848,
            flag7850,
            flag7903,
            flag7914,
            flag8265,
            flag8346,
            flag10499,
            {
              name: "--num-driver-pool-local-ssds",
              description:
                "The number of local SSDs to attach to each cluster driver pool node",
              args: {
                name: "NUM_DRIVER_POOL_LOCAL_SSDS",
                description: "Int",
                suggestions: [],
              },
            },
            flag10593,
            flag10594,
            flag10604,
            flag10606,
            flag10607,
            flag10612,
            flag10719,
            flag11595,
            flag11637,
            flag11751,
            flag11850,
            flag11946,
            flag12302,
            flag12929,
            flag12915,
            flag12984,
            flag13367,
            flag13394,
            flag13395,
            {
              name: "--secondary-worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk\ncan have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag13400,
            flag13401,
            flag13402,
            flag13403,
            flag13404,
            flag13405,
            flag13423,
            flag13521,
            flag13743,
            flag13754,
            flag13761,
            flag13821,
            {
              name: "--stop-expiration-time",
              description:
                'The time when the cluster will be auto-stopped, such as\n"2017-08-29T18:52:51.142Z."\nSee $ gcloud topic datetimes for information on time formats',
              args: {
                name: "STOP_EXPIRATION_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14434,
            flag14435,
            flag14514,
            flag14648,
            flag14800,
            flag14975,
            flag15315,
            flag15424,
            flag15575,
            flag15577,
            flag15578,
            flag15579,
            {
              name: "--worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n``10GB'' will produce a 10 gigabyte disk. The minimum size a boot disk\ncan have is 10 GB. Disk size must be a multiple of 1 GB",
              args: {
                name: "WORKER_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag15583,
            flag15589,
            flag15592,
            flag15596,
            flag15598,
            {
              name: ["--zone", "-z"],
              description:
                "The compute zone (such as `us-central1-a`) for the cluster. If empty\nand --region is set to a value other than global, [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone)\nwill pick a zone in the region.\nOverrides the default compute/zone property value for this command invocation",
              args: { name: "ZONE", description: "String", suggestions: [] },
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
          description: "Delete a cluster",
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
            flag12302,
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
          description: "View the details of a cluster",
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
            flag12302,
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
          name: "diagnose",
          description: "Run a detailed diagnostic on a cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--end-time",
              description:
                "Time instant to stop the diagnosis at (in %Y-%m-%dT%H:%M:%S.%fZ format)",
              args: {
                name: "END_TIME",
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
              name: "--job-ids",
              description: "A list of jobs on which to perform the diagnosis",
              args: { name: "JOB_IDS", description: "String", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12302,
            {
              name: "--start-time",
              description:
                "Time instant to start the diagnosis from (in %Y-%m-%dT%H:%M:%S.%fZ format)",
              args: {
                name: "START_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--tarball-access",
              description:
                "Target access privileges for diagnostic tarball. _TARBALL_ACCESS_ must be one of: *GOOGLE_CLOUD_SUPPORT*, *GOOGLE_DATAPROC_DIAGNOSE*",
              args: {
                name: "TARBALL_ACCESS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: [
                  "GOOGLE_CLOUD_SUPPORT",
                  "GOOGLE_DATAPROC_DIAGNOSE",
                ],
              },
            },
            {
              name: "--tarball-gcs-dir",
              description:
                "The output Cloud Storage directory for the diagnostic tarball. If not specified, a task-specific directory in the cluster's staging bucket will be used",
              args: {
                name: "TARBALL_GCS_DIR",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--yarn-application-ids",
              description:
                "A list of yarn applications on which to perform the diagnosis",
              args: {
                name: "YARN_APPLICATION_IDS",
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
          name: "export",
          description: "Export a cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12302,
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
          name: "get-iam-policy",
          description: "Get IAM policy for a cluster",
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
            flag12302,
            flag13948,
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
          name: "gke",
          description: "Create Dataproc GKE-based virtual clusters",
          subcommands: [
            {
              name: "create",
              description: "Create a GKE-based virtual cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gke-cluster",
                  description:
                    "ID of the gke-cluster or fully qualified identifier for the gke-cluster.\n+\nTo set the `gke-cluster` attribute:\n* provide the argument `--gke-cluster` on the command line",
                  args: {
                    name: "GKE_CLUSTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--gke-cluster-location",
                  description:
                    "GKE region for the gke-cluster.\n+\nTo set the `gke-cluster-location` attribute:\n* provide the argument `--gke-cluster` on the command line with a fully specified name;\n* provide the argument `--gke-cluster-location` on the command line;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
                  args: {
                    name: "GKE_CLUSTER_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                {
                  name: "--history-server-cluster",
                  description:
                    "ID of the history-server-cluster or fully qualified identifier for the history-server-cluster.\n+\nTo set the `history-server-cluster` attribute:\n* provide the argument `--history-server-cluster` on the command line",
                  args: {
                    name: "HISTORY_SERVER_CLUSTER",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--history-server-cluster-region",
                  description:
                    "Compute Engine region for the history-server-cluster. It must be the same region as the Dataproc cluster that is being created.\n+\nTo set the `history-server-cluster-region` attribute:\n* provide the argument `--history-server-cluster` on the command line with a fully specified name;\n* provide the argument `--history-server-cluster-region` on the command line;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
                  args: {
                    name: "HISTORY_SERVER_CLUSTER_REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                {
                  name: "--metastore-service",
                  description:
                    "ID of the metastore-service or fully qualified identifier for the metastore-service.\n+\nTo set the `metastore-service` attribute:\n* provide the argument `--metastore-service` on the command line",
                  args: {
                    name: "METASTORE_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--metastore-service-location",
                  description:
                    "Dataproc Metastore location for the metastore-service.\n+\nTo set the `metastore-service-location` attribute:\n* provide the argument `--metastore-service` on the command line with a fully specified name;\n* provide the argument `--metastore-service-location` on the command line;\n* provide the argument `--region` on the command line;\n* set the property `dataproc/region`",
                  args: {
                    name: "METASTORE_SERVICE_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--namespace",
                  description:
                    "The name of the Kubernetes namespace to deploy Dataproc system\ncomponents in. This namespace does not need to exist",
                  args: {
                    name: "NAMESPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--pools",
                  description:
                    "Each `--pools` flag represents a GKE node pool associated with\n        the virtual cluster. It is comprised of a CSV in the form\n        `KEY=VALUE[;VALUE]`, where certain keys may have multiple values.\n+\nThe following KEYs must be specified:\n+\n        -----------------------------------------------------------------------------------------------------------\n        KEY    Type             Example                  Description\n        ------ ---------------- ------------------------ ----------------------------------------------------------\n        name   string           `my-node-pool`          Name of the node pool.\n+\n        roles  repeated string  `default;spark-driver`  Roles that this node pool should perform. Valid values are\n                                                         `default`, `controller`, `spark-driver`, `spark-executor`.\n        -----------------------------------------------------------------------------------------------------------\n+\nThe following KEYs may be specified:\n+\n        ----------------------------------------------------------------------------------------------------------------------------------------------------------------\n        KEY                Type             Example                                       Description\n        --------------- ---------------- --------------------------------------------- ---------------------------------------------------------------------------------\n        machineType        string           `n1-standard-8`                               Compute Engine machine type to use.\n+\n        preemptible        boolean          `false`                                       If true, then this node pool uses preemptible VMs.\n                                                                                          This cannot be true on the node pool with the `controllers` role\n                                                                                          (or `default` role if `controllers` role is not specified).\n+\n        localSsdCount      int              `2`                                           The number of local SSDs to attach to each node.\n+\n        accelerator        repeated string  `nvidia-tesla-a100=1`                         Accelerators to attach to each node. In the format NAME=COUNT.\n+\n        minCpuPlatform     string           `Intel Skylake`                               Minimum CPU platform for each node.\n+\n        bootDiskKmsKey     string           `projects/project-id/locations/us-central1    The Customer Managed Encryption Key (CMEK) used to encrypt\n                                            /keyRings/keyRing-name/cryptoKeys/key-name`   the boot disk attached to each node in the node pool.\n+\n        locations          repeated string  `us-west1-a;us-west1-c`                       Zones within the location of the GKE cluster.\n                                                                                          All `--pools` flags for a Dataproc cluster must have identical locations.\n+\n        min                int              `0`                                           Minimum number of nodes per zone that this node pool can scale down to.\n+\n        max                int              `10`                                          Maximum number of nodes per zone that this node pool can scale up to.\n        ----------------------------------------------------------------------------------------------------------------------------------------------------------------",
                  args: {
                    name: "KEY=VALUE[;VALUE]",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11637,
                {
                  name: "--properties",
                  description:
                    'Specifies configuration properties for installed packages, such as\nSpark. Properties are mapped to configuration files by specifying a\nprefix, such as "core:io.serializations"',
                  args: {
                    name: "PREFIX:PROPERTY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11946,
                flag12302,
                {
                  name: "--setup-workload-identity",
                  description:
                    "Sets up the GKE Workload Identity for your Dataproc on GKE cluster.\nNote that running this requires elevated permissions as it will\nmanipulate IAM policies on the Google Service Accounts that will be\nused by your Dataproc on GKE cluster",
                },
                {
                  name: "--spark-engine-version",
                  description:
                    "The version of the Spark engine to run on this cluster",
                  args: {
                    name: "SPARK_ENGINE_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--staging-bucket",
                  description:
                    "The Cloud Storage bucket to use to stage job dependencies, miscellaneous\nconfig files, and job driver console output when using this cluster",
                  args: {
                    name: "STAGING_BUCKET",
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
          name: "import",
          description: "Import a cluster",
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
            flag12302,
            flag14145,
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
          description: "View a list of clusters in a project",
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
            flag11054,
            flag11637,
            flag11946,
            flag12277,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a cluster",
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
            flag12302,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "CLUSTER",
              description:
                "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `cluster` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
            },
          ],
        },
        {
          name: "start",
          description: "Start a cluster",
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
            flag12302,
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
          name: "stop",
          description: "Stop a cluster",
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
            flag12302,
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
          name: "update",
          description:
            "Update labels and/or the number of worker nodes in a cluster",
          options: [
            flag42,
            flag46,
            {
              name: "--add-user-mappings",
              description:
                "List of user-to-service-account mappings to add to current mappings.\nIf a mapping exists, its value is modified; otherwise, the new\nmapping is added",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag720,
            flag939,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--delete-expiration-time",
              description:
                'The time when the cluster will be auto-deleted, such as\n"2017-08-29T18:52:51.142Z". See $ gcloud topic datetimes for\ninformation on time formats',
              args: {
                name: "DELETE_EXPIRATION_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--delete-max-age",
              description:
                'The lifespan of the cluster with auto-deletion upon completion,\nsuch as "2h" or "1d".\nSee $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_AGE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--delete-max-idle",
              description:
                'The duration after the last job completes to auto-delete the cluster,\nsuch as "2h" or "1d".\nSee $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DELETE_MAX_IDLE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            {
              name: "--disable-autoscaling",
              description:
                "Disable autoscaling, if it is enabled. This is an alias for passing the\nempty string to --autoscaling-policy'",
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--graceful-decommission-timeout",
              description:
                "The graceful decommission timeout for decommissioning Node Managers\nin the cluster, used when removing nodes. Graceful decommissioning\nallows removing nodes from the cluster without interrupting jobs in\nprogress. Timeout specifies how long to wait for jobs in progress to\nfinish before forcefully removing nodes (and potentially\ninterrupting jobs). Timeout defaults to 0 if not set (for forceful\ndecommission), and the maximum allowed timeout is 1 day.\nSee $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "GRACEFUL_DECOMMISSION_TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag5453,
            {
              name: "--identity-config-file",
              description:
                "Path to a YAML (or JSON) file that contains the configuration for [Secure Multi-Tenancy](/dataproc/docs/concepts/iam/sa-multi-tenancy)\non the cluster. The path can be a Cloud Storage URL (example: 'gs://path/to/file')\nor a local filesystem path. The mappings provided in the file will overwrite existing mappings.\n+\nThe YAML file is formatted as follows:\n+\n```\n  # Mapping header (first line) required.\n  user_service_account_mapping:\n    bob@company.com: service-account-bob@project.iam.gserviceaccount.com\n    alice@company.com: service-account-alice@project.iam.gserviceaccount.com\n```",
              args: {
                name: "IDENTITY_CONFIG_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag7356,
            {
              name: "--min-secondary-worker-fraction",
              description:
                "Minimum fraction of new secondary worker nodes added in a scale up update operation, required to update the cluster. If it is not met, cluster updation will rollback the addition of secondary workers. Must be a decimal value between 0 and 1. Defaults to 0.0001",
              args: {
                name: "MIN_SECONDARY_WORKER_FRACTION",
                description: "Float",
                suggestions: [],
              },
            },
            {
              name: "--no-delete-max-age",
              description:
                "Cancels the cluster auto-deletion by maximum cluster age (configured\nby --delete-max-age or --delete-expiration-time flags)",
            },
            {
              name: "--no-delete-max-idle",
              description:
                "Cancels the cluster auto-deletion by cluster idle duration (configured\nby --delete-max-idle flag)",
            },
            {
              name: "--no-stop-max-age",
              description:
                "Cancels the cluster auto-stop by maximum cluster age (configured by\n--stop-max-age or --stop-expiration-time flags)",
            },
            {
              name: "--no-stop-max-idle",
              description:
                "Cancels the cluster auto-stop by cluster idle duration (configured\nby --stop-max-idle flag)",
            },
            {
              name: "--num-secondary-workers",
              description:
                "The new number of secondary worker nodes in the cluster",
              args: {
                name: "NUM_SECONDARY_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--num-workers",
              description: "The new number of worker nodes in the cluster",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12302,
            flag12637,
            {
              name: "--remove-user-mappings",
              description:
                "List of user-to-service-account mappings to remove from the\ncurrent mappings. If a mapping does not exist, it is ignored",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            {
              name: "--stop-expiration-time",
              description:
                'The time when the cluster will be auto-stopped, such as\n"2017-08-29T18:52:51.142Z". See $ gcloud topic datetimes for\ninformation on time formats',
              args: {
                name: "STOP_EXPIRATION_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14434,
            flag14435,
            flag14975,
            flag15167,
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
      name: "jobs",
      description: "Submit and manage Dataproc jobs",
      subcommands: [
        {
          name: "delete",
          description: "Delete the record of an inactive job",
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
            flag12303,
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
          name: "describe",
          description: "View the details of a job",
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
            flag12303,
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
          name: "get-iam-policy",
          description: "Get IAM policy for a job",
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
            flag12303,
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
          name: "kill",
          description: "Kill an active job",
          options: [
            flag42,
            flag46,
            flag715,
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
            flag12303,
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
          description: "List jobs in a project",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description: "Restrict to the jobs of this Dataproc cluster",
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
            flag11054,
            flag11637,
            flag11946,
            flag12277,
            flag13948,
            {
              name: "--state-filter",
              description:
                "Filter by job state. _STATE_FILTER_ must be one of: *active*, *inactive*",
              args: {
                name: "STATE_FILTER",
                description: "String",
                suggestions: ["active", "inactive"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a job",
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
            flag12303,
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
          name: "submit",
          description: "Submit Dataproc jobs to execute on a cluster",
          subcommands: [
            {
              name: "flink",
              description: "Submit a Flink job to a cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1288,
                flag1456,
                flag2080,
                flag2042,
                flag2292,
                {
                  name: "--driver-log-levels",
                  description:
                    "List of package to log4j log level pairs to configure driver logging. For example: root=FATAL,com.example=INFO",
                  args: {
                    name: "PACKAGE=LEVEL",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag3922,
                flag3923,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6078,
                {
                  name: "--jars",
                  description:
                    "Comma-separated list of jar files to provide to the task manager classpaths",
                  args: { name: "JAR", description: "List", suggestions: [] },
                },
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                {
                  name: "--properties",
                  description:
                    "List of key=value pairs to configure Flink. For a list of available properties, see: https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/config/",
                  args: {
                    name: "PROPERTY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11686,
                flag11946,
                flag12277,
                {
                  name: "--savepoint",
                  description:
                    "HCFS URI of the savepoint that is used to refer to the state of the previously stopped job. The new job will resume previous state from there",
                  args: {
                    name: "SAVEPOINT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB_ARGS",
                description:
                  "The job arguments to pass.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
              },
            },
            {
              name: "hadoop",
              description: "Submit a Hadoop job to a cluster",
              options: [
                flag42,
                flag46,
                flag676,
                flag720,
                flag1201,
                flag1288,
                flag1456,
                flag2080,
                flag2042,
                flag2292,
                flag3908,
                flag3922,
                flag3923,
                flag4826,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6078,
                flag6083,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                flag11737,
                flag11686,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB_ARGS",
                description:
                  "The arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
              },
            },
            {
              name: "hive",
              description: "Submit a Hive job to a cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1288,
                flag2080,
                flag2042,
                flag2292,
                flag2451,
                flag3922,
                flag3923,
                flag4615,
                flag4804,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6082,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11114,
                flag11637,
                flag11738,
                flag11686,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "pig",
              description: "Submit a Pig job to a cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1288,
                flag2080,
                flag2042,
                flag2292,
                flag2451,
                flag3908,
                flag3922,
                flag3923,
                flag4616,
                flag4805,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6081,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11115,
                flag11637,
                flag11739,
                flag11686,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "presto",
              description: "Submit a Presto job to a cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1288,
                flag1976,
                flag2080,
                flag2042,
                flag2292,
                flag2450,
                flag3909,
                flag3922,
                flag3923,
                flag4617,
                flag4807,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                flag11740,
                flag11686,
                flag11924,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "pyspark",
              description: "Submit a PySpark job to a cluster",
              options: [
                flag42,
                flag46,
                flag675,
                flag720,
                flag1201,
                flag1288,
                flag2080,
                flag2042,
                flag2292,
                flag3910,
                flag3922,
                flag3923,
                flag4827,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6085,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                flag11743,
                flag11686,
                flag11904,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "PY_FILE",
                  description: "Main .py file to run as the driver",
                },
                {
                  name: "JOB_ARGS",
                  description:
                    "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
                },
              ],
            },
            {
              name: "spark",
              description: "Submit a Spark job to a cluster",
              options: [
                flag42,
                flag46,
                flag675,
                flag720,
                flag1201,
                flag1288,
                flag1456,
                flag2080,
                flag2042,
                flag2292,
                flag3913,
                flag3922,
                flag3923,
                flag4827,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6078,
                flag6085,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                flag11744,
                flag11686,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB_ARGS",
                description:
                  "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
              },
            },
            {
              name: "spark-r",
              description: "Submit a SparkR job to a cluster",
              options: [
                flag42,
                flag46,
                flag675,
                flag720,
                flag1201,
                flag1288,
                flag2080,
                flag2042,
                flag2292,
                flag3910,
                flag3922,
                flag3923,
                flag4827,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                flag11745,
                flag11686,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "R_FILE",
                  description: "Main .R file to run as the driver",
                },
                {
                  name: "JOB_ARGS",
                  description:
                    "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
                },
              ],
            },
            {
              name: "spark-sql",
              description: "Submit a Spark SQL job to a cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1288,
                flag2080,
                flag2042,
                flag2292,
                flag3908,
                flag3922,
                flag3923,
                flag4618,
                flag4806,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6084,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11114,
                flag11637,
                flag11738,
                flag11686,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "trino",
              description: "Submit a Trino job to a cluster",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1288,
                flag1977,
                flag2080,
                flag2042,
                flag2292,
                flag2450,
                flag3909,
                flag3922,
                flag3923,
                flag4619,
                flag4808,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag7633,
                flag7634,
                flag11637,
                flag11741,
                flag11686,
                flag11925,
                flag11946,
                flag12277,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update the labels for a job",
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
            flag7356,
            flag11637,
            flag11946,
            flag12303,
            flag12637,
            flag14975,
            flag15167,
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
          name: "wait",
          description:
            "View the output of a job as it runs or after it completes",
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
            flag12303,
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
      ],
    },
    {
      name: "node-groups",
      description: "Manage Dataproc node groups",
      subcommands: [
        {
          name: "describe",
          description: "Describe the node group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2079,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12304,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NODE_GROUP",
            description:
              "ID of the node_group or fully qualified identifier for the node_group.\n+\nTo set the `node_group` attribute:\n* provide the argument `node_group` on the command line",
          },
        },
        {
          name: "resize",
          description: "Resize the number of nodes in the node group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2079,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--graceful-decommission-timeout",
              description:
                "Graceful decommission timeout for a node group scale-down resize",
              args: {
                name: "GRACEFUL_DECOMMISSION_TIMEOUT",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12304,
            {
              name: "--size",
              description: "New size for a node group",
              args: { name: "SIZE", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NODE_GROUP",
            description:
              "ID of the node_group or fully qualified identifier for the node_group.\n+\nTo set the `node_group` attribute:\n* provide the argument `node_group` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "View and manage Dataproc operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an active operation",
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
            flag12305,
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
          description: "Delete the record of an inactive operation",
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
            flag12305,
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
          description: "View the details of an operation",
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
            flag12305,
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
          name: "get-iam-policy",
          description: "Get IAM policy for an operation",
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
            flag12305,
            flag13948,
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
          description: "View the list of all operations",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description:
                "Restrict to the operations of this Dataproc cluster. This flag is ignored when --filter is specified. The equivalent term in a --filter expression is: `clusterName = myclustername`",
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
            flag11054,
            flag11637,
            flag11946,
            flag12277,
            flag13948,
            {
              name: "--state-filter",
              description:
                "Filter by cluster state. This flag is ignored when --filter is specified. The equivalent term in a --filter expression is: `status.state = ACTIVE`. _STATE_FILTER_ must be one of: *active*, *inactive*",
              args: {
                name: "STATE_FILTER",
                description: "String",
                suggestions: ["active", "inactive"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for an operation",
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
            flag12305,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "OPERATION",
              description:
                "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
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
      name: "workflow-templates",
      description: "Create and manage Dataproc workflow templates",
      subcommands: [
        {
          name: "add-job",
          description: "Add Dataproc jobs to workflow template",
          subcommands: [
            {
              name: "hadoop",
              description: "Add a hadoop job to the workflow template",
              options: [
                flag42,
                flag46,
                flag676,
                flag1201,
                flag1456,
                flag2292,
                flag3908,
                flag4826,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6078,
                flag6083,
                flag6413,
                flag7356,
                flag11637,
                flag11737,
                flag11686,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
              args: {
                name: "JOB_ARGS",
                description:
                  "The arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
              },
            },
            {
              name: "hive",
              description: "Add a Hive job to the workflow template",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2451,
                flag4615,
                flag4804,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6082,
                flag6413,
                flag7356,
                flag11114,
                flag11637,
                flag11738,
                flag11686,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
            },
            {
              name: "pig",
              description: "Add a Pig job to the workflow template",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2451,
                flag3908,
                flag4616,
                flag4805,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6081,
                flag6413,
                flag7356,
                flag11115,
                flag11637,
                flag11739,
                flag11686,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
            },
            {
              name: "presto",
              description: "Add a Presto job to the workflow template",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1976,
                flag2292,
                flag2450,
                flag3909,
                flag4617,
                flag4807,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag11637,
                flag11740,
                flag11686,
                flag11924,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
            },
            {
              name: "pyspark",
              description: "Add a PySpark job to the workflow template",
              options: [
                flag42,
                flag46,
                flag675,
                flag1201,
                flag2292,
                flag3910,
                flag4827,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6085,
                flag6413,
                flag7356,
                flag11637,
                flag11743,
                flag11686,
                flag11904,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
              args: [
                {
                  name: "PY_FILE",
                  description: "Main .py file to run as the driver",
                },
                {
                  name: "JOB_ARGS",
                  description:
                    "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
                },
              ],
            },
            {
              name: "spark",
              description: "Add a Spark job to the workflow template",
              options: [
                flag42,
                flag46,
                flag675,
                flag1201,
                flag1456,
                flag2292,
                flag3913,
                flag4827,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6078,
                flag6085,
                flag6413,
                flag7356,
                flag11637,
                flag11744,
                flag11686,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
              args: {
                name: "JOB_ARGS",
                description:
                  "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
              },
            },
            {
              name: "spark-r",
              description: "Add a SparkR job to the workflow template",
              options: [
                flag42,
                flag46,
                flag675,
                flag1201,
                flag2292,
                flag3910,
                flag4827,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag11637,
                flag11745,
                flag11686,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
              args: [
                {
                  name: "R_FILE",
                  description: "Main .R file to run as the driver",
                },
                {
                  name: "JOB_ARGS",
                  description:
                    "Arguments to pass to the driver.\n+\nThe '--' argument must be specified between gcloud specific args on the left and JOB_ARGS on the right",
                },
              ],
            },
            {
              name: "spark-sql",
              description: "Add a SparkSql job to the workflow template",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3908,
                flag4618,
                flag4806,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6084,
                flag6413,
                flag7356,
                flag11114,
                flag11637,
                flag11738,
                flag11686,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
            },
            {
              name: "trino",
              description: "Add a Trino job to the workflow template",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1977,
                flag2292,
                flag2450,
                flag3909,
                flag4619,
                flag4808,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7356,
                flag11637,
                flag11741,
                flag11686,
                flag11925,
                flag11946,
                flag12306,
                flag14359,
                flag14428,
                flag14975,
                flag15315,
                flag15424,
                flag15615,
              ],
            },
          ],
        },
        {
          name: "create",
          description: "Create a workflow template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dag-timeout",
              description:
                'The duration for which a DAG of jobs can run before being\nauto-cancelled, such as "10m" or "16h".\nSee $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DAG_TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kms-key",
              description:
                "The KMS key used to encrypt sensitive data in the workflow template",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            flag6413,
            flag7356,
            flag11637,
            flag11946,
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a workflow template",
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
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a workflow template",
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
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "export",
          description: "Export a workflow template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a workflow template",
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
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "import",
          description: "Import a workflow template",
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
            flag12307,
            flag14145,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "instantiate",
          description: "Instantiate a workflow template",
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
              name: "--parameters",
              description:
                "A map from parameter names to values that should be used for those\nparameters. A value must be provided for every configured parameter.\nParameters can be configured when creating or updating a workflow\ntemplate",
              args: {
                name: "PARAM=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "instantiate-from-file",
          description: "Instantiate a workflow template from a file",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--file",
              description:
                "The YAML file containing the workflow template to run",
              args: { name: "FILE", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12277,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List workflow templates",
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
            flag11054,
            flag11637,
            flag11946,
            flag12277,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-dag-timeout",
          description: "Remove DAG timeout from a workflow template",
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
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "remove-job",
          description: "Remove a job from workflow template",
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
            flag12307,
            {
              name: "--step-id",
              description:
                "The step ID of the job in the workflow template to remove",
              args: { name: "STEP_ID", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "set-cluster-selector",
          description: "Set cluster selector for the workflow template",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster-labels",
              description: "A list of label KEY=VALUE pairs to add",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "set-dag-timeout",
          description: "Set DAG timeout on a workflow template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dag-timeout",
              description:
                'The duration for which a DAG of jobs can run before being\nauto-cancelled, such as "10m" or "16h".\nSee $ gcloud topic datetimes for information on duration formats',
              args: {
                name: "DAG_TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a template",
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
            flag12307,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TEMPLATE",
              description:
                "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "set-managed-cluster",
          description: "Set a managed cluster for the workflow template",
          options: [
            flag42,
            flag46,
            flag864,
            flag939,
            flag1201,
            flag1289,
            {
              name: "--cluster-name",
              description:
                "The name of the managed dataproc cluster.\nIf unspecified, the workflow template ID will be used",
              args: {
                name: "CLUSTER_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag2055,
            flag2233,
            flag2230,
            flag2292,
            flag2824,
            flag4072,
            flag4177,
            flag4312,
            flag4431,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5609,
            flag5692,
            flag5681,
            flag5699,
            flag5793,
            flag5794,
            flag6207,
            flag6212,
            flag6209,
            flag6210,
            flag6211,
            flag6215,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            flag7561,
            flag7563,
            flag7566,
            flag7567,
            {
              name: "--master-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n`10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              args: {
                name: "MASTER_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag7571,
            flag7578,
            flag7580,
            flag7581,
            flag7582,
            flag7823,
            flag7849,
            flag7848,
            flag7850,
            flag7903,
            flag7914,
            flag8265,
            flag8346,
            flag10499,
            flag10593,
            flag10594,
            flag10604,
            flag10606,
            flag10607,
            flag10612,
            flag10719,
            flag11595,
            flag11637,
            flag11751,
            flag11850,
            flag11946,
            flag12307,
            flag12929,
            flag12915,
            flag12984,
            flag13367,
            flag13394,
            flag13395,
            {
              name: "--secondary-worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n`10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              args: {
                name: "SECONDARY_WORKER_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag13400,
            flag13401,
            flag13402,
            flag13403,
            flag13404,
            flag13405,
            flag13423,
            flag13521,
            flag13743,
            flag13754,
            flag13761,
            flag13821,
            flag14514,
            flag14648,
            flag14800,
            flag14975,
            flag15315,
            flag15424,
            flag15575,
            flag15577,
            flag15578,
            flag15579,
            {
              name: "--worker-boot-disk-size",
              description:
                "The size of the boot disk. The value must be a\nwhole number followed by a size unit of ``KB'' for kilobyte, ``MB''\nfor megabyte, ``GB'' for gigabyte, or ``TB'' for terabyte. For example,\n`10GB` will produce a 10 gigabyte disk. The minimum boot disk size is 10 GB. Boot disk size must be a multiple of 1 GB",
              args: {
                name: "WORKER_BOOT_DISK_SIZE",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag15583,
            flag15589,
            flag15592,
            flag15596,
            flag15598,
            {
              name: "--zone",
              description:
                "The compute zone (such as `us-central1-a`) for the cluster. If empty\nand --region is set to a value other than global, [Dataproc Auto Zone placement](https://docs.cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone)\nwill pick a zone in the region.\nOverrides the default compute/zone property value for this command invocation",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "TEMPLATE",
            description:
              "ID of the template or fully qualified identifier for the template.\n+\nTo set the `template` attribute:\n* provide the argument `template` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
