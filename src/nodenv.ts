const installVersionsGenerator: Fig.Generator = {
  script: ["nodenv", "install", "--list-all"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name: name.trim(), icon: "⬢" }));
  },
};

const installedVersionsGenerator: Fig.Generator = {
  script: ["nodenv", "versions", "--bare"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name: name.trim(), icon: "⬢" }));
  },
};

const commandsGenerator: Fig.Generator = {
  script: ["nodenv", "commands"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name: name.trim() }));
  },
};

const versionArg = (generator?: Fig.Generator, required = false): Fig.Arg => ({
  name: "version",
  isOptional: !required,
  generators: generator,
});

const completionSpec: Fig.Spec = {
  name: "nodenv",
  description: "Manage multiple Node.js versions",
  subcommands: [
    {
      name: "commands",
      description: "List all available nodenv commands",
      options: [
        {
          name: "--sh",
          description: "Show only shell commands",
        },
        {
          name: "--no-sh",
          description: "Show only non-shell commands",
        },
      ],
    },
    {
      name: "completions",
      description: "List completions for a command",
      args: {
        name: "command",
        generators: commandsGenerator,
      },
    },
    {
      name: "exec",
      description: "Run an executable with the selected Node version",
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: "global",
      description: "Set or show the global Node version",
      args: versionArg(installedVersionsGenerator),
    },
    {
      name: "help",
      description: "Show help for a command",
      args: {
        name: "command",
        generators: commandsGenerator,
      },
    },
    {
      name: "hooks",
      description: "List hook scripts for a given nodenv command",
      args: {
        name: "command",
        generators: commandsGenerator,
      },
    },
    {
      name: "init",
      description: "Configure the shell environment for nodenv",
      options: [
        {
          name: "-",
          description: "Print the shell integration script",
        },
        {
          name: "--no-rehash",
          description: "Add shims without running rehash",
        },
      ],
    },
    {
      name: "install",
      description: "Install a Node version using node-build",
      args: versionArg(installVersionsGenerator),
      options: [
        {
          name: ["-l", "--list"],
          description: "List latest stable versions for each Node",
        },
        {
          name: ["-L", "--list-all"],
          description: "List all local versions",
        },
        {
          name: ["-f", "--force"],
          description:
            "Install even if the version appears to be installed already",
        },
        {
          name: ["-s", "--skip-existing"],
          description: "Skip if the version appears to be installed already",
        },
        {
          name: ["-c", "--compile"],
          description: "Force compilation even if a matching binary exists",
        },
        {
          name: ["-k", "--keep"],
          description:
            "Keep source tree in $NODENV_BUILD_ROOT after installation",
        },
        {
          name: ["-p", "--patch"],
          description: "Apply a patch from stdin before building",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode: print compilation status to stdout",
        },
        {
          name: "--version",
          description: "Show version of node-build",
        },
      ],
    },
    {
      name: "local",
      description: "Set or show the local application-specific Node version",
      args: versionArg(installedVersionsGenerator),
      options: [
        {
          name: "--unset",
          description: "Unset the local version",
        },
      ],
    },
    {
      name: "prefix",
      description: "Display the directory where a Node version is installed",
      args: versionArg(installedVersionsGenerator),
    },
    {
      name: "rehash",
      description: "Regenerate nodenv shims",
    },
    {
      name: "root",
      description: "Display the root directory where versions and shims live",
    },
    {
      name: "shell",
      description: "Set or show the shell-specific Node version",
      args: versionArg(installedVersionsGenerator),
      options: [
        {
          name: "--unset",
          description: "Unset the shell version",
        },
      ],
    },
    {
      name: "shims",
      description: "List existing nodenv shims",
      options: [
        {
          name: "--short",
          description: "Show only the shim names",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall a specific Node version",
      args: {
        ...versionArg(installedVersionsGenerator, true),
        isVariadic: true,
      },
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Attempt to remove the specified version without prompting for confirmation",
        },
      ],
    },
    {
      name: "version",
      description: "Show the current Node version and its origin",
    },
    {
      name: "version-file",
      description: "Detect the file that sets the current nodenv version",
    },
    {
      name: "version-name",
      description: "Show the current Node version",
    },
    {
      name: "version-origin",
      description: "Explain how the current Node version is set",
    },
    {
      name: "versions",
      description: "List installed Node versions",
      options: [
        {
          name: "--bare",
          description: "Print only the version names, one per line",
        },
        {
          name: "--skip-aliases",
          description: "Skip printing aliases",
        },
      ],
    },
    {
      name: "whence",
      description: "List all Node versions that contain the given executable",
      args: {
        name: "command",
      },
    },
    {
      name: "which",
      description: "Display the full path to an executable",
      args: {
        name: "command",
      },
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Display the version of nodenv",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
  ],
};

export default completionSpec;
