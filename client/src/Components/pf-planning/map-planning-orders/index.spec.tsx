import { forceColors } from 'src/Helpers'
import { P9Mock } from 'src/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import MapPlanningOrders from './index'

const forces = P9Mock.data.forces.forces
const forceCols = forceColors(forces, true)

jest.mock('react-leaflet-v4', () => ({
  LayerGroup: (): React.ReactElement => <></>,
  GeoJSON: (): React.ReactElement => <></>
}))

jest.mock('leaflet', () => {
  const leafletModule = jest.requireActual('leaflet')
  const mockLeafletModule = {
    ...leafletModule,
    Symbol: {
      arrowHead: jest.fn()
    }
  }
  return mockLeafletModule
})

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<MapPlanningOrders forceColors={forceCols} activities={[]} setSelectedOrders={(): void => noop()} orders={[]}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
