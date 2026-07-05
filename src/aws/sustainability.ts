// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "sustainability",
  description:
    "The AWS Sustainability service provides programmatic access to estimated carbon emissions data for your Amazon Web Services usage. Use the AWS Sustainability service to retrieve, analyze, and track the carbon footprint of your cloud infrastructure over time.  With the AWS Sustainability service, you can:   Retrieve estimated carbon emissions for your Amazon Web Services usage across different time periods    Group emissions data by dimensions such as account, region, and service   Filter emissions data to focus on specific accounts, regions, or services   Access multiple emissions calculation methodologies including Location-based Method (LBM) and Market-based Method (MBM)    Aggregate emissions data at various time granularities including monthly, quarterly, and yearly periods     The API supports pagination for efficient data retrieval and provides dimension values to help you understand the available grouping and filtering options for your account.   All emissions values are calculated using methodologies aligned with the Greenhouse Gas (GHG) Protocol and are provided in metric tons of carbon dioxide-equivalent (MTCO2e)",
  subcommands: [
    {
      name: "get-estimated-carbon-emissions",
      description:
        "Returns estimated carbon emission values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--time-period",
          description: "The date range for fetching estimated carbon emissions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "The dimensions available for grouping estimated carbon emissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-by",
          description: "The criteria for filtering estimated carbon emissions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--emissions-types",
          description:
            "The emission types to include in the results. If absent, returns TOTAL_LBM_CARBON_EMISSIONS and TOTAL_MBM_CARBON_EMISSIONS emissions types",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The time granularity for the results. If absent, uses MONTHLY time granularity",
          args: {
            name: "string",
          },
        },
        {
          name: "--granularity-configuration",
          description:
            "Configuration for fiscal year calculations when using YEARLY_FISCAL or QUARTERLY_FISCAL granularity",
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
      name: "get-estimated-carbon-emissions-dimension-values",
      description:
        "Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully",
      options: [
        {
          name: "--time-period",
          description: "The date range for fetching the dimension values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimensions",
          description:
            "The dimensions available for grouping estimated carbon emissions",
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
  ],
};
export default completionSpec;
