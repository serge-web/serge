export interface TileLayerDefinition {
  url: string
  attribution: string
  /** highest zoom level present in the data 
   * this is optional, since legacy
   * games used the maxzoom level
   * in the mapping constraints
  */
  maxNativeZoom: number
}

/**
 * specification of hex grid & mapping backdrop details
 */
export default interface MappingConstraints {
  /** 
   * bounding rectangle for the tile data [lat, lng]
   */
  bounds: [[number, number], [number, number]]
  /**
   * definition of tiled backdrop
   */
  tileLayer?: TileLayerDefinition
  /** 
   * min zoom level to allow
   */
  minZoom: number
  /**
   * The maximum zoom level
   */
  maxZoom?: number
}
