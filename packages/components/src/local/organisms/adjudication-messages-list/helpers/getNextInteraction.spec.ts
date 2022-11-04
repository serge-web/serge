import { INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import { ForceData, GroupedActivitySet, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity, Role } from '@serge/custom-types'
import { MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessagesBulk } from '@serge/mocks'
import { getNextInteraction } from './getNextInteraction'

const wargame = P9Mock.data
const channels = wargame.channels.channels
const planningChannel = channels[0]
const forces = wargame.forces.forces
const platformTypes = wargame.platformTypes ? wargame.platformTypes.platformTypes : []

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

it('find asset at top level', () => {
  const inter = getNextInteraction(0, planningMessages2, filledInPerForcePlanningActivities, interactions)
  // try the host platform in the task group
  expect(inter).toBeFalsy()
})
