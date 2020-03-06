[🏠 Docsite home](../index.md) > [Coding best practice home](./index.md)

# Stylesheets

This section applies only to CSS/SCSS. Sass is our preprocessor of choice, and we use React's 'css-modules' to ensure that the styles are scoped to their component. This allows us to use generic-looking classes in components without worrying about conflicts. 

## Coding Style

As we are using styles which are scoped to the component and each component should have a single task, BEM notation should not be required or used in any stylesheets outside of the `themes` package.

If you require the use of a modifier the `--modifier-state` syntax is still acceptable.

### Acceptable

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
### Unacceptable
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

## Global CSS

Any CSS which is not specific to a component should live in the `/packages/themes` folder and should be done with caution as these styles are global, this sort of styling should ideally be limited to theming.

## Variables

Global sass-style variables are used in the project. Global variables are stored in `/themes/_vars`. However, please keep variables scoped to their components where possible so as not to pollute the global scope.

## Responsive

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