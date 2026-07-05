// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "signer-data",
  description:
    "AWS Signer Data Plane service provides APIs for checking revocation status of signed artifacts",
  subcommands: [
    {
      name: "get-revocation-status",
      description:
        "Retrieves the revocation status for a signed artifact by checking if the signing profile, job, or certificate has been revoked",
      options: [
        {
          name: "--signature-timestamp",
          description:
            "The timestamp when the artifact was signed, in ISO 8601 format",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--platform-id",
          description: "The platform identifier for the signing platform used",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-version-arn",
          description:
            "The ARN of the signing profile version used to sign the artifact",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-arn",
          description: "The ARN of the signing job that produced the signature",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-hashes",
          description: "List of certificate hashes to check for revocation",
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
