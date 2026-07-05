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
const flag3212: Fig.Option = {
  name: "--description",
  description: "Description of the entry group",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3296: Fig.Option = {
  name: "--description",
  description: "Textual description of the entry",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3751: Fig.Option = {
  name: "--display-name",
  description: "Display name of the tag template field",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3767: Fig.Option = {
  name: "--display-name",
  description: "Human-readable name for the entry",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3771: Fig.Option = {
  name: "--display-name",
  description: "Human-readable name of the entry group",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4440: Fig.Option = {
  name: "--entry-group",
  description:
    "Entry group of the entry.\n+\n\nTo set the `entry-group` attribute:\n* provide the argument `--entry` on the command line with a fully specified name;\n* provide the argument `--entry-group` on the command line",
  args: { name: "ENTRY_GROUP", description: "String", suggestions: [] },
};
const flag4441: Fig.Option = {
  name: "--entry-group",
  description:
    "Entry group of the entry.\n+\n\nTo set the `entry-group` attribute:\n* provide the argument `entry` on the command line with a fully specified name;\n* provide the argument `--entry-group` on the command line",
  args: { name: "ENTRY_GROUP", description: "String", suggestions: [] },
};
const flag4442: Fig.Option = {
  name: "--entry-group",
  description:
    "Entry group of the tag.\n+\n\nTo set the `entry-group` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--entry-group` on the command line",
  args: { name: "ENTRY_GROUP", description: "String", suggestions: [] },
};
const flag4460: Fig.Option = {
  name: "--entry",
  description:
    "Entry of the tag.\n+\n\nTo set the `entry` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--entry` on the command line",
  args: { name: "ENTRY", description: "String", suggestions: [] },
};
const flag4461: Fig.Option = {
  name: "--entry",
  description:
    "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `--entry` on the command line",
  args: { name: "ENTRY", description: "String", suggestions: [] },
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
const flag6528: Fig.Option = {
  name: "--linked-resource",
  description:
    "Link to the resource in external system. If `--type` is not used,\nthen `--linked-resource` may be provided",
  args: { name: "LINKED_RESOURCE", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6779: Fig.Option = {
  name: "--location",
  description:
    "Location of the entry group.\n+\n\nTo set the `location` attribute:\n* provide the argument `entry_group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6780: Fig.Option = {
  name: "--location",
  description:
    "Location of the entry.\n+\n\nTo set the `location` attribute:\n* provide the argument `--entry` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6781: Fig.Option = {
  name: "--location",
  description:
    "Location of the entry.\n+\n\nTo set the `location` attribute:\n* provide the argument `entry` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6804: Fig.Option = {
  name: "--location",
  description:
    "Location of the policy tag.\n+\n\nTo set the `location` attribute:\n* provide the argument `policy_tag` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6817: Fig.Option = {
  name: "--location",
  description:
    "Location of the tag template field.\n+\n\nTo set the `location` attribute:\n* provide the argument `field` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6818: Fig.Option = {
  name: "--location",
  description:
    "Location of the tag template.\n+\n\nTo set the `location` attribute:\n* provide the argument `tag_template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6819: Fig.Option = {
  name: "--location",
  description:
    "Location of the tag.\n+\n\nTo set the `location` attribute:\n* provide the argument `tag` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6823: Fig.Option = {
  name: "--location",
  description:
    "Location of the taxonomy.\n+\n\nTo set the `location` attribute:\n* provide the argument `taxonomy` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
const flag13325: Fig.Option = {
  name: "--schema-from-file",
  description:
    "Path to a JSON or YAML file containing the schema for the entry. This can be used to specify\nschemas with column descriptions, column modes other than NULLABLE, and nested subcolumns. Use a full or relative path to a local file containing the value of schema",
  args: {
    name: "SCHEMA_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag13331: Fig.Option = {
  name: "--schema",
  description:
    "Inline schema for the entry. When specifying a schema via this argument, only column names\nand types should be provided. Column modes will default to NULLABLE, and column descriptions\nand nested subcolumns are not supported",
  args: {
    name: "COLUMN_NAME=COLUMN_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
    suggestions: [],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14609: Fig.Option = {
  name: "--tag-template-location",
  description:
    "Location of the tag template.\n+\n\nTo set the `location` attribute:\n* provide the argument `--tag-template` on the command line with a fully specified name;\n* provide the argument `--tag-template-location` on the command line;\n* provide the argument `--location` on the command line",
  args: {
    name: "TAG_TEMPLATE_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag14610: Fig.Option = {
  name: "--tag-template-project",
  description:
    "Project of the tag template.\n+\n\nTo set the `project` attribute:\n* provide the argument `--tag-template` on the command line with a fully specified name;\n* provide the argument `--tag-template-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: {
    name: "TAG_TEMPLATE_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag14611: Fig.Option = {
  name: "--tag-template",
  description:
    "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `--tag-template` on the command line",
  args: { name: "TAG_TEMPLATE", description: "String", suggestions: [] },
};
const flag14612: Fig.Option = {
  name: "--tag-template",
  description:
    "Tag template of the tag template field.\n+\n\nTo set the `tag-template` attribute:\n* provide the argument `field` on the command line with a fully specified name;\n* provide the argument `--tag-template` on the command line",
  args: { name: "TAG_TEMPLATE", description: "String", suggestions: [] },
};
const flag14786: Fig.Option = {
  name: "--taxonomy",
  description:
    "Taxonomy of the policy tag.\n+\n\nTo set the `taxonomy` attribute:\n* provide the argument `policy_tag` on the command line with a fully specified name;\n* provide the argument `--taxonomy` on the command line",
  args: { name: "TAXONOMY", description: "String", suggestions: [] },
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
  name: "data-catalog",
  description: "Manage Data Catalog resources",
  subcommands: [
    {
      name: "entries",
      description: "Manage entries in Data Catalog",
      subcommands: [
        {
          name: "create",
          description: "*(DEPRECATED)*  Create a Data Catalog entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3296,
            flag3767,
            flag4441,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--fully-qualified-name",
              description: "Fully qualified name of the resource",
              args: {
                name: "FULLY_QUALIFIED_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gcs-file-patterns",
              description:
                "Patterns to identify a set of files in Google Cloud Storage. A star (```*```) may be used at\nthe end of a pattern to match arbitrary files beginning with that pattern.\n+\nExamples of valid file patterns:\n- gs://bucket_name/```*``` - Matches all files in 'bucket_name'.\n- gs://bucket_name/file```*``` - Matches files prefixed by 'file' in 'bucket_name'.\n- gs://another_bucket/a.txt - Matches 'gs://another_bucket/a.txt'",
              args: {
                name: "GCS_FILE_PATTERNS",
                description: "List",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag6528,
            flag6781,
            flag7356,
            flag11637,
            flag11946,
            flag13331,
            flag13325,
            {
              name: "--source-system-create-time",
              description:
                "Creation timestamp of the resource in the external system. If `--type` is not used,\nthen `--source-system-create-time` may be provided",
              args: {
                name: "SOURCE_SYSTEM_CREATE_TIME",
                description:
                  "Googlecloudsdk.command_lib.data_catalog.entries.v1_util:GetJsonTimeString",
                suggestions: [],
              },
            },
            {
              name: "--source-system-update-time",
              description:
                "Update timestamp of the resource in the external system. If `--type` is not used,\nthen `--source-system-update-time` may be provided",
              args: {
                name: "SOURCE_SYSTEM_UPDATE_TIME",
                description:
                  "Googlecloudsdk.command_lib.data_catalog.entries.v1_util:GetJsonTimeString",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--type",
              description:
                "Type of the entry. _TYPE_ must be one of: *cluster*, *dashboard*, *database*, *database-schema*, *data-source-connection*, *data-stream*, *edge*, *entry-type-unspecified*, *explore*, *feature-group*, *feature-online-store*, *feature-view*, *fileset*, *graph*, *lake*, *look*, *model*, *node*, *routine*, *service*, *table*, *zone*",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "cluster",
                  "dashboard",
                  "database",
                  "database-schema",
                  "data-source-connection",
                  "data-stream",
                  "edge",
                  "entry-type-unspecified",
                  "explore",
                  "feature-group",
                  "feature-online-store",
                  "feature-view",
                  "fileset",
                  "graph",
                  "lake",
                  "look",
                  "model",
                  "node",
                  "routine",
                  "service",
                  "table",
                  "zone",
                ],
              },
            },
            flag15315,
            {
              name: "--user-specified-system",
              description:
                "External system from which the entry is fed. If `--type` is not used,\nthen `--user-specified-system` must be provided",
              args: {
                name: "USER_SPECIFIED_SYSTEM",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-specified-type",
              description:
                "Type of the entry coming from external system. If `--type` is not used,\nthen `--user-specified-type` must be provided",
              args: {
                name: "USER_SPECIFIED_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)*  Delete a Data Catalog entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4441,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6781,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)*  Describe a Data Catalog entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4441,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6781,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)*  List all entries in a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--entry-group",
              description:
                "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry-group` attribute:\n* provide the argument `--entry-group` on the command line",
              args: {
                name: "ENTRY_GROUP",
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
            flag6515,
            {
              name: "--location",
              description:
                "Location of the entry group.\n+\n\nTo set the `location` attribute:\n* provide the argument `--entry-group` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          name: "lookup",
          description:
            "*(DEPRECATED)*  Lookup a Data Catalog entry by its target name",
          options: [
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
            name: "RESOURCE",
            description:
              "The name of the target resource to lookup. This can be either the Google Cloud Platform\nresource name or the SQL name of a Google Cloud Platform resource. SQL names follow Standard\nSQL lexical structure: https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical",
          },
        },
        {
          name: "star",
          description: "*(DEPRECATED)*  Star a Data Catalog entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4441,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6781,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "unstar",
          description: "*(DEPRECATED)*  Unstar a Data Catalog entry",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4441,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6781,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
        {
          name: "update",
          description: "*(DEPRECATED)*  Update a Data Catalog entry",
          options: [
            flag42,
            flag46,
            {
              name: "--add-file-patterns",
              description: "A list of file patterns to add to the current list",
              args: { name: "PATTERN", description: "List", suggestions: [] },
            },
            flag1201,
            {
              name: "--clear-file-patterns",
              description:
                "If specified, clear the current list of file patterns",
            },
            flag2292,
            flag3296,
            flag3767,
            flag4441,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6528,
            flag6781,
            flag7356,
            {
              name: "--lookup-entry",
              description:
                "The name of the target resource whose entry to update. This can be either the\nGoogle Cloud Platform resource name or the SQL name of a Google Cloud Platform\nresource. This flag allows one to update the entry corresponding to the lookup\nof the given resource, without needing to specify the entry directly",
              args: {
                name: "RESOURCE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--remove-file-patterns",
              description:
                "A list of file patterns to remove from the current list",
              args: { name: "PATTERN", description: "List", suggestions: [] },
            },
            flag13331,
            flag13325,
            flag14975,
            flag15315,
            {
              name: "--user-specified-system",
              description:
                "External system from which the entry is fed. This can be updated for on prem entries",
              args: {
                name: "USER_SPECIFIED_SYSTEM",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--user-specified-type",
              description:
                "Type of the entry coming from external system. This can be updated for on prem entries",
              args: {
                name: "USER_SPECIFIED_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "ENTRY",
            description:
              "ID of the entry or fully qualified identifier for the entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
          },
        },
      ],
    },
    {
      name: "entry-groups",
      description: "*(DEPRECATED)*  Manage entry groups in Data Catalog",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "*(DEPRECATED)*  Add an IAM policy binding to a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "create",
          description: "*(DEPRECATED)*  Create a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3212,
            flag3771,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)*  Delete a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)*  Describe a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "*(DEPRECATED)*  Get the IAM policy for a Data Catalog entry group",
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
            flag6779,
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "list",
          description:
            "*(DEPRECATED)*  List all entry groups in a Data Catalog location",
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
        {
          name: "remove-iam-policy-binding",
          description:
            "*(DEPRECATED)*  Remove an IAM policy binding from a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
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
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "*(DEPRECATED)*  Set the IAM policy for a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ENTRY_GROUP",
              description:
                "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
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
          description: "*(DEPRECATED)*  Update a Data Catalog entry group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3212,
            flag3771,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6779,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTRY_GROUP",
            description:
              "ID of the entry group or fully qualified identifier for the entry group.\n+\nTo set the `entry_group` attribute:\n* provide the argument `entry_group` on the command line",
          },
        },
      ],
    },
    {
      name: "search",
      description:
        "*(DEPRECATED)*  Search Data Catalog for resources that match a query",
      options: [
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
          name: "--include-gcp-public-datasets",
          description:
            "If True, include Google Cloud Platform public datasets in the search\nresults",
        },
        {
          name: "--include-organization-ids",
          description:
            "List of Cloud Organization IDs to include in the search",
          args: { name: "ORGANIZATION", description: "List", suggestions: [] },
        },
        {
          name: "--include-project-ids",
          description: "List of Cloud Project IDs to include in the search",
          args: { name: "PROJECT", description: "List", suggestions: [] },
        },
        {
          name: "--limit",
          description:
            "Maximum number of resources to list. The default is *unlimited*",
          args: {
            name: "LIMIT",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag7356,
        {
          name: "--order-by",
          description:
            "Specifies the ordering of results. Defaults to 'relevance'.\n+\nCurrently supported case-sensitive choices are:\n+\n    *  relevance\n    *  last_access_timestamp [asc|desc]: defaults to descending.\n    *  last_modified_timestamp [asc|desc]: defaults to descending.\n+\nTo order by last modified timestamp ascending, specify:\n`--order-by=\"last_modified_timestamp desc\"`",
          args: { name: "ORDER_BY", description: "String", suggestions: [] },
        },
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page",
          args: {
            name: "PAGE_SIZE",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag11637,
        flag11946,
        {
          name: "--restricted-locations",
          description: "List of locations to search within",
          args: { name: "LOCATION", description: "List", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "QUERY",
        description:
          "Query string in search query syntax in Data Catalog. For more\ninformation, see:\nhttps://cloud.google.com/data-catalog/docs/how-to/search-reference",
      },
    },
    {
      name: "tag-templates",
      description: "*(DEPRECATED)*  Manage tag templates in Data Catalog",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "*(DEPRECATED)*  Add IAM policy binding to a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6818,
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
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
        {
          name: "create",
          description: "*(DEPRECATED)*  Create a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "Human-readable name for the tag template",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--field",
              description:
                "Specification for a tag template field. This flag can be repeated to\nspecify multiple fields. The following keys are allowed:\n+\n  *id*::: (Required) ID of the tag template field.\n+\n  *type*::: (Required) Type of the tag template field. Choices are\n      double, string, bool, timestamp, and enum.\n+\n            To specify a string field:\n              `type=string`\n+\n            To specify an enum field with values 'A' and 'B':\n              `type=enum(A|B)`\n+\n  *display-name*::: Display name of the tag template field.\n+\n  *required*::: Indicates if the tag template field is required.\n      Defaults to FALSE",
              args: {
                name: "id=ID,type=TYPE,display-name=DISPLAY_NAME,required=REQUIRED",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6818,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
        {
          name: "delete",
          description: "*(DEPRECATED)*  Delete a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If True, any tags with this tag template will be deleted",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6818,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
        {
          name: "describe",
          description: "*(DEPRECATED)*  Describe a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6818,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
        {
          name: "fields",
          description:
            "*(DEPRECATED)*  Manage tag template fields in Data Catalog",
          subcommands: [
            {
              name: "create",
              description:
                "*(DEPRECATED)*  Create a Data Catalog tag template field",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3751,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6817,
                flag7356,
                flag11637,
                flag11946,
                flag14612,
                flag14975,
                {
                  name: "--type",
                  description:
                    "Type of the tag template field. Choices are double, string, bool, timestamp, and enum.\n+\n  To specify a string field:\n    `type=string`\n+\n  To specify an enum field with values 'A' and 'B':\n    `type=\"enum(A|B)\"`",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "*(DEPRECATED)*  Delete a Data Catalog tag template field",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                {
                  name: "--force",
                  description:
                    "If True, this tag template field will be deleted from any existing tags",
                },
                flag5091,
                flag5453,
                flag5699,
                flag6817,
                flag7356,
                flag11637,
                flag11946,
                flag14612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line",
              },
            },
            {
              name: "enum-values",
              description:
                "*(DEPRECATED)*  Manage tag template enum values in Data Catalog",
              subcommands: [
                {
                  name: "rename",
                  description:
                    "*(DEPRECATED)*  Rename an enum value in Data Catalog tag template enum field",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    {
                      name: "--field",
                      description:
                        "Tag template field that contains enum value.\n+\n\nTo set the `field` attribute:\n* provide the argument `enum_value` on the command line with a fully specified name;\n* provide the argument `--field` on the command line",
                      args: {
                        name: "FIELD",
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
                      name: "--location",
                      description:
                        "Location of the enum value.\n+\n\nTo set the `location` attribute:\n* provide the argument `enum_value` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    {
                      name: "--new-id",
                      description: "New display name of the enum value",
                      args: {
                        name: "NEW_ID",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag11637,
                    flag11946,
                    {
                      name: "--tag-template",
                      description:
                        "Tag template that contains enum value.\n+\n\nTo set the `tag-template` attribute:\n* provide the argument `enum_value` on the command line with a fully specified name;\n* provide the argument `--tag-template` on the command line",
                      args: {
                        name: "TAG_TEMPLATE",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "ENUM_VALUE",
                    description:
                      "ID of the enum value or fully qualified identifier for the enum value.\n+\nTo set the `enum_value` attribute:\n* provide the argument `enum_value` on the command line",
                  },
                },
              ],
            },
            {
              name: "rename",
              description:
                "*(DEPRECATED)*  Rename a Data Catalog tag template field",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6817,
                flag7356,
                {
                  name: "--new-id",
                  description: "New ID of the tag template field",
                  args: {
                    name: "NEW_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line",
              },
            },
            {
              name: "update",
              description:
                "*(DEPRECATED)*  Update a Data Catalog tag template field",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3751,
                {
                  name: "--enum-values",
                  description:
                    "Comma-separated list of enum values. The list of enum values passed with this flag replaces the existing one in tag template enum field. That means:\n- the enum values passed to the flag and not present in tag template enum field get created\n- the enum values present in tag template enum field and missing in the list get removed\n- the order of the items on the list is preserved\n+\nEnum values can only be removed from optional enum fields for now",
                  args: {
                    name: "ENUM_VALUES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6817,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--required",
                  description:
                    "Indicates if the tag template field is required. Updating from FALSE (optional) to TRUE (required) is NOT allowed",
                },
                flag14612,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "FIELD",
                description:
                  "ID of the tag template field or fully qualified identifier for the tag template field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line",
              },
            },
          ],
        },
        {
          name: "get-iam-policy",
          description:
            "*(DEPRECATED)*  Get the IAM policy for a Data Catalog tag template",
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
            flag6818,
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
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "*(DEPRECATED)*  Remove IAM policy binding from a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6818,
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
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "*(DEPRECATED)*  Set the IAM policy for a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6818,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TAG_TEMPLATE",
              description:
                "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
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
          description: "*(DEPRECATED)*  Update a Data Catalog tag template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "New human-readable name for the tag template",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6818,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG_TEMPLATE",
            description:
              "ID of the tag template or fully qualified identifier for the tag template.\n+\nTo set the `tag_template` attribute:\n* provide the argument `tag_template` on the command line",
          },
        },
      ],
    },
    {
      name: "tags",
      description: "*(DEPRECATED)*  Manage tags in Data Catalog",
      subcommands: [
        {
          name: "create",
          description: "*(DEPRECATED)*  Create a Data Catalog entry tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4461,
            flag4440,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6780,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--scope",
              description:
                "Scope within the parent resource that the tag is attached to. Scopes\nallow users to attach tags to individual columns based on the parent\nresource's schema. To attach a tag to a nested column, use '.' to\nseparate the column names: 'outer_column.inner_column'",
              args: { name: "SCOPE", description: "String", suggestions: [] },
            },
            {
              name: "--tag-file",
              description:
                'Path to a JSON or YAML file containing the tag.\n+\nThe file should contain a JSON/YAML object with a key and value\nfor each field that should be set. See $ gcloud topic datetimes\nfor information on how to specify timestamp fields.\n+\nFor example:\n+\n    {\n      "dbl_field": 123,\n      "str_field": "String",\n      "bool_field": true,\n      "ts_field": "1970-01-01T00:00:00.000Z",\n      "enum_field": "ENUM_A",\n    }',
              args: {
                name: "TAG_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag14611,
            flag14609,
            flag14610,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "*(DEPRECATED)*  Delete a Data Catalog entry tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4460,
            flag4442,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6819,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag.\n+\nTo set the `tag` attribute:\n* provide the argument `tag` on the command line",
          },
        },
        {
          name: "list",
          description: "*(DEPRECATED)*  List Data Catalog entry tags",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4461,
            flag4440,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6780,
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
          description: "*(DEPRECATED)*  Update a Data Catalog entry tag",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4460,
            flag4442,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6819,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--tag-file",
              description:
                'Path to a JSON or YAML file containing the tag.\n+\nThe file should contain a JSON/YAML object with a key and value\nfor each field that should be set. See $ gcloud topic datetimes\nfor information on how to specify timestamp fields\n+\nFor example:\n+\n    {\n      "dbl_field": 123,\n      "str_field": "String",\n      "bool_field": true,\n      "ts_field": "1970-01-01T00:00:00.000Z",\n      "enum_field": "ENUM_A",\n    }',
              args: {
                name: "TAG_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag14611,
            flag14609,
            flag14610,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAG",
            description:
              "ID of the tag or fully qualified identifier for the tag.\n+\nTo set the `tag` attribute:\n* provide the argument `tag` on the command line",
          },
        },
      ],
    },
    {
      name: "taxonomies",
      description: "Manage taxonomies in Data Catalog",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a Policy Tag Taxonomy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6823,
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
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy.\n+\nTo set the `taxonomy` attribute:\n* provide the argument `taxonomy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Policy Tag Taxonomy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6823,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy.\n+\nTo set the `taxonomy` attribute:\n* provide the argument `taxonomy` on the command line",
          },
        },
        {
          name: "export",
          description: "Export a list of taxonomies from a certain project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6692,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAXONOMIES",
            description: "List of taxonomies to bring",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Policy Tag Taxonomy",
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
            flag6823,
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
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy.\n+\nTo set the `taxonomy` attribute:\n* provide the argument `taxonomy` on the command line",
          },
        },
        {
          name: "import",
          description:
            "Export a file with serialized taxonomies to a certain project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6692,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TAXONOMIES",
            description: "File containing serialized taxonomy",
          },
        },
        {
          name: "list",
          description: "List Cloud Policy Tag Taxonomies",
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
        {
          name: "policy-tags",
          description: "Manage policy tags in Data Catalog",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Add an IAM policy binding to a Data Catalog policy tag",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6804,
                flag7356,
                flag7749,
                flag11637,
                flag11946,
                flag13137,
                flag14786,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag.\n+\nTo set the `policy_tag` attribute:\n* provide the argument `policy_tag` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Policy Tag Manager Policy tag",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6804,
                flag7356,
                flag11637,
                flag11946,
                flag14786,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag.\n+\nTo set the `policy_tag` attribute:\n* provide the argument `policy_tag` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description: "Get the IAM policy for a Data Catalog Policy Tag",
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
                flag6804,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14786,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag.\n+\nTo set the `policy_tag` attribute:\n* provide the argument `policy_tag` on the command line",
              },
            },
            {
              name: "list",
              description: "List Cloud Policy Tag Manager policy tags",
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
                    "Location of the taxonomy.\n+\n\nTo set the `location` attribute:\n* provide the argument `--taxonomy` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                {
                  name: "--taxonomy",
                  description:
                    "ID of the taxonomy or fully qualified identifier for the taxonomy.\n+\nTo set the `taxonomy` attribute:\n* provide the argument `--taxonomy` on the command line",
                  args: {
                    name: "TAXONOMY",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "remove-iam-policy-binding",
              description:
                "Remove an IAM policy binding from a Data Catalog policy tag",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6804,
                flag7356,
                flag7753,
                flag11637,
                flag11946,
                flag13138,
                flag14786,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "POLICY_TAG",
                description:
                  "ID of the policy tag or fully qualified identifier for the policy tag.\n+\nTo set the `policy_tag` attribute:\n* provide the argument `policy_tag` on the command line",
              },
            },
            {
              name: "set-iam-policy",
              description: "Set the IAM policy for a Data Catalog Policy Tag",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6804,
                flag7356,
                flag11637,
                flag11946,
                flag14786,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "POLICY_TAG",
                  description:
                    "ID of the policy tag or fully qualified identifier for the policy tag.\n+\nTo set the `policy_tag` attribute:\n* provide the argument `policy_tag` on the command line",
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
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding from a policy tag taxonomy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6823,
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
            name: "TAXONOMY",
            description:
              "ID of the taxonomy or fully qualified identifier for the taxonomy.\n+\nTo set the `taxonomy` attribute:\n* provide the argument `taxonomy` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Policy Tag taxonomy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6823,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TAXONOMY",
              description:
                "ID of the taxonomy or fully qualified identifier for the taxonomy.\n+\nTo set the `taxonomy` attribute:\n* provide the argument `taxonomy` on the command line",
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
  ],
};

export default completionSpec;
