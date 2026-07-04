const completionSpec: Fig.Spec = {
  name: "actionlint",
  description: "Linter for GitHub Actions workflow files",
  options: [
    {
      name: "-color",
      description: "Always enable colorful output",
    },
    {
      name: "-config-file",
      description: "File path to config file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-debug",
      description: "Enable debug output",
    },
    {
      name: "-format",
      description:
        "Custom template to format error messages in Go template syntax",
      args: {
        name: "template",
      },
    },
    {
      name: "-ignore",
      description:
        "Regular expression matching to error messages you want to ignore",
      isRepeatable: true,
      args: {
        name: "regexp",
      },
    },
    {
      name: "-init-config",
      description:
        "Generate default config file at .github/actionlint.yaml in current project",
    },
    {
      name: "-no-color",
      description: "Disable colorful output",
    },
    {
      name: "-oneline",
      description: "Use one line per one error",
    },
    {
      name: "-pyflakes",
      description: "Command name or file path of pyflakes external command",
      args: {
        name: "command",
        template: "filepaths",
      },
    },
    {
      name: "-shellcheck",
      description: "Command name or file path of shellcheck external command",
      args: {
        name: "command",
        template: "filepaths",
      },
    },
    {
      name: "-stdin-filename",
      description: "File name when reading input from stdin",
      args: {
        name: "name",
      },
    },
    {
      name: "-verbose",
      description: "Enable verbose output",
    },
    {
      name: "-version",
      description: "Show version and how this binary was installed",
    },
  ],
  args: {
    name: "files",
    description: "Workflow YAML files to check",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
