import React, { Component } from "react";
import { AdminMessage } from "@serge/components";
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
            messages.map((message, id) => {
              return (
                <div key={id}>
                  <AdminMessage force={name} message={message} />
                </div>
              );
            })
          }
      </>
    );
  }
}

export default MessagesListChatChannel;
