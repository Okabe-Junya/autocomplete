#!/usr/bin/env node
// Packages the compiled specs (build/) into a tarball and publishes it as a
// GitHub release. Emits `version` and `sha256` step outputs when running in
// GitHub Actions. Requires: `pnpm build` already run, `gh` authenticated.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { appendFileSync, readFileSync } from "node:fs";

const now = new Date();
const pad = (n) => String(n).padStart(2, "0");
const version = [
  now.getUTCFullYear(),
  pad(now.getUTCMonth() + 1),
  pad(now.getUTCDate()),
  `${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}`,
].join(".");

const tarball = `autocomplete-specs-${version}.tar.gz`;
execFileSync("tar", ["-czf", tarball, "build"], { stdio: "inherit" });
const sha256 = createHash("sha256").update(readFileSync(tarball)).digest("hex");

execFileSync(
  "gh",
  [
    "release",
    "create",
    `v${version}`,
    tarball,
    "--title",
    `specs v${version}`,
    "--notes",
    `Prebuilt completion specs from ${process.env.GITHUB_SHA ?? "a local build"}`,
  ],
  { stdio: "inherit" }
);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `version=${version}\nsha256=${sha256}\n`
  );
}
console.log(`Released v${version} (sha256 ${sha256})`);
