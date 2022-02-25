import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { deepCopy, platformTypeNameToKey } from '@serge/helpers'
import { ForceData, MappingConstraints, PlatformTypeData } from '@serge/custom-types'

// Import component files
import Mapping from './index'
import MappingPropTypes from './types/props'
import docs from './README.md'
import Assets from '../assets'
import { HexGrid } from '../hex-grid'

// import data types
import { Phase, serverPath } from '@serge/config'

/* Import mock data */
import { smallScaleMappingConstraints as mapping,  watuWargame } from '@serge/mocks'
import data from './data/atlantic-cells'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes && watuWargame.data.platformTypes.platformTypes || []

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

const platformTypesByKey = {}
platformTypes && platformTypes.forEach((plat: PlatformTypeData) => {
  platformTypesByKey[platformTypeNameToKey(plat.name)] = plat
})

async function fetchMock (): Promise<any> {
  return {
    json: (): any => data
  }
}

const forceList = forces.map((force: ForceData) => force.uniqid)

export default {
  title: 'local/LocalMapping',
  component: Mapping,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    playerForce: {
      name: 'View as',
      defaultValue: forceList[0],
      control: {
        type: 'radio',
        options: forceList
      }
    },
    phase: {
      name: 'Game phase',
      defaultValue: Phase.Planning,
      control: {
        type: 'radio',
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
    wargameInitiated: {
      name: 'Wargame has been initiated',
      control: {
        type: 'boolean'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}

const localConstraints: MappingConstraints = deepCopy(mapping)
localConstraints.tileLayer = {
  url: './atlantic_tiles/{z}/{x}/{y}.png',
  attribution: 'Generated by QTiles'
}

const osmConstraints: MappingConstraints = deepCopy(mapping)
osmConstraints.tileLayer = {
  url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>'
}

const detailedConstraints: MappingConstraints = deepCopy(mapping)
detailedConstraints.tileLayer = {
  url: './atlantic_tiles/{z}/{x}/{y}.png',
  attribution: 'Generated by QTiles'
}
detailedConstraints.gridCellsURL = `${serverPath}atlantic-detailed.json`
detailedConstraints.tileDiameterMins = 30

interface StoryPropTypes extends MappingPropTypes {
  showAllowableCells?: boolean
  allowableOrigin?: string
  allowableTerrain?: string
  mappingConstraints: MappingConstraints
}

const Template: Story<StoryPropTypes> = (args) => {
  const {
    playerForce,
    ...props
  } = args
  return (
    <Mapping
      playerForce={playerForce}
      fetchOverride={fetchMock}
      {...props}
    />
  )
}

const twoFourHours = 1000 * 60 * 60 * 24

/**
 * DEFAULT VIEW
 */
export const NaturalEarth = Template.bind({})
NaturalEarth.args = {
  forces: forces,
  gameTurnTime: twoFourHours,
  canSubmitOrders: true,
  platformTypesByKey:platformTypesByKey,
  platforms: platformTypes,
  phase: Phase.Planning,
  wargameInitiated: true,
  turnNumber: 5,
  mapBar: true,
  mappingConstraints: localConstraints,
  children: (
    <>
      <HexGrid />
      <Assets />
    </>
  )
}

export const OpenStreetMap = Template.bind({})
OpenStreetMap.args = {
  forces: forces,
  gameTurnTime: twoFourHours,
  canSubmitOrders: true,
  platformTypesByKey:platformTypesByKey,
  platforms: platformTypes,
  wargameInitiated: true,
  phase: Phase.Planning,
  turnNumber: 5,
  mapBar: true,
  mappingConstraints: osmConstraints,
  children: (
    <>
      <Assets />
      <HexGrid />
    </>
  )
}

export const DetailedCells = Template.bind({})
DetailedCells.args = {
  forces: forces,
  gameTurnTime: twoFourHours,
  canSubmitOrders: true,
  platformTypesByKey:platformTypesByKey,
  platforms: platformTypes,
  phase: Phase.Planning,
  wargameInitiated: true,
  turnNumber: 5,
  mapBar: true,
  mappingConstraints: detailedConstraints,
  children: (
    <>
      <HexGrid />
      <Assets />
    </>
  )
}
