# Getting Started

## Fork and Clone

[Github Cli](https://cli.github.com/manual/gh_repo_fork)

```bash
gh repo fork jimmy-guzman/eslint-config-jimmy-guzman --clone
```

or [traditional fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)

## Install

This project leverages [pnpm](https://pnpm.io/motivation) as it's package manager so make sure you [install](https://pnpm.io/installation) it

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Use either `nvm` or `volta` to be in sync with node version

- with [volta](https://volta.sh/) _(recommended)_

```bash
curl https://get.volta.sh | bash
```

```bash
pnpm install
```

- with [nvm](https://github.com/nvm-sh/nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

```bash
nvm use && pnpm install
```

## Scripts

Run build and typechecking in watch mode

```bash
yarn dev
```

Run tests in watch mode

```bash
yarn test:watch
```

Run commit cli

```bash
yarn commit
```
