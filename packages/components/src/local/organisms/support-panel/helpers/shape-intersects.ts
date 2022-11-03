import * as turf from '@turf/turf'
import { Feature, LineString, Point, Polygon } from 'geojson'

/** the interaction of two shapes */
export interface ShapeInteraction {
  startTime: number
  endTime: number
  intersection: Feature
}

export type TimePeriod = number[]

export const linePointContact = (line: LineString, lineTime: TimePeriod, point: Point, polyTime: TimePeriod): ShapeInteraction | undefined => {
  // trim the line to the valid period of the point
  const tLine: LineString | undefined = trimLineToPeriod(line, lineTime, polyTime)
  if (tLine) {
    // now re-check if the line and point interact
    const onLine = turf.booleanPointOnLine(point, tLine)
    if (onLine) {
      // sort out the time of the interaction
      const fLine: Feature<LineString> = turf.lineString(tLine.coordinates)
      const fPoint: Feature<Point> = turf.point(point.coordinates)
      const beforeSection = turf.lineSplit(fLine, fPoint).features[0]
      const pointLength = turf.length(beforeSection)
      const totalLength = turf.length(fLine)
      const period = timeIntersect2(lineTime, polyTime)
      const proportion = pointLength / totalLength
      const time = tStart(period) + (tEnd(period) - tStart(period)) * proportion
      const res: ShapeInteraction = {
        intersection: fPoint,
        startTime: tStart(period),
        endTime: time
      }
      return res
    }
  }
  return undefined
}

export const linePolyContact = (line: LineString, lineTime: TimePeriod, poly: Polygon, polyTime: TimePeriod): ShapeInteraction | undefined => {
  // trim the line to the valid period of the poly
  const tLine: LineString | undefined = trimLineToPeriod(line, lineTime, polyTime)
  if (tLine) {
    const fLine: Feature<LineString> = turf.lineString(tLine.coordinates)
    const fPoly: Feature<Polygon> = turf.polygon(poly.coordinates)
    const overlap = turf.lineIntersect(tLine, fPoly)
    const timeI = timeIntersect2(lineTime, polyTime)
    const items = overlap.features.length
    if (items === 0) {
      return undefined
    } else if (items === 2) {
      // ok, line runs both sides of polygon
      const beforeSection = turf.lineSplit(fLine, overlap.features[0])
      const midSection = turf.lineSplit(beforeSection.features[1], overlap.features[1])

      const res: ShapeInteraction = {
        intersection: midSection.features[0],
        startTime: timeI[0],
        endTime: timeI[1]
      }
      return res
    } else {
      // line only passes it once, so one end is inside the polygon.
      //  Have to find out if start or end is in polygon
      const fPoint = turf.point(line.coordinates[0])
      const startInPoly = turf.booleanContains(fPoly, fPoint)
      const indexToUse = startInPoly ? 0 : 1
      const singleCrossing = turf.lineSplit(fLine, overlap.features[0])
      const res: ShapeInteraction = {
        intersection: singleCrossing.features[indexToUse],
        startTime: timeI[0],
        endTime: timeI[1]
      }
      return res
    }
  } else {
    return undefined
  }
}

const elapsed = (period: TimePeriod): number => {
  return period[1] - period[0]
}

const tStart = (period: TimePeriod): number => {
  return period[0]
}

const tEnd = (period: TimePeriod): number => {
  return period[1]
}

/** check if the first period is wholly contained within the second period */
export const containedIn = (periodOne: TimePeriod, periodTwo: TimePeriod): boolean => {
  return tStart(periodOne) >= tStart(periodTwo) && tEnd(periodOne) <= tEnd(periodTwo)
}

export const trimLineToPeriod = (line: LineString, lineTime: TimePeriod, otherTime: TimePeriod): LineString | undefined => {
  if (containedIn(lineTime, otherTime)) {
    return line
  } else {
    let tLine = turf.lineString(line.coordinates)
    const totalLength = turf.length(tLine, { units: 'kilometers' })
    const lineStart = tStart(lineTime)
    const otherStart = tStart(otherTime)
    const lineEnd = tEnd(lineTime)
    const otherEnd = tEnd(otherTime)
    if (lineStart < otherStart) {
      // have to trim some off my start
      const diff = otherStart - lineStart
      const proportion = diff / elapsed(lineTime)
      const lengthToCut = proportion * totalLength
      const splitPoint = turf.along(line, lengthToCut, { units: 'kilometers' })
      const splitLine = turf.lineSplit(tLine, splitPoint)
      tLine = splitLine.features[1]
    }
    if (lineEnd > otherEnd) {
      // have to trim some off the end
      const diff = lineEnd - otherEnd
      const proportion = diff / elapsed(lineTime)
      const newLength = turf.length(tLine, { units: 'kilometers' })
      const lengthToCut = newLength - (proportion * totalLength)
      const fixedLength = lengthToCut > 0 ? lengthToCut : 0
      const splitPoint = turf.along(tLine, fixedLength, { units: 'kilometers' })
      const splitLine = turf.lineSplit(tLine, splitPoint)
      tLine = splitLine.features[0]
    }
    if (tLine) {
      return tLine.geometry as LineString
    } else {
      return undefined
    }
  }
}

export const timeIntersect2 = (periodOne: TimePeriod, periodTwo: TimePeriod): TimePeriod => {
  const start = Math.max(tStart(periodOne), tStart(periodTwo))
  const end = Math.min(tEnd(periodOne), tEnd(periodTwo))
  return [start, end]
}
