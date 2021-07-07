import { RouteStatus } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The unique identifier for the asset marker
   */
  readonly uniqid: string
  /**
   * The name of the asset marker
   */
  name: string
  /**
   * The contactId
   */
  contactId: string
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
   * The perceived color for this asset
   */
  perceivedForceColor: string
  /**
   * The perceived color for this asset
   */
  perceivedForceClass?: string
   /**
   * if this asset is selected
   */
  selected: boolean
  /**
   * The tooltip label for the marker
   */
  tooltip?: string
  /**
   * current condition of the asset
   */
  condition?: string
  /**
   * current status of this asset
   */
  status?: RouteStatus
  /**
   * the list of forces that can control this asset
   */
  controlledBy?: Array<string>
  /**
   * A list of forces able to see the asset
   */
  visibleTo: Array<string>
  /**
   * whether the asset can be dragged in turn zero
   */
  locationPending?: boolean
  /**
   * imageSrc custom icon for asset
   */
  imageSrc?: string
}
