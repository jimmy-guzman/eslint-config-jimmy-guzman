const { esbuild } = require('./esbuild')

const ROOT_DIR = './test'

const entryPoints = [
  `${ROOT_DIR}/base.ts`,
  `${ROOT_DIR}/jest.ts`,
  `${ROOT_DIR}/imports.ts`,
  `${ROOT_DIR}/typescript.ts`,
  `${ROOT_DIR}/react.ts`,
]

esbuild({ entryPoints, outdir: 'test/dist' })
