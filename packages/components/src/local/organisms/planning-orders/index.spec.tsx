import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import PlanningOrders from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningOrders activities={[]} setSelectedOrders={(): void => noop()} orders={[]}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
