/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import SortableList from './index'
import { watuWargame } from 'src/mocks'

import { Item } from './types/props'
const forcesMock = watuWargame.data.forces.forces[0].roles

const items: Array<Item> = forcesMock

it('sortable-list renders correctly', () => {
  const tree = renderer
    .create(<SortableList remove={true} items={items}>Text</SortableList>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
