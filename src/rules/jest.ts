import type { EslintRules } from '../models'

const overrides = <const>{
  'max-classes-per-file': 'off',
  'max-lines-per-function': 'off',
  'max-statements': 'off',
  'react/display-name': 'off',
}

/**
 * https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
 */
export const rules: EslintRules = {
  'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],
  'jest/expect-expect': 'warn',
  'jest/max-expects': 'error',
  'jest/max-nested-describe': [
    'error',
    {
      max: 2,
    },
  ],
  'jest/no-alias-methods': 'error',
  'jest/no-commented-out-tests': 'error',
  'jest/no-conditional-expect': 'error',
  'jest/no-conditional-in-test': 'error',
  'jest/no-confusing-set-timeout': 'error',
  'jest/no-deprecated-functions': 'warn',
  'jest/no-disabled-tests': 'warn',
  'jest/no-done-callback': 'error',
  'jest/no-duplicate-hooks': 'error',
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-hooks': 'off',
  'jest/no-identical-title': 'error',
  'jest/no-if': 'off',
  'jest/no-interpolation-in-snapshots': 'error',
  'jest/no-jasmine-globals': 'warn',
  'jest/no-large-snapshots': [
    'warn',
    {
      maxSize: 60,
      inlineMaxSize: 6,
    },
  ],
  'jest/no-mocks-import': 'error',
  'jest/no-restricted-jest-methods': 'off',
  'jest/no-restricted-matchers': 'off',
  'jest/no-standalone-expect': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/no-test-return-statement': 'off',
  'jest/no-untyped-mock-factory': 'off', // revisit
  'jest/prefer-called-with': 'error',
  'jest/prefer-comparison-matcher': 'error',
  'jest/prefer-each': 'error',
  'jest/prefer-equality-matcher': 'error',
  'jest/prefer-expect-assertions': 'off',
  'jest/prefer-expect-resolves': 'error',
  'jest/prefer-hooks-in-order': 'error',
  'jest/prefer-hooks-on-top': 'error',
  'jest/prefer-lowercase-title': 'off',
  'jest/prefer-mock-promise-shorthand': 'error',
  'jest/prefer-snapshot-hint': 'error',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-strict-equal': 'off',
  'jest/prefer-to-be': 'error',
  'jest/prefer-to-contain': 'error',
  'jest/prefer-to-have-length': 'error',
  'jest/prefer-todo': 'warn',
  'jest/require-hook': 'error',
  'jest/require-to-throw-message': 'off',
  'jest/require-top-level-describe': 'off',
  'jest/unbound-method': 'off', // revisit
  'jest/valid-describe-callback': 'error',
  'jest/valid-expect': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-title': 'error',
  ...overrides,
}
