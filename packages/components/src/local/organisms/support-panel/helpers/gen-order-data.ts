import { GeometryType, PLANNING_MESSAGE } from '@serge/config'
import {
  Asset, ForceData, MessageDetails, MessageDetailsFrom, MessagePlanning,
  PerceivedTypes, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry, Role
} from '@serge/custom-types'
import { PlanningMessageStructure } from '@serge/custom-types/message'
import { findPerceivedAsTypes } from '@serge/helpers'
import moment from 'moment-timezone'
import * as turf from '@turf/turf'
import L from 'leaflet'

const sample: MessagePlanning = {
  messageType: PLANNING_MESSAGE,
  details: {
    channel: 'channel-blue-planning',
    from: {
      force: 'Blue',
      forceColor: '#00F',
      roleName: 'Mar-1',
      roleId: 'rk116f5e',
      iconURL: 'default_img/umpireDefault.png'
    },
    messageType: 'Land Activity',
    timestamp: '2022-09-21T13:15:09.106Z',
    turnNumber: 6
  },
  message: {
    reference: 'Blue-12',
    Date: '13/05/2021 16:12',
    Description: 'More land operations',
    Location: 'Region-A',
    Status: 'Minor',
    title: 'Operation Bravo-12',
    Assets: [
      {
        FEName: 'Blue:4',
        Number: 1,
        StartDate: '13/05/2021',
        EndDate: '14/05/2021'
      },
      {
        FEName: 'Blue:13',
        Number: 4,
        StartDate: '13/05/2021',
        EndDate: '14/05/2021'
      }
    ],
    Targets: [
      {
        FEName: 'Red Force:3',
        Number: 4
      }
    ]
  },
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
  opAsset: PerceivedTypes[]
}

