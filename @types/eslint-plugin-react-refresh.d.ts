declare module "eslint-plugin-react-refresh" {
  import type { Linter, Rule } from "eslint";

  type Config = {
    plugins: { "react-refresh": { rules: Record<string, Rule.RuleModule> } };
    rules: Record<string, Linter.RulesRecord>;
  };

  export const rules: Record<string, Rule.RuleModule>;

  export const configs: {
    recommended: Config;
    vite: Config;
  };
}
