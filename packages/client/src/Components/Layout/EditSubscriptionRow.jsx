import React, { Component } from 'react';
import Select from "react-select";
import {
  faCheck,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import _ from "lodash";
import "@serge/themes/App.scss";

class EditSubscriptionRow extends Component {

  constructor(props) {
    super(props);

    let roleOptions = [];

    let matchedForce = this.props.forcesList.find((f) => f.uniqid === this.props.data.forceUniqid);

    if (matchedForce) {
      matchedForce.roles.forEach((role) => {
        roleOptions.push({
          value: role.name,
          label: role.name,
        });
      });
    }

    this.state = {
      subscriptionId: this.props.data.subscriptionId,
      editSubscriptionForce: {value: this.props.data.forceUniqid, label: this.props.data.force},
      editSubscriptionRoles: this.props.data.roles,
      editSubscriptionTemplates: this.props.data.templates,
      roleOptions,
    };
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.state.editSubscriptionForce.value !== nextState.editSubscriptionForce.value) {

      let roleOptions = [];

      let roles = this.props.forcesList.find((f) => f.uniqid === nextState.editSubscriptionForce.value).roles;

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

  updateSubscriptionForce = (option) => {
    this.setState({
      editSubscriptionForce: option,
      editSubscriptionRoles: [],
      editSubscriptionTemplates: [],
    });
  };

  updateSubscriptionRole = (option) => {
    this.setState({
      editSubscriptionRoles: option,
    });
  };

  updateSubscriptionTemplates = (option) => {
    this.setState({
      editSubscriptionTemplates: option,
    });
  };

  updateChannel = () => {
    let templateIds = this.state.editSubscriptionTemplates.map(function(template) {
      if (typeof template.value === "string") {
        return {_id: template.value};
      }
      return {_id: template.value._id};
    });
    let templates = _.intersectionBy(this.props.messageTypes.messages, templateIds, (item) => item._id);
        templates = templates.map(({ _id, title }) => ({ label: title, value: _id }));

    const {
      value: forceUniqid,
      label: force
    } = this.state.editSubscriptionForce
    const currentEditedForce = this.props.forcesList.find((force) => {
      return forceUniqid === force.uniqid
    })
    const {
      icon,
      color
    } = currentEditedForce
    let subscriptionData = {
      force,
      roles: this.state.editSubscriptionRoles,
      templates,
      forceUniqid,
      icon,
      color
    };
    this.props.updateRecipient(this.state.subscriptionId, subscriptionData);
    this.props.cancelEdit();
  };

  cancelEdit = () => {
    this.props.cancelEdit();
  };

  render() {
    return (
      <tr className="channel-participants-row">
        <td>
          <Select
            name="force-edit-selection"
            value={this.state.editSubscriptionForce}
            options={this.props.forceOptions}
            onChange={this.updateSubscriptionForce}
          />
        </td>
        <td>
          <Select
            name="role-edit-selection"
            value={this.state.editSubscriptionRoles}
            options={this.state.roleOptions}
            onChange={this.updateSubscriptionRole}
            isMulti
          />
        </td>
        <td>
          <Select
            name="template-edit-selection"
            value={this.state.editSubscriptionTemplates}
            options={this.props.templateOptions}
            onChange={this.updateSubscriptionTemplates}
            isMulti
          />
        </td>
        <td>
          <FontAwesomeIcon icon={faUndoAlt} title="Cancel" onClick={this.cancelEdit} />
          <FontAwesomeIcon icon={faCheck} title="Save" onClick={this.updateChannel} />
        </td>
      </tr>
    )
  }
}


export default EditSubscriptionRow;
