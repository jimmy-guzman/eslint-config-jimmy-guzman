import { EslintRules } from '../models'
import { deprecatedEslintRules } from './deprecated'

export const rules: EslintRules = {
  ...deprecatedEslintRules,
  /**
   * [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: N/A
   */
  'arrow-body-style': 'off', // revisit
  /**
   * [camelcase](https://eslint.org/docs/rules/camelcase)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: N/A
   */
  'camelcase': 'off', // revisit
  /**
   * [capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is not much value in enforcing casing of comments
   */
  'capitalized-comments': 'off',
  /**
   * [consistent-this]()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is not much value in enforcing naming pattern of `this`
   */
  'consistent-this': 'off',
  /**
   * [func-name-matching](https://eslint.org/docs/rules/func-name-matching)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: provides consistency when creating functions assigned to a variable or property
   */
  'func-name-matching': 'error',
  /**
   * [func-names](https://eslint.org/docs/rules/func-names)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: prevents "anonymous function" in the stack trace which will help with debugging
   */
  'func-names': ['error', 'as-needed'],
  /**
   * [func-style](https://eslint.org/docs/rules/func-style)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: both function declarations and function expressions have a part to play
   */
  'func-style': 'off',
  /**
   * [id-denylist](https://eslint.org/docs/rules/id-denylist
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: generic names can lead to hard-to-decipher code which this rule helps prevent so it warrants a revisit
   */
  'id-denylist': 'off', // revisit
  /**
   * [id-length](https://eslint.org/docs/rules/id-length)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: very short names can make code harder to read and potentially less maintainable
   */
  'id-length': ['error', { min: 2 }],
  /**
   * [id-match](https://eslint.org/docs/rules/id-match)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: enforce an id naming pattern (camelCase, PascalCase, __identifier, CONST_VALUE, stream$, $el) to provide consistency
   */
  'id-match': ['error', '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$'],
  /**
   * [init-declarations](https://eslint.org/docs/rules/init-declarations)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there's valid use cases for both variables assigned during declaration, or at any point afterwards using an assignment statement
   */
  'init-declarations': 'off',
  /**
   * [line-comment-position](https://eslint.org/docs/rules/line-comment-position)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: comments above or beside can be justified as clean code
   */
  'line-comment-position': 'off',
  /**
   * [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: improves readability by enforcing lines between class members
   */
  'lines-between-class-members': 'error',
  /**
   * [max-depth](https://eslint.org/docs/rules/max-depth)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: improves readability by limiting the depth of nested blocks
   */
  'max-depth': ['error', 4],
  /**
   * [max-lines](https://eslint.org/docs/rules/max-lines)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: large files can usually lead to code smells and make it hard to follow what's going on
   */
  'max-lines': [
    'error',
    { max: 500, skipBlankLines: true, skipComments: true },
  ],
  /**
   * [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: large functions tend to do a lot of things and can make it hard following what's going on
   */
  'max-lines-per-function': [
    'error',
    { max: 50, skipBlankLines: true, skipComments: true },
  ],
  /**
   * [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: improves readability by limiting the depth of nested call backs
   */
  'max-nested-callbacks': ['error', 7],
  /**
   * [max-params](https://eslint.org/docs/rules/max-params)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: functions that take numerous parameters can be difficult to read and write because it requires the memorization of what each parameter is, its type, and the order they should appear in
   */
  'max-params': ['error', 3],
  /**
   * [max-statements](https://eslint.org/docs/rules/max-statements)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: this rules echos the motivation behind max-lines-per-function
   */
  'max-statements': ['error', 12],
  /**
   * [max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)
   * - TYPE: `♻️ best-practices`
   * - RATIONALE: code is generally read top down so having to many statements makes readability harder
   */
  'max-statements-per-line': ['error', { max: 1 }],
  /**
   * [multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is NOT much value in enforcing the style of comments
   */
  'multiline-comment-style': 'off',
  /**
   * [new-cap](https://eslint.org/docs/rules/new-cap)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: allows developers to easily determine which functions are meant to be used constructors
   */
  'new-cap': 'error',
  /**
   * [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: avoid using the Array constructors to create arrays because of the single-argument pitfall and because the Array global may be redefined
   */
  'no-array-constructor': 'error',
  /**
   * [no-bitwise](https://eslint.org/docs/rules/no-bitwise)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: potentially mistyping a bitwise operator is not sufficient to avoid using them
   */
  'no-bitwise': 'off',
  /**
   * [no-continue](https://eslint.org/docs/rules/no-continue)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: `continue` can be used incorrectly which makes code less testable, less readable and less maintainable
   */
  'no-continue': 'error',
  /**
   * [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: importing more than once from the same path leads to messy imports and it's not needed
   */
  'no-duplicate-imports': 'error',
  /**
   * [no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: there is not much value in enforcing comment style
   */
  'no-inline-comments': 'off',
  /**
   * [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: it's clearer to use an else if when an if statement is the only one in a else block
   */
  'no-lonely-if': 'error',
  /**
   * [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: chaining the assignment of variables can lead to unexpected results and be difficult to read
   */
  'no-multi-assign': 'error',
  /**
   * [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: code can be made more readable by avoiding negated conditions
   */
  'no-negated-condition': 'error',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-nested-ternary': 'error',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-new-object': 'error',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-plusplus': 'off',
  /**
   * [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: this rule is project specific
   */
  'no-restricted-exports': 'off', // revisit
  /**
   * [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: this rule is project specific
   */
  'no-restricted-imports': 'off', // revisit
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-restricted-syntax': 'off',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-ternary': 'off',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-underscore-dangle': 'off',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'no-unneeded-ternary': 'error',
  /**
   * [object-shorthand](https://eslint.org/docs/rules/object-shorthand)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Can make defining complex object literals much cleaner
   */
  'object-shorthand': 'error',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'one-var': 'off',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'operator-assignment': 'off',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
  ],
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'prefer-arrow-callback': 'error',
  /**
   * [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: Helps avoids the usage of temporary references for those properties
   */
  'prefer-destructuring': [
    'error',
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      VariableDeclarator: {
        array: true,
        object: true,
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      AssignmentExpression: {
        array: true,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: true,
    },
  ],
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'prefer-exponentiation-operator': 'warn',
  /**
   * [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: N/A
   */
  'prefer-numeric-literals': 'off', // revisit
  /**
   * [prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: shorthand to Object.prototype.hasOwnProperty.call() which is enforced by `no-prototype-builtins`
   * - @see https://github.com/microsoft/TypeScript/issues/44253
   */
  'prefer-object-has-own': 'off', // revisit
  'prefer-object-spread': 'error',
  /**
   * [prefer-spread](https://eslint.org/docs/rules/prefer-spread)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: It's cleaner than using `Function.prototype.apply()`
   */
  'prefer-spread': 'error',
  /**
   * [sort-imports](https://eslint.org/docs/rules/sort-imports)
   * - TYPE: `🎨 stylistic`
   * - RATIONALE: The import eslint plugin takes care of this
   */
  'sort-imports': 'off',
  'sort-keys': [
    'error',
    'asc',
    { caseSensitive: true, natural: false, minKeys: 5 },
  ],
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'sort-vars': 'off',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'space-before-blocks': 'error',
  /**
   * []()
   * - TYPE: `🎨 stylistic`
   * - RATIONALE:
   */
  'spaced-comment': 'off',
}
