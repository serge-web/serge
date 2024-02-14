//
// NOTE: this is an initial set of types in support of the CoreMapping channel
//
import { Phase } from 'src/config'
import { ForceData } from './force-data'
import { ForceStyle } from 'src/Helpers'

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
    _forceStyles?: ForceStyle[]
    turn: number
    phase: Phase
    visibleTo?: [ForceData['id']]
}

/** custom properties for the core renderer */
export interface CoreProperties extends BaseProperties {
    // color: string // redundant property
    [other: string]: unknown
}

/** custom properties for a MilSym renderer */
export interface MilSymProperties extends BaseProperties {
    sidc: string
    [other: string]: unknown
}

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
  /** font-awesome icon to show against this field */
  icon?: string
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
