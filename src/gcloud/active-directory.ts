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
const flag3899: Fig.Option = {
  name: "--domain",
  description:
    "The fully-qualified domain name of the Microsoft Active Directory domain.\n+\nTo set the `domain` attribute:\n* provide the argument `backup` on the command line with a fully specified name;\n* provide the argument `--domain` on the command line",
  args: { name: "DOMAIN", description: "String", suggestions: [] },
};
const flag4021: Fig.Option = {
  name: "--enable-audit-logs",
  description:
    "If specified, Active Directory data audit logs are enabled for the domain",
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
  name: "active-directory",
  description: "Manage Managed Microsoft AD resources",
  subcommands: [
    {
      name: "domains",
      description: "Manage Managed Microsoft AD domains",
      subcommands: [
        {
          name: "backups",
          description: "Managed Microsoft AD Backups",
          subcommands: [
            {
              name: "create",
              description: "Create a Managed Microsoft AD domain backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3899,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6417,
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
              name: "delete",
              description: "Delete a Managed Microsoft AD domain backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3899,
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a Managed Microsoft AD domain backup",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3899,
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
            {
              name: "list",
              description: "List all Managed Microsoft AD domain backups",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--domain",
                  description:
                    "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `--domain` on the command line",
                  args: {
                    name: "DOMAIN",
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
              description: "Update a Managed Microsoft AD domain backup",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1723,
                flag2292,
                flag3899,
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
                name: "BACKUP",
                description:
                  "ID of the backup or fully qualified identifier for the backup.\n+\nTo set the `backup` attribute:\n* provide the argument `backup` on the command line",
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create a Managed Microsoft AD domain",
          options: [
            flag42,
            flag46,
            {
              name: "--admin-name",
              description:
                "Name of the administrator that may be used to perform Active Directory\noperations. This is a delegated administrator account provisioned by our service.\nIf left unspecified `MIAdmin` will be used. This is different from both the domain\nadministrator and the Directory Services Restore Mode (DSRM) administrator",
              args: {
                name: "ADMIN_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag720,
            {
              name: "--authorized-networks",
              description:
                "Names of the Google Compute Engine networks to which the domain will be connected",
              args: {
                name: "AUTHORIZED_NETWORKS",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4021,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6417,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Google Compute Engine region in which to provision domain controllers",
              args: { name: "REGION", description: "List", suggestions: [] },
            },
            {
              name: "--reserved-ip-range",
              description:
                "Classless Inter-Domain Routing range of internal addresses that\nare reserved for this domain",
              args: {
                name: "RESERVED_IP_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a managed Microsoft Active Directory domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Microsoft AD domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "describe-ldaps-settings",
          description:
            "Describe the LDAPS settings of a Managed Microsoft AD domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "extend-schema",
          description:
            "Initiate schema extension for a Managed Microsoft AD domain",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of schema change",
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
              name: "--ldif-file",
              description:
                "Local LDIF file path that contains commands for schema extension. The file size can't be larger than 1 MB. Use a full or relative path to a local file containing the value of ldif_file",
              args: {
                name: "LDIF_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Describe the IAM policy for a Managed Microsoft AD domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "list",
          description: "List Managed Microsoft AD domains",
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
          name: "reset-admin-password",
          description:
            "Reset the admin password for a Managed Microsoft AD domain",
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "restore",
          description: "Restore a domain from the specified backup",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--backup",
              description:
                "Name of the domain backup from which you want to restore the Managed Microsoft AD domain",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Managed Microsoft AD domain",
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
              name: "DOMAIN",
              description:
                "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "trusts",
          description: "Manage Managed Microsoft AD domains",
          subcommands: [
            {
              name: "create",
              description:
                "Create a Microsoft Active Directory Trust between a Managed Microsoft AD domain and another domain",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--direction",
                  description:
                    "Direction of the trust.\n+\nMust be one of: INBOUND, OUTBOUND, BIDIRECTIONAL. Default is BIDIRECTIONAL.\n+\n_DIRECTION_ must be one of: *bidirectional*, *inbound*, *outbound*, *trust-direction-unspecified*",
                  args: {
                    name: "DIRECTION",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "bidirectional",
                      "inbound",
                      "outbound",
                      "trust-direction-unspecified",
                    ],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--handshake-secret",
                  description:
                    "Trust handshake secret with target domain. The secret will not be stored. If not specified,\ncommand will prompt user for secret",
                  args: {
                    name: "HANDSHAKE_SECRET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--selective-authentication",
                  description:
                    "If specified, trusted side will only have selective access to approved set of resources.\n+\nOtherwise, the trusted side has forest/domain wide access. Default is false",
                },
                {
                  name: "--target-dns-ip-addresses",
                  description:
                    "Target DNS server IP addresses that can resolve the target domain.\n+\nOnly IPv4 is supported",
                  args: {
                    name: "TARGET_DNS_IP_ADDRESSES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-domain-name",
                  description:
                    "Target domain name for the Managed Microsoft AD Trust",
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--type",
                  description:
                    "Type of the trust. Must be FOREST or EXTERNAL. Default is FOREST. _TYPE_ must be one of: *external*, *forest*, *trust-type-unspecified*",
                  args: {
                    name: "TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "external",
                      "forest",
                      "trust-type-unspecified",
                    ],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
              },
            },
            {
              name: "delete",
              description:
                "Delete an Active Directory Trust between a Managed Microsoft AD domain and a target domain",
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
                  name: "--target-domain-name",
                  description:
                    "Target domain name for the Managed Microsoft AD trust you want to delete",
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
              },
            },
            {
              name: "update",
              description:
                "Update target DNS IP addresses for a Managed Microsoft AD trust",
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
                  name: "--target-dns-ip-addresses",
                  description:
                    "DNS server IP addresses that can resolve the target domain.\n+\nOnly IPv4 is supported",
                  args: {
                    name: "TARGET_DNS_IP_ADDRESSES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-domain-name",
                  description:
                    "Target domain name for the Managed Microsoft AD trust you want to update",
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
              },
            },
            {
              name: "validate-state",
              description: "Validate the state of a Managed Microsoft AD trust",
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
                  name: "--target-domain-name",
                  description:
                    "Target domain name of the Managed Microsoft AD Active Directory trust you want to validate",
                  args: {
                    name: "TARGET_DOMAIN_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DOMAIN",
                description:
                  "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Managed Microsoft AD domain",
          options: [
            flag42,
            flag46,
            {
              name: "--add-authorized-networks",
              description:
                "A list of URLs of additional networks to peer this domain to in the form\nprojects/{project}/global/networks/{network}.\nNetworks must belong to the project",
              args: {
                name: "AUTH_NET1, AUTH_NET2, ...",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-region",
              description:
                "An additional region to provision this domain in.\nIf domain is already provisioned in region, nothing will be done in that\nregion. Supported regions are: asia-east1, asia-northeast1, asia-south1, asia-southeast1, australia-southeast1, europe-north1, europe-west1, europe-west2, europe-west3, europe-west4, northamerica-northeast1, southamerica-east1, us-central1, us-east1, us-east4, us-west1, us-west2",
              args: {
                name: "ADD_REGION",
                description: "String",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag4021,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-authorized-networks",
              description:
                "A list of URLs of additional networks to unpeer this domain from in the\nform projects/{project}/global/networks/{network}.\nNetworks must belong to the project",
              args: {
                name: "AUTH_NET1, AUTH_NET2, ...",
                description: "List",
                suggestions: [],
              },
            },
            flag12637,
            {
              name: "--remove-region",
              description:
                "A region to de-provision this domain from.\nIf domain is already not provisioned in a region, nothing will be done in\nthat region. Domains must be left provisioned in at least one region.\nSupported regions are: asia-east1, asia-northeast1, asia-south1, asia-southeast1, australia-southeast1, europe-north1, europe-west1, europe-west2, europe-west3, europe-west4, northamerica-northeast1, southamerica-east1, us-central1, us-east1, us-east4, us-west1, us-west2",
              args: {
                name: "REMOVE_REGION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
        {
          name: "update-ldaps-settings",
          description: "Update the LDAPS settings for a domain",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--certificate-password",
              description:
                "Password used to encrypt the PKCS#12 certificate. If not specified, command will prompt user for secret",
              args: {
                name: "CERTIFICATE_PASSWORD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--certificate-pfx-file",
              description:
                "PKCS#12-formatted pfx file that specifies the certificate chain used to configure LDAPS.\nIf certificate-password is not specified, command will prompt user for secret. Use a full or relative path to a local file containing the value of certificate_pfx_file",
              args: {
                name: "CERTIFICATE_PFX_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--clear-certificates",
              description:
                "Disable LDAPS by deleting all existing certificates. Certificates will need to be re-uploaded if LDAPS is to be re-enabled",
            },
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
            name: "DOMAIN",
            description:
              "ID of the domain or fully qualified identifier for the domain.\n+\nTo set the `domain` attribute:\n* provide the argument `domain` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Managed Microsoft AD operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Managed Microsoft AD operation",
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
            name: "NAME",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `NAME` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Managed Microsoft AD operation",
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
          description: "List Managed Microsoft AD operations",
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
      name: "peerings",
      description: "Managed Microsoft AD peerings",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Managed Microsoft Active Directory domain peering",
          options: [
            flag42,
            flag46,
            flag720,
            {
              name: "--authorized-network",
              description:
                "Name of the Network that is authorized to communicate with Managed Microsoft AD domain. This is usually the full path name of the network in the peer project",
              args: {
                name: "AUTHORIZED_NETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--domain",
              description:
                "Name of the managed Managed Microsoft AD domain you want to peer to",
              args: { name: "DOMAIN", description: "String", suggestions: [] },
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
            flag15424,
          ],
          args: {
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering.\n+\nTo set the `peering` attribute:\n* provide the argument `peering` on the command line",
          },
        },
        {
          name: "delete",
          description:
            "Delete a Managed Microsoft Active Directory domain peering",
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
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering.\n+\nTo set the `peering` attribute:\n* provide the argument `peering` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Describe a Managed Microsoft Active Directory domain peering",
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
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering.\n+\nTo set the `peering` attribute:\n* provide the argument `peering` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Managed Microsoft Active Directory domain peerings",
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
          description:
            "Update a Managed Microsoft Active Directory domain peering",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
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
            name: "PEERING",
            description:
              "ID of the peering or fully qualified identifier for the peering.\n+\nTo set the `peering` attribute:\n* provide the argument `peering` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
