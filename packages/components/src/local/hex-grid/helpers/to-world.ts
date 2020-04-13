import L from 'leaflet'

/** convert this point in cell coordinates to lat/long */
const toWorld = (point: any, origin: L.LatLng, tileSize: number) => {
    const newLat = origin.lat - point.x * tileSize
    const newLng = origin.lng + point.y * tileSize
    return L.latLng(newLat, newLng)
}

export default toWorld;
