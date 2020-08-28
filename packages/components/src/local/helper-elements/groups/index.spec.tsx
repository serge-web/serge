/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Groups from './index'

it('Groups renders correctly', () => {
  const tree = renderer
    .create(<Groups>Title</Groups>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
