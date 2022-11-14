import { INTERACTION_MESSAGE } from '@serge/config'
import { ForceData, InteractionDetails, InteractionMessageStructure, MessageDetails, MessageDetailsFrom, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedProps } from '@serge/custom-types'
import { Feature, Geometry } from 'geojson'
import _ from 'lodash'
import moment from 'moment'
import { findPlannedGeometries, findTouching, injectTimes, invertMessages, ordersOverlappingTime, PlanningContact, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'

const useDate = (msg: MessageInteraction): string => {
  const inter = msg.details.interaction
  if (!inter) {
    throw Error('Interaction missing for message:' + msg.message.Reference)
  }
  return inter.startTime
}

export const interactionFor = (contact: PlanningContact, selectedForce: ForceData, selectedRoleId: string, selectedRoleName: string, turnNumber: number, channelId: string, adjudicateTemplateId: string): MessageInteraction => {
  const interDetails: InteractionDetails = {
    id: contact.id,
    orders1: contact.first.activity._id,
    orders2: contact.second.activity._id,
    startTime: moment(contact.timeStart).toISOString(),
    endTime: moment(contact.timeEnd).toISOString(),
    geometry: contact.intersection,
    complete: false
  }
  const from: MessageDetailsFrom = {
    force: selectedForce.uniqid,
    forceId: selectedForce.uniqid,
    forceColor: selectedForce.color,
    iconURL: selectedForce.iconURL,
    roleId: selectedRoleId,
    roleName: selectedRoleName
  }
  const details: MessageDetails = {
    channel: channelId,
    from: from,
    interaction: interDetails,
    messageType: adjudicateTemplateId,
    timestamp: moment().toISOString(),
    turnNumber: turnNumber
  }
  const message: InteractionMessageStructure = {
    Reference: '',
    narrative: '',
    perceptionOutcomes: [],
    locationOutcomes: [],
    healthOutcomes: []
  }
  const msgInter: MessageInteraction = {
    details: details,
    message: message,
    _id: '',
    _rev: '',
    messageType: INTERACTION_MESSAGE
  }
  return msgInter
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

export const getNextInteraction = (orders: MessagePlanning[],
  activities: PerForcePlanningActivitySet[], interactions: MessageInteraction[], _ctr: number, sensorRangeKm: number): PlanningContact | undefined => {
  const earliestTime = interactions.length ? timeOfLatestInteraction(interactions) : timeOfStartOfFirstPlan(orders)
  const trimmedOrders = ordersOverlappingTime(orders, earliestTime)

  const newGeometries = invertMessages(trimmedOrders, activities)
  const withTimes = injectTimes(newGeometries)

  const trimmedGeoms = withTimes // .filter((val) => startBeforeTime(val)).filter((val) => endAfterTime(val))

  console.log('get interaction', orders)
  console.table(orders.map((order) => {
    return { force: order.details.from.forceId }
  }))

  console.log('Get Next. Ctr:' + _ctr + ' orders:' + orders.length + ' Interactions:', interactions.length, ' earliest:', moment(earliestTime).toString(), !7 && !!tStart && !!tEnd)
  // console.table(trimmedGeoms.map((val) => {
  //   // return { id: val._id, start: val.message.startDate, end: val.message.endDate }
  //   return { geometry: val.id, start: val.activity.message.startDate, end: val.activity.message.endDate }
  // }))

  // calculate suitable window. First 10%?
  const latestTime = timeOfEndOfLastPlan(orders)
  const diffMins = moment.duration(moment(latestTime).diff(moment(earliestTime))).asMinutes()
  let interactionWindow = Math.max(diffMins / 10, 60)
  const contacts: PlanningContact[] = []
  while (contacts.length === 0 && interactionWindow < diffMins) {
    const realGeometriesInTimeWindow = findPlannedGeometries(trimmedGeoms, earliestTime, interactionWindow)
    const geometriesInTimeWindow = realGeometriesInTimeWindow.length > 0 ? realGeometriesInTimeWindow : trimmedGeoms

    console.log('geoms in window.', withTimes.length, geometriesInTimeWindow.length)
    //  console.table(withTimes.map((value) => { return { id: value.id, time: value.geometry.properties && moment(value.geometry.properties.startTime).toISOString() } }))

    // now do spatial binning
    const bins = spatialBinning(geometriesInTimeWindow, 2)
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
      const newContacts = findTouching(bin.orders, interactionsConsidered, interactionsProcessed,
        interactionsTested, sensorRangeKm)
      contacts.push(...newContacts)
    })

    console.log('contacts', contacts.length)

    interactionWindow *= 2
  }

  if (contacts.length) {
    //    console.log('got contacts', Math.floor(interactionWindow), contacts.length, contacts[0].id)
    // sort then
    const sortFunc = (order: PlanningContact): number => {
      return order.timeStart
    }
    const sortedContacts: PlanningContact[] = _.sortBy(contacts, sortFunc)
    // console.table(sortedContacts.map((value) => { return { id: value.id, time: moment(value.timeStart).toISOString() } }))

    const first = sortedContacts[0]

    return first
  } else {
    return undefined
  }
}
