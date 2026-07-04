const completionSpec: Fig.Spec = {
  name: "htop",
  description: "Improved top (interactive process viewer)",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for htop",
    },
    {
      name: ["--no-color", "-C"],
      description: "Use a monochrome color scheme",
    },
    {
      name: ["--delay", "-d"],
      description: "Delay between updates, in tenths of sec",
      args: {
        name: "delay",
        suggestions: ["10", "1", "60"],
      },
    },
    {
      name: ["--filter", "-F"],
      description: "Filter commands",
      args: {
        name: "filter",
      },
    },
    {
      name: "--no-function-bar",
      description: "Hide the function bar",
    },
    {
      name: ["--highlight-changes", "-H"],
      description: "Highlight new and old processes",
      args: {
        name: "delay",
        description: "Delay between updates of highlights, in tenths of sec",
        suggestions: ["10", "1", "60"],
        isOptional: true,
      },
    },
    {
      name: ["--no-mouse", "-M"],
      description: "Disable the mouse",
    },
    {
      name: "--no-meters",
      description: "Hide meters",
    },
    {
      name: ["--max-iterations", "-n"],
      description: "Exit htop after NUMBER iterations/frame updates",
      args: {
        name: "NUMBER",
      },
    },
    {
      name: ["--pid", "-p"],
      description: "Show only the given PIDs",
      args: {
        name: "PID",
        isVariadic: true,
      },
    },
    {
      name: "--readonly",
      description: "Disable all system and process changing features",
    },
    {
      name: ["--sort-key", "-s"],
      description:
        "Sort by COLUMN in list view (try --sort-key=help for a list)",
      args: {
        name: "column",
      },
    },
    {
      name: ["--tree", "-t"],
      description: "Show the tree view",
    },
    {
      name: ["--user", "-u"],
      description: "Show only processes for a given user (or $USER)",
      args: {
        name: "user",
        isOptional: true,
        suggestions: ["$USER"],
      },
    },
    {
      name: ["--no-unicode", "-U"],
      description: "Do not use unicode but plain ASCII",
    },
    {
      name: ["--version", "-V"],
      description: "Print version info",
    },
  ],
};
export default completionSpec;
