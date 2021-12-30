import { EslintRules } from '../models'

export const rules: EslintRules = {
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  /**
   * [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)
   * - TYPE: `🚨 error`
   * - RATIONALE: enforces taking advantage of the parallelization benefits of async/await instead of performing an await for each operation in a loop
   */
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-semi': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  /**
   * []()
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'no-loss-of-precision': 'error',
  /**
   * []()
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'no-misleading-character-class': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-new-symbol': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-promise-executor-return': 'off',
  /**
   * [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
   * - TYPE: `🚨 error`
   * - RATIONALE: avoid bugs that can come from `Object.prototype`
   */
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-this-before-super': 'error',
  /**
   * []()
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  /**
   * []()
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  /**
   * [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)
   * - TYPE: `🚨 error`
   * - RATIONALE: class members take up space in the code and can lead to confusion by readers
   */
  'no-unused-private-class-members': 'error',
  'no-unused-vars': 'error',
  'no-use-before-define': ['error', 'nofunc'],
  /**
   * []()
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'no-useless-backreference': 'error',
  /**
   * []()
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'require-atomic-updates': 'off',
  'require-yield': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
}
