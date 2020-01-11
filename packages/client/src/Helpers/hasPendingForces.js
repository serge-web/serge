import L from 'leaflet'

/** determine if this force has any assets that have a pending location */
export default (forces, myForce) => {

  forces.forEach(force => {
    // see if this force has any assets (white typically doesn't)
    if (force.assets) {
      // is this my force?
      if (force.name === myForce) {
        force.assets.forEach(asset => {
          if (asset.state === 'locationPending') {
            return true
          }
        })
      }
    }
    return false
  })
}
