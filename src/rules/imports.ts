import type { EslintRules } from '../models'

const rules: EslintRules = {
  'import/consistent-type-specifier-style': 'off', // revisit
  'import/default': 'error',
  'import/dynamic-import-chunkname': 'off',
  'import/export': 'error',
  'import/exports-last': 'error',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': [
    'error',
    { esmodule: true, commonjs: true, amd: false },
  ],
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-commonjs': 'off',
  'import/no-cycle': 'warn',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'warn',
  'import/no-duplicates': 'off',
  'import/no-dynamic-require': 'off',
  'import/no-empty-named-blocks': 'off', // revisit
  'import/no-extraneous-dependencies': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-internal-modules': 'off', // revisit
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': 'error',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'off',
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'error',
    {
      'groups': [
        'builtin',
        'external',
        'type',
        'internal',
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import/prefer-default-export': 'off',
  'import/unambiguous': 'off',
  'node-import/prefer-node-protocol': 'error',
}

export default rules
