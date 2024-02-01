import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import L from 'leaflet'
import CoreMapping from './index'
import docs from './README.md'
import { CHANNEL_MAPPING, MAPPING_MESSAGE, PARTICIPANT_MAPPING, Phase } from 'src/config'
import { ChannelMapping, MappingMessage, CoreProperties, CoreRenderer, EnumProperty, MilSymProperties, MilSymRenderer, NumberProperty, RENDERER_CORE, RENDERER_MILSYM, ForceData } from 'src/custom-types'
import { Feature, FeatureCollection } from 'geojson'
import { generateFeatures } from './helper/feature-generator'
import { noop } from 'lodash'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/CoreMapping',
  component: CoreMapping,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const largeBounds = L.latLngBounds(L.latLng(45, -30), L.latLng(60, 30))
// const bounds = L.latLngBounds(L.latLng(51.405, -0.02), L.latLng(51.605, -0.13))

/** PROPERTY DEFINITIONS */

const importantProp: EnumProperty = {
  id: 'important',
  label: 'Important',
  type: 'EnumProperty', 
  description: 'Whether this relates to an important operation or interaction',
  choices: ['Yes', 'No'],
  editable: true
}

const forceProp: EnumProperty = {
  id: 'force',
  label: 'Force',
  type: 'EnumProperty', 
  choices: ['f-red', 'f-blue', 'f-green'],
  editable: false
}

const phaseProp: EnumProperty = {
  id: 'phase',
  label: 'Phase',
  description: 'The phase when this item was generated',
  type: 'EnumProperty', 
  choices: [Phase.Adjudication, Phase.Planning],
  editable: false
}

const turnProp: NumberProperty = {
  id: 'turn',
  label: 'Turn',
  description: 'The turn when this item was generated',
  type: 'NumberProperty',
  editable: false,
  format: '0'
}

const categoryProp: EnumProperty = {
  id: 'category',
  label: 'Category',
  type: 'EnumProperty', 
  choices: ['Infrastructure', 'Military', 'Civilian'],
  editable: false
}

const sizeProp: EnumProperty = {
  id: 'size',
  label: 'Size',
  type: 'EnumProperty', 
  choices: ['S', 'M', 'L'],
  editable: false
}

/** Feature Properties definitions */

const coreProps: CoreProperties = {
  id: 'id-1',
  _type: RENDERER_CORE,
  color: '#f00',
  phase: Phase.Planning,
  label: 'START LINE',
  turn: 1,
  health: 100,
  force: 'f-red',
  // additional props for core renderer
  important: 'Yes'
}

const milSymProps: MilSymProperties = {
  id: 'id-1',
  _type: RENDERER_MILSYM,
  phase: Phase.Planning,
  label: 'Headquarters Building',
  turn: 1,
  force: 'f-red',
  sidc: 'SFG-UCI----D',
  health: 80,
  // additional props for mil symbol
  category: 'Civilian',
  size: 'M'
}

const coreFeature: Feature = {
  type: 'Feature',
  properties: { ...coreProps, id: 'bb', label: 'Barrier' },
  geometry: {
    coordinates: [
      [
        [
          -0.03167616558306463,
          51.50940207305993
        ],
        [
          -0.03167616558306463,
          51.49266769548318
        ],
        [
          0.03011008273324478,
          51.49266769548318
        ],
        [
          0.03011008273324478,
          51.50940207305993
        ],
        [
          -0.03167616558306463,
          51.50940207305993
        ]
      ]
    ],
    type: 'Polygon'
  }
}

const anotherCoreFeature: Feature = {
  type: 'Feature',
  properties: { ...coreProps, id: 'ba' },
  geometry: {
    coordinates: [
      [
        [
          -0.1316761655830646,
          51.52940207305993
        ],
        [
          -0.2316761655830646,
          51.49266769548318
        ],
        [
          0.03011008273324478,
          51.53266769548318
        ]
      ]
    ],
    type: 'Polygon'
  }
}

const milFeature: Feature = {
  type: 'Feature',
  properties: { ...milSymProps, id: 'aa' },
  geometry: {
    coordinates: [-0.07929841834678086,
      51.497669733260125],
    type: 'Point'
  }
}

const anotherMilFeature: Feature = {
  type: 'Feature',
  properties: { ...milSymProps, id: 'ab', label: 'Military Tailor' },
  geometry: {
    coordinates: [-0.07929841834678096, 51.50966973326012],
    type: 'Point'
  }
}

/** note: this will extend `CoreMessage` */
const features: FeatureCollection = {
  type: 'FeatureCollection',
  features: [coreFeature, anotherCoreFeature, milFeature, anotherMilFeature]
}

const coreMessage: MappingMessage = {
  _id: 'timestamp-23',
  details: {
    channel: 'core-mapping',
    from: {
      force: 'f-red',
      forceColor: '#f00',
      roleId: 'mar-23',
      roleName: 'MARITIME CTRL',
      iconURL: 'f-red.svg'
    },
    timestamp: '2023-11-23T23:32:00',
    turnNumber: 1
  },
  messageType: MAPPING_MESSAGE,
  featureCollection: features
}

const baseProps = [forceProp, phaseProp, turnProp]

const coreRenderer: CoreRenderer = {
  id: 'core',
  type: 'CoreRenderer',
  baseProps,
  additionalProps: [importantProp]
}

const milSymRenderer: MilSymRenderer = {
  id: 'milSym',
  type: 'MilSymRenderer',
  baseProps,
  additionalProps: [categoryProp, sizeProp]
}

const coreMapChannel: ChannelMapping = {
  uniqid: 'core',
  name: 'core mapping',
  channelType: CHANNEL_MAPPING,
  constraints: {
    bounds: [[1.1, 2.2], [3.3, 5.5]],
    minZoom: 3,
    tileLayer: {
      url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
      maxNativeZoom: 12
    }
  },
  participants: [
    {
      forceUniqid: 'f-red',
      roles: [],
      subscriptionId: 'aaaa',
      canCreateFrom: [coreRenderer.id, milSymRenderer.id],
      canSubmitInPhase: [Phase.Planning],
      pType: PARTICIPANT_MAPPING
    }
  ],
  renderers: [coreRenderer, milSymRenderer]
}

const bulkMessage: MappingMessage = {
  _id: 'timestamp-23',
  details: {
    channel: 'core-mapping',
    from: {
      force: 'f-red',
      forceColor: '#f00',
      roleId: 'mar-23',
      roleName: 'MARITIME CTRL',
      iconURL: 'f-red.svg'
    },
    timestamp: '2023-11-23T23:32:00',
    turnNumber: 1
  },
  messageType: MAPPING_MESSAGE,
  featureCollection: generateFeatures(largeBounds, 300, 30)
}

console.log(coreMessage)

const playerForce: ForceData = {
  color: '#000',
  dirty: false,
  iconURL: '',
  name: '',
  overview: '',
  roles: [],
  uniqid: 'f-red'
}

export const Default: React.FC = () => {
  return (
    <CoreMapping
      playerForce={playerForce}
      messages={[coreMessage]}
      channel={coreMapChannel}
      playerRole={'mgr'}
      currentTurn={1}
      forces={[]}
      currentPhase={Phase.Planning}
      postBack={noop}
      openPanelAsDefault={false}
    />
  )
}

export const Bulk: React.FC = () => {
  return (
    <CoreMapping
      playerForce={playerForce}
      messages={[bulkMessage]}
      channel={coreMapChannel}
      playerRole={'mgr'}
      currentTurn={1}
      forces={[]}
      currentPhase={Phase.Planning}
      postBack={noop}
      openPanelAsDefault={false}
    />
  )
}
