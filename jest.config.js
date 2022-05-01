module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.tsx?$': [
      'esbuild-runner/jest',
      {
        sourcemap: true,
      },
    ],
  },
}
