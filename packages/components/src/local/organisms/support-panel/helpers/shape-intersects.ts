import * as turf from '@turf/turf'
import { Feature, LineString, Point, Polygon } from 'geojson'
import moment from 'moment'

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
      const pointLength = turf.length(beforeSection, { units: 'kilometers' })
      const totalLength = turf.length(fLine, { units: 'kilometers' })
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

export const lineLineContact = (lineOne: LineString, lineOneTime: TimePeriod, lineTwo: LineString, lineTwoTime: TimePeriod,
  sensorRangeKm: number): ShapeInteraction | undefined => {
  // trim the line to the valid period of the point
  const tLineOne: LineString | undefined = trimLineToPeriod(lineOne, lineOneTime, lineTwoTime)
  const tLineTwo: LineString | undefined = trimLineToPeriod(lineTwo, lineTwoTime, lineOneTime)
  if (tLineOne && tLineTwo) {
    // now re-check if the line and point interact
    const crosses = turf.lineIntersect(tLineOne, tLineTwo)
    if (crosses.features.length > 0) {
      const timeOfCrossing = (line: LineString, point: Point, period: TimePeriod): number => {
        const splitPoint = turf.point(point.coordinates)
        const fLine = turf.lineString(line.coordinates)
        const splitLine = turf.lineSplit(fLine, splitPoint)
        let time
        if (splitLine.features.length > 1) {
          const beforeSection = splitLine.features[0]
          const fullLen = turf.length(fLine, { units: 'kilometers' })
          const len = turf.length(beforeSection, { units: 'kilometers' })
          const proportion = len / fullLen
          time = period[0] + (period[1] - period[0]) * proportion
        } else {
          // only one leg. So, point was at start or end of data
          if (turf.booleanEqual(turf.point(point.coordinates), turf.point(line.coordinates[0]))) {
            time = period[0]
          } else if (turf.booleanEqual(turf.point(point.coordinates), turf.point(line.coordinates[line.coordinates.length - 1]))) {
            time = period[1]
          } else {
            console.warn('Wrong presumption about splitting line by point', point.coordinates, line.coordinates[0], line.coordinates[line.coordinates.length - 1])
            time = period[0]
          }
        }
        return time
      }

      // find the time of the crossing on line one
      const fullLineOne = turf.lineString(lineOne.coordinates)
      const crossPoint = turf.point(crosses.features[0].geometry.coordinates)
      const timeOne = timeOfCrossing(fullLineOne.geometry, crossPoint.geometry, lineOneTime)

      /** check if the first period is wholly contained within the second period */
      const containsTime2 = (period: TimePeriod, time: number): boolean => {
        return time >= tStart(period) && time <= tEnd(period)
      }

      const notZeroLength = lineTwoTime[1] > lineTwoTime[0]

      // check if line two is alive at time one
      if (notZeroLength && containsTime2(lineTwoTime, timeOne)) {
        // find where the second line would be at this time
        const fLineTwo = turf.lineString(lineTwo.coordinates)
        const proportion = (timeOne - lineTwoTime[0]) / (lineTwoTime[1] - lineTwoTime[0])
        const fullLength = turf.length(fLineTwo, { units: 'kilometers' })
        const length = proportion * fullLength
        const lineTwoAtTimeOne = turf.along(fLineTwo, length, { units: 'kilometers' })
        const distanceApart = turf.distance(crossPoint, lineTwoAtTimeOne, { units: 'kilometers' })

        if (distanceApart <= sensorRangeKm) {
          // find the time of the crossing on line two
          const timeTwo = timeOfCrossing(lineTwo, crossPoint.geometry, lineTwoTime)
          const meanTime = (timeOne + timeTwo) / 2
          const res: ShapeInteraction = {
            intersection: crossPoint,
            startTime: meanTime,
            endTime: meanTime
          }
          return res
        }
      }
    }
  }
  return undefined
}

const showPeriod = (timePeriod: TimePeriod): string => {
  return moment(timePeriod[0]).toISOString() + ' - ' + moment(timePeriod[1]).toISOString()
}

