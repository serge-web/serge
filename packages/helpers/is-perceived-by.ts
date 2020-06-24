/**
 * @param {any} perceptions how an asset is perceived
 * @param {string} playerForce the force for the current player
 * @param {Array<{force: string, color: string}>} forceColors couplets of force & color to use for that color
 * @param {string} undefinedColor the shade to use for assets of unknown force
 * @return {string | undefined} color shade to use, or undefined if asset isn't visible
 */
const isPerceivedBy = (perceptions: any, playerForce: string, forceColors: Array<{force: string, color: string}>,
  undefinedColor: string): string | undefined => {
  if(perceptions) {
    const p = perceptions.find((p:any) => p.by.toLowerCase() === playerForce.toLowerCase())
    if(p) {
      // do we know force?
      if(p.force) {
        const color = forceColors.find((f:any) => f.force.toLowerCase() === p.force.toLowerCase())
        if(color) {
          return color.color
        } else {
          // force color not know, so probably 'unknown'. Return unknown shade
          return undefinedColor
        }
      } else {
        return undefinedColor
      }
    }
  }
  return undefined
}

export default isPerceivedBy
