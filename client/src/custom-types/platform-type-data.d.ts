import { AttributeTypes, GenericAttributes } from '.'
import State from './state'

/** description of if/how to display 
 * the orientation of instances of this platform type
 */
export interface OrientationMarker {
  /** 
   * name of attribute to use as orientation value
   */
  attribute?: string
  /** 
   * whether attribute is relative to platform heading or absolute 
   */
  origin?: 'relative' | 'absolute'
}

export type OrientationMarkers = OrientationMarker[]

export default interface PlatformTypeData {
  /** unique identifier for this platform type. Having
   * this identifier means the p-type name can be 
   * edited
   */
  readonly uniqid: string
  name: string
  conditions: Array<string>
  icon: string
  /** if the icon for this platform type can come from the milsymbol library */
  sidc?: string
  /** list of potential speeds for this platform,
   * omitted if the platform isn't mobile, empty if the
   * platform is effectively capable of infinite speed
   * (within current turn time)
   */
  speedKts?: Array<number>
  states: Array<State>
  /** what this platform type can travel on */
  travelMode: 'sea' | 'air' | 'land'
  /** list of attribute types for this platform type */
  attributeTypes?: AttributeTypes
  /** list of attribute ids for this platofrm type - allows
   * use of generic attribute types
   */
  attributeTypeIds?: GenericAttributes
  /** if/how to display orientation data for the asset */
  orientation?: OrientationMarkers
  /** optional turning circle radius, in meters */
  turningCircle?: number
}
