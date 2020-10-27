import React from 'react'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'
// Import component files
import PlannedRoute from './index'
import docs from './README.md'
import { PlanningStates } from '@serge/config'

export default {
  title: 'local/form-elements/PlannedRoute',
  component: PlannedRoute,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const states = {
  Accepted: PlanningStates.Accepted,
  Pending: PlanningStates.Pending,
  Planning: PlanningStates.Planning,
  Rejected: PlanningStates.Rejected
}

const handleChange = (message: any): void => {
  alert('Moving to new state:' + message.value)
}

export const Default: React.FC = () => <PlannedRoute name="plannedRouteStatus"
  isMobile={boolean('Current status is mobile', true)}
  updateState={handleChange}
  status={radios('Current planning state', states, PlanningStates.Pending)}/>
