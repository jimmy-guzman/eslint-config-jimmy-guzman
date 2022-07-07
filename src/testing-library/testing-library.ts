import type { EslintRules } from '../models'

/**
 * https://github.com/testing-library/eslint-plugin-testing-library/tree/v5.1.0/docs/rules
 */
export const testingLibraryRules: EslintRules = {
  /**
   * (testing-library/await-async-query)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/await-async-query.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: ensures that promises returned by async queries are handled properly
   */
  'testing-library/await-async-query': 'error',
  /**
   * (testing-library/await-async-utils)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/await-async-utils.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: ensures that promises returned by async utils are handled properly
   */
  'testing-library/await-async-utils': 'error',
  /**
   * (testing-library/await-fire-event)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/await-fire-event.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: ensures that promises returned by async `fireEvent` are handled properly
   * - NOTES: this rule only applies to Vue projects
   */
  'testing-library/await-fire-event': 'error',
  /**
   * (testing-library/consistent-data-testid)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/consistent-data-testid.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: this rule is project specific
   */
  'testing-library/consistent-data-testid': 'off',
  /**
   * (testing-library/no-await-sync-events)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-await-sync-events.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: ensures that sync simulated events are not awaited unnecessarily
   */
  'testing-library/no-await-sync-events': 'error',
  /**
   * (testing-library/no-await-sync-query)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-await-sync-query.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: ensure that sync queries are not awaited unnecessarily.
   */
  'testing-library/no-await-sync-query': 'error',
  /**
   * (testing-library/no-container)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-container.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: by using `container` methods like `.querySelector` you may lose a lot of the confidence that the user can really interact with your UI
   */
  'testing-library/no-container': 'error',
  /**
   * (testing-library/no-debugging-utils)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-debugging-utils.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: `console.log` and debug statements can pollute the logs. debug statements should only be reserved for debugging
   */
  'testing-library/no-debugging-utils': 'error',
  /**
   * (testing-library/no-dom-import)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-dom-import.md]
   * - TYPE: `🚨 error`
   * - RATIONALE:
   */
  'testing-library/no-dom-import': 'error',
  /**
   * (testing-library/no-manual-cleanup)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-manual-cleanup.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: using `cleanup` is not needed since it happens automatically
   */
  'testing-library/no-manual-cleanup': 'error',
  /**
   * (testing-library/no-node-access)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-node-access.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: it should not be necessary to use node queries since testing library already provides methods
   */
  'testing-library/no-node-access': 'error',
  /**
   * (testing-library/no-promise-in-fire-event)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-promise-in-fire-event.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: Prevent errors by not passing a promise to `fireEvent` since it requires a DOM element not a promise
   */
  'testing-library/no-promise-in-fire-event': 'error',
  /**
   * (testing-library/no-render-in-setup)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-render-in-setup.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: avoid `render` function in setup function in favor of having it closer to test assertions
   */
  'testing-library/no-render-in-setup': 'error',
  /**
   * (testing-library/no-unnecessary-act)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-unnecessary-act.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: wrapping Testing Library utils with `act` silences "not wrapped in act(...)" warnings which can tell you that something unexpected is happening
   */
  'testing-library/no-unnecessary-act': 'error',
  /**
   * (testing-library/no-wait-for-empty-callback)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-wait-for-empty-callback.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: passing and empty callback means the utils will wait to next tick on the event loop instead of the philosophy of Testing Library
   */
  'testing-library/no-wait-for-empty-callback': 'error',
  /**
   * (testing-library/no-wait-for-multiple-assertions)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-wait-for-multiple-assertions.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Forces only one assertion inside of `waitFor` to align with it's intentions. Putting one assertion, you can both wait for the UI to settle to the state you want to assert on, and also fail faster if one of the assertions do end up failing
   */
  'testing-library/no-wait-for-multiple-assertions': 'error',
  /**
   * (testing-library/no-wait-for-side-effects)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-wait-for-side-effects.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: see https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#performing-side-effects-in-waitfor
   */
  'testing-library/no-wait-for-side-effects': 'error',
  /**
   * (testing-library/no-wait-for-snapshot)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/no-wait-for-snapshot.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: Forces no `toMatchSnapshot` or `toMatchInlineSnapshot` in order to avoid multiple snapshots from being created.
   */
  'testing-library/no-wait-for-snapshot': 'error',
  /**
   * (testing-library/prefer-explicit-assert)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-explicit-assert.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   * - NOTES: revisit
   */
  'testing-library/prefer-explicit-assert': 'off',
  /**
   * (testing-library/prefer-find-by)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-find-by.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Avoid using getBy* queries and waitFor together since findBy* covers it.
   */
  'testing-library/prefer-find-by': 'error',
  /**
   * (testing-library/prefer-presence-queries)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-presence-queries.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Forces getBy* to bused to assert presence and queryBy* for not present.
   */
  'testing-library/prefer-presence-queries': [
    'error',
    { presence: true, absence: true },
  ],
  /**
   * (testing-library/prefer-query-by-disappearance)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-query-by-disappearance.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Using queryBy* queries in a waitForElementToBeRemoved yields more descriptive error messages and helps to achieve more consistency in a codebase.
   */
  'testing-library/prefer-query-by-disappearance': 'error',
  /**
   * (testing-library/prefer-screen-queries)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-screen-queries.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: Using `screen` works better with autocomplete and makes each test a little simpler to write and maintain.
   */
  'testing-library/prefer-screen-queries': 'error',
  /**
   * (testing-library/prefer-user-event)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-user-event.md]
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: `userEvent` adds related event calls from browsers to make tests more realistic than its counterpart `fireEvent`, which is a low-level api.
   */
  'testing-library/prefer-user-event': 'error',
  /**
   * (testing-library/prefer-wait-for)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/prefer-wait-for.md]
   * - TYPE: `🚨 error`
   * - RATIONALE: `waitForElement` and `waitForDomChange` are deprecated
   */
  'testing-library/prefer-wait-for': 'error',
  /**
   * (testing-library/render-result-naming-convention)[https://github.com/testing-library/eslint-plugin-testing-library/blob/v5.1.0/docs/rules/render-result-naming-convention.md]
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: avoid the name "wrapper" makes sense since it's not a wrapper but the alternatives are limiting
   */
  'testing-library/render-result-naming-convention': 'off',
}
