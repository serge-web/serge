import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { P9BMock, planningMessages } from '@serge/mocks'
import _ from 'lodash'
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

const filledInPerForcePlanningActivities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

// produce the own and opp assets for this player force
const allForces = P9BMock.data.forces.forces
const platformTypes = P9BMock.data.platformTypes ? P9BMock.data.platformTypes.platformTypes : []
const forceId = allForces[1].uniqid

const force = filledInPerForcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === forceId)
const activities: Array<PlanningActivity[]> | undefined = force && force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
const flatActivities = _.flatten(activities)

const onEditMessage = (reference: string) => {
  console.log('editing message', reference)
}

const onEditGeometry = (reference: string) => {
  console.log('editing geometry', reference)
}

const onEditOwnAssets = (reference: string) => {
  console.log('editing own assets', reference)
}

const onEditOppAssets = (reference: string) => {
  console.log('editing opp assets', reference)
}

export const WithAssets: React.FC = () => <OrderDetail onEditMessage={onEditMessage} onEditGeometry={onEditGeometry} onEditOwnAssets={onEditOwnAssets} onEditOppAssets={onEditOppAssets}
  plan={planningMessages[2]} forces={allForces} platformTypes={platformTypes} force={forceId}
  activities={flatActivities} />

export const WithLocation: React.FC = () => <OrderDetail onEditMessage={onEditMessage} onEditGeometry={onEditGeometry} onEditOwnAssets={onEditOwnAssets} onEditOppAssets={onEditOppAssets}
  plan={planningMessages[1]} forces={allForces} platformTypes={platformTypes} force={forceId}
  activities={flatActivities} />
