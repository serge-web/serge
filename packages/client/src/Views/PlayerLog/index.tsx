import { faAddressBook, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from '@material-ui/core'
import { ReactTable, Row } from '@serge/components'
import { ForceData, PlayerMessage, PlayerMessageLog, Role } from '@serge/custom-types'
import { isEqual, uniq } from 'lodash'
import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-modal'
import { PlayerActivity } from '../../ActionsAndReducers/PlayerLog/PlayerLog_types'
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
    getPlayerActivityLogs().then((activityLog: PlayerActivity[]) => {
      const logData: PlayerLogModal[] = []
      const activityLogsForThisWargame = activityLog && activityLog.length && activityLog.filter((value: PlayerActivity) => value.wargame === currentWargame) || []
      const activityRoles = activityLogsForThisWargame.map((value: PlayerActivity) => value.role)
      const messageRoles = Object.values(messageLog).map((value: PlayerMessage) => value.roleId)
      const knownRoles = activityRoles.concat(messageRoles)
      const uniqueRoles = uniq(knownRoles)

      allForces.forEach((force: ForceData) => {
        force.roles.forEach((role: Role) => {
          if (uniqueRoles.includes(role.roleId)) {
            const activity = activityLogsForThisWargame.find((value: PlayerActivity) => value.role === role.roleId)
            const lastMessage = messageLog[role.roleId]
            const message = lastMessage && lastMessage.lastMessageTitle || 'N/A'
            const messageTime = lastMessage && lastMessage.lastMessageTime
            logData.push({
              forceName: force.name,
              forceColor: force.color,
              roleName: role.name,
              message,
              lastMessage: messageTime ? moment(messageTime).fromNow() : 'N/A',
              lastActive: activity ? moment(activity.updatedAt).fromNow() : 'N/A',
              active: activity && (moment().diff(moment(activity.updatedAt))) < AGE_FOR_ACTIVE_MILLIS || false
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
          filterTheme='dark'
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