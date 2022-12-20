import { MessagePlanning, MessageStructure } from '@serge/custom-types'

export const customiseLiveOrders = (_document: MessageStructure | undefined, schema: Record<string, any>,
  liveOrders: MessagePlanning[]): Record<string, any> => {
  if (schema) {
    const oldOrders = schema.properties?.synchronisedWith?.items
    if (oldOrders) {
      oldOrders.enum = liveOrders.map((order: MessagePlanning) => order.message.Reference)
      oldOrders.options.enum_titles = liveOrders.map((order: MessagePlanning) => order.message.title)
    }
  }
  return schema
}
