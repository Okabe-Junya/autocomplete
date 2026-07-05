// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "rtbfabric",
  description:
    "Amazon Web Services RTB Fabric provides secure, low-latency infrastructure for connecting real-time bidding (RTB) applications. Rather than hosting applications directly, RTB Fabric acts as the connecting fabric that enables your applications to communicate efficiently over private networks instead of the public internet. You maintain complete control over your applications, data, and bidding decisions, while RTB Fabric provides the underlying infrastructure for secure, reliable connectivity. You can use these APIs to complete RTB Fabric tasks, such as setting up audit log ingestions or viewing user access. For more information about RTB Fabric, including the required permissions to use the service, see the Amazon Web Services RTB Fabric User Guide",
  subcommands: [
    {
      name: "accept-link",
      description:
        "Accepts a link request between gateways. When a requester gateway requests to link with a responder gateway, the responder can use this operation to accept the link request and establish the connection",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "Attributes of the link",
          args: {
            name: "structure",
          },
        },
        {
          name: "--log-settings",
          description: "Settings for the application logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout-in-millis",
          description: "The timeout value in milliseconds",
          args: {
            name: "long",
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
      name: "associate-certificate",
      description: "Associates an ACM certificate with a responder gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--acm-certificate-arn",
          description:
            "The Amazon Resource Name (ARN) of the ACM certificate to associate",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "create-inbound-external-link",
      description: "Creates an inbound external link",
      options: [
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "Attributes of the link",
          args: {
            name: "structure",
          },
        },
        {
          name: "--log-settings",
          description: "Settings for the application logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
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
      name: "create-link",
      description:
        "Creates a new link between gateways. Establishes a connection that allows gateways to communicate and exchange bid requests and responses",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--peer-gateway-id",
          description: "The unique identifier of the peer gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "Attributes of the link",
          args: {
            name: "structure",
          },
        },
        {
          name: "--http-responder-allowed",
          description: "Boolean to specify if an HTTP responder is allowed",
        },
        {
          name: "--no-http-responder-allowed",
          description: "Boolean to specify if an HTTP responder is allowed",
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--log-settings",
          description: "Settings for the application logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout-in-millis",
          description: "The timeout value in milliseconds",
          args: {
            name: "long",
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
      name: "create-link-routing-rule",
      description:
        "Creates a routing rule for a link. Routing rules use priority-based evaluation where lower priority numbers are evaluated first. Each rule specifies conditions that must all match for the rule to apply",
      options: [
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The priority of the routing rule. Lower numbers are evaluated first. Valid values are 1 to 1000. Priority must be unique among non-deleted rules within a link",
          args: {
            name: "integer",
          },
        },
        {
          name: "--conditions",
          description:
            "The conditions for the routing rule. All specified fields must match for the rule to apply. At least one condition field must be set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
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
      name: "create-outbound-external-link",
      description: "Creates an outbound external link",
      options: [
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "Attributes of the link",
          args: {
            name: "structure",
          },
        },
        {
          name: "--public-endpoint",
          description: "The public endpoint of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-settings",
          description: "Settings for the application logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
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
      name: "create-requester-gateway",
      description: "Creates a requester gateway",
      options: [
        {
          name: "--vpc-id",
          description:
            "The unique identifier of the Virtual Private Cloud (VPC)",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "The unique identifiers of the subnets",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "The unique identifiers of the security groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the requester gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
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
      name: "create-responder-gateway",
      description:
        "Creates a responder gateway.  A domain name or managed endpoint is required",
      options: [
        {
          name: "--vpc-id",
          description:
            "The unique identifier of the Virtual Private Cloud (VPC)",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "The unique identifiers of the subnets",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "The unique identifiers of the security groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-name",
          description: "The domain name for the responder gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description: "The networking port to use",
          args: {
            name: "integer",
          },
        },
        {
          name: "--protocol",
          description: "The networking protocol to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--listener-config",
          description:
            "Listener configuration for the protocols (HTTP, HTTPS, or both) accepted by the gateway",
          args: {
            name: "structure",
          },
        },
        {
          name: "--trust-store-configuration",
          description: "The configuration of the trust store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--managed-endpoint-configuration",
          description: "The configuration for the managed endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the responder gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--gateway-type",
          description:
            "The type of gateway. Valid values are EXTERNAL or INTERNAL",
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
      name: "delete-inbound-external-link",
      description: "Deletes an inbound external link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "delete-link",
      description:
        "Deletes a link between gateways. Permanently removes the connection between gateways. This action cannot be undone",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "delete-link-routing-rule",
      description: "Deletes a routing rule from a link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-id",
          description: "The unique identifier of the routing rule",
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
      name: "delete-outbound-external-link",
      description: "Deletes an outbound external link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "delete-requester-gateway",
      description: "Deletes a requester gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
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
      name: "delete-responder-gateway",
      description: "Deletes a responder gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
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
      name: "disassociate-certificate",
      description: "Removes a certificate association from a responder gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--acm-certificate-arn",
          description:
            "The Amazon Resource Name (ARN) of the ACM certificate to disassociate",
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
      name: "get-certificate-association",
      description:
        "Retrieves the details of a certificate association with a responder gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--acm-certificate-arn",
          description: "The Amazon Resource Name (ARN) of the ACM certificate",
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
      name: "get-inbound-external-link",
      description: "Retrieves information about an inbound external link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "get-link",
      description:
        "Retrieves information about a link between gateways. Returns detailed information about the link configuration, status, and associated gateways",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "get-link-routing-rule",
      description: "Retrieves the details of a routing rule for a link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-id",
          description: "The unique identifier of the routing rule",
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
      name: "get-outbound-external-link",
      description: "Retrieves information about an outbound external link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "get-requester-gateway",
      description: "Retrieves information about a requester gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
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
      name: "get-responder-gateway",
      description: "Retrieves information about a responder gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
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
      name: "list-certificate-associations",
      description: "Lists the certificate associations for a responder gateway",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
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
      name: "list-link-routing-rules",
      description: "Lists the routing rules for a link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "list-links",
      description:
        "Lists links associated with gateways. Returns a list of all links for the specified gateways, including their status and configuration details",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
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
      name: "list-requester-gateways",
      description: "Lists requester gateways",
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
      name: "list-responder-gateways",
      description: "Lists reponder gateways",
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
      name: "list-tags-for-resource",
      description: "Lists tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags",
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
      name: "reject-link",
      description:
        "Rejects a link request between gateways. When a requester gateway requests to link with a responder gateway, the responder can use this operation to decline the link request",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
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
      name: "tag-resource",
      description:
        "Assigns one or more tags (key-value pairs) to the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs of the tag or tags to assign to the resource",
          args: {
            name: "map",
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
      description: "Removes a tag or tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The keys of the key-value pairs for the tag or tags you want to remove from the specified resource",
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
      name: "update-link",
      description:
        "Updates the configuration of a link between gateways. Allows you to modify settings and parameters for an existing link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-settings",
          description: "Settings for the application logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout-in-millis",
          description: "The timeout value in milliseconds",
          args: {
            name: "long",
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
      name: "update-link-module-flow",
      description: "Updates a link module flow",
      options: [
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--modules",
          description: "The configuration of a module",
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
      name: "update-link-routing-rule",
      description: "Updates a routing rule for a link",
      options: [
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-id",
          description: "The unique identifier of the link",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-id",
          description: "The unique identifier of the routing rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The updated priority of the routing rule. Lower numbers are evaluated first. Valid values are 1 to 1000. Priority must be unique among non-deleted rules within a link",
          args: {
            name: "integer",
          },
        },
        {
          name: "--conditions",
          description:
            "The updated conditions for the routing rule. All specified fields must match for the rule to apply. At least one condition field must be set",
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
      name: "update-requester-gateway",
      description: "Updates a requester gateway",
      options: [
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the requester gateway",
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
      name: "update-responder-gateway",
      description: "Updates a responder gateway",
      options: [
        {
          name: "--domain-name",
          description: "The domain name for the responder gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description: "The networking port to use",
          args: {
            name: "integer",
          },
        },
        {
          name: "--protocol",
          description: "The networking protocol to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--listener-config",
          description: "The listener configuration for the responder gateway",
          args: {
            name: "structure",
          },
        },
        {
          name: "--trust-store-configuration",
          description: "The configuration of the trust store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--managed-endpoint-configuration",
          description: "The configuration for the managed endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The unique client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--gateway-id",
          description: "The unique identifier of the gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the responder gateway",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "certificate-associated",
          description:
            "Wait until JMESPath query status returns ASSOCIATED when polling with ``get-certificate-association``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 8 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--acm-certificate-arn",
              description:
                "The Amazon Resource Name (ARN) of the ACM certificate",
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
          name: "certificate-disassociated",
          description:
            "Wait until JMESPath query status returns DISASSOCIATED when polling with ``get-certificate-association``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 8 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--acm-certificate-arn",
              description:
                "The Amazon Resource Name (ARN) of the ACM certificate",
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
          name: "inbound-external-link-active",
          description:
            "Wait until JMESPath query status returns ACTIVE when polling with ``get-inbound-external-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "inbound-external-link-deleted",
          description:
            "Wait until JMESPath query status returns DELETED when polling with ``get-inbound-external-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "link-accepted",
          description:
            "Wait until JMESPath query status returns ACCEPTED when polling with ``get-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "link-active",
          description:
            "Wait until JMESPath query status returns ACTIVE when polling with ``get-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "link-deleted",
          description:
            "Wait until JMESPath query status returns DELETED when polling with ``get-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "link-routing-rule-active",
          description:
            "Wait until JMESPath query status returns ACTIVE when polling with ``get-link-routing-rule``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 24 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
              args: {
                name: "string",
              },
            },
            {
              name: "--rule-id",
              description: "The unique identifier of the routing rule",
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
          name: "link-routing-rule-deleted",
          description:
            "Wait until JMESPath query status returns DELETED when polling with ``get-link-routing-rule``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 24 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
              args: {
                name: "string",
              },
            },
            {
              name: "--rule-id",
              description: "The unique identifier of the routing rule",
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
          name: "outbound-external-link-active",
          description:
            "Wait until JMESPath query status returns ACTIVE when polling with ``get-outbound-external-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "outbound-external-link-deleted",
          description:
            "Wait until JMESPath query status returns DELETED when polling with ``get-outbound-external-link``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
              args: {
                name: "string",
              },
            },
            {
              name: "--link-id",
              description: "The unique identifier of the link",
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
          name: "requester-gateway-active",
          description:
            "Wait until JMESPath query status returns ACTIVE when polling with ``get-requester-gateway``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
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
          name: "requester-gateway-deleted",
          description:
            "Wait until JMESPath query status returns DELETED when polling with ``get-requester-gateway``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
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
          name: "responder-gateway-active",
          description:
            "Wait until JMESPath query status returns ACTIVE when polling with ``get-responder-gateway``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
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
          name: "responder-gateway-deleted",
          description:
            "Wait until JMESPath query status returns DELETED when polling with ``get-responder-gateway``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--gateway-id",
              description: "The unique identifier of the gateway",
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
    },
  ],
};
export default completionSpec;
