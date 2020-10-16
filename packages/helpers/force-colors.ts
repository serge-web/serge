/** produce an array of force ids & colors */
export default function forceColors (allForces: any): Array<{force: string, color: string}> {
  const forceColors: Array<{force: string, color: string}> = allForces.map((force: any) => {
    return {force: force.uniqid, color: force.color}
  })
  return forceColors
};
