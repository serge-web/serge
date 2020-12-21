import { Perception, PerceivedTypes } from '@serge/custom-types'

/** provide classnames for an asset, as perceived by current player
 * @param {string} myForce force of current player
 * @param {string} theirName name of selected asset
 * @param {string} theirContactID contactID of selected asset (used when no perceived name)
 * @param {string} theirForce force for selected asset
 * @param {string} theirType platform-type of selected asset
 * @param {Perception[]} theirPerceptions list of force perceptions of selected asset
 * @param {boolean} playerIsUmpire whether the current player is an umpire
 * @returns {string, string, string} name-class, force-class, type-class
 */
export default function findPerceivedAsTypes (
  myForce: string,
  theirName: string,
  theirContactID: string,
  theirForce: string,
  theirType: string,
  theirPerceptions: Perception[],
  userIsUmpire: boolean
): PerceivedTypes | null {
  let tmpPerception: any
  if (myForce.toLowerCase() === theirForce.toLowerCase() || userIsUmpire) {
    // just use the real value
    tmpPerception = { name: theirName, force: theirForce, type: theirType }
  } else {
    if (theirPerceptions && Array.isArray(theirPerceptions)) {
      // use the perceived values
      tmpPerception = theirPerceptions.find(p => p.by.toLowerCase() === myForce.toLowerCase()) || null
    } else {
      tmpPerception = null
    }
  }
  if (tmpPerception) {
    const nameClass: string = tmpPerception.name ? tmpPerception.name : theirContactID
    const forceClass: string = tmpPerception.force ? tmpPerception.force.replace(/ /g, '-').toLowerCase() : 'unknown'
    const typeClass: string = tmpPerception.type ? tmpPerception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    return { name: nameClass, force: forceClass, type: typeClass }
  } else {
    return null
  }
}
