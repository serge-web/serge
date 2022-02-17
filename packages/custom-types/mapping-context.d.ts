import { Phase, Domain, CellLabelStyle } from '@serge/config'
import PlanMobileAsset from './plan-mobile-asset'
import SelectedAsset from './selected-asset'
import { RouteStore, PlanTurnFormValues, MapPostBack, NewTurnValues, ForceData, PlatformTypeData, SergeGrid3 } from '.'

/**
 * mapping context, shared with child elements
 */
export default interface MappingContext {
  /**
   * grid of cells, used for movement
   */
  h3gridCells: SergeGrid3
  /**
   * list of forces within this wargame
   */
  forces: ForceData[]
  /**
   * @deprecated list of platforms within this wargame
   */
  platforms: PlatformTypeData[]
  /**
   * object of platforms within this wargame by Asset.platformType keys
   */
   platformTypesByKey: { [property: string]: PlatformTypeData }
  /**
   * force for current player
   */
  playerForce: string
  /** 
   * if the current player can submit orders
   */
  canSubmitOrders: boolean
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
  /**
   *  setter, to modify the currently selected asset (or to clear it)
   **/
  setSelectedAsset: {(asset: SelectedAsset): void}
  /** 
   * the current map bounds
   */
  viewport: L.LatLngBounds | undefined
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
   * domain for this wargame 
   */
  domain: Domain
  /**
   * series of polygon areas, to be shaded
   */
  polygonAreas?: any
  /** how to format the cell labels */
  cellLabelStyle?: CellLabelStyle
}
