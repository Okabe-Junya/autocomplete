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
const flag1580: Fig.Option = {
  name: "--clear-crypto-key",
  description:
    "Remove the previously configured crypto key. The channel will continue to be encrypted using Google-managed keys",
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
const flag2585: Fig.Option = {
  name: "--crypto-key",
  description:
    "Fully qualified name of the crypto key to use for customer-managed encryption. If this is unspecified, Google-managed keys will be used for encryption",
  args: { name: "CRYPTO_KEY", description: "String", suggestions: [] },
};
const flag3398: Fig.Option = {
  name: "--destination-gke-namespace",
  description:
    "Namespace that the destination GKE service is running in. If not specified, the ``default'' namespace is used",
  args: {
    name: "DESTINATION_GKE_NAMESPACE",
    description: "String",
    suggestions: [],
  },
};
const flag3399: Fig.Option = {
  name: "--destination-gke-path",
  description:
    "Relative path on the destination GKE service to which the events for the trigger should be sent. Examples: ``/route'', ``route'', ``route/subroute''",
  args: {
    name: "DESTINATION_GKE_PATH",
    description: "String",
    suggestions: [],
  },
};
const flag3412: Fig.Option = {
  name: "--destination-message-bus-project",
  description:
    "Project ID of the Google Cloud project for the message bus.\n+\nTo set the `project` attribute:\n* provide the argument `--destination-message-bus` on the command line with a fully specified name;\n* provide the argument `--destination-message-bus-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: {
    name: "DESTINATION_MESSAGE_BUS_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag3413: Fig.Option = {
  name: "--destination-message-bus",
  description:
    "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `--destination-message-bus` on the command line",
  args: {
    name: "DESTINATION_MESSAGE_BUS",
    description: "String",
    suggestions: [],
  },
};
const flag3440: Fig.Option = {
  name: "--destination-run-path",
  description:
    "Relative path on the destination Cloud Run service to which the events for the trigger should be sent. Examples: ``/route'', ``route'', ``route/subroute''",
  args: {
    name: "DESTINATION_RUN_PATH",
    description: "String",
    suggestions: [],
  },
};
const flag3441: Fig.Option = {
  name: "--destination-run-region",
  description:
    "Region in which the destination Cloud Run service can be found. If not specified, it is assumed that the service is in the same region as the trigger",
  args: {
    name: "DESTINATION_RUN_REGION",
    description: "String",
    suggestions: [],
  },
};
const flag3442: Fig.Option = {
  name: "--destination-run-service",
  description:
    "Name of the Cloud Run fully-managed service that receives the events for the trigger. The service must be in the same project as the trigger",
  args: {
    name: "DESTINATION_RUN_SERVICE",
    description: "String",
    suggestions: [],
  },
};
const flag3448: Fig.Option = {
  name: "--destination-workflow-location",
  description:
    "Location that the destination workflow is running in. If not specified, it is assumed that the workflow is in the same location as the trigger",
  args: {
    name: "DESTINATION_WORKFLOW_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag4563: Fig.Option = {
  name: "--event-data-content-type",
  description:
    "Depending on the event provider, you can specify the encoding of the event data payload that will be delivered to your destination, to either be encoded in ``application/json'' or ``application/protobuf''. The default encoding is ``application/json''. Note that for custom sources or third-party providers, or for direct events from Cloud Pub/Sub, this formatting option is not supported",
  args: {
    name: "EVENT_DATA_CONTENT_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag4565: Fig.Option = {
  name: "--event-filters-path-pattern",
  description:
    "The trigger's list of filters in path pattern format that apply to CloudEvent attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. Currently, path pattern format is only available for the resourceName attribute for Cloud Audit Log events",
  args: {
    name: "ATTRIBUTE=PATH_PATTERN",
    description: "Dict",
    suggestions: [],
  },
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
const flag5807: Fig.Option = {
  name: "--input-payload-format-avro-schema-definition",
  description:
    "The pipeline's input payload Avro schema definition. If this is set, then any messages not matching this format will be treated as persistent errors",
  args: {
    name: "INPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION",
    description: "String",
    suggestions: [],
  },
};
const flag5808: Fig.Option = {
  name: "--input-payload-format-json",
  description:
    "The pipeline's input payload format is JSON. If this is set, then any messages not matching this format will be treated as persistent errors",
  args: {
    name: "INPUT_PAYLOAD_FORMAT_JSON",
    description: "String",
    suggestions: [],
  },
};
const flag5809: Fig.Option = {
  name: "--input-payload-format-protobuf-schema-definition",
  description:
    "The pipeline's input payload Protobuf schema definition. If this is set, then any messages not matching this format will be treated as persistent errors",
  args: {
    name: "INPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION",
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
const flag6722: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6723: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`;\n* use '-' location to aggregate results for all Eventarc locations",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6917: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc Google API source, which should be one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `google_api_source` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6918: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc channel connection, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `channel_connection` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6919: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc channel, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `channel` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6920: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc enrollment, which should be one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `enrollment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6921: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc message bus, which should be one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `message_bus` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6922: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc pipeline, which should be one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `pipeline` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6924: Fig.Option = {
  name: "--location",
  description:
    "The location for the Eventarc trigger, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `trigger` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7371: Fig.Option = {
  name: "--logging-config",
  description:
    "The logging config of the message bus. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
  args: {
    name: "LOGGING_CONFIG",
    description: "String",
    suggestions: [
      "NONE",
      "DEBUG",
      "INFO",
      "NOTICE",
      "WARNING",
      "ERROR",
      "CRITICAL",
      "ALERT",
      "EMERGENCY",
    ],
  },
};
const flag7372: Fig.Option = {
  name: "--logging-config",
  description:
    "The logging config of the pipeline. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
  args: {
    name: "LOGGING_CONFIG",
    description: "String",
    suggestions: [
      "NONE",
      "DEBUG",
      "INFO",
      "NOTICE",
      "WARNING",
      "ERROR",
      "CRITICAL",
      "ALERT",
      "EMERGENCY",
    ],
  },
};
const flag7679: Fig.Option = {
  name: "--max-retry-attempts",
  description:
    "The maximum number of delivery attempts. If not set, the default value is 5",
  args: { name: "MAX_RETRY_ATTEMPTS", description: "Int", suggestions: [] },
};
const flag7680: Fig.Option = {
  name: "--max-retry-attempts",
  description:
    "The maximum number of delivery attempts. The only valid value is 1",
  args: { name: "MAX_RETRY_ATTEMPTS", description: "Int", suggestions: [] },
};
const flag7682: Fig.Option = {
  name: "--max-retry-delay",
  description:
    "The maximum retry delay in seconds. If not set, the default value is 60",
  args: { name: "MAX_RETRY_DELAY", description: "String", suggestions: [] },
};
const flag7740: Fig.Option = {
  name: "--mediations",
  description:
    'The different ways to modify the pipeline.\nCurrently, only one mediation is supported per pipeline.\n+\nA mediation is specified in a dict format. Currently, the only valid choice is `transformation_template`.\n+\nThis is the template to apply to transform messages.\n+\nFor complex transformations, shell parameter processing may fail to parse the CEL expressions.\nPlease see `gcloud topic flags-file` for how to use  https://cloud.google.com/sdk/gcloud/reference/topic/flags-file feature of gcloud to pass in CEL expressions.\n+\nExamples:\n+\n  $ gcloud eventarc pipelines create example-pipeline --mediations=transformation_template=\'message.removeFields(["data.credit_card_number","data.ssn"])\'',
  args: {
    name: "transformation_template=TRANSFORMATION_TEMPLATE",
    description: "List",
    suggestions: [],
  },
};
const flag7911: Fig.Option = {
  name: "--min-retry-delay",
  description:
    "The minimum retry delay in seconds. If not set, the default value is 1",
  args: { name: "MIN_RETRY_DELAY", description: "String", suggestions: [] },
};
const flag10775: Fig.Option = {
  name: "--organization-subscription",
  description:
    "The organization subscription for the resource. Use *--organization-subscription* to enable and *--no-organization-subscription* to disable",
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
const flag11636: Fig.Option = {
  name: "--project-subscriptions",
  description: "The project subscriptions for the resource",
  args: {
    name: "GAS_PROJECT_SUBSCRIPTION",
    description: "List",
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
const flag13524: Fig.Option = {
  name: "--service-account",
  description: "The IAM service account email associated with the trigger",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
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
  name: "eventarc",
  description: "Manage Eventarc resources",
  subcommands: [
    {
      name: "audit-logs-provider",
      description:
        "Explore provider serviceNames and methodNames for event type `google.cloud.audit.log.v1.written` in Eventarc",
      subcommands: [
        {
          name: "method-names",
          description:
            "Explore values for the methodName attribute for event type `google.cloud.audit.log.v1.written`",
          subcommands: [
            {
              name: "list",
              description:
                "List values for the methodName attribute for event type `google.cloud.audit.log.v1.written`",
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
                  name: "--service-name",
                  description:
                    "The value of the serviceName CloudEvents attribute",
                  args: {
                    name: "SERVICE_NAME",
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
          name: "service-names",
          description:
            "Explore values for the serviceName attribute for event type `google.cloud.audit.log.v1.written`",
          subcommands: [
            {
              name: "list",
              description:
                "List values for the serviceName attribute for event type `google.cloud.audit.log.v1.written`",
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
      ],
    },
    {
      name: "channel-connections",
      description: "Manage Eventarc channel connections",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc channel connection",
          options: [
            flag42,
            flag46,
            {
              name: "--activation-token",
              description: "Activation token for the specified channel",
              args: {
                name: "ACTIVATION_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--channel",
              description:
                "Subscriber channel for which to create the channel connection. This argument should be the full channel name, including project, location and the channel id",
              args: { name: "CHANNEL", description: "String", suggestions: [] },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description: "Labels to apply to the channel connection",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6918,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection.\n+\nTo set the `channel-connection` attribute:\n* provide the argument `channel_connection` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc channel connection",
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
            flag6918,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection.\n+\nTo set the `channel-connection` attribute:\n* provide the argument `channel_connection` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc channel connection",
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
            flag6918,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CHANNEL_CONNECTION",
            description:
              "ID of the channel connection or fully qualified identifier for the channel connection.\n+\nTo set the `channel-connection` attribute:\n* provide the argument `channel_connection` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc channel connections",
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
            flag6723,
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
      name: "channels",
      description: "Manage Eventarc channels",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc channel",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2585,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6919,
            flag7356,
            flag11637,
            {
              name: "--provider",
              description:
                "ID of the provider or fully qualified identifier for the provider.\n+\nTo set the `provider` attribute:\n* provide the argument `--provider` on the command line",
              args: {
                name: "PROVIDER",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel.\n+\nTo set the `channel` attribute:\n* provide the argument `channel` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc channel",
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
            flag6919,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel.\n+\nTo set the `channel` attribute:\n* provide the argument `channel` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc channel",
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
            flag6919,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel.\n+\nTo set the `channel` attribute:\n* provide the argument `channel` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc channels",
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
            flag6723,
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
          description: "Update an Eventarc channel",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1580,
            flag1723,
            flag2292,
            flag2585,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6919,
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
            name: "CHANNEL",
            description:
              "ID of the channel or fully qualified identifier for the channel.\n+\nTo set the `channel` attribute:\n* provide the argument `channel` on the command line",
          },
        },
      ],
    },
    {
      name: "enrollments",
      description: "Manage Eventarc enrollments",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc enrollment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cel-match",
              description: "The cel match expression for the enrollment",
              args: {
                name: "CEL_MATCH",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--destination-pipeline",
              description:
                "ID of the destination pipeline or fully qualified identifier for the destination pipeline.\n+\nTo set the `pipeline` attribute:\n* provide the argument `--destination-pipeline` on the command line",
              args: {
                name: "DESTINATION_PIPELINE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6920,
            flag7356,
            {
              name: "--message-bus",
              description:
                "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `--message-bus` on the command line",
              args: {
                name: "MESSAGE_BUS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--message-bus-project",
              description:
                "Project ID of the Google Cloud project for the message bus.\n+\nTo set the `project` attribute:\n* provide the argument `--message-bus` on the command line with a fully specified name;\n* provide the argument `--message-bus-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
              args: {
                name: "MESSAGE_BUS_PROJECT",
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
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment.\n+\nTo set the `enrollment` attribute:\n* provide the argument `enrollment` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc enrollment",
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
            flag6920,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment.\n+\nTo set the `enrollment` attribute:\n* provide the argument `enrollment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc enrollment",
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
            flag6920,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment.\n+\nTo set the `enrollment` attribute:\n* provide the argument `enrollment` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc enrollments",
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
            flag6723,
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
          description: "Update an Eventarc enrollment",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--cel-match",
              description: "The cel match expression for the enrollment",
              args: {
                name: "CEL_MATCH",
                description: "String",
                suggestions: [],
              },
            },
            flag1723,
            flag2292,
            {
              name: "--destination-pipeline",
              description:
                "ID of the pipeline or fully qualified identifier for the pipeline.\n+\nTo set the `pipeline` attribute:\n* provide the argument `--destination-pipeline` on the command line",
              args: {
                name: "DESTINATION_PIPELINE",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6920,
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
            name: "ENROLLMENT",
            description:
              "ID of the enrollment or fully qualified identifier for the enrollment.\n+\nTo set the `enrollment` attribute:\n* provide the argument `enrollment` on the command line",
          },
        },
      ],
    },
    {
      name: "google-api-sources",
      description: "Manage Eventarc Google API sources",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc Google API source",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2585,
            flag3413,
            flag3412,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6917,
            flag7356,
            {
              name: "--logging-config",
              description:
                "The logging config for the Google API source. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            flag10775,
            flag11637,
            flag11636,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source.\n+\nTo set the `google-api-source` attribute:\n* provide the argument `google_api_source` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc Google API source",
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
            flag6917,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source.\n+\nTo set the `google-api-source` attribute:\n* provide the argument `google_api_source` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc Google API source",
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
            flag6917,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source.\n+\nTo set the `google-api-source` attribute:\n* provide the argument `google_api_source` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc Google API sources",
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
            flag6723,
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
          description: "Update an Eventarc Google API source",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1580,
            flag1723,
            {
              name: "--clear-project-subscriptions",
              description: "Clear the project subscriptions for the resource",
            },
            flag2292,
            flag2585,
            flag3413,
            flag3412,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6917,
            flag7356,
            {
              name: "--logging-config",
              description:
                "The logging config of the Google API source. _LOGGING_CONFIG_ must be one of: *NONE*, *DEBUG*, *INFO*, *NOTICE*, *WARNING*, *ERROR*, *CRITICAL*, *ALERT*, *EMERGENCY*",
              args: {
                name: "LOGGING_CONFIG",
                description: "String",
                suggestions: [
                  "NONE",
                  "DEBUG",
                  "INFO",
                  "NOTICE",
                  "WARNING",
                  "ERROR",
                  "CRITICAL",
                  "ALERT",
                  "EMERGENCY",
                ],
              },
            },
            flag10775,
            flag11637,
            flag11636,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "GOOGLE_API_SOURCE",
            description:
              "ID of the Google API source or fully qualified identifier for the Google API source.\n+\nTo set the `google-api-source` attribute:\n* provide the argument `google_api_source` on the command line",
          },
        },
      ],
    },
    {
      name: "google-channels",
      description: "Manage Eventarc Google channels",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Eventarc Google channel",
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
            flag6722,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update an Eventarc Google channel",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1580,
            flag1723,
            flag2292,
            flag2585,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6722,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "locations",
      description: "Explore locations available for Eventarc",
      subcommands: [
        {
          name: "list",
          description: "List locations available for Eventarc",
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
      name: "message-buses",
      description: "Manage Eventarc message buses",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc message bus",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2585,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6921,
            flag7356,
            flag7371,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `message_bus` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc message bus",
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
            flag6921,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `message_bus` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc message bus",
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
            flag6921,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `message_bus` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc message buses",
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
            flag6723,
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
          name: "list-enrollments",
          description:
            "List Eventarc enrollments attached to an Eventarc message bus",
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
            flag6921,
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
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `message_bus` on the command line",
          },
        },
        {
          name: "publish",
          description: "Publish to an Eventarc message bus",
          options: [
            flag42,
            flag46,
            {
              name: "--avro-message",
              description: "An Avro message to publish to the message bus",
              args: {
                name: "AVRO_MESSAGE",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--event-attributes",
              description:
                "Event attributes. The event attributes of a published event.This flag can be repeated to add more attributes",
              args: {
                name: "ATTRIBUTE=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--event-data",
              description: "An event data. The event data of a published event",
              args: {
                name: "EVENT_DATA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--event-id",
              description: "An event id. The id of a published event",
              args: {
                name: "EVENT_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--event-source",
              description:
                "An event source. The event source of a published event",
              args: {
                name: "EVENT_SOURCE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--event-type",
              description: "An event type. The event type of a published event",
              args: {
                name: "EVENT_TYPE",
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
              name: "--json-message",
              description: "A JSON message to publish to the message bus",
              args: {
                name: "JSON_MESSAGE",
                description: "String",
                suggestions: [],
              },
            },
            flag6921,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `message_bus` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an Eventarc message bus",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1580,
            flag1723,
            flag2292,
            flag2585,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6921,
            flag7356,
            flag7371,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MESSAGE_BUS",
            description:
              "ID of the message bus or fully qualified identifier for the message bus.\n+\nTo set the `message-bus` attribute:\n* provide the argument `message_bus` on the command line",
          },
        },
      ],
    },
    {
      name: "pipelines",
      description: "Manage Eventarc pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc pipeline",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2585,
            {
              name: "--destinations",
              description:
                'The pipeline\'s destinations. This flag can be repeated to add more destinations\nto the list. Currently, only one destination is supported per pipeline. A\ndestination is specified in a dict format. For more\ninformation, see\n[Create an enrollment to receive events](https://cloud.google.com/eventarc/advanced/docs/receive-events/create-enrollment).\n+\nNote: Exactly one of the `http_endpoint_uri`,\n`workflow`, `message_bus`, or `pubsub_topic` keys must be set.\n+\nValid keys are:\n+\n*http_endpoint_uri*::: The URI of the HTTP endpoint. The value must be a RFC2396\nURI string. Only HTTPS protocol is supported. The host can be either a static IP\naddressable from the VPC specified by the network config, or an internal DNS\nhostname of the service resolvable via Cloud DNS. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\'\n+\n*http_endpoint_message_binding_template*::: The CEL expression used to construct\na new HTTP request to be sent to the final destination. It can be optionally\nspecified alongside with `http_endpoint_uri`. It represents a configuration used\nto bind a message to the final HTTP request that will be sent to the destination.\nIf a binding is not specified, by default the message is treated as a CloudEvent\nand is mapped to the HTTP request according to the CloudEvent HTTP Protocol\nBinding Binary Content Mode. The pipeline converts the data field of the message\nto the format provided in `output_payload_format` and maps it to the body field\nof the result. It also sets the corresponding Content-Type header to the\n`output_payload_format` type. If the `output_payload_format` is unspecified,\nthen the pipeline will treat the data field of the message as opaque binary data\nand attach it to the request body as bytes. In this case, the Content-Type\nheader will be set to the value of the datacontenttype attribute set on the\nincoming CloudEvent message if present, or the `application/octet-stream` MIME\ntype otherwise. The pipeline expects that the content of the message will adhere\nto the standard CloudEvent format. If not then the outgoing message request may\nfail with a persistent error.\n+\nNote: When `http_endpoint_uri` is not set,\n`http_endpoint_message_binding_template` can\'t be set.\n+\nThe result of the CEL expression must be a map of key-value pairs such that:\n+\n1. If a map named `headers` exists on the result of the expression, then its\nkey-value pairs are directly mapped to the HTTP request headers. The headers\nvalues are constructed from the corresponding value type\'s canonical\nrepresentation. If the `headers` field does not exist, then the resulting HTTP\nrequest will not contain headers.\n+\n2. If a field named `body` exists on the result of the expression, then its\nvalue is directly mapped to the body of the request. If the value of the `body`\nfield is of type bytes or string, then it is used as the HTTP request body\nas-is withouth any conversion. If the `body` field is of any other type, then\nit is converted to a JSON string. If the `body` field does not exist, then the\nresulting HTTP request will not contain a body.\n+\n3. Any other fields in the resulting expression will be ignored.\n+\nThe CEL expression may access the incoming CloudEvent message in its definition,\nas follows:\n+\n1. The `data` field of the incoming CloudEvent message can be accessed using\nthe `message.data` value.\n+\n2. Each attribute of the incoming CloudEvent message can be accessed using the\n`message.<key>` value, where <key> is the name of the attribute.\n+\nHeaders added to the request by previous filters in the chain can be accessed in\nthe CEL expression using the `headers` variable. The `headers` variable defines\na map of key-value pairs corresponding to the HTTP headers added by previous\nmediation steps and not the headers present on the original incoming request.\nFor example, the following CEL expression can be used to construct a\nheaders-only HTTP request by adding an additional header to the headers added by\nprevious mediations in the pipeline:\n+\n  ```\n  {"headers": headers.merge({"new-header-key": "new-header-value"})}\n  ```\n+\nAdditionally, the following CEL extension functions can be used in this CEL\nexpression:\n+\n* `toBase64Url`: map.toBase64Url() -> string\n  - Converts a CelValue to a base64url encoded string.\n+\n* `toJsonString`: map.toJsonString() -> string\n  - Converts a CelValue to a JSON string.\n+\n* `merge`: map1.merge(map2) -> map3\n  - Merges the passed CEL map with the existing CEL map the function is\n    applied to. If the same key exists in both maps, or if the key\'s value is\n    type map, then both maps are merged; Otherwise, the value from the passed\n    map is used.\n+\n* `toMap`: list(map).toMap() -> map\n  - Converts a CEL list of CEL maps to a single CEL map.\n+\n* `toDestinationPayloadFormat`: message.data.toDestinationPayloadFormat() -> string or bytes\n  - Converts the message data to the destination payload format specified in\n    `output_payload_format`. This function is meant to be applied to the\n    message.data field. If the destination payload format is not set, the\n    function will return the message data unchanged.\n+\n* `toCloudEventJsonWithPayloadFormat`: message.toCloudEventJsonWithPayloadFormat() -> map\n  - Converts a message to the corresponding structure of JSON format for\n    CloudEvents. This function applies toDestinationPayloadFormat() to the\n    message data. It also sets the corresponding datacontenttype of the\n    CloudEvent, as indicated by the `output_payload_format` field. If\n    `output_payload_format` is not set, it will use the existing\n    datacontenttype on the CloudEvent if present; Otherwise, it leaves the\n    datacontenttype unset. This function expects that the content of the\n    message will adhere to the standard CloudEvent format. If it doesn\'t then\n    this function will fail. The result is a CEL map that corresponds to the\n    JSON representation of the CloudEvent. To convert that data to a JSON\n    string it can be chained with the toJsonString() function.\n+\nFor example:\n+\n      $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',http_endpoint_message_binding_template=\'{"headers": headers.merge({"new-header-key": "new-header-value"}),"body": "new-body"}\'\n+\n*workflow*::: The destination Workflow ID. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=workflow=my-workflow\n+\n*message_bus*::: The destination Message Bus ID. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=message_bus=my-message-bus\n+\n*pubsub_topic*::: The destination Pub/Sub topic ID. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=pubsub_topic=my-topic\n+\n*project*::: The project ID of the destination resource. If `project` is not set,\nthen the project ID of the pipeline is used. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=project=example-project,workflow=my-workflow\n+\nNote: When `http_endpoint_uri` is set, `project` can\'t be set.\n+\n*location*::: The location of the destination resource. If `location` is not set,\nthen the location of the pipeline is used. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=location=us-east1,workflow=my-workflow\n+\nNote: When `http_endpoint_uri` is set, `location` can\'t be set.\n+\n*network_attachment*::: The ID of the network attachment that allows access to\nthe consumer VPC. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=network_attachment=my-network-attachment,http_endpoint_uri=\'https://example.com\'\n+\nNote: `network_attachment` can only be set when `http_endpoint_uri` is set as well.\n+\n*google_oidc_authentication_service_account*::: The service account email used\nto generate the OIDC token. The token can be used to invoke Cloud Run and Cloud\nRun functions destinations or HTTP endpoints that support Google OIDC. Note that\nthe principal who calls this API must have `iam.serviceAccounts.actAs`\npermission on the service account. For more information, see\n[Service accounts overview](https://cloud.google.com/iam/docs/understanding-service-accounts).\nFor example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',google_oidc_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com\n+\n*google_oidc_authentication_audience*::: The audience claim which identifies the\nrecipient that the JWT is intended for. If unspecified, the destination URI will\nbe used. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',google_oidc_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com,google_oidc_authentication_audience=\'https://example.com\'\n+\nNote: `google_oidc_authentication_audience` can only be set if\n`google_oidc_authentication_service_account` is set.\n+\n*oauth_token_authentication_service_account*::: The service account email used\nto generate the OAuth token. OAuth authorization should generally only be used\nwhen calling Google APIs hosted on *.googleapis.com. Note that the principal who\ncalls this API must have iam.serviceAccounts.actAs permission in the service\naccount. For more information, see\n[Service accounts overview](https://cloud.google.com/iam/docs/understanding-service-accounts).\nFor example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',oauth_token_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com\n+\n*oauth_token_authentication_scope*::: The scope used to generate the OAuth token.\n  If unspecified, "https://www.googleapis.com/auth/cloud-platform" will be used.\n  For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',oauth_token_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com,oauth_token_authentication_scope=https://www.googleapis.com/auth/cloud-platform\n+\nNote: At most one of `google_oidc_authentication_service_account` or\n`oauth_token_authentication_service_account` can be set; and\n`oauth_token_authentication_scope` can only be set if\n`oauth_token_authentication_service_account` is set.\n+\n*output_payload_format_json*::: Indicates that the output payload format is JSON.\nFor example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',output_payload_format_json= --input-payload-format-json=\n+\nNote: JSON schemas are not supported. Any value specified by this key is ignored.\n+\n*output_payload_format_avro_schema_definition*::: The schema definition of the\nAvro output payload format. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',output_payload_format_avro_schema_definition=\'{"type": "record", "name": "my_record", "fields": [{"name": "field1", "type": "string"}]}\' --input-payload-format-avro-schema-definition=\'{"type": "record", "name": "my_record", "fields": [{"name": "field1", "type": "string"}]}\'\n+\n*output_payload_format_protobuf_schema_definition*::: The schema definition of\nthe Protobuf output payload format. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',output_payload_format_protobuf_schema_definition=\'syntax = "proto3"; message Location { string home_address = 1; }\' --input-payload-format-protobuf-schema-definition=\'syntax = "proto3"; message Location { string home_address = 1; }\'\n+\nNote: If none of the `input_payload_format_json`,\n`input_payload_format_avro_schema_definition`, or\n`input_payload_format_protobuf_schema_definition` is set, then the message data\nis treated as an opaque binary and no output format can be set on the pipeline\nthrough the `output_payload_format_json`,\n`output_payload_format_avro_schema_definition`, or\n`output_payload_format_protobuf_schema_definition` field. Any mediations on the\npipeline that involve access to the data field will fail as persistent errors',
              args: {
                name: "[http_endpoint_uri=URI],[http_endpoint_message_binding_template=HTTP_ENDPOINT_MESSAGE_BINDING_TEMPLATE],[workflow=WORKFLOW],[message_bus=MESSAGE_BUS],[pubsub_topic=PUBSUB_TOPIC],[project=PROJECT],[location=LOCATION],[network_attachment=NETWORK_ATTACHMENT],[google_oidc_authentication_service_account=GOOGLE_OIDC_AUTHENTICATION_SERVICE_ACCOUNT],[google_oidc_authentication_audience=GOOGLE_OIDC_AUTHENTICATION_AUDIENCE],[oauth_token_authentication_service_account=OAUTH_TOKEN_AUTHENTICATION_SERVICE_ACCOUNT],[oauth_token_authentication_scope=OAUTH_TOKEN_AUTHENTICATION_SCOPE],[output_payload_format_json=OUTPUT_PAYLOAD_FORMAT_JSON],[output_payload_format_avro_schema_definition=OUTPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION],[output_payload_format_protobuf_schema_definition=OUTPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION]",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5807,
            flag5808,
            flag5809,
            flag6413,
            flag6922,
            flag7356,
            flag7372,
            flag7679,
            flag7682,
            flag7740,
            flag7911,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline.\n+\nTo set the `pipeline` attribute:\n* provide the argument `pipeline` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc pipeline",
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
            flag6922,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline.\n+\nTo set the `pipeline` attribute:\n* provide the argument `pipeline` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc pipeline",
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
            flag6922,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline.\n+\nTo set the `pipeline` attribute:\n* provide the argument `pipeline` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc pipelines",
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
            flag6723,
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
          description: "Update an Eventarc pipeline",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1580,
            flag1723,
            flag2292,
            flag2585,
            {
              name: "--destinations",
              description:
                'The pipeline\'s destinations. This flag can be repeated to add more destinations\nto the list. Currently, only one destination is supported per pipeline. A\ndestination is specified in a dict format. For more\ninformation, see\n[Create an enrollment to receive events](https://cloud.google.com/eventarc/advanced/docs/receive-events/create-enrollment).\n+\nNote: Exactly one of the `http_endpoint_uri`,\n`workflow`, `message_bus`, or `pubsub_topic` keys must be set.\n+\nValid keys are:\n+\n*http_endpoint_uri*::: The URI of the HTTP endpoint. The value must be a RFC2396\nURI string. Only HTTPS protocol is supported. The host can be either a static IP\naddressable from the VPC specified by the network config, or an internal DNS\nhostname of the service resolvable via Cloud DNS. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\'\n+\n*http_endpoint_message_binding_template*::: The CEL expression used to construct\na new HTTP request to be sent to the final destination. It can be optionally\nspecified alongside with `http_endpoint_uri`. It represents a configuration used\nto bind a message to the final HTTP request that will be sent to the destination.\nIf a binding is not specified, by default the message is treated as a CloudEvent\nand is mapped to the HTTP request according to the CloudEvent HTTP Protocol\nBinding Binary Content Mode. The pipeline converts the data field of the message\nto the format provided in `output_payload_format` and maps it to the body field\nof the result. It also sets the corresponding Content-Type header to the\n`output_payload_format` type. If the `output_payload_format` is unspecified,\nthen the pipeline will treat the data field of the message as opaque binary data\nand attach it to the request body as bytes. In this case, the Content-Type\nheader will be set to the value of the datacontenttype attribute set on the\nincoming CloudEvent message if present, or the `application/octet-stream` MIME\ntype otherwise. The pipeline expects that the content of the message will adhere\nto the standard CloudEvent format. If not then the outgoing message request may\nfail with a persistent error.\n+\nNote: When `http_endpoint_uri` is not set,\n`http_endpoint_message_binding_template` can\'t be set.\n+\nThe result of the CEL expression must be a map of key-value pairs such that:\n+\n1. If a map named `headers` exists on the result of the expression, then its\nkey-value pairs are directly mapped to the HTTP request headers. The headers\nvalues are constructed from the corresponding value type\'s canonical\nrepresentation. If the `headers` field does not exist, then the resulting HTTP\nrequest will not contain headers.\n+\n2. If a field named `body` exists on the result of the expression, then its\nvalue is directly mapped to the body of the request. If the value of the `body`\nfield is of type bytes or string, then it is used as the HTTP request body\nas-is withouth any conversion. If the `body` field is of any other type, then\nit is converted to a JSON string. If the `body` field does not exist, then the\nresulting HTTP request will not contain a body.\n+\n3. Any other fields in the resulting expression will be ignored.\n+\nThe CEL expression may access the incoming CloudEvent message in its definition,\nas follows:\n+\n1. The `data` field of the incoming CloudEvent message can be accessed using\nthe `message.data` value.\n+\n2. Each attribute of the incoming CloudEvent message can be accessed using the\n`message.<key>` value, where <key> is the name of the attribute.\n+\nHeaders added to the request by previous filters in the chain can be accessed in\nthe CEL expression using the `headers` variable. The `headers` variable defines\na map of key-value pairs corresponding to the HTTP headers added by previous\nmediation steps and not the headers present on the original incoming request.\nFor example, the following CEL expression can be used to construct a\nheaders-only HTTP request by adding an additional header to the headers added by\nprevious mediations in the pipeline:\n+\n  ```\n  {"headers": headers.merge({"new-header-key": "new-header-value"})}\n  ```\n+\nAdditionally, the following CEL extension functions can be used in this CEL\nexpression:\n+\n* `toBase64Url`: map.toBase64Url() -> string\n  - Converts a CelValue to a base64url encoded string.\n+\n* `toJsonString`: map.toJsonString() -> string\n  - Converts a CelValue to a JSON string.\n+\n* `merge`: map1.merge(map2) -> map3\n  - Merges the passed CEL map with the existing CEL map the function is\n    applied to. If the same key exists in both maps, or if the key\'s value is\n    type map, then both maps are merged; Otherwise, the value from the passed\n    map is used.\n+\n* `toMap`: list(map).toMap() -> map\n  - Converts a CEL list of CEL maps to a single CEL map.\n+\n* `toDestinationPayloadFormat`: message.data.toDestinationPayloadFormat() -> string or bytes\n  - Converts the message data to the destination payload format specified in\n    `output_payload_format`. This function is meant to be applied to the\n    message.data field. If the destination payload format is not set, the\n    function will return the message data unchanged.\n+\n* `toCloudEventJsonWithPayloadFormat`: message.toCloudEventJsonWithPayloadFormat() -> map\n  - Converts a message to the corresponding structure of JSON format for\n    CloudEvents. This function applies toDestinationPayloadFormat() to the\n    message data. It also sets the corresponding datacontenttype of the\n    CloudEvent, as indicated by the `output_payload_format` field. If\n    `output_payload_format` is not set, it will use the existing\n    datacontenttype on the CloudEvent if present; Otherwise, it leaves the\n    datacontenttype unset. This function expects that the content of the\n    message will adhere to the standard CloudEvent format. If it doesn\'t then\n    this function will fail. The result is a CEL map that corresponds to the\n    JSON representation of the CloudEvent. To convert that data to a JSON\n    string it can be chained with the toJsonString() function.\n+\nFor example:\n+\n      $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',http_endpoint_message_binding_template=\'{"headers": headers.merge({"new-header-key": "new-header-value"}),"body": "new-body"}\'\n+\n*workflow*::: The destination Workflow ID. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=workflow=my-workflow\n+\n*message_bus*::: The destination Message Bus ID. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=message_bus=my-message-bus\n+\n*pubsub_topic*::: The destination Pub/Sub topic ID. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=pubsub_topic=my-topic\n+\n*project*::: The project ID of the destination resource. If `project` is not set,\nthen the project ID of the pipeline is used. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=project=example-project,workflow=my-workflow\n+\nNote: When `http_endpoint_uri` is set, `project` can\'t be set.\n+\n*location*::: The location of the destination resource. If `location` is not set,\nthen the location of the pipeline is used. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=location=us-east1,workflow=my-workflow\n+\nNote: When `http_endpoint_uri` is set, `location` can\'t be set.\n+\n*network_attachment*::: The ID of the network attachment that allows access to\nthe consumer VPC. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=network_attachment=my-network-attachment,http_endpoint_uri=\'https://example.com\'\n+\nNote: `network_attachment` can only be set when `http_endpoint_uri` is set as well.\n+\n*google_oidc_authentication_service_account*::: The service account email used\nto generate the OIDC token. The token can be used to invoke Cloud Run and Cloud\nRun functions destinations or HTTP endpoints that support Google OIDC. Note that\nthe principal who calls this API must have `iam.serviceAccounts.actAs`\npermission on the service account. For more information, see\n[Service accounts overview](https://cloud.google.com/iam/docs/understanding-service-accounts).\nFor example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',google_oidc_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com\n+\n*google_oidc_authentication_audience*::: The audience claim which identifies the\nrecipient that the JWT is intended for. If unspecified, the destination URI will\nbe used. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',google_oidc_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com,google_oidc_authentication_audience=\'https://example.com\'\n+\nNote: `google_oidc_authentication_audience` can only be set if\n`google_oidc_authentication_service_account` is set.\n+\n*oauth_token_authentication_service_account*::: The service account email used\nto generate the OAuth token. OAuth authorization should generally only be used\nwhen calling Google APIs hosted on *.googleapis.com. Note that the principal who\ncalls this API must have iam.serviceAccounts.actAs permission in the service\naccount. For more information, see\n[Service accounts overview](https://cloud.google.com/iam/docs/understanding-service-accounts).\nFor example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',oauth_token_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com\n+\n*oauth_token_authentication_scope*::: The scope used to generate the OAuth token.\n  If unspecified, "https://www.googleapis.com/auth/cloud-platform" will be used.\n  For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',oauth_token_authentication_service_account=example-service-account@example-project.gserviceaccount.iam.com,oauth_token_authentication_scope=https://www.googleapis.com/auth/cloud-platform\n+\nNote: At most one of `google_oidc_authentication_service_account` or\n`oauth_token_authentication_service_account` can be set; and\n`oauth_token_authentication_scope` can only be set if\n`oauth_token_authentication_service_account` is set.\n+\n*output_payload_format_json*::: Indicates that the output payload format is JSON.\nFor example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',output_payload_format_json= --input-payload-format-json=\n+\nNote: JSON schemas are not supported. Any value specified by this key is ignored.\n+\n*output_payload_format_avro_schema_definition*::: The schema definition of the\nAvro output payload format. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',output_payload_format_avro_schema_definition=\'{"type": "record", "name": "my_record", "fields": [{"name": "field1", "type": "string"}]}\' --input-payload-format-avro-schema-definition=\'{"type": "record", "name": "my_record", "fields": [{"name": "field1", "type": "string"}]}\'\n+\n*output_payload_format_protobuf_schema_definition*::: The schema definition of\nthe Protobuf output payload format. For example:\n+\n    $ gcloud eventarc pipelines create example-pipeline --destinations=http_endpoint_uri=\'https://example.com\',output_payload_format_protobuf_schema_definition=\'syntax = "proto3"; message Location { string home_address = 1; }\' --input-payload-format-protobuf-schema-definition=\'syntax = "proto3"; message Location { string home_address = 1; }\'\n+\nNote: If none of the `input_payload_format_json`,\n`input_payload_format_avro_schema_definition`, or\n`input_payload_format_protobuf_schema_definition` is set, then the message data\nis treated as an opaque binary and no output format can be set on the pipeline\nthrough the `output_payload_format_json`,\n`output_payload_format_avro_schema_definition`, or\n`output_payload_format_protobuf_schema_definition` field. Any mediations on the\npipeline that involve access to the data field will fail as persistent errors',
              args: {
                name: "[http_endpoint_uri=URI],[http_endpoint_message_binding_template=HTTP_ENDPOINT_MESSAGE_BINDING_TEMPLATE],[workflow=WORKFLOW],[message_bus=MESSAGE_BUS],[pubsub_topic=PUBSUB_TOPIC],[project=PROJECT],[location=LOCATION],[network_attachment=NETWORK_ATTACHMENT],[google_oidc_authentication_service_account=GOOGLE_OIDC_AUTHENTICATION_SERVICE_ACCOUNT],[google_oidc_authentication_audience=GOOGLE_OIDC_AUTHENTICATION_AUDIENCE],[oauth_token_authentication_service_account=OAUTH_TOKEN_AUTHENTICATION_SERVICE_ACCOUNT],[oauth_token_authentication_scope=OAUTH_TOKEN_AUTHENTICATION_SCOPE],[output_payload_format_json=OUTPUT_PAYLOAD_FORMAT_JSON],[output_payload_format_avro_schema_definition=OUTPUT_PAYLOAD_FORMAT_AVRO_SCHEMA_DEFINITION],[output_payload_format_protobuf_schema_definition=OUTPUT_PAYLOAD_FORMAT_PROTOBUF_SCHEMA_DEFINITION]",
                description: "List",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5807,
            flag5808,
            flag5809,
            flag6922,
            flag7356,
            flag7372,
            flag7679,
            flag7682,
            flag7740,
            flag7911,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PIPELINE",
            description:
              "ID of the pipeline or fully qualified identifier for the pipeline.\n+\nTo set the `pipeline` attribute:\n* provide the argument `pipeline` on the command line",
          },
        },
      ],
    },
    {
      name: "providers",
      description: "Explore event providers available in Eventarc",
      subcommands: [
        {
          name: "describe",
          description: "Describe an Eventarc event provider",
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
                "The location for the Eventarc provider, which should be either ``global'' or one of the supported regions. Alternatively, set the [eventarc/location] property.\n+\nTo set the `location` attribute:\n* provide the argument `provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `eventarc/location`",
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
            name: "PROVIDER",
            description:
              "ID of the provider or fully qualified identifier for the provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
          },
        },
        {
          name: "list",
          description: "List event providers available in Eventarc",
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
            flag6723,
            flag7356,
            {
              name: "--name",
              description:
                "A provider name (e.g. `storage.googleapis.com`) List results will be filtered on this provider. Only exact match of the provider name is supported",
              args: { name: "NAME", description: "String", suggestions: [] },
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
      name: "triggers",
      description: "Manage Eventarc triggers",
      subcommands: [
        {
          name: "create",
          description: "Create an Eventarc trigger",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--channel",
              description:
                "ID of the channel or fully qualified identifier for the channel.\n+\nTo set the `channel` attribute:\n* provide the argument `--channel` on the command line",
              args: { name: "CHANNEL", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--destination-gke-cluster",
              description:
                "Name of the GKE cluster that the destination GKE service is running in.  The cluster must be in the same project as the trigger",
              args: {
                name: "DESTINATION_GKE_CLUSTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-gke-location",
              description:
                "Location of the GKE cluster that the destination GKE service is running in. If not specified, it is assumed that the cluster is a regional cluster and is in the same region as the trigger",
              args: {
                name: "DESTINATION_GKE_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag3398,
            flag3399,
            {
              name: "--destination-gke-service",
              description:
                "Name of the destination GKE service that receives the events for the trigger",
              args: {
                name: "DESTINATION_GKE_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-http-endpoint-uri",
              description:
                "URI that the destination HTTP Endpoint is connecting to",
              args: {
                name: "DESTINATION_HTTP_ENDPOINT_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag3440,
            flag3441,
            flag3442,
            {
              name: "--destination-workflow",
              description:
                "ID of the workflow that receives the events for the trigger. The workflow must be in the same project as the trigger",
              args: {
                name: "DESTINATION_WORKFLOW",
                description: "String",
                suggestions: [],
              },
            },
            flag3448,
            flag4563,
            {
              name: "--event-filters",
              description:
                "The trigger's list of filters that apply to CloudEvents attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. The filters must include the ``type'' attribute, as well as any other attributes that are expected for the chosen type",
              args: {
                name: "ATTRIBUTE=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4565,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag6924,
            flag7356,
            flag7680,
            {
              name: "--network-attachment",
              description:
                "The network attachment associated with the trigger that allows access to the destination VPC",
              args: {
                name: "NETWORK_ATTACHMENT",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag13524,
            flag14975,
            {
              name: "--transport-topic",
              description:
                "ID of the Pub/Sub topic or fully qualified identifier for the Pub/Sub topic.\n+\nTo set the `transport-topic` attribute:\n* provide the argument `--transport-topic` on the command line",
              args: {
                name: "TRANSPORT_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `trigger` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete an Eventarc trigger",
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
            flag6924,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `trigger` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an Eventarc trigger",
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
            flag6924,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `trigger` on the command line",
          },
        },
        {
          name: "list",
          description: "List Eventarc triggers",
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
            flag6723,
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
          description: "Update an Eventarc trigger",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--clear-destination-gke-path",
              description:
                "Clear the relative path on the destination GKE service to which the events for the trigger should be sent",
            },
            {
              name: "--clear-destination-run-path",
              description:
                "Clear the relative path on the destination Cloud Run service to which the events for the trigger should be sent",
            },
            flag1723,
            {
              name: "--clear-max-retry-attempts",
              description:
                "Clear the maximum number of delivery attempts for the trigger",
            },
            {
              name: "--clear-service-account",
              description:
                "Clear the IAM service account associated with the trigger",
            },
            flag2292,
            flag3398,
            flag3399,
            {
              name: "--destination-gke-service",
              description:
                "Name of the destination GKE service that receives the events for the trigger",
              args: {
                name: "DESTINATION_GKE_SERVICE",
                description: "String",
                suggestions: [],
              },
            },
            flag3440,
            flag3441,
            flag3442,
            {
              name: "--destination-workflow",
              description:
                "ID of the workflow that receives the events for the trigger. The workflow must be in the same project as the trigger",
              args: {
                name: "DESTINATION_WORKFLOW",
                description: "String",
                suggestions: [],
              },
            },
            flag3448,
            flag4563,
            {
              name: "--event-filters",
              description:
                "The trigger's list of filters that apply to CloudEvents attributes. This flag can be repeated to add more filters to the list. Only events that match all these filters will be sent to the destination. The filters must include the ``type'' attribute, as well as any other attributes that are expected for the chosen type",
              args: {
                name: "ATTRIBUTE=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag4565,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6924,
            flag7356,
            flag7680,
            flag11637,
            flag11946,
            flag12637,
            flag13524,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `trigger` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
