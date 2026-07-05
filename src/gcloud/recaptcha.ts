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
const flag67: Fig.Option = {
  name: "--action-score-thresholds",
  description:
    'The action to score threshold used for POLICY_BASED_CHALLENGE. For example:\n--action-score-thresholds=login=\'{"scoreThreshold": "0.3"}\',signup=\'{"scoreThreshold": "0.1"}\'\nor --action-score-thresholds=file_path.(json|yaml).\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n*scoreThreshold*::::\nSets `scoreThreshold` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--action-score-thresholds=string={scoreThreshold=float}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--action-score-thresholds=\'{"string": {"scoreThreshold": float}}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--action-score-thresholds=path_to_file.(yaml|json)\n+\n```',
  args: {
    name: "ACTION_SCORE_THRESHOLDS",
    description:
      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
    suggestions: [],
  },
};
const flag93: Fig.Option = {
  name: "--actions",
  description:
    "The actions that the caller should take regarding the user. There should be at most 1\nterminal action. A terminal action is any action that forces a response, such as Allow,\nBlock or Substitute. If it makes sense for it to happen multple times, such as SetHeader,\nthe action is non-terminal.\n+\nExamples:\n* Block and set the header with key foo to value bar\n  ** --actions=block,set_header=foo=bar\n* Substitute with path google.com and set two headers, one with key key1 to value value1 and\none with key key2 to value value2\n  ** --actions=substitute=google.com,set_header=key1=value1,set_header=key2=value2",
  args: { name: "ACTIONS", description: "String", suggestions: [] },
};
const flag420: Fig.Option = {
  name: "--allow-all-bundle-ids",
  description: "If set, bundle id enforcement will NOT be enabled on this key",
};
const flag421: Fig.Option = {
  name: "--allow-all-domains",
  description:
    "If set, domain name enforcement will NOT be enabled on this key",
};
const flag422: Fig.Option = {
  name: "--allow-all-package-names",
  description:
    "If set, package name enforcement will NOT be enabled on this key",
};
const flag423: Fig.Option = {
  name: "--allow-amp-traffic",
  description:
    "Whether this key can be used on AMP (Accelerated Mobile Pages) websites",
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1310: Fig.Option = {
  name: "--bundle-ids",
  description:
    "iOS bundle ids of apps allowed to use the key.\n+\nExample of a valid bundle id:\n   'com.companyname.productname.appname'",
  args: { name: "BUNDLE_IDS", description: "List", suggestions: [] },
};
const flag2224: Fig.Option = {
  name: "--condition",
  description:
    "A CEL (Common Expression Language) conditional expression that specifies if this policy\napplies to an incoming user request. If this condition evaluates to true and the requested\npath matched the path pattern, the associated actions should be executed by the caller. The\ncondition string is checked for CEL syntax correctness on creation. For more information,\nsee the CEL spec: https://github.com/google/cel-spec and its language definition:\nhttps://github.com/google/cel-spec/blob/master/doc/langdef.md",
  args: { name: "CONDITION", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3077: Fig.Option = {
  name: "--description",
  description:
    "A description of what this policy aims to achieve, for convenience purposes. The description\ncan at most include 256 UTF-8 characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3900: Fig.Option = {
  name: "--domains",
  description:
    "Domains or subdomains of websites allowed to use the key. All subdomains of an\nallowed domain are automatically allowed. A valid domain requires a host and must\nnot include any path, port, query or fragment.\n+\nExamples of valid domains:\n     'example.com'\n     'subdomain.example.com'",
  args: { name: "DOMAINS", description: "List", suggestions: [] },
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
const flag6031: Fig.Option = {
  name: "--ip",
  description: "IP address to override for the key",
  args: { name: "IP", description: "String", suggestions: [] },
};
const flag6234: Fig.Option = {
  name: "--key-id",
  description: "The Apple developer key ID (10-character string)",
  args: { name: "KEY_ID", description: "String", suggestions: [] },
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
const flag11182: Fig.Option = {
  name: "--path",
  description:
    "The path for which this policy applies, specified as a glob pattern. For more information on\nglob, see the manual page: https://man7.org/linux/man-pages/man7/glob.7.html",
  args: { name: "PATH", description: "String", suggestions: [] },
};
const flag11596: Fig.Option = {
  name: "--private-key-file",
  description:
    "File path to a private key (downloaded as a text file with a .p8 file extension)\ngenerated for your Apple Developer account. Ensure that DeviceCheck is\nenabled for the private key. Use a full or relative path to a local file containing the value of private_key_file",
  args: {
    name: "PRIVATE_KEY_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
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
const flag14792: Fig.Option = {
  name: "--team-id",
  description:
    "The Apple team ID (10-character string) owning the provisioning profile\nused to build your application",
  args: { name: "TEAM_ID", description: "String", suggestions: [] },
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
  name: "recaptcha",
  description: "Manage reCAPTCHA Enterprise Keys",
  subcommands: [
    {
      name: "firewall-policies",
      description: "Managed reCAPTCHA Firewall Policies",
      subcommands: [
        {
          name: "create",
          description: "Create a Firewall Policy",
          options: [
            flag42,
            flag46,
            flag93,
            flag1201,
            flag2224,
            flag2292,
            flag3077,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11182,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete one or more reCAPTCHA Firewall Policies",
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
            name: "FIREWALL_POLICY",
            description:
              "ID of the firewall_policy or fully qualified identifier for the firewall_policy.\n+\nTo set the `firewall_policy` attribute:\n* provide the argument `firewall_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe reCAPTCHA Firewall Policy",
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
            name: "FIREWALL_POLICY",
            description:
              "ID of the firewall_policy or fully qualified identifier for the firewall_policy.\n+\nTo set the `firewall_policy` attribute:\n* provide the argument `firewall_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List reCAPTCHA Firewall Policies",
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
          name: "reorder",
          description: "Reorder all Firewall Policies",
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
              name: "--names",
              description: "Names of all firewall policies in desired order",
              args: { name: "NAMES", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a Firewall Policy",
          options: [
            flag42,
            flag46,
            flag93,
            flag1201,
            flag2224,
            flag2292,
            flag3077,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11182,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FIREWALL_POLICY",
            description:
              "ID of the firewall_policy or fully qualified identifier for the firewall_policy.\n+\nTo set the `firewall_policy` attribute:\n* provide the argument `firewall_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "keys",
      description: "Managed reCAPTCHA Keys",
      subcommands: [
        {
          name: "add-ip-override",
          description: "Add an IP override to a key",
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
            flag6031,
            flag7356,
            {
              name: "--override",
              description:
                "If set to allow, the IP address/CIDR range will be allowlisted for the key. _OVERRIDE_ must be one of: *allow*, *override-type-unspecified*",
              args: {
                name: "OVERRIDE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["allow", "override-type-unspecified"],
              },
            },
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
          name: "create",
          description: "Create a Key",
          options: [
            flag42,
            flag46,
            flag67,
            flag420,
            flag421,
            flag422,
            flag423,
            {
              name: "--android",
              description: "Creates a Key configured for Android devices",
            },
            flag1201,
            flag1310,
            flag2292,
            {
              name: "--default-score-threshold",
              description:
                "The global threshold to be used for POLICY_BASED_CHALLENGE if no action specific one exists",
              args: {
                name: "DEFAULT_SCORE_THRESHOLD",
                description: "Float",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "A human-readable name for the key. Typically a site or app name",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3900,
            {
              name: "--express",
              description: "Creates a Key configured for Express assessments",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--integration-type",
              description:
                "Configures how reCAPTCHA will operate on your site. This only applies to 'web'\nplatform. _INTEGRATION_TYPE_ must be one of:\n+\n*checkbox*::: Renders the classic \"I'm not a robot\" checkbox, and a captcha challenge\nfor low scoring events\n+\n*invisible*::: Does not display the \"I'm not a robot\" checkbox, but may show CAPTCHA\nchallenges after risk analysis\n+\n*policy-based-challenge*::: Conditionally displays a challenge based on the score\n+\n*score*::: Shows no CAPTCHA challenge on the page\n+\n:::\n+",
              args: {
                name: "INTEGRATION_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "checkbox",
                  "invisible",
                  "policy-based-challenge",
                  "score",
                ],
              },
            },
            {
              name: "--ios",
              description: "Creates a Key configured for iOS devices",
            },
            flag6234,
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            {
              name: "--package-names",
              description:
                "Android package names of apps allowed to use the key.\n+\nExample of a valid package name:\n   'com.companyname.appname'",
              args: {
                name: "PACKAGE_NAMES",
                description: "List",
                suggestions: [],
              },
            },
            flag11596,
            flag11637,
            flag11946,
            {
              name: "--security-preference",
              description:
                "Represents the possible challenge frequency and difficulty configurations for a web\nkey.\n            usability: show fewer and easier challenges.\n            balance: show balanced (in amount and difficulty) challenges.\n            security: show more and harder challenges.\n+\n_SECURITY_PREFERENCE_ must be one of: *balance*, *challenge-security-preference-unspecified*, *security*, *usability*",
              args: {
                name: "SECURITY_PREFERENCE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "balance",
                  "challenge-security-preference-unspecified",
                  "security",
                  "usability",
                ],
              },
            },
            {
              name: "--support-non-google-app-store-distribution",
              description:
                "If set, this key can be used in an Android application that is\navailable for download in app stores other than the Google Play Store.\n+\nThis setting allows your key to accept traffic from devices without Google\nMobile Services (GMS) installed",
            },
            flag14792,
            {
              name: "--testing-challenge",
              description:
                "For CHECKBOX and INVISIBLE Keys only, this option configures\nwhether challenges will be issued for execute requests. _TESTING_CHALLENGE_ must be one of:\n+\n*challenge*::: Execute requests for this key will always return an unsolvable\nchallenge consisting of a message about this testing key.\n+\n*nocaptcha*::: Execute requests for this key will always return nocaptcha.\n+\n:::\n+",
              args: {
                name: "TESTING_CHALLENGE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["challenge", "nocaptcha"],
              },
            },
            {
              name: "--testing-score",
              description:
                "If set, all assessments for this key will return this score. Must be between 0\n(likely not legitimate) and 1 (likely legitimate) inclusive",
              args: {
                name: "TESTING_SCORE",
                description: "Float",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--waf-feature",
              description:
                "The WAF feature to use. For more information, see\nhttps://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. _WAF_FEATURE_ must be one of:\n+\n*action-token*::: Use reCAPTCHA action-tokens to protect user actions.\n+\n*challenge-page*::: Redirects suspicious traffic to reCAPTCHA challenge page.\n+\n*express*::: Assesses requests without tokens or frontend integration. This option is deprecated, use --express instead.\n+\n*session-token*::: Use reCAPTCHA session-tokens to protect the whole user session on the\nsite's domain.\n+\n:::\n+",
              args: {
                name: "WAF_FEATURE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "action-token",
                  "challenge-page",
                  "express",
                  "session-token",
                ],
              },
            },
            {
              name: "--waf-service",
              description:
                "The WAF service provider to use. _WAF_SERVICE_ must be one of:\n+\n*akamai*::: Akamai\n+\n*ca*::: Cloud Armor\n+\n*cloudflare*::: Cloudflare\n+\n*fastly*::: Fastly\n+\n:::\n+",
              args: {
                name: "WAF_SERVICE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["akamai", "ca", "cloudflare", "fastly"],
              },
            },
            {
              name: "--web",
              description: "Creates a Key configured for websites",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete one or more reCAPTCHA Keys",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe reCAPTCHA Key",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "list",
          description: "List reCAPTCHA Keys",
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
          name: "list-ip-overrides",
          description: "List IP overrides for a key",
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
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
        {
          name: "migrate",
          description: "Migrate a key to reCAPTCHA Enterprise",
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
              name: "--skip-billing-check",
              description:
                "If true, skips the billing check. If your usage of reCAPTCHA is under\nthe free quota, you can safely skip the billing check",
            },
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
          name: "remove-ip-override",
          description: "Remove an IP override from a key",
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
            flag6031,
            flag7356,
            {
              name: "--override",
              description:
                "If set to allow, the IP address/CIDR range will be removed from the allowlisted IPs. _OVERRIDE_ must be one of: *allow*, *override-type-unspecified*",
              args: {
                name: "OVERRIDE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["allow", "override-type-unspecified"],
              },
            },
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
          description: "Update a Key",
          options: [
            flag42,
            flag46,
            flag67,
            flag420,
            flag421,
            flag422,
            flag423,
            {
              name: "--android",
              description: "Configures the Key for Android devices",
            },
            flag1201,
            flag1310,
            flag2292,
            {
              name: "--default-score-threshold",
              description:
                "The global threshold to be used for POLICY_BASED_CHALLENGE if no action specific one exists",
              args: {
                name: "DEFAULT_SCORE_THRESHOLD",
                description: "Float",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "A human-readable name for the key. Typically a site or app name",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3900,
            {
              name: "--express",
              description: "Configures the Key for Express assessments",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--ios",
              description: "Configures the Key for iOS devices",
            },
            flag6234,
            {
              name: "--labels",
              description: "List of label KEY=VALUE pairs to add",
              args: {
                name: "KEY=VALUE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--package-names",
              description:
                "Android package names of apps allowed to use the key.\n+\nExample of a valid package name:\n     'com.companyname.appname'",
              args: {
                name: "PACKAGE_NAMES",
                description: "List",
                suggestions: [],
              },
            },
            flag11596,
            flag11637,
            flag11946,
            {
              name: "--security-preference",
              description:
                "Represents the possible challenge frequency and difficulty configurations for a web key.\n            usability: show fewer and easier challenges.\n            balance: show balanced (in amount and difficulty) challenges.\n            security: show more and harder challenges.\n+\n_SECURITY_PREFERENCE_ must be one of: *balance*, *challenge-security-preference-unspecified*, *security*, *usability*",
              args: {
                name: "SECURITY_PREFERENCE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "balance",
                  "challenge-security-preference-unspecified",
                  "security",
                  "usability",
                ],
              },
            },
            flag14792,
            flag14975,
            flag15315,
            flag15424,
            { name: "--web", description: "Configures the Key for websites" },
          ],
          args: {
            name: "KEY",
            description:
              "ID of the key or fully qualified identifier for the key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
