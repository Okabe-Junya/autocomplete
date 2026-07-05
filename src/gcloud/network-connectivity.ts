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
const flag358: Fig.Option = {
  name: "--advertised-routes",
  description:
    "List of routes to advertise from the VPC `network` toward the provider",
  args: { name: "CIDR_RANGE", description: "List", suggestions: [] },
};
const flag466: Fig.Option = {
  name: "--allowed-google-producers-resource-hierarchy-level",
  description:
    'List of projects, folders, or orgs where the producer instance can be located in the form "projects/123456789", folders/123456789", or "organizations/123456789"',
  args: {
    name: "ALLOWED_GOOGLE_PRODUCERS_RESOURCE_HIERARCHY_LEVEL",
    description: "List",
    suggestions: [],
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
const flag1721: Fig.Option = {
  name: "--clear-labels",
  description: "Clear labels value and set to empty map",
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3076: Fig.Option = {
  name: "--description",
  description: "A description of this resource",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3237: Fig.Option = {
  name: "--description",
  description: "Description of the spoke to create",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3241: Fig.Option = {
  name: "--description",
  description: "Description of the transport",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3261: Fig.Option = {
  name: "--description",
  description: "New description of the spoke",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3494: Fig.Option = {
  name: "--details",
  description: "Additional details behind the rejection",
  args: { name: "DETAILS", description: "String", suggestions: [] },
};
const flag4539: Fig.Option = {
  name: "--etag",
  description:
    "The etag is computed by the server, and might be sent with update and\ndelete requests so that the client has an up-to-date value before\nproceeding",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4592: Fig.Option = {
  name: "--exclude-export-ranges",
  description:
    "Dynamic routes overlapped/encompassed by exclude export ranges are excluded during export to hub",
  args: { name: "EXCLUDE_EXPORT_RANGES", description: "List", suggestions: [] },
};
const flag4593: Fig.Option = {
  name: "--exclude-export-ranges",
  description: "New exclude export ranges of the spoke",
  args: { name: "CIDR_RANGE", description: "List", suggestions: [] },
};
const flag4594: Fig.Option = {
  name: "--exclude-export-ranges",
  description:
    "Subnet IP address range(s) to hide from other VPC networks that are\n        connected through Network Connectivity Center",
  args: { name: "CIDR_RANGE", description: "List", suggestions: [] },
};
const flag4596: Fig.Option = {
  name: "--exclude-import-ranges",
  description:
    "Hub routes overlapped/encompassed by exclude import ranges are excluded during import from hub",
  args: { name: "EXCLUDE_IMPORT_RANGES", description: "List", suggestions: [] },
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
const flag5338: Fig.Option = {
  name: "--global",
  description: "Indicates that the spoke is global",
};
const flag5396: Fig.Option = {
  name: "--group",
  description:
    "Group that the spoke will be part of. The group must already exist",
  args: { name: "GROUP", description: "String", suggestions: [] },
};
const flag5398: Fig.Option = {
  name: "--group",
  description:
    "The group that the spoke will be added to. The group must already exist. If unset, the spoke\nwill be added to the ``default`` group",
  args: { name: "GROUP", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5546: Fig.Option = {
  name: "--hub",
  description: "Hub that the spoke will attach to. The hub must already exist",
  args: { name: "HUB", description: "String", suggestions: [] },
};
const flag5547: Fig.Option = {
  name: "--hub",
  description:
    "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `--hub` on the command line;\n* if hub is empty, will use the wildcard '-' to indicate all hubs",
  args: { name: "HUB", description: "String", suggestions: [] },
};
const flag5549: Fig.Option = {
  name: "--hub",
  description:
    "Id of the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `group` on the command line with a fully specified name;\n* provide the argument `--hub` on the command line",
  args: { name: "HUB", description: "String", suggestions: [] },
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
const flag5736: Fig.Option = {
  name: "--include-export-ranges",
  description:
    "Dynamic routes fully encompassed by include export ranges are included during export to hub.\nIf it's empty, the spoke exports all dynamic routes to the hub",
  args: { name: "INCLUDE_EXPORT_RANGES", description: "List", suggestions: [] },
};
const flag5737: Fig.Option = {
  name: "--include-export-ranges",
  description: "New include export ranges of the spoke",
  args: { name: "CIDR_RANGE", description: "List", suggestions: [] },
};
const flag5738: Fig.Option = {
  name: "--include-export-ranges",
  description:
    "Subnet IP address range(s) to export to other VPC networks that are\n        connected through Network Connectivity Center",
  args: { name: "CIDR_RANGE", description: "List", suggestions: [] },
};
const flag5743: Fig.Option = {
  name: "--include-import-ranges",
  description:
    "Hub routes fully encompassed by include import ranges are included during import from hub.\nIf it's empty, the spoke does not import any subnets from the hub. If it's empty and\nsite-to-site-data-transfer is true, the spoke imports all IPv4 site-to-site dynamic routes\nfrom the hub",
  args: { name: "INCLUDE_IMPORT_RANGES", description: "List", suggestions: [] },
};
const flag6009: Fig.Option = {
  name: "--ip-cidr-range",
  description: "IP range that this internal range defines",
  args: { name: "IP_CIDR_RANGE", description: "String", suggestions: [] },
};
const flag6413: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag6417: Fig.Option = {
  name: "--labels",
  description: "List of label KEY=VALUE pairs to add",
  args: {
    name: "KEY=VALUE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
    suggestions: [],
  },
};
const flag6435: Fig.Option = {
  name: "--labels",
  description:
    'Set labels to new value. User-defined labels.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "LABELS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
};
const flag6447: Fig.Option = {
  name: "--labels",
  description:
    'User-defined labels.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "LABELS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
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
const flag7243: Fig.Option = {
  name: "--location",
  description:
    "The location id of the destination resource.\n+\nTo set the `location` attribute:\n* provide the argument `destination` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7262: Fig.Option = {
  name: "--location",
  description:
    "The location id of the multicloudDataTransferConfig resource.\n+\nTo set the `location` attribute:\n* provide the argument `multicloud_data_transfer_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
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
const flag8038: Fig.Option = {
  name: "--multicloud-data-transfer-config",
  description:
    "The multicloudDataTransferConfig id of the destination resource.\n+\nTo set the `multicloud-data-transfer-config` attribute:\n* provide the argument `destination` on the command line with a fully specified name;\n* provide the argument `--multicloud-data-transfer-config` on the command line",
  args: {
    name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag8238: Fig.Option = {
  name: "--network",
  description:
    "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `--network` on the command line",
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
const flag11620: Fig.Option = {
  name: "--producer-instance-location",
  description:
    "Option that determines where the producer instances can be located for which connections can be created in the network controlled by this policy. _PRODUCER_INSTANCE_LOCATION_ must be one of:\n+\n*custom-resource-hierarchy-levels*::: The producer instance must be located in one of the values provided in the allowed-google-producers-resource-hierarchy-level flag.\n*none*::: The producer instance must be within the same project as this connection policy.\n:::\n+",
  args: {
    name: "PRODUCER_INSTANCE_LOCATION",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["custom-resource-hierarchy-levels", "none"],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11830: Fig.Option = {
  name: "--psc-connection-limit",
  description: "Max number of PSC connections for this policy",
  args: { name: "PSC_CONNECTION_LIMIT", description: "Int", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12287: Fig.Option = {
  name: "--region",
  description:
    "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12308: Fig.Option = {
  name: "--region",
  description:
    "For resources [service_connection_policy, subnets], provides fallback value for resource region attribute. When the resource's full URI path is not provided, region will fallback to this flag value",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12312: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12346: Fig.Option = {
  name: "--region",
  description:
    "The location ID.\n+\n\nTo set the `region` attribute:\n* provide the argument `internal_range` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* use default global location\n",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12347: Fig.Option = {
  name: "--region",
  description:
    "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `gateway_advertised_route` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12349: Fig.Option = {
  name: "--region",
  description:
    "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `regional_endpoint` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12351: Fig.Option = {
  name: "--region",
  description:
    "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `service_connection_policy` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12352: Fig.Option = {
  name: "--region",
  description:
    "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `spoke` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12353: Fig.Option = {
  name: "--region",
  description:
    "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `transport` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12641: Fig.Option = {
  name: "--remove-labels",
  description:
    'Remove existing value from map labels. Sets `remove_labels` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-labels=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-labels=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-labels=path_to_file.(yaml|json)\n+\n```',
  args: { name: "REMOVE_LABELS", description: "Dict", suggestions: [] },
};
const flag12830: Fig.Option = {
  name: "--request-id",
  description:
    "A request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server can ignore\nthe request if it has already been completed. The server waits\nfor at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and\nthe request times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, can ignore the second request.\n+\nThe request ID must be a valid UUID with the exception that zero UUID\n(00000000-0000-0000-0000-000000000000) isn't supported",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12832: Fig.Option = {
  name: "--request-id",
  description:
    "A request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server can ignore\nthe request if it has already been completed. The server waits\nfor at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and\nthe request times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, can ignore the second request. This prevents\nclients from accidentally creating duplicate `MulticloudDataTransferConfig`\nresources.\n+\nThe request ID must be a valid UUID with the exception that zero UUID\n(00000000-0000-0000-0000-000000000000) isn't supported",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
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
const flag13830: Fig.Option = {
  name: "--site-to-site-data-transfer",
  description:
    "Whether to enable site-to-site data transfer for this spoke. Data transfer is available only\nin [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations)",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14226: Fig.Option = {
  name: "--spoke",
  description:
    "Id of the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `gateway_advertised_route` on the command line with a fully specified name;\n* provide the argument `--spoke` on the command line",
  args: { name: "SPOKE", description: "String", suggestions: [] },
};
const flag14529: Fig.Option = {
  name: "--subnets",
  description:
    "IDs of the subnetworks or fully qualified identifiers for the subnetworks.\n+\nTo set the `subnetwork` attribute:\n* provide the argument `--subnets` on the command line",
  args: { name: "SUBNETS", description: "List", suggestions: [] },
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
const flag15178: Fig.Option = {
  name: "--update-labels",
  description:
    'Update labels value or add key value pair. User-defined labels.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "UPDATE_LABELS",
    description:
      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
    suggestions: [],
  },
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
  name: "network-connectivity",
  description: "Manage Network Connectivity resources",
  subcommands: [
    {
      name: "hubs",
      description: "Manage Network Connectivity Center hubs",
      subcommands: [
        {
          name: "accept-spoke",
          description: "Accept a spoke into a hub",
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
              name: "--spoke",
              description: "URI of the spoke to accept",
              args: { name: "SPOKE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "accept-spoke-update",
          description: "Accept a proposal to update a spoke in a hub",
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
              name: "--spoke",
              description: "URI of the spoke to accept update",
              args: { name: "SPOKE", description: "String", suggestions: [] },
            },
            {
              name: "--spoke-etag",
              description: "Etag of the spoke to accept update",
              args: {
                name: "SPOKE_ETAG",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to the IAM policy of a hub resource",
          options: [
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new hub",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the hub",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--export-psc",
              description:
                "This boolean controls whether Private Service Connect transitivity is enabled for the hub",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--policy-mode",
              description:
                "Policy mode of the hub. _POLICY_MODE_ must be one of: *policy-mode-unspecified*, *preset*",
              args: {
                name: "POLICY_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["policy-mode-unspecified", "preset"],
              },
            },
            {
              name: "--preset-topology",
              description:
                "Topology of the hub. Only applicable when ``--policy-mode=PRESET''. _PRESET_TOPOLOGY_ must be one of: *hybrid-inspection*, *mesh*, *preset-topology-unspecified*, *star*",
              args: {
                name: "PRESET_TOPOLOGY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "hybrid-inspection",
                  "mesh",
                  "preset-topology-unspecified",
                  "star",
                ],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a hub",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a hub",
          options: [
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a hub resource",
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "groups",
          description: "Manage Network Connectivity Center groups",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to the IAM policy of a group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5549,
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
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group.\n+\nTo set the `group` attribute:\n* provide the argument `group` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5549,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group.\n+\nTo set the `group` attribute:\n* provide the argument `group` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for a group resource",
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
                flag5549,
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
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group.\n+\nTo set the `group` attribute:\n* provide the argument `group` on the command line",
              },
            },
            {
              name: "list",
              description: "List groups",
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
                flag5547,
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
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from the IAM policy of a group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5549,
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
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group.\n+\nTo set the `group` attribute:\n* provide the argument `group` on the command line",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy of a group resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5549,
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
                  name: "GROUP",
                  description:
                    "ID of the group or fully qualified identifier for the group.\n+\nTo set the `group` attribute:\n* provide the argument `group` on the command line",
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
              description: "Update a group",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-auto-accept-projects",
                  description:
                    "Append the given values to the current auto-accept projects",
                  args: {
                    name: "AUTO-ACCEPT-PROJECTS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                {
                  name: "--clear-auto-accept-projects",
                  description: "Empty the current auto-accept projects",
                },
                flag1723,
                flag2292,
                {
                  name: "--description",
                  description: "New description of the group",
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
                {
                  name: "--hub",
                  description:
                    "The hub Id.\n+\nTo set the `hub` attribute:\n* provide the argument `group` on the command line with a fully specified name;\n* provide the argument `--hub` on the command line",
                  args: { name: "HUB", description: "String", suggestions: [] },
                },
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--remove-auto-accept-projects",
                  description:
                    "Remove the given values from the current auto-accept projects",
                  args: {
                    name: "AUTO-ACCEPT-PROJECTS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GROUP",
                description:
                  "ID of the group or fully qualified identifier for the group.\n+\nTo set the `group` attribute:\n* provide the argument `group` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List hubs",
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
          name: "list-spokes",
          description: "List hub spokes",
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
            {
              name: "--spoke-locations",
              description:
                "A comma separated list of locations. The locations can be set to 'global'\nand/or Google Cloud supported regions. To see the names of regions, see\n[Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
              args: { name: "LOCATION", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--view",
              description:
                "Enumeration to control which spoke fields are included in the response. _VIEW_ must be one of: *basic*, *detailed*",
              args: {
                name: "VIEW",
                description: "String",
                suggestions: ["basic", "detailed"],
              },
            },
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "query-status",
          description:
            "Query the status of Private Service Connect propagation for a hub",
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
              name: "--group-by",
              description:
                "Comma-separated list of resource field key names to group by. Aggregated\nvalues will be displayed for each group. If `--group-by` is set, the value\nof the `--sort-by` flag must be the same as or a subset of the `--group-by`\nflag.\n+\nAccepted values are:\n- 'psc_propagation_status.source_spoke'\n- 'psc_propagation_status.source_group'\n- 'psc_propagation_status.source_forwarding_rule'\n- 'psc_propagation_status.target_spoke'\n- 'psc_propagation_status.target_group'\n- 'psc_propagation_status.code'",
              args: {
                name: "GROUP_BY",
                description: "String",
                suggestions: [],
              },
            },
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "reject-spoke",
          description: "Reject a spoke from a hub",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3494,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--spoke",
              description: "URI of the spoke to reject",
              args: { name: "SPOKE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "reject-spoke-update",
          description: "Reject a proposal to update a spoke in a hub",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3494,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--spoke",
              description: "URI of the spoke to reject update",
              args: { name: "SPOKE", description: "String", suggestions: [] },
            },
            {
              name: "--spoke-etag",
              description: "Etag of the spoke to reject update",
              args: {
                name: "SPOKE_ETAG",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from the IAM policy of a hub resource",
          options: [
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
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
        {
          name: "route-tables",
          description: "Manage Network Connectivity Center route tables",
          subcommands: [
            {
              name: "describe",
              description: "Describe a route table",
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
                  name: "--hub",
                  description:
                    "Id of the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `route_table` on the command line with a fully specified name;\n* provide the argument `--hub` on the command line",
                  args: { name: "HUB", description: "String", suggestions: [] },
                },
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ROUTE_TABLE",
                description:
                  "ID of the route table or fully qualified identifier for the route table.\n+\nTo set the `route_table` attribute:\n* provide the argument `route_table` on the command line",
              },
            },
            {
              name: "list",
              description: "List route tables",
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
                flag5547,
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
              name: "routes",
              description: "Manage Network Connectivity Center routes",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a route",
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
                      name: "--hub",
                      description:
                        "Id of the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `route` on the command line with a fully specified name;\n* provide the argument `--hub` on the command line",
                      args: {
                        name: "HUB",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag5699,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: ["--route-table", "--route_table"],
                      description:
                        "Id of the route table.\n+\nTo set the `route_table` attribute:\n* provide the argument `route` on the command line with a fully specified name;\n* provide the argument `--route_table` on the command line",
                      args: {
                        name: "ROUTE_TABLE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ROUTE",
                    description:
                      "ID of the route or fully qualified identifier for the route.\n+\nTo set the `route` attribute:\n* provide the argument `route` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List routes",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--effective-location",
                      description:
                        "The effective location/region to limit the list of routes. The effective location must be a valid region name. To list valid region names, use 'gcloud compute regions list'",
                      args: {
                        name: "EFFECTIVE_LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    {
                      name: "--hub",
                      description:
                        "Id of the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `--route_table` on the command line with a fully specified name;\n* if route table is empty, will use wildcard '-' to list all route tables\n with a fully specified name;\n* provide the argument `--hub` on the command line;\n* if hub is empty, will use the wildcard '-' to indicate all hubs",
                      args: {
                        name: "HUB",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag5699,
                    flag6515,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11946,
                    {
                      name: ["--route-table", "--route_table"],
                      description:
                        "ID of the route table or fully qualified identifier for the route table.\n+\nTo set the `route_table` attribute:\n* provide the argument `--route_table` on the command line;\n* if route table is empty, will use wildcard '-' to list all route tables\n",
                      args: {
                        name: "ROUTE_TABLE",
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
              ],
            },
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy of a hub resource",
          options: [
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
              name: "HUB",
              description:
                "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
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
          description: "Update a hub",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--description",
              description: "New description of the hub",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--export-psc",
              description:
                "Whether Private Service Connect transitivity is enabled for the hub",
            },
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
            flag15424,
          ],
          args: {
            name: "HUB",
            description:
              "ID of the hub or fully qualified identifier for the hub.\n+\nTo set the `hub` attribute:\n* provide the argument `hub` on the command line",
          },
        },
      ],
    },
    {
      name: "internal-ranges",
      description: "Manage internal ranges",
      subcommands: [
        {
          name: "create",
          description: "Create a new internal range",
          options: [
            flag42,
            flag46,
            {
              name: "--allocation-strategy",
              description:
                "Allocation strategy to be used when searching for a free range. _ALLOCATION_STRATEGY_ must be one of:\n+\n*first-available*::: Pick the first available address range. This strategy is deterministic and the\nresult is easy to predict.\n+\n*first-smallest-fitting*::: Pick the smallest but fitting available range. This deterministic strategy\nminimizes fragmentation of the address space.\n+\n*random*::: Random strategy, the legacy algorithm, used for backwards compatibility. This\nallocation strategy remains efficient in the case of concurrent allocation\nrequests in the same peered network space and doesn't require providing the\nlevel of concurrency in an explicit parameter, but it is prone to fragmenting\navailable address space.\n+\n*random-first-n-available*::: Pick an arbitrary range out of the first N available ones. The N will be set\nin the first_available_ranges_lookup_size flag. This strategy should be used\nwhen concurrent allocation requests are made in the same space of peered\nnetworks  while the fragmentation of the addrress space is reduced.\n+\n:::\n+",
              args: {
                name: "ALLOCATION_STRATEGY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "first-available",
                  "first-smallest-fitting",
                  "random",
                  "random-first-n-available",
                ],
              },
            },
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the internal range to be created",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--exclude-cidr-ranges",
              description:
                "A list of CIDR ranges to exclude from the search for a free range.\nThis can be used to exclude specific ranges that are already intended to\nhave some other use",
              args: {
                name: "EXCLUDE_CIDR_RANGES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--first-available-ranges-lookup-size",
              description:
                "The number of ranges to be considered when using the\nRANDOM_FIRST_N_AVAILABLE allocation strategy. This is only allowed when\nallocation-strategy is set to RANDOM_FIRST_N_AVAILABLE",
              args: {
                name: "FIRST_AVAILABLE_RANGES_LOOKUP_SIZE",
                description: "Int",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--immutable",
              description:
                "Mark the internal range as immutable. Then only non-semantic fields like description and\nlabels could be modified after creation",
            },
            flag5699,
            flag6009,
            flag6417,
            flag7356,
            {
              name: "--migration-source",
              description:
                "The migration source subnetwork (of a for-migration internal range) resource URI or\nresource ID",
              args: {
                name: "MIGRATION_SOURCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--migration-target",
              description:
                "The migration target subnetwork (of a for-migration internal range) resource URI or\nresource ID",
              args: {
                name: "MIGRATION_TARGET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "The URL or resource ID of the network in which to reserve the internal range.\nLegacy network is not supported. This can only be specified for a global internal address.\n+\nFor example:\n  - https://www.googleapis.com/compute/v1/projects/my-project/locations/global/networks/my-network\n  - /projects/my-project/locations/global/networks/my-network\n  - my-network",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--overlaps",
              description:
                "Overlap specifications for the range being created. _OVERLAPS_ must be one of:\n+\n*overlap-existing-subnet-range*::: Allows for creation of internal ranges that overlap with existing subnets.\n+\n*overlap-route-range*::: Allows for creation or existence of routes that have a more specific destination\nthan the created range.\n+\n:::\n+",
              args: { name: "OVERLAPS", description: "List", suggestions: [] },
            },
            {
              name: "--peering",
              description:
                'The type of peering set for the internal range. _PEERING_ must be one of:\n+\n*for-peer*::: This behavior can be set when the internal range is being reserved for usage by the peers.\nThis means that no resource within the VPC in which it is being created can use this to\nassociate with a cloud resource, but one of the peers can. This represents "donating" a\nrange for peers to use.\n+\n*for-self*::: This beharior represents the case that the internal range is intended to be used in the\nVPC on which it is created and is accessible from its peers. This implies that peers or\npeer-of-peers cannot use this range.\n+\n*not-shared*::: This behavior can be set when the internal range is being reserved for usage by the VPC on\nwhich it is created but not shared with the peers. In a sense it is local to the VPC. This\ncan be used to create internal ranges for various purposes like\nHTTP_INTERNAL_LOAD_BALANCER or for interconnect routes that are not shared with peers.\nThis also implies that peers cannot use this range in a way that is visible to this VPC,\nbut can re-use this range as long as it is NOT_SHARED from the peer VPC too.\n+\n:::\n+',
              args: {
                name: "PEERING",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["for-peer", "for-self", "not-shared"],
              },
            },
            {
              name: "--prefix-length",
              description:
                "An alternative to ip-cidr-range.\nCan be set when trying to create a reservation that automatically finds a free range\nof the given size",
              args: {
                name: "PREFIX_LENGTH",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12346,
            {
              name: "--target-cidr-range",
              description:
                'Can be set to narrow down or pick a different address space while searching for\na free range.\nIf not set, defaults to the "10.0.0.0/8" address space. This can be used to\nsearch in other rfc-1918 address spaces like "172.16.0.0/12" and\n"192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC',
              args: {
                name: "TARGET_CIDR_RANGE",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--usage",
              description:
                "The type of usage set for the internal range. _USAGE_ must be one of:\n+\n*external-to-vpc*::: Ranges created with EXTERNAL_TO_VPC cannot be associated with cloud resources and are\nmeant to block out address ranges for various use cases, like for example, usage on-prem,\nwith dynamic route announcements via interconnect.\n+\n*for-migration*::: Ranges created with FOR_MIGRATION are used as locks for migrating subnetworks between\npeered VPC networks.\n+\n*for-vpc*::: A cloud resource can use the reserved CIDR block by associating it with the internal range\nresource if usage is set to FOR_VPC.\n+\n:::\n+",
              args: {
                name: "USAGE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["external-to-vpc", "for-migration", "for-vpc"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range.\n+\nTo set the `internal_range` attribute:\n* provide the argument `internal_range` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an internal range",
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
            flag12346,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range.\n+\nTo set the `internal_range` attribute:\n* provide the argument `internal_range` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an internal range",
          options: [
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
            flag12346,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range.\n+\nTo set the `internal_range` attribute:\n* provide the argument `internal_range` on the command line",
          },
        },
        {
          name: "list",
          description: "List internal ranges",
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
                "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* use default global location\n",
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
          description: "Update an internal range",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-labels",
              description: "Clear existing labels for the range",
            },
            {
              name: "--clear-overlaps",
              description: "Clear existing overlap fields for the range",
            },
            flag2292,
            {
              name: "--description",
              description: "Description of the Internal Range",
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
            flag6009,
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs for the range being updated",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--overlaps",
              description:
                "Overlap specifications for the range being updated. _OVERLAPS_ must be one of:\n+\n*overlap-existing-subnet-range*::: Allows for creation of internal ranges that overlap with existing subnets.\n+\n*overlap-route-range*::: Allows for creation or existence of routes that have a more specific destination\nthan the created range.\n+\n:::\n+",
              args: { name: "OVERLAPS", description: "List", suggestions: [] },
            },
            {
              name: "--prefix-length",
              description:
                "An alternative to ip-cidr-range.\nCan be set when trying to create a reservation that automatically finds a free range of\nthe given size",
              args: {
                name: "PREFIX_LENGTH",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12346,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INTERNAL_RANGE",
            description:
              "ID of the internal range or fully qualified identifier for the internal range.\n+\nTo set the `internal_range` attribute:\n* provide the argument `internal_range` on the command line",
          },
        },
      ],
    },
    {
      name: "locations",
      description:
        "Get information about supported Network Connectivity Center locations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Network Connectivity Center location",
          options: [
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
          description: "List Network Connectivity Center locations",
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
      name: "multicloud-data-transfer-configs",
      description: "Manage Multicloud Data Transfer Config resources",
      subcommands: [
        {
          name: "create",
          description: "Create a multicloudDataTransferConfig",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3076,
            flag4539,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6447,
            flag7262,
            flag7356,
            flag11637,
            flag11946,
            flag12832,
            {
              name: "--services",
              description:
                'Maps services to their current or planned states. Service names are keys,\nand the associated values describe the state of the service. If a state\nchange is expected, the value is either `ADDING` or `DELETING`,\ndepending on the actions taken.\n+\nSample output:\n"services": {\n  "big-query": {\n    "states": [\n      {\n        "effectiveTime": "2024-12-12T08:00:00Z"\n        "state": "ADDING",\n      },\n    ]\n  },\n  "cloud-storage": {\n    "states": [\n      {\n        "state": "ACTIVE",\n      }\n    ]\n  }\n}.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--services=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--services=\'{"string": {}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--services=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "SERVICES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig.\n+\nTo set the `multicloud_data_transfer_config` attribute:\n* provide the argument `multicloud_data_transfer_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a multicloudDataTransferConfig",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4539,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7262,
            flag7356,
            flag11637,
            flag11946,
            flag12832,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig.\n+\nTo set the `multicloud_data_transfer_config` attribute:\n* provide the argument `multicloud_data_transfer_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a multicloudDataTransferConfig",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7262,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig.\n+\nTo set the `multicloud_data_transfer_config` attribute:\n* provide the argument `multicloud_data_transfer_config` on the command line",
          },
        },
        {
          name: "destinations",
          description: "Manage Destination resources",
          subcommands: [
            {
              name: "create",
              description: "Create a destination",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3076,
                {
                  name: "--endpoints",
                  description:
                    'Required, The list of `DestinationEndpoint` resources configured for the IP prefix.\n+\n*asn*:::\nThe ASN of the remote IP prefix.\n+\n*csp*:::\nThe CSP of the remote IP prefix.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--endpoints=asn=int,csp=string --endpoints=asn=int,csp=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--endpoints=\'[{"asn": int, "csp": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--endpoints=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ENDPOINTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag4539,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--ip-prefix",
                  description:
                    "The IP prefix that represents your workload on another CSP",
                  args: {
                    name: "IP_PREFIX",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6447,
                flag7243,
                flag7356,
                flag8038,
                flag11637,
                flag11946,
                {
                  name: "--request-id",
                  description:
                    "A request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server can ignore\nthe request if it has already been completed. The server waits\nfor at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and\nthe request times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, can ignore the second request. This prevents\nclients from accidentally creating duplicate `Destination`\nresources.\n+\nThe request ID must be a valid UUID with the exception that zero UUID\n(00000000-0000-0000-0000-000000000000) isn't supported",
                  args: {
                    name: "REQUEST_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination.\n+\nTo set the `destination` attribute:\n* provide the argument `destination` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a destination",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4539,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7243,
                flag7356,
                flag8038,
                flag11637,
                flag11946,
                flag12830,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination.\n+\nTo set the `destination` attribute:\n* provide the argument `destination` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a destination",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7243,
                flag7356,
                flag8038,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination.\n+\nTo set the `destination` attribute:\n* provide the argument `destination` on the command line",
              },
            },
            {
              name: "list",
              description: "List destinations",
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
                    "The location id of the multicloudDataTransferConfig resource.\n+\nTo set the `location` attribute:\n* provide the argument `--multicloud-data-transfer-config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--multicloud-data-transfer-config",
                  description:
                    "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig.\n+\nTo set the `multicloud-data-transfer-config` attribute:\n* provide the argument `--multicloud-data-transfer-config` on the command line",
                  args: {
                    name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11637,
                flag11946,
                {
                  name: "--return-partial-success",
                  description:
                    "If `true`, allow partial responses for multi-regional aggregated list\nrequests",
                },
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description: "Update a destination",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-endpoints",
                  description:
                    'Add new value to endpoints list. The list of `DestinationEndpoint` resources configured for the IP prefix.\n+\n*asn*:::\nThe ASN of the remote IP prefix.\n+\n*csp*:::\nThe CSP of the remote IP prefix.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-endpoints=asn=int,csp=string --add-endpoints=asn=int,csp=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-endpoints=\'[{"asn": int, "csp": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-endpoints=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ADD_ENDPOINTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                {
                  name: "--clear-endpoints",
                  description: "Clear endpoints value and set to empty list",
                },
                flag1721,
                flag2292,
                flag3076,
                {
                  name: "--endpoints",
                  description:
                    'Set endpoints to new value. The list of `DestinationEndpoint` resources configured for the IP prefix.\n+\n*asn*:::\nThe ASN of the remote IP prefix.\n+\n*csp*:::\nThe CSP of the remote IP prefix.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--endpoints=asn=int,csp=string --endpoints=asn=int,csp=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--endpoints=\'[{"asn": int, "csp": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--endpoints=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "ENDPOINTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag4539,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6435,
                flag7243,
                flag7356,
                flag8038,
                flag11637,
                flag11946,
                {
                  name: "--remove-endpoints",
                  description:
                    'Remove existing value from endpoints list. The list of `DestinationEndpoint` resources configured for the IP prefix.\n+\n*asn*:::\nThe ASN of the remote IP prefix.\n+\n*csp*:::\nThe CSP of the remote IP prefix.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-endpoints=asn=int,csp=string --remove-endpoints=asn=int,csp=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-endpoints=\'[{"asn": int, "csp": "string"}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-endpoints=path_to_file.(yaml|json)\n+\n```',
                  args: {
                    name: "REMOVE_ENDPOINTS",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                    suggestions: [],
                  },
                },
                flag12641,
                flag12830,
                flag14975,
                flag15178,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DESTINATION",
                description:
                  "ID of the destination or fully qualified identifier for the destination.\n+\nTo set the `destination` attribute:\n* provide the argument `destination` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List multicloudDataTransferConfigs",
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
              name: "--return-partial-success",
              description:
                "If `true`, allows partial responses for multi-regional aggregated list\nrequests",
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a multicloudDataTransferConfig",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1721,
            {
              name: "--clear-services",
              description: "Clear services value and set to empty map",
            },
            flag2292,
            flag3076,
            flag4539,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6435,
            flag7262,
            flag7356,
            flag11637,
            flag11946,
            flag12641,
            {
              name: "--remove-services",
              description:
                'Remove existing value from map services. Sets `remove_services` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-services=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-services=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-services=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_SERVICES",
                description: "Dict",
                suggestions: [],
              },
            },
            flag12832,
            {
              name: "--services",
              description:
                'Set services to new value. Maps services to their current or planned states. Service names are keys,\nand the associated values describe the state of the service. If a state\nchange is expected, the value is either `ADDING` or `DELETING`,\ndepending on the actions taken.\n+\nSample output:\n"services": {\n  "big-query": {\n    "states": [\n      {\n        "effectiveTime": "2024-12-12T08:00:00Z"\n        "state": "ADDING",\n      },\n    ]\n  },\n  "cloud-storage": {\n    "states": [\n      {\n        "state": "ACTIVE",\n      }\n    ]\n  }\n}.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--services=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--services=\'{"string": {}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--services=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "SERVICES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag14975,
            flag15178,
            {
              name: "--update-services",
              description:
                'Update services value or add key value pair. Maps services to their current or planned states. Service names are keys,\nand the associated values describe the state of the service. If a state\nchange is expected, the value is either `ADDING` or `DELETING`,\ndepending on the actions taken.\n+\nSample output:\n"services": {\n  "big-query": {\n    "states": [\n      {\n        "effectiveTime": "2024-12-12T08:00:00Z"\n        "state": "ADDING",\n      },\n    ]\n  },\n  "cloud-storage": {\n    "states": [\n      {\n        "state": "ACTIVE",\n      }\n    ]\n  }\n}.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-services=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-services=\'{"string": {}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-services=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_SERVICES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "MULTICLOUD_DATA_TRANSFER_CONFIG",
            description:
              "ID of the multicloudDataTransferConfig or fully qualified identifier for the multicloudDataTransferConfig.\n+\nTo set the `multicloud_data_transfer_config` attribute:\n* provide the argument `multicloud_data_transfer_config` on the command line",
          },
        },
      ],
    },
    {
      name: "multicloud-data-transfer-supported-services",
      description:
        "Manage Multicloud Data Transfer Supported Service resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe multicloudDataTransferSupportedService",
          options: [
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
                "The location id of the multicloudDataTransferSupportedService resource.\n+\nTo set the `location` attribute:\n* provide the argument `multicloud_data_transfer_supported_service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
            name: "MULTICLOUD_DATA_TRANSFER_SUPPORTED_SERVICE",
            description:
              "ID of the multicloudDataTransferSupportedService or fully qualified identifier for the multicloudDataTransferSupportedService.\n+\nTo set the `multicloud_data_transfer_supported_service` attribute:\n* provide the argument `multicloud_data_transfer_supported_service` on the command line",
          },
        },
        {
          name: "list",
          description: "List multicloudDataTransferSupportedServices",
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
      ],
    },
    {
      name: "operations",
      description: "Manage Network Connectivity Center operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Network Connectivity Center operation",
          options: [
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
              name: "--region",
              description:
                "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
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
          description: "List Network Connectivity Center operations",
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
            flag12312,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "policy-based-routes",
      description: "Manage Policy-based Routes",
      subcommands: [
        {
          name: "create",
          description: "Create a new policy-based route",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description:
                "Optional description of this resource. Provide this field when you create the resource",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-range",
              description:
                "Destination IP range of outgoing packets that this policy-based route applies to",
              args: {
                name: "DESTINATION_RANGE",
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
              name: "--interconnect-attachment-region",
              description:
                "Cloud region to install this policy-based route on interconnect attachment. Use `all` to install it on all interconnect attachments. Note if both `--tags` and `--interconnect-attachment-region` are not set, then the policy-based route will be installed in all network endpoints, including VMs, VPNs, and Interconnect attachements, in the network",
              args: {
                name: "INTERCONNECT_ATTACHMENT_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--ip-protocol",
              description:
                "IP protocol that this policy-based route applies to. Valid values are `TCP`, `UDP`, and `ALL`. Default is `ALL`",
              args: {
                name: "IP_PROTOCOL",
                description: "String",
                suggestions: [],
              },
            },
            flag6413,
            flag7356,
            {
              name: "--network",
              description:
                "Fully-qualified URL of the network that this route applies to. E.g. `projects/my-project/global/networks/my-network`",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--next-hop-ilb-ip",
              description:
                "IP of a global access enabled L4 ILB that should be the next hop to handle packets",
              args: {
                name: "NEXT_HOP_ILB_IP",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--next-hop-other-routes",
              description:
                "Next hop should be other routes that handle packets. This effectively excludes matching packets being applied on other policy-based routes with a lower priority. _NEXT_HOP_OTHER_ROUTES_ must be one of: *default-routing*, *other-routes-unspecified*",
              args: {
                name: "NEXT_HOP_OTHER_ROUTES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["default-routing", "other-routes-unspecified"],
              },
            },
            {
              name: "--priority",
              description:
                "Priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive. Note the priority of policy-based route is always higher than other types of route (e.g. static routes/advanced routes)",
              args: { name: "PRIORITY", description: "Int", suggestions: [] },
            },
            flag11637,
            {
              name: "--protocol-version",
              description:
                "Internet protocol versions that this policy-based route applies to. For this version, only `IPV4` is supported. _PROTOCOL_VERSION_ must be one of: *ipv4*, *ipv6*, *protocol-version-unspecified*",
              args: {
                name: "PROTOCOL_VERSION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["ipv4", "ipv6", "protocol-version-unspecified"],
              },
            },
            flag11946,
            {
              name: "--source-range",
              description:
                "Source IP range of outgoing packets that this policy-based route applies to",
              args: {
                name: "SOURCE_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--tags",
              description:
                "List of VM instance tags that this route applies to. VM instances that have ANY of tags specified here installs this route. Note if both `--tags` and `--interconnect-attachment-region` are not set, then the policy-based route will be installed in all endpoints, including VMs, VPNs, and Interconnect attachements, in the network",
              args: { name: "TAGS", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_BASED_ROUTE",
            description:
              "ID of the policy based route or fully qualified identifier for the policy based route.\n+\nTo set the `policy_based_route` attribute:\n* provide the argument `policy_based_route` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a policy-based route",
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
            name: "POLICY_BASED_ROUTE",
            description:
              "ID of the policy based route or fully qualified identifier for the policy based route.\n+\nTo set the `policy_based_route` attribute:\n* provide the argument `policy_based_route` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a policy-based route",
          options: [
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
            name: "POLICY_BASED_ROUTE",
            description:
              "ID of the policy based route or fully qualified identifier for the policy based route.\n+\nTo set the `policy_based_route` attribute:\n* provide the argument `policy_based_route` on the command line",
          },
        },
        {
          name: "list",
          description: "List policy-based routes",
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
      name: "regional-endpoints",
      description: "Manage Network Connectivity RegionalEndpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a new regional endpoint",
          options: [
            flag42,
            flag46,
            {
              name: "--address",
              description:
                "The IP Address of the Regional Endpoint. When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats:\n- IPv4 address as in ``10.0.0.1''\n- Address resource URI as in ``projects/{project}/regions/{region}/addresses/{address_name}'' for an IPv4 or IPv6 address",
              args: { name: "ADDRESS", description: "String", suggestions: [] },
            },
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the regional endpoint",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-global-access",
              description: "Whether the REGIONAL or GLOBAL access is enabled",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--network",
              description:
                "Consumer's VPC network that this regional endpoint belongs to",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12349,
            {
              name: "--subnetwork",
              description:
                "The name of the subnetwork from which the IP address will be allocated",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-google-api",
              description:
                "The service endpoint the regional endpoint will connect to",
              args: {
                name: "TARGET_GOOGLE_API",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REGIONAL_ENDPOINT",
            description:
              "ID of the regionalEndpoint or fully qualified identifier for the regionalEndpoint.\n+\nTo set the `regional_endpoint` attribute:\n* provide the argument `regional_endpoint` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a regional endpoint",
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
            flag12349,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REGIONAL_ENDPOINT",
            description:
              "ID of the regionalEndpoint or fully qualified identifier for the regionalEndpoint.\n+\nTo set the `regional_endpoint` attribute:\n* provide the argument `regional_endpoint` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a regional endpoint",
          options: [
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
            flag12349,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REGIONAL_ENDPOINT",
            description:
              "ID of the regionalEndpoint or fully qualified identifier for the regionalEndpoint.\n+\nTo set the `regional_endpoint` attribute:\n* provide the argument `regional_endpoint` on the command line",
          },
        },
        {
          name: "list",
          description: "List regional endpoints",
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
            flag12312,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "service-connection-policies",
      description: "Manage Service Connection Policies",
      subcommands: [
        {
          name: "create",
          description: "Create a new Service Connection Policy",
          options: [
            flag42,
            flag46,
            flag466,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description:
                "Description of the Service Connection Policy to be created",
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
            flag6417,
            flag7356,
            flag8238,
            flag11620,
            flag11637,
            flag11830,
            flag11946,
            flag12308,
            {
              name: "--service-class",
              description:
                "Service class that this policy is created for. E.g. my-service-class-ad32fa4b",
              args: {
                name: "SERVICE_CLASS",
                description: "String",
                suggestions: [],
              },
            },
            flag14529,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy.\n+\nTo set the `service_connection_policy` attribute:\n* provide the argument `service_connection_policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a service connection policy",
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
            flag12351,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy.\n+\nTo set the `service_connection_policy` attribute:\n* provide the argument `service_connection_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a service connection policy",
          options: [
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
            flag12351,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy.\n+\nTo set the `service_connection_policy` attribute:\n* provide the argument `service_connection_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List service connection policies",
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
            flag12312,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a service connection policy",
          options: [
            flag42,
            flag46,
            flag466,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description:
                "Description of the Service Connection Policy to be updated",
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
            flag6417,
            flag7356,
            flag11620,
            flag11637,
            flag11830,
            flag11946,
            flag12308,
            flag14529,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_CONNECTION_POLICY",
            description:
              "ID of the service connection policy or fully qualified identifier for the service connection policy.\n+\nTo set the `service_connection_policy` attribute:\n* provide the argument `service_connection_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "spokes",
      description: "Manage Network Connectivity Center spokes",
      subcommands: [
        {
          name: "delete",
          description: "Delete a spoke",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5338,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12287,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SPOKE",
            description:
              "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a spoke",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5338,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12287,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SPOKE",
            description:
              "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
          },
        },
        {
          name: "gateways",
          description: "Manage Gateway spokes",
          subcommands: [
            {
              name: "advertised-routes",
              description: "Manage gateway advertised routes",
              subcommands: [
                {
                  name: "create",
                  description: "Create a new gateway advertised route",
                  options: [
                    flag42,
                    flag46,
                    {
                      name: "--advertise-to-hub",
                      description:
                        "The gateway should advertise this route toward the hub",
                    },
                    flag720,
                    flag1201,
                    flag2292,
                    {
                      name: "--description",
                      description:
                        "Description of the advertised route to be created",
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
                      name: "--ip-range",
                      description: "Advertise this IP range",
                      args: {
                        name: "IP_RANGE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag6417,
                    flag7356,
                    {
                      name: "--priority",
                      description:
                        "This route's priority. Must be between 0 and 65335",
                      args: {
                        name: "PRIORITY",
                        description: "Int",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    flag11946,
                    flag12347,
                    flag14226,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "GATEWAY_ADVERTISED_ROUTE",
                    description:
                      "ID of the gatewayAdvertisedRoute or fully qualified identifier for the gatewayAdvertisedRoute.\n+\nTo set the `gateway_advertised_route` attribute:\n* provide the argument `gateway_advertised_route` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a gateway advertised route",
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
                    flag12347,
                    flag14226,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "GATEWAY_ADVERTISED_ROUTE",
                    description:
                      "ID of the gatewayAdvertisedRoute or fully qualified identifier for the gatewayAdvertisedRoute.\n+\nTo set the `gateway_advertised_route` attribute:\n* provide the argument `gateway_advertised_route` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a gateway advertised route",
                  options: [
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
                    flag12347,
                    flag14226,
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "GATEWAY_ADVERTISED_ROUTE",
                    description:
                      "ID of the gatewayAdvertisedRoute or fully qualified identifier for the gatewayAdvertisedRoute.\n+\nTo set the `gateway_advertised_route` attribute:\n* provide the argument `gateway_advertised_route` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List gateway advertised routes",
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
                        "The location ID.\n+\n\nTo set the `region` attribute:\n* provide the argument `--spoke` on the command line with a fully specified name;\n* if spoke is empty, will use the wildcard '-' to list all spokes with a fully specified name;\n* provide the argument `--region` on the command line;\n* use default wildcard location\n",
                      args: {
                        name: "REGION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag13948,
                    {
                      name: "--spoke",
                      description:
                        "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `--spoke` on the command line;\n* if spoke is empty, will use the wildcard '-' to list all spokes",
                      args: {
                        name: "SPOKE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                },
              ],
            },
            {
              name: "create",
              description: "Create a new Gateway spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--capacity",
                  description:
                    "Set the capacity of the gateway in Gbps. _CAPACITY_ must be one of:\n+\n*10g*::: Gateway will have capacity of 10 Gbps\n*1g*::: Gateway will have capacity of 1 Gbps\n:::\n+",
                  args: {
                    name: "CAPACITY",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["10g", "1g"],
                  },
                },
                flag2292,
                flag3237,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group",
                  description:
                    "Group that the spoke will be part of. The group must already exist",
                  args: {
                    name: "GROUP",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5546,
                flag5699,
                {
                  name: "--ip-range-reservations",
                  description: "The IP range reservation for the spoke",
                  args: {
                    name: "CIDR_RANGE",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag6413,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--region",
                  description:
                    "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions)",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a Gateway spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--capacity",
                  description:
                    "New gateway capacity of the spoke. _CAPACITY_ must be one of: *10g*, *1g*",
                  args: {
                    name: "CAPACITY",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["10g", "1g"],
                  },
                },
                flag1723,
                flag2292,
                flag3261,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
          ],
        },
        {
          name: "linked-interconnect-attachments",
          description: "Manage VLAN attachment spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new VLAN attachment spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3237,
                flag4592,
                flag4596,
                flag4900,
                flag4902,
                flag5091,
                flag5398,
                flag5453,
                flag5546,
                flag5699,
                flag5736,
                flag5743,
                {
                  name: "--interconnect-attachments",
                  description:
                    "VLAN attachments that the spoke provides connectivity to. The resources must already exist",
                  args: {
                    name: "INTERCONNECT_ATTACHMENTS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag6413,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                flag13830,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a VLAN attachment spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3261,
                flag4592,
                flag4596,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5736,
                flag5743,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
          ],
        },
        {
          name: "linked-producer-vpc-network",
          description: "Manage Producer VPC spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new Producer VPC spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3237,
                flag4594,
                flag4900,
                flag4902,
                flag5091,
                flag5338,
                flag5396,
                flag5453,
                flag5546,
                flag5699,
                flag5738,
                flag6413,
                flag7356,
                {
                  name: "--network",
                  description:
                    "Your VPC network that contains the peering to the Producer VPC,\n      which this spoke connects to the Hub. The peering must already exist and\n      be in the ACTIVE state",
                  args: {
                    name: "NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--peering",
                  description:
                    "Peering between your network and the Producer VPC, which this\n      spoke connects to the Hub. The peering must already exist and be in the\n      ACTIVATE state",
                  args: {
                    name: "PEERING",
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
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a Producer VPC spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3261,
                flag4593,
                flag4900,
                flag4902,
                flag5091,
                flag5338,
                flag5453,
                flag5699,
                flag5737,
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
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
          ],
        },
        {
          name: "linked-router-appliances",
          description: "Manage Router appliance spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new Router appliance spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3237,
                flag4592,
                flag4596,
                flag4900,
                flag4902,
                flag5091,
                flag5398,
                flag5453,
                flag5546,
                flag5699,
                flag5736,
                flag5743,
                flag6413,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                {
                  name: "--router-appliance",
                  description:
                    "Router appliance instance(s) that the spoke provides connectivity to. The resources must already exist.\n+\nFor example, use `--router-appliance=instance=ins_uri_1,ip=10.10.0.1` to add a single router appliance instance,\nor `--router-appliance=instance=ins_uri_1,ip=10.10.0.1 --router-appliance=instance=ins_uri_2,ip=10.10.0.2 ...`\nto add multiple instances",
                  args: {
                    name: "ROUTER_APPLIANCE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag13830,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a Router appliance spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3261,
                flag4592,
                flag4596,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5736,
                flag5743,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                flag12637,
                {
                  name: "--router-appliance",
                  description:
                    "Router appliance instance(s) with which to replace the set of instances already\nlinked to this spoke. Pass this flag multiple times to replace with multiple instances.\nFor example, use `--router-appliance=instance=new_ins_uri,ip=10.10.0.1` for a single router appliance instance,\nor `--router-appliance=instance=new_ins_uri_1,ip=10.10.0.1 --router-appliance=instance=new_ins_uri_2,ip=10.10.0.2 ...`\nfor multiple instances",
                  args: {
                    name: "ROUTER_APPLIANCE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
          ],
        },
        {
          name: "linked-vpc-network",
          description: "Manage VPC spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new VPC spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3237,
                flag4594,
                flag4900,
                flag4902,
                flag5091,
                flag5338,
                flag5396,
                flag5453,
                flag5546,
                flag5699,
                flag5738,
                flag6413,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--vpc-network",
                  description:
                    "VPC network that the spoke provides connectivity to.\n      The resource must already exist",
                  args: {
                    name: "VPC_NETWORK",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a VPC spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3261,
                flag4593,
                flag4900,
                flag4902,
                flag5091,
                flag5338,
                flag5453,
                flag5699,
                flag5737,
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
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
          ],
        },
        {
          name: "linked-vpn-tunnels",
          description: "Manage VPN spokes",
          subcommands: [
            {
              name: "create",
              description: "Create a new VPN spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3237,
                flag4592,
                flag4596,
                flag4900,
                flag4902,
                flag5091,
                flag5398,
                flag5453,
                flag5546,
                flag5699,
                flag5736,
                flag5743,
                flag6413,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                flag13830,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--vpn-tunnels",
                  description:
                    "HA VPN tunnels that the spoke provides connectivity to. The resources must already exist",
                  args: {
                    name: "VPN_TUNNELS",
                    description: "List",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
            {
              name: "update",
              description: "Update a VPN spoke",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3261,
                flag4592,
                flag4596,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5736,
                flag5743,
                flag7356,
                flag11637,
                flag11946,
                flag12352,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SPOKE",
                description:
                  "ID of the spoke or fully qualified identifier for the spoke.\n+\nTo set the `spoke` attribute:\n* provide the argument `spoke` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List spokes",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5338,
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
                "A Google Cloud region. To see the names of regions, see [Viewing a list of available regions](https://cloud.google.com/compute/docs/regions-zones/viewing-regions-zones#viewing_a_list_of_available_regions). Use ``-`` to specify all regions",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "transports",
      description: "Manage Network Connectivity Center transports",
      subcommands: [
        {
          name: "create",
          description: "Create a transport",
          options: [
            flag42,
            flag46,
            {
              name: "--activation-key",
              description:
                "Key from the remote provider to establish a connection over the Transport",
              args: {
                name: "ACTIVATION_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag358,
            flag720,
            {
              name: "--bandwidth",
              description:
                "Bandwidth of the transport to create. Must be a supported bandwidth on the remote profile. _BANDWIDTH_ must be one of: *100g*, *100m*, *10g*, *1g*, *200m*, *20g*, *2g*, *300m*, *400m*, *500m*, *50g*, *50m*, *5g*",
              args: {
                name: "BANDWIDTH",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "100g",
                  "100m",
                  "10g",
                  "1g",
                  "200m",
                  "20g",
                  "2g",
                  "300m",
                  "400m",
                  "500m",
                  "50g",
                  "50m",
                  "5g",
                ],
              },
            },
            flag1201,
            flag2292,
            flag3241,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag8238,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Google Cloud region for the transport. Applicable regions are those\nwhere Partner Interconnect is available. For a list of supported regions, see\nhttps://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/paired-locations",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--remote-account-id",
              description:
                "Account ID in the remote provider to associate with the generated key",
              args: {
                name: "REMOTE_ACCOUNT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remote-profile",
              description:
                "ID of the remoteTransportProfile or fully qualified identifier for the remoteTransportProfile.\n+\nTo set the `remote_transport_profile` attribute:\n* provide the argument `--remote-profile` on the command line",
              args: {
                name: "REMOTE_PROFILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--stack-type",
              description:
                "IP version of the routes to be exchanged. _STACK_TYPE_ must be one of: *ipv4-ipv6*, *ipv4-only*",
              args: {
                name: "STACK_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["ipv4-ipv6", "ipv4-only"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport.\n+\nTo set the `transport` attribute:\n* provide the argument `transport` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a transport",
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
            flag12353,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport.\n+\nTo set the `transport` attribute:\n* provide the argument `transport` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a transport",
          options: [
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
            flag12353,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport.\n+\nTo set the `transport` attribute:\n* provide the argument `transport` on the command line",
          },
        },
        {
          name: "list",
          description: "List transports",
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
                'The region of the transports to list. Provide "-" to list all transports',
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remote-profiles",
          description:
            "Manage Network Connectivity Center remote transport profiles",
          subcommands: [
            {
              name: "describe",
              description: "Describe a remote transport profile",
              options: [
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
                  name: "--region",
                  description:
                    "The location Id.\n+\n\nTo set the `region` attribute:\n* provide the argument `remote_transport_profile` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REMOTE_TRANSPORT_PROFILE",
                description:
                  "ID of the remoteTransportProfile or fully qualified identifier for the remoteTransportProfile.\n+\nTo set the `remote_transport_profile` attribute:\n* provide the argument `remote_transport_profile` on the command line",
              },
            },
            {
              name: "list",
              description: "List remote transport profiles",
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
                    'The region of the remote transport profiles to list. Use "-" to list all profiles',
                  args: {
                    name: "REGION",
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
          name: "update",
          description: "Update a transport",
          options: [
            flag42,
            flag46,
            flag358,
            flag720,
            {
              name: "--bandwidth",
              description:
                "Bandwidth of the transport to create. Must be a supported bandwidth on the remote profile. _BANDWIDTH_ must be one of: *100g*, *100m*, *10g*, *1g*, *200m*, *20g*, *2g*, *300m*, *400m*, *500m*, *50g*, *50m*, *5g*",
              args: {
                name: "BANDWIDTH",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "100g",
                  "100m",
                  "10g",
                  "1g",
                  "200m",
                  "20g",
                  "2g",
                  "300m",
                  "400m",
                  "500m",
                  "50g",
                  "50m",
                  "5g",
                ],
              },
            },
            flag1201,
            flag1723,
            flag2292,
            flag3241,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12353,
            flag12637,
            {
              name: "--stack-type",
              description:
                "IP version of the routes to be exchanged. _STACK_TYPE_ must be one of: *ipv4-ipv6*, *ipv4-only*",
              args: {
                name: "STACK_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["ipv4-ipv6", "ipv4-only"],
              },
            },
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRANSPORT",
            description:
              "ID of the transport or fully qualified identifier for the transport.\n+\nTo set the `transport` attribute:\n* provide the argument `transport` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
