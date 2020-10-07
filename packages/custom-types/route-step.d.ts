import Role from './role'
import RouteStatus from './route-status'

/** when coords come from database they frequently
 * aren't in L.LatLng format, they're simpler. 
 * Allow this simpler structure
 */
interface SimpleCoords {
  lat: number,
  lng: number
}

export default interface RouteStep {
  turn: number,
  coords?: Array<string>,
  locations?: Array<L.LatLng | SimpleCoords>,
  status: RouteStatus
}