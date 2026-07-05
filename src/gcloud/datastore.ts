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
const flag2795: Fig.Option = {
  name: "--database",
  description:
    "The database to operate on. If not specified, the CLI refers the\n`(default)` database by default.\n+\nFor example, to operate on database `testdb`:\n+\n  $ {command} --database='testdb'",
  args: { name: "DATABASE", description: "String", suggestions: [] },
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
const flag6289: Fig.Option = {
  name: "--kinds",
  description:
    "A list specifying what kinds will be included in the operation. When\nomitted, all Kinds are included. For example, to operate on only the\n'Customer' and 'Order' Kinds:\n+\n  $ {command} --kinds='Customer','Order'",
  args: { name: "KIND", description: "List", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8134: Fig.Option = {
  name: "--namespaces",
  description:
    "A list specifying what namespaces will be included in the operation.\nWhen omitted, all namespaces are included in the operation,\nincluding the default namespace. To specify that *only* the default\nnamespace should be operated on, use the special symbol '(default)'.\nFor example, to operate on entities from both the 'customers' and default\nnamespaces:\n+\n  $ {command} --namespaces='(default)','customers'",
  args: { name: "NAMESPACE", description: "List", suggestions: [] },
};
const flag10706: Fig.Option = {
  name: "--operation-labels",
  description:
    "A string:string map of custom labels to associate with this operation.\nFor example:\n+\n  $ {command} --operation-labels=comment='customer orders','sales rep'=pending",
  args: { name: "OPERATION_LABEL", description: "Dict", suggestions: [] },
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
  name: "datastore",
  description: "Manage your Cloud Datastore resources",
  subcommands: [
    {
      name: "export",
      description: "Export Cloud Datastore entities to Google Cloud Storage",
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
        flag6289,
        flag7356,
        flag8134,
        flag10706,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "OUTPUT_URL_PREFIX",
        description:
          "Location for the export metadata and data files. Must be a valid\nGoogle Cloud Storage bucket with an optional path prefix. For example:\n+\n  $ {command} gs://mybucket/my/path\n+\nWill place the export in the `mybucket` bucket in objects prefixed with\n`my/path`",
      },
    },
    {
      name: "import",
      description: "Import Cloud Datastore entities from Google Cloud Storage",
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
        flag6289,
        flag7356,
        flag8134,
        flag10706,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "INPUT_URL",
        description:
          "Location of the import metadata. Must be a valid Google Cloud Storage\nobject. The file extension is 'overall_export_metadata'.\n+\nThis location is the 'output_url' field of a previous export, and can\nbe found via the 'operations describe' command",
      },
    },
    {
      name: "indexes",
      description: "Manage your Cloud Datastore indexes",
      subcommands: [
        {
          name: "cleanup",
          description:
            "Remove unused datastore indexes based on your local index configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2795,
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
            name: "INDEX_FILE",
            description:
              "The path to your `index.yaml` file. For a detailed look into defining\nyour `index.yaml` file, refer to this configuration guide:\nhttps://cloud.google.com/datastore/docs/tools/indexconfig#Datastore_About_index_yaml",
          },
        },
        {
          name: "create",
          description:
            "Create new datastore indexes based on your local index configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2795,
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
            name: "INDEX_FILE",
            description:
              "The path to your `index.yaml` file. For a detailed look into defining\nyour `index.yaml` file, refer to this configuration guide:\nhttps://cloud.google.com/datastore/docs/tools/indexconfig#Datastore_About_index_yaml",
          },
        },
        {
          name: "describe",
          description: "Show details about an Cloud Datastore index",
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
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index.\n+\nTo set the `index` attribute:\n* provide the argument `index` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Datastore indexes",
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
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: {
                name: "LIMIT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
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
      description: "Manage Long Running Operations for Cloud Datastore",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel a currently-running Cloud Datastore admin operation",
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
              "The unique name of the Operation to cancel, formatted as either the full\nor relative resource path:\n+\n  projects/my-app-id/operations/foo\n+\nor:\n+\n  foo",
          },
        },
        {
          name: "delete",
          description: "Delete a completed Cloud Datastore admin operation",
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
              "The unique name of the Operation to delete, formatted as either the full\nor relative resource path:\n+\n  projects/my-app-id/operations/foo\n+\nor:\n+\n  foo",
          },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud Datastore admin operation",
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
              "The unique name of the Operation to retrieve, formatted as either the full\nor relative resource path:\n+\n  projects/my-app-id/operations/foo\n+\nor:\n+\n  foo",
          },
        },
        {
          name: "list",
          description:
            "List pending Cloud Datastore admin operations and their status",
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
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *100*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: { name: "LIMIT", description: "Int", suggestions: [] },
            },
            flag7356,
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *100*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
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
      ],
    },
  ],
};

export default completionSpec;
