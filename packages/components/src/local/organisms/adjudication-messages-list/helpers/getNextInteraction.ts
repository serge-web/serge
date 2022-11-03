import { MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedProps } from "@serge/custom-types"
import { deepCopy } from "@serge/helpers"
import _ from "lodash"
import { findPlannedGeometries, GeomWithOrders, injectTimes, invertMessages, PlanningContact } from "../../support-panel/helpers/gen-order-data"

const useDate = (msg: MessageInteraction): string => {
  const inter = msg.details.interaction
  if (!inter) {
    throw Error('Interaction missing for message:' + msg.message.Reference)
  }
  return inter.startTime
}

const timeOfLatestInteraction = (interactions: MessageInteraction[]): string => {
  const sorted =  _.sortBy(interactions, useDate) as MessageInteraction[]
  console.table(interactions.map((val) => { return {ref: val.message.Reference, date: useDate(val)} })
  return useDate(sorted[sorted.length - 1])
}

export const getNextInteraction = (datetime: number, orders: MessagePlanning[], 
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[]): PlanningContact | undefined =>
{
  console.log('getting next interaction after', datetime, orders.length, activities.length, interactions.length)

  const newGeometries = invertMessages(orders, activities)
  const withTimes = injectTimes(newGeometries)

  const latestInteraction = timeOfLatestInteraction(interactions)
  console.log('latest', latestInteraction)

  const geometriesInTimeWindow = findPlannedGeometries(withTimes, latestInteraction , 160)

  // update if it's to be considered
  const updated = withTimes.map((geom: GeomWithOrders): GeomWithOrders => {
    const newItem: GeomWithOrders = deepCopy(geom)
    const props = geom.geometry.properties as PlannedProps
    props.toBeConsidered = geometriesInTimeWindow.some((val: GeomWithOrders) => val.id === geom.id)
    return newItem
  })

  return undefined
}