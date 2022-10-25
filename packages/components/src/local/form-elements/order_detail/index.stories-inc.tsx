import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessages } from '@serge/mocks'
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

// produce the own and opp assets for this player force
const allForces = P9Mock.data.forces.forces
const platformTypes = P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []
const forceId = allForces[1].uniqid

const planningActivities = MockPlanningActivities
const perForcePlanningActivities = MockPerForceActivities
const filledInPerForcePlanningActivities: PerForcePlanningActivitySet[] = perForcePlanningActivities.map((force: PerForcePlanningActivitySet): PerForcePlanningActivitySet => {
  return {
    force: force.force,
    groupedActivities: force.groupedActivities.map((group: GroupedActivitySet): GroupedActivitySet => {
      const res: GroupedActivitySet = {
        category: group.category,
        activities: group.activities.map((act: PlanningActivity | string): PlanningActivity => {
          if (typeof act === 'string') {
            const actId = act as string
            const activity = planningActivities.find((act: PlanningActivity) => act.uniqid === actId)
            if (!activity) {
              throw Error('Planning activity not found:' + actId)
            }
            return activity
          } else {
            return act
          }
        })
      }
      return res
    })
  }
})

const force = filledInPerForcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === forceId)
const activities: Array<PlanningActivity[]> | undefined = force && force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
const flatActivities = _.flatten(activities)

const onEdit = (reference: string) => {
  console.log('editing', reference)
}

export const WithAssets: React.FC = () => <OrderDetail onEdit={onEdit} plan={planningMessages[2]} forces={allForces} platformTypes={platformTypes} force={forceId}
  activities={flatActivities} />

export const WithLocation: React.FC = () => <OrderDetail onEdit={onEdit} plan={planningMessages[1]} forces={allForces} platformTypes={platformTypes} force={forceId}
  activities={flatActivities} />
