import React from 'react'

// Import component files
import MarkerName from './index'
import docs from './README.md'


export default {
  title: 'local/MarkerName',
  component: MarkerName,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <MarkerName />

