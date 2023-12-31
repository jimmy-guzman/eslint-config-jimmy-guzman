import type { EslintRules } from '../models'

/**
 * https://github.com/testing-library/eslint-plugin-jest-dom/tree/v4.0.1/docs/rules
 */
export const jestDomRules: EslintRules = {
  /**
   * (jest-dom/prefer-checked)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-checked.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Prevent false positives and improve readability
   */
  'jest-dom/prefer-checked': 'error',
  /**
   * (jest-dom/prefer-empty)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-empty.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Ensures people will use toBeEmptyDOMElement() rather than checking dom nodes/properties
   */
  'jest-dom/prefer-empty': 'error',
  /**
   * (jest-dom/prefer-enabled-disabled)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-enabled-disabled.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Prevent false positives and improve readability
   */
  'jest-dom/prefer-enabled-disabled': 'error',
  /**
   * (jest-dom/prefer-focus)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-focus.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Improve readability & consistency
   */
  'jest-dom/prefer-focus': 'error',
  /**
   * (jest-dom/prefer-in-document)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-in-document.md]
   * - TYPE:
   * - RATIONALE:
   */
  'jest-dom/prefer-in-document': 'error',
  /**
   * (jest-dom/prefer-required)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-required.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: prevent false positives and improve readability
   */
  'jest-dom/prefer-required': 'error',
  /**
   * (jest-dom/prefer-to-have-attribute)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-to-have-attribute.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Improve readability & consistency
   */
  'jest-dom/prefer-to-have-attribute': 'error',
  /**
   * (jest-dom/prefer-to-have-class)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-to-have-class.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Improve readability & consistency
   */
  'jest-dom/prefer-to-have-class': 'error',
  /**
   * (jest-dom/prefer-to-have-style)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-to-have-style.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Improve readability & consistency
   */
  'jest-dom/prefer-to-have-style': 'error',
  /**
   * (jest-dom/prefer-to-have-text-content)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-to-have-text-content.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Improve readability & consistency
   */
  'jest-dom/prefer-to-have-text-content': 'error',
  /**
   * (jest-dom/prefer-to-have-value)[https://github.com/testing-library/eslint-plugin-jest-dom/blob/v4.0.1/docs/rules/prefer-to-have-value.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Improve readability & consistency
   */
  'jest-dom/prefer-to-have-value': 'error',
}
