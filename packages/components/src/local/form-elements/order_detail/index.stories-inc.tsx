import { PerForcePlanningActivitySet } from '@serge/custom-types'
import { MockPerForceActivities, P9Mock, planningMessages } from '@serge/mocks'
import React from 'react'

// Import component files
import OrderDetail from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/OrderDetail',
  component: OrderDetail,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

// produce the own and opp assets for this player force
const allForces = P9Mock.data.forces.forces
const platformTypes = P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []
const forceId = allForces[1].uniqid
const activities = MockPerForceActivities.find((value: PerForcePlanningActivitySet) => value.force === forceId)

export const WithAssets: React.FC = () => <OrderDetail plan={planningMessages[2]} forces={allForces} platformTypes={platformTypes} force={forceId} 
activities={activities} />

export const WithLocation: React.FC = () => <OrderDetail plan={planningMessages[1]} forces={allForces} platformTypes={platformTypes} force={forceId} 
activities={activities} />

