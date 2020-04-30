/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlanTurnForm from './index'

it('PlanTurnForm renders correctly', () => {
  const tree = renderer
    .create(<PlanTurnForm />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
