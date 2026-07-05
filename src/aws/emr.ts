// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "emr",
  description:
    "Amazon EMR is a web service that makes it easier to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehouse management",
  subcommands: [
    {
      name: "add-instance-fleet",
      description:
        "Adds an instance fleet to a running cluster.  The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-fleet",
          description: "Specifies the configuration of the instance fleet",
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
      name: "add-instance-groups",
      description: "Adds one or more instance groups to a running cluster",
      options: [
        {
          name: "--cluster-id",
          description: "Job flow in which to add the instance groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description: "Instance groups to add",
          args: {
            name: "list",
          },
        },
      ],
    },
    {
      name: "add-steps",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--steps",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-role-arn",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "add-tags",
      description:
        "Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tag Clusters",
      options: [
        {
          name: "--resource-id",
          description:
            "The Amazon EMR resource identifier to which tags will be added. For example, a cluster identifier or an Amazon EMR Studio ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with a resource. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-id",
          description:
            "The ID of the cluster that scopes the tag operation. Required when the resource being tagged is a session-scoped resource",
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
      name: "cancel-steps",
      description:
        "Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR releases 5.28.0 and later, you can cancel steps that are in a PENDING or RUNNING state. In earlier versions of Amazon EMR, you can only cancel steps that are in a PENDING state",
      options: [
        {
          name: "--cluster-id",
          description:
            "The ClusterID for the specified steps that will be canceled. Use RunJobFlow and ListClusters to get ClusterIDs",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-ids",
          description:
            "The list of StepIDs to cancel. Use ListSteps to get steps and their states for the specified cluster",
          args: {
            name: "list",
          },
        },
        {
          name: "--step-cancellation-option",
          description:
            "The option to choose to cancel RUNNING steps. By default, the value is SEND_INTERRUPT",
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
      name: "create-cluster",
      options: [
        {
          name: "--release-label",
          args: {
            name: "string",
          },
        },
        {
          name: "--os-release-label",
          args: {
            name: "string",
          },
        },
        {
          name: "--ami-version",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-type",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-count",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-terminate",
        },
        {
          name: "--no-auto-terminate",
        },
        {
          name: "--instance-fleets",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-uri",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-encryption-kms-key-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-role",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-role",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-default-roles",
        },
        {
          name: "--configurations",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-attributes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--termination-protected",
        },
        {
          name: "--no-termination-protected",
        },
        {
          name: "--unhealthy-node-replacement",
        },
        {
          name: "--no-unhealthy-node-replacement",
        },
        {
          name: "--scale-down-behavior",
          args: {
            name: "string",
          },
        },
        {
          name: "--visible-to-all-users",
        },
        {
          name: "--no-visible-to-all-users",
        },
        {
          name: "--enable-debugging",
        },
        {
          name: "--no-enable-debugging",
        },
        {
          name: "--tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--bootstrap-actions",
          args: {
            name: "list",
          },
        },
        {
          name: "--applications",
          args: {
            name: "list",
          },
        },
        {
          name: "--emrfs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--steps",
          args: {
            name: "list",
          },
        },
        {
          name: "--additional-info",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-from-hbase-backup",
          args: {
            name: "structure",
          },
        },
        {
          name: "--security-configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-ami-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-root-volume-size",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-root-volume-iops",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-root-volume-throughput",
          args: {
            name: "string",
          },
        },
        {
          name: "--repo-upgrade-on-boot",
          args: {
            name: "string",
          },
        },
        {
          name: "--kerberos-attributes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--step-concurrency-level",
          args: {
            name: "integer",
          },
        },
        {
          name: "--step-execution-role-arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-scaling-policy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--placement-group-configs",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-termination-policy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--monitoring-configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--extended-support",
        },
        {
          name: "--no-extended-support",
        },
        {
          name: "--session-enabled",
        },
        {
          name: "--no-session-enabled",
        },
      ],
    },
    {
      name: "create-default-roles",
      options: [
        {
          name: "--iam-endpoint",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "create-hbase-backup",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--dir",
          args: {
            name: "string",
          },
        },
        {
          name: "--consistent",
        },
      ],
    },
    {
      name: "create-persistent-app-ui",
      description: "Creates a persistent application user interface",
      options: [
        {
          name: "--target-resource-arn",
          description:
            "The unique Amazon Resource Name (ARN) of the target resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--emr-containers-config",
          description: "The EMR containers configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags for the persistent application user interface",
          args: {
            name: "list",
          },
        },
        {
          name: "--x-referer",
          description:
            "The cross reference for the persistent application user interface",
          args: {
            name: "string",
          },
        },
        {
          name: "--profiler-type",
          description:
            "The profiler type for the persistent application user interface",
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
      name: "create-security-configuration",
      description:
        "Creates a security configuration, which is stored in the service and can be specified when a cluster is created",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "The security configuration details in JSON format. For JSON parameters and examples, see Use Security Configurations to Set Up Cluster Security in the Amazon EMR Management Guide",
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
      name: "create-studio",
      description: "Creates a new Amazon EMR Studio",
      options: [
        {
          name: "--name",
          description: "A descriptive name for the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A detailed description of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-mode",
          description:
            "Specifies whether the Studio authenticates users using IAM or IAM Identity Center",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-role",
          description:
            "The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-role",
          description:
            "The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a UserRole when you use IAM Identity Center authentication. The permissions attached to the UserRole can be scoped down for each user or group using session policies",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-security-group-id",
          description:
            "The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-security-group-id",
          description:
            "The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-s3-location",
          description:
            "The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files",
          args: {
            name: "string",
          },
        },
        {
          name: "--idp-auth-url",
          description:
            "The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--idp-relay-state-parameter-name",
          description:
            "The name that your identity provider (IdP) uses for its RelayState parameter. For example, RelayState or TargetSource. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The RelayState parameter differs by IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the Amazon EMR Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters",
          args: {
            name: "list",
          },
        },
        {
          name: "--trusted-identity-propagation-enabled",
          description:
            "A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false",
        },
        {
          name: "--no-trusted-identity-propagation-enabled",
          description:
            "A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false",
        },
        {
          name: "--idc-user-assignment",
          description:
            "Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--idc-instance-arn",
          description:
            "The ARN of the IAM Identity Center instance to create the Studio application",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-key-arn",
          description:
            "The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3",
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
      name: "create-studio-session-mapping",
      description:
        "Maps a user or group to the Amazon EMR Studio specified by StudioId, and applies a session policy to refine Studio permissions for that user or group. Use CreateStudioSessionMapping to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see Assign a user or group to your EMR Studio",
      options: [
        {
          name: "--studio-id",
          description:
            "The ID of the Amazon EMR Studio to which the user or group will be mapped",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store. For more information, see UserId and GroupId in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user or group. For more information, see UserName and DisplayName in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to map to the Amazon EMR Studio is a user or a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-policy-arn",
          description:
            "The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role. For more information, see Create an Amazon EMR Studio User Role with Session Policies",
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
      name: "delete-security-configuration",
      description: "Deletes a security configuration",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration",
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
      name: "delete-studio",
      description:
        "Removes an Amazon EMR Studio from the Studio metadata store",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
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
      name: "delete-studio-session-mapping",
      description: "Removes a user or group from an Amazon EMR Studio",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group to remove from the Amazon EMR Studio. For more information, see UserId and GroupId in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user name or group to remove from the Amazon EMR Studio. For more information, see UserName and DisplayName in the IAM Identity Center Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to delete from the Amazon EMR Studio is a user or a group",
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
      name: "describe-cluster",
      description:
        "Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on",
      options: [
        {
          name: "--cluster-id",
          description: "The identifier of the cluster to describe",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "describe-notebook-execution",
      description: "Provides details of a notebook execution",
      options: [
        {
          name: "--notebook-execution-id",
          description: "The unique identifier of the notebook execution",
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
      name: "describe-persistent-app-ui",
      description: "Describes a persistent application user interface",
      options: [
        {
          name: "--persistent-app-ui-id",
          description:
            "The identifier for the persistent application user interface",
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
      name: "describe-release-label",
      description:
        "Provides Amazon EMR release label details, such as the releases available the Region where the API request is run, and the available applications for a specific Amazon EMR release label. Can also list Amazon EMR releases that support a specified version of Spark",
      options: [
        {
          name: "--release-label",
          description: "The target release label to be described",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token. Reserved for future use. Currently set to null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Reserved for future use. Currently set to null",
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
      name: "describe-security-configuration",
      description:
        "Provides the details of a security configuration by returning the configuration JSON",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration",
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
      name: "describe-step",
      description: "Provides more detail about the cluster step",
      options: [
        {
          name: "--cluster-id",
          description: "The identifier of the cluster with steps to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-id",
          description: "The identifier of the step to describe",
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
      name: "describe-studio",
      description:
        "Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on",
      options: [
        {
          name: "--studio-id",
          description: "The Amazon EMR Studio ID",
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
      name: "disable-hbase-backups",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--full",
        },
        {
          name: "--incremental",
        },
      ],
    },
    {
      name: "get",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          args: {
            name: "string",
          },
        },
        {
          name: "--src",
          args: {
            name: "string",
          },
        },
        {
          name: "--dest",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-options",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-auto-termination-policy",
      description:
        "Returns the auto-termination policy for an Amazon EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the Amazon EMR cluster for which the auto-termination policy will be fetched",
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
      name: "get-block-public-access-configuration",
      description:
        "Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide",
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
      name: "get-cluster-session-credentials",
      description:
        "Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the runtime role for interactive workload submission on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: arn:partition:service:region:account:resource",
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
      name: "get-managed-scaling-policy",
      description:
        "Fetches the attached managed scaling policy for an Amazon EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the cluster for which the managed scaling policy will be fetched",
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
      name: "get-on-cluster-app-ui-presigned-url",
      description:
        "The presigned URL properties for the cluster's application user interface",
      options: [
        {
          name: "--cluster-id",
          description:
            "The cluster ID associated with the cluster's application user interface presigned URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-cluster-app-ui-type",
          description:
            "The application UI type associated with the cluster's application user interface presigned URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The application ID associated with the cluster's application user interface presigned URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Determines if the user interface presigned URL is for a dry run",
        },
        {
          name: "--no-dry-run",
          description:
            "Determines if the user interface presigned URL is for a dry run",
        },
        {
          name: "--execution-role-arn",
          description:
            "The execution role ARN associated with the cluster's application user interface presigned URL",
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
      name: "get-persistent-app-ui-presigned-url",
      description:
        "The presigned URL properties for the cluster's application user interface",
      options: [
        {
          name: "--persistent-app-ui-id",
          description:
            "The persistent application user interface ID associated with the presigned URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--persistent-app-ui-type",
          description:
            "The persistent application user interface type associated with the presigned URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "The application ID associated with the presigned URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-proxy-call",
          description:
            "A boolean that represents if the caller is an authentication proxy call",
        },
        {
          name: "--no-auth-proxy-call",
          description:
            "A boolean that represents if the caller is an authentication proxy call",
        },
        {
          name: "--execution-role-arn",
          description:
            "The execution role ARN associated with the presigned URL",
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
      name: "get-session",
      description: "Returns detailed information about a session",
      options: [
        {
          name: "--cluster-id",
          description: "The ID of the cluster that the session belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The ID of the session",
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
      name: "get-session-endpoint",
      description:
        "Returns the Spark Connect endpoint URL and a time-limited authentication token for the specified session. Use the endpoint and token to connect a PySpark client to the session. Call this operation again when the token expires to obtain a new one",
      options: [
        {
          name: "--cluster-id",
          description: "The ID of the cluster that the session belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The ID of the session",
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
      name: "get-studio-session-mapping",
      description:
        "Fetches mapping details for the specified Amazon EMR Studio and identity (user or group)",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group. For more information, see UserId and GroupId in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user or group to fetch. For more information, see UserName and DisplayName in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to fetch is a user or a group",
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
      name: "install-applications",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--applications",
          args: {
            name: "list",
          },
        },
      ],
    },
    {
      name: "list-clusters",
      description:
        "Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls",
      options: [
        {
          name: "--created-after",
          description:
            "The creation date and time beginning value filter for listing clusters",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "The creation date and time end value filter for listing clusters",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cluster-states",
          description:
            "The cluster state filters to apply when listing clusters. Clusters that change state while this action runs may be not be returned as expected in the list of clusters",
          args: {
            name: "string",
          },
        },
        {
          name: "--active",
        },
        {
          name: "--terminated",
        },
        {
          name: "--failed",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-instance-fleets",
      description:
        "Lists all available details about the instance fleets in a cluster.  The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-instances",
      description:
        "Provides information for all active Amazon EC2 instances and Amazon EC2 instances terminated in the last 30 days, up to a maximum of 2,000. Amazon EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING",
      options: [
        {
          name: "--cluster-id",
          description:
            "The identifier of the cluster for which to list the instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-id",
          description:
            "The identifier of the instance group for which to list the instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-types",
          description:
            "The type of instance group for which to list the instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-fleet-id",
          description: "The unique identifier of the instance fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-fleet-type",
          description:
            "The node type of the instance fleet. For example MASTER, CORE, or TASK",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-states",
          description:
            "A list of instance states that will filter the instances returned with this request",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-notebook-executions",
      description:
        "Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple ListNotebookExecutions calls",
      options: [
        {
          name: "--editor-id",
          description:
            "The unique ID of the editor associated with the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status filter for listing notebook executions.    START_PENDING indicates that the cluster has received the execution request but execution has not begun.    STARTING indicates that the execution is starting on the cluster.    RUNNING indicates that the execution is being processed by the cluster.    FINISHING indicates that execution processing is in the final stages.    FINISHED indicates that the execution has completed without error.    FAILING indicates that the execution is failing and will not finish successfully.    FAILED indicates that the execution failed.    STOP_PENDING indicates that the cluster has received a StopNotebookExecution request and the stop is pending.    STOPPING indicates that the cluster is in the process of stopping the execution as a result of a StopNotebookExecution request.    STOPPED indicates that the execution stopped because of a StopNotebookExecution request",
          args: {
            name: "string",
          },
        },
        {
          name: "--from",
          description:
            "The beginning of time range filter for listing notebook executions. The default is the timestamp of 30 days ago",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--to",
          description:
            "The end of time range filter for listing notebook executions. The default is the current timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--execution-engine-id",
          description: "The unique ID of the execution engine",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-release-labels",
      description:
        "Retrieves release labels of Amazon EMR services in the Region where the API is called",
      options: [
        {
          name: "--filters",
          description:
            "Filters the results of the request. Prefix specifies the prefix of release labels to return. Application specifies the application (with/without version) of release labels to return",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies the next page of results. If NextToken is not specified, which is usually the case for the first request of ListReleaseLabels, the first page of results are determined by other filtering parameters or by the latest version. The ListReleaseLabels request fails if the identity (Amazon Web Services account ID) and all filtering parameters are different from the original request, or if the NextToken is expired or tampered with",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Defines the maximum number of release labels to return in a single response. The default is 100",
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
      name: "list-security-configurations",
      description:
        "Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-sessions",
      description:
        "Lists the sessions on a cluster. You can filter the results by session state. Newer sessions are returned first",
      options: [
        {
          name: "--cluster-id",
          description: "The ID of the cluster to list sessions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-states",
          description:
            "An optional filter that limits the results to sessions in the specified states",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of sessions to return in each page of results",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
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
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
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
      name: "list-steps",
      description:
        "Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request or filter by StepStates. You can specify a maximum of 10 stepIDs. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a Marker, which is a pagination token that indicates the next set of steps to retrieve",
      options: [
        {
          name: "--cluster-id",
          description:
            "The identifier of the cluster for which to list the steps",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-states",
          description:
            "The filter to limit the step list based on certain states",
          args: {
            name: "list",
          },
        },
        {
          name: "--step-ids",
          description:
            "The filter to limit the step list based on the identifier of the steps. You can specify a maximum of ten Step IDs. The character constraint applies to the overall length of the array",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-studio-session-mappings",
      description:
        "Returns a list of all user or group session mappings for the Amazon EMR Studio specified by StudioId",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether to return session mappings for users or groups. If not specified, the results include session mapping details for both users and groups",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-studios",
      description:
        "Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio",
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
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "list-supported-instance-types",
      description:
        "A list of the instance types that Amazon EMR supports. You can filter the list by Amazon Web Services Region and Amazon EMR release",
      options: [
        {
          name: "--release-label",
          description:
            "The Amazon EMR release label determines the versions of open-source application packages that Amazon EMR has installed on the cluster. Release labels are in the format emr-x.x.x, where x.x.x is an Amazon EMR release number such as emr-6.10.0. For more information about Amazon EMR releases and their included application versions and features, see the  Amazon EMR Release Guide ",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The pagination token that marks the next set of results to retrieve",
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
      name: "modify-cluster",
      description:
        "Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-concurrency-level",
          description:
            "The number of steps that can be executed concurrently. You can specify a minimum of 1 step and a maximum of 256 steps. We recommend that you do not change this parameter while steps are running or the ActionOnFailure setting may not behave as expected. For more information see Step$ActionOnFailure",
          args: {
            name: "integer",
          },
        },
        {
          name: "--extended-support",
          description: "Reserved",
        },
        {
          name: "--no-extended-support",
          description: "Reserved",
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
      name: "modify-cluster-attributes",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--visible-to-all-users",
        },
        {
          name: "--no-visible-to-all-users",
        },
        {
          name: "--termination-protected",
        },
        {
          name: "--no-termination-protected",
        },
        {
          name: "--auto-terminate",
        },
        {
          name: "--no-auto-terminate",
        },
        {
          name: "--unhealthy-node-replacement",
        },
        {
          name: "--no-unhealthy-node-replacement",
        },
      ],
    },
    {
      name: "modify-instance-fleet",
      description:
        "Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.  The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions",
      options: [
        {
          name: "--cluster-id",
          description: "The unique identifier of the cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-fleet",
          description: "The configuration parameters of the instance fleet",
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
      name: "modify-instance-groups",
      description:
        "ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically",
      options: [
        {
          name: "--cluster-id",
          description:
            "The ID of the cluster to which the instance group belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-groups",
          description: "Instance groups to change",
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
      name: "put",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          args: {
            name: "string",
          },
        },
        {
          name: "--src",
          args: {
            name: "string",
          },
        },
        {
          name: "--dest",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-options",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "put-auto-scaling-policy",
      description:
        "Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-id",
          description:
            "Specifies the ID of the instance group to which the automatic scaling policy is applied",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-policy",
          description:
            "Specifies the definition of the automatic scaling policy",
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
      name: "put-auto-termination-policy",
      description:
        "Auto-termination is supported in Amazon EMR releases 5.30.0 and 6.1.0 and later. For more information, see Using an auto-termination policy.  Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see Control cluster termination",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the Amazon EMR cluster to which the auto-termination policy will be attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-termination-policy",
          description:
            "Specifies the auto-termination policy to attach to the cluster",
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
      name: "put-block-public-access-configuration",
      description:
        "Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see Configure Block Public Access for Amazon EMR in the Amazon EMR Management Guide",
      options: [
        {
          name: "--block-public-access-configuration",
          description:
            "A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using PermittedPublicSecurityGroupRuleRanges in the BlockPublicAccessConfiguration. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating BlockPublicSecurityGroupRules to remove the exception.  For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an Amazon EMR cluster in a Region before this date, block public access is enabled by default in that Region",
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
      name: "put-managed-scaling-policy",
      description:
        "Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as Amazon EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of an Amazon EMR cluster where the managed scaling policy is attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-scaling-policy",
          description:
            "Specifies the constraints for the managed scaling policy",
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
      name: "remove-auto-scaling-policy",
      description:
        "Removes an automatic scaling policy from a specified instance group within an Amazon EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-group-id",
          description:
            "Specifies the ID of the instance group to which the scaling policy is applied",
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
      name: "remove-auto-termination-policy",
      description:
        "Removes an auto-termination policy from an Amazon EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the Amazon EMR cluster from which the auto-termination policy will be removed",
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
      name: "remove-managed-scaling-policy",
      description:
        "Removes a managed scaling policy from a specified Amazon EMR cluster",
      options: [
        {
          name: "--cluster-id",
          description:
            "Specifies the ID of the cluster from which the managed scaling policy will be removed",
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
      name: "remove-tags",
      description:
        "Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see Tag Clusters.  The following example removes the stack tag with value Prod from a cluster:",
      options: [
        {
          name: "--resource-id",
          description:
            "The Amazon EMR resource identifier from which tags will be removed. For example, a cluster identifier or an Amazon EMR Studio ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to remove from the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cluster-id",
          description:
            "The ID of the cluster that scopes the tag operation. Required when the resource being untagged is a session-scoped resource",
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
      name: "restore-from-hbase-backup",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--dir",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-version",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "schedule-hbase-backup",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          args: {
            name: "string",
          },
        },
        {
          name: "--dir",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval",
          args: {
            name: "string",
          },
        },
        {
          name: "--unit",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          args: {
            name: "string",
          },
        },
        {
          name: "--consistent",
        },
      ],
    },
    {
      name: "socks",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-options",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "ssh",
      options: [
        {
          name: "--cluster-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-pair-file",
          args: {
            name: "string",
          },
        },
        {
          name: "--command",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssh-options",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "start-notebook-execution",
      description: "Starts a notebook execution",
      options: [
        {
          name: "--editor-id",
          description:
            "The unique identifier of the Amazon EMR Notebook to use for notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--relative-path",
          description:
            "The path and file name of the notebook file for this execution, relative to the path specified for the Amazon EMR Notebook. For example, if you specify a path of s3://MyBucket/MyNotebooks when you create an Amazon EMR Notebook for a notebook with an ID of e-ABCDEFGHIJK1234567890ABCD (the EditorID of this request), and you specify a RelativePath of my_notebook_executions/notebook_execution.ipynb, the location of the file for the notebook execution is s3://MyBucket/MyNotebooks/e-ABCDEFGHIJK1234567890ABCD/my_notebook_executions/notebook_execution.ipynb",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-execution-name",
          description: "An optional name for the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-params",
          description:
            "Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-engine",
          description:
            "Specifies the execution engine (cluster) that runs the notebook execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The name or ARN of the IAM role that is used as the service role for Amazon EMR (the Amazon EMR role) for the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-instance-security-group-id",
          description:
            "The unique identifier of the Amazon EC2 security group to associate with the Amazon EMR Notebook for this notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters",
          args: {
            name: "list",
          },
        },
        {
          name: "--notebook-s3-location",
          description:
            "The Amazon S3 location for the notebook execution input",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-notebook-s3-location",
          description:
            "The Amazon S3 location for the notebook execution output",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-notebook-format",
          description: "The output format for the notebook execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-variables",
          description:
            "The environment variables associated with the notebook execution",
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
      name: "start-session",
      description:
        "Creates and starts a new Spark Connect session on the specified cluster. The cluster must be in the RUNNING or WAITING state and have sessions enabled. This operation is supported in Amazon EMR Spark 8.0.0 and later",
      options: [
        {
          name: "--name",
          description: "An optional name for the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-id",
          description: "The ID of the cluster on which to start the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The execution role ARN for the session. Amazon EMR uses this role to access Amazon Web Services resources on your behalf during session execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-configurations",
          description:
            "The configuration overrides for the session. Only runtime configuration overrides are supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--monitoring-configuration",
          description:
            "The monitoring configuration that controls where session logs are published, such as Amazon S3, CloudWatch, or managed logging",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session-idle-timeout-in-minutes",
          description:
            "The idle timeout, in minutes. If the session is idle for this duration, Amazon EMR EC2 automatically terminates it",
          args: {
            name: "long",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client request token, the service returns the original response without performing the operation again",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to assign to the session",
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
      name: "stop-notebook-execution",
      description: "Stops a notebook execution",
      options: [
        {
          name: "--notebook-execution-id",
          description: "The unique identifier of the notebook execution",
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
      name: "terminate-clusters",
      options: [
        {
          name: "--cluster-ids",
          args: {
            name: "list",
          },
        },
      ],
    },
    {
      name: "terminate-session",
      description:
        "Terminates an active session. After you call this operation, the session enters the TERMINATING state and then transitions to TERMINATED",
      options: [
        {
          name: "--cluster-id",
          description: "The ID of the cluster that the session belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The ID of the session to terminate",
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
      name: "update-studio",
      description:
        "Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A descriptive name for the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A detailed description to assign to the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "A list of subnet IDs to associate with the Amazon EMR Studio. The list can include new subnet IDs, but must also include all of the subnet IDs previously associated with the Studio. The list order does not matter. A Studio can have a maximum of 5 subnets. The subnets must belong to the same VPC as the Studio",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-s3-location",
          description:
            "The Amazon S3 location to back up Workspaces and notebook files for the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-key-arn",
          description:
            "The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3",
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
      name: "update-studio-session-mapping",
      description:
        "Updates the session policy attached to the user or group for the specified Amazon EMR Studio",
      options: [
        {
          name: "--studio-id",
          description: "The ID of the Amazon EMR Studio",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-id",
          description:
            "The globally unique identifier (GUID) of the user or group. For more information, see UserId and GroupId in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-name",
          description:
            "The name of the user or group to update. For more information, see UserName and DisplayName in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "Specifies whether the identity to update is a user or a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the session policy to associate with the specified user or group",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "cluster-running",
          description:
            "Wait until JMESPath query Cluster.Status.State returns RUNNING when polling with ``describe-cluster``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-id",
              description: "The identifier of the cluster to describe",
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
          name: "step-complete",
          description:
            "Wait until JMESPath query Step.Status.State returns COMPLETED when polling with ``describe-step``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-id",
              description:
                "The identifier of the cluster with steps to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--step-id",
              description: "The identifier of the step to describe",
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
          name: "cluster-terminated",
          description:
            "Wait until JMESPath query Cluster.Status.State returns TERMINATED when polling with ``describe-cluster``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--cluster-id",
              description: "The identifier of the cluster to describe",
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
