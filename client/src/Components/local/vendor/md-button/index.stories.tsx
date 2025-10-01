import React from 'react'

// Import component files
import Button from '@material-ui/core/Button'
import docs from './README.md'

export default {
  title: 'md-button/vendor/Button',
  component: Button,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <Button variant="contained" color="default">Hello World</Button>
export const Primary: React.FunctionComponent = () => <Button variant="contained" color="primary">Hello World</Button>
export const Secondary: React.FunctionComponent = () => <Button variant="contained" color="secondary">Hello World</Button>
export const Disabled: React.FunctionComponent = () => <Button variant="contained" disabled>Hello World</Button>
