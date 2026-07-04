interface LinterEntry {
  name: string;
  description?: string;
  deprecated?: boolean;
}

const lintersGenerator: Fig.Generator = {
  script: ["golangci-lint", "linters", "--json"],
  postProcess: (out) => {
    try {
      const data = JSON.parse(out);
      const entries: LinterEntry[] = [
        ...(data.Enabled ?? []),
        ...(data.Disabled ?? []),
      ];
      return entries.map((linter) => ({
        name: linter.name,
        description: linter.description,
        icon: "🔍",
      }));
    } catch {
      return [];
    }
  },
};

const formattersGenerator: Fig.Generator = {
  script: ["golangci-lint", "formatters", "--json"],
  postProcess: (out) => {
    try {
      const data = JSON.parse(out);
      const entries: LinterEntry[] = [
        ...(data.Enabled ?? []),
        ...(data.Disabled ?? []),
      ];
      return entries.map((formatter) => ({
        name: formatter.name,
        description: formatter.description,
        icon: "🔧",
      }));
    } catch {
      return [];
    }
  },
};

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Read config from file path PATH",
  args: { name: "PATH", template: "filepaths" },
};

const noConfigOption: Fig.Option = {
  name: "--no-config",
  description: "Don't read config file",
};

const outputPathArg: Fig.Arg = {
  name: "path",
  description: "Output path: 'stdout', 'stderr', or a file path",
  suggestions: ["stdout", "stderr"],
  template: "filepaths",
};

const boolFlag = (
  name: Fig.SingleOrArray<string>,
  description: string
): Fig.Option => ({
  name,
  description,
});

