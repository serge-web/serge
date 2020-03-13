import L from 'leaflet'

/** convert this lat/long to Hex coordinates */
const toHex = (point: L.LatLng, origin: L.LatLng, delta: number): L.Point => {
  const latVal = (origin.lat - point.lat) / delta
  const lngVal = (point.lng - origin.lng) / delta
  return L.point(latVal, lngVal)
}

export default toHex
