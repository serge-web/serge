import React from 'react'

// Import component files
import TransparentInput from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/TransparentInput',
  component: TransparentInput,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <TransparentInput value="5"/>