const completionSpec: Fig.Spec = {
  name: "golangci-lint",
  description: "Smart, fast linters runner for Go",
  subcommands: [
    {
      name: "run",
      description: "Lint the code",
      args: {
        name: "path",
        description: "Packages or directories to lint",
        isVariadic: true,
        isOptional: true,
        template: ["folders", "filepaths"],
      },
      options: [
        configOption,
        noConfigOption,
        {
          name: "--default",
          description: "Default set of linters to enable",
          args: {
            name: "set",
            default: "standard",
            suggestions: ["standard", "all", "none", "fast"],
          },
        },
        {
          name: ["-D", "--disable"],
          description: "Disable specific linter",
          isRepeatable: true,
          args: { name: "linter", generators: lintersGenerator },
        },
        {
          name: ["-E", "--enable"],
          description: "Enable specific linter",
          isRepeatable: true,
          args: { name: "linter", generators: lintersGenerator },
        },
        {
          name: "--enable-only",
          description:
            "Override linters configuration section to only run the specific linter(s)",
          isRepeatable: true,
          args: { name: "linter", generators: lintersGenerator },
        },
        boolFlag(
          "--fast-only",
          "Filter enabled linters to run only fast linters"
        ),
        {
          name: ["-j", "--concurrency"],
          description: "Number of CPUs to use",
          args: { name: "int" },
        },
        {
          name: "--modules-download-mode",
          description:
            "Modules download mode. If not empty, passed as -mod=<mode> to go tools",
          args: {
            name: "mode",
            suggestions: ["mod", "readonly", "vendor"],
          },
        },
        {
          name: "--issues-exit-code",
          description: "Exit code when issues were found",
          args: { name: "int", default: "1" },
        },
        {
          name: "--build-tags",
          description: "Build tags",
          args: { name: "tags" },
        },
        {
          name: "--timeout",
          description: "Timeout for total work. Disabled by default",
          args: { name: "duration" },
        },
        boolFlag("--tests", "Analyze tests (*_test.go)"),
        boolFlag(
          "--allow-parallel-runners",
          "Allow multiple parallel golangci-lint instances running"
        ),
        boolFlag(
          "--allow-serial-runners",
          "Allow multiple golangci-lint instances running, but serialize them around a lock"
        ),
        {
          name: "--path-prefix",
          description: "Path prefix to add to output",
          args: { name: "prefix" },
        },
        {
          name: "--path-mode",
          description: "Path mode to use (empty, or 'abs')",
          args: { name: "mode", suggestions: ["abs"] },
        },
        boolFlag("--show-stats", "Show statistics per linter"),
        {
          name: "--output.text.path",
          description: "Text output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        boolFlag(
          "--output.text.print-linter-name",
          "Print linter name in the end of issue text"
        ),
        boolFlag(
          "--output.text.print-issued-lines",
          "Print lines of code with issue"
        ),
        boolFlag("--output.text.colors", "Use colors"),
        {
          name: "--output.json.path",
          description: "JSON output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        {
          name: "--output.tab.path",
          description: "Tab output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        boolFlag(
          "--output.tab.print-linter-name",
          "Print linter name in the end of issue text"
        ),
        boolFlag("--output.tab.colors", "Use colors"),
        {
          name: "--output.html.path",
          description: "HTML output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        {
          name: "--output.checkstyle.path",
          description: "Checkstyle output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        {
          name: "--output.code-climate.path",
          description: "Code Climate output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        {
          name: "--output.junit-xml.path",
          description: "JUnit XML output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        boolFlag(
          "--output.junit-xml.extended",
          "Support extra JUnit XML fields"
        ),
        {
          name: "--output.teamcity.path",
          description: "TeamCity output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        {
          name: "--output.sarif.path",
          description: "SARIF output path (stdout, stderr, or file)",
          args: outputPathArg,
        },
        {
          name: "--max-issues-per-linter",
          description:
            "Maximum issues count per one linter. Set to 0 to disable",
          args: { name: "int", default: "50" },
        },
        {
          name: "--max-same-issues",
          description:
            "Maximum count of issues with the same text. Set to 0 to disable",
          args: { name: "int", default: "3" },
        },
        boolFlag("--uniq-by-line", "Make issues output unique by line"),
        boolFlag(
          ["-n", "--new"],
          "Show only new issues from unstaged changes or HEAD~"
        ),
        {
          name: "--new-from-rev",
          description: "Show only new issues created after git revision REV",
          args: { name: "REV" },
        },
        {
          name: "--new-from-patch",
          description:
            "Show only new issues created in git patch with file path PATH",
          args: { name: "PATH", template: "filepaths" },
        },
        {
          name: "--new-from-merge-base",
          description:
            "Show only new issues created after the best common ancestor (merge-base against HEAD)",
          args: { name: "rev" },
        },
        boolFlag(
          "--whole-files",
          "Show issues in any part of update files (requires new-from-rev or new-from-patch)"
        ),
        boolFlag(
          "--fix",
          "Apply the fixes detected by the linters and formatters (if supported)"
        ),
        {
          name: "--cpu-profile-path",
          description: "Path to CPU profile output file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--mem-profile-path",
          description: "Path to memory profile output file",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--trace-path",
          description: "Path to trace output file",
          args: { name: "path", template: "filepaths" },
        },
      ],
    },
    {
      name: "fmt",
      description: "Format Go source files",
      args: {
        name: "path",
        description: "Files or directories to format",
        isVariadic: true,
        isOptional: true,
        template: ["folders", "filepaths"],
      },
      options: [
        configOption,
        noConfigOption,
        {
          name: ["-E", "--enable"],
          description: "Enable specific formatter",
          isRepeatable: true,
          args: { name: "formatter", generators: formattersGenerator },
        },
        boolFlag(["-d", "--diff"], "Display diffs instead of rewriting files"),
        boolFlag(
          "--diff-colored",
          "Display diffs instead of rewriting files (with colors)"
        ),
        boolFlag("--stdin", "Use standard input for piping source files"),
      ],
    },
    {
      name: "linters",
      description: "List current linters configuration",
      options: [
        configOption,
        noConfigOption,
        {
          name: "--default",
          description: "Default set of linters to enable",
          args: {
            name: "set",
            default: "standard",
            suggestions: ["standard", "all", "none", "fast"],
          },
        },
        {
          name: ["-D", "--disable"],
          description: "Disable specific linter",
          isRepeatable: true,
          args: { name: "linter", generators: lintersGenerator },
        },
        {
          name: ["-E", "--enable"],
          description: "Enable specific linter",
          isRepeatable: true,
          args: { name: "linter", generators: lintersGenerator },
        },
        {
          name: "--enable-only",
          description:
            "Override linters configuration section to only run the specific linter(s)",
          isRepeatable: true,
          args: { name: "linter", generators: lintersGenerator },
        },
        boolFlag(
          "--fast-only",
          "Filter enabled linters to run only fast linters"
        ),
        boolFlag("--json", "Display as JSON"),
      ],
    },
    {
      name: "formatters",
      description: "List current formatters configuration",
      options: [
        configOption,
        noConfigOption,
        {
          name: ["-E", "--enable"],
          description: "Enable specific formatter",
          isRepeatable: true,
          args: { name: "formatter", generators: formattersGenerator },
        },
        boolFlag("--json", "Display as JSON"),
      ],
    },
    {
      name: "cache",
      description: "Cache control and information",
      subcommands: [
        { name: "clean", description: "Clean cache" },
        { name: "status", description: "Show cache status" },
      ],
    },
    {
      name: "config",
      description: "Configuration file information and verification",
      options: [configOption, noConfigOption],
      subcommands: [
        {
          name: "path",
          description: "Print used configuration path",
          options: [
            configOption,
            noConfigOption,
            boolFlag("--json", "Display as JSON"),
          ],
        },
        {
          name: "verify",
          description: "Verify configuration against JSON schema",
          options: [configOption, noConfigOption],
        },
      ],
    },
    {
      name: "custom",
      description: "Build a version of golangci-lint with custom linters",
      options: [
        {
          name: "--destination",
          description: "The directory path used to store the custom binary",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--name",
          description: "The name of the custom binary",
          args: { name: "name" },
        },
        {
          name: "--version",
          description:
            "The golangci-lint version used to build the custom binary",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate configuration file from v1 to v2",
      options: [
        configOption,
        noConfigOption,
        {
          name: "--format",
          description: "Output file format",
          args: {
            name: "format",
            suggestions: ["yml", "yaml", "toml", "json"],
          },
        },
        boolFlag(
          "--skip-validation",
          "Skip validation of the configuration file against the JSON Schema for v1"
        ),
      ],
    },
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
        },
      ],
    },
    {
      name: "version",
      description: "Display the golangci-lint version",
      options: [
        boolFlag("--debug", "Add build information"),
        boolFlag("--json", "Display as JSON"),
        boolFlag("--short", "Display only the version number"),
      ],
    },
    {
      name: "help",
      description: "Display extra help",
      subcommands: [
        { name: "formatters", description: "Display help for formatters" },
        { name: "linters", description: "Display help for linters" },
      ],
    },
  ],
  options: [
    {
      name: "--color",
      description: "Use color when printing",
      isPersistent: true,
      args: {
        name: "color",
        default: "auto",
        suggestions: ["always", "auto", "never"],
      },
    },
    {
      name: ["-h", "--help"],
      description: "Help for a command",
      isPersistent: true,
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose output",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Print version",
    },
  ],
};

export default completionSpec;
