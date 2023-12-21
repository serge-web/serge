# serge-web

![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Maintainability](https://api.codeclimate.com/v1/badges/23b9a82c710e752fa286/maintainability)](https://codeclimate.com/github/serge-web/serge-web/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/23b9a82c710e752fa286/test_coverage)](https://codeclimate.com/github/serge-web/serge-web/test_coverage)
[![Build Status](https://travis-ci.org/serge-web/serge-web.svg?branch=develop)](https://travis-ci.org/serge-web/serge-web)

Serious Gaming, Evolved - web interface
 
## Installation and quick-start

In your command line, navigate to the project and then run the following commands:

```bash
  yarn install
  yarn build
  yarn serge
```

This will start the full application in 'demo' mode, you can see the application in action by visiting: [http://localhost:8080](http://localhost:8080).

## Front-end development

For front-end developers relying on live rebuilds, can simply run the following


```bash
  yarn install
  yarn build
  yarn develop
```

## Testing automation with playwright

For front-end developers relying on live rebuilds, can simply run the following

```bash
  yarn install
  yarn build
  yarn develop
  yarn test-playwright
```

This will do all of the building for you and then start the front-end server. The development environment will start up, and after a few seconds the browser page will open at something like `localhost:3000`.  The IP address for the backend server should be appended to this, so the URL looks like: `http://localhost:3000/?host=http://192.168.1.115:8080`. 

Note: to get into the backend in admin mode, you may need to use a URL like: 
`http://localhost:3000/serge/admin?host=http://localhost:8080`

This will also start our Storybook implementation for more information about that, please see the [readme in the components package](client/src/Components/local/README.md). If you'd rather not run storybook as part of this process, then simply run `yarn dev` instead of `yarn develop`

## Quick access to games & roles

Again for developers, there are convenient ways of going directly into a particular wargame, registered as a particular user. This is through the user of the `wargame` and `access` URL parameters, like this:

```base
http://localhost:3000/?wargame=wargame-k5kw38gf&access=p5543
```

## Monolith & Package Management

This repo has transitioned from a monorepo structure to a monolith.

This repository has shifted from a monorepo utilizing Lerna [Lerna](https://github.com/lerna/lerna) to a monolith architecture built with Vite [Vite](https://vitejs.dev/)..

>Managing a monolith provides simplicity and ease of development, especially when splitting codebases into separate repositories introduces unnecessary complexity.

>A monolith, in this context, refers to a single codebase that encompasses all the code for the application. This approach simplifies code organization and development workflows.

In the monolith, dependencies are managed from their respective root `package.json` file, such as 

`/server/`, `/client`, `/executable/`, `/e2e/`   

To add or update dependencies, navigate to the specific directory and use the following command: `yarn add <package-name>`

Feel free to replace `package-name` with the actual name of the package you intend to add or update.

>Manage dependencies for packages like normal, but remember to use `yarn add` instead of `npm install`.

## Run locally

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

Note: You will need the [active LTS (Long-term support)](https://github.com/nodejs/Release#release-schedule) Node.js version for this project (as specified in [.nvmrc](./.nvmrc))

### Fork repository (optional)
If you're an external contributor make sure to [fork this project first](https://help.github.com/articles/fork-a-repo/)

### Clone repository
```
git clone git@github.com:serge-web/serge-web.git # or clone your own fork

cd serge-web
```

### Using nvm (optional)

If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [Install nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm install` in the project directory (this will use [.nvmrc](./.nvmrc))

## Scripts

The top level project contains scripts that are then executed for all packages.

- `lint`  Checks syntax and simple errors in javascript and stylesheet files.
- `test`  Runs tests in all the packages.
- `build` Runs the build script in all packages which require building.
- `start` Runs the complete application in demo mode.
- `start-client` Only starts the client application.
- `start-server` Only starts the server application.
- `develop` Runs the client and server applications as well as the Storybook application and watches for typescript errors.
- `serge` A friendly alias for `start-server`

## Database commands

<!-- This section needs expanding with an explanation -->

Console commands for during dev and demos

`clearDatabase()` will clear message types (reload page and wait 2 seconds for rebuild and subsequent reload)

`clearDatabase2()` will clear created messages (reload page manually to start fresh)

## Git hooks

Git commit hooks trigger linting of all staged files when a change is committed.

## Code formatting & linting

Formats with [prettier](https://github.com/prettier/prettier) and lints with [eslint](https://eslint.org/) preconfigured with [standard](https://github.com/standard/standard) rules 

## Development guidelines

For information and guidance about how to contribute to this project. Please see the [Development standards guidelines](./docs/index.md)

## Licensing

The Serge is licensed under the [Apache License 2.0](./LICENSE).
