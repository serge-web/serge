[🏠 Docsite home](../index.md) > [Coding best practice home](./index.md)

# JavaScript/React (.ts/.tsx)

This section applies only to JavaScript and React

## Coding style
There is little point in writing any specific documentation for JavaScript code style as we are simply using the rules defined by StandardJS.

Here is a link to that ruleset: https://standardjs.com/

## ES6

To maintain consistency across the project, please ensure you are using ES6 conventions, for example, use template literals instead of string concatenation:

### Acceptable

```js
 `I am a string with a ${variable} in it`
```

### Uncceptable

```js
'I am a string with a' + variable + 'in it'
```

## Use object destructuring wherever possible

Object destructuring is a great way to keep code clean and DRY and should be used wherever possible.

### Acceptable 

```js
import {
  assetsVisibleToMe,
  declutterLayer,
  findAsset,
  findPerceivedAsClasses,
  forceFor,
  GridImplementation,
  hasPendingForces,
  MapPlanningPlayerListener,
  MapAdjudicationPendingListener,
  markerFor
} from './helpers'
```

### Unacceptable

```js
import assetsVisibleToMe from './helpers'
import declutterLayeimport from './helpers'
import findAsseimport from './helpers'
import findPerceivedAsClasseimport from './helpers'
import forceFoimport from './helpers'
import GridImplementatioimport from './helpers'
import hasPendingForceimport from './helpers'
import MapPlanningPlayerListeneimport from './helpers'
import MapAdjudicationPendingListeneimport from './helpers'
import markerFor from './helpers'
```

## Importing and exporting

In order to help future developers out, it's important to use import and export in a way that makes readability easy.

Imports should alwys be at the very top of a file and the following order should be strictly followed:

1st. External (i.e. npm) dependencies (e.g. `react`)
2nd. Internal package dependences (e.g. `@serge/config`)
3rd. Local dependencies (e.g. `./helpers`)

If you have multiple files to export from a folder then make sure you add an index file. Then, when other people import files from that folder, they can do `import { file1, file2, file3 } from './folder` instead of having to do 3 imports. An index is not required if there is only one file exported from the folder.

## Type checking

We use TypeScript to ensure that our code is strongly typed, more robust and more easily testable. Wherever possible you should the full tooling available from TypeScript, however, if that is not something that can be done immediately, ensure you do not name your file with a TypeScript extension (e.g. `.ts` or `.tsx`) otherwise it will be type checked and may cause a failed build. 

Again there is little point in repeating the already excellent work done by the Microsoft team, so here is a link to their docs: https://www.typescriptlang.org/docs/home.html or if you want a great introduction to the basics, I highly recommend this youtube video:

<div align="center">

[![A great getting started guide to TypeScript](https://img.youtube.com/vi/ahCwqrYpIuM/0.jpg)](https://www.youtube.com/watch?v=ahCwqrYpIuM)

</div>

> ❗  Legacy files inside the `client` and `server` packages are the only files which are allowed to be plain JavaScript files, any new files created must be written in TypeScript