import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { AdjudicateTurnFormValues } from '@serge/custom-types'

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

const routeAccepted = (route: AdjudicateTurnFormValues): void => {
  console.log('route accepted in story', route)
}

export const Default: React.FC = () => <AdjudicateTurnForm
  routeAccepted={routeAccepted}
  icon={iconData}
  canSubmitPlans={true}
  plansSubmitted={false}
  formHeader="Adjudicate header"
  formData={formData} />

export const TurnsPlanned: React.FC = () => <AdjudicateTurnForm
  routeAccepted={routeAccepted}
  icon={iconData}
  canSubmitPlans={true}
  plansSubmitted={true}
  formHeader="Adjudicate header"
  formData={formData} />

export const CannotSubmitPlans: React.FC = () => <AdjudicateTurnForm
  routeAccepted={routeAccepted}
  icon={iconData}
  plansSubmitted={false}
  canSubmitPlans={false}
  formHeader="Adjudicate header"
  formData={formData} />
