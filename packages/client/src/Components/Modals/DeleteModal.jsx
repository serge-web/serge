import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import { deleteMessage } from "../../ActionsAndReducers/dbMessages/messages_ActionCreators";
import { deleteMessageType } from "../../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators";
import {setPreviewSchema, setSelectedSchema} from "../../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators";
import {MESSAGE_TEMPLATE_ROUTE} from "../../consts";

class DeleteModal extends Component {

  // constructor(props) {
  //   super(props);
  // }

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  deleteMessage = () => {
    if (this.props.currentViewURI === MESSAGE_TEMPLATE_ROUTE) {
      this.props.dispatch(deleteMessageType(this.props.umpireMenu.selectedSchemaID));
      this.props.dispatch(setPreviewSchema(""));
      this.props.dispatch(setSelectedSchema(""));
    } else {
      this.props.dispatch(deleteMessage(this.props.messages.messagePreviewId));
    }
    this.props.dispatch(modalAction.close());
  };

  render() {

    if (!this.props.currentModal.open) return false; // needed ?

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Delete</h3>
          <p>This will permanently remove the message.<br/>Are you sure?</p>
          <div className="buttons">
            <button name="delete" className="btn btn-action btn-action--primary" onClick={this.deleteMessage}>Delete</button>
            <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Cancel</button>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ currentModal, messages, umpireMenu, currentViewURI }) => ({
  currentModal,
  messages,
  umpireMenu,
  currentViewURI
});

export default connect(mapStateToProps)(DeleteModal);
