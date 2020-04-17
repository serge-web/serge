import L, { LatLng } from 'leaflet'

/** convert this point in cell coordinates to lat/long */
const toWorld = (point: any, origin: L.LatLng, tileSize: number): LatLng => {
  const newLat = origin.lat - point.y * tileSize
  const newLng = origin.lng + point.x * tileSize
  return L.latLng(newLat, newLng)
}

export default toWorld
