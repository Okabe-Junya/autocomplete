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
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag874: Fig.Option = {
  name: "--automated-backup-locations",
  description:
    "List of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format  `projects/{project}/locations/{zone}`. Setting this flag will enable automated backup for the table. If automated backup retention period is not specified, it defaults to 7 days",
  args: { name: "LOCATION", description: "List", suggestions: [] },
};
const flag875: Fig.Option = {
  name: "--automated-backup-locations",
  description:
    "List of Cloud Bigtable zones where automated backups are allowed to be created. If empty, automated backups will be created in all zones of the instance. Locations are in the format  `projects/{project}/locations/{zone}`. Setting this flag will enable automated backup for the table",
  args: { name: "LOCATION", description: "List", suggestions: [] },
};
const flag879: Fig.Option = {
  name: "--automated-backup-retention-period",
  description:
    "The retention period of automated backup in the format of `30d` for 30 days. Min retention period is `3d` and max is `90d`. Setting this flag will enable automated backup for the table. If automated backup retention period is not specified, it defaults to 7 days",
  args: {
    name: "AUTOMATED_BACKUP_RETENTION_PERIOD",
    description: "String",
    suggestions: [],
  },
};
const flag880: Fig.Option = {
  name: "--automated-backup-retention-period",
  description:
    "The retention period of automated backup in the format of `30d` for 30 days. Min retention period is `3d` and max is `90d`. Setting this flag will enable automated backup for the table",
  args: {
    name: "AUTOMATED_BACKUP_RETENTION_PERIOD",
    description: "String",
    suggestions: [],
  },
};
const flag946: Fig.Option = {
  name: "--autoscaling-storage-target",
  description:
    "The target storage utilization gibibytes per node for autoscaling. Accepted values are from 2560 to 5120 for SSD clusters and 8192 to 16384 for HDD clusters",
  args: {
    name: "AUTOSCALING_STORAGE_TARGET",
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
const flag1430: Fig.Option = {
  name: "--change-stream-retention-period",
  description:
    "The length of time to retain change stream data for the table, in the range of\n[1 day, 7 days]. Acceptable units are days (d), hours (h), minutes (m), and seconds (s).\nPassing in a value for this option enables a change stream for the table. Examples: `5d` or\n`48h`",
  args: {
    name: "CHANGE_STREAM_RETENTION_PERIOD",
    description: "String",
    suggestions: [],
  },
};
const flag1431: Fig.Option = {
  name: "--change-stream-retention-period",
  description:
    "The length of time to retain change stream data for the table, in the range of [1 day, 7 days]. Acceptable units are days (d), hours (h), minutes (m), and seconds (s). If not already specified, enables a change stream for the table. Examples: `5d` or `48h`",
  args: {
    name: "CHANGE_STREAM_RETENTION_PERIOD",
    description: "String",
    suggestions: [],
  },
};
const flag1521: Fig.Option = {
  name: "--clear-automated-backup-locations",
  description: "Empty the automated backup locations list if populated",
};
const flag1545: Fig.Option = {
  name: "--clear-change-stream-retention-period",
  description:
    "This disables the change stream and eventually removes the change stream data",
};
const flag1862: Fig.Option = {
  name: "--clear-row-key-schema",
  description: "Whether to clear the row key schema in the updated table",
};
const flag2095: Fig.Option = {
  name: "--cluster",
  description:
    "Name of the Bigtable cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--cluster` on the command line",
  args: { name: "CLUSTER", description: "String", suggestions: [] },
};
const flag2135: Fig.Option = {
  name: "--column-families",
  description:
    'A double-quote (`"`) wrapped list of family name and corresponding garbage collection rules\nconcatenated by `:`, where the rules are optional. For example:\n`"family_1,family_2:maxage=5d&&maxversions=2,family_3:maxage=10d||maxversions=5"`',
  args: { name: "COLUMN_FAMILIES", description: "List", suggestions: [] },
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
const flag2677: Fig.Option = {
  name: "--data-boost-compute-billing-owner",
  description:
    "Specify the Data Boost compute billing owner, required if --data-boost is passed. _DATA_BOOST_COMPUTE_BILLING_OWNER_ must be (only one value is supported):\n+\n*HOST_PAYS*::: Compute billing should be accounted towards the host Cloud project (containing the targeted Bigtable instance / table).\n:::\n+",
  args: {
    name: "DATA_BOOST_COMPUTE_BILLING_OWNER",
    description: "Googlecloudsdk.command_lib.bigtable.arguments:<lambda>",
    suggestions: ["HOST_PAYS"],
  },
};
const flag2678: Fig.Option = {
  name: "--data-boost",
  description:
    "Use Data Boost serverless compute option, rather than standard provisioned node compute. If specified, --data-boost-compute-billing-owner is required. Specifying Data Boost compute on an app profile that uses standard provisioned node compute may cause unexpected behavior for running applications",
};
const flag2972: Fig.Option = {
  name: "--deletion-protection",
  description: "Once specified, the table is deletion protected",
};
const flag2973: Fig.Option = {
  name: "--deletion-protection",
  description: "Whether the view is protected from deletion",
  args: {
    name: "DELETION_PROTECTION",
    description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
    suggestions: [],
  },
};
const flag3249: Fig.Option = {
  name: "--description",
  description: "Friendly name of the app profile",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3408: Fig.Option = {
  name: "--destination-instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--destination` on the command line with a fully specified name;\n* provide the argument `--destination-instance` on the command line;\n* provide the argument `--source-instance` on the command line",
  args: {
    name: "DESTINATION_INSTANCE",
    description: "String",
    suggestions: [],
  },
};
const flag3478: Fig.Option = {
  name: "--destination",
  description:
    "ID of the table or fully qualified identifier for the table.\n+\nTo set the `destination` attribute:\n* provide the argument `--destination` on the command line",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
};
const flag3546: Fig.Option = {
  name: "--disable-automated-backup",
  description: "Once set, disables automated backup policy for the table",
};
const flag3976: Fig.Option = {
  name: "--edition",
  description:
    "The edition of the instance. _EDITION_ must be one of: *ENTERPRISE*, *ENTERPRISE_PLUS*",
  args: {
    name: "EDITION",
    description: "String",
    suggestions: ["ENTERPRISE", "ENTERPRISE_PLUS"],
  },
};
const flag4031: Fig.Option = {
  name: "--enable-automated-backup",
  description:
    "Once set, enables the default automated backup policy (retention_period=7d, frequency=1d) for the table. Note: If a table has automated backup enabled, this flag resets it to the default policy",
};
const flag4032: Fig.Option = {
  name: "--enable-automated-backup",
  description:
    "Once set, enables the default automated backup policy (retention_period=7d, frequency=1d) for the table",
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
const flag5902: Fig.Option = {
  name: "--instance",
  description:
    "Bigtable instance for the app profile.\n+\nTo set the `instance` attribute:\n* provide the argument `app_profile` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5903: Fig.Option = {
  name: "--instance",
  description:
    "Bigtable instance for the cluster.\n+\nTo set the `instance` attribute:\n* provide the argument `cluster` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5904: Fig.Option = {
  name: "--instance",
  description:
    "Bigtable instance for the logical view.\n+\nTo set the `instance` attribute:\n* provide the argument `logical_view` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5905: Fig.Option = {
  name: "--instance",
  description:
    "Bigtable instance for the materialized view.\n+\nTo set the `instance` attribute:\n* provide the argument `materialized_view` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5906: Fig.Option = {
  name: "--instance",
  description:
    "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5908: Fig.Option = {
  name: "--instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--table` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5909: Fig.Option = {
  name: "--instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `authorized_view` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5910: Fig.Option = {
  name: "--instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5911: Fig.Option = {
  name: "--instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `schema_bundle` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5912: Fig.Option = {
  name: "--instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `table` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
};
const flag5931: Fig.Option = {
  name: "--instances",
  description: "ID of the instances",
  args: { name: "INSTANCE", description: "List", suggestions: [] },
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
const flag11481: Fig.Option = {
  name: "--pre-encoded",
  description:
    'By default, Base64 encoding is applied to all binary fields ("rowPrefixes", "qualifiers" and\n"qualifierPrefixes") in the JSON or YAML definition file.\n+\nUse this to indicate that all binary fields are already Base64-encoded and should be used\ndirectly',
};
const flag11555: Fig.Option = {
  name: "--priority",
  description:
    "Specify the request priority under standard provisioned node compute capabilities. Passing this option implies standard provisioned node compute, e.g. the `--standard` option. If not specified, the app profile uses standard provisioned node compute with PRIORITY_HIGH by default. Specifying request priority on an app profile that has Data Boost serverless compute enabled changes the compute option to standard and uses the specified priority, which might cause unexpected behavior for running applications. _PRIORITY_ must be one of:\n+\n*PRIORITY_HIGH*::: Requests are treated with high priority.\n*PRIORITY_LOW*::: Requests are treated with low priority.\n*PRIORITY_MEDIUM*::: Requests are treated with medium priority.\n:::\n+",
  args: {
    name: "PRIORITY",
    description: "Googlecloudsdk.command_lib.bigtable.arguments:<lambda>",
    suggestions: ["PRIORITY_HIGH", "PRIORITY_LOW", "PRIORITY_MEDIUM"],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11755: Fig.Option = {
  name: "--proto-descriptors-file",
  description:
    "Path of a file that contains a protobuf-serialized `google.protobuf.FileDescriptorSet` message. If specified, the schema bundle contains the protobuf schema.\nTo generate the file, install and run `protoc` with the following command:\n+\n  protoc --proto_path=IMPORT_PATH --include_imports --descriptor_set_out=DESCRIPTOR_OUTPUT_LOCATION path/to/file.proto\n+\nwhere the --proto_path option specificies where to look for .proto files when resolving import directives (the current directory is used if you do not provide a value),\nand the --descriptor_set_out option specifies where you want the generated FileDescriptorSet to be written",
  args: {
    name: "PROTO_DESCRIPTORS_FILE",
    description: "Googlecloudsdk.core.util.http_encoding:Encode",
    suggestions: [],
  },
};
const flag11934: Fig.Option = {
  name: "--query",
  description: "The query of the view",
  args: { name: "QUERY", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag13066: Fig.Option = {
  name: "--restrict-to",
  description:
    "Cluster IDs to route to using the Multi Cluster Routing Policy. If unset, all clusters in the instance are eligible",
  args: { name: "RESTRICT_TO", description: "List", suggestions: [] },
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
const flag13177: Fig.Option = {
  name: "--route-any",
  description: "Use Multi Cluster Routing policy",
};
const flag13181: Fig.Option = {
  name: "--route-to",
  description: "Cluster ID to route to using Single Cluster Routing policy",
  args: { name: "ROUTE_TO", description: "String", suggestions: [] },
};
const flag13203: Fig.Option = {
  name: "--row-affinity",
  description: "Use row-affinity routing for this app profile",
};
const flag13205: Fig.Option = {
  name: "--row-key-schema-definition-file",
  description:
    "The row key schema for the table. The schema is defined in a YAML or JSON file, equivalent\nto the StructType protobuf message.\n+\nExample YAML:\n+\n```yaml\nencoding:\n  delimitedBytes:\n    delimiter: '#'\nfields:\n- fieldName: field1\n  type:\n    bytesType:\n      encoding:\n        raw: {}\n- fieldName: field2\n  type:\n    bytesType:\n      encoding:\n        raw: {}\n```",
  args: {
    name: "ROW_KEY_SCHEMA_DEFINITION_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag13206: Fig.Option = {
  name: "--row-key-schema-pre-encoded-bytes",
  description:
    "By default, Base64 encoding is applied to all binary fields in the YAML/JSON file (for\nexample, `encoding.delimitedBytes.delimiter`).\n+\nUse this to indicate that all binary fields are already encoded in the YAML/JSON file and\nshould not be encoded again",
};
const flag13207: Fig.Option = {
  name: "--row-key-schema-pre-encoded-bytes",
  description:
    "By default, Base64 encoding is applied to all binary fields in the YAML/JSON file (for example,\n`encoding.delimitedBytes.delimiter`).\n+\nUse this to indicate that all binary fields are already encoded in the YAML/JSON file and\nshould not be encoded again.\n+\nThis field is only used when `row-key-schema-definition-file` is set. It is ignored if\n`clear-row-key-schema` is set",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag13970: Fig.Option = {
  name: "--source-cluster",
  description:
    "Name of the Bigtable cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `--source` on the command line with a fully specified name;\n* provide the argument `--source-cluster` on the command line",
  args: { name: "SOURCE_CLUSTER", description: "String", suggestions: [] },
};
const flag14040: Fig.Option = {
  name: "--source-instance",
  description:
    "Name of the Bigtable instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--source` on the command line with a fully specified name;\n* provide the argument `--source-instance` on the command line;\n* provide the argument `--destination-instance` on the command line",
  args: { name: "SOURCE_INSTANCE", description: "String", suggestions: [] },
};
const flag14163: Fig.Option = {
  name: "--source",
  description:
    "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `source` attribute:\n* provide the argument `--source` on the command line",
  args: { name: "SOURCE", description: "String", suggestions: [] },
};
const flag14221: Fig.Option = {
  name: "--splits",
  description:
    "Row keys where the table should initially be split. For example: `car,key`",
  args: { name: "SPLITS", description: "List", suggestions: [] },
};
const flag14356: Fig.Option = {
  name: "--standard",
  description:
    "Use standard provisioned node compute option, rather than Data Boost compute option. If specified, `--priority` is required",
};
const flag14601: Fig.Option = {
  name: "--table",
  description:
    "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `--table` on the command line",
  args: { name: "TABLE", description: "String", suggestions: [] },
};
const flag14602: Fig.Option = {
  name: "--table",
  description:
    "Name of the Bigtable table.\n+\nTo set the `table` attribute:\n* provide the argument `authorized_view` on the command line with a fully specified name;\n* provide the argument `--table` on the command line",
  args: { name: "TABLE", description: "String", suggestions: [] },
};
const flag14603: Fig.Option = {
  name: "--table",
  description:
    "Name of the Bigtable table.\n+\nTo set the `table` attribute:\n* provide the argument `schema_bundle` on the command line with a fully specified name;\n* provide the argument `--table` on the command line",
  args: { name: "TABLE", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14984: Fig.Option = {
  name: "--transactional-writes",
  description:
    "Allow transactional writes with a Single Cluster Routing policy",
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
const flag15454: Fig.Option = {
  name: "--view",
  description:
    "The view to be applied to the returned table's fields. _VIEW_ must be one of:\n+\n*encryption*::: Only populates `name` and fields related to the table's encryption status.\n*full*::: Populates all fields.\n*name*::: Only populates `name`.\n*replication*::: Only populates `name` and fields related to the table's replication.\n*schema*::: Only populates `name` and fields related to the table's schema.\n*stats*::: Only populates `name` and fields related to the table's statistics (e.g. TableStats and ColumnFamilyStats).\n:::\n+",
  args: {
    name: "VIEW",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "encryption",
      "full",
      "name",
      "replication",
      "schema",
      "stats",
    ],
  },
};
const flag15456: Fig.Option = {
  name: "--view",
  description:
    "Specifies what type of information to return about the view. _VIEW_ must be one of: *full*, *replication*, *schema*",
  args: {
    name: "VIEW",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["full", "replication", "schema"],
  },
};

const completionSpec: Fig.Spec = {
  name: "bigtable",
  description: "Manage your Cloud Bigtable storage",
  subcommands: [
    {
      name: "app-profiles",
      description: "Manage Cloud Bigtable app profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a new Bigtable app profile",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2678,
            flag2677,
            flag3249,
            flag4900,
            flag4902,
            {
              name: "--force",
              description: "Ignore warnings and force create",
            },
            flag5091,
            flag5453,
            flag5699,
            flag5902,
            flag7356,
            flag11555,
            flag11637,
            flag11946,
            flag13066,
            flag13177,
            flag13181,
            flag13203,
            flag14356,
            flag14975,
            flag14984,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile.\n+\nTo set the `name` attribute:\n* provide the argument `app_profile` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable app profile",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description: "Ignore warnings and force delete",
            },
            flag5091,
            flag5453,
            flag5699,
            flag5902,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile.\n+\nTo set the `name` attribute:\n* provide the argument `app_profile` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable app profile",
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
            flag5902,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile.\n+\nTo set the `name` attribute:\n* provide the argument `app_profile` on the command line",
          },
        },
        {
          name: "list",
          description: "List Bigtable app profiles",
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
            flag5906,
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
          description: "Update a Bigtable app profile",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2678,
            flag2677,
            flag3249,
            flag4900,
            flag4902,
            {
              name: "--force",
              description: "Ignore warnings and force update",
            },
            flag5091,
            flag5453,
            flag5699,
            flag5902,
            flag7356,
            flag11555,
            flag11637,
            flag11946,
            flag13066,
            flag13177,
            flag13181,
            flag13203,
            flag14356,
            flag14975,
            flag14984,
            flag15315,
            flag15424,
          ],
          args: {
            name: "APP_PROFILE",
            description:
              "ID of the app profile or fully qualified identifier for the app profile.\n+\nTo set the `name` attribute:\n* provide the argument `app_profile` on the command line",
          },
        },
      ],
    },
    {
      name: "authorized-views",
      description: "Manage Cloud Bigtable Authorized Views",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Bigtable authorized view",
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
            flag5909,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new Cloud Bigtable authorized view",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--definition-file",
              description:
                'Path to a JSON or YAML file containing a valid authorized view protobuf.\n+\nThe `name` field is ignored. The name is deduced from the other command line arguments.\n+\nExample:\n{\n  "subsetView":\n  {\n    "rowPrefixes": ["store1#"],\n    "familySubsets":\n    {\n      "column_family_name":\n      {\n        "qualifiers":["address"],\n        "qualifierPrefixes":["tel"]\n      }\n    }\n  },\n  "deletionProtection": true\n}',
              args: {
                name: "DEFINITION_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5909,
            flag7356,
            flag11481,
            flag11637,
            flag11946,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Bigtable authorized view",
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
            flag5909,
            flag7356,
            flag11637,
            flag11946,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Bigtable authorized view",
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
            flag5909,
            flag7356,
            flag11637,
            flag11946,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Cloud Bigtable authorized view",
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
            flag5909,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
        {
          name: "list",
          description: "List all authorized views of a Cloud Bigtable table",
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
            flag5908,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14601,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Bigtable authorized view",
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
            flag5909,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Cloud Bigtable authorized view",
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
            flag5909,
            flag7356,
            flag11637,
            flag11946,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "AUTHORIZED_VIEW",
              description:
                "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
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
          description: "Update an existing Cloud Bigtable authorized view",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--definition-file",
              description:
                'Path to a JSON or YAML file containing a valid authorized view protobuf.\n+\nThe `name` field is ignored. The name is deduced from the other command line arguments.\n+\nExample:\n{\n  "subsetView":\n  {\n    "rowPrefixes": ["store1"],\n    "familySubsets":\n    {\n      "column_family_name":\n      {\n        "qualifiers":["address"],\n        "qualifierPrefixes":["tel"]\n      }\n    }\n  },\n  "deletionProtection": true\n}',
              args: {
                name: "DEFINITION_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--ignore-warnings",
              description:
                "If true, changes that make the authorized view more restrictive are allowed",
            },
            flag5699,
            flag5909,
            {
              name: "--interactive",
              description:
                "If provided, a diff is displayed with a prompt to proceed or cancel the update. Enabled by default, use *--no-interactive* to disable",
            },
            flag7356,
            flag11481,
            flag11637,
            flag11946,
            flag14602,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_VIEW",
            description:
              "ID of the authorized-view or fully qualified identifier for the authorized-view.\n+\nTo set the `authorized_view` attribute:\n* provide the argument `authorized_view` on the command line",
          },
        },
      ],
    },
    {
      name: "backups",
      description: "Manage Cloud Bigtable backups",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Bigtable Backup",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2095,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5910,
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
          description: "Copy a Cloud Bigtable backup to a new backup",
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
              name: "--destination-cluster",
              description:
                "Bigtable cluster for the backup.\n+\nTo set the `cluster` attribute:\n* provide the argument `--destination-backup` on the command line with a fully specified name;\n* provide the argument `--destination-cluster` on the command line",
              args: {
                name: "DESTINATION_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-instance",
              description:
                "Bigtable instance for the backup.\n+\nTo set the `instance` attribute:\n* provide the argument `--destination-backup` on the command line with a fully specified name;\n* provide the argument `--destination-instance` on the command line;\n* provide the argument `--source-instance` on the command line",
              args: {
                name: "DESTINATION_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-project",
              description:
                "Project ID of the Google Cloud project for the backup.\n+\nTo set the `project` attribute:\n* provide the argument `--destination-backup` on the command line with a fully specified name;\n* provide the argument `--destination-project` on the command line;\n* provide the argument `--source-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
              args: {
                name: "DESTINATION_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration time of the backup, must be at least 6 hours and at most 30 days from the time the source backup is created. See `$ gcloud topic datetimes` for information on date/time formats",
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
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now, must be at least 6 hours and at most 30 days from the time the source backup is created. See `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-backup",
              description:
                "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `--source-backup` on the command line",
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-cluster",
              description:
                "Bigtable cluster for the backup.\n+\nTo set the `cluster` attribute:\n* provide the argument `--source-backup` on the command line with a fully specified name;\n* provide the argument `--source-cluster` on the command line",
              args: {
                name: "SOURCE_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-instance",
              description:
                "Bigtable instance for the backup.\n+\nTo set the `instance` attribute:\n* provide the argument `--source-backup` on the command line with a fully specified name;\n* provide the argument `--source-instance` on the command line;\n* provide the argument `--destination-instance` on the command line",
              args: {
                name: "SOURCE_INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-project",
              description:
                "Project ID of the Google Cloud project for the backup.\n+\nTo set the `project` attribute:\n* provide the argument `--source-backup` on the command line with a fully specified name;\n* provide the argument `--source-project` on the command line;\n* provide the argument `--destination-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
              args: {
                name: "SOURCE_PROJECT",
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
          name: "create",
          description: "Creates a backup of a Cloud Bigtable table",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup-type",
              description:
                "Type of the backup; whether the backup is a standard backup or a hot backup. _BACKUP_TYPE_ must be one of: *backup-type-unspecified*, *hot*, *standard*",
              args: {
                name: "BACKUP_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["backup-type-unspecified", "hot", "standard"],
              },
            },
            flag1201,
            flag2095,
            flag2292,
            {
              name: "--expiration-date",
              description:
                "Absolute expiration time of the backup. From the time the request is received, must be:\n- At least 6 hours in the future\n- At most 90 days in the future\n+\nSee `$ gcloud topic datetimes` for information on date/time formats",
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
            {
              name: "--hot-to-standard-time",
              description:
                "Time at which a hot backup will be converted to a standard backup relative from now; must\nbe:\n- At least 24 hours\n+\nOnly applies for hot backups. See `$ gcloud topic datetimes` for information on date/time\nformats",
              args: {
                name: "HOT_TO_STANDARD_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag5910,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now; must be:\n- At least 6 hours\n- At most 90 days\n+\nSee `$ gcloud topic datetimes` for information on duration formats",
              args: {
                name: "RETENTION_PERIOD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--table",
              description:
                "ID of the table from which the backup will be created",
              args: { name: "TABLE", description: "String", suggestions: [] },
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
          description: "Delete an existing backup",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2095,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5910,
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
            flag2095,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5910,
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
          description: "Get an IAM policy on a Cloud Bigtable Backup",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2095,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5910,
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
          description: "List existing Bigtable backups",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--cluster",
              description:
                "ID of the cluster or fully qualified identifier for the cluster.\n+\nTo set the `cluster` attribute:\n* provide the argument `--cluster` on the command line",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5906,
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
            "Remove an IAM policy binding from a Cloud Bigtable Backup",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2095,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5910,
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
          description: "Set an IAM policy on a Cloud Bigtable Backup",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2095,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5910,
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
          name: "update",
          description:
            "Update a backup, only supported for the following fields: --expiration-date and --retention-period",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2095,
            flag2292,
            {
              name: "--expiration-date",
              description:
                "Absolute expiration time of the backup; must be at least 6 hours and at most 90 days from\nbackup creation time. See `$ gcloud topic datetimes` for information on date/time formats.\nSee `$ gcloud bigtable backups describe` for creation time",
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
            {
              name: "--hot-to-standard-time",
              description:
                "Time at which a hot backup will be converted to a standard backup; must be at least 24 hours\nfrom backup creation time. Only applies for hot backups. See `$ gcloud topic datetimes` for\ninformation on date/time formats. See `$ gcloud bigtable backups describe` for creation time",
              args: {
                name: "HOT_TO_STANDARD_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag5910,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--retention-period",
              description:
                "Retention period of the backup relative from now; must be at least 6 hours and at most 90\ndays from backup creation time. See `$ gcloud topic datetimes` for information on duration\nformats. See `$ gcloud bigtable backups describe` for creation time",
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
      name: "clusters",
      description: "Manage Cloud Bigtable clusters",
      subcommands: [
        {
          name: "create",
          description: "Create a bigtable cluster",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--autoscaling-cpu-target",
              description:
                "The target CPU utilization percentage for autoscaling. Accepted values are from 10 to 80",
              args: {
                name: "AUTOSCALING_CPU_TARGET",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--autoscaling-max-nodes",
              description: "The maximum number of nodes for autoscaling",
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description: "The minimum number of nodes for autoscaling",
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
                suggestions: [],
              },
            },
            flag946,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5903,
            {
              name: "--kms-key",
              description:
                "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            {
              name: "--kms-keyring",
              description:
                "The KMS keyring id of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
              args: {
                name: "KMS_KEYRING",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-location",
              description:
                "The Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
              args: {
                name: "KMS_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kms-project",
              description:
                "The Cloud project id for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line",
              args: {
                name: "KMS_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--node-scaling-factor",
              description:
                "Node scaling factor for the cluster. _NODE_SCALING_FACTOR_ must be one of: *node-scaling-factor-1x*, *node-scaling-factor-2x*",
              args: {
                name: "NODE_SCALING_FACTOR",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "node-scaling-factor-1x",
                  "node-scaling-factor-2x",
                ],
              },
            },
            {
              name: "--num-nodes",
              description: "Number of nodes to serve",
              args: { name: "NUM_NODES", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--zone",
              description:
                "ID of the zone where the cluster is located. Supported zones are listed at https://cloud.google.com/bigtable/docs/locations",
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
          description: "Delete a bigtable cluster",
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
            flag5903,
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
          description: "Describe an existing Bigtable cluster",
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
            flag5903,
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
          description: "List existing Bigtable clusters",
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
              name: "--instances",
              description:
                "IDs of the instances or fully qualified identifiers for the instances.\n+\nTo set the `instance` attribute:\n* provide the argument `--instances` on the command line",
              args: { name: "INSTANCES", description: "List", suggestions: [] },
            },
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
          description: "Update a Bigtable cluster's number of nodes",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--autoscaling-cpu-target",
              description:
                "The target CPU utilization percentage for autoscaling. Accepted values are from 10 to 80",
              args: {
                name: "AUTOSCALING_CPU_TARGET",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--autoscaling-max-nodes",
              description: "The maximum number of nodes for autoscaling",
              args: {
                name: "AUTOSCALING_MAX_NODES",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--autoscaling-min-nodes",
              description: "The minimum number of nodes for autoscaling",
              args: {
                name: "AUTOSCALING_MIN_NODES",
                description: "Int",
                suggestions: [],
              },
            },
            flag946,
            flag1201,
            flag2292,
            {
              name: "--disable-autoscaling",
              description:
                "Set this flag and --num-nodes to disable autoscaling. If autoscaling is currently not enabled, setting this flag does nothing",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5903,
            flag7356,
            {
              name: "--num-nodes",
              description: "Number of nodes to serve",
              args: { name: "NUM_NODES", description: "Int", suggestions: [] },
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
      ],
    },
    {
      name: "hot-tablets",
      description: "Manage Cloud Bigtable hot tablets",
      subcommands: [
        {
          name: "list",
          description: "List hot tablets in a Cloud Bigtable cluster",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--end-time",
              description:
                "End time of the time range to search for hot tablets. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "END_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5903,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            {
              name: "--start-time",
              description:
                "Start time of the time range to search for hot tablets. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "START_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15249,
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
      name: "instances",
      description: "Manage Cloud Bigtable instances",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Bigtable instance",
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
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new Bigtable instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cluster",
              description:
                "(DEPRECATED) ID of the cluster\n+\nThe --cluster argument is deprecated; use --cluster-config instead",
              args: { name: "CLUSTER", description: "String", suggestions: [] },
            },
            {
              name: "--cluster-config",
              description:
                "*Repeatable*. Specify cluster config as a key-value dictionary.\n+\nThis is the recommended argument for specifying cluster configurations.\n+\nKeys can be:\n+\n  *id*: Required. The ID of the cluster.\n+\n  *zone*: Required. ID of the zone where the cluster is located. Supported zones are listed at https://cloud.google.com/bigtable/docs/locations.\n+\n  *nodes*: The number of nodes in the cluster. Default=1.\n+\n  *node-scaling-factor*: The node scaling factor for the cluster. Default=node-scaling-factor-1x. NODE_SCALING_FACTOR must be one of: node-scaling-factor-1x, node-scaling-factor-2x.\n+\n  *kms-key*: The Cloud KMS (Key Management Service) cryptokey that will be used to protect the cluster.\n+\n  *autoscaling-min-nodes*: The minimum number of nodes for autoscaling.\n+\n  *autoscaling-max-nodes*: The maximum number of nodes for autoscaling.\n+\n  *autoscaling-cpu-target*: The target CPU utilization percentage for autoscaling. Accepted values are from 10 to 80.\n+\n  *autoscaling-storage-target*: The target storage utilization gibibytes per node for autoscaling. Accepted values are from 2560 to 5120 for SSD clusters and 8192 to 16384 for HDD clusters.\n+\nIf this argument is specified, the deprecated arguments for configuring a single cluster will be ignored, including *--cluster*, *--cluster-zone*, *--cluster-num-nodes*.\n+\nSee *EXAMPLES* section",
              args: {
                name: "id=ID,zone=ZONE,[nodes=NODES],[node-scaling-factor=NODE_SCALING_FACTOR],[kms-key=KMS_KEY],[autoscaling-min-nodes=AUTOSCALING_MIN_NODES,autoscaling-max-nodes=AUTOSCALING_MAX_NODES,autoscaling-cpu-target=AUTOSCALING_CPU_TARGET,autoscaling-storage-target=AUTOSCALING_STORAGE_TARGET]",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--cluster-num-nodes",
              description:
                "(DEPRECATED) Number of nodes to serve.\n+\nThe --cluster-num-nodes argument is deprecated; use --cluster-config instead",
              args: {
                name: "CLUSTER_NUM_NODES",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--cluster-storage-type",
              description:
                "Storage class for the cluster. _CLUSTER_STORAGE_TYPE_ must be one of: *hdd*, *ssd*",
              args: {
                name: "CLUSTER_STORAGE_TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["hdd", "ssd"],
              },
            },
            {
              name: "--cluster-zone",
              description:
                "(DEPRECATED) ID of the zone where the cluster is located. Supported zones are listed at https://cloud.google.com/bigtable/docs/locations.\n+\nThe --cluster-zone argument is deprecated; use --cluster-config instead",
              args: {
                name: "CLUSTER_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description: "Friendly name of the instance",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3976,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--instance-type",
              description:
                "(DEPRECATED) The type of instance to create.\n+\nThe --instance-type argument is deprecated. DEVELOPMENT instances are no longer offered. All instances are of type PRODUCTION. _INSTANCE_TYPE_ must be one of:\n+\n*DEVELOPMENT*::: Development instances are low-cost instances meant for development and testing only. They do not provide high availability and no service level agreement applies.\n*PRODUCTION*::: Production instances provide high availability and are suitable for applications in production. Production instances created with the --instance-type argument have 3 nodes if a value is not provided for --cluster-num-nodes.\n:::\n+",
              args: {
                name: "INSTANCE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.bigtable.arguments:<lambda>",
                suggestions: ["DEVELOPMENT", "PRODUCTION"],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind.\nEach item must be specified in either ID\n`<tag_key_id>=<tag_value_id>`\nor namespace format\n`<tag-key-namespaced-name>=<tag-value-short-name>`.\nExample: `123/environment=production,123/costCenter=marketing`",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an existing Bigtable instance",
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
            name: "INSTANCE",
            description:
              "IDs of the instances or fully qualified identifiers for the instances.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable instance",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Bigtable instance",
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
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable instances",
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Bigtable instance",
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
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for an instance",
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
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "tables",
          description: "Query Cloud Bigtable tables",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to a Cloud Bigtable table",
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
                flag5912,
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
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "create",
              description: "Create a new Cloud Bigtable table",
              options: [
                flag42,
                flag46,
                flag874,
                flag879,
                flag1201,
                flag1430,
                flag2135,
                flag2292,
                flag2972,
                flag4032,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5912,
                flag7356,
                flag11637,
                flag11946,
                flag13205,
                flag13206,
                flag14221,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a Cloud Bigtable table",
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
                flag5912,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "describe",
              description: "Retrieve information about a table",
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
                flag5912,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15454,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get an IAM policy on a Cloud Bigtable table",
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
                flag5912,
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
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "list",
              description: "List existing Bigtable instance tables",
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
                flag5931,
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
                "Remove an IAM policy binding from a Cloud Bigtable table",
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
                flag5912,
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
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "restore",
              description: "Restore a Cloud Bigtable backup to a new table",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3478,
                flag3408,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14163,
                flag13970,
                flag14040,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "set-iam-policy",
              description: "Set an IAM policy on a Cloud Bigtable table",
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
                flag5912,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "TABLE",
                  description:
                    "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
                },
                {
                  name: "POLICY_FILE",
                  description:
                    "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
                },
              ],
            },
            {
              name: "undelete",
              description: "Undelete a previously deleted Cloud Bigtable table",
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
                flag5912,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
            {
              name: "update",
              description: "Update an existing Cloud Bigtable table",
              options: [
                flag42,
                flag46,
                flag720,
                flag875,
                flag880,
                flag1201,
                flag1431,
                flag1521,
                flag1545,
                flag1862,
                flag2292,
                flag2972,
                flag3546,
                flag4031,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5912,
                flag7356,
                flag11637,
                flag11946,
                flag13205,
                flag13207,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TABLE",
                description:
                  "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Modify an existing Bigtable instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "Friendly name of the instance",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3976,
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "upgrade",
          description:
            "Upgrade an existing instance's type from development to production",
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
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
      ],
    },
    {
      name: "logical-views",
      description: "Manage Bigtable logical views",
      subcommands: [
        {
          name: "create",
          description: "Create a new Bigtable logical view",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2973,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5904,
            flag7356,
            flag11637,
            flag11934,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view.\n+\nTo set the `name` attribute:\n* provide the argument `logical_view` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable logical view",
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
            flag5904,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view.\n+\nTo set the `name` attribute:\n* provide the argument `logical_view` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable logical view",
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
            flag5904,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view.\n+\nTo set the `name` attribute:\n* provide the argument `logical_view` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable logical views",
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
            flag5906,
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
          description: "Update a Bigtable logical view",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2973,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5904,
            flag7356,
            flag11637,
            {
              name: "--query",
              description: "The query of the view",
              args: { name: "QUERY", description: "String", suggestions: [] },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LOGICAL_VIEW",
            description:
              "ID of the logical view or fully qualified identifier for the logical view.\n+\nTo set the `name` attribute:\n* provide the argument `logical_view` on the command line",
          },
        },
      ],
    },
    {
      name: "materialized-views",
      description: "Manage Bigtable materialized views",
      subcommands: [
        {
          name: "create",
          description: "Create a new Bigtable materialized view",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2973,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5905,
            flag7356,
            flag11637,
            flag11934,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view.\n+\nTo set the `name` attribute:\n* provide the argument `materialized_view` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable materialized view",
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
            flag5905,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view.\n+\nTo set the `name` attribute:\n* provide the argument `materialized_view` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Bigtable materialized view",
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
            flag5905,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15456,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view.\n+\nTo set the `name` attribute:\n* provide the argument `materialized_view` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable materialized views",
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
            flag5906,
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
            flag15456,
          ],
        },
        {
          name: "update",
          description: "Update a Bigtable materialized view",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--deletion-protection",
              description: "Whether the view is protected from deletion",
              args: {
                name: "DELETION_PROTECTION",
                description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5905,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MATERIALIZED_VIEW",
            description:
              "ID of the materialized view or fully qualified identifier for the materialized view.\n+\nTo set the `name` attribute:\n* provide the argument `materialized_view` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Bigtable operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud Bigtable operation",
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
          description: "List Cloud Bigtable operations",
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
            flag5906,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--return-partial-success",
              description:
                "If true, operations that are reachable are returned as normal, and\nthose that are unreachable are returned in the `unreachable` field of\nthe response. If false, the command will fail if any location is unreachable. Enabled by default, use *--no-return-partial-success* to disable",
              args: {
                name: "RETURN_PARTIAL_SUCCESS",
                description: "Int",
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
      name: "schema-bundles",
      description: "Manage Bigtable schema bundles",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Bigtable schema bundle",
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
            flag5911,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new Bigtable schema bundle",
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
            flag5911,
            flag7356,
            flag11637,
            flag11755,
            flag11946,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Bigtable schema bundle",
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
            flag5911,
            flag7356,
            flag11637,
            flag11946,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Bigtable schema bundle",
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
            flag5911,
            flag7356,
            flag11637,
            flag11946,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Bigtable schema bundle",
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
            flag5911,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
        {
          name: "list",
          description: "List all schema bundles of a Bigtable table",
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
            flag5908,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14601,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Bigtable schema bundle",
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
            flag5911,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Bigtable schema bundle",
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
            flag5911,
            flag7356,
            flag11637,
            flag11946,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SCHEMA_BUNDLE",
              description:
                "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
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
          description: "Update an existing Bigtable schema bundle",
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
            {
              name: "--ignore-warnings",
              description:
                "If true, backwards incompatible changes will be allowed",
            },
            flag5699,
            flag5911,
            flag7356,
            flag11637,
            flag11755,
            flag11946,
            flag14603,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA_BUNDLE",
            description:
              "ID of the schema-bundle or fully qualified identifier for the schema-bundle.\n+\nTo set the `schema_bundle` attribute:\n* provide the argument `schema_bundle` on the command line",
          },
        },
      ],
    },
    {
      name: "tables",
      description: "Query Cloud Bigtable tables",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Cloud Bigtable table",
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
            flag5912,
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
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new Cloud Bigtable table",
          options: [
            flag42,
            flag46,
            flag874,
            flag879,
            flag1201,
            flag1430,
            flag2135,
            flag2292,
            flag2972,
            flag4032,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5912,
            flag7356,
            flag11637,
            flag11946,
            flag13205,
            flag13206,
            flag14221,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Bigtable table",
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
            flag5912,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "describe",
          description: "Retrieve information about a table",
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
            flag5912,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15454,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get an IAM policy on a Cloud Bigtable table",
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
            flag5912,
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
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing Bigtable instance tables",
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
            flag5931,
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
            "Remove an IAM policy binding from a Cloud Bigtable table",
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
            flag5912,
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
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "restore",
          description: "Restore a Cloud Bigtable backup to a new table",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3478,
            flag3408,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14163,
            flag13970,
            flag14040,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set an IAM policy on a Cloud Bigtable table",
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
            flag5912,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TABLE",
              description:
                "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a previously deleted Cloud Bigtable table",
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
            flag5912,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an existing Cloud Bigtable table",
          options: [
            flag42,
            flag46,
            flag720,
            flag875,
            flag880,
            flag1201,
            flag1431,
            flag1521,
            flag1545,
            flag1862,
            flag2292,
            flag2972,
            flag3546,
            flag4031,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5912,
            flag7356,
            flag11637,
            flag11946,
            flag13205,
            flag13207,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TABLE",
            description:
              "ID of the table or fully qualified identifier for the table.\n+\nTo set the `table` attribute:\n* provide the argument `table` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
