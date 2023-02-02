import { TextPathOptions } from 'leaflet'

export const MapConstants = {
  TileLayer: {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxNativeZoom: 17
  }
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
