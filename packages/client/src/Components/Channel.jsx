import React, { Component } from "react";
import { umpireForceTemplate } from "../consts";
import MessageListItem from "../Components/MessageListItem";
import NewMessage from "./NewMessage";
import {
  closeMessage,
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class Channel extends Component {
  static contextType = PlayerStateContext;

  constructor() {
    super();
    this.state = {};
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

  render() {
    let curChannel = this.props.channelId;
    const [ state ] = this.context;

    return (
      <div className={this.state.channelTabClass} data-channel-id={curChannel}>
        <div className="forces-in-channel">
          {state.channels[curChannel].forceIcons.map((url, i) => <img key={`indicator${i}`} className="force-indicator role-icon" src={url} alt="" />)}
          <button name="mark as read" className="btn btn-action btn-action--secondary" onClick={this.markAllRead}>Mark all read</button>
        </div>

        <div className="message-list">

          {state.channels[curChannel].messages.map((item, i) => {

            if (item.infoType) {
              return <p className="turn-marker" key={`${item.gameTurn}-turnmarker`}>Turn {item.gameTurn}</p>
            }
            return (
              <div key={`${item._id}-messageitem`}>
                <MessageListItem
                  detail={item}
                  userId={`${state.currentWargame}-${state.selectedForce}-${state.selectedRole}`}
                  open={this.openMessage}
                  close={this.closeMessage}
                />
              </div>
            );
          })}
        </div>
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
