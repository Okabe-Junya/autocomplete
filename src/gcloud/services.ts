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
const flag460: Fig.Option = {
  name: "--allowed-application",
  description:
    "Repeatable. Specify multiple allowed applications. The accepted keys are `sha1_fingerprint` and `package_name`",
  args: {
    name: "sha1_fingerprint=SHA1_FINGERPRINT,package_name=PACKAGE_NAME",
    description: "Dict",
    suggestions: [],
  },
};
const flag462: Fig.Option = {
  name: "--allowed-bundle-ids",
  description: "iOS app's bundle ids that are allowed to use the key",
  args: { name: "ALLOWED_BUNDLE_IDS", description: "List", suggestions: [] },
};
const flag469: Fig.Option = {
  name: "--allowed-ips",
  description:
    "A list of the caller IP addresses that are allowed to make API calls with this key",
  args: { name: "ALLOWED_IPS", description: "List", suggestions: [] },
};
const flag476: Fig.Option = {
  name: "--allowed-referrers",
  description:
    "A list of regular expressions for the referrer URLs that are allowed to make API calls with this key",
  args: { name: "ALLOWED_REFERRERS", description: "List", suggestions: [] },
};
const flag514: Fig.Option = {
  name: "--annotations",
  description:
    "Annotations are key resource. Specify annotations as\n            a key-value dictionary for small amounts of arbitrary client data",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag579: Fig.Option = {
  name: "--api-target",
  description:
    'Repeatable. Specify service and optionally one or multiple specific\nmethods. Both fields are case insensitive.\nMethods can be specified as a colon-separated list (e.g.,\n`--api-target="service=foo.service.com,methods=method1:method2"`),\nor using `--flags-file` (see $ gcloud topic flags-file for details)',
  args: {
    name: "service=SERVICE[,methods=METHOD:...]",
    description: "Dict",
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
const flag6789: Fig.Option = {
  name: "--location",
  description:
    "Location of the key.\n+\nTo set the `location` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* location will default to global",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8279: Fig.Option = {
  name: "--network",
  description: "The network in the consumer project peered with the service",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag8280: Fig.Option = {
  name: "--network",
  description:
    "The network in the current project that is peered with the service",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag8281: Fig.Option = {
  name: "--network",
  description:
    "The network in the current project to be peered with the service",
  args: { name: "NETWORK", description: "String", suggestions: [] },
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
const flag13621: Fig.Option = {
  name: "--service",
  description: "The service to connect to",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13622: Fig.Option = {
  name: "--service",
  description: "The service to enable VPC service controls for",
  args: { name: "SERVICE", description: "String", suggestions: [] },
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
  name: "services",
  description: "List, enable and disable APIs and services",
  subcommands: [
    {
      name: "api-keys",
      description: "Manage API keys",
      subcommands: [
        {
          name: "create",
          description: "Create an API key",
          options: [
            flag42,
            flag46,
            flag460,
            flag462,
            flag469,
            flag476,
            flag514,
            flag579,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "Display name of the key to create",
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
            {
              name: "--key-id",
              description: "User-specified ID of the key to create",
              args: { name: "KEY_ID", description: "String", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--service-account",
              description:
                "The email of the service account the key is bound to. If this field is specified, the key is a service account bound key and auth enabled",
              args: {
                name: "SERVICE_ACCOUNT",
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
          description: "Delete an API key",
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
            flag6789,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an API key's metadata",
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
            flag6789,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "get-key-string",
          description: "Get the key string of an API key",
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
            flag6789,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists API keys",
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
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: {
                name: "PAGE_SIZE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--show-deleted",
              description: "Show soft-deleted keys by specifying this flag",
            },
            flag13948,
            flag14975,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "lookup",
          description: "Look up resource name of a key string",
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
          args: { name: "KEY_STRING", description: "Key string of the key" },
        },
        {
          name: "undelete",
          description: "Undelete an API key",
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
            {
              name: "--key-string",
              description: "Key String of the key",
              args: {
                name: "KEY_STRING",
                description: "String",
                suggestions: [],
              },
            },
            flag6789,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an API key's metadata",
          options: [
            flag42,
            flag46,
            flag460,
            flag462,
            flag469,
            flag476,
            flag514,
            flag579,
            flag720,
            flag1201,
            {
              name: "--clear-annotations",
              description: "If set, clear all annotations on the key",
            },
            {
              name: "--clear-restrictions",
              description: "If set, clear all restrictions on the key",
            },
            flag2292,
            {
              name: "--display-name",
              description: "Display name of the key to update",
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
            flag6789,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
      ],
    },
    {
      name: "disable",
      description: "Disable a service for consumption for a project",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2292,
        flag4900,
        flag4902,
        {
          name: "--force",
          description:
            "If specified, the disable call will proceed even if there are enabled services which depend on the service to be disabled or disable the service used in last 30 days or was enabled in recent 3 days. Forcing the call means that the services which depend on the service to be disabled will also be disabled",
        },
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
        name: "SERVICE",
        description: "The name of the service(s) to disable",
        isVariadic: true,
      },
    },
    {
      name: "enable",
      description: "Enables a service for consumption for a project",
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
        name: "SERVICE",
        description: "The name of the service(s) to enable",
        isVariadic: true,
      },
    },
    {
      name: "list",
      description: "List services for a project",
      options: [
        flag42,
        flag46,
        {
          name: "--available",
          description:
            "Return the services available to the project to enable. This list will include any services that the project has already enabled",
        },
        flag1201,
        flag2292,
        {
          name: "--enabled",
          description:
            "(DEFAULT) Return the services which the project has enabled",
        },
        flag4849,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag6515,
        flag7356,
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *200*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
          args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
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
      name: "operations",
      description: "Manage Operation for various services",
      subcommands: [
        {
          name: "describe",
          description:
            "Describes an operation resource for a given operation name",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--full",
              description:
                "(DEPRECATED) This flag is deprecated.\n+\nThis flag is deprecated",
              args: { name: "FULL", description: "Int", suggestions: [] },
            },
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
            description: "The name of the operation to describe",
          },
        },
        {
          name: "wait",
          description:
            "Waits for an operation to complete for a given operation name",
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
            description: "The name of the operation on which to wait",
          },
        },
      ],
    },
    {
      name: "peered-dns-domains",
      description: "Peered DNS domains for various private service connections",
      subcommands: [
        {
          name: "create",
          description:
            "Create a peered DNS domain for a private service connection",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--dns-suffix",
              description:
                "The DNS domain name suffix of the peered DNS domain",
              args: {
                name: "DNS_SUFFIX",
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
            flag8279,
            flag11637,
            flag11946,
            {
              name: "--service",
              description:
                "The name of the service to create a peered DNS domain for",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description: "The name of the peered DNS domain to create",
          },
        },
        {
          name: "delete",
          description:
            "Delete a peered DNS domain for a private service connection",
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
            flag8279,
            flag11637,
            flag11946,
            {
              name: "--service",
              description:
                "The name of the service to delete a peered DNS domain for",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description: "The name of the peered DNS domain to delete",
          },
        },
        {
          name: "list",
          description:
            "List the peered DNS domains for a private service connection",
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
              name: "--network",
              description:
                "Network in the consumer project peered with the service",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--service",
              description:
                "Name of the service to list the peered DNS domains for",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "vpc-peerings",
      description: "VPC Peerings to various services",
      subcommands: [
        {
          name: "connect",
          description:
            "Connect to a service via VPC peering for a project network",
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
            flag8281,
            flag11637,
            flag11946,
            {
              name: "--ranges",
              description: "The names of IP CIDR ranges for service to use",
              args: { name: "RANGES", description: "String", suggestions: [] },
            },
            flag13621,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description:
            "Delete a private service connection to a service for a project network",
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
              name: "--network",
              description:
                "The network in the current project which is peered with the service",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag13621,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "disable-vpc-service-controls",
          description:
            "Disable VPC Service Controls for the peering connection",
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
            flag8280,
            flag11637,
            flag11946,
            flag13622,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "enable-vpc-service-controls",
          description: "Enable VPC Service Controls for the peering connection",
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
            flag8280,
            flag11637,
            flag11946,
            flag13622,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "get-vpc-service-controls",
          description:
            "Get VPC state of Service Controls for the peering connection",
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
            flag8280,
            flag11637,
            flag11946,
            {
              name: "--service",
              description: "The service to get VPC service controls for",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description:
            "List connections to a service via VPC peering for a project network",
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
              name: "--network",
              description:
                "The network in the current project to list connections with the service",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--service",
              description: "The service to list connections",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "operations",
          description: "Manage VPC Peering operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Describes an operation resource for a given operation name",
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
                  name: "--name",
                  description: "The name of operation to describe",
                  args: {
                    name: "OPERATION_NAME",
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
              name: "wait",
              description:
                "Waits for an operation to complete  for a given operation name",
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
                  name: "--name",
                  description: "The name of operation to wait",
                  args: {
                    name: "OPERATION_NAME",
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
          name: "update",
          description:
            "Update a private service connection to a service for a project network",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If specified, the update call will proceed even if the update can be destructive",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag8281,
            flag11637,
            flag11946,
            {
              name: "--ranges",
              description: "The names of IP CIDR ranges for service to use",
              args: { name: "RANGES", description: "String", suggestions: [] },
            },
            flag13621,
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
