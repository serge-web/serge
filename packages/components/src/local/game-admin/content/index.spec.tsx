/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Content from './index'

it('content renders correctly', () => {
  const tree = renderer
    .create(<Content>Text</Content>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
