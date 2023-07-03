import React from 'react'

// Import component files
import InsightForm from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/InsightForm',
  component: InsightForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <InsightForm
    onCancel={(): any => window.alert('Click Cancel')}
    onSend={(): any => window.alert('Click Send')}
    darkMode
  />
)
