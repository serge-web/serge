/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import EditableRow, { EDITABLE_SELECT_ITEM } from './index'
import { Item } from './types/props'

const items: Array<Item> = [
  {
    title: 'Column 1',
    type: EDITABLE_SELECT_ITEM,
    active: [0],
    uniqid: 'col1',
    options: [
      { name: 'Option 1', uniqid: 'op1' },
      { name: 'Option 2', uniqid: 'op2' },
      { name: 'Option 3', uniqid: 'op3' }
    ]
  },
  {
    title: 'Column 2',
    type: EDITABLE_SELECT_ITEM,
    active: undefined,
    uniqid: 'col2',
    multiple: true,
    options: [
      { name: 'Option 1', uniqid: 'op1' },
      { name: 'Option 2', uniqid: 'op2' },
      { name: 'Option 3', uniqid: 'op3' }
    ]
  }
]

const handleChange = (nextItems: Array<Item>, _changedKey: number): Array<Item> => nextItems

it('EditableRow renders correctly', () => {
  const tree = renderer
    .create(<EditableRow
      items={items}
      onChange={handleChange}
      actions
      defaultMode='edit'
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
