import React, { Component } from "react";
import ModalWrapper from "./ModalWrapper";
import { InsightForm } from '@serge/components';
import {
  sendFeedbackMessage,
  closeModal
} from "../../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../../Store/PlayerUi";

import "@serge/themes/App.scss";

class InsightsModal extends Component {
  static contextType = PlayerStateContext;

  hideModal = () => {
    const [ , dispatch ] = this.context;
    dispatch(closeModal());
  };

  send = ({ name, message }) => {
    const [ state, dispatch ] = this.context;
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
    const [ state ] = this.context;

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
