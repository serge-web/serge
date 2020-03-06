[🏠 Docsite home](../index.md) > [Coding best practice home](./index.md)

# General coding

This section applies to the entire project, regardless of language

## Coding style

- Use spaces for tabs
- Use 2 space widths per tab indentation
- Trim all trailing whitespace

> ❗ For the simplest development process, please ensure your development environment confirms to the project `.editorconfig` file. There are plugins for most (if not all popular editors), find yours [here](https://editorconfig.org/#download).

## Code comments

Code comments should be written in a formal, imperative style and describe the code or the intended outcome. Please avoid the use of colloquialisms and use the present tense.

### Acceptable

```
// Confirms asset location
```

### Unacceptable

```
// Cool, we know where the asset is
```

When describing a function or a method, please use the ['jsdoc' standard](https://devhints.io/jsdoc) for functions. 

### Acceptable 

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

### Unacceptable

```js
// Returns n
function foo(n) { return n }
```

> ❗ We do not need to add 'type' comments to variables as this is already covered by our implementation of TypeScript

## Stay DRY and remember to KISS

DRY stands for 'Don't Repeat Yourself' and is a great way of keeping your code terse and reusable. Where possible, you should break your code down into functions to avoid the use of repeated code. The smaller the function the better as a function should only have one job. 

Remember, DRY code, doesn't always mean less code, sometimes we have to write a little bit more code to make something more reusable, this is acceptable as more code now means less code later. However, efforts should always be made to keep the code as terse as possible. This is where KISS comes in.

KISS stands for 'Keep It Simple, Stupid.' Which is a slightly mean way of saying, don't overcomplicate your code and consider it's readability and simplicity when you write it.

> ❗ Rather than provide examples for this section, instead I will refer you to this great article by Arvind Singh Baghel, it's not related to JavaScript but the principles are transferrable and it includes a few great examples: https://dzone.com/articles/software-design-principles-dry-and-kiss

## Naming conventions and Casing

Please adhere to the following naming conventions.

- All filenames should be written in `kebab-case`
- All function/method names should be written in `camelCase`
- All Component and Class names should be written in `PascalCase`
- Stylesheet classes, id's and variables should all be written in `kebab-case`
- Components should be named in a descriptive manner (e.g. `notification-panel`)
- Images should be named in a descriptive manner (e.g. `man-using-fishing-rod.jpg`)
- Functions/methods should be named in a descriptive manner (e.g. `getClassNames()`)
- Style classes should be written in a descriptive manner (e.g. `.progress-bar`)