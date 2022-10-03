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
<<<<<<< HEAD
    const tree = mount(<SupportMapping forces={[]} filterApplied={true} setFilterApplied={noop}
      opAssets={[]} ownAssets={[]} setSelectedAssets={noop} selectedAssets={[]} />)
=======
    const tree = mount(<SupportMapping
      position={[51.505, -0.09]} zoom={12} />)
>>>>>>> develop
    expect(tree).toMatchSnapshot()
  })
})
