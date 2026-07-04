#!/usr/bin/env bash
# Build completion specs and sync them into the legacy Fig path that
# Kiro CLI (ex Amazon Q Developer CLI) still reads for local specs:
#   ~/.fig/autocomplete/build/<cli-name>.js
# See https://github.com/kirodotdev/Kiro/issues/4445 for the path behavior.
#
# Usage: scripts/sync-local-specs.sh [--no-pull]
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="${HOME}/.fig/autocomplete/build"

cd "$REPO_DIR"

if [[ "${1:-}" != "--no-pull" ]]; then
  git pull --ff-only origin master
fi

pnpm install --frozen-lockfile
pnpm build

mkdir -p "$DEST"
rsync -a build/ "$DEST"/

echo "Synced $(find build -name '*.js' | wc -l | tr -d ' ') spec files to $DEST"
