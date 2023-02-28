import { ADJUDICATION_OUTCOMES, GeometryType, INTER_AT_END, INTER_AT_RANDOM, INTER_AT_START } from '@serge/config'
import {
  Asset, AssetWithForce, CoreOutcome, ForceData, HealthOutcome, InteractionDetails,
  INTERACTION_SHORT_CIRCUIT, LocationOutcome, MessageAdjudicationOutcomes, MessageInteraction,
  MessagePlanning, PerceptionOutcome, PerceptionOutcomes, PerForcePlanningActivitySet, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry
} from '@serge/custom-types'
import { findAsset, findForceAndAsset } from '@serge/helpers'
import * as turf from '@turf/turf'
import { Feature, Geometry, LineString, Polygon } from 'geojson'
import _ from 'lodash'
import moment from 'moment'
import { DEFAULT_SEARCH_RATE } from '..'
import { findTouching, GeomWithOrders, injectTimes, invertMessages, PlanningContact, putInBin, ShortCircuitEvent, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'
import { calculateDetections, checkInArea, insertIstarInteractionOutcomes, istarBoundingBox } from './istar-helper'

type TimePlusGeometry = { time: number, geometry: PlannedActivityGeometry['uniqid'] | undefined }

/** the start and end time for a turn */
export type TurnTimes = {
  start: number
  end: number
}

const useDate = (msg: MessageInteraction): string => {
  const inter = msg.details.interaction
  if (!inter) {
    throw Error('Interaction missing for message:' + msg.message.Reference)
  }
  return inter.startTime
}

export const timeOfLatestInteraction = (interactions: MessageInteraction[]): number => {
  if (!interactions.length) {
    throw Error('should not be called with zero length interactions')
  }
  const sorted = _.sortBy(interactions, useDate) as MessageInteraction[]
  const date = useDate(sorted[sorted.length - 1])
  return moment.utc(date).valueOf()
}

export const createSpecialOrders = (gameTime: number, orders: MessagePlanning[], interactions: MessageInteraction[]): MessagePlanning[] => {
  !7 && console.log(gameTime, orders, interactions)
  return []
}

export const groupFor = (name: string): string => {
  const separator = '-'
  const last = name.lastIndexOf(separator)
  const forceGroup = name.slice(0, last)
  const first = forceGroup.lastIndexOf(separator)
  const groupName = forceGroup.slice(first + 1)
  return groupName
}

export const findActivity = (name: string, activities: PerForcePlanningActivitySet): PlanningActivity | undefined => {
  const separator = '-'
  const last = name.lastIndexOf(separator)
  const actName = name.slice(last + 1)
  const forceGroup = name.slice(0, last)
  const first = forceGroup.lastIndexOf(separator)
  const groupName = forceGroup.slice(first + 1)
  const forceName = forceGroup.slice(0, first)
  if (forceName !== activities.force) {
    console.warn('Warning: findActivitiy received activities for wrong force')
  }
  const groupActivities = activities.groupedActivities.find((group) => group.category === groupName)
  if (groupActivities) {
    const activity = groupActivities.activities.find((act) => act.name === actName)
    if (activity) {
      return activity
    }
  }
  console.warn('Failed to find group activities for this activity:', name)
  console.warn('find act', name, last, actName, forceGroup, first, groupName, forceName, activities)
  return undefined
}

const roundedRandomTime = (start: number, end: number): number => {
  // TODO: switch back to randomly generated time
  const delta = Math.random() * (end - start)
  // const delta = 0.5 * (end - start)
  const mins5 = 5 * 60 * 1000
  const rounded = Math.floor(delta / mins5) * mins5
  return start + rounded
}

export const trimPeriod = (period: TurnTimes, turn: TurnTimes): TurnTimes => {
  return { start: Math.max(period.start, turn.start), end: Math.min(period.end, turn.end) }
}

const timeFor = (plan: MessagePlanning, activity: PlanningActivity, iType: INTERACTION_SHORT_CIRCUIT, turn: TurnTimes): TimePlusGeometry => {
  // do we have routing?
  if (activity.geometries && activity.geometries.length > 0) {
    // for `first`, use end-time of route-out (first line geometry)
    // for `last`, use start-time of route-back (last line geometry)
    // for `random` create period between `first` and `last`
    if (plan.message.location) {
      let period: TurnTimes | undefined
      let geomName: string | undefined
      const allPolygons = activity.geometries.filter((plan: PlanningActivityGeometry) => plan.aType === GeometryType.polygon)
      const lastPolygon = allPolygons.length && allPolygons[allPolygons.length - 1]
      if (lastPolygon) {
        const plannedActivity = plan.message.location.find((planned: PlannedActivityGeometry) => planned.uniqid === lastPolygon.uniqid)
        if (plannedActivity) {
          const props = plannedActivity.geometry.properties as PlannedProps
          period = { start: props.startTime, end: props.endTime }
          geomName = lastPolygon.uniqid
        }
      }
      if (!period) {
        // just take start of first activity, to end of last activity
        const timeFor = (planned: PlannedActivityGeometry): [number, number] => {
          const props = planned.geometry.properties as PlannedProps
          return [props.startTime, props.endTime]
        }
        const firstPeriod = timeFor(plan.message.location[0])
        const lastPeriod = timeFor(plan.message.location[plan.message.location.length - 1])
        period = { start: firstPeriod[0], end: lastPeriod[1] }
      }

      // work out the active time period
      switch (iType) {
        case INTER_AT_END:
          return { time: period.end, geometry: geomName }
        case INTER_AT_START:
          return { time: period.start, geometry: geomName }
        case INTER_AT_RANDOM: {
          // trim the period to the current turn period
          const trimmed = trimPeriod(period, turn)
          return { time: roundedRandomTime(trimmed.start, trimmed.end), geometry: geomName }
        }
      }
    } else {
      console.warn('Cannot breakdown activity, locations missing', plan.message.Reference, plan.message.activity, plan._id, activity, plan.message.location)
    }
  }
  // just use overall message timing
  const tStart = moment.utc(plan.message.startDate).valueOf()
  const tEnd = moment.utc(plan.message.endDate).valueOf()

  switch (iType) {
    case INTER_AT_END:
      return { time: tEnd, geometry: undefined }
    case INTER_AT_START:
      return { time: tStart, geometry: undefined }
    case INTER_AT_RANDOM: {
      // trim the period to the current turn period
      const period = { start: tStart, end: tEnd }
      const trimmed = trimPeriod(period, turn)
      return { time: roundedRandomTime(trimmed.start, trimmed.end), geometry: undefined }
    }
  }
}

/** record of how a target site is protected */
interface ProtectedTarget {
  // the force that this target belongs to
  force: ForceData['uniqid']
  // the specific target
  target: Asset
  // SAM sites that protect this target
  protectedBy: Asset[]
}

/**
 *
 * @param targets all targets that are to be hit
 * @param secondaryTargets sub-set of the above that are to be included in `otherAssets` listing
 * @param outcomes the outcomes we append to
 * @param activity the activity being conducted
 * @returns
 */
const kineticEventOutcomesFor = (targets: AssetWithForce[], secondaryTargets: AssetWithForce[], outcomes: MessageAdjudicationOutcomes, activity: PlanningActivity): MessageAdjudicationOutcomes => {
  const protectedTargets: Array<ProtectedTarget> = []
  console.log('kinetic', targets.length)
  // loop through targets
  targets.forEach((asset: AssetWithForce) => {
    const tgtAsset = asset.asset
    const tgtForce = asset.force
    if (tgtAsset.location !== undefined) {
      const tgtPoint = turf.point([tgtAsset.location[1], tgtAsset.location[0]])
      // loop through other assets of that force
      tgtForce.assets && tgtForce.assets.forEach((oppAsset: Asset) => {
        // see if this has MEZ range
        const attrs = oppAsset.attributes
        if (attrs && attrs.a_MEZ_range && oppAsset.location && (oppAsset.health && oppAsset.health > 0)) {
          // ok, it has a MEZ range
          const mezAsset = oppAsset
          // generate
          const mezPoint = turf.point([oppAsset.location[1], oppAsset.location[0]])
          const distanceApart = turf.distance(tgtPoint, mezPoint, { units: 'kilometers' })
          if (distanceApart < attrs.a_MEZ_range && tgtForce && tgtAsset) {
            // ok, it's covered.
            let protTarget = protectedTargets.find((target: ProtectedTarget) => tgtAsset && target.target.uniqid === tgtAsset.uniqid)
            if (!protTarget) {
              protTarget = {
                force: tgtForce.uniqid,
                target: tgtAsset,
                protectedBy: []
              }
              protectedTargets.push(protTarget)
            }
            protTarget.protectedBy.push(mezAsset)
          }
        }
      })
    }
    // create damage outcome for this asset
    const existingC4: 'None' | 'Degraded' | 'Operational' = (tgtAsset.attributes && tgtAsset.attributes.a_C4_Status as 'None' | 'Degraded' | 'Operational') || 'Degraded'
    const health: HealthOutcome = {
      asset: tgtAsset.uniqid,
      health: 50,
      c4: existingC4,
      narrative: 'Damage by ' + activity.name
    }
    outcomes.healthOutcomes.push(health)
  })
  if (protectedTargets.length) {
    const message = protectedTargets.map((prot: ProtectedTarget) => {
      return prot.target.name + ' protected by ' + prot.protectedBy.map((asset: Asset) => '' + asset.name + ' (' + asset.uniqid + ')').join(', ') + '\n'
    }).join(', ')
    outcomes.narrative = outcomes.narrative ? (outcomes.narrative + message) : message

    // store the other assets
    const otherAssets: Array<Asset['uniqid']> = []
    protectedTargets.forEach((tgt: ProtectedTarget) => {
      tgt.protectedBy.forEach((asset: Asset) => {
        if (!otherAssets.includes(asset.uniqid)) {
          otherAssets.push(asset.uniqid)
        }
      })
    })
    outcomes.otherAssets = otherAssets
  }

  if (secondaryTargets.length) {
    const message = secondaryTargets.map((item: AssetWithForce) => {
      const asset = item.asset
      outcomes.otherAssets = outcomes.otherAssets ? outcomes.otherAssets : []
      if (!outcomes.otherAssets.includes(asset.uniqid)) {
        outcomes.otherAssets.push(asset.uniqid)
      }
      const airfieldID = asset.attributes && asset.attributes.a_Airfield
      if (airfieldID) {
        const airfield = targets.find((item) => item.asset.uniqid === airfieldID)
        return asset.name + ' stationed at ' + (airfield && airfield.asset.name) + '\n'
      } else {
        console.warn('Airfield not found', airfieldID)
        return ''
      }
    }).join(', ')
    outcomes.narrative = outcomes.narrative ? (outcomes.narrative + message) : message
  }

  return outcomes
}

const transitEventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes,
  event: INTERACTION_SHORT_CIRCUIT | undefined): MessageAdjudicationOutcomes => {
  if (event === INTER_AT_END && plan.message.ownAssets && plan.message.location && plan.message.location.length === 1) {
    // ok, put the asset(s) at the destination
    const destGeom = plan.message.location[0].geometry.geometry as LineString
    const coords = destGeom.coordinates[destGeom.coordinates.length - 1]
    plan.message.ownAssets.forEach((target: { asset: string }) => {
      const outCome: LocationOutcome = {
        asset: target.asset,
        location: [coords[1], coords[0]]
      }
      outcomes.locationOutcomes.push(outCome)
    })

    !7 && console.log(plan)
  }
  return outcomes
}

