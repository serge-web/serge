import { UNCHANGED, UNKNOWN_TYPE } from '@serge/config'
import { CoreOutcome, ForceData, MessageInteraction, MessagePlanning, PlatformTypeData } from '@serge/custom-types'
import { findForceAndAsset, ForceStyle, formatLongMilitaryDate } from '@serge/helpers'
import { uniq } from 'lodash'

export interface AssetChange {
  name: string
  nature: 'Health' | 'Movement' | 'Perception'
  force?: string
  health?: number
  c4Status?: string
  repairIn?: string
  location?: [number, number]
  narrative?: string
  platformType?: string
}

export interface InteractionSummary {
  time: string
  reference: string
  perForceNarratives?: Array<{ force: string, summary: string }>
  changes?: AssetChange[]
}

export interface OutcomeDetails {
  interactions: InteractionSummary[]
}

export const forceFor = (forceId: ForceData['uniqid'], forceColors: ForceStyle[]): ForceStyle => {
  const match = forceColors.find((force) => force.forceId === forceId)
  if (!match) {
    throw Error('Force not found' + forceId)
  }
  return match
}

export const collateOutcomeDetails = (plan: MessagePlanning, inters: MessageInteraction[],
  isUmpire: boolean, playerForce: ForceData['uniqid'],
  allForces: ForceData[], forceColors: ForceStyle[], platformTypes: PlatformTypeData[]): OutcomeDetails | undefined => {
  const planId = plan._id
  const msgInters = inters.filter((msg) => {
    const inter = msg.details.interaction
    return inter && (inter.orders1 === planId || inter.orders2 === planId)
  })
  if (msgInters.length) {
    const res: OutcomeDetails = {
      interactions: []
    }
    msgInters.forEach((inter) => {
      const details = inter.details.interaction
      if (details) {
        const summary: InteractionSummary = {
          time: formatLongMilitaryDate(details.startTime),
          reference: inter.message.Reference,
          changes: []
        }
        // start with narrative
        const perForce = inter.message.perForceNarratives
        if (perForce) {
          const forMe = perForce.filter((perF) => isUmpire || (perF.force === playerForce))
          summary.perForceNarratives = forMe.map((perF) => {
            return {
              force: perF.force.toLowerCase() !== UNKNOWN_TYPE.toLowerCase() ? forceFor(perF.force, forceColors).force : UNKNOWN_TYPE,
              summary: perF.feedback
            }
          })
        }
        // avoid getting the assets multiple times. collate a list of them
        const assetsFromOutcomes = (outcomes: CoreOutcome[] | undefined): string[] => {
          if (outcomes) {
            return outcomes.map((outcome) => outcome.asset)
          } else {
            return []
          }
        }
        const message = inter.message
        const healthIds = assetsFromOutcomes(message.healthOutcomes)
        const percIds = assetsFromOutcomes(message.perceptionOutcomes)
        const moveIds = assetsFromOutcomes(message.locationOutcomes)
        const allIds = healthIds.concat(percIds).concat(moveIds)
        const uniqIds = uniq(allIds)
        const assets = uniqIds.map((id) => findForceAndAsset(allForces, id))

        // now health
        const healthO = inter.message.healthOutcomes
        healthO.forEach((health) => {
          const asset = assets.find((asset) => asset.asset.uniqid === health.asset)
          if (asset) {
            const canSee = isUmpire || asset.force.uniqid === playerForce
            if (canSee) {
              const newA: AssetChange = {
                nature: 'Health',
                force: asset.force.name,
                name: asset.asset.name,
                health: health.health,
                c4Status: health.c4
              }
              if (health.narrative) {
                newA.narrative = health.narrative
              }
              summary.changes && summary.changes.push(newA)
            }
          }
        })

        // now location
        const locationO = inter.message.locationOutcomes
        locationO.forEach((location) => {
          const asset = assets.find((asset) => asset.asset.uniqid === location.asset)
          if (asset) {
            const canSee = isUmpire || asset.force.uniqid === playerForce
            if (canSee) {
              const newA: AssetChange = {
                nature: 'Movement',
                force: asset.force.name,
                name: asset.asset.name,
                location: location.location
              }
              if (location.narrative) {
                newA.narrative = location.narrative
              }
              summary.changes && summary.changes.push(newA)
            }
          }
        })

        // now perceptions
        const percO = inter.message.perceptionOutcomes
        percO.forEach((perception) => {
          const canSee = isUmpire || perception.force === playerForce
          if (canSee) {
            const asset = assets.find((asset) => asset.asset.uniqid === perception.asset)
            if (asset) {
              const newA: AssetChange = {
                nature: 'Perception',
                force: asset.force.name,
                name: perception.perceivedName || asset.asset.uniqid
              }
              if (perception.perceivedForce) {
                // ignore unchanged perceptiosn
                if (perception.perceivedForce !== UNCHANGED) {
                  if (perception.perceivedForce.toLowerCase() === UNKNOWN_TYPE.toLowerCase()) {
                    newA.force = UNKNOWN_TYPE
                  } else {
                    newA.force = forceFor(perception.perceivedForce, forceColors).force
                  }
                }
              }
              if (perception.perceivedHealth) {
                newA.health = perception.perceivedHealth
              }
              if (perception.perceivedLocation) {
                try {
                  const parsedStr = JSON.parse(perception.perceivedLocation)
                  if (Array.isArray(parsedStr)) {
                    newA.location = parsedStr as [number, number]
                  }
                } catch (err) {
                  console.log('json parse failed', err)
                }
              }
              if (perception.perceivedType) {
                const platform = platformTypes.find((pType) => pType.uniqid === perception.perceivedType)
                newA.platformType = platform ? platform.name : 'Unknown'
              }
              summary.changes && summary.changes.push(newA)
            }
          }
        })
        // done, store it
        res.interactions.push(summary)
      }
    })
    return res
  }
  return undefined
}
