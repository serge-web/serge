import { Perception } from '@serge/custom-types'

/** Find how a force perceives this asset
 * @param {Perception[]} perceptions how an asset is perceived
 * @param {string} playerForce the force for the current player
 * @param {Array<{force: string, color: string}>} forceColors couplets of force & color to use for that color
 * @param {string} undefinedColor the color to use for non-perceived types
 * @return {string | undefined} color shade to use, or undefined if asset isn't visible
 */
const isPerceivedBy = (perceptions: Perception[], playerForce: string, 
  forceColors: Array<{force: string, color: string}>, undefinedColor: string): string | undefined => {
  if(perceptions) {
    if(Array.isArray(perceptions)) {
      const p: Perception | undefined = perceptions.find((p:Perception) => p.by.toLowerCase() === playerForce.toLowerCase())
      if(p) {
        // do we know force?
        if(p.force) {
          const color = forceColors.find((f:{force: string, color: string}) => f.force.toLowerCase() === p.force.toLowerCase())
          if(color) {
            return color.color
          } else {
            // force color not known, so probably 'unknown'. Return unknown shade
            return undefinedColor
          }
        } else {
          // perceive it, but don't know force
          return undefinedColor
        }
      } else {
        // not perceived
        return undefined
      }  
    } else {
      // legacy way of representing perceptions, as a dictionary
      console.warn("Have encountered perception in legacy format. Can't handle it")
      return undefined
    }
  }
  return undefined
}

export default isPerceivedBy
