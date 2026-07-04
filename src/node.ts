import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Subcommand = {
  name: "node",
  description: "Run the node interpreter",
  args: {
    name: "node script",
    isScript: true,
    generators: filepaths({
      extensions: ["mjs", "js", "cjs"],
      editFileSuggestions: { priority: 76 },
    }),
  },
  options: [
    {
      name: ["-e", "--eval=..."],
      insertValue: "-e '{cursor}'",
      description: "Evaluate script",
      args: {},
    },
    {
      name: "--watch",
      description: "Watch input files",
    },
    {
      name: "--watch-path",
      description: "Specify a watch directory or file",
      args: {
        name: "path",
        template: "filepaths",
      },
      isRepeatable: true,
    },
    {
      name: "--watch-preserve-output",
      description:
        "Disable the clearing of the console when watch mode restarts the process",
      dependsOn: ["--watch", "--watch-path"],
    },
    {
      name: "--env-file",
      description: "Specify a file containing environment variables",
      args: {
        name: "path",
        template: "filepaths",
      },
      isRepeatable: true,
    },
    {
      name: ["-p", "--print"],
      description: "Evaluate script and print result",
    },
    {
      name: ["-c", "--check"],
      description: "Syntax check script without executing",
    },
    {
      name: ["-v", "--version"],
      description: "Print Node.js version",
    },
    {
      name: ["-i", "--interactive"],
      description:
        "Always enter the REPL even if stdin does not appear to be a terminal",
    },
    {
      name: ["-h", "--help"],
      description: "Print node command line options (currently set)",
    },
    {
      name: "--inspect",
      requiresSeparator: true,
      args: {
        name: "[host:]port",
        isOptional: true,
      },
      description: "Activate inspector on host:port (default: 127.0.0.1:9229)",
    },
    {
      name: "--preserve-symlinks",
      description:
        "Follows symlinks to directories when examining source code and templates for translation strings",
    },
    {
      name: "--preserve-symlinks-main",
      description: "Preserve symbolic links when resolving the main module",
    },
    // Script / module execution
    {
      name: "--run",
      description: "Run a script specified in package.json",
      args: { name: "command" },
    },
    {
      name: ["-r", "--require"],
      description: "CommonJS module to preload (option can be repeated)",
      args: { name: "module", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--import",
      description: "ES module to preload (option can be repeated)",
      args: { name: "module", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: ["--loader", "--experimental-loader"],
      description: "Use the specified module as a custom loader",
      args: { name: "module" },
      isRepeatable: true,
    },
    {
      name: "--input-type",
      description: "Set module type for string input",
      args: { name: "type" },
    },
    {
      name: ["-C", "--conditions"],
      description:
        "Additional user conditions for conditional exports and imports",
      args: { name: "condition" },
      isRepeatable: true,
    },
    {
      name: "--entry-url",
      description: "Treat the entrypoint as a URL",
    },
    {
      name: "--experimental-import-meta-resolve",
      description:
        "Experimental ES Module import.meta.resolve() parentURL support",
    },
    {
      name: "--experimental-vm-modules",
      description: "Experimental ES Module support in vm module",
    },
    {
      name: ["--experimental-strip-types", "--no-strip-types"],
      description: "Type-stripping for TypeScript files",
    },
    {
      name: "--no-experimental-detect-module",
      description: "Try to evaluate ambiguous modules as ES modules",
    },
    {
      name: "--no-require-module",
      description: "Allow loading synchronous ES Modules in require()",
    },
    {
      name: "--no-experimental-require-module",
      description: "Legacy alias for --require-module",
    },
    // Environment / config files
    {
      name: "--env-file-if-exists",
      description: "Set environment variables from supplied file",
      args: { name: "path", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: [
        "--experimental-default-config-file",
        "--experimental-config-file",
      ],
      description: "Set config file path",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--experimental-package-map",
      description: "Use the specified file for package map resolution",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--use-env-proxy",
      description:
        "Parse proxy settings from HTTP_PROXY/HTTPS_PROXY/NO_PROXY environment variables",
    },
    // Permission model
    {
      name: "--permission",
      description: "Enable the permission system",
    },
    {
      name: "--permission-audit",
      description: "Enable audit only for the permission system",
    },
    {
      name: "--allow-fs-read",
      description: "Allow permissions to read the filesystem",
      args: { name: "path", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--allow-fs-write",
      description: "Allow permissions to write in the filesystem",
      args: { name: "path", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--allow-net",
      description: "Allow use of network when any permissions are set",
    },
    {
      name: "--allow-child-process",
      description: "Allow use of child process when any permissions are set",
    },
    {
      name: "--allow-worker",
      description: "Allow worker threads when any permissions are set",
    },
    {
      name: "--allow-addons",
      description: "Allow use of addons when any permissions are set",
    },
    {
      name: "--allow-wasi",
      description: "Allow wasi when any permissions are set",
    },
    {
      name: "--allow-ffi",
      description: "Allow use of FFI when any permissions are set",
    },
    {
      name: "--allow-inspector",
      description: "Allow use of inspector when any permissions are set",
    },
    // Source maps / process behavior
    {
      name: "--enable-source-maps",
      description: "Source Map V3 support for stack traces",
    },
    {
      name: "--title",
      description: "The process title to use on startup",
      args: { name: "title" },
    },
    {
      name: "--dns-result-order",
      description: "Set default value of verbatim in dns.lookup",
      args: {
        name: "order",
        suggestions: ["ipv4first", "ipv6first", "verbatim"],
      },
    },
    {
      name: "--unhandled-rejections",
      description: "Define unhandled rejections behavior",
      args: {
        name: "mode",
        suggestions: [
          "strict",
          "throw",
          "warn",
          "none",
          "warn-with-error-code",
        ],
      },
    },
    {
      name: "--abort-on-uncaught-exception",
      description:
        "Generate a core file for analysis instead of exiting on uncaught exception",
    },
    // Warnings / deprecation
    {
      name: "--no-warnings",
      description: "Silence all process warnings",
    },
    {
      name: "--no-deprecation",
      description: "Silence deprecation warnings",
    },
    {
      name: "--throw-deprecation",
      description: "Throw an exception on deprecations",
    },
    {
      name: "--trace-deprecation",
      description: "Show stack traces on deprecations",
    },
    {
      name: "--pending-deprecation",
      description: "Emit pending deprecation warnings",
    },
    {
      name: "--trace-warnings",
      description: "Show stack traces on process warnings",
    },
    {
      name: "--disable-warning",
      description: "Silence specific process warnings",
      args: { name: "code-or-type" },
      isRepeatable: true,
    },
    {
      name: "--redirect-warnings",
      description: "Write warnings to file instead of stderr",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--no-extra-info-on-fatal-exception",
      description: "Hide extra information on fatal exception that causes exit",
    },
    // Test runner
    {
      name: "--test",
      description: "Launch test runner on startup",
    },
    {
      name: "--test-concurrency",
      description: "Specify test runner concurrency",
      args: { name: "number" },
    },
    {
      name: "--test-name-pattern",
      description: "Run tests whose name matches this regular expression",
      args: { name: "pattern" },
      isRepeatable: true,
    },
    {
      name: "--test-skip-pattern",
      description: "Run tests whose name do not match this regular expression",
      args: { name: "pattern" },
    },
    {
      name: "--test-reporter",
      description: "Report test output using the given reporter",
      args: { name: "reporter" },
      isRepeatable: true,
    },
    {
      name: "--test-reporter-destination",
      description: "Report given reporter to the given destination",
      args: { name: "destination" },
      isRepeatable: true,
    },
    {
      name: "--test-only",
      description: "Run tests with 'only' option set",
    },
    {
      name: "--test-shard",
      description: "Run test at specific shard",
      args: { name: "shard" },
    },
    {
      name: "--test-timeout",
      description: "Specify test runner timeout",
      args: { name: "ms" },
    },
    {
      name: "--test-force-exit",
      description: "Force test runner to exit upon completion",
    },
    {
      name: "--test-global-setup",
      description: "Specifies the path to the global setup file",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--test-update-snapshots",
      description: "Regenerate test snapshots",
    },
    {
      name: "--test-randomize",
      description: "Run tests in a random order",
    },
    {
      name: "--test-random-seed",
      description: "Seed used to randomize test execution order",
      args: { name: "seed" },
    },
    {
      name: "--test-rerun-failures",
      description: "Specifies the path to the rerun state file",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["--experimental-test-isolation", "--test-isolation"],
      description:
        "Configures the type of test isolation used in the test runner",
      args: { name: "mode" },
    },
    {
      name: "--experimental-test-coverage",
      description: "Enable code coverage in the test runner",
    },
    {
      name: "--experimental-test-module-mocks",
      description: "Enable module mocking in the test runner",
    },
    {
      name: "--experimental-test-tag-filter",
      description: "Run tests matching the given tag filter expression",
      args: { name: "filter" },
    },
    {
      name: "--test-coverage-branches",
      description: "The branch coverage minimum threshold",
      args: { name: "threshold" },
    },
    {
      name: "--test-coverage-functions",
      description: "The function coverage minimum threshold",
      args: { name: "threshold" },
    },
    {
      name: "--test-coverage-lines",
      description: "The line coverage minimum threshold",
      args: { name: "threshold" },
    },
    {
      name: "--test-coverage-include",
      description:
        "Include files in coverage report that match this glob pattern",
      args: { name: "glob" },
      isRepeatable: true,
    },
    {
      name: "--test-coverage-exclude",
      description:
        "Exclude files from coverage report that match this glob pattern",
      args: { name: "glob" },
      isRepeatable: true,
    },
    // Inspector / debugging
    {
      name: "--inspect-brk",
      requiresSeparator: true,
      args: { name: "[host:]port", isOptional: true },
      description:
        "Activate inspector on host:port and break at start of user script",
    },
    {
      name: "--inspect-wait",
      requiresSeparator: true,
      args: { name: "[host:]port", isOptional: true },
      description:
        "Activate inspector on host:port and wait for debugger to be attached",
    },
    {
      name: ["--debug-port", "--inspect-port"],
      description: "Set host:port for inspector",
      args: { name: "[host:]port" },
    },
    {
      name: "--inspect-publish-uid",
      description: "Comma separated list of destinations for inspector uid",
      args: { name: "destinations" },
    },
    {
      name: "--disable-sigusr1",
      description:
        "Disable inspector thread to be listening for SIGUSR1 signal",
    },
    // Diagnostic reports
    {
      name: "--report-uncaught-exception",
      description: "Generate diagnostic report on uncaught exceptions",
    },
    {
      name: "--report-on-fatalerror",
      description: "Generate diagnostic report on fatal (internal) errors",
    },
    {
      name: "--report-on-signal",
      description: "Generate diagnostic report upon receiving signals",
    },
    {
      name: "--report-signal",
      description: "Causes diagnostic report to be produced on provided signal",
      args: { name: "signal" },
    },
    {
      name: "--report-compact",
      description: "Output compact single-line JSON",
    },
    {
      name: ["--report-directory", "--report-dir"],
      description: "Define custom report pathname",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--report-filename",
      description: "Define custom report file name",
      args: { name: "filename" },
    },
    {
      name: "--report-exclude-env",
      description: "Exclude environment variables when generating report",
    },
    {
      name: "--report-exclude-network",
      description: "Exclude network interface diagnostics",
    },
    // Profiling / heap snapshots
    {
      name: "--cpu-prof",
      description:
        "Start the V8 CPU profiler on start up and write the CPU profile to disk before exit",
    },
    {
      name: "--cpu-prof-dir",
      description:
        "Directory where the V8 profiles generated by --cpu-prof will be placed",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--cpu-prof-interval",
      description: "Sampling interval in microseconds for the V8 CPU profile",
      args: { name: "microseconds" },
    },
    {
      name: "--cpu-prof-name",
      description: "File name of the V8 CPU profile generated with --cpu-prof",
      args: { name: "filename" },
    },
    {
      name: "--heap-prof",
      description:
        "Start the V8 heap profiler on start up and write the heap profile to disk before exit",
    },
    {
      name: "--heap-prof-dir",
      description:
        "Directory where the V8 heap profiles generated by --heap-prof will be placed",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--heap-prof-interval",
      description: "Sampling interval in bytes for the V8 heap profile",
      args: { name: "bytes" },
    },
    {
      name: "--heap-prof-name",
      description:
        "File name of the V8 heap profile generated with --heap-prof",
      args: { name: "filename" },
    },
    {
      name: "--heapsnapshot-near-heap-limit",
      description:
        "Generate heap snapshots whenever V8 is approaching the heap limit",
      args: { name: "max-count" },
    },
    {
      name: "--heapsnapshot-signal",
      description: "Generate heap snapshot on specified signal",
      args: { name: "signal" },
    },
    {
      name: "--diagnostic-dir",
      description: "Set dir for all output files",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--prof",
      description: "Generate V8 profiler output",
    },
    {
      name: "--prof-process",
      description: "Process V8 profiler output generated using --prof",
    },
    {
      name: "--track-heap-objects",
      description: "Track heap object allocations for heap snapshots",
    },
    // Snapshot / single executable application
    {
      name: "--build-snapshot",
      description: "Generate a snapshot blob when the process exits",
    },
    {
      name: "--build-snapshot-config",
      description:
        "Generate a snapshot blob when the process exits using a JSON configuration in the specified path",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--snapshot-blob",
      description:
        "Path to the snapshot blob used to build or restore application state",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--build-sea",
      description: "Build a Node.js single executable application",
      args: { name: "config", template: "filepaths" },
    },
    {
      name: "--experimental-sea-config",
      description:
        "Generate a blob that can be embedded into the single executable application",
      args: { name: "path", template: "filepaths" },
    },
    // TLS / OpenSSL / CA stores
    {
      name: "--tls-min-v1.0",
      description: "Set default TLS minimum to TLSv1.0",
    },
    {
      name: "--tls-min-v1.1",
      description: "Set default TLS minimum to TLSv1.1",
    },
    {
      name: "--tls-min-v1.2",
      description: "Set default TLS minimum to TLSv1.2",
    },
    {
      name: "--tls-min-v1.3",
      description: "Set default TLS minimum to TLSv1.3",
    },
    {
      name: "--tls-max-v1.2",
      description: "Set default TLS maximum to TLSv1.2",
    },
    {
      name: "--tls-max-v1.3",
      description: "Set default TLS maximum to TLSv1.3",
    },
    {
      name: "--tls-cipher-list",
      description: "Use an alternative default TLS cipher list",
      args: { name: "list" },
    },
    {
      name: "--tls-keylog",
      description: "Log TLS decryption keys to named file for traffic analysis",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--trace-tls",
      description: "Prints TLS packet trace information to stderr",
    },
    {
      name: "--openssl-config",
      description: "Load OpenSSL configuration from the specified file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--openssl-legacy-provider",
      description: "Enable OpenSSL 3.0 legacy provider",
    },
    {
      name: "--openssl-shared-config",
      description: "Enable OpenSSL shared configuration",
    },
    {
      name: "--enable-fips",
      description: "Enable FIPS crypto at startup",
    },
    {
      name: "--force-fips",
      description: "Force FIPS crypto (cannot be disabled)",
    },
    {
      name: "--use-bundled-ca",
      description: "Use bundled CA store",
    },
    {
      name: "--use-openssl-ca",
      description: "Use OpenSSL's default CA store",
    },
    {
      name: "--use-system-ca",
      description: "Use system's CA store",
    },
    {
      name: "--secure-heap",
      description: "Total size of the OpenSSL secure heap",
      args: { name: "bytes" },
    },
    {
      name: "--secure-heap-min",
      description: "Minimum allocation size from the OpenSSL secure heap",
      args: { name: "bytes" },
    },
    // Tracing
    {
      name: "--trace-env",
      description: "Print accesses to the environment variables",
    },
    {
      name: "--trace-env-js-stack",
      description:
        "Print accesses to the environment variables and the JavaScript stack trace",
    },
    {
      name: "--trace-env-native-stack",
      description:
        "Print accesses to the environment variables and the native stack trace",
    },
    {
      name: "--trace-event-categories",
      description: "Comma separated list of trace event categories to record",
      args: { name: "categories" },
    },
    {
      name: "--trace-event-file-pattern",
      description:
        "Template string specifying the filepath for the trace-events data",
      args: { name: "pattern" },
    },
    {
      name: "--trace-exit",
      description: "Show stack trace when an environment exits",
    },
    {
      name: "--trace-promises",
      description: "Show stack traces on promise initialization and resolution",
    },
    {
      name: "--trace-require-module",
      description: "Print access to require(esm)",
      args: { name: "mode", suggestions: ["all", "no-node-modules"] },
    },
    {
      name: "--trace-sigint",
      description: "Enable printing JavaScript stacktrace on SIGINT",
    },
    {
      name: "--trace-sync-io",
      description:
        "Show stack trace when use of sync IO is detected after the first tick",
    },
    {
      name: "--trace-uncaught",
      description: "Show stack traces for the throw behind uncaught exceptions",
    },
    // Watch mode additions
    {
      name: "--watch-kill-signal",
      description: "Kill signal to send to the process on watch mode restarts",
      args: { name: "signal" },
    },
    // Memory / V8 passthrough (from node --help)
    {
      name: "--max-old-space-size-percentage",
      description:
        "Set V8's max old space size as a percentage of available memory",
      args: { name: "percentage" },
    },
    {
      name: "--max-http-header-size",
      description: "Set the maximum size of HTTP headers",
      args: { name: "bytes" },
    },
    {
      name: "--v8-pool-size",
      description: "Set V8's thread pool size",
      args: { name: "number" },
    },
    {
      name: "--v8-options",
      description: "Print V8 command line options",
    },
    {
      name: "--expose-gc",
      description: "Expose gc extension",
    },
    {
      name: "--jitless",
      description: "Disable runtime allocation of executable memory",
    },
    {
      name: "--disallow-code-generation-from-strings",
      description: "Disallow eval and friends",
    },
    {
      name: "--disable-proto",
      description: "Disable Object.prototype.__proto__",
      args: { name: "mode" },
    },
    {
      name: "--frozen-intrinsics",
      description: "Experimental frozen intrinsics support",
    },
    {
      name: "--zero-fill-buffers",
      description:
        "Automatically zero-fill all newly allocated Buffer instances",
    },
    {
      name: "--interpreted-frames-native-stack",
      description:
        "Help system profilers to translate JavaScript interpreted frames",
    },
    {
      name: "--disable-wasm-trap-handler",
      description: "Disable trap-handler-based WebAssembly bound checks",
    },
    // Experimental features
    {
      name: "--experimental-addon-modules",
      description: "Experimental import support for addons",
    },
    {
      name: "--experimental-eventsource",
      description: "Experimental EventSource API",
    },
    {
      name: "--experimental-ffi",
      description: "Experimental node:ffi module",
    },
    {
      name: "--experimental-network-inspection",
      description: "Experimental network inspection support",
    },
    {
      name: "--experimental-inspector-network-resource",
      description: "Experimental load network resources via the inspector",
    },
    {
      name: "--experimental-storage-inspection",
      description: "Experimental storage inspection support",
    },
    {
      name: "--experimental-worker-inspection",
      description: "Experimental worker inspection support",
    },
    {
      name: "--experimental-stream-iter",
      description: "Experimental iterable streams API (node:stream/iter)",
    },
    {
      name: "--experimental-vfs",
      description: "Experimental node:vfs module",
    },
    {
      name: "--experimental-print-required-tla",
      description: "Print pending top-level await",
    },
    {
      name: "--no-experimental-sqlite",
      description: "Experimental node:sqlite module",
    },
    {
      name: "--no-experimental-websocket",
      description: "Experimental WebSocket API",
    },
    {
      name: ["--webstorage", "--no-experimental-webstorage"],
      description: "Experimental Web Storage API",
    },
    {
      name: "--no-experimental-global-navigator",
      description: "Expose experimental Navigator API on the global scope",
    },
    {
      name: "--no-experimental-repl-await",
      description: "Experimental await keyword support in REPL",
    },
    // Addons / runtime misc
    {
      name: "--no-addons",
      description: "Disable loading native addons",
    },
    {
      name: "--force-context-aware",
      description: "Disable loading non-context-aware addons",
    },
    {
      name: "--force-node-api-uncaught-exceptions-policy",
      description:
        "Enforces 'uncaughtException' event on Node API asynchronous callbacks",
    },
    {
      name: "--no-async-context-frame",
      description:
        "Improve AsyncLocalStorage performance with AsyncContextFrame",
    },
    {
      name: "--no-force-async-hooks-checks",
      description: "Disable checks for async_hooks",
    },
    {
      name: "--no-global-search-paths",
      description: "Disable global module search paths",
    },
    {
      name: [
        "--enable-network-family-autoselection",
        "--no-network-family-autoselection",
      ],
      description: "Disable network address family autodetection algorithm",
    },
    {
      name: "--network-family-autoselection-attempt-timeout",
      description:
        "Sets the default value for the network family autoselection attempt timeout",
      args: { name: "ms" },
    },
    {
      name: "--insecure-http-parser",
      description:
        "Use an insecure HTTP parser that accepts invalid HTTP headers",
    },
    {
      name: "--node-memory-debug",
      description:
        "Run with extra debug checks for memory leaks in Node.js itself",
    },
    {
      name: "--icu-data-dir",
      description: "Set ICU data load path to dir",
      args: { name: "directory", template: "folders" },
    },
    {
      name: "--localstorage-file",
      description: "File used to persist localStorage data",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "--use-largepages",
      description: "Map the Node.js static code to large pages",
      args: { name: "mode", suggestions: ["off", "on", "silent"] },
    },
    {
      name: "--completion-bash",
      description: "Print source-able bash completion script",
    },
    {
      name: "--enable-etw-stack-walking",
      description: "Provides heap data to ETW Windows native tracing",
    },
  ],
  generateSpec: async (tokens, executeShellCommand) => {
    if (
      (
        await executeShellCommand({
          command: "bash",
          args: ["-c", "isAdonisJsonPresentCommand"],
        })
      ).status === 0
    ) {
      return {
        name: "node",
        subcommands: [
          {
            name: "ace",
            description: "Run AdonisJS command-line",
            options: [
              {
                name: ["-h", "--help"],
                description: "Display AdonisJS Ace help",
              },
              {
                name: ["-v", "--version"],
                description: "Display AdonisJS version",
              },
            ],
            subcommands: [
              {
                name: "build",
                description:
                  "Compile project from Typescript to Javascript. Also compiles the frontend assets if using webpack encore",
                options: [
                  {
                    name: ["-prod", "--production"],
                    description: "Build for production",
                  },
                  {
                    name: "--assets",
                    description:
                      "Build frontend assets when webpack encore is installed",
                  },
                  {
                    name: "--no-assets",
                    description: "Disable building assets",
                  },
                  {
                    name: "--ignore-ts-errors",
                    description:
                      "Ignore typescript errors and complete the build process",
                  },
                  {
                    name: "--tsconfig",
                    description:
                      "Path to the TypeScript project configuration file",
                    args: {
                      name: "path",
                      description: "Path to tsconfig.json",
                    },
                  },
                  {
                    name: "--encore-args",
                    requiresSeparator: true,
                    insertValue: "--encore-args='{cursor}'",
                    description:
                      "CLI options to pass to the encore command line",
                  },
                  {
                    name: "--client",
                    args: {
                      name: "name",
                    },
                    description:
                      "Select the package manager to decide which lock file to copy to the build folder",
                  },
                ],
              },
              {
                name: ["configure", "invoke"],
                description: "Configure a given AdonisJS package",
                args: {
                  name: "name",
                  description: "Name of the package you want to configure",
                },
                subcommands: [
                  {
                    name: "@adonisjs/auth",
                    description: "Trigger auto configuring auth package",
                  },
                  {
                    name: "@adonisjs/shield",
                    description: "Trigger auto configuring shield package",
                  },
                  {
                    name: "@adonisjs/redis",
                    description: "Trigger auto configuring redis package",
                  },
                  {
                    name: "@adonisjs/mail",
                    description: "Trigger auto configuring mail package",
                  },
                ],
              },
              {
                name: "repl",
                description: "Start a new REPL session",
              },
              {
                name: "serve",
                description:
                  "Start the AdonisJS HTTP server, along with the file watcher. Also starts the webpack dev server when webpack encore is installed",
                options: [
                  {
                    name: "--assets",
                    description:
                      "Start webpack dev server when encore is installed",
                  },
                  {
                    name: "--no-assets",
                    description: "Disable webpack dev server",
                  },
                  {
                    name: ["-w", "--watch"],
                    description:
                      "Watch for file changes and re-start the HTTP server on change",
                  },
                  {
                    name: ["-p", "--poll"],
                    description:
                      "Detect file changes by polling files instead of listening to filesystem events",
                  },
                  {
                    name: "--node-args",
                    requiresSeparator: true,
                    insertValue: "--node-args='{cursor}'",
                    description: "CLI options to pass to the node command line",
                  },
                  {
                    name: "--encore-args",
                    requiresSeparator: true,
                    insertValue: "--encore-args='{cursor}'",
                    description:
                      "CLI options to pass to the encore command line",
                  },
                ],
              },
              {
                name: "db:seed",
                description: "Execute database seeder files",
                options: [
                  {
                    name: ["-c", "--connection"],
                    description:
                      "Define a custom database connection for the seeders",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: ["-i", "--interactive"],
                    description: "Run seeders in interactive mode",
                  },
                  {
                    name: ["-f", "--files"],
                    args: {
                      name: "file",
                      isVariadic: true,
                      template: "filepaths",
                    },
                    description:
                      "Define a custom set of seeders files names to run",
                  },
                ],
              },
              {
                name: "dump:rcfile",
                description:
                  "Dump contents of .adonisrc.json file along with defaults",
              },
              {
                name: "generate:key",
                description: "Generate a new APP_KEY secret",
              },
              {
                name: "generate:manifest",
                description:
                  "Generate ace commands manifest file. Manifest file speeds up commands lookup",
              },
              {
                name: "list:routes",
                description: "List application routes",
              },
              {
                name: "make:command",
                description: "Make a new ace command",
              },
              {
                name: "make:controller",
                description: "Make a new HTTP controller",
                args: {
                  name: "name",
                  description: "Name of the controller class",
                },
                options: [
                  {
                    name: ["-r", "--resource"],
                    description:
                      "Add resourceful methods to the controller class",
                  },
                  {
                    name: ["-e", "--exact"],
                    description:
                      "Create the controller with the exact name as provided",
                  },
                ],
              },
              {
                name: "make:exception",
                description: "Make a new custom exception class",
              },
              {
                name: "make:listener",
                description: "Make a new event listener class",
              },
              {
                name: "make:mailer",
                description: "Make a new mailer class",
                args: {
                  name: "name",
                  description: "Mailer class name",
                },
              },
              {
                name: "make:middleware",
                description: "Make a new middleware",
                args: {
                  name: "name",
                  description: "Middleware class name",
                },
              },
              {
                name: "make:migration",
                description: "Make a new migration file",
                args: {
                  name: "name",
                  description: "Name of the migration file",
                },
                options: [
                  {
                    name: "--connection",
                    description:
                      "The connection flag is used to lookup the directory for the migration file",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--folder",
                    description: "Pre-select a migration directory",
                    args: {
                      name: "name",
                      template: "filepaths",
                    },
                  },
                  {
                    name: "--create",
                    description:
                      "Define the table name for creating a new table",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--table",
                    description:
                      "Define the table name for altering an existing table",
                    args: {
                      name: "name",
                    },
                  },
                ],
              },
              {
                name: "make:model",
                description: "Make a new Lucid model",
                args: {
                  name: "name",
                  description: "Name of the model class",
                },
                options: [
                  {
                    name: ["-m", "--migration"],
                    description: "Generate the migration for the model",
                  },
                  {
                    name: ["-c", "--controller"],
                    description: "Generate the controller for the model",
                  },
                ],
              },
              {
                name: "make:prldfile",
                description: "Make a new preload file",
                subcommands: [
                  {
                    name: "events",
                    description: "Make events preload file",
                  },
                ],
              },
              {
                name: "make:provider",
                description: "Make a new provider class",
              },
              {
                name: "make:seeder",
                description: "Make a new Seeder file",
                args: {
                  name: "name",
                  description: "Name of the seeder class",
                },
              },
              {
                name: "make:validator",
                description: "Make a new validator",
                args: {
                  name: "name",
                  description: "Name of the validator class",
                },
                options: [
                  {
                    name: ["-e", "--exact"],
                    description:
                      "Create the validator with the exact name as provided",
                  },
                ],
              },
              {
                name: "make:view",
                description: "Make a new view template",
                args: {
                  name: "name",
                  description: "Name of the view",
                },
                options: [
                  {
                    name: ["-e", "--exact"],
                    description:
                      "Create the template file with the exact name as provided",
                  },
                ],
              },
              {
                name: "migration:rollback",
                description: "Rollback migrations to a given batch number",
                options: [
                  {
                    name: ["-c", "--connection"],
                    description: "Define a custom database connection",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--force",
                    description:
                      "Explicitly force to run migrations in production",
                    isDangerous: true,
                  },
                  {
                    name: "--dry-run",
                    description:
                      "Print SQL queries, instead of running the migrations",
                  },
                  {
                    name: "--batch",
                    args: {
                      name: "number",
                      description: "Use 0 to rollback to initial state",
                    },
                    description: "Define custom batch number for rollback",
                  },
                ],
              },
              {
                name: "migration:run",
                description: "Run pending migrations",
                options: [
                  {
                    name: ["-c", "--connection"],
                    description: "Define a custom database connection",
                    args: {
                      name: "name",
                    },
                  },
                  {
                    name: "--force",
                    description:
                      "Explicitly force to run migrations in production",
                    isDangerous: true,
                  },
                  {
                    name: "--dry-run",
                    description:
                      "Print SQL queries, instead of running the migrations",
                  },
                ],
              },
              {
                name: "migration:status",
                description: "Check migrations current status",
              },
            ],
          },
        ],
      };
    }
  },
};

export default completionSpec;
