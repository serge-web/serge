import { RouteStore, SergeGrid, SergeHex } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The name of the thing
   */
  name: string
  /**
   * the set of routes currently being planned
   */
  store: RouteStore
  /**
   * phase of the wargame
   */
  phase: string
  /**
   * whether this is from umpire force
   */
  isUmpire: boolean
  /**
   * the title of the submit button
   */
  submitTitle?: string
  /**
   * callback for asset selected
   */
  setSelectedAsset?: {(id: string): void}
  /**
   * callback for submit changes
   */
  submitForm?: {(): void}
  /**
   * switch beetween Orders and  Other Visible Platforms
   */
  showOtherPlatforms?: boolean
  /**
   * grid of cells, used for movement
   */
  gridCells?: SergeGrid<SergeHex<{}>> | undefined
 /**
   * handler to clear current route from specified number
   */
  groupMoveToRoot?: {(uniqid: string): void}
}
