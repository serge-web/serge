/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Form from './index'

it('Form renders correctly', () => {
  const tree = renderer
    .create(<Form type="test" headerText="test header"/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
