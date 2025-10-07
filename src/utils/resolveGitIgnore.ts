import { gitignoreToMinimatch } from "@humanwhocodes/gitignore-to-minimatch";
import { findUp } from "find-up";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const FLAT_CONFIG_FILENAMES = [
  "eslint.config.js",
  "eslint.config.mjs",
  "eslint.config.cjs",
] as const;

export async function resolveIgnoresFromGitignore() {
  const configFile = await findUp(FLAT_CONFIG_FILENAMES);

  if (!configFile) {
    return [];
  }

  const result: string[] = [];

  const content = await readFile(
    join(dirname(configFile), ".gitignore"),
    "utf8",
  );

  for (let line of content.split("\n")) {
    line = line.trim();

    if (line && !line.startsWith("#")) {
      result.push(gitignoreToMinimatch(line));
    }
  }

  return result;
}
