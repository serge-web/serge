import React, { Component } from "react";
import { CHAT_CHANNEL_ID, expiredStorage, LOCAL_STORAGE_TIMEOUT } from "../consts";
import MessageCreatorChatChannel from "../Components/MessageCreatorChatChannel";
import MessagesListChatChannel from "./MessagesListChatChannel";
import MessagesListRenderProp from "./MessagesListRenderProp";
import { PlayerStateContext } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class GameAdmin extends Component {
  static contextType = PlayerStateContext;

  constructor(props, context) {
    super(props);
    const [ state ] = context;
    this.state = {
      activeTab: Object.keys(state.channels)[0],
      allMarkedRead: false,
      showObjectives: false,
    };
  }

  componentDidMount() {
    const [ state ] = this.context;
    let channelLength = Object.keys(state.chatChannel.messages).length;

    if (channelLength) {
      this.setState({allMarkedRead: false});
    }
  }

  markAllAsRead = () => {
    const [ state ] = this.context;
    state.chatChannel.messages.forEach((message) => {
      expiredStorage.setItem(state.currentWargame + message._id, "read", LOCAL_STORAGE_TIMEOUT);
    });
    this.setState({
      allMarkedRead: true,
    })
  };

  render() {
    const [ state ] = this.context;
    return (
      <div className="contain-game-admin">
        <MessagesListRenderProp
          curChannel={CHAT_CHANNEL_ID}
          messages={state.chatChannel.messages}
          userId={`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}`}
          allMarkedRead={this.state.allMarkedRead}
          render={messages => (
            <MessagesListChatChannel
              messages={messages}
              markAllAsRead={this.markAllAsRead}
            />
          )}
        />

        <div className="new-message-creator wrap" data-tour="seventh-step">
          <MessageCreatorChatChannel
              curChannel={CHAT_CHANNEL_ID}
              schema={state.chatChannel.template}
          />
        </div>
      </div>
    );
  }
}

export default GameAdmin;
