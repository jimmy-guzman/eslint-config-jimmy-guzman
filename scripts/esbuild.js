const { build } = require('esbuild')

const esbuild = async ({
  watch = process.argv.includes('--watch'),
  entryPoints = ['src/index.ts'],
  outdir = 'dist',
}) => {
  try {
    await build({
      bundle: true,
      entryPoints,
      logLevel: 'info',
      minifyIdentifiers: false,
      minifySyntax: false,
      minifyWhitespace: false,
      outdir,
      platform: 'node',
      sourcemap: false,
      target: 'node12',
      watch,
    })
    if (!watch) {
      process.exit(0)
    }
  } catch (err) {
    process.exit(1)
  }
}

module.exports = { esbuild }
