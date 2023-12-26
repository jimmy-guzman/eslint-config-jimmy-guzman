# [11.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v10.1.0...v11.0.0) (2023-12-26)


### Features

* **ts:** ✨ add more rules and bump dependencies ([816ccf3](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/816ccf31220234a4f320af0c6734015baf820342))


### BREAKING CHANGES

* **ts:** 💥 new rules can potentially require code changes

# [10.1.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v10.0.0...v10.1.0) (2023-08-25)


### Features

* **imports:** ✨ bump `eslint-plugin-import` to v2.28.1 ([92be306](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/92be306df95daa90b6f22ecb06e4f4e2e464399e))
* **react:** ✨ bump `eslint-plugin-jsx-a11y` to v6.7.1 ([f9c6aab](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/f9c6aabcb831851f109521d35a5ee788f058b674))
* **react:** ✨ bump `eslint-plugin-react` to v7.28.0 ([286619c](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/286619c34f32de7a2f445e5782b34d812fc576a6))

# [10.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v9.1.0...v10.0.0) (2023-08-25)


### Features

* ✨ add support for node v20, drop support for node v14 ([77253c7](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/77253c7cfe39650f61eb05949cb91e15f95d0dd3))
* **deps:** ✨ bump `eslint-config-prettier` to v9.0.0 ([79cd191](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/79cd1916363321f1bcfb41b52a9a5916073adf67))
* **ts:** ✨ enable `no-duplicate-type-constituents` rule ([4469c8c](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/4469c8c08f0e97ce42c6dc45887dec6083c0b36e))
* **vitest:** ✨ introducing `vitest` support ([d0dc355](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/d0dc355d8a9d27c07fc4c4dcddb2f875864e6820))


### BREAKING CHANGES

* 💥 node v14 is no longer supported
* **ts:** 💥 new enabled rules can potentially require code changes

# [9.1.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v9.0.1...v9.1.0) (2023-03-31)


### Features

* **ts:** ✨ add support for path aliases ([4454351](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/4454351889eb744a65f4d8a72f28b05b69a66dc8))

## [9.0.1](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v9.0.0...v9.0.1) (2023-03-21)


### Bug Fixes

* 🐛 increase TypeScript peer dependency range ([5a41baa](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/5a41baa7a70043741e8d427a1a9ebf42362ee7e3))

# [9.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v8.0.0...v9.0.0) (2023-03-21)


### Features

* **ts:** ✨ enable a few TypeScript rules & support TypeScript v5 ([0a59ea3](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/0a59ea36e51eb2b6ee7cf92944162cef191b1baa))


### BREAKING CHANGES

* **ts:** 💥 new enabled rules can potentially require code changes

# [8.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v7.0.0...v8.0.0) (2022-10-02)


### Features

* **jest:** ✨ add `max-expects`, `prefer-each`, & `prefer-hooks-in-order` ([02761f0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/02761f0ddfa5fba6a7df211341eb203a19bb2fc4))
* **jest:** ✨ add `prefer-mock-promise-shorthand` rule ([94ace7f](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/94ace7f74e1e9b9b7a41aeec6442ffa52806a93f))
* **jest:** ✨ remove `no-jest-import` rule ([9d96898](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/9d968985d35c816448dcb3433edd34481d5705d7))
* **style:** ✨ leave `logical-assignment-operators` up to developers ([6fe8387](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/6fe8387077f76115a4a9bcf6a81c213389c149aa))
* **typescript:** ✨ support `typescript` v4.8 ([a6c3ef8](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/a6c3ef8daf89ac4b3d8ff7b0de5d23942596be9a))


### BREAKING CHANGES

* **jest:** 💥 `max-expects`, `prefer-each`, & `prefer-hooks-in-order`
require manual fixes
* **style:** 💥 `logical-assignment-operators` requires at least
`eslint` v8.24.0

# [7.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v6.0.0...v7.0.0) (2022-07-24)


### Features

