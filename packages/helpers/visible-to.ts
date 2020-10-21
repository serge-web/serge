/** produce a list of the forces that can see this asset */
export default function visibleTo ( perceptions: any): string[] {
  if(Array.isArray(perceptions)) {
    // current perceptions schema
    const visibleTo: Array<string> = perceptions.length ? perceptions.map((p: any) => p.by) : []
    return visibleTo
  } else {
    // legacy perceptions schema
    const dictAsArray: Array<any> = Object.keys(perceptions)
    return dictAsArray
  }
};
