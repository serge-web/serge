import React from 'react'

// Import component files
import PerceptionForm from './index'
import docs from './README.md'

import Mapping from '../mapping'

// import data types
import { Phase } from '@serge/config'

/* Import mock data */
import { ChannelMapping, ChannelTypes, MappingConstraints } from '@serge/custom-types'
import { watuWargame } from '@serge/mocks'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes && watuWargame.data.platformTypes.platformTypes
const mapChannel = watuWargame.data.channels.channels.find((channel: ChannelTypes) => channel.name === 'mapping') as ChannelMapping
const localMappingConstraints = mapChannel.constraints

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

const infoMarkers = watuWargame.data.annotations ? watuWargame.data.annotations.annotations : []

const dummyConstrants: MappingConstraints = {
  minZoom: 12,
  maxZoom: 12,
  bounds: [[12, 13], [14, 25]],
  h3res: 3
}

export default {
  title: 'local/PerceptionForm',
  component: PerceptionForm,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: false
    }
  }
}

// TODO: Add some state handling here
export const Default: React.FC = () => <Mapping
  mappingConstraints = {localMappingConstraints || dummyConstrants}
  forces={forces}
  gameTurnTime = {{ unit: 'millis', millis: 72000 }}
  wargameInitiated={true}
  markerIcons= {[]}
  infoMarkers={infoMarkers}
  playerForce={forces[1].uniqid}
  isGameControl = {true}
  isUmpire = {true}
  platforms={platformTypes || []}
  phase={Phase.Adjudication}
  turnNumber={5}
/>
