import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import MapPlanningOrders from './index'

jest.mock('react-leaflet-v4', () => ({
  LayerGroup: (): React.ReactElement => <></>,
  GeoJSON: (): React.ReactElement => <></>
}))

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<MapPlanningOrders activities={[]} setSelectedOrders={(): void => noop()} orders={[]}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
