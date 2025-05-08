import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import type { ConfigWithExtends } from "typescript-eslint";

const defaultRules = {
  plugins: {
    "react-refresh": eslintPluginReactRefresh,
  },
} satisfies ConfigWithExtends;

export const reactRefreshPlugin = {
  ...defaultRules,
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: false },
    ],
  },
} satisfies ConfigWithExtends;

export const reactRefreshPluginVite = {
  ...defaultRules,
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
} satisfies ConfigWithExtends;

export const reactRefreshPluginNext = {
  ...defaultRules,
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowExportNames: [
          "experimental_ppr",
          "dynamic",
          "dynamicParams",
          "revalidate",
          "fetchCache",
          "runtime",
          "preferredRegion",
          "maxDuration",
          "generateStaticParams",
          "metadata",
          "generateMetadata",
          "viewport",
          "generateViewport",
        ],
      },
    ],
  },
} satisfies ConfigWithExtends;
