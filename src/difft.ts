const completionSpec: Fig.Spec = {
  name: "difft",
  description: "A structural diff that understands syntax (difftastic)",
  options: [
    {
      name: "--context",
      description:
        "The number of contextual lines to show around changed lines",
      args: {
        name: "LINES",
        default: "3",
      },
    },
    {
      name: "--width",
      description: "Number of columns to use when calculating line wrapping",
      args: {
        name: "COLUMNS",
      },
    },
    {
      name: "--tab-width",
      description: "Treat a tab as this many spaces",
      args: {
        name: "NUM_SPACES",
        default: "4",
      },
    },
    {
      name: "--display",
      description: "Display mode for showing results",
      args: {
        name: "MODE",
        default: "side-by-side",
        suggestions: [
          {
            name: "side-by-side",
            description: "Show before and after in two columns",
          },
          {
            name: "side-by-side-show-both",
            description: "Always use two columns",
          },
          {
            name: "inline",
            description: "Single column display, closer to traditional diff",
          },
          {
            name: "json",
            description: "Machine-readable JSON array output",
          },
        ],
      },
    },
    {
      name: "--color",
      description: "When to use color output",
      args: {
        name: "WHEN",
        default: "auto",
        suggestions: ["always", "auto", "never"],
      },
    },
    {
      name: "--background",
      description: "Set the background brightness",
      args: {
        name: "BACKGROUND",
        default: "dark",
        suggestions: ["dark", "light"],
      },
    },
    {
      name: "--syntax-highlight",
      description: "Enable or disable syntax highlighting",
      args: {
        name: "on/off",
        default: "on",
        suggestions: ["on", "off"],
      },
    },
    {
      name: "--exit-code",
      description: "Set the exit code to 1 if there are syntactic changes",
    },
    {
      name: "--strip-cr",
      description: "Remove carriage return characters before diffing",
      args: {
        name: "on/off",
        default: "on",
        suggestions: ["on", "off"],
      },
    },
    {
      name: "--check-only",
      description:
        "Report whether there are any changes without calculating them",
    },
    {
      name: "--ignore-comments",
      description: "Do not consider comments when diffing",
    },
    {
      name: "--skip-unchanged",
      description: "Do not display anything if a file is unchanged",
    },
    {
      name: "--override",
      description:
        "Associate a glob pattern with a language, overriding detection",
      isRepeatable: true,
      args: {
        name: "GLOB:NAME",
      },
    },
    {
      name: "--override-binary",
      description: "Always treat file names matching this glob as binary files",
      isRepeatable: true,
      args: {
        name: "GLOB",
      },
    },
    {
      name: "--list-languages",
      description: "Print all languages supported by difftastic",
    },
    {
      name: "--byte-limit",
      description:
        "Use a line-oriented diff if either input file exceeds this size",
      args: {
        name: "LIMIT",
        default: "1000000",
      },
    },
    {
      name: "--graph-limit",
      description:
        "Use a line-oriented diff if the internal graph exceeds this many vertices",
      args: {
        name: "LIMIT",
        default: "3000000",
      },
    },
    {
      name: "--parse-error-limit",
      description: "Use a line-oriented diff if parse errors exceed this value",
      args: {
        name: "LIMIT",
        default: "0",
      },
    },
    {
      name: "--sort-paths",
      description: "When diffing a directory, output results sorted by path",
    },
    {
      name: "--dump-syntax",
      description: "Parse a single file and display the difftastic syntax tree",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--dump-syntax-dot",
      description:
        "Parse a single file and display the syntax tree as a DOT graph",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--dump-ts",
      description: "Parse a single file and display the tree-sitter parse tree",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
  args: [
    {
      name: "OLD-PATH",
      description: "Old file or directory to compare",
      template: "filepaths",
      isOptional: true,
    },
    {
      name: "NEW-PATH",
      description: "New file or directory to compare",
      template: "filepaths",
      isOptional: true,
    },
  ],
};

export default completionSpec;
