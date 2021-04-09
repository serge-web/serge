import { Domain } from '@serge/config'

export interface TileLayerDefinition {
  url: string,
  attribution: string
}

/**
 * specification of hex grid & mapping backdrop details
 */
export default interface MappingConstraints {
  /** 
   * bounding rectangle 
   */
  bounds: [[number, number], [number, number]],
  /**
   * diameter of tiles in use (nautical miles)
   */
  tileDiameterMins: number,
  /**
   * definition of tiled backdrop
   */
  tileLayer?: TileLayerDefinition
  /** 
   * url of tile descriptions
   */
  tileDataFile?: string
  /** 
   * min zoom to display hexes 
   */
  minZoomHexes: number
  /** 
   * min zoom level to allow
   */
  minZoom: number
  /**
   * The maximum zoom level
   */
  maxZoom?: number
  /** the maximum zoom present for tiles, after this
   * they will be scaled
   */
  maxNativeZoom: number
  /**
   * target dataset
   * // TODO: remove this, make generic
   */
  targetDataset: Domain
}