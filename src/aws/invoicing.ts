// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "invoicing",
  description:
    "Amazon Web Services Invoice Configuration  You can use Amazon Web Services Invoice Configuration APIs to programmatically create, update, delete, get, and list invoice units. You can also programmatically fetch the information of the invoice receiver. For example, business legal name, address, and invoicing contacts.  You can use Amazon Web Services Invoice Configuration to receive separate Amazon Web Services invoices based your organizational needs. By using Amazon Web Services Invoice Configuration, you can configure invoice units that are groups of Amazon Web Services accounts that represent your business entities, and receive separate invoices for each business entity. You can also assign a unique member or payer account as the invoice receiver for each invoice unit. As you create new accounts within your Organizations using Amazon Web Services Invoice Configuration APIs, you can automate the creation of new invoice units and subsequently automate the addition of new accounts to your invoice units.  Amazon Web Services Procurement Portal Preferences  You can use Amazon Web Services Procurement Portal Preferences APIs to programmatically create, update, delete, get, and list procurement portal connections and e-invoice delivery settings. You can also programmatically fetch and modify the status of procurement portal configurations. For example, SAP Business Network or Coupa connections, configure e-invoice delivery and purchase order retrieval features. You can use Amazon Web Services Procurement Portal Preferences to connect e-invoice delivery to your procurement portals based on your organizational needs. By using Amazon Web Services Procurement Portal Preferences, you can configure connections to SAP Business Network and Coupa procurement portals that retrieve purchase orders and deliver Amazon Web Services invoices on the same day they are generated. You can also set up testing environments to validate invoice delivery without affecting live transactions, and manage contact information for portal setup and support.  Administrative users should understand that billing read-only policies will show all procurement portal connection details. Review your IAM policies to ensure appropriate access controls are in place for procurement portal preferences.  Amazon Web Services Invoice Management  You can use Amazon Web Services Invoice Management APIs to programmatically list invoice summaries and get invoice documents. You can also programmatically fetch invoice documents with S3 pre-signed URLs. You can use Amazon Web Services Invoice Management to access invoice information based on your organizational needs. By using Amazon Web Services Invoice Management, you can retrieve paginated lists of invoice summaries that include invoice metadata such as invoice IDs, amounts, and currencies without downloading documents. You can also download invoice documents in PDF format using S3 pre-signed URLs with built-in expiration. As you manage invoices across your organization using Amazon Web Services Invoice Management APIs, you can create invoice retrieval processes and integrate invoice data into your financial systems. Service endpoint You can use the following endpoints for Amazon Web Services Invoice Configuration, Amazon Web Services Procurement Portal Preferences, and Amazon Web Services Invoice Management:    https://invoicing.us-east-1.api.aws",
  subcommands: [
    {
      name: "batch-get-invoice-profile",
      description:
        "This gets the invoice profile associated with a set of accounts. The accounts must be linked accounts under the requester management account organization",
      options: [
        {
          name: "--account-ids",
          description:
            "Retrieves the corresponding invoice profile data for these account IDs",
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
      name: "create-invoice-unit",
      description:
        "This creates a new invoice unit with the provided definition",
      options: [
        {
          name: "--name",
          description:
            "The unique name of the invoice unit that is shown on the generated invoice. This can't be changed once it is set. To change this name, you must delete the invoice unit recreate",
          args: {
            name: "string",
          },
        },
        {
          name: "--invoice-receiver",
          description:
            "The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The invoice unit's description. This can be changed at a later time",
          args: {
            name: "string",
          },
        },
        {
          name: "--tax-inheritance-disabled",
          description:
            "Whether the invoice unit based tax inheritance is/ should be enabled or disabled",
        },
        {
          name: "--no-tax-inheritance-disabled",
          description:
            "Whether the invoice unit based tax inheritance is/ should be enabled or disabled",
        },
        {
          name: "--rule",
          description:
            "The InvoiceUnitRule object used to create invoice units",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-tags",
          description: "The tag structure that contains a tag key and value",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
      name: "create-procurement-portal-preference",
      description:
        "This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews).   Creates a procurement portal preference configuration for e-invoice delivery and purchase order retrieval. This preference defines how invoices are delivered to a procurement portal and how purchase orders are retrieved",
      options: [
        {
          name: "--procurement-portal-name",
          description: "The name of the procurement portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--buyer-domain",
          description:
            "The domain identifier for the buyer in the procurement portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--buyer-identifier",
          description:
            "The unique identifier for the buyer in the procurement portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--supplier-domain",
          description:
            "The domain identifier for the supplier in the procurement portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--supplier-identifier",
          description:
            "The unique identifier for the supplier in the procurement portal",
          args: {
            name: "string",
          },
        },
        {
          name: "--selector",
          description:
            "Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--procurement-portal-shared-secret",
          description:
            "The shared secret or authentication credential used to establish secure communication with the procurement portal. This value must be encrypted at rest",
          args: {
            name: "string",
          },
        },
        {
          name: "--procurement-portal-instance-endpoint",
          description:
            "The endpoint URL where e-invoices will be delivered to the procurement portal. Must be a valid HTTPS URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-env-preference",
          description:
            "Configuration settings for the test environment of the procurement portal. Includes test credentials and endpoints that are used for validation before production deployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--einvoice-delivery-enabled",
          description:
            "Indicates whether e-invoice delivery is enabled for this procurement portal preference. Set to true to enable e-invoice delivery, false to disable",
        },
        {
          name: "--no-einvoice-delivery-enabled",
          description:
            "Indicates whether e-invoice delivery is enabled for this procurement portal preference. Set to true to enable e-invoice delivery, false to disable",
        },
        {
          name: "--einvoice-delivery-preference",
          description:
            "Specifies the e-invoice delivery configuration including document types, attachment types, and customization settings for the portal",
          args: {
            name: "structure",
          },
        },
        {
          name: "--purchase-order-retrieval-enabled",
          description:
            "Indicates whether purchase order retrieval is enabled for this procurement portal preference. Set to true to enable PO retrieval, false to disable",
        },
        {
          name: "--no-purchase-order-retrieval-enabled",
          description:
            "Indicates whether purchase order retrieval is enabled for this procurement portal preference. Set to true to enable PO retrieval, false to disable",
        },
        {
          name: "--contacts",
          description:
            "List of contact information for portal administrators and technical contacts responsible for the e-invoice integration",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-tags",
          description:
            "The tags to apply to this procurement portal preference resource. Each tag consists of a key and an optional value",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
      name: "delete-invoice-unit",
      description:
        "This deletes an invoice unit with the provided invoice unit ARN",
      options: [
        {
          name: "--invoice-unit-arn",
          description:
            "The ARN to identify an invoice unit. This information can't be modified or deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
      name: "delete-procurement-portal-preference",
      description:
        "This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews).   Deletes an existing procurement portal preference. This action cannot be undone. Active e-invoice delivery and PO retrieval configurations will be terminated",
      options: [
        {
          name: "--procurement-portal-preference-arn",
          description:
            "The Amazon Resource Name (ARN) of the procurement portal preference to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
      name: "get-invoice-pdf",
      description:
        "Returns a URL to download the invoice document and supplemental documents associated with an invoice. The URLs are pre-signed and have expiration time. For special cases like Brazil, where Amazon Web Services generated invoice identifiers and government provided identifiers do not match, use the Amazon Web Services generated invoice identifier when making API requests. To grant IAM permission to use this operation, the caller needs the invoicing:GetInvoicePDF policy action",
      options: [
        {
          name: "--invoice-id",
          description: "Your unique invoice ID",
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
      name: "get-invoice-unit",
      description: "This retrieves the invoice unit definition",
      options: [
        {
          name: "--invoice-unit-arn",
          description:
            "The ARN to identify an invoice unit. This information can't be modified or deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--as-of",
          description:
            "The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the AsOf time is set to before it was deleted. If an AsOf is not provided, the default value is the current time",
          args: {
            name: "timestamp",
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
      name: "get-procurement-portal-preference",
      description:
        "This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews).   Retrieves the details of a specific procurement portal preference configuration",
      options: [
        {
          name: "--procurement-portal-preference-arn",
          description:
            "The Amazon Resource Name (ARN) of the procurement portal preference to retrieve",
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
      name: "list-invoice-summaries",
      description:
        "Retrieves your invoice details programmatically, without line item details",
      options: [
        {
          name: "--selector",
          description:
            "The option to retrieve details for a specific invoice by providing its unique ID. Alternatively, access information for all invoices linked to the account by providing an account ID",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter",
          description: "Filters you can use to customize your invoice summary",
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
      name: "list-invoice-units",
      description:
        "This fetches a list of all invoice unit definitions for a given account, as of the provided AsOf date",
      options: [
        {
          name: "--filters",
          description:
            "An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are InvoiceReceivers, Names, and Accounts",
          args: {
            name: "structure",
          },
        },
        {
          name: "--as-of",
          description:
            "The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the AsOf time is set to before it was deleted. If an AsOf is not provided, the default value is the current time",
          args: {
            name: "timestamp",
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
      name: "list-procurement-portal-preferences",
      description:
        "This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews).   Retrieves a list of procurement portal preferences associated with the Amazon Web Services account",
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
      description: "Lists the tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of tags to list",
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
      name: "put-procurement-portal-preference",
      description:
        "This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews).   Updates an existing procurement portal preference configuration. This operation can modify settings for e-invoice delivery and purchase order retrieval",
      options: [
        {
          name: "--procurement-portal-preference-arn",
          description:
            "The Amazon Resource Name (ARN) of the procurement portal preference to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--selector",
          description:
            "Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference",
          args: {
            name: "structure",
          },
        },
        {
          name: "--procurement-portal-shared-secret",
          description:
            "The updated shared secret or authentication credential for the procurement portal. This value must be encrypted at rest",
          args: {
            name: "string",
          },
        },
        {
          name: "--procurement-portal-instance-endpoint",
          description:
            "The updated endpoint URL where e-invoices will be delivered to the procurement portal. Must be a valid HTTPS URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-env-preference",
          description:
            "Updated configuration settings for the test environment of the procurement portal",
          args: {
            name: "structure",
          },
        },
        {
          name: "--einvoice-delivery-enabled",
          description:
            "Updated flag indicating whether e-invoice delivery is enabled for this procurement portal preference",
        },
        {
          name: "--no-einvoice-delivery-enabled",
          description:
            "Updated flag indicating whether e-invoice delivery is enabled for this procurement portal preference",
        },
        {
          name: "--einvoice-delivery-preference",
          description:
            "Updated e-invoice delivery configuration including document types, attachment types, and customization settings for the portal",
          args: {
            name: "structure",
          },
        },
        {
          name: "--purchase-order-retrieval-enabled",
          description:
            "Updated flag indicating whether purchase order retrieval is enabled for this procurement portal preference",
        },
        {
          name: "--no-purchase-order-retrieval-enabled",
          description:
            "Updated flag indicating whether purchase order retrieval is enabled for this procurement portal preference",
        },
        {
          name: "--contacts",
          description:
            "Updated list of contact information for portal administrators and technical contacts",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
      description: "Adds a tag to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description: "Adds a tag to a resource",
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
      description: "Removes a tag from a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tag-keys",
          description: "Keys for the tags to be removed",
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
      name: "update-invoice-unit",
      description:
        "You can update the invoice unit configuration at any time, and Amazon Web Services will use the latest configuration at the end of the month",
      options: [
        {
          name: "--invoice-unit-arn",
          description:
            "The ARN to identify an invoice unit. This information can't be modified or deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The assigned description for an invoice unit. This information can't be modified or deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--tax-inheritance-disabled",
          description:
            "Whether the invoice unit based tax inheritance is/ should be enabled or disabled",
        },
        {
          name: "--no-tax-inheritance-disabled",
          description:
            "Whether the invoice unit based tax inheritance is/ should be enabled or disabled",
        },
        {
          name: "--rule",
          description:
            "The InvoiceUnitRule object used to update invoice units",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
      name: "update-procurement-portal-preference-status",
      description:
        "This feature API is subject to changing at any time. For more information, see the Amazon Web Services Service Terms (Betas and Previews).   Updates the status of a procurement portal preference, including the activation state of e-invoice delivery and purchase order retrieval features",
      options: [
        {
          name: "--procurement-portal-preference-arn",
          description:
            "The Amazon Resource Name (ARN) of the procurement portal preference to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--einvoice-delivery-preference-status",
          description:
            "The updated status of the e-invoice delivery preference",
          args: {
            name: "string",
          },
        },
        {
          name: "--einvoice-delivery-preference-status-reason",
          description:
            "The reason for the e-invoice delivery preference status update, providing context for the change",
          args: {
            name: "string",
          },
        },
        {
          name: "--purchase-order-retrieval-preference-status",
          description:
            "The updated status of the purchase order retrieval preference",
          args: {
            name: "string",
          },
        },
        {
          name: "--purchase-order-retrieval-preference-status-reason",
          description:
            "The reason for the purchase order retrieval preference status update, providing context for the change",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure idempotency of the request",
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
