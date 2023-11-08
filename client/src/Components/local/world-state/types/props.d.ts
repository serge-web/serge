import React from 'react'
import { AnnotationIcons, ForceData, MapAnnotation, MapAnnotations, PlatformTypeData, RouteStore } from 'src/custom-types'
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
   * map annotations
   */
  infoMarkers: MapAnnotations
  /**
   * details of icons
   */
  markerIcons: AnnotationIcons
  /**
   * list of platform types. Use findPlatformForType() method to retrieve platform type
   */
  platforms: PlatformTypeData[]
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
  /**
   * force for this player
   */
  playerForce: ForceData['uniqid']
  /**
   * the title of the submit button
   */
  submitTitle?: string
  /**
   * the selected marker, or undefined
   */
  selectedMarker: MapAnnotation['uniqid'] | undefined
  /**
   * callback for asset selected
   */
  setSelectedAssetById?: { (id: string): void }
  /**
   * callback for asset selected
   */
  setSelectedMarkerById?: { (id: MapAnnotation['uniqid']): void }
  /**
  * callback for submit changes
  */
  submitForm?: { (): void }
  /**
   * which world state panel to display
   */
  panel: WorldStatePanels
  /**
   * handler to move asset to top level of this force
   */
  groupMoveToRoot?: { (uniqid: string): void }
  /**
    * handler to create new group for provided assets
    */
  groupCreateNewGroup?: { (dragged: string, target: string): void }
  /**
    * handler to host one platform on another
    */
  groupHostPlatform?: { (dragged: string, target: string): void }
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
  secondaryButtonCallback?: { (): void }

  playerRole?: string
}
