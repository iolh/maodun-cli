import js from "@eslint/js";
import { defineConfig } from "eslint/config";
// import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
    {
        files: ["{packages,apps}/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        extends: [
            "js/recommended",
            tseslint.configs.recommended,
            eslintConfigPrettier,
            // pluginReact.configs.flat.recommended,
        ],
        ignores: ["apps/**/*/{tmp,.dumi}/**/*", "*.js", "**/*/templates/**/*", "**/*/build/**/*", "**/*/es/**/*", "**/*/dist/**/*"],
        plugins: { js, "simple-import-sort": simpleImportSort },
        languageOptions: { globals: globals.browser },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
]);
