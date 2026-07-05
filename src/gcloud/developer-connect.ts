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
const flag513: Fig.Option = {
  name: "--annotations",
  description:
    'Allows clients to store small amounts of arbitrary data.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ANNOTATIONS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
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
const flag1213: Fig.Option = {
  name: "--bitbucket-cloud-config-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--bitbucket-cloud-config-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "BITBUCKET_CLOUD_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag1214: Fig.Option = {
  name: "--bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "BITBUCKET_CLOUD_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag1218: Fig.Option = {
  name: "--bitbucket-data-center-config-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--bitbucket-data-center-config-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "BITBUCKET_DATA_CENTER_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag1221: Fig.Option = {
  name: "--bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "BITBUCKET_DATA_CENTER_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag1222: Fig.Option = {
  name: "--bitbucket-data-center-config-service-directory",
  description:
    "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `--bitbucket-data-center-config-service-directory` on the command line",
  args: {
    name: "BITBUCKET_DATA_CENTER_CONFIG_SERVICE_DIRECTORY",
    description: "String",
    suggestions: [],
  },
};
const flag1223: Fig.Option = {
  name: "--bitbucket-data-center-config-ssl-ca-certificate",
  description:
    "SSL certificate authority to trust when making requests to Bitbucket Data\nCenter",
  args: {
    name: "BITBUCKET_DATA_CENTER_CONFIG_SSL_CA_CERTIFICATE",
    description: "String",
    suggestions: [],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2332: Fig.Option = {
  name: "--connection",
  description:
    "The connection id of the gitRepositoryLink resource.\n+\nTo set the `connection` attribute:\n* provide the argument `git_repository_link` on the command line with a fully specified name;\n* provide the argument `--connection` on the command line",
  args: { name: "CONNECTION", description: "String", suggestions: [] },
};
const flag2584: Fig.Option = {
  name: "--crypto-key-config-reference",
  description:
    "ID of the cryptoKey or fully qualified identifier for the cryptoKey.\n+\nTo set the `crypto-key` attribute:\n* provide the argument `--crypto-key-config-reference` on the command line",
  args: {
    name: "CRYPTO_KEY_CONFIG_REFERENCE",
    description: "String",
    suggestions: [],
  },
};
const flag4545: Fig.Option = {
  name: "--etag",
  description:
    "This checksum is computed by the server based on the value of other\nfields, and may be sent on update and delete requests to ensure the\nclient has an up-to-date value before proceeding",
  args: { name: "ETAG", description: "String", suggestions: [] },
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
const flag5240: Fig.Option = {
  name: "--github-config-app-installation-id",
  description: "GitHub App installation id",
  args: {
    name: "GITHUB_CONFIG_APP_INSTALLATION_ID",
    description: "Int",
    suggestions: [],
  },
};
const flag5242: Fig.Option = {
  name: "--github-config-authorizer-credential-oauth-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--github-config-authorizer-credential-oauth-token-secret-version` on the command line",
  args: {
    name: "GITHUB_CONFIG_AUTHORIZER_CREDENTIAL_OAUTH_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5243: Fig.Option = {
  name: "--github-enterprise-config-app-id",
  description: "ID of the GitHub App created from the manifest",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG_APP_ID",
    description: "Int",
    suggestions: [],
  },
};
const flag5244: Fig.Option = {
  name: "--github-enterprise-config-app-installation-id",
  description: "ID of the installation of the GitHub App",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG_APP_INSTALLATION_ID",
    description: "Int",
    suggestions: [],
  },
};
const flag5248: Fig.Option = {
  name: "--github-enterprise-config-private-key-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--github-enterprise-config-private-key-secret-version` on the command line",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG_PRIVATE_KEY_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5249: Fig.Option = {
  name: "--github-enterprise-config-service-directory",
  description:
    "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `--github-enterprise-config-service-directory` on the command line",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG_SERVICE_DIRECTORY",
    description: "String",
    suggestions: [],
  },
};
const flag5250: Fig.Option = {
  name: "--github-enterprise-config-ssl-ca-certificate",
  description: "SSL certificate to use for requests to GitHub Enterprise",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG_SSL_CA_CERTIFICATE",
    description: "String",
    suggestions: [],
  },
};
const flag5251: Fig.Option = {
  name: "--github-enterprise-config-webhook-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--github-enterprise-config-webhook-secret-version` on the command line",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG_WEBHOOK_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5254: Fig.Option = {
  name: "--gitlab-config-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--gitlab-config-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "GITLAB_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5255: Fig.Option = {
  name: "--gitlab-config-read-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--gitlab-config-read-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "GITLAB_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5257: Fig.Option = {
  name: "--gitlab-enterprise-config-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--gitlab-enterprise-config-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "GITLAB_ENTERPRISE_CONFIG_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5260: Fig.Option = {
  name: "--gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version` on the command line",
  args: {
    name: "GITLAB_ENTERPRISE_CONFIG_READ_AUTHORIZER_CREDENTIAL_USER_TOKEN_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5261: Fig.Option = {
  name: "--gitlab-enterprise-config-service-directory",
  description:
    "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `--gitlab-enterprise-config-service-directory` on the command line",
  args: {
    name: "GITLAB_ENTERPRISE_CONFIG_SERVICE_DIRECTORY",
    description: "String",
    suggestions: [],
  },
};
const flag5262: Fig.Option = {
  name: "--gitlab-enterprise-config-ssl-ca-certificate",
  description:
    "SSL Certificate Authority certificate to use for requests to GitLab\nEnterprise instance",
  args: {
    name: "GITLAB_ENTERPRISE_CONFIG_SSL_CA_CERTIFICATE",
    description: "String",
    suggestions: [],
  },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5515: Fig.Option = {
  name: "--http-config-basic-authentication-password-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--http-config-basic-authentication-password-secret-version` on the command line",
  args: {
    name: "HTTP_CONFIG_BASIC_AUTHENTICATION_PASSWORD_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5518: Fig.Option = {
  name: "--http-config-bearer-token-authentication-secret-version",
  description:
    "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--http-config-bearer-token-authentication-secret-version` on the command line",
  args: {
    name: "HTTP_CONFIG_BEARER_TOKEN_AUTHENTICATION_SECRET_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag5520: Fig.Option = {
  name: "--http-config-service-directory",
  description:
    "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `--http-config-service-directory` on the command line",
  args: {
    name: "HTTP_CONFIG_SERVICE_DIRECTORY",
    description: "String",
    suggestions: [],
  },
};
const flag5521: Fig.Option = {
  name: "--http-config-ssl-ca-certificate",
  description:
    "The SSL certificate to use for requests to the HTTP service provider",
  args: {
    name: "HTTP_CONFIG_SSL_CA_CERTIFICATE",
    description: "String",
    suggestions: [],
  },
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
const flag6245: Fig.Option = {
  name: "--key-ring",
  description:
    "The keyRing id of the cryptoKey resource.\n+\nTo set the `key-ring` attribute:\n* provide the argument `--crypto-key-config-reference` on the command line with a fully specified name;\n* provide the argument `--key-ring` on the command line",
  args: { name: "KEY_RING", description: "String", suggestions: [] },
};
const flag6389: Fig.Option = {
  name: "--labels",
  description:
    'Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "LABELS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
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
const flag6957: Fig.Option = {
  name: "--location",
  description:
    "The location id of the connection resource.\n+\nTo set the `location` attribute:\n* provide the argument `connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6970: Fig.Option = {
  name: "--location",
  description:
    "The location id of the insightsConfig resource.\n+\nTo set the `location` attribute:\n* provide the argument `insights_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7250: Fig.Option = {
  name: "--location",
  description:
    "The location id of the gitRepositoryLink resource.\n+\nTo set the `location` attribute:\n* provide the argument `git_repository_link` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7266: Fig.Option = {
  name: "--location",
  description:
    "The location id of the operation resource.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7308: Fig.Option = {
  name: "--location",
  description:
    "The region of the insight config.\n+\nTo set the `location` attribute:\n* provide the argument `insights_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8112: Fig.Option = {
  name: "--namespace",
  description:
    "For resources [bitbucket-data-center-config-service-directory, github-enterprise-config-service-directory, gitlab-enterprise-config-service-directory, http-config-service-directory], provides fallback value for resource namespace attribute. When the resource's full URI path is not provided, namespace will fallback to this flag value",
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
const flag12844: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes after the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
};
const flag12847: Fig.Option = {
  name: "--request-id",
  description:
    "An optional request ID to identify requests. Specify a unique request ID\nso that if you must retry your request, the server will know to ignore\nthe request if it has already been completed. The server will guarantee\nthat for at least 60 minutes since the first request.\n+\nFor example, consider a situation where you make an initial request and the\nrequest times out. If you make the request again with the same request\nID, the server can check if original operation with the same request ID\nwas received, and if so, will ignore the second request. This prevents\nclients from accidentally creating duplicate commitments.\n+\nThe request ID must be a valid UUID with the exception that zero UUID is\nnot supported (00000000-0000-0000-0000-000000000000)",
  args: { name: "REQUEST_ID", description: "String", suggestions: [] },
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
const flag15372: Fig.Option = {
  name: "--validate-only",
  description: "If set, validate the request, but do not actually post it",
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
  name: "developer-connect",
  description: "Manage Developer Connect resources",
  subcommands: [
    {
      name: "connections",
      description: "Manage connection resources",
      subcommands: [
        {
          name: "create",
          description: "Create a connection resource",
          options: [
            flag42,
            flag46,
            flag513,
            flag720,
            flag1201,
            flag1213,
            flag1214,
            {
              name: "--bitbucket-cloud-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--bitbucket-cloud-config-webhook-secret-version` on the command line",
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--bitbucket-cloud-config-workspace",
              description:
                "The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform",
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_WORKSPACE",
                description: "String",
                suggestions: [],
              },
            },
            flag1218,
            {
              name: "--bitbucket-data-center-config-host-uri",
              description:
                "The URI of the Bitbucket Data Center host this connection is for",
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1221,
            flag1222,
            flag1223,
            {
              name: "--bitbucket-data-center-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--bitbucket-data-center-config-webhook-secret-version` on the command line",
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag2584,
            {
              name: "--disabled",
              description:
                "If disabled is set to true, functionality is disabled for this connection.\nRepository based API methods and webhooks processing for repositories in\nthis connection will be disabled",
            },
            flag4545,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--git-proxy-config-enabled",
              description:
                "Setting this to true allows the git proxy to be used for performing git\noperations on the repositories linked in the connection",
            },
            {
              name: "--github-config-app",
              description:
                "The GitHub Application that was installed to the GitHub user or\norganization. _GITHUB_CONFIG_APP_ must be one of:\n+\n*dataform*::: The Dataform GitHub Application.\n*developer-connect*::: The Developer Connect GitHub Application.\n*firebase*::: The Firebase GitHub Application.\n*gemini-code-assist*::: The Gemini Code Assist Application.\n:::\n+",
              args: {
                name: "GITHUB_CONFIG_APP",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "dataform",
                  "developer-connect",
                  "firebase",
                  "gemini-code-assist",
                ],
              },
            },
            flag5240,
            flag5242,
            flag5243,
            flag5244,
            {
              name: "--github-enterprise-config-host-uri",
              description:
                "The URI of the GitHub Enterprise host this connection is for",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--github-enterprise-config-organization",
              description:
                "GitHub Enterprise organization in which the GitHub App is created",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag5248,
            flag5249,
            flag5250,
            flag5251,
            flag5254,
            flag5255,
            {
              name: "--gitlab-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--gitlab-config-webhook-secret-version` on the command line",
              args: {
                name: "GITLAB_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag5257,
            {
              name: "--gitlab-enterprise-config-host-uri",
              description:
                "The URI of the GitLab Enterprise host this connection is for",
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag5260,
            flag5261,
            flag5262,
            {
              name: "--gitlab-enterprise-config-webhook-secret-version",
              description:
                "ID of the secretVersion or fully qualified identifier for the secretVersion.\n+\nTo set the `secret_version` attribute:\n* provide the argument `--gitlab-enterprise-config-webhook-secret-version` on the command line",
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_WEBHOOK_SECRET_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5515,
            {
              name: "--http-config-basic-authentication-username",
              description: "The username to authenticate as",
              args: {
                name: "HTTP_CONFIG_BASIC_AUTHENTICATION_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5518,
            {
              name: "--http-config-host-uri",
              description: "The service provider's https endpoint",
              args: {
                name: "HTTP_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag5520,
            flag5521,
            flag5699,
            flag6245,
            flag6389,
            {
              name: "--location",
              description:
                "For resources [connection, bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-webhook-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-service-directory, bitbucket-data-center-config-webhook-secret-version, crypto-key-config-reference, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-service-directory, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-config-webhook-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-service-directory, gitlab-enterprise-config-webhook-secret-version, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version, http-config-service-directory, secure-source-manager-instance-config], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag8112,
            flag11637,
            flag11946,
            flag12847,
            {
              name: "--secret",
              description:
                "For resources [bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-webhook-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-webhook-secret-version, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-config-webhook-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-webhook-secret-version, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version], provides fallback value for resource secret attribute. When the resource's full URI path is not provided, secret will fallback to this flag value",
              args: { name: "SECRET", description: "String", suggestions: [] },
            },
            {
              name: "--secure-source-manager-instance-config",
              description:
                "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `--secure-source-manager-instance-config` on the command line",
              args: {
                name: "SECURE_SOURCE_MANAGER_INSTANCE_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15372,
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a single connection",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "The current etag of the Connection.\nIf an etag is provided and does not match the current etag of the\nConnection, deletion will be blocked and an ABORTED error will be returned",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6957,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15372,
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get details of a single connection resource",
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
            flag6957,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "git-repository-links",
          description: "Manage git repository link resources",
          subcommands: [
            {
              name: "create",
              description: "Create a git repository link",
              options: [
                flag42,
                flag46,
                flag513,
                flag720,
                flag1201,
                {
                  name: "--clone-uri",
                  description: "Git Clone URI",
                  args: {
                    name: "CLONE_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                flag2332,
                flag4545,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6389,
                flag7250,
                flag7356,
                flag11637,
                flag11946,
                flag12847,
                flag14975,
                flag15315,
                flag15372,
                flag15424,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink.\n+\nTo set the `git_repository_link` attribute:\n* provide the argument `git_repository_link` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a single git repository link",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag2332,
                flag4545,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7250,
                flag7356,
                flag11637,
                flag11946,
                flag12844,
                flag14975,
                flag15315,
                flag15372,
                flag15424,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink.\n+\nTo set the `git_repository_link` attribute:\n* provide the argument `git_repository_link` on the command line",
              },
            },
            {
              name: "describe",
              description: "Get details of a single git repository link",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2332,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7250,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink.\n+\nTo set the `git_repository_link` attribute:\n* provide the argument `git_repository_link` on the command line",
              },
            },
            {
              name: "fetch-read-token",
              description: "Fetch the read token of a given gitRepositoryLink",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2332,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7250,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink.\n+\nTo set the `git_repository_link` attribute:\n* provide the argument `git_repository_link` on the command line",
              },
            },
            {
              name: "fetch-read-write-token",
              description:
                "Fetch the read/write token of a given gitRepositoryLink",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2332,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7250,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "GIT_REPOSITORY_LINK",
                description:
                  "ID of the gitRepositoryLink or fully qualified identifier for the gitRepositoryLink.\n+\nTo set the `git_repository_link` attribute:\n* provide the argument `git_repository_link` on the command line",
              },
            },
            {
              name: "list",
              description: "List all git repository links in a connection",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--connection",
                  description:
                    "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `--connection` on the command line",
                  args: {
                    name: "CONNECTION",
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
                {
                  name: "--location",
                  description:
                    "The location id of the connection resource.\n+\nTo set the `location` attribute:\n* provide the argument `--connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
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
          name: "list",
          description: "List connections",
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
            flag6692,
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
          description: "Update the parameters of a single connection",
          options: [
            flag42,
            flag46,
            {
              name: "--allow-missing",
              description:
                "If set to true, and the connection is not found a new connection\nwill be created. In this situation `update_mask` is ignored.\nThe creation will succeed only if the input connection has all the\nnecessary information (e.g a github_config with both  user_oauth_token and\ninstallation_id properties). Use *--allow-missing* to enable and *--no-allow-missing* to disable",
            },
            {
              name: "--annotations",
              description:
                'Set annotations to new value. Allows clients to store small amounts of arbitrary data.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag1213,
            flag1214,
            {
              name: "--bitbucket-cloud-config-workspace",
              description:
                "The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform",
              args: {
                name: "BITBUCKET_CLOUD_CONFIG_WORKSPACE",
                description: "String",
                suggestions: [],
              },
            },
            flag1218,
            {
              name: "--bitbucket-data-center-config-host-uri",
              description:
                "The URI of the Bitbucket Data Center host this connection is for",
              args: {
                name: "BITBUCKET_DATA_CENTER_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1221,
            flag1222,
            flag1223,
            {
              name: "--clear-annotations",
              description: "Clear annotations value and set to empty map",
            },
            {
              name: "--clear-bitbucket-cloud-config",
              description:
                "Set connection.bitbucketCloudConfig back to default value",
            },
            {
              name: "--clear-bitbucket-data-center-config",
              description:
                "Set connection.bitbucketDataCenterConfig back to default value",
            },
            {
              name: "--clear-crypto-key-config",
              description:
                "Set connection.cryptoKeyConfig back to default value",
            },
            {
              name: "--clear-git-proxy-config",
              description:
                "Set connection.gitProxyConfig back to default value",
            },
            {
              name: "--clear-github-config",
              description: "Set connection.githubConfig back to default value",
            },
            {
              name: "--clear-github-enterprise-config",
              description:
                "Set connection.githubEnterpriseConfig back to default value",
            },
            {
              name: "--clear-github-enterprise-config-private-key-secret-version",
              description:
                "Clear github_enterprise_config_private_key_secret_version value and set to null",
            },
            {
              name: "--clear-github-enterprise-config-webhook-secret-version",
              description:
                "Clear github_enterprise_config_webhook_secret_version value and set to null",
            },
            {
              name: "--clear-gitlab-config",
              description: "Set connection.gitlabConfig back to default value",
            },
            {
              name: "--clear-gitlab-enterprise-config",
              description:
                "Set connection.gitlabEnterpriseConfig back to default value",
            },
            {
              name: "--clear-http-config",
              description: "Set connection.httpConfig back to default value",
            },
            {
              name: "--clear-http-config-basic-authentication-password-secret-version",
              description:
                "Clear http_config_basic_authentication_password_secret_version value and set to null",
            },
            {
              name: "--clear-http-config-bearer-token-authentication-secret-version",
              description:
                "Clear http_config_bearer_token_authentication_secret_version value and set to null",
            },
            {
              name: "--clear-labels",
              description: "Clear labels value and set to empty map",
            },
            flag2292,
            flag2584,
            {
              name: "--disabled",
              description:
                "If disabled is set to true, functionality is disabled for this connection.\nRepository based API methods and webhooks processing for repositories in\nthis connection will be disabled. Use *--disabled* to enable and *--no-disabled* to disable",
            },
            flag4545,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--git-proxy-config-enabled",
              description:
                "Setting this to true allows the git proxy to be used for performing git\noperations on the repositories linked in the connection. Use *--git-proxy-config-enabled* to enable and *--no-git-proxy-config-enabled* to disable",
            },
            flag5240,
            flag5242,
            flag5243,
            flag5244,
            {
              name: "--github-enterprise-config-host-uri",
              description:
                "The URI of the GitHub Enterprise host this connection is for",
              args: {
                name: "GITHUB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag5248,
            flag5249,
            flag5250,
            flag5251,
            flag5254,
            flag5255,
            flag5257,
            {
              name: "--gitlab-enterprise-config-host-uri",
              description:
                "The URI of the GitLab Enterprise host this connection is for",
              args: {
                name: "GITLAB_ENTERPRISE_CONFIG_HOST_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag5260,
            flag5261,
            flag5262,
            flag5453,
            flag5515,
            {
              name: "--http-config-basic-authentication-username",
              description: "The username to authenticate as",
              args: {
                name: "HTTP_CONFIG_BASIC_AUTHENTICATION_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5518,
            flag5520,
            flag5521,
            flag5699,
            flag6245,
            {
              name: "--labels",
              description:
                'Set labels to new value. Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--location",
              description:
                "For resources [connection, bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-service-directory, crypto-key-config-reference, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-service-directory, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-service-directory, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version, http-config-service-directory], provides fallback value for resource location attribute. When the resource's full URI path is not provided, location will fallback to this flag value",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag8112,
            flag11637,
            flag11946,
            {
              name: "--remove-annotations",
              description:
                'Remove existing value from map annotations. Sets `remove_annotations` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-annotations=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-annotations=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_ANNOTATIONS",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--remove-labels",
              description:
                'Remove existing value from map labels. Sets `remove_labels` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-labels=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-labels=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_LABELS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag12847,
            {
              name: "--secret",
              description:
                "For resources [bitbucket-cloud-config-authorizer-credential-user-token-secret-version, bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-authorizer-credential-user-token-secret-version, bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version, github-config-authorizer-credential-oauth-token-secret-version, github-enterprise-config-private-key-secret-version, github-enterprise-config-webhook-secret-version, gitlab-config-authorizer-credential-user-token-secret-version, gitlab-config-read-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-authorizer-credential-user-token-secret-version, gitlab-enterprise-config-read-authorizer-credential-user-token-secret-version, http-config-basic-authentication-password-secret-version, http-config-bearer-token-authentication-secret-version], provides fallback value for resource secret attribute. When the resource's full URI path is not provided, secret will fallback to this flag value",
              args: { name: "SECRET", description: "String", suggestions: [] },
            },
            flag14975,
            {
              name: "--update-annotations",
              description:
                'Update annotations value or add key value pair. Allows clients to store small amounts of arbitrary data.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--update-labels",
              description:
                'Update labels value or add key value pair. Labels as key value pairs.\n+\n*KEY*:::\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n*VALUE*:::\nValues must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-labels=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-labels=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-labels=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_LABELS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            {
              name: "--validate-only",
              description:
                "If set, validate the request, but do not actually post it. Use *--validate-only* to enable and *--no-validate-only* to disable",
            },
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
      ],
    },
    {
      name: "insights-configs",
      description: "Manage Insights Config resources",
      subcommands: [
        {
          name: "create",
          description: "Create an insight config",
          options: [
            flag42,
            flag46,
            {
              name: "--app-hub-application",
              description:
                "The App Hub application to which the insight config is associated",
              args: {
                name: "APP_HUB_APPLICATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--artifact-config",
              description:
                "Specifies a single artifact configuration. This flag can be repeated for\nmultiple configurations.\n+\nEach configuration can be provided in a key-value format.\n+\nFormat examples:\n`--artifact-config=uri={REGION}-docker.pkg.dev/my-project/my-repo/my-image,buildProject=my-project`\n`--artifact-config=[uri={REGION}-docker.pkg.dev/my-project/my-repo/my-image,buildProject=my-project]`\n+\nSupported keys within a configuration:\n- `buildProject`: String, e.g., `my-project`\n- `uri`: String, e.g., `{REGION}-docker.pkg.dev/my-project/my-repo/my-image`",
              args: {
                name: "ARTIFACT_CONFIG_ITEM",
                description:
                  "Googlecloudsdk.command_lib.developer_connect.flags:ArtifactConfigType",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7308,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--target-projects",
              description:
                "A comma-separated list of target project IDs/numbers to which the insight config is associated.\n+\nFormat examples:\n`--target-projects=123567890,my-project`\n`--target-projects=projects/1234567890,projects/my-project`",
              args: {
                name: "TARGET_PROJECTS",
                description: "List",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insights_config or fully qualified identifier for the insights_config.\n+\nTo set the `insightsConfigs` attribute:\n* provide the argument `insights_config` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete insightsConfigs",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4545,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6970,
            flag7356,
            flag11637,
            flag11946,
            flag12844,
            flag14975,
            flag15315,
            flag15372,
            flag15424,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insightsConfig or fully qualified identifier for the insightsConfig.\n+\nTo set the `insights_config` attribute:\n* provide the argument `insights_config` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe insightsConfigs",
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
            flag6970,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insightsConfig or fully qualified identifier for the insightsConfig.\n+\nTo set the `insights_config` attribute:\n* provide the argument `insights_config` on the command line",
          },
        },
        {
          name: "list",
          description: "List insightsConfigs",
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
            flag6692,
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
          description: "Update the configuration of an insight config",
          options: [
            flag42,
            flag46,
            {
              name: "--artifact-uri",
              description:
                "Identifier for the specific artifact you want to update",
              args: {
                name: "ARTIFACT_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--build-project",
              description:
                "The project ID of the project to where the artifact is built",
              args: {
                name: "BUILD_PROJECT",
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
            flag7308,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--run-discovery",
              description:
                "Sets the state of the insight config to PENDING and kicks off the discovery flow",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSIGHTS_CONFIG",
            description:
              "ID of the insights_config or fully qualified identifier for the insights_config.\n+\nTo set the `insightsConfigs` attribute:\n* provide the argument `insights_config` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Operation resources",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel operations",
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
            flag7266,
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
          name: "delete",
          description: "Delete operations",
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
            flag7266,
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
          name: "describe",
          description: "Describe operations",
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
            flag7266,
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
          description: "List operations",
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
            flag6692,
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
          description: "Wait operations",
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
            flag7266,
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
      ],
    },
  ],
};

export default completionSpec;