const alterC4 = (current: string | undefined, degrade: boolean): 'None' | 'Degraded' | 'Operational' => {
  const states: Array<'None' | 'Degraded' | 'Operational'> = ['None', 'Degraded', 'Operational']
  if (current) {
    const index = states.findIndex((state) => state === current) || 1
    const mod = degrade ? -1 : 1
    let newI = index + mod
    newI = Math.min(newI, states.length - 1)
    newI = Math.max(newI, 0)
    return states[newI]
  } else {
    return states[1]
  }
}

const ewEventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes,
  event: INTERACTION_SHORT_CIRCUIT | undefined, forces: ForceData[]): MessageAdjudicationOutcomes => {
  if (plan.message.otherAssets) {
    const degrade = (event === INTER_AT_START)
    plan.message.otherAssets.forEach((target: { asset: string }) => {
      const theAsset = findAsset(forces, target.asset)
      const currentHealth = theAsset.health === undefined ? 100 : theAsset.health
      const existingC4 = (theAsset.attributes && theAsset.attributes.a_C4_Status as string) || undefined
      const newC4 = alterC4(existingC4, degrade)
      const outCome: HealthOutcome = {
        asset: target.asset,
        health: currentHealth,
        c4: newC4,
        narrative: 'Damage by ' + plan.message.activity
      }
      outcomes.healthOutcomes.push(outCome)
    })
  }
  return outcomes
}

