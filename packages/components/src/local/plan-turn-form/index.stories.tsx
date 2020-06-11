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

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

// put in the post handler
const postback = (step: PlanTurnFormValues): void => {
  console.log('plan turn postback', step)
}

// TODO: Add some state handling here

export const Default: React.FC = () => <PlanTurnForm
  turnPlanned={postback}
  formHeader="Planning header"
  formData={formData}
  icon={iconData}
/>
