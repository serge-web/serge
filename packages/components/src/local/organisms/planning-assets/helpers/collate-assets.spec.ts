import { UNKNOWN_TYPE } from '@serge/config'
import { Asset } from '@serge/custom-types'
import { deepCopy, forceColors, platformIcons } from '@serge/helpers'
import { P9Mock } from '@serge/mocks'
import { collateItem, getColumns, getOppAssets, getOwnAssets, getRows } from './collate-assets'

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

false && console.log('get working:', greenForce, getRows, getColumns, collateItem, UNKNOWN_TYPE, redZeroAsset)

const forceCols = forceColors(forces)
const platformStyles = P9Mock.data.platformTypes ? platformIcons(P9Mock.data.platformTypes.platformTypes) : []

describe('check collating assets', () => {
  it('handles collate item for opfor', () => {
    if (redZeroAsset) {
      const item = collateItem(true, redZeroAsset, blueForce, redForce, forceCols, platformStyles, [], undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(4)
      const first = item[0]
      expect(first.id).toEqual(redZeroAsset.uniqid)
      expect(first.platformType).toEqual(redZeroAsset.platformTypeId)
    }
  })

  it('handles collate item for opfor with lots of unknowns', () => {
    if (redAssetWithUnknown) {
      const item = collateItem(true, redAssetWithUnknown, blueForce, redForce, forceCols, platformStyles, [], undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(4)
      const first = item[0]
      expect(first.id).toEqual(redAssetWithUnknown.uniqid)
      expect(first.platformType).toEqual(UNKNOWN_TYPE)
      expect(first.force).toEqual(UNKNOWN_TYPE)
      expect(first.name).toEqual(redAssetWithUnknown.contactId)
    }
  })

  it('handles collate item for opfor wwith unknown type', () => {
    if (redAssetWithUnknown) {
      const item = collateItem(true, redAssetWithUnknown, blueForce, redForce, forceCols, platformStyles, [], undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(4)
      const first = item[0]
      expect(first.id).toEqual(redAssetWithUnknown.uniqid)
      expect(first.platformType).toEqual(UNKNOWN_TYPE)
    }
  })

  it('handles own-forces tab', () => {
    const umpireColumns = getColumns(false, forces, blueForce.uniqid, platformStyles)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(4)

    const pTypeCol = umpireColumns[1]
    expect(pTypeCol.lookup).toBeTruthy()
    expect(pTypeCol.lookup && Object.keys(pTypeCol.lookup).length).toEqual(14)

    const umpireRows = getRows(false, forces, forceCols, platformStyles, umpireForce, [])
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(105)

    const blueRows = getRows(false, forces, forceCols, platformStyles, blueForce, [])
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(40)

    // do some parent/child checking
    const firstParent = blueRows[0]
    const firstChild = blueRows[1]
    expect(firstChild.parentId).toEqual(firstParent.id)
  })

  it('handles NEW ownFor', () => {
    const umpireOwnForces = getOwnAssets(forces, forceCols, platformStyles, umpireForce)
    expect(umpireOwnForces).toBeTruthy()
    expect(umpireOwnForces.length).toEqual(105)

    const blueOwnForces = getOwnAssets(forces, forceCols, platformStyles, blueForce)
    expect(blueOwnForces).toBeTruthy()
    expect(blueOwnForces.length).toEqual(40)
  })

  it('handles NEW oppFor', () => {
    const umpireOppForces = getOppAssets(forces, forceCols, platformStyles, umpireForce)
    expect(umpireOppForces).toBeTruthy()
    expect(umpireOppForces.length).toEqual(0)

    const blueOppForces = getOppAssets(forces, forceCols, platformStyles, blueForce)
    expect(blueOppForces).toBeTruthy()
    expect(blueOppForces.length).toEqual(39)
  })

  it('handles opFor tab', () => {
    const umpireColumns = getColumns(true, [], umpireForce.uniqid, platformStyles)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(3)

    const blueColumns = getColumns(true, [], blueForce.uniqid, platformStyles)
    expect(blueColumns).toBeTruthy()
    expect(blueColumns.length).toEqual(3)

    const umpireRows = getRows(true, forces, forceCols, platformStyles, umpireForce, [])
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(0)

    const blueRows = getRows(true, forces, forceCols, platformStyles, blueForce, [])
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(39)
  })
})
