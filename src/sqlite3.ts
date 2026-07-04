import { filepaths } from "@fig/autocomplete-generators";

const dbFilepath = filepaths({
  extensions: ["sql", "sqlite", "sqlite3", "db"],
});

const completionSpec: Fig.Spec = {
  name: "sqlite3",
  description: "A command line interface for SQLite version 3",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  args: {
    name: "FILENAME",
    generators: dbFilepath,
  },
  options: [
    {
      name: "--",
      description: "Treat no subsequent arguments as options",
    },
    {
      name: "-A",
      description: 'Run ".archive ARGS" and exit',
      args: {
        name: "ARGS",
        isVariadic: true,
      },
    },
    {
      name: "-append",
      description: "Append the database to the end of the file",
    },
    {
      name: "-ascii",
      description: "Set output mode to 'ascii'",
    },
    {
      name: "-bail",
      description: "Stop after hitting an error",
    },
    {
      name: "-batch",
      description: "Force batch I/O",
    },
    {
      name: "-box",
      description: "Set output mode to 'box'",
    },
    {
      name: "-column",
      description: "Set output mode to 'column'",
    },
    {
      name: "-cmd",
      description: 'Run "COMMAND" before reading stdin',
      args: {
        name: "COMMAND",
      },
    },
    {
      name: "-csv",
      description: "Set output mode to 'csv'",
    },
    {
      name: "-deserialize",
      description: "Open the database using sqlite3_deserialize()",
    },
    {
      name: "-echo",
      description: "Print inputs before execution",
    },
    {
      name: "-escape",
      description: "Set ctrl-char escape mode",
      args: {
        name: "T",
        suggestions: ["symbol", "ascii", "off"],
      },
    },
    {
      name: "-init",
      description: "Read/process named file",
      args: {
        name: "FILENAME",
        generators: dbFilepath,
      },
    },
    {
      name: "-header",
      description: "Turn headers on",
    },
    {
      name: "-noheader",
      description: "Turn headers off",
    },
    {
      name: "-help",
      description: "Show help message",
    },
    {
      name: "-hexkey",
      description: "Hexadecimal encryption key",
      args: {
        name: "KEY",
      },
    },
    {
      name: "-html",
      description: "Set output mode to HTML",
    },
    {
      name: "-interactive",
      description: "Force interactive I/O",
    },
    {
      name: "-key",
      description: "Raw encryption key",
      args: {
        name: "KEY",
      },
    },
    {
      name: "-json",
      description: "Set output mode to 'json'",
    },
    {
      name: "-line",
      description: "Set output mode to 'line'",
    },
    {
      name: "-list",
      description: "Set output mode to 'list'",
    },
    {
      name: "-lookaside",
      description: "Use N entries of SZ bytes for lookaside memory",
      args: [
        {
          name: "SIZE",
        },
        {
          name: "N",
        },
      ],
    },
    {
      name: "-markdown",
      description: "Set output mode to 'markdown'",
    },
    {
      name: "-maxsize",
      description: "Maximum size for a --deserialize database",
      args: {
        name: "N",
      },
    },
    {
      name: "-memtrace",
      description: "Trace all memory allocations and deallocations",
    },
    {
      name: "-mmap",
      description: "Default mmap size set to N",
      args: {
        name: "N",
      },
    },
    {
      name: "-newline",
      description: "Set output row separator",
      args: {
        name: "SEP",
        default: "'\\n'",
      },
    },
    {
      name: "-nofollow",
      description: "Refuse to open symbolic links to database files",
    },
    {
      name: "-nonce",
      description: "Set the safe-mode escape nonce",
      args: {
        name: "STRING",
      },
    },
    {
      name: "-no-rowid-in-view",
      description: "Disable rowid-in-view using sqlite3_config()",
    },
    {
      name: "-nullvalue",
      description: "Set text string for NULL values",
      args: {
        name: "TEXT",
        default: "''",
      },
    },
    {
      name: "-pagecache",
      description: "Use N slots of SZ bytes each for page cache memory",
      args: [
        {
          name: "SIZE",
        },
        {
          name: "N",
        },
      ],
    },
    {
      name: "-pcachetrace",
      description: "Trace all page cache operations",
    },
    {
      name: "-quote",
      description: "Set output mode to 'quote'",
    },
    {
      name: "-readonly",
      description: "Open the database read-only",
    },
    {
      name: "-safe",
      description: "Enable safe-mode",
    },
    {
      name: "-separator",
      description: "Set output column separator",
      args: {
        name: "SEP",
        default: "'|'",
      },
    },
    {
      name: "-stats",
      description: "Print memory stats before each finalize",
    },
    {
      name: "-textkey",
      description: "Text to be hashed into the encryption key",
      args: {
        name: "PASSPHRASE",
      },
    },
    {
      name: "-table",
      description: "Set output mode to 'table'",
    },
    {
      name: "-tabs",
      description: "Set output mode to 'tabs'",
    },
    {
      name: "-unsafe-testing",
      description: "Allow unsafe commands and modes for testing",
    },
    {
      name: "-version",
      description: "Show SQLite version",
    },
    {
      name: "-vfs",
      description: "Use NAME as the default VFS",
      args: {
        name: "NAME",
      },
    },
    {
      name: "-vfstrace",
      description: "Enable tracing of all VFS calls",
    },
    {
      name: "-zip",
      description: "Open the file as a ZIP Archive",
    },
  ],
};

export default completionSpec;
