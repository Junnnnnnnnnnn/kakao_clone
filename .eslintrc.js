module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "import",
    "unused-imports",
    "simple-import-sort",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
  rules: {
    // TypeScript rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-base-to-string": "off",

    // Import rules
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/no-unresolved": "error",
    "import/no-cycle": "warn",
    "import/newline-after-import": "error",

    // Unused imports
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

    // Simple import sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // General JavaScript rules
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "arrow-body-style": ["error", "as-needed"],
    "prefer-const": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
  },
};