export const istarSearchRate = (own: Array<{ asset: Asset['uniqid'], number: number, missileType?: string }>, forces: ForceData[], defaultRate: number): number => {
  if (own && own.length > 0) {
    interface AssetWithCount {
      asset: Asset
      count: number
      rate: number
    }
    const assetsWithCount = own.map((item): AssetWithCount => {
      const asset = findAsset(forces, item.asset)
      const attrs = asset.attributes
      const rate = (attrs && attrs.a_Search_Rate) ? attrs.a_Search_Rate as number : defaultRate
      return { asset: asset, count: item.number, rate: rate }
    })
    const searchRates = assetsWithCount.map((item): number => {
      const rate = (item.asset.attributes && item.asset.attributes.a_Search_Rate) ? item.asset.attributes.a_Search_Rate as number : defaultRate
      const assetRate = item.count > 0 ? item.count * rate : rate
      return assetRate
    })
    const res = searchRates.reduce((a: number, b: number) => a + b, 0)
    console.table(assetsWithCount.map((item) => {
      return {
        id: item.asset.uniqid,
        name: item.asset.name,
        count: item.count,
        rate: (item.asset.attributes && item.asset.attributes.a_Search_Rate) || 'Default:' + defaultRate
      }
    }))
    console.log('ISTAR Calculated search rate:' + res)
    return res
  }
  return defaultRate
}

const istarEventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes, forces: ForceData[]): MessageAdjudicationOutcomes => {
  if (!plan.message.location) {
    console.warn('ISTAR plan doesn\'t have location data')
    return outcomes
  }

  // find own force
  const ownFor = plan.details.from.forceId || ''

  // find the bounding box
  const boxGeometry = istarBoundingBox(plan.message.location)
  if (!boxGeometry) {
    console.warn('Observation box missing')
    return outcomes
  }

  // find the period of coverage
  const props = boxGeometry.geometry.properties as PlannedProps
  const startTime = props.startTime || moment.utc(props.startDate).valueOf()
  const endTime = props.endTime || moment.utc(props.endDate).valueOf()

  // calculate the search rate
  const defaultSearchRateKm2perHour = DEFAULT_SEARCH_RATE
  const searchRateKm2perHour = istarSearchRate(plan.message.ownAssets || [], forces, defaultSearchRateKm2perHour)

  // run the calculator
  const inAreaPerceptions = calculateDetections(ownFor, forces, boxGeometry.geometry.geometry,
    startTime, endTime, searchRateKm2perHour, 'ISTAR: Asset detected in observation area')

  // start off with the selected op-for assets
  const perceptions: PerceptionOutcomes = []
  const oppAssets = plan.message.otherAssets
  if (oppAssets) {
    const oppIDs = oppAssets.map((item: { asset: Asset['uniqid'] }) => item.asset)
    const detIDs = inAreaPerceptions.map((det): Asset['uniqid'] => det.asset)
    const notDetected = oppIDs.filter((id: Asset['uniqid']) => {
      return !detIDs.includes(id)
    })
    const oppForTargetAssets = notDetected.map((assetId): AssetWithForce => {
      return findForceAndAsset(forces, assetId)
    })

    const oppPerceptions = oppForTargetAssets.map((item: AssetWithForce): PerceptionOutcome => {
      return {
        force: plan.details.from.forceId || '',
        asset: item.asset.uniqid,
        perceivedLocation: 't',
        perceivedType: item.asset.platformTypeId,
        perceivedHealth: item.asset.health,
        perceivedName: item.asset.name,
        perceivedForce: item.force.uniqid,
        narrative: 'Targeted op-for asset'
      }
    })
    if (oppPerceptions.length > 0) {
      perceptions.push(...oppPerceptions)
    }
    // also do air squadrons for airfields
  }

  // now push in the in-area perceptions, since we want to see the subject ones first
  if (inAreaPerceptions) {
    perceptions.push(...inAreaPerceptions)

    const areaIds = inAreaPerceptions.map((item) => item.asset)
    const targetIds = oppAssets ? oppAssets.map((item) => item.asset) : []
    const areaNotTargets = areaIds.filter((item) => !targetIds.includes(item))
    if (areaNotTargets) {
      if (!outcomes.otherAssets) {
        outcomes.otherAssets = []
      }
      outcomes.otherAssets.push(...areaNotTargets)
    }
  }

  if (perceptions.length) {
    outcomes.perceptionOutcomes.push(...perceptions)
  }

  return outcomes
}

