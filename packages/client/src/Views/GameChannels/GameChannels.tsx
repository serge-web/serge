import { faAddressBook, faBookOpen, faFileExcel, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForceObjective, TurnProgression } from '@serge/components'
import { CHANGE_TAB_INTERACTION } from '@serge/config'
import { ChangeTabInteraction } from '@serge/custom-types'
import classNames from 'classnames'
import excellentExport, { SheetOptions } from 'excellentexport'
import { TabNode } from 'flexlayout-react'
import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewActivityTimeMessage } from '../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import {
  markAllAsRead,
  markAllAsUnread, nextGameTurn,
  openModal,
  openTour,
  showHideObjectives
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { expiredStorage } from '../../consts'
import { usePlayerUiDispatch, usePlayerUiState } from '../../Store/PlayerUi'
import AdminAndInsightsTabsContainer from '../AdminAndInsightsTabsContainer/AdminAndInsightsTabsContainer'
import ChannelTabsContainer from '../ChannelTabsContainer/ChannelTabsContainer'
import PlayerLog from '../PlayerLog'
import handleExport from './handleExport'

type GameChannelsProps = {
  onTabChange: (node: TabNode) => void
}

const GameChannels: React.FC<GameChannelsProps> = ({ onTabChange }): React.ReactElement => {
  const {
    currentWargame,
    gameDate,
    gameTurnTime,
    currentTurn,
    turnPresentation,
    wargameTitle,
    adjudicationStartTime,
    isGameControl,
    phase,
    selectedRole,
    selectedRoleName,
    showObjective,
    timeWarning,
    turnEndTime,
    selectedForce,
    wargameInitiated,
    isUmpire,
    allPlatformTypes, 
    allForces,
    channels
  } = usePlayerUiState()
  const [isPlayerlogOpen, togglePlayerLogModal] = useState<boolean>(false)
  const [selectedNode, setSelectedNode] = useState<string>('')

  const hreflink = window.location.href

  if (selectedForce === undefined) {
    return (
      <div className='flex-content--center'>
        <h1>Chosen force not in game</h1>
        <h4>Please reload and select a force</h4>
      </div>
    )
  }
  const dispatch = useDispatch()
  const PlayerUiDispatch = usePlayerUiDispatch()

  const handleChangeTab = (node: TabNode): void => {
    setSelectedNode(node.getComponent() || '')
    onTabChange(node)
  }

  useEffect(() => {
    const changeTab: ChangeTabInteraction = {
      aType: CHANGE_TAB_INTERACTION,
      tab: selectedNode
    }
    saveNewActivityTimeMessage(selectedRole, changeTab, currentWargame)(dispatch)
  }, [selectedNode])

  const openTourFn = () => {
    const storageKey = `${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-${selectedNode === 'mapping' ? 'mapping-' : ''}tourDone`
    expiredStorage.removeItem(storageKey)
    PlayerUiDispatch(openTour(true))
  }

  const closePlayerlogModal = useCallback(() => {
    togglePlayerLogModal(false)
  }, [])

  const openPlayerlogModal = useCallback(() => {
    dispatch(saveNewActivityTimeMessage(selectedRole, { aType: 'View player logs' }, currentWargame))
    togglePlayerLogModal(true)
  }, [])

  const handlePlayerlogsMarkAllAsRead = useCallback(() => {
    PlayerUiDispatch(markAllAsRead(''))
  }, [])

  const handlePlayerlogsMarkAllAsUnread = useCallback(() => {
    PlayerUiDispatch(markAllAsUnread(''))
  }, [])

  const convertToXlsx = (res: Record<string, Record<string, any>>): SheetOptions[] => {
    const data = Object.keys(res).map((key): SheetOptions => {
      const tableData = res[key]
      if (!Array.isArray(tableData) || !tableData.length) {
        throw new Error('Table data should be a non-empty array of column/value rows')
      }
      
      const colNames = Object.keys(tableData[0])
      const rows = tableData.map(rowData => {
        const row = []
        for (const key in rowData) {
          if (Array.isArray(rowData[key]) && rowData[key].length) {
            row.push('"' + rowData[key].join(',') + '"')
          } else {
            row.push(rowData[key])
          }
        }
        return row
      })
      rows.unshift(colNames)
      return ({
        name: key,
        from: {
          // @ts-ignore
          arrayHasHeader: true,
          array: rows
        }
      })
    })

    return data
  }

  const generateFile = () => {
    const res = handleExport(gameDate, gameTurnTime, allPlatformTypes, allForces, currentTurn, channels)
    // todo - convert the data to expected arrays
    const data: SheetOptions[] = convertToXlsx(res)
    return excellentExport.convert({
      anchor: 'export_button_xlsx',
      filename: 'SERGE-' + moment(gameDate).format('MMM DDHHmm[Z]'),
      format: 'xlsx'
    }, data)
  }
 
  return <div className='flex-content flex-content--row-wrap'>
    <PlayerLog isOpen={isPlayerlogOpen} onClose={closePlayerlogModal} handlePlayerlogsMarkAllAsRead={handlePlayerlogsMarkAllAsRead} handlePlayerlogsMarkAllAsUnread={handlePlayerlogsMarkAllAsUnread} playerLogsActivity={openPlayerlogModal} />
    <div className='message-feed in-game-feed' data-tour='fourth-step'>
      <ChannelTabsContainer rootRef={el => {
        // @ts-ignore
        if (el) window.channelTabsContainer[selectedForce.uniqid] = el
      }} onTabChange={handleChangeTab} />
    </div>
    <div className={classNames({ 'message-feed': true, 'out-of-game-feed': true, 'umpire-feed': isGameControl })} data-tour='fifth-step'>

      <div className='flex-content wargame-title'>
        <h3>{wargameTitle}</h3>
        <FontAwesomeIcon icon={faSignOutAlt} style={{ cursor: 'pointer' }} onClick={() => {
          location.replace(location.origin)
        }} />
      </div>

      <TurnProgression
        adjudicationStartTime={adjudicationStartTime}
        currentTurn={currentTurn}
        turnPresentation={turnPresentation}
        gameDate={gameDate}
        gameTurnLength={gameTurnTime}
        phase={phase}
        timeWarning={timeWarning}
        isGameControl={isGameControl}
        turnEndTime={`${turnEndTime}`}
        wargameInitiated={wargameInitiated}
        onNextTurn={nextGameTurn(currentWargame)}
        showTimeRemaining={false}
      />

      <div className='message-group-button'>
        <span title='Submit lesson learned/feedback' onClick={(): void => PlayerUiDispatch(openModal('lessons'))} className='wargame-title-icon' data-tour='third-step'>
          <strong className='sr-only'>Show lesson</strong>
        </span>
        <span className='tutorial' title='Re-play tutorial'>
          <FontAwesomeIcon icon={faBookOpen} onClick={openTourFn} />
        </span>
        { isUmpire && <span title='Show player log' className='playerlog'>
          <FontAwesomeIcon icon={faAddressBook} onClick={openPlayerlogModal} />
        </span> }
        { isUmpire && <a
          href={hreflink}
          className='playerlog'
          title='Export game data to Excel'
          onClick={e => generateFile()}
          id={'export_button_xlsx'}
        >
          <FontAwesomeIcon icon={faFileExcel}/></a> }
      </div>
      <AdminAndInsightsTabsContainer />
      {showObjective && <ForceObjective
        force={selectedForce}
        selectedRole={selectedRoleName}
        onIconClick={(): void => PlayerUiDispatch(showHideObjectives())}
      />}
    </div>
  </div>
}

export default GameChannels
