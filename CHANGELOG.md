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
