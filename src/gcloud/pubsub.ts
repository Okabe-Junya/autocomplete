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
const flag55: Fig.Option = {
  name: "--ack-deadline",
  description:
    "The number of seconds the system will wait for a subscriber to acknowledge receiving a message before re-attempting delivery",
  args: { name: "ACK_DEADLINE", description: "Int", suggestions: [] },
};
const flag963: Fig.Option = {
  name: "--aws-msk-ingestion-aws-role-arn",
  description:
    "AWS role ARN to be used for Federated Identity authentication with MSK",
  args: {
    name: "AWS_MSK_INGESTION_AWS_ROLE_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag964: Fig.Option = {
  name: "--aws-msk-ingestion-cluster-arn",
  description: "ARN that uniquely identifies the MSK cluster",
  args: {
    name: "AWS_MSK_INGESTION_CLUSTER_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag965: Fig.Option = {
  name: "--aws-msk-ingestion-service-account",
  description:
    "Google Cloud service account to be used for Federated Identity authentication with MSK",
  args: {
    name: "AWS_MSK_INGESTION_SERVICE_ACCOUNT",
    description: "String",
    suggestions: [],
  },
};
const flag966: Fig.Option = {
  name: "--aws-msk-ingestion-topic",
  description: "Name of the MSK topic that Pub/Sub will import from",
  args: {
    name: "AWS_MSK_INGESTION_TOPIC",
    description: "String",
    suggestions: [],
  },
};
const flag987: Fig.Option = {
  name: "--azure-event-hubs-ingestion-client-id",
  description: "Azure Event Hubs client ID to use for ingestion",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_CLIENT_ID",
    description: "String",
    suggestions: [],
  },
};
const flag988: Fig.Option = {
  name: "--azure-event-hubs-ingestion-event-hub",
  description: "Azure event hub from which to ingest data",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_EVENT_HUB",
    description: "String",
    suggestions: [],
  },
};
const flag989: Fig.Option = {
  name: "--azure-event-hubs-ingestion-namespace",
  description: "Azure Event Hubs namespace from which to ingest data",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_NAMESPACE",
    description: "String",
    suggestions: [],
  },
};
const flag990: Fig.Option = {
  name: "--azure-event-hubs-ingestion-resource-group",
  description:
    "Azure Event Hubs resource group from within an Azure subscription",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_RESOURCE_GROUP",
    description: "String",
    suggestions: [],
  },
};
const flag991: Fig.Option = {
  name: "--azure-event-hubs-ingestion-service-account",
  description:
    "Google Cloud service account to be used for Federated Identity authentication with Azure Event Hubs",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_SERVICE_ACCOUNT",
    description: "String",
    suggestions: [],
  },
};
const flag992: Fig.Option = {
  name: "--azure-event-hubs-ingestion-subscription-id",
  description: "Azure Event Hubs subscription ID to use for ingestion",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_SUBSCRIPTION_ID",
    description: "String",
    suggestions: [],
  },
};
const flag993: Fig.Option = {
  name: "--azure-event-hubs-ingestion-tenant-id",
  description: "Azure Event Hubs tenant ID to use for ingestion",
  args: {
    name: "AZURE_EVENT_HUBS_INGESTION_TENANT_ID",
    description: "String",
    suggestions: [],
  },
};
const flag1147: Fig.Option = {
  name: "--bigquery-service-account-email",
  description:
    "The service account email to use when writing to BigQuery. If unspecified, uses the Pub/Sub service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents)",
  args: {
    name: "BIGQUERY_SERVICE_ACCOUNT_EMAIL",
    description: "String",
    suggestions: [],
  },
};
const flag1149: Fig.Option = {
  name: "--bigquery-table",
  description:
    "A BigQuery table  of the form {project}:{dataset_name}.{table_name} to which to write messages for this subscription",
  args: { name: "BIGQUERY_TABLE", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1723: Fig.Option = {
  name: "--clear-labels",
  description:
    "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
};
const flag1773: Fig.Option = {
  name: "--clear-message-transforms",
  description:
    "If set, clears the message transforms field. Use --no-clear-message-transforms to disable this flag",
};
const flag2008: Fig.Option = {
  name: "--cloud-storage-bucket",
  description:
    "A Cloud Storage bucket to which to write messages for this subscription",
  args: {
    name: "CLOUD_STORAGE_BUCKET",
    description: "String",
    suggestions: [],
  },
};
const flag2009: Fig.Option = {
  name: "--cloud-storage-file-datetime-format",
  description:
    "The custom datetime format string for Cloud Storage filename. See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names)",
  args: {
    name: "CLOUD_STORAGE_FILE_DATETIME_FORMAT",
    description: "String",
    suggestions: [],
  },
};
const flag2010: Fig.Option = {
  name: "--cloud-storage-file-prefix",
  description: "The prefix for Cloud Storage filename",
  args: {
    name: "CLOUD_STORAGE_FILE_PREFIX",
    description: "String",
    suggestions: [],
  },
};
const flag2011: Fig.Option = {
  name: "--cloud-storage-file-suffix",
  description: "The suffix for Cloud Storage filename",
  args: {
    name: "CLOUD_STORAGE_FILE_SUFFIX",
    description: "String",
    suggestions: [],
  },
};
const flag2012: Fig.Option = {
  name: "--cloud-storage-ingestion-bucket",
  description: "Cloud Storage bucket from which to ingest data",
  args: {
    name: "CLOUD_STORAGE_INGESTION_BUCKET",
    description: "String",
    suggestions: [],
  },
};
const flag2013: Fig.Option = {
  name: "--cloud-storage-ingestion-input-format",
  description:
    "Format of the data in the Cloud Storage bucket. _INPUT_FORMAT_ must be one of: *text*, *avro*, *pubsub_avro*",
  args: { name: "INPUT_FORMAT", description: "List", suggestions: [] },
};
const flag2014: Fig.Option = {
  name: "--cloud-storage-ingestion-match-glob",
  description:
    "Glob pattern used to match Cloud Storage objects that will be ingested. If unset, all objects will be ingested",
  args: {
    name: "CLOUD_STORAGE_INGESTION_MATCH_GLOB",
    description: "String",
    suggestions: [],
  },
};
const flag2015: Fig.Option = {
  name: "--cloud-storage-ingestion-minimum-object-create-time",
  description:
    "Only Cloud Storage objects with a larger or equal creation timestamp will be ingested",
  args: {
    name: "CLOUD_STORAGE_INGESTION_MINIMUM_OBJECT_CREATE_TIME",
    description: "String",
    suggestions: [],
  },
};
const flag2016: Fig.Option = {
  name: "--cloud-storage-ingestion-text-delimiter",
  description: "Delimiter to use with text format when partitioning the object",
  args: {
    name: "CLOUD_STORAGE_INGESTION_TEXT_DELIMITER",
    description: "String",
    suggestions: [],
  },
};
const flag2017: Fig.Option = {
  name: "--cloud-storage-max-bytes",
  description:
    "The maximum bytes that can be written to a Cloud Storage file before a new file is created. The value must be between 1000B and 10GB. If the unit is omitted, KB is assumed",
  args: {
    name: "CLOUD_STORAGE_MAX_BYTES",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag2018: Fig.Option = {
  name: "--cloud-storage-max-duration",
  description:
    'The maximum duration that can elapse before a new Cloud Storage\n          file is created. The value must be between 1m and 10m.\n          Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
  args: {
    name: "CLOUD_STORAGE_MAX_DURATION",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag2019: Fig.Option = {
  name: "--cloud-storage-max-messages",
  description:
    "The maximum number of messages that can be written to a Cloud Storage file before a new file is created. The value must be greater than or equal to 1000",
  args: {
    name: "CLOUD_STORAGE_MAX_MESSAGES",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag2020: Fig.Option = {
  name: "--cloud-storage-output-format",
  description:
    "The output format for data written to Cloud Storage. Values: text (messages will be written as raw text, separated by a newline) or avro (messages will be written as an Avro binary). _OUTPUT_FORMAT_ must be one of: *text*, *avro*",
  args: { name: "OUTPUT_FORMAT", description: "List", suggestions: [] },
};
const flag2021: Fig.Option = {
  name: "--cloud-storage-service-account-email",
  description:
    "The service account email to use when writing to Cloud Storage. If unspecified, uses the Pub/Sub service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents)",
  args: {
    name: "CLOUD_STORAGE_SERVICE_ACCOUNT_EMAIL",
    description: "String",
    suggestions: [],
  },
};
const flag2022: Fig.Option = {
  name: "--cloud-storage-use-topic-schema",
  description:
    "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to Cloud Storage. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-use-topic-schema to disable this flag",
};
const flag2023: Fig.Option = {
  name: "--cloud-storage-write-metadata",
  description:
    "Whether or not to write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. This has an effect only for subscriptions with --cloud-storage-output-format=avro. Use --no-cloud-storage-write-metadata to disable this flag",
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2294: Fig.Option = {
  name: "--confluent-cloud-ingestion-bootstrap-server",
  description: "Confluent Cloud bootstrap server. The format is url:port",
  args: {
    name: "CONFLUENT_CLOUD_INGESTION_BOOTSTRAP_SERVER",
    description: "String",
    suggestions: [],
  },
};
const flag2295: Fig.Option = {
  name: "--confluent-cloud-ingestion-cluster-id",
  description: "Confluent Cloud cluster ID",
  args: {
    name: "CONFLUENT_CLOUD_INGESTION_CLUSTER_ID",
    description: "String",
    suggestions: [],
  },
};
const flag2296: Fig.Option = {
  name: "--confluent-cloud-ingestion-identity-pool-id",
  description:
    "Identity pool ID to be used for Federated Identity authentication with Confluent Cloud",
  args: {
    name: "CONFLUENT_CLOUD_INGESTION_IDENTITY_POOL_ID",
    description: "String",
    suggestions: [],
  },
};
const flag2297: Fig.Option = {
  name: "--confluent-cloud-ingestion-service-account",
  description:
    "Google Cloud service account to be used for Federated Identity authentication with Confluent Cloud",
  args: {
    name: "CONFLUENT_CLOUD_INGESTION_SERVICE_ACCOUNT",
    description: "String",
    suggestions: [],
  },
};
const flag2298: Fig.Option = {
  name: "--confluent-cloud-ingestion-topic",
  description:
    "Name of the Confluent Cloud topic that Pub/Sub will import from",
  args: {
    name: "CONFLUENT_CLOUD_INGESTION_TOPIC",
    description: "String",
    suggestions: [],
  },
};
const flag2884: Fig.Option = {
  name: "--dead-letter-topic-project",
  description:
    "Project ID of the Google Cloud project for the dead-letter-topic.\n+\nTo set the `project` attribute:\n* provide the argument `--dead-letter-topic` on the command line with a fully specified name;\n* provide the argument `--dead-letter-topic-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: {
    name: "DEAD_LETTER_TOPIC_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag2885: Fig.Option = {
  name: "--dead-letter-topic",
  description:
    "ID of the dead-letter-topic or fully qualified identifier for the dead-letter-topic.\n+\nTo set the `topic` attribute:\n* provide the argument `--dead-letter-topic` on the command line",
  args: { name: "DEAD_LETTER_TOPIC", description: "String", suggestions: [] },
};
const flag2929: Fig.Option = {
  name: "--definition-file",
  description:
    "File containing schema definition. Use a full or relative path to a local file containing the value of definition_file",
  args: {
    name: "DEFINITION_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2933: Fig.Option = {
  name: "--definition",
  description: "Inline schema definition",
  args: { name: "DEFINITION", description: "String", suggestions: [] },
};
const flag3927: Fig.Option = {
  name: "--drop-unknown-fields",
  description:
    "If either --use-topic-schema or --use-table-schema is set, whether or not to ignore fields in the message that do not appear in the BigQuery table schema. Use --no-drop-unknown-fields to disable this flag",
};
const flag4119: Fig.Option = {
  name: "--enable-exactly-once-delivery",
  description:
    "Whether or not to enable exactly-once delivery on the subscription.\nIf true, Pub/Sub provides the following guarantees for the delivery\nof a message with a given value of `message_id` on this\nsubscription: The message sent to a subscriber is guaranteed not to\nbe resent before the message's acknowledgment deadline expires. An\nacknowledged message will not be resent to a subscriber. Use --no-enable-exactly-once-delivery to disable this flag",
};
const flag4574: Fig.Option = {
  name: "--event-time",
  description:
    "The event time to which you seek a subscription. The subscription seeks to the first message\nwith event time greater than or equal to the specified event time. Messages missing an event\ntime use publish time as a fallback. As event times are user supplied, subsequent messages may\nhave event times less than the specified event time and must be filtered by the client, if\nnecessary.\nRun $ gcloud topic datetimes for information on time formats",
  args: {
    name: "EVENT_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag4656: Fig.Option = {
  name: "--expiration-period",
  description:
    'The subscription will expire if it is inactive for the given\n          period. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed. This flag additionally accepts the special value "never" to\n          indicate that the subscription will never expire',
  args: {
    name: "EXPIRATION_PERIOD",
    description:
      "Googlecloudsdk.command_lib.pubsub.flags:ParseExpirationPeriodWithNeverSentinel",
    suggestions: [],
  },
};
const flag4674: Fig.Option = {
  name: "--export-dead-letter-topic",
  description:
    "The name of the Pub/Sub Lite topic to write messages that cannot be exported. Must be in the\nsame project and location as the subscription to be created. Note that this is a Lite topic",
  args: {
    name: "EXPORT_DEAD_LETTER_TOPIC",
    description: "String",
    suggestions: [],
  },
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4894: Fig.Option = {
  name: "--first-revision-id",
  description:
    "The id of the oldest\n      revision allowed for the specified schema",
  args: { name: "FIRST_REVISION_ID", description: "String", suggestions: [] },
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
const flag5777: Fig.Option = {
  name: "--ingestion-log-severity",
  description: "Log severity to use for ingestion",
  args: {
    name: "INGESTION_LOG_SEVERITY",
    description: "String",
    suggestions: [],
  },
};
const flag6290: Fig.Option = {
  name: "--kinesis-ingestion-consumer-arn",
  description:
    "Kinesis data streams consumer Amazon Resource Name (ARN) to use for ingestion",
  args: {
    name: "KINESIS_INGESTION_CONSUMER_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag6291: Fig.Option = {
  name: "--kinesis-ingestion-role-arn",
  description:
    "AWS role ARN to be used for Federated Identity authentication with Kinesis",
  args: {
    name: "KINESIS_INGESTION_ROLE_ARN",
    description: "String",
    suggestions: [],
  },
};
const flag6292: Fig.Option = {
  name: "--kinesis-ingestion-service-account",
  description:
    "Google Cloud service account to be used for Federated Identity authentication with Kinesis",
  args: {
    name: "KINESIS_INGESTION_SERVICE_ACCOUNT",
    description: "String",
    suggestions: [],
  },
};
const flag6293: Fig.Option = {
  name: "--kinesis-ingestion-stream-arn",
  description: "Kinesis data stream ARN from which to ingest data",
  args: {
    name: "KINESIS_INGESTION_STREAM_ARN",
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
const flag6470: Fig.Option = {
  name: "--last-revision-id",
  description:
    "The id of the most recent\n      revision allowed for the specified schema",
  args: { name: "LAST_REVISION_ID", description: "String", suggestions: [] },
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
const flag6687: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Pub/Sub Lite resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `reservation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6688: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Pub/Sub Lite resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `subscription` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6689: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Pub/Sub Lite resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `subscription` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* provide the argument `--zone` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6691: Fig.Option = {
  name: "--location",
  description:
    "ID of the location of the Pub/Sub Lite resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `topic` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* provide the argument `--zone` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6713: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* provide the argument `--zone` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7628: Fig.Option = {
  name: "--max-delivery-attempts",
  description:
    "Maximum number of delivery attempts for any message. The value\n          must be between 5 and 100. Defaults to 5. `--dead-letter-topic`\n          must also be specified",
  args: {
    name: "MAX_DELIVERY_ATTEMPTS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7681: Fig.Option = {
  name: "--max-retry-delay",
  description:
    'The maximum delay between consecutive deliveries of a given\n          message. Value should be between 0 and 600 seconds. Defaults to 600\n          seconds. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
  args: {
    name: "MAX_RETRY_DELAY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
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
const flag7783: Fig.Option = {
  name: "--message-encoding",
  description:
    "The encoding of messages validated against the schema. _ENCODING_ must be one of: *json*, *binary*",
  args: { name: "ENCODING", description: "List", suggestions: [] },
};
const flag7789: Fig.Option = {
  name: "--message-retention-duration",
  description:
    'Indicates the minimum duration to retain a message after it is\npublished to the topic. If this field is set, messages published to\nthe topic in the last MESSAGE_RETENTION_DURATION are always available\nto subscribers. For instance, it allows any attached subscription to\nseek to a timestamp that is up to MESSAGE_RETENTION_DURATION in the\npast. If this field is not set, message retention is controlled by\nsettings on individual subscriptions. The minimum is 10 minutes and\nthe maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
  args: {
    name: "MESSAGE_RETENTION_DURATION",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag7790: Fig.Option = {
  name: "--message-retention-period",
  description:
    'How long a published message is retained. If unset, messages will only be\ndropped to make space for new ones once the `per-partition-bytes` limit is\nreached.\nA valid example value of this flag would be `message-retention-period="2w"`',
  args: {
    name: "MESSAGE_RETENTION_PERIOD",
    description: "Googlecloudsdk.core.util.times:ParseDuration",
    suggestions: [],
  },
};
const flag7791: Fig.Option = {
  name: "--message-storage-policy-allowed-regions",
  description:
    "A list of one or more Cloud regions where messages are allowed to be stored at rest",
  args: { name: "REGION", description: "List", suggestions: [] },
};
const flag7792: Fig.Option = {
  name: "--message-storage-policy-enforce-in-transit",
  description:
    "Whether or not to enforce in-transit guarantees for this topic using the allowed regions. This ensures that publishing, pulling, and push delivery are only handled in allowed Cloud regions",
};
const flag7794: Fig.Option = {
  name: "--message-transforms-file",
  description: "Path to YAML or JSON file containing message transforms",
  args: {
    name: "MESSAGE_TRANSFORMS_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag7910: Fig.Option = {
  name: "--min-retry-delay",
  description:
    'The minimum delay between consecutive deliveries of a given\n          message. Value should be between 0 and 600 seconds. Defaults to 10\n          seconds. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
  args: {
    name: "MIN_RETRY_DELAY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
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
const flag11244: Fig.Option = {
  name: "--per-partition-publish-mib",
  description:
    "Topic partition publish throughput capacity in MiB/s. Must be between 4 and 16",
  args: {
    name: "PER_PARTITION_PUBLISH_MIB",
    description: "Int",
    suggestions: [],
  },
};
const flag11245: Fig.Option = {
  name: "--per-partition-subscribe-mib",
  description:
    "Topic partition subscribe throughput capacity in MiB/s. Must be between 4 and 32",
  args: {
    name: "PER_PARTITION_SUBSCRIBE_MIB",
    description: "Int",
    suggestions: [],
  },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11867: Fig.Option = {
  name: "--publish-time",
  description:
    "The publish time to which you seek a subscription. Messages with publish time greater than or\nequal to the specified time are delivered after the seek operation.\nRun $ gcloud topic datetimes for information on time formats",
  args: {
    name: "PUBLISH_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11890: Fig.Option = {
  name: "--push-auth-service-account",
  description:
    "Service account email used as the identity for the generated Open ID Connect token for authenticated push",
  args: {
    name: "PUSH_AUTH_SERVICE_ACCOUNT",
    description: "String",
    suggestions: [],
  },
};
const flag11891: Fig.Option = {
  name: "--push-auth-token-audience",
  description:
    "Audience used in the generated Open ID Connect token for authenticated push. If not specified, it will be set to the push-endpoint",
  args: {
    name: "PUSH_AUTH_TOKEN_AUDIENCE",
    description: "String",
    suggestions: [],
  },
};
const flag11892: Fig.Option = {
  name: "--push-endpoint",
  description:
    "A URL to use as the endpoint for this subscription. This will also automatically set the subscription type to PUSH",
  args: { name: "PUSH_ENDPOINT", description: "String", suggestions: [] },
};
const flag11894: Fig.Option = {
  name: "--push-no-wrapper-write-metadata",
  description:
    "When true, writes the Pub/Sub message metadata to `x-goog-pubsub-<KEY>:<VAL>` headers of the HTTP request. Writes the Pub/Sub message attributes to `<KEY>:<VAL>` headers of the HTTP request. Use --no-push-no-wrapper-write-metadata to disable this flag",
};
const flag11895: Fig.Option = {
  name: "--push-no-wrapper",
  description:
    "When set, the message data is delivered directly as the HTTP body. Use --no-push-no-wrapper to disable this flag",
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
const flag13078: Fig.Option = {
  name: "--retain-acked-messages",
  description:
    "Whether or not to retain acknowledged messages. If true,\nmessages are not expunged from the subscription's backlog\nuntil they fall out of the --message-retention-duration\nwindow. Acknowledged messages are not retained by default.  Use --no-retain-acked-messages to disable this flag",
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
const flag13328: Fig.Option = {
  name: "--schema-project",
  description:
    "Project ID of the Google Cloud project for the schema.\n+\nTo set the `project` attribute:\n* provide the argument `--schema` on the command line with a fully specified name;\n* provide the argument `--schema-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: { name: "SCHEMA_PROJECT", description: "String", suggestions: [] },
};
const flag13330: Fig.Option = {
  name: "--schema",
  description:
    "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `--schema` on the command line",
  args: { name: "SCHEMA", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14644: Fig.Option = {
  name: "--tags",
  description:
    "List of tags KEY=VALUE pairs to bind. Each item must be expressed as `<tag-key-namespaced-name>=<tag-value-short-name>`.\nExample: `123/environment=production,123/costCenter=marketing`",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag14870: Fig.Option = {
  name: "--throughput-reservation",
  description: "Reservation ID to use for topic throughput",
  args: {
    name: "THROUGHPUT_RESERVATION",
    description: "String",
    suggestions: [],
  },
};
const flag14947: Fig.Option = {
  name: "--topic-encryption-key-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--topic-encryption-key` on the command line with a fully specified name;\n* provide the argument `--topic-encryption-key-keyring` on the command line",
  args: {
    name: "TOPIC_ENCRYPTION_KEY_KEYRING",
    description: "String",
    suggestions: [],
  },
};
const flag14948: Fig.Option = {
  name: "--topic-encryption-key-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--topic-encryption-key` on the command line with a fully specified name;\n* provide the argument `--topic-encryption-key-location` on the command line",
  args: {
    name: "TOPIC_ENCRYPTION_KEY_LOCATION",
    description: "String",
    suggestions: [],
  },
};
const flag14949: Fig.Option = {
  name: "--topic-encryption-key-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--topic-encryption-key` on the command line with a fully specified name;\n* provide the argument `--topic-encryption-key-project` on the command line;\n* set the property `core/project`",
  args: {
    name: "TOPIC_ENCRYPTION_KEY_PROJECT",
    description: "String",
    suggestions: [],
  },
};
const flag14950: Fig.Option = {
  name: "--topic-encryption-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--topic-encryption-key` on the command line",
  args: {
    name: "TOPIC_ENCRYPTION_KEY",
    description: "String",
    suggestions: [],
  },
};
const flag14952: Fig.Option = {
  name: "--topic-project",
  description:
    "Project ID of the Google Cloud project for the topic.\n+\nTo set the `project` attribute:\n* provide the argument `--topic` on the command line with a fully specified name;\n* provide the argument `--topic-project` on the command line;\n* provide the argument `--project` on the command line;\n* set the property `core/project`",
  args: { name: "TOPIC_PROJECT", description: "String", suggestions: [] },
};
const flag14954: Fig.Option = {
  name: "--topic",
  description:
    "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `--topic` on the command line",
  args: { name: "TOPIC", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15080: Fig.Option = {
  name: "--type",
  description:
    "Type of the schema. _TYPE_ must be one of: *avro*, *protocol-buffer*",
  args: {
    name: "TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["avro", "protocol-buffer"],
  },
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
const flag15301: Fig.Option = {
  name: "--use-table-schema",
  description:
    "Whether or not to use the BigQuery table schema when writing messages to BigQuery. Use --no-use-table-schema to disable this flag",
};
const flag15302: Fig.Option = {
  name: "--use-topic-schema",
  description:
    "Whether or not to use the schema for the subscription's topic (if it exists) when writing messages to BigQuery. If --drop-unknown-fields is not set, then the BigQuery schema must contain all fields that are present in the topic schema. Use --no-use-topic-schema to disable this flag",
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
const flag15452: Fig.Option = {
  name: "--view",
  description:
    "There are two possible views, 'basic' and 'full', default is 'basic'. _VIEW_ must be one of:\n+\n*basic*::: Include the name and type of the schema, but not the definition.\n+\n*full*::: Include all Schema object fields.\n+\n:::\n+",
  args: {
    name: "VIEW",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["basic", "full"],
  },
};
const flag15665: Fig.Option = {
  name: "--write-metadata",
  description:
    "Whether or not to write message metadata including message ID, publish timestamp, ordering key, and attributes to BigQuery. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties other than data (for example, an ordering_key, if present) are written to a JSON object in the attributes column. Use --no-write-metadata to disable this flag",
};

const completionSpec: Fig.Spec = {
  name: "pubsub",
  description: "Manage Cloud Pub/Sub topics, subscriptions, and snapshots",
  subcommands: [
    {
      name: "lite-operations",
      description: "Manage Pub/Sub Lite operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite operation",
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
                "ID of the location of the Pub/Sub Lite resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
          description: "List Pub/Sub Lite operations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--done",
              description:
                "Filter operations by completion status. This flag is ignored if `--filter` is set. _DONE_ must be one of: *false*, *true*",
            },
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
            {
              name: "--subscription",
              description:
                "Filter operations by target subscription. This flag is ignored if `--filter` is set",
              args: {
                name: "SUBSCRIPTION",
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
      name: "lite-reservations",
      description: "Manage Pub/Sub Lite reservations",
      subcommands: [
        {
          name: "create",
          description: "Create a Pub/Sub Lite reservation",
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
            flag6692,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--throughput-capacity",
              description:
                "Reservation throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of\npublished messages or 2 MiB/s of subscribed messages",
              args: {
                name: "THROUGHPUT_CAPACITY",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "RESERVATION", description: "Reservation ID" },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub Lite reservation",
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
            flag6687,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation.\n+\nTo set the `reservation` attribute:\n* provide the argument `reservation` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite reservation",
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
            flag6687,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation.\n+\nTo set the `reservation` attribute:\n* provide the argument `reservation` on the command line",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite reservations",
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
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-topics",
          description: "List Pub/Sub Lite topics for a given Lite reservation",
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
            flag6687,
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
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation.\n+\nTo set the `reservation` attribute:\n* provide the argument `reservation` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Pub/Sub Lite reservation",
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
            flag6687,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--throughput-capacity",
              description:
                "Reservation throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of\npublished messages or 2 MiB/s of subscribed messages",
              args: {
                name: "THROUGHPUT_CAPACITY",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESERVATION",
            description:
              "ID of the reservation or fully qualified identifier for the reservation.\n+\nTo set the `reservation` attribute:\n* provide the argument `reservation` on the command line",
          },
        },
      ],
    },
    {
      name: "lite-subscriptions",
      description: "Manage Pub/Sub Lite subscriptions",
      subcommands: [
        {
          name: "ack-up-to",
          description: "Acknowledge messages on a Pub/Sub Lite subscription",
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
            flag6689,
            flag7356,
            {
              name: "--offset",
              description:
                "The offset of a message within a topic partition. Must be greater than or equal to 0",
              args: { name: "OFFSET", description: "Int", suggestions: [] },
            },
            {
              name: "--partition",
              description:
                "The topic partition. Partitions are zero indexed, so the partition must be in the range\n[0, topic.num_partitions). If you do not know your topic.num_partitions, run `gcloud pubsub\nlite-topic describe TOPIC --location=ZONE`",
              args: { name: "PARTITION", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Pub/Sub Lite subscription",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-requirement",
              description:
                "When this subscription should send messages to subscribers relative to\nmessages persistence in storage.\nSee https://cloud.google.com/pubsub/lite/docs/subscriptions#creating_lite_subscriptions\nfor more info. _DELIVERY_REQUIREMENT_ must be one of: *deliver-after-stored*, *deliver-immediately*",
              args: {
                name: "DELIVERY_REQUIREMENT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["deliver-after-stored", "deliver-immediately"],
              },
            },
            flag4574,
            flag4674,
            {
              name: "--export-desired-state",
              description:
                "The desired state of the export. Process messages by setting the value to ACTIVE or pause\nmessage processing by setting the value to PAUSED. _EXPORT_DESIRED_STATE_ must be one of: *active*, *paused*",
              args: {
                name: "EXPORT_DESIRED_STATE",
                description:
                  "Googlecloudsdk.command_lib.util.hooks.types:LowerCaseType",
                suggestions: ["active", "paused"],
              },
            },
            {
              name: "--export-pubsub-topic",
              description:
                "The name of the destination Pub/Sub topic to which messages are exported. Must be the topic's\nfully specified path if it is not in the same project as the subscription to be created",
              args: {
                name: "EXPORT_PUBSUB_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6713,
            flag7356,
            flag11637,
            flag11867,
            flag11946,
            {
              name: "--starting-offset",
              description:
                "The offset at which a newly created or seeked subscription starts receiving messages. A\nsubscription can be initialized at the offset of the oldest retained message (`beginning`), or\nat the current HEAD offset (`end`). _STARTING_OFFSET_ must be one of: *beginning*, *end*",
              args: {
                name: "STARTING_OFFSET",
                description:
                  "Googlecloudsdk.command_lib.util.hooks.types:LowerCaseType",
                suggestions: ["beginning", "end"],
              },
            },
            {
              name: "--topic",
              description: "Topic ID associated with the subscription",
              args: { name: "TOPIC", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "SUBSCRIPTION", description: "Subscription ID" },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub Lite subscription",
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
            flag6689,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite subscription",
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
            flag6689,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite subscriptions",
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
            flag6713,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "seek",
          description: "Seek a Pub/Sub Lite subscription",
          options: [
            flag42,
            flag46,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            flag1201,
            flag2292,
            flag4574,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6688,
            flag7356,
            flag11637,
            flag11867,
            flag11946,
            {
              name: "--starting-offset",
              description:
                "The offset at which a newly created or seeked subscription starts receiving messages. A\nsubscription can be initialized at the offset of the oldest retained message (`beginning`), or\nat the current HEAD offset (`end`). _STARTING_OFFSET_ must be one of: *beginning*, *end*",
              args: {
                name: "STARTING_OFFSET",
                description:
                  "Googlecloudsdk.command_lib.util.hooks.types:LowerCaseType",
                suggestions: ["beginning", "end"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "subscribe",
          description: "Stream messages from a Pub/Sub Lite subscription",
          options: [
            flag42,
            flag46,
            {
              name: "--auto-ack",
              description:
                "Automatically ACK every message received on this subscription",
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6688,
            flag7356,
            {
              name: "--num-messages",
              description:
                "The number of messages to stream before exiting. This value must\n        be less than or equal to 1000",
              args: {
                name: "NUM_MESSAGES",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--partitions",
              description:
                "The partitions this subscriber should connect to to receive\n        messages. If empty, partitions will be automatically assigned",
              args: { name: "INT", description: "List", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Pub/Sub Lite subscription",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delivery-requirement",
              description:
                "When this subscription should send messages to subscribers relative to\nmessages persistence in storage.\nSee https://cloud.google.com/pubsub/lite/docs/subscriptions#creating_lite_subscriptions\nfor more info. _DELIVERY_REQUIREMENT_ must be one of: *deliver-after-stored*, *deliver-immediately*",
              args: {
                name: "DELIVERY_REQUIREMENT",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["deliver-after-stored", "deliver-immediately"],
              },
            },
            flag4674,
            {
              name: "--export-desired-state",
              description:
                "The desired state of the export. Process messages by setting the value to ACTIVE or pause\nmessage processing by setting the value to PAUSED. _EXPORT_DESIRED_STATE_ must be one of: *active*, *paused*",
              args: {
                name: "EXPORT_DESIRED_STATE",
                description:
                  "Googlecloudsdk.command_lib.util.hooks.types:LowerCaseType",
                suggestions: ["active", "paused"],
              },
            },
            {
              name: "--export-pubsub-topic",
              description:
                "The name of the destination Pub/Sub topic to which messages are exported. Must be the topic's\nfully specified path if it is not in the same project as the subscription to be created",
              args: {
                name: "EXPORT_PUBSUB_TOPIC",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6689,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
      ],
    },
    {
      name: "lite-topics",
      description: "Manage Pub/Sub Lite topics",
      subcommands: [
        {
          name: "create",
          description: "Create a Pub/Sub Lite topic",
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
            flag6713,
            flag7356,
            flag7790,
            {
              name: "--partitions",
              description: "Number of partitions in the topic",
              args: { name: "PARTITIONS", description: "Int", suggestions: [] },
            },
            {
              name: "--per-partition-bytes",
              description:
                "Provisioned storage, in bytes, per partition. If the number of bytes\nstored in any of the topic's partitions exceeds this value, older\nmessages will be dropped to make room for newer ones, regardless of the\nvalue of `message-retention-period`.\nA valid example value of this flag would be `per-partition-bytes=30GiB`",
              args: {
                name: "PER_PARTITION_BYTES",
                description:
                  "Googlecloudsdk.core.util.scaled_integer:ParseInteger",
                suggestions: [],
              },
            },
            flag11244,
            flag11245,
            flag11637,
            flag11946,
            flag14870,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "TOPIC", description: "Topic ID" },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub Lite topic",
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
            flag6691,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Pub/Sub Lite topic",
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
            flag6691,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub Lite topics",
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
            flag6713,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-subscriptions",
          description: "List Pub/Sub Lite subscriptions for a given Lite topic",
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
            flag6691,
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "publish",
          description: "Publish Pub/Sub Lite messages",
          options: [
            flag42,
            flag46,
            {
              name: "--attributes",
              description:
                'Comma-separated list of attributes. Each ATTRIBUTE has the form\n          name="value". You can specify up to 100 attributes',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag1201,
            flag2292,
            {
              name: "--event-time",
              description:
                "A user-specified event time. Run `gcloud topic datetimes` for\n          information on time formats",
              args: {
                name: "DATETIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "ID of the location of the Pub/Sub Lite resource.\n+\n\nTo set the `location` attribute:\n* provide the argument `topic` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--message",
              description:
                "The body of the message to publish to the given topic name",
              args: { name: "MESSAGE", description: "String", suggestions: [] },
            },
            {
              name: "--ordering-key",
              description:
                "A string key, used for ordering delivery to subscribers. All\n          messages with the same ordering key will be assigned to the same\n          partition for ordered delivery",
              args: {
                name: "ORDERING_KEY",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Pub/Sub Lite topic",
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
            flag6691,
            flag7356,
            flag7790,
            {
              name: "--partitions",
              description: "Number of partitions in the topic",
              args: { name: "PARTITIONS", description: "Int", suggestions: [] },
            },
            {
              name: "--per-partition-bytes",
              description:
                "Provisioned storage, in bytes, per partition. If the number of bytes\nstored in any of the topic's partitions exceeds this value, older\nmessages will be dropped to make room for newer ones, regardless of the\nvalue of `message-retention-period`.\nA valid example value of this flag would be `per-partition-bytes=30GiB`",
              args: {
                name: "PER_PARTITION_BYTES",
                description:
                  "Googlecloudsdk.core.util.scaled_integer:ParseInteger",
                suggestions: [],
              },
            },
            flag11244,
            flag11245,
            flag11637,
            flag11946,
            flag14870,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
      ],
    },
    {
      name: "message-transforms",
      description: "Manage Cloud Pub/Sub message transforms",
      subcommands: [
        {
          name: "test",
          description: "Tests message transforms against a given message",
          options: [
            flag42,
            flag46,
            {
              name: "--attribute",
              description:
                'Comma-separated list of attributes to attach to the message. Each ATTRIBUTE has the form name="value". You can specify up to 100 attributes',
              args: { name: "ATTRIBUTE", description: "Dict", suggestions: [] },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--message",
              description:
                "Message body to test the message transforms against",
              args: { name: "MESSAGE", description: "String", suggestions: [] },
            },
            flag7794,
            flag11637,
            flag11946,
            {
              name: "--subscription",
              description:
                "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `--subscription` on the command line",
              args: {
                name: "SUBSCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag14954,
            flag14952,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "validate",
          description: "Validates a message transform",
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
              name: "--message-transform-file",
              description:
                "Path to YAML or JSON file containing a message transform",
              args: {
                name: "MESSAGE_TRANSFORM_FILE",
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
      ],
    },
    {
      name: "schemas",
      description: "Manage Pub/Sub schemas",
      subcommands: [
        {
          name: "commit",
          description: "Commit a Pub/Sub schema revision",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--definition",
              description: "The new definition of the schema",
              args: {
                name: "DEFINITION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--definition-file",
              description:
                "File containing the new schema definition. Use a full or relative path to a local file containing the value of definition_file",
              args: {
                name: "DEFINITION_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
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
            flag14975,
            {
              name: "--type",
              description: "The type of the schema",
              args: { name: "TYPE", description: "String", suggestions: [] },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a Pub/Sub schema",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2933,
            flag2929,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15080,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Pub/Sub schema",
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
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "delete-revision",
          description: "Delete a Pub/Sub schema revision",
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
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "describe",
          description: "Show details of a Pub/Sub schema",
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
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "list",
          description: "List Pub/Sub schemas",
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
            flag15452,
          ],
        },
        {
          name: "list-revisions",
          description: "List revisions of a Pub/Sub schema",
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
            flag15452,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "rollback",
          description: "Roll back a Pub/Sub schema to a specified revision",
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
              name: "--revision-id",
              description: "The revision to roll back to",
              args: {
                name: "REVISION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SCHEMA",
            description:
              "ID of the schema or fully qualified identifier for the schema.\n+\nTo set the `schema` attribute:\n* provide the argument `schema` on the command line",
          },
        },
        {
          name: "validate-message",
          description: "Validate a message against a Pub/Sub schema",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2933,
            flag2929,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--message",
              description: "The message to validate against the schema",
              args: {
                name: "MESSAGE",
                description: "Googlecloudsdk.core.util.http_encoding:Encode",
                suggestions: [],
              },
            },
            {
              name: "--message-encoding",
              description:
                "The encoding of the message. _MESSAGE_ENCODING_ must be one of: *binary*, *json*",
              args: {
                name: "MESSAGE_ENCODING",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["binary", "json"],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--schema-name",
              description: "Name or full path of an existing schema",
              args: {
                name: "SCHEMA_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--type",
              description:
                "Type of inline schema. _TYPE_ must be one of: *avro*, *protocol-buffer*",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["avro", "protocol-buffer"],
              },
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "validate-schema",
          description: "Validate a Pub/Sub schema",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2933,
            flag2929,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15080,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "snapshots",
      description: "Manage Cloud Pub/Sub snapshots",
      subcommands: [
        {
          name: "create",
          description: "Creates one or more Cloud Pub/Sub snapshots",
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
            flag6413,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--subscription",
              description:
                "The subscription whose backlog the snapshot retains.  Specifically, the created snapshot is guaranteed to retain a) The existing backlog on the subscription, i.e., the set of messages in the subscription that are unacknowledged upon the successful completion of the create snapshot request, b) Any messages published to the subscription's topic following the successful creation of the snapshot",
              args: {
                name: "SUBSCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--subscription-project",
              description:
                "The name of the project the provided subscription belongs to. If not set, it defaults to the currently selected cloud project",
              args: {
                name: "SUBSCRIPTION_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag14644,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SNAPSHOT",
            description: "One or more snapshot names to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes one or more Cloud Pub/Sub snapshots",
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
            name: "SNAPSHOT",
            description: "One or more snapshot names to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Pub/Sub snapshot",
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
          args: { name: "SNAPSHOT", description: "snapshot to describe" },
        },
        {
          name: "list",
          description: "Lists all the snapshots in a given project",
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
      name: "subscriptions",
      description: "Manage Cloud Pub/Sub subscriptions",
      subcommands: [
        {
          name: "ack",
          description:
            "Acknowledges one or more messages on the specified subscription",
          options: [
            flag42,
            flag46,
            {
              name: "--ack-ids",
              description:
                "One or more ACK_IDs to acknowledge. An ACK_ID is a [string that is returned to subscribers](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.ReceivedMessage). along with the message. The ACK_ID is different from the [message ID](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage)",
              args: { name: "ACK_ID", description: "List", suggestions: [] },
            },
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a subscription",
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
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "create",
          description: "Creates one or more Cloud Pub/Sub subscriptions",
          options: [
            flag42,
            flag46,
            flag55,
            flag1147,
            flag1149,
            flag1201,
            flag2008,
            flag2009,
            flag2010,
            flag2011,
            flag2017,
            flag2018,
            flag2019,
            flag2020,
            flag2021,
            flag2022,
            flag2023,
            flag2292,
            flag2885,
            flag2884,
            flag3927,
            flag4119,
            {
              name: "--enable-message-ordering",
              description:
                "Whether to receive messages with the same ordering key in order.\n            If set, messages with the same ordering key are sent to subscribers\n            in the order that Pub/Sub receives them. Use --no-enable-message-ordering to disable this flag",
            },
            flag4656,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            flag7628,
            flag7681,
            {
              name: "--message-filter",
              description:
                "Expression to filter messages. If set, Pub/Sub only delivers the\n        messages that match the filter. The expression must be a non-empty\n        string in the [Pub/Sub filtering\n        language](https://cloud.google.com/pubsub/docs/filtering)",
              args: {
                name: "MESSAGE_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--message-retention-duration",
              description:
                'How long to retain unacknowledged messages in the\nsubscription\'s backlog, from the moment a message is\npublished. If --retain-acked-messages is true, this also\nconfigures the retention of acknowledged messages. The default value is 7 days, the minimum is 10 minutes, and the maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MESSAGE_RETENTION_DURATION",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag7794,
            flag7910,
            flag11637,
            flag11890,
            flag11891,
            flag11892,
            flag11895,
            flag11894,
            flag11946,
            flag13078,
            flag14644,
            flag14954,
            flag14952,
            flag14975,
            flag15301,
            flag15302,
            flag15315,
            flag15424,
            flag15665,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "IDs of the subscriptions or fully qualified identifiers for the subscriptions.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes one or more Cloud Pub/Sub subscriptions",
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
            name: "SUBSCRIPTION",
            description:
              "IDs of the subscriptions or fully qualified identifiers for the subscriptions.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Pub/Sub subscription",
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Pub/Sub Subscription",
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Pub/Sub subscriptions",
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
          name: "modify-message-ack-deadline",
          description:
            "Modifies the ACK deadline for a specific Cloud Pub/Sub message",
          options: [
            flag42,
            flag46,
            {
              name: "--ack-deadline",
              description:
                "The number of seconds the system will wait for a subscriber to acknowledge receiving a message before re-attempting delivery",
              args: {
                name: "ACK_DEADLINE",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--ack-ids",
              description:
                "One or more ACK_IDs to modify the deadline for. An ACK_ID is a [string that is returned to subscribers](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.ReceivedMessage). along with the message. The ACK_ID is different from the [message ID](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage)",
              args: { name: "ACK_ID", description: "List", suggestions: [] },
            },
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
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "modify-push-config",
          description:
            "Modifies the push configuration of a Cloud Pub/Sub subscription",
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
            flag11890,
            flag11891,
            {
              name: "--push-endpoint",
              description:
                "A URL to use as the endpoint for this subscription. This will also automatically set the subscription type to PUSH",
              args: {
                name: "PUSH_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            flag11895,
            flag11894,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "pull",
          description:
            "Pulls one or more Cloud Pub/Sub messages from a subscription",
          options: [
            flag42,
            flag46,
            {
              name: "--auto-ack",
              description:
                "Automatically ACK every message pulled from this subscription. Use --no-auto-ack to disable this flag",
            },
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
                "Maximum number of resources to list. The default is *1*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: { name: "LIMIT", description: "Int", suggestions: [] },
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
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a subscription",
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
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "seek",
          description:
            "Resets a subscription's backlog to a point in time or to a given snapshot",
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
              name: "--snapshot",
              description:
                "The name of the snapshot. The snapshot's topic must be the same as that of the subscription",
              args: {
                name: "SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--snapshot-project",
              description:
                "The name of the project the snapshot belongs to (if seeking to\na snapshot). If not set, it defaults to the currently selected\ncloud project",
              args: {
                name: "SNAPSHOT_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--time",
              description:
                "The time to seek to. Messages in the subscription that\nwere published before this time are marked as acknowledged, and\nmessages retained in the subscription that were published after\nthis time are marked as unacknowledged.\nSee $ gcloud topic datetimes for information on time formats",
              args: {
                name: "TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a subscription",
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
          args: [
            {
              name: "SUBSCRIPTION",
              description:
                "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
            },
          ],
        },
        {
          name: "update",
          description: "Updates an existing Cloud Pub/Sub subscription",
          options: [
            flag42,
            flag46,
            flag55,
            flag1147,
            flag1149,
            flag1201,
            {
              name: "--clear-bigquery-config",
              description:
                "If set, clear the BigQuery config from the subscription. Use --no-clear-bigquery-config to disable this flag",
            },
            {
              name: "--clear-cloud-storage-config",
              description:
                "If set, clear the Cloud Storage config from the subscription. Use --no-clear-cloud-storage-config to disable this flag",
            },
            {
              name: "--clear-dead-letter-policy",
              description:
                "If set, clear the dead letter policy from the subscription. Use --no-clear-dead-letter-policy to disable this flag",
            },
            flag1723,
            flag1773,
            {
              name: "--clear-push-no-wrapper-config",
              description:
                "If set, clear the NoWrapper config from the subscription. Use --no-clear-push-no-wrapper-config to disable this flag",
            },
            {
              name: "--clear-retry-policy",
              description:
                "If set, clear the retry policy from the subscription. Use --no-clear-retry-policy to disable this flag",
            },
            flag2008,
            flag2009,
            flag2010,
            flag2011,
            flag2017,
            flag2018,
            flag2019,
            flag2020,
            flag2021,
            flag2022,
            flag2023,
            flag2292,
            flag2885,
            flag2884,
            flag3927,
            flag4119,
            flag4656,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7628,
            flag7681,
            {
              name: "--message-retention-duration",
              description:
                'How long to retain unacknowledged messages in the\nsubscription\'s backlog, from the moment a message is\npublished. If --retain-acked-messages is true, this also\nconfigures the retention of acknowledged messages. Specify "default" to use the default value of 7 days. The minimum is 10 minutes, and the maximum is 31 days. Valid values are strings of the form INTEGER[UNIT], where UNIT is one of "s", "m", "h", and "d" for seconds, minutes, hours, and days, respectively. If the unit is omitted, seconds is assumed',
              args: {
                name: "MESSAGE_RETENTION_DURATION",
                description:
                  "Googlecloudsdk.command_lib.pubsub.flags:ParseSubscriptionRetentionDurationWithDefault",
                suggestions: [],
              },
            },
            flag7794,
            flag7910,
            flag11637,
            flag11890,
            flag11891,
            flag11892,
            flag11895,
            flag11894,
            flag11946,
            flag12637,
            flag13078,
            flag14975,
            flag15167,
            flag15301,
            flag15302,
            flag15315,
            flag15424,
            flag15665,
          ],
          args: {
            name: "SUBSCRIPTION",
            description:
              "ID of the subscription or fully qualified identifier for the subscription.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
          },
        },
      ],
    },
    {
      name: "topics",
      description: "Manage Cloud Pub/Sub topics",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a topic",
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
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "create",
          description: "Creates one or more Cloud Pub/Sub topics",
          options: [
            flag42,
            flag46,
            flag963,
            flag964,
            flag965,
            flag966,
            flag987,
            flag988,
            flag989,
            flag990,
            flag991,
            flag992,
            flag993,
            flag1201,
            flag2012,
            flag2013,
            flag2014,
            flag2015,
            flag2016,
            flag2292,
            flag2294,
            flag2295,
            flag2296,
            flag2297,
            flag2298,
            flag4894,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5777,
            flag6290,
            flag6291,
            flag6292,
            flag6293,
            flag6413,
            flag6470,
            flag7356,
            flag7783,
            flag7789,
            flag7791,
            flag7792,
            flag7794,
            flag11637,
            flag11946,
            flag13330,
            flag13328,
            flag14644,
            flag14950,
            flag14947,
            flag14948,
            flag14949,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "IDs of the topics or fully qualified identifiers for the topics.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes one or more Cloud Pub/Sub topics",
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
            name: "TOPIC",
            description:
              "IDs of the topics or fully qualified identifiers for the topics.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Pub/Sub topic",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "detach-subscription",
          description: "Detaches one or more Cloud Pub/Sub subscriptions",
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
            name: "SUBSCRIPTION",
            description:
              "IDs of the subscriptions or fully qualified identifiers for the subscriptions.\n+\nTo set the `subscription` attribute:\n* provide the argument `subscription` on the command line",
            isVariadic: true,
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Pub/Sub Topic",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Pub/Sub topics within a project",
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
          name: "list-subscriptions",
          description: "Lists Cloud Pub/Sub subscriptions from a given topic",
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
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "publish",
          description: "Publishes a message to the specified topic",
          options: [
            flag42,
            flag46,
            {
              name: "--attribute",
              description:
                'Comma-separated list of attributes. Each ATTRIBUTE has the form name="value". You can specify up to 100 attributes',
              args: { name: "ATTRIBUTE", description: "Dict", suggestions: [] },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--message",
              description:
                "The body of the message to publish to the given topic name.\nInformation on message formatting and size limits can be found at:\nhttps://cloud.google.com/pubsub/docs/publisher#publish",
              args: { name: "MESSAGE", description: "String", suggestions: [] },
            },
            {
              name: "--ordering-key",
              description:
                "The key for ordering delivery to subscribers. All messages with\n          the same ordering key are sent to subscribers in the order that\n          Pub/Sub receives them",
              args: {
                name: "ORDERING_KEY",
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
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding of a topic",
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
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a topic",
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
          args: [
            {
              name: "TOPIC",
              description:
                "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
            },
          ],
        },
        {
          name: "update",
          description: "Updates an existing Cloud Pub/Sub topic",
          options: [
            flag42,
            flag46,
            flag963,
            flag964,
            flag965,
            flag966,
            flag987,
            flag988,
            flag989,
            flag990,
            flag991,
            flag992,
            flag993,
            flag1201,
            {
              name: "--clear-ingestion-data-source-settings",
              description:
                "If set, clear the Ingestion Data Source Settings from the topic. Use --no-clear-ingestion-data-source-settings to disable this flag",
            },
            flag1723,
            {
              name: "--clear-message-retention-duration",
              description:
                "If set, clear the message retention duration from the topic. Use --no-clear-message-retention-duration to disable this flag",
            },
            flag1773,
            {
              name: "--clear-schema-settings",
              description:
                "If set, clear the Schema Settings from the topic. Use --no-clear-schema-settings to disable this flag",
            },
            flag2012,
            flag2013,
            flag2014,
            flag2015,
            flag2016,
            flag2292,
            flag2294,
            flag2295,
            flag2296,
            flag2297,
            flag2298,
            flag4894,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5777,
            flag6290,
            flag6291,
            flag6292,
            flag6293,
            flag6470,
            flag7356,
            flag7783,
            flag7789,
            flag7791,
            flag7792,
            flag7794,
            flag11637,
            flag11946,
            {
              name: "--recompute-message-storage-policy",
              description:
                'If given, Pub/Sub recomputes the regions where messages can be stored at rest, based on your organization\'s "Resource  Location Restriction" policy',
            },
            flag12637,
            flag13330,
            flag13328,
            flag14950,
            flag14947,
            flag14948,
            flag14949,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TOPIC",
            description:
              "ID of the topic or fully qualified identifier for the topic.\n+\nTo set the `topic` attribute:\n* provide the argument `topic` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
