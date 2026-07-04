const completionSpec: Fig.Spec = {
  name: "kubens",
  description: "Switch between Kubernetes-namespaces",
  additionalSuggestions: [
    {
      name: "-",
      priority: 85,
      description: "Switch to previous namespace within the current context",
      icon: "fig://icon?type=asterisk",
    },
  ],
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for kubens",
    },
    {
      name: ["--current", "-c"],
      description: "Show current namespace",
    },
    {
      name: ["--force", "-f"],
      description:
        "Force change the active namespace of current context, even if it doesn't exist",
    },
    {
      name: ["--unset", "-u"],
      description: "Unset the namespace choice (set to 'default')",
    },
    {
      name: ["--version", "-V"],
      description: "Show version",
    },
  ],
  args: {
    name: "namespace",
    generators: [
      {
        script: ["bash", "-c", "kubens | grep -v $(kubens -c)"],
        postProcess: (out) =>
          out.split("\n").map((item) => ({
            name: item,
            priority: 90,
            icon: "fig://icon?type=kubernetes",
          })) as Fig.Suggestion[],
      },
      {
        script: ["kubens", "-c"],
        postProcess: (out) => {
          return !out
            ? []
            : [
                {
                  name: out,
                  priority: 100,
                  icon: "⭐️",
                },
              ];
        },
      },
    ],
    isOptional: true,
  },
};
export default completionSpec;
