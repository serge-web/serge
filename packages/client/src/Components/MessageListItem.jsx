import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import Collapsible from "react-collapsible";
import MessagePreview from "../Components/MessagePreviewPlayerUi";
import "../scss/App.scss";

class MessageListItem extends Component {
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
    this.setState({
      collapsed: true,
    });
  };

  render() {

    let itemTitle;
    const { detail } = this.props;
    const { details, message, isOpen, hasBeenRead } = detail || {};
    // const expanded = !collapsed || isOpen;
    // const hasBeenRead = expiredStorage.getItem(this.props.userId + this.props.detail._id) === "read";
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
        <Collapsible
          trigger={
            <div className="message-title-wrap" style={{borderColor: dynamicBorderColor}}>
              <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size="1x" />
              <div className="message-title">{itemTitle}</div>
              <div className="info-wrap">
                <span className="info-body">{moment(details.timestamp).format("HH:mm")}</span>
                <Badge pill variant="dark">{details.from.role}</Badge>
                <Badge pill variant="secondary">{details.messageType}</Badge>
                {!hasBeenRead && <Badge pill variant="warning">Unread</Badge>}
              </div>
            </div>
          }
          transitionTime={200}
          easing={'ease-in-out'}
          open={isOpen}
          onOpening={this.open}
          onClosing={this.close}
          className={ !hasBeenRead ? 'message-item-unread' : '' }
        >
          <div key={`${this.props.key}-preview`} className="message-preview-player wrap"
           style={{borderColor: dynamicBorderColor}}><MessagePreview detail={message} from={details.from} privateMessage={details.privateMessage} /></div>
        </Collapsible>
      </React.Fragment>
    )
  }
}


export default MessageListItem;
