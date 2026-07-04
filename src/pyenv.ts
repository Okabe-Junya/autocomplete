const versionList: Fig.Generator = {
  script: ["pyenv", "install", "-l"],
  postProcess: function (out) {
    return out
      .trim()
      .split("\n")
      .slice(1)
      .map((name) => ({ name: name.trim(), icon: "🐍" }));
  },
};

const globalList: Fig.Generator = {
  script: ["pyenv", "versions"],
  postProcess: function (out) {
    return out
      .trim()
      .split("\n")
      .map((l) => {
        const sel = l.match(/\s*\*/) != null;
        const name = sel ? l.replace("*", "").trim() : l.trim();
        const icon = sel ? "🌟" : "🐍";
        return { name, icon };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "pyenv",
  description: "Pyenv",
  args: {},
  options: [
    {
      name: ["-h", "--help"],
      description: "Output usage information",
    },
  ],
  subcommands: [
    {
      name: "commands",
      description: "Lists all available pyenv commands",
      options: [
        {
          name: "--sh",
          description: "List only shell commands",
        },
        {
          name: "--no-sh",
          description: "List only non-shell commands",
        },
      ],
    },
    {
      name: "local",
      description: "Sets a local application-specific Python version",
      args: {
        name: "python version",
        isVariadic: true,
        generators: globalList,
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Do not verify that the versions being set exist",
        },
        {
          name: "--unset",
          description: "Remove the local application-specific Python version",
        },
      ],
    },
    {
      name: "global",
      description: "Sets the global version of Python to be used in all shells",
      args: {
        name: "python version",
        isVariadic: true,
        generators: globalList,
      },
    },
    {
      name: "shell",
      description: "Sets a shell-specific Python version",
      args: {
        name: "python version",
        isVariadic: true,
        generators: globalList,
      },
      options: [
        {
          name: "--unset",
          description:
            "Restore the environment to the state before the first `pyenv shell` call",
        },
      ],
    },
    {
      name: "install",
      description: "Install a Python version",
      args: {
        name: "python version",
        generators: versionList,
      },
      options: [
        {
          name: ["-l", "--list"],
          description: "List all available versions",
        },
        {
          name: ["-f", "--force"],
          description:
            "Install even if the version appears to be installed already",
        },
        {
          name: ["-s", "--skip-existing"],
          description:
            "Skip the installation if the version appears to be installed already",
        },
        {
          name: ["-k", "--keep"],
          description:
            "Keep source tree in $PYENV_BUILD_ROOT after installation",
        },
        {
          name: ["-v", "--verbose"],
          description: "Verbose mode: print compilation status to stdout",
        },
        {
          name: ["-p", "--patch"],
          description: "Apply a patch from stdin before building",
        },
        {
          name: ["-g", "--debug"],
          description: "Build a debug version",
        },
        {
          name: "--version",
          description: "Show version of python-build",
        },
      ],
    },
    {
      name: "uninstall",
      description: "Uninstall Python versions",
      args: {
        name: "version",
        isVariadic: true,
        generators: globalList,
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
      name: "rehash",
      description: "Rehash pyenv shims (run this after installing executables)",
    },
    {
      name: "version",
      description:
        "Displays the currently active Python version, along with information on how it was set",
      options: [
        {
          name: "--bare",
          description:
            "Show just the version name. An alias to `pyenv version-name'",
        },
      ],
    },
    {
      name: "versions",
      description:
        "Lists all Python versions known to pyenv, and shows an asterisk next to the currently active version",
      options: [
        {
          name: "--bare",
          description: "Print only the version names, one per line",
        },
        {
          name: "--skip-aliases",
          description: "Skip printing aliases",
        },
        {
          name: "--skip-envs",
          description: "Skip virtual environments (under <version>/envs)",
        },
      ],
    },
    {
      name: "which",
      description:
        "Displays the full path to the executable that pyenv will invoke when you run the given command",
      args: {
        name: "command",
      },
      options: [
        {
          name: "--nosystem",
          description: "Do not search for the command in the system PATH",
        },
      ],
    },
    {
      name: "whence",
      description: "Lists all Python versions with the given command installed",
      args: {
        name: "command",
      },
      options: [
        {
          name: "--path",
          description: "List full paths of the executable, not just versions",
        },
      ],
    },
    {
      name: "completions",
      description: "Lists completions for a given pyenv command",
      priority: 30,
      args: {
        name: "command",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "exec",
      description: "Runs an executable with the selected Python version",
      args: {
        name: "command",
        isCommand: true,
      },
    },
    {
      name: "help",
      description: "Display help for a command",
      args: {
        name: "command",
        isOptional: true,
      },
      options: [
        {
          name: "--usage",
          description: "Show only the usage instructions for the command",
        },
      ],
    },
    {
      name: "hooks",
      description: "List hook scripts for a given pyenv command",
      args: {
        name: "command",
      },
    },
    {
      name: "init",
      description: "Configure the shell environment for pyenv",
      args: {
        name: "shell",
        isOptional: true,
      },
      options: [
        {
          name: "-",
          description: "Output the shell initialization script to be eval'd",
        },
        {
          name: "--path",
          description: "Output only the PATH modifications",
        },
        {
          name: "--no-push-path",
          description: "Don't prepend the shims directory to PATH",
        },
        {
          name: "--no-rehash",
          description: "Don't run `pyenv rehash' as part of initialization",
        },
        {
          name: "--install",
          description: "Automatically install shell completions",
        },
        {
          name: "--detect-shell",
          description: "Detect the current shell for initialization",
        },
      ],
    },
    {
      name: "latest",
      description:
        "Print the latest installed or known version with the given prefix",
      args: {
        name: "prefix",
      },
      options: [
        {
          name: ["-k", "--known"],
          description: "Select from all known versions instead of installed",
        },
      ],
    },
    {
      name: "prefix",
      description: "Display prefixes for Python versions",
      args: {
        name: "version",
        isVariadic: true,
        isOptional: true,
        generators: globalList,
      },
    },
    {
      name: "root",
      description:
        "Display the root directory where versions and shims are kept",
    },
    {
      name: "shims",
      description: "List existing pyenv shims",
      options: [
        {
          name: "--short",
          description: "List only the shim names, without the full path",
        },
      ],
    },
    {
      name: "version-file",
      description: "Detect the file that sets the current pyenv version",
      args: {
        name: "dir",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "version-file-read",
      description: "Read a version from a pyenv version file",
      priority: 30,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "version-file-write",
      description: "Write versions to a pyenv version file",
      priority: 30,
      args: {
        name: "file",
        template: "filepaths",
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Don't verify that the versions exist",
        },
      ],
    },
    {
      name: "version-name",
      description: "Show the current Python version",
    },
    {
      name: "version-origin",
      description: "Explain how the current Python version is set",
    },
  ],
};

export default completionSpec;
