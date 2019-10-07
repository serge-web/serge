import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import classNames from "classnames";
import moment from "moment";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ADJUDICATION_PHASE, PLANNING_PHASE } from "../consts";
import GameControls from "../Components/GameControls";
import {
  openTour,
  openModal
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import "../scss/App.scss";

class TurnProgression extends Component {
  static contextType = PlayerStateContext;

  constructor(props, context) {
    super(props);

    const [ state ] = context;
    let now = Math.floor(new Date().getTime() / 1000);
    let end = Math.round(new Date(state.turnEndTime).getTime()/1000);
    let seconds = end - now;

    this.state = {
      minutesLeft: ('0' + Math.floor(seconds / 60)).slice(-2),
      secondsLeft: ('0' + Math.floor(seconds % 60)).slice(-2),
      ended: false,
      startTime: Math.round(new Date(state.adjudicationStartTime).getTime()/1000),
      phase: state.phase,
    };

    if (state.phase === PLANNING_PHASE) {
      this.interval = setInterval(this.timer, 1000);
    }
    else if (state.phase === ADJUDICATION_PHASE) {
      this.interval = setInterval(this.countup, 1000);
    }
  }

  componentDidMount() {
    this.initInterval();
  }

  componentDidUpdate() {
    const [ state ] = this.context;
    this.initInterval();
    if (
      this.state.minutesLeft === '00' &&
      this.state.secondsLeft === '00' &&
      !this.state.ended &&
      state.phase === PLANNING_PHASE
    ) {
      this.setState({
        ended: true,
      });
      _.debounce(() => this.interval = setInterval(this.timer, 1000));
    }
  }

  timer = () => {
    const [ state ] = this.context;
    if (this.state.secondsLeft === '00' && this.state.minutesLeft === '00') this.setState({ended: true});

    let now = Math.floor(new Date().getTime() / 1000);
    let end = Math.round(new Date(state.turnEndTime).getTime() / 1000);
    let seconds;

    if (this.state.ended) {
      seconds = now - end;
    } else {
      seconds = end - now;
    }
    if (seconds < (state.timeWarning / 1000)) this.setState({warning: true});

    let minutesLeft = Math.floor(seconds / 60);
        minutesLeft = minutesLeft < 100 ? ('0' + minutesLeft).slice(-2) : minutesLeft;

    this.setState({
      minutesLeft,
      secondsLeft: ('0' + Math.round(seconds % 60)).slice(-2),
    })
  };

  countup = () => {
    let now = Math.floor(new Date().getTime() / 1000);
    let seconds = now - this.state.startTime;
    let minutesUp = Math.floor(seconds / 60);
        minutesUp = minutesUp < 100 ? ('0' + minutesUp).slice(-2) : minutesUp;

    this.setState({
      minutesUp,
      secondsUp: ('0' + Math.round(seconds % 60)).slice(-2),
    })
  };

  initInterval = () => {
    const [ state ] = this.context;
    const startInterval = {
      [PLANNING_PHASE]: this.timer,
      [ADJUDICATION_PHASE]: this.countup,
    };

    if( this.state.phase === state.phase ) return;

    if (
      state.phase === ADJUDICATION_PHASE
    ) {
      this.setState({
        minutesUp: '00',
        secondsUp: '00',
        startTime: Math.round(new Date(state.adjudicationStartTime).getTime()/1000),
      });
    }

    this.clearInterval();
    this.interval = setInterval(startInterval[state.phase], 1000);
    this.setState({ phase: state.phase });
  };

  clearInterval = () => {
    this.setState({
      ended: false,
      warning: false,
    });
    clearInterval(this.interval);
  };

  showLessonsModal = () => {
    const [ , dispatch ] = this.context;
    dispatch(openModal("lessons"));
  };

  openTour = () => {
    const [ , dispatch ] = this.context;
    dispatch(openTour(true));
  };

  render() {
    const [ state ] = this.context;
    let adjudicationPhase = state.phase === ADJUDICATION_PHASE;

    return (
      <>
        <div className="flex-content wargame-title">
          <h3>{state.wargameTitle}</h3>
          {
            <span onClick={this.showLessonsModal} className="wargame-title-icon" data-tour="third-step">
              <strong className="sr-only">Show lesson</strong>
            </span>
          }
          <FontAwesomeIcon icon={faShoePrints} size="2x" onClick={this.openTour} data-tour="third-step" />
        </div>

        <div className={classNames({"flex-content-wrapper": true, "turn-progression-ui": true, "adjudication-phase": adjudicationPhase})} data-tour="sixth-step">
          <div className="turn-info-phase">
            <h5>Turn {state.currentTurn} - {state.phase} phase</h5>
            <time dateTime={state.gameDate}>{moment(state.gameDate).format("DD/MM/YYYY HH:mm")}</time>
            {state.controlUi ? <GameControls /> : false}
          </div>
          <div className="turn-info-remaining text-center">
            {state.phase === PLANNING_PHASE &&
              <>
                <span className={classNames({"time-left": true, "ended": this.state.ended, "warning": this.state.warning})}>{this.state.minutesLeft}:{this.state.secondsLeft}</span>
                <span className="info-helper">Time left</span>
              </>
            }
            {state.phase === ADJUDICATION_PHASE &&
              <>
                <span className="time-left">{this.state.minutesUp}:{this.state.secondsUp}</span>
                <span className="info-helper">Elapsed</span>
              </>
            }
          </div>
        </div>
      </>
    );
  }
}

export default connect()(TurnProgression);
