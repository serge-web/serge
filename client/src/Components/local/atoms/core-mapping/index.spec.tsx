/* global it expect */
import React from 'react'
import L from 'leaflet'
import renderer from 'react-test-renderer'
import CoreMapping from './index'
import { Phase } from 'src/config'
import { CHANNEL_CORE_MAPPING, CoreMappingChannel } from 'src/custom-types'

jest.mock('react-leaflet-v4', () => ({
  MapContainer: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

const channel: CoreMappingChannel = {
  uniqid: 'core',
  name: 'core-mapping',
  channelType: CHANNEL_CORE_MAPPING,
  participants: [],
  renderers: [],
  constraints: {
    bounds: [[1, 1], [2, 2]],
    minZoom: 5
  }
}

const bounds = L.latLngBounds(L.latLng(51.405, -0.02), L.latLng(51.605, -0.13))

describe('Core Mapping component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CoreMapping bounds={bounds} playerForce={'f-red'} messages={[]} channel={channel} playerRole={'mgr'} currentTurn={1} forces={[]} currentPhase={Phase.Planning}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
