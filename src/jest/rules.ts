import type { EslintRules } from '../models'

const overrides = <const>{
  'max-classes-per-file': 'off',
  'max-lines-per-function': 'off',
  'max-statements': 'off',
  'react/display-name': 'off',
}

/**
 * https://github.com/jest-community/eslint-plugin-jest/tree/v27.0.0/docs/rules
 */
export const rules: EslintRules = {
  'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],
  'jest/expect-expect': 'warn',
  /**
   * [jest/max-expects](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/max-expects.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Provides max assertions are made to prevent likely mix of multiple objectives when too many assertions
   */
  'jest/max-expects': 'error',
  /**
   * [jest/max-nested-describe](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/max-nested-describe.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: having too many levels of nesting throughout your tests make them difficult to read
   */
  'jest/max-nested-describe': [
    'error',
    {
      max: 2,
    },
  ],
  /**
   * [jest/no-alias-methods](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/no-alias-methods.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: helps ensure consistency among the method names used
   */
  'jest/no-alias-methods': 'error',
  'jest/no-commented-out-tests': 'error',
  /**
   * - TYPE: `🚨 error`
   * - RATIONALE: Jest considers a test failure only if an assertion throws so catching or making an assertion a conditional can be error prone.
   */
  'jest/no-conditional-expect': 'error',
  /**
   * [jest/no-conditional-in-test](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/no-conditional-in-test.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Conditional logic in tests is usually an indication that a test is attempting to cover too much, and not testing the logic it intends to.
   */
  'jest/no-conditional-in-test': 'error',
  'jest/no-deprecated-functions': 'warn',
  'jest/no-disabled-tests': 'warn',
  /**
   * Avoid using a callback in asynchronous tests and hooks
   * - https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md
   */
  'jest/no-done-callback': 'error',
  'jest/no-duplicate-hooks': 'error',
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-hooks': 'off',
  'jest/no-identical-title': 'error',
  'jest/no-if': 'off',
  /**
   * Disallow string interpolation inside snapshots
   * - https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
   */
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
  'jest/no-restricted-matchers': 'off',
  'jest/no-standalone-expect': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/no-test-return-statement': 'off',
  'jest/prefer-called-with': 'error',
  /**
   * [jest/prefer-comparison-matcher](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-comparison-matcher.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Using built-in matchers for comparing numbers which allow for more readable tests and error messages if an expectation fails
   */
  'jest/prefer-comparison-matcher': 'error',
  /**
   * [jest/prefer-each](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-each.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: generally you should be able to use .each instead which gives better output and makes it easier to run specific cases.
   */
  'jest/prefer-each': 'error',
  /**
   * [jest/prefer-equality-matcher](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-equality-matcher.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Using built-in matchers for comparing numbers which allow for more readable tests and error messages if an expectation fails
   */
  'jest/prefer-equality-matcher': 'error',
  'jest/prefer-expect-assertions': 'off',
  /**
   * [jest/prefer-expect-resolves](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-expect-resolves.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: more predictable behavior and output from jest and consistency
   */
  'jest/prefer-expect-resolves': 'error',
  /**
   * [jest/prefer-hooks-in-order](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-hooks-in-order.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: aims to make that more obvious by enforcing grouped hooks be setup in that order within tests.
   */
  'jest/prefer-hooks-in-order': 'error',
  'jest/prefer-hooks-on-top': 'error',
  /**
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: This provides more readable test failures
   */
  'jest/prefer-lowercase-title': 'error',
  /**
   * [jest/prefer-snapshot-hint](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-snapshot-hint.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Makes it easier for reviewers to verify the snapshots during review when they are multiple snapshots
   */
  'jest/prefer-snapshot-hint': 'error',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-strict-equal': 'off',
  /**
   * [jest/prefer-to-be](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-to-be.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: mainly for better error messages
   */
  'jest/prefer-to-be': 'error',
  /**
   * [jest/prefer-to-contain](https://github.com/jest-community/eslint-plugin-jest/blob/v27.0.0/docs/rules/prefer-to-contain.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: mainly for better failure messages
   */
  'jest/prefer-to-contain': 'error',
  /**
   * [jest/prefer-to-have-length](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: for a better error message and clearer intention
   */
  'jest/prefer-to-have-length': 'error',
  'jest/prefer-todo': 'warn',
  /**
   * [jest/require-hook](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: there's not leveraging the before* and after* to handle setup and teardown
   */
  'jest/require-hook': 'error',
  'jest/require-to-throw-message': 'off',
  'jest/require-top-level-describe': 'off',
  /**
   * [jest/unbound-method](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md)
   * - TYPE: N/A
   * - RATIONALE: this rule requires type information
   */
  'jest/unbound-method': 'off', // revisit
  /**
   * - TYPE: `🚨 error`
   * - RATIONALE: The callback in a describe block should be async, not contain any parameters, and not contain a return statement otherwise it can lead to unexpected errors
   */
  'jest/valid-describe-callback': 'error',
  'jest/valid-expect': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-title': 'error',
  ...overrides,
}
