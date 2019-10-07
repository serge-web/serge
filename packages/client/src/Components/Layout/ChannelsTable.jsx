import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import classNames from "classnames";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faUndoAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import EditSubscriptionRow from "./EditSubscriptionRow";
import deepCopy from "../../Helpers/copyStateHelper";
import { setTabUnsaved } from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import {
  addRecipientToChannel,
  updateRecipient,
  removeRecipient,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators.js";

class ChannelsTable extends Component {
  constructor(props) {
    super(props);
    let forceOptions = this.props.wargame.data.forces.forces.map((f) => ({ value: f.uniqid, label: f.name }));
    let templateOptions = this.props.messageTypes.messages.map((messageType) => {
      return {
        value: messageType._id,
        label: messageType.title,
      }
    });

    this.state = {
      selectedForce: {value: null, label: null},
      forceOptions: forceOptions,
      selectedRoles:  [],
      roleOptions: [{value: '', label: ''}],
      selectedTemplates:  [],
      templateOptions: templateOptions,
      subscriptionToEdit: null,
      editSubscriptionForce: '',
      editSubscriptionRole: '',
      editSubscriptionTemplates: [],
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextState.selectedForce.value === null) return;
    if (this.state.selectedForce.value !== nextState.selectedForce.value) {
      let roleOptions = [];
      let roles = this.props.wargame.data.forces.forces.find((f) => f.uniqid === nextState.selectedForce.value).roles;

      roles.forEach((role) => {
        roleOptions.push({
          value: role.name,
          label: role.name,
        });
      });

      this.setState({
        roleOptions,
      });
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.wargame.data.channels.selectedChannel.uniqid !== nextProps.wargame.data.channels.selectedChannel.uniqid) {
      this.setState({
        selectedForce: {value: null, label: null},
        selectedRoles: [],
        selectedTemplates: [],
      })
    }
  }

  createRow(rowData, i) {
    let data = deepCopy(rowData);
    let row = [];
    let key = 0;
    for (var prop in data) {
      if (prop === "subscriptionId") continue;
      if (prop === "forceUniqid") continue;
      if (prop === "icon") continue;
      key++;

      var value = '';
      if (typeof data[prop] !== "string") {
        for (var j=0 ; j<data[prop].length ; j++) {
          let item = data[prop][j];
          value += item.label;
          if (j !== data[prop].length-1) value+=', ';
        }
      } else {
        value = data[prop];
      }

      if (!value && prop === "roles") {
        row.push(<td key={`allRoles${key}`} className="all-roles">All roles</td>);
        continue;
      }
      if (!value && prop === "templates") {
        row.push(<td key={`templates${key}`} className="templates">Chat if empty</td>);
        continue;
      }

      row.push(<td key={`${value}${key}`}>{value}</td>)
    }
    row.push(
      <td key={`edit-delete${i}`}>
        <FontAwesomeIcon icon={faTrash} title="Delete membership" onClick={this.removeSubscription.bind(this, data.subscriptionId)} />
        <FontAwesomeIcon icon={faPencilAlt} title="Edit membership" onClick={this.editSubscription.bind(this, data.subscriptionId)} />
      </td>
    );
    return (<tr key={`row-${i}`} className="channel-participants-row">{row}</tr>);
  }

  removeSubscription(subscriptionId) {
    this.props.dispatch(setTabUnsaved());
    this.props.dispatch(removeRecipient(subscriptionId))
  };

  editSubscription(subscriptionId) {
    this.setState({
      subscriptionToEdit: subscriptionId,
    });
  }

  cancelEdit = () => {
    this.setState({
      subscriptionToEdit: "",
    });
  };

  updateRecipient = (id, data) => {
    this.props.dispatch(setTabUnsaved());
    this.props.dispatch(updateRecipient(id, data));
  };

  setSelectedForce = (option) => {
    this.setState({
      selectedForce: option,
    });
  };

  setSelectedRole = (option) => {
    this.setState({
      selectedRoles: option,
    });
  };

  setSelectedTemplate = (option) => {
    this.setState({
      selectedTemplates: option,
    });
  };

  addToChannel = () => {
    if (!this.state.selectedForce.value) return;

    let templateIds = this.state.selectedTemplates.map((template) => ({_id: template.value}));
    let templates = _.intersectionBy(this.props.messageTypes.messages, templateIds, (item) => item._id);
    templates = templates.map((template) => ({label: template.title, value: template}));

    let recipient = {
      force: this.props.wargame.data.forces.forces.find((f) => f.uniqid === this.state.selectedForce.value).name,
      forceUniqid: this.props.wargame.data.forces.forces.find((f) => f.uniqid === this.state.selectedForce.value).uniqid,
      roles: this.state.selectedRoles,
      templates,
      icon: this.props.wargame.data.forces.forces.find((f) => f.uniqid === this.state.selectedForce.value).icon,
    };
    this.props.dispatch(setTabUnsaved());
    this.props.dispatch(addRecipientToChannel(recipient));
    this.setState({
      selectedForce: {value: null, label: null},
      selectedRoles: [],
      selectedTemplates: [],
    });
  };

  clearChannelData = () => {
    this.setState({
      selectedForce: {value: null, label: null},
      selectedRoles: [],
      selectedTemplates: [],
    });
  };

  render() {
    return (
      <div className="flex-content">
        <table>
          <thead>
            <tr>
              <th>Force</th>
              <th>Restrict access specific roles</th>
              <th>Templates</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((data, i) => {
              return data.subscriptionId === this.state.subscriptionToEdit ?
                <EditSubscriptionRow
                  key={data.subscriptionId}
                  data={data}
                  forcesList={this.props.wargame.data.forces.forces}
                  messageTypes={this.props.messageTypes}
                  forceOptions={this.state.forceOptions}
                  roleOptions={this.state.roleOptions}
                  templateOptions={this.state.templateOptions}
                  cancelEdit={this.cancelEdit}
                  updateRecipient={this.updateRecipient}
                /> : this.createRow(data, i);
            })}
            <tr>
              <td>
                <div id="custom-select-force-selection">
                  <Select
                    name="force-selection"
                    value={this.state.selectedForce}
                    className="react-select"
                    classNamePrefix="react-select"
                    options={this.state.forceOptions}
                    onChange={this.setSelectedForce}
                  />
                </div>
              </td>
              <td>
                <div id="custom-select-role-selection">
                  <Select
                    name="role-selection"
                    value={this.state.selectedRoles}
                    className="react-select"
                    classNamePrefix="react-select"
                    options={this.state.roleOptions}
                    onChange={this.setSelectedRole}
                    isMulti
                  />
                </div>
              </td>
              <td>
                <div id="custom-select-template-selection">
                  <Select
                    name="template-selection"
                    value={this.state.selectedTemplates}
                    className="react-select"
                    classNamePrefix="react-select"
                    options={this.state.templateOptions}
                    onChange={this.setSelectedTemplate}
                    isMulti
                  />
                </div>
              </td>
              <td>
                <FontAwesomeIcon icon={faUndoAlt} title="Delete channel" onClick={this.clearChannelData} />
                <FontAwesomeIcon
                  icon={faCheck} title="Confirm channel"
                  className={classNames({"btn--disabled": !this.state.selectedForce.value})}
                  onClick={this.addToChannel}
                  data-qa-type="add-participant"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ wargame, messageTypes }) => ({
  wargame,
  messageTypes,
});

export default connect(mapStateToProps)(ChannelsTable);
