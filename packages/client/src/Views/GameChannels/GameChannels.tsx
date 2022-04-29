import React, { useState } from 'react'
import ChannelTabsContainer from '../ChannelTabsContainer/ChannelTabsContainer'
import classNames from 'classnames'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TurnProgression, ForceObjective } from '@serge/components'
import AdminAndInsightsTabsContainer from '../AdminAndInsightsTabsContainer/AdminAndInsightsTabsContainer'
import {
  nextGameTurn,
  openModal,
  openTour,
  showHideObjectives
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { expiredStorage } from '../../consts'
import PlayerLog from '../PlayerLog'
import { TabNode } from 'flexlayout-react'

type GameChannelsProps = {
  onTabChange: (node: TabNode) => void
}

const GameChannels: React.FC<GameChannelsProps> = ({ onTabChange, }): React.ReactElement => {
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

  if (selectedForce == undefined) {
    return (
      <div className="flex-content--center">
        <h1>Chosen force not in game</h1>
        <h4>Please reload and select a force</h4>
      </div>
    )
  }

  const dispatch = usePlayerUiDispatch()

  const openTourFn = () => {
    const storageKey = `${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-tourDone`
    expiredStorage.removeItem(storageKey)
    dispatch(openTour(true))
  }

  const closePlayerLogModal = (): void => {
    togglePlayerLogModal(false)
  }

  return <div className="flex-content flex-content--row-wrap">
    <PlayerLog isOpen={isPlayerlogOpen} onClose={closePlayerLogModal} />
    <div className="message-feed in-game-feed" data-tour="fourth-step">
      <ChannelTabsContainer rootRef={el => {
        // @ts-ignore
        if (el) window.channelTabsContainer[selectedForce.uniqid] = el
      }} onTabChange={onTabChange} />
    </div>
    <div className={classNames({ "message-feed": true, "out-of-game-feed": true, "umpire-feed": isGameControl })} data-tour="fifth-step">
      <div className="flex-content wargame-title">
        <h3>{wargameTitle}</h3>
        <span title="Sumbit lesson learned/feedback" onClick={(): void => dispatch(openModal("lessons"))} className="wargame-title-icon" data-tour="third-step">
          <strong className="sr-only">Show lesson</strong>
        </span>
        <span className="tutorial" title="Re-play tutorial">
          <FontAwesomeIcon icon={faBookOpen} onClick={openTourFn} />
        </span>
        {
          isUmpire && <span title="Show player log" className="playerlog">
            <FontAwesomeIcon icon={faAddressBook} onClick={(): void => togglePlayerLogModal(true)} />
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
