import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn(),
  LayerGroup: (): React.ReactElement => <></>,
  ScaleControl: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping />)
    expect(tree).toMatchSnapshot()
  })
})
