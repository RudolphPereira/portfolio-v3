import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig({
  extends: [...nextVitals, ...nextTs],
  rules: {
    "no-unused-vars": "error", // Disallow unused variables
    "no-console": "error", // Disallow console.log
    "prefer-const": "error", // Require const when variables are never reassigned
    quotes: ["error", "double"], // Enforce double quotes
    semi: ["error", "always"], // Require semicolons
    "no-multiple-empty-lines": ["error", { max: 1 }], // Limit empty lines
    "no-extra-semi": "error", // Disallow unnecessary semicolons
    "react/no-array-index-key": "warn", // Warn on array index keys in lists
    "react/react-in-jsx-scope": "off", // Disable need for React in scope (Next.js)
    "no-undef": "off", // Turn off undefined variable checks (handled by TS)
    camelcase: "error", // Enforce camelCase naming
  },
  ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
});

export default eslintConfig;
