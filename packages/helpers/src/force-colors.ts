import { ForceData } from '@serge/custom-types'
import { ForceStyle } from './is-perceived-by'

/** produce an array of force ids & colors */
export default function forceColors (allForces: ForceData[]): Array<ForceStyle> {
  const forceColors: Array<ForceStyle> = allForces.map((force: ForceData) => {
    return { forceId: force.uniqid, force: force.name, color: force.color }
  })
  return forceColors
}
