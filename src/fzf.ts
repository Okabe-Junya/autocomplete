const completionSpec: Fig.Spec = {
  name: "fzf",
  description: "A general-purpose command-line fuzzy finder",
  options: [
    {
      name: ["-e", "--exact"],
      description: "Enables exact-match",
    },
    {
      name: ["+x", "--no-extended"],
      description: "Disables extended-search mode",
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Case-insensitive match",
      exclusiveOn: ["+i", "--no-ignore-case"],
    },
    {
      name: ["+i", "--no-ignore-case"],
      description: "Case-sensitive match",
      exclusiveOn: ["-i", "--ignore-case"],
    },
    {
      name: "--smart-case",
      description: "Smart-case match",
    },
    {
      name: "--scheme",
      description: "Scoring scheme",
      args: {
        name: "SCHEME",
        default: "default",
        suggestions: ["default", "path", "history"],
      },
    },
    {
      name: ["-n", "--nth"],
      description:
        "Comma-separated list of field index expressions for limiting search scope",
      args: {
        name: "index expressions",
        description: "Non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: "--with-nth",
      description:
        "Transform the presentation of each line using field index expressions",
      args: {
        name: "index expressions",
        description: "Non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: "--accept-nth",
      description: "Define which fields to print on accept",
      args: {
        name: "index expressions",
        description: "Non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: ["-d", "--delimiter"],
      description: "Field delimiter regex (default: AWK-style)",
      args: {
        name: "STR",
        default: "AWK-style",
      },
    },
    {
      name: ["+s", "--no-sort"],
      description: "Do not sort the result",
    },
    {
      name: "--literal",
      description: "Do not normalize latin script letters before matching",
    },
    {
      name: "--tail",
      description: "Maximum number of items to keep in memory",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--disabled",
      description: "Do not perform search",
    },
    {
      name: "--tiebreak",
      description:
        "Comma-separated list of sort criteria to apply when the scores are tied",
      args: {
        name: "criteria",
        default: "length",
        suggestions: ["length", "chunk", "pathname", "begin", "end", "index"],
      },
    },
    {
      name: ["-m", "--multi"],
      description: "Enable multi-select with tab/shift-tab",
      args: {
        name: "MAX",
        isOptional: true,
      },
    },
    {
      name: "--highlight-line",
      description: "Highlight the whole current line",
    },
    {
      name: "--cycle",
      description: "Enable cyclic scroll",
    },
    {
      name: "--wrap",
      description: "Enable line wrap",
      args: {
        name: "MODE",
        isOptional: true,
        default: "char",
        suggestions: ["char", "word"],
      },
    },
    {
      name: "--wrap-sign",
      description: "Indicator for wrapped lines",
      args: {
        name: "STR",
      },
    },
    {
      name: "--no-multi-line",
      description: "Disable multi-line display of items when using --read0",
    },
    {
      name: "--raw",
      description: "Enable raw mode (show non-matching items)",
    },
    {
      name: "--track",
      description: "Track the current selection when the result is updated",
    },
    {
      name: "--id-nth",
      description: "Define item identity fields for cross-reload operations",
      args: {
        name: "index expressions",
        description: "Non-zero integer or range expression ([BEGIN]..[END])",
      },
    },
    {
      name: "--tac",
      description: "Reverse the order of the input",
    },
    {
      name: "--gap",
      description: "Render empty lines between each item",
      args: {
        name: "N",
        isOptional: true,
      },
    },
    {
      name: "--gap-line",
      description: "Draw horizontal line on each gap using the string",
      args: {
        name: "STR",
        isOptional: true,
      },
    },
    {
      name: "--freeze-left",
      description: "Number of fields to freeze on the left",
      args: {
        name: "N",
      },
    },
    {
      name: "--freeze-right",
      description: "Number of fields to freeze on the right",
      args: {
        name: "N",
      },
    },
    {
      name: "--keep-right",
      description: "Keep the right end of the line visible on overflow",
    },
    {
      name: "--scroll-off",
      description:
        "Number of screen lines to keep above or below when scrolling to the top or to the bottom",
      args: {
        name: "LINES",
        default: "0",
      },
    },
    {
      name: "--no-hscroll",
      description: "Disable horizontal scroll",
    },
    {
      name: "--hscroll-off",
      description:
        "Number of screen columns to keep to the right of the highlighted substring",
      args: {
        name: "columns",
        default: "10",
      },
    },
    {
      name: "--jump-labels",
      description: "Label characters for jump and jump-accept",
      args: {
        name: "characters",
      },
    },
    {
      name: "--gutter",
      description: "Character used for the gutter column",
      args: {
        name: "CHAR",
      },
    },
    {
      name: "--gutter-raw",
      description: "Character used for the gutter column in raw mode",
      args: {
        name: "CHAR",
      },
    },
    {
      name: "--marker-multi-line",
      description:
        "Multi-select marker for multi-line entries; 3 elements for top, middle, and bottom",
      args: {
        name: "STR",
      },
    },
    {
      name: "--ellipsis",
      description: "Ellipsis to show when line is truncated",
      args: {
        name: "STR",
      },
    },
    {
      name: "--scrollbar",
      description: "Scrollbar character(s)",
      args: {
        name: "C1[C2]",
        isOptional: true,
      },
    },
    {
      name: "--no-scrollbar",
      description: "Hide scrollbar",
    },
    {
      name: "--list-border",
      description: "Draw border around the list section",
      args: {
        name: "STYLE",
        isOptional: true,
        default: "rounded",
        suggestions: [
          "rounded",
          "sharp",
          "bold",
          "block",
          "thinblock",
          "double",
          "dashed",
          "horizontal",
          "vertical",
          "top",
          "bottom",
          "left",
          "right",
          "none",
        ],
      },
    },
    {
      name: "--list-label",
      description: "Label to print on the list border",
      args: {
        name: "LABEL",
      },
    },
    {
      name: "--list-label-pos",
      description: "Position of the list label",
      args: {
        name: "COL",
      },
    },
    {
      name: "--filepath-word",
      description: "Make word-wise movements respect path separators",
    },
    {
      name: "--style",
      description: "Apply a style preset",
      args: {
        name: "PRESET",
        default: "default",
        suggestions: ["default", "minimal", "full"],
      },
    },
    {
      name: "--no-color",
      description: "Disable colors",
    },
    {
      name: "--height",
      description:
        "Display fzf window below the cursor with the given height instead of using fullscreen",
      args: {
        name: "height",
        description: "Height[%]",
      },
    },
    {
      name: "--min-height",
      description: "Minimum height when --height is given as a percentage",
      args: {
        name: "HEIGHT",
        default: "10+",
      },
    },
    {
      name: "--popup",
      description:
        "Start fzf in a popup window (requires tmux 3.3+ or Zellij 0.44+)",
      args: {
        name: "OPTS",
        isOptional: true,
        default: "center,50%",
      },
    },
    {
      name: "--tmux",
      description: "Alias for --popup",
      args: {
        name: "OPTS",
        isOptional: true,
      },
    },
    {
      name: "--layout",
      description: "Choose layout",
      args: {
        name: "layout",
        default: "default",
        suggestions: ["default", "reverse", "reverse-list"],
      },
    },
    {
      name: "--border",
      description: "Draw border around the finder",
      args: {
        name: "style",
        isOptional: true,
        default: "rounded",
        suggestions: [
          "rounded",
          "sharp",
          "bold",
          "block",
          "thinblock",
          "double",
          "dashed",
          "horizontal",
          "vertical",
          "top",
          "bottom",
          "left",
          "right",
          "line",
          "none",
        ],
      },
    },
    {
      name: "--border-label",
      description: "Label to print on the border",
      args: {
        name: "LABEL",
      },
    },
    {
      name: "--border-label-pos",
      description: "Position of the border label",
      args: {
        name: "COL",
      },
    },
    {
      name: "--margin",
      description: "Screen margin (TRBL | TB,RL | T,RL,B | T,R,B,L)",
      args: {
        name: "margin",
        description: "Number",
      },
    },
    {
      name: "--padding",
      description: "Padding inside border (TRBL | TB,RL | T,RL,B | T,R,B,L)",
      args: {
        name: "padding",
        description: "Number",
      },
    },
    {
      name: "--no-input",
      description: "Disable and hide the input section",
    },
    {
      name: "--prompt",
      description: "Input prompt",
      args: {
        name: "string",
        default: "'> '",
      },
    },
    {
      name: "--info",
      description: "Finder info style",
      args: {
        name: "style",
        default: "default",
        suggestions: ["default", "right", "hidden", "inline"],
      },
    },
    {
      name: "--info-command",
      description: "Command to generate info line",
      args: {
        name: "COMMAND",
      },
    },
    {
      name: "--separator",
      description: "Draw horizontal separator on info line using the string",
      args: {
        name: "STR",
      },
    },
    {
      name: "--no-separator",
      description: "Hide info line separator",
    },
    {
      name: "--ghost",
      description: "Ghost text to display when the input is empty",
      args: {
        name: "TEXT",
      },
    },
    {
      name: "--input-border",
      description: "Draw border around the input section",
      args: {
        name: "STYLE",
        isOptional: true,
        default: "rounded",
      },
    },
    {
      name: "--input-label",
      description: "Label to print on the input border",
      args: {
        name: "LABEL",
      },
    },
    {
      name: "--input-label-pos",
      description: "Position of the input label",
      args: {
        name: "COL",
      },
    },
    {
      name: "--pointer",
      description: "Pointer to the current line",
      args: {
        name: "string",
        default: "'>'",
      },
    },
    {
      name: "--marker",
      description: "Multi-select marker",
      args: {
        name: "string",
        default: "'>'",
      },
    },
    {
      name: "--header",
      description: "String to print as header",
      args: {
        name: "string",
      },
    },
    {
      name: "--header-lines",
      description: "The first N lines of the input are treated as header",
      args: {
        name: "number",
      },
    },
    {
      name: "--header-first",
      description: "Print header before the prompt line",
    },
    {
      name: "--header-border",
      description: "Draw border around the header section",
      args: {
        name: "STYLE",
        isOptional: true,
        default: "rounded",
      },
    },
    {
      name: "--header-lines-border",
      description: "Display header from --header-lines with a separate border",
      args: {
        name: "STYLE",
        isOptional: true,
      },
    },
    {
      name: "--header-label",
      description: "Label to print on the header border",
      args: {
        name: "LABEL",
      },
    },
    {
      name: "--header-label-pos",
      description: "Position of the header label",
      args: {
        name: "COL",
      },
    },
    {
      name: "--footer",
      description: "String to print as footer",
      args: {
        name: "STR",
      },
    },
    {
      name: "--footer-border",
      description: "Draw border around the footer section",
      args: {
        name: "STYLE",
        isOptional: true,
        default: "line",
      },
    },
    {
      name: "--footer-label",
      description: "Label to print on the footer border",
      args: {
        name: "LABEL",
      },
    },
    {
      name: "--footer-label-pos",
      description: "Position of the footer label",
      args: {
        name: "COL",
      },
    },
    {
      name: "--ansi",
      description: "Enable processing of ANSI color codes",
    },
    {
      name: "--tabstop",
      description: "Number of spaces for a tab character",
      args: {
        name: "spaces",
        default: "8",
      },
    },
    {
      name: "--color",
      description: "Base scheme",
      args: {
        name: "color scheme",
        description: "(dark|light|base16|bw) and/or custom colors",
        suggestions: ["dark", "light", "base16", "bw"],
      },
    },
    {
      name: "--no-bold",
      description: "Do not use bold text",
    },
    {
      name: "--history",
      description: "History file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--history-size",
      description: "Maximum number of history entries",
      args: {
        name: "number",
        default: "1000",
      },
    },
    {
      name: "--preview",
      description: "Command to preview highlighted line ({})",
      args: {
        name: "command",
      },
    },
    {
      name: "--preview-window",
      description: "Preview window layout",
      args: {
        name: "options",
        isVariadic: true,
        default: "right:50%",
        suggestions: [
          "up",
          "down",
          "left",
          "right",
          "next",
          "nowrap",
          "wrap",
          "nocycle",
          "cycle",
          "nofollow",
          "follow",
          "nohidden",
          "hidden",
          "default",
        ],
      },
    },
    {
      name: "--preview-border",
      description: "Short for --preview-window=border-STYLE",
      args: {
        name: "STYLE",
        isOptional: true,
        default: "rounded",
      },
    },
    {
      name: "--preview-label",
      description: "Label to print on the preview border",
      args: {
        name: "LABEL",
      },
    },
    {
      name: "--preview-label-pos",
      description: "Position of the preview label",
      args: {
        name: "N",
      },
    },
    {
      name: "--preview-wrap-sign",
      description: "Indicator for wrapped lines in the preview window",
      args: {
        name: "STR",
      },
    },
    {
      name: ["-q", "--query"],
      description: "Start the finder with the given query",
      args: {
        name: "string",
      },
    },
    {
      name: ["-1", "--select-1"],
      description: "Automatically select the only match",
    },
    {
      name: ["-0", "--exit-0"],
      description: "Exit immediately when there's no match",
    },
    {
      name: ["-f", "--filter"],
      description: "Filter mode. Do not start interactive finder",
      args: {
        name: "string",
      },
    },
    {
      name: "--print-query",
      description: "Print query as the first line",
    },
    {
      name: "--expect",
      description: "Comma-separated list of keys to complete fzf",
      args: {
        name: "keys",
      },
    },
    {
      name: "--read0",
      description: "Read input delimited by ASCII NUL characters",
    },
    {
      name: "--print0",
      description: "Print output delimited by ASCII NUL characters",
    },
    {
      name: "--sync",
      description: "Synchronous search for multi-staged filtering",
    },
    {
      name: "--bind",
      description: "Custom key/event bindings. Refer to the man page",
      args: {
        name: "BINDINGS",
      },
    },
    {
      name: "--with-shell",
      description: "Shell command and flags to start child processes with",
      args: {
        name: "STR",
      },
    },
    {
      name: "--listen",
      description:
        "Start HTTP server to receive actions via TCP or a Unix domain socket",
      args: {
        name: "[ADDR:]PORT",
        isOptional: true,
      },
    },
    {
      name: "--listen-unsafe",
      description: "Same as --listen, but allows remote process execution",
      args: {
        name: "[ADDR:]PORT",
        isOptional: true,
      },
    },
    {
      name: "--walker",
      description: "Directory traversal options",
      args: {
        name: "OPTS",
        default: "file,follow,hidden",
        suggestions: ["file", "dir", "follow", "hidden"],
      },
    },
    {
      name: "--walker-root",
      description: "List of directories to walk",
      args: {
        name: "DIR",
        isVariadic: true,
        template: "folders",
        default: ".",
      },
    },
    {
      name: "--walker-skip",
      description: "Comma-separated list of directory names to skip",
      args: {
        name: "DIRS",
        default: ".git,node_modules",
      },
    },
    {
      name: "--bash",
      description: "Print script to set up Bash shell integration",
    },
    {
      name: "--zsh",
      description: "Print script to set up Zsh shell integration",
    },
    {
      name: "--fish",
      description: "Print script to set up Fish shell integration",
    },
    {
      name: "--nushell",
      description: "Print script to set up Nushell integration",
    },
    {
      name: "--version",
      description: "Display version information and exit",
    },
    {
      name: "--help",
      description: "Show help message",
    },
    {
      name: "--man",
      description: "Show man page",
    },
  ],
};

export default completionSpec;
