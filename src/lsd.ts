const completionSpec: Fig.Spec = {
  name: "lsd",
  description: "An ls command with a lot of pretty colors and some other stuff",
  args: {
    isVariadic: true,
    template: "folders",
    default: ".",
  },
  options: [
    {
      name: ["-1", "--oneline"],
      description: "Display one entry per line",
    },
    {
      name: ["-A", "--almost-all"],
      description: "Do not list implied . and",
    },
    {
      name: ["-a", "--all"],
      description: "Do not ignore entries starting with",
    },
    {
      name: ["-d", "--directory-only"],
      description:
        "Display directories themselves, and not their contents (recursively when used with --tree)",
    },
    {
      name: ["-F", "--classify"],
      description:
        "Append indicator (one of */=>@|) at the end of the file names",
    },
    {
      name: ["-h", "--human-readable"],
      description:
        "For ls compatibility purposes ONLY, currently set by default",
    },
    {
      name: ["-i", "--inode"],
      description: "Display the index number of each file",
    },
    {
      name: ["-L", "--dereference"],
      description:
        "When showing file information for a symbolic link, show information for the file the link references rather than for the link itself",
    },
    {
      name: ["-l", "--long"],
      description: "Display the extended file metadata as a table",
    },
    {
      name: ["-R", "--recursive"],
      description: "Recurse into directories",
    },
    {
      name: ["-r", "--reverse"],
      description: "Reverse the order of the sort",
    },
    {
      name: ["-S", "--sizesort"],
      description: "Sort by size",
    },
    {
      name: ["-t", "--timesort"],
      description: "Sort by time modified",
    },
    {
      name: ["-v", "--versionsort"],
      description: "Natural sort of (version) numbers within text",
    },
    {
      name: ["-G", "--gitsort"],
      description: "Sort by git status",
    },
    {
      name: ["-U", "--no-sort"],
      description: "Do not sort. List entries in directory order",
    },
    {
      name: "--classic",
      description: "Enable classic mode (no colors or icons)",
    },
    {
      name: ["-X", "--extensionsort"],
      description: "Sort by file extension",
    },
    {
      name: "--help",
      description: "Prints help information",
    },
    {
      name: "--ignore-config",
      description: "Ignore the configuration file",
    },
    {
      name: "--no-symlink",
      description: "Do not display symlink target",
    },
    {
      name: "--total-size",
      description: "Display the total size of directories",
    },
    {
      name: "--tree",
      description: "Recurse into directories and present the result as a tree",
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
    {
      name: "--config-file",
      description: "Provide a custom lsd configuration file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--group-directories-first",
      description: "Groups the directories at the top before the files",
    },
    {
      name: ["-g", "--git"],
      description:
        "Show git status on file and directory, only when used with --long option",
    },
    {
      name: ["-Z", "--context"],
      description: "Print security context (label) of each file",
    },
    {
      name: "--header",
      description: "Display block headers",
    },
    {
      name: "--truncate-owner-after",
      description:
        "Truncate the user and group names if they exceed a certain number of characters",
      args: {
        name: "num",
      },
    },
    {
      name: "--truncate-owner-marker",
      description:
        "Truncation marker appended to a truncated user or group name",
      args: {
        name: "str",
      },
    },
    {
      name: ["-N", "--literal"],
      description: "Print entry names without quoting",
    },
    {
      name: "--permission",
      description: "How to display permissions",
      args: {
        name: "mode",
        suggestions: ["rwx", "octal", "attributes", "disable"],
      },
    },
    {
      name: "--hyperlink",
      description: "Attach hyperlink to filenames",
      args: {
        name: "mode",
        default: "never",
        suggestions: ["always", "auto", "never"],
      },
    },
    {
      name: "--blocks",
      description:
        "Specify the blocks that will be displayed and in what order",
      args: {
        name: "blocks",
        suggestions: [
          "permission",
          "user",
          "group",
          "context",
          "size",
          "date",
          "name",
          "inode",
          "links",
          "git",
        ],
      },
    },
    {
      name: "--color",
      description: "When to use terminal colours",
      args: {
        name: "color",
        suggestions: ["always", "auto", "never"],
        default: "auto",
      },
    },
    {
      name: "--date",
      description: "How to display date",
      args: {
        name: "date",
        suggestions: ["date", "locale", "relative", "+date-time-format"],
        default: "date",
      },
    },
    {
      name: "--depth",
      description: "Stop recursing into directories after reaching depth",
      args: {
        name: "num",
      },
    },
    {
      name: "--group-dirs",
      description: "Sort the directories then the files",
      args: {
        name: "group-dirs",
        suggestions: ["none", "first", "last"],
      },
    },
    {
      name: "--icon",
      description: "When to print the icons",
      args: {
        name: "icon",
        suggestions: ["always", "auto", "never"],
        default: "auto",
      },
    },
    {
      name: "--icon-theme",
      description: "Whether to use fancy or unicode icons",
      args: {
        name: "icon-theme",
        suggestions: ["fancy", "unicode"],
        default: "fancy",
      },
    },
    {
      name: "--ignore-glob",
      description:
        "Do not display files/directories with names matching the glob pattern(s). More than one can be specified by repeating the argument",
      args: {
        name: "pattern",
      },
    },
    {
      name: "--size",
      description: "How to display size",
      args: {
        name: "size",
        suggestions: ["default", "short", "bytes"],
        default: "default",
      },
    },
    {
      name: "--sort",
      description: "Sort by WORD instead of name",
      args: {
        name: "WORD",
        suggestions: ["size", "time", "version", "extension", "git", "none"],
      },
    },
  ],
};

export default completionSpec;
