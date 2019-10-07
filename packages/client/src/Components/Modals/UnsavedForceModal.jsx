import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import {
  setSelectedForce,
  setTabSaved,
  addNewForce,
  saveForce,
  refreshForce,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import uniqid from "uniqid";
import {forceTemplate} from "../../consts";

class UnsavedForceModal extends Component {

  dontSave = () => {

    if (this.props.currentModal.data === "create-new") {
      let id = 'force-' + uniqid.time();
      this.props.dispatch(addNewForce({name: id, uniqid: id}));
      this.props.dispatch(setSelectedForce({name: id, uniqid: id}));

      let template = forceTemplate;
      template.name = id;
      template.uniqid = id;

      this.props.dispatch(saveForce(this.props.wargame.currentWargame, id, template, id));

    } else {
      this.props.dispatch(refreshForce(this.props.wargame.currentWargame, this.props.currentModal.data));
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

const mapStateToProps = ({ currentModal, wargame }) => ({
  currentModal,
  wargame,
});

export default connect(mapStateToProps)(UnsavedForceModal);
