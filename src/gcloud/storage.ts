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
const flag62: Fig.Option = {
  name: "--acl-file",
  description:
    'Path to a local JSON or YAML formatted file containing a valid policy. See the [ObjectAccessControls resource](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for a representation of JSON formatted files. The output of `gcloud storage [buckets|objects] describe` `--format="multi(acl:format=json)"` is a valid file and can be edited for more fine-grained control',
  args: { name: "ACL_FILE", description: "String", suggestions: [] },
};
const flag111: Fig.Option = {
  name: "--activity-data-retention-period-days",
  description:
    "Provide retention period for the activity data in the config. This overrides the retention period for activity data. Otherwise, the `retention_period_days` value is used for activity data as well",
  args: {
    name: "ACTIVITY_DATA_RETENTION_DAYS",
    description: "Int",
    suggestions: [],
  },
};
const flag119: Fig.Option = {
  name: "--add-acl-grant",
  description:
    "Key-value pairs mirroring the JSON accepted by your cloud provider. For example, for Cloud Storage,`--add-acl-grant=entity=user-tim@gmail.com,role=OWNER`",
  args: { name: "ACL_GRANT", description: "Dict", suggestions: [] },
};
const flag299: Fig.Option = {
  name: "--additional-headers",
  description:
    "Includes arbitrary headers in storage API calls. Accepts a comma separated list of key=value pairs, e.g. `header1=value1,header2=value2`. Overrides the default *storage/additional_headers* property value for this command invocation",
  args: { name: "HEADER=VALUE", description: "String", suggestions: [] },
};
const flag351: Fig.Option = {
  name: "--admission-policy",
  description:
    "The cache admission policy decides for each cache miss, whether to insert the missed block or not. _ADMISSION_POLICY_ must be one of: *ADMIT_ON_FIRST_MISS*, *ADMIT_ON_SECOND_MISS*",
  args: {
    name: "ADMISSION_POLICY",
    description: "String",
    suggestions: ["ADMIT_ON_FIRST_MISS", "ADMIT_ON_SECOND_MISS"],
  },
};
const flag394: Fig.Option = {
  name: ["--all-versions", "-A"],
  description:
    "Copy all source versions from a source bucket or folder. If not set, only the\nlive version of each source object is copied.\n+\nNote: This option is only useful when the destination bucket has Object\nVersioning enabled. Additionally, the generation numbers of copied versions do\nnot necessarily match the order of the original generation numbers",
};
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag865: Fig.Option = {
  name: "--autoclass-terminal-storage-class",
  description:
    "The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Only valid if Autoclass is enabled",
  args: {
    name: "AUTOCLASS_TERMINAL_STORAGE_CLASS",
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
const flag1335: Fig.Option = {
  name: "--cache-control",
  description: "How caches should handle requests and responses",
  args: { name: "CACHE_CONTROL", description: "String", suggestions: [] },
};
const flag1371: Fig.Option = {
  name: ["--canned-acl", "-a", "--predefined-acl"],
  description:
    'Applies predefined, or "canned," ACLs to a resource. See docs for a list of predefined ACL constants: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl',
  args: { name: "CANNED_ACL", description: "String", suggestions: [] },
};
const flag1582: Fig.Option = {
  name: "--clear-custom-contexts",
  description: "Clears all custom contexts on objects",
};
const flag1583: Fig.Option = {
  name: "--clear-custom-metadata",
  description:
    "Clears all custom metadata on objects. When used with `--preserve-posix`, POSIX attributes will still be stored in custom metadata",
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
const flag2422: Fig.Option = {
  name: "--content-disposition",
  description: "How content should be displayed",
  args: { name: "CONTENT_DISPOSITION", description: "String", suggestions: [] },
};
const flag2423: Fig.Option = {
  name: "--content-encoding",
  description: "How content is encoded (e.g. ``gzip'')",
  args: { name: "CONTENT_ENCODING", description: "String", suggestions: [] },
};
const flag2425: Fig.Option = {
  name: "--content-language",
  description: "Content's language (e.g. ``en'' signifies \"English\")",
  args: { name: "CONTENT_LANGUAGE", description: "String", suggestions: [] },
};
const flag2426: Fig.Option = {
  name: "--content-md5",
  description:
    "Manually specified MD5 hash digest for the contents of an uploaded file. This flag cannot be used when uploading multiple files. The custom digest is used by the cloud provider for validation",
  args: { name: "MD5_DIGEST", description: "String", suggestions: [] },
};
const flag2428: Fig.Option = {
  name: "--content-type",
  description: "Type of data contained in the object (e.g. ``text/html'')",
  args: { name: "CONTENT_TYPE", description: "String", suggestions: [] },
};
const flag2448: Fig.Option = {
  name: ["--continue-on-error", "-c"],
  description:
    "If any operations are unsuccessful, the command will exit with a non-zero exit status after completing the remaining operations. This flag takes effect only in sequential execution mode (i.e. processor and thread count are set to 1). Parallelism is default",
};
const flag2593: Fig.Option = {
  name: "--csv-delimiter",
  description:
    "Sets the delimiter that separates the fields in the inventory report CSV file. For example, ``,``",
  args: { name: "DELIMITER", description: "String", suggestions: [] },
};
const flag2601: Fig.Option = {
  name: "--csv-header",
  description:
    "Indicates whether or not headers are included in the inventory report CSV file. Default is None. Use *--csv-header* to enable and *--no-csv-header* to disable",
};
const flag2603: Fig.Option = {
  name: "--csv-separator",
  description:
    "Sets the character used to separate the records in the inventory report CSV file. For example, ``\\n``. _SEPARATOR_ must be one of: *\\n*, *\\r\\n*",
  args: {
    name: "SEPARATOR",
    description: "String",
    suggestions: ["\\n", "\\r\\n"],
  },
};
const flag2618: Fig.Option = {
  name: "--custom-contexts-file",
  description:
    'Path to a local JSON or YAML file containing custom contexts one wants to set on\nan object. For example:\n+\n1. The following JSON document shows two key value\npairs, i.e. (key1, value1) and (key2, value2):\n+\n  ```\n    {\n      "key1": {"value": "value1"},\n      "key2": {"value": "value2"}\n    }\n  ```\n+\n2. The following YAML document shows two key value\npairs, i.e. (key1, value1) and (key2, value2):\n+\n  ```\n    key1:\n      value: value1\n    key2:\n      value: value2\n  ```\n+\nNote: Currently object contexts only supports string format for values',
  args: {
    name: "CUSTOM_CONTEXTS_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag2619: Fig.Option = {
  name: "--custom-contexts",
  description:
    "Sets custom contexts on objects. The existing custom contexts (if any) would be overwritten",
  args: {
    name: "CUSTOM_CONTEXTS_KEYS_AND_VALUES",
    description: "Dict",
    suggestions: [],
  },
};
const flag2640: Fig.Option = {
  name: "--custom-metadata",
  description:
    "Sets custom metadata on objects. When used with `--preserve-posix`, POSIX attributes are also stored in custom metadata",
  args: {
    name: "CUSTOM_METADATA_KEYS_AND_VALUES",
    description: "Dict",
    suggestions: [],
  },
};
const flag2658: Fig.Option = {
  name: "--custom-time",
  description: "Custom time for Cloud Storage objects in RFC 3339 format",
  args: {
    name: "CUSTOM_TIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag2675: Fig.Option = {
  name: ["--daisy-chain", "-D"],
  description:
    'Copy in "daisy chain" mode, which means copying an object by first downloading it to the machine where the command is run, then uploading it to the destination bucket. The default mode is a "copy in the cloud," where data is copied without uploading or downloading. During a copy in the cloud, a source composite object remains composite at its destination. However, you can use daisy chain mode to change a composite object into a non-composite object. Note: Daisy chain mode is automatically used when copying between providers',
};
const flag2889: Fig.Option = {
  name: "--decryption-keys",
  description:
    "A comma-separated list of customer-supplied encryption keys (RFC 4648 section 4 base64-encoded AES256 strings) that will be used to decrypt Cloud Storage objects. Data encrypted with a customer-managed encryption key (CMEK) is decrypted automatically, so CMEKs do not need to be listed here",
  args: { name: "DECRYPTION_KEY", description: "List", suggestions: [] },
};
const flag3172: Fig.Option = {
  name: "--description",
  description: "Description for dataset config",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3781: Fig.Option = {
  name: "--display-name",
  description: "Sets the editable name of the report configuration",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3863: Fig.Option = {
  name: "--do-not-decompress",
  description: "Do not automatically decompress downloaded gzip files",
};
const flag4029: Fig.Option = {
  name: "--enable-autoclass",
  description:
    "The Autoclass feature automatically selects the best storage class for objects based on access patterns. Use *--enable-autoclass* to enable and *--no-enable-autoclass* to disable",
};
const flag4155: Fig.Option = {
  name: "--enable-ingest-on-write",
  description:
    "Enables the Ingest-on-Write feature on the bucket. Use *--enable-ingest-on-write* to enable and *--no-enable-ingest-on-write* to disable",
};
const flag4235: Fig.Option = {
  name: "--enable-organization-scope",
  description:
    "If passed, the dataset config will be enabled on the organization",
};
const flag4365: Fig.Option = {
  name: "--encryption-enforcement-file",
  description:
    'Sets the encryption enforcement configuration for the bucket from a JSON file.\nThis configuration determines restrictions on the types of encryption (GMEK,\nCMEK, CSEK) allowed for new objects created in the bucket.\n+\nThe JSON file should contain an object with keys among "gmekEnforcement",\n"cmekEnforcement", and "csekEnforcement". Each of these keys, if present,\nshould have a "restrictionMode" key, determining whether the corresponding\nencryption type should be allowed or restricted for new objects.\n+\nValid values for "restrictionMode" are:\n- "NotRestricted": The encryption type is allowed for new objects.\n- "FullyRestricted": The encryption type is not allowed for new objects.\n+\nExample JSON file content, to enforce only CMEK for new objects:\n+\n  {\n    "gmekEnforcement": {\n      "restrictionMode": "FullyRestricted"\n    },\n    "cmekEnforcement": {\n      "restrictionMode": "NotRestricted"\n    },\n    "csekEnforcement": {\n      "restrictionMode": "FullyRestricted"\n    }\n  }\n+\nOmitted keys will not be sent in the API request. To clear restrictions for a\nspecific encryption-type during an update, set its "restrictionMode" to\n"NotRestricted".\nFor example, to clear any restrictions on GMEK:\n  {\n    "gmekEnforcement": {\n      "restrictionMode": "NotRestricted"\n    }\n  }',
  args: {
    name: "ENCRYPTION_ENFORCEMENT_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag4370: Fig.Option = {
  name: "--encryption-key",
  description:
    "The encryption key to use for encrypting target objects. The specified encryption key can be a customer-supplied encryption key (An RFC 4648 section 4 base64-encoded AES256 string), or a customer-managed encryption key of the form `projects/{project}/locations/{location}/keyRings/{key-ring}/cryptoKeys/{crypto-key}`. The specified key also acts as a decryption key, which is useful when copying or moving encrypted data to a new location. Using this flag in an `objects update` command triggers a rewrite of target objects",
  args: { name: "ENCRYPTION_KEY", description: "String", suggestions: [] },
};
const flag4505: Fig.Option = {
  name: ["--etag", "-e"],
  description:
    "Custom etag to set on IAM policy. API will reject etags that do not match this value, making it useful as a precondition during concurrent operations",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4588: Fig.Option = {
  name: "--exclude-bucket-id-regexes",
  description:
    'Sets filter for bucket id regexes to exclude. Accepts list of bucket id regexes in comma separated format. If the regex contains special characters that may have a specific meaning in the shell, escape them using backslashes(\\). To clear bucket id regexes list, provide flag with an empty list. e.g `--exclude-bucket-id-regexes=""` or `--exclude-bucket-id-regexes=` ',
  args: {
    name: "EXCLUDE_BUCKET_ID_REGEXES",
    description: "List",
    suggestions: [],
  },
};
const flag4589: Fig.Option = {
  name: "--exclude-bucket-names",
  description: "List of bucket names to be excluded",
  args: { name: "BUCKETS_NAMES", description: "List", suggestions: [] },
};
const flag4590: Fig.Option = {
  name: "--exclude-bucket-prefix-regexes",
  description:
    "List of bucket prefix regexes to be excluded. Allowed regex patterns are similar to those for the --include-bucket-prefix-regexes flag",
  args: { name: "BUCKETS_REGEXES", description: "List", suggestions: [] },
};
const flag4597: Fig.Option = {
  name: "--exclude-locations",
  description:
    'Comma separated list of [locations](https://cloud.google.com/storage/docs/locations#available-locations) to exclude in storage intelligence filter. To clear excluded locations, provide flag with empty list. e.g `--exclude-locations=""` or `--exclude-locations=` ',
  args: { name: "EXCLUDE_LOCATIONS", description: "List", suggestions: [] },
};
const flag4602: Fig.Option = {
  name: "--exclude-source-locations",
  description: "List of locations for projects to be excluded",
  args: {
    name: "LIST_OF_SOURCE_LOCATIONS",
    description: "List",
    suggestions: [],
  },
};
const flag4640: Fig.Option = {
  name: "--exhaustive",
  description:
    "For features like soft delete, the API may return an empty list. If present, continue querying. This may incur costs from repeated LIST calls and may not return any additional objects",
};
const flag4772: Fig.Option = {
  name: "--fetch-encrypted-object-hashes",
  description:
    "API requests to the LIST endpoint do not fetch the hashes for encrypted objects by default. If this flag is set, a GET request is sent for each encrypted object in order to fetch hashes. This can significantly increase the cost of the command",
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
const flag5415: Fig.Option = {
  name: ["--gzip-in-flight-all", "-J"],
  description:
    "Applies gzip transport encoding to file uploads. This option\nworks like the `--gzip-in-flight` option described above,\nbut it applies to all uploaded files, regardless of extension.\n+\nCAUTION: If some of the source files don't compress well, such\nas binary data, using this option may result in longer uploads",
};
const flag5416: Fig.Option = {
  name: ["--gzip-in-flight", "-j"],
  description:
    "Applies gzip transport encoding to any file upload whose\nextension matches the input extension list. This is useful when\nuploading files with compressible content such as .js, .css,\nor .html files. This also saves network bandwidth while\nleaving the data uncompressed in Cloud Storage.\n+\nWhen you specify the `--gzip-in-flight` option, files being\nuploaded are compressed in-memory and on-the-wire only. Both the local\nfiles and Cloud Storage objects remain uncompressed. The\nuploaded objects retain the `Content-Type` and name of the\noriginal files",
  args: { name: "FILE_EXTENSIONS", description: "List", suggestions: [] },
};
const flag5417: Fig.Option = {
  name: ["--gzip-local-all", "-Z"],
  description:
    "Applies gzip content encoding to file uploads. This option\nworks like the `--gzip-local` option described above,\nbut it applies to all uploaded files, regardless of extension.\n+\nCAUTION: If some of the source files don't compress well, such as binary data,\nusing this option may result in files taking up more space in the cloud than\nthey would if left uncompressed",
};
const flag5418: Fig.Option = {
  name: ["--gzip-local", "-z"],
  description:
    "Applies gzip content encoding to any file upload whose\nextension matches the input extension list. This is useful when\nuploading files with compressible content such as .js, .css,\nor .html files. This saves network bandwidth and space in Cloud Storage.\n+\nWhen you specify the `--gzip-local` option, the data from\nfiles is compressed before it is uploaded, but the original files are left\nuncompressed on the local disk. The uploaded objects retain the `Content-Type`\nand name of the original files. However, the `Content-Encoding` metadata\nis set to `gzip` and the `Cache-Control` metadata set to `no-transform`.\nThe data remains compressed on Cloud Storage servers and will not be\ndecompressed on download by gcloud storage because of the `no-transform`\nfield.\n+\nSince the local gzip option compresses data prior to upload, it is not subject\nto the same compression buffer bottleneck of the in-flight gzip option",
  args: { name: "FILE_EXTENSIONS", description: "List", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5627: Fig.Option = {
  name: "--if-generation-match",
  description:
    "Execute only if the generation matches the generation of the requested object",
  args: { name: "GENERATION", description: "String", suggestions: [] },
};
const flag5628: Fig.Option = {
  name: "--if-metageneration-match",
  description:
    "Execute only if the metageneration matches the metageneration of the requested object",
  args: { name: "METAGENERATION", description: "String", suggestions: [] },
};
const flag5654: Fig.Option = {
  name: "--ignore-symlinks",
  description: "Ignore file symlinks instead of copying what they point to",
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
const flag5729: Fig.Option = {
  name: "--include-bucket-id-regexes",
  description:
    'Sets filter for bucket id regexes to include. Accepts list of bucket id regexes in comma separated format. If the regex contains special characters that may have a specific meaning in the shell, escape them using backslashes(\\). To clear bucket id regexes list, provide flag with empty list. e.g `--include-bucket-id-regexes=""` or `--include-bucket-id-regexes=` ',
  args: {
    name: "INCLUDE_BUCKET_ID_REGEXES",
    description: "List",
    suggestions: [],
  },
};
const flag5730: Fig.Option = {
  name: "--include-bucket-names",
  description: "List of bucket names be included",
  args: { name: "BUCKETS_NAMES", description: "List", suggestions: [] },
};
const flag5731: Fig.Option = {
  name: "--include-bucket-prefix-regexes",
  description:
    "List of bucket prefix regexes to be included. The dataset config will include all the buckets that match with the prefix regex. Examples of allowed prefix regex patterns can be testbucket```*```, testbucket.```*```foo, testb.+foo```*``` . It should follow syntax specified in google/re2 on GitHub",
  args: { name: "BUCKETS_REGEXES", description: "List", suggestions: [] },
};
const flag5747: Fig.Option = {
  name: "--include-locations",
  description:
    'Comma separated list of [locations](https://cloud.google.com/storage/docs/locations#available-locations) to include in storage intelligence filter. To clear included locations, provide flag with empty list. e.g `--include-locations=""` or `--include-locations=` ',
  args: { name: "INCLUDE_LOCATIONS", description: "List", suggestions: [] },
};
const flag5749: Fig.Option = {
  name: "--include-managed-folders",
  description:
    "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers. Please note that for hierarchical namespace buckets, managed folders are always included. Hence this flag would not be applicable to hierarchical namespace buckets",
};
const flag5762: Fig.Option = {
  name: "--include-source-locations",
  description: "List of locations for projects to be included",
  args: {
    name: "LIST_OF_SOURCE_LOCATIONS",
    description: "List",
    suggestions: [],
  },
};
const flag6017: Fig.Option = {
  name: "--ip-filter-file",
  description:
    'Sets the IP filter for the bucket. The IP filter is a list of ip\nranges that are allowed to access the bucket. For example,\nThe following JSON document shows the IP filter configuration with mode\nenabled and list of public network sources and vpc network sources:\n+\n  {\n    "mode": "Enabled",\n    "publicNetworkSource": { "allowedIpCidrRanges": ["0.0.0.0/0"] },\n    "vpcNetworkSources": [\n        {\n            "network": "projects/PROJECT_NAME/global/networks/NETWORK_NAME",\n            "allowedIpCidrRanges": ["0.0.0.0/0"]\n        },\n    ]\n  }\n+\nFor more information about supported configurations, see\n[Cloud Storage bucket IP filtering configurations](https://cloud.google.com/storage/docs/create-ip-filter#ip-filtering-configurations)',
  args: { name: "IP_FILTER_FILE", description: "String", suggestions: [] },
};
const flag6497: Fig.Option = {
  name: "--lifecycle-file",
  description:
    'Sets the lifecycle management configuration on a bucket. For example,\nThe following lifecycle management configuration JSON document\nspecifies that all objects in this bucket that are more than 365 days\nold are deleted automatically:\n+\n  {\n    "rule":\n    [\n      {\n        "action": {"type": "Delete"},\n        "condition": {"age": 365}\n      }\n    ]\n  }',
  args: { name: "LIFECYCLE_FILE", description: "String", suggestions: [] },
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
const flag6665: Fig.Option = {
  name: "--location",
  description:
    "Google Cloud location for the report-config.\n+\nTo set the `location` attribute:\n* provide the argument `report_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6738: Fig.Option = {
  name: "--location",
  description:
    "Insights supported Google Cloud location for the dataset-config.\n+\nTo set the `location` attribute:\n* provide the argument `dataset_config` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7551: Fig.Option = {
  name: ["--manifest-path", "-L"],
  description:
    'Outputs a manifest log file with detailed information about each item that\nwas copied. This manifest contains the following information for each item:\n+\n- Source path.\n- Destination path.\n- Source size.\n- Bytes transferred.\n- MD5 hash.\n- Transfer start time and date in UTC and ISO 8601 format.\n- Transfer completion time and date in UTC and ISO 8601 format.\n- Final result of the attempted transfer: OK, error, or skipped.\n- Details, if any.\n+\nIf the manifest file already exists, gcloud storage appends log items to the\nexisting file.\n+\nObjects that are marked as "OK" or "skipped" in the existing manifest file\nare not retried by future commands. Objects marked as "error" are retried',
  args: { name: "MANIFEST_PATH", description: "String", suggestions: [] },
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
const flag7808: Fig.Option = {
  name: "--metadata-filter",
  description:
    "Server side filtering for objects. Works only for Google Cloud Storage URLs. The filter only works for objects, and not directories or buckets, which means commands like `storage ls` and `storage du` will still list directories or buckets even if they do not contain any objects matching the filter. See https://cloud.google.com/storage/docs/listing-objects#filter-by-object-contexts-syntax for more details",
  args: { name: "METADATA_FILTER", description: "String", suggestions: [] },
};
const flag8329: Fig.Option = {
  name: "--next-page-token",
  description: "Page token for resuming LIST calls",
  args: { name: "NEXT_PAGE_TOKEN", description: "String", suggestions: [] },
};
const flag9024: Fig.Option = {
  name: ["--no-clobber", "-n"],
  description:
    "Do not overwrite existing files or objects at the destination. Skipped items will be printed. This option may perform an additional GET request for cloud objects before attempting an upload",
};
const flag10862: Fig.Option = {
  name: "--organization",
  description: "Specifies organization id for the storage intelligence config",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
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
const flag11131: Fig.Option = {
  name: "--parquet",
  description: "Generate reports in parquet format",
};
const flag11309: Fig.Option = {
  name: "--placement",
  description:
    "A comma-separated list of regions that form the custom [dual-region](https://cloud.google.com/storage/docs/locations#location-dr). Only regions within the same continent are or will ever be valid. Invalid location pairs (such as mixed-continent, or with unsupported regions) will return an error",
  args: { name: "REGION", description: "List", suggestions: [] },
};
const flag11486: Fig.Option = {
  name: ["--predefined-acl", "-a", "--canned-acl"],
  description:
    'Applies predefined, or "canned," ACLs to a resource. See docs for a list of predefined ACL constants: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl',
  args: { name: "PREDEFINED_ACL", description: "String", suggestions: [] },
};
const flag11516: Fig.Option = {
  name: ["--preserve-acl", "-p"],
  description:
    "Preserves ACLs when copying in the cloud. This option is Cloud Storage-only, and you need OWNER access to all copied objects. If all objects in the destination bucket should have the same ACL, you can also set a default object ACL on that bucket instead of using this flag.\nPreserving ACLs is the default behavior for updating existing objects. Use *--preserve-acl* to enable and *--no-preserve-acl* to disable",
};
const flag11519: Fig.Option = {
  name: ["--preserve-posix", "-P"],
  description:
    "Causes POSIX attributes to be preserved when objects are copied. With this feature enabled,\ngcloud storage will copy several fields provided by the stat command:\naccess time, modification time, owner UID, owner group GID, and the mode\n(permissions) of the file.\n+\nFor uploads, these attributes are read off of local files and stored in the\ncloud as custom metadata. For downloads, custom cloud metadata is set as POSIX\nattributes on files after they are downloaded.\n+\nOn Windows, this flag will only set and restore access time and modification\ntime because Windows doesn't have a notion of POSIX UID, GID, and mode",
};
const flag11520: Fig.Option = {
  name: "--preserve-symlinks",
  description:
    "Preserve symlinks instead of copying what they point to. With this feature\nenabled, uploaded symlinks will be represented as placeholders in the cloud\nwhose content consists of the linked path. Inversely, such placeholders will be\nconverted to symlinks when downloaded while this feature is enabled, as\ndescribed at https://cloud.google.com/storage-transfer/docs/metadata-preservation#posix_to.\n+\nDirectory symlinks are only followed if this flag is specified.\n+\nCAUTION: No validation is applied to the symlink target paths. Once downloaded,\npreserved symlinks will point to whatever path was specified by the placeholder,\nregardless of the location or permissions of the path, or whether it actually\nexists.\n+\nThis feature is not supported on Windows",
};
const flag11553: Fig.Option = {
  name: ["--print-created-message", "-v"],
  description: "Prints the version-specific URL for each copied object",
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
const flag11976: Fig.Option = {
  name: "--raw",
  description:
    "Shows metadata in the format returned by the API instead of standardizing it",
};
const flag11994: Fig.Option = {
  name: ["--read-paths-from-stdin", "-I"],
  description: "Read the list of URLs from stdin",
};
const flag11996: Fig.Option = {
  name: ["--read-paths-from-stdin", "-I"],
  description:
    'Read the list of resources to copy from stdin. No need to enter a source argument if this flag is present.\nExample: "storage cp -I gs://bucket/destination".\nThe input format must consist of one path (e.g., "Documents/data/file1.txt") or one object URL (e.g., "gs://example-bucket/event.log") per line. Use a pipe to send the file list to the command. Example: "cat example-file-list.txt | gcloud storage cp --read-paths-from-stdin gs://example-destination-bucket".\nNote: To copy the contents of one file directly from stdin, use "-" as the source argument without the "-I" flag',
};
const flag12032: Fig.Option = {
  name: ["--recovery-point-objective", "--rpo"],
  description:
    "Sets the [recovery point objective](https://cloud.google.com/architecture/dr-scenarios-planning-guide#basics_of_dr_planning) of a bucket. This flag can only be used with multi-region and dual-region buckets. `DEFAULT` option is valid for multi-region and dual-regions buckets. `ASYNC_TURBO` option is only valid for dual-region buckets. If unspecified when the bucket is created, it defaults to `DEFAULT` for dual-region and multi-region buckets. For more information, see [replication in Cloud Storage](https://cloud.google.com/storage/docs/availability-durability#cross-region-redundancy). _SETTING_ must be one of: *ASYNC_TURBO*, *DEFAULT*",
  args: {
    name: "SETTING",
    description: "String",
    suggestions: ["ASYNC_TURBO", "DEFAULT"],
  },
};
const flag12038: Fig.Option = {
  name: ["--recursive", "-R", "-r"],
  description:
    "Recursively copy the contents of any directories that match the source path expression",
};
const flag12530: Fig.Option = {
  name: "--remove-acl-grant",
  description:
    "Key-value pairs mirroring the JSON accepted by your cloud provider. For example, for Cloud Storage, `--remove-acl-grant=ENTITY`, where `ENTITY` has a valid ACL entity format, such as `user-tim@gmail.com`, `group-admins`, `allUsers`, etc",
  args: { name: "REMOVE_ACL_GRANT", description: "String", suggestions: [] },
};
const flag12591: Fig.Option = {
  name: "--remove-custom-contexts",
  description:
    "Removes the custom contexts on the object, if an entry is not found, it would be ignored",
  args: { name: "CUSTOM_CONTEXTS_KEYS", description: "List", suggestions: [] },
};
const flag12593: Fig.Option = {
  name: "--remove-custom-metadata",
  description:
    "Removes individual custom metadata keys from objects. This flag can be used with `--update-custom-metadata`. When used with `--preserve-posix`, POSIX attributes specified by this flag are not preserved",
  args: { name: "METADATA_KEYS", description: "List", suggestions: [] },
};
const flag13082: Fig.Option = {
  name: "--retain-until",
  description:
    "Ensures the destination object is retained until the specified time in RFC 3339 format",
  args: {
    name: "DATETIME",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag13091: Fig.Option = {
  name: "--retention-mode",
  description:
    'Sets the destination object retention mode to either "Locked" or "Unlocked". When retention mode is "Locked", the retain until time can only be increased. _RETENTION_MODE_ must be one of: *Locked*, *Unlocked*',
  args: {
    name: "RETENTION_MODE",
    description: "String",
    suggestions: ["Locked", "Unlocked"],
  },
};
const flag13095: Fig.Option = {
  name: "--retention-period",
  description:
    "Minimum [retention period](https://cloud.google.com/storage/docs/bucket-lock#retention-periods) for objects stored in the bucket, for example ``--retention-period=P1Y1M1DT5S''. Objects added to the bucket cannot be deleted until they've been stored for the specified length of time. Default is no retention period. Only available for Cloud Storage using the JSON API",
  args: { name: "RETENTION_PERIOD", description: "String", suggestions: [] },
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
const flag13209: Fig.Option = {
  name: ["--rpo", "--recovery-point-objective"],
  description:
    "Sets the [recovery point objective](https://cloud.google.com/architecture/dr-scenarios-planning-guide#basics_of_dr_planning) of a bucket. This flag can only be used with multi-region and dual-region buckets. `DEFAULT` option is valid for multi-region and dual-regions buckets. `ASYNC_TURBO` option is only valid for dual-region buckets. If unspecified when the bucket is created, it defaults to `DEFAULT` for dual-region and multi-region buckets. For more information, see [replication in Cloud Storage](https://cloud.google.com/storage/docs/availability-durability#cross-region-redundancy). _SETTING_ must be one of: *ASYNC_TURBO*, *DEFAULT*",
  args: {
    name: "SETTING",
    description: "String",
    suggestions: ["ASYNC_TURBO", "DEFAULT"],
  },
};
const flag13880: Fig.Option = {
  name: ["--skip-unsupported", "-U"],
  description: "Skip objects with unsupported object types",
};
const flag13945: Fig.Option = {
  name: "--soft-deleted",
  description:
    "Displays soft-deleted resources only. For objects, it will exclude live and noncurrent ones",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14013: Fig.Option = {
  name: "--source-folders-file",
  description: "CSV formatted file containing source folder IDs, one per line",
  args: {
    name: "SOURCE_FOLDER_NUMBERS_IN_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag14014: Fig.Option = {
  name: "--source-folders",
  description: "List of source folder IDs",
  args: { name: "SOURCE_FOLDER_NUMBERS", description: "List", suggestions: [] },
};
const flag14075: Fig.Option = {
  name: "--source-projects-file",
  description:
    "CSV formatted file containing source project numbers, one per line",
  args: {
    name: "SOURCE_PROJECT_NUMBERS_IN_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag14076: Fig.Option = {
  name: "--source-projects",
  description: "List of source project numbers",
  args: {
    name: "SOURCE_PROJECT_NUMBERS",
    description: "List",
    suggestions: [],
  },
};
const flag14443: Fig.Option = {
  name: ["--storage-class", "-s"],
  description:
    "Specify the storage class of the destination object. If not specified, the default storage class of the destination bucket is used. This option is not valid for copying to non-cloud destinations",
  args: { name: "STORAGE_CLASS", description: "String", suggestions: [] },
};
const flag14484: Fig.Option = {
  name: "--sub-folder",
  description: "Specifies sub-folder id for the storage intelligence config",
  args: { name: "SUB_FOLDER", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14994: Fig.Option = {
  name: "--trial-edition",
  description: "Enables Storage Intelligence for TRIAL edition",
};
const flag15025: Fig.Option = {
  name: "--ttl",
  description: "Cache entry time-to-live. Default to 24h if not provided",
  args: {
    name: "TTL",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag15147: Fig.Option = {
  name: "--update-custom-contexts",
  description:
    "Updates the custom contexts on the object, if an entry is found, it would be overwritten, otherwise the entry would be added",
  args: {
    name: "CUSTOM_CONTEXTS_KEYS_AND_VALUES",
    description: "Dict",
    suggestions: [],
  },
};
const flag15148: Fig.Option = {
  name: "--update-custom-metadata",
  description:
    "Adds or sets individual custom metadata key value pairs on objects. Existing custom metadata not specified with this flag is not changed. This flag can be used with `--remove-custom-metadata`. When keys overlap with those provided by `--preserve-posix`, values specified by this flag are used",
  args: {
    name: "CUSTOM_METADATA_KEYS_AND_VALUES",
    description: "Dict",
    suggestions: [],
  },
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
  name: "storage",
  description: "Create and manage Cloud Storage buckets and objects",
  subcommands: [
    {
      name: "batch-operations",
      description: "Manage Cloud Storage batch operations",
      subcommands: [
        {
          name: "bucket-operations",
          description:
            "Manage Cloud Storage batch operations bucket operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Describe a bucket operation for a batch operation job",
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
                  name: "--job",
                  description:
                    "Batch Job ID for the bucket-operation.\n+\nTo set the `job` attribute:\n* provide the argument `bucket_operation` on the command line with a fully specified name;\n* provide the argument `--job` on the command line",
                  args: { name: "JOB", description: "String", suggestions: [] },
                },
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "BUCKET_OPERATION",
                description:
                  "ID of the bucket-operation or fully qualified identifier for the bucket-operation.\n+\nTo set the `bucket-operation` attribute:\n* provide the argument `bucket_operation` on the command line",
              },
            },
            {
              name: "list",
              description: "List bucket operations for a batch operation job",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--buckets",
                  description:
                    "If provided, only show operations for buckets in the list",
                  args: {
                    name: "BUCKETS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--job",
                  description:
                    "ID of the batch-job or fully qualified identifier for the batch-job.\n+\nTo set the `batch-job` attribute:\n* provide the argument `--job` on the command line",
                  args: { name: "JOB", description: "String", suggestions: [] },
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
            },
          ],
        },
        {
          name: "jobs",
          description: "Manage Cloud Storage batch operations jobs",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a batch-operations job",
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
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job.\n+\nTo set the `batch-job` attribute:\n* provide the argument `batch_job` on the command line",
              },
            },
            {
              name: "create",
              description: "Create a new batch operation job",
              options: [
                flag42,
                flag46,
                flag1201,
                {
                  name: "--bucket",
                  description:
                    "Bucket containing the objects that the batch job will operate on",
                  args: {
                    name: "BUCKET",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--bucket-filters",
                  description:
                    "Filters expressed in Common Expression Language (CEL) to apply to buckets. E.g. \"bucket_name == 'my-bucket'\"",
                  args: {
                    name: "BUCKET_FILTERS",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--bucket-list",
                  description:
                    "List of buckets containing the objects that the batch job will operate on",
                  args: {
                    name: "BUCKETS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--clear-all-object-custom-contexts",
                  description: "Clears all object custom contexts",
                },
                {
                  name: "--clear-object-custom-contexts",
                  description:
                    "Removes object custom contexts by key. If an entry is not found, it will be ignored. e.g. `--clear-object-custom-contexts=key1,key2`",
                  args: {
                    name: "CUSTOM_CONTEXTS_KEYS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag2292,
                {
                  name: "--delete-object",
                  description:
                    "If this flag is set, objects specified in source will be deleted. When versioning is enabled on the buckets, live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped",
                },
                {
                  name: "--description",
                  description: "Description for the batch job",
                  args: {
                    name: "DESCRIPTION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--dry-run",
                  description:
                    "If true, the job will run in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations will be performed",
                },
                {
                  name: "--dry-run-job-id",
                  description:
                    "The unique identifier of a dry run job to use as the baseline. Specifying this ID ensures the job is executed against the same set of objects validated during the dry run",
                  args: {
                    name: "DRY_RUN_JOB_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--enable-permanent-object-deletion",
                  description:
                    "If this flag is set and versioning is enabled on the buckets, both live and noncurrent objects will be permanently deleted",
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--included-object-prefixes",
                  description:
                    "A comma-separated list of object prefixes to describe the objects being transformed. An empty string means all objects in the bucket",
                  args: {
                    name: "PREFIXES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--insights-dataset-config",
                  description:
                    "The resource identifier of the Storage Insights dataset configuration. Format: projects/{project}/locations/{location}/datasetConfigs/{datasetConfig}",
                  args: {
                    name: "INSIGHTS_DATASET_CONFIG",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--log-action-states",
                  description:
                    "The states in which the actions specified in --log-actions are logged. Separate multiple states with a comma, omitting the space after the comma (e.g., --log-action-states=succeeded,failed). _LOG_ACTION_STATES_ must be one of: *failed*, *succeeded*",
                  args: {
                    name: "LOG_ACTION_STATES",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--log-actions",
                  description:
                    "Define the batch job actions to report in logs. (e.g., --log-actions=transform). _LOG_ACTIONS_ must be (only one value is supported): *transform*",
                  args: {
                    name: "LOG_ACTIONS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--manifest-location",
                  description:
                    "An absolute path to the manifest source file in a Google Cloud Storage bucket. The file must be a CSV file where each row specifies the object details i.e. ProjectId, BucketId, and Name. Generation may optionally be specified. When generation is not specified, the live object is acted upon. Format: `--manifest-location=gs://bucket_name/path/manifest_name.csv`",
                  args: {
                    name: "MANIFEST_LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--object-filters",
                  description:
                    'Filters expressed in Common Expression Language (CEL) to apply to objects. E.g. "size > 100"',
                  args: {
                    name: "OBJECT_FILTERS",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                {
                  name: "--put-metadata",
                  description:
                    'Sets object metadata. To set how content should be displayed, specify the the key-value pair `Content-Disposition={VALUE}.` To set how content is encoded (e.g. "gzip"), specify the key-value pair `Content-Encoding={VALUE}`. To set content\'s language (e.g. "en" signifies "English"), specify the key-value pair `Content-Language={VALUE}`. To set the type of data contained in the object (e.g. "text/html"), specify the key-value pair `Content-Type={VALUE}`. To set how caches should handle requests and responses, specify the key-value pair `Cache-Control={VALUE}`. To set custom time for Cloud Storage objects in RFC 3339 format, specify the key-value pair `Custom-Time={VALUE}`. To set object retention, specify `Retain-Until={TIMESTAMP}` in RFC 3339 format and `Retention-Mode={MODE}` where mode can be `Locked` or `Unlocked`. To set custom metadata on objects, specify key-value pairs `{CUSTOM-KEY}:{VALUE}`. Note that all predefined keys (e.g. Content-Disposition) are case-insensitive. Any other key that is not specified above will be treated as a custom key. To clear a field, provide the key with an empty value (e.g. `Content-Disposition=`). Multiple key-value pairs can be specified by separating them with commas. For example, `--put-metadata=Content-Disposition=inline,Content-Encoding=gzip`',
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--put-object-event-based-hold",
                  description:
                    "Sets or unsets object event based holds state. When object event based hold is set, object cannot be deleted or replaced. Use *--put-object-event-based-hold* to enable and *--no-put-object-event-based-hold* to disable",
                },
                {
                  name: "--put-object-temporary-hold",
                  description:
                    "Sets or unsets object temporary holds state. When object temporary hold is set, object cannot be deleted or replaced. Use *--put-object-temporary-hold* to enable and *--no-put-object-temporary-hold* to disable",
                },
                flag11946,
                {
                  name: "--rewrite-object",
                  description:
                    "Rewrites object and the specified metadata. Currently only supports\nrewriting kms-key and storage-class. To rewrite the Cloud KMS key\nthat will be used to encrypt the object, specify the key-value pair\n`kms-key={KEY}`. To rewrite the object storage classes, specify the\nkey-value pair `storage-class={STORAGE_CLASS}` where storage-class\ncan be one of `STANDARD`, `NEARLINE`, `COLDLINE`, or `ARCHIVE`. If\nan object's storage class is set to a different value than it\ncurrently has, a full byte copy of the object will be made. If\nAutoclass is enabled on the bucket, storage class changes will be\nignored by Cloud Storage. A metadata field MUST be specified,\nand multiple key-value pairs can be specified by separating them\nwith commas. For example:\n+\n  * `--rewrite-object=kms-key=projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/CRYPTO_KEY,storage-class=STANDARD`",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--set-object-acls-from-file",
                  description:
                    "Path to a local YAML or JSON file containing object ACL updates. The file must use the following format:\n+\ngrants:\n- entity: ENTITY\n    role: ROLE\nremove_entities:\n- ENTITY\n+\nFor example:\n+\ngrants:\n- entity: allAuthenticatedUsers\n    role: READER\nremove_entities:\n- allUsers",
                  args: {
                    name: "ACL_UPDATES_FILE",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-locations",
                  description:
                    "A comma-separated list of Cloud Storage locations (e.g., us-central1) to include in the job. Only buckets and objects within these locations will be discovered from the configured Storage Insights dataset",
                  args: {
                    name: "LOCATIONS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-project",
                  description:
                    "Project name of the objects to be transformed. e.g. my-project or 123456",
                  args: {
                    name: "TARGET_PROJECT",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: "--target-snapshot-time",
                  description:
                    "The exact Storage Insights snapshot timestamp to use for the job compatible with the RFC 3339 format (e.g., 2024-01-02T03:04:00.123456Z). Can only be specified if --target-locations is specified. If omitted, the job automatically defaults to the most recent snapshot timestamp that is successfully populated in both object and bucket attributes views across all specified locations. This snapshot time is precise to the microsecond. Any finer precision is truncated",
                  args: {
                    name: "TARGET_SNAPSHOT_TIME",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag14975,
                {
                  name: "--update-object-custom-contexts",
                  description:
                    "Inserts or updates object custom contexts. If an existing entry is found, the value will be updated, otherwise the entry would be added. e.g. `--update-object-custom-contexts=key1=val1,key2=val2`",
                  args: {
                    name: "CUSTOM_CONTEXTS_KEYS_AND_VALUES",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: "--update-object-custom-contexts-file",
                  description:
                    'Path to a local JSON or YAML file containing custom contexts one wants to update\non an object. If an entry is found, any fields set in the payload will be\nupdated, otherwise the entry would be added. For example:\n+\n1. The following JSON document shows two key value\npairs, i.e. (key1, value1) and (key2, value2):\n+\n  ```\n    {\n      "key1": {"value": "value1"},\n      "key2": {"value": "value2"}\n    }\n  ```\n+\n2. The following YAML document shows two key value\npairs, i.e. (key1, value1) and (key2, value2):\n+\n  ```\n    key1:\n      value: value1\n    key2:\n      value: value2\n  ```\n+\nNote: Currently object contexts only supports string format for values',
                  args: {
                    name: "CUSTOM_CONTEXTS_FILE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
              ],
              args: {
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job.\n+\nTo set the `batch-job` attribute:\n* provide the argument `batch_job` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a batch-operations job",
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
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job.\n+\nTo set the `batch-job` attribute:\n* provide the argument `batch_job` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a batch-operations job",
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
                name: "BATCH_JOB",
                description:
                  "ID of the batch-job or fully qualified identifier for the batch-job.\n+\nTo set the `batch-job` attribute:\n* provide the argument `batch_job` on the command line",
              },
            },
            {
              name: "list",
              description: "List batch-operations jobs",
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
            },
          ],
        },
      ],
    },
    {
      name: "buckets",
      description: "Manage Cloud Storage buckets",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a bucket",
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
            name: "URL",
            description: "URL of bucket to add IAM policy binding to",
          },
        },
        {
          name: "anywhere-caches",
          description: "Manage Cloud Storage Anywhere Caches",
          subcommands: [
            {
              name: "create",
              description: "Create Anywhere Cache instances for a bucket",
              options: [
                flag42,
                flag46,
                flag351,
                flag1201,
                flag2292,
                flag4155,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15025,
                flag15315,
                flag15424,
              ],
              args: [
                {
                  name: "URL",
                  description:
                    "Specifies the URL of the bucket where the Anywhere Cache should be created",
                },
                {
                  name: "ZONE",
                  description:
                    "Specifies the name of the zonal locations where the Anywhere Cache should be created",
                  isVariadic: true,
                },
              ],
            },
            {
              name: "describe",
              description:
                "Returns details of Anywhere Cache instance of a bucket",
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
                flag11976,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ID",
                description:
                  "Identifier for a Anywhere Cache instance. It is a combination of bucket_name/anywhere_cache_id, For example : test-bucket/my-cache-id",
              },
            },
            {
              name: "disable",
              description: "Disable Anywhere Cache instances",
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
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache instance. They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
            {
              name: "list",
              description: "List all Anywhere Cache instances of a bucket",
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
                flag11976,
                flag13948,
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
              args: {
                name: "URL",
                description:
                  "Specifies the URL of the bucket for which anywhere cache instances should be listed",
              },
            },
            {
              name: "pause",
              description: "Pause Anywhere Cache instances",
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
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache instance. They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
            {
              name: "resume",
              description: "Resume Anywhere Cache instances",
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
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache instance. They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
            {
              name: "update",
              description: "Update Anywhere Cache instances",
              options: [
                flag42,
                flag46,
                flag351,
                flag1201,
                flag2292,
                flag4155,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15025,
                flag15315,
                flag15424,
              ],
              args: {
                name: "ID",
                description:
                  "Identifiers for a Anywhere Cache Instance.They are combination of bucket_name/anywhere_cache_id. For example : test-bucket/my-cache-id",
                isVariadic: true,
              },
            },
          ],
        },
        {
          name: "create",
          description: "Create buckets for storing objects",
          options: [
            flag42,
            flag46,
            flag299,
            flag865,
            flag1201,
            flag2292,
            {
              name: ["--default-encryption-key", "-k"],
              description:
                "Set the default KMS key using the full path to the key, which has the following form: ``projects/[project-id]/locations/[location]/keyRings/[key-ring]/cryptoKeys/[my-key]''",
              args: {
                name: "DEFAULT_ENCRYPTION_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: ["--default-storage-class", "-c", "-s"],
              description:
                'Default [storage class](https://cloud.google.com/storage/docs/storage-classes) for the bucket. If not specified, the default storage class used by Cloud Storage is "Standard"',
              args: {
                name: "DEFAULT_STORAGE_CLASS",
                description: "String",
                suggestions: [],
              },
            },
            flag4029,
            {
              name: "--enable-hierarchical-namespace",
              description:
                "Enable hierarchical namespace for the bucket. To use this flag, you must also use --uniform-bucket-level-access",
            },
            {
              name: "--enable-per-object-retention",
              description:
                "Enables each object in the bucket to have its own retention settings, which prevents deletion until stored for a specific length of time",
            },
            flag4365,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6017,
            flag6497,
            {
              name: ["--location", "-l"],
              description:
                "[Location](https://cloud.google.com/storage/docs/locations) for the bucket. If not specified, the location used by Cloud Storage is ``us''. A bucket's location cannot be changed after creation",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: ["--pap", "--public-access-prevention"],
              description:
                'Sets public access prevention to "enforced". For details on how exactly public access is blocked, see: http://cloud.google.com/storage/docs/public-access-prevention. Use *--public-access-prevention* to enable and *--no-public-access-prevention* to disable',
            },
            flag11309,
            flag11637,
            {
              name: ["--public-access-prevention", "--pap"],
              description:
                'Sets public access prevention to "enforced". For details on how exactly public access is blocked, see: http://cloud.google.com/storage/docs/public-access-prevention. Use *--public-access-prevention* to enable and *--no-public-access-prevention* to disable',
            },
            flag11946,
            flag12032,
            flag13095,
            flag13209,
            {
              name: "--soft-delete-duration",
              description:
                'Duration to retain soft-deleted objects. For example, "2w1d" is two weeks and one day. See `gcloud topic datetimes` for more information on the duration format. Setting `0` will disable soft delete policy on the bucket. Default is 7 days',
              args: {
                name: "SOFT_DELETE_DURATION",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: ["--uniform-bucket-level-access", "-b"],
              description:
                "Turns on uniform bucket-level access setting. Default is False. Use *--uniform-bucket-level-access* to enable and *--no-uniform-bucket-level-access* to disable",
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URLs of the buckets to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Deletes Cloud Storage buckets",
          options: [
            flag42,
            flag46,
            flag299,
            flag1201,
            flag2292,
            flag2448,
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
            name: "URLS",
            description: "Specifies the URLs of the buckets to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describes Cloud Storage buckets",
          options: [
            flag42,
            flag46,
            flag299,
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
            flag11976,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "Specifies URL of bucket to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a bucket",
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
            name: "URL",
            description: "Request IAM policy for this bucket",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Storage buckets",
          options: [
            flag42,
            flag46,
            flag299,
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
            flag11976,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URLS",
            description: "Specifies URL of buckets to List",
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "notifications",
          description: "Manage Cloud Storage bucket notifications",
          subcommands: [
            {
              name: "create",
              description: "Create a notification configuration on a bucket",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: ["--custom-attributes", "-m"],
                  description:
                    "Specifies key:value attributes that are appended to the set of attributes sent to Cloud Pub/Sub for all events associated with this notification configuration",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                    suggestions: [],
                  },
                },
                {
                  name: ["--event-types", "-e"],
                  description:
                    "Specify event type filters for this notification configuration. Cloud Storage will send notifications of only these types. By default, Cloud Storage sends notifications for all event types. * OBJECT_FINALIZE: An object has been created. * OBJECT_METADATA_UPDATE: The metadata of an object has changed. * OBJECT_DELETE: An object has been permanently deleted. * OBJECT_ARCHIVE: A live version of an object has become a noncurrent version. _NOTIFICATION_EVENT_TYPE_ must be one of: *OBJECT_ARCHIVE*, *OBJECT_DELETE*, *OBJECT_FINALIZE*, *OBJECT_METADATA_UPDATE*",
                  args: {
                    name: "NOTIFICATION_EVENT_TYPE",
                    description: "List",
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
                  name: ["--object-prefix", "-p"],
                  description:
                    "Specifies a prefix path for this notification configuration. Cloud Storage will send notifications for only objects in the bucket whose names begin with the prefix",
                  args: {
                    name: "OBJECT_PREFIX",
                    description: "String",
                    suggestions: [],
                  },
                },
                {
                  name: ["--payload-format", "-f"],
                  description:
                    "Specifies the payload format of notification messages. Notification details are available in the message attributes. 'none' sends no payload. _PAYLOAD_FORMAT_ must be one of: *json*, *none*",
                  args: {
                    name: "PAYLOAD_FORMAT",
                    description: "String",
                    suggestions: ["json", "none"],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: ["--skip-topic-setup", "-s"],
                  description:
                    "Skips creation and permission assignment of the Cloud Pub/Sub topic. This is useful if the caller does not have permission to access the topic in question, or if the topic already exists and has the appropriate publish permission assigned",
                },
                {
                  name: ["--topic", "-t"],
                  description:
                    "Specifies the Cloud Pub/Sub topic to send notifications to. If not specified, this command chooses a topic whose project is your default project and whose ID is the same as the Cloud Storage bucket name",
                  args: {
                    name: "TOPIC",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "URL",
                description:
                  "URL of the bucket to create the notification configuration on",
              },
            },
            {
              name: "delete",
              description: "Delete notification configurations from a bucket",
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
                name: "URLS",
                description:
                  "Specifies notification configuration names or buckets",
                isVariadic: true,
              },
            },
            {
              name: "describe",
              description: "Show metadata for a notification configuration",
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
                name: "URL",
                description: "The url of the notification configuration",
              },
            },
            {
              name: "list",
              description:
                "List the notification configurations belonging to a given bucket",
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
              args: {
                name: "URLS",
                description:
                  "Google Cloud Storage bucket paths. The path must begin with gs:// and may contain wildcard characters",
                isOptional: true,
                isVariadic: true,
              },
            },
          ],
        },
        {
          name: "relocate",
          description: "Relocates bucket between different locations",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--destination-kms-key-name",
              description:
                "This is only required when relocating a bucket that uses\nCustomer-Managed Encryption Keys (CMEK). The full resource name of\nthe Cloud KMS key to use for encrypting objects in the destination\nbucket. This key will be set as the default bucket encryption key.\nThe key must exist in the destination location. Format:\nprojects/PROJECT/locations/LOCATION/keyRings/RING/cryptoKeys/KEY",
              args: {
                name: "DESTINATION_KMS_KEY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dry-run",
              description:
                "Prints the operations that the relocate command would perform\nwithout actually performing relocation. This is helpful to\nidentify any issues that need to be detected asynchronously",
            },
            {
              name: "--finalize",
              description:
                "Schedules the write lock to occur. Once activated, no further writes will be allowed to the associated bucket. This helps minimize disruption to bucket usage. For certain types of moves(between Multi Region and Custom Dual Regions), finalize is not required",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            {
              name: "--location",
              description:
                "The final [location](https://cloud.google.com/storage/docs/locations) where the bucket will be relocated to. If no location is provided, Cloud Storage will use the default location, which is us",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--operation",
              description:
                "Specify the relocation operation name to advance the relocation operation.The relocation operation name must include the Cloud Storage bucket and operation ID",
              args: {
                name: "OPERATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11309,
            flag11637,
            flag11946,
            flag14975,
            {
              name: "--ttl",
              description:
                "Time to live for the relocation operation. Defaults to 12h if not provided",
              args: {
                name: "TTL",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URL of the bucket to relocate",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a bucket",
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
            name: "URL",
            description: "URL of bucket to remove IAM policy binding from",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a bucket",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2448,
            flag4505,
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
              name: "URLS",
              description:
                "URLs for buckets to apply the IAM policy to. Can include wildcards",
              isVariadic: true,
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
          description: "Update bucket settings",
          options: [
            flag42,
            flag46,
            flag62,
            flag119,
            {
              name: "--add-default-object-acl-grant",
              description:
                "Adds default object ACL grant. See --add-acl-grant help text for more details",
              args: {
                name: "DEFAULT_OBJECT_ACL_GRANT",
                description: "Dict",
                suggestions: [],
              },
            },
            flag299,
            flag865,
            flag1201,
            flag1371,
            {
              name: "--clear-cors",
              description: "Clears the bucket's CORS settings",
            },
            {
              name: "--clear-default-encryption-key",
              description: "Clears the bucket's default encryption key",
            },
            {
              name: "--clear-ip-filter",
              description:
                "Disables and clears IP filter configuration of the bucket",
            },
            {
              name: "--clear-labels",
              description: "Clear all labels associated with a bucket",
            },
            {
              name: "--clear-lifecycle",
              description: "Removes all lifecycle configuration for the bucket",
            },
            {
              name: "--clear-log-bucket",
              description:
                "Disables usage and storage logging for the bucket specified in the overall update command",
            },
            {
              name: "--clear-log-object-prefix",
              description:
                "Clears the prefix used to determine the naming of log objects in the logging bucket",
            },
            {
              name: ["--clear-pap", "--clear-public-access-prevention"],
              description:
                "Unsets the public access prevention setting on a bucket",
            },
            {
              name: ["--clear-public-access-prevention", "--clear-pap"],
              description:
                "Unsets the public access prevention setting on a bucket",
            },
            {
              name: "--clear-retention-period",
              description: "Clears the object retention period for a bucket",
            },
            {
              name: "--clear-soft-delete",
              description:
                "Clears bucket soft delete settings. Does not affect objects already in soft-deleted state",
            },
            {
              name: "--clear-web-error-page",
              description:
                "Clear website error page if bucket is hosting website",
            },
            {
              name: "--clear-web-main-page-suffix",
              description:
                "Clear website main page suffix if bucket is hosting website",
            },
            flag2292,
            flag2448,
            {
              name: "--cors-file",
              description:
                'Sets the Cross-Origin Resource Sharing (CORS) configuration on a bucket.\nAn example CORS JSON document looks like the following:\n+\n  [\n    {\n      "origin": ["http://origin1.example.com"],\n      "responseHeader": ["Content-Type"],\n      "method": ["GET"],\n      "maxAgeSeconds": 3600\n    }\n  ]\n+\nFor more information about supported endpoints for CORS, see\n[Cloud Storage CORS support](https://cloud.google.com/storage/docs/cross-origin#server-side-support)',
              args: {
                name: "CORS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--default-encryption-key",
              description: "Set the default KMS key for the bucket",
              args: {
                name: "DEFAULT_ENCRYPTION_KEY",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--default-event-based-hold",
              description:
                "Sets the default value for an event-based hold on the bucket. By setting the default event-based hold on a bucket, newly-created objects inherit that value as their event-based hold (it is not applied retroactively). Use *--default-event-based-hold* to enable and *--no-default-event-based-hold* to disable",
            },
            {
              name: "--default-object-acl-file",
              description:
                "Sets the default object ACL from file for the bucket",
              args: {
                name: "DEFAULT_OBJECT_ACL_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--default-storage-class",
              description: "Sets the default storage class for the bucket",
              args: {
                name: "DEFAULT_STORAGE_CLASS",
                description: "String",
                suggestions: [],
              },
            },
            flag4029,
            flag4365,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6017,
            {
              name: "--labels-file",
              description:
                'Sets the label configuration for the bucket. An example label JSON document\nlooks like the following:\n+\n  {\n    "your_label_key": "your_label_value",\n    "your_other_label_key": "your_other_label_value"\n  }',
              args: {
                name: "LABELS_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag6497,
            {
              name: "--lock-retention-period",
              description:
                'Locks an unlocked retention policy on the buckets. Caution: A locked retention policy cannot be removed from a bucket or reduced in duration. Once locked, deleting the bucket is the only way to "remove" a retention policy',
            },
            {
              name: "--log-bucket",
              description:
                "Enables usage and storage logging for the bucket specified in the overall update command, outputting log files to the bucket specified in this flag. Cloud Storage does not validate the existence of the bucket receiving logs. In addition to enabling logging on your bucket, you also need to grant cloud-storage-analytics@google.com write access to the log bucket",
              args: {
                name: "LOG_BUCKET",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--log-object-prefix",
              description:
                "Specifies a prefix for the names of logs generated in the log bucket. The default prefix is the bucket name. If logging is not enabled, this flag has no effect",
              args: {
                name: "LOG_OBJECT_PREFIX",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: ["--pap", "--public-access-prevention"],
              description:
                'If True, sets [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention) to "enforced". If False, sets public access prevention to "inherited". Use *--public-access-prevention* to enable and *--no-public-access-prevention* to disable',
            },
            flag11486,
            {
              name: "--predefined-default-object-acl",
              description:
                "Apply a predefined set of default object access controls tobuckets",
              args: {
                name: "PREDEFINED_DEFAULT_OBJECT_ACL",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            {
              name: ["--public-access-prevention", "--pap"],
              description:
                'If True, sets [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention) to "enforced". If False, sets public access prevention to "inherited". Use *--public-access-prevention* to enable and *--no-public-access-prevention* to disable',
            },
            flag11946,
            flag11994,
            flag12032,
            flag12530,
            {
              name: "--remove-default-object-acl-grant",
              description:
                "Removes default object ACL grant. See --remove-acl-grant help text for more details",
              args: {
                name: "REMOVE_DEFAULT_OBJECT_ACL_GRANT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--remove-labels",
              description: "Remove labels by their key names",
              args: {
                name: "LABEL_KEYS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--requester-pays",
              description:
                "Allows you to configure a Cloud Storage bucket so that the requester pays all costs related to accessing the bucket and its objects. Use *--requester-pays* to enable and *--no-requester-pays* to disable",
            },
            flag13095,
            flag13209,
            {
              name: "--soft-delete-duration",
              description:
                'Duration to retain soft-deleted objects. For example, "2w1d" is two weeks and one day',
              args: {
                name: "SOFT_DELETE_DURATION",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--uniform-bucket-level-access",
              description:
                "Enables or disables [uniform bucket-level access](https://cloud.google.com/storage/docs/bucket-policy-only) for the buckets. Use *--uniform-bucket-level-access* to enable and *--no-uniform-bucket-level-access* to disable",
            },
            {
              name: "--update-labels",
              description:
                "Add or update labels. Example: --update-labels=key1=value1,key2=value2",
              args: {
                name: "LABEL_KEYS_AND_VALUES",
                description: "Dict",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
            {
              name: "--versioning",
              description:
                "Allows you to configure a Cloud Storage bucket to keep old versions of objects. Use *--versioning* to enable and *--no-versioning* to disable",
            },
            {
              name: "--web-error-page",
              description:
                "Cloud Storage allows you to configure a bucket to behave like a static website. A subsequent GET bucket request through a custom domain for a non-existent object serves the specified error page instead of the standard Cloud Storage error",
              args: {
                name: "WEB_ERROR_PAGE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--web-main-page-suffix",
              description:
                'Cloud Storage allows you to configure a bucket to behave like a static website. A subsequent GET bucket request through a custom domain serves the specified "main" page instead of performing the usual bucket listing',
              args: {
                name: "WEB_MAIN_PAGE_SUFFIX",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "URL",
            description: "Specifies the URLs of the buckets to update",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "cat",
      description: "Outputs the contents of one or more URLs to stdout",
      options: [
        flag42,
        flag46,
        flag299,
        flag1201,
        flag2292,
        flag2889,
        {
          name: ["--display-url", "-d"],
          description: "Prints the header before each object",
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
          name: ["--range", "-r"],
          description:
            "Causes gcloud storage to output just the specified byte range of\nthe object. In a case where \"start\" = 'x', and \"end\" = 'y',\nranges take the form:\n`x-y` (e.g., `-r 256-5939`), `x-` (e.g., `-r 256-`),\n`-y` (e.g., `-r -5`)\n+\nWhen offsets start at 0, x-y means to return bytes x\nthrough y (inclusive), x- means to return bytes x through\nthe end of the object, and -y changes the role of y.\nIf -y is present, then it returns the last y bytes of the object.\n+\nIf the bytes are out of range of the object,\nthen nothing is printed",
          args: { name: "RANGE", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "URL",
        description: "The url of objects to list",
        isVariadic: true,
      },
    },
    {
      name: "cp",
      description: "Upload, download, and copy Cloud Storage objects",
      options: [
        flag42,
        flag46,
        flag299,
        flag394,
        flag1201,
        flag1335,
        flag1371,
        flag1582,
        flag1583,
        flag2292,
        flag2422,
        flag2423,
        flag2425,
        flag2426,
        flag2428,
        flag2448,
        flag2619,
        flag2618,
        flag2640,
        flag2658,
        flag2675,
        flag2889,
        flag3863,
        flag4370,
        flag4900,
        flag4902,
        flag5091,
        flag5416,
        flag5415,
        flag5418,
        flag5417,
        flag5453,
        flag5627,
        flag5628,
        flag5654,
        flag5699,
        flag5749,
        flag7356,
        flag7551,
        flag9024,
        flag11486,
        flag11516,
        flag11519,
        flag11520,
        flag11553,
        flag11637,
        flag11946,
        flag11996,
        flag12038,
        flag12591,
        flag12593,
        flag13082,
        flag13091,
        flag13880,
        flag14443,
        flag14975,
        flag15147,
        flag15148,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "SOURCE",
          description: "The source path(s) to copy",
          isOptional: true,
          isVariadic: true,
        },
        { name: "DESTINATION", description: "The destination path" },
      ],
    },
    {
      name: "diagnose",
      description: "Diagnose Google Cloud Storage",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        {
          name: "--destination",
          description:
            "Destination file path where the diagnostic bundle will be exported",
          args: { name: "DESTINATION", description: "String", suggestions: [] },
        },
        {
          name: "--download-type",
          description:
            "Download strategy to use for the DOWNLOAD_THROUGHPUT diagnostic test.\n+\nSTREAMING: Downloads the file in memory, does not use parallelism.\n`--process-count` and `--thread-count` flag values will be ignored if\nprovided.\n+\nSLICED: Performs a [sliced download](https://cloud.google.com/storage/docs/sliced-object-downloads)\nof objects to a directory.\nParallelism can be controlled via `--process-count` and `--thread-count`\nflags.\n+\nFILE: Download objects as files. Parallelism can be controlled via\n`--process-count` and `--thread-count` flags.\n+\n_DOWNLOAD_TYPE_ must be one of: *FILE*, *SLICED*, *STREAMING*",
          args: {
            name: "DOWNLOAD_TYPE",
            description: "String",
            suggestions: ["FILE", "SLICED", "STREAMING"],
          },
        },
        {
          name: "--export",
          description:
            "Generate and export a diagnostic bundle. The following\ninformation will be bundled and exported into a gzipped tarball\n(.tar.gz):\n+\n- Latest gcloud CLI logs.\n- Output of running the `gcloud storage diagnose` command.\n- Output of running the `gcloud info --anonymize` command.\n+\nNote: This command generates a bundle containing system information like\ndisk counter detlas, CPU information and system configurations. Please\nexercise caution while sharing",
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        {
          name: "--logs-path",
          description:
            "If the diagnostic supports writing logs, write the logs to this file location",
          args: { name: "LOGS_PATH", description: "String", suggestions: [] },
        },
        {
          name: "--object-count",
          description: "Number of objects to use for each diagnostic test",
          args: {
            name: "OBJECT_COUNT",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--object-size",
          description: "Object size to use for the diagnostic tests",
          args: {
            name: "OBJECT_SIZE",
            description:
              "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
            suggestions: [],
          },
        },
        {
          name: "--object-sizes",
          description:
            "List of object sizes to use for the tests. Sizes should be\nprovided for each object specified using `--object-count` flag",
          args: { name: "OBJECT_SIZES", description: "List", suggestions: [] },
        },
        {
          name: "--process-count",
          description:
            "Number of processes at max to use for each diagnostic test",
          args: {
            name: "PROCESS_COUNT",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag11637,
        flag11946,
        {
          name: "--test-type",
          description:
            "Tests to run as part of this diagnosis. Following tests are supported:\n+\nDIRECT_CONNECTIVITY: Run a test upload over the Direct Connectivity\nnetwork path and run other diagnostics if the upload fails.\n+\nDOWNLOAD_THROUGHPUT: Upload objects to the specified bucket and record\nthe number of bytes transferred per second.\n+\nUPLOAD_THROUGHPUT: Download objects from the specified bucket and\nrecord the number of bytes transferred per second.\n+\nLATENCY: Write the objects, retrieve their metadata, read the objects,\nand record latency of each operation.\n+\n_TEST_TYPES_ must be one of: *DIRECT_CONNECTIVITY*, *DOWNLOAD_THROUGHPUT*, *LATENCY*, *UPLOAD_THROUGHPUT*",
          args: { name: "TEST_TYPES", description: "List", suggestions: [] },
        },
        {
          name: "--thread-count",
          description:
            "Number of threads at max to use for each diagnostic test",
          args: {
            name: "THREAD_COUNT",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag14975,
        {
          name: "--upload-type",
          description:
            "Upload strategy to use for the _UPLOAD_THROUGHPUT_ diagnostic test.\n+\nFILE: Uploads files to a bucket. Parallelism can be controlled via\n`--process-count` and `--thread-count` flags.\n+\nPARALLEL_COMPOSITE: Uploads files using a [parallel\ncomposite strategy](https://cloud.google.com/storage/docs/parallel-composite-uploads).\nParallelism can be controlled via `--process-count` and `--thread-count`\nflags.\n+\nSTREAMING: Streams the data to the bucket, does not use parallelism.\n`--process-count` and `--thread-count` flag values will be ignored if\nprovided.\n+\n_UPLOAD_TYPE_ must be one of: *FILE*, *PARALLEL_COMPOSITE*, *STREAMING*",
          args: {
            name: "UPLOAD_TYPE",
            description: "String",
            suggestions: ["FILE", "PARALLEL_COMPOSITE", "STREAMING"],
          },
        },
        flag15315,
        flag15424,
      ],
      args: {
        name: "URL",
        description: "Bucket URL to use for the diagnostic tests",
      },
    },
    {
      name: "du",
      description:
        "Displays the amount of space in bytes used by storage resources",
      options: [
        flag42,
        flag46,
        flag299,
        {
          name: ["--all-versions", "-a"],
          description:
            "Includes noncurrent object versions for a bucket with Object Versioning enabled. Also prints the generation and metageneration number for each listed object",
        },
        flag1201,
        flag2292,
        {
          name: ["--exclude-name-pattern", "-e"],
          description:
            'Exclude a pattern from the report. Example: `-e "*.o"` excludes any object that ends in ".o". Can be specified multiple times',
          args: {
            name: "EXCLUDE_NAME_PATTERN",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: ["--exclude-name-pattern-file", "-X"],
          description:
            "Similar to -e, but excludes patterns from the given file. The patterns to exclude should be listed one per line",
          args: {
            name: "EXCLUDE_NAME_PATTERN_FILE",
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
        flag7808,
        flag11637,
        flag11946,
        {
          name: ["--readable-sizes", "-r"],
          description:
            "Prints object sizes in human-readable format. For example, 1 KiB, 234 MiB, or 2GiB",
        },
        {
          name: ["--summarize", "-s"],
          description: "Displays only the summary for each argument",
        },
        {
          name: ["--total", "-c"],
          description: "Includes a total size of all input sources",
        },
        flag14975,
        flag15315,
        flag15424,
        {
          name: ["--zero-terminator", "-0"],
          description:
            "Ends each output line with a 0 byte rather than a newline. You can use this to make the output machine-readable",
        },
      ],
      args: {
        name: "URL",
        description: "The url of objects to list",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "folders",
      description: "Manage Cloud Storage folders",
      subcommands: [
        {
          name: "create",
          description: "Create folders for hierarchical namespace bucket",
          options: [
            flag42,
            flag46,
            flag299,
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
              name: "--recursive",
              description:
                "Recursively create all folders in a given path if they do not alraedy exist",
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URLs of the folders to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete folders",
          options: [
            flag42,
            flag46,
            flag299,
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
            name: "URLS",
            description: "The URLs of the folders to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe hierarchical namesapace bucket folders",
          options: [
            flag42,
            flag46,
            flag299,
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
            flag11976,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URL of the folder to describe",
          },
        },
        {
          name: "list",
          description: "List folders",
          options: [
            flag42,
            flag46,
            flag299,
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
            flag11976,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URLs of the resources to list",
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "hash",
      description: "Calculates hashes on local or cloud files",
      options: [
        flag42,
        flag46,
        flag299,
        flag1201,
        flag2292,
        flag2889,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        {
          name: "--hex",
          description:
            "Output hash digests in hex format. By default, digests are displayed in base64",
        },
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        {
          name: "--skip-crc32c",
          description:
            "Skip CRC32C hash calculation. Useful if command is running slow",
        },
        {
          name: "--skip-md5",
          description:
            "Skip MD5 hash calculation. Useful if command is running slow",
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "URLS",
        description: "Local or cloud URLs of objects to hash",
        isVariadic: true,
      },
    },
    {
      name: "hmac",
      description: "Manage Cloud Storage service account HMAC keys",
      subcommands: [
        {
          name: "create",
          description: "Add a service account HMAC",
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
            name: "SERVICE_ACCOUNT",
            description: "The service account email",
          },
        },
        {
          name: "delete",
          description: "Remove a service account HMAC",
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
            name: "ACCESS_ID",
            description: "Access ID for HMAC key to delete",
          },
        },
        {
          name: "describe",
          description: "Describes a service account HMAC key",
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
            name: "ACCESS_ID",
            description:
              "The [Access ID](https://cloud.google.com/storage/docs/authentication/hmackeys#overview) of the HMAC key",
          },
        },
        {
          name: "list",
          description: "List service account HMAC keys",
          options: [
            flag42,
            flag46,
            {
              name: ["--all", "-a"],
              description: "Shows all keys, including recently deleted keys",
            },
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
            {
              name: ["--long", "-l"],
              description:
                "Use long listing format, showing the full metadata for each key\nexcluding the secret",
            },
            flag11059,
            flag11637,
            flag11946,
            {
              name: ["--service-account", "-u"],
              description: "Filter keys for the provided service account email",
              args: {
                name: "SERVICE_ACCOUNT",
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
        {
          name: "update",
          description: "Change the status of a service account HMAC",
          options: [
            flag42,
            flag46,
            {
              name: "--activate",
              description: "Sets the state of the specified key to ``ACTIVE''",
            },
            flag1201,
            flag2292,
            {
              name: "--deactivate",
              description:
                "Sets the state of the specified key to ``INACTIVE''",
            },
            {
              name: ["--etag", "-e"],
              description:
                "If provided, the update will only be performed if the specified etag\nmatches the etag of the stored key",
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
          args: {
            name: "ACCESS_ID",
            description: "Access ID for HMAC key to update",
          },
        },
      ],
    },
    {
      name: "insights",
      description: "Manage Cloud Storage inventory reports",
      subcommands: [
        {
          name: "dataset-configs",
          description: "Manage Cloud Storage Insights dataset configurations",
          subcommands: [
            {
              name: "create",
              description: "Create a new dataset config for Insights",
              options: [
                flag42,
                flag46,
                flag111,
                {
                  name: "--auto-add-new-buckets",
                  description:
                    "Automatically include any new buckets created if they satisfy criteria defined in config settings",
                },
                flag1201,
                flag2292,
                flag3172,
                flag4235,
                flag4589,
                flag4590,
                flag4602,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--identity",
                  description:
                    "The type of service account used in the dataset config. _IDENTITY_TYPE_ must be one of: *IDENTITY_TYPE_PER_CONFIG*, *IDENTITY_TYPE_PER_PROJECT*",
                  args: {
                    name: "IDENTITY_TYPE",
                    description: "String",
                    suggestions: [
                      "IDENTITY_TYPE_PER_CONFIG",
                      "IDENTITY_TYPE_PER_PROJECT",
                    ],
                  },
                },
                flag5699,
                flag5730,
                flag5731,
                flag5762,
                {
                  name: "--location",
                  description: "Provide location of the dataset config",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--organization",
                  description: "Provide the source organization number",
                  args: {
                    name: "SOURCE_ORG_NUMBER",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                {
                  name: "--retention-period-days",
                  description: "Provide retention period for the config",
                  args: {
                    name: "RETENTION_DAYS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag14014,
                flag14013,
                flag14076,
                flag14075,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATASET_CONFIG_NAME",
                description: "Provide human readable config name",
              },
            },
            {
              name: "create-link",
              description: "Create a link to a BigQuery instance",
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
                flag6738,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config.\n+\nTo set the `dataset-config` attribute:\n* provide the argument `dataset_config` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete dataset config for Insights",
              options: [
                flag42,
                flag46,
                {
                  name: "--auto-delete-link",
                  description:
                    "Delete the BigQuery instance links before the config gets deleted explicitly",
                },
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                {
                  name: "--force",
                  description:
                    "Force delete the config by skipping the consent",
                },
                flag5091,
                flag5453,
                flag5699,
                flag6738,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config.\n+\nTo set the `dataset-config` attribute:\n* provide the argument `dataset_config` on the command line",
              },
            },
            {
              name: "delete-link",
              description: "Delete a link to a BigQuery instance",
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
                flag6738,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config.\n+\nTo set the `dataset-config` attribute:\n* provide the argument `dataset_config` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe dataset config for Insights",
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
                flag6738,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config.\n+\nTo set the `dataset-config` attribute:\n* provide the argument `dataset_config` on the command line",
              },
            },
            {
              name: "list",
              description:
                "List returns all the Insights dataset configs for given location",
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
                  description: "Provide location of the dataset config",
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
              name: "update",
              description: "Updates a dataset config for Insights",
              options: [
                flag42,
                flag46,
                flag111,
                {
                  name: "--auto-add-new-buckets",
                  description:
                    "Automatically include any new buckets created if they satisfy criteria defined in config settings. _AUTO_ADD_NEW_BUCKETS_ must be one of: *true*, *false*",
                },
                flag1201,
                flag2292,
                flag3172,
                flag4235,
                flag4589,
                flag4590,
                flag4602,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag5730,
                flag5731,
                flag5762,
                flag6738,
                flag7356,
                flag11637,
                flag11946,
                {
                  name: "--retention-period-days",
                  description: "Provide retention period for the config",
                  args: {
                    name: "RETENTION_DAYS",
                    description: "Int",
                    suggestions: [],
                  },
                },
                flag14014,
                flag14013,
                flag14076,
                flag14075,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "DATASET_CONFIG",
                description:
                  "ID of the dataset-config or fully qualified identifier for the dataset-config.\n+\nTo set the `dataset-config` attribute:\n* provide the argument `dataset_config` on the command line",
              },
            },
          ],
        },
        {
          name: "inventory-reports",
          description: "Manage Cloud Storage inventory report configurations",
          subcommands: [
            {
              name: "create",
              description: "Create a new inventory report config",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2593,
                flag2601,
                flag2603,
                {
                  name: "--destination",
                  description:
                    "Sets the URL of the destination bucket and path where generated reports are stored. Defaults to <SOURCE_BUCKET_URL>/inventory_reports/",
                  args: {
                    name: "DESTINATION_URL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3781,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                {
                  name: "--metadata-fields",
                  description:
                    'The metadata fields to be included in the inventory report. The fields: "project, bucket, name" are REQUIRED.  Defaults to all fields being included. _METADATA_FIELDS_ must be one of: *project*, *bucket*, *name*, *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*',
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag11131,
                flag11637,
                flag11946,
                {
                  name: "--schedule-repeats",
                  description:
                    "Sets how often the inventory report configuration will run. Defaults to DAILY. _FREQUENCY_ must be one of: *daily*, *weekly*",
                  args: {
                    name: "FREQUENCY",
                    description: "String",
                    suggestions: ["daily", "weekly"],
                  },
                },
                {
                  name: "--schedule-repeats-until",
                  description:
                    "Sets date after which you want to stop generating inventory reports. For example, 2022-03-30. Defaults to one year from --schedule-starts value",
                  args: {
                    name: "END_DATE",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--schedule-starts",
                  description:
                    "Sets the date you want to start generating inventory reports. For example, 2022-01-30. Should be tomorrow or later based on UTC timezone. Defaults to tomorrow",
                  args: {
                    name: "START_DATE",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "SOURCE_BUCKET_URL",
                description:
                  "URL of the source bucket that will contain the inventory report configuration",
              },
            },
            {
              name: "delete",
              description: "Delete an inventory report config",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                {
                  name: "--force",
                  description:
                    "If set, all report details for this report config will be deleted",
                },
                flag5091,
                flag5453,
                flag5699,
                flag6665,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPORT_CONFIG",
                description:
                  "ID of the report-config or fully qualified identifier for the report-config.\n+\nTo set the `report-config` attribute:\n* provide the argument `report_config` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an inventory report config",
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
                flag6665,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPORT_CONFIG",
                description:
                  "ID of the report-config or fully qualified identifier for the report-config.\n+\nTo set the `report-config` attribute:\n* provide the argument `report_config` on the command line",
              },
            },
            {
              name: "details",
              description: "Retrieve details of inventory reports",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe inventory reports detail",
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
                        "Google Cloud location for the report-detail.\n+\nTo set the `location` attribute:\n* provide the argument `report_detail` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
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
                      name: "--report-config",
                      description:
                        "Report Config ID for the report-detail.\n+\nTo set the `report-config` attribute:\n* provide the argument `report_detail` on the command line with a fully specified name;\n* provide the argument `--report-config` on the command line",
                      args: {
                        name: "REPORT_CONFIG",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                  ],
                  args: {
                    name: "REPORT_DETAIL",
                    description:
                      "ID of the report-detail or fully qualified identifier for the report-detail.\n+\nTo set the `report-detail` attribute:\n* provide the argument `report_detail` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List inventory report details",
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
                    flag6665,
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
                  args: {
                    name: "REPORT_CONFIG",
                    description:
                      "ID of the report-config or fully qualified identifier for the report-config.\n+\nTo set the `report-config` attribute:\n* provide the argument `report_config` on the command line",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "Lists all inventory report configs",
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
                  description: "The location of the report configs",
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
                {
                  name: "--source",
                  description:
                    "Specifies URL of the source bucket that contains the inventory report configuration",
                  args: {
                    name: "SOURCE_BUCKET_URL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15249,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description: "Update an inventory report config",
              options: [
                flag42,
                flag46,
                {
                  name: "--add-metadata-fields",
                  description:
                    "Adds fields to the metadata_fields list. _METADATA_FIELDS_ must be one of: *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*",
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag1201,
                flag2292,
                flag2593,
                flag2601,
                flag2603,
                {
                  name: "--destination",
                  description:
                    "Sets the URL of the destination bucket and path where generated reports are stored",
                  args: {
                    name: "DESTINATION_URL",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag3781,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6665,
                flag7356,
                {
                  name: "--metadata-fields",
                  description:
                    'The metadata fields to be included in the inventory report. The fields: "project, bucket, name" are REQUIRED. _METADATA_FIELDS_ must be one of: *project*, *bucket*, *name*, *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*',
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                    suggestions: [],
                  },
                },
                flag11131,
                flag11637,
                flag11946,
                {
                  name: "--remove-metadata-fields",
                  description:
                    "Removes fields from the metadata_fields list. _METADATA_FIELDS_ must be one of: *location*, *size*, *timeCreated*, *timeDeleted*, *updated*, *storageClass*, *etag*, *retentionExpirationTime*, *crc32c*, *md5Hash*, *generation*, *metageneration*, *contentType*, *contentEncoding*, *timeStorageClassUpdated*",
                  args: {
                    name: "METADATA_FIELDS",
                    description: "List",
                    suggestions: [],
                  },
                },
                {
                  name: "--schedule-repeats",
                  description:
                    "Sets how often the inventory report configuration will run. _FREQUENCY_ must be one of: *daily*, *weekly*",
                  args: {
                    name: "FREQUENCY",
                    description: "String",
                    suggestions: ["daily", "weekly"],
                  },
                },
                {
                  name: "--schedule-repeats-until",
                  description:
                    "Sets date after which you want to stop generating inventory reports. For example, 2022-03-30",
                  args: {
                    name: "END_DATE",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                {
                  name: "--schedule-starts",
                  description:
                    "Sets the date you want to start generating inventory reports. For example, 2022-01-30. Should be tomorrow or later based on UTC timezone",
                  args: {
                    name: "START_DATE",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "REPORT_CONFIG",
                description:
                  "ID of the report-config or fully qualified identifier for the report-config.\n+\nTo set the `report-config` attribute:\n* provide the argument `report_config` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "intelligence-configs",
      description: "Manage Cloud Storage Intelligence Configurations",
      subcommands: [
        {
          name: "describe",
          description: "Describes storage intelligence configuration",
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
            flag10862,
            flag11946,
            flag14484,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "disable",
          description: "Disables storage intelligence",
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
            flag10862,
            flag11946,
            flag14484,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "enable",
          description: "Enables storage intelligence",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4588,
            flag4597,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5729,
            flag5747,
            flag7356,
            flag10862,
            flag11946,
            flag14484,
            flag14975,
            flag14994,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Updates storage intelligence configuration",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4588,
            flag4597,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5729,
            flag5747,
            {
              name: "--inherit-from-parent",
              description:
                "Specifies storage intelligence config to be inherited from parent",
            },
            flag7356,
            flag10862,
            flag11946,
            flag14484,
            flag14975,
            flag14994,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "intelligence-findings",
      description: "Findings for Cloud Storage usage",
      subcommands: [
        {
          name: "describe",
          description: "Intelligence finding description",
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
            name: "FINDING_ID",
            description: "The ID of the intelligence finding to describe",
          },
        },
        {
          name: "list",
          description: "Intelligence findings list",
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
        {
          name: "revisions",
          description: "Historical revisions of intelligence findings",
          subcommands: [
            {
              name: "describe",
              description: "Historical revision description of a finding",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--finding-id",
                  description:
                    "The ID of the intelligence finding the revision belongs to",
                  args: {
                    name: "FINDING_ID",
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
                name: "REVISION_ID",
                description: "The ID of the revision to describe",
              },
            },
            {
              name: "list",
              description: "Historical revisions list of a finding",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                {
                  name: "--finding-id",
                  description:
                    "The ID of the intelligence finding to list revisions for",
                  args: {
                    name: "FINDING_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
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
          name: "summarize",
          description: "Intelligence findings summary",
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
            {
              name: "--organization",
              description: "The organization to scope the summary to",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11946,
            {
              name: "--resource-scope",
              description:
                "The resource scope for the summary. If not specified, summaries are aggregated at the level of the parent resource. _RESOURCE_SCOPE_ must be one of: *PROJECT*, *PARENT*",
              args: {
                name: "RESOURCE_SCOPE",
                description: "String",
                suggestions: ["PROJECT", "PARENT"],
              },
            },
            flag13948,
            {
              name: "--sub-folder",
              description: "The sub-folder to scope the summary to",
              args: {
                name: "SUB_FOLDER",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "ls",
      description: "List Cloud Storage buckets and objects",
      options: [
        flag42,
        flag46,
        flag299,
        {
          name: ["--all-versions", "-a"],
          description:
            "Include noncurrent object versions in the listing. This flag is typically only useful for buckets with [object versioning](https://cloud.google.com/storage/docs/object-versioning) enabled. If combined with the `--long` option, the metageneration for each listed object is also included",
        },
        flag1201,
        {
          name: ["--buckets", "-b"],
          description:
            "When given a bucket URL, only return buckets. Useful for avoiding the rule that prints the top-level objects of buckets matching a query. Typically used in combination with `--full` to get the full metadata of buckets",
        },
        flag2292,
        flag2889,
        {
          name: ["--etag", "-e"],
          description:
            "Include ETag metadata in listings that use the `--long` flag",
        },
        flag4640,
        flag4772,
        flag4900,
        flag4902,
        {
          name: ["--full", "-L"],
          description: "List all available metadata about items in rows",
        },
        flag5453,
        flag5699,
        {
          name: ["--json", "-j"],
          description: "List all available metadata about items as a JSON dump",
        },
        flag7356,
        {
          name: ["--long", "-l"],
          description:
            "For objects only. List size in bytes, creation time, and URL",
        },
        flag7808,
        flag8329,
        flag11637,
        flag11946,
        flag11994,
        {
          name: "--readable-sizes",
          description:
            "When used with `--long`, print object sizes in human readable format, such as 1 KiB, 234 MiB, or 2 GiB",
        },
        {
          name: ["--recursive", "-R", "-r"],
          description:
            "Recursively list the contents of any directories that match the path expression",
        },
        flag13945,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "PATH",
        description:
          "The path of objects and directories to list. The path must begin with gs:// and is allowed to contain wildcard characters",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "managed-folders",
      description: "Manage Cloud Storage managed folders",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to a managed folder",
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
            name: "URL",
            description:
              "URL of the managed folder to add IAM policy binding to",
          },
        },
        {
          name: "create",
          description: "Create managed folders",
          options: [
            flag42,
            flag46,
            flag299,
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
            name: "URL",
            description: "The URLs of the folders to create",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete managed folders",
          options: [
            flag42,
            flag46,
            flag299,
            flag1201,
            flag2292,
            flag2448,
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
            name: "URL",
            description: "The URLs of the managed folders to delete",
            isVariadic: true,
          },
        },
        {
          name: "describe",
          description: "Describe managed folders",
          options: [
            flag42,
            flag46,
            flag299,
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
            flag11976,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URL of the managed folder to describe",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a managed folder",
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
            name: "URL",
            description: "URL of the managed folder to get the IAM policy of",
          },
        },
        {
          name: "list",
          description: "List managed folders",
          options: [
            flag42,
            flag46,
            flag299,
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
            flag11976,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "The URLs of the resources to list",
            isVariadic: true,
          },
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove an IAM policy binding from a managed folder",
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
            name: "URL",
            description:
              "URL of managed folder to remove IAM policy binding from",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a managed folder",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2448,
            flag4505,
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
              name: "URLS",
              description:
                "URLs for managed folders to apply the IAM policy to",
              isVariadic: true,
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
      ],
    },
    {
      name: "mv",
      description: "Moves or renames objects",
      options: [
        flag42,
        flag46,
        flag299,
        flag394,
        flag1201,
        flag1335,
        flag1371,
        flag1582,
        flag1583,
        flag2292,
        flag2422,
        flag2423,
        flag2425,
        flag2426,
        flag2428,
        flag2448,
        flag2619,
        flag2618,
        flag2640,
        flag2658,
        flag2675,
        flag2889,
        flag3863,
        flag4370,
        flag4900,
        flag4902,
        flag5091,
        flag5416,
        flag5415,
        flag5418,
        flag5417,
        flag5453,
        flag5627,
        flag5628,
        flag5654,
        flag5699,
        flag5749,
        flag7356,
        flag7551,
        flag9024,
        flag11486,
        flag11516,
        flag11519,
        flag11520,
        flag11553,
        flag11637,
        flag11946,
        flag11996,
        flag12591,
        flag12593,
        flag13082,
        flag13091,
        flag13880,
        flag14443,
        flag14975,
        flag15147,
        flag15148,
        flag15315,
        flag15424,
      ],
      args: [
        {
          name: "SOURCE",
          description: "The source path(s) to copy",
          isOptional: true,
          isVariadic: true,
        },
        { name: "DESTINATION", description: "The destination path" },
      ],
    },
    {
      name: "objects",
      description: "Manage Cloud Storage objects",
      subcommands: [
        {
          name: "compose",
          description:
            "Concatenate a sequence of objects into a new composite object",
          options: [
            flag42,
            flag46,
            flag299,
            flag1201,
            flag1582,
            flag2292,
            flag2619,
            flag2618,
            {
              name: "--delete-source-objects",
              description:
                "If set, the source objects will be deleted after a successful\ncomposition. Note that this deletion bypasses the soft delete\npolicy if configured on the bucket",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5627,
            flag5628,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag13082,
            flag13091,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SOURCE",
              description:
                "The list of source objects that will be concatenated into a\nsingle object",
              isVariadic: true,
            },
            { name: "DESTINATION", description: "The destination object" },
          ],
        },
        {
          name: "describe",
          description: "Describe a Cloud Storage object",
          options: [
            flag42,
            flag46,
            flag299,
            flag1201,
            flag2292,
            flag2889,
            {
              name: "--fetch-encrypted-object-hashes",
              description:
                "If the initial GET request returns an object encrypted with a customer-supplied encryption key, the hash fields will be null. If the matching decryption key is present on the system, this flag retries the GET request with the key",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag11976,
            flag13945,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "Specifies URL of object to describe",
          },
        },
        {
          name: "list",
          description: "Lists Cloud Storage objects",
          options: [
            flag42,
            flag46,
            flag299,
            flag1201,
            flag2292,
            flag2889,
            flag4640,
            flag4772,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag7808,
            flag8329,
            flag11059,
            flag11637,
            flag11946,
            flag11976,
            flag13945,
            flag13948,
            {
              name: "--stat",
              description:
                "Emulates gsutil stat-style behavior. Does not show past object versions and changes output format",
            },
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URLS",
            description: "Specifies URL of objects to list",
            isVariadic: true,
          },
        },
        {
          name: "update",
          description: "Update Cloud Storage objects",
          options: [
            flag42,
            flag46,
            flag62,
            flag119,
            flag299,
            {
              name: "--all-versions",
              description: "Perform the operation on all object versions",
            },
            flag1201,
            flag1335,
            flag1371,
            {
              name: "--clear-cache-control",
              description: "Clears object cache control",
            },
            {
              name: "--clear-content-disposition",
              description: "Clears object content disposition",
            },
            {
              name: "--clear-content-encoding",
              description: "Clears content encoding",
            },
            {
              name: "--clear-content-language",
              description: "Clears object content language",
            },
            {
              name: "--clear-content-type",
              description: "Clears object content type",
            },
            flag1582,
            flag1583,
            {
              name: "--clear-custom-time",
              description: "Clears object custom time",
            },
            {
              name: "--clear-encryption-key",
              description:
                "Clears the encryption key associated with an object. Using this flag triggers a rewrite of affected objects, which are then encrypted using the default encryption key set on the bucket, if one exists, or else with a Google-managed encryption key",
            },
            {
              name: "--clear-retention",
              description:
                "Clears object retention settings and unlocks the configuration. Requires --override-unlocked-retention flag as confirmation",
            },
            flag2292,
            flag2422,
            flag2423,
            flag2425,
            flag2428,
            flag2448,
            flag2619,
            flag2618,
            flag2640,
            flag2658,
            flag2889,
            flag4370,
            {
              name: "--event-based-hold",
              description:
                "Enables or disables an event-based hold on objects. Use *--event-based-hold* to enable and *--no-event-based-hold* to disable",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5627,
            flag5628,
            flag5699,
            flag7356,
            {
              name: "--override-unlocked-retention",
              description:
                "Needed for certain retention configuration modifications, such as clearing retention settings and reducing retention time. Note that locked configurations cannot be edited even with this flag",
            },
            flag11486,
            flag11516,
            flag11637,
            flag11946,
            {
              name: ["--read-paths-from-stdin", "-I"],
              description:
                'Read the list of objects to update from stdin. No need to enter a source argument if this flag is present.\nExample: "storage objects update -I --content-type=new-type"',
            },
            {
              name: ["--recursive", "-R", "-r"],
              description:
                "Recursively update objects under any buckets or directories that match the URL expression",
            },
            flag12530,
            flag12591,
            flag12593,
            {
              name: "--retain-until",
              description:
                "Ensures the object is retained until the specified time in RFC 3339 format. Requires --override-unlocked-retention flag to shorten the retain-until time in unlocked configurations",
              args: {
                name: "DATETIME",
                description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                suggestions: [],
              },
            },
            {
              name: "--retention-mode",
              description:
                'Sets the object retention mode to either "Locked" or "Unlocked". When retention mode is "Locked", the retain until time can only be increased. _RETENTION_MODE_ must be one of: *Locked*, *Unlocked*',
              args: {
                name: "RETENTION_MODE",
                description: "String",
                suggestions: ["Locked", "Unlocked"],
              },
            },
            {
              name: ["--storage-class", "-s"],
              description:
                "Specify the storage class of the object. Using this flag triggers a rewrite of underlying object data",
              args: {
                name: "STORAGE_CLASS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--temporary-hold",
              description:
                "Enables or disables a temporary hold on objects. Use *--temporary-hold* to enable and *--no-temporary-hold* to disable",
            },
            flag14975,
            flag15147,
            flag15148,
            flag15315,
            flag15424,
          ],
          args: {
            name: "URL",
            description: "Specifies URLs of objects to update",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage storage operations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a storage operation",
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
            name: "OPERATION_NAME",
            description:
              "The operation name including the Cloud Storage bucket and operation ID",
          },
        },
        {
          name: "describe",
          description: "Get configuration and latest storage operation details",
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
            name: "OPERATION_NAME",
            description:
              "The operation name including the Cloud Storage bucket and operation ID",
          },
        },
        {
          name: "list",
          description: "List storage operations",
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
            {
              name: "--server-filter",
              description:
                "Server-side filter string used to determine what operations to return. Example: '(done = true AND complete_time >= \"2023-01-01T00:00:00Z\") OR requested_cancellation = true' Note that the entire filter string must be in quotes and date strings within the filter must be in embedded quotes",
              args: {
                name: "SERVER_FILTER",
                description: "String",
                suggestions: [],
              },
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PARENT_RESOURCE_NAME",
            description:
              'The operation parent resource in the format "projects/```_```/buckets/BUCKET"',
          },
        },
      ],
    },
    {
      name: "restore",
      description: "Restore one or more soft-deleted objects",
      options: [
        flag42,
        flag46,
        {
          name: ["--all-versions", "-a"],
          description:
            "Restores all versions of soft-deleted objects.\n+\nThis flag is only useful for buckets with [object versioning] (https://cloud.google.com/storage/docs/object-versioning) enabled. In this case, the latest soft-deleted version will become live and the previous generations will become noncurrent.\n+\nIf versioning is disabled, the latest soft-deleted version will become live and previous generations will be soft-deleted again.\n+\nThis flag disables parallelism to preserve version order",
        },
        {
          name: "--allow-overwrite",
          description:
            "If included, live objects will be overwritten. If versioning is enabled, this will result in a noncurrent object. If versioning is not enabled, this will result in a soft-deleted object",
        },
        {
          name: "--async",
          description:
            "Initiates an asynchronous bulk restore operation on the specified bucket",
        },
        flag1201,
        flag2292,
        {
          name: "--created-after-time",
          description:
            "Restores only the objects that were created after this time",
          args: {
            name: "CREATED_AFTER_TIME",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--created-before-time",
          description:
            "Restores only the objects that were created before this time",
          args: {
            name: "CREATED_BEFORE_TIME",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--deleted-after-time",
          description:
            "Restores only the objects that were soft-deleted after this time",
          args: {
            name: "DELETED_AFTER_TIME",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        {
          name: "--deleted-before-time",
          description:
            "Restores only the objects that were soft-deleted before this time",
          args: {
            name: "DELETED_BEFORE_TIME",
            description: "Googlecloudsdk.calliope.arg_parsers:Parse",
            suggestions: [],
          },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5627,
        flag5628,
        flag5699,
        flag7356,
        flag11516,
        flag11637,
        flag11946,
        flag11994,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "URLS",
        description: "The url of objects to list",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "rm",
      description: "Delete objects and buckets",
      options: [
        flag42,
        flag46,
        flag299,
        {
          name: ["--all-versions", "-a"],
          description:
            "Delete all [versions](https://cloud.google.com/storage/docs/object-versioning) of an object",
        },
        flag1201,
        flag2292,
        flag2448,
        {
          name: "--exclude-managed-folders",
          description:
            "Excludes managed folders from command operations. By default gcloud storage includes managed folders in recursive removals. Please note that this flag would not be applicable for hierarchical namespace buckets as we always list managed folders for these buckets",
        },
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5627,
        flag5628,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag11994,
        {
          name: ["--recursive", "-R", "-r"],
          description:
            "Recursively delete the contents of buckets or directories that match the path expression. By default, this will delete managed folders as well. If the path is set to a bucket, like ``gs://bucket'', the bucket is also deleted. This option implies the `--all-versions` option. If you want to delete only live object versions, use the ``**'' wildcard instead",
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "URLS",
        description: "The URLs of the resources to delete",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "rsync",
      description: "Synchronize content of two buckets/directories",
      options: [
        flag42,
        flag46,
        flag299,
        flag1201,
        flag1335,
        flag1371,
        {
          name: "--checksums-only",
          description:
            "When comparing objects with matching names at the source and destination, skip modification time check and compare object hashes. Normally, hashes are only compared if modification times are not available",
        },
        flag1582,
        flag1583,
        flag2292,
        flag2422,
        flag2423,
        flag2425,
        flag2426,
        flag2428,
        flag2448,
        flag2619,
        flag2618,
        flag2640,
        flag2658,
        flag2889,
        {
          name: "--delete-unmatched-destination-objects",
          description:
            "Delete extra files under DESTINATION not found under SOURCE.\nBy default extra files are not deleted. Managed folders are not\naffected by this flag.\n+\nNote: this option can delete data quickly if you specify the wrong\nsource and destination combination",
        },
        {
          name: "--dry-run",
          description:
            "Print what operations rsync would perform without actually executing them",
        },
        flag4370,
        {
          name: ["--exclude", "-x"],
          description:
            'Exclude objects matching regex pattern from rsync.\n+\nNote that this is a Python regular expression, not a pure wildcard\npattern. For example, matching a string ending in "abc" is\n`.*abc$` rather than `*abc`. Also note that the exclude path\nis relative, as opposed to absolute\n(similar to Linux `rsync` and `tar` exclude options).\n+\nFor the Windows cmd.exe command line interpreter, use\n`^` as an escape character instead of `\\` and escape the `|`\ncharacter. When using Windows PowerShell, use `\'` instead of\n`"` and surround the `|` character with `"`',
          args: { name: "REGEX", description: "List", suggestions: [] },
        },
        flag4900,
        flag4902,
        flag5091,
        flag5416,
        flag5415,
        flag5453,
        flag5627,
        flag5628,
        {
          name: "--ignore-symlinks",
          description:
            "Ignore file symlinks instead of copying what they point to. Enabled by default, use *--no-ignore-symlinks* to disable",
        },
        flag5699,
        {
          name: "--include-managed-folders",
          description:
            "Includes managed folders in command operations. For transfers, gcloud storage will set up managed folders in the destination with the same IAM policy bindings as the source. Managed folders are only included with recursive cloud-to-cloud transfers",
        },
        flag7356,
        flag9024,
        flag11486,
        flag11519,
        flag11637,
        flag11946,
        flag12038,
        flag12591,
        flag12593,
        {
          name: ["--skip-if-dest-has-newer-mtime", "-u"],
          description:
            "Skip operating on destination object if it has a newer modification time than the source",
        },
        flag13880,
        flag14975,
        flag15147,
        flag15148,
        flag15315,
        flag15424,
      ],
      args: [
        { name: "SOURCE", description: "The source container path" },
        { name: "DESTINATION", description: "The destination container path" },
      ],
    },
    {
      name: "service-agent",
      description:
        "Manage a project's Cloud Storage service agent, which is used to perform Cloud KMS operations",
      options: [
        flag42,
        flag46,
        {
          name: "--authorize-cmek",
          description:
            "Adds appropriate encrypt/decrypt permissions to the specified Cloud\nKMS key. This allows the Cloud Storage service agent to write and\nread Cloud KMS-encrypted objects in buckets associated with the\nservice agent's project",
          args: {
            name: "AUTHORIZE_CMEK",
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
        flag14975,
        flag15315,
        flag15424,
      ],
    },
    {
      name: "sign-url",
      description:
        "Generate a URL with embedded authentication that can be used by anyone",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        {
          name: ["--duration", "-d"],
          description:
            "Specifies the duration that the signed url should be valid for,\ndefault duration is 1 hour. For example 10s for 10 seconds.\nSee $ gcloud topic datetimes for information on duration formats.\n+\nThe max duration allowed is 12 hours. This limitation exists because\nthe system-managed key used to sign the URL may not remain valid\nafter 12 hours.\n+\nAlternatively, the max duration allowed is 7 days when signing with\neither the ``--private-key-file'' flag or an account that authorized\nwith ``gcloud auth activate-service-account''",
          args: { name: "DURATION", description: "Int", suggestions: [] },
        },
        flag4900,
        flag4902,
        flag5091,
        {
          name: "--headers",
          description:
            "Specifies the headers to be used in the signed request.\nPossible headers are listed in the XML API's documentation:\nhttps://cloud.google.com/storage/docs/xml-api/reference-headers#headers",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag5453,
        {
          name: ["--http-verb", "-m"],
          description:
            "Specifies the HTTP verb to be authorized for use with the signed\nURL, default is GET. When using a signed URL to start\na resumable upload session, you will need to specify the\n``x-goog-resumable:start'' header in the request or else signature\nvalidation will fail",
          args: { name: "HTTP_VERB", description: "String", suggestions: [] },
        },
        flag5699,
        flag7356,
        {
          name: "--path-style-url",
          description:
            "Generate path-style signed URL.\n+\nBy default, virtual hosted-style signed URL is generated, except for\n[domain-named buckets](https://cloud.google.com/storage/docs/domain-name-verification).\nUse this flag to force the generation of path-style signed URL.\nSigned URL generated for domain-named buckets is always path-style.\nLearn more about the two URL styles\n[here](https://cloud.google.com/storage/docs/request-endpoints#xml-api)",
        },
        {
          name: "--private-key-file",
          description:
            "The service account private key used to generate the cryptographic\nsignature for the generated URL. Must be in PKCS12 or JSON format.\nIf encrypted, will prompt for the passphrase used to protect the\nprivate key file (default ``notasecret'').\n+\nNote: Service account keys are a security risk if not managed\ncorrectly. Review [best practices for managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys)\nbefore using this option",
          args: {
            name: "PRIVATE_KEY_FILE",
            description: "String",
            suggestions: [],
          },
        },
        {
          name: ["--private-key-password", "-p"],
          description:
            "Specifies the PRIVATE_KEY_FILE password instead of prompting",
          args: {
            name: "PRIVATE_KEY_PASSWORD",
            description: "String",
            suggestions: [],
          },
        },
        flag11637,
        {
          name: "--query-params",
          description:
            "Specifies the query parameters to be used in the signed request.\nPossible query parameters are listed in the XML API's documentation:\nhttps://cloud.google.com/storage/docs/xml-api/reference-headers#query",
          args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
        },
        flag11946,
        {
          name: ["--region", "-r"],
          description:
            "Specifies the region in which the resources for which you are\ncreating signed URLs are stored.\n+\nDefault value is ``auto'' which will cause {command} to fetch the\nregion for the resource. When auto-detecting the region, the current\nuser's credentials, not the credentials from PRIVATE_KEY_FILE,\nare used to fetch the bucket's metadata",
          args: { name: "REGION", description: "String", suggestions: [] },
        },
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "URL",
        description: "The URLs to be signed. May contain wildcards",
        isVariadic: true,
      },
    },
  ],
};

export default completionSpec;
