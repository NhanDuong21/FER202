import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.jest } },
    settings: { react: { version: "detect" } },
    rules: {
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },

  // QUAN TRỌNG: bỏ qua thư viện để tránh spam lỗi
  {
    ignores: ["node_modules/**", "build/**"],
  },
];
