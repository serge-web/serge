import { ForceData } from 'src/custom-types'

/** produce an array of force ids & icons */
export default function forceIcons (allForces: ForceData[]): Array<{force: string, iconURL: string}> {
  const forceIcons: Array<{force: string, iconURL: string}> = allForces.map((force: ForceData) => {
    return { force: force.uniqid, iconURL: force.iconURL }
  })
  return forceIcons
}
