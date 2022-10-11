import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'

jest.mock('react-leaflet-v4', () => ({
  useMap: (): any => ({
    invalidateSize: (): jest.Mock => jest.fn(),
    flyTo: (): jest.Mock => jest.fn(),
    flyToBounds: (): jest.Mock => jest.fn(),
    on: (): jest.Mock => jest.fn()
  }),
  LayerGroup: (): React.ReactElement => <></>,
  ScaleControl: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping
      position={[51.505, -0.09]} />)
    expect(tree).toMatchSnapshot()
  })
})
