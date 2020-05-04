/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdjudicateTurnForm from './index'
import formData from './mocks/formData'

it('AdjudicateTurnForm renders correctly', () => {
  const tree = renderer
    .create(<AdjudicateTurnForm formData={formData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
