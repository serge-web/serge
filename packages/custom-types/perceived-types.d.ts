import PlatformTypeData from "./platform-type-data";

/** set of CSS classes that represent perception */
export default interface PerceivedTypes {
  /**
   *  the force this force thiks the asset belongs to
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
  /** 
   * what this force thinks the asset is called 
   */
  name: string,
}
