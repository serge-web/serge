import { Phase } from '@serge/config'
import SergeHex from './serge-hex'
import SergeGrid from './serge-grid'
import PlanMobileAsset from './plan-mobile-asset'
import SelectedAsset from './selected-asset'
import { RouteStore, PlanTurnFormValues, Postback, NewTurnValues } from '@serge/custom-types'

/**
 * mapping context, shared with child elements
 */
export default interface MappingContext {
  /**
   * grid of cells, used for movement
   */
  gridCells: SergeGrid<SergeHex<{}>> | undefined
  /**
   * list of forces within this wargame
   */
  forces: any
  /**
   * list of platforms within this wargame
   */
  platforms: any
  /**
   * force for current player
   */
  playerForce: string
  /** 
   * force to view the map as
   */
  viewAsForce: string | undefined
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
   *  how far platform can travel
   */
  planningRange: number | undefined
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
  setSelectedAsset: React.Dispatch<React.SetStateAction<SelectedAsset | undefined>>
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
  turnPlanned?: {(turn: PlanTurnFormValues): void}
  /**
   * handler to clear current route from specified number
   */
  clearFromTurn?: {(turn: number): void}
  /**
   * The method for posting messages out of the mapping component
   */
  postBack?: Postback
}
