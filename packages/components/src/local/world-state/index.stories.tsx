import React from 'react'

// Import component files
import WorldState from './index'
import docs from './README.md'

export default {
  title: 'local/WorldState',
  component: WorldState,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <WorldState name="World State" />
