import { Column, MTableFilterRow } from '@material-table/core'
import { SUPPORT_PANEL_LAYOUT } from '@serge/config'
import React, { useEffect } from 'react'
import { FilterObject, getFilterApplied } from '../../support-panel/helpers/caching-utils'

type CustomFilterRowProps = {
  columns: Column<any>[]
  onFilterChanged: (columnId: number, value: string[]) => void
  cacheKey: string
  onSupportPanelLayoutChange?: (key: string, value: string) => void
}

const CustomFilterRow: React.FC<CustomFilterRowProps> = (props): React.ReactElement => {
  useEffect(() => {
    const filters: FilterObject = getFilterApplied()
    if (filters[props.cacheKey]) {
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
    const filterApplied = props.columns.map(col => ({ id: (col as any).tableData.id, filterValue: (col as any).tableData.filterValue || [] }))
    const filters: FilterObject = getFilterApplied()
    if (props.onSupportPanelLayoutChange) {
      filters[props.cacheKey] = filterApplied
      props.onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.FILTER_APPLIED, JSON.stringify(filters))
    }
    props.onFilterChanged(columnId, filter)
  }

  return <MTableFilterRow {...props} onFilterChanged={onFilterChanged} />
}

export default CustomFilterRow
