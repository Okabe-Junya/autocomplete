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
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag839: Fig.Option = {
  name: "--auto-enable",
  description:
    "If this flag is set, the Certificate Authority will be automatically enabled upon creation",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1293: Fig.Option = {
  name: "--bucket",
  description:
    "The name of an existing storage bucket to use for storing the CA certificates and CRLs for CAs in this pool. If omitted, a new bucket will be created and managed by the service on your behalf",
  args: { name: "BUCKET", description: "String", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
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
const flag2225: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2228: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2494: Fig.Option = {
  name: "--copy-extensions-by-oid",
  description:
    "If this is set, then extensions with the given OIDs will be copied from the certificate request into the signed certificate",
  args: { name: "OBJECT_ID", description: "List", suggestions: [] },
};
const flag2495: Fig.Option = {
  name: "--copy-known-extensions",
  description:
    "If this is set, then the given extensions will be copied from the certificate request into the signed certificate. _KNOWN_EXTENSIONS_ must be one of: *base-key-usage*, *extended-key-usage*, *ca-options*, *policy-ids*, *aia-ocsp-servers*",
  args: { name: "KNOWN_EXTENSIONS", description: "List", suggestions: [] },
};
const flag2607: Fig.Option = {
  name: "--custom-aia-urls",
  description:
    "One or more comma-separated URLs that will be added to the Authority Information Access extension in the issued certificate. These URLs are where the issuer CA certificate is located",
  args: { name: "CUSTOM_AIA_URLS", description: "List", suggestions: [] },
};
const flag2609: Fig.Option = {
  name: "--custom-cdp-urls",
  description:
    "One or more comma-separated URLs that will be added to the CRL Distribution Points (CDP) extension in the issued certificate. These URLs are where CRL information is located",
  args: { name: "CUSTOM_CDP_URLS", description: "List", suggestions: [] },
};
const flag3085: Fig.Option = {
  name: "--description",
  description: "A text description for the Certificate Template",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3852: Fig.Option = {
  name: "--dns-san",
  description: "One or more comma-separated DNS Subject Alternative Names",
  args: { name: "DNS_SAN", description: "List", suggestions: [] },
};
const flag4005: Fig.Option = {
  name: "--email-san",
  description: "One or more comma-separated email Subject Alternative Names",
  args: { name: "EMAIL_SAN", description: "List", suggestions: [] },
};
const flag4372: Fig.Option = {
  name: "--encryption-key",
  description:
    "The full resource name of the Cloud KMS key to use for encrypting certificate data at rest. The key must be in the same region as the CA pool",
  args: { name: "ENCRYPTION_KEY", description: "String", suggestions: [] },
};
const flag4708: Fig.Option = {
  name: "--extended-key-usages",
  description:
    "The list of extended key usages for this CA. This can only be provided if `--use-preset-profile` is not provided. _EXTENDED_KEY_USAGES_ must be one of: *server_auth*, *client_auth*, *code_signing*, *email_protection*, *time_stamping*, *ocsp_signing*",
  args: { name: "EXTENDED_KEY_USAGES", description: "List", suggestions: [] },
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
const flag5108: Fig.Option = {
  name: "--from-ca",
  description:
    "ID of the source CA or fully qualified identifier for the source CA.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `--from-ca` on the command line",
  args: { name: "FROM_CA", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5608: Fig.Option = {
  name: "--identity-cel-expression",
  description:
    "A CEL expression that will be evaluated against the identity in the certificate before it is issued, and returns a boolean signifying whether the request should be allowed",
  args: {
    name: "IDENTITY_CEL_EXPRESSION",
    description: "String",
    suggestions: [],
  },
};
const flag5631: Fig.Option = {
  name: "--ignore-active-certificates",
  description:
    "If this flag is set, the Certificate Authority will be deleted even if the Certificate Authority has un-revoked or un-expired certificates after the grace period",
};
const flag5635: Fig.Option = {
  name: "--ignore-dependent-resources",
  description:
    "This field skips the integrity check that would normally prevent breaking a CA Pool if it is used by another cloud resource and allows the CA Pool to be in a state where it is not able to issue certificates. Doing so may result in unintended and unrecoverable effects on any dependent resource(s) since the CA Pool would not be able to issue certificates",
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
const flag6027: Fig.Option = {
  name: "--ip-san",
  description: "One or more comma-separated IP Subject Alternative Names",
  args: { name: "IP_SAN", description: "List", suggestions: [] },
};
const flag6054: Fig.Option = {
  name: "--issuance-policy",
  description: "A YAML file describing this CA Pool's issuance policy",
  args: {
    name: "ISSUANCE_POLICY",
    description: "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
    suggestions: [],
  },
};
const flag6059: Fig.Option = {
  name: "--issuer-location",
  description:
    "The location of the CERTIFICATE.\n+\nTo set the `issuer-location` attribute:\n* provide the argument `CERTIFICATE` on the command line with a fully specified name;\n* provide the argument `--issuer-location` on the command line;\n* set the property `privateca/location`",
  args: { name: "ISSUER_LOCATION", description: "String", suggestions: [] },
};
const flag6067: Fig.Option = {
  name: "--issuer-pool",
  description:
    "The parent CA Pool of the CERTIFICATE.\n+\nTo set the `issuer-pool` attribute:\n* provide the argument `CERTIFICATE` on the command line with a fully specified name;\n* provide the argument `--issuer-pool` on the command line",
  args: { name: "ISSUER_POOL", description: "String", suggestions: [] },
};
const flag6250: Fig.Option = {
  name: "--key-usages",
  description:
    "The list of key usages for this CA. This can only be provided if `--use-preset-profile` is not provided. _KEY_USAGES_ must be one of: *digital_signature*, *content_commitment*, *key_encipherment*, *data_encipherment*, *key_agreement*, *cert_sign*, *crl_sign*, *encipher_only*, *decipher_only*",
  args: { name: "KEY_USAGES", description: "List", suggestions: [] },
};
const flag6303: Fig.Option = {
  name: "--kms-key-version",
  description:
    "ID of the key version or fully qualified identifier for the key version.\n+\nTo set the `kms-key-version` attribute:\n* provide the argument `--kms-key-version` on the command line",
  args: { name: "KMS_KEY_VERSION", description: "String", suggestions: [] },
};
const flag6322: Fig.Option = {
  name: "--kms-key",
  description:
    "The KMS key of the key version.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key-version` on the command line with a fully specified name;\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6331: Fig.Option = {
  name: "--kms-keyring",
  description:
    "The KMS keyring of the key version.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key-version` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6341: Fig.Option = {
  name: "--kms-location",
  description:
    "The location of the key version.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key-version` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line;\n* provide the argument `location` on the command line;\n* set the property `privateca/location`",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6349: Fig.Option = {
  name: "--kms-project",
  description:
    "The project containing the key version.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key-version` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* provide the argument `project` on the command line;\n* set the property `core/project`",
  args: { name: "KMS_PROJECT", description: "String", suggestions: [] },
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
const flag7023: Fig.Option = {
  name: "--location",
  description:
    "The location of the CA Pool.\n+\nTo set the `location` attribute:\n* provide the argument `pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7024: Fig.Option = {
  name: "--location",
  description:
    "The location of the CERTIFICATE_AUTHORITY.\n+\nTo set the `location` attribute:\n* provide the argument `certificate_authority` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7025: Fig.Option = {
  name: "--location",
  description:
    "The location of the Certificate Template.\n+\nTo set the `location` attribute:\n* provide the argument `certificate_template` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7115: Fig.Option = {
  name: "--location",
  description:
    "The location of the CA_POOL.\n+\nTo set the `location` attribute:\n* provide the argument `CA_POOL` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7116: Fig.Option = {
  name: "--location",
  description:
    "The location of the CERTIFICATE_AUTHORITY.\n+\nTo set the `location` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7117: Fig.Option = {
  name: "--location",
  description:
    "The location of the CERTIFICATE_TEMPLATE.\n+\nTo set the `location` attribute:\n* provide the argument `CERTIFICATE_TEMPLATE` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7118: Fig.Option = {
  name: "--location",
  description:
    "The location of the Certificate Authority.\n+\nTo set the `location` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7612: Fig.Option = {
  name: "--max-chain-length",
  description:
    "Maximum depth of subordinate CAs allowed under this CA for a CA certificate. This can only be provided if neither `--use-preset-profile` nor `--unconstrained-chain-length` are provided",
  args: { name: "MAX_CHAIN_LENGTH", description: "Int", suggestions: [] },
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
const flag8075: Fig.Option = {
  name: "--name-constraints-critical",
  description:
    "Indicates whether or not name constraints are marked as critical. Name constraints are considered critical unless explicitly set to false. Enabled by default, use *--no-name-constraints-critical* to disable",
};
const flag8076: Fig.Option = {
  name: "--name-excluded-dns",
  description:
    "One or more comma-separated DNS names which are excluded from being issued certificates. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com`, while `example1.com` does not",
  args: { name: "NAME_EXCLUDED_DNS", description: "List", suggestions: [] },
};
const flag8077: Fig.Option = {
  name: "--name-excluded-email",
  description:
    "One or more comma-separated emails which are excluded from being issued certificates. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain",
  args: { name: "NAME_EXCLUDED_EMAIL", description: "List", suggestions: [] },
};
const flag8078: Fig.Option = {
  name: "--name-excluded-ip",
  description:
    "One or more comma-separated IP ranges which are excluded from being issued certificates. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4",
  args: { name: "NAME_EXCLUDED_IP", description: "List", suggestions: [] },
};
const flag8079: Fig.Option = {
  name: "--name-excluded-uri",
  description:
    "One or more comma-separated URIs which are excluded from being issued certificates. The value can be a hostname or a domain with a leading period (like `.example.com`)",
  args: { name: "NAME_EXCLUDED_URI", description: "List", suggestions: [] },
};
const flag8081: Fig.Option = {
  name: "--name-permitted-dns",
  description:
    "One or more comma-separated  DNS names which are permitted to be issued certificates. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, `example.com`, `www.example.com`, `www.sub.example.com` would satisfy `example.com`, while `example1.com` does not",
  args: { name: "NAME_PERMITTED_DNS", description: "List", suggestions: [] },
};
const flag8082: Fig.Option = {
  name: "--name-permitted-email",
  description:
    "One or more comma-separated email addresses which are permitted to be issued certificates. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. `.example.com`) to indicate all email addresses in that domain",
  args: { name: "NAME_PERMITTED_EMAIL", description: "List", suggestions: [] },
};
const flag8083: Fig.Option = {
  name: "--name-permitted-ip",
  description:
    "One or more comma-separated IP ranges which are permitted to be issued certificates. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4",
  args: { name: "NAME_PERMITTED_IP", description: "List", suggestions: [] },
};
const flag8084: Fig.Option = {
  name: "--name-permitted-uri",
  description:
    "One or more comma-separated URIs which are permitted to be issued certificates. The value can be a hostname or a domain with a leading period (like `.example.com`)",
  args: { name: "NAME_PERMITTED_URI", description: "List", suggestions: [] },
};
const flag11054: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *100*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
  args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
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
const flag11387: Fig.Option = {
  name: "--pool",
  description:
    "The ID of the CA Pool.\n+\nTo set the `pool` attribute:\n* provide the argument `certificate_authority` on the command line with a fully specified name;\n* provide the argument `--pool` on the command line",
  args: { name: "POOL", description: "String", suggestions: [] },
};
const flag11389: Fig.Option = {
  name: "--pool",
  description:
    "The parent CA Pool of the CERTIFICATE_AUTHORITY.\n+\nTo set the `pool` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line with a fully specified name;\n* provide the argument `--pool` on the command line",
  args: { name: "POOL", description: "String", suggestions: [] },
};
const flag11390: Fig.Option = {
  name: "--pool",
  description:
    "The parent CA Pool of the Certificate Authority.\n+\nTo set the `pool` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line with a fully specified name;\n* provide the argument `--pool` on the command line",
  args: { name: "POOL", description: "String", suggestions: [] },
};
const flag11489: Fig.Option = {
  name: "--predefined-values-file",
  description:
    "A YAML file describing any predefined X.509 values set by this template. The provided extensions will be copied over to any certificate requests that use this template, taking precedent over any allowed extensions in the certificate request. The format of this file should be a YAML representation of the X509Parameters message, which is defined here: https://cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters. Some examples can be found here: https://cloud.google.com/certificate-authority-service/docs/creating-certificate-template",
  args: {
    name: "PREDEFINED_VALUES_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
    suggestions: [],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11868: Fig.Option = {
  name: "--publishing-encoding-format",
  description:
    "The encoding format of the content published to storage buckets. _PUBLISHING_ENCODING_FORMAT_ must be one of: *der*, *pem*",
  args: {
    name: "PUBLISHING_ENCODING_FORMAT",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["der", "pem"],
  },
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
const flag13859: Fig.Option = {
  name: "--skip-grace-period",
  description:
    "If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. If you proceed, there will be no way to recover this CA",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14487: Fig.Option = {
  name: "--subject-key-id",
  description:
    "Optional field to specify subject key ID for certificate. DO NOT USE except to maintain a previously established identifier for a public key, whose SKI was not generated using method (1) described in RFC 5280 section 4.2.1.2",
  args: { name: "SUBJECT_KEY_ID", description: "String", suggestions: [] },
};
const flag14491: Fig.Option = {
  name: "--subject",
  description:
    'X.501 name of the certificate subject. Example: --subject "C=US,ST=California,L=Mountain View,O=Google LLC,CN=google.com"',
  args: { name: "SUBJECT", description: "Dict", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15101: Fig.Option = {
  name: "--unconstrained-chain-length",
  description:
    "If set, allows an unbounded number of subordinate CAs under this newly issued CA certificate. This can only be provided if neither `--use-preset-profile` nor `--max-chain-length` are provided",
};
const flag15167: Fig.Option = {
  name: "--update-labels",
  description:
    "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag15247: Fig.Option = {
  name: "--uri-san",
  description: "One or more comma-separated URI Subject Alternative Names",
  args: { name: "URI_SAN", description: "List", suggestions: [] },
};
const flag15249: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
};
const flag15296: Fig.Option = {
  name: "--use-preset-profile",
  description:
    "The name of an existing preset profile used to encapsulate X.509 parameter values. USE_PRESET_PROFILE must be one of: leaf_client_tls, leaf_code_signing, leaf_mtls, leaf_server_tls, leaf_smime, root_unconstrained, subordinate_client_tls_pathlen_0, subordinate_code_signing_pathlen_0, subordinate_mtls_pathlen_0, subordinate_server_tls_pathlen_0, subordinate_smime_pathlen_0, subordinate_unconstrained_pathlen_0.\n+\nFor more information, see https://cloud.google.com/certificate-authority-service/docs/certificate-profile",
  args: { name: "USE_PRESET_PROFILE", description: "String", suggestions: [] },
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
  name: "privateca",
  description: "Manage private Certificate Authorities on Google Cloud",
  subcommands: [
    {
      name: "certificates",
      description: "Manage certificates",
      subcommands: [
        {
          name: "create",
          description: "Create a new certificate",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--ca",
              description:
                "The name of an existing certificate authority to use for issuing the certificate. If omitted, a certificate authority will be will be chosen from the CA pool by the service on your behalf",
              args: { name: "CA", description: "String", suggestions: [] },
            },
            {
              name: "--cert-output-file",
              description:
                "The path where the resulting PEM-encoded certificate chain file should be written (ordered from leaf to root)",
              args: {
                name: "CERT_OUTPUT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--csr",
              description:
                "A PEM-encoded certificate signing request file path",
              args: { name: "CSR", description: "String", suggestions: [] },
            },
            flag3852,
            flag4005,
            {
              name: "--extended-key-usages",
              description:
                "The list of extended key usages for this certificate. This can only be provided if `--use-preset-profile` is not provided. _EXTENDED_KEY_USAGES_ must be one of: *server_auth*, *client_auth*, *code_signing*, *email_protection*, *time_stamping*, *ocsp_signing*",
              args: {
                name: "EXTENDED_KEY_USAGES",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--generate-key",
              description:
                "Use this flag to have a new RSA-2048 private key securely generated on your machine",
            },
            flag5453,
            flag5699,
            flag6027,
            {
              name: "--is-ca-cert",
              description:
                "Whether this certificate is for a CertificateAuthority or not. Indicates the Certificate Authority field in the x509 basic constraints extension",
            },
            {
              name: "--issuer-location",
              description:
                "The location of the CERTIFICATE.\n+\nTo set the `issuer-location` attribute:\n* provide the argument `CERTIFICATE` on the command line with a fully specified name;\n* certificate id will default to an automatically generated id with a fully specified name;\n* provide the argument `--issuer-location` on the command line;\n* set the property `privateca/location`",
              args: {
                name: "ISSUER_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--issuer-pool",
              description:
                "The parent CA Pool of the CERTIFICATE.\n+\nTo set the `issuer-pool` attribute:\n* provide the argument `CERTIFICATE` on the command line with a fully specified name;\n* certificate id will default to an automatically generated id with a fully specified name;\n* provide the argument `--issuer-pool` on the command line",
              args: {
                name: "ISSUER_POOL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--key-output-file",
              description:
                "The path where the generated private key file should be written (in PEM format).\n+\nNote: possession of this key file could allow anybody to act as this certificate's\nsubject. Please make sure that you store this key file in a secure location at all\ntimes, and ensure that only authorized users have access to it",
              args: {
                name: "KEY_OUTPUT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--key-usages",
              description:
                "The list of key usages for this certificate. This can only be provided if `--use-preset-profile` is not provided. _KEY_USAGES_ must be one of: *digital_signature*, *content_commitment*, *key_encipherment*, *data_encipherment*, *key_agreement*, *cert_sign*, *crl_sign*, *encipher_only*, *decipher_only*",
              args: {
                name: "KEY_USAGES",
                description: "List",
                suggestions: [],
              },
            },
            flag6322,
            flag6303,
            flag6331,
            flag6341,
            flag6349,
            flag6413,
            flag7356,
            flag7612,
            flag8075,
            flag8076,
            flag8077,
            flag8078,
            flag8079,
            flag8081,
            flag8082,
            flag8083,
            flag8084,
            flag11637,
            flag11946,
            {
              name: "--rdn-sequence-subject",
              description:
                "If this value is set then the issued certificate will use the subject found in the CSR preserving the exact RDN sequence",
            },
            {
              name: "--requested-not-before-time",
              description:
                "The requested not before time for the certificate, in ISO 8601 format (e.g., 2026-04-29T23:18:06Z)",
              args: {
                name: "REQUESTED_NOT_BEFORE_TIME",
                description: "String",
                suggestions: [],
              },
            },
            flag14491,
            flag14487,
            {
              name: "--template",
              description:
                "ID of the certificate_template or fully qualified identifier for the certificate_template.\n+\nTo set the `certificate template` attribute:\n* provide the argument `--template` on the command line",
              args: {
                name: "TEMPLATE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--template-location",
              description:
                "The location of the certificate_template.\n+\nTo set the `location` attribute:\n* provide the argument `--template` on the command line with a fully specified name;\n* provide the argument `--template-location` on the command line;\n* provide the argument `--issuer-location` on the command line;\n* set the property `privateca/location`",
              args: {
                name: "TEMPLATE_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15101,
            flag15247,
            flag15296,
            flag15315,
            {
              name: "--validate-only",
              description:
                "If this flag is set, the certificate resource will not be persisted and the returned certificate will not contain the pem_certificate field",
            },
            {
              name: "--validity",
              description:
                "The validity of this certificate, as an ISO8601 duration. Defaults to 30 days",
              args: {
                name: "VALIDITY",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE.\n+\nTo set the `certificate` attribute:\n* provide the argument `CERTIFICATE` on the command line;\n* certificate id will default to an automatically generated id",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Get metadata for a certificate",
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
              name: "--issuer-location",
              description:
                "The location of the CERTIFICATE.\n+\nTo set the `issuer-location` attribute:\n* provide the argument `certificate` on the command line with a fully specified name;\n* provide the argument `--issuer-location` on the command line;\n* set the property `privateca/location`",
              args: {
                name: "ISSUER_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--issuer-pool",
              description:
                "The ID of the issuing CA Pool.\n+\nTo set the `issuer-pool` attribute:\n* provide the argument `certificate` on the command line with a fully specified name;\n* provide the argument `--issuer-pool` on the command line",
              args: {
                name: "ISSUER_POOL",
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
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE.\n+\nTo set the `certificate` attribute:\n* provide the argument `certificate` on the command line",
          },
        },
        {
          name: "export",
          description: "Export a pem-encoded certificate to a file",
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
              name: "--include-chain",
              description:
                "Whether to include the certificate's issuer chain in the exported file. If this is set, the resulting file will contain the pem-encoded certificate and its issuing chain, ordered from leaf to root",
            },
            flag6059,
            flag6067,
            flag7356,
            {
              name: "--output-file",
              description:
                "The path where the resulting PEM-encoded certificate will be written",
              args: {
                name: "OUTPUT_FILE",
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
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE.\n+\nTo set the `certificate` attribute:\n* provide the argument `CERTIFICATE` on the command line",
          },
        },
        {
          name: "list",
          description: "List certificates within a project",
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
              name: "--issuer-pool",
              description:
                "ID of the CA_POOL or fully qualified identifier for the CA_POOL.\n+\nTo set the `pool` attribute:\n* provide the argument `--issuer-pool` on the command line;\n* defaults to all CA pools in the given location",
              args: {
                name: "ISSUER_POOL",
                description: "String",
                suggestions: [],
              },
            },
            flag6515,
            {
              name: "--location",
              description:
                "The location of the CA_POOL.\n+\nTo set the `location` attribute:\n* provide the argument `--issuer-pool` on the command line with a fully specified name;\n* defaults to all CA pools in the given location with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `privateca/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11054,
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
          name: "revoke",
          description: "Revoke a certificate",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--certificate",
              description:
                "ID of the certificate or fully qualified identifier for the certificate.\n+\nTo set the `certificate` attribute:\n* provide the argument `--certificate` on the command line",
              args: {
                name: "CERTIFICATE",
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
            {
              name: "--issuer-location",
              description:
                "The location of the Issuing CA pool.\n+\nTo set the `issuer-location` attribute:\n* provide the argument `--issuer-pool` on the command line with a fully specified name;\n* provide the argument `--issuer-location` on the command line;\n* set the property `privateca/location`",
              args: {
                name: "ISSUER_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--issuer-pool",
              description:
                "ID of the Issuing CA pool or fully qualified identifier for the Issuing CA pool.\n+\nTo set the `pool` attribute:\n* provide the argument `--issuer-pool` on the command line",
              args: {
                name: "ISSUER_POOL",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--reason",
              description:
                "Revocation reason to include in the CRL. _REASON_ must be one of: *affiliation-changed*, *attribute-authority-compromise*, *certificate-authority-compromise*, *certificate-hold*, *cessation-of-operation*, *key-compromise*, *privilege-withdrawn*, *unspecified*, *superseded*",
              args: {
                name: "REASON",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "affiliation-changed",
                  "attribute-authority-compromise",
                  "certificate-authority-compromise",
                  "certificate-hold",
                  "cessation-of-operation",
                  "key-compromise",
                  "privilege-withdrawn",
                  "unspecified",
                  "superseded",
                ],
              },
            },
            {
              name: "--serial-number",
              description: "The serial number of the certificate",
              args: {
                name: "SERIAL_NUMBER",
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
          name: "update",
          description: "Update an existing certificate",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6059,
            flag6067,
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
            name: "CERTIFICATE",
            description:
              "ID of the CERTIFICATE or fully qualified identifier for the CERTIFICATE.\n+\nTo set the `certificate` attribute:\n* provide the argument `CERTIFICATE` on the command line",
          },
        },
      ],
    },
    {
      name: "locations",
      description: "Manage locations",
      subcommands: [
        {
          name: "list",
          description: "List supported locations for the Private CA GA API",
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
    {
      name: "operations",
      description: "Manage operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an operation ran on the Private CA API",
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
                "The location of the operation to describe.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          description: "List operations for the Private CA API",
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
                "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11054,
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
      name: "pools",
      description: "Manage CA pools",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a CA pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7023,
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
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool.\n+\nTo set the `pool` attribute:\n* provide the argument `pool` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new CA Pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4372,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6054,
            flag6413,
            flag7115,
            flag7356,
            flag11637,
            {
              name: "--publish-ca-cert",
              description:
                "If this is enabled, the following will happen:\n1) The CA certificates will be written to a known location within the CA distribution point.\n2) The AIA extension in all issued certificates will point to the CA cert URL in that distribition point.\n+\nNote that the same bucket may be used for the CRLs if --publish-crl is set.\n+\nEnabled by default, use *--no-publish-ca-cert* to disable",
            },
            {
              name: "--publish-crl",
              description:
                "If this gets enabled, the following will happen:\n1) CRLs will be written to a known location within the CA distribution point.\n2) The CDP extension in all future issued certificates will point to the CRL URL in that distribution point.\n+\nNote that the same bucket may be used for the CA cert if --publish-ca-cert is set.\n+\nCRL publication is not supported for CAs in the DevOps tier.\n+\nEnabled by default, use *--no-publish-crl* to disable",
            },
            flag11868,
            flag11946,
            {
              name: "--tier",
              description:
                "The tier for the Certificate Authority. _TIER_ must be one of: *devops*, *enterprise*",
              args: {
                name: "TIER",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["devops", "enterprise"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL.\n+\nTo set the `pool` attribute:\n* provide the argument `CA_POOL` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a CA pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5635,
            flag5699,
            flag7115,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL.\n+\nTo set the `pool` attribute:\n* provide the argument `CA_POOL` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a CA pool",
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
            flag7023,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool.\n+\nTo set the `pool` attribute:\n* provide the argument `pool` on the command line",
          },
        },
        {
          name: "get-ca-certs",
          description:
            "Get the root CA certs for all active CAs in the CA pool",
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
            flag7115,
            flag7356,
            {
              name: "--output-file",
              description:
                "The path where the concatenated PEM certificates will be written. This will include the root CA certificate for each active CA in the CA pool",
              args: {
                name: "OUTPUT_FILE",
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
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL.\n+\nTo set the `pool` attribute:\n* provide the argument `CA_POOL` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a CA pool",
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
            flag7023,
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
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool.\n+\nTo set the `pool` attribute:\n* provide the argument `pool` on the command line",
          },
        },
        {
          name: "list",
          description: "List CA pools within a project",
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
                "Location of the CA pools. If this is not specified, CA pools across all locations will be listed",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11054,
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
          description: "Remove IAM policy binding for a CA pool",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7023,
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
            name: "POOL",
            description:
              "ID of the CA Pool or fully qualified identifier for the CA Pool.\n+\nTo set the `pool` attribute:\n* provide the argument `pool` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a CA pool",
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
            flag7023,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "POOL",
              description:
                "ID of the CA Pool or fully qualified identifier for the CA Pool.\n+\nTo set the `pool` attribute:\n* provide the argument `pool` on the command line",
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
          description: "Update an existing  CA Pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag4372,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6054,
            flag7115,
            flag7356,
            flag11637,
            {
              name: "--publish-ca-cert",
              description:
                "If this is enabled, the following will happen:\n1) The CA certificates will be written to a known location within the CA distribution point.\n2) The AIA extension in all issued certificates will point to the CA cert URL in that distribution point.\n+\nIf this gets disabled, the AIA extension will not be written to any future certificates issued\nby this CA. However, an existing bucket will not be deleted, and the CA certificates will not\nbe removed from that bucket.\n+\nNote that the same bucket may be used for the CRLs if --publish-crl is set.\n+\nEnabled by default, use *--no-publish-ca-cert* to disable",
            },
            {
              name: "--publish-crl",
              description:
                "If this gets enabled, the following will happen:\n1) CRLs will be written to a known location within the CA distribution point.\n2) The CDP extension in all future issued certificates will point to the CRL URL in that distribution point.\n+\nIf this gets disabled, the CDP extension will not be written to any future certificates issued\nby CAs in this pool, and new CRLs will not be published to that bucket (which affects existing certs).\nHowever, an existing bucket will not be deleted, and any existing CRLs will not be removed\nfrom that bucket.\n+\nNote that the same bucket may be used for the CA cert if --publish-ca-cert is set.\n+\nCRL publication is not supported for CAs in the DevOps tier.\n+\nEnabled by default, use *--no-publish-crl* to disable",
            },
            flag11868,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CA_POOL",
            description:
              "ID of the CA_POOL or fully qualified identifier for the CA_POOL.\n+\nTo set the `pool` attribute:\n* provide the argument `CA_POOL` on the command line",
          },
        },
      ],
    },
    {
      name: "roots",
      description: "Manage root certificate authorities",
      subcommands: [
        {
          name: "create",
          description: "Create a new root certificate authority",
          options: [
            flag42,
            flag46,
            flag839,
            flag1201,
            flag1293,
            flag2292,
            flag2607,
            flag2609,
            flag3852,
            flag4005,
            flag4708,
            flag4900,
            flag4902,
            flag5091,
            flag5108,
            flag5453,
            flag5699,
            flag6027,
            {
              name: "--key-algorithm",
              description:
                "The crypto algorithm to use for creating a managed KMS key for the Certificate Authority. The default is *rsa-pkcs1-4096-sha256*. _KEY_ALGORITHM_ must be one of: *ec-p256-sha256*, *ec-p384-sha384*, *rsa-pkcs1-2048-sha256*, *rsa-pkcs1-3072-sha256*, *rsa-pkcs1-4096-sha256*, *rsa-pss-2048-sha256*, *rsa-pss-3072-sha256*, *rsa-pss-4096-sha256*",
              args: {
                name: "KEY_ALGORITHM",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "ec-p256-sha256",
                  "ec-p384-sha384",
                  "rsa-pkcs1-2048-sha256",
                  "rsa-pkcs1-3072-sha256",
                  "rsa-pkcs1-4096-sha256",
                  "rsa-pss-2048-sha256",
                  "rsa-pss-3072-sha256",
                  "rsa-pss-4096-sha256",
                ],
              },
            },
            flag6250,
            flag6322,
            flag6303,
            flag6331,
            flag6341,
            flag6349,
            flag6413,
            flag7118,
            flag7356,
            {
              name: "--max-chain-length",
              description:
                "Maximum depth of subordinate CAs allowed under this CA for a CA certificate. This can only be provided if neither `--use-preset-profile` nor `--unconstrained-chain-length` are provided",
              args: {
                name: "MAX_CHAIN_LENGTH",
                description: "String",
                suggestions: [],
              },
            },
            flag8075,
            flag8076,
            flag8077,
            flag8078,
            flag8079,
            flag8081,
            flag8082,
            flag8083,
            flag8084,
            flag11390,
            flag11637,
            flag11946,
            flag14491,
            flag14487,
            flag14975,
            flag15101,
            flag15247,
            flag15296,
            flag15315,
            {
              name: "--validity",
              description:
                "The validity of this CA, as an ISO8601 duration. Defaults to 10 years",
              args: {
                name: "VALIDITY",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the Certificate Authority or fully qualified identifier for the Certificate Authority.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Root Certificate Authority",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5631,
            flag5635,
            flag5699,
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag13859,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a root Certificate Authority",
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
            flag7024,
            flag7356,
            flag11387,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `certificate_authority` on the command line",
          },
        },
        {
          name: "disable",
          description: "Disable a root certificate authority",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5635,
            flag5699,
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "enable",
          description: "Enable a root certificate authority",
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
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "list",
          description: "List root certificate authorities",
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
                "Location of the certificate authorities. If omitted, root CAs across all regions will be listed",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11054,
            {
              name: "--pool",
              description:
                "ID of the CA Pool where the certificate authorities reside. If omitted, root CAs across all CA pools will be listed",
              args: { name: "POOL", description: "String", suggestions: [] },
            },
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
          name: "undelete",
          description: "Undelete a root Certificate Authority",
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
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an existing root certificate authority",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
      ],
    },
    {
      name: "subordinates",
      description: "Manage subordinate certificate authorities",
      subcommands: [
        {
          name: "activate",
          description:
            "Activate a subordinate certificate authority awaiting user activation",
          options: [
            flag42,
            flag46,
            flag839,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7116,
            flag7356,
            {
              name: "--pem-chain",
              description:
                "A file containing a list of PEM-encoded certificates, starting with the current CA certificate and ending with the root CA certificate",
              args: {
                name: "PEM_CHAIN",
                description: "String",
                suggestions: [],
              },
            },
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new subordinate certificate authority",
          options: [
            flag42,
            flag46,
            flag839,
            flag1201,
            flag1293,
            flag2292,
            {
              name: "--create-csr",
              description:
                "Indicates that a CSR should be generated which can be signed by the issuing CA. This must be set if --issuer is not provided",
            },
            {
              name: "--csr-output-file",
              description:
                "The path where the resulting PEM-encoded CSR file should be written",
              args: {
                name: "CSR_OUTPUT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2607,
            flag2609,
            flag3852,
            flag4005,
            flag4708,
            flag4900,
            flag4902,
            flag5091,
            flag5108,
            flag5453,
            flag5699,
            flag6027,
            {
              name: "--issuer-ca",
              description:
                "The Certificate Authority ID of the CA to issue the subordinate CA certificate from. This ID is optional. If ommitted, any available ENABLED CA in the issuing CA pool will be chosen",
              args: {
                name: "ISSUER_CA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--issuer-location",
              description:
                "The location of the Issuer.\n+\nTo set the `location` attribute:\n* provide the argument `--issuer-pool` on the command line with a fully specified name;\n* provide the argument `--issuer-location` on the command line;\n* set the property `privateca/location`",
              args: {
                name: "ISSUER_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--issuer-pool",
              description:
                "ID of the Issuer or fully qualified identifier for the Issuer.\n+\nTo set the `pool` attribute:\n* provide the argument `--issuer-pool` on the command line",
              args: {
                name: "ISSUER_POOL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--key-algorithm",
              description:
                "The crypto algorithm to use for creating a managed KMS key for the Certificate Authority. The default is *rsa-pkcs1-2048-sha256*. _KEY_ALGORITHM_ must be one of: *ec-p256-sha256*, *ec-p384-sha384*, *rsa-pkcs1-2048-sha256*, *rsa-pkcs1-3072-sha256*, *rsa-pkcs1-4096-sha256*, *rsa-pss-2048-sha256*, *rsa-pss-3072-sha256*, *rsa-pss-4096-sha256*",
              args: {
                name: "KEY_ALGORITHM",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "ec-p256-sha256",
                  "ec-p384-sha384",
                  "rsa-pkcs1-2048-sha256",
                  "rsa-pkcs1-3072-sha256",
                  "rsa-pkcs1-4096-sha256",
                  "rsa-pss-2048-sha256",
                  "rsa-pss-3072-sha256",
                  "rsa-pss-4096-sha256",
                ],
              },
            },
            flag6250,
            flag6322,
            flag6303,
            flag6331,
            flag6341,
            flag6349,
            flag6413,
            flag7118,
            flag7356,
            flag7612,
            flag8075,
            flag8076,
            flag8077,
            flag8078,
            flag8079,
            flag8081,
            flag8082,
            flag8083,
            flag8084,
            flag11390,
            flag11637,
            flag11946,
            flag14491,
            flag14487,
            flag14975,
            flag15101,
            flag15247,
            flag15296,
            flag15315,
            {
              name: "--validity",
              description:
                "The validity of this CA, as an ISO8601 duration. Defaults to 3 years",
              args: {
                name: "VALIDITY",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the Certificate Authority or fully qualified identifier for the Certificate Authority.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a subordinate certificate authority",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5631,
            flag5635,
            flag5699,
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag13859,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get metadata for a subordinate certificate authority",
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
            flag7024,
            flag7356,
            flag11387,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `certificate_authority` on the command line",
          },
        },
        {
          name: "disable",
          description: "Disable a subordinate certificate authority",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5635,
            flag5699,
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "enable",
          description: "Enable a subordinate certificate authority",
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
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "get-csr",
          description:
            "Get the CSR for a subordinate certificate authority that has not yet been activated",
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
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "list",
          description: "List subordinate certificate authorities",
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
            flag6515,
            {
              name: "--location",
              description:
                'Location of the certificate authorities. If omitted, subordinate CAs across all regions will be listed. Note that, if it is populated, the privateca/location property will be used if this flag is not specified. To ignore this property, specify "-" as the location',
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11054,
            {
              name: "--pool",
              description:
                "ID of the CA Pool where the certificate authorities reside. If omitted, subordinate CAs across all CA pools will be listed",
              args: { name: "POOL", description: "String", suggestions: [] },
            },
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
          name: "undelete",
          description: "Undelete a subordinate certificate authority",
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
            flag7116,
            flag7356,
            flag11389,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an existing subordinate certificate authority",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7116,
            flag7356,
            {
              name: "--pem-chain",
              description:
                "A file containing a list of PEM-encoded certificates that represent the issuing chain of this CA. Please note that the certificate corresponding to this specific CA should be excluded",
              args: {
                name: "PEM_CHAIN",
                description: "String",
                suggestions: [],
              },
            },
            flag11389,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_AUTHORITY",
            description:
              "ID of the CERTIFICATE_AUTHORITY or fully qualified identifier for the CERTIFICATE_AUTHORITY.\n+\nTo set the `certificate_authority` attribute:\n* provide the argument `CERTIFICATE_AUTHORITY` on the command line",
          },
        },
      ],
    },
    {
      name: "templates",
      description: "Manage certificate templates",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a certificate template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7025,
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
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template.\n+\nTo set the `certificate_template` attribute:\n* provide the argument `certificate_template` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new certificate template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--copy-all-requested-extensions",
              description:
                "If this is set, all extensions specified in the certificate  request will be copied into the signed certificate",
            },
            flag2494,
            flag2495,
            {
              name: "--copy-sans",
              description:
                "If this is specified, the Subject Alternative Name extension from the certificate request will be copied into the signed certificate. Specify --no-copy-sans to drop any caller-specified SANs in the certificate request",
            },
            {
              name: "--copy-subject",
              description:
                "If this is specified, the Subject from the certificate request will be copied into the signed certificate. Specify --no-copy-subject to drop any caller-specified subjects from the certificate request",
            },
            flag3085,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5608,
            flag5699,
            flag6413,
            flag7117,
            flag7356,
            {
              name: "--maximum-lifetime",
              description:
                "If this is set, then issued certificate's lifetime will be truncated to the value provided. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for the issued certificate. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it",
              args: {
                name: "MAXIMUM_LIFETIME",
                description: "String",
                suggestions: [],
              },
            },
            flag11489,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE.\n+\nTo set the `certificate template` attribute:\n* provide the argument `CERTIFICATE_TEMPLATE` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a certificate template",
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
            flag7117,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE.\n+\nTo set the `certificate template` attribute:\n* provide the argument `CERTIFICATE_TEMPLATE` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a certificate template",
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
            flag7025,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template.\n+\nTo set the `certificate_template` attribute:\n* provide the argument `certificate_template` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a certificate template",
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
            flag7025,
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
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template.\n+\nTo set the `certificate_template` attribute:\n* provide the argument `certificate_template` on the command line",
          },
        },
        {
          name: "list",
          description: "List certificate templates within a project",
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
                'The location you want to list the certificate templates for. Set this to "-" to list certificate templates across all locations',
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11054,
            flag11637,
            flag11946,
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*.\n The default is *name*",
              args: { name: "FIELD", description: "List", suggestions: [] },
            },
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a certificate template",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7025,
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
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the Certificate Template or fully qualified identifier for the Certificate Template.\n+\nTo set the `certificate_template` attribute:\n* provide the argument `certificate_template` on the command line",
          },
        },
        {
          name: "replicate",
          description: "Replicate a certificate template to multiple locations",
          options: [
            flag42,
            flag46,
            {
              name: "--all-locations",
              description: "Replicate this template to all supported locations",
            },
            flag1201,
            flag2292,
            {
              name: "--continue-on-error",
              description:
                "Continue replicating the template to other locations even if an error is encountered. If this is set, an error in one location will be logged but will not prevent replication to other locations",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7117,
            flag7356,
            {
              name: "--overwrite",
              description:
                "Overwrite any existing templates with the same name, if they exist",
            },
            flag11637,
            flag11946,
            {
              name: "--target-locations",
              description: "Replicate this template to the given locations",
              args: { name: "LOCATION", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE.\n+\nTo set the `certificate template` attribute:\n* provide the argument `CERTIFICATE_TEMPLATE` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a certificate template",
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
            flag7025,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "CERTIFICATE_TEMPLATE",
              description:
                "ID of the Certificate Template or fully qualified identifier for the Certificate Template.\n+\nTo set the `certificate_template` attribute:\n* provide the argument `certificate_template` on the command line",
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
          description: "Update a certificate template",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--copy-all-requested-extensions",
              description:
                "If this is set, all extensions, whether known or specified by OID, that are specified in the certificate request will be copied into the signed certificate",
            },
            flag2494,
            flag2495,
            {
              name: "--copy-sans",
              description:
                "If this is specified, the Subject Alternative Name extension from the certificate request will be copied into the signed certificate. Specify --no-copy-sans to drop any caller-specified SANs in the certificate request",
            },
            {
              name: "--copy-subject",
              description:
                "If this is specified, the Subject from the certificate request will be copied into the signed certificate. Specify --no-copy-subject to drop any caller-specified subjects from the certificate request",
            },
            flag3085,
            {
              name: "--drop-known-extensions",
              description:
                "If this is set, then all known extensions will be removed from the template, prohibiting any known x509 extensions to be specified by the requester",
            },
            {
              name: "--drop-oid-extensions",
              description:
                "If this is set, then all existing OID extensions will be removed from the template, prohibiting any extensions specified by OIDs to be specified by the requester",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5608,
            flag5699,
            flag7117,
            flag7356,
            flag11489,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CERTIFICATE_TEMPLATE",
            description:
              "ID of the CERTIFICATE_TEMPLATE or fully qualified identifier for the CERTIFICATE_TEMPLATE.\n+\nTo set the `certificate template` attribute:\n* provide the argument `CERTIFICATE_TEMPLATE` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
