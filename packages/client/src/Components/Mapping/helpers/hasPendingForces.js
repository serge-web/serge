import { LOCATION_PENDING } from '../../../consts'

/** determine if this force has any assets that have a pending location */
export default (forces, myForce) => {
  var res = false
  forces.forEach(force => {
    // see if this force has any assets (white typically doesn't)
    // is this my force?
    if (force.name === myForce) {
      if (force.assets) {
        force.assets.forEach(asset => {
          if (asset.locationPending || asset.state === LOCATION_PENDING) {
            res = true
          }
        })
      }
    }
  })
  return res
}
