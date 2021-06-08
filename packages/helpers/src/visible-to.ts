import { Perception } from '@serge/custom-types'

/** produce a list of the forces that can see this asset */
export default function visibleTo (perceptions: Perception[]): string[] {
  // current perceptions schema
  const visibleTo: Array<string> = perceptions.length ? perceptions.map((p: Perception) => p.by) : []
  return visibleTo
}
