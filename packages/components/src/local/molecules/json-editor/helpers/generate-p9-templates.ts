import moment from 'moment'
import { tmplASWBarrier, tmplCyber, tmplDuration, tmplEWAttack, tmplISTAR, tmplMineLaying, tmplMissileStrike, tmplPatrol, tmplSOFAttack, tmplTransit, tmplTST } from './p9-specific'

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

export const generateTemplate = (title: string, location: boolean, core: Record<string, any>, domain: Record<string, any>, specific: Record<string, any>): Record<string, any> => {
  const combinedTemplates = { ...core, ...domain, ...specific }
  if (location) {
    combinedTemplates.location = locationComponent
  }
  const fieldNames = Object.keys(combinedTemplates).map((name: string) => name)
  const wrappedDetails = {
    format: 'grid',
    required: fieldNames,
    properties: combinedTemplates,
    title: 'Land Activity',
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
  specific?: Record<string, any>
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
  acts.push({ title: 'Transit', forces: allForces, domains: seaAirLand, acts: thereBack, specific: tmplTransit })
  acts.push({ title: 'Cruise Missile Strike', forces: allForces, domains: landMar, acts: oneWayTwoActivities, actDesc: [assetLocation, strikeTarget], specific: tmplMissileStrike })
  acts.push({ title: 'Stand Off Strike', forces: [air], domains: seaAirLand, acts: thereBackTwoActivities, actDesc: [assetLocation, strikeTarget], specific: tmplTransit })
  acts.push({ title: 'Patrol', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Patrol Area'], specific: tmplPatrol })
  acts.push({ title: 'Ballistic Missile Strike', forces: allForces, domains: seaAirLand, acts: oneWayTwoActivities, actDesc: [assetLocation, strikeTarget], specific: tmplTransit })
  acts.push({ title: 'SAM MEZ', forces: allForces, domains: landMar, acts: [point], actDesc: ['SAM MEZ Location'] })
  acts.push({ title: 'BMD MEZ', forces: allForces, domains: landMar, acts: [point], actDesc: ['BMD MEZ Location'] })
  acts.push({ title: 'FIAC EZ', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['FIAC EZ Location'] })
  acts.push({ title: 'ISTAR', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Observation Area'], specific: tmplISTAR })
  acts.push({ title: 'Offensive Counter Air', forces: allForces, domains: [air], acts: thereBack, actDesc: ['OCA Area'] })
  acts.push({ title: 'Defensive Counter Air', forces: allForces, domains: [air], acts: thereBack, actDesc: ['DCA Area'] })
  acts.push({ title: 'Time Sensitive Targeting (TST)', forces: allForces, domains: [air], acts: thereBack, actDesc: ['TST Area'], specific: tmplTST })
  acts.push({ title: 'Mine Laying', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['Mine Area'], specific: tmplMineLaying })
  acts.push({ title: 'Mine Clearance', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['Mine Clearance Area Area'], specific: tmplDuration })
  acts.push({ title: 'ASW Barrier', forces: allForces, domains: [mar], acts: thereBack, actDesc: ['ASW Area'], specific: tmplASWBarrier })
  acts.push({ title: 'Provide Logistics', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['LOGS Destination'] })
  acts.push({ title: 'Resupply', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['Resupply Destingation'] })
  acts.push({ title: 'EW Attack', forces: allForces, domains: seaAirLand, acts: thereBack, actDesc: ['EW Target'], specific: tmplEWAttack })
  acts.push({ title: 'SOF Activity', forces: allForces, domains: [other], acts: thereBackTwoActivities, actDesc: ['Activity Location', 'Efect Location'], specific: tmplSOFAttack })
  acts.push({ title: 'Cyber/Space Activity', forces: allForces, domains: [other], acts: thereBack, actDesc: ['Activity Location'], specific: tmplCyber })

  return { val: 12 }
}
