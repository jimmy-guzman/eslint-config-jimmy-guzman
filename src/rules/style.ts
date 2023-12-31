import type { EslintRules } from '../models'

const deprecatedEslintRules = <const>{
  'lines-around-comment': 'off',
}

export const rules: EslintRules = {
  ...deprecatedEslintRules,
  'arrow-body-style': 'off', // revisit
  'camelcase': 'off', // revisit
  'capitalized-comments': 'off',
  'consistent-this': 'off',
  'func-name-matching': 'error',
  'func-names': ['error', 'as-needed'],
  'func-style': ['error', 'expression'],
  'id-denylist': 'off', // revisit
  'id-length': ['error', { min: 2 }],
  'id-match': ['error', '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$'],
  'init-declarations': 'off',
  'line-comment-position': 'off',
  'lines-between-class-members': 'error',
  'logical-assignment-operators': 'off',
  'max-depth': ['error', 4],
  'max-lines': [
    'error',
    { max: 500, skipBlankLines: true, skipComments: true },
  ],
  'max-lines-per-function': [
    'error',
    { max: 50, skipBlankLines: true, skipComments: true },
  ],
  'max-nested-callbacks': ['error', 7],
  'max-params': ['error', 3],
  'max-statements': ['error', 12],
  'max-statements-per-line': ['error', { max: 1 }],
  'multiline-comment-style': 'off',
  'new-cap': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'off',
  'no-continue': 'error',
  'no-duplicate-imports': 'error',
  'no-inline-comments': 'off',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': 'off',
  'no-restricted-exports': 'off', // revisit
  'no-restricted-imports': 'off', // revisit
  'no-restricted-syntax': 'off',
  'no-ternary': 'off',
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': 'error',
  'object-shorthand': ['error', 'always'],
  'one-var': 'off',
  'operator-assignment': 'off',
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
  ],
  'prefer-arrow-callback': 'error',
  'prefer-destructuring': 'off',
  'prefer-exponentiation-operator': 'warn',
  'prefer-numeric-literals': 'off', // revisit
  'prefer-object-has-own': 'off', // revisit
  'prefer-object-spread': 'error',
  'prefer-spread': 'error',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'sort-vars': 'off',
  'space-before-blocks': 'off',
  'spaced-comment': 'off',
  'unicode-bom': 'off',
}
