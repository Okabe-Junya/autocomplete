const completionSpec: Fig.Spec = {
  name: "shellcheck",
  description: "Static analysis tool for shell scripts",
  options: [
    {
      name: ["-a", "--check-sourced"],
      description: "Include warnings from sourced files",
    },
    {
      name: ["-C", "--color"],
      description: "Use color",
      args: {
        name: "when",
        isOptional: true,
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: ["-i", "--include"],
      description: "Consider only given types of warnings",
      args: {
        name: "codes",
      },
    },
    {
      name: ["-e", "--exclude"],
      description: "Exclude types of warnings",
      args: {
        name: "codes",
      },
    },
    {
      name: "--extended-analysis",
      description: "Perform dataflow analysis (default true)",
      args: {
        name: "bool",
        suggestions: ["true", "false"],
      },
    },
    {
      name: ["-f", "--format"],
      description: "Output format",
      args: {
        name: "format",
        suggestions: [
          "checkstyle",
          "diff",
          "gcc",
          "json",
          "json1",
          "quiet",
          "tty",
        ],
      },
    },
    {
      name: "--list-optional",
      description: "List checks disabled by default",
    },
    {
      name: "--norc",
      description: "Don't look for .shellcheckrc files",
    },
    {
      name: "--rcfile",
      description:
        "Prefer the specified configuration file over searching for one",
      args: {
        name: "rcfile",
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--enable"],
      description: "List of optional checks to enable (or 'all')",
      args: {
        name: "checks",
      },
    },
    {
      name: ["-P", "--source-path"],
      description:
        "Specify path when looking for sourced files ('SCRIPTDIR' for script's dir)",
      args: {
        name: "sourcepaths",
        template: "folders",
      },
    },
    {
      name: ["-s", "--shell"],
      description: "Specify dialect",
      args: {
        name: "shellname",
        suggestions: ["sh", "bash", "dash", "ksh", "busybox"],
      },
    },
    {
      name: ["-S", "--severity"],
      description: "Minimum severity of errors to consider",
      args: {
        name: "severity",
        suggestions: ["error", "warning", "info", "style"],
      },
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
    {
      name: ["-W", "--wiki-link-count"],
      description: "The number of wiki links to show, when applicable",
      args: {
        name: "num",
      },
    },
    {
      name: ["-x", "--external-sources"],
      description: "Allow 'source' outside of FILES",
    },
    {
      name: "--help",
      description: "Show this usage summary and exit",
    },
  ],
  args: {
    name: "files",
    description: "Script files to check",
    template: "filepaths",
    isVariadic: true,
  },
};

export default completionSpec;
