import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faClone, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  CREATE_MESSAGE_ROUTE,
  EDIT_MESSAGE_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE,
  MESSAGE_LIBRARY_ROUTE,
} from "../consts";
import SearchList from "../Components/SearchList";
import Link from "../Components/Link";
import MessagePreview from "../Components/MessagePreview";
import SidebarAdmin from "../Components/SidebarAdmin";
import {
  getAllMessages,
  duplicateMessage,
  getSingleMessage
} from "../ActionsAndReducers/dbMessages/messages_ActionCreators";
import { modalAction } from "../ActionsAndReducers/Modal/Modal_ActionCreators";
import { setSelectedSchema } from "../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators";
import "../scss/App.scss";

class MessageLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      messageList: this.props.messages.messages,
    };

    this.props.dispatch(getAllMessages());
  }

  componentWillMount() {
    this.props.dispatch(setSelectedSchema(""));
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.searchQuery.length === 0) {
      // only on page load
      this.setState({
        messageList: nextProps.messages.messages,
      });
    }

    if (nextProps.messages.messages.length !== this.props.messages.messages.length) setTimeout(this.filterMessages, 1); // setTimeout to wait one tick to allow messageList to update
  }

  setSelectedSchemaId = (item) => {
      this.props.dispatch(setSelectedSchema(item.schema._id));
      this.props.dispatch(getSingleMessage(item._id));
  };

  // event listener functions from the DOM will lose scope of this to the React Class unless stated as an arrow function
  // or this is bound to them within the constructor like.. this.filterMessages = this.filterMessages.bind(this);
  // arrow functions are es6 syntax and preferable if babel compiler can compile them. - They have the scope of where they're
  // defined unlike a normal function that has it's own scope.
  filterMessages = (input) => {
    let value = input ? input.target.value : this.state.searchQuery;

    let filteredMessages = this.props.messages.messages.filter(function(mes) {
          return mes.details.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

    this.setState({
      messageList: filteredMessages,
      searchQuery: value
    });
  };

  createSearchListSection() {
    return [
      <Link href={`${MESSAGE_CREATOR_BASE_ROUTE}${CREATE_MESSAGE_ROUTE}`} key="messages" class="link"><FontAwesomeIcon icon={faPlus} />Create new Message</Link>,
      <SearchList key="searchlist"
        listData={this.state.messageList}
        searchQuery={this.state.searchQuery}
        filter={this.filterMessages}
        selected={this.props.messages.messagePreviewId}
        setSelected={this.setSelectedSchemaId}
        placeholder={'Select template'}
      />
    ];
  }

  createMessagesActions() {
    return this.props.messages.messagePreviewId.length > 0 ?
      <>
        <Link class="link link--secondary" href={`${MESSAGE_CREATOR_BASE_ROUTE}${EDIT_MESSAGE_ROUTE}`}><FontAwesomeIcon icon={faPencilAlt} />Edit</Link>
        <span className="link link--secondary" onClick={this.duplicateMessage}><FontAwesomeIcon icon={faClone} />Duplicate</span>
        <span className="link link--secondary" onClick={this.deleteMessage}><FontAwesomeIcon icon={faTrash} />Delete</span>
      </>
      :
      null;
  }

  duplicateMessage = () => {
    this.props.dispatch(duplicateMessage(this.props.messages.messagePreviewId));
  };

  deleteMessage = () => {
    this.props.dispatch(modalAction.open("delete"));
  };

  render() {
    return (
      <div className="view-wrapper" id="umpire">
        <SidebarAdmin activeTab={MESSAGE_LIBRARY_ROUTE}/>
        <div className="flex-content flex-content--big flex-content--last contain-message-library">
          <h1>Message Library</h1>
          <div className="flex-content-wrapper">
            <div id="selection" className="flex-content">
              { this.createSearchListSection() }
            </div>
            <div id="preview" className="flex-content flex-content--big">
              <p className="heading--sml">Preview</p>
              <div className="message-preview">
                <MessagePreview detail={this.props.messages.messagePreview.details} />
              </div>
            </div>
            <div id="function" className="flex-content flex-content--sml">
              <p className="heading--sml">Actions</p>
              {this.createMessagesActions()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messages, umpireMenu }) => ({
  messages,
  umpireMenu
});

export default connect(mapStateToProps)(MessageLibrary);
