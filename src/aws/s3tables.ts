// Generated from awscli 2.35.15 data by scripts/generate-aws-specs.mjs — do not edit by hand
const completionSpec: Fig.Spec = {
  name: "s3tables",
  description:
    "An Amazon S3 table represents a structured dataset consisting of tabular data in Apache Parquet format and related metadata. This data is stored inside an S3 table as a subresource. All tables in a table bucket are stored in the Apache Iceberg table format. Through integration with the Amazon Web Services Glue Data Catalog you can interact with your tables using Amazon Web Services analytics services, such as Amazon Athena and Amazon Redshift. Amazon S3 manages maintenance of your tables through automatic file compaction and snapshot management. For more information, see Amazon S3 table buckets",
  subcommands: [
    {
      name: "create-namespace",
      description:
        "Creates a namespace. A namespace is a logical grouping of tables within your table bucket, which you can use to organize tables. For more information, see Create a namespace in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:CreateNamespace permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket to create the namespace in",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "A name for the namespace",
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
      name: "create-table",
      description:
        "Creates a new table associated with the given namespace in a table bucket. For more information, see Creating an Amazon S3 table in the Amazon Simple Storage Service User Guide.  Permissions    You must have the s3tables:CreateTable permission to use this operation.    If you use this operation with the optional metadata request parameter you must have the s3tables:PutTableData permission.    If you use this operation with the optional encryptionConfiguration request parameter you must have the s3tables:PutTableEncryption permission.    If you use this operation with the storageClassConfiguration request parameter, you must have the s3tables:PutTableStorageClass permission.   To create a table with tags, you must have the s3tables:TagResource permission in addition to s3tables:CreateTable permission.    Additionally, If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket to create the table in",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace to associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description: "The format for the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "The metadata for the table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration to use for the table. This configuration specifies the encryption algorithm and, if using SSE-KMS, the KMS key to use for encrypting the table.   If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-class-configuration",
          description:
            "The storage class configuration for the table. If not specified, the table inherits the storage class configuration from its table bucket. Specify this parameter to override the bucket's default storage class for this table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of user-defined tags that you would like to apply to the table that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize, track costs for, and control access to resources. For more information, see Tagging for cost allocation or attribute-based access control (ABAC).  You must have the s3tables:TagResource permission in addition to s3tables:CreateTable permission to create a table with tags",
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
      name: "create-table-bucket",
      description:
        "Creates a table bucket. For more information, see Creating a table bucket in the Amazon Simple Storage Service User Guide.  Permissions    You must have the s3tables:CreateTableBucket permission to use this operation.    If you use this operation with the optional encryptionConfiguration parameter you must have the s3tables:PutTableBucketEncryption permission.   If you use this operation with the storageClassConfiguration request parameter, you must have the s3tables:PutTableBucketStorageClass permission.   To create a table bucket with tags, you must have the s3tables:TagResource permission in addition to s3tables:CreateTableBucket permission",
      options: [
        {
          name: "--name",
          description: "The name for the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration to use for the table bucket. This configuration specifies the default encryption settings that will be applied to all tables created in this bucket unless overridden at the table level. The configuration includes the encryption algorithm and, if using SSE-KMS, the KMS key to use",
          args: {
            name: "structure",
          },
        },
        {
          name: "--storage-class-configuration",
          description:
            "The default storage class configuration for the table bucket. This configuration will be applied to all new tables created in this bucket unless overridden at the table level. If not specified, the service default storage class will be used",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of user-defined tags that you would like to apply to the table bucket that you are creating. A tag is a key-value pair that you apply to your resources. Tags can help you organize and control access to resources. For more information, see Tagging for cost allocation or attribute-based access control (ABAC).  You must have the s3tables:TagResource permission in addition to s3tables:CreateTableBucket permisson to create a table bucket with tags",
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
      name: "delete-namespace",
      description:
        "Deletes a namespace. For more information, see Delete a namespace in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:DeleteNamespace permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket associated with the namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The name of the namespace",
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
      name: "delete-table",
      description:
        "Deletes a table. For more information, see Deleting an Amazon S3 table in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:DeleteTable permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket that contains the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description: "The version token of the table",
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
      name: "delete-table-bucket",
      description:
        "Deletes a table bucket. For more information, see Deleting a table bucket in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:DeleteTableBucket permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "delete-table-bucket-encryption",
      description:
        "Deletes the encryption configuration for a table bucket.  Permissions  You must have the s3tables:DeleteTableBucketEncryption permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "delete-table-bucket-metrics-configuration",
      description:
        "Deletes the metrics configuration for a table bucket.  Permissions  You must have the s3tables:DeleteTableBucketMetricsConfiguration permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "delete-table-bucket-policy",
      description:
        "Deletes a table bucket policy. For more information, see Deleting a table bucket policy in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:DeleteTableBucketPolicy permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "delete-table-bucket-replication",
      description:
        "Deletes the replication configuration for a table bucket. After deletion, new table updates will no longer be replicated to destination buckets, though existing replicated tables will remain in destination buckets.  Permissions  You must have the s3tables:DeleteTableBucketReplication permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description:
            "A version token from a previous GetTableBucketReplication call. Use this token to ensure you're deleting the expected version of the configuration",
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
      name: "delete-table-policy",
      description:
        "Deletes a table policy. For more information, see Deleting a table policy in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:DeleteTablePolicy permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket that contains the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The table name",
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
      name: "delete-table-replication",
      description:
        "Deletes the replication configuration for a specific table. After deletion, new updates to this table will no longer be replicated to destination tables, though existing replicated copies will remain in destination buckets.  Permissions  You must have the s3tables:DeleteTableReplication permission to use this operation",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description:
            "A version token from a previous GetTableReplication call. Use this token to ensure you're deleting the expected version of the configuration",
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
      name: "get-namespace",
      description:
        "Gets details about a namespace. For more information, see Table namespaces in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetNamespace permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The name of the namespace",
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
      name: "get-table",
      description:
        "Gets details about a table. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetTable permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The name of the namespace the table is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
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
      name: "get-table-bucket",
      description:
        "Gets details on a table bucket. For more information, see Viewing details about an Amazon S3 table bucket in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetTableBucket permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "get-table-bucket-encryption",
      description:
        "Gets the encryption configuration for a table bucket.  Permissions  You must have the s3tables:GetTableBucketEncryption permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "get-table-bucket-maintenance-configuration",
      description:
        "Gets details about a maintenance configuration for a given table bucket. For more information, see Amazon S3 table bucket maintenance in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetTableBucketMaintenanceConfiguration permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration",
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
      name: "get-table-bucket-metrics-configuration",
      description:
        "Gets the metrics configuration for a table bucket.  Permissions  You must have the s3tables:GetTableBucketMetricsConfiguration permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "get-table-bucket-policy",
      description:
        "Gets details about a table bucket policy. For more information, see Viewing a table bucket policy in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetTableBucketPolicy permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "get-table-bucket-replication",
      description:
        "Retrieves the replication configuration for a table bucket.This operation returns the IAM role, versionToken, and replication rules that define how tables in this bucket are replicated to other buckets.  Permissions  You must have the s3tables:GetTableBucketReplication permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "get-table-bucket-storage-class",
      description:
        "Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.  Permissions  You must have the s3tables:GetTableBucketStorageClass permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "get-table-encryption",
      description:
        "Gets the encryption configuration for a table.  Permissions  You must have the s3tables:GetTableEncryption permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket containing the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
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
      name: "get-table-maintenance-configuration",
      description:
        "Gets details about the maintenance configuration of a table. For more information, see S3 Tables maintenance in the Amazon Simple Storage Service User Guide.  Permissions    You must have the s3tables:GetTableMaintenanceConfiguration permission to use this operation.    You must have the s3tables:GetTableData permission to use set the compaction strategy to sort or zorder",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
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
      name: "get-table-maintenance-job-status",
      description:
        "Gets the status of a maintenance job for a table. For more information, see S3 Tables maintenance in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetTableMaintenanceJobStatus permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The name of the namespace the table is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the table containing the maintenance job status you want to check",
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
      name: "get-table-metadata-location",
      description:
        "Gets the location of the table metadata.  Permissions  You must have the s3tables:GetTableMetadataLocation permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
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
      name: "get-table-policy",
      description:
        "Gets details about a table policy. For more information, see Viewing a table policy in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:GetTablePolicy permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket that contains the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
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
      name: "get-table-record-expiration-configuration",
      description:
        "Retrieves the expiration configuration settings for records in a table, and the status of the configuration. If the status of the configuration is enabled, records expire and are automatically removed from the table after the specified number of days.  Permissions  You must have the s3tables:GetTableRecordExpirationConfiguration permission to use this operation",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
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
      name: "get-table-record-expiration-job-status",
      description:
        "Retrieves the status, metrics, and details of the latest record expiration job for a table. This includes when the job ran, and whether it succeeded or failed. If the job ran successfully, this also includes statistics about the records that were removed.  Permissions  You must have the s3tables:GetTableRecordExpirationJobStatus permission to use this operation",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
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
      name: "get-table-replication",
      description:
        "Retrieves the replication configuration for a specific table.  Permissions  You must have the s3tables:GetTableReplication permission to use this operation",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
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
      name: "get-table-replication-status",
      description:
        "Retrieves the replication status for a table, including the status of replication to each destination. This operation provides visibility into replication health and progress.  Permissions  You must have the s3tables:GetTableReplicationStatus permission to use this operation",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
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
      name: "get-table-storage-class",
      description:
        "Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration.  Permissions  You must have the s3tables:GetTableStorageClass permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket that contains the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
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
      name: "list-namespaces",
      description:
        "Lists the namespaces within a table bucket. For more information, see Table namespaces in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:ListNamespaces permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description: "The prefix of the namespaces",
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
      name: "list-table-buckets",
      description:
        "Lists table buckets for your account. For more information, see S3 Table buckets in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:ListTableBuckets permission to use this operation",
      options: [
        {
          name: "--prefix",
          description: "The prefix of the table buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of table buckets to filter by in the list",
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
      name: "list-tables",
      description:
        "List tables in the given table bucket. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:ListTables permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the tables",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description: "The prefix of the tables",
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
      description:
        "Lists all of the tags applied to a specified Amazon S3 Tables resource. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to resources.   For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.   Permissions  For tables and table buckets, you must have the s3tables:ListTagsForResource permission to use this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you want to list tags for. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see Managing tags for Amazon S3 resources",
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
      name: "put-table-bucket-encryption",
      description:
        "Sets the encryption configuration for a table bucket.  Permissions  You must have the s3tables:PutTableBucketEncryption permission to use this operation.  If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption in the Amazon Simple Storage Service User Guide",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration to apply to the table bucket",
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
      name: "put-table-bucket-maintenance-configuration",
      description:
        "Creates a new maintenance configuration or replaces an existing maintenance configuration for a table bucket. For more information, see Amazon S3 table bucket maintenance in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:PutTableBucketMaintenanceConfiguration permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the maintenance configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description:
            "Defines the values of the maintenance configuration for the table bucket",
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
      name: "put-table-bucket-metrics-configuration",
      description:
        "Sets the metrics configuration for a table bucket.  Permissions  You must have the s3tables:PutTableBucketMetricsConfiguration permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
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
      name: "put-table-bucket-policy",
      description:
        "Creates a new table bucket policy or replaces an existing table bucket policy for a table bucket. For more information, see Adding a table bucket policy in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:PutTableBucketPolicy permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-policy",
          description: "The JSON that defines the policy",
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
      name: "put-table-bucket-replication",
      description:
        "Creates or updates the replication configuration for a table bucket. This operation defines how tables in the source bucket are replicated to destination buckets. Replication helps ensure data availability and disaster recovery across regions or accounts.  Permissions    You must have the s3tables:PutTableBucketReplication permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source bucket and write permissions to all destination buckets.   You must also have the following permissions:    s3tables:GetTable permission on the source table.    s3tables:ListTables permission on the bucket containing the table.    s3tables:CreateTable permission for the destination.    s3tables:CreateNamespace permission for the destination.    s3tables:GetTableMaintenanceConfig permission for the source bucket.    s3tables:PutTableMaintenanceConfig permission for the destination bucket.     You must have iam:PassRole permission with condition allowing roles to be passed to replication.s3tables.amazonaws.com",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the source table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description:
            "A version token from a previous GetTableBucketReplication call. Use this token to ensure you're updating the expected version of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The replication configuration to apply, including the IAM role and replication rules",
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
      name: "put-table-bucket-storage-class",
      description:
        "Sets or updates the storage class configuration for a table bucket. This configuration serves as the default storage class for all new tables created in the bucket, allowing you to optimize storage costs at the bucket level.  Permissions  You must have the s3tables:PutTableBucketStorageClass permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class-configuration",
          description:
            "The storage class configuration to apply to the table bucket. This configuration will serve as the default for new tables created in this bucket",
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
      name: "put-table-maintenance-configuration",
      description:
        "Creates a new maintenance configuration or replaces an existing maintenance configuration for a table. For more information, see S3 Tables maintenance in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:PutTableMaintenanceConfiguration permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table associated with the maintenance configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the maintenance configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description:
            "Defines the values of the maintenance configuration for the table",
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
      name: "put-table-policy",
      description:
        "Creates a new table policy or replaces an existing table policy for a table. For more information, see Adding a table policy in the Amazon Simple Storage Service User Guide.   Permissions  You must have the s3tables:PutTablePolicy permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the table bucket that contains the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-policy",
          description: "The JSON that defines the policy",
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
      name: "put-table-record-expiration-configuration",
      description:
        "Creates or updates the expiration configuration settings for records in a table, including the status of the configuration. If you enable record expiration for a table, records expire and are automatically removed from the table after the number of days that you specify.  Permissions  You must have the s3tables:PutTableRecordExpirationConfiguration permission to use this operation",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description:
            "The record expiration configuration to apply to the table, including the status (enabled or disabled) and retention period in days",
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
      name: "put-table-replication",
      description:
        "Creates or updates the replication configuration for a specific table. This operation allows you to define table-level replication independently of bucket-level replication, providing granular control over which tables are replicated and where.  Permissions    You must have the s3tables:PutTableReplication permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source table and write to all destination tables.   You must also have the following permissions:    s3tables:GetTable permission on the source table being replicated.    s3tables:CreateTable permission for the destination.    s3tables:CreateNamespace permission for the destination.    s3tables:GetTableMaintenanceConfig permission for the source table.    s3tables:PutTableMaintenanceConfig permission for the destination table.     You must have iam:PassRole permission with condition allowing roles to be passed to replication.s3tables.amazonaws.com",
      options: [
        {
          name: "--table-arn",
          description: "The Amazon Resource Name (ARN) of the source table",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description:
            "A version token from a previous GetTableReplication call. Use this token to ensure you're updating the expected version of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The replication configuration to apply to the table, including the IAM role and replication rules",
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
      name: "rename-table",
      description:
        "Renames a table or a namespace. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide.  Permissions  You must have the s3tables:RenameTable permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace associated with the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The current name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-namespace-name",
          description: "The new name for the namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-name",
          description: "The new name for the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description: "The version token of the table",
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
      description:
        "Applies one or more user-defined tags to an Amazon S3 Tables resource or updates existing tags. Each tag is a label consisting of a key and value pair. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 tags for each S3 resource.   For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.   Permissions  For tables and table buckets, you must have the s3tables:TagResource permission to use this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you're applying tags to. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see Managing tags for Amazon S3 resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The user-defined tag that you want to add to the specified S3 Tables resource. For more information, see Tagging for cost allocation or attribute-based access control (ABAC)",
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
      description:
        "Removes the specified user-defined tags from an Amazon S3 Tables resource. You can pass one or more tag keys.   For a list of S3 resources that support tagging, see Managing tags for Amazon S3 resources.   Permissions  For tables and table buckets, you must have the s3tables:UntagResource permission to use this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 Tables resource that you're removing tags from. The tagged resource can be a table bucket or a table. For a list of all S3 resources that support tagging, see Managing tags for Amazon S3 resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The array of tag keys that you're removing from the S3 Tables resource. For more information, see Tagging for cost allocation or attribute-based access control (ABAC)",
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
      name: "update-table-metadata-location",
      description:
        "Updates the metadata location for a table. The metadata location of a table must be an S3 URI that begins with the table's warehouse location. The metadata location for an Apache Iceberg table must end with .metadata.json, or if the metadata file is Gzip-compressed, .metadata.json.gz.  Permissions  You must have the s3tables:UpdateTableMetadataLocation permission to use this operation",
      options: [
        {
          name: "--table-bucket-arn",
          description: "The Amazon Resource Name (ARN) of the table bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-token",
          description: "The version token of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-location",
          description: "The new metadata location for the table",
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
