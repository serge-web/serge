import { Asset, ForceData, MappingConstraints, PlatformTypeData } from '@serge/custom-types'
import L from 'leaflet'
import { uniqueId } from 'lodash'
import * as turf from '@turf/turf'
import * as h3 from 'h3-js'
import { deepCopy } from '@serge/helpers'
import { leafletBuffer, leafletBufferLine } from './h3-helpers'

const randomPointInPoly = (polygon: L.Polygon): any => {
  const bounds = polygon.getBounds()
  const xMin = bounds.getEast()
  const xMax = bounds.getWest()
  const yMin = bounds.getSouth()
  const yMax = bounds.getNorth()

  const lat = yMin + (Math.random() * (yMax - yMin))
  const lng = xMin + (Math.random() * (xMax - xMin))

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
  const assets = []
  const roles = force.roles
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
      platformTypeId: i === 0 ? 'id-task-group' : platformType.uniqid,
      condition: 'working',
      position: h3Pos,
      location: [fourDecimalTrunc(posit[1]), fourDecimalTrunc(posit[0])],
      owner: roles[Math.floor(roles.length * Math.random())].roleId
    }
    // make the first unit a composite one
    if (i > 0 && i < 4) {
      if (!assets[0].comprising) {
        assets[0].comprising = []
      }
      assets[0].comprising.push(asset)
    } else {
      assets.push(asset)
    }
  }
  return assets
}

const generateTestData = (constraints: MappingConstraints, forces: ForceData[],
  platformTypes: PlatformTypeData[], setForcesState: { (forces: ForceData[]): void }): void => {
  const maritimePlatformNames = ['id-frigate-ta', 'id-mcm', 'id-missile', 'id-carrier', 'id-auxiliary', 'id-destroyer']
  const maritimePlatforms = platformTypes.filter((plat: PlatformTypeData) => maritimePlatformNames.includes(plat.uniqid))
  // regions
  const aus = [L.latLng(-22, 150), L.latLng(-12, 131), L.latLng(-22, 115), L.latLng(-22, 150)]
  const ausCoast = aus.slice(0, aus.length - 1)
  const nGuinea = [L.latLng(-1.62575, 137.5048), L.latLng(-3.9080, 135.3955), L.latLng(-8.2767, 138.4277),
    L.latLng(-10.6606, 150.029), L.latLng(-4.4778, 145.81), L.latLng(-1.62575, 137.5048)]
  const nGuineaCoast = nGuinea.slice(0, nGuinea.length - 1)
  const ausCoastBuffer = L.polygon(leafletBufferLine(ausCoast, 30))
  const ausBuffer = L.polygon(aus)
  const guinBuffer = L.polygon(leafletBuffer(nGuinea, 10))
  const guinCoastBuffer = L.polygon(leafletBufferLine(nGuineaCoast, 30))
  const h3Res = constraints.h3res
  const newForces: ForceData[] = deepCopy(forces)
  newForces[2].assets = createInBounds(newForces[2], ausBuffer, 20, h3Res, platformTypes)
  newForces[2].assets.push(...createInBounds(newForces[2], ausCoastBuffer, 40, h3Res, maritimePlatforms))
  newForces[1].assets = createInBounds(newForces[1], guinBuffer, 20, h3Res, platformTypes)
  newForces[1].assets.push(...createInBounds(newForces[1], guinCoastBuffer, 20, h3Res, maritimePlatforms))
  console.log('blue', newForces[1].assets)
  console.log('res', newForces[2].assets)
  setForcesState(newForces)
}

export default generateTestData
