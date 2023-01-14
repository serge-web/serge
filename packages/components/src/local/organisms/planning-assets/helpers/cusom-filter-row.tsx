import { Column, MTableFilterRow } from '@material-table/core'
import { Asset, ForceData } from '@serge/custom-types'
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
    if (columnId !== 1) {
      return
    }
    const filterSubTypes = {}
    props.forces.forEach(force => {
      if (!force.assets) {
        return
      }
      force.assets.forEach((asset: Asset) => {
        if (asset.attributes && filter.includes(asset.platformTypeId)) {
          const subType = asset.attributes.a_Type as string
          filterSubTypes[subType] = subType
        }
      })
      const subTypeColIdx = props.columns.findIndex(col => col.field === 'subType')
      if (props.columns[subTypeColIdx].lookup) {
        props.columns[subTypeColIdx].lookup = filterSubTypes
      }
      setLocalProps({ ...props })
    })
  }

  return <MTableFilterRow {...localProps} onFilterChanged={onFilterChanged}></MTableFilterRow>
}

export default CustomFilterRow
