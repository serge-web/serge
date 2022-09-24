import { LatLngExpression, LatLngBounds } from 'leaflet'
import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  bounds?: LatLngBounds
  position?: LatLngExpression
  zoom: number
  allForces: ForceData[]
  opForces: AssetRow[]
  ownForces: AssetRow[]
}
