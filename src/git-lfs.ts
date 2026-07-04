const includeOption: Fig.Option = {
  name: ["-I", "--include"],
  description: "Specify lfs.fetchinclude just for this invocation",
  args: {
    name: "paths",
  },
};

const excludeOption: Fig.Option = {
  name: ["-X", "--exclude"],
  description: "Specify lfs.fetchexclude just for this invocation",
  args: {
    name: "paths",
  },
};

const remoteOption: Fig.Option = {
  name: ["-r", "--remote"],
  description: "Specify the Git LFS server to use",
  args: {
    name: "name",
  },
};

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
  description: "Give the output in a stable JSON format for scripts",
};

const completionSpec: Fig.Spec = {
  name: "git-lfs",
  description: "Work with large files in Git repositories",
  subcommands: [
    {
      name: "install",
      description: "Install Git LFS configuration",
      options: [
        {
          name: "--force",
          description:
            'Set the "lfs" smudge and clean filters, overwriting existing values',
        },
        {
          name: "--local",
          description: "Set the filters in the local repository's git config",
        },
        {
          name: "--worktree",
          description:
            "Set the filters in the current working tree's git config",
        },
        {
          name: "--manual",
          description: "Print instructions for manually updating your hooks",
        },
        {
          name: "--system",
          description: "Set the filters in the system git config",
        },
        {
          name: "--skip-smudge",
          description: "Skip automatic downloading of objects on clone or pull",
        },
        {
          name: "--skip-repo",
          description: "Skip installation of hooks into the local repository",
        },
      ],
    },
    {
      name: "uninstall",
      description:
        "Uninstall Git LFS by removing hooks and smudge/clean filter configuration",
      options: [
        {
          name: "--local",
          description:
            "Remove the filters from the local repository's git config",
        },
        {
          name: "--worktree",
          description:
            "Remove the filters from the current working tree's git config",
        },
        {
          name: "--system",
          description: "Remove the filters from the system git config",
        },
        {
          name: "--skip-repo",
          description: "Skip cleanup of the local repo",
        },
      ],
    },
    {
      name: "track",
      description: "View or add Git LFS paths to Git attributes",
      args: {
        name: "path",
        isOptional: true,
        isVariadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-v", "--verbose"],
          description: "Log files which git lfs track will touch",
        },
        {
          name: ["-d", "--dry-run"],
          description: "Log all actions without performing them",
        },
        {
          name: "--filename",
          description: "Treat the arguments as literal filenames, not patterns",
        },
        {
          name: ["-l", "--lockable"],
          description: "Make the paths lockable",
        },
        {
          name: "--not-lockable",
          description: "Remove the lockable flag from the paths",
        },
        {
          name: "--no-excluded",
          description: "Do not list patterns that are excluded in the output",
        },
        {
          name: "--no-modify-attrs",
          description:
            "Make matched entries stat-dirty without modifying .gitattributes",
        },
      ],
    },
    {
      name: "untrack",
      description: "Remove Git LFS paths from Git attributes",
      args: {
        name: "path",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "ls-files",
      description:
        "Show information about Git LFS files in the index and working tree",
      options: [
        {
          name: ["-l", "--long"],
          description:
            "Show the entire 64 character OID, instead of just first 10",
        },
        {
          name: ["-s", "--size"],
          description: "Show the size of the LFS object at the end of a line",
        },
        {
          name: ["-d", "--debug"],
          description: "Show as much information as possible about an LFS file",
        },
        {
          name: ["-a", "--all"],
          description:
            "Inspect the full history of the repository, not the current HEAD",
        },
        {
          name: "--deleted",
          description:
            "Show the full history of the reference, including deleted objects",
        },
        includeOption,
        excludeOption,
        {
          name: ["-n", "--name-only"],
          description: "Show only the lfs tracked file names",
        },
        jsonOption,
      ],
    },
    {
      name: "status",
      description: "Show the status of Git LFS files in the working tree",
      options: [
        {
          name: ["-p", "--porcelain"],
          description: "Give the output in an easy-to-parse format for scripts",
        },
        jsonOption,
      ],
    },
    {
      name: "fetch",
      description: "Download Git LFS files from a remote",
      args: [
        {
          name: "remote",
          isOptional: true,
        },
        {
          name: "ref",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        includeOption,
        excludeOption,
        {
          name: "--recent",
          description:
            "Download objects referenced by recent branches and commits",
        },
        {
          name: "--all",
          description:
            "Download all objects referenced by any reachable commit",
        },
        {
          name: ["-p", "--prune"],
          description: "Prune old and unreferenced objects after fetching",
        },
        {
          name: "--refetch",
          description: "Also fetch objects that are already present locally",
        },
        {
          name: ["-d", "--dry-run"],
          description: "Print what would be fetched, without fetching anything",
        },
        jsonOption,
      ],
    },
    {
      name: "pull",
      description:
        "Fetch Git LFS changes from the remote and checkout required files",
      args: {
        name: "remote",
        isOptional: true,
      },
      options: [includeOption, excludeOption],
    },
    {
      name: "push",
      description: "Push queued large files to the Git LFS endpoint",
      args: [
        {
          name: "remote",
        },
        {
          name: "ref",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: "--dry-run",
          description: "Print the files that would be pushed, without pushing",
        },
        {
          name: "--all",
          description: "Push all objects referenced by any reachable commit",
        },
        {
          name: "--object-id",
          description:
            "Push only the object OIDs listed at the end of the command",
        },
        {
          name: "--stdin",
          description: "Read a list of newline-delimited refs from stdin",
        },
      ],
    },
    {
      name: "checkout",
      description: "Populate working copy with real content from Git LFS files",
      args: {
        name: "glob-pattern",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: "--base",
          description: "Check out the merge base of the specified file",
        },
        {
          name: "--ours",
          description: "Check out our side of the conflict for the file",
        },
        {
          name: "--theirs",
          description: "Check out their side of the conflict for the file",
        },
        {
          name: "--to",
          description:
            "Check out the specified portion of the conflict to the given path",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate history to or from Git LFS",
      args: [
        {
          name: "mode",
          suggestions: ["import", "export", "info"],
        },
        {
          name: "branch",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        includeOption,
        excludeOption,
        {
          name: "--include-ref",
          description: "Include the given reference",
          args: {
            name: "refname",
          },
        },
        {
          name: "--exclude-ref",
          description: "Exclude the given reference",
          args: {
            name: "refname",
          },
        },
        {
          name: "--skip-fetch",
          description: "Assume the known set of remote references is complete",
        },
        {
          name: "--everything",
          description: "Migrate all local references",
        },
        {
          name: "--yes",
          description: "Assume a yes answer to any prompts",
        },
        {
          name: "--above",
          description:
            "Only count files whose filesize is above the given size",
          args: {
            name: "size",
          },
        },
        {
          name: "--top",
          description: "Only display the top n entries",
          args: {
            name: "n",
          },
        },
        {
          name: "--unit",
          description: "Format the number of bytes as a quantity of the unit",
          args: {
            name: "unit",
          },
        },
        {
          name: "--pointers",
          description: "Treat existing Git LFS pointers according to the mode",
          args: {
            name: "mode",
            suggestions: ["follow", "no-follow", "ignore"],
          },
        },
        {
          name: "--fixup",
          description:
            "Infer include and exclude filters from .gitattributes files",
        },
      ],
    },
    {
      name: "prune",
      description: "Delete old Git LFS files from local storage",
      options: [
        {
          name: ["-d", "--dry-run"],
          description: "Report on what would have been done without deleting",
        },
        {
          name: ["-f", "--force"],
          description: "Prune all objects except unpushed objects",
        },
        {
          name: "--recent",
          description: "Prune even objects that would normally be preserved",
        },
        {
          name: ["-c", "--verify-remote"],
          description:
            "Contact the remote and verify files exist before deleting",
        },
        {
          name: "--no-verify-remote",
          description: "Disable remote verification",
        },
        {
          name: ["-v", "--verbose"],
          description: "Report the full detail of what is/would be deleted",
        },
      ],
    },
    {
      name: "lock",
      description: 'Set a file as "locked" on the Git LFS server',
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [remoteOption, jsonOption],
    },
    {
      name: "unlock",
      description: 'Remove "locked" setting for a file on the Git LFS server',
      args: {
        name: "path",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        remoteOption,
        {
          name: ["-f", "--force"],
          description:
            "Tell the server to remove the lock, even if owned by another user",
        },
        {
          name: ["-i", "--id"],
          description: "Specify a lock by its ID instead of path",
          args: {
            name: "id",
          },
        },
        jsonOption,
      ],
    },
    {
      name: "locks",
      description: 'List currently "locked" files from the Git LFS server',
      options: [
        remoteOption,
        {
          name: ["-i", "--id"],
          description: "Specify a lock by its ID",
          args: {
            name: "id",
          },
        },
        {
          name: ["-p", "--path"],
          description: "Specify a lock by its path",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--local",
          description: "List only our own locks which are cached locally",
        },
        {
          name: "--cached",
          description: "List cached locks from the last remote call",
        },
        {
          name: "--verify",
          description: "Verify the lock owner on the server",
        },
        {
          name: ["-l", "--limit"],
          description: "Specify number of results to return",
          args: {
            name: "num",
          },
        },
        jsonOption,
      ],
    },
    {
      name: "dedup",
      description: "De-duplicate Git LFS files",
    },
    {
      name: "env",
      description: "Display the Git LFS environment",
    },
    {
      name: "update",
      description: "Update Git hooks for the current Git repository",
      options: [
        {
          name: ["-m", "--manual"],
          description: "Print instructions for manually updating your hooks",
        },
        {
          name: ["-f", "--force"],
          description:
            "Forcibly overwrite any existing hooks with git-lfs hooks",
        },
      ],
    },
    {
      name: "fsck",
      description: "Check Git LFS files for consistency",
      options: [
        {
          name: "--objects",
          description: "Check that each object matches its expected hash",
        },
        {
          name: "--pointers",
          description: "Check that each pointer is canonical",
        },
      ],
    },
    {
      name: "ext",
      description: "Display Git LFS extension details",
    },
    {
      name: "logs",
      description: "Show errors from the Git LFS command",
    },
    {
      name: "version",
      description: "Report the version number",
    },
    {
      name: "completion",
      description:
        "Generate shell scripts for command-line tab-completion of Git LFS commands",
      args: {
        name: "shell",
        suggestions: ["bash", "fish", "zsh"],
      },
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Report the version number",
    },
  ],
};

export default completionSpec;
