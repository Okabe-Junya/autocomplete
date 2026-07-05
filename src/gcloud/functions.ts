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
const flag5206: Fig.Option = {
  name: "--gen2",
  description:
    "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property. If the `functions/gen2` configuration property is not set, defaults to looking up the given function and using its generation",
};
const flag5208: Fig.Option = {
  name: "--gen2",
  description:
    "If enabled, this command will use Cloud Functions (Second generation). If disabled with `--no-gen2`, Cloud Functions (First generation) will be used. If not specified, the value of this flag will be taken from the `functions/gen2` configuration property",
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
const flag12380: Fig.Option = {
  name: "--region",
  description:
    "The Cloud region for the function. Overrides the default `functions/region` property value for this command invocation.\n+\nTo set the `region` attribute:\n* provide the argument `NAME` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `functions/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
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
const flag15350: Fig.Option = {
  name: "--v2",
  description:
    "If specified, this command will use Cloud Functions v2 APIs and return the result in the v2 format (See https://cloud.google.com/functions/docs/reference/rest/v2/projects.locations.functions#Function). If not specified, 1st gen and 2nd gen functions will use v1 and v2 APIs respectively and return the result in the corresponding format (For v1 format, see https://cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions#resource:-cloudfunction). This command conflicts with `--no-gen2`. If specified with this combination, v2 APIs will be used",
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
  name: "functions",
  description: "Manage Google Cloud Functions",
  subcommands: [
    {
      name: "add-iam-policy-binding",
      description: "Adds an IAM policy binding for a Google Cloud Function",
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
          args: { name: "PRINCIPAL", description: "String", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12380,
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
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "add-invoker-policy-binding",
      description:
        "Adds an invoker binding to the IAM policy of a Google Cloud Function",
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
            "The principal to add to the IAM policy. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
          args: { name: "PRINCIPAL", description: "String", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12380,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "call",
      description: "Triggers execution of a Google Cloud Function",
      options: [
        flag42,
        flag46,
        flag1201,
        {
          name: "--cloud-event",
          description:
            "JSON encoded string with a CloudEvent in structured content mode.\n+\nMutually exclusive with --data flag.\n+\nUse for Cloud Functions 2nd Gen CloudEvent functions. The CloudEvent\nobject will be sent to your function as a binary content mode message with\nthe top-level 'data' field set as the HTTP body and all other JSON fields\nsent as HTTP headers",
          args: {
            name: "CLOUD_EVENT",
            description:
              "Googlecloudsdk.command_lib.functions.flags:_ValidateJsonOrRaiseCloudEventError",
            suggestions: [],
          },
        },
        flag2292,
        {
          name: "--data",
          description:
            "JSON string with data that will be passed to the function",
          args: {
            name: "DATA",
            description:
              "Googlecloudsdk.command_lib.functions.flags:_ValidateJsonOrRaiseDataError",
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
        flag12380,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "delete",
      description: "Delete a Google Cloud Function",
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
        flag12380,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "deploy",
      description: "Create or update a Google Cloud Function",
      options: [
        flag42,
        flag46,
        {
          name: "--allow-unauthenticated",
          description:
            "If set, makes this a public function. This will allow all callers, without checking authentication. Use *--allow-unauthenticated* to enable and *--no-allow-unauthenticated* to disable",
        },
        flag1201,
        {
          name: "--binary-authorization",
          description:
            "Name of the Binary Authorization policy that the function image should\nbe checked against when deploying to Cloud Run.\n+\nExample: default\n+\nThe flag is only applicable to 2nd gen functions",
          args: {
            name: "BINARY_AUTHORIZATION",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--build-env-vars-file",
          description:
            "Path to a local YAML file with definitions for all build environment variables. All existing build environment variables will be removed before the new build environment variables are added",
          args: {
            name: "FILE_PATH",
            description:
              "Googlecloudsdk.command_lib.util.args.map_util:ArgDictFile",
            suggestions: [],
          },
        },
        {
          name: "--build-service-account",
          description:
            "IAM service account whose credentials will be used for the build step.\nMust be of the format projects/${PROJECT_ID}/serviceAccounts/${ACCOUNT_EMAIL_ADDRESS}.\n+\nIf not provided, the function will use the project's default\nservice account for Cloud Build",
          args: {
            name: "BUILD_SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--build-worker-pool",
          description:
            "Name of the Cloud Build Custom Worker Pool that should be used to build\nthe function. The format of this field is\n`projects/${PROJECT}/locations/${LOCATION}/workerPools/${WORKERPOOL}`\nwhere ${PROJECT} is the project id and ${LOCATION} is the location where\nthe worker pool is defined and ${WORKERPOOL} is the short name of the\nworker pool",
          args: {
            name: "BUILD_WORKER_POOL",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--clear-binary-authorization",
          description: "Clears the Binary Authorization policy field",
        },
        {
          name: "--clear-build-env-vars",
          description: "Remove all build environment variables",
        },
        {
          name: "--clear-build-service-account",
          description: "Clears the build service account field",
        },
        {
          name: "--clear-build-worker-pool",
          description: "Clears the Cloud Build Custom Worker Pool field",
        },
        {
          name: "--clear-docker-repository",
          description:
            "Clears the Docker repository configuration of the function",
        },
        {
          name: "--clear-env-vars",
          description: "Remove all environment variables",
        },
        {
          name: "--clear-kms-key",
          description: "Clears the KMS crypto key used to encrypt the function",
        },
        {
          name: "--clear-labels",
          description:
            "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
        },
        {
          name: "--clear-max-instances",
          description:
            "Clears the maximum instances setting for the function.\n+\nIf it's any 2nd gen function or a 1st gen HTTP function, this flag sets\nmaximum instances  to 0, which means there is no limit to maximum\ninstances. If it's an event-driven 1st gen function, this flag sets\nmaximum instances to 3000, which is the default value for 1st gen\nfunctions",
        },
        {
          name: "--clear-min-instances",
          description: "Clears the minimum instances setting for the function",
        },
        {
          name: "--clear-network",
          description:
            "Disconnect this Cloud Function from the Direct VPC network it is connected to",
        },
        {
          name: "--clear-network-tags",
          description:
            "Clears all existing network tags from the Cloud Function",
        },
        {
          name: "--clear-secrets",
          description: "Remove all secret environment variables and volumes",
        },
        {
          name: "--clear-vpc-connector",
          description: "Clears the VPC connector field",
        },
        {
          name: "--concurrency",
          description:
            "Set the maximum number of concurrent requests allowed per container instance. Leave concurrency unspecified to receive the server default value",
          args: {
            name: "CONCURRENCY",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag2292,
        {
          name: "--cpu",
          description:
            "The number of available CPUs to set. Only valid when\n`--memory=MEMORY` is specified.\n+\nExamples: .5, 2, 2.0, 2000m.\n+\nBy default, a new function's available CPUs is determined based on its memory value.\n+\nWhen deploying an update that includes memory changes to an existing function,\nthe function's available CPUs will be recalculated based on the new memory unless this flag\nis specified. When deploying an update that does not include memory changes to an existing function,\nthe function's \"available CPUs\" setting will keep its old value unless you use this flag\nto change the setting",
          args: { name: "CPU", description: "String", suggestions: [] },
        },
        {
          name: "--direct-vpc-egress",
          description:
            "Specify which of the outbound traffic to send through Direct VPC egress. Configuring Direct VPC network is required to use this flag. _DIRECT_VPC_EGRESS_ must be one of: *private-ranges-only*, *all*",
          args: {
            name: "DIRECT_VPC_EGRESS",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["private-ranges-only", "all"],
          },
        },
        {
          name: "--docker-registry",
          description:
            "(DEPRECATED)         Docker Registry to use for storing the function's Docker images.\n        The option `artifact-registry` is used by default.\n+\n        With the general transition from Container Registry to\n        Artifact Registry, the option to specify docker registry is deprecated.\n        All container image storage and management will automatically\n        transition to Artifact Registry.\n        For more information, see\n        https://cloud.google.com/artifact-registry/docs/transition/transition-from-gcr\n+\n_DOCKER_REGISTRY_ must be one of: *artifact-registry*, *container-registry*",
          args: {
            name: "DOCKER_REGISTRY",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["artifact-registry", "container-registry"],
          },
        },
        {
          name: "--docker-repository",
          description:
            "Sets the Docker repository to be used for storing the Cloud Function's\nDocker images while the function is being deployed. `DOCKER_REPOSITORY`\nmust be an Artifact Registry Docker repository present in the `same`\nproject and location as the Cloud Function.\n+\n**Preview:** for 2nd gen functions, a Docker Artifact registry\nrepository in a different project and/or location may be used.\nAdditional requirements apply, see\nhttps://cloud.google.com/functions/docs/building#image_registry\n+\nThe repository name should match one of these patterns:\n+\n* `projects/${PROJECT}/locations/${LOCATION}/repositories/${REPOSITORY}`,\n* `{LOCATION}-docker.pkg.dev/{PROJECT}/{REPOSITORY}`.\n+\nwhere `${PROJECT}` is the project, `${LOCATION}` is the location of the\nrepository and `${REPOSITORY}` is a valid repository ID",
          args: {
            name: "DOCKER_REPOSITORY",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--egress-settings",
          description:
            "Egress settings controls what traffic is diverted through the VPC Access Connector resource. By default `private-ranges-only` will be used. _EGRESS_SETTINGS_ must be one of: *private-ranges-only*, *all*",
          args: {
            name: "EGRESS_SETTINGS",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["private-ranges-only", "all"],
          },
        },
        {
          name: "--entry-point",
          description:
            "Name of a Google Cloud Function (as defined in source code) that will\nbe executed. Defaults to the resource name suffix (ID of the function), if\n not specified",
          args: { name: "ENTRY_POINT", description: "String", suggestions: [] },
        },
        {
          name: "--env-vars-file",
          description:
            "Path to a local YAML file with definitions for all environment variables. All existing environment variables will be removed before the new environment variables are added",
          args: {
            name: "FILE_PATH",
            description:
              "Googlecloudsdk.command_lib.util.args.map_util:ArgDictFile",
            suggestions: [],
          },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5206,
        flag5453,
        {
          name: "--ignore-file",
          description:
            "Override the .gcloudignore file in the source directory and use the specified file instead. By default, the source directory is your current directory. Note that it could be changed by the --source flag, in which case your .gcloudignore file will be searched in the overridden directory.  For example, `--ignore-file=.mygcloudignore` combined with `--source=./mydir` would point to `./mydir/.mygcloudignore`",
          args: { name: "IGNORE_FILE", description: "String", suggestions: [] },
        },
        flag5699,
        {
          name: "--ingress-settings",
          description:
            "Ingress settings controls what traffic can reach the function. By default `all` will be used. _INGRESS_SETTINGS_ must be one of: *all*, *internal-only*, *internal-and-gclb*",
          args: {
            name: "INGRESS_SETTINGS",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["all", "internal-only", "internal-and-gclb"],
          },
        },
        {
          name: "--kms-key",
          description:
            "Sets the user managed KMS crypto key used to encrypt the Cloud Function\nand its resources.\n+\nThe KMS crypto key name should match the pattern\n`projects/${PROJECT}/locations/${LOCATION}/keyRings/${KEYRING}/cryptoKeys/${CRYPTOKEY}`\nwhere ${PROJECT} is the project, ${LOCATION} is the location of the key\nring, and ${KEYRING} is the key ring that contains the ${CRYPTOKEY}\ncrypto key.\n+\nIf this flag is set, then a Docker repository created in Artifact\nRegistry must be specified using the `--docker-repository` flag and the\nrepository must be encrypted using the `same` KMS key",
          args: {
            name: "KMS_KEY",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag7356,
        {
          name: "--max-instances",
          description:
            "Sets the maximum number of instances for the function. A function\nexecution that would exceed max-instances times out",
          args: {
            name: "MAX_INSTANCES",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--memory",
          description:
            'Limit on the amount of memory the function can use.\n+\nAllowed values for v1 are: 128MB, 256MB, 512MB, 1024MB, 2048MB, 4096MB,\nand 8192MB.\n+\nAllowed values for GCF 2nd gen are in the format: <number><unit> with allowed units\nof "k", "M", "G", "Ki", "Mi", "Gi". Ending \'b\' or \'B\' is allowed, but both are\ninterpreted as bytes as opposed to bits.\n+\nExamples: 1000000K, 1000000Ki, 256Mb, 512M, 1024Mi, 2G, 4Gi.\n+\nBy default, a new function is limited to 256MB of memory. When\ndeploying an update to an existing function, the function keeps its old\nmemory limit unless you specify this flag',
          args: { name: "MEMORY", description: "String", suggestions: [] },
        },
        {
          name: "--min-instances",
          description:
            "Sets the minimum number of instances for the function. This is helpful\nfor reducing cold start times. Defaults to zero",
          args: {
            name: "MIN_INSTANCES",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--network",
          description:
            "The VPC network that the Cloud Function will be able to send traffic to. If --subnet is also specified, subnet must be a subnetwork of the network specified by this --network flag. To clear existing VPC network settings, use --clear-network",
          args: { name: "NETWORK", description: "String", suggestions: [] },
        },
        {
          name: "--network-tags",
          description:
            "Applies the given network tags (comma separated) to the Cloud Function. To clear existing tags, use --clear-network-tags",
          args: { name: "TAGS", description: "List", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12380,
        {
          name: "--remove-build-env-vars",
          description: "List of build environment variables to be removed",
          args: { name: "KEY", description: "List", suggestions: [] },
        },
        {
          name: "--remove-env-vars",
          description: "List of environment variables to be removed",
          args: { name: "KEY", description: "List", suggestions: [] },
        },
        {
          name: "--remove-labels",
          description:
            "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first.Label keys starting with `deployment` are reserved for use by deployment tools and cannot be specified manually",
          args: { name: "KEY", description: "List", suggestions: [] },
        },
        {
          name: "--remove-secrets",
          description:
            "List of secret environment variable names and secret paths to remove.\n+\nExisting secrets configuration of secret environment variable names and\nsecret paths not specified in this list will be preserved.\n+\nTo remove a secret environment variable, use the name of the environment\nvariable `SECRET_ENV_VAR`.\n+\nTo remove a file within a secret volume or the volume itself, use the\nsecret path as the key (either `/secret_path` or\n`/mount_path:/secret_file_path`)",
          args: {
            name: "SECRET_ENV_VAR,/secret_path,/mount_path:/secret_file_path",
            description: "List",
            suggestions: [],
          },
        },
        {
          name: "--retry",
          description:
            "If specified, then the function will be retried in case of a failure",
        },
        {
          name: "--run-service-account",
          description:
            "The email address of the IAM service account associated with the Cloud\nRun service for the function. The service account represents the identity\nof the running function, and determines what permissions the function\nhas.\n+\nIf not provided, the function will use the project's default service\naccount for Compute Engine",
          args: {
            name: "RUN_SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--runtime",
          description:
            "Runtime in which to run the function.\n+\nRequired when deploying a new function; optional when updating\nan existing function.\n+\nFor a list of available runtimes, run `gcloud functions runtimes list`",
          args: { name: "RUNTIME", description: "String", suggestions: [] },
        },
        {
          name: "--runtime-update-policy",
          description:
            "Runtime update policy for the function being deployed. The option\n`automatic` is used by default. _RUNTIME_UPDATE_POLICY_ must be one of: *automatic*, *on-deploy*",
          args: {
            name: "RUNTIME_UPDATE_POLICY",
            description: "String",
            suggestions: ["automatic", "on-deploy"],
          },
        },
        {
          name: "--security-level",
          description:
            "Security level controls whether a function's URL supports HTTPS only or both HTTP and HTTPS. By default, `secure-always` will be used, meaning only HTTPS is supported. _SECURITY_LEVEL_ must be one of: *secure-always*, *secure-optional*",
          args: {
            name: "SECURITY_LEVEL",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: ["secure-always", "secure-optional"],
          },
        },
        {
          name: "--serve-all-traffic-latest-revision",
          description:
            "If specified, latest function revision will be served all traffic",
        },
        {
          name: "--service-account",
          description:
            "The email address of the IAM service account associated with the\nfunction at runtime. The service account represents the identity of the\nrunning function, and determines what permissions the function has.\n+\nIf not provided, the function will use the project's default service\naccount for Compute Engine",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--set-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables. All existing build environment variables will be removed first",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--set-env-vars",
          description:
            "List of key-value pairs to set as environment variables. All existing environment variables will be removed first",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--set-secrets",
          description:
            "List of secret environment variables and secret volumes to configure.\nExisting secrets configuration will be overwritten.\n+\nYou can reference a secret value referred to as `SECRET_VALUE_REF` in the\nhelp text in the following ways.\n+\n* Use `${SECRET}:${VERSION}` if you are referencing a secret in the same\n  project, where `${SECRET}` is the name of the secret in secret manager\n  (not the full resource name) and `${VERSION}` is the version of the\n  secret which is either a `positive integer` or the label `latest`.\n  For example, use `SECRET_FOO:1` to reference version `1` of the secret\n  `SECRET_FOO` which exists in the same project as the function.\n+\n* Use `projects/${PROJECT}/secrets/${SECRET}/versions/${VERSION}` or\n  `projects/${PROJECT}/secrets/${SECRET}:${VERSION}` to reference a secret\n  version using the full resource name, where `${PROJECT}` is either the\n  project number (`preferred`) or the project ID of the project which\n  contains the secret, `${SECRET}` is the name of the secret in secret\n  manager (not the full resource name) and `${VERSION}` is the version of\n  the secret which is either a `positive integer` or the label `latest`.\n  For example, use `projects/1234567890/secrets/SECRET_FOO/versions/1` or\n  `projects/project_id/secrets/SECRET_FOO/versions/1` to reference version\n  `1` of the secret `SECRET_FOO` that exists in the project `1234567890`\n  or `project_id` respectively.\n  This format is useful when the secret exists in a different project.\n+\nTo configure the secret as an environment variable, use\n`SECRET_ENV_VAR=SECRET_VALUE_REF`. To use the value of the secret, read\nthe environment variable `SECRET_ENV_VAR` as you would normally do in the\nfunction's programming language.\n+\nWe recommend using a `numeric` version for secret environment variables\nas any updates to the secret value are not reflected until new clones\nstart.\n+\nTo mount the secret within a volume use `/secret_path=SECRET_VALUE_REF` or\n`/mount_path:/secret_file_path=SECRET_VALUE_REF`. To use the value of the\nsecret, read the file at `/secret_path` as you would normally do in the\nfunction's programming language.\n+\nFor example, `/etc/secrets/secret_foo=SECRET_FOO:latest` or\n`/etc/secrets:/secret_foo=SECRET_FOO:latest` will make the value of the\n`latest` version of the secret `SECRET_FOO` available in a file\n`secret_foo` under the directory `/etc/secrets`. `/etc/secrets` will be\nconsidered as the `mount path` and will `not` be available for any other\nvolume.\n+\nWe recommend referencing the `latest` version when using secret volumes so\nthat the secret's value changes are reflected immediately",
          args: {
            name: "SECRET_ENV_VAR=SECRET_VALUE_REF,/secret_path=SECRET_VALUE_REF,/mount_path:/secret_file_path=SECRET_VALUE_REF",
            description: "Dict",
            suggestions: [],
          },
        },
        {
          name: "--source",
          description:
            "Location of source code to deploy.\n+\nLocation of the source can be one of the following three options:\n+\n* Source code in Google Cloud Storage (must be a `.zip` archive),\n* Reference to source repository or,\n* Local filesystem path (root directory of function source).\n+\nNote that, depending on your runtime type, Cloud Functions will look\nfor files with specific names for deployable functions. For Node.js,\nthese filenames are `index.js` or `function.js`. For Python, this is\n`main.py`.\n+\nIf you do not specify the `--source` flag:\n+\n* The current directory will be used for new function deployments.\n* If the function was previously deployed using a local filesystem path,\nthen the function's source code will be updated using the current\ndirectory.\n* If the function was previously deployed using a Google Cloud Storage\nlocation or a source repository, then the function's source code will not\nbe updated.\n+\nThe value of the flag will be interpreted as a Cloud Storage location, if\nit starts with `gs://`.\n+\nThe value will be interpreted as a reference to a source repository, if it\nstarts with `https://`.\n+\nOtherwise, it will be interpreted as the local filesystem path. When\ndeploying source from the local filesystem, this command skips files\nspecified in the `.gcloudignore` file (see `gcloud topic gcloudignore` for\nmore information). If the `.gcloudignore` file doesn't exist, the command\nwill try to create it.\n+\nThe minimal source repository URL is:\n`https://source.developers.google.com/projects/${PROJECT}/repos/${REPO}`\n+\nBy using the URL above, sources from the root directory of the\nrepository on the revision tagged `master` will be used.\n+\nIf you want to deploy from a revision different from `master`, append one\nof the following three sources to the URL:\n+\n* `/revisions/${REVISION}`,\n* `/moveable-aliases/${MOVEABLE_ALIAS}`,\n* `/fixed-aliases/${FIXED_ALIAS}`.\n+\nIf you'd like to deploy sources from a directory different from the root,\nyou must specify a revision, a moveable alias, or a fixed alias, as above,\nand append `/paths/${PATH_TO_SOURCES_DIRECTORY}` to the URL.\n+\nOverall, the URL should match the following regular expression:\n+\n```\n^https://source\\.developers\\.google\\.com/projects/\n(?<accountId>[^/]+)/repos/(?<repoName>[^/]+)\n(((/revisions/(?<commit>[^/]+))|(/moveable-aliases/(?<branch>[^/]+))|\n(/fixed-aliases/(?<tag>[^/]+)))(/paths/(?<path>.*))?)?$\n```\n+\nAn example of a validly formatted source repository URL is:\n+\n```\nhttps://source.developers.google.com/projects/123456789/repos/testrepo/\nmoveable-aliases/alternate-branch/paths/path-to=source\n```",
          args: { name: "SOURCE", description: "String", suggestions: [] },
        },
        {
          name: "--stage-bucket",
          description:
            "When deploying a function from a local directory, this flag's value is the name of the Google Cloud Storage bucket in which source code will be stored. Note that if you set the `--stage-bucket` flag when deploying a function, you will need to specify `--source` or `--stage-bucket` in subsequent deployments to update your source code. To use this flag successfully, the account in use must have permissions to write to this bucket. For help granting access, refer to this guide: https://cloud.google.com/storage/docs/access-control/",
          args: {
            name: "STAGE_BUCKET",
            description:
              "Googlecloudsdk.api_lib.functions.v1.util:ValidateAndStandarizeBucketUriOrRaise",
            suggestions: [],
          },
        },
        {
          name: "--subnet",
          description:
            "The VPC subnetwork that the Cloud Function will get IPs from. The subnetwork must be `/26` or larger. If --network is also specified, subnet must be a subnetwork of the network specified by the --network flag. If --network is not specified, network will be looked up from this subnetwork. To clear existing VPC network settings, use --clear-network",
          args: { name: "SUBNET", description: "String", suggestions: [] },
        },
        {
          name: "--timeout",
          description:
            "The function execution timeout, e.g. 30s for 30 seconds. Defaults to\noriginal value for existing function or 60 seconds for new functions.\n+\nFor GCF 1st gen functions, cannot be more than 540s.\n+\nFor GCF 2nd gen functions, cannot be more than 3600s.\n+\nSee $ gcloud topic datetimes for information on duration formats",
          args: {
            name: "TIMEOUT",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
            suggestions: [],
          },
        },
        flag14975,
        {
          name: "--trigger-bucket",
          description:
            "Google Cloud Storage bucket name. Trigger the function when an object is created or overwritten in the specified Cloud Storage bucket",
          args: {
            name: "TRIGGER_BUCKET",
            description:
              "Googlecloudsdk.api_lib.functions.v1.util:ValidateAndStandarizeBucketUriOrRaise",
            suggestions: [],
          },
        },
        {
          name: "--trigger-event",
          description:
            "Specifies which action should trigger the function. For a list of acceptable values, call `gcloud functions event-types list`",
          args: { name: "EVENT_TYPE", description: "String", suggestions: [] },
        },
        {
          name: "--trigger-event-filters",
          description:
            "The Eventarc matching criteria for the trigger. The criteria can be\nspecified either as a single comma-separated argument or as multiple\narguments. The filters must include the ``type'' attribute, as well as any\nother attributes that are expected for the chosen type",
          args: {
            name: "ATTRIBUTE=VALUE",
            description: "Dict",
            suggestions: [],
          },
        },
        {
          name: "--trigger-event-filters-path-pattern",
          description:
            "The Eventarc matching criteria for the trigger in path pattern format.\nThe criteria can be specified as a single comma-separated argument or as\nmultiple arguments.\n+\nThe provided attribute/value pair will be used with the\n`match-path-pattern` operator to configure the trigger, see\nhttps://cloud.google.com/eventarc/docs/reference/rest/v1/projects.locations.triggers#eventfilter\nand https://cloud.google.com/eventarc/docs/path-patterns for more details about on\nhow to construct path patterns.\n+\nFor example, to filter on events for Compute Engine VMs in a given zone:\n`--trigger-event-filters-path-pattern=resourceName='/projects/*/zones/us-central1-a/instances/*'",
          args: {
            name: "ATTRIBUTE=PATH_PATTERN",
            description: "Dict",
            suggestions: [],
          },
        },
        {
          name: "--trigger-http",
          description:
            "Function will be assigned an endpoint, which you can view by using\nthe `describe` command. Any HTTP request (of a supported type) to the\nendpoint will trigger function execution. Supported HTTP request\ntypes are: POST, PUT, GET, DELETE, and OPTIONS",
        },
        {
          name: "--trigger-location",
          description:
            "The location of the trigger, which must be a region or multi-region where the relevant events originate",
          args: {
            name: "TRIGGER_LOCATION",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--trigger-resource",
          description:
            "Specifies which resource from `--trigger-event` is being observed. E.g. if `--trigger-event` is  `providers/cloud.storage/eventTypes/object.change`, `--trigger-resource` must be a bucket name. For a list of expected resources, call `gcloud functions event-types list`",
          args: { name: "RESOURCE", description: "String", suggestions: [] },
        },
        {
          name: "--trigger-service-account",
          description:
            "The email address of the IAM service account associated with the Eventarc\ntrigger for the function. This is used for authenticated invocation.\n+\nIf not provided, the function will use the project's default service\naccount for Compute Engine",
          args: {
            name: "TRIGGER_SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--trigger-topic",
          description:
            "Name of Pub/Sub topic. Every message published in this topic will trigger function execution with message contents passed as input data. Note that this flag does not accept the format of projects/PROJECT_ID/topics/TOPIC_ID. Use this flag to specify the final element TOPIC_ID. The PROJECT_ID will be read from the active configuration",
          args: {
            name: "TRIGGER_TOPIC",
            description:
              "Googlecloudsdk.api_lib.functions.v1.util:ValidatePubsubTopicNameOrRaise",
            suggestions: [],
          },
        },
        {
          name: "--update-build-env-vars",
          description:
            "List of key-value pairs to set as build environment variables",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--update-env-vars",
          description:
            "List of key-value pairs to set as environment variables",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--update-labels",
          description:
            "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers.\n+\nLabel keys starting with `deployment` are reserved for use by deployment tools and cannot be specified manually",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--update-secrets",
          description:
            "List of secret environment variables and secret volumes to update.\nExisting secrets configuration not specified in this list will be\npreserved",
          args: {
            name: "SECRET_ENV_VAR=SECRET_VALUE_REF,/secret_path=SECRET_VALUE_REF,/mount_path:/secret_file_path=SECRET_VALUE_REF",
            description: "Dict",
            suggestions: [],
          },
        },
        flag15315,
        flag15424,
        {
          name: "--vpc-connector",
          description:
            "ID of the connector or fully qualified identifier for the connector.\n+\nTo set the `connector` attribute:\n* provide the argument `--vpc-connector` on the command line",
          args: {
            name: "VPC_CONNECTOR",
            description: "String",
            suggestions: [],
          },
        },
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "describe",
      description: "Display details of a Google Cloud Function",
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
        flag12380,
        flag14975,
        flag15315,
        flag15350,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "detach",
      description:
        "Detach a Cloud Functions v2 function from its existing environment and make it a native Cloud Run function",
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
        flag12380,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "event-types",
      description:
        "List types of events that can be a trigger for a Google Cloud Function",
      subcommands: [
        {
          name: "list",
          description:
            "List types of events that can be a trigger for a Google Cloud Function",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5208,
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
      ],
    },
    {
      name: "get-iam-policy",
      description: "Get IAM policy for a Google Cloud Function",
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
        flag12380,
        flag13948,
        flag14975,
        flag15249,
        flag15315,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "list",
      description: "List Google Cloud Functions",
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
          name: "--regions",
          description:
            "Regions containing functions to list. By default, functions from the region configured in [functions/region] property are listed",
          args: { name: "REGION", description: "List", suggestions: [] },
        },
        flag13948,
        flag14975,
        flag15315,
        flag15350,
        flag15424,
      ],
    },
    {
      name: "logs",
      description: "Display log entries produced by Google Cloud Functions",
      subcommands: [
        {
          name: "read",
          description: "Display log entries produced by Google Cloud Functions",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--end-time",
              description:
                "Return only log entries which timestamps are not later than the specified time. If *--end-time* is specified but *--start-time* is not, the command returns *--limit* latest log entries which appeared before --end-time. See *$ gcloud topic datetimes* for information on time formats",
              args: {
                name: "END_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--execution-id",
              description: "Execution ID for which logs are to be displayed",
              args: {
                name: "EXECUTION_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5206,
            flag5453,
            flag5699,
            {
              name: "--limit",
              description:
                "Number of log entries to be fetched; must not be greater than 1000. Note that the most recent entries in the specified time range are returned, rather than the earliest",
              args: { name: "LIMIT", description: "Int", suggestions: [] },
            },
            flag7356,
            {
              name: "--min-log-level",
              description:
                "Minimum level of logs to be fetched. _MIN_LOG_LEVEL_ must be one of: *debug*, *info*, *error*",
              args: {
                name: "MIN_LOG_LEVEL",
                description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
                suggestions: ["debug", "info", "error"],
              },
            },
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Only show logs generated by functions in the region. Overrides the default *functions/region* property value for this command invocation",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            {
              name: "--start-time",
              description:
                "Return only log entries in which timestamps are not earlier than the specified time. If *--start-time* is not specified, a default start time of 1 week ago is assumed. See $ gcloud topic datetimes for information on time formats",
              args: {
                name: "START_TIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description:
              "Name of the function which logs are to be displayed. If no name is specified, logs from all functions are displayed",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "regions",
      description: "List regions available to Google Cloud Functions",
      subcommands: [
        {
          name: "list",
          description: "List regions available to Google Cloud Functions",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5208,
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
      name: "remove-iam-policy-binding",
      description: "Removes an IAM policy binding from a Google Cloud Function",
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
          args: { name: "PRINCIPAL", description: "String", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12380,
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
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "remove-invoker-policy-binding",
      description:
        "Removes an invoker binding from the IAM policy of a Google Cloud Function",
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
            "The principal to remove from the IAM policy. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
          args: { name: "PRINCIPAL", description: "String", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12380,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "NAME",
        description:
          "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
      },
    },
    {
      name: "runtimes",
      description: "List runtimes available to Google Cloud Functions",
      subcommands: [
        {
          name: "list",
          description: "List runtimes available to Google Cloud Functions",
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
              name: "--region",
              description:
                "Only show runtimes within the region. Overrides the default *functions/region* property value for this command invocation",
              args: { name: "REGION", description: "String", suggestions: [] },
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
      name: "set-iam-policy",
      description: "Sets IAM policy for a Google Cloud Function",
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
        flag12380,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "NAME",
          description:
            "ID of the function or fully qualified identifier for the function.\n+\nTo set the `function` attribute:\n* provide the argument `NAME` on the command line",
        },
        {
          name: "POLICY_FILE",
          description:
            "Path to a local JSON or YAML formatted file containing a valid policy",
        },
      ],
    },
  ],
};

export default completionSpec;
