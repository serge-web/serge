import { ForceData, GroupedActivitySet, MessageStructure, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'

export const customiseActivities = (_document: MessageStructure | undefined, schema: Record<string, any>,
  activities: PerForcePlanningActivitySet[], force?: ForceData): Record<string, any> => {
  if (schema) {
    const oldActivity = schema.properties?.activity
    if (oldActivity && activities.length) {
      let myActivities: PerForcePlanningActivitySet
      if (force && force.umpire) {
        // need full list
        myActivities = { force: force.uniqid, groupedActivities: [] }
        activities.forEach((force) => {
          force.groupedActivities.forEach((group) => {
            myActivities.groupedActivities.push(group)
          })
        })
      } else {
        // activities for just this force
        const forceActivities = force && activities.find((act) => act.force === force.uniqid)
        const isBlue = _document && _document.Reference && _document.Reference.includes('Blue')
        myActivities = forceActivities || (isBlue ? activities[0] : activities[1])
      }

      const acts: Array<{id: string, name: string}> = []
      myActivities.groupedActivities.map((val: GroupedActivitySet) => {
        val.activities.forEach((val2: string | PlanningActivity) => {
          if (typeof (val) === 'string') {
            throw Error('Should not have string in planning activities')
          }
          const plan = val2 as PlanningActivity
          acts.push({ id: plan.uniqid, name: val.category + '-' + plan.name })
        })
      })
      oldActivity.enum = acts.map((val) => val.id)
      oldActivity.options.enum_titles = acts.map((val) => val.name)
    }
  }
  return schema
}
