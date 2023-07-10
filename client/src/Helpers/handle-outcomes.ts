import { Asset, AssetWithForce, ForceData, HealthOutcome, HealthOutcomes, InteractionDetails, MessageAdjudicationOutcomes } from 'src/custom-types'
import moment from 'moment'
import { findForceAndAsset } from './find-asset'
import { cloneDeep } from 'lodash'
import * as turf from '@turf/turf'
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
  const assetCache: Record<string, AssetWithForce> = {}

  withRepairs.healthOutcomes.forEach((health) => {
    const asset = assetCache[health.asset] || findForceAndAsset(allForces, health.asset)
    assetCache[health.asset] = asset
    if (typeof health.health === 'string') {
      const str = health.health as string
      if (str.length > 0) {
        console.log('Asset HEALTH updated', +str)
        // next line converts string to number
        asset.asset.health = +str
      }
    } else {
      asset.asset.health = health.health
    }
    if (health.c4 && health.c4 !== 'Unchanged') {
      const attrs = asset.asset.attributes
      if (attrs) {
        attrs.a_C4_Status = health.c4
      } else {
        asset.asset.attributes = { a_C4_Status: health.c4 }
      }
    }
    if (health.repairComplete) {
      if (!asset.asset.attributes) {
        asset.asset.attributes = {}
      }
      const attrs = asset.asset.attributes
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

  let targetAirport: Asset | undefined
  withRepairs.locationOutcomes.forEach((movement) => {
    const asset: AssetWithForce = assetCache[movement.asset] || findForceAndAsset(allForces, movement.asset)
    assetCache[movement.asset] = asset
    // double-check we're not using a dummy value
    if (Array.isArray(movement.location)) {
      asset.asset.location = movement.location

      // we also need to update the airport, if this is an air order
      if (asset.asset.platformTypeId.includes('_air')) {
        // see if the destination is near an airport
        const coords = movement.location
        if (Array.isArray(coords)) {
          const AIRFIELD_PROXIMITY_KM = 2

          const setAirfield = (asset: Asset, uniqid: string): void => {
            if (!asset.attributes) {
              asset.attributes = {}
            }
            asset.attributes.a_Airfield = uniqid
          }

          // just see if the target airport is near this destination
          let airfieldSet = false
          if (targetAirport && targetAirport.location) {
            const location = targetAirport.location
            const destination = turf.point([coords[1], coords[0]])
            const airportLoc = turf.point([location[1], location[0]])
            const distanceApart = turf.distance(airportLoc, destination, { units: 'kilometers' })
            if (distanceApart < AIRFIELD_PROXIMITY_KM) {
              airfieldSet = true
              setAirfield(asset.asset, targetAirport.uniqid)
              // actually put the aircraft at the airfield
              asset.asset.location = cloneDeep(targetAirport.location)
              console.log('movement - setting to existing airfield', targetAirport.uniqid)
            }
          }
          // did we sort it?
          if (!airfieldSet) {
            const forceAirportsWithLocation = (asset.force.assets && asset.force.assets.filter((asset) => {
              return asset.location && asset.attributes && asset.attributes.a_Type === 'Airfield'
            })) || []
            const airfieldInRange = forceAirportsWithLocation.find((asset) => {
              const location = asset.location
              if (location) {
                const destination = turf.point([coords[1], coords[0]])
                const airportLoc = turf.point([location[1], location[0]])
                const distanceApart = turf.distance(airportLoc, destination, { units: 'kilometers' })
                return (distanceApart < AIRFIELD_PROXIMITY_KM)
              } else {
                return false
              }
            })
            if (airfieldInRange) {
              targetAirport = airfieldInRange
              // set this as the host airfield for the aircraft
              setAirfield(asset.asset, targetAirport.uniqid)
              // actually put the aircraft at the airfield
              asset.asset.location = cloneDeep(targetAirport.location)
              console.log('movement - setting to existing airfield', targetAirport.uniqid)
            }
          }
        }
      }
    } else {
      console.warn('received non-array movement destination', movement.location)
    }
  })

  withRepairs.perceptionOutcomes.forEach((perception) => {
    const asset = assetCache[perception.asset] || findForceAndAsset(allForces, perception.asset)
    assetCache[perception.asset] = asset
    const by = perception.force

    // find/generate the perception for this force
    if (!asset.asset.perceptions) {
      console.warn('Perceptions missing for', asset.asset.name, asset.asset.uniqid)
    } else {
      let res = asset.asset.perceptions && asset.asset.perceptions.find((item) => item.by === by)
      if (!res) {
        // not found, create new perception
        res = { by: by }
        asset.asset.perceptions.push(res)
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
            res.position = asset.asset.location
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
              console.warn('Failed to parse location for', err, asset.asset.uniqid, perception.perceivedLocation)
              // clear location
              delete res.position
            }
          }
        }
      }
      console.log('HANDLE OUTCOMES - perception updated', resBefore, res)
    }
  })
  return allForces
}
