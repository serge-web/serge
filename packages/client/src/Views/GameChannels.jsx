import React, { Component } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { TurnProgression, ForceObjective } from '@serge/components';
import {
  nextGameTurn,
  openModal,
  openTour,
  showHideObjectives
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators';
import ChannelTabsContainer from './ChannelTabsContainer';
import AdminAndInsightsTabsContainer from './AdminAndInsightsTabsContainer';
import { PlayerStateContext } from '../Store/PlayerUi';
import '@serge/themes/App.scss';
import PlainChannelTabsContainer from './PlainChannelTabsContainer';

class GameChannels extends Component {
  static contextType = PlayerStateContext;

  showHideForceObjectives = () => {
    const [ , dispatch ] = this.context;
    dispatch(showHideObjectives());
  };

  showLessonsModal = () => {
    const [ , dispatch ] = this.context;
    dispatch(openModal("lessons"));
  };

  openTour = () => {
    const [ , dispatch ] = this.context;
    dispatch(openTour(true));
  };

  nextTurn = () => {
    const [ state ] = this.context;
    nextGameTurn(state.currentWargame)();
  };

  render() {
    const [ state ] = this.context;
    let force = state.allForces.find((force) => force.uniqid === state.selectedForce);

    if (!force) {
      return (
        <div className="flex-content--center">
          <h1>Chosen force not in game</h1>
          <h4>Please reload and select a force</h4>
        </div>
      )
    }

    return (
      <div className="flex-content flex-content--row-wrap">
        <div className="message-feed in-game-feed" data-tour="fourth-step">
          <ChannelTabsContainer ref={el => window.channelTabsContainer[force.uniqid] = el} />
        </div>
        <div className="message-feed in-game-feed plainChatContainer" data-tour="fourth-step">
          <PlainChannelTabsContainer ref={el => window.channelTabsContainer[force.uniqid] = el} />
        </div>
        <div className={classNames({"message-feed": true, "out-of-game-feed": true, "umpire-feed": state.controlUi})} data-tour="fifth-step">
          <div className="flex-content wargame-title">
            <h3>{state.wargameTitle}</h3>
            {
              <span onClick={this.showLessonsModal} className="wargame-title-icon" data-tour="third-step">
              <strong className="sr-only">Show lesson</strong>
            </span>
            }
            <FontAwesomeIcon icon={faShoePrints} size="2x" onClick={this.openTour} data-tour="third-step" />
          </div>
          <TurnProgression
            adjudicationStartTime={state.adjudicationStartTime}
            controlUi={state.controlUi}
            currentTurn={state.currentTurn}
            gameDate={state.gameDate}
            onNextTurn={this.nextTurn}
            phase={state.phase}
            timeWarning={state.timeWarning}
            turnEndTime={state.turnEndTime}
          />
          <AdminAndInsightsTabsContainer />
        </div>
        { state.showObjective &&
        <ForceObjective
          force={force}
          selectedRole={state.selectedRole}
          onIconClick={this.showHideForceObjectives}
        />
        }
      </div>
    )
  }
}

export default GameChannels;
