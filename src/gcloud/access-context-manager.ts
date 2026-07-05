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
const flag289: Fig.Option = {
  name: "--add-vpc-allowed-services",
  description: "Append the given values to the current vpc allowed services",
  args: { name: "VPC_SERVICE", description: "List", suggestions: [] },
};
const flag716: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in\n                progress to complete",
};
const flag717: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in\n            progress to complete",
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
const flag1212: Fig.Option = {
  name: "--binding",
  description:
    "ID of the cloud-access-binding or fully qualified identifier for the cloud-access-binding.\n+\nTo set the `binding` attribute:\n* provide the argument `--binding` on the command line",
  args: { name: "BINDING", description: "String", suggestions: [] },
};
const flag1628: Fig.Option = {
  name: "--clear-egress-policies",
  description: "Empties existing enforced Egress Policies",
};
const flag1704: Fig.Option = {
  name: "--clear-ingress-policies",
  description: "Empties existing enforced Ingress Policies",
};
const flag1956: Fig.Option = {
  name: "--clear-vpc-accessible-services",
  description: "Empties existing enforced VpcAccessibleServices",
};
const flag1957: Fig.Option = {
  name: "--clear-vpc-allowed-services",
  description: "Empty the current vpc allowed services",
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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3254: Fig.Option = {
  name: "--description",
  description: "Long-form description of access level",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3255: Fig.Option = {
  name: "--description",
  description: "Long-form description of service perimeter",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag4332: Fig.Option = {
  name: "--enable-vpc-accessible-services",
  description:
    "When specified restrict API calls within the Service Perimeter to the set of vpc allowed services. To disable use '--no-enable-vpc-accessible-services'",
};
const flag4507: Fig.Option = {
  name: "--etag",
  description:
    "An etag which specifies the version of the Access Policy. Only etags\nthat represent the latest version of the Access Policy will be accepted",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4538: Fig.Option = {
  name: "--etag",
  description:
    "The etag for the version of the Access Policy that this\n              operation is to be performed on. If, at the time of the\n              operation, the etag for the Access Policy stored in Access\n              Context Manager is different from the specified etag, then the\n              commit operation will not be performed and the call will fail.\n              If etag is not provided, the operation will be performed as if a\n              valid etag is provided",
  args: { name: "etag", description: "String", suggestions: [] },
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
const flag10866: Fig.Option = {
  name: "--organization",
  description:
    "The ID of the organization.\n+\n\nTo set the `organization` attribute:\n* provide the argument `--binding` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property `access_context_manager/organization`",
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
const flag11364: Fig.Option = {
  name: "--policy",
  description:
    "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag11369: Fig.Option = {
  name: "--policy",
  description:
    "The ID of the access policy.\n+\n\nTo set the `policy` attribute:\n* provide the argument `authorized_orgs_desc` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag11370: Fig.Option = {
  name: "--policy",
  description:
    "The ID of the access policy.\n+\n\nTo set the `policy` attribute:\n* provide the argument `level` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag11371: Fig.Option = {
  name: "--policy",
  description:
    "The ID of the access policy.\n+\n\nTo set the `policy` attribute:\n* provide the argument `perimeter` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
  args: { name: "POLICY", description: "String", suggestions: [] },
};
const flag11374: Fig.Option = {
  name: "--policy",
  description:
    "The ID of the access policy.\n+\nTo set the `policy` attribute:\n* provide the argument `perimeter` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`",
  args: { name: "POLICY", description: "String", suggestions: [] },
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
const flag12759: Fig.Option = {
  name: "--remove-vpc-allowed-services",
  description: "Remove the given values from the current vpc allowed services",
  args: { name: "VPC_SERVICE", description: "List", suggestions: [] },
};
const flag13683: Fig.Option = {
  name: "--set-egress-policies",
  description:
    "Path to a file containing a list of Egress Policies.\n+\nThis file contains a list of YAML-compliant objects representing Egress Policies described in the API reference.\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor more information about non-alpha versions, see: \nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
  args: {
    name: "YAML_FILE",
    description:
      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:ParseVersionedEgressPolicies",
    suggestions: [],
  },
};
const flag13689: Fig.Option = {
  name: "--set-ingress-policies",
  description:
    "Path to a file containing a list of Ingress Policies.\n+\nThis file contains a list of YAML-compliant objects representing Ingress Policies described in the API reference.\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor more information about non-alpha versions, see: \nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
  args: {
    name: "YAML_FILE",
    description:
      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:ParseVersionedIngressPolicies",
    suggestions: [],
  },
};
const flag13711: Fig.Option = {
  name: "--set-vpc-accessible-services",
  description:
    "Path to a file containing a VpcAccessibleServices object.\n+\nThis file contains a YAML-compliant object representing VpcAccessibleServices described in the API reference.\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor more information about non-alpha versions, see: \nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
  args: {
    name: "YAML_FILE",
    description:
      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:_Parse",
    suggestions: [],
  },
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
  name: "access-context-manager",
  description: "Manage Access Context Manager resources",
  subcommands: [
    {
      name: "authorized-orgs",
      description:
        "Manage Access Context Manager authorized organizations descriptions",
      subcommands: [
        {
          name: "create",
          description: "Create a new authorized organizations description",
          options: [
            flag42,
            flag46,
            {
              name: ["--asset-type", "--asset_type"],
              description:
                "The asset type of this authorized organizations description. For example, device, or credential strength. _ASSET_TYPE_ must be one of: *asset-type-credential-strength*, *asset-type-device*, *asset-type-unspecified*",
              args: {
                name: "ASSET_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "asset-type-credential-strength",
                  "asset-type-device",
                  "asset-type-unspecified",
                ],
              },
            },
            flag720,
            {
              name: ["--authorization-direction", "--authorization_direction"],
              description:
                "Authorization direction of this authorization relationship. Specifies whether to allow specified organizations to evaluate this organization's traffic, or allow specified organizations traffic to be evaluated by this org. _AUTHORIZATION_DIRECTION_ must be one of: *authorization-direction-from*, *authorization-direction-to*, *authorization-direction-unspecified*",
              args: {
                name: "AUTHORIZATION_DIRECTION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "authorization-direction-from",
                  "authorization-direction-to",
                  "authorization-direction-unspecified",
                ],
              },
            },
            {
              name: ["--authorization-type", "--authorization_type"],
              description:
                "The authorization type of the authorized organizations description. For example, trust, troubleshooting or logging. _AUTHORIZATION_TYPE_ must be one of: *authorization-type-trust*, *authorization-type-unspecified*",
              args: {
                name: "AUTHORIZATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "authorization-type-trust",
                  "authorization-type-unspecified",
                ],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--orgs",
              description:
                "Comma-separated list of organizations (in the following format: `organizations/<organizationnumber>`)",
              args: { name: "ORGS", description: "List", suggestions: [] },
            },
            flag11369,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized-orgs-desc or fully qualified identifier for the authorized-orgs-desc.\n+\nTo set the `authorized_orgs_desc` attribute:\n* provide the argument `authorized_orgs_desc` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an authorized organizations description",
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
            flag11369,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized-orgs-desc or fully qualified identifier for the authorized-orgs-desc.\n+\nTo set the `authorized_orgs_desc` attribute:\n* provide the argument `authorized_orgs_desc` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Show details about an authorized organizations description",
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
            flag11369,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized-orgs-desc or fully qualified identifier for the authorized-orgs-desc.\n+\nTo set the `authorized_orgs_desc` attribute:\n* provide the argument `authorized_orgs_desc` on the command line",
          },
        },
        {
          name: "list",
          description: "List authorized organizations descriptions",
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
            flag11364,
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
            "Update the organizations for an existing authorized organizations description",
          options: [
            flag42,
            flag46,
            {
              name: "--add-orgs",
              description: "Append the given values to the current orgs",
              args: { name: "ORGS", description: "List", suggestions: [] },
            },
            flag1201,
            { name: "--clear-orgs", description: "Empty the current orgs" },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--policy",
              description:
                "The ID of the access policy.\n+\nTo set the `policy` attribute:\n* provide the argument `authorized_orgs_desc` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`",
              args: { name: "POLICY", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--remove-orgs",
              description: "Remove the given values from the current orgs",
              args: { name: "ORGS", description: "List", suggestions: [] },
            },
            {
              name: "--set-orgs",
              description:
                "Completely replace the current orgs with the given values",
              args: { name: "ORGS", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTHORIZED_ORGS_DESC",
            description:
              "ID of the authorized_orgs_desc or fully qualified identifier for the authorized_orgs_desc.\n+\nTo set the `authorized_orgs_desc` attribute:\n* provide the argument `authorized_orgs_desc` on the command line",
          },
        },
      ],
    },
    {
      name: "cloud-bindings",
      description: "Manage Access Context Manager cloud access bindings",
      subcommands: [
        {
          name: "create",
          description: "Create cloud access bindings for a specific group",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--binding-file",
              description:
                "Path to the file that contains a Google Cloud Platform user access binding.\n+\nThis file contains a YAML-compliant object representing\na GcpUserAccessBinding (as described in the API reference:\nhttps://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups#define_configurations_for_specific_applications)\ncontaining ScopedAccessSettings only.\nNo other binding fields are allowed. For bindings tied to all workforce identities in a\ngiven org, the ScopedAccessSettings must only contain `sessionSettings`\nwithin the `activeSettings` list. No other fields are allowed",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--dry-run-level",
              description:
                "The dry run access level that binds to the given group. The dry run access level will be\nevaluated but won't be enforced. Denial on dry run access level will be logged. The input\nmust be the full identifier of an access level, such as\n`accessPolicies/123/accessLevels/new-def`",
              args: {
                name: "DRY_RUN_LEVEL",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--federated-principal",
              description:
                "IAM federated principal that this binding applies to. Can be a single\nprincipal or a principal set. Used to assign policies to third-party\nworkforce or workload identities. At most one of `--group-key` or\n`--federated-principal` can be specified",
              args: {
                name: "FEDERATED_PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--group-key",
              description:
                "Google Group ID whose members are subject to the restrictions of this\nbinding. At most one of `--group-key` or `--federated-principal` can be\nspecified",
              args: {
                name: "GROUP_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--level",
              description:
                "The access level that binds to the given group. The input must be the full identifier\nof an access level, such as `accessPolicies/123/accessLevels/abc`",
              args: { name: "LEVEL", description: "List", suggestions: [] },
            },
            flag7356,
            {
              name: "--organization",
              description: "Parent organization for this binding",
              args: {
                name: "ORGANIZATION",
                description:
                  "Googlecloudsdk.command_lib.util.hooks.types:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--service-account",
              description:
                "Service account email that this binding applies to. Used to assign\npolicies to a single first-party service account. At most one of\n`--group-key`, `--federated-principal`, `--service-account`, or\n`--service-account-project-number` can be specified",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--service-account-project-number",
              description:
                "Project number of the project that contains the service accounts\nthat are subject to the restrictions of this binding. Used to assign policies to all service\naccounts in a Google Cloud project. At most one of `--group-key`,\n`--federated-principal`, `--service-account`, or\n`--service-account-project-number` can be specified",
              args: {
                name: "SERVICE_ACCOUNT_PROJECT_NUMBER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--session-length",
              description:
                "The maximum lifetime of a user session provided as an  ISO 8601 duration string. Must be at\nleast one hour or zero seconds, and no more than twenty-four hours. Granularity is limited\nto seconds.\n+\nWhen --session-length=0 then users in the group attached to this binding will have infinite\nsession length, effectively disabling the session settings.\n+\nA session begins when a user signs in successfully. If a user signs out before the end of\nthe session lifetime, a new login creates a new session with a fresh lifetime. When a\nsession expires, the user is asked to re-authenticate in accordance with session-method.\n+\nSetting --session-reauth-method when --session-length is empty raises an error",
              args: {
                name: "SESSION_LENGTH",
                description:
                  "Googlecloudsdk.command_lib.accesscontextmanager.cloud_bindings:ProcessSessionLength",
                suggestions: [],
              },
            },
            {
              name: "--session-reauth-method",
              description:
                "Specifies the type of re-authentication challenge given to the user when their session\n expires. Defaults to --session-reauth-method=login if unspecified and --session-length is\n set. Cannot be used when --session-length is empty or 0.\n+\n_SESSION_REAUTH_METHOD_ must be one of:\n+\n*login*::: The user must complete a regular login.\n+\n*password*::: The user will only be required to enter their password.\n+\n*security-key*::: The user must re-autheticate using their security key. Before enabling this session reauth\nmethod, ensure a security key is properly configured for the user. For help configuring\nyour security key, see\nhttps://support.google.com/a/answer/2537800?hl=en#zippy=%2Cview-add-or-remove-security-keys\n+\n:::\n+",
              args: {
                name: "SESSION_REAUTH_METHOD",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["login", "password", "security-key"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a cloud access binding",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1212,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10866,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "describe",
          description: "Show details about a cloud access binding",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1212,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10866,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List cloud access bindings under an organization",
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
            {
              name: "--organization",
              description:
                "ID of the organization or fully qualified identifier for the organization.\n+\nTo set the `organization` attribute:\n* provide the argument `--organization` on the command line;\n* set the property `access_context_manager/organization`",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description:
            "Update a existing cloud access binding under an organization",
          options: [
            flag42,
            flag46,
            {
              name: "--append",
              description:
                "When true, append the `ScopedAccessSettings` in `--binding-file` to the existing\n`ScopedAccessSettings` on the binding. When false, the existing binding's `ScopedAccessSettings`\nwill be overwritten. Defaults to false. You may only append `ScopedAccessSettings` that\nexclusively hold session settings (i.e no access levels)",
            },
            flag1201,
            flag1212,
            {
              name: "--binding-file",
              description:
                "Path to the file that contains a Google Cloud user access binding.\n+\nThis file contains a YAML-compliant object representing\na GcpUserAccessBinding (as described in the API reference) containing `ScopedAccessSettings` only.\nNo other binding fields are allowed.\n+\nThe file content replaces the corresponding fields in the existing binding. Unless --append\nis specified. See --append help text for more details",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--dry-run-level",
              description:
                "The dry run access level that replaces the existing dry run level for the given binding.\nThe input must be the full identifier of an access level, such as\n`accessPolicies/123/accessLevels/new-def`",
              args: {
                name: "DRY_RUN_LEVEL",
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
              name: "--level",
              description:
                "The access level that replaces the existing level for the given binding. The input must\nbe the full identifier of an access level, such as\n`accessPolicies/123/accessLevels/new-abc`",
              args: { name: "LEVEL", description: "List", suggestions: [] },
            },
            flag7356,
            flag10866,
            flag11637,
            flag11946,
            {
              name: "--session-length",
              description:
                "The maximum lifetime of a user session provided as an ISO 8601 duration string. Must be at\nleast one hour or zero seconds, and no more than twenty-four hours. Granularity is limited\nto seconds.\n+\nWhen --session-length=0 then users in the group attached to this binding will have infinite\nsession length, effectively disabling the session settings.\n+\nA session begins when a user signs in successfully. If a user signs out before the end of\nthe session lifetime, a new login creates a new session with a fresh lifetime. When a\nsession expires, the user is asked to re-authenticate in accordance with session-method.\n+\nSetting --session-reauth-method when --session-length is empty raises an error",
              args: {
                name: "SESSION_LENGTH",
                description:
                  "Googlecloudsdk.command_lib.accesscontextmanager.cloud_bindings:ProcessSessionLength",
                suggestions: [],
              },
            },
            {
              name: "--session-reauth-method",
              description:
                'Specifies the security check a user must undergo when their session expires. Defaults to\n--session-reauth-method=LOGIN if unspecified and --session-length is set. Cannot be used when\n--session-length is empty or 0. _SESSION_REAUTH_METHOD_ must be one of:\n+\n*login*::: The user will be prompted to perform regular login. Users who are enrolled in two-step\nverification and haven\'t chosen to "Remember this computer" will be prompted for their\nsecond factor.\n+\n*password*::: The user will only be required to enter their password.\n+\n*security-key*::: The user will be prompted to autheticate using their security key. If no security key has\nbeen configured, the LOGIN method is used.\n+\n:::\n+',
              args: {
                name: "SESSION_REAUTH_METHOD",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["login", "password", "security-key"],
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
      name: "levels",
      description: "Manage Access Context Manager levels",
      subcommands: [
        {
          name: "conditions",
          description: "Manage Access Context Manager level conditions",
          subcommands: [
            {
              name: "list",
              description: "List conditions for an access level",
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
                  name: "--level",
                  description:
                    "ID of the level or fully qualified identifier for the level.\n+\nTo set the `level` attribute:\n* provide the argument `--level` on the command line",
                  args: {
                    name: "LEVEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--policy",
                  description:
                    "The ID of the access policy.\n+\n\nTo set the `policy` attribute:\n* provide the argument `--level` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
                  args: {
                    name: "POLICY",
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
            },
          ],
        },
        {
          name: "create",
          description: "Create a new access level",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--basic-level-spec",
              description:
                "Path to a file containing a list of basic access level conditions.\n+\nAn access level condition file is a YAML-formatted list of\nconditions, which are YAML objects representing a Condition as\ndescribed in the API reference. For example:\n+\n    ```\n     - ipSubnetworks:\n       - 162.222.181.197/24\n       - 2001:db8::/48\n     - members:\n       - user:user@example.com\n    ```",
              args: {
                name: "BASIC_LEVEL_SPEC",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--combine-function",
              description:
                "For a basic level, determines how conditions are combined. _COMBINE_FUNCTION_ must be one of: *and*, *or*",
              args: {
                name: "COMBINE_FUNCTION",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["and", "or"],
              },
            },
            flag2292,
            {
              name: "--custom-level-spec",
              description:
                "Path to a file representing an expression that represents an access level.\n+\nThe expression is in the Common Expression Language (CEL) format. For example:\n+\n    ```\n      expression: \"origin.region_code in ['US', 'CA']\"\n    ```",
              args: {
                name: "CUSTOM_LEVEL_SPEC",
                description: "String",
                suggestions: [],
              },
            },
            flag3254,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11370,
            flag11637,
            flag11946,
            {
              name: "--title",
              description: "Short human-readable title of the access level",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level.\n+\nTo set the `level` attribute:\n* provide the argument `level` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an access level",
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
            flag11370,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level.\n+\nTo set the `level` attribute:\n* provide the argument `level` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about an access level",
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
            flag11370,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level.\n+\nTo set the `level` attribute:\n* provide the argument `level` on the command line",
          },
        },
        {
          name: "list",
          description: "List access levels",
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
            flag11364,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "replace-all",
          description: "Replace all existing access levels",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4507,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source-file",
              description:
                "Path to a file containing a list of access levels.\n+\nAn access level file is a YAML-formatted list of access levels,\nwhich are YAML objects representing a Basic or Custom level as described in\nthe API reference. For example:\n+\n```\n- name: accessPolicies/my_policy/accessLevels/my_level\n  title: My Basic Level\n  description: Basic level for foo.\n  basic:\n    combiningFunction: AND\n    conditions:\n    - ipSubnetworks:\n      - 192.168.100.14/24\n      - 2001:db8::/48\n    - members\n      - user1:user1@example.com\n- name: accessPolicies/my_policy/accessLevels/my_other_level\n  title: My Other Custom Level\n  description: Custom level for bar.\n  custom:\n    expr:\n      expression: \"origin.region_code in ['US', 'CA']\"\n```\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.accessLevels\nFor other versions, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels",
              args: {
                name: "SOURCE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "update",
          description: "Update an existing access level",
          options: [
            flag42,
            flag46,
            {
              name: "--basic-level-spec",
              description:
                "Path to a file containing a list of basic access level conditions.\n+\nAn access level condition file is a YAML-formatted list of conditions,which are YAML objects representing a Condition as described in the API reference. For example:\n+\n    ```\n     - ipSubnetworks:\n       - 162.222.181.197/24\n       - 2001:db8::/48\n     - members:\n       - user:user@example.com\n    ```",
              args: {
                name: "BASIC_LEVEL_SPEC",
                description:
                  "Googlecloudsdk.command_lib.accesscontextmanager.levels:VersionedParseBasicLevelConditions",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--combine-function",
              description:
                "For a basic level, determines how conditions are combined. _COMBINE_FUNCTION_ must be one of: *and*, *or*",
              args: {
                name: "COMBINE_FUNCTION",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["and", "or"],
              },
            },
            flag2292,
            {
              name: "--custom-level-spec",
              description:
                "Path to a file representing an expression for an access level.\n+\nThe expression is in the Common Expression Langague (CEL) format.For example:\n+\n    ```\n     expression: \"origin.region_code in ['US', 'CA']\"\n    ```",
              args: {
                name: "CUSTOM_LEVEL_SPEC",
                description:
                  "Googlecloudsdk.command_lib.accesscontextmanager.levels:VersionedParseCustomLevel",
                suggestions: [],
              },
            },
            flag3254,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--policy",
              description:
                "The ID of the access policy.\n+\nTo set the `policy` attribute:\n* provide the argument `level` on the command line with a fully specified name;\n* provide the argument `--policy` on the command line;\n* set the property `access_context_manager/policy`",
              args: { name: "POLICY", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--title",
              description: "Short human-readable title of the access level",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "LEVEL",
            description:
              "ID of the level or fully qualified identifier for the level.\n+\nTo set the `level` attribute:\n* provide the argument `level` on the command line",
          },
        },
      ],
    },
    {
      name: "perimeters",
      description: "Manage Access Context Manager service perimeters",
      subcommands: [
        {
          name: "create",
          description: "Create a new service perimeter",
          options: [
            {
              name: "--access-levels",
              description:
                "Comma-separated list of IDs for access levels (in the same policy)\nthat an intra-perimeter request must satisfy to be allowed",
              args: { name: "LEVEL", description: "List", suggestions: [] },
            },
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3255,
            {
              name: "--egress-policies",
              description:
                "Path to a file containing a list of Engress Policies.\n+\nThis file contains a list of YAML-compliant objects representing\nEngress Policies described in the API reference.\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor more information about non-alpha versions, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-vpc-accessible-services",
              description:
                "Whether to restrict API calls within the perimeter to those in the\nvpc-allowed-services list",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--ingress-policies",
              description:
                "Path to a file containing a list of Ingress Policies.\n+\nThis file contains a list of YAML-compliant objects representing\nIngress Policies described in the API reference.\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor more information about non-alpha versions, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--perimeter-type",
              description:
                "Type of the perimeter. _PERIMETER_TYPE_ must be one of:\n+\n*bridge*::: Allows resources in different regular service perimeters to import\nand export data between each other.\n+\nA project may belong to multiple bridge service perimeters (only if\nit also belongs to a regular service perimeter). Both restricted and\nunrestricted service lists, as well as access level lists,\nmust be empty.\n+\n*regular*::: Allows resources within this service perimeter to import and export\ndata amongst themselves.\n+\nA project may belong to at most one regular service perimeter.\n+\n:::\n+",
              args: {
                name: "PERIMETER_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["bridge", "regular"],
              },
            },
            flag11371,
            flag11637,
            flag11946,
            {
              name: "--resources",
              description:
                "Comma-separated list of resources (currently only projects, in the\nform `projects/<projectnumber>`) in this perimeter",
              args: { name: "RESOURCES", description: "List", suggestions: [] },
            },
            {
              name: "--restricted-services",
              description:
                "Comma-separated list of services to which the perimeter boundary\n*does* apply (for example, `storage.googleapis.com`)",
              args: { name: "SERVICE", description: "List", suggestions: [] },
            },
            {
              name: "--title",
              description:
                "Short human-readable title for the service perimeter",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--vpc-accessible-services",
              description:
                "Path to a YAML file containing the full VPC Accessible Services configuration.\nThis file should contain a single YAML object representing a VpcAccessibleServices\nmessage as described in the API reference. This cannot be used with\n`--vpc-allowed-services` or `--enable-vpc-accessible-services`.\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor more information about non-alpha versions, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
              args: {
                name: "VPC_ACCESSIBLE_SERVICES_YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--vpc-allowed-services",
              description:
                'Comma-separated list of APIs accessible from within the Service\nPerimeter. In order to include all restricted services, use\nreference "RESTRICTED-SERVICES".\nRequires vpc-accessible-services be enabled',
              args: {
                name: "VPC_SERVICE",
                description: "List",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a service perimeter",
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
            flag11371,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a service perimeter",
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
            flag11371,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
          },
        },
        {
          name: "dry-run",
          description:
            "Enable management of dry-run mode configuration for Service Perimeters",
          subcommands: [
            {
              name: "create",
              description:
                "Create a dry-run mode configuration for a new or existing Service         Perimeter",
              options: [
                {
                  name: "--access-levels",
                  description:
                    "Comma-separated list of IDs for access levels (in the same policy)\n              that an intra-perimeter request must satisfy to be allowed",
                  args: {
                    name: "access_levels",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag42,
                flag46,
                flag716,
                flag1201,
                flag2292,
                {
                  name: "--egress-policies",
                  description:
                    "Path to a file containing a list of Egress Policies.\n              This file contains a list of YAML-compliant objects representing\n              Egress Policies described in the API reference.\n              For more information about the alpha version, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\n              For more information about non-alpha versions, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    description:
                      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:ParseVersionedEgressPolicies",
                    suggestions: [],
                  },
                },
                {
                  name: "--enable-vpc-accessible-services",
                  description:
                    "Whether to restrict API calls within the perimeter to those in the\n              `vpc-allowed-services` list",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--ingress-policies",
                  description:
                    "Path to a file containing a list of Ingress Policies.\n              This file contains a list of YAML-compliant objects representing\n              Ingress Policies described in the API reference.\n              For more information about the alpha version, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\n              For more information about non-alpha versions, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    description:
                      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:ParseVersionedIngressPolicies",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--perimeter-access-levels",
                  description:
                    "Comma-separated list of IDs for access levels (in the same policy)\n              that an intra-perimeter request must satisfy to be allowed",
                  args: {
                    name: "access_levels",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-description",
                  description: "Long-form description of Service Perimeter",
                  args: {
                    name: "PERIMETER_DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-egress-policies",
                  description:
                    "Path to a file containing a list of Egress Policies.\n              This file contains a list of YAML-compliant objects representing\n              Egress Policies described in the API reference.\n              For more information about the alpha version, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\n              For more information about non-alpha versions, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    description:
                      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:ParseVersionedEgressPolicies",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-enable-vpc-accessible-services",
                  description:
                    "Whether to restrict API calls within the perimeter to those in the\n              `vpc-allowed-services` list",
                },
                {
                  name: "--perimeter-ingress-policies",
                  description:
                    "Path to a file containing a list of Ingress Policies.\n              This file contains a list of YAML-compliant objects representing\n              Ingress Policies described in the API reference.\n              For more information about the alpha version, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\n              For more information about non-alpha versions, see:\n              https://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
                  args: {
                    name: "YAML_FILE",
                    description:
                      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:ParseVersionedIngressPolicies",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-resources",
                  description:
                    "Comma-separated list of resources (currently only projects, in the\n              form `projects/<projectnumber>`) in this perimeter",
                  args: {
                    name: "resources",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-restricted-services",
                  description:
                    "Comma-separated list of services to which the perimeter boundary\n              *does* apply (for example, `storage.googleapis.com`)",
                  args: {
                    name: "restricted_services",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-title",
                  description:
                    "Short human-readable title for the Service Perimeter",
                  args: {
                    name: "PERIMETER_TITLE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-type",
                  description:
                    "Type of the perimeter.\n+\n            A *regular* perimeter allows resources within this service perimeter\n            to import and export data amongst themselves. A project may belong\n            to at most one regular service perimeter.\n+\n            A *bridge* perimeter allows resources in different regular service\n            perimeters to import and export data between each other. A project\n            may belong to multiple bridge service perimeters (only if it also\n            belongs to a regular service perimeter). Both restricted and\n            unrestricted service lists, as well as access level lists, must be\n            empty",
                  args: {
                    name: "PERIMETER_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-vpc-accessible-services",
                  description:
                    "Path to a YAML file containing a VpcAccessibleServices object",
                  args: {
                    name: "VPC_ACCESSIBLE_SERVICES_YAML_FILE",
                    description:
                      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:_Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--perimeter-vpc-allowed-services",
                  description:
                    'Comma-separated list of APIs accessible from within the Service\n              Perimeter. In order to include all restricted services, use\n              reference "RESTRICTED-SERVICES". Requires vpc-accessible-services\n              be enabled',
                  args: {
                    name: "vpc_allowed_services",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag11374,
                flag11637,
                flag11946,
                {
                  name: "--resources",
                  description:
                    "Comma-separated list of resources (currently only projects, in the\n              form `projects/<projectnumber>`) in this perimeter",
                  args: {
                    name: "resources",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--restricted-services",
                  description:
                    "Comma-separated list of services to which the perimeter boundary\n              *does* apply (for example, `storage.googleapis.com`)",
                  args: {
                    name: "restricted_services",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--vpc-accessible-services",
                  description:
                    "Path to a YAML file containing a VpcAccessibleServices object",
                  args: {
                    name: "VPC_ACCESSIBLE_SERVICES_YAML_FILE",
                    description:
                      "Googlecloudsdk.command_lib.accesscontextmanager.perimeters:_Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--vpc-allowed-services",
                  description:
                    'Comma-separated list of APIs accessible from within the Service\n              Perimeter. In order to include all restricted services, use\n              reference "RESTRICTED-SERVICES". Requires vpc-accessible-services\n              be enabled',
                  args: {
                    name: "vpc_allowed_services",
                    description: "List",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "Mark the Service Perimeter as deleted in the dry-run mode",
              options: [
                flag42,
                flag46,
                flag716,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11374,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Display the dry-run mode configuration for a Service Perimeter",
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
                flag11374,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
              },
            },
            {
              name: "drop",
              description:
                "Reset the dry-run mode configuration of a Service Perimeter",
              options: [
                flag42,
                flag46,
                flag717,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11374,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
              },
            },
            {
              name: "enforce",
              description:
                "Enforces a Service Perimeter's dry-run configuration",
              options: [
                flag42,
                flag46,
                flag717,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11374,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
              },
            },
            {
              name: "enforce-all",
              description:
                "Enforces the dry-run mode configuration for all Service Perimeters",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--etag",
                  description:
                    "The etag for the version of the Access Policy that this\n                operation is to be performed on. If, at the time of the\n                operation, the etag for the Access Policy stored in Access\n                Context Manager is different from the specified etag, then the\n                commit operation will not be performed and the call will fail.\n                If etag is not provided, the operation will be performed as if a\n                valid etag is provided",
                  args: {
                    name: "etag",
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
                {
                  name: "--policy",
                  description:
                    "The parent Access Policy which owns all Service Perimeters in\n                scope for the commit operation",
                  args: {
                    name: "policy",
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
            },
            {
              name: "list",
              description:
                "List the effective dry-run configuration across all Service Perimeters",
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
                {
                  name: "--policy",
                  description:
                    "Policy resource - The access policy you want to list the\n                effective dry-run configuration for. This represents a Cloud\n                resource",
                  args: {
                    name: "policy",
                    description: "String",
                    suggestions: [],
                  },
                },
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
                "Update the dry-run mode configuration for a Service Perimeter",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-access-levels",
                  description:
                    "Append the given values to the current Access Level",
                  args: {
                    name: "ACCESS-LEVELS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-resources",
                  description:
                    "Append the given values to the current Resources",
                  args: {
                    name: "RESOURCES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--add-restricted-services",
                  description:
                    "Append the given values to the current Restricted Services",
                  args: {
                    name: "RESTRICTED-SERVICES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag289,
                flag716,
                flag1201,
                {
                  name: "--clear-access-levels",
                  description: "Empty the current Access Level",
                },
                flag1628,
                flag1704,
                {
                  name: "--clear-resources",
                  description: "Empty the current Resources",
                },
                {
                  name: "--clear-restricted-services",
                  description: "Empty the current Restricted Services",
                },
                flag1956,
                flag1957,
                flag2292,
                flag4332,
                flag4538,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11374,
                flag11637,
                flag11946,
                {
                  name: "--remove-access-levels",
                  description:
                    "Remove the given values from the current Access Level",
                  args: {
                    name: "ACCESS-LEVELS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-resources",
                  description:
                    "Remove the given values from the current Resources",
                  args: {
                    name: "RESOURCES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--remove-restricted-services",
                  description:
                    "Remove the given values from the current Restricted Services",
                  args: {
                    name: "RESTRICTED-SERVICES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag12759,
                flag13683,
                flag13689,
                flag13711,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PERIMETER",
                description:
                  "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List service perimeters",
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
            flag11364,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "replace-all",
          description: "Replace all existing service perimeters",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4507,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source-file",
              description:
                "Path to a file containing a list of service perimeters.\n+\nAn service perimeter file is a YAML-formatted list of service perimeters,\nwhich are YAML objects representing a Condition as described in\nthe API reference. For example:\n+\n```\n- name: my_perimeter\n  title: My Perimeter\n  description: Perimeter for foo.\n  perimeterType: PERIMETER_TYPE_REGULAR\n  status:\n    resources:\n    - projects/0123456789\n    accessLevels:\n    - accessPolicies/my_policy/accessLevels/my_level\n    restrictedServices:\n    - storage.googleapis.com\n```\n+\nFor more information about the alpha version, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1alpha/accessPolicies.servicePerimeters\nFor other versions, see:\nhttps://cloud.google.com/access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters",
              args: {
                name: "SOURCE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "update",
          description:
            "Update the enforced configuration for an existing Service Perimeter",
          options: [
            flag42,
            flag46,
            {
              name: "--add-access-levels",
              description:
                "Append the given values to the current access levels",
              args: { name: "LEVEL", description: "List", suggestions: [] },
            },
            {
              name: "--add-resources",
              description: "Append the given values to the current resources",
              args: { name: "RESOURCES", description: "List", suggestions: [] },
            },
            {
              name: "--add-restricted-services",
              description:
                "Append the given values to the current restricted services",
              args: { name: "SERVICE", description: "List", suggestions: [] },
            },
            flag289,
            flag1201,
            {
              name: "--clear-access-levels",
              description: "Empty the current access levels",
            },
            flag1628,
            flag1704,
            {
              name: "--clear-resources",
              description: "Empty the current resources",
            },
            {
              name: "--clear-restricted-services",
              description: "Empty the current restricted services",
            },
            flag1956,
            flag1957,
            flag2292,
            flag3255,
            flag4332,
            flag4538,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11374,
            flag11637,
            flag11946,
            {
              name: "--remove-access-levels",
              description:
                "Remove the given values from the current access levels",
              args: { name: "LEVEL", description: "List", suggestions: [] },
            },
            {
              name: "--remove-resources",
              description: "Remove the given values from the current resources",
              args: { name: "RESOURCES", description: "List", suggestions: [] },
            },
            {
              name: "--remove-restricted-services",
              description:
                "Remove the given values from the current restricted services",
              args: { name: "SERVICE", description: "List", suggestions: [] },
            },
            flag12759,
            {
              name: "--set-access-levels",
              description:
                "Completely replace the current access levels with the given values",
              args: { name: "LEVEL", description: "List", suggestions: [] },
            },
            flag13683,
            flag13689,
            {
              name: "--set-resources",
              description:
                "Completely replace the current resources with the given values",
              args: { name: "RESOURCES", description: "List", suggestions: [] },
            },
            {
              name: "--set-restricted-services",
              description:
                "Completely replace the current restricted services with the given values",
              args: { name: "SERVICE", description: "List", suggestions: [] },
            },
            flag13711,
            {
              name: "--title",
              description:
                "Short human-readable title of the service perimeter",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--type",
              description:
                "Type of the perimeter.\n+\nA *regular* perimeter allows resources within this service perimeter\nto import and export data amongst themselves. A project may belong to\nat most one regular service perimeter.\n+\nA *bridge* perimeter allows resources in different regular service\nperimeters to import and export data between each other. A project may\nbelong to multiple bridge service perimeters (only if it also belongs to a\nregular service perimeter). Both restricted and unrestricted service lists,\nas well as access level lists, must be empty.\n+\n_TYPE_ must be one of: *bridge*, *regular*",
              args: {
                name: "TYPE",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["bridge", "regular"],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "PERIMETER",
            description:
              "ID of the perimeter or fully qualified identifier for the perimeter.\n+\nTo set the `perimeter` attribute:\n* provide the argument `perimeter` on the command line",
          },
        },
      ],
    },
    {
      name: "policies",
      description: "Manage Access Context Manager policies",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for an access policy",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--condition",
              description:
                "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a new access policy",
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
            {
              name: "--organization",
              description: "Parent organization for the access policies",
              args: {
                name: "ORGANIZATION",
                description:
                  "Googlecloudsdk.command_lib.util.hooks.types:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--scopes",
              description:
                "Folder or project on which this policy is applicable. You can specify only one folder or\nproject as the scope and the scope must exist within the specified organization. If you\ndon't specify a scope, the policy applies to the entire organization",
              args: { name: "SCOPES", description: "List", suggestions: [] },
            },
            {
              name: "--title",
              description: "Short human-readable title of the access policy",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an access policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Show details about an access policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for an access policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List access policies",
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
            {
              name: "--organization",
              description:
                "ID of the organization or fully qualified identifier for the organization.\n+\nTo set the `organization` attribute:\n* provide the argument `--organization` on the command line",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for an access policy",
          options: [
            flag42,
            flag46,
            {
              name: "--all",
              description:
                "Remove all bindings with this role and principal, irrespective of any\nconditions",
            },
            flag1201,
            {
              name: "--condition",
              description:
                "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--role",
              description: "The role to remove the principal from",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for an access policy",
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
              name: "POLICY",
              description:
                "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`;\n* automatically, if the current account belongs to an organization with exactly one access policy.",
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
          description: "Update an existing access policy",
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
              name: "--title",
              description: "Short human-readable title of the access policy",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line;\n* set the property `access_context_manager/policy`",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "supported-permissions",
      description: "Retrieve VPC Service Controls Supported Permissions",
      subcommands: [
        {
          name: "describe",
          description:
            "Describes which permissions in a provided role are supported by VPC Service Controls",
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
            {
              name: "--organization",
              description: "Organization of the role you want to describe",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the role to describe. Curated roles example: roles/viewer. Custom roles example: CustomRole. For custom roles, you must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "list",
          description: "Lists all VPC Service Controls supported permissions",
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
      name: "supported-services",
      description: "Retrieve VPC Service Controls Supported Services",
      subcommands: [
        {
          name: "describe",
          description:
            "Gets information about a VPC Service Controls Supported Service",
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
            name: "SERVICE_NAME",
            description:
              "ID of the supported-service or fully qualified identifier for the supported-service.\n+\nTo set the `service_name` attribute:\n* provide the argument `service_name` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists all VPC Service Controls supported services",
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
  ],
};

export default completionSpec;
