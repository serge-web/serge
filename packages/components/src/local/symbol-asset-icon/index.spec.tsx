/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SymbolAssetIcon from './index'

it('renders correctly SymbolAssetIcon', () => {
  const tree = renderer
    .create(<SymbolAssetIcon sidc='' iconName='' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
