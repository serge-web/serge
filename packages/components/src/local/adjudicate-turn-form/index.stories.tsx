import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'

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

// TODO: Add some state handling here

export const Default: React.FC = () => <AdjudicateTurnForm formHeader="Adjudicate header" formData={formData} />
