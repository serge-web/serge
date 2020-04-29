import React from 'react'

// Import component files
import Turns from './index'
import docs from './README.md'


export default {
  title: 'local/form-elements/Turns',
  component: Turns,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Turns />

