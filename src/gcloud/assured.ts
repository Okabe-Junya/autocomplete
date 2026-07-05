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
const flag6927: Fig.Option = {
  name: "--location",
  description:
    "The location for the violation.\n+\nTo set the `location` attribute:\n* provide the argument `violation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6938: Fig.Option = {
  name: "--location",
  description:
    "The location for the workload.\n+\nTo set the `location` attribute:\n* provide the argument `workload` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7021: Fig.Option = {
  name: "--location",
  description:
    "The location of the Assured Workloads environments. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10901: Fig.Option = {
  name: "--organization",
  description:
    "The parent organization for the violation.\n+\nTo set the `organization` attribute:\n* provide the argument `violation` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10902: Fig.Option = {
  name: "--organization",
  description:
    "The parent organization for the workload.\n+\nTo set the `organization` attribute:\n* provide the argument `workload` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10903: Fig.Option = {
  name: "--organization",
  description:
    "The parent organization of the Assured Workloads environments, provided as an organization ID",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
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
const flag15653: Fig.Option = {
  name: "--workload",
  description:
    "The workload for the violation.\n+\nTo set the `workload` attribute:\n* provide the argument `violation` on the command line with a fully specified name;\n* provide the argument `--workload` on the command line",
  args: { name: "WORKLOAD", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "assured",
  description: "Read and manipulate Assured Workloads data controls",
  subcommands: [
    {
      name: "operations",
      description: "Read and manipulate Assured Workloads operation resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe Assured Workloads operations",
          options: [
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
                "The location for the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "The parent organization for the operation.\n+\nTo set the `organization` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
              args: {
                name: "ORGANIZATION",
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
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Assured Workloads operations that belong to a given parent organization",
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
                "The location of the Assured Workloads operations. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "The parent organization of the Assured Workloads operations, provided as an organization ID",
              args: {
                name: "ORGANIZATION",
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
      name: "workloads",
      description: "Read and manipulate Assured Workloads resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new Assured Workloads environment",
          options: [
            flag42,
            flag46,
            {
              name: "--billing-account",
              description:
                "The billing account of the new Assured Workloads environment, for example, billingAccounts/0000AA-AAA00A-A0A0A0",
              args: {
                name: "BILLING_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--compliance-regime",
              description:
                "The compliance regime of the new Assured Workloads environment. _COMPLIANCE_REGIME_ must be one of: *assured-workloads-for-partners*, *au-regions-and-us-support*, *australia-data-boundary-and-support*, *ca-protected-b*, *ca-regions-and-support*, *canada-controlled-goods*, *canada-data-boundary-and-support*, *cjis*, *data-boundary-for-canada-controlled-goods*, *data-boundary-for-canada-protected-b*, *data-boundary-for-cjis*, *data-boundary-for-fedramp-high*, *data-boundary-for-fedramp-moderate*, *data-boundary-for-il2*, *data-boundary-for-il4*, *data-boundary-for-il5*, *data-boundary-for-irs-publication-1075*, *data-boundary-for-itar*, *eu-data-boundary-and-support*, *eu-regions-and-support*, *fedramp-high*, *fedramp-moderate*, *healthcare-and-life-sciences-controls*, *healthcare-and-life-sciences-controls-us-support*, *hipaa*, *hitrust*, *il2*, *il4*, *il5*, *irs-1075*, *isr-regions*, *isr-regions-and-support*, *israel-data-boundary-and-support*, *itar*, *japan-data-boundary*, *jp-regions-and-support*, *ksa-data-boundary-with-access-justifications*, *ksa-regions-and-support-with-sovereignty-controls*, *regional-controls*, *regional-data-boundary*, *switzerland-data-boundary-with-access-justifications*, *us-data-boundary-and-support*, *us-data-boundary-for-healthcare-and-life-sciences*, *us-data-boundary-for-healthcare-and-life-sciences-with-support*, *us-regional-access*",
              args: {
                name: "COMPLIANCE_REGIME",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "assured-workloads-for-partners",
                  "au-regions-and-us-support",
                  "australia-data-boundary-and-support",
                  "ca-protected-b",
                  "ca-regions-and-support",
                  "canada-controlled-goods",
                  "canada-data-boundary-and-support",
                  "cjis",
                  "data-boundary-for-canada-controlled-goods",
                  "data-boundary-for-canada-protected-b",
                  "data-boundary-for-cjis",
                  "data-boundary-for-fedramp-high",
                  "data-boundary-for-fedramp-moderate",
                  "data-boundary-for-il2",
                  "data-boundary-for-il4",
                  "data-boundary-for-il5",
                  "data-boundary-for-irs-publication-1075",
                  "data-boundary-for-itar",
                  "eu-data-boundary-and-support",
                  "eu-regions-and-support",
                  "fedramp-high",
                  "fedramp-moderate",
                  "healthcare-and-life-sciences-controls",
                  "healthcare-and-life-sciences-controls-us-support",
                  "hipaa",
                  "hitrust",
                  "il2",
                  "il4",
                  "il5",
                  "irs-1075",
                  "isr-regions",
                  "isr-regions-and-support",
                  "israel-data-boundary-and-support",
                  "itar",
                  "japan-data-boundary",
                  "jp-regions-and-support",
                  "ksa-data-boundary-with-access-justifications",
                  "ksa-regions-and-support-with-sovereignty-controls",
                  "regional-controls",
                  "regional-data-boundary",
                  "switzerland-data-boundary-with-access-justifications",
                  "us-data-boundary-and-support",
                  "us-data-boundary-for-healthcare-and-life-sciences",
                  "us-data-boundary-for-healthcare-and-life-sciences-with-support",
                  "us-regional-access",
                ],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description:
                "The display name of the new Assured Workloads environment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-sovereign-controls",
              description:
                "If true, enable sovereign controls for the new Assured Workloads environment, currently only supported by EU_REGIONS_AND_SUPPORT",
              args: {
                name: "ENABLE_SOVEREIGN_CONTROLS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--external-identifier",
              description:
                "The external identifier of the new Assured Workloads environment",
              args: {
                name: "EXTERNAL_IDENTIFIER",
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
              name: "--labels",
              description:
                "The labels of the new Assured Workloads environment, for example, LabelKey1=LabelValue1,LabelKey2=LabelValue2",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--location",
              description:
                "The location of the new Assured Workloads environment. For a current list of supported LOCATION values, see [Assured Workloads locations](https://cloud.google.com/assured-workloads/docs/locations)",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--next-rotation-time",
              description:
                "The next rotation time of the KMS settings of new Assured Workloads environment, for example, 2020-12-30T10:15:30.00Z",
              args: {
                name: "NEXT_ROTATION_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--organization",
              description:
                "The parent organization of the new Assured Workloads environment, provided as an organization ID",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--partner",
              description:
                "The partner choice when creating a workload managed by local trusted partners. _PARTNER_ must be one of: *local-controls-by-s3ns*, *sovereign-controls-by-cntxt*, *sovereign-controls-by-cntxt-no-ekm*, *sovereign-controls-by-psn*, *sovereign-controls-by-sia-minsait*, *sovereign-controls-by-t-systems*, *spain-data-boundary-by-telefonica*",
              args: {
                name: "PARTNER",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "local-controls-by-s3ns",
                  "sovereign-controls-by-cntxt",
                  "sovereign-controls-by-cntxt-no-ekm",
                  "sovereign-controls-by-psn",
                  "sovereign-controls-by-sia-minsait",
                  "sovereign-controls-by-t-systems",
                  "spain-data-boundary-by-telefonica",
                ],
              },
            },
            {
              name: "--partner-permissions",
              description:
                "The partner permissions for the partner regime, for example, data-logs-viewer=true/false",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--partner-services-billing-account",
              description:
                "Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC",
              args: {
                name: "PARTNER_SERVICES_BILLING_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--provisioned-resources-parent",
              description:
                "The parent of the provisioned projects, for example, folders/{FOLDER_ID}",
              args: {
                name: "PROVISIONED_RESOURCES_PARENT",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--resource-settings",
              description:
                "A comma-separated, key=value map of custom resource settings such as custom project ids, for example: consumer-project-id={CONSUMER_PROJECT_ID} Note: Currently only consumer-project-id, consumer-project-name, encryption-keys-project-id, encryption-keys-project-name and keyring-id are supported. The encryption-keys-project-id, encryption-keys-project-name and keyring-id settings can be specified only if KMS settings are provided",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--rotation-period",
              description:
                "The rotation period of the KMS settings of the new Assured Workloads environment, for example, 172800s",
              args: {
                name: "ROTATION_PERIOD",
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
          name: "delete",
          description: "Delete Assured Workloads environment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                'The etag acquired by reading the Assured Workloads environment or AW "resource"',
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6938,
            flag7356,
            flag10902,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe Assured Workloads environment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6938,
            flag7356,
            flag10902,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
          },
        },
        {
          name: "enable-resource-monitoring",
          description:
            "Enables Resource Monitoring for an Assured Workloads environment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6938,
            flag7356,
            flag10902,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Assured Workloads environments that belong to a given parent organization",
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
            flag7021,
            flag7356,
            flag10903,
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
          description: "Update Assured Workloads environments",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description:
                "The new display name of the Assured Workloads environment",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--etag",
              description:
                "The etag acquired by reading the Assured Workloads environment before updating",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                "The new labels of the Assured Workloads environment, for example, LabelKey1=LabelValue1,LabelKey2=LabelValue2",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6938,
            flag7356,
            flag10902,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--violation-notifications-enabled",
              description:
                "The notification setting of the Assured Workloads environment",
              args: {
                name: "VIOLATION_NOTIFICATIONS_ENABLED",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "WORKLOAD",
            description:
              "ID of the workload or fully qualified identifier for the workload.\n+\nTo set the `workload` attribute:\n* provide the argument `workload` on the command line",
          },
        },
        {
          name: "violations",
          description: "Read and list Assured Workloads Violations",
          subcommands: [
            {
              name: "acknowledge",
              description:
                "Acknowledge an existing Assured Workloads compliance violation",
              options: [
                flag42,
                flag46,
                {
                  name: "--acknowledge-type",
                  description:
                    "the acknowledge type for specified violation, which is one of:\n      SINGLE_VIOLATION - to acknowledge specified violation,\n      EXISTING_CHILD_RESOURCE_VIOLATIONS - to acknowledge specified org policy\n      violation and all associated child resource violations",
                  args: {
                    name: "ACKNOWLEDGE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                {
                  name: "--comment",
                  description:
                    "Business justification used added to acknowledge a violation",
                  args: {
                    name: "COMMENT",
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
                flag6927,
                flag7356,
                flag10901,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15653,
              ],
              args: {
                name: "VIOLATION",
                description:
                  "ID of the violation or fully qualified identifier for the violation.\n+\nTo set the `violation` attribute:\n* provide the argument `violation` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an Assured Workloads compliance violation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6927,
                flag7356,
                flag10901,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15653,
              ],
              args: {
                name: "VIOLATION",
                description:
                  "ID of the violation or fully qualified identifier for the violation.\n+\nTo set the `violation` attribute:\n* provide the argument `violation` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List all Assured Workloads violations that belong to a assured workloads environment",
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
                flag7021,
                flag7356,
                flag10903,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                {
                  name: "--workload",
                  description:
                    "The parent workload of the Assured Workloads violations, provided as workload ID",
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
};

export default completionSpec;
