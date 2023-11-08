import L from 'leaflet'
import { Asset, AttributeValues, PlatformTypeData, RouteStatus } from 'src/custom-types'
import { OrientationData } from '../../../local/assets/types/asset_info'

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
  * the type of the asset
  */
  typeId: PlatformTypeData['uniqid']
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
   * A list of forces able to see the asset
   */
  visibleTo: Array<string>
  /**
   * whether the asset can be dragged in turn zero
   */
  locationPending?: boolean
  /**
   *
   */
  markerDropped?: { (cell: string, uniqid: Asset['uniqid']): void }
  /**
   * imageSrc custom icon for asset
   */
  imageSrc?: string
  /**
   *  attributes for this assset
   */
  attributes: AttributeValues
  /**
   * orientation of the marker (degs from North)
   */
  orientationData?: OrientationData[]
  /**
   * the leaflet map (used for projection conversions)
   */
  map?: L.Map
}
