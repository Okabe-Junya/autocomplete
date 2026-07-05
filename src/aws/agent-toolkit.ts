// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "agent-toolkit",
  description:
    "The Agent Toolkit for AWS gives AI coding agents the tools, knowledge, and guardrails they need to build, deploy, and manage applications on AWS. It works with the coding agents that developers already use — including Claude Code, Cursor, and Codex — without requiring you to switch tools or learn a new workflow. In the AWS CLI, the Agent Toolkit for AWS provides commands to set up AI coding agents with the AWS MCP and to manage installed AWS skills from the command line. It works with any AI coding agent that the Agent Toolkit detects on your system — including Kiro, Cursor, and Claude Code — and is the recommended setup path when you want to install AWS skills and configure the AWS MCP Server in a single step",
  subcommands: [
    {
      name: "add-skill",
      options: [
        {
          name: "--skill-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--skill-version",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-skill-file",
      description:
        'Returns a specific file from a skill version. Content-Type varies by file extension. The {skillVersion} label accepts either "latest" or a versioned tag like "v1"',
      options: [
        {
          name: "--skill-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-path",
          args: {
            name: "string",
          },
        },
        {
          name: "--skill-version",
          description:
            'A skill version identifier: either the literal "latest" or a versioned tag like "v1", "v2"',
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-skill-metadata",
      options: [
        {
          name: "--skill-version",
          args: {
            name: "string",
          },
        },
        {
          name: "--skill-name",
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
      name: "list-available-skills",
      options: [
        {
          name: "--category-filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
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
      name: "list-installed-skills",
      options: [
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "remove-skill",
      options: [
        {
          name: "--skill-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "search-skills",
      description: "Searches the remote catalog for skills matching a query",
      options: [
        {
          name: "--search-query",
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
      name: "update-skill",
      options: [
        {
          name: "--skill-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
