const { esbuild } = require('./esbuild')

const ROOT_DIR = './src'

const entryPoints = [
  `${ROOT_DIR}/index.ts`,
  `${ROOT_DIR}/base`,
  `${ROOT_DIR}/best-practices`,
  `${ROOT_DIR}/errors`,
  `${ROOT_DIR}/imports`,
  `${ROOT_DIR}/jest`,
  `${ROOT_DIR}/style`,
  `${ROOT_DIR}/typescript`,
  `${ROOT_DIR}/react`,
  `${ROOT_DIR}/testing-library`,
]

esbuild({ entryPoints })
