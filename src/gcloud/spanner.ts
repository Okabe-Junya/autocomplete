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
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag709: Fig.Option = {
  name: "--asymmetric-autoscaling-option",
  description: "Specifies the asymmetric autoscaling option for the instance",
  args: {
    name: "ASYMMETRIC_AUTOSCALING_OPTION",
    description: "Dict",
    suggestions: [],
  },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag918: Fig.Option = {
  name: "--autoscaling-high-priority-cpu-target",
  description:
    "Specifies the target percentage of high-priority CPU the autoscaled instance can utilize",
  args: {
    name: "AUTOSCALING_HIGH_PRIORITY_CPU_TARGET",
    description: "Int",
    suggestions: [],
  },
};
const flag921: Fig.Option = {
  name: "--autoscaling-max-nodes",
  description: "Maximum number of nodes for the autoscaled instance",
  args: { name: "AUTOSCALING_MAX_NODES", description: "Int", suggestions: [] },
};
const flag922: Fig.Option = {
  name: "--autoscaling-max-nodes",
  description: "Maximum number of nodes for the autoscaled instance",
  args: { name: "AUTOSCALING_MAX_NODES", description: "Int", suggestions: [] },
};
const flag925: Fig.Option = {
  name: "--autoscaling-max-processing-units",
  description: "Maximum number of processing units for the autoscaled instance",
  args: {
    name: "AUTOSCALING_MAX_PROCESSING_UNITS",
    description: "Int",
    suggestions: [],
  },
};
const flag926: Fig.Option = {
  name: "--autoscaling-max-processing-units",
  description: "Maximum number of processing units for the autoscaled instance",
  args: {
    name: "AUTOSCALING_MAX_PROCESSING_UNITS",
    description: "Int",
    suggestions: [],
  },
};
const flag933: Fig.Option = {
  name: "--autoscaling-min-nodes",
  description: "Minimum number of nodes for the autoscaled instance",
  args: { name: "AUTOSCALING_MIN_NODES", description: "Int", suggestions: [] },
};
const flag934: Fig.Option = {
  name: "--autoscaling-min-nodes",
  description: "Minimum number of nodes for the autoscaled instance",
  args: { name: "AUTOSCALING_MIN_NODES", description: "Int", suggestions: [] },
};
const flag937: Fig.Option = {
  name: "--autoscaling-min-processing-units",
  description: "Minimum number of processing units for the autoscaled instance",
  args: {
    name: "AUTOSCALING_MIN_PROCESSING_UNITS",
    description: "Int",
    suggestions: [],
  },
};
const flag938: Fig.Option = {
  name: "--autoscaling-min-processing-units",
  description: "Minimum number of processing units for the autoscaled instance",
  args: {
    name: "AUTOSCALING_MIN_PROCESSING_UNITS",
    description: "Int",
    suggestions: [],
  },
};
const flag944: Fig.Option = {
  name: "--autoscaling-storage-target",
  description:
    "Specifies the target percentage of storage the autoscaled instance can utilize",
  args: {
    name: "AUTOSCALING_STORAGE_TARGET",
    description: "Int",
    suggestions: [],
  },
};
const flag945: Fig.Option = {
  name: "--autoscaling-storage-target",
  description:
    "Specifies the target percentage of storage the autoscaled instance can utilize",
  args: {
    name: "AUTOSCALING_STORAGE_TARGET",
    description: "Int",
    suggestions: [],
  },
};
const flag947: Fig.Option = {
  name: "--autoscaling-total-cpu-target",
  description:
    "Specifies the target percentage of total CPU the autoscaled instance can utilize",
  args: {
    name: "AUTOSCALING_TOTAL_CPU_TARGET",
    description: "Int",
    suggestions: [],
  },
};
const flag1068: Fig.Option = {
  name: "--backup",
  description:
    "For a backup operation, the name of the backup the operation is executing on",
  args: { name: "BACKUP", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
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
const flag2746: Fig.Option = {
  name: "--database-id",
  description:
    "ID of the new Cloud Spanner database to create for the sample app",
  args: { name: "DATABASE_ID", description: "String", suggestions: [] },
};
const flag2789: Fig.Option = {
  name: "--database",
  description:
    "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `--database` on the command line",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2792: Fig.Option = {
  name: "--database",
  description:
    "The Cloud Spanner database for the backup-schedule.\n+\nTo set the `database` attribute:\n* provide the argument `backup_schedule` on the command line with a fully specified name;\n* provide the argument `--database` on the command line",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2801: Fig.Option = {
  name: "--database",
  description:
    "For a database operation, the name of the database the operation is executing on",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2803: Fig.Option = {
  name: "--database",
  description:
    "The name of the Cloud Spanner database.\n+\n\nTo set the `database` attribute:\n* provide the argument `backup_schedule` on the command line with a fully specified name;\n* provide the argument `--database` on the command line",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2900: Fig.Option = {
  name: "--default-backup-schedule-type",
  description:
    "The default backup schedule type that is used in the instance. _DEFAULT_BACKUP_SCHEDULE_TYPE_ must be one of:\n+\n*AUTOMATIC*::: A default backup schedule is created automatically when a new database is created in an instance. You can edit or delete the default backup schedule once it's created. The default backup schedule creates a full backup every 24 hours. These full backups are retained for 7 days.\n*DEFAULT_BACKUP_SCHEDULE_TYPE_UNSPECIFIED*::: Not specified.\n*NONE*::: No default backup schedule is created automatically when a new database is created in an instance.\n:::\n+",
  args: {
    name: "DEFAULT_BACKUP_SCHEDULE_TYPE",
    description: "String",
    suggestions: [
      "AUTOMATIC",
      "DEFAULT_BACKUP_SCHEDULE_TYPE_UNSPECIFIED",
      "NONE",
    ],
  },
};
const flag3568: Fig.Option = {
  name: "--disable-downscaling",
  description:
    "Set the flag to disable downscaling for the autoscaled instance. Use *--disable-downscaling* to enable and *--no-disable-downscaling* to disable",
};
const flag4380: Fig.Option = {
  name: "--encryption-type",
  description:
    "The encryption type of the backup. _ENCRYPTION_TYPE_ must be one of:\n+\n*customer-managed-encryption*::: Use the provided Cloud KMS key for encryption. If this option is selected, kms-key must be set.\n*google-default-encryption*::: Use Google default encryption.\n*use-database-encryption*::: Use the same encryption configuration as the database.\n:::\n+",
  args: {
    name: "ENCRYPTION_TYPE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: [
      "customer-managed-encryption",
      "google-default-encryption",
      "use-database-encryption",
    ],
  },
};
const flag4548: Fig.Option = {
  name: "--etag",
  description: "Used for optimistic concurrency control",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4660: Fig.Option = {
  name: "--expire-behavior",
  description:
    "The expire behavior of a free trial instance. _EXPIRE_BEHAVIOR_ must be one of:\n+\n*free-to-provisioned*::: When the free trial instance expires, upgrade the instance to a provisioned instance.\n*remove-after-grace-period*::: When the free trial instance expires, disable the instance, and delete it after the grace period passes if it has not been upgraded to a provisioned instance.\n:::\n+",
  args: {
    name: "EXPIRE_BEHAVIOR",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["free-to-provisioned", "remove-after-grace-period"],
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
const flag5833: Fig.Option = {
  name: "--instance-config",
  description:
    "The ID of the instance configuration the operation is executing on",
  args: { name: "INSTANCE_CONFIG", description: "String", suggestions: [] },
};
const flag5848: Fig.Option = {
  name: "--instance-id",
  description: "The Cloud Spanner instance ID for the sample app",
  args: { name: "INSTANCE_ID", description: "String", suggestions: [] },
};
const flag5859: Fig.Option = {
  name: "--instance-partition",
  description:
    "For an instance partition operation, the name of the instance partition the operation is executing on",
  args: { name: "INSTANCE_PARTITION", description: "String", suggestions: [] },
};
const flag5874: Fig.Option = {
  name: "--instance-type",
  description:
    "Specifies the type for this instance. _INSTANCE_TYPE_ must be one of:\n+\n*free-instance*::: Free trial instances provide no guarantees for dedicated resources, both node_count and processing_units should be 0. They come with stricter usage limits and limited support.\n*provisioned*::: Provisioned instances have dedicated resources, standard usage limits, and support.\n:::\n+",
  args: {
    name: "INSTANCE_TYPE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["free-instance", "provisioned"],
  },
};
const flag5885: Fig.Option = {
  name: "--instance",
  description:
    "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5891: Fig.Option = {
  name: "--instance",
  description:
    "The Cloud Spanner instance for the backup-schedule.\n+\nTo set the `instance` attribute:\n* provide the argument `backup_schedule` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5893: Fig.Option = {
  name: "--instance",
  description:
    "The Cloud Spanner instance for the database.\n+\nTo set the `instance` attribute:\n* provide the argument `--database` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5894: Fig.Option = {
  name: "--instance",
  description:
    "The Cloud Spanner instance for the database.\n+\nTo set the `instance` attribute:\n* provide the argument `database` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5895: Fig.Option = {
  name: "--instance",
  description:
    "The Cloud Spanner instance for the instance partition.\n+\nTo set the `instance` attribute:\n* provide the argument `instance_partition` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5901: Fig.Option = {
  name: "--instance",
  description: "The ID of the instance the operation is executing on",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5913: Fig.Option = {
  name: "--instance",
  description:
    "The name of the Cloud Spanner instance.\n+\n\nTo set the `instance` attribute:\n* provide the argument `backup_schedule` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5914: Fig.Option = {
  name: "--instance",
  description:
    "The name of the Cloud Spanner instance.\n+\n\nTo set the `instance` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5915: Fig.Option = {
  name: "--instance",
  description:
    "The name of the Cloud Spanner instance.\n+\n\nTo set the `instance` attribute:\n* provide the argument `database` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag6310: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6329: Fig.Option = {
  name: "--kms-keyring",
  description:
    "KMS keyring id of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6337: Fig.Option = {
  name: "--kms-keys",
  description:
    "IDs of the keys or fully qualified identifiers for the keys.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-keys` on the command line",
  args: { name: "KMS_KEYS", description: "List", suggestions: [] },
};
const flag6339: Fig.Option = {
  name: "--kms-location",
  description:
    "Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6346: Fig.Option = {
  name: "--kms-project",
  description:
    "Cloud project id for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line",
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
const flag10548: Fig.Option = {
  name: "--nodes",
  description: "Number of nodes for the instance partition",
  args: { name: "NODES", description: "Int", suggestions: [] },
};
const flag10549: Fig.Option = {
  name: "--nodes",
  description: "Number of nodes for the instance",
  args: { name: "NODES", description: "Int", suggestions: [] },
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
const flag11615: Fig.Option = {
  name: "--processing-units",
  description: "Number of processing units for the instance partition",
  args: { name: "PROCESSING_UNITS", description: "Int", suggestions: [] },
};
const flag11616: Fig.Option = {
  name: "--processing-units",
  description: "Number of processing units for the instance",
  args: { name: "PROCESSING_UNITS", description: "Int", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11756: Fig.Option = {
  name: "--proto-descriptors-file",
  description:
    "Path of a file that contains a protobuf-serialized google.protobuf.FileDescriptorSet message. To generate it, install and run `protoc` with --include_imports and --descriptor_set_out",
  args: {
    name: "PROTO_DESCRIPTORS_FILE",
    description: "String",
    suggestions: [],
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
const flag14035: Fig.Option = {
  name: "--source-instance",
  description:
    "The Cloud Spanner instance for the backup.\n+\nTo set the `instance` attribute:\n* provide the argument `--source-backup` on the command line with a fully specified name;\n* provide the argument `--source-instance` on the command line;\n* set the property `spanner/instance`",
  args: { name: "SOURCE_INSTANCE", description: "String", suggestions: [] },
};
const flag14598: Fig.Option = {
  name: "--table",
  description: "The Cloud Spanner table name",
  args: { name: "TABLE", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
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
  name: "spanner",
  description: "Command groups for Cloud Spanner",
  subcommands: [
    {
      name: "backup-schedules",
      description: "Manage Cloud Spanner backup schedules",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add IAM policy binding to a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag2803,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5913,
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
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backupSchedule or fully qualified identifier for the backupSchedule.\n+\nTo set the `backup_schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            {
              name: "--backup-type",
              description:
                "Type of backups created by this schedule.\n+\nSupported backup types:\n+\n`full-backup`\n  A full backup stores the entire contents of the database at a given version time.\n+\n`incremental-backup`\n  An incremental backup contains only the data that has changed since a previous backup.\n+\n_BACKUP_TYPE_ must be one of: *full-backup*, *incremental-backup*",
              args: {
                name: "BACKUP_TYPE",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--cron",
              description:
                "Textual representation of the crontab. User can customize the backup frequency and the backup version time using the cron expression. The version time must be in UTC timzeone. The backup will contain an externally consistent copy of the database at the version time. Allowed frequencies are 12 hour, 1 day, 1 week and 1 month. Examples of valid cron specifications: * `0 2/12 * * * ` : every 12 hours at (2, 14) hours past midnight in UTC. * `0 2,14 * * * ` : every 12 hours at (2,14) hours past midnight in UTC. * `0 2 * * * ` : once a day at 2 past midnight in UTC. * `0 2 * * 0 ` : once a week every Sunday at 2 past midnight in UTC. * `0 2 8 * * ` : once a month on 8th day at 2 past midnight in UTC",
              args: { name: "CRON", description: "String", suggestions: [] },
            },
            flag2792,
            flag4380,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5891,
            flag6310,
            flag6329,
            flag6337,
            flag6339,
            flag6346,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-duration",
              description:
                "The retention duration of a backup that must be at least 6 hours and at most 366 days. The backup is eligible to be automatically deleted once the retention period has elapsed",
              args: {
                name: "RETENTION_DURATION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule.\n+\nTo set the `backup-schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2792,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5891,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule.\n+\nTo set the `backup-schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2792,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5891,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule.\n+\nTo set the `backup-schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2803,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5913,
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
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backupSchedule or fully qualified identifier for the backupSchedule.\n+\nTo set the `backup_schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Spanner backup schedules",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2789,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5893,
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
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding of a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag2803,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5913,
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
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backupSchedule or fully qualified identifier for the backupSchedule.\n+\nTo set the `backup_schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2803,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5913,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "BACKUP_SCHEDULE",
              description:
                "ID of the backupSchedule or fully qualified identifier for the backupSchedule.\n+\nTo set the `backup_schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
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
          description: "Update a Cloud Spanner backup schedule",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--cron",
              description:
                "Textual representation of the crontab. User can customize the backup frequency and the backup version time using the cron expression. The version time must be in UTC timzeone. The backup will contain an externally consistent copy of the database at the version time. Allowed frequencies are 12 hour, 1 day, 1 week and 1 month. Examples of valid cron specifications: * `0 2/12 * * * ` : every 12 hours at (2, 14) hours past midnight in UTC. * `0 2,14 * * * ` : every 12 hours at (2,14) hours past midnight in UTC. * `0 2 * * * ` : once a day at 2 past midnight in UTC. * `0 2 * * 0 ` : once a week every Sunday at 2 past midnight in UTC. * `0 2 8 * * ` : once a month on 8th day at 2 past midnight in UTC",
              args: { name: "CRON", description: "String", suggestions: [] },
            },
            flag2792,
            flag4380,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5891,
            flag6310,
            flag6329,
            flag6337,
            flag6339,
            flag6346,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-duration",
              description:
                "The retention duration of a backup that must be at least 6 hours and at most 366 days. The backup is eligible to be automatically deleted once the retention period has elapsed",
              args: {
                name: "RETENTION_DURATION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "BACKUP_SCHEDULE",
            description:
              "ID of the backup-schedule or fully qualified identifier for the backup-schedule.\n+\nTo set the `backup-schedule` attribute:\n* provide the argument `backup_schedule` on the command line",
          },
        },
      ],
    },
    {
      name: "backups",
      description: "Manage Cloud Spanner backups",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Spanner backup",
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
            flag5914,
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
          },
        },
        {
          name: "copy",
          description: "Copies a backup of a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--destination-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `--destination-backup` on the command line",
              args: {
                name: "DESTINATION_BACKUP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-instance",
              description:
                "The Cloud Spanner instance for the backup.\n+\nTo set the `instance` attribute:\n* provide the argument `--destination-backup` on the command line with a fully specified name;\n* provide the argument `--destination-instance` on the command line;\n* set the property `spanner/instance`",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the copied backup. _ENCRYPTION_TYPE_ must be one of:\n+\n*customer-managed-encryption*::: Use the provided Cloud KMS key for encryption. If this option is selected, kms-key must be set.\n*google-default-encryption*::: Use Google default encryption.\n*use-config-default-or-backup-encryption*::: Use the default encryption configuration if one exists. otherwise use the same encryption configuration as the source backup.\n:::\n+",
              args: {
                name: "ENCRYPTION_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "customer-managed-encryption",
                  "google-default-encryption",
                  "use-config-default-or-backup-encryption",
                ],
              },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 366 days from the time when the source backup is created. See `$ gcloud topic datetimes` for information on date/time formats",
              args: {
                name: "EXPIRATION_DATE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6310,
            flag6329,
            flag6337,
            flag6339,
            flag6346,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most 366 days from the time when the source backup is created. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
                suggestions: [],
              },
            },
            flag13959,
            flag14035,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "create",
          description: "Creates a backup of a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--database",
              description:
                "ID of the database from which the backup will be created",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the backup. _ENCRYPTION_TYPE_ must be one of:\n+\n*customer-managed-encryption*::: Use the provided Cloud KMS key for encryption.If this option is selected, kms-key must be set.\n*google-default-encryption*::: Use Google default encryption.\n*use-database-encryption*::: Use the same encryption configuration as the database.\n:::\n+",
              args: {
                name: "ENCRYPTION_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "customer-managed-encryption",
                  "google-default-encryption",
                  "use-database-encryption",
                ],
              },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 30 days from the time the request is received. See `$ gcloud topic datetimes` for information on date/time formats",
              args: {
                name: "EXPIRATION_DATE",
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
              name: "--instance",
              description:
                "The Cloud Spanner instance for the backup.\n+\nTo set the `instance` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            flag6310,
            flag6329,
            flag6337,
            flag6339,
            flag6346,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most 30 days. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--version-time",
              description:
                "The backup will contain an externally consistent copy of the database at the timestamp specified by `--version-time`. If `--version-time` is not specified, the system will use the creation time of the backup",
              args: {
                name: "TIMESTAMP",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an existing backup",
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
            flag5914,
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
          description: "Retrieves information about a backup",
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
            flag5914,
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
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner backup",
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
            flag5914,
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing Cloud Spanner Cloud Spanner backups",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--database",
              description:
                "ID of the source database. The database flag will take precedence over filters added for\ndatabase",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--instance",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Spanner backup",
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
            flag5914,
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
            name: "BACKUP",
            description:
              "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner backup",
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
            flag5914,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "BACKUP",
              description:
                "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update-metadata",
          description: "Updates the metadata of a Cloud Spanner a backup",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 366 days from\nthe time of creation. See `$ gcloud topic datetimes` for information on\ndate/time formats",
              args: {
                name: "EXPIRATION_DATE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5914,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most\na year from the time of creation. See `$ gcloud topic datetimes` for information on\nduration formats",
              args: {
                name: "RETENTION_PERIOD",
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
      ],
    },
    {
      name: "cli",
      description: "An interactive shell for Spanner",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        {
          name: "--database-role",
          description: "Database role user used to access the database",
          args: {
            name: "DATABASE_ROLE",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--delimiter",
          description: "Set the statement delimiter",
          args: { name: "DELIMITER", description: "String", suggestions: [] },
        },
        {
          name: "--directed-read",
          description:
            "Enables directed reads to provide the flexibility to route read-only transactions and single reads to a specific replica type or region (replica_location:replica_type). The replica_type is optional and can be either READ_ONLY or READ_WRITE",
          args: {
            name: "DIRECTED_READ",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--execute",
          description: "Execute the statement and then exits",
          args: { name: "EXECUTE", description: "String", suggestions: [] },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        {
          name: "--host",
          description: "Host on which Spanner server is located",
          args: { name: "HOST", description: "String", suggestions: [] },
        },
        { name: "--html", description: "Show output in HTML format" },
        {
          name: "--idle-transaction-timeout",
          description:
            "Set the idle transaction timeout. The default timeout is 60 seconds",
          args: {
            name: "IDLE_TRANSACTION_TIMEOUT",
            description: "Int",
            suggestions: [],
          },
        },
        flag5699,
        {
          name: "--init-command",
          description: "SQL statement to execute after startup",
          args: {
            name: "INIT_COMMAND",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--init-command-add",
          description: "Additional SQL statement to execute after startup",
          args: {
            name: "INIT_COMMAND_ADD",
            description: "String",
            suggestions: [],
          },
        },
        flag5894,
        flag7356,
        {
          name: "--port",
          description: "Port number that gcloud uses to connect to Spanner",
          args: {
            name: "PORT",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag11637,
        {
          name: "--prompt",
          description: "Set the prompt to the specified format",
          args: { name: "PROMPT", description: "String", suggestions: [] },
        },
        {
          name: "--proto-descriptor-file",
          description:
            "Path of a file that contains a protobuf-serialized google.protobuf.FileDescriptorSet message to use in this invocation",
          args: {
            name: "PROTO_DESCRIPTOR_FILE",
            description: "String",
            suggestions: [],
          },
        },
        flag11946,
        {
          name: "--skip-column-names",
          description: "Do not show column names in output",
        },
        {
          name: "--skip-system-command",
          description: "Do not allow system command",
        },
        {
          name: "--source",
          description: "Execute the statement from a file and then exits",
          args: { name: "SOURCE", description: "String", suggestions: [] },
        },
        {
          name: "--system-command",
          description:
            "Enable or disable system commands. Default: ON. _SYSTEM_COMMAND_ must be one of: *ON*, *OFF*",
          args: {
            name: "SYSTEM_COMMAND",
            description: "Googlecloudsdk.command_lib.spanner.flags:<lambda>",
            suggestions: ["ON", "OFF"],
          },
        },
        { name: "--table", description: "Show output in table format" },
        {
          name: "--tee",
          description: "Append a copy of the output to a named file",
          args: { name: "TEE", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
        { name: "--xml", description: "Show output in XML format" },
      ],
      args: {
        name: "DATABASE",
        description:
          "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
      },
    },
    {
      name: "databases",
      description: "Manage Cloud Spanner databases",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Spanner database",
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
            flag5915,
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
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "change-quorum",
          description: "Change quorum of a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dual-region",
              description: "Switch to dual-region quorum type",
            },
            flag4548,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5894,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--serving-location",
              description: "The cloud Spanner location",
              args: {
                name: "SERVING_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--single-region",
              description: "Switch to single-region quorum type",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--database-dialect",
              description:
                "The SQL dialect of the Cloud Spanner Database. GOOGLE_STANDARD_SQL is the default. _DATABASE_DIALECT_ must be one of: *POSTGRESQL*, *GOOGLE_STANDARD_SQL*",
              args: {
                name: "DATABASE_DIALECT",
                description: "String",
                suggestions: ["POSTGRESQL", "GOOGLE_STANDARD_SQL"],
              },
            },
            {
              name: "--ddl",
              description:
                "Semi-colon separated DDL (data definition language) statements to run inside the newly created database. If there is an error in any statement, the database is not created. This option is not supported for the PostgreSQL dialect. Full DDL specification is at https://cloud.google.com/spanner/docs/data-definition-language",
              args: { name: "DDL", description: "String", suggestions: [] },
            },
            {
              name: "--ddl-file",
              description:
                "Path of a file that contains semi-colon separated DDL (data definition language) statements to run inside the newly created database. If there is an error in any statement, the database is not created. This option is not supported for the PostgreSQL dialect. Full DDL specification is at https://cloud.google.com/spanner/docs/data-definition-language. If --ddl_file is set, --ddl is ignored. One line comments starting with -- are ignored",
              args: {
                name: "DDL_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5894,
            flag6310,
            flag6329,
            flag6337,
            flag6339,
            flag6346,
            flag7356,
            flag11637,
            flag11756,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "ddl",
          description: "Manage the DDL for Cloud Spanner databases",
          subcommands: [
            {
              name: "describe",
              description: "Describe the DDL for a Cloud Spanner database",
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
                  name: "--include-proto-descriptors",
                  description:
                    "Include debug string of proto bundle descriptors in the output. The output is information only and not meant to be parsed",
                },
                flag5894,
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
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
              },
            },
            {
              name: "update",
              description: "Update the DDL for a Cloud Spanner database",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--ddl",
                  description:
                    "Semi-colon separated DDL (data definition language) statements to run inside the database. If a statement fails, all subsequent statements in the batch are automatically cancelled",
                  args: { name: "DDL", description: "String", suggestions: [] },
                },
                {
                  name: "--ddl-file",
                  description:
                    "Path of a file containing semi-colon separated DDL (data definition language) statements to run inside the database. If a statement fails, all subsequent statements in the batch are automatically cancelled. If --ddl_file is set, --ddl is ignored. One line comments starting with -- are ignored",
                  args: {
                    name: "DDL_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5894,
                flag7356,
                flag11637,
                flag11756,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner database",
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
            flag5894,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner database",
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
            flag5894,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "execute-sql",
          description: "Executes a SQL query against a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--database-role",
              description:
                "Database role user assumes while accessing the database",
              args: {
                name: "DATABASE_ROLE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-partitioned-dml",
              description: "Execute DML statement using Partitioned DML",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5894,
            flag7356,
            {
              name: "--priority",
              description:
                "The priority for the execute SQL request. _PRIORITY_ must be one of: *high*, *low*, *medium*, *unspecified*",
              args: {
                name: "PRIORITY",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["high", "low", "medium", "unspecified"],
              },
            },
            flag11637,
            {
              name: "--query-mode",
              description:
                "Mode in which the query must be processed. _QUERY_MODE_ must be one of:\n+\n*NORMAL*::: Returns only the query result, without any information about the query plan.\n*PLAN*::: Returns only the query plan, without any result rows or execution statistics information.\n*PROFILE*::: Returns the query plan, overall execution statistics, operator-level execution statistics, along with the result rows.\n*WITH_PLAN_AND_STATS*::: Returns the query plan, overall (but not operator-level) execution statistics, along with the results.\n*WITH_STATS*::: Returns the overall (but not operator-level) execution statistics along with the results.\n:::\n+",
              args: {
                name: "QUERY_MODE",
                description: "String",
                suggestions: [
                  "NORMAL",
                  "PLAN",
                  "PROFILE",
                  "WITH_PLAN_AND_STATS",
                  "WITH_STATS",
                ],
              },
            },
            flag11946,
            {
              name: "--read-timestamp",
              description: "Perform a query at the given timestamp",
              args: {
                name: "TIMESTAMP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--sql",
              description:
                "The SQL query to issue to the database. Cloud Spanner SQL is described at https://cloud.google.com/spanner/docs/query-syntax",
              args: { name: "SQL", description: "String", suggestions: [] },
            },
            { name: "--strong", description: "Perform a strong query" },
            {
              name: "--timeout",
              description:
                "Maximum time to wait for the SQL query to complete. See $ gcloud topic datetimes for information on duration formats",
              args: {
                name: "TIMEOUT",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner database",
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
            flag5894,
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
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the Cloud Spanner databases contained within the given instance",
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
            flag5885,
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
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Spanner database",
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
            flag5915,
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
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
        {
          name: "restore",
          description: "Restore a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--destination-database",
              description:
                "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `--destination-database` on the command line",
              args: {
                name: "DESTINATION_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-instance",
              description:
                "The Cloud Spanner instance for the database.\n+\nTo set the `instance` attribute:\n* provide the argument `--destination-database` on the command line with a fully specified name;\n* provide the argument `--destination-instance` on the command line;\n* set the property `spanner/instance`",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--encryption-type",
              description:
                "The encryption type of the restored database. _ENCRYPTION_TYPE_ must be one of:\n+\n*customer-managed-encryption*::: Use the provided Cloud KMS key for encryption. If this option is selected, kms-key must be set.\n*google-default-encryption*::: Use Google default encryption.\n*use-config-default-or-backup-encryption*::: Use the default encryption configuration if one exists, otherwise use the same encryption configuration as the backup.\n:::\n+",
              args: {
                name: "ENCRYPTION_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "customer-managed-encryption",
                  "google-default-encryption",
                  "use-config-default-or-backup-encryption",
                ],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6310,
            flag6329,
            flag6337,
            flag6339,
            flag6346,
            flag7356,
            flag11637,
            flag11946,
            flag13959,
            flag14035,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "roles",
          description: "Manage Cloud Spanner database roles",
          subcommands: [
            {
              name: "list",
              description:
                "List the Cloud Spanner database roles defined in the given database",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2789,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5893,
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
          name: "sessions",
          description: "Manage the sessions for Cloud Spanner databases",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Cloud Spanner session",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--database",
                  description:
                    "The Cloud Spanner database for the session.\n+\nTo set the `database` attribute:\n* provide the argument `session` on the command line with a fully specified name;\n* provide the argument `--database` on the command line",
                  args: {
                    name: "DATABASE",
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
                  name: "--instance",
                  description:
                    "The Cloud Spanner instance for the session.\n+\nTo set the `instance` attribute:\n* provide the argument `session` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line;\n* set the property `spanner/instance`",
                  args: {
                    name: "INSTANCE",
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
                name: "SESSION",
                description:
                  "ID of the session or fully qualified identifier for the session.\n+\nTo set the `session` attribute:\n* provide the argument `session` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List the Cloud Spanner sessions contained within the given database",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2789,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5893,
                flag6515,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                {
                  name: "--server-filter",
                  description:
                    "An expression for filtering the results of the request on the server. Filter rules are case insensitive. The fields eligible for filtering are: * labels.key where key is the name of a label",
                  args: {
                    name: "SERVER_FILTER",
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner database",
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
            flag5894,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DATABASE",
              description:
                "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
            },
            {
              name: "POLICY_FILE",
              description: "Name of JSON or YAML file with the IAM policy",
            },
          ],
        },
        {
          name: "splits",
          description: "Manage the split points for Spanner databases",
          subcommands: [
            {
              name: "add",
              description: "Add split points to a  Spanner database",
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
                  name: "--initiator",
                  description:
                    "The tag to identify the initiator of the split points",
                  args: {
                    name: "INITIATOR",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5894,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--split-expiration-date",
                  description:
                    "The date when the split points become system managed and becomes eligible for merging. The default is 10 days from the date of creation. The maximum is 30 days from the date of creation",
                  args: {
                    name: "SPLIT_EXPIRATION_DATE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--splits-file",
                  description:
                    "The path of a file containing split points to add to the database. Separate split points in the file with a new line. The file format is <ObjectType>[space]<ObjectName>[space]<Split Value>, where the ObjectType is one of TABLE or INDEX and the Split Value is the split point key. For index, the split point key is the index key with or without a full table key prefix",
                  args: {
                    name: "SPLITS_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List split points that are added by a user to a Spanner database",
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
                flag5894,
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
                name: "DATABASE",
                description:
                  "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-kms-keys",
              description:
                "Removes all KMS key references and reverts the database to Google-managed encryption",
            },
            flag2292,
            {
              name: "--enable-drop-protection",
              description:
                "Enable database deletion protection on this database. Use *--enable-drop-protection* to enable and *--no-enable-drop-protection* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5894,
            {
              name: "--kms-keys",
              description:
                "Update KMS key references for this database. Users should always provide the full set of required KMS key references",
              args: { name: "KMS_KEY", description: "List", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATABASE",
            description:
              "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `database` on the command line",
          },
        },
      ],
    },
    {
      name: "instance-configs",
      description: "Manage Cloud Spanner instance configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Spanner instance configuration",
          options: [
            flag42,
            flag46,
            {
              name: "--add-replicas",
              description:
                "Add new replicas while cloning from the source config",
              args: {
                name: "location=LOCATION,type=TYPE",
                description: "List",
                suggestions: [],
              },
            },
            flag720,
            {
              name: "--base-config",
              description:
                "The name of the Google-managed instance configuration, based on which your custom configuration is created",
              args: {
                name: "BASE_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--clone-config",
              description:
                'The ID of the instance config, based on which this configuration is created. The clone is an independent copy of this config. Available configurations can be found by running "gcloud spanner instance-configs list"',
              args: {
                name: "INSTANCE_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description:
                "The name of this instance configuration as it appears in UIs. Must specify this option if creating an instance-config with --replicas",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4548,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--replicas",
              description:
                'The geographic placement of nodes in this instance configuration and\ntheir replication types.\n+\n*location*::: The location of the serving resources, e.g. "us-central1".\n+\n*type*::: The type of replica.\n+\nItems in the list are separated by ":". The allowed values and formats\nare as follows.\n+\n*READ_ONLY*::::\n+\nRead-only replicas only support reads (not writes). Read-only\nreplicas:\n+\n  * Maintain a full copy of your data.\n+\n  * Serve reads.\n+\n  * Do not participate in voting to commit writes.\n+\n  * Are not eligible to become a leader.\n+\n*READ_WRITE*::::\n+\nRead-write replicas support both reads and writes. These\nreplicas:\n+\n  * Maintain a full copy of your data.\n+\n  * Serve reads.\n+\n  * Can vote whether to commit a write.\n+\n  * Participate in leadership election.\n+\n  * Are eligible to become a leader.\n+\n*WITNESS*::::\n+\nWitness replicas don\'t support reads but do participate in\nvoting to commit writes. Witness replicas:\n+\n  * Do not maintain a full copy of data.\n+\n  * Do not serve reads.\n+\n  * Vote whether to commit writes.\n+\n  * Participate in leader election but are not eligible to become\n    leader',
              args: {
                name: "location=LOCATION,type=TYPE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--skip-replicas",
              description:
                "Skip replicas from the source config while cloning. Each replica in the list must exist in the source config replicas list",
              args: {
                name: "location=LOCATION,type=TYPE",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            {
              name: "--validate-only",
              description:
                "If specified, validate that the creation will succeed without creating the instance configuration",
            },
            flag15424,
          ],
          args: {
            name: "INSTANCE_CONFIG",
            description:
              "Cloud Spanner instance configuration. The 'custom-' prefix is required to avoid name conflicts with Google-managed configurations",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner instance configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "Used for optimistic concurrency control as a way to help prevent simultaneous deletes of an instance config from overwriting each other",
              args: { name: "ETAG", description: "String", suggestions: [] },
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
            {
              name: "--validate-only",
              description:
                "If specified, validate that the deletion will succeed without deleting the instance config",
            },
            flag15424,
          ],
          args: {
            name: "INSTANCE_CONFIG",
            description: "Cloud Spanner instance config",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner instance configuration",
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
            name: "INSTANCE_CONFIG",
            description: "Cloud Spanner instance config",
          },
        },
        {
          name: "list",
          description:
            "List the available Cloud Spanner instance configurations",
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
          description: "Update a Cloud Spanner instance configuration",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--display-name",
              description:
                "The name of this instance configuration as it appears in UIs",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4548,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            {
              name: "--validate-only",
              description:
                "Use this flag to validate that the request will succeed before executing it",
            },
            flag15424,
          ],
          args: {
            name: "INSTANCE_CONFIG",
            description:
              "Cloud Spanner instance config. The 'custom-' prefix is required to avoid name conflicts with Google-managed configurations",
          },
        },
      ],
    },
    {
      name: "instance-partitions",
      description: "Manage Spanner instance partitions",
      subcommands: [
        {
          name: "create",
          description: "Create a Spanner instance partition",
          options: [
            flag42,
            flag46,
            flag720,
            flag918,
            flag922,
            flag926,
            flag934,
            flag938,
            flag945,
            flag947,
            flag1201,
            {
              name: "--config",
              description:
                'Instance configuration defines the geographic placement and replication used by the instance partition. Available configurations can be found by running "gcloud spanner instance-configs list"',
              args: { name: "CONFIG", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--description",
              description: "Description of the instance partition",
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
            flag5895,
            flag7356,
            flag10548,
            flag11615,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition.\n+\nTo set the `instance partition` attribute:\n* provide the argument `instance_partition` on the command line",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Spanner instance partition. You can't delete the default instance partition using this command",
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
            flag5895,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition.\n+\nTo set the `instance partition` attribute:\n* provide the argument `instance_partition` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Spanner instance partition",
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
            flag5895,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition.\n+\nTo set the `instance partition` attribute:\n* provide the argument `instance_partition` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the Spanner instance partitions contained within the given instance",
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
            flag5885,
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
          description:
            "Update a Spanner instance partition. You can't update the default instance partition using this command",
          options: [
            flag42,
            flag46,
            flag720,
            flag918,
            flag921,
            flag925,
            flag933,
            flag937,
            flag944,
            flag947,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the instance partition",
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
            flag5895,
            flag7356,
            flag10548,
            flag11615,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE_PARTITION",
            description:
              "ID of the instance partition or fully qualified identifier for the instance partition.\n+\nTo set the `instance partition` attribute:\n* provide the argument `instance_partition` on the command line",
          },
        },
      ],
    },
    {
      name: "instances",
      description: "Manage Cloud Spanner instances",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Spanner instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line;\n* set the property `spanner/instance`",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a Cloud Spanner instance",
          options: [
            flag42,
            flag46,
            flag709,
            flag720,
            flag918,
            flag922,
            flag926,
            flag934,
            flag938,
            flag945,
            flag947,
            flag1201,
            {
              name: "--config",
              description:
                'Instance configuration defines the geographic placement and replication of the databases in that instance. Available configurations can be found by running "gcloud spanner instance-configs list"',
              args: { name: "CONFIG", description: "String", suggestions: [] },
            },
            flag2292,
            flag2900,
            {
              name: "--description",
              description: "Description of the instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag3568,
            {
              name: "--edition",
              description:
                "Spanner edition. _EDITION_ must be one of:\n+\n*EDITION_UNSPECIFIED*::: Spanner's legacy pricing model. For more information, see the [Spanner editions overview](https://cloud.google.com/spanner/docs/editions-overview)\n*ENTERPRISE*::: Enterprise edition\n*ENTERPRISE_PLUS*::: Enterprise Plus edition\n*STANDARD*::: Standard edition\n:::\n+",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: [
                  "EDITION_UNSPECIFIED",
                  "ENTERPRISE",
                  "ENTERPRISE_PLUS",
                  "STANDARD",
                ],
              },
            },
            flag4660,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5874,
            flag6413,
            flag7356,
            flag10549,
            flag11616,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud Spanner instance ID" },
        },
        {
          name: "delete",
          description: "Delete a Cloud Spanner instance",
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
          args: { name: "INSTANCE", description: "Cloud Spanner instance ID" },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner instance",
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
          args: { name: "INSTANCE", description: "Cloud Spanner instance ID" },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Spanner instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line;\n* set the property `spanner/instance`",
            isOptional: true,
          },
        },
        {
          name: "get-locations",
          description:
            "Get the location of every replica in a Cloud Spanner instance",
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
            {
              name: "--verbose",
              description:
                "Indicates that both regions and types of replicas be returned",
            },
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud Spanner instance ID" },
        },
        {
          name: "list",
          description: "List the Cloud Spanner instances in this project",
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
          name: "move",
          description:
            "Move the Cloud Spanner instance to the specified instance configuration",
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
              name: "--target-config",
              description:
                "Target Instance configuration to move the instances",
              args: {
                name: "TARGET_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-database-move-configs",
              description:
                'Database level configurations for each database to be moved. Currently only used for CMEK-enabled databases to specificy the target database KMS keys. Sets `target_database_move_configs` value.\n+\n*database-id*:::\nRequired, sets `database-id` value.\n+\n*kms-key-names*:::\nSets `kms-key-names` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--target-database-move-configs=database-id=string,kms-key-names=string --target-database-move-configs=database-id=string,kms-key-names=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--target-database-move-configs=\'[{"database-id": "string", "kms-key-names": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--target-database-move-configs=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "^:^database-id=DATABASE_ID:kms-key-names=KEY1,KEY2",
                description: "Dict",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud Spanner instance ID" },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a Cloud Spanner instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line;\n* set the property `spanner/instance`",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Spanner instance",
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
              name: "INSTANCE",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line;\n* set the property `spanner/instance`",
              isOptional: true,
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
          description: "Update a Cloud Spanner instance",
          options: [
            flag42,
            flag46,
            flag709,
            flag720,
            flag918,
            flag921,
            flag925,
            flag933,
            flag937,
            flag944,
            flag947,
            flag1201,
            {
              name: "--clear-asymmetric-autoscaling-option",
              description:
                "Specify a comma separated list of locations from which to remove asymmetric autoscaling options",
              args: { name: "LOCATION", description: "List", suggestions: [] },
            },
            flag1723,
            flag2292,
            flag2900,
            {
              name: "--description",
              description: "Description of the instance",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag3568,
            {
              name: "--edition",
              description:
                "Spanner edition. You can upgrade your Standard edition instance to the `ENTERPRISE` edition or `ENTERPRISE_PLUS` edition. You can also upgrade your Enterprise edition instance to the `ENTERPRISE_PLUS` edition. You can downgrade your `ENTERPRISE_PLUS` edition instance to the `ENTERPRISE` or `STANDARD` edition. You can also downgrade your `ENTERPRISE` edition instance to the `STANDARD` edition. You must stop using the higher-tier edition features in order to downgrade. Otherwise, downgrade fails. For more information, see [Spanner editions overview](https://cloud.google.com/spanner/docs/editions-overview)",
              args: { name: "EDITION", description: "String", suggestions: [] },
            },
            flag4660,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5874,
            flag7356,
            flag10549,
            flag11616,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "Cloud Spanner instance ID" },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Spanner operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Cloud Spanner operation",
          options: [
            flag42,
            flag46,
            flag1068,
            flag1201,
            flag2292,
            flag2801,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5901,
            flag5833,
            flag5859,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION-ID", description: "ID of the operation" },
        },
        {
          name: "describe",
          description: "Describe a Cloud Spanner operation",
          options: [
            flag42,
            flag46,
            flag1068,
            flag1201,
            flag2292,
            flag2801,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5901,
            flag5833,
            flag5859,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION-ID", description: "ID of the operation" },
        },
        {
          name: "list",
          description: "List the Cloud Spanner operations",
          options: [
            flag42,
            flag46,
            {
              name: "--backup",
              description:
                "For backup operations, the name of the backup the operations are executing on",
              args: { name: "BACKUP", description: "String", suggestions: [] },
            },
            flag1201,
            flag2292,
            {
              name: "--database",
              description:
                "For database operations, the name of the database the operations are executing on",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5901,
            flag5833,
            {
              name: "--instance-partition",
              description:
                "For instance partition operations, the name of the instance partition the operation is executing on",
              args: {
                name: "INSTANCE_PARTITION",
                description: "String",
                suggestions: [],
              },
            },
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            {
              name: "--type",
              description:
                "(optional) List only the operations of the given type. _TYPE_ must be one of:\n+\n*BACKUP*::: If only the instance is specified (--instance), returns all backup operations associated with backups in the instance. When a backup is specified (--backup), only the backup operations for the given backup are returned.\n*DATABASE*::: If only the instance is specified (--instance), returns all database operations associated with the databases in the instance. When a database is specified (--database), the command would return database operations for the given database.\n*DATABASE_CHANGE_QUORUM*::: Database change quorum operations are returned for all databases in the given instance (--instance only) or only those associated with the given database (--database).\n*DATABASE_CREATE*::: Database create operations are returned for all databases in the given instance (--instance only) or only those associated with the given database (--database)\n*DATABASE_RESTORE*::: Database restore operations are returned for all databases in the given instance (--instance only) or only those associated with the given database (--database)\n*DATABASE_UPDATE_DDL*::: Database update DDL operations are returned for all databases in the given instance (--instance only) or only those associated with the given database (--database)\n*INSTANCE*::: Returns instance operations for the given instance. Note, type=INSTANCE does not work with --database or --backup.\n*INSTANCE_CONFIG_CREATE*::: Instance configuration create operations are returned for the given instance configuration (--instance-config).\n*INSTANCE_CONFIG_UPDATE*::: Instance configuration update operations are returned for the given instance configuration (--instance-config).\n*INSTANCE_PARTITION*::: If only the instance is specified (--instance), returns all instance partition operations associated with instance partitions in the instance. When an instance partition is specified (--instance-partition), only the instance partition operations for the given instance partition are returned. \n:::\n+",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.spanner.flags:<lambda>",
                suggestions: [
                  "BACKUP",
                  "DATABASE",
                  "DATABASE_CHANGE_QUORUM",
                  "DATABASE_CREATE",
                  "DATABASE_RESTORE",
                  "DATABASE_UPDATE_DDL",
                  "INSTANCE",
                  "INSTANCE_CONFIG_CREATE",
                  "INSTANCE_CONFIG_UPDATE",
                  "INSTANCE_PARTITION",
                ],
              },
            },
            flag15249,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "rows",
      description: "Manage the rows in Cloud Spanner databases",
      subcommands: [
        {
          name: "delete",
          description: "Delete a row in a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2789,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5893,
            {
              name: "--keys",
              description: "The primary key values of the row to delete",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14598,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "insert",
          description: "Insert a row in a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--data",
              description:
                "The column names and values for the row being added. For complicated input values, such as arrays, use the `--flags-file` flag. See $ gcloud topic flags-file for more information",
              args: {
                name: "COLUMN_NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag2789,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5893,
            flag7356,
            flag11637,
            flag11946,
            flag14598,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a row in a Cloud Spanner database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--data",
              description:
                "The column names and values for the row being updated. For complicated input values, such as arrays, use the `--flags-file` flag. See $ gcloud topic flags-file for more information",
              args: {
                name: "COLUMN_NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag2789,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5893,
            flag7356,
            flag11637,
            flag11946,
            flag14598,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "samples",
      description: "Cloud Spanner sample apps",
      subcommands: [
        {
          name: "backend",
          description:
            "Run the backend gRPC service for the given Cloud Spanner sample app",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--database-id",
              description: "The Cloud Spanner database ID for the sample app",
              args: {
                name: "DATABASE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--duration",
              description:
                "Duration of time allowed to run before stopping the service",
              args: {
                name: "DURATION",
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
            flag5848,
            flag7356,
            {
              name: "--port",
              description: "Port on which to receive gRPC requests",
              args: { name: "PORT", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance"',
          },
        },
        {
          name: "init",
          description: "Initialize a Cloud Spanner sample app",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2746,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance", "finance-graph"',
          },
        },
        {
          name: "list",
          description: "List available sample applications",
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
          name: "run",
          description: "Run the given Cloud Spanner sample app",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cleanup",
              description:
                "Delete the instance after running the sample app. Enabled by default, use *--no-cleanup* to disable",
            },
            flag2292,
            flag2746,
            {
              name: "--duration",
              description:
                "Duration of time allowed to run the sample app before stopping the service",
              args: {
                name: "DURATION",
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
            flag5848,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--skip-init",
              description:
                "Use an existing database instead of creating a new one",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance"',
          },
        },
        {
          name: "workload",
          description:
            "Generate gRPC traffic for a given sample app's backend service",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--duration",
              description:
                "Duration of time allowed to run before stopping the workload",
              args: {
                name: "DURATION",
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
            {
              name: "--port",
              description: "Port of the running backend service",
              args: { name: "PORT", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--target-qps",
              description: "Target requests per second",
              args: { name: "TARGET_QPS", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APPNAME",
            description: 'The sample app name, e.g. "finance"',
          },
        },
      ],
    },
  ],
};

export default completionSpec;
