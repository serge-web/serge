/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import CollapsibleHeader from './index'

it('CollapsibleHeader renders correctly', () => {
  const tree = renderer
    .create(<CollapsibleHeader>Test</CollapsibleHeader>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
