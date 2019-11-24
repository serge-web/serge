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

For front-end developers relying on live rebuilds, they should first follow the above steps, and note the IP address & Port provided by the server script.  Then the `packages\client\.env` file should be mofidied, by using the server address for `REACT_APP_SERVER_PATH`.  The `https` should probably also be modified to `http`, too.

Once the above configuration has happened, the client app can be started with

```base
  yarn start:client
```


## Monorepo & package management

This repo is a monorepo using [Lerna](https://github.com/lerna/lerna). 

>Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.
>
>To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos).

Each package folder has it's own npm package.json and is automatically linked together with lerna. Just remember to add the package to the `dependencies` section of package.json (don't forget to prefix with the `@serge` scope!) and then run `yarn install` in the root of the repo.

Manage dependencies for packages like normal, but remember to use `yarn add` instead of `npm install`.

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

- `lint`  Checks syntax and simple errors in javascript files.
- `test`  Runs tests in all the packages.
- `build` Runs the build script in all packages which require building.
- `start` Runs the complete application in demo mode.
- `start:client` Only starts the client application.
- `start:server` Only starts the server application.
- `serge` A friendly alias for `start:server`

## Database commands

<!-- This section needs expanding with an explanation -->

Console commands for during dev and demos

`clearDatabase()` will clear message types (reload page and wait 2 seconds for rebuild and subsequent reload)

`clearDatabase2()` will clear created messages (reload page manually to start fresh)

## Git hooks

Git commit hooks trigger linting of all staged files when a change is committed.

## Code formatting & linting

Formats with [prettier](https://github.com/prettier/prettier) and lints with [eslint](https://eslint.org/) preconfigured with [standard](https://github.com/standard/standard) rules 

## Licensing

The Serge is licensed under the [Apache License 2.0](./LICENSE).