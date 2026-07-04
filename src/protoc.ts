const outDirOption = (name: string, description: string): Fig.Option => ({
  name,
  description,
  args: {
    name: "OUT_DIR",
    template: "folders",
  },
});

const completionSpec: Fig.Spec = {
  name: "protoc",
  description: "Protocol buffer compiler",
  options: [
    {
      name: ["-I", "--proto_path"],
      description: "Specify the directory in which to search for imports",
      isRepeatable: true,
      args: {
        name: "PATH",
        template: "folders",
      },
    },
    {
      name: "--version",
      description: "Show version info and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show help and exit",
    },
    {
      name: "--encode",
      description:
        "Read a text-format message of the given type from stdin and write it in binary to stdout",
      args: {
        name: "MESSAGE_TYPE",
      },
    },
    {
      name: "--deterministic_output",
      description:
        "When using --encode, ensure map fields are deterministically ordered",
    },
    {
      name: "--unsafe_allow_out_dir_escape",
      description:
        'Allow output files to use ".." to escape the output directory',
    },
    {
      name: "--decode",
      description:
        "Read a binary message of the given type from stdin and write it in text format to stdout",
      args: {
        name: "MESSAGE_TYPE",
      },
    },
    {
      name: "--decode_raw",
      description:
        "Read an arbitrary protocol message from stdin and write the raw tag/value pairs in text format to stdout",
    },
    {
      name: "--descriptor_set_in",
      description:
        "Specify a delimited list of files each containing a FileDescriptorSet",
      args: {
        name: "FILES",
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--descriptor_set_out"],
      description:
        "Write a FileDescriptorSet containing all of the input files to FILE",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--include_imports",
      description:
        "When using --descriptor_set_out, also include all dependencies of the input files in the set",
    },
    {
      name: "--include_source_info",
      description:
        "When using --descriptor_set_out, do not strip SourceCodeInfo from the FileDescriptorProto",
    },
    {
      name: "--retain_options",
      description:
        "When using --descriptor_set_out, do not strip any options from the FileDescriptorProto",
    },
    {
      name: "--dependency_out",
      description:
        "Write a dependency output file in the format expected by make",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--error_format",
      description: "Set the format in which to print errors",
      args: {
        name: "FORMAT",
        default: "gcc",
        suggestions: ["gcc", "msvs"],
      },
    },
    {
      name: "--fatal_warnings",
      description: "Make warnings be fatal (similar to -Werr in gcc)",
    },
    {
      name: "--print_free_field_numbers",
      description:
        "Print the free field numbers of the messages defined in the given proto files",
    },
    {
      name: "--enable_codegen_trace",
      description:
        "Enable tracing which parts of protoc are responsible for what codegen output",
    },
    {
      name: "--direct_dependencies",
      description:
        'A colon delimited list of imports that are allowed to be used in "import" declarations',
      args: {
        name: "imports",
      },
    },
    {
      name: "--option_dependencies",
      description:
        'A colon delimited list of imports that are allowed to be used in "import option" declarations',
      args: {
        name: "imports",
      },
    },
    {
      name: "--notices",
      description: "Show notice file and exit",
    },
    {
      name: "--plugin",
      description: "Specify a plugin executable to use",
      args: {
        name: "EXECUTABLE",
        template: "filepaths",
      },
    },
    outDirOption("--cpp_out", "Generate C++ header and source"),
    outDirOption("--csharp_out", "Generate C# source file"),
    outDirOption("--java_out", "Generate Java source file"),
    outDirOption("--kotlin_out", "Generate Kotlin file"),
    outDirOption("--objc_out", "Generate Objective-C header and source"),
    outDirOption("--php_out", "Generate PHP source file"),
    outDirOption("--pyi_out", "Generate python pyi stub"),
    outDirOption("--python_out", "Generate Python source file"),
    outDirOption("--rbs_out", "Generate RBS type definition"),
    outDirOption("--ruby_out", "Generate Ruby source file"),
    outDirOption("--rust_out", "Generate Rust sources"),
  ],
  args: {
    name: "PROTO_FILES",
    template: "filepaths",
    isVariadic: true,
  },
};

export default completionSpec;
