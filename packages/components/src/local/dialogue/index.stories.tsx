import React from 'react'

// Import component files
import Dialogue from './index'
import docs from './README.md'

export default {
  title: 'local/Dialogue',
  component: Dialogue,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Dialogue type="test" headerText="This is the header"/>
