/**
 * mapping context, shared with child elements
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
   * speed of travel
   */
  speed?: number
}
