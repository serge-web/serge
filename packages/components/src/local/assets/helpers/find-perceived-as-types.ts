/** provide classnames for an asset, as perceived by current player
 * @param {string} myForce force of current player
 * @param {string} theirName name of selected asset
 * @param {string} theirContactID contactID of selected asset (used when no perceived name)
 * @param {string} theirForce force for selected asset
 * @param {string} theirType platform-type of selected asset
 * @param {any} theirPerceptions list of force perceptions of selected asset
 * @param {boolean} playerIsUmpire whether the current player is an umpire
 * @returns {string, string} pair of class-names, used to describe force and platform-type
 */

export default function findPerceivedAsTypes (
  myForce: string,
  theirName: string,
  theirContactID: string,
  theirForce: string,
  theirType: string,
  theirPerceptions: [any],
  userIsUmpire: boolean
): [string, string, string] {
  let perception: any
  if (myForce === theirForce || userIsUmpire) {
    // just use the real value
    perception = { name: theirName, force: theirForce, type: theirType }
  } else {
    if (theirPerceptions) {
      // use the perceived values
      perception = theirPerceptions.find(p => p.by === myForce) || null
    } else {
      perception = null
    }
  }
  if (perception) {
    const forceName: string = perception.name ?  perception.name : theirContactID
    const forceClass: string = perception.force ? perception.force.replace(/ /g, '-').toLowerCase() : 'unknown'
    const typeClass: string = perception.type ? perception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    return [forceName, forceClass, typeClass]
  } else {
    return perception
  }
}
