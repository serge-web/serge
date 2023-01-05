import { PLANNING_MESSAGE } from '@serge/config'
import { ForceData, MessageInteraction, MessagePlanning, PlanningActivityGeometry, Role } from '@serge/custom-types'
import { deepCopy, incrementGameTime } from '@serge/helpers'
import { P9BMock, planningMessagesBulk } from '@serge/mocks'
import { PlanningContact } from '../../support-panel/helpers/gen-order-data'

import { getNextInteraction2 } from './getNextInteraction'

const wargame = P9BMock.data
const forces = wargame.forces.forces

// generate list of roles, for dropdown control
const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

const messages = planningMessagesBulk
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

const gameStartTime = P9BMock.data.overview.gameDate
const turnLen = P9BMock.data.overview.gameTurnTime
const turnEnd = incrementGameTime(gameStartTime, turnLen)

it('gets all interactions (2)', () => {
  const interactions: MessageInteraction[] = []
  console.log('game start time',gameStartTime)
  const contacts: PlanningContact[] = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTime, turnEnd, true)
  if (contacts) {
    expect(contacts.length).toEqual(0)
  }
}
)

it('gets interactions (2)', () => {
  const interactions: MessageInteraction[] = []
  console.log('game start time',gameStartTime)
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


const updateGeometryTimings2 = (geometries: PlanningActivityGeometry[], startTime: string, endTime: string): PlanningActivityGeometry[] => {
  console.log('geoms', geometries, geometries)
  !7 && console.log(startTime, endTime)
  return geometries
}

it('fixes geometry timings', () => {
  const msgWithLocation = planningMessages2.find((msg: MessagePlanning ) => msg.message.location )
  if (msgWithLocation) {
    const loc = msgWithLocation.message.location
    expect(loc).toBeTruthy()
    const safeLoc = deepCopy(loc)
    const fixed = updateGeometryTimings2(safeLoc, msgWithLocation.message.startDate, msgWithLocation.message.endDate)
    expect(fixed).toBeTruthy()
  } else {
    expect('failed to find location').toBeFalsy()
  }

}
)
