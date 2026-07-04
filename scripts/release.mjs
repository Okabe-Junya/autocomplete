#!/usr/bin/env node
// Packages the compiled specs (build/) into a tarball and attaches it to the
// already-published GitHub release identified by the TAG env var. Emits
// `version` and `sha256` step outputs when running in GitHub Actions.
// Requires: `pnpm build` already run, `gh` authenticated, TAG set to a SemVer
// tag (vX.Y.Z) that already exists as a published release.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { appendFileSync, readFileSync } from "node:fs";

const { TAG } = process.env;

if (!TAG) {
  console.error("TAG must be set to the released tag (e.g. v1.2.3)");
  process.exit(1);
}
if (!/^v\d+\.\d+\.\d+$/.test(TAG)) {
  console.error(`TAG must match vX.Y.Z (got "${TAG}")`);
  process.exit(1);
}

const version = TAG.slice(1);

const tarball = `autocomplete-specs-${version}.tar.gz`;
execFileSync("tar", ["-czf", tarball, "build"], { stdio: "inherit" });
const sha256 = createHash("sha256").update(readFileSync(tarball)).digest("hex");

// The release already exists (published from a release-drafter draft); attach
// the built tarball as an asset rather than creating a new release.
execFileSync("gh", ["release", "upload", TAG, tarball, "--clobber"], {
  stdio: "inherit",
});

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `version=${version}\nsha256=${sha256}\n`
  );
}
console.log(`Uploaded ${tarball} to ${TAG} (sha256 ${sha256})`);
