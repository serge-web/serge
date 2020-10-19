import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'

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

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

// put in the post handler
const postback = (messageType: string, payload: any): void => {
  console.log('postback', messageType, payload)
}

export const Default: React.FC = () => <AdjudicateTurnForm
  postBack={postback}
  icon={iconData}
  canSubmitPlans={true}
  plansSubmitted={false}
  formHeader="Adjudicate header"
  formData={formData} />

export const TurnsPlanned: React.FC = () => <AdjudicateTurnForm
  postBack={postback}
  icon={iconData}
  canSubmitPlans={true}
  plansSubmitted={true}
  formHeader="Adjudicate header"
  formData={formData} />

export const CannotSubmitPlans: React.FC = () => <AdjudicateTurnForm
  postBack={postback}
  icon={iconData}
  plansSubmitted={false}
  canSubmitPlans={false}
  formHeader="Adjudicate header"
  formData={formData} />
