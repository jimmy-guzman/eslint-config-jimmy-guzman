export = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null,
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.next/',
    'coverage/',
    'vite.config.ts.*.mjs',
    'storybook-static/',
  ],
}
