import { Phase } from '@serge/config'
import { ForceData, PlanMobileAsset, PlatformTypeData, MapPostBack, MappingConstraints } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * A boolean to determine if the MapBar component should be displayed (default: true)
   */
  mapBar?: boolean
  /** description of the mapping
   *
   */
  mappingConstraints: MappingConstraints
  /** forces for this wargame
   *
   */
  forces: ForceData[]
  /** platforms for this wargame
   *
   */
  /**
   * @deprecated platformTypesByKey will allow more easy access. [platformType.name]: PlatformType
   */
  platforms: PlatformTypeData[]
  /**
   * platforms for this wargame
   */
  platformTypesByKey: { [property: string]: PlatformTypeData}
  /** current player's force (force-id)
   *
  */
  playerForce: string
  /**
   * if the current player can submit orders
   */
  canSubmitOrders: boolean
  /** current phase of game
   *
  */
  phase: Phase
  /** number of current turn
   *
   */
  turnNumber: number
  /**
   * whether this wargame has been initiated
   */
  wargameInitiated: boolean
  /**
   * the initial viewport
   */
  initialViewport?: L.LatLngBounds
  /**
   * The zoom level
   * @default 10
   */
  zoom?: number
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
  mapPostBack?: MapPostBack
  /**
   * Optional mapping structure with children component
   */
  children?: JSX.Element
  /**
   * length of each game turn (millis)
   */
  gameTurnTime: number
  /** we need to be able to override the fetch
   * API call when running from StoryBook
   */
  fetchOverride? : {(url: string): any}
}
