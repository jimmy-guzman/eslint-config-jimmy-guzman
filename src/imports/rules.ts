import type { EslintRules } from '../models'

export const rules: EslintRules = {
  /**
   * [import/default](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/default.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: prevents requesting a module as a default import that does not have a default export
   */
  'import/default': 'error',
  /**
   * [import/dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/dynamic-import-chunkname.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: webpack chunk name can be configured through webpack itself
   */
  'import/dynamic-import-chunkname': 'off',
  /**
   * [import/export](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/export.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: prevents repeated names of names or defaults which can lead to errors
   */
  'import/export': 'error',
  /**
   * [import/exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/exports-last.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: allows for quick visibility and consistency to what is being exported in a file
   */
  'import/exports-last': 'error',
  /**
   * [import/extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/extensions.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: with most resolvers the extension is not needed
   */
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  /**
   * [import/first](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/first.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: allows for quick visibility and consistency to what is being imported in a file
   */
  'import/first': 'error',
  /**
   * [import/group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/group-exports.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: `import/exports-last` accomplishes the same thing and requires less code
   */
  'import/group-exports': 'off',
  /**
   * [import/max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/max-dependencies.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: barrel files help organize imports which this rule does not account for
   */
  'import/max-dependencies': 'off',
  /**
   * [import/named](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/named.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: prevents requesting a module as a named import that does not have a named export
   */
  'import/named': 'error',
  /**
   * [import/namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/namespace.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: prevents errors when referencing a namespace's properties that do not exist
   */
  'import/namespace': 'error',
  /**
   * [import/newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/newline-after-import.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: prevents blurring the lines between code and imports
   */
  'import/newline-after-import': 'error',
  /**
   * [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-absolute-path.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: prevents errors when using absolutes since it ties the path to machines
   */
  'import/no-absolute-path': [
    'error',
    { esmodule: true, commonjs: true, amd: false },
  ],
  /**
   * [import/no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-amd.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: avoid using amd since is not widely used nor supported by build systems
   */
  'import/no-amd': 'error',
  /**
   * [import/no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-anonymous-default-export.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: helps improve discoverability of modules
   */
  'import/no-anonymous-default-export': 'error',
  /**
   * [import/no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-commonjs.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: commonjs module system is still widely supported by build systems
   */
  'import/no-commonjs': 'off',
  /**
   * [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-cycle.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: helps prevents circular dependencies which usually mean there's a flaw somewhere
   * - NOTES: this an expensive rule and there's other ways of detect circular dependencies
   */
  'import/no-cycle': 'warn',
  /**
   * [import/no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-default-export.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is no harm in using default exports and sometimes they're needed
   */
  'import/no-default-export': 'off',
  /**
   * [import/no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-deprecated.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: this rule is more valuable as a warning since using deprecated is not strictly wrong
   */
  'import/no-deprecated': 'warn',
  /**
   * [import/no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-duplicates.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: since import/extensions is being used and flow is not a common tech `no-duplicate-imports` trumps this rule
   */
  'import/no-duplicates': 'off',
  /**
   * [import/no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-dynamic-require.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: commonjs import modules are hardly used and this even rarer
   */
  'import/no-dynamic-require': 'off',
  /**
   * [import/no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-extraneous-dependencies.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: importing dependencies that are not being tracked can lead to untended consequences
   */
  'import/no-extraneous-dependencies': 'error',
  /**
   * [import/no-import-module-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-import-module-exports.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: This prevents an error when using webpack since you can't mix `import` and `module.exports`
   */
  'import/no-import-module-exports': 'error',
  /**
   * [import/no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-internal-modules.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: barrel files helps keep imports/exports clean and this rule encourages this practices
   */
  'import/no-internal-modules': 'off', // revisit
  /**
   * [import/no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-mutable-exports.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: this encourages immutability which leads to more confident code
   */
  'import/no-mutable-exports': 'error',
  /**
   * [import/no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-named-as-default.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: using an exported name as the name of the default export is likely misleading or mistake
   */
  'import/no-named-as-default': 'error',
  /**
   * [import/no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-named-as-default-member.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: accessing a property that has a name that is shared by an exported name from the same module is likely to be a mistake
   */
  'import/no-named-as-default-member': 'error',
  /**
   * [import/no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-named-default.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there's preference to take advantage of the syntax exists to import default exports expressively
   */
  'import/no-named-default': 'error',
  /**
   * [import/no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-named-export.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is no harm in using named exports
   */
  'import/no-named-export': 'off',
  /**
   * [import/no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-namespace.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is no harm in using namespaces
   */
  'import/no-namespace': 'off',
  /**
   * [import/no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-nodejs-modules.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: using built in nodejs modules on browser can lead to errors BUT this package support both node projects
   * - NOTES: browser
   */
  'import/no-nodejs-modules': 'off',
  /**
   * [import/no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-relative-packages.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: It's useful in yarn/lerna/pnpm workspaces since using the direct package is the correct way
   */
  'import/no-relative-packages': 'error',
  /**
   * [import/no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-relative-parent-imports.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: enforces tree-like folder structures instead of complex graph-like folder structures and limits "where to put files" debates
   */
  'import/no-relative-parent-imports': 'off',
  /**
   * [import/no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-restricted-paths.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: this rule is project specific
   */
  'import/no-restricted-paths': 'off',
  /**
   * [import/no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-self-import.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: a module that imports itself is usually a mistake and will cause most build systems to throw
   */
  'import/no-self-import': 'error',
  /**
   * [import/no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-unassigned-import.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: this rule prevents importing stylesheets which are common in web projects which this rule sets treats as first class citizen
   */
  'import/no-unassigned-import': 'off',
  /**
   * [import/no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-unresolved.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: importing a module that cannot be resolved is a mistake, this also checks for case which is helpful with macOS
   */
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  /**
   * [import/no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-unused-modules.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: will revisit this rule
   */
  'import/no-unused-modules': 'off',
  /**
   * [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-useless-path-segments.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: keeps imports clean and remove unnecessary noise which can lead to confusion
   */
  'import/no-useless-path-segments': 'error',
  /**
   * [import/no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/no-webpack-loader-syntax.md)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: inline webpack loader syntax is not standard
   */
  'import/no-webpack-loader-syntax': 'error',
  /**
   * [import/import/order](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/import/order.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: keeps imports organized and consistent
   */
  'import/order': [
    'error',
    {
      'groups': [
        'builtin',
        'external',
        'type',
        'internal',
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  /**
   * [import/prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/prefer-default-export.md)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there's no harm in using only named imports which usually preferred
   */
  'import/prefer-default-export': 'off',
  /**
   * [import/unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.25.2/docs/rules/unambiguous.md)
   * - TYPE: `🚨 error`
   * - RATIONALE: most modern build system always know how to parse
   */
  'import/unambiguous': 'off',
}
