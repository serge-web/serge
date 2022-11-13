import { CellLabelStyle } from '@serge/config'

export interface TileLayerDefinition {
  url: string,
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
  bounds: [[number, number], [number, number]],
  /** 
   * h3 resolution to use
   */
  h3res?: number,
  /** 
   * the strategy to use for the cell labels 
   * Note: we allow string so that we can read
   * in JSON data
   */
  cellLabelsStyle?: CellLabelStyle | string
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
  /**
   * Json data url to load atlantic cells data
   * Should refer to file in packages/data folder, 
   * in the form: cells/atlantic-cells-6k.json
   * App will prepend server path
   */
  gridCellsURL?: string
  /**
   * Json data url to load atlantic polygon 
   * outlines for areas of cells, used to reduce
   * Leaflet rendering.
   * Should refer to file in packages/data folder, 
   * in the form: cells/atlantic-polygons.json
   * App will prepend server path
   */
   polygonAreasURL?: string
}