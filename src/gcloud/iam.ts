// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag42: Fig.Option = {
  name: "--access-token-file",
  description:
    "A file path to read the access token. Use this flag to\nauthenticate `gcloud` with an access token. The credentials of\nthe active account (if exists) will be ignored. The file should\nonly contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
  args: { name: "ACCESS_TOKEN_FILE", description: "String", suggestions: [] },
};
const flag46: Fig.Option = {
  name: "--account",
  description:
    "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
  args: { name: "ACCOUNT", description: "String", suggestions: [] },
};
const flag407: Fig.Option = {
  name: "--all",
  description:
    "Remove all bindings with this role and principal, irrespective of any\nconditions",
};
const flag461: Fig.Option = {
  name: "--allowed-audiences",
  description:
    "Acceptable values for the `aud` field (audience) in the OIDC token. Token\nexchange requests are rejected if the token audience does not match one\nof the configured values. Each audience may be at most 256 characters. A\nmaximum of 10 audiences may be configured.\n+\nIf this list is empty, the OIDC token audience must be equal to\nthe full canonical resource name of the workload identity pool provider,\nwith or without the HTTPS prefix. For example:\n+\n```\n//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>\nhttps://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>\n```",
  args: { name: "ALLOWED_AUDIENCES", description: "List", suggestions: [] },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag726: Fig.Option = {
  name: "--attachment-point",
  description:
    "Resource to which the policy is attached. For valid formats, see https://cloud.google.com/iam/help/deny/attachment-point",
  args: { name: "ATTACHMENT_POINT", description: "String", suggestions: [] },
};
const flag737: Fig.Option = {
  name: "--attribute-condition",
  description:
    "A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain\ntext, to restrict which otherwise valid authentication credentials issued by the provider\nshould be accepted.\n+\nThe expression must output a boolean representing whether to allow the federation.\n+\nThe following keywords may be referenced in the expressions:\n+\n* `assertion`: JSON representing the authentication credential issued by the Provider.\n* `google`: The Google attributes mapped from the assertion in the `attribute_mappings`.\n            `google.profile_photo` and `google.display_name` are not supported.\n* `attribute`: The custom attributes mapped from the assertion in the `attribute_mappings`.\n+\nThe maximum length of the attribute condition expression is 4096 characters. If unspecified,\nall valid authentication credential will be accepted.\n+\nExample: Only allow credentials with a mapped `google.groups` value of `admins`.\n+\n         ```\n         \"'admins' in google.groups\"\n         ```",
  args: { name: "ATTRIBUTE_CONDITION", description: "String", suggestions: [] },
};
const flag738: Fig.Option = {
  name: "--attribute-condition",
  description:
    "[A Common Expression Language](https://opensource.google/projects/cel)\nexpression, in plain text, to restrict what otherwise valid authentication\ncredentials issued by the provider should not be accepted.\n+\nThe expression must output a boolean representing whether to allow the\nfederation.\n+\nThe following keywords may be referenced in the expressions:\n+\n* `assertion`: JSON representing the authentication credential issued by\n               the provider.\n* `google`: The Google attributes mapped from the assertion in the\n            `attribute_mappings`.\n* `attribute`: The custom attributes mapped from the assertion in the\n               `attribute_mappings`.\n+\nThe maximum length of the attribute condition expression is 4096\ncharacters. If unspecified, all valid authentication credential are\naccepted.\n+\nThe following example shows how to only allow credentials with a mapped\n`google.groups` value of `admins`:\n+\n```\n\"'admins' in google.groups\"\n```",
  args: { name: "ATTRIBUTE_CONDITION", description: "String", suggestions: [] },
};
const flag739: Fig.Option = {
  name: "--attribute-mapping",
  description:
    'Maps attributes from authentication credentials issued by an external\nidentity provider to Google Cloud attributes, such as `subject` and\n`segment`.\n+\nEach key must be a string specifying the Google Cloud IAM attribute to\nmap to.\n+\nThe following keys are supported:\n+\n* `google.subject`: The principal IAM is authenticating. You can reference\n                    this value in IAM bindings. This is also the\n                    subject that appears in Cloud Logging logs.\n                    Cannot exceed 127 bytes.\n+\n* `google.groups`: Groups the external identity belongs to. You can grant\n                   groups access to resources using an IAM `principalSet`\n                   binding; access applies to all members of the group.\n+\nYou can also provide custom attributes by specifying\n`attribute.{custom_attribute}`, where `{custom_attribute}` is the name of\nthe custom attribute to be mapped. You can define a maximum of 50 custom\nattributes. The maximum length of a mapped attribute key is\n100 characters, and the key can only contain the characters ```[a-z0-9_]```.\n+\nYou can reference these attributes in IAM policies to define fine-grained\naccess for a workload to Google Cloud resources. For example:\n+\n* `google.subject`: `principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}`\n+\n* `google.groups`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}`\n+\n* `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}`\n+\nEach value must be a [Common Expression Language](https://opensource.google/projects/cel)\nfunction that maps an identity provider credential to the normalized attribute specified by\nthe corresponding map key.\n+\nYou can use the `assertion` keyword in the expression to access a JSON\nrepresentation of the authentication credential issued by the provider.\n+\nThe maximum length of an attribute mapping expression is 2048 characters.\nWhen evaluated, the total size of all mapped attributes must not exceed\n8KB.\n+\nFor AWS providers, the following rules apply:\n+\n- If no attribute mapping is defined, the following default mapping\n  applies:\n+\n  ```json\n  {\n    "google.subject":"assertion.arn",\n    "attribute.aws_role":\n        "assertion.arn.contains(\'assumed-role\')"\n        " ? assertion.arn.extract(\'{account_arn}assumed-role/\')"\n        "   + \'assumed-role/\'"\n        "   + assertion.arn.extract(\'assumed-role/{role_name}/\')"\n        " : assertion.arn",\n  }\n  ```\n+\n- If any custom attribute mappings are defined, they must include a mapping\n  to the `google.subject` attribute.\n+\n\nFor OIDC providers, the following rules apply:\n+\n- Custom attribute mappings must be defined, and must include a mapping to\n  the `google.subject` attribute. For example, the following maps the\n  `sub` claim of the incoming credential to the `subject` attribute on\n  a Google token.\n+\n  ```json\n  {"google.subject": "assertion.sub"}\n  ```',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag740: Fig.Option = {
  name: "--attribute-mapping",
  description:
    'Maps attributes from authentication credentials issued by an external\nidentity provider to Google Cloud attributes, such as `subject` and\n`segment`.\n+\nEach key must be a string specifying the Google Cloud IAM attribute to\nmap to.\n+\nThe following keys are supported:\n+\n* `google.subject`: The principal IAM is authenticating. You can reference\n                    this value in IAM bindings. This is also the\n                    subject that appears in Cloud Logging logs.\n                    Cannot exceed 127 bytes.\n+\n* `google.groups`: Groups the external identity belongs to. You can grant\n                   groups access to resources using an IAM `principalSet`\n                   binding; access applies to all members of the group.\n+\nYou can also provide custom attributes by specifying\n`attribute.{custom_attribute}`, where `{custom_attribute}` is the name of\nthe custom attribute to be mapped. You can define a maximum of 50 custom\nattributes. The maximum length of a mapped attribute key is\n100 characters, and the key can only contain the characters ```[a-z0-9_]```.\n+\nYou can reference these attributes in IAM policies to define fine-grained\naccess for a workload to Google Cloud resources. For example:\n+\n* `google.subject`: `principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}`\n+\n* `google.groups`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}`\n+\n* `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}`\n+\nEach value must be a [Common Expression Language](https://opensource.google/projects/cel)\nfunction that maps an identity provider credential to the normalized attribute specified by\nthe corresponding map key.\n+\nYou can use the `assertion` keyword in the expression to access a JSON\nrepresentation of the authentication credential issued by the provider.\n+\nThe maximum length of an attribute mapping expression is 2048 characters.\nWhen evaluated, the total size of all mapped attributes must not exceed\n8KB.\n+\nFor AWS providers, the following rules apply:\n+\n- If no attribute mapping is defined, the following default mapping\n  applies:\n+\n  ```json\n  {\n    "google.subject":"assertion.arn",\n    "attribute.aws_role":\n        "assertion.arn.contains(\'assumed-role\')"\n        " ? assertion.arn.extract(\'{account_arn}assumed-role/\')"\n        "   + \'assumed-role/\'"\n        "   + assertion.arn.extract(\'assumed-role/{role_name}/\')"\n        " : assertion.arn",\n  }\n  ```\n+\n- If any custom attribute mappings are defined, they must include a mapping\n  to the `google.subject` attribute.\n+\n\nFor OIDC providers, the following rules apply:\n+\n- Custom attribute mappings must be defined, and must include a mapping to\n  the `google.subject` attribute. For example, the following maps the\n  `sub` claim of the incoming credential to the `subject` attribute on\n  a Google token.\n+\n  ```json\n  {"google.subject": "assertion.sub"}\n  ```',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag741: Fig.Option = {
  name: "--attribute-mapping",
  description:
    'Maps claims from the authentication credentials issued by the Identity Provider into Google\nCloud IAM attributes, e.g. subject, segment.\n+\nEach key must be a string specifying the Google Cloud IAM attribute to be produced.\n+\nThe following predefined keys are currently supported:\n+\n* `google.subject`: required field that indicates the principal that is being authenticated to\n                    IAM, and will be logged in all API accesses for which Cloud Audit Logging\n                    is configured.\n+\n* `google.groups`: optional field that indicates asserted groups that the user should be\n                   considered to belong to. You can create IAM bindings using the groups\n                   attribute and access to a resource will be granted if any of the groups\n                   asserted here match a group in the respective binding.\n+\n* `google.display_name`: optional field that overrides the name of the user. If not set,\n                         `google.subject` will be displayed instead. This attribute cannot be\n                         used in IAM policies. The maximum length of this field is 100\n                         characters.\n+\n* `google.profile_photo`: optional fields that may be set to a valid URL specifying the user\'s\n                          thumbnail photo. When set, the image will be visible as the user\'s\n                          profile picture. If not set, a generic user icon will be displayed\n                          instead. This attribute cannot be used in IAM policies.\n+\nCustom attributes can also be mapped by specifying `attribute.{custom_attribute}`, replacing\n`{custom_attribute}` with the name of the custom attribute to be mapped. A maximum of 50\ncustom attribute mappings can be defined. The maximum length of a mapped attribute key is 2048\ncharacters and can only contain the characters ```[a-z0-9_]```.\n+\nThese attributes can then be referenced in IAM policies to define fine-grained access for the\nworkforce pool to Google Cloud resources by specifying:\n+\n* `google.subject`: `principal://iam.googleapis.com/locations/global/workforcePools/{pool}/subject/{value}`\n+\n* `google.groups`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/group/{value}`\n+\n* `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/attribute.{custom_attribute}/{value}`\n+\nEach value must be a [Common Expression Language](https://opensource.google/projects/cel)\nfunction that maps an Identity Provider credential to the normalized attribute specified by\nthe corresponding map key.\n+\nThe following keywords may be referenced in the expressions:\n+\n* `assertion`: JSON representing the authentication credential issued by the Identity\n               Provider.\n+\nThe maximum length of an attribute mapping expression is 2048 characters. When evaluated, the\ntotal size of all mapped attributes must not exceed 8KB.\n+\nExample: Map the `sub` claim of the incoming credential to the\n         `subject` Google Cloud IAM attribute.\n+\n         ```json\n         {"google.subject": "assertion.sub"}\n         ```',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag742: Fig.Option = {
  name: "--attribute-mapping",
  description:
    'Maps claims from the authentication credentials issued by the Identity Provider into Google\nCloud IAM attributes, e.g. subject, segment.\n+\nEach key must be a string specifying the Google Cloud IAM attribute to be produced.\n+\nThe following predefined keys are currently supported:\n+\n* `google.subject`: required field that indicates the principal that is being authenticated to\n                    IAM, and will be logged in all API accesses for which Cloud Audit Logging\n                    is configured.\n+\n* `google.groups`: optional field that indicates asserted groups that the user should be\n                   considered to belong to. You can create IAM bindings using the groups\n                   attribute and access to a resource will be granted if any of the groups\n                   asserted here match a group in the respective binding.\n+\n* `google.display_name`: optional field that overrides the name of the user. If not set,\n                         `google.subject` will be displayed instead. This attribute cannot be\n                         used in IAM policies. The maximum length of this field is 100\n                         characters.\n+\n* `google.profile_photo`: optional fields that may be set to a valid URL specifying the user\'s\n                          thumbnail photo. When set, the image will be visible as the user\'s\n                          profile picture. If not set, a generic user icon will be displayed\n                          instead. This attribute cannot be used in IAM policies.\n+\nCustom attributes can also be mapped by specifying `attribute.{custom_attribute}`, replacing\n`{custom_attribute}` with the name of the custom attribute to be mapped. A maximum of 50\ncustom attribute mappings can be defined. The maximum length of a mapped attribute key is 2048\ncharacters and can only contain the characters ```[a-z0-9_]```.\n+\nThese attributes can then be referenced in IAM policies to define fine-grained access for the\nworkforce pool to Google Cloud resources by specifying:\n+\n* `google.subject`: `principal://iam.googleapis.com/locations/global/workforcePools/{pool}/subject/{value}`\n+\n* `google.groups`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/group/{value}`\n+\n* `attribute.{custom_attribute}`: `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool}/attribute.{custom_attribute}/{value}`\n+\nEach value must be a [Common Expression Language](https://opensource.google/projects/cel)\nfunction that maps an Identity Provider credential to the normalized attribute specified by\nthe corresponding map key.\n+\nThe following keywords may be referenced in the expressions:\n+\n* `assertion`: JSON representing the authentication credential issued by the Identity\n               Provider.\n+\nThe maximum length of an attribute mapping expression is 2048 characters. When evaluated, the\ntotal size of all mapped attributes must not exceed 8KB.\n+\nExample: Map the `sub` claim of the incoming credential to the\n         `subject` Google Cloud IAM attribute.\n+\n         ```json\n         {"google.subject": "assertion.sub"}\n         ```',
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag1484: Fig.Option = {
  name: "--clear-annotations",
  description: "Clear annotations value and set to empty map",
};
const flag1659: Fig.Option = {
  name: "--clear-extended-attributes-config",
  description: "Clear the extended attributes configuration",
};
const flag1662: Fig.Option = {
  name: "--clear-extra-attributes-config",
  description: "Clear the extra attributes configuration",
};
const flag1870: Fig.Option = {
  name: "--clear-scim-usage",
  description:
    "Clear the SCIM usage configuration, resetting it to unspecified",
};
const flag1974: Fig.Option = {
  name: "--client-secret-value",
  description:
    "The OIDC client secret. Required to enable Authorization Code flow for web sign-in",
  args: { name: "CLIENT_SECRET_VALUE", description: "String", suggestions: [] },
};
const flag2211: Fig.Option = {
  name: "--condition-description",
  description:
    "Description of the expression. This is a longer text which\ndescribes the expression, e.g. when hovered over it in a UI",
  args: {
    name: "CONDITION_DESCRIPTION",
    description: "String",
    suggestions: [],
  },
};
const flag2216: Fig.Option = {
  name: "--condition-expression",
  description:
    "Textual representation of an expression in Common Expression Language\nsyntax",
  args: {
    name: "CONDITION_EXPRESSION",
    description: "String",
    suggestions: [],
  },
};
const flag2218: Fig.Option = {
  name: "--condition-from-file",
  description:
    "Path to a local JSON or YAML file that defines the condition.\nTo see available fields, see the help for `--condition`. Use a full or relative path to a local file containing the value of condition",
  args: {
    name: "CONDITION_FROM_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag2220: Fig.Option = {
  name: "--condition-location",
  description:
    "String indicating the location of the expression for error\nreporting, e.g. a file name and a position in the file",
  args: { name: "CONDITION_LOCATION", description: "String", suggestions: [] },
};
const flag2222: Fig.Option = {
  name: "--condition-title",
  description:
    "Title for the expression, i.e. a short string describing\nits purpose. This can be used e.g. in UIs which allow to enter the\nexpression",
  args: { name: "CONDITION_TITLE", description: "String", suggestions: [] },
};
const flag2225: Fig.Option = {
  name: "--condition",
  description:
    "A condition to include in the binding. When the condition is explicitly\nspecified as `None` (`--condition=None`), a binding without a condition is\nadded. When the condition is specified and is not `None`, `--role` cannot be a\nbasic role. Basic roles are `roles/editor`, `roles/owner`, and `roles/viewer`.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2228: Fig.Option = {
  name: "--condition",
  description:
    "The condition of the binding that you want to remove. When the condition is\nexplicitly specified as `None` (`--condition=None`), a binding without a\ncondition is removed. Otherwise, only a binding with a condition that exactly\nmatches the specified condition (including the optional description) is removed.\nFor more on conditions, refer to the conditions overview guide:\nhttps://cloud.google.com/iam/docs/conditions-overview\n+\nWhen using the `--condition` flag, include the following key-value pairs:\n+\n*expression*::: (Required) Condition expression that evaluates to True or False.\nThis uses a subset of Common Expression Language syntax.\n+\nIf the condition expression includes a comma, use a different delimiter to\nseparate the key-value pairs. Specify the delimiter before listing the\nkey-value pairs. For example, to specify a colon (`:`) as the delimiter, do the\nfollowing: `--condition=^:^title=TITLE:expression=EXPRESSION`. For more\ninformation, see https://cloud.google.com/sdk/gcloud/reference/topic/escaping.\n+\n*title*::: (Required) A short string describing the purpose of the expression.\n+\n*description*::: (Optional) Additional description for the expression",
  args: { name: "KEY=VALUE", description: "Dict", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2379: Fig.Option = {
  name: "--container-id-filter",
  description:
    "Apply a filter on the container ids of the attestation rules\n                being listed. Expects a comma-delimited string of project\n                numbers in the format `projects/<project-number>,...`",
  args: { name: "CONTAINER_ID_FILTER", description: "String", suggestions: [] },
};
const flag2551: Fig.Option = {
  name: "--credential-source-field-name",
  description: "Subject token field name (key) in a JSON credential source",
  args: {
    name: "CREDENTIAL_SOURCE_FIELD_NAME",
    description: "String",
    suggestions: [],
  },
};
const flag2554: Fig.Option = {
  name: "--credential-source-headers",
  description: "Headers to use when querying the credential-source-url",
  args: { name: "key=value", description: "Dict", suggestions: [] },
};
const flag2555: Fig.Option = {
  name: "--credential-source-type",
  description: "Format of the credential source (JSON or text)",
  args: {
    name: "CREDENTIAL_SOURCE_TYPE",
    description: "String",
    suggestions: [],
  },
};
const flag3049: Fig.Option = {
  name: "--description",
  description: "A description for the provider. Cannot exceed 256 characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3051: Fig.Option = {
  name: "--description",
  description:
    "A description for the workforce pool provider. Cannot exceed 256 characters in length",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3052: Fig.Option = {
  name: "--description",
  description:
    "A description for the workforce pool. Cannot exceed 256 characters in length",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3065: Fig.Option = {
  name: "--description",
  description:
    "A description of the OAuth client. Cannot exceed 256 characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3069: Fig.Option = {
  name: "--description",
  description: "A description of the managed identity",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3070: Fig.Option = {
  name: "--description",
  description: "A description of the namespace",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3073: Fig.Option = {
  name: "--description",
  description: "A description of the pool. Cannot exceed 256 characters",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3268: Fig.Option = {
  name: "--description",
  description:
    "Optional, user-specified description for the SCIM tenant (max 256 characters)",
  args: { name: "DESCRIPTION", description: "String", suggestions: [] },
};
const flag3483: Fig.Option = {
  name: "--detailed-audit-logging",
  description:
    "Enables detailed audit logging for this provider, which populates additional debug information\nin STS Cloud Audit Logs. Specify `--no-detailed-audit-logging` to disable it",
};
const flag3487: Fig.Option = {
  name: "--details-enforcement-version",
  description:
    "The version number (for example, `1` or `latest`) that indicates which\npermissions are able to be blocked by the policy. If empty, the PAB policy\nversion will be set to the most recent version number at the time of the\npolicy's creation",
  args: {
    name: "DETAILS_ENFORCEMENT_VERSION",
    description: "String",
    suggestions: [],
  },
};
const flag3627: Fig.Option = {
  name: "--disabled",
  description:
    "Disables the OAuth client credential. You cannot use a disabled OAuth client credential for\nOAuth. Include `--no-disabled` to enable a disabled OAuth client credential",
};
const flag3628: Fig.Option = {
  name: "--disabled",
  description:
    "Disables the OAuth client. You cannot use a disabled OAuth client for login. Include `--no-disabled` to enable a disabled OAuth client",
};
const flag3629: Fig.Option = {
  name: "--disabled",
  description:
    "Disables the workforce pool provider. You cannot use a disabled provider to perform\nnew token exchanges or sign-ins. However, existing tokens still grant access. Specify\n`--no-disabled` to enable a disabled pool",
};
const flag3636: Fig.Option = {
  name: "--disabled",
  description:
    "Whether the managed identity is disabled. If disabled, credentials may no longer be issued for\nthis identity. Existing credentials may continue to be accepted until they expire",
};
const flag3637: Fig.Option = {
  name: "--disabled",
  description:
    "Whether the namespace is disabled. If disabled, credentials may no longer be issued for\nidentities in this namespace. Existing credentials may continue to be accepted until they\nexpire",
};
const flag3638: Fig.Option = {
  name: "--disabled",
  description:
    "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use\nexisting tokens to access resources. If the pool is re-enabled, existing tokens grant access\nagain",
};
const flag3639: Fig.Option = {
  name: "--disabled",
  description:
    "Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.\nHowever, existing tokens still grant access",
};
const flag3683: Fig.Option = {
  name: "--display-name",
  description:
    "A display name for the OAuth client credential. Cannot exceed 32 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3684: Fig.Option = {
  name: "--display-name",
  description:
    "A display name for the OAuth client. Cannot exceed 32 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3685: Fig.Option = {
  name: "--display-name",
  description: "A display name for the pool. Cannot exceed 32 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3686: Fig.Option = {
  name: "--display-name",
  description: "A display name for the provider. Cannot exceed 32 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3687: Fig.Option = {
  name: "--display-name",
  description:
    "A display name for the workforce pool provider. Cannot exceed 32 characters in length",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3688: Fig.Option = {
  name: "--display-name",
  description:
    "A display name for the workforce pool. Cannot exceed 32 characters in length",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3776: Fig.Option = {
  name: "--display-name",
  description:
    "Optional, user-specified display name for the SCIM tenant (max 32 characters)",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3786: Fig.Option = {
  name: "--display-name",
  description:
    "The description of the policy binding. Must be less than or equal to 63\ncharacters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag3787: Fig.Option = {
  name: "--display-name",
  description:
    "The description of the principal access boundary policy. Must be less than\nor equal to 63 characters",
  args: { name: "DISPLAY_NAME", description: "String", suggestions: [] },
};
const flag4523: Fig.Option = {
  name: "--etag",
  description:
    "Etag that identifies the version of the existing policy. It can be obtained by running `gcloud iam policies get`. When deleting a policy, if the etag is omitted, the policy is deleted regardless of its current etag. When updating a policy, if the etag is omitted, the update uses the etag provided in the policy file",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4534: Fig.Option = {
  name: "--etag",
  description:
    "The etag for the policy binding.\nIf this is provided on update, it must match the server's etag",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4535: Fig.Option = {
  name: "--etag",
  description:
    "The etag for the principal access boundary.\nIf this is provided on update, it must match the server's etag",
  args: { name: "ETAG", description: "String", suggestions: [] },
};
const flag4610: Fig.Option = {
  name: "--executable-command",
  description:
    "The full command to run to retrieve the credential. Must be an absolute path for the program including arguments",
  args: { name: "EXECUTABLE_COMMAND", description: "String", suggestions: [] },
};
const flag4612: Fig.Option = {
  name: "--executable-output-file",
  description: "Absolute path to the file storing the executable response",
  args: {
    name: "EXECUTABLE_OUTPUT_FILE",
    description: "String",
    suggestions: [],
  },
};
const flag4613: Fig.Option = {
  name: "--executable-timeout-millis",
  description:
    "Timeout duration, in milliseconds, to wait for the executable to finish",
  args: {
    name: "EXECUTABLE_TIMEOUT_MILLIS",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag4699: Fig.Option = {
  name: "--extended-attributes-client-id",
  description:
    "The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products. The --extended-attributes-client-id flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_CLIENT_ID",
    description: "String",
    suggestions: [],
  },
};
const flag4700: Fig.Option = {
  name: "--extended-attributes-client-id",
  description:
    "The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products. The --extended-attributes-client-id flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_CLIENT_ID",
    description: "String",
    suggestions: [],
  },
};
const flag4701: Fig.Option = {
  name: "--extended-attributes-client-secret-value",
  description:
    "The OAuth 2.0 client secret for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products. The --extended-attributes-client-secret-value flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_CLIENT_SECRET_VALUE",
    description: "String",
    suggestions: [],
  },
};
const flag4702: Fig.Option = {
  name: "--extended-attributes-client-secret-value",
  description:
    "The OAuth 2.0 client secret for retrieving extended attributes from the identity provider. Required to get extended group memberships for a subset of Google Cloud products. The --extended-attributes-client-secret-value flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_CLIENT_SECRET_VALUE",
    description: "String",
    suggestions: [],
  },
};
const flag4703: Fig.Option = {
  name: "--extended-attributes-filter",
  description:
    "The filter used to request specific records from the IdP. By default, all of the groups that are associated with a user are fetched. For Microsoft Entra ID, you can add `$search` query parameters using [Keyword Query Language] (https://learn.microsoft.com/en-us/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference). To learn more about `$search` querying in Microsoft Entra ID, see [Use the `$search` query parameter] (https://learn.microsoft.com/en-us/graph/search-query-parameter). \n+\nAdditionally, Workforce Identity Federation automatically adds the following [`$filter` query parameters] (https://learn.microsoft.com/en-us/graph/filter-query-parameter), based on the value of `attributes_type`. Values passed to `filter` are converted to `$search` query parameters. Additional `$filter` query parameters cannot be added using this field. \n+\n* `AZURE_AD_GROUPS_ID`: `securityEnabled` filter is applied. The --extended-attributes-filter flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_FILTER",
    description: "String",
    suggestions: [],
  },
};
const flag4704: Fig.Option = {
  name: "--extended-attributes-issuer-uri",
  description:
    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document. The --extended-attributes-issuer-uri flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_ISSUER_URI",
    description: "String",
    suggestions: [],
  },
};
const flag4705: Fig.Option = {
  name: "--extended-attributes-issuer-uri",
  description:
    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme. Required to get the OIDC discovery document. The --extended-attributes-issuer-uri flag is restricted. We suggest you use SCIM instead",
  args: {
    name: "EXTENDED_ATTRIBUTES_ISSUER_URI",
    description: "String",
    suggestions: [],
  },
};
const flag4706: Fig.Option = {
  name: "--extended-attributes-type",
  description:
    "Represents the identity provider and type of claims that should be fetched. The --extended-attributes-type flag is restricted. We suggest you use SCIM instead. _EXTENDED_ATTRIBUTES_TYPE_ must be (only one value is supported): *azure-ad-groups-id*",
  args: {
    name: "EXTENDED_ATTRIBUTES_TYPE",
    description: "List",
    suggestions: [],
  },
};
const flag4707: Fig.Option = {
  name: "--extended-attributes-type",
  description:
    "Represents the identity provider and type of claims that should be fetched. The --extended-attributes-type flag is restricted. We suggest you use SCIM instead. _EXTENDED_ATTRIBUTES_TYPE_ must be (only one value is supported): *azure-ad-groups-id*",
  args: {
    name: "EXTENDED_ATTRIBUTES_TYPE",
    description: "List",
    suggestions: [],
  },
};
const flag4730: Fig.Option = {
  name: "--extra-attributes-client-id",
  description:
    "The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required\nto get the access token using client credentials grant flow",
  args: {
    name: "EXTRA_ATTRIBUTES_CLIENT_ID",
    description: "String",
    suggestions: [],
  },
};
const flag4731: Fig.Option = {
  name: "--extra-attributes-client-id",
  description:
    "The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required\nto get the access token using client credentials grant flow",
  args: {
    name: "EXTRA_ATTRIBUTES_CLIENT_ID",
    description: "String",
    suggestions: [],
  },
};
const flag4732: Fig.Option = {
  name: "--extra-attributes-client-secret-value",
  description:
    "The OAuth 2.0 client secret for retrieving extra attributes from the identity provider.\nRequired to get the access token using client credentials grant flow",
  args: {
    name: "EXTRA_ATTRIBUTES_CLIENT_SECRET_VALUE",
    description: "String",
    suggestions: [],
  },
};
const flag4733: Fig.Option = {
  name: "--extra-attributes-client-secret-value",
  description:
    "The OAuth 2.0 client secret for retrieving extra attributes from the identity provider.\nRequired to get the access token using client credentials grant flow",
  args: {
    name: "EXTRA_ATTRIBUTES_CLIENT_SECRET_VALUE",
    description: "String",
    suggestions: [],
  },
};
const flag4734: Fig.Option = {
  name: "--extra-attributes-filter",
  description:
    "The filter used to request specific records from the IdP.\nBy default, all of the groups that are associated with a user are\nfetched. For Microsoft Entra ID, you can add `$search` query parameters\nusing [Keyword Query Language]\n(https://learn.microsoft.com/en-us/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference).\nTo learn more about `$search` querying in Microsoft Entra ID, see [Use\nthe `$search` query parameter]\n(https://learn.microsoft.com/en-us/graph/search-query-parameter).\n+\nAdditionally, Workforce Identity Federation automatically adds the\nfollowing [`$filter` query parameters]\n(https://learn.microsoft.com/en-us/graph/filter-query-parameter), based\non the value of `attributes_type`. Values passed to `filter` are\nconverted to `$search` query parameters. Additional `$filter` query\nparameters cannot be added using this field.\n+\n* `AZURE_AD_GROUPS_MAIL`: `mailEnabled` and `securityEnabled` filters\nare applied.\n* `AZURE_AD_GROUPS_ID`: `securityEnabled` filter is applied.\n* `AZURE_AD_GROUPS_DISPLAY_NAME`: `securityEnabled` filter is applied",
  args: {
    name: "EXTRA_ATTRIBUTES_FILTER",
    description: "String",
    suggestions: [],
  },
};
const flag4735: Fig.Option = {
  name: "--extra-attributes-issuer-uri",
  description:
    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme.\nRequired to get the OIDC discovery document",
  args: {
    name: "EXTRA_ATTRIBUTES_ISSUER_URI",
    description: "String",
    suggestions: [],
  },
};
const flag4736: Fig.Option = {
  name: "--extra-attributes-issuer-uri",
  description:
    "OIDC identity provider's issuer URI. Must be a valid URI using the `https` scheme.\nRequired to get the OIDC discovery document",
  args: {
    name: "EXTRA_ATTRIBUTES_ISSUER_URI",
    description: "String",
    suggestions: [],
  },
};
const flag4737: Fig.Option = {
  name: "--extra-attributes-type",
  description:
    "Represents the identity provider and type of claims that should be fetched. _EXTRA_ATTRIBUTES_TYPE_ must be one of: *attributes-type-unspecified*, *azure-ad-groups-display-name*, *azure-ad-groups-id*, *azure-ad-groups-mail*",
  args: {
    name: "EXTRA_ATTRIBUTES_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "attributes-type-unspecified",
      "azure-ad-groups-display-name",
      "azure-ad-groups-id",
      "azure-ad-groups-mail",
    ],
  },
};
const flag4738: Fig.Option = {
  name: "--extra-attributes-type",
  description:
    "Represents the identity provider and type of claims that should be fetched. _EXTRA_ATTRIBUTES_TYPE_ must be one of: *attributes-type-unspecified*, *azure-ad-groups-display-name*, *azure-ad-groups-id*, *azure-ad-groups-mail*",
  args: {
    name: "EXTRA_ATTRIBUTES_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: [
      "attributes-type-unspecified",
      "azure-ad-groups-display-name",
      "azure-ad-groups-id",
      "azure-ad-groups-mail",
    ],
  },
};
const flag4849: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed.\nIf the expression evaluates `True`, then that item is listed. For more\ndetails and examples of filter expressions, run $ gcloud topic filters. This\nflag interacts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "EXPRESSION", description: "String", suggestions: [] },
};
const flag4900: Fig.Option = {
  name: "--flags-file",
  description:
    "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
  args: { name: "YAML_FILE", description: "String", suggestions: [] },
};
const flag4902: Fig.Option = {
  name: "--flatten",
  description:
    "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This allows us to\nspecify what `resource-key` the `filter` will operate on. This flag\ninteracts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag5010: Fig.Option = {
  name: "--folder",
  description:
    "The folder id of the location resource.\n+\nTo set the `folder` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [iam.folders.locations]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5011: Fig.Option = {
  name: "--folder",
  description:
    "The folder id of the policyBinding resource.\n+\nTo set the `folder` attribute:\n* provide the argument `policy_binding` on the command line with a fully specified name;\n* provide the argument `--folder` on the command line. Must be specified for resource of type [iam.folders.locations.policyBindings]",
  args: { name: "FOLDER", description: "String", suggestions: [] },
};
const flag5091: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. If both `core/format` and\n`--format` are specified, `--format` takes precedence. `--format`\nand `core/format` both take precedence over `core/default_format`. The\nsupported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud\ntopic formats. Run `$ gcloud config set --help` to see more information\nabout `core/format`",
  args: { name: "FORMAT", description: "String", suggestions: [] },
};
const flag5359: Fig.Option = {
  name: "--google-cloud-resource",
  description:
    "A single workload operating on Google Cloud. This will be set\n                in the attestation rule to be added",
  args: {
    name: "GOOGLE_CLOUD_RESOURCE",
    description: "String",
    suggestions: [],
  },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5564: Fig.Option = {
  name: "--iam-account",
  description: "The service account to sign as",
  args: { name: "IAM_ACCOUNT", description: "String", suggestions: [] },
};
const flag5566: Fig.Option = {
  name: "--iam-account",
  description:
    "The name of the IAM ServiceAccount.\n+\n\nTo set the `iam-account` attribute:\n* provide the argument `iam_key` on the command line with a fully specified name;\n* provide the argument `--iam-account` on the command line",
  args: { name: "IAM_ACCOUNT", description: "String", suggestions: [] },
};
const flag5621: Fig.Option = {
  name: "--idp-metadata-path",
  description:
    "XML file with configuration metadata for the SAML identity provider. The metadata file must\nfollow the\n[SAML 2.0 metadata specification](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf). Use a full or relative path to a local file containing the value of idp_metadata_path",
  args: {
    name: "IDP_METADATA_PATH",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag5622: Fig.Option = {
  name: "--idp-metadata-path",
  description:
    "XML file with configuration metadata for the SAML identity provider. The metadata file must\nfollow the\n[SAML 2.0 metadata specification](https://www.oasis-open.org/committees/download.php/35391/sstc-saml-metadata-errata-2.0-wd-04-diff.pdf). Use a full or relative path to a local file containing the value of idp_metadata_path",
  args: {
    name: "IDP_METADATA_PATH",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag5699: Fig.Option = {
  name: "--impersonate-service-account",
  description:
    "For this `gcloud` invocation, all API requests will be\nmade as the given service account or target service account in an\nimpersonation delegation chain instead of the currently selected\naccount. You can specify either a single service account as the\nimpersonator, or a comma-separated list of service accounts to\ncreate an impersonation delegation chain. The impersonation is done\nwithout needing to create, download, and activate a key for the\nservice account or accounts.\n+\nIn order to make API requests as a service account, your\ncurrently selected account must have an IAM role that includes\nthe `iam.serviceAccounts.getAccessToken` permission for the\nservice account or accounts.\n+\nThe `roles/iam.serviceAccountTokenCreator` role has\nthe `iam.serviceAccounts.getAccessToken permission`. You can\nalso create a custom role.\n+\nYou can specify a list of service accounts, separated with\ncommas. This creates an impersonation delegation chain in which\neach service account delegates its permissions to the next\nservice account in the chain. Each service account in the list\nmust have the `roles/iam.serviceAccountTokenCreator` role on the\nnext service account in the list. For example, when\n`--impersonate-service-account=`\n``SERVICE_ACCOUNT_1'',``SERVICE_ACCOUNT_2'',\nthe active account must have the\n`roles/iam.serviceAccountTokenCreator` role on\n``SERVICE_ACCOUNT_1'', which must have the\n`roles/iam.serviceAccountTokenCreator` role on\n``SERVICE_ACCOUNT_2''.\n``SERVICE_ACCOUNT_1'' is the impersonated service\naccount and ``SERVICE_ACCOUNT_2'' is the delegate.\n+\nOverrides the default *auth/impersonate_service_account* property value for this command invocation",
  args: {
    name: "SERVICE_ACCOUNT_EMAILS",
    description: "String",
    suggestions: [],
  },
};
const flag5799: Fig.Option = {
  name: "--inline-certificate-issuance-config-file",
  description:
    "YAML file with configuration for certificate issuance.\nExample file format:\n```yaml\ninlineCertificateIssuanceConfig:\n  caPools:\n    us-east1: projects/1234/locations/us-east1/caPools/capoolname\n    us-west1: projects/1234/locations/us-west1/caPools/capoolname\n  keyAlgorithm: ECDSA_P256\n  lifetime: 86400s\n  rotationWindowPercentage: 50\n```",
  args: {
    name: "INLINE_CERTIFICATE_ISSUANCE_CONFIG_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
    suggestions: [],
  },
};
const flag5801: Fig.Option = {
  name: "--inline-trust-config-file",
  description:
    'YAML file with configuration for providing additional trust bundles.\nExample file format:\n```yaml\ninlineTrustConfig:\n  additionalTrustBundles:\n    example.com:\n      trustAnchors:\n      - pemCertificate: "-----BEGIN CERTIFICATE-----\n        <certificate>\n        -----END CERTIFICATE-----"\n      - pemCertificate: "-----BEGIN CERTIFICATE-----\n        <certificate>\n        -----END CERTIFICATE-----"\n    myorg.com:\n      trustAnchors:\n      - pemCertificate: "-----BEGIN CERTIFICATE-----\n        <certificate>\n        -----END CERTIFICATE-----"\n      - pemCertificate: "-----BEGIN CERTIFICATE-----\n        <certificate>\n        -----END CERTIFICATE-----"\n```',
  args: {
    name: "INLINE_TRUST_CONFIG_FILE",
    description: "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
    suggestions: [],
  },
};
const flag6156: Fig.Option = {
  name: "--jwk-json-path",
  description:
    'Optional file containing JSON Web Key (JWK) public keys. The file format must follow\n[JWK specifications](https://www.rfc-editor.org/rfc/rfc7517#section-4). Example file format:\n```json\n{\n  "keys": [\n     {\n          "kty": "RSA/EC",\n          "alg": "<algorithm>",\n          "use": "sig",\n          "kid": "<key-id>",\n          "n": "",\n          "e": "",\n          "x": "",\n          "y": "",\n          "crv": ""\n     }\n  ]\n}\n```\n. Use a full or relative path to a local file containing the value of jwk_json_path',
  args: {
    name: "JWK_JSON_PATH",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag6157: Fig.Option = {
  name: "--jwk-json-path",
  description:
    'Optional file containing jwk public keys. The file format must follow\n[jwk specifications](https://www.rfc-editor.org/rfc/rfc7517#section-4). Example file format:\n```json\n{\n  "keys": [\n     {\n          "kty": "RSA/EC",\n          "alg": "<algorithm>",\n          "use": "sig",\n          "kid": "<key-id>",\n          "n": "",\n          "e": "",\n          "x": "",\n          "y": "",\n          "crv": ""\n     }\n  ]\n}\n```\n. Use a full or relative path to a local file containing the value of jwk_json_path',
  args: {
    name: "JWK_JSON_PATH",
    description: "Googlecloudsdk.calliope.arg_parsers:FileContents",
    suggestions: [],
  },
};
const flag6267: Fig.Option = {
  name: "--key",
  description:
    "The ID for the key, which becomes the final component of the resource name. This value\nmust be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `key` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--key` on the command line",
  args: { name: "KEY", description: "String", suggestions: [] },
};
const flag6288: Fig.Option = {
  name: "--kind",
  description: "Policy type. Use `denypolicies` for deny policies",
  args: { name: "KIND", description: "String", suggestions: [] },
};
const flag6515: Fig.Option = {
  name: "--limit",
  description:
    "Maximum number of resources to list. The default is *unlimited*.\nThis flag interacts with other flags that are applied in this order:\n*--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag6692: Fig.Option = {
  name: "--location",
  description:
    "ID of the location or fully qualified identifier for the location.\n+\nTo set the `location` attribute:\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6928: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `--provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6931: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6932: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6933: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6934: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `scim_tenant` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6935: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `subject` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6936: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `token` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6937: Fig.Option = {
  name: "--location",
  description:
    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `workforce_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6980: Fig.Option = {
  name: "--location",
  description:
    "The location id of the policyBinding resource.\n+\nTo set the `location` attribute:\n* provide the argument `policy_binding` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag6981: Fig.Option = {
  name: "--location",
  description:
    "The location id of the principalAccessBoundaryPolicy resource.\n+\nTo set the `location` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7007: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `--workload-identity-pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7008: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `credential` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7009: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7010: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `managed_identity` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7012: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `namespace` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7013: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `oauth_client` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7014: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7016: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7019: Fig.Option = {
  name: "--location",
  description:
    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `workload_identity_pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7749: Fig.Option = {
  name: "--member",
  description:
    "The principal to add the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
};
const flag7753: Fig.Option = {
  name: "--member",
  description:
    "The principal to remove the binding for. Should be of the form `user|group|serviceAccount:email` or\n`domain:domain`.\n+\nExamples: `user:test-user@gmail.com`, `group:admins@example.com`,\n`serviceAccount:test123@example.domain.com`, or\n`domain:example.domain.com`.\n+\nDeleted principals have an additional `deleted:` prefix and a `?uid=UID` suffix,\nwhere ``UID'' is a unique identifier for the principal. Example:\n`deleted:user:test-user@gmail.com?uid=123456789012345678901`.\n+\nSome resources also accept the following special values:\n* `allUsers` - Special identifier that represents anyone who is on the internet,\n   with or without a Google account.\n* `allAuthenticatedUsers` - Special identifier that represents anyone who is\n   authenticated with a Google account or a service account",
  args: { name: "PRINCIPAL", description: "String", suggestions: [] },
};
const flag8131: Fig.Option = {
  name: "--namespace",
  description:
    "The ID to use for the namespace. This value must be 2-63 characters, and may contain the\ncharacters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be\nspecified.\n+\n\nTo set the `namespace` attribute:\n* provide the argument `managed_identity` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line",
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag8132: Fig.Option = {
  name: "--namespace",
  description:
    "The ID to use for the namespace. This value must be 2-63 characters, and may contain the\ncharacters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and may not be\nspecified.\n+\n\nTo set the `namespace` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--namespace` on the command line",
  args: { name: "NAMESPACE", description: "String", suggestions: [] },
};
const flag10618: Fig.Option = {
  name: "--oauth-client",
  description:
    "ID to use for the OAuth client, which becomes the final component of the resource name.\nThis value should be 4-32 characters, and may contain the characters [a-z0-9-].\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `oauth-client` attribute:\n* provide the argument `credential` on the command line with a fully specified name;\n* provide the argument `--oauth-client` on the command line",
  args: { name: "OAUTH_CLIENT", description: "String", suggestions: [] },
};
const flag10883: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the location resource.\n+\nTo set the `organization` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [iam.organizations.locations]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10892: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the policyBinding resource.\n+\nTo set the `organization` attribute:\n* provide the argument `policy_binding` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line. Must be specified for resource of type [iam.organizations.locations.policyBindings]",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10893: Fig.Option = {
  name: "--organization",
  description:
    "The organization id of the principalAccessBoundaryPolicy resource.\n+\nTo set the `organization` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
  args: { name: "ORGANIZATION", description: "String", suggestions: [] },
};
const flag10992: Fig.Option = {
  name: "--output-file",
  description: "Location to store the generated credential configuration file",
  args: { name: "OUTPUT_FILE", description: "String", suggestions: [] },
};
const flag11059: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is determined by the\nservice if it supports paging, otherwise it is *unlimited* (no paging).\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
  args: {
    name: "PAGE_SIZE",
    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
    suggestions: [],
  },
};
const flag11341: Fig.Option = {
  name: "--policy-file",
  description:
    "Path to a local JSON-formatted or YAML-formatted file containing an\nattestation policy, structured as a [list of attestation rules](https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.namespaces.managedIdentities/setAttestationRules#request-body)",
  args: { name: "POLICY_FILE", description: "String", suggestions: [] },
};
const flag11343: Fig.Option = {
  name: "--policy-file",
  description:
    "Path to the file that contains the policy, in JSON or YAML format. For valid syntax, see https://cloud.google.com/iam/help/deny/policy-syntax",
  args: { name: "POLICY_FILE", description: "String", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11775: Fig.Option = {
  name: "--provider",
  description:
    "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11777: Fig.Option = {
  name: "--provider",
  description:
    "The ID for the provider, which becomes the final component of the resource name. This value\nmust be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11778: Fig.Option = {
  name: "--provider",
  description:
    "The ID for the provider, which becomes the final component of the resource name. This value\nmust be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11780: Fig.Option = {
  name: "--provider",
  description:
    "The ID to use for the workforce pool provider, which becomes the final component of the\nresource name. This value must be unique within the workforce pool, 4-32 characters in length,\nand may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google,\nand may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11781: Fig.Option = {
  name: "--provider",
  description:
    "The ID to use for the workforce pool provider, which becomes the final component of the\nresource name. This value must be unique within the workforce pool, 4-32 characters in length,\nand may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google,\nand may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11782: Fig.Option = {
  name: "--provider",
  description:
    "The ID to use for the workforce pool provider, which becomes the final component of the\nresource name. This value must be unique within the workforce pool, 4-32 characters in length,\nand may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google,\nand may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `scim_tenant` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11783: Fig.Option = {
  name: "--provider",
  description:
    "The ID to use for the workforce pool provider, which becomes the final component of the\nresource name. This value must be unique within the workforce pool, 4-32 characters in length,\nand may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google,\nand may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `token` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
  args: { name: "PROVIDER", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12547: Fig.Option = {
  name: "--remove-annotations",
  description:
    'Remove existing value from map annotations. Sets `remove_annotations` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-annotations=string,string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-annotations=["string"]\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-annotations=path_to_file.(yaml|json)\n+\n```',
  args: { name: "REMOVE_ANNOTATIONS", description: "Dict", suggestions: [] },
};
const flag13137: Fig.Option = {
  name: "--role",
  description:
    "Role name to assign to the principal. The role name is the complete path of\na predefined role, such as `roles/logging.viewer`, or the role ID for a\ncustom role, such as `organizations/{ORGANIZATION_ID}/roles/logging.viewer`",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13138: Fig.Option = {
  name: "--role",
  description: "The role to remove the principal from",
  args: { name: "ROLE", description: "String", suggestions: [] },
};
const flag13335: Fig.Option = {
  name: "--scim-tenant",
  description:
    "The ID for the SCIM tenant, which becomes the final component of the resource name.\nThis value must be 4-32 characters, alphanumeric ([a-z0-9-]), and cannot start with gcp-.\n+\n\nTo set the `scim-tenant` attribute:\n* provide the argument `token` on the command line with a fully specified name;\n* provide the argument `--scim-tenant` on the command line",
  args: { name: "SCIM_TENANT", description: "String", suggestions: [] },
};
const flag13336: Fig.Option = {
  name: "--scim-usage",
  description:
    "Specifies whether the workforce identity pool provider uses SCIM-managed\ngroups instead of the `google.groups` attribute mapping for authorization checks.\n+\nThe `scim_usage` and `extended_attributes_oauth2_client` fields are\nmutually exclusive. A request that enables both fields on the same\nworkforce identity pool provider will produce an error.\n+\nUse `enabled-for-groups` to enable SCIM-managed groups.\nUse `scim-usage-unspecified` to disable SCIM-managed groups.\n+\n_SCIM_USAGE_ must be one of: *enabled-for-groups*, *scim-usage-unspecified*",
  args: {
    name: "SCIM_USAGE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["enabled-for-groups", "scim-usage-unspecified"],
  },
};
const flag13504: Fig.Option = {
  name: "--service-account-token-lifetime-seconds",
  description:
    "Lifetime duration of the service account access token in seconds. Defaults to one hour if not specified. If a lifetime greater than one hour is required, the service account must be added as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint",
  args: {
    name: "SERVICE_ACCOUNT_TOKEN_LIFETIME_SECONDS",
    description: "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
    suggestions: [],
  },
};
const flag13516: Fig.Option = {
  name: "--service-account",
  description: "Email of the service account to impersonate",
  args: { name: "SERVICE_ACCOUNT", description: "String", suggestions: [] },
};
const flag13780: Fig.Option = {
  name: "--show-deleted",
  description: "Whether to return soft-deleted resources",
};
const flag13948: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The\ndefault order is ascending. Prefix a field with ``~'' for descending\norder on that field. This flag interacts with other flags that are applied\nin this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: { name: "FIELD", description: "List", suggestions: [] },
};
const flag14214: Fig.Option = {
  name: "--spec",
  description:
    "The specifications for the key. _SPEC_ must be one of: *key-spec-unspecified*, *rsa-2048*, *rsa-3072*, *rsa-4096*",
  args: {
    name: "SPEC",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["key-spec-unspecified", "rsa-2048", "rsa-3072", "rsa-4096"],
  },
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15249: Fig.Option = {
  name: "--uri",
  description:
    "Print a list of resource URIs instead of the default output, and change the\ncommand output to a list of URIs. If this flag is used with *--format*,\nthe formatting is applied on this URI list. To display URIs alongside other\nkeys instead, use the *uri()* transform",
};
const flag15278: Fig.Option = {
  name: "--use-default-shared-ca",
  description:
    "Use the default shared certificate authorities (CAs) to issue certificates. If enabled,\nGoogle Cloud automatically provisions certificates from a default shared CA in the same region\nas the workload. Enabling this flag clears any existing CA pools configuration. Use *--use-default-shared-ca* to enable and *--no-use-default-shared-ca* to disable",
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15424: Fig.Option = {
  name: "--verbosity",
  description:
    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
  args: {
    name: "VERBOSITY",
    description: "String",
    suggestions: ["debug", "info", "warning", "error", "critical", "none"],
  },
};
const flag15550: Fig.Option = {
  name: "--web-sso-additional-scopes",
  description:
    "Additional scopes to request for the OIDC authentication on\ntop of scopes requested by default. By default, the `openid`, `profile`\nand `email` scopes that are supported by the identity provider are\nrequested.\n+\nEach additional scope may be at most 256\ncharacters. A maximum of 10 additional scopes may be configured.\n+\nUpdating this field replaces any existing values.\nInclude the full list of additional scopes to avoid losing existing values",
  args: {
    name: "WEB_SSO_ADDITIONAL_SCOPES",
    description: "List",
    suggestions: [],
  },
};
const flag15620: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the\nresource name. This value must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `--provider` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15621: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the\nresource name. This value must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15622: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the\nresource name. This value must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15623: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the\nresource name. This value must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `provider` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15624: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the\nresource name. This value must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `subject` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15625: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the\nresource name. This value must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `token` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15627: Fig.Option = {
  name: "--workforce-pool",
  description:
    "The ID to use for the workforce pool, which becomes the final component of the resource name.\nThis value must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.\nIt must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved\nfor use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `scim_tenant` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
  args: { name: "WORKFORCE_POOL", description: "String", suggestions: [] },
};
const flag15628: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload-identity-pool` attribute:\n* provide the argument `--workload-identity-pool` on the command line",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
    suggestions: [],
  },
};
const flag15632: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `key` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
    suggestions: [],
  },
};
const flag15633: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `managed_identity` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
    suggestions: [],
  },
};
const flag15634: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `namespace` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
    suggestions: [],
  },
};
const flag15635: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
    suggestions: [],
  },
};
const flag15636: Fig.Option = {
  name: "--workload-identity-pool",
  description:
    "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `provider` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
  args: {
    name: "WORKLOAD_IDENTITY_POOL",
    description: "String",
    suggestions: [],
  },
};

const completionSpec: Fig.Spec = {
  name: "iam",
  description: "Manage IAM service accounts and keys",
  subcommands: [
    {
      name: "list-grantable-roles",
      description: "List IAM grantable roles for a resource",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag4849,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        {
          name: "--page-size",
          description:
            "Some services group resource list output into pages. This flag specifies\nthe maximum number of resources per page. The default is *300*.\nPaging may be applied before or after *--filter* and *--limit* depending\non the service",
          args: { name: "PAGE_SIZE", description: "Int", suggestions: [] },
        },
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "RESOURCE",
        description:
          'The full resource name or URI to get the list of roles for.\n+\nSee ["Resource Names"](https://cloud.google.com/apis/design/resource_names) for\ndetails. To get a URI from most `list` commands in `gcloud`, pass the `--uri`\nflag. For example:\n+\n```\n$ gcloud compute instances list --project prj --uri \\\nhttps://compute.googleapis.com/compute/v1/projects/prj/zones/us-east1-c/instances/i1 \\\nhttps://compute.googleapis.com/compute/v1/projects/prj/zones/us-east1-d/instances/i2\n```',
      },
    },
    {
      name: "list-testable-permissions",
      description: "List IAM testable permissions for a resource",
      options: [
        flag42,
        flag46,
        flag1201,
        flag2292,
        flag4849,
        flag4900,
        flag4902,
        flag5091,
        flag5453,
        flag5699,
        flag7356,
        flag11637,
        flag11946,
        flag14975,
        flag15315,
        flag15424,
      ],
      args: {
        name: "RESOURCE",
        description:
          'The full resource name or URI to get the testable permissions for.\n+\nSee ["Resource Names"](https://cloud.google.com/apis/design/resource_names) for\ndetails. To get a URI from most `list` commands in `gcloud`, pass the `--uri`\nflag. For example:\n+\n```\n$ gcloud compute instances list --project prj --uri \\\nhttps://compute.googleapis.com/compute/v1/projects/prj/zones/us-east1-c/instances/i1 \\\nhttps://compute.googleapis.com/compute/v1/projects/prj/zones/us-east1-d/instances/i2\n```',
      },
    },
    {
      name: "oauth-clients",
      description: "Create and manage OAuth clients",
      subcommands: [
        {
          name: "create",
          description: "Create an OAuth client",
          options: [
            flag42,
            flag46,
            {
              name: "--allowed-grant-types",
              description:
                "A list of OAuth grant types that are allowed for the OAuth client.\n+\nThe following grant types are currently supported:\n+\n* `authorization-code-grant`\n+\n* `refresh-token-grant`",
              args: {
                name: "ALLOWED_GRANT_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--allowed-redirect-uris",
              description:
                "A list of redirect uris that is allowed for redirecting when the authorization is completed",
              args: {
                name: "ALLOWED_REDIRECT_URIS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--allowed-scopes",
              description:
                "A list of scopes that the OAuth client is allowed to request during OAuth flows.\n+\nThe following scopes are currently supported:\n+\n* `https://www.googleapis.com/auth/cloud-platform`: View, edit, configure, and delete your\n                                                    Google Cloud data, and view the email\n                                                    address for your Google Account.\n+\n* `openid`: Associate you with your personal info on Google Cloud.\n+\n* `email`: The OAuth client can read a federated identity's email address.\n+\n* `groups`: The OAuth client can read a federated identity's groups",
              args: {
                name: "ALLOWED_SCOPES",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            {
              name: "--client-type",
              description:
                "The type of OAuth client. _CLIENT_TYPE_ must be one of: *confidential-client*, *public-client*",
              args: {
                name: "CLIENT_TYPE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["confidential-client", "public-client"],
              },
            },
            flag2292,
            flag3065,
            flag3628,
            flag3684,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7013,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client.\n+\nTo set the `oauth_client` attribute:\n* provide the argument `oauth_client` on the command line",
          },
        },
        {
          name: "credentials",
          description: "Create and manage OAuth client credentials",
          subcommands: [
            {
              name: "create",
              description: "Create an OAuth client credential",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3627,
                flag3683,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7008,
                flag7356,
                flag10618,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential.\n+\nTo set the `credential` attribute:\n* provide the argument `credential` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete an OAuth client credential",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7008,
                flag7356,
                flag10618,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential.\n+\nTo set the `credential` attribute:\n* provide the argument `credential` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe an OAuth client credential",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7008,
                flag7356,
                flag10618,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential.\n+\nTo set the `credential` attribute:\n* provide the argument `credential` on the command line",
              },
            },
            {
              name: "list",
              description: "List OAuth client credentials",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `--oauth-client` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--oauth-client",
                  description:
                    "ID of the oauth client or fully qualified identifier for the oauth client.\n+\nTo set the `oauth-client` attribute:\n* provide the argument `--oauth-client` on the command line",
                  args: {
                    name: "OAUTH_CLIENT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "update",
              description: "Update an OAuth client credential",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag3627,
                flag3683,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7008,
                flag7356,
                flag10618,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "CREDENTIAL",
                description:
                  "ID of the oauth client credential or fully qualified identifier for the oauth client credential.\n+\nTo set the `credential` attribute:\n* provide the argument `credential` on the command line",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an OAuth client",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7013,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client.\n+\nTo set the `oauth_client` attribute:\n* provide the argument `oauth_client` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe an OAuth client",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7013,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client.\n+\nTo set the `oauth_client` attribute:\n* provide the argument `oauth_client` on the command line",
          },
        },
        {
          name: "list",
          description: "List OAuth clients",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--show-deleted",
              description: "Whether to return soft-deleted OAuth clients",
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "undelete",
          description: "Undelete an OAuth client",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7013,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client.\n+\nTo set the `oauth_client` attribute:\n* provide the argument `oauth_client` on the command line",
          },
        },
        {
          name: "update",
          description: "Update an OAuth client",
          options: [
            flag42,
            flag46,
            {
              name: "--allowed-grant-types",
              description:
                "A list of OAuth grant types that are allowed for the OAuth client.\n+\nThe following grant types are currently supported:\n+\n* `authorization-code-grant`\n+\n* `refresh-token-grant`",
              args: {
                name: "ALLOWED_GRANT_TYPES",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--allowed-redirect-uris",
              description:
                "A list of redirect uris that is allowed for redirecting when the authorization is completed",
              args: {
                name: "ALLOWED_REDIRECT_URIS",
                description: "List",
                suggestions: [],
              },
            },
            {
              name: "--allowed-scopes",
              description:
                "A list of scopes that the OAuth client is allowed to request during OAuth flows.\n+\nThe following scopes are currently supported:\n+\n* `https://www.googleapis.com/auth/cloud-platform`: View, edit, configure, and delete your\n                                                    Google Cloud data, and view the email\n                                                    address for your Google Account.\n+\n* `openid`: Associate you with your personal info on Google Cloud.\n+\n* `email`: The OAuth client can read a federated identity's email address.\n+\n* `groups`: The OAuth client can read a federated identity's groups",
              args: {
                name: "ALLOWED_SCOPES",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag3065,
            flag3628,
            flag3684,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7013,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "OAUTH_CLIENT",
            description:
              "ID of the oauth client or fully qualified identifier for the oauth client.\n+\nTo set the `oauth_client` attribute:\n* provide the argument `oauth_client` on the command line",
          },
        },
      ],
    },
    {
      name: "policies",
      description: "Manage IAM deny policies",
      subcommands: [
        {
          name: "create",
          description:
            "Create a policy on the given attachment point with the given name",
          options: [
            flag42,
            flag46,
            flag726,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6288,
            flag7356,
            flag11343,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
        {
          name: "delete",
          description:
            "Delete a policy on the given attachment point with the given name",
          options: [
            flag42,
            flag46,
            flag726,
            flag1201,
            flag2292,
            flag4523,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6288,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
        {
          name: "get",
          description:
            "Get a policy on the given attachment point with the given name",
          options: [
            flag42,
            flag46,
            flag726,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6288,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
        {
          name: "list",
          description: "List the policies on the given attachment point",
          options: [
            flag42,
            flag46,
            flag726,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6288,
            flag6515,
            flag7356,
            flag11059,
            {
              name: ["--page-token", "--page_token"],
              description:
                "Page token received from a previous call. Provide this token to retrieve the next page",
              args: {
                name: "PAGE_TOKEN",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description:
            "Update the policy on the given attachment point with the given name",
          options: [
            flag42,
            flag46,
            flag726,
            flag1201,
            flag2292,
            flag4523,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6288,
            flag7356,
            flag11343,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_ID",
            description:
              "Policy ID that is unique for the resource to which the policy is attached",
          },
        },
      ],
    },
    {
      name: "policy-bindings",
      description: "Manage PolicyBinding instances",
      subcommands: [
        {
          name: "create",
          description: "Create PolicyBinding instance",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'User-defined annotations. See https://google.aip.dev/148#annotations for\nmore details such as format and size limitations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag2211,
            flag2216,
            flag2220,
            flag2222,
            flag2292,
            flag3786,
            flag4534,
            flag4900,
            flag4902,
            flag5011,
            flag5091,
            flag5453,
            flag5699,
            flag6980,
            flag7356,
            flag10892,
            {
              name: "--policy",
              description:
                "The resource name of the policy to be bound. The binding parent and policy\nmust belong to the same organization",
              args: { name: "POLICY", description: "String", suggestions: [] },
            },
            {
              name: "--policy-kind",
              description:
                "The kind of the policy to attach in this binding. This field must be one of\nthe following:\n+\n- Left empty (will be automatically set to the policy kind)\n- The input policy kind.\n+\n_POLICY_KIND_ must be (only one value is supported):\n+\n*principal-access-boundary*::: Principal access boundary policy kind\n:::\n+",
              args: {
                name: "POLICY_KIND",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "access",
                  "principal-access-boundary",
                  "regional-access-boundary",
                ],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--target-principal-set",
              description:
                "The full resource name that's used for principal access boundary policy\nbindings. The principal set must be directly parented by the policy\nbinding's parent or same as the parent if the target is a project,\nfolder, or organization.\n+\nExamples:\n+\n* For bindings parented by an organization:\n    * Organization:\n    `//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID`\n    * Workforce Identity:\n    `//iam.googleapis.com/locations/global/workforcePools/WORKFORCE_POOL_ID`\n    * Workspace Identity:\n    `//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID`\n* For bindings parented by a folder:\n    * Folder:\n      `//cloudresourcemanager.googleapis.com/folders/FOLDER_ID`\n* For bindings parented by a project:\n    * Project:\n        * `//cloudresourcemanager.googleapis.com/projects/PROJECT_NUMBER`\n        * `//cloudresourcemanager.googleapis.com/projects/PROJECT_ID`\n    * Workload Identity Pool:\n    `//iam.googleapis.com/projects/PROJECT_NUMBER/locations/LOCATION/workloadIdentityPools/WORKLOAD_POOL_ID`",
              args: {
                name: "TARGET_PRINCIPAL_SET",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding.\n+\nTo set the `policy_binding` attribute:\n* provide the argument `policy_binding` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete PolicyBinding instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "The etag of the policy binding.\nIf this is provided, it must match the server's etag",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5011,
            flag5091,
            flag5453,
            flag5699,
            flag6980,
            flag7356,
            flag10892,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding.\n+\nTo set the `policy_binding` attribute:\n* provide the argument `policy_binding` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get PolicyBinding instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5011,
            flag5091,
            flag5453,
            flag5699,
            flag6980,
            flag7356,
            flag10892,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding.\n+\nTo set the `policy_binding` attribute:\n* provide the argument `policy_binding` on the command line",
          },
        },
        {
          name: "list",
          description: "List PolicyBinding instances",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5010,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag10883,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "search-target-policy-bindings",
          description: "Search policy bindings by target",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5010,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag10883,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            {
              name: "--target",
              description:
                "The target resource, which is bound to the policy in the binding.\n+\nFormat:\n+\n* `//iam.googleapis.com/locations/global/workforcePools/POOL_ID`\n* `//iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID`\n* `//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID`\n* `//cloudresourcemanager.googleapis.com/projects/{project_number}`\n* `//cloudresourcemanager.googleapis.com/folders/{folder_id}`\n* `//cloudresourcemanager.googleapis.com/organizations/{organization_id}`",
              args: { name: "TARGET", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "update",
          description: "Update PolicyBinding instance",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'Set annotations to new value. User-defined annotations. See https://google.aip.dev/148#annotations for\nmore details such as format and size limitations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag1484,
            {
              name: "--clear-condition",
              description:
                "Set googleIamV3PolicyBinding.condition back to default value",
            },
            flag2211,
            flag2216,
            flag2220,
            flag2222,
            flag2292,
            flag3786,
            flag4534,
            flag4900,
            flag4902,
            flag5011,
            flag5091,
            flag5453,
            flag5699,
            flag6980,
            flag7356,
            flag10892,
            flag11637,
            flag11946,
            flag12547,
            flag14975,
            {
              name: "--update-annotations",
              description:
                'Update annotations value or add key value pair. User-defined annotations. See https://google.aip.dev/148#annotations for\nmore details such as format and size limitations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "POLICY_BINDING",
            description:
              "ID of the policyBinding or fully qualified identifier for the policyBinding.\n+\nTo set the `policy_binding` attribute:\n* provide the argument `policy_binding` on the command line",
          },
        },
      ],
    },
    {
      name: "principal-access-boundary-policies",
      description: "Manage principal access boundary policies",
      subcommands: [
        {
          name: "create",
          description: "Create PrincipalAccessBoundaryPolicy instance",
          options: [
            flag42,
            flag46,
            {
              name: "--annotations",
              description:
                'User defined annotations. See https://google.aip.dev/148#annotations for\nmore details such as format and size limitations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MapFieldType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag2292,
            flag3487,
            {
              name: "--details-rules",
              description:
                'Required, A list of principal access boundary policy rules. The number of rules in a\npolicy is limited to 500.\n+\n*description*:::\nThe description of the principal access boundary policy rule. Must be less\nthan or equal to 256 characters.\n+\n*effect*:::\nThe access relationship of principals to the resources in this rule.\n+\n*resources*:::\nA list of Resource Manager resources. If a resource is listed in the rule,\nthen the rule applies for that resource and its descendants. The number of\nresources in a policy is limited to 500 across all rules in the policy.\n+\nThe following resource types are supported:\n+\n* Organizations, such as\n`//cloudresourcemanager.googleapis.com/organizations/123`.\n* Folders, such as `//cloudresourcemanager.googleapis.com/folders/123`.\n* Projects, such as `//cloudresourcemanager.googleapis.com/projects/123`\n  or `//cloudresourcemanager.googleapis.com/projects/my-project-id`.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--details-rules=description=string,effect=string,resources=[string] --details-rules=description=string,effect=string,resources=[string]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--details-rules=\'[{"description": "string", "effect": "string", "resources": ["string"]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--details-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "DETAILS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.yaml_command_schema_util:_MessageFieldType",
                suggestions: [],
              },
            },
            flag3787,
            flag4535,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6981,
            flag7356,
            flag10893,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy.\n+\nTo set the `principal_access_boundary_policy` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line",
          },
        },
        {
          name: "delete",
          description: "Delete PrincipalAccessBoundaryPolicy instance",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--etag",
              description:
                "The etag of the principal access boundary policy.\nIf this is provided, it must match the server's etag",
              args: { name: "ETAG", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            {
              name: "--force",
              description:
                "If set to true, the request will force the deletion of the policy even if\nthe policy is referenced in policy bindings",
            },
            flag5091,
            flag5453,
            flag5699,
            flag6981,
            flag7356,
            flag10893,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy.\n+\nTo set the `principal_access_boundary_policy` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line",
          },
        },
        {
          name: "describe",
          description: "Get PrincipalAccessBoundaryPolicy instance",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6981,
            flag7356,
            flag10893,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy.\n+\nTo set the `principal_access_boundary_policy` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line",
          },
        },
        {
          name: "list",
          description: "List PrincipalAccessBoundaryPolicy instances",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            {
              name: "--organization",
              description:
                "The organization id of the location resource.\n+\nTo set the `organization` attribute:\n* provide the argument `--location` on the command line with a fully specified name;\n* provide the argument `--organization` on the command line",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "search-policy-bindings",
          description: "Search Principal Access Boundary Policy Bindings",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6981,
            flag7356,
            flag10893,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy.\n+\nTo set the `principal_access_boundary_policy` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line",
          },
        },
        {
          name: "update",
          description: "Update PrincipalAccessBoundaryPolicy instance",
          options: [
            flag42,
            flag46,
            {
              name: "--add-details-rules",
              description:
                'Add new value to details_rules list. A list of principal access boundary policy rules. The number of rules in a\npolicy is limited to 500.\n+\n*description*:::\nThe description of the principal access boundary policy rule. Must be less\nthan or equal to 256 characters.\n+\n*effect*:::\nThe access relationship of principals to the resources in this rule.\n+\n*resources*:::\nA list of Resource Manager resources. If a resource is listed in the rule,\nthen the rule applies for that resource and its descendants. The number of\nresources in a policy is limited to 500 across all rules in the policy.\n+\nThe following resource types are supported:\n+\n* Organizations, such as\n`//cloudresourcemanager.googleapis.com/organizations/123`.\n* Folders, such as `//cloudresourcemanager.googleapis.com/folders/123`.\n* Projects, such as `//cloudresourcemanager.googleapis.com/projects/123`\n  or `//cloudresourcemanager.googleapis.com/projects/my-project-id`.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--add-details-rules=description=string,effect=string,resources=[string] --add-details-rules=description=string,effect=string,resources=[string]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--add-details-rules=\'[{"description": "string", "effect": "string", "resources": ["string"]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--add-details-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ADD_DETAILS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            {
              name: "--annotations",
              description:
                'Set annotations to new value. User defined annotations. See https://google.aip.dev/148#annotations for\nmore details such as format and size limitations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag1484,
            {
              name: "--clear-details",
              description:
                "Set googleIamV3PrincipalAccessBoundaryPolicy.details back to default value",
            },
            {
              name: "--clear-details-rules",
              description: "Clear details_rules value and set to empty list",
            },
            flag2292,
            flag3487,
            {
              name: "--details-rules",
              description:
                'Set details_rules to new value. A list of principal access boundary policy rules. The number of rules in a\npolicy is limited to 500.\n+\n*description*:::\nThe description of the principal access boundary policy rule. Must be less\nthan or equal to 256 characters.\n+\n*effect*:::\nThe access relationship of principals to the resources in this rule.\n+\n*resources*:::\nA list of Resource Manager resources. If a resource is listed in the rule,\nthen the rule applies for that resource and its descendants. The number of\nresources in a policy is limited to 500 across all rules in the policy.\n+\nThe following resource types are supported:\n+\n* Organizations, such as\n`//cloudresourcemanager.googleapis.com/organizations/123`.\n* Folders, such as `//cloudresourcemanager.googleapis.com/folders/123`.\n* Projects, such as `//cloudresourcemanager.googleapis.com/projects/123`\n  or `//cloudresourcemanager.googleapis.com/projects/my-project-id`.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--details-rules=description=string,effect=string,resources=[string] --details-rules=description=string,effect=string,resources=[string]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--details-rules=\'[{"description": "string", "effect": "string", "resources": ["string"]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--details-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "DETAILS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag3787,
            flag4535,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6981,
            flag7356,
            flag10893,
            flag11637,
            flag11946,
            flag12547,
            {
              name: "--remove-details-rules",
              description:
                'Remove existing value from details_rules list. A list of principal access boundary policy rules. The number of rules in a\npolicy is limited to 500.\n+\n*description*:::\nThe description of the principal access boundary policy rule. Must be less\nthan or equal to 256 characters.\n+\n*effect*:::\nThe access relationship of principals to the resources in this rule.\n+\n*resources*:::\nA list of Resource Manager resources. If a resource is listed in the rule,\nthen the rule applies for that resource and its descendants. The number of\nresources in a policy is limited to 500 across all rules in the policy.\n+\nThe following resource types are supported:\n+\n* Organizations, such as\n`//cloudresourcemanager.googleapis.com/organizations/123`.\n* Folders, such as `//cloudresourcemanager.googleapis.com/folders/123`.\n* Projects, such as `//cloudresourcemanager.googleapis.com/projects/123`\n  or `//cloudresourcemanager.googleapis.com/projects/my-project-id`.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--remove-details-rules=description=string,effect=string,resources=[string] --remove-details-rules=description=string,effect=string,resources=[string]\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--remove-details-rules=\'[{"description": "string", "effect": "string", "resources": ["string"]}]\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--remove-details-rules=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "REMOVE_DETAILS_RULES",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag14975,
            {
              name: "--update-annotations",
              description:
                'Update annotations value or add key value pair. User defined annotations. See https://google.aip.dev/148#annotations for\nmore details such as format and size limitations.\n+\n*KEY*:::\nSets `KEY` value.\n+\n*VALUE*:::\nSets `VALUE` value.\n+\n:::\n*Shorthand Example:*\n+\n```\n+\n--update-annotations=string=string\n+\n```\n+\n*JSON Example:*\n+\n```\n+\n--update-annotations=\'{"string": "string"}\'\n+\n```\n+\n*File Example:*\n+\n```\n+\n--update-annotations=path_to_file.(yaml|json)\n+\n```',
              args: {
                name: "UPDATE_ANNOTATIONS",
                description:
                  "Googlecloudsdk.command_lib.util.apis.update_args:_ConvertValueType",
                suggestions: [],
              },
            },
            flag15315,
            flag15424,
          ],
          args: {
            name: "PRINCIPAL_ACCESS_BOUNDARY_POLICY",
            description:
              "ID of the principalAccessBoundaryPolicy or fully qualified identifier for the principalAccessBoundaryPolicy.\n+\nTo set the `principal_access_boundary_policy` attribute:\n* provide the argument `principal_access_boundary_policy` on the command line",
          },
        },
      ],
    },
    {
      name: "roles",
      description: "Create and manipulate roles",
      subcommands: [
        {
          name: "copy",
          description: "Create a role from an existing role",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--dest-organization",
              description: "The organization of the destination role",
              args: {
                name: "DEST_ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--dest-project",
              description: "The project of the destination role",
              args: {
                name: "DEST_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--destination",
              description:
                "The destination role ID for the new custom role. For example: viewer",
              args: {
                name: "DESTINATION",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--source",
              description:
                "The source role ID. For predefined roles, for example: roles/viewer. For custom roles, for example: myCompanyAdmin",
              args: { name: "SOURCE", description: "String", suggestions: [] },
            },
            {
              name: "--source-organization",
              description:
                "The organization of the source role if it is an custom role",
              args: {
                name: "SOURCE_ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--source-project",
              description:
                "The project of the source role if it is an custom role",
              args: {
                name: "SOURCE_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "create",
          description: "Create a custom role for a project or an organization",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "The description of the role you want to create",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--file",
              description:
                "The JSON or YAML file with the IAM Role to create. See https://docs.cloud.google.com/iam/docs/reference/rest/v1/projects.roles",
              args: { name: "FILE", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the role you want to create",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--permissions",
              description:
                "The permissions of the role you want to create. Use commas to separate them",
              args: {
                name: "PERMISSIONS",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--stage",
              description:
                "The state of the role you want to create. This represents a role's lifecycle phase: `ALPHA`, `BETA`, `GA`, `DEPRECATED`, `DISABLED`, `EAP`",
              args: { name: "STAGE", description: "String", suggestions: [] },
            },
            {
              name: "--title",
              description: "The title of the role you want to create",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the custom role to create. You must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "delete",
          description: "Delete a custom role from an organization or a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the role you want to delete",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the custom role to delete. You must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a role",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the role you want to describe",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the role to describe. Curated roles example: roles/viewer. Custom roles example: CustomRole. For custom roles, you must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "list",
          description:
            "List predefined roles, or the custom roles for an organization or project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the role you want to list",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--show-deleted",
              description: "Show deleted roles by specifying this flag",
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "undelete",
          description:
            "Undelete a custom role from an organization or a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the role you want to undelete",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the custom role to undelete. You must also specify the `--organization` or `--project` flag",
          },
        },
        {
          name: "update",
          description: "Update an IAM custom role",
          options: [
            flag42,
            flag46,
            {
              name: "--add-permissions",
              description:
                "The permissions you want to add to the role. Use commas to separate them",
              args: {
                name: "ADD_PERMISSIONS",
                description: "String",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "The description of the role you want to update",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--file",
              description:
                "The YAML file you want to use to update a role. Can not be specified with other flags except role-id",
              args: { name: "FILE", description: "String", suggestions: [] },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--organization",
              description: "Organization of the role you want to update",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--permissions",
              description:
                "The permissions of the role you want to set. Use commas to separate them",
              args: {
                name: "PERMISSIONS",
                description: "String",
                suggestions: [],
              },
            },
            flag11946,
            {
              name: "--remove-permissions",
              description:
                "The permissions you want to remove from the role. Use commas to separate them",
              args: {
                name: "REMOVE_PERMISSIONS",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--stage",
              description: "The state of the role you want to update",
              args: { name: "STAGE", description: "String", suggestions: [] },
            },
            {
              name: "--title",
              description: "The title of the role you want to update",
              args: { name: "TITLE", description: "String", suggestions: [] },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ROLE_ID",
            description:
              "ID of the custom role to update. You must also specify the `--organization` or `--project` flag",
          },
        },
      ],
    },
    {
      name: "service-accounts",
      description: "Create and manipulate service accounts",
      subcommands: [
        {
          name: "add-iam-policy-binding",
          description: "Add an IAM policy binding to an IAM service account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount.\n+\nTo set the `service_account` attribute:\n* provide the argument `service_account` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a service account for a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "A textual description for the account",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "A textual name to display for the account",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "NAME",
            description:
              "The internal name of the new service account. Used to generate an IAM_ACCOUNT (an IAM internal email address used as an identifier of service account), which must be passed to subsequent commands",
          },
        },
        {
          name: "delete",
          description: "Delete a service account from a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "The service account to delete. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
          },
        },
        {
          name: "describe",
          description: "Show metadata for a service account from a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "The service account to describe. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
          },
        },
        {
          name: "disable",
          description: "Disable an IAM service account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount.\n+\nTo set the `service_account` attribute:\n* provide the argument `service_account` on the command line",
          },
        },
        {
          name: "enable",
          description: "Enable an IAM service account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount.\n+\nTo set the `service_account` attribute:\n* provide the argument `service_account` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a service account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "The service account whose policy to get. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
          },
        },
        {
          name: "keys",
          description: "Manage service account keys",
          subcommands: [
            {
              name: "create",
              description: "Create a service account key",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-account",
                  description:
                    "The service account for which to create a key.\n+\nTo list all service accounts in the project, run:\n+\n  $ gcloud iam service-accounts list",
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag5699,
                {
                  name: "--key-file-type",
                  description:
                    "The type of key to create. _KEY_FILE_TYPE_ must be one of: *json*, *p12*",
                  args: {
                    name: "KEY_FILE_TYPE",
                    description: "String",
                    suggestions: ["json", "p12"],
                  },
                },
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OUTPUT-FILE",
                description:
                  "The path where the resulting private key should be written. File system write permission will be checked on the specified path prior to the key creation",
              },
            },
            {
              name: "delete",
              description: "Delete a service account key",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-account",
                  description:
                    "The service account from which to delete a key.\n+\nTo list all service accounts in the project, run:\n+\n  $ gcloud iam service-accounts list",
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: { name: "KEY-ID", description: "The key to delete" },
            },
            {
              name: "disable",
              description: "Disable a service account key",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5566,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IAM_KEY",
                description:
                  "ID of the iamKey or fully qualified identifier for the iamKey.\n+\nTo set the `iam_key` attribute:\n* provide the argument `iam_key` on the command line",
              },
            },
            {
              name: "enable",
              description: "Enable a service account key",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5566,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "IAM_KEY",
                description:
                  "ID of the iamKey or fully qualified identifier for the iamKey.\n+\nTo set the `iam_key` attribute:\n* provide the argument `iam_key` on the command line",
              },
            },
            {
              name: "list",
              description: "List the keys for a service account",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                {
                  name: "--created-before",
                  description:
                    'Return only keys created before the specified time. Common time formats are accepted. This is equivalent to --filter="validAfterTime<DATE_TIME". See $ gcloud topic datetimes for information on time formats',
                  args: {
                    name: "CREATED_BEFORE",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-account",
                  description: "A textual name to display for the account",
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "Googlecloudsdk.calliope.arg_parsers:Parse",
                    suggestions: [],
                  },
                },
                flag5699,
                flag6515,
                flag7356,
                {
                  name: "--managed-by",
                  description:
                    "The types of keys to list. _MANAGED_BY_ must be one of: *user*, *system*, *any*",
                  args: {
                    name: "MANAGED_BY",
                    description: "String",
                    suggestions: ["user", "system", "any"],
                  },
                },
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
              ],
            },
            {
              name: "upload",
              description: "Upload a public key for an IAM service account",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                {
                  name: "--iam-account",
                  description:
                    "ID of the iamAccount or fully qualified identifier for the iamAccount.\n+\nTo set the `iam-account` attribute:\n* provide the argument `--iam-account` on the command line",
                  args: {
                    name: "IAM_ACCOUNT",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "PUBLIC_KEY_FILE",
                description:
                  "Path of the file containing the public key. Note that only public key data in the format of\nRSA_X509_PEM is supported. See https://cloud.google.com/iot/docs/concepts/device-security#public_key_format\nfor more information",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all of a project's service accounts",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7356,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15249,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "remove-iam-policy-binding",
          description: "Remove IAM policy binding from a service account",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount.\n+\nTo set the `service_account` attribute:\n* provide the argument `service_account` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set IAM policy for a service account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "SERVICE_ACCOUNT",
              description:
                "The service account whose policy to set. The account should be formatted either as a numeric service account ID or as an email, like this: 123456789876543212345 or my-iam-account@somedomain.com",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy",
            },
          ],
        },
        {
          name: "sign-blob",
          description: "Sign a blob with a managed service account key",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5564,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "INPUT-FILE",
              description: "A path to the blob file to be signed",
            },
            {
              name: "OUTPUT-FILE",
              description:
                "A path the resulting signed blob will be written to",
            },
          ],
        },
        {
          name: "sign-jwt",
          description: "Sign a JWT with a managed service account key",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5564,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "INPUT-FILE",
              description:
                "A path to the file containing the JSON JWT Claim set to be signed",
            },
            {
              name: "OUTPUT-FILE",
              description: "A path the resulting signed JWT will be written to",
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a service account for a project",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "ACCOUNT_ID",
            description:
              "The deleted service account's unique ID must be provided when using the undelete command.\nUnique IDs are a 21 digit number, such as 103271949540120710052",
          },
        },
        {
          name: "update",
          description: "Update an IAM service account",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            {
              name: "--description",
              description: "The new textual description for the account",
              args: {
                name: "DESCRIPTION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--display-name",
              description: "The new textual name to display for the account",
              args: {
                name: "DISPLAY_NAME",
                description: "String",
                suggestions: [],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "SERVICE_ACCOUNT",
            description:
              "ID of the serviceAccount or fully qualified identifier for the serviceAccount.\n+\nTo set the `service_account` attribute:\n* provide the argument `service_account` on the command line",
          },
        },
      ],
    },
    {
      name: "simulator",
      description:
        "Understand how an IAM policy change could impact access before deploying the change",
      subcommands: [
        {
          name: "replay-recent-access",
          description:
            "Determine affected recent access attempts before IAM policy                 change deployment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "RESOURCE",
              description:
                "Full resource name to simulate the IAM policy for.\n+\nSee: https://cloud.google.com/apis/design/resource_names#full_resource_name",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a Policy. See\n[the Policy reference](https://cloud.google.com/iam/reference/rest/v1/Policy)\nfor details",
            },
          ],
        },
      ],
    },
    {
      name: "workforce-pools",
      description: "Create and manage workforce pools",
      subcommands: [
        {
          name: "create",
          description: "Create a new workforce pool under an organization",
          options: [
            flag42,
            flag46,
            {
              name: "--allowed-services",
              description:
                "Services allowed for web sign-in with the workforce pool. The flag accepts multiple values with the key as `domain` and value as the domain of the service allowed for web sign-in. If not set, by default all the services are allowed",
              args: {
                name: "ALLOWED_SERVICES",
                description: "Dict",
                suggestions: [],
              },
            },
            flag720,
            flag1201,
            flag2292,
            flag3052,
            {
              name: "--disable-programmatic-signin",
              description:
                "Disable programmatic sign-in for workforce pool users",
            },
            {
              name: "--disabled",
              description: "Whether or not the workforce pool is disabled",
            },
            flag3688,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6937,
            flag7356,
            {
              name: "--organization",
              description:
                "The parent organization of the workforce pool to create",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            {
              name: "--session-duration",
              description:
                "How long the Google Cloud access tokens, console sign-in sessions, and gcloud sign-in sessions from this workforce pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If not configured, minted credentials will have a default duration of one hour (3600s)",
              args: {
                name: "SESSION_DURATION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
          },
        },
        {
          name: "create-cred-config",
          description: "Create a configuration file for generated credentials",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2551,
            {
              name: "--credential-source-file",
              description:
                "The location of the file which stores the credential",
              args: {
                name: "CREDENTIAL_SOURCE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2554,
            flag2555,
            {
              name: "--credential-source-url",
              description: "The URL to obtain the credential from",
              args: {
                name: "CREDENTIAL_SOURCE_URL",
                description: "String",
                suggestions: [],
              },
            },
            flag4610,
            {
              name: "--executable-interactive-timeout-millis",
              description:
                "Timeout duration, in milliseconds, to wait for the executable to finish when the command is running in interactive mode",
              args: {
                name: "EXECUTABLE_INTERACTIVE_TIMEOUT_MILLIS",
                description:
                  "Googlecloudsdk.calliope.arg_parsers:ParseWithBoundsChecking",
                suggestions: [],
              },
            },
            flag4612,
            flag4613,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10992,
            flag11637,
            flag11946,
            flag13516,
            flag13504,
            {
              name: "--subject-token-type",
              description:
                "The type of token being used for authorization. This defaults to urn:ietf:params:oauth:token-type:id_token",
              args: {
                name: "SUBJECT_TOKEN_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
            {
              name: "--workforce-pool-user-project",
              description:
                "The client project number used to identify the application (client project) to the server when calling Google APIs. The user principal must have serviceusage.services.use IAM permission to use the specified project",
              args: {
                name: "WORKFORCE_POOL_USER_PROJECT",
                description: "String",
                suggestions: [],
              },
            },
          ],
          args: {
            name: "AUDIENCE",
            description: "The workforce pool provider resource name",
          },
        },
        {
          name: "create-login-config",
          description:
            "Create a login configuration file to enable sign-in via a web-based authorization flow using Workforce Identity Federation",
          options: [
            flag42,
            flag46,
            {
              name: "--activate",
              description:
                "Sets the property `auth/login_config_file` to the created login configuration file. Calling `gcloud auth login` will automatically use this login configuration unless it is explicitly unset",
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            {
              name: "--output-file",
              description:
                "Location to store the generated login configuration file",
              args: {
                name: "OUTPUT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUDIENCE",
            description: "Workforce pool provider resource name",
          },
        },
        {
          name: "delete",
          description: "Delete a workforce pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6937,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a workforce pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6937,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a workforce pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6937,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
          },
        },
        {
          name: "list",
          description: "List the workforce pools for an organization",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            {
              name: "--location",
              description: "The location of the workforce pools to list",
              args: {
                name: "LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            flag7356,
            {
              name: "--organization",
              description:
                "The parent organization of the workforce pools to list",
              args: {
                name: "ORGANIZATION",
                description: "String",
                suggestions: [],
              },
            },
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--show-deleted",
              description:
                "Show soft-deleted workforce pools by specifying this flag",
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "operations",
          description: "Manage IAM workforce pool long-running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe a workforce pool operation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6932,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15622,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the workforce pool operation or fully qualified identifier for the workforce pool operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
        {
          name: "providers",
          description: "Create and manage workforce pool providers",
          subcommands: [
            {
              name: "create-oidc",
              description: "Create a new OIDC workforce pool provider",
              options: [
                flag42,
                flag46,
                flag720,
                flag737,
                flag742,
                flag1201,
                {
                  name: "--client-id",
                  description:
                    "The OIDC client ID. This must match the audience claim of the JWT issued by the identity\nprovider",
                  args: {
                    name: "CLIENT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1974,
                flag2292,
                flag3051,
                flag3483,
                flag3629,
                flag3687,
                flag4700,
                flag4702,
                flag4703,
                flag4705,
                flag4707,
                flag4731,
                flag4733,
                flag4734,
                flag4736,
                flag4738,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--issuer-uri",
                  description:
                    "The OIDC issuer URI. Must be a valid URI using the 'https' scheme",
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6156,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag13336,
                flag14975,
                flag15315,
                flag15424,
                flag15550,
                {
                  name: "--web-sso-assertion-claims-behavior",
                  description:
                    "The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition.\n+\nUse `merge-user-info-over-id-token-claims` to merge the UserInfo Endpoint Claims with ID Token\nClaims, preferring UserInfo Claim Values for the same Claim Name. Currently this option is only\navailable for Authorization Code flow.\n+\nUse `only-id-token-claims` to include only ID token claims.\n+\n_WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR_ must be one of: *assertion-claims-behavior-unspecified*, *merge-user-info-over-id-token-claims*, *only-id-token-claims*",
                  args: {
                    name: "WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "assertion-claims-behavior-unspecified",
                      "merge-user-info-over-id-token-claims",
                      "only-id-token-claims",
                    ],
                  },
                },
                {
                  name: "--web-sso-response-type",
                  description:
                    "Response Type to request for in the OIDC Authorization Request for web sign-in.\n+\nUse `code` to select the [authorization code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)\n+\nUse `id-token` to select the [implicit flow](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth).\n+\n_WEB_SSO_RESPONSE_TYPE_ must be one of: *code*, *id-token*, *response-type-unspecified*",
                  args: {
                    name: "WEB_SSO_RESPONSE_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "code",
                      "id-token",
                      "response-type-unspecified",
                    ],
                  },
                },
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "create-saml",
              description: "Create a new SAML workforce pool provider",
              options: [
                flag42,
                flag46,
                flag720,
                flag737,
                flag742,
                flag1201,
                flag2292,
                flag3051,
                flag3483,
                flag3629,
                flag3687,
                flag4700,
                flag4702,
                flag4703,
                flag4705,
                flag4707,
                flag4731,
                flag4733,
                flag4734,
                flag4736,
                flag4738,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5622,
                flag5699,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag13336,
                flag14975,
                flag15315,
                flag15424,
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a workforce pool provider",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a workforce pool provider",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "keys",
              description: "Create and manage IAM workforce pool provider keys",
              subcommands: [
                {
                  name: "create",
                  description: "Create a new workforce pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6931,
                    flag7356,
                    flag11637,
                    flag11780,
                    flag11946,
                    flag14214,
                    flag14975,
                    {
                      name: "--use",
                      description:
                        "The purpose of the key. _USE_ must be one of: *encryption*, *key-use-unspecified*, *signing*",
                      args: {
                        name: "USE",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: [
                          "encryption",
                          "key-use-unspecified",
                          "signing",
                        ],
                      },
                    },
                    flag15315,
                    flag15424,
                    flag15621,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a workforce pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6931,
                    flag7356,
                    flag11637,
                    flag11780,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15621,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a workforce pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6931,
                    flag7356,
                    flag11637,
                    flag11780,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15621,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List workforce pool provider keys",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6928,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11775,
                    flag11946,
                    {
                      name: "--show-deleted",
                      description:
                        "Show soft-deleted keys by specifying this flag",
                    },
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15620,
                  ],
                },
                {
                  name: "operations",
                  description:
                    "Manage IAM workforce pool provider key long-running operations",
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Describe a workforce pool provider key operation",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6267,
                        flag6932,
                        flag7356,
                        flag11637,
                        flag11781,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                        flag15622,
                      ],
                      args: {
                        name: "OPERATION",
                        description:
                          "ID of the workforce pool provider key operation or fully qualified identifier for the workforce pool provider key operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                      },
                    },
                  ],
                },
                {
                  name: "undelete",
                  description: "Undelete a workforce pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6931,
                    flag7356,
                    flag11637,
                    flag11780,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15621,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workforce pool provider key or fully qualified identifier for the workforce pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List workforce pool providers",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `--workforce-pool` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                {
                  name: "--show-deleted",
                  description:
                    "Show soft-deleted workforce pool providers by specifying this flag",
                },
                flag13948,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--workforce-pool",
                  description:
                    "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce-pool` attribute:\n* provide the argument `--workforce-pool` on the command line",
                  args: {
                    name: "WORKFORCE_POOL",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
            },
            {
              name: "operations",
              description:
                "Manage IAM workforce pool provider long-running operations",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a workforce pool provider operation",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6932,
                    flag7356,
                    flag11637,
                    flag11781,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15622,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workforce pool provider operation or fully qualified identifier for the workforce pool provider operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                  },
                },
              ],
            },
            {
              name: "scim-tenants",
              description:
                "Manage IAM workforce identity pool provider SCIM tenants",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    {
                      name: "--claim-mapping",
                      description:
                        "A comma-separated list of KEY=VALUE pairs defining attribute mappings",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    flag2292,
                    flag3268,
                    flag3776,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6934,
                    flag7356,
                    flag11637,
                    flag11782,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15627,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant.\n+\nTo set the `scim_tenant` attribute:\n* provide the argument `scim_tenant` on the command line",
                  },
                },
                {
                  name: "delete",
                  description:
                    "Delete an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    {
                      name: "--hard-delete",
                      description:
                        "Deletes the SCIM tenant immediately. This operation cannot be undone",
                    },
                    flag5453,
                    flag5699,
                    flag6934,
                    flag7356,
                    flag11637,
                    flag11782,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15627,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant.\n+\nTo set the `scim_tenant` attribute:\n* provide the argument `scim_tenant` on the command line",
                  },
                },
                {
                  name: "describe",
                  description:
                    "Describe an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6934,
                    flag7356,
                    flag11637,
                    flag11782,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15627,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant.\n+\nTo set the `scim_tenant` attribute:\n* provide the argument `scim_tenant` on the command line",
                  },
                },
                {
                  name: "list",
                  description:
                    "List IAM workforce identity pool provider SCIM tenants",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    flag6928,
                    flag7356,
                    flag11059,
                    flag11637,
                    flag11775,
                    flag11946,
                    {
                      name: "--show-deleted",
                      description:
                        "Include SCIM tenants that have been deleted",
                    },
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15620,
                  ],
                },
                {
                  name: "tokens",
                  description:
                    "Manage IAM workforce identity pool provider SCIM tenant tokens",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        {
                          name: "--display-name",
                          description:
                            "Optional, user-specified display name for the SCIM token (max 32 characters)",
                          args: {
                            name: "DISPLAY_NAME",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6936,
                        flag7356,
                        flag11637,
                        flag11783,
                        flag11946,
                        flag13335,
                        flag14975,
                        flag15315,
                        flag15424,
                        flag15625,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token.\n+\nTo set the `token` attribute:\n* provide the argument `token` on the command line",
                      },
                    },
                    {
                      name: "delete",
                      description:
                        "Delete an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6936,
                        flag7356,
                        flag11637,
                        flag11783,
                        flag11946,
                        flag13335,
                        flag14975,
                        flag15315,
                        flag15424,
                        flag15625,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token.\n+\nTo set the `token` attribute:\n* provide the argument `token` on the command line",
                      },
                    },
                    {
                      name: "describe",
                      description:
                        "Describe an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6936,
                        flag7356,
                        flag11637,
                        flag11783,
                        flag11946,
                        flag13335,
                        flag14975,
                        flag15315,
                        flag15424,
                        flag15625,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token.\n+\nTo set the `token` attribute:\n* provide the argument `token` on the command line",
                      },
                    },
                    {
                      name: "list",
                      description:
                        "List IAM workforce identity pool provider SCIM tenant tokens",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4849,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6515,
                        {
                          name: "--location",
                          description:
                            "The location for the workforce pool.\n+\nTo set the `location` attribute:\n* provide the argument `--scim-tenant` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                          args: {
                            name: "LOCATION",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag7356,
                        flag11059,
                        flag11637,
                        {
                          name: "--provider",
                          description:
                            "The ID to use for the workforce pool provider, which becomes the final component of the\nresource name. This value must be unique within the workforce pool, 4-32 characters in length,\nand may contain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google,\nand may not be specified.\n+\n\nTo set the `provider` attribute:\n* provide the argument `--scim-tenant` on the command line with a fully specified name;\n* provide the argument `--provider` on the command line",
                          args: {
                            name: "PROVIDER",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag11946,
                        {
                          name: "--scim-tenant",
                          description:
                            "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant.\n+\nTo set the `scim-tenant` attribute:\n* provide the argument `--scim-tenant` on the command line",
                          args: {
                            name: "SCIM_TENANT",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        {
                          name: "--show-deleted",
                          description:
                            "Include soft-deleted tokens in the results",
                        },
                        flag13948,
                        flag14975,
                        flag15315,
                        flag15424,
                        {
                          name: "--workforce-pool",
                          description:
                            "The ID to use for the workforce pool, which becomes the final component of the resource name.\nThis value must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.\nIt must start with a letter, and cannot have a trailing hyphen. The prefix `gcp-` is reserved\nfor use by Google, and may not be specified.\n+\n\nTo set the `workforce-pool` attribute:\n* provide the argument `--scim-tenant` on the command line with a fully specified name;\n* provide the argument `--workforce-pool` on the command line",
                          args: {
                            name: "WORKFORCE_POOL",
                            description: "String",
                            suggestions: [],
                          },
                        },
                      ],
                    },
                    {
                      name: "update",
                      description:
                        "Update an IAM workforce identity pool provider SCIM tenant token",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        {
                          name: "--display-name",
                          description:
                            "Optional, user-specified display name for the SCIM token (max 32 characters)",
                          args: {
                            name: "DISPLAY_NAME",
                            description: "String",
                            suggestions: [],
                          },
                        },
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6936,
                        flag7356,
                        flag11637,
                        flag11783,
                        flag11946,
                        flag13335,
                        flag14975,
                        flag15315,
                        flag15424,
                        flag15625,
                      ],
                      args: {
                        name: "TOKEN",
                        description:
                          "ID of the workforce pool provider scim token or fully qualified identifier for the workforce pool provider scim token.\n+\nTo set the `token` attribute:\n* provide the argument `token` on the command line",
                      },
                    },
                  ],
                },
                {
                  name: "undelete",
                  description:
                    "Undelete an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6934,
                    flag7356,
                    flag11637,
                    flag11782,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15627,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant.\n+\nTo set the `scim_tenant` attribute:\n* provide the argument `scim_tenant` on the command line",
                  },
                },
                {
                  name: "update",
                  description:
                    "Update an IAM workforce identity pool provider SCIM tenant",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    {
                      name: "--claim-mapping",
                      description:
                        "A comma-separated list of KEY=VALUE pairs defining attribute mappings",
                      args: {
                        name: "KEY=VALUE",
                        description: "Dict",
                        suggestions: [],
                      },
                    },
                    flag2292,
                    flag3268,
                    flag3776,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6934,
                    flag7356,
                    flag11637,
                    flag11782,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15627,
                  ],
                  args: {
                    name: "SCIM_TENANT",
                    description:
                      "ID of the workforce pool provider scim tenant or fully qualified identifier for the workforce pool provider scim tenant.\n+\nTo set the `scim_tenant` attribute:\n* provide the argument `scim_tenant` on the command line",
                  },
                },
              ],
            },
            {
              name: "undelete",
              description: "Undelete a workforce pool provider",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "update-oidc",
              description: "Update an OIDC workforce pool provider",
              options: [
                flag42,
                flag46,
                flag720,
                flag737,
                flag741,
                flag1201,
                {
                  name: "--clear-client-secret",
                  description: "Clear the OIDC client secret",
                },
                flag1659,
                flag1662,
                flag1870,
                {
                  name: "--client-id",
                  description:
                    "The OIDC client ID. This must match the audience claim of the JWT issued by the identity\nprovider",
                  args: {
                    name: "CLIENT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag1974,
                flag2292,
                flag3051,
                flag3483,
                flag3629,
                flag3687,
                flag4699,
                flag4701,
                flag4703,
                flag4704,
                flag4706,
                flag4730,
                flag4732,
                flag4734,
                flag4735,
                flag4737,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--issuer-uri",
                  description:
                    "The OIDC issuer URI. Must be a valid URI using the 'https' scheme",
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6156,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag13336,
                flag14975,
                flag15315,
                flag15424,
                flag15550,
                {
                  name: "--web-sso-assertion-claims-behavior",
                  description:
                    "The behavior for how OIDC Claims are included in the `assertion` object used for attribute mapping and attribute condition.\nUse `merge-user-info-over-id-token-claims` to merge the UserInfo Endpoint Claims with ID Token\nClaims, preferring UserInfo Claim Values for the same Claim Name. Currently this option is only\navailable for Authorization Code flow.\nUse `only-id-token-claims` to include only ID token claims. _WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR_ must be one of: *assertion-claims-behavior-unspecified*, *merge-user-info-over-id-token-claims*, *only-id-token-claims*",
                  args: {
                    name: "WEB_SSO_ASSERTION_CLAIMS_BEHAVIOR",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "assertion-claims-behavior-unspecified",
                      "merge-user-info-over-id-token-claims",
                      "only-id-token-claims",
                    ],
                  },
                },
                {
                  name: "--web-sso-response-type",
                  description:
                    "Response Type to request for in the OIDC Authorization Request for web sign-in.\nUse `code` to select the [authorization code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth)\nUse `id-token` to select the [implicit flow](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth). _WEB_SSO_RESPONSE_TYPE_ must be one of: *code*, *id-token*, *response-type-unspecified*",
                  args: {
                    name: "WEB_SSO_RESPONSE_TYPE",
                    description:
                      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                    suggestions: [
                      "code",
                      "id-token",
                      "response-type-unspecified",
                    ],
                  },
                },
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "update-saml",
              description: "Update a new SAML workforce pool provider",
              options: [
                flag42,
                flag46,
                flag720,
                flag737,
                flag741,
                flag1201,
                flag1659,
                flag1662,
                flag1870,
                flag2292,
                flag3051,
                flag3483,
                flag3629,
                flag3687,
                flag4699,
                flag4701,
                flag4703,
                flag4704,
                flag4706,
                flag4730,
                flag4732,
                flag4734,
                flag4735,
                flag4737,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5621,
                flag5699,
                flag6933,
                flag7356,
                flag11637,
                flag11946,
                flag13336,
                flag14975,
                flag15315,
                flag15424,
                flag15623,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workforce pool provider or fully qualified identifier for the workforce pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
          ],
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a workforce pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6937,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "WORKFORCE_POOL",
              description:
                "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "subjects",
          description: "Create and manage workforce pool subjects",
          subcommands: [
            {
              name: "delete",
              description: "Delete a workforce pool subject",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6935,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15624,
              ],
              args: {
                name: "SUBJECT",
                description:
                  "ID of the workforce pool subject or fully qualified identifier for the workforce pool subject.\n+\nTo set the `subject` attribute:\n* provide the argument `subject` on the command line",
              },
            },
            {
              name: "operations",
              description:
                "Manage IAM workforce pool subject long-running operations",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe a workforce pool subject operation",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6932,
                    flag7356,
                    flag11637,
                    flag11946,
                    {
                      name: "--subject",
                      description:
                        "The ID to use for the workforce pool subject, which becomes the final component of the\nresource name.\n+\n\nTo set the `subject` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--subject` on the command line",
                      args: {
                        name: "SUBJECT",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15622,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workforce pool subject operation or fully qualified identifier for the workforce pool subject operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                  },
                },
              ],
            },
            {
              name: "undelete",
              description: "Undelete a workforce pool subject",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6935,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15624,
              ],
              args: {
                name: "SUBJECT",
                description:
                  "ID of the workforce pool subject or fully qualified identifier for the workforce pool subject.\n+\nTo set the `subject` attribute:\n* provide the argument `subject` on the command line",
              },
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a workforce pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6937,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a workforce pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag3052,
            {
              name: "--disable-programmatic-signin",
              description:
                "Disables the programmatic sign-in for workforce pool users. Specify\n `--no-disable-security-token-exchange` to enable programmatic sign-in. For more\ninformation, refer to Obtain short-lived tokens for workforce identity federation at\nhttps://cloud.google.com/iam/docs/workforce-obtaining-short-lived-credentials",
            },
            {
              name: "--disabled",
              description:
                "Disables the workforce pool. You cannot use a disabled workforce pool to\nperform new token exchanges or sign-ins using any provider in the workforce pool. Specify\n`--no-disabled` to enable a disabled pool",
            },
            flag3688,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6937,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--session-duration",
              description:
                "How long the Google Cloud access tokens, console sign-in sessions, and gcloud sign-in sessions\nfrom this workforce pool are valid. Must be greater than 15 minutes (900s) and less than 12\nhours (43200s). If not configured, minted credentials will have a default duration of one\nhour (3600s)",
              args: {
                name: "SESSION_DURATION",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKFORCE_POOL",
            description:
              "ID of the workforce pool or fully qualified identifier for the workforce pool.\n+\nTo set the `workforce_pool` attribute:\n* provide the argument `workforce_pool` on the command line",
          },
        },
      ],
    },
    {
      name: "workload-identity-pools",
      description: "Manage IAM workload identity pools",
      subcommands: [
        {
          name: "add-attestation-rule",
          description: "Add an attestation rule on a workload identity pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            {
              name: "--google-cloud-resource",
              description:
                "A single workload running on Google Cloud. This will be set\n                in the attestation rule to be added",
              args: {
                name: "GOOGLE_CLOUD_RESOURCE",
                description: "String",
                suggestions: [],
              },
            },
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "add-iam-policy-binding",
          description: "Add IAM policy binding for a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2225,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag7749,
            flag11637,
            flag11946,
            flag13137,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "create",
          description: "Create a new workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag3073,
            flag3638,
            flag3685,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5799,
            flag5801,
            flag7019,
            flag7356,
            {
              name: "--mode",
              description:
                "The mode of the pool. _MODE_ must be one of: *federation-only*, *mode-unspecified*, *system-trust-domain*, *trust-domain*",
              args: {
                name: "MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "federation-only",
                  "mode-unspecified",
                  "system-trust-domain",
                  "trust-domain",
                ],
              },
            },
            flag11637,
            flag11946,
            flag14975,
            flag15278,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "create-cred-config",
          description: "Create a configuration file for generated credentials",
          options: [
            flag42,
            flag46,
            {
              name: "--app-id-uri",
              description:
                "The custom Application ID URI for the Azure access token",
              args: {
                name: "APP_ID_URI",
                description: "String",
                suggestions: [],
              },
            },
            { name: "--aws", description: "Use AWS" },
            { name: "--azure", description: "Use Azure" },
            flag1201,
            flag2292,
            {
              name: "--credential-cert-configuration-output-file",
              description:
                "Path for the certificate configuration file. If specified, a certificate configuration file will be created at the specified path. If not specified, the certificate configuration will be created at the default gcloud location",
              args: {
                name: "CREDENTIAL_CERT_CONFIGURATION_OUTPUT_FILE",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--credential-cert-path",
              description: "Path of the X.509 certificate file",
              args: {
                name: "CREDENTIAL_CERT_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--credential-cert-private-key-path",
              description: "Path of the X.509 private key file",
              args: {
                name: "CREDENTIAL_CERT_PRIVATE_KEY_PATH",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--credential-cert-trust-chain-path",
              description:
                "Path for the trust chain file. A trust chain file is required if there are intermediate certificates in the certificate chain in between the root certificate stored in the workload identity pool provider trust store. This trust chain file should be a list of PEM certificates, with the leaf certificate at the top",
              args: {
                name: "CREDENTIAL_CERT_TRUST_CHAIN_PATH",
                description: "String",
                suggestions: [],
              },
            },
            flag2551,
            {
              name: "--credential-source-file",
              description: "Location of the credential source file",
              args: {
                name: "CREDENTIAL_SOURCE_FILE",
                description: "String",
                suggestions: [],
              },
            },
            flag2554,
            flag2555,
            {
              name: "--credential-source-url",
              description: "URL to obtain the credential from",
              args: {
                name: "CREDENTIAL_SOURCE_URL",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--enable-imdsv2",
              description:
                "Adds the AWS IMDSv2 session token Url to the credential source to enforce the AWS IMDSv2 flow",
            },
            flag4610,
            flag4612,
            flag4613,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag10992,
            flag11637,
            flag11946,
            flag13516,
            flag13504,
            {
              name: "--sts-location",
              description:
                "The location to use for the Security Token Service token endpoint. For example, specifying `us-central1` will configure the client to use the regional endpoint `sts.us-central1.rep.googleapis.com`. If not specified, the global endpoint `sts.googleapis.com` is used",
              args: {
                name: "STS_LOCATION",
                description: "String",
                suggestions: [],
              },
            },
            {
              name: "--subject-token-type",
              description:
                "The type of token being used for authorization. This defaults to urn:ietf:params:oauth:token-type:jwt",
              args: {
                name: "SUBJECT_TOKEN_TYPE",
                description: "String",
                suggestions: [],
              },
            },
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUDIENCE",
            description:
              "The workload identity pool provider fully qualified identifier",
          },
        },
        {
          name: "delete",
          description: "Delete a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "describe",
          description: "Describe a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "get-iam-policy",
          description: "Get the IAM policy for a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7019,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "list",
          description: "List workload identity pools",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag6692,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            {
              name: "--show-deleted",
              description: "Whether to return soft-deleted pools",
            },
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "list-attestation-rules",
          description: "List the attestation rules on a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2379,
            flag4849,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6515,
            flag7019,
            flag7356,
            flag11059,
            flag11637,
            flag11946,
            flag13948,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "managed-identities",
          description: "Manage IAM workload identity pool managed identities",
          subcommands: [
            {
              name: "add-attestation-rule",
              description:
                "Add an attestation rule on a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5359,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "create",
              description: "Create a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3069,
                flag3636,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "list",
              description: "List workload identity pool managed identities",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                {
                  name: "--location",
                  description:
                    "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `--namespace` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                  args: {
                    name: "LOCATION",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag7356,
                {
                  name: "--namespace",
                  description:
                    "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `--namespace` on the command line",
                  args: {
                    name: "NAMESPACE",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag11059,
                flag11637,
                flag11946,
                flag13780,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
                {
                  name: "--workload-identity-pool",
                  description:
                    "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `--namespace` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
                  args: {
                    name: "WORKLOAD_IDENTITY_POOL",
                    description: "String",
                    suggestions: [],
                  },
                },
              ],
            },
            {
              name: "list-attestation-rules",
              description:
                "List the attestation rules on a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag2379,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7010,
                flag7356,
                flag8131,
                flag11059,
                flag11637,
                flag11946,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "operations",
              description:
                "Manage IAM workload identity pool managed identity long running operations",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool managed identity operation",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7014,
                    flag7356,
                    {
                      name: "--managed-identity",
                      description:
                        "The ID to use for the managed identity. This value must be 2-63 characters and may\ncontain the characters [a-z0-9-]. The prefix `gcp-` is reserved for use by Google, and\nmay not be specified.\n+\n\nTo set the `managed-identity` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--managed-identity` on the command line",
                      args: {
                        name: "MANAGED_IDENTITY",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag8132,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15635,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workload identity pool managed identity operation or fully qualified identifier for the workload identity pool managed identity operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                  },
                },
              ],
            },
            {
              name: "remove-attestation-rule",
              description:
                "Remove an attestation rule on a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5359,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "set-attestation-rules",
              description:
                "Set attestation rules on a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11341,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "undelete",
              description: "Undelete a workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
            {
              name: "update",
              description: "Update workload identity pool managed identity",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3069,
                flag3636,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7010,
                flag7356,
                flag8131,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15633,
              ],
              args: {
                name: "MANAGED_IDENTITY",
                description:
                  "ID of the workload identity pool managed identity or fully qualified identifier for the workload identity pool managed identity.\n+\nTo set the `managed_identity` attribute:\n* provide the argument `managed_identity` on the command line",
              },
            },
          ],
        },
        {
          name: "namespaces",
          description: "Manage IAM workload identity pool namespaces",
          subcommands: [
            {
              name: "create",
              description: "Create a workload identity pool namespace",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3070,
                flag3637,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7012,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15634,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a workload identity pool namespace",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7012,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15634,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a workload identity pool namespace",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7012,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15634,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "list",
              description: "List workload identity pool namespaces",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7007,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13780,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
                flag15628,
              ],
            },
            {
              name: "operations",
              description:
                "Manage IAM workload identity pool namespace long running operations",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool namespace operation",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7014,
                    flag7356,
                    flag8132,
                    flag11637,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15635,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workload identity pool namespace operation or fully qualified identifier for the workload identity pool namespace operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                  },
                },
              ],
            },
            {
              name: "undelete",
              description: "Undelete a workload identity pool namespace",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7012,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15634,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
            {
              name: "update",
              description: "Update workload identity pool namespace",
              options: [
                flag42,
                flag46,
                flag720,
                flag1201,
                flag2292,
                flag3070,
                flag3637,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7012,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15634,
              ],
              args: {
                name: "NAMESPACE",
                description:
                  "ID of the workload identity pool namespace or fully qualified identifier for the workload identity pool namespace.\n+\nTo set the `namespace` attribute:\n* provide the argument `namespace` on the command line",
              },
            },
          ],
        },
        {
          name: "operations",
          description:
            "Manage IAM workload identity pool long running operations",
          subcommands: [
            {
              name: "describe",
              description: "Describe a workload identity pool operation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7014,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15635,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the workload identity pool operation or fully qualified identifier for the workload identity pool operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
        {
          name: "providers",
          description: "Manage IAM workload identity pool providers",
          subcommands: [
            {
              name: "create-aws",
              description: "Create a new AWS workload identity pool provider",
              options: [
                flag42,
                flag46,
                {
                  name: "--account-id",
                  description: "The AWS account ID",
                  args: {
                    name: "ACCOUNT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag738,
                flag739,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "create-oidc",
              description: "Create a new OIDC workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag461,
                flag738,
                flag740,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--issuer-uri",
                  description: "The OIDC issuer URL",
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6157,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "create-saml",
              description: "Create a new SAML workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag738,
                flag740,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5622,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "create-x509",
              description: "Create a new X.509 workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag738,
                flag739,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                {
                  name: "--trust-store-config-path",
                  description:
                    'YAML file with configuration metadata for the X.509 identity provider.\nExample file format:\n```yaml\ntrustStore:\n  trustAnchors:\n  - pemCertificate: "-----BEGIN CERTIFICATE-----\n  <certificate>\n  -----END CERTIFICATE-----"\n  intermediateCas:\n  - pemCertificate: "-----BEGIN CERTIFICATE-----\n  <certificate>\n  -----END CERTIFICATE-----"\n```',
                  args: {
                    name: "TRUST_STORE_CONFIG_PATH",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "delete",
              description: "Delete a workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "describe",
              description: "Describe a workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "keys",
              description: "Manage IAM workload identity pool provider keys",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a new workload identity pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7009,
                    flag7356,
                    flag11637,
                    flag11777,
                    flag11946,
                    flag14214,
                    flag14975,
                    {
                      name: "--use",
                      description:
                        "The purpose of the key. _USE_ must be one of: *encryption*, *key-use-unspecified*",
                      args: {
                        name: "USE",
                        description:
                          "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                        suggestions: ["encryption", "key-use-unspecified"],
                      },
                    },
                    flag15315,
                    flag15424,
                    flag15632,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
                {
                  name: "delete",
                  description: "Delete a workload identity pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7009,
                    flag7356,
                    flag11637,
                    flag11777,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15632,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
                {
                  name: "describe",
                  description: "Describe a workload identity pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7009,
                    flag7356,
                    flag11637,
                    flag11777,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15632,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
                {
                  name: "list",
                  description: "List workload identity pool provider keys",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4849,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag6515,
                    {
                      name: "--location",
                      description:
                        "The location name.\n+\nTo set the `location` attribute:\n* provide the argument `--provider` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
                      args: {
                        name: "LOCATION",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag7356,
                    flag11059,
                    flag11637,
                    {
                      name: "--provider",
                      description:
                        "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `--provider` on the command line",
                      args: {
                        name: "PROVIDER",
                        description: "String",
                        suggestions: [],
                      },
                    },
                    flag11946,
                    flag13780,
                    flag13948,
                    flag14975,
                    flag15315,
                    flag15424,
                    {
                      name: "--workload-identity-pool",
                      description:
                        "The ID to use for the pool, which becomes the final component of the resource name. This value\nshould be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix `gcp-` is\nreserved for use by Google, and may not be specified.\n+\n\nTo set the `workload-identity-pool` attribute:\n* provide the argument `--provider` on the command line with a fully specified name;\n* provide the argument `--workload-identity-pool` on the command line",
                      args: {
                        name: "WORKLOAD_IDENTITY_POOL",
                        description: "String",
                        suggestions: [],
                      },
                    },
                  ],
                },
                {
                  name: "operations",
                  description:
                    "Manage IAM workload identity pool provider key long running operations",
                  subcommands: [
                    {
                      name: "describe",
                      description:
                        "Describe a workload identity pool provider key operation",
                      options: [
                        flag42,
                        flag46,
                        flag1201,
                        flag2292,
                        flag4900,
                        flag4902,
                        flag5091,
                        flag5453,
                        flag5699,
                        flag6267,
                        flag7014,
                        flag7356,
                        flag11637,
                        flag11778,
                        flag11946,
                        flag14975,
                        flag15315,
                        flag15424,
                        flag15635,
                      ],
                      args: {
                        name: "OPERATION",
                        description:
                          "ID of the workload identity pool provider key operation or fully qualified identifier for the workload identity pool provider key operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                      },
                    },
                  ],
                },
                {
                  name: "undelete",
                  description: "Undelete a workload identity pool provider key",
                  options: [
                    flag42,
                    flag46,
                    flag720,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7009,
                    flag7356,
                    flag11637,
                    flag11777,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15632,
                  ],
                  args: {
                    name: "KEY",
                    description:
                      "ID of the workload identity pool provider key or fully qualified identifier for the workload identity pool provider key.\n+\nTo set the `key` attribute:\n* provide the argument `key` on the command line",
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List workload identity pool providers",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4849,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6515,
                flag7007,
                flag7356,
                flag11059,
                flag11637,
                flag11946,
                flag13780,
                flag13948,
                flag14975,
                flag15315,
                flag15424,
                flag15628,
              ],
            },
            {
              name: "operations",
              description:
                "Manage IAM workload identity pool provider long running operations",
              subcommands: [
                {
                  name: "describe",
                  description:
                    "Describe a workload identity pool provider operation",
                  options: [
                    flag42,
                    flag46,
                    flag1201,
                    flag2292,
                    flag4900,
                    flag4902,
                    flag5091,
                    flag5453,
                    flag5699,
                    flag7014,
                    flag7356,
                    flag11637,
                    flag11778,
                    flag11946,
                    flag14975,
                    flag15315,
                    flag15424,
                    flag15635,
                  ],
                  args: {
                    name: "OPERATION",
                    description:
                      "ID of the workload identity pool provider operation or fully qualified identifier for the workload identity pool provider operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
                  },
                },
              ],
            },
            {
              name: "undelete",
              description: "Undelete a workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "update-aws",
              description: "Update an AWS workload identity pool provider",
              options: [
                flag42,
                flag46,
                {
                  name: "--account-id",
                  description: "The AWS account ID",
                  args: {
                    name: "ACCOUNT_ID",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag738,
                flag739,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "update-oidc",
              description: "Update an OIDC workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag461,
                flag738,
                flag739,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                {
                  name: "--issuer-uri",
                  description: "The OIDC issuer URL",
                  args: {
                    name: "ISSUER_URI",
                    description: "String",
                    suggestions: [],
                  },
                },
                flag6157,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "update-saml",
              description: "Update a SAML workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag738,
                flag739,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5621,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
            {
              name: "update-x509",
              description: "Update an X.509 workload identity pool provider",
              options: [
                flag42,
                flag46,
                flag738,
                flag739,
                flag1201,
                flag2292,
                flag3049,
                flag3639,
                flag3686,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7016,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                {
                  name: "--trust-store-config-path",
                  description:
                    'YAML file with configuration metadata for the X.509 identity provider.\nExample file format:\n```yaml\ntrustStore:\n  trustAnchors:\n  - pemCertificate: "-----BEGIN CERTIFICATE-----\n  <certificate>\n  -----END CERTIFICATE-----"\n  intermediateCas:\n  - pemCertificate: "-----BEGIN CERTIFICATE-----\n  <certificate>\n  -----END CERTIFICATE-----"\n```',
                  args: {
                    name: "TRUST_STORE_CONFIG_PATH",
                    description:
                      "Googlecloudsdk.calliope.arg_parsers:YAMLFileContents",
                    suggestions: [],
                  },
                },
                flag15315,
                flag15424,
                flag15636,
              ],
              args: {
                name: "PROVIDER",
                description:
                  "ID of the workload identity pool provider or fully qualified identifier for the workload identity pool provider.\n+\nTo set the `provider` attribute:\n* provide the argument `provider` on the command line",
              },
            },
          ],
        },
        {
          name: "remove-attestation-rule",
          description: "Remove an attestation rule on a workload identity pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5359,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "remove-iam-policy-binding",
          description:
            "Remove IAM policy binding from a workload identity pool",
          options: [
            flag42,
            flag46,
            flag407,
            flag1201,
            flag2228,
            flag2218,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag7753,
            flag11637,
            flag11946,
            flag13138,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "set-attestation-rules",
          description: "Set attestation rules on a workload identity pool",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11341,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "set-iam-policy",
          description: "Set the IAM policy for a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "WORKLOAD_IDENTITY_POOL",
              description:
                "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
            },
            {
              name: "POLICY_FILE",
              description:
                "Path to a local JSON or YAML formatted file containing a valid policy.\n+\nThe output of the `get-iam-policy` command is a valid file, as is any\nJSON or YAML file conforming to the structure of a\n[Policy](https://cloud.google.com/iam/reference/rest/v1/Policy)",
            },
          ],
        },
        {
          name: "undelete",
          description: "Undelete a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
        {
          name: "update",
          description: "Update a workload identity pool",
          options: [
            flag42,
            flag46,
            flag1201,
            {
              name: "--certificate-lifetime",
              description:
                "Lifetime of the workload certificates issued by the CA pool",
              args: {
                name: "CERTIFICATE_LIFETIME",
                description: "String",
                suggestions: [],
              },
            },
            flag2292,
            flag3073,
            flag3638,
            flag3685,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag5799,
            flag5801,
            {
              name: "--key-algorithm",
              description:
                "Key algorithm to use when generating the key pair. This key pair will be used to create the\ncertificate. _KEY_ALGORITHM_ must be one of: *ecdsa-p256*, *ecdsa-p384*, *key-algorithm-unspecified*, *rsa-2048*, *rsa-3072*, *rsa-4096*",
              args: {
                name: "KEY_ALGORITHM",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: [
                  "ecdsa-p256",
                  "ecdsa-p384",
                  "key-algorithm-unspecified",
                  "rsa-2048",
                  "rsa-3072",
                  "rsa-4096",
                ],
              },
            },
            flag7019,
            flag7356,
            flag11637,
            flag11946,
            {
              name: "--rotation-window-percentage",
              description:
                "Rotation window percentage indicating when certificate rotation should be initiated based on\nremaining lifetime",
              args: {
                name: "ROTATION_WINDOW_PERCENTAGE",
                description: "Int",
                suggestions: [],
              },
            },
            flag14975,
            flag15278,
            flag15315,
            flag15424,
          ],
          args: {
            name: "WORKLOAD_IDENTITY_POOL",
            description:
              "ID of the workload identity pool or fully qualified identifier for the workload identity pool.\n+\nTo set the `workload_identity_pool` attribute:\n* provide the argument `workload_identity_pool` on the command line",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
