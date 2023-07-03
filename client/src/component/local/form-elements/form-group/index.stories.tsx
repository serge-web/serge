import React from 'react'

// Import component files
import FormGroup from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/FormGroup',
  component: FormGroup,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <FormGroup/>
