import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import PlanningForce from './index'

jest.mock('react-leaflet-v3', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningForce opFor={true} assets={[]} setSelectedAssets={noop} selectedAssets={[]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
