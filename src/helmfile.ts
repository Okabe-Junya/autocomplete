const completionSpec: Fig.Spec = {
  name: "helmfile",
  description: "Deploy helm charts",
  subcommands: [
    {
      name: "apply",
      description:
        "Apply all resources from state file only when there are changes",
    },
    {
      name: "build",
      description: "Build all resources from state file",
    },
    {
      name: "cache",
      description: "Cache management",
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
    },
    {
      name: "create",
      description: "Create a helmfile deployment project scaffold",
    },
    {
      name: "deps",
      description: "Update charts based on their requirements",
    },
    {
      name: "destroy",
      description: "Destroys and then purges releases",
    },
    {
      name: "diff",
      description: "Diff releases defined in state file",
    },
    {
      name: "doctor",
      description:
        "AI-assisted diff analysis: summarize changes and flag risks",
    },
    {
      name: "fetch",
      description: "Fetch charts from state file",
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "init",
      description:
        "Initialize the helmfile, includes version checking and installation of helm and plug-ins",
    },
    {
      name: "lint",
      description: "Lint charts from state file (helm lint)",
    },
    {
      name: "list",
      description: "List releases defined in state file",
    },
    {
      name: "print-env",
      description: "Print parsed environment configuration",
    },
    {
      name: "repos",
      description: "Add chart repositories defined in state file",
    },
    {
      name: "show-dag",
      description:
        "Print a table with GROUP, RELEASE, and DEPENDENCIES columns showing the release deployment order",
    },
    {
      name: "status",
      description: "Retrieve status of releases in state file",
    },
    {
      name: "sync",
      description: "Sync releases defined in state file",
    },
    {
      name: "template",
      description: "Template releases defined in state file",
    },
    {
      name: "test",
      description: "Test charts from state file (helm test)",
    },
    {
      name: "unittest",
      description:
        "Unit test charts from state file using helm-unittest plugin",
    },
    {
      name: "version",
      description: "Print the CLI version",
    },
    {
      name: "write-values",
      description:
        "Write values files for releases. Similar to `helmfile template`, write values files instead of manifests",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for helmfile",
      isPersistent: true,
    },
    {
      name: "--allow-no-matching-release",
      description:
        "Do not exit with an error code if the provided selector has no matching releases",
      isPersistent: true,
    },
    {
      name: ["--chart", "-c"],
      description:
        "Set chart. Uses the chart set in release by default, and is available in template as {{ .Chart }}",
      isPersistent: true,
      args: {
        name: "chart",
      },
    },
    {
      name: "--color",
      description: "Output with color",
      isPersistent: true,
    },
    {
      name: "--debug",
      description:
        "Enable verbose output for Helm and set log-level to debug, this disables --quiet/-q effect",
      isPersistent: true,
    },
    {
      name: "--disable-force-update",
      description:
        "Do not force helm repos to update when executing helm repo add (Helm 3 only)",
      isPersistent: true,
    },
    {
      name: "--enable-live-output",
      description:
        "Show live output from the Helm binary Stdout/Stderr into Helmfile own Stdout/Stderr. It only applies for the Helm CLI commands, Stdout/Stderr for Hooks are still displayed only when it's execution finishes",
      isPersistent: true,
    },
    {
      name: "--enforce-plugin-verification",
      description:
        "Fail plugin installation if verification is not supported (for security purposes)",
      isPersistent: true,
    },
    {
      name: ["--environment", "-e"],
      description: "Specify the environment name. defaults to default",
      isPersistent: true,
      args: { name: "environment" },
    },
    {
      name: ["--file", "-f"],
      description:
        "Load config from file or directory. defaults to helmfile.yaml or `helmfile.d`(means `helmfile.d/*.yaml`) in this preference",
      isPersistent: true,
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["--helm-binary", "-b"],
      description: 'Path to the helm binary (default "helm")',
      isPersistent: true,
      args: { name: "binary" },
    },
    {
      name: ["--interactive", "-i"],
      description: "Request confirmation before attempting to modify clusters",
      isPersistent: true,
    },
    {
      name: "--kube-context",
      description: "Set kubectl context. Uses current context by default",
      isPersistent: true,
      args: { name: "kube-context" },
    },
    {
      name: "--kubeconfig",
      description: "Use a particular kubeconfig file",
      isPersistent: true,
      args: { name: "kubeconfig", template: "filepaths" },
    },
    {
      name: ["--kustomize-binary", "-k"],
      description: 'Path to the kustomize binary (default "kustomize")',
      isPersistent: true,
      args: { name: "binary" },
    },
    {
      name: "--log-level",
      description: "Set log level, default info (default info)",
      isPersistent: true,
      args: { name: "log-level" },
    },
    {
      name: ["--namespace", "-n"],
      description:
        "Set namespace. Uses the namespace set in the context by default, and is available in templates as {{ .Namespace }}",
      isPersistent: true,
      args: { name: "namespace" },
    },
    {
      name: "--no-color",
      description: "Output without color",
      isPersistent: true,
    },
    {
      name: "--oci-plain-http",
      description:
        "Use plain HTTP for OCI registries (required for local/insecure registries in Helm 4)",
      isPersistent: true,
    },
    {
      name: ["--quiet", "-q"],
      description: "Silence output. Equivalent to log-level warn",
      isPersistent: true,
    },
    {
      name: ["--selector", "-l"],
      description:
        "Only run using the releases that match labels. Labels can take the form of foo=bar or foo!=bar",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "selector" },
    },
    {
      name: "--sequential-helmfiles",
      description:
        "Process helmfile.d files sequentially in alphabetical order instead of in parallel",
      isPersistent: true,
    },
    {
      name: "--skip-deps",
      description:
        'Skip running "helm repo update" and "helm dependency build"',
      isPersistent: true,
    },
    {
      name: "--skip-refresh",
      description: 'Skip running "helm repo update"',
      isPersistent: true,
    },
    {
      name: "--state-values-file",
      description: "Specify state values in a YAML file",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "state-values-file", template: "filepaths" },
    },
    {
      name: "--state-values-set",
      description:
        "Set state values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "state-values-set" },
    },
    {
      name: "--state-values-set-string",
      description:
        "Set state STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "state-values-set-string" },
    },
    {
      name: "--strip-args-values-on-exit-error",
      description:
        "Strip the potential secret values of the helm command args contained in a helmfile error message (default true)",
      isPersistent: true,
    },
    {
      name: ["--version", "-v"],
      description: "Version for helmfile",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
