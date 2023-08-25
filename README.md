![actions][actions-badge]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![License][license-badge]][license]
[![semantic-release][semantic-release-badge]][semantic-release]
[![code style: prettier][prettier-badge]][prettier]
[![Code Coverage][coverage-badge]][coverage]

# eslint-config-jimmy-guzman

> An opinionated ESLint configuration that targets typescript, javascript, react, jest vitest and testing-library

# Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Why](#why)
- [Contributing](./CONTRIBUTING.md)

# Usage

> The current version of `eslint-config-jimmy-guzman` is fully supported on [LTS and current versions of node][node-lts-versions], and requires at least node v14.

## Installation:

**This requires the peer dependencies:** `eslint@^8.24.0`, `typescript@^4.5.0`, and `prettier@^2.4.0`.

_To easily install everything you can leverage [`install-peerdeps`][install-peerdeps], i.e_

| for             | how                                                                 |
| --------------- | ------------------------------------------------------------------- |
| yarn/npm        | `npx install-peerdeps --dev eslint-config-jimmy-guzman`             |
| yarn workspaces | `npx install-peerdeps eslint-config-jimmy-guzman --dev -yarn -x -W` |
| pnpm            | `pnpm dlx install-peerdeps eslint-config-jimmy-guzman --dev --pnpm` |

## Configuration

Add `extends: 'jimmy-guzman'` to your `.eslintrc` to get all the rules that enforce code style, enforce best practices and prevent errors.

This package also includes rules for `jest`, `vitest`, `react`, `typescript` and `testing-library` that can be used such as:

| rules           | configuration                                                                     | notes                    |
| --------------- | --------------------------------------------------------------------------------- | ------------------------ |
| base            | `extends: 'jimmy-guzman'`                                                         |                          |
| jest            | `extends: ['jimmy-guzman', 'jimmy-guzman/jest']`                                  |                          |
| vitest          | `extends: ['jimmy-guzman', 'jimmy-guzman/vitest']`                                |                          |
| typescript      | `extends: ['jimmy-guzman', 'jimmy-guzman/typescript']`                            | [here](#typescript)      |
| react           | `extends: ['jimmy-guzman', 'jimmy-guzman/react']`                                 | [here](#react)           |
| testing-library | `extends: ['jimmy-guzman', 'jimmy-guzman/react', 'jimmy-guzman/testing-library']` | [here](#testing-library) |

### Monorepos

The following rules don't support some monorepo setups so you might need to turned them off:

```yml
# .eslintrc.yml
rules:
  import/no-extraneous-dependencies: off
```

### Typescript

`jimmy-guzman/typescript` ruleset requires type information that needs further configuration:

```yml
# .eslintrc.yml
parserOptions:
  project: ['./tsconfig.json']
```

You can read more about linting with type information [here][typed-linting]

### React

`jimmy-guzman/react` favors [React 17's new jsx transform][react-17-new-jsx-transform] so a couple of rules are turned off by default. If you are not using the new jsx transform, it's recommended to add this configuration:

```yml
parserOptions:
  ecmaFeatures:
    jsx: true
    pragma: React
rules:
  react/react-in-jsx-scope: error
  react/jsx-uses-react: error
```

### Testing Library

`jimmy-guzman/testing-library` makes an assumption that a suite of Testing Library packages are being used such as [@testing-library/react](https://github.com/testing-library/react-testing-library#readme), [@testing-library/jest-dom](https://github.com/testing-library/jest-dom#readme) and [@testing-library/user-event](https://github.com/testing-library/user-event#readme).

## Why

I wanted a one-stop shop for the ESLint rules across my projects to help keep up with ESLint upgrades across different plugins and to have consistency. Feel free to use this if it fits your needs. ❤️

<!-- badges -->

[actions-badge]: https://img.shields.io/github/workflow/status/jimmy-guzman/eslint-config-jimmy-guzman/release?label=actions&logo=github-actions&style=flat-square
[version-badge]: https://img.shields.io/npm/v/eslint-config-jimmy-guzman.svg?logo=npm&style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-jimmy-guzman
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-jimmy-guzman.svg?logo=npm&style=flat-square
[npmtrends]: http://www.npmtrends.com/eslint-config-jimmy-guzman
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier
[prettier]: https://github.com/prettier/prettier
[license]: https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/blob/master/package.json
[license-badge]: https://img.shields.io/npm/l/eslint-config-jimmy-guzman.svg?style=flat-square
[coverage-badge]: https://img.shields.io/codecov/c/github/jimmy-guzman/eslint-config-jimmy-guzman.svg?style=flat-square&logo=codecov
[coverage]: https://codecov.io/github/jimmy-guzman/eslint-config-jimmy-guzman

<!-- misc -->

[install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[typed-linting]: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
[node-lts-versions]: https://nodejs.org/en/about/releases/#releases
[react-17-new-jsx-transform]: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
