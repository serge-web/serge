import { SergeHex } from '@serge/custom-types'
import cellTypesList from '../data/cell-types'

// generate the cell types for the supplied cells
const cellType = (cell: SergeHex<{}>) => {
  const types: Array<boolean> = cellTypesList[cell.name]
  if (types) {
    const index = types.findIndex((typ: boolean) => typ === true)
    if (index === 0) return 'sea'
    else if (index === 1) return 'land'
    else return 'organic'
  } else {
    return 'null'
  }
}

export default cellType
