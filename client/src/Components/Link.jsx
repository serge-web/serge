import { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'

import 'src/themes/App.scss'

class Link extends Component {
  onClickHandler = (e) => {
    if (this.props.onClickHandler) this.props.onClickHandler()
    if (this.props.disable) return

    const aNewTab = e.metaKey || e.ctrlKey
    const anExternalLink = this.props.href.startsWith('http')

    if (!aNewTab && !anExternalLink) {
      e.preventDefault()
      this.props.dispatch(setCurrentViewFromURI(this.props.href))
    }
  }

  render () {
    return (
      <span href={this.props.href}
        onClick={!this.props.disabled ? this.onClickHandler : () => false}
        id={this.props.id ? this.props.id : null}
        className={this.props.class ? this.props.class : null}>
        {this.props.children}
      </span>
    )
  }
}

export default connect()(Link)
