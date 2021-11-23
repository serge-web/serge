import React, { useState } from 'react'
import { CollaborativeMessageStates } from '@serge/config'
import { Button, Checkbox, FormControl, FormControlLabel, Input } from '@material-ui/core'
import { genData2 } from './helpers/gen-data'
import getKey from './helpers/get-key'
import { setMessageState } from '@serge/helpers'
import DataTable from 'react-data-table-component'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Types */
import Props, { Row } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import filteredMessages from './helpers/filteredMessages'

/** combine force id and color
 */
export interface ForceColor {
  uniqid: string
  color: string
}

/* Render component */
export const CoaStatusBoard2: React.FC<Props> = ({ templates, messages, channel, isUmpire, onChange, role, forces, gameDate, onMessageRead, currentWargame }: Props) => {
  const [showArchived, setShowArchived] = useState<boolean>(false)
  const [filteredRows, setFilterdRows] = useState<Row[]>([])
  const [inFilterMode, setFilterMode] = useState<boolean>(false)

  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)
  const canUnClaimMessages = !!myParticipations.find(p => p.canUnClaimMessages)

  // whether this user should see metadata about the message being edited
  const isCollaborating = canCollaborate || canReleaseMessages || isUmpire

  // (optionally) include archived messages
  const filteredDoc = filteredMessages(messages, showArchived)

  const { rows, columns, customStyles } = genData2(
    filteredDoc,
    forces,
    role,
    currentWargame,
    templates,
    isUmpire,
    channel,
    canCollaborate,
    canReleaseMessages,
    canUnClaimMessages,
    gameDate,
    isCollaborating,
    isUmpire,
    onChange
  )

  if (!inFilterMode && filteredRows.length !== rows.length) {
    setFilterdRows(rows)
  }

  const handleMarkAllAsRead = (): void => {
    for (const message of filteredDoc) {
      // flag for if we tell original sender of RFI that it has been responded to
      const collab = message.details.collaboration
      const status = collab && collab.status
      const isFinalised = status === CollaborativeMessageStates.Closed ||
        status === CollaborativeMessageStates.Finalized ||
        status === CollaborativeMessageStates.Released
      const isCollabEditChannel = !!channel.collabOptions && channel.collabOptions.mode === 'edit'
      const key = getKey(message, canCollaborate, canReleaseMessages, canUnClaimMessages, isFinalised, isCollabEditChannel, isUmpire)
      setMessageState(currentWargame, role.forceName, role.roleName, key)
    }
    onMessageRead && onMessageRead(0)
  }

  const handleArchiveDoc = (): void => {
    setShowArchived(!showArchived)
  }

  const ExpandedComponent = ({ data }: Row): React.ReactElement => {
    // if (!data.isReaded) {
    //   // update unread msg count here
    //   onMessageRead && onMessageRead(0)
    //   data.isReaded = true
    // }
    return data.collapsible()
  }

  let doFilter: any
  const filterTable = (e: any): void => {
    clearTimeout(doFilter)
    const searchStr = e.target.value
    setFilterMode(searchStr !== '')
    doFilter = setTimeout(() => {
      const filteredRows = rows
        .filter((row: Row) => Object
          .values(row)
          .some((value: any) =>
            value &&
            typeof value === 'string' &&
            (value.toLowerCase().startsWith(searchStr) || value.toLowerCase().includes(searchStr)))
        )
      setFilterdRows(filteredRows)
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
