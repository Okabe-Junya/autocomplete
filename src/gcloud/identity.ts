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
const flag11071: Fig.Option = {
  name: "--page-size",
  description: "The maximum number of results to return",
  args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
};
const flag11082: Fig.Option = {
  name: "--page-token",
  description:
    "The next_page_token value returned from a previous search request, if any",
  args: { name: "PAGE_TOKEN", description: "String", suggestions: [] },
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
  name: "identity",
  description: "Manage Cloud Identity Groups and Memberships resources",
  subcommands: [
    {
      name: "groups",
      description: "Manage Cloud Identity Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a new group",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--customer",
              description:
                'The customer ID for the customer\\\'s G Suite account.\nExample of customer: "C01k1e9nw"',
              args: {
                name: "CUSTOMER",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--description",
              description:
                "An extended description to help users determine the purpose of a Group. For\nexample, you can include information about who should join the Group, the\ntypes of messages to send to the Group, links to FAQs about the Group, or\nrelated Groups. Maximum length is 4,096 characters",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "The Group's display name",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dynamic-user-query",
              description:
                "Query that determines the memberships of the dynamic group.\n+\nExample of a query:\n--dynamic-user-query=\"user.organizations.exists(org,org.title=='SWE')\"",
              args: {
                name: "DYNAMIC_USER_QUERY",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--group-type",
              description:
                "The type of group to create. Setting group-type will add the\nappropriate labels for the type of group being created. _GROUP_TYPE_ must be one of:\n+\n*discussion*::: Creates a Google Groups discussion group.\n*dynamic*::: Creates a dynamic group.\n*security*::: Creates a security group.\n:::\n+",
              args: {
                name: "GROUP_TYPE",
                description: "String",
                suggestions: ["discussion", "dynamic", "security"],
              },
            },
            flag5453,
            flag5699,
            {
              name: "--labels",
              description:
                'Labels for group resource.\nExample of labels "--labels cloudidentity.googleapis.com/groups.discussion_forum"',
              args: { name: "LABELS", description: "String", suggestions: [] },
            },
            flag7356,
            {
              name: "--organization",
              description:
                'The organization the Group being created belongs to. This can be\nspecified either as an ID ("123456789") or as the associated domain\n("example.com")',
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--with-initial-owner",
              description:
                "If specified the user making the request will be added as the initial owner of the group being\ncreated. _WITH_INITIAL_OWNER_ must be one of:\n+\n*empty*::: The creator of the group will not be the owner of the group. This is\nthe default for dynamic groups.\n+\n*with-initial-owner*::: The creator of the group will be the owner of the group. This is\nthe default for non-dynamic groups.\n+\n:::\n+",
              args: {
                name: "WITH_INITIAL_OWNER",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["empty", "with-initial-owner"],
              },
            },
          ],
          args: {
            name: "EMAIL",
            description: "The email address of the group to be created",
          },
        },
        {
          name: "delete",
          description: "Delete an existing group",
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
            name: "EMAIL",
            description: "The email address of the group being deleted",
          },
        },
        {
          name: "describe",
          description: "Describe an existing group",
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
            name: "EMAIL",
            description: "The email address of the group being described",
          },
        },
        {
          name: "memberships",
          description: "Manage Cloud Identity Groups Memberships",
          subcommands: [
            {
              name: "add",
              description: "Create a new membership in an existing group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--expiration",
                  description:
                    "Optional time of expiration for the membership. This is given as a duration from now, for\nexample '30d', '6m', '3y' for 30 days, 6 months, or 3 years respectively",
                  args: {
                    name: "EXPIRATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group the new membership is being added to",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the group or user being added to a group",
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--roles",
                  description:
                    "A comma-separated list of roles for a member within the Group. If not specified,\nMEMBER will be used as a default value",
                  args: { name: "ROLES", description: "List", suggestions: [] },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "check-transitive-membership",
              description:
                "Check a potential member for transitive membership in a group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to check transitive membership for",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member to check transitive membership for",
                  args: {
                    name: "MEMBER_EMAIL",
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
            },
            {
              name: "delete",
              description: "Delete a membership from an existing group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group the new membership is being removed from",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the group or user being removed from the group identified by group-email",
                  args: {
                    name: "MEMBER_EMAIL",
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
            },
            {
              name: "describe",
              description: "Describe a membership in a group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group whose membership is being described",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member whose membership is being described",
                  args: {
                    name: "MEMBER_EMAIL",
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
            },
            {
              name: "get-membership-graph",
              description:
                "Get a membership graph of just a member or both a member and a group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to constrain the membership graph with",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                {
                  name: "--labels",
                  description:
                    "The labels of the groups in the membership graph",
                  args: {
                    name: "LABELS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member to get the membership graph for",
                  args: {
                    name: "MEMBER_EMAIL",
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
            },
            {
              name: "list",
              description: "List memberships in an existing group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
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
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to show members for",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
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
                {
                  name: "--page-token",
                  description:
                    "The next_page_token value returned from a previous list request, if any",
                  args: {
                    name: "PAGE_TOKEN",
                    description: "String",
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
                {
                  name: "--view",
                  description:
                    "There are two possible views, 'basic' and 'full', default is 'basic'. _VIEW_ must be one of:\n+\n*basic*::: Response only basic information of the Groups. (e.g. 'display_name', 'name')\n+\n*full*::: Response includes all the fields of the Groups\n+\n:::\n+",
                  args: {
                    name: "VIEW",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: ["basic", "full"],
                  },
                },
              ],
            },
            {
              name: "modify-membership-roles",
              description:
                "Add/remove/modify membership roles of a membership in a group",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-roles",
                  description:
                    "Membership roles to be added.\nCurrently supported MembershipRole: 'MEMBER', 'OWNER', 'MANAGER'",
                  args: {
                    name: "ADD_ROLES",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group that member-email belongs to",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the group or user that is being updated",
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--remove-roles",
                  description:
                    "Membership role names to be removed.\nCurrently supported MembershipRole: 'OWNER', 'MANAGER'.\nMEMBER-less owner is not supported so removing just MEMBER role won't be possible",
                  args: {
                    name: "REMOVE_ROLES",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--update-roles-params",
                  description:
                    "Resource representing the parameters to update membership roles.\nAn example would be ``--update-roles-params MEMBER=expiry_details.expire_time''",
                  args: {
                    name: "UPDATE_ROLES_PARAMS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
            },
            {
              name: "search-transitive-groups",
              description: "Search transitive groups of a member",
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
                  name: "--labels",
                  description: "The labels of the transitive groups",
                  args: {
                    name: "LABELS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--member-email",
                  description:
                    "The email address of the member to search transitive groups for",
                  args: {
                    name: "MEMBER_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11071,
                flag11082,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "search-transitive-memberships",
              description: "Search transitive memberships of a group",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                {
                  name: "--group-email",
                  description:
                    "The email address of the group to search transitive memberships for",
                  args: {
                    name: "GROUP_EMAIL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5453,
                flag5699,
                flag7356,
                flag11071,
                flag11082,
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
          name: "search",
          description: "Searches for Groups matching a specified query",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--customer",
              description:
                'The customer ID for the customer\'s G Suite account.\nExample of customer: "C01k1e9nw"',
              args: {
                name: "CUSTOMER",
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
              name: "--labels",
              description:
                "One or more label entries that apply to the Group. Currently supported labels contain a key\nwith an empty value.\n+\nGoogle Groups are the default type of group and have a label with a key of\n'cloudidentity.googleapis.com/groups.discussion_forum' and an empty value.\n+\nExisting Google Groups can have an additional label with a key of\n'cloudidentity.googleapis.com/groups.security' and an empty value added to them.\n*This is an immutable change and the security label cannot be removed once added.*\n+\nPOSIX groups have a label with a key of 'cloudidentity.googleapis.com/groups.posix'.\n+\nDynamic groups have a label with a key of 'cloudidentity.googleapis.com/groups.dynamic'.\n+\nIdentity-mapped groups for Cloud Search have a label with a key of 'system/groups/external'\nand an empty value.\n+\nExamples: {\"cloudidentity.googleapis.com/groups.discussion_forum\": \"\"} or\n{\"system/groups/external\": \"\"}",
              args: { name: "LABELS", description: "String", suggestions: [] },
            },
            flag7356,
            {
              name: "--organization",
              description: "The organization ID for the groups being searched",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--page-size",
              description:
                "The maximum number of results to return.\n+\nNote that the number of results returned may be less than this value even if there are more\navailable results. To fetch all results, clients must continue calling this method\nrepeatedly until the response no longer contains a nextPageToken.\n+\nIf unspecified, defaults to 200 'basic' view and to 50 for 'full' view.\n+\nMust not be greater than 1000 for 'basic' view or 500 for 'full' view",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
            },
            {
              name: "--page-token",
              description:
                "The nextPageToken value returned from a previous search request, if any",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--view",
              description:
                "The level of detail to be returned. There are two possible views: 'basic' and 'full'.\nIf unspecified, default to 'basic'. _VIEW_ must be one of:\n+\n*basic*::: Default. Only basic group information is returned.\n+\n*full*::: All group information is returned.\n+\n:::\n+",
              args: {
                name: "VIEW",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["basic", "full"],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a group",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--clear-description",
              description: "Clear existing description on group being updated",
            },
            {
              name: "--clear-display-name",
              description: "Clear existing display name on group being updated",
            },
            flag2292,
            {
              name: "--description",
              description:
                "Replace existing description on group being updated",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description:
                "Replace existing display name on group being updated",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dynamic-user-query",
              description:
                "Query that determines the memberships of the dynamic group.\n+\nExample of a query:\n`--dynamic-user-query=\"user.organizations.exists(org,org.title=='SWE')\"`",
              args: {
                name: "DYNAMIC_USER_QUERY",
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
              name: "--labels",
              description:
                "One or more label entries that apply to the group. Currently supported labels contain a key\nwith an empty value.\n+\nGoogle Groups are the default type of group and have a label with a key of\n'cloudidentity.googleapis.com/groups.discussion_forum' and an empty value.\n+\nExisting Google Groups can have an additional label with a key of\n'cloudidentity.googleapis.com/groups.security' and an empty value added to them.\n*This is an immutable change and the security label cannot be removed once added.*\n+\nDynamic groups have a label with a key of 'cloudidentity.googleapis.com/groups.dynamic'.\n+\nIdentity-mapped groups for Cloud Search have a label with a key of 'system/groups/external'\nand an empty value.\n+\nExamples: {\"cloudidentity.googleapis.com/groups.discussion_forum\": \"\"} or\n{\"system/groups/external\": \"\"}",
              args: { name: "LABELS", description: "String", suggestions: [] },
            },
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "EMAIL",
            description: "The email address of the group to be updated",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