const collateForceData = (forces: ForceData[], createFor: string[]): PerForceData[] => {
  const res: PerForceData[] = createFor.map((forceId: string): PerForceData => {
    const thisForce = forces.find((force: ForceData) => force.uniqid === forceId)
    const opAssets: PerceivedTypes[] = []
    forces.forEach((force: ForceData) => {
      if (force.uniqid !== forceId) {
        if (force.assets) {
          force.assets.forEach((asset: Asset) => {
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
      opAsset: opAssets
    }
  })
  return res
}

const psora = (k: number): number => {
  const r = Math.PI * (k ^ 4)
  return r - Math.floor(r)
}

const randomArrayItem = <Type>(arr: Type[], ctr: number): Type => {
  return arr[Math.floor(arr.length * psora(ctr))]
}

const randomRole = (roles: Role[], ctr: number): Role => {
  return randomArrayItem(roles, ctr) as Role
}

const activityTypes = ['Transit', 'Kinetic', 'Asymmetric']

const locations = ['Point-A', 'Point-B', 'Region-A', 'Region-B', 'Polyline-A', 'Polyline-B']

const geometryFor = (own: Asset, target: Asset, geometry: PlanningActivityGeometry, seed: number): GeoJSON.Feature => {
  switch (geometry.aType) {
    case GeometryType.point: {
      return {
        type: 'Feature',
        properties: {
        },
        geometry: {
          type: 'Point',
          coordinates: target.location || [-104.994, 39.75]
        }
      }
    }
    case GeometryType.polygon: {
      // calculate the reference of cell immediately behind the origin
      const leafPt = target.location || [100, -44]
      const origin = turf.point([leafPt[1], leafPt[0]])
      const rangeKm = Math.floor(psora(seed++) * 40)
      const newTL = turf.destination(origin, rangeKm, 315).geometry.coordinates
      const newBR = turf.destination(origin, rangeKm, 135).geometry.coordinates
      const leafTL = L.latLng(newTL[1], newTL[0])
      const leafBR = L.latLng(newBR[1], newBR[0])
      return {
        type: 'Feature',
        properties: {
        },
        geometry: {
          type: 'Polygon',
          coordinates: [[[leafTL.lat, leafTL.lng], [leafBR.lat, leafBR.lng]]]
        }
      }
    }
    case GeometryType.polyline: {
      const ownPt = own.location || [100, -44]
      const tgtPt = target.location || [100, -44]
      return {
        type: 'Feature',
        properties: {
        },
        geometry: {
          type: 'LineString',
          coordinates: [ownPt, tgtPt]
        }
      }
    }
  }
}

/** produce some planned geometries */
export const geometriesFor = (ownAssets: Asset[], targets: Asset[], activity: PlanningActivity, ctr: number): PlannedActivityGeometry[] => {
  const own = randomArrayItem(ownAssets, ctr++)
  const other = randomArrayItem(targets, ctr++)
  const geoms = activity.geometries
  if (geoms) {
    const res: PlannedActivityGeometry[] = geoms.map((plan: PlanningActivityGeometry): PlannedActivityGeometry => {
      const planned: PlannedActivityGeometry = {
        uniqid: plan.uniqid,
        geometry: geometryFor(own, other, plan, psora(ctr))
      }
      return planned
    })
    return res
  }
  return []
}

const createMessage = (force: PerForceData, ctr: number, orderTypes: PlanningActivity[]): MessagePlanning => {
  // details first
  const from = randomRole(force.roles, ctr)
  const fromD: MessageDetailsFrom = {
    force: force.forceName,
    forceColor: force.forceColor,
    roleName: from.name,
    roleId: from.roleId,
    iconURL: sample.details.from.iconURL,
    forceId: force.forceId
  }
  const details: MessageDetails = {
    channel: sample.details.channel,
    from: fromD,
    messageType: 'Land Activity',
    timestamp: moment('2022-09-21T13:15:09.106Z').add(psora(ctr + 2) * 200, 'h').toISOString(),
    turnNumber: 3
  }
  // assets
  const numAssets = randomArrayItem([1, 2, 3, 4], ctr + 5)
  const assets: Asset[] = []
  for (let k = 0; k < numAssets; k++) {
    let possAsset = randomArrayItem(force.ownAssets, ctr + 3)
    let ctr2 = ctr
    while (assets.includes(possAsset)) {
      possAsset = randomArrayItem(force.ownAssets, ++ctr2)
    }
    assets.push(possAsset)
  }
  const assetObj = assets.map((asset: Asset, index: number) => {
    const startDate = moment('2022-09-21T00:00:00.000Z').add(psora(index + 2) * 5, 'h').startOf('hour').toISOString()
    return {
      FEName: asset.name,
      Number: Math.floor(psora(index) * 5),
      StartDate: startDate,
      EndDate: moment(startDate).add(Math.floor(psora(index + 2) * 19), 'h').toISOString()
    }
  })

  const numTargets = randomArrayItem([1, 2, 3], ctr * 1.4)
  const targets: PerceivedTypes[] = []
  for (let m = 0; m < numTargets; m++) {
    let possTarget = randomArrayItem(force.opAsset, m + 3)
    let ctr2 = ctr
    while (targets.includes(possTarget)) {
      possTarget = randomArrayItem(force.opAsset, ++ctr2)
    }
    targets.push(possTarget)
  }
  const targetObj = targets.map((per: PerceivedTypes, index: number) => {
    return {
      FEName: per.name,
      Number: 1 + Math.floor(psora(ctr + index))
    }
  })

  const activity = randomArrayItem(activityTypes, ctr - 3)
  const startDate = moment('2022-09-21T00:00:00.000Z').add(psora(2) * 5, 'h').startOf('hour').toISOString()
  const message: PlanningMessageStructure = {
    reference: force.forceName + '-' + ctr,
    title: 'Order item ' + ctr + ' ' + activity,
    startDate: startDate,
    endDate: moment(startDate).add(Math.floor(psora(ctr * 2) * 19), 'h').toISOString(),
    Description: 'Order description ' + ctr,
    Location: randomArrayItem(locations, ctr + 8),
    location: geometriesFor([randomArrayItem(force.ownAssets, ctr++)], [randomArrayItem(force.ownAssets, ctr++)], randomArrayItem(orderTypes, ctr++), ctr),
    ActivityType: activity,
    Assets: assetObj,
    Targets: targetObj
  }

  return { ...sample, details: details, message: message, _id: 'm_' + force.forceId + '_' + ctr }
}

export const randomOrdersDocs = (count: number, forces: ForceData[], createFor: string[], orderTypes: PlanningActivity[]): MessagePlanning[] => {
  const res: MessagePlanning[] = []
  const perForce = collateForceData(forces, createFor)
  for (let i = 0; i < count; i++) {
    const authorForce: PerForceData = randomArrayItem(perForce, i)
    res.push(createMessage(authorForce, i + 3, orderTypes))
  }
  return res
}
