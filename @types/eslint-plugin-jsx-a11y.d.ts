

declare module "eslint-plugin-jsx-a11y" {
  import type { ESLint, Linter, Rule } from "eslint";

  interface A11yOldConfig {
    parserOptions: Linter.ParserOptions;
    plugins: string[];
    rules: Linter.RulesRecord;
  }

  interface A11yConfig {
    languageOptions: Linter.LanguageOptions;
    name: string;
    plugins: Record<string, ESLint.Plugin>;
    rules: Linter.RulesRecord;
  }

  export const meta: {
    name: string;
    version: string;
  };
  export const rules: Record<string, Rule.RuleModule>;
  export const configs: {
    recommended: A11yOldConfig;
    strict: A11yOldConfig;
  };
  export const flatConfigs: {
    recommended: A11yConfig;
    strict: A11yConfig;
  };
}
