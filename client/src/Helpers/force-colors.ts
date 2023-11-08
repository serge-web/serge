import { ForceData } from 'src/custom-types'
import { ForceStyle } from './is-perceived-by'

/** produce an array of force ids & colors
 * optionally exclude umpire forces
 */
export default function forceColors (allForces: ForceData[], excludeUmpire?: boolean): Array<ForceStyle> {
  const filtered = excludeUmpire ? allForces.filter((force) => !force.umpire) : allForces
  const forceColors: Array<ForceStyle> = filtered.map((force: ForceData) => {
    return { forceId: force.uniqid, force: force.name, color: force.color }
  })
  return forceColors
}
