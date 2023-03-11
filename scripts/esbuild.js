const esbuild = require('esbuild')

const defaultOptions = {
  bundle: true,
  color: true,
  logLevel: 'info',
  minifyIdentifiers: false,
  minifySyntax: false,
  minifyWhitespace: false,
  platform: 'node',
  sourcemap: false,
  target: 'node14',
}

module.exports = async ({
  watch = process.argv.includes('--watch'),
  entryPoints = ['src/index.ts'],
  outdir = 'dist',
}) => {
  const options = { ...defaultOptions, entryPoints, outdir }

  if (watch) {
    const context = await esbuild.context(options)

    try {
      await context.watch()
    } catch (error) {
      context.dispose()
    }
  } else {
    await esbuild.build(options)
  }
}
