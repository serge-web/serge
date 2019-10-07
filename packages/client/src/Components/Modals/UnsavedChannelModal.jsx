import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import {
  refreshChannel,
  setTabSaved,
  addNewChannel,
  setSelectedChannel,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import uniqid from "uniqid";

class UnsavedChannelModal extends Component {

  dontSave = () => {

    if (this.props.currentModal.data === "create-new") {
      let id = `channel-${uniqid.time()}`;
      this.props.dispatch(addNewChannel({name: id, uniqid: id}));
      this.props.dispatch(setSelectedChannel({name: id, uniqid: id}));
    } else {
      this.props.dispatch(refreshChannel(this.props.wargame.currentWargame, this.props.currentModal.data));
    }

    this.props.dispatch(setTabSaved());
    this.props.dispatch(modalAction.close());
  };

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  render() {

    if (!this.props.currentModal.open) return false;

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Are you sure?</h3>
          <p>There are unsaved changes.</p>
          <div className="buttons">
            <button name="continue" className="btn btn-action btn-action--primary" onClick={this.dontSave}>Don't save</button>
            <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Cancel</button>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ wargame, currentModal }) => ({
  wargame,
  currentModal
});

export default connect(mapStateToProps)(UnsavedChannelModal);
