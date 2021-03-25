import L from 'leaflet'
import { Hex, HexFactory } from 'honeycomb-grid'

export default interface SergeHex<T> extends Hex<HexFactory<T>> {
  centreLatLng: L.LatLng
  name: string
  type: string
  fillColor?: string
  x: number
  y: number
  poly: L.LatLng[]
}
