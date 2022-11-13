import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_TYPE_STRING, ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER, ATTRIBUTE_VALUE_STRING } from '@serge/config'
import {
  Asset, AttributeType, AttributeTypes, AttributeValue, AttributeValues, AttributeValues2, EnumAttributeType, EnumAttributeValue,
  ForceData, MappingConstraints, NumberAttributeType, NumberAttributeValue, Perception, PlatformTypeData, StringAttributeType, StringAttributeValue
} from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import * as turf from '@turf/turf'
import * as h3 from 'h3-js'
import L from 'leaflet'
import { uniqueId } from 'lodash'
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

const doesIt = (): boolean => {
  const probDetect = Math.floor(Math.random() * 100)
  return probDetect > 40
}

export const randomForce = (myForce: ForceData['uniqid'], forces: ForceData[]): string => {
  const nonUmpires = forces.filter((force: ForceData) => !force.umpire)
  const notMine = nonUmpires.filter((force: ForceData) => myForce !== force.uniqid)
  const randomForce = notMine[Math.floor(Math.random() * notMine.length)]
  // const idList = (forces: ForceData[]): string[] => {
  //   return forces.map((force: ForceData): string => force.uniqid)
  // }
  // console.log(myForce, idList(nonUmpires), idList(notMine), randomForce.uniqid)
  return randomForce.uniqid
}

export const createPerceptions = (asset: Asset, assetForce: ForceData['uniqid'],
  forces: ForceData[], localTest?: {(): boolean}): Perception[] => {
  const perceptions: Perception[] = []
  const tester = localTest || doesIt
  forces.forEach((force: ForceData) => {
    if (force.uniqid !== assetForce && !force.umpire) {
      if (tester()) {
        const knowsContact = tester()
        const correctForce = tester()
        const newP: Perception = {
          by: force.uniqid,
          name: knowsContact ? asset.contactId : asset.name,
          typeId: asset.platformTypeId,
          force: correctForce ? assetForce : randomForce(force.uniqid, forces)
        }
        if (!tester()) delete newP.typeId
        if (!tester()) delete newP.condition
        if (!tester()) delete newP.force
        perceptions.push(newP)
      }
    }
  })
  return perceptions
}

const legacyAttributeTypesFor = (platformType: PlatformTypeData): AttributeTypes => {
  if (platformType.attributeTypes) {
    return platformType.attributeTypes
  }
  return []
}

const modernAttributeTypesFor = (platformType: PlatformTypeData, attributes: AttributeTypes): AttributeTypes => {
  console.log('modern attributes', platformType, attributes)
  if (platformType.attributeTypeIds) {
    const res = platformType.attributeTypeIds.map((id): AttributeType => {
      const aType = attributes.find((attr) => attr.attrId === id)
      if (aType) {
        return aType
      } else {
        throw Error('Attribute type not found for:' + id)
      }
    })
    console.log('returning', res)
    return res
  }
  return []
}

const createModernAttributesFor = (platformType: PlatformTypeData, attributeTypes: AttributeTypes): AttributeValues2 => {
  const attrTypes = modernAttributeTypesFor(platformType, attributeTypes)
  const attributes = {}
  attrTypes.forEach((attr: AttributeType) => {
    const id = attr.attrId
    switch (attr.attrType) {
      case ATTRIBUTE_TYPE_NUMBER: {
        const nType = attr as NumberAttributeType
        attributes[id] = nType.defaultValue || Math.floor(Math.random() * 50)
        break
      }
      case ATTRIBUTE_TYPE_STRING: {
        const nType = attr as StringAttributeType
        attributes[id] = nType.defaultValue ? nType.defaultValue + Math.floor(Math.random() * 50) : '_' + Math.floor(Math.random() * 50)
        break
      }
      case ATTRIBUTE_TYPE_ENUM: {
        const nType = attr as EnumAttributeType
        attributes[id] = nType.values[Math.floor(Math.random() * nType.values.length)]
        break
      }
      default: {
        console.warn('Haven\'t handled attribute', attr)
      }
    }
  })
  return attributes
}

const createLegacyAttributesFor = (platformType: PlatformTypeData): AttributeValues => {
  const attrTypes = legacyAttributeTypesFor(platformType)
  const attrVals: AttributeValues = attrTypes.map((attr: AttributeType): AttributeValue => {
    //  NumberAttributeType | EnumAttributeType | StringAttributeType
    let res
    switch (attr.attrType) {
      case ATTRIBUTE_TYPE_NUMBER: {
        const nType = attr as NumberAttributeType
        const num: NumberAttributeValue = {
          attrType: ATTRIBUTE_VALUE_NUMBER,
          attrId: attr.attrId,
          value: nType.defaultValue || Math.floor(Math.random() * 50)
        }
        res = num
        break
      }
      case ATTRIBUTE_TYPE_STRING: {
        const nType = attr as StringAttributeType
        const num: StringAttributeValue = {
          attrType: ATTRIBUTE_VALUE_STRING,
          attrId: attr.attrId,
          value: nType.defaultValue ? nType.defaultValue + Math.floor(Math.random() * 50) : '_' + Math.floor(Math.random() * 50)
        }
        return num
      }
      case ATTRIBUTE_TYPE_ENUM: {
        const nType = attr as EnumAttributeType
        const num: EnumAttributeValue = {
          attrType: ATTRIBUTE_VALUE_ENUM,
          attrId: attr.attrId,
          value: nType.values[Math.floor(Math.random() * nType.values.length)]
        }
        return num
      }
      default: {
        console.warn('Haven\'t handled attribute', attr)
      }
    }
    return res as AttributeValue
  })
  return attrVals
}

