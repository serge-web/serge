/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlanTurnForm from './index'

import formData from './mocks/formData'
const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

it('PlanTurnForm renders correctly', () => {
  const tree = renderer
    .create(<PlanTurnForm formHeader="Planning header" plansSubmitted={false} formData={formData} icon={iconData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
