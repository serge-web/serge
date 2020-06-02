import { findAsset } from '@serge/helpers'

/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const asset = findAsset(allForces, payload.asset)
  if (!asset) {
    console.warn('failed to find asset while handling vis id', asset)
  } else {
    const perception = payload.perception
    if (!asset.perceptions) {
      asset.perceptions = []
    }
    asset.perceptions[payload.force] = perception
  }
  return allForces
}
