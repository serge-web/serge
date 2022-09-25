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
}
