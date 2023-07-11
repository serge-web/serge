import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_TYPE_STRING, ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER, ATTRIBUTE_VALUE_STRING } from 'src/config'
import {
  Asset, AttributeType, AttributeTypes, AttributeValue, AttributeValues, AttributeValues2, EnumAttributeType, EnumAttributeValue,
  ForceData, MappingConstraints, NumberAttributeType, NumberAttributeValue, Perception, PlatformTypeData, StringAttributeType, StringAttributeValue
} from 'src/custom-types'
import { deepCopy } from 'src/Helpers'
import * as turf from '@turf/turf'
import * as h3 from 'h3-js'
import L, { Polygon } from 'leaflet'
import { randomArrayItem } from '../../organisms/support-panel/helpers/gen-order-data'
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
  forces: ForceData[], localTest?: { (): boolean }): Perception[] => {
  const perceptions: Perception[] = []
  const seesAll = (): boolean => { return true }
  const letAllSeeAll = true
  const tester = letAllSeeAll ? seesAll : (localTest || doesIt)
  forces.forEach((force: ForceData) => {
    if (force.uniqid !== assetForce && !force.umpire) {
      if (tester()) {
        const knowsContact = !tester()
        const correctForce = tester()
        const newP: Perception = {
          by: force.uniqid,
          name: knowsContact ? asset.contactId : asset.name,
          typeId: asset.platformTypeId,
          force: correctForce ? assetForce : randomForce(force.uniqid, forces)
        }
        injectPerceivedPosition(newP, asset.location)
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
  if (platformType.attributeTypeIds) {
    const res = platformType.attributeTypeIds.map((id): AttributeType => {
      const aType = attributes.find((attr) => attr.attrId === id)
      if (aType) {
        return aType
      } else {
        throw Error('Attribute type not found for:' + id + '-' + platformType.name)
      }
    })
    return res
  }
  return []
}

const createModernAttributesFor = (platformType: PlatformTypeData, attributeTypes: AttributeTypes): AttributeValues2 => {
  const attrTypes = modernAttributeTypesFor(platformType, attributeTypes)
  const attributes = {}
  const domain = platformType.travelMode
  attrTypes.forEach((attr: AttributeType) => {
    const id = attr.attrId
    // check for special case
    if (attr.attrId === 'a_Speed') {
      const multiplier = Math.floor(Math.random() * 5)
      switch (domain) {
        case 'air':
          attributes[id] = 200 + multiplier * 20
          break
        case 'sea':
          attributes[id] = 10 + multiplier * 5
          break
        case 'land':
          attributes[id] = 10 + multiplier * 12
          break
      }
    } else if (id === 'a_Type') {
      // randomly generate airfield for land assets
      if ((platformType.uniqid.indexOf('land_asset') > -1) && (Math.floor(Math.random() * 10) > 7)) {
        attributes[id] = 'Airfield'
      } else {
        const multiplier = Math.floor(Math.random() * 6) + 1
        attributes[id] = platformType.name + '_' + multiplier
      }
    } else if (id === 'a_SIDC') {
      // skip
    } else {
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
    }
  })
  return attributes
}

export const createLegacyAttributesFor = (platformType: PlatformTypeData): AttributeValues => {
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

const makeTaskGroup = (assets: Asset[], platformTypes: PlatformTypeData[]): Asset[] => {
  // generate some task group names
  const numGroups = 5
  const ctgNames: string[] = []
  for (let i = 0; i < numGroups; i++) {
    const randNum = Math.floor(Math.random() * 1000)
    ctgNames.push('CTF-' + randNum)
  }

  // find maritime assets
  const marPlats = platformTypes.filter((ptype) => ptype.travelMode === 'sea' && ptype.uniqid !== '_maritime_mine').map((pType) => pType.uniqid)
  const marAssets = assets.filter((asset) => marPlats.includes(asset.platformTypeId))

  // find fighter aircraft
  const airAssets = assets.filter((asset) => asset.platformTypeId.includes('air') && asset.attributes && asset.attributes.a_TaskGroup)

  // randomly assign task group membership
  const groupLocations = {}
  marAssets.forEach((asset) => {
    asset.attributes && delete asset.attributes.a_TaskGroup
    if (asset.location) {
      if (Math.random() * 10 > 3) {
        const group = ctgNames[Math.floor(Math.random() * ctgNames.length)]
        // do we have location?
        if (!groupLocations[group]) {
          groupLocations[group] = [asset.location[0], asset.location[1]]
        }
        asset.location = groupLocations[group]
        if (!asset.attributes) {
          asset.attributes = {}
        }
        asset.attributes.a_TaskGroup = group
      }
    }
  })

  // randomly assign task group membership
  airAssets.forEach((asset) => {
    asset.attributes && delete asset.attributes.a_TaskGroup
    if (asset.location) {
      if (Math.random() * 10 > 7) {
        const group = ctgNames[Math.floor(Math.random() * ctgNames.length)]
        // do we have location?
        if (!groupLocations[group]) {
          groupLocations[group] = [asset.location[0], asset.location[1]]
        }
        asset.location = groupLocations[group]
        if (!asset.attributes) {
          asset.attributes = {}
        }
        asset.attributes.a_TaskGroup = group
      }
    }
  })

  return assets
}

export const fourDecimalTrunc = (num: number): number => Math.trunc(num * 10000) / 10000

const createInBounds = (force: ForceData, polygon: L.Polygon, ctr: number, h3Res: number | undefined,
  platformTypes: PlatformTypeData[], forces: ForceData[], attributeTypes: AttributeTypes, withComprising: boolean): Asset[] => {
  const assets: Asset[] = []
  for (let i = 0; i < ctr; i++) {
    const posit = randomPointInPoly(polygon).geometry.coordinates
    const h3Pos = h3Res ? h3.geoToH3(posit[1], posit[0], h3Res) : undefined
    const generateLandAssets = Math.random() * 10.0 > 8
    const landAssetType = platformTypes.find((platform: PlatformTypeData) => platform.uniqid.indexOf('land_asset') >= 0)
    const platformTypeCtr = Math.floor(platformTypes.length * Math.random())
    const platformType = generateLandAssets ? landAssetType : platformTypes[platformTypeCtr]
    if (!platformType) {
      console.warn('failed to find platform type with index', platformTypeCtr, platformTypes.length)
      continue
    }
    const statuses = platformType.states

    const healthValues = [100, 75, 50, 25, 0]
    const health = randomArrayItem(healthValues, Math.random() * ctr)

    const asset: Asset = {
      uniqid: force.name + '.' + (platformTypeCtr + 1) + '.' + (i + 1),
      contactId: 'CA' + Math.floor(Math.random() * 3400),
      name: force.name + ':' + platformType.name + ':' + i,
      perceptions: [],
      health: health,
      platformTypeId: platformType.uniqid,
      condition: 'working',
      status: statuses.length ? { state: statuses[Math.floor(Math.random() * statuses.length)].name } : undefined,
      position: h3Pos,
      location: [fourDecimalTrunc(posit[1]), fourDecimalTrunc(posit[0])]
    }

    asset.attributes = createModernAttributesFor(platformType, attributeTypes)

    // generate some perceptions:
    asset.perceptions = createPerceptions(asset, force.uniqid, forces)

    assets.push(asset)
  }

  // make the first unit a composite one
  const assetsWithTGs = withComprising ? makeTaskGroup(assets, platformTypes) : assets

  // put aircraft onto airfields
  const airfields = assetsWithTGs.filter((asset: Asset) => {
    const isAsset = asset.platformTypeId.endsWith('land_asset')
    const aType = asset.attributes && asset.attributes.a_Type === 'Airfield'
    return isAsset && aType
  })
  const airAsset = assetsWithTGs.filter((asset: Asset) => asset.platformTypeId.indexOf('air') > 0)
  airAsset.forEach((asset: Asset) => {
    // note: don't assign an airfield if it's in atask group
    if (asset.attributes && !asset.attributes.a_TaskGroup) {
      const airfield = airfields[Math.floor(Math.random() * airfields.length)]
      asset.attributes.a_Airfield = airfield.uniqid
      const airLoc = airfield.location || [0, 0]

      const origin = turf.point([airLoc[1], airLoc[0]])
      // code to spread out assets at airfield. Note: real data won't have this, so we won't either
      // const newPt = turf.destination(origin, 20, -180 + Math.random() * 360, { units: 'kilometers' })
      const newPt = origin
      const behindCoords = newPt.geometry.coordinates
      const newLoc: [number, number] = [behindCoords[1], behindCoords[0]]
      asset.location = newLoc
    }
  })

  return assetsWithTGs
}

const injectPerceivedPosition = (perception: Perception, location: [number, number] | undefined): void => {
  if (location) {
    const rnd = Math.random()
    if (rnd > 0.95) {
      // don't provide perceived position
    } else if (rnd > 0.7) {
      // shift position
      const rndDegs = 0.1
      const factor = 10000
      const rndLat = -rndDegs + Math.random() * rndDegs * 2
      const newLat = location[0] + rndLat
      const roundedLat = Math.floor(newLat * factor) / factor
      const rndLng = -rndDegs + Math.random() * rndDegs * 2
      const newLng = location[1] + rndLng
      const roundedLong = Math.floor(newLng * factor) / factor
      const pos: [number, number] = [roundedLat, roundedLong]
      perception.position = pos
    } else {
      // real position
      perception.position = location
    }
  }
}

export const fixPerceivedPositions = (forces: ForceData[]): ForceData[] => {
  forces.forEach((force) => {
    if (force.assets) {
      force.assets.forEach((asset) => {
        asset.perceptions.forEach((perception) => {
          injectPerceivedPosition(perception, asset.location)
        })
      })
    }
  })
  return forces
}

export const updateBounds = (constraints: MappingConstraints, forces: ForceData[]): ForceData[] => {
  const updateInBounds = (assets: Asset[] | undefined, bounds: Polygon): Asset[] | undefined => {
    assets && assets.forEach((asset) => {
      if (asset.location) {
        const posit: [number, number] = randomPointInPoly(bounds).geometry.coordinates
        asset.location = [fourDecimalTrunc(posit[1]), fourDecimalTrunc(posit[0])]
        asset.perceptions.forEach((per) => {
          injectPerceivedPosition(per, asset.location)
        })
      }
    })
    return assets
  }

  const bounds = L.latLngBounds(constraints.bounds)
  const centre = bounds.getCenter()

  const centreLat = centre.lat
  const centreLng = centre.lng

  const tCentre = L.latLng(bounds.getNorth(), centreLng)
  const bCentre = L.latLng(bounds.getSouth(), centreLng)
  const lCentre = L.latLng(centreLat, bounds.getWest())
  // const rCentre = L.latLng(centreLat, bounds.getEast())

  const bluePoly = L.polygon([bounds.getNorthWest(), tCentre, centre, lCentre, bounds.getNorthWest()])
  const redPoly = L.polygon([bounds.getNorthEast(), tCentre, bCentre, bounds.getSouthEast(), bounds.getNorthEast()])
  const greenPoly = L.polygon([bounds.getSouthWest(), bCentre, centre, lCentre, bounds.getSouthWest()])

  forces[1].assets = updateInBounds(forces[1].assets, bluePoly)
  forces[2].assets = updateInBounds(forces[2].assets, redPoly)
  forces[3].assets = updateInBounds(forces[3].assets, greenPoly)

  return forces
}

export const generateTestData2 = (count: number, constraints: MappingConstraints, forces: ForceData[],
  platformTypes: PlatformTypeData[], attributeTypes: AttributeTypes): ForceData[] => {
  const genericPlatforms = platformTypes.filter((pType) => pType.uniqid.startsWith('_'))
  const bluePlatforms = platformTypes.filter((pType) => pType.uniqid.startsWith('blue_')).concat(genericPlatforms)
  const redPlatforms = platformTypes.filter((pType) => pType.uniqid.startsWith('red_')).concat(genericPlatforms)
  const greenPlatforms = platformTypes.filter((pType) => pType.uniqid.startsWith('green_')).concat(genericPlatforms)
  // regions
  const bounds = L.latLngBounds(constraints.bounds)
  const centre = bounds.getCenter()

  const centreLat = centre.lat
  const centreLng = centre.lng

  const tCentre = L.latLng(bounds.getNorth(), centreLng)
  const bCentre = L.latLng(bounds.getSouth(), centreLng)
  const lCentre = L.latLng(centreLat, bounds.getWest())
  // const rCentre = L.latLng(centreLat, bounds.getEast())

  const bluePoly = L.polygon([bounds.getNorthWest(), tCentre, centre, lCentre, bounds.getNorthWest()])
  const redPoly = L.polygon([bounds.getNorthEast(), tCentre, bCentre, bounds.getSouthEast(), bounds.getNorthEast()])
  const greenPoly = L.polygon([bounds.getSouthWest(), bCentre, centre, lCentre, bounds.getSouthWest()])

  const newForces: ForceData[] = deepCopy(forces)
  newForces[1].assets = createInBounds(newForces[1], bluePoly, count, undefined, bluePlatforms, forces, attributeTypes, true)
  newForces[2].assets = createInBounds(newForces[2], redPoly, count, undefined, redPlatforms, forces, attributeTypes, true)
  newForces[3].assets = createInBounds(newForces[3], greenPoly, count, undefined, greenPlatforms, forces, attributeTypes, true)

  // inject a couple of asset-specific SIDC codes
  const swapType = (assets: Asset[] | undefined, platType: string, sidc: string, newType: string): void => {
    if (assets) {
      assets.forEach((asset) => {
        if (asset.attributes && asset.attributes.a_Type === platType) {
          asset.attributes.a_SIDC = sidc
          asset.attributes.a_Type = newType
        }
      })
    }
  }
  swapType(newForces[1].assets, 'Ship_1', 'S*SPCLFF----', 'Frigate')
  swapType(newForces[1].assets, 'Ship_2', 'SFSPCLCV----', 'Carrier')
  swapType(newForces[2].assets, 'Ship_1', 'S*SPCLFF----', 'Frigate')
  swapType(newForces[2].assets, 'Ship_2', 'SFSPCLCV----', 'Carrier')
  swapType(newForces[3].assets, 'Ship_1', 'S*SPCLFF----', 'Frigate')
  swapType(newForces[3].assets, 'Ship_2', 'SFSPCLCV----', 'Carrier')

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
  newForces[2].assets = createInBounds(newForces[2], ausBuffer, 20, h3Res || 5, platformTypes, forces, [], true)
  newForces[2].assets.push(...createInBounds(newForces[2], ausCoastBuffer, 40, h3Res || 5, maritimePlatforms, forces, [], true))
  newForces[1].assets = createInBounds(newForces[1], guinBuffer, 20, h3Res || 5, platformTypes, forces, [], true)
  newForces[1].assets.push(...createInBounds(newForces[1], guinCoastBuffer, 20, h3Res || 5, maritimePlatforms, forces, [], true))
  console.log('blue', newForces[1].assets)
  console.log('res', newForces[2].assets)
  setForcesState(newForces)
}

export default generateTestData
