import L from 'leaflet'
import React from 'react'
import { withKnobs, number, radios, boolean, text } from '@storybook/addon-knobs'

/* Import mock data */
import { atlanticForces as forces, platformTypes, smallForces } from '@serge/mocks'

// Import component files
import Mapping from './index'
import docs from './README.md'
import AssetIcon from '../asset-icon'
import Assets from '../assets'
import { HexGrid } from '../hex-grid'

// import data types
import { Phase } from '@serge/config'
import { MessageMap } from '@serge/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/LegacyMapping',
  component: Mapping,
  decorators: [withKnobs, wrapper],
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

const bounds = L.latLngBounds([[80, -50.0], [40.0, 45]])

const ukViewport = L.latLngBounds([[56.30916, -4.4472763], [52.1762846, -23.464036]])

const LocalTileLayer = {
  url: './tiles/{z}/{x}/{y}.png',
  attribution: 'Generated by QTiles'
}

const OSMTileLayer = {
  url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>'
}

/**
 * DEFAULT VIEW
 */
export const Default: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  tileLayer={LocalTileLayer}
  wargameInitiated={true}
  forces={forces}
  playerForce='Blue'
  canSubmitOrders={false}
  platforms={platformTypes}
  phase={Phase.Planning}
  turnNumber={5}
  mapBar={false}
/>

/**
 * VIEW WITH MAPPING BAR
 */
export const WithMapBar: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  wargameInitiated={true}
  tileLayer={LocalTileLayer}
  forces={forces}
  canSubmitOrders={false}
  platforms={platformTypes}
  phase={Phase.Adjudication}
  turnNumber={5}
  playerForce={radios(label, forceNames, defaultValue)}
/>

/**
 * VIEW WITH SINGLE ASSET
 */
const visLabel = 'Selected'
const visDefaultValue = false

const assetForceNames = {
  Green: 'green',
  Blue: 'blue',
  Red: 'red'
}
const assetForceDefaultValue = 'blue'

const assetTypelabel = 'Type'
const assetTypeNames = {
  Destroyer: 'destroyer',
  MCMV: 'mcmv',
  Unknown: 'unknown',
  AGI: 'agi'
}
const assetTypeDefaultValue = 'agi'

export const WithMarker: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  tileLayer={LocalTileLayer}
  forces={forces}
  wargameInitiated={true}
  playerForce='Blue'
  canSubmitOrders={false}
  platforms={platformTypes}
  phase={Phase.Planning}
  turnNumber={5}
  mapBar={false}
>
  <AssetIcon
    uniqid="id1"
    name="Jeffrey"
    condition='Working'
    position={L.latLng(13.298034302, 43.0488191271)}
    selected={boolean(visLabel, visDefaultValue)}
    type={radios(assetTypelabel, assetTypeNames, assetTypeDefaultValue)}
    force={'Red'}
    perceivedForce={radios('Perceived asset force', assetForceNames, assetForceDefaultValue)}
    visibleTo={['blue,', 'red']}
    status={{
      speedKts: 10,
      state: 'Working'
    }}
    tooltip="Tooltip for marker" />
</Mapping>
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
WithMarker.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

/**
 * VIEW WITH MULTIPLE ASSETS
 */
const label = 'View As'
const forceNames = {
  White: 'umpire',
  Blue: 'Blue',
  Red: 'Red'
}
const defaultValue = 'Blue'

const assetsPhasesPhaseLabel = 'Game phase'
const assetsPhasesPhaseNames = {
  Planning: Phase.Planning,
  Adjudication: Phase.Adjudication
}
const assetsPhasePhaseValue = Phase.Planning

const canSubmitLabel = 'Can submit orders'
const canSubmitDefaultValue = true

// generic postback handler, for forms
const mapPostBack = (messageType: string, payload: MessageMap): void => {
  console.log('postback', messageType, payload)
  window.alert('postback:' + messageType + ', ' + JSON.stringify(payload))
}
export const WithAssets: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  wargameInitiated={true}
  tileLayer={OSMTileLayer}
  forces={forces}
  playerForce={radios(label, forceNames, defaultValue)}
  canSubmitOrders={boolean(canSubmitLabel, canSubmitDefaultValue)}
  platforms={platformTypes}
  phase={radios(assetsPhasesPhaseLabel, assetsPhasesPhaseNames, assetsPhasePhaseValue)}
  turnNumber={2}
  initialViewport={ukViewport}
  zoom={6.5}
  mapPostBack={mapPostBack} >
  <>
    <Assets />
    <HexGrid />
  </>
</Mapping>
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
WithAssets.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

