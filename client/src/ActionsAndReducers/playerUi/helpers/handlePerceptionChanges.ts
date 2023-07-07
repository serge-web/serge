import { Asset, ForceData, MessagePerceptionOfContact } from 'src/custom-types'
import { findAsset } from '@serge/helpers'

/** convert the legacy dictionary structure to an array, to allow
 * for optimised array processing
 */

/** create a marker for the supplied set of details */
export default ({ assetId, perception }: MessagePerceptionOfContact, allForces: ForceData[]): ForceData[] => {
  const asset: Asset = findAsset(allForces, assetId)
  // filter out perceptions for forces other than this one
  const otherPerceptions = asset.perceptions.filter(({ by }) => (by !== perception.by))

  // now add the new perception
  otherPerceptions.push(perception)

  // store the updated perceptions object
  asset.perceptions = otherPerceptions
  return allForces
}
