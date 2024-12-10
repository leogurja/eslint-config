/// <reference path="../@types/next__eslint-plugin-next.d.ts" />

import { fixupPluginRules } from "@eslint/compat";
import legacyNextPlugin from "@next/eslint-plugin-next";
import { node } from "globals";
import ts from "typescript-eslint";
import { react, type ReactOptions } from "./react.js";

const nextPlugin = fixupPluginRules(legacyNextPlugin);

interface NextOptions extends Omit<ReactOptions, "jsxRuntime" | "vite"> {}

export function next({ globals }: NextOptions) {
  return ts.config(
    react({
      globals: {
        ...node,
        ...globals,
      },
      vite: false,
      jsxRuntime: true,
    }),
    {
      plugins: {
        next: nextPlugin,
      },
      rules: {
        ...legacyNextPlugin.configs["core-web-vitals"].rules,
        "import/no-default-export": "off",
        "jsx-a11y/alt-text": [
          "warn",
          {
            elements: ["img"],
            img: ["Image"],
          },
        ],
      },
    },
  );
}
