import L from 'leaflet'
import { Phase } from 'src/config'
import { ForceData, PlanMobileAsset, PlatformTypeData, MapPostBack, MappingConstraints, MapAnnotations, ChannelMapping, AnnotationIcons, Role, GameTurnLength } from 'src/custom-types'
import React from 'react'
import { DeclutterData } from 'src/Helpers'

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
  /**
   * information markers
   */
  infoMarkers: MapAnnotations
  /**
   * icons to use for info markers
   */
  markerIcons: AnnotationIcons
  /**
   *  platforms for this wargame.
   * use `findPlatformTypeFor` method to retrieve platform type
   */
  platforms: PlatformTypeData[]
  /** current player's force (force-id)
   *
   */
  playerForce: ForceData['uniqid']
  /** current player's role (role-id)
   *
   */
  playerRole?: Role['roleId']
  /**
   * if the current player is game control - and if they can
   * add information markers
   */
  isGameControl: boolean
  /** if the current player is from an umpire force
   *
   */
  isUmpire: boolean
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
  /** details of the channel (used to determine
   * whco can provide plans)
   */
  channel?: ChannelMapping
  /**
   * The method for posting messages out of the mapping component
   */
  mapPostBack?: MapPostBack
  /**
   * Optional mapping structure with children component
   */
  children?: React.ReactElement
  /**
   * length of each game turn (millis or struct)
   */
  gameTurnTime: GameTurnLength
  /** we need to be able to override the fetch
   * API call when running from StoryBook
   */
  fetchOverride?: { (url: string): any }
  /** declutter method to use. This allows us to
   * disable for testing
   */
  declutter?: { (data: DeclutterData, diamMins: number): DeclutterData }
}