const opForInArea = (forceId: ForceData['uniqid'], forces: ForceData[], mePoly: Feature<Polygon>, existingOutcomes: Asset['uniqid'][], special?: string): AssetWithForce[] => {
  const assets: AssetWithForce[] = []
  const opFor = forces.filter((force) => force.assets && force.uniqid !== forceId)
  opFor.forEach((force) => {
    force.assets && force.assets.forEach((asset) => {
      if (!existingOutcomes.includes(asset.uniqid)) {
        if (asset.location) {
          if (checkInArea(mePoly, asset.location)) {
            assets.push({ force, asset })
            special && asset.name === special && console.log(asset.name, asset.location, !!special)
            if (asset.comprising && asset.comprising.length) {
              asset.comprising.forEach((item) => {
                const fAsset: AssetWithForce = { force: force, asset: item }
                assets.push(fAsset)
              })
            }
          }
        }
      }
    })
  })
  return assets
}

export const insertMovementOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes, forces: ForceData[]): void => {
  if (plan.message.ownAssets) {
    const assetIds = plan.message.ownAssets
    const assetsWithoutMovementOutcome = assetIds.filter((item) => !outcomes.locationOutcomes.some((outcome) => outcome.asset === item.asset))
    const assets = assetsWithoutMovementOutcome.map((item) => findAsset(forces, item.asset))
    const assetsWithLoc = assets.filter((asset) => asset.location)

    if (plan.message.location && plan.message.location.length > 0) {
      const lastGeom = plan.message.location[plan.message.location.length - 1].geometry.geometry as LineString
      const coords = lastGeom.coordinates[lastGeom.coordinates.length - 1]
      // swap the coords to lat/long we're expeting
      const loc: [number, number] = [coords[1], coords[0]]
      const movements = assetsWithLoc.map((asset): LocationOutcome => {
        if (!asset.location) {
          console.warn('Should not encounter asset without location')
        }
        const outcome: LocationOutcome = {
          asset: asset.uniqid,
          location: loc,
          narrative: 'End of order involving movement'
        }
        return outcome
      })
      outcomes.locationOutcomes.push(...movements)
    }
  }
}

export const insertSpatialOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes,
  activity: PlanningActivity, forces: ForceData[]): void => {
  const location = plan.message.location
  if (!location) {
    console.warn('Warning: orders have location, but not activity', plan._id, activity.uniqid)
  } else {
    // find the polys
    const polys = location.filter((geom) => geom.geometry.geometry.type === GeometryType.polygon)
    if (!polys) {
      console.log('failed to find last polygon')
    }
    if (polys.length) {
      // find the last poly
      const poly = polys[polys.length - 1]
      if (!poly) {
        console.warn('Failed to find matching geometry')
      } else {
        // generate the shape
        const box = poly.geometry.geometry as Geometry as Polygon
        const coords = box.coordinates
        // calculate prob of detecting sometghing
        // convert the boundary to a turn object
        const mePoly = turf.polygon(coords)

        // find opFor assets within poly
        const existingOutcomes = outcomes.healthOutcomes.map((item) => item.asset)
        // console.log('TST existing outcomes', existingOutcomes)
        const special = undefined // 'Green:4'
        const assets = opForInArea(plan.details.from.forceId || '', forces, mePoly, existingOutcomes, special)
        /// console.log('TST detections', assets)

        special && console.table(assets.map((fAsset) => {
          const asset = fAsset.asset
          return {
            name: asset.name,
            id: asset.uniqid,
            loc: asset.location ? asset.location.join(':') : ''
          }
        }))

        const notPresent = (asset: Asset['uniqid'], outcomes: CoreOutcome[]): boolean => {
          return !outcomes.find((outcome) => outcome.asset === asset)
        }
        if (assets.length) {
          assets.forEach((asset) => {
            const uniqid = asset.asset.uniqid
            if (activity.spatialHealth) {
              if (notPresent(uniqid, outcomes.healthOutcomes)) {
                const existingC4 = (asset.asset.attributes && asset.asset.attributes.a_C4_Status as string) || undefined
                const newC4 = alterC4(existingC4, false)
                const assetHealth = asset.asset.health
                outcomes.healthOutcomes.push({
                  asset: uniqid,
                  health: assetHealth === undefined ? 50 : assetHealth,
                  c4: newC4,
                  narrative: 'Asset in area for ' + activity.uniqid
                })
                if (!outcomes.otherAssets) {
                  outcomes.otherAssets = []
                }
                if (!outcomes.otherAssets.includes(uniqid)) {
                  outcomes.otherAssets.push(asset.asset.uniqid)
                }
              }
            }
            if (activity.spatialPerception) {
              if (notPresent(uniqid, outcomes.perceptionOutcomes)) {
                outcomes.perceptionOutcomes.push({
                  asset: uniqid,
                  force: plan.details.from.forceId || '',
                  perceivedLocation: 't', // true location
                  perceivedForce: asset.force.uniqid,
                  perceivedName: asset.asset.name,
                  perceivedType: asset.asset.platformTypeId,
                  perceivedHealth: asset.asset.health,
                  narrative: 'Asset in area for ' + activity.uniqid
                })
                if (!outcomes.otherAssets) {
                  outcomes.otherAssets = []
                }
                if (!outcomes.otherAssets.includes(uniqid)) {
                  outcomes.otherAssets.push(asset.asset.uniqid)
                }
              }
            }
          })
        }
      }
    }
  }
}

