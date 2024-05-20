import { Feature, FeatureCollection } from 'geojson'
import { StoryFn } from '@storybook/react'
import L from 'leaflet'
import { noop } from 'lodash'
import React, { CSSProperties, useEffect, useState } from 'react'
import { CHANNEL_MAPPING, MAPPING_MESSAGE, MAPPING_MESSAGE_DELTA, PARTICIPANT_MAPPING, Phase } from 'src/config'
import { ChannelMapping, CoreProperties, CoreRenderer, EnumProperty, ForceData, MappingMessage, MappingMessageDelta, MappingPermissions, MilSymProperties, MilSymRenderer, NumberProperty, ParticipantMapping, RENDERER_CORE, RENDERER_MILSYM, Role, StringProperty } from 'src/custom-types'
import { forceStyles } from 'src/Helpers'
import docs from './README.md'
import { generateFeatures } from './helper/feature-generator'
import CoreMapping from './index'
import PropTypes from './types/props'

type ScriptDecoratorProps = {
  scripts: string[]
  children: React.ReactElement
  style: CSSProperties
}

type ExtendPropTypes = PropTypes & {
  currentPhase: string
  selectedRole: string
}

const forces: ForceData[] = [
  {
    color: '#FFF',
    dirty: false,
    iconURL: '',
    name: 'Umpire',
    overview: '',
    roles: [{
      isGameControl: true,
      isInsightViewer: true,
      isObserver: true,
      isRFIManager: false,
      name: 'MTG 1',
      roleId: 'umpire'
    }],
    uniqid: 'umpire'
  },
  {
    color: '#F00',
    dirty: false,
    iconURL: '',
    name: 'Red',
    overview: '',
    roles: [{
      isGameControl: false,
      isInsightViewer: false,
      isObserver: false,
      name: 'MTG 1',
      roleId: 'red-mtg-1'
    },
    {
      isGameControl: false,
      isInsightViewer: false,
      isObserver: false,
      name: 'MTG 2',
      roleId: 'red-mtg-2'
    }],
    uniqid: 'f-red'
  }, {
    color: '#00F',
    dirty: false,
    iconURL: '',
    name: 'Blue',
    overview: '',
    roles: [
      {
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'MTG 1',
        roleId: 'blue-mtg-1'
      },
      {
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'MTG 2',
        roleId: 'blue-mtg-2'
      }
    ],
    uniqid: 'f-blue'
  }, {
    color: '#0F0',
    dirty: false,
    iconURL: '',
    name: 'Green',
    overview: '',
    roles: [
      {
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'MTG 2',
        roleId: 'green-mtg-2'
      }],
    uniqid: 'f-green'
  }
]

const ScriptDecorator: React.FC<ScriptDecoratorProps> = ({ scripts, children, style }) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  const loadScript = (script: string): Promise<boolean> => {
    return new Promise(resolve => {
      const head = document.querySelector('head')
      const scriptElm = document.createElement('script')
      if (!head) {
        return
      }
      scriptElm.async = true
      scriptElm.src = script
      scriptElm.onload = () => {
        resolve(true)
      }
      head.appendChild(scriptElm)
    })
  }

  useEffect(() => {
    Promise.all(scripts.map(script => loadScript(script))).then(() => setLoaded(true))
  }, [])

  return (
    loaded ? <div style={style}>{children}</div> : null
  )
}

const wrapper: React.FC = (storyFn: any) => <ScriptDecorator scripts={['/leaflet/ruler/leaflet.ruler.js']} style={{ height: '600px', position: 'relative' }}>{storyFn()}</ScriptDecorator>

