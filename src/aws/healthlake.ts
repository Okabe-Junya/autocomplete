// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "healthlake",
  description:
    "This is the AWS HealthLake API Reference. For an introduction to the service, see What is AWS HealthLake? in the AWS HealthLake Developer Guide",
  subcommands: [
    {
      name: "create-fhir-datastore",
      description: "Create a FHIR-enabled data store",
      options: [
        {
          name: "--datastore-name",
          description: "The data store name (user-generated)",
          args: {
            name: "string",
          },
        },
        {
          name: "--datastore-type-version",
          description:
            "The FHIR release version supported by the data store. Current support is for version R4",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-configuration",
          description:
            "The server-side encryption key configuration for a customer-provided encryption key specified for creating a data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--preload-data-config",
          description:
            "An optional parameter to preload (import) open source Synthea FHIR data upon creation of the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "An optional user-provided token to ensure API idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The resource tags applied to a data store when it is created",
          args: {
            name: "list",
          },
        },
        {
          name: "--identity-provider-configuration",
          description:
            "The identity provider configuration to use for the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--analytics-configuration",
          description: "The analytics configuration for the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--nlp-configuration",
          description:
            "The natural language processing (NLP) configuration for the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--profile-configuration",
          description: "The profile configuration for the data store",
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
      name: "delete-fhir-datastore",
      description: "Delete a FHIR-enabled data store",
      options: [
        {
          name: "--datastore-id",
          description:
            "The AWS-generated identifier for the data store to be deleted",
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
      name: "describe-fhir-datastore",
      description: "Get properties for a FHIR-enabled data store",
      options: [
        {
          name: "--datastore-id",
          description: "The data store identifier",
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
      name: "describe-fhir-export-job",
      description: "Get FHIR export job properties",
      options: [
        {
          name: "--datastore-id",
          description:
            "The data store identifier from which FHIR data is being exported from",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The export job identifier",
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
      name: "describe-fhir-import-job",
      description:
        "Get the import job properties to learn more about the job or job progress",
      options: [
        {
          name: "--datastore-id",
          description: "The data store identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The import job identifier",
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
      name: "list-fhir-datastores",
      description:
        "List all FHIR-enabled data stores in a user’s account, regardless of data store status",
      options: [
        {
          name: "--filter",
          description:
            "List all filters associated with a FHIR data store request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The token used to retrieve the next page of data stores when results are paginated",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of data stores returned on a page",
          args: {
            name: "integer",
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
      name: "list-fhir-export-jobs",
      description:
        "Lists all FHIR export jobs associated with an account and their statuses",
      options: [
        {
          name: "--datastore-id",
          description:
            "Limits the response to the export job with the specified data store ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to identify the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Limits the number of results returned for a ListFHIRExportJobs to a maximum quantity specified by the user",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-name",
          description:
            "Limits the response to the export job with the specified job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "Limits the response to export jobs with the specified job status",
          args: {
            name: "string",
          },
        },
        {
          name: "--submitted-before",
          description:
            "Limits the response to FHIR export jobs submitted before a user- specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--submitted-after",
          description:
            "Limits the response to FHIR export jobs submitted after a user-specified date",
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
      name: "list-fhir-import-jobs",
      description:
        "List all FHIR import jobs associated with an account and their statuses",
      options: [
        {
          name: "--datastore-id",
          description:
            "Limits the response to the import job with the specified data store ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to identify the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Limits the number of results returned for ListFHIRImportJobs to a maximum quantity specified by the user",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-name",
          description:
            "Limits the response to the import job with the specified job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-status",
          description:
            "Limits the response to the import job with the specified job status",
          args: {
            name: "string",
          },
        },
        {
          name: "--submitted-before",
          description:
            "Limits the response to FHIR import jobs submitted before a user- specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--submitted-after",
          description:
            "Limits the response to FHIR import jobs submitted after a user-specified date",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of all existing tags associated with a data store",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the data store to which tags are being added",
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
      name: "start-fhir-export-job",
      description: "Start a FHIR export job",
      options: [
        {
          name: "--job-name",
          description: "The export job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-data-config",
          description:
            "The output data configuration supplied when the export job was started",
          args: {
            name: "structure",
          },
        },
        {
          name: "--datastore-id",
          description:
            "The data store identifier from which files are being exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) used during initiation of the export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An optional user provided token used for ensuring API idempotency",
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
      name: "start-fhir-import-job",
      description:
        "Start importing bulk FHIR data into an ACTIVE data store. The import job imports FHIR data found in the InputDataConfig object and stores processing results in the JobOutputDataConfig object",
      options: [
        {
          name: "--job-name",
          description: "The import job name",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-config",
          description: "The input properties for the import job request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-output-data-config",
          description:
            "The output data configuration supplied when the export job was created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--datastore-id",
          description: "The data store identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) that grants access permission to AWS HealthLake",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "The optional user-provided token used for ensuring API idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-level",
          description: "The validation level of the import job",
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
      description: "Add a user-specifed key and value tag to a data store",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that grants access to the data store tags are being added to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The user-specified key and value pair tags being added to a data store",
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
      description: "Remove a user-specifed key and value tag from a data store",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the data store from which tags are being removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The keys for the tags to be removed from the data store",
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
      name: "update-fhir-datastore",
      description: "Update the properties of a FHIR-enabled data store",
      options: [
        {
          name: "--datastore-id",
          description: "The data store identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--datastore-name",
          description: "The data store name",
          args: {
            name: "string",
          },
        },
        {
          name: "--nlp-configuration",
          description:
            "The natural language processing (NLP) configuration for the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--analytics-configuration",
          description: "The analytics configuration for the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--profile-configuration",
          description: "The profile configuration for the data store",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identity-provider-configuration",
          description: "The identity provider configuration for the data store",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "fhir-datastore-active",
          description:
            "Wait until JMESPath query DatastoreProperties.DatastoreStatus returns ACTIVE when polling with ``describe-fhir-datastore``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 360 failed checks",
          options: [
            {
              name: "--datastore-id",
              description: "The data store identifier",
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
          name: "fhir-datastore-deleted",
          description:
            "Wait until JMESPath query DatastoreProperties.DatastoreStatus returns DELETED when polling with ``describe-fhir-datastore``. It will poll every 120 seconds until a successful state has been reached. This will exit with a return code of 255 after 360 failed checks",
          options: [
            {
              name: "--datastore-id",
              description: "The data store identifier",
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
          name: "fhir-export-job-completed",
          description:
            "Wait until JMESPath query ExportJobProperties.JobStatus returns COMPLETED when polling with ``describe-fhir-export-job``. It will poll every 120 seconds until a successful state has been reached. This will exit with a return code of 255 after 360 failed checks",
          options: [
            {
              name: "--datastore-id",
              description:
                "The data store identifier from which FHIR data is being exported from",
              args: {
                name: "string",
              },
            },
            {
              name: "--job-id",
              description: "The export job identifier",
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
          name: "fhir-import-job-completed",
          description:
            "Wait until JMESPath query ImportJobProperties.JobStatus returns COMPLETED when polling with ``describe-fhir-import-job``. It will poll every 120 seconds until a successful state has been reached. This will exit with a return code of 255 after 720 failed checks",
          options: [
            {
              name: "--datastore-id",
              description: "The data store identifier",
              args: {
                name: "string",
              },
            },
            {
              name: "--job-id",
              description: "The import job identifier",
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
