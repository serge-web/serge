import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'

export default {
  title: 'local/AdjudicateTurnForm',
  component: AdjudicateTurnForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <AdjudicateTurnForm />
