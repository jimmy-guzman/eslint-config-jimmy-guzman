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
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/'],
}
