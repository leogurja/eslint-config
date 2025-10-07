import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";

export default function withOptionalFiles(
  configs: Linter.Config[],
  files: string[] | undefined,
) {
  if (files != null) return defineConfig({ files, extends: configs });
  return configs;
}
