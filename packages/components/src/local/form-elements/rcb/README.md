# RCB documentation

This is an example readme file for the 'RCB' (Radio/Checkbox) component.

The component can output either a Radio Group or a Checkbox Group. When passing the selected value, `radio` expects a single value but `checkbox` must be passed an array of values, even if that array only has one value in it.

### Forces

An optional 'forces' boolean may be set, this will allow for the appearance of a box with the force colour to appear in the label. If the forces flag is set to true then the RCB component will expect the options to be an array of objects instead of a flat array with each item in the object having a `name` and `colour` value set.

e.g.

```js
{
    name: 'Blue Force',
    colour: '#69c'
}
```

## UI Example

<!-- STORY -->

## Code example

<!-- SOURCE -->

## Props

<!-- PROPS -->

## Usage

### ES6 Import
```js
import RCB from './RCB'
```

### CommonJS

```js
const RCB = require('./RCB')
