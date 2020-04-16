import React from 'react'

// Import component files
import InputContainer from './index'
import docs from './README.md'

export default {
  title: 'local/InputContainer',
  component: InputContainer,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <InputContainer>Child goes here</InputContainer>
