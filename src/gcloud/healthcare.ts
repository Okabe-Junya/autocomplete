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
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
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
const flag2829: Fig.Option = {
  name: "--dataset",
  description:
    "Cloud Healthcare dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `consent_store` on the command line with a fully specified name;\n* provide the argument `--dataset` on the command line",
  args: { name: "DATASET", description: "String", suggestions: [] },
};
const flag2830: Fig.Option = {
  name: "--dataset",
  description:
    "Cloud Healthcare dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dicom_store` on the command line with a fully specified name;\n* provide the argument `--dataset` on the command line",
  args: { name: "DATASET", description: "String", suggestions: [] },
};
const flag2831: Fig.Option = {
  name: "--dataset",
  description:
    "Cloud Healthcare dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `fhir_store` on the command line with a fully specified name;\n* provide the argument `--dataset` on the command line",
  args: { name: "DATASET", description: "String", suggestions: [] },
};
const flag2832: Fig.Option = {
  name: "--dataset",
  description:
    "Cloud Healthcare dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `hl7v2_store` on the command line with a fully specified name;\n* provide the argument `--dataset` on the command line",
  args: { name: "DATASET", description: "String", suggestions: [] },
};
const flag2834: Fig.Option = {
  name: "--dataset",
  description:
    "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `--dataset` on the command line",
  args: { name: "DATASET", description: "String", suggestions: [] },
};
const flag3520: Fig.Option = {
  name: "--dicom-filter-tags",
  description:
    'Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or\nDirectory Structuring Elements, as defined at:\nhttp://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,.\nThey may be provided by "Keyword" or "Tag". For example "PatientID", "0010,0010"',
  args: { name: "DICOM_FILTER_TAGS", description: "List", suggestions: [] },
};
const flag4327: Fig.Option = {
  name: "--enable-update-create",
  description:
    "Whether this FHIR store has the [updateCreate]\n(https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate)\ncapability. Determines if the client can use an Update operation to create\na new resource with a client-specified ID. If false, all IDs are\nserver-assigned through the Create operation and attempts to Update\na non-existent resource will return errors",
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
const flag6668: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `--dataset` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6669: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `consent_store` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6670: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `dataset` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6671: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `dicom_store` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6672: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `fhir_store` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6673: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `hl7v2_store` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
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
const flag10575: Fig.Option = {
  name: "--notification-config",
  description:
    "A list of notification configs. Each configuration uses a filter to determine whether to\npublish a message (both Ingest & Create) on the corresponding notification destination.\nOnly the message name is sent as part of the notification. Supplied by the client.\n+\nSee https://cloud.google.com/appengine/docs/standard/python/search/query_strings for the\nsyntax of the filter.\n+\nNote: A topic must be created before publishing or subscribing to it. For instructions\non creating topics, refer to: https://cloud.google.com/pubsub/docs/admin#create_a_topic",
  args: {
    name: "NOTIFICATION_CONFIG",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
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
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11871: Fig.Option = {
  name: "--pubsub-topic",
  description:
    "Google Cloud Pub/Sub topic to send updates to.\n+\nNote, a topic needs to be created before publishing or subscribing to it. For instructions\non creating topics, refer to: https://cloud.google.com/pubsub/docs/admin#create_a_topic",
  args: { name: "PUBSUB_TOPIC", description: "String", suggestions: [] },
};
const flag11872: Fig.Option = {
  name: "--pubsub-topic",
  description:
    "Google Cloud Pub/Sub topic to send updates to.\n+\nNote: A topic must be created before publishing or subscribing to it. For instructions\non creating topics, refer to: https://cloud.google.com/pubsub/docs/admin#create_a_topic",
  args: { name: "PUBSUB_TOPIC", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12823: Fig.Option = {
  name: "--request-attributes",
  description:
    'Comma-separated list of request attributes associated with this access request. Each\nattribute has the form "KEY=VALUE"',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag13018: Fig.Option = {
  name: "--resource-type",
  description:
    "String of comma-delimited FHIR resource types. If provided, only resources of the specified\nresource type(s) are exported",
  args: { name: "RESOURCE_TYPE", description: "String", suggestions: [] },
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
const flag13471: Fig.Option = {
  name: "--send-for-bulk-import",
  description:
    "Indicates whether or not to send Cloud Pub/Sub notifications on bulk import.\nOnly supported for DICOM imports",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14468: Fig.Option = {
  name: "--stream-configs",
  description:
    "Configuration that indicates the BigQuery destinations for streaming instances of a DICOM store. To specify StreamConfigs, list all BigQuery destinations into one string separated by comma. (e.g., --stream-configs bq://{bigqueryProjectId1}.{bigqueryDatasetId1}.{bigqueryTableId1},bq://{bigqueryProjectId2}.{bigqueryDatasetId2}.{bigqueryTableId2})",
  args: { name: "STREAM_CONFIGS", description: "String", suggestions: [] },
};
const flag14841: Fig.Option = {
  name: "--text-redaction-mode",
  description:
    "Determines how to redact text from image. _TEXT_REDACTION_MODE_ must be (only one value is supported):\n+\n*all*::: Redact all text.\n+\n:::\n+",
  args: {
    name: "TEXT_REDACTION_MODE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["all"],
  },
};
const flag14884: Fig.Option = {
  name: "--time-zone",
  description: "Default timezone used by this dataset",
  args: { name: "TIME_ZONE", description: "String", suggestions: [] },
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

const completionSpec: Fig.Spec = {
  name: "healthcare",
  description: "Manage Cloud Healthcare resources",
  subcommands: [
    {
      name: "consent-stores",
      description: "Manage Cloud Healthcare API consent stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "check-data-access",
          description: "Check the consent for a particular data ID",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--data-id",
              description:
                "The unique identifier of the data to check access for",
              args: { name: "DATA_ID", description: "String", suggestions: [] },
            },
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            flag11637,
            flag11946,
            flag12823,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6669,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "evaluate-user-consents",
          description: "Check the consents for a particular user's data",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--consent-list",
              description:
                "List of user consents to evaluate the access request against. They must have the same\nuser_id as the data to check access for, exist in the current consent_store, and have a\nstate of either ACTIVE or DRAFT. A maximum of 100 consents can be provided here",
              args: {
                name: "CONSENT_LIST",
                description: "List",
                suggestions: [],
              },
            },
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            {
              name: "--page-size",
              description:
                "Limit on the number of user data mappings to return in a single response. If zero the\ndefault page size of 100 is used",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--page-token",
              description: "Token to retrieve the next page of results",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12823,
            {
              name: "--resource-attributes",
              description:
                'Comma-separated list of resource attributes associated with this access request. Each\nattribute has the form "KEY=VALUE". If no values are specified, then all data types are\nqueried',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--response-view",
              description:
                "The requested view of information provided in the response (BASIC or FULL). _RESPONSE_VIEW_ must be one of: *basic*, *full*, *response-view-unspecified*",
              args: {
                name: "RESPONSE_VIEW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "full", "response-view-unspecified"],
              },
            },
            flag14975,
            {
              name: "--user-id",
              description:
                "The unique identifier of the user to evaluate consents for",
              args: { name: "USER_ID", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2829,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6669,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Healthcare API consent stores",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2834,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6668,
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
          name: "query-accessible-data",
          description: "Queries all accessible data IDs",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-uri",
              description:
                "The Cloud Storage destination for the result file. The Cloud Healthcare API service account\nmust have the `roles/storage.objectAdmin` Cloud IAM role for this Cloud Storage location",
              args: { name: "GCS_URI", description: "String", suggestions: [] },
            },
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            flag11637,
            flag11946,
            flag12823,
            {
              name: "--resource-attributes",
              description:
                'Comma-separated list of resources attributes associated with the type of data being\nrequested. Each attribute has the form "KEY=VALUE". If no values are specified, then all\ndata types are included in the output',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
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
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "CONSENT_STORE",
              description:
                "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
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
          description: "Update a Cloud Healthcare API consent store",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            flag2292,
            flag2829,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6669,
            flag7356,
            flag11637,
            flag11946,
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
          ],
          args: {
            name: "CONSENT_STORE",
            description:
              "ID of the consentStore or fully qualified identifier for the consentStore.\n+\nTo set the `consent_store` attribute:\n* provide the argument `consent_store` on the command line",
          },
        },
      ],
    },
    {
      name: "datasets",
      description: "Manage Cloud Healthcare API datasets",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API dataset",
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
            flag6670,
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API dataset",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--encryption-key",
              description:
                "KMS encryption key that is used to secure this dataset and its sub-resources.\nThe key used for encryption and the dataset must be in the same location.\nIf empty, the default Google encryption key will be used to secure this dataset.\nThe format is projects/{projectId}/locations/{locationId}/keyRings/{keyRingId}/cryptoKeys/{keyId}",
              args: {
                name: "ENCRYPTION_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6670,
            flag7356,
            flag11637,
            flag11946,
            flag14884,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "deidentify",
          description:
            "Create a new Cloud Healthcare API dataset containing de-identified data from the source dataset",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--default-fhir-config",
              description: "Deidentify FHIR data with default configurations",
            },
            {
              name: "--destination-dataset",
              description:
                "The name of the dataset resource to which the redacted data should be written\n(e.g., projects/{projectId}/locations/{locationId}/datasets/{datasetId}).\nThe new dataset must not exist, or the request will fail",
              args: {
                name: "DESTINATION_DATASET",
                description: "String",
                suggestions: [],
              },
            },
            flag3520,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6670,
            flag7356,
            flag11637,
            flag11946,
            flag14841,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API dataset",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6670,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API dataset",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6670,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API dataset",
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
            flag6670,
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Healthcare API datasets",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding to a Cloud Healthcare API dataset",
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
            flag6670,
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
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Healthcare API dataset",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6670,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DATASET",
              description:
                "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
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
          description: "Update a Cloud Healthcare API dataset",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6670,
            flag7356,
            flag11637,
            flag11946,
            flag14884,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DATASET",
            description:
              "ID of the dataset or fully qualified identifier for the dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `dataset` on the command line",
          },
        },
      ],
    },
    {
      name: "dicom-stores",
      description: "Manage Cloud Healthcare API DICOM stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11872,
            flag11946,
            flag13471,
            flag14468,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "deidentify",
          description:
            "De-identify data from the source store and write it to the destination store",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2830,
            {
              name: "--destination-store",
              description:
                "The name of the DICOM store to which the redacted data should be written\n(e.g., projects/{projectId}/locations/{locationId}/datasets/{datasetId}/dicomStores/{dicomStoreId}).\nThe destination DICOM store must already exist, or the request will fail",
              args: {
                name: "DESTINATION_STORE",
                description: "String",
                suggestions: [],
              },
            },
            flag3520,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11946,
            flag14841,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "export",
          description: "Manage Cloud Healthcare API DICOM store exports",
          subcommands: [
            {
              name: "bq",
              description:
                "Export a Cloud Healthcare API API DICOM store to BigQuery",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--bq-table",
                  description:
                    "The BigQuery table where the DICOM store should\nbe written. If this table does not exist, a new table with the given\nname will be created",
                  args: {
                    name: "BQ_TABLE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag2830,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6671,
                flag7356,
                {
                  name: "--overwrite-table",
                  description:
                    "If the destination table already exists and this flag is\n`TRUE`, the table will be overwritten by the contents of the DICOM\nstore. If the flag is not set and the destination table already exists,\nthe export call returns an error",
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--write-disposition",
                  description:
                    "Determines whether the existing table in the destination is to be overwritten or appended to. _WRITE_DISPOSITION_ must be one of:\n+\n*write-append*::: Append data to the existing table.\n+\n*write-empty*::: Only export data if the destination table is empty.\n+\n*write-truncate*::: Erase all existing data in a table before writing the instances.\n+\n:::\n+",
                  args: {
                    name: "WRITE_DISPOSITION",
                    description: "String",
                    suggestions: [
                      "write-append",
                      "write-empty",
                      "write-truncate",
                    ],
                  },
                },
              ],
              args: {
                name: "DICOM_STORE",
                description:
                  "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
              },
            },
            {
              name: "gcs",
              description:
                "Export a Cloud Healthcare API DICOM store to Google Cloud Storage",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2830,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-uri-prefix",
                  description:
                    "URI for a Google Cloud Storage directory to which result\nfiles should be written (for example, `gs://bucket-id/path/to/destination/dir`).\nIf there is no trailing slash, the service will append one when composing\nthe object path. The user is responsible for creating the Google Cloud\nStorage bucket referenced in `uri_prefix`",
                  args: {
                    name: "GCS_URI_PREFIX",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6671,
                flag7356,
                {
                  name: "--mime-type",
                  description:
                    "'MIME types supported by DICOM spec. Each file will be\nwritten in the following format:\n`.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}`\nThe frame_number component will exist only for multi-frame instances.\nRefer to the DICOM conformance statement for permissible MIME types:\nhttps://cloud.google.com/healthcare/docs/dicom#wado-rs  The following\nextensions will be used for output files:\n* application/dicom -> .dcm\n* image/jpeg -> .jpg\n* image/png -> .png\n+\nIf unspecified, the instances\nwill be exported in their original DICOM format.'",
                  args: {
                    name: "MIME_TYPE",
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
                name: "DICOM_STORE",
                description:
                  "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
              },
            },
          ],
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6671,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "import",
          description: "Manage Cloud Healthcare API DICOM store imports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import DICOM objects into a Cloud Healthcare API DICOM store",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2830,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-uri",
                  description:
                    "Google Cloud Storage URI containing DICOM object data. It must match\nindividual DICOM files or use wildcards to import multiple files\nfrom one or more directories.\n* Use * to match 0 or more non-separator characters. For example,\n  `gs://BUCKET/DIRECTORY/Example*.dcm` matches Example.dcm and\n  Example22.dcm in DIRECTORY.\n* Use ** to match 0 or more characters (including separators). Must\n  be used at the end of a path and with no other wildcards in the path.\n  Can also be used with a filename extension (such as .dcm), which\n  imports all files with the filename extension in the specified\n  directory and its subdirectories. For example,\n  gs://BUCKET/DIRECTORY/**.dcm imports all files with the .dcm\n  filename extension in DIRECTORY and its subdirectories.\n* Use ? to match 1 character. For example,\n  gs://BUCKET/DIRECTORY/Example?.dcm matches Example1.dcm but\n  does not match Example.dcm or Example01.dcm",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6671,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DICOM_STORE",
                description:
                  "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List Cloud Healthcare API DICOM stores",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2834,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6668,
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
          name: "metrics",
          description: "Get the metrics for a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
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
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DICOM_STORE",
              description:
                "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
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
          description: "Update a Cloud Healthcare API DICOM store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2830,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6671,
            flag7356,
            flag11637,
            flag11872,
            flag11946,
            flag13471,
            flag14468,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DICOM_STORE",
            description:
              "ID of the dicomStore or fully qualified identifier for the dicomStore.\n+\nTo set the `dicom_store` attribute:\n* provide the argument `dicom_store` on the command line",
          },
        },
      ],
    },
    {
      name: "fhir-stores",
      description: "Manage Cloud Healthcare API FHIR stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag2831,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            {
              name: "--disable-referential-integrity",
              description:
                "Whether to disable referential integrity in this FHIR store.\nDefault value is false, meaning that the API will enforce referential\nintegrity and fail the requests that will result in inconsistent\nstate in the FHIR store. When this field is set to true, the API\nwill skip referential integrity check. This field is immutable after\nstore creation",
            },
            {
              name: "--disable-resource-versioning",
              description:
                "Whether to disable resource versioning for this FHIR store. If set to false, which\nis the default behavior, all write operations will cause historical versions to be\nrecorded automatically. Historical versions can be fetched through the history APIs,\nbut cannot be updated. This field is immutable after store creation",
            },
            flag4327,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11871,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "deidentify",
          description:
            "De-identify data from the source store and write it to the destination store",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2831,
            {
              name: "--destination-store",
              description:
                "The name of the FHIR store to which the redacted data should be written\n(e.g., projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}).\nThe destination FHIR store must already exist, or the request will fail",
              args: {
                name: "DESTINATION_STORE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "export",
          description: "Manage Cloud Healthcare API FHIR store exports",
          subcommands: [
            {
              name: "bq",
              description:
                "Export Cloud Healthcare API FHIR resources to BigQuery",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--bq-dataset",
                  description:
                    "BigQuery dataset that houses the BigQuery tables",
                  args: {
                    name: "BQ_DATASET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag2831,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6672,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--recursive-depth",
                  description:
                    "The depth for all recursive structures in the output analytics schema. For example,\nconcept in the CodeSystem resource is a recursive structure; when the depth\nis 2, the CodeSystem table will have a column called concept.concept but not\nconcept.concept.concept. If not specified or set to 0, the server will use the\ndefault value 2",
                  args: {
                    name: "RECURSIVE_DEPTH",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag13018,
                {
                  name: "--schema-type",
                  description:
                    "Specifies the output schema type. _SCHEMA_TYPE_ must be one of:\n+\n*analytics*::: Analytics schema defined by the FHIR community.\nSee https://github.com/rbrush/sql-on-fhir/blob/master/sql-on-fhir.md.\n+\n*analytics_v2*::: Analytics V2, similar to Analytics schema type, with added support\nfor extensions with one or more occurrences and contained resources\nto be represented in stringified JSON.\n+\n:::\n+",
                  args: {
                    name: "SCHEMA_TYPE",
                    description: "String",
                    suggestions: ["analytics", "analytics_v2"],
                  },
                },
                {
                  name: "--since",
                  description:
                    "If provided, only resources updated after this time are exported. The time uses the format\nYYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or\n`2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone",
                  args: {
                    name: "SINCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--write-disposition",
                  description:
                    "Determines whether existing tables in the destination dataset are overwritten or appended\nto. _WRITE_DISPOSITION_ must be one of:\n+\n*write-append*::: Append data to the existing tables.\n+\n*write-empty*::: Only export data if the destination tables are empty.\n+\n*write-truncate*::: Erase all existing data in the tables before writing the instances.\n+\n:::\n+",
                  args: {
                    name: "WRITE_DISPOSITION",
                    description: "String",
                    suggestions: [
                      "write-append",
                      "write-empty",
                      "write-truncate",
                    ],
                  },
                },
              ],
              args: {
                name: "FHIR_STORE",
                description:
                  "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
              },
            },
            {
              name: "gcs",
              description:
                "Export Cloud Healthcare API FHIR resources to Google Cloud Storage",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2831,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage destination location. Specify a path to a Cloud\nStorage bucket or folder rather than a concrete object. The exported outputs\nare organized by FHIR resource types. The server will create one object per\nresource type. Each object contains newline delimited JSON, and each line\nis a FHIR resource",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6672,
                flag7356,
                flag11637,
                flag11946,
                flag13018,
                {
                  name: "--since",
                  description:
                    "If provided, only resources updated after this time are exported. The time uses the format\nYYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z.\nThe time must be specified to the second and include a time zone",
                  args: {
                    name: "SINCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FHIR_STORE",
                description:
                  "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
              },
            },
          ],
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6672,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "import",
          description: "Manage Cloud Healthcare API FHIR store imports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import FHIR resources from Google Cloud Storage into a Cloud Healthcare API FHIR store",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--content-structure",
                  description:
                    "Content structure in the source location. The default is BUNDLE. _CONTENT_STRUCTURE_ must be one of:\n+\n*bundle*::: Each unit is a bundle, which contains one or more resources.\n+\n*bundle-pretty*::: The entire file is one JSON bundle. The JSON can span multiple lines.\n+\n*resource*::: Each unit is a single resource.\n+\n*resource-pretty*::: The entire file is one JSON resource. The JSON can span multiple lines.\n+\n:::\n+",
                  args: {
                    name: "CONTENT_STRUCTURE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "bundle",
                      "bundle-pretty",
                      "resource",
                      "resource-pretty",
                    ],
                  },
                },
                flag2831,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-uri",
                  description:
                    "Cloud Storage source data locations. Each Cloud Storage object\nshould be a text file that contains newline-delimited JSON structures conforming\nto the FHIR standard. You can use wildcards to import multiple files from one or more\ndirectories.\n- Use * to match 0 or more non-separator characters. For example,\ngs://BUCKET/DIRECTORY/Example```*```.ndjson matches Example.ndjson and Example22.ndjson in\nDIRECTORY.\n- Use ** to match 0 or more characters (including separators). Must be used at the\nend of a path and with no other wildcards in the path. Can also be used with a filename\nextension (such as .ndjson), which imports all files with the filename extension in the\nspecified directory and its subdirectories. For example, gs://BUCKET/DIRECTORY/**.ndjson\nimports all files with the .ndjson filename extension in DIRECTORY and its subdirectories.\n- Use ? to match 1 character. For example, gs://BUCKET/DIRECTORY/Example?.ndjson matches\nExample1.ndjson but does not match Example.ndjson or Example01.ndjson",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6672,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FHIR_STORE",
                description:
                  "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List Cloud Healthcare API FHIR stores",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2834,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6668,
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
          name: "metrics",
          description: "Gets the metrics for a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag2831,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
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
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "FHIR_STORE",
              description:
                "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
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
          description: "Update a Cloud Healthcare API FHIR store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2831,
            flag4327,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6672,
            flag7356,
            flag11637,
            flag11871,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FHIR_STORE",
            description:
              "ID of the fhirStore or fully qualified identifier for the fhirStore.\n+\nTo set the `fhir_store` attribute:\n* provide the argument `fhir_store` on the command line",
          },
        },
      ],
    },
    {
      name: "hl7v2-stores",
      description: "Manage Cloud Healthcare API HL7v2 stores",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add an IAM policy binding to a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
            flag7356,
            flag10575,
            {
              name: "--parser-version",
              description:
                "Immutable. Determines the version of both the default parser to be used when [schema](https://cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.hl7V2Stores#ParserConfig.FIELDS.schema) is\nnot given, as well as the schematized parser used when [schema](https://cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.hl7V2Stores#ParserConfig.FIELDS.schema) is specified. This field\nis immutable after HL7v2 store creation. _PARSER_VERSION_ must be one of:\n+\n*v1*::: The parsedData includes every given non-empty message field except the Field Separator (MSH-1) field. As a result, the parsed MSH segment starts with the MSH-2 field and the field numbers are off-by-one with respect to the HL7 standard.\n*v2*::: The parsedData includes every given non-empty message field.\n+\n*v3*::: This version is the same as V2, with the following change.\nThe parsedData contains unescaped escaped field separators, component separators,\nsub-component separators, repetition separators, escape characters, and truncation\ncharacters.\nIf [schema](https://cloud.google.com/healthcare-api/docs/reference/rest/v1/projects.locations.datasets.hl7V2Stores#ParserConfig.FIELDS.schema) is specified, the schematized parser uses improved parsing heuristics\ncompared to previous versions.\n+\n:::\n+",
              args: {
                name: "PARSER_VERSION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["v1", "v2", "v3"],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "export",
          description: "Manage Cloud Healthcare API HL7v2 store exports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Export Cloud Healthcare API HL7v2 messages to Google Cloud Storage",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2832,
                {
                  name: "--end-time",
                  description:
                    "The end of the range in message send_time (MSH.7) to process. If not\nspecified, the time when the export is scheduled is used",
                  args: {
                    name: "END_TIME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-uri",
                  description:
                    "The Cloud Storage destination location. Specify a path to a Cloud\nStorage bucket or folder rather than a concrete object. The exported\nmessages are ordered by the message send_time (MSH.7) in ascending\norder. The server will create one or more objects. Each object contains\nnewline delimited JSON, and each line is an HL7v2 message",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6673,
                flag7356,
                {
                  name: "--message-view",
                  description:
                    "Specifies the parts of the Message resource to include in the export.\nThe default is FULL. _MESSAGE_VIEW_ must be one of:\n+\n*basic*::: Exported resources include only the name field.\n+\n*full*::: Exported resources include all the message fields.\n+\n*parsed-only*::: Exported resources include all the message fields except data and\nschematizedData fields.\n+\n*raw-only*::: Exported resources include all the message fields except parsedData\nand schematizedData fields.\n+\n*schematized-only*::: Exported resources include all the message fields except data and\nparsedData fields.\n+\n:::\n+",
                  args: {
                    name: "MESSAGE_VIEW",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "basic",
                      "full",
                      "parsed-only",
                      "raw-only",
                      "schematized-only",
                    ],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--start-time",
                  description:
                    "The start of the range in message send_time (MSH.7) to process. If not\nspecified, the UNIX epoch (1970-01-01T00:00:00Z) is used",
                  args: {
                    name: "START_TIME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "HL7V2_STORE",
                description:
                  "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
              },
            },
          ],
        },
        {
          name: "get-iam-policy",
          description:
            "Retrieve the IAM policy for a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6673,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "import",
          description: "Manage Cloud Healthcare API HL7v2 store imports",
          subcommands: [
            {
              name: "gcs",
              description:
                "Import HL7v2 messages from Google Cloud Storage into a Cloud Healthcare API HL7v2 store",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2832,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--gcs-uri",
                  description:
                    "Cloud Storage source data locations. Each Cloud Storage object should\nbe a text file that contains newline-delimited JSON objects. Each JSON\nobject has a data field that contains a base64-encoded HL7v2 message",
                  args: {
                    name: "GCS_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag6673,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "HL7V2_STORE",
                description:
                  "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List Cloud Healthcare API HL7v2 stores",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2834,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6668,
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
          name: "metrics",
          description:
            "Gets the metrics for a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
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
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "HL7V2_STORE",
              description:
                "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
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
          description: "Update a Cloud Healthcare API HL7v2 store",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2832,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6673,
            flag7356,
            flag10575,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HL7V2_STORE",
            description:
              "ID of the hl7v2Store or fully qualified identifier for the hl7v2Store.\n+\nTo set the `hl7v2_store` attribute:\n* provide the argument `hl7v2_store` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Cloud Healthcare API operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Cloud Healthcare API operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dataset",
              description:
                "Cloud Healthcare dataset.\n+\nTo set the `dataset` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--dataset` on the command line",
              args: { name: "DATASET", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "Google Cloud location.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `healthcare/location`",
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
          description: "List Cloud Healthcare API operations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2834,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6668,
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
};

export default completionSpec;
