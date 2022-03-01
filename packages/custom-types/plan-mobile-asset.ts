/**
 * Details necessary for planning a turn for a mobile asset
 */
export default interface PlanMobileAsset {
  /**
   * hex coords of start location
   */
  origin: string
   /**
   * mode of travel for this asset
   */
  travelMode: string
  /**
   * type of travel
   */
  status: string
  /** 
   * speed of travel. Omit if travel is unrestricted (such as with aircraft)
   */
  speed?: number
  /**
   * optional limit of number of cells this asset can travel in this turn. Omit
   * for unlimited range or if it's immobile
   */
  range?: number
  /**
   * optional turning circle for asset, specified in metres
   */
  turningCircle?: number
  }
