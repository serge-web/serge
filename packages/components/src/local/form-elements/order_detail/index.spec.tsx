/* global it expect */

import { PerForcePlanningActivitySet } from '@serge/custom-types'
import { MockPerForceActivities, P9Mock, planningMessages } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import OrderDetail from './index'

const allForces = P9Mock.data.forces.forces
const platformTypes = P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []
const forceId = allForces[1].uniqid
const activities = MockPerForceActivities.find((value: PerForcePlanningActivitySet) => value.force === forceId)
const plan = planningMessages[2]

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<div>
     <OrderDetail plan={plan} forces={allForces} platformTypes={platformTypes} force={forceId} 
activities={activities} />
    </div>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
