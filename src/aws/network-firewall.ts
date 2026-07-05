// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "network-firewall",
  description:
    "This is the API Reference for Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors.  The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the Amazon Web Services REST APIs, see Amazon Web Services APIs.  To view the complete list of Amazon Web Services Regions where Network Firewall is available, see Service endpoints and quotas in the Amazon Web Services General Reference.  To access Network Firewall using the IPv4 REST API endpoint: https://network-firewall.<region>.amazonaws.com   To access Network Firewall using the Dualstack (IPv4 and IPv6) REST API endpoint: https://network-firewall.<region>.aws.api   Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see Amazon Web Services SDKs. For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the Network Firewall Developer Guide. Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source network analysis and threat detection engine. Network Firewall supports Suricata version 7.0.3. For information about Suricata, see the Suricata website and the Suricata User Guide.  You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples:    Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and block all other forms of traffic.   Use custom lists of known bad domains to limit the types of domain names that your applications can access.   Perform deep packet inspection on traffic entering or leaving your VPC.   Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.   To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see Amazon VPC User Guide. To start using Network Firewall, do the following:    (Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC.    In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall.    In Network Firewall, define the firewall behavior as follows:    Create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have.    Create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior.      In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.   In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.   After your firewall is established, you can add firewall endpoints for new Availability Zones by following the prior steps for the Amazon VPC setup and firewall subnet definitions. You can also add endpoints to Availability Zones that you're using in the firewall, either for the same VPC or for another VPC, by following the prior steps for the Amazon VPC setup, and defining the new VPC subnets as VPC endpoint associations",
  subcommands: [
    {
      name: "accept-network-firewall-transit-gateway-attachment",
      description:
        "Accepts a transit gateway attachment request for Network Firewall. When you accept the attachment request, Network Firewall creates the necessary routing components to enable traffic flow between the transit gateway and firewall endpoints. You must accept a transit gateway attachment to complete the creation of a transit gateway-attached firewall, unless auto-accept is enabled on the transit gateway. After acceptance, use DescribeFirewall to verify the firewall status. To reject an attachment instead of accepting it, use RejectNetworkFirewallTransitGatewayAttachment.  It can take several minutes for the attachment acceptance to complete and the firewall to become available",
      options: [
        {
          name: "--transit-gateway-attachment-id",
          description:
            "Required. The unique identifier of the transit gateway attachment to accept. This ID is returned in the response when creating a transit gateway-attached firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-availability-zones",
      description:
        "Associates the specified Availability Zones with a transit gateway-attached firewall. For each Availability Zone, Network Firewall creates a firewall endpoint to process traffic. You can specify one or more Availability Zones where you want to deploy the firewall. After adding Availability Zones, you must update your transit gateway route tables to direct traffic through the new firewall endpoints. Use DescribeFirewall to monitor the status of the new endpoints",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-mappings",
          description:
            "Required. The Availability Zones where you want to create firewall endpoints. You must specify at least one Availability Zone",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-firewall-policy",
      description:
        "Associates a FirewallPolicy to a Firewall.  A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-arn",
          description: "The Amazon Resource Name (ARN) of the firewall policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-subnets",
      description:
        "Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans.  This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-mappings",
          description:
            "The IDs of the subnets that you want to associate with the firewall",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "attach-rule-groups-to-proxy-configuration",
      description:
        "Attaches ProxyRuleGroup resources to a ProxyConfiguration  A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-groups",
          description:
            "The proxy rule group(s) to attach to the proxy configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.  To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-container-association",
      description:
        "Creates a container association for Network Firewall. A container association links container clusters (ECS or EKS) to Network Firewall, enabling dynamic IP resolution for firewall rules based on container attributes. To manage a container association's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about container associations, use ListContainerAssociations and DescribeContainerAssociation",
      options: [
        {
          name: "--container-association-name",
          description:
            "The descriptive name of the container association. You can't change the name of a container association after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the container association",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of container orchestration platform for the clusters in this association. Valid values are ECS and EKS. You can't change the type after creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-monitoring-configurations",
          description:
            "The list of container monitoring configurations that define which clusters and container attributes to monitor",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-firewall",
      description:
        "Creates an Network Firewall Firewall and accompanying FirewallStatus for a VPC.  The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource.  After you create a firewall, you can provide additional settings, like the logging configuration.  To update the settings for a firewall, you use the operations that apply to the settings themselves, for example UpdateLoggingConfiguration, AssociateSubnets, and UpdateFirewallDeleteProtection.  To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about firewalls, use ListFirewalls and DescribeFirewall. To generate a report on the last 30 days of traffic monitored by a firewall, use StartAnalysisReport",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the FirewallPolicy that you want to use for the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The unique identifier of the VPC where Network Firewall should create the firewall.  You can't change this setting after you create the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-mappings",
          description:
            "The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each subnet",
          args: {
            name: "list",
          },
        },
        {
          name: "--delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE",
        },
        {
          name: "--no-delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE",
        },
        {
          name: "--subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--no-subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--no-firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--description",
          description: "A description of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains settings for encryption of your firewall resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enabled-analysis-types",
          description:
            "An optional setting indicating the specific traffic analysis types to enable on the firewall",
          args: {
            name: "list",
          },
        },
        {
          name: "--transit-gateway-id",
          description:
            "Required when creating a transit gateway-attached firewall. The unique identifier of the transit gateway to attach to this firewall. You can provide either a transit gateway from your account or one that has been shared with you through Resource Access Manager.  After creating the firewall, you cannot change the transit gateway association. To use a different transit gateway, you must create a new firewall.  For information about creating firewalls, see CreateFirewall. For specific guidance about transit gateway-attached firewalls, see Considerations for transit gateway-attached firewalls in the Network Firewall Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-mappings",
          description:
            "Required. The Availability Zones where you want to create firewall endpoints for a transit gateway-attached firewall. You must specify at least one Availability Zone. Consider enabling the firewall in every Availability Zone where you have workloads to maintain Availability Zone isolation. You can modify Availability Zones later using AssociateAvailabilityZones or DisassociateAvailabilityZones, but this may briefly disrupt traffic. The AvailabilityZoneChangeProtection setting controls whether you can make these modifications",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone-change-protection",
          description:
            "Optional. A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to TRUE, you cannot add or remove Availability Zones without first disabling this protection using UpdateAvailabilityZoneChangeProtection. Default value: FALSE",
        },
        {
          name: "--no-availability-zone-change-protection",
          description:
            "Optional. A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to TRUE, you cannot add or remove Availability Zones without first disabling this protection using UpdateAvailabilityZoneChangeProtection. Default value: FALSE",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-firewall-policy",
      description:
        "Creates the firewall policy for the firewall according to the specifications.  An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls",
      options: [
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy",
          description:
            "The rule groups and policy actions to use in the firewall policy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the firewall policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains settings for encryption of your firewall policy resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-proxy",
      description:
        "Creates an Network Firewall Proxy  Attaches a Proxy configuration to a NAT Gateway.  To manage a proxy's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxies, use ListProxies and DescribeProxy",
      options: [
        {
          name: "--proxy-name",
          description:
            "The descriptive name of the proxy. You can't change the name of a proxy after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--nat-gateway-id",
          description:
            "A unique identifier for the NAT gateway to use with proxy resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--listener-properties",
          description: "Listener properties for HTTP and HTTPS traffic",
          args: {
            name: "list",
          },
        },
        {
          name: "--tls-intercept-properties",
          description:
            "TLS decryption on traffic to filter on attributes in the HTTP header",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-proxy-configuration",
      description:
        "Creates an Network Firewall ProxyConfiguration  A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration.  To manage a proxy configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxies, use ListProxyConfigurations and DescribeProxyConfiguration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the proxy configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-names",
          description:
            "The proxy rule group name(s) to attach to the proxy configuration. You must specify the ARNs or the names, and you can specify both",
          args: {
            name: "list",
          },
        },
        {
          name: "--rule-group-arns",
          description:
            "The proxy rule group arn(s) to attach to the proxy configuration. You must specify the ARNs or the names, and you can specify both",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-rule-phase-actions",
          description:
            "Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-proxy-rule-group",
      description:
        "Creates an Network Firewall ProxyRuleGroup  Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations.  To manage a proxy rule group's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about proxy rule groups, use ListProxyRuleGroups and DescribeProxyRuleGroup. To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule",
      options: [
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the proxy rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-proxy-rules",
      description:
        "Creates Network Firewall ProxyRule resources.  Attaches new proxy rule(s) to an existing proxy rule group.  To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule",
      options: [
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "Individual rules that define match conditions and actions for application-layer traffic. Rules specify what to inspect (domains, headers, methods) and what action to take (allow, deny, alert)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-rule-group",
      description:
        "Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags.  You provide your rule group specification in your request using either RuleGroup or Rules",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group",
          description:
            "An object that defines the rule group rules.   You must provide either this rule group setting or a Rules setting, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rules",
          description:
            "A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups.   You must provide either this rules setting or a populated RuleGroup setting, but not both.   You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity",
          description:
            'The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.  You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with DryRun set to TRUE.   You can\'t change or exceed this capacity when you update the rule group, so leave room for your rule group to grow.    Capacity for a stateless rule group  For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules that you expect to have in the rule group.  To calculate the capacity requirement of a single rule, multiply the capacity requirement values of each of the rule\'s match settings:   A match setting with no criteria specified has a value of 1.    A match setting with Any specified has a value of 1.    All other match settings have a value equal to the number of elements provided in the setting. For example, a protocol setting ["UDP"] and a source setting ["10.0.0.0/24"] each have a value of 1. A protocol setting ["UDP","TCP"] has a value of 2. A source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"] has a value of 3.    A rule with no criteria specified in any of its match settings has a capacity requirement of 1. A rule with protocol setting ["UDP","TCP"], source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"], and a single specification or no specification for each of the other match settings has a capacity requirement of 6.   Capacity for a stateful rule group  For a stateful rule group, the minimum capacity required is the number of individual rules that you expect to have in the rule group',
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains settings for encryption of your rule group resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-metadata",
          description:
            "A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--analyze-rule-group",
          description:
            "Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis and then creates the rule group for you. To run the stateless rule group analyzer without creating the rule group, set DryRun to TRUE",
        },
        {
          name: "--no-analyze-rule-group",
          description:
            "Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis and then creates the rule group for you. To run the stateless rule group analyzer without creating the rule group, set DryRun to TRUE",
        },
        {
          name: "--summary-configuration",
          description:
            "An object that contains a RuleOptions array of strings. You use RuleOptions to determine which of the following RuleSummary values are returned in response to DescribeRuleGroupSummary.    Metadata - returns    Msg     SID",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-tls-inspection-configuration",
      description:
        "Creates an Network Firewall TLS inspection configuration. Network Firewall uses TLS inspection configurations to decrypt your firewall's inbound and outbound SSL/TLS traffic. After decryption, Network Firewall inspects the traffic according to your firewall policy's stateful rules, and then re-encrypts it before sending it to its destination. You can enable inspection of your firewall's inbound traffic, outbound traffic, or both. To use TLS inspection with your firewall, you must first import or provision certificates using ACM, create a TLS inspection configuration, add that configuration to a new firewall policy, and then associate that policy with your firewall. To update the settings for a TLS inspection configuration, use UpdateTLSInspectionConfiguration. To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about TLS inspection configurations, use ListTLSInspectionConfigurations and DescribeTLSInspectionConfiguration.  For more information about TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide",
      options: [
        {
          name: "--tls-inspection-configuration-name",
          description:
            "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--tls-inspection-configuration",
          description:
            "The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.  Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination. To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the TLS inspection configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see Encryption at rest with Amazon Web Services Key Managment Service in the Network Firewall Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-vpc-endpoint-association",
      description:
        "Creates a firewall endpoint for an Network Firewall firewall. This type of firewall endpoint is independent of the firewall endpoints that you specify in the Firewall itself, and you define it in addition to those endpoints after the firewall has been created. You can define a VPC endpoint association using a different VPC than the one you used in the firewall specifications",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The unique identifier of the VPC where you want to create a firewall endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-mapping",
          description:
            "The ID for a subnet that's used in an association with a firewall. This is used in CreateFirewall, AssociateSubnets, and CreateVpcEndpointAssociation. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-container-association",
      description:
        "Deletes the specified container association. When you delete a container association, Network Firewall stops monitoring the associated container clusters and removes the resolved IP addresses from firewall rules",
      options: [
        {
          name: "--container-association-name",
          description:
            "The descriptive name of the container association. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-association-arn",
          description:
            "The Amazon Resource Name (ARN) of the container association. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-firewall",
      description:
        "Deletes the specified Firewall and its FirewallStatus. This operation requires the firewall's DeleteProtection flag to be FALSE. You can't revert this operation.  You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling DescribeFirewall. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely. To delete a firewall, remove the delete protection if you need to using UpdateFirewallDeleteProtection, then delete the firewall by calling DeleteFirewall",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-firewall-policy",
      description: "Deletes the specified FirewallPolicy",
      options: [
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall policy. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-network-firewall-transit-gateway-attachment",
      description:
        "Deletes a transit gateway attachment from a Network Firewall. Either the firewall owner or the transit gateway owner can delete the attachment.  After you delete a transit gateway attachment, traffic will no longer flow through the firewall endpoints.  After you initiate the delete operation, use DescribeFirewall to monitor the deletion status",
      options: [
        {
          name: "--transit-gateway-attachment-id",
          description:
            "Required. The unique identifier of the transit gateway attachment to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-proxy",
      description:
        "Deletes the specified Proxy.  Detaches a Proxy configuration from a NAT Gateway",
      options: [
        {
          name: "--nat-gateway-id",
          description: "The NAT Gateway the proxy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-name",
          description:
            "The descriptive name of the proxy. You can't change the name of a proxy after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-proxy-configuration",
      description: "Deletes the specified ProxyConfiguration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-proxy-rule-group",
      description: "Deletes the specified ProxyRuleGroup",
      options: [
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-proxy-rules",
      description:
        "Deletes the specified ProxyRule(s). currently attached to a ProxyRuleGroup",
      options: [
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The proxy rule(s) to remove from the existing proxy rule group",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resource-policy",
      description:
        "Deletes a resource policy that you created in a PutResourcePolicy request",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-rule-group",
      description: "Deletes the specified RuleGroup",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-tls-inspection-configuration",
      description: "Deletes the specified TLSInspectionConfiguration",
      options: [
        {
          name: "--tls-inspection-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the TLS inspection configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--tls-inspection-configuration-name",
          description:
            "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-vpc-endpoint-association",
      description:
        "Deletes the specified VpcEndpointAssociation. You can check whether an endpoint association is in use by reviewing the route tables for the Availability Zones where you have the endpoint subnet mapping. You can retrieve the subnet mapping by calling DescribeVpcEndpointAssociation. You define and update the route tables through Amazon VPC. As needed, update the route tables for the Availability Zone to remove the firewall endpoint for the association. When the route tables no longer use the firewall endpoint, you can remove the endpoint association safely",
      options: [
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-container-association",
      description: "Returns the properties of a container association",
      options: [
        {
          name: "--container-association-name",
          description:
            "The descriptive name of the container association. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-association-arn",
          description:
            "The Amazon Resource Name (ARN) of the container association. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-firewall",
      description: "Returns the data objects for the specified firewall",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-firewall-metadata",
      description:
        "Returns the high-level information about a firewall, including the Availability Zones where the Firewall is currently in use",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-firewall-policy",
      description: "Returns the data objects for the specified firewall policy",
      options: [
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall policy. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-flow-operation",
      description: "Returns key information about a specific flow operation",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The ID of the Availability Zone where the firewall is located. For example, us-east-2a. Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-id",
          description:
            "A unique identifier for the primary endpoint associated with a firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--flow-operation-id",
          description:
            "A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-logging-configuration",
      description:
        "Returns the logging configuration for the specified firewall",
      options: [
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-proxy",
      description: "Returns the data objects for the specified proxy",
      options: [
        {
          name: "--proxy-name",
          description:
            "The descriptive name of the proxy. You can't change the name of a proxy after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-proxy-configuration",
      description:
        "Returns the data objects for the specified proxy configuration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-proxy-rule",
      description:
        "Returns the data objects for the specified proxy configuration for the specified proxy rule group",
      options: [
        {
          name: "--proxy-rule-name",
          description:
            "The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-proxy-rule-group",
      description:
        "Returns the data objects for the specified proxy rule group",
      options: [
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-resource-policy",
      description:
        "Retrieves a resource policy that you created in a PutResourcePolicy request",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-rule-group",
      description: "Returns the data objects for the specified rule group",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--analyze-rule-group",
          description:
            "Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis",
        },
        {
          name: "--no-analyze-rule-group",
          description:
            "Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-rule-group-metadata",
      description:
        "High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling DescribeRuleGroup",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-arn",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-rule-group-summary",
      description:
        "Returns detailed information for a stateful rule group. For active threat defense Amazon Web Services managed rule groups, this operation provides insight into the protections enabled by the rule group, based on Suricata rule metadata fields. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups. To modify how threat information appears in summaries, use the SummaryConfiguration parameter in UpdateRuleGroup",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-arn",
          description:
            "Required. The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of rule group you want a summary for. This is a required field. Valid value: STATEFUL  Note that STATELESS exists but is not currently supported. If you provide STATELESS, an exception is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-tls-inspection-configuration",
      description:
        "Returns the data objects for the specified TLS inspection configuration",
      options: [
        {
          name: "--tls-inspection-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the TLS inspection configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--tls-inspection-configuration-name",
          description:
            "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-vpc-endpoint-association",
      description:
        "Returns the data object for the specified VPC endpoint association",
      options: [
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "detach-rule-groups-from-proxy-configuration",
      description:
        "Detaches ProxyRuleGroup resources from a ProxyConfiguration  A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-names",
          description:
            "The proxy rule group names to detach from the proxy configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--rule-group-arns",
          description:
            "The proxy rule group arns to detach from the proxy configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.  To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-availability-zones",
      description:
        "Removes the specified Availability Zone associations from a transit gateway-attached firewall. This removes the firewall endpoints from these Availability Zones and stops traffic filtering in those zones. Before removing an Availability Zone, ensure you've updated your transit gateway route tables to redirect traffic appropriately.  If AvailabilityZoneChangeProtection is enabled, you must first disable it using UpdateAvailabilityZoneChangeProtection.  To verify the status of your Availability Zone changes, use DescribeFirewall",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-mappings",
          description:
            "Required. The Availability Zones to remove from the firewall's configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-subnets",
      description:
        "Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The unique identifiers for the subnets that you want to disassociate",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-analysis-report-results",
      description:
        "The results of a COMPLETED analysis report generated with StartAnalysisReport. For more information, see AnalysisTypeReportResult",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-report-id",
          description:
            "The unique ID of the query that ran when you requested an analysis report",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-analysis-reports",
      description:
        "Returns a list of all traffic analysis reports generated within the last 30 days",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-container-associations",
      description:
        "Retrieves the metadata for the container associations that you have defined. You can optionally page through results",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-firewall-policies",
      description:
        "Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-firewalls",
      description:
        "Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs. Depending on your setting for max results and the number of firewalls, a single call might not return the full list",
      options: [
        {
          name: "--vpc-ids",
          description:
            "The unique identifiers of the VPCs that you want Network Firewall to retrieve the firewalls for. Leave this blank to retrieve all firewalls that you have defined",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-flow-operation-results",
      description:
        "Returns the results of a specific flow operation.  Flow operations let you manage the flows tracked in the flow table, also known as the firewall table. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--flow-operation-id",
          description:
            "A unique identifier for the flow operation. This ID is returned in the responses to start and list commands. You provide to describe commands",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The ID of the Availability Zone where the firewall is located. For example, us-east-2a. Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-id",
          description:
            "A unique identifier for the primary endpoint associated with a firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-flow-operations",
      description:
        "Returns a list of all flow operations ran in a specific firewall. You can optionally narrow the request scope by specifying the operation type or Availability Zone associated with a firewall's flow operations.  Flow operations let you manage the flows tracked in the flow table, also known as the firewall table. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The ID of the Availability Zone where the firewall is located. For example, us-east-2a. Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-id",
          description:
            "A unique identifier for the primary endpoint associated with a firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--flow-operation-type",
          description:
            "An optional string that defines whether any or all operation types are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-proxies",
      description:
        "Retrieves the metadata for the proxies that you have defined. Depending on your setting for max results and the number of proxies, a single call might not return the full list",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-proxy-configurations",
      description:
        "Retrieves the metadata for the proxy configuration that you have defined. Depending on your setting for max results and the number of proxy configurations, a single call might not return the full list",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-proxy-rule-groups",
      description:
        "Retrieves the metadata for the proxy rule groups that you have defined. Depending on your setting for max results and the number of proxy rule groups, a single call might not return the full list",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-rule-groups",
      description:
        "Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list",
      options: [
        {
          name: "--scope",
          description:
            "The scope of the request. The default setting of ACCOUNT or a setting of NULL returns all of the rule groups in your account. A setting of MANAGED returns all available managed rule groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-type",
          description:
            "Indicates the general category of the Amazon Web Services managed rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-status",
          description:
            "Filters the results to show only rule groups with the specified subscription status. Use this to find subscribed or unsubscribed rule groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        'Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tls-inspection-configurations",
      description:
        "Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-vpc-endpoint-associations",
      description:
        "Retrieves the metadata for the VPC endpoint associations that you have defined. If you specify a fireawll, this returns only the endpoint associations for that firewall.  Depending on your setting for max results and the number of associations, a single call might not return the full list",
      options: [
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. If you don't specify this, Network Firewall retrieves all VPC endpoint associations that you have defined",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-resource-policy",
      description:
        "Creates or updates an IAM policy for your rule group, firewall policy, or firewall. Use this to share these resources between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall.  For information about using sharing with Network Firewall resources, see Sharing Network Firewall resources in the Network Firewall Developer Guide. Use this operation to create or update a resource policy for your Network Firewall rule group, firewall policy, or firewall. In the resource policy, you specify the accounts that you want to share the Network Firewall resource with and the operations that you want the accounts to be able to perform.  When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared resource.     GetResourceShareInvitations - Returns the Amazon Resource Names (ARNs) of the resource share invitations.     AcceptResourceShareInvitation - Accepts the share invitation for a specified resource share.    For additional information about resource sharing using RAM, see Resource Access Manager User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the account that you want to share your Network Firewall resources with",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The IAM policy statement that lists the accounts that you want to share your Network Firewall resources with and the operations that you want the accounts to be able to perform.  For a rule group resource, you can specify the following operations in the Actions section of the statement:   network-firewall:CreateFirewallPolicy   network-firewall:UpdateFirewallPolicy   network-firewall:ListRuleGroups   For a firewall policy resource, you can specify the following operations in the Actions section of the statement:   network-firewall:AssociateFirewallPolicy   network-firewall:ListFirewallPolicies   For a firewall resource, you can specify the following operations in the Actions section of the statement:   network-firewall:CreateVpcEndpointAssociation   network-firewall:DescribeFirewallMetadata   network-firewall:ListFirewalls   In the Resource section of the statement, you specify the ARNs for the Network Firewall resources that you want to share with the account that you specified in Arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "reject-network-firewall-transit-gateway-attachment",
      description:
        "Rejects a transit gateway attachment request for Network Firewall. When you reject the attachment request, Network Firewall cancels the creation of routing components between the transit gateway and firewall endpoints. Only the transit gateway owner can reject the attachment. After rejection, no traffic will flow through the firewall endpoints for this attachment. Use DescribeFirewall to monitor the rejection status. To accept the attachment instead of rejecting it, use AcceptNetworkFirewallTransitGatewayAttachment.  Once rejected, you cannot reverse this action. To establish connectivity, you must create a new transit gateway-attached firewall",
      options: [
        {
          name: "--transit-gateway-attachment-id",
          description:
            "Required. The unique identifier of the transit gateway attachment to reject. This ID is returned in the response when creating a transit gateway-attached firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-analysis-report",
      description:
        "Generates a traffic analysis report for the timeframe and traffic type you specify. For information on the contents of a traffic analysis report, see AnalysisReport",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-type",
          description:
            "The type of traffic that will be used to generate a report",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-flow-capture",
      description:
        "Begins capturing the flows in a firewall, according to the filters you define. Captures are similar, but not identical to snapshots. Capture operations provide visibility into flows that are not closed and are tracked by a firewall's flow table. Unlike snapshots, captures are a time-boxed view.  A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort.   To avoid encountering operation limits, you should avoid starting captures with broad filters, like wide IP ranges. Instead, we recommend you define more specific criteria with FlowFilters, like narrow IP ranges, ports, or protocols",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The ID of the Availability Zone where the firewall is located. For example, us-east-2a. Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-id",
          description:
            "A unique identifier for the primary endpoint associated with a firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--minimum-flow-age-in-seconds",
          description:
            "The reqested FlowOperation ignores flows with an age (in seconds) lower than MinimumFlowAgeInSeconds. You provide this for start commands.  We recommend setting this value to at least 1 minute (60 seconds) to reduce chance of capturing flows that are not yet established",
          args: {
            name: "integer",
          },
        },
        {
          name: "--flow-filters",
          description:
            "Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-flow-flush",
      description:
        "Begins the flushing of traffic from the firewall, according to the filters you define. When the operation starts, impacted flows are temporarily marked as timed out before the Suricata engine prunes, or flushes, the flows from the firewall table.  While the flush completes, impacted flows are processed as midstream traffic. This may result in a temporary increase in midstream traffic metrics. We recommend that you double check your stream exception policy before you perform a flush operation",
      options: [
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The ID of the Availability Zone where the firewall is located. For example, us-east-2a. Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-association-arn",
          description:
            "The Amazon Resource Name (ARN) of a VPC endpoint association",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-endpoint-id",
          description:
            "A unique identifier for the primary endpoint associated with a firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--minimum-flow-age-in-seconds",
          description:
            "The reqested FlowOperation ignores flows with an age (in seconds) lower than MinimumFlowAgeInSeconds. You provide this for start commands",
          args: {
            name: "integer",
          },
        },
        {
          name: "--flow-filters",
          description:
            "Defines the scope a flow operation. You can use up to 20 filters to configure a single flow operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        'Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description:
        'Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-availability-zone-change-protection",
      description:
        "Modifies the AvailabilityZoneChangeProtection setting for a transit gateway-attached firewall. When enabled, this setting prevents accidental changes to the firewall's Availability Zone configuration. This helps protect against disrupting traffic flow in production environments. When enabled, you must disable this protection before using AssociateAvailabilityZones or DisassociateAvailabilityZones to modify the firewall's Availability Zone configuration",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--no-availability-zone-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-container-association",
      description:
        "Updates the properties of an existing container association. Use this to modify the container monitoring configurations or description",
      options: [
        {
          name: "--container-association-name",
          description:
            "The descriptive name of the container association. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-association-arn",
          description:
            "The Amazon Resource Name (ARN) of the container association. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the container association",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of container orchestration platform. This must match the type specified when the container association was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-monitoring-configurations",
          description:
            "The updated list of container monitoring configurations that define which clusters and container attributes to monitor",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The key:value pairs associated with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association. The token marks the state of the container association resource at the time of the request. To make an update to the container association, provide the token in your request. Network Firewall uses the token to ensure that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the container association again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-firewall-analysis-settings",
      description:
        "Enables specific types of firewall analysis on a specific firewall you define",
      options: [
        {
          name: "--enabled-analysis-types",
          description:
            "An optional setting indicating the specific traffic analysis types to enable on the firewall",
          args: {
            name: "list",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-firewall-delete-protection",
      description:
        "Modifies the flag, DeleteProtection, which indicates whether it is possible to delete the firewall. If the flag is set to TRUE, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE",
        },
        {
          name: "--no-delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-firewall-description",
      description:
        "Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The new description for the firewall. If you omit this setting, Network Firewall removes the description for the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-firewall-encryption-configuration",
      description:
        "A complex type that contains settings for encryption of your firewall resources",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description: "The Amazon Resource Name (ARN) of the firewall",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains optional Amazon Web Services Key Management Service (KMS) encryption settings for your Network Firewall resources. Your data is encrypted by default with an Amazon Web Services owned key that Amazon Web Services owns and manages for you. You can use either the Amazon Web Services owned key, or provide your own customer managed key. To learn more about KMS encryption of your Network Firewall resources, see Encryption at rest with Amazon Web Services Key Managment Service in the Network Firewall Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-firewall-policy",
      description: "Updates the properties of the specified firewall policy",
      options: [
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request.  To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall policy. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy",
          description:
            "The updated firewall policy to use for the firewall. You can't add or remove a TLSInspectionConfiguration after you create a firewall policy. However, you can replace an existing TLS inspection configuration with another TLSInspectionConfiguration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the firewall policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains settings for encryption of your firewall policy resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-firewall-policy-change-protection",
      description:
        "Modifies the flag, ChangeProtection, which indicates whether it is possible to change the firewall. If the flag is set to TRUE, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--no-firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-logging-configuration",
      description:
        "Sets the logging configuration for the specified firewall.  To change the logging configuration, retrieve the LoggingConfiguration by calling DescribeLoggingConfiguration, then change it and provide the modified object to this update call. You must change the logging configuration one LogDestinationConfig at a time inside the retrieved LoggingConfiguration object.  You can perform only one of the following actions in any call to UpdateLoggingConfiguration:    Create a new log destination object by adding a single LogDestinationConfig array element to LogDestinationConfigs.   Delete a log destination object by removing a single LogDestinationConfig array element from LogDestinationConfigs.   Change the LogDestination setting in a single LogDestinationConfig array element.   You can't change the LogDestinationType or LogType in a LogDestinationConfig. To change these settings, delete the existing LogDestinationConfig object and create a new one, using two separate calls to this update operation",
      options: [
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "Defines how Network Firewall performs logging for a firewall. If you omit this setting, Network Firewall disables logging for the firewall",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enable-monitoring-dashboard",
          description:
            "A boolean that lets you enable or disable the detailed firewall monitoring dashboard on the firewall.  The monitoring dashboard provides comprehensive visibility into your firewall's flow logs and alert logs. After you enable detailed monitoring, you can access these dashboards directly from the Monitoring page of the Network Firewall console.  Specify TRUE to enable the the detailed monitoring dashboard on the firewall. Specify FALSE to disable the the detailed monitoring dashboard on the firewall",
        },
        {
          name: "--no-enable-monitoring-dashboard",
          description:
            "A boolean that lets you enable or disable the detailed firewall monitoring dashboard on the firewall.  The monitoring dashboard provides comprehensive visibility into your firewall's flow logs and alert logs. After you enable detailed monitoring, you can access these dashboards directly from the Monitoring page of the Network Firewall console.  Specify TRUE to enable the the detailed monitoring dashboard on the firewall. Specify FALSE to disable the the detailed monitoring dashboard on the firewall",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-proxy",
      description: "Updates the properties of the specified proxy",
      options: [
        {
          name: "--nat-gateway-id",
          description: "The NAT Gateway the proxy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-name",
          description:
            "The descriptive name of the proxy. You can't change the name of a proxy after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--listener-properties-to-add",
          description: "Listener properties for HTTP and HTTPS traffic to add",
          args: {
            name: "list",
          },
        },
        {
          name: "--listener-properties-to-remove",
          description:
            "Listener properties for HTTP and HTTPS traffic to remove",
          args: {
            name: "list",
          },
        },
        {
          name: "--tls-intercept-properties",
          description:
            "TLS decryption on traffic to filter on attributes in the HTTP header",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy. The token marks the state of the proxy resource at the time of the request.  To make changes to the proxy, you provide the token in your request. Network Firewall uses the token to ensure that the proxy hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-proxy-configuration",
      description:
        "Updates the properties of the specified proxy configuration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-rule-phase-actions",
          description:
            "Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.  To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-proxy-rule",
      description: "Updates the properties of the specified proxy rule",
      options: [
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-name",
          description:
            "The descriptive name of the proxy rule. You can't change the name of a proxy rule after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the proxy rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "Depending on the match action, the proxy either stops the evaluation (if the action is terminal - allow or deny), or continues it (if the action is alert) until it matches a rule with a terminal action",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-conditions",
          description:
            "Proxy rule conditions to add. Match criteria that specify what traffic attributes to examine. Conditions include operators (StringEquals, StringLike) and values to match against",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-conditions",
          description:
            "Proxy rule conditions to remove. Match criteria that specify what traffic attributes to examine. Conditions include operators (StringEquals, StringLike) and values to match against",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule. The token marks the state of the proxy rule resource at the time of the request.  To make changes to the proxy rule, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy rule again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-proxy-rule-group-priorities",
      description:
        "Updates proxy rule group priorities within a proxy configuration",
      options: [
        {
          name: "--proxy-configuration-name",
          description:
            "The descriptive name of the proxy configuration. You can't change the name of a proxy configuration after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy configuration. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-groups",
          description: "proxy rule group resources to update to new positions",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy configuration. The token marks the state of the proxy configuration resource at the time of the request.  To make changes to the proxy configuration, you provide the token in your request. Network Firewall uses the token to ensure that the proxy configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-proxy-rule-priorities",
      description: "Updates proxy rule priorities within a proxy rule group",
      options: [
        {
          name: "--proxy-rule-group-name",
          description:
            "The descriptive name of the proxy rule group. You can't change the name of a proxy rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of a proxy rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-request-phase",
          description:
            "Evaluation points in the traffic flow where rules are applied. There are three phases in a traffic where the rule match is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description: "proxy rule resources to update to new positions",
          args: {
            name: "list",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the proxy rule group. The token marks the state of the proxy rule group resource at the time of the request.  To make changes to the proxy rule group, you provide the token in your request. Network Firewall uses the token to ensure that the proxy rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the proxy rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-rule-group",
      description:
        "Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group.  To update a rule group, first call DescribeRuleGroup to retrieve the current RuleGroup object, update the object as needed, and then provide the updated object to this call",
      options: [
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request.  To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group",
          description:
            "An object that defines the rule group rules.   You must provide either this rule group setting or a Rules setting, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rules",
          description:
            "A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups.   You must provide either this rules setting or a populated RuleGroup setting, but not both.   You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources",
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains settings for encryption of your rule group resources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-metadata",
          description:
            "A complex type that contains metadata about the rule group that your own rule group is copied from. You can use the metadata to keep track of updates made to the originating rule group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--analyze-rule-group",
          description:
            "Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis and then updates the rule group for you. To run the stateless rule group analyzer without updating the rule group, set DryRun to TRUE",
        },
        {
          name: "--no-analyze-rule-group",
          description:
            "Indicates whether you want Network Firewall to analyze the stateless rules in the rule group for rule behavior such as asymmetric routing. If set to TRUE, Network Firewall runs the analysis and then updates the rule group for you. To run the stateless rule group analyzer without updating the rule group, set DryRun to TRUE",
        },
        {
          name: "--summary-configuration",
          description:
            "Updates the selected summary configuration for a rule group. Changes affect subsequent responses from DescribeRuleGroupSummary",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-subnet-change-protection",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--no-subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-tls-inspection-configuration",
      description:
        "Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by referencing it in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration.  To update a TLS inspection configuration, first call DescribeTLSInspectionConfiguration to retrieve the current TLSInspectionConfiguration object, update the object as needed, and then provide the updated object to this call",
      options: [
        {
          name: "--tls-inspection-configuration-arn",
          description:
            "The Amazon Resource Name (ARN) of the TLS inspection configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--tls-inspection-configuration-name",
          description:
            "The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--tls-inspection-configuration",
          description:
            "The object that defines a TLS inspection configuration. This, along with TLSInspectionConfigurationResponse, define the TLS inspection configuration. You can retrieve all objects for a TLS inspection configuration by calling DescribeTLSInspectionConfiguration.  Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination. To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see Inspecting SSL/TLS traffic with TLS inspection configurations in the Network Firewall Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the TLS inspection configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "A complex type that contains the Amazon Web Services KMS encryption configuration settings for your TLS inspection configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the TLS inspection configuration. The token marks the state of the TLS inspection configuration resource at the time of the request.  To make changes to the TLS inspection configuration, you provide the token in your request. Network Firewall uses the token to ensure that the TLS inspection configuration hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the TLS inspection configuration again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
