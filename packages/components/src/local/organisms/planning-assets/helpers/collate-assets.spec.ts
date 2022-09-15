import { UNKNOWN_TYPE } from '@serge/config'
import { Asset } from '@serge/custom-types'
import { deepCopy, forceColors, platformIcons } from '@serge/helpers'
import { P9Mock } from '@serge/mocks'
import { getRows, getColumns, collateItem } from './collate-assets'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]
const redZeroAsset = redForce.assets && redForce.assets[0]
const redOneAsset = redForce.assets && redForce.assets[1]
const greenForce = forces[3]

const redAssetWithUnknown: Asset = deepCopy(redOneAsset)
redAssetWithUnknown.perceptions[0].typeId = undefined

false && console.log('get working', greenForce, getRows, getColumns, collateItem, UNKNOWN_TYPE, redZeroAsset)

const forceCols = forceColors(forces)
const platformStyles = P9Mock.data.platformTypes ? platformIcons(P9Mock.data.platformTypes.platformTypes) : []

describe('check collating assets', () => {
  it('handles collate item for opfor', () => {
    if (redOneAsset) {
      const item = collateItem(true, redOneAsset, blueForce.uniqid, redForce, forceCols, platformStyles, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redOneAsset.uniqid)
      expect(first.platformType).toEqual(redOneAsset.platformTypeId)
    }
  })

  it('handles collate item for opfor with lots of unknowns', () => {
    if (redZeroAsset) {
      const item = collateItem(true, redZeroAsset, blueForce.uniqid, redForce, forceCols, platformStyles, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redZeroAsset.uniqid)
      expect(first.platformType).toEqual(UNKNOWN_TYPE)
      expect(first.force).toEqual(UNKNOWN_TYPE)
      expect(first.name).toEqual(redZeroAsset.contactId)
    }
  })

  it('handles collate item for opfor wwith unknown type', () => {
    if (redAssetWithUnknown) {
      const item = collateItem(true, redAssetWithUnknown, blueForce.uniqid, redForce, forceCols, platformStyles, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redAssetWithUnknown.uniqid)
      expect(first.platformType).toEqual(UNKNOWN_TYPE)
    }
  })

  it('handles own-forces tab', () => {
    const umpireColumns = getColumns(false)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(7)

    const blueColumns = getColumns(false, blueForce.uniqid)
    expect(blueColumns).toBeTruthy()
    expect(blueColumns.length).toEqual(6)

    const umpireRows = getRows(false, forces, forceCols, platformStyles, undefined)
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(12)

    const blueRows = getRows(false, forces, forceCols, platformStyles, blueForce.uniqid)
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(3)

    // do some parent/child checking
    const firstParent = blueRows[0]
    const firstChild = blueRows[1]
    expect(firstChild.parentId).toEqual(firstParent.id)
  })

  it('handles opFor tab', () => {
    const umpireColumns = getColumns(true)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(7)

    const blueColumns = getColumns(true, blueForce.uniqid)
    expect(blueColumns).toBeTruthy()
    expect(blueColumns.length).toEqual(7)

    const umpireRows = getRows(true, forces, forceCols, platformStyles, undefined)
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(12)

    const blueRows = getRows(true, forces, forceCols, platformStyles, blueForce.uniqid)
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(7)
  })
})
