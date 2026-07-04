const completionSpec: Fig.Spec = {
  name: "shfmt",
  description: "Format shell programs",
  options: [
    {
      name: "--version",
      description: "Show version and exit",
    },
    {
      name: ["-l", "--list"],
      description:
        "Error with a list of files whose formatting differs from shfmt",
      args: {
        name: "0",
        isOptional: true,
      },
    },
    {
      name: ["-w", "--write"],
      description: "Write result to file instead of stdout",
    },
    {
      name: ["-d", "--diff"],
      description: "Error with a diff when the formatting differs",
    },
    {
      name: "--apply-ignore",
      description: "Always apply EditorConfig ignore rules",
    },
    {
      name: "--filename",
      description: "Provide a name for the standard input file",
      args: {
        name: "str",
      },
    },
    {
      name: ["-ln", "--language-dialect"],
      description: "bash/posix/mksh/bats/zsh, default 'auto'",
      args: {
        name: "str",
        suggestions: ["bash", "posix", "mksh", "bats", "zsh", "auto"],
      },
    },
    {
      name: ["-p", "--posix"],
      description: "Shorthand for -ln=posix",
    },
    {
      name: ["-s", "--simplify"],
      description: "Simplify the code",
    },
    {
      name: ["-i", "--indent"],
      description: "0 for tabs (default), >0 for number of spaces",
      args: {
        name: "uint",
      },
    },
    {
      name: ["-bn", "--binary-next-line"],
      description: "Binary ops like && and | may start a line",
    },
    {
      name: ["-ci", "--case-indent"],
      description: "Switch cases will be indented",
    },
    {
      name: ["-sr", "--space-redirects"],
      description: "Redirect operators will be followed by a space",
    },
    {
      name: ["-kp", "--keep-padding"],
      description: "Keep column alignment paddings",
    },
    {
      name: ["-fn", "--func-next-line"],
      description: "Function opening braces are placed on a separate line",
    },
    {
      name: ["-mn", "--minify"],
      description: "Minify the code to reduce its size (implies -s)",
    },
    {
      name: ["-f", "--find"],
      description: "Recursively find all shell files and print the paths",
      args: {
        name: "0",
        isOptional: true,
      },
    },
    {
      name: "--to-json",
      description: "Print syntax tree to stdout as a typed JSON",
    },
    {
      name: "--from-json",
      description: "Read syntax tree from stdin as a typed JSON",
    },
  ],
  args: {
    name: "path",
    description: "Files or directories to format",
    template: "filepaths",
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
