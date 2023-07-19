/** extra detail for close-in route planning,
 * where turning circles are an issue
 */
export interface TurningDetails {
  /** radius of turning circle */
  radius: number
  /** distance in metres that asset can travel this turn */
  distance: number
  /** heading for asset, degrees from North 
   * leave as undefined if we don't know history (since we currently have no 
   * back track)
  */
  heading?: number
}

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
  rangeCells?: number
   /**
   * optional turning circle for asset, specified in metres
   */
  turningCircle?: TurningDetails
  }
