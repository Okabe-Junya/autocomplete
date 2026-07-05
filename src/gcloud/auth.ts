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
const flag3966: Fig.Option = {
  name: "--ecp-client",
  description:
    "Provide a custom path to the enterprise-certificate-proxy shared client library. This flag must be the full path to the shared library",
  args: { name: "ECP_CLIENT", description: "String", suggestions: [] },
};
const flag3967: Fig.Option = {
  name: "--ecp",
  description:
    "Provide a custom path to the enterprise-certificate-proxy binary. This flag must be the full path to the binary",
  args: { name: "ECP", description: "String", suggestions: [] },
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
const flag6073: Fig.Option = {
  name: "--issuer",
  description: "The certificate issuer",
  args: { name: "ISSUER", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag10994: Fig.Option = {
  name: "--output-file",
  description:
    "Override the file path that the enterprise-certificate-proxy configuration is written to",
  args: { name: "OUTPUT_FILE", description: "String", suggestions: [] },
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
const flag14934: Fig.Option = {
  name: "--tls-offload",
  description:
    "Provide a custom path to the enterprise-certificate-proxy shared tls offload library. This flag must be the full path to the shared library",
  args: { name: "TLS_OFFLOAD", description: "String", suggestions: [] },
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
  name: "auth",
  description: "Manage oauth2 credentials for the Google Cloud CLI",
  subcommands: [
    {
      name: "activate-service-account",
      description: "Authorize access to Google Cloud with a service account",
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
          name: "--key-file",
          description: "Path to the private key file",
          args: { name: "KEY_FILE", description: "String", suggestions: [] },
        },
        flag7356,
        {
          name: "--password-file",
          description:
            "Path to a file containing the password for the service account private key (only for a .p12 file)",
          args: {
            name: "PASSWORD_FILE",
            description: "String",
            suggestions: [],
          },
        },
        flag11637,
        {
          name: "--prompt-for-password",
          description:
            "Prompt for the password for the service account private key (only for a .p12 file)",
        },
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "ACCOUNT",
        description: "E-mail address of the service account",
        isOptional: true,
      },
    },
    {
      name: "application-default",
      description: "Manage your active Application Default Credentials",
      subcommands: [
        {
          name: "login",
          description:
            "Acquire new user credentials to use for Application Default Credentials",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--browser",
              description:
                'If you want to authorize the client libraries on a machine that doesn\'t\nhave a browser and you can install the gcloud CLI on another machine\nwith a browser, use the `--no-browser` flag.\n+\n1.  To initiate authorization, enter the following command:\n+\n    ```\n    gcloud auth application-default login --no-browser\n    ```\n+\n2.  Copy the long command that begins with `gcloud auth application-default login --remote-bootstrap="`.\n+\n3.  Paste and run this command on the command line of a different,\n    trusted machine that has local installations of both a web browser\n    and the gcloud CLI tool version 372.0 or later.\n+\n4.  Copy the long URL output from the machine with the web browser.\n+\n5.  Paste the long URL back to the first machine under the prompt,\n    "Enter the output of the above command", and press Enter to complete\n    the authorization.\n+\nEnabled by default, use *--no-browser* to disable',
            },
            {
              name: "--client-id-file",
              description:
                "A file containing your own client id to use to login. If --client-id-file is specified, the quota project will not be written to ADC",
              args: {
                name: "CLIENT_ID_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            {
              name: "--disable-quota-project",
              description:
                "By default, the project in billing/quota_project or core/project will\nbe written to application default credentials (ADC) as the quota project.\nWhen both are set, billing/quota_project takes precedence.\nYou can use --billing-project to overwrite the value in\nbilling/quota_project. Similarly, you can use --project to overwrite\nthe value in core/project. Client libraries will send it to services\nand use it for quota and billing. To be able to use a project as the\nquota project, the account in ADC must have the serviceusage.services.use\npermission on the project. This permission is granted to the\nproject editor and project owner. You can create custom roles to\ninclude this permission.\n+\nNote that some cloud services may ignore this quota project and still\nbill the project owning the resources.\n+\nIn the following situations, you may use this flag to skip setting the\nquota project:\n+\n  * The account in ADC cannot be granted the project editor or owner\n    role or any role with the serviceusage.services.use permission.\n  * You always want to bill the project owning the resources",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--launch-browser",
              description:
                'Launch a browser for authorization. If not enabled or if it\nis not possible to launch a browser, prints a URL to standard output\nto be copied.\n+\nIf you want to authorize the client libraries on a\nmachine that doesn\'t have a browser and you cannot install the\ngcloud CLI on another machine with a browser, use the\n`--no-launch-browser` flag.\nThe `--no-launch-browser` flag prevents the command from automatically\nopening a web browser.\n+\n1.  To initiate authorization, enter the following command:\n+\n    ```\n    gcloud auth application-default login --no-launch-browser\n    ```\n+\n2.  Copy the long URL that begins with\n    `https://accounts.google.com/o/oauth2/auth... `\n+\n3.  Paste this URL into the browser of a different, trusted machine that\n    has a web browser.\n+\n4.  Copy the authorization code from the machine with the web browser.\n+\n5.  Paste the authorization code back to the first machine at the prompt,\n    "Enter authorization code", and press Enter\n    to complete the authorization.\n+\nEnabled by default, use *--no-launch-browser* to disable',
            },
            flag7356,
            {
              name: "--login-config",
              description:
                "Path to the login configuration file (workforce pool, generated by the Cloud Console or `gcloud iam workforce-pools create-login-config`). Overrides the default *auth/login_config_file* property value for this command invocation",
              args: {
                name: "LOGIN_CONFIG",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--scopes",
              description:
                "The names of the scopes to authorize for. By default openid, https://www.googleapis.com/auth/userinfo.email, https://www.googleapis.com/auth/cloud-platform, https://www.googleapis.com/auth/sqlservice.login scopes are used. The list of possible scopes can be found at: [](https://developers.google.com/identity/protocols/googlescopes). To add scopes for applications outside of Google Cloud Platform, such as Google Drive, [create an OAuth Client ID](https://support.google.com/cloud/answer/6158849) and provide it by using the --client-id-file flag",
              args: { name: "SCOPE", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACCOUNT",
            description:
              "User account used for authorization. When the account specified has valid credentials in the local credential store these credentials will be re-used. Otherwise new ones will be fetched and replace any stored credential. This caching behavior is only available for user credentials",
            isOptional: true,
          },
        },
        {
          name: "print-access-token",
          description:
            "Print an access token for your current Application Default Credentials",
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
              name: "--lifetime",
              description:
                "Access token lifetime. The default access token lifetime is 3600 seconds, but you can use this flag to reduce the lifetime or extend it up to 43200 seconds (12 hours). The org policy constraint `constraints/iam.allowServiceAccountCredentialLifetimeExtension` must be set if you want to extend the lifetime beyond 3600 seconds. Note that this flag is for service account impersonation only, so it only works when either `--impersonate-service-account` flag or `auth/impersonate_service_account` property is set",
              args: {
                name: "LIFETIME",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--scopes",
              description:
                "The scopes to authorize for. This flag is supported for user accounts and service accounts only. The list of possible scopes can be found at: [](https://developers.google.com/identity/protocols/googlescopes).\n+\nFor end-user accounts, the provided scopes must be from [`openid`, `https://www.googleapis.com/auth/userinfo.email`, `https://www.googleapis.com/auth/cloud-platform`, `https://www.googleapis.com/auth/sqlservice.login`], or the scopes previously specified through `gcloud auth application-default login --scopes`",
              args: { name: "SCOPE", description: "List", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "revoke",
          description:
            "Revoke previously generated Application Default Credentials",
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
        },
        {
          name: "set-quota-project",
          description:
            "Update or add a quota project in application default credentials (ADC)",
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
            name: "QUOTA_PROJECT_ID",
            description:
              "Quota project ID to add to application default credentials. If a quota project already exists, it will be updated",
          },
        },
      ],
    },
    {
      name: "configure-docker",
      description: "Register `gcloud` as a Docker credential helper",
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
        name: "REGISTRIES",
        description:
          "The comma-separated list of registries to configure the credential helper for. Container Registry is a service for storing private container images. For available registries, see [](https://cloud.google.com/container-registry/docs/pushing-and-pulling#add-registry)",
        isOptional: true,
      },
    },
    {
      name: "enterprise-certificate-config",
      description: "Manage enterprise certificate configurations",
      subcommands: [
        {
          name: "create",
          description: "Create enterprise certificate configurations",
          subcommands: [
            {
              name: "linux",
              description:
                "Create an enterprise-certificate configuration file for Linux",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3967,
                flag3966,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--label",
                  description:
                    "The PKCS #11 label for the target credentials. The certificate, public key, and private key MUST have the same label. enterprise-certificate-proxy will use all three objects",
                  args: {
                    name: "LABEL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--module",
                  description: "The full file path to the PKCS #11 module",
                  args: {
                    name: "MODULE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag10994,
                flag11637,
                flag11946,
                {
                  name: "--slot",
                  description:
                    "The PKCS #11 slot containing the target credentials",
                  args: {
                    name: "SLOT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14934,
                flag14975,
                flag15315,
                {
                  name: "--user-pin",
                  description:
                    "The user pin used to login to the PKCS #11 module. If there is no user pin leave this field empty",
                  args: {
                    name: "USER_PIN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15424,
              ],
            },
            {
              name: "macos",
              description:
                "Create an enterprise-certificate configuration file for MacOS",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3967,
                flag3966,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6073,
                {
                  name: "--keychain-type",
                  description:
                    'Specify the target keychain(s) for certificate lookup.Accepted values are "login", "system", or "all". If omitted,defaults to "all". Use "all" to include custom keychains',
                  args: {
                    name: "KEYCHAIN_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag10994,
                flag11637,
                flag11946,
                flag14934,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "windows",
              description:
                "Create an enterprise-certificate configuration file for Windows",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3967,
                flag3966,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6073,
                flag7356,
                flag10994,
                flag11637,
                {
                  name: "--provider",
                  description: "The Windows secure store provider",
                  args: {
                    name: "PROVIDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11946,
                {
                  name: "--store",
                  description: "The Windows secure store",
                  args: {
                    name: "STORE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14934,
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
      name: "list",
      description: "Lists credentialed accounts",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        {
          name: "--filter",
          description:
            "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
          args: { name: "EXPRESSION", description: "String", suggestions: [] },
        },
        {
          name: "--filter-account",
          description:
            'List only credentials for one account. Use\n--filter="account~_PATTERN_" to select accounts that match\n_PATTERN_',
          args: {
            name: "FILTER_ACCOUNT",
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
            "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: {
            name: "LIMIT",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag7356,
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
          args: {
            name: "PAGE_SIZE",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag11637,
        flag11946,
        {
          name: "--sort-by",
          description:
            "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
          args: { name: "FIELD", description: "List", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "login",
      description:
        "Authorize gcloud to access the Cloud Platform with Google user credentials",
      options: [
        flag42,
        flag46,
        {
          name: "--activate",
          description:
            "Set the new account to active. Enabled by default, use *--no-activate* to disable",
        },
        flag1201,
        { name: "--brief", description: "Minimal user output" },
        {
          name: "--browser",
          description:
            'If you want to authorize the gcloud CLI on a machine that doesn\'t\nhave a browser and you can install the gcloud CLI on another machine\nwith a browser, use the `--no-browser` flag.\n+\n1.  To initiate authorization, enter the following command:\n+\n    ```\n    gcloud auth login --no-browser\n    ```\n+\n2.  Copy the long command that begins with `gcloud auth login --remote-bootstrap="`.\n+\n3.  Paste and run this command on the command line of a different,\n    trusted machine that has local installations of both a web browser\n    and the gcloud CLI tool version 372.0 or later.\n+\n4.  Copy the long URL output from the machine with the web browser.\n+\n5.  Paste the long URL back to the first machine under the prompt,\n    "Enter the output of the above command", and press Enter to complete\n    the authorization.\n+\nEnabled by default, use *--no-browser* to disable',
        },
        flag2292,
        {
          name: "--cred-file",
          description:
            "Path to the external account configuration file (workload identity pool, generated by the Cloud Console or `gcloud iam workload-identity-pools create-cred-config`) or service account credential key file (JSON)",
          args: { name: "CRED_FILE", description: "String", suggestions: [] },
        },
        {
          name: "--enable-gdrive-access",
          description: "Enable Google Drive access",
        },
        flag4900,
        flag4902,
        {
          name: "--force",
          description:
            "Re-run the web authorization flow even if the given account has valid credentials",
        },
        flag5091,
        flag5453,
        flag5699,
        {
          name: "--launch-browser",
          description:
            'Launch a browser for authorization. If not enabled or if it\nis not possible to launch a browser, prints a URL to standard output\nto be copied.\n+\nIf you want to authorize the gcloud CLI on a\nmachine that doesn\'t have a browser and you cannot install the\ngcloud CLI on another machine with a browser, use the\n`--no-launch-browser` flag.\nThe `--no-launch-browser` flag prevents the command from automatically\nopening a web browser.\n+\n1.  To initiate authorization, enter the following command:\n+\n    ```\n    gcloud auth login --no-launch-browser\n    ```\n+\n2.  Copy the long URL that begins with\n    `https://accounts.google.com/o/oauth2/auth... `\n+\n3.  Paste this URL into the browser of a different, trusted machine that\n    has a web browser.\n+\n4.  Copy the authorization code from the machine with the web browser.\n+\n5.  Paste the authorization code back to the first machine at the prompt,\n    "Enter authorization code", and press Enter\n    to complete the authorization.\n+\nEnabled by default, use *--no-launch-browser* to disable',
        },
        flag7356,
        {
          name: "--login-config",
          description:
            "Path to the workforce identity federation login configuration file which can be generated using the `gcloud iam workforce-pools create-login-config` command. Overrides the default *auth/login_config_file* property value for this command invocation",
          args: {
            name: "LOGIN_CONFIG",
            description: "String",
            suggestions: [],
          },
        },
        flag11637,
        flag11946,
        flag14975,
        {
          name: "--update-adc",
          description:
            "Write the obtained credentials to the well-known location for Application Default Credentials (ADC). Run $ gcloud auth application-default --help to learn more about ADC. Any credentials previously generated by `gcloud auth application-default login` will be overwritten",
        },
        flag15315,
        flag15424,
      ],
      args: {
        name: "ACCOUNT",
        description:
          "User account used for authorization. When the account specified has valid credentials in the local credential store these credentials will be re-used, otherwise a new credential will be fetched. If you need to fetch a new credential for an account with valid credentials stored, run the command with the --force flag",
        isOptional: true,
      },
    },
    {
      name: "print-access-token",
      description: "Print an access token for the specified account",
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
          name: "--lifetime",
          description:
            "Access token lifetime. The default access token lifetime is 3600 seconds, but you can use this flag to reduce the lifetime or extend it up to 43200 seconds (12 hours). The org policy constraint `constraints/iam.allowServiceAccountCredentialLifetimeExtension` must be set if you want to extend the lifetime beyond 3600 seconds. Note that this flag is for service account impersonation only, so it must be used together with the `--impersonate-service-account` flag",
          args: {
            name: "LIFETIME",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
        name: "ACCOUNT",
        description:
          "Account to get the access token for. If not specified, the current active account will be used",
        isOptional: true,
      },
    },
    {
      name: "print-identity-token",
      description: "Print an identity token for the specified account",
      options: [
        flag42,
        flag46,
        {
          name: "--audiences",
          description:
            "Intended recipient of the token. Currently, only one audience can be specified",
          args: { name: "AUDIENCES", description: "String", suggestions: [] },
        },
        flag1201,
        flag2292,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        {
          name: "--include-email",
          description:
            "Specify whether or not service account email is included in the identity token. If specified, the token will contain 'email' and 'email_verified' claims. This flag should only be used for impersonate service account",
        },
        {
          name: "--include-license",
          description:
            "Specify whether or not license codes for images associated with this instance are included in the identity token payload. Default is False. This flag does not have effect unless `--token-format=full`",
        },
        flag7356,
        flag11637,
        flag11946,
        {
          name: "--token-format",
          description:
            "Specify whether or not the project and instance details are included in the identity token payload. This flag only applies to Google Compute Engine instance identity tokens. See https://cloud.google.com/compute/docs/instances/verifying-instance-identity#token_format for more details on token format. _TOKEN_FORMAT_ must be one of: *standard*, *full*",
          args: {
            name: "TOKEN_FORMAT",
            description: "String",
            suggestions: ["standard", "full"],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "ACCOUNT",
        description:
          "Account to print the identity token for. If not specified, the current active account will be used",
        isOptional: true,
      },
    },
    {
      name: "revoke",
      description: "Revoke access credentials for an account",
      options: [
        flag42,
        flag46,
        { name: "--all", description: "Revoke credentials for all accounts" },
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
        name: "ACCOUNTS",
        description: "Accounts whose credentials are to be revoked",
        isOptional: true,
        isVariadic: true,
      },
    },
  ],
};

export default completionSpec;
