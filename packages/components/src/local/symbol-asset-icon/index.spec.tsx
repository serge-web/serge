/* global it expect */
import LRU from 'lru-cache'
import React from 'react'
import renderer from 'react-test-renderer'
import { LRU_CACHE_OPTION } from '../organisms/support-panel/constants'
import SymbolAssetIcon from './index'

it('renders correctly SymbolAssetIcon', () => {
  const tree = renderer
    .create(<SymbolAssetIcon sidc='' iconName='' assetsCache={new LRU(LRU_CACHE_OPTION)} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
