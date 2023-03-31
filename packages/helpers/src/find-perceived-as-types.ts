import { UMPIRE_FORCE, UMPIRE_FORCE_NAME, UNKNOWN_TYPE } from '@serge/config'
import { Perception, PerceivedTypes, PlatformTypeData, ForceData } from '@serge/custom-types'

/** provide classnames for an asset, as perceived by current player
 * // TODO: switch from force name to force id, for both "my" and "their"
 * @param {string} myForceId force id of current player
 * @param {string} theirName name of selected asset
 * @param {boolean} visibleToPlayerForce whether this asset is visible to player force
 * @param {string} theirContactID contactID of selected asset (used when no perceived name)
 * @param {string} theirForce force for selected asset
 * @param {string} theirTypeId platform-type of selected asset
 * @param {Perception[]} theirPerceptions list of force perceptions of selected asset
 * @returns {PerceivedTypes | null } perceived types, if subject can see it, otherwise null
 */
export default function findPerceivedAsTypes (
  myForceId: ForceData['uniqid'],
  theirName: string,
  visibleToPlayerForce: boolean,
  theirContactID: string,
  theirForceId: ForceData['uniqid'],
  theirTypeId: PlatformTypeData['uniqid'],
  theirPerceptions: Perception[]
): PerceivedTypes | null {
  let tmpPerception: Perception | null
  if (myForceId === theirForceId || visibleToPlayerForce || myForceId === UMPIRE_FORCE || myForceId === UMPIRE_FORCE_NAME) {
    // just use the real values
    tmpPerception = { name: theirName, force: theirForceId, typeId: theirTypeId, by: myForceId }
  } else {
    // use the perceived values
    tmpPerception = theirPerceptions.find(p => p.by === myForceId) || null
  }
  if (tmpPerception) {
    const nameClass: string = tmpPerception.name || theirContactID
    // workaround. We have some test data that still stores typeId in type
    const typeId = tmpPerception.typeId || UNKNOWN_TYPE
    const forceId = tmpPerception.force || UNKNOWN_TYPE
    return { name: nameClass, typeId: typeId, forceId: forceId }
  } else {
    return null
  }
}
