export default interface PropTypes {
  /**
   * The longlat value to the center of the map
   */
  position: Array<number>
  /**
   * The zoom level
   */
  zoom: number
  /**
   * The minumum zoom level
   */
  minZoom: number
  /**
   * The maximum zoome level
   */
  maxZoom: number
  /**
   * The incremental zoom steps from '+/-' controls
   */
  zoomDelta: number
  /**
   * The incremental zoom steps
   */
  zoomSnap: number
  /**
   * Allows drag on touch screens
   */
  touchZoom: boolean
  /**
   * Enable zoom controls
   */
  zoomControl: boolean
  /**
   * Allow attribution controls
   */
  attributionControl: boolean
  /**
   * Enable animation of zooming
   */
  zoomAnimation: boolean
  tileLayer: {
    /**
     * The url of the tile layer to use for the maps
     */
    url: string
    /**
     * The attribution copy for the map
     */
    attribution: string
  }

}
