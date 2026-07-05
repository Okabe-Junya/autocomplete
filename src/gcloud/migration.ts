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
const flag113: Fig.Option = {
  name: "--adaptation-modifiers",
  description:
    "A map of flags to pass to the OS adaptation process.\nThe actual value depends on the modifier and can also be empty.\ne.g. --adaptation-modifiers=flag1=value1,flag2",
  args: {
    name: "ADAPTATION_MODIFIERS",
    description: "String",
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
const flag6308: Fig.Option = {
  name: "--kms-key",
  description:
    "Fully qualified identifier for the Cloud KMS (Key Management Service) cryptokey that will be used to protect the image",
  args: { name: "KMS_KEY", description: "String", suggestions: [] },
};
const flag6489: Fig.Option = {
  name: "--license-type",
  description:
    "The license to use post migration. _LICENSE_TYPE_ must be one of: *compute-engine-license-type-byol*, *compute-engine-license-type-default*, *compute-engine-license-type-payg*",
  args: {
    name: "LICENSE_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "compute-engine-license-type-byol",
      "compute-engine-license-type-default",
      "compute-engine-license-type-payg",
    ],
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
const flag7128: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line;\n* set the property `compute/region`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7181: Fig.Option = {
  name: "--location",
  description:
    "Resource location.\n+\nTo set the `location` attribute:\n* provide the argument `image_import_name` on the command line with a fully specified name;\n* provide the argument `--location` on the command line;\n* set the property `compute/region`",
  args: { name: "LOCATION", description: "String", suggestions: [] },
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
const flag13166: Fig.Option = {
  name: "--rootfs-uuid",
  description: "Identifies the file system to adapt",
  args: { name: "ROOTFS_UUID", description: "String", suggestions: [] },
};
const flag13868: Fig.Option = {
  name: "--skip-os-adaptation",
  description: "If true, skip OS adaptation. Default false",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14010: Fig.Option = {
  name: "--source-file",
  description:
    "The path to the Google Cloud Storage file from which the image should be imported",
  args: { name: "SOURCE_FILE", description: "String", suggestions: [] },
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

const completionSpec: Fig.Spec = {
  name: "migration",
  description: "The root group for various Cloud Migration teams",
  subcommands: [
    {
      name: "vms",
      description:
        "Provides Migrate to Virtual Machines (VM migration) service functionality",
      subcommands: [
        {
          name: "image-imports",
          description:
            "Imports images to Google Compute Engine from Google Cloud Storage",
          subcommands: [
            {
              name: "create",
              description:
                "import Virtual Disk images to Google Compute Engine",
              options: [
                flag42,
                flag46,
                flag113,
                {
                  name: "--additional-licenses",
                  description:
                    "Comma-separated list of the additional licenses to assign to the image",
                  args: {
                    name: "ADDITIONAL_LICENSES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag1201,
                {
                  name: "--boot-conversion",
                  description:
                    "This property will trigger an internal process which will convert the\n image from using the existing boot option to another.\n The size of the boot disk might be increased to allow the conversion.\n Currently only support BIOS_TO_EFI.\n+\n_BOOT_CONVERSION_ must be one of: *bios-to-efi*, *boot-conversion-unspecified*, *none*",
                  args: {
                    name: "BOOT_CONVERSION",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "bios-to-efi",
                      "boot-conversion-unspecified",
                      "none",
                    ],
                  },
                },
                flag2292,
                {
                  name: "--description",
                  description: "A description of the image",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--family-name",
                  description:
                    "The name of the image family to which the new image belongs",
                  args: {
                    name: "FAMILY_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--generalize",
                  description:
                    "If true, generalize the imported image. Default false.\nThe generalization process enables co-existence of multiple VMs created from the same image.\nFor Windows, generalizing the image removes computer-specific information such as\ninstalled drivers and the computer security identifier (SID)",
                },
                {
                  name: "--guest-os-features",
                  description:
                    "Guest OS features to enable on the imported image.\nThis field does not change the OS of the image; it only marks the image with the specified features, so ensure they are compatible with the OS.\nIf specified, --skip-os-adaptation must be specified",
                  args: {
                    name: "GUEST_OS_FEATURES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag5453,
                {
                  name: "--image-name",
                  description:
                    "The name of the image that will be imported to Google Compute Engine.\nDefault is the Image Import name",
                  args: {
                    name: "IMAGE_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag6308,
                {
                  name: "--labels",
                  description: "A map of labels to associate with the image",
                  args: {
                    name: "KEY=VALUE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                    suggestions: [],
                  },
                },
                flag6489,
                flag7181,
                flag7356,
                flag11637,
                flag11946,
                flag13166,
                {
                  name: "--single-region-storage",
                  description:
                    "If true, the location of the imported image will be the region of the import job. Otherwise the closest multi-region is selected. Default is false",
                },
                flag13868,
                flag14010,
                {
                  name: "--target-project",
                  description:
                    "The target project resource path to which the image will be imported.\nDefault is the customer project.\nTo get a list of the target projects run the gcloud alpha migration vms target-projects list command",
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import.\n+\nTo set the `image_import_name` attribute:\n* provide the argument `image_import_name` on the command line",
              },
            },
            {
              name: "delete",
              description: "delete an Image Import resource",
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
                flag7181,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import.\n+\nTo set the `image_import_name` attribute:\n* provide the argument `image_import_name` on the command line",
              },
            },
            {
              name: "describe",
              description: "describe an Image Import",
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
                flag7181,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import.\n+\nTo set the `image_import_name` attribute:\n* provide the argument `image_import_name` on the command line",
              },
            },
            {
              name: "list",
              description: "list Image Imports",
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
                flag7128,
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
          name: "machine-image-imports",
          description:
            "Imports machine images to Google Compute Engine from Google Cloud Storage",
          subcommands: [
            {
              name: "create",
              description: "import machine images to Google Compute Engine",
              options: [
                flag42,
                flag46,
                flag113,
                {
                  name: "--additional-licenses",
                  description:
                    "Comma-separated list of the additional licenses to assign to the machine image",
                  args: {
                    name: "ADDITIONAL_LICENSES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag1201,
                {
                  name: "--boot-conversion",
                  description:
                    "This property will trigger an internal process which will convert the\nimage from using the existing boot option to another.\nThe size of the boot disk might be increased to allow the conversion.\nCurrently only support BIOS_TO_EFI. _BOOT_CONVERSION_ must be one of: *bios-to-efi*, *boot-conversion-unspecified*, *none*",
                  args: {
                    name: "BOOT_CONVERSION",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "bios-to-efi",
                      "boot-conversion-unspecified",
                      "none",
                    ],
                  },
                },
                flag2292,
                {
                  name: "--description",
                  description: "A description of the machine image",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--enable-integrity-monitoring",
                  description:
                    "Defines whether the instance created by the machine image has integrity monitoring enabled. This can be set to true only if the image boot option is EFI, and vTPM is enabled",
                },
                {
                  name: "--enable-vtpm",
                  description:
                    "Defines whether the instance created by the machine image has vTPM enabled. This can be set to true only if the image boot option is EFI",
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--generalize",
                  description:
                    "If true, generalize the imported machine image. Default false.\nThe generalization process enables co-existence of multiple VMs created from the same machine image.\nFor Windows, generalizing the machine image removes computer-specific information such as\ninstalled drivers and the computer security identifier (SID)",
                },
                flag5453,
                flag5699,
                flag6308,
                {
                  name: "--labels",
                  description:
                    "A map of labels to associate with the machine image",
                  args: {
                    name: "KEY=VALUE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_AdditionalPropsType",
                    suggestions: [],
                  },
                },
                flag6489,
                flag7181,
                flag7356,
                {
                  name: "--machine-image-name",
                  description:
                    "The name of the machine image that will be imported to Google Compute Engine.\nDefault is the Image Import name",
                  args: {
                    name: "MACHINE_IMAGE_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--machine-type",
                  description:
                    "The machine type to create the machine image with. If not provided, the service will choose a relevant machine type series based on the information from the source image",
                  args: {
                    name: "MACHINE_TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--network-interface",
                  description:
                    "The network interface to use for the instance created by the machine image.\nThis is a dicionary with the following keys:\n- network: The network to use for this network interface.\n- subnetwork: The subnetwork to use for this network interface.\n- network-tier: The network tier to use for this network interface.\nThis argument can be specified multiple times in case of multiple nics",
                  args: {
                    name: "NETWORK_INTERFACE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13166,
                {
                  name: "--scopes",
                  description:
                    "The list of scopes to be made available for the service account",
                  args: {
                    name: "SCOPES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--secure-boot",
                  description:
                    "Defines whether the instance created by the machine image has Secure Boot enabled. This can be set to true only if the image boot option is EFI. If not specified we will use the configuration of the source. _SECURE_BOOT_ must be one of: *false*, *secure-boot-unspecified*, *true*",
                  args: {
                    name: "SECURE_BOOT",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["false", "secure-boot-unspecified", "true"],
                  },
                },
                {
                  name: "--service-account",
                  description: "The email address of the service account",
                  args: {
                    name: "SERVICE_ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--single-region-storage",
                  description:
                    "If true, the location of the imported machine image will be the region of the import job. Otherwise the closest multi-region is selected. Default is false",
                },
                flag13868,
                flag14010,
                {
                  name: "--tags",
                  description:
                    "The tags to apply to the instance created by the machine image",
                  args: { name: "TAGS", description: "List", suggestions: [] },
                },
                {
                  name: "--target-project",
                  description:
                    "The target project resource path to which the machine image will be imported.\nDefault is the host project.\nTo get a list of the target projects run the gcloud alpha migration vms target-projects list command",
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import.\n+\nTo set the `image_import_name` attribute:\n* provide the argument `image_import_name` on the command line",
              },
            },
            {
              name: "delete",
              description: "delete an Image Import resource",
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
                flag7181,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import.\n+\nTo set the `image_import_name` attribute:\n* provide the argument `image_import_name` on the command line",
              },
            },
            {
              name: "describe",
              description: "describe an Image Import",
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
                flag7181,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IMAGE_IMPORT_NAME",
                description:
                  "ID of the image_import or fully qualified identifier for the image_import.\n+\nTo set the `image_import_name` attribute:\n* provide the argument `image_import_name` on the command line",
              },
            },
            {
              name: "list",
              description: "list Image Imports",
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
                flag7128,
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
          name: "target-projects",
          description: "Manage Target Projects",
          subcommands: [
            {
              name: "list",
              description: "list Target Projects",
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
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
