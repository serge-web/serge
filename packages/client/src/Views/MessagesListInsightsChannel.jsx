import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import moment from "moment";
import classNames from "classnames";
import "../scss/App.scss";

class MessagesListChatChannel extends Component {
  render() {
    let messages = this.props.messages;

    return (
      <>
        <span className="link link--noIcon link--secondary" onClick={this.props.markAllAsRead}>Mark all as read</span>
        {messages.map((message, i) => {
          return (
            <React.Fragment key={`feedback${i}`}>
              <div className="info-wrap">
                <Badge pill variant="primary">{message.details.from.force}</Badge>
                <Badge pill variant="secondary">{message.details.from.role}</Badge>
                {message.details.from.name && <Badge pill variant="warning">{message.details.from.name}</Badge>}
                <span>{moment(message.details.timestamp).format("YYYY-MMM-DD HH:mm")}</span>
              </div>
              <div className={classNames({"bold": !message.hasBeenRead})}>
                {message.message.content}
              </div>
              <p className="feedback-marker" style={{borderColor: message.details.from.forceColor}}></p>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default MessagesListChatChannel;
