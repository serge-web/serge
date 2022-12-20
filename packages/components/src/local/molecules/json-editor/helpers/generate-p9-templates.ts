import { GeometryType } from '@serge/config'
import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import _ from 'lodash'
import moment from 'moment'
import { airTemplate } from './p9-air'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'
import { maritimeTemplate } from './p9-maritime'
import { otherTemplate } from './p9-other'
import { tmplASWBarrier, tmplCyber, tmplDuration, tmplEWAttack, tmplISTAR, tmplMineLaying, tmplMissileStrike, tmplPatrol, tmplSOFAttack, tmplTransit, tmplTST } from './p9-specific'
import p9StockTemplates from './p9-stock-messages'

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
  Transit: tmplTransit,
  MissileStrike: tmplMissileStrike,
  Patrol: tmplPatrol,
  ISTAR: tmplISTAR,
  Duration: tmplDuration,
  TST: tmplTST,
  MineLaying: tmplMineLaying,
  ASWBarrier: tmplASWBarrier,
  EWAttack: tmplEWAttack,
  SOFAttack: tmplSOFAttack,
  Cyber: tmplCyber
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
  // compact id for activity. Human and computer-readable
  uniqid: string
  // human-readable title for activity
  title: string
  // forces we generate this activity for
  forces: string[]
  // domains where this is present
  domains: string[]
  // specific child activities (geometries)
  acts?: string[]
  // name for target areas
  actDesc?: string[]
  // the (optional) specific template to use
  specific?: string
  // list of activities this activity can interact with
  interactsWith?: Array<Activity['uniqid']>
  // if activity interaction includes oppFor assets under geometries
  provideSpatialAssets?: boolean
}

/** collated data on what this activity interacts with  */
interface InteractsWithEntry {
  // compact id for activity. Human and computer-readable
  uniqid: string
  // list of activities this activity can interact with
  interactsWith: Array<Activity['uniqid']>
}

const routeOut = 'route-out'
const activity = 'activity'
const routeBack = 'route-back'
const point = 'point'
const oneWay = [routeOut]
const thereBack = [routeOut, activity, routeBack]
const oneWayOneActivity = [routeOut, activity]
const thereBackTwoActivities = [routeOut, activity, activity, routeBack]

const activityGeometriesFor = (id: string, acts: string[], descs: string[]): PlanningActivityGeometry[] => {
  let ctr = 0
  const res: PlanningActivityGeometry[] = acts.map((name, index): PlanningActivityGeometry => {
    switch (name) {
      case routeOut:
        return {
          aType: GeometryType.polyline,
          name: 'Route out',
          optional: false,
          uniqid: '' + id + '-' + index
        }
      case routeBack: {
        return {
          aType: GeometryType.polyline,
          name: 'Route back',
          optional: false,
          uniqid: '' + id + '-' + index
        }
      }
      case point: {
        return {
          aType: GeometryType.point,
          name: descs[ctr++],
          optional: false,
          uniqid: '' + id + '-' + index
        }
      }
      default: {
        return {
          aType: GeometryType.polygon,
          name: descs[ctr++],
          optional: false,
          uniqid: '' + id + '-' + index
        }
      }
    }
  })
  return res
}

