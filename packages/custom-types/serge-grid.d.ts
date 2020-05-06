import L from 'leaflet'
import { HexFactory, Grid, PointLike } from 'honeycomb-grid'
import SergeHex from './serge-hex'

export default interface SergeGrid<T> extends Grid<SergeHex<HexFactory<T>>> {
  /**
   * world coords of top-left of map
   */
  origin: L.LatLng
  /**
   * size of a hex cell (Degrees)
   */
  tileDiameterDegs: number
  /**
   * offset from centre of hex to top-left corner
   */
  centerOffset: L.Point
  /**
   * convert world coords to hex coords
   */
  toScreen (point: L.LatLng): PointLike
  /**
   * convert hex coord location to world coords
   * @param point {PointLike} to convert
   */
  toWorld (point: PointLike): L.LatLng
  /**
   * get the cell at the world location
   */
  cellFor (point: L.LatLng): SergeHex<{}> | undefined
}
