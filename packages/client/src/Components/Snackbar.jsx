import React, { Component } from 'react';

import '../scss/App.scss';

import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Snackbar extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.id === this.props.id;
  }

  onClickHandler = () => {
    clearTimeout(this.timer);
    this.props.onClickHandler(this.props.id);
  };

  componentWillMount() {
    this.timer = setTimeout(() => {
      this.props.onClickHandler(this.props.id);
    }, 2500);
  }

  render() {

    let type = this.props.type ? this.props.type : '';
    let classes = `active ${type}`;

    return (
      <>
        <div id="notification" className={classes} key={this.props.id}>
          {this.props.message}<FontAwesomeIcon icon={faTimes} onClick={this.onClickHandler} />
        </div>
      </>
    );
  }
}


export default Snackbar;