/**
 * VIEW WITH TRIMMED ASSETS
 */
export const WithLimitedAssets: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  tileLayer={LocalTileLayer}
  forces={smallForces}
  wargameInitiated={true}
  playerForce={radios(label, forceNames, defaultValue)}
  canSubmitOrders={boolean(canSubmitLabel, canSubmitDefaultValue)}
  platforms={platformTypes}
  phase={radios(assetsPhasesPhaseLabel, assetsPhasesPhaseNames, assetsPhasePhaseValue)}
  turnNumber={2}
  mapPostBack={mapPostBack}>
  <Assets />
</Mapping>

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
WithLimitedAssets.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

/**
 * VIEW WITH HEX GRID
 */
const hexGridLabel = 'Tile diameter, nm'
const hexGridDefaultValue = 5
const hexGridOptions = {
  range: true,
  min: 1,
  max: 15,
  step: 1
}

export const WithGrid: React.FC = () => <Mapping
  bounds={bounds}
  tileLayer={OSMTileLayer}
  tileDiameterMins={number(hexGridLabel, hexGridDefaultValue, hexGridOptions)}
  forces={forces}
  wargameInitiated={true}
  platforms={platformTypes}
  phase={Phase.Planning}
  turnNumber={5}
  playerForce='Blue'
  canSubmitOrders={false}
  mapBar={false}
>
  <HexGrid />
</Mapping>

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
WithGrid.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

/**
 * VIEW WITH ALLOWABLE CELLS
 */
const allowableOnLabel = 'Show allowable cells'
const allowableDefaultValue = true

const allowableOriginLabel = 'Current location'
const allowableOriginValue = 'F10'

const allowableTerrain = 'Platform terrain constraints'
const allowableTerrainDefault = 'Sea'
const allowableTerrainOptions = {
  Sea: 'Sea',
  Land: 'Land',
  Air: 'Air'
}

const allowableGridLabel = 'Platform range'
const allowableGridDefaultValue = 3
const allowableGridOptions = {
  range: true,
  min: 1,
  max: 6,
  step: 1
}

export const WithAllowableRange: React.FC = () => <Mapping
  bounds={bounds}
  tileLayer={LocalTileLayer}
  tileDiameterMins={number(hexGridLabel, hexGridDefaultValue, hexGridOptions)}
  forces={forces}
  platforms={platformTypes}
  phase={Phase.Planning}
  turnNumber={5}
  wargameInitiated={true}
  canSubmitOrders={false}
  playerForce='Blue'
  mapBar={false}
  planningRangeProp={number(allowableGridLabel, allowableGridDefaultValue, allowableGridOptions)}
  planningConstraintsProp={boolean(allowableOnLabel, allowableDefaultValue) ? {
    origin: text(allowableOriginLabel, allowableOriginValue),
    travelMode: radios(allowableTerrain, allowableTerrainOptions, allowableTerrainDefault),
    status: 'Transiting',
    speed: 20
  } : undefined}
>
  <HexGrid />
</Mapping>

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
WithAllowableRange.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

/**
 * VIEW WITH OPEN STREET MAP
 */
export const OpenStreetMap: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  tileLayer={OSMTileLayer}
  forces={forces}
  wargameInitiated={true}
  playerForce='Blue'
  canSubmitOrders={false}
  platforms={platformTypes}
  phase={Phase.Planning}
  turnNumber={5}
  mapBar={false}
/>

/**
 * VIEW ALLOWING GAME PHASE & PLAYER FORCE TO CHANGE
 * (with the intention of verifyin that the correct form is displayed)
 */
const phasesViewLabel = 'View as'
const phasesViewNames = {
  White: 'umpire',
  Blue: 'Blue',
  Red: 'Red'
}
const phaseViewValue = 'Blue'

const phasesPhaseLabel = 'Game phase'
const phasesPhaseNames = {
  Planning: Phase.Planning,
  Adjudication: Phase.Adjudication
}
const phasePhaseValue = Phase.Planning

export const WithPhases: React.FC = () => <Mapping
  tileDiameterMins={5}
  bounds={bounds}
  wargameInitiated={true}
  tileLayer={LocalTileLayer}
  forces={forces}
  playerForce={radios(phasesViewLabel, phasesViewNames, phaseViewValue)}
  canSubmitOrders={false}
  platforms={platformTypes}
  mapPostBack={mapPostBack}
  phase={radios(phasesPhaseLabel, phasesPhaseNames, phasePhaseValue)}
  turnNumber={5}
>
  <Assets />
</Mapping>

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
WithPhases.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
