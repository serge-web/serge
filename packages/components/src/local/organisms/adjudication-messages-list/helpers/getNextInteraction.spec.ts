import { PLANNING_MESSAGE } from '@serge/config'
import { ForceData, MessageInteraction, MessagePlanning, PlannedActivityGeometry, PlannedProps, Role } from '@serge/custom-types'
import { deepCopy, findAsset, incrementGameTime, updateGeometryTimings } from '@serge/helpers'
import { P9BMock, planningMessagesBulk } from '@serge/mocks'
import { sum } from 'lodash'
import { PlanningContact } from '../../support-panel/helpers/gen-order-data'
import { getNextInteraction2 } from './getNextInteraction'

const wargame = P9BMock.data
const forces = wargame.forces.forces
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

// generate list of roles, for dropdown control
const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

const messages = planningMessagesBulk

const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

const gameStartTime = P9BMock.data.overview.gameDate
const turnLen = P9BMock.data.overview.gameTurnTime
const turnEnd = incrementGameTime(gameStartTime, turnLen)

it('gets all interactions (2)', () => {
  const interactions: MessageInteraction[] = []
  console.log('game start time', gameStartTime)
  const contacts: PlanningContact[] = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTime, turnEnd, true)
  if (contacts) {
    expect(contacts.length).toEqual(0)
  }
}
)

it('gets interactions (2)', () => {
  const interactions: MessageInteraction[] = []
  console.log('game start time', gameStartTime)
  const contacts: PlanningContact[] = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTime, turnEnd, false)
  if (contacts) {
    expect(contacts.length).toEqual(0)
  }
}
)

// it('process successive interactions', () => {
//   const interactions: MessageInteraction[] = []
//   let contacts: PlanningContact[] = []
//   for (let ctr = 0; ctr < 20 && contacts.length > 0; ctr++) {
//     contacts = getNextInteraction(planningMessages2, activities, interactions, ctr, 30)
//     if (contacts) {
//       const newInteractions: MessageInteraction[] = contacts.map((contact): MessageInteraction => {
//         return interactionFor(contact, forces[1], forces[1].roles[0].roleId, forces[1].roles[0].name, 4, 'channelId', 'adj-template')
//       })
//       interactions.push(...newInteractions)
//     }
//   }
//   !7 && console.table(interactions.map((inter) => {
//     const interact = inter.details.interaction
//     if (interact) {
//       return { id: interact.id, start: interact.startTime, end: interact.endTime }
//     } else {
//       return { id: 'n/a' }
//     }
//   }))
// })

// it('gets all interactions', () => {
//   const interactions: MessageInteraction[] = []
//   const contacts: PlanningContact[] = getNextInteraction(planningMessages2, activities, interactions, 0, 30, true)
//   if (contacts) {
//     const interactions: MessageInteraction[] = contacts.map((contact): MessageInteraction => {
//       return interactionFor(contact, forces[1], forces[1].roles[0].roleId, forces[1].roles[0].name, 4, 'channelId', 'adj-template')
//     })
//     expect(interactions.length).toEqual(201)
//   }
// }
// )

it('fixes geometry timings', () => {
  const msgWithLocation = planningMessages2.find((msg: MessagePlanning) => {
    if (msg.message.location && msg.message.location.length === 4) {
      if (msg.message.ownAssets) {
        const hasSpeed = msg.message.ownAssets.find((item: { asset: string }) => {
          const asset = findAsset(forces, item.asset)
          let speedAttr
          if (asset.attributes) {
            for (const [key, value] of Object.entries(asset.attributes)) {
              if (key === 'a_Speed') {
                speedAttr = value
              }
            }
          }
          return !!speedAttr
        })
        return hasSpeed
      }
    }
    return false
  })
  if (msgWithLocation) {
    const loc = msgWithLocation.message.location
    expect(loc).toBeTruthy()
    const safeLoc = deepCopy(loc) as PlannedActivityGeometry[]

    // sort the assets
    const assets = msgWithLocation.message.ownAssets
    if (assets && assets.length) {
      const speeds: number[] = []
      assets.forEach((item: { asset: string }) => {
        const asset = findAsset(forces, item.asset)
        const attributes = asset.attributes
        if (attributes) {
          for (const [key, value] of Object.entries(attributes)) {
            if (key === 'a_Speed') {
              speeds.push(value as number)
            }
          }
        }
      })
      if (speeds.length > 0) {
        // console.table(safeLoc.map((plan: PlannedActivityGeometry) => {
        //   const props = plan.geometry.properties as PlannedProps
        //   return {
        //   id: plan.uniqid,
        //   start: props.startDate,
        //   end: props.endDate
        //   }
        // }))

        const total = sum(speeds)
        const mean = total / speeds.length
        const fixed = updateGeometryTimings(safeLoc, msgWithLocation.message.startDate, msgWithLocation.message.endDate, mean)
        expect(fixed).toBeTruthy()
        expect(fixed.length).toEqual(safeLoc.length)
        // console.table(fixed.map((plan: PlannedActivityGeometry) => {
        //   const props = plan.geometry.properties as PlannedProps
        //   return {
        //   id: plan.uniqid,
        //   start: props.startDate,
        //   end: props.endDate
        //   }
        // }))

        // check the timings still line up
        const leg1Before = safeLoc[0].geometry.properties as PlannedProps
        const leg1After = fixed[0].geometry.properties as PlannedProps
        const lastLegBefore = safeLoc[safeLoc.length-1].geometry.properties as PlannedProps
        const lastLegAfter = fixed[safeLoc.length-1].geometry.properties as PlannedProps
        expect(leg1Before.startDate).toEqual(leg1After.startDate)
        expect(leg1Before.endDate).not.toEqual(leg1After.startDate)
        expect(lastLegBefore.startDate).not.toEqual(lastLegAfter.startDate)
        expect(lastLegBefore.endDate).toEqual(lastLegAfter.endDate)
      }
    }
  } else {
    expect('failed to find location').toBeFalsy()
  }
}
)
