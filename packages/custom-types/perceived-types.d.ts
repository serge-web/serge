import ForceData from "./force-data";
import PlatformTypeData from "./platform-type-data";
import { UNKNOWN_TYPE } from '@serge/config'

/** set of CSS classes that represent perception */
export default interface PerceivedTypes {
  /**
   *  the percevied type id (or undefined if unknown)
   */
  typeId: PlatformTypeData['uniqid'] | typeof UNKNOWN_TYPE
  /** the perceived force id (or undefined if unknown) 
   * 
  */
  forceId: ForceData['uniqid'] | typeof UNKNOWN_TYPE
   /** 
   * what this force thinks the asset is called 
   */
  name: string,
}
