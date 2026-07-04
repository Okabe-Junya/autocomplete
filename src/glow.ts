import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "glow",
  description: "Render markdown on the CLI, with pizzazz!",
  args: {
    name: "source|dir",
    isOptional: true,
    isVariadic: true,
    generators: filepaths({
      extensions: ["md"],
      editFileSuggestions: { priority: 52 },
      editFolderSuggestions: { priority: 51 },
    }),
  },
  options: [
    {
      name: ["-a", "--all"],
      description: "Show system files and directories (TUI-mode only)",
    },
    {
      name: "--config",
      args: { name: "path", template: "filepaths" },
      description: "Config file",
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Help for glow",
      isPersistent: true,
    },
    {
      name: ["-l", "--line-numbers"],
      description: "Show line numbers (TUI-mode only)",
    },
    {
      name: ["-p", "--pager"],
      description: "Display with pager",
    },
    {
      name: ["-n", "--preserve-new-lines"],
      description: "Preserve newlines in the output",
    },
    {
      name: ["-s", "--style"],
      description: "Style name or JSON path (default 'auto')",
      args: {
        name: "name",
        suggestions: ["auto", "light", "dark", "notty"],
        template: "filepaths",
      },
    },
    {
      name: ["-t", "--tui"],
      description: "Display with tui",
    },
    {
      name: ["-v", "--version"],
      description: "Version for glow",
    },
    {
      name: ["-w", "--width"],
      args: { name: "column" },
      description: "Word-wrap at width (set to 0 to disable)",
    },
  ],
  subcommands: [
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
      name: "config",
      description: "Edit the glow config file",
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        template: "help",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