const createInBounds = (force: ForceData, polygon: L.Polygon, ctr: number, h3Res: number | undefined,
  platformTypes: PlatformTypeData[], forces: ForceData[], attributeTypes: AttributeTypes, withComprising?:boolean): Asset[] => {
  const assets = []
  for (let i = 0; i < ctr; i++) {
    const posit = randomPointInPoly(polygon).geometry.coordinates
    const h3Pos = h3Res ? h3.geoToH3(posit[1], posit[0], h3Res) : undefined
    const platformTypeCtr = Math.floor(platformTypes.length * Math.random())
    const platformType = platformTypes[platformTypeCtr]
    if (!platformType) {
      console.warn('failed to find platform type with index', platformTypeCtr, platformTypes.length)
      continue
    }
    const fourDecimalTrunc = (num: number): number => Math.trunc(num * 10000) / 10000
    const statuses = platformType.states
    const asset: Asset = {
      uniqid: uniqueId('a'),
      contactId: 'CA' + Math.floor(Math.random() * 3400),
      name: force.name + ':' + i,
      perceptions: [],
      platformTypeId: platformType.uniqid,
      condition: 'working',
      status: statuses.length ? { state: statuses[Math.floor(Math.random() * statuses.length)].name } : undefined,
      position: h3Pos,
      location: [fourDecimalTrunc(posit[1]), fourDecimalTrunc(posit[0])]
    }

    console.log('platform type 2', platformType)
    const legacyAttrs = createLegacyAttributesFor(platformType)
    const modernAttrs = createModernAttributesFor(platformType, attributeTypes)

    if (legacyAttrs && legacyAttrs.length > 0) {
      asset.attributeValues = legacyAttrs
    }
    if (modernAttrs) {
      asset.attributes = modernAttrs
    }

    // generate some perceptions:
    asset.perceptions = createPerceptions(asset, force.uniqid, forces)
    // make the first unit a composite one
    if (i > 0 && i < 4) {
      if (!assets[0].comprising) {
        assets[0].comprising = []
      }
      if (withComprising) {
        assets[0].comprising.push(asset)
      }
    } else {
      assets.push(asset)
    }
  }
  return assets
}

export const generateTestData2 = (constraints: MappingConstraints, forces: ForceData[],
  platformTypes: PlatformTypeData[], attributeTypes: AttributeTypes): ForceData[] => {
  const bluePlatforms = platformTypes.filter((pType) => pType.uniqid.startsWith('blue_'))
  const redPlatforms = platformTypes.filter((pType) => pType.uniqid.startsWith('red_'))

  // regions
  const bounds = L.latLngBounds(constraints.bounds)
  const centre = bounds.getCenter()
  const east = bounds.getEast()
  const br = L.latLngBounds(bounds.getNorthWest(), L.latLng(centre.lat, east))
  const rr = L.latLngBounds(bounds.getSouthWest(), L.latLng(centre.lat, east))

  const bluePoly = L.polygon([br.getNorthWest(), br.getNorthEast(), br.getSouthEast(), br.getSouthWest(), br.getNorthWest()])
  const redPoly = L.polygon([rr.getNorthWest(), rr.getNorthEast(), rr.getSouthEast(), rr.getSouthWest(), rr.getNorthWest()])

  const newForces: ForceData[] = deepCopy(forces)
  newForces[1].assets = createInBounds(newForces[1], bluePoly, 100, undefined, bluePlatforms, forces, attributeTypes)
  newForces[2].assets = createInBounds(newForces[2], redPoly, 100, undefined, redPlatforms, forces, attributeTypes)
  console.log('blue', newForces[1].assets)
  console.log('res', newForces[2].assets)
  return newForces
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
  newForces[2].assets = createInBounds(newForces[2], ausBuffer, 20, h3Res || 5, platformTypes, forces, [])
  newForces[2].assets.push(...createInBounds(newForces[2], ausCoastBuffer, 40, h3Res || 5, maritimePlatforms, forces, []))
  newForces[1].assets = createInBounds(newForces[1], guinBuffer, 20, h3Res || 5, platformTypes, forces, [])
  newForces[1].assets.push(...createInBounds(newForces[1], guinCoastBuffer, 20, h3Res || 5, maritimePlatforms, forces, []))
  console.log('blue', newForces[1].assets)
  console.log('res', newForces[2].assets)
  setForcesState(newForces)
}

export default generateTestData
