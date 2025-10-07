import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";

export default function withOptionalFiles(
  configs: Linter.Config[],
  files: string[] | undefined,
): Linter.Config[] {
  if (files != null) return defineConfig({ files, extends: configs });
  return configs;
}
