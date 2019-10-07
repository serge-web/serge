import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import "../../scss/App.scss";
import { connect } from 'react-redux';
import uniqId from "uniqid";
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import TextInput from "../Inputs/TextInput";
import {
  addRole,
  updateRole,
  setTabUnsaved,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";

import Checkbox from "../Inputs/Checkbox";

class AddRoleModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      roleName: this.props.currentModal.data ? this.props.currentModal.data.name : '',
      rolePassword: this.props.currentModal.data ? this.props.currentModal.data.password : `p${uniqId.time()}`,
      isObserver: this.props.currentModal.data ? this.props.currentModal.data.isObserver : false,
      isInsightViewer: this.props.currentModal.data ? this.props.currentModal.data.isInsightViewer : false,
    };
  }

  hideModal = () => {

    this.setState({
      roleName: '',
      rolePassword: '',
      isObserver: false,
      isInsightViewer: false,
    });

    this.props.dispatch(modalAction.close());
  };


  setNewRoleName = (value) => {
    let curTab = this.props.wargame.currentTab;
    let selectedForce = this.props.wargame.data.forces.selectedForce.name;
    this.setState({
      roleName: value,
      sameName: this.props.wargame.data[curTab].forces.find((force) => force.name === selectedForce).roles.some((role) => role.name === value)
    });
  };

  setNewRolePassword = (value) => {
    let curTab = this.props.wargame.currentTab;
    let selectedForce = this.props.wargame.data.forces.selectedForce.name;
    this.setState({
      rolePassword: value,
      samePassword: this.props.wargame.data[curTab].forces.find((force) => force.name === selectedForce).roles.some((role) => role.password === value)
    });
  };

  setRoleObserver = (value) => {
    this.setState({
      isObserver: value
    });
  };

  setInsightViewer = (value) => {
    this.setState({
      isInsightViewer: value
    });
  };


  addRole = () => {
    let selectedForce = this.props.wargame.data.forces.selectedForce.name;

    let newRole = {
      name: this.state.roleName,
      password: this.state.rolePassword,
      isObserver: this.state.isObserver,
      isInsightViewer: this.state.isInsightViewer,
      control: this.props.currentModal.data ? this.props.currentModal.data.control : false,
    };

    if (this.props.currentModal.data) {
      this.props.dispatch(updateRole(selectedForce, this.props.currentModal.data.name, newRole));
    } else {
      this.props.dispatch(addRole(selectedForce, newRole));
    }
    this.props.dispatch(setTabUnsaved());
    this.props.dispatch(modalAction.close());
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && this.state.roleName.length > 0 && !this.state.sameName) this.addRole();
    if (e.key === "Escape") this.hideModal();
  };


  render() {

    if (!this.props.currentModal.open) return false;

    var disable = this.state.roleName.length < 1 || this.state.sameName || this.state.samePassword || this.state.rolePassword.length > 30;

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Add a role</h3>
          {this.state.sameName && <p className="notification">Name already exists</p>}
          {this.state.samePassword && <p className="notification">Password already exists</p>}
          {this.state.rolePassword.length > 30 && <p className="notification">Password limit is 30 chars.</p>}

          <div className="flex-content-wrapper flex-content-wrapper--column">
            <div className="flex-content">
              <TextInput
                className="material-input"
                label="Name"
                updateStore={this.setNewRoleName}
                data={this.state.roleName}
                options={{numInput: false}}
                autoFocus={true}
              />
            </div>
            <div className="flex-content">
              <TextInput
                className="material-input"
                label="Password"
                updateStore={this.setNewRolePassword}
                data={this.state.rolePassword}
                options={{numInput: false}}
              />
            </div>
            <div className="flex-content">
              <Checkbox
                id="c1"
                label="Is Observer"
                updateStore={this.setRoleObserver}
                isChecked={this.state.isObserver}
                title="Role gains read-only view of channels not currently a member of"
              />
            </div>
            <div className="flex-content">
              <Checkbox
                id="c2"
                label="Can view insights"
                updateStore={this.setInsightViewer}
                isChecked={this.state.isInsightViewer}
                title="Role has view of all submitted feedback"
              />
            </div>
          </div>
          <div className="buttons">
            <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Cancel</button>
            <button disabled={disable} name="add" className="btn btn-action btn-action--primary" onClick={this.addRole}>Add</button>
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

export default connect(mapStateToProps)(AddRoleModal);
