import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '@serge/themes/App.scss'
class TextArea extends Component {
  onChange = (e) => {
    this.props.updateStore(e.target.value)
  };

  render () {
    return (
      <>
        { this.props.label && <label className='material-label' htmlFor={this.props.id}>{this.props.label}</label> }
        <textarea
          className={this.props.className}
          value={this.props.data}
          onChange={this.onChange}
          style={{ resize: 'none' }}
          title={this.props.title}
          name={this.props.name}
        ></textarea>
      </>
    )
  }
}

TextArea.propTypes = {
  updateStore: PropTypes.func.isRequired
}

export default TextArea
