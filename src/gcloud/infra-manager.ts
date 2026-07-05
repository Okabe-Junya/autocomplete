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
const flag690: Fig.Option = {
  name: "--artifacts-gcs-bucket",
  description:
    "user-defined location of Cloud Build logs, artifacts, and Terraform state files in Google Cloud Storage. Format: `gs://{bucket}/{folder}` A default bucket will be bootstrapped if the field is not set or empty",
  args: {
    name: "ARTIFACTS_GCS_BUCKET",
    description: "String",
    suggestions: [],
  },
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
const flag5185: Fig.Option = {
  name: "--gcs-source",
  description:
    'URI of an object in Google Cloud Storage.\n      e.g. `gs://{bucket}/{object}`\n+\nExamples:\n+\nCreate a deployment from a storage my-bucket:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket"',
  args: { name: "GCS_SOURCE", description: "String", suggestions: [] },
};
const flag5234: Fig.Option = {
  name: "--git-source-directory",
  description:
    'Subdirectory inside the repository.\nExample: \'staging/my-package\'\n+\nUse in conjunction with `--git-source-repo` and `--git-source-ref`\n+\nExamples:\n+\nCreate a deployment from the "https://github.com/examples/repository.git" repo, "staging/compute" folder, "mainline" branch:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --git-source-repo="https://github.com/examples/repository.git"\n    --git-source-directory="staging/compute" --git-source-ref="mainline"',
  args: {
    name: "GIT_SOURCE_DIRECTORY",
    description: "String",
    suggestions: [],
  },
};
const flag5236: Fig.Option = {
  name: "--git-source-ref",
  description:
    'Subdirectory inside the repository.\nExample: \'staging/my-package\'\n+\nUse in conjunction with `--git-source-repo` and `--git-source-directory`\n+\nExamples:\n+\nCreate a deployment from the "https://github.com/examples/repository.git" repo, "staging/compute" folder, "mainline" branch:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --git-source-repo="https://github.com/examples/repository.git"\n    --git-source-directory="staging/compute" --git-source-ref="mainline"',
  args: { name: "GIT_SOURCE_REF", description: "String", suggestions: [] },
};
const flag5238: Fig.Option = {
  name: "--git-source-repo",
  description:
    'Repository URL.\nExample: \'https://github.com/examples/repository.git\'\n+\nUse in conjunction with `--git-source-directory` and `--git-source_ref`\n+\nExamples:\n+\nCreate a deployment from the "https://github.com/examples/repository.git" repo, "staging/compute" folder, "mainline" branch:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --git-source-repo="https://github.com/examples/repository.git"\n    --git-source-directory="staging/compute" --git-source-ref="mainline"',
  args: { name: "GIT_SOURCE_REPO", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5649: Fig.Option = {
  name: "--ignore-file",
  description:
    "Override the `.gcloudignore` file and use the specified file instead. See `gcloud topic gcloudignore` for more information",
  args: { name: "IGNORE_FILE", description: "String", suggestions: [] },
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
const flag5811: Fig.Option = {
  name: "--input-values",
  description:
    'Input variable values for the Terraform blueprint. It only\n      accepts (key, value) pairs where value is a scalar value.\n+\nExamples:\n+\nPass input values on command line:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket" --input-values=projects=p1,region=r',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag5812: Fig.Option = {
  name: "--inputs-file",
  description:
    'A .tfvars file containing terraform variable values. --inputs-file flag is supported for python version 3.6 and above.\n+\nExamples:\n+\nPass input values on the command line:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket" --inputs-file=path-to-tfvar-file.tfvar',
  args: { name: "INPUTS_FILE", description: "String", suggestions: [] },
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
const flag6565: Fig.Option = {
  name: "--local-source",
  description:
    'Local storage path where config files are stored. When using this option, Terraform config file references outside this storage path is not supported.\n      e.g. `./path/to/blueprint`\n+\nExamples:\n+\nCreate a deployment from a local storage path `./path/to/blueprint`:\n+\n  $ {command} projects/p1/location/us-central1/deployments/my-deployment --local-source="./path/to/blueprint"',
  args: { name: "LOCAL_SOURCE", description: "String", suggestions: [] },
};
const flag7132: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7186: Fig.Option = {
  name: "--location",
  description:
    "The Cloud location for the deployment.\n+\nTo set the `location` attribute:\n* provide the argument `DEPLOYMENT` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7318: Fig.Option = {
  name: "--location",
  description:
    "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `--preview` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7320: Fig.Option = {
  name: "--location",
  description:
    "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7321: Fig.Option = {
  name: "--location",
  description:
    "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `preview` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7331: Fig.Option = {
  name: "--lock-id",
  description: "Lock ID of the lock file to verify person importing owns lock",
  args: { name: "LOCK_ID", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
const flag11528: Fig.Option = {
  name: "--preview",
  description:
    "ID of the preview or fully qualified identifier for the preview.\n+\nTo set the `preview` attribute:\n* provide the argument `--preview` on the command line",
  args: { name: "PREVIEW", description: "String", suggestions: [] },
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
const flag13548: Fig.Option = {
  name: "--service-account",
  description:
    "User-specified Service Account (SA) to be used as credential to manage resources. Format: `projects/{projectID}/serviceAccounts/{serviceAccount}`",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14845: Fig.Option = {
  name: "--tf-version-constraint",
  description:
    'User-specified Terraform version constraint, for example "=1.3.10"',
  args: {
    name: "TF_VERSION_CONSTRAINT",
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
const flag15603: Fig.Option = {
  name: "--worker-pool",
  description:
    "User-specified Worker Pool resource in which the Cloud Build job will execute. Format: projects/{project}/locations/{location}/workerPools/{workerPoolId}",
  args: { name: "WORKER_POOL", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "infra-manager",
  description: "Manage Infra Manager resources",
  subcommands: [
    {
      name: "automigrationconfig",
      description: "Manage auto migration config resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe an AutoMigrationConfig",
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
            flag7132,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "disable-auto-migration",
          description: "Disable AutoMigrationConfig",
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
            flag7132,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "enable-auto-migration",
          description: "Enable AutoMigrationConfig",
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
            flag7132,
            flag7356,
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
      name: "deployments",
      description: "Manage Deployment resources",
      subcommands: [
        {
          name: "apply",
          description: "Create or update a deployment",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'Annotations to apply to the deployment. Existing values are overwritten. To retain\nthe existing annotations on a deployment, do not specify this flag.\n+\nExamples:\n+\nUpdate annotations for an existing deployment:\n+\n  $ {command} projects/p1/locations/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket" --annotations="env=prod,team=finance"\n+\nClear annotations for an existing deployment:\n+\n  $ {command} projects/p1/locations/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket" --annotations=""\n+\nAdd an annotation to an existing deployment:\n+\n  First, fetch the current annotations using the `describe` command, then follow the\n  preceding example for updating annotations',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag690,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5185,
            flag5234,
            flag5236,
            flag5238,
            flag5453,
            flag5649,
            flag5699,
            {
              name: "--import-existing-resources",
              description:
                "By default, Infrastructure Manager will return a failure when Terraform encounters a 409 code (resource conflict error) during actuation. If this flag is set to true, Infrastructure Manager will instead attempt to automatically import the resource into the Terraform state (for supported resource types) and continue actuation",
            },
            flag5811,
            flag5812,
            {
              name: "--labels",
              description:
                'Labels to apply to the deployment. Existing values are overwritten. To retain\nthe existing labels on a deployment, do not specify this flag.\n+\nExamples:\n+\nUpdate labels for an existing deployment:\n+\n  $ {command} projects/p1/locations/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket" --labels="env=prod,team=finance"\n+\nClear labels for an existing deployment:\n+\n  $ {command} projects/p1/locations/us-central1/deployments/my-deployment --gcs-source="gs://my-bucket" --labels=""\n+\nAdd a label to an existing deployment:\n+\n  First, fetch the current labels using the `describe` command, then follow the\n  preceding example for updating labels',
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6565,
            flag7186,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--quota-validation",
              description:
                "Input to control quota checks for resources in terraform configuration files. There are limited resources on which quota validation applies. Supported values are QUOTA_VALIDATION_UNSPECIFIED, ENABLED, ENFORCED",
              args: {
                name: "QUOTA_VALIDATION",
                description:
                  "Googlecloudsdk.command_lib.infra_manager.flags:QuotaValidationEnum",
                suggestions: [],
              },
            },
            flag13548,
            flag14845,
            flag14975,
            flag15315,
            flag15424,
            flag15603,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `DEPLOYMENT` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete deployments",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--delete-policy",
              description:
                "Policy on how resources actuated by the deployment should be deleted. The accepted values are DELETE, ABANDON.\nDELETE = Delete resources actuated by the deployment.\nABANDON = Abandon resources and only delete deployment metadata. _DELETE_POLICY_ must be one of: *abandon*, *delete*, *delete-policy-unspecified*",
              args: {
                name: "DELETE_POLICY",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["abandon", "delete", "delete-policy-unspecified"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7320,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `deployment` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe deployments",
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
            flag7320,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `deployment` on the command line",
          },
        },
        {
          name: "export-lock",
          description: "Exports lock info of a deployment",
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
            flag7186,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `DEPLOYMENT` on the command line",
          },
        },
        {
          name: "export-statefile",
          description: "Export a terraform state file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--draft",
              description:
                "If this flag is set to true, the exported deployment state file will be the draft state",
            },
            {
              name: "--file",
              description:
                'File name for statefile. It is optional and it specifies the filename or\ncomplete path for the downloaded statefile. If only a file path is\nprovided, the statefile will be downloaded as "statefile" within that\ndirectory. If a filename is included, the statefile will be downloaded\nwith that name',
              args: { name: "FILE", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7186,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `DEPLOYMENT` on the command line",
          },
        },
        {
          name: "import-statefile",
          description: "Import a terraform state file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--file",
              description:
                "File path for importing statefile into a deployment. It specifies the\nlocal file path of an existing Terraform statefile to directly upload\nfor a deployment",
              args: { name: "FILE", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7186,
            flag7331,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `DEPLOYMENT` on the command line",
          },
        },
        {
          name: "list",
          description: "List deployments",
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
            flag7132,
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
          name: "lock",
          description: "Locks the deployment",
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
            flag7186,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `DEPLOYMENT` on the command line",
          },
        },
        {
          name: "unlock",
          description: "Unlocks the deployment",
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
            flag7186,
            flag7331,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "DEPLOYMENT",
            description:
              "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `DEPLOYMENT` on the command line",
          },
        },
      ],
    },
    {
      name: "previews",
      description: "Manage Preview resources",
      subcommands: [
        {
          name: "create",
          description: "Create a preview",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                "Preview annotations cannot be updated after creation",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag690,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--deployment",
              description: "Deployment reference for preview",
              args: {
                name: "DEPLOYMENT",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5185,
            flag5234,
            flag5236,
            flag5238,
            flag5453,
            flag5649,
            flag5699,
            flag5811,
            flag5812,
            {
              name: "--labels",
              description: "Preview labels cannot be updated after creation",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6565,
            flag7132,
            flag7356,
            {
              name: "--preview-mode",
              description: "Preview mode to set it to either default or delete",
              args: {
                name: "PREVIEW_MODE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag13548,
            flag14845,
            flag14975,
            flag15315,
            flag15424,
            flag15603,
          ],
          args: {
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview.\n+\nTo set the `preview` attribute:\n* provide the argument `PREVIEW` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete previews",
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
            flag7321,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview.\n+\nTo set the `preview` attribute:\n* provide the argument `preview` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe previews",
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
            flag7321,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview.\n+\nTo set the `preview` attribute:\n* provide the argument `preview` on the command line",
          },
        },
        {
          name: "export",
          description: "Export preview results",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--file",
              description:
                'File name for preview export artifacts. It is optional and it specifies\nthe filename or complete path for the downloaded preview export\nartifacts. If only a file path is provided, the artifacts will be\ndownloaded as "preview" within that directory. If a filename is\nincluded, the artifacts will be downloaded with that name',
              args: { name: "FILE", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "The Cloud location for the preview.\n+\nTo set the `location` attribute:\n* provide the argument `PREVIEW` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
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
            name: "PREVIEW",
            description:
              "ID of the preview or fully qualified identifier for the preview.\n+\nTo set the `preview` attribute:\n* provide the argument `PREVIEW` on the command line",
          },
        },
        {
          name: "list",
          description: "List previews",
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
            flag7132,
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
      name: "resource-changes",
      description: "Manage resource change resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe resource changes",
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
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `resource_change` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--preview",
              description:
                "preview TBD\n+\nTo set the `preview` attribute:\n* provide the argument `resource_change` on the command line with a fully specified name;\n* provide the argument `--preview` on the command line",
              args: { name: "PREVIEW", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESOURCE_CHANGE",
            description:
              "ID of the resourceChange or fully qualified identifier for the resourceChange.\n+\nTo set the `resource_change` attribute:\n* provide the argument `resource_change` on the command line",
          },
        },
        {
          name: "list",
          description: "List resource changes",
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
            flag7318,
            flag7356,
            flag11059,
            flag11528,
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
      name: "resource-drifts",
      description: "Manage resource drift resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe resource drifts",
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
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `resource_drift` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--preview",
              description:
                "preview TBD\n+\nTo set the `preview` attribute:\n* provide the argument `resource_drift` on the command line with a fully specified name;\n* provide the argument `--preview` on the command line",
              args: { name: "PREVIEW", description: "String", suggestions: [] },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESOURCE_DRIFT",
            description:
              "ID of the resourceDrift or fully qualified identifier for the resourceDrift.\n+\nTo set the `resource_drift` attribute:\n* provide the argument `resource_drift` on the command line",
          },
        },
        {
          name: "list",
          description: "List resource drifts",
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
            flag7318,
            flag7356,
            flag11059,
            flag11528,
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
      name: "resources",
      description: "List or describe resources under a Revision",
      subcommands: [
        {
          name: "describe",
          description: "Describe resources",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployment",
              description:
                "deployments TBD\n+\nTo set the `deployment` attribute:\n* provide the argument `resource` on the command line with a fully specified name;\n* provide the argument `--deployment` on the command line",
              args: {
                name: "DEPLOYMENT",
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
              name: "--location",
              description:
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `resource` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--revision",
              description:
                "revisions TBD\n+\nTo set the `revision` attribute:\n* provide the argument `resource` on the command line with a fully specified name;\n* provide the argument `--revision` on the command line",
              args: {
                name: "REVISION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESOURCE",
            description:
              "ID of the resource or fully qualified identifier for the resource.\n+\nTo set the `resource` attribute:\n* provide the argument `resource` on the command line",
          },
        },
        {
          name: "list",
          description: "List resources",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployment",
              description:
                "deployments TBD\n+\nTo set the `deployment` attribute:\n* provide the argument `--revision` on the command line with a fully specified name;\n* provide the argument `--deployment` on the command line",
              args: {
                name: "DEPLOYMENT",
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
            {
              name: "--location",
              description:
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `--revision` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--revision",
              description:
                "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `--revision` on the command line",
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
      name: "revisions",
      description: "Manage Revision resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe revisions",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployment",
              description:
                "deployments TBD\n+\nTo set the `deployment` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--deployment` on the command line",
              args: {
                name: "DEPLOYMENT",
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
              name: "--location",
              description:
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `revision` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `revision` on the command line",
          },
        },
        {
          name: "export-statefile",
          description: "Export a terraform state file",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployment",
              description:
                "The deployment for the revision.\n+\nTo set the `deployment` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* provide the argument `--deployment` on the command line",
              args: {
                name: "DEPLOYMENT",
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
              name: "--location",
              description:
                "The Cloud location for the revision.\n+\nTo set the `location` attribute:\n* provide the argument `REVISION` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
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
            name: "REVISION",
            description:
              "ID of the revision or fully qualified identifier for the revision.\n+\nTo set the `revision` attribute:\n* provide the argument `REVISION` on the command line",
          },
        },
        {
          name: "list",
          description: "List revisions",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--deployment",
              description:
                "ID of the deployment or fully qualified identifier for the deployment.\n+\nTo set the `deployment` attribute:\n* provide the argument `--deployment` on the command line",
              args: {
                name: "DEPLOYMENT",
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
            {
              name: "--location",
              description:
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `--deployment` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
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
        },
      ],
    },
    {
      name: "terraform-versions",
      description: "Manage Terraform version resources",
      subcommands: [
        {
          name: "describe",
          description: "Describe Terraform versions",
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
                "locations TBD\n+\nTo set the `location` attribute:\n* provide the argument `terraform_version` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `infra-manager/location`",
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
            name: "TERRAFORM_VERSION",
            description:
              "ID of the terraformVersion or fully qualified identifier for the terraformVersion.\n+\nTo set the `terraform_version` attribute:\n* provide the argument `terraform_version` on the command line",
          },
        },
        {
          name: "list",
          description: "List Terraform versions",
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
            flag7132,
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
};

export default completionSpec;
