import type { Linter, Rule } from 'eslint'

declare module 'eslint-plugin-react-hooks' {
  export const configs: {
    recommended: {
      plugins: string[],
      rules: Linter.RulesRecord
    }
  }

  export const rules: Record<string, Rule.RuleModule>
}
