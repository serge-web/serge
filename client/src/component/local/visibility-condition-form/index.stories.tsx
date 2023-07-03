import React from 'react'

// Import component files
import VisibilityAndConditionForm from './index'
import docs from './README.md'

/* Import mock data */
import { forces, selectedAsset, platformTypes } from '@serge/mocks'

// import data types
import collateVisibilityFormData from '../map-bar/helpers/collate-visibility-form-data'
import { ForceData } from '@serge/custom-types'

export default {
  title: 'local/VisibilityAndConditionForm',
  component: VisibilityAndConditionForm,
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

const newAsset = { ...selectedAsset }
newAsset.condition = 'Immobile'

// aah, hold on. We don't want both forces to see the asset, since
// that won't let us track making it visible to a force
newAsset.visibleTo = [newAsset.visibleTo[0]]

const formData = collateVisibilityFormData(platformTypes, newAsset, forces)
const iconData = { platformType: 'merchant-vessel', forceColor: 'blue', icon: 'frigate.svg' }

export const Default: React.FC = () => <VisibilityAndConditionForm
  formHeader="Planning header"
  formData={formData}
  icon={iconData}
  mapPostBack={postback}
/>

const secondAsset = { ...selectedAsset }
secondAsset.visibleTo = forces.map((force: ForceData) => force.uniqid)
const secondFormData = collateVisibilityFormData(platformTypes, secondAsset, forces)

export const TwoForces: React.FC = () => <VisibilityAndConditionForm
  formHeader="Planning header"
  formData={secondFormData}
  icon={iconData}
  mapPostBack={postback}
/>
