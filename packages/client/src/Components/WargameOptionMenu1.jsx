import React, {Component}  from 'react';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faFileDownload, faTrash, faClone} from "@fortawesome/free-solid-svg-icons";

class WargameOptionMenu extends Component {

  handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) this.props.hideMenu();
  };

  cleanWargame = () => {
    this.props.hideMenu();
    this.props.cleanWargame(this.props.dbName);
  };

  duplicateWargame = () => {
    this.props.hideMenu();
    this.props.duplicateWargame(this.props.dbName);
  };

  exportWargame = () => {
    this.props.hideMenu();
    this.props.exportWargame(this.props.dbName);
  };

  deleteWargame = () => {
    this.props.hideMenu();
    this.props.deleteWargame(this.props.dbName);
  };

  render() {
    return (
      <>
        <div className="wargame-option-menu-bg" onClick={this.handleBackgroundClick}></div>
        <div className="wargame-option-menu">
          <span onClick={this.cleanWargame}>
            <FontAwesomeIcon icon={faBath} title="Save clean copy of wargame (no messages)" />
            Clean copy
          </span>
          <span onClick={this.duplicateWargame}>
            <FontAwesomeIcon icon={faClone} title="Duplicate wargame" />
            Duplicate
          </span>
          <span onClick={this.exportWargame}>
            <FontAwesomeIcon icon={faFileDownload} title="Export wargame" />
            Export
          </span>
          <span onClick={this.deleteWargame}>
            <FontAwesomeIcon icon={faTrash} title="Delete wargame" />
            Delete
          </span>
        </div>
      </>
    )
  }
};

export default connect()(WargameOptionMenu);
