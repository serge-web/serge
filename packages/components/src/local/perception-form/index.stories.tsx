import React from 'react'

// Import component files
import PerceptionForm from './index'
import docs from './README.md'

/* Import mock data */
import { forces, platformTypes, platformTypesByKey, localMappingConstraints } from '@serge/mocks'
import formData from './mocks/formData'
import Mapping from '../mapping'

// import data types
import { Phase } from '@serge/config'

export default {
  title: 'local/PerceptionForm',
  component: PerceptionForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: false
    }
  }
}

// put in the post handler
const postback = (messageType: string, payload: any): void => {
  console.log('postback', messageType, payload)
}

// TODO: Add some state handling here
export const Default: React.FC = () => <Mapping
  mappingConstraints = {localMappingConstraints}
  forces={forces}
  gameTurnTime = {72000}
  wargameInitiated={true}
  playerForce='Blue'
  canSubmitOrders = {true}
  platforms={platformTypes}
  platformTypesByKey={platformTypesByKey}
  phase={Phase.Adjudication}
  turnNumber={5}
>
  <PerceptionForm mapPostBack={postback} formHeader="Perception header" formData={formData} />
</Mapping>
