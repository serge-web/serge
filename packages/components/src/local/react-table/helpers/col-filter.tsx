import { Checkbox, Divider, FormControlLabel, Menu, MenuItem } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'

export type CellFilter = {
  label: string
  checked: boolean
}

export type HeaderFiltes = {
  key: string
  filters: CellFilter[]
}

export type ColFilterProps = {
  open: boolean
  onClose: ((event: unknown, reason: 'backdropClick' | 'escapeKeyDown') => void) | undefined
  anchorEl: HTMLElement | null
  colName: string
  filters: HeaderFiltes[]
  onFilterChanged: (filters: HeaderFiltes[]) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: () => ({
      paddingTop: 0,
      paddingBottom: 0
    })
  })
)

const ColFilter: React.FC<ColFilterProps> = (props) => {
  const { onClose, open, anchorEl, filters, onFilterChanged, colName } = props
  const { menuItem } = useStyles()
  const [localFilter, setLocalFilter] = useState<CellFilter[]>([])

  const onChange = (itemIndex: number, currentState: boolean): void => {
    const cloneFilters = cloneDeep(filters)
    const headerFilter = cloneFilters.find(f => f.key === colName)
    if (headerFilter) {
      headerFilter.filters[itemIndex].checked = !currentState
      onFilterChanged(cloneFilters)
    }
  }

  useEffect(() => {
    const headerFilter = filters.find(f => f.key === colName)
    if (headerFilter) {
      setLocalFilter(headerFilter.filters)
    }
  }, [colName, filters])

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      style={{ marginTop: '50px', zIndex: 10000 }}
      MenuListProps={{ disablePadding: true }}
    >
      {localFilter.map((filter, idx) =>
        <div key={`${filter.label}-${idx}`}>
          <MenuItem className={menuItem}>
            <FormControlLabel
              label={filter.label}
              control={
                <Checkbox
                  value={filter.checked}
                  onChange={(): void => onChange(idx, filter.checked)}
                  checked={filter.checked}
                />
              }
            />
          </MenuItem>
          <Divider />
        </div>
      )}
    </Menu>
  )
}

export default ColFilter
