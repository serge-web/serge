/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import EditableList from './index'

import { Item } from './types/props'
const items: Array<Item> = [{ name: 'list item 1' }, { name: 'list item 2' }]

it('editable-list renders correctly', () => {
  const tree = renderer
    .create(
      <EditableList
        items={items}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
