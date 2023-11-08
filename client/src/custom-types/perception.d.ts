import ForceData from './force-data'
import PlatformTypeData from './platform-type-data'

export default interface Perception {
  /**
   * the force that can perceive this asset
   */
   by: ForceData['uniqid']
   /**
   *  the force this force thiks the asset belongs to
   */
  force?: ForceData['uniqid']
  /** 
   * the platform-type this force thinks the asset is 
  */
  typeId?: PlatformTypeData['uniqid']
   /** 
   * what this force thinks the asset is called 
   */
  name?: string
  /** 
   * the perceived condition of this asset
   */
  condition?: string
  /** 
   * the perceived health of this asset
   */
  health?: number
  /**
   * the perceived location
   */ 
  position?: [number, number]
  /** the time the perception was
   * last updated
   */
  lastUpdate?: number
}
