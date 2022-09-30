import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import MapPlanningOrders from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<MapPlanningOrders activities={[]} setSelectedOrders={(): void => noop()} orders={[]}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
