import {
  generateDocs,
  generateInstalledDenoScripts,
  generateLintRules,
  generateTasks,
  generateVersions,
  generateUrlScript,
} from "./deno/generators";

// Deno 2 permission flags (shared by runtime subcommands like serve/watch)
const permissionOptions: Fig.Option[] = [
  {
    name: ["-A", "--allow-all"],
    description: "Allow all permissions",
  },
  {
    name: ["-R", "--allow-read"],
    description: "Allow file system read access",
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
    requiresSeparator: true,
  },
  {
    name: ["-W", "--allow-write"],
    description: "Allow file system write access",
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
    requiresSeparator: true,
  },
  {
    name: ["-N", "--allow-net"],
    description: "Allow network access",
    args: {
      name: "ip_or_hostname",
      isVariadic: true,
      isOptional: true,
    },
    requiresSeparator: true,
  },
  {
    name: ["-E", "--allow-env"],
    description: "Allow access to environment variables",
    args: {
      name: "variable_name",
      isVariadic: true,
      isOptional: true,
    },
    requiresSeparator: true,
  },
  {
    name: ["-S", "--allow-sys"],
    description: "Allow access to OS information",
    args: {
      name: "api_name",
      isVariadic: true,
      isOptional: true,
    },
    requiresSeparator: true,
  },
  {
    name: "--allow-run",
    description: "Allow running subprocesses",
    args: {
      name: "program_name",
      isVariadic: true,
      isOptional: true,
    },
    requiresSeparator: true,
  },
  {
    name: "--allow-ffi",
    description: "Allow loading dynamic libraries",
    args: {
      name: "path",
      isVariadic: true,
      isOptional: true,
      template: "filepaths",
    },
    requiresSeparator: true,
  },
  {
    name: ["-I", "--allow-import"],
    description: "Allow importing from remote hosts",
    args: {
      name: "ip_or_hostname",
      isVariadic: true,
      isOptional: true,
    },
    requiresSeparator: true,
  },
  {
    name: "--allow-scripts",
    description: "Allow running npm lifecycle scripts for the given packages",
    args: {
      name: "package",
      isVariadic: true,
      isOptional: true,
    },
    requiresSeparator: true,
  },
  {
    name: "--no-prompt",
    description: "Always throw if required permission wasn't passed",
  },
];

// Deno 2 lockfile flags (shared by dependency-management subcommands)
const lockOptions: Fig.Option[] = [
  {
    name: "--frozen",
    description: "Error out if lockfile is out of date",
    args: {
      name: "boolean",
      isOptional: true,
      suggestions: ["true", "false"],
    },
    requiresSeparator: true,
  },
  {
    name: "--lock",
    description: "Check the specified lock file",
    args: {
      name: "file",
      isOptional: true,
      template: "filepaths",
    },
  },
  {
    name: "--no-lock",
    description: "Disable auto discovery of the lock file",
  },
];

// Deno 2 type-checking flags
const checkOptions: Fig.Option[] = [
  {
    name: "--check",
    description: "Set type-checking behavior (pass --check=all for remote too)",
    exclusiveOn: ["--no-check"],
    args: {
      name: "check-type",
      isOptional: true,
      suggestions: ["all"],
    },
    requiresSeparator: true,
  },
  {
    name: "--no-check",
    description: "Skip type-checking modules",
    args: {
      name: "no-check-type",
      isOptional: true,
      suggestions: ["remote"],
    },
    requiresSeparator: true,
  },
];

