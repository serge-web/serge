import { PLANNING_MESSAGE } from '@serge/config'
import { ForceData, MessageInteraction, MessagePlanning, Role } from '@serge/custom-types'
import { MockPerForceActivities, MockPlanningActivities, P9BMock, planningMessagesBulk } from '@serge/mocks'
import { fixPerForcePlanningActivities } from '../../planning-channel/helpers/collate-plans-helper'
import { getNextInteraction, interactionFor } from './getNextInteraction'

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

const planningActivities = MockPlanningActivities
const perForcePlanningActivities = MockPerForceActivities
const filledInPerForcePlanningActivities = fixPerForcePlanningActivities(perForcePlanningActivities, planningActivities)

const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

it('process successive interactions', () => {
  const interactions: MessageInteraction[] = []
  let contact: any = 5
  for (let ctr = 0; ctr < 20 && contact; ctr++) {
    contact = getNextInteraction(planningMessages2, filledInPerForcePlanningActivities, interactions, ctr, 30)
    if (contact) {
      const msgInter2: MessageInteraction = interactionFor(contact, forces[1], forces[1].roles[0].roleId, forces[1].roles[0].name, 4, 'channelId', 'adj-template')
      interactions.push(msgInter2)
    }
  }
  !7 && console.table(interactions.map((inter) => {
    const interact = inter.details.interaction
    if (interact) {
      return { id: interact.id, start: interact.startTime, end: interact.endTime }
    } else {
      return { id: 'n/a' }
    }
  }))
})
