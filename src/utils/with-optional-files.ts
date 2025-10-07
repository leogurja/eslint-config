import { defineConfig } from "eslint/config";
import type { Config } from "../types/config.js";

export default function withOptionalFiles(
  configs: Config[],
  files: string[] | undefined,
): Config[] {
  if (files != null) return defineConfig({ files, extends: configs });
  return configs;
}
