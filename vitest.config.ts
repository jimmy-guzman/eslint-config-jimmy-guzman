// eslint-disable-next-line import/no-unresolved
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['json', 'text-summary', 'html'],
      exclude: [...(configDefaults.coverage.exclude ?? []), 'scripts'],
    },
  },
})
