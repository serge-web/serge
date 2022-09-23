import { LatLngExpression, LatLngBounds } from 'leaflet'

export default interface PropTypes {
  bounds?: LatLngBounds
  position?: LatLngExpression
  zoom: number
  allForces: ForceData[]
}
