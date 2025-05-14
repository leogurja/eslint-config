import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import type { ConfigArray } from "typescript-eslint";

const defaultRules = {
  name: "gurja/eslint-plugin-react-refresh",
  plugins: {
    "react-refresh": eslintPluginReactRefresh,
  },
};

export const reactRefreshPlugin: ConfigArray = [
  defaultRules,
  {
    name: "gurja/eslint-plugin-react-refresh/default",
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: false },
      ],
    },
  },
];

export const reactRefreshPluginVite: ConfigArray = [
  defaultRules,
  {
    name: "gurja/eslint-plugin-react-refresh/vite",
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];

export const reactRefreshPluginNext: ConfigArray = [
  defaultRules,
  {
    name: "gurja/eslint-plugin-react-refresh/next",
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
  },
];
