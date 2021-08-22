# DropdownList documentation

DropdownList component is extension of Material UI Select, with a default `contained` variant and additional `type`
 and `icon` properties.
## UI Example

<!-- STORY -->

## Code example

```
<DropdownList
  customVariant="form-action"
  type="select"
  value={value}
  onDropdownChange={onDropdownChange}
  options={
    [
      { value: '0', label: 'Select Item', disabled: true, selected: true },
      { value: '1', label: 'Item 1' },
      { value: '2', label: 'Item 2' },
      { value: '3', label: 'Item 3' }
    ]
  }
/>
```
<!-- SOURCE -->

## Props

<!-- PROPS -->

## Usage

### ES6 Import
```js
import DropdownList from './dropdown-list'
```

### CommonJS

```js
const DropdownList = require('./dropdown-list')
