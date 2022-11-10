import { mount } from 'enzyme'
import React from 'react'
import { MapConstants } from './helper/MapConstants'
import SupportMapping from './index'

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  Symbol: {
    arrowHead: jest.fn()
  },
  polylineDecorator: (): any => ({
    addTo: jest.fn()
  })
}))

jest.mock('leaflet-polylinedecorator', () => jest.fn())
jest.mock('react-leaflet-v4', () => ({
  useMap: (): any => ({
    invalidateSize: jest.fn(),
    flyTo: jest.fn(),
    flyToBounds: jest.fn(),
    on: jest.fn(),
    addLayer: jest.fn()
  }),
  LayerGroup: (): React.ReactElement => <></>,
  ScaleControl: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping tileLayer={MapConstants.TileLayer}
      position={[51.505, -0.09]} />)
    expect(tree).toMatchSnapshot()
  })
})
