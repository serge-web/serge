import { Asset, ForceData, InteractionDetails, MessageAdjudicationOutcomes, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import * as turf from '@turf/turf'
import { Feature, Polygon, Position } from 'geojson'
import { shuffle } from 'lodash'
import moment from 'moment'
import { GeomWithOrders } from '../../support-panel/helpers/gen-order-data'

const checkInArea = (area: Feature<Polygon>, point: [number, number]): boolean => {
  const otherPt = turf.point([point[1], point[0]])
  return turf.booleanPointInPolygon(otherPt, area)
}

export const calculateDetections = (ownFor: ForceData['uniqid'], forces: ForceData[], coords: Position[][],
  startD: number, endD: number, searchRateKm2perHour: number): Array<{ force: ForceData, asset: Asset }> => {
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
  console.log('ISTAR Calc', {
    areaKM2: areaKM2.toFixed(0),
    durationHrs: durationHrs.toFixed(2),
    searchRateKM2h: searchRateKm2perHour.toFixed(2),
    searchProb: searchProb.toFixed(2),
    totalInArea: assetsInArea.length,
    observed: observedAssets.length
  })
  return observedAssets
}

export const istarBoundingBox = (plan: PlannedActivityGeometry[]): PlannedActivityGeometry | undefined => {
  return plan.length === 4 ? plan[2] : undefined
}

export const insertIstarInteractionOutcomes = (interaction: InteractionDetails, geom: GeomWithOrders, geom2: GeomWithOrders | undefined,
    outcomes: MessageAdjudicationOutcomes, thisG: PlanningActivityGeometry | undefined, 
    activity:PlanningActivity, forces: ForceData[]): void => {
      // was this the observation polygon?
      const g1Props = geom.geometry.properties as PlannedProps
      const conductingObvs = (activity.geometries && activity.geometries[2].uniqid === g1Props.geomId) 
      const observationFudgeFactor = conductingObvs ? 1.5 : 0.75
      // ok, sort out the interaction area & period
      const interGeom = interaction.geometry
      const tStart = moment.utc(interaction.startTime).valueOf()
      const tEnd = moment.utc(interaction.endTime).valueOf()
      console.log('istar inter outcomes', geom, geom2, outcomes, thisG, activity, forces, observationFudgeFactor, tStart, tEnd, interGeom)
}
