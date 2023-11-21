//
// NOTE: this is an initial set of types in support of the CoreMapping channel
//
import { Phase } from 'src/config'
import { ForceData } from './force-data'
import { FeatureCollection } from 'geojson'
import { CoreMessage } from './message'

/** properties common to all renderers */
export interface BaseProperties {
    id: string
    label: string
    force?: ForceData['id']
    turn: number
    phase: Phase
    visibleTo?: [ForceData['id']]    
}

/** custom properties for the core renderer */
export interface CoreProperties extends BaseProperties {
    color: string
}

/** custom properties for a MilSym renderer */
export interface MilSymProperties extends BaseProperties {
    sidc: string
}
// TODO: move this const to the central consts file
const CORE_MAPPING = 'CoreMappingMessage'

// TODO: move this type to the message.d.ts file
export interface CoreMappingMessage extends CoreMessage {
    readonly messageType: typeof CORE_MAPPING
    features: FeatureCollection
}
