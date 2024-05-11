import React from 'react'

// Import component files
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import InputContainer from '../../local/atoms/input-container'

import docs from './README.md'

export default {
  title: 'vendor/Select',
  component: Select,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const items = [
  {
    name: 'Item 1',
    value: 'item-1'
  },
  {
    name: 'Item 2',
    value: 'item-2'
  },
  {
    name: 'Item 3',
    value: 'item-3'
  }
]

const options = items.map(option => <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>)

export const Default: React.FunctionComponent = () => <Select value="item-1">{options}</Select>
export const WithLabel: React.FunctionComponent = () => <InputContainer><InputLabel id="select-id">Item selector</InputLabel><Select value="item-1" id="Select" labelId="select-id" name="Select" label="Example">{options}</Select></InputContainer>
export const WithError: React.FunctionComponent = () => <Select value="item-1" id="Select" name="Select" label="Example" error>{options}</Select>
export const ReadOnly: React.FunctionComponent = () => <Select value="item-1" id="Select" name="Select" label="Example">{options}</Select>
export const Disabled: React.FunctionComponent = () => <Select value="item-1" disabled>{options}</Select>
