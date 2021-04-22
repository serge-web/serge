import React, { Component } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '@serge/themes/App.scss'

class Snackbar extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.id === this.props.id
  }

  onClickHandler = () => {
    clearTimeout(this.timer)
    this.props.onClickHandler(this.props.id)
  };

  componentWillMount () {
    this.timer = setTimeout(() => {
      this.props.onClickHandler(this.props.id)
    }, 2500)
  }

  render () {
    const type = this.props.type ? this.props.type : ''
    const classes = `active ${type}`

    return (
      <>
        <div id="notification" className={classes} key={this.props.id}>
          {this.props.message}
          <FontAwesomeIcon icon={faTimes} onClick={this.onClickHandler} />
        </div>
      </>
    )
  }
}

export default Snackbar
