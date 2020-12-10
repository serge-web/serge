import { ForceData, Perception } from '@serge/custom-types'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** convert the legacy dictionary structure to an array, to allow
 * for optimised array processing
 */

interface Payload {
  assetId: string,
  perception: Perception
}

/** create a marker for the supplied set of details */
export default ({ assetId, perception }: Payload, allForces: ForceData[]): ForceData[] => {
  const asset = findAsset(allForces, assetId)
  if (asset === undefined) {
    console.warn('failed to find asset while handling perception for id', assetId)
  } else {
    // filter out perceptions for forces other than this one
    const otherPerceptions = asset.perceptions.filter(({ by }) => (by !== perception.by))

    // now add the new perception
    otherPerceptions.push(perception)

    // store the updated perceptions object
    asset.perceptions = otherPerceptions
  }
  return allForces
}
