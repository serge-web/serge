import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import DropZone from "../Inputs/DropZone";
import {saveIcon} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";

class AddIconModal extends Component {

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  saveIcon = (file) => {
    this.props.dispatch(saveIcon(file));
  };

  render() {

    if (!this.props.currentModal.open) return false;

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Add an icon</h3>
          <DropZone
            maxSize={20000}
            saveHandler={this.saveIcon}
          />
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ currentModal }) => ({
  currentModal
});

export default connect(mapStateToProps)(AddIconModal);
