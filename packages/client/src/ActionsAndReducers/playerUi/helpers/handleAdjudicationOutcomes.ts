import { ForceData, MessageAdjudicationOutcomes } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
/** apply the adjudication outcomes to the game data
 * 
 */
export default (payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  // NOTE: I originally wrote this as a helper function, but it wouldn't compile
  // NOTE: so, I copied the implementation into here.  If updates are necessary
  // NOTE: I suggest fixing the helper, covering it with the helper test 
  // NOTE: and then copying the code here
  console.log('handling adj outcome', payload)
  payload.healthOutcomes.forEach((health) => {
    const asset = findAsset(allForces, health.asset)
    asset.health = health.health
  })

  payload.locationOutcomes.forEach((movement) => {
    const asset = findAsset(allForces, movement.asset)
    // double-check we're not using a dummy value
    if (Array.isArray(movement.location)) {
      asset.location = movement.location
    } else {
      console.warn('received non-array movement destination', movement.location)
    }
  })

  payload.perceptionOutcomes.forEach((perception) => {
    const asset = findAsset(allForces, perception.asset)
    const by = perception.force

    // find/generate the perception for this force
    let res = asset.perceptions.find((item) => item.by === by)
    if (!res) {
      // not found, create new perception
      res = { by: by }
      asset.perceptions.push(res)
    }

    if (perception.perceivedForce) {
      res.force = perception.perceivedForce
    }
    if (perception.perceivedHealth) {
      res.health = perception.perceivedHealth
    }
    if (perception.perceivedType) {
      res.typeId = perception.perceivedType
    }
    if (perception.perceivedName) {
      res.name = perception.perceivedName
    }
    if (perception.perceivedLocation) {
      // if we can parse a number array, set new location, else clear the location
      let newLocation: [number, number] | undefined
      try {
        const parsedStr = JSON.parse(perception.perceivedLocation)
        if (Array.isArray(parsedStr)) {
          newLocation = parsedStr as [number, number]       
        }
      } catch (err) {
        // set flag to clear location
        newLocation = undefined
      }
      if (newLocation) {
        res.position = newLocation
      } else {
        // umpire wishes to clear perceived location
        delete res.position
      }
    }
  })
  return allForces
}
