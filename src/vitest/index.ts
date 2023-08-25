import { rules } from '../jest/rules'

export = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['jest'],
      rules: {
        ...rules,
        'jest/no-deprecated-functions': 'off',
        'jest/require-hook': [
          'error',
          {
            allowedFunctionCalls: ['vi.mock'],
          },
        ],
      },
    },
  ],
}
