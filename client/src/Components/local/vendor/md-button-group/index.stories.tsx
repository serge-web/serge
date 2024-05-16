import React from 'react'

// Import component files
import { ButtonGroup, Button } from '@material-ui/core'
import { Home, Language, HourglassFull } from '@material-ui/icons'

import docs from './README.md'

export default {
  title: 'md-button-group/vendor/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const items = [
  {
    name: 'Button 1',
    value: 'button-1'
  },
  {
    name: 'Button 2',
    value: 'button-2'
  },
  {
    name: 'Button 3',
    value: 'button-3'
  }
]

const buttons = items.map(option => <Button key={option.value} value={option.value}>{option.name}</Button>)

export const Default: React.FC = () => <ButtonGroup orientation="vertical" color="primary"aria-label="vertical outlined primary button group">{buttons}</ButtonGroup>
export const Icons: React.FC = () => <ButtonGroup orientation="vertical" color="primary"aria-label="vertical outlined primary button group">
  <Button>
    <Home />
  </Button>
  <Button>
    <Language />
  </Button>
  <Button>
    <HourglassFull />
  </Button>
</ButtonGroup>
