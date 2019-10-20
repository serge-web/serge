import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import moment from "moment";
import classNames from "classnames";
import { PlayerStateContext } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class MessagesListChatChannel extends Component {
  static contextType = PlayerStateContext;
  constructor(props) {
    super(props);
    this.state = {
      force: {},
    }
  }

  componentDidMount() {
    const [ state ] = this.context;
    const { allForces, selectedForce } = state || {};
      if( allForces && selectedForce ) {
          this.setState({
            force : {
              ...this.state.force,
              ...allForces.find((force) => force.uniqid === selectedForce)
            },
          })
      }
  }

  render() {
    const { name } = this.state.force;
    const { messages } = this.props;

    return (
      <>
        <span className="link link--noIcon link--secondary" onClick={this.props.markAllAsRead}>Mark all as read</span>
          {
            messages.map((item, i) => {
              const { details, message } = item;
              const isOwnMessage = name === details.from.force;
              const listItemClass = isOwnMessage ? 'own-message' : '';

              return (
                <div key={`preview-${i}`} className={`message-preview-player wrap ${listItemClass}`}>
                  {
                    isOwnMessage ?
                      null :
                      <span className="message-bullet" style={{ backgroundColor: details.from.forceColor }}>&nbsp;</span>
                  }
                  <div className={classNames("message-item-content", {"bold": !item.hasBeenRead})}>
                    {message.content}
                  </div>
                  <div className="info-wrap">
                    <time dateTime={details.timestamp}>{moment(details.timestamp).format("HH:mm")}</time>
                    <Badge pill variant="secondary">{details.from.role}</Badge>
                  </div>
                </div>
              );
            })
          }
      </>
    );
  }
}

export default MessagesListChatChannel;
