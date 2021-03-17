import L from 'leaflet'
import { PointLike } from 'honeycomb-grid'

/** convert this point in world coordinates to cell
 * @param {any} point location in world coordinate system
 * @param {L.latLng} origin location of hex origin (0,0) in world degree system
 * @param {number} tileSize diamater of hex tiles in Degrees (used as
 * scaling factor)
 * @returns {L.LatLng} coordinate in 2d Hex degrees
 */
const toScreen = (point: L.LatLng, origin: L.LatLng, tileSize: number): PointLike => {
  const latVal = (origin.lat - point.lat) / tileSize
  const lngVal = (point.lng - origin.lng) / tileSize
  return L.point(lngVal, latVal)
}

export default toScreen
