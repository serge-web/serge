import React, { Component } from "react";
import { expiredStorage } from "../consts";
import "../scss/App.scss";

class MessagesListRenderProp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages.map((message) => {
        let hasBeenRead = expiredStorage.getItem(`${this.props.userId}${message._id}`) === "read";
        return {
          ...message,
          open: false,
          hasBeenRead,
        }
      }),
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (!this.props.allMarkedRead && nextProps.allMarkedRead) {
      this.setState({
        messages: this.state.messages.map((message) => ({...message, hasBeenRead: true})),
      });
    }

    let nextMessagesInChannel = nextProps.messages.map((message) => ({ ...message, open: false, hasBeenRead: false }));

    if (
      this.props.messages.length !== 0 &&
      this.props.messages.length < nextMessagesInChannel.length
    ) {

      let newMessages = nextMessagesInChannel;

      let messages = this.state.messages;
      messages.unshift(newMessages[0]);

      this.setState({
        messages,
      });
    }

    if (
      (this.props.messages.length === 0) ||
      (this.props.curChannel !== nextProps.curChannel)
    ) {

      this.setState({
        messages: nextProps.messages.map((message) => {
          let hasBeenRead = expiredStorage.getItem(`${this.props.userId}${message._id}`) === "read";
          return {
            ...message,
            open: false,
            hasBeenRead,
          };
        }),
      });
    }
  }

  render() {
    return (
      <div className="message-list">
        {this.props.render(this.state.messages)}
      </div>
    );
  }
}

export default MessagesListRenderProp;
