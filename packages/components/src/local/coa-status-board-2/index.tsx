import React, { useEffect, useState } from 'react'
import { CollaborativePermission } from '@serge/config'
import { Button, Checkbox, FormControl, FormControlLabel, Input } from '@material-ui/core'
import { genData2 } from './helpers/gen-data'
import { setMessageState } from '@serge/helpers'
import DataTable from 'react-data-table-component'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Types */
import Props, { Row } from './types/props'

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
export const CoaStatusBoard2: React.FC<Props> = ({
  templates, messages, channelColb, isObserver, isUmpire, onChange, role, forces,
  gameDate, onMessageRead, onMarkAllAsRead, currentWargame
}: Props) => {
  const [showArchived, setShowArchived] = useState<boolean>(false)
  const [filteredRows, setFilterdRows] = useState<Row[]>([])
  const [inFilterMode, setFilterMode] = useState<boolean>(false)
  const [searchString, setSearchString] = useState<string | undefined>(undefined)

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

  const { rows, columns, customStyles } = genData2(
    filteredDoc,
    forces,
    role,
    currentWargame,
    templates,
    isObserver,
    isUmpire,
    channelColb,
    permission,
    gameDate,
    onChange
  )

  useEffect(() => {
    applyFilter(searchString || '')
  }, [messages])

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

  const ExpandedComponent = ({ data }: Row): React.ReactElement => {
    if (!data.isReaded) {
      const message = messages.filter(msg => msg._id === data.id)
      message.length && onMessageRead && onMessageRead(message[0])
      data.isReaded = true
    }
    return data.collapsible()
  }

  const applyFilter = (searchStr: string) => {
    const filteredRows = rows
    .filter((row: Row) => Object
      .values(row)
      .some((value: any) =>
        value &&
        typeof value === 'string' &&
        (value.toLowerCase().startsWith(searchStr) || value.toLowerCase().includes(searchStr)))
    )
    setFilterdRows(filteredRows)
  }

  let doFilter: any
  const filterTable = (e: any): void => {
    clearTimeout(doFilter)
    const searchStr = e.target.value
    setSearchString(searchStr)
    setFilterMode(searchStr !== '')
    doFilter = setTimeout(() => {
      applyFilter(searchStr)
    }, 500)
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
      />
    </>
  )
}

export default CoaStatusBoard2
