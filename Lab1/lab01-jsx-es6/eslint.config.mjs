import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,

  {
    rules: {
      "no-unused-vars": "warn", // tắt “defined but never used”
      "react/react-in-jsx-scope": "off", // React 17+ không cần import React cho JSX
    },
  },
]);
