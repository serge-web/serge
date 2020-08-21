/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdminLayout from './index'

it('AdminLayout renders correctly', () => {
  const tree = renderer
    .create(<AdminLayout>Content</AdminLayout>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
