import L from 'leaflet'

/** convert this point in cell coordinates to lat/long */
const toWorld = (point: any, origin: number[], tileSize: number): L.LatLng => {
  const [origLat, origLng] = origin
  return L.latLng(origLat - point.x * tileSize, origLng + point.y * tileSize)
}

export default toWorld;
