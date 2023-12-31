module.exports = {
  extends: [
    './dist',
    './dist/typescript',
    './dist/vitest',
    './dist/testing-library',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
}
