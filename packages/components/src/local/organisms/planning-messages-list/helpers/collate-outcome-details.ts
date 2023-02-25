import { MessageInteraction, MessagePlanning } from '@serge/custom-types'

export interface OutcomeDetails {

}

export const collateOutcomeDetails = (plan: MessagePlanning, inters: MessageInteraction[]): OutcomeDetails | undefined => {
  const planId = plan._id
  const msgInters = inters.filter((msg) => {
    const inter = msg.details.interaction
    return inter && (inter.orders1 === planId || inter.orders2 == planId)
  })
  if (msgInters) {
    const res: OutcomeDetails = {}
    const interactions = msgInters.map
    console.log('inters', interactions)
    return res
  }
  return undefined
}
