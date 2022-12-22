import { MessagePlanning, MessageStructure } from '@serge/custom-types'

export const customiseLiveOrders = (_document: MessageStructure | undefined, schema: Record<string, any>,
  liveOrders: MessagePlanning[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    const oldOrders = res.properties?.synchronisedWith?.items
    if (oldOrders) {
      oldOrders.enum = liveOrders.map((order: MessagePlanning) => order.message.Reference)
      oldOrders.options.enum_titles = liveOrders.map((order: MessagePlanning) => order.message.title)
    }
    const oldSupports = res.properties?.supportsOther?.items
    if (oldSupports) {
      oldSupports.enum = liveOrders.map((order: MessagePlanning) => order.message.Reference)
      oldSupports.options.enum_titles = liveOrders.map((order: MessagePlanning) => order.message.title)
    }
  }
  return res
}