export default {
  title: 'local/organisms/CoreMapping',
  component: CoreMapping,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    currentPhase: {
      options: [Phase.Adjudication, Phase.Planning],
      control: { type: 'radio' }
    },
    selectedRole: {
      options: forces.flatMap(force => force.roles.map(role => role.roleId)),
      control: { type: 'radio' }
    },
    openPanelAsDefault: {
      control: { type: 'boolean' }
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
  playerEditable: true
}

const forceProp: EnumProperty = {
  id: 'force',
  label: 'Force',
  type: 'EnumProperty', 
  choices: ['f-red', 'f-blue', 'f-green'],
  playerEditable: false
}

const ordersProp: StringProperty = {
  id: 'orders',
  label: 'Orders',
  description: 'Today\'s orders for this unit',
  lines: 3,
  type: 'StringProperty', 
  playerEditable: true
}

const phaseProp: EnumProperty = {
  id: 'phase',
  label: 'Phase',
  description: 'The phase when this item was generated',
  type: 'EnumProperty', 
  choices: [Phase.Adjudication, Phase.Planning],
  playerEditable: false
}

const turnProp: NumberProperty = {
  id: 'turn',
  label: 'Turn',
  description: 'The turn when this item was generated',
  type: 'NumberProperty',
  playerEditable: false,
  format: '0'
}

const healthProp: NumberProperty = {
  id: 'health',
  label: 'Health',
  description: 'The health of this unit (0..100)',
  type: 'NumberProperty',
  playerEditable: true,
  format: '0'
}

const categoryProp: EnumProperty = {
  id: 'category',
  label: 'Category',
  type: 'EnumProperty', 
  choices: ['Infrastructure', 'Military', 'Civilian'],
  playerEditable: false
}

const sizeProp: EnumProperty = {
  id: 'size',
  label: 'Size',
  type: 'EnumProperty', 
  choices: ['S', 'M', 'L'],
  playerEditable: false
}

/** Feature Properties definitions */

const coreProps: CoreProperties = {
  id: 'id-1',
  _type: RENDERER_CORE,
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
  _type: RENDERER_MILSYM,
  phase: Phase.Planning,
  label: 'Headquarters Building',
  turn: 1,
  force: 'f-red',
  sidc: '10031000141211000000',
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
  properties: { ...coreProps, id: 'ba', force: 'f-blue' },
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
  properties: { ...milSymProps, id: 'aa', orders: 'Plan today\'s activities' },
  geometry: {
    coordinates: [-0.07929841834678086,
      51.497669733260125],
    type: 'Point'
  }
}

const anotherMilFeature: Feature = {
  type: 'Feature',
  properties: { ...milSymProps, force: 'f-blue', id: 'ab', label: 'Military Tailor', orders: 'Make uniforms for the troops if they need them, else darn socks and mittens' },
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

const deltaMessage: MappingMessageDelta = {
  _id: 'timestamp-23',
  delta: [],
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
  messageType: MAPPING_MESSAGE_DELTA,
  since: 'timestamp-23'
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
  additionalProps: [categoryProp, sizeProp, healthProp, ordersProp]
}

const redParticipant: ParticipantMapping = {
  forceUniqid: 'f-red',
  roles: [],
  subscriptionId: 'aaaa',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Planning, Phase.Adjudication],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-red': [MappingPermissions.ViewSpatial, MappingPermissions.MoveResize, MappingPermissions.AddRemove, 
      MappingPermissions.ViewProps, MappingPermissions.EditOwnProps],
    'f-blue': [MappingPermissions.ViewSpatial] 
  } 
}

const bluePlanningParticipant: ParticipantMapping = {
  forceUniqid: 'f-blue',
  roles: ['blue-mtg-1'],
  subscriptionId: 'bbbb',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Planning],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-blue': [MappingPermissions.ViewSpatial, MappingPermissions.MoveResize, MappingPermissions.EditOwnProps],
    'f-red': [MappingPermissions.ViewSpatial] 
  } 
}   

const blueAdudicationParticipant: ParticipantMapping = {
  forceUniqid: 'f-blue',
  roles: ['blue-mtg-1'],
  subscriptionId: 'bbbb',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Adjudication],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-blue': [MappingPermissions.Exists, MappingPermissions.ViewProps],
    'f-red': [] 
  } 
}   

const umpireParticipant: ParticipantMapping = {
  forceUniqid: 'umpire',
  roles: ['umpire'],
  subscriptionId: 'casa',
  forRenderer: [coreRenderer.id, milSymRenderer.id],
  phases: [Phase.Planning, Phase.Adjudication],
  pType: PARTICIPANT_MAPPING,
  permissionTo: {
    'f-blue': [MappingPermissions.AddRemove, MappingPermissions.ViewProps, MappingPermissions.EditAllProps, MappingPermissions.MoveResize, MappingPermissions.ViewSpatial],
    'f-red': [MappingPermissions.ViewSpatial, MappingPermissions.ViewProps, MappingPermissions.AddRemove] 
  } 
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
    redParticipant, bluePlanningParticipant, blueAdudicationParticipant, umpireParticipant
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

const forceStylesArr = forceStyles(forces, false)

/** from the provided force & role, produce a ForceRole object */
const roleFromName = (selection: string, forces: ForceData[]): Role | undefined => {
  const allRoles = forces.flatMap(force => force.roles)
  return allRoles.find((role: Role) => {
    return role.roleId === selection
  })
}

const forceFromRole = (role: Role, forces: ForceData[]): ForceData | undefined => {
  return forces.find(force => {
    return force.roles.includes(role)
  })
}

const Template: StoryFn<ExtendPropTypes> = (args) => {
  return <CoreMapping
    playerForce={forceFromRole(roleFromName(args.selectedRole, forces) as Role, forces) as ForceData}
    messages={[coreMessage, deltaMessage]}
    channel={coreMapChannel}
    playerRole={roleFromName(args.selectedRole, forces)}
    currentTurn={1}
    forceStyles={forceStylesArr}
    currentPhase={args.currentPhase}
    postBack={noop}
    openPanelAsDefault={args.openPanelAsDefault}
  />
}

export const Default = Template.bind({})

export const Bulk = Template.bind({})
Bulk.args = {
  messages: [bulkMessage, deltaMessage]
}
