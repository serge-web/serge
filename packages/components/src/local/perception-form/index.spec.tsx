/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PerceptionForm from './index'

it('PerceptionForm renders correctly', () => {
  const tree = renderer
    .create(<PerceptionForm />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
