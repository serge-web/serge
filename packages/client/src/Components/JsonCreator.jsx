import React, { Component } from 'react';

import { connect } from "react-redux";

import {
  createMessage,
} from "../ActionsAndReducers/dbMessages/messages_ActionCreators";

import JSONEditor from '@json-editor/json-editor';
// necessary import for date
// import flatpickr from "flatpickr";

import '../scss/App.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";


class JsonCreator extends Component {

  constructor(props) {
    super(props);

    this.editor = null;
    this.editorPreviewRef = React.createRef();

    this.state = {
      selectedSchema: ''
    };
  }


  componentWillUpdate(nextProps, nextState, nextContext) {

    if (this.editor && nextProps.umpireMenu.selectedSchemaID !== this.props.umpireMenu.selectedSchemaID) {
      this.editor.destroy();
      this.editor = null;
    }

    if (
        nextProps.umpireMenu.selectedSchemaID.length > 0 &&
        nextProps.messageTypes &&
        nextProps.messageTypes.messages.length > 0
    ) {

      if (this.editor) return;

      this.editor = new JSONEditor(this.editorPreviewRef.current, {
        schema: nextProps.messageTypes.messages.find((mes) => mes._id === nextProps.umpireMenu.selectedSchemaID).details,
        theme: 'bootstrap4'
      });
    }

    if (
        nextProps.messages.messagePreviewId.length > 0 &&
        nextProps.messageTypes.messages.length > 0 &&
        !nextProps.disabled
    ) {

      const data = nextProps.messages.messages.find(function(mes) {
        return mes._id.toLowerCase().indexOf(nextProps.messages.messagePreviewId.toLowerCase()) > -1;
      });
      this.editor.setValue(data.details);
    }

    if (this.props.disabled && this.editor) {
      this.editor.disable();
    }
  }


  saveMessage = () => {
    let schema = this.props.messageTypes.messages.find((mes) => mes._id === this.props.umpireMenu.selectedSchemaID).details;

    this.props.dispatch(createMessage(this.editor.getValue(), {...schema, _id: this.props.umpireMenu.selectedSchemaID}));
  };


  render() {
    const SaveMessage = () => (
      this.editor ? (
        <div className="button-wrap">
          { !this.props.disabled ? <span onClick={this.saveMessage} className="link"><FontAwesomeIcon icon={faSave} />Save Message</span> : null }
        </div>
      ) : null
    );
    return (
      <>
        <SaveMessage />
        <div id="preview-editor" ref={this.editorPreviewRef}></div>
        <SaveMessage />
      </>
    );
  }
}

const mapStateToProps = ({ messages, messageTypes, selectedSchema, umpireMenu }) => ({
  messages,
  messageTypes,
  selectedSchema,
  umpireMenu
});

export default connect(mapStateToProps)(JsonCreator);
