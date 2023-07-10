import { ForceData, Perception } from 'src/custom-types'

/** set of descriptors for how a force is styled */
export interface ForceStyle {
  /** note: forceId can be undefined in the case when
   * we're providing the styling for the 'unknown' force
   */
  forceId?: ForceData['uniqid']
  /** name of this force */
  force: string
  color: string
 }

/** Find how a force perceives this asset
 * @param {Perception[]} perceptions how an asset is perceived
 * @param {ForceData['uniqid']} playerForceId the force for the current player
 * @param {Array<ForceStyle>} forceColors couplets of force & color to use for that color
 * @param {ForceStyle} undefinedColor the styling to use for non-perceived types
 * @return {string | undefined} color shade to use, or undefined if asset isn't visible
 */
const isPerceivedBy = (perceptions: Perception[], playerForceId: ForceData['uniqid'],
  forceColors: Array<ForceStyle>, undefinedColor: ForceStyle): ForceStyle | undefined => {
  if (perceptions) {
    if (Array.isArray(perceptions)) {
      const p: Perception | undefined = perceptions.find((p:Perception) => p.by === playerForceId)
      if (p) {
        // do we know force?
        const { force } = p
        if (force) {
          const color = forceColors.find((f:ForceStyle) => f.forceId === force)
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
