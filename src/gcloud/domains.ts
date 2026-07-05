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
const flag2353: Fig.Option = {
  name: "--contact-privacy",
  description:
    "The contact privacy mode to use. Supported privacy modes depend on the domain. _CONTACT_PRIVACY_ must be one of:\n+\n*private-contact-data*::: (DEPRECATED) Your contact info won't be available to the public. To help protect your info and prevent spam, a third party provides alternate (proxy) contact info for your domain in the public directory at no extra cost. They will forward received messages to you. The private-contact-data option is deprecated; See https://cloud.google.com/domains/docs/deprecations/feature-deprecations.\n*public-contact-data*::: All the data from contact config is publicly available. To set this value, you must also pass the --notices flag with value public-contact-data-acknowledgement or agree to the notice interactively.\n*redacted-contact-data*::: Limited personal information will be available to the public. The actual information redacted depends on the domain. For more information see https://support.google.com/domains/answer/3251242.\n:::\n+",
  args: {
    name: "CONTACT_PRIVACY",
    description: "Googlecloudsdk.command_lib.domains.flags:_ChoiceValueType",
    suggestions: [
      "private-contact-data",
      "public-contact-data",
      "redacted-contact-data",
    ],
  },
};
const flag3567: Fig.Option = {
  name: "--disable-dnssec",
  description:
    "Use this flag to disable DNSSEC, or to skip enabling it when switching\nto a Cloud DNS Zone or Google Domains nameservers",
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
const flag8086: Fig.Option = {
  name: "--name-servers",
  description: "List of DNS name servers for the domain",
  args: { name: "NAME_SERVER", description: "List", suggestions: [] },
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

const completionSpec: Fig.Spec = {
  name: "domains",
  description: "Manage domains for your Google Cloud projects",
  subcommands: [
    {
      name: "list-user-verified",
      description: "Lists the user's verified domains",
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
    },
    {
      name: "registrations",
      description: "Manage Cloud Domains registrations",
      subcommands: [
        {
          name: "authorization-code",
          description: "Manage Cloud Domains registration's authorization code",
          subcommands: [
            {
              name: "get",
              description:
                "Get authorization code of a specific Cloud Domains registration",
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
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
            {
              name: "reset",
              description:
                "Resets authorization code of a specific Cloud Domains registration",
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
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
          ],
        },
        {
          name: "configure",
          description:
            "Configure Cloud Domains registrations' management, DNS or contact settings",
          subcommands: [
            {
              name: "contacts",
              description:
                "Configure contact settings of a Cloud Domains registration",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                {
                  name: "--contact-data-from-file",
                  description:
                    "A YAML file containing the contact data for the domain's three contacts:\nregistrant, admin, and technical.\n+\nThe file can either specify a single set of contact data with label\n'allContacts', or three separate sets of contact data with labels\n'adminContact' and 'technicalContact'.\n+\nIf 'registrantContact', 'adminContact' or 'technicalContact' labels are used\nthen only the specified contacts are updated.\n+\nEach contact data must contain values for all required fields: email,\nphoneNumber and postalAddress in google.type.PostalAddress format.\n+\nFor more guidance on how to specify postalAddress, please see:\nhttps://support.google.com/business/answer/6397478\n+\nExamples of file contents:\n+\n```\nallContacts:\n  email: 'example@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Jane Doe']\n```\n+\n```\nadminContact:\n  email: 'admin@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Admin Jane Doe']\n```\n+\n```\nregistrantContact:\n  email: 'registrant@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Registrant Jane Doe']\nadminContact:\n  email: 'admin@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Admin Jane Doe']\ntechnicalContact:\n  email: 'technical@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Technic Jane Doe']\n```",
                  args: {
                    name: "CONTACT_DATA_FILE_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2353,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--notices",
                  description:
                    "Notices about special properties of contacts. _NOTICE_ must be (only one value is supported):\n+\n*public-contact-data-acknowledgement*::: By sending this notice you acknowledge that using public-contact-data contact privacy makes all the data from contact config publicly available.\n:::\n+",
                  args: {
                    name: "NOTICE",
                    description: "List",
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
                    "Don't actually configure contact settings of the registration. Only validate arguments",
                },
                flag15424,
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
            {
              name: "dns",
              description:
                "Configure DNS settings of a Cloud Domains registration",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--cloud-dns-zone",
                  description:
                    "The name of the Cloud DNS managed-zone to set as the name server for the domain.\nIf it's in the same project, you can use short name. If not, use the full resource name, e.g.: --cloud-dns-zone=projects/example-project/managedZones/example-zone",
                  args: {
                    name: "CLOUD_DNS_ZONE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag3567,
                {
                  name: "--dns-settings-from-file",
                  description:
                    "A YAML file containing the required DNS settings.\nIf specified, its content will replace the values currently used in the\nregistration resource. If the file is missing some of the dns_settings\nfields, those fields will be cleared.\n+\nExamples of file contents:\n+\n```\ngoogleDomainsDns:\n  dsState: DS_RECORDS_PUBLISHED\nglueRecords:\n- hostName: ns1.example.com\n  ipv4Addresses:\n  - 8.8.8.8\n- hostName: ns2.example.com\n  ipv4Addresses:\n  - 8.8.8.8\n```\n+\n```\ncustomDns:\n  nameServers:\n  - new.ns1.com\n  - new.ns2.com\n  dsRecords:\n  - keyTag: 24\n    algorithm: RSASHA1\n    digestType: SHA256\n    digest: 2e1cfa82b035c26cbbbdae632cea070514eb8b773f616aaeaf668e2f0be8f10d\n  - keyTag: 42\n    algorithm: RSASHA1\n    digestType: SHA256\n    digest: 2e1cfa82bf35c26cbbbdae632cea070514eb8b773f616aaeaf668e2f0be8f10d\n```",
                  args: {
                    name: "DNS_SETTINGS_FILE_NAME",
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
                flag8086,
                flag11637,
                flag11946,
                flag14975,
                {
                  name: "--unsafe-dns-update",
                  description:
                    "(DEPRECATED) Use this flag to allow DNS changes that may make your domain stop serving.\n+\nThe --unsafe-dns-update option is deprecated. To complete an unsafe DNS operation first disable DNSSEC, then change name servers, then (optionally) enable DNSSEC",
                },
                {
                  name: "--use-google-domains-dns",
                  description:
                    "(DEPRECATED) Use free name servers provided by Google Domains.\n+\nThe --use-google-domains-dns option is deprecated; See https://cloud.google.com/domains/docs/deprecations/feature-deprecations",
                },
                flag15315,
                {
                  name: "--validate-only",
                  description:
                    "Don't actually configure DNS settings of the registration. Only validate arguments",
                },
                flag15424,
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
            {
              name: "management",
              description:
                "Configure management settings of a Cloud Domains registration",
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
                  name: "--preferred-renewal-method",
                  description:
                    "Preferred Renewal Method of a registration. It defines how the registration should be renewed. The actual Renewal Method can be set to renewal-disabled in case of e.g. problems with the Billing Account or reporeted domain abuse. _PREFERRED_RENEWAL_METHOD_ must be one of:\n+\n*automatic-renewal*::: The domain is automatically renewed each year.\n*renewal-disabled*::: The domain won't be renewed and will expire at its expiration time.\n:::\n+",
                  args: {
                    name: "PREFERRED_RENEWAL_METHOD",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["automatic-renewal", "renewal-disabled"],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                {
                  name: "--transfer-lock-state",
                  description:
                    "Transfer Lock of a registration. It needs to be unlocked in order to transfer the domain to another registrar. _TRANSFER_LOCK_STATE_ must be one of:\n+\n*locked*::: The transfer lock is locked.\n*unlocked*::: The transfer lock is unlocked.\n:::\n+",
                  args: {
                    name: "TRANSFER_LOCK_STATE",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["locked", "unlocked"],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Domains registration",
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
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Cloud Domains registration",
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
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
          },
        },
        {
          name: "get-register-parameters",
          description:
            "Get register parameters (including availability) of a specific domain",
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
            description: "Domain to get register parameters for",
          },
        },
        {
          name: "google-domains-dns",
          description: "Manage deprecated Google Domains DNS configuration",
          subcommands: [
            {
              name: "export-dns-record-sets",
              description:
                "Export your registration's Google Domains DNS zone's record-sets into a file",
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
                  name: "--records-file",
                  description: "File to which record-sets should be exported",
                  args: {
                    name: "RECORDS_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--zone-file-format",
                  description:
                    "Indicates that records-file should be in the zone file format. When using this flag, expect the record-set to be exported to a BIND zone formatted file. If you omit this flag, the record-set is exported into a YAML formatted records file. Note, this format flag determines the format of the output recorded in the records-file; it is different from the global `--format` flag which affects console output alone",
                },
              ],
              args: {
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
            {
              name: "get-forwarding-config",
              description:
                "Get forwarding configuration of a specific Cloud Domains registration",
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
                name: "REGISTRATION",
                description:
                  "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
              },
            },
          ],
        },
        {
          name: "initiate-push-transfer",
          description: "Initiates the push transfer process",
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
              name: "--tag",
              description:
                "The Tag of the new registrar. Can be found at https://nominet.uk/registrar-list/",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Domains registrations",
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
          name: "operations",
          description: "Manage Cloud Domains operations",
          subcommands: [
            {
              name: "describe",
              description: "Show details about a Cloud Domains operation",
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
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `registration` attribute:\n* provide the argument `operation` on the command line",
              },
            },
            {
              name: "list",
              description: "List Cloud Domains operations",
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
              name: "wait",
              description: "Wait for asynchronous operation to complete",
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
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `registration` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
        {
          name: "register",
          description: "Register a new domain",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cloud-dns-zone",
              description:
                "The name of the Cloud DNS managed-zone to set as the name server for the domain.\nIf it's in the same project, you can use short name. If not, use the full resource name, e.g.: --cloud-dns-zone=projects/example-project/managedZones/example-zone.\nIf the zone is signed, DNSSEC will be enabled by default unless you pass --disable-dnssec",
              args: {
                name: "CLOUD_DNS_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--contact-data-from-file",
              description:
                "A YAML file containing the contact data for the domain's three contacts:\nregistrant, admin, and technical.\n+\nThe file can either specify a single set of contact data with label\n'allContacts', or three separate sets of contact data with labels\n'adminContact' and 'technicalContact'.\n+\nEach contact data must contain values for all required fields: email,\nphoneNumber and postalAddress in google.type.PostalAddress format.\n+\nFor more guidance on how to specify postalAddress, please see:\nhttps://support.google.com/business/answer/6397478\n+\nExamples of file contents:\n+\n```\nallContacts:\n  email: 'example@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Jane Doe']\n```\n+\n```\nregistrantContact:\n  email: 'registrant@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Registrant Jane Doe']\nadminContact:\n  email: 'admin@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Admin Jane Doe']\ntechnicalContact:\n  email: 'technical@example.com'\n  phoneNumber: '+1.8005550123'\n  postalAddress:\n    regionCode: 'US'\n    postalCode: '94043'\n    administrativeArea: 'CA'\n    locality: 'Mountain View'\n    addressLines: ['1600 Amphitheatre Pkwy']\n    recipients: ['Technic Jane Doe']\n```",
              args: {
                name: "CONTACT_DATA_FILE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag2353,
            flag3567,
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
            flag7356,
            flag8086,
            {
              name: "--notices",
              description:
                "Notices about special properties of certain domains or contacts. _NOTICE_ must be one of:\n+\n*public-contact-data-acknowledgement*::: By sending this notice you acknowledge that using public-contact-data contact privacy makes all the data from contact config publicly available.\n*hsts-preloaded*::: By sending this notice you acknowledge that the domain is preloaded on the HTTP Strict Transport Security list in browsers. Serving a website on such domain will require an SSL certificate. See https://support.google.com/domains/answer/7638036 for details.\n:::\n+",
              args: { name: "NOTICE", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--use-google-domains-dns",
              description:
                "(REMOVED) Use free name servers provided by Google Domains.\nIf the zone is signed, DNSSEC will be enabled by default unless you pass --disable-dnssec.\n+\nFlag --use-google-domains-dns has been removed",
            },
            flag15315,
            {
              name: "--validate-only",
              description:
                "Don't actually create registration. Only validate arguments",
            },
            flag15424,
            {
              name: "--yearly-price",
              description:
                'Accept the domain\'s yearly price in the interactive flow or by using this flag. Use a number followed by a currency code, for example, "12.00 USD". Get the price using the get-register-parameters command',
              args: {
                name: "YEARLY_PRICE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
          },
        },
        {
          name: "renew-domain",
          description: "Renew a recently expired Cloud Domains registration",
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
            {
              name: "--validate-only",
              description:
                "Don't actually renew registration. Only validate arguments",
            },
            flag15424,
            {
              name: "--yearly-price",
              description:
                'Accept the domain\'s yearly price in the interactive flow or by using this flag. Use a number followed by a currency code, for example, "12.00 USD". Get the price by calling the renew-domain command without the --yearly-price flag',
              args: {
                name: "YEARLY_PRICE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
          },
        },
        {
          name: "search-domains",
          description: "Search for available domains",
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
            name: "DOMAIN_QUERY",
            description:
              "Domain search query. May be a domain name or arbitrary search terms",
          },
        },
        {
          name: "update",
          description: "Update a Cloud Domains registration",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
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
            name: "REGISTRATION",
            description:
              "ID of the registration or fully qualified identifier for the registration.\n+\nTo set the `registration` attribute:\n* provide the argument `registration` on the command line",
          },
        },
      ],
    },
    {
      name: "verify",
      description: "Verifies a domain via an in-browser workflow",
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
      args: { name: "DOMAIN", description: "The domain to be verified" },
    },
  ],
};

export default completionSpec;
