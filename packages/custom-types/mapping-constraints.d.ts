import { Domain } from '@serge/config'

export interface LocalTileLayer {
  url: string,
  attribution: string
}

/**
 * specification of hex grid & mapping backdrop details
 */
export default interface MappingConstraints {
  /** bounding rectangle */
  bounds: number[][]
  /**
   * diameter of tiles in use (nautical miles)
   */
  tileDiameterMins: number,
  /**
   * definition of tiled backdrop
   */
  tileLayer?: LocalTileLayer
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
   * target dataset
   * // TODO: remove this, make generic
   */
  targetDataset: Domain
}