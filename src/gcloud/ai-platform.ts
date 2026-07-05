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
const flag3228: Fig.Option = {
  name: "--description",
  description: "Description of the model",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3243: Fig.Option = {
  name: "--description",
  description: "Description of the version",
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
const flag5106: Fig.Option = {
  name: "--framework",
  description:
    "ML framework used to train this version of the model. If not specified, defaults to 'tensorflow'. _FRAMEWORK_ must be one of: *scikit-learn*, *tensorflow*, *xgboost*",
  args: {
    name: "FRAMEWORK",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["scikit-learn", "tensorflow", "xgboost"],
  },
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
const flag6139: Fig.Option = {
  name: "--json-instances",
  description:
    'Path to a local file from which instances are read.\nInstances are in JSON format; newline delimited.\n+\nAn example of the JSON instances file:\n+\n    {"images": [0.0, ..., 0.1], "key": 3}\n    {"images": [0.0, ..., 0.1], "key": 2}\n    ...\n+\nThis flag accepts "-" for stdin',
  args: { name: "JSON_INSTANCES", description: "String", suggestions: [] },
};
const flag6147: Fig.Option = {
  name: "--json-request",
  description:
    'Path to a local file containing the body of JSON request.\n+\nAn example of a JSON request:\n+\n    {\n      "instances": [\n        {"x": [1, 2], "y": [3, 4]},\n        {"x": [-1, -2], "y": [-3, -4]}\n      ]\n    }\n+\nThis flag accepts "-" for stdin',
  args: { name: "JSON_REQUEST", description: "String", suggestions: [] },
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
const flag7966: Fig.Option = {
  name: "--model",
  description: "Name of the model",
  args: { name: "MODEL", description: "String", suggestions: [] },
};
const flag11039: Fig.Option = {
  name: "--package-path",
  description:
    "Path to a Python package to build. This should point to a *local* directory\ncontaining the Python source for the job. It will be built using *setuptools*\n(which must be installed) using its *parent* directory as context. If the parent\ndirectory contains a `setup.py` file, the build will use that; otherwise,\nit will use a simple built-in one",
  args: { name: "PACKAGE_PATH", description: "String", suggestions: [] },
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
const flag12463: Fig.Option = {
  name: "--region",
  description:
    "Google Cloud region of the regional endpoint to use for this command.\nIf unspecified, the command uses the global endpoint of the AI Platform Training\nand Prediction API.\n+\nLearn more about regional endpoints and see a list of available regions:\n https://cloud.google.com/ai-platform/prediction/docs/regional-endpoints\n+\n_REGION_ must be one of: *asia-east1*, *asia-northeast1*, *asia-southeast1*, *australia-southeast1*, *europe-west1*, *europe-west2*, *europe-west3*, *europe-west4*, *northamerica-northeast1*, *us-central1*, *us-east1*, *us-east4*, *us-west1*",
  args: {
    name: "REGION",
    description: "String",
    suggestions: [
      "asia-east1",
      "asia-northeast1",
      "asia-southeast1",
      "australia-southeast1",
      "europe-west1",
      "europe-west2",
      "europe-west3",
      "europe-west4",
      "northamerica-northeast1",
      "us-central1",
      "us-east1",
      "us-east4",
      "us-west1",
    ],
  },
};
const flag12466: Fig.Option = {
  name: "--region",
  description:
    "Google Cloud region of the regional endpoint to use for this command.\nFor the global endpoint, the region needs to be specified as `global`.\n+\nLearn more about regional endpoints and see a list of available regions:\n https://cloud.google.com/ai-platform/prediction/docs/regional-endpoints\n+\n_REGION_ must be one of: *global*, *asia-east1*, *asia-northeast1*, *asia-southeast1*, *australia-southeast1*, *europe-west1*, *europe-west2*, *europe-west3*, *europe-west4*, *northamerica-northeast1*, *us-central1*, *us-east1*, *us-east4*, *us-west1*",
  args: {
    name: "REGION",
    description: "String",
    suggestions: [
      "global",
      "asia-east1",
      "asia-northeast1",
      "asia-southeast1",
      "australia-southeast1",
      "europe-west1",
      "europe-west2",
      "europe-west3",
      "europe-west4",
      "northamerica-northeast1",
      "us-central1",
      "us-east1",
      "us-east4",
      "us-west1",
    ],
  },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag13240: Fig.Option = {
  name: "--runtime-version",
  description:
    "AI Platform runtime version for this job. Must be specified unless --master-image-uri is specified instead. It is defined in documentation along with the list of supported versions: https://cloud.google.com/ai-platform/prediction/docs/runtime-version-list",
  args: { name: "RUNTIME_VERSION", description: "String", suggestions: [] },
};
const flag13807: Fig.Option = {
  name: "--signature-name",
  description:
    'Name of the signature defined in the SavedModel to use for\nthis job. Defaults to DEFAULT_SERVING_SIGNATURE_DEF_KEY in\nhttps://www.tensorflow.org/api_docs/python/tf/compat/v1/saved_model/signature_constants,\nwhich is "serving_default". Only applies to TensorFlow models',
  args: { name: "SIGNATURE_NAME", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14346: Fig.Option = {
  name: "--staging-bucket",
  description:
    "Bucket in which to stage training archives.\n+\nRequired only if a file upload is necessary (that is, other flags\ninclude local paths) and no other flags implicitly specify an upload\npath",
  args: {
    name: "STAGING_BUCKET",
    description: "Googlecloudsdk.api_lib.storage.storage_util:FromArgument",
    suggestions: [],
  },
};
const flag14840: Fig.Option = {
  name: "--text-instances",
  description:
    'Path to a local file from which instances are read.\nInstances are in UTF-8 encoded text format; newline delimited.\n+\nAn example of the text instances file:\n+\n    107,4.9,2.5,4.5,1.7\n    100,5.7,2.8,4.1,1.3\n    ...\n+\nThis flag accepts "-" for stdin',
  args: { name: "TEXT_INSTANCES", description: "String", suggestions: [] },
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
  name: "ai-platform",
  description: "Manage AI Platform jobs and models",
  subcommands: [
    {
      name: "jobs",
      description: "AI Platform Jobs commands",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a running AI Platform job",
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
          args: { name: "JOB", description: "Name of the job" },
        },
        {
          name: "describe",
          description: "Describe an AI Platform job",
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
              name: "--summarize",
              description:
                "Summarize job output in a set of human readable tables instead of\nrendering the entire resource as json or yaml. The tables currently rendered\nare:\n+\n* `Job Overview`: Overview of job including, jobId, status and create time.\n* `Training Input Summary`: Summary of input for a training job including\n   region, main training python module and scale tier.\n* `Training Output Summary`: Summary of output for a training job including\n   the amount of ML units consumed by the job.\n* `Training Output Trials`: Summary of hyperparameter trials run for a\n   hyperparameter tuning training job.\n* `Predict Input Summary`: Summary of input for a prediction job including\n   region, model verion and output path.\n* `Predict Output Summary`: Summary of output for a prediction job including\n   prediction count and output path.\n+\nThis flag overrides the `--format` flag. If\nboth are present on the command line, a warning is displayed",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "JOB", description: "Name of the job" },
        },
        {
          name: "list",
          description: "List existing AI Platform jobs",
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
          name: "stream-logs",
          description: "Show logs from a running AI Platform job",
          options: [
            flag42,
            flag46,
            {
              name: "--allow-multiline-logs",
              description: "Output multiline log messages as single records",
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
              name: "--polling-interval",
              description:
                "Number of seconds to wait between efforts to fetch the latest log messages. Overrides the default *ml_engine/polling_interval* property value for this command invocation",
              args: {
                name: "POLLING_INTERVAL",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--task-name",
              description:
                "If set, display only the logs for this particular task",
              args: {
                name: "TASK_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "JOB", description: "Name of the job" },
        },
        {
          name: "submit",
          description: "AI Platform Jobs submit commands",
          subcommands: [
            {
              name: "prediction",
              description: "Start an AI Platform batch prediction job",
              options: [
                flag42,
                flag46,
                {
                  name: "--batch-size",
                  description:
                    "The number of records per batch. The service will buffer batch_size number of records in memory before invoking TensorFlow. Defaults to 64 if not specified",
                  args: {
                    name: "BATCH_SIZE",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                {
                  name: "--data-format",
                  description:
                    "Data format of the input files. _DATA_FORMAT_ must be one of:\n+\n*text*::: Text and JSON files; for text files, see https://www.tensorflow.org/guide/datasets#consuming_text_data, for JSON files, see https://cloud.google.com/ai-platform/prediction/docs/overview#batch_prediction_input_data\n*tf-record*::: TFRecord files; see https://www.tensorflow.org/guide/datasets#consuming_tfrecord_data\n*tf-record-gzip*::: GZIP-compressed TFRecord files.\n:::\n+",
                  args: {
                    name: "DATA_FORMAT",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: ["text", "tf-record", "tf-record-gzip"],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--input-paths",
                  description:
                    'Cloud Storage paths to the instances to run prediction on.\n+\nWildcards (```*```) accepted at the *end* of a path. More than one path can be\nspecified if multiple file patterns are needed. For example,\n+\n  gs://my-bucket/instances*,gs://my-bucket/other-instances1\n+\nwill match any objects whose names start with `instances` in `my-bucket` as well\nas the `other-instances1` bucket, while\n+\n  gs://my-bucket/instance-dir/*\n+\nwill match any objects in the `instance-dir` "directory" (since directories\naren\'t a first-class Cloud Storage concept) of `my-bucket`',
                  args: {
                    name: "INPUT_PATH",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag6413,
                flag7356,
                {
                  name: "--max-worker-count",
                  description:
                    "The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified",
                  args: {
                    name: "MAX_WORKER_COUNT",
                    description: "Int",
                    suggestions: [],
                  },
                },
                {
                  name: "--model",
                  description: "Name of the model to use for prediction",
                  args: {
                    name: "MODEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--model-dir",
                  description:
                    "Cloud Storage location where the model files are located",
                  args: {
                    name: "MODEL_DIR",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--output-path",
                  description:
                    "Cloud Storage path to which to save the output. Example: gs://my-bucket/output",
                  args: {
                    name: "OUTPUT_PATH",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--region",
                  description: "The Compute Engine region to run the job in",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13240,
                flag13807,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "JOB",
                description: "Name of the batch prediction job",
              },
            },
            {
              name: "training",
              description: "Submit an AI Platform training job",
              options: [
                flag42,
                flag46,
                {
                  name: "--async",
                  description:
                    "(DEPRECATED) Display information about the operation in progress without waiting for the operation to complete. Enabled by default and can be omitted; use `--stream-logs` to run synchronously",
                },
                flag1201,
                {
                  name: "--config",
                  description:
                    'Path to the job configuration file. This file should be a YAML document (JSON\nalso accepted) containing a Job resource as defined in the API (all fields are\noptional): https://cloud.google.com/ml/reference/rest/v1/projects.jobs\n+\nEXAMPLES:\n+\nJSON:\n+\n  {\n    "jobId": "my_job",\n    "labels": {\n      "type": "prod",\n      "owner": "alice"\n    },\n    "trainingInput": {\n      "scaleTier": "BASIC",\n      "packageUris": [\n        "gs://my/package/path"\n      ],\n      "region": "us-east1"\n    }\n  }\n+\nYAML:\n+\n  jobId: my_job\n  labels:\n    type: prod\n    owner: alice\n  trainingInput:\n    scaleTier: BASIC\n    packageUris:\n    - gs://my/package/path\n    region: us-east1\n+\n\n+\nIf an option is specified both in the configuration file **and** via command line\narguments, the command line arguments override the configuration file',
                  args: {
                    name: "CONFIG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--enable-web-access",
                  description:
                    "Whether you want AI Platform Training to enable [interactive shell\naccess]\n(https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell)\nto training containers. If set to `true`, you can access interactive\nshells at the URIs given by TrainingOutput.web_access_uris or\nHyperparameterOutput.web_access_uris (within TrainingOutput.trials)",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--job-dir",
                  description:
                    "Cloud Storage path in which to store training outputs and other data\nneeded for training.\n+\nThis path will be passed to your TensorFlow program as the `--job-dir` command-line\narg. The benefit of specifying this field is that AI Platform will validate\nthe path for use in training. However, note that your training program will need\nto parse the provided `--job-dir` argument.\n+\nIf packages must be uploaded and `--staging-bucket` is not provided, this path\nwill be used instead",
                  args: {
                    name: "JOB_DIR",
                    description: "Functools:partial",
                    suggestions: [],
                  },
                },
                {
                  name: "--kms-key",
                  description:
                    "ID of the key or fully qualified identifier for the key.\n+\nTo set the `kms-key` attribute:\n* provide the argument `--kms-key` on the command line",
                  args: {
                    name: "KMS_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kms-keyring",
                  description:
                    "The KMS keyring of the key.\n+\nTo set the `kms-keyring` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-keyring` on the command line",
                  args: {
                    name: "KMS_KEYRING",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kms-location",
                  description:
                    "The Google Cloud location for the key.\n+\nTo set the `kms-location` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-location` on the command line",
                  args: {
                    name: "KMS_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--kms-project",
                  description:
                    "The Google Cloud project for the key.\n+\nTo set the `kms-project` attribute:\n* provide the argument `--kms-key` on the command line with a fully specified name;\n* provide the argument `--kms-project` on the command line;\n* set the property `core/project`",
                  args: {
                    name: "KMS_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6413,
                flag7356,
                {
                  name: "--master-accelerator",
                  description:
                    "Hardware accelerator config for the master worker. Must specify\n   both the accelerator type (TYPE) for each server and the number of\n   accelerators to attach to each server (COUNT).\n+\n\n*type*::: Type of the accelerator. Choices are nvidia-tesla-a100,nvidia-tesla-k80,nvidia-tesla-p100,nvidia-tesla-p4,nvidia-tesla-t4,nvidia-tesla-v100,tpu-v2,tpu-v2-pod,tpu-v3,tpu-v3-pod,tpu-v4-pod\n+\n*count*::: Number of accelerators to attach to each machine running the job. Must be greater than 0",
                  args: {
                    name: "MASTER_ACCELERATOR",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--master-image-uri",
                  description:
                    "Docker image to run on each master worker. This image must be in Container Registry. Only one of `--master-image-uri` and `--runtime-version` must be specified",
                  args: {
                    name: "MASTER_IMAGE_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--master-machine-type",
                  description:
                    "Specifies the type of virtual machine to use for training job's master worker.\n+\nYou must set this value when `--scale-tier` is set to `CUSTOM`",
                  args: {
                    name: "MASTER_MACHINE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--module-name",
                  description: "Name of the module to run",
                  args: {
                    name: "MODULE_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11039,
                {
                  name: "--packages",
                  description:
                    "Path to Python archives used for training. These can be local paths\n(absolute or relative), in which case they will be uploaded to the Cloud\nStorage bucket given by `--staging-bucket`, or Cloud Storage URLs\n('gs://bucket-name/path/to/package.tar.gz')",
                  args: {
                    name: "PACKAGE",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--parameter-server-accelerator",
                  description:
                    "Hardware accelerator config for the parameter servers. Must specify\n   both the accelerator type (TYPE) for each server and the number of\n   accelerators to attach to each server (COUNT).\n+\n\n*type*::: Type of the accelerator. Choices are nvidia-tesla-a100,nvidia-tesla-k80,nvidia-tesla-p100,nvidia-tesla-p4,nvidia-tesla-t4,nvidia-tesla-v100,tpu-v2,tpu-v2-pod,tpu-v3,tpu-v3-pod,tpu-v4-pod\n+\n*count*::: Number of accelerators to attach to each machine running the job. Must be greater than 0",
                  args: {
                    name: "PARAMETER_SERVER_ACCELERATOR",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--parameter-server-count",
                  description:
                    "Number of parameter servers to use for the training job",
                  args: {
                    name: "PARAMETER_SERVER_COUNT",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--parameter-server-image-uri",
                  description:
                    "Docker image to run on each parameter server. This image must be in Container Registry. If not specified, the value of `--master-image-uri` is used",
                  args: {
                    name: "PARAMETER_SERVER_IMAGE_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--parameter-server-machine-type",
                  description:
                    "Type of virtual machine to use for training job's parameter servers. This flag must be specified if any of the other arguments in this group are specified machine to use for training job's parameter servers",
                  args: {
                    name: "PARAMETER_SERVER_MACHINE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                {
                  name: "--python-version",
                  description:
                    "Version of Python used during training. Choices are 3.7, 3.5, and 2.7.\nHowever, this value must be compatible with the chosen runtime version\nfor the job.\n+\nMust be used with a compatible runtime version:\n+\n* 3.7 is compatible with runtime versions 1.15 and later.\n* 3.5 is compatible with runtime versions 1.4 through 1.14.\n* 2.7 is compatible with runtime versions 1.15 and earlier",
                  args: {
                    name: "PYTHON_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                {
                  name: "--region",
                  description:
                    "Region of the machine learning training job to submit. If not specified, you might be prompted to select a region (interactive mode\nonly).\n+\nTo avoid prompting when this flag is omitted, you can set the\n``compute/region'' property:\n+\n  $ gcloud config set compute/region REGION\n+\nA list of regions can be fetched by running:\n+\n  $ gcloud compute regions list\n+\nTo unset the property, run:\n+\n  $ gcloud config unset compute/region\n+\nAlternatively, the region can be stored in the environment\nvariable ``CLOUDSDK_COMPUTE_REGION''",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13240,
                {
                  name: "--scale-tier",
                  description:
                    "Specify the machine types, the number of replicas for workers, and parameter servers. _SCALE_TIER_ must be one of:\n+\n*basic*::: Single worker instance. This tier is suitable for learning how to use AI Platform, and for experimenting with new models using small datasets.\n*basic-gpu*::: Single worker instance with a GPU.\n*basic-tpu*::: Single worker instance with a Cloud TPU.\n*custom*::: CUSTOM tier is not a set tier, but rather enables you to use your own\ncluster specification. When you use this tier, set values to configure your\nprocessing cluster according to these guidelines (using the `--config` flag):\n+\n* You _must_ set `TrainingInput.masterType` to specify the type of machine to\n  use for your master node. This is the only required setting.\n* You _may_ set `TrainingInput.workerCount` to specify the number of workers to\n  use. If you specify one or more workers, you _must_ also set\n  `TrainingInput.workerType` to specify the type of machine to use for your\n  worker nodes.\n* You _may_ set `TrainingInput.parameterServerCount` to specify the number of\n  parameter servers to use. If you specify one or more parameter servers, you\n  _must_ also set `TrainingInput.parameterServerType` to specify the type of\n  machine to use for your parameter servers.  Note that all of your workers must\n  use the same machine type, which can be different from your parameter server\n  type and master type. Your parameter servers must likewise use the same\n  machine type, which can be different from your worker type and master type.\n*premium-1*::: Large number of workers with many parameter servers.\n*standard-1*::: Many workers and a few parameter servers.\n:::\n+",
                  args: {
                    name: "SCALE_TIER",
                    description:
                      "Googlecloudsdk.calliope.base:_ChoiceValueType",
                    suggestions: [
                      "basic",
                      "basic-gpu",
                      "basic-tpu",
                      "custom",
                      "premium-1",
                      "standard-1",
                    ],
                  },
                },
                {
                  name: "--service-account",
                  description:
                    "The email address of a service account to use when running the\ntraining appplication. You must have the `iam.serviceAccounts.actAs`\npermission for the specified service account. In addition, the AI Platform\nTraining Google-managed service account must have the\n`roles/iam.serviceAccountAdmin` role for the specified service account.\n[Learn more about configuring a service\naccount.](https://cloud.google.com/ai-platform/training/docs/custom-service-account)\nIf not specified, the AI Platform Training Google-managed service account\nis used by default",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag14346,
                {
                  name: "--stream-logs",
                  description:
                    "Block until job completion and stream the logs while the job runs.\n+\nNote that even if command execution is halted, the job will still run until cancelled with\n+\n    $ gcloud ai-platform jobs cancel JOB_ID",
                },
                flag14975,
                {
                  name: "--use-chief-in-tf-config",
                  description:
                    'Use "chief" role in the cluster instead of "master". This is required for TensorFlow 2.0 and newer versions. Unlike "master" node, "chief" node does not run evaluation',
                  args: {
                    name: "USE_CHIEF_IN_TF_CONFIG",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                {
                  name: "--worker-accelerator",
                  description:
                    "Hardware accelerator config for the worker nodes. Must specify\n   both the accelerator type (TYPE) for each server and the number of\n   accelerators to attach to each server (COUNT).\n+\n\n*type*::: Type of the accelerator. Choices are nvidia-tesla-a100,nvidia-tesla-k80,nvidia-tesla-p100,nvidia-tesla-p4,nvidia-tesla-t4,nvidia-tesla-v100,tpu-v2,tpu-v2-pod,tpu-v3,tpu-v3-pod,tpu-v4-pod\n+\n*count*::: Number of accelerators to attach to each machine running the job. Must be greater than 0",
                  args: {
                    name: "WORKER_ACCELERATOR",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--worker-count",
                  description:
                    "Number of worker nodes to use for the training job",
                  args: {
                    name: "WORKER_COUNT",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--worker-image-uri",
                  description:
                    "Docker image to run on each worker node. This image must be in Container Registry. If not specified, the value of `--master-image-uri` is used",
                  args: {
                    name: "WORKER_IMAGE_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--worker-machine-type",
                  description:
                    "Type of virtual machine to use for training job's worker nodes",
                  args: {
                    name: "WORKER_MACHINE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: [
                { name: "JOB", description: "Name of the job" },
                {
                  name: "USER_ARGS",
                  description:
                    "Additional user arguments to be forwarded to user code\n+\nThe '--' argument must be specified between gcloud specific args on the left and USER_ARGS on the right",
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update an AI Platform job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: { name: "JOB", description: "Name of the job" },
        },
      ],
    },
    {
      name: "local",
      description: "AI Platform Local commands",
      subcommands: [
        {
          name: "predict",
          description: "Run prediction locally",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5106,
            flag5453,
            flag5699,
            flag6139,
            flag6147,
            flag7356,
            {
              name: "--model-dir",
              description: "Path to the model",
              args: {
                name: "MODEL_DIR",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag13807,
            flag14840,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "train",
          description: "Run an AI Platform training job locally",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--distributed",
              description:
                "Runs the provided code in distributed mode by providing cluster configurations as environment variables to subprocesses",
            },
            {
              name: "--evaluator-count",
              description:
                "Number of evaluators with which to run. Ignored if --distributed is not specified. Default: 0",
              args: {
                name: "EVALUATOR_COUNT",
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
              name: "--job-dir",
              description:
                "Cloud Storage path or local_directory in which to store training outputs and other data\nneeded for training.\n+\nThis path will be passed to your TensorFlow program as the `--job-dir` command-line\narg. The benefit of specifying this field is that AI Platform will validate\nthe path for use in training. However, note that your training program will need\nto parse the provided `--job-dir` argument",
              args: { name: "JOB_DIR", description: "String", suggestions: [] },
            },
            flag7356,
            {
              name: "--module-name",
              description: "Name of the module to run",
              args: {
                name: "MODULE_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11039,
            {
              name: "--parameter-server-count",
              description:
                "Number of parameter servers with which to run. Ignored if --distributed is not specified. Default: 2",
              args: {
                name: "PARAMETER_SERVER_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--start-port",
              description:
                "Start of the range of ports reserved by the local cluster. This command will use\na contiguous block of ports equal to parameter-server-count + worker-count + 1.\n+\nIf --distributed is not specified, this flag is ignored",
              args: { name: "START_PORT", description: "Int", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--worker-count",
              description:
                "Number of workers with which to run. Ignored if --distributed is not specified. Default: 2",
              args: {
                name: "WORKER_COUNT",
                description: "Int",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "USER_ARGS",
            description:
              "Additional user arguments to be forwarded to user code. Any relative paths will\nbe relative to the *parent* directory of `--package-path`.\n+\n+\nThe '--' argument must be specified between gcloud specific args on the left and USER_ARGS on the right",
          },
        },
      ],
    },
    {
      name: "models",
      description: "AI Platform Models commands",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a model",
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
              name: "--member",
              description:
                "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12466,
            {
              name: "--role",
              description:
                "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "MODEL", description: "Name of the model" },
        },
        {
          name: "create",
          description: "Create a new AI Platform model",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3228,
            {
              name: "--enable-logging",
              description:
                "If set, enables StackDriver Logging for online prediction. These logs are like standard server access logs, containing information such as timestamps and latency for each request",
            },
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
              name: "--region",
              description:
                "Google Cloud region of the regional endpoint to use for this command.\n+\nIf you specify this flag, do not specify `--regions`.\n+\nIf you specify `--region=global`, the model will be deployed to 'us-central1'\nby default using the global endpoint. Please use `--regions` only if you want\nto change the region where the model will be deployed against the global\nendpoint.\n+\nIf both flags are unspecified and you don't set ``ai_platform/region'', you will\nbe prompted for region of the regional endpoint.\n+\nLearn more about regional endpoints and see a list of available regions:\n https://cloud.google.com/ai-platform/prediction/docs/regional-endpoints\n+\n_REGION_ must be one of: *global*, *asia-east1*, *asia-northeast1*, *asia-southeast1*, *australia-southeast1*, *europe-west1*, *europe-west2*, *europe-west3*, *europe-west4*, *northamerica-northeast1*, *us-central1*, *us-east1*, *us-east4*, *us-west1*",
              args: {
                name: "REGION",
                description: "String",
                suggestions: [
                  "global",
                  "asia-east1",
                  "asia-northeast1",
                  "asia-southeast1",
                  "australia-southeast1",
                  "europe-west1",
                  "europe-west2",
                  "europe-west3",
                  "europe-west4",
                  "northamerica-northeast1",
                  "us-central1",
                  "us-east1",
                  "us-east4",
                  "us-west1",
                ],
              },
            },
            {
              name: "--regions",
              description:
                "The Google Cloud region where the model will be deployed (currently only a\nsingle region is supported) against the global endpoint.\n+\nIf you specify this flag, do not specify `--region`.\n+\nDefaults to 'us-central1' while using the global endpoint",
              args: { name: "REGION", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "MODEL", description: "Name of the model" },
        },
        {
          name: "delete",
          description: "Delete an existing AI Platform model",
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
            flag12466,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "MODEL", description: "Name of the model" },
        },
        {
          name: "describe",
          description: "Describe an existing AI Platform model",
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
            flag12466,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "MODEL", description: "Name of the model" },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a model",
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
            flag12466,
            flag13948,
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
          description: "List existing AI Platform models",
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
            flag12466,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a model",
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
              name: "--member",
              description:
                "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
              args: {
                name: "PRINCIPAL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12466,
            {
              name: "--role",
              description: "The role to remove the principal from",
              args: { name: "ROLE", description: "String", suggestions: [] },
            },
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a model",
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
            flag12466,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "MODEL",
              description:
                "ID of the model or fully qualified identifier for the model.\n+\nTo set the `name` attribute:\n* provide the argument `model` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing AI Platform model",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            flag2292,
            flag3228,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12466,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: { name: "MODEL", description: "Name of the model" },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage AI Platform operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel an AI Platform operation",
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
            flag12463,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION", description: "Name of the operation" },
        },
        {
          name: "describe",
          description: "Describe an AI Platform operation",
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
            flag12463,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION", description: "Name of the operation" },
        },
        {
          name: "list",
          description: "List existing AI Platform jobs",
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
            flag12463,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "wait",
          description: "Wait for an AI Platform operation to complete",
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
            flag12463,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "OPERATION", description: "Name of the operation" },
        },
      ],
    },
    {
      name: "predict",
      description: "Run AI Platform online prediction",
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
        flag6139,
        flag6147,
        flag7356,
        flag7966,
        flag11637,
        flag11946,
        flag12466,
        flag13807,
        flag14840,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "versions",
      description: "AI Platform Versions commands",
      subcommands: [
        {
          name: "create",
          description: "Create a new AI Platform version",
          options: [
            {
              name: "--accelerator",
              description:
                "Manage the accelerator config for GPU serving. When deploying a model with\nCompute Engine Machine Types, a GPU accelerator may also\nbe selected.\n+\n*type*::: The type of the accelerator. Choices are 'nvidia-tesla-a100', 'nvidia-tesla-k80', 'nvidia-tesla-p100', 'nvidia-tesla-p4', 'nvidia-tesla-t4', 'nvidia-tesla-v100'.\n+\n*count*::: The number of accelerators to attach to each machine running the job.\n If not specified, the default value is 1. Your model must be specially designed\nto accommodate more than 1 accelerator per machine. To configure how many\nreplicas your model has, set the `manualScaling` or `autoScaling`\nparameters",
              args: {
                name: "ACCELERATOR",
                description: "Dict",
                suggestions: [],
              },
            },
            flag42,
            flag46,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            flag1201,
            {
              name: "--config",
              description:
                "Path to a YAML configuration file containing configuration parameters\nfor the\n[Version](https://cloud.google.com/ai-platform/prediction/docs/reference/rest/v1/projects.models.versions)\nto create.\n+\nThe file is in YAML format. Note that not all attributes of a version\nare configurable; available attributes (with example values) are:\n+\n    description: A free-form description of the version.\n    deploymentUri: gs://path/to/source\n    runtimeVersion: '2.1'\n    #  Set only one of either manualScaling or autoScaling.\n    manualScaling:\n      nodes: 10  # The number of nodes to allocate for this model.\n    autoScaling:\n      minNodes: 0  # The minimum number of nodes to allocate for this model.\n    labels:\n      user-defined-key: user-defined-value\n+\nThe name of the version must always be specified via the required\nVERSION argument.\n+\nOnly one of manualScaling or autoScaling can be specified. If both\nare specified in same yaml file an error will be returned.\n+\nIf an option is specified both in the configuration file and via\ncommand-line arguments, the command-line arguments override the\nconfiguration file",
              args: { name: "CONFIG", description: "String", suggestions: [] },
            },
            flag2292,
            flag3243,
            flag4900,
            flag4902,
            flag5091,
            flag5106,
            flag5453,
            flag5699,
            flag6413,
            flag7356,
            {
              name: "--machine-type",
              description:
                "Type of machine on which to serve the model. Currently only applies to online prediction. For available machine types,\nsee https://cloud.google.com/ai-platform/prediction/docs/machine-types-online-prediction#available_machine_types",
              args: {
                name: "MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--max-nodes",
              description:
                "The maximum number of nodes to scale this model under load",
              args: { name: "MAX_NODES", description: "Int", suggestions: [] },
            },
            {
              name: "--metric-targets",
              description:
                "List of key-value pairs to set as metrics' target for autoscaling.\nAutoscaling could be based on CPU usage or GPU duty cycle, valid key could be\ncpu-usage or gpu-duty-cycle",
              args: {
                name: "METRIC-NAME=TARGET",
                description: "Dict",
                suggestions: [],
              },
            },
            {
              name: "--min-nodes",
              description:
                "The minimum number of nodes to scale this model under load",
              args: { name: "MIN_NODES", description: "Int", suggestions: [] },
            },
            flag7966,
            {
              name: "--origin",
              description:
                'Location of ```model/``` "directory" (see\nhttps://cloud.google.com/ai-platform/prediction/docs/deploying-models#upload-model).\n+\nThis overrides `deploymentUri` in the `--config` file. If this flag is\nnot passed, `deploymentUri` *must* be specified in the file from\n`--config`.\n+\nCan be a Cloud Storage (`gs://`) path or local file path (no\nprefix). In the latter case the files will be uploaded to Cloud\nStorage and a `--staging-bucket` argument is required',
              args: { name: "ORIGIN", description: "String", suggestions: [] },
            },
            flag11637,
            {
              name: "--python-version",
              description:
                "Version of Python used when creating the version. Choices are 3.7, 3.5, and 2.7.\nHowever, this value must be compatible with the chosen runtime version\nfor the job.\n+\nMust be used with a compatible runtime version:\n+\n* 3.7 is compatible with runtime versions 1.15 and later.\n* 3.5 is compatible with runtime versions 1.4 through 1.14.\n* 2.7 is compatible with runtime versions 1.15 and earlier",
              args: {
                name: "PYTHON_VERSION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag12466,
            flag13240,
            flag14346,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VERSION", description: "Name of the model version" },
        },
        {
          name: "delete",
          description: "Delete an existing AI Platform version",
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
            flag7966,
            flag11637,
            flag11946,
            flag12466,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VERSION", description: "Name of the model version" },
        },
        {
          name: "describe",
          description: "Describe an existing AI Platform version",
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
            flag7966,
            flag11637,
            flag11946,
            flag12466,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VERSION", description: "Name of the model version" },
        },
        {
          name: "list",
          description: "List existing AI Platform versions",
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
            flag7966,
            flag11059,
            flag11637,
            flag11946,
            flag12466,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-default",
          description:
            "Sets an existing AI Platform version as the default for its model",
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
            flag7966,
            flag11637,
            flag11946,
            flag12466,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "VERSION", description: "Name of the model version" },
        },
        {
          name: "update",
          description: "Update an AI Platform version",
          options: [
            flag42,
            flag46,
            flag1201,
            flag1723,
            {
              name: "--config",
              description:
                "Path to a YAML configuration file containing configuration parameters\nfor the\n[version](https://cloud.google.com/ml/reference/rest/v1/projects.models.versions)\nto create.\n+\nThe file is in YAML format. Note that not all attributes of a version\nare configurable; available attributes (with example values) are:\n+\n    description: A free-form description of the version.\n    manualScaling:\n      nodes: 10  # The number of nodes to allocate for this model.\n    autoScaling:\n      minNodes: 0  # The minimum number of nodes to allocate for this model.\n      maxNodes: 1  # The maxinum number of nodes to allocate for this model.\n    requestLoggingconfig:\n      bigqueryTableName: someTable  # Fully qualified BigQuery table name.\n      samplingPercentage: 0.5  # Percentage of requests to be logged.\n+\nThe name of the version must always be specified via the required\nVERSION argument.\n+\nOnly one of manualScaling or autoScaling can be specified. If both\nare specified in same yaml file, an error will be returned.\n+\nLabels cannot currently be set in the config.yaml; please use\nthe command-line flags to alter them.\n+\nIf an option is specified both in the configuration file and via\ncommand-line arguments, the command-line arguments override the\nconfiguration file",
              args: {
                name: "YAML_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag3243,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--model",
              description:
                "Model for the version.\n+\nTo set the `model` attribute:\n* provide the argument `version` on the command line with a fully specified name;\n* provide the argument `--model` on the command line",
              args: { name: "MODEL", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag12466,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VERSION",
            description:
              "ID of the version or fully qualified identifier for the version.\n+\nTo set the `version` attribute:\n* provide the argument `version` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
