import L from 'leaflet'

/** create a marker for the supplied set of details */
export default (/* object */ message, /* object */ allForces) => {
  const payload = message.payload
  payload.forEach(visChange => {
    const force = allForces.find(item => item.name === visChange.force)
    if (force.assets) {
      const asset = force.assets.find(item => item.name === visChange.asset)
      if (asset) {
        if (visChange.by && !asset.perceptions) {
          // ok, something's becoming visible - make sure there's 
          // a perceptions entry for it.
          asset.perceptions = []
        }
        // can it already see it?
        if (asset.perceptions[visChange.by]) {
          // ok, clear that entry
          delete asset.perceptions[visChange.by]
        } else {
          // create a new entry
          asset.perceptions[visChange.by] = { force: null, type: null }
        }
      }
    }
  })
  return allForces
}
