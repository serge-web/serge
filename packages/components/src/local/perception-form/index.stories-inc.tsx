import React from 'react'

// Import component files
import PerceptionForm from './index'
import docs from './README.md'

import Mapping from '../mapping'

// import data types
import { Domain, Phase } from '@serge/config'

/* Import mock data */
import { watuWargame, platformTypesByKey } from '@serge/mocks'
import { MappingConstraints } from '@serge/custom-types'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes && watuWargame.data.platformTypes.platformTypes
const localMappingConstraints = watuWargame.data.overview.mapConstraints

const dummyConstrants: MappingConstraints = {
  tileDiameterMins: 12,
  minZoom: 12,
  maxZoom: 12,
  bounds: [[12, 13], [14, 25]],
  maxNativeZoom: 12,
  minZoomHexes: 32,
  targetDataset: Domain.ATLANTIC
}

export default {
  title: 'local/PerceptionForm',
  component: PerceptionForm,
  decorators: [],
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
  gameTurnTime = {72000}
  wargameInitiated={true}
  playerForce={forces[1].uniqid}
  canSubmitOrders = {true}
  platforms={platformTypes || []}
  platformTypesByKey={platformTypesByKey}
  phase={Phase.Adjudication}
  turnNumber={5}
/>
