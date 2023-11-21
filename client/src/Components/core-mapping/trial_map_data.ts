import { FeatureCollection, Feature } from 'geojson'
import { Phase } from 'src/config'
import {
  CORE_MAPPING,
  CoreMappingMessage,
  CoreProperties,
  MilSymProperties
} from 'src/custom-types/core-mapping'

const coreProps: CoreProperties = {
  id: 'id-1',
  color: '#f00',
  phase: Phase.Planning,
  label: 'START LINE',
  turn: 1,
  force: 'f-red'
}

const milSymProps: MilSymProperties = {
  id: 'id-1',
  phase: Phase.Planning,
  label: 'Headquarters Building',
  turn: 1,
  force: 'f-red',
  sidc: 'ASDF-0-340'
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

console.log('message', coreMessage)
