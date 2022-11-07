import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'

/** as a "time-saver" in generating activities, it's possible to record per force activity
 * sets using the id's of activities instead of the whole activity.
 * This method swaps the strings for the actual activities.  It also injects the
 * category (environment) into the id, to make them all unique
 */
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
