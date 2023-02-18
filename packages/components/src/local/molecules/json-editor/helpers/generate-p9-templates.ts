import { GeometryType, INTER_AT_END, INTER_AT_RANDOM, INTER_AT_START } from '@serge/config'
import { GroupedActivitySet, INTERACTION_SHORT_CIRCUIT, PerForcePlanningActivitySet, PlanningActivity, PlanningActivityGeometry, TemplateBody } from '@serge/custom-types'
import _ from 'lodash'
import moment from 'moment'
import { airTemplate } from './p9-air'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'
import { maritimeTemplate } from './p9-maritime'
import { otherTemplate } from './p9-other'
import { tmplASWBarrier, tmplActivity, tmplDuration, tmplEWAttack, tmplISTAR, tmplMissileStrike, tmplPatrol, tmplSOFAttack, tmplTransit, tmplTST, tmplAirToAir } from './p9-specific'
import p9StockTemplates from './p9-stock-messages'

const locationComponent = {
  format: 'location',
  title: 'Location',
  id: 'locationArea',
  type: 'string',
  readonly: 'readonly',
  propertyOrder: 53,
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
  ASWBarrier: tmplASWBarrier,
  EWAttack: tmplEWAttack,
  Attack: tmplSOFAttack,
  Effects: tmplActivity,
  AirToAir: tmplAirToAir
}

/**
 *
 * @param title title of template
 * @param location  whether to include location box
 * @param core core template to use
 * @param domain domain to specify
 * @param specific specific template to use (optional)
 * @param force whether to generate a template specific to this force
 * @returns
 */
export const generateTemplate = (title: string, location: boolean, core: Record<string, any>,
  domain: Record<string, any>, specific?: Readonly<string>): Record<string, any> => {
  let specTemplate
  const coreTemplate = { ...core }
  if (specific) {
    if (templateDict[specific] === undefined) {
      console.warn('Failed to find specific template for ', title, specific, templateDict)
    }
    specTemplate = { ...templateDict[specific] }
    // ok, check if it has custom ownAssets and oppForAssets
    if (specTemplate.ownAssets) {
      // ok, drop it
      delete coreTemplate.ownAssets
    }
    if (specTemplate.otherAssets) {
      delete coreTemplate.otherAssets
    }
  }
  const combinedTemplates = specTemplate ? { ...coreTemplate, ...domain, ...specTemplate } : { ...coreTemplate, ...domain }
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
activities: PerForcePlanningActivitySet[]
templates: TemplateBody[]
}

interface Activity {
  // compact id for activity. Human and computer-readable
  uniqid: string
  // human-readable title for activity
  title: string
  // forces we generate this activity for
  forces: string[]
  // domains where this activity is present for
  domains: string[]
  // specific child activities (geometries)
  acts?: string[]
  // name for target areas
  actDesc?: string[]
  // the (optional) specific template to use
  specific?: string
  // list of activities this activity can interact with
  intWith?: Array<Activity['uniqid']>
  // if activity interaction includes oppFor assets under geometries for PERCEPTION
  spatialP?: boolean
  // if activity interaction includes oppFor assets under geometries for HEALTH
  spatialH?: boolean
  // any short-circuit events this activity generates
  events?: Array<INTERACTION_SHORT_CIRCUIT>
  // whether to generate per-force versions of the template (for subsequent editing)
  pfTmpl?: boolean
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
  const red = 'f-red'
  const blue = 'f-blue'
  const green = 'f-green'

  const redBlue = [blue, red]
  const allForces = [blue, red, green]

  const land = 'Land'
  const mar = 'Maritime'
  const air = 'Air'
  const sof = 'SOF'
  const cyber = 'Cyber'
  const space = 'Space'
  const info = 'Info Ops'

  const landMar = [land, mar]
  const seaAirLand = [land, mar, air]

