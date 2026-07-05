// Generated from the gcloud CLI tree (SDK 575.0.0) by scripts/generate-gcloud-specs.mjs — do not edit by hand

const flag42: Fig.Option = {
  name: "--access-token-file",
  description:
    "A file path to read the access token. Use this flag to\nauthenticate `gcloud` with an access token. The credentials of\nthe active account (if exists) will be ignored. The file should\nonly contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
  args: { name: "ACCESS_TOKEN_FILE", description: "String", suggestions: [] },
};
const flag46: Fig.Option = {
  name: "--account",
  description:
    "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
  args: { name: "ACCOUNT", description: "String", suggestions: [] },
};
const flag720: Fig.Option = {
  name: "--async",
  description:
    "Return immediately, without waiting for the operation in progress to\ncomplete",
};
const flag772: Fig.Option = {
  name: "--audio-channel-count",
  description:
    "The number of channels in the input audio data.  Set this for separate-channel-recognition. Valid values are: 1)LINEAR16 and FLAC are 1-8 2)OGG_OPUS are 1-254 3) MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`",
  args: { name: "AUDIO_CHANNEL_COUNT", description: "Int", suggestions: [] },
};
const flag1107: Fig.Option = {
  name: "--batch-size",
  description:
    "Maximum number of response protos to put into each output JSON file on\nGoogle Cloud Storage.\nThe valid range is [1, 100]. If not specified, the default value is 20",
  args: { name: "BATCH_SIZE", description: "Int", suggestions: [] },
};
const flag1201: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for\noperations performed in `gcloud`. If you need to operate on one\nproject, but need quota against a different project, you can use\nthis flag to specify the billing project. If both\n`billing/quota_project` and `--billing-project` are specified,\n`--billing-project` takes precedence.\nRun `$ gcloud config set --help` to see more information about\n`billing/quota_project`",
  args: { name: "BILLING_PROJECT", description: "String", suggestions: [] },
};
const flag2292: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation.\nFor more information on how to use configurations, run:\n`gcloud topic configurations`.  You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment\nvariable to set the equivalent of this flag for a terminal\nsession",
  args: { name: "CONFIGURATION", description: "String", suggestions: [] },
};
const flag2424: Fig.Option = {
  name: "--content-file",
  description:
    "Specify a local file or Google Cloud Storage (format\n`gs://bucket/object`) file path containing the text to be analyzed.\nMore useful for longer text or data output from another system",
  args: { name: "CONTENT_FILE", description: "String", suggestions: [] },
};
const flag2429: Fig.Option = {
  name: "--content-type",
  description:
    "Specify the format of the input text. _CONTENT_TYPE_ must be one of: *html*, *plain-text*",
  args: {
    name: "CONTENT_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["html", "plain-text"],
  },
};
const flag2437: Fig.Option = {
  name: "--content",
  description:
    "Specify input text on the command line. Useful for experiments, or\nfor extremely short text",
  args: { name: "CONTENT", description: "String", suggestions: [] },
};
const flag4033: Fig.Option = {
  name: "--enable-automatic-punctuation",
  description: "Adds punctuation to recognition result hypotheses",
};
const flag4361: Fig.Option = {
  name: "--encoding-type",
  description:
    "The encoding type used by the API to calculate offsets. If set to `none`,\nencoding-dependent offsets will be set at -1. This is an optional flag\nonly used for the entity mentions in results, and does not affect how the\ninput is read or analyzed. _ENCODING_TYPE_ must be one of: *none*, *utf16*, *utf32*, *utf8*",
  args: {
    name: "ENCODING_TYPE",
    description:
      "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
    suggestions: ["none", "utf16", "utf32", "utf8"],
  },
};
const flag4362: Fig.Option = {
  name: "--encoding",
  description:
    "The type of encoding of the file. Required if the file format is not WAV or FLAC. _ENCODING_ must be one of: *alaw*, *amr*, *amr-wb*, *encoding-unspecified*, *flac*, *linear16*, *mp3*, *mulaw*, *ogg-opus*, *speex-with-header-byte*, *webm-opus*",
  args: {
    name: "ENCODING",
    description: "Googlecloudsdk.calliope.base:_ChoiceValueType",
    suggestions: [
      "alaw",
      "amr",
      "amr-wb",
      "encoding-unspecified",
      "flac",
      "linear16",
      "mp3",
      "mulaw",
      "ogg-opus",
      "speex-with-header-byte",
      "webm-opus",
    ],
  },
};
const flag4840: Fig.Option = {
  name: "--filter-profanity",
  description:
    "If True, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. ```f***```",
};
const flag4900: Fig.Option = {
  name: "--flags-file",
  description:
    "A YAML or JSON file that specifies a *--flag*:*value* dictionary.\nUseful for specifying complex flag values with special characters\nthat work with any command interpreter. Additionally, each\n*--flags-file* arg is replaced by its constituent flags. See\n$ gcloud topic flags-file for more information",
  args: { name: "YAML_FILE", description: "String", suggestions: [] },
};
const flag4902: Fig.Option = {
  name: "--flatten",
  description:
    "Flatten _name_[] output resource slices in _KEY_ into separate records\nfor each item in each slice. Multiple keys and slices may be specified.\nThis also flattens keys for *--format* and *--filter*. For example,\n*--flatten=abc.def* flattens *abc.def[].ghi* references to\n*abc.def.ghi*. A resource record containing *abc.def[]* with N elements\nwill expand to N records in the flattened output. This allows us to\nspecify what `resource-key` the `filter` will operate on. This flag\ninteracts with other flags that are applied in this order: *--flatten*,\n*--sort-by*, *--filter*, *--limit*",
  args: { name: "KEY", description: "List", suggestions: [] },
};
const flag5091: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a\ncommand-specific human-friendly output format. If both `core/format` and\n`--format` are specified, `--format` takes precedence. `--format`\nand `core/format` both take precedence over `core/default_format`. The\nsupported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud\ntopic formats. Run `$ gcloud config set --help` to see more information\nabout `core/format`",
  args: { name: "FORMAT", description: "String", suggestions: [] },
};
const flag5453: Fig.Option = {
  name: "--help",
  description: "Display detailed help",
};
const flag5461: Fig.Option = {
  name: "--hints",
  description:
    'A list of strings containing word and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See https://cloud.google.com/speech/limits#content',
  args: { name: "HINT", description: "List", suggestions: [] },
};
const flag5699: Fig.Option = {
  name: "--impersonate-service-account",
  description:
    "For this `gcloud` invocation, all API requests will be\nmade as the given service account or target service account in an\nimpersonation delegation chain instead of the currently selected\naccount. You can specify either a single service account as the\nimpersonator, or a comma-separated list of service accounts to\ncreate an impersonation delegation chain. The impersonation is done\nwithout needing to create, download, and activate a key for the\nservice account or accounts.\n+\nIn order to make API requests as a service account, your\ncurrently selected account must have an IAM role that includes\nthe `iam.serviceAccounts.getAccessToken` permission for the\nservice account or accounts.\n+\nThe `roles/iam.serviceAccountTokenCreator` role has\nthe `iam.serviceAccounts.getAccessToken permission`. You can\nalso create a custom role.\n+\nYou can specify a list of service accounts, separated with\ncommas. This creates an impersonation delegation chain in which\neach service account delegates its permissions to the next\nservice account in the chain. Each service account in the list\nmust have the `roles/iam.serviceAccountTokenCreator` role on the\nnext service account in the list. For example, when\n`--impersonate-service-account=`\n``SERVICE_ACCOUNT_1'',``SERVICE_ACCOUNT_2'',\nthe active account must have the\n`roles/iam.serviceAccountTokenCreator` role on\n``SERVICE_ACCOUNT_1'', which must have the\n`roles/iam.serviceAccountTokenCreator` role on\n``SERVICE_ACCOUNT_2''.\n``SERVICE_ACCOUNT_1'' is the impersonated service\naccount and ``SERVICE_ACCOUNT_2'' is the delegate.\n+\nOverrides the default *auth/impersonate_service_account* property value for this command invocation",
  args: {
    name: "SERVICE_ACCOUNT_EMAILS",
    description: "String",
    suggestions: [],
  },
};
const flag5764: Fig.Option = {
  name: "--include-word-time-offsets",
  description:
    "If True, the top result includes a list of words with the start and end time offsets (timestamps) for those words. If False, no word-level time offset information is returned",
};
const flag6461: Fig.Option = {
  name: "--language-code",
  description:
    'The language of the supplied audio as a BCP-47 (https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See https://cloud.google.com/speech/docs/languages for a list of the currently supported language codes',
  args: { name: "LANGUAGE_CODE", description: "String", suggestions: [] },
};
const flag6462: Fig.Option = {
  name: "--language-hints",
  description: "List of languages to use for text detection",
  args: { name: "LANGUAGE_HINTS", description: "List", suggestions: [] },
};
const flag6464: Fig.Option = {
  name: "--language",
  description:
    "Specify the language of the input text. If omitted, the server will\nattempt to auto-detect. Both ISO (such as `en` or `es`) and BCP-47 (such\nas `en-US` or `ja-JP`) language codes are accepted",
  args: { name: "LANGUAGE", description: "String", suggestions: [] },
};
const flag6798: Fig.Option = {
  name: "--location",
  description:
    "Location of the operation.\n+\nTo set the `location` attribute:\n* provide the argument `operation` on the command line with a fully specified name;\n* provide the argument `--location` on the command line",
  args: { name: "LOCATION", description: "String", suggestions: [] },
};
const flag7356: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};
const flag7607: Fig.Option = {
  name: "--max-alternatives",
  description:
    "Maximum number of recognition hypotheses to be returned. The server may return fewer than max_alternatives. Valid values are 0-30. A value of 0 or 1 will return a maximum of one",
  args: { name: "MAX_ALTERNATIVES", description: "Int", suggestions: [] },
};
const flag7674: Fig.Option = {
  name: "--max-results",
  description: "Maximum number of results to be provided",
  args: { name: "MAX_RESULTS", description: "Int", suggestions: [] },
};
const flag7973: Fig.Option = {
  name: "--model",
  description:
    'Select the model best suited to your domain to get best results. If you do not explicitly specify a model, Speech-to-Text will auto-select a model based on your other specified parameters. Some models are premium and cost more than standard models (although you can reduce the price by opting into https://cloud.google.com/speech-to-text/docs/data-logging). _MODEL_ must be one of:\n+\n*command_and_search*::: short queries such as voice commands or voice search.\n*default*::: audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate.\n*latest_long*::: Use this model for any kind of long form content such as media or spontaneous speech and conversations. Consider using this model in place of the video model, especially if the video model is not available in your target language. You can also use this in place of the default model.\n*latest_short*::: Use this model for short utterances that are a few seconds in length. It is useful for trying to capture commands or other single shot directed speech use cases. Consider using this model instead of the command and search model.\n*medical_conversation*::: Best for audio that originated from a conversation between a medical provider and patient.\n*medical_dictation*::: Best for audio that originated from dictation notes by a medical provider.\n*phone_call*::: audio that originated from a phone call (typically recorded at an 8khz sampling rate).\n*phone_call_enhanced*::: audio that originated from a phone call (typically recorded at an 8khz sampling rate). This is a premium model and can produce better results but costs more than the standard rate.\n*telephony*::: Improved version of the "phone_call" model, best for audio that originated from a phone call, typically recorded at an 8kHz sampling rate.\n*telephony_short*::: Dedicated version of the modern "telephony" model for short or even single-word utterances for audio that originated from a phone call, typically recorded at an 8kHz sampling rate.\n*video_enhanced*::: audio that originated from video or includes multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate.\n:::\n+',
  args: {
    name: "MODEL",
    description: "String",
    suggestions: [
      "command_and_search",
      "default",
      "latest_long",
      "latest_short",
      "medical_conversation",
      "medical_dictation",
      "phone_call",
      "phone_call_enhanced",
      "telephony",
      "telephony_short",
      "video_enhanced",
    ],
  },
};
const flag11013: Fig.Option = {
  name: "--output-uri",
  description:
    "Location to which the results should be written. Must be a Google\nCloud Storage URI",
  args: { name: "OUTPUT_URI", description: "String", suggestions: [] },
};
const flag11637: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If\nomitted, then the current project is assumed; the current project can\nbe listed using `gcloud config list --format='text(core.project)'`\nand can be set using `gcloud config set project PROJECTID`.\n+\n`--project` and its fallback `core/project` property play two roles\nin the invocation. It specifies the project of the resource to\noperate on. It also specifies the project for API enablement check,\nquota, and billing. To specify a different project for quota and\nbilling, use `--billing-project` or `billing/quota_project` property",
  args: { name: "PROJECT_ID", description: "String", suggestions: [] },
};
const flag11946: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input\nis required, defaults will be used, or an error will be raised.\n+\nOverrides the default core/disable_prompts property value for this\ncommand invocation. This is equivalent to setting the environment\nvariable `CLOUDSDK_CORE_DISABLE_PROMPTS` to 1",
};
const flag12464: Fig.Option = {
  name: "--region",
  description:
    "Optional Cloud region where annotation should take place. If no region\nis specified, a region will be determined based on video file location. _REGION_ must be one of: *asia-east1*, *europe-west1*, *us-east1*, *us-west1*",
  args: {
    name: "REGION",
    description: "String",
    suggestions: ["asia-east1", "europe-west1", "us-east1", "us-west1"],
  },
};
const flag13276: Fig.Option = {
  name: "--sample-rate",
  description:
    "The sample rate in Hertz. For best results, set the sampling rate of the audio source to 16000 Hz. If that's not possible, use the native sample rate of the audio source (instead of re-sampling)",
  args: { name: "SAMPLE_RATE", description: "Int", suggestions: [] },
};
const flag13459: Fig.Option = {
  name: "--segments",
  description:
    "Segments from the video which you want to analyze (by default, the\nentire video will be treated as one segment). Must be in the format\nSTART1:END1[,START2:END2,...] (inclusive). START and END of segments must\nbe a properly formatted duration string of the form `HhMmSs` where:\n+\n```\n*  H is the number of hours from beginning of video\n*  M is the number of minutes from the beginning of video\n*  S is the number of seconds from the beginning of the video\n```\n+\nH, M and S can be specified as ints or floats for fractional units\n(to microsecond resolution). Unit chars (e.g. `h`, `m` or `s`) are\nrequired. Microseconds can be specified using fractional seconds\ne.g. 0.000569s == 569 microseconds.\n+\nExamples:\n+\n0s:23.554048s,24s:29.528064s\n+\n0:1m40s,3m50s:5m10.232265s",
  args: { name: "SEGMENTS", description: "List", suggestions: [] },
};
const flag13472: Fig.Option = {
  name: "--separate-channel-recognition",
  description:
    "Recognition result will contain a `channel_tag` field to state which channel that result belongs to. If this is not true, only the first channel will be recognized",
};
const flag14975: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: { name: "TRACE_TOKEN", description: "String", suggestions: [] },
};
const flag15315: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};
const flag15424: Fig.Option = {
  name: "--verbosity",
  description:
    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
  args: {
    name: "VERBOSITY",
    description: "String",
    suggestions: ["debug", "info", "warning", "error", "critical", "none"],
  },
};

