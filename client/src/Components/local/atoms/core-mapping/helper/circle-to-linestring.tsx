
/** code taken from here: https://github.com/gabzim/circle-to-polygon/blob/master/index.js */

import { Polygon, Position } from 'geojson'

const defaultEarthRadius = 6378137 // equatorial Earth radius

function toRadians (angleInDegrees: number): number {
  return (angleInDegrees * Math.PI) / 180
}

function toDegrees (angleInRadians: number): number {
  return (angleInRadians * 180) / Math.PI
}

function offset (c1: [number, number], distance: number, earthRadius: number, bearing: number): [number, number] {
  const lat1: number = toRadians(c1[1])
  const lon1: number = toRadians(c1[0])
  const dByR: number = distance / earthRadius
  const lat: number = Math.asin(
    Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing)
  )
  const lon: number =
    lon1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
      Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat)
    )
  return [toDegrees(lon), toDegrees(lat)]
}

export default function circleToPolygon (center: [number, number], radius: number, options: {
  numberOfEdges?: number
  earthRadius?: number
  bearing?: number
  rightHandRule?: boolean
}): Polygon {
  const n: number = getNumberOfEdges(options)
  const earthRadius: number = getEarthRadius(options)
  const bearing: number = getBearing(options)
  const direction: number = getDirection(options)

  const start: number = toRadians(bearing)
  const coordinates: Position[][] = [[]]
  for (let i = 0; i < n; ++i) {
    coordinates[0].push(
      offset(
        center, radius, earthRadius, start + (direction * 2 * Math.PI * -i) / n
      )
    )
  }
  coordinates[0].push(coordinates[0][0])

  return {
    type: 'Polygon',
    coordinates: coordinates
  }
}

function getNumberOfEdges (options: { numberOfEdges?: number }): number {
  if (isUndefinedOrNull(options)) {
    return 32
  } else if (isObjectNotArray(options)) {
    const numberOfEdges: number | undefined = options.numberOfEdges
    return numberOfEdges === undefined ? 32 : numberOfEdges
  }
  return options as number
}

function getEarthRadius (options: { earthRadius?: number }): number {
  if (isUndefinedOrNull(options)) {
    return defaultEarthRadius
  } else if (isObjectNotArray(options)) {
    const earthRadius: number | undefined = options.earthRadius
    return earthRadius === undefined ? defaultEarthRadius : earthRadius
  }
  return options as number
}

function getDirection (options: { rightHandRule?: boolean }): number {
  if (isObjectNotArray(options) && options.rightHandRule) {
    return -1
  }
  return 1
}

function getBearing (options: { bearing?: number }): number {
  if (isUndefinedOrNull(options)) {
    return 0
  } else if (isObjectNotArray(options)) {
    const bearing: number | undefined = options.bearing
    return bearing === undefined ? 0 : bearing
  }
  return options as number
}

function isObjectNotArray (argument: any): boolean {
  return argument !== null && typeof argument === 'object' && !Array.isArray(argument)
}

function isUndefinedOrNull (argument: any): boolean {
  return argument === null || argument === undefined
}
