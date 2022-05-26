import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { DeclutterData, deepCopy, dummyDeclutter2, routeDeclutter2 } from '@serge/helpers'
import { MappingConstraints, MilliTurns } from '@serge/custom-types'

// Import component files
import Mapping from './index'
import MappingPropTypes from './types/props'
import docs from './README.md'
import Assets from '../assets'
import { HexGrid } from '../hex-grid'

// import data types
import { Phase } from '@serge/config'

/* Import mock data */
import { watuWargame } from '@serge/mocks'
import data from './data/atlantic-cells'
import InfoMarkers from '../info-markers'

const forces = watuWargame.data.forces.forces
const platformTypes = (watuWargame.data.platformTypes && watuWargame.data.platformTypes.platformTypes) || []
const overview = watuWargame.data.overview
const mapping = overview.mapConstraints
const annotations = (watuWargame.data.annotations && watuWargame.data.annotations.annotations) || []

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

async function fetchMock (): Promise<any> {
  return {
    json: (): any => data
  }
}

export default {
  title: 'local/Mapping/DeClutter',
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
    doDeclutter: {
      name: 'Declutter markers',
      defaultValue: false,
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

interface StoryPropTypes extends MappingPropTypes {
  doDeclutter: boolean
}

const Template: Story<StoryPropTypes> = (args) => {
  const {
    doDeclutter,
    ...props
  } = args

  const declutter = (data: DeclutterData, diamMins: number): DeclutterData => {
    return doDeclutter ? routeDeclutter2(data, diamMins) : dummyDeclutter2(data)
  }
  return (
    <Mapping
      declutter={declutter}
      fetchOverride={fetchMock}
      {...props}
    />
  )
}

const timeStep = (overview.gameTurnTime as MilliTurns).millis

// mangle the data - to cause requirement for declutter
const sameLoc = forces[1].assets && forces[1].assets[0].position
if (sameLoc) {
  annotations[1].location = sameLoc
  if (forces[1].assets) {
    forces[1].assets[1].position = sameLoc
  }
}

/**
 * DEFAULT VIEW
 */
export const NaturalEarth = Template.bind({})
NaturalEarth.args = {
  forces: forces,
  gameTurnTime: timeStep,
  isGameControl: true,
  platforms: platformTypes,
  infoMarkers: annotations,
  wargameInitiated: true,
  playerForce: forces[0].uniqid,
  phase: Phase.Planning,
  turnNumber: 5,
  mapBar: true,
  mappingConstraints: localConstraints,
  children: (
    <>
      <InfoMarkers/>
      <HexGrid />
      <Assets />
    </>
  )
}
