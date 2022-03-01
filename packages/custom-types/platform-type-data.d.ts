import { AttributeTypes } from '.';
import State from './state'

export default interface PlatformTypeData {
  name: string,
  conditions: Array<string>,
  icon: string,
  /** list of potential speeds for this platform,
   * omitted if the platform isn't mobile, empty if the
   * platform is effectively capable of infinite speed
   * (within current turn time)
   */
  speedKts?: Array<number>,
  states: Array<State>,
  travelMode: string,
  /** list of attribute types for this platform type */
  attributeTypes?: AttributeTypes
}
