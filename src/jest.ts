import { rules } from './rules/jest'

export = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: { 'jest/globals': true },
      plugins: ['jest'],
      rules,
    },
  ],
}
