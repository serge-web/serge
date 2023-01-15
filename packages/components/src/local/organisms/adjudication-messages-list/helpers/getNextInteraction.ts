import { INTER_AT_END, INTER_AT_RANDOM, INTER_AT_START } from '@serge/config'
import { Asset, ForceData, GroupedActivitySet, HealthOutcome, InteractionDetails, INTERACTION_SHORT_CIRCUIT, MessageAdjudicationOutcomes, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedProps, PlanningActivity } from '@serge/custom-types'
import * as turf from '@turf/turf'
import _ from 'lodash'
import moment from 'moment'
import { findTouching, GeomWithOrders, injectTimes, invertMessages, PlanningContact, putInBin, ShortCircuitEvent, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'

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
  return moment(date).valueOf()
}

export const createSpecialOrders = (gameTime: number, orders: MessagePlanning[], interactions: MessageInteraction[]): MessagePlanning[] => {
  !7 && console.log(gameTime, orders, interactions)
  return []
}

export const findActivity = (name: string, activities: PerForcePlanningActivitySet): PlanningActivity => {
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
    console.log('act', activities.force, activities.groupedActivities[0].activities[0].actId)
    throw Error('Failed to find group activities for this activity:' + name)
  }
  return res
}

const timeFor = (plan: MessagePlanning, activity: PlanningActivity, iType: INTERACTION_SHORT_CIRCUIT): number => {
  // do we have routing?
  if (activity.geometries && activity.geometries.length) {
    // for `first`, use end-time of route-out (first line geometry)
    // for `last`, use start-time of route-back (last line geometry)
    // for `random` create period between `first` and `last`
    console.warn('NOT YET IMPLEMENTED - GETTING TIME FROM GEOMETRIES')
  } else {
    // just use overall message timing
    const tStart = moment.utc(plan.message.startDate).valueOf()
    const tEnd = moment.utc(plan.message.endDate).valueOf()
    switch (iType) {
      case INTER_AT_END:
        return tEnd
      case INTER_AT_START:
        return tStart
      case INTER_AT_RANDOM:
      default: {
        const delta = tEnd - tStart
        return tStart + (Math.random() * delta)
      }
    }
  }
  return -1
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

const strikeOutcomesFor = (plan: MessagePlanning, activity: PlanningActivity, forces: ForceData[], gameTime: number, id: string): MessageAdjudicationOutcomes => {
  const protectedTargets: Array<ProtectedTarget> = []
  const res: MessageAdjudicationOutcomes = {
    messageType: 'AdjudicationOutcomes',
    Reference: id,
    important: false,
    narrative: '',
    healthOutcomes: [],
    perceptionOutcomes: [],
    locationOutcomes: []
  }
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
      const health: HealthOutcome = {
        asset: target.asset,
        health: 50
      }
      res.healthOutcomes.push(health)
    })
    !7 && console.log(plan, activity, forces, gameTime)
  }

  if (protectedTargets.length) {
    const message = protectedTargets.map((prot: ProtectedTarget) => {
      return prot.target.name + ' protected by ' + prot.protectedBy.map((asset: Asset) => '' + asset.name + ' (' + asset.uniqid + ')').join(', ') + '\n'
    })
    res.narrative += message

    // store the other assets
    const otherAssets: Array<Asset['uniqid']> = []
    protectedTargets.forEach((tgt: ProtectedTarget) => {
      tgt.protectedBy.forEach((asset: Asset) => {
        if (!otherAssets.includes(asset.uniqid)) {
          otherAssets.push(asset.uniqid)
        }
      })
    })
    res.otherAssets = otherAssets
  }
  return res
}

const outcomesFor = (plan: MessagePlanning, activity: PlanningActivity, forces: ForceData[], gameTime: number, id: string): MessageAdjudicationOutcomes => {
  switch (activity.actId) {
    case 'STRIKE': {
      return strikeOutcomesFor(plan, activity, forces, gameTime, id)
    }
    default: {
      console.warn('outcomes not generated for activity', activity.actId)
    }
  }
  return {
    healthOutcomes: [],
    locationOutcomes: [],
    perceptionOutcomes: [],
    narrative: 'Pending',
    important: false,
    messageType: 'AdjudicationOutcomes',
    Reference: id
  }
}

