const inputFormats = [
  "auto",
  "yaml",
  "json",
  "kyaml",
  "props",
  "csv",
  "tsv",
  "xml",
  "base64",
  "uri",
  "toml",
  "hcl",
  "lua",
  "ini",
];

const outputFormats = [...inputFormats, "shell"];

const globalOptions: Fig.Option[] = [
  {
    name: ["-C", "--colors"],
    description: "Force print with colors",
  },
  {
    name: "--csv-auto-parse",
    description: "Parse CSV YAML/JSON values",
  },
  {
    name: "--csv-separator",
    description: "CSV separator character",
    args: { name: "char" },
  },
  {
    name: "--debug-node-info",
    description: "Debug node info",
  },
  {
    name: ["-e", "--exit-status"],
    description:
      "Set exit status if there are no matches or null or false is returned",
  },
  {
    name: "--expression",
    description:
      "Forcibly set the expression argument. Useful when yq argument detection thinks your expression is a file",
    args: { name: "expression" },
  },
  {
    name: "--from-file",
    description: "Load expression from specified file",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: ["-f", "--front-matter"],
    description: "(extract|process) first input as yaml front-matter",
    args: { name: "mode", suggestions: ["extract", "process"] },
  },
  {
    name: "--header-preprocess",
    description:
      "Slurp any header comments and separators before processing expression",
  },
  {
    name: ["-I", "--indent"],
    description: "Sets indent level for output",
    args: { name: "int" },
  },
  {
    name: "--ini-preserve-quotes",
    description: "Preserve surrounding quotes on INI values during round-trip",
  },
  {
    name: ["-i", "--inplace"],
    description: "Update the file in place of first file given",
  },
  {
    name: ["-p", "--input-format"],
    description: "Parse format for input",
    args: { name: "format", suggestions: inputFormats },
  },
  {
    name: "--lua-globals",
    description: "Output keys as top-level global variables",
  },
  {
    name: "--lua-prefix",
    description: "Prefix",
    args: { name: "string" },
  },
  {
    name: "--lua-suffix",
    description: "Suffix",
    args: { name: "string" },
  },
  {
    name: "--lua-unquoted",
    description: "Output unquoted string keys (e.g. {foo=bar})",
  },
  {
    name: ["-M", "--no-colors"],
    description: "Force print with no colors",
  },
  {
    name: ["-N", "--no-doc"],
    description: "Don't print document separators (---)",
  },
  {
    name: ["-0", "--nul-output"],
    description: "Use NUL char to separate values",
  },
  {
    name: ["-n", "--null-input"],
    description:
      "Don't read input, simply evaluate the expression given. Useful for creating docs from scratch",
  },
  {
    name: ["-o", "--output-format"],
    description: "Output format type",
    args: { name: "format", suggestions: outputFormats },
  },
  {
    name: ["-P", "--prettyPrint"],
    description: "Pretty print, shorthand for '... style = \"\"'",
  },
  {
    name: "--properties-array-brackets",
    description: "Use [x] in array paths (e.g. for SpringBoot)",
  },
  {
    name: "--properties-separator",
    description: "Separator to use between keys and values",
    args: { name: "string" },
  },
  {
    name: "--security-disable-env-ops",
    description: "Disable env related operations",
  },
  {
    name: "--security-disable-file-ops",
    description: "Disable file related operations (e.g. load)",
  },
  {
    name: "--security-enable-system-operator",
    description:
      "Enable system operator to allow execution of external commands",
  },
  {
    name: "--shell-key-separator",
    description: "Separator for shell variable key paths",
    args: { name: "string" },
  },
  {
    name: ["-s", "--split-exp"],
    description: "Print each result (or doc) into a file named (exp)",
    args: { name: "exp" },
  },
  {
    name: "--split-exp-file",
    description: "Use a file to specify the split-exp expression",
    args: { name: "file", template: "filepaths" },
  },
  {
    name: "--string-interpolation",
    description: "Toggles strings interpolation of \\(exp)",
  },
  {
    name: "--tsv-auto-parse",
    description: "Parse TSV YAML/JSON values",
  },
  {
    name: ["-r", "--unwrapScalar"],
    description:
      "Unwrap scalar, print the value with no quotes, colours or comments",
  },
  {
    name: ["-v", "--verbose"],
    description: "Verbose mode",
  },
];

const completionSpec: Fig.Spec = {
  name: "yq",
  description: "Portable command-line YAML, JSON and XML processor",
  subcommands: [
    {
      name: ["eval", "e"],
      description:
        "(default) Apply the expression to each document in each yaml file in sequence",
      options: globalOptions,
      args: [
        { name: "expression" },
        {
          name: "files",
          template: "filepaths",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: ["eval-all", "ea"],
      description:
        "Loads all yaml documents of all yaml files and runs expression once",
      options: globalOptions,
      args: [
        { name: "expression" },
        {
          name: "files",
          template: "filepaths",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: ["completion", "shell-completion"],
      description: "Generate the autocompletion script for the specified shell",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    ...globalOptions,
    {
      name: ["-h", "--help"],
      description: "Help for yq",
    },
    {
      name: ["-V", "--version"],
      description: "Print version information and quit",
    },
  ],
  args: [
    { name: "expression" },
    {
      name: "files",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  ],
};

export default completionSpec;
