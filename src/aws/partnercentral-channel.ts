// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "partnercentral-channel",
  description:
    "AWS Partner Central Channel service for managing partner relationships, handshakes, and program management accounts",
  subcommands: [
    {
      name: "accept-channel-handshake",
      description:
        "Accepts a pending channel handshake request from another AWS account",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the handshake request",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the channel handshake to accept",
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
      name: "cancel-channel-handshake",
      description: "Cancels a pending channel handshake request",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the handshake request",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the channel handshake to cancel",
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
      name: "create-channel-handshake",
      description:
        "Creates a new channel handshake request to establish a partnership with another AWS account",
      options: [
        {
          name: "--handshake-type",
          description:
            "The type of handshake to create (e.g., start service period, revoke service period)",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog",
          description: "The catalog identifier for the handshake request",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-resource-identifier",
          description:
            "The identifier of the resource associated with this handshake",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload",
          description:
            "The payload containing specific details for the handshake type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with the channel handshake",
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
      name: "create-program-management-account",
      description:
        "Creates a new program management account for managing partner relationships",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog identifier for the program management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--program",
          description: "The program type for the management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "A human-readable name for the program management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The AWS account ID to associate with the program management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Key-value pairs to associate with the program management account",
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
      name: "create-relationship",
      description: "Creates a new partner relationship between accounts",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-type",
          description:
            "The type of association for the relationship (e.g., reseller, distributor)",
          args: {
            name: "string",
          },
        },
        {
          name: "--program-management-account-identifier",
          description:
            "The identifier of the program management account for this relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-account-id",
          description: "The AWS account ID to associate in this relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A human-readable name for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--resale-account-model",
          description: "The resale account model for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--sector",
          description: "The business sector for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Key-value pairs to associate with the relationship",
          args: {
            name: "list",
          },
        },
        {
          name: "--requested-support-plan",
          description: "The support plan requested for this relationship",
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
      name: "delete-program-management-account",
      description: "Deletes a program management account",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog identifier for the program management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the program management account to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
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
      name: "delete-relationship",
      description: "Deletes a partner relationship",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The unique identifier of the relationship to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--program-management-account-identifier",
          description:
            "The identifier of the program management account associated with the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure idempotency of the request",
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
      name: "get-relationship",
      description: "Retrieves details of a specific partner relationship",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--program-management-account-identifier",
          description:
            "The identifier of the program management account associated with the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The unique identifier of the relationship to retrieve",
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
      name: "list-channel-handshakes",
      description: "Lists channel handshakes based on specified criteria",
      options: [
        {
          name: "--handshake-type",
          description: "Filter results by handshake type",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog",
          description: "The catalog identifier to filter handshakes",
          args: {
            name: "string",
          },
        },
        {
          name: "--participant-type",
          description: "Filter by participant type (sender or receiver)",
          args: {
            name: "string",
          },
        },
        {
          name: "--statuses",
          description: "Filter results by handshake status",
          args: {
            name: "list",
          },
        },
        {
          name: "--associated-resource-identifiers",
          description: "Filter by associated resource identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--handshake-type-filters",
          description: "Type-specific filters for handshakes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--handshake-type-sort",
          description: "Type-specific sorting options for handshakes",
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
      name: "list-program-management-accounts",
      description:
        "Lists program management accounts based on specified criteria",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier to filter accounts",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-names",
          description: "Filter by display names",
          args: {
            name: "list",
          },
        },
        {
          name: "--programs",
          description: "Filter by program types",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description: "Filter by AWS account IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--statuses",
          description: "Filter by program management account statuses",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description: "Sorting options for the results",
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
      name: "list-relationships",
      description: "Lists partner relationships based on specified criteria",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier to filter relationships",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-account-ids",
          description: "Filter by associated AWS account IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--association-types",
          description: "Filter by association types",
          args: {
            name: "list",
          },
        },
        {
          name: "--display-names",
          description: "Filter by display names",
          args: {
            name: "list",
          },
        },
        {
          name: "--program-management-account-identifiers",
          description: "Filter by program management account identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort",
          description: "Sorting options for the results",
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
      description: "Lists tags associated with a specific resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to list tags for",
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
      name: "reject-channel-handshake",
      description: "Rejects a pending channel handshake request",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the handshake request",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the channel handshake to reject",
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
      description: "Adds or updates tags for a specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Key-value pairs to associate with the resource",
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
      description: "Removes tags from a specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove from the resource",
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
      name: "update-program-management-account",
      description: "Updates the properties of a program management account",
      options: [
        {
          name: "--catalog",
          description:
            "The catalog identifier for the program management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The unique identifier of the program management account to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description:
            "The current revision number of the program management account",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "The new display name for the program management account",
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
      name: "update-relationship",
      description: "Updates the properties of a partner relationship",
      options: [
        {
          name: "--catalog",
          description: "The catalog identifier for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description: "The unique identifier of the relationship to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--program-management-account-identifier",
          description:
            "The identifier of the program management account associated with the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The current revision number of the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The new display name for the relationship",
          args: {
            name: "string",
          },
        },
        {
          name: "--requested-support-plan",
          description: "The updated support plan for the relationship",
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
  ],
};
export default completionSpec;
