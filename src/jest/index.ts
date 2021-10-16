import { rules } from './rules'

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
