export default interface PropTypes {
  /**
   * The unique identifier for the asset marker
   */
  uniqid: string
  /**
   * The name of the asset marker
   */
  name: string
  /**
   * The name of the icon to be used on the asset
   */
  type: string
  /**
   * The position to place the icon on the map
   */
  position: L.LatLng
  /**
   * The force which the asset belongs to
   */
  force: string
  /**
   * The perceived force for this asset
   */
  perceivedForce: string
  /**
   * if this asset is selected
   */
  selected: boolean
  /**
   * The tooltip label for the marker
   */
  tooltip?: string
  condition?: string
  status: {
    speedKts: number
    state: string
  }
  /**
   * the list of forces that can control this asset
   */
  controlledBy?: [string]
  /**
   * A list of forces able to see the asset
   */
  visibleTo: Array<string>
}