export const assetsInArea = (plan: MessagePlanning, forces: ForceData[]): AssetWithForce[] => {
  const area = plan.message.location
  const targets: AssetWithForce[] = []
  if (area) {
    const poly = area.find((geom) => geom.geometry.geometry.type === 'Polygon')
    if (poly) {
      const geom = poly.geometry as Feature<Polygon>
      const ownForce = plan.details.from.forceId
      forces.forEach((force) => {
        if (force.assets && force.uniqid !== ownForce) {
          force.assets.forEach((asset) => {
            if (asset.location) {
              if (checkInArea(geom, asset.location)) {
                targets.push({ asset: asset, force: force })
              }
            }
          })
        }
      })
    }
  }
  return targets
}

export const squadronsAtTheseAirfields = (targetAssets: Array<AssetWithForce>, forces: ForceData[]): AssetWithForce[] => {
  // if airfields were targeted, also introduce child squadrons taht are not on other tasking
  const airfields = targetAssets.filter((asset) => asset.asset.attributes && asset.asset.attributes.a_Type === 'Airfield').map((asset) => asset.asset.uniqid)
  const squadronsAtAirfields: AssetWithForce[] = []
  forces.forEach((force) => {
    force.assets && force.assets.forEach((asset) => {
      if (asset.attributes && airfields.includes(asset.attributes.a_Airfield as string)) {
        // TODO: check if the squadron are busy with other tasking (by searching through live orders)
        squadronsAtAirfields.push({ force, asset })
      }
    })
  })
  return squadronsAtAirfields
}

export const eventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes,
  activity: PlanningActivity, forces: ForceData[], event: INTERACTION_SHORT_CIRCUIT | undefined): MessageAdjudicationOutcomes => {
  console.log('handle outcomes', activity.actId, event, plan)
  switch (activity.actId) {
    case 'STRIKE': {
      const targetAssets = plan.message.otherAssets ? plan.message.otherAssets.map((item) => findForceAndAsset(forces, item.asset)) : []
      const squadronsAtAirfields = squadronsAtTheseAirfields(targetAssets, forces)
      // TODO: create scenario to test this
      const allTargets = targetAssets.concat(...squadronsAtAirfields)
      kineticEventOutcomesFor(allTargets, squadronsAtAirfields, outcomes, activity)
      break
    }
    case 'TST': {
      // find all op-for assets in the box
      const targetAssets = assetsInArea(plan, forces)
      console.log('TST assets in area', targetAssets)
      kineticEventOutcomesFor(targetAssets, [], outcomes, activity)
      console.log('TST outcomes', outcomes)
      break
    }
    case 'TRANSIT': {
      transitEventOutcomesFor(plan, outcomes, event)
      break
    }
    case 'ISTAR': {
      istarEventOutcomesFor(plan, outcomes, forces)
      break
    }
    case 'CYB/SPA':
    case 'EW': {
      ewEventOutcomesFor(plan, outcomes, event, forces)
      break
    }
    default: {
      console.log('Specific event outcomes not generated for activity', activity.actId)
    }
  }
  // console.log('%c event outcomes, spatial?', 'color: blue', activity.actId, activity.spatialHealth, activity.spatialPerception, !!plan.message.location)
  // do we also have to insert assets in the target polygon?
  if ((activity.spatialPerception || activity.spatialHealth) && plan.message.location && plan.message.location.length) {
    insertSpatialOutcomesFor(plan, outcomes, activity, forces)
  }
  // do we also have to update asset locations
  if (event === INTER_AT_END && endsWithMovement(plan.message.location)) {
    const group = groupFor(activity.uniqid)
    const moveFor = ['Land', 'Maritime']
    if (moveFor.includes(group)) {
      insertMovementOutcomesFor(plan, outcomes, forces)
    }
  }
  return outcomes
}

export interface TimedIntervention {
    // id of the interaction (composite of planning message & event)
    id: string
    time: number
    timeStr: string
    event: INTERACTION_SHORT_CIRCUIT
    message: MessagePlanning
    activity: PlanningActivity
    geomId: PlannedActivityGeometry['uniqid'] | undefined
  }

const endsWithMovement = (activity?: PlannedActivityGeometry[]): boolean => {
  if (activity && activity.length > 0) {
    const lastLeg = activity[activity.length - 1]
    return lastLeg.geometry.geometry.type === 'LineString'
  } else {
    return false
  }
}

const generateEventId = (planId: string, event: INTERACTION_SHORT_CIRCUIT, turn: number) => {
  // note: if this is a random marker we include the turn number in the id,
  // note: so that we can create interaction in each turn
  const useTurn = event === INTER_AT_RANDOM ? '_' + turn : ''
  return planId + '_' + event + useTurn
}

