# autocomplete (personal fork)

Completion specs for hundreds of CLI tools, originally built by
[Fig](https://github.com/withfig/autocomplete) and its 400+ contributors.

> [!NOTE]
> **This is a personally maintained fork of
> [withfig/autocomplete](https://github.com/withfig/autocomplete).**
> Upstream has been inactive since 2025-05, so completion specs here are
> updated independently against locally installed CLI versions and consumed
> by [Kiro CLI](https://kiro.dev/docs/cli/) through the legacy Fig path
> `~/.fig/autocomplete/build/` (see
> [kirodotdev/Kiro#4445](https://github.com/kirodotdev/Kiro/issues/4445)).

## 🔄 How specs reach the shell

Kiro CLI (ex Amazon Q Developer CLI) normally loads compiled specs from a CDN
(`specs.q.us-east-1.amazonaws.com`) that mirrors the frozen upstream repo. This
fork bypasses the CDN for local use:

```bash
# Build all specs and sync them to ~/.fig/autocomplete/build/
scripts/sync-local-specs.sh

# Same, but skip `git pull` (e.g. when testing a working branch)
pnpm run sync-local
```

A `launchd` agent (`com.okabe-junya.autocomplete-sync`) runs the sync daily at
12:00 so merged changes appear in the terminal without manual steps.

## 🛠 Development

```bash
pnpm install         # install dependencies
pnpm create-spec abc # scaffold a new spec at src/abc.ts
pnpm dev             # watch & compile while editing
pnpm test            # typecheck all specs
pnpm lint:fix        # eslint + prettier
pnpm build           # compile src/ -> build/
```

A completion spec is a _declarative_ TypeScript schema describing a CLI's
`subcommands`, `options` and `args`. See
[withfig/autocomplete-tools](https://github.com/withfig/autocomplete-tools) for
the toolchain and
[@withfig/autocomplete-types](https://github.com/withfig/autocomplete-types)
for the `Fig.Spec` type definitions.

### Maintenance policy

- Specs are updated against **locally installed CLI versions** (stable/GA
  surface only; alpha/experimental flags are skipped).
- Conventions: descriptions without trailing periods, boolean flags carry no
  `args`, enum values become `args.suggestions`, generator-based dynamic
  suggestions are preserved.
- Changes land via PRs with squash merge; CI runs lint and typecheck.

## 🙏 Credits

This project is entirely built on the work of the original
[Fig](https://fig.io) team (later Amazon Q Developer CLI /
[aws/amazon-q-developer-cli](https://github.com/aws/amazon-q-developer-cli))
and the withfig community. The engine that renders these specs remains open
source at
[aws/amazon-q-developer-cli-autocomplete](https://github.com/aws/amazon-q-developer-cli-autocomplete).

## ✨ Contributors

All original contributors to
[withfig/autocomplete](https://github.com/withfig/autocomplete/graphs/contributors) —
thank you.

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img alt="Grid of profile icons of the 400+ contributors" src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>

## 📄 License

[MIT](LICENSE) — original copyright (c) 2021 Hercules Labs Inc. (Fig).
