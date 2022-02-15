import { PlatformTypeData, RouteStore, SergeGrid, SergeHex } from '@serge/custom-types'
import { WorldStatePanels } from '../helpers/enums'

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
   * list of platform types
   */
  /**
   * @deprecated platformTypesByKey will allow more easy access. [platformType.name]: PlatformType
   */
  platforms: PlatformTypeData[]
  /**
   * platforms for this wargame
   */
  platformTypesByKey: { [property: string]: PlatformTypeData}
  /**
   * phase of the wargame
   */
  phase: string
  /** current turn number
   *
   */
  turnNumber: number
  /**
   * whether this is from umpire force
   */
  isUmpire: boolean
  /** whether this player can submit ordres
   *
   */
  canSubmitOrders: boolean
  /**
   * the title of the submit button
   */
  submitTitle?: string
  /**
   * callback for asset selected
   */
  setSelectedAssetById?: {(id: string): void}
  /**
   * callback for submit changes
   */
  submitForm?: {(): void}
  /**
   * which world state panel to display
   */
  panel: WorldStatePanels
  /**
   * grid of cells, used for movement
   */
  gridCells?: SergeGrid3
  /**
   * handler to move asset to top level of this force
   */
  groupMoveToRoot?: {(uniqid: string): void}
 /**
   * handler to create new group for provided assets
   */
  groupCreateNewGroup?: {(dragged: string, target: string): void}
 /**
   * handler to host one platform on another
   */
  groupHostPlatform?: {(dragged: string, target: string): void}
  /**
   * whether plans have been submitted
   */
  plansSubmitted: boolean
    /**
   * update whether plans have been submitted
   */
  setPlansSubmitted?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   *  label to show on secondary button
   */
  secondaryButtonLabel?: string
  /**
   * callback for secondary button
   */
  secondaryButtonCallback?: {(): void}
}
