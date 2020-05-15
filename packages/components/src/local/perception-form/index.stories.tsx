import React from 'react'

// Import component files
import PerceptionForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { PerceptionFormValues } from '@serge/custom-types'

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

// put in the post handler
const postback = (payload: PerceptionFormValues): void => {
  console.log('perception postback', payload)
}

// TODO: Add some state handling here

export const Default: React.FC = () => <PerceptionForm postBack={postback} formHeader="Perception header" formData={formData}/>
