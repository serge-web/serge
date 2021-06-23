import { ForceData } from "@serge/custom-types"

/** produce an array of force ids & icons */
export default function forceIcons (allForces: ForceData[]): Array<{force: string, icon: string}> {
  const forceIcons: Array<{force: string, icon: string}> = allForces.map((force: ForceData) => {
    return { force: force.uniqid, icon: force.icon }
  })
  return forceIcons
};
