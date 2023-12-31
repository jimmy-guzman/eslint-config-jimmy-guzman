import { jestDomRules } from './rules/jest-dom'
import { testingLibraryRules } from './rules/testing-library'

export = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['testing-library', 'jest-dom'],
      rules: { ...testingLibraryRules, ...jestDomRules },
    },
  ],
}
