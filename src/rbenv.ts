const installVersionsGenerator: Fig.Generator = {
  script: ["rbenv", "install", "-L"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name }));
  },
};

const installedVersionsGenerator: Fig.Generator = {
  script: ["rbenv", "versions", "--bare"],
  postProcess: function (out) {
    return out.split("\n").map((name) => ({ name }));
  },
};

const versionArg = (generator?: Fig.Generator, required = false): Fig.Arg => ({
  name: "version",
  isOptional: !required,
  generators: generator,
});

const versionOptions: Fig.Option[] = [
  {
    name: "--unset",
  },
];

const completionSpec: Fig.Spec = {
  name: "rbenv",
  description:
    "Pick a Ruby version for your application and guarantee that your development environment matches production",
  subcommands: [
    {
      name: "commands",
      description: "List all available rbenv commands",
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
      name: "global",
      description: "Set or show the global Ruby version",
      args: versionArg(installedVersionsGenerator),
      options: versionOptions,
    },
    {
      name: "install",
      description: "Install a Ruby version using ruby-build",
      args: versionArg(installVersionsGenerator, true),
      options: [
        {
          name: ["-l", "--list"],
          description: "List latest stable versions for each Ruby",
        },
        {
          name: ["-L", "--list-all"],
          description: "List all local versions, including outdated ones",
        },
        {
          name: ["-f", "--force"],
          description: "Allow overwriting an existing installed version",
        },
        {
          name: ["-s", "--skip-existing"],
          description: "Avoid overwriting an existing installed version",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Verbose mode: forward all build output to stdout/stderr",
        },
        {
          name: ["-p", "--patch"],
          description: "Apply a patch from stdin before building",
        },
        {
          name: ["-k", "--keep"],
          description:
            "Keep source tree in RBENV_BUILD_ROOT after installation",
        },
        {
          name: "--version",
          description: "Show version of ruby-build",
          args: versionArg(),
        },
      ],
    },
    {
      name: "local",
      description: "Set or show the local application-specific Ruby version",
      args: versionArg(installedVersionsGenerator),
      options: versionOptions,
    },
    {
      name: "rehash",
      description: "Rehash rbenv shims (run this after installing executables)",
    },
    {
      name: "shell",
      description: "Set or show the shell-specific Ruby version",
      args: versionArg(installedVersionsGenerator),
      options: versionOptions,
    },
    {
      name: "uninstall",
      description: "Uninstall a specific Ruby version",
      args: versionArg(installedVersionsGenerator, true),
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Attempt to remove the specified version without prompting for confirmation. If the version does not exist, do not display an error message",
        },
      ],
    },
    {
      name: "versions",
      description: "List installed Ruby versions",
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
      description: "List all Ruby versions that contain the given executable",
      args: { name: "command" },
      options: [
        {
          name: "--path",
          description: "List full paths of the executable, not just versions",
        },
      ],
    },
    {
      name: "which",
      description: "Display the full path to an executable",
      args: { name: "command" },
    },
    {
      name: "completions",
      description: "Lists completions for a given rbenv command",
      priority: 30,
      args: {
        name: "command",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "exec",
      description: "Runs an executable with the selected Ruby version",
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
      description: "List hook scripts for a given rbenv command",
      args: {
        name: "command",
      },
    },
    {
      name: "init",
      description: "Configure the shell environment for rbenv",
      args: {
        name: "shells",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "-",
          description: "Output the shell initialization script to be eval'd",
        },
        {
          name: "--no-rehash",
          description: "Don't run `rbenv rehash' as part of initialization",
        },
      ],
    },
    {
      name: "prefix",
      description: "Display prefixes for Ruby versions",
      args: versionArg(installedVersionsGenerator),
    },
    {
      name: "root",
      description:
        "Display the root directory where versions and shims are kept",
    },
    {
      name: "shims",
      description: "List existing rbenv shims",
      options: [
        {
          name: "--short",
          description: "List only the shim names, without the full path",
        },
      ],
    },
    {
      name: "version",
      description:
        "Show the currently selected Ruby version and how it was selected",
    },
    {
      name: "version-file",
      description: "Detect the file that sets the current rbenv version",
      args: {
        name: "dir",
        template: "folders",
        isOptional: true,
      },
    },
    {
      name: "version-file-read",
      description: "Read a version from an rbenv version file",
      priority: 30,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "version-file-write",
      description: "Write a version to an rbenv version file",
      priority: 30,
      args: [
        {
          name: "file",
          template: "filepaths",
        },
        {
          name: "version",
        },
      ],
    },
    {
      name: "version-name",
      description: "Show the current Ruby version",
    },
    {
      name: "version-origin",
      description: "Explain how the current Ruby version is set",
    },
  ],
};

export default completionSpec;
