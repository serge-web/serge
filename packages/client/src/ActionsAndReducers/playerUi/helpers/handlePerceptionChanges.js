import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const asset = findAsset(allForces, payload.asset)
  if (!asset) {
    console.warn('failed to find asset while handling vis id', payload.asset)
  } else {
    const perception = payload.perception
    if (!asset.perceptions) {
      asset.perceptions = []
    }
    // indicate which force we're storing the perception of
    perception.by = payload.force

    // filter out perceptions for forces other than this one
    const otherPerceptions = asset.perceptions.filter(perception => (perception.by !== payload.force))

    // now add the new perception
    otherPerceptions.push(perception)

    // store the updated perceptions object
    asset.perceptions = otherPerceptions
  }
  return allForces
}
