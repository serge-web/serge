import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactTable, Row } from '@serge/components'
import { ActivityLogsInterface, ForceData, PlayerMessage, PlayerMessageLog, Role } from '@serge/custom-types'
import { uniq } from 'lodash'
import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-modal'
import { getPlayerActivityLogs } from '../../api/wargames_api'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { genPlayerLogDataTable } from './helpers/genData'
import styles from './styles.module.scss'
import { PlayerLogModal, PlayerLogProps } from './types/props'

// interval between UI refreshes
const REFRESH_PLAYER_LOG_INTERVAL = 5000

// the player must have been active within this threshold to be treated as `ACTIVE`
const AGE_FOR_ACTIVE_MILLIS = 60000

const PlayerLogComponent: React.FC<PlayerLogProps> = ({ isOpen, onClose }): React.ReactElement => {
  const { allForces, playerMessageLog, currentWargame } = usePlayerUiState()
  const [loop, setLoop] = useState<any>();
  const [playerLogData, setPlayerLogData] = useState<PlayerLogModal[]>([])
  const [filteredRows, setFilterRows] = useState<Row[]>([])

  const { columns, rows, customStyles } = useMemo(() => genPlayerLogDataTable(playerLogData), [playerLogData])

  useEffect(() => {
    setFilterRows(rows)
  }, [rows.length])

  useEffect(() => {
    clearInterval(loop)
    if (isOpen) {
      collatePlayerLogData(playerMessageLog)
      setLoop(setInterval(() => {
        collatePlayerLogData(playerMessageLog)
      }, REFRESH_PLAYER_LOG_INTERVAL))
    }
  }, [isOpen, playerMessageLog])

  const collatePlayerLogData = (messageLog: PlayerMessageLog): void => {
    getPlayerActivityLogs().then((activityLog: ActivityLogsInterface[]) => {
      const logData: PlayerLogModal[] = []
      const activityLogsForThisWargame = activityLog && activityLog.length && activityLog.filter((value: ActivityLogsInterface) => value.wargame === currentWargame) || []
      const activityRoles = activityLogsForThisWargame.map((value: ActivityLogsInterface) => value.role)
      const messageRoles = Object.values(messageLog).map((value: PlayerMessage) => value.roleId)
      const knownRoles = activityRoles.concat(messageRoles)
      const uniqueRoles = uniq(knownRoles)

      allForces.forEach((force: ForceData) => {
        force.roles.forEach((role: Role) => {
          if (uniqueRoles.includes(role.roleId)) {
            const activity = activityLogsForThisWargame.find((value: ActivityLogsInterface) => value.role === role.roleId)
            const lastMessage = messageLog[role.roleId]
            const message = lastMessage && lastMessage.lastMessageTitle || 'N/A'
            const messageTime = lastMessage && lastMessage.lastMessageTime
            const activityTime = activity && activity.activityTime && parseInt(activity.activityTime)
            setPlayerLogData([])
            logData.push({
              forceName: force.name,
              forceColor: force.color,
              roleName: role.name,
              message,
              lastMessage: messageTime ? moment(messageTime).fromNow() : 'N/A',
              lastActivity: activity ? activity.activityType : 'N/A',
              lastActive: activityTime ? moment(activityTime).fromNow() : 'N/A',
              active: activityTime && (moment().diff(moment(activityTime))) < AGE_FOR_ACTIVE_MILLIS || false
            })
          }
        })
      })
      setPlayerLogData(logData)
    })
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