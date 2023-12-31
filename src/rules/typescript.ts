import type { EslintRules } from '../models'

import { namingConventions } from './naming-conventions'
import { eslintOverrides, importDuplicates } from './typescript-overrides'

/**
 * https://typescript-eslint.io/rules
 */
export const rules: EslintRules = {
  ...importDuplicates,
  ...eslintOverrides,
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'off', // revisit
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/block-spacing': 'off',
  '@typescript-eslint/class-literal-property-style': 'off', // revisit,
  '@typescript-eslint/class-methods-use-this': 'off', // revisit
  '@typescript-eslint/consistent-generic-constructors': [
    'error',
    'constructor',
  ],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': 'off', // revisit
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', disallowTypeAnnotations: true },
  ],
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off', // revisit
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/key-spacing': 'off',
  '@typescript-eslint/lines-around-comment': 'off',
  '@typescript-eslint/lines-between-class-members': 'off', // revisit,
  '@typescript-eslint/max-params': ['error', { max: 3 }],
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
  '@typescript-eslint/naming-convention': ['error', ...namingConventions],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-base-to-string': 'warn',
  '@typescript-eslint/no-confusing-non-null-assertion': 'off', //fixable
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true, ignoreVoidOperator: false },
  ],
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error', // fixable
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'off', // revisit
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-invalid-this': 'error',
  '@typescript-eslint/no-invalid-void-type': 'warn',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'warn',
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-restricted-imports': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-this-alias': 'error',
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
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'off', // revisit
  '@typescript-eslint/no-unsafe-call': 'off', // revisit
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'off', // revisit,
  '@typescript-eslint/no-unsafe-return': 'off', // revisit
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
  '@typescript-eslint/no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/no-useless-template-literals': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/padding-line-between-statements': 'off',
  '@typescript-eslint/parameter-properties': 'off', // revisit
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-destructuring': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'off',
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
  '@typescript-eslint/prefer-return-this-type': 'off', // revisit
  '@typescript-eslint/prefer-string-starts-ends-with': 'error', // fixable
  '@typescript-eslint/prefer-ts-expect-error': 'error', //fixable
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/return-await': 'error', // fixable
  '@typescript-eslint/sort-type-constituents': 'error',
  '@typescript-eslint/space-before-blocks': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off', // revisit
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/typedef': 'off', // revisit
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'warn',
}
