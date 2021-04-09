import L from 'leaflet'
import { HexFactory, Grid, PointLike } from 'honeycomb-grid'
import SergeHex from './serge-hex'

export default interface SergeGrid<T> extends Grid<SergeHex<HexFactory<T>>> {
  /**
   * world coords of top-left of map
   */
  origin?: L.LatLng
  /**
   * size of a hex cell (minutes)
   */
  tileDiameterMins: number
  /**
   * offset from centre of hex to top-left corner
   */
  centerOffset?: L.Point
  /**
   * convert world coords to hex coords
   */
  toScreen (point: L.LatLng): PointLike
  /**
   * get the cell at the world location
   */
  cellFor (point: L.LatLng, origin?:SergeHex<{}>): SergeHex<{}> | undefined
}
