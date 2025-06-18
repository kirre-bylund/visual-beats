// @ts-check
/** @type {import('eslint').FlatConfig[]} */
module.exports = [
  {
    ignores: [
      "**/node_modules/**",
      "apps/web/.next/**",
      "apps/api/lib/**",
      "packages/common/lib/**"
    ],
    files: ["apps/web/**/*.{ts,tsx,js,jsx}", "apps/api/**/*.ts", "packages/common/**/*.ts"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: ["./apps/web/tsconfig.json", "./apps/api/tsconfig.json", "./packages/common/tsconfig.json"],
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
  },
];