export const generateAllTemplates = (): TemplatesAndActivities => {
  console.log('gen all templates 5')
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

  const assetLocation = 'Asset Location'
  const strikeTarget = 'Strike Target'

  // store which activites interact with which other activities
  const actInteracts: InteractsWithEntry[] = []
  actInteracts.push({ uniqid: 'BMD-MEZ', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'SEAD'] })
  actInteracts.push({ uniqid: 'SAM-MEZ', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'SEAD'] })
  actInteracts.push({ uniqid: 'STRIKE', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'EW', 'RESUPP', 'TRANSIT', 'ASW-B', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'EW', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'STRIKE', 'EW', 'ISTAR', 'PATRL', 'RESUPP', 'TRANSIT', 'ASW-B', 'FIAC', 'M-Clr', 'M-Lay', 'DCA', 'OCA', 'SoffS', 'SEAD', 'TST', 'CYB/SPA', 'SOF'] })
  actInteracts.push({ uniqid: 'ISTAR', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'EW', 'ISTAR', 'PATRL', 'TRANSIT', 'ASW-B', 'FIAC', 'M-Clr', 'M-Lay', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'PATRL', interactsWith: ['EW', 'ISTAR', 'PATRL', 'TRANSIT', 'ASW-B', 'FIAC', 'M-Clr', 'M-Lay', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'RESUPP', interactsWith: ['STRIKE', 'EW', 'ASW-B', 'FIAC', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'TRANSIT', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'ASW-B', 'FIAC', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'ASW-B', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'RESUPP', 'TRANSIT'] })
  actInteracts.push({ uniqid: 'FIAC', interactsWith: ['EW', 'ISTAR', 'PATRL', 'RESUPP', 'TRANSIT', 'M-Clr', 'M-Lay'] })
  actInteracts.push({ uniqid: 'M-Clr', interactsWith: ['EW', 'ISTAR', 'PATRL', 'FIAC'] })
  actInteracts.push({ uniqid: 'M-Lay', interactsWith: ['EW', 'ISTAR', 'PATRL', 'FIAC'] })
  actInteracts.push({ uniqid: 'DCA', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'RESUPP', 'TRANSIT', 'DCA', 'OCA', 'SoffS', 'SEAD', 'TST'] })
  actInteracts.push({ uniqid: 'OCA', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'RESUPP', 'TRANSIT', 'DCA', 'OCA', 'SoffS', 'SEAD', 'TST'] })
  actInteracts.push({ uniqid: 'SoffS', interactsWith: ['EW', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'SEAD', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'EW', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'TST', interactsWith: ['EW', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'CYB/SPA', interactsWith: ['EW'] })
  actInteracts.push({ uniqid: 'SOF', interactsWith: ['EW'] })

  const acts: Activity[] = []
  acts.push({ uniqid: 'BMD-MEZ', title: 'BMD MEZ', forces: allForces, domains: landMar, acts: [point], actDesc: ['BMD MEZ Location'] })
  acts.push({ uniqid: 'SAM-MEZ', title: 'SAM MEZ', forces: allForces, domains: landMar, acts: [point], actDesc: ['SAM MEZ Location'] })
  acts.push({ uniqid: 'STRIKE', title: 'Strike', forces: allForces, domains: landMar, acts: oneWayOneActivity, actDesc: [strikeTarget], specific: 'MissileStrike' })
  acts.push({ uniqid: 'EW', title: 'EW Attack', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['EW Target'], specific: 'EWAttack', provideSpatialAssets: true })
  acts.push({ uniqid: 'ISTAR', title: 'ISTAR', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Observation Area'], specific: 'ISTAR', provideSpatialAssets: true })
  acts.push({ uniqid: 'PATRL', title: 'Patrol', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Patrol Area'], specific: 'Patrol' })
  acts.push({ uniqid: 'RESUPP', title: 'Resupply', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Resupply Destingation'] })
  acts.push({ uniqid: 'TRANSIT', title: 'Transit', forces: allForces, domains: seaAirLand, acts: oneWay, specific: 'Transit' })
  acts.push({ uniqid: 'ASW-B', title: 'ASW Barrier', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['ASW Area'], specific: 'ASWBarrier' })
  acts.push({ uniqid: 'FIAC', title: 'FIAC EZ', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['FIAC EZ Location'] })
  acts.push({ uniqid: 'M-Clr', title: 'Mine Clearance', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['Mine Clearance Area Area'], specific: 'Duration', provideSpatialAssets: true })
  acts.push({ uniqid: 'M-Lay', title: 'Mine Laying', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['Mine Area'], specific: 'MineLaying', provideSpatialAssets: true })
  acts.push({ uniqid: 'DCA', title: 'Defensive Counter Air', forces: allForces, domains: [air], acts: thereBack, actDesc: ['DCA Area'], specific: 'Duration' })
  acts.push({ uniqid: 'OCA', title: 'Offensive Counter Air', forces: allForces, domains: [air], acts: thereBack, actDesc: ['OCA Area'], specific: 'Duration' })
  acts.push({ uniqid: 'SoffS', title: 'Stand Off Strike', forces: allForces, domains: [air], acts: thereBackTwoActivities, actDesc: [assetLocation, strikeTarget], specific: 'Transit' })
  acts.push({ uniqid: 'SEAD', title: 'Suppression of Air Defences (SEAD)', forces: allForces, domains: [air], acts: thereBack, actDesc: ['TST Area'], specific: 'Duration' })
  acts.push({ uniqid: 'TST', title: 'Time Sensitive Targeting (TST)', forces: allForces, domains: [air], acts: thereBack, actDesc: ['TST Area'], specific: 'TST', provideSpatialAssets: true })
  acts.push({ uniqid: 'CYB/SPA', title: 'Cyber/Space Activity', forces: allForces, domains: [other], acts: thereBack, actDesc: ['Activity Location'], specific: 'Cyber' })
  acts.push({ uniqid: 'SOF', title: 'SOF Activity', forces: allForces, domains: [other], acts: thereBackTwoActivities, actDesc: ['Activity Location', 'Efect Location'], specific: 'SOFAttack' })

  // do some sanity testing
  acts.forEach((act: Activity) => {
    const numActivities = act.acts && act.acts.filter((act) => [activity, point].includes(act)).length
    const descOrList = act.actDesc || []
    const numDescriptions = descOrList.length
    if (numActivities !== numDescriptions) {
      console.log('template checking failed:', act.title, numActivities, numDescriptions)
    }
    // inject the interactions
    const inters = actInteracts.find((val: InteractsWithEntry) => val.uniqid === act.uniqid)
    if (!inters) {
      console.error('failed to find this activity', act.uniqid)
    } else {
      act.interactsWith = inters.interactsWith
    }
  })

  // acts = []
  // acts.push({ title: 'Transit', forces: allForces, domains: seaAirLand, acts: oneWay, specific: 'Transit' })

  // const uniqList = _.uniqBy(acts, (item) => item.specific) as Activity[]
  // console.log('unique', uniqList.map((item: Activity) => {
  //   return '\'' + item.specific + '\'' + ': ' + 'tmpl' + item.specific + ','
  // }))

  const perForceActs: PerForcePlanningActivitySet[] = []

  const domainTemplates = {
    land: landTemplate,
    mar: maritimeTemplate,
    air: airTemplate,
    other: otherTemplate
  }

  const templates = {
    p9adjudicate: p9StockTemplates[0],
    k16eedkl: p9StockTemplates[1]
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
        const specificMarker = act.specific || 'Standard'
        const templateName = [domain, specificMarker].join('--')
        const template = generateTemplate(templateName, !!act.acts, coreTemplate, domainTemplates[domain], act.specific)
        if (!templates[templateName]) {
          templates[templateName] = template
        }
        const activity: PlanningActivity = {
          name: act.title,
          actId: act.uniqid,
          interactsWith: act.interactsWith,
          uniqid: [force, domain, act.title].join('-'),
          template: templateName
        }
        if (act.acts) {
          activity.geometries = activityGeometriesFor(act.title, act.acts, act.actDesc || [])
        }
        activity.interactsWith = act.interactsWith
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

  7 && console.log('per force', res)
  7 && console.log(Object.values(templates))

  return { val: 12 }
}
