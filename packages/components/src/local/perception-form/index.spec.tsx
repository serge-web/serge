/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PerceptionForm from './index'
import formData from './mocks/formData'

it('PerceptionForm renders correctly', () => {
  const tree = renderer
    .create(<PerceptionForm formHeader="Perception header" formData={formData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
