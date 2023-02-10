import { ADJUDICATION_OUTCOMES, GeometryType, INTER_AT_END, INTER_AT_RANDOM, INTER_AT_START } from '@serge/config'
import { Asset, AssetWithForce, CoreOutcome, ForceData, GroupedActivitySet, HealthOutcome, InteractionDetails, INTERACTION_SHORT_CIRCUIT, LocationOutcome, MessageAdjudicationOutcomes, MessageInteraction, MessagePlanning, PerceptionOutcome, PerceptionOutcomes, PerForcePlanningActivitySet, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { findAsset, findForceAndAsset } from '@serge/helpers'
import * as turf from '@turf/turf'
import { Feature, Geometry, LineString, Polygon } from 'geojson'
import _ from 'lodash'
import moment from 'moment'
import { findTouching, GeomWithOrders, injectTimes, invertMessages, PlanningContact, putInBin, ShortCircuitEvent, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'
import { calculateDetections, checkInArea, insertIstarInteractionOutcomes, istarBoundingBox } from './istar-helper'

type TimePlusGeometry = { time: number, geometry: PlannedActivityGeometry['uniqid'] | undefined }

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

export const findActivity = (name: string, activities: PerForcePlanningActivitySet): PlanningActivity | undefined => {
  let res: PlanningActivity | undefined
  activities.groupedActivities.find((group: GroupedActivitySet) => {
    group.activities.find((plan: PlanningActivity) => {
      if (name.endsWith(plan.name)) {
        res = plan
      }
      return res
    })
    return res
  })
  if (!res) {
    console.warn('Failed to find group activities for this activity:', name)
    return undefined
  }
  return res
}

export const timeForActivity = (plan: MessagePlanning, activity: PlanningActivity, iType: INTERACTION_SHORT_CIRCUIT): number => {
  console.log('time for', plan, activity, iType)
  return 1
}

const roundedRandomTime = (start: number, end: number): number => {
  // TODO: switch back to randomly generated time
  // const delta = Math.random() * (end - start)
  const delta = 0.5 * (end - start)
  const mins5 = 5 * 60 * 1000
  const rounded = Math.floor(delta / mins5) * mins5
  return start + rounded
}

const timeFor = (plan: MessagePlanning, activity: PlanningActivity, iType: INTERACTION_SHORT_CIRCUIT): TimePlusGeometry => {
  // do we have routing?
  if (activity.geometries && activity.geometries.length > 0) {
    // for `first`, use end-time of route-out (first line geometry)
    // for `last`, use start-time of route-back (last line geometry)
    // for `random` create period between `first` and `last`
    if (plan.message.location) {
      let period: [number, number] | undefined
      let geomName: string | undefined
      const allPolygons = activity.geometries.filter((plan: PlanningActivityGeometry) => plan.aType === GeometryType.polygon)
      const lastPolygon = allPolygons.length && allPolygons[allPolygons.length - 1]
      if (lastPolygon) {
        const plannedActivity = plan.message.location.find((planned: PlannedActivityGeometry) => planned.uniqid === lastPolygon.uniqid)
        if (plannedActivity) {
          const props = plannedActivity.geometry.properties as PlannedProps
          period = [props.startTime, props.endTime]
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
        period = [firstPeriod[0], lastPeriod[1]]
      }
      // work out the active time period
      switch (iType) {
        case INTER_AT_END:
          return { time: period[1], geometry: geomName }
        case INTER_AT_START:
          return { time: period[0], geometry: geomName }
        case INTER_AT_RANDOM:
          return { time: roundedRandomTime(period[0], period[1]), geometry: geomName }
      }
    } else {
      console.warn('Cannot breakdown activity, locations missing')
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
    case INTER_AT_RANDOM:
      return { time: roundedRandomTime(tStart[0], tEnd[1]), geometry: undefined }
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

const strikeEventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes, forces: ForceData[]): MessageAdjudicationOutcomes => {
  const protectedTargets: Array<ProtectedTarget> = []
  // loop through targets
  if (plan.message.otherAssets) {
    const ownForce = plan.details.from.forceId
    plan.message.otherAssets.forEach((target: { asset: string }) => {
      let tgtForce: ForceData | undefined
      let tgtAsset: Asset | undefined
      forces.find((force: ForceData) => {
        if (force.uniqid === ownForce) {
          return false
        } else {
          force.assets && force.assets.some((assetVal: Asset) => {
            if (assetVal.uniqid === target.asset) {
              tgtForce = force
              tgtAsset = assetVal
            }
            return tgtForce
          })
          return tgtForce
        }
      })
      if (tgtForce && tgtAsset) {
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
        } else {
          console.warn('Asset missing location')
        }
      }
      // create damage outcome for this asset
      const existingC4: 'None' | 'Degraded' | 'Operational' = (tgtAsset && tgtAsset.attributes && tgtAsset.attributes.a_C4_Status as 'None' | 'Degraded' | 'Operational') || 'Degraded'
      const health: HealthOutcome = {
        asset: target.asset,
        health: 50,
        c4: existingC4
      }
      outcomes.healthOutcomes.push(health)
    })
    !7 && console.log(plan, forces)
  }
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
  return outcomes
}

const transitEventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes, event: INTERACTION_SHORT_CIRCUIT | undefined): MessageAdjudicationOutcomes => {
  if (event === 'i-end' && plan.message.ownAssets && plan.message.location && plan.message.location.length === 1) {
    // ok, put the asset(s) at the destination
    const destGeom = plan.message.location[0].geometry.geometry as LineString
    const coords = destGeom.coordinates[destGeom.coordinates.length - 1]
    // clean (shorten) coords

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
        c4: newC4
      }
      outcomes.healthOutcomes.push(outCome)
    })
  }
  return outcomes
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
  // NOTE: for now, this is fixed
  const searchRateKm2perHour = 200000

  // run the calculator
  const inAreaPerceptions = calculateDetections(ownFor, forces, boxGeometry.geometry.geometry, startTime, endTime, searchRateKm2perHour, 'In observation area')

  // start off with the selected op-for assets
  const perceptions: PerceptionOutcomes = []
  const oppAssets = plan.message.otherAssets
  if (oppAssets) {
    const oppIDs = oppAssets.map((item: { asset: Asset['uniqid'], number?: number, missileType?: string }) => item.asset)
    const detIDs = inAreaPerceptions.map((det): Asset['uniqid'] => det.asset)
    const notDetected = oppIDs.filter((id: Asset['uniqid']) => {
      return !detIDs.includes(id)
    })
    const oppPerceptions = notDetected.map((assetId: string): PerceptionOutcome => {
      const item = findForceAndAsset(forces, assetId)
      return {
        force: plan.details.from.forceId || '',
        asset: item.asset.uniqid,
        perceivedLocation: JSON.stringify(item.asset.location),
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

const opForInArea = (forceId: ForceData['uniqid'], forces: ForceData[], mePoly: Feature<Polygon>, special?: string): AssetWithForce[] => {
  const assets: AssetWithForce[] = []
  const opFor = forces.filter((force) => force.assets && force.uniqid !== forceId)
  opFor.forEach((force) => {
    force.assets && force.assets.forEach((asset) => {
      if (asset.location) {
        if(checkInArea(mePoly, asset.location)) {
          assets.push({force, asset})
          special && asset.name === special && console.log(asset.name, asset.location, !!special)
        }
      }
    })
  })
  return assets  
}


export const insertSpatialOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes, 
activity: PlanningActivity, forces: ForceData[]): void => {
  const aGeoms = activity.geometries
  if (!aGeoms) {
    console.warn('Warning: orders have location, but not activity', plan._id, activity.uniqid)
  } else {
    // find the polys
    const polys = aGeoms.filter((geom) => geom.aType === GeometryType.polygon)
    if (polys.length) {
      // find the last poly
      const poly = polys[polys.length - 1]
      const polyIndex = aGeoms.indexOf(poly)
      const geom = plan.message.location && plan.message.location[polyIndex]
      if (!geom) {
        console.warn('Failed to find matching geometry')
      } else {
        // generate the shape
        const box = geom.geometry.geometry as Geometry as Polygon
        const coords = box.coordinates
        // calculate prob of detecting sometghing
        // convert the boundary to a turn object
        const mePoly = turf.polygon(coords)
      
        // find opFor assets within poly
        const special = undefined // 'Green:4'
        const assets = opForInArea(plan.details.from.forceId || '', forces, mePoly, special)

        special && console.table(assets.map((fAsset) => {
          const asset = fAsset.asset
          return {
            name: asset.name,
            id: asset.uniqid,
            loc: asset.location ? asset.location.join(':') : ''
          }
        }))

        const notPresent = (asset: Asset['uniqid'], outcomes: CoreOutcome[] ): boolean => {
          return !outcomes.find((outcome) => outcome.asset === asset)
        }
        if (assets.length) {
          assets.forEach((asset, index) => {
            const uniqid = asset.asset.uniqid
            if(activity.spatialHealth) {
              if (notPresent(uniqid, outcomes.healthOutcomes)){
                const existingC4 = (asset.asset.attributes && asset.asset.attributes.a_C4_Status as string) || undefined
                const newC4 = alterC4(existingC4, false)
                outcomes.healthOutcomes.push({
                  asset: uniqid,
                  health: asset.asset.health || 50,
                  c4: newC4,
                  narrative: 'Asset in area for ' + activity.uniqid
                })
                asset.asset.name === 'Green:4' && console.log('health', asset.asset, index)
              }
            }
            if (activity.spatialPerception) {
              if (notPresent(uniqid, outcomes.perceptionOutcomes)){
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
              }
            }
          })
        }
      }
    }
  }
}
const eventOutcomesFor = (plan: MessagePlanning, outcomes: MessageAdjudicationOutcomes, 
  activity: PlanningActivity, forces: ForceData[], event: INTERACTION_SHORT_CIRCUIT | undefined): MessageAdjudicationOutcomes => {
  switch (activity.actId) {
    case 'STRIKE': {
      return strikeEventOutcomesFor(plan, outcomes, forces)
    }
    case 'TRANSIT': {
      return transitEventOutcomesFor(plan, outcomes, event)
    }
    case 'ISTAR': {
      return istarEventOutcomesFor(plan, outcomes, forces)
    }
    case 'CYB/SPA':
    case 'EW': {
      return ewEventOutcomesFor(plan, outcomes, event, forces)
    }
    default: {
      console.warn('outcomes not generated for activity', activity.actId)
    }
  }
  // do we also have to insert assets in the target polygon?
  if((activity.spatialPerception || activity.spatialPerception) && plan.message.location && plan.message.location.length) {
    insertSpatialOutcomesFor(plan, outcomes, activity, forces)
  }
  return outcomes
}

interface TimedIntervention {
  // id of the interaction (composite of planning message & event)
  id: string
  time: number
  timeStr: string
  event: INTERACTION_SHORT_CIRCUIT
  message: MessagePlanning
  activity: PlanningActivity
  geomId: PlannedActivityGeometry['uniqid'] | undefined
}

const getEventList = (cutoffTime: number, orders: MessagePlanning[], interactionIDs: string[],
  activities: PerForcePlanningActivitySet[]): TimedIntervention[] => {
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
        if (activityEvents) {
          activityEvents.forEach((event: INTERACTION_SHORT_CIRCUIT) => {
            const thisTime = timeFor(plan, activity, event)
            if (thisTime) {
              const interactionId = plan._id + ' ' + event
              // check this hasn't been processed already
              if (interactionIDs.find((id: string) => id === interactionId)) {
                console.log('Skipping this event, already processed', interactionId)
              } else {
                // check the time of this event has passed
                if (thisTime.time <= cutoffTime) {
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
      }
    }
  })
  return eventList
}

const emptyOutcomes = (): MessageAdjudicationOutcomes => {
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
  activities: PerForcePlanningActivitySet[], forces: ForceData[]): ShortCircuitEvent | undefined => {
  console.log('look for event before', moment.utc(cutoffTime).toISOString())

  const eventList = getEventList(cutoffTime, orders, interactionIDs, activities)

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
export type InteractionResults = CompositeInteractionResults | [number, number] | undefined

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
    console.log('Failed to find activity for', activeName)
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
  _ctr: number, sensorRangeKm: number, gameTime: string, gameTurnEnd: string, forces: ForceData[], getAll: boolean): InteractionResults => {
  const gameTimeVal = moment(gameTime).valueOf()
  const gameTurnEndVal = moment(gameTurnEnd).valueOf()
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
  const event = !getAll && checkForEvent(gameTimeVal, orders, existingInteractionIDs, activities, forces)
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
    let currentWindowMillis = getAll ? fullTurnLength : fullTurnLength / 20

    const contacts: PlanningContact[] = []
    let eventInWindow: ShortCircuitEvent | undefined
    let allRemainingEvents: TimedIntervention[] = []

    console.log('about to start looping for interaction, window size:', fullTurnLength, currentWindowMillis, moment.utc(fullTurnLength).format('d HH:mm'), moment.utc(currentWindowMillis).format('d HH:mm'))

    while (contacts.length === 0 && currentWindowMillis <= fullTurnLength && eventInWindow === undefined) {
      const windowEnd = gameTimeVal + currentWindowMillis

      // if we're doing get-all, don't bother with shortcircuits

      if (getAll) {
        allRemainingEvents = getEventList(windowEnd, orders, existingInteractionIDs, activities)
      } else {
        eventInWindow = checkForEvent(windowEnd, orders, existingInteractionIDs, activities, forces)
        console.log('found event in window?:', !!eventInWindow, moment(windowEnd).toISOString(), eventInWindow && moment(eventInWindow.timeStart).toISOString())
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

      currentWindowMillis *= 2
    }

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
        if (getAll) {
          return [allRemainingEvents.length, contacts.length]
        } else {
          const details = contactDetails(firstContact)
          const outcomes = contactOutcomes(details, firstContact, activities, forces)
          return { details: details, outcomes: outcomes }
        }
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

