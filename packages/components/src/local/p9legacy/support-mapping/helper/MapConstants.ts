import { Pattern, Symbol, TextPathOptions } from 'leaflet'

export const MapConstants = {
  TileLayer: {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxNativeZoom: 17
  }
}

export const ArrowHeadPattern: Pattern = {
  offset: '100',
  repeat: '100',
  symbol: Symbol.arrowHead({
    pixelSize: 15,
    polygon: false,
    pathOptions: { stroke: true }
  })
}

export const LeafletTextOption: TextPathOptions = {
  repeat: false,
  center: true,
  below: false,
  offset: -10,
  attributes: {
    'font-size': '15'
  }
}
