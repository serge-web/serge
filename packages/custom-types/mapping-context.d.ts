import { Phase } from '@serge/config'
import SergeHex from './serge-hex'
import SergeGrid from './serge-grid'
import PlanMobileAsset from './plan-mobile-asset'
import SelectedAsset from './selected-asset'
import { PerceptionFormData, PlanTurnFormData, AdjudicateTurnFormData } from './forms'

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
   * phase of current game
   */
  phase: Phase
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
   * setter for when planned route is complete
   */
  setNewLeg: React.Dispatch<React.SetStateAction<Array<SergeHex<{}>> | undefined>>
  /**
   *  setter, to modify if map bar is open or not
   */
  setShowMapBar: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * state for which form should appear in the map bar
   */
  selectedAsset: SelectedAsset
  /**
   *  setter, to modify the currently selected asset
   **/
  setSelectedAsset: React.Dispatch<React.SetStateAction<SelectedAsset>>
  /**
   *  state for zoom Level
   **/
  zoomLevel: number
  /**
   *  setter, to set the zoom level
   **/
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>
  /**
   * The method for posting messages out of the mapping component
   */
  postBack?: {(messageType:string, payload: any): void}
}
