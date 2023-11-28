//
// NOTE: this is an initial set of types in support of the CoreMapping channel
//
import { Phase } from 'src/config'
import { ForceData } from './force-data'
import { FeatureCollection } from 'geojson'
import { CoreMessage } from './message'
import { ChannelCore } from './channel-data'
import MappingConstraints from './mapping-constraints'

export const RENDERER_CORE = 'CoreRenderer'
export const RENDERER_MILSYM = 'MilSymRenderer'

/** properties common to all renderers
 * Note: we're introducing practice of leading underscore for
 * properties that are not shown to players
 */
export interface BaseProperties {
    id: string
    // which renderer to use for this feature
    _type: typeof RENDERER_CORE | typeof RENDERER_MILSYM
    label: string
    force?: ForceData['id']
    turn: number
    phase: Phase
    visibleTo?: [ForceData['id']]
}

/** custom properties for the core renderer */
export interface CoreProperties extends BaseProperties {
    color: string
    [other: string]: unknown
}

/** custom properties for a MilSym renderer */
export interface MilSymProperties extends BaseProperties {
    sidc: string
    [other: string]: unknown
}

// TODO: move this const to the central consts file
export const CORE_MAPPING = 'CoreMappingMessage'

// TODO: move this type to the message.d.ts file
export interface CoreMappingMessage extends CoreMessage {
    readonly messageType: typeof CORE_MAPPING
    features: FeatureCollection
}

export const CHANNEL_CORE_MAPPING = 'CoreMapping'

export interface BaseProperty {
  id: string
  /** one of the type enums below */
  type: string
  /** label to show for this property */
  label: string
  /** longer description for this property */
  description?: string
  /** whether the property is user-editable */
  editable?: boolean
}

export const PROPERTY_STRING = 'StringProperty'
export const PROPERTY_NUMBER = 'NumberProperty'
export const PROPERTY_ENUM = 'EnumProperty'

export interface StringProperty extends BaseProperty {
  type: typeof PROPERTY_STRING
  default?: string
}

export interface NumberProperty extends BaseProperty {
  type: typeof PROPERTY_NUMBER  
  format?: string // number format mask
  default?: number // default value
}

export interface EnumProperty extends BaseProperty {
  type: typeof PROPERTY_ENUM
  choices: string[] // value choices
  default?: string // default value (or use first choice by default)
}

export type PropertyTypes = StringProperty | NumberProperty | EnumProperty

export interface BaseRenderer {
    id: string 
    type: string // one of the renderer type strings
    baseProps: PropertyTypes[] // general properties, applicable to all renderers
    additionalProps: PropertyTypes[] // any additional properties that are used for this renderer
}

export interface CoreRenderer extends BaseRenderer {
   type: typeof RENDERER_CORE
}

export interface MilSymRenderer extends BaseRenderer {
  type: typeof RENDERER_MILSYM
  cluster?: boolean // whether to cluster symbols
}

const PARTICIPANT_CORE_MAPPING = 'ParticipantCoreMapping'

/** participation in collaborative editing channels */
export interface CoreMappingParticipant extends CoreParticipant {
    readonly pType: typeof PARTICIPANT_CORE_MAPPING
    /** the phase(s) that this participant can create/edit items in */
    canSubmitInPhase: [Phase]
    /** ids of renderers that this role can create items for */
    canCreateFrom: BaseRenderer['id'][]
} 

export interface CoreMappingChannel extends ChannelCore {
    channelType: typeof CHANNEL_CORE_MAPPING
    /** map/tile constraints */
    constraints: MappingConstraints
    /** list of participants for this channel */
    participants: Array<CoreMappingParticipant>
    /** list of renderers for this channel */
    renderers: Array<BaseRenderer>
}
