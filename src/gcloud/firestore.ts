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
const flag1047: Fig.Option = {
  name: "--backup-schedule",
  description:
    "The backup schedule to operate on.\n+\nFor example, to operate on backup schedule `091a49a0-223f-4c98-8c69-a284abbdb26b`:\n+\n  $ {command} --backup-schedule='091a49a0-223f-4c98-8c69-a284abbdb26b'",
  args: { name: "BACKUP_SCHEDULE", description: "String", suggestions: [] },
};
const flag1067: Fig.Option = {
  name: "--backup",
  description:
    "The backup to operate on.\n+\nFor example, to operate on backup `cf9f748a-7980-4703-b1a1-d1ffff591db0`:\n+\n  $ {command} --backup='cf9f748a-7980-4703-b1a1-d1ffff591db0'",
  args: { name: "BACKUP", description: "String", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag2116: Fig.Option = {
  name: "--collection-group",
  description:
    "Collection group of the field.\n+\n\nTo set the `collection-group` attribute:\n* provide the argument `field` on the command line with a fully specified name;\n* provide the argument `--collection-group` on the command line",
  args: { name: "COLLECTION_GROUP", description: "String", suggestions: [] },
};
const flag2118: Fig.Option = {
  name: "--collection-group",
  description:
    "ID of the collection group or fully qualified identifier for the collection group.\n+\nTo set the `collection-group` attribute:\n* provide the argument `--collection-group` on the command line;\n* provide the argument [--collection-group] on the command line",
  args: { name: "COLLECTION_GROUP", description: "String", suggestions: [] },
};
const flag2119: Fig.Option = {
  name: "--collection-ids",
  description:
    "List specifying which collection groups will be included in the operation.\nWhen omitted, all collection groups are included.\n+\nFor example, to operate on only the `customers` and `orders`\ncollections groups:\n+\n  $ {command} --collection-ids='customers','orders'",
  args: { name: "COLLECTION_GROUP_IDS", description: "List", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2779: Fig.Option = {
  name: "--database",
  description:
    "The database to operate on. The default value is `(default)`.\n+\nFor example, to operate on database `foo`:\n+\n  $ {command} --database='foo'",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2783: Fig.Option = {
  name: "--database",
  description:
    "Database of the collection group.\n+\n\nTo set the `database` attribute:\n* provide the argument `--collection-group` on the command line with a fully specified name;\n* provide the argument [--collection-group] on the command line with a fully specified name;\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2785: Fig.Option = {
  name: "--database",
  description:
    "Database of the composite index.\n+\n\nTo set the `database` attribute:\n* provide the argument `index` on the command line with a fully specified name;\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2787: Fig.Option = {
  name: "--database",
  description:
    "Database of the field.\n+\n\nTo set the `database` attribute:\n* provide the argument `field` on the command line with a fully specified name;\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag2794: Fig.Option = {
  name: "--database",
  description:
    "The database to operate on.\n+\nFor example, to operate on database `foo`:\n+\n  $ {command} --database='foo'",
  args: { name: "DATABASE", description: "String", suggestions: [] },
};
const flag4382: Fig.Option = {
  name: "--encryption-type",
  description:
    "The encryption type of the destination database. _ENCRYPTION_TYPE_ must be one of: *use-source-encryption*, *customer-managed-encryption*, *google-default-encryption*",
  args: {
    name: "ENCRYPTION_TYPE",
    description: "String",
    suggestions: [
      "use-source-encryption",
      "customer-managed-encryption",
      "google-default-encryption",
    ],
  },
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
const flag6298: Fig.Option = {
  name: "--kms-key-name",
  description:
    "The resource ID of a Cloud KMS key. If set, the database created will be a Customer-Managed Encryption Key (CMEK) database encrypted with this key.\nThis feature is allowlist only in initial launch.\n+\nOnly a key in the same location as this database is allowed to be used for encryption.\nFor Firestore's nam5 multi-region, this corresponds to Cloud KMS location us.\nFor Firestore's eur3 multi-region, this corresponds to Cloud KMS location europe.\nSee https://cloud.google.com/kms/docs/locations.\n+\nThis value should be the KMS key resource ID in the format of `projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.\nHow to retrieve this resource ID is listed at https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.\n+\n\nThis flag must only be specified when encryption-type is `customer-managed-encryption`",
  args: { name: "KMS_KEY_NAME", description: "String", suggestions: [] },
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
const flag7075: Fig.Option = {
  name: "--location",
  description:
    "The location to operate on. Available locations are listed at\nhttps://cloud.google.com/firestore/docs/locations.\n+\nFor example, to operate on location `us-east1`:\n+\n  $ {command} --location='us-east1'",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag8109: Fig.Option = {
  name: "--namespace-ids",
  description:
    "List specifying which namespaces will be included in the operation.\nWhen omitted, all namespaces are included.\n+\nThis is only supported for Datastore Mode databases.\n+\nFor example, to operate on only the `customers` and `orders` namespaces:\n+\n  $ {command} --namespaces-ids='customers','orders'",
  args: { name: "NAMESPACE_IDS", description: "List", suggestions: [] },
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
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14656: Fig.Option = {
  name: "--tags",
  description:
    "Tags to attach to the destination database. Example: --tags=key1=value1,key2=value2\n+\nFor example, to attach tags to a database:\n+\n$ --tags=key1=value1,key2=value2",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
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
  name: "firestore",
  description: "Manage your Cloud Firestore resources",
  subcommands: [
    {
      name: "backups",
      description: "The set of commands to manage backups for Cloud Firestore",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a Cloud Firestore backup",
          options: [
            flag42,
            flag46,
            flag1067,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7075,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "describe",
          description: "Retrieves information about a Cloud Firestore backup",
          options: [
            flag42,
            flag46,
            flag1067,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7075,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list",
          description: "List backups available to Cloud Firestore",
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
            {
              name: "--location",
              description:
                "The location to operate on. Available locations are listed at\nhttps://cloud.google.com/firestore/docs/locations.\n+\nFor example, to operate on location `us-east1`:\n+\n  $ {command} --location='us-east1'",
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
        {
          name: "schedules",
          description:
            "Manage the backup schedules for a Cloud Firestore Database",
          subcommands: [
            {
              name: "create",
              description: "Creates a Cloud Firestore backup schedule",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2794,
                {
                  name: "--day-of-week",
                  description:
                    "The day of week (UTC time zone) of when backups are created.\n+\n The available values are: `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`,`SUN`.\n Values are case insensitive.\n+\n This is required when creating a weekly backup schedule.\n+\n_DAY_OF_WEEK_ must be one of: *SUN*, *MON*, *TUE*, *WED*, *THU*, *FRI*, *SAT*",
                  args: {
                    name: "DAY_OF_WEEK",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [
                      "SUN",
                      "MON",
                      "TUE",
                      "WED",
                      "THU",
                      "FRI",
                      "SAT",
                    ],
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
                {
                  name: "--recurrence",
                  description:
                    "The recurrence settings of a backup schedule.\n+\nCurrently only daily and weekly backup schedules are supported.\n+\nWhen a weekly backup schedule is created, day-of-week is needed.\n+\nFor example, to create a weekly backup schedule which creates backups on\nMonday.\n+\n  $ {command} --recurrence=weekly --day-of-week=MON",
                  args: {
                    name: "RECURRENCE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--retention",
                  description:
                    "The rention of the backup. At what relative time in the future,\ncompared to the creation time of the backup should the backup be\ndeleted, i.e. keep backups for 7 days.\n+\nFor example, to set retention as 7 days.\n+\n$ {command} --retention=7d",
                  args: {
                    name: "RETENTION",
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
              description: "Deletes a Cloud Firestore backup schedule",
              options: [
                flag42,
                flag46,
                flag1047,
                flag1201,
                flag2292,
                flag2794,
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
              name: "describe",
              description: "Describes a Cloud Firestore backup schedule",
              options: [
                flag42,
                flag46,
                flag1047,
                flag1201,
                flag2292,
                flag2794,
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
              name: "list",
              description:
                "Lists backup schedules under a Cloud Firestore database",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2794,
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
            {
              name: "update",
              description: "Updates a Cloud Firestore backup schedule",
              options: [
                flag42,
                flag46,
                flag1047,
                flag1201,
                flag2292,
                flag2794,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--retention",
                  description:
                    "The rention of the backup. At what relative time in the future,\ncompared to the creation time of the backup should the backup be\ndeleted, i.e. keep backups for 7 days.\n+\nFor example, to set retention as 7 days.\n+\n$ {command} --retention=7d",
                  args: {
                    name: "RETENTION",
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
          ],
        },
      ],
    },
    {
      name: "bulk-delete",
      description: "bulk delete Cloud Firestore documents",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2119,
        flag2292,
        flag2779,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag8109,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "databases",
      description: "Manage Creation of Cloud Firestore in Native mode Database",
      subcommands: [
        {
          name: "clone",
          description: "Clone a Google Cloud Firestore database from another",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination-database",
              description:
                'Destination database to clone to. Destination database will be created in the same location as the source database.\n+\nThis value should be 4-63 characters. Valid characters are /[a-z][0-9]-/\nwith first character a letter and the last a letter or a number. Must\nnot be UUID-like /[0-9a-f]8(-[0-9a-f]4)3-[0-9a-f]12/.\n+\nUsing "(default)" database ID is also allowed.\n+\nFor example, to clone to database `testdb`:\n+\n$ {command} --destination-database=testdb',
              args: {
                name: "DESTINATION_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag4382,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6298,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--snapshot-time",
              description:
                "Snapshot time at which to clone. This must be a whole minute, in the past, and not earlier than the source database's earliest_version_time.\nAdditionally, if older than one hour in the past, PITR must be enabled on the source database.\n+\nFor example, to restore from snapshot `2025-05-26T10:20:00.00Z` of source database `source-db`:\n+\n$ {command} --source-database=projects/PROJECT_ID/databases/source-db --snapshot-time=2025-05-26T10:20:00.00Z",
              args: {
                name: "SNAPSHOT_TIME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-database",
              description:
                "The source database to clone from.\n+\nFor example, to clone from database\nsource-db:\n+\n$ {command} --source-database=projects/PROJECT_ID/databases/source-db",
              args: {
                name: "SOURCE_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag14656,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "connection-string",
          description:
            "Prints the mongo connection string for the given Firestore database",
          options: [
            flag42,
            flag46,
            {
              name: "--auth",
              description:
                "The auth configuration for the connection string.\n+\nIf connecting from a Google Compute Engine VM, use `gce-vm`. For short\nterm access using the gcloud CLI's access token, use `access-token`.\nFor password auth use scram-sha-256. Otherwise, use `none` and configure\nauth manually.\n+\n_AUTH_ must be one of: *none*, *gce-vm*, *access-token*, *scram-sha-256*",
              args: {
                name: "AUTH",
                description: "String",
                suggestions: [
                  "none",
                  "gce-vm",
                  "access-token",
                  "scram-sha-256",
                ],
              },
            },
            flag1201,
            flag2292,
            flag2794,
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
            {
              name: "--validate",
              description:
                "Validate the specified connection string for the current database. This\ncommand checks that the connection string is well formed, contains the\nrequired parameters, and specifies correct configuration values for the\ncurrent database",
              args: {
                name: "VALIDATE",
                description: "String",
                suggestions: [],
              },
            },
            flag15424,
          ],
        },
        {
          name: "create",
          description:
            "Create a Google Cloud Firestore database via Firestore API",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--concurrency-mode",
              description:
                "The concurrency control mode to use for this database.\n+\nWhen not specified, Firestore will pick a default concurrency mode\nbased on the database edition.\n+\n_CONCURRENCY_MODE_ must be one of: *optimistic*, *pessimistic*",
              args: {
                name: "CONCURRENCY_MODE",
                description: "String",
                suggestions: ["optimistic", "pessimistic"],
              },
            },
            flag2292,
            {
              name: "--database",
              description:
                'The ID to use for the database, which will become the final\ncomponent of the database\'s resource name. If database ID is not\nprovided, (default) will be used as database ID.\n+\nThis value should be 4-63 characters. Valid characters are /[a-z][0-9]-/\nwith first character a letter and the last a letter or a number. Must\nnot be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.\n+\nUsing "(default)" database ID is also allowed',
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--delete-protection",
              description:
                "Whether to enable delete protection on the created database.\n+\nIf set to true, delete protection of the new database will be enabled\nand delete operations will fail unless delete protection is disabled.\n+\nDefault to false",
            },
            {
              name: "--edition",
              description:
                "The edition of the database. _EDITION_ must be one of: *standard*, *enterprise*",
              args: {
                name: "EDITION",
                description: "String",
                suggestions: ["standard", "enterprise"],
              },
            },
            {
              name: "--enable-firestore-data-access",
              description:
                "Whether to enable Firestore API Data Access on the created\ndatabase.\n+\nIf set to true, Firestore API Data Access on the new database will\nbe enabled. By default, this feature is disabled for Enterprise\nedition databases. To explicitly disable,\nuse --no-enable-firestore-data-access",
            },
            {
              name: "--enable-mongodb-compatible-data-access",
              description:
                "Whether to enable MongoDB Compatible API Data Access on the\ncreated database.\n+\nIf set to true, MongoDB Compatible API Data Access on the new\ndatabase will be enabled. By default, this feature is enabled for\nEnterprise edition databases.\nTo disable, use --no-enable-mongodb-compatible-data-access",
            },
            {
              name: "--enable-pitr",
              description:
                "Whether to enable Point In Time Recovery (PITR) on the created database.\n+\nIf set to true, PITR on the new database will be enabled. By default, this feature is not enabled",
            },
            {
              name: "--enable-realtime-updates",
              description:
                "Whether to enable Realtime Updates feature on the created database.\n+\nIf set to true, Realtime Updates feature on the new database will\nbe enabled. By default, this feature is disabled for Enterprise\nedition databases. To explicitly disable,\nuse --no-enable-realtime-updates",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--kms-key-name",
              description:
                "The resource ID of a Cloud KMS key. If set, the database created will be a Customer-Managed Encryption Key (CMEK) database encrypted with this key.\nThis feature is allowlist only in initial launch.\n+\nOnly a key in the same location as this database is allowed to be used for encryption.\nFor Firestore's nam5 multi-region, this corresponds to Cloud KMS location us.\nFor Firestore's eur3 multi-region, this corresponds to Cloud KMS location europe.\nSee https://cloud.google.com/kms/docs/locations.\n+\nThis value should be the KMS key resource ID in the format of `projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.\nHow to retrieve this resource ID is listed at https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version",
              args: {
                name: "KMS_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag7075,
            flag7356,
            flag11637,
            flag11946,
            flag14656,
            flag14975,
            {
              name: "--type",
              description:
                "The type of the database. _TYPE_ must be one of: *firestore-native*, *datastore-mode*",
              args: {
                name: "TYPE",
                description: "String",
                suggestions: ["firestore-native", "datastore-mode"],
              },
            },
            flag15315,
            flag15424,
          ],
        },
        {
          name: "delete",
          description: "Delete a Google Cloud Firestore database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--database",
              description: "The database to operate on",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--etag",
              description:
                "The current etag of the Database. If an etag is provided and does not match the current etag of the database, deletion will be blocked and a FAILED_PRECONDITION error will be returned",
              args: { name: "ETAG", description: "String", suggestions: [] },
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
        },
        {
          name: "describe",
          description: "Describes information about a Cloud Firestore database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2779,
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
          name: "list",
          description: "Lists all Firestore databases under the project",
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
              name: "--show-deleted",
              description: "Show the deleted databases",
            },
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "ping",
          description:
            "Times the connection and ping time for a Firestore with MongoDB compatibility database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
          name: "restore",
          description: "Restores a Cloud Firestore database from a backup",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination-database",
              description:
                'Destination database to restore to. Destination database will be created in the same location as the source backup.\n+\nThis value should be 4-63 characters. Valid characters are /[a-z][0-9]-/\nwith first character a letter and the last a letter or a number. Must\nnot be UUID-like /[0-9a-f]8(-[0-9a-f]4)3-[0-9a-f]12/.\n+\nUsing "(default)" database ID is also allowed.\n+\nFor example, to restore to database `testdb`:\n+\n$ {command} --destination-database=testdb',
              args: {
                name: "DESTINATION_DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            flag4382,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6298,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source-backup",
              description:
                "The source backup to restore from.\n+\nFor example, to restore from backup `cf9f748a-7980-4703-b1a1-d1ffff591db0` in us-east1:\n+\n$ {command} --source-backup=projects/PROJECT_ID/locations/us-east1/backups/cf9f748a-7980-4703-b1a1-d1ffff591db0",
              args: {
                name: "SOURCE_BACKUP",
                description: "String",
                suggestions: [],
              },
            },
            flag14656,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description:
            "Update the database configuration of a Cloud Firestore database",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            {
              name: "--concurrency-mode",
              description:
                "The concurrency control mode to use for this database. _CONCURRENCY_MODE_ must be one of: *optimistic*, *pessimistic*",
              args: {
                name: "CONCURRENCY_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["optimistic", "pessimistic"],
              },
            },
            flag2292,
            {
              name: "--database",
              description:
                "ID of the database or fully qualified identifier for the database.\n+\nTo set the `database` attribute:\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
              args: {
                name: "DATABASE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--delete-protection",
              description:
                "If set to true, the Firestore database will be updated to have database delete protection\nenabled. A database with delete protection enabled cannot be deleted. You can disable the\ndelete protection via --no-delete-protection",
            },
            {
              name: "--enable-pitr",
              description:
                "If set to true, the Firestore database will be updated to enable Point In Time Recovery. You can\ndisable the this feature via --no-enable-pitr",
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
              name: "--type",
              description:
                "The database type. _TYPE_ must be one of: *datastore-mode*, *firestore-native*",
              args: {
                name: "TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["datastore-mode", "firestore-native"],
              },
            },
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "export",
      description: "export Cloud Firestore documents to Google Cloud Storage",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2119,
        flag2292,
        flag2779,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag8109,
        flag11637,
        flag11946,
        {
          name: "--snapshot-time",
          description:
            "The version of the database to export.\n+\nThe timestamp must be in the past, rounded to the minute and not older\nthan `earliestVersionTime`. If specified, then the exported documents will\nrepresent a consistent view of the database at the provided time.\nOtherwise, there are no guarantees about the consistency of the exported\ndocuments.\n+\nFor example, to operate on snapshot time `2023-05-26T10:20:00.00Z`:\n+\n  $ {command} --snapshot-time='2023-05-26T10:20:00.00Z'",
          args: {
            name: "SNAPSHOT_TIME",
            description: "String",
            suggestions: [],
          },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "OUTPUT_URI_PREFIX",
        description:
          "Location where the export files will be stored. Must be a valid\nGoogle Cloud Storage bucket with an optional path prefix.\n+\nFor example:\n+\n  $ {command} gs://mybucket/my/path\n+\nWill place the export in the `mybucket` bucket in objects prefixed with\n`my/path`",
      },
    },
    {
      name: "fields",
      description: "Manage field metadata for Cloud Firestore",
      subcommands: [
        {
          name: "ttls",
          description: "Manage Time-to-live metadata for Cloud Firestore",
          subcommands: [
            {
              name: "list",
              description:
                "List all fields used as a Time To Live expiration setting",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2118,
                flag2292,
                flag2783,
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
            {
              name: "update",
              description: "Update the TTL configuration of the given field",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2116,
                flag2292,
                flag2787,
                {
                  name: "--disable-ttl",
                  description:
                    "Set to make this field no longer the TTL for its collection group",
                },
                {
                  name: "--enable-ttl",
                  description:
                    "Set to enable this field as the TTL for its collection group",
                },
                {
                  name: "--expiration-offset",
                  description:
                    "The offset, relative to the timestamp value from the TTL-enabled field, used to\ndetermine the document's expiration time. If unset, defaults to 0",
                  args: {
                    name: "EXPIRATION_OFFSET",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
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
                name: "FIELD",
                description:
                  "ID of the field or fully qualified identifier for the field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "import",
      description: "import Cloud Firestore documents from Google Cloud Storage",
      options: [
        flag42,
        flag46,
        flag720,
        flag1201,
        flag2119,
        flag2292,
        flag2779,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag8109,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "INPUT_URI_PREFIX",
        description:
          "Location of the import files.\n+\nThis location is the 'output_uri_prefix' field of a previous export,\nand can be found via the '{parent_command} operations describe' command",
      },
    },
    {
      name: "indexes",
      description: "Manage indexes for Cloud Firestore",
      subcommands: [
        {
          name: "composite",
          description: "Manage composite indexes for Cloud Firestore",
          subcommands: [
            {
              name: "create",
              description: "Create a new composite index",
              options: [
                flag42,
                flag46,
                {
                  name: "--api-scope",
                  description:
                    "Api scope the index applies to. _API_SCOPE_ must be one of: *any-api*, *datastore-mode-api*, *mongodb-compatible-api*",
                  args: {
                    name: "API_SCOPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "any-api",
                      "datastore-mode-api",
                      "mongodb-compatible-api",
                    ],
                  },
                },
                flag720,
                flag1201,
                {
                  name: "--collection-group",
                  description:
                    "ID of the collection group or fully qualified identifier for the collection group.\n+\nTo set the `collection-group` attribute:\n* provide the argument `--collection-group` on the command line",
                  args: {
                    name: "COLLECTION_GROUP",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--database",
                  description:
                    "Database of the collection group.\n+\n\nTo set the `database` attribute:\n* provide the argument `--collection-group` on the command line with a fully specified name;\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
                  args: {
                    name: "DATABASE",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--density",
                  description:
                    "Density of the index. _DENSITY_ must be one of: *dense*, *density-unspecified*, *sparse-all*, *sparse-any*",
                  args: {
                    name: "DENSITY",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "dense",
                      "density-unspecified",
                      "sparse-all",
                      "sparse-any",
                    ],
                  },
                },
                {
                  name: "--field-config",
                  description:
                    "Required, Configuration for an index field.\n+\n*array-config*:::\nSpecifies the configuration for an array field. The only valid option\nis 'contains'. Exactly one of 'order', 'array-config', or\n'vector-config' must be specified.\n+\n*field-path*:::\nSpecifies the field path (e.g. 'address.city'). This is required.\n+\n*order*:::\nSpecifies the order. Valid options are 'ascending', 'descending'.\nExactly one of 'order', 'array-config', or 'vector-config' must be\nspecified.\n+\n*vector-config*:::\nSpecifies the configuration for a vector field. Exactly one of\n'order', 'array-config', or 'vector-config' must be specified.\n+\n*dimension*::::\nSets `dimension` value.\n+\n*flat*::::\nSets `flat` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--field-config=array-config=string,field-path=string,order=string,vector-config={dimension=int,flat} --field-config=array-config=string,field-path=string,order=string,vector-config={dimension=int,flat}\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--field-config='[{\"array-config\": \"string\", \"field-path\": \"string\", \"order\": \"string\", \"vector-config\": {\"dimension\": int, \"flat\": {}}}]'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--field-config=path_to_file.(yaml|json)\n+\n```",
                  args: {
                    name: "FIELD_CONFIG",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--multikey",
                  description:
                    "Optional. Whether the index is multikey. By default, the index\nis not multikey. For non-multikey indexes, none of the paths in the\nindex definition reach or traverse an array, except via an explicit\narray index. For multikey indexes, at most one of the paths in the index\ndefinition reach or traverse an array, except via an explicit array\nindex. Violations will result in errors. Note this field only applies to\nindex with 'MONGODB_COMPATIBLE_API' ApiScope",
                },
                flag11637,
                {
                  name: "--query-scope",
                  description:
                    "Query scope the index applies to. _QUERY_SCOPE_ must be one of: *collection*, *collection-group*, *collection-recursive*",
                  args: {
                    name: "QUERY_SCOPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "collection",
                      "collection-group",
                      "collection-recursive",
                    ],
                  },
                },
                flag11946,
                flag14975,
                {
                  name: "--unique",
                  description:
                    "Optional. Whether it is an unique index. Unique index ensures all values for\nthe indexed field(s) are unique across documents",
                },
                flag15315,
                flag15424,
              ],
            },
            {
              name: "delete",
              description: "Delete the given composite index",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2785,
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
                name: "INDEX",
                description:
                  "ID of the composite index or fully qualified identifier for the composite index.\n+\nTo set the `index` attribute:\n* provide the argument `index` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe the given composite index",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2785,
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
                name: "INDEX",
                description:
                  "ID of the composite index or fully qualified identifier for the composite index.\n+\nTo set the `index` attribute:\n* provide the argument `index` on the command line",
              },
            },
            {
              name: "list",
              description: "List composite indexes",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--database",
                  description:
                    "Database of the collection group.\n+\n\nTo set the `database` attribute:\n* provide the argument [--collection-group] on the command line with a fully specified name;\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
                  args: {
                    name: "DATABASE",
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
          name: "fields",
          description: "Manage single-field indexes for Cloud Firestore",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe the index configuration of the given field",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--collection-group",
                  description:
                    "Collection group of the field.\n+\n\nTo set the `collection-group` attribute:\n* provide the argument `field` on the command line with a fully specified name;\n*   with a fully specified name;\n* provide the argument `--collection-group` on the command line;\n*  ",
                  args: {
                    name: "COLLECTION_GROUP",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--database",
                  description:
                    "Database of the field.\n+\n\nTo set the `database` attribute:\n* provide the argument `field` on the command line with a fully specified name;\n*   with a fully specified name;\n* provide the argument `--database` on the command line;\n* the default value of argument [--database] is `(default)`",
                  args: {
                    name: "DATABASE",
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
                name: "FIELD",
                description:
                  "ID of the field or fully qualified identifier for the field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line;\n*  ",
                isOptional: true,
              },
            },
            {
              name: "list",
              description: "List fields with non-default index settings",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2118,
                flag2292,
                flag2783,
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
            {
              name: "update",
              description: "Update the index configuration of the given field",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                {
                  name: "--clear-exemption",
                  description:
                    "If provided, the field's current index configuration will be\nreverted to inherit from its ancestor index configurations",
                },
                flag2116,
                flag2292,
                flag2787,
                {
                  name: "--disable-indexes",
                  description:
                    "If provided, the field will no longer be indexed at all",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--index",
                  description:
                    "An index for the field.\n+\nThis flag can be repeated to provide multiple indexes. Any existing indexes will\nbe overwritten with the ones provided. Any omitted indexes will be deleted if\nthey currently exist.\n+\nThe following keys are allowed:\n+\n*order*:::: Specifies the order. Valid options are: 'ascending', 'descending'.\nExactly one of 'order' or 'array-config' must be specified.\n+\n*array-config*:::: Specifies the configuration for an array field. The only\nvalid option is 'contains'. Exactly one of 'order' or 'array-config' must be\nspecified",
                  args: {
                    name: "KEY=VALUE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
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
                name: "FIELD",
                description:
                  "ID of the field or fully qualified identifier for the field.\n+\nTo set the `field` attribute:\n* provide the argument `field` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "locations",
      description:
        "The set of commands to manage Locations for Cloud Firestore",
      subcommands: [
        {
          name: "list",
          description: "List locations available to Google Cloud Firestore",
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
    {
      name: "operations",
      description: "Manage Long Running Operations for Cloud Firestore",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel a currently-running Cloud Firestore admin operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2779,
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
            name: "NAME",
            description:
              "The unique name of the Operation to cancel, formatted as either the full\nor relative resource path:\n+\n  projects/my-app-id/databases/(default)/operations/foo\n+\nor:\n+\n  foo",
          },
        },
        {
          name: "delete",
          description: "Delete a completed Cloud Firestore admin operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2779,
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
            name: "NAME",
            description:
              "The unique name of the operation to delete, formatted as either the full\nor relative resource path:\n+\n  projects/my-app-id/databases/(default)/operations/foo\n+\nor:\n+\n  foo",
          },
        },
        {
          name: "describe",
          description:
            "Retrieves information about a Cloud Firestore admin operation",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2779,
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
            name: "NAME",
            description:
              "The unique name of the Operation to retrieve, formatted as either the\nfull or relative resource path:\n+\n  projects/my-app-id/databases/(default)/operations/foo\n+\nor:\n+\n  foo",
          },
        },
        {
          name: "list",
          description:
            "List pending Cloud Firestore admin operations and their status",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2779,
            flag4849,
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
                "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *100*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
              args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
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
      name: "user-creds",
      description: "Manage the user creds for a Cloud Firestore Database",
      subcommands: [
        {
          name: "create",
          description: "Creates a Cloud Firestore user creds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
            name: "USER_CREDS",
            description:
              "The user creds to operate on.\n+\nFor example, to operate on user creds `creds-name-1`:\n+\n  $ {command} creds-name-1",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud Firestore user creds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
            name: "USER_CREDS",
            description:
              "The user creds to operate on.\n+\nFor example, to operate on user creds `creds-name-1`:\n+\n  $ {command} creds-name-1",
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud Firestore user creds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
            name: "USER_CREDS",
            description:
              "The user creds to operate on.\n+\nFor example, to operate on user creds `creds-name-1`:\n+\n  $ {command} creds-name-1",
          },
        },
        {
          name: "disable",
          description: "Disables a Cloud Firestore user creds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
            name: "USER_CREDS",
            description:
              "The user creds to operate on.\n+\nFor example, to operate on user creds `creds-name-1`:\n+\n  $ {command} creds-name-1",
          },
        },
        {
          name: "enable",
          description: "Enables a Cloud Firestore user creds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
            name: "USER_CREDS",
            description:
              "The user creds to operate on.\n+\nFor example, to operate on user creds `creds-name-1`:\n+\n  $ {command} creds-name-1",
          },
        },
        {
          name: "list",
          description: "Lists user creds under a Cloud Firestore database",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
        {
          name: "reset-password",
          description: "Resets a Cloud Firestore user creds",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2794,
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
            name: "USER_CREDS",
            description:
              "The user creds to operate on.\n+\nFor example, to operate on user creds `creds-name-1`:\n+\n  $ {command} creds-name-1",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
