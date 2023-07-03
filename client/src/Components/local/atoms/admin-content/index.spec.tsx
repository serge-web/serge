/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import AdminContent from './index'

it('content renders correctly', () => {
  const tree = renderer
    .create(<AdminContent>Text</AdminContent>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
