import { MessageInteraction, MessagePlanning } from '@serge/custom-types'

export interface OutcomeDetails {

}

export interface AssetChange {
  name: string
  health: string
  c4Status: string
  repairIn: string
  location: string
}

export interface InteractionSummary {
  time: string
  perForceNarratives: Array<{force: string, summary: string}>
  changes: AssetChange[]
}

export const collateOutcomeDetails = (plan: MessagePlanning, inters: MessageInteraction[]): OutcomeDetails | undefined => {
  const planId = plan._id
  const msgInters = inters.filter((msg) => {
    const inter = msg.details.interaction
    return inter && (inter.orders1 === planId || inter.orders2 == planId)
  })
  if (msgInters) {
    const res: OutcomeDetails = {}
    msgInters.forEach((inter) => {
      // start with narrative
      const narrs = inter.message.Reference
    })
    console.log('inters', msgInters)
    return res
  }
  return undefined
}
