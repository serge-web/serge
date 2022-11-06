import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'

export const fixPerForcePlanningActivities = (perForcePlanningActivities: PerForcePlanningActivitySet[],
  planningActivities: PlanningActivity[]): PerForcePlanningActivitySet[] => {
  return perForcePlanningActivities.map((force: PerForcePlanningActivitySet): PerForcePlanningActivitySet => {
    return {
      force: force.force,
      groupedActivities: force.groupedActivities.map((group: GroupedActivitySet): GroupedActivitySet => {
        const res: GroupedActivitySet = {
          category: group.category,
          activities: group.activities.map((act: PlanningActivity | string): PlanningActivity => {
            if (typeof act === 'string') {
              const actId = act as string
              const activity = deepCopy(planningActivities.find((act: PlanningActivity) => act.uniqid === actId)) as PlanningActivity
              // inject the category
              activity.uniqid = group.category.toLowerCase() + '-' + activity.uniqid
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
}
