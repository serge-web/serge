import '@serge/themes/App.scss'
import React, { Component } from 'react'

class MessagesListRenderProp extends Component {
  render() {
    return (
      <div className="message-list">
        {this.props.render(this.props.messages)}
      </div>
    )
  }
}

export default MessagesListRenderProp
