import ForceData from "./force-data";
import PlatformTypeData from "./platform-type-data";

/** set of CSS classes that represent perception */
export default interface PerceivedTypes {
  /**
   *  css class fpr the the force this force thiks the asset belongs to.
   * Probably sanitised version of force name
   */
  force: string,
  /** 
   * the platform-type this force thinks the asset is,
   * used to determine asset-icon
   * TODO: switch to retrieving icon type from platform-type-data, or `unknown` icon
  */
  type: string,
  /**
   *  the percevied type id (or undefined if unknown)
   */
  typeId?: PlatformTypeData['uniqid'] | undefined
  /** the perceived force id (or undefined if unknown) 
   * 
  */
  forceId?: ForceData['uniqid']
  /** 
   * what this force thinks the asset is called 
   */
  name: string,
}
