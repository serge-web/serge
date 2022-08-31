/* eslint-disable no-mixed-operators */
import { faAddressBook, faEnvelopeOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactTable, Row } from '@serge/components'
import { setMessageState } from '@serge/helpers'
import { ActivityLogsInterface, ForceData, PlayerLogEntry, PlayerMessage, PlayerMessageLog, Role } from '@serge/custom-types'
import { uniq } from 'lodash'
import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-modal'
import { getPlayerActivityLogs } from '../../api/wargames_api'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { genPlayerLogDataTable } from './helpers/genData'
import styles from './styles.module.scss'
import { PlayerLogModal, PlayerLogProps } from './types/props'
import deepCopy from '../../Helpers/copyStateHelper'
// interval between UI refreshes
const REFRESH_PLAYER_LOG_INTERVAL = 5000

// the player must have been active within this threshold to be treated as `ACTIVE`
const AGE_FOR_ACTIVE_MILLIS = 60000

const PlayerLogComponent: React.FC<PlayerLogProps> = ({ isOpen, onClose, handlePlayerlogsMarkAllAsRead, handlePlayerlogsMarkAllAsUnread, playerLogsActivity }): React.ReactElement => {
  const { allForces, playerMessageLog, currentWargame, selectedRole, selectedForce } = usePlayerUiState()
  const [loop, setLoop] = useState<any>()
  const [playerLogData, setPlayerLogData] = useState<PlayerLogModal[]>([])
  const [filteredRows, setFilterRows] = useState<Row[]>([])

  const { columns, rows, customStyles } = useMemo(() => genPlayerLogDataTable(playerLogData), [playerLogData])

  useEffect(() => {
    setFilterRows(rows)
  }, [rows.length, rows])
  
  useEffect(() => {
    clearInterval(loop)
    if (isOpen) {
      collatePlayerLogData(playerMessageLog)
      setLoop(setInterval(() => {
        collatePlayerLogData(playerMessageLog)
      }, REFRESH_PLAYER_LOG_INTERVAL))
    }
  }, [isOpen, playerMessageLog])

  const selectedForceId = selectedForce ? selectedForce.uniqid : ''
  
  const collatePlayerLogData = (messageLog: PlayerMessageLog): void => {
    getPlayerActivityLogs(currentWargame).then((activityLog) => {  
      const activityLogCopy: ActivityLogsInterface = deepCopy(activityLog)
      const logItems = activityLogCopy.items
      const logData: PlayerLogModal[] = []
      const activityLogsForThisWargame = activityLogCopy && logItems.length && logItems.filter((value: PlayerLogEntry) => value.wargame === currentWargame) || []

      const activityRoles = activityLogsForThisWargame.map((value: PlayerLogEntry) => value.role)
      const messageRoles = Object.values(messageLog).map((value: PlayerMessage) => value.roleId)
      const knownRoles = activityRoles.concat(messageRoles)
      const uniqueRoles = uniq(knownRoles)

      allForces.forEach((force: ForceData) => {
        force.roles.forEach((role: Role) => {
          // don't show log for owner
          if (selectedRole === role.roleId) {
            return
          }
          if (uniqueRoles.includes(role.roleId)) {
            const activity = activityLogsForThisWargame.find((value: PlayerLogEntry) => value.role === role.roleId)
            const lastMessage = messageLog[role.roleId]
            const activatyhasBennRead = (lastMessage && lastMessage.hasBeenRead) || ''
            const readIcon = <FontAwesomeIcon color={activatyhasBennRead ? '#838585' : '#69c'} icon={activatyhasBennRead ? faEnvelopeOpen : faEnvelope} />
            const message = lastMessage && <>{readIcon} {lastMessage.lastMessageTitle}</> || 'N/A'
            const messageTime = lastMessage && lastMessage.lastMessageTime
            const activityTime = (activity && activity.activityTime) || ''
            setPlayerLogData([])
            logData.push({
              forceName: force.name,
              forceColor: force.color,
              roleName: role.name,
              message,
              lastMessage: messageTime,
              lastActive: activityTime,
              isReaded: activatyhasBennRead,
              lastActivity: activity ? activity.activityType.aType : 'N/A',
              active: activityTime && (moment().diff(moment(parseInt(activityTime)))) < AGE_FOR_ACTIVE_MILLIS || false
            })
          }
        })
      })
      setPlayerLogData(logData)
    })
  }
 
  const handleMessagesState = () => {
    Object.values(playerMessageLog).map(async (value: PlayerMessage) => { 
      setMessageState(currentWargame, selectedForceId, selectedRole, value._id || '')
    })
    handlePlayerlogsMarkAllAsRead && handlePlayerlogsMarkAllAsRead()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
    >
      <div className={styles.modalHeader}>
        <div className={styles.closeIcon} onClick={onClose}>x</div>
        <div className={styles.playerLogIcon}>
          <FontAwesomeIcon icon={faAddressBook} />
          <div className={styles.title}>
            <span className={styles.titleMain}>Player Log</span>
            <span className={styles.titleHint}>Use this log to track player activity and status</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <ReactTable
          handleMarkAllAsRead={handleMessagesState}
          handleMarkAllAsUnread={handlePlayerlogsMarkAllAsUnread}
          tableActivity={playerLogsActivity}
          columns={columns}
          rows={filteredRows}
          customStyles={customStyles}
          fixedHeader
          defaultSortAsc={true}
          persistTableHead={true}
          expandableRowsHideExpander={true}
          highlightOnHover={true}
          fixedHeaderScrollHeight='55vh'
        />
      </div>
    </Modal>
  )
}

export default React.memo(PlayerLogComponent)
