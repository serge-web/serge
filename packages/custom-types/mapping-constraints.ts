import L from 'leaflet'

export interface LocalTileLayer {
  url: string,
  attribution: string
}

/**
 * specification of hex grid & mapping backdrop details
 */
export default interface MappingConstraints {
  /** bounding rectangle */
  bounds: {
    imageTop: number
    imageLeft: number
    imageRight: number
    imageBottom: number
  }
  /**
   * diameter of tiles in use
   */
  tileDiameterMins: number,
  /**
   * definition of tiled backdrop
   */
  tileLayer: LocalTileLayer
  /** 
   * url of tile descriptions
   */
  tileDataFile?: string
}