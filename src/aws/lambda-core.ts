// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "lambda-core",
  description:
    "AWS Lambda Core is a set of APIs for managing shared infrastructure resources used by AWS Lambda. The Lambda Core API provides operations for creating and managing network connectors that enable Lambda MicroVMs to access resources in your Amazon Virtual Private Cloud (Amazon VPC). Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda MicroVMs at run time",
  subcommands: [
    {
      name: "create-network-connector",
      description:
        "Creates a network connector that enables Lambda compute resources to route outbound traffic through your Amazon VPC. The network connector provisions elastic network interfaces (ENIs) in the subnets you specify, providing a managed network path to private resources such as databases, caches, and internal APIs. This operation is asynchronous. The network connector starts in PENDING state while ENIs are provisioned in your VPC (provisioning typically takes up to 10 minutes). Use GetNetworkConnector to poll the connector state until it reaches ACTIVE. Once active, you can attach the connector to Lambda MicroVMs at run time using the egressNetworkConnectors parameter on RunMicroVm. This operation is idempotent when you provide a ClientToken — if you retry a request that completed successfully using the same client token, the operation returns the existing connector without creating a duplicate",
      options: [
        {
          name: "--name",
          description:
            "A unique name for the network connector within your account and Region. You can use the name to identify the connector in subsequent API calls",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operator-role",
          description:
            "The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. This role must have permissions for ec2:CreateNetworkInterface, ec2:DeleteNetworkInterface, and related describe operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request with the same client token, the API returns the existing connector without creating a duplicate",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of key-value pairs to associate with the network connector for organization, cost allocation, or access control",
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
      name: "delete-network-connector",
      description:
        "Initiates deletion of a network connector. The connector transitions to DELETING state while elastic network interfaces are cleaned up asynchronously. After deletion completes, subsequent calls to GetNetworkConnector return ResourceNotFoundException. This operation is idempotent — calling delete on a connector that is already deleting or has been deleted succeeds without error. You can delete connectors in ACTIVE or FAILED states. Before deleting a connector, ensure that no Lambda MicroVMs are using it, as they will lose VPC egress connectivity immediately",
      options: [
        {
          name: "--identifier",
          description:
            "A flexible identifier that accepts a network connector ID, name, or ARN",
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
      name: "get-network-connector",
      description:
        "Retrieves the current configuration, state, and metadata of a network connector. The Identifier parameter accepts the connector ID, name, or full ARN. Use this operation to poll connector state after creation or update, or to inspect the current VPC configuration and any failure reasons. The response includes the full connector configuration, current state, and — if the connector has been updated — the LastUpdateStatus and LastUpdateStatusReasonCode fields that indicate whether the most recent update succeeded or failed",
      options: [
        {
          name: "--identifier",
          description:
            "A flexible identifier that accepts a network connector ID, name, or ARN",
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
      name: "list-network-connectors",
      description:
        "Returns a paginated list of network connectors in your account for the current Region. You can optionally filter results by connector state. Use the Marker parameter from a previous response to retrieve the next page of results. Each item in the response includes the connector ARN, name, ID, type, current state, and last modified timestamp. To retrieve full configuration details for a specific connector, use GetNetworkConnector",
      options: [
        {
          name: "--state",
          description:
            "Optional filter to return only connectors in the specified state (for example, ACTIVE or FAILED)",
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
      name: "update-network-connector",
      description:
        "Updates the VPC configuration or operator role of an existing network connector. You can modify the subnet IDs, security group IDs, network protocol, or operator role. The connector must be in ACTIVE state to accept updates. This operation is asynchronous. The connector remains in ACTIVE state during the update — existing workloads that reference this connector are not disrupted. Use GetNetworkConnector to monitor the LastUpdateStatus field, which transitions through InProgress to Successful or Failed. If the update fails, the LastUpdateStatusReasonCode field provides a specific error code for troubleshooting. This operation is idempotent when you provide a ClientToken",
      options: [
        {
          name: "--identifier",
          description:
            "A flexible identifier that accepts a network connector ID, name, or ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The updated network configuration for the connector. Provide the full VpcEgressConfiguration including all subnet IDs and security group IDs — this replaces the existing configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operator-role",
          description:
            "The updated ARN of the IAM role that Lambda assumes to manage ENIs. Use this to change the operator role without recreating the connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the update request",
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
