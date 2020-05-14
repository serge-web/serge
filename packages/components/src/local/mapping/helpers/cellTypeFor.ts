import { SergeHex } from '@serge/custom-types'

interface cellTypesListProps {
  [key: string]: Array<any>
}

// generate the cell types for the supplied cells
const cellTypeFor = (cell: SergeHex<{}>, cellTypesList: cellTypesListProps) => {
  const types = cellTypesList[cell.name]
  if (types) {
    const index = types.findIndex((typ: boolean) => typ === true)
    if (index === 0) return 'sea'
    else if (index === 1) return 'land'
    else return 'organic'
  } else {
    return 'null'
  }
}

export default cellTypeFor
