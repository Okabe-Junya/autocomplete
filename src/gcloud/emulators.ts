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
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
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
  name: "emulators",
  description: "Set up your local development environment using emulators",
  subcommands: [
    {
      name: "firestore",
      description: "Manage your local Firestore emulator",
      subcommands: [
        {
          name: "start",
          description: "Start a local Firestore emulator",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--database-mode",
              description:
                "The database mode to start the Firestore Emulator in. The valid options are: \n+\n  `firestore-native` (default): start the emulator in Firestore Native\n  `datastore-mode`: start the emulator in Datastore Mode",
              args: {
                name: "DATABASE_MODE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--edition",
              description:
                "The database edition to start the Firestore Emulator in. _EDITION_ must be one of: *standard*, *enterprise*",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: ["standard", "enterprise"],
              },
            },
            {
              name: "--export-on-exit",
              description:
                "Directory path in which emulator data will be saved upon shutdown. Example:`/home/user/myexports/2024-03-26/`",
              args: {
                name: "EXPORT_ON_EXIT",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--host-port",
              description:
                "The host:port to which the emulator should be bound. Can take the form of a single address (hostname, IPv4, or IPv6) and/or port:\n+\n  [ADDRESS][:PORT]\n+\nIn this format you must enclose IPv6 addresses in square brackets: e.g.\n+\n  [2001:db8:0:0:0:ff00:42:8329]:8080\n+\nThe default value is localhost:8080",
              args: {
                name: "HOST_PORT",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            {
              name: "--import-data",
              description:
                "File path to the data to be loaded into the emulator upon start up. Example:`/home/user/myexports/sampleExport/sampleExport.overall_export_metadata.`",
              args: {
                name: "IMPORT_DATA",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--licenses",
              description:
                "If set, the emulator will print open-source dependencies and licenses, then exit",
            },
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--rules",
              description:
                "If set, all projects will use the security rules in this file. More information on Firebase Rules and the syntax for this file is available at https://firebase.google.com/docs/rules",
              args: { name: "RULES", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "spanner",
      description: "Manage your local Spanner emulator",
      subcommands: [
        {
          name: "env-init",
          description:
            "Print the commands required to export Spanner emulator's env variables",
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
          name: "notices",
          description:
            "Print third-party notices for the local Cloud Spanner emulator",
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
            {
              name: "--use-docker",
              description:
                "Use the Cloud Spanner emulator docker image even if the platform has a native binary available in the gcloud CLI. Currently we only provide a native binary for Linux. For other systems, you must install Docker for your platform before starting the emulator",
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "start",
          description: "Start a local Cloud Spanner emulator",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--enable-fault-injection",
              description:
                "If true, the emulator will randomly inject faults into transactions. This facilitates application abort-retry testing",
              args: {
                name: "ENABLE_FAULT_INJECTION",
                description: "Int",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            {
              name: "--host-port",
              description:
                "The host:port to which the emulator should be bound. The default value is localhost:9010. Note that this port serves gRPC requests. To override the default port serving REST requests, use --rest-port. If using Docker to run the emulator, the host must be specified as an ipaddress",
              args: {
                name: "HOST_PORT",
                description: "String",
                suggestions: [],
              },
            },
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--rest-port",
              description:
                "The port at which REST requests are served. gcloud uses REST to communicate with the emulator. The default value is 9020",
              args: {
                name: "REST_PORT",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--use-docker",
              description:
                "Use the Cloud Spanner emulator docker image even if the platform has a native binary available in the gcloud CLI. Currently we only provide a native binary for Linux. For other systems, you must install Docker for your platform before starting the emulator",
              args: {
                name: "USE_DOCKER",
                description: "Googlecloudsdk.calliope.arg_parsers:ArgBoolean",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
