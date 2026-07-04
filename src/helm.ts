const completionSpec: Fig.Spec = {
  name: "helm",
  description: "The Helm package manager for Kubernetes",
  subcommands: [
    {
      name: "completion",
      description: "Generate autocompletion scripts for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new chart with the given name",
      options: [
        {
          name: ["--starter", "-p"],
          description: "The name or absolute path to Helm starter scaffold",
          args: { name: "starter" },
        },
      ],
    },
    {
      name: ["dep", "dependencies", "dependency"],
      description: "Manage a chart's dependencies",
      subcommands: [
        {
          name: "build",
          description:
            "Rebuild the charts/ directory based on the Chart.lock file",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Keyring containing public keys",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--skip-refresh",
              description: "Do not refresh the local repository cache",
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the packages against signatures",
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List the dependencies for the given chart",
          options: [
            {
              name: "--max-col-width",
              description: "Maximum column width for output table",
              args: { name: "max-col-width", default: "80" },
            },
          ],
        },
        {
          name: ["up", "update"],
          description: "Update charts/ based on the contents of Chart.yaml",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Keyring containing public keys",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--skip-refresh",
              description: "Do not refresh the local repository cache",
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the packages against signatures",
            },
          ],
        },
      ],
    },
    { name: "env", description: "Helm client environment information" },
    {
      name: "get",
      description: "Download extended information of a named release",
      subcommands: [
        {
          name: "all",
          description: "Download all information for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
            {
              name: "--template",
              description:
                "Go template for formatting the output, eg: {{.Release.Name}}",
              args: { name: "template" },
            },
          ],
        },
        {
          name: "hooks",
          description: "Download all hooks for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "manifest",
          description: "Download the manifest for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "metadata",
          description: "Fetch metadata for a given release",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
            {
              name: "--revision",
              description: "Specify release revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "notes",
          description: "Download the notes for a named release",
          options: [
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
        {
          name: "values",
          description: "Download the values file for a named release",
          options: [
            {
              name: ["--all", "-a"],
              description: "Dump all (computed) values",
            },
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
            {
              name: "--revision",
              description: "Get the named release with revision",
              args: { name: "revision", default: "0" },
            },
          ],
        },
      ],
    },
    {
      name: ["hist", "history"],
      description: "Fetch release history",
      options: [
        {
          name: "--max",
          description: "Maximum number of revision to include in history",
          args: { name: "max", default: "256" },
        },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
      ],
    },
    {
      name: "install",
      description: "Install a chart",
      options: [
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--create-namespace",
          description: "Create the release namespace if not present",
        },
        {
          name: "--dependency-update",
          description:
            "Update dependencies if they are missing before installing the chart",
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--disable-openapi-validation",
          description:
            "If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema",
        },
        {
          name: "--dry-run",
          description:
            "Simulates the operation without persisting changes. '--dry-run=client' simulates the operation client-side only and avoids cluster connections. '--dry-run=server' simulates the operation on the server, requiring cluster connectivity",
          args: {
            name: "dry-run",
            suggestions: ["none", "client", "server"],
            default: "none",
          },
        },
        {
          name: "--enable-dns",
          description: "Enable DNS lookups when rendering templates",
        },
        {
          name: "--force-conflicts",
          description:
            "If set server-side apply will force changes against conflicts",
        },
        {
          name: "--force-replace",
          description: "Force resource updates by replacement",
        },
        {
          name: ["--generate-name", "-g"],
          description: "Generate the name (and omit the NAME parameter)",
        },
        {
          name: "--hide-notes",
          description:
            "If set, do not show notes in install output. Does not affect presence in chart metadata",
        },
        {
          name: "--hide-secret",
          description:
            "Hide Kubernetes Secrets when also using the --dry-run flag",
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: ["--labels", "-l"],
          description:
            "Labels that would be added to release metadata. Should be divided by comma",
          args: { name: "labels" },
        },
        {
          name: "--name-template",
          description: "Specify template used to name the release",
          args: { name: "name-template" },
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during install",
        },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--plain-http",
          description: "Use insecure HTTP connections for the chart download",
        },
        {
          name: "--post-renderer",
          description:
            "The name of a postrenderer type plugin to be used for post rendering. If it exists, the plugin will be used",
          args: { name: "post-renderer" },
        },
        {
          name: "--post-renderer-args",
          description:
            "An argument to the post-renderer (can specify multiple)",
          isRepeatable: true,
          args: { name: "post-renderer-args" },
        },
        {
          name: "--render-subchart-notes",
          description: "If set, render subchart notes along with the parent",
        },
        {
          name: "--replace",
          description:
            "Re-use the given name, only if that name is a deleted release which remains in the history. This is unsafe in production",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--rollback-on-failure",
          description:
            'If set, Helm will rollback (uninstall) the installation upon failure. The --wait flag will be default to "watcher" if --rollback-on-failure is set',
        },
        {
          name: "--server-side",
          description: "Object updates run in the server instead of the client",
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-json",
          description:
            'Set JSON values on the command line (can specify multiple or separate values with commas: key1=jsonval1,key2=jsonval2 or using json format: {"key1": jsonval1, "key2": "jsonval2"})',
          isRepeatable: true,
          args: { name: "set-json" },
        },
        {
          name: "--set-literal",
          description: "Set a literal STRING value on the command line",
          isRepeatable: true,
          args: { name: "set-literal" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: "--skip-crds",
          description:
            "If set, no CRDs will be installed. By default, CRDs are installed if not already present",
        },
        {
          name: "--skip-schema-validation",
          description: "If set, disables JSON schema validation",
        },
        {
          name: "--take-ownership",
          description:
            "If set, install will ignore the check for helm annotations and take ownership of the existing resources",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
        {
          name: "--wait",
          description:
            "If specified, will wait until all resources are in the expected state before marking the operation as successful. It will wait for as long as --timeout. Valid inputs are 'watcher' and 'legacy'",
          args: { name: "wait", suggestions: ["watcher", "legacy"] },
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "lint",
      description: "Examine a chart for possible issues",
      options: [
        {
          name: "--kube-version",
          description:
            "Kubernetes version used for capabilities and deprecation checks",
          args: { name: "kube-version" },
        },
        { name: "--quiet", description: "Print only warnings and errors" },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-json",
          description:
            'Set JSON values on the command line (can specify multiple or separate values with commas: key1=jsonval1,key2=jsonval2 or using json format: {"key1": jsonval1, "key2": "jsonval2"})',
          isRepeatable: true,
          args: { name: "set-json" },
        },
        {
          name: "--set-literal",
          description: "Set a literal STRING value on the command line",
          isRepeatable: true,
          args: { name: "set-literal" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: "--skip-schema-validation",
          description: "If set, disables JSON schema validation",
        },
        { name: "--strict", description: "Fail on lint warnings" },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--with-subcharts", description: "Lint dependent charts" },
      ],
    },
    {
      name: ["ls", "list"],
      description: "List releases",
      options: [
        {
          name: ["--all", "-a"],
          description: "Show all releases without any filter applied",
        },
        {
          name: ["--all-namespaces", "-A"],
          description: "List releases across all namespaces",
        },
        { name: ["--date", "-d"], description: "Sort by release date" },
        {
          name: "--deployed",
          description:
            "Show deployed releases. If no other is specified, this will be automatically enabled",
        },
        { name: "--failed", description: "Show failed releases" },
        {
          name: ["--filter", "-f"],
          description:
            "A regular expression (Perl compatible). Any releases that match the expression will be included in the results",
          args: { name: "filter" },
        },
        {
          name: ["--max", "-m"],
          description: "Maximum number of releases to fetch",
          args: { name: "max", default: "256" },
        },
        {
          name: "--no-headers",
          description:
            "Don't print headers when using the default output format",
        },
        {
          name: "--offset",
          description:
            "Next release index in the list, used to offset from start value",
          args: { name: "offset", default: "0" },
        },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        { name: "--pending", description: "Show pending releases" },
        {
          name: ["--reverse", "-r"],
          description: "Reverse the sort order",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2). Works only for secret(default) and configmap storage backends",
          args: { name: "selector" },
        },
        {
          name: ["--short", "-q"],
          description: "Output short (quiet) listing format",
        },
        {
          name: "--superseded",
          description: "Show superseded releases",
        },
        {
          name: "--time-format",
          description:
            'Format time using golang time formatter. Example: --time-format "2006-01-02 15:04:05Z0700"',
          args: { name: "time-format" },
        },
        {
          name: "--uninstalled",
          description:
            "Show uninstalled releases (if 'helm uninstall --keep-history' was used)",
        },
        {
          name: "--uninstalling",
          description: "Show releases that are currently being uninstalled",
        },
      ],
    },
    {
      name: "package",
      description: "Package a chart directory into a chart archive",
      options: [
        {
          name: "--app-version",
          description: "Set the appVersion on the chart to this version",
          args: { name: "app-version" },
        },
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: ["--dependency-update", "-u"],
          description:
            'Update dependencies from "Chart.yaml" to dir "charts/" before packaging',
        },
        {
          name: ["--destination", "-d"],
          description: "Location to write the chart",
          args: { name: "destination", default: "." },
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--key",
          description:
            "Name of the key to use when signing. Used if --sign is true",
          args: { name: "key" },
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of a public keyring",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--passphrase-file",
          description:
            'Location of a file which contains the passphrase for the signing key. Use "-" in order to read from stdin',
          args: { name: "passphrase-file", template: "filepaths" },
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--plain-http",
          description: "Use insecure HTTP connections for the chart download",
        },
        {
          name: "--sign",
          description: "Use a PGP private key to sign this package",
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: "--version",
          description: "Set the version on the chart to this semver version",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "plugin",
      description: "Manage client-side Helm plugins",
      subcommands: [
        {
          name: ["install", "add"],
          description: "Install a Helm plugin",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify registry client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--insecure-skip-tls-verify",
              description:
                "Skip tls certificate checks for the plugin download",
            },
            {
              name: "--key-file",
              description: "Identify registry client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--password",
              description: "Registry password",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the plugin download",
            },
            {
              name: "--username",
              description: "Registry username",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the plugin signature before installing",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint. If this is not specified, the latest version is installed",
              args: { name: "version" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List installed Helm plugins",
          options: [
            {
              name: "--type",
              description: "Plugin type",
              args: { name: "type" },
            },
          ],
        },
        {
          name: "package",
          description: "Package a plugin directory into a plugin archive",
          options: [
            {
              name: ["--destination", "-d"],
              description: "Location to write the plugin tarball",
              args: { name: "destination", default: "." },
            },
            {
              name: "--key",
              description:
                "Name of the key to use when signing. Used if --sign is true",
              args: { name: "key" },
            },
            {
              name: "--keyring",
              description: "Location of a public keyring",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--passphrase-file",
              description:
                'Location of a file which contains the passphrase for the signing key. Use "-" to read from stdin',
              args: { name: "passphrase-file", template: "filepaths" },
            },
            {
              name: "--sign",
              description: "Use a PGP private key to sign this plugin",
            },
          ],
        },
        {
          name: ["uninstall", "rm", "remove"],
          description: "Uninstall one or more Helm plugins",
        },
        {
          name: ["update", "up"],
          description: "Update one or more Helm plugins",
        },
        {
          name: "verify",
          description:
            "Verify that a plugin at the given path has been signed and is valid",
          options: [
            {
              name: "--keyring",
              description: "Keyring containing public keys",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
          ],
        },
      ],
    },
    {
      name: ["fetch", "pull"],
      description:
        "Download a chart from a repository and (optionally) unpack it in local directory",
      options: [
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: ["--destination", "-d"],
          description:
            "Location to write the chart. If this and untardir are specified, untardir is appended to this",
          args: { name: "destination", default: "." },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--plain-http",
          description: "Use insecure HTTP connections for the chart download",
        },
        {
          name: "--prov",
          description:
            "Fetch the provenance file, but don't perform verification",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--untar",
          description:
            "If set to true, will untar the chart after downloading it",
        },
        {
          name: "--untardir",
          description:
            "If untar is specified, this flag specifies the name of the directory into which the chart is expanded",
          args: { name: "untardir", default: ".", template: "filepaths" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "push",
      description: "Push a chart to remote",
      options: [
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description:
            "Identify registry client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart upload",
        },
        {
          name: "--key-file",
          description: "Identify registry client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--plain-http",
          description: "Use insecure HTTP connections for the chart upload",
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
      ],
    },
    {
      name: "registry",
      description: "Login to or logout from a registry",
      subcommands: [
        {
          name: "login",
          description: "Login to a registry",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify registry client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--insecure",
              description: "Allow connections to TLS registry without certs",
            },
            {
              name: "--key-file",
              description: "Identify registry client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: ["--password", "-p"],
              description: "Registry password or identity token",
              args: { name: "password" },
            },
            {
              name: "--password-stdin",
              description: "Read password or identity token from stdin",
            },
            {
              name: "--plain-http",
              description: "Use insecure HTTP connections for the chart upload",
            },
            {
              name: ["--username", "-u"],
              description: "Registry username",
              args: { name: "username" },
            },
          ],
        },
        { name: "logout", description: "Logout from a registry" },
      ],
    },
    {
      name: "repo",
      description: "Add, list, remove, update, and index chart repositories",
      subcommands: [
        {
          name: "add",
          description: "Add a chart repository",
          options: [
            {
              name: "--allow-deprecated-repos",
              description:
                "By default, this command will not allow adding official repos that have been permanently deleted. This disables that behavior",
            },
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--force-update",
              description: "Replace (overwrite) the repo if it already exists",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the repository",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description: "Chart repository password",
              args: { name: "password" },
            },
            {
              name: "--password-stdin",
              description: "Read chart repository password from stdin",
            },
            {
              name: "--timeout",
              description:
                "Time to wait for the index file download to complete",
              args: { name: "timeout", default: "2m0s" },
            },
            {
              name: "--username",
              description: "Chart repository username",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "index",
          description:
            "Generate an index file given a directory containing packaged charts",
          options: [
            { name: "--json", description: "Output in JSON format" },
            {
              name: "--merge",
              description: "Merge the generated index into the given index",
              args: { name: "merge" },
            },
            {
              name: "--url",
              description: "Url of chart repository",
              args: { name: "url" },
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List chart repositories",
          options: [
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
          ],
        },
        {
          name: ["rm", "remove"],
          description: "Remove one or more chart repositories",
        },
        {
          name: ["up", "update"],
          description:
            "Update information of available charts locally from chart repositories",
          options: [
            {
              name: "--timeout",
              description:
                "Time to wait for the index file download to complete",
              args: { name: "timeout", default: "2m0s" },
            },
          ],
        },
      ],
    },
    {
      name: "rollback",
      description: "Roll back a release to a previous revision",
      options: [
        {
          name: "--cleanup-on-fail",
          description:
            "Allow deletion of new resources created in this rollback when rollback fails",
        },
        {
          name: "--dry-run",
          description:
            "Simulates the operation without persisting changes. '--dry-run=client' simulates the operation client-side only and avoids cluster connections. '--dry-run=server' simulates the operation on the server, requiring cluster connectivity",
          args: {
            name: "dry-run",
            suggestions: ["none", "client", "server"],
            default: "none",
          },
        },
        {
          name: "--force-conflicts",
          description:
            "If set server-side apply will force changes against conflicts",
        },
        {
          name: "--force-replace",
          description: "Force resource updates by replacement",
        },
        {
          name: "--history-max",
          description:
            "Limit the maximum number of revisions saved per release. Use 0 for no limit",
          args: { name: "history-max", default: "10" },
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during rollback",
        },
        {
          name: "--server-side",
          description:
            'Must be "true", "false" or "auto". Object updates run in the server instead of the client ("auto" defaults the value from the previous chart release\'s method)',
          args: {
            name: "server-side",
            suggestions: ["true", "false", "auto"],
            default: "auto",
          },
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--wait",
          description:
            "If specified, will wait until all resources are in the expected state before marking the operation as successful. It will wait for as long as --timeout. Valid inputs are 'watcher' and 'legacy'",
          args: { name: "wait", suggestions: ["watcher", "legacy"] },
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "search",
      description: "Search for a keyword in charts",
      subcommands: [
        {
          name: "hub",
          description:
            "Search for charts in the Artifact Hub or your own hub instance",
          options: [
            {
              name: "--endpoint",
              description: "Hub instance to query for charts",
              args: { name: "endpoint", default: "https://hub.helm.sh" },
            },
            {
              name: "--fail-on-no-result",
              description: "Search fails if no results are found",
            },
            {
              name: "--list-repo-url",
              description: "Print charts repository URL",
            },
            {
              name: "--max-col-width",
              description: "Maximum column width for output table",
              args: { name: "max-col-width", default: "50" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
          ],
        },
        {
          name: "repo",
          description: "Search repositories for a keyword in charts",
          options: [
            {
              name: "--devel",
              description:
                "Use development versions (alpha, beta, and release candidate releases), too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--fail-on-no-result",
              description: "Search fails if no results are found",
            },
            {
              name: "--max-col-width",
              description: "Maximum column width for output table",
              args: { name: "max-col-width", default: "50" },
            },
            {
              name: ["--output", "-o"],
              description:
                "Prints the output in the specified format. Allowed values: table, json, yaml",
              args: { name: "output", default: "table" },
            },
            {
              name: ["--regexp", "-r"],
              description:
                "Use regular expressions for searching repositories you have added",
            },
            {
              name: "--version",
              description:
                "Search using semantic versioning constraints on repositories you have added",
              args: { name: "version" },
            },
            {
              name: ["--versions", "-l"],
              description:
                "Show the long listing, with each version of each chart on its own line, for repositories you have added",
            },
          ],
        },
      ],
    },
    {
      name: ["inspect", "show"],
      description: "Show information of a chart",
      subcommands: [
        {
          name: "all",
          description: "Show all information of the chart",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "chart",
          description: "Show the chart's definition",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "crds",
          description: "Show the chart's CRDs",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                default: "~/.gnupg/pubring.gpg",
                template: "filepaths",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "readme",
          description: "Show the chart's README",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "values",
          description: "Show the chart's values",
          options: [
            {
              name: "--ca-file",
              description:
                "Verify certificates of HTTPS-enabled servers using this CA bundle",
              args: { name: "ca-file", template: "filepaths" },
            },
            {
              name: "--cert-file",
              description:
                "Identify HTTPS client using this SSL certificate file",
              args: { name: "cert-file", template: "filepaths" },
            },
            {
              name: "--devel",
              description:
                "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
            },
            {
              name: "--insecure-skip-tls-verify",
              description: "Skip tls certificate checks for the chart download",
            },
            {
              name: "--jsonpath",
              description: "Supply a JSONPath expression to filter the output",
              args: { name: "jsonpath" },
            },
            {
              name: "--key-file",
              description: "Identify HTTPS client using this SSL key file",
              args: { name: "key-file", template: "filepaths" },
            },
            {
              name: "--keyring",
              description: "Location of public keys used for verification",
              args: {
                name: "keyring",
                template: "filepaths",
                default: "~/.gnupg/pubring.gpg",
              },
            },
            {
              name: "--pass-credentials",
              description: "Pass credentials to all domains",
            },
            {
              name: "--password",
              description:
                "Chart repository password where to locate the requested chart",
              args: { name: "password" },
            },
            {
              name: "--plain-http",
              description:
                "Use insecure HTTP connections for the chart download",
            },
            {
              name: "--repo",
              description:
                "Chart repository url where to locate the requested chart",
              args: { name: "repo" },
            },
            {
              name: "--username",
              description:
                "Chart repository username where to locate the requested chart",
              args: { name: "username" },
            },
            {
              name: "--verify",
              description: "Verify the package before using it",
            },
            {
              name: "--version",
              description:
                "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "status",
      description: "Display the status of the named release",
      options: [
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        {
          name: "--revision",
          description:
            "If set, display the status of the named release with revision",
          args: { name: "revision", default: "0" },
        },
      ],
    },
    {
      name: "template",
      description: "Locally render templates",
      options: [
        {
          name: ["--api-versions", "-a"],
          description:
            "Kubernetes api versions used for Capabilities.APIVersions",
          isRepeatable: true,
          args: { name: "api-versions" },
        },
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--create-namespace",
          description: "Create the release namespace if not present",
        },
        {
          name: "--dependency-update",
          description:
            "Update dependencies if they are missing before installing the chart",
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--disable-openapi-validation",
          description:
            "If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema",
        },
        {
          name: "--dry-run",
          description:
            "Simulates the operation either client-side or server-side. '--dry-run=client' simulates the operation client-side only and avoids cluster connections. '--dry-run=server' simulates/validates the operation on the server, requiring cluster connectivity",
          args: {
            name: "dry-run",
            suggestions: ["client", "server"],
            default: "client",
          },
        },
        {
          name: "--enable-dns",
          description: "Enable DNS lookups when rendering templates",
        },
        {
          name: "--force-conflicts",
          description:
            "If set server-side apply will force changes against conflicts",
        },
        {
          name: "--force-replace",
          description: "Force resource updates by replacement",
        },
        {
          name: ["--generate-name", "-g"],
          description: "Generate the name (and omit the NAME parameter)",
        },
        {
          name: "--hide-notes",
          description:
            "If set, do not show notes in install output. Does not affect presence in chart metadata",
        },
        {
          name: "--include-crds",
          description: "Include CRDs in the templated output",
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: "--is-upgrade",
          description: "Set .Release.IsUpgrade instead of .Release.IsInstall",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: "--kube-version",
          description: "Kubernetes version used for Capabilities.KubeVersion",
          args: { name: "kube-version" },
        },
        {
          name: ["--labels", "-l"],
          description:
            "Labels that would be added to release metadata. Should be divided by comma",
          args: { name: "labels" },
        },
        {
          name: "--name-template",
          description: "Specify template used to name the release",
          args: { name: "name-template" },
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during install",
        },
        {
          name: "--output-dir",
          description:
            "Writes the executed templates to files in output-dir instead of stdout",
          args: { name: "output-dir", template: "filepaths" },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--plain-http",
          description: "Use insecure HTTP connections for the chart download",
        },
        {
          name: "--post-renderer",
          description:
            "The name of a postrenderer type plugin to be used for post rendering. If it exists, the plugin will be used",
          args: { name: "post-renderer" },
        },
        {
          name: "--post-renderer-args",
          description:
            "An argument to the post-renderer (can specify multiple)",
          isRepeatable: true,
          args: { name: "post-renderer-args" },
        },
        {
          name: "--release-name",
          description: "Use release name in the output-dir path",
        },
        {
          name: "--render-subchart-notes",
          description: "If set, render subchart notes along with the parent",
        },
        {
          name: "--replace",
          description:
            "Re-use the given name, only if that name is a deleted release which remains in the history. This is unsafe in production",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--rollback-on-failure",
          description:
            'If set, Helm will rollback (uninstall) the installation upon failure. The --wait flag will be default to "watcher" if --rollback-on-failure is set',
        },
        {
          name: "--server-side",
          description: "Object updates run in the server instead of the client",
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-json",
          description:
            'Set JSON values on the command line (can specify multiple or separate values with commas: key1=jsonval1,key2=jsonval2 or using json format: {"key1": jsonval1, "key2": "jsonval2"})',
          isRepeatable: true,
          args: { name: "set-json" },
        },
        {
          name: "--set-literal",
          description: "Set a literal STRING value on the command line",
          isRepeatable: true,
          args: { name: "set-literal" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: ["--show-only", "-s"],
          description: "Only show manifests rendered from the given templates",
          isRepeatable: true,
          args: { name: "show-only" },
        },
        {
          name: "--skip-crds",
          description:
            "If set, no CRDs will be installed. By default, CRDs are installed if not already present",
        },
        {
          name: "--skip-schema-validation",
          description: "If set, disables JSON schema validation",
        },
        {
          name: "--skip-tests",
          description: "Skip tests from templated output",
        },
        {
          name: "--take-ownership",
          description:
            "If set, install will ignore the check for helm annotations and take ownership of the existing resources",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
        {
          name: "--wait",
          description:
            "If specified, will wait until all resources are in the expected state before marking the operation as successful. It will wait for as long as --timeout. Valid inputs are 'watcher' and 'legacy'",
          args: { name: "wait", suggestions: ["watcher", "legacy"] },
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "test",
      description: "Run tests for a release",
      options: [
        {
          name: "--filter",
          description:
            "Specify tests by attribute (currently \"name\") using attribute=value syntax or '!attribute=value' to exclude a test (can specify multiple or separate values with commas: name=test1,name=test2)",
          isRepeatable: true,
          args: { name: "filter" },
        },
        {
          name: "--logs",
          description:
            "Dump the logs from test pods (this runs after all tests are complete, but before any cleanup)",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
      ],
    },
    {
      name: ["del", "delete", "un", "uninstall"],
      description: "Uninstall a release",
      options: [
        {
          name: "--cascade",
          description:
            'Must be "background", "orphan", or "foreground". Selects the deletion cascading strategy for the dependents. Defaults to background',
          args: {
            name: "cascade",
            suggestions: ["background", "orphan", "foreground"],
            default: "background",
          },
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        { name: "--dry-run", description: "Simulate a uninstall" },
        {
          name: "--ignore-not-found",
          description: 'Treat "release not found" as a successful uninstall',
        },
        {
          name: "--keep-history",
          description:
            "Remove all associated resources and mark the release as deleted, but retain the release history",
        },
        {
          name: "--no-hooks",
          description: "Prevent hooks from running during uninstallation",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--wait",
          description:
            "If specified, will wait until all resources are in the expected state before marking the operation as successful. It will wait for as long as --timeout. Valid inputs are 'watcher' and 'legacy'",
          args: { name: "wait", suggestions: ["watcher", "legacy"] },
        },
      ],
    },
    {
      name: "upgrade",
      description: "Upgrade a release",
      options: [
        {
          name: "--ca-file",
          description:
            "Verify certificates of HTTPS-enabled servers using this CA bundle",
          args: { name: "ca-file", template: "filepaths" },
        },
        {
          name: "--cert-file",
          description: "Identify HTTPS client using this SSL certificate file",
          args: { name: "cert-file", template: "filepaths" },
        },
        {
          name: "--cleanup-on-fail",
          description:
            "Allow deletion of new resources created in this upgrade when upgrade fails",
        },
        {
          name: "--create-namespace",
          description:
            "If --install is set, create the release namespace if not present",
        },
        {
          name: "--dependency-update",
          description:
            "Update dependencies if they are missing before installing the chart",
        },
        {
          name: "--description",
          description: "Add a custom description",
          args: { name: "description" },
        },
        {
          name: "--devel",
          description:
            "Use development versions, too. Equivalent to version '>0.0.0-0'. If --version is set, this is ignored",
        },
        {
          name: "--disable-openapi-validation",
          description:
            "If set, the upgrade process will not validate rendered templates against the Kubernetes OpenAPI Schema",
        },
        {
          name: "--dry-run",
          description:
            "Simulates the operation without persisting changes. '--dry-run=client' simulates the operation client-side only and avoids cluster connections. '--dry-run=server' simulates the operation on the server, requiring cluster connectivity",
          args: {
            name: "dry-run",
            suggestions: ["none", "client", "server"],
            default: "none",
          },
        },
        {
          name: "--enable-dns",
          description: "Enable DNS lookups when rendering templates",
        },
        {
          name: "--force-conflicts",
          description:
            "If set server-side apply will force changes against conflicts",
        },
        {
          name: "--force-replace",
          description: "Force resource updates by replacement",
        },
        {
          name: "--hide-notes",
          description:
            "If set, do not show notes in upgrade output. Does not affect presence in chart metadata",
        },
        {
          name: "--hide-secret",
          description:
            "Hide Kubernetes Secrets when also using the --dry-run flag",
        },
        {
          name: "--history-max",
          description:
            "Limit the maximum number of revisions saved per release. Use 0 for no limit",
          args: { name: "history-max", default: "10" },
        },
        {
          name: "--insecure-skip-tls-verify",
          description: "Skip tls certificate checks for the chart download",
        },
        {
          name: ["--install", "-i"],
          description:
            "If a release by this name doesn't already exist, run an install",
        },
        {
          name: "--key-file",
          description: "Identify HTTPS client using this SSL key file",
          args: { name: "key-file", template: "filepaths" },
        },
        {
          name: "--keyring",
          description: "Location of public keys used for verification",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
        {
          name: ["--labels", "-l"],
          description:
            "Labels that would be added to release metadata. Should be separated by comma. Original release labels will be merged with upgrade labels. You can unset label using null",
          args: { name: "labels" },
        },
        { name: "--no-hooks", description: "Disable pre/post upgrade hooks" },
        {
          name: ["--output", "-o"],
          description:
            "Prints the output in the specified format. Allowed values: table, json, yaml",
          args: { name: "output", default: "table" },
        },
        {
          name: "--pass-credentials",
          description: "Pass credentials to all domains",
        },
        {
          name: "--password",
          description:
            "Chart repository password where to locate the requested chart",
          args: { name: "password" },
        },
        {
          name: "--plain-http",
          description: "Use insecure HTTP connections for the chart download",
        },
        {
          name: "--post-renderer",
          description:
            "The name of a postrenderer type plugin to be used for post rendering. If it exists, the plugin will be used",
          args: { name: "post-renderer" },
        },
        {
          name: "--post-renderer-args",
          description:
            "An argument to the post-renderer (can specify multiple)",
          isRepeatable: true,
          args: { name: "post-renderer-args" },
        },
        {
          name: "--render-subchart-notes",
          description: "If set, render subchart notes along with the parent",
        },
        {
          name: "--repo",
          description:
            "Chart repository url where to locate the requested chart",
          args: { name: "repo" },
        },
        {
          name: "--reset-then-reuse-values",
          description:
            "When upgrading, reset the values to the ones built into the chart, apply the last release's values and merge in any overrides from the command line via --set and -f. If '--reset-values' or '--reuse-values' is specified, this is ignored",
        },
        {
          name: "--reset-values",
          description:
            "When upgrading, reset the values to the ones built into the chart",
        },
        {
          name: "--reuse-values",
          description:
            "When upgrading, reuse the last release's values and merge in any overrides from the command line via --set and -f. If '--reset-values' is specified, this is ignored",
        },
        {
          name: "--rollback-on-failure",
          description:
            'If set, Helm will rollback the upgrade to previous success release upon failure. The --wait flag will be defaulted to "watcher" if --rollback-on-failure is set',
        },
        {
          name: "--server-side",
          description:
            'Must be "true", "false" or "auto". Object updates run in the server instead of the client ("auto" defaults the value from the previous chart release\'s method)',
          args: {
            name: "server-side",
            suggestions: ["true", "false", "auto"],
            default: "auto",
          },
        },
        {
          name: "--set",
          description:
            "Set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set" },
        },
        {
          name: "--set-file",
          description:
            "Set values from respective files specified via the command line (can specify multiple or separate values with commas: key1=path1,key2=path2)",
          isRepeatable: true,
          args: { name: "set-file", template: "filepaths" },
        },
        {
          name: "--set-json",
          description:
            'Set JSON values on the command line (can specify multiple or separate values with commas: key1=jsonval1,key2=jsonval2 or using json format: {"key1": jsonval1, "key2": "jsonval2"})',
          isRepeatable: true,
          args: { name: "set-json" },
        },
        {
          name: "--set-literal",
          description: "Set a literal STRING value on the command line",
          isRepeatable: true,
          args: { name: "set-literal" },
        },
        {
          name: "--set-string",
          description:
            "Set STRING values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)",
          isRepeatable: true,
          args: { name: "set-string" },
        },
        {
          name: "--skip-crds",
          description:
            "If set, no CRDs will be installed when an upgrade is performed with install flag enabled. By default, CRDs are installed if not already present, when an upgrade is performed with install flag enabled",
        },
        {
          name: "--skip-schema-validation",
          description: "If set, disables JSON schema validation",
        },
        {
          name: "--take-ownership",
          description:
            "If set, upgrade will ignore the check for helm annotations and take ownership of the existing resources",
        },
        {
          name: "--timeout",
          description:
            "Time to wait for any individual Kubernetes operation (like Jobs for hooks)",
          args: { name: "timeout", default: "5m0s" },
        },
        {
          name: "--username",
          description:
            "Chart repository username where to locate the requested chart",
          args: { name: "username" },
        },
        {
          name: ["--values", "-f"],
          description:
            "Specify values in a YAML file or a URL (can specify multiple)",
          isRepeatable: true,
          args: { name: "values", template: "filepaths" },
        },
        { name: "--verify", description: "Verify the package before using it" },
        {
          name: "--version",
          description:
            "Specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used",
          args: { name: "version" },
        },
        {
          name: "--wait",
          description:
            "If specified, will wait until all resources are in the expected state before marking the operation as successful. It will wait for as long as --timeout. Valid inputs are 'watcher' and 'legacy'",
          args: { name: "wait", suggestions: ["watcher", "legacy"] },
        },
        {
          name: "--wait-for-jobs",
          description:
            "If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout",
        },
      ],
    },
    {
      name: "verify",
      description:
        "Verify that a chart at the given path has been signed and is valid",
      options: [
        {
          name: "--keyring",
          description: "Keyring containing public keys",
          args: {
            name: "keyring",
            template: "filepaths",
            default: "~/.gnupg/pubring.gpg",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the helm version information",
      options: [
        { name: "--short", description: "Print the version number" },
        {
          name: "--template",
          description: "Template for version string format",
          args: { name: "template" },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate autocompletion scripts for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate autocompletion script for zsh",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new chart with the given name",
        },
        {
          name: ["dep", "dependencies", "dependency"],
          description: "Manage a chart's dependencies",
          subcommands: [
            {
              name: "build",
              description:
                "Rebuild the charts/ directory based on the Chart.lock file",
            },
            {
              name: ["ls", "list"],
              description: "List the dependencies for the given chart",
            },
            {
              name: ["up", "update"],
              description: "Update charts/ based on the contents of Chart.yaml",
            },
          ],
        },
        { name: "env", description: "Helm client environment information" },
        {
          name: "get",
          description: "Download extended information of a named release",
          subcommands: [
            {
              name: "all",
              description: "Download all information for a named release",
            },
            {
              name: "hooks",
              description: "Download all hooks for a named release",
            },
            {
              name: "manifest",
              description: "Download the manifest for a named release",
            },
            {
              name: "metadata",
              description: "Fetch metadata for a given release",
            },
            {
              name: "notes",
              description: "Download the notes for a named release",
            },
            {
              name: "values",
              description: "Download the values file for a named release",
            },
          ],
        },
        { name: ["hist", "history"], description: "Fetch release history" },
        {
          name: "install",
          description: "Install a chart",
        },
        { name: "lint", description: "Examine a chart for possible issues" },
        {
          name: ["ls", "list"],
          description: "List releases",
        },
        {
          name: "package",
          description: "Package a chart directory into a chart archive",
        },
        {
          name: "plugin",
          description: "Manage client-side Helm plugins",
          subcommands: [
            {
              name: ["install", "add"],
              description: "Install a Helm plugin",
            },
            {
              name: ["ls", "list"],
              description: "List installed Helm plugins",
            },
            {
              name: "package",
              description: "Package a plugin directory into a plugin archive",
            },
            {
              name: ["uninstall", "rm", "remove"],
              description: "Uninstall one or more Helm plugins",
            },
            {
              name: ["update", "up"],
              description: "Update one or more Helm plugins",
            },
            {
              name: "verify",
              description:
                "Verify that a plugin at the given path has been signed and is valid",
            },
          ],
        },
        {
          name: ["fetch", "pull"],
          description:
            "Download a chart from a repository and (optionally) unpack it in local directory",
        },
        { name: "push", description: "Push a chart to remote" },
        {
          name: "registry",
          description: "Login to or logout from a registry",
          subcommands: [
            { name: "login", description: "Login to a registry" },
            {
              name: "logout",
              description: "Logout from a registry",
            },
          ],
        },
        {
          name: "repo",
          description:
            "Add, list, remove, update, and index chart repositories",
          subcommands: [
            { name: "add", description: "Add a chart repository" },
            {
              name: "index",
              description:
                "Generate an index file given a directory containing packaged charts",
            },
            { name: ["ls", "list"], description: "List chart repositories" },
            {
              name: ["rm", "remove"],
              description: "Remove one or more chart repositories",
            },
            {
              name: ["up", "update"],
              description:
                "Update information of available charts locally from chart repositories",
            },
          ],
        },
        {
          name: "rollback",
          description: "Roll back a release to a previous revision",
        },
        {
          name: "search",
          description: "Search for a keyword in charts",
          subcommands: [
            {
              name: "hub",
              description:
                "Search for charts in the Artifact Hub or your own hub instance",
            },
            {
              name: "repo",
              description: "Search repositories for a keyword in charts",
            },
          ],
        },
        {
          name: ["inspect", "show"],
          description: "Show information of a chart",
          subcommands: [
            { name: "all", description: "Show all information of the chart" },
            {
              name: "chart",
              description: "Show the chart's definition",
            },
            { name: "crds", description: "Show the chart's CRDs" },
            {
              name: "readme",
              description: "Show the chart's README",
            },
            { name: "values", description: "Show the chart's values" },
          ],
        },
        {
          name: "status",
          description: "Display the status of the named release",
        },
        {
          name: "template",
          description: "Locally render templates",
        },
        { name: "test", description: "Run tests for a release" },
        {
          name: ["del", "delete", "un", "uninstall"],
          description: "Uninstall a release",
        },
        {
          name: "upgrade",
          description: "Upgrade a release",
        },
        {
          name: "verify",
          description:
            "Verify that a chart at the given path has been signed and is valid",
        },
        {
          name: "version",
          description: "Print the helm version information",
        },
      ],
    },
  ],
  options: [
    {
      name: "--burst-limit",
      description: "Client-side default throttling limit",
      isPersistent: true,
      args: { name: "burst-limit", default: "100" },
    },
    {
      name: "--color",
      description: "Use colored output",
      isPersistent: true,
      args: {
        name: "color",
        suggestions: ["never", "auto", "always"],
        default: "auto",
      },
    },
    {
      name: "--colour",
      description: "Use colored output",
      isPersistent: true,
      args: {
        name: "colour",
        suggestions: ["never", "auto", "always"],
        default: "auto",
      },
    },
    {
      name: "--content-cache",
      description:
        "Path to the directory containing cached content (e.g. charts)",
      isPersistent: true,
      args: {
        name: "content-cache",
        template: "filepaths",
        default: "~/Library/Caches/helm/content",
      },
    },
    {
      name: "--debug",
      description: "Enable verbose output",
      isPersistent: true,
    },
    {
      name: "--kube-apiserver",
      description: "The address and the port for the Kubernetes API server",
      isPersistent: true,
      args: { name: "kube-apiserver" },
    },
    {
      name: "--kube-as-group",
      description:
        "Group to impersonate for the operation, this flag can be repeated to specify multiple groups",
      isPersistent: true,
      isRepeatable: true,
      args: { name: "kube-as-group" },
    },
    {
      name: "--kube-as-user",
      description: "Username to impersonate for the operation",
      isPersistent: true,
      args: { name: "kube-as-user" },
    },
    {
      name: "--kube-ca-file",
      description:
        "The certificate authority file for the Kubernetes API server connection",
      isPersistent: true,
      args: { name: "kube-ca-file", template: "filepaths" },
    },
    {
      name: "--kube-context",
      description: "Name of the kubeconfig context to use",
      isPersistent: true,
      args: { name: "kube-context" },
    },
    {
      name: "--kube-insecure-skip-tls-verify",
      description:
        "If true, the Kubernetes API server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
      isPersistent: true,
    },
    {
      name: "--kube-tls-server-name",
      description:
        "Server name to use for Kubernetes API server certificate validation. If it is not provided, the hostname used to contact the server is used",
      isPersistent: true,
      args: { name: "kube-tls-server-name" },
    },
    {
      name: "--kube-token",
      description: "Bearer token used for authentication",
      isPersistent: true,
      args: { name: "kube-token" },
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file",
      isPersistent: true,
      args: { name: "kubeconfig", template: "filepaths" },
    },
    {
      name: ["--namespace", "-n"],
      description: "Namespace scope for this request",
      isPersistent: true,
      args: { name: "namespace" },
    },
    {
      name: "--qps",
      description:
        "Queries per second used when communicating with the Kubernetes API, not including bursting",
      isPersistent: true,
      args: { name: "qps" },
    },
    {
      name: "--registry-config",
      description: "Path to the registry config file",
      isPersistent: true,
      args: {
        name: "registry-config",
        template: "filepaths",
        default: "~/Library/Preferences/helm/registry/config.json",
      },
    },
    {
      name: "--repository-cache",
      description: "Path to the directory containing cached repository indexes",
      isPersistent: true,
      args: {
        name: "repository-cache",
        template: "filepaths",
        default: "~/Library/Caches/helm/repository",
      },
    },
    {
      name: "--repository-config",
      description: "Path to the file containing repository names and URLs",
      isPersistent: true,
      args: {
        name: "repository-config",
        template: "filepaths",
        default: "~/Library/Preferences/helm/repositories.yaml",
      },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
