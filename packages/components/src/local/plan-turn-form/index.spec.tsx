/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlanTurnForm from './index'

import formData from './mocks/formData'

it('PlanTurnForm renders correctly', () => {
  const tree = renderer
    .create(<PlanTurnForm formData={formData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
