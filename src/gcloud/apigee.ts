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
const flag385: Fig.Option = {
  name: "--all-environments",
  description: "Make all environments accessible through this API product",
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
const flag3269: Fig.Option = {
  name: "--description",
  description:
    "Overview of the API product. Include key information about the API product that is not captured by other fields",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3772: Fig.Option = {
  name: "--display-name",
  description:
    "Name to be displayed in the UI or developer portal to developers registering for API access",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
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
const flag5982: Fig.Option = {
  name: "--internal-access",
  description: "Prevent external access to this API product",
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
const flag10782: Fig.Option = {
  name: "--organization",
  description:
    "Apigee organization containing the API product. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `PRODUCT` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10796: Fig.Option = {
  name: "--organization",
  description:
    "ID of the organization or fully qualified identifier for the organization.\n+\nTo set the `organization` attribute:\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
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
const flag11567: Fig.Option = {
  name: "--private-access",
  description:
    "Hide this API product in the developer portal but make it accessible by external developers",
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11840: Fig.Option = {
  name: "--public-access",
  description:
    "Make this API product visible to developers in the Apigee developer portal",
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
  name: "apigee",
  description: "Manage Apigee resources",
  subcommands: [
    {
      name: "apis",
      description: "Manage Apigee API proxies",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy an API proxy to an environment",
          options: [
            flag42,
            flag46,
            {
              name: "--api",
              description:
                "API proxy to be deployed. To get a list of available API proxies, run `{parent_command} list`.\n+\nTo set the `api` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--api` on the command line",
              args: { name: "API", description: "String", suggestions: [] },
            },
            flag1201,
            flag2292,
            {
              name: "--environment",
              description:
                "Environment in which to deploy the API proxy. To get a list of available environments, run `{grandparent_command} environments list`.\n+\nTo set the `environment` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--environment` on the command line",
              args: {
                name: "ENVIRONMENT",
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
              name: "--organization",
              description:
                "Apigee organization of the proxy and environment. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--override",
              description:
                "Force the deployment of the new revision, overriding any currently deployed revision that would conflict with it.\n+\nIf an existing API proxy revision is deployed, set this flag to ensure seamless deployment with zero downtime. In this case, the existing revision remains deployed until the new revision is fully deployed.\n+\nIf unset, `{command}` will fail unless all conflicting API proxies are first undeployed from the environment. To do this, run `{parent_command} undeploy` on the conflicting deployment",
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `REVISION` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Describe an Apigee API proxy",
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
              description:
                "Apigee organization containing the API proxy. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `API` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            {
              name: "--verbose",
              description: "Include proxy revision info in the description",
            },
            flag15424,
          ],
          args: {
            name: "API",
            description:
              "ID of the API proxy or fully qualified identifier for the API proxy.\n+\nTo set the `api` attribute:\n* provide the argument `API` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apigee API proxies",
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
            flag10796,
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
          name: "undeploy",
          description: "Undeploy an Apigee API proxy from an environment",
          options: [
            flag42,
            flag46,
            {
              name: "--api",
              description:
                "API proxy to be undeployed. Must currently be deployed. To get a list of available deployed proxies, run `{grandparent_command} deployments list --environment=ENV`.\n+\nTo set the `api` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--api` on the command line",
              args: { name: "API", description: "String", suggestions: [] },
            },
            flag1201,
            flag2292,
            {
              name: "--environment",
              description:
                "Environment from which to undeploy the API proxy. To get a list of available environments, run `{grandparent_command} environments list`.\n+\nTo set the `environment` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--environment` on the command line",
              args: {
                name: "ENVIRONMENT",
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
              name: "--organization",
              description:
                "Apigee organization of the proxy and environment.\n+\nTo set the `organization` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `REVISION` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "applications",
      description:
        "Manage third-party applications which call Apigee API proxies",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apigee application",
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
              description:
                "Apigee organization containing the application. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `APPLICATION` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
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
            name: "APPLICATION",
            description:
              "ID of the application or fully qualified identifier for the application.\n+\nTo set the `app` attribute:\n* provide the argument `APPLICATION` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apigee applications",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--developer",
              description:
                "ID of the developer or fully qualified identifier for the developer.\n+\nTo set the `developer` attribute:\n* provide the argument `--developer` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
              args: {
                name: "DEVELOPER",
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
            {
              name: "--organization",
              description:
                "Apigee organization containing the developer. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `--developer` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
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
            flag15249,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "deployments",
      description:
        "Manage deployments of Apigee API proxies in runtime environments",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apigee API proxy deployment",
          options: [
            flag42,
            flag46,
            {
              name: "--api",
              description:
                "Deployed API proxy.\n+\nTo set the `api` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--api` on the command line",
              args: { name: "API", description: "String", suggestions: [] },
            },
            flag1201,
            flag2292,
            {
              name: "--environment",
              description:
                "Environment in which the proxy was deployed.\n+\nTo set the `environment` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--environment` on the command line",
              args: {
                name: "ENVIRONMENT",
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
              name: "--organization",
              description:
                "Apigee Organization of the proxy and environment. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `REVISION` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Apigee API proxy deployments",
          options: [
            flag42,
            flag46,
            {
              name: "--api",
              description:
                "The API proxy whose deployments should be listed. If not provided, all proxies will be listed. To get a list of existing API proxies, run `{grandparent_command} apis list`.\n+\nTo set the `api` attribute:\n* provide the argument `--revision` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--api` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
              args: { name: "API", description: "String", suggestions: [] },
            },
            flag1201,
            flag2292,
            {
              name: "--environment",
              description:
                "The environment whose deployments should be listed. If not provided, all environments will be listed. To get a list of available environments, run `{grandparent_command} environments list`.\n+\nTo set the `environment` attribute:\n* provide the argument `--revision` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--environment` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
              args: {
                name: "ENVIRONMENT",
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
            {
              name: "--organization",
              description:
                "The organization whose deployments should be listed.If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `--revision` on the command line with a fully specified name;\n* leave the argument unspecified for it to be chosen automatically with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--revision",
              description:
                "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `--revision` on the command line;\n* leave the argument unspecified for it to be chosen automatically",
              args: {
                name: "REVISION",
                description: "String",
                suggestions: [],
              },
            },
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
      name: "developers",
      description: "Manage Apigee developers",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Apigee developer",
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
              description:
                "Apigee organization containing the developer. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `DEVELOPER` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line;\n* set the property [project] or provide the argument [--project] on the command line, using a Cloud Platform project with an associated Apigee organization",
              args: {
                name: "ORGANIZATION",
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
            name: "DEVELOPER",
            description:
              "ID of the developer or fully qualified identifier for the developer.\n+\nTo set the `developer` attribute:\n* provide the argument `DEVELOPER` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apigee developers by email address",
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
            flag10796,
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
      name: "environments",
      description: "Manage Apigee environments",
      subcommands: [
        {
          name: "list",
          description: "List Apigee deployment environments",
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
            flag10796,
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
      name: "organizations",
      description: "Manage Apigee organizations",
      subcommands: [
        {
          name: "list",
          description:
            "List Apigee organizations and their paired Cloud Platform projects",
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
      name: "products",
      description: "Manage Apigee API products",
      subcommands: [
        {
          name: "create",
          description: "Create an Apigee API product",
          options: [
            flag42,
            flag46,
            flag385,
            {
              name: "--all-proxies",
              description:
                "Expose all available API proxies and their resources. Must be explicitly specified if neither `--apis` nor `--resources` is provided",
            },
            {
              name: "--apis",
              description:
                "Comma-separated names of API proxies to which this API product is bound. Only\nthose API proxies will be accessible through the new API product.\n+\nIf not provided, all deployed API proxies will be included in the product, so\nlong as they match the other parameters.\n+\nThe API proxy names must already be deployed to the bound environments, or\ncreation of the API product will fail. To get a list of deployed API proxies,\nrun:\n+\n    $ {grandparent_command} deployments list\n+\nTo deploy an API proxy, run:\n+\n    $ {grandparent_command} apis deploy",
              args: { name: "API", description: "List", suggestions: [] },
            },
            {
              name: "--attributes",
              description:
                "Key-value attribute pairs that may be used to extend the default API product profile with customer-specific metadata. Up to 17 attributes can be specified",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag3269,
            flag3772,
            {
              name: "--environments",
              description:
                "Environments to which the API product is bound. Requests to environments that are not listed are rejected, preventing developers from accessing those resources through API Proxies deployed in another environment.\n+\nFor example, this can prevent resources associated with API proxies in a ``prod'' environment from also granting access to matching API proxies deployed in a ``test'' environment.\n+\nTo get a list of available environments, run:\n+\n    $ {grandparent_command} environments list",
              args: {
                name: "ENVIRONMENT",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5982,
            flag7356,
            {
              name: "--manual-approval",
              description:
                'Require manual approval of developer requests to access this API product before their consumer keys can be used. If unset, the consumer key is generated in an "approved" state and can be used immediately',
            },
            {
              name: "--oauth-scopes",
              description:
                "Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy assoicated with the API product",
              args: { name: "SCOPE", description: "List", suggestions: [] },
            },
            {
              name: "--organization",
              description:
                "Apigee organization containing the API product. If unspecified, the Cloud Platform project's associated organization will be used.\n+\nTo set the `organization` attribute:\n* provide the argument `INTERNAL_NAME` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
              args: {
                name: "ORGANIZATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag11567,
            flag11637,
            flag11840,
            flag11946,
            {
              name: "--quota",
              description:
                "Number of request messages permitted per app by this API product\nfor the specified `--quota-interval` and `--quota-unit`.\n+\nFor example, to create an API product that allows 50 requests every twelve hours\nto every deployed API proxy, run:\n+\n    $ {command} PRODUCT --all-environments --all-proxies --public-access --quota=50 --quota-interval=12 --quota-unit=hour\n+\nIf specified, `--quota-interval` and `--quota-unit` must be specified too",
              args: { name: "QUOTA", description: "Int", suggestions: [] },
            },
            {
              name: "--quota-interval",
              description:
                "Time interval over which the number of request messages is calculated.\n+\nIf specified, `--quota` and `--quota-unit` must be specified too",
              args: {
                name: "QUOTA_INTERVAL",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--quota-unit",
              description:
                "Time unit for `--quota-interval`.\n+\nIf specified, `--quota` and `--quota-interval` must be specified too.\n+\n_QUOTA_UNIT_ must be one of: *minute*, *hour*, *day*, *month*",
              args: {
                name: "QUOTA_UNIT",
                description: "String",
                suggestions: ["minute", "hour", "day", "month"],
              },
            },
            {
              name: "--resources",
              description:
                "API resources to be bundled in the API product, separated by `#` signs.\n+\nBy default, the resource paths are mapped from the `proxy.pathsuffix` variable.\n+\nThe proxy path suffix is defined as the URI fragment following the\nProxyEndpoint base path. For example, if ``/forecastrss'' is given as an element\nof this list, and the base path defined for the API proxy is `/weather`, then\nonly requests to `/weather/forecastrss` are permitted by the API product.\n+\nProxy paths can use asterisks as wildcards; `/**` indicates that all sub-URIs\nare included, whereas a single asterisk indicates that only URIs one level\ndown are included.\n+\nBy default, `/` supports the same resources as `/**` as well as the base path\ndefined by the API proxy.\n+\nFor example, if the base path of the API proxy is `/v1/weatherapikey`, then\nthe API product supports requests to `/v1/weatherapikey` and to any sub-URIs,\nsuch as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so\non.\n+\nIf not provided, all deployed API resources will be included in the product, so\nlong as they match the other parameters.\n+\nThe API proxy resources must already be deployed to the bound environments, or\ncreation of the API product will fail",
              args: { name: "RESOURCE", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INTERNAL_NAME",
            description:
              "ID of the API product or fully qualified identifier for the API product.\n+\nTo set the `product` attribute:\n* provide the argument `INTERNAL_NAME` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Apigee API product",
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
            flag10782,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRODUCT",
            description:
              "ID of the API product or fully qualified identifier for the API product.\n+\nTo set the `product` attribute:\n* provide the argument `PRODUCT` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Apigee API product",
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
            flag10782,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRODUCT",
            description:
              "ID of the API product or fully qualified identifier for the API product.\n+\nTo set the `product` attribute:\n* provide the argument `PRODUCT` on the command line",
          },
        },
        {
          name: "list",
          description: "List Apigee API products",
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
            flag10796,
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
          description: "Update an existing Apigee API product",
          options: [
            flag42,
            flag46,
            {
              name: "--add-api",
              description: "Adds a new API to the set of APIs",
              args: { name: "API", description: "List", suggestions: [] },
            },
            {
              name: "--add-attribute",
              description: "Adds a new attribute to the set of attributes",
              args: {
                name: "NAME=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--add-environment",
              description: "Adds a new environment to the set of environments",
              args: {
                name: "ENVIRONMENT",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-oauth-scope",
              description: "Adds a new OAuth scope to the set of OAuth scopes",
              args: {
                name: "OAUTH-SCOPE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--add-resource",
              description: "Adds a new resource to the set of resources",
              args: { name: "RESOURCE", description: "List", suggestions: [] },
            },
            {
              name: "--all-apis",
              description:
                "Include all deployed API proxies in the product, so long as they match the other parameters",
            },
            flag385,
            {
              name: "--all-resources",
              description:
                "Include all deployed API resources in the product, so long as they match the other parameters",
            },
            {
              name: "--automatic-approval",
              description:
                "Allow developers to generate approved consumer keys without waiting for approval",
            },
            flag1201,
            {
              name: "--clear-attributes",
              description: "Removes all attributes",
            },
            {
              name: "--clear-description",
              description: "Remove the API product's description",
            },
            {
              name: "--clear-oauth-scopes",
              description: "Removes all OAuth scopes",
            },
            {
              name: "--clear-quota",
              description:
                "Remove any quota currently imposed on the API product",
            },
            flag2292,
            flag3269,
            flag3772,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5982,
            flag7356,
            {
              name: "--manual-approval",
              description:
                "Require manual approval of developer requests to access this API product before their consumer keys can be used",
            },
            flag10782,
            flag11567,
            flag11637,
            flag11840,
            flag11946,
            {
              name: "--quota",
              description:
                "Number of request messages permitted per app by this API\nproduct for the specified `--quota-interval` and `--quota-unit`.\n+\nFor example, `--quota=50`, `--quota-interval=12`, and `--quota-unit=hour` means\n50 requests are allowed every 12 hours",
              args: { name: "QUOTA", description: "Int", suggestions: [] },
            },
            {
              name: "--quota-interval",
              description:
                "Time interval over which the number of request messages is calculated",
              args: {
                name: "QUOTA_INTERVAL",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--quota-unit",
              description:
                "Time unit for `--quota-interval`. _QUOTA_UNIT_ must be one of: *minute*, *hour*, *day*, *month*",
              args: {
                name: "QUOTA_UNIT",
                description: "String",
                suggestions: ["minute", "hour", "day", "month"],
              },
            },
            {
              name: "--remove-api",
              description: "Removes an existing API from the set of APIs",
              args: { name: "API", description: "List", suggestions: [] },
            },
            {
              name: "--remove-attribute",
              description:
                "Removes an existing attribute from the set of attributes",
              args: { name: "NAME", description: "List", suggestions: [] },
            },
            {
              name: "--remove-environment",
              description:
                "Removes an existing environment from the set of environments",
              args: {
                name: "ENVIRONMENT",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-oauth-scope",
              description:
                "Removes an existing OAuth scope from the set of OAuth scopes",
              args: {
                name: "OAUTH-SCOPE",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--remove-resource",
              description:
                "Removes an existing resource from the set of resources",
              args: { name: "RESOURCE", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRODUCT",
            description:
              "ID of the API product or fully qualified identifier for the API product.\n+\nTo set the `product` attribute:\n* provide the argument `PRODUCT` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
