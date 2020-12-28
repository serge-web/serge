import React, { Component } from "react";
import ModalWrapper from "./ModalWrapper";
import { InsightForm } from '@serge/components';
import {
  sendFeedbackMessage,
  closeModal
} from "../../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { usePlayerUiState, usePlayerUiDispatch } from "../../Store/PlayerUi";

import "@serge/themes/App.scss";

class InsightsModal extends Component {
  

  hideModal = () => {
    const [state, dispatch] = [usePlayerUiState(), usePlayerUiDispatch()];
    dispatch(closeModal());
  };

  send = ({ name, message }) => {
    const [state, dispatch] = [usePlayerUiState(), usePlayerUiDispatch()];
    let forceName = state.allForces.find((force) => force.uniqid === state.selectedForce).name;

    let from = {
      force: forceName,
      forceColor: state.forceColor,
      role: state.selectedRole,
      name
    };

    sendFeedbackMessage(state.currentWargame, from, message)(dispatch);
  };

  render() {
    const state = usePlayerUiState();

    if (!state.modalOpened) return false;

    return (
      <ModalWrapper>
        <InsightForm
          onCancel={this.hideModal}
          onSend={this.send}
          darkMode
        />
      </ModalWrapper>
    )
  }
}

export default InsightsModal;
