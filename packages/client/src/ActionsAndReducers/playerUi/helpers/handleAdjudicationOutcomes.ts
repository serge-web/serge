import { ForceData, MessageAdjudicationOutcomes, Perception } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
/** apply the adjudication outcomes to the game data
 * 
 */
export default (payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  // NOTE: I originally wrote this as a helper function, but it wouldn't compile
  // NOTE: so, I copied the implementation into here.  If updates are necessary
  // NOTE: I suggest fixing the helper, covering it with the helper test 
  // NOTE: and then copying the code here
  console.log('handling', payload)
  payload.healthOutcomes.forEach((health) => {
    const asset = findAsset(allForces, health.asset)
    asset.health = health.health
  })

  payload.locationOutcomes.forEach((movement) => {
    const asset = findAsset(allForces, movement.asset)
    asset.location = movement.location
  })

  payload.perceptionOutcomes.forEach((perception) => {
    const asset = findAsset(allForces, perception.asset)
    const by = perception.force
    // drop the existing perception
    asset.perceptions = asset.perceptions.filter((percept) => percept.by !== by)

    // generate new perception
    const res: Perception = {
      by: by
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
    // store the perception
    asset.perceptions.push(res)
  })
  return allForces
}
