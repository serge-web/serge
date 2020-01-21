import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
export default (/* object */ message, /* object */ allForces) => {
  const payload = message.payload
  payload.forEach(visChange => {
    const asset = findAsset(allForces, visChange.assetId)
    if (!asset) {
      console.warn('failed to find asset while handling vis id', visChange.assetId)
    } else {
      if (visChange.newVis) {
        // ok, we're making something visible
        if (!asset.perceptions) {
          // make sure there's
          // a perceptions entry for it.
          asset.perceptions = []
        }
        asset.perceptions[visChange.by] = { force: null, type: null }
      } else {
        // ok, we're removing something
        if (!asset.perceptions) {
          console.warn('possible issue: we\'re trying to remove a perception, but there aren\'t any')
        } else {
          delete asset.perceptions[visChange.by]
        }
      }
    }
  })
  return allForces
}
