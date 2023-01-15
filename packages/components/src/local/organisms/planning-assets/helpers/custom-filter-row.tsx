import { Column, MTableFilterRow } from '@material-table/core'
import { Asset, ForceData } from '@serge/custom-types'
import { sortDictionaryByValue } from '@serge/helpers'
import React, { useState } from 'react'

type CustomFilterRowProps = {
  columns: Column<any>[]
  onFilterChanged: (columnId: number, value: string[]) => void
  forces: ForceData[]
}

const CustomFilterRow: React.FC<CustomFilterRowProps> = (props): React.ReactElement => {
  const [localProps, setLocalProps] = useState<CustomFilterRowProps>(props)

  const onFilterChanged = (columnId: number, filter: string[]) => {
    props.onFilterChanged(columnId, filter)
    const platformTypeColIdx = props.columns.findIndex(col => col.field === 'platformType')
    if (platformTypeColIdx === -1 || columnId !== platformTypeColIdx) {
      return
    }
    const filterSubTypes = {}
    props.forces.forEach(force => {
      if (!force.assets) {
        return
      }
      force.assets.forEach((asset: Asset) => {
        if (asset.attributes && ((filter.length && filter.includes(asset.platformTypeId)) || !filter.length)) {
          const subType = asset.attributes.a_Type as string
          filterSubTypes[subType] = subType
        }
      })
      // sort the list
      const sortedDict = sortDictionaryByValue(filterSubTypes)

      const subTypeColIdx = props.columns.findIndex(col => col.field === 'subType')
      if (subTypeColIdx !== -1 && props.columns[subTypeColIdx].lookup) {
        props.columns[subTypeColIdx].lookup = sortedDict
      }
      setLocalProps({ ...props })
    })
  }

  return <MTableFilterRow {...localProps} onFilterChanged={onFilterChanged}></MTableFilterRow>
}

export default CustomFilterRow
