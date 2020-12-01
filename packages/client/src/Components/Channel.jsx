import React, { Component, Fragment } from "react";
import moment from "moment";
import { umpireForceTemplate } from "../consts";
import NewMessage from "./NewMessage";
import {ChannelMessagesList,ChatMessagesList, NewChatMessage} from '@serge/components';
import {
  closeMessage,
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import "@serge/themes/App.scss";
import { saveMessage } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";

class Channel extends Component {
  static contextType = PlayerStateContext;

  constructor(props) {
    super(props);
    this.state = {
      selectedSchema: '',
      message: {
          content: '',
          privateMessage: ''
      }
    };
  }

  componentDidMount() {
    const [ state, dispatch ] = this.context;
    const channelClassName = state.channels[this.props.channelId].name.toLowerCase().replace(/ /g, '-');
    if (state.channels[this.props.channelId].messages.length === 0) {
      getAllWargameMessages(state.currentWargame)(dispatch);
    }
    this.setState({
      channelTabClass: `tab-content-${channelClassName}`
    })
  }

  markAllRead = () => {
    const [ , dispatch ] = this.context;
    dispatch(markAllAsRead(this.props.channelId));
  };

  openMessage = (message) => {
    const [ , dispatch ] = this.context;
    dispatch(openMessage(this.props.channelId, message));
  };

  closeMessage = (message) => {
    const [ , dispatch ] = this.context;
    dispatch(closeMessage(this.props.channelId, message));
  };
  onSendMessage = () => {
    const [ state ] = this.context;
    let curForce = state.allForces.find((force) => force.uniqid === state.selectedForce);
    let details = {
      channel: this.props.channelId,
      from: {
        force: curForce.name,
        forceColor: state.forceColor,
        role: state.selectedRole,
        icon: curForce.icon,
      },
      timestamp: new Date().toISOString(),
    };
    const {content, privateMessage} = this.state.message;
    if(privateMessage){
      details.privateMessage = privateMessage;
    }
    saveMessage(state.currentWargame, details, {content: content})();
    this.setState({message:{content:"",privateMessage:""}})
  }

  onChange = (event,key) => {
    let { message } = this.state;
    message[key] = event.value
    this.setState({ message })
  }
  render() {
    const chat_input_grid = {
      position: "fixed",
      width: "75.3%",
      bottom: 0,
      paddingBottom: 0
    }
    let curChannel = this.props.channelId;
    const [ state ] = this.context;
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
    const templates = state.channels[curChannel].templates
    const {content, privateMessage} = this.state.message;
    return (
      <div className={this.state.channelTabClass} data-channel-id={curChannel}>
        {templates.length === 1 && templates[0].title === 'Chat' ?
        <>
        <ChatMessagesList
            forceColors={colors}
            isUmpire={state.selectedForce === umpireForceTemplate.uniqid}
            messages={messages}
            templates={templates}
            curChannel={curChannel}
            privateMessage={privateMessage}
        />
        <div item xs={12} style={chat_input_grid}>
        <NewChatMessage isUmpire={state.selectedForce === umpireForceTemplate.uniqid} content={content} privateMessage={privateMessage} onSendMessage={() => this.onSendMessage()} onChange={(event,key) => this.onChange(event, key)} />
        </div>
        </>:
        <Fragment>
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
        </Fragment>}
        
      </div>
    );
  }
}

export default Channel;
