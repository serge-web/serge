import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import {deleteWargame} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";

class DeleteWargameModal extends Component {

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  deleteWargame = () => {
    this.props.dispatch(deleteWargame(this.props.currentModal.data));
    this.props.dispatch(modalAction.close());
  };

  render() {


    if (!this.props.currentModal.open) return false; // needed ?

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Delete</h3>
          <p>This will permanently delete the wargame.<br/>Are you sure?</p>
          <div className="buttons">
            <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Cancel</button>
            <button name="delete" className="btn btn-action btn-action--primary" onClick={this.deleteWargame}>Delete</button>
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

export default connect(mapStateToProps)(DeleteWargameModal);
