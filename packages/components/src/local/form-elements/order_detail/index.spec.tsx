/* global it expect */

import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { MockPerForceActivities, P9Mock, planningMessages } from '@serge/mocks'
import _ from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import OrderDetail from './index'

const allForces = P9Mock.data.forces.forces
const platformTypes = P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []
const forceId = allForces[1].uniqid
const plan = planningMessages[2]

const force = MockPerForceActivities.find((val: PerForcePlanningActivitySet) => val.force === forceId)
const activities: Array<PlanningActivity[]> | undefined = force && force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
const flatActivities = _.flatten(activities)

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<div>
      <OrderDetail plan={plan} forces={allForces} platformTypes={platformTypes} force={forceId}
        activities={flatActivities} />
    </div>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
