import { ForceData } from "@serge/custom-types"

/** produce an array of force ids & colors */
export default function forceColors (allForces: ForceData[]): Array<{force: string, color: string}> {
  const forceColors: Array<{force: string, color: string}> = allForces.map((force: ForceData) => {
    return {force: force.uniqid, color: force.color}
  })
  return forceColors
};
