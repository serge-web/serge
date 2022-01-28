import React, { useEffect, useState } from 'react'
import { CollaborativePermission } from '@serge/config'
import { Button, Checkbox, FormControl, FormControlLabel, Input } from '@material-ui/core'
import { genData } from './helpers/gen-data'
import { setMessageState } from '@serge/helpers'
import DataTable from 'react-data-table-component'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ColFilter from './helpers/col-filter'

/* Import Types */
import Props, { Column, Row } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import filteredMessages from './helpers/filteredMessages'
import { ParticipantCollab } from '@serge/custom-types'

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
  const [inFilterMode, setFilterMode] = useState<boolean>(false)
  const [searchString, setSearchString] = useState<string | undefined>(undefined)
  const [debounce, setDebound] = useState<any>()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [filters, setFilters] = useState<string[]>([])

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

  const openFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const closeFilter = (): void => {
    setAnchorEl(null)
  }

  useEffect(() => {
    // if the list of messages has changed, we need to re-run the filter, which
    // updates the filteredMessages object that gets rendered
    applyFilter(searchString || '')
  }, [messages])

  useEffect(() => {
    // get list renderred table headers in all channel
    const headers = document.getElementsByClassName('rdt_TableHeadRow')
    // process one by one
    for (const header of Array.from(headers)) {
      if (!(header as any).loaded) {
        columns.forEach((col, idx) => {
          if (col.colFilter) {
            const filterNode = header?.childNodes[idx]
            const colFilterId = `${channelColb.name}_${col.name}_filter`
            const filterElm = document.getElementById(colFilterId)

            if (!headers || filterElm) return

            const newFilterElm = document.createElement('div')
            newFilterElm.innerHTML = `<i id='${colFilterId}' class='fa fa-filter' aria-hidden='true' style='cursor: pointer''></i>`
            newFilterElm.onclick = (e: any): void => colFilter(col, e)
            filterNode.appendChild(newFilterElm)
          }
        });
        (header as any).loaded = true
        break
      }
    }
  }, [rows.length])

  const colFilter = (col: Column, event: any): void => {
    const colFilters = rows.map(row => row[(col.name || '').toString().toLowerCase()])
    setFilters(colFilters)
    openFilter(event)
  }

  if (!inFilterMode && filteredRows.length !== rows.length) {
    setFilterdRows(rows)
  }

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
          (value.toLowerCase().includes(searchStr.toLowerCase()))))
    setFilterdRows(filteredRows)
  }

  const filterTable = (e: any): void => {
    clearTimeout(debounce)
    const searchStr = e.target.value
    setSearchString(searchStr)
    setFilterMode(!!searchStr)
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
      <ColFilter open={open} onClose={closeFilter} anchorEl={anchorEl} filters={filters} />
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
