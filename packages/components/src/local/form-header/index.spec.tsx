/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import FormHeader from './index'

it('FormHeader renders correctly', () => {
  const tree = renderer
    .create(<FormHeader string="test" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
