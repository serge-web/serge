import React from 'react'
import ChannelTabsContainer from '../ChannelTabsContainer/ChannelTabsContainer'
import classNames from 'classnames'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TurnProgression, ForceObjective } from '@serge/components'
import AdminAndInsightsTabsContainer from '../AdminAndInsightsTabsContainer/AdminAndInsightsTabsContainer'
import { ForceData } from '@serge/custom-types'
import {
  nextGameTurn,
  openModal,
  openTour,
  showHideObjectives
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

const GameChannels: React.FC = (): React.ReactElement => {
  const {
    allForces,
    currentWargame,
    gameDate,
    currentTurn,
    wargameTitle,
    adjudicationStartTime,
    isGameControl,
    phase,
    selectedRole,
    showObjective,
    // @ts-ignore
    timeWarning,
    turnEndTime,
    selectedForce
  } = usePlayerUiState()

  if (selectedForce == undefined) {
    return (
      <div className="flex-content--center">
        <h1>Chosen force not in game</h1>
        <h4>Please reload and select a force</h4>
      </div>
    )
  }

  const dispatch = usePlayerUiDispatch()

  return <div className="flex-content flex-content--row-wrap">
    <div className="message-feed in-game-feed" data-tour="fourth-step">
      <ChannelTabsContainer rootRef={el => {
        // @ts-ignore
        if (el) window.channelTabsContainer[selectedForce.uniqid] = el
      }}/>
    </div>
    <div className={classNames({"message-feed": true, "out-of-game-feed": true, "umpire-feed": isGameControl})} data-tour="fifth-step">
      <div className="flex-content wargame-title">
        <h3>{wargameTitle}</h3>
        {
          <span onClick={(): void => dispatch(openModal("lessons"))} className="wargame-title-icon" data-tour="third-step">
          <strong className="sr-only">Show lesson</strong>
        </span>
        }
        <FontAwesomeIcon icon={faShoePrints} size="2x" onClick={():void => dispatch(openTour(true))} data-tour="third-step" />
      </div>
      <TurnProgression
        adjudicationStartTime={adjudicationStartTime}
        isGameControl={isGameControl}
        currentTurn={currentTurn}
        gameDate={gameDate}
        onNextTurn={() => { nextGameTurn(currentWargame)() }}
        phase={phase}
        timeWarning={timeWarning}
        turnEndTime={`${turnEndTime}`}
      />
      <AdminAndInsightsTabsContainer />
      {showObjective && <ForceObjective
        force={selectedForce}
        selectedRole={selectedRole}
        onIconClick={(): void => dispatch(showHideObjectives())}
      />}
    </div>
  </div>
}

export default GameChannels
