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
const flag1080: Fig.Option = {
  name: "--bandwidth-limit",
  description:
    "Set how much of your bandwidth to make available to this pool's agents. A bandwidth limit applies to all agents in a pool and can help prevent the pool's transfer workload from disrupting other operations that share your bandwidth. For example, enter '50' to set a bandwidth limit of 50 MB/s. By leaving this flag unspecified, this flag unspecified, this pool's agents will use all bandwidth available to them",
  args: {
    name: "BANDWIDTH_LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
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
const flag2656: Fig.Option = {
  name: "--custom-storage-class",
  description:
    "Specifies the storage class to set on objects being transferred to Cloud Storage buckets. If unspecified, the objects' storage class is set to the destination bucket default. Valid values are:\n+\n - Any of the values listed in the Cloud Storage documentation:   [Available storage classes](https://cloud.google.com/storage/docs/storage-classes#classes).\n - `preserve` - Preserves each object's original storage class. Only   supported for transfers between Cloud Storage buckets.\n+\nCustom storage class settings are ignored if the destination bucket is [Autoclass-enabled](https://cloud.google.com/storage/docs/autoclass). Objects transferred into Autoclass-enabled buckets are initially set to the `STANDARD` storage class",
  args: {
    name: "CUSTOM_STORAGE_CLASS",
    description: "String",
    suggestions: [],
  },
};
const flag2941: Fig.Option = {
  name: "--delete-from",
  description:
    "By default, transfer jobs won't delete any data from your source or destination. These options enable you to delete data if needed for your use case. Options include:\n - 'destination-if-unique' - Delete files from destination if they're not also at source. Use to sync destination to source (i.e., make destination match source exactly)\n - 'source-after-transfer' - Delete files from source after they're transferred\n+\n_DELETE_FROM_ must be one of: *destination-if-unique*, *source-after-transfer*",
  args: {
    name: "DELETE_FROM",
    description: "String",
    suggestions: ["destination-if-unique", "source-after-transfer"],
  },
};
const flag3118: Fig.Option = {
  name: "--description",
  description:
    "An optional description to help identify the job using details that don't fit in its name",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3368: Fig.Option = {
  name: "--destination-agent-pool",
  description:
    "If using a POSIX filesystem destination, specify the ID of the agent pool associated with destination filesystem",
  args: {
    name: "DESTINATION_AGENT_POOL",
    description: "String",
    suggestions: [],
  },
};
const flag3695: Fig.Option = {
  name: "--display-name",
  description:
    "A modifiable name to help you identify this pool. You can include details that might not fit in the pool's unique full resource name",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4252: Fig.Option = {
  name: "--enable-posix-transfer-logs",
  description:
    "Sets whether to generate logs for transfers with a POSIX filesystem source. This setting will later be merged with other log configurations. Use *--enable-posix-transfer-logs* to enable and *--no-enable-posix-transfer-logs* to disable",
};
const flag4570: Fig.Option = {
  name: "--event-stream-expires",
  description:
    "Set when to stop listening for events UTC using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will continue running and listening for events indefinitely",
  args: {
    name: "EVENT_STREAM_EXPIRES",
    description: "String",
    suggestions: [],
  },
};
const flag4571: Fig.Option = {
  name: "--event-stream-name",
  description:
    'Specify an event stream that Storage Transfer Service can use to listen for when objects are created or updated. For Google Cloud Storage sources, specify a Cloud Pub/Sub subscription, using format "projects/yourproject/subscriptions/yoursubscription". For Amazon S3 sources, specify the Amazon Resource Name (ARN) of an Amazon Simple Queue Service (SQS) queue using format "arn:aws:sqs:region:account_id:queue_name"',
  args: { name: "EVENT_STREAM_NAME", description: "String", suggestions: [] },
};
const flag4572: Fig.Option = {
  name: "--event-stream-starts",
  description:
    "Set when to start listening for events UTC using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will start running and listening for events upon the successful submission of the create job command",
  args: { name: "EVENT_STREAM_STARTS", description: "String", suggestions: [] },
};
const flag4601: Fig.Option = {
  name: "--exclude-prefixes",
  description:
    "Exclude any objects that start with the prefix(es) entered. Separate multiple prefixes with commas, omitting spaces after the commas (e.g., --exclude-prefixes=foo,bar)",
  args: { name: "EXCLUDED_PREFIXES", description: "List", suggestions: [] },
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
const flag5751: Fig.Option = {
  name: "--include-modified-after-absolute",
  description:
    "Include objects last modified after an absolute date/time. Ex. by specifying '2020-01-01', the transfer would include objects last modified after January 1, 2020. Use the %Y-%m-%dT%H:%M:%S%z datetime format",
  args: {
    name: "INCLUDE_MODIFIED_AFTER_ABSOLUTE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag5752: Fig.Option = {
  name: "--include-modified-after-relative",
  description:
    "Include objects that were modified after a relative date/time in the past. Ex. by specifying a duration of '10d', the transfer would include objects last modified *less than* 10 days before its start time. Use the absolute duration format (ex. 1m for 1 month; 1h30m for 1 hour 30 minutes)",
  args: {
    name: "INCLUDE_MODIFIED_AFTER_RELATIVE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag5753: Fig.Option = {
  name: "--include-modified-before-absolute",
  description:
    "Include objects last modified before an absolute date/time. Ex. by specifying '2020-01-01', the transfer would include objects last modified before January 1, 2020. Use the %Y-%m-%dT%H:%M:%S%z datetime format",
  args: {
    name: "INCLUDE_MODIFIED_BEFORE_ABSOLUTE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag5754: Fig.Option = {
  name: "--include-modified-before-relative",
  description:
    "Include objects that were modified before a relative date/time in the past. Ex. by specifying a duration of '10d', the transfer would include objects last modified *more than* 10 days before its start time. Use the absolute duration format (ex. 1m for 1 month; 1h30m for 1 hour 30 minutes)",
  args: {
    name: "INCLUDE_MODIFIED_BEFORE_RELATIVE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag5756: Fig.Option = {
  name: "--include-prefixes",
  description:
    "Include only objects that start with the specified prefix(es). Separate multiple prefixes with commas, omitting spaces after the commas (e.g., --include-prefixes=foo,bar)",
  args: { name: "INCLUDED_PREFIXES", description: "List", suggestions: [] },
};
const flag5981: Fig.Option = {
  name: "--intermediate-storage-path",
  description:
    "If transferring between filesystems, specify the path to a folder in a Google Cloud Storage bucket (gs://example-bucket/example-folder) to use as intermediary storage. Recommended: Use an empty folder reserved for this transfer job to ensure transferred data doesn't interact with any of your existing Cloud Storage data",
  args: {
    name: "INTERMEDIATE_STORAGE_PATH",
    description: "String",
    suggestions: [],
  },
};
const flag6522: Fig.Option = {
  name: "--limit",
  description: "Return the first items from the API up to this limit",
  args: {
    name: "LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag7335: Fig.Option = {
  name: "--log-action-states",
  description:
    "The states in which the actions specified in --log-actions are logged. Separate multiple states with a comma, omitting the space after the comma (e.g., --log-action-states=succeeded,failed). _LOG_ACTION_STATES_ must be one of: *failed*, *skipped*, *succeeded*",
  args: { name: "LOG_ACTION_STATES", description: "List", suggestions: [] },
};
const flag7338: Fig.Option = {
  name: "--log-actions",
  description:
    "Define the transfer operation actions to report in logs. Separate multiple actions with commas, omitting spaces after the commas (e.g., --log-actions=find,copy). _LOG_ACTIONS_ must be one of: *copy*, *delete*, *find*",
  args: { name: "LOG_ACTIONS", description: "List", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7548: Fig.Option = {
  name: "--manifest-file",
  description:
    "Path to a .csv file containing a list of files to transfer from your source. For manifest files in Cloud Storage, specify the absolute path (e.g., `gs://mybucket/manifest.csv`). For manifest files stored in a source or destination POSIX file system, provide the relative path (e.g., `source://path/to/manfest.csv` or `destination://path/to/manifest.csv`). For manifest file formatting, see https://cloud.google.com/storage-transfer/docs/manifest",
  args: { name: "MANIFEST_FILE", description: "String", suggestions: [] },
};
const flag10578: Fig.Option = {
  name: "--notification-event-types",
  description:
    "Define which change of transfer operation status will trigger Pub/Sub notifications. Choices include 'success', 'failed', 'aborted'. To trigger notifications for all three status changes, you can leave this flag unspecified as long as you've specified a topic for the --notification-pubsub-topic flag. _EVENT_TYPES_ must be one of: *success*, *failed*, *aborted*",
  args: { name: "EVENT_TYPES", description: "List", suggestions: [] },
};
const flag10579: Fig.Option = {
  name: "--notification-payload-format",
  description:
    "If 'none', no transfer operation details are included with notifications. If 'json', a json representation of the relevant transfer operation is included in notification messages (e.g., to see errors after an operation fails). _NOTIFICATION_PAYLOAD_FORMAT_ must be one of: *json*, *none*",
  args: {
    name: "NOTIFICATION_PAYLOAD_FORMAT",
    description: "String",
    suggestions: ["json", "none"],
  },
};
const flag10581: Fig.Option = {
  name: "--notification-pubsub-topic",
  description: "Pub/Sub topic used for notifications",
  args: {
    name: "NOTIFICATION_PUBSUB_TOPIC",
    description: "String",
    suggestions: [],
  },
};
const flag11027: Fig.Option = {
  name: "--overwrite-when",
  description:
    "Determine when destination objects are overwritten by source objects. Options include:\n - 'different' - Overwrites files with the same name if the contents are different (e.g., if etags or checksums don't match)\n - 'always' - Overwrite destination file whenever source file has the same name -- even if they're identical\n - 'never' - Never overwrite destination file when source file has the same name\n+\n_OVERWRITE_WHEN_ must be one of: *always*, *different*, *never*",
  args: {
    name: "OVERWRITE_WHEN",
    description: "String",
    suggestions: ["always", "different", "never"],
  },
};
const flag11061: Fig.Option = {
  name: "--page-size",
  description: "Retrieve batches of this many items from the API",
  args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
};
const flag11518: Fig.Option = {
  name: "--preserve-metadata",
  description:
    "Specify object metadata values that can optionally be preserved. Example: --preserve-metadata=storage-class,uid\n+\nFor more info, see: https://cloud.google.com/storage-transfer/docs/metadata-preservation.\n+\n_METADATA_FIELDS_ must be one of: *acl*, *gid*, *kms-key*, *mode*, *storage-class*, *symlink*, *temporary-hold*, *time-created*, *uid*",
  args: { name: "METADATA_FIELDS", description: "List", suggestions: [] },
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
const flag13244: Fig.Option = {
  name: "--s3-cloudfront-domain",
  description:
    "For transfers from S3, optionally route egress traffic through a CloudFront instance. Supply the endpoint of the CloudFront instance: https://example.cloudfront.net. See documentation (https://cloud.google.com/storage-transfer/docs/s3-cloudfront) for more information",
  args: {
    name: "S3_CLOUDFRONT_DOMAIN",
    description: "String",
    suggestions: [],
  },
};
const flag13297: Fig.Option = {
  name: "--schedule-repeats-every",
  description:
    "Set the frequency of the job using the absolute duration format (e.g., 1 month is p1m; 1 hour 30 minutes is 1h30m). If not set, the job will run once",
  args: {
    name: "SCHEDULE_REPEATS_EVERY",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag13298: Fig.Option = {
  name: "--schedule-repeats-until",
  description:
    "Set when the job will stop recurring using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If specified, you must also include a value for the --schedule-repeats-every flag. If not specified, the job will continue to repeat as specified in its repeat-every field unless the job is manually disabled or you add this field later",
  args: {
    name: "SCHEDULE_REPEATS_UNTIL",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13303: Fig.Option = {
  name: "--schedule-starts",
  description:
    "Set when the job will start using the %Y-%m-%dT%H:%M:%S%z datetime format (e.g., 2020-04-12T06:42:12+04:00). If not set, the job will run upon the successful submission of the create job command unless the --do-not-run flag is included",
  args: {
    name: "SCHEDULE_STARTS",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13954: Fig.Option = {
  name: "--source-agent-pool",
  description:
    "If using a POSIX filesystem source, specify the ID of the agent pool associated with source filesystem",
  args: { name: "SOURCE_AGENT_POOL", description: "String", suggestions: [] },
};
const flag13957: Fig.Option = {
  name: "--source-auth-method",
  description:
    "For transfers from S3-compatible sources, choose a process for adding authentication information to S3 API requests. Refer to AWS's SigV4 (https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) and SigV2 (https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) documentation for more information. _SOURCE_AUTH_METHOD_ must be one of: *AWS_SIGNATURE_V2*, *AWS_SIGNATURE_V4*",
  args: {
    name: "SOURCE_AUTH_METHOD",
    description: "String",
    suggestions: ["AWS_SIGNATURE_V2", "AWS_SIGNATURE_V4"],
  },
};
const flag13979: Fig.Option = {
  name: "--source-creds-file",
  description:
    'Path to a local file on your machine that includes credentials for an Amazon S3 or Azure Blob Storage source (not required for Google Cloud Storage sources). If not specified for an S3 source, gcloud will check your system for an AWS config file. However, this flag must be specified to use AWS\'s "role_arn" auth service. For formatting, see:\n+\nS3: https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#AwsAccessKey\nNote: Be sure to put quotations around the JSON value strings.\n+\nAzure: https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#AzureCredentials',
  args: { name: "SOURCE_CREDS_FILE", description: "String", suggestions: [] },
};
const flag14003: Fig.Option = {
  name: "--source-endpoint",
  description:
    "For transfers from S3-compatible sources, specify your storage system's endpoint. Check with your provider for formatting (ex. s3.us-east-1.amazonaws.com for Amazon S3)",
  args: { name: "SOURCE_ENDPOINT", description: "String", suggestions: [] },
};
const flag14051: Fig.Option = {
  name: "--source-list-api",
  description:
    "For transfers from S3-compatible sources, choose the version of the S3 listing API for returning objects from the bucket. Refer to AWS's ListObjectsV2 (https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html) and ListObjects (https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html) documentation for more information. _SOURCE_LIST_API_ must be one of: *LIST_OBJECTS*, *LIST_OBJECTS_V2*",
  args: {
    name: "SOURCE_LIST_API",
    description: "String",
    suggestions: ["LIST_OBJECTS", "LIST_OBJECTS_V2"],
  },
};
const flag14064: Fig.Option = {
  name: "--source-network-protocol",
  description:
    "For transfers from S3-compatible sources, choose the network protocol agents should use for this job. _SOURCE_NETWORK_PROTOCOL_ must be one of: *HTTP*, *HTTPS*",
  args: {
    name: "SOURCE_NETWORK_PROTOCOL",
    description: "String",
    suggestions: ["HTTP", "HTTPS"],
  },
};
const flag14087: Fig.Option = {
  name: "--source-request-model",
  description:
    "For transfers from S3-compatible sources, choose which addressing style to use. Determines if the bucket name is in the hostname or part of the URL. For example, https://s3.region.amazonaws.com/bucket-name/key-name for path style and Ex. https://bucket-name.s3.region.amazonaws.com/key-name for virtual-hosted style. _SOURCE_REQUEST_MODEL_ must be one of: *PATH_STYLE*, *VIRTUAL_HOSTED_STYLE*",
  args: {
    name: "SOURCE_REQUEST_MODEL",
    description: "String",
    suggestions: ["PATH_STYLE", "VIRTUAL_HOSTED_STYLE"],
  },
};
const flag14092: Fig.Option = {
  name: "--source-signing-region",
  description:
    "For transfers from S3-compatible sources, specify a region for signing requests. You can leave this unspecified if your storage provider doesn't require a signing region",
  args: {
    name: "SOURCE_SIGNING_REGION",
    description: "String",
    suggestions: [],
  },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
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
  name: "transfer",
  description: "Manage Transfer Service jobs, operations, and agents",
  subcommands: [
    {
      name: "agent-pools",
      description: "Manage on-premise transfer agent pools",
      subcommands: [
        {
          name: "create",
          description: "Create a Transfer Service agent pool",
          options: [
            flag42,
            flag46,
            flag1080,
            flag1201,
            flag2292,
            flag3695,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--no-async",
              description:
                "Block other tasks in your terminal until the pool has been created. If not included, pool creation will run asynchronously",
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description: "A unique, permanent identifier for this pool",
          },
        },
        {
          name: "delete",
          description: "Delete a Transfer Service agent pool",
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
            description: "The name of the job you want to delete",
          },
        },
        {
          name: "describe",
          description: "Get details about a specific agent pool",
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
            description: "The name of the agent pool you want to describe",
          },
        },
        {
          name: "list",
          description: "List Transfer Service transfer agent pools",
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
            flag6522,
            flag7356,
            {
              name: "--names",
              description:
                "The names of the agent pools you want to list. Separate multiple names with commas (e.g., --name=foo,bar). If not specified, all agent pools in your current project will be listed",
              args: { name: "NAMES", description: "List", suggestions: [] },
            },
            flag11061,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a Transfer Service agent pool",
          options: [
            flag42,
            flag46,
            flag1080,
            flag1201,
            {
              name: "--clear-bandwidth-limit",
              description:
                "Remove the agent pool's bandwidth limit, which enables the pool's agents to use all bandwidth available to them",
            },
            {
              name: "--clear-display-name",
              description: "Remove the display name from the agent pool",
            },
            flag2292,
            flag3695,
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
            description: "A unique, permanent identifier for this pool",
          },
        },
      ],
    },
    {
      name: "agents",
      description: "Manage Transfer Service agents",
      subcommands: [
        {
          name: "delete",
          description: "Delete Transfer Service transfer agents",
          options: [
            flag42,
            flag46,
            {
              name: "--all",
              description: "Delete all agents running on your machine",
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--ids",
              description:
                "The IDs of the agents you want to delete. Separate multiple agent IDs with commas, with no spaces following the commas",
              args: { name: "IDS", description: "List", suggestions: [] },
            },
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--uninstall",
              description:
                "Fully uninstall the agent container image in addition to deleting the agents. Uninstalling the container image will free up space, but you'll need to reinstall it to run agents on this machine in the future",
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "install",
          description: "Install Transfer Service agents",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--count",
              description:
                "Specify the number of agents to install on your current machine.\nSystem requirements: 8 GB of memory and 4 CPUs per agent.\n+\nNote: If the 'id-prefix' flag is specified, Transfer Service increments a number\nvalue after each prefix. Example: prefix1, prefix2, etc",
              args: { name: "COUNT", description: "Int", suggestions: [] },
            },
            {
              name: "--creds-file",
              description:
                "Specify the path to the service account's credentials file.\n+\nNo input required if authenticating with your user account credentials,\nwhich Transfer Service will look for in your system.\n+\nNote that the credentials location will be mounted to the agent container",
              args: {
                name: "CREDS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--docker-network",
              description:
                "Specify the network to connect the container to. This flag maps directly\nto the `--network` flag in the underlying 'docker run' command.\n+\nIf binding directly to the host's network is an option, then setting this value\nto 'host' can dramatically improve transfer performance",
              args: {
                name: "DOCKER_NETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-multipart",
              description:
                "Split up files and transfer the resulting chunks in parallel before merging them at the destination. Can be used make transfers of large files faster as long as the network and disk speed are not limiting factors. If unset, agent decides when to use the feature. Use *--enable-multipart* to enable and *--no-enable-multipart* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--hdfs-data-transfer-protection",
              description:
                "Client-side quality of protection setting for Kerberized clusters. Client-side QOP value cannot be more restrictive than the server-side QOP value. _HDFS_DATA_TRANSFER_PROTECTION_ must be one of: *authentication*, *integrity*, *privacy*",
              args: {
                name: "HDFS_DATA_TRANSFER_PROTECTION",
                description: "String",
                suggestions: ["authentication", "integrity", "privacy"],
              },
            },
            {
              name: "--hdfs-namenode-uri",
              description:
                'A URI representing an HDFS cluster including a schema, namenode, and port. Examples: "rpc://my-namenode:8020", "http://my-namenode:9870".\n+\nUse "http" or "https" for WebHDFS. If no schema is provided, the CLI assumes native "rpc". If no port is provided, the default is 8020 for RPC, 9870 for HTTP, and 9871 for HTTPS. For example, the input "my-namenode" becomes "rpc://my-namenode:8020"',
              args: {
                name: "HDFS_NAMENODE_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--hdfs-username",
              description:
                "Username for connecting to an HDFS cluster with simple auth",
              args: {
                name: "HDFS_USERNAME",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            {
              name: "--id-prefix",
              description:
                "An optional prefix to add to the agent ID to help identify the agent",
              args: {
                name: "ID_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--kerberos-config-file",
              description: "Path to Kerberos config file",
              args: {
                name: "KERBEROS_CONFIG_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kerberos-keytab-file",
              description:
                "Path to a Keytab file containing the user principal specified with the --kerberos-user-principal flag",
              args: {
                name: "KERBEROS_KEYTAB_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kerberos-service-principal",
              description:
                'Kerberos service principal to use, of the form "<primary>/<instance>". Realm is mapped from your Kerberos config. Any supplied realm is ignored. If not passed in, it will default to "hdfs/<namenode_fqdn>" (fqdn = fully qualified domain name)',
              args: {
                name: "KERBEROS_SERVICE_PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--kerberos-user-principal",
              description:
                "Kerberos user principal to use when connecting to an HDFS cluster via Kerberos auth",
              args: {
                name: "KERBEROS_USER_PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--logs-directory",
              description:
                "Specify the absolute path to the directory you want to store transfer logs in. If not specified, gcloud transfer will mount your /tmp directory for logs",
              args: {
                name: "LOGS_DIRECTORY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--memlock-limit",
              description:
                "Set the agent container's memlock limit. A value of 64000000 (default) or higher is required to ensure that agent versions 1.14 or later have enough locked memory to be able to start",
              args: {
                name: "MEMLOCK_LIMIT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--mount-directories",
              description:
                "If you want to grant agents access to specific parts of your filesystem\ninstead of the entire filesystem, specify which directory paths to\nmount to the agent container. Multiple paths must be separated by\ncommas with no spaces (e.g.,\n--mount-directories=/system/path/to/dir1,/path/to/dir2). When mounting\nspecific directories, gcloud transfer will also mount a directory for\nlogs (either /tmp or what you've specified for --logs-directory) and\nyour Google credentials file for agent authentication.\n+\nIt is strongly recommended that you use this flag. If this flag isn't specified,\ngcloud transfer will mount your entire filesystem to the agent container and\ngive the agent root access",
              args: {
                name: "MOUNT-DIRECTORIES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--pool",
              description:
                "The agent pool to associate with the newly installed agent. When creating transfer jobs, the agent pool parameter will determine which agents are activated",
              args: { name: "POOL", description: "String", suggestions: [] },
            },
            flag11637,
            {
              name: "--proxy",
              description:
                "Specify the HTTP URL and port of a proxy server if you want to use a forward\nproxy. For example, to use the URL 'example.com' and port '8080' specify\n'http://www.example.com:8080/'\n+\nEnsure that you specify the HTTP URL and not an HTTPS URL to avoid\ndouble-wrapping requests in TLS encryption. Double-wrapped requests prevent the\nproxy server from sending valid outbound requests",
              args: { name: "PROXY", description: "String", suggestions: [] },
            },
            flag11946,
            {
              name: "--s3-compatible-mode",
              description:
                'Allow the agent to work with S3-compatible sources. This flag blocks the\nagent\'s ability to work with other source types (e.g., file systems).\n+\nWhen using this flag, you must provide source credentials either as\nenvironment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` or\nas default credentials in your system\'s configuration files.\n+\nTo provide credentials as environment variables, run:\n+\n```\nAWS_ACCESS_KEY_ID="id" AWS_SECRET_ACCESS_KEY="secret" gcloud transfer agents install --s3-compatible-mode\n```',
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "authorize",
      description: "Authorize an account for all Transfer Service features",
      options: [
        flag42,
        flag46,
        {
          name: "--add-missing",
          description:
            "Add IAM roles necessary to use all Transfer Service features to the specified account. By default, this command just prints missing roles",
        },
        flag1201,
        flag2292,
        {
          name: "--creds-file",
          description:
            'The path to the creds file for an account to authorize. The file should be in JSON format and contain a "type" and "client_email", which are automatically generated for most creds files downloaded from Google (e.g. service account tokens). If this flag is not present, the command authorizes the user currently logged into gcloud',
          args: { name: "CREDS_FILE", description: "String", suggestions: [] },
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
        flag15315,
        flag15424,
      ],
    },
    {
      name: "jobs",
      description: "Manage transfer jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a Transfer Service transfer job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2656,
            flag2941,
            flag3118,
            flag3368,
            {
              name: "--do-not-run",
              description:
                "Disable default Transfer Service behavior of running job upon creation if no schedule is set. If this flag is specified, the job won't run until an operation is manually started or a schedule is added",
            },
            flag4252,
            flag4570,
            flag4571,
            flag4572,
            flag4601,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5751,
            flag5752,
            flag5753,
            flag5754,
            flag5756,
            flag5981,
            flag7335,
            flag7338,
            flag7356,
            flag7548,
            {
              name: "--name",
              description:
                "A unique identifier for the job. Referring to your source and destination is recommended. If left blank, the name is auto-generated upon submission of the job",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            {
              name: "--no-async",
              description:
                "For jobs set to run upon creation, this flag blocks other tasks in your terminal until the job's initial, immediate transfer operation has completed. If not included, tasks will run asynchronously",
            },
            flag10578,
            flag10579,
            flag10581,
            flag11027,
            flag11518,
            flag11637,
            flag11946,
            {
              name: "--replication",
              description:
                "Enable replication to automatically copy all new and existing objects from the source to the destination. Note: Objects deleted from the source bucket will not be deleted from the destination bucket. Please note that it is an event-driven transfer",
            },
            flag13244,
            flag13297,
            flag13298,
            flag13303,
            flag13954,
            flag13957,
            flag13979,
            flag14003,
            flag14051,
            flag14064,
            flag14087,
            flag14092,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SOURCE",
              description:
                "The source of your data. Available sources and formatting information:\n+\nPublic clouds -\n* [Google Cloud Storage] gs://example-bucket/example-folder/\n* [Amazon S3] s3://examplebucket/example-folder\n* [Azure Blob Storage or Data Lake Storage] http://examplestorageaccount.blob.core.windows.net/examplecontainer/examplefolder\n+\nPOSIX filesystem - Specify the `posix://` scheme followed by the absolute path to the desired directory, starting from the root of the host machine (denoted by a leading slash). For example:\n* posix:///path/directory/\n+\nA file transfer agent must be installed on the POSIX filesystem, and you need an agent pool flag on this `jobs` command to activate the agent.\n+\nHadoop Distributed File System (HDFS) - Specify the `hdfs://` scheme followed by the absolute path to the desired directory, starting from the root of the file system (denoted by a leading slash). For example:\n* hdfs:///path/directory/\n+\nNamenode details should not be included in the path specification, as they are required separately during the agent installation process.\n+\nA file transfer agent must be installed, and you need an agent pool flag on this `jobs` command to activate the agent.\n+\nPublicly-accessible objects - Specify the URL of a TSV file containing a list of URLs of publicly-accessible objects. For example:\n* http://example.com/tsvfile",
            },
            {
              name: "DESTINATION",
              description:
                "The destination of your transferred data. Available destinations and  formatting information:\n+\nGoogle Cloud Storage - Specify the `gs://` scheme; name of the bucket; and, if transferring to a folder, the path to the folder. For example:\n* gs://example-bucket/example-folder/\n+\nPOSIX filesystem - Specify the `posix://` scheme followed by the absolute path to the desired directory, starting from the root of the host machine (denoted by a leading slash). For example:\n* posix:///path/directory/\n+\nA file transfer agent must be installed on the POSIX filesystem, and you need an agent pool flag on this `jobs` command to activate the agent",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Transfer Service transfer job",
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
            description: "The name of the job you want to delete",
          },
        },
        {
          name: "describe",
          description:
            "Get configuration and latest operation details about transfer job",
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
            description: "The name of the job you want to describe",
          },
        },
        {
          name: "list",
          description: "List Transfer Service transfer jobs",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--expand-table",
              description:
                "Include additional table columns (job name, source, destination, frequency, lastest operation name, job status) in command output. Tip: increase the size of your terminal before running the command",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--job-names",
              description:
                "The names of the jobs you want to list. Separate multiple job names with commas (e.g., --job-names=foo,bar). If not specified, all jobs will be listed",
              args: { name: "JOB_NAMES", description: "List", suggestions: [] },
            },
            {
              name: "--job-statuses",
              description:
                "List only jobs with the statuses you specify. Options include 'enabled', 'disabled', 'deleted' (case insensitive). Separate multiple statuses with commas (e.g., --job-statuses=enabled,deleted). If not specified, all jobs will be listed",
              args: {
                name: "JOB_STATUSES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--job-type",
              description:
                "The type of the job you want to list. _JOB_TYPE_ must be one of: *transfer*, *replication*",
              args: {
                name: "JOB_TYPE",
                description: "String",
                suggestions: ["transfer", "replication"],
              },
            },
            flag6522,
            flag7356,
            flag11061,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "monitor",
          description:
            "Track progress in real time for a transfer job's latest operation",
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
              "The name of the job you want to monitor (you'll see details for the job's latest operation)",
          },
        },
        {
          name: "run",
          description: "Run a Transfer Service transfer job",
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
              name: "--no-async",
              description:
                "Blocks other tasks in your terminal until the transfer operation has completed. If not included, tasks will run asynchronously",
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description: "The name of the job you want to run",
          },
        },
        {
          name: "update",
          description: "Update a Transfer Service transfer job",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-custom-storage-class",
              description: "Reverts to using destination default storage class",
            },
            {
              name: "--clear-delete-from",
              description:
                "Remove a specified deletion option from the transfer job. If  this flag is specified, the transfer job won't delete any data from your source or destination",
            },
            {
              name: "--clear-description",
              description: "Remove the description from the transfer job",
            },
            {
              name: "--clear-destination-agent-pool",
              description:
                "Remove the destination agent pool from the transfer job",
            },
            {
              name: "--clear-event-stream",
              description:
                "Remove the job's entire event stream configuration by clearing all scheduling all event stream flags. The job will no longer listen for events unless a new configuratin is specified",
            },
            {
              name: "--clear-exclude-prefixes",
              description:
                "Remove the list of object prefixes to exclude from the object conditions",
            },
            {
              name: "--clear-include-modified-after-absolute",
              description:
                "Remove the minimum modification datetime from the object conditions",
            },
            {
              name: "--clear-include-modified-after-relative",
              description:
                "Remove the minimum duration since modification from the object conditions",
            },
            {
              name: "--clear-include-modified-before-absolute",
              description:
                "Remove the maximum modification datetime from the object conditions",
            },
            {
              name: "--clear-include-modified-before-relative",
              description:
                "Remove the maximum duration since modification from the object conditions",
            },
            {
              name: "--clear-include-prefixes",
              description:
                "Remove the list of object prefixes to include from the object conditions",
            },
            {
              name: "--clear-intermediate-storage-path",
              description:
                "Remove the intermediate storage path from the transfer job",
            },
            {
              name: "--clear-log-config",
              description: "Remove the job's full logging config",
            },
            {
              name: "--clear-manifest-file",
              description: "Remove the manifest file from the transfer job",
            },
            {
              name: "--clear-notification-config",
              description:
                "Remove the job's full notification configuration to no longer receive notifications via Cloud Pub/Sub",
            },
            {
              name: "--clear-notification-event-types",
              description:
                "Remove the event types from the notification config",
            },
            {
              name: "--clear-preserve-metadata",
              description:
                "Skips preserving optional metadata fields of objects being transferred",
            },
            {
              name: "--clear-s3-cloudfront-domain",
              description: "Removes S3 CloudFront domain",
            },
            {
              name: "--clear-schedule",
              description:
                "Remove the job's entire schedule by clearing all scheduling flags. The job will no longer run unless an operation is manually started or a new schedule is specified",
            },
            {
              name: "--clear-source-agent-pool",
              description: "Remove the source agent pool from the transfer job",
            },
            {
              name: "--clear-source-auth-method",
              description: "Removes source auth method",
            },
            {
              name: "--clear-source-creds-file",
              description: "Remove the source creds file from the transfer job",
            },
            {
              name: "--clear-source-endpoint",
              description: "Removes source endpoint",
            },
            {
              name: "--clear-source-list-api",
              description: "Removes source list API",
            },
            {
              name: "--clear-source-network-protocol",
              description: "Removes source network protocol",
            },
            {
              name: "--clear-source-request-model",
              description: "Removes source request model",
            },
            {
              name: "--clear-source-signing-region",
              description: "Removes source signing region",
            },
            flag2292,
            flag2656,
            flag2941,
            flag3118,
            {
              name: "--destination",
              description:
                "The destination of your transferred data. Available destinations and  formatting information:\n+\nGoogle Cloud Storage - Specify the `gs://` scheme; name of the bucket; and, if transferring to a folder, the path to the folder. For example:\n* gs://example-bucket/example-folder/\n+\nPOSIX filesystem - Specify the `posix://` scheme followed by the absolute path to the desired directory, starting from the root of the host machine (denoted by a leading slash). For example:\n* posix:///path/directory/\n+\nA file transfer agent must be installed on the POSIX filesystem, and you need an agent pool flag on this `jobs` command to activate the agent",
              args: {
                name: "DESTINATION",
                description: "String",
                suggestions: [],
              },
            },
            flag3368,
            flag4252,
            flag4570,
            flag4571,
            flag4572,
            flag4601,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5751,
            flag5752,
            flag5753,
            flag5754,
            flag5756,
            flag5981,
            flag7335,
            flag7338,
            flag7356,
            flag7548,
            flag10578,
            flag10579,
            flag10581,
            flag11027,
            flag11518,
            flag11637,
            flag11946,
            flag13244,
            flag13297,
            flag13298,
            flag13303,
            {
              name: "--source",
              description:
                "The source of your data. Available sources and formatting information:\n+\nPublic clouds -\n* [Google Cloud Storage] gs://example-bucket/example-folder/\n* [Amazon S3] s3://examplebucket/example-folder\n* [Azure Blob Storage or Data Lake Storage] http://examplestorageaccount.blob.core.windows.net/examplecontainer/examplefolder\n+\nPOSIX filesystem - Specify the `posix://` scheme followed by the absolute path to the desired directory, starting from the root of the host machine (denoted by a leading slash). For example:\n* posix:///path/directory/\n+\nA file transfer agent must be installed on the POSIX filesystem, and you need an agent pool flag on this `jobs` command to activate the agent.\n+\nHadoop Distributed File System (HDFS) - Specify the `hdfs://` scheme followed by the absolute path to the desired directory, starting from the root of the file system (denoted by a leading slash). For example:\n* hdfs:///path/directory/\n+\nNamenode details should not be included in the path specification, as they are required separately during the agent installation process.\n+\nA file transfer agent must be installed, and you need an agent pool flag on this `jobs` command to activate the agent.\n+\nPublicly-accessible objects - Specify the URL of a TSV file containing a list of URLs of publicly-accessible objects. For example:\n* http://example.com/tsvfile",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            flag13954,
            flag13957,
            flag13979,
            flag14003,
            flag14051,
            flag14064,
            flag14087,
            flag14092,
            {
              name: "--status",
              description:
                "Specify this flag to change the status of the job. Options include 'enabled', 'disabled', 'deleted'. _STATUS_ must be one of: *deleted*, *disabled*, *enabled*",
              args: {
                name: "STATUS",
                description: "String",
                suggestions: ["deleted", "disabled", "enabled"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description: "Name of the transfer job you'd like to update",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage transfer operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a transfer operation",
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
              "The name of the transfer operation you want to cancel",
          },
        },
        {
          name: "describe",
          description:
            "Get configuration and latest transfer operation details",
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
            description: "The name of the operation you want to describe",
          },
        },
        {
          name: "list",
          description: "List Transfer Service transfer operations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--expand-table",
              description:
                "Include additional table columns (operation name, start time, status, data copied, status, has errors, job name) in command output. Tip: increase the size of your terminal before running the command",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--job-names",
              description:
                "The names of the jobs whose operations you want to list. Separate multiple job names with commas (e.g., --job-names=foo,bar). If not specified, operations for all jobs are listed",
              args: { name: "JOB_NAMES", description: "List", suggestions: [] },
            },
            flag6522,
            flag7356,
            {
              name: "--operation-names",
              description:
                "The names of operations you want to list. Separate multiple operation names with commas (e.g., --operation-names-name=foo,bar). If not specified, all operations are listed",
              args: {
                name: "OPERATION_NAMES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--operation-statuses",
              description:
                "List only transfer operations with the statuses you specify. Options include 'in_progress', 'paused', 'success','failed', 'aborted'. Separate multiple statuses with commas (e.g., --operation-statuses=failed,aborted)",
              args: {
                name: "OPERATION_STATUSES",
                description: "List",
                suggestions: [],
              },
            },
            flag11061,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "monitor",
          description: "Track progress in real time for a transfer operation",
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
            description: "The name of the operation you want to monitor",
          },
        },
        {
          name: "pause",
          description: "Pause a currently running transfer operation",
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
              "The name of the paused transfer operation you want to cancel",
          },
        },
        {
          name: "resume",
          description: "Resume a currently paused transfer operation",
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
              "The name of the paused transfer operation you want to resume",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
