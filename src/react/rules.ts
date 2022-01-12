import { EslintRules } from '../models'
import { jsxA11yRules } from './jsx-a11y'
import { eslintOverrides } from './overrides'

const hooksRules = <const>{
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
}

export const rules: EslintRules = {
  ...eslintOverrides,
  ...jsxA11yRules,
  ...hooksRules,
  'react/boolean-prop-naming': [
    'error',
    { rule: '^(is|has|should|can|did|will)[A-Z]([A-Za-z0-9]?)+' },
  ],
  /**
   * (react/button-has-type)[https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/button-has-type.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: turning off due to this issue https://github.com/yannickcr/eslint-plugin-react/issues/1846
   */
  'react/button-has-type': 'off', // revisit
  'react/default-props-match-prop-types': 'error',
  'react/destructuring-assignment': 'off',
  'react/display-name': 'warn',
  'react/forbid-component-props': 'off',
  'react/forbid-dom-props': 'off',
  'react/forbid-elements': 'off',
  'react/forbid-foreign-prop-types': 'off',
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],
  'react/function-component-definition': 'off',
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-curly-brace-presence': 'off',
  'react/jsx-filename-extension': 'off',
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': 'off',
  'react/jsx-key': 'warn',
  'react/jsx-max-depth': 'off',
  'react/jsx-no-bind': 'off',
  'react/jsx-no-comment-textnodes': 'warn',
  /**
   * [react/jsx-no-constructed-context-values](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/jsx-no-constructed-context-values.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: Prevent needless rerenders and unintended consequences when using object in context
   */
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  'react/jsx-no-literals': 'off',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-target-blank': 'warn',
  'react/jsx-no-undef': 'warn',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-default-props': 'off',
  'react/jsx-sort-props': 'off',
  /**
   * [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/jsx-uses-react.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: React 17's new jsx transform is favored so this rule is not needed
   */
  'react/jsx-uses-react': 'off',
  'react/jsx-uses-vars': 'warn',
  'react/no-access-state-in-setstate': 'error',
  'react/no-adjacent-inline-elements': 'warn',
  'react/no-array-index-key': 'off',
  /**
   * [react/no-arrow-function-lifecycle](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/no-arrow-function-lifecycle.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: It is not necessary to use arrow function for lifecycle methods.
   */
  'react/no-arrow-function-lifecycle': 'error',
  'react/no-children-prop': 'warn',
  'react/no-danger': 'off',
  'react/no-danger-with-children': 'warn',
  'react/no-deprecated': 'warn',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'warn',
  'react/no-find-dom-node': 'warn',
  /**
   * [react/no-invalid-html-attribute](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/no-invalid-html-attribute.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Minimize confusion by using wrong values for `rel` html attribute
   */
  'react/no-invalid-html-attribute': 'error',
  'react/no-is-mounted': 'warn',
  'react/no-multi-comp': 'off',
  /**
   * [react/no-namespace](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/no-namespace.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: avoids namespaces in React elements since they're not supported
   */
  'react/no-namespace': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'warn',
  'react/no-set-state': 'off',
  'react/no-string-refs': 'warn',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unescaped-entities': 'warn',
  'react/no-unknown-property': 'warn',
  'react/no-unsafe': 'off',
  /**
   * [react/no-unstable-nested-components](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/no-unstable-nested-components.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: Prevents unstable components by avoiding creating components inside components without memoization
   */
  'react/no-unstable-nested-components': 'error',
  /**
   * [react/no-unused-class-component-methods](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/no-unused-class-component-methods.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: unused methods can take up space in the code and can lead to confusion by readers
   */
  'react/no-unused-class-component-methods': 'error',
  'react/no-unused-prop-types': 'error',
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': 'off',
  /**
   * [react/prefer-exact-props](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/prefer-exact-props.md)
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'react/prefer-exact-props': 'off', // revisit
  'react/prefer-read-only-props': 'off',
  'react/prefer-stateless-function': 'off',
  'react/prop-types': 'error',
  /**
   * [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/v7.27.0/docs/rules/react-in-jsx-scope.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: React 17's new jsx transform is favored so this rule is not needed
   */
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react/require-optimization': 'off',
  'react/require-render-return': 'warn',
  'react/self-closing-comp': 'error',
  'react/sort-comp': 'off',
  'react/sort-prop-types': 'off',
  'react/state-in-constructor': 'off',
  'react/static-property-placement': 'off',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
}
