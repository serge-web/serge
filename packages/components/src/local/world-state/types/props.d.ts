import { PlatformTypeData, RouteStore } from '@serge/custom-types'
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
   * list of platform types. Use findPlatformForType() method to retrieve platform type
   */
  platforms: PlatformTypeData[]
  /**
   * platforms for this wargame
   * @deprecated  - since it relies on fragile platformType-name field
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
