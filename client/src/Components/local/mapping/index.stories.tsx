// import data types
import { Phase } from 'src/config'
import { MappingConstraints, MessageMap } from 'src/custom-types'
/* Import mock data */
import { forces, localMappingConstraints, platformTypes, smallForces } from 'src/mocks'
import { boolean } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import L from 'leaflet'
import React from 'react'
import Assets from '../assets'
import { HexGrid } from '../hex-grid'
import MapIcon from '../map-icon'
// Import component files
import Mapping from './index'
import docs from './README.md'
import MappingPropTypes from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/Mapping/Gulf',
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
    zoom: {
      control: {
        type: 'number'
      }
    },
    playerForce: {
      name: 'View as',
      control: {
        type: 'radio',
        defaultValue: 'Blue',
        options: [
          'White',
          'Blue',
          'Red'
        ]
      }
    },
    phase: {
      name: 'Game phase',
      control: {
        type: 'radio',
        defaultValue: Phase.Planning,
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
    planningRangeProp: {
      name: 'Platform range',
      control: {
        type: 'range',
        defaultValue: 1,
        min: 1,
        max: 6,
        step: 1
      }
    },
    wargameInitiated: {
      name: 'Wargame has been initiated',
      control: {
        type: 'boolean'
      }
    },
    showAllowableCells: {
      name: 'Show allowable cells',
      control: {
        type: 'boolean'
      }
    },
    allowableOrigin: {
      name: 'Current location'
    },
    allowableTerrain: {
      name: 'Platform terrain constraints',
      defaultValue: 'Sea',
      control: {
        type: 'radio',
        options: [
          'Sea',
          'Land',
          'Air'
        ]
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}

interface StoryPropTypes extends MappingPropTypes {
  showAllowableCells?: boolean
  allowableOrigin?: string
  allowableTerrain?: string
}

const osmMappingConstraints: MappingConstraints = {
  bounds: [[14.194809302, 42.3558566271], [12.401259302, 43.7417816271]],
  h3res: 3,
  tileLayer: {
    url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
    attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxNativeZoom: 12
  },
  minZoom: 8,
  maxZoom: 13
}

const Template: Story<StoryPropTypes> = (args) => {
  const {
    playerForce,
    showAllowableCells,
    allowableOrigin = '',
    allowableTerrain = '',
    ...props
  } = args
  const forceNames = {
    White: 'umpire',
    Blue: 'Blue',
    Red: 'Red'
  }
  if (showAllowableCells) {
    props.planningConstraintsProp = {
      origin: allowableOrigin,
      travelMode: allowableTerrain,
      status: 'Transiting',
      speed: 20
    }
  }

  return (
    <Mapping
      playerForce={forceNames[playerForce]}
      {...props}
    />
  )
}

/**
 * DEFAULT VIEW
 */
export const Default = Template
Default.args = {
  mappingConstraints: localMappingConstraints,
  forces: forces,
  playerForce: 'Blue',
  gameTurnTime: { unit: 'millis', millis: 72000 },
  markerIcons: [],
  isGameControl: false,
  platforms: platformTypes,
  phase: Phase.Planning,
  turnNumber: 5,
  mapBar: false
}
/**
 * VIEW WITH MAPPING BAR
 */
export const WithMapBar = Template
WithMapBar.args = {
  forces: forces,
  mappingConstraints: localMappingConstraints,
  gameTurnTime: { unit: 'millis', millis: 72000 },
  markerIcons: [],
  isGameControl: false,
  platforms: platformTypes,
  phase: Phase.Adjudication,
  turnNumber: 5
}

/**
 * VIEW WITH SINGLE ASSET
 */
const visLabel = 'Selected'
const visDefaultValue = false

export const WithMarker = Template
WithMarker.args = {
  forces: forces,
  playerForce: 'Blue',
  isGameControl: false,
  mappingConstraints: localMappingConstraints,
  platforms: platformTypes,
  gameTurnTime: { unit: 'millis', millis: 72000 },
  phase: Phase.Planning,
  turnNumber: 5,
  mapBar: false,
  children: (
    <MapIcon
      uniqid="id1"
      name="Jeffrey"
      contactId='C345'
      condition='Working'
      position={L.latLng(13.298034302, 43.0488191271)}
      selected={boolean(visLabel, visDefaultValue)}
      typeId='dummy-ref'
      force={'Red'}
      perceivedForceColor={'#00f'}
      visibleTo={['blue,', 'red']}
      attributes={[]}
      status={{
        speedKts: 10,
        state: 'Working'
      }}
      tooltip="Tooltip for marker" />
  )
}

/**
 * VIEW WITH MULTIPLE ASSETS
 */

// generic postback handler, for forms
const mapPostBack = (messageType: string, payload: MessageMap): void => {
  console.log('postback', messageType, payload)
  window.alert('postback:' + messageType + ', ' + JSON.stringify(payload))
}
export const WithAssets = Template
WithAssets.args = {
  forces: forces,
  platforms: platformTypes,
  mappingConstraints: localMappingConstraints,
  turnNumber: 2,
  mapPostBack: mapPostBack,
  children: (
    <>
      <Assets />
      <HexGrid />
    </>
  )
}

/**
 * VIEW WITH TRIMMED ASSETS
 */
export const WithLimitedAssets = Template
WithLimitedAssets.args = {
  forces: smallForces,
  platforms: platformTypes,
  mappingConstraints: localMappingConstraints,
  turnNumber: 2,
  mapPostBack: mapPostBack,
  children: (
    <>
      <Assets />
      <HexGrid />
    </>
  )
}

/**
 * VIEW WITH HEX GRID
 */
export const WithGrid = Template

WithGrid.args = {
  forces: forces,
  platforms: platformTypes,
  mappingConstraints: localMappingConstraints,
  phase: Phase.Planning,
  turnNumber: 5,
  playerForce: 'Blue',
  isGameControl: false,
  mapBar: false,
  children: <HexGrid />
}

/**
 * VIEW WITH ALLOWABLE CELLS
 */
export const WithAllowableRange = Template
WithAllowableRange.args = {
  forces: forces,
  platforms: platformTypes,
  phase: Phase.Planning,
  mappingConstraints: localMappingConstraints,
  turnNumber: 5,
  isGameControl: false,
  playerForce: 'Blue',
  mapBar: false,
  planningRangeProp: 3,
  showAllowableCells: true,
  allowableOrigin: 'F10',
  children: <HexGrid />
}

/**
 * VIEW WITH OPEN STREET MAP
 */
export const OpenStreetMap = Template
OpenStreetMap.args = {
  mappingConstraints: osmMappingConstraints,
  forces: forces,
  playerForce: 'Blue',
  isGameControl: false,
  platforms: platformTypes,
  phase: Phase.Planning,
  turnNumber: 5,
  mapBar: false
}
/**
 * VIEW ALLOWING GAME PHASE & PLAYER FORCE TO CHANGE
 * (with the intention of verifyin that the correct form is displayed)
 */

export const WithPhases = Template
WithPhases.args = {
  forces: forces,
  isGameControl: false,
  mappingConstraints: localMappingConstraints,
  platforms: platformTypes,
  mapPostBack: mapPostBack,
  turnNumber: 5,
  children: <Assets />
}
