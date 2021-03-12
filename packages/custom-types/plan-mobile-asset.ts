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
}
