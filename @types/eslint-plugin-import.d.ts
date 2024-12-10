declare module "eslint-plugin-import" {
  import type { ESLint, Linter, Rule } from "eslint";

  type Config = {
    rules: Linter.RulesRecord;
    languageOptions?: { ecmaVersion: 2018; sourceType: "module" };
    name: string;
    plugins: {
      import: ESLint.Plugin;
    };
  };

  type LegacyConfig = {
    rules: Linter.RulesRecord;
    parserOptions?: { ecmaVersion: 2018; sourceType: "module" };
    plugins: string[];
  };

  type Settings = {
    settings: Record<string, any>;
    rules?: Linter.RulesRecord;
    languageOptions?: { parserOptions: { ecmaFeatures: { jsx: true } } };
  };

  type LegacySettings = {
    settings: Record<string, any>;
    rules?: Linter.RulesRecord;
    parserOptions?: { ecmaFeatures: { jsx: true } };
  };

  export const flatConfigs: Record<
    "recommended" | "errors" | "warnings",
    Config
  > &
    Record<"react" | "react-native" | "typescript" | "electron", Settings>;

  export const configs: Record<
    "recommended" | "errors" | "warnings" | "stage-0",
    LegacyConfig
  > &
    Record<
      "react" | "react-native" | "typescript" | "electron",
      LegacySettings
    >;

  export const rules: Record<string, Rule.RuleModule>;
}
