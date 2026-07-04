const patchTargetOptions: Fig.Option[] = [
  {
    name: "--group",
    description: "API group in patch target",
    args: { name: "group" },
  },
  {
    name: "--version",
    description: "API version in patch target",
    args: { name: "version" },
  },
  {
    name: "--kind",
    description: "Resource kind in patch target",
    args: { name: "kind" },
  },
  {
    name: "--name",
    description: "Resource name in patch target",
    args: { name: "name" },
  },
  {
    name: "--namespace",
    description: "Resource namespace in patch target",
    args: { name: "namespace" },
  },
  {
    name: "--annotation-selector",
    description: "AnnotationSelector in patch target",
    args: { name: "selector" },
  },
  {
    name: "--label-selector",
    description: "LabelSelector in patch target",
    args: { name: "selector" },
  },
];

const configmapSecretOptions: Fig.Option[] = [
  {
    name: "--from-file",
    description: "Key file path, or key=filepath, or a directory",
    args: { name: "source", template: ["filepaths", "folders"] },
  },
  {
    name: "--from-literal",
    description:
      "Specify a key and literal value to insert (i.e. mykey=somevalue)",
    args: { name: "key=value" },
  },
  {
    name: "--from-env-file",
    description: "Path to a file to read lines of key=val pairs",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--disableNameSuffixHash",
    description: "Disable the name suffix hash",
  },
  {
    name: "--namespace",
    description: "Specify the namespace",
    args: { name: "namespace" },
  },
];

const editAddSubcommands: Fig.Subcommand[] = [
  {
    name: "annotation",
    description: "Adds one or more commonAnnotations to kustomization.yaml",
    args: { name: "key:value", isVariadic: true },
  },
  {
    name: "base",
    description:
      "Adds one or more bases to the kustomization.yaml in current directory",
    args: { name: "filepath", template: "folders", isVariadic: true },
  },
  {
    name: "buildmetadata",
    description: "Adds one or more buildMetadata options to kustomization.yaml",
    args: { name: "option" },
  },
  {
    name: "component",
    description:
      "Add the name of a file containing a component to the kustomization file",
    args: { name: "filepath", template: "filepaths" },
  },
  {
    name: "configmap",
    description: "Adds a configmap to the kustomization file",
    args: { name: "name" },
    options: [
      ...configmapSecretOptions,
      {
        name: "--behavior",
        description: "Behavior for config map generation",
        args: { name: "behavior", suggestions: ["create", "merge", "replace"] },
      },
    ],
  },
  {
    name: "generator",
    description:
      "Add the name of a file containing a generator configuration to the kustomization file",
    args: { name: "filepath", template: "filepaths" },
  },
  {
    name: "label",
    description: "Adds one or more commonLabels to kustomization.yaml",
    args: { name: "key:value", isVariadic: true },
  },
  {
    name: "patch",
    description: "Add an item to patches field",
    options: [
      ...patchTargetOptions,
      {
        name: "--path",
        description:
          "Path to the patch file. Cannot be used with --patch at the same time",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--patch",
        description:
          "Literal string of patch content. Cannot be used with --path at the same time",
        args: { name: "patch" },
      },
    ],
  },
  {
    name: "resource",
    description:
      "Add the name of a file containing a resource to the kustomization file",
    args: { name: "filepath", template: "filepaths" },
  },
  {
    name: "secret",
    description: "Adds a secret to the kustomization file",
    args: { name: "name" },
    options: [
      ...configmapSecretOptions,
      {
        name: "--type",
        description:
          "Secret type, e.g. 'Opaque' (default) or 'kubernetes.io/tls'",
        args: { name: "type", suggestions: ["Opaque", "kubernetes.io/tls"] },
      },
    ],
  },
  {
    name: "transformer",
    description:
      "Add the name of a file containing a transformer configuration to the kustomization file",
    args: { name: "filepath", template: "filepaths" },
  },
];

