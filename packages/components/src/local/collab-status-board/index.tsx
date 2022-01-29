import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Checkbox, FormControl, FormControlLabel, Input } from '@material-ui/core'
import { CollaborativePermission } from '@serge/config'
import { ParticipantCollab } from '@serge/custom-types'
import { setMessageState } from '@serge/helpers'
import { uniqBy } from 'lodash'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import ColFilter, { CellFilter, HeaderFiltes } from './helpers/col-filter'
import filteredMessages from './helpers/filteredMessages'
import { genData } from './helpers/gen-data'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import Props, { Row } from './types/props'

/** combine force id and color
 */
export interface ForceColor {
  uniqid: string
  color: string
}

/* Render component */
export const CollabStatusBoard: React.FC<Props> = ({
  templates, messages, channelColb, isObserver, isUmpire, onChange, role, forces,
  gameDate, onMessageRead, onMarkAllAsRead, currentWargame
}: Props) => {
  const [showArchived, setShowArchived] = useState<boolean>(false)
  const [filteredRows, setFilterdRows] = useState<Row[]>([])
  const [searchString, setSearchString] = useState<string | undefined>(undefined)
  const [debounce, setDebound] = useState<any>()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [colName, setColName] = useState<string>('')
  const [filtersByKey, setAllFilters] = useState<HeaderFiltes[]>([])

  const open = Boolean(anchorEl)

  const participationsForMyForce = channelColb.participants.filter((p: ParticipantCollab) => p.force === role.forceName)
  // participations relate to me if they contain no roles, or if they contain my role
  const myParticipations = participationsForMyForce.filter((p: ParticipantCollab) => (p.roles.length === 0 || p.roles.includes(role.roleId)))

  // if we're not an umpire, we'll need some participations
  if (myParticipations.length === 0 && !isObserver) {
    // ok, should not be here
    throw new Error('Should not be in this channel')
  }

  // find my highest permission (or take no permission)
  const permission: CollaborativePermission = myParticipations.length ? myParticipations.reduce((a, b) => a.permission > b.permission ? a : b).permission : CollaborativePermission.CannotCollaborate

  // (optionally) include archived messages
  const filteredDoc = filteredMessages(messages, showArchived)
  const { rows, columns, customStyles } = genData(
    filteredDoc,
    forces,
    role,
    templates,
    isObserver,
    isUmpire,
    channelColb,
    permission,
    gameDate,
    onChange,
    onMessageRead
  )

  const closeFilter = (): void => {
    setAnchorEl(null)
  }

  useEffect(() => {
    // if the list of messages has changed, we need to re-run the filter, which
    // updates the filteredMessages object that gets rendered
    applyFilter(searchString || '')
  }, [messages])

  // ///////////////////////////////////////// //
  //    INJECT FILTER TO TABLE CELL HEADER     //
  // ///////////////////////////////////////// //

  useEffect(() => {
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
            const colFilters: CellFilter[] = rows.map(row => {
              return {
                label: row[(col.name || '').toString().toLowerCase()],
                checked: false
              }
            })
            // uniq filter by label and sort
            const uniqFilters = uniqBy(colFilters, 'label').sort((a: CellFilter, b: CellFilter) => a.label > b.label ? 1 : -1)
            const filter = { key: col.name?.toString() || '', filters: ([{ label: 'All', checked: false }, ...uniqFilters]) }
            allFilter.push(filter)

            const filterNode = header?.childNodes[idx]
            const colFilterId = `${channelColb.name}_${col.name}_filter`
            const filterElm = document.getElementById(colFilterId)

            if (!headers || filterElm) return

            // inject filter icon to corresponding cell header and add event for it
            const newFilterElm = document.createElement('div')
            newFilterElm.innerHTML = `<i id='${colFilterId}' class='fa fa-filter' aria-hidden='true' style='cursor: pointer''></i>`
            newFilterElm.onclick = (e: any): void => {
              setColName(col.name?.toString() || '')
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
   * in case a new message arrived, should update the menu filter
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

  const getFilteredRows = (appliedFilter: { col: string, filter: CellFilter[] }[]): Row[] => {
    return appliedFilter.reduce((result: any[], { col, filter }) => {
      result.push(...rows.filter(row => {
        const filterLbl: string[] = filter.map(f => f.label)
        return filterLbl.includes(row[col])
      }))
      return result
    }, [])
  }

  const onFilterChanged = (headerFiltes: HeaderFiltes[]): void => {
    const appliedFilter = headerFiltes.reduce((result: { col: string, filter: CellFilter[] }[], headerFilter: HeaderFiltes) => {
      const { key, filters } = headerFilter
      const selectedFilter = filters.filter(f => f.checked)

      if (!selectedFilter.length) {
        return result
      }

      result.push({ col: key.toLowerCase(), filter: selectedFilter })
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

  // End Inject Filter Section

  const handleMarkAllAsRead = (): void => {
    for (const message of filteredDoc) {
      // flag for if we tell original sender of RFI that it has been responded to
      const key = message._id
      setMessageState(currentWargame, role.forceName, role.roleName, key)
    }
    onMarkAllAsRead && onMarkAllAsRead()
  }

  const handleArchiveDoc = (): void => {
    setShowArchived(!showArchived)
  }

  const ExpandedComponent = ({ data }: Row): React.ReactElement => data.collapsible()

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

  const filterTable = (e: any): void => {
    clearTimeout(debounce)
    const searchStr = e.target.value
    setSearchString(searchStr)
    setDebound(setTimeout(() => {
      applyFilter(searchStr)
    }, 500))
  }

  return (
    <>
      <div className={styles.actions}>
        <FormControl className={styles['filter-group']}>
          <FontAwesomeIcon icon={faSearch} className={styles['filter-icon']} />
          <Input placeholder="filter data" className={styles['input-filter']} onInput={filterTable} />
        </FormControl>
        <FormControlLabel
          className={styles.checkbox}
          label="Show archived"
          control={
            <Checkbox
              onChange={handleArchiveDoc}
              checked={!!showArchived}
            />
          }
        />
        <div className={styles.btn}>
          <span>
            <Button onClick={handleMarkAllAsRead}>Mark All As Read</Button>
          </span>
        </div>
      </div>
      <ColFilter open={open} onClose={closeFilter} colName={colName} anchorEl={anchorEl} filters={filtersByKey} onFilterChanged={onFilterChanged} />
      <DataTable
        columns={columns}
        data={filteredRows}
        fixedHeader
        expandableRows
        customStyles={customStyles}
        expandableRowsComponent={ExpandedComponent}
        expandOnRowClicked={true}
        defaultSortAsc={true}
        persistTableHead={true}
        expandableRowsHideExpander={true}
        highlightOnHover={true}
      />
    </>
  )
}

export default CollabStatusBoard
