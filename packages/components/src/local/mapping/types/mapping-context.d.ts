import { Phase } from '@serge/config'
import SergeHex from './serge-hex'
import SergeGrid from './serge-grid'
import { LatLng } from 'react-leaflet'


interface SelectedAsset {
  id: string;
  position: number[];
  type: string;
  force: string;
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

