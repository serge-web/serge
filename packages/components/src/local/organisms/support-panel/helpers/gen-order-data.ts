import { ADJUDICATION_OUTCOMES, GeometryType, INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import {
  Asset, ForceData, GroupedActivitySet, INTERACTION_SHORT_CIRCUIT, MessageDetails, MessageDetailsFrom, MessagePlanning,
  PerceivedTypes, PerForcePlanningActivitySet, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry, Role
} from '@serge/custom-types'
import { InteractionDetails, MessageAdjudicationOutcomes, MessageInteraction, PlanningMessageStructureCore } from '@serge/custom-types/message'
import { deepCopy, findPerceivedAsTypes } from '@serge/helpers'
import * as turf from '@turf/turf'
import { Position } from '@turf/turf'
import { Feature, Geometry, Polygon } from 'geojson'
import L from 'leaflet'
import _ from 'lodash'
import moment from 'moment-timezone'
import { lineLineContact, linePointContact, linePolyContact, ShapeInteraction, timeIntersect2, TimePeriod } from './shape-intersects'

const msgContents: PlanningMessageStructureCore = {
  Reference: 'Blue-12',
  activity: 'point-recce',
  title: 'Operation Bravo-12',
  ownAssets: [],
  otherAssets: [],
  startDate: moment().toISOString(),
  endDate: moment().toISOString()
}

const sample: MessagePlanning = {
  messageType: PLANNING_MESSAGE,
  details: {
    channel: 'channel-blue-planning',
    from: {
      force: 'Blue',
      forceId: 'F-Blue',
      forceColor: '#00F',
      roleName: 'Mar-1',
      roleId: 'rk116f5e',
      iconURL: 'default_img/umpireDefault.png'
    },
    messageType: 'Land Activity',
    timestamp: '2022-09-21T13:15:09.106Z',
    turnNumber: 6
  },
  message: msgContents,
  hasBeenRead: false,
  _id: 'idp_3a',
  _rev: '2'
}

interface PerForceData {
  forceId: ForceData['uniqid']
  forceName: ForceData['name']
  forceColor: ForceData['color']
  roles: Role[]
  ownAssets: Asset[]
  otherAssets: Asset[]
  opAsset: PerceivedTypes[]
}

/** object that lets us put the parent orders object into
 * a planned geometry
 */
export interface GeomWithOrders extends PlannedActivityGeometry {
  /**
   *  the set of orders this geometry relates to
   */
  activity: MessagePlanning
  /**
   * the force these orders belong to
   */
  force: ForceData['uniqid']
  /**
   * id for this state/activity
   */
  id: string
}

/** an event created from just one set of plans */
export interface ShortCircuitEvent {
  id: string
  message: MessagePlanning
  activity: PlanningActivity
  // the type of event that triggered this
  event: INTERACTION_SHORT_CIRCUIT
  /** the specific geometry that relates to, if known */
  geomId: PlannedActivityGeometry['uniqid'] | undefined
  timeStart: number // unix millis
  timeEnd: number // unix millis
  intersection?: Geometry
  /** optional set of default adjud outcomes for this contact (typically
   * used when we short-circuit interaction generation) */
  outcomes?: MessageAdjudicationOutcomes
}

/** an instance of one geometry interacting with another */
export interface PlanningContact {
  id: string
  first: GeomWithOrders
  second: GeomWithOrders
  intersection?: Geometry
  timeStart: number // unix millis
  timeEnd: number // unix millis
  /** optional set of default adjud outcomes for this contact (typically
   * used when we short-circuit interaction generation) */
  outcomes?: MessageAdjudicationOutcomes
}

const collateForceData = (forces: ForceData[], createFor: string[]): PerForceData[] => {
  const res: PerForceData[] = createFor.map((forceId: string): PerForceData => {
    const thisForce = forces.find((force: ForceData) => force.uniqid === forceId)
    const opAssets: PerceivedTypes[] = []
    const realOpAssets: Asset[] = []
    forces.forEach((force: ForceData) => {
      if (force.uniqid !== forceId) {
        if (force.assets) {
          force.assets.forEach((asset: Asset) => {
            if (asset.location) {
              const perceivedAsTypes: PerceivedTypes | null = findPerceivedAsTypes(
                forceId,
                asset.name,
                !!(force.visibleTo && force.visibleTo.includes(forceId)),
                asset.contactId,
                force.uniqid,
                asset.platformTypeId,
                asset.perceptions
              )
              if (perceivedAsTypes) {
                opAssets.push(perceivedAsTypes)
                realOpAssets.push(asset)
              }
            }
          })
        }
      }
    })
    return {
      forceId: forceId,
      forceName: (thisForce && thisForce.name) || '',
      forceColor: (thisForce && thisForce.color) || '',
      roles: thisForce ? thisForce.roles : [],
      ownAssets: (thisForce && thisForce.assets) || [],
      opAsset: opAssets,
      otherAssets: realOpAssets
    }
  })
  return res
}

/** return a pseudo random number between 0 and 1 */
const psora = (k: number): number => {
  const m = Math.pow(3 + k, 2)
  const r = Math.PI * m
  const res = r - Math.floor(r)
  return res
}

export const randomArrayItem = <Type>(arr: Type[], ctr: number): Type => {
  return arr[Math.floor(arr.length * psora(ctr))]
}

const randomRole = (roles: Role[], ctr: number): Role => {
  return randomArrayItem(roles, ctr) as Role
}

const flipMe = (point: number[]): number[] => {
  return [point[1], point[0]]
}

/** generate the time intersection between the two geometries */
export const timeIntersect = (me: GeomWithOrders, other: GeomWithOrders): number[] => {
  const meProps = me.geometry.properties as PlannedProps
  const otherProps = other.geometry.properties as PlannedProps

  if (meProps.startTime > otherProps.endTime || meProps.endTime < otherProps.startTime) {
    typeof jest === 'undefined' && console.warn('Geometries do not overlap in time')
    return []
  }

  const start = Math.max(meProps.startTime || -1, otherProps.startTime || -1)
  const end = Math.min(meProps.endTime || -1, otherProps.endTime || -1)
  return [start, end]
}

export const timePeriodForGeom = (geom: GeomWithOrders): TimePeriod => {
  const props = geom.geometry.properties as PlannedProps
  return [props.startTime || -1, props.endTime || -1]
}

const geometryFor = (own: Asset, ownForce: ForceData['uniqid'], target: Asset, geometry: PlanningActivityGeometry, seedIn: number, timeStart: string, timeFinish: string,
  activity: PlanningActivity): Feature => {
  const seed = psora(seedIn + 6)
  const dummyLocation = [39.75, -104.994]
  const dateProps: PlannedProps = {
    id: activity.name + '//' + geometry.name,
    startDate: timeStart,
    endDate: timeFinish,
    force: ownForce,
    startTime: moment(timeStart).valueOf(),
    endTime: moment(timeFinish).valueOf(),
    geomId: geometry.uniqid,
    name: ownForce + '//' + seedIn + '//' + geometry.name
  }
  switch (geometry.aType) {
    case GeometryType.point: {
      const loc = target.location || dummyLocation
      return {
        type: 'Feature',
        properties: dateProps,
        geometry: {
          type: 'Point',
          coordinates: flipMe(loc)
        }
      }
    }
    case GeometryType.polygon: {
      // calculate the reference of cell immediately behind the origin
      const leafPt = target.location || dummyLocation
      const origin = turf.point([leafPt[1], leafPt[0]])
      const rangeKm = 30 + psora(seed) * 600
      const newTL = turf.destination(origin, rangeKm, 315).geometry.coordinates
      const newBR = turf.destination(origin, rangeKm, 135).geometry.coordinates
      const leafTL = L.latLng(newTL[0], newTL[1])
      const leafBR = L.latLng(newBR[0], newBR[1])
      const coords = [[[leafTL.lat, leafTL.lng], [leafTL.lat, leafBR.lng], [leafBR.lat, leafBR.lng], [leafBR.lat, leafTL.lng], [leafTL.lat, leafTL.lng]]]
      return {
        type: 'Feature',
        properties: dateProps,
        geometry: {
          type: 'Polygon',
          coordinates: coords
        }
      }
    }
    case GeometryType.polyline:
    default: {
      const ownPt = own.location || dummyLocation
      const tgtPt = target.location || dummyLocation
      const numBreaks = Math.floor(psora(seed) * 4) + 1
      const deltaLat = (tgtPt[0] - ownPt[0]) / numBreaks
      const deltaLng = (tgtPt[1] - ownPt[1]) / numBreaks
      const path = [flipMe(ownPt)]
      for (let i = 1; i <= numBreaks; i++) {
        const variance = 0.5
        const newPtLat = ownPt[0] + deltaLat * i - variance + psora(seed + i) * 2 * variance
        const newPtLng = ownPt[1] + deltaLng * i - variance + psora(seed - i) * 2 * variance
        const roundedLat = Math.trunc(newPtLat * 100) / 100
        const roundedLng = Math.trunc(newPtLng * 100) / 100
        const pt = [roundedLat, roundedLng]
        path.push(flipMe(pt))
      }
      path.push(flipMe(tgtPt))
      return {
        type: 'Feature',
        properties: dateProps,
        geometry: {
          type: 'LineString',
          coordinates: path
        }
      }
    }
  }
}

/** produce some planned geometries */
export const geometriesFor = (ownAssets: Asset[], ownForce: ForceData['uniqid'], targets: Asset[], activity: PlanningActivity, ctr: number, timeNow: moment.Moment): PlannedActivityGeometry[] => {
  const own = randomArrayItem(ownAssets, ctr++)
  const other = randomArrayItem(targets, ctr++)
  const geoms = activity.geometries
  if (geoms) {
    const res: PlannedActivityGeometry[] = geoms.map((plan: PlanningActivityGeometry, index: number): PlannedActivityGeometry => {
      const timeStart = timeNow
      const minsOffset = Math.floor(psora(1 + index * ctr) * 20) * 10
      const timeEnd = timeStart.clone().add(minsOffset, 'm')
      const lastItemIsLeg = geoms.length > 1 && index === geoms.length - 1 && GeometryType.polyline
      const assetToUseAsOwn = lastItemIsLeg ? other : own
      const assetToUseAsOther = lastItemIsLeg ? own : other
      const planned: PlannedActivityGeometry = {
        uniqid: plan.uniqid,
        geometry: geometryFor(assetToUseAsOwn, ownForce, assetToUseAsOther, plan, ctr * (1 + index), timeStart.toISOString(), timeEnd.toISOString(), activity)
      }
      timeNow = timeEnd
      return planned
    })
    return res
  }
  return []
}

const createMessage = (channelId: string, force: PerForceData, ctr: number, orderTypes: PerForcePlanningActivitySet[], timeNow: moment.Moment): MessagePlanning => {
  let localCtr = ctr

  // details first
  const from = randomRole(force.roles, 4 + localCtr)
  const fromD: MessageDetailsFrom = {
    force: force.forceName,
    forceColor: force.forceColor,
    roleName: from.name,
    roleId: from.roleId,
    iconURL: sample.details.from.iconURL,
    forceId: force.forceId
  }

  // get activities for this force
  const thisForceActivities = orderTypes.find((orders) => orders.force === force.forceId)
  const flatArray = thisForceActivities && thisForceActivities.groupedActivities.map((group) => group.activities)
  const flatActivities = thisForceActivities ? _.flatten(flatArray) as unknown as PlanningActivity[] : []
  const activity = randomArrayItem(flatActivities, localCtr++)

  const needsMissiles = (activity.template && activity.template.includes('Strike'))

  const missileTypes = [
    'SRBM',
    'MRBM',
    'IRBM',
    'Standard Cruise',
    'Low Obs Cruise',
    'Propellor OWA UAV',
    'Jet OWA UAV']

  // assets
  const numAssets = randomArrayItem([1, 2, 3, 4], localCtr + 5)
  const assets: Asset[] = []
  for (let k = 0; k < numAssets; k++) {
    let possAsset = randomArrayItem(force.ownAssets, 1 + k + localCtr + 3)
    let ctr2 = localCtr
    while (assets.includes(possAsset)) {
      possAsset = randomArrayItem(force.ownAssets, ++ctr2)
    }
    assets.push(possAsset)
  }
  const assetsArr = assets.map((asset: Asset) => {
    const res = { asset: asset.uniqid, number: Math.floor(Math.random() * 6) } as any
    if (needsMissiles) {
      res.missileType = randomArrayItem(missileTypes, ++localCtr)
    }
    return res
  })

  const numTargets = randomArrayItem([1, 2, 3], ++localCtr * 1.4)
  const targets: Asset[] = []
  for (let m = 0; m < numTargets; m++) {
    let possTarget = randomArrayItem(force.otherAssets, m + 3)
    let ctr2 = localCtr
    while (targets.find((asset: Asset) => asset.uniqid === possTarget.uniqid)) {
      possTarget = randomArrayItem(force.otherAssets, ++ctr2)
    }
    targets.push(possTarget)
  }
  const targetsAarr = targets.map((asset: Asset) => {
    const res = { asset: asset.uniqid } as any
    if (needsMissiles) {
      res.missileType = randomArrayItem(missileTypes, ++localCtr)
      res.number = Math.floor(Math.random() * 6)
    }
    return res
  })

  const geometries = geometriesFor([randomArrayItem(force.ownAssets, localCtr++)], force.forceId, [randomArrayItem(force.otherAssets, localCtr++)],
    activity, 5 * psora(4 * localCtr), timeNow)

  // sort out the overall time period
  let startDate: moment.Moment | undefined
  let endDate: moment.Moment | undefined
  geometries.forEach((val: PlannedActivityGeometry) => {
    const props = val.geometry.properties
    if (props) {
      const thisStart = moment(props.startDate)
      const thisEnd = moment(props.endDate)
      if (!startDate || thisStart.isBefore(startDate)) {
        startDate = thisStart.clone()
      }
      if (!endDate || thisEnd.isAfter(endDate)) {
        endDate = thisEnd.clone()
      }
    }
  })

  if (!startDate) {
    const timeStart = timeNow
    startDate = timeStart
  }

  if (!endDate) {
    const timeStart = timeNow
    const minsOffset = Math.floor(psora(2 * localCtr) * 20) * 10
    const timeEnd = timeStart.clone().add(minsOffset, 'm')
    endDate = timeEnd
  }

  // sort out the start/stop time for the geometries

  const details: MessageDetails = {
    channel: channelId,
    from: fromD,
    messageType: activity.template,
    timestamp: moment('2022-09-21T13:15:09.106Z').add(psora(localCtr + 2) * 200, 'h').toISOString(),
    turnNumber: 3
  }

  // create the message
  const message: PlanningMessageStructureCore = {
    Reference: force.forceName + '-' + ctr,
    title: 'Order item ' + localCtr,
    startDate: startDate && startDate.toISOString(),
    endDate: endDate && endDate.toISOString(),
    activity: activity.uniqid,
    ownAssets: assetsArr,
    otherAssets: targetsAarr
  }

  // inject location, if necessary
  if (geometries.length > 0) {
    message.location = geometries
  }
  return { ...sample, details: details, message: message, _id: 'm_' + force.forceId + '_' + ctr }
}

const findGeometryInGroup = (geomId: string, group: GroupedActivitySet): PlanningActivityGeometry | undefined => {
  let activity: PlanningActivityGeometry | undefined
  group.activities.forEach((act: string | PlanningActivity) => {
    if (typeof act === 'string') {
      throw new Error('Found string definition for activity. Should be real activity')
    } else {
      const match = act.geometries && act.geometries.find((val: PlanningActivityGeometry) => val.uniqid === geomId)
      if (match) {
        activity = match
      }
    }
  })
  return activity
}

/** find an activity if we don't know what group it's in */
export const findActivityInGroup = (activityId: string, group: GroupedActivitySet): PlanningActivity => {
  const activity = group.activities.find((act: string | PlanningActivity) => {
    if (typeof act === 'string') {
      throw new Error('Found string definition for activity. Should be real activity')
    } else {
      return act.uniqid === activityId
    }
  })
  if (activity === undefined) {
    throw new Error('Found string definition for activity. Should be real activity')
  } else {
    return activity as PlanningActivity
  }
}

export const findPlanningGeometry = (id: string, forceId: string, activities: PerForcePlanningActivitySet[]): string => {
  const force = activities.find((val: PerForcePlanningActivitySet) => val.force === forceId)
  if (!force) {
    console.log('activities', activities, forceId)
    throw Error('Failed to find activities for this force:' + forceId + ' ' + activities.length)
  }
  const group = force.groupedActivities.find((val: GroupedActivitySet) => {
    return !!findGeometryInGroup(id, val)
  })
  if (!group) {
    console.log('Failed to find group in force 2', forceId, 'id:', id)
    force.groupedActivities.forEach((group) => {
      console.table(group.activities)
    })
    throw Error('Failed to find group activities for this activity:' + id)
  }
  const activity = findGeometryInGroup(id, group)
  if (!activity) {
    throw Error('Failed to find group activities for this activity 2:' + id)
  }
  return activity.name
}

export const findActivity = (id: string, category: GroupedActivitySet['category'], forceId: string, activities: PerForcePlanningActivitySet[]): PlanningActivity => {
  const force = activities.find((val: PerForcePlanningActivitySet) => val.force === forceId)
  if (!force) {
    console.log('activities', activities)
    throw Error('Failed to find activities for this force:' + forceId + ' ' + activities.length)
  }
  const group = force.groupedActivities.find((val: GroupedActivitySet) => val.category === category)
  if (!group) {
    throw Error('Failed to find group activities for this activity:' + id)
  }
  const activity = findActivityInGroup(id, group)
  if (!activity) {
    throw Error('Failed to find group activities for this activity:' + id)
  } else {
    return activity
  }
}

export const ordersStartingBeforeTime = (messages: MessagePlanning[], time: number): MessagePlanning[] => {
  return messages.filter((msg) => {
    const tStart = moment(msg.message.startDate).valueOf()
    return tStart <= time
  })
}

export const ordersEndingAfterTime = (messages: MessagePlanning[], time: number): MessagePlanning[] => {
  return messages.filter((msg) => {
    const tEnd = moment(msg.message.endDate).valueOf()
    return tEnd >= time
  })
}

export const ordersOverlappingTime = (messages: MessagePlanning[], time: number): MessagePlanning[] => {
  const beforeTime = ordersStartingBeforeTime(messages, time)
  const afterTime = ordersEndingAfterTime(beforeTime, time)
  return afterTime
}

// utility, since sometimes GeoMan doesn't close polys
const fixPoly = (coords: number[][]): Position[] => {
  const tmpCoors = deepCopy(coords) as number[][]
  // we occasionally get unclosed polygons, since GeoMan didn't close them
  const data = tmpCoors[0]
  const tLen = data.length
  if (!_.isEqual(data[tLen - 1], data[0])) {
    // pop the first one on the end
    data.push(data[0])
    tmpCoors[0] = data
  }
  return tmpCoors as Position[]
}

export const invertMessages = (messages: MessagePlanning[], activities: PerForcePlanningActivitySet[]): GeomWithOrders[] => {
  const res: GeomWithOrders[] = []
  messages.forEach((message: MessagePlanning) => {
    if (message.message.location) {
      const forceId = message.details.from.forceId || 'unknown'
      message.message.location.forEach((plan: PlannedActivityGeometry) => {
        if (plan.geometry.geometry.type === 'Polygon') {
          const geom = plan.geometry.geometry as any
          geom.coordinates = fixPoly(geom.coordinates)
        }
        const fromBit = message.details.from
        const activity = findPlanningGeometry(plan.uniqid, forceId, activities)
        const id = message.message.Reference + '//' + message.message.title + '//' + activity
        const newItem: GeomWithOrders = { ...plan, activity: message, force: fromBit.forceId || fromBit.force, id: id }
        if (!newItem.geometry.properties) {
          newItem.geometry.properties = {}
        }
        const props = newItem.geometry.properties as PlannedProps
        props.name = message.details.from.force + '//' + message.message.title + '//' + activity
        props.geomId = plan.uniqid
        props.force = forceId
        // fill in date/time, if not present
        if (!props.startDate) {
          if (message.message.startDate) {
            props.startDate = message.message.startDate
            props.startTime = moment(props.startDate).valueOf()
          }
          if (message.message.endDate) {
            props.endDate = message.message.endDate
            props.endTime = moment(props.endDate).valueOf()
          }
        }
        res.push(newItem)
      })
    }
  })
  return res
}

const getDocFromThisForce = (messages: MessagePlanning[], forceId: string): MessagePlanning => {
  let found
  while (!found) {
    const doc = messages[Math.floor(Math.random() * messages.length)]
    if (doc.details.from.forceId === forceId) {
      found = doc
    }
  }
  return found as MessagePlanning
}

const outerTimeFor = (docs: MessagePlanning[]): TimePeriod => {
  let res: TimePeriod | undefined
  docs.forEach((doc) => {
    const msg = doc.message
    const tStart = moment(msg.startDate).utc().valueOf()
    const tEnd = moment(msg.endDate).utc().valueOf()
    const period: TimePeriod = [tStart, tEnd]
    if (!res) {
      res = period
    } else {
      res = timeIntersect2(period, res)
    }
  })
  return res as unknown as TimePeriod
}

export const randomOrdersDocs = (channelId: string, count: number, forces: ForceData[], createFor: string[], orderTypes: PerForcePlanningActivitySet[],
  adjudicationTemplateId: string, startTimeStr: string): Array<MessagePlanning | MessageInteraction> => {
  const res: Array<MessagePlanning | MessageInteraction> = []
  const perForce = collateForceData(forces, createFor)
  let startTime = moment(startTimeStr)
  for (let i = 0; i < count; i++) {
    const willIncrement = psora(2 + i) > 0.5
    const minsOffset = willIncrement ? Math.floor(psora(1 + i) * 5) * 5 : 0
    startTime = startTime.add(minsOffset, 'm')
    const authorForce: PerForceData = randomArrayItem(perForce, 3 + i)
    const newMessage = createMessage(channelId, authorForce, 2 + i * 3, orderTypes, startTime)
    res.push(newMessage)
  }
  // have a go at a couple of interactions
  const umpires = forces[0]
  const umpireRoles = forces[0].roles
  const justPlanning = deepCopy(res) as MessagePlanning[]
  const interactions: MessageInteraction[] = []
  let ctr = 0
  const numInteractions = count > 40 ? 5 : 2
  umpireRoles.forEach((role) => {
    for (let i = 0; i < numInteractions; i++) {
      // find a force-1 doc
      const doc1 = getDocFromThisForce(justPlanning, createFor[0])
      const doc2 = getDocFromThisForce(justPlanning, createFor[1])
      const time = outerTimeFor([doc1, doc2])
      const reference = forces[0].uniqid + '-' + ++ctr
      const interaction: InteractionDetails = {
        startTime: moment(time[0]).toISOString(),
        endTime: moment(time[1]).toISOString(),
        id: reference,
        orders1: doc1._id,
        orders2: doc2._id,
        complete: true
      }
      const from: MessageDetailsFrom = {
        force: umpires.name,
        forceColor: umpires.color,
        forceId: umpires.uniqid,
        iconURL: '',
        roleId: role.roleId,
        roleName: role.name
      }
      const details: MessageDetails = {
        from: from,
        channel: channelId,
        messageType: adjudicationTemplateId,
        timestamp: moment().toISOString(),
        turnNumber: doc1.details.turnNumber,
        counter: ctr,
        interaction: interaction
      }
      const msgBody: MessageAdjudicationOutcomes = {
        Reference: reference,
        healthOutcomes: [],
        important: psora(3 + i) > 0.7,
        locationOutcomes: [],
        perceptionOutcomes: [],
        narrative: '',
        messageType: ADJUDICATION_OUTCOMES
      }
      const msgInt: MessageInteraction = {
        messageType: INTERACTION_MESSAGE,
        details: details,
        message: msgBody,
        _id: moment().toISOString() + '//' + interactions.length
      }
      // check it's not already present
      if (!interactions.find((inter) => inter.message.Reference === msgInt.message.Reference)) {
        interactions.push(msgInt)
      }
    }
  })
  res.push(...interactions)
  return res
}

export const overlapsInTime = (me: GeomWithOrders, other: GeomWithOrders): boolean => {
  const myProps = me.geometry.properties as PlannedProps
  const otherProps = other.geometry.properties as PlannedProps
  if (myProps && otherProps && myProps.startTime && myProps.endTime && otherProps.startTime && otherProps.endTime) {
    return (myProps.startTime <= otherProps.endTime && myProps.endTime >= otherProps.startTime)
  }
  return true
}

export const injectTimes = (orders: GeomWithOrders[]): GeomWithOrders[] => {
  return orders.map((order: GeomWithOrders) => {
    if (order.geometry.properties) {
      const planned = order.geometry.properties as PlannedProps
      if (!planned.startTime) {
        console.warn('Geometry time missing, injecting times for whole orders')
        planned.startTime = moment(planned.startDate).valueOf()
        planned.endTime = moment(planned.endDate).valueOf()
      }
    }
    return order
  })
}

export const findPlannedGeometries = (orders: GeomWithOrders[], time: number, windowMins: number): GeomWithOrders[] => {
  const timeStart = moment(time)
  const timeEnd = moment(time).add(windowMins, 'm')
  const inWindow = orders.filter((value: GeomWithOrders) => {
    const props = value.geometry.properties as PlannedProps
    const geomStart = props.startDate ? moment(props.startDate) : moment(props.startTime)
    const geomEnd = props.endDate ? moment(props.endDate) : moment(props.startTime)
    return geomStart.isSameOrBefore(timeEnd) && geomEnd.isSameOrAfter(timeStart)
  })
  return deepCopy(inWindow)
}

const clean = (val: number): number => {
  const scalar = 1000
  return Math.floor(val * scalar) / scalar
}

export const spatialBinning = (orders: GeomWithOrders[], binsPerSide: number): turf.Feature[] => {
  let bounds: L.LatLngBounds | undefined
  orders.forEach((geom: GeomWithOrders) => {
    const geoAny = geom.geometry.geometry as any
    let coords
    switch (geom.geometry.geometry.type) {
      case 'LineString': {
        coords = geoAny.coordinates
        break
      }
      case 'Point': {
        coords = geoAny.coordinates
        break
      }
      case 'Polygon': {
        coords = geoAny.coordinates[0][0]
        break
      }
    }

    coords && coords.forEach((point: number[]) => {
      const pt = L.latLng(point[1], point[0])
      if (!bounds) {
        bounds = L.latLngBounds(pt, pt)
      } else {
        bounds.extend(pt)
      }
    })
  })
  const boxes: turf.Feature[] = []
  if (bounds) {
    const height = bounds.getNorth() - bounds.getSouth()
    const width = bounds.getEast() - bounds.getWest()
    const heightDelta = height / binsPerSide
    const widthDelta = width / binsPerSide
    for (let x = 0; x < binsPerSide; x++) {
      for (let y = 0; y < binsPerSide; y++) {
        const bX = clean(bounds.getWest() + x * widthDelta)
        const bY = clean(bounds.getSouth() + y * heightDelta)
        const tX = clean(bX + widthDelta)
        const tY = clean(bY + heightDelta)
        const poly = [[[bX, bY], [tX, bY], [tX, tY], [bX, tY], [bX, bY]]]
        const turfPoly = turf.polygon(poly)
        if (!turfPoly.properties) {
          turfPoly.properties = {}
        }
        turfPoly.properties.name = 'box_' + (x * binsPerSide + y)
        // pushGeo(poly)
        boxes.push(turfPoly)
      }
    }
  }
  return boxes
}

export interface SpatialBin {
  polygon: turf.Feature
  orders: GeomWithOrders[]
}

export const putInBin = (orders: GeomWithOrders[], bins: turf.Feature[]): SpatialBin[] => {
  const res: SpatialBin[] = []
  bins.forEach((poly: turf.Feature, _index: number) => {
    const thisBin: SpatialBin = {
      polygon: poly,
      orders: []
    }
    const polyGeo = poly.geometry as any
    const turfPoly = turf.polygon(polyGeo.coordinates)
    orders.forEach((order: GeomWithOrders) => {
      const geom = order.geometry.geometry as any
      const coords = geom.coordinates
      switch (order.geometry.geometry.type) {
        case 'Point': {
          const pt = turf.point(coords)
          if (turf.booleanPointInPolygon(pt, turfPoly)) {
            thisBin.orders.push(order)
          }
          break
        }
        case 'LineString': {
          const lineS = turf.lineString(coords)
          if (turf.booleanCrosses(lineS, poly)) {
            thisBin.orders.push(order)
          }
          break
        }
        case 'Polygon': {
          const coords2 = fixPoly(coords)
          const thisPoly = turf.polygon(coords2 as any)
          // note: overlap return false if one contains the other, so also
          // note: check for one containing the other
          if (turf.booleanOverlap(poly, thisPoly) || turf.booleanContains(poly, thisPoly) || turf.booleanContains(thisPoly, poly)) {
            thisBin.orders.push(order)
          }
          break
        }
      }
    })
    // store the bin count
    if (!poly.properties) {
      poly.properties = {}
    }
    poly.properties.orderNum = thisBin.orders.length
    res.push(thisBin)
  })
  return res
}

const differentForces = (me: GeomWithOrders, other: GeomWithOrders): boolean => {
  return me.force !== other.force
}

export const createContactReference = (me: string, other: string): string => {
  return me + ' ' + other
}

export const findTouching = (geometries: GeomWithOrders[], interactionsConsidered: string[],
  interactionsProcessed: string[], interactionsTested: Record<string, PlanningContact | null>,
  sensorRangeKm: number): PlanningContact[] => {
  const res: PlanningContact[] = []
  geometries.forEach((me: GeomWithOrders, myIndex: number) => {
    geometries.forEach((other: GeomWithOrders, otherIndex: number) => {
      // check it's not me
      if (myIndex !== otherIndex) {
        // generate IDs, to ensure we don't compare shapes twice
        const meFirst = (me.id < other.id)
        const first = meFirst ? me : other
        const second = meFirst ? other : me
        const id = createContactReference(first.id, second.id)
        // have we already checked this permutation (maybe in another bin)?
        if (!interactionsConsidered.includes(id)) {
          // has it already been adjudicated
          if (!interactionsProcessed.includes(id)) {
            interactionsConsidered.push(id)
            if (differentForces(me, other) && overlapsInTime(me, other)) {
              // see if we have a cached contact
              const cachedResult = interactionsTested[id]
              if (cachedResult !== undefined) {
                if (cachedResult !== null) {
                  res.push(cachedResult)
                }
              } else {
                const contact = touches(me, other, id, Math.random, sensorRangeKm)
                if (contact) {
                  res.push(contact)
                }
                interactionsTested[id] = contact || null
              }
            }
          }
        }
      }
    })
  })
  return res
}

export const touches = (me: GeomWithOrders, other: GeomWithOrders, id: string, _randomizer: { (): number }, lineSensorRangeKm: number): PlanningContact | null => {
  const geom = me.geometry.geometry as any
  const myCoords = geom.coordinates
  const geom2 = other.geometry.geometry as any
  const otherCoords = geom2.coordinates
  const myTime = timePeriodForGeom(me)
  const otherTime = timePeriodForGeom(other)
  let res: PlanningContact | boolean | undefined
  let intersection: ShapeInteraction | undefined
  const titles: string[] = []
  const monitor = (titles.includes(me.id) && titles.includes(other.id))
  const intersectionTime = timeIntersect2(myTime, otherTime)
  if (titles.length > 0) {
    // ok, we're looking for something.  If this permutation matches it, carry on - else
    // return null.
    if (monitor) {
      console.log('touches', me.geometry.geometry.type, other.geometry.geometry.type)
    } else {
      console.log('TOUCHES didn\'t match specified IDs. Dropping out')
      return null
    }
  }
  switch (me.geometry.geometry.type) {
    case 'Point': {
      const mePt = turf.point(myCoords)
      switch (other.geometry.geometry.type) {
        case 'Point': {
          const otherPt = turf.point(otherCoords)
          res = turf.booleanEqual(mePt, otherPt)
          if (res) {
            intersection = {
              startTime: intersectionTime[0],
              endTime: intersectionTime[1],
              intersection: mePt
            }
          }
          break
        }
        case 'LineString': {
          const otherLine = turf.lineString(otherCoords)
          res = turf.booleanPointOnLine(mePt, otherLine)
          if (res) {
            intersection = linePointContact(otherLine.geometry, otherTime, mePt.geometry, myTime)
            if (!intersection) {
              res = undefined
            }
          }
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          res = (turf.booleanPointInPolygon(mePt, turfPoly))
          if (res) {
            intersection = {
              startTime: intersectionTime[0],
              endTime: intersectionTime[1],
              intersection: mePt
            }
          }
          break
        }
      }
      break
    }
    case 'LineString': {
      const meLine = turf.lineString(myCoords)
      switch (other.geometry.geometry.type) {
        case 'Point': {
          const otherPt = turf.point(otherCoords)
          res = turf.booleanPointOnLine(otherPt, meLine)
          if (res) {
            intersection = linePointContact(meLine.geometry, myTime, otherPt.geometry, otherTime)
            if (!intersection) {
              res = undefined
            }
          }
          break
        }
        case 'LineString': {
          const otherLine = turf.lineString(otherCoords)
          const inter = turf.lineIntersect(meLine, otherLine)
          res = inter.features.length > 0
          if (res) {
            intersection = lineLineContact(meLine.geometry, myTime, otherLine.geometry, otherTime, lineSensorRangeKm)
            if (!intersection) {
              res = undefined
            }
          }
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          res = (turf.booleanCrosses(meLine, turfPoly))
          if (res) {
            intersection = linePolyContact(meLine.geometry, myTime, turfPoly.geometry, otherTime)
            // if the line doesn't actually enter poly when it's running, cancel contact
            if (!intersection) {
              res = undefined
            }
          }
          break
        }
      }
      break
    }
    case 'Polygon': {
      const mePoly = turf.polygon(myCoords)
      switch (other.geometry.geometry.type) {
        case 'Point': {
          const otherPt = turf.point(otherCoords)
          res = turf.booleanPointInPolygon(otherPt, mePoly)
          if (res) {
            intersection = {
              startTime: intersectionTime[0],
              endTime: intersectionTime[1],
              intersection: otherPt
            }
          }
          break
        }
        case 'LineString': {
          const otherLine = turf.lineString(otherCoords)
          res = turf.booleanCrosses(mePoly, otherLine)
          if (res) {
            intersection = linePolyContact(otherLine.geometry, otherTime, mePoly.geometry, myTime)
            // if the line doesn't actually enter poly when it's running, cancel contact
            if (!intersection) {
              res = undefined
            }
          }
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          // if one contains the other, overlap doesn't work
          const overlaps = turf.booleanOverlap(mePoly, turfPoly)
          const aContainsB = turf.booleanContains(mePoly, turfPoly)
          const bContainsA = turf.booleanContains(turfPoly, mePoly)
          res = overlaps || aContainsB || bContainsA
          if (res) {
            let intersects
            // if they overlap, then intersect returns intersecting region
            // but, if one contains the other, the `other` represents the intersection
            if (overlaps) {
              intersects = turf.intersect(mePoly, turfPoly) as Feature<Polygon>
            } else if (aContainsB) {
              intersects = turfPoly
            } else {
              intersects = mePoly
            }
            if (!intersects) {
              throw Error('One method reported overlap, the other didn\'t')
            }
            const fPoly = turf.polygon(intersects.geometry.coordinates)
            intersection = {
              startTime: intersectionTime[0],
              endTime: intersectionTime[1],
              intersection: fPoly
            }
          }
          break
        }
      }
      break
    }
  }
  if (res === undefined) {
    // console.warn('Didn\'t handle this case', me, other)
    return null
  } else {
    if (res) {
      if (intersection) {
        const contact: PlanningContact = {
          first: me,
          second: other,
          id: id,
          intersection: intersection.intersection.geometry,
          timeStart: intersection.startTime,
          timeEnd: intersection.endTime
        }
        return contact
      }
    }
    return null
  }
}
