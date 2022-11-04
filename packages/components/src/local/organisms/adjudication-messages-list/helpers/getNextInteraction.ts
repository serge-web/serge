import { MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedProps } from '@serge/custom-types'
import _ from 'lodash'
import moment from 'moment'
import { findPlannedGeometries, findTouching, GeomWithOrders, injectTimes, invertMessages, ordersOverlappingTime, PlanningContact, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'

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

const timeOfFirstPlan = (orders: MessagePlanning[]): number => {
  if (!orders.length) {
    throw Error('should not be called with zero length orders')
  }
  const sortFunc = (order: MessagePlanning) => {
    return moment(order.message.startDate).valueOf()
  }
  const sorted = _.sortBy(orders, sortFunc)
  return sortFunc(sorted[0])
}

export const getNextInteraction = (orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[]): PlanningContact | undefined => {
  // console.log('getting next interaction after', datetime, orders.length, activities.length, interactions.length)

  const latestInteraction = interactions.length ? timeOfLatestInteraction(interactions) : timeOfFirstPlan(orders)

  const trimmedOrders = ordersOverlappingTime(orders, latestInteraction)

  const newGeometries = invertMessages(trimmedOrders, activities)
  const withTimes = injectTimes(newGeometries)

  const startBeforeTime = (val: GeomWithOrders) => {
    const props = val.geometry.properties as PlannedProps
    return latestInteraction && props.startTime <= latestInteraction
  }
  const endAfterTime = (val: GeomWithOrders) => {
    const props = val.geometry.properties as PlannedProps
    return latestInteraction && props.endTime >= latestInteraction
  }

  const trimmedGeoms = latestInteraction ? withTimes.filter((val) => startBeforeTime(val)).filter((val) => endAfterTime(val)) : withTimes

  const geometriesInTimeWindow = findPlannedGeometries(trimmedGeoms, latestInteraction, 160)

  //  console.log('geoms in window.', moment(latestInteraction).toISOString(), withTimes.length, geomsStartingBeforeTime.length, gemosFinishingAfterTime.length, geometriesInTimeWindow.length)
  //  console.table(withTimes.map((value) => { return { id: value.id, time: value.geometry.properties && moment(value.geometry.properties.startTime).toISOString() } }))

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
    //    console.log('bin', _index, bin.orders.length, newContacts.length, interactionsConsidered.length, interactionsProcessed.length, Object.keys(interactionsTested).length)
    contacts.push(...newContacts)
  })

  if (contacts.length) {
    // sort then
    const sortFunc = (order: PlanningContact): number => {
      return order.timeStart
    }
    const sortedContacts: PlanningContact[] = _.sortBy(contacts, sortFunc)
    // console.table(sortedContacts.map((value) => { return { id: value.id, time: moment(value.timeStart).toISOString() } }))

    const first = sortedContacts[0]

    // CHANGE LOGIC:
    // - drop irrelevant orders: one which start after current time or end before current time
    // - get permutations
    // - sort into ascending order (start time)
    // - de

    return first
  } else {
    return undefined
  }
}
