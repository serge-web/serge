import React from 'react'

// Import component files
import PlannedRoute from './index'
import docs from './README.md'


export default {
  title: 'local/form-elements/PlannedRoute',
  component: PlannedRoute,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <PlannedRoute />

