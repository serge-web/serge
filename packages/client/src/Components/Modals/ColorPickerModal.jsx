import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import { SketchPicker } from "react-color";

import {setForceColor, setTabUnsaved} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";

class ColorPickerModal extends Component {

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  handleChange = (color) => {
    this.props.dispatch(setForceColor(color.hex));
    this.props.dispatch(setTabUnsaved());
  };

  render() {

    if (!this.props.currentModal.open) return false;

    let selectedForceId = this.props.wargame.data.forces.selectedForce.uniqid;
    let currentForce = this.props.wargame.data.forces.forces.find((force) => force.uniqid === selectedForceId);

    return (
      <ModalWrapper>
        <SketchPicker
          color={currentForce.color}
          onChangeComplete={this.handleChange}
          presetColors={["#ff4141", "#66ff66", "#ff5ffd", "#3dd0ff", "#b56917", "#fff03f", "#fcfbed"]}
        />
        <div className="buttons">
          <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Close</button>
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ wargame, currentModal }) => ({
  wargame,
  currentModal
});

export default connect(mapStateToProps)(ColorPickerModal);
