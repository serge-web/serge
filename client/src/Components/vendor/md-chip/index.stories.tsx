import React from 'react'

// Import component files
import Chip from '@material-ui/core/Chip'
import docs from './README.md'

export default {
  title: 'vendor/Chip',
  component: Chip,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <Chip color="default" label="Hello World" />
export const Primary: React.FunctionComponent = () => <Chip color="primary" label="Hello World" />
export const Secondary: React.FunctionComponent = () => <Chip color="secondary" label="Hello World" />
export const Disabled: React.FunctionComponent = () => <Chip disabled label="Hello World" />
