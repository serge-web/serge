# Mapping documentation

The basic Mapping component. Displays a map on a page with zoom and drag controls

## UI Example

<!-- STORY -->

## Code example

<!-- SOURCE -->

## Props

<!-- PROPS -->

## Context

The Mapping component has a context provider available to any child components which need it. To use it, simply import `MappingContext` into your child component from this one and use the following code snippet:

```jsx
  <MapContext.Consumer>
    { (context): ReactNode => {
      // Your component code goes here, 
      // you can access the context via 
      // `context.props.whatever`
    }
  </MapContext.Consumer>
```    

## Usage

### ES6 Import
```js
import Mapping from './mapping'
```

### CommonJS

```js
const Mapping = require('./mapping')