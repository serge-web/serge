import L from 'leaflet'
import { Hex, HexFactory } from 'honeycomb-grid'

export default interface SergeHex<T> extends Hex<HexFactory<T>> {
  centre: L.LatLng
  name: string
}