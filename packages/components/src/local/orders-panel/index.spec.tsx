/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import OrdersPanel from './index'

it('OrdersPanel renders correctly', () => {
  const tree = renderer
    .create(<OrdersPanel selectedForce={data.selectedForce} phase={data.phase} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
