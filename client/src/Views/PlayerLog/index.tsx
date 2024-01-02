/* eslint-disable no-mixed-operators */
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import ReactTable from '../../Components/local/react-table'
import { Row } from '../../Components/local/react-table/types/props'
import MoreInfo from '../../Components/local/molecules/more-info'
import { setMessageState } from 'src/Helpers'
import { PlayerLogEntry, PlayerMessage, PlayerMessageLog, RootState } from 'src/custom-types'
import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-modal'
import { getPlayerActivityLogs } from '../../api/wargames_api'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { genPlayerLogDataTable } from './helpers/genData'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { PlayerLogModal, PlayerLogProps } from './types/props'
import deepCopy from '../../Helpers/copyStateHelper'
import buildLogData, { getUniqueRoles } from './helpers/playerLogUtils'
// interval between UI refreshes
const REFRESH_PLAYER_LOG_INTERVAL = 5000
const PLAYER_LOG_QUERY = 'logs-latest'

const PlayerLogComponent: React.FC<PlayerLogProps> = ({ isOpen, onClose, handlePlayerlogsMarkAllAsRead, handlePlayerlogsMarkAllAsUnread, playerLogsActivity }): React.ReactElement => {
  const { allForces, playerMessageLog, currentWargame, selectedRole, selectedForce } = usePlayerUiState()
  const { currentDbname } = useSelector((state: RootState) => state.playerLog)
  const [loop, setLoop] = useState<any>()
  const [playerLogData, setPlayerLogData] = useState<PlayerLogModal[]>([])
  const [filteredRows, setFilterRows] = useState<Row[]>([])

  // whether to show log for all roles, or just the ones with activity
  const [onlyActivePlayers, setOnlyActivePlayers] = useState<boolean>(false)

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
  }, [isOpen, playerMessageLog, onlyActivePlayers])

  const selectedForceId = selectedForce ? selectedForce.uniqid : ''

  const collatePlayerLogData = (messageLog: PlayerMessageLog): void => {
    getPlayerActivityLogs(currentWargame, currentDbname, PLAYER_LOG_QUERY)
      .then((activityLog) => {
        setPlayerLogData(processLogData(activityLog, messageLog))
      })
  }
  
  const processLogData = (activityLog: PlayerLogEntry[], messageLog: PlayerMessageLog): PlayerLogModal[] => {
    const activityLogsForThisWargame = deepCopy(activityLog)
    const uniqueRoles = getUniqueRoles(activityLogsForThisWargame, messageLog)
    const logData = buildLogData(allForces, onlyActivePlayers, activityLogsForThisWargame, messageLog, uniqueRoles)
    return logData
  }
  
  // NOTE: deepScan error
  // The handleMessagesState function asynchronously maps over the values of the playerMessageLog object.
  // However, the map function returns an array of promises, and there's no awaiting of these promises.
  // This might lead to unexpected behavior, as the subsequent code (handlePlayerlogsMarkAllAsRead) could execute
  // before all the setMessageState calls have completed. Consider using Promise.all() to await all the asynchronous
  // operations inside the map function, ensuring all setMessageState calls finish before proceeding.
  const handleMessagesState = (): void => {
    Object.values(playerMessageLog).map(async (value: PlayerMessage) => { 
      setMessageState(currentWargame, selectedForceId, selectedRole, value._id || '')
    })
    handlePlayerlogsMarkAllAsRead && handlePlayerlogsMarkAllAsRead()
  }

  const updateOnlyActivePlayers = (): void => {
    setOnlyActivePlayers(!onlyActivePlayers)
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
        <MoreInfo description='Only show activity for players for whom there is some activity logging'>
          <FormControlLabel control={
            <Checkbox
              checked={onlyActivePlayers}
              onChange={updateOnlyActivePlayers}
              value='1'
              color='primary'
            />
          }
          label="Only active players"
          /></MoreInfo>
      </div>
      <div className={styles.content}>
        <ReactTable
        /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
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
