import { eslintOverrides, importDuplicates } from './overrides'
import { rules } from './rules'

export = {
  extends: ['prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        ...importDuplicates,
        ...eslintOverrides,
        ...rules,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
      },
    },
  ],
}
