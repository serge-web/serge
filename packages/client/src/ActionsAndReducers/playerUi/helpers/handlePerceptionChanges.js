import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** convert the legacy dictionary structure to an array, to allow
 * for optimised array processing
 */
const convertPerception = (legacy) => {
  const keys = Object.keys(legacy)
  const res = keys.map(key => {
    const item = legacy[key]
    item.by = key
    return item
  })
  return res
}

/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const asset = findAsset(allForces, payload.assetId)
  if (!asset) {
    console.warn('failed to find asset while handling perception for id', payload.asset, payload)
  } else {
    const perception = payload.perception

    // initialise, if necessary
    if (asset.perceptions) { 
      if(!Array.isArray(asset.perceptions)) {
        asset.perceptions = convertPerception(asset.perceptions)
      }
    } else {
      // no perceptions, create an empty one
      asset.perceptions = []
    }
    // filter out perceptions for forces other than this one
    const otherPerceptions = asset.perceptions.filter(p => (p.by !== perception.by))

    // now add the new perception
    otherPerceptions.push(perception)

    // store the updated perceptions object
    asset.perceptions = otherPerceptions
  }
  return allForces
}
