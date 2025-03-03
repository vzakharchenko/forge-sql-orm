import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import vitest from "eslint-plugin-vitest";

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
      import: pluginImport,
      vitest: vitest,
    },
    rules: {
      ...prettierConfig.rules,

      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-unused-vars": ["off"],
      "import/order": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-focused-tests": "error",
      "no-undef": "off",
      "vitest/valid-expect": "error",
    },
  },
];
