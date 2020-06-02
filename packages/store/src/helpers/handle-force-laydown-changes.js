import { findAsset } from '@serge/helpers'

/** create a marker for the supplied set of details */
export default (/* object */ message, /* object */ allForces) => {
  const asset = findAsset(allForces, message.uniqid)
  asset.position = message.position
  return allForces
}