export const getEventList = (cutoffTime: number, orders: MessagePlanning[], interactionIDs: string[],
  activities: PerForcePlanningActivitySet[], turn: TurnTimes, turnNumber: number): TimedIntervention[] => {
  // loop through plans
  const eventList: TimedIntervention[] = []
  orders.forEach((plan: MessagePlanning) => {
    const force = plan.details.from.forceId
    const forceActivities = activities.find((act: PerForcePlanningActivitySet) => act.force === force)
    if (forceActivities) {
      const actName = plan.message.activity
      const activity = findActivity(actName, forceActivities)
      if (activity) {
        const activityEvents = activity.events
        let endActivityGenerated = false
        if (activityEvents) {
          activityEvents.forEach((event: INTERACTION_SHORT_CIRCUIT) => {
            const thisTime = timeFor(plan, activity, event, turn)
            if (thisTime) {
              const interactionId = generateEventId(plan._id, event, turnNumber)
              // check this hasn't been processed already
              if (interactionIDs.includes(interactionId)) {
                console.log('Skipping this event, already processed', interactionId)
                endActivityGenerated = true
              } else {
                // check the time of this event has passed
                if (thisTime.time < cutoffTime) {
                  if (event === INTER_AT_END) {
                    endActivityGenerated = true
                  }
                  eventList.push({
                    id: interactionId,
                    event: event,
                    message: plan,
                    time: thisTime.time,
                    timeStr: moment(thisTime.time).toISOString(),
                    activity: activity,
                    geomId: thisTime.geometry
                  })
                }
              }
            }
          })
        }
        if (!endActivityGenerated) {
          // does this activity end in a line-string?
          const locData = plan.message.location
          if (locData && locData.length > 0 && endsWithMovement(locData)) {
            const interactionId = generateEventId(plan._id, INTER_AT_END, turnNumber)
            // check it hasn't already been processed
            if (interactionIDs.includes(interactionId)) {
              console.log('Skipping this event 2, already processed', interactionId)
            } else {
              const planned = locData[locData.length - 1]
              if (planned) {
                // note: since it's the end of the last leg, it's actually the end of the orders, too
                const endDate = plan.message.endDate
                const endTime = moment(endDate).valueOf()
                // check it's not outside our window
                if (endTime < cutoffTime) {
                  // ok - generate a movement outcome
                  eventList.push({
                    id: interactionId,
                    event: INTER_AT_END,
                    message: plan,
                    time: endTime,
                    timeStr: endDate,
                    activity: activity,
                    geomId: planned.uniqid
                  })
                }
              }
            }
          }
        }
      }
    }
  })
  return eventList
}

export const emptyOutcomes = (): MessageAdjudicationOutcomes => {
  return {
    healthOutcomes: [],
    locationOutcomes: [],
    perceptionOutcomes: [],
    narrative: '',
    important: false,
    Reference: '',
    messageType: ADJUDICATION_OUTCOMES
  }
}

export const checkForEvent = (cutoffTime: number, orders: MessagePlanning[], interactionIDs: string[],
  activities: PerForcePlanningActivitySet[], forces: ForceData[], turn: TurnTimes, turnNumber: number): ShortCircuitEvent | undefined => {
  console.log('look for event before', moment.utc(cutoffTime).toISOString())

  const eventList = getEventList(cutoffTime, orders, interactionIDs, activities, turn, turnNumber)
  // console.table(eventList.map((event) => {
  //   return {
  //     id: event.message.message.Reference,
  //     time: event.timeStr,
  //     ref: event.message.message.Reference,
  //     type: event.message.details.interaction && event.message.details.interaction.event
  //   }
  // }))
  if (eventList.length) {
    // sort in ascending
    const sorted = _.sortBy(eventList, function (inter) { return inter.time })
    const firstEvent = sorted[0]
    const eventTime = firstEvent.time

    if (eventTime <= cutoffTime) {
      const contact = sorted[0].message

      // sort out the outcomes
      const outcomes = eventOutcomesFor(contact, emptyOutcomes(), firstEvent.activity, forces, firstEvent.event)
      const res: ShortCircuitEvent = {
        id: firstEvent.id,
        message: contact,
        event: firstEvent.event,
        timeStart: eventTime,
        timeEnd: eventTime,
        intersection: undefined,
        outcomes: outcomes,
        activity: firstEvent.activity,
        geomId: firstEvent.geomId
      }
      return res
    } else {
      // events found, but not before start time
    }
  }
  return undefined
}

export const formatDuration = (millis: number): string => {
  return parseInt(moment.utc(millis).format('DDD')) - 1 + ' ' + moment.utc(millis).format('HH:mm:ss.SSS')
}

const ordersLiveIn = (orders: MessagePlanning[], gameTimeVal: number, gameTurnEndVal: number): MessagePlanning[] => {
  return orders.filter((plan: MessagePlanning) => {
    const startD = moment.utc(plan.message.startDate).valueOf()
    const endD = moment.utc(plan.message.endDate).valueOf()
    return startD < gameTurnEndVal && endD > gameTimeVal
  })
}

export type CompositeInteractionResults = { details: InteractionDetails, outcomes: MessageAdjudicationOutcomes }
export type InteractionResults = CompositeInteractionResults | [TimedIntervention[], PlanningContact[]] | undefined

const startBeforeTime = (msg: GeomWithOrders, time: number) => {
  const props = msg.geometry.properties as PlannedProps
  return props.startTime < time
}

const endAfterTime = (msg: GeomWithOrders, time: number) => {
  const props = msg.geometry.properties as PlannedProps
  return props.endTime > time
}

const listPlans = (orders: MessagePlanning[], gameTime: string): void => {
  console.log('---- ' + gameTime + ' -------')
  const dateFor = (date: string): string => {
    return moment.utc(date).format('MMM DDHHmm[Z]')
  }
  const colsFor = (plan: MessagePlanning): Record<string, string> => {
    const startD = moment(plan.message.startDate).valueOf()
    const endD = moment(plan.message.endDate).valueOf()
    return {
      ref: plan.message.Reference,
      start: dateFor(plan.message.startDate),
      mid: dateFor(moment.utc(roundedRandomTime(startD, endD)).toISOString()),
      end: dateFor(plan.message.endDate)
    }
  }
  const sortAsc = _.sortBy(orders, (order: MessagePlanning) => order.message.startDate)
  console.table(sortAsc.map((plan: MessagePlanning) => {
    return colsFor(plan)
  }))
}

