import { MessageInteraction, MessagePlanning, PerForcePlanningActivitySet } from "@serge/custom-types"
import _ from "lodash"
import { findPlannedGeometries, findTouching, injectTimes, invertMessages, PlanningContact, putInBin, SpatialBin, spatialBinning } from "../../support-panel/helpers/gen-order-data"

const useDate = (msg: MessageInteraction): string => {
  const inter = msg.details.interaction
  if (!inter) {
    throw Error('Interaction missing for message:' + msg.message.Reference)
  }
  return inter.startTime
}

const timeOfLatestInteraction = (interactions: MessageInteraction[]): string => {
  const sorted = _.sortBy(interactions, useDate) as MessageInteraction[]
  console.table(interactions.map((val) => { return { ref: val.message.Reference, date: useDate(val) } }))
  return useDate(sorted[sorted.length - 1])
}

export const getNextInteraction = (datetime: number, orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[]): PlanningContact | undefined => {
  console.log('getting next interaction after', datetime, orders.length, activities.length, interactions.length)

  const newGeometries = invertMessages(orders, activities)
  const withTimes = injectTimes(newGeometries)

  const latestInteraction = timeOfLatestInteraction(interactions)
  console.log('latest', latestInteraction)

  const geometriesInTimeWindow = findPlannedGeometries(withTimes, latestInteraction, 160)

  console.log('geoms in window', geometriesInTimeWindow.length)

  // now do spatial binning
  const bins = spatialBinning(geometriesInTimeWindow, 2)
  const binnedOrders = putInBin(geometriesInTimeWindow, bins)

  const contacts: PlanningContact[] = []
    
  const interactionsProcessed  = interactions.map((val) => {
    const inter = val.details.interaction
    if (!inter) {
      throw Error('Interaction missing')
    }
    return inter.orders1 + ' ' + inter.orders2
  })
  const interactionsConsidered: string[] = []
  const interactionsTested: Record<string, PlanningContact | null> = {}

  binnedOrders.forEach((bin: SpatialBin, index: number) => {
    const newContacts = findTouching(bin.orders, interactionsConsidered, interactionsProcessed,
      interactionsTested )
    console.log('bin', index, bin.orders.length, newContacts.length, Object.keys(interactionsTested).length)
    contacts.push(...newContacts)
  })

  console.log('contacts', contacts.length)

  // CHANGE LOGIC:
  // - drop irrelevant orders: one which start after current time or end before current time
  // - get permutations
  // - sort into ascending order (start time)
  // - de

  return undefined
}