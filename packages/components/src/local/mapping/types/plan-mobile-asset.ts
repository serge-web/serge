/**
 * mapping context, shared with child elements
 */
export default interface PlanMobileAsset {
  /**
   * hex coords of start location
   */
  origin: string
  /**
   * range that can be travelled this turn
   */
  range: number
  /**
   * mode of travel for this asset
   */
  travelMode: string
}
