import React from 'react'

// Import component files
import CheckboxType from './index'
import docs from './README.md'


export default {
  title: 'local/form-elements/CheckboxType',
  component: CheckboxType,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <CheckboxType label="Visible to" options={['Red', 'Blue']}/>

