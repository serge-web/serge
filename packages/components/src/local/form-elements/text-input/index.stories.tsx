import React from 'react'

// Import component files
import TextInput from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/TextInput',
  component: TextInput,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <TextInput label="turns" value={5}/>
