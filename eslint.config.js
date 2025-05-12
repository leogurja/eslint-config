import { config, configs, globals } from "@gurja/eslint-config";

// export default config(configs.node, {
//   files: ["test/**/*.{test,spec}.ts"],
//   extends: configs.jest,
// });

export default config(
  // by default it uses the tsconfig.json at the same level as the eslint config file for type linting
  {
    files: ["packages/jquery-app/**/*.js"],
    languageOptions: {
      globals: globals.jquery,
    },
  },
  {
    files: ["packages/next-project/**/*.{ts,tsx,js,jsx}"],
    extends: configs.next,
    rules: {
      "react-compiler/react-compiler": "off", // customize your rules if you find it necessary
    },
  },
  configs.disableTypeChecking, // you can disable type linting, make sure to user this at the end
);
