import { Asset, ForceData, HealthOutcome, HealthOutcomes, InteractionDetails, MessageAdjudicationOutcomes } from '@serge/custom-types'
import moment from 'moment'
import findAsset from './find-asset'
import { cloneDeep } from 'lodash'
import { UNCHANGED, UNKNOWN_TYPE } from '@serge/config'

export const injectRepairs = (interaction: InteractionDetails, payload: MessageAdjudicationOutcomes, allForces: ForceData[]): MessageAdjudicationOutcomes => {
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
  // start off by injecting any repair outcomes in the rest of the assets
  const withRepairs = injectRepairs(interaction, payload, allForces)

  // we may apply observations to an asset in multiple lists. Cache the assets we find
  const assetCache: Record<string, Asset> = {}

  withRepairs.healthOutcomes.forEach((health) => {
    const asset = assetCache[health.asset] || findAsset(allForces, health.asset)
    assetCache[health.asset] = asset
    if (typeof health.health === 'string') {
      const str = health.health as string
      if (str.length > 0) {
        console.log('Asset HEALTH updated', +str)
        // next line converts string to number
        asset.health = +str
      }
    } else {
      asset.health = health.health
    }
    if (health.c4 && health.c4 !== 'Unchanged') {
      const attrs = asset.attributes
      if (attrs) {
        attrs.a_C4_Status = health.c4
      } else {
        asset.attributes = { a_C4_Status: health.c4 }
      }
    }
    if (health.repairComplete) {
      if (!asset.attributes) {
        asset.attributes = {}
      }
      const attrs = asset.attributes
      if (health.repairComplete === 'I/R') {
        // ok, cannot be repaired. Clear the repair complete flag, if there is one
        if (attrs.a_Repair_Complete) {
          delete attrs.a_Repair_Complete
        }
      } else {
        // can be repaired, insert the time the repairs will be complete
        const days = parseInt(health.repairComplete)
        const completionDate = moment.utc(interaction.startTime).add(days, 'd').toISOString()
        attrs.a_Repair_Complete = completionDate
      }
    }
  })

  withRepairs.locationOutcomes.forEach((movement) => {
    const asset = assetCache[movement.asset] || findAsset(allForces, movement.asset)
    assetCache[movement.asset] = asset
    // double-check we're not using a dummy value
    if (Array.isArray(movement.location)) {
      asset.location = movement.location
    } else {
      console.warn('received non-array movement destination', movement.location)
    }
  })

  withRepairs.perceptionOutcomes.forEach((perception) => {
    const asset = assetCache[perception.asset] || findAsset(allForces, perception.asset)
    assetCache[perception.asset] = asset
    const by = perception.force

    // find/generate the perception for this force
    let res = asset.perceptions.find((item) => item.by === by)
    if (!res) {
      // not found, create new perception
      res = { by: by }
      asset.perceptions.push(res)
    }
    const resBefore = cloneDeep(res)
    // store the last observed time
    if (interaction.endTime && interaction.endTime.length > 0) {
      res.lastUpdate = moment.utc(interaction.endTime).valueOf()
    }
    if (perception.perceivedForce) {
      if (perception.perceivedForce === UNCHANGED) {
        // leave unchanged
      } else if (perception.perceivedForce === UNKNOWN_TYPE) {
        delete res.force
      } else {
        res.force = perception.perceivedForce
      }
    } else {
      delete res.force
    }
    if (perception.perceivedType) {
      if (perception.perceivedType === UNCHANGED) {
        // leave unchanged
      } else if (perception.perceivedType === UNKNOWN_TYPE) {
        delete res.typeId
      } else {
        res.typeId = perception.perceivedType
      }
    } else {
      delete res.typeId
    }
    if (perception.perceivedHealth !== undefined) {
      if (typeof perception.perceivedHealth === 'string') {
        // leave unchanged, it's an empty field
      } else {
        res.health = perception.perceivedHealth
      }
    }
    if (perception.perceivedName) {
      res.name = perception.perceivedName
    }
    if (perception.perceivedLocation) {
      if (typeof perception.perceivedLocation === 'string') {
        if (perception.perceivedLocation.toLowerCase() === 't') {
          res.position = asset.location
        } else if (perception.perceivedLocation.toLowerCase() === 'x') {
          delete res.position
        } else if (perception.perceivedLocation.toLowerCase() === '"x"') {
          delete res.position
        } else {
          try {
            const parsedStr = JSON.parse(perception.perceivedLocation)
            if (Array.isArray(parsedStr)) {
              const numArr = parsedStr as number[]
              if (numArr.length === 2) {
                if (numArr[0] !== null && numArr[1] !== null) {
                  res.position = parsedStr as [number, number]
                } else {
                  console.warn('Location array had one or more null entries', parsedStr)
                }
              } else {
                console.warn('Location array of wrong length', numArr.length)
              }
            } else {
              console.warn('Parsed location not an array', parsedStr)
            }
          } catch (err) {
            console.warn('Failed to parse location for', err, asset.uniqid, perception.perceivedLocation)
            // clear location
            delete res.position
          }
        }
      }
    }
    console.log('HANDLE OUTCOMES - perception updated', resBefore, res)
  })
  return allForces
}
