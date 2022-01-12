import { EslintRules } from '../models'
import { namingConventions } from './naming-conventions'

export const rules: EslintRules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  /**
   * - NOTES: fixable
   */
  '@typescript-eslint/array-type': 'off', // revisit
  /**
   * - TYPE: `🚨 error`
   * - RATIONALE: Prevents awaiting values that are not promises which is often an error
   * - FIXABLE: false
   * - NOTES: requires parser settings
   */
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error', // fixable
  '@typescript-eslint/ban-types': 'error',
  /**
   * - NOTES: fixable
   */
  '@typescript-eslint/class-literal-property-style': 'off', // revisit
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'], // fixable
  '@typescript-eslint/consistent-type-assertions': 'off', // revisit
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // fixable
  /**
   * [@typescript-eslint/consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: N/A
   */
  '@typescript-eslint/consistent-type-exports': 'off',
  /**
   * - NOTES: fixable
   */
  '@typescript-eslint/consistent-type-imports': 'off', // revisit
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'error', // fixable
  /**
   * [@typescript-eslint/explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)
   * - TYPE: `♻️ best-practice`
   * - RATIONALE: Explicit types for function return values makes it clear to any calling code what type is returned but this can be annoying and by having `explicit-module-boundary-types` it should suffice
   */
  '@typescript-eslint/explicit-function-return-type': 'off',
  /**
   * - NOTES: fixable
   */
  '@typescript-eslint/explicit-member-accessibility': 'off', // revisit
  /**
   * [@typescript-eslint/explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)
   * - TYPE: `♻️ best-practice`
   * - RATIONALE: Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output
   */
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/init-declarations': 'off',
  /**
   * - NOTES: fixable
   */
  '@typescript-eslint/lines-between-class-members': 'off', // revisit,
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: {
        memberTypes: ['signature', 'method', 'constructor', 'field'],
        order: 'alphabetically',
      },
    },
  ],
  '@typescript-eslint/method-signature-style': ['error', 'property'], // fixable
  /**
   * [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/naming-convention.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Enforcing naming conventions helps keep the codebase consistent, and reduces overhead when thinking about how to name a variable.
   */
  '@typescript-eslint/naming-convention': ['error', ...namingConventions],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-base-to-string': 'warn',
  '@typescript-eslint/no-confusing-non-null-assertion': 'off', //fixable
  /**
   * [@typescript-eslint/no-confusing-void-expression](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)
   * - TYPE: `♻️ best-practice`
   * - RATIONALE: Returning the results of an expression whose type is void can be misleading. `ignoreArrowShorthand` is enabled since it collides with `prettier`
   * - FIXABLE: true
   */
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true, ignoreVoidOperator: false },
  ],
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-duplicate-imports': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error', // fixable
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'off', // revisit
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implicit-any-catch': 'error', // fixable
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-invalid-void-type': 'warn',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  /**
   * [@typescript-eslint/no-meaningless-void-operator](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Helps an author catch API changes where previously a value was being discarded at a call site, but the callee changed so it no longer returns a value
   */
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'warn',
  '@typescript-eslint/no-namespace': 'error',
  /**
   * [@typescript-eslint/no-non-null-asserted-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Using non-null assertions in the left operand of the nullish coalescing operator is redundant
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-parameter-properties': 'error',
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-require-imports': 'off',
  /**
   * [@typescript-eslint/no-restricted-imports]()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: This rule is project dependent
   */
  '@typescript-eslint/no-restricted-imports': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  /**
   * [no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-throw-literal.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: It is considered good practice to only throw the `Error` object itself or an object using the `Error` because they automatically keep track of where they were built and originated
   */
  '@typescript-eslint/no-throw-literal': [
    'error',
    {
      allowThrowingAny: true,
      allowThrowingUnknown: true,
    },
  ],
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // fixable
  '@typescript-eslint/no-unnecessary-condition': 'error', // fixable
  '@typescript-eslint/no-unnecessary-qualifier': 'error', // fixable
  '@typescript-eslint/no-unnecessary-type-arguments': 'error', // fixable
  '@typescript-eslint/no-unnecessary-type-assertion': 'error', // fixable
  '@typescript-eslint/no-unnecessary-type-constraint': 'error', // fixable
  /**
   * [@typescript-eslint/no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Calling a function with `any` typed argument can create a potential safety hole, and source of bugs in your codebase
   */
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'off', // revisit
  '@typescript-eslint/no-unsafe-call': 'off', // revisit
  '@typescript-eslint/no-unsafe-member-access': 'off', // revisit
  '@typescript-eslint/no-unsafe-return': 'off', // revisit
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
  '@typescript-eslint/no-useless-constructor': 'off',
  '@typescript-eslint/no-var-requires': 'error',
  /**
   * [@typescript-eslint/non-nullable-type-assertion-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Verbose type casts offer more information
   */
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  /**
   * [@typescript-eslint/padding-line-between-statement](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/padding-line-between-statements.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: padding between types or interface definitions does not improve readability
   */
  '@typescript-eslint/padding-line-between-statements': 'off',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error', // fixable
  '@typescript-eslint/prefer-includes': 'error', // fixable
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error', // fixable
  '@typescript-eslint/prefer-readonly-parameter-types': 'off', // revisit
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn', // fixable
  '@typescript-eslint/prefer-regexp-exec': 'error',
  /**
   * [@typescript-eslint/prefer-return-this-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)
   * - TYPE: N/A
   * - RATIONALE: N/A
   */
  '@typescript-eslint/prefer-return-this-type': 'off', // revisit
  '@typescript-eslint/prefer-string-starts-ends-with': 'error', // fixable
  '@typescript-eslint/prefer-ts-expect-error': 'error', //fixable
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/return-await': 'error', // fixable
  /**
   * [@typescript-eslint/sort-type-union-intersection-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Sorting can help keep your codebase standardized, find repeated types and reduce diff churn
   */
  '@typescript-eslint/sort-type-union-intersection-members': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'off', // revisit
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/typedef': 'off', // revisit
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'warn',
}
