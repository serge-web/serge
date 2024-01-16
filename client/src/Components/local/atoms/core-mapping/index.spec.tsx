/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import CoreMapping from './index'
import { CHANNEL_MAPPING, Phase } from 'src/config'
import { ChannelMapping, ForceData } from 'src/custom-types'
import { noop } from 'lodash'

jest.mock('react-leaflet-v4', () => ({
  MapContainer: (): React.ReactElement => <></>,
  TileLayer: (): React.ReactElement => <></>
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

jest.mock('react-resizable-panels', () => ({
  Panel: (): React.ReactElement => <></>,
  PanelGroup: (): React.ReactElement => <></>
}))

const channel: ChannelMapping = {
  uniqid: 'core',
  name: 'core-mapping',
  channelType: CHANNEL_MAPPING,
  participants: [],
  renderers: [],
  constraints: {
    bounds: [[1, 1], [2, 2]],
    minZoom: 5
  }
}

const playerForce: ForceData = {
  color: '#000',
  dirty: false,
  iconURL: '',
  name: '',
  overview: '',
  roles: [],
  uniqid: 'f-red'
}

describe('Core Mapping component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CoreMapping
        playerForce={playerForce}
        messages={[]}
        channel={channel}
        playerRole={'mgr'}
        currentTurn={1}
        forces={[]}
        currentPhase={Phase.Planning}
        postBack={noop}
        openPanelAsDefault={false}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
