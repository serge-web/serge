import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '@serge/themes/App.scss'

class TextInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      type: this.props.options.numInput ? 'number' : 'text'
    }

    if (this.props.options.password) {
      this.state.type = 'password'
    }

    // keep a link to the text input box, so we can
    // put focus on it, if nesessary
    this.textInput = React.createRef()
  }

  componentDidMount () {
    if (this.props.autoFocus) {
      this.textInput.current.focus()
    }
  }

  onChange = (e) => {
    this.props.updateStore(e.target.value)
  }

  render () {
    return (
      <>
        { this.props.label && <label className='material-label' htmlFor={this.props.id}>{this.props.label}</label> }
        <input
          ref={this.textInput}
          className={this.props.className || ''}
          id={this.props.id ? this.props.id : null}
          type={this.state.type}
          onChange={this.onChange}
          value={this.props.data ? this.props.data : ''}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          title={this.props.title}
          name={this.props.name}
        />
      </>
    )
  }
}

TextInput.propTypes = {
  updateStore: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool,
  className: PropTypes.string
}

export default TextInput
