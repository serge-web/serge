import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
// @ts-ignore
export default (/* object */ message, /* object */ allForces) => {
  const payload = message.payload
  // @ts-ignore
  payload.forEach(visChange => {
    const asset = findAsset(allForces, visChange.assetId)
    if (!asset) {
      console.warn('failed to find asset while handling vis id', visChange.assetId)
    } else {
      if (visChange.newVis) {
        // ok, we're making something visible
        // @ts-ignore
        if (!asset.perceptions) {
          // make sure there's
          // a perceptions entry for it.
          // @ts-ignore
          asset.perceptions = []
        }
        // @ts-ignore
        asset.perceptions[visChange.by] = { force: null, type: null }
      } else {
        // ok, we're removing something
        // @ts-ignore
        if (!asset.perceptions) {
          console.warn('possible issue: we\'re trying to remove a perception, but there aren\'t any')
        } else {
          // @ts-ignore
          delete asset.perceptions[visChange.by]
        }
      }
    }
  })
  return allForces
}
