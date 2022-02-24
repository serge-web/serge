import { AttributeValues, RouteTurn } from '@serge/custom-types'
import { OrientationMarker } from '@serge/custom-types/platform-type-data'

/** retrive the cell at the supplied human-readable coords ("A01") */
const orientationFor2 = (history: Array<RouteTurn>,   planned: Array<RouteTurn>, 
  attributes: AttributeValues, orientation?: OrientationMarker): number | undefined => {
  return orientation && history && planned && attributes && 12
}

export default orientationFor2
