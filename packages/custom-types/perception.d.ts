import ForceData from "./force-data";
import PlatformTypeData from "./platform-type-data";

export default interface Perception {
  /**
   * the force that can perceive this asset
   */
   by: ForceData['uniqid'],
   /**
   *  the force this force thiks the asset belongs to
   */
  force?: ForceData['uniqid'],
  /** 
   * the platform-type this force thinks the asset is 
   * @deprecated
  */
  type?: string,
  /** 
   * the platform-type this force thinks the asset is 
  */
  typeId?: PlatformTypeData['uniqid'],
   /** 
   * what this force thinks the asset is called 
   */
  name?: string
}
