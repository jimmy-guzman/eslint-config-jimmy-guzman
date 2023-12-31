/** @type {import("prettier").Options} */
module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  semi: false,
  singleQuote: true,
  printWidth: 80,
  jsxSingleQuote: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  quoteProps: 'consistent',
  overrides: [
    {
      files: ['pnpm-lock.yaml', 'CHANGELOG.md'],
      options: {
        rangeEnd: 0,
      },
    },
  ],
}
