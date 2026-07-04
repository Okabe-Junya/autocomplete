const completionSpec: Fig.Spec = {
  name: "glances",
  description: "A cross-platform system monitoring tool",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help message and exit",
    },
    {
      name: ["-V", "--version"],
      description: "Show program's version number and exit",
    },
    {
      name: "--print-completion",
      description: "Print shell completion script",
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "tcsh"],
      },
    },
    {
      name: ["-d", "--debug"],
      description: "Enable debug mode",
    },
    {
      name: ["-C", "--config"],
      description: "Path to the configuration file",
      args: {
        name: "CONF_FILE",
        template: "filepaths",
      },
    },
    {
      name: ["-P", "--plugins"],
      description: "Path to additional plugin directory",
      args: {
        name: "PLUGIN_DIR",
        template: "folders",
      },
    },
    {
      name: ["--modules-list", "--module-list"],
      description: "Display modules (plugins & exports) list and exit",
    },
    {
      name: ["--disable-plugin", "--disable-plugins", "--disable"],
      description: "Disable plugin (comma-separated list or all)",
      args: {
        name: "DISABLE_PLUGIN",
      },
    },
    {
      name: ["--enable-plugin", "--enable-plugins", "--enable"],
      description: "Enable plugin (comma-separated list)",
      args: {
        name: "ENABLE_PLUGIN",
      },
    },
    {
      name: "--disable-process",
      description: "Disable process module",
    },
    {
      name: "--disable-webui",
      description: "Disable the Web Interface",
    },
    {
      name: ["--light", "--enable-light"],
      description: "Light mode for Curses UI (disable all but the top menu)",
    },
    {
      name: ["-0", "--disable-irix"],
      description:
        "Task's cpu usage will be divided by the total number of CPUs",
    },
    {
      name: ["-1", "--percpu", "--per-cpu"],
      description: "Start Glances in per CPU mode",
    },
    {
      name: ["-2", "--disable-left-sidebar"],
      description: "Disable network, disk I/O, FS and sensors modules",
    },
    {
      name: ["-3", "--disable-quicklook"],
      description: "Disable quick look module",
    },
    {
      name: ["-4", "--full-quicklook"],
      description: "Disable all but quick look and load",
    },
    {
      name: ["-5", "--disable-top"],
      description: "Disable top menu (QL, CPU, MEM, SWAP and LOAD)",
    },
    {
      name: ["-6", "--meangpu"],
      description: "Start Glances in mean GPU mode",
    },
    {
      name: "--disable-history",
      description: "Disable stats history",
    },
    {
      name: "--disable-bold",
      description: "Disable bold mode in the terminal",
    },
    {
      name: "--disable-bg",
      description: "Disable background colors in the terminal",
    },
    {
      name: "--enable-irq",
      description: "Enable IRQ module",
    },
    {
      name: "--enable-process-extended",
      description: "Enable extended stats on top process",
    },
    {
      name: "--disable-separator",
      description:
        "Disable separator in the UI (between top and other modules)",
    },
    {
      name: "--disable-cursor",
      description: "Disable cursor (process selection) in the UI",
    },
    {
      name: "--arrow-keys-sort",
      description: "Use arrow keys to sort the process list",
    },
    {
      name: "--sort-processes",
      description: "Sort processes by the given key",
      args: {
        name: "key",
        suggestions: [
          "cpu_percent",
          "memory_percent",
          "username",
          "cpu_times",
          "io_counters",
          "name",
          "cpu_num",
        ],
      },
    },
    {
      name: ["--programs", "--program"],
      description: "Accumulate processes by program",
    },
    {
      name: "--export",
      description: "Enable export module (comma-separated list)",
      args: {
        name: "EXPORT",
      },
    },
    {
      name: "--export-csv-file",
      description: "File path for CSV exporter",
      args: {
        name: "EXPORT_CSV_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--export-csv-overwrite",
      description: "Overwrite existing CSV file",
    },
    {
      name: "--export-json-file",
      description: "File path for JSON exporter",
      args: {
        name: "EXPORT_JSON_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--export-graph-path",
      description: "Folder for Graph exporter",
      args: {
        name: "EXPORT_GRAPH_PATH",
        template: "folders",
      },
    },
    {
      name: "--export-process-filter",
      description:
        "Set the export process filter (comma-separated regular expressions)",
      args: {
        name: "EXPORT_PROCESS_FILTER",
      },
    },
    {
      name: ["-c", "--client"],
      description:
        "Connect to a Glances server by IPv4/IPv6 address or hostname",
      args: {
        name: "CLIENT",
      },
    },
    {
      name: ["-s", "--server"],
      description: "Run Glances in server mode",
    },
    {
      name: "--browser",
      description: "Start TUI Central Glances Browser",
    },
    {
      name: "--disable-autodiscover",
      description: "Disable autodiscover feature",
    },
    {
      name: ["-p", "--port"],
      description: "Define the client/server TCP port [default: 61209]",
      args: {
        name: "PORT",
      },
    },
    {
      name: ["-B", "--bind"],
      description: "Bind server to the given IPv4/IPv6 address or hostname",
      args: {
        name: "BIND_ADDRESS",
      },
    },
    {
      name: "-u",
      description: "Use or define the given username",
      args: {
        name: "USERNAME_USED",
      },
    },
    {
      name: "--username",
      description: "Define or use a username",
    },
    {
      name: "--password",
      description: "Define a client/server password",
    },
    {
      name: "--snmp-community",
      description: "SNMP community",
      args: {
        name: "SNMP_COMMUNITY",
      },
    },
    {
      name: "--snmp-port",
      description: "SNMP port",
      args: {
        name: "SNMP_PORT",
      },
    },
    {
      name: "--snmp-version",
      description: "SNMP version (1, 2c or 3)",
      args: {
        name: "SNMP_VERSION",
        suggestions: ["1", "2c", "3"],
      },
    },
    {
      name: "--snmp-user",
      description: "SNMP username (only for SNMPv3)",
      args: {
        name: "SNMP_USER",
      },
    },
    {
      name: "--snmp-auth",
      description: "SNMP authentication key (only for SNMPv3)",
      args: {
        name: "SNMP_AUTH",
      },
    },
    {
      name: "--snmp-force",
      description: "Force SNMP mode",
    },
    {
      name: ["-t", "--time"],
      description: "Set minimum refresh rate in seconds [default: 2 sec]",
      args: {
        name: "TIME",
      },
    },
    {
      name: ["-w", "--webserver"],
      description: "Run Glances in web server mode",
    },
    {
      name: "--enable-mcp",
      description:
        "Enable the MCP (Model Context Protocol) server alongside the web server",
    },
    {
      name: "--mcp-path",
      description: "Set the MCP server mount path [default: /mcp]",
      args: {
        name: "MCP_PATH",
      },
    },
    {
      name: "--cached-time",
      description: "Set the server cache time [default: 1 sec]",
      args: {
        name: "CACHED_TIME",
      },
    },
    {
      name: "--stop-after",
      description: "Stop Glances after n refresh",
      args: {
        name: "STOP_AFTER",
      },
    },
    {
      name: "--open-web-browser",
      description: "Try to open the Web UI in the default Web browser",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not display the curses interface",
    },
    {
      name: ["-f", "--process-filter"],
      description: "Set the process filter pattern (regular expression)",
      args: {
        name: "PROCESS_FILTER",
      },
    },
    {
      name: "--process-focus",
      description:
        "Set a process list to focus on (comma-separated list of Glances filter)",
      args: {
        name: "PROCESS_FOCUS",
      },
    },
    {
      name: "--process-short-name",
      description: "Force short name for processes name",
    },
    {
      name: "--process-long-name",
      description: "Force long name for processes name",
    },
    {
      name: "--stdout",
      description:
        "Display stats to stdout, one stat per line (comma-separated list)",
      args: {
        name: "STDOUT",
      },
    },
    {
      name: "--stdout-json",
      description:
        "Display stats to stdout, JSON format (comma-separated list)",
      args: {
        name: "STDOUT_JSON",
      },
    },
    {
      name: "--stdout-csv",
      description: "Display stats to stdout, CSV format (comma-separated list)",
      args: {
        name: "STDOUT_CSV",
      },
    },
    {
      name: "--issue",
      description: "Test all plugins and exit",
    },
    {
      name: "--trace-malloc",
      description:
        "Trace memory allocation and display it at the end of the process",
    },
    {
      name: "--memory-leak",
      description: "Test memory leak",
    },
    {
      name: "--api-doc",
      description: "Display Python API documentation",
    },
    {
      name: "--api-restful-doc",
      description: "Display Restful API documentation",
    },
    {
      name: "--hide-kernel-threads",
      description:
        "Hide kernel threads in the process list (not available on Windows)",
    },
    {
      name: ["-b", "--byte"],
      description: "Display network rate in bytes per second",
    },
    {
      name: "--diskio-show-ramfs",
      description: "Show RAM Fs in the DiskIO plugin",
    },
    {
      name: "--diskio-iops",
      description: "Show IO per second in the DiskIO plugin",
    },
    {
      name: "--diskio-latency",
      description: "Show IO latency in the DiskIO plugin",
    },
    {
      name: "--fahrenheit",
      description: "Display temperature in Fahrenheit (default is Celsius)",
    },
    {
      name: "--fs-free-space",
      description: "Display FS free space instead of used",
    },
    {
      name: "--sparkline",
      description: "Display sparklines instead of bar in the curses interface",
    },
    {
      name: "--disable-unicode",
      description: "Disable unicode characters in the curses interface",
    },
    {
      name: "--hide-public-info",
      description: "Hide public information (like public IP)",
    },
    {
      name: "--disable-config-exec",
      description: "Disable backtick command execution in configuration values",
    },
    {
      name: "--disable-check-update",
      description: "Disable online Glances version check",
    },
    {
      name: "--strftime",
      description:
        "Strftime format string for displaying current date in standalone mode",
      args: {
        name: "STRFTIME_FORMAT",
      },
    },
    {
      name: ["--fetch", "--stdout-fetch"],
      description: "Display a (neo)fetch like summary and exit",
    },
    {
      name: ["--fetch-template", "--stdout-fetch-template"],
      description: "Overwrite default fetch template file",
      args: {
        name: "FETCH_TEMPLATE",
        template: "filepaths",
      },
    },
  ],
};

export default completionSpec;
