import React, { useState } from 'react'
import { CollaborativeMessageStates } from '@serge/config'
import { Button, Checkbox, FormControl, FormControlLabel, Input } from '@material-ui/core'
import { genData } from './helpers/gen-data'
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
export const CoaStatusBoard: React.FC<Props> = ({ templates, messages, channel, isUmpire, onChange, role, forces, gameDate, onMessageRead, currentWargame }: Props) => {
  const [unreadCount, setUnreadCount] = useState<{ count: number }>({ count: -1 })
  const [showArchived, setShowArchived] = useState<boolean>(false)

  const updateUreanMessagesCount = (nextUnreadCount: number): void => setUnreadCount(Object.assign({}, unreadCount, { count: nextUnreadCount }))

  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)
  const canUnClaimMessages = !!myParticipations.find(p => p.canUnClaimMessages)

  // whether this user should see metadata about the message being edited
  const isCollaborating = canCollaborate || canReleaseMessages || isUmpire

  // (optionally) include archived messages
  const filteredDoc = filteredMessages(messages, showArchived)

  const handleUpdateUnreadCount = (nexCount?: number): boolean => {
    const count = typeof nexCount === 'undefined' ? unreadCount.count - 1 : nexCount
    const shouldBeUpdated = unreadCount.count !== count

    if (shouldBeUpdated) {
      onMessageRead && onMessageRead(count)
      updateUreanMessagesCount(count)
    }
    return shouldBeUpdated
  }

  const { rows, columns, unreadMessagesCount, customStyles } = genData(
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
    onChange,
    handleUpdateUnreadCount
  )

  const [filteredRows, setFilterdRows] = useState<Row[]>(rows)

  if (handleUpdateUnreadCount(unreadMessagesCount)) {
    return <></>
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
    handleUpdateUnreadCount(0)
  }

  const handleArchiveDoc = (): void => {
    setShowArchived(!showArchived)
  }

  const ExpandedComponent = ({ data }: Row): React.ReactElement => {
    return data.collapsible()
  }

  let doFilter: any
  const filterTable = (e: any): void => {
    clearTimeout(doFilter)
    const searchStr = e.target.value
    doFilter = setTimeout(() => {
      const filteredRows = rows
        .filter((row: Row) => Object
          .values(row)
          .some((value: any) =>
            value &&
            typeof value === 'string' &&
            value.toLowerCase().startsWith(searchStr))
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
        pagination
        fixedHeader
        expandableRows
        customStyles={customStyles}
        expandableRowsComponent={ExpandedComponent}
      />
    </>
  )
}

export default CoaStatusBoard
