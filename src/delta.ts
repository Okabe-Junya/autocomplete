const completionSpec: Fig.Spec = {
  name: "delta",
  description: "A syntax-highlighting pager for git, diff, and grep output",
  options: [
    {
      name: ["-n", "--line-numbers"],
      description: "Display line numbers next to the diff",
    },
    {
      name: ["-s", "--side-by-side"],
      description:
        "Display a side-by-side diff view instead of the traditional view",
    },
    {
      name: ["-w", "--width"],
      description: "The width of underline/overline decorations",
      args: {
        name: "N",
        description: "Terminal width (a number, 'variable', or e.g. '-2')",
      },
    },
    {
      name: "--color-only",
      description: "Only apply color, keeping all other characters unchanged",
    },
    {
      name: "--config",
      description: "Load the config file at PATH instead of ~/.gitconfig",
      args: {
        name: "PATH",
        template: "filepaths",
      },
    },
    {
      name: "--dark",
      description:
        "Use default colors appropriate for a dark terminal background",
    },
    {
      name: "--light",
      description:
        "Use default colors appropriate for a light terminal background",
    },
    {
      name: "--default-language",
      description: "Default language used for syntax highlighting",
      args: {
        name: "LANG",
      },
    },
    {
      name: "--diff-highlight",
      description: "Emulate diff-highlight",
    },
    {
      name: "--diff-so-fancy",
      description: "Emulate diff-so-fancy",
    },
    {
      name: "--features",
      description: "Space-separated list of named feature groups to activate",
      args: {
        name: "FEATURES",
      },
    },
    {
      name: "--file-style",
      description: "Style string for the file section of a diff",
      args: {
        name: "STYLE",
      },
    },
    {
      name: "--hunk-header-style",
      description: "Style string for the hunk-header",
      args: {
        name: "STYLE",
      },
    },
    {
      name: "--hyperlinks",
      description:
        "Render commit hashes, file names, and line numbers as hyperlinks",
    },
    {
      name: "--inspect-raw-lines",
      description:
        "Whether to examine ANSI color escape sequences in raw lines",
      args: {
        name: "true|false",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--keep-plus-minus-markers",
      description: "Prefix added/removed lines with a +/- character",
    },
    {
      name: "--line-buffer-size",
      description: "Size of internal line buffer",
      args: {
        name: "N",
      },
    },
    {
      name: "--list-languages",
      description: "List supported languages and associated file extensions",
    },
    {
      name: "--list-syntax-themes",
      description: "List available syntax-highlighting color themes",
    },
    {
      name: "--max-line-length",
      description: "Truncate lines longer than this length",
      args: {
        name: "N",
      },
    },
    {
      name: "--minus-style",
      description: "Style string for removed lines",
      args: {
        name: "STYLE",
      },
    },
    {
      name: "--navigate",
      description: "Activate diff navigation with n/N keys",
    },
    {
      name: "--navigate-regex",
      description: "Regular expression defining navigation stop points",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--no-gitconfig",
      description: "Do not read any settings from git config",
    },
    {
      name: "--pager",
      description: "Which pager to use",
      args: {
        name: "CMD",
        description: "Pager command",
      },
    },
    {
      name: "--paging",
      description: "Whether to use a pager when displaying output",
      args: {
        name: "auto|always|never",
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: "--parse-ansi",
      description: "Display ANSI color escape sequences in human-readable form",
    },
    {
      name: "--plus-style",
      description: "Style string for added lines",
      args: {
        name: "STYLE",
      },
    },
    {
      name: "--raw",
      description: "Do not alter the input in any way",
    },
    {
      name: "--relative-paths",
      description: "Output all file paths relative to the current directory",
    },
    {
      name: "--show-colors",
      description: "Show available named colors",
    },
    {
      name: "--show-config",
      description: "Display the active values for all delta options",
    },
    {
      name: "--show-syntax-themes",
      description: "Show example diff for available syntax-highlighting themes",
    },
    {
      name: "--show-themes",
      description: "Show example diff for available delta themes",
    },
    {
      name: "--syntax-theme",
      description: "The syntax-highlighting theme to use",
      args: {
        name: "SYNTAX_THEME",
      },
    },
    {
      name: "--tabs",
      description: "The number of spaces to replace tab characters with",
      args: {
        name: "N",
      },
    },
    {
      name: "--true-color",
      description: "Whether to emit 24-bit ('true color') RGB color codes",
      args: {
        name: "auto|always|never",
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: "--24-bit-color",
      description: "Deprecated alias for --true-color",
      args: {
        name: "auto|always|never",
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: "--word-diff-regex",
      description:
        "Regular expression defining a 'word' in within-line diff algorithm",
      args: {
        name: "REGEX",
      },
    },
    {
      name: "--wrap-max-lines",
      description: "How often a line should be wrapped if it does not fit",
      args: {
        name: "N",
      },
    },
    {
      name: "--zero-style",
      description: "Style string for unchanged lines",
      args: {
        name: "STYLE",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Print help information",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information",
    },
  ],
  args: [
    {
      name: "MINUS_FILE",
      description: "First file to be compared",
      template: "filepaths",
      isOptional: true,
    },
    {
      name: "PLUS_FILE",
      description: "Second file to be compared",
      template: "filepaths",
      isOptional: true,
    },
  ],
};

export default completionSpec;
