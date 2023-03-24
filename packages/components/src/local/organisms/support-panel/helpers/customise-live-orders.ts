import { MessagePlanning, MessageStructure } from '@serge/custom-types'
import { sortBy } from 'lodash'

export const customiseLiveOrders = (_document: MessageStructure | undefined, schema: Record<string, any>,
  liveOrders: MessagePlanning[]): Record<string, any> => {
  // put the orders in alphabetical order
  const sortedOrders = sortBy(liveOrders, function (message) { return message.message.title })
  const res = { ...schema }
  if (schema) {
    const oldOrders = res.properties?.synchronisedWith?.items
    if (oldOrders) {
      oldOrders.enum = sortedOrders.map((order: MessagePlanning) => order.message.Reference)
      oldOrders.options.enum_titles = sortedOrders.map((order: MessagePlanning) => order.message.Reference + ' - ' + order.message.title)
    }
  }
  return res
}
