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
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        strict: 'off',
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.next/',
    'coverage/',
    'vite.config.ts.*.mjs',
    'storybook-static/',
  ],
}