const editSetSubcommands: Fig.Subcommand[] = [
  {
    name: "annotation",
    description: "Sets one or more commonAnnotations in kustomization.yaml",
    args: { name: "key:value", isVariadic: true },
  },
  {
    name: "buildmetadata",
    description: "Sets one or more buildMetadata options in kustomization.yaml",
    args: { name: "option" },
  },
  {
    name: "configmap",
    description:
      "Edits the value for an existing key for a ConfigMap in kustomization.yaml",
    args: { name: "name" },
  },
  {
    name: "image",
    description:
      "Sets images and their new names, new tags or digests in the kustomization file",
    args: { name: "image", isVariadic: true },
  },
  {
    name: "label",
    description: "Sets one or more commonLabels in kustomization.yaml",
    args: { name: "key:value", isVariadic: true },
  },
  {
    name: "nameprefix",
    description:
      "Sets the value of the namePrefix field in the kustomization file",
    args: { name: "prefix" },
  },
  {
    name: "namespace",
    description:
      "Sets the value of the namespace field in the kustomization file",
    args: { name: "namespace" },
  },
  {
    name: "namesuffix",
    description:
      "Sets the value of the nameSuffix field in the kustomization file",
    args: { name: "suffix" },
  },
  {
    name: "replicas",
    description: "Sets replicas count for resources in the kustomization file",
    args: { name: "name=count", isVariadic: true },
  },
  {
    name: "secret",
    description:
      "Edits the value for an existing key for a Secret in kustomization.yaml",
    args: { name: "name" },
  },
];

const editRemoveSubcommands: Fig.Subcommand[] = [
  {
    name: "annotation",
    description:
      "Removes one or more commonAnnotations from kustomization.yaml",
    args: { name: "key", isVariadic: true },
  },
  {
    name: "buildmetadata",
    description:
      "Removes one or more buildMetadata options from kustomization.yaml",
    args: { name: "option" },
  },
  {
    name: "configmap",
    description: "Removes the specified configmap(s) from kustomization.yaml",
    args: { name: "name", isVariadic: true },
  },
  {
    name: "label",
    description: "Removes one or more commonLabels from kustomization.yaml",
    args: { name: "key", isVariadic: true },
  },
  {
    name: "patch",
    description: "Removes a patch from kustomization.yaml",
    options: [
      ...patchTargetOptions,
      {
        name: "--path",
        description: "Path to the patch file",
        args: { name: "path", template: "filepaths" },
      },
      {
        name: "--patch",
        description: "Literal string of patch content",
        args: { name: "patch" },
      },
    ],
  },
  {
    name: "resource",
    description:
      "Removes one or more resource file paths from kustomization.yaml",
    args: { name: "filepath", template: "filepaths", isVariadic: true },
  },
  {
    name: "secret",
    description: "Removes the specified secret(s) from kustomization.yaml",
    args: { name: "name", isVariadic: true },
  },
  {
    name: "transformer",
    description: "Removes one or more transformers from kustomization.yaml",
    args: { name: "filepath", template: "filepaths", isVariadic: true },
  },
];

