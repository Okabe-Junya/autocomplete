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
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag480: Fig.Option = {
  name: "--allowed-values-regex",
  description:
    "User-assigned regex of allowed short names of TagValues under a TagKey",
  args: {
    name: "ALLOWED_VALUES_REGEX",
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
const flag2218: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2225: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2228: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag3343: Fig.Option = {
  name: "--description",
  description:
    "User-assigned description of the TagKey or TagValue. Must not exceed 256 characters",
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
const flag4926: Fig.Option = {
  name: "--folder",
  description: "Folder ID",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
};
const flag4999: Fig.Option = {
  name: "--folder",
  description: "ID for the folder to use as a parent",
  args: { name: "FOLDER_ID", description: "String", suggestions: [] },
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
const flag7749: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
};
const flag7753: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
};
const flag10791: Fig.Option = {
  name: "--organization",
  description: "ID for the organization to use as a parent",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
};
const flag10909: Fig.Option = {
  name: "--organization",
  description: "Organization ID",
  args: { name: "ORGANIZATION_ID", description: "String", suggestions: [] },
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
const flag11129: Fig.Option = {
  name: "--parent",
  description: "Parent of the TagKey in the form of organizations/{org_id}",
  args: { name: "PARENT", description: "String", suggestions: [] },
};
const flag11130: Fig.Option = {
  name: "--parent",
  description:
    "Parent of the TagValue in either in the form of tagKeys/{id} or {org_id}/{tagkey_short_name}",
  args: { name: "PARENT", description: "String", suggestions: [] },
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
const flag13132: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13133: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14614: Fig.Option = {
  name: "--tag-value",
  description:
    "Tag value name or namespaced name. The name should be in the form tagValues/{numeric_id}. The namespaced name should be in the form {org_id}/{tag_key_short_name}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between",
  args: { name: "TAG_VALUE", description: "String", suggestions: [] },
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
  name: "resource-manager",
  description: "Manage Cloud Resources",
  subcommands: [
    {
      name: "capabilities",
      description: "Manage Cloud Folder Capabilities",
      subcommands: [
        {
          name: "describe",
          description: "Show whether a Capability is enabled",
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
            name: "CAPABILITY_ID",
            description: "ID for the capability you want to describe",
          },
        },
        {
          name: "update",
          description: "Update a folder capability",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--enable",
              description:
                "Enable the Capability. Use *--enable* to enable and *--no-enable* to disable",
            },
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
              name: "--update-mask",
              description:
                'Update Mask. This is an optional field, and the only valid value this can be set to currently is "value"',
              args: {
                name: "UPDATE_MASK",
                description: "String",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "CAPABILITY_ID",
            description: "ID for the capability you want to update",
          },
        },
      ],
    },
    {
      name: "folders",
      description: "Manage Cloud Folders",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a folder",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
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
            name: "FOLDER",
            description:
              "ID of the folder or fully qualified identifier for the folder.\n+\nTo set the `folder` attribute:\n* provide the argument `folder` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new folder",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description: "Friendly display name to use for the new folder",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag4999,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10791,
            flag11637,
            flag11946,
            {
              name: "--tags",
              description:
                "List of tags KEY=VALUE pairs to bind.\nEach item must be expressed as\n`<tag-key-namespaced-name>=<tag-value-short-name>`.\n+\nExample: `123/environment=production,123/costCenter=marketing`\n+\nNote: Currently this field is in Preview",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a folder",
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
            name: "FOLDER_ID",
            description: "ID for the folder you want to delete",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a folder",
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
            name: "FOLDER_ID",
            description: "ID for the folder you want to describe",
          },
        },
        {
          name: "get-ancestors-iam-policy",
          description: "Get IAM policies for a folder and its ancestors",
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
            {
              name: "--include-deny",
              description:
                "Include deny policies on the project and its ancestors in the result",
            },
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FOLDER_ID",
            description:
              "ID of the folder or fully qualified identifier for the folder.\n+\nTo set the `folder` attribute:\n* provide the argument `folder_id` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get IAM policy for a folder",
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
            flag15315,
            flag15424,
          ],
          args: {
            name: "FOLDER_ID",
            description: "ID for the folder whose policy you want to get",
          },
        },
        {
          name: "list",
          description: "List folders accessible by the active account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            {
              name: "--folder",
              description: "ID for the folder to list folders under",
              args: {
                name: "FOLDER_ID",
                description: "String",
                suggestions: [],
              },
            },
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            {
              name: "--organization",
              description: "ID for the organization to list folders under",
              args: {
                name: "ORGANIZATION_ID",
                description: "String",
                suggestions: [],
              },
            },
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
          name: "move",
          description:
            "Move a folder to a new position within the same organization",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4999,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10791,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FOLDER_ID",
            description: "ID for the folder you want to move",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding for a folder",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
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
            name: "FOLDER",
            description:
              "ID of the folder or fully qualified identifier for the folder.\n+\nTo set the `folder` attribute:\n* provide the argument `folder` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a folder",
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
          args: [
            {
              name: "FOLDER_ID",
              description: "ID for the folder whose policy you want to set",
            },
            {
              name: "POLICY_FILE",
              description: "JSON or YAML file with the IAM policy",
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a folder",
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
            name: "FOLDER_ID",
            description: "ID for the folder you want to undelete",
          },
        },
        {
          name: "update",
          description: "Update the display name of a folder",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--display-name",
              description:
                "New display name for the folder (unique under the same parent)",
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
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "FOLDER_ID",
            description: "ID for the folder you want to update",
          },
        },
      ],
    },
    {
      name: "org-policies",
      description: "Manage Org Policies",
      subcommands: [
        {
          name: "allow",
          description:
            "Add values to an Organization Policy allowed_values list policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ORG_POLICY_ID",
              description: "The Org Policy constraint name",
            },
            {
              name: "ALLOWED_VALUE",
              description:
                "The values to add to the allowed_values list policy",
              isVariadic: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Organization Policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORG_POLICY_ID",
            description: "The Org Policy constraint name",
          },
        },
        {
          name: "deny",
          description:
            "Add values to an Organization Policy denied_values list policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "ORG_POLICY_ID",
              description: "The Org Policy constraint name",
            },
            {
              name: "DENIED_VALUE",
              description: "The values to add to the denied_values list policy",
              isVariadic: true,
            },
          ],
        },
        {
          name: "describe",
          description: "Describe an Organization Policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            { name: "--effective", description: "Show the effective policy" },
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORG_POLICY_ID",
            description: "The Org Policy constraint name",
          },
        },
        {
          name: "disable-enforce",
          description:
            "Turns off enforcement of boolean Organization Policy constraint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORG_POLICY_ID",
            description: "The Org Policy constraint name",
          },
        },
        {
          name: "enable-enforce",
          description:
            "Turns on enforcement of boolean Organization Policy constraint",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ORG_POLICY_ID",
            description: "The Org Policy constraint name",
          },
        },
        {
          name: "list",
          description:
            "List Organization Policies associated with the specified resource",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag10909,
            flag11059,
            flag11946,
            {
              name: "--show-unset",
              description:
                "Show available constraints. For more information about constraints, see\nhttps://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints",
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "set-policy",
          description: "Set Organization Policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag4926,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10909,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_FILE",
            description: "JSON or YAML file with the Organization Policy",
          },
        },
      ],
    },
    {
      name: "tags",
      description: "Create and manipulate tag keys, values and bindings",
      subcommands: [
        {
          name: "bindings",
          description: "Create and manipulate TagBindings",
          subcommands: [
            {
              name: "create",
              description: "Creates a TagBinding resource",
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
                {
                  name: "--location",
                  description:
                    "Region or zone of the resource to bind to the TagValue. This field is not required if the resource is a global resource like projects, folders and organizations",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--parent",
                  description:
                    "Full resource name of the resource to attach to the tagValue",
                  args: {
                    name: "PARENT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14614,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description: "Deletes a TagBinding",
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
                {
                  name: "--location",
                  description:
                    "Region or zone of the resource to unbind from the TagValue. This field is not required if the resource is a global resource like projects, folders and organizations",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--parent",
                  description:
                    "Full resource name of the resource attached to the tagValue",
                  args: {
                    name: "PARENT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14614,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "list",
              description: "Lists TagBindings bound to the specified resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--effective",
                  description:
                    "Show all effective TagBindings on the resource. TagBindings applied at a higher level will be inherited to all descendants",
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
                    "Region or zone of the resource for listing TagBindings. This field should not be set if the resource is a global resource like projects, folders and organizations",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11059,
                {
                  name: "--parent",
                  description: "Full resource name attached to the binding",
                  args: {
                    name: "PARENT",
                    description: "String",
                    suggestions: [],
                  },
                },
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
          name: "holds",
          description: "Create and manipulate TagHolds",
          subcommands: [
            {
              name: "create",
              description: "Create a TagHold resource",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--help-link",
                  description:
                    "A URL where an end user can learn more about removing this hold",
                  args: {
                    name: "HELP_LINK",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--holder",
                  description:
                    "The name of the resource where the TagValue is being used. Must be less than 200 characters",
                  args: {
                    name: "HOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                {
                  name: "--location",
                  description:
                    'Region or zone where the TagHold will be stored. If not provided, the TagHold will be stored in a "global" region',
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--origin",
                  description:
                    "An optional string representing the origin of this request. This field should include human-understandable information to distinguish origins from each other. Must be less than 200 characters",
                  args: {
                    name: "ORIGIN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PARENT",
                description: "Tag value name or namespaced name",
              },
            },
            {
              name: "delete",
              description: "Delete a TagHold",
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
                    'Region where the TagHold is stored. If not provided, the API will attempt to find and delete the specified TagHold from the "global" region',
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
                name: "TAG_HOLD_NAME",
                description:
                  "TagHold given its full name, specified as tagValues/{tag_value_id}/tagHolds/{tag_hold_id}",
              },
            },
            {
              name: "list",
              description: "List TagHolds under the specified TagValue",
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
                  name: "--holder",
                  description:
                    "The holder field of the TagHold to match exactly. If not provided, the API will return all matching TagHolds disregarding the holder field",
                  args: {
                    name: "HOLDER",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    'Region where the matching TagHolds are stored. If not provided, the API will attempt to retrieve matching TagHolds from the "global" region',
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--origin",
                  description:
                    "The origin field of the TagHold to match exactly. If not provided, the API will return all matching TagHolds disregarding the origin field",
                  args: {
                    name: "ORIGIN",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PARENT",
                description:
                  "TagValue resource name or namespaced name to list TagHolds for. This field should be in the form tagValues/<id> or <parent_namespace>/<tagkey_short_name>/<short_name>",
              },
            },
          ],
        },
        {
          name: "keys",
          description: "Create and manipulate TagKeys",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Adds a policy binding to the IAM policy of a TagKey",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2225,
                flag2218,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag7749,
                flag11637,
                flag11946,
                flag13132,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "create",
              description:
                "Creates a TagKey resource under the specified tag parent",
              options: [
                flag42,
                flag46,
                flag480,
                flag720,
                flag1201,
                flag2292,
                flag3343,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11129,
                flag11637,
                {
                  name: "--purpose",
                  description:
                    "Purpose specifier of the TagKey that can only be set on creation. Specifying this field adds additional validation from the policy system that corresponds to the purpose. _PURPOSE_ must be one of: *GCE_FIREWALL*, *DATA_GOVERNANCE*",
                  args: {
                    name: "PURPOSE",
                    description: "String",
                    suggestions: ["GCE_FIREWALL", "DATA_GOVERNANCE"],
                  },
                },
                {
                  name: "--purpose-data",
                  description:
                    "Purpose data of the TagKey that can only be set on creation. This data is validated by the policy system that corresponds to the purpose",
                  args: {
                    name: "PURPOSE_DATA",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SHORT_NAME",
                description:
                  "User specified, friendly name of the TagKey or TagValue. The field must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "delete",
              description: "Deletes the specified TagKey resource",
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
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "describe",
              description: "Describes a TagKey resource",
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
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "get-iam-policy",
              description: "Gets the IAM policy for a TagKey resource",
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
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "list",
              description: "Lists TagKeys under the specified parent resource",
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
                flag11129,
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
              name: "remove-iam-policy-binding",
              description:
                "Removes a policy binding from the IAM policy of a TagKey",
              options: [
                flag42,
                flag46,
                flag407,
                flag1201,
                flag2228,
                flag2218,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag7753,
                flag11637,
                flag11946,
                flag13133,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "set-iam-policy",
              description: "Sets IAM policy for a TagKey resource",
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
              args: [
                {
                  name: "RESOURCE_NAME",
                  description:
                    "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
                },
                {
                  name: "POLICY_FILE",
                  description:
                    "Path to a local JSON or YAML formatted file containing a valid policy. The output of the `get-iam-policy` command is a valid file, as is any JSON or YAML file conforming to the structure of a [Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified TagKey resource's description",
              options: [
                flag42,
                flag46,
                flag480,
                flag720,
                flag1201,
                flag2292,
                flag3343,
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
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
          ],
        },
        {
          name: "values",
          description: "Create and manipulate TagValues",
          subcommands: [
            {
              name: "add-iam-policy-binding",
              description:
                "Adds a policy binding to the IAM policy of a TagValue",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2225,
                flag2218,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag7749,
                flag11637,
                flag11946,
                flag13132,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "create",
              description: "Creates a TagValue resource",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3343,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11130,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SHORT_NAME",
                description:
                  "User specified, friendly name of the TagKey or TagValue. The field must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "delete",
              description: "Deletes the specified TagValue resource",
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
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "describe",
              description: "Describes a TagValue resource",
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
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "get-iam-policy",
              description: "Gets the IAM policy for a TagValue resource",
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
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "list",
              description:
                "Lists TagValues under the specified parent resource",
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
                flag11130,
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
              name: "remove-iam-policy-binding",
              description:
                "Removes a policy binding from the IAM policy of a TagValue",
              options: [
                flag42,
                flag46,
                flag407,
                flag1201,
                flag2228,
                flag2218,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag7753,
                flag11637,
                flag11946,
                flag13133,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
            {
              name: "set-iam-policy",
              description: "Sets IAM policy for a TagValue resource",
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
              args: [
                {
                  name: "RESOURCE_NAME",
                  description:
                    "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
                },
                {
                  name: "POLICY_FILE",
                  description:
                    "Path to a local JSON or YAML formatted file containing a valid policy. The output of the `get-iam-policy` command is a valid file, as is any JSON or YAML file conforming to the structure of a [Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the specified TagValue resource's description",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3343,
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
                name: "RESOURCE_NAME",
                description:
                  "Resource name or namespaced name. The resource name should be in the form {resource_type}/{numeric_id}. The namespaced name should be in the form {org_id}/{short_name} where short_name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores ( _ ), dots (.), and alphanumerics between",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
