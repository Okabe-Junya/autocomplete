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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag4436: Fig.Option = {
  name: "--entitlement",
  description:
    "ID of the entitlement or fully qualified identifier for the entitlement.\n+\nTo set the `entitlement` attribute:\n* provide the argument `--entitlement` on the command line",
  args: { name: "ENTITLEMENT", description: "String", suggestions: [] },
};
const flag4437: Fig.Option = {
  name: "--entitlement",
  description:
    "The entitlement id\n+\nTo set the `entitlement` attribute:\n* provide the argument `grant` on the command line with a fully specified name;\n* provide the argument `--entitlement` on the command line",
  args: { name: "ENTITLEMENT", description: "String", suggestions: [] },
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
const flag5013: Fig.Option = {
  name: "--folder",
  description:
    "The name of the folder\n+\nTo set the `folder` attribute:\n* provide the argument `--entitlement` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [privilegedaccessmanager.folders.locations.entitlements]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5014: Fig.Option = {
  name: "--folder",
  description:
    "The name of the folder\n+\nTo set the `folder` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [privilegedaccessmanager.folders.locations]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5015: Fig.Option = {
  name: "--folder",
  description:
    "The name of the folder\n+\nTo set the `folder` attribute:\n* provide the argument `entitlement` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [privilegedaccessmanager.folders.locations.entitlements]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5016: Fig.Option = {
  name: "--folder",
  description:
    "The name of the folder\n+\nTo set the `folder` attribute:\n* provide the argument `grant` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [privilegedaccessmanager.folders.locations.entitlements.grants]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5017: Fig.Option = {
  name: "--folder",
  description:
    "The name of the folder\n+\nTo set the `folder` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [privilegedaccessmanager.folders.locations.operations]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
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
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7087: Fig.Option = {
  name: "--location",
  description:
    "The resource location\n+\nTo set the `location` attribute:\n* provide the argument `--entitlement` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7088: Fig.Option = {
  name: "--location",
  description:
    "The resource location\n+\nTo set the `location` attribute:\n* provide the argument `entitlement` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7089: Fig.Option = {
  name: "--location",
  description:
    "The resource location\n+\nTo set the `location` attribute:\n* provide the argument `grant` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7090: Fig.Option = {
  name: "--location",
  description:
    "The resource location\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10868: Fig.Option = {
  name: "--organization",
  description:
    "The name of the organization\n+\nTo set the `organization` attribute:\n* provide the argument `--entitlement` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [privilegedaccessmanager.organizations.locations.entitlements]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10869: Fig.Option = {
  name: "--organization",
  description:
    "The name of the organization\n+\nTo set the `organization` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [privilegedaccessmanager.organizations.locations]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10870: Fig.Option = {
  name: "--organization",
  description:
    "The name of the organization\n+\nTo set the `organization` attribute:\n* provide the argument `entitlement` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [privilegedaccessmanager.organizations.locations.entitlements]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10871: Fig.Option = {
  name: "--organization",
  description:
    "The name of the organization\n+\nTo set the `organization` attribute:\n* provide the argument `grant` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [privilegedaccessmanager.organizations.locations.entitlements.grants]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10872: Fig.Option = {
  name: "--organization",
  description:
    "The name of the organization\n+\nTo set the `organization` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [privilegedaccessmanager.organizations.locations.operations]",
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
  name: "pam",
  description: "Manage Privileged Access Manager (PAM) entitlements and grants",
  subcommands: [
    {
      name: "check-onboarding-status",
      description:
        "Check Privileged Access Manager (PAM) onboarding status for a resource",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag4900,
        flag4902,
        flag5014,
        flag5091,
        flag5453,
        flag5699,
        flag6692,
        flag7356,
        flag10869,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "entitlements",
      description: "Manage Privileged Access Manager (PAM) entitlements",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new Privileged Access Manager (PAM) entitlement",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--entitlement-file",
              description:
                "YAML file containing the configuration of the entitlement. Use a full or relative path to a local file containing the value of entitlement_file",
              args: {
                name: "ENTITLEMENT_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5015,
            flag5091,
            flag5453,
            flag5699,
            flag7088,
            flag7356,
            flag10870,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement.\n+\nTo set the `entitlement` attribute:\n* provide the argument `entitlement` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Privileged Access Manager (PAM) entitlement",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5015,
            flag5091,
            flag5453,
            flag5699,
            flag7088,
            flag7356,
            flag10870,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement.\n+\nTo set the `entitlement` attribute:\n* provide the argument `entitlement` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details of a Privileged Access Manager (PAM) entitlement",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5015,
            flag5091,
            flag5453,
            flag5699,
            flag7088,
            flag7356,
            flag10870,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement.\n+\nTo set the `entitlement` attribute:\n* provide the argument `entitlement` on the command line",
          },
        },
        {
          name: "export",
          description:
            "Export a Privileged Access Manager (PAM) entitlement into a local YAML file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination",
              description:
                "Path to a YAML file where the configuration will be exported.\nThe exported data will not contain any output-only fields.\nAlternatively, you may omit this flag to write to standard output.\nFor a schema describing the export/import format, see\n$CLOUDSDKROOT/lib/googlecloudsdk/schemas/..",
              args: {
                name: "DESTINATION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5015,
            flag5091,
            flag5453,
            flag5699,
            flag7088,
            flag7356,
            flag10870,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement.\n+\nTo set the `entitlement` attribute:\n* provide the argument `entitlement` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Privileged Access Manager (PAM) entitlements under a parent",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5014,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag10869,
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
          name: "search",
          description:
            "Search and list all Privileged Access Manager (PAM) entitlements in a parent for which you are a requester/approver",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--caller-access-type",
              description:
                "Search for entitlements based on whether you are a requester or approver. _CALLER_ACCESS_TYPE_ must be one of: *grant-approver*, *grant-requester*",
              args: {
                name: "CALLER_ACCESS_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["grant-approver", "grant-requester"],
              },
            },
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5014,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag10869,
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
          name: "update",
          description:
            "Update an existing Privileged Access Manager (PAM) entitlement",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--entitlement-file",
              description:
                "YAML file containing the new configuration of the entitlement. Use a full or relative path to a local file containing the value of entitlement_file",
              args: {
                name: "ENTITLEMENT_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5015,
            flag5091,
            flag5453,
            flag5699,
            flag7088,
            flag7356,
            flag10870,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENTITLEMENT",
            description:
              "ID of the entitlement or fully qualified identifier for the entitlement.\n+\nTo set the `entitlement` attribute:\n* provide the argument `entitlement` on the command line",
          },
        },
      ],
    },
    {
      name: "grants",
      description: "Manage Privileged Access Manager (PAM) grants",
      subcommands: [
        {
          name: "approve",
          description: "Approve a Privileged Access Manager (PAM) grant",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4437,
            flag4900,
            flag4902,
            flag5016,
            flag5091,
            flag5453,
            flag5699,
            flag7089,
            flag7356,
            flag10871,
            flag11637,
            flag11946,
            {
              name: "--reason",
              description: "Reason for approving the grant",
              args: { name: "REASON", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant.\n+\nTo set the `grant` attribute:\n* provide the argument `grant` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new Privileged Access Manager (PAM) grant",
          options: [
            flag42,
            flag46,
            {
              name: "--additional-email-recipients",
              description:
                "Additional email addresses that are notified for all actions performed on the grant",
              args: {
                name: "ADDITIONAL_EMAIL_RECIPIENTS",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4436,
            flag4900,
            flag4902,
            flag5013,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--justification",
              description: "Justification for the grant",
              args: {
                name: "JUSTIFICATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7087,
            flag7356,
            flag10868,
            flag11637,
            flag11946,
            {
              name: "--requested-duration",
              description: "Duration of the grant being created",
              args: {
                name: "REQUESTED_DURATION",
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
          name: "deny",
          description: "Deny a Privileged Access Manager (PAM) grant",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4437,
            flag4900,
            flag4902,
            flag5016,
            flag5091,
            flag5453,
            flag5699,
            flag7089,
            flag7356,
            flag10871,
            flag11637,
            flag11946,
            {
              name: "--reason",
              description: "Reason for denying the grant",
              args: { name: "REASON", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant.\n+\nTo set the `grant` attribute:\n* provide the argument `grant` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details of a Privileged Access Manager (PAM) grant",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4437,
            flag4900,
            flag4902,
            flag5016,
            flag5091,
            flag5453,
            flag5699,
            flag7089,
            flag7356,
            flag10871,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant.\n+\nTo set the `grant` attribute:\n* provide the argument `grant` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Privileged Access Manager (PAM) grants associated with an entitlement",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4436,
            flag4849,
            flag4900,
            flag4902,
            flag5013,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7087,
            flag7356,
            flag10868,
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
          name: "revoke",
          description: "Revoke a Privileged Access Manager (PAM) grant",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4437,
            flag4900,
            flag4902,
            flag5016,
            flag5091,
            flag5453,
            flag5699,
            flag7089,
            flag7356,
            flag10871,
            flag11637,
            flag11946,
            {
              name: "--reason",
              description: "Reason for revoking the grant",
              args: { name: "REASON", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GRANT",
            description:
              "ID of the grant or fully qualified identifier for the grant.\n+\nTo set the `grant` attribute:\n* provide the argument `grant` on the command line",
          },
        },
        {
          name: "search",
          description:
            "Search for and list all Privileged Access Manager (PAM) grants you have created, have approved, or can approve",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--caller-relationship",
              description:
                "Whether to return grants you have created, have approved, or can approve. _CALLER_RELATIONSHIP_ must be one of: *can-approve*, *had-approved*, *had-created*",
              args: {
                name: "CALLER_RELATIONSHIP",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["can-approve", "had-approved", "had-created"],
              },
            },
            flag2292,
            flag4436,
            flag4849,
            flag4900,
            flag4902,
            flag5013,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7087,
            flag7356,
            flag10868,
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
      name: "operations",
      description:
        "Manage Privileged Access Manager (PAM) Long Running Operations",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a Privileged Access Manager (PAM) long running operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5017,
            flag5091,
            flag5453,
            flag5699,
            flag7090,
            flag7356,
            flag10872,
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
          name: "describe",
          description:
            "Show details of a Privileged Access Manager (PAM) long running operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5017,
            flag5091,
            flag5453,
            flag5699,
            flag7090,
            flag7356,
            flag10872,
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
            "List all Privileged Access Manager (PAM) long running operations under a location",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5014,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag10869,
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
          name: "wait",
          description:
            "Poll a Privileged Access Manager (PAM) long running operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5017,
            flag5091,
            flag5453,
            flag5699,
            flag7090,
            flag7356,
            flag10872,
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
      ],
    },
  ],
};

export default completionSpec;
