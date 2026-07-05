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
const flag1428: Fig.Option = {
  name: "--certificates",
  description:
    "IDs of the certificates or fully qualified identifiers for the certificates.\n+\nTo set the `certificate` attribute:\n* provide the argument `--certificates` on the command line",
  args: { name: "CERTIFICATES", description: "List", suggestions: [] },
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
const flag3044: Fig.Option = {
  name: "--description",
  description: "Text description of a certificate map entry",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3045: Fig.Option = {
  name: "--description",
  description: "Text description of a certificate map",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3252: Fig.Option = {
  name: "--description",
  description: "Human-readable description of the resource",
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
const flag6413: Fig.Option = {
  name: "--labels",
  description:
    "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag6589: Fig.Option = {
  name: "--location",
  description:
    "Certificate Manager location.\n+\nTo set the `location` attribute:\n* provide the argument `certificate_issuance_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6590: Fig.Option = {
  name: "--location",
  description:
    "Certificate Manager location.\n+\nTo set the `location` attribute:\n* provide the argument `certificate` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6591: Fig.Option = {
  name: "--location",
  description:
    "Certificate Manager location.\n+\nTo set the `location` attribute:\n* provide the argument `dns_authorization` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6593: Fig.Option = {
  name: "--location",
  description:
    "Certificate Manager location.\n+\nTo set the `location` attribute:\n* provide the argument `trust_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6707: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6710: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* if left empty, will use the wildcard '-' to list all locations",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7182: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the certificate map entry.\n+\nTo set the `location` attribute:\n* provide the argument `entry` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7184: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the certificate map.\n+\nTo set the `location` attribute:\n* provide the argument `map` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7185: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the certificate.\n+\nTo set the `location` attribute:\n* provide the argument `certificate` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7556: Fig.Option = {
  name: "--map",
  description:
    "The certificate map for the certificate map entry.\n+\nTo set the `map` attribute:\n* provide the argument `entry` on the command line with a fully specified name;\n* provide the argument `--map` on the command line",
  args: { name: "MAP", description: "String", suggestions: [] },
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
const flag15021: Fig.Option = {
  name: "--trust-store",
  description:
    'Trust Store with the given trust anchor and intermediate CA PEM-encoded certificates.\nCertificates should be provided in files. For multiple file names, separate them by a semicolon (\';\') and quote them (\'"\').\nOne file can contain multiple certificates.\nIntermediate CAs are optional.\n+\nExamples:\n+\n  Single files: --trust-store trust-anchors=ta.pem,intermediate-cas=ica.pem\n+\n  No intermediate CAs: --trust-store trust-anchors=ta.pem\n+\n  Multiple files: --trust-store trust-anchors="ta1.pem;ta2.pem",intermediate-cas="ica1.pem;ica2.pem"',
  args: {
    name: "TRUST_STORE",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
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
  name: "certificate-manager",
  description: "Manage SSL certificates for your Google Cloud projects",
  subcommands: [
    {
      name: "certificates",
      description: "Manage Certificate Manager certificates",
      subcommands: [
        {
          name: "create",
          description: "Create a certificate",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--certificate-file",
              description:
                "Certificate data in PEM-encoded form. Use a full or relative path to a local file containing the value of certificate_file",
              args: {
                name: "CERTIFICATE_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag2292,
            flag3252,
            {
              name: "--dns-authorizations",
              description:
                "Name(s) of the DNS authorizations for each listed domain.\n+\nNote that each domain requires a matching authorization, and any domain that\nfails authorization will prevent issuance and/or renewal of the certificate.\n+\nTo reference multiple DNS authorizations, provide a list of comma separated DNS\nauthorization resource names or URLs. For example:\n+\n $ {command} --dns-authorizations=api-example-com,www-example-com",
              args: {
                name: "DNS_AUTHORIZATIONS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--domains",
              description:
                "Public domain name(s) to create a certificate for.\n+\n* If a DNS authorization is provided for the domain, the certificate will be\nvalidated against the DNS record you added as part of the authorization flow.\n* If no DNS authorization is provided, Certificate Manager will attempt to validate\nthe domain against the serving endpoint directly.\n+\nYou may list multiple, comma-separated domain names to include multiple\nnames as Subject Alternative Names on the issued certificate",
              args: { name: "DOMAINS", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--issuance-config",
              description:
                "Name of the Certificate Issuance Config to use for issuance",
              args: {
                name: "ISSUANCE_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag6413,
            flag6590,
            flag7356,
            {
              name: "--private-key-file",
              description:
                "Private key data in PEM-encoded form. Use a full or relative path to a local file containing the value of private_key_file",
              args: {
                name: "PRIVATE_KEY_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--scope",
              description:
                "Scope of the managed certificate. This determines which services the certificate can\nbe attached to/associated with. Defaults to `DEFAULT`. _SCOPE_ must be one of:\n+\n*all-regions*::: Certificates with scope ALL_REGIONS are currently used for\nCross-region Internal Application Load Balancer only.\n+\n*client-auth*::: Certificates with scope CLIENT_AUTH are used for client authentication.\n+\n*default*::: Certificates with DEFAULT scope are used for Load Balancing and Cloud CDN.\n+\nIf unsure, choose this option.\n+\n*edge-cache*::: Certificates with scope EDGE_CACHE are special-purposed certificates,\nscoped for use with Media Edge services only.\n+\n:::\n+",
              args: {
                name: "SCOPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "all-regions",
                  "client-auth",
                  "default",
                  "edge-cache",
                ],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate.\n+\nTo set the `certificate` attribute:\n* provide the argument `certificate` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a certificate",
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
            flag7185,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate.\n+\nTo set the `certificate` attribute:\n* provide the argument `certificate` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing certificate",
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
            flag6590,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate.\n+\nTo set the `certificate` attribute:\n* provide the argument `certificate` on the command line",
          },
        },
        {
          name: "list",
          description: "List certificates",
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
            flag6710,
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
          description: "Update a certificate",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--certificate-file",
              description:
                "The certificate data in PEM-encoded form. Use a full or relative path to a local file containing the value of certificate_file",
              args: {
                name: "CERTIFICATE_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag1723,
            flag2292,
            {
              name: "--description",
              description: "Text description of a certificate",
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
            flag7185,
            flag7356,
            {
              name: "--private-key-file",
              description:
                "The private key data in PEM-encoded form. Use a full or relative path to a local file containing the value of private_key_file",
              args: {
                name: "PRIVATE_KEY_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the certificate or fully qualified identifier for the certificate.\n+\nTo set the `certificate` attribute:\n* provide the argument `certificate` on the command line",
          },
        },
      ],
    },
    {
      name: "dns-authorizations",
      description: "Manage Certificate Manager DNS authorizations",
      subcommands: [
        {
          name: "create",
          description: "Create a DNS Authorization",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3252,
            {
              name: "--domain",
              description: "Public domain name to create an authorization for",
              args: { name: "DOMAIN", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6591,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--type",
              description:
                "Type of the DNS authorization. _TYPE_ must be one of: *fixed-record*, *per-project-record*, *type-unspecified*",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "fixed-record",
                  "per-project-record",
                  "type-unspecified",
                ],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization.\n+\nTo set the `dns_authorization` attribute:\n* provide the argument `dns_authorization` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a DNS Authorization",
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
            flag6591,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization.\n+\nTo set the `dns_authorization` attribute:\n* provide the argument `dns_authorization` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a DNS Authorization",
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
            flag6591,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization.\n+\nTo set the `dns_authorization` attribute:\n* provide the argument `dns_authorization` on the command line",
          },
        },
        {
          name: "list",
          description: "List all DNS Authorizations in a project",
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
            flag6710,
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
          description: "Update a DNS Authorization",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6591,
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
            name: "DNS_AUTHORIZATION",
            description:
              "ID of the dnsAuthorization or fully qualified identifier for the dnsAuthorization.\n+\nTo set the `dns_authorization` attribute:\n* provide the argument `dns_authorization` on the command line",
          },
        },
      ],
    },
    {
      name: "issuance-configs",
      description: "Manage Certificate Manager Certificate Issuance Configs",
      subcommands: [
        {
          name: "create",
          description: "Create a Certificate Issuance Config",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--ca-pool",
              description:
                "CA Pool used for issuing certificates. For example:\n+\n $ {command} --ca-pool=projects/test-project/locations/us-west1/caPools/my-ca-pool",
              args: { name: "CA_POOL", description: "String", suggestions: [] },
            },
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--key-algorithm",
              description:
                "Key algorithm to use when generating the private key. Defaults to `rsa-2048`. _KEY_ALGORITHM_ must be one of: *ecdsa-p256*, *rsa-2048*",
              args: {
                name: "KEY_ALGORITHM",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["ecdsa-p256", "rsa-2048"],
              },
            },
            flag6413,
            {
              name: "--lifetime",
              description:
                "Lifetime of issued certificates in ISO 8601 format. Use `gcloud topic datetimes` for details. Defaults to `P30D`",
              args: {
                name: "LIFETIME",
                description: "String",
                suggestions: [],
              },
            },
            flag6589,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--rotation-window-percentage",
              description:
                "How long along the lifetime of the ceritificate to renew, expressed as a percentage. Defaults to `66`",
              args: {
                name: "ROTATION_WINDOW_PERCENTAGE",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig.\n+\nTo set the `certificate_issuance_config` attribute:\n* provide the argument `certificate_issuance_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Certificate Issuance Config",
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
            flag6589,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig.\n+\nTo set the `certificate_issuance_config` attribute:\n* provide the argument `certificate_issuance_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a Certificate Issuance Config",
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
            flag6589,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig.\n+\nTo set the `certificate_issuance_config` attribute:\n* provide the argument `certificate_issuance_config` on the command line",
          },
        },
        {
          name: "list",
          description: "List all Certificate Issuance Configs in a project",
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
            flag6710,
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
          description: "Update a Certificate Issuance Config",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6589,
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
            name: "CERTIFICATE_ISSUANCE_CONFIG",
            description:
              "ID of the certificateIssuanceConfig or fully qualified identifier for the certificateIssuanceConfig.\n+\nTo set the `certificate_issuance_config` attribute:\n* provide the argument `certificate_issuance_config` on the command line",
          },
        },
      ],
    },
    {
      name: "maps",
      description: "Manage Certificate Manager certificate maps",
      subcommands: [
        {
          name: "create",
          description: "Create a certificate map",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3045,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7184,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map.\n+\nTo set the `map` attribute:\n* provide the argument `map` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a certificate map",
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
            flag7184,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map.\n+\nTo set the `map` attribute:\n* provide the argument `map` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing certificate map",
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
            flag7184,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map.\n+\nTo set the `map` attribute:\n* provide the argument `map` on the command line",
          },
        },
        {
          name: "entries",
          description: "Manage Certificate Manager certificate map entries",
          subcommands: [
            {
              name: "create",
              description: "Create a certificate map entry",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1428,
                flag2292,
                flag3044,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--hostname",
                  description:
                    "A domain name (FQDN), which controls when list of certificates specified in the resource will be taken under consideration for certificate selection",
                  args: {
                    name: "HOSTNAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag6413,
                flag7182,
                flag7356,
                flag7556,
                flag11637,
                flag11946,
                {
                  name: "--set-primary",
                  description:
                    "The certificate will be used as the default cert if no other certificate in the map matches on SNI",
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a certificate map entry",
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
                flag7182,
                flag7356,
                flag7556,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an existing certificate map entry",
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
                flag7182,
                flag7356,
                flag7556,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
              },
            },
            {
              name: "list",
              description: "List certificate map entries",
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
                    "The Cloud location for the certificate map.\n+\nTo set the `location` attribute:\n* provide the argument `--map` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--map",
                  description:
                    "ID of the certificate map or fully qualified identifier for the certificate map.\n+\nTo set the `map` attribute:\n* provide the argument `--map` on the command line",
                  args: { name: "MAP", description: "String", suggestions: [] },
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
            {
              name: "update",
              description: "Update a certificate map entry",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag1428,
                flag1723,
                flag2292,
                flag3044,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7182,
                flag7356,
                flag7556,
                flag11637,
                flag11946,
                flag12637,
                flag14975,
                flag15167,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ENTRY",
                description:
                  "ID of the certificate map entry or fully qualified identifier for the certificate map entry.\n+\nTo set the `entry` attribute:\n* provide the argument `entry` on the command line",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List certificate maps",
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
            flag6707,
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
          description: "Update a certificate map",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            flag3045,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7184,
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
            name: "MAP",
            description:
              "ID of the certificate map or fully qualified identifier for the certificate map.\n+\nTo set the `map` attribute:\n* provide the argument `map` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Certificate Manager operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a long-running operation",
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
                "Certificate Manager location.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* default value of location is [global]",
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
          description: "List long-running operations",
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
            flag6707,
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
      name: "trust-configs",
      description: "Manage Certificate Manager trust configs",
      subcommands: [
        {
          name: "create",
          description: "Create TrustConfig",
          options: [
            flag42,
            flag46,
            {
              name: "--allowlisted-certificates",
              description:
                "Allowlisted PEM-encoded certificates.\nCertificates should be provided in files. For multiple file names, separate them by a comma (',').\nOne file can contain multiple certificates.\n+\nExamples:\n+\n  Single file: --allowlisted-certificates=ac.pem\n+\n  Multiple files: --allowlisted-certificates=ac1.pem,ac2.pem",
              args: {
                name: "ALLOWLISTED_CERTIFICATES",
                description: "List",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6593,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15021,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig.\n+\nTo set the `trust_config` attribute:\n* provide the argument `trust_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete TrustConfig",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "The current etag of the asset. If an etag is provided and does not match the current etag of the asset, the deletion will be blocked",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6593,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig.\n+\nTo set the `trust_config` attribute:\n* provide the argument `trust_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a TrustConfig",
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
            flag6593,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig.\n+\nTo set the `trust_config` attribute:\n* provide the argument `trust_config` on the command line",
          },
        },
        {
          name: "export",
          description: "Export TrustConfig",
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
            flag5091,
            flag5453,
            flag5699,
            flag6593,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig.\n+\nTo set the `trust_config` attribute:\n* provide the argument `trust_config` on the command line",
          },
        },
        {
          name: "import",
          description: "Import TrustConfig",
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
            flag6593,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source",
              description:
                "Path to a YAML file containing the configuration export data. The\nYAML file must not contain any output-only fields. Alternatively, you\nmay omit this flag to read from standard input. For a schema\ndescribing the export/import format, see:\n$CLOUDSDKROOT/lib/googlecloudsdk/schemas/...\n+\n$CLOUDSDKROOT is can be obtained with the following command:\n+\n  $ gcloud info --format='value(installation.sdk_root)'",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--update-mask",
              description:
                "Update mask used to specify fields to be overwritten in the TrustConfig by import.\nTrustConfig must already exist. Fields specified in the update-mask are relative to the\nTrustConfig. The flag can be a comma-separated list of updatable non-nested fields,\ne.g. description or trust_stores. Valid example: --update-mask=description,trust_stores",
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig.\n+\nTo set the `trust_config` attribute:\n* provide the argument `trust_config` on the command line",
          },
        },
        {
          name: "list",
          description: "List all TrustConfigs in a project",
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
            flag6710,
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
          description: "Update TrustConfig",
          options: [
            flag42,
            flag46,
            {
              name: "--add-allowlisted-certificates",
              description:
                "Add allowlisted PEM-encoded certificates.\nCertificates should be provided in files. For multiple file names, separate them by a comma (',').\nOne file can contain multiple certificates.\n+\nExamples:\n+\n  Single file: --add-allowlisted-certificates=ac.pem\n+\n  Multiple files: --add-allowlisted-certificates=ac1.pem,ac2.pem",
              args: {
                name: "ADD_ALLOWLISTED_CERTIFICATES",
                description: "List",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--clear-allowlisted-certificates",
              description: "Clear all allowlisted certificates",
            },
            flag1723,
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6593,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--remove-allowlisted-certificates",
              description:
                "Remove allowlisted PEM-encoded certificates.\nCertificates should be provided in files. For multiple file names, separate them by a comma (',').\nOne file can contain multiple certificates.\n+\nExamples:\n+\n  Single file: --remove-allowlisted-certificates=ac.pem\n+\n  Multiple files: --remove-allowlisted-certificates=ac1.pem,ac2.pem",
              args: {
                name: "REMOVE_ALLOWLISTED_CERTIFICATES",
                description: "List",
                suggestions: [],
              },
            },
            flag12637,
            flag14975,
            flag15021,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRUST_CONFIG",
            description:
              "ID of the trustConfig or fully qualified identifier for the trustConfig.\n+\nTo set the `trust_config` attribute:\n* provide the argument `trust_config` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
