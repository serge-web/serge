import React, { Component } from 'react';
import PropTypes from "prop-types";
import MaskedInput from "react-maskedinput";

import '../../scss/App.scss';

class TextInputMasked extends Component {

  onChange = (e) => {
    this.props.updateStore(e.target.value);
  };

  render() {
    return (
      <>
        { this.props.label && <label className="material-label" htmlFor={this.props.id}>{this.props.label}</label> }
        <MaskedInput
          mask={this.props.mask}
          placeholder={this.props.placeholder}
          className={this.props.className}
          id={this.props.id || null}
          onChange={this.onChange}
          value={this.props.data ? this.props.data : ""}
          name={this.props.name}
        />
      </>
    );
  }
}

TextInputMasked.propTypes = {
  updateStore: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};


export default TextInputMasked;
