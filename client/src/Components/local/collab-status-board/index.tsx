import { CollaborativePermission } from 'src/config'
import { ParticipantCollab } from 'src/custom-types'
import { setMessageState } from 'src/Helpers'
import React, { useCallback, useMemo, useState } from 'react'
import ReactTable from '../react-table'
import filteredMessages from './helpers/filteredMessages'
import { genData } from './helpers/gen-data'
/* Import Types */
import { CollabStatusBoardProps } from './types/props'

/** combine force id and color
 */
export interface ForceColor {
  uniqid: string
  color: string
}

/* Render component */
export const CollabStatusBoard: React.FC<CollabStatusBoardProps> = ({
  templates, messages, channelColb, isObserver, isUmpire, onChange, role, forces,
  gameDate, phase, onMessageRead, onMarkAllAsRead, onMarkAllAsUnRead, currentWargame, collabActivity
}) => {
  const [showArchived, setShowArchived] = useState<boolean>(false)

  const participationsForMyForce = channelColb.participants.filter((p: ParticipantCollab) => p.forceUniqid === role.forceId)
  // participations relate to me if they contain no roles, or if they contain my role
  const myParticipations = participationsForMyForce.filter((p: ParticipantCollab) => (p.roles.length === 0 || p.roles.includes(role.roleId)))

  // if we're not an umpire, we'll need some participations
  if (!myParticipations.length && !isObserver) {
    // ok, should not be here
    throw new Error('Should not be in this channel')
  }

  // check if this is a valid phase
  const validPhase = myParticipations.length && myParticipations.some((part: ParticipantCollab) => {
    return !part.phases || part.phases?.length === 0 || part.phases.includes(phase)
  }) 
  
  // find my highest permission (or take no permission)
  const permission: CollaborativePermission = (myParticipations.length && validPhase) ? myParticipations.reduce((a, b) => a.permission > b.permission ? a : b).permission : CollaborativePermission.CannotCollaborate

  // on message changed, re-render table data
  const { rows, columns, customStyles, filteredDoc } = useMemo(() => {
    const filteredDoc = filteredMessages(messages, showArchived)
    const data = genData(
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
    return { ...data, filteredDoc }
  }, [messages])

  const handleMarkAllAsRead = useCallback(() => {
    for (const message of filteredDoc) {
      // flag for if we tell original sender of RFI that it has been responded to
      const key = message._id
      setMessageState(currentWargame, role.forceName, role.roleName, key)
    }
    onMarkAllAsRead && onMarkAllAsRead()
  }, [filteredDoc])
  
  const handleArchiveDoc = useCallback(() => {
    setShowArchived(!showArchived)
  }, [showArchived])
  // (name, lastName) => console.log('name', name, 'lastName', lastName)
  return (
    <ReactTable
      columns={columns}
      rows={rows}
      tableActivity={collabActivity}
      customStyles={customStyles}
      showArchived={showArchived}
      handleArchiveDoc={handleArchiveDoc}
      handleMarkAllAsRead={handleMarkAllAsRead}
      handleMarkAllAsUnread={onMarkAllAsUnRead}
      channelName={channelColb.name}
      fixedHeader
      expandableRows
      expandOnRowClicked={true}
      defaultSortAsc={true}
      persistTableHead={true}
      expandableRowsHideExpander={true}
      highlightOnHover={true}
    />
  )
}

export default React.memo(CollabStatusBoard)
