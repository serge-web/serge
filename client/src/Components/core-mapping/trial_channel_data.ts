import { Phase } from 'src/config'
import { CHANNEL_CORE_MAPPING, CoreMappingChannel, CoreRenderer, EnumProperty, MilSymRenderer, PARTICIPANT_CORE_MAPPING } from 'src/custom-types/core-mapping'

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

console.log('channel', coreMapChannel)
