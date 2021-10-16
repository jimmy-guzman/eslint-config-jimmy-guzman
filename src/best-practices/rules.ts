export const rules = {
  'accessor-pairs': 'warn',
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  /**
   * Enforce that class methods utilize `this`
   * - https://eslint.org/docs/rules/class-methods-use-this
   */
  'class-methods-use-this': ['error', { exceptMethods: [] }],
  'complexity': ['error', 10],
  'consistent-return': 'error',
  'curly': 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': ['error'],
  'dot-notation': 'error',
  'eqeqeq': 'error',
  /**
   * Require grouped accessor pairs in object literals and classes
   * - https://eslint.org/docs/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': 'error',
  'max-classes-per-file': 'error',
  'no-alert': 'error',
  'no-caller': 'error',
  /**
   * []()
   * - TYPE: `♻️ best-practices`
   * - RATIONALE:
   */
  'no-console': 'warn',
  'no-constructor-return': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  /**
   * Disallow empty functions
   * - https://eslint.org/docs/rules/no-empty-function
   */
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  /**
   * Disallow the type conversion with shorter notations
   * - works with `--fix`
   * - https://eslint.org/docs/rules/no-implicit-coercion
   */
  'no-implicit-coercion': [
    'error',
    {
      boolean: true,
      number: true,
      string: true,
      allow: [],
    },
  ],
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'off',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  /**
   * Disallow Magic Numbers
   * - https://eslint.org/docs/rules/no-magic-numbers
   */
  'no-magic-numbers': 'off',
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   * - https://eslint.org/docs/rules/no-nonoctal-decimal-escape
   */
  'no-nonoctal-decimal-escape': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'off',
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-restricted-globals': ['error', 'event', 'fdescribe'],
  'no-restricted-properties': 'off',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-unmodified-loop-condition': 'error',
  /**
   * Disallow Unused Expressions
   * - https://eslint.org/docs/rules/no-unused-expressions
   */
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  /**
   * [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: It's unnecessary to provide an empty constructor or one that simply delegates into its parent class
   */
  'no-useless-constructor': 'error',
  /**
   * [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: It's a completely redundant operation, as this is the same as not renaming at all
   */
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  /**
   * [no-var](https://eslint.org/docs/rules/no-var)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Block scope from `let` and `const` helps avoid mistakes
   */
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': 'warn',
  /**
   * [prefer-const](https://eslint.org/docs/rules/prefer-const)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Block scope from `let` and `const` helps avoid mistakes
   */
  'prefer-const': 'error',
  'prefer-named-capture-group': 'off',
  /**
   * Require using Error objects as Promise rejection reasons
   * - https://eslint.org/docs/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': 'off',
  /**
   * [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: `arguments` does not have methods of `Array.prototype`, so it's a bit of an inconvenience.
   */
  'prefer-rest-params': 'error',
  /**
   * [prefer-template](https://eslint.org/docs/rules/prefer-template)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Helps avoid the messiness avoid using string concatenation
   */
  'prefer-template': 'error',
  'radix': 'error',
  /**
   * @todo
   */
  'require-await': 'error',
  'require-unicode-regexp': 'off',
  'strict': 'error',
  /**
   * [symbol-description](https://eslint.org/docs/rules/symbol-description)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Using description promotes easier debugging
   */
  'symbol-description': 'error',
  'vars-on-top': 'error',
  'yoda': ['error', 'never'],
}
