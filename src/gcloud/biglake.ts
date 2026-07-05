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
const flag1396: Fig.Option = {
  name: "--catalog",
  description:
    "The Iceberg Catalog for the resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `--namespace` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1397: Fig.Option = {
  name: "--catalog",
  description:
    "The Iceberg Catalog for the resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `namespace` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1398: Fig.Option = {
  name: "--catalog",
  description:
    "The Iceberg Catalog for the resource.\n+\nTo set the `catalog` attribute:\n* provide the argument `table` on the command line with a fully specified name;\n* provide the argument `--catalog` on the command line",
  args: { name: "CATALOG", description: "String", suggestions: [] },
};
const flag1825: Fig.Option = {
  name: "--clear-properties",
  description: "Clear all properties from the namespace",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2550: Fig.Option = {
  name: "--credential-mode",
  description:
    "Credential mode to create the catalog with. _CREDENTIAL_MODE_ must be one of:\n+\n*end-user*::: Use end user credentials to access the catalog.\n*vended-credentials*::: Use vended credentials to access the catalog.\n:::\n+",
  args: {
    name: "CREDENTIAL_MODE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["end-user", "vended-credentials"],
  },
};
const flag3232: Fig.Option = {
  name: "--description",
  description: "Description of the resource",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8114: Fig.Option = {
  name: "--namespace",
  description:
    "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `--namespace` on the command line",
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8122: Fig.Option = {
  name: "--namespace",
  description:
    "The Iceberg Namespace for the resource.\n+\nTo set the `namespace` attribute:\n* provide the argument `table` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line",
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
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
const flag12679: Fig.Option = {
  name: "--remove-properties",
  description: "List of properties to remove",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag13070: Fig.Option = {
  name: "--restricted-locations",
  description:
    "Additional Google Cloud Storage buckets and locations (e.g., `gs://my-other-bucket/...`) that are permitted for use by resources within a catalog. This field is currently only used for BigLake catalogs.If `restricted_locations` is empty and unrestricted catalog creation is enabled, all accessible locations are allowed. Otherwise, only `default_location` and locations in this list are allowed",
  args: { name: "LOCATION", description: "List", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15208: Fig.Option = {
  name: "--update-properties",
  description: "List of properties to update or add",
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
  name: "biglake",
  description: "Create and manage Google Cloud BigLake resources",
  subcommands: [
    {
      name: "iceberg",
      description: "Biglake Iceberg REST Catalogs",
      subcommands: [
        {
          name: "catalogs",
          description: "Manage BigLake Iceberg REST catalogs",
          subcommands: [
            {
              name: "create",
              description: "Create a BigLake Iceberg REST catalog",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--catalog-type",
                  description:
                    "Catalog type to create the catalog with. _CATALOG_TYPE_ must be one of:\n+\n*biglake*::: BigLake Iceberg catalog. Catalog type which allows namespaces and tables within a catalog to be mapped to locations beyond the catalog's designated default.\n*gcs-bucket*::: A catalog backed by a Cloud Storage bucket.\n:::\n+",
                  args: {
                    name: "CATALOG_TYPE",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["biglake", "federated", "gcs-bucket"],
                  },
                },
                flag2292,
                flag2550,
                {
                  name: "--default-location",
                  description:
                    "Can only be used with BigLake catalogs. The default storage location for the catalog, e.g., `gs://my-bucket/...`",
                  args: {
                    name: "DEFAULT_LOCATION",
                    description:
                      "Googlecloudsdk.api_lib.biglake.util:GcsBucketLinkValidator",
                    suggestions: [],
                  },
                },
                flag3232,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--primary-location",
                  description:
                    "Primary location for mirroring the remote catalog metadata. It must be a BigLake-supported location, and it should be proximate to the remote catalog's location for better performance and lower cost",
                  args: {
                    name: "PRIMARY_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13070,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a BigLake Iceberg REST catalog",
              options: [
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
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a BigLake Iceberg REST catalog",
              options: [
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
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "failover",
              description: "Failover a BigLake Iceberg REST catalog",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--conditional-failover-replication-time",
                  description:
                    'If not specified, wait for all data from the source region to replicate to the new primary region before completing the failover, with no data loss. If specified, the failover will be executed immediately, accepting data loss of any data commited after the specified timestamp. This timestamp must be in UTC format, e.g. "2025-10-09T01:13:34.038262Z". See `$ gcloud topic datetimes` for more information',
                  args: {
                    name: "CONDITIONAL_FAILOVER_REPLICATION_TIME",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:ParseUtcTime",
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
                  name: "--primary-replica",
                  description: "The primary replica region to failover to",
                  args: {
                    name: "PRIMARY_REPLICA",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "If true, the failover will be validated but not executed",
                },
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a BigLake Iceberg REST catalog",
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
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
            {
              name: "list",
              description: "List BigLake Iceberg REST catalogs",
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
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a BigLake Iceberg REST catalog",
              options: [
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
                  name: "CATALOG",
                  description:
                    "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
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
              description: "Update a BigLake Iceberg REST catalog",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--catalog-type",
                  description:
                    "Catalog type to update the catalog with. Currently only updating to a BigLake catalog type is supported. _CATALOG_TYPE_ must be (only one value is supported):\n+\n*biglake*::: BigLake Iceberg catalog. Catalog type which allows namespaces and tables within a catalog to be mapped to locations beyond the catalog's designated default.\n:::\n+",
                  args: {
                    name: "CATALOG_TYPE",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["biglake"],
                  },
                },
                flag2292,
                flag2550,
                flag3232,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag13070,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CATALOG",
                description:
                  "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `catalog` on the command line",
              },
            },
          ],
        },
        {
          name: "namespaces",
          description: "Manage BigLake Iceberg REST catalog namespaces",
          subcommands: [
            {
              name: "create",
              description: "Create a BigLake Iceberg REST namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1397,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                {
                  name: "--properties",
                  description: "Properties associated with the namespace",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a BigLake Iceberg REST namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1397,
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
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a BigLake Iceberg REST namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1397,
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
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a BigLake Iceberg REST catalog namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1397,
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
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "list",
              description: "List BigLake Iceberg REST namespaces",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--catalog",
                  description:
                    "ID of the catalog or fully qualified identifier for the catalog.\n+\nTo set the `catalog` attribute:\n* provide the argument `--catalog` on the command line",
                  args: {
                    name: "CATALOG",
                    description: "String",
                    suggestions: [],
                  },
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
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a BigLake Iceberg REST catalog namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1397,
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
                  name: "NAMESPACE",
                  description:
                    "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
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
              description: "Update a BigLake Iceberg REST namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1397,
                flag1825,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag12679,
                flag14975,
                flag15208,
                flag15315,
                flag15424,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the namespace or fully qualified identifier for the namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
          ],
        },
        {
          name: "tables",
          description: "Manage BigLake Iceberg REST catalog tables",
          subcommands: [
            {
              name: "create",
              description: "Create a BigLake Iceberg table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1396,
                flag2292,
                {
                  name: "--create-from-file",
                  description:
                    "Path to a JSON file containing the table creation request. The format must follow the Apache Iceberg REST Catalog Open API specification for `CreateTableRequest`. The fields `name` and `schema` must be specified",
                  args: {
                    name: "CREATE_FROM_FILE",
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
                flag8114,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description: "Delete a BigLake Iceberg table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1398,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag8122,
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
              description: "Describe a BigLake Iceberg table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1398,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag8122,
                flag11637,
                flag11946,
                {
                  name: "--snapshots",
                  description: "Snapshot to get",
                  args: {
                    name: "SNAPSHOTS",
                    description: "String",
                    suggestions: [],
                  },
                },
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
              name: "get-iam-policy",
              description:
                "Get the IAM policy for a BigLake Iceberg REST catalog table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1398,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                flag8122,
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
              description: "List BigLake Iceberg REST tables",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1396,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7356,
                flag8114,
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
              description: "Register a BigLake Iceberg table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1398,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--metadata-location",
                  description: "Metadata location of the table",
                  args: {
                    name: "METADATA_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag8122,
                {
                  name: "--overwrite",
                  description: "Overwrite the table if it already exists",
                },
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
              name: "set-iam-policy",
              description:
                "Set the IAM policy for a BigLake Iceberg REST catalog table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1398,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag8122,
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
              name: "update",
              description: "Update a BigLake Iceberg table",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1398,
                flag1825,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag8122,
                flag11637,
                flag11946,
                flag12679,
                flag14975,
                flag15208,
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
    },
  ],
};

export default completionSpec;
