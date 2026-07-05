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
const flag295: Fig.Option = {
  name: "--additional-experiments",
  description:
    "Additional experiments to pass to the job. Example: --additional-experiments=experiment1,experiment2=value2",
  args: {
    name: "ADDITIONAL_EXPERIMENTS",
    description: "List",
    suggestions: [],
  },
};
const flag310: Fig.Option = {
  name: "--additional-user-labels",
  description:
    "Additional user labels to pass to the job. Example: --additional-user-labels='key1=value1,key2=value2'",
  args: {
    name: "ADDITIONAL_USER_LABELS",
    description: "Dict",
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
const flag2814: Fig.Option = {
  name: "--dataflow-kms-key",
  description: "Cloud KMS key to protect the job resources",
  args: { name: "DATAFLOW_KMS_KEY", description: "String", suggestions: [] },
};
const flag3595: Fig.Option = {
  name: "--disable-public-ips",
  description:
    "Cloud Dataflow workers must not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
};
const flag4316: Fig.Option = {
  name: "--enable-streaming-engine",
  description:
    "Enabling Streaming Engine for the streaming job. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
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
const flag6475: Fig.Option = {
  name: "--launcher-machine-type",
  description:
    "The machine type to use for launching the job. If not set, Dataflow will select a default machine type",
  args: {
    name: "LAUNCHER_MACHINE_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7715: Fig.Option = {
  name: "--max-workers",
  description: "Maximum number of workers to run",
  args: { name: "MAX_WORKERS", description: "Int", suggestions: [] },
};
const flag10609: Fig.Option = {
  name: "--num-workers",
  description: "Initial number of workers to use",
  args: { name: "NUM_WORKERS", description: "Int", suggestions: [] },
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
const flag12322: Fig.Option = {
  name: "--region",
  description:
    "Region ID of the job's regional endpoint. Defaults to 'us-central1'",
  args: { name: "REGION_ID", description: "String", suggestions: [] },
};
const flag12324: Fig.Option = {
  name: "--region",
  description:
    "Region ID of the jobs' regional endpoint. Defaults to 'us-central1'",
  args: { name: "REGION_ID", description: "String", suggestions: [] },
};
const flag12325: Fig.Option = {
  name: "--region",
  description: "Region ID of the snapshot regional endpoint",
  args: { name: "REGION_ID", description: "String", suggestions: [] },
};
const flag12367: Fig.Option = {
  name: "--region",
  description: "The region ID of the snapshot and job's regional endpoint",
  args: { name: "REGION_ID", description: "String", suggestions: [] },
};
const flag13495: Fig.Option = {
  name: "--service-account-email",
  description: "Service account to run the workers as",
  args: {
    name: "SERVICE_ACCOUNT_EMAIL",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14350: Fig.Option = {
  name: "--staging-location",
  description:
    "Default Google Cloud Storage location to stage local files.(Must be a URL beginning with 'gs://'.)",
  args: {
    name: "STAGING_LOCATION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14801: Fig.Option = {
  name: "--temp-location",
  description:
    "Default Google Cloud Storage location to stage temporary files. If not set, defaults to the value for --staging-location.(Must be a URL beginning with 'gs://'.)",
  args: {
    name: "TEMP_LOCATION",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14986: Fig.Option = {
  name: "--transform-name-mappings",
  description: "Transform name mappings for the streaming update job",
  args: {
    name: "TRANSFORM_NAME_MAPPINGS",
    description: "Dict",
    suggestions: [],
  },
};
const flag15234: Fig.Option = {
  name: "--update",
  description:
    "Set this to true for streaming update jobs. Use *--update* to enable and *--no-update* to disable",
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
const flag15594: Fig.Option = {
  name: "--worker-machine-type",
  description:
    "Type of machine to use for workers. Defaults to server-specified",
  args: { name: "WORKER_MACHINE_TYPE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "dataflow",
  description: "Manage Google Cloud Dataflow resources",
  subcommands: [
    {
      name: "flex-template",
      description:
        "A group of subcommands for working with Dataflow flex template",
      subcommands: [
        {
          name: "build",
          description:
            "Builds a flex template file from the specified parameters",
          options: [
            flag42,
            flag46,
            {
              name: "--additional-experiments",
              description: "Default experiments to pass to the job",
              args: {
                name: "ADDITIONAL_EXPERIMENTS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--additional-user-labels",
              description:
                'Default user labels to pass to the job. Example: --additional-user-labels=\'{"key1":"value1"}\'',
              args: {
                name: "ADDITIONAL_USER_LABELS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--cloud-build-service-account",
              description:
                "Service account to run the Cloud Build in the format projects/{project}/serviceAccounts/{service_account}. Ensure that the account you are using to run 'gcloud dataflow flex-template build' has 'ServiceAccountUser' role on the specified Cloud Build service account you provide with the --cloud-build-service-account flag. The specified service account must have required permissions to build the image. If the specified service account is in a project that is different from the project where you are starting builds, see https://cloud.google.com/build/docs/securing-builds/configure-user-specified-service-accounts#cross-project_set_up to grant the necessary access",
              args: {
                name: "CLOUD_BUILD_SERVICE_ACCOUNT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--dataflow-kms-key",
              description: "Default Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            flag3595,
            {
              name: "--enable-streaming-engine",
              description:
                "Enable Streaming Engine for the streaming job by default. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
            },
            {
              name: "--env",
              description:
                'Environment variables to create for the Dockerfile. You can pass them as a comma separated list or repeat individually with --env flag. Ex: --env="A=B,C=D" or --env A=B, --env C=D.When you reference files/dir in env variables, please specify relative path to the paths passed via --py-path.Ex: if you pass. --py-path="path/pipleline/" then set FLEX_TEMPLATE_PYTHON_PY_FILE="pipeline/pipeline.py" You can find the list of supported environment variables in this link. https://cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates#setting_required_dockerfile_environment_variables',
              args: { name: "ENV", description: "Dict", suggestions: [] },
            },
            flag4900,
            flag4902,
            {
              name: "--flex-template-base-image",
              description:
                "Flex template base image to be used while building the container image. Allowed choices are allowed labels (JAVA11/17/21/25, PYTHON3, GO), supported distroless images (JAVA11/17/21/25_DISTROLESS, GO_DISTROLESS), or full gcr.io path of the specific version of the base image. For labels, we use the latest base image version to build the container. You can also provide a specific version from this link  https://gcr.io/dataflow-templates-base/",
              args: {
                name: "FLEX_TEMPLATE_BASE_IMAGE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag5091,
            {
              name: "--gcs-log-dir",
              description:
                "Google Cloud Storage directory to save build logs.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "GCS_LOG_DIR",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--go-binary-path",
              description:
                "Local path to your compiled dataflow pipeline Go binary. The binary should be compiled to run on the target worker architecture (usually linux-amd64). See https://beam.apache.org/documentation/sdks/go-cross-compilation/ for more information",
              args: {
                name: "GO_BINARY_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            {
              name: "--image",
              description:
                "Path to the any image registry location of the prebuilt flex template image",
              args: { name: "IMAGE", description: "String", suggestions: [] },
            },
            {
              name: "--image-gcr-path",
              description:
                "The Google Container Registry or Google Artifact Registry location to store the flex template image to be built",
              args: {
                name: "IMAGE_GCR_PATH",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--image-repository-cert-path",
              description:
                "The full URL to self-signed certificate of private registry in Cloud Storage. For example, gs://mybucket/mycerts/selfsigned.crt. The certificate provided in Cloud Storage must be DER-encoded and may be supplied in binary or printable (Base64) encoding. If the certificate is provided in Base64 encoding, it must be bounded at the beginning by -----BEGIN CERTIFICATE-----, and must be bounded at the end by -----END CERTIFICATE-----. If this parameter is provided, the docker daemon in the template launcher will be instructed to trust that certificate",
              args: {
                name: "IMAGE_REPOSITORY_CERT_PATH",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--image-repository-password-secret-id",
              description:
                "Secret Manager secret id for the password to authenticate to private registry. Should be in the format projects/{project}/secrets/{secret}/versions/{secret_version} or projects/{project}/secrets/{secret}. If the version is not provided latest version will be used",
              args: {
                name: "IMAGE_REPOSITORY_PASSWORD_SECRET_ID",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--image-repository-username-secret-id",
              description:
                "Secret Manager secret id for the username to authenticate to private registry. Should be in the format projects/{project}/secrets/{secret}/versions/{secret_version} or projects/{project}/secrets/{secret}. If the version is not provided latest version will be used",
              args: {
                name: "IMAGE_REPOSITORY_USERNAME_SECRET_ID",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--jar",
              description:
                'Local path to your dataflow pipeline jar file and all their dependent jar files required for the flex template classpath. You can pass them as a comma separated list or repeat individually with --jar flag. Ex: --jar="code.jar,dep.jar" or --jar code.jar, --jar dep.jar',
              args: { name: "JAR", description: "List", suggestions: [] },
            },
            flag7356,
            {
              name: "--max-workers",
              description: "Default maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--metadata-file",
              description:
                "Local path to the metadata json file for the flex template. Use a full or relative path to a local file containing the value of metadata_file",
              args: {
                name: "METADATA_FILE",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "Default Compute Engine network for launching instances to run your pipeline",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--num-workers",
              description: "Initial number of workers to use by default",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--print-only",
              description:
                "Prints the container spec to stdout. Does not save in Google Cloud Storage. Overrides the default *dataflow/print_only* property value for this command invocation",
            },
            flag11637,
            {
              name: "--py-path",
              description:
                'Local path to your dataflow pipeline python files and all their dependent files required for the flex template classpath. You can pass them as a comma separated list or repeat individually with --py-path flag. Ex: --py-path="path/pipleline/,path/dependency/" or --py-path path/pipleline/, --py-path path/dependency/',
              args: { name: "PY_PATH", description: "List", suggestions: [] },
            },
            flag11946,
            {
              name: "--sdk-language",
              description:
                "SDK language of the flex template job. _SDK_LANGUAGE_ must be one of: *JAVA*, *PYTHON*, *GO*, *YAML*",
              args: {
                name: "SDK_LANGUAGE",
                description: "String",
                suggestions: ["JAVA", "PYTHON", "GO", "YAML"],
              },
            },
            {
              name: "--service-account-email",
              description: "Default service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14350,
            {
              name: "--subnetwork",
              description:
                "Default Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag14801,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--worker-machine-type",
              description:
                "Default type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--worker-region",
              description: "Default region to run the workers in",
              args: {
                name: "WORKER_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--worker-zone",
              description: "Default zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--yaml-image",
              description:
                "Path to the any image registry location of the prebuilt yaml template image",
              args: {
                name: "YAML_IMAGE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--yaml-pipeline-path",
              description:
                "Local path to your YAML pipeline file. Use a full or relative path to a local file containing the value of yaml_pipeline_path",
              args: {
                name: "YAML_PIPELINE_PATH",
                description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "TEMPLATE_FILE_GCS_PATH",
            description:
              "The Google Cloud Storage location of the flex template file.Overrides if file already exists",
          },
        },
        {
          name: "run",
          description: "Runs a job from the specified path",
          options: [
            flag42,
            flag46,
            flag295,
            {
              name: "--additional-pipeline-options",
              description:
                "Additional pipeline options to pass to the job. Example: --additional-pipeline-options=option1=value1,option2=value2",
              args: {
                name: "ADDITIONAL_PIPELINE_OPTIONS",
                description: "List",
                suggestions: [],
              },
            },
            flag310,
            flag1201,
            flag2292,
            flag2814,
            flag3595,
            flag4316,
            flag4900,
            flag4902,
            {
              name: "--flexrs-goal",
              description:
                "FlexRS goal for the flex template job. _FLEXRS_GOAL_ must be one of: *COST_OPTIMIZED*, *SPEED_OPTIMIZED*",
              args: {
                name: "FLEXRS_GOAL",
                description: "String",
                suggestions: ["COST_OPTIMIZED", "SPEED_OPTIMIZED"],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6475,
            {
              name: "--launcher-vm-timeout-secs",
              description:
                "The timeout in seconds for the launcher VM. If not set, Dataflow uses a default timeout",
              args: {
                name: "LAUNCHER_VM_TIMEOUT_SECS",
                description: "Int",
                suggestions: [],
              },
            },
            flag7356,
            flag7715,
            {
              name: "--network",
              description:
                "Compute Engine network for launching instances to run your pipeline",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag10609,
            {
              name: "--parameters",
              description: "Parameters to pass to the job",
              args: {
                name: "PARAMETERS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12322,
            flag13495,
            flag14350,
            {
              name: "--subnetwork",
              description:
                "Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag14801,
            {
              name: "--template-file-gcs-location",
              description:
                "Google Cloud Storage location of the flex template to run. (Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMPLATE_FILE_GCS_LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag14986,
            flag15234,
            flag15315,
            flag15424,
            flag15594,
            {
              name: "--worker-region",
              description: "Region to run the workers in",
              args: {
                name: "WORKER_REGION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--worker-zone",
              description: "Zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "JOB_NAME",
            description: "Unique name to assign to the job",
          },
        },
      ],
    },
    {
      name: "jobs",
      description: "A group of subcommands for working with Dataflow jobs",
      subcommands: [
        {
          name: "archive",
          description: "Archives a job",
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
            flag12322,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "JOB_ID", description: "Job ID to operate on" },
        },
        {
          name: "cancel",
          description: "Cancels all jobs that match the command line arguments",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "Forcibly cancels a Dataflow job. Regular cancel must have been attempted at least 30 minutes prior for a job to be force cancelled",
            },
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12324,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB_ID",
            description: "Job IDs to operate on",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Outputs the Job object resulting from the Get API",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--full",
              description: "Retrieve the full Job rather than the summary view",
            },
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12322,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "JOB_ID", description: "Job ID to operate on" },
        },
        {
          name: "drain",
          description: "Drains all jobs that match the command line arguments",
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
            flag12324,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "JOB_ID",
            description: "Job IDs to operate on",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description:
            "Lists all jobs in a particular project, optionally filtered by region",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--created-after",
              description:
                "Filter the jobs to those created after the given time. See $ gcloud topic datetimes for information on time formats. For example, `2018-01-01` is the first day of the year, and `-P2W` is 2 weeks ago",
              args: {
                name: "CREATED_AFTER",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--created-before",
              description:
                "Filter the jobs to those created before the given time. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "CREATED_BEFORE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--filter",
              description:
                "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
              args: {
                name: "EXPRESSION",
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
              name: "--limit",
              description:
                "Maximum number of resources to list. The default is *100*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: { name: "LIMIT", description: "Int", suggestions: [] },
            },
            flag7356,
            {
              name: "--page-size",
              description:
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *20*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Only resources from the given region are queried. If not provided, an attempt will be made to query from all available regions. In the event of an outage, jobs from certain regions may not be available",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            {
              name: "--sort-by",
              description:
                "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
              args: { name: "FIELD", description: "List", suggestions: [] },
            },
            {
              name: "--status",
              description:
                "Filter the jobs to those with the selected status. _STATUS_ must be one of:\n+\n*active*::: Filters the jobs that are running ordered on the creation timestamp.\n*all*::: Returns running jobs first, ordered on creation timestamp, then, returns all terminated jobs ordered on the termination timestamp.\n*terminated*::: Filters the jobs that have a terminated state, ordered on the termination timestamp. Example terminated states: Done, Updated, Cancelled, etc.\n:::\n+",
              args: {
                name: "STATUS",
                description: "String",
                suggestions: ["active", "all", "terminated"],
              },
            },
            flag14975,
            {
              name: "--uri",
              description:
                "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "run",
          description: "Runs a job from the specified path",
          options: [
            flag42,
            flag46,
            {
              name: "--additional-experiments",
              description:
                "Additional experiments to pass to the job. These experiments are appended to any experiments already set by the template",
              args: {
                name: "ADDITIONAL_EXPERIMENTS",
                description: "List",
                suggestions: [],
              },
            },
            flag310,
            flag1201,
            flag2292,
            {
              name: "--dataflow-kms-key",
              description: "The Cloud KMS key to protect the job resources",
              args: {
                name: "DATAFLOW_KMS_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--disable-public-ips",
              description:
                "The Cloud Dataflow workers must not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            flag4316,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--gcs-location",
              description:
                "The Google Cloud Storage location of the job template to run. (Must be a URL beginning with 'gs://'.)",
              args: {
                name: "GCS_LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--max-workers",
              description: "The maximum number of workers to run",
              args: {
                name: "MAX_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--network",
              description:
                "The Compute Engine network for launching instances to run your pipeline",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            {
              name: "--num-workers",
              description: "The initial number of workers to use",
              args: {
                name: "NUM_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--parameters",
              description: "The parameters to pass to the job",
              args: {
                name: "PARAMETERS",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12322,
            {
              name: "--service-account-email",
              description: "The service account to run the workers as",
              args: {
                name: "SERVICE_ACCOUNT_EMAIL",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--staging-location",
              description:
                "The Google Cloud Storage location to stage temporary files. (Must be a URL beginning with 'gs://'.)",
              args: {
                name: "STAGING_LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork",
              description:
                "The Compute Engine subnetwork for launching instances to run your pipeline",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag14986,
            flag15234,
            flag15315,
            flag15424,
            {
              name: "--worker-machine-type",
              description:
                "The type of machine to use for workers. Defaults to server-specified",
              args: {
                name: "WORKER_MACHINE_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--worker-region",
              description: "The region to run the workers in",
              args: {
                name: "WORKER_REGION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--worker-zone",
              description: "The zone to run the workers in",
              args: {
                name: "WORKER_ZONE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--zone",
              description:
                "(DEPRECATED) The zone to run the workers in.\n+\nThe --zone option is deprecated; use --worker-region or --worker-zone instead",
              args: {
                name: "ZONE",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "JOB_NAME",
            description: "The unique name to assign to the job",
          },
        },
        {
          name: "show",
          description: "Shows a short description of the given job",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--environment",
              description: "If present, the environment will be listed",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12322,
            {
              name: "--steps",
              description: "If present, the steps will be listed",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: { name: "JOB_ID", description: "Job ID to operate on" },
        },
        {
          name: "update-options",
          description:
            "Update pipeline options on-the-fly for running Dataflow jobs",
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
              name: "--max-num-workers",
              description:
                "Upper-bound for autoscaling, between 1-1000. Only supported for streaming-engine jobs",
              args: {
                name: "MAX_NUM_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--min-num-workers",
              description:
                "Lower-bound for autoscaling, between 1-1000. Only supported for streaming-engine jobs",
              args: {
                name: "MIN_NUM_WORKERS",
                description: "Int",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12322,
            flag14975,
            {
              name: "--unset-worker-utilization-hint",
              description:
                "Unset --worker-utilization-hint. This causes the job autoscaling to fall back to internal tunings if they exist, or otherwise use the default hint value",
            },
            flag15315,
            flag15424,
            {
              name: "--worker-utilization-hint",
              description:
                "Target CPU utilization for autoscaling, ranging from 0.1 to 0.9. Only supported for streaming-engine jobs with autoscaling enabled",
              args: {
                name: "WORKER_UTILIZATION_HINT",
                description: "Float",
                suggestions: [],
              },
            },
          ],
          args: { name: "JOB_ID", description: "Job ID to operate on" },
        },
      ],
    },
    {
      name: "snapshots",
      description:
        "A group of subcommands for working with Cloud Dataflow snapshots",
      subcommands: [
        {
          name: "create",
          description: "Creates a snapshot for a Cloud Dataflow job",
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
              name: "--job-id",
              description: "The job ID to snapshot",
              args: { name: "JOB_ID", description: "String", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12367,
            {
              name: "--snapshot-sources",
              description:
                "If true, snapshots will also be created for the Cloud Pub/Sub sources of the Cloud Dataflow job",
              args: {
                name: "SNAPSHOT_SOURCES",
                description: "Int",
                suggestions: [],
              },
            },
            {
              name: "--snapshot-ttl",
              description: "Time to live for the snapshot",
              args: {
                name: "DURATION",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
          description: "Delete a Cloud Dataflow snapshot",
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
            flag12325,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SNAPSHOT_ID",
            description: "ID of the Cloud Dataflow snapshot",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Dataflow snapshot",
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
            flag12325,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SNAPSHOT_ID",
            description: "ID of the Cloud Dataflow snapshot",
          },
        },
        {
          name: "list",
          description:
            "List all Cloud Dataflow snapshots in a project in the specified region, optionally filtered by job ID",
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
              name: "--job-id",
              description: "The job ID to use to filter the snapshots list",
              args: { name: "JOB_ID", description: "String", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12367,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "yaml",
      description:
        "A group of subcommands for launching Beam YAML jobs on Dataflow",
      subcommands: [
        {
          name: "run",
          description: "Runs a job from the specified path",
          options: [
            flag42,
            flag46,
            flag295,
            {
              name: "--additional-pipeline-options",
              description:
                "Additional pipeline options to pass to the job. Example: --additional-pipeline-options=option1=value1,option2=value2 For a list of available options, see the Dataflow reference: https://cloud.google.com/dataflow/docs/reference/pipeline-options",
              args: {
                name: "ADDITIONAL_PIPELINE_OPTIONS",
                description: "List",
                suggestions: [],
              },
            },
            flag310,
            flag1201,
            flag2292,
            flag2814,
            {
              name: "--disable-public-ips",
              description:
                "If specified, Cloud Dataflow workers will not use public IP addresses. Overrides the default *dataflow/disable_public_ips* property value for this command invocation",
            },
            {
              name: "--enable-streaming-engine",
              description:
                "Enable Streaming Engine for the streaming job. Overrides the default *dataflow/enable_streaming_engine* property value for this command invocation",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--jinja-variables",
              description: "Jinja2 variables to be used in reifying the yaml",
              args: {
                name: "JSON_OBJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag6475,
            flag7356,
            flag7715,
            {
              name: "--network",
              description:
                "Compute Engine network for launching worker instances to run the pipeline.  If not set, the default network is used",
              args: { name: "NETWORK", description: "String", suggestions: [] },
            },
            flag10609,
            {
              name: "--pipeline-options",
              description:
                "(DEPRECATED) Pipeline options to pass to the job.\n+\nThe `--pipeline-options` flag is deprecated. Pipeline options should be passed using --additional-pipeline-options flag",
              args: {
                name: "OPTIONS=VALUE;OPTION=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12322,
            flag13495,
            {
              name: "--staging-location",
              description:
                "Google Cloud Storage location to stage local files. If not set, defaults to the value for --temp-location.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "STAGING_LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--subnetwork",
              description:
                "Compute Engine subnetwork for launching worker instances to run the pipeline.  If not set, the default subnetwork is used",
              args: {
                name: "SUBNETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--temp-location",
              description:
                "Google Cloud Storage location to stage temporary files. If not set, defaults to the value for --staging-location.(Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMP_LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--template-file-gcs-location",
              description:
                "Google Cloud Storage location of the YAML template to run. (Must be a URL beginning with 'gs://'.)",
              args: {
                name: "TEMPLATE_FILE_GCS_LOCATION",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag14986,
            {
              name: "--update",
              description:
                "Specify this flag to update a streaming job. Use *--update* to enable and *--no-update* to disable",
            },
            flag15315,
            flag15424,
            flag15594,
            {
              name: "--yaml-pipeline",
              description: "Inline definition of the YAML pipeline to run",
              args: {
                name: "YAML_PIPELINE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--yaml-pipeline-file",
              description:
                "Path of a file defining the YAML pipeline to run. (Must be a local file or a URL beginning with 'gs://'.)",
              args: {
                name: "YAML_PIPELINE_FILE",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "JOB_NAME",
            description: "Unique name to assign to the job",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
