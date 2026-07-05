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
const flag1454: Fig.Option = {
  name: "--class-type",
  description:
    "The class type of the Looker instance. _CLASS_TYPE_ must be one of: *p1*, *r1*",
  args: {
    name: "CLASS_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["p1", "r1"],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2999: Fig.Option = {
  name: "--deny-maintenance-period-end-date",
  description: "End date of the deny maintenance period in format: YYYY-MM-DD",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_END_DATE",
    description: "String",
    suggestions: [],
  },
};
const flag3002: Fig.Option = {
  name: "--deny-maintenance-period-start-date",
  description:
    "Start date of the deny maintenance period in format: YYYY-MM-DD",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_START_DATE",
    description: "String",
    suggestions: [],
  },
};
const flag3003: Fig.Option = {
  name: "--deny-maintenance-period-time",
  description:
    "Time in UTC when the period starts and ends.  A valid time of day must be\nspecified in 24hr format (ex: 13:00, 17:30, 23:45)",
  args: {
    name: "DENY_MAINTENANCE_PERIOD_TIME",
    description: "String",
    suggestions: [],
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
const flag5916: Fig.Option = {
  name: "--instance",
  description:
    "The name of the Looker instance.\n+\nTo set the `instance` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--instance` on the command line",
  args: { name: "INSTANCE", description: "String", suggestions: [] },
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
const flag11824: Fig.Option = {
  name: "--psc-allowed-vpcs",
  description: "List of VPCs that are allowed ingress into the Looker instance",
  args: { name: "PSC_ALLOWED_VPCS", description: "List", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12375: Fig.Option = {
  name: "--region",
  description:
    "The region of the instance.\n+\nTo set the `region` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12399: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `looker/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12444: Fig.Option = {
  name: "--region",
  description:
    "The name of the Looker region of the backup. Overrides the default\nlooker/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `looker/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12446: Fig.Option = {
  name: "--region",
  description:
    "The name of the Looker region of the instance. Overrides the default\nlooker/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `looker/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12447: Fig.Option = {
  name: "--region",
  description:
    "The name of the Looker region of the operation. Overrides the default\nlooker/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `looker/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
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
  name: "looker",
  description: "Manage Looker resources",
  subcommands: [
    {
      name: "backups",
      description: "Manage Looker instances",
      subcommands: [
        {
          name: "create",
          description: "Create a backup of a Looker instance",
          options: [
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
              name: "--instance",
              description:
                "ID of the instance or fully qualified identifier for the instance.\nTo set the instance attribute:\n+\n- provide the argument --instance on the command line",
              args: {
                name: "INSTANCE",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "The name of the Looker region of the instance. Overrides the\ndefault looker/region property value for this command invocation",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a backup of a Looker instance",
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
            flag5916,
            flag7356,
            flag11637,
            flag11946,
            flag12444,
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
          description: "Show metadata of a backup for a Looker instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5916,
            flag7356,
            flag11637,
            flag11946,
            flag12444,
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
          description: "List backups of a Looker instance",
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
              name: "--instance",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--instance` on the command line",
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
            {
              name: "--region",
              description:
                "The name of the Looker region of the instance. Overrides the default\nlooker/region property value for this command invocation.\n+\n\nTo set the `region` attribute:\n* provide the argument `--instance` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `looker/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
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
      name: "instances",
      description: "Manage Looker instances",
      subcommands: [
        {
          name: "create",
          description: "Create a Looker instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--catalog-integration-opt-out",
              description:
                "If specified, catalog integration will be disabled, otherwise it will be enabled by default",
            },
            flag1454,
            flag2292,
            {
              name: "--consumer-network",
              description:
                "The network name within the consumer project. This MUST be delared if enabling private IP",
              args: {
                name: "CONSUMER_NETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag2999,
            flag3002,
            flag3003,
            {
              name: "--edition",
              description:
                "The edition of the Looker instance. _EDITION_ must be one of:\n+\n*core-embed-annual*::: A Looker (Google Cloud core) product for deploying and maintaining external analytics and\ncustom applications at scale. This can be purchased via an annual contract.\n+\n*core-enterprise-annual*::: A Looker (Google Cloud core) product with enhanced security features for a wide variety of\ninternal BI and analytics use cases. This can be purchased via an annual contract.\n+\n*core-standard*::: A Looker (Google Cloud core) product for small organizations or teams with fewer than 50\nusers. This will be billed monthly while the instance is active.\n+\n*core-standard-annual*::: A Looker (Google Cloud core) product for small organizations or teams with fewer than 50\nusers. This can be purchased via an annual contract.\n+\n*core-trial*::: Trial edition of Looker.\n+\n*core-trial-embed*::: An embed trial edition of Looker (Google Cloud core) product.\n+\n*core-trial-enterprise*::: An enterprise trial edition of Looker (Google Cloud core) product.\n+\n*core-trial-standard*::: A standard trial edition of Looker (Google Cloud core) product.\n+\n*nonprod-core-embed-annual*::: A non-production edition of Looker (Google Cloud core) product for deploying and maintaining external analytics and\ncustom applications at scale. This can be purchased via an annual contract.\n+\n*nonprod-core-enterprise-annual*::: A non-production edition of Looker (Google Cloud core) product with enhanced security features for a wide variety of\ninternal BI and analytics use cases. This can be purchased via an annual contract.\n+\n*nonprod-core-standard-annual*::: A non-production edition of Looker (Google Cloud core) product for small organizations or teams with fewer than 50\nusers. This can be purchased via an annual contract.\n+\n:::\n+",
              args: {
                name: "EDITION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "core-embed-annual",
                  "core-enterprise-annual",
                  "core-standard",
                  "core-standard-annual",
                  "core-trial",
                  "core-trial-embed",
                  "core-trial-enterprise",
                  "core-trial-standard",
                  "nonprod-core-embed-annual",
                  "nonprod-core-enterprise-annual",
                  "nonprod-core-standard-annual",
                ],
              },
            },
            {
              name: "--fips-enabled",
              description:
                "This specifies whether FIPS is enabled on the Looker instance",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kms-key",
              description:
                "ID of the key or fully qualified identifier for the key. To\nset the *kms-key* attribute:\n* provide the argument *--kms-key* on the command line",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            flag7356,
            {
              name: "--maintenance-window-day",
              description:
                "Day of week for maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            {
              name: "--maintenance-window-time",
              description:
                "Hour of day for maintenance window, in UTC time zone. A valid time of day must be\nspecified in 24hr format (ex: 13:00, 17:30, 23:45). Maintenance will be scheduled\nwithin 60 minutes",
              args: {
                name: "MAINTENANCE_WINDOW_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oauth-client-id",
              description:
                "The client ID from an external OAuth application.\n+\nOAuth Application Credentials - Looker Instance OAuth login settings. Setup an OAuth\napp that will allow users to authenticate and access the instance. For more\ninformation see: https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred",
              args: {
                name: "OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oauth-client-secret",
              description:
                "The client secret from an external OAuth application.\n+\nOAuth Application Credentials - Looker Instance OAuth login settings. Setup an OAuth\napp that will allow users to authenticate and access the instance. For more\ninformation see: https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred",
              args: {
                name: "OAUTH_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--private-ip-enabled",
              description:
                "This specifies whether private IP (PSA) is enabled on the Looker instance.\nThis flag is for creating a PSA (Private Service Access) instance",
            },
            flag11637,
            flag11824,
            {
              name: "--psc-enabled",
              description:
                "This specifies whether Private Service Connect (PSC) is enabled on the Looker instance",
            },
            {
              name: "--public-ip-enabled",
              description:
                "This specifies whether public IP is enabled on the Looker instance. Enabled by default, use *--no-public-ip-enabled* to disable",
            },
            flag11946,
            flag12446,
            {
              name: "--reserved-range",
              description:
                "The name of a reserved IP address range within the consumer network to be used for private\nservice access connection",
              args: {
                name: "RESERVED_RANGE",
                description: "String",
                suggestions: [],
              },
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
          description: "Delete a Looker instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            { name: "--force", description: "Force delete an instance" },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12446,
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
          name: "describe",
          description: "Show metadata for a Looker instance",
          options: [
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
            flag12446,
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
          name: "export",
          description: "Export a Looker instance",
          options: [
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
              name: "--kms-key",
              description: "Fully qualified identifier (name) for the key",
              args: { name: "KMS_KEY", description: "String", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12375,
            {
              name: "--target-gcs-uri",
              description:
                "The path to the folder in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/folderName`. The Looker Service Agent should have the role Storage Object Creator",
              args: {
                name: "TARGET_GCS_URI",
                description: "String",
                suggestions: [],
              },
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
          name: "import",
          description: "Import a Looker instance",
          options: [
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
            flag12375,
            {
              name: "--source-gcs-uri",
              description:
                "The path to the folder in Google Cloud Storage where the import will be retrieved from. The URI is in the form `gs://bucketName/folderName`",
              args: {
                name: "SOURCE_GCS_URI",
                description: "String",
                suggestions: [],
              },
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
          name: "list",
          description: "List Looker instances",
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
            flag12399,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "restart",
          description: "Restart a Looker instance",
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
            flag12446,
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
          name: "restore",
          description: "Restore a Looker instance from a backup",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup",
              description:
                "The ID of the backup instance in the format\nprojects/{project}/locations/{location}/instances/{instance}/backups/{backup}",
              args: { name: "BACKUP", description: "String", suggestions: [] },
            },
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
            flag12446,
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
          name: "update",
          description: "Update a Looker instance",
          options: [
            flag42,
            flag46,
            {
              name: "--add-developer-users",
              description:
                "Number of additional Developer Users to allocate to the Looker Instance",
              args: {
                name: "ADD_DEVELOPER_USERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--add-standard-users",
              description:
                "Number of additional Standard Users to allocate to the Looker Instance",
              args: {
                name: "ADD_STANDARD_USERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--add-viewer-users",
              description:
                "Number of additional Viewer Users to allocate to the Looker Instance",
              args: {
                name: "ADD_VIEWER_USERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--allowed-email-domains",
              description:
                "This specifies the entire allowed email domain list",
              args: {
                name: "ALLOWED_EMAIL_DOMAINS",
                description: "List",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--catalog-integration-opt-out",
              description:
                "If specified, catalog integration will be disabled. Use `--no-catalog-integration-opt-out` to re-enable it",
            },
            flag1454,
            {
              name: "--clear-periodic-export-config",
              description:
                "Clears all periodic export configuration from the instance",
            },
            {
              name: "--clear-psc-allowed-vpcs",
              description:
                "Remove all service attachments from the PSC config of the instance",
            },
            {
              name: "--clear-psc-service-attachments",
              description:
                "Remove all allowed VPCs from the PSC config of the instance",
            },
            flag2292,
            {
              name: "--custom-domain",
              description: "Domain name wanted to serve the Looker instance",
              args: {
                name: "CUSTOM_DOMAIN",
                description: "String",
                suggestions: [],
              },
            },
            flag2999,
            flag3002,
            flag3003,
            {
              name: "--egress-enabled",
              description:
                "This specifies whether controlled egress is enabled on the Looker instance. To disable controlled egress,\nuse the `--no-egress-enabled` flag",
            },
            {
              name: "--egress-fqdns",
              description:
                'List of FQDNs that are allowed to egress from the Looker instance. Example: `--egress-fqdns="github.com,my.salesforce.com"`. To clear all egress FQDNs, use `--egress-fqdns=""`',
              args: {
                name: "EGRESS_FQDNS",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--linked-lsp-project-number",
              description: "The Looker Studio Pro project number to be linked",
              args: {
                name: "LINKED_LSP_PROJECT_NUMBER",
                description: "Int",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--maintenance-window-day",
              description:
                "Day of the week for the maintenance window, in UTC time zone. _MAINTENANCE_WINDOW_DAY_ must be one of: *friday*, *monday*, *saturday*, *sunday*, *thursday*, *tuesday*, *wednesday*",
              args: {
                name: "MAINTENANCE_WINDOW_DAY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "friday",
                  "monday",
                  "saturday",
                  "sunday",
                  "thursday",
                  "tuesday",
                  "wednesday",
                ],
              },
            },
            {
              name: "--maintenance-window-time",
              description:
                "Hour of day for maintenance window, in UTC time zone. A valid time of day must be\nspecified in 24hr format (ex: 13:00, 17:30, 23:45). Maintenance will be scheduled\nwithin 60 minutes. To set the maintenance-window-time* attribute:\n* provide the argument *--maintenance-window-time* on the command line",
              args: {
                name: "MAINTENANCE_WINDOW_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--marketplace-enabled",
              description:
                "This specifies whether marketplace is enabled for controlled egress on the Looker instance. To disable marketplace for controlled egress,\nuse the `--no-marketplace-enabled` flag",
            },
            {
              name: "--oauth-client-id",
              description: "The client ID from an external OAuth application",
              args: {
                name: "OAUTH_CLIENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--oauth-client-secret",
              description:
                "The client secret from an external OAuth application",
              args: {
                name: "OAUTH_CLIENT_SECRET",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--periodic-export-gcs-uri",
              description:
                "Cloud Storage bucket URI for periodic export.\nFormat: gs://{bucket_name}",
              args: {
                name: "PERIODIC_EXPORT_GCS_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--periodic-export-kms-key",
              description:
                "Name of the CMEK key in KMS.\nFormat: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}",
              args: {
                name: "PERIODIC_EXPORT_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--periodic-export-start-time",
              description:
                "Time in UTC when the periodic export job starts. A valid time of day must be\nspecified in 24hr format (ex: 13:00, 17:30, 23:45)",
              args: {
                name: "PERIODIC_EXPORT_START_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11824,
            {
              name: "--psc-service-attachment",
              description:
                'Service attachments representing egress connections for the Looker instance.\nThis flag can be repeated.\n(Example: --psc-service-attachment domain="mydomain.com",attachment="projects/my-project/regions/us-east1/serviceAttachments/sa" --psc-service-attachments domain="mydomain2.com",attachment="projects/my-project/regions/us-east1/serviceAttachments/sa2")\n+\nYou can also assign multiple domains to a single service attachment.\n(Example: --psc-service-attachment multiple-domains="mydomain.com;mydomain2.com",attachment="projects/my-project/regions/us-east1/serviceAttachments/sa")',
              args: {
                name: "PSC_SERVICE_ATTACHMENT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            {
              name: "--public-ip-enabled",
              description:
                "This specifies whether public IP is enabled on the Looker instance",
            },
            flag11946,
            flag12446,
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
      name: "operations",
      description: "Manage Looker operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Looker import or export operation",
          options: [
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
            flag12447,
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
          description: "Show metadata for a Looker operation",
          options: [
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
            flag12447,
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
          description: "List Looker operations",
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
            flag12399,
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
      name: "regions",
      description: "Manage Looker regions",
      subcommands: [
        {
          name: "list",
          description: "List Looker regions",
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
};

export default completionSpec;
