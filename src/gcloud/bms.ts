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
const flag4848: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
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
const flag6514: Fig.Option = {
  name: "--limit",
  description:
    "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
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
const flag12397: Fig.Option = {
  name: "--region",
  description:
    "ID of the region or fully qualified identifier for the region.\n+\nTo set the `region` attribute:\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12414: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `--volume` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12415: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `instance` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12417: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `network` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12418: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `nfs_share` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12419: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* global is the only supported location",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12421: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `snapshot` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12422: Fig.Option = {
  name: "--region",
  description:
    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `volume` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
  args: { name: "REGION", description: "String", suggestions: [] },
};
const flag12637: Fig.Option = {
  name: "--remove-labels",
  description:
    "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
  args: { name: "KEY", description: "List", suggestions: [] },
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
const flag15505: Fig.Option = {
  name: "--volume",
  description:
    "Bare Metal Solution volume.\n+\nTo set the `volume` attribute:\n* provide the argument `snapshot` on the command line with a fully specified name;\n* provide the argument `--volume` on the command line",
  args: { name: "VOLUME", description: "String", suggestions: [] },
};
const flag15506: Fig.Option = {
  name: "--volume",
  description:
    "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `--volume` on the command line",
  args: { name: "VOLUME", description: "String", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "bms",
  description: "Manage Bare Metal Solution resources",
  subcommands: [
    {
      name: "instances",
      description: "Manage bare metal instances in Bare Metal Solution",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Bare Metal solution instance",
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
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "disable-serial-console",
          description:
            "Disable interactive serial console for a Bare Metal Solution instance",
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
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "enable-serial-console",
          description:
            "Enable interactive serial console for a Bare Metal Solution instance",
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
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "list",
          description: "List Bare Metal Solution instances in a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4848,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11637,
            flag11946,
            flag12397,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "rename",
          description: "Rename a Bare Metal Solution instance",
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
              name: "--new-name",
              description:
                "New instance name for renaming an already existing instance",
              args: {
                name: "NEW_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "reset",
          description: "Reset a Bare Metal Solution instance",
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
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "start",
          description: "Start a Bare Metal Solution instance",
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
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "stop",
          description: "Stop a Bare Metal Solution instance",
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
            flag12415,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Bare Metal Solution instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag1723,
            flag2292,
            {
              name: "--enable-hyperthreading",
              description:
                "Enable hyperthreading for the server. Use *--enable-hyperthreading* to enable and *--no-enable-hyperthreading* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--os-image",
              description:
                "OS image to install on the server.\n+\nTo list all OS image codes supported by BMS, run:\n+\n    $ gcloud bms os-images list",
              args: {
                name: "OS_IMAGE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12415,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INSTANCE",
            description:
              "ID of the instance or fully qualified identifier for the instance.\n+\nTo set the `instance` attribute:\n* provide the argument `instance` on the command line",
          },
        },
      ],
    },
    {
      name: "networks",
      description: "Manage networks in Bare Metal Solution",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Bare Metal solution network",
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
            flag12417,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK",
            description:
              "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
          },
        },
        {
          name: "list",
          description: "List Bare Metal Solution networks in a project",
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
            flag11637,
            flag11946,
            flag12397,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-ip-reservations",
          description:
            "List IP range reservations for Bare Metal Solution networks in a project",
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
            flag11637,
            flag11946,
            flag12397,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "rename",
          description: "Rename a Bare Metal Solution network",
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
              name: "--new-name",
              description:
                "New network name for renaming an already existing network",
              args: {
                name: "NEW_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12417,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK",
            description:
              "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Bare Metal Solution network",
          options: [
            flag42,
            flag46,
            {
              name: "--add-ip-range-reservation",
              description:
                "Add a reservation of a range of IP addresses in the network.\n+\n*start_address*::: The first address of this reservation block.\nMust be specified as a single IPv4 address, e.g. `10.1.2.2`.\n+\n*end_address*::: The last address of this reservation block,\ninclusive. I.e., for cases when reservations are only single\naddresses, end_address and start_address will be the same.\nMust be specified as a single IPv4 address, e.g. `10.1.2.2`.\n+\n*note*::: A note about this reservation, intended for human consumption",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--clear-ip-range-reservations",
              description: "Removes all IP range reservations in the network",
            },
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
            flag12417,
            {
              name: "--remove-ip-range-reservation",
              description:
                "Remove a reservation of a range of IP addresses in the network.\n+\n*start_address*::: The first address of the reservation block to remove.\n+\n*end_address*::: The last address of the reservation block to remove",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NETWORK",
            description:
              "ID of the network or fully qualified identifier for the network.\n+\nTo set the `network` attribute:\n* provide the argument `network` on the command line",
          },
        },
      ],
    },
    {
      name: "nfs-shares",
      description: "Manage NFS shares in Bare Metal Solution",
      subcommands: [
        {
          name: "create",
          description: "Create a Bare Metal Solution NFS share",
          options: [
            flag42,
            flag46,
            {
              name: "--allowed-client",
              description:
                "Adds an allowed client to the NFS share. This flag can be repeated to specify multiple allowed clients.\n+\n*network*::: The name of the network to allow.\n+\n*network-project-id*::: The project ID of the allowed client network.\nIf not present, the project ID of the NFS share will be used.\n+\n*cidr*::: The subnet of IP addresses permitted to access the NFS\nshare.\n+\n*mount-permissions*::: The mount permissions for the allowed client.\n``MOUNT_PERMISSIONS'' must be one of: `READ_ONLY`, `READ_WRITE`.\n+\n*allow-dev*::: If ``yes'', allows creation of devices.\n+\n*allow-suid*::: If ``yes'', allows SUID.\n+\n*enable-root-squash*::: If ``yes'', enables root squashing which\nis a special mapping of the remote superuser (root) identity when\nusing identity authentication ",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
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
            flag5699,
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag12418,
            {
              name: "--size-gib",
              description: "The requested size of the NFS share in GiB",
              args: { name: "SIZE_GIB", description: "Int", suggestions: [] },
            },
            {
              name: "--storage-type",
              description:
                "Specifies the storage type of the underlying volume which will be created for the NFS share. _STORAGE_TYPE_ must be one of:\n+\n*HDD*::: The storage type of the underlying volume will be HDD\n*SSD*::: The storage type of the underlying volume will be SSD\n:::\n+",
              args: {
                name: "STORAGE_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:ChoiceToEnumName",
                suggestions: ["HDD", "SSD"],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NFS_SHARE",
            description:
              "ID of the nfs_share or fully qualified identifier for the nfs_share.\n+\nTo set the `nfs_share` attribute:\n* provide the argument `nfs_share` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete a Bare Metal Solution NFS share",
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
            flag12418,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NFS_SHARE",
            description:
              "ID of the nfs_share or fully qualified identifier for the nfs_share.\n+\nTo set the `nfs_share` attribute:\n* provide the argument `nfs_share` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a Bare Metal solution NFS share",
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
            flag12418,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NFS_SHARE",
            description:
              "ID of the nfs_share or fully qualified identifier for the nfs_share.\n+\nTo set the `nfs_share` attribute:\n* provide the argument `nfs_share` on the command line",
          },
        },
        {
          name: "list",
          description: "List Bare Metal Solution NFS shares in a project",
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
            flag11637,
            flag11946,
            flag12397,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "rename",
          description: "Rename a Bare Metal Solution nfs-share",
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
              name: "--new-name",
              description:
                "New nfs-share name for renaming an already existing nfs-share",
              args: {
                name: "NEW_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12418,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NFS_SHARE",
            description:
              "ID of the nfs_share or fully qualified identifier for the nfs_share.\n+\nTo set the `nfs_share` attribute:\n* provide the argument `nfs_share` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a Bare Metal Solution NFS share",
          options: [
            flag42,
            flag46,
            {
              name: "--add-allowed-client",
              description:
                "Adds an allowed client to the NFS share. This flag can be repeated to specify multiple allowed clients.\n+\n*network*::: The name of the network to allow.\n+\n*network-project-id*::: The project ID of the allowed client network.\nIf not present, the project ID of the NFS share will be used.\n+\n*cidr*::: The subnet of IP addresses permitted to access the NFS\nshare.\n+\n*mount-permissions*::: The mount permissions for the allowed client.\n``MOUNT_PERMISSIONS'' must be one of: `READ_ONLY`, `READ_WRITE`.\n+\n*allow-dev*::: If ``yes'', allows creation of devices.\n+\n*allow-suid*::: If ``yes'', allows SUID.\n+\n*enable-root-squash*::: If ``yes'', enables root squashing which\nis a special mapping of the remote superuser (root) identity when\nusing identity authentication ",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            {
              name: "--clear-allowed-clients",
              description: "Removes all IP range reservations in the network",
            },
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
            flag12418,
            {
              name: "--remove-allowed-client",
              description:
                "Removes an allowed client for the NFS share given its network name and cidr. This flag can be repeated to remove multiple allowed clients.\n+\n*network*::: The name of the network of the allowed client to remove.\n+\n*network-project-id*::: The project ID of the allowed client network.\nIf not present, the project ID of the NFS share will be used.\n+\n*cidr*::: The subnet of permitted IP addresses of the allowed client to remove",
              args: {
                name: "PROPERTY=VALUE",
                description: "Dict",
                suggestions: [],
              },
            },
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NFS_SHARE",
            description:
              "ID of the nfs_share or fully qualified identifier for the nfs_share.\n+\nTo set the `nfs_share` attribute:\n* provide the argument `nfs_share` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage operations in Bare Metal Solution",
      subcommands: [
        {
          name: "describe",
          description: "Show metadata for a Bare Metal Solution operation",
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
            flag12419,
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
          name: "wait",
          description:
            "Poll a long-running Bare Metal Solution operation until it completes",
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
            flag12419,
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
      ],
    },
    {
      name: "os-images",
      description: "Manage bare metal os images in Bare Metal Solution",
      subcommands: [
        {
          name: "describe",
          description: "Describe Bare Metal Solution OS images in a project",
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
                "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `os_image` on the command line with a fully specified name;\n* provide the argument `--region` on the command line;\n* global is the only supported location",
              args: { name: "REGION", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OS_IMAGE",
            description:
              "ID of the os_image or fully qualified identifier for the os_image.\n+\nTo set the `os_image` attribute:\n* provide the argument `os_image` on the command line",
          },
        },
        {
          name: "list",
          description: "List Bare Metal Solution OS images in a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4848,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6514,
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
      name: "ssh-keys",
      description: "Manage SSH keys for Bare Metal Solution",
      subcommands: [
        {
          name: "add",
          description:
            "Add a public SSH key to the project in Bare Metal Solution",
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
              name: "--key",
              description: "The SSH public key to add",
              args: { name: "KEY", description: "String", suggestions: [] },
            },
            {
              name: "--key-file",
              description:
                "The path to a file containing an SSH public key to add",
              args: {
                name: "KEY_FILE",
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
            name: "SSH_KEY",
            description:
              "ID of the SSH key or fully qualified identifier for the SSH key.\n+\nTo set the `ssh_key` attribute:\n* provide the argument `ssh_key` on the command line",
          },
        },
        {
          name: "list",
          description:
            "List the SSH keys added to the project in Bare Metal Solution",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4848,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6514,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove",
          description:
            "Remove an SSH key in Bare Metal Solution given its name",
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
            name: "SSH_KEY",
            description:
              "ID of the SSH key or fully qualified identifier for the SSH key.\n+\nTo set the `ssh_key` attribute:\n* provide the argument `ssh_key` on the command line",
          },
        },
      ],
    },
    {
      name: "volumes",
      description: "Manage bare metal volumes in Bare Metal Solution",
      subcommands: [
        {
          name: "describe",
          description: "Describe a Bare Metal Solution volume",
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
            flag12422,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "list",
          description: "List Bare Metal Solution volumes in a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4848,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11637,
            flag11946,
            flag12397,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "luns",
          description:
            "Manage bare metal logical unit numbers (LUNs) in Bare Metal Solution",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Bare Metal Solution LUN",
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
                    "Region of the resource.\n+\nTo set the `region` attribute:\n* provide the argument `lun` on the command line with a fully specified name;\n* provide the argument `--region` on the command line",
                  args: {
                    name: "REGION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--volume",
                  description:
                    "Bare Metal Solution volume.\n+\nTo set the `volume` attribute:\n* provide the argument `lun` on the command line with a fully specified name;\n* provide the argument `--volume` on the command line",
                  args: {
                    name: "VOLUME",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
              args: {
                name: "LUN",
                description:
                  "ID of the lun or fully qualified identifier for the lun.\n+\nTo set the `lun` attribute:\n* provide the argument `lun` on the command line",
              },
            },
            {
              name: "list",
              description: "List Bare Metal Solution LUNs in a project",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4848,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6514,
                flag7356,
                flag11637,
                flag11946,
                flag12414,
                flag14975,
                flag15315,
                flag15424,
                flag15506,
              ],
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a Bare Metal Solution volume",
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
              name: "--new-name",
              description:
                "New volume name for renaming an already existing volume",
              args: {
                name: "NEW_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag12422,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "restore",
          description:
            "Restore a Bare Metal Solution boot volume from an existing snapshot",
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
            flag12422,
            {
              name: "--snapshot",
              description: "Name of the snapshot to restore",
              args: {
                name: "SNAPSHOT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "snapshot",
          description: "Create a snapshot of a Bare Metal Solution boot volume",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "Textual description of the created snapshot",
              args: {
                name: "DESCRIPTION",
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
            flag12422,
            {
              name: "--snapshot-name",
              description: "Name to assign to the created snapshot",
              args: {
                name: "SNAPSHOT_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
        {
          name: "snapshots",
          description: "Manage snapshots for Bare Metal Solution volumes",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Bare Metal Solution boot volume snapshot",
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
                flag12421,
                flag14975,
                flag15315,
                flag15424,
                flag15505,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `snapshot` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Describe a Bare Metal Solution boot volume snapshot",
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
                flag12421,
                flag14975,
                flag15315,
                flag15424,
                flag15505,
              ],
              args: {
                name: "SNAPSHOT",
                description:
                  "ID of the snapshot or fully qualified identifier for the snapshot.\n+\nTo set the `snapshot` attribute:\n* provide the argument `snapshot` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List snapshots for a Bare Metal Solution boot volume",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4848,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6514,
                flag7356,
                flag11637,
                flag11946,
                flag12414,
                flag14975,
                flag15315,
                flag15424,
                flag15506,
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a Bare Metal Solution volume",
          options: [
            flag42,
            flag46,
            flag720,
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
            flag12422,
            flag12637,
            flag14975,
            flag15167,
            flag15315,
            flag15424,
          ],
          args: {
            name: "VOLUME",
            description:
              "ID of the volume or fully qualified identifier for the volume.\n+\nTo set the `volume` attribute:\n* provide the argument `volume` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
