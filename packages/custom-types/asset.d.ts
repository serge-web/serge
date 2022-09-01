import { AttributeValues, Perception, PlatformTypeData, RouteStatus, RouteTurn } from '.'
import { LaydownTypes } from '@serge/config'
export interface Asset {
  /**
   * the name of this asset
   */
  name: string,
  /** when an asset is first identified, only the
   * contact id is shown.  Something like `C023`.
   */
  readonly contactId: string,
  /** the uniq id of this asset, present to allow
   * assets to be renamed, or multiple assets of same
   * name present in game
   */
  readonly uniqid: string,
  /** the current position of an asset. It's optional,
   * since an asset may be carried by another
   */
  position?: string,
  /** how other forces perceive this asset
   */
  perceptions: Array<Perception>,
  /** where this platform has already been
   */
  history?: Array<RouteTurn>,
  /** the set of planned turns for this asset
   */
  plannedTurns?: Array<RouteTurn>,
  /** the current condition of this asset
   */
  condition: string,
  /** 
   * the type-id of this platform 
   */
  platformTypeId: PlatformTypeData['uniqid']
  /** if the player is allowed to change the position of this asset
   * during turn-zero of a wargame
   * note: we allow string so it can be set in JSON
   */
  locationPending?: LaydownTypes | 'Force laydown' | 'Umpire laydown' 
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
  status?: RouteStatus
  /** attributes for this asset 
   */
  attributeValues?: AttributeValues
}

export default Asset
