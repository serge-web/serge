import { UNKNOWN_TYPE } from '@serge/config';
import ForceData from "./force-data";
import PlatformTypeData from "./platform-type-data";

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
  /** 
   * the perceived condition of this asset
   */
  condition?: string
}