  // store which activites interact with which other activities
  const actInteracts: InteractsWithEntry[] = []
  actInteracts.push({ uniqid: 'STRIKE', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'EW', 'RESUPP', 'TRANSIT', 'ASW-B', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'SoffS', interactsWith: ['EW', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'EW', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'STRIKE', 'EW', 'ISTAR', 'PATRL', 'AAR', 'RESUPP', 'TRANSIT', 'ASW-B', 'FIAC', 'M-Clr', 'M-Lay', 'DCA', 'OCA', 'SoffS', 'SEAD', 'TST', 'SOF', 'Sea Denial', 'Raid', 'LAND'] })
  actInteracts.push({ uniqid: 'ISTAR', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'EW', 'ISTAR', 'PATRL', 'TRANSIT', 'ASW-B', 'FIAC', 'M-Clr', 'M-Lay', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'PATRL', interactsWith: ['EW', 'ISTAR', 'PATRL', 'TRANSIT', 'ASW-B', 'FIAC', 'M-Clr', 'M-Lay', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'AAR', interactsWith: ['EW', 'FIAC', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'RESUPP', interactsWith: ['STRIKE', 'EW', 'ASW-B', 'FIAC', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'TRANSIT', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'ASW-B', 'FIAC', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'ASW-B', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'RESUPP', 'TRANSIT'] })
  actInteracts.push({ uniqid: 'M-Clr', interactsWith: ['EW', 'ISTAR', 'PATRL', 'FIAC'] })
  actInteracts.push({ uniqid: 'M-Lay', interactsWith: ['EW', 'ISTAR', 'PATRL', 'FIAC'] })
  actInteracts.push({ uniqid: 'DCA', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'AAR', 'RESUPP', 'TRANSIT', 'DCA', 'OCA', 'SoffS', 'SEAD', 'TST'] })
  actInteracts.push({ uniqid: 'OCA', interactsWith: ['STRIKE', 'EW', 'ISTAR', 'PATRL', 'AAR', 'RESUPP', 'TRANSIT', 'DCA', 'OCA', 'SoffS', 'SEAD', 'TST'] })
  actInteracts.push({ uniqid: 'SEAD', interactsWith: ['BMD-MEZ', 'SAM-MEZ', 'EW', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'TST', interactsWith: ['EW', 'DCA', 'OCA'] })
  actInteracts.push({ uniqid: 'CYB/SPA', interactsWith: [] })
  actInteracts.push({ uniqid: 'SOF', interactsWith: ['EW'] })
  actInteracts.push({ uniqid: 'Sea Denial', interactsWith: ['EW'] })
  actInteracts.push({ uniqid: 'Raid', interactsWith: ['EW'] })
  actInteracts.push({ uniqid: 'LAND', interactsWith: ['EW'] })
  actInteracts.push({ uniqid: 'SOF Activity', interactsWith: [] })
  actInteracts.push({ uniqid: 'Activity', interactsWith: [] })

  // const strt = INTER_AT_START
  // const rnd = INTER_AT_RANDOM
  const end: INTERACTION_SHORT_CIRCUIT[] = [INTER_AT_END]
  const both: INTERACTION_SHORT_CIRCUIT[] = [INTER_AT_START, INTER_AT_END]
  const all: INTERACTION_SHORT_CIRCUIT[] = [INTER_AT_START, INTER_AT_RANDOM, INTER_AT_END]
  const rnd: INTERACTION_SHORT_CIRCUIT[] = [INTER_AT_RANDOM]
  const rndEnd: INTERACTION_SHORT_CIRCUIT[] = [INTER_AT_RANDOM, INTER_AT_END]

  const acts: Activity[] = []
  acts.push({ uniqid: 'STRIKE', title: 'Strike', events: end, forces: allForces, domains: landMar, acts: undefined, specific: 'MissileStrike', pfTmpl: true })
  acts.push({ uniqid: 'EW', title: 'EW Attack', events: both, forces: redBlue, domains: seaAirLand, acts: thereBack, actDesc: ['EW Area of Effect'], specific: 'EWAttack', spatialP: true, spatialH: true })
  acts.push({ uniqid: 'ISTAR', title: 'ISTAR', events: rndEnd, forces: redBlue, domains: seaAirLand, acts: thereBackTwoActivities, actDesc: ['Patrol Area', 'Observation Area'], specific: 'ISTAR', spatialP: true })
  acts.push({ uniqid: 'PATRL', title: 'Patrol', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Patrol Area'], specific: 'Patrol' })
  acts.push({ uniqid: 'AAR', title: 'Air-Air Refuel', forces: redBlue, domains: [air], acts: thereBack, actDesc: ['AAR at this location'], specific: 'AirToAir' })
  acts.push({ uniqid: 'RESUPP', title: 'Resupply', forces: redBlue, domains: seaAirLand, acts: thereBack, actDesc: ['Resupply at this location'] })
  acts.push({ uniqid: 'TRANSIT', title: 'Transit', events: end, forces: allForces, domains: seaAirLand, acts: oneWay, specific: 'Transit' })
  acts.push({ uniqid: 'ASW-B', title: 'ASW Barrier', forces: redBlue, domains: [mar], acts: thereBack, actDesc: ['ASW Area'], specific: 'ASWBarrier' })
  acts.push({ uniqid: 'M-Clr', title: 'Mine Clearance', events: rndEnd, forces: redBlue, domains: [mar], acts: thereBack, actDesc: ['Mine Clearance Area Area'], spatialP: true, spatialH: true })
  acts.push({ uniqid: 'M-Lay', title: 'Mine Laying', events: rndEnd, forces: redBlue, domains: [mar], acts: thereBack, actDesc: ['Mine Area'], spatialP: true, spatialH: true })
  acts.push({ uniqid: 'DCA', title: 'Defensive Counter Air', forces: redBlue, domains: [air], acts: thereBack, actDesc: ['DCA Area'], spatialP: true, spatialH: true })
  acts.push({ uniqid: 'OCA', title: 'Offensive Counter Air', forces: redBlue, domains: [air], acts: thereBack, actDesc: ['OCA Area'], spatialP: true, spatialH: true })
  acts.push({ uniqid: 'SoffS', title: 'Stand Off Strike', events: rnd, forces: redBlue, domains: [air], acts: thereBack, actDesc: ['Launch Location'], specific: 'MissileStrike', pfTmpl: true })
  acts.push({ uniqid: 'SEAD', title: 'Suppression of Air Defences (SEAD)', events: rnd, forces: redBlue, domains: [air], acts: thereBack, actDesc: ['SEAD Area'] })
  acts.push({ uniqid: 'TST', title: 'Time Sensitive Targeting (TST)', events: rnd, forces: redBlue, domains: [air], acts: thereBack, actDesc: ['TST Area'], specific: 'TST', spatialH: true })
  acts.push({ uniqid: 'Activity', title: 'Activity', events: all, forces: redBlue, domains: [cyber, space, info], specific: 'Effects' })
  acts.push({ uniqid: 'SOF Activity', title: 'SOF Activity', events: end, forces: redBlue, domains: [sof], acts: thereBackTwoActivities, actDesc: ['Activity Location', 'Effect Location'], specific: 'Attack', spatialP: true, spatialH: true })
  acts.push({ uniqid: 'Sea Denial', title: 'Sea Denial', forces: [red], domains: [mar], acts: [activity], actDesc: ['Area'] })
  acts.push({ uniqid: 'Raid', title: 'Raid', events: end, forces: allForces, domains: [land], acts: thereBack, actDesc: ['Raid Location'], spatialP: true, spatialH: true })
  acts.push({ uniqid: 'LAND', title: 'Land Close Combat', events: end, forces: allForces, domains: [land], acts: thereBack, actDesc: ['Combat Location'], spatialP: true, spatialH: true })

  // do some sanity testing
  acts.forEach((act: Activity) => {
    const numActivities = act.acts ? act.acts.filter((act) => [activity, point].includes(act)).length : 0
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
      act.intWith = inters.interactsWith
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
    Land: landTemplate,
    Maritime: maritimeTemplate,
    Air: airTemplate,
    Other: otherTemplate
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
        const specificMarker = act.specific || 'Activity'
        const templateName = act.pfTmpl ? [force, domain, specificMarker].join('--') : [domain, specificMarker].join('--')
        const template = generateTemplate(templateName, !!act.acts, coreTemplate, domainTemplates[domain], act.specific)
        if (!templates[templateName]) {
          templates[templateName] = template
        }
        const activity: PlanningActivity = {
          name: act.title,
          actId: act.uniqid,
          interactsWith: act.intWith,
          uniqid: [force, domain, act.title].join('-'),
          template: templateName
        }
        if (act.events) {
          activity.events = act.events
        }
        if (act.acts) {
          activity.geometries = activityGeometriesFor(act.title, act.acts, act.actDesc || [])
        }
        if (act.spatialP) {
          activity.spatialPerception = act.spatialP
        }
        if (act.spatialH) {
          activity.spatialHealth = act.spatialH
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

  // don't log the results to the console any more, the calling function
  // will output them.
  !7 && console.log('per force', res)
  !7 && console.log(Object.values(templates))
  return { activities: res, templates: Object.values(templates) }
}
