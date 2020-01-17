import L from 'leaflet'

/** create a marker for the supplied set of details */
export default (/* object */ message, /* object */ allForces) => {
  const payload = message.payload
  payload.forEach(visChange => {
    const force = allForces.find(item => item.name === visChange.force)
    if (force.assets) {
      const asset = force.assets.find(item => item.name === visChange.asset)
      if (asset) {
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
    }
  })
  return allForces
}
