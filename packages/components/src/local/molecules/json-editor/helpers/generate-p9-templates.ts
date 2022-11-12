import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import _ from 'lodash'
import moment from 'moment'
import { airTemplate } from './p9-air'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'
import { maritimeTemplate } from './p9-maritime'
import { otherTemplate } from './p9-other'

const locationComponent = {
  format: 'textarea',
  title: 'Location',
  id: 'locationArea',
  type: 'string',
  readonly: 'readonly',
  propertyOrder: 55,
  options: {
    grid_columns: 6
  }
}

const templateDict = {

}

export const generateTemplate = (title: string, location: boolean, core: Record<string, any>, domain: Record<string, any>, specific?: string): Record<string, any> => {
  let specTemplate
  if (specific) {
    specTemplate = templateDict[specific]
  }

  const combinedTemplates = specTemplate ? { ...core, ...domain, ...specTemplate } : { ...core, ...domain }
  if (location) {
    combinedTemplates.location = locationComponent
  }
  const fieldNames = Object.keys(combinedTemplates).map((name: string) => name)
  const wrappedDetails = {
    format: 'grid',
    required: fieldNames,
    properties: combinedTemplates,
    title: title,
    type: 'object'
  }

  const res = {
    lastUpdated: moment().toISOString(),
    title: title,
    details: wrappedDetails,
    completed: true,
    _id: title,
    _rev: moment().toISOString()
  }
  return res
}

export interface TemplatesAndActivities {
val: number
}

interface Activity {
  title: string
  // forces we generate this activity for
  forces: string[]
  // domains where this is present
  domains: string[]
  // speicic child activities (geometries)
  acts?: string[]
  // name for target areas
  actDesc?: string[]
  // the (optional) specific template to use
  specific?: string
}

export const generateAllTemplates = (): TemplatesAndActivities => {
  const red = 'f-red'
  const blue = 'f-blue'
  const green = 'f-green'

  const allForces = [blue, red, green]

  const land = 'Land'
  const mar = 'Maritime'
  const air = 'Air'
  const other = 'Other'

  const landMar = [land, mar]
  const seaAirLand = [land, mar, air]

  const routeOut = 'route-out'
  const activity = 'activity'
  const routeBack = 'route-back'
  const point = 'point'
  const thereBack = [routeOut, activity, routeBack]
  const oneWayTwoActivities = [routeOut, activity, activity]
  const thereBackTwoActivities = [routeOut, activity, activity, routeBack]

  const assetLocation = 'Asset Location'
  const strikeTarget = 'Strike Target'

  const acts: Activity[] = []
  acts.push({ title: 'Transit', forces: allForces, domains: seaAirLand, acts: thereBack, specific: 'Transit' })
  acts.push({ title: 'Cruise Missile Strike', forces: allForces, domains: landMar, acts: oneWayTwoActivities, actDesc: [assetLocation, strikeTarget], specific: 'MissileStrike' })
  acts.push({ title: 'Stand Off Strike', forces: allForces, domains: [air], acts: thereBackTwoActivities, actDesc: [assetLocation, strikeTarget], specific: 'Transit' })
  acts.push({ title: 'Patrol', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Patrol Area'], specific: 'Patrol' })
  acts.push({ title: 'Ballistic Missile Strike', forces: allForces, domains: seaAirLand, acts: oneWayTwoActivities, actDesc: [assetLocation, strikeTarget], specific: 'Transit' })
  acts.push({ title: 'SAM MEZ', forces: allForces, domains: landMar, acts: [point], actDesc: ['SAM MEZ Location'] })
  acts.push({ title: 'BMD MEZ', forces: allForces, domains: landMar, acts: [point], actDesc: ['BMD MEZ Location'] })
  acts.push({ title: 'FIAC EZ', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['FIAC EZ Location'] })
  acts.push({ title: 'ISTAR', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Observation Area'], specific: 'ISTAR' })
  acts.push({ title: 'Offensive Counter Air', forces: allForces, domains: [air], acts: thereBack, actDesc: ['OCA Area'] })
  acts.push({ title: 'Defensive Counter Air', forces: allForces, domains: [air], acts: thereBack, actDesc: ['DCA Area'] })
  acts.push({ title: 'Time Sensitive Targeting (TST)', forces: allForces, domains: [air], acts: thereBack, actDesc: ['TST Area'], specific: 'TST' })
  acts.push({ title: 'Mine Laying', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['Mine Area'], specific: 'MineLaying' })
  acts.push({ title: 'Mine Clearance', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['Mine Clearance Area Area'], specific: 'Duration' })
  acts.push({ title: 'ASW Barrier', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['ASW Area'], specific: 'ASWBarrier' })
  acts.push({ title: 'Provide Logistics', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['LOGS Destination'] })
  acts.push({ title: 'Resupply', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Resupply Destingation'] })
  acts.push({ title: 'EW Attack', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['EW Target'], specific: 'EWAttack' })
  acts.push({ title: 'SOF Activity', forces: allForces, domains: [other], acts: thereBackTwoActivities, actDesc: ['Activity Location', 'Efect Location'], specific: 'SOFAttack' })
  acts.push({ title: 'Cyber/Space Activity', forces: allForces, domains: [other], acts: thereBack, actDesc: ['Activity Location'], specific: 'Cyber' })

  const perForceActs: PerForcePlanningActivitySet[] = []

  const domainTemplates = {
    land: landTemplate,
    mar: maritimeTemplate,
    air: airTemplate,
    other: otherTemplate
  }

  const templates = {

  }

  acts.forEach((act: Activity) => {
    act.forces.forEach((force: string) => {
      let forceAct: PerForcePlanningActivitySet | undefined = perForceActs.find((perForce) => perForce.force === force)
      if (!forceAct) {
        forceAct = { force: force, groupedActivities: [] }
        perForceActs.push(forceAct)
      }
      const groupedActs = forceAct.groupedActivities
      act.domains.forEach((domain: string) => {
        let category: GroupedActivitySet | undefined = groupedActs.find((group) => group.category === domain)
        if (!category) {
          category = { category: domain, activities: [] }
          groupedActs.push(category)
        }
        // create template
        const template = generateTemplate(act.title, !!act.acts, coreTemplate, domainTemplates[domain], act.specific)
        const templateName = [domain, act.specific].join('-')
        if (!templates[templateName]) {
          templates[templateName] = template
        }
        const activity: PlanningActivity = {
          name: act.title,
          uniqid: [force, domain, act.title].join('-'),
          template: templateName
        }
        category.activities.push(activity)
      })
    })
  })

  // sort the activites
  const res: PerForcePlanningActivitySet[] = perForceActs.map((perForce): PerForcePlanningActivitySet => {
    perForce.groupedActivities = perForce.groupedActivities.map((group) => {
      const acts = group.activities
      const res = _.sortBy(acts, (item) => ((item as PlanningActivity).name))
      group.activities = res
      return group
    })
    return perForce
  })

  console.log('per force', res)
  console.log(Object.values(templates))

  return { val: 12 }
}
