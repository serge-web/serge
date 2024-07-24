import { faArchive, faEnvelope, faEnvelopeOpen, faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, TextField, Tooltip } from '@material-ui/core'
import cx from 'classnames'
import { flattenDeep, uniqBy } from 'lodash'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import ColFilter, { CellFilter, HeaderFiltes } from './helpers/col-filter'
import { getElementByClass, getElementById } from './helpers/dom-helpers'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import { ReactTableProps, Row } from './types/props'

/* Render component */
export const ReactTable: React.FC<ReactTableProps> = (props) => {
  const {
    columns,
    rows,
    showArchived,
    expandedRowId,
    handleArchiveDoc,
    handleMarkAllAsRead,
    handleMarkAllAsUnread,
    customStyles,
    channelName = '',
    tableActivity,
    ...restProps
  } = props
  const [filteredRows, setFilterdRows] = useState<Row[]>([])
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [colName, setColName] = useState<string>('')
  const [filtersByKey, setAllFilters] = useState<HeaderFiltes[]>([])
  const [filterActive, setFilterActive] = useState<boolean>(false)
  const [debounce, setDebounce] = useState<any>()
  const [searchText, setSearchText] = useState<string>('')

  const open = Boolean(anchorEl)

  const getRoleId = new URLSearchParams(window.location.search).get('access')

  const isAllMsgRead = useMemo(() => {
    return rows.filter(msg => msg.message !== 'N/A')
      .every(msg => msg.isReaded)
  }, [rows])

  // ///////////////////////////////////////// //
  //    INJECT FILTER TO TABLE CELL HEADER     //
  // ///////////////////////////////////////// //

  /**
   * on header filter changed, update indicate filter icon
   */
  useEffect(() => {
    filtersByKey.forEach(item => {
      // check if the filter is applied or not
      const filterApplied = item.filters.some(f => f.checked)
      // get the filter icon id
      let iconId = `${channelName}_${item.key}_filter`.toLowerCase()
      let filterElm = getElementById(iconId)
      // if the filterElm = null, might the channelName = '' if we open the table in PlayerLog modal, try to get 1 more time
      if (!filterElm) {
        iconId = `_${item.key}_filter`.toLowerCase()
        filterElm = getElementById(iconId)
      }
      // return if the filterElm is null
      if (!filterElm) {
        return
      }
      // update color for the column which has filter applied
      (filterElm as HTMLInputElement).style.opacity = filterApplied ? '1' : '0.5'
    })
  }, [filtersByKey])

  /**
   * on rows changed, re-redner rows
   */
  useEffect(() => {
    if (rows.length || !filterActive) {
      setFilterdRows(rows)
      setSearchText('')
    }
  }, [rows, filterActive])

  useEffect(() => {
    // do not render filter icon if empty rows
    if (!rows.length) {
      return
    }
    // reset header state if need, in case new message arrived
    resetLoadedStateIfNeed()

    // get list renderred table headers in all channel
    const headers = getElementByClass('rdt_TableHeadRow')
    // process one by one
    const allFilter: HeaderFiltes[] = []
    for (const header of headers) {
      if (!(header as any).loaded) {
        columns.forEach((col, idx) => {
          if (col.colFilter) {
            const colField = col.field || `${col.name}`.toString().toLowerCase()
            const colFilters: CellFilter[] = rows.map(row => {
              return {
                label: row[colField],
                checked: getFilterState(row[colField])
              }
            })
            // uniq filter by label and sort
            const uniqFilters = uniqBy(colFilters, 'label').sort((a: CellFilter, b: CellFilter) => a.label > b.label ? 1 : -1)
            const filter = { key: colField, filters: uniqFilters }
            allFilter.push(filter)

            const filterNode = header?.childNodes[idx]
            const colFilterId = `${channelName}_${colField}_filter`.toLowerCase()
            const filterElm = getElementById(colFilterId)

            if (!headers || filterElm) return

            // inject filter icon to corresponding cell header and add event for it
            const newFilterElm = document.createElement('div')
            newFilterElm.innerHTML = `<i id='${colFilterId}' class='fa fa-filter' aria-hidden='true' style='cursor: pointer; opacity: 0.5''></i>`
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

    updateFilters(allFilter)
    setAllFilters(allFilter)
  }, [rows, filterActive])

  useEffect((): any => {
    const rowElement = document.getElementById(`row-${expandedRowId}`)
    if (rowElement) {
      const timeoutId = setTimeout(() => {
        rowElement.scrollIntoView({ behavior: 'auto' })
      }, 10)
      
      return () => clearTimeout(timeoutId)
    }
  }, [expandedRowId, rows])
  /**
   * merge existing filter state when the rows changes / the filter list is initialized
   * @param label: filter label
   * @returns boolean
   */
  const getFilterState = (label: string): boolean => {
    if (!filtersByKey.length) {
      return false
    }
    return filtersByKey.some(filter => {
      return filter.filters.some(f => f.checked && f.label === label)
    })
  }

  /**
   * in case a new message arrived, should reset the header state -> update the filter menu
   */
  const resetLoadedStateIfNeed = (): void => {
    const headers = getElementByClass('rdt_TableHeadRow')
    const shouldReset = headers.every(header => (header as any).loaded)
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
  const getFilteredRows = (appliedFilters: { col: string, filter: CellFilter[] }[]): Row[] => {
    const acceptableValues: { label: string, col: string }[] = flattenDeep(appliedFilters.map(filter => filter.filter.map(f => ({ label: f.label, col: filter.col }))))
    return rows.filter(row => {
      // see if this value is in the acceptable values
      return acceptableValues.some(({ label, col }) => label.trim() === `${row[col]}`.trim())
    })
  }

  /**
   * filter the data table by selected header menu filter item
   * @param headerFiltes: HeaderFiltes[]
   */
  const onFilterChanged = (headerFiltes: HeaderFiltes[]): void => {
    if (getRoleId) {
      tableActivity(getRoleId, 'filter changed')
    }
    updateFilters(headerFiltes)
  }

  /**
   * filter the data table by selected header menu filter item
   * @param headerFiltes: HeaderFiltes[]
   */
  const updateFilters = (headerFiltes: HeaderFiltes[]): void => {
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

  /** there has been some interaction with the data table */
  const onTableInteraction = (): void => {
    if (getRoleId) {
      tableActivity(getRoleId, 'data table interaction')
    }
  }

  const ExpandedComponent = ({ data }: Row): React.ReactElement => data.collapsible()

  /**
   * filter rows on inputed search value
   * @param e
   */
  const onFilterInput = (e: ChangeEvent<HTMLInputElement>): void => {
    clearTimeout(debounce)
    setSearchText(e.target.value)
    setDebounce(setTimeout((searchText: string) => {
      const filteredRows = rows.filter(row =>
        Object.keys(row).some(key =>
          row[key] &&
          typeof row[key] === 'string' &&
          `${row[key]}`.toLowerCase().includes(searchText.toLowerCase()))
      )
      setFilterdRows(filteredRows)
    }, 500, e.target.value))
  }

  const handleMessagesState = (): void => {
    if (isAllMsgRead) {
      handleMarkAllAsUnread && handleMarkAllAsUnread()
    } else {
      handleMarkAllAsRead && handleMarkAllAsRead()
    }
  }

  return (
    <>
      <div className={styles.actions}>
        <div className={cx({ [styles['filter-section']]: true, [styles['filter-active']]: filterActive })}>
          <Tooltip title="Filter Data">
            <Button onClick={(): void => setFilterActive(!filterActive)}>
              <FontAwesomeIcon icon={faFilter} />
            </Button>
          </Tooltip>
          <TextField placeholder='Filter data' value={searchText} InputProps={{ disableUnderline: true }} onChange={onFilterInput} />
        </div>
        {
          !!handleArchiveDoc &&
          <div className={cx({ [styles['archive-section']]: true, [styles['archive-active']]: showArchived })}>
            <Tooltip title="Show Archive">
              <Button onClick={(): void => handleArchiveDoc()}>
                <FontAwesomeIcon icon={faArchive} />
              </Button>
            </Tooltip>
          </div>
        }
        {
          !!handleMarkAllAsRead &&
          <div className={cx({ [styles['mark-all-as-read-section']]: true, [styles['mark-all-as-read-open']]: isAllMsgRead })}>
            <Tooltip title={isAllMsgRead ? 'Mark All as Unread' : 'Mark All as Read'}>
              <Button onClick={handleMessagesState}>
                <FontAwesomeIcon icon={isAllMsgRead ? faEnvelopeOpen : faEnvelope} color={isAllMsgRead ? '#838585' : '#69c'} />
              </Button>
            </Tooltip>
          </div>
        }
      </div>
      <ColFilter open={open} onClose={closeFilter} colName={colName} anchorEl={anchorEl} filters={filtersByKey} onFilterChanged={onFilterChanged} />
      <DataTable
        columns={columns}
        data={filteredRows}
        onSort={onTableInteraction}
        onRowExpandToggled={onTableInteraction}
        customStyles={customStyles}
        expandableRowsComponent={ExpandedComponent}
        {...restProps}
      />
    </>
  )
}

export default React.memo(ReactTable)
