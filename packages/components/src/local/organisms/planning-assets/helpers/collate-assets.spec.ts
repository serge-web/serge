import { P9Mock} from '@serge/mocks'
import { getRows, getColumns } from './collate-assets'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]

describe('check collating assets', () => {
  it('handles own-forces tab', () => {
    const umpireColumns = getColumns(false)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(6)

    const blueColumns = getColumns(false, blueForce.uniqid)
    expect(blueColumns).toBeTruthy()
    expect(blueColumns.length).toEqual(5)

    const umpireRows = getRows(false, forces, undefined)
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(15)

    const blueRows = getRows(false, forces, blueForce.uniqid)
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(6)
  })

  it('handles opFor tab', () => {
    const umpireColumns = getColumns(true)
    expect(umpireColumns).toBeTruthy()
    expect(umpireColumns.length).toEqual(6)

    const blueColumns = getColumns(true, blueForce.uniqid)
    expect(blueColumns).toBeTruthy()
    expect(blueColumns.length).toEqual(6)

    const umpireRows = getRows(true, forces, undefined)
    expect(umpireRows).toBeTruthy()
    expect(umpireRows.length).toEqual(15)

    const blueRows = getRows(true, forces, blueForce.uniqid)
    expect(blueRows).toBeTruthy()
    expect(blueRows.length).toEqual(6)
  })

})