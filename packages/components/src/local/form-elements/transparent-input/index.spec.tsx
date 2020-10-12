/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import TransparentInput from './index'

it('TransparentInput renders correctly', () => {
  const tree = renderer
    .create(<TransparentInput value='5' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
