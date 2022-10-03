import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'
import { noop } from 'lodash'

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn(),
  LayerGroup: (): React.ReactElement => <></>,
  ScaleControl: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping forces={[]} filterApplied={true} setFilterApplied={noop}
      opAssets={[]} ownAssets={[]} setSelectedAssets={noop} selectedAssets={[]} />)
    expect(tree).toMatchSnapshot()
  })
})
