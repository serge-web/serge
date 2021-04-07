import L from 'leaflet'
import { Hex, HexFactory } from 'honeycomb-grid'
import { Terrain } from '@serge/config'

export default interface SergeHex<T> extends Hex<HexFactory<T>> {
  centreLatLng: L.LatLng
  name: string
  type: string
  terrain: Terrain
  fillColor?: string
  x: number
  y: number
  poly: L.LatLng[]
}