const completion: Fig.Spec = {
  name: "deno",
  description: "A modern JavaScript and TypeScript runtime",
  subcommands: [
    {
      name: "serve",
      description: "Run a server",
      options: [
        {
          name: "--host",
          description: "The TCP address to serve on, defaulting to 0.0.0.0",
          args: { name: "host", isOptional: true },
        },
        {
          name: "--port",
          description:
            "The TCP port to serve on. Pass 0 to pick a random free port",
          args: { name: "port", isOptional: true },
        },
        {
          name: "--open",
          description:
            "Open the browser on the address that the server runs on",
        },
        {
          name: "--parallel",
          description: "Run multiple server workers in parallel",
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: { name: "config", isOptional: true, template: "filepaths" },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--import-map",
          description: "Load import map file",
          args: { name: "import-map", isOptional: true, template: "filepaths" },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: "--node-modules-dir",
          description:
            "Select the node_modules directory mode for npm packages",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["auto", "manual", "none"],
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: { name: "seed", isOptional: true },
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: { name: "location", isOptional: true },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: { name: "v8-flags", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--no-npm",
          description: "Do not resolve npm modules",
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: { name: "inspect", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: { name: "inspect-brk", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--inspect-wait",
          description:
            "Activate inspector and wait for debugger before running user code",
          args: { name: "inspect-wait", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--watch",
          description:
            "Watch for file changes and restart process automatically",
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--watch-hmr",
          description: "Watch for file changes and hot-replace modules",
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--watch-exclude",
          description: "Exclude provided files/patterns from watch mode",
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        ...checkOptions,
        ...lockOptions,
        ...permissionOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "watch",
      description:
        "Run a program, watching for changes and hot-replacing modules",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: { name: "config", isOptional: true, template: "filepaths" },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--import-map",
          description: "Load import map file",
          args: { name: "import-map", isOptional: true, template: "filepaths" },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: "--node-modules-dir",
          description:
            "Select the node_modules directory mode for npm packages",
          args: {
            name: "mode",
            isOptional: true,
            suggestions: ["auto", "manual", "none"],
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: { name: "seed", isOptional: true },
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: { name: "location", isOptional: true },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: { name: "v8-flags", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--no-npm",
          description: "Do not resolve npm modules",
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: { name: "inspect", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: { name: "inspect-brk", isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--watch-hmr",
          description: "Watch for file changes and hot-replace modules",
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--watch-exclude",
          description: "Exclude provided files/patterns from watch mode",
          args: {
            name: "files",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        ...checkOptions,
        ...lockOptions,
        ...permissionOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "add",
      description: "Add dependencies",
      options: [
        {
          name: ["-I", "--allow-import"],
          description: "Allow importing from remote hosts",
          args: { name: "ip_or_hostname", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--allow-scripts",
          description: "Allow running npm lifecycle scripts for given packages",
          args: { name: "package", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: ["-D", "--dev"],
          description: "Add the package as a dev dependency",
        },
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: "--jsr",
          description: "Assume unprefixed package names are jsr packages",
        },
        {
          name: "--npm",
          description:
            "Assume unprefixed package names are npm packages (default)",
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        {
          name: "--package-json",
          description:
            "Force using package.json for dependency management instead of deno.json",
        },
        {
          name: "--save-exact",
          description: "Save exact version without the caret (^)",
        },
        ...lockOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "packages",
        isVariadic: true,
        isOptional: true,
        description: "List of packages to add",
      },
    },
    {
      name: "remove",
      description: "Remove dependencies from the configuration file",
      options: [
        {
          name: ["-g", "--global"],
          description: "Remove globally installed package or module",
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        {
          name: "--package-json",
          description:
            "Force using package.json for dependency management instead of deno.json",
        },
        {
          name: "--root",
          description: "Installation root",
          args: { name: "root", isOptional: true, template: "folders" },
        },
        ...lockOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "packages",
        isVariadic: true,
        isOptional: true,
        description: "List of packages to remove",
      },
    },
    {
      name: "outdated",
      description: "Find and update outdated dependencies",
      options: [
        {
          name: "--compatible",
          description:
            "Only consider versions that satisfy semver requirements",
        },
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: ["-i", "--interactive"],
          description: "Interactively select which dependencies to update",
        },
        {
          name: "--latest",
          description: "Consider the latest version, regardless of semver",
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        {
          name: ["-r", "--recursive"],
          description: "Include all workspace members",
        },
        {
          name: ["-u", "--update"],
          description: "Update dependency versions",
        },
        ...lockOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "filters",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "list",
      description: "List the dependencies declared in deno.json / package.json",
      options: [
        {
          name: "--depth",
          description: "Maximum depth of the dependency tree to display",
          args: { name: "depth", isOptional: true },
        },
        {
          name: "--dev",
          description: "Only list development dependencies",
        },
        {
          name: "--prod",
          description: "Only list production dependencies",
        },
        {
          name: ["-r", "--recursive"],
          description: "Include all workspace members",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "filters",
        isVariadic: true,
        isOptional: true,
      },
    },
    {
      name: "why",
      description: "Show why a package is installed",
      options: [
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        ...lockOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "package",
        description: "The package name (and optional version) to explain",
      },
    },
    {
      name: "link",
      description: "Link a local JSR package into the current project",
      options: [
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        ...lockOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "paths",
        isVariadic: true,
        isOptional: true,
        template: "folders",
        description: "Paths to local package directories to link",
      },
    },
    {
      name: "unlink",
      description: "Remove a linked local package from the current project",
      options: [
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        ...lockOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "names_or_paths",
        isVariadic: true,
        isOptional: true,
        description: "Linked package names or paths to remove",
      },
    },
    {
      name: "ci",
      description:
        "Install dependencies in a clean, reproducible way for CI environments",
      options: [
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: "--prod",
          description: "Only install production dependencies",
        },
        {
          name: "--skip-types",
          description: "Exclude @types/* packages from installation",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "approve-scripts",
      description: "Approve npm lifecycle scripts for installed dependencies",
      options: [
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "packages",
        isVariadic: true,
        isOptional: true,
        description: "Packages to approve (npm specifiers)",
      },
    },
    {
      name: "bump-version",
      description: "Update version in the configuration file",
      options: [
        {
          name: "--base",
          description: "Git ref to compare against (conventional-commits mode)",
          args: { name: "ref", isOptional: true },
        },
        {
          name: ["-c", "--config"],
          description: "Explicit path to the manifest file to bump",
          args: { name: "config", isOptional: true, template: "filepaths" },
        },
        {
          name: "--dry-run",
          description: "Print the planned changes without writing any files",
        },
        {
          name: "--import-map",
          description:
            "Path to the import map to rewrite jsr: version constraints",
          args: { name: "path", isOptional: true, template: "filepaths" },
        },
        {
          name: "--no-workspace",
          description:
            "Disable workspace mode and only bump the config in current directory",
        },
        {
          name: "--release-notes",
          description: "Path to the release notes file to prepend",
          args: { name: "path", isOptional: true, template: "filepaths" },
        },
        {
          name: "--start",
          description: "Git ref to start from (conventional-commits mode)",
          args: { name: "ref", isOptional: true },
        },
        {
          name: ["-w", "--workspace"],
          description: "Bump every package in the workspace",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "increment",
        isOptional: true,
        suggestions: [
          "major",
          "minor",
          "patch",
          "premajor",
          "preminor",
          "prepatch",
          "prerelease",
        ],
      },
    },
    {
      name: "publish",
      description:
        "Publish the current directory's package or workspace to JSR",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: { name: "config", isOptional: true, template: "filepaths" },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: "--allow-dirty",
          description:
            "Allow publishing if the repository has uncommitted changes",
        },
        {
          name: "--allow-slow-types",
          description: "Allow publishing with slow types",
        },
        {
          name: "--dry-run",
          description: "Perform all checks and validations without uploading",
        },
        {
          name: "--no-provenance",
          description: "Disable provenance attestation",
        },
        {
          name: "--set-version",
          description: "Set version for a package to be published",
          args: { name: "version", isOptional: true },
        },
        {
          name: "--token",
          description: "The API token to use when publishing",
          args: { name: "token", isOptional: true },
        },
        ...checkOptions,
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "pack",
      description: "Create an npm-compatible tarball from a Deno project",
      options: [
        {
          name: "--allow-dirty",
          description:
            "Allow packing if the repository has uncommitted changes",
        },
        {
          name: "--allow-slow-types",
          description: "Skip fast-check type extraction; omit .d.ts files",
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: { name: "config", isOptional: true, template: "filepaths" },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--dry-run",
          description: "Show what would be packed without creating the tarball",
        },
        {
          name: "--env-file",
          description: "Load environment variables from local file",
          args: { name: "file", isOptional: true, template: "filepaths" },
          requiresSeparator: true,
        },
        {
          name: "--ignore",
          description: "Ignore files matching these patterns",
          args: { name: "ignore", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--no-source-maps",
          description: "Don't include source maps in the output",
        },
        {
          name: ["-o", "--output"],
          description: "Output file path (defaults to <name>-<version>.tgz)",
          args: { name: "output", isOptional: true, template: "filepaths" },
        },
        {
          name: "--set-version",
          description: "Override the version in the tarball",
          args: { name: "version", isOptional: true },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "clean",
      description: "Remove the cache directory ($DENO_DIR)",
      options: [
        {
          name: "--dry-run",
          description:
            "Show what would be removed without performing any actions",
        },
        {
          name: ["-e", "--except"],
          description: "Retain cache data needed by the given files",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "except-paths",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "jupyter",
      description: "Deno kernel for Jupyter notebooks",
      options: [
        {
          name: "--conn",
          description: "Path to JSON file describing connection parameters",
          args: { name: "conn", isOptional: true, template: "filepaths" },
        },
        {
          name: ["-d", "--display"],
          description: "Set a display name for the kernel",
          args: { name: "display", isOptional: true },
        },
        {
          name: "--force",
          description:
            "Force installation of a kernel, overwriting existing spec",
        },
        {
          name: "--install",
          description: "Install a kernelspec",
        },
        {
          name: "--kernel",
          description: "Start the kernel",
        },
        {
          name: ["-n", "--name"],
          description: "Set a name for the kernel",
          args: { name: "name", isOptional: true },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "deploy",
      description: "Manage and publish applications with Deno Deploy",
      options: [
        {
          name: ["-h", "--help"],
          description: "Show this help",
        },
        {
          name: ["-V", "--version"],
          description: "Show the version number for this program",
        },
        {
          name: "--token",
          description: "Auth token to use",
          args: { name: "token", isOptional: true },
        },
        {
          name: "--config",
          description: "Path for the config file",
          args: { name: "config", isOptional: true, template: "filepaths" },
        },
        {
          name: "--ignore",
          description: "Ignore particular source files",
          args: { name: "path", isOptional: true, template: "filepaths" },
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress non-essential output",
        },
        {
          name: ["-j", "--json"],
          description: "Emit JSON on stdout instead of human-readable output",
        },
        {
          name: ["-y", "--non-interactive"],
          description: "Fail fast instead of prompting",
        },
        {
          name: "--org",
          description: "The name of the organization",
          args: { name: "name", isOptional: true },
        },
        {
          name: "--app",
          description: "The name of the application",
          args: { name: "name", isOptional: true },
        },
        {
          name: "--prod",
          description: "Deploy directly to production",
        },
        {
          name: "--allow-node-modules",
          description:
            "Allow node_modules directory to be included when uploading",
        },
        {
          name: "--no-wait",
          description: "Skip waiting for the build to complete",
        },
      ],
      subcommands: [
        {
          name: "create",
          description: "Create a new application",
          args: { name: "root-path", isOptional: true, template: "folders" },
        },
        { name: "env", description: "Modify environment variables" },
        { name: "database", description: "Manage databases" },
        { name: "apps", description: "Manage applications" },
        { name: "orgs", description: "List organizations" },
        { name: "deployments", description: "Manage deployments (revisions)" },
        { name: "logs", description: "Stream logs from an application" },
        {
          name: "setup-aws",
          description: "Setup cloud connections for AWS",
          args: { name: "contexts", isOptional: true },
        },
        {
          name: "setup-gcp",
          description: "Setup cloud connections for GCP",
          args: { name: "contexts", isOptional: true },
        },
        {
          name: "switch",
          description: "Switch between organizations and applications",
        },
        {
          name: "logout",
          description: "Revoke the Deno Deploy token if one is present",
        },
        {
          name: "whoami",
          description: "Verify the current Deno Deploy token",
        },
        { name: "sandbox", description: "Interact with sandboxes" },
      ],
      args: {
        name: "root-path",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "bench",
      description: "Run benchmarks",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--ignore",
          description: "Ignore files",
          args: {
            name: "ignore",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--filter",
          description:
            "Run benchmarks with this string or pattern in the bench name",
          args: {
            name: "filter",
            isOptional: true,
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "files",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "script_arg",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "bundle",
      description: "Bundle module and dependencies into single file",
      hidden: true,
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "source_file",
          template: "filepaths",
        },
        {
          name: "out_file",
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "cache",
      description: "Cache the dependencies",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "check",
      description: "Type-check the dependencies",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--remote",
          description: "Type-check all modules, including remote",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "file",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "compile",
      description: "Compile the script into a self contained executable",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: ["-o", "--output"],
          description: "Output file (defaults to $PWD/<inferred-name>)",
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--target",
          description: "Target OS architecture",
          args: {
            name: "target",
            isOptional: true,
            suggestions: [
              "x86_64-unknown-linux-gnu",
              "aarch64-unknown-linux-gnu",
              "x86_64-pc-windows-msvc",
              "x86_64-apple-darwin",
              "aarch64-apple-darwin",
            ],
          },
        },
        {
          name: ["-I", "--allow-import"],
          description: "Allow importing from remote hosts",
          args: { name: "ip_or_hostname", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--frozen",
          description: "Error out if lockfile is out of date",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "completions",
      description: "Generate shell completions",
      hidden: true,
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "powershell", "zsh", "fig"],
      },
    },
    {
      name: "coverage",
      description: "Print coverage reports",
      options: [
        {
          name: "--ignore",
          description: "Ignore coverage files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--include",
          description: "Include source files in the report",
          isRepeatable: true,
          args: {
            name: "include",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--exclude",
          description: "Exclude source files from the report",
          isRepeatable: true,
          args: {
            name: "exclude",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--output",
          description: "Output file (defaults to stdout) for lcov",
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--lcov",
          description: "Output coverage report in lcov format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "doc",
      description: "Show documentation for a module",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--json",
          description: "Output documentation in JSON format",
        },
        {
          name: "--private",
          description: "Output private documentation",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "source_file",
          isOptional: true,
          generators: [{ template: "filepaths" }, generateUrlScript],
          suggestions: [
            {
              name: "--builtin",
              description: "Get documentation for built-in symbols",
              icon: "fig://icon?type=option",
              type: "option",
            },
          ],
        },
        {
          name: "filter",
          isOptional: true,
          generators: generateDocs,
        },
      ],
    },
    {
      name: "eval",
      description: "Eval script",
      insertValue: "eval '{cursor}'",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--ext",
          description: "Set standard input (stdin) content type",
          args: {
            name: "ext",
            isOptional: true,
            suggestions: ["ts", "tsx", "js", "jsx"],
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-T", "--ts"],
          description: "Treat eval input as TypeScript",
        },
        {
          name: ["-p", "--print"],
          description: "Print result to stdout",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "code_arg",
        isVariadic: true,
      },
    },
    {
      name: "fmt",
      description: "Format source files",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--ext",
          description: "Set standard input (stdin) content type",
          args: {
            name: "ext",
            isOptional: true,
            suggestions: ["ts", "tsx", "js", "jsx", "md", "json", "jsonc"],
          },
        },
        {
          name: "--ignore",
          description: "Ignore formatting particular source files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--options-line-width",
          description: "Define maximum line width. Defaults to 80",
          args: {
            name: "options-line-width",
            isOptional: true,
          },
        },
        {
          name: "--options-indent-width",
          description: "Define indentation width. Defaults to 2",
          args: {
            name: "options-indent-width",
            isOptional: true,
          },
        },
        {
          name: "--options-prose-wrap",
          description: "Define how prose should be wrapped. Defaults to always",
          args: {
            name: "options-prose-wrap",
            isOptional: true,
            suggestions: ["always", "never", "preserve"],
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--check",
          description: "Check if the source files are formatted",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: "--options-use-tabs",
          description:
            "Use tabs instead of spaces for indentation. Defaults to false",
        },
        {
          name: "--options-single-quote",
          description: "Use single quotes. Defaults to false",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
        suggestions: [
          { name: "-", description: "Read from standard input", hidden: true },
        ],
      },
    },
    {
      name: "init",
      description: "Initialize a new project",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "dir",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "info",
      description: "Show info about cache or info related to source file",
      options: [
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--location",
          description:
            "Show files used for origin bound APIs like the Web Storage API when running a script with '--location=<HREF>'",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          hidden: true,
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--json",
          description: "UNSTABLE: Outputs the information in JSON format",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "file",
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "install",
      description:
        "Install dependencies in the local project or globally to a bin directory",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: ["-n", "--name"],
          description: "Executable file name",
          args: {
            name: "name",
            isOptional: true,
          },
        },
        {
          name: "--root",
          description: "Installation root",
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-f", "--force"],
          description: "Forcefully overwrite existing installation",
        },
        {
          name: ["-g", "--global"],
          description:
            "Install a package or script as a globally available executable",
        },
        {
          name: ["-e", "--entrypoint"],
          description: "Install dependents of the specified entrypoint(s)",
        },
        {
          name: ["-D", "--dev"],
          description: "Add the package as a dev dependency",
        },
        {
          name: "--compile",
          description: "Install the script as a compiled executable",
        },
        {
          name: ["-I", "--allow-import"],
          description: "Allow importing from remote hosts",
          args: { name: "ip_or_hostname", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--allow-scripts",
          description: "Allow running npm lifecycle scripts for given packages",
          args: { name: "package", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--jsr",
          description: "Assume unprefixed package names are jsr packages",
        },
        {
          name: "--npm",
          description:
            "Assume unprefixed package names are npm packages (default)",
        },
        {
          name: "--lockfile-only",
          description: "Install only updating the lockfile",
        },
        {
          name: "--package-json",
          description:
            "Force using package.json for dependency management instead of deno.json",
        },
        {
          name: "--save-exact",
          description: "Save exact version without the caret (^)",
        },
        {
          name: "--frozen",
          description: "Error out if lockfile is out of date",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "cmd",
        isVariadic: true,
        isScript: true,
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "uninstall",
      description: "Uninstall a script previously installed with deno install",
      options: [
        {
          name: "--root",
          description: "Installation root",
          args: {
            name: "root",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "name",
        generators: generateInstalledDenoScripts,
      },
    },
    {
      name: "lsp",
      description: "Start the language server",
      hidden: true,
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "lint",
      description: "Lint source files",
      options: [
        {
          name: "--rules-tags",
          description: "Use set of rules with a tag",
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-tags",
            isOptional: true,
            generators: generateLintRules,
          },
          requiresSeparator: true,
        },
        {
          name: "--rules-include",
          description: "Include lint rules",
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-include",
            isOptional: true,
            generators: generateLintRules,
          },
          requiresSeparator: true,
        },
        {
          name: "--rules-exclude",
          description: "Exclude lint rules",
          exclusiveOn: ["--rules"],
          args: {
            name: "rules-exclude",
            isOptional: true,
            generators: generateLintRules,
          },
          requiresSeparator: true,
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--ignore",
          description: "Ignore linting particular source files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--rules",
          description: "List available rules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--json",
          description: "Output lint result in JSON format",
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "files",
        isVariadic: true,
        isOptional: true,
        template: "filepaths",
      },
    },
    {
      name: "repl",
      description: "Read Eval Print Loop",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--eval-file",
          description:
            "Evaluates the provided file(s) as scripts when the REPL starts. Accepts file paths and URLs",
          args: {
            name: "eval-file",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--eval",
          description: "Evaluates the provided code when the REPL starts",
          args: {
            name: "eval",
            isOptional: true,
          },
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "run",
      description: "Run a JavaScript or TypeScript program, or a task",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
          exclusiveOn: ["--inspect", "--inspect-brk"],
          args: {
            name: "watch",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
            generators: {
              template: "filepaths",
              getQueryTerm: ",",
            },
          },
          requiresSeparator: true,
        },
        {
          name: ["-I", "--allow-import"],
          description: "Allow importing from remote hosts",
          args: { name: "ip_or_hostname", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--allow-scripts",
          description: "Allow running npm lifecycle scripts for given packages",
          args: { name: "package", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--frozen",
          description: "Error out if lockfile is out of date",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
          requiresSeparator: true,
        },
        {
          name: "--no-npm",
          description: "Do not resolve npm modules",
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "script_arg",
        isVariadic: true,
        isScript: true,
        suggestions: [
          {
            name: "-",
            description: "Read from standard input",
            hidden: true,
          },
        ],
        generators: [{ template: "filepaths" }, generateUrlScript],
      },
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "task",
      description: "Run a task defined in the configuration file",
      options: [
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cwd",
          description: "Specify the directory to run the task in",
          args: {
            name: "cwd",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "task_name",
          generators: generateTasks,
        },
        {
          name: "task_args",
          isVariadic: true,
          isOptional: true,
        },
      ],
      parserDirectives: {
        optionsMustPrecedeArguments: true,
      },
    },
    {
      name: "test",
      description: "Run tests",
      options: [
        {
          name: "--import-map",
          description: "Load import map file",
          args: {
            name: "import-map",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-c", "--config"],
          description: "Specify the configuration file",
          args: {
            name: "config",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--no-check",
          description: "Skip type-checking modules",
          args: {
            name: "no-check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["remote"],
          },
          requiresSeparator: true,
        },
        {
          name: "--check",
          description: "Type-check modules",
          exclusiveOn: ["--no-check"],
          args: {
            name: "check",
            isVariadic: true,
            isOptional: true,
            suggestions: ["all"],
          },
          requiresSeparator: true,
        },
        {
          name: ["-r", "--reload"],
          description: "Reload source code cache (recompile TypeScript)",
          args: {
            name: "reload",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--lock",
          description: "Check the specified lock file",
          args: {
            name: "lock",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--allow-read",
          description: "Allow file system read access",
          args: {
            name: "allow-read",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-write",
          description: "Allow file system write access",
          args: {
            name: "allow-write",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-net",
          description: "Allow network access",
          args: {
            name: "allow-net",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--unsafely-ignore-certificate-errors",
          description: "DANGER: Disables verification of TLS certificates",
          args: {
            name: "unsafely-ignore-certificate-errors",
            isVariadic: true,
            isOptional: true,
            description: "Scope ignoring certificate errors to these hosts",
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-env",
          description: "Allow environment access",
          args: {
            name: "allow-env",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-run",
          description: "Allow running subprocesses",
          args: {
            name: "allow-run",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--allow-ffi",
          description: "Allow loading dynamic libraries",
          args: {
            name: "allow-ffi",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect",
          description:
            "Activate inspector on host:port (default: 127.0.0.1:9229)",
          args: {
            name: "inspect",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--inspect-brk",
          description:
            "Activate inspector on host:port and break at start of user script",
          args: {
            name: "inspect-brk",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--location",
          description: "Value of 'globalThis.location' used by some web APIs",
          args: {
            name: "location",
            isOptional: true,
          },
        },
        {
          name: "--v8-flags",
          description: "Set V8 command line options",
          args: {
            name: "v8-flags",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--seed",
          description: "Set the random number generator seed",
          args: {
            name: "seed",
            isOptional: true,
          },
        },
        {
          name: "--ignore",
          description: "Ignore files",
          args: {
            name: "ignore",
            isOptional: true,
            template: "filepaths",
          },
          requiresSeparator: true,
        },
        {
          name: "--fail-fast",
          description:
            "Stop after N errors. Defaults to stopping after first failure",
          args: {
            name: "fail-fast",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--filter",
          description: "Run tests with this string or pattern in the test name",
          args: {
            name: "filter",
            isOptional: true,
          },
        },
        {
          name: "--shuffle",
          description:
            "(UNSTABLE): Shuffle the order in which the tests are run",
          args: {
            name: "shuffle",
            isVariadic: true,
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: "--coverage",
          description: "UNSTABLE: Collect coverage profile data into DIR",
          exclusiveOn: ["--inspect", "--inspect-brk"],
          args: {
            name: "coverage",
            isOptional: true,
          },
          requiresSeparator: true,
        },
        {
          name: ["-j", "--jobs"],
          description:
            "Deprecated: Number of parallel workers, defaults to number of available CPUs when no value is provided. Defaults to 1 when the option is not present",
          hidden: true,
          deprecated: { description: "Use --parallel" },
          args: {
            name: "jobs",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--no-remote",
          description: "Do not resolve remote modules",
        },
        {
          name: "--no-config",
          description: "Disable automatic loading of the configuration file",
          exclusiveOn: ["-c", "--config"],
        },
        {
          name: "--lock-write",
          description: "Write lock file (use with --lock)",
        },
        {
          name: "--allow-hrtime",
          description: "Allow high resolution time measurement",
        },
        {
          name: ["-A", "--allow-all"],
          description: "Allow all permissions",
        },
        {
          name: "--prompt",
          description:
            "Deprecated: Fallback to prompt if required permission wasn't passed",
        },
        {
          name: "--no-prompt",
          description: "Always throw if required permission wasn't passed",
        },
        {
          name: "--cached-only",
          description: "Require that remote dependencies are already cached",
        },
        {
          name: "--enable-testing-features-do-not-use",
          description:
            "INTERNAL: Enable internal features used during integration testing",
        },
        {
          name: "--compat",
          description: "UNSTABLE: Node compatibility mode",
        },
        {
          name: "--no-run",
          description: "Cache test modules, but don't run tests",
        },
        {
          name: "--trace-ops",
          description:
            "Enable tracing of async ops. Useful when debugging leaking ops in test, but impacts test execution time",
        },
        {
          name: "--doc",
          description: "UNSTABLE: type-check code blocks",
        },
        {
          name: "--allow-none",
          description: "Don't return error code if no test files are found",
        },
        {
          name: "--parallel",
          description:
            "Run test modules in parallel. Parallelism defaults to the number of available CPUs or the value in the DENO_JOBS environment variable",
          exclusiveOn: ["-j", "--jobs"],
        },
        {
          name: ["-I", "--allow-import"],
          description: "Allow importing from remote hosts",
          args: { name: "ip_or_hostname", isVariadic: true, isOptional: true },
          requiresSeparator: true,
        },
        {
          name: "--frozen",
          description: "Error out if lockfile is out of date",
          args: {
            name: "boolean",
            isOptional: true,
            suggestions: ["true", "false"],
          },
          requiresSeparator: true,
        },
        {
          name: "--watch",
          description: "Watch for file changes and restart automatically",
          exclusiveOn: ["--no-run", "--coverage"],
        },
        {
          name: "--no-clear-screen",
          description: "Do not clear terminal screen when under watch mode",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: [
        {
          name: "files",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "script_arg",
          isVariadic: true,
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "types",
      description: "Print runtime TypeScript declarations",
      hidden: true,
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade deno executable to given version",
      options: [
        {
          name: "--version",
          description: "The version to upgrade to",
          args: {
            name: "version",
            isOptional: true,
            generators: generateVersions,
          },
        },
        {
          name: "--output",
          description: "The path to output the updated version to",
          args: {
            name: "output",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: "--cert",
          description: "Load certificate authority from PEM encoded file",
          args: {
            name: "cert",
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--dry-run",
          description: "Perform all checks without replacing old exe",
        },
        {
          name: ["-f", "--force"],
          description: "Replace current exe even if not out-of-date",
        },
        {
          name: "--canary",
          description: "Upgrade to canary builds",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      options: [
        {
          name: ["-L", "--log-level"],
          description: "Set log level",
          hidden: true,
          args: {
            name: "log-level",
            isOptional: true,
            suggestions: ["debug", "info"],
          },
        },
        {
          name: "--unstable",
          description: "Enable unstable features and APIs",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress diagnostic output",
        },
      ],
      args: {
        name: "subcommand",
        isOptional: true,
        template: "help",
      },
    },
  ],
  options: [
    {
      name: ["-L", "--log-level"],
      description: "Set log level",
      hidden: true,
      args: {
        name: "log-level",
        isOptional: true,
        suggestions: ["debug", "info"],
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
    {
      name: "--unstable",
      description: "Enable unstable features and APIs",
    },
    {
      name: ["-q", "--quiet"],
      description: "Suppress diagnostic output",
    },
  ],
};

export default completion;