const contactDetails = (contact: PlanningContact): InteractionDetails => {
  const props1 = contact.first.geometry.properties as PlannedProps
  const props2 = contact.second.geometry.properties as PlannedProps
  const res: InteractionDetails = {
    id: contact.id,
    orders1: contact.first.plan._id,
    orders1Geometry: props1.geomId,
    orders2: contact.second.plan._id,
    orders2Geometry: props2.geomId,
    startTime: moment(contact.timeStart).toISOString(),
    endTime: moment(contact.timeEnd).toISOString(),
    geometry: contact.intersection,
    otherAssets: [],
    complete: false
  }
  return res
}

const insertOutcomes = (interaction: InteractionDetails, geom: GeomWithOrders, geom2: GeomWithOrders | undefined, outcomes: MessageAdjudicationOutcomes, activities: PerForcePlanningActivitySet[],
  forces: ForceData[]) => {
  //  console.log('insert outcomes', geom, outcomes)
  // get the activity
  const props = geom.geometry.properties as PlannedProps
  const activBlock = props.id
  const activeName = activBlock.substring(0, activBlock.indexOf('//'))
  const forceId = geom.plan.details.from.forceId || ''
  const forceActs = activities.find((set) => set.force === forceId)
  if (!forceActs) {
    console.log('Failed to find force activities for', forceActs)
    return
  }
  const activity = findActivity(activeName, forceActs)
  if (!activity) {
    console.log('Failed to find activity for 2', activeName)
    return
  }
  const thisG = activity.geometries && activity.geometries.find((geo) => geo.uniqid === props.geomId)
  switch (activeName) {
    case 'ISTAR': {
      insertIstarInteractionOutcomes(interaction, geom, geom2, outcomes, thisG, activity, forces)
    }
  }
}

const contactOutcomes = (interaction: InteractionDetails, contact: PlanningContact, activities: PerForcePlanningActivitySet[],
  forces: ForceData[]): MessageAdjudicationOutcomes => {
  const res: MessageAdjudicationOutcomes = contact.outcomes || {
    messageType: ADJUDICATION_OUTCOMES,
    Reference: '', // leave blank, so backend creates it
    narrative: '',
    important: false,
    perceptionOutcomes: [],
    locationOutcomes: [],
    healthOutcomes: []
  }
  const orders1 = contact.first
  const orders2 = contact.second
  insertOutcomes(interaction, orders1, orders2, res, activities, forces)

  if (orders2) {
    insertOutcomes(interaction, orders2, orders1, res, activities, forces)
  }
  return res
}

