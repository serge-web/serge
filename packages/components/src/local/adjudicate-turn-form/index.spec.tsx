/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdjudicateTurnForm from './index'

it('AdjudicateTurnForm renders correctly', () => {
  const tree = renderer
    .create(<AdjudicateTurnForm />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
