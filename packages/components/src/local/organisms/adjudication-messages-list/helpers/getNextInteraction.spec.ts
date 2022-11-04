import { INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import { ForceData, GroupedActivitySet, InteractionDetails, InteractionMessageStructure, MessageDetails, MessageDetailsFrom, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity, Role } from '@serge/custom-types'
import { MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessagesBulk } from '@serge/mocks'
import moment from 'moment'
import { PlanningContact } from '../../support-panel/helpers/gen-order-data'
import { getNextInteraction, timeOfLatestInteraction } from './getNextInteraction'

const wargame = P9Mock.data
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
const filledInPerForcePlanningActivities: PerForcePlanningActivitySet[] = perForcePlanningActivities.map((force: PerForcePlanningActivitySet): PerForcePlanningActivitySet => {
  return {
    force: force.force,
    groupedActivities: force.groupedActivities.map((group: GroupedActivitySet): GroupedActivitySet => {
      const res: GroupedActivitySet = {
        category: group.category,
        activities: group.activities.map((act: PlanningActivity | string): PlanningActivity => {
          if (typeof act === 'string') {
            const actId = act as string
            const activity = planningActivities.find((act: PlanningActivity) => act.uniqid === actId)
            if (!activity) {
              throw Error('Planning activity not found:' + actId)
            }
            return activity
          } else {
            return act
          }
        })
      }
      return res
    })
  }
})

const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]
const interactions = messages.filter(msg => msg.messageType === INTERACTION_MESSAGE) as MessageInteraction[]

it('create an interaction', () => {
  const inter = getNextInteraction(planningMessages2, filledInPerForcePlanningActivities, interactions)
  // try the host platform in the task group
  expect(inter).toBeTruthy()
})

const interactionFor = (contact: PlanningContact, selectedForce: ForceData, selectedRoleId: string, selectedRoleName: string, turnNumber: number, channelId: string, adjudicateTemplateId: string): MessageInteraction => {
  const interDetails: InteractionDetails = {
    orders1: contact.first.activity._id,
    orders2: contact.second.activity._id,
    startTime: moment(contact.timeStart).toISOString(),
    endTime: moment(contact.timeEnd).toISOString(),
    geometry: contact.intersection,
    complete: false
  }
  const from: MessageDetailsFrom = {
    force: selectedForce.uniqid,
    forceId: selectedForce.uniqid,
    forceColor: selectedForce.color,
    iconURL: selectedForce.iconURL,
    roleId: selectedRoleId,
    roleName: selectedRoleName
  }
  const details: MessageDetails = {
    channel: channelId,
    from: from,
    interaction: interDetails,
    messageType: adjudicateTemplateId,
    timestamp: moment().toISOString(),
    turnNumber: turnNumber
  }
  const message: InteractionMessageStructure = {
    Reference: '',
    narrative: '',
    perceptionOutcomes: [],
    locationOutcomes: [],
    healthOutcomes: []
  }
  const msgInter: MessageInteraction = {
    details: details,
    message: message,
    _id: '',
    _rev: '',
    messageType: INTERACTION_MESSAGE
  }
  return msgInter
}

it('process successive interactions', () => {
  const interactions: MessageInteraction[] = []
  const results: Record<string, any> = []
  for (let i = 0; i < 10; i++) {
    const contact = getNextInteraction(planningMessages2, filledInPerForcePlanningActivities, interactions)
    const lastInter = interactions.length && moment(timeOfLatestInteraction(interactions)).toISOString()
    // TODO: - find out why we don't get contact
    expect(contact).toBeTruthy()
    if (contact) {
      const msgInter2: MessageInteraction = interactionFor(contact, forces[1], forces[1].roles[0].roleId, forces[1].roles[0].name, 4, 'channelId', 'adj-template')
      interactions.push(msgInter2)
      results.push({ ctr: i, val: moment(contact.timeStart).toISOString(), last: lastInter })
    }
  }
  console.table(results)
})
