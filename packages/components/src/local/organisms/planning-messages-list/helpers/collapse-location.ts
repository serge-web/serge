import { PerForcePlanningActivitySet, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import _ from 'lodash'

export const collapseLocation = (document: Record<string, any>, activities?: PerForcePlanningActivitySet): Record<string, any> => {
  const res = deepCopy(document)
  const parent = res.message || res
  if (parent && parent.location) {
    if (typeof (parent.location) !== 'string') {
      const loc = parent.location as PlannedActivityGeometry[]
      let str = ''
      let flatGeoms: PlanningActivityGeometry[] = []
      if (!activities) {
        console.warn('collapseLocation called without force activites')
      } else {
        // get the lists of activities
        const justActs = activities.groupedActivities.map((group) => group.activities)
        const flatActs = _.flatten(justActs) as PlanningActivity[]
        // get the activities with geometries
        const withGeoms = flatActs.filter((act) => act.geometries)
        // now extract the geometries
        const geoms = withGeoms.map((act) => act.geometries)
        flatGeoms = _.flatten(geoms) as PlanningActivityGeometry[]
      }
      loc.forEach((geom) => {
        let name = geom.uniqid
        // now find this geometry
        if (flatGeoms.length > 0) {
          const theAct = flatGeoms.find((act) => act.uniqid === geom.uniqid)
          if (theAct) {
            name = theAct.name
          } else {
            console.warn('failed to find activity for', name)
          }
        }
        str = str + '* ' + name + '\n'
      })

      // locetion is equals to  (str + '* ' + name + '\n')
      parent.location = str
      parent.hiddenStore = JSON.stringify(loc)
    }
  }
  return res
}

export const expandLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  const parent = res.message || res
  if (parent && parent.hiddenStore && typeof parent.location === 'string') {
    // re-inject the location data
    parent.location = JSON.parse(parent.hiddenStore)
    // and delete temporary object
    delete parent.hiddenStore
  }
  return res
}
