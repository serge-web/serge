import { Asset, ForceData, InteractionDetails, MessageAdjudicationOutcomes, PerceptionOutcome, PerceptionOutcomes, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { findForceAndAsset } from '@serge/helpers'
import * as turf from '@turf/turf'
import { booleanPointInPolygon, buffer } from '@turf/turf'
import { Feature, Geometry, Polygon } from 'geojson'
import { shuffle } from 'lodash'
import moment from 'moment'
import { DEFAULT_SEARCH_RATE } from '..'
import { shortDate } from '../../planning-messages-list/helpers/genData'
import { GeomWithOrders } from '../../support-panel/helpers/gen-order-data'
import { istarSearchRate } from './getNextInteraction'

/** check if the point provided is in the polygon provided */
export const checkInArea = (area: Feature<Polygon>, point: [number, number]): boolean => {
  const otherPt = turf.point([point[1], point[0]])
  return booleanPointInPolygon(otherPt, area)
}

const bufferShape = (geom: Geometry, bufferKM: number): Polygon => {
  const poly = buffer(geom, bufferKM, { units: 'kilometers' })
  return poly.geometry as Polygon
}

export const calculateDetections = (ownFor: ForceData['uniqid'], forces: ForceData[], areaGeometry: Geometry,
  startD: number, endD: number, searchRateKm2perHour: number, narrative: string): PerceptionOutcomes => {
  const box = areaGeometry.type === 'Polygon' ? areaGeometry as Geometry as Polygon : bufferShape(areaGeometry, 30)
  const coords = box.coordinates
  // calculate prob of detecting sometghing
  // convert the boundary to a turn object
  const mePoly = turf.polygon(coords)
  const areaM2 = turf.area(mePoly)
  const areaKM2 = areaM2 / 1000000
  const durationMillis = endD - startD
  const durationHrs = durationMillis / 1000 / 60 / 60
  const searchProb = (searchRateKm2perHour * durationHrs) / areaKM2
  // find all asset in the area
  const assetsInArea: Array<{ force: ForceData, asset: Asset }> = []
  forces.forEach((force: ForceData) => {
    if (force.uniqid !== ownFor) {
      if (force.assets) {
        force.assets.forEach((asset: Asset) => {
          if (asset.location) {
            if (checkInArea(mePoly, asset.location)) {
              assetsInArea.push({ force, asset })
            }
            if (asset.comprising) {
              // check child assets
              asset.comprising.forEach((asset2: Asset) => {
                if (asset2.location) {
                  if (checkInArea(mePoly, asset2.location)) {
                    assetsInArea.push({ force, asset: asset2 })
                  }
                }
              })
            }
          }
        })
      }
    }
  })
  // randomly include some
  const randomised = shuffle(assetsInArea)
  const numToTake = Math.floor(randomised.length * searchProb)
  const observedAssets = randomised.slice(0, numToTake)
  const twoDP = (val: number) => {
    return Math.floor(val * 100) / 100
  }
  const timePeriod = '[' + shortDate(moment.utc(startD).toISOString()) + ' - ' + shortDate(moment.utc(endD).toISOString()) + ']'
  console.log('ISTAR detection calc', ' area (km2):', twoDP(areaKM2), ' time:', timePeriod, ' duration (hrs):', twoDP(durationHrs),
    ' rate:', twoDP(searchRateKm2perHour), ' prob:', twoDP(searchProb), ' in area:', assetsInArea.length, ' detected:', numToTake)

  // create the perceptions
  const perceptions = observedAssets.map((item: {force: ForceData, asset: Asset}): PerceptionOutcome => {
    return {
      force: ownFor,
      asset: item.asset.uniqid,
      perceivedLocation: JSON.stringify(item.asset.location),
      perceivedType: item.asset.platformTypeId,
      perceivedHealth: item.asset.health,
      perceivedName: item.asset.name,
      perceivedForce: item.force.uniqid,
      narrative: narrative
    }
  })

  console.log('ISTAR Calc', {
    a_narrative: narrative,
    areaKM2: areaKM2.toFixed(0),
    durationHrs: durationHrs.toFixed(2),
    searchRateKM2h: searchRateKm2perHour.toFixed(2),
    searchProb: searchProb.toFixed(2),
    totalInArea: assetsInArea.length,
    observed: observedAssets.length
  })

  return perceptions
}

export const istarBoundingBox = (plan: PlannedActivityGeometry[]): PlannedActivityGeometry | undefined => {
  return plan.length === 4 ? plan[2] : undefined
}

export const insertIstarInteractionOutcomes = (interaction: InteractionDetails, geom: GeomWithOrders, geom2: GeomWithOrders | undefined,
  outcomes: MessageAdjudicationOutcomes, thisG: PlanningActivityGeometry | undefined,
  activity: PlanningActivity, forces: ForceData[]): void => {
  // was this the observation polygon?
  const g1Props = geom.geometry.properties as PlannedProps
  const conductingObvs = (activity.geometries && activity.geometries[2].uniqid === g1Props.geomId)
  const observationFudgeFactor = conductingObvs ? 1.5 : 0.75
  // ok, sort out the interaction area & period
  const interGeom = interaction.geometry
  if (!interGeom) {
    console.warn('Cannot create ISTAR interaction without interaction geometry')
    return
  }
  const tStart = moment.utc(interaction.startTime).valueOf()
  const tEnd = moment.utc(interaction.endTime).valueOf()
  !7 && console.log('istar inter outcomes', geom, geom2, outcomes, thisG, activity, forces, observationFudgeFactor, tStart, tEnd, interGeom)

  const ownFor = geom.force

  // calculate the search rate
  const combinedSearchRate = istarSearchRate(geom.plan.message.ownAssets || [], forces, DEFAULT_SEARCH_RATE)


  // run the calculator
  const inAreaPerceptions = calculateDetections(ownFor, forces, interGeom, tStart, tEnd, combinedSearchRate, 'In interaction area')

  const targetPerceptions: PerceptionOutcomes = []

  // also generate perceptions for the op-for
  if (geom2) {
    const oppAssets = geom2.plan.message.ownAssets
    if (oppAssets) {
      // ok, generate perceptions for them
      if (conductingObvs) {
        // asset is conducting obvs, it will see them
        const oppIDs = oppAssets.map((item: { asset: Asset['uniqid'], number?: number, missileType?: string }) => item.asset)
        const detIDs = inAreaPerceptions.map((det): Asset['uniqid'] => det.asset)
        const notDetected = oppIDs.filter((id: Asset['uniqid']) => {
          return !detIDs.includes(id)
        })
        const oppPerceptions = notDetected.map((assetId: string): PerceptionOutcome => {
          const item = findForceAndAsset(forces, assetId)
          return {
            force: ownFor,
            asset: item.asset.uniqid,
            perceivedLocation: JSON.stringify(item.asset.location),
            perceivedType: item.asset.platformTypeId,
            perceivedHealth: item.asset.health,
            perceivedName: item.asset.name,
            perceivedForce: item.force.uniqid,
            narrative: 'Op-for asset travelling through obvs area'
          }
        })
        if (oppPerceptions.length > 0) {
          targetPerceptions.push(...oppPerceptions)
        }
      }
    }
  }

  // have we spotted any in the subject area?
  if (inAreaPerceptions.length) {
    // we found some inter
    const targetIDs = targetPerceptions.map((per) => per.asset)
    const inAreaIds = inAreaPerceptions.map((per) => per.asset)
    // check which in-area ids aren't in target ids
    const notInTarget = inAreaIds.filter((id) => !targetIDs.includes(id))
    if (notInTarget.length) {
      if (!interaction.otherAssets) {
        interaction.otherAssets = []
      }
      interaction.otherAssets.push(...notInTarget)
    }
  }

  // push in the target perceptions first
  if (targetPerceptions.length > 0) {
    outcomes.perceptionOutcomes.push(...targetPerceptions)
  }
  // then the in-area perceptions
  if (inAreaPerceptions.length > 0) {
    outcomes.perceptionOutcomes.push(...inAreaPerceptions)
  }
}
