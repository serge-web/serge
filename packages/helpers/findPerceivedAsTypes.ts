/** provide classnames for an asset, as perceived by current player
 * @param {string} myForce force of current player
 * @param {string} hisForce force for selected asset
 * @param {string} hisType platform-type of selected asset
 * @param {any} hisPerceptions list of force perceptions of selected asset
 * @param {boolean} playerIsUmpire whether the current player is an umpire
 * @returns {string, string} pair of class-names, used to describe force and platform-type 
 */

 export default function findPerceivedAsTypes (myForce: string, hisForce:string, hisType:string,
  hisPerceptions: [any], userIsUmpire: boolean): [string, string] {
  let perception: any
  if (myForce === hisForce || userIsUmpire) {
    // just use the real value
    perception = { force: hisForce, type: hisType }
  } else {
    if (hisPerceptions) {
      // use the perceived values
      const hisPerception: any = hisPerceptions.find(p => p.by === myForce)
      if (hisPerception != null) {
        perception = { force: hisPerception.force, type: hisPerception.type }
      } else {
        perception = null
      }
    } else {
      perception = null
    }
  }
  if (perception) {
    const forceClass: string = perception.force ? perception.force.toLowerCase() : 'unknown'
    const typeClass: string = perception.type ? perception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    return [forceClass, typeClass]
  } else {
    return perception
  }
}
