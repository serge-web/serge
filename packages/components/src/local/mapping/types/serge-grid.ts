import L from 'leaflet'
import { HexFactory, Grid } from 'honeycomb-grid'
import SergeHex from './serge-hex'

export default interface SergeGrid<T> extends Grid<SergeHex<HexFactory<T>>> {
  origin: L.LatLng
  tileDiameterDegs: number
}