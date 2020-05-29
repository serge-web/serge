import { Phase } from '@serge/config'
import { PlanMobileAsset, Postback } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * A boolean to determine if the MapBar component should be displayed (default: true)
   */
  mapBar?: boolean
  /**
   * The bounds of the map iamge
   */
  bounds: {
    imageTop: number
    imageLeft: number
    imageRight: number
    imageBottom: number
  }
  /**
   * diameter of tiles in use
   */
  tileDiameterMins: number
  /** forces for this wargame
   *
   */
  forces: any
  /** platforms for this wargame
   *
   */
  platforms: any
  /** current player's force
   *
  */
  playerForce: string
  /** current player's force
   *
  */
  phase: Phase
  /** number of current turn
   * 
   */
  turn: number
  /**
   *  The TileLayer object for the leaflet map
   */
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
  /**
   * The zoom level
   * @default 10
   */
  zoom?: number
  /**
   * The minumum zoom level
   * @default 8
   */
  minZoom?: number
  /**
   * The maximum zoom level
   * @default 12
   */
  maxZoom?: number
  /**
   * The incremental zoom steps from '+/-' controls
   * @default 0.25
   */
  zoomDelta?: number
  /**
   * The incremental zoom steps
   * @default 0.25
   */
  zoomSnap?: number
  /**
   * Allows drag on touch screens
   * @default true
   */
  touchZoom?: boolean
  /**
   * Enable zoom controls
   * @default false
   */
  zoomControl?: boolean
  /**
   * Allow attribution controls
   * @default false
   */
  attributionControl?: boolean
  /**
   * Enable animation of zooming
   * @default false
   */
  zoomAnimation?: boolean
  /**
   * planning constraints for this asset
   */
  planningConstraintsProp?: PlanMobileAsset
  /**
   * distance to travel
   */
  planningRangeProp?: number
  /**
   * The channel ID passed down from the client application (optional)
   */
  channelID?: string | number
  /**
   * The method for posting messages out of the mapping component
   */
  postBack?: Postback
}
