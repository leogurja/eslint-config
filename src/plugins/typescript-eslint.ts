import ts, { type ConfigWithExtends } from "typescript-eslint";

const defaultRules = [
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: true,
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
          ignoreArrowShorthand: true,
        },
      ],
    },
  },
] satisfies ConfigWithExtends[];

export function typescriptEslint(typeLinting = true): ConfigWithExtends[] {
  if (!typeLinting) return defaultRules;
  return [
    {
      extends: [
        ...ts.configs.strictTypeCheckedOnly,
        ...ts.configs.stylisticTypeCheckedOnly,
      ],
      languageOptions: {
        parserOptions: {
          projectService: {
            allowDefaultProject: ["*.{js,cjs,mjs,ts,cts,mts}"],
          },
        },
      },
    },
    ...defaultRules,
  ];
}
