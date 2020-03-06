/* global it expect */

import getClassName from './getClassName'

import { tabsVariant as tabs } from '../mocks/tabs'

it('outputs the active class name', () => {
  expect(getClassName(tabs[1], 'forces')).toEqual('active')
})

it('outputs the completed class name', () => {
  expect(getClassName(tabs[0], 'overview')).toEqual('complete')
})