* ✨ add support for node 18 and drop node 12 ([#131](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/131)) ([cab9ac7](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/cab9ac772d5f14044d23783425621f2c0e091ae4)), closes [#118](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/118)


### BREAKING CHANGES

* 💥 minimum node version is 14

# [6.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v5.0.0...v6.0.0) (2022-07-07)


### Features

* **typescript:** ✨ enable and add new rules ([f7425ad](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/f7425ad4894e6791728979cad62ba1a1b8fae8d5)), closes [#119](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/119)


### BREAKING CHANGES

* **typescript:** 💥 `consistent-type-imports`, `consistent-type-exports`,
`no-duplicate-enum-values` and `consistent-generic-constructor` potentially
require fixes

# [5.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v4.0.0...v5.0.0) (2022-05-01)


### Features

* **base:** ✨ add `no-constant-binary-expression` rule ([b971844](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/b971844ab62c810253c481c7b1c2e04117fc050a)), closes [#88](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/88)


### BREAKING CHANGES

* **base:** 💥 `no-constant-binary-expression` requires `eslint`
version `8.14.0` and it's not automatically fixable

# [4.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v3.0.0...v4.0.0) (2022-03-13)


### Features

* **jest:** ✨ bump `eslint-plugin-jest` to `^26.1.1` for new rules ([afd993c](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/afd993c495a73a5bc6100092af5ce818b9a8983f))


### BREAKING CHANGES

* **jest:** 💥 `prefer-snapshot-hint`, `prefer-equality-matcher` and
`prefer-comparison-matcher` require fixes.

# [3.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v2.1.0...v3.0.0) (2022-03-13)


### Features

* **typescript:** ✨ bump [@typescript-eslint](https://github.com/typescript-eslint) to `^5.14.0` for new rules ([a5830e4](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/a5830e467790e7bd235b6a60c837fba9f773fd7b))


### BREAKING CHANGES

* **typescript:** 💥 both `no-redundant-type-constituents` &
`no-useless-empty-export` require fixes

# [2.1.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v2.0.2...v2.1.0) (2022-03-13)


### Features

* **testing-library:** ✨ add both `testing-library` & `jest-dom` rules ([1fb5e0f](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/1fb5e0f2021bac0c1d39b7091e7c7804383ec12c)), closes [#24](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/24)

## [2.0.2](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v2.0.1...v2.0.2) (2022-01-12)


### Bug Fixes

* **base:** 🐛 turn off `prefer-object-has-own` due to typescript support ([0ff227e](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/0ff227eecdbdb9e57f3ec9d7b0beda07d7427c95))

## [2.0.1](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v2.0.0...v2.0.1) (2022-01-12)


### Bug Fixes

* **react:** 🐛 always include `prettier` overrides ([8f965a4](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/8f965a49facc5e9923ca78d576f317d75d5c5ed6))
* **typescript:** 🐛 always include `prettier` overrides ([09c3cdd](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/09c3cdd31c95de254ed769b8935477dd20a650ca))

# [2.0.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v1.2.2...v2.0.0) (2022-01-11)


### Bug Fixes

* **imports:** 🐛 bump `eslint-plugin-import` to `2.25.4` ([8861704](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/8861704c003ec14265f1ef1dd452b3728dde00fe))


### Features

* **base:** ✨ add `prefer-object-has-own` rule ([cececc4](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/cececc475912ea99749fc2a23517453c938f39d4))
* **jest:** ✨ bump `eslint-plugin-jest` to `25.3.4` ([352ab50](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/352ab50157acebd081c0bd45a7b1b2909f19beaf))
* **react:** ✨ bump `eslint-plugin-react` to `7.28.0` ([05bab91](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/05bab917f056231bdd493d2672a093cf3fee7419))
* **typescript:** ✨ stricter `no-throw-literal` rule ([b685a6b](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/b685a6b750796d2e041592248626d7b309643cb8))


### BREAKING CHANGES

* **typescript:** 💥 `typescript` version `^4.5.0` is required and `no-throw-literal`
will throw on `any` and `unknown`
* **base:** 💥 `eslint` version `^8.5.0` and ES2022 are now required

## [1.2.2](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v1.2.1...v1.2.2) (2021-11-26)


### Bug Fixes

* **deps:** 🐛 do not pin `dependencies` ([4778fea](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/4778fea053687f122ce94de7de65dc7a94b0700b)), closes [#34](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/34)

## [1.2.1](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v1.2.0...v1.2.1) (2021-11-19)


### Bug Fixes

* 🐛 match package license w/ LICENSE (MIT) ([41fddb0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/41fddb0af70211dcfef1cb73cf3807e286bac1f4)), closes [#13](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/13)

# [1.2.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v1.1.0...v1.2.0) (2021-11-19)


### Features

* **react:** ✨ add react rules ([7128f04](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/7128f04d6bdc45dace04006ec5e8e65457841a0e)), closes [#4](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/4)

# [1.1.0](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/compare/v1.0.0...v1.1.0) (2021-11-19)


### Bug Fixes

* **typescript:** 🐛 `naming-convention` should ignore properties ([3447666](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/34476663226f6069d5e001192cb47bde2a9bc0d9)), closes [#18](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/18)
* **typescript:** 🐛 avoid conflicts with prettier's formatting ([adb0450](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/adb0450389207341ce4dc11ad32c2f40f0b817d8)), closes [#21](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/21)
* **typescript:** 🐛 eslint's `no-shadow` should be turned off ([bc5d27d](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/bc5d27dcb85c52b3167dcd388496a41959ea4dfd)), closes [#19](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/19)


### Features

* **typescript:** ✨ treat `explicit-module-boundary-types` as an error ([d40f32d](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/d40f32d744a8a6dd988847ee0bf0dae65d6cbfcf)), closes [#20](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/issues/20)

# 1.0.0 (2021-11-13)


### Features

* ✨ initial release w/ typescript, javascript and jest rules ([4aef67c](https://github.com/jimmy-guzman/eslint-config-jimmy-guzman/commit/4aef67c04c625851c9c6be1abe4f761254a87b0f))
