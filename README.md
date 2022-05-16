<p align="center" >
  <img src="https://user-images.githubusercontent.com/65465380/168427987-fd84e8f5-2557-46cf-b65e-9d6b708d940c.png" width="450" />
</p>

<p align="center">
  <img src="https://repobeats.axiom.co/api/embed/d85147a1b2aae9a6ffbc75443885d45e97ec119e.svg" width="900">
</p>

## Status
<img src="https://codebeat.co/badges/5a111fb3-c803-4a6b-bbeb-6fb11fe91828" width="120">

# Turborepo

All project assets are managed within this single monorepo.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps

- `backend`: an [Express.js](https://expressjs.com/) Typescript app
- `client-admin`: an [React.js 18](https://reactjs.org/) Typescript app
- `terraform`: [Terraform Infrastructure](https://www.terraform.io/) Google Cloud Platform hcl app
- `terratest`: [Terratest](https://terratest.gruntwork.io/) Golang TF infrastructure testing app

### Packages
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `machines`: an xstate state machine library shared by both `client-admin` and `backend` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (npm).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
- [Caching](https://turborepo.org/docs/core-concepts/caching)

## Providers
<p align="left">
<img src="https://user-images.githubusercontent.com/65465380/168428800-7e3aea71-843d-46f5-8c9e-e744243cbc53.png" width="100" /><img src="https://user-images.githubusercontent.com/65465380/168429492-f9b01272-f682-4098-9178-bc07a65e94f2.png" width="180" />
</p>

