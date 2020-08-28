/** produce a list of the forces that can see this asset */
export default function visibleTo ( perceptions: any): string[] {
  const visibleTo: Array<string> = perceptions && perceptions.length ? perceptions.map((p: any) => p.by) : []
  return visibleTo
};