export const checkForEvent = (gameTime: number, orders: MessagePlanning[], interactionIDs: string[],
  activities: PerForcePlanningActivitySet[], forces: ForceData[]): ShortCircuitEvent | undefined => {
  interface TimedIntervention {
    // id of the interaction (composite of planning message & event)
    id: string
    time: number
    timeStr: string
    message: MessagePlanning
    activity: PlanningActivity
  }

  console.log('look for event before', moment.utc(gameTime).toISOString())

  // loop through plans
  const eventList: TimedIntervention[] = []
  orders.forEach((plan: MessagePlanning) => {
    const force = plan.details.from.forceId
    const forceActivities = activities.find((act: PerForcePlanningActivitySet) => act.force === force)
    if (forceActivities) {
      const actName = plan.message.activity
      const activity = findActivity(actName, forceActivities)
      const activityEvents = activity.events
      if (activityEvents) {
        activityEvents.forEach((short: INTERACTION_SHORT_CIRCUIT) => {
          const thisTime = timeFor(plan, activity, short)
          if (thisTime) {
            const interactionId = plan._id + ' ' + short
            // check this hasn't been processed already
            if (interactionIDs.find((id: string) => id === interactionId)) {
              console.log('Skipping this event, already processed', interactionId)
            } else {
              // check the time of this event has passed
              if (thisTime <= gameTime) {
                eventList.push({ time: thisTime, message: plan, timeStr: moment(thisTime).toISOString(), activity: activity, id: interactionId })
              }
            }
          }
        })
      }
    }
  })

  if (eventList.length) {
    // sort in ascending
    const sorted = _.sortBy(eventList, function (inter) { return inter.time })
    const firstEvent = sorted[0]
    const eventTime = firstEvent.time

    if (eventTime <= gameTime) {
      const contact = sorted[0].message

      // sort out the outcomes
      const outcomes = outcomesFor(contact, firstEvent.activity, forces, gameTime, firstEvent.id)
      const res: ShortCircuitEvent = {
        id: firstEvent.id,
        message: contact,
        timeStart: eventTime,
        timeEnd: eventTime,
        intersection: undefined,
        outcomes: outcomes,
        activity: firstEvent.activity
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
export type InteractionResults = CompositeInteractionResults | number | undefined

const startBeforeTime = (msg: GeomWithOrders, time: number) => {
  const props = msg.geometry.properties as PlannedProps
  return props.startTime < time
}

const endAfterTime = (msg: GeomWithOrders, time: number) => {
  const props = msg.geometry.properties as PlannedProps
  return props.endTime > time
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
      startTime: moment.utc(event.timeStart).toISOString(),
      endTime: moment.utc(event.timeEnd).toISOString(),
      complete: false
    }
    const outcomes = outcomesFor(event.message, event.activity, forces, gameTimeVal, event.id)
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

    console.log('about to start looping for interaction, window size:', fullTurnLength, currentWindowMillis, moment.utc(fullTurnLength).format('d HH:mm'), moment.utc(currentWindowMillis).format('d HH:mm'))

    while (contacts.length === 0 && currentWindowMillis <= fullTurnLength && eventInWindow === undefined) {
      const windowEnd = gameTimeVal + currentWindowMillis

      // if we're doing get-all, don't bother with shortcircuits
      if (!getAll) {
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
        const newContacts = findTouching(bin.orders, interactionsConsidered, existingInteractionIDs,
          interactionsTested, sensorRangeKm)
        contacts.push(...newContacts)
        !7 && console.log('bin', _index, bin.orders.length, newContacts.length, interactionsConsidered.length)
      })

      // console.log('binning complete, contacts:', contacts.length)

      currentWindowMillis *= 2
    }

    // do we have any contacts?
    if (contacts.length !== 0) {
      // sort ascending
      const sortedContacts = _.sortBy(contacts, function (contact) { return moment.utc(contact.timeStart).valueOf() })
      const firstContact = sortedContacts[0]

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
            orders1: eventInWindow.message._id,
            startTime: moment.utc(eventInWindow.timeStart).toISOString(),
            endTime: moment.utc(eventInWindow.timeEnd).toISOString(),
            complete: false
          }
          const outcomes = outcomesFor(eventInWindow.message, eventInWindow.activity, forces, gameTimeVal, eventInWindow.id)
          if (outcomes.otherAssets) {
            details.otherAssets = outcomes.otherAssets
            delete outcomes.otherAssets
          }
          return { details: details, outcomes: outcomes }
        } else {
          console.log('Gen 3 - Have contacts and event, but Contact occurs first', firstContact.id, moment(firstContact.timeStart).toISOString(), moment(firstContact.timeEnd).toISOString())
          const details = contactDetails(firstContact)
          const outcomes = contactOutcomes(firstContact)
          return { details: details, outcomes: outcomes }
        }
      } else {
        console.log('Gen 3 - Have contacts, but no event found', firstContact.id)
        if (getAll) {
          return contacts.length
        } else {
          const details = contactDetails(firstContact)
          const outcomes = contactOutcomes(firstContact)
          return { details: details, outcomes: outcomes }
        }
      }
    } else if (eventInWindow) {
      console.log('Gen 3 - Have event, but no contacts', eventInWindow.id)
      const details: InteractionDetails = {
        id: eventInWindow.id,
        orders1: eventInWindow.message._id,
        startTime: moment.utc(eventInWindow.timeStart).toISOString(),
        endTime: moment.utc(eventInWindow.timeEnd).toISOString(),
        otherAssets: [],
        complete: false
      }
      const outcomes = outcomesFor(eventInWindow.message, eventInWindow.activity, forces, gameTimeVal, eventInWindow.id)
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

const contactDetails = (contact: PlanningContact): InteractionDetails => {
  const res: InteractionDetails = {
    id: contact.id,
    orders1: contact.first.activity._id,
    orders2: contact.second ? contact.second.activity._id : undefined,
    startTime: moment(contact.timeStart).toISOString(),
    endTime: moment(contact.timeEnd).toISOString(),
    geometry: contact.intersection,
    otherAssets: [],
    complete: false
  }
  return res
}

const contactOutcomes = (contact: PlanningContact): MessageAdjudicationOutcomes => {
  const res: MessageAdjudicationOutcomes = contact.outcomes || {
    messageType: 'AdjudicationOutcomes',
    Reference: contact.first.id + '-' + contact.second.id,
    narrative: '',
    important: false,
    perceptionOutcomes: [],
    locationOutcomes: [],
    healthOutcomes: []
  }
  return res
}

// export const getNextInteraction = (orders: MessagePlanning[],
//   activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[], _ctr: number, sensorRangeKm: number, getAll?: boolean): PlanningContact[] => {
//   const earliestTime = interactions.length ? timeOfLatestInteraction(interactions) : timeOfStartOfFirstPlan(orders)

//   // console.log('earliest time', moment(earliestTime).toISOString())
//   // console.table(trimmedOrders.map((inter) => {
//   //   return {id: inter._id, start: inter.message.startDate, end: inter.message.endDate, force: inter.details.from.forceId}
//   // }))

//   const newGeometries = invertMessages(orders, activities)
//   const withTimes = injectTimes(newGeometries)

//   // console.log('geoms', orders, newGeometries, withTimes)

//   const trimmedGeoms = withTimes // .filter((val) => startBeforeTime(val)).filter((val) => endAfterTime(val))

//   //  console.log('get next a', orders.length, trimmedOrders.length)
//   // console.log('get interaction', orders, interactions)
//   // console.table(interactions.map((order) => {
//   //   return { force: order.details.interaction?.startTime }
//   // }))

//   console.log('Get Next. Ctr:' + _ctr + ' orders:' + orders.length + ' Interactions:', interactions.length, ' earliest:', moment(earliestTime).toString(), !7 && !!tStart && !!tEnd)

//   // console.table(trimmedGeoms.map((val) => {
//   //   // return { id: val._id, start: val.message.startDate, end: val.message.endDate }
//   //   return { geometry: val.id, start: val.activity.message.startDate, end: val.activity.message.endDate, force: val.force }
//   // }))

//   // calculate suitable window. First 10%?
//   const latestTime = timeOfEndOfLastPlan(orders)
//   const diffMins = moment.duration(moment(latestTime).diff(moment(earliestTime))).asMinutes()

//   // console.log('timings', moment(earliestTime).toISOString(), moment(latestTime).toISOString(), diffMins)
//   // console.table(orders.map((order) => {
//   //   return { endTime: order.message.endDate }
//   // }))

//   let interactionWindow = getAll ? diffMins : Math.max(diffMins / 10, 60)
//   const contacts: PlanningContact[] = []

//   // console.log('inter window', interactionWindow, diffMins, moment(earliestTime).toISOString(), moment(latestTime).toISOString())

//   while (contacts.length === 0 && interactionWindow <= diffMins) {
//     const geometriesInTimeWindow = findPlannedGeometries(trimmedGeoms, earliestTime, interactionWindow)

//     const timeEnd = moment(earliestTime).add(interactionWindow, 'm')
//     console.log('geoms in this window:', moment(earliestTime).toISOString(), timeEnd.toISOString(), ' windows size (mins):', interactionWindow, 'matching geoms:', geometriesInTimeWindow.length)
//     //  console.table(withTimes.map((value) => { return { id: value.id, time: value.geometry.properties && moment(value.geometry.properties.startTime).toISOString() } }))

//     // now do spatial binning
//     const bins = spatialBinning(geometriesInTimeWindow, 4)
//     const binnedOrders = putInBin(geometriesInTimeWindow, bins)

//     const interactionsProcessed = interactions.map((val) => {
//       const inter = val.details.interaction
//       if (!inter) {
//         throw Error('Interaction missing')
//       }
//       return inter.id
//     })
//     const interactionsConsidered: string[] = []
//     const interactionsTested: Record<string, PlanningContact | null> = {}

//     binnedOrders.forEach((bin: SpatialBin, _index: number) => {
//       // console.log('process bin', _index, bin.orders.length, contacts.length)
//       const newContacts = findTouching(bin.orders, interactionsConsidered, interactionsProcessed,
//         interactionsTested, sensorRangeKm)
//       contacts.push(...newContacts)
//     })

//     interactionWindow *= 2
//   }

//   if (contacts.length > 0) {
//     if (getAll) {
//       return contacts
//     } else {
//       //    console.log('got contacts', Math.floor(interactionWindow), contacts.length, contacts[0].id)
//       // sort then
//       const sortFunc = (order: PlanningContact): number => {
//         return order.timeStart
//       }
//       const sortedContacts: PlanningContact[] = _.sortBy(contacts, sortFunc)
//       // console.table(sortedContacts.map((value) => { return { id: value.id, time: moment(value.timeStart).toISOString() } }))
//       const first = sortedContacts[0]
//       return [first]
//     }
//   } else {
//     return []
//   }
// }
