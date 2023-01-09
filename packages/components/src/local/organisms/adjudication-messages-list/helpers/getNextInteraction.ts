import { INTER_AT_END, INTER_AT_RANDOM, INTER_AT_START } from '@serge/config'
import { GroupedActivitySet, INTERACTION_SHORT_CIRCUIT, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedProps, PlanningActivity } from '@serge/custom-types'
import { Feature, Geometry } from 'geojson'
import _ from 'lodash'
import moment from 'moment'
import { findPlannedGeometries, findTouching, injectTimes, invertMessages, PlanningContact, putInBin, ShortCircuitInteraction, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'

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

const timeOfStartOfFirstPlan = (orders: MessagePlanning[]): number => {
  if (!orders.length) {
    throw Error('should not be called with zero length orders')
  }
  const sortFunc = (order: MessagePlanning) => {
    return moment(order.message.startDate).valueOf()
  }
  const sorted = _.sortBy(orders, sortFunc)
  return sortFunc(sorted[0])
}

const timeOfEndOfLastPlan = (orders: MessagePlanning[]): number => {
  if (!orders.length) {
    throw Error('should not be called with zero length orders')
  }
  const reverseSortFunc = (order: MessagePlanning) => {
    return -moment(order.message.endDate).valueOf()
  }
  const sortFunc = (order: MessagePlanning) => {
    return moment(order.message.endDate).valueOf()
  }
  const sorted = _.sortBy(orders, reverseSortFunc)
  return sortFunc(sorted[0])
}

const tStart = (geom: Feature<Geometry>): string => {
  const props = geom.properties as PlannedProps
  return 'Start:' + props.startDate
}
const tEnd = (geom: Feature<Geometry>): string => {
  const props = geom.properties as PlannedProps
  return 'End:' + props.endDate
}

export const createSpecialOrders = (gameTime: number, orders: MessagePlanning[], interactions: MessageInteraction[]): MessagePlanning[] => {
  !7 && console.log(gameTime, orders, interactions)
  return []
}

export const findActivity = (name: string, activities: PerForcePlanningActivitySet): PlanningActivity => {
  let res: PlanningActivity | undefined
  activities.groupedActivities.find((group: GroupedActivitySet) => {
    group.activities.find((plan: PlanningActivity) => {
      if(plan.name === name) {
        res = plan
      }
      return res
    })
    return res
  })
  if (!res) {
    throw Error('Failed to find group activities for this activity:' + name)
  }
  return res
}

const timeFor = (plan: MessagePlanning, activity: PlanningActivity, iType: INTERACTION_SHORT_CIRCUIT): number => {
  // do we have routing?
  if(activity.geometries && activity.geometries.length) {
    console.warn('NOT IMPLEMENTED - GETTING TIME FROM GEOMETRIES')
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

export const getShortCircuit = (gameTime: number, orders: MessagePlanning[], interactions: MessageInteraction[],
  activities: PerForcePlanningActivitySet[]): ShortCircuitInteraction | undefined => {

  interface TimedIntervention {
    time: number
    message: MessagePlanning
  }

  // loop through plans
  const inters: TimedIntervention[] = [] 
  orders.forEach((plan: MessagePlanning) => {
    const force = plan.details.from.forceId
    const forceActivities = activities.find((act: PerForcePlanningActivitySet) => act.force === force)
    if (forceActivities) {
      const actName = plan.message.activity
      const activity = findActivity(actName, forceActivities)
      const shorts = activity.shortCircuits
      if (shorts) {
        shorts.forEach((short: INTERACTION_SHORT_CIRCUIT) => {
          const thisTime = timeFor(plan, activity, short)
          if (thisTime) {
            inters.push({time: thisTime, message: plan})
          }
        })
      }  
    }
  })

  if (inters.length) {
    // sort in ascending
    const sorted = _.sortBy(inters, function(inter){ return inter.time })
    const eventTime = sorted[0].time
    const contact = sorted[0].message
    !7 && console.log(gameTime, orders, interactions)

    const res: ShortCircuitInteraction = {
      id: 'aa',
      message: contact,
      timeStart: eventTime,
      timeEnd: eventTime,
      intersection: undefined,
      outcomes: undefined
    }
    return res
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

export const getNextInteraction2 = (orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[],
  _ctr: number, sensorRangeKm: number, gameTime: string, gameTurnEnd: string, getAll: boolean): PlanningContact[] | ShortCircuitInteraction | number => {
  const gameTimeVal = moment(gameTime).valueOf()
  const gameTurnEndVal = moment(gameTurnEnd).valueOf()
  const earliestTime = interactions.length ? timeOfLatestInteraction(interactions) : moment(gameTime).valueOf()

  console.log('earliest time', moment(earliestTime).toISOString())
  !7 && console.log(orders, activities, sensorRangeKm, getAll, earliestTime)

  // if we're doing get-all, don't bother with shortcircuits
  const shortCircuit = !getAll && getShortCircuit(gameTimeVal, orders, interactions, activities)
  
  if (shortCircuit && shortCircuit.timeStart <= gameTimeVal) {
    // return the short-circuit interaction
    return shortCircuit
  } else {
    // generate any special orders
    const specialOrders = createSpecialOrders(gameTimeVal, orders, interactions)

    const fullOrders = specialOrders.length > 0 ? orders.concat(specialOrders) : orders

    const fullTurnLength = gameTurnEndVal - gameTimeVal
    let currentWindow = getAll ? fullTurnLength : fullTurnLength / 20

    const contacts: PlanningContact[] = []

    while (contacts.length === 0 && currentWindow <= fullTurnLength) {
      const windowEnd = gameTimeVal + currentWindow
      const liveOrders = ordersLiveIn(orders, gameTimeVal, windowEnd)
      //      console.log('window size', gameTime, moment(windowEnd).toISOString(), formatDuration(currentWindow), liveOrders.length )

      const newGeometries = invertMessages(liveOrders, activities)
      const withTimes = injectTimes(newGeometries)
      !7 && console.log(withTimes)

      // console.table(liveOrders.map((plan: MessagePlanning) => {
      //   return {
      //     id: plan._id,
      //     start: plan.message.startDate,
      //     end: plan.message.endDate
      //   }
      // }))

      currentWindow *= 2
    }

    if (currentWindow > fullTurnLength) {
      console.log('Gen next interaction: no contacts in turn')
    }

    // find the next interaction
    !7 && console.log(fullOrders)

    // do we have any contacts?
    if (contacts.length !== 0) {
      // sort ascending
      const sortedContacts = _.sortBy(contacts, function(contact){return moment.utc(contact.timeStart).valueOf()})
      const firstC = sortedContacts[0]

      // just check there isn't a short-circuit before this
      if (shortCircuit) {
        const shortStart = shortCircuit.timeStart
        const contStart = firstC.timeStart
        if (shortStart < contStart) {
          return shortCircuit
        } else {
          return [firstC]
        }
      } else {
        if (getAll) {
          return contacts.length
        } else {
          return [firstC]
        }
      }
    } else {
      return []
    }
  }
}

export const getNextInteraction = (orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[], _ctr: number, sensorRangeKm: number, getAll?: boolean): PlanningContact[] => {
  const earliestTime = interactions.length ? timeOfLatestInteraction(interactions) : timeOfStartOfFirstPlan(orders)

  // console.log('earliest time', moment(earliestTime).toISOString())
  // console.table(trimmedOrders.map((inter) => {
  //   return {id: inter._id, start: inter.message.startDate, end: inter.message.endDate, force: inter.details.from.forceId}
  // }))

  const newGeometries = invertMessages(orders, activities)
  const withTimes = injectTimes(newGeometries)

  // console.log('geoms', orders, newGeometries, withTimes)

  const trimmedGeoms = withTimes // .filter((val) => startBeforeTime(val)).filter((val) => endAfterTime(val))

  //  console.log('get next a', orders.length, trimmedOrders.length)
  // console.log('get interaction', orders, interactions)
  // console.table(interactions.map((order) => {
  //   return { force: order.details.interaction?.startTime }
  // }))

  console.log('Get Next. Ctr:' + _ctr + ' orders:' + orders.length + ' Interactions:', interactions.length, ' earliest:', moment(earliestTime).toString(), !7 && !!tStart && !!tEnd)

  // console.table(trimmedGeoms.map((val) => {
  //   // return { id: val._id, start: val.message.startDate, end: val.message.endDate }
  //   return { geometry: val.id, start: val.activity.message.startDate, end: val.activity.message.endDate, force: val.force }
  // }))

  // calculate suitable window. First 10%?
  const latestTime = timeOfEndOfLastPlan(orders)
  const diffMins = moment.duration(moment(latestTime).diff(moment(earliestTime))).asMinutes()

  // console.log('timings', moment(earliestTime).toISOString(), moment(latestTime).toISOString(), diffMins)
  // console.table(orders.map((order) => {
  //   return { endTime: order.message.endDate }
  // }))

  let interactionWindow = getAll ? diffMins : Math.max(diffMins / 10, 60)
  const contacts: PlanningContact[] = []

  // console.log('inter window', interactionWindow, diffMins, moment(earliestTime).toISOString(), moment(latestTime).toISOString())

  while (contacts.length === 0 && interactionWindow <= diffMins) {
    const geometriesInTimeWindow = findPlannedGeometries(trimmedGeoms, earliestTime, interactionWindow)

    const timeEnd = moment(earliestTime).add(interactionWindow, 'm')
    console.log('geoms in this window:', moment(earliestTime).toISOString(), timeEnd.toISOString(), ' windows size (mins):', interactionWindow, 'matching geoms:', geometriesInTimeWindow.length)
    //  console.table(withTimes.map((value) => { return { id: value.id, time: value.geometry.properties && moment(value.geometry.properties.startTime).toISOString() } }))

    // now do spatial binning
    const bins = spatialBinning(geometriesInTimeWindow, 4)
    const binnedOrders = putInBin(geometriesInTimeWindow, bins)

    const interactionsProcessed = interactions.map((val) => {
      const inter = val.details.interaction
      if (!inter) {
        throw Error('Interaction missing')
      }
      return inter.id
    })
    const interactionsConsidered: string[] = []
    const interactionsTested: Record<string, PlanningContact | null> = {}

    binnedOrders.forEach((bin: SpatialBin, _index: number) => {
      // console.log('process bin', _index, bin.orders.length, contacts.length)
      const newContacts = findTouching(bin.orders, interactionsConsidered, interactionsProcessed,
        interactionsTested, sensorRangeKm)
      contacts.push(...newContacts)
    })

    interactionWindow *= 2
  }

  if (contacts.length > 0) {
    if (getAll) {
      return contacts
    } else {
      //    console.log('got contacts', Math.floor(interactionWindow), contacts.length, contacts[0].id)
      // sort then
      const sortFunc = (order: PlanningContact): number => {
        return order.timeStart
      }
      const sortedContacts: PlanningContact[] = _.sortBy(contacts, sortFunc)
      // console.table(sortedContacts.map((value) => { return { id: value.id, time: moment(value.timeStart).toISOString() } }))
      const first = sortedContacts[0]
      return [first]
    }
  } else {
    return []
  }
}
