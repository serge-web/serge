import { ForceData, MessageInteraction, MessagePlanning } from '@serge/custom-types'
import { PerForceNarrative } from '@serge/custom-types/message'
import { findForceAndAsset } from '@serge/helpers'

export interface OutcomeDetails {
  narratives?: PerForceNarrative[]
  assets: AssetChange[]
}

export interface AssetChange {
  force: string
  name: string
  health?: number
  c4Status?: string
  repairIn?: string
  location?: string
  narrative?: string
}

export interface InteractionSummary {
  time: string
  perForceNarratives: Array<{force: string, summary: string}>
  changes: AssetChange[]
}

export const collateOutcomeDetails = (plan: MessagePlanning, inters: MessageInteraction[], 
  isUmpire: boolean, playerForce: ForceData['uniqid'],
  allForces: ForceData[]): OutcomeDetails | undefined => {
  const planId = plan._id
  const msgInters = inters.filter((msg) => {
    const inter = msg.details.interaction
    return inter && (inter.orders1 === planId || inter.orders2 == planId)
  })
  if (msgInters) {
    const res: OutcomeDetails = {assets:[]}
    msgInters.forEach((inter) => {
      // start with narrative
      const perForce = inter.message.perForceNarratives
      if (perForce) {
        const forMe = perForce.filter((perF) => isUmpire || (perF.force === playerForce))
        res.narratives = forMe
      }
      // now health
      const healthO = inter.message.healthOutcomes
      healthO.forEach((health) => {
        const asset = findForceAndAsset(allForces, health.asset)
        const canSee = isUmpire || asset.force.uniqid === playerForce
        if (canSee) {
          const newA: AssetChange = {
            force: asset.force.name,
            name: asset.asset.name,
            health: health.health,
            c4Status: health.c4
          }
          if (health.narrative) {
            newA.narrative = health.narrative
          }
          res.assets.push(newA)
        }
      })
    })
    console.log('inters', msgInters)
    return res
  }
  return undefined
}
