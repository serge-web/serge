import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import MapPlanningOrders from './index'

jest.mock('react-leaflet-v4', () => ({
  LayerGroup: (): React.ReactElement => <></>,
  GeoJSON: (): React.ReactElement => <></>
}))

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  Symbol: {
    arrowHead: jest.fn()
  }
}))

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<MapPlanningOrders activities={[]} setSelectedOrders={(): void => noop()} orders={[]}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
