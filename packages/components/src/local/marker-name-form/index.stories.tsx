import React from 'react'

// Import component files
import MarkerNameForm from './index'
import docs from './README.md'


export default {
  title: 'local/MarkerNameForm',
  component: MarkerNameForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <MarkerNameForm />

