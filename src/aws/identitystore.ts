// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "identitystore",
  description:
    "The Identity Store service used by IAM Identity Center provides a single place to retrieve all of your identities (users and groups). For more information, see the  IAM Identity Center User Guide. This reference guide describes the identity store operations that you can call programmatically and includes detailed information about data types and errors.   IAM Identity Center uses the sso, sso-directory, and identitystore API namespaces. The sso-directory and identitystore namespaces authorize access to data in the Identity Store. Make sure your policies with IAM actions from these two namespaces are consistent to avoid conflicting authorization to the same data",
  subcommands: [
    {
      name: "create-group",
      description: "Creates a group within the specified identity store",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description:
            "A string containing the name of the group. This value is commonly displayed when the group is referenced. Administrator and AWSAdministrators are reserved names and can't be used for users or groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A string containing the description of the group",
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
      name: "create-group-membership",
      description:
        "Creates a relationship between a member and a group. The following identifiers must be specified: GroupId, IdentityStoreId, and MemberId",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier for a group in the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "An object that contains the identifier of a group member. Setting the UserID field to the specific identifier for a user indicates that the user is a member of the group",
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
      name: "create-user",
      description: "Creates a user within the specified identity store",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. Administrator and AWSAdministrators are reserved names and can't be used for users or groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "An object containing the name of the user. When used in IAM Identity Center, this parameter is required",
          args: {
            name: "structure",
          },
        },
        {
          name: "--display-name",
          description:
            'A string containing the name of the user. This value is typically formatted for display when the user is referenced. For example, "John Doe." When used in IAM Identity Center, this parameter is required',
          args: {
            name: "string",
          },
        },
        {
          name: "--nick-name",
          description: "A string containing an alternate name for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-url",
          description:
            "A string containing a URL that might be associated with the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--emails",
          description:
            "A list of Email objects containing email addresses associated with the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--addresses",
          description:
            "A list of Address objects containing addresses associated with the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--phone-numbers",
          description:
            "A list of PhoneNumber objects containing phone numbers associated with the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-type",
          description:
            "A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description:
            "A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-language",
          description:
            'A string containing the preferred language of the user. For example, "American English" or "en-us."',
          args: {
            name: "string",
          },
        },
        {
          name: "--locale",
          description:
            "A string containing the geographical region or location of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--timezone",
          description: "A string containing the time zone of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--photos",
          description:
            "A list of photos associated with the user. You can add up to 3 photos per user. Each photo can include a value, type, display name, and primary designation",
          args: {
            name: "list",
          },
        },
        {
          name: "--website",
          description:
            "The user's personal website or blog URL. This field allows users to provide a link to their personal or professional website",
          args: {
            name: "string",
          },
        },
        {
          name: "--birthdate",
          description:
            "The user's birthdate in YYYY-MM-DD format. This field supports standard date format for storing personal information",
          args: {
            name: "string",
          },
        },
        {
          name: "--roles",
          description:
            "A list of Role objects containing roles associated with the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--extensions",
          description:
            "A map with additional attribute extensions for the user. Each map key corresponds to an extension name, while map values represent extension data in Document type (not supported by Java V1, Go V1 and older versions of the CLI). aws:identitystore:enterprise is the only supported extension name",
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
      name: "delete-group",
      description: "Delete a group within an identity store given GroupId",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier for a group in the identity store",
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
      name: "delete-group-membership",
      description: "Delete a membership within a group given MembershipId",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-id",
          description:
            "The identifier for a GroupMembership in an identity store",
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
      name: "delete-user",
      description: "Deletes a user within an identity store given UserId",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier for a user in the identity store",
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
      name: "describe-group",
      description:
        "Retrieves the group metadata and attributes from GroupId in an identity store.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description:
            "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier for a group in the identity store",
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
      name: "describe-group-membership",
      description:
        "Retrieves membership metadata and attributes from MembershipId in an identity store.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-id",
          description:
            "The identifier for a GroupMembership in an identity store",
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
      name: "describe-user",
      description:
        "Retrieves the user metadata and attributes from the UserId in an identity store.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description:
            "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier for a user in the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--extensions",
          description:
            "A collection of extension names indicating what extensions the service should retrieve alongside other user attributes. aws:identitystore:enterprise is the only supported extension name",
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
      name: "get-group-id",
      description:
        "Retrieves GroupId in an identity store.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--alternate-identifier",
          description:
            "A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid path is  displayName",
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
      name: "get-group-membership-id",
      description:
        "Retrieves the MembershipId in an identity store.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier for a group in the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "An object that contains the identifier of a group member. Setting the UserID field to the specific identifier for a user indicates that the user is a member of the group",
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
      name: "get-user-id",
      description:
        "Retrieves the UserId in an identity store.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--alternate-identifier",
          description:
            "A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. For the unique attribute, the only valid paths are  userName and emails.value",
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
      name: "is-member-in-groups",
      description:
        "Checks the user's membership in all requested groups and returns if the member exists in all queried groups.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "An object containing the identifier of a group member",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-ids",
          description: "A list of identifiers for groups in the identity store",
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
      name: "list-group-memberships",
      description:
        "For the specified group in the specified identity store, returns the list of all  GroupMembership objects and returns results in paginated form.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier for a group in the identity store",
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
      name: "list-group-memberships-for-member",
      description:
        "For the specified member in the specified identity store, returns the list of all  GroupMembership objects and returns results in paginated form.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "An object that contains the identifier of a group member. Setting the UserID field to the specific identifier for a user indicates that the user is a member of the group",
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
      name: "list-groups",
      description:
        "Lists all groups in the identity store. Returns a paginated list of complete Group objects. Filtering for a Group by the DisplayName attribute is deprecated. Instead, use the GetGroupId API action.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description:
            "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of Filter objects, which is used in the ListUsers and  ListGroups requests",
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
      name: "list-users",
      description:
        "Lists all users in the identity store. Returns a paginated list of complete User objects. Filtering for a User by the UserName attribute is deprecated. Instead, use the GetUserId API action.  If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the  IAM Identity Center User Guide",
      options: [
        {
          name: "--identity-store-id",
          description:
            "The globally unique identifier for the identity store, such as d-1234567890. In this example, d- is a fixed prefix, and 1234567890 is a randomly generated string that contains numbers and lower case letters. This value is generated at the time that a new identity store is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--extensions",
          description:
            "A collection of extension names indicating what extensions the service should retrieve alongside other user attributes. aws:identitystore:enterprise is the only supported extension name",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "A list of Filter objects, which is used in the ListUsers and  ListGroups requests",
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
      name: "update-group",
      description:
        "Updates the specified group metadata and attributes in the specified identity store",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier for a group in the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--operations",
          description:
            "A list of AttributeOperation objects to apply to the requested group. These operations might add, replace, or remove an attribute. For more information on the attributes that can be added, replaced, or removed, see Group",
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
      name: "update-user",
      description:
        "Updates the specified user metadata and attributes in the specified identity store",
      options: [
        {
          name: "--identity-store-id",
          description: "The globally unique identifier for the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier for a user in the identity store",
          args: {
            name: "string",
          },
        },
        {
          name: "--operations",
          description:
            "A list of AttributeOperation objects to apply to the requested user. These operations might add, replace, or remove an attribute. For more information on the attributes that can be added, replaced, or removed, see User",
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
  ],
};
export default completionSpec;
