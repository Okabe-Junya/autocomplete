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
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1416: Fig.Option = {
  name: "--certificate-id",
  description:
    "A certificate id to use for this domain. May not be used on a domain mapping with automatically managed certificates. Use the `gcloud app ssl-certificates list` to see available certificates for this app",
  args: { name: "CERTIFICATE_ID", description: "String", suggestions: [] },
};
const flag1418: Fig.Option = {
  name: "--certificate-management",
  description:
    "Type of certificate management. 'automatic' will provision an SSL certificate automatically while 'manual' requires the user to provide a certificate id to provision. _CERTIFICATE_MANAGEMENT_ must be one of: *automatic*, *manual*",
  args: {
    name: "CERTIFICATE_MANAGEMENT",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["automatic", "manual"],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3086: Fig.Option = {
  name: "--description",
  description: "A text description of the rule",
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
const flag6474: Fig.Option = {
  name: "--launch-browser",
  description:
    "Launch a browser if possible. When disabled, only displays the URL. Enabled by default, use *--no-launch-browser* to disable",
};
const flag6488: Fig.Option = {
  name: "--level",
  description:
    "Filter entries with severity equal to or higher than a given level. _LEVEL_ must be one of: *critical*, *error*, *warning*, *info*, *debug*, *any*",
  args: {
    name: "LEVEL",
    description: "String",
    suggestions: ["critical", "error", "warning", "info", "debug", "any"],
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
const flag7402: Fig.Option = {
  name: "--logs",
  description:
    "Filter entries from a particular set of logs. Must be a comma-separated list of log names (request_log, stdout, stderr, etc)",
  args: { name: "APP_LOG", description: "List", suggestions: [] },
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
const flag13593: Fig.Option = {
  name: ["--service", "-s"],
  description:
    "If specified, only match instances belonging to the given service.\nThis affects both interactive and non-interactive selection",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13598: Fig.Option = {
  name: ["--service", "-s"],
  description: "Limit to specific service",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13600: Fig.Option = {
  name: ["--service", "-s"],
  description: "The service ID",
  args: { name: "SERVICE", description: "String", suggestions: [] },
};
const flag13615: Fig.Option = {
  name: "--service",
  description: "The service ID",
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
const flag15041: Fig.Option = {
  name: "--tunnel-through-iap",
  description:
    "Tunnel the ssh connection through Identity-Aware Proxy for TCP forwarding.\n+\nTo learn more, see the\n[IAP for TCP forwarding documentation](https://cloud.google.com/iap/docs/tcp-forwarding-overview)",
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
  name: "app",
  description: "Manage your App Engine deployments",
  subcommands: [
    {
      name: "browse",
      description: "Open the current app in a web browser",
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
        flag6474,
        flag7356,
        flag11637,
        flag11946,
        {
          name: ["--service", "-s"],
          description:
            "The service that should be opened. If not specified, use the default service. May be used in conjunction with `--version`",
          args: { name: "SERVICE", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "create",
      description:
        "Create an App Engine app within the current Google Cloud Project",
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
          name: "--region",
          description:
            "The region to create the app within.  Use `gcloud app regions list` to list available regions.  If not provided, select region interactively",
          args: { name: "REGION", description: "String", suggestions: [] },
        },
        {
          name: "--service-account",
          description:
            "The app-level default service account to create the app with.\nNote that you can specify a distinct service account for each\nApp Engine version with `gcloud app deploy --service-account`.\nHowever if you do not specify a version-level service account,\nthis default will be used. If this parameter is not provided for app\ncreation, the app-level default will be set to be the out-of-box\nApp Engine Default Service Account,\nhttps://cloud.google.com/appengine/docs/standard/python3/service-account\noutlines the limitation of that service account",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--ssl-policy",
          description:
            "The app-level SSL policy to create the app with. _SSL_POLICY_ must be one of: *TLS_VERSION_1_0*, *TLS_VERSION_1_2*",
          args: {
            name: "SSL_POLICY",
            description: "String",
            suggestions: ["TLS_VERSION_1_0", "TLS_VERSION_1_2"],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "deploy",
      description:
        "Deploy the local code and/or configuration of your app to App Engine",
      options: [
        flag42,
        flag46,
        {
          name: "--appyaml",
          description:
            "Deploy with a specific app.yaml that will replace the one defined in the DEPLOYABLE",
          args: { name: "APPYAML", description: "String", suggestions: [] },
        },
        flag1201,
        {
          name: "--bucket",
          description:
            "The Google Cloud Storage bucket used to stage files associated with the deployment. If this argument is not specified, the application's default code bucket is used",
          args: {
            name: "BUCKET",
            description:
              "Googlecloudsdk.api_lib.storage.storage_util:FromArgument",
            suggestions: [],
          },
        },
        {
          name: "--cache",
          description:
            "Enable caching mechanisms involved in the deployment process, particularly in the build step. Enabled by default, use *--no-cache* to disable",
        },
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        {
          name: "--ignore-file",
          description:
            "Override the .gcloudignore file and use the specified file instead",
          args: { name: "IGNORE_FILE", description: "String", suggestions: [] },
        },
        {
          name: "--image-url",
          description:
            "(App Engine flexible environment only.) Deploy with a specific Docker image. Docker url must be from one of the valid Artifact Registry hostnames",
          args: { name: "IMAGE_URL", description: "String", suggestions: [] },
        },
        flag5699,
        flag7356,
        flag11637,
        {
          name: "--promote",
          description:
            "Promote the deployed version to receive all traffic. Overrides the default *app/promote_by_default* property value for this command invocation. Use *--no-promote* to disable",
        },
        flag11946,
        {
          name: "--service-account",
          description:
            "The service account that this deployed version will run as. If this argument is not specified, the App Engine default service account will be used for your current deployed version",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--stop-previous-version",
          description:
            "Stop the previously running version when deploying a new version that\nreceives all traffic.\n+\nNote that if the version is running on an instance\nof an auto-scaled service in the App Engine Standard\nenvironment, using `--stop-previous-version` will not work\nand the previous version will continue to run because auto-scaled service\ninstances are always running.\n+\nOverrides the default *app/stop_previous_version* property value for this command invocation. Use *--no-stop-previous-version* to disable",
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "DEPLOYABLES",
        description:
          "The yaml files for the services or configurations you want to deploy.\nIf not given, defaults to `app.yaml` in the current directory.\nIf that is not found, attempts to automatically generate necessary\nconfiguration files (such as app.yaml) in the current directory",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "describe",
      description: "Display all data about an existing service",
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
      name: "domain-mappings",
      description: "View and manage your App Engine domain mappings",
      subcommands: [
        {
          name: "create",
          description: "Creates a domain mapping",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1416,
            flag1418,
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
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
        {
          name: "delete",
          description: "Deletes a specified domain mapping",
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
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
        {
          name: "describe",
          description: "Describes a specified domain mapping",
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
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
        {
          name: "list",
          description: "Lists domain mappings",
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
          description: "Updates a domain mapping",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1416,
            flag1418,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--no-certificate-id",
              description: "Do not associate any certificate with this domain",
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DOMAIN",
            description:
              "A valid domain which may begin with a wildcard, such as: `example.com` or `*.example.com`",
          },
        },
      ],
    },
    {
      name: "firewall-rules",
      description: "View and manage your App Engine firewall rules",
      subcommands: [
        {
          name: "create",
          description: "Creates a firewall rule",
          options: [
            flag42,
            flag46,
            {
              name: "--action",
              description:
                "Allow or deny matched traffic. _ACTION_ must be one of: *ALLOW*, *DENY*",
              args: {
                name: "ACTION",
                description: "Googlecloudsdk.command_lib.app.flags:<lambda>",
                suggestions: ["ALLOW", "DENY"],
              },
            },
            flag1201,
            flag2292,
            flag3086,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source-range",
              description:
                "An IP address or range in CIDR notation or the ```*``` wildcard to match all traffic",
              args: {
                name: "SOURCE_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
        {
          name: "delete",
          description: "Deletes a specified firewall rule",
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
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
        {
          name: "describe",
          description: "Prints the fields of a specified firewall rule",
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
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
        {
          name: "list",
          description: "Lists the firewall rules",
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
          name: "test-ip",
          description: "Display firewall rules that match a given IP",
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
            name: "IP",
            description: "An IPv4 or IPv6 address to test against the firewall",
          },
        },
        {
          name: "update",
          description: "Updates a firewall rule",
          options: [
            flag42,
            flag46,
            {
              name: "--action",
              description:
                "Allow or deny matched traffic. _ACTION_ must be one of: *ALLOW*, *DENY*",
              args: {
                name: "ACTION",
                description: "Googlecloudsdk.command_lib.app.flags:<lambda>",
                suggestions: ["ALLOW", "DENY"],
              },
            },
            flag1201,
            flag2292,
            flag3086,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source-range",
              description:
                "An IP address or range in CIDR notation or the ```*``` wildcard to match all traffic",
              args: {
                name: "SOURCE_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRIORITY",
            description:
              "An integer between 1 and 2^32-1 which indicates the evaluation order of rules. Lowest priority rules are evaluated first. The handle `default` may also be used to refer to the final rule at priority 2^32-1 which is always present in a set of rules",
          },
        },
      ],
    },
    {
      name: "instances",
      description: "View and manage your App Engine instances",
      subcommands: [
        {
          name: "delete",
          description: "Delete a specified instance",
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
            flag13600,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "The instance ID" },
        },
        {
          name: "describe",
          description: "Display all data about an existing instance",
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
            flag13600,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "INSTANCE", description: "The instance ID" },
        },
        {
          name: "disable-debug",
          description: "Disable debug mode for an instance",
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
            flag13593,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "The instance ID to disable debug mode on. If not specified,\nselect instance interactively. Must uniquely specify (with other\nflags) exactly one instance",
            isOptional: true,
          },
        },
        {
          name: "enable-debug",
          description:
            "Enable debug mode for an instance (only works on the flexible environment)",
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
            flag13593,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "Instance ID to enable debug mode on. If not specified,\nselect instance interactively. Must uniquely specify (with other\nflags) exactly one instance",
            isOptional: true,
          },
        },
        {
          name: "list",
          description:
            "List the instances affiliated with the current App Engine project",
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
            {
              name: ["--service", "-s"],
              description:
                "If specified, only list instances belonging to the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "scp",
          description:
            "SCP from or to the VM of an App Engine Flexible instance",
          options: [
            flag42,
            flag46,
            flag1201,
            { name: "--compress", description: "Enable compression" },
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
              name: "--recurse",
              description: "Upload directories recursively",
            },
            flag13615,
            flag14975,
            flag15041,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "[INSTANCE:]SRC",
              description: "Specifies the files to copy",
              isVariadic: true,
            },
            {
              name: "[INSTANCE:]DEST",
              description: "Specifies a destination for the source files",
            },
          ],
        },
        {
          name: "ssh",
          description: "SSH into the VM of an App Engine Flexible instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--container",
              description: "Name of the container within the VM to connect to",
              args: {
                name: "CONTAINER",
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
            flag11637,
            flag11946,
            flag13615,
            flag14975,
            flag15041,
            flag15315,
            flag15424,
          ],
          args: [
            { name: "INSTANCE", description: "The instance ID" },
            {
              name: "COMMAND",
              description:
                "Remote command to execute on the VM.\n+\nThe '--' argument must be specified between gcloud specific args on the left and COMMAND on the right",
            },
          ],
        },
      ],
    },
    {
      name: "logs",
      description: "Manage your App Engine logs",
      subcommands: [
        {
          name: "read",
          description: "Reads log entries for the current App Engine app",
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
            flag6488,
            {
              name: "--limit",
              description: "Number of log entries to show",
              args: { name: "LIMIT", description: "Int", suggestions: [] },
            },
            flag7356,
            flag7402,
            flag11637,
            flag11946,
            flag13598,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "tail",
          description: "Streams logs for App Engine apps",
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
            flag6488,
            flag7356,
            flag7402,
            flag11637,
            flag11946,
            flag13598,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "open-console",
      description:
        "Open the App Engine dashboard, or log viewer, in a web browser",
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
          name: ["--logs", "-l"],
          description:
            "Open the log viewer instead of the App Engine dashboard",
        },
        flag11637,
        flag11946,
        {
          name: ["--service", "-s"],
          description:
            "The service to consider. If not specified, use the default service",
          args: { name: "SERVICE", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "operations",
      description: "View and manage your App Engine Operations",
      subcommands: [
        {
          name: "describe",
          description: "Describes the operation",
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
          args: { name: "OPERATION", description: "ID of operation" },
        },
        {
          name: "list",
          description: "List the operations",
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
              name: "--pending",
              description: "Only display pending operations",
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
          name: "wait",
          description: "Polls an operation until completion",
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
          args: { name: "OPERATION", description: "ID of operation" },
        },
      ],
    },
    {
      name: "regions",
      description:
        "View regional availability of App Engine runtime environments",
      subcommands: [
        {
          name: "list",
          description:
            "List the availability of flex and standard environments for each region",
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
      name: "runtimes",
      description: "List runtimes available to Google App Engine",
      subcommands: [
        {
          name: "list",
          description: "List the available runtimes",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--environment",
              description:
                "Environment for the application. _ENVIRONMENT_ must be (only one value is supported): *standard*",
              args: {
                name: "ENVIRONMENT",
                description: "String",
                suggestions: ["standard"],
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
      ],
    },
    {
      name: "services",
      description: "View and manage your App Engine services",
      subcommands: [
        {
          name: "browse",
          description: "Open the specified service(s) in a browser",
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
            flag6474,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICES",
            description:
              "The services to open (optionally filtered by the --version flag)",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete services in the current project",
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
            name: "SERVICES",
            description: "The service(s) to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Display all data about an existing service",
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
          args: { name: "SERVICE", description: "The service to describe" },
        },
        {
          name: "list",
          description: "List your existing services",
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
          name: "set-traffic",
          description: "Set traffic splitting settings",
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
              name: "--migrate",
              description:
                "The migrate flag determines whether or not to use traffic migration\nduring the operation. Traffic migration will attempt to automatically\nmigrate traffic from the previous version to the new version, giving\nthe autoscaler time to respond. See the documentation here:\n[](https://cloud.google.com/appengine/docs/python/console/trafficmigration)\nfor more information",
            },
            flag11637,
            flag11946,
            {
              name: "--split-by",
              description:
                "Whether to split traffic based on cookie, IP address or random. _SPLIT_BY_ must be one of: *cookie*, *ip*, *random*",
              args: {
                name: "SPLIT_BY",
                description: "String",
                suggestions: ["cookie", "ip", "random"],
              },
            },
            {
              name: "--splits",
              description:
                "Key-value pairs describing what proportion of traffic should go to\neach version. The split values are added together and used as\nweights. The exact values do not matter, only their relation to each\nother. For example, v1=2,v2=2 is equivalent to v1=.5,v2=.5",
              args: { name: "SPLITS", description: "Dict", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICES",
            description: "The services to modify",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "update",
          description: "Update service-level settings",
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
              name: "--ingress",
              description:
                "Control what traffic can reach the app. _INGRESS_ must be one of: *all*, *internal-only*, *internal-and-cloud-load-balancing*",
              args: {
                name: "INGRESS",
                description: "String",
                suggestions: [
                  "all",
                  "internal-only",
                  "internal-and-cloud-load-balancing",
                ],
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
            name: "SERVICES",
            description: "The services to modify",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "ssl-certificates",
      description: "View and manage your App Engine SSL certificates",
      subcommands: [
        {
          name: "create",
          description: "Uploads a new SSL certificate",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--certificate",
              description:
                "The file path for the new certificate to upload. Must be in PEM\nx.509 format including the header and footer",
              args: {
                name: "LOCAL_FILE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description: "A display name for this certificate",
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
            flag7356,
            {
              name: "--private-key",
              description:
                "The file path to a local RSA private key file. The private key must be\nPEM encoded with header and footer and must be 2048 bits\nor fewer",
              args: {
                name: "LOCAL_FILE_PATH",
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
          name: "delete",
          description: "Deletes an SSL certificate",
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
            name: "ID",
            description:
              "The id of the certificate. This identifier is printed upon creation of a new certificate. Run `{parent_command} list` to view existing certificates",
          },
        },
        {
          name: "describe",
          description: "Describes a specified SSL certificate",
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
            name: "ID",
            description:
              "The id of the certificate. This identifier is printed upon creation of a new certificate. Run `{parent_command} list` to view existing certificates",
          },
        },
        {
          name: "list",
          description: "Lists the SSL certificates",
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
          description: "Updates an SSL certificate",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--certificate",
              description:
                "The file path for the new certificate to upload. Must be in PEM\nx.509 format including the header and footer",
              args: {
                name: "LOCAL_FILE_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--display-name",
              description: "A display name for this certificate",
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
            flag7356,
            {
              name: "--private-key",
              description:
                "The file path to a local RSA private key file. The private key must be\nPEM encoded with header and footer and must be 2048 bits\nor fewer",
              args: {
                name: "LOCAL_FILE_PATH",
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
            name: "ID",
            description:
              "The id of the certificate. This identifier is printed upon creation of a new certificate. Run `{parent_command} list` to view existing certificates",
          },
        },
      ],
    },
    {
      name: "update",
      description: "Updates an App Engine application",
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
          name: "--service-account",
          description:
            "The app-level default service account to update the app with",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--split-health-checks",
          description:
            "Enables/disables split health checks by default on new deployments. Use *--split-health-checks* to enable and *--no-split-health-checks* to disable",
        },
        {
          name: "--ssl-policy",
          description:
            "The app-level SSL policy to update the app with. _SSL_POLICY_ must be one of: *TLS_VERSION_1_0*, *TLS_VERSION_1_2*",
          args: {
            name: "SSL_POLICY",
            description: "String",
            suggestions: ["TLS_VERSION_1_0", "TLS_VERSION_1_2"],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "versions",
      description: "View and manage your App Engine versions",
      subcommands: [
        {
          name: "browse",
          description: "Open the specified versions in a browser",
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
            flag6474,
            flag7356,
            flag11637,
            flag11946,
            {
              name: ["--service", "-s"],
              description:
                "If specified, only open versions from the given service. If not specified, use the default service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSIONS",
            description:
              "The versions to open (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete a specified version",
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
              name: ["--service", "-s"],
              description:
                "If specified, only delete versions from the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSIONS",
            description:
              "The versions to delete (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Display all data about an existing version",
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
              name: ["--service", "-s"],
              description: "The service corresponding to the version to show",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSION",
            description: "The ID of the version to show",
          },
        },
        {
          name: "list",
          description: "List your existing versions",
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
            {
              name: "--hide-no-traffic",
              description: "Only show versions that are receiving traffic",
            },
            flag5699,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            {
              name: ["--service", "-s"],
              description: "Only show versions from this service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "migrate",
          description:
            "Migrate traffic from one version to another for a set of services",
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
              name: ["--service", "-s"],
              description:
                "If specified, only migrate versions from the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VERSION", description: "The version to migrate to" },
        },
        {
          name: "start",
          description: "Start serving specified versions",
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
              name: ["--service", "-s"],
              description:
                "If specified, only start versions from the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSIONS",
            description:
              "The versions to start. (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
        {
          name: "stop",
          description: "Stop serving specified versions",
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
              name: ["--service", "-s"],
              description:
                "If specified, only stop versions from the given service",
              args: { name: "SERVICE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSIONS",
            description:
              "The versions to stop (optionally filtered by the --service flag)",
            isVariadic: true,
          },
        },
      ],
    },
  ],
};

export default completionSpec;
