import { rules } from './rules'

/**
 * https://github.com/import-js/eslint-plugin-import/tree/v2.25.2#rules
 */
export = {
  plugins: ['import'],
  rules,
  overrides: [
    {
      files: ['**/?(*.)+(stories).[jt]s?(x)'],
      rules: {
        'import/exports-last': 'off',
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules'],
  },
}
