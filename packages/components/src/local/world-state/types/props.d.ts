import { RouteStore } from '@serge/custom-types'

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
}
