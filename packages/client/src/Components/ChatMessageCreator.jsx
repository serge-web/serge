import React, { Component } from "react";
import { PlayerStateContext } from "../Store/PlayerUi";
import "@serge/themes/App.scss";
import { ChatMessagesList } from "@serge/components";
import { umpireForceTemplate } from "../consts";
import { saveMessage } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";

class ChatMessageCreator extends Component {
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

  onSendMessage = () => {
    const [ state ] = this.context;
    let curForce = state.allForces.find((force) => force.uniqid === state.selectedForce);
    let details = {
      channel: this.props.curChannel,
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
    const [ state ] = this.context;
    const { messages, curChannel } = this.props
    const {content, privateMessage} = this.state.message;
    const colors = state.channels[curChannel].forceColors
    const templates = state.channels[curChannel].templates
    
    return (
      <>
        <ChatMessagesList
            forceColors={colors}
            isUmpire={state.selectedForce === umpireForceTemplate.uniqid}
            messages={messages}
            templates={templates}
            curChannel={curChannel}
            onSendMessage={this.onSendMessage}
            onChange={this.onChange}
            content={content}
            privateMessage={privateMessage}
        />
      </>
    );
  }
}

export default ChatMessageCreator;