module.exports = {
  extends: [
    './dist',
    './dist/typescript',
    './dist/vitest',
    './dist/testing-library',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
}
