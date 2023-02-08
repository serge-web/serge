import { ForceData, HealthOutcome, HealthOutcomes, InteractionDetails, MessageAdjudicationOutcomes } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
import moment from 'moment'

const injectRepairs = (interaction: InteractionDetails, payload: MessageAdjudicationOutcomes, allForces: ForceData[]): MessageAdjudicationOutcomes => {
  // collate list of assets that have new health outcomes
  const newHealth = payload.healthOutcomes.map((health) => health.asset)

  const tNow = moment.utc(interaction.startTime).valueOf()
  const repairs: HealthOutcomes = []
  allForces.forEach((force) => {
    if (force.assets) {
      force.assets.forEach((asset) => {
        // don't provide repair for asset that has new health outcome
        if (!newHealth.includes(asset.uniqid)) {
          if (asset.attributes) {
            const repair = asset.attributes.a_Repair_Complete
            if (repair) {
              const repairDue = moment.utc(repair).valueOf()
              if (repairDue <= tNow) {
                // create the new health outcome
                const newH: HealthOutcome = {
                  asset: asset.uniqid,
                  health: 100,
                  c4: 'Operational',
                  narrative: 'Repair completed'
                }
                // clear the repair-complete attribute
                delete asset.attributes.a_Repair_Complete
                // store the new health outcome
                repairs.push(newH)
              }
            }
          }
        }
      })
    }
  })

  if (repairs.length) {
    // append the new repairs
    payload.healthOutcomes.push(...repairs)
  }

  return payload
}

/** apply the adjudication outcomes to the game data
 * 
 */
export default (interaction: InteractionDetails, payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  // NOTE: I originally wrote this as a helper function, but it wouldn't compile
  // NOTE: so, I copied the implementation into here.  If updates are necessary
  // NOTE: I suggest fixing the helper, covering it with the helper test 
  // NOTE: and then copying the code here
  console.log('handling adj outcome', payload)

  // start off by injecting any repair outcomes
  const withRepairs = injectRepairs(interaction, payload, allForces)

  withRepairs.healthOutcomes.forEach((health) => {
    const asset = findAsset(allForces, health.asset)
    asset.health = health.health
    if (health.c4 && health.c4 !== 'Unchanged') {
      const attrs = asset.attributes
      if (attrs) {
        attrs.a_C4_Status = health.c4
      }
    }
    if (health.repairComplete && health.repairComplete !== 'n/a') {
      const attrs = asset.attributes
      if (attrs) {
        const days = parseInt(health.repairComplete)
        const completionDate = moment.utc(interaction.endTime).add(days, 'd').toISOString()
        attrs.a_Repair_Complete = completionDate
      }
    }
  })

  withRepairs.locationOutcomes.forEach((movement) => {
    const asset = findAsset(allForces, movement.asset)
    // double-check we're not using a dummy value
    if (Array.isArray(movement.location)) {
      asset.location = movement.location
    } else {
      console.warn('received non-array movement destination', movement.location)
    }
  })

  withRepairs.perceptionOutcomes.forEach((perception) => {
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
      if (perception.perceivedLocation.toLowerCase() === 't') {
        if (asset.location) {
          res.position = asset.location
        }
      } else if (perception.perceivedLocation.toLowerCase() === 'x') {
        delete res.position
      } else {
        try {
          const parsedStr = JSON.parse(perception.perceivedLocation)
          if (Array.isArray(parsedStr)) {
            res.position = parsedStr as [number, number]       
          }
        } catch (err) {
          console.warn('Failed to parse location for', asset.uniqid, perception.perceivedLocation)
          // clear location
          delete res.position 
        }  
      }
    }
  })
  return allForces
}
