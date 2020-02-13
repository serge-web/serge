# Development standards document for the Serge Project 

> *Please Note:* This is a living document and is subject to change, please keep an eye on the communication channels for notification of any updates.

## ✅ Getting started

To get started, simply clone the repository on to your machine and install the dependencies
 
```bash
$ git clone git@github.com:serge-web/serge.git
$ cd serge
$ yarn install
```

One this is done you can run the project in development mode by running `yarn start`.

## ⚙️ Technology stack

This project is built using the following technologies

- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Jest](https://jestjs.io/)
- [PouchDB](https://pouchdb.com/)
- [Sass](https://sass-lang.com/)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [Lerna](https://lerna.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)

## 📂 Directory Structure

We use Yarn Workspaces for our monorepo needs but that is enhanced by it's coexistence with Lerna. Our Directory structure is based on the directory structure recommended by Lerna and looks like this. All packages are found in the `/packages` folder.

## 📦 Packages

Packages can be thought of as standalone apps, however, they can also talk to other packages inside the monorepo. For the most part, we will not be creating new packages, however, where it is appropriate, new packages can be made. Each package should be named in `snake_case` syntax and must contain at a minimum a `package.json` file and a `README.md` file which has been completed to a good standard ([see here](https://www.makeareadme.com/) for more information). 

## 🧩 Components

Components live in the `components` package of our project. Each component should be a directory and contain the following files and folders:

- `index.tsx` - The component logic and main UI
- `index.spec.txt` - The tests for the component
- `index.stories.tsx` - The Storybook file for the component
- `styles.module.scss` - The scoped component styling
- `/images` - Any component-specific images
- `/helpers` - Additional logic for the component which makes sense to be separated from the index (ensure tests also exist for these)

Any other component-specific assets may also be placed in this directory.

The only required files are index.tsx, index.spec.tsx and index.story.tsx. Please ensure you stick to the above naming conventions.

Each component should have a single task (See Brad Frost's [Atomic Design Principle](https://bradfrost.com/blog/post/atomic-web-design/) for more information) and be written as a 'pure' component. This means that it should only use react's hooks and context API along with props to receive and pass information. (See React Coding standards below)

> ⚠️ Please note: Components should not contain other components, they should only reference them. If you are making a component, it should be created in the root of `/components` and have a Storybook entry.

## 📖 Storybook

<div align="center">

[![Storybook intro video on YouTube](https://i.imgur.com/FDvR6zl.jpg)](https://www.youtube.com/watch?v=LFh5Y89eM)

</div>

All components, no matter how small or large should have a Storybook entry. Ideally, a component should be built in insolation and tested within Storybook before being imported into the primary project (or that components parent component), this ensures that the component is robust and works by itself. It also provides a handy component library for developers to be able to reuse components and prevent the reinvention of the wheel.

Rather than document how to use Storybook, please refer to the excellent [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)

## 👩‍💻 Coding best practice

### General coding

This section applies to the entire project, regardless of language

#### Coding style

- Use spaces for tabs
- Use 2 space widths per tab indentation
- Trim all trailing whitespace

> ❗ For the simplest development process, please ensure your development environment confirms to the project `.editorconfig` file. There are plugins for most (if not all popular editors), find yours [here](https://editorconfig.org/#download).

#### Code comments

Code comments should be written in a formal, imperative style and describe the code or the intended outcome. Please avoid the use of colloquialisms and use the present tense.

##### Acceptable

```
// Confirms asset location
```

##### Unacceptable

```
// Cool, we know where the asset is
```

When describing a function or a method, please use the ['jsdoc' standard](https://devhints.io/jsdoc) for functions. 

##### Acceptable 

```js
/**
 * Foo()
 *
 * @param {string} n - A string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(n) { return n }
```

##### Unacceptable

```js
// Returns n
function foo(n) { return n }
```

> ❗ We do not need to add 'type' comments to variables as this is already covered by our implementation of TypeScript

#### Stay DRY and remember to KISS

DRY stands for 'Don't Repeat Yourself' and is a great way of keeping your code terse and reusable. Where possible, you should break your code down into functions to avoid the use of repeated code. The smaller the function the better as a function should only have one job. 

Remember, DRY code, doesn't always mean less code, sometimes we have to write a little bit more code to make something more reusable, this is acceptable as more code now means less code later. However, efforts should always be made to keep the code as terse as possible. This is where KISS comes in.

KISS stands for Keep It Simple, Stupid. Which is a slightly mean way of saying, don't overcomplicate your code and consider it's readability and simplicity when you write it.

> ❗ Rather than provide examples for this section, instead I will refer you to this great article by Arvind Singh Baghel, it's not related to JavaScript but the principles are transferrable and it includes a few great examples: https://dzone.com/articles/software-design-principles-dry-and-kiss


### JavaScript/React (.ts/.tsx)

This section applies only to JavaScript and React

#### Coding style
There is little point in writing any specific documentation for JavaScript code style as we are simply using the rules defined by StandardJS.

Here is a link to that ruleset: https://standardjs.com/

#### ES6

To maintain consistency across the project, please ensure you are using ES6 conventions, for example, use template literals instead of string concatenation:

##### Acceptable

```js
 `I am a string with a ${variable} in it`
```

##### Uncceptable

```js
'I am a string with a' + variable + 'in it'
```

#### Use object destructuring wherever possible

Object destructuring is a great way to keep code clean and DRY and should be used wherever possible.

##### Acceptable 

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

##### Unacceptable

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

#### Type checking

We use TypeScript to ensure that our code is strongly typed, more robust and more easily testable. Wherever possible you should the full tooling available from TypeScript, however, if that is not something that can be done immediately, at the very least you should use a TypeScript extension (`.jsx` becomes `.tsx` and `.js` becomes `.ts`)

Again there is little point in repeating the already excellent work done by the Microsoft team, so here is a link to their docs: https://www.typescriptlang.org/docs/home.html or if you want a great introduction to the basics, I highly recommend this youtube video:

<div align="center">

[![A great getting started guide to TypeScript](https://img.youtube.com/vi/ahCwqrYpIuM/0.jpg)](https://www.youtube.com/watch?v=ahCwqrYpIuM)

</div>

#### Unit tests
Unit tests use Jest and every component should contain tests. If the component is only a UI component and has no internal logic then a snapshot test is sufficient. However, if the component has any functions or methods then each one of those should have a unit test.

<!-- More information on this coming soon -->

#### E2E tests
> Coming soon 

#### Pure components

A pure component is a component which received it's data via props and does not rely on a connection to a global state/store to function. Wherever possible a component should be built using this principle. If a connection to the state needs to be made, it should be done via a react hook (e.g. `useState` or `useSelector`). This allows components to be reusable and also makes them testable as a single unit.

### HTML (.tsx, .html)

This selection relates to the use of pure HTML. Most HTML will be created in `.tsx` files, however, there may be edge cases where plain `.html` is required (excluding the entry `index.html` page of course).

Please code using standard HTML5. If for any reason you require a custom attribute, please use a data attribute. 

#### Acceptable

````html
<section class="magic" data-custom-attr="kinda">
  <span>It's a kinda magic</span>
</section>
````

#### Unacceptable

````html
<section class="magic" custom-attr="kinda">
  <span>It's a kinda magic</span>
</section>
````

### CSS (.sass, .css)

This section applies only to CSS/SCSS. Sass is our preprocessor of choice, and we use React's 'css-modules' to ensure that the styles are scoped to their component. This allows us to use generic-looking classes in components without worrying about conflicts. 

#### Coding Style

As we are using styles which are scoped to the component and each component should have a single task so BEM notation should not be required or used.

If you require the use of a modifier the `--modifier-state` syntax is still acceptable.

#### Acceptable

```scss
.button {
  padding: $spacing;
  text-align: centre;
  background-color: #f00;
  color: #333;
  &--disabled {
    background-color: #ccc;
  }
}
```
#### Unacceptable
```scss
 .contact_form {
   &__button {
    padding: $spacing;
    text-align: centre;
    background-color: #f00;
    color: #333;
    &--disabled {
      background-color: #ccc;
    }  
   }
 }
```

In the example above, `contact_form` and `button` should be two components and therefore each has its own scoped styles.

#### Global CSS

Any CSS which is not specific to a component should live in the `/packages/themes` folder and should be done with caution as these styles are global, this sort of styling should ideally be limited to theming.

#### Variables

Global sass-style variables are used in the project. Global variables are stored in `/themes/_vars`. However, please keep variables scoped to their components where possible so as not to pollute the global scope.

#### Responsive

Breakpoint variables and mixins are set in `/themes/_breakpoints.scss`.

There are global breakpoints set as follows:

name | size
---- | ----
`x-large` | `> 1600px`
`large` | `> 1024px`
`medium` | `> 800px`
`small` | `> 480px`
`x-small` | `> 280px`

Custom breakpoints should be added at any point the layout breaks, these should be scoped to the component wherever possible.

## Repository management

Our project is currently stored in GitHub at https://github.com/serge-web/serge. To keep the repository functioning well, please adhere to the following best practices:

### Readme

The main readme.md file should be updated whenever a relevant change is made. Please check regularly to see if you have made an update which could affect the document and update accordingly.

### Branches


#### Naming

Branches should be named by the ticket you are currently working on wherever possible, including the ticket number. If the work is not related to a ticket, then it should be given a sensible name. All branches should follow the following convention for prefixing:

- `feature/` - A new feature or an update which will result in an enhancement of an existing feature
- `amend/` - An update which will amend a previously existing issue 
- `bugfix/` - An update which will fix a bug
- `release/` - A release branch

> An amend is different from a bug. A bug is an issue that causes a failure or error somewhere, whereas an amend is something that isn't quite right. For example, a page not loading is a bug, a page having a header that needs to be bigger is an amend. 

##### Acceptable

```
feature/263-mapping-improvements
```

##### Unacceptable

```
mapping-stuff
```

#### Protected branches

Two protected branches exist, these are `master` and `develop`. `master` is only for releases and will be carried out by @IanMayo, `develop` is the active development branch for our work. All workstreams should initially branch off `develop`. Pushing to develop can only be done via a Pull Request (see below).

#### Deletion

No branch should outlive its workstream. As soon as the work has been merged into `develop` or a parent branch, it should be deleted. Similarly, if a workstream is no longer required and the branch isn't going to be merged, it should also be deleted. 

For larger workstreams, it is acceptable to carry out nested branches but only if pushing the code to `develop` will cause problems without the full work package. In this instance, your initial branch should come of `develop` and be named following the above guidelines, and subsequent branches should be children of that branch with additional information added to the end of the branch name with a `--`. e.g. `feature/263-mapping-improvements--documentation`

### Pull Requests

ALL branch merges should only be done via a Pull Request. Please fill in all relevant sections of the pull request template and delete any sections which do not apply. The following sections are mandatory and should not be deleted:

- Issue*
- Overview
- Reason*
- Work Carried out
- Confirmations

Items marked with * can be deleted if you are not working from an issue.

You should also assign reviewers to your pr and assign yourself. Merges to `develop` should have at least 2 reviewers. One of those reviewers must be [Alex Foxleigh](https://github.com/foxleigh81).

A label should also be applied indicating what was done. These things are easy to overlook but a PR should not be approved without them. To help developers remember to do this, a checklist is included in a PR which must be completed truthfully. PR's which do not conform to this will be rejected.

Once a pull request has been approved and all of the checks have passed, the originator of the PR should perform the merge. The branch attached to that PR should be automatically deleted but if not please delete it manually.

If you are working in a child branch then please ensure that the pull request merges to the parent branch and not `develop` and add a note about that to the 'developer notes' section.


### Commits

Commit messages should be written in an imperative tone and present tense which can be used as a log of work done on that pull request. It should clearly state what work was done and/or the effect it would have. A good commit message makes the purpose of the commit obvious at a class when viewing the `/commits` page on GitHub

The following should also be taken into consideration when writing commit messages:

1) Do not use backticks (`) in your commit messages, GitHub does not interpret these properly for some reason and not only doesn't highlight them correctly but removes anything inside the backticks from the message. Hopefully, they will eventually fix this as backticks are a useful way of highlighting code.
2) Try to keep the commit heading short. Use the commit message body to add extra detail if needed.
3) Ideally one commit = one item of work. It's not always achievable but that is the goal.
4) Use sentence case and full, English sentences.

#### Acceptable

```
Removes console.log from the 'markerFor' helper on the Mapping component
```

#### Unacceptable

![A bad example of a commit message](https://i.imgur.com/ajZ8Ff2.png)

### Issues

Ideally, an issue will exist for all work. There are three types of issues, a 'bug report' an 'amend' and a 'feature'.

#### Bug report / amend

If you are picking up a bug report ticket then you should create a `bugfix` branch to work in if it's an amend then it should be an `amend` branch. The issue should contain the following information:

- A description of the bug
- Steps to reproduce
- Expected behaviour

Bug reports should also include: 
- Technology used (OS, browser etc...)

#### Feature

If you are picking up a feature ticket then you should create a `feature` branch to work in. The issue should contain the following information:

- A brief description of the issue
- A User story giving a more in-depth description of the issue as well as the reason for its requirement written in [Gherkin](https://cucumber.io/docs/gherkin/reference/) syntax (see below)
- A list of acceptance criteria
- A design to work from 

The user story should be written in Gherkin syntax and contain a 'background' and at least one 'scenario'.

e.g.

```gherkin
Feature: Returns and exchanges go to inventory.

Background:
As a store owner,
I want to add items back to inventory when they are returned or exchanged,
so that I can track inventory.

Scenario 1: Items returned for a refund should be added to inventory.
Given that a customer previously bought a black sweater from me
When they return the black sweater for a refund,
Then I should have four black sweaters in inventory.
```

If the User Story has enough scenarios to cover all of the behaviours then Acceptance Criteria is not required.

> ❗ If a ticket does not contain the required information, bounce the ticket back to its creator asking them to update it

## Further information / Questions

For more information about our development standards, please contact [Alex Foxleigh](https://github.com/foxleigh81)