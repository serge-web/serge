import { Perception } from '@serge/custom-types'

/** set of descriptors for how a force is styled */
export interface ForceStyle {
  /** name of this force */
  force: string
  color: string
  cssClass?: string
 }

/** Find how a force perceives this asset
 * @param {Perception[]} perceptions how an asset is perceived
 * @param {string} playerForceName the force for the current player
 * @param {Array<{force: string, color: string}>} forceColors couplets of force & color to use for that color
 * @param {ForceStyle} undefinedColor the color to use for non-perceived types
 * @return {string | undefined} color shade to use, or undefined if asset isn't visible
 */
const isPerceivedBy = (perceptions: Perception[], playerForceName: string,
  forceColors: Array<ForceStyle>, undefinedColor: ForceStyle): ForceStyle | undefined => {
  if (perceptions) {
    if (Array.isArray(perceptions)) {
      const p: Perception | undefined = perceptions.find((p:Perception) => p.by.toLowerCase() === playerForceName.toLowerCase())
      if (p) {
        // do we know force?
        const { force } = p
        if (force) {
          const color = forceColors.find((f:{force: string, color: string}) => f.force.toLowerCase() === force.toLowerCase())
          if (color) {
            return color
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
