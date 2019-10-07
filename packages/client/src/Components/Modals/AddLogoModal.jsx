import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import DropZone from "../Inputs/DropZone";
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import {saveSergeLogo} from "../../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators";

class AddLogoModal extends Component {

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  saveLogo = (file) => {
    this.props.dispatch(saveSergeLogo(file));
  };

  render() {

    if (!this.props.currentModal.open) return false;

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Add an image</h3>
          <DropZone
            maxSize={100000}
            saveHandler={this.saveLogo}
          />
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ currentModal }) => ({
  currentModal
});

export default connect(mapStateToProps)(AddLogoModal);
