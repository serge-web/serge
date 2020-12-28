import React, { Component } from "react";
import moment from "moment";
import { umpireForceTemplate } from "../consts";
import NewMessage from "./NewMessage";
import {ChannelMessagesList} from '@serge/components';
import {
  closeMessage,
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { usePlayerUiState, usePlayerUiDispatch } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class Channel extends Component {
  

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const [state, dispatch] = [usePlayerUiState(), usePlayerUiDispatch()];
    const channelClassName = state.channels[this.props.channelId].name.toLowerCase().replace(/ /g, '-');
    if (state.channels[this.props.channelId].messages.length === 0) {
      getAllWargameMessages(state.currentWargame)(dispatch);
    }
    this.setState({
      channelTabClass: `tab-content-${channelClassName}`
    })
  }

  markAllRead = () => {
    const [state, dispatch] = [usePlayerUiState(), usePlayerUiDispatch()];
    dispatch(markAllAsRead(this.props.channelId));
  };

  openMessage = (message) => {
    const [state, dispatch] = [usePlayerUiState(), usePlayerUiDispatch()];
    dispatch(openMessage(this.props.channelId, message));
  };

  closeMessage = (message) => {
    const [state, dispatch] = [usePlayerUiState(), usePlayerUiDispatch()];
    dispatch(closeMessage(this.props.channelId, message));
  };

  render() {
    let curChannel = this.props.channelId;
    const state = usePlayerUiState();
    const messages = state.channels[curChannel].messages.map(item => {
      const { details, message, isOpen, hasBeenRead, infoType, gameTurn } = item || {};
      const { role, forceColor } = details.from || {}
      const { messageType, privateMessage } = details
      const dynamicBorderColor = `${forceColor}${hasBeenRead ? 'B3':''}`;
      const timestamp = moment(details.timestamp)
      const isUmpire = state.selectedForce === umpireForceTemplate.uniqid
      const detail = message || {}
      const onRead = this.openMessage
      let title;
      if (detail.title) {
        title = detail.title;
      } else if(detail.content) {
        // yes, we have content (probably chat) use it
        title = detail.content;
      } else {
        // no content, just use message-type
        title = detail.messageType;
      }
      return {
        ...item,
        borderColor: dynamicBorderColor,
        infoType,
        gameTurn,
        isOpen,
        title,
        timestamp,
        role,
        forceColor,
        messageType,
        hasBeenRead,
        privateMessage,
        isUmpire,
        detail,
        onRead,
      }
    })
    const icons = state.channels[curChannel].forceIcons
    const colors = state.channels[curChannel].forceColors

    return (
      <div className={this.state.channelTabClass} data-channel-id={curChannel}>
        <ChannelMessagesList
          messages={messages}
          icons={icons}
          colors={colors}
          onMarkAllAsRead={this.markAllRead}
        />
        {
          state.channels[curChannel].observing === false &&
          <NewMessage
            orderableChannel={true}
            curChannel={curChannel}
            privateMessage={state.selectedForce === umpireForceTemplate.uniqid}
            templates={state.channels[curChannel].templates}
          />
        }
      </div>
    );
  }
}

export default Channel;
