import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Ban default exports by default
      "import/no-default-export": "error",

      // Ensure named imports match named exports
      "import/named": "error",
    },
  },
  // Exceptions — files that MUST allow default export
  {
    files: [
      // Next.js App Router
      "src/app/**/{page,layout,template,not-found,loading,error,global-error}.tsx",
      "src/app/**/route.ts",

      // Tooling / configs
      "keystatic.config.*",
      "tailwind.config.*",
      "next.config.*",
      "eslint.config.*",
      "postcss.config.*",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/prefer-default-export": "off",
    },
  },
]);

export default eslintConfig;
