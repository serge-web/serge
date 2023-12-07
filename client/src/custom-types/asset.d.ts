import { LaydownTypes } from 'src/config'
import { AttributeValues, AttributeValues2, Perception, PlatformTypeData, Role, RouteStatus, RouteTurn } from '.'

export interface Asset {
  /**
   * the name of this asset
   */
  name: string
  /** when an asset is first identified, only the
   * contact id is shown.  Something like `C023`.
   */
  readonly contactId: string
  /** the uniq id of this asset, present to allow
   * assets to be renamed, or multiple assets of same
   * name present in game
   */
  readonly uniqid: string
  /** the owner of this asset. This is used to give 
   * control of the asset to a specific player
   */
  owner?: Role['roleId']
  /** the current position of an asset. It's optional,
   * since an asset may be carried by another
   */
  position?: string
  /** the geographic position of an asset.
   * If it's not present, but a `position` is, then
   * the location will be generated. Sequence is `Lat, Long`
   */
  location?: [number, number]
  /** how other forces perceive this asset
   */
  perceptions: Array<Perception>
  /** where this platform has already been
   */
  history?: Array<RouteTurn>
  /** the set of planned turns for this asset
   */
  plannedTurns?: Array<RouteTurn>
  /** the current condition of this asset
   */
  condition: string
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
  /** attributes for this asset, using the streamlined notation
   */
  attributes?: AttributeValues2
   /** health of this asset. 0-100, with 0 treated as destroyed */
  health?: number
}

export default Asset
