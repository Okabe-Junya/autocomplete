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
const flag617: Fig.Option = {
  name: "--app-installation-id",
  description: "Installation ID of the Cloud Build GitHub App",
  args: { name: "APP_INSTALLATION_ID", description: "Int", suggestions: [] },
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
const flag1266: Fig.Option = {
  name: "--branch-pattern",
  description:
    'A regular expression specifying which git branches to match.\n+\nThis pattern is used as a regular expression search for any incoming pushes.\nFor example, --branch-pattern=foo will match "foo", "foobar", and "barfoo".\nEvents on a branch that does not match will be ignored.\n+\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax',
  args: { name: "REGEX", description: "String", suggestions: [] },
};
const flag1267: Fig.Option = {
  name: "--branch",
  description: "Branch to build",
  args: { name: "BRANCH", description: "String", suggestions: [] },
};
const flag1302: Fig.Option = {
  name: "--build-config",
  description:
    "Path to a YAML or JSON file containing the build configuration in the repository.\n+\nFor more details, see: https://cloud.google.com/cloud-build/docs/build-config",
  args: { name: "PATH", description: "String", suggestions: [] },
};
const flag1924: Fig.Option = {
  name: "--clear-substitutions",
  description: "Clear existing substitutions",
};
const flag2157: Fig.Option = {
  name: "--comment-control",
  description:
    "Require a repository collaborator or owner to comment '/gcbrun' on a pull request before running the build. _COMMENT_CONTROL_ must be one of:\n+\n*COMMENTS_DISABLED*::: Do not require comments on Pull Requests before builds are triggered.\n*COMMENTS_ENABLED*::: Enforce that repository owners or collaborators must comment on Pull Requests before builds are triggered.\n*COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY*::: Enforce that repository owners or collaborators must comment on external contributors' Pull Requests before builds are triggered.\n:::\n+",
  args: {
    name: "COMMENT_CONTROL",
    description: "String",
    suggestions: [
      "COMMENTS_DISABLED",
      "COMMENTS_ENABLED",
      "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY",
    ],
  },
};
const flag2158: Fig.Option = {
  name: "--comment-control",
  description:
    "Require a repository collaborator or owner to comment '/gcbrun' on a pull\nrequest before running the build. _COMMENT_CONTROL_ must be one of:\n+\n*COMMENTS_DISABLED*::: \nDo not require comments on Pull Requests before builds are triggered.\n*COMMENTS_ENABLED*::: \nEnforce that repository owners or collaborators must comment on Pull Requests\nbefore builds are triggered.\n*COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY*::: \nEnforce that repository owners or collaborators must comment on external\ncontributors' Pull Requests before builds are triggered.\n:::\n+",
  args: {
    name: "COMMENT_CONTROL",
    description: "String",
    suggestions: [
      "COMMENTS_DISABLED",
      "COMMENTS_ENABLED",
      "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY",
    ],
  },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2330: Fig.Option = {
  name: "--connection",
  description:
    "Connection ID.\n+\nTo set the `connection` attribute:\n* provide the argument `repository` on the command line with a fully specified name;\n* provide the argument `--connection` on the command line",
  args: { name: "CONNECTION", description: "String", suggestions: [] },
};
const flag3170: Fig.Option = {
  name: "--description",
  description: "Build trigger description",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3875: Fig.Option = {
  name: "--dockerfile-dir",
  description:
    "Location of the directory containing the Dockerfile in the repository.\n+\nThe directory will also be used as the Docker build context",
  args: { name: "DOCKERFILE_DIR", description: "String", suggestions: [] },
};
const flag3876: Fig.Option = {
  name: "--dockerfile-image",
  description:
    "Docker image name to build.\n+\nIf not specified, gcr.io/PROJECT/github.com/REPO_OWNER/REPO_NAME:$COMMIT_SHA will be used.\n+\nUse a build configuration (cloudbuild.yaml) file for building multiple images in a single trigger",
  args: { name: "DOCKERFILE_IMAGE", description: "String", suggestions: [] },
};
const flag3877: Fig.Option = {
  name: "--dockerfile-image",
  description: "Docker image name to build",
  args: { name: "DOCKERFILE_IMAGE", description: "String", suggestions: [] },
};
const flag3878: Fig.Option = {
  name: "--dockerfile",
  description:
    "Path of Dockerfile to use for builds in the repository.\n+\nIf specified, a build config will be generated to run docker\nbuild using the specified file.\n+\nThe filename is relative to the Dockerfile directory",
  args: { name: "DOCKERFILE", description: "String", suggestions: [] },
};
const flag4433: Fig.Option = {
  name: "--enterprise-config",
  description:
    'Resource name of the GitHub Enterprise config that should be applied to this\ninstallation.\n+\nFor example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}',
  args: { name: "ENTERPRISE_CONFIG", description: "String", suggestions: [] },
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
const flag5223: Fig.Option = {
  name: "--git-file-source-branch",
  description: "The branch of the repository to clone when trigger is invoked",
  args: {
    name: "GIT_FILE_SOURCE_BRANCH",
    description: "String",
    suggestions: [],
  },
};
const flag5224: Fig.Option = {
  name: "--git-file-source-github-enterprise-config",
  description:
    "The resource name of the GitHub Enterprise config that should be applied to this source",
  args: {
    name: "GIT_FILE_SOURCE_GITHUB_ENTERPRISE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag5225: Fig.Option = {
  name: "--git-file-source-path",
  description: "The file in the repository to clone when trigger is invoked",
  args: { name: "PATH", description: "String", suggestions: [] },
};
const flag5226: Fig.Option = {
  name: "--git-file-source-repo-type",
  description: "The type of the repository to clone when trigger is invoked",
  args: {
    name: "GIT_FILE_SOURCE_REPO_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag5228: Fig.Option = {
  name: "--git-file-source-tag",
  description: "The tag of the repository to clone when trigger is invoked",
  args: { name: "GIT_FILE_SOURCE_TAG", description: "String", suggestions: [] },
};
const flag5229: Fig.Option = {
  name: "--git-file-source-uri",
  description: "The URI of the repository to clone when trigger is invoked",
  args: { name: "URL", description: "String", suggestions: [] },
};
const flag5252: Fig.Option = {
  name: "--github-enterprise-config",
  description:
    "The resource name of the GitHub Enterprise config that should be applied to this source (1st gen).\nFormat: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id} or projects/{project}/githubEnterpriseConfigs/{id}",
  args: {
    name: "GITHUB_ENTERPRISE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5476: Fig.Option = {
  name: "--host-uri",
  description: "URI of the Bitbucket Data Center instance",
  args: { name: "HOST_URI", description: "String", suggestions: [] },
};
const flag5479: Fig.Option = {
  name: "--host-uri",
  description: "URI of the GitLab instance",
  args: { name: "HOST_URI", description: "String", suggestions: [] },
};
const flag5659: Fig.Option = {
  name: "--ignored-files",
  description:
    "Glob filter. Changes only affecting ignored files won't trigger builds",
  args: { name: "GLOB", description: "List", suggestions: [] },
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
const flag5748: Fig.Option = {
  name: "--include-logs-with-status",
  description:
    "Build logs will be sent back to GitHub as part of the checkrun result",
};
const flag5765: Fig.Option = {
  name: "--included-files",
  description:
    "Glob filter. Changes affecting at least one included file will trigger builds",
  args: { name: "GLOB", description: "List", suggestions: [] },
};
const flag5800: Fig.Option = {
  name: "--inline-config",
  description:
    "Local path to a YAML or JSON file containing a build configuration",
  args: { name: "PATH", description: "String", suggestions: [] },
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
const flag8089: Fig.Option = {
  name: "--name",
  description: "Build trigger name",
  args: { name: "NAME", description: "String", suggestions: [] },
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
const flag11880: Fig.Option = {
  name: "--pull-request-pattern",
  description:
    'A regular expression specifying which base git branch to match for\npull request events.\n+\nThis pattern is used as a regular expression search for the base branch (the\nbranch you are trying to merge into) for pull request updates.\nFor example, --pull-request-pattern=foo will match "foo", "foobar", and "barfoo".\n+\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax',
  args: { name: "REGEX", description: "String", suggestions: [] },
};
const flag11881: Fig.Option = {
  name: "--pull-request-pattern",
  description:
    'Regular expression specifying which base git branch to match for\npull request events.\n+\nThis pattern is used as a regex search for the base branch (the branch you are\ntrying to merge into) for pull request updates.\nFor example, --pull-request-pattern=foo will match "foo", "foobar", and "barfoo".\n+\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax',
  args: { name: "REGEX", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12338: Fig.Option = {
  name: "--region",
  description:
    "The Cloud location for the trigger.\n+\nTo set the `region` attribute:\n* provide the argument `TRIGGER` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `builds/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12343: Fig.Option = {
  name: "--region",
  description: "The Cloud region where the worker pool is",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12373: Fig.Option = {
  name: "--region",
  description:
    "The region of the Cloud Build Service to use.\nMust be set to a supported region name (e.g. `us-central1`).\nIf unset, `builds/region`, which is the default region to use when working with Cloud Build resources, is used. If builds/region is unset, region is set to `global`.\nNote: Region must be specified in 2nd gen repo; `global` is not supported",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12442: Fig.Option = {
  name: "--region",
  description:
    "The Google Cloud region.\n+\nTo set the `region` attribute:\n* provide the argument `connection` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `builds/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12443: Fig.Option = {
  name: "--region",
  description:
    "The Google Cloud region.\n+\nTo set the `region` attribute:\n* provide the argument `repository` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `builds/region`",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12738: Fig.Option = {
  name: "--remove-substitutions",
  description: "Remove existing substitutions if present",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag12798: Fig.Option = {
  name: "--repo-type",
  description:
    "Type of the repository (1st gen). Currently only GitHub and Cloud Source Repository types\nare supported",
  args: { name: "REPO_TYPE", description: "String", suggestions: [] },
};
const flag12799: Fig.Option = {
  name: "--repo",
  description:
    "ID of the repo or fully qualified identifier for the repo.\n+\nTo set the `repo` attribute:\n* provide the argument `--repo` on the command line",
  args: { name: "REPO", description: "String", suggestions: [] },
};
const flag12800: Fig.Option = {
  name: "--repo",
  description:
    "URI of the repository (1st gen). Currently only HTTP URIs for GitHub and Cloud\nSource Repositories are supported",
  args: { name: "REPO", description: "String", suggestions: [] },
};
const flag12814: Fig.Option = {
  name: "--repository",
  description:
    'Repository resource (2nd gen) to use, in the format\n"projects/*/locations/*/connections/*/repositories/*"',
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12815: Fig.Option = {
  name: "--repository",
  description:
    'Repository resource (2nd gen) to use, in the format "projects/*/locations/*/connections/*/repositories/*"',
  args: { name: "REPOSITORY", description: "String", suggestions: [] },
};
const flag12879: Fig.Option = {
  name: "--require-approval",
  description:
    "Require manual approval for triggered builds. Use *--require-approval* to enable and *--no-require-approval* to disable",
};
const flag13547: Fig.Option = {
  name: "--service-account",
  description:
    "The service account used for all user-controlled operations including UpdateBuildTrigger, RunBuildTrigger, CreateBuild, and CancelBuild. If no service account is set, then the standard Cloud Build service account ([PROJECT_NUM]@system.gserviceaccount.com) is used instead. Format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}`",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14101: Fig.Option = {
  name: "--source-to-build-branch",
  description: "Branch to build",
  args: {
    name: "SOURCE_TO_BUILD_BRANCH",
    description: "String",
    suggestions: [],
  },
};
const flag14102: Fig.Option = {
  name: "--source-to-build-github-enterprise-config",
  description:
    "The resource name of the GitHub Enterprise config that should be applied to\nthis source (1st gen).\nFormat: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}\nor projects/{project}/githubEnterpriseConfigs/{id}",
  args: {
    name: "SOURCE_TO_BUILD_GITHUB_ENTERPRISE_CONFIG",
    description: "String",
    suggestions: [],
  },
};
const flag14103: Fig.Option = {
  name: "--source-to-build-repo-type",
  description:
    "Type of the repository (1st gen). Currently only GitHub and Cloud Source\nRepository types are supported",
  args: {
    name: "SOURCE_TO_BUILD_REPO_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag14105: Fig.Option = {
  name: "--source-to-build-tag",
  description: "Tag to build",
  args: { name: "SOURCE_TO_BUILD_TAG", description: "String", suggestions: [] },
};
const flag14106: Fig.Option = {
  name: "--source-to-build-uri",
  description:
    "The URI of the repository that should be applied to this source (1st gen)",
  args: { name: "SOURCE_TO_BUILD_URI", description: "String", suggestions: [] },
};
const flag14303: Fig.Option = {
  name: "--ssl-ca-file",
  description: "File containing the SSL_CA to be used",
  args: { name: "SSL_CA_FILE", description: "String", suggestions: [] },
};
const flag14549: Fig.Option = {
  name: "--subscription-filter",
  description:
    "CEL filter expression for the trigger. See https://cloud.google.com/build/docs/filter-build-events-using-cel for more details",
  args: { name: "SUBSCRIPTION_FILTER", description: "String", suggestions: [] },
};
const flag14557: Fig.Option = {
  name: "--substitutions",
  description:
    'Parameters to be substituted in the build specification. For example:\n+\n  $ {command} ... --substitutions _FAVORITE_COLOR=blue,_NUM_CANDIES=10\n+\nThis will result in a build where every occurrence of ```${_FAVORITE_COLOR}```\nin certain fields is replaced by "blue", and similarly for ```${_NUM_CANDIES}```\nand "10".\n+\nSubstitutions can be applied to user-defined variables (starting with an\nunderscore) and to the following built-in variables: REPO_NAME, BRANCH_NAME,\nTAG_NAME, REVISION_ID, COMMIT_SHA, SHORT_SHA.\n+\nFor more details, see:\nhttps://cloud.google.com/build/docs/configuring-builds/substitute-variable-values',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag14608: Fig.Option = {
  name: "--tag-pattern",
  description:
    'A regular expression specifying which git tags to match.\n+\nThis pattern is used as a regular expression search for any incoming pushes.\nFor example, --tag-pattern=foo will match "foo", "foobar", and "barfoo".\nEvents on a tag that does not match will be ignored.\n+\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax',
  args: { name: "REGEX", description: "String", suggestions: [] },
};
const flag14617: Fig.Option = {
  name: "--tag",
  description: "Tag to build",
  args: { name: "TAG", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14997: Fig.Option = {
  name: "--trigger-config",
  description:
    "Path to Build Trigger config file (JSON or YAML format). For more details, see\nhttps://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.triggers#BuildTrigger",
  args: { name: "PATH", description: "String", suggestions: [] },
};
const flag15226: Fig.Option = {
  name: "--update-substitutions",
  description:
    'Update or add to existing substitutions.\nSubstitutions are parameters to be substituted or add in the build specification.\n+\nFor example (using some nonsensical substitution keys; all keys must begin with\nan underscore):\n+\n  $ gcloud builds triggers update ...\n      --update-substitutions _FAVORITE_COLOR=blue,_NUM_CANDIES=10\n+\nThis will add the provided substitutions to the existing substitutions and\nresults in a build where every occurrence of ```${_FAVORITE_COLOR}```\nin certain fields is replaced by "blue", and similarly for ```${_NUM_CANDIES}```\nand "10".\n+\nOnly the following built-in variables can be specified with the\n`--substitutions` flag: REPO_NAME, BRANCH_NAME, TAG_NAME, REVISION_ID,\nCOMMIT_SHA, SHORT_SHA.\n+\nFor more details, see:\nhttps://cloud.google.com/build/docs/build-config-file-schema#substitutions',
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
const flag15587: Fig.Option = {
  name: "--worker-disk-size",
  description:
    "Size of the disk attached to the worker.\n+\nIf unspecified, Cloud Build uses a standard disk size",
  args: {
    name: "WORKER_DISK_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15590: Fig.Option = {
  name: "--worker-machine-type",
  description:
    "Compute Engine machine type for a worker pool.\n+\nIf unspecified, Cloud Build uses a standard machine type",
  args: { name: "WORKER_MACHINE_TYPE", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "builds",
  description: "Create and manage builds for Google Cloud Build",
  subcommands: [
    {
      name: "cancel",
      description: "Cancel an ongoing build",
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
        flag12373,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "BUILDS",
        description: "IDs of builds to cancel",
        isVariadic: true,
      },
    },
    {
      name: "connections",
      description: "Manage connections for Google Cloud Build",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding to a Cloud Build connection",
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
            flag12442,
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
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "create",
          description: "Create Connections in Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Create a Cloud Build Connection for Bitbucket Cloud",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read`,`repository_admin`, `pullrequest_read`, `webhook` repository/project/workspace access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
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
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read` repository/project/workspace access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12442,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by\nBitbucket Cloud",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--workspace",
                  description: "Workspace of the Bitbucket Cloud instance",
                  args: {
                    name: "WORKSPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "bitbucket-data-center",
              description:
                "Create a Cloud Build Connection for Bitbucket Data Center",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_ADMIN personal access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5476,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_READ personal access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12442,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the Bitbucket Data Center. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14303,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by\nBitbucket Data Center",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "github",
              description: "Create a Cloud Build Connection of type GitHub",
              options: [
                flag42,
                flag46,
                flag617,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description: "Secret containing the authorizer user's token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
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
                flag12442,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "github-enterprise",
              description:
                "Create a Cloud Build Connection of type GitHub Enterprise",
              options: [
                flag42,
                flag46,
                {
                  name: "--app-id",
                  description:
                    "App ID of the GitHub App in the GitHub Enterprise server",
                  args: { name: "APP_ID", description: "Int", suggestions: [] },
                },
                flag617,
                {
                  name: "--app-slug",
                  description:
                    'App slug (url-friendly name) of the GitHub App. When seeing the configuration\npage of the App (e.g. in https://my-ghe-server.net/settings/apps/my-app), the app-slug\nis the last component of the URL path ("my-app" in that example)',
                  args: {
                    name: "APP_SLUG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--host-uri",
                  description: "URI of the GitHub Enterprise server",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                {
                  name: "--private-key-secret-version",
                  description:
                    "Secret containing the private key of the GitHub App",
                  args: {
                    name: "PRIVATE_KEY_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag12442,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the GitHub Enterprise Server. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14303,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events generated by\nthe GitHub App",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "gitlab",
              description:
                "Create a Cloud Build Connection for gitlab.com or GitLab Enterprise",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the api personal access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5479,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the read_api personal access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12442,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the gitlab.com or GitLab Enterprise Server. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14303,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by\nGitLab",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Cloud Build Connection",
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
            flag12442,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Build Connection",
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
            flag12442,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud Build connection",
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
            flag12442,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "CONNECTION",
            description:
              "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List all Cloud Build connections for a project and region",
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
                "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line;\n* set the property `builds/region`",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud Build connection",
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
            flag12442,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "CONNECTION",
              description:
                "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
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
          description: "Update Connections in Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Update a Cloud Build Connection of type Bitbucket Cloud",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read`,`repository_admin`, `pullrequest_read`, `webhook` access token. It can be a repository, project or workspace access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
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
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the `repository_read` access token. It can be a repository, project or workspace access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12442,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events sent by Bitbucket Cloud",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--workspace",
                  description: "Workspace of the Bitbucket Cloud instance",
                  args: {
                    name: "WORKSPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "bitbucket-data-center",
              description:
                "Update a Cloud Build Connection of type Bitbucket Data Center",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_ADMIN personal access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5476,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the REPO_READ personal access token",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12442,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the Bitbucket Data Center. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14303,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "github",
              description: "Update a Cloud Build Connection of type GitHub",
              options: [
                flag42,
                flag46,
                flag617,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description: "Secret containing the authorizer user's token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
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
                flag12442,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "github-enterprise",
              description:
                "Update a Cloud Build Connection of type GitHub Enterprise",
              options: [
                flag42,
                flag46,
                {
                  name: "--app-id",
                  description:
                    "App ID of the GitHub App in the GitHub Enterprise server",
                  args: { name: "APP_ID", description: "Int", suggestions: [] },
                },
                flag617,
                {
                  name: "--app-slug",
                  description:
                    'App slug (url-friendly name) of the GitHub App. When seeing the configuration\npage of the App (e.g. in https://my-ghe-server.net/settings/apps/my-app), the app-slug\nis the last component of the URL path ("my-app" in that example)',
                  args: {
                    name: "APP_SLUG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--host-uri",
                  description: "URI of the GitHub Enterprise server",
                  args: {
                    name: "HOST_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                {
                  name: "--private-key-secret-version",
                  description:
                    "Secret containing the private key of the GitHub App",
                  args: {
                    name: "PRIVATE_KEY_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag12442,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the GitHub Enterprise Server. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14303,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--webhook-secret-secret-version",
                  description:
                    "Secret containing the webhook secret string for validating webhook events generated by\nthe GitHub App",
                  args: {
                    name: "WEBHOOK_SECRET_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
            {
              name: "gitlab",
              description:
                "Update a Cloud Build Connection of type gitlab.com or GitLab Enterprise",
              options: [
                flag42,
                flag46,
                flag720,
                {
                  name: "--authorizer-token-secret-version",
                  description:
                    "Secret containing the api personal access token",
                  args: {
                    name: "AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5479,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--read-authorizer-token-secret-version",
                  description:
                    "Secret containing the read_repository personal access token. Required for GitLab Enterprise versions older than 13.10",
                  args: {
                    name: "READ_AUTHORIZER_TOKEN_SECRET_VERSION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12442,
                {
                  name: "--service-directory-service",
                  description:
                    "Service Directory service resource to use for accessing the GitLab Enterprise Server. Necessary only if the server has no public access from the internet",
                  args: {
                    name: "SERVICE_DIRECTORY_SERVICE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14303,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CONNECTION",
                description:
                  "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `connection` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "describe",
      description: "Get information about a particular build",
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
        flag12373,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "BUILD",
        description:
          "The build to describe. The ID of the build is printed at the end of the build submission process, or in the ID column when listing builds",
      },
    },
    {
      name: "get-default-service-account",
      description: "Get the default service account for a project",
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
        flag12373,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "list",
      description: "List builds",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        {
          name: "--filter",
          description:
            "Apply a Boolean filter EXPRESSION to each resource item to be listed.\nIf the expression evaluates True, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters.\nThis flag interacts with other flags that are applied in this order:\n--flatten, --sort-by, --filter, --limit",
          args: { name: "EXPRESSION", description: "String", suggestions: [] },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        {
          name: "--limit",
          description:
            "Maximum number of resources to list. The default is *50*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: { name: "LIMIT", description: "Int", suggestions: [] },
        },
        flag7356,
        {
          name: "--ongoing",
          description: "Only list builds that are currently QUEUED or WORKING",
        },
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *20*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
          args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag12373,
        flag13948,
        flag14975,
        flag15249,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "log",
      description: "Stream the logs for a build",
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
        flag12373,
        {
          name: "--stream",
          description:
            "If a build is ongoing, stream the logs to stdout until the build completes",
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "BUILD",
        description:
          "The build whose logs shall be printed. The ID of the build is printed at the end of the build submission process, or in the ID column when listing builds",
      },
    },
    {
      name: "repositories",
      description: "Manage repositories for Cloud Build",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud Build repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2330,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12443,
            {
              name: "--remote-uri",
              description: "The remote git clone URL of the repository",
              args: {
                name: "REMOTE_URI",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Cloud Build Repository",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag2330,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12443,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Cloud Build Repository",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2330,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12443,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "REPOSITORY",
            description:
              "ID of the repository or fully qualified identifier for the repository.\n+\nTo set the `repository` attribute:\n* provide the argument `repository` on the command line",
          },
        },
        {
          name: "list",
          description: "List all Cloud Build repositories in a connection",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--connection",
              description:
                "ID of the connection or fully qualified identifier for the connection.\n+\nTo set the `connection` attribute:\n* provide the argument `--connection` on the command line",
              args: {
                name: "CONNECTION",
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
                "The Google Cloud region.\n+\nTo set the `region` attribute:\n* provide the argument `--connection` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* set the property `builds/region`",
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
      name: "submit",
      description: "Submit a build using Cloud Build",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        {
          name: "--config",
          description:
            "The YAML or JSON file to use as the build configuration file",
          args: { name: "CONFIG", description: "String", suggestions: [] },
        },
        flag2292,
        {
          name: "--default-buckets-behavior",
          description:
            "How default buckets are setup. _DEFAULT_BUCKETS_BEHAVIOR_ must be one of: *default-logs-bucket-behavior-unspecified*, *legacy-bucket*, *regional-user-owned-bucket*",
          args: {
            name: "DEFAULT_BUCKETS_BEHAVIOR",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: [
              "default-logs-bucket-behavior-unspecified",
              "legacy-bucket",
              "regional-user-owned-bucket",
            ],
          },
        },
        {
          name: "--dir",
          description:
            "Directory, relative to the source root, in which to run the build. This is\nused when the build source is a 2nd-gen Cloud Build repository resource, or\na Developer Connect GitRepositoryLink resource. This must be a relative\npath. If a step's `dir` is specified and is an absolute path, this value is\nignored for that step's execution",
          args: { name: "DIR", description: "String", suggestions: [] },
        },
        {
          name: "--disk-size",
          description: "Machine disk size (GB) to run the build",
          args: {
            name: "DISK_SIZE",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
            suggestions: [],
          },
        },
        flag4900,
        flag4902,
        flag5091,
        {
          name: "--gcs-log-dir",
          description:
            "A directory in Google Cloud Storage to hold build logs. If this field is not set, ```gs://[PROJECT_NUMBER].cloudbuild-logs.googleusercontent.com/``` will be created and used or ```gs://[PROJECT_NUMBER]-[builds/region]-cloudbuild-logs``` is used when you set `--default-buckets-behavior` to `REGIONAL_USER_OWNED_BUCKET`",
          args: { name: "GCS_LOG_DIR", description: "String", suggestions: [] },
        },
        {
          name: "--gcs-source-staging-dir",
          description:
            "A directory in Google Cloud Storage to copy the source used for staging the build. If the specified bucket does not exist, Cloud Build will create one. If you don't set this field, ```gs://[PROJECT_ID]_cloudbuild/source``` is used or ```gs://[PROJECT_ID]_[builds/region]_cloudbuild/source``` is used when you set `--default-buckets-behavior` to `REGIONAL_USER_OWNED_BUCKET` and `builds/region` is not `global`",
          args: {
            name: "GCS_SOURCE_STAGING_DIR",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--git-source-dir",
          description:
            "Directory, relative to the source root, in which to run the build.\nThis must be a relative path. If a step's `dir` is specified and is an absolute\npath, this value is ignored for that step's execution",
          args: {
            name: "GIT_SOURCE_DIR",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--git-source-revision",
          description:
            "Revision to fetch from the Git repository such as a branch, a tag, a commit\nSHA, or any Git ref to run the build.\n+\nCloud Build uses `git fetch` to fetch the revision from the Git repository;\ntherefore make sure that the string you provide for `revision` is parsable by\nthe command. For information on string values accepted by `git fetch`, see\nhttps://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on\n`git fetch`, see https://git-scm.com/docs/git-fetch",
          args: {
            name: "GIT_SOURCE_REVISION",
            description: "String",
            suggestions: [],
          },
        },
        flag5453,
        {
          name: "--ignore-file",
          description:
            "Override the `.gcloudignore` file and use the specified file instead",
          args: { name: "IGNORE_FILE", description: "String", suggestions: [] },
        },
        flag5699,
        flag7356,
        {
          name: "--machine-type",
          description:
            "Machine type used to run the build. _MACHINE_TYPE_ must be one of: *e2-highcpu-32*, *e2-highcpu-8*, *e2-medium*, *e2-standard-2*, *n1-highcpu-32*, *n1-highcpu-8*",
          args: {
            name: "MACHINE_TYPE",
            description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
            suggestions: [
              "e2-highcpu-32",
              "e2-highcpu-8",
              "e2-medium",
              "e2-standard-2",
              "n1-highcpu-32",
              "n1-highcpu-8",
            ],
          },
        },
        {
          name: "--no-cache",
          description:
            "If set, disable layer caching when building with Kaniko.\n+\nThis has the same effect as setting the builds/kaniko_cache_ttl property to 0 for this build.  This can be useful in cases where Dockerfile builds are non-deterministic and a non-deterministic result should not be cached",
        },
        {
          name: "--no-source",
          description:
            "Specify that no source should be uploaded with this build",
        },
        {
          name: "--pack",
          description:
            'Uses CNCF [buildpack](https://buildpacks.io/) to create the app image.  The app "image" key/value must be provided.  The app image name must be in the *gcr.io* or *pkg.dev* namespace. To specify your own builder image use the optional "builder" key/value argument. By default ```gcr.io/buildpacks/builder``` is used.   To pass environment variables to the builder use the optional "env" key/value argument where value is a list of key values using [escaping](https://cloud.google.com/sdk/gcloud/reference/topic/escaping) if necessary',
          args: { name: "PACK", description: "Dict", suggestions: [] },
        },
        {
          name: "--polling-interval",
          description:
            "Amount of time in seconds to wait between polling build status",
          args: {
            name: "POLLING_INTERVAL",
            description: "Int",
            suggestions: [],
          },
        },
        flag11637,
        flag11946,
        flag12373,
        {
          name: "--revision",
          description:
            "Revision to fetch from the Git repository such as a branch, a tag, a commit\nSHA, or any Git ref to run the build. This is used when the build source is\na 2nd-gen Cloud Build repository resource, or a Developer Connect\nGitRepositoryLink resource.\n+\nCloud Build uses `git fetch` to fetch the revision from the Git repository;\ntherefore make sure that the string you provide for `revision` is parsable\nby the command. For information on string values accepted by `git fetch`,\nsee https://git-scm.com/docs/gitrevisions#_specifying_revisions. For\ninformation on `git fetch`, see https://git-scm.com/docs/git-fetch",
          args: { name: "REVISION", description: "String", suggestions: [] },
        },
        {
          name: "--service-account",
          description:
            "The service account to use with this build. \nIf unset, the default service account will be used",
          args: {
            name: "SERVICE_ACCOUNT",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: "--substitutions",
          description:
            'Parameters to be substituted in the build specification.\n+\nFor example (using some nonsensical substitution keys; all keys must begin with\nan underscore):\n+\n    $ gcloud builds submit . --config config.yaml \\\n        --substitutions _FAVORITE_COLOR=blue,_NUM_CANDIES=10\n+\nThis will result in a build where every occurrence of ```${_FAVORITE_COLOR}```\nin certain fields is replaced by "blue", and similarly for ```${_NUM_CANDIES}```\nand "10".\n+\nOnly the following built-in variables can be specified with the\n`--substitutions` flag: REPO_NAME, BRANCH_NAME, TAG_NAME, REVISION_ID,\nCOMMIT_SHA, SHORT_SHA.\n+\nFor more details, see:\nhttps://cloud.google.com/cloud-build/docs/api/build-requests#substitutions',
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        {
          name: "--suppress-logs",
          description: "If set, build logs not streamed to stdout",
        },
        {
          name: ["--tag", "-t"],
          description:
            'The tag to use with a "docker build" image creation. Cloud Build will run a remote "docker build -t $TAG .", where $TAG is the tag provided by this flag. The tag must be in the *gcr.io* or *pkg.dev* namespace. Specify a tag if you want Cloud Build to build using a Dockerfile instead of a build config file. If you specify a tag in this command, your source must include a Dockerfile. For instructions on building using a Dockerfile see https://cloud.google.com/cloud-build/docs/quickstart-build',
          args: { name: "TAG", description: "String", suggestions: [] },
        },
        {
          name: "--timeout",
          description:
            'Maximum time a build is run before it is failed as `TIMEOUT`. It is specified as a duration; for example, "2h15m5s" is two hours, fifteen minutes, and five seconds. If you don\'t specify a unit, seconds is assumed. For example, "10" is 10 seconds. Overrides the default *builds/timeout* property value for this command invocation',
          args: { name: "TIMEOUT", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
        {
          name: "--worker-pool",
          description:
            "Specify a worker pool for the build to run in. Format: projects/{project}/locations/{region}/workerPools/{workerPool}",
          args: { name: "WORKER_POOL", description: "String", suggestions: [] },
        },
      ],
      args: {
        name: "SOURCE",
        description:
          "The location of the source to build. The location can be a directory on a local disk, an archive file (e.g., .zip, .tar.gz) or a manifest file (.json) in Google Cloud Storage, a Git repo url starting with http:// or https://, a 2nd-gen Cloud Build repository resource, or a Developer Connect GitRepositoryLink resource. If the source is a local directory, this command skips the files specified in the `--ignore-file`. If `--ignore-file` is not specified, use`.gcloudignore` file. If a `.gcloudignore` file is absent and a `.gitignore` file is present in the local source directory, gcloud will use a generated Git-compatible `.gcloudignore` file that respects your .gitignored files. The global `.gitignore` is not respected. For more information on `.gcloudignore`, see `gcloud topic gcloudignore`",
        isOptional: true,
      },
    },
    {
      name: "triggers",
      description: "Create and manage build triggers for Google Cloud Build",
      subcommands: [
        {
          name: "create",
          description: "Create build triggers for Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Create a build trigger for a 2nd-gen Bitbucket Cloud repository",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag2157,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11881,
                flag11946,
                flag12373,
                flag12815,
                flag12879,
                flag13547,
                flag14557,
                flag14608,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "bitbucket-data-center",
              description:
                "Create a build trigger for a 2nd-gen Bitbucket Data Center repository",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag2157,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11881,
                flag11946,
                flag12373,
                flag12815,
                flag12879,
                flag13547,
                flag14557,
                flag14608,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "bitbucketserver",
              description:
                "Create a build trigger for a Bitbucket Server repository",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--bitbucket-server-config-resource",
                  description: "Bitbucket Server config resource name",
                  args: {
                    name: "BITBUCKET_SERVER_CONFIG_RESOURCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1266,
                flag1302,
                flag2157,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                {
                  name: "--project-key",
                  description: "Bitbucket Server project key",
                  args: {
                    name: "PROJECT_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11881,
                flag11946,
                flag12373,
                {
                  name: "--repo-slug",
                  description: "Bitbucket Server repository slug",
                  args: {
                    name: "REPO_SLUG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12879,
                flag13547,
                flag14557,
                flag14608,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "cloud-source-repositories",
              description:
                "Create a build trigger from a Cloud Source Repository",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11946,
                flag12373,
                flag12799,
                flag12879,
                flag13547,
                flag14557,
                flag14608,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "github",
              description: "Create a build trigger for a GitHub repository",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag2157,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4433,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5748,
                flag5765,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                {
                  name: "--pull-request-pattern",
                  description:
                    'A regular expression specifying which base git branch to match for\npull request events.\n+\nThis pattern is used as a regex search for the base branch (the branch you are\ntrying to merge into) for pull request updates.\nFor example, --pull-request-pattern=foo will match "foo", "foobar", and "barfoo".\n+\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax',
                  args: {
                    name: "REGEX",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                flag12373,
                {
                  name: "--repo-name",
                  description: "Name of the GitHub Repository (1st gen)",
                  args: {
                    name: "REPO_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--repo-owner",
                  description: "Owner of the GitHub Repository (1st gen)",
                  args: {
                    name: "REPO_OWNER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12814,
                flag12879,
                flag13547,
                flag14557,
                flag14608,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "gitlab",
              description:
                "Create a build trigger for a 2nd-gen GitLab repository",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag2157,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11881,
                flag11946,
                flag12373,
                flag12815,
                flag12879,
                flag13547,
                flag14557,
                flag14608,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "manual",
              description: "Create a build trigger with a manual trigger event",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1267,
                flag1302,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5252,
                flag5453,
                flag5699,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11946,
                flag12373,
                flag12800,
                flag12798,
                flag12815,
                flag12879,
                flag13547,
                flag14557,
                flag14617,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "pubsub",
              description:
                "Create a build trigger with a Pub/Sub trigger event",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1267,
                flag1302,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5252,
                flag5453,
                flag5699,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11946,
                flag12373,
                flag12800,
                flag12798,
                flag12815,
                flag12879,
                flag13547,
                flag14549,
                flag14557,
                flag14617,
                {
                  name: "--topic",
                  description:
                    "The topic to which this trigger should subscribe",
                  args: {
                    name: "TOPIC",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "webhook",
              description:
                "Create a build trigger with a Webhook trigger event",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1267,
                flag1302,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5252,
                flag5453,
                flag5699,
                flag5800,
                flag7356,
                flag8089,
                flag11637,
                flag11946,
                flag12373,
                flag12800,
                flag12798,
                flag12815,
                flag12879,
                {
                  name: "--secret",
                  description:
                    "The full path of the secret version required to validate webhook requests\nagainst this trigger.\nFor example, projects/my-project/secrets/my-secret/versions/1",
                  args: {
                    name: "SECRET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13547,
                flag14549,
                flag14557,
                flag14617,
                flag14975,
                flag14997,
                flag15315,
                flag15424,
              ],
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a build trigger",
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
            flag12338,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get information about a particular trigger",
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
            flag12338,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
          },
        },
        {
          name: "import",
          description: "Import a build trigger",
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
            flag12373,
            {
              name: "--source",
              description: "File path where trigger should be imported from",
              args: { name: "PATH", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List Cloud Build triggers for a project",
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
            flag12373,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "run",
          description: "Run a build trigger",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--branch",
              description: "Branch to run",
              args: { name: "BRANCH", description: "String", suggestions: [] },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag12338,
            {
              name: "--sha",
              description: "SHA to run",
              args: { name: "SHA", description: "String", suggestions: [] },
            },
            flag14557,
            {
              name: "--tag",
              description: "Tag to run",
              args: { name: "TAG", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "TRIGGER",
            description:
              "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
          },
        },
        {
          name: "update",
          description: "Update Triggers in Google Cloud Build",
          subcommands: [
            {
              name: "bitbucket-cloud",
              description:
                "Updates Bitbucket Cloud trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag1924,
                flag2158,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag11637,
                flag11880,
                flag11946,
                flag12338,
                flag12738,
                flag12815,
                flag12879,
                flag13547,
                flag14608,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "bitbucket-data-center",
              description:
                "Updates Bitbucket Data Center trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag1924,
                flag2158,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag11637,
                flag11880,
                flag11946,
                flag12338,
                flag12738,
                flag12815,
                flag12879,
                flag13547,
                flag14608,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "bitbucketserver",
              description:
                "Updates Bitbucket Server trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--bitbucket-server-config-resource",
                  description: "Bitbucket Server config resource name",
                  args: {
                    name: "BITBUCKET_SERVER_CONFIG_RESOURCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1266,
                flag1302,
                flag1924,
                {
                  name: "--comment-control",
                  description:
                    "Require a repository collaborator or owner to comment '/gcbrun' on a pull\nrequest before running the build. _COMMENT_CONTROL_ must be one of:\n+\n*COMMENTS_DISABLED*::: \nDo not require comments on Pull Requests before builds are triggered.\n*COMMENTS_ENABLED*::: \nEnforce that repository owners or collaborators must comment on Pull Requests\nbefore builds are triggered.\n*COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY*::: \nEnforce that repository owners or collaborators must comment on external\ncontributors' Pull Requests before builds are triggered.\n:::\n+",
                  args: {
                    name: "COMMENT_CONTROL",
                    description: "String",
                    suggestions: [
                      "COMMENTS_DISABLED",
                      "COMMENTS_ENABLED",
                      "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY",
                    ],
                  },
                },
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag11637,
                {
                  name: "--project-key",
                  description: "Bitbucket Server project key",
                  args: {
                    name: "PROJECT_KEY",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11880,
                flag11946,
                flag12338,
                flag12738,
                {
                  name: "--repo-slug",
                  description: "Bitbucket Server repository slug",
                  args: {
                    name: "REPO_SLUG",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12879,
                flag13547,
                flag14608,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "cloud-source-repositories",
              description:
                "Updates Cloud Source Repositories trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag1924,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag11637,
                flag11946,
                flag12338,
                flag12738,
                flag12799,
                flag12879,
                flag13547,
                flag14608,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "github",
              description: "Update GitHub trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag1924,
                flag2157,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4433,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5748,
                flag5765,
                flag5800,
                flag7356,
                flag11637,
                {
                  name: "--pull-request-pattern",
                  description:
                    'A regular expression specifying which base git branch to match for\npull request events.\n+\nThis pattern is used as a regex search for the base branch (the branch you are\ntrying to merge into) for pull request updates.\nFor example, --pull-request-pattern=foo will match "foo", "foobar", and "barfoo".\n+\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax',
                  args: {
                    name: "REGEX",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                flag12338,
                flag12738,
                {
                  name: "--repo-name",
                  description: "Name of the GitHub Repository",
                  args: {
                    name: "REPO_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--repo-owner",
                  description: "Owner of the GitHub Repository",
                  args: {
                    name: "REPO_OWNER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag12814,
                flag12879,
                flag13547,
                flag14608,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "gitlab",
              description: "Updates GitLab trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1266,
                flag1302,
                flag1924,
                flag2158,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3877,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5659,
                flag5699,
                flag5765,
                flag5800,
                flag7356,
                flag11637,
                flag11880,
                flag11946,
                flag12338,
                flag12738,
                flag12815,
                flag12879,
                flag13547,
                flag14608,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "manual",
              description: "Updates a manual trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1924,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5223,
                flag5224,
                flag5225,
                flag5226,
                flag5228,
                flag5229,
                flag5453,
                flag5699,
                flag5800,
                flag7356,
                flag11637,
                flag11946,
                flag12338,
                flag12738,
                flag12879,
                flag13547,
                flag14101,
                flag14102,
                flag14103,
                flag14105,
                flag14106,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "pubsub",
              description: "Update a Pub/Sub trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--clear-subscription-filter",
                  description: "Clear existing subscription filter",
                },
                flag1924,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5223,
                flag5224,
                flag5225,
                flag5226,
                flag5228,
                flag5229,
                flag5453,
                flag5699,
                flag5800,
                flag7356,
                flag11637,
                flag11946,
                flag12338,
                flag12738,
                flag12879,
                flag13547,
                flag14101,
                flag14102,
                flag14103,
                flag14105,
                flag14106,
                flag14549,
                {
                  name: "--topic",
                  description:
                    "The topic to which this trigger should subscribe",
                  args: {
                    name: "TOPIC",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
            {
              name: "webhook",
              description: "Update a Webhook trigger used by Cloud Build",
              options: [
                flag42,
                flag46,
                flag1201,
                flag1924,
                flag2292,
                flag3170,
                flag3878,
                flag3875,
                flag3876,
                flag4900,
                flag4902,
                flag5091,
                flag5223,
                flag5224,
                flag5225,
                flag5226,
                flag5228,
                flag5229,
                flag5453,
                flag5699,
                flag5800,
                flag7356,
                flag11637,
                flag11946,
                flag12338,
                flag12738,
                flag12879,
                {
                  name: "--secret",
                  description:
                    "The full path of the secret version required to validate webhook requests against this trigger.\nFor example, projects/my-project/secrets/my-secret/versions/1",
                  args: {
                    name: "SECRET",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag13547,
                flag14101,
                flag14102,
                flag14103,
                flag14105,
                flag14106,
                flag14549,
                flag14975,
                flag14997,
                flag15226,
                flag15315,
                flag15424,
              ],
              args: {
                name: "TRIGGER",
                description:
                  "ID of the trigger or fully qualified identifier for the trigger.\n+\nTo set the `trigger` attribute:\n* provide the argument `TRIGGER` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "worker-pools",
      description: "Manage worker pools for Google Cloud Build",
      subcommands: [
        {
          name: "create",
          description: "Create a worker pool for use by Google Cloud Build",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--config-from-file",
              description:
                "File that contains the configuration for the worker pool to be created. See https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema for options",
              args: {
                name: "CONFIG_FROM_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--no-public-egress",
              description:
                "If set, workers in the worker pool are created without an external IP address.\n+\nIf the worker pool is within a VPC Service Control perimeter, use this flag",
            },
            {
              name: "--peered-network",
              description:
                "Existing network to which workers are peered. The network is specified in\nresource URL format\nprojects/{network_project}/global/networks/{network_name}.\n+\nIf not specified, the workers are not peered to any network",
              args: {
                name: "PEERED_NETWORK",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--peered-network-ip-range",
              description:
                "An IP range for your peered network. Specify the IP range using Classless\nInter-Domain Routing (CIDR) notation with a slash and the subnet prefix size,\nsuch as `/29`.\n+\nYour subnet prefix size must be between 1 and 29.  Optional: you can specify an\nIP address before the subnet prefix value - for example `192.168.0.0/24`.\n+\nIf no IP address is specified, your VPC automatically determines the starting\nIP for the range. If no IP range is specified, Cloud Build uses `/24` as the\ndefault network IP range",
              args: {
                name: "PEERED_NETWORK_IP_RANGE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--region",
              description:
                "Cloud region where the worker pool is created. See https://cloud.google.com/build/docs/locations for available locations",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15587,
            flag15590,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "Unique identifier for the worker pool to create. This value should be 1-63 characters, and valid characters are [a-z][0-9]-",
          },
        },
        {
          name: "delete",
          description: "Delete a worker pool from Cloud Build",
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
            flag12343,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKER_POOL",
            description: "The ID of the worker pool to delete",
          },
        },
        {
          name: "describe",
          description: "Describe a worker pool used by Cloud Build",
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
            flag12343,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKER_POOL",
            description: "The ID of the worker pool to describe",
          },
        },
        {
          name: "list",
          description: "List all worker pools in a Google Cloud project",
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
              description: "The Cloud region to list worker pools in",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update a worker pool used by Cloud Build",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--config-from-file",
              description:
                "File that contains updates to the configuration for the worker pool. See https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema for options",
              args: {
                name: "CONFIG_FROM_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            {
              name: "--public-egress",
              description:
                "If set to true, workers in the worker pool are created with an external\nIP address.\n+\nIf set to false, workers in the worker pool are created without an\nexternal IP address. If the worker pool is within a VPC Service Control\nperimeter, use this flag.\n+\nUse *--public-egress* to enable and *--no-public-egress* to disable",
            },
            flag11946,
            {
              name: "--region",
              description:
                "Cloud region where the worker pool is updated. See https://cloud.google.com/build/docs/locations for available locations",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
            flag15587,
            flag15590,
          ],
          args: {
            name: "WORKER_POOL",
            description:
              "Unique identifier for the worker pool to update. This value should be 1-63 characters, and valid characters are [a-z][0-9]-",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