export const linePolyContact = (line: LineString, lineTime: TimePeriod, poly: Polygon, polyTime: TimePeriod): ShapeInteraction | undefined => {
  // trim the line to the valid period of the poly
  const tLine: LineString | undefined = trimLineToPeriod(line, lineTime, polyTime)
  if (tLine) {
    const fLine: Feature<LineString> = turf.lineString(tLine.coordinates)
    const fPoly: Feature<Polygon> = turf.polygon(poly.coordinates)
    const overlap = turf.lineIntersect(tLine, fPoly)
    const contains = turf.booleanContains(fPoly, fLine)
    const timeI = timeIntersect2(lineTime, polyTime)
    console.log('LinePolygonInteraction', tLine, fLine, fPoly, showPeriod(lineTime), showPeriod(polyTime), showPeriod(timeI), overlap, contains, overlap && overlap.features.length)
    if (contains) {
      const res: ShapeInteraction = {
        intersection: fLine,
        startTime: timeI[0],
        endTime: timeI[1]
      }
      return res
    } else {
      const items = overlap.features.length
      if (items === 0) {
        return undefined
      } else if (items >= 2) {
        // ok, line runs both sides of polygon
        const beforeSection = turf.lineSplit(fLine, overlap.features[0])
        const midSection = turf.lineSplit(beforeSection.features[1], overlap.features[1])

        // trim time to the period representing the mid-section
        const fullLine = turf.lineString(line.coordinates)
        const fullLen = turf.length(fullLine)
        const startCoords = midSection.features[0].geometry.coordinates[0]
        const startPoint = turf.point(startCoords)
        const beforeLeg = turf.lineSplit(fullLine, startPoint).features[0]
        const beforeLen = turf.length(beforeLeg)
        const beforeProportion = beforeLen / fullLen
        const afterCoords = midSection.features[0].geometry.coordinates
        const afterCoord = afterCoords[afterCoords.length - 1]
        const afterPoint = turf.point(afterCoord)
        const afterLine = turf.lineSplit(fullLine, afterPoint).features[1]
        const afterLen = turf.length(afterLine)
        const afterProportion = afterLen / fullLen
        const totalTime = lineTime[1] - lineTime[0]
        const startTime = lineTime[0] + totalTime * beforeProportion
        const endTime = lineTime[1] - totalTime * afterProportion
        const res: ShapeInteraction = {
          intersection: midSection.features[0],
          startTime: startTime,
          endTime: endTime
        }
        return res
      } else {
        // line only passes it once, so one end is inside the polygon.
        //  Have to find out if start or end is in polygon
        const fPoint = turf.point(line.coordinates[0])
        const singleCrossing = turf.lineSplit(fLine, overlap.features[0])
        const fullLine = turf.lineString(line.coordinates)
        const fullLen = turf.length(fullLine)
        const totalTime = lineTime[1] - lineTime[0]

        const startInPoly = turf.booleanContains(fPoly, fPoint)
        let startTime
        let endTime
        if (startInPoly) {
          // trim time off the start
          const afterCoords = singleCrossing.features[0].geometry.coordinates
          const afterCoord = afterCoords[afterCoords.length - 1]
          const afterPoint = turf.point(afterCoord)
          const afterLine = turf.lineSplit(fullLine, afterPoint).features[1]
          const afterLen = turf.length(afterLine)
          const afterProportion = afterLen / fullLen
          startTime = timeI[0]
          endTime = lineTime[1] - totalTime * afterProportion
        } else {
          // trim time off the end
          const startCoords = singleCrossing.features[1].geometry.coordinates[0]
          const startPoint = turf.point(startCoords)
          const beforeLeg = turf.lineSplit(fullLine, startPoint).features[0]
          const beforeLen = turf.length(beforeLeg)
          const beforeProportion = beforeLen / fullLen
          startTime = lineTime[0] + totalTime * beforeProportion
          endTime = timeI[1]
        }
        const indexToUse = startInPoly ? 0 : 1
        const res: ShapeInteraction = {
          intersection: singleCrossing.features[indexToUse],
          startTime: startTime,
          endTime: endTime
        }
        return res
      }
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

/** check if the first period is wholly contained within the second period */
export const containsTime = (period: TimePeriod, time: number): boolean => {
  return time >= tStart(period) && time <= tEnd(period)
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
      // if the split is very near to the start, we still just have one line segment
      tLine = splitLine.features.length === 2 ? splitLine.features[1] : splitLine.features[0]
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
