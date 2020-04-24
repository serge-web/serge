import { Phase } from '@serge/config'
import SergeHex from './serge-hex'
import SergeGrid from './serge-grid'

interface SelectedAsset {
  /** 
   * unique id
   */ 
  id: string;
  /** 
   * current hex position of asset
   */
  position: number[];
  /**
   *  type of asset
   */
  type: string;
  /** 
   * force-id for asset
   */
  force: string;
  /**
   *  list of force-ids for who can control this asset
   */
  controlledBy: string[];
}

/** 
 * mapping context, shared with child elements
 */
export default interface MappingContext {
  /** 
   * grid of cells, used for movement
   */
  gridCells: SergeGrid<SergeHex<{}>>
  /**
   * list of forces within this wargame
   */
  forces: any
  /** 
   * force for current player
   */ 
  playerForce: string
  /**
   * phase of current game
   */
  phase: Phase
  /** 
   * state for if map bar is open 
   */
  showMapBar: boolean
  /**
   *  setter, to modify if map bar is open or not
   */
  setShowMapBar: React.Dispatch<React.SetStateAction<boolean>>
  /** 
   * state for which asset is currently selected
   */
  selectedAsset: SelectedAsset
  /**
   *  setter, to modify the currently selected asset
   **/
  setSelectedAsset: React.Dispatch<React.SetStateAction<SelectedAsset>>
}

