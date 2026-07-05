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
const flag489: Fig.Option = {
  name: "--alternative-name-servers",
  description:
    "List of alternative name servers to forward to. Non-RFC1918 addresses will forward to the target through the Internet.RFC1918 addresses will forward through the VPC",
  args: { name: "NAME_SERVERS", description: "List", suggestions: [] },
};
const flag1021: Fig.Option = {
  name: "--backup-data-trickle-ratio",
  description:
    "Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy",
  args: {
    name: "BACKUP_DATA_TRICKLE_RATIO",
    description: "Float",
    suggestions: [],
  },
};
const flag1110: Fig.Option = {
  name: "--behavior",
  description:
    "The response policy rule query behavior. _BEHAVIOR_ must be one of: *behaviorUnspecified*, *bypassResponsePolicy*",
  args: {
    name: "BEHAVIOR",
    description: "String",
    suggestions: ["behaviorUnspecified", "bypassResponsePolicy"],
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
const flag2994: Fig.Option = {
  name: "--denial-of-existence",
  description:
    "Requires DNSSEC enabled. _DENIAL_OF_EXISTENCE_ must be one of: *nsec*, *nsec3*",
  args: {
    name: "DENIAL_OF_EXISTENCE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["nsec", "nsec3"],
  },
};
const flag3274: Fig.Option = {
  name: "--description",
  description: "Short description for the managed zone",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3861: Fig.Option = {
  name: "--dnssec-state",
  description:
    "The DNSSEC state for this managed zone. _DNSSEC_STATE_ must be one of:\n+\n*off*::: Disable DNSSEC for the managed zone.\n*on*::: Enable DNSSEC for the managed zone.\n*transfer*::: Enable DNSSEC and allow transferring a signed zone in or out.\n:::\n+",
  args: {
    name: "DNSSEC_STATE",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: ["off", "on", "transfer"],
  },
};
const flag4133: Fig.Option = {
  name: "--enable-geo-fencing",
  description: "Specifies whether to enable fencing for geo queries",
};
const flag4143: Fig.Option = {
  name: "--enable-health-checking",
  description: "Required if specifying forwarding rule names for rrdata",
};
const flag4154: Fig.Option = {
  name: "--enable-inbound-forwarding",
  description:
    "Specifies whether to allow networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. Defaults to False",
};
const flag4199: Fig.Option = {
  name: "--enable-logging",
  description: "Specifies whether to enable query logging. Defaults to False",
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
const flag5102: Fig.Option = {
  name: "--forwarding-targets",
  description:
    "List of IPv4/IPv6 addresses or one domain name of the target name server that the zone will forward queries to. Ignored for `public` visibility. Non-RFC1918 addresses will forward to the target through the Internet. RFC1918 addresses will forward through the VPC",
  args: { name: "IP_ADDRESSES", description: "List", suggestions: [] },
};
const flag5279: Fig.Option = {
  name: "--gkeclusters",
  description:
    "List of GKE clusters that the zone should be visible in if the zone visibility is [private]",
  args: { name: "GKECLUSTERS", description: "List", suggestions: [] },
};
const flag5280: Fig.Option = {
  name: "--gkeclusters",
  description:
    "The comma-separated list of GKE cluster names to associate with the response policy",
  args: { name: "GKECLUSTERS", description: "List", suggestions: [] },
};
const flag5438: Fig.Option = {
  name: "--health-check",
  description:
    "Specifies the health check to be used for public IP health checking. Either the health check name or full resource path should be provided",
  args: { name: "HEALTH_CHECK", description: "String", suggestions: [] },
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
const flag6358: Fig.Option = {
  name: "--ksk-algorithm",
  description:
    "String mnemonic specifying the DNSSEC algorithm of the key-signing key. Requires DNSSEC enabled. _KSK_ALGORITHM_ must be one of: *ecdsap256sha256*, *ecdsap384sha384*, *rsasha1*, *rsasha256*, *rsasha512*",
  args: {
    name: "KSK_ALGORITHM",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: [
      "ecdsap256sha256",
      "ecdsap384sha384",
      "rsasha1",
      "rsasha256",
      "rsasha512",
    ],
  },
};
const flag6359: Fig.Option = {
  name: "--ksk-key-length",
  description: "Length of the key-signing key in bits. Requires DNSSEC enabled",
  args: { name: "KSK_KEY_LENGTH", description: "Int", suggestions: [] },
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
const flag6555: Fig.Option = {
  name: "--local-data",
  description:
    'All resource record sets for this selector, one per resource record\ntype. The name must match the dns_name.\n+\nThis is a repeated argument that can be specified multiple times to specify\nmultiple local data rrsets.\n(e.g. --local-data=name="zone.com.",type="A",ttl=21600,rrdata="1.2.3.4 "\n--local-data=name="www.zone.com.",type="CNAME",ttl=21600,rrdata="1.2.3.4|5.6.7.8")\n+\n*name*::: The DnsName of a resource record set.\n+\n*type*::: Type of all resource records in this set. For example, A, AAAA, SOA, MX,\nNS, TXT ...\n+\n*ttl*::: Number of seconds that this ResourceRecordSet can be cached by resolvers.\n+\n*rrdatas*::: The list of datas for this record, split by "|"',
  args: { name: "LOCAL_DATA", description: "Dict", suggestions: [] },
};
const flag6848: Fig.Option = {
  name: "--location",
  description:
    "Specifies the desired service location the request is sent to. Defaults to Cloud DNS global service. Use --location=global if you want to target the global service",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7342: Fig.Option = {
  name: "--log-dns-queries",
  description:
    "Specifies whether to enable query logging. Defaults to False. Use *--log-dns-queries* to enable and *--no-log-dns-queries* to disable",
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7536: Fig.Option = {
  name: "--managed-reverse-lookup",
  description:
    "Specifies whether this zone is a managed reverse lookup zone, required for Cloud DNS to correctly resolve Non-RFC1918 PTR records",
};
const flag8303: Fig.Option = {
  name: "--networks",
  description:
    "List of networks that the zone should be visible in if the zone visibility is [private]",
  args: { name: "NETWORK", description: "List", suggestions: [] },
};
const flag8306: Fig.Option = {
  name: "--networks",
  description:
    "The comma-separated list of network names to associate with the response policy",
  args: { name: "NETWORKS", description: "List", suggestions: [] },
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
const flag11568: Fig.Option = {
  name: "--private-alternative-name-servers",
  description:
    "List of alternative name servers to forward to. All addresses specified for this parameter will be reached through the VPC",
  args: { name: "NAME_SERVERS", description: "List", suggestions: [] },
};
const flag11588: Fig.Option = {
  name: "--private-forwarding-targets",
  description:
    "List of IPv4/IPv6 addresses or one domain name of the target name server that the zone will forward queries to. Ignored for `public` visibility. All addresses specified for this parameter will be reached through the VPC",
  args: { name: "IP_ADDRESSES", description: "List", suggestions: [] },
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
const flag13046: Fig.Option = {
  name: "--response-policy",
  description:
    "The Cloud DNS response policy name response_policy_rule.\n+\nTo set the `response-policy` attribute:\n* provide the argument `response_policy_rule` on the command line with a fully specified name;\n* provide the argument `--response-policy` on the command line",
  args: { name: "RESPONSE_POLICY", description: "String", suggestions: [] },
};
const flag13195: Fig.Option = {
  name: "--routing-policy-backup-data-type",
  description:
    "For FAILOVER routing policies, the type of routing policy the backup data uses. Currently, this must be GEO. _ROUTING_POLICY_BACKUP_DATA_TYPE_ must be (only one value is supported): *GEO*",
  args: {
    name: "ROUTING_POLICY_BACKUP_DATA_TYPE",
    description: "String",
    suggestions: ["GEO"],
  },
};
const flag13196: Fig.Option = {
  name: "--routing-policy-backup-data",
  description:
    "(DEPRECATED) Specify the backup configuration for a primary backup routing policy. This backup configuration uses the same format as the routing-policy-data argument because it functions as another geolocation routing policy.\n+\nThe `--routing-policy-backup-data` flag is deprecated. Use --routing-policy-backup-item instead",
  args: {
    name: "ROUTING_POLICY_BACKUP_DATA",
    description:
      "Googlecloudsdk.command_lib.dns.flags:RoutingPolicyBackupDataArg",
    suggestions: [],
  },
};
const flag13197: Fig.Option = {
  name: "--routing-policy-backup-item",
  description:
    'Specify this argument multiple times to define multiple items\nfor a primary backup routing policy.\n+\n(e.g. --routing-policy-backup-item=location=us-east1-a,rrdatas=1.2.3.4;2.3.4.5,external_endpoints=3.4.5.6;4.5.6.7\n--routing-policy-backup-item=location=us-east1-b,rrdatas=10.0.0.1;10.0.0.2,external_endpoints=10.0.0.4)\n+\n*location*::: The location corresponding to the item.\n+\n*rrdatas*::: The list of rrdatas, split by ";".\n+\n*external_endpoints*::: The list of health checked ips, split by ";".\n+\n*internal_load_balancers*::: The list of health checked internal load balancers, split by ";"',
  args: {
    name: "ROUTING_POLICY_BACKUP_ITEM",
    description: "Dict",
    suggestions: [],
  },
};
const flag13198: Fig.Option = {
  name: "--routing-policy-data",
  description:
    '(DEPRECATED) The routing policy data supports one of two formats below, depending on the choice of routing-policy-type.\n+\nFor --routing-policy-type = "WRR" this flag indicates the weighted round robin policy data. The field accepts a semicolon-delimited list of the format "${weight_percent}=${rrdata},${rrdata}". Specify weight as a non-negative number (0 is allowed). Ratio of traffic routed to the target is calculated from the ratio of individual weight over the total across all weights.\n+\nFor --routing-policy-type = "GEO" this flag indicates the geo-locations policy data. The field accepts a semicolon-delimited list of the format "${region}=${rrdata},${rrdata}". Each rrdata can either be an IP address or a reference to a forwarding rule of the format "FORWARDING_RULE_NAME", "FORWARDING_RULE_NAME@{region}", "FORWARDING_RULE_NAME@global", or the full resource path of the forwarding rule.\n+\nThe `--routing-policy-data` flag is deprecated. Use --routing-policy-item instead',
  args: {
    name: "ROUTING_POLICY_DATA",
    description:
      "Googlecloudsdk.command_lib.dns.flags:RoutingPolicyDataArgType",
    suggestions: [],
  },
};
const flag13199: Fig.Option = {
  name: "--routing-policy-item",
  description:
    'Specify this argument multiple times for a weighted round robin (WRR)\nor geolocation routing policy. Use this repeated argument for only one\nrouting policy type (WRR or geolocation), not both. Similarly, use it\nonly for health checking either internal load balancers or external IP\naddresses, not both.\n+\n(e.g. --routing-policy-item=weight=1,rrdatas=1.2.3.4;2.3.4.5,external_endpoints=3.4.5.6;4.5.6.7\n--routing-policy-item=weight=1,rrdatas=10.0.0.1;10.0.0.2,external_endpoints=10.0.0.4)\n+\n*weight*::: The weight of the item. This is specified only for WRR routing policy items.\n+\n*location*::: The location corresponding to the item. This is specified only for GEO routing policy items.\n+\n*rrdatas*::: The list of rrdatas, split by ";".\n+\n*external_endpoints*::: The list of health checked ips, split by ";".\n+\n*internal_load_balancers*::: The list of health checked internal load balancers, split by ";"',
  args: { name: "ROUTING_POLICY_ITEM", description: "Dict", suggestions: [] },
};
const flag13200: Fig.Option = {
  name: "--routing-policy-primary-data",
  description:
    'The primary configuration for a primary backup routing policy. This configuration is a list of forwarding rules of the format "FORWARDING_RULE_NAME", "FORWARDING_RULE_NAME@scope", or the full resource path of the forwarding rule',
  args: {
    name: "ROUTING_POLICY_PRIMARY_DATA",
    description:
      "Googlecloudsdk.command_lib.dns.flags:RoutingPolicyPrimaryDataArg",
    suggestions: [],
  },
};
const flag13201: Fig.Option = {
  name: "--routing-policy-type",
  description:
    'Indicates what type of routing policy is being specified. As of this time, this field can take on either "WRR" for weighted round robin, "GEO" for geo location, or "FAILOVER" for a primary-backup configuration. This field cannot be modified - once a policy has a chosen type, the only way to change it is to delete the policy and add a new one with the different type. _ROUTING_POLICY_TYPE_ must be one of: *GEO*, *WRR*, *FAILOVER*',
  args: {
    name: "ROUTING_POLICY_TYPE",
    description: "String",
    suggestions: ["GEO", "WRR", "FAILOVER"],
  },
};
const flag13210: Fig.Option = {
  name: "--rrdatas",
  description:
    "DNS data (Address/CNAME/MX info, etc.) of the record-set. This is RDATA; the format of this information varies depending on the type and class of the resource record",
  args: { name: "RRDATA", description: "List", suggestions: [] },
};
const flag13874: Fig.Option = {
  name: "--skip-soa-update",
  description:
    "Skip incrementing the serial number of the SOA record when making changes to the record-sets",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14700: Fig.Option = {
  name: "--target-network",
  description:
    "Network ID of the Google Compute Engine private network to forward queries to",
  args: { name: "TARGET_NETWORK", description: "String", suggestions: [] },
};
const flag14709: Fig.Option = {
  name: "--target-project",
  description:
    "Project ID of the Google Compute Engine private network to forward queries to",
  args: { name: "TARGET_PROJECT", description: "String", suggestions: [] },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag14982: Fig.Option = {
  name: "--transaction-file",
  description: "Path of the file which contains the transaction",
  args: { name: "TRANSACTION_FILE", description: "String", suggestions: [] },
};
const flag15028: Fig.Option = {
  name: "--ttl",
  description: "TTL (time to live) for the record-set",
  args: { name: "TTL", description: "Int", suggestions: [] },
};
const flag15065: Fig.Option = {
  name: "--type",
  description: "DNS record type of the record-set (e.g. A, AAAA, MX etc.)",
  args: { name: "TYPE", description: "String", suggestions: [] },
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
const flag15696: Fig.Option = {
  name: ["--zone", "-z"],
  description: "Name of the managed zone whose record sets you want to manage",
  args: { name: "ZONE", description: "String", suggestions: [] },
};
const flag15855: Fig.Option = {
  name: "--zsk-algorithm",
  description:
    "String mnemonic specifying the DNSSEC algorithm of the key-signing key. Requires DNSSEC enabled. _ZSK_ALGORITHM_ must be one of: *ecdsap256sha256*, *ecdsap384sha384*, *rsasha1*, *rsasha256*, *rsasha512*",
  args: {
    name: "ZSK_ALGORITHM",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: [
      "ecdsap256sha256",
      "ecdsap384sha384",
      "rsasha1",
      "rsasha256",
      "rsasha512",
    ],
  },
};
const flag15856: Fig.Option = {
  name: "--zsk-key-length",
  description:
    "Length of the zone-signing key in bits. Requires DNSSEC enabled",
  args: { name: "ZSK_KEY_LENGTH", description: "Int", suggestions: [] },
};

const completionSpec: Fig.Spec = {
  name: "dns",
  description: "Manage your Cloud DNS managed-zones and record-sets",
  subcommands: [
    {
      name: "dns-keys",
      description: "Manage Cloud DNS DNSKEY records",
      subcommands: [
        {
          name: "describe",
          description: "Show details about a DNS key resource",
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
            {
              name: "--zone",
              description:
                "The name of the managed-zone the DNSKEY record belongs to",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
          args: { name: "KEY-ID", description: "The DNS key identifier" },
        },
        {
          name: "list",
          description: "List DNS key resources",
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
            flag13948,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--zone",
              description:
                "The name of the managed-zone you want to list DNSKEY records for",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
        },
      ],
    },
    {
      name: "managed-zones",
      description: "Manage your Cloud DNS managed-zones",
      subcommands: [
        {
          name: "create",
          description: "Create a Cloud DNS managed-zone",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2994,
            flag3274,
            {
              name: "--dns-name",
              description:
                "The DNS name suffix that will be managed with the created zone",
              args: {
                name: "DNS_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag3861,
            flag4900,
            flag4902,
            flag5091,
            flag5102,
            flag5279,
            flag5453,
            flag5699,
            flag6358,
            flag6359,
            {
              name: "--labels",
              description:
                "List of label KEY=VALUE pairs to add.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag6848,
            flag7342,
            flag7356,
            flag7536,
            flag8303,
            flag11588,
            flag11637,
            flag11946,
            {
              name: "--service-directory-namespace",
              description:
                "The fully qualified URL of the service directory namespace that should be associated with the zone. Ignored for `public` visibility zones",
              args: {
                name: "SERVICE_DIRECTORY_NAMESPACE",
                description: "String",
                suggestions: [],
              },
            },
            flag14700,
            flag14709,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--visibility",
              description:
                "Visibility of the zone. Public zones are visible to the public internet. Private zones are only visible in your internal networks denoted by the `--networks` flag. _VISIBILITY_ must be one of: *public*, *private*",
              args: {
                name: "VISIBILITY",
                description: "String",
                suggestions: ["public", "private"],
              },
            },
            flag15855,
            flag15856,
          ],
          args: {
            name: "ZONE_NAME",
            description: "The name of the managed-zone to be created",
          },
        },
        {
          name: "delete",
          description: "Delete an empty Cloud DNS managed-zone",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ZONE_NAME",
            description: "The name of the empty managed-zone to be deleted",
          },
        },
        {
          name: "describe",
          description: "View the details of a Cloud DNS managed-zone",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a Cloud DNS managed-zone",
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "list",
          description: "View the list of all your managed-zones",
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
            flag6848,
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
          name: "set-iam-policy",
          description: "Set the IAM policy for a Cloud DNS managed-zone",
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
              name: "--policy-file",
              description: "JSON or YAML file with the IAM policy",
              args: {
                name: "POLICY_FILE",
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
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an existing Cloud DNS managed-zone",
          options: [
            flag42,
            flag46,
            {
              name: "--async",
              description:
                "Return immediately, without waiting for the operation in progress to\ncomplete",
            },
            flag1201,
            {
              name: "--clear-labels",
              description:
                "Remove all labels. If `--update-labels` is also specified then\n`--clear-labels` is applied first.\n+\nFor example, to remove all labels:\n+\n    $ {command} --clear-labels\n+\nTo remove all existing labels and create two new labels,\n``foo'' and ``baz'':\n+\n    $ {command} --clear-labels --update-labels foo=bar,baz=qux",
            },
            flag2292,
            flag2994,
            flag3274,
            flag3861,
            flag4900,
            flag4902,
            flag5091,
            flag5102,
            flag5279,
            flag5453,
            flag5699,
            flag6358,
            flag6359,
            flag6848,
            flag7342,
            flag7356,
            flag7536,
            flag8303,
            flag11588,
            flag11637,
            flag11946,
            {
              name: "--remove-labels",
              description:
                "List of label keys to remove. If a label does not exist it is\nsilently ignored. If `--update-labels` is also specified then\n`--update-labels` is applied first",
              args: { name: "KEY", description: "List", suggestions: [] },
            },
            flag14700,
            flag14709,
            flag14975,
            {
              name: "--update-labels",
              description:
                "List of label KEY=VALUE pairs to update. If a label exists, its value is modified. Otherwise, a new label is created.\n+\nKeys must start with a lowercase character and contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers. Values must contain only hyphens (`-`), underscores (```_```), lowercase characters, and numbers",
              args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
            },
            flag15315,
            flag15424,
            flag15855,
            flag15856,
          ],
          args: {
            name: "ZONE",
            description:
              "ID of the zone or fully qualified identifier for the zone.\n+\nTo set the `zone` attribute:\n* provide the argument `zone` on the command line",
          },
        },
      ],
    },
    {
      name: "operations",
      description: "Manage your Cloud DNS operations",
      subcommands: [
        {
          name: "describe",
          description: "Describe an operation",
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
            {
              name: ["--zone", "-z"],
              description: "Name of zone to get operations from",
              args: { name: "ZONE", description: "String", suggestions: [] },
            },
          ],
          args: {
            name: "OPERATION_ID",
            description: "The id of the operation to display",
          },
        },
        {
          name: "list",
          description: "List Cloud DNS operations",
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
            flag13948,
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--zones",
              description:
                "IDs of the zones or fully qualified identifiers for the zones.\n+\nTo set the `zone` attribute:\n* provide the argument `--zones` on the command line",
              args: { name: "ZONES", description: "List", suggestions: [] },
            },
          ],
        },
      ],
    },
    {
      name: "policies",
      description: "Manage your Cloud DNS policies",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Cloud DNS policy",
          options: [
            flag42,
            flag46,
            flag489,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A description of the policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-dns64-all-queries",
              description:
                "Specifies whether to allow networks bound to this policy to use DNS64 for IPv6-only VM instances",
            },
            flag4154,
            flag4199,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--networks",
              description:
                "The comma separated list of network names to associate with the policy",
              args: { name: "NETWORKS", description: "List", suggestions: [] },
            },
            flag11568,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud DNS policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud DNS policy",
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
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line",
          },
        },
        {
          name: "list",
          description: "View the list of all your Cloud DNS policies",
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
          name: "update",
          description: "Update an existing Cloud DNS policy",
          options: [
            flag42,
            flag46,
            flag489,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A description of the policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-dns64-all-queries",
              description:
                "Specifies whether to allow networks bound to this policy to use DNS64 for IPv6-only VM instances. Use *--enable-dns64-all-queries* to enable and *--no-enable-dns64-all-queries* to disable",
            },
            flag4154,
            flag4199,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--networks",
              description:
                "The comma separated list of network names to associate with the policy",
              args: { name: "NETWORKS", description: "List", suggestions: [] },
            },
            flag11568,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY",
            description:
              "ID of the policy or fully qualified identifier for the policy.\n+\nTo set the `policy` attribute:\n* provide the argument `policy` on the command line",
          },
        },
      ],
    },
    {
      name: "project-info",
      description: "View Cloud DNS related information for a project",
      subcommands: [
        {
          name: "describe",
          description: "View Cloud DNS related information for a project",
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
            name: "PROJECT_ID",
            description:
              "The identifier for the project you want DNS related info for",
          },
        },
      ],
    },
    {
      name: "record-sets",
      description: "Manage the record-sets within your managed-zones",
      subcommands: [
        {
          name: "changes",
          description:
            "View details about changes to your Cloud DNS record-sets",
          subcommands: [
            {
              name: "describe",
              description: "View the details of a change",
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
                flag15696,
              ],
              args: {
                name: "CHANGE_ID",
                description: "The ID of the change you want details for",
              },
            },
            {
              name: "list",
              description:
                "View the list of changes that have been made to your record-sets",
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
                {
                  name: "--sort-order",
                  description:
                    "Sort order for listing. _SORT_ORDER_ must be one of: *ascending*, *descending*",
                  args: {
                    name: "SORT_ORDER",
                    description: "String",
                    suggestions: ["ascending", "descending"],
                  },
                },
                flag14975,
                flag15249,
                flag15315,
                flag15424,
                flag15696,
              ],
            },
          ],
        },
        {
          name: "create",
          description: "Creates a record-set in a managed-zone",
          options: [
            flag42,
            flag46,
            flag1021,
            flag1201,
            flag2292,
            flag4133,
            flag4143,
            flag4900,
            flag4902,
            flag5091,
            flag5438,
            flag5453,
            flag5699,
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag13196,
            flag13195,
            flag13197,
            flag13198,
            flag13199,
            flag13200,
            flag13201,
            flag13210,
            flag14975,
            flag15028,
            flag15065,
            flag15315,
            flag15424,
            flag15696,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
        {
          name: "delete",
          description: "Delete a record-set in a managed-zone",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15065,
            flag15315,
            flag15424,
            flag15696,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
        {
          name: "describe",
          description: "Describe a record-set in a managed-zone",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15065,
            flag15315,
            flag15424,
            flag15696,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
        {
          name: "export",
          description: "Export your record-sets into a file",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
            flag15696,
            {
              name: "--zone-file-format",
              description:
                "Indicates that records-file should be in the zone file format. When using this flag, expect the record-set to be exported to a BIND zone formatted file. If you omit this flag, the record-set is exported into a YAML formatted records file. Note, this format flag determines the format of the output recorded in the records-file; it is different from the global `--format` flag which affects console output alone",
            },
          ],
          args: {
            name: "RECORDS_FILE",
            description: "File to which record-sets should be exported",
          },
        },
        {
          name: "import",
          description: "Import record-sets into your managed-zone",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--delete-all-existing",
              description:
                "Indicates that all existing record-sets should be deleted before importing the record-sets in the records-file",
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--replace-origin-ns",
              description:
                "Indicates that NS records for the origin of a zone should be imported if defined",
            },
            flag13874,
            flag14975,
            flag15315,
            flag15424,
            flag15696,
            {
              name: "--zone-file-format",
              description:
                "Indicates that the input records-file is in BIND zone format. If omitted, indicates that the records-file is in YAML format",
            },
          ],
          args: {
            name: "RECORDS_FILE",
            description:
              "File from which record-sets should be imported. For examples of YAML-formatted and BIND zone-formatted records files, refer to https://cloud.google.com/dns/records#importing_and_exporting_record_sets",
          },
        },
        {
          name: "list",
          description: "View the list of record-sets in a managed-zone",
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
            flag6848,
            flag7356,
            {
              name: "--name",
              description: "Only list record-sets with this exact domain name",
              args: { name: "NAME", description: "String", suggestions: [] },
            },
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            {
              name: "--type",
              description:
                "Only list records of this type. If present, the --name parameter must also be present",
              args: { name: "TYPE", description: "String", suggestions: [] },
            },
            flag15249,
            flag15315,
            flag15424,
            flag15696,
          ],
        },
        {
          name: "transaction",
          description:
            "Make scriptable and transactional changes to your record-sets",
          subcommands: [
            {
              name: "abort",
              description: "Abort transaction",
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
                flag14982,
                flag15315,
                flag15424,
                flag15696,
              ],
            },
            {
              name: "add",
              description: "Append a record-set addition to the transaction",
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
                  name: "--name",
                  description: "DNS or domain name of the record-set to add",
                  args: {
                    name: "NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag14982,
                {
                  name: "--ttl",
                  description: "TTL (time to live) for the record-set to add",
                  args: { name: "TTL", description: "Int", suggestions: [] },
                },
                {
                  name: "--type",
                  description: "DNS record type of the record-set to add",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                flag15696,
              ],
              args: {
                name: "RRDATAS",
                description:
                  "DNS data (Address/CNAME/MX info, etc.) of the record-set to add. This is RDATA; the format of this information varies depending on the type and class of the resource record",
                isVariadic: true,
              },
            },
            {
              name: "describe",
              description: "Describe the transaction",
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
                flag14982,
                flag15315,
                flag15424,
                flag15696,
              ],
            },
            {
              name: "execute",
              description: "Execute the transaction on Cloud DNS",
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
                flag14982,
                flag15249,
                flag15315,
                flag15424,
                flag15696,
              ],
            },
            {
              name: "remove",
              description: "Append a record-set deletion to the transaction",
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
                  name: "--name",
                  description: "DNS name of the record-set to be removed",
                  args: {
                    name: "NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag14975,
                flag14982,
                {
                  name: "--ttl",
                  description: "TTL for the record-set to be removed",
                  args: { name: "TTL", description: "Int", suggestions: [] },
                },
                {
                  name: "--type",
                  description: "Type of the record-set to be removed",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                flag15696,
              ],
              args: {
                name: "RRDATAS",
                description: "DNS name of the record-set to be removed",
                isVariadic: true,
              },
            },
            {
              name: "start",
              description: "Start a transaction",
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
                flag13874,
                flag14975,
                flag14982,
                flag15315,
                flag15424,
                flag15696,
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Updates a record-set in a managed-zone",
          options: [
            flag42,
            flag46,
            flag1021,
            flag1201,
            flag2292,
            flag4133,
            flag4143,
            flag4900,
            flag4902,
            flag5091,
            flag5438,
            flag5453,
            flag5699,
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag13196,
            flag13195,
            flag13197,
            flag13198,
            flag13199,
            flag13200,
            flag13201,
            flag13210,
            flag14975,
            flag15028,
            flag15065,
            flag15315,
            flag15424,
            flag15696,
          ],
          args: {
            name: "DNS_NAME",
            description: "DNS or domain name of the record-set",
          },
        },
      ],
    },
    {
      name: "response-policies",
      description: "Manage your Cloud DNS response policy",
      subcommands: [
        {
          name: "create",
          description: "Creates a new Cloud DNS response policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A description of the response policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5280,
            flag5453,
            flag5699,
            flag6848,
            flag7356,
            flag8306,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy.\n+\nTo set the `response-policy` attribute:\n* provide the argument `response_policies` on the command line",
          },
        },
        {
          name: "delete",
          description: "Deletes a Cloud DNS response policy",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy.\n+\nTo set the `response-policy` attribute:\n* provide the argument `response_policies` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describes a Cloud DNS response policy",
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
            flag6848,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy.\n+\nTo set the `response-policy` attribute:\n* provide the argument `response_policies` on the command line",
          },
        },
        {
          name: "list",
          description:
            "Displays the list of all Cloud DNS response policies in a given project",
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
            flag6848,
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
          name: "rules",
          description: "Manage your Cloud DNS response policy rules",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Cloud DNS response policy rule",
              options: [
                flag42,
                flag46,
                flag1110,
                flag1201,
                flag2292,
                {
                  name: "--dns-name",
                  description:
                    "DNS name (wildcard or exact) to apply this rule to",
                  args: {
                    name: "DNS_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6555,
                flag6848,
                flag7356,
                flag11637,
                flag11946,
                flag13046,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule.\n+\nTo set the `response-policy-rule` attribute:\n* provide the argument `response_policy_rule` on the command line",
              },
            },
            {
              name: "delete",
              description: "Deletes a Cloud DNS response policy rule",
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
                flag6848,
                flag7356,
                flag11637,
                flag11946,
                flag13046,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule.\n+\nTo set the `response-policy-rule` attribute:\n* provide the argument `response_policy_rule` on the command line",
              },
            },
            {
              name: "describe",
              description:
                "Shows details about a Cloud DNS response policy rule",
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
                flag6848,
                flag7356,
                flag11637,
                flag11946,
                flag13046,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule.\n+\nTo set the `response-policy-rule` attribute:\n* provide the argument `response_policy_rule` on the command line",
              },
            },
            {
              name: "list",
              description:
                "Displays the list of all a Cloud DNS response policy rules",
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
                flag6848,
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
                name: "RESPONSE_POLICIES",
                description:
                  "ID of the response_policy or fully qualified identifier for the response_policy.\n+\nTo set the `response-policy` attribute:\n* provide the argument `response_policies` on the command line",
              },
            },
            {
              name: "update",
              description: "Updates a new Cloud DNS response policy rule",
              options: [
                flag42,
                flag46,
                flag1110,
                flag1201,
                flag2292,
                {
                  name: "--dns-name",
                  description:
                    "DNS name (wildcard or exact) to apply this rule to",
                  args: {
                    name: "DNS_NAME",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6555,
                flag6848,
                flag7356,
                flag11637,
                flag11946,
                flag13046,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "RESPONSE_POLICY_RULE",
                description:
                  "ID of the response_policy_rule or fully qualified identifier for the response_policy_rule.\n+\nTo set the `response-policy-rule` attribute:\n* provide the argument `response_policy_rule` on the command line",
              },
            },
          ],
        },
        {
          name: "update",
          description: "Updates a Cloud DNS response policy",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A description of the response policy",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5280,
            flag5453,
            flag5699,
            flag6848,
            flag7356,
            flag8306,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "RESPONSE_POLICIES",
            description:
              "ID of the response_policy or fully qualified identifier for the response_policy.\n+\nTo set the `response-policy` attribute:\n* provide the argument `response_policies` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
