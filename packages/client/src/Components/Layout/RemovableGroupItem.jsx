import React, { Component } from 'react';
import {connect} from "react-redux";
import {
  faTimes,
  faPencilAlt,
  faEye,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {removeRole, setTabUnsaved} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import {modalAction} from "../../ActionsAndReducers/Modal/Modal_ActionCreators";

class RemovableGroupItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  removeRole = () => {
    this.props.dispatch(setTabUnsaved());
    this.props.dispatch(removeRole(this.props.children));
  };

  editRole = () => {
    let role = {
      ...this.props.data,
      control: this.props.isControl,
    };

    this.props.dispatch(modalAction.open("newRole", role));
  };

  showEditBtn = () => {
     this.setState({
       hover: true,
     });
  };

  hideEditBtn = () => {
    this.setState({
      hover: false,
    });
  };

  render() {
    return (
      <span className="group-item" key={this.props.children} onMouseOver={this.showEditBtn} onMouseOut={this.hideEditBtn}>
        { this.props.data.isObserver && <FontAwesomeIcon title="Role can view all channels" icon={faEye} /> }
        { this.props.data.isInsightViewer && <FontAwesomeIcon title="Role can view feedback/insights" icon={faComments} /> }
        { this.props.children }
        <FontAwesomeIcon className="edit-icon" icon={faPencilAlt} onClick={this.editRole} />
        { !this.props.isControl && <FontAwesomeIcon icon={faTimes} title="Edit this role" onClick={this.removeRole} /> }
      </span>
    )
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(RemovableGroupItem);
