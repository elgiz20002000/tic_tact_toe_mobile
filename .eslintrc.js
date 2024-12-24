/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    "simple-import-sort",
    "unused-imports",
    "react",
    "@typescript-eslint",
  ],
  rules: {
    "no-unused-vars": "off",
    "no-undef": "warn",
    'react/react-in-jsx-scope': 'off',
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "babel.config.js",
    "metro.config.js",
    "node_modules/",
    "dist/",
    "build/",
    ".eslintrc.js"
  ],
};