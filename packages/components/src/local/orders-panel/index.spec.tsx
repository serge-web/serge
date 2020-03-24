/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import OrdersPanel from './index'

import data from './mocks'
const { selectedForce, phase } = data

it('OrdersPanel renders correctly', () => {
  const tree = renderer
    .create(<OrdersPanel selectedForce={selectedForce} phase={phase} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
