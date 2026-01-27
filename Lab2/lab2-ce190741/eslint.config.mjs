import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

// Use the exported config objects from @eslint/js and eslint-plugin-react
// instead of the 'extends' key which is not supported in flat config.
export default [
  // include the recommended base rules from @eslint/js
  js.configs.recommended,

  // include the recommended flat config from eslint-plugin-react
  pluginReact.configs.flat.recommended,

  // project-specific overrides: apply to JS/JSX files and set globals/rules
  {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  // enable browser and jest globals via languageOptions.globals (flat config)
  languageOptions: { globals: { ...globals.browser, ...globals.jest } },
    // let eslint-plugin-react detect the installed React version
    settings: { react: { version: "detect" } },
    rules: {
      "no-unused-vars": "warn", // warn on defined but never used
      "react/react-in-jsx-scope": "off", // React 17+ doesn't require React in scope for JSX
    },
  },
];
