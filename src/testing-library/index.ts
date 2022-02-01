import { jestDomRules } from './jest-dom'
import { testingLibraryRules } from './testing-library'

export = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['testing-library', 'jest-dom'],
      rules: { ...testingLibraryRules, ...jestDomRules },
    },
  ],
}
