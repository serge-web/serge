import { LatLngExpression, LatLngBounds } from 'leaflet'
import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  bounds?: LatLngBounds
  position?: LatLngExpression
  zoom: number
  ownAssets: AssetRow[]
  opAssets: AssetRow[]
  filterApplied: boolean
  setFilterApplied
  /** id of selected asset */
  selectedItem?: string | undefined
  /** list of forces. User for `viewAs` feature */
  forces: ForceData[]
  /** callback for umpire clicking on view-as button */
  viewAsCallback?: {(force: ForceData['uniqid']): void}
  /** current value of `view as` */
  viewAsForce?: string
}
