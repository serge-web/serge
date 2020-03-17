import L, { LatLng } from 'leaflet'

/** calculate the position from the supplied offset */
const cellIndexToRelativeDegrees = (origin: LatLng, point: any, delta: any): any => {
  return L.latLng(origin.lat - point.x * delta, origin.lng + point.y * delta)
}

export default cellIndexToRelativeDegrees
