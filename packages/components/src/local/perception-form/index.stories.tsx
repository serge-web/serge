import React from 'react'

// Import component files
import PerceptionForm from './index'
import docs from './README.md'
import formData from './mocks/formData'

export default {
  title: 'local/PerceptionForm',
  component: PerceptionForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <PerceptionForm formData={formData}/>
