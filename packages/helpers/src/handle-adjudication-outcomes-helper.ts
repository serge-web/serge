import { ForceData, Perception } from '@serge/custom-types'
import { MessageAdjudicationOutcomes } from '@serge/custom-types/message'
import findAsset from './find-asset'

/** modify the forces object to apply the adjudication outcomes */
export default (payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
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
