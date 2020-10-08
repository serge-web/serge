import React, { Component } from "react";
import moment from "moment";
import { ChannelMessage } from "@serge/components";
import "@serge/themes/App.scss";
import { umpireForceTemplate } from "../consts";
import { PlayerStateContext } from '../Store/PlayerUi';

class MessageListItem extends Component {
  static contextType = PlayerStateContext;
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      this.props.detail._id !== nextProps.detail._id ||
      this.props.detail.isOpen !== nextProps.detail.isOpen ||
      this.props.detail.hasBeenRead !== nextProps.detail.hasBeenRead // used in mark all read button only
    );
  }

  open = () => {
    this.props.open(this.props.detail);
  };

  close = () => {
    this.props.close(this.props.detail);
  };

  render() {
    let itemTitle;
    const [ state ] = this.context;
    const { detail } = this.props;
    const { details, message, isOpen, hasBeenRead } = detail || {};
    const dynamicBorderColor = `${details.from.forceColor}${hasBeenRead ? 'B3':''}`;
    if (message.title) {
      itemTitle = message.title;
    } else if(message.content) {
      // yes, we have content (probably chat) use it
      itemTitle = message.content;
    } else {
      // no content, just use message-type
      itemTitle = details.messageType;
    }

    return (
      <React.Fragment key={this.props.key}>
        <div style={{ margin: '0 15px 8px' }}>
          <ChannelMessage
            borderColor={dynamicBorderColor}
            isOpen={isOpen}
            title={itemTitle}
            timestamp={moment(details.timestamp)}
            role={details.from.role}
            forceColor={details.from.forceColor}
            messageType={details.messageType}
            hasBeenRead={hasBeenRead}
            privateMessage={details.privateMessage}
            isUmpire={state.selectedForce === umpireForceTemplate.uniqid}
            detail={message}
            onRead={this.open}
          />
        </div>
      </React.Fragment>
    )
  }
}


export default MessageListItem;
