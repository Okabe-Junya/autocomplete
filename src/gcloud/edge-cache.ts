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
const flag3252: Fig.Option = {
  name: "--description",
  description: "Human-readable description of the resource",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3467: Fig.Option = {
  name: "--destination",
  description:
    "Path to a YAML file where the configuration will be exported.\nThe exported data will not contain any output-only fields.\nAlternatively, you may omit this flag to write to standard output.\nFor a schema describing the export/import format, see\n$CLOUDSDKROOT/lib/googlecloudsdk/schemas/..",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
};
const flag4749: Fig.Option = {
  name: "--failover-origin",
  description:
    "Origin resource to try when the current origin cannot be reached. After\nmaxAttempts is reached, the configured failoverOrigin will be used to\nfulfil the request.\n+\nFor example, the following are both valid URLs to an EdgeCacheOrigin\nresource:\n+\n- /projects/PROJECT/locations/global/edgeCacheOrigins/yourOrigin\n- yourOrigin\n+\nThe value of timeout.maxAttemptsTimeout dictates the timeout across all\norigins",
  args: { name: "FAILOVER_ORIGIN", description: "String", suggestions: [] },
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
const flag4918: Fig.Option = {
  name: "--flex-shielding",
  description:
    "Whenever possible, content will be fetched from origin and cached in or near the specified region. Best effort.\n+\nDefaults to default global origin shielding. You may specify at most one region. An empty flag turns off flex shielding.\n+\n_FLEX_SHIELDING_ must be one of:\n+\n**::: Turn off flexible shielding and use the default global origin shielding.\n+\n*africa_south1*::: Origin fetch from near africa-south1.\n+\n*me_central1*::: Origin fetch from near me-central1.\n+\n*us_east5*::: Origin fetch from near us-east5.\n+\n:::\n+",
  args: {
    name: "FLEX_SHIELDING",
    description: "String",
    suggestions: ["", "africa_south1", "me_central1", "us_east5"],
  },
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
const flag6409: Fig.Option = {
  name: "--labels",
  description: "List of KEY=VALUE labels to attach to this resource",
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
const flag6885: Fig.Option = {
  name: "--location",
  description:
    "The location Id.\n+\n\nTo set the `location` attribute:\n* provide the argument `keyset` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* use global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6887: Fig.Option = {
  name: "--location",
  description:
    "The location Id.\n+\n\nTo set the `location` attribute:\n* provide the argument `origin` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* use global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6892: Fig.Option = {
  name: "--location",
  description:
    "The location Id.\n+\n\nTo set the `location` attribute:\n* provide the argument `service` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* use global location",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7608: Fig.Option = {
  name: "--max-attempts",
  description:
    "Maximum number of attempts to cache fill from this origin.\nAnother attempt is made when a cache fill fails with one of\nthe retry_conditions.\n+\nOnce max_attempts to this origin have failed the failover_origin\nwill be used, if one is specified. That failover_origin may\nspecify its own max_attempts, retry_conditions and\nfailover_origin to control its own cache fill failures.\n+\nThe total number of allowed attempts to cache fill across this\nand failover origins is limited to four. The total time allowed\nfor cache fill attempts across this and failover origins can be\ncontrolled with max_attempts_timeout.\n+\nThe last valid response from an origin will be returned to the\nclient. If no origin returns a valid response, an HTTP 503 will\nbe returned to the client.\n+\nDefaults to 1.  Must be a value greater than 0 and less than 4",
  args: { name: "MAX_ATTEMPTS", description: "Int", suggestions: [] },
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
const flag11414: Fig.Option = {
  name: "--port",
  description:
    "Port to connect to the origin on. Defaults to port 443 for HTTP2 and\nHTTPS protocols, and port 80 for HTTP",
  args: { name: "PORT", description: "Int", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11764: Fig.Option = {
  name: "--protocol",
  description:
    'Protocol to use to connect to the configured origin. Defaults to HTTP2,\nand it is strongly recommended that users use HTTP2 for both security &\nperformance.\n+\nWhen using HTTP2 or HTTPS as the protocol, a valid, publicly-signed,\nunexpired TLS (SSL) certificate must be presented by the origin server.\n+\n_PROTOCOL_ must be one of:\n+\n*http*::: HTTP without TLS (SSL). This is not recommended, as communication outside\nof Google\'s network will be unencrypted to the public endpoint (origin).\n+\n*http2*::: HTTP/2 protocol. HTTP/2 refers to "h2", which requires TLS (HTTPS).\nRequires a valid (public, unexpired) TLS\ncertificate to be present on the origin.\n+\n*https*::: HTTP/1.1 with TLS (SSL). Requires a valid (public, unexpired) TLS\ncertificate to be present on the origin.\n+\n:::\n+',
  args: {
    name: "PROTOCOL",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["http", "http2", "https"],
  },
};
const flag11858: Fig.Option = {
  name: "--public-key",
  description:
    "Set of public keys to use for validating signed requests, when associated with a route.\nThis flag can be repeated to create a Keyset with multiple public keys.\n+\nIf you are providing your own public keys, specify the key in the form\n`id=ID,value=BASE64ENCODEDPUBLICKEY`.\n+\nIf you are using Google-managed public keys as part of a dual-token setup, specify the\nkey in the form `id=ID,managed=true`.\n+\n*id*::: id (name) name of the key within the keyset.\n+\n*value*::: URL-safe base64 encoded public key.  Cannot be specified if `managed=true`.\n+\n*managed*::: Boolean indicating this is a Google-managed key.  Cannot be specified if\n     `value=true`.\n+\n:::\nTo create a public key with `id` 'foo', pass `--public-key='id=foo,value=VALUE'` to {command}.\n+\nTo create a Google-managed public key with `id` 'bar', pass `--public-key='id=foo,managed=true'`\nto {command}.\n+\nAt least one of public-key or validation-shared-key must be specified",
  args: {
    name: "PUBLIC_KEY",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag13047: Fig.Option = {
  name: "--response-timeout",
  description:
    "Maximum duration to wait for data to arrive when reading from the\nHTTP connection/stream.\n+\nDefaults to 5 seconds. The timeout must be a value between 1s and 30s",
  args: {
    name: "RESPONSE_TIMEOUT",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag13104: Fig.Option = {
  name: "--retry-conditions",
  description:
    'Specifies one or more retry conditions for the configured origin.\n+\nIf the failure mode during a connection attempt to the origin matches the\nconfigured retryCondition(s), the origin request will be retried up to\nmaxAttempts times. The failoverOrigin, if configured, will then be used to\nsatisfy the request.\n+\nThe default retryCondition is "connect-failure".\n+\nretryConditions apply to this origin, and not subsequent failoverOrigin(s),\nwhich may specify their own retryConditions and maxAttempts.\n+\nValid values are:\n+\n- connect-failure: Retry on failures connecting to origins, for example due\nto connection timeouts.\n- http-5xx: Retry if the origin responds with any 5xx response code, or if\nthe origin does not respond at all, example: disconnects, reset, read\ntimeout, connection failure, and refused streams.\n- gateway-error: Similar to 5xx, but only applies to response codes 502,\n503 or 504.\n- retriable-4xx: Retry for retriable 4xx response codes, which include HTTP\n409 (Conflict) and HTTP 429 (Too Many Requests)\n- not-found: Retry if the origin returns a HTTP 404 (Not Found). This can\nbe useful when generating video content, and the segment is not available\nyet.\n+\n_RETRY_CONDITIONS_ must be one of: *connect-failure*, *forbidden*, *gateway-error*, *http-5xx*, *not-found*, *retriable-4xx*, *retry-conditions-unspecified*',
  args: { name: "RETRY_CONDITIONS", description: "List", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14147: Fig.Option = {
  name: "--source",
  description:
    "Path to a YAML file containing the configuration export data. The\nYAML file must not contain any output-only fields. Alternatively, you\nmay omit this flag to read from standard input. For a schema\ndescribing the export/import format, see:\n$CLOUDSDKROOT/lib/googlecloudsdk/schemas/...\n+\n$CLOUDSDKROOT is can be obtained with the following command:\n+\n  $ gcloud info --format='value(installation.sdk_root)'",
  args: { name: "SOURCE", description: "String", suggestions: [] },
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
const flag15402: Fig.Option = {
  name: "--validation-shared-key",
  description:
    "An ordered list of shared keys to use for validating signed requests.\n+\nTo create a validation shared key pointing to a Secret Manager secret version with name\n`projects/PROJECT/secrets/SECRET/versions/VERSION`, pass\n`--validation-shared-key='secret_version=projects/PROJECT/secrets/SECRET/versions/VERSION'`\nto {command}.\n+\n*secret_version*::: The name of the secret in Secret Manager.  Must be in the format\n`projects/PROJECT/secrets/SECRET/versions/VERSION`.\n+\n:::\nAt least one of public-key or validation-shared-key must be specified",
  args: {
    name: "VALIDATION_SHARED_KEY",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
    suggestions: [],
  },
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
  name: "edge-cache",
  description: "Manage Media CDN resources",
  subcommands: [
    {
      name: "keysets",
      description: "Interact with and manage EdgeCacheKeyset resources",
      subcommands: [
        {
          name: "create",
          description: "Create an EdgeCacheKeyset resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6409,
            flag6885,
            flag7356,
            flag11637,
            flag11858,
            flag11946,
            flag14975,
            flag15315,
            flag15402,
            flag15424,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset.\n+\nTo set the `keyset` attribute:\n* provide the argument `keyset` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an EdgeCacheKeyset resource",
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
            flag6885,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset.\n+\nTo set the `keyset` attribute:\n* provide the argument `keyset` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about an EdgeCacheKeyset resource",
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
            flag6885,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset.\n+\nTo set the `keyset` attribute:\n* provide the argument `keyset` on the command line",
          },
        },
        {
          name: "export",
          description: "Export an EdgeCacheKeyset resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3467,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6885,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset.\n+\nTo set the `keyset` attribute:\n* provide the argument `keyset` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an EdgeCacheKeyset resource",
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
            flag6885,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset.\n+\nTo set the `keyset` attribute:\n* provide the argument `keyset` on the command line",
          },
        },
        {
          name: "list",
          description: "List EdgeCacheKeyset resources",
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
          description: "Update an EdgeCacheKeyset resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3252,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6409,
            flag6885,
            flag7356,
            flag11637,
            flag11858,
            flag11946,
            flag14975,
            flag15315,
            flag15402,
            flag15424,
          ],
          args: {
            name: "KEYSET",
            description:
              "ID of the keyset or fully qualified identifier for the keyset.\n+\nTo set the `keyset` attribute:\n* provide the argument `keyset` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage EdgeCache operations",
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
      name: "origins",
      description: "Interact with and manage EdgeCacheOrigin resources",
      subcommands: [
        {
          name: "create",
          description: "Create an EdgeCacheOrigin resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3252,
            flag4749,
            flag4900,
            flag4902,
            flag4918,
            flag5091,
            flag5453,
            flag5699,
            flag6409,
            flag6887,
            flag7356,
            flag7608,
            {
              name: "--origin-address",
              description:
                'A fully qualified domain name (FQDN) or IP address reachable over the\npublic Internet, or the address of a Google Cloud Storage bucket.\n+\nThis address will be used as the origin for cache requests - e.g.\n- FQDN: media-backend.example.com\n- IPv4: 35.218.1.1\n- IPv6: [2607:f8b0:4012:809::200e]\n- Cloud Storage: gs://bucketname\n+\nWhen providing an FQDN (hostname), it must be publicly resolvable (e.g. via\nGoogle public DNS) and IP addresses must be publicly routable. If a Cloud\nStorage bucket is provided, it must be in the canonical "gs://bucketname"\nformat. Other forms, such as "storage.googleapis.com", will be rejected',
              args: {
                name: "ORIGIN_ADDRESS",
                description: "String",
                suggestions: [],
              },
            },
            flag11414,
            flag11637,
            flag11764,
            flag11946,
            flag13047,
            flag13104,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin.\n+\nTo set the `origin` attribute:\n* provide the argument `origin` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an EdgeCacheOrigin resource",
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
            flag6887,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin.\n+\nTo set the `origin` attribute:\n* provide the argument `origin` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about an EdgeCacheOrigin resource",
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
            flag6887,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin.\n+\nTo set the `origin` attribute:\n* provide the argument `origin` on the command line",
          },
        },
        {
          name: "export",
          description: "Export an EdgeCacheOrigin resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3467,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6887,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin.\n+\nTo set the `origin` attribute:\n* provide the argument `origin` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an EdgeCacheOrigin resource",
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
            flag6887,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin.\n+\nTo set the `origin` attribute:\n* provide the argument `origin` on the command line",
          },
        },
        {
          name: "list",
          description: "List all EdgeCacheOrigin resources in a project",
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
          description: "Update an EdgeCacheOrigin resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3252,
            flag4749,
            flag4900,
            flag4902,
            flag4918,
            flag5091,
            flag5453,
            flag5699,
            flag6409,
            flag6887,
            flag7356,
            flag7608,
            {
              name: "--origin-address",
              description:
                'A fully qualified domain name (FQDN) or IP address reachable over the\npublic Internet, or the address of a Google Cloud Storage bucket.\n+\nThis address will be used as the origin for cache requests - e.g.\n- FQDN: media-backend.example.com\n- IPv4: 35.218.1.1\n- IPv6: [2607:f8b0:4012:809::200e]\n- Cloud Storage: gs://bucketname\n+\nWhen providing an FQDN (hostname), it must be publicly resolvable (e.g. via\nGoogle public DNS) and IP addresses must be publicly routable. If a Cloud\nStorage bucket is provided, it must be in the canonical "gs://bucketname"\nformat. Other forms, such as "storage.googleapis.com", will be rejected',
              args: {
                name: "ORIGIN_ADDRESS",
                description: "String",
                suggestions: [],
              },
            },
            flag11414,
            flag11637,
            flag11764,
            flag11946,
            flag13047,
            flag13104,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORIGIN",
            description:
              "ID of the origin or fully qualified identifier for the origin.\n+\nTo set the `origin` attribute:\n* provide the argument `origin` on the command line",
          },
        },
      ],
    },
    {
      name: "services",
      description: "Interact with and manage EdgeCacheService resources",
      subcommands: [
        {
          name: "delete",
          description: "Delete an EdgeCacheService resource",
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
            flag6892,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about an EdgeCacheService resource",
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
            flag6892,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "export",
          description: "Export an EdgeCacheService resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3467,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6892,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "import",
          description: "Import an EdgeCacheService resource",
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
            flag6892,
            flag7356,
            flag11637,
            flag11946,
            flag14147,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "invalidate-cache",
          description: "Invalidate the cache for an EdgeCacheService resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--host",
              description:
                'The hostname to invalidate against. You can specify an exact or wildcard host - e.g.\n"video.example.com" or "*.example.com" - based on host component',
              args: { name: "HOST", description: "String", suggestions: [] },
            },
            flag5699,
            flag6892,
            flag7356,
            {
              name: "--path",
              description:
                'The path to invalidate against. You can specify an exact or wildcard host - e.g.\n"/videos/hls/139123.mp4" or "/manifests/*" - based on path component',
              args: { name: "PATH", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--tags",
              description:
                'A list of cache tags used to identify cached objects.\n+\n- Cache tags are specified when the response is first cached, by setting the "Cache-Tag"\nresponse header at the origin.\n- By default, all objects have a cache tag representing the HTTP status code of the response,\nthe MIME content-type, and the origin.\n- Multiple cache tags in the same revalidation request are treated as boolean OR - e.g. tag1\nOR tag2 OR tag3.\n- If a host and/or path are also specified, these are treated as boolean AND with any tags.\n+\nUp to 10 tags may be specified in a single invalidation request',
              args: { name: "TAGS", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
        {
          name: "list",
          description: "List all EdgeCacheService resources in a project",
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
          description: "Update an EdgeCacheService resource",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3252,
            {
              name: "--edge-security-policy",
              description:
                "Resource URL that points at the Cloud Armor edge security policy that is\napplied on each request against the EdgeCacheService.\n+\nSecurity Policies should be specified as relative resource URLs - for example `projects/my-project/locations/global/securityPolicies/my-policy`\n+\nNote that only security policies with a type of `EDGE` can be attached to an EdgeCacheService",
              args: {
                name: "EDGE_SECURITY_POLICY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--edge-ssl-certificate",
              description:
                'URLs to sslCertificate resources that are used to authenticate\nconnections between users and the EdgeCacheService.\n+\nCertificates should be specified as relative resource URLs - for example `projects/my-project/locations/global/certificates/my-cert`\n+\nNote that only "global" certificates with a "scope" of `EDGE_CACHE` can be\nattached to an EdgeCacheService.\n+\nYou may specify up to 5 SSL certificates per Service',
              args: {
                name: "EDGE_SSL_CERTIFICATE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--enable-logging",
              description:
                "Specifies whether to enable logging for traffic served by this service.\n+\nDefaults to false",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6409,
            flag6892,
            flag7356,
            {
              name: "--logging-sample-rate",
              description:
                "Configures the sampling rate of requests, where 1.0 means all logged\nrequests are reported and 0.0 means no logged requests are reported. The\ndefault value is 1.0, and the value of the field must be in [0, 1].\n+\nThis field can only be specified if logging is enabled for this service",
              args: {
                name: "LOGGING_SAMPLE_RATE",
                description: "Float",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--require-tls",
              description:
                "Require TLS (HTTPS) for all clients connecting to this service.\n+\nClients who connect over HTTP (port 80) will receive a HTTP 301 to the same\nURL over HTTPS (port 443). You must have at least one (1)\nedgeSslCertificate specified to enable this",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE",
            description:
              "ID of the service or fully qualified identifier for the service.\n+\nTo set the `service` attribute:\n* provide the argument `service` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
