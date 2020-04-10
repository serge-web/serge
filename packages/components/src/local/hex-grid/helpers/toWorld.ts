import L from 'leaflet'

/** convert this point in cell coordinates to lat/long */
const toWorld = (point: any, origin: any, tileSize: number) => {
    return L.latLng(origin.lat - point.x * tileSize, origin.lng + point.y * tileSize)
}

export default toWorld