import React, { Component } from "react";
import { nextGameTurn } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { usePlayerUiState, usePlayerUiDispatch } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class GameControls extends Component {
  

  nextTurn = () => {
    const state = usePlayerUiState();
    nextGameTurn(state.currentWargame)();
  };

  render() {
    return (
      <>
        <span className="link link--noIcon link--next-turn" onClick={this.nextTurn}>Start next phase</span>
      </>
    );
  }
}

export default GameControls;
