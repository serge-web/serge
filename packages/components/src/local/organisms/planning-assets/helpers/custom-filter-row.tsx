import { Column, MTableFilterRow } from '@material-table/core'
import { SUPPORT_PANEL_LAYOUT } from '@serge/config'
import { Asset, ForceData } from '@serge/custom-types'
import { sortDictionaryByValue } from '@serge/helpers'
import React, { useEffect, useState } from 'react'
import { FilterObject, getFilterApplied } from '../../support-panel/helpers/caching-utils'

type CustomFilterRowProps = {
  columns: Column<any>[]
  onFilterChanged: (columnId: number, value: string[]) => void
  forces: ForceData[]
  cacheKey: string
  onSupportPanelLayoutChange?: (key: string, value: string) => void
}

const CustomFilterRow: React.FC<CustomFilterRowProps> = (props): React.ReactElement => {
  const [localProps, setLocalProps] = useState<CustomFilterRowProps>(props)

  useEffect(() => {
    const filters: FilterObject | undefined = getFilterApplied()
    if (filters && filters[props.cacheKey]) {
      filters[props.cacheKey].forEach(f => {
        props.columns.some(col => {
          if ((col as any).tableData.id === f.id && f.filterValue.length) {
            props.onFilterChanged(f.id, f.filterValue)
            return true
          }
          return false
        })
      })
    }
  }, [])

  const onFilterChanged = (columnId: number, filter: string[]) => {
    props.onFilterChanged(columnId, filter)

    const filterApplied = localProps.columns.map(col => ({ id: (col as any).tableData.id, filterValue: (col as any).tableData.filterValue || [] }))
    const filters: FilterObject = getFilterApplied() || {}
    if (props.onSupportPanelLayoutChange) {
      filters[props.cacheKey] = filterApplied
      props.onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.FILTER_APPLIED, JSON.stringify(filters))
    }

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
        if (asset.attributes && (!filter.length || filter.includes(asset.platformTypeId))) {
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
