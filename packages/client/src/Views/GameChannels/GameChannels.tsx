import { faAddressBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForceObjective, TurnProgression } from '@serge/components'
import classNames from 'classnames'
import { TabNode } from 'flexlayout-react'
import React, { useCallback, useState } from 'react'
import {
  nextGameTurn,
  openModal,
  openTour,
  showHideObjectives
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { expiredStorage } from '../../consts'
import { usePlayerUiDispatch, usePlayerUiState } from '../../Store/PlayerUi'
import AdminAndInsightsTabsContainer from '../AdminAndInsightsTabsContainer/AdminAndInsightsTabsContainer'
import ChannelTabsContainer from '../ChannelTabsContainer/ChannelTabsContainer'
import PlayerLog from '../PlayerLog'

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

  const dispatch = usePlayerUiDispatch()

  const handleChangeTab = (node: TabNode): void => {
    /**
     * should call setState when the component loaded
     */
    setTimeout(() => {
      setSelectedNode(node.getComponent() || '')
      onTabChange(node)
    })
  } 

  const openTourFn = () => {
    const storageKey = `${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-${selectedNode === 'mapping' ? 'mapping-' : ''}tourDone`
    expiredStorage.removeItem(storageKey)
    dispatch(openTour(true))
  }

  const closePlayerlogModal = useCallback(() => {
    togglePlayerLogModal(false)
  }, [])

  const openPlayerlogModal = useCallback(() => {
    togglePlayerLogModal(true)
  }, [])

  return <div className='flex-content flex-content--row-wrap'>
    <PlayerLog isOpen={isPlayerlogOpen} onClose={closePlayerlogModal} />
    <div className='message-feed in-game-feed' data-tour='fourth-step'>
      <ChannelTabsContainer rootRef={el => {
        // @ts-ignore
        if (el) window.channelTabsContainer[selectedForce.uniqid] = el
      }} onTabChange={handleChangeTab} />
    </div>
    <div className={classNames({ 'message-feed': true, 'out-of-game-feed': true, 'umpire-feed': isGameControl })} data-tour='fifth-step'>
      <div className='flex-content wargame-title'>
        <h3>{wargameTitle}</h3>
        <span title='Sumbit lesson learned/feedback' onClick={(): void => dispatch(openModal('lessons'))} className='wargame-title-icon' data-tour='third-step'>
          <strong className='sr-only'>Show lesson</strong>
        </span>
        <span className='tutorial' title='Re-play tutorial'>
          <FontAwesomeIcon icon={faBookOpen} onClick={openTourFn} />
        </span>
        {
          isUmpire && <span title='Show player log' className='playerlog'>
            <FontAwesomeIcon icon={faAddressBook} onClick={openPlayerlogModal} />
          </span>
        }
      </div>
      <TurnProgression
        adjudicationStartTime={adjudicationStartTime}
        isGameControl={isGameControl}
        currentTurn={currentTurn}
        turnPresentation={turnPresentation}
        gameDate={gameDate}
        onNextTurn={() => { nextGameTurn(currentWargame)() }}
        phase={phase}
        timeWarning={timeWarning}
        turnEndTime={`${turnEndTime}`}
        wargameInitiated={wargameInitiated}
      />
      <AdminAndInsightsTabsContainer />
      {showObjective && <ForceObjective
        force={selectedForce}
        selectedRole={selectedRoleName}
        onIconClick={(): void => dispatch(showHideObjectives())}
      />}
    </div>
  </div>
}

export default GameChannels
