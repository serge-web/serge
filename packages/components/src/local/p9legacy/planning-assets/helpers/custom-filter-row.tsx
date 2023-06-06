import { Column, MTableFilterRow } from '@material-table/core'
import { SUPPORT_PANEL_LAYOUT } from '@serge/config'
import { cloneDeep } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { FilterObject, getFilterApplied } from '../../support-panel/helpers/caching-utils'

type CustomFilterRowProps = {
  columns: Column<any>[]
  onFilterChanged: (columnId: number, value: string[]) => void
  cacheKey: string
  onSupportPanelLayoutChange: (key: string, value: string) => void
  getSupportPanelState: () => void
}

const CustomFilterRow: React.FC<CustomFilterRowProps> = (props): React.ReactElement => {
  const [localProps, setLocalProps] = useState(props)

  const panelState = useMemo(() => props.getSupportPanelState(), [])

  useEffect(() => {
    const filters: FilterObject = getFilterApplied(panelState)
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
    const filterApplied = props.columns.map(col => {
      if ((col as any).tableData.id === columnId) {
        return ({ id: (col as any).tableData.id, filterValue: filter })
      }
      return ({ id: (col as any).tableData.id, filterValue: (col as any).tableData.filterValue || [] })
    })
    const filters: FilterObject = getFilterApplied(panelState)
    if (props.onSupportPanelLayoutChange) {
      filters[props.cacheKey] = filterApplied
      props.onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.FILTER_APPLIED, JSON.stringify(filters))
    }
    props.onFilterChanged(columnId, filter)
    setTimeout(() => {
      setLocalProps(cloneDeep(props))
    }, 500)
  }

  return <MTableFilterRow {...localProps} onFilterChanged={onFilterChanged} />
}

export default CustomFilterRow
