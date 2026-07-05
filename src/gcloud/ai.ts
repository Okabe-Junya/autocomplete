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
const flag446: Fig.Option = {
  name: "--allow-multiline-logs",
  description: "Output multiline log messages as single records",
};
const flag470: Fig.Option = {
  name: "--allowed-issuers",
  description:
    "List of allowed JWT issuers for a deployed index.\n+\nEach entry must be a valid Google service account, in the following format:\n`service-account-name@project-id.iam.gserviceaccount.com`",
  args: { name: "ALLOWED_ISSUERS", description: "List", suggestions: [] },
};
const flag507: Fig.Option = {
  name: "--analysis-instance-schema",
  description:
    "YAML schema file uri(Google Cloud Storage) describing the format of a\nsingle instance that you want Tensorflow Data Validation (TFDV) to analyze",
  args: {
    name: "ANALYSIS_INSTANCE_SCHEMA",
    description: "String",
    suggestions: [],
  },
};
const flag538: Fig.Option = {
  name: "--anomaly-cloud-logging",
  description:
    "If true, anomaly will be sent to Cloud Logging. Use *--anomaly-cloud-logging* to enable and *--no-anomaly-cloud-logging* to disable",
};
const flag771: Fig.Option = {
  name: "--audiences",
  description:
    "List of JWT audiences that are allowed to access a deployed index.\n+\nJWT containing any of these audiences\n(https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section -4.1.3)\nwill be accepted",
  args: { name: "AUDIENCES", description: "List", suggestions: [] },
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
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2357: Fig.Option = {
  name: "--container-args",
  description:
    "Comma-separated arguments passed to the command run by the container\nimage. If not specified and no `--command` is provided, the container\nimage's default command is used",
  args: { name: "ARG", description: "List", suggestions: [] },
};
const flag2358: Fig.Option = {
  name: "--container-command",
  description:
    "Entrypoint for the container image. If not specified, the container\nimage's default entrypoint is run",
  args: { name: "COMMAND", description: "List", suggestions: [] },
};
const flag2366: Fig.Option = {
  name: "--container-deployment-timeout-seconds",
  description: "Deployment timeout in seconds",
  args: {
    name: "CONTAINER_DEPLOYMENT_TIMEOUT_SECONDS",
    description: "Int",
    suggestions: [],
  },
};
const flag2370: Fig.Option = {
  name: "--container-env-vars",
  description: "List of key-value pairs to set as environment variables",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2374: Fig.Option = {
  name: "--container-grpc-ports",
  description:
    "Container ports to receive grpc requests at. Must be a number between 1 and\n65535, inclusive",
  args: { name: "PORT", description: "List", suggestions: [] },
};
const flag2375: Fig.Option = {
  name: "--container-health-probe-exec",
  description:
    'Exec specifies the action to take. Used by health probe. An example of this\nargument would be ["cat", "/tmp/healthy"]',
  args: { name: "HEALTH_PROBE_EXEC", description: "List", suggestions: [] },
};
const flag2376: Fig.Option = {
  name: "--container-health-probe-period-seconds",
  description:
    "How often (in seconds) to perform the health probe. Default to 10 seconds.\nMinimum value is 1",
  args: {
    name: "CONTAINER_HEALTH_PROBE_PERIOD_SECONDS",
    description: "Int",
    suggestions: [],
  },
};
const flag2377: Fig.Option = {
  name: "--container-health-probe-timeout-seconds",
  description:
    "Number of seconds after which the health probe times out. Defaults to 1 second.\nMinimum value is 1",
  args: {
    name: "CONTAINER_HEALTH_PROBE_TIMEOUT_SECONDS",
    description: "Int",
    suggestions: [],
  },
};
const flag2378: Fig.Option = {
  name: "--container-health-route",
  description: "HTTP path to send health checks to inside the container",
  args: {
    name: "CONTAINER_HEALTH_ROUTE",
    description: "String",
    suggestions: [],
  },
};
const flag2396: Fig.Option = {
  name: "--container-ports",
  description:
    "Container ports to receive http requests at. Must be a number between 1 and\n65535, inclusive",
  args: { name: "PORT", description: "List", suggestions: [] },
};
const flag2399: Fig.Option = {
  name: "--container-predict-route",
  description: "HTTP path to send prediction requests to inside the container",
  args: {
    name: "CONTAINER_PREDICT_ROUTE",
    description: "String",
    suggestions: [],
  },
};
const flag2407: Fig.Option = {
  name: "--container-shared-memory-size-mb",
  description:
    "The amount of the VM memory to reserve as the shared memory for the model in\nmegabytes",
  args: {
    name: "CONTAINER_SHARED_MEMORY_SIZE_MB",
    description: "Int",
    suggestions: [],
  },
};
const flag2408: Fig.Option = {
  name: "--container-startup-probe-exec",
  description:
    'Exec specifies the action to take. Used by startup probe. An example of this\nargument would be ["cat", "/tmp/healthy"]',
  args: { name: "STARTUP_PROBE_EXEC", description: "List", suggestions: [] },
};
const flag2409: Fig.Option = {
  name: "--container-startup-probe-period-seconds",
  description:
    "How often (in seconds) to perform the startup probe. Default to 10 seconds.\nMinimum value is 1",
  args: {
    name: "CONTAINER_STARTUP_PROBE_PERIOD_SECONDS",
    description: "Int",
    suggestions: [],
  },
};
const flag2410: Fig.Option = {
  name: "--container-startup-probe-timeout-seconds",
  description:
    "Number of seconds after which the startup probe times out. Defaults to 1 second.\nMinimum value is 1",
  args: {
    name: "CONTAINER_STARTUP_PROBE_TIMEOUT_SECONDS",
    description: "Int",
    suggestions: [],
  },
};
const flag3011: Fig.Option = {
  name: "--deployed-index-id",
  description: "Id of the deployed index",
  args: { name: "DEPLOYED_INDEX_ID", description: "String", suggestions: [] },
};
const flag3016: Fig.Option = {
  name: "--deployment-group",
  description:
    "Deployment group can be no longer than 64 characters (eg:`test`, `prod`).\nIf not set, we will use the `default` deployment group.\n+\nCreating deployment_groups with `reserved_ip_ranges` is a recommended practice\nwhen the peered network has multiple peering ranges.This creates your\ndeployments from predictable IP spaces for easier traffic administration",
  args: { name: "DEPLOYMENT_GROUP", description: "String", suggestions: [] },
};
const flag3210: Fig.Option = {
  name: "--description",
  description: "Description of the endpoint",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3217: Fig.Option = {
  name: "--description",
  description: "Description of the index endpoint",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3218: Fig.Option = {
  name: "--description",
  description: "Description of the index",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3240: Fig.Option = {
  name: "--description",
  description: "Description of the tensorboard",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag4010: Fig.Option = {
  name: "--enable-access-logging",
  description:
    "If true, online prediction access logs are sent to Cloud Logging.\n+\nThese logs are standard server access logs, containing information like\ntimestamp and latency for each prediction request",
};
const flag4090: Fig.Option = {
  name: "--enable-dashboard-access",
  description:
    "Whether you want Vertex AI to enable dashboard built on the training containers. If set to ``true'', you can access\nthe dashboard at the URIs given by CustomJob.web_access_uris or\nTrial.web_access_uris (within HyperparameterTuningJob.trials)",
};
const flag4338: Fig.Option = {
  name: "--enable-web-access",
  description:
    "Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell)\nto training containers. If set to ``true'', you can access\ninteractive shells at the URIs given by CustomJob.web_access_uris or\nTrial.web_access_uris (within HyperparameterTuningJob.trials)",
};
const flag4374: Fig.Option = {
  name: "--encryption-kms-key-name",
  description:
    "The Cloud KMS resource identifier of the customer managed encryption key\nused to protect a resource. Has the form:\nprojects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.\n+\nThe key needs to be in the same region as where the compute resource is\ncreated",
  args: {
    name: "ENCRYPTION_KMS_KEY_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag4768: Fig.Option = {
  name: "--feature-attribution-thresholds",
  description:
    "List of feature-attribution score threshold value pairs(Apply for all the\ndeployed models under the endpoint, if you want to specify different thresholds\nfor different deployed model, please use flag --monitoring-config-from-file or\ncall API directly). If only feature name is set, the default threshold value\nwould be 0.3.\n+\nFor example: `feature-attribution-thresholds=feat1=0.1,feat2,feat3=0.2`",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag4770: Fig.Option = {
  name: "--feature-thresholds",
  description:
    "List of feature-threshold value pairs(Apply for all the deployed models under\nthe endpoint, if you want to specify different thresholds for different deployed\nmodel, please use flag --monitoring-config-from-file or call API directly).\nIf only feature name is set, the default threshold value would be 0.3.\n+\nFor example: `--feature-thresholds=feat1=0.1,feat2,feat3=0.2`",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
const flag5523: Fig.Option = {
  name: "--http-headers",
  description:
    'List of header and value pairs to send as part of the request. For\nexample, to set the *Content-Type* and *X-Header*:\n+\n  --http-headers=Content-Type="application/json",X-Header=Value',
  args: { name: "HEADER=VALUE", description: "Dict", suggestions: [] },
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
const flag6148: Fig.Option = {
  name: "--json-request",
  description:
    'Path to a local file containing the body of a JSON request.\n+\nAn example of a JSON request:\n+\n    {\n      "inputs": [\n        {"dtype": "STRING", shape: [1], "string_val": ["hello world"]},\n        {"dtype": "INT32", shape: [1], "int_val": [42]}\n      ]\n    }\n+\nThis flag accepts "-" for stdin',
  args: { name: "JSON_REQUEST", description: "String", suggestions: [] },
};
const flag6149: Fig.Option = {
  name: "--json-request",
  description:
    'Path to a local file containing the body of a JSON request.\n+\nAn example of a JSON request:\n+\n    {\n      "instances": [\n        {"x": [1, 2], "y": [3, 4]},\n        {"x": [-1, -2], "y": [-3, -4]}\n      ]\n    }\n+\nThis flag accepts "-" for stdin',
  args: { name: "JSON_REQUEST", description: "String", suggestions: [] },
};
const flag6150: Fig.Option = {
  name: "--json-request",
  description:
    'Path to a local file containing the body of a JSON request.\n+\nAn example of a JSON request:\n+\n    {\n      "method_name": "my.method.Predict",\n      "input": "my request bytes"\n    }\n+\nThis flag accepts "-" for stdin',
  args: { name: "JSON_REQUEST", description: "String", suggestions: [] },
};
const flag6327: Fig.Option = {
  name: "--kms-key",
  description:
    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6336: Fig.Option = {
  name: "--kms-keyring",
  description:
    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
  args: { name: "KMS_KEYRING", description: "String", suggestions: [] },
};
const flag6344: Fig.Option = {
  name: "--kms-location",
  description:
    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
  args: { name: "KMS_LOCATION", description: "String", suggestions: [] },
};
const flag6353: Fig.Option = {
  name: "--kms-project",
  description:
    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
  args: { name: "KMS_PROJECT", description: "String", suggestions: [] },
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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7367: Fig.Option = {
  name: "--log-ttl",
  description:
    "TTL of BigQuery tables in user projects which stores logs(Day-based unit)",
  args: { name: "LOG_TTL", description: "Int", suggestions: [] },
};
const flag7425: Fig.Option = {
  name: "--machine-type",
  description:
    "The machine resources to be used for each node of this deployment.\nFor available machine types, see\nhttps://cloud.google.com/ai-platform-unified/docs/predictions/machine-types",
  args: { name: "MACHINE_TYPE", description: "String", suggestions: [] },
};
const flag7671: Fig.Option = {
  name: "--max-replica-count",
  description:
    "Maximum number of machine replicas the deployed index will be always deployed on",
  args: { name: "MAX_REPLICA_COUNT", description: "Int", suggestions: [] },
};
const flag7907: Fig.Option = {
  name: "--min-replica-count",
  description:
    "Minimum number of machine replicas the deployed index will be always deployed\non. If specified, the value must be equal to or larger than 1",
  args: {
    name: "MIN_REPLICA_COUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag8009: Fig.Option = {
  name: "--monitoring-config-from-file",
  description:
    "Path to the model monitoring objective config file. This file should be a YAML\ndocument containing a `ModelDeploymentMonitoringJob`(https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.modelDeploymentMonitoringJobs#ModelDeploymentMonitoringJob),\nbut only the ModelDeploymentMonitoringObjectiveConfig needs to be configured.\n+\nNote: Only one of --monitoring-config-from-file and other objective config set,\nlike --feature-thresholds, --feature-attribution-thresholds needs to be set.\n+\nExample(YAML):\n+\n  modelDeploymentMonitoringObjectiveConfigs:\n  - deployedModelId: '5251549009234886656'\n    objectiveConfig:\n      trainingDataset:\n        dataFormat: csv\n        gcsSource:\n          uris:\n          - gs://fake-bucket/training_data.csv\n        targetField: price\n      trainingPredictionSkewDetectionConfig:\n        skewThresholds:\n          feat1:\n            value: 0.9\n          feat2:\n            value: 0.8\n  - deployedModelId: '2945706000021192704'\n    objectiveConfig:\n      predictionDriftDetectionConfig:\n        driftThresholds:\n          feat1:\n            value: 0.3\n          feat2:\n            value: 0.4",
  args: {
    name: "MONITORING_CONFIG_FROM_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag8234: Fig.Option = {
  name: "--network",
  description:
    "Full name of the Google Compute Engine network to which the Job\nis peered with. Private services access must already have been configured.\nIf unspecified, the Job is not peered with any network",
  args: { name: "NETWORK", description: "String", suggestions: [] },
};
const flag10574: Fig.Option = {
  name: "--notification-channels",
  description:
    "Comma-separated notification channel list. e.g. --notification-channels=projects/fake-project/notificationChannels/123,projects/fake-project/notificationChannels/456",
  args: { name: "NOTIFICATION_CHANNELS", description: "List", suggestions: [] },
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
const flag11382: Fig.Option = {
  name: "--polling-interval",
  description:
    "Number of seconds to wait between efforts to fetch the latest log messages",
  args: { name: "POLLING_INTERVAL", description: "Int", suggestions: [] },
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
const flag12313: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12381: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the custom job.\n+\nTo set the `region` attribute:\n* provide the argument `custom_job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12382: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the endpoint.\n+\nTo set the `region` attribute:\n* provide the argument `endpoint` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12383: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the hyperparameter tuning job.\n+\nTo set the `region` attribute:\n* provide the argument `hptuning_job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12384: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the index.\n+\nTo set the `region` attribute:\n* provide the argument `index` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12385: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the index_endpoint.\n+\nTo set the `region` attribute:\n* provide the argument `index_endpoint` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12387: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the model.\n+\nTo set the `region` attribute:\n* provide the argument `model` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12388: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the monitoring_job.\n+\nTo set the `region` attribute:\n* provide the argument `monitoring_job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12390: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the persistent resource.\n+\nTo set the `region` attribute:\n* provide the argument `persistent_resource` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12391: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the tensorboard.\n+\nTo set the `region` attribute:\n* provide the argument `tensorboard` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12392: Fig.Option = {
  name: "--region",
  description:
    "Cloud region for the tuning job.\n+\nTo set the `region` attribute:\n* provide the argument `tuning_job` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12858: Fig.Option = {
  name: "--request-response-logging-rate",
  description:
    "Prediction request & response sampling rate for logging to BigQuery table",
  args: {
    name: "REQUEST_RESPONSE_LOGGING_RATE",
    description: "Float",
    suggestions: [],
  },
};
const flag12859: Fig.Option = {
  name: "--request-response-logging-table",
  description:
    "BigQuery table uri for prediction request & response logging.\n+\nYou can provide table uri that does not exist, it will be created for you.\n+\nValue should be provided in format: bq://``PROJECT_ID''/``DATASET''/``TABLE''",
  args: {
    name: "REQUEST_RESPONSE_LOGGING_TABLE",
    description: "String",
    suggestions: [],
  },
};
const flag12868: Fig.Option = {
  name: "--request",
  description:
    "The request to send to the endpoint.\n+\nIf the request starts with the letter '*@*', the rest should be a file\nname to read the request from, or '*@-*' to read from *stdin*. If the\nrequest body actually starts with '*@*', it must be placed in a file.\n+\nIf required, the *Content-Type* header should also be set appropriately,\nparticularly for binary data",
  args: { name: "REQUEST", description: "String", suggestions: [] },
};
const flag12939: Fig.Option = {
  name: "--reserved-ip-ranges",
  description: "List of reserved IP ranges deployed index will be deployed to",
  args: { name: "RESERVED_IP_RANGES", description: "List", suggestions: [] },
};
const flag13531: Fig.Option = {
  name: "--service-account",
  description:
    "The email address of a service account to use when running the\ntraining appplication. You must have the `iam.serviceAccounts.actAs`\npermission for the specified service account",
  args: {
    name: "SERVICE_ACCOUNT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14775: Fig.Option = {
  name: "--task-name",
  description: "If set, display only the logs for this particular task",
  args: { name: "TASK_NAME", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14979: Fig.Option = {
  name: "--traffic-split",
  description:
    "List of pairs of deployed model id and value to set as traffic split",
  args: {
    name: "DEPLOYED_MODEL_ID=VALUE",
    description: "Dict",
    suggestions: [],
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
  name: "ai",
  description: "Manage entities in Vertex AI",
  subcommands: [
    {
      name: "custom-jobs",
      description: "Manage Vertex AI custom jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running custom job",
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
            flag12381,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_JOB",
            description:
              "ID of the custom job or fully qualified identifier for the custom job.\n+\nTo set the `name` attribute:\n* provide the argument `custom_job` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new custom job",
          options: [
            flag42,
            flag46,
            {
              name: "--args",
              description:
                "Comma-separated arguments passed to containers or python tasks",
              args: { name: "ARG", description: "List", suggestions: [] },
            },
            flag1201,
            {
              name: "--command",
              description:
                "Command to be invoked when containers are started.\nIt overrides the entrypoint instruction in Dockerfile when provided",
              args: { name: "COMMAND", description: "List", suggestions: [] },
            },
            {
              name: "--config",
              description:
                "Path to the job configuration file. This file should be a YAML document\ncontaining a [`CustomJobSpec`](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec).\nIf an option is specified both in the configuration file **and** via command-line arguments, the command-line arguments\noverride the configuration file. Note that keys with underscore are invalid.\n+\nExample(YAML):\n+\n  workerPoolSpecs:\n    machineSpec:\n      machineType: n1-highmem-2\n    replicaCount: 1\n    containerSpec:\n      imageUri: gcr.io/ucaip-test/ucaip-training-test\n      args:\n      - port=8500\n      command:\n      - start",
              args: { name: "CONFIG", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--display-name",
              description: "Display name of the custom job to create",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4090,
            flag4338,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            flag8234,
            {
              name: "--persistent-resource-id",
              description:
                "The name of the persistent resource from the same project and region on\nwhich to run this custom job.\n+\nIf this is specified, the job will be run on existing machines held by the\nPersistentResource instead of on-demand short-lived machines.\nThe network and CMEK configs on the job should be consistent with those on\nthe PersistentResource, otherwise, the job will be rejected",
              args: {
                name: "PERSISTENT_RESOURCE_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--python-package-uris",
              description:
                "The common Python package URIs to be used for training with a pre-built container image. e.g. `--python-package-uri=path1,path2` If you are using multiple worker pools and want to specify a different Python packag fo reach pool, use `--config` instead",
              args: {
                name: "PYTHON_PACKAGE_URIS",
                description: "List",
                suggestions: [],
              },
            },
            flag11946,
            flag12313,
            flag13531,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--worker-pool-spec",
              description:
                'Define the worker pool configuration used by the custom job. You can\nspecify multiple worker pool specs in order to create a custom job with\nmultiple worker pools.\n+\nThe spec can contain the following fields:\n+\n*machine-type*::: (Required): The type of the machine.\n  see https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types\n  for supported types. This is corresponding to the `machineSpec.machineType`\n  field in `WorkerPoolSpec` API message.\n*replica-count*::: The number of worker replicas to use for this worker\n  pool, by default the value is 1. This is corresponding to the `replicaCount`\n  field in `WorkerPoolSpec` API message.\n*accelerator-type*::: The type of GPUs.\n  see https://cloud.google.com/vertex-ai/docs/training/configure-compute#specifying_gpus\n  for more requirements. This is corresponding to the `machineSpec.acceleratorType`\n  field in `WorkerPoolSpec` API message.\n*accelerator-count*::: The number of GPUs for each VM in the worker pool to\n  use, by default the value if 1. This is corresponding to the\n  `machineSpec.acceleratorCount` field in `WorkerPoolSpec` API message.\n*container-image-uri*::: The URI of a container image to be directly run on\n  each worker replica. This is corresponding to the\n  `containerSpec.imageUri` field in `WorkerPoolSpec` API message.\n*executor-image-uri*::: The URI of a container image that will run the\n  provided package.\n*output-image-uri*::: The URI of a custom container image to be built for\nautopackaged custom jobs.\n*python-module*::: The Python module name to run within the provided\n  package.\n*local-package-path*::: The local path of a folder that contains training\n  code.\n*script*::: The relative path under the `local-package-path` to a file to\n  execute. It can be a Python file or an arbitrary bash script.\n*requirements*::: Python dependencies to be installed from PyPI, separated\n  by ";". This is supposed to be used when some public packages are\n  required by your training application but not in the base images.\n  It has the same effect as editing a "requirements.txt" file under\n  `local-package-path`.\n*extra-packages*::: Relative paths of local Python archives to be installed,\n  separated by ";". This is supposed to be used when some custom packages\n  are required by your training application but not in the base images.\n  Every path should be relative to the `local-package-path`.\n*extra-dirs*::: Relative paths of the folders under `local-package-path`\n to be copied into the container, separated by ";". If not specified, only\n the parent directory that contains the main executable (`script` or\n `python-module`) will be copied.\n+\n\n::::\nNote that some of these fields are used for different job creation methods\nand are categorized as mutually exclusive groups listed below. Exactly one of\nthese groups of fields must be specified:\n+\n\n`container-image-uri`::::\nSpecify this field to use a custom container image for training. Together\nwith the `--command` and `--args` flags, this field represents a\n[`WorkerPoolSpec.ContainerSpec`](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec?#containerspec)\nmessage.\nIn this case, the `--python-package-uris` flag is disallowed.\n+\nExample:\n--worker-pool-spec=replica-count=1,machine-type=n1-highmem-2,container-image-uri=gcr.io/ucaip-test/ucaip-training-test\n+\n`executor-image-uri, python-module`::::\nSpecify these fields to train using a pre-built container and Python\npackages that are already in Cloud Storage. Together with the\n`--python-package-uris` and `--args` flags, these fields represent a\n[`WorkerPoolSpec.PythonPackageSpec`](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec#pythonpackagespec)\nmessage .\n+\nExample:\n--worker-pool-spec=machine-type=e2-standard-4,executor-image-uri=us-docker.pkg.dev/vertex-ai/training/tf-cpu.2-4:latest,python-module=trainer.task\n+\n`output-image-uri`::::\nSpecify this field to push the output custom container training image to a specific path in Container Registry or Artifact Registry for an autopackaged custom job.\n+\nExample:\n--worker-pool-spec=machine-type=e2-standard-4,executor-image-uri=us-docker.pkg.dev/vertex-ai/training/tf-cpu.2-4:latest,output-image-uri=\'eu.gcr.io/projectName/imageName\',python-module=trainer.task\n+\n`local-package-path, executor-image-uri, output-image-uri, python-module|script`::::\nSpecify these fields, optionally with `requirements`, `extra-packages`, or\n`extra-dirs`, to train using a pre-built container and Python code from a\nlocal path.\nIn this case, the `--python-package-uris` flag is disallowed.\n+\nExample using `python-module`:\n--worker-pool-spec=machine-type=e2-standard-4,replica-count=1,executor-image-uri=us-docker.pkg.dev/vertex-ai/training/tf-cpu.2-4:latest,python-module=trainer.task,local-package-path=/usr/page/application\n+\nExample using `script`:\n--worker-pool-spec=machine-type=e2-standard-4,replica-count=1,executor-image-uri=us-docker.pkg.dev/vertex-ai/training/tf-cpu.2-4:latest,script=my_run.sh,local-package-path=/usr/jeff/application',
              args: {
                name: "WORKER_POOL_SPEC",
                description: "Dict",
                suggestions: [],
              },
            },
          ],
        },
        {
          name: "describe",
          description:
            "Get detailed information about the custom job by given id",
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
            flag12381,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_JOB",
            description:
              "ID of the custom job or fully qualified identifier for the custom job.\n+\nTo set the `name` attribute:\n* provide the argument `custom_job` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists the existing custom jobs",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "local-run",
          description: "Run a custom training locally",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--executor-image-uri",
              description:
                "URI or ID of the container image in either the Container Registry or local\nthat will run the application.\nSee https://cloud.google.com/vertex-ai/docs/training/pre-built-containers\nfor available pre-built container images provided by Vertex AI for training",
              args: {
                name: "IMAGE_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--extra-dirs",
              description:
                'Extra directories under the working directory to include, besides the one\nthat contains the main executable.\n+\nBy default, only the parent directory of the main script or python module\nis copied to the container.\nFor example, if the module is "training.task" or the script is\n"training/task.py", the whole "training" directory, including its\nsub-directories, will always be copied to the container. You may specify\nthis flag to also copy other directories if necessary.\n+\nNote: if no parent is specified in \'python_module\' or \'scirpt\', the whole\nworking directory is copied, then you don\'t need to specify this flag',
              args: { name: "EXTRA_DIR", description: "List", suggestions: [] },
            },
            {
              name: "--extra-packages",
              description:
                "Local paths to Python archives used as training dependencies in the image\ncontainer.\nThese can be absolute or relative paths. However, they have to be under\nthe work_dir; Otherwise, this tool will not be able to access it.\n+\nExample:\n'dep1.tar.gz, ./downloads/dep2.whl'",
              args: { name: "PACKAGE", description: "List", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            { name: "--gpu", description: "Enable to use GPU" },
            flag5453,
            flag5699,
            {
              name: "--local-package-path",
              description:
                "local path of the directory where the python-module or script exists.\nIf not specified, it use the directory where you run the this command.\n+\nOnly the contents of this directory will be accessible to the built\ncontainer image",
              args: {
                name: "LOCAL_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--output-image-uri",
              description:
                "Uri of the custom container image to be built with the your application\npacked in",
              args: {
                name: "OUTPUT_IMAGE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: "--python-module",
              description:
                "Name of the python module to execute, in 'trainer.train' or 'train'\nformat. Its path should be relative to the `work_dir`",
              args: {
                name: "PYTHON_MODULE",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--requirements",
              description:
                'Python dependencies from PyPI to be used when running the application.\nIf this is not specified, and there is no "setup.py" or "requirements.txt"\nin the working directory, your application will only have access to what\nexists in the base image with on other dependencies.\n+\nExample:\n\'tensorflow-cpu, pandas==1.2.0, matplotlib>=3.0.2\'',
              args: {
                name: "REQUIREMENTS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--script",
              description:
                "The relative path of the file to execute. Accepets a Python file or an\narbitrary bash script. This path should be relative to the `work_dir`",
              args: { name: "SCRIPT", description: "String", suggestions: [] },
            },
            {
              name: "--service-account-key-file",
              description:
                "The JSON file of a Google Cloud service account private key.\nWhen specified, the corresponding service account will be used to\nauthenticate the local container to access Google Cloud services.\nNote that the key file won't be copied to the container, it will be\nmounted during running time",
              args: {
                name: "ACCOUNT_KEY_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ARGS",
            description:
              "Additional user arguments to be forwarded to your application.\n+\nThe '--' argument must be specified between gcloud specific args on the left and ARGS on the right. Example:\n+\n$ {command} --script=my_run.sh --base-image=gcr.io/my/image -- --my-arg bar --enable_foo",
          },
        },
        {
          name: "stream-logs",
          description: "Show stream logs from a running custom job",
          options: [
            flag42,
            flag46,
            flag446,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11382,
            flag11637,
            flag11946,
            flag12381,
            flag14775,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CUSTOM_JOB",
            description:
              "ID of the custom job or fully qualified identifier for the custom job.\n+\nTo set the `name` attribute:\n* provide the argument `custom_job` on the command line",
          },
        },
      ],
    },
    {
      name: "endpoints",
      description: "Manage Vertex AI endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3210,
            {
              name: "--display-name",
              description: "Display name of the endpoint",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4374,
            {
              name: "--endpoint-id",
              description: "User-specified ID of the endpoint",
              args: {
                name: "ENDPOINT_ID",
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
            flag7356,
            {
              name: "--network",
              description:
                "The full name of the Google Compute Engine network to which the endpoint should be peered",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12313,
            flag12858,
            flag12859,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI endpoint",
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
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "deploy-model",
          description: "Deploy a model to an existing Vertex AI endpoint",
          options: [
            {
              name: "--accelerator",
              description:
                "Manage the accelerator config for GPU serving. When deploying a model with\nCompute Engine Machine Types, a GPU accelerator may also\nbe selected.\n+\n*type*::: The type of the accelerator. Choices are 'nvidia-a100-80gb', 'nvidia-b200', 'nvidia-gb200', 'nvidia-h100-80gb', 'nvidia-h100-mega-80gb', 'nvidia-h200-141gb', 'nvidia-l4', 'nvidia-rtx-pro-6000', 'nvidia-tesla-a100', 'nvidia-tesla-k80', 'nvidia-tesla-p100', 'nvidia-tesla-p4', 'nvidia-tesla-t4', 'nvidia-tesla-v100'.\n+\n*count*::: The number of accelerators to attach to each machine running the job.\n This is usually 1. If not specified, the default value is 1.\n+\nFor example:\n`--accelerator=type=nvidia-tesla-k80,count=1`",
              args: {
                name: "ACCELERATOR",
                description: "Dict",
                suggestions: [],
              },
            },
            flag42,
            flag46,
            {
              name: "--autoscaling-metric-specs",
              description:
                "Metric specifications that control autoscaling behavior. At most one entry is\nallowed per metric.\n+\n*METRIC-NAME*::: Resource metric name. Choices are 'cpu-usage', 'dcgm-fi-dev-gpu-util', 'gpu-duty-cycle', 'request-counts-per-minute', 'vllm-gpu-cache-usage-perc', 'vllm-num-requests-waiting'.\n+\n*TARGET*::: Target value for the given metric. For `cpu-usage`, `gpu-duty-cycle`,\n`dcgm-fi-dev-gpu-util`, and `vllm-gpu-cache-usage-perc`, the target is the target\nresource utilization in percentage (1% - 100%). For `request-counts-per-minute`,\nthe target is the number of requests per minute per replica. For\n`vllm-num-requests-waiting`, the target is the number of pending requests allowed\non the replica.\n+\nFor example, to set target CPU usage to 70% and target requests to 600 per\nminute per replica:\n`--autoscaling-metric-specs=cpu-usage=70,request-counts-per-minute=600`",
              args: {
                name: "METRIC-NAME=TARGET",
                description: "Dict",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--deployed-model-id",
              description: "User-specified ID of the deployed-model",
              args: {
                name: "DEPLOYED_MODEL_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disable-container-logging",
              description:
                "For custom-trained Models and AutoML Tabular Models, the container of the\ndeployed model instances will send `stderr` and `stdout` streams to\nCloud Logging by default. Please note that the logs incur cost,\nwhich are subject to [Cloud Logging\npricing](https://cloud.google.com/stackdriver/pricing).\n+\nUser can disable container logging by setting this flag to true",
            },
            {
              name: "--display-name",
              description: "Display name of the deployed model",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4010,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gpu-partition-size",
              description:
                "The partition size of the GPU accelerator. This can be used to partition a\nsingle GPU into multiple smaller GPU instances.\nSee https://cloud.google.com/kubernetes-engine/docs/how-to/gpus-multi#multi-instance_gpu_partitions for more details",
              args: {
                name: "GPU_PARTITION_SIZE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            flag7425,
            {
              name: "--max-replica-count",
              description:
                "Maximum number of machine replicas for the deployment resources the model will be\ndeployed on",
              args: {
                name: "MAX_REPLICA_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--min-replica-count",
              description:
                "Minimum number of machine replicas for the deployment resources the model will be\ndeployed on. For normal deployments, the value must be equal to or larger than 1.\nIf the value is 0, the deployment will be enrolled in the scale-to-zero feature.\nIf not specified and the uploaded models use dedicated resources, the default\nvalue is 1.\n+\nNOTE: DeploymentResourcePools (model-cohosting) is currently not supported for\nscale-to-zero deployments",
              args: {
                name: "MIN_REPLICA_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--model",
              description: "ID of the uploaded model",
              args: { name: "MODEL", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12382,
            {
              name: "--required-replica-count",
              description:
                "Required number of machine replicas for the deployment resources the model will\nbe considered successfully deployed. This value must be greater than or equal\nto 1 and less than or equal to min-replica-count",
              args: {
                name: "REQUIRED_REPLICA_COUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--reservation-affinity",
              description:
                "A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a\nDeployedModel) to draw its Compute Engine resources from a Shared Reservation,\nor exclusively from on-demand capacity",
              args: {
                name: "RESERVATION_AFFINITY",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--service-account",
              description:
                "Service account that the deployed model's container runs as. Specify the\nemail address of the service account. If this service account is not\nspecified, the container runs as a service account that doesn't have access\nto the resource project",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--spot",
              description:
                "If true, schedule the deployment workload on Spot VMs",
            },
            flag14975,
            flag14979,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an existing Vertex AI endpoint",
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
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "direct-predict",
          description: "Run Vertex AI online direct prediction",
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
            flag6148,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "direct-raw-predict",
          description: "Run Vertex AI online direct raw prediction",
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
            flag6150,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "explain",
          description:
            "Request an online explanation from an Vertex AI endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployed-model-id",
              description: "Id of the deployed model",
              args: {
                name: "DEPLOYED_MODEL_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6149,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing Vertex AI endpoints",
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
            {
              name: "--list-model-garden-endpoints-only",
              description:
                "Whether to only list endpoints related to Model Garden",
            },
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "predict",
          description: "Run Vertex AI online prediction",
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
            flag6149,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "raw-predict",
          description: "Run Vertex AI online raw prediction",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5523,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag12868,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "stream-direct-predict",
          description: "Run Vertex AI online stream direct prediction",
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
            flag6148,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "stream-direct-raw-predict",
          description: "Run Vertex AI online stream direct raw prediction",
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
            flag6150,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "stream-raw-predict",
          description: "Run Vertex AI online stream raw prediction",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5523,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12382,
            flag12868,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "undeploy-model",
          description: "Undeploy a model from an existing Vertex AI endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployed-model-id",
              description: "Id of the deployed model",
              args: {
                name: "DEPLOYED_MODEL_ID",
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
            flag12382,
            flag14975,
            flag14979,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an existing Vertex AI endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            {
              name: "--clear-traffic-split",
              description:
                "Clears the traffic split map. If the map is empty, the endpoint is to not accept any traffic at the moment",
            },
            flag2292,
            flag3210,
            {
              name: "--disable-request-response-logging",
              description: "Disable prediction request & response logging",
            },
            {
              name: "--display-name",
              description: "Display name of the endpoint",
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
            flag11637,
            flag11946,
            flag12382,
            flag12637,
            flag12858,
            flag12859,
            flag14975,
            flag14979,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ENDPOINT",
            description:
              "ID of the endpoint or fully qualified identifier for the endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `endpoint` on the command line",
          },
        },
      ],
    },
    {
      name: "hp-tuning-jobs",
      description: "Manage Vertex AI hyperparameter tuning jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running hyperparameter tuning job",
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
            flag12383,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HPTUNING_JOB",
            description:
              "ID of the hyperparameter tuning job or fully qualified identifier for the hyperparameter tuning job.\n+\nTo set the `name` attribute:\n* provide the argument `hptuning_job` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a hyperparameter tuning job",
          options: [
            flag42,
            flag46,
            {
              name: "--algorithm",
              description:
                "Search algorithm specified for the given study. _ALGORITHM_ must be one of: *algorithm-unspecified*, *grid-search*, *random-search*",
              args: {
                name: "ALGORITHM",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: [
                  "algorithm-unspecified",
                  "grid-search",
                  "random-search",
                ],
              },
            },
            flag1201,
            {
              name: "--config",
              description:
                "Path to the job configuration file. This file should be a YAML document containing a HyperparameterTuningSpec.\nIf an option is specified both in the configuration file **and** via command line arguments, the command line arguments\noverride the configuration file.\n+\nExample(YAML):\n+\n  displayName: TestHpTuningJob\n  maxTrialCount: 1\n  parallelTrialCount: 1\n  studySpec:\n    metrics:\n    - metricId: x\n      goal: MINIMIZE\n    parameters:\n    - parameterId: z\n      integerValueSpec:\n        minValue: 1\n        maxValue: 100\n    algorithm: RANDOM_SEARCH\n  trialJobSpec:\n    workerPoolSpecs:\n    - machineSpec:\n        machineType: n1-standard-4\n      replicaCount: 1\n      containerSpec:\n        imageUri: gcr.io/ucaip-test/ucaip-training-test",
              args: { name: "CONFIG", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--display-name",
              description:
                "Display name of the hyperparameter tuning job to create",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4090,
            flag4338,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            {
              name: "--max-trial-count",
              description:
                "Desired total number of trials. The default value is 1",
              args: {
                name: "MAX_TRIAL_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag8234,
            {
              name: "--parallel-trial-count",
              description:
                "Desired number of Trials to run in parallel. The default value is 1",
              args: {
                name: "PARALLEL_TRIAL_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12313,
            flag13531,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "describe",
          description:
            "Get detail information about the hyperparameter tuning job by given id",
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
            flag12383,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HPTUNING_JOB",
            description:
              "ID of the hyperparameter tuning job or fully qualified identifier for the hyperparameter tuning job.\n+\nTo set the `name` attribute:\n* provide the argument `hptuning_job` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing hyperparameter tuning jobs",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "stream-logs",
          description:
            "Stream logs from a running Vertex AI hyperparameter tuning job",
          options: [
            flag42,
            flag46,
            flag446,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11382,
            flag11637,
            flag11946,
            flag12383,
            flag14775,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "HPTUNING_JOB",
            description:
              "ID of the hyperparameter tuning job or fully qualified identifier for the hyperparameter tuning job.\n+\nTo set the `name` attribute:\n* provide the argument `hptuning_job` on the command line",
          },
        },
      ],
    },
    {
      name: "index-endpoints",
      description: "Manage Vertex AI index endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI index endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3217,
            {
              name: "--display-name",
              description: "Display name of the index endpoint",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-private-service-connect",
              description:
                "If true, expose the index endpoint via private service connect",
            },
            flag4374,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--network",
              description:
                "The Google Compute Engine network name to which the IndexEndpoint should be peered",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag11637,
            {
              name: "--project-allowlist",
              description:
                "List of projects from which the forwarding rule will target the service\nattachment",
              args: { name: "PROJECTS", description: "List", suggestions: [] },
            },
            {
              name: "--public-endpoint-enabled",
              description:
                "If true, the deployed index will be accessible through public endpoint",
            },
            flag11946,
            flag12313,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI index endpoint",
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
            flag12385,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `index_endpoint` on the command line",
          },
        },
        {
          name: "deploy-index",
          description: "Deploy an index to a Vertex AI index endpoint",
          options: [
            flag42,
            flag46,
            flag470,
            flag771,
            flag1201,
            flag2292,
            flag3011,
            flag3016,
            {
              name: "--deployment-tier",
              description:
                "The deployment tier that the deployed index is deployed to. If not specified, a system-chosen default tier is used. _DEPLOYMENT_TIER_ must be (only one value is supported): *storage*",
              args: {
                name: "DEPLOYMENT_TIER",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["storage"],
              },
            },
            {
              name: "--display-name",
              description: "Display name of the deployed index",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4010,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--index",
              description: "ID of the index",
              args: { name: "INDEX", description: "String", suggestions: [] },
            },
            flag7356,
            flag7425,
            flag7671,
            flag7907,
            flag11637,
            {
              name: "--psc-automation-configs",
              description:
                "A pair of `project-id` and `network` the PSC index will be deployed to. For\nexample: `--psc-automation-configs=project-id=my-project,network=my-network`.\nFor multiple networks, this flag can be repeated:\n`--psc-automation-configs=project-id=my-project,network=my-network --psc-automation-configs=project-id=my-project2,network=my-network2`",
              args: {
                name: "PSC_AUTOMATION_CONFIGS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11946,
            flag12385,
            flag12939,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `index_endpoint` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Gets detailed index endpoint information about the given index endpoint id",
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
            flag12385,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `index_endpoint` on the command line",
          },
        },
        {
          name: "list",
          description:
            "Lists the index endpoints of the given project and region",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "mutate-deployed-index",
          description:
            "Mutate an existing deployed index from a Vertex AI index endpoint",
          options: [
            flag42,
            flag46,
            flag470,
            flag771,
            flag1201,
            flag2292,
            flag3011,
            flag3016,
            flag4010,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7425,
            flag7671,
            flag7907,
            flag11637,
            flag11946,
            flag12385,
            flag12939,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `index_endpoint` on the command line",
          },
        },
        {
          name: "undeploy-index",
          description: "Undeploy an index from a Vertex AI index endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3011,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12385,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `index_endpoint` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an Vertex AI index endpoint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag3217,
            {
              name: "--display-name",
              description: "Display name of the index endpoint",
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
            flag11637,
            flag11946,
            flag12385,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX_ENDPOINT",
            description:
              "ID of the index_endpoint or fully qualified identifier for the index_endpoint.\n+\nTo set the `name` attribute:\n* provide the argument `index_endpoint` on the command line",
          },
        },
      ],
    },
    {
      name: "indexes",
      description: "Manage Vertex AI indexes",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI index",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3218,
            {
              name: "--display-name",
              description: "Display name of the index",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4374,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--index-update-method",
              description:
                "The update method to use with this index. Choose `stream-update` or\n`batch-update` (case insensitive). If not set, batch update will be used by default. _INDEX_UPDATE_METHOD_ must be one of:\n+\n*batch-update*::: can update index with `gcloud ai indexes update` usingdatapoints files on Cloud Storage.\n*stream-update*::: can update datapoints with `upsert-datapoints` and`delete-datapoints` and will be applied nearly real-time.\n:::\n+",
              args: {
                name: "INDEX_UPDATE_METHOD",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["batch-update", "stream-update"],
              },
            },
            flag6413,
            flag7356,
            {
              name: "--metadata-file",
              description:
                "Path to a local JSON file that contains the additional metadata information about the index",
              args: {
                name: "METADATA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--metadata-schema-uri",
              description:
                "Points to a YAML file stored on Google Cloud Storage describing additional information about index",
              args: {
                name: "METADATA_SCHEMA_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12313,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI index",
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
            flag12384,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index.\n+\nTo set the `name` attribute:\n* provide the argument `index` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Gets detailed index information about the given index id",
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
            flag12384,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index.\n+\nTo set the `name` attribute:\n* provide the argument `index` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists the indexes of the given project and region",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-datapoints",
          description: "Remove data points from the specified index",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--datapoint-ids",
              description:
                "List of index datapoint ids to be removed from the index",
              args: {
                name: "DATAPOINT_IDS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--datapoints-from-file",
              description:
                "Path to a local JSON file that contains the data points that need to be added to the index",
              args: {
                name: "DATAPOINTS_FROM_FILE",
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
            flag12384,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index.\n+\nTo set the `name` attribute:\n* provide the argument `index` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an Vertex AI index",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag3218,
            {
              name: "--display-name",
              description: "Display name of the index",
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
              name: "--metadata-file",
              description:
                "Path to a local JSON file that contains the additional metadata information about the index",
              args: {
                name: "METADATA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12384,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index.\n+\nTo set the `name` attribute:\n* provide the argument `index` on the command line",
          },
        },
        {
          name: "upsert-datapoints",
          description: "Upsert data points into the specified index",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--datapoints-from-file",
              description:
                "Path to a local JSON file that contains the data points that need to be added to the index",
              args: {
                name: "DATAPOINTS_FROM_FILE",
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
            flag12384,
            flag14975,
            {
              name: "--update-mask",
              description:
                "Update mask is used to specify the fields to be\noverwritten in the datapoints by the update. The fields specified in the\nupdate_mask are relative to each IndexDatapoint inside datapoints, not\nthe full request.\n+\nUpdatable fields:\n* Use --update-mask=`all_restricts` to update both `restricts` and `numeric_restricts`",
              args: {
                name: "UPDATE_MASK_PATH",
                description: "List",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "INDEX",
            description:
              "ID of the index or fully qualified identifier for the index.\n+\nTo set the `name` attribute:\n* provide the argument `index` on the command line",
          },
        },
      ],
    },
    {
      name: "model-garden",
      description: "Interact with and manage resources in Vertex Model Garden",
      subcommands: [
        {
          name: "models",
          description: "List and use Model Garden models",
          subcommands: [
            {
              name: "deploy",
              description:
                "Deploy a model in Model Garden to a Vertex AI endpoint",
              options: [
                {
                  name: "--accelerator-count",
                  description:
                    "The accelerator count to serve the model. Accelerator count should be non-negative",
                  args: {
                    name: "ACCELERATOR_COUNT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--accelerator-type",
                  description:
                    "The accelerator type to serve the model. It should be a supported accelerator type from the verified deployment configurations of the model. Use `gcloud ai model-garden models list-deployment-config` to check the supported accelerator types",
                  args: {
                    name: "ACCELERATOR_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--accept-eula",
                  description:
                    "When set, the user accepts the End User License Agreement (EULA) of the model",
                },
                flag42,
                flag46,
                {
                  name: "--asynchronous",
                  description:
                    "If set to true, the command will terminate immediately and not keep polling the operation status",
                },
                flag1201,
                flag2292,
                flag2357,
                flag2358,
                flag2366,
                flag2370,
                flag2374,
                flag2375,
                flag2376,
                flag2377,
                flag2378,
                {
                  name: "--container-image-uri",
                  description:
                    "URI of the Model serving container file in the Container Registry\n(e.g. gcr.io/myproject/server:latest)",
                  args: {
                    name: "CONTAINER_IMAGE_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2396,
                flag2399,
                flag2407,
                flag2408,
                flag2409,
                flag2410,
                {
                  name: "--disable-dedicated-endpoint",
                  description:
                    "If true, the dedicated endpoint will be disabled and the deployed model will be exposed through the shared DNS",
                },
                {
                  name: "--enable-fast-tryout",
                  description:
                    "If True, model will be deployed using faster deployment path. Useful for quick experiments. Not for production workloads. Only available for most popular models with certain machine types",
                },
                {
                  name: "--endpoint-display-name",
                  description:
                    "Display name of the endpoint with the deployed model",
                  args: {
                    name: "ENDPOINT_DISPLAY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--hugging-face-access-token",
                  description:
                    "The access token from Hugging Face needed to read the model artifacts of gated models. It is only needed when the Hugging Face model to deploy is gated",
                  args: {
                    name: "HUGGING_FACE_ACCESS_TOKEN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                {
                  name: "--machine-type",
                  description:
                    "The machine type to deploy the model to. It should be a supported machine type from the deployment configurations of the model. Use `gcloud ai model-garden models list-deployment-config` to check the supported machine types",
                  args: {
                    name: "MACHINE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--model",
                  description:
                    "The model to be deployed. If it is a Model Garden model, it should be in the format of `{publisher_name}/{model_name}@{model_version_name}, e.g. `google/gemma2@gemma-2-2b`. If it is a Hugging Face model, it should be in the convention of Hugging Face models, e.g. `meta-llama/Meta-Llama-3-8B`. If it is a Custom Weights model, it should be in the format of `gs://{gcs_bucket_uri}`, e.g. `gs://-model-garden-public-us/llama3.1/Meta-Llama-3.1-8B-Instruct`",
                  args: {
                    name: "MODEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag12313,
                {
                  name: "--reservation-affinity",
                  description:
                    "A ReservationAffinity can be used to configure a Vertex AI resource (e.g., a DeployedModel) to draw its Compute Engine resources from a Shared Reservation, or exclusively from on-demand capacity",
                  args: {
                    name: "RESERVATION_AFFINITY",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--spot",
                  description:
                    "If true, schedule the deployment workload on Spot VM",
                },
                {
                  name: "--system-labels",
                  description: "System labels for Model Garden deployments",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--use-dedicated-endpoint",
                  description:
                    "If true, the endpoint will be exposed through a dedicated DNS. Your request to the dedicated DNS will be isolated from other users' traffic and will have better performance and reliability",
                },
                flag15315,
                flag15424,
              ],
            },
            {
              name: "list",
              description: "List the publisher models in Model Garden",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--can-deploy-hugging-face-models",
                  description:
                    "Whether to only list Hugging Face models that can be deployed",
                },
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--full-resource-name",
                  description:
                    "Whether to return the full resource name of the model",
                },
                flag5453,
                flag5699,
                {
                  name: "--limit",
                  description:
                    "Maximum number of resources to list. The default is *1000*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
                  args: { name: "LIMIT", description: "Int", suggestions: [] },
                },
                flag7356,
                {
                  name: "--model-filter",
                  description:
                    "Filter to apply to the model names or the display names of the list of models",
                  args: {
                    name: "MODEL_FILTER",
                    description: "String",
                    suggestions: [],
                  },
                },
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
              name: "list-deployment-config",
              description:
                "List the machine specifications supported by and verified for a model in Model Garden",
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
                  name: "--hugging-face-access-token",
                  description:
                    "The access token from Hugging Face needed to read the model artifacts of gated models in order to generate the deployment configs. It is only needed when the Hugging Face model to deploy is gated and not verified by Model Garden. You can use the `gcloud ai alpha/beta model-garden models list` command to find out which ones are verified by Model Garden",
                  args: {
                    name: "HUGGING_FACE_ACCESS_TOKEN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                {
                  name: "--model",
                  description:
                    "The model to be deployed. If it is a Model Garden model, it should be in the format of `{publisher_name}/{model_name}@{model_version_name}, e.g. `google/gemma2@gemma-2-2b`. If it is a Hugging Face model, it should be in the convention of Hugging Face models, e.g. `meta-llama/Meta-Llama-3-8B`",
                  args: {
                    name: "MODEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "model-monitoring-jobs",
      description: "Manage Vertex AI model monitoring jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI model monitoring job",
          options: [
            flag42,
            flag46,
            flag507,
            flag538,
            {
              name: "--bigquery-uri",
              description:
                "BigQuery table of the unmanaged Dataset used to train this Model.\nFor example: `bq://projectId.bqDatasetId.bqTableId`",
              args: {
                name: "BIGQUERY_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--data-format",
              description:
                "Data format of the dataset, must be provided if the input is from Google Cloud Storage.\nThe possible formats are: tf-record, csv",
              args: {
                name: "DATA_FORMAT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dataset",
              description: "Id of Vertex AI Dataset used to train this Model",
              args: { name: "DATASET", description: "String", suggestions: [] },
            },
            {
              name: "--display-name",
              description:
                "Display name of the model deployment monitoring job",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--emails",
              description:
                "Comma-separated email address list. e.g. --emails=a@gmail.com,b@gmail.com",
              args: { name: "EMAILS", description: "List", suggestions: [] },
            },
            {
              name: "--endpoint",
              description: "Id of the endpoint",
              args: {
                name: "ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            flag4768,
            flag4770,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-uris",
              description:
                "Comma-separated Google Cloud Storage uris of the unmanaged Datasets used to train this Model",
              args: { name: "GCS_URIS", description: "List", suggestions: [] },
            },
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            flag7367,
            flag8009,
            {
              name: "--monitoring-frequency",
              description: "Monitoring frequency, unit is 1 hour",
              args: {
                name: "MONITORING_FREQUENCY",
                description: "Int",
                suggestions: [],
              },
            },
            flag10574,
            {
              name: "--predict-instance-schema",
              description:
                "YAML schema file uri(Google Cloud Storage) describing the format of a\nsingle instance, which are given to format this Endpoint's prediction.\nIf not set, predict schema will be generated from collected predict requests",
              args: {
                name: "PREDICT_INSTANCE_SCHEMA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--prediction-sampling-rate",
              description: "Prediction sampling rate",
              args: {
                name: "PREDICTION_SAMPLING_RATE",
                description: "Float",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12313,
            {
              name: "--sample-predict-request",
              description:
                'Path to a local file containing the body of a JSON object. Same format as\n[PredictRequest.instances][], this can be set as a replacement of predict-instance-schema.\nIf not set, predict schema will be generated from collected predict requests.\n+\nAn example of a JSON request:\n+\n    {"x": [1, 2], "y": [3, 4]}',
              args: {
                name: "SAMPLE_PREDICT_REQUEST",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--target-field",
              description:
                "Target field name the model is to predict. Must be provided if you'd like to\ndo training-prediction skew detection",
              args: {
                name: "TARGET_FIELD",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--training-sampling-rate",
              description: "Training Dataset sampling rate",
              args: {
                name: "TRAINING_SAMPLING_RATE",
                description: "Float",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing Vertex AI model deployment monitoring job",
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
            flag12388,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job.\n+\nTo set the `name` attribute:\n* provide the argument `monitoring_job` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Get detailed model deployment monitoring job information about the given job id",
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
            flag12388,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job.\n+\nTo set the `name` attribute:\n* provide the argument `monitoring_job` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the model deployment monitoring jobs of the given project and region",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "pause",
          description:
            "Pause a running Vertex AI model deployment monitoring job",
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
            flag12388,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job.\n+\nTo set the `name` attribute:\n* provide the argument `monitoring_job` on the command line",
          },
        },
        {
          name: "resume",
          description:
            "Resume a paused Vertex AI model deployment monitoring job",
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
            flag12388,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job.\n+\nTo set the `name` attribute:\n* provide the argument `monitoring_job` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an Vertex AI model deployment monitoring job",
          options: [
            flag42,
            flag46,
            flag507,
            flag538,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--display-name",
              description:
                "Display name of the model deployment monitoring job",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--emails",
              description:
                "Comma-separated email address list. e.g. --emails=a@gmail.com,b@gmail.com",
              args: { name: "EMAILS", description: "List", suggestions: [] },
            },
            flag4768,
            flag4770,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7367,
            flag8009,
            {
              name: "--monitoring-frequency",
              description: "Monitoring frequency, unit is 1 hour",
              args: {
                name: "MONITORING_FREQUENCY",
                description: "Int",
                suggestions: [],
              },
            },
            flag10574,
            {
              name: "--prediction-sampling-rate",
              description: "Prediction sampling rate",
              args: {
                name: "PREDICTION_SAMPLING_RATE",
                description: "Float",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12388,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MONITORING_JOB",
            description:
              "ID of the monitoring_job or fully qualified identifier for the monitoring_job.\n+\nTo set the `name` attribute:\n* provide the argument `monitoring_job` on the command line",
          },
        },
      ],
    },
    {
      name: "models",
      description: "Manage Vertex AI models",
      subcommands: [
        {
          name: "copy",
          description: "Copy a model",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination-model-id",
              description:
                "Copy source_model into a new Model with this ID. The ID will become the final component of the model resource name.\nThis value may be up to 63 characters, and valid characters are `[a-z0-9_-]`. The first character cannot be a number or hyphen",
              args: {
                name: "DESTINATION_MODEL_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination-parent-model",
              description:
                "Specify this field to copy source_model into this existing Model as a new version.\nFormat: `projects/{project}/locations/{location}/models/{model}`",
              args: {
                name: "DESTINATION_PARENT_MODEL",
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
              name: "--kms-key-name",
              description:
                "The Cloud KMS resource identifier of the customer managed encryption key\nused to protect the resource.\nHas the form:\n`projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`.\nThe key needs to be in the same region as the destination region of the model to be copied",
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12313,
            {
              name: "--source-model",
              description:
                "The resource name of the Model to copy. That Model must be in the same Project.\nFormat: `projects/{project}/locations/{location}/models/{model}`",
              args: {
                name: "SOURCE_MODEL",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI model",
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
            flag12387,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model.\n+\nTo set the `name` attribute:\n* provide the argument `model` on the command line",
          },
        },
        {
          name: "delete-version",
          description: "Delete an existing Vertex AI model version",
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
                "Cloud region for the model.\n+\nTo set the `region` attribute:\n* provide the argument `model_version` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MODEL_VERSION",
            description:
              "ID of the model or fully qualified identifier for the model.\n+\nTo set the `name` attribute:\n* provide the argument `model_version` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Get detailed model information about the given model id",
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
            flag12387,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model.\n+\nTo set the `name` attribute:\n* provide the argument `model` on the command line",
          },
        },
        {
          name: "list",
          description: "List the models of the given project and region",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-version",
          description: "List the model versions of the given region and model",
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
            flag12387,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "MODEL",
            description:
              "ID of the model or fully qualified identifier for the model.\n+\nTo set the `name` attribute:\n* provide the argument `model` on the command line",
          },
        },
        {
          name: "upload",
          description: "Upload a new model",
          options: [
            flag42,
            flag46,
            {
              name: "--artifact-uri",
              description:
                "Path to the directory containing the Model artifact and any of its\nsupporting files",
              args: {
                name: "ARTIFACT_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag2357,
            flag2358,
            flag2366,
            flag2370,
            flag2374,
            flag2375,
            flag2376,
            flag2377,
            flag2378,
            {
              name: "--container-image-uri",
              description:
                "URI of the Model serving container file in the Container Registry\n(e.g. gcr.io/myproject/server:latest)",
              args: {
                name: "CONTAINER_IMAGE_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag2396,
            flag2399,
            flag2407,
            flag2408,
            flag2409,
            flag2410,
            {
              name: "--description",
              description: "Description of the model",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "Display name of the model",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--explanation-metadata-file",
              description:
                "Path to a local JSON file that contains the metadata describing the Model's input and output for explanation",
              args: {
                name: "EXPLANATION_METADATA_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--explanation-method",
              description:
                "Method used for explanation. Accepted values are `integrated-gradients`, `xrai` and `sampled-shapley`",
              args: {
                name: "EXPLANATION_METHOD",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--explanation-path-count",
              description:
                "Number of feature permutations to consider when approximating the Shapley values for explanation",
              args: {
                name: "EXPLANATION_PATH_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--explanation-step-count",
              description:
                "Number of steps to approximate the path integral for explanation",
              args: {
                name: "EXPLANATION_STEP_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                "Labels with user-defined metadata to organize your Models.\n+\nLabel keys and values can be no longer than 64 characters\n(Unicode codepoints), can only contain lowercase letters, numeric\ncharacters, underscores and dashes. International characters are allowed.\n+\nSee https://goo.gl/xmQnxf for more information and examples of labels",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            {
              name: "--model-id",
              description:
                "ID to use for the uploaded Model, which will become the final component of the model resource name",
              args: {
                name: "MODEL_ID",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--parent-model",
              description:
                "Resource name of the model into which to upload the version. Only specify this field when uploading a new version.\n+\nValue should be provided in format: projects/``PROJECT_ID''/locations/``REGION''/models/``PARENT_MODEL_ID''",
              args: {
                name: "PARENT_MODEL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12313,
            {
              name: "--smooth-grad-noise-sigma",
              description:
                "Single float value used to add noise to all the features for explanation. Only applicable to explanation method `integrated-gradients` or `xrai`",
              args: {
                name: "SMOOTH_GRAD_NOISE_SIGMA",
                description: "Float",
                suggestions: [],
              },
            },
            {
              name: "--smooth-grad-noise-sigma-by-feature",
              description:
                "Noise sigma by features for explanation. Noise sigma represents the standard deviation of the gaussian kernel that will be used to add noise to interpolated inputs prior to computing gradients. Only applicable to explanation method `integrated-gradients` or `xrai`",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            {
              name: "--smooth-grad-noisy-sample-count",
              description:
                "Number of gradient samples used for approximation at explanation. Only applicable to explanation method `integrated-gradients` or `xrai`",
              args: {
                name: "SMOOTH_GRAD_NOISY_SAMPLE_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--version-aliases",
              description:
                "Aliases used to reference a model version instead of auto-generated version ID. The aliases mentioned in the flag will replace the aliases set in the model",
              args: {
                name: "VERSION_ALIASES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--version-description",
              description: "Description of the model version",
              args: {
                name: "VERSION_DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
          ],
        },
      ],
    },
    {
      name: "operations",
      description: "Manage Vertex AI operations",
      subcommands: [
        {
          name: "describe",
          description:
            "Gets detailed index information about the given operation id",
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
              name: "--index",
              description:
                "ID of the index. Applies to operations belongs to an index resource. Do not set otherwise",
              args: { name: "INDEX", description: "String", suggestions: [] },
            },
            {
              name: "--index-endpoint",
              description:
                "ID of the index endpoint. Applies to operations belongs to an index endpoint resource. Do not set otherwise",
              args: {
                name: "INDEX_ENDPOINT",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Cloud region for the operation.\n+\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `ai/region`;\n* choose one from the prompted list of available regions",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OPERATION",
            description:
              "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `name` attribute:\n* provide the argument `operation` on the command line",
          },
        },
      ],
    },
    {
      name: "persistent-resources",
      description: "Create and manage Vertex AI persistent resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new persistent resource",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--config",
              description:
                "Path to the Persistent Resource configuration file. This file should be a\nYAML document containing a list of `ResourcePool`\nIf an option is specified both in the configuration file **and** via\ncommand-line arguments, the command-line arguments override the\nconfiguration file. Note that keys with underscore are invalid.\n+\nExample(YAML):\n+\n  resourcePoolSpecs:\n    machineSpec:\n      machineType: n1-standard-4\n    replicaCount: 1",
              args: { name: "CONFIG", description: "String", suggestions: [] },
            },
            flag2292,
            {
              name: "--display-name",
              description: "Display name of the Persistent Resource",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-custom-service-account",
              description:
                "Whether or not to use a custom user-managed service account with this\nPersistent Resource",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            flag8234,
            {
              name: "--persistent-resource-id",
              description: "User-specified ID of the Persistent Resource",
              args: {
                name: "PERSISTENT_RESOURCE_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12313,
            {
              name: "--resource-pool-spec",
              description:
                "Defines a resource pool to be created in the Persistent Resource. You can\ninclude multiple resource pool specs in order to create a Persistent\nResource with multiple resource pools.\n+\nThe spec can contain the following fields:\n+\n*machine-type*::: (Required): The type of the machine.\n  see https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types\n  for supported types. This field corresponds to the `machineSpec.machineType`\n  field in `ResourcePool` API message.\n*replica-count*::: (Required if autoscaling not enabled) The number of\n  replicas to use when creating this resource pool. This field\n  corresponds to the replicaCount field in 'ResourcePool' API message.\n*min-replica-count*::: (Optional) The minimum number of replicas that\n  autoscaling will down-size to for this resource pool. Both\n  min-replica-count and max-replica-count are required to enable\n  autoscaling on this resource pool. The value for this parameter must be\n  at least 1.\n*max-replica-count*::: (Optional) The maximum number of replicas that\n  autoscaling will create for this resource pool. Both min-replica-count\n  and max-replica-count are required to enable autoscaling on this\n  resource pool. The maximum value for this parameter is 1000.\n*accelerator-type*::: (Optional) The type of GPU to attach to the\n  machines.\n  see https://cloud.google.com/vertex-ai/docs/training/configure-compute#specifying_gpus\n  for more requirements. This field corresponds to the `machineSpec.acceleratorType`\n  field in `ResourcePool` API message.\n*accelerator-count*::: (Required with accelerator-type) The number of GPUs\n  for each VM in the resource pool to use. The default the value if 1.\n  This field corresponds to the `machineSpec.acceleratorCount` field in\n  `ResourcePool` API message.\n*disk-type*::: (Optional) The type of disk to use for each machine's boot disk in\n  the resource pool. The default is `pd-standard`. This field corresponds\n  to the `diskSpec.bootDiskType` field in `ResourcePool` API message.\n*disk-size*::: (Optional) The disk size in Gb for each machine's boot disk in the\n  resource pool. The default is `100`. This field corresponds to\n  the `diskSpec.bootDiskSizeGb` field in `ResourcePool` API message.\n+\n\n::::\nExample:\n--worker-pool-spec=replica-count=1,machine-type=n1-highmem-2",
              args: {
                name: "RESOURCE_POOL_SPEC",
                description: "Dict",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an active Persistent Resource",
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
            flag12390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PERSISTENT_RESOURCE",
            description:
              "ID of the persistent resource or fully qualified identifier for the persistent resource.\n+\nTo set the `name` attribute:\n* provide the argument `persistent_resource` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Get detailed information about a PersistentResource with a given id",
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
            flag12390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PERSISTENT_RESOURCE",
            description:
              "ID of the persistent resource or fully qualified identifier for the persistent resource.\n+\nTo set the `name` attribute:\n* provide the argument `persistent_resource` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists the active persistent resources",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "reboot",
          description: "Reboot a Persistent Resource",
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
            flag12390,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PERSISTENT_RESOURCE",
            description:
              "ID of the persistent resource or fully qualified identifier for the persistent resource.\n+\nTo set the `name` attribute:\n* provide the argument `persistent_resource` on the command line",
          },
        },
      ],
    },
    {
      name: "tensorboards",
      description: "Manage Vertex AI Tensorboards",
      subcommands: [
        {
          name: "create",
          description: "Create a new Vertex AI Tensorboard",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3240,
            {
              name: "--display-name",
              description: "Display name of the tensorboard",
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
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            flag7356,
            flag11637,
            flag11946,
            flag12313,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete an existing Vertex AI Tensorboard",
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
            flag12391,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TENSORBOARD",
            description:
              "ID of the tensorboard or fully qualified identifier for the tensorboard.\n+\nTo set the `name` attribute:\n* provide the argument `tensorboard` on the command line",
          },
        },
        {
          name: "describe",
          description:
            "Gets detailed Tensorboard information about the given Tensorboard id",
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
            flag12391,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TENSORBOARD",
            description:
              "ID of the tensorboard or fully qualified identifier for the tensorboard.\n+\nTo set the `name` attribute:\n* provide the argument `tensorboard` on the command line",
          },
        },
        {
          name: "list",
          description: "Lists the Tensorboards of the given project and region",
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
            flag12313,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update an existing Vertex AI Tensorboard",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag3240,
            {
              name: "--display-name",
              description: "Display name of the tensorboard",
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
            flag11637,
            flag11946,
            flag12391,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TENSORBOARD",
            description:
              "ID of the tensorboard or fully qualified identifier for the tensorboard.\n+\nTo set the `name` attribute:\n* provide the argument `tensorboard` on the command line",
          },
        },
      ],
    },
    {
      name: "tuning-jobs",
      description: "Manage Vertex AI tuning jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running tuning job",
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
            flag12392,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TUNING_JOB",
            description:
              "ID of the tuning job or fully qualified identifier for the tuning job.\n+\nTo set the `name` attribute:\n* provide the argument `tuning_job` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a supervised fine-tuning job",
          options: [
            flag42,
            flag46,
            {
              name: "--adapter-size",
              description:
                "Adapter size for parameter-efficient fine-tuning. This is only applicable when using a PEFT-compatible model. _ADAPTER_SIZE_ must be one of: *1*, *2*, *4*, *8*, *16*, *32*",
              args: {
                name: "ADAPTER_SIZE",
                description: "String",
                suggestions: ["1", "2", "4", "8", "16", "32"],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Description of the tuning job",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--epoch-count",
              description:
                "Number of training epochs. If not set, a default value will be calculated based on the training dataset size",
              args: {
                name: "EPOCH_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--export-last-checkpoint-only",
              description:
                "If set, disable intermediate checkpoints for the tuning job and only export the last checkpoint. Default is to enable intermediate checkpoints",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6327,
            flag6336,
            flag6344,
            flag6353,
            flag6413,
            {
              name: "--learning-rate-multiplier",
              description:
                "Multiplier for adjusting the default learning rate. Only applicable to Gemini models. Mutually exclusive with `--learning-rate`. If neither flag is set, a default value will be calculated based on the training dataset size",
              args: {
                name: "LEARNING_RATE_MULTIPLIER",
                description: "Float",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12313,
            {
              name: "--service-account",
              description:
                "The service account that the tuning job runs as. If not specified, the Vertex AI Custom Code Service Agent is used",
              args: {
                name: "SERVICE_ACCOUNT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-model",
              description:
                "The base model to tune, e.g. ``gemini-1.0-pro-002`` or ``meta/llama3_1@llama-3.1-8b``. To start tuning from a custom checkpoint or a previously tuned open model, also pass ``--custom-base-model``",
              args: {
                name: "SOURCE_MODEL",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--training-dataset-uri",
              description:
                "Cloud Storage URI of the training dataset. The dataset must be formatted as a JSONL file",
              args: {
                name: "TRAINING_DATASET_URI",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--tuned-model-display-name",
              description: "Display name of the tuned model",
              args: {
                name: "TUNED_MODEL_DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            {
              name: "--validation-dataset-uri",
              description:
                "Cloud Storage URI of the optional validation dataset. The dataset must be formatted as a JSONL file",
              args: {
                name: "VALIDATION_DATASET_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
        },
        {
          name: "describe",
          description:
            "Get detail information about the tuning job by given id",
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
            flag12392,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TUNING_JOB",
            description:
              "ID of the tuning job or fully qualified identifier for the tuning job.\n+\nTo set the `name` attribute:\n* provide the argument `tuning_job` on the command line",
          },
        },
        {
          name: "list",
          description: "List existing tuning jobs",
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
            flag12313,
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
