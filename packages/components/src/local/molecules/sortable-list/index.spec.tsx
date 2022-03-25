/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import SortableList from './index'

import { Item } from './types/props'
const items: Array<Item> = [{ name: 'list item 1' }, { name: 'list item 2' }]

it('sortable-list renders correctly', () => {
  const tree = renderer
    .create(<SortableList remove={true} items={items}>Text</SortableList>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
