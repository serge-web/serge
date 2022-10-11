import L from 'leaflet'

export const MapConstants = {
  TileLayer: {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }
}

export const ArrowHeadPattern = {
  offset: '100',
  repeat: '100',
  symbol: L.Symbol.arrowHead({
    pixelSize: 15,
    polygon: false,
    pathOptions: { stroke: true }
  })
}
