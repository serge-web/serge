import React, {Component} from "react";
import { connect } from "react-redux";
import uniqId from "uniqid";
import { ButtonList, TextInput } from "@serge/components";
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import {
  addRole,
  updateRole,
  setTabUnsaved,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import "@serge/themes/App.scss";
import Checkbox from "../Inputs/Checkbox";
import ModalWrapper from "./ModalWrapper";

class AddRoleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roleName: this.props.currentModal.data ? this.props.currentModal.data.name : '',
      rolePassword: this.props.currentModal.data ? this.props.currentModal.data.password : `p${uniqId.time()}`,
      isObserver: this.props.currentModal.data ? this.props.currentModal.data.isObserver : false,
      canSubmitPlans: this.props.currentModal.data ? this.props.currentModal.data.canSubmitPlans : false,
      isInsightViewer: this.props.currentModal.data ? this.props.currentModal.data.isInsightViewer : false,
      isRFIManager: this.props.currentModal.data ? this.props.currentModal.data.isRFIManager : false
    };
  }

  hideModal = () => {
    this.setState({
      roleName: '',
      rolePassword: '',
      isObserver: false,
      isInsightViewer: false,
      isRFIManager: false,
      canSubmitPlans:false
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


  setRFIManager = (value) => {
    this.setState({
      isRFIManager: value
    });
  };

  setCanSubmitPlans= (value) => {
    this.setState({
      canSubmitPlans: value
    });
  };


  addRole = () => {
    let selectedForce = this.props.wargame.data.forces.selectedForce.name;
    let newRole = {
      name: this.state.roleName,
      password: this.state.rolePassword,
      isObserver: this.state.isObserver,
      canSubmitPlans: this.state.canSubmitPlans,
      isInsightViewer: this.state.isInsightViewer,
      isRFIManager: this.state.isRFIManager,
      isGameControl: this.props.currentModal.data ? this.props.currentModal.data.isGameControl : false,
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

    const disabled = this.state.roleName.length < 1 || this.state.sameName || this.state.samePassword || this.state.rolePassword.length > 30;
    let selectedForce = this.props.wargame.data.forces.selectedForce;

    const buttons = [{
      name: 'add',
      color: 'primary',
      onClick: this.addRole,
      children: 'Add',
      disabled
    }, {
      name: 'cancel',
      color: 'secondary',
      onClick: this.hideModal,
      children: 'Cancel'
    }]

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Add a role</h3>
          {this.state.sameName && <p className="notification">Name already exists</p>}
          {this.state.samePassword && <p className="notification">Password already exists</p>}
          {this.state.rolePassword.length > 30 && <p className="notification">Password limit is 30 chars.</p>}

          <div className="flex-content-wrapper flex-content-wrapper--column">
            <div className="flex-content form-group">
              <TextInput
                fullWidth
                labelColor="common.white"
                label="Name"
                variant="filled"
                updateState={el => this.setNewRoleName(el.value)}
                value={this.state.roleName}
                autoFocus={true}
              />
            </div>
            <div className="flex-content form-group">
              <TextInput
                fullWidth
                labelColor="common.white"
                label="Password"
                variant="filled"
                updateState={target => this.setNewRolePassword(target.value)}
                value={this.state.rolePassword}
              />
            </div>
            {selectedForce.umpire &&
            <>
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
            <div className="flex-content">
              <Checkbox
                id="c3"
                label="Can Release RFIs"
                updateStore={this.setRFIManager}
                isChecked={this.state.isRFIManager}
                title="Role is authorised to release RFIs"
              />
            </div>
            </>}
            <div className="flex-content">
              <Checkbox
                id="c3"
                label="Can submit mapping plans"
                updateStore={this.setCanSubmitPlans}
                // submit plans is a new parameter. It is missing from some wargames.
                // so use value of false if its missing
                isChecked={this.state.canSubmitPlans || false}
                title="Role can submit mapping plans"
              />
            </div>
          </div>
          <div className="buttons">
            <ButtonList buttons={buttons}/>
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
