module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Ensure compatibility with Node.js environment
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Enables React-specific rules
    "plugin:@typescript-eslint/recommended", // Enables TypeScript-specific rules
    "plugin:react-hooks/recommended", // Enforces rules of React hooks
    "plugin:prettier/recommended", // Integrates Prettier with ESLint
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // Files/folders to ignore
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Use modern ECMAScript syntax
    sourceType: "module", // Allows the use of import/export statements
    ecmaFeatures: {
      jsx: true, // Allows parsing of JSX
    },
  },
  plugins: ["react-refresh", "@typescript-eslint", "react"], // Include relevant plugins
  rules: {
    // React-specific rules
    "react/react-in-jsx-scope": "off", // Not required for React 17+
    "react/prop-types": "off", // Disable prop-types validation when using TypeScript
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // TypeScript-specific rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Prettier rules
    "prettier/prettier": ["error"],
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
