/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import FormGroup from './index'

it('FormGroup renders correctly', () => {
  const tree = renderer
    .create(<FormGroup/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
