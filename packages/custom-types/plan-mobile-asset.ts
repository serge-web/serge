/**
 * Details necessary for planning a turn for a mobile asset
 */
export default interface PlanMobileAsset {
  /**
   * hex coords of start location
   */
  origin: string
  /**
   * h3 coords of start location
   */
  origin3: string
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
   * optional limit of number of h3 cells this asset can travel in this turn. Omit
   * for unlimited range or if it's immobile
   */
  range3?: number
  }
