import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CoreMapping from './index'
import docs from './README.md'
import { Phase } from 'src/config'
import { CHANNEL_CORE_MAPPING, CORE_MAPPING, CoreMappingChannel, CoreMappingMessage, CoreProperties, CoreRenderer, EnumProperty, MilSymProperties, MilSymRenderer, PARTICIPANT_CORE_MAPPING } from 'src/custom-types'
import { Feature, FeatureCollection } from 'geojson'

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

const coreProps: CoreProperties = {
  id: 'id-1',
  color: '#f00',
  phase: Phase.Planning,
  label: 'START LINE',
  turn: 1,
  force: 'f-red',
  // additional props for core renderer
  important: 'Yes'
}

const milSymProps: MilSymProperties = {
  id: 'id-1',
  phase: Phase.Planning,
  label: 'Headquarters Building',
  turn: 1,
  force: 'f-red',
  sidc: 'ASDF-0-340',
  // additional props for mil symbol
  category: 'Civilian',
  size: 'M'
}

const coreFeature: Feature = {
  type: 'Feature',
  properties: coreProps,
  geometry: {
    coordinates: [
      [
        [-2.519250407617534, 51.91732658109052],
        [-2.519250407617534, 51.36084289848887],
        [-1.2313772261967983, 51.36084289848887],
        [-1.2313772261967983, 51.91732658109052],
        [-2.519250407617534, 51.91732658109052]
      ]
    ],
    type: 'Polygon'
  }
}

const milFeature: Feature = {
  type: 'Feature',
  properties: milSymProps,
  geometry: {
    coordinates: [-2.519250407617534, 51.91732658109052],
    type: 'Point'
  }
}

/** note: this will extend `CoreMessage` */
const features: FeatureCollection = {
  type: 'FeatureCollection',
  features: [coreFeature, milFeature]
}

const coreMessage: CoreMappingMessage = {
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
    messageType: 'custom',
    timestamp: '2023-11-23T23:32:00',
    turnNumber: 1
  },
  messageType: CORE_MAPPING,
  features: features
}

const importantProp: EnumProperty = {
  id: 'important',
  label: 'Important',
  type: 'EnumProperty', 
  choices: ['Yes', 'No'],
  editable: true
}

const coreRenderer: CoreRenderer = {
  id: 'core',
  type: 'CoreRenderer',
  additionalProps: [importantProp]
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

const milSymRenderer: MilSymRenderer = {
  id: 'milSym',
  type: 'MilSymRenderer',
  additionalProps: [categoryProp, sizeProp]
}

const coreMapChannel: CoreMappingChannel = {
  uniqid: 'core',
  name: 'core mapping',
  channelType: CHANNEL_CORE_MAPPING,
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
      canCreateFrom: [coreRenderer.id, milSymRenderer.id],
      canSubmitInPhase: [Phase.Planning],
      pType: PARTICIPANT_CORE_MAPPING
    }
  ],
  renderers: [coreRenderer, milSymRenderer]
}

export const Default: React.FC = () => {
  return (
    <CoreMapping playerForce={'f-red'} messages={[coreMessage]} channel={coreMapChannel} playerRole={'mgr'} currentTurn={1} forces={[]} currentPhase={Phase.Planning}/>
  )
}