export const getNextInteraction2 = (orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[],
  _ctr: number, sensorRangeKm: number, gameTime: string, gameTurnEnd: string,
  forces: ForceData[], getAll: boolean, turnNumber: number): InteractionResults => {
  const gameTimeVal = moment(gameTime).valueOf()
  const gameTurnEndVal = moment(gameTurnEnd).valueOf()

  const turnPeriod: TurnTimes = { start: gameTimeVal, end: gameTurnEndVal }

  const earliestTime = interactions.length ? timeOfLatestInteraction(interactions) : gameTimeVal

  const existingInteractionIDs = interactions.map((val) => {
    const inter = val.details.interaction
    if (!inter) {
      throw Error('Interaction missing')
    }
    return inter.id
  })

  !7 && listPlans(orders, gameTime)

  console.log('earliest time', gameTime, gameTurnEnd, moment(earliestTime).toISOString(), ' interactions:', interactions.length)
  !7 && console.log(orders, activities, sensorRangeKm, getAll, earliestTime)

  // see if a short-circuit is overdue
  const event = !getAll && checkForEvent(gameTimeVal, orders, existingInteractionIDs, activities, forces, turnPeriod, turnNumber)
  console.log('event found?', !!event)

  if (event && event.timeStart <= gameTimeVal) {
    // return the short-circuit interaction
    const details: InteractionDetails = {
      id: event.id,
      orders1: event.message._id,
      event: event.event,
      startTime: moment.utc(event.timeStart).toISOString(),
      endTime: moment.utc(event.timeEnd).toISOString(),
      complete: false,
      orders1Geometry: event.geomId
    }
    const outcomes = eventOutcomesFor(event.message, emptyOutcomes(), event.activity, forces, event.event)
    if (outcomes.otherAssets) {
      details.otherAssets = outcomes.otherAssets
      delete outcomes.otherAssets
    }
    console.log('Gen 3 - Found event that should have already been processed', details.id, details.startTime)
    return { details: details, outcomes: outcomes }
  } else {
    // generate any special orders
    const specialOrders = createSpecialOrders(gameTimeVal, orders, interactions)

    const fullOrders = specialOrders.length > 0 ? orders.concat(specialOrders) : orders

    const fullTurnLength = gameTurnEndVal - gameTimeVal
    const windowMilliSize = getAll ? fullTurnLength : fullTurnLength / 20
    let currentWindowLength = windowMilliSize

    const contacts: PlanningContact[] = []
    let eventInWindow: ShortCircuitEvent | undefined
    let allRemainingEvents: TimedIntervention[] = []

    console.log('about to start looping for interaction, window size:', fullTurnLength, currentWindowLength,
      moment.utc(fullTurnLength).format('d HH:mm'), moment.utc(currentWindowLength).format('d HH:mm'))

    while (contacts.length === 0 && currentWindowLength <= fullTurnLength && eventInWindow === undefined) {
      const windowEnd = gameTimeVal + currentWindowLength

      // if we're doing get-all, don't bother with shortcircuits
      if (getAll) {
        console.log('doing get all to finish before', moment.utc(windowEnd).toISOString())
        allRemainingEvents = getEventList(windowEnd, orders, existingInteractionIDs, activities, turnPeriod, turnNumber)
      } else {
        eventInWindow = checkForEvent(windowEnd, orders, existingInteractionIDs, activities, forces, turnPeriod, turnNumber)
        console.log('found event in window?:', !!eventInWindow, eventInWindow && eventInWindow.id, moment(windowEnd).toISOString(), eventInWindow && moment(eventInWindow.timeStart).toISOString())
      }

      // trim for 'live' orders
      const liveOrders = ordersLiveIn(fullOrders, gameTimeVal, windowEnd)
      console.log('window size', moment(gameTimeVal).toISOString(), moment(windowEnd).toISOString(), fullOrders.length, liveOrders.length)

      const newGeometries = invertMessages(liveOrders, activities)
      const withTimes = injectTimes(newGeometries)
      const geometriesInTimeWindow = withTimes.filter((val) => startBeforeTime(val, windowEnd)).filter((val) => endAfterTime(val, gameTimeVal))
      console.log('Filtered geoms in window from', withTimes.length, 'to', geometriesInTimeWindow.length)
      // console.table(liveOrders.map((plan: MessagePlanning) => {
      //   return {
      //     id: plan._id,
      //     start: plan.message.startDate,
      //     end: plan.message.endDate
      //   }
      // }))

      //      const geometriesInTimeWindow = findPlannedGeometries(trimmedGeoms, earliestTime, currentWindowMillis)

      // const timeEnd = moment(earliestTime).add(currentWindowMillis, 'ms')
      // console.log('geoms in this window:', moment(earliestTime).toISOString(), timeEnd.toISOString(), ' windows size (millis):', currentWindowMillis, 'matching geoms:', geometriesInTimeWindow.length)
      //  console.table(withTimes.map((value) => { return { id: value.id, time: value.geometry.properties && moment(value.geometry.properties.startTime).toISOString() } }))

      // now do spatial binning
      const bins = spatialBinning(geometriesInTimeWindow, 4)
      const binnedOrders = putInBin(geometriesInTimeWindow, bins)

      const interactionsConsidered: string[] = []
      const interactionsTested: Record<string, PlanningContact | null> = {}
      // console.log('Existing interactions received', existingInteractionIDs.length)

      binnedOrders.forEach((bin: SpatialBin, _index: number) => {
        // console.log('bin', _index, bin.orders.length)
        // console.table(bin.orders.map((geom) => {
        //   const props = geom.geometry.properties as PlannedProps
        //   return {
        //     id: geom.id,
        //     force: geom.force,
        //     geom: geom.geometry.type,
        //     start: props.startDate,
        //     end: props.endDate
        //   }
        // }))
        const newContacts = findTouching(bin.orders, interactionsConsidered, existingInteractionIDs,
          interactionsTested, sensorRangeKm)
        !7 && console.log('bin', _index, bin.orders.length, newContacts.length, interactionsConsidered.length)
        contacts.push(...newContacts)
      })

      // console.log('binning complete, contacts:', contacts.length)

      currentWindowLength += windowMilliSize
    }

    // special handling for get-all
    if (getAll) {
      // collate the data
      return [allRemainingEvents, contacts]
    } else {
    // do we have any contacts?
      if (contacts.length !== 0) {
      // sort ascending
        const sortedContacts = _.sortBy(contacts, function (contact) { return moment.utc(contact.timeStart).valueOf() })
        const firstContact = sortedContacts[0]

        console.log('contact', firstContact)

        // just check there isn't a short-circuit before this
        if (eventInWindow !== undefined) {
          const eventTime = eventInWindow.timeStart
          const contactTime = firstContact.timeStart
          if (eventTime < contactTime) {
            console.log('Gen 3 - Have contacts and event, but Event occurs first', eventInWindow.id)
            // ok, return it
            // return the short-circuit interaction
            const details: InteractionDetails = {
              id: eventInWindow.id,
              event: eventInWindow.event,
              orders1: eventInWindow.message._id,
              orders1Geometry: eventInWindow.geomId,
              startTime: moment.utc(eventInWindow.timeStart).toISOString(),
              endTime: moment.utc(eventInWindow.timeEnd).toISOString(),
              complete: false
            }
            const outcomes = eventOutcomesFor(eventInWindow.message, emptyOutcomes(), eventInWindow.activity, forces, eventInWindow.event)
            if (outcomes.otherAssets) {
              details.otherAssets = outcomes.otherAssets
              delete outcomes.otherAssets
            }
            return { details: details, outcomes: outcomes }
          } else {
            console.log('Gen 3 - Have contacts and event, but Contact occurs first', firstContact.id, moment(firstContact.timeStart).toISOString(), moment(firstContact.timeEnd).toISOString())
            const details = contactDetails(firstContact)
            const outcomes = contactOutcomes(details, firstContact, activities, forces)
            return { details: details, outcomes: outcomes }
          }
        } else {
          console.log('Gen 3 - Have contacts, but no event found', firstContact.id)
          const details = contactDetails(firstContact)
          const outcomes = contactOutcomes(details, firstContact, activities, forces)
          return { details: details, outcomes: outcomes }
        }
      } else if (eventInWindow) {
        console.log('Gen 3 - Have event, but no contacts', eventInWindow.id)
        const details: InteractionDetails = {
          id: eventInWindow.id,
          event: eventInWindow.event,
          orders1: eventInWindow.message._id,
          startTime: moment.utc(eventInWindow.timeStart).toISOString(),
          endTime: moment.utc(eventInWindow.timeEnd).toISOString(),
          otherAssets: [],
          complete: false
        }
        const outcomes = eventOutcomesFor(eventInWindow.message, emptyOutcomes(), eventInWindow.activity, forces, eventInWindow.event)
        if (outcomes.otherAssets) {
          details.otherAssets = outcomes.otherAssets
          delete outcomes.otherAssets
        }
        return { details: details, outcomes: outcomes }
      } else {
        return undefined
      }
    }
  }
}
