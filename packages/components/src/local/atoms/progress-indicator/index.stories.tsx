import React from 'react'

// Import component files
import ProgressIndicator from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/ProgressIndicator',
  component: ProgressIndicator,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const indicators = [
  { id: 1, complete: true },
  { id: 2, active: true },
  { id: 3 }
]
export const Default: React.FC = () => <ProgressIndicator list={indicators}/>
