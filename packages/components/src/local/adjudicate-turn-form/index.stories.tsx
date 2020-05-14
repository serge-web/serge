import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { FormValues } from './types/props'

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

// put in the post handler
const postback = (payload: FormValues): void => {
  console.log('adjudication postback', payload)
}

// TODO: Add some state handling here

export const Default: React.FC = () => <AdjudicateTurnForm postBack={postback} formHeader="Adjudicate header" formData={formData} />
