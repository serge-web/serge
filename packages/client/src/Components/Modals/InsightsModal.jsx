import React, { Component } from "react";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalWrapper from "./ModalWrapper";
import TextArea from "../Inputs/TextArea";
import TextInput from "../Inputs/TextInput";
import {
  sendFeedbackMessage,
  closeModal
} from "../../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../../Store/PlayerUi";
import "../../scss/App.scss";

class InsightsModal extends Component {
  static contextType = PlayerStateContext;

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
    };
  }

  hideModal = () => {
    const [ , dispatch ] = this.context;
    dispatch(closeModal());
  };

  setName = (val) => {
    this.setState({
      name: val,
    })
  };

  setMessage = (val) => {
    this.setState({
      message: val,
    })
  };

  send = () => {
    const [ state, dispatch ] = this.context;
    let forceName = state.allForces.find((force) => force.uniqid === state.selectedForce).name;

    let from = {
      force: forceName,
      forceColor: state.forceColor,
      role: state.selectedRole,
      name: this.state.name,
    };

    sendFeedbackMessage(state.currentWargame, from, this.state.message)(dispatch);
  };

  render() {
    const [ state ] = this.context;

    if (!state.modalOpened) return false;

    return (
      <ModalWrapper>
        <div className="display-text-wrapper lessons-modal">
          <div className="title">
            <FontAwesomeIcon icon={faCommentAlt} size="2x"/><h3>Insights</h3>
          </div>
          <p>Use this form to give private feedback on the game itself.</p>
          <p>Comments are only visible to the Game Controller. No other player has access to the comments you post here.</p>
          <div className="text-input-wrap">
            <TextArea
              id="message-input"
              className="material-input"
              label="Message"
              updateStore={this.setMessage}
              data={this.state.message}
            />
          </div>
          <div className="text-input-wrap">
            <TextInput
              className="material-input"
              label="Name: optional"
              updateStore={this.setName}
              options={{numInput: false}}
              data={this.state.name}
            />
          </div>
          <div className="buttons">
            <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Cancel</button>
            <button name="continue" className="btn btn-action btn-action--primary" onClick={this.send}>Send</button>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

export default InsightsModal;
