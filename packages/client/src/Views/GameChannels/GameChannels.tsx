import { faAddressBook, faBookOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForceObjective, TurnProgression } from '@serge/components'
import classNames from 'classnames'
import { TabNode } from 'flexlayout-react'
import React, { useCallback, useState } from 'react'
import {
  nextGameTurn,
  openModal,
  openTour,
  showHideObjectives,
  markAllAsRead,
  markAllAsUnread
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { saveNewActivityTimeMessage } from '../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { expiredStorage } from '../../consts'
import { usePlayerUiDispatch, usePlayerUiState } from '../../Store/PlayerUi'
import AdminAndInsightsTabsContainer from '../AdminAndInsightsTabsContainer/AdminAndInsightsTabsContainer'
import ChannelTabsContainer from '../ChannelTabsContainer/ChannelTabsContainer'
import PlayerLog from '../PlayerLog'
import { useDispatch } from 'react-redux'

type GameChannelsProps = {
  onTabChange: (node: TabNode) => void
}

const GameChannels: React.FC<GameChannelsProps> = ({ onTabChange }): React.ReactElement => {
  const {
    currentWargame,
    gameDate,
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
    isUmpire
  } = usePlayerUiState()
  const [isPlayerlogOpen, togglePlayerLogModal] = useState<boolean>(false)
  const [selectedNode, setSelectedNode] = useState<string>('')

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
        phase={phase}
        timeWarning={timeWarning}
        isGameControl={isGameControl}
        turnEndTime={`${turnEndTime}`}
        wargameInitiated={wargameInitiated}
        onNextTurn={nextGameTurn(currentWargame)}
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
