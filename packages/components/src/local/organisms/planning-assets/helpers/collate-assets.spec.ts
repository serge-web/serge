import { UNKNOWN_TYPE } from '@serge/config'
import { Asset } from '@serge/custom-types'
import { deepCopy, forceColors, platformIcons } from '@serge/helpers'
import { P9Mock } from '@serge/mocks'
import LRUCache from 'lru-cache'
import { LRU_CACHE_OPTION } from '../../support-panel/constants'
import { collateItem, getColumns, getOppAssets, getOwnAssets } from './collate-assets'

const forces = P9Mock.data.forces.forces
const umpireForce = forces[0]
const blueForce = forces[1]
const redForce = forces[2]
const redZeroAsset = redForce.assets && redForce.assets[0]
// const redOneAsset = redForce.assets && redForce.assets[1]
const greenForce = forces[3]

if (redZeroAsset) {
  redZeroAsset.perceptions[0] = { by: blueForce.uniqid, typeId: redZeroAsset.platformTypeId }
}
const redAssetWithUnknown: Asset = deepCopy(redZeroAsset)
redAssetWithUnknown.perceptions[0] = { by: blueForce.uniqid, typeId: undefined }

false && console.log('get working:', greenForce, getColumns, collateItem, UNKNOWN_TYPE, redZeroAsset)

const forceCols = forceColors(forces)
const platformStyles = P9Mock.data.platformTypes ? platformIcons(P9Mock.data.platformTypes.platformTypes) : []

const platformTypes = P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []

const attributeTypes = P9Mock.data.attributeTypes ? P9Mock.data.attributeTypes.attributes : []

const assetsCache = new LRUCache<string, string>(LRU_CACHE_OPTION)

describe('check collating assets', () => {
  it('handles collate item for opfor', () => {
    if (redZeroAsset) {
      const item = collateItem(true, redZeroAsset, blueForce, redForce, forceCols, platformStyles, [], platformTypes, attributeTypes, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redZeroAsset.uniqid)
      expect(first.platformType).toEqual(redZeroAsset.platformTypeId)
    }
  })

  it('handles collate item for opfor with lots of unknowns', () => {
    if (redAssetWithUnknown) {
      const item = collateItem(true, redAssetWithUnknown, blueForce, redForce, forceCols, platformStyles, [], platformTypes, attributeTypes, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redAssetWithUnknown.uniqid)
      expect(first.platformType).toEqual(UNKNOWN_TYPE)
      expect(first.force).toEqual(UNKNOWN_TYPE)
      expect(first.name).toEqual(redAssetWithUnknown.contactId)
    }
  })

  it('handles collate item for opfor wwith unknown type', () => {
    if (redAssetWithUnknown) {
      const item = collateItem(true, redAssetWithUnknown, blueForce, redForce, forceCols, platformStyles, [], platformTypes, attributeTypes, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redAssetWithUnknown.uniqid)
      expect(first.platformType).toEqual(UNKNOWN_TYPE)
    }
  })

  it('handles own-forces tab', () => {
    const umpireColumns = getColumns(false, forces, blueForce.uniqid, platformStyles, assetsCache)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(7)

    const pTypeCol = umpireColumns[2]
    expect(pTypeCol.lookup).toBeTruthy()
    expect(pTypeCol.lookup && Object.keys(pTypeCol.lookup).length).toEqual(10)

    const umpireRows = getOwnAssets(forces, forceCols, platformStyles, umpireForce, platformTypes, attributeTypes)
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(39)

    const blueRows = getOwnAssets(forces, forceCols, platformStyles, blueForce, platformTypes, attributeTypes)
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(17)

    // do some parent/child checking
    // TOOD: generate test data wuth child assets
    // const firstParent = blueRows[0]
    // const firstChild = blueRows[1]
    // expect(firstChild.parentId).toEqual(firstParent.id)
  })

  it('handles NEW ownFor', () => {
    const umpireOwnForces = getOwnAssets(forces, forceCols, platformStyles, umpireForce, platformTypes, attributeTypes)
    expect(umpireOwnForces).toBeTruthy()
    expect(umpireOwnForces.length).toEqual(39)

    const blueOwnForces = getOwnAssets(forces, forceCols, platformStyles, blueForce, platformTypes, attributeTypes)
    expect(blueOwnForces).toBeTruthy()
    expect(blueOwnForces.length).toEqual(17)
  })

  it('handles NEW oppFor', () => {
    const umpireOppForces = getOppAssets(forces, forceCols, platformStyles, umpireForce, platformTypes, attributeTypes)
    expect(umpireOppForces).toBeTruthy()
    expect(umpireOppForces.length).toEqual(0)

    const blueOppForces = getOppAssets(forces, forceCols, platformStyles, blueForce, platformTypes, attributeTypes)
    expect(blueOppForces).toBeTruthy()
    expect(blueOppForces.length).toEqual(13)
  })

  it('handles opFor tab', () => {
    const umpireColumns = getColumns(true, [], umpireForce.uniqid, platformStyles, assetsCache)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(6)

    const blueColumns = getColumns(true, [], blueForce.uniqid, platformStyles, assetsCache)
    expect(blueColumns).toBeTruthy()
    expect(blueColumns.length).toEqual(6)

    const umpireRows = getOppAssets(forces, forceCols, platformStyles, umpireForce, platformTypes, attributeTypes)
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(0)

    const blueRows = getOppAssets(forces, forceCols, platformStyles, blueForce, platformTypes, attributeTypes)
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(13)
  })
})
