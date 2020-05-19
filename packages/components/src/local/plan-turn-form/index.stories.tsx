import React from 'react'

// Import component files
import PlanTurnForm from './index'
import docs from './README.md'

import formData from './mocks/formData'

import { PlanTurnFormValues } from '@serge/custom-types'

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

// put in the post handler
const postback = (payload: PlanTurnFormValues): void => {
  console.log('perception postback', payload)
}

// TODO: Add some state handling here

export const Default: React.FC = () => <PlanTurnForm postBack={postback} formHeader="Planning header" formData={formData}/>
