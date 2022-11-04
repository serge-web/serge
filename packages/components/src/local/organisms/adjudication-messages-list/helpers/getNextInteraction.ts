import { MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedProps } from '@serge/custom-types'
import _ from 'lodash'
import moment from 'moment'
import { findPlannedGeometries, findTouching, injectTimes, invertMessages, ordersEndingAfterTime, ordersStartingBeforeTime, PlanningContact, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'

const useDate = (msg: MessageInteraction): string => {
  const inter = msg.details.interaction
  if (!inter) {
    throw Error('Interaction missing for message:' + msg.message.Reference)
  }
  return inter.startTime
}

const timeOfLatestInteraction = (interactions: MessageInteraction[]): number => {
  const sorted = _.sortBy(interactions, useDate) as MessageInteraction[]
  console.table(interactions.map((val) => { return { ref: val.message.Reference, date: useDate(val) } }))
  const date = useDate(sorted[sorted.length - 1])
  return moment(date).valueOf()
}

export const getNextInteraction = (datetime: number, orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[]): PlanningContact | undefined => {
  console.log('getting next interaction after', datetime, orders.length, activities.length, interactions.length)

  const latestInteraction = timeOfLatestInteraction(interactions)
  console.log('latest', latestInteraction)
  
  const ordersStartingOk = ordersStartingBeforeTime(orders, latestInteraction)
  const ordersEndingOk = ordersEndingAfterTime(ordersStartingOk, latestInteraction)

  const newGeometries = invertMessages(ordersEndingOk, activities)
  const withTimes = injectTimes(newGeometries)
    
  const geomsStartingBeforeTime = withTimes.filter((val) => {
    const props = val.geometry.properties as PlannedProps
    return props.startTime <= latestInteraction
  })

  const gemosFinishingAfterTime = geomsStartingBeforeTime.filter((val) => {
    const props = val.geometry.properties as PlannedProps
    return props.endTime >= latestInteraction
  })

  const geometriesInTimeWindow = findPlannedGeometries(gemosFinishingAfterTime, latestInteraction, 160)

  console.log('geoms in window.', moment(latestInteraction).toISOString(), withTimes.length, geomsStartingBeforeTime.length, gemosFinishingAfterTime.length, geometriesInTimeWindow.length)
  console.table(withTimes.map((value) => {return {id: value.id, time: value.geometry.properties && moment(value.geometry.properties.startTime).toISOString()}}))

  // now do spatial binning
  const bins = spatialBinning(geometriesInTimeWindow, 2)
  const binnedOrders = putInBin(geometriesInTimeWindow, bins)

  const contacts: PlanningContact[] = []

  const interactionsProcessed = interactions.map((val) => {
    const inter = val.details.interaction
    if (!inter) {
      throw Error('Interaction missing')
    }
    return inter.orders1 + ' ' + inter.orders2
  })
  const interactionsConsidered: string[] = []
  const interactionsTested: Record<string, PlanningContact | null> = {}

  binnedOrders.forEach((bin: SpatialBin, _index: number) => {
    const newContacts = findTouching(bin.orders, interactionsConsidered, interactionsProcessed,
      interactionsTested)
//    console.log('bin', index, bin.orders.length, newContacts.length, Object.keys(interactionsTested).length)
    contacts.push(...newContacts)
  })

  console.log('contacts', contacts.length)

  // CHANGE LOGIC:
  // - drop irrelevant orders: one which start after current time or end before current time
  // - get permutations
  // - sort into ascending order (start time)
  // - de

  return !7 || undefined
}
