// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "dsql",
  description:
    "This is an interface reference for Amazon Aurora DSQL. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Aurora DSQL. Amazon Aurora DSQL is a serverless, distributed SQL database suitable for workloads of any size. is available in both single-Region and multi-Region configurations, so your clusters and databases are always available even if an Availability Zone or an Amazon Web Services Region are unavailable. lets you focus on using your data to acquire new insights for your business and customers",
  subcommands: [
    {
      name: "create-cluster",
      description:
        "The CreateCluster API allows you to create both single-Region clusters and multi-Region clusters. With the addition of the multiRegionProperties parameter, you can create a cluster with witness Region support and establish peer relationships with clusters in other Regions during creation.  Creating multi-Region clusters requires additional IAM permissions beyond those needed for single-Region clusters, as detailed in the Required permissions section below.   Required permissions   dsql:CreateCluster  Required to create a cluster. Resources: arn:aws:dsql:region:account-id:cluster/*   dsql:TagResource  Permission to add tags to a resource. Resources: arn:aws:dsql:region:account-id:cluster/*   dsql:PutMultiRegionProperties  Permission to configure multi-Region properties for a cluster. Resources: arn:aws:dsql:region:account-id:cluster/*   dsql:AddPeerCluster  When specifying multiRegionProperties.clusters, permission to add peer clusters. Resources:   Local cluster: arn:aws:dsql:region:account-id:cluster/*    Each peer cluster: exact ARN of each specified peer cluster    dsql:PutWitnessRegion  When specifying multiRegionProperties.witnessRegion, permission to set a witness Region. This permission is checked both in the cluster Region and in the witness Region. Resources: arn:aws:dsql:region:account-id:cluster/*  Condition Keys: dsql:WitnessRegion (matching the specified witness region)      The witness Region specified in multiRegionProperties.witnessRegion cannot be the same as the cluster's Region",
      options: [
        {
          name: "--deletion-protection-enabled",
          description:
            "If enabled, you can't delete your cluster. You must first disable this property before you can delete your cluster",
        },
        {
          name: "--no-deletion-protection-enabled",
          description:
            "If enabled, you can't delete your cluster. You must first disable this property before you can delete your cluster",
        },
        {
          name: "--kms-encryption-key",
          description:
            "The KMS key that encrypts and protects the data on your cluster. You can specify the ARN, ID, or alias of an existing key or have Amazon Web Services create a default key for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of key and value pairs to use to tag your cluster",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-region-properties",
          description:
            "The configuration settings when creating a multi-Region cluster, including the witness region and linked cluster properties",
          args: {
            name: "structure",
          },
        },
        {
          name: "--policy",
          description:
            "An optional resource-based policy document in JSON format that defines access permissions for the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-policy-lockout-safety-check",
          description:
            "An optional field that controls whether to bypass the lockout prevention check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution",
        },
        {
          name: "--no-bypass-policy-lockout-safety-check",
          description:
            "An optional field that controls whether to bypass the lockout prevention check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution",
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
      name: "create-stream",
      description:
        "Creates a new change data capture (CDC) stream for a cluster. The stream captures database changes and delivers them to the specified target destination.  Required permissions   dsql:CreateStream  Permission to create a new stream. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id   iam:PassRole  Permission to pass the IAM role specified in the target definition to the service. Resources: ARN of the IAM role specified in targetDefinition.kinesis.roleArn   kms:Decrypt  Required when the cluster uses a customer managed KMS key (CMK). Permission to decrypt data using the cluster's CMK. Resources: ARN of the KMS key used by the cluster",
      options: [
        {
          name: "--cluster-identifier",
          description: "The ID of the cluster for which to create the stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-definition",
          description:
            "The target destination configuration for the stream. Contains Kinesis stream configuration including stream ARN and IAM role ARN",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ordering",
          description:
            "The ordering mode for the stream. Determines how change events are ordered when delivered to the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description: "The format of the stream records",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A map of key and value pairs to use to tag your stream",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one",
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
      name: "delete-cluster",
      description: "Deletes a cluster in Amazon Aurora DSQL",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one",
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
      name: "delete-cluster-policy",
      description:
        "Deletes the resource-based policy attached to a cluster. This removes all access permissions defined by the policy, reverting to default access controls",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-policy-version",
          description:
            "The expected version of the policy to delete. This parameter ensures that you're deleting the correct version of the policy and helps prevent accidental deletions",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "Idempotency token so a request is only processed once",
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
      name: "delete-stream",
      description: "Deletes a stream from a cluster",
      options: [
        {
          name: "--cluster-identifier",
          description: "The ID of the cluster containing the stream to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-identifier",
          description: "The ID of the stream to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one",
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
      name: "generate-db-connect-admin-auth-token",
      options: [
        {
          name: "--hostname",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires-in",
          args: {
            name: "integer",
          },
        },
      ],
    },
    {
      name: "generate-db-connect-auth-token",
      options: [
        {
          name: "--hostname",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires-in",
          args: {
            name: "integer",
          },
        },
      ],
    },
    {
      name: "get-cluster",
      description: "Retrieves information about a cluster",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster to retrieve",
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
      name: "get-cluster-policy",
      description:
        "Retrieves the resource-based policy document attached to a cluster. This policy defines the access permissions and conditions for the cluster",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster to retrieve the policy from",
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
      name: "get-stream",
      description: "Retrieves information about a stream",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The ID of the cluster containing the stream to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-identifier",
          description: "The ID of the stream to retrieve",
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
      name: "get-vpc-endpoint-service-name",
      description: "Retrieves the VPC endpoint service name",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster to retrieve",
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
      name: "list-clusters",
      description: "Retrieves information about a list of clusters",
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
      name: "list-streams",
      description:
        "Retrieves information about a list of streams for a cluster",
      options: [
        {
          name: "--cluster-identifier",
          description: "The ID of the cluster for which to list streams",
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
      name: "list-tags-for-resource",
      description: "Lists all of the tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource for which you want to list the tags",
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
      name: "put-cluster-policy",
      description:
        "Attaches a resource-based policy to a cluster. This policy defines access permissions and conditions for the cluster, allowing you to control which principals can perform actions on the cluster",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The resource-based policy document to attach to the cluster. This should be a valid JSON policy document that defines permissions and conditions",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-policy-lockout-safety-check",
          description:
            "A flag that allows you to bypass the policy lockout safety check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution",
        },
        {
          name: "--no-bypass-policy-lockout-safety-check",
          description:
            "A flag that allows you to bypass the policy lockout safety check. When set to true, this parameter allows you to apply a policy that might lock you out of the cluster. Use with caution",
        },
        {
          name: "--expected-policy-version",
          description:
            "The expected version of the current policy. This parameter ensures that you're updating the correct version of the policy and helps prevent concurrent modification conflicts",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "Idempotency token so a request is only processed once",
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
      description: "Tags a resource with a map of key and value pairs",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource that you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of key and value pairs to use to tag your resource",
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
      description: "Removes a tag from a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource from which to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The array of keys of the tags that you want to remove",
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
      name: "update-cluster",
      description:
        "The UpdateCluster API allows you to modify both single-Region and multi-Region cluster configurations. With the multiRegionProperties parameter, you can add or modify witness Region support and manage peer relationships with clusters in other Regions.  Note that updating multi-Region clusters requires additional IAM permissions beyond those needed for standard cluster updates, as detailed in the Permissions section.   Required permissions   dsql:UpdateCluster  Permission to update a DSQL cluster. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id      dsql:PutMultiRegionProperties  Permission to configure multi-Region properties for a cluster. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id      dsql:GetCluster  Permission to retrieve cluster information. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id    dsql:AddPeerCluster  Permission to add peer clusters. Resources:   Local cluster: arn:aws:dsql:region:account-id:cluster/cluster-id     Each peer cluster: exact ARN of each specified peer cluster    dsql:RemovePeerCluster  Permission to remove peer clusters. The dsql:RemovePeerCluster permission uses a wildcard ARN pattern to simplify permission management during updates. Resources: arn:aws:dsql:*:account-id:cluster/*     dsql:PutWitnessRegion  Permission to set a witness Region. Resources: arn:aws:dsql:region:account-id:cluster/cluster-id   Condition Keys: dsql:WitnessRegion (matching the specified witness Region)  This permission is checked both in the cluster Region and in the witness Region.       The witness region specified in multiRegionProperties.witnessRegion cannot be the same as the cluster's Region.   When updating clusters with peer relationships, permissions are checked for both adding and removing peers.   The dsql:RemovePeerCluster permission uses a wildcard ARN pattern to simplify permission management during updates",
      options: [
        {
          name: "--identifier",
          description: "The ID of the cluster you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection-enabled",
          description:
            "Specifies whether to enable deletion protection in your cluster",
        },
        {
          name: "--no-deletion-protection-enabled",
          description:
            "Specifies whether to enable deletion protection in your cluster",
        },
        {
          name: "--kms-encryption-key",
          description:
            "The KMS key that encrypts and protects the data on your cluster. You can specify the ARN, ID, or alias of an existing key or have Amazon Web Services create a default key for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the Amazon Web Services SDK automatically generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-region-properties",
          description:
            "The new multi-Region cluster configuration settings to be applied during an update operation",
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
          name: "cluster-active",
          description:
            "Wait until a Cluster is ACTIVE It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--identifier",
              description: "The ID of the cluster to retrieve",
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
          name: "cluster-not-exists",
          description:
            "Wait until a Cluster is gone It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--identifier",
              description: "The ID of the cluster to retrieve",
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
          name: "stream-active",
          description:
            "Wait until a Stream is ACTIVE It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-identifier",
              description:
                "The ID of the cluster containing the stream to retrieve",
              args: {
                name: "string",
              },
            },
            {
              name: "--stream-identifier",
              description: "The ID of the stream to retrieve",
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
          name: "stream-not-exists",
          description:
            "Wait until a Stream is gone It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-identifier",
              description:
                "The ID of the cluster containing the stream to retrieve",
              args: {
                name: "string",
              },
            },
            {
              name: "--stream-identifier",
              description: "The ID of the stream to retrieve",
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
