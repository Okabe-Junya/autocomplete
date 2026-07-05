// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "connectcases",
  description:
    "Cases actions     Cases data types    With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see Amazon Connect Cases in the Amazon Connect Administrator Guide",
  subcommands: [
    {
      name: "batch-get-case-rule",
      description:
        "Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template",
      options: [
        {
          name: "--domain-id",
          description: "Unique identifier of a Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-rules",
          description: "A list of case rule identifiers",
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
      name: "batch-get-field",
      description:
        "Returns the description for the list of fields in the request parameters",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description: "A list of unique field identifiers",
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
      name: "batch-put-field-options",
      description:
        "Creates and updates a set of field options for a single select field in a Cases domain",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--field-id",
          description: "The unique identifier of a field",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description: "A list of FieldOption objects",
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
      name: "create-case",
      description:
        "If you provide a value for PerformedBy.UserArn you must also have connect:DescribeUser permission on the User ARN resource that you provide  Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types. When creating a case from a template that has tag propagation configurations, the specified tags are automatically applied to the case. The following fields are required when creating a case:    customer_id - You must provide the full customer profile ARN in this format: arn:aws:profile:your_AWS_Region:your_AWS_account ID:domains/your_profiles_domain_name/profiles/profile_ID     title",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "A unique identifier of a template",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description:
            "An array of objects with field ID (matching ListFields/DescribeField) and value union data",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--performed-by",
          description: "Represents the entity that performed the action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource",
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
      name: "create-case-rule",
      description:
        "Creates a new case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template",
      options: [
        {
          name: "--domain-id",
          description: "Unique identifier of a Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the case rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of a case rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule",
          description:
            "Represents what rule type should take place, under what conditions",
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
      name: "create-domain",
      description:
        "Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.  This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect CreateIntegrationAssociation API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see Onboard to Cases",
      options: [
        {
          name: "--name",
          description:
            "The name for your Cases domain. It must be unique for your Amazon Web Services account",
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
      name: "create-field",
      description:
        "Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the field",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Defines the data type, some system constraints, and default display of the field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the field",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "Union of field attributes",
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
      name: "create-layout",
      description:
        "Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:   Fields to display to the users   Field ordering    Title and Status fields cannot be part of layouts since they are not configurable",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the layout. It must be unique for the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "Information about which fields will be present in the layout, and information about the order of the fields",
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
      name: "create-related-item",
      description:
        "Creates a related item (comments, tasks, and contacts) and associates it with a case. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas.  Use cases  Following are examples of related items that you may want to associate with a case:   Related contacts, such as calls, chats, emails tasks   Comments, for agent notes   SLAs, to capture target resolution goals   Cases, to capture related Amazon Connect Cases   Files, such as policy documentation or customer-provided attachments   Custom related items, which provide flexibility for you to define related items that such as bookings, orders, products, notices, and more    Important things to know    If you are associating a contact to a case by passing in Contact for a type, you must have DescribeContact permission on the ARN of the contact that you provide in content.contact.contactArn.   A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a contactArn). All Related Items have their own internal identifier, the relatedItemArn. Examples of related items include comments and contacts.   If you provide a value for performedBy.userArn you must also have DescribeUser permission on the ARN of the user that you provide.   The type field is reserved for internal use only.    Endpoints: See Amazon Connect endpoints and quotas",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of a related item",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The content of a related item to be created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--performed-by",
          description: "Represents the creator of the related item",
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
      name: "create-template",
      description:
        "Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.  Other template APIs are:     DeleteTemplate     GetTemplate     ListTemplates     UpdateTemplate",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the template. It must be unique per domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--layout-configuration",
          description: "Configuration of layouts associated to the template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--required-fields",
          description:
            "A list of fields that must contain a value for a case to be successfully created with this template",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description: "The status of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "A list of case rules (also known as case field conditions) on a template",
          args: {
            name: "list",
          },
        },
        {
          name: "--tag-propagation-configurations",
          description:
            "Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type",
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
      name: "delete-case",
      description:
        "The DeleteCase API permanently deletes a case and all its associated resources from the cases data store. After a successful deletion, you cannot:   Retrieve related items   Access audit history   Perform any operations that require the CaseID    This action is irreversible. After you delete a case, you cannot recover its data",
      options: [
        {
          name: "--domain-id",
          description: "A unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-id",
          description: "A unique identifier of the case",
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
      name: "delete-case-rule",
      description:
        "Deletes a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template",
      options: [
        {
          name: "--domain-id",
          description: "Unique identifier of a Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-rule-id",
          description: "Unique identifier of a case rule",
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
      name: "delete-domain",
      description:
        "Deletes a Cases domain.  After deleting your domain you must disassociate the deleted domain from your Amazon Connect instance with another API call before being able to use Cases again with this Amazon Connect instance. See DeleteIntegrationAssociation",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
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
      name: "delete-field",
      description:
        "Deletes a field from a cases template. After a field is deleted:   You can still retrieve the field by calling BatchGetField.   You cannot update a deleted field by calling UpdateField; it throws a ValidationException.   Deleted fields are not included in the ListFields response.   Calling CreateCase with a deleted field throws a ValidationException denoting which field identifiers in the request have been deleted.   Calling GetCase with a deleted field identifier returns the deleted field's value if one exists.   Calling UpdateCase with a deleted field ID throws a ValidationException if the case does not already contain a value for the deleted field. Otherwise it succeeds, allowing you to update or remove (using emptyValue: {}) the field's value from the case.    GetTemplate does not return field IDs for deleted fields.    GetLayout does not return field IDs for deleted fields.   Calling SearchCases with the deleted field ID as a filter returns any cases that have a value for the deleted field that matches the filter criteria.   Calling SearchCases with a searchTerm value that matches a deleted field's value on a case returns the case in the response.   Calling BatchPutFieldOptions with a deleted field ID throw a ValidationException.   Calling GetCaseEventConfiguration does not return field IDs for deleted fields",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--field-id",
          description: "Unique identifier of the field",
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
      name: "delete-layout",
      description:
        "Deletes a layout from a cases template. You can delete up to 100 layouts per domain. After a layout is deleted:   You can still retrieve the layout by calling GetLayout.   You cannot update a deleted layout by calling UpdateLayout; it throws a ValidationException.   Deleted layouts are not included in the ListLayouts response",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--layout-id",
          description: "The unique identifier of the layout",
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
      name: "delete-related-item",
      description:
        "Deletes the related item resource under a case.  This API cannot be used on a FILE type related attachment. To delete this type of file, use the DeleteAttachedFile API",
      options: [
        {
          name: "--domain-id",
          description: "A unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-item-id",
          description: "A unique identifier of a related item",
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
      name: "delete-template",
      description:
        "Deletes a cases template. You can delete up to 100 templates per domain. After a cases template is deleted:   You can still retrieve the template by calling GetTemplate.   You cannot update the template.    You cannot create a case by using the deleted template.   Deleted templates are not included in the ListTemplates response",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "A unique identifier of a template",
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
      name: "get-case",
      description: "Returns information about a specific case if it exists",
      options: [
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description: "A list of unique field identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
      name: "get-case-audit-events",
      description:
        "Returns the audit history about a specific case if it exists",
      options: [
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of audit events to return. When no value is provided, 25 is the default",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
      name: "get-case-event-configuration",
      description: "Returns the case event publishing configuration",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
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
      name: "get-domain",
      description: "Returns information about a specific domain if it exists",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
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
      name: "get-layout",
      description: "Returns the details for the requested layout",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--layout-id",
          description: "The unique identifier of the layout",
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
      name: "get-template",
      description:
        "Returns the details for the requested template. Other template APIs are:     CreateTemplate     DeleteTemplate     ListTemplates     UpdateTemplate",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "A unique identifier of a template",
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
      name: "list-case-rules",
      description:
        "Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template",
      options: [
        {
          name: "--domain-id",
          description: "Unique identifier of a Cases domain",
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
      name: "list-cases-for-contact",
      description: "Lists cases for a given contact",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-arn",
          description: "A unique identifier of a contact in Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
      name: "list-domains",
      description:
        "Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
      name: "list-field-options",
      description:
        "Lists all of the field options for a field identifier in the domain",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--field-id",
          description: "The unique identifier of a field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description:
            "A list of FieldOption values to filter on for ListFieldOptions",
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
      name: "list-fields",
      description: "Lists all fields in a Cases domain",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
      name: "list-layouts",
      description:
        "Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
      name: "list-tags-for-resource",
      description: "Lists tags for a resource",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN)",
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
      name: "list-templates",
      description:
        "Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template.   Other template APIs are:     CreateTemplate     DeleteTemplate     GetTemplate     UpdateTemplate",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "A list of status values to filter on",
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
      name: "put-case-event-configuration",
      description:
        "Adds case event publishing configuration. For a complete list of fields you can add to the event message, see Create case fields in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bridge",
          description:
            "Configuration to enable EventBridge case event delivery and determine what data is delivered",
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
      name: "search-all-related-items",
      description:
        'Searches for related items across all cases within a domain. This is a global search operation that returns related items from multiple cases, unlike the case-specific SearchRelatedItems API.  Use cases  Following are common uses cases for this API:   Find cases with similar issues across the domain. For example, search for all cases containing comments about "product defect" to identify patterns and existing solutions.   Locate all cases associated with specific contacts or orders. For example, find all cases linked to a contactArn to understand the complete customer journey.    Monitor SLA compliance across cases. For example, search for all cases with "Active" SLA status to prioritize remediation efforts.    Important things to know    This API returns case identifiers, not complete case objects. To retrieve full case details, you must make additional calls to the GetCase API for each returned case ID.    This API searches across related items content, not case fields. Use the SearchCases API to search within case field values.    Endpoints: See Amazon Connect endpoints and quotas',
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The list of types of related items and their parameters to use for filtering. The filters work as an OR condition: caller gets back related items that match any of the specified filter types",
          args: {
            name: "list",
          },
        },
        {
          name: "--sorts",
          description:
            "A structured set of sort terms to specify the order in which related items should be returned. Supports sorting by association time or case ID. The sorts work in the order specified: first sort term takes precedence over subsequent terms",
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
      name: "search-cases",
      description:
        "Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.  For customer_id you must provide the full customer profile ARN in this format:  arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-term",
          description: "A word or phrase used to perform a quick search",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description: "A list of filter objects",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sorts",
          description:
            "A list of sorts where each sort specifies a field and their sort order to be applied to the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields",
          description:
            "The list of field identifiers to be returned as part of the response",
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
      name: "search-related-items",
      description:
        "Searches for related items that are associated with a case.  If no filters are provided, this returns all related items associated with a case",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The list of types of related items and their parameters to use for filtering",
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
      name: "tag-resource",
      description: "Adds tags to a resource",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource",
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
      description: "Untags a resource",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "List of tag keys",
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
      name: "update-case",
      description:
        "If you provide a value for PerformedBy.UserArn you must also have connect:DescribeUser permission on the User ARN resource that you provide  Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the CreateCase input . If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description:
            "An array of objects with fieldId (matching ListFields/DescribeField) and value union data, structured identical to CreateCase",
          args: {
            name: "list",
          },
        },
        {
          name: "--performed-by",
          description: "Represents the entity that performed the action",
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
      name: "update-case-rule",
      description:
        "Updates a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template",
      options: [
        {
          name: "--domain-id",
          description: "Unique identifier of a Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-rule-id",
          description: "Unique identifier of a case rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the case rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Description of a case rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule",
          description:
            "Represents what rule type should take place, under what conditions",
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
      name: "update-field",
      description: "Updates the properties of an existing field",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--field-id",
          description: "The unique identifier of a field",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of a field",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "Union of field attributes",
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
      name: "update-layout",
      description:
        "Updates the attributes of an existing layout. If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. A ValidationException is returned when you add non-existent fieldIds to a layout.  Title and Status fields cannot be part of layouts because they are not configurable",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--layout-id",
          description: "The unique identifier of the layout",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the layout. It must be unique per domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "Information about which fields will be present in the layout, the order of the fields",
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
      name: "update-related-item",
      description:
        "Updates the content of a related item associated with a case. The following related item types are supported:    Comment - Update the text content of an existing comment    Custom - Update the fields of a custom related item. You can add, modify, and remove fields from a custom related item. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas.    Important things to know    When updating a Custom related item, all existing and new fields, and their associated values should be included in the request. Fields not included as part of this request will be removed.   If you provide a value for performedBy.userArn you must also have DescribeUser permission on the ARN of the user that you provide.    System case fields cannot be used in a custom related item.    Endpoints: See Amazon Connect endpoints and quotas",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-id",
          description: "A unique identifier of the case",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-item-id",
          description: "Unique identifier of a related item",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The content of a related item to be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--performed-by",
          description:
            "Represents the user who performed the update of the related item",
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
      name: "update-template",
      description:
        "Updates the attributes of an existing template. The template attributes that can be modified include name, description, layoutConfiguration, requiredFields, and status. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved. Other template APIs are:    CreateTemplate     DeleteTemplate     GetTemplate     ListTemplates",
      options: [
        {
          name: "--domain-id",
          description: "The unique identifier of the Cases domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "A unique identifier for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the template. It must be unique per domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--layout-configuration",
          description: "Configuration of layouts associated to the template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--required-fields",
          description:
            "A list of fields that must contain a value for a case to be successfully created with this template",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description: "The status of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "A list of case rules (also known as case field conditions) on a template",
          args: {
            name: "list",
          },
        },
        {
          name: "--tag-propagation-configurations",
          description:
            "Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type",
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
