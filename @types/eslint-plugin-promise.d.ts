declare module "eslint-plugin-promise" {
  import type { ESLint, Linter, Rule } from "eslint";

  export const rulesConfig: Record<string, number>;
  export const rules: Record<string, Rule.RuleModule>;
  export const configs: {
    "flat/recommended": {
      rules: Linter.RulesRecord;
      plugins: { promise: ESLint.Plugin };
      name: "promise/flat/recommended";
    };
    recommended: {
      rules: Linter.RulesRecord;
      plugins: ["promise"];
      name: "promise/flat/recommended";
    };
  };
}
