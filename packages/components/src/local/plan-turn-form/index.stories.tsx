import React from 'react'

// Import component files
import PlanTurnForm from './index'
import docs from './README.md'


export default {
  title: 'local/PlanTurnForm',
  component: PlanTurnForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <PlanTurnForm />

