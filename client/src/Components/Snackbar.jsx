import { Component } from 'react'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'src/themes/App.scss'

class Snackbar extends Component {
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return nextProps.id === this.props.id
  }

  onClickHandler = () => {
  if (this.props.autoHide) {
  clearTimeout(this.timer)
  }
  this.props.onClickHandler(this.props.id)
  }

  componentDidMount () {
    if (this.props.autoHide) {
      this.timer = setTimeout(() => {
        this.props.onClickHandler(this.props.id)
      }, 2500)
    }
  }

  render () {
    const type = this.props.type ? this.props.type : ''
    const classes = `active ${type}`

    return (
      <>
        <div id='notification' className={classes} key={this.props.id}>
          {this.props.message}<FontAwesomeIcon icon={faTimes} onClick={this.onClickHandler} />
        </div>
      </>
    )
  }
}

Snackbar.defaultProps = {
  autoHide: true
}

export default Snackbar
