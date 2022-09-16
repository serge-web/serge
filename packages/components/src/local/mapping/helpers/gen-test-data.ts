import { Asset, ForceData, MappingConstraints, PlatformTypeData } from "@serge/custom-types"
import L from 'leaflet'
import { uniqueId } from 'lodash'
import * as turf from '@turf/turf'
import * as h3 from 'h3-js'
import { deepCopy } from "@serge/helpers"

const randomPointInPoly = (polygon: L.Polygon): any => {
  const bounds = polygon.getBounds()
  const x_min = bounds.getEast()
  const x_max = bounds.getWest()
  const y_min = bounds.getSouth()
  const y_max = bounds.getNorth()

  const lat = y_min + (Math.random() * (y_max - y_min))
  const lng = x_min + (Math.random() * (x_max - x_min))

  const point = turf.point([lng, lat])
  const poly = polygon.toGeoJSON()
  const inside = turf.inside(point, poly)

  if (inside) {
    return point
  } else {
    return randomPointInPoly(polygon)
  }
}

const createInBounds = (force: ForceData, polygon: L.Polygon, ctr: number, h3Res: number, platformTypes: PlatformTypeData[]): Asset[] => {
  const redAssets = []
  const redRoles = force.roles
  for (let i = 0; i < ctr; i++) {
    const posit = randomPointInPoly(polygon).geometry.coordinates
    const h3Pos = h3.geoToH3(posit[1], posit[0], h3Res)
    const platformTypeCtr = Math.floor(platformTypes.length * Math.random())
    const platformType = platformTypes[platformTypeCtr]
    const fourDecimalTrunc = (num: number): number => Math.trunc(num * 10000) / 10000
    const asset: Asset = {
      uniqid: uniqueId('a'),
      contactId: 'CA' + Math.floor(Math.random() * 3400),
      name: force.name + ':' + i,
      perceptions: [],
      platformTypeId: platformType.uniqid,
      condition: 'working',
      position: h3Pos,
      location: [fourDecimalTrunc(posit[1]), fourDecimalTrunc(posit[0])],
      owner: redRoles[Math.floor(redRoles.length * Math.random())].roleId
    }
    redAssets.push(asset)
  }
  return redAssets
}

const generateTestData = (constraints: MappingConstraints, forces: ForceData[], platformTypes: PlatformTypeData[], setForcesState: { (forces: ForceData[]): void }): void => {
  const aus = [L.latLng(-22, 115), L.latLng(-22, 150), L.latLng(-12, 131), L.latLng(-22, 115)]
  const ausPoly = L.polygon(aus)
  const nGuinea = [L.latLng(-1.62575, 137.5048), L.latLng(-3.9080, 135.3955), L.latLng(-8.2767, 138.4277),
  L.latLng(-10.6606, 150.029), L.latLng(-4.4778, 145.81), L.latLng(-1.6257583, 137.5048)]
  const guineaPolu = L.polygon(nGuinea)
  const h3Res = constraints.h3res
  const newForces: ForceData[] = deepCopy(forces)
  newForces[1].assets = createInBounds(newForces[1], guineaPolu, 100, h3Res, platformTypes)
  newForces[2].assets = createInBounds(newForces[2], ausPoly, 100, h3Res, platformTypes)
  setForcesState(newForces)
}

export default generateTestData