const completionSpec: Fig.Spec = {
  name: "kustomize",
  description: "Manage declarative configuration of Kubernetes",
  subcommands: [
    {
      name: "build",
      description: "Build a kustomization target from a directory or URL",
      args: {
        name: "dir",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: ["-o", "--output"],
          description: "If specified, write output to this path",
          args: { name: "path", template: ["filepaths", "folders"] },
        },
        {
          name: "--enable-helm",
          description: "Enable use of the Helm chart inflator generator",
        },
        {
          name: "--enable-alpha-plugins",
          description: "Enable kustomize plugins",
        },
        {
          name: "--enable-exec",
          description: "Enable support for exec functions (raw executables)",
        },
        {
          name: ["-e", "--env"],
          description:
            "A list of environment variables to be used by functions",
          args: { name: "env", isVariadic: true },
        },
        {
          name: "--load-restrictor",
          description:
            "Control whether kustomizations may load files outside their root",
          args: {
            name: "restrictor",
            suggestions: ["LoadRestrictionsRootOnly", "LoadRestrictionsNone"],
          },
        },
        {
          name: "--mount",
          description: "A list of storage options read from the filesystem",
          args: { name: "mount", isVariadic: true },
        },
        {
          name: "--network",
          description: "Enable network access for functions that declare it",
        },
        {
          name: "--network-name",
          description: "The docker network to run the container in",
          args: { name: "name" },
        },
        {
          name: "--as-current-user",
          description:
            "Use the uid and gid of the command executor to run the function in the container",
        },
        {
          name: "--helm-command",
          description: "Helm command (path to executable)",
          args: { name: "command", template: "filepaths" },
        },
        {
          name: "--helm-api-versions",
          description:
            "Kubernetes api versions used by Helm for Capabilities.APIVersions",
          args: { name: "versions", isVariadic: true },
        },
        {
          name: "--helm-kube-version",
          description:
            "Kubernetes version used by Helm for Capabilities.KubeVersion",
          args: { name: "version" },
        },
        {
          name: "--helm-debug",
          description:
            "Enable debug output from the Helm chart inflator generator",
        },
      ],
    },
    {
      name: ["create", "init"],
      description: "Create a new kustomization in the current directory",
      options: [
        {
          name: "--resources",
          description:
            "Name of a file containing a file to add to the kustomization file",
          args: { name: "resources", template: ["filepaths", "folders"] },
        },
        {
          name: "--autodetect",
          description:
            "Search for kubernetes resources in the current directory to be added",
        },
        {
          name: "--recursive",
          description:
            "Enable recursive directory searching for resource auto-detection",
        },
        {
          name: "--namespace",
          description:
            "Set the value of the namespace field in the kustomization file",
          args: { name: "namespace" },
        },
        {
          name: "--nameprefix",
          description:
            "Sets the value of the namePrefix field in the kustomization file",
          args: { name: "prefix" },
        },
        {
          name: "--namesuffix",
          description:
            "Sets the value of the nameSuffix field in the kustomization file",
          args: { name: "suffix" },
        },
        {
          name: "--labels",
          description: "Add one or more common labels",
          args: { name: "labels" },
        },
        {
          name: "--annotations",
          description: "Add one or more common annotations",
          args: { name: "annotations" },
        },
      ],
    },
    {
      name: "edit",
      description: "Edit a kustomization file",
      subcommands: [
        {
          name: "add",
          description: "Adds an item to the kustomization file",
          subcommands: editAddSubcommands,
        },
        {
          name: "set",
          description:
            "Sets the value of different fields in kustomization file",
          subcommands: editSetSubcommands,
        },
        {
          name: "remove",
          description: "Removes items from the kustomization file",
          subcommands: editRemoveSubcommands,
        },
        {
          name: "fix",
          description: "Fix the missing fields in kustomization file",
          options: [
            {
              name: "--vars",
              description:
                "If specified, kustomize will attempt to convert vars to replacements",
            },
          ],
        },
      ],
    },
    {
      name: "cfg",
      description: "Commands for reading and writing configuration",
      subcommands: [
        {
          name: "cat",
          description: "Print Resource Config from a local directory",
          args: { name: "dir", template: "folders", isOptional: true },
        },
        {
          name: "count",
          description: "Count Resources Config from a local directory",
          args: { name: "dir", template: "folders", isOptional: true },
        },
        {
          name: "grep",
          description:
            "Search for matching Resources in a directory or from stdin",
          args: [
            { name: "query" },
            { name: "dir", template: "folders", isOptional: true },
          ],
        },
        {
          name: "tree",
          description: "Display Resource structure from a directory or stdin",
          args: { name: "dir", template: "folders", isOptional: true },
        },
      ],
    },
    {
      name: "fn",
      description: "Commands for running functions against configuration",
      subcommands: [
        {
          name: "run",
          description: "Reconcile config functions to Resources",
          args: { name: "dir", template: "folders", isOptional: true },
        },
      ],
    },
    {
      name: "localize",
      description:
        "Creates localized copy of target kustomization root at destination",
      args: [
        { name: "target", template: ["folders"], isOptional: true },
        { name: "destination", template: ["folders"], isOptional: true },
      ],
      options: [
        {
          name: "--scope",
          description:
            "Path to directory inside of which localize is limited to running",
          args: { name: "scope", template: "folders" },
        },
        {
          name: "--no-verify",
          description:
            "Does not verify that the outputs of kustomize build for target and newDir are the same",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "version",
      description: "Prints the kustomize version",
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for kustomize",
    },
    {
      name: "--stack-trace",
      description: "Print a stack-trace on error",
    },
  ],
};

export default completionSpec;
