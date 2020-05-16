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

// put in the post handler
const postback = (messageType: string, payload: any): void => {
  console.log('postback', messageType, payload)
}


// TODO: Add some state handling here

export const Default: React.FC = () => <PerceptionForm postBack={postback} formHeader="Perception header" formData={formData}/>
