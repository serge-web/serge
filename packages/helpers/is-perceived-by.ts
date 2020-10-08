import { upperFirst } from 'lodash'

/** Find how a force perceives this asset
 * @param {any} perceptions how an asset is perceived
 * @param {string} playerForce the force for the current player
 * @param {Array<{force: string, color: string}>} forceColors couplets of force & color to use for that color
 * @return {string | undefined} color shade to use, or undefined if asset isn't visible
 */
const isPerceivedBy = (perceptions: any, playerForce: string, 
  forceColors: Array<{force: string, color: string}>): string | undefined => {
  if(perceptions) {
    if(Array.isArray(perceptions)) {
      const p = perceptions.find((p:any) => p.by.toLowerCase() === playerForce.toLowerCase())
      if(p) {
        // do we know force?
        if(p.force) {
          const color = forceColors.find((f:any) => f.force.toLowerCase() === p.force.toLowerCase())
          if(color) {
            return color.color
          } else {
            // force color not know, so probably 'unknown'. Return unknown shade
            return undefined
          }
        } else {
          return undefined
        }
      } else {
        return undefined
      }  
    } else {
      // legacy way of representing perceptions, as a dictionary
      const upperForce = upperFirst(playerForce)
      const perception = perceptions[upperForce]
      if(perception) {
        const force = forceColors.find((f:any) => f.force.toLowerCase() === playerForce.toLowerCase())
        return (force && force.color) || undefined
      } else {
        return undefined
      }
    }
  }
  return undefined
}

export default isPerceivedBy
