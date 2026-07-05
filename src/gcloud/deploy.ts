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
const flag525: Fig.Option = {
  name: "--annotations",
  description:
    'Annotations to apply to the rollout. Annotations take the form of key/value string pairs.\n+\nExamples:\n+\nAdd annotations:\n+\n  $ {command} --annotations="from_target=test,status=stable"',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag2977: Fig.Option = {
  name: "--delivery-pipeline",
  description: "The name of the Cloud Deploy delivery pipeline",
  args: { name: "DELIVERY_PIPELINE", description: "String", suggestions: [] },
};
const flag2978: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
  args: { name: "DELIVERY_PIPELINE", description: "String", suggestions: [] },
};
const flag2979: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "The delivery pipeline associated with the automation.  Alternatively, set the property [deploy/delivery-pipeline].\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `automation` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
  args: { name: "DELIVERY_PIPELINE", description: "String", suggestions: [] },
};
const flag2983: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "The delivery pipeline associated with the release.  Alternatively, set the property [deploy/delivery-pipeline].\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `release` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
  args: { name: "DELIVERY_PIPELINE", description: "String", suggestions: [] },
};
const flag2984: Fig.Option = {
  name: "--delivery-pipeline",
  description:
    "The delivery pipeline associated with the rollout.  Alternatively, set the property [deploy/delivery-pipeline].\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
  args: { name: "DELIVERY_PIPELINE", description: "String", suggestions: [] },
};
const flag3180: Fig.Option = {
  name: "--description",
  description: "Description of rollout created during a rollback",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3466: Fig.Option = {
  name: "--destination",
  description:
    "Path to a YAML file where the configuration will be exported.\n          Alternatively, you may omit this flag to write to standard output",
  args: { name: "DESTINATION", description: "String", suggestions: [] },
};
const flag4815: Fig.Option = {
  name: "--file",
  description:
    "Path to yaml file containing Delivery Pipeline(s), Target(s) declarative definitions",
  args: { name: "FILE", description: "String", suggestions: [] },
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
const flag6114: Fig.Option = {
  name: "--job-id",
  description: "Job ID on a rollout resource",
  args: { name: "JOB_ID", description: "String", suggestions: [] },
};
const flag6403: Fig.Option = {
  name: "--labels",
  description:
    'Labels to apply to the rollout. Labels take the form of key/value string pairs.\n+\nExamples:\n+\nAdd labels:\n+\n  $ {command} --labels="commit=abc123,author=foo"',
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
const flag11021: Fig.Option = {
  name: "--override-deploy-policies",
  description: "Deploy policies to override",
  args: { name: "POLICY", description: "List", suggestions: [] },
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
const flag11286: Fig.Option = {
  name: "--phase-id",
  description: "Phase ID on a rollout resource",
  args: { name: "PHASE_ID", description: "String", suggestions: [] },
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
const flag12311: Fig.Option = {
  name: "--region",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12396: Fig.Option = {
  name: "--region",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12404: Fig.Option = {
  name: "--region",
  description:
    "Location of the custom target type.\n+\n\nTo set the `region` attribute:\n* provide the argument `custom_target_type` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12405: Fig.Option = {
  name: "--region",
  description:
    "Location of the delivery_pipeline.\n+\n\nTo set the `region` attribute:\n* provide the argument `--delivery-pipeline` on the command line with a fully specified name;\n* set the property `deploy/delivery_pipeline` with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12406: Fig.Option = {
  name: "--region",
  description:
    "Location of the delivery_pipeline.\n+\n\nTo set the `region` attribute:\n* provide the argument `delivery_pipeline` on the command line with a fully specified name;\n* set the property `deploy/delivery_pipeline` with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12407: Fig.Option = {
  name: "--region",
  description:
    "Location of the deploy policy.\n+\n\nTo set the `region` attribute:\n* provide the argument `deploy_policy` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12413: Fig.Option = {
  name: "--region",
  description:
    "Location of the target.\n+\n\nTo set the `region` attribute:\n* provide the argument `target` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12426: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the automation.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `automation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12431: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the delivery_pipeline.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `delivery_pipeline` on the command line with a fully specified name;\n* set the property `deploy/delivery_pipeline` with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12432: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the deploy policy.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `deploy_policy` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12438: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the release.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `release` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12439: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the rollout.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12440: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the target.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `target` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12496: Fig.Option = {
  name: "--release",
  description:
    "ID of the release or fully qualified identifier for the release.\n+\nTo set the `release` attribute:\n* provide the argument `--release` on the command line",
  args: { name: "RELEASE", description: "String", suggestions: [] },
};
const flag12501: Fig.Option = {
  name: "--release",
  description:
    "The release associated with the rollout.\n+\nTo set the `release` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--release` on the command line",
  args: { name: "RELEASE", description: "String", suggestions: [] },
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
const flag13147: Fig.Option = {
  name: "--rollout-id",
  description: "ID to assign to the generated rollout for promotion",
  args: { name: "ROLLOUT_ID", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14384: Fig.Option = {
  name: "--starting-phase-id",
  description:
    "If set, starts the created rollout at the specified phase.\n+\nStart rollout at `stable` phase:\n+\n  $ {command} --starting-phase-id=stable",
  args: { name: "STARTING_PHASE_ID", description: "String", suggestions: [] },
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
  name: "deploy",
  description: "Create and manage Cloud Deploy resources",
  subcommands: [
    {
      name: "apply",
      description:
        "Applies a yaml configuration containing Delivery Pipeline(s), Target(s), Custom Target Type(s), Deploy Policy(ies), and Automation(s) declarative definitions",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag4815,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12311,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "automation-runs",
      description: "Manages AutomationRuns resources for Cloud Deploy",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a Cloud Deploy Automation Run",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the automation_run.  Alternatively, set the property [deploy/delivery-pipeline].\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `automation_run` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "The Cloud region for the automation_run.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `automation_run` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOMATION_RUN",
            description:
              "ID of the automation_run or fully qualified identifier for the automation_run.\n+\nTo set the `name` attribute:\n* provide the argument `automation_run` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details for an Automation Run",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `automation_run` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "Location of the automation run.\n+\n\nTo set the `region` attribute:\n* provide the argument `automation_run` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOMATION_RUN",
            description:
              "ID of the automation run or fully qualified identifier for the automation run.\n+\nTo set the `automation_run` attribute:\n* provide the argument `automation_run` on the command line",
          },
        },
        {
          name: "list",
          description: "List the Automation Runs",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2978,
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
            flag12405,
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
      name: "automations",
      description: "Manages Automations resources for Cloud Deploy",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a Cloud Deploy Automation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2979,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12426,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOMATION",
            description:
              "ID of the automation or fully qualified identifier for the automation.\n+\nTo set the `name` attribute:\n* provide the argument `automation` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details for an Automation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `automation` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "Location of the automation.\n+\n\nTo set the `region` attribute:\n* provide the argument `automation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOMATION",
            description:
              "ID of the automation or fully qualified identifier for the automation.\n+\nTo set the `automation` attribute:\n* provide the argument `automation` on the command line",
          },
        },
        {
          name: "export",
          description:
            "Returns the YAML definition of the specified Automation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2979,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12426,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUTOMATION",
            description:
              "ID of the automation or fully qualified identifier for the automation.\n+\nTo set the `name` attribute:\n* provide the argument `automation` on the command line",
          },
        },
        {
          name: "list",
          description: "List the Automations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2978,
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
            flag12405,
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
      name: "custom-target-types",
      description:
        "Create and manage Custom Target Type resources for Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add IAM policy binding for a Cloud Deploy Custom Target Type",
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
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12404,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a custom target type",
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
            flag12404,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details for a custom target type",
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
            flag12404,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
          },
        },
        {
          name: "export",
          description:
            "Returns the .yaml definition of the specified custom target type",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
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
                "The Cloud region for the custom_target_type.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `custom_target_type` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom_target_type or fully qualified identifier for the custom_target_type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Get the IAM policy for a Cloud Deploy Custom Target Type",
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
            flag12404,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
          },
        },
        {
          name: "list",
          description: "List the custom target types",
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
            flag12396,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding for a Cloud Deploy Custom Target Type",
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
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12404,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_TARGET_TYPE",
            description:
              "ID of the custom target type or fully qualified identifier for the custom target type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Deploy Custom Target Type",
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
            flag12404,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "CUSTOM_TARGET_TYPE",
              description:
                "ID of the custom target type or fully qualified identifier for the custom target type.\n+\nTo set the `custom_target_type` attribute:\n* provide the argument `custom_target_type` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description:
        "Deletes Delivery Pipeline(s), Target(s), Custom Target Type(s), and Automation(s) in a yaml configuration",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag4815,
        flag4900,
        flag4902,
        {
          name: "--force",
          description:
            "If true, the delivery pipeline and its sub-resources (releases and rollouts) are deleted",
        },
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag12311,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "delivery-pipelines",
      description:
        "Create and manage Delivery Pipeline resources for Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description:
            "Add IAM policy binding for a Cloud Deploy delivery pipeline",
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
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12406,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery_pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
            isOptional: true,
          },
        },
        {
          name: "delete",
          description: "Delete a delivery pipeline",
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
                "If true, the delivery pipeline with sub-resources will be deleted and its sub-resources will also be deleted",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12406,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery_pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
            isOptional: true,
          },
        },
        {
          name: "describe",
          description: "Show details about a delivery pipeline",
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
            flag12431,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
            isOptional: true,
          },
        },
        {
          name: "export",
          description:
            "Returns the .yaml definition of the specified delivery pipeline",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12431,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
            isOptional: true,
          },
        },
        {
          name: "get-iam-policy",
          description:
            "Get the IAM policy for a Cloud Deploy delivery pipeline",
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
            flag12406,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery_pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
            isOptional: true,
          },
        },
        {
          name: "list",
          description: "List Cloud Deploy delivery pipelines",
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
            flag12396,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove an IAM policy binding for a Cloud Deploy delivery pipeline",
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
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12406,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DELIVERY_PIPELINE",
            description:
              "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery_pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
            isOptional: true,
          },
        },
        {
          name: "set-iam-policy",
          description:
            "Set the IAM policy for a Cloud Deploy delivery pipeline",
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
            flag12406,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DELIVERY_PIPELINE",
              description:
                "ID of the delivery_pipeline or fully qualified identifier for the delivery_pipeline.\n+\nTo set the `delivery_pipeline` attribute:\n* provide the argument `delivery_pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              isOptional: true,
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
    {
      name: "deploy-policies",
      description:
        "Create and manage Deploy Policy resources for Google Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a Cloud Deploy Policy",
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
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12407,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a deploy policy",
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
            flag12407,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a deploy policy",
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
            flag12432,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
          },
        },
        {
          name: "export",
          description:
            "Returns the .yaml definition of the specified deploy policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12432,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Deploy Policy",
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
            flag12407,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding for a Cloud Deploy Policy",
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
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12407,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOY_POLICY",
            description:
              "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Deploy Policy",
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
            flag12407,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "DEPLOY_POLICY",
              description:
                "ID of the deploy policy or fully qualified identifier for the deploy policy.\n+\nTo set the `deploy_policy` attribute:\n* provide the argument `deploy_policy` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
    {
      name: "get-config",
      description:
        "Get the Cloud Deploy config for the provided region and project",
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
        flag12311,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "job-runs",
      description: "Manages job runs resources for Cloud Deploy",
      subcommands: [
        {
          name: "describe",
          description: "Show details for a job run",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "Location of the job run.\n+\n\nTo set the `region` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--release",
              description:
                "The name of the Cloud Deploy release.\n+\n\nTo set the `release` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--release` on the command line",
              args: { name: "RELEASE", description: "String", suggestions: [] },
            },
            {
              name: "--rollout",
              description:
                "The name of the Cloud Deploy rollout.\n+\n\nTo set the `rollout` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--rollout` on the command line",
              args: { name: "ROLLOUT", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB_RUN",
            description:
              "ID of the job run or fully qualified identifier for the job run.\n+\nTo set the `job_run` attribute:\n* provide the argument `job_run` on the command line",
          },
        },
        {
          name: "list",
          description: "List the job runs",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `--rollout` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Location of the rollout.\n+\n\nTo set the `region` attribute:\n* provide the argument `--rollout` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--release",
              description:
                "The name of the Cloud Deploy release.\n+\n\nTo set the `release` attribute:\n* provide the argument `--rollout` on the command line with a fully specified name;\n* provide the argument `--release` on the command line",
              args: { name: "RELEASE", description: "String", suggestions: [] },
            },
            {
              name: "--rollout",
              description:
                "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `--rollout` on the command line",
              args: { name: "ROLLOUT", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "terminate",
          description: "Terminates a Cloud Deploy job run",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the job_run.  Alternatively, set the property [deploy/delivery-pipeline].\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            flag11021,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "The Cloud region for the job_run.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--release",
              description:
                "The release associated with the job_run.\n+\nTo set the `release` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--release` on the command line",
              args: { name: "RELEASE", description: "String", suggestions: [] },
            },
            {
              name: "--rollout",
              description:
                "The rollout associated with the job_run.\n+\nTo set the `rollout` attribute:\n* provide the argument `job_run` on the command line with a fully specified name;\n* provide the argument `--rollout` on the command line",
              args: { name: "ROLLOUT", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB_RUN",
            description:
              "ID of the job_run or fully qualified identifier for the job_run.\n+\nTo set the `name` attribute:\n* provide the argument `job_run` on the command line",
          },
        },
      ],
    },
    {
      name: "releases",
      description: "Create and manage Release resources for Cloud Deploy",
      subcommands: [
        {
          name: "abandon",
          description: "Abandons a release",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2983,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12438,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE",
            description:
              "ID of the release or fully qualified identifier for the release.\n+\nTo set the `release` attribute:\n* provide the argument `release` on the command line",
          },
        },
        {
          name: "create",
          description: "Creates a new release, delivery pipeline qualified",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'Annotations to apply to the release. Annotations take the form of key/value string pairs.\n+\nExamples:\n+\nAdd annotations:\n+\n  $ {command} --annotations="from_target=test,status=stable"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag1201,
            {
              name: "--build-artifacts",
              description:
                "Reference to a Skaffold build artifacts output file from skaffold build --file-output=BUILD_ARTIFACTS. If you aren't using Skaffold, use the --images flag below to specify the image-names-to-tagged-image references",
              args: {
                name: "BUILD_ARTIFACTS",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag2983,
            {
              name: "--deploy-parameters",
              description:
                'Deployment parameters to apply to the release. Deployment parameters take the form of key/value string pairs.\n+\nExamples:\n+\nAdd deployment parameters:\n+\n  $ {command} --deploy-parameters="key1=value1,key2=value2"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--description",
              description: "Description of the release",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disable-initial-rollout",
              description:
                "Skips creating a rollout in the first target defined in the delivery pipeline",
            },
            {
              name: "--docker-version",
              description: "Version of the Docker binary",
              args: {
                name: "DOCKER_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-initial-rollout",
              description:
                "Creates a rollout in the first target defined in the delivery pipeline. This is the default behavior",
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--from-k8s-manifest",
              description:
                "The path to a Kubernetes manifest, which Cloud Deploy will use to generate a skaffold.yaml file for you (for example, foo/bar/k8.yaml). The generated Skaffold file will be available in the Google Cloud Storage source staging directory (see --gcs-source-staging-dir flag) after the release is complete",
              args: {
                name: "FROM_K8S_MANIFEST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--from-run-manifest",
              description:
                "The path to a Cloud Run manifest, which Cloud Deploy will use to generate a skaffold.yaml file for you (for example, foo/bar/service.yaml). The generated Skaffold file will be available in the Google Cloud Storage source staging directory (see --gcs-source-staging-dir flag) after the release is complete",
              args: {
                name: "FROM_RUN_MANIFEST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--gcs-source-staging-dir",
              description:
                "A directory in Google Cloud Storage to copy the source used for staging the build. If the specified bucket does not exist, Cloud Deploy will create one. If you don't set this field, ```gs://[DELIVERY_PIPELINE_ID]_clouddeploy/source``` is used",
              args: {
                name: "GCS_SOURCE_STAGING_DIR",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--helm-version",
              description: "Version of the Helm binary",
              args: {
                name: "HELM_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            {
              name: "--ignore-file",
              description:
                "Override the `.gcloudignore` file and use the specified file instead",
              args: {
                name: "IGNORE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--images",
              description:
                "Reference to a collection of individual image name to image full path replacements.\n+\nFor example:\n+\n    $ gcloud deploy releases create foo \\\n        --images image1=path/to/image1:v1@sha256:45db24",
              args: { name: "NAME=TAG", description: "Dict", suggestions: [] },
            },
            flag5699,
            {
              name: "--initial-rollout-annotations",
              description:
                'Annotations to apply to the initial rollout when creating the release.\nAnnotations take the form of key/value string pairs.\n+\nExamples:\n+\nAdd annotations:\n+\n  $ {command} --initial-rollout-annotations="from_target=test,status=stable"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--initial-rollout-labels",
              description:
                'Labels to apply to the initial rollout when creating the release. Labels take\nthe form of key/value string pairs.\n+\nExamples:\n+\nAdd labels:\n+\n  $ {command} initial-rollout-labels="commit=abc123,author=foo"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--initial-rollout-phase-id",
              description:
                "The phase to start the initial rollout at when creating the release.\nThe phase ID must be a valid phase on the rollout. If not specified, then the\nrollout will start at the first phase.\n+\nExamples:\n+\nStart rollout at `stable` phase:\n+\n  $ {command} --initial-rollout-phase-id=stable",
              args: {
                name: "INITIAL_ROLLOUT_PHASE_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kpt-version",
              description: "Version of the Kpt binary",
              args: {
                name: "KPT_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kubectl-version",
              description: "Version of the Kubectl binary",
              args: {
                name: "KUBECTL_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kustomize-version",
              description: "Version of the Kustomize binary",
              args: {
                name: "KUSTOMIZE_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--labels",
              description:
                'Labels to apply to the release. Labels take the form of key/value string pairs.\n+\nExamples:\n+\nAdd labels:\n+\n  $ {command} --labels="commit=abc123,author=foo"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            flag12438,
            {
              name: "--skaffold-file",
              description:
                "Path of the skaffold file absolute or relative to the source directory.\n+\nExamples:\n+\nUse Skaffold file with relative path:\nThe current working directory is expected to be some part of the skaffold path (e.g. the current working directory could be /home/user)\n+\n  $ {command} --source=/home/user/source --skaffold-file=config/skaffold.yaml\n+\nThe skaffold file absolute file path is expected to be:\n/home/user/source/config/skaffold.yaml\n+\n\nUse Skaffold file with absolute path and with or without source argument:\n+\n\n  $ {command} --source=/home/user/source --skaffold-file=/home/user/source/config/skaffold.yaml\n+\n  $ {command} --skaffold-file=/home/user/source/config/skaffold.yaml",
              args: {
                name: "SKAFFOLD_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--skaffold-version",
              description: "Version of the Skaffold binary",
              args: {
                name: "SKAFFOLD_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source",
              description:
                "The location of the source that contains skaffold.yaml. The location can be a directory on a local disk or a gzipped archive file (.tar.gz) in Google Cloud Storage. If the source is a local directory, this command skips the files specified\nin the --ignore-file. If --ignore-file is not specified, use.gcloudignore\nfile. If a .gcloudignore file is absent and a .gitignore file is present in\nthe local source directory, gcloud will use a generated Git-compatible\n.gcloudignore file that respects your .gitignored files.\nThe global .gitignore is not respected. For more information on .gcloudignore, see gcloud topic gcloudignore",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            {
              name: "--to-target",
              description:
                "Specifies a target to deliver into upon release creation",
              args: {
                name: "TO_TARGET",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE",
            description:
              "ID of the release or fully qualified identifier for the release.\n+\nTo set the `release` attribute:\n* provide the argument `release` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details about a release",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `release` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "Location of the release.\n+\n\nTo set the `region` attribute:\n* provide the argument `release` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RELEASE",
            description:
              "ID of the release or fully qualified identifier for the release.\n+\nTo set the `release` attribute:\n* provide the argument `release` on the command line",
          },
        },
        {
          name: "list",
          description: "List releases",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2978,
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
            flag12405,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "promote",
          description:
            "Promotes a release from one target (source), to another (destination)",
          options: [
            flag42,
            flag46,
            flag525,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The delivery pipeline associated with the release.  Alternatively, set the property [deploy/delivery-pipeline].\n+\nTo set the `delivery-pipeline` attribute:\n* provide the argument `--release` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6403,
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "The Cloud region for the release.  Alternatively, set the property [deploy/region].\n+\nTo set the `region` attribute:\n* provide the argument `--release` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag12496,
            flag13147,
            flag14384,
            {
              name: "--to-target",
              description: "Destination target to promote into",
              args: {
                name: "TO_TARGET",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "rollouts",
      description: "Create and manage Rollout resources for Cloud Deploy",
      subcommands: [
        {
          name: "advance",
          description: "Advances a rollout",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2984,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11021,
            {
              name: "--phase-id",
              description: "Phase ID on a rollout resource",
              args: {
                name: "PHASE_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12439,
            flag12501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
        {
          name: "approve",
          description:
            'Approves a rollout having an Approval state of "Required"',
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2984,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            flag12439,
            flag12501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
        {
          name: "cancel",
          description: "Cancel a Rollout",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2984,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            flag12439,
            flag12501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details for a rollout",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            {
              name: "--region",
              description:
                "Location of the rollout.\n+\n\nTo set the `region` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--release",
              description:
                "The name of the Cloud Deploy release.\n+\n\nTo set the `release` attribute:\n* provide the argument `rollout` on the command line with a fully specified name;\n* provide the argument `--release` on the command line",
              args: { name: "RELEASE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
        {
          name: "ignore-job",
          description:
            "Ignores a specified job and phase combination on a rollout",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2984,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6114,
            flag7356,
            flag11021,
            flag11286,
            flag11637,
            flag11946,
            flag12439,
            flag12501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
        {
          name: "list",
          description: "List the rollouts",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description:
                "The name of the Cloud Deploy delivery pipeline.\n+\n\nTo set the `delivery-pipeline` attribute:\n* provide the argument `--release` on the command line with a fully specified name;\n* provide the argument `--delivery-pipeline` on the command line;\n* set the property `deploy/delivery_pipeline`",
              args: {
                name: "DELIVERY_PIPELINE",
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
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Location of the release.\n+\n\nTo set the `region` attribute:\n* provide the argument `--release` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `deploy/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag12496,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "reject",
          description:
            'Rejects a rollout having an Approval state of "Required"',
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2984,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            flag12439,
            flag12501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
        {
          name: "retry-job",
          description:
            "Retries a specified job, phase combination on a rollout",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2984,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6114,
            flag7356,
            flag11021,
            flag11286,
            flag11637,
            flag11946,
            flag12439,
            flag12501,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLLOUT",
            description:
              "ID of the rollout or fully qualified identifier for the rollout.\n+\nTo set the `rollout` attribute:\n* provide the argument `rollout` on the command line",
          },
        },
      ],
    },
    {
      name: "targets",
      description: "Create and manage Target resources for Cloud Deploy",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a Cloud Deploy target",
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
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag12413,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud Deploy target",
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
            flag12440,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Describes details specific to the individual target, delivery pipeline qualified",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-pipeline",
              description: "The name of the Cloud Deploy delivery pipeline",
              args: {
                name: "DELIVERY_PIPELINE",
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
              name: "--list-all-pipelines",
              description:
                "List all Delivery Pipelines associated with a target.\n+\nUsage:\n+\n  $ {command} --list-all-pipelines",
            },
            flag7356,
            flag11637,
            flag11946,
            flag12440,
            {
              name: "--skip-pipeline-lookup",
              description:
                "If set, skip fetching details of associated pipelines when describing a target.\n+\nUsage:\n+\n  $ {command} --skip-pipeline-lookup",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "export",
          description: "Returns the .yaml definition of the specified target",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3466,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12440,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Deploy target",
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
            flag12413,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "list",
          description: "List Cloud Deploy targets",
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
            flag12311,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "redeploy",
          description: "Redeploy the last release to a target",
          options: [
            flag42,
            flag46,
            flag525,
            flag1201,
            flag2292,
            flag2977,
            flag3180,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6403,
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            flag12440,
            flag13147,
            flag14384,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding for a Cloud Deploy target",
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
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag12413,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "rollback",
          description: "Rollbacks a target to a prior rollout",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'Annotations to apply to the rollback. Annotations take the form of key/value string pairs.\n+\nExamples:\n+\nAdd annotations:\n+\n  $ {command} --annotations="from_target=test,status=stable"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag1201,
            flag2292,
            flag2977,
            flag3180,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'Labels to apply to the rollback. Labels take the form of key/value string pairs.\n+\nExamples:\n+\nAdd labels:\n+\n  $ {command} --labels="commit=abc123,author=foo"',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            flag11021,
            flag11637,
            flag11946,
            flag12440,
            {
              name: "--release",
              description: "Name of the release to rollback to",
              args: { name: "RELEASE", description: "String", suggestions: [] },
            },
            flag13147,
            flag14384,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TARGET",
            description:
              "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Deploy target",
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
            flag12413,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "TARGET",
              description:
                "ID of the target or fully qualified identifier for the target.\n+\nTo set the `target` attribute:\n* provide the argument `target` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
