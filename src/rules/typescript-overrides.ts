import type { EslintRules } from '../models'

export const importDuplicates: EslintRules = {
  'import/no-duplicates': 'off',
}

export const eslintOverrides: EslintRules = {
  'constructor-super': 'off', // ts(2335) & ts(2377),
  'dot-notation': 'off',
  'getter-return': 'off', // ts(2378)
  'max-params': 'off',
  'no-array-constructor': 'off',
  'no-const-assign': 'off', // ts(2588),
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-duplicate-imports': 'off',
  'no-empty-function': 'off',
  'no-extra-semi': 'off',
  'no-func-assign': 'off', // ts(2539)
  'no-implied-eval': 'off',
  'no-import-assign': 'off', // ts(2539) & ts(2540)
  'no-loss-of-precision': 'off',
  'no-new-symbol': 'off', // ts(2588)
  'no-obj-calls': 'off', // ts(2349)
  'no-redeclare': 'off', // ts(2451)
  'no-setter-return': 'off', // ts(2408)
  'no-shadow': 'off', // @typescript-eslint/no-shadow
  'no-this-before-super': 'off', // ts(2376)
  'no-undef': 'off', // ts(2304)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
  'prefer-const': 'error', // ts provides better types with const
  'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
  'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
  'require-await': 'off',
  'valid-typeof': 'off', // ts(2367)
}
