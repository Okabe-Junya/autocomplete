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
> Specs are distributed via Homebrew
> (`brew install okabe-junya/tap/autocomplete-specs`).

## 🔄 How specs reach the shell

Kiro CLI defaults to compiled specs served from a CDN
(`specs.q.us-east-1.amazonaws.com`) that mirrors the frozen upstream repo; this
fork bypasses that CDN and installs specs locally via Homebrew.

```bash
brew tap okabe-junya/tap
```

```bash
brew install okabe-junya/tap/autocomplete-specs
```

The formula's `post_install` symlinks `~/.fig/autocomplete/build` ->
`$(brew --prefix)/opt/autocomplete-specs/share/autocomplete-specs/build`, so
specs update on every `brew upgrade`. Releases are published automatically by
[`.github/workflows/release.yml`](.github/workflows/release.yml) on every
`master` push that touches `src/`, and the formula in
[Okabe-Junya/homebrew-tap](https://github.com/Okabe-Junya/homebrew-tap) is
bumped automatically (requires the `HOMEBREW_TAP_GITHUB_TOKEN` secret).

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

## ✨ Contributors

<a href="https://github.com/Okabe-Junya/autocomplete/graphs/contributors">
  <img alt="Grid of profile icons of the 400+ contributors" src="https://contrib.rocks/image?repo=Okabe-Junya/autocomplete" />
</a>

## 📄 License

[MIT](LICENSE) — original copyright (c) 2021 Hercules Labs Inc. (Fig).
