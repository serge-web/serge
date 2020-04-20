import L from 'leaflet'

/** convert this point in cell coordinates to lat/long
 * @param {any} point location in 2d Hex coordinate system
 * @param {L.latLng} origin location of hex origin (0,0) in world degree system
 * @param {number} tileSize diamater of hex tiles in Degrees (used as
 * scaling factor)
 * @returns {L.LatLng} coordinate in world degrees
 */
const toWorld = (point: any, origin: L.LatLng, tileSize: number): L.LatLng => {
  const newLat = origin.lat - point.y * tileSize
  const newLng = origin.lng + point.x * tileSize
  return L.latLng(newLat, newLng)
}

export default toWorld
