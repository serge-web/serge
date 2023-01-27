import { Asset, ForceData, InteractionDetails, MessageAdjudicationOutcomes, PerceptionOutcome, PerceptionOutcomes, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import * as turf from '@turf/turf'
import { booleanPointInPolygon, buffer } from '@turf/turf'
import { Feature, Geometry, Polygon } from 'geojson'
import { shuffle } from 'lodash'
import moment from 'moment'
import { GeomWithOrders } from '../../support-panel/helpers/gen-order-data'

const checkInArea = (area: Feature<Polygon>, point: [number, number]): boolean => {
  const otherPt = turf.point([point[1], point[0]])
  return booleanPointInPolygon(otherPt, area)
}

const bufferShape = (geom: Geometry, bufferKM: number): Polygon => {
  const poly = buffer(geom, bufferKM, {units: 'kilometers'})
  return poly.geometry as Polygon
}

export const calculateDetections = (ownFor: ForceData['uniqid'], forces: ForceData[], areaGeometry: Geometry,
  startD: number, endD: number, searchRateKm2perHour: number, narrative: string): PerceptionOutcomes => {
    console.log('geom type', areaGeometry)
  const box = areaGeometry.type === 'Polygon' ?  areaGeometry as Geometry as Polygon : bufferShape(areaGeometry, 30)
  console.log('POLY', box)
  const coords = box.coordinates
  // calculate prob of detecting sometghing
  console.log('calc detections', ownFor, forces, coords, startD, endD, searchRateKm2perHour)
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
  console.log('istar inter outcomes', geom, geom2, outcomes, thisG, activity, forces, observationFudgeFactor, tStart, tEnd, interGeom)
    
  const ownFor = geom.force

  // calculate the search rate
  // NOTE: for now, this is fixed
  const searchRateKm2perHour = 200000

  // run the calculator
  const perceptions = calculateDetections(ownFor, forces, interGeom, tStart, tEnd, searchRateKm2perHour, 'In interaction area')
  if (perceptions.length > 0) {
    outcomes.perceptionOutcomes.push(...perceptions)
  }
}
