import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsparser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: pluginImport
    },
    rules: {
      ...prettierConfig.rules,

      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-unused-vars": ["off"],
      "import/order": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-undef": "off",
    },
  },
];
