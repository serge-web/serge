import { Perception, PlannedTurn, PlannedTurnStatus } from '@serge/custom-types'

export interface Asset {
  /**
   * the name of this asset
   */
  name: string,
  /** when an asset is first identified, only the 
   * contact id is shown.  Something like `C023`.
   */
  contactId: string,
  /** the uniq id of this asset, present to allow
   * assets to be renamed, or multiple assets of same 
   * name present in game
   */
  uniqid: string,
  /** the current position of an asset. It's optional,
   * since an asset may be carried by another
   */
  position?: string,
  /** how other forces perceive this asset
   */
  perceptions: Array<Perception>,
  /** where this platform has already been
   */
  history?: Array<PlannedTurn>,
  /** the set of planned turns for this asset
   */
  plannedTurns?: Array<PlannedTurn>,
  /** the current condition of this asset
   */
  condition: string,
  /** the type of this platform
   */
  platformType: string,
  /** if the player is allowed to change the position of this asset
   * during turn-zero of a wargame
   */
  locationPending?: boolean
  /** whether this asset has been destroyoed
   * //TODO: move away from this, use condition
   */
  destroyed?: boolean
  /** if this asset is actually an organisational group
   * of assets
   */
  comprising?: Array<Asset>
  /** if this asset is carrying other assets
   */
  hosting?: Array<Asset>
  /** current status of this asset 
   * 
  */
  status?: PlannedTurnStatus
}

export default Asset
