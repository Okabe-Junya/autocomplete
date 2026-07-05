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
const flag109: Fig.Option = {
  name: "--active-directory",
  description:
    "ID of the active_directory or fully qualified identifier for the active_directory.\n+\nTo set the `active_directory` attribute:\n* provide the argument `--active-directory` on the command line",
  args: { name: "ACTIVE_DIRECTORY", description: "String", suggestions: [] },
};
const flag348: Fig.Option = {
  name: "--administrators",
  description: "Members of the Active Directory built-in Administrators group",
  args: { name: "ADMINISTRATOR", description: "List", suggestions: [] },
};
const flag424: Fig.Option = {
  name: "--allow-auto-tiering",
  description:
    "Boolean flag indicating whether Storage Pool is allowed to use auto-tiering",
  args: {
    name: "ALLOW_AUTO_TIERING",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag1020: Fig.Option = {
  name: "--backup-config",
  description:
    "Backup Config contains backup related config on a volume.\n+\n    Backup Config will have the following format\n    `--backup-config=backup-policies=BACKUP_POLICIES,\n    backup-vault=BACKUP_VAULT_NAME,\n    enable-scheduled-backups=ENABLE_SCHEDULED_BACKUPS\n+\nbackup-policies is a pound-separated (#) list of backup policy names, backup-vault can include\na single backup-vault resource name, and enable-scheduled-backups is a Boolean value indicating\nwhether or not scheduled backups are enabled on the volume",
  args: { name: "BACKUP_CONFIG", description: "Dict", suggestions: [] },
};
const flag1034: Fig.Option = {
  name: "--backup-operators",
  description:
    "Users to be added to the Built-in Backup Operator Active Directory group",
  args: { name: "BACKUP_OPERATOR", description: "List", suggestions: [] },
};
const flag1042: Fig.Option = {
  name: "--backup-retention-policy",
  description:
    "Backup Retention Policy of the Backup Vault.\n+\nBackup Retention Policy allows you to configure the retention policy for\nbackups created within this vault. It consists of several fields that govern\nhow long backups are kept and what type of backups are immutable",
  args: {
    name: "BACKUP_RETENTION_POLICY",
    description: "Dict",
    suggestions: [],
  },
};
const flag1052: Fig.Option = {
  name: ["--backup-vault", "--backup_vault"],
  description:
    "The Backup Vault of the backup.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `--backup` on the command line with a fully specified name;\n* provide the argument `--backup_vault` on the command line;\n* provide the argument `--backup-vault` on the command line",
  args: { name: "BACKUP_VAULT", description: "String", suggestions: [] },
};
const flag1053: Fig.Option = {
  name: ["--backup-vault", "--backup_vault"],
  description:
    "The Backup Vault of the backup.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `--source-backup` on the command line with a fully specified name;\n* provide the argument `--backup_vault` on the command line;\n* provide the argument `--backup-vault` on the command line",
  args: { name: "BACKUP_VAULT", description: "String", suggestions: [] },
};
const flag1055: Fig.Option = {
  name: "--backup-vault",
  description:
    "ID of the backup_vault or fully qualified identifier for the backup_vault.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `--backup-vault` on the command line",
  args: { name: "BACKUP_VAULT", description: "String", suggestions: [] },
};
const flag1063: Fig.Option = {
  name: "--backup",
  description:
    "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `--backup` on the command line",
  args: { name: "BACKUP", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1228: Fig.Option = {
  name: "--block-devices",
  description:
    "A block device to be created with the volume.\n+\nThis flag can be repeated to specify multiple block devices.\n+\nThe following keys are available:\n*name*::: A user-defined name for the block device.\n*host-groups*::: A comma-separated list of host groups that can mount the block volume.\n*os-type*::: The OS type of the volume. Allowed values are `OS_TYPE_UNSPECIFIED`, `LINUX`, `WINDOWS`.\n*size-gib*::: The size of the block device in GiB. Note that this value is ignored during volume creation and is system-managed",
  args: { name: "BLOCK_DEVICES", description: "Dict", suggestions: [] },
};
const flag1348: Fig.Option = {
  name: "--cache-parameters",
  description:
    "Cache Parameters contains cache parameters of a volume.\n+\n    Cache Parameters will have the following format\n    `--cache-parameters=peer-volume-name=PEER_VOLUME_NAME,\n      peer-cluster-name=PEER_CLUSTER_NAME,\n      peer-svm-name=PEER_SVM_NAME,\n      peer-ip-addresses=[PEER-IP-ADDRESS1#PEER-IP-ADDRESS2#...],\n      enable-global-file-lock=ENABLE_GLOBAL_FILE_LOCK,\n      cache-config=CACHE_CONFIG`\n+\n    *peer-volume-name*::: Name of the user's local source volume\n    *peer-cluster-name*::: Name of the user's local source cluster\n    *peer-svm-name*::: Name of the user's local source vserver svm\n    *peer-ip-addresses*::: Hashtag-separated(#) list of IP addresses\n    *enable-global-file-lock*::: If true, enable global file lock\n    *cache-config*::: Cache-config as a hashtag-separated(#) list of key-value pairs",
  args: { name: "CACHE_PARAMETERS", description: "Dict", suggestions: [] },
};
const flag1349: Fig.Option = {
  name: "--cache-pre-populate",
  description:
    "Cache Pre-populate contains cache pre-populate parameters of a volume.\n+\nCache Pre-populate will have the following format\n`--cache-pre-populate=path-list=PATH_LIST1#PATH_LIST2,\n  exclude-path-list=EXCLUDE_PATH_LIST1#EXCLUDE_PATH_LIST2,\n  recursion=RECURSION`\n+\n*path-list*::: Hashtag-separated(#) list of paths to be pre-populated\n*exclude-path-list*::: Hashtag-separated(#) list of paths to be excluded from pre-population\n*recursion*::: Boolean value indicating pre-populate recursion",
  args: { name: "CACHE_PRE_POPULATE", description: "Dict", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag2044: Fig.Option = {
  name: "--cluster-location",
  description: "Location of the user cluster",
  args: { name: "CLUSTER_LOCATION", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2673: Fig.Option = {
  name: "--daily-backup-limit",
  description:
    "Maximum number of daily backups to keep.\nNote that the minimum daily backup limit is 2",
  args: {
    name: "DAILY_BACKUP_LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag3054: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Active Directory",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3055: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Backup Policy",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3056: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Backup Vault",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3058: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Host Group",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3059: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp KMS Config",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3060: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Quota rule",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3061: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Replication",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3062: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Snapshot",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3063: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Storage Pool",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3064: Fig.Option = {
  name: "--description",
  description: "A description of the Cloud NetApp Volume",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3860: Fig.Option = {
  name: "--dns",
  description:
    "A comma separated list of DNS server IP addresses for the Active Directory domain",
  args: { name: "DNS", description: "String", suggestions: [] },
};
const flag3897: Fig.Option = {
  name: "--domain",
  description: "The Active Directory domain",
  args: { name: "DOMAIN", description: "String", suggestions: [] },
};
const flag4016: Fig.Option = {
  name: "--enable-aes",
  description:
    "The Boolean value indiciating whether AES encryption will be enabled for SMB communication",
  args: {
    name: "ENABLE_AES",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag4178: Fig.Option = {
  name: "--enable-kerberos",
  description:
    "Boolean flag indicating whether Volume is a kerberos Volume or not",
  args: {
    name: "ENABLE_KERBEROS",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag4188: Fig.Option = {
  name: "--enable-ldap-signing",
  description:
    "Boolean flag that specifies whether or not LDAP traffic needs to be signed",
  args: {
    name: "ENABLE_LDAP_SIGNING",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag4353: Fig.Option = {
  name: "--enabled",
  description:
    "The Boolean value indiciating whether backups are made automatically according to the schedules.\n      If enabled, this will be applied to all volumes that have this backup policy attached and enforced on\n      the volume level. If not specified, the default is true",
  args: {
    name: "ENABLED",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag4363: Fig.Option = {
  name: "--encrypt-dc-connections",
  description:
    "Boolean flag that specifies whether traffic between SMB server to Domain Controller (DC) will be encrypted",
  args: {
    name: "ENCRYPT_DC_CONNECTIONS",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag4687: Fig.Option = {
  name: "--export-policy",
  description:
    "Export Policy of a Cloud NetApp Files Volume.\nThis will be a field similar to network\nin which export policy fields can be specified as such:\n`--export-policy=allowed-clients=ALLOWED_CLIENTS_IP_ADDRESSES,\nhas-root-access=HAS_ROOT_ACCESS_BOOL,access=ACCESS_TYPE,nfsv3=NFSV3,\nnfsv4=NFSV4,kerberos-5-read-only=KERBEROS_5_READ_ONLY,\nkerberos-5-read-write=KERBEROS_5_READ_WRITE,\nkerberos-5i-read-only=KERBEROS_5I_READ_ONLY,\nkerberos-5i-read-write=KERBEROS_5I_READ_WRITE,\nkerberos-5p-read-only=KERBEROS_5P_READ_ONLY,\nkerberos-5p-read-write=KERBEROS_5P_READ_WRITE,\nsquash-mode=SQUASH_MODE,anon-uid=ANON_UID`",
  args: { name: "EXPORT_POLICY", description: "Dict", suggestions: [] },
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
const flag6198: Fig.Option = {
  name: "--kdc-hostname",
  description: "Name of the Active Directory machine",
  args: { name: "KDC_HOSTNAME", description: "String", suggestions: [] },
};
const flag6199: Fig.Option = {
  name: "--kdc-ip",
  description: "KDC server IP address for the Active Directory machine",
  args: { name: "KDC_IP", description: "String", suggestions: [] },
};
const flag6294: Fig.Option = {
  name: "--kms-config",
  description:
    "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `--kms-config` on the command line",
  args: { name: "KMS_CONFIG", description: "String", suggestions: [] },
};
const flag6312: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the kms_key or fully qualified identifier for the kms_key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6332: Fig.Option = {
  name: "--kms-keyring",
  description:
    "The KMS keyring of the kms_key\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6340: Fig.Option = {
  name: "--kms-location",
  description:
    "The Cloud location for the kms_key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6348: Fig.Option = {
  name: "--kms-project",
  description:
    "The Cloud project for the kms_key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
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
const flag6730: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* uses all locations by default.;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7046: Fig.Option = {
  name: "--location",
  description:
    "The location of the active_directory.\n+\nTo set the `location` attribute:\n* provide the argument `active_directory` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7047: Fig.Option = {
  name: "--location",
  description:
    "The location of the backup.\n+\nTo set the `location` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7048: Fig.Option = {
  name: "--location",
  description:
    "The location of the backup_policy.\n+\nTo set the `location` attribute:\n* provide the argument `backup_policy` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7049: Fig.Option = {
  name: "--location",
  description:
    "The location of the backup_vault.\n+\nTo set the `location` attribute:\n* provide the argument `backup_vault` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7051: Fig.Option = {
  name: "--location",
  description:
    "The location of the host_group.\n+\nTo set the `location` attribute:\n* provide the argument `host_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7053: Fig.Option = {
  name: "--location",
  description:
    "The location of the kms_config.\n+\nTo set the `location` attribute:\n* provide the argument `kms_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7060: Fig.Option = {
  name: "--location",
  description:
    "The location of the quota_rule.\n+\nTo set the `location` attribute:\n* provide the argument `quota_rule` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7061: Fig.Option = {
  name: "--location",
  description:
    "The location of the replication.\n+\nTo set the `location` attribute:\n* provide the argument `replication` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7070: Fig.Option = {
  name: "--location",
  description:
    "The location of the snapshot.\n+\nTo set the `location` attribute:\n* provide the argument `snapshot` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7071: Fig.Option = {
  name: "--location",
  description:
    "The location of the storage_pool.\n+\nTo set the `location` attribute:\n* provide the argument `storage_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7072: Fig.Option = {
  name: "--location",
  description:
    "The location of the volume.\n+\nTo set the `location` attribute:\n* provide the argument `volume` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8018: Fig.Option = {
  name: "--monthly-backup-limit",
  description:
    "Number of monthly backups to keep.\nNote that the sum of daily, weekly and monthly backups\nshould be greater than 1",
  args: {
    name: "MONTHLY_BACKUP_LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag8155: Fig.Option = {
  name: "--net-bios-prefix",
  description: "NetBIOS prefix name of the server",
  args: { name: "NET_BIOS_PREFIX", description: "String", suggestions: [] },
};
const flag8333: Fig.Option = {
  name: "--nfs-users-with-ldap",
  description:
    "Boolean flag that allows access to local users and LDAP users. If access is needed only for LDAP users, it has to be disabled",
  args: {
    name: "NFS_USERS_WITH_LDAP",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag10958: Fig.Option = {
  name: "--organizational-unit",
  description:
    "The Organizational Unit (OU) within the Windows Active Directory the user belongs to",
  args: { name: "ORGANIZATIONAL_UNIT", description: "String", suggestions: [] },
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
const flag11170: Fig.Option = {
  name: "--password",
  description: "Password of the Active Directory domain administrator",
  args: { name: "PASSWORD", description: "String", suggestions: [] },
};
const flag11206: Fig.Option = {
  name: "--peer-cluster-name",
  description:
    "Name of the destination cluster to be peered\n        with the source cluster",
  args: { name: "PEER_CLUSTER_NAME", description: "String", suggestions: [] },
};
const flag11213: Fig.Option = {
  name: "--peer-ip-addresses",
  description:
    "List of ip addresses to be used for peering. This is required for cluster peering, not required for svm peering",
  args: { name: "PEER_IP_ADDRESS", description: "List", suggestions: [] },
};
const flag11229: Fig.Option = {
  name: "--peer-svm-name",
  description:
    "Name of the local source vserver svm to be peered\n        with the destination cluster",
  args: { name: "PEER_SVM_NAME", description: "String", suggestions: [] },
};
const flag11230: Fig.Option = {
  name: "--peer-volume-name",
  description:
    "Name of the source volume to be peered\n       with the destination volume",
  args: { name: "PEER_VOLUME_NAME", description: "String", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11916: Fig.Option = {
  name: "--qos-type",
  description:
    "Quality of service (QoS) type for the Storage Pool. _QOS_TYPE_ must be one of: *auto*, *manual*, *qos-type-unspecified*",
  args: {
    name: "QOS_TYPE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["auto", "manual", "qos-type-unspecified"],
  },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12777: Fig.Option = {
  name: "--replica-zone",
  description: "String indicating replica zone for the Storage Pool",
  args: { name: "REPLICA_ZONE", description: "String", suggestions: [] },
};
const flag13067: Fig.Option = {
  name: "--restricted-actions",
  description:
    "Actions to be restricted for a volume. Valid restricted action options are:\n          'DELETE'",
  args: { name: "RESTRICTED_ACTION", description: "List", suggestions: [] },
};
const flag13434: Fig.Option = {
  name: "--security-operators",
  description: "Domain users to be given the Security privilege",
  args: { name: "SECURITY_OPERATOR", description: "List", suggestions: [] },
};
const flag13458: Fig.Option = {
  name: "--security-style",
  description:
    "The security style of the Volume. This can either be\n          UNIX or NTFS.\n+\n_SECURITY_STYLE_ must be one of:\n+\n*ntfs*::: NTFS security style for Volume.\n*unix*::: UNIX security style for Volume\n:::\n+",
  args: {
    name: "SECURITY_STYLE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["ntfs", "unix"],
  },
};
const flag13723: Fig.Option = {
  name: "--share-name",
  description: "Share name of the Mount path clients will use",
  args: { name: "SHARE_NAME", description: "String", suggestions: [] },
};
const flag13831: Fig.Option = {
  name: "--site",
  description:
    "The Active Directory site the service          will limit Domain Controller discovery to",
  args: { name: "SITE", description: "String", suggestions: [] },
};
const flag13902: Fig.Option = {
  name: "--smb-settings",
  description:
    "List of settings specific to SMB protocol for a Cloud NetApp Files Volume. Valid component values are:\n  `ENCRYPT_DATA`, `BROWSABLE`, `CHANGE_NOTIFY`, `NON_BROWSABLE`,\n  `OPLOCKS`, `SHOW_SNAPSHOT`, `SHOW_PREVIOUS_VERSIONS`,\n  `ACCESS_BASED_ENUMERATION`, `CONTINUOUSLY_AVAILABLE`",
  args: { name: "SMB_SETTING", description: "List", suggestions: [] },
};
const flag13906: Fig.Option = {
  name: "--snap-reserve",
  description:
    "(DEPRECATED) The percentage of volume storage reserved for snapshot storage.\n      The default value for this is 0 percent\n+\nThe snap-reserve option is deprecated",
  args: { name: "SNAP_RESERVE", description: "Float", suggestions: [] },
};
const flag13908: Fig.Option = {
  name: "--snapshot-daily",
  description: "Make a snapshot every day e.g. at 06:00, 05:20, 23:50",
  args: { name: "SNAPSHOT_DAILY", description: "Dict", suggestions: [] },
};
const flag13909: Fig.Option = {
  name: "--snapshot-directory",
  description:
    "Snapshot Directory if enabled (true) makes the Volume\n            contain a read-only .snapshot directory which provides access\n            to each of the volume's snapshots",
  args: {
    name: "SNAPSHOT_DIRECTORY",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag13910: Fig.Option = {
  name: "--snapshot-hourly",
  description: "Make a snapshot every hour e.g. at 04:00, 05:20, 06:00",
  args: { name: "SNAPSHOT_HOURLY", description: "Dict", suggestions: [] },
};
const flag13914: Fig.Option = {
  name: "--snapshot-monthly",
  description:
    "Make a snapshot once a month e.g. at 2nd 04:00, 7th 05:20, 24th 23:50",
  args: { name: "SNAPSHOT_MONTHLY", description: "Dict", suggestions: [] },
};
const flag13928: Fig.Option = {
  name: "--snapshot-weekly",
  description:
    "Make a snapshot every week e.g. at Monday 04:00, Wednesday 05:20,\nSunday 23:50",
  args: { name: "SNAPSHOT_WEEKLY", description: "Dict", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag13959: Fig.Option = {
  name: "--source-backup",
  description:
    "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `--source-backup` on the command line",
  args: { name: "SOURCE_BACKUP", description: "String", suggestions: [] },
};
const flag14093: Fig.Option = {
  name: "--source-snapshot",
  description:
    "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `--source-snapshot` on the command line",
  args: { name: "SOURCE_SNAPSHOT", description: "String", suggestions: [] },
};
const flag14455: Fig.Option = {
  name: "--storage-pool",
  description:
    "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `--storage-pool` on the command line",
  args: { name: "STORAGE_POOL", description: "String", suggestions: [] },
};
const flag14869: Fig.Option = {
  name: "--throughput-mibps",
  description: "The desired throughput of the volume in MiB/s",
  args: { name: "THROUGHPUT_MIBPS", description: "Float", suggestions: [] },
};
const flag14880: Fig.Option = {
  name: "--tiering-policy",
  description:
    "Tiering Policy contains auto tiering policy on a volume.\n+\n      Tiering Policy will have the following format\n      --tiering-policy=tier-action=TIER_ACTION,\n      cooling-threshold-days=COOLING_THRESHOLD_DAYS\n+\n      tier-action is an enum, supported values are ENABLED or PAUSED,\ncooling-threshold-days is an integer represents time in days to mark the\nvolume's data block as cold and make it eligible for tiering,\ncan be range from 7-183. Default is 31",
  args: {
    name: "tier-action=ENABLED|PAUSED",
    description: "Dict",
    suggestions: [],
  },
};
const flag14965: Fig.Option = {
  name: "--total-iops",
  description: "Integer indicating total IOPS of the Storage Pool",
  args: { name: "TOTAL_IOPS", description: "Int", suggestions: [] },
};
const flag14969: Fig.Option = {
  name: "--total-throughput",
  description:
    "The total throughput of the Storage Pool in MiB/s or GiB/s units.\n              If no throughput unit is specified, MiB/s is assumed",
  args: {
    name: "TOTAL_THROUGHPUT",
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
const flag15116: Fig.Option = {
  name: "--unix-permissions",
  description:
    "Unix permissions the mount point will be created with. Unix permissions are only applicable with NFS protocol only",
  args: { name: "UNIX_PERMISSIONS", description: "String", suggestions: [] },
};
const flag15167: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag15345: Fig.Option = {
  name: "--username",
  description: "Username of the Active Directory domain administrator",
  args: { name: "USERNAME", description: "String", suggestions: [] },
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
const flag15503: Fig.Option = {
  name: "--volume",
  description:
    "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `--volume` on the command line",
  args: { name: "VOLUME", description: "String", suggestions: [] },
};
const flag15563: Fig.Option = {
  name: "--weekly-backup-limit",
  description:
    "Number of weekly backups to keep.\nNote that the sum of daily, weekly and monthly backups\nshould be greater than 1",
  args: {
    name: "WEEKLY_BACKUP_LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag15796: Fig.Option = {
  name: "--zone",
  description: "String indicating active zone of the Storage Pool",
  args: { name: "ZONE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "netapp",
  description: "Create and manipulate Cloud NetApp Files resources",
  subcommands: [
    {
      name: "active-directories",
      description: "Create and manage Cloud NetApp Active Directories",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Active Directory",
          options: [
            flag42,
            flag46,
            flag348,
            flag720,
            flag1034,
            flag1201,
            flag2292,
            flag3054,
            flag3860,
            flag3897,
            flag4016,
            flag4188,
            flag4363,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6198,
            flag6199,
            flag6413,
            flag7046,
            flag7356,
            flag8155,
            flag8333,
            flag10958,
            flag11170,
            flag11637,
            flag11946,
            flag13434,
            flag13831,
            flag14975,
            flag15315,
            flag15345,
            flag15424,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory.\n+\nTo set the `active_directory` attribute:\n* provide the argument `active_directory` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Active Directory",
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
            flag7046,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory.\n+\nTo set the `active_directory` attribute:\n* provide the argument `active_directory` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Active Directory",
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
            flag7046,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory.\n+\nTo set the `active_directory` attribute:\n* provide the argument `active_directory` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Active Directories",
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
            flag6730,
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
          description: "Update a Cloud NetApp Active Directory",
          options: [
            flag42,
            flag46,
            flag348,
            flag720,
            flag1034,
            flag1201,
            flag1723,
            flag2292,
            flag3054,
            flag3860,
            flag3897,
            flag4016,
            flag4188,
            flag4363,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6198,
            flag6199,
            flag7046,
            flag7356,
            flag8155,
            flag8333,
            flag10958,
            flag11170,
            flag11637,
            flag11946,
            flag12637,
            flag13434,
            flag13831,
            flag14975,
            flag15167,
            flag15315,
            flag15345,
            flag15424,
          ],
          args: {
            name: "ACTIVE_DIRECTORY",
            description:
              "ID of the active_directory or fully qualified identifier for the active_directory.\n+\nTo set the `active_directory` attribute:\n* provide the argument `active_directory` on the command line",
          },
        },
      ],
    },
    {
      name: "backup-policies",
      description: "Create and manage Cloud NetApp Backup Policies",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Backup Policy",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2673,
            flag3055,
            flag4353,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7048,
            flag7356,
            flag8018,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15563,
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy.\n+\nTo set the `backup_policy` attribute:\n* provide the argument `backup_policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volumes Backup Policy",
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
            flag7048,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy.\n+\nTo set the `backup_policy` attribute:\n* provide the argument `backup_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volumes Backup Policy",
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
            flag7048,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy.\n+\nTo set the `backup_policy` attribute:\n* provide the argument `backup_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes Backup Policies",
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
            flag6730,
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
          description: "Update a Cloud NetApp Volumes Backup Policies",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag2673,
            flag3055,
            flag4353,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7048,
            flag7356,
            flag8018,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
            flag15563,
          ],
          args: {
            name: "BACKUP_POLICY",
            description:
              "ID of the backup_policy or fully qualified identifier for the backup_policy.\n+\nTo set the `backup_policy` attribute:\n* provide the argument `backup_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "backup-vaults",
      description: "Create and manage Cloud NetApp Backup Vaults",
      subcommands: [
        {
          name: "backups",
          description: "Create and manage Cloud NetApp Backups",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1055,
                flag1201,
                flag2292,
                flag3056,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7047,
                flag7356,
                {
                  name: "--ontap-source",
                  description:
                    "ONTAP source for the backup.\n+\nIt consists of the following fields:\n* `storage-pool`: The storage pool of the source volume.\n* `volume-uuid`: The UUID of the source volume.\n* `snapshot-uuid`: The UUID of the source snapshot (optional)",
                  args: {
                    name: "ONTAP_SOURCE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14093,
                {
                  name: "--source-volume",
                  description:
                    "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `--source-volume` on the command line;\n* provide the argument `--volume` on the command line",
                  args: {
                    name: "SOURCE_VOLUME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1055,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7047,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Backup",
              options: [
                flag42,
                flag46,
                flag1055,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7047,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Backups",
              options: [
                flag42,
                flag46,
                flag1055,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag6730,
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
              description: "Update a Cloud NetApp Backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1055,
                flag1201,
                flag1723,
                flag2292,
                {
                  name: "--description",
                  description: "A description of the Cloud NetApp Backup",
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
                flag7047,
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a Cloud NetApp Backup Vault",
          options: [
            flag42,
            flag46,
            flag720,
            flag1042,
            flag1201,
            flag2292,
            flag3056,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6294,
            flag6413,
            flag7049,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `backup_vault` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volumes Backup Vault",
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
            flag7049,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `backup_vault` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volumes Backup Vault",
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
            flag7049,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `backup_vault` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes Backup Vaults",
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
            flag6730,
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
          description: "Update a Cloud NetApp Volumes Backup Vault",
          options: [
            flag42,
            flag46,
            flag720,
            flag1042,
            flag1201,
            flag1723,
            flag2292,
            flag3056,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7049,
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
            name: "BACKUP_VAULT",
            description:
              "ID of the backup_vault or fully qualified identifier for the backup_vault.\n+\nTo set the `backup_vault` attribute:\n* provide the argument `backup_vault` on the command line",
          },
        },
      ],
    },
    {
      name: "host-groups",
      description: "Create and manage Cloud NetApp Host Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Host Group",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3058,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--hosts",
              description: "List of hosts in the host group",
              args: { name: "HOST", description: "List", suggestions: [] },
            },
            flag5699,
            flag6413,
            flag7051,
            flag7356,
            {
              name: "--os-type",
              description:
                "String indicating the OS type of the hosts in the host group.\nThe supported values are: 'LINUX', 'WINDOWS', 'ESXI'. _OS_TYPE_ must be one of: *LINUX*, *WINDOWS*, *ESXI*",
              args: {
                name: "OS_TYPE",
                description: "String",
                suggestions: ["LINUX", "WINDOWS", "ESXI"],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--type",
              description:
                "String indicating the type of host group.\nThe supported values are: 'ISCSI_INITIATOR'. _TYPE_ must be (only one value is supported): *ISCSI_INITIATOR*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["ISCSI_INITIATOR"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group.\n+\nTo set the `host_group` attribute:\n* provide the argument `host_group` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Host Group",
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
            flag7051,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group.\n+\nTo set the `host_group` attribute:\n* provide the argument `host_group` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud NetApp Host Group",
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
            flag7051,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group.\n+\nTo set the `host_group` attribute:\n* provide the argument `host_group` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Host Groups",
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
            flag6730,
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
          description: "Update a Cloud NetApp Host Group",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3058,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--hosts",
              description: "List of hosts in the host group",
              args: { name: "HOST", description: "List", suggestions: [] },
            },
            flag5699,
            flag7051,
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
            name: "HOST_GROUP",
            description:
              "ID of the host_group or fully qualified identifier for the host_group.\n+\nTo set the `host_group` attribute:\n* provide the argument `host_group` on the command line",
          },
        },
      ],
    },
    {
      name: "kms-configs",
      description: "Create and manage Cloud NetApp Volumes KMS Configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Volumes KMS Config",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3059,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6312,
            flag6332,
            flag6340,
            flag6348,
            flag6413,
            flag7053,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `kms_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volumes KMS Config",
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
            flag7053,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `kms_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volumes KMS Config",
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
            flag7053,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `kms_config` on the command line",
          },
        },
        {
          name: "encrypt",
          description:
            "Encrypt all existing volumes and storage pools in the same region with the desired Cloud NetApp Volumes KMS Config",
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
            flag7053,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `kms_config` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes KMS Configs",
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
            flag6730,
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
          description: "Update a Cloud NetApp Volumes KMS Config",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3059,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6312,
            flag6332,
            flag6340,
            flag6348,
            flag7053,
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
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `kms_config` on the command line",
          },
        },
        {
          name: "verify",
          description:
            "Verify that the Cloud NetApp Volumes KMS Config is reachable",
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
            flag7053,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KMS_CONFIG",
            description:
              "ID of the kms_config or fully qualified identifier for the kms_config.\n+\nTo set the `kms_config` attribute:\n* provide the argument `kms_config` on the command line",
          },
        },
      ],
    },
    {
      name: "locations",
      description:
        "Get and list locations where Cloud NetApp Files is available",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud NetApp Files location",
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
              "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `location` on the command line",
          },
        },
        {
          name: "list",
          description: "List all Cloud NetApp Files locations",
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
      name: "operations",
      description: "Read and manage Cloud NetApp Files Operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud NetApp Files operation",
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
                "The location of the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `netapp/location`",
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
          description: "List Cloud NetApp Files operations",
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
            flag6730,
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
      name: "storage-pools",
      description: "Create and manage Cloud NetApp Storage Pools",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Storage Pool",
          options: [
            flag42,
            flag46,
            flag109,
            flag424,
            flag720,
            flag1201,
            {
              name: "--capacity",
              description:
                "The desired capacity of the Storage Pool in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              args: {
                name: "CAPACITY",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--custom-performance-enabled",
              description:
                "Boolean flag indicating whether Storage Pool is a custom performance Storage Pool or not",
              args: {
                name: "CUSTOM_PERFORMANCE_ENABLED",
                description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                suggestions: [],
              },
            },
            flag3063,
            {
              name: "--enable-ldap",
              description:
                "Boolean flag indicating whether Storage Pool is a NFS LDAP Storage Pool or not",
              args: {
                name: "ENABLE_LDAP",
                description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6294,
            flag6413,
            flag7071,
            flag7356,
            {
              name: "--mode",
              description:
                "The mode of the Storage Pool. `ONTAP` mode is for performing ONTAP operations with ONTAP Mode APIs. `DEFAULT` mode is for performing operations allowed with NetApp Files APIs. _MODE_ must be one of: *default*, *ontap*",
              args: {
                name: "MODE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["default", "ontap"],
              },
            },
            {
              name: "--network",
              description:
                "Network configuration for a Cloud NetApp Files Storage Pool. Specifying\n`psa-range` is optional.\n*name*::: The name of the Google Compute Engine\n[VPC network](/compute/docs/networks-and-firewalls#networks) to which\nthe volume is connected. Short-form (VPC network ID) or long-form\n(full VPC network name: projects/PROJECT/locations/LOCATION/networks/NETWORK) are both\naccepted, but please use the long-form when attempting to create a Storage Pool using a shared VPC.\n*psa-range*::: This field is not implemented. The values provided in\nthis field are ignored",
              args: { name: "NETWORK", description: "Dict", suggestions: [] },
            },
            flag11637,
            flag11916,
            flag11946,
            flag12777,
            {
              name: "--scale-type",
              description:
                "The scale type of the Storage Pool. `default` scale type is for standard capacity and performance. `scaleout` scale type is for higher capacity and performance. _SCALE_TYPE_ must be one of: *default*, *scaleout*",
              args: {
                name: "SCALE_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["default", "scaleout"],
              },
            },
            {
              name: "--service-level",
              description:
                "The service level for the Cloud NetApp Storage Pool.\n       For more details, see:\n       https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/overview#service_levels\n+\n_SERVICE_LEVEL_ must be one of:\n+\n*extreme*::: \nExtreme Service Level for Cloud NetApp Storage Pool.\nThe Extreme Service Level has a throughput per GiB of\nallocated volume size of 128 KiB/s.\n*flex*::: \nFlex Service Level for Cloud NetApp Storage Pool.\nThe Flex Service Level has a throughput per GiB of\nallocated volume size of 16 KiB/s.\n*premium*::: \nPremium Service Level for Cloud NetApp Storage Pool.\nThe Premium Service Level has a throughput per GiB of\nallocated volume size of 64 KiB/s.\n*standard*::: \nStandard Service Level for Cloud NetApp Storage Pool.\nThe Standard Service Level has a throughput per GiB of\nallocated volume size of 16 KiB/s.\n:::\n+",
              args: {
                name: "SERVICE_LEVEL",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["extreme", "flex", "premium", "standard"],
              },
            },
            flag14965,
            flag14969,
            flag14975,
            {
              name: "--type",
              description:
                "The type of the Storage Pool. `FILE` pools support file-based volumes only. `UNIFIED` pools support both file and block volumes. _TYPE_ must be one of:\n+\n*file*::: File-based volumes only (default).\n*unified*::: Both file and block volumes.\n:::\n+",
              args: {
                name: "TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["file", "unified"],
              },
            },
            flag15315,
            flag15424,
            flag15796,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Storage Pool",
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
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Storage Pool",
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
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "execute",
          description: "Execute an ONTAP CLI command",
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
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "STORAGE_POOL",
              description:
                "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
            },
            {
              name: "ONTAP_COMMAND",
              description: "The ONTAP command to execute",
            },
          ],
        },
        {
          name: "list",
          description: "List Cloud NetApp Storage Pools",
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
            flag6730,
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
          name: "list-backup-configs",
          description:
            "List backup configurations for all volumes in an ONTAP-mode Storage Pool",
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
            flag7071,
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
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "restore-volume",
          description:
            "Restore a backup to a volume in a specified ONTAP-mode Storage Pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1063,
            flag1052,
            flag1201,
            flag2292,
            {
              name: "--file-list",
              description:
                "List of files to be restored in the form of their absolute path as in source volume",
              args: { name: "FILE_LIST", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--restore-destination-path",
              description:
                "Name of the absolute directory path in the destination volume",
              args: {
                name: "RESTORE_DESTINATION_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--volume-uuid",
              description: "The UUID of the ONTAP-mode volume to restore to",
              args: {
                name: "VOLUME_UUID",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "switch",
          description: "Switch a Regional Cloud NetApp Flex Storage Pool zone",
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
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Storage Pool",
          options: [
            flag42,
            flag46,
            flag109,
            flag424,
            flag720,
            flag1201,
            {
              name: "--capacity",
              description:
                "The desired capacity of the Storage Pool in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              args: {
                name: "CAPACITY",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag1723,
            flag2292,
            flag3063,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7071,
            flag7356,
            flag11637,
            flag11916,
            flag11946,
            flag12637,
            flag12777,
            flag14965,
            flag14969,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
            flag15796,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "update-backup-config",
          description:
            "Update backup config of a volume in an ONTAP-mode Storage Pool",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup-config",
              description:
                "Backup Config contains backup related config on a volume in ONTAP-mode Storage Pool.\n+\nBackup Config will have the following format\n`--backup-config=backup-policies=BACKUP_POLICIES,\nbackup-vault=BACKUP_VAULT_NAME,\nenable-scheduled-backups=ENABLE_SCHEDULED_BACKUPS`\n+\nbackup-policies is a pound-separated (#) list of backup policy names, backup-vault can include\na single backup-vault resource name, and enable-scheduled-backups is a Boolean value indicating\nwhether or not scheduled backups are enabled on the volume in the ONTAP-mode Storage Pool",
              args: {
                name: "BACKUP_CONFIG",
                description: "Dict",
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
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--volume-uuid",
              description: "The UUID of the volume to update backup config for",
              args: {
                name: "VOLUME_UUID",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
        {
          name: "validate-directory-service",
          description:
            "Validate directory service for a Cloud Netapp storage pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--directory-service-type",
              description:
                "String indicating directory service type for the Storage Pool",
              args: {
                name: "DIRECTORY_SERVICE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7071,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "STORAGE_POOL",
            description:
              "ID of the storage_pool or fully qualified identifier for the storage_pool.\n+\nTo set the `storage_pool` attribute:\n* provide the argument `storage_pool` on the command line",
          },
        },
      ],
    },
    {
      name: "volumes",
      description: "Create and manage Cloud NetApp Volumes",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud NetApp Volume",
          options: [
            flag42,
            flag46,
            flag720,
            flag1020,
            flag1053,
            flag1201,
            flag1228,
            flag1348,
            flag1349,
            {
              name: "--capacity",
              description:
                "The desired capacity of the Volume in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              args: {
                name: "CAPACITY",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag2292,
            flag3064,
            flag4178,
            flag4687,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--hybrid-replication-parameters",
              description:
                "Hybrid Replication Parameters contains hybrid replication parameters on a volume.\n+\n    Hybrid Replication Parameters will have the following format\n    --hybrid-replication-parameters=replication=REPLICATION,\n    peer-volume-name=PEER_VOLUME_NAME,\n    peer-cluster-name=PEER_CLUSTER_NAME,\n    peer-svm-name=PEER_SVM_NAME,\n    peer-ip-addresses=[PEER-IP-ADDRESS1#PEER-IP-ADDRESS2#...],\n    cluster-location=CLUSTER_LOCATION,\n    description=DESCRIPTION,\n    replication-schedule=REPLICATION_SCHEDULE,\n    hybrid-replication-type=HYBRID_REPLICATION_TYPE,\n    large-volume-constituent-count=LARGE_VOLUME_CONSTITUENT_COUNT,\n    labels=[KEY1:VALUE1#KEY2:VALUE2#...],\n+\nreplication is the desired name for the replication of the volume,\npeer-volume-name is the name of the user's local source volume,\npeer-cluster-name is the name of the user's local source cluster,\npeer-svm-name is the name of the user's local source vserver svm,\npeer-ip-addresses is a ampersand-separated(#) list of ip addresses,\ncluster-location is the name of the source cluster location,\ndescription is the description of the replication,\nreplication-schedule is the schedule of corresponding hybrid replication\ncreated, hybrid-replication-type is the hybrid replication type of the\ncorresponding hybrid replication created, large-volume-constituent-count\nis the number of constituent volumes in the large volume, and labels is an\nhashtag-separated(#) key value pair of labels with key and value separated\nby colon(:) for the replication",
              args: {
                name: "HYBRID_REPLICATION_PARAMETERS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag5699,
            flag6413,
            {
              name: "--large-capacity",
              description:
                "Boolean flag indicating whether Volume is a large capacity Volume or not",
              args: {
                name: "LARGE_CAPACITY",
                description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                suggestions: [],
              },
            },
            {
              name: "--large-capacity-config",
              description:
                "Large Capacity Config contains configuration for large capacity volumes.\n+\nLarge Capacity Config has the following format:\n`--large-capacity-config=constituent-count=CONSTITUENT_COUNT`\n`--large-capacity-config`\n+\n*constituent-count*::: (optional) The number of constituents for a large capacity volume",
              args: {
                name: "LARGE_CAPACITY_CONFIG",
                description: "Dict",
                suggestions: [],
              },
            },
            flag7072,
            flag7356,
            {
              name: "--multiple-endpoints",
              description:
                "Boolean flag indicating whether Volume is a multiple endpoints Volume or not",
              args: {
                name: "MULTIPLE_ENDPOINTS",
                description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--protocols",
              description:
                "Type of File System protocols for the Cloud NetApp Volume. Valid component values are:\n            `NFSV3`, `NFSV4`, `SMB`, `ISCSI`",
              args: { name: "PROTOCOL", description: "List", suggestions: [] },
            },
            flag11946,
            flag13067,
            flag13458,
            flag13723,
            flag13902,
            flag13906,
            flag13908,
            flag13909,
            flag13910,
            flag13914,
            flag13928,
            flag13959,
            flag14093,
            flag14455,
            flag14869,
            flag14880,
            flag14975,
            flag15116,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud NetApp Volume",
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
                "Forces the deletion of a volume and its child resources, such as snapshots",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7072,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a Cloud NetApp Volume",
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
            flag7072,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "establish-peering",
          description: "Establish peering for Cache Volumes",
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
            flag7072,
            flag7356,
            flag11206,
            flag11213,
            flag11229,
            flag11230,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud NetApp Volumes",
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
            flag6730,
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
          name: "quota-rules",
          description: "Create and manage Cloud NetApp Volume QuotaRules",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Volume Quota Rule",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3060,
                {
                  name: "--disk-limit-mib",
                  description: "The disk limit in MiB for the quota rule",
                  args: {
                    name: "DISK_LIMIT_MIB",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7060,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--target",
                  description:
                    "The target of the quota rule.\nIdentified by a Unix UID/GID, Windows SID, or null for default",
                  args: {
                    name: "TARGET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--type",
                  description:
                    "String indicating the type of quota rule.\nThe supported values are: 'DEFAULT_USER_QUOTA','DEFAULT_GROUP_QUOTA','INDIVIDUAL_USER_QUOTA','INDIVIDUAL_GROUP_QUOTA'",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule.\n+\nTo set the `quota_rule` attribute:\n* provide the argument `quota_rule` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Volume QuotaRule",
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
                flag7060,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule.\n+\nTo set the `quota_rule` attribute:\n* provide the argument `quota_rule` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Volume Quota Rule",
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
                flag7060,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule.\n+\nTo set the `quota_rule` attribute:\n* provide the argument `quota_rule` on the command line",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Volume QuotaRules",
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
                flag6730,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15503,
              ],
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Volume QuotaRule",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3060,
                {
                  name: "--disk-limit-mib",
                  description: "The disk limit in MiB for the quota rule",
                  args: {
                    name: "DISK_LIMIT_MIB",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7060,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "QUOTA_RULE",
                description:
                  "ID of the quota_rule or fully qualified identifier for the quota_rule.\n+\nTo set the `quota_rule` attribute:\n* provide the argument `quota_rule` on the command line",
              },
            },
          ],
        },
        {
          name: "replications",
          description: "Create and manage Cloud NetApp Volume Replications",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Volume Replication",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2044,
                flag2292,
                flag3061,
                {
                  name: "--destination-volume-parameters",
                  description:
                    'Required, sets `destination_volume_parameters` value.\n+\n*description*:::\nSets `description` value.\n+\n*share_name*:::\nSets `share_name` value.\n+\n*storage_pool*:::\nRequired, sets `storage_pool` value.\n+\n*tiering_policy*:::\nSets `tiering_policy` value.\n+\n*cooling-threshold-days*::::\nSets `cooling-threshold-days` value.\n+\n*tier-action*::::\nSets `tier-action` value.\n+\n*volume_id*:::\nSets `volume_id` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--destination-volume-parameters=\'description=string,share_name=string,storage_pool=string,tiering_policy={"cooling-threshold-days": int, "tier-action": "string"},volume_id=string\'\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--destination-volume-parameters=\'{"description": "string", "share_name": "string", "storage_pool": "string", "tiering_policy": {"cooling-threshold-days": int, "tier-action": "string"}, "volume_id": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--destination-volume-parameters=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "DESTINATION_VOLUME_PARAMETERS",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--replication-schedule",
                  description: "The schedule for the Replication",
                  args: {
                    name: "REPLICATION_SCHEDULE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Volume Replication",
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
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Volume Replication",
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
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "establish-peering",
              description: "Establish peering for Hybrid replication",
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
                flag7061,
                flag7356,
                flag11206,
                flag11213,
                flag11229,
                flag11230,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Volume Replications",
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
                flag6730,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15503,
              ],
            },
            {
              name: "resume",
              description: "Resume a Cloud NetApp Volume Replication",
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
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "reverse",
              description:
                "Reverse a Cloud NetApp Volume Replication's direction",
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
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "stop",
              description: "Stop a Cloud NetApp Volume Replication",
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
                    "Indicates whether to stop replication forcefully while data transfer is in progress.\n      Warning! if force is true, this will abort any current transfers and can lead to data loss due to partial transfer.\n      If force is false, stop replication will fail while data transfer is in progress and you will need to retry later",
                },
                flag5091,
                flag5453,
                flag5699,
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "sync",
              description: "Sync a Cloud NetApp Volume Replication",
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
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Volume Replication",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2044,
                flag2292,
                flag3061,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7061,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                {
                  name: "--replication-schedule",
                  description: "The schedule for the Replication",
                  args: {
                    name: "REPLICATION_SCHEDULE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15167,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "REPLICATION",
                description:
                  "ID of the replication or fully qualified identifier for the replication.\n+\nTo set the `replication` attribute:\n* provide the argument `replication` on the command line",
              },
            },
          ],
        },
        {
          name: "restore-backup-files",
          description: "Restore specific files from a backup to a Volume",
          options: [
            flag42,
            flag46,
            flag720,
            flag1063,
            flag1052,
            flag1201,
            flag2292,
            {
              name: "--file-list",
              description:
                "List of files to be restored in the form of their absolute path as in source volume",
              args: { name: "FILE_LIST", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7072,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--restore-destination-path",
              description:
                "Name of the absolute directory path in the destination volume.",
              args: {
                name: "RESTORE_DESTINATION_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "revert",
          description:
            "Revert a Cloud NetApp Volume back to a specified Snapshot",
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
            flag7072,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--snapshot",
              description:
                "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `--snapshot` on the command line",
              args: {
                name: "SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "snapshots",
          description: "Create and manage Cloud NetApp Volume Snapshots",
          subcommands: [
            {
              name: "create",
              description: "Create a Cloud NetApp Volume Snapshot",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3062,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6413,
                flag7070,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `snapshot` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud NetApp Volume Snapshot",
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
                flag7070,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `snapshot` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Cloud NetApp Volume Snapshot",
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
                flag7070,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `snapshot` on the command line",
              },
            },
            {
              name: "list",
              description: "List Cloud NetApp Volume Snapshots",
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
                flag6730,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15503,
              ],
            },
            {
              name: "update",
              description: "Update a Cloud NetApp Volume Snapshot",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3062,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7070,
                flag7356,
                flag11637,
                flag11946,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
                flag15503,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `snapshot` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Cloud NetApp Volume",
          options: [
            flag42,
            flag46,
            flag720,
            flag1020,
            flag1053,
            flag1201,
            flag1228,
            flag1348,
            flag1349,
            {
              name: "--capacity",
              description:
                "The desired capacity of the Volume in GiB or TiB units.If no capacity unit is specified, GiB is assumed",
              args: {
                name: "CAPACITY",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag1723,
            flag2292,
            flag3064,
            flag4178,
            flag4687,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7072,
            flag7356,
            flag11637,
            {
              name: "--protocols",
              description:
                "Type of File System protocols for the Cloud NetApp Volume. Valid component values are:\n            `NFSV3`, `NFSV4`, `SMB`, `ISCSI`",
              args: { name: "PROTOCOL", description: "List", suggestions: [] },
            },
            flag11946,
            flag12637,
            flag13067,
            flag13458,
            flag13723,
            flag13902,
            flag13906,
            flag13908,
            flag13909,
            flag13910,
            flag13914,
            flag13928,
            flag13959,
            flag14093,
            flag14455,
            flag14869,
            flag14880,
            flag14975,
            flag15116,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
