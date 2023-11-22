/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import CoreMapping from './index'

jest.mock('react-leaflet-v4', () => ({
  MapContainer: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

describe('Core Mapping component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CoreMapping />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