const completionSpec: Fig.Spec = {
  name: "ml",
  description: "Use Google Cloud machine learning capabilities",
  subcommands: [
    {
      name: "language",
      description: "Use the Google Cloud Natural Language API to analyze text",
      subcommands: [
        {
          name: "analyze-entities",
          description:
            "Use Google Cloud Natural Language API to identify entities in text",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2437,
            flag2424,
            flag2429,
            flag4361,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6464,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "analyze-entity-sentiment",
          description:
            "Use Google Cloud Natural Language API to identify entity-level sentiment",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2437,
            flag2424,
            flag2429,
            flag4361,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6464,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "analyze-sentiment",
          description:
            "Use Google Cloud Natural Language API to identify sentiments in a text",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2437,
            flag2424,
            flag2429,
            flag4361,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6464,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "analyze-syntax",
          description:
            "Use Google Cloud Natural Language API to identify linguistic information",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2437,
            flag2424,
            flag2429,
            flag4361,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6464,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
        {
          name: "classify-text",
          description: "Classifies input document into categories",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag2437,
            flag2424,
            flag2429,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6464,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
        },
      ],
    },
    {
      name: "speech",
      description: "Use Google Cloud Speech to get transcripts of audio",
      subcommands: [
        {
          name: "operations",
          description: "Interact with Google Cloud Speech operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running speech recognition operation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
            {
              name: "wait",
              description:
                "Poll long-running speech recognition operation until it completes",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
        {
          name: "recognize",
          description:
            "Get transcripts of short (less than 60 seconds) audio from an audio file",
          options: [
            flag42,
            flag46,
            flag772,
            flag1201,
            flag2292,
            flag4033,
            flag4362,
            flag4840,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5461,
            flag5699,
            flag5764,
            flag6461,
            flag7356,
            flag7607,
            flag7973,
            flag11637,
            flag11946,
            flag13276,
            flag13472,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUDIO",
            description:
              "The location of the audio file to transcribe. Must be a local path or a Google Cloud Storage URL (in the format gs://bucket/object)",
          },
        },
        {
          name: "recognize-long-running",
          description: "Get transcripts of longer audio from an audio file",
          options: [
            flag42,
            flag46,
            flag720,
            flag772,
            flag1201,
            flag2292,
            flag4033,
            flag4362,
            flag4840,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5461,
            flag5699,
            flag5764,
            flag6461,
            flag7356,
            flag7607,
            flag7973,
            {
              name: "--output-uri",
              description:
                "Location to which the results should be written. Must be a Google Cloud Storage URI",
              args: {
                name: "OUTPUT_URI",
                description:
                  "Googlecloudsdk.command_lib.ml.speech.util:ValidateOutputUri",
                suggestions: [],
              },
            },
            flag11637,
            flag11946,
            flag13276,
            flag13472,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "AUDIO",
            description:
              "The location of the audio file to transcribe. Must be a local path or a Google Cloud Storage URL (in the format gs://bucket/object)",
          },
        },
      ],
    },
    {
      name: "video",
      description: "Cloud ML Video-Intelligence command groups",
      subcommands: [
        {
          name: "detect-explicit-content",
          description: "Detect explicit content in videos",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11013,
            flag11637,
            flag11946,
            flag12464,
            flag13459,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INPUT_PATH",
            description:
              "Path to the video to be analyzed. Must be a local path or a Google\nCloud Storage URI",
          },
        },
        {
          name: "detect-labels",
          description: "Detect general labels for videos",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            {
              name: "--detection-mode",
              description:
                "The mode of label detection requested. _DETECTION_MODE_ must be one of:\n+\n*frame*::: Detect labels at the per-frame level.\n*shot*::: Detect labels at the per-shot level.\n*shot-and-frame*::: Detect labels at both the per-shot and per-frame level.\n:::\n+",
              args: {
                name: "DETECTION_MODE",
                description:
                  "Googlecloudsdk.command_lib.util.apis.arg_utils:EnumNameToChoice",
                suggestions: ["frame", "shot", "shot-and-frame"],
              },
            },
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11013,
            flag11637,
            flag11946,
            flag12464,
            flag13459,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INPUT_PATH",
            description:
              "Path to the video to be analyzed. Must be a local path or a Google\nCloud Storage URI",
          },
        },
        {
          name: "detect-shot-changes",
          description: "Detect shot changes in videos",
          options: [
            flag42,
            flag46,
            flag720,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11013,
            flag11637,
            flag11946,
            flag12464,
            flag13459,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "INPUT_PATH",
            description:
              "Path to the video to be analyzed. Must be a local path or a Google\nCloud Storage URI",
          },
        },
        {
          name: "operations",
          description:
            "Command group for working with Cloud Video Intelligence operations",
          subcommands: [
            {
              name: "describe",
              description:
                "Get description of a long-running video analysis operation",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6798,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
            {
              name: "wait",
              description:
                "Poll long-running video analysis operation until it completes",
              options: [
                flag42,
                flag46,
                flag1201,
                flag2292,
                flag4900,
                flag4902,
                flag5091,
                flag5453,
                flag5699,
                flag6798,
                flag7356,
                flag11637,
                flag11946,
                flag14975,
                flag15315,
                flag15424,
              ],
              args: {
                name: "OPERATION",
                description:
                  "ID of the operation or fully qualified identifier for the operation.\n+\nTo set the `operation` attribute:\n* provide the argument `operation` on the command line",
              },
            },
          ],
        },
      ],
    },
    {
      name: "vision",
      description: "Use Google Cloud Vision to analyze images",
      subcommands: [
        {
          name: "detect-document",
          description: "Detect dense text in an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6462,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-faces",
          description: "Detect faces within an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7674,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-image-properties",
          description: "Detect general attributes of an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-labels",
          description: "Detect broad sets of categories within an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7674,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-landmarks",
          description:
            "Detect popular natural and man-made structures within an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7674,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-logos",
          description: "Detect popular product logos within an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7674,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-objects",
          description:
            "Detect and extract multiple objects in an image with object localization",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-safe-search",
          description: "Detect explicit content in an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-text",
          description: "Detect and extract text within an image",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag6462,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "detect-text-pdf",
          description:
            "Detect and transcribe text from PDF files stored in Google Cloud Storage",
          options: [
            flag42,
            flag46,
            flag1107,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "INPUT_FILE",
              description:
                "Google Cloud Storage location to read the input from. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
            {
              name: "OUTPUT_PATH",
              description:
                "Google Cloud Storage location to store the output file. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
          ],
        },
        {
          name: "detect-text-tiff",
          description:
            "Detect and transcribe text from TIFF files stored in Google Cloud Storage",
          options: [
            flag42,
            flag46,
            flag1107,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: [
            {
              name: "INPUT_FILE",
              description:
                "Google Cloud Storage location to read the input from. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
            {
              name: "OUTPUT_PATH",
              description:
                "Google Cloud Storage location to store the output file. It must be in\nGoogle Cloud Storage format (gs://bucket/object)",
            },
          ],
        },
        {
          name: "detect-web",
          description:
            "Detect entities in an image from similar images on the web",
          options: [
            flag42,
            flag46,
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag7674,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
        {
          name: "suggest-crop",
          description: "Suggest a bounding box in an image",
          options: [
            flag42,
            flag46,
            {
              name: "--aspect-ratios",
              description:
                "A list of aspect ratio hints for the suggested bounding box. Aspect ratios may be specified either as a decimal number (ex. 1.333) or as a ratio of width to height (ex 4:3)",
              args: {
                name: "ASPECT_RATIOS",
                description: "List",
                suggestions: [],
              },
            },
            flag1201,
            flag2292,
            flag4900,
            flag4902,
            flag5091,
            flag5453,
            flag5699,
            flag7356,
            flag11637,
            flag11946,
            flag14975,
            flag15315,
            flag15424,
          ],
          args: {
            name: "IMAGE_PATH",
            description:
              "Path to the image to be analyzed. This can be either a local path\nor a URL. If you provide a local file, the contents will be sent\ndirectly to Google Cloud Vision. If you provide a URL, it must be in\nGoogle Cloud Storage format (gs://bucket/object) or an HTTP URL\n(http://... or https://...)",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
