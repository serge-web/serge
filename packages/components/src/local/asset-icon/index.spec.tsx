/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import AssetIcon from '.'

it('renders correctly AssetIcon', () => {
  const tree = renderer
    .create(<AssetIcon />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
