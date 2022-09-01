import { P9Mock } from '@serge/mocks'
import { getRows, getColumns, collateItem } from './collate-assets'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]
const redAsset = redForce.assets && redForce.assets[1]
const greenForce = forces[3]

false && console.log('get working', greenForce, getRows, getColumns)

describe('check collating assets', () => {
  it('handles collate item for opfor', () => {
    if (redAsset) {
      const item = collateItem(true, redAsset, blueForce.uniqid, redForce, undefined)
      expect(item).toBeTruthy()
      expect(item.length).toEqual(1)
      const first = item[0]
      expect(first.id).toEqual(redAsset.uniqid)
      expect(first.platformType).toEqual(redAsset.platformTypeId)
    }
  })

  // it('handles own-forces tab', () => {
  //   const umpireColumns = getColumns(false)
  //   expect(umpireColumns).toBeTruthy()
  //   expect(umpireColumns.length).toEqual(6)

  //   const blueColumns = getColumns(false, blueForce.uniqid)
  //   expect(blueColumns).toBeTruthy()
  //   expect(blueColumns.length).toEqual(5)

  //   const umpireRows = getRows(false, forces, undefined)
  //   expect(umpireRows).toBeTruthy()
  //   expect(umpireRows.length).toEqual(15)

  //   const blueRows = getRows(false, forces, blueForce.uniqid)
  //   expect(blueRows).toBeTruthy()
  //   expect(blueRows.length).toEqual(6)

  //   // do some parent/child checking
  //   const firstParent = blueRows[0]
  //   const firstChild = blueRows[1]
  //   expect(firstChild.parentId).toEqual(firstParent.id)

  // })

  // it('handles opFor tab', () => {
  //   const umpireColumns = getColumns(true)
  //   expect(umpireColumns).toBeTruthy()
  //   expect(umpireColumns.length).toEqual(6)

  //   const blueColumns = getColumns(true, blueForce.uniqid)
  //   expect(blueColumns).toBeTruthy()
  //   expect(blueColumns.length).toEqual(6)

  //   const umpireRows = getRows(true, forces, undefined)
  //   expect(umpireRows).toBeTruthy()
  //   expect(umpireRows.length).toEqual(15)

  //   const blueRows = getRows(true, forces, blueForce.uniqid)
  //   expect(blueRows).toBeTruthy()
  //   expect(blueRows.length).toEqual(9)
  // })
})
