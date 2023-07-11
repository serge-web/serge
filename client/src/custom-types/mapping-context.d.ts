import { CellLabelStyle, Phase } from 'src/config'
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { Asset, ForceData, MapPostBack, NewTurnValues, PlanTurnFormValues, PlatformTypeData, Role, RouteStore, SergeGrid3 } from '.'
import { AnnotationIcons, MapAnnotation, MapAnnotations } from './map-annotation'
import PlanMobileAsset from './plan-mobile-asset'
import SelectedAsset from './selected-asset'

/**
 * mapping context, shared with child elements
 */
export default interface MappingContext {
  /**
   * grid of cells, used for movement
   */
  h3gridCells: SergeGrid3
  /**
   * H3 grid resolution in use
   */
  h3Resolution: number
  /**
   * list of forces within this wargame
   */
  forces: ForceData[]
  /**
   * list of platforms within this wargame.
   * Don't deprecate. Use `findPlatformByType` method to retrieve value
   */
  platforms: PlatformTypeData[]
  /**
   * force for current player
   */
  playerForce: ForceData['uniqid']
  /** whether current role is game-contrl
   * (and able to edit info markers)
   */
  isGameControl: Role['isGameControl']
  /** whether map is being viewed as umpire
   * (force with umpire flag set to true)
   */
  viewAsUmpire: boolean
  /**
   * phase of current game
   */
  phase: Phase
  /**
   * Current game turn number
   */
  turnNumber: number
  /**
   * mobility for selected asset
   */
  planningConstraints: PlanMobileAsset | undefined
  /**
   * state for if map bar is open
   */
  showMapBar: boolean
  /**
   * The channel ID passed down from the client application (optional)
   */
  channelID?: string | number
  /**
   * the set of routes applicable at this point
   */
  routeStore: RouteStore
  /** 
   * allow route store to be updated 
   */
  setRouteStore: {(store: RouteStore): void}
  /**
   * the modified set of routes to support "view as"
   */
  viewAsRouteStore: RouteStore   
  /**
   * setter for when planned route is complete
   */
  setNewLeg: React.Dispatch<React.SetStateAction<NewTurnValues | undefined>> | undefined
  /**
   *  setter, to modify if map bar is open or not
   */
  setShowMapBar: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * state for which form should appear in the map bar
   */
  selectedAsset: SelectedAsset | undefined
  /** which marker is selected
   * 
   */
  selectedMarker: MapAnnotation['uniqid'] | undefined
  /**
   *  setter, to modify the currently selected asset (or to clear it)
   **/
  updateMarker?: {(event: string, marker: MapAnnotation): void}
  /**
   *  handler for an asset being moved in laydown phase
   **/
  assetLaydown?: {(cell: string, uniqid: Asset['uniqid']): void}
   /**
   *  setter, to modify the currently selected asset (or to clear it)
   **/
  setSelectedAsset: {(asset: SelectedAsset): void}
  /**
   *  setter, to modify the currently selected information marker
   **/
  setSelectedMarker: {(uniqid: MapAnnotation['uniqid']): void}
  /** clear the map selection (asset or marker)
   * 
   */
  clearMapSelection: {(): void}
   /** 
   * the current map bounds
   */
  viewport: L.LatLngBounds | undefined
  /** 
   * outer bounds for the map
   */
  mapBounds?: L.LatLngBounds
  /**
   *  state for zoom Level
   **/
  zoomLevel: number
  /**
   *  setter, to set the zoom level
   **/
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>
  /**
   * player has added new step
   */
  turnPlanned: {(turn: PlanTurnFormValues): void}
  /**
   * Cancel route planning
   */
  cancelRoutePlanning: {(): void}
  /**
   * handler to clear current route from specified number
   */
  clearFromTurn: {(turn: number): void}
  /**
   * pan the map to the specified cell
   */
  panTo?: {(cell: string): void}
  /**
   * The method for posting messages out of the mapping component
   */
  mapPostBack: MapPostBack
  /** 
   * flag for whether to hide planning form
   */
  hidePlanningForm: boolean
  /**
   *  setter to change value of whether planning form should be hidden
   **/
  setHidePlanningForm: React.Dispatch<React.SetStateAction<boolean>>
 /**
   * handler to move asset to top level
   */
  groupMoveToRoot: {(uniqid: string): void}
  /** 
   * handler to move assets into new group 
   * */
  groupCreateNewGroup: {(dragged: string, target: string): void}
 /**
   * handler to host one platform on another
   */
  groupHostPlatform: {(dragged: string, target: string): void}
  /**
   * if current set of plans (or SofW) have been submitted
   */
  plansSubmitted: boolean
  /** 
   * update whether plans have been submitted
   */
  setPlansSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * series of polygon areas, to be shaded
   */
  polygonAreas?: FeatureCollection<Geometry, GeoJsonProperties>
  /** how to format the cell labels */
  cellLabelStyle?: CellLabelStyle
  /**
   * information markers
   */
  infoMarkers: MapAnnotations
  /** 
   * icons for info markers
   */
  markerIcons: AnnotationIcons
  /** 
   * the leaflet map
   */
  map?: L.Map
}
