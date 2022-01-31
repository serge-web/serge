import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Checkbox, FormControl, FormControlLabel, Input } from '@material-ui/core'
import { uniqBy } from 'lodash'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import ColFilter, { CellFilter, HeaderFiltes } from './helpers/col-filter'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import { ReactTableProps, Row } from './types/props'
import cx from 'classnames'

/* Render component */
export const ReactTable: React.FC<ReactTableProps> = (props) => {
  const {
    columns,
    rows,
    showArchived,
    handleArchiveDoc,
    handleMarkAllAsRead,
    customStyles,
    channelName = '',
    filterTheme = 'light',
    ...restProps
  } = props
  const [filteredRows, setFilterdRows] = useState<Row[]>([])
  const [debounce, setDebounce] = useState<any>()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [colName, setColName] = useState<string>('')
  const [filtersByKey, setAllFilters] = useState<HeaderFiltes[]>([])
  const [isSearching, setSearching] = useState<boolean>(false)

  const open = Boolean(anchorEl)

  /**
   * on rows changed, re-redner rows
   */
  useEffect(() => {
    if (rows.length && !isSearching) {
      setFilterdRows(rows)
    }
  }, [rows])

  // ///////////////////////////////////////// //
  //    INJECT FILTER TO TABLE CELL HEADER     //
  // ///////////////////////////////////////// //

  useEffect(() => {
    // do not render filter icon if empty rows
    if (!rows.length) {
      return
    }
    // reset header state if need, in case new message arrived
    resetLoadedStateIfNeed()

    // get list renderred table headers in all channel
    const headers = document.getElementsByClassName('rdt_TableHeadRow')
    // process one by one
    const allFilter: HeaderFiltes[] = []
    for (const header of Array.from(headers)) {
      if (!(header as any).loaded) {
        columns.forEach((col, idx) => {
          if (col.colFilter) {
            const colField = col.field || `${col.name}`.toString().toLowerCase()
            const colFilters: CellFilter[] = rows.map(row => {
              return {
                label: row[colField],
                checked: false
              }
            })
            // uniq filter by label and sort
            const uniqFilters = uniqBy(colFilters, 'label').sort((a: CellFilter, b: CellFilter) => a.label > b.label ? 1 : -1)
            const filter = { key: colField, filters: uniqFilters }
            allFilter.push(filter)

            const filterNode = header?.childNodes[idx]
            const colFilterId = `${channelName}_${col.name}_filter`
            const filterElm = document.getElementById(colFilterId)

            if (!headers || filterElm) return

            // inject filter icon to corresponding cell header and add event for it
            const newFilterElm = document.createElement('div')
            newFilterElm.innerHTML = `<i id='${colFilterId}' class='fa fa-filter' aria-hidden='true' style='cursor: pointer''></i>`
            newFilterElm.onclick = (e: any): void => {
              setColName(colField)
              setAnchorEl(e.currentTarget)
            }
            filterNode.appendChild(newFilterElm)
          }
        });
        (header as any).loaded = true
        break
      }
    }
    setAllFilters(allFilter)
  }, [rows.length])

  /**
   * in case a new message arrived, should reset the header state -> update the filter menu
   */
  const resetLoadedStateIfNeed = (): void => {
    const headers = document.getElementsByClassName('rdt_TableHeadRow')
    const shouldReset = Array.from(headers).every(header => (header as any).loaded)
    if (shouldReset) {
      Array.from(headers).forEach(header => {
        (header as any).loaded = false
      })
    }
  }

  /**
   * get filterred rows by header selected header menu filter item
   * @param appliedFilter: { col: string, filter: CellFilter[] }[]
   * @returns Row[]
   */
  const getFilteredRows = (appliedFilter: { col: string, filter: CellFilter[] }[]): Row[] => {
    return appliedFilter.reduce((result: any[], { col, filter }) => {
      result.push(...rows.filter(row => {
        const filterLbl: string[] = filter.map(f => f.label)
        return filterLbl.includes(row[col])
      }))
      return result
    }, [])
  }

  /**
   * filter the data table by selected header menu filter item
   * @param headerFiltes: HeaderFiltes[]
   */
  const onFilterChanged = (headerFiltes: HeaderFiltes[]): void => {
    const appliedFilter = headerFiltes.reduce((result: { col: string, filter: CellFilter[] }[], headerFilter: HeaderFiltes) => {
      const { key, filters } = headerFilter
      const selectedFilter = filters.filter(f => f.checked)

      if (!selectedFilter.length) {
        return result
      }

      result.push({ col: key, filter: selectedFilter })
      return result
    }, [])

    if (appliedFilter.length) {
      const filteredRows = getFilteredRows(appliedFilter)
      setFilterdRows(filteredRows)
    } else {
      setFilterdRows(rows)
    }
    setAllFilters(headerFiltes)
  }

  /**
   * close the header filter menu
   */
  const closeFilter = (): void => {
    setAnchorEl(null)
  }

  /**
   * filter data table by the search string
   * @param searchStr: string
   */
  const applyFilter = (searchStr: string): void => {
    const filteredRows = rows
      .filter((row: Row) => Object
        .values(row)
        .some((value: any) =>
          value &&
          typeof value === 'string' &&
          (value.toLowerCase().includes(searchStr.trim().toLowerCase()))))
    setFilterdRows(filteredRows)
  }

  /**
   * filter data table by entering the search string
   * @param e: Input event
   */
  const filterTable = (e: any): void => {
    const searchStr = e.target.value
    clearTimeout(debounce)
    setSearching(!!searchStr)
    setDebounce(setTimeout(() => {
      applyFilter(searchStr)
    }, 500))
  }

  const ExpandedComponent = ({ data }: Row): React.ReactElement => data.collapsible()

  return (
    <>
      <div className={styles.actions}>
        <FormControl>
          <FontAwesomeIcon icon={faSearch} className={cx(styles['filter-icon'], styles[filterTheme])} />
          <Input placeholder="filter data" className={cx(styles['input-filter'], styles[filterTheme])} onInput={filterTable} />
        </FormControl>
        {
          handleArchiveDoc && <FormControlLabel
            className={styles.checkbox}
            label="Show archived"
            control={
              <Checkbox
                onChange={handleArchiveDoc}
                checked={!!showArchived}
              />
            }
          />
        }
        {
          handleMarkAllAsRead && <div className={styles.btn}>
            <span>
              <Button onClick={handleMarkAllAsRead}>Mark All As Read</Button>
            </span>
          </div>
        }
      </div>
      <ColFilter open={open} onClose={closeFilter} colName={colName} anchorEl={anchorEl} filters={filtersByKey} onFilterChanged={onFilterChanged} />
      <DataTable
        columns={columns}
        data={filteredRows}
        customStyles={customStyles}
        expandableRowsComponent={ExpandedComponent}
        {...restProps}
      />
    </>
  )
}

export default React.memo(ReactTable)
