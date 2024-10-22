import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node // Tambahkan ini untuk mengenali environment Node.js
    }
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
